import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Local screenshot upload",
  description: "Take screenshots of the video stream and upload images to third-party cloud storage."
};
export let _markdown = `

To meet the needs of video content supervision, Agora RTC SDK enables you to take screenshots of the video stream in a channel and then upload these images to third-party cloud storage.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;web&#x22;,&#x22;windows&#x22;,&#x22;electron&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    This page shows you how to enable screenshot uploads on your app and handle screenshot upload callbacks.

    <CalloutContainer type="info">
      <CalloutDescription>
        Local screenshot upload is a paid service. For billing details, refer to [Pricing](/en/realtime-media/rtc/reference/pricing).
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech]

    When you enable screenshot upload, you set the interval between screenshots. After each interval, RTC SDK takes a screenshot of the video stream sent by local users, and uploads the image to Agora SDRTN®. Agora SDRTN® uploads each screenshot to your third-party cloud storage and sends a callback notification to your server in the form of an \`HTTPS\` request.

    **Screenshot upload**

    ![image](https://assets-docs.agora.io/images/video-sdk/screenshot-upload.svg)

    ## Prerequisites [#prerequisites]

    Before implementing the Agora local screenshot upload feature, take the following steps:

    1. **Activate local screenshot upload service**

       In [Agora Console](https://console.agora.io), select **RTC Services** from the sidebar, then locate the **Video Screenshot Upload** card and turn on its toggle. Select the settings icon on the card to open its configuration panel.

       ![Enable screenshot upload](https://assets-docs.agora.io/images/console/enable-screenshot-upload.png)

    2. **Configure third-party cloud storage**

       Select the settings icon on the **Video Screenshot Upload** card to open its configuration panel.

       ![Screenshot upload config](https://assets-docs.agora.io/images/console/screenshot-upload-configuration.png)

       <CalloutContainer type="warning">
         <CalloutDescription>
           Once you turn on **Enable Video Screenshot Upload**, you can't disable it.
         </CalloutDescription>
       </CalloutContainer>

       <CalloutContainer type="info">
         <CalloutDescription>
           Currently, the Agora local screenshot upload service only supports Amazon S3 as the third-party cloud storage provider. If you want to use a different provider, [contact](mailto\\:support@agora.io) technical support.
         </CalloutDescription>
       </CalloutContainer>

       Fill in the following information:

       * **Storage**: The third-party cloud storage provider. Fixed to AWS.
       * **Callback URL**: The server address to receive callback notifications of local screenshot upload results.
       * **Endpoint**: Specify the access domain (Endpoint) of the bucket. See [AWS Official Documentation](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for details.
       * **Region**: The data center region setting for third-party cloud storage. See [AWS Official Documentation](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for details.
       * **Access key**: String type, the access key of the third-party cloud storage. Best practice is to provide a write-only access key.
       * **Secret key**: String type, the secret key of the third-party cloud storage.
       * **Bucket Name**: String type, the bucket name of the third-party cloud storage. The bucket name must comply with the naming rules of the corresponding third-party cloud storage service.
       * **Filename Prefix**: (Optional) JSON Array, an array composed of multiple strings, indicating the storage location of screenshots in the third-party cloud storage. For example, if \`fileNamePrefix\` = \`["directory1","directory2"]\`, the prefix \`directory1/directory2/\` will be added to the screenshot filename, that is, \`directory1/directory2/xxx.jpg\`. The prefix length, including slashes, must not exceed 128 characters. The string should not contain symbols such as slashes, underscores, parentheses, and so on. The supported character set is as follows:

         * 26 lowercase English letters a-z
         * 26 uppercase English letters A-Z
         * 10 digits 0-9

       **Sample configuration**

       * Storage: AWS
       * Callback URL: \`https://webhook.site/2e75da2d-xxxx-xxxx-xxx-a0ef44a5259d\`
       * Endpoint: \`s3.cn-north-1.amazonaws.com.cn\`
       * Region: \`cn-north-1\`
       * Access key: \`12345678\`
       * Secret key: \`abcd123\`
       * Bucket Name: \`test-artifacts\`
       * Filename Prefix: \`test\`

    3. **Integrate RTC SDK**

       Integrate the RTC SDK (including the local screenshot upload dynamic library) into your project, join a channel, and publish a video stream. See [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) for details.

    ## Implement local screenshot upload [#implement-local-screenshot-upload]

    You enable screenshot upload in your Video Calling client and handle the notification callback from Agora on your callback server.

    ### Enable screenshot upload [#enable-screenshot-upload]

    Call the \`enableContentInspect\` method to enable the local screenshot upload feature. After successfully enabling the feature, the SDK will capture screenshots at the specified frequency and upload them to the Agora cloud server. To implement this logic, refer to the following code:

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
        ContentInspectConfig config = new ContentInspectConfig();
        config.extraInfo = "YourExtraInfo";
        config.moduleCount = 1;
        // The type of the feature module is local screenshot upload
        config.modules[0].type = ContentInspectConfig.CONTENT_INSPECT_TYPE_SUPERVISE;
        // The frequency of local screenshot upload is once every 2 seconds
        config.modules[0].interval = 2;
        mRtcEngine.enableContentInspect(true, config);
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="kotlin">
        \`\`\`kotlin
        val config = ContentInspectConfig()
        config.extraInfo = "YourExtraInfo"
        config.moduleCount = 1
        // The type of the feature module is local screenshot upload
        config.modules[0].type = ContentInspectConfig.CONTENT_INSPECT_TYPE_SUPERVISE
        // The frequency of local screenshot upload is once every 2 seconds
        config.modules[0].interval = 2
        mRtcEngine.enableContentInspect(true, config)
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ### HTTP notification callback [#http-notification-callback]

    After a screenshot is successfully uploaded to the Agora SDRTN®, Agora sends a message notification callback to your application server in the form of an \`HTTPS\` \`POST\` request. The data format is \`JSON\`, and the character encoding is \`UTF-8\`.

    Upon receiving the message notification, your application server must respond with status code \`200\`. The expected response body format is \`JSON\`. In any of the following cases, the notification is considered to have failed:

    * No response is received from your server within 5 seconds after sending the message notification.
    * The \`HTTP\` status code of the response is not \`200\`, or the response body format is not \`JSON\`.

    The Agora service immediately retries after the first notification failure, and sends the message three times in total.

    #### Request header [#request-header]

    | Field Name     | Value                            |
    | :------------- | :------------------------------- |
    | \`Content-Type\` | \`application/json;charset=utf-8\` |

    #### Request body [#request-body]

    The request body is a JSON Object, containing the following fields:

    | Field           | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | :-------------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`requestId\`     | String      | Callback notification ID, identifying an event notification from the Agora business server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | \`callbackParam\` | JSON Object | Custom fields passed in the callback, currently includes the \`cname\` field, representing the channel name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
    | \`callbackData\`  | String      | String data passed through by the SDK local screenshot upload module.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
    | \`checksum\`      | String      | MD5 value calculated from the parameters \`callbackAddr\`, \`code\`, \`object\`, and \`requestId\`. Used to verify whether this callback notification comes from the local screenshot upload service.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | \`object\`        | String      | Name of the screenshot file. The naming convention for this file is: \`//___uid_s___uid_e__utc.jpg\`. The meanings of the fields in the filename are as follows: \`: Screenshot ID, a unique identifier for a screenshot.\`: Channel name to which the user being screenshotted belongs.\`: The user ID set when joining the channel.\`: File type, supports only \`video\`.\\\`\\\`: Unix timestamp of this screenshot. UTC time, consists of year, month, day, hour, minute, second, and millisecond. For example, if \`utc\` is equal to \`20190611073246073\`, it represents the start time of this slice file as UTC June 11, 2019, 7:32:46.073 AM. |
    | \`code\`          | Number      | Status code of this screenshot. \`200\` indicates that the screenshot is completed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | \`msg\`           | String      | Status of this screenshot. \`"Supervise complete"\` indicates that the screenshot is completed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | \`channelName\`   | String      | Channel name to which the user being screenshotted belongs. Consistent with \`object.cname\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | \`userId\`        | String      | User ID of the user being screenshotted. Consistent with \`object.uid\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
    | \`timestamp\`     | Int         | Unix timestamp (milliseconds) of this screenshot. UTC time, consistent with \`object.utc\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

    **Request Example**

    \`\`\`json
    {
      "requestId": "38f8e3cfdcXXXXXXXXX1ceba380d7e1a_1652693284_b5813fe2ae4fa5cdfe5abd8fef82526f",
      "callbackParam": {
        "cname": "httpClient463224"
      },
      "callbackData": "",
      "checksum": "75ee988XXXXXXc2ad4ec2aef58f178fd8",
      "object": "test/20201216/38f8e3cfdc474cd56fc1ceba380d7e1a_httpClient463224__uid_s_91__uid_e_video_20200413081128672.jpg",
      "code": 200,
      "msg": "Supervise complete",
      "channelName": "httpClient463224",
      "userId": "91",
      "timestamp": 20190611073246070
    }
    \`\`\`

    #### Response [#response]

    After receiving the message notification, your application server is expected to respond. The response package format is JSON. In any of the following cases, the Agora service considers the notification as failed:

    * After sending a message notification, no response is received from your server within 5 seconds.
    * The HTTP status code of the response is not \`200\`, or the response body format is not JSON.

    The Agora service immediately retries and sends the message notification again after the first notification fails. It attempts to notify you three times in total.

    ## Reference [#reference]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Pricing [#pricing]

    Agora charges for local screenshot upload based on two metrics:

    * **Screenshot fee**
    * **QPS overage fee** (queries per second)

    At the end of each month, Agora calculates:

    * The total number of screenshots generated
    * The monthly peak QPS if it exceeds the free quota

    **Billing formula:**

    \`\`\`md
    Monthly fee = (Number of screenshots - free quota) × Screenshot unit price
          + (Monthly peak QPS - free QPS) × QPS overage unit price
    \`\`\`

    | Billing Type    | Unit Price              | Discount Policy                                                                                   |
    | --------------- | ----------------------- | ------------------------------------------------------------------------------------------------- |
    | Screenshot Fee  | $0.30 per 10,000 images | First 10,000 images per month are free                                                            |
    | QPS Overage Fee | $1.5 per QPS            | Includes 500 QPS per month:- ≤ 500 QPS: No charge

    - > 500 QPS: Charged based on monthly peak QPS |

    * **Example 1:**
      A project generates **910,000 screenshots** in one month. Peak QPS = **100**

      * Screenshots: 910,000 - 10,000 (free) = 900,000 billable images
      * Screenshot fee: 900,000 ÷ 10,000 × $0.30 = **$27.00**
      * QPS fee: 100 ≤ 500 (free), so **$0**
      * **Total fee = $27.00**

    * **Example 2:**
      A project generates **2.91 million screenshots** in one month. Peak QPS = **600**

      * Screenshots: 2,910,000 - 10,000 (free) = 2,900,000 billable images
      * Screenshot fee: 2,900,000 ÷ 10,000 × $0.30 = **$87.00**
      * QPS fee: (600 - 500) × $1.5 = **$150.00**
      * **Total fee = $237.00**

    ### API reference [#api-reference]

    * [\`enableContentInspect\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_enablecontentinspect)

    ### local screenshot upload dynamic library [#local-screenshot-upload-dynamic-library]

    You can find details about the name of the local screenshot upload dynamic library and the increase in app size after integration in [App size optimization](/en/realtime-media/rtc/build/optimize-and-operate/app-size-optimization).

    ### HTTP status codes [#http-status-codes]

    The HTTP status codes for the application server responses are as follows:

    | Status Code | Description                                                                                                                         |
    | :---------- | :---------------------------------------------------------------------------------------------------------------------------------- |
    | \`200\`       | Successful request.                                                                                                                 |
    | \`201\`       | Successful request and creation of a new resource.                                                                                  |
    | \`206\`       | No user streamed during the entire screenshot process, or some screenshot files were not uploaded to the third-party cloud storage. |
    | \`400\`       | Syntax error in the request (For example, parameter error), and the server cannot understand it.                                    |
    | \`401\`       | Unauthorized (App ID or Customer Certificate mismatch).                                                                             |
    | \`404\`       | The server cannot find the requested resource (webpage).                                                                            |
    | \`500\`       | Internal server error, unable to complete the request.                                                                              |
    | \`504\`       | Internal server error. The server acting as a gateway or proxy did not receive a timely response from the upstream server.          |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    This page shows you how to enable screenshot uploads on your app and handle screenshot upload callbacks.

    <CalloutContainer type="info">
      <CalloutDescription>
        Local screenshot upload is a paid service. For billing details, refer to [Pricing](/en/realtime-media/rtc/reference/pricing).
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-1]

    When you enable screenshot upload, you set the interval between screenshots. After each interval, RTC SDK takes a screenshot of the video stream sent by local users, and uploads the image to Agora SDRTN®. Agora SDRTN® uploads each screenshot to your third-party cloud storage and sends a callback notification to your server in the form of an \`HTTPS\` request.

    **Screenshot upload**

    ![image](https://assets-docs.agora.io/images/video-sdk/screenshot-upload.svg)

    ## Prerequisites [#prerequisites-1]

    Before implementing the Agora local screenshot upload feature, take the following steps:

    1. **Activate local screenshot upload service**

       In [Agora Console](https://console.agora.io), select **RTC Services** from the sidebar, then locate the **Video Screenshot Upload** card and turn on its toggle. Select the settings icon on the card to open its configuration panel.

       ![Enable screenshot upload](https://assets-docs.agora.io/images/console/enable-screenshot-upload.png)

    2. **Configure third-party cloud storage**

       Select the settings icon on the **Video Screenshot Upload** card to open its configuration panel.

       ![Screenshot upload config](https://assets-docs.agora.io/images/console/screenshot-upload-configuration.png)

       <CalloutContainer type="warning">
         <CalloutDescription>
           Once you turn on **Enable Video Screenshot Upload**, you can't disable it.
         </CalloutDescription>
       </CalloutContainer>

       <CalloutContainer type="info">
         <CalloutDescription>
           Currently, the Agora local screenshot upload service only supports Amazon S3 as the third-party cloud storage provider. If you want to use a different provider, [contact](mailto\\:support@agora.io) technical support.
         </CalloutDescription>
       </CalloutContainer>

       Fill in the following information:

       * **Storage**: The third-party cloud storage provider. Fixed to AWS.
       * **Callback URL**: The server address to receive callback notifications of local screenshot upload results.
       * **Endpoint**: Specify the access domain (Endpoint) of the bucket. See [AWS Official Documentation](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for details.
       * **Region**: The data center region setting for third-party cloud storage. See [AWS Official Documentation](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for details.
       * **Access key**: String type, the access key of the third-party cloud storage. Best practice is to provide a write-only access key.
       * **Secret key**: String type, the secret key of the third-party cloud storage.
       * **Bucket Name**: String type, the bucket name of the third-party cloud storage. The bucket name must comply with the naming rules of the corresponding third-party cloud storage service.
       * **Filename Prefix**: (Optional) JSON Array, an array composed of multiple strings, indicating the storage location of screenshots in the third-party cloud storage. For example, if \`fileNamePrefix\` = \`["directory1","directory2"]\`, the prefix \`directory1/directory2/\` will be added to the screenshot filename, that is, \`directory1/directory2/xxx.jpg\`. The prefix length, including slashes, must not exceed 128 characters. The string should not contain symbols such as slashes, underscores, parentheses, and so on. The supported character set is as follows:

         * 26 lowercase English letters a-z
         * 26 uppercase English letters A-Z
         * 10 digits 0-9

       **Sample configuration**

       * Storage: AWS
       * Callback URL: \`https://webhook.site/2e75da2d-xxxx-xxxx-xxx-a0ef44a5259d\`
       * Endpoint: \`s3.cn-north-1.amazonaws.com.cn\`
       * Region: \`cn-north-1\`
       * Access key: \`12345678\`
       * Secret key: \`abcd123\`
       * Bucket Name: \`test-artifacts\`
       * Filename Prefix: \`test\`

    3. **Integrate RTC SDK**

       Integrate the RTC SDK (including the local screenshot upload dynamic library) into your project, join a channel, and publish a video stream. See [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) for details.

    ## Implement local screenshot upload [#implement-local-screenshot-upload-1]

    You enable screenshot upload in your Video Calling client and handle the notification callback from Agora on your callback server.

    ### Enable screenshot upload [#enable-screenshot-upload-1]

    Call the \`enableContentInspect\` method to enable the local screenshot upload feature. After successfully enabling the feature, the SDK will capture screenshots at the specified frequency and upload them to the Agora cloud server. To implement this logic, refer to the following code:

    \`\`\`swift
    let inspectExtraConfig = AgoraContentInspectConfig()
    inspectExtraConfig.extraInfo = "YourExtraInfo"
    var modules = [AgoraContentInspectModule]()
    let module1 = AgoraContentInspectModule()
    // The type of the feature module is local screenshot upload
    module1.type = .supervise
    // The frequency of local screenshot upload is once every 2 seconds
    module1.interval = 2
    modules.append(module1)
    inspectExtraConfig.modules = modules
    agoraKit.enableContentInspect(true, config:inspectExtraConfig)
    \`\`\`

    ### HTTP notification callback [#http-notification-callback-1]

    After a screenshot is successfully uploaded to the Agora SDRTN®, Agora sends a message notification callback to your application server in the form of an \`HTTPS\` \`POST\` request. The data format is \`JSON\`, and the character encoding is \`UTF-8\`.

    Upon receiving the message notification, your application server must respond with status code \`200\`. The expected response body format is \`JSON\`. In any of the following cases, the notification is considered to have failed:

    * No response is received from your server within 5 seconds after sending the message notification.
    * The \`HTTP\` status code of the response is not \`200\`, or the response body format is not \`JSON\`.

    The Agora service immediately retries after the first notification failure, and sends the message three times in total.

    #### Request header [#request-header-1]

    | Field Name     | Value                            |
    | :------------- | :------------------------------- |
    | \`Content-Type\` | \`application/json;charset=utf-8\` |

    #### Request body [#request-body-1]

    The request body is a JSON Object, containing the following fields:

    | Field           | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | :-------------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`requestId\`     | String      | Callback notification ID, identifying an event notification from the Agora business server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | \`callbackParam\` | JSON Object | Custom fields passed in the callback, currently includes the \`cname\` field, representing the channel name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
    | \`callbackData\`  | String      | String data passed through by the SDK local screenshot upload module.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
    | \`checksum\`      | String      | MD5 value calculated from the parameters \`callbackAddr\`, \`code\`, \`object\`, and \`requestId\`. Used to verify whether this callback notification comes from the local screenshot upload service.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | \`object\`        | String      | Name of the screenshot file. The naming convention for this file is: \`//___uid_s___uid_e__utc.jpg\`. The meanings of the fields in the filename are as follows: \`: Screenshot ID, a unique identifier for a screenshot.\`: Channel name to which the user being screenshotted belongs.\`: The user ID set when joining the channel.\`: File type, supports only \`video\`.\\\`\\\`: Unix timestamp of this screenshot. UTC time, consists of year, month, day, hour, minute, second, and millisecond. For example, if \`utc\` is equal to \`20190611073246073\`, it represents the start time of this slice file as UTC June 11, 2019, 7:32:46.073 AM. |
    | \`code\`          | Number      | Status code of this screenshot. \`200\` indicates that the screenshot is completed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | \`msg\`           | String      | Status of this screenshot. \`"Supervise complete"\` indicates that the screenshot is completed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | \`channelName\`   | String      | Channel name to which the user being screenshotted belongs. Consistent with \`object.cname\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | \`userId\`        | String      | User ID of the user being screenshotted. Consistent with \`object.uid\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
    | \`timestamp\`     | Int         | Unix timestamp (milliseconds) of this screenshot. UTC time, consistent with \`object.utc\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

    **Request Example**

    \`\`\`json
    {
      "requestId": "38f8e3cfdcXXXXXXXXX1ceba380d7e1a_1652693284_b5813fe2ae4fa5cdfe5abd8fef82526f",
      "callbackParam": {
        "cname": "httpClient463224"
      },
      "callbackData": "",
      "checksum": "75ee988XXXXXXc2ad4ec2aef58f178fd8",
      "object": "test/20201216/38f8e3cfdc474cd56fc1ceba380d7e1a_httpClient463224__uid_s_91__uid_e_video_20200413081128672.jpg",
      "code": 200,
      "msg": "Supervise complete",
      "channelName": "httpClient463224",
      "userId": "91",
      "timestamp": 20190611073246070
    }
    \`\`\`

    #### Response [#response-1]

    After receiving the message notification, your application server is expected to respond. The response package format is JSON. In any of the following cases, the Agora service considers the notification as failed:

    * After sending a message notification, no response is received from your server within 5 seconds.
    * The HTTP status code of the response is not \`200\`, or the response body format is not JSON.

    The Agora service immediately retries and sends the message notification again after the first notification fails. It attempts to notify you three times in total.

    ## Reference [#reference-1]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Pricing [#pricing-1]

    Agora charges for local screenshot upload based on two metrics:

    * **Screenshot fee**
    * **QPS overage fee** (queries per second)

    At the end of each month, Agora calculates:

    * The total number of screenshots generated
    * The monthly peak QPS if it exceeds the free quota

    **Billing formula:**

    \`\`\`md
    Monthly fee = (Number of screenshots - free quota) × Screenshot unit price
          + (Monthly peak QPS - free QPS) × QPS overage unit price
    \`\`\`

    | Billing Type    | Unit Price              | Discount Policy                                                                                   |
    | --------------- | ----------------------- | ------------------------------------------------------------------------------------------------- |
    | Screenshot Fee  | $0.30 per 10,000 images | First 10,000 images per month are free                                                            |
    | QPS Overage Fee | $1.5 per QPS            | Includes 500 QPS per month:- ≤ 500 QPS: No charge

    - > 500 QPS: Charged based on monthly peak QPS |

    * **Example 1:**
      A project generates **910,000 screenshots** in one month. Peak QPS = **100**

      * Screenshots: 910,000 - 10,000 (free) = 900,000 billable images
      * Screenshot fee: 900,000 ÷ 10,000 × $0.30 = **$27.00**
      * QPS fee: 100 ≤ 500 (free), so **$0**
      * **Total fee = $27.00**

    * **Example 2:**
      A project generates **2.91 million screenshots** in one month. Peak QPS = **600**

      * Screenshots: 2,910,000 - 10,000 (free) = 2,900,000 billable images
      * Screenshot fee: 2,900,000 ÷ 10,000 × $0.30 = **$87.00**
      * QPS fee: (600 - 500) × $1.5 = **$150.00**
      * **Total fee = $237.00**

    ### API reference [#api-reference-1]

    * [\`enableContentInspect(_:config:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enablecontentinspect\\(_\\:config:\\))

    ### local screenshot upload dynamic library [#local-screenshot-upload-dynamic-library-1]

    You can find details about the name of the local screenshot upload dynamic library and the increase in app size after integration in [App size optimization](/en/realtime-media/rtc/build/optimize-and-operate/app-size-optimization).

    ### HTTP status codes [#http-status-codes-1]

    The HTTP status codes for the application server responses are as follows:

    | Status Code | Description                                                                                                                         |
    | :---------- | :---------------------------------------------------------------------------------------------------------------------------------- |
    | \`200\`       | Successful request.                                                                                                                 |
    | \`201\`       | Successful request and creation of a new resource.                                                                                  |
    | \`206\`       | No user streamed during the entire screenshot process, or some screenshot files were not uploaded to the third-party cloud storage. |
    | \`400\`       | Syntax error in the request (For example, parameter error), and the server cannot understand it.                                    |
    | \`401\`       | Unauthorized (App ID or Customer Certificate mismatch).                                                                             |
    | \`404\`       | The server cannot find the requested resource (webpage).                                                                            |
    | \`500\`       | Internal server error, unable to complete the request.                                                                              |
    | \`504\`       | Internal server error. The server acting as a gateway or proxy did not receive a timely response from the upstream server.          |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    This page shows you how to enable screenshot uploads on your app and handle screenshot upload callbacks.

    <CalloutContainer type="info">
      <CalloutDescription>
        Local screenshot upload is a paid service. For billing details, refer to [Pricing](/en/realtime-media/rtc/reference/pricing).
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-2]

    When you enable screenshot upload, you set the interval between screenshots. After each interval, RTC SDK takes a screenshot of the video stream sent by local users, and uploads the image to Agora SDRTN®. Agora SDRTN® uploads each screenshot to your third-party cloud storage and sends a callback notification to your server in the form of an \`HTTPS\` request.

    **Screenshot upload**

    ![image](https://assets-docs.agora.io/images/video-sdk/screenshot-upload.svg)

    ## Prerequisites [#prerequisites-2]

    Before implementing the Agora local screenshot upload feature, take the following steps:

    1. **Activate local screenshot upload service**

       In [Agora Console](https://console.agora.io), select **RTC Services** from the sidebar, then locate the **Video Screenshot Upload** card and turn on its toggle. Select the settings icon on the card to open its configuration panel.

       ![Enable screenshot upload](https://assets-docs.agora.io/images/console/enable-screenshot-upload.png)

    2. **Configure third-party cloud storage**

       Select the settings icon on the **Video Screenshot Upload** card to open its configuration panel.

       ![Screenshot upload config](https://assets-docs.agora.io/images/console/screenshot-upload-configuration.png)

       <CalloutContainer type="warning">
         <CalloutDescription>
           Once you turn on **Enable Video Screenshot Upload**, you can't disable it.
         </CalloutDescription>
       </CalloutContainer>

       <CalloutContainer type="info">
         <CalloutDescription>
           Currently, the Agora local screenshot upload service only supports Amazon S3 as the third-party cloud storage provider. If you want to use a different provider, [contact](mailto\\:support@agora.io) technical support.
         </CalloutDescription>
       </CalloutContainer>

       Fill in the following information:

       * **Storage**: The third-party cloud storage provider. Fixed to AWS.
       * **Callback URL**: The server address to receive callback notifications of local screenshot upload results.
       * **Endpoint**: Specify the access domain (Endpoint) of the bucket. See [AWS Official Documentation](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for details.
       * **Region**: The data center region setting for third-party cloud storage. See [AWS Official Documentation](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for details.
       * **Access key**: String type, the access key of the third-party cloud storage. Best practice is to provide a write-only access key.
       * **Secret key**: String type, the secret key of the third-party cloud storage.
       * **Bucket Name**: String type, the bucket name of the third-party cloud storage. The bucket name must comply with the naming rules of the corresponding third-party cloud storage service.
       * **Filename Prefix**: (Optional) JSON Array, an array composed of multiple strings, indicating the storage location of screenshots in the third-party cloud storage. For example, if \`fileNamePrefix\` = \`["directory1","directory2"]\`, the prefix \`directory1/directory2/\` will be added to the screenshot filename, that is, \`directory1/directory2/xxx.jpg\`. The prefix length, including slashes, must not exceed 128 characters. The string should not contain symbols such as slashes, underscores, parentheses, and so on. The supported character set is as follows:

         * 26 lowercase English letters a-z
         * 26 uppercase English letters A-Z
         * 10 digits 0-9

       **Sample configuration**

       * Storage: AWS
       * Callback URL: \`https://webhook.site/2e75da2d-xxxx-xxxx-xxx-a0ef44a5259d\`
       * Endpoint: \`s3.cn-north-1.amazonaws.com.cn\`
       * Region: \`cn-north-1\`
       * Access key: \`12345678\`
       * Secret key: \`abcd123\`
       * Bucket Name: \`test-artifacts\`
       * Filename Prefix: \`test\`

    3. **Integrate RTC SDK**

       Integrate the RTC SDK (including the local screenshot upload dynamic library) into your project, join a channel, and publish a video stream. See [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) for details.

    ## Implement local screenshot upload [#implement-local-screenshot-upload-2]

    You enable screenshot upload in your Video Calling client and handle the notification callback from Agora on your callback server.

    ### Enable screenshot upload [#enable-screenshot-upload-2]

    Call the \`enableContentInspect\` method to enable the local screenshot upload feature. After successfully enabling the feature, the SDK will capture screenshots at the specified frequency and upload them to the Agora cloud server. To implement this logic, refer to the following code:

    \`\`\`swift
    let inspectExtraConfig = AgoraContentInspectConfig()
    inspectExtraConfig.extraInfo = "YourExtraInfo"
    var modules = [AgoraContentInspectModule]()
    let module1 = AgoraContentInspectModule()
    // The type of the feature module is local screenshot upload
    module1.type = .supervise
    // The frequency of local screenshot upload is once every 2 seconds
    module1.interval = 2
    modules.append(module1)
    inspectExtraConfig.modules = modules
    agoraKit.enableContentInspect(true, config:inspectExtraConfig)
    \`\`\`

    ### HTTP notification callback [#http-notification-callback-2]

    After a screenshot is successfully uploaded to the Agora SDRTN®, Agora sends a message notification callback to your application server in the form of an \`HTTPS\` \`POST\` request. The data format is \`JSON\`, and the character encoding is \`UTF-8\`.

    Upon receiving the message notification, your application server must respond with status code \`200\`. The expected response body format is \`JSON\`. In any of the following cases, the notification is considered to have failed:

    * No response is received from your server within 5 seconds after sending the message notification.
    * The \`HTTP\` status code of the response is not \`200\`, or the response body format is not \`JSON\`.

    The Agora service immediately retries after the first notification failure, and sends the message three times in total.

    #### Request header [#request-header-2]

    | Field Name     | Value                            |
    | :------------- | :------------------------------- |
    | \`Content-Type\` | \`application/json;charset=utf-8\` |

    #### Request body [#request-body-2]

    The request body is a JSON Object, containing the following fields:

    | Field           | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | :-------------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`requestId\`     | String      | Callback notification ID, identifying an event notification from the Agora business server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | \`callbackParam\` | JSON Object | Custom fields passed in the callback, currently includes the \`cname\` field, representing the channel name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
    | \`callbackData\`  | String      | String data passed through by the SDK local screenshot upload module.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
    | \`checksum\`      | String      | MD5 value calculated from the parameters \`callbackAddr\`, \`code\`, \`object\`, and \`requestId\`. Used to verify whether this callback notification comes from the local screenshot upload service.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | \`object\`        | String      | Name of the screenshot file. The naming convention for this file is: \`//___uid_s___uid_e__utc.jpg\`. The meanings of the fields in the filename are as follows: \`: Screenshot ID, a unique identifier for a screenshot.\`: Channel name to which the user being screenshotted belongs.\`: The user ID set when joining the channel.\`: File type, supports only \`video\`.\\\`\\\`: Unix timestamp of this screenshot. UTC time, consists of year, month, day, hour, minute, second, and millisecond. For example, if \`utc\` is equal to \`20190611073246073\`, it represents the start time of this slice file as UTC June 11, 2019, 7:32:46.073 AM. |
    | \`code\`          | Number      | Status code of this screenshot. \`200\` indicates that the screenshot is completed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | \`msg\`           | String      | Status of this screenshot. \`"Supervise complete"\` indicates that the screenshot is completed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | \`channelName\`   | String      | Channel name to which the user being screenshotted belongs. Consistent with \`object.cname\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | \`userId\`        | String      | User ID of the user being screenshotted. Consistent with \`object.uid\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
    | \`timestamp\`     | Int         | Unix timestamp (milliseconds) of this screenshot. UTC time, consistent with \`object.utc\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

    **Request Example**

    \`\`\`json
    {
      "requestId": "38f8e3cfdcXXXXXXXXX1ceba380d7e1a_1652693284_b5813fe2ae4fa5cdfe5abd8fef82526f",
      "callbackParam": {
        "cname": "httpClient463224"
      },
      "callbackData": "",
      "checksum": "75ee988XXXXXXc2ad4ec2aef58f178fd8",
      "object": "test/20201216/38f8e3cfdc474cd56fc1ceba380d7e1a_httpClient463224__uid_s_91__uid_e_video_20200413081128672.jpg",
      "code": 200,
      "msg": "Supervise complete",
      "channelName": "httpClient463224",
      "userId": "91",
      "timestamp": 20190611073246070
    }
    \`\`\`

    #### Response [#response-2]

    After receiving the message notification, your application server is expected to respond. The response package format is JSON. In any of the following cases, the Agora service considers the notification as failed:

    * After sending a message notification, no response is received from your server within 5 seconds.
    * The HTTP status code of the response is not \`200\`, or the response body format is not JSON.

    The Agora service immediately retries and sends the message notification again after the first notification fails. It attempts to notify you three times in total.

    ## Reference [#reference-2]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Pricing [#pricing-2]

    Agora charges for local screenshot upload based on two metrics:

    * **Screenshot fee**
    * **QPS overage fee** (queries per second)

    At the end of each month, Agora calculates:

    * The total number of screenshots generated
    * The monthly peak QPS if it exceeds the free quota

    **Billing formula:**

    \`\`\`md
    Monthly fee = (Number of screenshots - free quota) × Screenshot unit price
          + (Monthly peak QPS - free QPS) × QPS overage unit price
    \`\`\`

    | Billing Type    | Unit Price              | Discount Policy                                                                                   |
    | --------------- | ----------------------- | ------------------------------------------------------------------------------------------------- |
    | Screenshot Fee  | $0.30 per 10,000 images | First 10,000 images per month are free                                                            |
    | QPS Overage Fee | $1.5 per QPS            | Includes 500 QPS per month:- ≤ 500 QPS: No charge

    - > 500 QPS: Charged based on monthly peak QPS |

    * **Example 1:**
      A project generates **910,000 screenshots** in one month. Peak QPS = **100**

      * Screenshots: 910,000 - 10,000 (free) = 900,000 billable images
      * Screenshot fee: 900,000 ÷ 10,000 × $0.30 = **$27.00**
      * QPS fee: 100 ≤ 500 (free), so **$0**
      * **Total fee = $27.00**

    * **Example 2:**
      A project generates **2.91 million screenshots** in one month. Peak QPS = **600**

      * Screenshots: 2,910,000 - 10,000 (free) = 2,900,000 billable images
      * Screenshot fee: 2,900,000 ÷ 10,000 × $0.30 = **$87.00**
      * QPS fee: (600 - 500) × $1.5 = **$150.00**
      * **Total fee = $237.00**

    ### API reference [#api-reference-2]

    * [\`enableContentInspect(_:config:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/enablecontentinspect\\(_\\:config:\\))

    ### local screenshot upload dynamic library [#local-screenshot-upload-dynamic-library-2]

    You can find details about the name of the local screenshot upload dynamic library and the increase in app size after integration in [App size optimization](/en/realtime-media/rtc/build/optimize-and-operate/app-size-optimization).

    ### HTTP status codes [#http-status-codes-2]

    The HTTP status codes for the application server responses are as follows:

    | Status Code | Description                                                                                                                         |
    | :---------- | :---------------------------------------------------------------------------------------------------------------------------------- |
    | \`200\`       | Successful request.                                                                                                                 |
    | \`201\`       | Successful request and creation of a new resource.                                                                                  |
    | \`206\`       | No user streamed during the entire screenshot process, or some screenshot files were not uploaded to the third-party cloud storage. |
    | \`400\`       | Syntax error in the request (For example, parameter error), and the server cannot understand it.                                    |
    | \`401\`       | Unauthorized (App ID or Customer Certificate mismatch).                                                                             |
    | \`404\`       | The server cannot find the requested resource (webpage).                                                                            |
    | \`500\`       | Internal server error, unable to complete the request.                                                                              |
    | \`504\`       | Internal server error. The server acting as a gateway or proxy did not receive a timely response from the upstream server.          |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    This page shows you how to enable screenshot uploads on your app and handle screenshot upload callbacks.

    <CalloutContainer type="info">
      <CalloutDescription>
        Local screenshot upload is a paid service. For billing details, refer to [Pricing](/en/realtime-media/rtc/reference/pricing).
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-3]

    When you enable screenshot upload, you set the interval between screenshots. After each interval, RTC SDK takes a screenshot of the video stream sent by local users, and uploads the image to Agora SDRTN®. Agora SDRTN® uploads each screenshot to your third-party cloud storage and sends a callback notification to your server in the form of an \`HTTPS\` request.

    **Screenshot upload**

    ![image](https://assets-docs.agora.io/images/video-sdk/screenshot-upload.svg)

    ## Prerequisites [#prerequisites-3]

    Before implementing the Agora local screenshot upload feature, take the following steps:

    1. **Activate local screenshot upload service**

       In [Agora Console](https://console.agora.io), select **RTC Services** from the sidebar, then locate the **Video Screenshot Upload** card and turn on its toggle. Select the settings icon on the card to open its configuration panel.

       ![Enable screenshot upload](https://assets-docs.agora.io/images/console/enable-screenshot-upload.png)

    2. **Configure third-party cloud storage**

       Select the settings icon on the **Video Screenshot Upload** card to open its configuration panel.

       ![Screenshot upload config](https://assets-docs.agora.io/images/console/screenshot-upload-configuration.png)

       <CalloutContainer type="warning">
         <CalloutDescription>
           Once you turn on **Enable Video Screenshot Upload**, you can't disable it.
         </CalloutDescription>
       </CalloutContainer>

       <CalloutContainer type="info">
         <CalloutDescription>
           Currently, the Agora local screenshot upload service only supports Amazon S3 as the third-party cloud storage provider. If you want to use a different provider, [contact](mailto\\:support@agora.io) technical support.
         </CalloutDescription>
       </CalloutContainer>

       Fill in the following information:

       * **Storage**: The third-party cloud storage provider. Fixed to AWS.
       * **Callback URL**: The server address to receive callback notifications of local screenshot upload results.
       * **Endpoint**: Specify the access domain (Endpoint) of the bucket. See [AWS Official Documentation](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for details.
       * **Region**: The data center region setting for third-party cloud storage. See [AWS Official Documentation](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for details.
       * **Access key**: String type, the access key of the third-party cloud storage. Best practice is to provide a write-only access key.
       * **Secret key**: String type, the secret key of the third-party cloud storage.
       * **Bucket Name**: String type, the bucket name of the third-party cloud storage. The bucket name must comply with the naming rules of the corresponding third-party cloud storage service.
       * **Filename Prefix**: (Optional) JSON Array, an array composed of multiple strings, indicating the storage location of screenshots in the third-party cloud storage. For example, if \`fileNamePrefix\` = \`["directory1","directory2"]\`, the prefix \`directory1/directory2/\` will be added to the screenshot filename, that is, \`directory1/directory2/xxx.jpg\`. The prefix length, including slashes, must not exceed 128 characters. The string should not contain symbols such as slashes, underscores, parentheses, and so on. The supported character set is as follows:

         * 26 lowercase English letters a-z
         * 26 uppercase English letters A-Z
         * 10 digits 0-9

       **Sample configuration**

       * Storage: AWS
       * Callback URL: \`https://webhook.site/2e75da2d-xxxx-xxxx-xxx-a0ef44a5259d\`
       * Endpoint: \`s3.cn-north-1.amazonaws.com.cn\`
       * Region: \`cn-north-1\`
       * Access key: \`12345678\`
       * Secret key: \`abcd123\`
       * Bucket Name: \`test-artifacts\`
       * Filename Prefix: \`test\`

    3. **Integrate RTC SDK**

       Integrate the RTC SDK (including the local screenshot upload dynamic library) into your project, join a channel, and publish a video stream. See [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) for details.

    ## Implement local screenshot upload [#implement-local-screenshot-upload-3]

    You enable screenshot upload in your Video Calling client and handle the notification callback from Agora on your callback server.

    ### Enable screenshot upload [#enable-screenshot-upload-3]

    Call the \`enableContentInspect\` method to enable the local screenshot upload feature. After successfully enabling the feature, the SDK will capture screenshots at the specified frequency and upload them to the Agora cloud server. To implement this logic, refer to the following code:

    \`\`\`javascript
    const inspectConfig = {
      // Set the interval for local screenshot to 2000 milliseconds (2 seconds), with a minimum value of 1000.
      interval: 2000,
      // (Optional) Set the address prefix for third-party cloud storage.
      ossFilePrefix: 'https://your-cloud-storage.com/',
      // (Optional) Add additional information.
      extraInfo: 'This is some additional information for content inspection.',
      // Set the function type to \\"supervise\\".
      inspectType: ['supervise'],
    };

    client
      .enableContentInspect(inspectConfig)
      .then(() => {
        console.log('Content inspection enabled successfully.');
      })
      .catch((error) => {
        console.error('Failed to enable content inspection:', error);
      });
    \`\`\`

    ### HTTP notification callback [#http-notification-callback-3]

    After a screenshot is successfully uploaded to the Agora SDRTN®, Agora sends a message notification callback to your application server in the form of an \`HTTPS\` \`POST\` request. The data format is \`JSON\`, and the character encoding is \`UTF-8\`.

    Upon receiving the message notification, your application server must respond with status code \`200\`. The expected response body format is \`JSON\`. In any of the following cases, the notification is considered to have failed:

    * No response is received from your server within 5 seconds after sending the message notification.
    * The \`HTTP\` status code of the response is not \`200\`, or the response body format is not \`JSON\`.

    The Agora service immediately retries after the first notification failure, and sends the message three times in total.

    ## Reference [#reference-3]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Pricing [#pricing-3]

    Agora charges for local screenshot upload based on two metrics:

    * **Screenshot fee**
    * **QPS overage fee** (queries per second)

    ### local screenshot upload dynamic library [#local-screenshot-upload-dynamic-library-3]

    You can find details about the name of the local screenshot upload dynamic library and the increase in app size after integration in [App size optimization](/en/realtime-media/rtc/build/optimize-and-operate/app-size-optimization).

    ### HTTP status codes [#http-status-codes-3]

    The HTTP status codes for the application server responses are as follows:

    | Status Code | Description                                                                                                                         |
    | :---------- | :---------------------------------------------------------------------------------------------------------------------------------- |
    | \`200\`       | Successful request.                                                                                                                 |
    | \`201\`       | Successful request and creation of a new resource.                                                                                  |
    | \`206\`       | No user streamed during the entire screenshot process, or some screenshot files were not uploaded to the third-party cloud storage. |
    | \`400\`       | Syntax error in the request (for example, parameter error), and the server cannot understand it.                                    |
    | \`401\`       | Unauthorized (App ID or Customer Certificate mismatch).                                                                             |
    | \`404\`       | The server cannot find the requested resource (webpage).                                                                            |
    | \`500\`       | Internal server error, unable to complete the request.                                                                              |
    | \`504\`       | Internal server error. The server acting as a gateway or proxy did not receive a timely response from the upstream server.          |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    This page shows you how to enable screenshot uploads on your app and handle screenshot upload callbacks.

    <CalloutContainer type="info">
      <CalloutDescription>
        Local screenshot upload is a paid service. For billing details, refer to [Pricing](/en/realtime-media/rtc/reference/pricing).
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-4]

    When you enable screenshot upload, you set the interval between screenshots. After each interval, RTC SDK takes a screenshot of the video stream sent by local users, and uploads the image to Agora SDRTN®. Agora SDRTN® uploads each screenshot to your third-party cloud storage and sends a callback notification to your server in the form of an \`HTTPS\` request.

    **Screenshot upload**

    ![image](https://assets-docs.agora.io/images/video-sdk/screenshot-upload.svg)

    ## Prerequisites [#prerequisites-4]

    Before implementing the Agora local screenshot upload feature, take the following steps:

    1. **Activate local screenshot upload service**

       In [Agora Console](https://console.agora.io), select **RTC Services** from the sidebar, then locate the **Video Screenshot Upload** card and turn on its toggle. Select the settings icon on the card to open its configuration panel.

       ![Enable screenshot upload](https://assets-docs.agora.io/images/console/enable-screenshot-upload.png)

    2. **Configure third-party cloud storage**

       Select the settings icon on the **Video Screenshot Upload** card to open its configuration panel.

       ![Screenshot upload config](https://assets-docs.agora.io/images/console/screenshot-upload-configuration.png)

       <CalloutContainer type="warning">
         <CalloutDescription>
           Once you turn on **Enable Video Screenshot Upload**, you can't disable it.
         </CalloutDescription>
       </CalloutContainer>

       <CalloutContainer type="info">
         <CalloutDescription>
           Currently, the Agora local screenshot upload service only supports Amazon S3 as the third-party cloud storage provider. If you want to use a different provider, [contact](mailto\\:support@agora.io) technical support.
         </CalloutDescription>
       </CalloutContainer>

       Fill in the following information:

       * **Storage**: The third-party cloud storage provider. Fixed to AWS.
       * **Callback URL**: The server address to receive callback notifications of local screenshot upload results.
       * **Endpoint**: Specify the access domain (Endpoint) of the bucket. See [AWS Official Documentation](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for details.
       * **Region**: The data center region setting for third-party cloud storage. See [AWS Official Documentation](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for details.
       * **Access key**: String type, the access key of the third-party cloud storage. Best practice is to provide a write-only access key.
       * **Secret key**: String type, the secret key of the third-party cloud storage.
       * **Bucket Name**: String type, the bucket name of the third-party cloud storage. The bucket name must comply with the naming rules of the corresponding third-party cloud storage service.
       * **Filename Prefix**: (Optional) JSON Array, an array composed of multiple strings, indicating the storage location of screenshots in the third-party cloud storage. For example, if \`fileNamePrefix\` = \`["directory1","directory2"]\`, the prefix \`directory1/directory2/\` will be added to the screenshot filename, that is, \`directory1/directory2/xxx.jpg\`. The prefix length, including slashes, must not exceed 128 characters. The string should not contain symbols such as slashes, underscores, parentheses, and so on. The supported character set is as follows:

         * 26 lowercase English letters a-z
         * 26 uppercase English letters A-Z
         * 10 digits 0-9

       **Sample configuration**

       * Storage: AWS
       * Callback URL: \`https://webhook.site/2e75da2d-xxxx-xxxx-xxx-a0ef44a5259d\`
       * Endpoint: \`s3.cn-north-1.amazonaws.com.cn\`
       * Region: \`cn-north-1\`
       * Access key: \`12345678\`
       * Secret key: \`abcd123\`
       * Bucket Name: \`test-artifacts\`
       * Filename Prefix: \`test\`

    3. **Integrate RTC SDK**

       Integrate the RTC SDK (including the local screenshot upload dynamic library) into your project, join a channel, and publish a video stream. See [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) for details.

    ## Implement local screenshot upload [#implement-local-screenshot-upload-4]

    You enable screenshot upload in your Video Calling client and handle the notification callback from Agora on your callback server.

    ### Enable screenshot upload [#enable-screenshot-upload-4]

    Call the \`enableContentInspect\` method to enable the local screenshot upload feature. After successfully enabling the feature, the SDK will capture screenshots at the specified frequency and upload them to the Agora cloud server. To implement this logic, refer to the following code:

    \`\`\`cpp
    void CMainFrame::OnBtnEnableContentInspect() {
      if (CAgoraObject::GetEngine() == NULL) {
        return;
      }

      ContentInspectConfig config;
      ContentInspectModule module1;
      // The type of the feature module is local screenshot upload
      module1.type = kContentInspectSupervise;
      // The frequency of local screenshot upload is once every 2 seconds
      module1.interval = 2;

      config.moduleCount = 1;
      config.modules[0] = module1;

      CAgoraObject::GetEngine()->enableContentInspect(true, config);
    }
    \`\`\`

    ### HTTP notification callback [#http-notification-callback-4]

    After a screenshot is successfully uploaded to the Agora SDRTN®, Agora sends a message notification callback to your application server in the form of an \`HTTPS\` \`POST\` request. The data format is \`JSON\`, and the character encoding is \`UTF-8\`.

    Upon receiving the message notification, your application server must respond with status code \`200\`. The expected response body format is \`JSON\`. In any of the following cases, the notification is considered to have failed:

    * No response is received from your server within 5 seconds after sending the message notification.
    * The \`HTTP\` status code of the response is not \`200\`, or the response body format is not \`JSON\`.

    The Agora service immediately retries after the first notification failure, and sends the message three times in total.

    #### Request header [#request-header-3]

    | Field Name     | Value                            |
    | :------------- | :------------------------------- |
    | \`Content-Type\` | \`application/json;charset=utf-8\` |

    #### Request body [#request-body-3]

    The request body is a JSON Object, containing the following fields:

    | Field           | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | :-------------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`requestId\`     | String      | Callback notification ID, identifying an event notification from the Agora business server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | \`callbackParam\` | JSON Object | Custom fields passed in the callback, currently includes the \`cname\` field, representing the channel name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
    | \`callbackData\`  | String      | String data passed through by the SDK local screenshot upload module.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
    | \`checksum\`      | String      | MD5 value calculated from the parameters \`callbackAddr\`, \`code\`, \`object\`, and \`requestId\`. Used to verify whether this callback notification comes from the local screenshot upload service.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | \`object\`        | String      | Name of the screenshot file. The naming convention for this file is: \`//___uid_s___uid_e__utc.jpg\`. The meanings of the fields in the filename are as follows: \`: Screenshot ID, a unique identifier for a screenshot.\`: Channel name to which the user being screenshotted belongs.\`: The user ID set when joining the channel.\`: File type, supports only \`video\`.\\\`\\\`: Unix timestamp of this screenshot. UTC time, consists of year, month, day, hour, minute, second, and millisecond. For example, if \`utc\` is equal to \`20190611073246073\`, it represents the start time of this slice file as UTC June 11, 2019, 7:32:46.073 AM. |
    | \`code\`          | Number      | Status code of this screenshot. \`200\` indicates that the screenshot is completed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | \`msg\`           | String      | Status of this screenshot. \`"Supervise complete"\` indicates that the screenshot is completed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | \`channelName\`   | String      | Channel name to which the user being screenshotted belongs. Consistent with \`object.cname\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | \`userId\`        | String      | User ID of the user being screenshotted. Consistent with \`object.uid\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
    | \`timestamp\`     | Int         | Unix timestamp (milliseconds) of this screenshot. UTC time, consistent with \`object.utc\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

    **Request Example**

    \`\`\`json
    {
      "requestId": "38f8e3cfdcXXXXXXXXX1ceba380d7e1a_1652693284_b5813fe2ae4fa5cdfe5abd8fef82526f",
      "callbackParam": {
        "cname": "httpClient463224"
      },
      "callbackData": "",
      "checksum": "75ee988XXXXXXc2ad4ec2aef58f178fd8",
      "object": "test/20201216/38f8e3cfdc474cd56fc1ceba380d7e1a_httpClient463224__uid_s_91__uid_e_video_20200413081128672.jpg",
      "code": 200,
      "msg": "Supervise complete",
      "channelName": "httpClient463224",
      "userId": "91",
      "timestamp": 20190611073246070
    }
    \`\`\`

    #### Response [#response-3]

    After receiving the message notification, your application server is expected to respond. The response package format is JSON. In any of the following cases, the Agora service considers the notification as failed:

    * After sending a message notification, no response is received from your server within 5 seconds.
    * The HTTP status code of the response is not \`200\`, or the response body format is not JSON.

    The Agora service immediately retries and sends the message notification again after the first notification fails. It attempts to notify you three times in total.

    ## Reference [#reference-4]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Pricing [#pricing-4]

    Agora charges for local screenshot upload based on two metrics:

    * **Screenshot fee**
    * **QPS overage fee** (queries per second)

    At the end of each month, Agora calculates:

    * The total number of screenshots generated
    * The monthly peak QPS if it exceeds the free quota

    **Billing formula:**

    \`\`\`md
    Monthly fee = (Number of screenshots - free quota) × Screenshot unit price
          + (Monthly peak QPS - free QPS) × QPS overage unit price
    \`\`\`

    | Billing Type    | Unit Price              | Discount Policy                                                                                   |
    | --------------- | ----------------------- | ------------------------------------------------------------------------------------------------- |
    | Screenshot Fee  | $0.30 per 10,000 images | First 10,000 images per month are free                                                            |
    | QPS Overage Fee | $1.5 per QPS            | Includes 500 QPS per month:- ≤ 500 QPS: No charge

    - > 500 QPS: Charged based on monthly peak QPS |

    * **Example 1:**
      A project generates **910,000 screenshots** in one month. Peak QPS = **100**

      * Screenshots: 910,000 - 10,000 (free) = 900,000 billable images
      * Screenshot fee: 900,000 ÷ 10,000 × $0.30 = **$27.00**
      * QPS fee: 100 ≤ 500 (free), so **$0**
      * **Total fee = $27.00**

    * **Example 2:**
      A project generates **2.91 million screenshots** in one month. Peak QPS = **600**

      * Screenshots: 2,910,000 - 10,000 (free) = 2,900,000 billable images
      * Screenshot fee: 2,900,000 ÷ 10,000 × $0.30 = **$87.00**
      * QPS fee: (600 - 500) × $1.5 = **$150.00**
      * **Total fee = $237.00**

    ### API reference [#api-reference-3]

    * [\`enableContentInspect\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_enablecontentinspect)

    ### local screenshot upload dynamic library [#local-screenshot-upload-dynamic-library-4]

    You can find details about the name of the local screenshot upload dynamic library and the increase in app size after integration in [App size optimization](/en/realtime-media/rtc/build/optimize-and-operate/app-size-optimization).

    ### HTTP status codes [#http-status-codes-4]

    The HTTP status codes for the application server responses are as follows:

    | Status Code | Description                                                                                                                         |
    | :---------- | :---------------------------------------------------------------------------------------------------------------------------------- |
    | \`200\`       | Successful request.                                                                                                                 |
    | \`201\`       | Successful request and creation of a new resource.                                                                                  |
    | \`206\`       | No user streamed during the entire screenshot process, or some screenshot files were not uploaded to the third-party cloud storage. |
    | \`400\`       | Syntax error in the request (For example, parameter error), and the server cannot understand it.                                    |
    | \`401\`       | Unauthorized (App ID or Customer Certificate mismatch).                                                                             |
    | \`404\`       | The server cannot find the requested resource (webpage).                                                                            |
    | \`500\`       | Internal server error, unable to complete the request.                                                                              |
    | \`504\`       | Internal server error. The server acting as a gateway or proxy did not receive a timely response from the upstream server.          |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    This page shows you how to enable screenshot uploads on your app and handle screenshot upload callbacks.

    <CalloutContainer type="info">
      <CalloutDescription>
        Local screenshot upload is a paid service. For billing details, refer to [Pricing](/en/realtime-media/rtc/reference/pricing).
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-5]

    When you enable screenshot upload, you set the interval between screenshots. After each interval, RTC SDK takes a screenshot of the video stream sent by local users, and uploads the image to Agora SDRTN®. Agora SDRTN® uploads each screenshot to your third-party cloud storage and sends a callback notification to your server in the form of an \`HTTPS\` request.

    **Screenshot upload**

    ![image](https://assets-docs.agora.io/images/video-sdk/screenshot-upload.svg)

    ## Prerequisites [#prerequisites-5]

    Before implementing the Agora local screenshot upload feature, take the following steps:

    1. **Activate local screenshot upload service**

       In [Agora Console](https://console.agora.io), select **RTC Services** from the sidebar, then locate the **Video Screenshot Upload** card and turn on its toggle. Select the settings icon on the card to open its configuration panel.

       ![Enable screenshot upload](https://assets-docs.agora.io/images/console/enable-screenshot-upload.png)

    2. **Configure third-party cloud storage**

       Select the settings icon on the **Video Screenshot Upload** card to open its configuration panel.

       ![Screenshot upload config](https://assets-docs.agora.io/images/console/screenshot-upload-configuration.png)

       <CalloutContainer type="warning">
         <CalloutDescription>
           Once you turn on **Enable Video Screenshot Upload**, you can't disable it.
         </CalloutDescription>
       </CalloutContainer>

       <CalloutContainer type="info">
         <CalloutDescription>
           Currently, the Agora local screenshot upload service only supports Amazon S3 as the third-party cloud storage provider. If you want to use a different provider, [contact](mailto\\:support@agora.io) technical support.
         </CalloutDescription>
       </CalloutContainer>

       Fill in the following information:

       * **Storage**: The third-party cloud storage provider. Fixed to AWS.
       * **Callback URL**: The server address to receive callback notifications of local screenshot upload results.
       * **Endpoint**: Specify the access domain (Endpoint) of the bucket. See [AWS Official Documentation](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for details.
       * **Region**: The data center region setting for third-party cloud storage. See [AWS Official Documentation](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for details.
       * **Access key**: String type, the access key of the third-party cloud storage. Best practice is to provide a write-only access key.
       * **Secret key**: String type, the secret key of the third-party cloud storage.
       * **Bucket Name**: String type, the bucket name of the third-party cloud storage. The bucket name must comply with the naming rules of the corresponding third-party cloud storage service.
       * **Filename Prefix**: (Optional) JSON Array, an array composed of multiple strings, indicating the storage location of screenshots in the third-party cloud storage. For example, if \`fileNamePrefix\` = \`["directory1","directory2"]\`, the prefix \`directory1/directory2/\` will be added to the screenshot filename, that is, \`directory1/directory2/xxx.jpg\`. The prefix length, including slashes, must not exceed 128 characters. The string should not contain symbols such as slashes, underscores, parentheses, and so on. The supported character set is as follows:

         * 26 lowercase English letters a-z
         * 26 uppercase English letters A-Z
         * 10 digits 0-9

       **Sample configuration**

       * Storage: AWS
       * Callback URL: \`https://webhook.site/2e75da2d-xxxx-xxxx-xxx-a0ef44a5259d\`
       * Endpoint: \`s3.cn-north-1.amazonaws.com.cn\`
       * Region: \`cn-north-1\`
       * Access key: \`12345678\`
       * Secret key: \`abcd123\`
       * Bucket Name: \`test-artifacts\`
       * Filename Prefix: \`test\`

    3. **Integrate RTC SDK**

       Integrate the RTC SDK (including the local screenshot upload dynamic library) into your project, join a channel, and publish a video stream. See [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) for details.

    ## Implement local screenshot upload [#implement-local-screenshot-upload-5]

    You enable screenshot upload in your Video Calling client and handle the notification callback from Agora on your callback server.

    ### Enable screenshot upload [#enable-screenshot-upload-5]

    Call the \`enableContentInspect\` method to enable the local screenshot upload feature. After successfully enabling the feature, the SDK will capture screenshots at the specified frequency and upload them to the Agora cloud server. To implement this logic, refer to the following code:

    \`\`\`typescript
    // Define ContentInspectModule Function Modules
    const modules = [{
     // Use Agora's own screenshot upload function
     type: ContentInspectType.ContentInspectSupervision,
     // The frequency of local screenshot upload.
     interval: 2, // Once every 2 seconds
    }];

    rtcEngine.enableContentInspect(
     // Enable local screenshot upload
     true,
     // Local screenshot upload configuration
     {
      modules: modules
      moduleCount: modules.length,
     }
    );
    \`\`\`

    ### HTTP notification callback [#http-notification-callback-5]

    After a screenshot is successfully uploaded to the Agora SDRTN®, Agora sends a message notification callback to your application server in the form of an \`HTTPS\` \`POST\` request. The data format is \`JSON\`, and the character encoding is \`UTF-8\`.

    Upon receiving the message notification, your application server must respond with status code \`200\`. The expected response body format is \`JSON\`. In any of the following cases, the notification is considered to have failed:

    * No response is received from your server within 5 seconds after sending the message notification.
    * The \`HTTP\` status code of the response is not \`200\`, or the response body format is not \`JSON\`.

    The Agora service immediately retries after the first notification failure, and sends the message three times in total.

    #### Request header [#request-header-4]

    | Field Name     | Value                            |
    | :------------- | :------------------------------- |
    | \`Content-Type\` | \`application/json;charset=utf-8\` |

    #### Request body [#request-body-4]

    The request body is a JSON Object, containing the following fields:

    | Field           | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | :-------------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`requestId\`     | String      | Callback notification ID, identifying an event notification from the Agora business server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | \`callbackParam\` | JSON Object | Custom fields passed in the callback, currently includes the \`cname\` field, representing the channel name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
    | \`callbackData\`  | String      | String data passed through by the SDK local screenshot upload module.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
    | \`checksum\`      | String      | MD5 value calculated from the parameters \`callbackAddr\`, \`code\`, \`object\`, and \`requestId\`. Used to verify whether this callback notification comes from the local screenshot upload service.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | \`object\`        | String      | Name of the screenshot file. The naming convention for this file is: \`//___uid_s___uid_e__utc.jpg\`. The meanings of the fields in the filename are as follows: \`: Screenshot ID, a unique identifier for a screenshot.\`: Channel name to which the user being screenshotted belongs.\`: The user ID set when joining the channel.\`: File type, supports only \`video\`.\\\`\\\`: Unix timestamp of this screenshot. UTC time, consists of year, month, day, hour, minute, second, and millisecond. For example, if \`utc\` is equal to \`20190611073246073\`, it represents the start time of this slice file as UTC June 11, 2019, 7:32:46.073 AM. |
    | \`code\`          | Number      | Status code of this screenshot. \`200\` indicates that the screenshot is completed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | \`msg\`           | String      | Status of this screenshot. \`"Supervise complete"\` indicates that the screenshot is completed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | \`channelName\`   | String      | Channel name to which the user being screenshotted belongs. Consistent with \`object.cname\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | \`userId\`        | String      | User ID of the user being screenshotted. Consistent with \`object.uid\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
    | \`timestamp\`     | Int         | Unix timestamp (milliseconds) of this screenshot. UTC time, consistent with \`object.utc\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

    **Request Example**

    \`\`\`json
    {
      "requestId": "38f8e3cfdcXXXXXXXXX1ceba380d7e1a_1652693284_b5813fe2ae4fa5cdfe5abd8fef82526f",
      "callbackParam": {
        "cname": "httpClient463224"
      },
      "callbackData": "",
      "checksum": "75ee988XXXXXXc2ad4ec2aef58f178fd8",
      "object": "test/20201216/38f8e3cfdc474cd56fc1ceba380d7e1a_httpClient463224__uid_s_91__uid_e_video_20200413081128672.jpg",
      "code": 200,
      "msg": "Supervise complete",
      "channelName": "httpClient463224",
      "userId": "91",
      "timestamp": 20190611073246070
    }
    \`\`\`

    #### Response [#response-4]

    After receiving the message notification, your application server is expected to respond. The response package format is JSON. In any of the following cases, the Agora service considers the notification as failed:

    * After sending a message notification, no response is received from your server within 5 seconds.
    * The HTTP status code of the response is not \`200\`, or the response body format is not JSON.

    The Agora service immediately retries and sends the message notification again after the first notification fails. It attempts to notify you three times in total.

    ## Reference [#reference-5]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Pricing [#pricing-5]

    Agora charges for local screenshot upload based on two metrics:

    * **Screenshot fee**
    * **QPS overage fee** (queries per second)

    At the end of each month, Agora calculates:

    * The total number of screenshots generated
    * The monthly peak QPS if it exceeds the free quota

    **Billing formula:**

    \`\`\`md
    Monthly fee = (Number of screenshots - free quota) × Screenshot unit price
          + (Monthly peak QPS - free QPS) × QPS overage unit price
    \`\`\`

    | Billing Type    | Unit Price              | Discount Policy                                                                                   |
    | --------------- | ----------------------- | ------------------------------------------------------------------------------------------------- |
    | Screenshot Fee  | $0.30 per 10,000 images | First 10,000 images per month are free                                                            |
    | QPS Overage Fee | $1.5 per QPS            | Includes 500 QPS per month:- ≤ 500 QPS: No charge

    - > 500 QPS: Charged based on monthly peak QPS |

    * **Example 1:**
      A project generates **910,000 screenshots** in one month. Peak QPS = **100**

      * Screenshots: 910,000 - 10,000 (free) = 900,000 billable images
      * Screenshot fee: 900,000 ÷ 10,000 × $0.30 = **$27.00**
      * QPS fee: 100 ≤ 500 (free), so **$0**
      * **Total fee = $27.00**

    * **Example 2:**
      A project generates **2.91 million screenshots** in one month. Peak QPS = **600**

      * Screenshots: 2,910,000 - 10,000 (free) = 2,900,000 billable images
      * Screenshot fee: 2,900,000 ÷ 10,000 × $0.30 = **$87.00**
      * QPS fee: (600 - 500) × $1.5 = **$150.00**
      * **Total fee = $237.00**

    ### API reference [#api-reference-4]

    * [\`enableContentInspect\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_enablecontentinspect)

    ### local screenshot upload dynamic library [#local-screenshot-upload-dynamic-library-5]

    You can find details about the name of the local screenshot upload dynamic library and the increase in app size after integration in [App size optimization](/en/realtime-media/rtc/build/optimize-and-operate/app-size-optimization).

    ### HTTP status codes [#http-status-codes-5]

    The HTTP status codes for the application server responses are as follows:

    | Status Code | Description                                                                                                                         |
    | :---------- | :---------------------------------------------------------------------------------------------------------------------------------- |
    | \`200\`       | Successful request.                                                                                                                 |
    | \`201\`       | Successful request and creation of a new resource.                                                                                  |
    | \`206\`       | No user streamed during the entire screenshot process, or some screenshot files were not uploaded to the third-party cloud storage. |
    | \`400\`       | Syntax error in the request (For example, parameter error), and the server cannot understand it.                                    |
    | \`401\`       | Unauthorized (App ID or Customer Certificate mismatch).                                                                             |
    | \`404\`       | The server cannot find the requested resource (webpage).                                                                            |
    | \`500\`       | Internal server error, unable to complete the request.                                                                              |
    | \`504\`       | Internal server error. The server acting as a gateway or proxy did not receive a timely response from the upstream server.          |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    This page shows you how to enable screenshot uploads on your app and handle screenshot upload callbacks.

    <CalloutContainer type="info">
      <CalloutDescription>
        Local screenshot upload is a paid service. For billing details, refer to [Pricing](/en/realtime-media/rtc/reference/pricing).
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-6]

    When you enable screenshot upload, you set the interval between screenshots. After each interval, RTC SDK takes a screenshot of the video stream sent by local users, and uploads the image to Agora SDRTN®. Agora SDRTN® uploads each screenshot to your third-party cloud storage and sends a callback notification to your server in the form of an \`HTTPS\` request.

    **Screenshot upload**

    ![image](https://assets-docs.agora.io/images/video-sdk/screenshot-upload.svg)

    ## Prerequisites [#prerequisites-6]

    Before implementing the Agora local screenshot upload feature, take the following steps:

    1. **Activate local screenshot upload service**

       In [Agora Console](https://console.agora.io), select **RTC Services** from the sidebar, then locate the **Video Screenshot Upload** card and turn on its toggle. Select the settings icon on the card to open its configuration panel.

       ![Enable screenshot upload](https://assets-docs.agora.io/images/console/enable-screenshot-upload.png)

    2. **Configure third-party cloud storage**

       Select the settings icon on the **Video Screenshot Upload** card to open its configuration panel.

       ![Screenshot upload config](https://assets-docs.agora.io/images/console/screenshot-upload-configuration.png)

       <CalloutContainer type="warning">
         <CalloutDescription>
           Once you turn on **Enable Video Screenshot Upload**, you can't disable it.
         </CalloutDescription>
       </CalloutContainer>

       <CalloutContainer type="info">
         <CalloutDescription>
           Currently, the Agora local screenshot upload service only supports Amazon S3 as the third-party cloud storage provider. If you want to use a different provider, [contact](mailto\\:support@agora.io) technical support.
         </CalloutDescription>
       </CalloutContainer>

       Fill in the following information:

       * **Storage**: The third-party cloud storage provider. Fixed to AWS.
       * **Callback URL**: The server address to receive callback notifications of local screenshot upload results.
       * **Endpoint**: Specify the access domain (Endpoint) of the bucket. See [AWS Official Documentation](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for details.
       * **Region**: The data center region setting for third-party cloud storage. See [AWS Official Documentation](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for details.
       * **Access key**: String type, the access key of the third-party cloud storage. Best practice is to provide a write-only access key.
       * **Secret key**: String type, the secret key of the third-party cloud storage.
       * **Bucket Name**: String type, the bucket name of the third-party cloud storage. The bucket name must comply with the naming rules of the corresponding third-party cloud storage service.
       * **Filename Prefix**: (Optional) JSON Array, an array composed of multiple strings, indicating the storage location of screenshots in the third-party cloud storage. For example, if \`fileNamePrefix\` = \`["directory1","directory2"]\`, the prefix \`directory1/directory2/\` will be added to the screenshot filename, that is, \`directory1/directory2/xxx.jpg\`. The prefix length, including slashes, must not exceed 128 characters. The string should not contain symbols such as slashes, underscores, parentheses, and so on. The supported character set is as follows:

         * 26 lowercase English letters a-z
         * 26 uppercase English letters A-Z
         * 10 digits 0-9

       **Sample configuration**

       * Storage: AWS
       * Callback URL: \`https://webhook.site/2e75da2d-xxxx-xxxx-xxx-a0ef44a5259d\`
       * Endpoint: \`s3.cn-north-1.amazonaws.com.cn\`
       * Region: \`cn-north-1\`
       * Access key: \`12345678\`
       * Secret key: \`abcd123\`
       * Bucket Name: \`test-artifacts\`
       * Filename Prefix: \`test\`

    3. **Integrate RTC SDK**

       Integrate the RTC SDK (including the local screenshot upload dynamic library) into your project, join a channel, and publish a video stream. See [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) for details.

    ## Implement local screenshot upload [#implement-local-screenshot-upload-6]

    You enable screenshot upload in your Video Calling client and handle the notification callback from Agora on your callback server.

    ### Enable screenshot upload [#enable-screenshot-upload-6]

    Call the \`enableContentInspect\` method to enable the local screenshot upload feature. After successfully enabling the feature, the SDK will capture screenshots at the specified frequency and upload them to the Agora cloud server. To implement this logic, refer to the following code:

    \`\`\`typescript
    // Define ContentInspectModule Function Modules
    const modules = [{
     // Use Agora's own screenshot upload function
     type: ContentInspectType.ContentInspectSupervision,
     // The frequency of local screenshot upload.
     interval: 2, // Once every 2 seconds
    }];

    rtcEngine.enableContentInspect(
     // Enable local screenshot upload
     true,
     // Local screenshot upload configuration
     {
      modules: modules
      moduleCount: modules.length,
     }
    );
    \`\`\`

    ### HTTP notification callback [#http-notification-callback-6]

    After a screenshot is successfully uploaded to the Agora SDRTN®, Agora sends a message notification callback to your application server in the form of an \`HTTPS\` \`POST\` request. The data format is \`JSON\`, and the character encoding is \`UTF-8\`.

    Upon receiving the message notification, your application server must respond with status code \`200\`. The expected response body format is \`JSON\`. In any of the following cases, the notification is considered to have failed:

    * No response is received from your server within 5 seconds after sending the message notification.
    * The \`HTTP\` status code of the response is not \`200\`, or the response body format is not \`JSON\`.

    The Agora service immediately retries after the first notification failure, and sends the message three times in total.

    #### Request header [#request-header-5]

    | Field Name     | Value                            |
    | :------------- | :------------------------------- |
    | \`Content-Type\` | \`application/json;charset=utf-8\` |

    #### Request body [#request-body-5]

    The request body is a JSON Object, containing the following fields:

    | Field           | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | :-------------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`requestId\`     | String      | Callback notification ID, identifying an event notification from the Agora business server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | \`callbackParam\` | JSON Object | Custom fields passed in the callback, currently includes the \`cname\` field, representing the channel name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
    | \`callbackData\`  | String      | String data passed through by the SDK local screenshot upload module.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
    | \`checksum\`      | String      | MD5 value calculated from the parameters \`callbackAddr\`, \`code\`, \`object\`, and \`requestId\`. Used to verify whether this callback notification comes from the local screenshot upload service.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | \`object\`        | String      | Name of the screenshot file. The naming convention for this file is: \`//___uid_s___uid_e__utc.jpg\`. The meanings of the fields in the filename are as follows: \`: Screenshot ID, a unique identifier for a screenshot.\`: Channel name to which the user being screenshotted belongs.\`: The user ID set when joining the channel.\`: File type, supports only \`video\`.\\\`\\\`: Unix timestamp of this screenshot. UTC time, consists of year, month, day, hour, minute, second, and millisecond. For example, if \`utc\` is equal to \`20190611073246073\`, it represents the start time of this slice file as UTC June 11, 2019, 7:32:46.073 AM. |
    | \`code\`          | Number      | Status code of this screenshot. \`200\` indicates that the screenshot is completed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | \`msg\`           | String      | Status of this screenshot. \`"Supervise complete"\` indicates that the screenshot is completed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | \`channelName\`   | String      | Channel name to which the user being screenshotted belongs. Consistent with \`object.cname\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | \`userId\`        | String      | User ID of the user being screenshotted. Consistent with \`object.uid\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
    | \`timestamp\`     | Int         | Unix timestamp (milliseconds) of this screenshot. UTC time, consistent with \`object.utc\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

    **Request Example**

    \`\`\`json
    {
      "requestId": "38f8e3cfdcXXXXXXXXX1ceba380d7e1a_1652693284_b5813fe2ae4fa5cdfe5abd8fef82526f",
      "callbackParam": {
        "cname": "httpClient463224"
      },
      "callbackData": "",
      "checksum": "75ee988XXXXXXc2ad4ec2aef58f178fd8",
      "object": "test/20201216/38f8e3cfdc474cd56fc1ceba380d7e1a_httpClient463224__uid_s_91__uid_e_video_20200413081128672.jpg",
      "code": 200,
      "msg": "Supervise complete",
      "channelName": "httpClient463224",
      "userId": "91",
      "timestamp": 20190611073246070
    }
    \`\`\`

    #### Response [#response-5]

    After receiving the message notification, your application server is expected to respond. The response package format is JSON. In any of the following cases, the Agora service considers the notification as failed:

    * After sending a message notification, no response is received from your server within 5 seconds.
    * The HTTP status code of the response is not \`200\`, or the response body format is not JSON.

    The Agora service immediately retries and sends the message notification again after the first notification fails. It attempts to notify you three times in total.

    ## Reference [#reference-6]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Pricing [#pricing-6]

    Agora charges for local screenshot upload based on two metrics:

    * **Screenshot fee**
    * **QPS overage fee** (queries per second)

    At the end of each month, Agora calculates:

    * The total number of screenshots generated
    * The monthly peak QPS if it exceeds the free quota

    **Billing formula:**

    \`\`\`md
    Monthly fee = (Number of screenshots - free quota) × Screenshot unit price
          + (Monthly peak QPS - free QPS) × QPS overage unit price
    \`\`\`

    | Billing Type    | Unit Price              | Discount Policy                                                                                   |
    | --------------- | ----------------------- | ------------------------------------------------------------------------------------------------- |
    | Screenshot Fee  | $0.30 per 10,000 images | First 10,000 images per month are free                                                            |
    | QPS Overage Fee | $1.5 per QPS            | Includes 500 QPS per month:- ≤ 500 QPS: No charge

    - > 500 QPS: Charged based on monthly peak QPS |

    * **Example 1:**
      A project generates **910,000 screenshots** in one month. Peak QPS = **100**

      * Screenshots: 910,000 - 10,000 (free) = 900,000 billable images
      * Screenshot fee: 900,000 ÷ 10,000 × $0.30 = **$27.00**
      * QPS fee: 100 ≤ 500 (free), so **$0**
      * **Total fee = $27.00**

    * **Example 2:**
      A project generates **2.91 million screenshots** in one month. Peak QPS = **600**

      * Screenshots: 2,910,000 - 10,000 (free) = 2,900,000 billable images
      * Screenshot fee: 2,900,000 ÷ 10,000 × $0.30 = **$87.00**
      * QPS fee: (600 - 500) × $1.5 = **$150.00**
      * **Total fee = $237.00**

    ### API reference [#api-reference-5]

    * [\`enableContentInspect\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_enablecontentinspect)

    ### local screenshot upload dynamic library [#local-screenshot-upload-dynamic-library-6]

    You can find details about the name of the local screenshot upload dynamic library and the increase in app size after integration in [App size optimization](/en/realtime-media/rtc/build/optimize-and-operate/app-size-optimization).

    ### HTTP status codes [#http-status-codes-6]

    The HTTP status codes for the application server responses are as follows:

    | Status Code | Description                                                                                                                         |
    | :---------- | :---------------------------------------------------------------------------------------------------------------------------------- |
    | \`200\`       | Successful request.                                                                                                                 |
    | \`201\`       | Successful request and creation of a new resource.                                                                                  |
    | \`206\`       | No user streamed during the entire screenshot process, or some screenshot files were not uploaded to the third-party cloud storage. |
    | \`400\`       | Syntax error in the request (For example, parameter error), and the server cannot understand it.                                    |
    | \`401\`       | Unauthorized (App ID or Customer Certificate mismatch).                                                                             |
    | \`404\`       | The server cannot find the requested resource (webpage).                                                                            |
    | \`500\`       | Internal server error, unable to complete the request.                                                                              |
    | \`504\`       | Internal server error. The server acting as a gateway or proxy did not receive a timely response from the upstream server.          |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    This page shows you how to enable screenshot uploads on your game and handle screenshot upload callbacks.

    <CalloutContainer type="info">
      <CalloutDescription>
        Local screenshot upload is a paid service. For billing details, refer to [Pricing](/en/realtime-media/rtc/reference/pricing).
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-7]

    When you enable screenshot upload, you set the interval between screenshots. After each interval, RTC SDK takes a screenshot of the video stream sent by local users, and uploads the image to Agora SDRTN®. Agora SDRTN® uploads each screenshot to your third-party cloud storage and sends a callback notification to your server in the form of an \`HTTPS\` request.

    **Screenshot upload**

    ![image](https://assets-docs.agora.io/images/video-sdk/screenshot-upload.svg)

    ## Prerequisites [#prerequisites-7]

    Before implementing the Agora local screenshot upload feature, take the following steps:

    1. **Activate local screenshot upload service**

       In [Agora Console](https://console.agora.io), select **RTC Services** from the sidebar, then locate the **Video Screenshot Upload** card and turn on its toggle. Select the settings icon on the card to open its configuration panel.

       ![Enable screenshot upload](https://assets-docs.agora.io/images/console/enable-screenshot-upload.png)

    2. **Configure third-party cloud storage**

       Select the settings icon on the **Video Screenshot Upload** card to open its configuration panel.

       ![Screenshot upload config](https://assets-docs.agora.io/images/console/screenshot-upload-configuration.png)

       <CalloutContainer type="warning">
         <CalloutDescription>
           Once you turn on **Enable Video Screenshot Upload**, you can't disable it.
         </CalloutDescription>
       </CalloutContainer>

       <CalloutContainer type="info">
         <CalloutDescription>
           Currently, the Agora local screenshot upload service only supports Amazon S3 as the third-party cloud storage provider. If you want to use a different provider, [contact](mailto\\:support@agora.io) technical support.
         </CalloutDescription>
       </CalloutContainer>

       Fill in the following information:

       * **Storage**: The third-party cloud storage provider. Fixed to AWS.
       * **Callback URL**: The server address to receive callback notifications of local screenshot upload results.
       * **Endpoint**: Specify the access domain (Endpoint) of the bucket. See [AWS Official Documentation](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for details.
       * **Region**: The data center region setting for third-party cloud storage. See [AWS Official Documentation](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for details.
       * **Access key**: String type, the access key of the third-party cloud storage. Best practice is to provide a write-only access key.
       * **Secret key**: String type, the secret key of the third-party cloud storage.
       * **Bucket Name**: String type, the bucket name of the third-party cloud storage. The bucket name must comply with the naming rules of the corresponding third-party cloud storage service.
       * **Filename Prefix**: (Optional) JSON Array, an array composed of multiple strings, indicating the storage location of screenshots in the third-party cloud storage. For example, if \`fileNamePrefix\` = \`["directory1","directory2"]\`, the prefix \`directory1/directory2/\` will be added to the screenshot filename, that is, \`directory1/directory2/xxx.jpg\`. The prefix length, including slashes, must not exceed 128 characters. The string should not contain symbols such as slashes, underscores, parentheses, and so on. The supported character set is as follows:

         * 26 lowercase English letters a-z
         * 26 uppercase English letters A-Z
         * 10 digits 0-9

       **Sample configuration**

       * Storage: AWS
       * Callback URL: \`https://webhook.site/2e75da2d-xxxx-xxxx-xxx-a0ef44a5259d\`
       * Endpoint: \`s3.cn-north-1.amazonaws.com.cn\`
       * Region: \`cn-north-1\`
       * Access key: \`12345678\`
       * Secret key: \`abcd123\`
       * Bucket Name: \`test-artifacts\`
       * Filename Prefix: \`test\`

    3. **Integrate RTC SDK**

       Integrate the RTC SDK (including the local screenshot upload dynamic library) into your project, join a channel, and publish a video stream. See [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) for details.

    ## Implement local screenshot upload [#implement-local-screenshot-upload-7]

    You enable screenshot upload in your Video Calling client and handle the notification callback from Agora on your callback server.

    ### Enable screenshot upload [#enable-screenshot-upload-7]

    Call the \`enableContentInspect\` method to enable the local screenshot upload feature. After successfully enabling the feature, the SDK will capture screenshots at the specified frequency and upload them to the Agora cloud server. To implement this logic, refer to the following code:

    \`\`\`csharp
    private void OnStartButtonClick()
    {
      var config = new ContentInspectConfig();
      config.modules = new ContentInspectModule[1];
      // The type of the feature module is local screenshot upload
      config.modules[0] = new ContentInspectModule
      {
        type = CONTENT_INSPECT_TYPE.CONTENT_INSPECT_SUPERVISION,
        // The frequency of local screenshot upload
        interval = 2 // Once every 2 seconds
      };
      config.moduleCount =
      var nRet = RtcEngine.EnableContentInspect(true, config);
      this.Log.UpdateLog("StartContentInspect: " + nRet);
    }
    \`\`\`

    ### HTTP notification callback [#http-notification-callback-7]

    After a screenshot is successfully uploaded to the Agora SDRTN®, Agora sends a message notification callback to your application server in the form of an \`HTTPS\` \`POST\` request. The data format is \`JSON\`, and the character encoding is \`UTF-8\`.

    Upon receiving the message notification, your application server must respond with status code \`200\`. The expected response body format is \`JSON\`. In any of the following cases, the notification is considered to have failed:

    * No response is received from your server within 5 seconds after sending the message notification.
    * The \`HTTP\` status code of the response is not \`200\`, or the response body format is not \`JSON\`.

    The Agora service immediately retries after the first notification failure, and sends the message three times in total.

    #### Request header [#request-header-6]

    | Field Name     | Value                            |
    | :------------- | :------------------------------- |
    | \`Content-Type\` | \`application/json;charset=utf-8\` |

    #### Request body [#request-body-6]

    The request body is a JSON Object, containing the following fields:

    | Field           | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | :-------------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`requestId\`     | String      | Callback notification ID, identifying an event notification from the Agora business server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | \`callbackParam\` | JSON Object | Custom fields passed in the callback, currently includes the \`cname\` field, representing the channel name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
    | \`callbackData\`  | String      | String data passed through by the SDK local screenshot upload module.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
    | \`checksum\`      | String      | MD5 value calculated from the parameters \`callbackAddr\`, \`code\`, \`object\`, and \`requestId\`. Used to verify whether this callback notification comes from the local screenshot upload service.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | \`object\`        | String      | Name of the screenshot file. The naming convention for this file is: \`//___uid_s___uid_e__utc.jpg\`. The meanings of the fields in the filename are as follows: \`: Screenshot ID, a unique identifier for a screenshot.\`: Channel name to which the user being screenshotted belongs.\`: The user ID set when joining the channel.\`: File type, supports only \`video\`.\\\`\\\`: Unix timestamp of this screenshot. UTC time, consists of year, month, day, hour, minute, second, and millisecond. For example, if \`utc\` is equal to \`20190611073246073\`, it represents the start time of this slice file as UTC June 11, 2019, 7:32:46.073 AM. |
    | \`code\`          | Number      | Status code of this screenshot. \`200\` indicates that the screenshot is completed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | \`msg\`           | String      | Status of this screenshot. \`"Supervise complete"\` indicates that the screenshot is completed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | \`channelName\`   | String      | Channel name to which the user being screenshotted belongs. Consistent with \`object.cname\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | \`userId\`        | String      | User ID of the user being screenshotted. Consistent with \`object.uid\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
    | \`timestamp\`     | Int         | Unix timestamp (milliseconds) of this screenshot. UTC time, consistent with \`object.utc\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

    **Request Example**

    \`\`\`json
    {
      "requestId": "38f8e3cfdcXXXXXXXXX1ceba380d7e1a_1652693284_b5813fe2ae4fa5cdfe5abd8fef82526f",
      "callbackParam": {
        "cname": "httpClient463224"
      },
      "callbackData": "",
      "checksum": "75ee988XXXXXXc2ad4ec2aef58f178fd8",
      "object": "test/20201216/38f8e3cfdc474cd56fc1ceba380d7e1a_httpClient463224__uid_s_91__uid_e_video_20200413081128672.jpg",
      "code": 200,
      "msg": "Supervise complete",
      "channelName": "httpClient463224",
      "userId": "91",
      "timestamp": 20190611073246070
    }
    \`\`\`

    #### Response [#response-6]

    After receiving the message notification, your application server is expected to respond. The response package format is JSON. In any of the following cases, the Agora service considers the notification as failed:

    * After sending a message notification, no response is received from your server within 5 seconds.
    * The HTTP status code of the response is not \`200\`, or the response body format is not JSON.

    The Agora service immediately retries and sends the message notification again after the first notification fails. It attempts to notify you three times in total.

    ## Reference [#reference-7]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Pricing [#pricing-7]

    Agora charges for local screenshot upload based on two metrics:

    * **Screenshot fee**
    * **QPS overage fee** (queries per second)

    At the end of each month, Agora calculates:

    * The total number of screenshots generated
    * The monthly peak QPS if it exceeds the free quota

    **Billing formula:**

    \`\`\`md
    Monthly fee = (Number of screenshots - free quota) × Screenshot unit price
          + (Monthly peak QPS - free QPS) × QPS overage unit price
    \`\`\`

    | Billing Type    | Unit Price              | Discount Policy                                                                                   |
    | --------------- | ----------------------- | ------------------------------------------------------------------------------------------------- |
    | Screenshot Fee  | $0.30 per 10,000 images | First 10,000 images per month are free                                                            |
    | QPS Overage Fee | $1.5 per QPS            | Includes 500 QPS per month:- ≤ 500 QPS: No charge

    - > 500 QPS: Charged based on monthly peak QPS |

    * **Example 1:**
      A project generates **910,000 screenshots** in one month. Peak QPS = **100**

      * Screenshots: 910,000 - 10,000 (free) = 900,000 billable images
      * Screenshot fee: 900,000 ÷ 10,000 × $0.30 = **$27.00**
      * QPS fee: 100 ≤ 500 (free), so **$0**
      * **Total fee = $27.00**

    * **Example 2:**
      A project generates **2.91 million screenshots** in one month. Peak QPS = **600**

      * Screenshots: 2,910,000 - 10,000 (free) = 2,900,000 billable images
      * Screenshot fee: 2,900,000 ÷ 10,000 × $0.30 = **$87.00**
      * QPS fee: (600 - 500) × $1.5 = **$150.00**
      * **Total fee = $237.00**

    ### API reference [#api-reference-6]

    * [\`EnableContentInspect\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_enablecontentinspect)

    ### local screenshot upload dynamic library [#local-screenshot-upload-dynamic-library-7]

    You can find details about the name of the local screenshot upload dynamic library and the increase in app size after integration in [App size optimization](/en/realtime-media/rtc/build/optimize-and-operate/app-size-optimization).

    ### HTTP status codes [#http-status-codes-7]

    The HTTP status codes for the application server responses are as follows:

    | Status Code | Description                                                                                                                         |
    | :---------- | :---------------------------------------------------------------------------------------------------------------------------------- |
    | \`200\`       | Successful request.                                                                                                                 |
    | \`201\`       | Successful request and creation of a new resource.                                                                                  |
    | \`206\`       | No user streamed during the entire screenshot process, or some screenshot files were not uploaded to the third-party cloud storage. |
    | \`400\`       | Syntax error in the request (For example, parameter error), and the server cannot understand it.                                    |
    | \`401\`       | Unauthorized (App ID or Customer Certificate mismatch).                                                                             |
    | \`404\`       | The server cannot find the requested resource (webpage).                                                                            |
    | \`500\`       | Internal server error, unable to complete the request.                                                                              |
    | \`504\`       | Internal server error. The server acting as a gateway or proxy did not receive a timely response from the upstream server.          |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "To meet the needs of video content supervision, Agora RTC SDK enables you to take screenshots of the video stream in a channel and then upload these images to third-party cloud storage."
  }, {
    heading: undefined,
    content: "This page shows you how to enable screenshot uploads on your app and handle screenshot upload callbacks."
  }, {
    heading: undefined,
    content: "Local screenshot upload is a paid service. For billing details, refer to Pricing."
  }, {
    heading: "understand-the-tech",
    content: "When you enable screenshot upload, you set the interval between screenshots. After each interval, RTC SDK takes a screenshot of the video stream sent by local users, and uploads the image to Agora SDRTN®. Agora SDRTN® uploads each screenshot to your third-party cloud storage and sends a callback notification to your server in the form of an `HTTPS` request."
  }, {
    heading: "understand-the-tech",
    content: "**Screenshot upload**"
  }, {
    heading: "prerequisites",
    content: "Before implementing the Agora local screenshot upload feature, take the following steps:"
  }, {
    heading: "prerequisites",
    content: "**Activate local screenshot upload service**"
  }, {
    heading: "prerequisites",
    content: "In Agora Console, select **RTC Services** from the sidebar, then locate the **Video Screenshot Upload** card and turn on its toggle. Select the settings icon on the card to open its configuration panel."
  }, {
    heading: "prerequisites",
    content: "**Configure third-party cloud storage**"
  }, {
    heading: "prerequisites",
    content: "Select the settings icon on the **Video Screenshot Upload** card to open its configuration panel."
  }, {
    heading: "prerequisites",
    content: "Once you turn on **Enable Video Screenshot Upload**, you can't disable it."
  }, {
    heading: "prerequisites",
    content: "Currently, the Agora local screenshot upload service only supports Amazon S3 as the third-party cloud storage provider. If you want to use a different provider, contact technical support."
  }, {
    heading: "prerequisites",
    content: "Fill in the following information:"
  }, {
    heading: "prerequisites",
    content: "**Storage**: The third-party cloud storage provider. Fixed to AWS."
  }, {
    heading: "prerequisites",
    content: "**Callback URL**: The server address to receive callback notifications of local screenshot upload results."
  }, {
    heading: "prerequisites",
    content: "**Endpoint**: Specify the access domain (Endpoint) of the bucket. See AWS Official Documentation for details."
  }, {
    heading: "prerequisites",
    content: "**Region**: The data center region setting for third-party cloud storage. See AWS Official Documentation for details."
  }, {
    heading: "prerequisites",
    content: "**Access key**: String type, the access key of the third-party cloud storage. Best practice is to provide a write-only access key."
  }, {
    heading: "prerequisites",
    content: "**Secret key**: String type, the secret key of the third-party cloud storage."
  }, {
    heading: "prerequisites",
    content: "**Bucket Name**: String type, the bucket name of the third-party cloud storage. The bucket name must comply with the naming rules of the corresponding third-party cloud storage service."
  }, {
    heading: "prerequisites",
    content: '**Filename Prefix**: (Optional) JSON Array, an array composed of multiple strings, indicating the storage location of screenshots in the third-party cloud storage. For example, if `fileNamePrefix` = `["directory1","directory2"]`, the prefix `directory1/directory2/` will be added to the screenshot filename, that is, `directory1/directory2/xxx.jpg`. The prefix length, including slashes, must not exceed 128 characters. The string should not contain symbols such as slashes, underscores, parentheses, and so on. The supported character set is as follows:'
  }, {
    heading: "prerequisites",
    content: "26 lowercase English letters a-z"
  }, {
    heading: "prerequisites",
    content: "26 uppercase English letters A-Z"
  }, {
    heading: "prerequisites",
    content: "10 digits 0-9"
  }, {
    heading: "prerequisites",
    content: "**Sample configuration**"
  }, {
    heading: "prerequisites",
    content: "Storage: AWS"
  }, {
    heading: "prerequisites",
    content: "Callback URL: `https://webhook.site/2e75da2d-xxxx-xxxx-xxx-a0ef44a5259d`"
  }, {
    heading: "prerequisites",
    content: "Endpoint: `s3.cn-north-1.amazonaws.com.cn`"
  }, {
    heading: "prerequisites",
    content: "Region: `cn-north-1`"
  }, {
    heading: "prerequisites",
    content: "Access key: `12345678`"
  }, {
    heading: "prerequisites",
    content: "Secret key: `abcd123`"
  }, {
    heading: "prerequisites",
    content: "Bucket Name: `test-artifacts`"
  }, {
    heading: "prerequisites",
    content: "Filename Prefix: `test`"
  }, {
    heading: "prerequisites",
    content: "**Integrate RTC SDK**"
  }, {
    heading: "prerequisites",
    content: "Integrate the RTC SDK (including the local screenshot upload dynamic library) into your project, join a channel, and publish a video stream. See SDK quickstart for details."
  }, {
    heading: "implement-local-screenshot-upload",
    content: "You enable screenshot upload in your Video Calling client and handle the notification callback from Agora on your callback server."
  }, {
    heading: "enable-screenshot-upload",
    content: "Call the `enableContentInspect` method to enable the local screenshot upload feature. After successfully enabling the feature, the SDK will capture screenshots at the specified frequency and upload them to the Agora cloud server. To implement this logic, refer to the following code:"
  }, {
    heading: "http-notification-callback",
    content: "After a screenshot is successfully uploaded to the Agora SDRTN®, Agora sends a message notification callback to your application server in the form of an `HTTPS` `POST` request. The data format is `JSON`, and the character encoding is `UTF-8`."
  }, {
    heading: "http-notification-callback",
    content: "Upon receiving the message notification, your application server must respond with status code `200`. The expected response body format is `JSON`. In any of the following cases, the notification is considered to have failed:"
  }, {
    heading: "http-notification-callback",
    content: "No response is received from your server within 5 seconds after sending the message notification."
  }, {
    heading: "http-notification-callback",
    content: "The `HTTP` status code of the response is not `200`, or the response body format is not `JSON`."
  }, {
    heading: "http-notification-callback",
    content: "The Agora service immediately retries after the first notification failure, and sends the message three times in total."
  }, {
    heading: "request-header",
    content: "Field Name"
  }, {
    heading: "request-header",
    content: "Value"
  }, {
    heading: "request-header",
    content: "`Content-Type`"
  }, {
    heading: "request-header",
    content: "`application/json;charset=utf-8`"
  }, {
    heading: "request-body",
    content: "The request body is a JSON Object, containing the following fields:"
  }, {
    heading: "request-body",
    content: "Field"
  }, {
    heading: "request-body",
    content: "Type"
  }, {
    heading: "request-body",
    content: "Description"
  }, {
    heading: "request-body",
    content: "`requestId`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "Callback notification ID, identifying an event notification from the Agora business server."
  }, {
    heading: "request-body",
    content: "`callbackParam`"
  }, {
    heading: "request-body",
    content: "JSON Object"
  }, {
    heading: "request-body",
    content: "Custom fields passed in the callback, currently includes the `cname` field, representing the channel name."
  }, {
    heading: "request-body",
    content: "`callbackData`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "String data passed through by the SDK local screenshot upload module."
  }, {
    heading: "request-body",
    content: "`checksum`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "MD5 value calculated from the parameters `callbackAddr`, `code`, `object`, and `requestId`. Used to verify whether this callback notification comes from the local screenshot upload service."
  }, {
    heading: "request-body",
    content: "`object`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "Name of the screenshot file. The naming convention for this file is: `//___uid_s___uid_e__utc.jpg`. The meanings of the fields in the filename are as follows: `: Screenshot ID, a unique identifier for a screenshot.`: Channel name to which the user being screenshotted belongs.`: The user ID set when joining the channel.`: File type, supports only `video`.\\`\\`: Unix timestamp of this screenshot. UTC time, consists of year, month, day, hour, minute, second, and millisecond. For example, if `utc` is equal to `20190611073246073`, it represents the start time of this slice file as UTC June 11, 2019, 7:32:46.073 AM."
  }, {
    heading: "request-body",
    content: "`code`"
  }, {
    heading: "request-body",
    content: "Number"
  }, {
    heading: "request-body",
    content: "Status code of this screenshot. `200` indicates that the screenshot is completed."
  }, {
    heading: "request-body",
    content: "`msg`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: 'Status of this screenshot. `"Supervise complete"` indicates that the screenshot is completed.'
  }, {
    heading: "request-body",
    content: "`channelName`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "Channel name to which the user being screenshotted belongs. Consistent with `object.cname`."
  }, {
    heading: "request-body",
    content: "`userId`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "User ID of the user being screenshotted. Consistent with `object.uid`."
  }, {
    heading: "request-body",
    content: "`timestamp`"
  }, {
    heading: "request-body",
    content: "Int"
  }, {
    heading: "request-body",
    content: "Unix timestamp (milliseconds) of this screenshot. UTC time, consistent with `object.utc`."
  }, {
    heading: "request-body",
    content: "**Request Example**"
  }, {
    heading: "response",
    content: "After receiving the message notification, your application server is expected to respond. The response package format is JSON. In any of the following cases, the Agora service considers the notification as failed:"
  }, {
    heading: "response",
    content: "After sending a message notification, no response is received from your server within 5 seconds."
  }, {
    heading: "response",
    content: "The HTTP status code of the response is not `200`, or the response body format is not JSON."
  }, {
    heading: "response",
    content: "The Agora service immediately retries and sends the message notification again after the first notification fails. It attempts to notify you three times in total."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "pricing",
    content: "Agora charges for local screenshot upload based on two metrics:"
  }, {
    heading: "pricing",
    content: "**Screenshot fee**"
  }, {
    heading: "pricing",
    content: "**QPS overage fee** (queries per second)"
  }, {
    heading: "pricing",
    content: "At the end of each month, Agora calculates:"
  }, {
    heading: "pricing",
    content: "The total number of screenshots generated"
  }, {
    heading: "pricing",
    content: "The monthly peak QPS if it exceeds the free quota"
  }, {
    heading: "pricing",
    content: "**Billing formula:**"
  }, {
    heading: "pricing",
    content: "Billing Type"
  }, {
    heading: "pricing",
    content: "Unit Price"
  }, {
    heading: "pricing",
    content: "Discount Policy"
  }, {
    heading: "pricing",
    content: "Screenshot Fee"
  }, {
    heading: "pricing",
    content: "$0.30 per 10,000 images"
  }, {
    heading: "pricing",
    content: "First 10,000 images per month are free"
  }, {
    heading: "pricing",
    content: "QPS Overage Fee"
  }, {
    heading: "pricing",
    content: "$1.5 per QPS"
  }, {
    heading: "pricing",
    content: `Includes 500 QPS per month:- ≤ 500 QPS: No charge

- > 500 QPS: Charged based on monthly peak QPS`
  }, {
    heading: "pricing",
    content: `**Example 1:**
A project generates **910,000 screenshots** in one month. Peak QPS = **100**`
  }, {
    heading: "pricing",
    content: "Screenshots: 910,000 - 10,000 (free) = 900,000 billable images"
  }, {
    heading: "pricing",
    content: "Screenshot fee: 900,000 ÷ 10,000 × $0.30 = **$27.00**"
  }, {
    heading: "pricing",
    content: "QPS fee: 100 ≤ 500 (free), so **$0**"
  }, {
    heading: "pricing",
    content: "**Total fee = $27.00**"
  }, {
    heading: "pricing",
    content: `**Example 2:**
A project generates **2.91 million screenshots** in one month. Peak QPS = **600**`
  }, {
    heading: "pricing",
    content: "Screenshots: 2,910,000 - 10,000 (free) = 2,900,000 billable images"
  }, {
    heading: "pricing",
    content: "Screenshot fee: 2,900,000 ÷ 10,000 × $0.30 = **$87.00**"
  }, {
    heading: "pricing",
    content: "QPS fee: (600 - 500) × $1.5 = **$150.00**"
  }, {
    heading: "pricing",
    content: "**Total fee = $237.00**"
  }, {
    heading: "api-reference",
    content: "`enableContentInspect`"
  }, {
    heading: "local-screenshot-upload-dynamic-library",
    content: "You can find details about the name of the local screenshot upload dynamic library and the increase in app size after integration in App size optimization."
  }, {
    heading: "http-status-codes",
    content: "The HTTP status codes for the application server responses are as follows:"
  }, {
    heading: "http-status-codes",
    content: "Status Code"
  }, {
    heading: "http-status-codes",
    content: "Description"
  }, {
    heading: "http-status-codes",
    content: "`200`"
  }, {
    heading: "http-status-codes",
    content: "Successful request."
  }, {
    heading: "http-status-codes",
    content: "`201`"
  }, {
    heading: "http-status-codes",
    content: "Successful request and creation of a new resource."
  }, {
    heading: "http-status-codes",
    content: "`206`"
  }, {
    heading: "http-status-codes",
    content: "No user streamed during the entire screenshot process, or some screenshot files were not uploaded to the third-party cloud storage."
  }, {
    heading: "http-status-codes",
    content: "`400`"
  }, {
    heading: "http-status-codes",
    content: "Syntax error in the request (For example, parameter error), and the server cannot understand it."
  }, {
    heading: "http-status-codes",
    content: "`401`"
  }, {
    heading: "http-status-codes",
    content: "Unauthorized (App ID or Customer Certificate mismatch)."
  }, {
    heading: "http-status-codes",
    content: "`404`"
  }, {
    heading: "http-status-codes",
    content: "The server cannot find the requested resource (webpage)."
  }, {
    heading: "http-status-codes",
    content: "`500`"
  }, {
    heading: "http-status-codes",
    content: "Internal server error, unable to complete the request."
  }, {
    heading: "http-status-codes",
    content: "`504`"
  }, {
    heading: "http-status-codes",
    content: "Internal server error. The server acting as a gateway or proxy did not receive a timely response from the upstream server."
  }, {
    heading: "http-status-codes",
    content: "This page shows you how to enable screenshot uploads on your app and handle screenshot upload callbacks."
  }, {
    heading: "http-status-codes",
    content: "Local screenshot upload is a paid service. For billing details, refer to Pricing."
  }, {
    heading: "understand-the-tech-1",
    content: "When you enable screenshot upload, you set the interval between screenshots. After each interval, RTC SDK takes a screenshot of the video stream sent by local users, and uploads the image to Agora SDRTN®. Agora SDRTN® uploads each screenshot to your third-party cloud storage and sends a callback notification to your server in the form of an `HTTPS` request."
  }, {
    heading: "understand-the-tech-1",
    content: "**Screenshot upload**"
  }, {
    heading: "prerequisites-1",
    content: "Before implementing the Agora local screenshot upload feature, take the following steps:"
  }, {
    heading: "prerequisites-1",
    content: "**Activate local screenshot upload service**"
  }, {
    heading: "prerequisites-1",
    content: "In Agora Console, select **RTC Services** from the sidebar, then locate the **Video Screenshot Upload** card and turn on its toggle. Select the settings icon on the card to open its configuration panel."
  }, {
    heading: "prerequisites-1",
    content: "**Configure third-party cloud storage**"
  }, {
    heading: "prerequisites-1",
    content: "Select the settings icon on the **Video Screenshot Upload** card to open its configuration panel."
  }, {
    heading: "prerequisites-1",
    content: "Once you turn on **Enable Video Screenshot Upload**, you can't disable it."
  }, {
    heading: "prerequisites-1",
    content: "Currently, the Agora local screenshot upload service only supports Amazon S3 as the third-party cloud storage provider. If you want to use a different provider, contact technical support."
  }, {
    heading: "prerequisites-1",
    content: "Fill in the following information:"
  }, {
    heading: "prerequisites-1",
    content: "**Storage**: The third-party cloud storage provider. Fixed to AWS."
  }, {
    heading: "prerequisites-1",
    content: "**Callback URL**: The server address to receive callback notifications of local screenshot upload results."
  }, {
    heading: "prerequisites-1",
    content: "**Endpoint**: Specify the access domain (Endpoint) of the bucket. See AWS Official Documentation for details."
  }, {
    heading: "prerequisites-1",
    content: "**Region**: The data center region setting for third-party cloud storage. See AWS Official Documentation for details."
  }, {
    heading: "prerequisites-1",
    content: "**Access key**: String type, the access key of the third-party cloud storage. Best practice is to provide a write-only access key."
  }, {
    heading: "prerequisites-1",
    content: "**Secret key**: String type, the secret key of the third-party cloud storage."
  }, {
    heading: "prerequisites-1",
    content: "**Bucket Name**: String type, the bucket name of the third-party cloud storage. The bucket name must comply with the naming rules of the corresponding third-party cloud storage service."
  }, {
    heading: "prerequisites-1",
    content: '**Filename Prefix**: (Optional) JSON Array, an array composed of multiple strings, indicating the storage location of screenshots in the third-party cloud storage. For example, if `fileNamePrefix` = `["directory1","directory2"]`, the prefix `directory1/directory2/` will be added to the screenshot filename, that is, `directory1/directory2/xxx.jpg`. The prefix length, including slashes, must not exceed 128 characters. The string should not contain symbols such as slashes, underscores, parentheses, and so on. The supported character set is as follows:'
  }, {
    heading: "prerequisites-1",
    content: "26 lowercase English letters a-z"
  }, {
    heading: "prerequisites-1",
    content: "26 uppercase English letters A-Z"
  }, {
    heading: "prerequisites-1",
    content: "10 digits 0-9"
  }, {
    heading: "prerequisites-1",
    content: "**Sample configuration**"
  }, {
    heading: "prerequisites-1",
    content: "Storage: AWS"
  }, {
    heading: "prerequisites-1",
    content: "Callback URL: `https://webhook.site/2e75da2d-xxxx-xxxx-xxx-a0ef44a5259d`"
  }, {
    heading: "prerequisites-1",
    content: "Endpoint: `s3.cn-north-1.amazonaws.com.cn`"
  }, {
    heading: "prerequisites-1",
    content: "Region: `cn-north-1`"
  }, {
    heading: "prerequisites-1",
    content: "Access key: `12345678`"
  }, {
    heading: "prerequisites-1",
    content: "Secret key: `abcd123`"
  }, {
    heading: "prerequisites-1",
    content: "Bucket Name: `test-artifacts`"
  }, {
    heading: "prerequisites-1",
    content: "Filename Prefix: `test`"
  }, {
    heading: "prerequisites-1",
    content: "**Integrate RTC SDK**"
  }, {
    heading: "prerequisites-1",
    content: "Integrate the RTC SDK (including the local screenshot upload dynamic library) into your project, join a channel, and publish a video stream. See SDK quickstart for details."
  }, {
    heading: "implement-local-screenshot-upload-1",
    content: "You enable screenshot upload in your Video Calling client and handle the notification callback from Agora on your callback server."
  }, {
    heading: "enable-screenshot-upload-1",
    content: "Call the `enableContentInspect` method to enable the local screenshot upload feature. After successfully enabling the feature, the SDK will capture screenshots at the specified frequency and upload them to the Agora cloud server. To implement this logic, refer to the following code:"
  }, {
    heading: "http-notification-callback-1",
    content: "After a screenshot is successfully uploaded to the Agora SDRTN®, Agora sends a message notification callback to your application server in the form of an `HTTPS` `POST` request. The data format is `JSON`, and the character encoding is `UTF-8`."
  }, {
    heading: "http-notification-callback-1",
    content: "Upon receiving the message notification, your application server must respond with status code `200`. The expected response body format is `JSON`. In any of the following cases, the notification is considered to have failed:"
  }, {
    heading: "http-notification-callback-1",
    content: "No response is received from your server within 5 seconds after sending the message notification."
  }, {
    heading: "http-notification-callback-1",
    content: "The `HTTP` status code of the response is not `200`, or the response body format is not `JSON`."
  }, {
    heading: "http-notification-callback-1",
    content: "The Agora service immediately retries after the first notification failure, and sends the message three times in total."
  }, {
    heading: "request-header-1",
    content: "Field Name"
  }, {
    heading: "request-header-1",
    content: "Value"
  }, {
    heading: "request-header-1",
    content: "`Content-Type`"
  }, {
    heading: "request-header-1",
    content: "`application/json;charset=utf-8`"
  }, {
    heading: "request-body-1",
    content: "The request body is a JSON Object, containing the following fields:"
  }, {
    heading: "request-body-1",
    content: "Field"
  }, {
    heading: "request-body-1",
    content: "Type"
  }, {
    heading: "request-body-1",
    content: "Description"
  }, {
    heading: "request-body-1",
    content: "`requestId`"
  }, {
    heading: "request-body-1",
    content: "String"
  }, {
    heading: "request-body-1",
    content: "Callback notification ID, identifying an event notification from the Agora business server."
  }, {
    heading: "request-body-1",
    content: "`callbackParam`"
  }, {
    heading: "request-body-1",
    content: "JSON Object"
  }, {
    heading: "request-body-1",
    content: "Custom fields passed in the callback, currently includes the `cname` field, representing the channel name."
  }, {
    heading: "request-body-1",
    content: "`callbackData`"
  }, {
    heading: "request-body-1",
    content: "String"
  }, {
    heading: "request-body-1",
    content: "String data passed through by the SDK local screenshot upload module."
  }, {
    heading: "request-body-1",
    content: "`checksum`"
  }, {
    heading: "request-body-1",
    content: "String"
  }, {
    heading: "request-body-1",
    content: "MD5 value calculated from the parameters `callbackAddr`, `code`, `object`, and `requestId`. Used to verify whether this callback notification comes from the local screenshot upload service."
  }, {
    heading: "request-body-1",
    content: "`object`"
  }, {
    heading: "request-body-1",
    content: "String"
  }, {
    heading: "request-body-1",
    content: "Name of the screenshot file. The naming convention for this file is: `//___uid_s___uid_e__utc.jpg`. The meanings of the fields in the filename are as follows: `: Screenshot ID, a unique identifier for a screenshot.`: Channel name to which the user being screenshotted belongs.`: The user ID set when joining the channel.`: File type, supports only `video`.\\`\\`: Unix timestamp of this screenshot. UTC time, consists of year, month, day, hour, minute, second, and millisecond. For example, if `utc` is equal to `20190611073246073`, it represents the start time of this slice file as UTC June 11, 2019, 7:32:46.073 AM."
  }, {
    heading: "request-body-1",
    content: "`code`"
  }, {
    heading: "request-body-1",
    content: "Number"
  }, {
    heading: "request-body-1",
    content: "Status code of this screenshot. `200` indicates that the screenshot is completed."
  }, {
    heading: "request-body-1",
    content: "`msg`"
  }, {
    heading: "request-body-1",
    content: "String"
  }, {
    heading: "request-body-1",
    content: 'Status of this screenshot. `"Supervise complete"` indicates that the screenshot is completed.'
  }, {
    heading: "request-body-1",
    content: "`channelName`"
  }, {
    heading: "request-body-1",
    content: "String"
  }, {
    heading: "request-body-1",
    content: "Channel name to which the user being screenshotted belongs. Consistent with `object.cname`."
  }, {
    heading: "request-body-1",
    content: "`userId`"
  }, {
    heading: "request-body-1",
    content: "String"
  }, {
    heading: "request-body-1",
    content: "User ID of the user being screenshotted. Consistent with `object.uid`."
  }, {
    heading: "request-body-1",
    content: "`timestamp`"
  }, {
    heading: "request-body-1",
    content: "Int"
  }, {
    heading: "request-body-1",
    content: "Unix timestamp (milliseconds) of this screenshot. UTC time, consistent with `object.utc`."
  }, {
    heading: "request-body-1",
    content: "**Request Example**"
  }, {
    heading: "response-1",
    content: "After receiving the message notification, your application server is expected to respond. The response package format is JSON. In any of the following cases, the Agora service considers the notification as failed:"
  }, {
    heading: "response-1",
    content: "After sending a message notification, no response is received from your server within 5 seconds."
  }, {
    heading: "response-1",
    content: "The HTTP status code of the response is not `200`, or the response body format is not JSON."
  }, {
    heading: "response-1",
    content: "The Agora service immediately retries and sends the message notification again after the first notification fails. It attempts to notify you three times in total."
  }, {
    heading: "reference-1",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "pricing-1",
    content: "Agora charges for local screenshot upload based on two metrics:"
  }, {
    heading: "pricing-1",
    content: "**Screenshot fee**"
  }, {
    heading: "pricing-1",
    content: "**QPS overage fee** (queries per second)"
  }, {
    heading: "pricing-1",
    content: "At the end of each month, Agora calculates:"
  }, {
    heading: "pricing-1",
    content: "The total number of screenshots generated"
  }, {
    heading: "pricing-1",
    content: "The monthly peak QPS if it exceeds the free quota"
  }, {
    heading: "pricing-1",
    content: "**Billing formula:**"
  }, {
    heading: "pricing-1",
    content: "Billing Type"
  }, {
    heading: "pricing-1",
    content: "Unit Price"
  }, {
    heading: "pricing-1",
    content: "Discount Policy"
  }, {
    heading: "pricing-1",
    content: "Screenshot Fee"
  }, {
    heading: "pricing-1",
    content: "$0.30 per 10,000 images"
  }, {
    heading: "pricing-1",
    content: "First 10,000 images per month are free"
  }, {
    heading: "pricing-1",
    content: "QPS Overage Fee"
  }, {
    heading: "pricing-1",
    content: "$1.5 per QPS"
  }, {
    heading: "pricing-1",
    content: `Includes 500 QPS per month:- ≤ 500 QPS: No charge

- > 500 QPS: Charged based on monthly peak QPS`
  }, {
    heading: "pricing-1",
    content: `**Example 1:**
A project generates **910,000 screenshots** in one month. Peak QPS = **100**`
  }, {
    heading: "pricing-1",
    content: "Screenshots: 910,000 - 10,000 (free) = 900,000 billable images"
  }, {
    heading: "pricing-1",
    content: "Screenshot fee: 900,000 ÷ 10,000 × $0.30 = **$27.00**"
  }, {
    heading: "pricing-1",
    content: "QPS fee: 100 ≤ 500 (free), so **$0**"
  }, {
    heading: "pricing-1",
    content: "**Total fee = $27.00**"
  }, {
    heading: "pricing-1",
    content: `**Example 2:**
A project generates **2.91 million screenshots** in one month. Peak QPS = **600**`
  }, {
    heading: "pricing-1",
    content: "Screenshots: 2,910,000 - 10,000 (free) = 2,900,000 billable images"
  }, {
    heading: "pricing-1",
    content: "Screenshot fee: 2,900,000 ÷ 10,000 × $0.30 = **$87.00**"
  }, {
    heading: "pricing-1",
    content: "QPS fee: (600 - 500) × $1.5 = **$150.00**"
  }, {
    heading: "pricing-1",
    content: "**Total fee = $237.00**"
  }, {
    heading: "api-reference-1",
    content: "`enableContentInspect(_:config:)`"
  }, {
    heading: "local-screenshot-upload-dynamic-library-1",
    content: "You can find details about the name of the local screenshot upload dynamic library and the increase in app size after integration in App size optimization."
  }, {
    heading: "http-status-codes-1",
    content: "The HTTP status codes for the application server responses are as follows:"
  }, {
    heading: "http-status-codes-1",
    content: "Status Code"
  }, {
    heading: "http-status-codes-1",
    content: "Description"
  }, {
    heading: "http-status-codes-1",
    content: "`200`"
  }, {
    heading: "http-status-codes-1",
    content: "Successful request."
  }, {
    heading: "http-status-codes-1",
    content: "`201`"
  }, {
    heading: "http-status-codes-1",
    content: "Successful request and creation of a new resource."
  }, {
    heading: "http-status-codes-1",
    content: "`206`"
  }, {
    heading: "http-status-codes-1",
    content: "No user streamed during the entire screenshot process, or some screenshot files were not uploaded to the third-party cloud storage."
  }, {
    heading: "http-status-codes-1",
    content: "`400`"
  }, {
    heading: "http-status-codes-1",
    content: "Syntax error in the request (For example, parameter error), and the server cannot understand it."
  }, {
    heading: "http-status-codes-1",
    content: "`401`"
  }, {
    heading: "http-status-codes-1",
    content: "Unauthorized (App ID or Customer Certificate mismatch)."
  }, {
    heading: "http-status-codes-1",
    content: "`404`"
  }, {
    heading: "http-status-codes-1",
    content: "The server cannot find the requested resource (webpage)."
  }, {
    heading: "http-status-codes-1",
    content: "`500`"
  }, {
    heading: "http-status-codes-1",
    content: "Internal server error, unable to complete the request."
  }, {
    heading: "http-status-codes-1",
    content: "`504`"
  }, {
    heading: "http-status-codes-1",
    content: "Internal server error. The server acting as a gateway or proxy did not receive a timely response from the upstream server."
  }, {
    heading: "http-status-codes-1",
    content: "This page shows you how to enable screenshot uploads on your app and handle screenshot upload callbacks."
  }, {
    heading: "http-status-codes-1",
    content: "Local screenshot upload is a paid service. For billing details, refer to Pricing."
  }, {
    heading: "understand-the-tech-2",
    content: "When you enable screenshot upload, you set the interval between screenshots. After each interval, RTC SDK takes a screenshot of the video stream sent by local users, and uploads the image to Agora SDRTN®. Agora SDRTN® uploads each screenshot to your third-party cloud storage and sends a callback notification to your server in the form of an `HTTPS` request."
  }, {
    heading: "understand-the-tech-2",
    content: "**Screenshot upload**"
  }, {
    heading: "prerequisites-2",
    content: "Before implementing the Agora local screenshot upload feature, take the following steps:"
  }, {
    heading: "prerequisites-2",
    content: "**Activate local screenshot upload service**"
  }, {
    heading: "prerequisites-2",
    content: "In Agora Console, select **RTC Services** from the sidebar, then locate the **Video Screenshot Upload** card and turn on its toggle. Select the settings icon on the card to open its configuration panel."
  }, {
    heading: "prerequisites-2",
    content: "**Configure third-party cloud storage**"
  }, {
    heading: "prerequisites-2",
    content: "Select the settings icon on the **Video Screenshot Upload** card to open its configuration panel."
  }, {
    heading: "prerequisites-2",
    content: "Once you turn on **Enable Video Screenshot Upload**, you can't disable it."
  }, {
    heading: "prerequisites-2",
    content: "Currently, the Agora local screenshot upload service only supports Amazon S3 as the third-party cloud storage provider. If you want to use a different provider, contact technical support."
  }, {
    heading: "prerequisites-2",
    content: "Fill in the following information:"
  }, {
    heading: "prerequisites-2",
    content: "**Storage**: The third-party cloud storage provider. Fixed to AWS."
  }, {
    heading: "prerequisites-2",
    content: "**Callback URL**: The server address to receive callback notifications of local screenshot upload results."
  }, {
    heading: "prerequisites-2",
    content: "**Endpoint**: Specify the access domain (Endpoint) of the bucket. See AWS Official Documentation for details."
  }, {
    heading: "prerequisites-2",
    content: "**Region**: The data center region setting for third-party cloud storage. See AWS Official Documentation for details."
  }, {
    heading: "prerequisites-2",
    content: "**Access key**: String type, the access key of the third-party cloud storage. Best practice is to provide a write-only access key."
  }, {
    heading: "prerequisites-2",
    content: "**Secret key**: String type, the secret key of the third-party cloud storage."
  }, {
    heading: "prerequisites-2",
    content: "**Bucket Name**: String type, the bucket name of the third-party cloud storage. The bucket name must comply with the naming rules of the corresponding third-party cloud storage service."
  }, {
    heading: "prerequisites-2",
    content: '**Filename Prefix**: (Optional) JSON Array, an array composed of multiple strings, indicating the storage location of screenshots in the third-party cloud storage. For example, if `fileNamePrefix` = `["directory1","directory2"]`, the prefix `directory1/directory2/` will be added to the screenshot filename, that is, `directory1/directory2/xxx.jpg`. The prefix length, including slashes, must not exceed 128 characters. The string should not contain symbols such as slashes, underscores, parentheses, and so on. The supported character set is as follows:'
  }, {
    heading: "prerequisites-2",
    content: "26 lowercase English letters a-z"
  }, {
    heading: "prerequisites-2",
    content: "26 uppercase English letters A-Z"
  }, {
    heading: "prerequisites-2",
    content: "10 digits 0-9"
  }, {
    heading: "prerequisites-2",
    content: "**Sample configuration**"
  }, {
    heading: "prerequisites-2",
    content: "Storage: AWS"
  }, {
    heading: "prerequisites-2",
    content: "Callback URL: `https://webhook.site/2e75da2d-xxxx-xxxx-xxx-a0ef44a5259d`"
  }, {
    heading: "prerequisites-2",
    content: "Endpoint: `s3.cn-north-1.amazonaws.com.cn`"
  }, {
    heading: "prerequisites-2",
    content: "Region: `cn-north-1`"
  }, {
    heading: "prerequisites-2",
    content: "Access key: `12345678`"
  }, {
    heading: "prerequisites-2",
    content: "Secret key: `abcd123`"
  }, {
    heading: "prerequisites-2",
    content: "Bucket Name: `test-artifacts`"
  }, {
    heading: "prerequisites-2",
    content: "Filename Prefix: `test`"
  }, {
    heading: "prerequisites-2",
    content: "**Integrate RTC SDK**"
  }, {
    heading: "prerequisites-2",
    content: "Integrate the RTC SDK (including the local screenshot upload dynamic library) into your project, join a channel, and publish a video stream. See SDK quickstart for details."
  }, {
    heading: "implement-local-screenshot-upload-2",
    content: "You enable screenshot upload in your Video Calling client and handle the notification callback from Agora on your callback server."
  }, {
    heading: "enable-screenshot-upload-2",
    content: "Call the `enableContentInspect` method to enable the local screenshot upload feature. After successfully enabling the feature, the SDK will capture screenshots at the specified frequency and upload them to the Agora cloud server. To implement this logic, refer to the following code:"
  }, {
    heading: "http-notification-callback-2",
    content: "After a screenshot is successfully uploaded to the Agora SDRTN®, Agora sends a message notification callback to your application server in the form of an `HTTPS` `POST` request. The data format is `JSON`, and the character encoding is `UTF-8`."
  }, {
    heading: "http-notification-callback-2",
    content: "Upon receiving the message notification, your application server must respond with status code `200`. The expected response body format is `JSON`. In any of the following cases, the notification is considered to have failed:"
  }, {
    heading: "http-notification-callback-2",
    content: "No response is received from your server within 5 seconds after sending the message notification."
  }, {
    heading: "http-notification-callback-2",
    content: "The `HTTP` status code of the response is not `200`, or the response body format is not `JSON`."
  }, {
    heading: "http-notification-callback-2",
    content: "The Agora service immediately retries after the first notification failure, and sends the message three times in total."
  }, {
    heading: "request-header-2",
    content: "Field Name"
  }, {
    heading: "request-header-2",
    content: "Value"
  }, {
    heading: "request-header-2",
    content: "`Content-Type`"
  }, {
    heading: "request-header-2",
    content: "`application/json;charset=utf-8`"
  }, {
    heading: "request-body-2",
    content: "The request body is a JSON Object, containing the following fields:"
  }, {
    heading: "request-body-2",
    content: "Field"
  }, {
    heading: "request-body-2",
    content: "Type"
  }, {
    heading: "request-body-2",
    content: "Description"
  }, {
    heading: "request-body-2",
    content: "`requestId`"
  }, {
    heading: "request-body-2",
    content: "String"
  }, {
    heading: "request-body-2",
    content: "Callback notification ID, identifying an event notification from the Agora business server."
  }, {
    heading: "request-body-2",
    content: "`callbackParam`"
  }, {
    heading: "request-body-2",
    content: "JSON Object"
  }, {
    heading: "request-body-2",
    content: "Custom fields passed in the callback, currently includes the `cname` field, representing the channel name."
  }, {
    heading: "request-body-2",
    content: "`callbackData`"
  }, {
    heading: "request-body-2",
    content: "String"
  }, {
    heading: "request-body-2",
    content: "String data passed through by the SDK local screenshot upload module."
  }, {
    heading: "request-body-2",
    content: "`checksum`"
  }, {
    heading: "request-body-2",
    content: "String"
  }, {
    heading: "request-body-2",
    content: "MD5 value calculated from the parameters `callbackAddr`, `code`, `object`, and `requestId`. Used to verify whether this callback notification comes from the local screenshot upload service."
  }, {
    heading: "request-body-2",
    content: "`object`"
  }, {
    heading: "request-body-2",
    content: "String"
  }, {
    heading: "request-body-2",
    content: "Name of the screenshot file. The naming convention for this file is: `//___uid_s___uid_e__utc.jpg`. The meanings of the fields in the filename are as follows: `: Screenshot ID, a unique identifier for a screenshot.`: Channel name to which the user being screenshotted belongs.`: The user ID set when joining the channel.`: File type, supports only `video`.\\`\\`: Unix timestamp of this screenshot. UTC time, consists of year, month, day, hour, minute, second, and millisecond. For example, if `utc` is equal to `20190611073246073`, it represents the start time of this slice file as UTC June 11, 2019, 7:32:46.073 AM."
  }, {
    heading: "request-body-2",
    content: "`code`"
  }, {
    heading: "request-body-2",
    content: "Number"
  }, {
    heading: "request-body-2",
    content: "Status code of this screenshot. `200` indicates that the screenshot is completed."
  }, {
    heading: "request-body-2",
    content: "`msg`"
  }, {
    heading: "request-body-2",
    content: "String"
  }, {
    heading: "request-body-2",
    content: 'Status of this screenshot. `"Supervise complete"` indicates that the screenshot is completed.'
  }, {
    heading: "request-body-2",
    content: "`channelName`"
  }, {
    heading: "request-body-2",
    content: "String"
  }, {
    heading: "request-body-2",
    content: "Channel name to which the user being screenshotted belongs. Consistent with `object.cname`."
  }, {
    heading: "request-body-2",
    content: "`userId`"
  }, {
    heading: "request-body-2",
    content: "String"
  }, {
    heading: "request-body-2",
    content: "User ID of the user being screenshotted. Consistent with `object.uid`."
  }, {
    heading: "request-body-2",
    content: "`timestamp`"
  }, {
    heading: "request-body-2",
    content: "Int"
  }, {
    heading: "request-body-2",
    content: "Unix timestamp (milliseconds) of this screenshot. UTC time, consistent with `object.utc`."
  }, {
    heading: "request-body-2",
    content: "**Request Example**"
  }, {
    heading: "response-2",
    content: "After receiving the message notification, your application server is expected to respond. The response package format is JSON. In any of the following cases, the Agora service considers the notification as failed:"
  }, {
    heading: "response-2",
    content: "After sending a message notification, no response is received from your server within 5 seconds."
  }, {
    heading: "response-2",
    content: "The HTTP status code of the response is not `200`, or the response body format is not JSON."
  }, {
    heading: "response-2",
    content: "The Agora service immediately retries and sends the message notification again after the first notification fails. It attempts to notify you three times in total."
  }, {
    heading: "reference-2",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "pricing-2",
    content: "Agora charges for local screenshot upload based on two metrics:"
  }, {
    heading: "pricing-2",
    content: "**Screenshot fee**"
  }, {
    heading: "pricing-2",
    content: "**QPS overage fee** (queries per second)"
  }, {
    heading: "pricing-2",
    content: "At the end of each month, Agora calculates:"
  }, {
    heading: "pricing-2",
    content: "The total number of screenshots generated"
  }, {
    heading: "pricing-2",
    content: "The monthly peak QPS if it exceeds the free quota"
  }, {
    heading: "pricing-2",
    content: "**Billing formula:**"
  }, {
    heading: "pricing-2",
    content: "Billing Type"
  }, {
    heading: "pricing-2",
    content: "Unit Price"
  }, {
    heading: "pricing-2",
    content: "Discount Policy"
  }, {
    heading: "pricing-2",
    content: "Screenshot Fee"
  }, {
    heading: "pricing-2",
    content: "$0.30 per 10,000 images"
  }, {
    heading: "pricing-2",
    content: "First 10,000 images per month are free"
  }, {
    heading: "pricing-2",
    content: "QPS Overage Fee"
  }, {
    heading: "pricing-2",
    content: "$1.5 per QPS"
  }, {
    heading: "pricing-2",
    content: `Includes 500 QPS per month:- ≤ 500 QPS: No charge

- > 500 QPS: Charged based on monthly peak QPS`
  }, {
    heading: "pricing-2",
    content: `**Example 1:**
A project generates **910,000 screenshots** in one month. Peak QPS = **100**`
  }, {
    heading: "pricing-2",
    content: "Screenshots: 910,000 - 10,000 (free) = 900,000 billable images"
  }, {
    heading: "pricing-2",
    content: "Screenshot fee: 900,000 ÷ 10,000 × $0.30 = **$27.00**"
  }, {
    heading: "pricing-2",
    content: "QPS fee: 100 ≤ 500 (free), so **$0**"
  }, {
    heading: "pricing-2",
    content: "**Total fee = $27.00**"
  }, {
    heading: "pricing-2",
    content: `**Example 2:**
A project generates **2.91 million screenshots** in one month. Peak QPS = **600**`
  }, {
    heading: "pricing-2",
    content: "Screenshots: 2,910,000 - 10,000 (free) = 2,900,000 billable images"
  }, {
    heading: "pricing-2",
    content: "Screenshot fee: 2,900,000 ÷ 10,000 × $0.30 = **$87.00**"
  }, {
    heading: "pricing-2",
    content: "QPS fee: (600 - 500) × $1.5 = **$150.00**"
  }, {
    heading: "pricing-2",
    content: "**Total fee = $237.00**"
  }, {
    heading: "api-reference-2",
    content: "`enableContentInspect(_:config:)`"
  }, {
    heading: "local-screenshot-upload-dynamic-library-2",
    content: "You can find details about the name of the local screenshot upload dynamic library and the increase in app size after integration in App size optimization."
  }, {
    heading: "http-status-codes-2",
    content: "The HTTP status codes for the application server responses are as follows:"
  }, {
    heading: "http-status-codes-2",
    content: "Status Code"
  }, {
    heading: "http-status-codes-2",
    content: "Description"
  }, {
    heading: "http-status-codes-2",
    content: "`200`"
  }, {
    heading: "http-status-codes-2",
    content: "Successful request."
  }, {
    heading: "http-status-codes-2",
    content: "`201`"
  }, {
    heading: "http-status-codes-2",
    content: "Successful request and creation of a new resource."
  }, {
    heading: "http-status-codes-2",
    content: "`206`"
  }, {
    heading: "http-status-codes-2",
    content: "No user streamed during the entire screenshot process, or some screenshot files were not uploaded to the third-party cloud storage."
  }, {
    heading: "http-status-codes-2",
    content: "`400`"
  }, {
    heading: "http-status-codes-2",
    content: "Syntax error in the request (For example, parameter error), and the server cannot understand it."
  }, {
    heading: "http-status-codes-2",
    content: "`401`"
  }, {
    heading: "http-status-codes-2",
    content: "Unauthorized (App ID or Customer Certificate mismatch)."
  }, {
    heading: "http-status-codes-2",
    content: "`404`"
  }, {
    heading: "http-status-codes-2",
    content: "The server cannot find the requested resource (webpage)."
  }, {
    heading: "http-status-codes-2",
    content: "`500`"
  }, {
    heading: "http-status-codes-2",
    content: "Internal server error, unable to complete the request."
  }, {
    heading: "http-status-codes-2",
    content: "`504`"
  }, {
    heading: "http-status-codes-2",
    content: "Internal server error. The server acting as a gateway or proxy did not receive a timely response from the upstream server."
  }, {
    heading: "http-status-codes-2",
    content: "This page shows you how to enable screenshot uploads on your app and handle screenshot upload callbacks."
  }, {
    heading: "http-status-codes-2",
    content: "Local screenshot upload is a paid service. For billing details, refer to Pricing."
  }, {
    heading: "understand-the-tech-3",
    content: "When you enable screenshot upload, you set the interval between screenshots. After each interval, RTC SDK takes a screenshot of the video stream sent by local users, and uploads the image to Agora SDRTN®. Agora SDRTN® uploads each screenshot to your third-party cloud storage and sends a callback notification to your server in the form of an `HTTPS` request."
  }, {
    heading: "understand-the-tech-3",
    content: "**Screenshot upload**"
  }, {
    heading: "prerequisites-3",
    content: "Before implementing the Agora local screenshot upload feature, take the following steps:"
  }, {
    heading: "prerequisites-3",
    content: "**Activate local screenshot upload service**"
  }, {
    heading: "prerequisites-3",
    content: "In Agora Console, select **RTC Services** from the sidebar, then locate the **Video Screenshot Upload** card and turn on its toggle. Select the settings icon on the card to open its configuration panel."
  }, {
    heading: "prerequisites-3",
    content: "**Configure third-party cloud storage**"
  }, {
    heading: "prerequisites-3",
    content: "Select the settings icon on the **Video Screenshot Upload** card to open its configuration panel."
  }, {
    heading: "prerequisites-3",
    content: "Once you turn on **Enable Video Screenshot Upload**, you can't disable it."
  }, {
    heading: "prerequisites-3",
    content: "Currently, the Agora local screenshot upload service only supports Amazon S3 as the third-party cloud storage provider. If you want to use a different provider, contact technical support."
  }, {
    heading: "prerequisites-3",
    content: "Fill in the following information:"
  }, {
    heading: "prerequisites-3",
    content: "**Storage**: The third-party cloud storage provider. Fixed to AWS."
  }, {
    heading: "prerequisites-3",
    content: "**Callback URL**: The server address to receive callback notifications of local screenshot upload results."
  }, {
    heading: "prerequisites-3",
    content: "**Endpoint**: Specify the access domain (Endpoint) of the bucket. See AWS Official Documentation for details."
  }, {
    heading: "prerequisites-3",
    content: "**Region**: The data center region setting for third-party cloud storage. See AWS Official Documentation for details."
  }, {
    heading: "prerequisites-3",
    content: "**Access key**: String type, the access key of the third-party cloud storage. Best practice is to provide a write-only access key."
  }, {
    heading: "prerequisites-3",
    content: "**Secret key**: String type, the secret key of the third-party cloud storage."
  }, {
    heading: "prerequisites-3",
    content: "**Bucket Name**: String type, the bucket name of the third-party cloud storage. The bucket name must comply with the naming rules of the corresponding third-party cloud storage service."
  }, {
    heading: "prerequisites-3",
    content: '**Filename Prefix**: (Optional) JSON Array, an array composed of multiple strings, indicating the storage location of screenshots in the third-party cloud storage. For example, if `fileNamePrefix` = `["directory1","directory2"]`, the prefix `directory1/directory2/` will be added to the screenshot filename, that is, `directory1/directory2/xxx.jpg`. The prefix length, including slashes, must not exceed 128 characters. The string should not contain symbols such as slashes, underscores, parentheses, and so on. The supported character set is as follows:'
  }, {
    heading: "prerequisites-3",
    content: "26 lowercase English letters a-z"
  }, {
    heading: "prerequisites-3",
    content: "26 uppercase English letters A-Z"
  }, {
    heading: "prerequisites-3",
    content: "10 digits 0-9"
  }, {
    heading: "prerequisites-3",
    content: "**Sample configuration**"
  }, {
    heading: "prerequisites-3",
    content: "Storage: AWS"
  }, {
    heading: "prerequisites-3",
    content: "Callback URL: `https://webhook.site/2e75da2d-xxxx-xxxx-xxx-a0ef44a5259d`"
  }, {
    heading: "prerequisites-3",
    content: "Endpoint: `s3.cn-north-1.amazonaws.com.cn`"
  }, {
    heading: "prerequisites-3",
    content: "Region: `cn-north-1`"
  }, {
    heading: "prerequisites-3",
    content: "Access key: `12345678`"
  }, {
    heading: "prerequisites-3",
    content: "Secret key: `abcd123`"
  }, {
    heading: "prerequisites-3",
    content: "Bucket Name: `test-artifacts`"
  }, {
    heading: "prerequisites-3",
    content: "Filename Prefix: `test`"
  }, {
    heading: "prerequisites-3",
    content: "**Integrate RTC SDK**"
  }, {
    heading: "prerequisites-3",
    content: "Integrate the RTC SDK (including the local screenshot upload dynamic library) into your project, join a channel, and publish a video stream. See SDK quickstart for details."
  }, {
    heading: "implement-local-screenshot-upload-3",
    content: "You enable screenshot upload in your Video Calling client and handle the notification callback from Agora on your callback server."
  }, {
    heading: "enable-screenshot-upload-3",
    content: "Call the `enableContentInspect` method to enable the local screenshot upload feature. After successfully enabling the feature, the SDK will capture screenshots at the specified frequency and upload them to the Agora cloud server. To implement this logic, refer to the following code:"
  }, {
    heading: "http-notification-callback-3",
    content: "After a screenshot is successfully uploaded to the Agora SDRTN®, Agora sends a message notification callback to your application server in the form of an `HTTPS` `POST` request. The data format is `JSON`, and the character encoding is `UTF-8`."
  }, {
    heading: "http-notification-callback-3",
    content: "Upon receiving the message notification, your application server must respond with status code `200`. The expected response body format is `JSON`. In any of the following cases, the notification is considered to have failed:"
  }, {
    heading: "http-notification-callback-3",
    content: "No response is received from your server within 5 seconds after sending the message notification."
  }, {
    heading: "http-notification-callback-3",
    content: "The `HTTP` status code of the response is not `200`, or the response body format is not `JSON`."
  }, {
    heading: "http-notification-callback-3",
    content: "The Agora service immediately retries after the first notification failure, and sends the message three times in total."
  }, {
    heading: "reference-3",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "pricing-3",
    content: "Agora charges for local screenshot upload based on two metrics:"
  }, {
    heading: "pricing-3",
    content: "**Screenshot fee**"
  }, {
    heading: "pricing-3",
    content: "**QPS overage fee** (queries per second)"
  }, {
    heading: "local-screenshot-upload-dynamic-library-3",
    content: "You can find details about the name of the local screenshot upload dynamic library and the increase in app size after integration in App size optimization."
  }, {
    heading: "http-status-codes-3",
    content: "The HTTP status codes for the application server responses are as follows:"
  }, {
    heading: "http-status-codes-3",
    content: "Status Code"
  }, {
    heading: "http-status-codes-3",
    content: "Description"
  }, {
    heading: "http-status-codes-3",
    content: "`200`"
  }, {
    heading: "http-status-codes-3",
    content: "Successful request."
  }, {
    heading: "http-status-codes-3",
    content: "`201`"
  }, {
    heading: "http-status-codes-3",
    content: "Successful request and creation of a new resource."
  }, {
    heading: "http-status-codes-3",
    content: "`206`"
  }, {
    heading: "http-status-codes-3",
    content: "No user streamed during the entire screenshot process, or some screenshot files were not uploaded to the third-party cloud storage."
  }, {
    heading: "http-status-codes-3",
    content: "`400`"
  }, {
    heading: "http-status-codes-3",
    content: "Syntax error in the request (for example, parameter error), and the server cannot understand it."
  }, {
    heading: "http-status-codes-3",
    content: "`401`"
  }, {
    heading: "http-status-codes-3",
    content: "Unauthorized (App ID or Customer Certificate mismatch)."
  }, {
    heading: "http-status-codes-3",
    content: "`404`"
  }, {
    heading: "http-status-codes-3",
    content: "The server cannot find the requested resource (webpage)."
  }, {
    heading: "http-status-codes-3",
    content: "`500`"
  }, {
    heading: "http-status-codes-3",
    content: "Internal server error, unable to complete the request."
  }, {
    heading: "http-status-codes-3",
    content: "`504`"
  }, {
    heading: "http-status-codes-3",
    content: "Internal server error. The server acting as a gateway or proxy did not receive a timely response from the upstream server."
  }, {
    heading: "http-status-codes-3",
    content: "This page shows you how to enable screenshot uploads on your app and handle screenshot upload callbacks."
  }, {
    heading: "http-status-codes-3",
    content: "Local screenshot upload is a paid service. For billing details, refer to Pricing."
  }, {
    heading: "understand-the-tech-4",
    content: "When you enable screenshot upload, you set the interval between screenshots. After each interval, RTC SDK takes a screenshot of the video stream sent by local users, and uploads the image to Agora SDRTN®. Agora SDRTN® uploads each screenshot to your third-party cloud storage and sends a callback notification to your server in the form of an `HTTPS` request."
  }, {
    heading: "understand-the-tech-4",
    content: "**Screenshot upload**"
  }, {
    heading: "prerequisites-4",
    content: "Before implementing the Agora local screenshot upload feature, take the following steps:"
  }, {
    heading: "prerequisites-4",
    content: "**Activate local screenshot upload service**"
  }, {
    heading: "prerequisites-4",
    content: "In Agora Console, select **RTC Services** from the sidebar, then locate the **Video Screenshot Upload** card and turn on its toggle. Select the settings icon on the card to open its configuration panel."
  }, {
    heading: "prerequisites-4",
    content: "**Configure third-party cloud storage**"
  }, {
    heading: "prerequisites-4",
    content: "Select the settings icon on the **Video Screenshot Upload** card to open its configuration panel."
  }, {
    heading: "prerequisites-4",
    content: "Once you turn on **Enable Video Screenshot Upload**, you can't disable it."
  }, {
    heading: "prerequisites-4",
    content: "Currently, the Agora local screenshot upload service only supports Amazon S3 as the third-party cloud storage provider. If you want to use a different provider, contact technical support."
  }, {
    heading: "prerequisites-4",
    content: "Fill in the following information:"
  }, {
    heading: "prerequisites-4",
    content: "**Storage**: The third-party cloud storage provider. Fixed to AWS."
  }, {
    heading: "prerequisites-4",
    content: "**Callback URL**: The server address to receive callback notifications of local screenshot upload results."
  }, {
    heading: "prerequisites-4",
    content: "**Endpoint**: Specify the access domain (Endpoint) of the bucket. See AWS Official Documentation for details."
  }, {
    heading: "prerequisites-4",
    content: "**Region**: The data center region setting for third-party cloud storage. See AWS Official Documentation for details."
  }, {
    heading: "prerequisites-4",
    content: "**Access key**: String type, the access key of the third-party cloud storage. Best practice is to provide a write-only access key."
  }, {
    heading: "prerequisites-4",
    content: "**Secret key**: String type, the secret key of the third-party cloud storage."
  }, {
    heading: "prerequisites-4",
    content: "**Bucket Name**: String type, the bucket name of the third-party cloud storage. The bucket name must comply with the naming rules of the corresponding third-party cloud storage service."
  }, {
    heading: "prerequisites-4",
    content: '**Filename Prefix**: (Optional) JSON Array, an array composed of multiple strings, indicating the storage location of screenshots in the third-party cloud storage. For example, if `fileNamePrefix` = `["directory1","directory2"]`, the prefix `directory1/directory2/` will be added to the screenshot filename, that is, `directory1/directory2/xxx.jpg`. The prefix length, including slashes, must not exceed 128 characters. The string should not contain symbols such as slashes, underscores, parentheses, and so on. The supported character set is as follows:'
  }, {
    heading: "prerequisites-4",
    content: "26 lowercase English letters a-z"
  }, {
    heading: "prerequisites-4",
    content: "26 uppercase English letters A-Z"
  }, {
    heading: "prerequisites-4",
    content: "10 digits 0-9"
  }, {
    heading: "prerequisites-4",
    content: "**Sample configuration**"
  }, {
    heading: "prerequisites-4",
    content: "Storage: AWS"
  }, {
    heading: "prerequisites-4",
    content: "Callback URL: `https://webhook.site/2e75da2d-xxxx-xxxx-xxx-a0ef44a5259d`"
  }, {
    heading: "prerequisites-4",
    content: "Endpoint: `s3.cn-north-1.amazonaws.com.cn`"
  }, {
    heading: "prerequisites-4",
    content: "Region: `cn-north-1`"
  }, {
    heading: "prerequisites-4",
    content: "Access key: `12345678`"
  }, {
    heading: "prerequisites-4",
    content: "Secret key: `abcd123`"
  }, {
    heading: "prerequisites-4",
    content: "Bucket Name: `test-artifacts`"
  }, {
    heading: "prerequisites-4",
    content: "Filename Prefix: `test`"
  }, {
    heading: "prerequisites-4",
    content: "**Integrate RTC SDK**"
  }, {
    heading: "prerequisites-4",
    content: "Integrate the RTC SDK (including the local screenshot upload dynamic library) into your project, join a channel, and publish a video stream. See SDK quickstart for details."
  }, {
    heading: "implement-local-screenshot-upload-4",
    content: "You enable screenshot upload in your Video Calling client and handle the notification callback from Agora on your callback server."
  }, {
    heading: "enable-screenshot-upload-4",
    content: "Call the `enableContentInspect` method to enable the local screenshot upload feature. After successfully enabling the feature, the SDK will capture screenshots at the specified frequency and upload them to the Agora cloud server. To implement this logic, refer to the following code:"
  }, {
    heading: "http-notification-callback-4",
    content: "After a screenshot is successfully uploaded to the Agora SDRTN®, Agora sends a message notification callback to your application server in the form of an `HTTPS` `POST` request. The data format is `JSON`, and the character encoding is `UTF-8`."
  }, {
    heading: "http-notification-callback-4",
    content: "Upon receiving the message notification, your application server must respond with status code `200`. The expected response body format is `JSON`. In any of the following cases, the notification is considered to have failed:"
  }, {
    heading: "http-notification-callback-4",
    content: "No response is received from your server within 5 seconds after sending the message notification."
  }, {
    heading: "http-notification-callback-4",
    content: "The `HTTP` status code of the response is not `200`, or the response body format is not `JSON`."
  }, {
    heading: "http-notification-callback-4",
    content: "The Agora service immediately retries after the first notification failure, and sends the message three times in total."
  }, {
    heading: "request-header-3",
    content: "Field Name"
  }, {
    heading: "request-header-3",
    content: "Value"
  }, {
    heading: "request-header-3",
    content: "`Content-Type`"
  }, {
    heading: "request-header-3",
    content: "`application/json;charset=utf-8`"
  }, {
    heading: "request-body-3",
    content: "The request body is a JSON Object, containing the following fields:"
  }, {
    heading: "request-body-3",
    content: "Field"
  }, {
    heading: "request-body-3",
    content: "Type"
  }, {
    heading: "request-body-3",
    content: "Description"
  }, {
    heading: "request-body-3",
    content: "`requestId`"
  }, {
    heading: "request-body-3",
    content: "String"
  }, {
    heading: "request-body-3",
    content: "Callback notification ID, identifying an event notification from the Agora business server."
  }, {
    heading: "request-body-3",
    content: "`callbackParam`"
  }, {
    heading: "request-body-3",
    content: "JSON Object"
  }, {
    heading: "request-body-3",
    content: "Custom fields passed in the callback, currently includes the `cname` field, representing the channel name."
  }, {
    heading: "request-body-3",
    content: "`callbackData`"
  }, {
    heading: "request-body-3",
    content: "String"
  }, {
    heading: "request-body-3",
    content: "String data passed through by the SDK local screenshot upload module."
  }, {
    heading: "request-body-3",
    content: "`checksum`"
  }, {
    heading: "request-body-3",
    content: "String"
  }, {
    heading: "request-body-3",
    content: "MD5 value calculated from the parameters `callbackAddr`, `code`, `object`, and `requestId`. Used to verify whether this callback notification comes from the local screenshot upload service."
  }, {
    heading: "request-body-3",
    content: "`object`"
  }, {
    heading: "request-body-3",
    content: "String"
  }, {
    heading: "request-body-3",
    content: "Name of the screenshot file. The naming convention for this file is: `//___uid_s___uid_e__utc.jpg`. The meanings of the fields in the filename are as follows: `: Screenshot ID, a unique identifier for a screenshot.`: Channel name to which the user being screenshotted belongs.`: The user ID set when joining the channel.`: File type, supports only `video`.\\`\\`: Unix timestamp of this screenshot. UTC time, consists of year, month, day, hour, minute, second, and millisecond. For example, if `utc` is equal to `20190611073246073`, it represents the start time of this slice file as UTC June 11, 2019, 7:32:46.073 AM."
  }, {
    heading: "request-body-3",
    content: "`code`"
  }, {
    heading: "request-body-3",
    content: "Number"
  }, {
    heading: "request-body-3",
    content: "Status code of this screenshot. `200` indicates that the screenshot is completed."
  }, {
    heading: "request-body-3",
    content: "`msg`"
  }, {
    heading: "request-body-3",
    content: "String"
  }, {
    heading: "request-body-3",
    content: 'Status of this screenshot. `"Supervise complete"` indicates that the screenshot is completed.'
  }, {
    heading: "request-body-3",
    content: "`channelName`"
  }, {
    heading: "request-body-3",
    content: "String"
  }, {
    heading: "request-body-3",
    content: "Channel name to which the user being screenshotted belongs. Consistent with `object.cname`."
  }, {
    heading: "request-body-3",
    content: "`userId`"
  }, {
    heading: "request-body-3",
    content: "String"
  }, {
    heading: "request-body-3",
    content: "User ID of the user being screenshotted. Consistent with `object.uid`."
  }, {
    heading: "request-body-3",
    content: "`timestamp`"
  }, {
    heading: "request-body-3",
    content: "Int"
  }, {
    heading: "request-body-3",
    content: "Unix timestamp (milliseconds) of this screenshot. UTC time, consistent with `object.utc`."
  }, {
    heading: "request-body-3",
    content: "**Request Example**"
  }, {
    heading: "response-3",
    content: "After receiving the message notification, your application server is expected to respond. The response package format is JSON. In any of the following cases, the Agora service considers the notification as failed:"
  }, {
    heading: "response-3",
    content: "After sending a message notification, no response is received from your server within 5 seconds."
  }, {
    heading: "response-3",
    content: "The HTTP status code of the response is not `200`, or the response body format is not JSON."
  }, {
    heading: "response-3",
    content: "The Agora service immediately retries and sends the message notification again after the first notification fails. It attempts to notify you three times in total."
  }, {
    heading: "reference-4",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "pricing-4",
    content: "Agora charges for local screenshot upload based on two metrics:"
  }, {
    heading: "pricing-4",
    content: "**Screenshot fee**"
  }, {
    heading: "pricing-4",
    content: "**QPS overage fee** (queries per second)"
  }, {
    heading: "pricing-4",
    content: "At the end of each month, Agora calculates:"
  }, {
    heading: "pricing-4",
    content: "The total number of screenshots generated"
  }, {
    heading: "pricing-4",
    content: "The monthly peak QPS if it exceeds the free quota"
  }, {
    heading: "pricing-4",
    content: "**Billing formula:**"
  }, {
    heading: "pricing-4",
    content: "Billing Type"
  }, {
    heading: "pricing-4",
    content: "Unit Price"
  }, {
    heading: "pricing-4",
    content: "Discount Policy"
  }, {
    heading: "pricing-4",
    content: "Screenshot Fee"
  }, {
    heading: "pricing-4",
    content: "$0.30 per 10,000 images"
  }, {
    heading: "pricing-4",
    content: "First 10,000 images per month are free"
  }, {
    heading: "pricing-4",
    content: "QPS Overage Fee"
  }, {
    heading: "pricing-4",
    content: "$1.5 per QPS"
  }, {
    heading: "pricing-4",
    content: `Includes 500 QPS per month:- ≤ 500 QPS: No charge

- > 500 QPS: Charged based on monthly peak QPS`
  }, {
    heading: "pricing-4",
    content: `**Example 1:**
A project generates **910,000 screenshots** in one month. Peak QPS = **100**`
  }, {
    heading: "pricing-4",
    content: "Screenshots: 910,000 - 10,000 (free) = 900,000 billable images"
  }, {
    heading: "pricing-4",
    content: "Screenshot fee: 900,000 ÷ 10,000 × $0.30 = **$27.00**"
  }, {
    heading: "pricing-4",
    content: "QPS fee: 100 ≤ 500 (free), so **$0**"
  }, {
    heading: "pricing-4",
    content: "**Total fee = $27.00**"
  }, {
    heading: "pricing-4",
    content: `**Example 2:**
A project generates **2.91 million screenshots** in one month. Peak QPS = **600**`
  }, {
    heading: "pricing-4",
    content: "Screenshots: 2,910,000 - 10,000 (free) = 2,900,000 billable images"
  }, {
    heading: "pricing-4",
    content: "Screenshot fee: 2,900,000 ÷ 10,000 × $0.30 = **$87.00**"
  }, {
    heading: "pricing-4",
    content: "QPS fee: (600 - 500) × $1.5 = **$150.00**"
  }, {
    heading: "pricing-4",
    content: "**Total fee = $237.00**"
  }, {
    heading: "api-reference-3",
    content: "`enableContentInspect`"
  }, {
    heading: "local-screenshot-upload-dynamic-library-4",
    content: "You can find details about the name of the local screenshot upload dynamic library and the increase in app size after integration in App size optimization."
  }, {
    heading: "http-status-codes-4",
    content: "The HTTP status codes for the application server responses are as follows:"
  }, {
    heading: "http-status-codes-4",
    content: "Status Code"
  }, {
    heading: "http-status-codes-4",
    content: "Description"
  }, {
    heading: "http-status-codes-4",
    content: "`200`"
  }, {
    heading: "http-status-codes-4",
    content: "Successful request."
  }, {
    heading: "http-status-codes-4",
    content: "`201`"
  }, {
    heading: "http-status-codes-4",
    content: "Successful request and creation of a new resource."
  }, {
    heading: "http-status-codes-4",
    content: "`206`"
  }, {
    heading: "http-status-codes-4",
    content: "No user streamed during the entire screenshot process, or some screenshot files were not uploaded to the third-party cloud storage."
  }, {
    heading: "http-status-codes-4",
    content: "`400`"
  }, {
    heading: "http-status-codes-4",
    content: "Syntax error in the request (For example, parameter error), and the server cannot understand it."
  }, {
    heading: "http-status-codes-4",
    content: "`401`"
  }, {
    heading: "http-status-codes-4",
    content: "Unauthorized (App ID or Customer Certificate mismatch)."
  }, {
    heading: "http-status-codes-4",
    content: "`404`"
  }, {
    heading: "http-status-codes-4",
    content: "The server cannot find the requested resource (webpage)."
  }, {
    heading: "http-status-codes-4",
    content: "`500`"
  }, {
    heading: "http-status-codes-4",
    content: "Internal server error, unable to complete the request."
  }, {
    heading: "http-status-codes-4",
    content: "`504`"
  }, {
    heading: "http-status-codes-4",
    content: "Internal server error. The server acting as a gateway or proxy did not receive a timely response from the upstream server."
  }, {
    heading: "http-status-codes-4",
    content: "This page shows you how to enable screenshot uploads on your app and handle screenshot upload callbacks."
  }, {
    heading: "http-status-codes-4",
    content: "Local screenshot upload is a paid service. For billing details, refer to Pricing."
  }, {
    heading: "understand-the-tech-5",
    content: "When you enable screenshot upload, you set the interval between screenshots. After each interval, RTC SDK takes a screenshot of the video stream sent by local users, and uploads the image to Agora SDRTN®. Agora SDRTN® uploads each screenshot to your third-party cloud storage and sends a callback notification to your server in the form of an `HTTPS` request."
  }, {
    heading: "understand-the-tech-5",
    content: "**Screenshot upload**"
  }, {
    heading: "prerequisites-5",
    content: "Before implementing the Agora local screenshot upload feature, take the following steps:"
  }, {
    heading: "prerequisites-5",
    content: "**Activate local screenshot upload service**"
  }, {
    heading: "prerequisites-5",
    content: "In Agora Console, select **RTC Services** from the sidebar, then locate the **Video Screenshot Upload** card and turn on its toggle. Select the settings icon on the card to open its configuration panel."
  }, {
    heading: "prerequisites-5",
    content: "**Configure third-party cloud storage**"
  }, {
    heading: "prerequisites-5",
    content: "Select the settings icon on the **Video Screenshot Upload** card to open its configuration panel."
  }, {
    heading: "prerequisites-5",
    content: "Once you turn on **Enable Video Screenshot Upload**, you can't disable it."
  }, {
    heading: "prerequisites-5",
    content: "Currently, the Agora local screenshot upload service only supports Amazon S3 as the third-party cloud storage provider. If you want to use a different provider, contact technical support."
  }, {
    heading: "prerequisites-5",
    content: "Fill in the following information:"
  }, {
    heading: "prerequisites-5",
    content: "**Storage**: The third-party cloud storage provider. Fixed to AWS."
  }, {
    heading: "prerequisites-5",
    content: "**Callback URL**: The server address to receive callback notifications of local screenshot upload results."
  }, {
    heading: "prerequisites-5",
    content: "**Endpoint**: Specify the access domain (Endpoint) of the bucket. See AWS Official Documentation for details."
  }, {
    heading: "prerequisites-5",
    content: "**Region**: The data center region setting for third-party cloud storage. See AWS Official Documentation for details."
  }, {
    heading: "prerequisites-5",
    content: "**Access key**: String type, the access key of the third-party cloud storage. Best practice is to provide a write-only access key."
  }, {
    heading: "prerequisites-5",
    content: "**Secret key**: String type, the secret key of the third-party cloud storage."
  }, {
    heading: "prerequisites-5",
    content: "**Bucket Name**: String type, the bucket name of the third-party cloud storage. The bucket name must comply with the naming rules of the corresponding third-party cloud storage service."
  }, {
    heading: "prerequisites-5",
    content: '**Filename Prefix**: (Optional) JSON Array, an array composed of multiple strings, indicating the storage location of screenshots in the third-party cloud storage. For example, if `fileNamePrefix` = `["directory1","directory2"]`, the prefix `directory1/directory2/` will be added to the screenshot filename, that is, `directory1/directory2/xxx.jpg`. The prefix length, including slashes, must not exceed 128 characters. The string should not contain symbols such as slashes, underscores, parentheses, and so on. The supported character set is as follows:'
  }, {
    heading: "prerequisites-5",
    content: "26 lowercase English letters a-z"
  }, {
    heading: "prerequisites-5",
    content: "26 uppercase English letters A-Z"
  }, {
    heading: "prerequisites-5",
    content: "10 digits 0-9"
  }, {
    heading: "prerequisites-5",
    content: "**Sample configuration**"
  }, {
    heading: "prerequisites-5",
    content: "Storage: AWS"
  }, {
    heading: "prerequisites-5",
    content: "Callback URL: `https://webhook.site/2e75da2d-xxxx-xxxx-xxx-a0ef44a5259d`"
  }, {
    heading: "prerequisites-5",
    content: "Endpoint: `s3.cn-north-1.amazonaws.com.cn`"
  }, {
    heading: "prerequisites-5",
    content: "Region: `cn-north-1`"
  }, {
    heading: "prerequisites-5",
    content: "Access key: `12345678`"
  }, {
    heading: "prerequisites-5",
    content: "Secret key: `abcd123`"
  }, {
    heading: "prerequisites-5",
    content: "Bucket Name: `test-artifacts`"
  }, {
    heading: "prerequisites-5",
    content: "Filename Prefix: `test`"
  }, {
    heading: "prerequisites-5",
    content: "**Integrate RTC SDK**"
  }, {
    heading: "prerequisites-5",
    content: "Integrate the RTC SDK (including the local screenshot upload dynamic library) into your project, join a channel, and publish a video stream. See SDK quickstart for details."
  }, {
    heading: "implement-local-screenshot-upload-5",
    content: "You enable screenshot upload in your Video Calling client and handle the notification callback from Agora on your callback server."
  }, {
    heading: "enable-screenshot-upload-5",
    content: "Call the `enableContentInspect` method to enable the local screenshot upload feature. After successfully enabling the feature, the SDK will capture screenshots at the specified frequency and upload them to the Agora cloud server. To implement this logic, refer to the following code:"
  }, {
    heading: "http-notification-callback-5",
    content: "After a screenshot is successfully uploaded to the Agora SDRTN®, Agora sends a message notification callback to your application server in the form of an `HTTPS` `POST` request. The data format is `JSON`, and the character encoding is `UTF-8`."
  }, {
    heading: "http-notification-callback-5",
    content: "Upon receiving the message notification, your application server must respond with status code `200`. The expected response body format is `JSON`. In any of the following cases, the notification is considered to have failed:"
  }, {
    heading: "http-notification-callback-5",
    content: "No response is received from your server within 5 seconds after sending the message notification."
  }, {
    heading: "http-notification-callback-5",
    content: "The `HTTP` status code of the response is not `200`, or the response body format is not `JSON`."
  }, {
    heading: "http-notification-callback-5",
    content: "The Agora service immediately retries after the first notification failure, and sends the message three times in total."
  }, {
    heading: "request-header-4",
    content: "Field Name"
  }, {
    heading: "request-header-4",
    content: "Value"
  }, {
    heading: "request-header-4",
    content: "`Content-Type`"
  }, {
    heading: "request-header-4",
    content: "`application/json;charset=utf-8`"
  }, {
    heading: "request-body-4",
    content: "The request body is a JSON Object, containing the following fields:"
  }, {
    heading: "request-body-4",
    content: "Field"
  }, {
    heading: "request-body-4",
    content: "Type"
  }, {
    heading: "request-body-4",
    content: "Description"
  }, {
    heading: "request-body-4",
    content: "`requestId`"
  }, {
    heading: "request-body-4",
    content: "String"
  }, {
    heading: "request-body-4",
    content: "Callback notification ID, identifying an event notification from the Agora business server."
  }, {
    heading: "request-body-4",
    content: "`callbackParam`"
  }, {
    heading: "request-body-4",
    content: "JSON Object"
  }, {
    heading: "request-body-4",
    content: "Custom fields passed in the callback, currently includes the `cname` field, representing the channel name."
  }, {
    heading: "request-body-4",
    content: "`callbackData`"
  }, {
    heading: "request-body-4",
    content: "String"
  }, {
    heading: "request-body-4",
    content: "String data passed through by the SDK local screenshot upload module."
  }, {
    heading: "request-body-4",
    content: "`checksum`"
  }, {
    heading: "request-body-4",
    content: "String"
  }, {
    heading: "request-body-4",
    content: "MD5 value calculated from the parameters `callbackAddr`, `code`, `object`, and `requestId`. Used to verify whether this callback notification comes from the local screenshot upload service."
  }, {
    heading: "request-body-4",
    content: "`object`"
  }, {
    heading: "request-body-4",
    content: "String"
  }, {
    heading: "request-body-4",
    content: "Name of the screenshot file. The naming convention for this file is: `//___uid_s___uid_e__utc.jpg`. The meanings of the fields in the filename are as follows: `: Screenshot ID, a unique identifier for a screenshot.`: Channel name to which the user being screenshotted belongs.`: The user ID set when joining the channel.`: File type, supports only `video`.\\`\\`: Unix timestamp of this screenshot. UTC time, consists of year, month, day, hour, minute, second, and millisecond. For example, if `utc` is equal to `20190611073246073`, it represents the start time of this slice file as UTC June 11, 2019, 7:32:46.073 AM."
  }, {
    heading: "request-body-4",
    content: "`code`"
  }, {
    heading: "request-body-4",
    content: "Number"
  }, {
    heading: "request-body-4",
    content: "Status code of this screenshot. `200` indicates that the screenshot is completed."
  }, {
    heading: "request-body-4",
    content: "`msg`"
  }, {
    heading: "request-body-4",
    content: "String"
  }, {
    heading: "request-body-4",
    content: 'Status of this screenshot. `"Supervise complete"` indicates that the screenshot is completed.'
  }, {
    heading: "request-body-4",
    content: "`channelName`"
  }, {
    heading: "request-body-4",
    content: "String"
  }, {
    heading: "request-body-4",
    content: "Channel name to which the user being screenshotted belongs. Consistent with `object.cname`."
  }, {
    heading: "request-body-4",
    content: "`userId`"
  }, {
    heading: "request-body-4",
    content: "String"
  }, {
    heading: "request-body-4",
    content: "User ID of the user being screenshotted. Consistent with `object.uid`."
  }, {
    heading: "request-body-4",
    content: "`timestamp`"
  }, {
    heading: "request-body-4",
    content: "Int"
  }, {
    heading: "request-body-4",
    content: "Unix timestamp (milliseconds) of this screenshot. UTC time, consistent with `object.utc`."
  }, {
    heading: "request-body-4",
    content: "**Request Example**"
  }, {
    heading: "response-4",
    content: "After receiving the message notification, your application server is expected to respond. The response package format is JSON. In any of the following cases, the Agora service considers the notification as failed:"
  }, {
    heading: "response-4",
    content: "After sending a message notification, no response is received from your server within 5 seconds."
  }, {
    heading: "response-4",
    content: "The HTTP status code of the response is not `200`, or the response body format is not JSON."
  }, {
    heading: "response-4",
    content: "The Agora service immediately retries and sends the message notification again after the first notification fails. It attempts to notify you three times in total."
  }, {
    heading: "reference-5",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "pricing-5",
    content: "Agora charges for local screenshot upload based on two metrics:"
  }, {
    heading: "pricing-5",
    content: "**Screenshot fee**"
  }, {
    heading: "pricing-5",
    content: "**QPS overage fee** (queries per second)"
  }, {
    heading: "pricing-5",
    content: "At the end of each month, Agora calculates:"
  }, {
    heading: "pricing-5",
    content: "The total number of screenshots generated"
  }, {
    heading: "pricing-5",
    content: "The monthly peak QPS if it exceeds the free quota"
  }, {
    heading: "pricing-5",
    content: "**Billing formula:**"
  }, {
    heading: "pricing-5",
    content: "Billing Type"
  }, {
    heading: "pricing-5",
    content: "Unit Price"
  }, {
    heading: "pricing-5",
    content: "Discount Policy"
  }, {
    heading: "pricing-5",
    content: "Screenshot Fee"
  }, {
    heading: "pricing-5",
    content: "$0.30 per 10,000 images"
  }, {
    heading: "pricing-5",
    content: "First 10,000 images per month are free"
  }, {
    heading: "pricing-5",
    content: "QPS Overage Fee"
  }, {
    heading: "pricing-5",
    content: "$1.5 per QPS"
  }, {
    heading: "pricing-5",
    content: `Includes 500 QPS per month:- ≤ 500 QPS: No charge

- > 500 QPS: Charged based on monthly peak QPS`
  }, {
    heading: "pricing-5",
    content: `**Example 1:**
A project generates **910,000 screenshots** in one month. Peak QPS = **100**`
  }, {
    heading: "pricing-5",
    content: "Screenshots: 910,000 - 10,000 (free) = 900,000 billable images"
  }, {
    heading: "pricing-5",
    content: "Screenshot fee: 900,000 ÷ 10,000 × $0.30 = **$27.00**"
  }, {
    heading: "pricing-5",
    content: "QPS fee: 100 ≤ 500 (free), so **$0**"
  }, {
    heading: "pricing-5",
    content: "**Total fee = $27.00**"
  }, {
    heading: "pricing-5",
    content: `**Example 2:**
A project generates **2.91 million screenshots** in one month. Peak QPS = **600**`
  }, {
    heading: "pricing-5",
    content: "Screenshots: 2,910,000 - 10,000 (free) = 2,900,000 billable images"
  }, {
    heading: "pricing-5",
    content: "Screenshot fee: 2,900,000 ÷ 10,000 × $0.30 = **$87.00**"
  }, {
    heading: "pricing-5",
    content: "QPS fee: (600 - 500) × $1.5 = **$150.00**"
  }, {
    heading: "pricing-5",
    content: "**Total fee = $237.00**"
  }, {
    heading: "api-reference-4",
    content: "`enableContentInspect`"
  }, {
    heading: "local-screenshot-upload-dynamic-library-5",
    content: "You can find details about the name of the local screenshot upload dynamic library and the increase in app size after integration in App size optimization."
  }, {
    heading: "http-status-codes-5",
    content: "The HTTP status codes for the application server responses are as follows:"
  }, {
    heading: "http-status-codes-5",
    content: "Status Code"
  }, {
    heading: "http-status-codes-5",
    content: "Description"
  }, {
    heading: "http-status-codes-5",
    content: "`200`"
  }, {
    heading: "http-status-codes-5",
    content: "Successful request."
  }, {
    heading: "http-status-codes-5",
    content: "`201`"
  }, {
    heading: "http-status-codes-5",
    content: "Successful request and creation of a new resource."
  }, {
    heading: "http-status-codes-5",
    content: "`206`"
  }, {
    heading: "http-status-codes-5",
    content: "No user streamed during the entire screenshot process, or some screenshot files were not uploaded to the third-party cloud storage."
  }, {
    heading: "http-status-codes-5",
    content: "`400`"
  }, {
    heading: "http-status-codes-5",
    content: "Syntax error in the request (For example, parameter error), and the server cannot understand it."
  }, {
    heading: "http-status-codes-5",
    content: "`401`"
  }, {
    heading: "http-status-codes-5",
    content: "Unauthorized (App ID or Customer Certificate mismatch)."
  }, {
    heading: "http-status-codes-5",
    content: "`404`"
  }, {
    heading: "http-status-codes-5",
    content: "The server cannot find the requested resource (webpage)."
  }, {
    heading: "http-status-codes-5",
    content: "`500`"
  }, {
    heading: "http-status-codes-5",
    content: "Internal server error, unable to complete the request."
  }, {
    heading: "http-status-codes-5",
    content: "`504`"
  }, {
    heading: "http-status-codes-5",
    content: "Internal server error. The server acting as a gateway or proxy did not receive a timely response from the upstream server."
  }, {
    heading: "http-status-codes-5",
    content: "This page shows you how to enable screenshot uploads on your app and handle screenshot upload callbacks."
  }, {
    heading: "http-status-codes-5",
    content: "Local screenshot upload is a paid service. For billing details, refer to Pricing."
  }, {
    heading: "understand-the-tech-6",
    content: "When you enable screenshot upload, you set the interval between screenshots. After each interval, RTC SDK takes a screenshot of the video stream sent by local users, and uploads the image to Agora SDRTN®. Agora SDRTN® uploads each screenshot to your third-party cloud storage and sends a callback notification to your server in the form of an `HTTPS` request."
  }, {
    heading: "understand-the-tech-6",
    content: "**Screenshot upload**"
  }, {
    heading: "prerequisites-6",
    content: "Before implementing the Agora local screenshot upload feature, take the following steps:"
  }, {
    heading: "prerequisites-6",
    content: "**Activate local screenshot upload service**"
  }, {
    heading: "prerequisites-6",
    content: "In Agora Console, select **RTC Services** from the sidebar, then locate the **Video Screenshot Upload** card and turn on its toggle. Select the settings icon on the card to open its configuration panel."
  }, {
    heading: "prerequisites-6",
    content: "**Configure third-party cloud storage**"
  }, {
    heading: "prerequisites-6",
    content: "Select the settings icon on the **Video Screenshot Upload** card to open its configuration panel."
  }, {
    heading: "prerequisites-6",
    content: "Once you turn on **Enable Video Screenshot Upload**, you can't disable it."
  }, {
    heading: "prerequisites-6",
    content: "Currently, the Agora local screenshot upload service only supports Amazon S3 as the third-party cloud storage provider. If you want to use a different provider, contact technical support."
  }, {
    heading: "prerequisites-6",
    content: "Fill in the following information:"
  }, {
    heading: "prerequisites-6",
    content: "**Storage**: The third-party cloud storage provider. Fixed to AWS."
  }, {
    heading: "prerequisites-6",
    content: "**Callback URL**: The server address to receive callback notifications of local screenshot upload results."
  }, {
    heading: "prerequisites-6",
    content: "**Endpoint**: Specify the access domain (Endpoint) of the bucket. See AWS Official Documentation for details."
  }, {
    heading: "prerequisites-6",
    content: "**Region**: The data center region setting for third-party cloud storage. See AWS Official Documentation for details."
  }, {
    heading: "prerequisites-6",
    content: "**Access key**: String type, the access key of the third-party cloud storage. Best practice is to provide a write-only access key."
  }, {
    heading: "prerequisites-6",
    content: "**Secret key**: String type, the secret key of the third-party cloud storage."
  }, {
    heading: "prerequisites-6",
    content: "**Bucket Name**: String type, the bucket name of the third-party cloud storage. The bucket name must comply with the naming rules of the corresponding third-party cloud storage service."
  }, {
    heading: "prerequisites-6",
    content: '**Filename Prefix**: (Optional) JSON Array, an array composed of multiple strings, indicating the storage location of screenshots in the third-party cloud storage. For example, if `fileNamePrefix` = `["directory1","directory2"]`, the prefix `directory1/directory2/` will be added to the screenshot filename, that is, `directory1/directory2/xxx.jpg`. The prefix length, including slashes, must not exceed 128 characters. The string should not contain symbols such as slashes, underscores, parentheses, and so on. The supported character set is as follows:'
  }, {
    heading: "prerequisites-6",
    content: "26 lowercase English letters a-z"
  }, {
    heading: "prerequisites-6",
    content: "26 uppercase English letters A-Z"
  }, {
    heading: "prerequisites-6",
    content: "10 digits 0-9"
  }, {
    heading: "prerequisites-6",
    content: "**Sample configuration**"
  }, {
    heading: "prerequisites-6",
    content: "Storage: AWS"
  }, {
    heading: "prerequisites-6",
    content: "Callback URL: `https://webhook.site/2e75da2d-xxxx-xxxx-xxx-a0ef44a5259d`"
  }, {
    heading: "prerequisites-6",
    content: "Endpoint: `s3.cn-north-1.amazonaws.com.cn`"
  }, {
    heading: "prerequisites-6",
    content: "Region: `cn-north-1`"
  }, {
    heading: "prerequisites-6",
    content: "Access key: `12345678`"
  }, {
    heading: "prerequisites-6",
    content: "Secret key: `abcd123`"
  }, {
    heading: "prerequisites-6",
    content: "Bucket Name: `test-artifacts`"
  }, {
    heading: "prerequisites-6",
    content: "Filename Prefix: `test`"
  }, {
    heading: "prerequisites-6",
    content: "**Integrate RTC SDK**"
  }, {
    heading: "prerequisites-6",
    content: "Integrate the RTC SDK (including the local screenshot upload dynamic library) into your project, join a channel, and publish a video stream. See SDK quickstart for details."
  }, {
    heading: "implement-local-screenshot-upload-6",
    content: "You enable screenshot upload in your Video Calling client and handle the notification callback from Agora on your callback server."
  }, {
    heading: "enable-screenshot-upload-6",
    content: "Call the `enableContentInspect` method to enable the local screenshot upload feature. After successfully enabling the feature, the SDK will capture screenshots at the specified frequency and upload them to the Agora cloud server. To implement this logic, refer to the following code:"
  }, {
    heading: "http-notification-callback-6",
    content: "After a screenshot is successfully uploaded to the Agora SDRTN®, Agora sends a message notification callback to your application server in the form of an `HTTPS` `POST` request. The data format is `JSON`, and the character encoding is `UTF-8`."
  }, {
    heading: "http-notification-callback-6",
    content: "Upon receiving the message notification, your application server must respond with status code `200`. The expected response body format is `JSON`. In any of the following cases, the notification is considered to have failed:"
  }, {
    heading: "http-notification-callback-6",
    content: "No response is received from your server within 5 seconds after sending the message notification."
  }, {
    heading: "http-notification-callback-6",
    content: "The `HTTP` status code of the response is not `200`, or the response body format is not `JSON`."
  }, {
    heading: "http-notification-callback-6",
    content: "The Agora service immediately retries after the first notification failure, and sends the message three times in total."
  }, {
    heading: "request-header-5",
    content: "Field Name"
  }, {
    heading: "request-header-5",
    content: "Value"
  }, {
    heading: "request-header-5",
    content: "`Content-Type`"
  }, {
    heading: "request-header-5",
    content: "`application/json;charset=utf-8`"
  }, {
    heading: "request-body-5",
    content: "The request body is a JSON Object, containing the following fields:"
  }, {
    heading: "request-body-5",
    content: "Field"
  }, {
    heading: "request-body-5",
    content: "Type"
  }, {
    heading: "request-body-5",
    content: "Description"
  }, {
    heading: "request-body-5",
    content: "`requestId`"
  }, {
    heading: "request-body-5",
    content: "String"
  }, {
    heading: "request-body-5",
    content: "Callback notification ID, identifying an event notification from the Agora business server."
  }, {
    heading: "request-body-5",
    content: "`callbackParam`"
  }, {
    heading: "request-body-5",
    content: "JSON Object"
  }, {
    heading: "request-body-5",
    content: "Custom fields passed in the callback, currently includes the `cname` field, representing the channel name."
  }, {
    heading: "request-body-5",
    content: "`callbackData`"
  }, {
    heading: "request-body-5",
    content: "String"
  }, {
    heading: "request-body-5",
    content: "String data passed through by the SDK local screenshot upload module."
  }, {
    heading: "request-body-5",
    content: "`checksum`"
  }, {
    heading: "request-body-5",
    content: "String"
  }, {
    heading: "request-body-5",
    content: "MD5 value calculated from the parameters `callbackAddr`, `code`, `object`, and `requestId`. Used to verify whether this callback notification comes from the local screenshot upload service."
  }, {
    heading: "request-body-5",
    content: "`object`"
  }, {
    heading: "request-body-5",
    content: "String"
  }, {
    heading: "request-body-5",
    content: "Name of the screenshot file. The naming convention for this file is: `//___uid_s___uid_e__utc.jpg`. The meanings of the fields in the filename are as follows: `: Screenshot ID, a unique identifier for a screenshot.`: Channel name to which the user being screenshotted belongs.`: The user ID set when joining the channel.`: File type, supports only `video`.\\`\\`: Unix timestamp of this screenshot. UTC time, consists of year, month, day, hour, minute, second, and millisecond. For example, if `utc` is equal to `20190611073246073`, it represents the start time of this slice file as UTC June 11, 2019, 7:32:46.073 AM."
  }, {
    heading: "request-body-5",
    content: "`code`"
  }, {
    heading: "request-body-5",
    content: "Number"
  }, {
    heading: "request-body-5",
    content: "Status code of this screenshot. `200` indicates that the screenshot is completed."
  }, {
    heading: "request-body-5",
    content: "`msg`"
  }, {
    heading: "request-body-5",
    content: "String"
  }, {
    heading: "request-body-5",
    content: 'Status of this screenshot. `"Supervise complete"` indicates that the screenshot is completed.'
  }, {
    heading: "request-body-5",
    content: "`channelName`"
  }, {
    heading: "request-body-5",
    content: "String"
  }, {
    heading: "request-body-5",
    content: "Channel name to which the user being screenshotted belongs. Consistent with `object.cname`."
  }, {
    heading: "request-body-5",
    content: "`userId`"
  }, {
    heading: "request-body-5",
    content: "String"
  }, {
    heading: "request-body-5",
    content: "User ID of the user being screenshotted. Consistent with `object.uid`."
  }, {
    heading: "request-body-5",
    content: "`timestamp`"
  }, {
    heading: "request-body-5",
    content: "Int"
  }, {
    heading: "request-body-5",
    content: "Unix timestamp (milliseconds) of this screenshot. UTC time, consistent with `object.utc`."
  }, {
    heading: "request-body-5",
    content: "**Request Example**"
  }, {
    heading: "response-5",
    content: "After receiving the message notification, your application server is expected to respond. The response package format is JSON. In any of the following cases, the Agora service considers the notification as failed:"
  }, {
    heading: "response-5",
    content: "After sending a message notification, no response is received from your server within 5 seconds."
  }, {
    heading: "response-5",
    content: "The HTTP status code of the response is not `200`, or the response body format is not JSON."
  }, {
    heading: "response-5",
    content: "The Agora service immediately retries and sends the message notification again after the first notification fails. It attempts to notify you three times in total."
  }, {
    heading: "reference-6",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "pricing-6",
    content: "Agora charges for local screenshot upload based on two metrics:"
  }, {
    heading: "pricing-6",
    content: "**Screenshot fee**"
  }, {
    heading: "pricing-6",
    content: "**QPS overage fee** (queries per second)"
  }, {
    heading: "pricing-6",
    content: "At the end of each month, Agora calculates:"
  }, {
    heading: "pricing-6",
    content: "The total number of screenshots generated"
  }, {
    heading: "pricing-6",
    content: "The monthly peak QPS if it exceeds the free quota"
  }, {
    heading: "pricing-6",
    content: "**Billing formula:**"
  }, {
    heading: "pricing-6",
    content: "Billing Type"
  }, {
    heading: "pricing-6",
    content: "Unit Price"
  }, {
    heading: "pricing-6",
    content: "Discount Policy"
  }, {
    heading: "pricing-6",
    content: "Screenshot Fee"
  }, {
    heading: "pricing-6",
    content: "$0.30 per 10,000 images"
  }, {
    heading: "pricing-6",
    content: "First 10,000 images per month are free"
  }, {
    heading: "pricing-6",
    content: "QPS Overage Fee"
  }, {
    heading: "pricing-6",
    content: "$1.5 per QPS"
  }, {
    heading: "pricing-6",
    content: `Includes 500 QPS per month:- ≤ 500 QPS: No charge

- > 500 QPS: Charged based on monthly peak QPS`
  }, {
    heading: "pricing-6",
    content: `**Example 1:**
A project generates **910,000 screenshots** in one month. Peak QPS = **100**`
  }, {
    heading: "pricing-6",
    content: "Screenshots: 910,000 - 10,000 (free) = 900,000 billable images"
  }, {
    heading: "pricing-6",
    content: "Screenshot fee: 900,000 ÷ 10,000 × $0.30 = **$27.00**"
  }, {
    heading: "pricing-6",
    content: "QPS fee: 100 ≤ 500 (free), so **$0**"
  }, {
    heading: "pricing-6",
    content: "**Total fee = $27.00**"
  }, {
    heading: "pricing-6",
    content: `**Example 2:**
A project generates **2.91 million screenshots** in one month. Peak QPS = **600**`
  }, {
    heading: "pricing-6",
    content: "Screenshots: 2,910,000 - 10,000 (free) = 2,900,000 billable images"
  }, {
    heading: "pricing-6",
    content: "Screenshot fee: 2,900,000 ÷ 10,000 × $0.30 = **$87.00**"
  }, {
    heading: "pricing-6",
    content: "QPS fee: (600 - 500) × $1.5 = **$150.00**"
  }, {
    heading: "pricing-6",
    content: "**Total fee = $237.00**"
  }, {
    heading: "api-reference-5",
    content: "`enableContentInspect`"
  }, {
    heading: "local-screenshot-upload-dynamic-library-6",
    content: "You can find details about the name of the local screenshot upload dynamic library and the increase in app size after integration in App size optimization."
  }, {
    heading: "http-status-codes-6",
    content: "The HTTP status codes for the application server responses are as follows:"
  }, {
    heading: "http-status-codes-6",
    content: "Status Code"
  }, {
    heading: "http-status-codes-6",
    content: "Description"
  }, {
    heading: "http-status-codes-6",
    content: "`200`"
  }, {
    heading: "http-status-codes-6",
    content: "Successful request."
  }, {
    heading: "http-status-codes-6",
    content: "`201`"
  }, {
    heading: "http-status-codes-6",
    content: "Successful request and creation of a new resource."
  }, {
    heading: "http-status-codes-6",
    content: "`206`"
  }, {
    heading: "http-status-codes-6",
    content: "No user streamed during the entire screenshot process, or some screenshot files were not uploaded to the third-party cloud storage."
  }, {
    heading: "http-status-codes-6",
    content: "`400`"
  }, {
    heading: "http-status-codes-6",
    content: "Syntax error in the request (For example, parameter error), and the server cannot understand it."
  }, {
    heading: "http-status-codes-6",
    content: "`401`"
  }, {
    heading: "http-status-codes-6",
    content: "Unauthorized (App ID or Customer Certificate mismatch)."
  }, {
    heading: "http-status-codes-6",
    content: "`404`"
  }, {
    heading: "http-status-codes-6",
    content: "The server cannot find the requested resource (webpage)."
  }, {
    heading: "http-status-codes-6",
    content: "`500`"
  }, {
    heading: "http-status-codes-6",
    content: "Internal server error, unable to complete the request."
  }, {
    heading: "http-status-codes-6",
    content: "`504`"
  }, {
    heading: "http-status-codes-6",
    content: "Internal server error. The server acting as a gateway or proxy did not receive a timely response from the upstream server."
  }, {
    heading: "http-status-codes-6",
    content: "This page shows you how to enable screenshot uploads on your game and handle screenshot upload callbacks."
  }, {
    heading: "http-status-codes-6",
    content: "Local screenshot upload is a paid service. For billing details, refer to Pricing."
  }, {
    heading: "understand-the-tech-7",
    content: "When you enable screenshot upload, you set the interval between screenshots. After each interval, RTC SDK takes a screenshot of the video stream sent by local users, and uploads the image to Agora SDRTN®. Agora SDRTN® uploads each screenshot to your third-party cloud storage and sends a callback notification to your server in the form of an `HTTPS` request."
  }, {
    heading: "understand-the-tech-7",
    content: "**Screenshot upload**"
  }, {
    heading: "prerequisites-7",
    content: "Before implementing the Agora local screenshot upload feature, take the following steps:"
  }, {
    heading: "prerequisites-7",
    content: "**Activate local screenshot upload service**"
  }, {
    heading: "prerequisites-7",
    content: "In Agora Console, select **RTC Services** from the sidebar, then locate the **Video Screenshot Upload** card and turn on its toggle. Select the settings icon on the card to open its configuration panel."
  }, {
    heading: "prerequisites-7",
    content: "**Configure third-party cloud storage**"
  }, {
    heading: "prerequisites-7",
    content: "Select the settings icon on the **Video Screenshot Upload** card to open its configuration panel."
  }, {
    heading: "prerequisites-7",
    content: "Once you turn on **Enable Video Screenshot Upload**, you can't disable it."
  }, {
    heading: "prerequisites-7",
    content: "Currently, the Agora local screenshot upload service only supports Amazon S3 as the third-party cloud storage provider. If you want to use a different provider, contact technical support."
  }, {
    heading: "prerequisites-7",
    content: "Fill in the following information:"
  }, {
    heading: "prerequisites-7",
    content: "**Storage**: The third-party cloud storage provider. Fixed to AWS."
  }, {
    heading: "prerequisites-7",
    content: "**Callback URL**: The server address to receive callback notifications of local screenshot upload results."
  }, {
    heading: "prerequisites-7",
    content: "**Endpoint**: Specify the access domain (Endpoint) of the bucket. See AWS Official Documentation for details."
  }, {
    heading: "prerequisites-7",
    content: "**Region**: The data center region setting for third-party cloud storage. See AWS Official Documentation for details."
  }, {
    heading: "prerequisites-7",
    content: "**Access key**: String type, the access key of the third-party cloud storage. Best practice is to provide a write-only access key."
  }, {
    heading: "prerequisites-7",
    content: "**Secret key**: String type, the secret key of the third-party cloud storage."
  }, {
    heading: "prerequisites-7",
    content: "**Bucket Name**: String type, the bucket name of the third-party cloud storage. The bucket name must comply with the naming rules of the corresponding third-party cloud storage service."
  }, {
    heading: "prerequisites-7",
    content: '**Filename Prefix**: (Optional) JSON Array, an array composed of multiple strings, indicating the storage location of screenshots in the third-party cloud storage. For example, if `fileNamePrefix` = `["directory1","directory2"]`, the prefix `directory1/directory2/` will be added to the screenshot filename, that is, `directory1/directory2/xxx.jpg`. The prefix length, including slashes, must not exceed 128 characters. The string should not contain symbols such as slashes, underscores, parentheses, and so on. The supported character set is as follows:'
  }, {
    heading: "prerequisites-7",
    content: "26 lowercase English letters a-z"
  }, {
    heading: "prerequisites-7",
    content: "26 uppercase English letters A-Z"
  }, {
    heading: "prerequisites-7",
    content: "10 digits 0-9"
  }, {
    heading: "prerequisites-7",
    content: "**Sample configuration**"
  }, {
    heading: "prerequisites-7",
    content: "Storage: AWS"
  }, {
    heading: "prerequisites-7",
    content: "Callback URL: `https://webhook.site/2e75da2d-xxxx-xxxx-xxx-a0ef44a5259d`"
  }, {
    heading: "prerequisites-7",
    content: "Endpoint: `s3.cn-north-1.amazonaws.com.cn`"
  }, {
    heading: "prerequisites-7",
    content: "Region: `cn-north-1`"
  }, {
    heading: "prerequisites-7",
    content: "Access key: `12345678`"
  }, {
    heading: "prerequisites-7",
    content: "Secret key: `abcd123`"
  }, {
    heading: "prerequisites-7",
    content: "Bucket Name: `test-artifacts`"
  }, {
    heading: "prerequisites-7",
    content: "Filename Prefix: `test`"
  }, {
    heading: "prerequisites-7",
    content: "**Integrate RTC SDK**"
  }, {
    heading: "prerequisites-7",
    content: "Integrate the RTC SDK (including the local screenshot upload dynamic library) into your project, join a channel, and publish a video stream. See SDK quickstart for details."
  }, {
    heading: "implement-local-screenshot-upload-7",
    content: "You enable screenshot upload in your Video Calling client and handle the notification callback from Agora on your callback server."
  }, {
    heading: "enable-screenshot-upload-7",
    content: "Call the `enableContentInspect` method to enable the local screenshot upload feature. After successfully enabling the feature, the SDK will capture screenshots at the specified frequency and upload them to the Agora cloud server. To implement this logic, refer to the following code:"
  }, {
    heading: "http-notification-callback-7",
    content: "After a screenshot is successfully uploaded to the Agora SDRTN®, Agora sends a message notification callback to your application server in the form of an `HTTPS` `POST` request. The data format is `JSON`, and the character encoding is `UTF-8`."
  }, {
    heading: "http-notification-callback-7",
    content: "Upon receiving the message notification, your application server must respond with status code `200`. The expected response body format is `JSON`. In any of the following cases, the notification is considered to have failed:"
  }, {
    heading: "http-notification-callback-7",
    content: "No response is received from your server within 5 seconds after sending the message notification."
  }, {
    heading: "http-notification-callback-7",
    content: "The `HTTP` status code of the response is not `200`, or the response body format is not `JSON`."
  }, {
    heading: "http-notification-callback-7",
    content: "The Agora service immediately retries after the first notification failure, and sends the message three times in total."
  }, {
    heading: "request-header-6",
    content: "Field Name"
  }, {
    heading: "request-header-6",
    content: "Value"
  }, {
    heading: "request-header-6",
    content: "`Content-Type`"
  }, {
    heading: "request-header-6",
    content: "`application/json;charset=utf-8`"
  }, {
    heading: "request-body-6",
    content: "The request body is a JSON Object, containing the following fields:"
  }, {
    heading: "request-body-6",
    content: "Field"
  }, {
    heading: "request-body-6",
    content: "Type"
  }, {
    heading: "request-body-6",
    content: "Description"
  }, {
    heading: "request-body-6",
    content: "`requestId`"
  }, {
    heading: "request-body-6",
    content: "String"
  }, {
    heading: "request-body-6",
    content: "Callback notification ID, identifying an event notification from the Agora business server."
  }, {
    heading: "request-body-6",
    content: "`callbackParam`"
  }, {
    heading: "request-body-6",
    content: "JSON Object"
  }, {
    heading: "request-body-6",
    content: "Custom fields passed in the callback, currently includes the `cname` field, representing the channel name."
  }, {
    heading: "request-body-6",
    content: "`callbackData`"
  }, {
    heading: "request-body-6",
    content: "String"
  }, {
    heading: "request-body-6",
    content: "String data passed through by the SDK local screenshot upload module."
  }, {
    heading: "request-body-6",
    content: "`checksum`"
  }, {
    heading: "request-body-6",
    content: "String"
  }, {
    heading: "request-body-6",
    content: "MD5 value calculated from the parameters `callbackAddr`, `code`, `object`, and `requestId`. Used to verify whether this callback notification comes from the local screenshot upload service."
  }, {
    heading: "request-body-6",
    content: "`object`"
  }, {
    heading: "request-body-6",
    content: "String"
  }, {
    heading: "request-body-6",
    content: "Name of the screenshot file. The naming convention for this file is: `//___uid_s___uid_e__utc.jpg`. The meanings of the fields in the filename are as follows: `: Screenshot ID, a unique identifier for a screenshot.`: Channel name to which the user being screenshotted belongs.`: The user ID set when joining the channel.`: File type, supports only `video`.\\`\\`: Unix timestamp of this screenshot. UTC time, consists of year, month, day, hour, minute, second, and millisecond. For example, if `utc` is equal to `20190611073246073`, it represents the start time of this slice file as UTC June 11, 2019, 7:32:46.073 AM."
  }, {
    heading: "request-body-6",
    content: "`code`"
  }, {
    heading: "request-body-6",
    content: "Number"
  }, {
    heading: "request-body-6",
    content: "Status code of this screenshot. `200` indicates that the screenshot is completed."
  }, {
    heading: "request-body-6",
    content: "`msg`"
  }, {
    heading: "request-body-6",
    content: "String"
  }, {
    heading: "request-body-6",
    content: 'Status of this screenshot. `"Supervise complete"` indicates that the screenshot is completed.'
  }, {
    heading: "request-body-6",
    content: "`channelName`"
  }, {
    heading: "request-body-6",
    content: "String"
  }, {
    heading: "request-body-6",
    content: "Channel name to which the user being screenshotted belongs. Consistent with `object.cname`."
  }, {
    heading: "request-body-6",
    content: "`userId`"
  }, {
    heading: "request-body-6",
    content: "String"
  }, {
    heading: "request-body-6",
    content: "User ID of the user being screenshotted. Consistent with `object.uid`."
  }, {
    heading: "request-body-6",
    content: "`timestamp`"
  }, {
    heading: "request-body-6",
    content: "Int"
  }, {
    heading: "request-body-6",
    content: "Unix timestamp (milliseconds) of this screenshot. UTC time, consistent with `object.utc`."
  }, {
    heading: "request-body-6",
    content: "**Request Example**"
  }, {
    heading: "response-6",
    content: "After receiving the message notification, your application server is expected to respond. The response package format is JSON. In any of the following cases, the Agora service considers the notification as failed:"
  }, {
    heading: "response-6",
    content: "After sending a message notification, no response is received from your server within 5 seconds."
  }, {
    heading: "response-6",
    content: "The HTTP status code of the response is not `200`, or the response body format is not JSON."
  }, {
    heading: "response-6",
    content: "The Agora service immediately retries and sends the message notification again after the first notification fails. It attempts to notify you three times in total."
  }, {
    heading: "reference-7",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "pricing-7",
    content: "Agora charges for local screenshot upload based on two metrics:"
  }, {
    heading: "pricing-7",
    content: "**Screenshot fee**"
  }, {
    heading: "pricing-7",
    content: "**QPS overage fee** (queries per second)"
  }, {
    heading: "pricing-7",
    content: "At the end of each month, Agora calculates:"
  }, {
    heading: "pricing-7",
    content: "The total number of screenshots generated"
  }, {
    heading: "pricing-7",
    content: "The monthly peak QPS if it exceeds the free quota"
  }, {
    heading: "pricing-7",
    content: "**Billing formula:**"
  }, {
    heading: "pricing-7",
    content: "Billing Type"
  }, {
    heading: "pricing-7",
    content: "Unit Price"
  }, {
    heading: "pricing-7",
    content: "Discount Policy"
  }, {
    heading: "pricing-7",
    content: "Screenshot Fee"
  }, {
    heading: "pricing-7",
    content: "$0.30 per 10,000 images"
  }, {
    heading: "pricing-7",
    content: "First 10,000 images per month are free"
  }, {
    heading: "pricing-7",
    content: "QPS Overage Fee"
  }, {
    heading: "pricing-7",
    content: "$1.5 per QPS"
  }, {
    heading: "pricing-7",
    content: `Includes 500 QPS per month:- ≤ 500 QPS: No charge

- > 500 QPS: Charged based on monthly peak QPS`
  }, {
    heading: "pricing-7",
    content: `**Example 1:**
A project generates **910,000 screenshots** in one month. Peak QPS = **100**`
  }, {
    heading: "pricing-7",
    content: "Screenshots: 910,000 - 10,000 (free) = 900,000 billable images"
  }, {
    heading: "pricing-7",
    content: "Screenshot fee: 900,000 ÷ 10,000 × $0.30 = **$27.00**"
  }, {
    heading: "pricing-7",
    content: "QPS fee: 100 ≤ 500 (free), so **$0**"
  }, {
    heading: "pricing-7",
    content: "**Total fee = $27.00**"
  }, {
    heading: "pricing-7",
    content: `**Example 2:**
A project generates **2.91 million screenshots** in one month. Peak QPS = **600**`
  }, {
    heading: "pricing-7",
    content: "Screenshots: 2,910,000 - 10,000 (free) = 2,900,000 billable images"
  }, {
    heading: "pricing-7",
    content: "Screenshot fee: 2,900,000 ÷ 10,000 × $0.30 = **$87.00**"
  }, {
    heading: "pricing-7",
    content: "QPS fee: (600 - 500) × $1.5 = **$150.00**"
  }, {
    heading: "pricing-7",
    content: "**Total fee = $237.00**"
  }, {
    heading: "api-reference-6",
    content: "`EnableContentInspect`"
  }, {
    heading: "local-screenshot-upload-dynamic-library-7",
    content: "You can find details about the name of the local screenshot upload dynamic library and the increase in app size after integration in App size optimization."
  }, {
    heading: "http-status-codes-7",
    content: "The HTTP status codes for the application server responses are as follows:"
  }, {
    heading: "http-status-codes-7",
    content: "Status Code"
  }, {
    heading: "http-status-codes-7",
    content: "Description"
  }, {
    heading: "http-status-codes-7",
    content: "`200`"
  }, {
    heading: "http-status-codes-7",
    content: "Successful request."
  }, {
    heading: "http-status-codes-7",
    content: "`201`"
  }, {
    heading: "http-status-codes-7",
    content: "Successful request and creation of a new resource."
  }, {
    heading: "http-status-codes-7",
    content: "`206`"
  }, {
    heading: "http-status-codes-7",
    content: "No user streamed during the entire screenshot process, or some screenshot files were not uploaded to the third-party cloud storage."
  }, {
    heading: "http-status-codes-7",
    content: "`400`"
  }, {
    heading: "http-status-codes-7",
    content: "Syntax error in the request (For example, parameter error), and the server cannot understand it."
  }, {
    heading: "http-status-codes-7",
    content: "`401`"
  }, {
    heading: "http-status-codes-7",
    content: "Unauthorized (App ID or Customer Certificate mismatch)."
  }, {
    heading: "http-status-codes-7",
    content: "`404`"
  }, {
    heading: "http-status-codes-7",
    content: "The server cannot find the requested resource (webpage)."
  }, {
    heading: "http-status-codes-7",
    content: "`500`"
  }, {
    heading: "http-status-codes-7",
    content: "Internal server error, unable to complete the request."
  }, {
    heading: "http-status-codes-7",
    content: "`504`"
  }, {
    heading: "http-status-codes-7",
    content: "Internal server error. The server acting as a gateway or proxy did not receive a timely response from the upstream server."
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implement-local-screenshot-upload",
    content: "Implement local screenshot upload"
  }, {
    id: "enable-screenshot-upload",
    content: "Enable screenshot upload"
  }, {
    id: "http-notification-callback",
    content: "HTTP notification callback"
  }, {
    id: "request-header",
    content: "Request header"
  }, {
    id: "request-body",
    content: "Request body"
  }, {
    id: "response",
    content: "Response"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "pricing",
    content: "Pricing"
  }, {
    id: "api-reference",
    content: "API reference"
  }, {
    id: "local-screenshot-upload-dynamic-library",
    content: "local screenshot upload dynamic library"
  }, {
    id: "http-status-codes",
    content: "HTTP status codes"
  }, {
    id: "understand-the-tech-1",
    content: "Understand the tech"
  }, {
    id: "prerequisites-1",
    content: "Prerequisites"
  }, {
    id: "implement-local-screenshot-upload-1",
    content: "Implement local screenshot upload"
  }, {
    id: "enable-screenshot-upload-1",
    content: "Enable screenshot upload"
  }, {
    id: "http-notification-callback-1",
    content: "HTTP notification callback"
  }, {
    id: "request-header-1",
    content: "Request header"
  }, {
    id: "request-body-1",
    content: "Request body"
  }, {
    id: "response-1",
    content: "Response"
  }, {
    id: "reference-1",
    content: "Reference"
  }, {
    id: "pricing-1",
    content: "Pricing"
  }, {
    id: "api-reference-1",
    content: "API reference"
  }, {
    id: "local-screenshot-upload-dynamic-library-1",
    content: "local screenshot upload dynamic library"
  }, {
    id: "http-status-codes-1",
    content: "HTTP status codes"
  }, {
    id: "understand-the-tech-2",
    content: "Understand the tech"
  }, {
    id: "prerequisites-2",
    content: "Prerequisites"
  }, {
    id: "implement-local-screenshot-upload-2",
    content: "Implement local screenshot upload"
  }, {
    id: "enable-screenshot-upload-2",
    content: "Enable screenshot upload"
  }, {
    id: "http-notification-callback-2",
    content: "HTTP notification callback"
  }, {
    id: "request-header-2",
    content: "Request header"
  }, {
    id: "request-body-2",
    content: "Request body"
  }, {
    id: "response-2",
    content: "Response"
  }, {
    id: "reference-2",
    content: "Reference"
  }, {
    id: "pricing-2",
    content: "Pricing"
  }, {
    id: "api-reference-2",
    content: "API reference"
  }, {
    id: "local-screenshot-upload-dynamic-library-2",
    content: "local screenshot upload dynamic library"
  }, {
    id: "http-status-codes-2",
    content: "HTTP status codes"
  }, {
    id: "understand-the-tech-3",
    content: "Understand the tech"
  }, {
    id: "prerequisites-3",
    content: "Prerequisites"
  }, {
    id: "implement-local-screenshot-upload-3",
    content: "Implement local screenshot upload"
  }, {
    id: "enable-screenshot-upload-3",
    content: "Enable screenshot upload"
  }, {
    id: "http-notification-callback-3",
    content: "HTTP notification callback"
  }, {
    id: "reference-3",
    content: "Reference"
  }, {
    id: "pricing-3",
    content: "Pricing"
  }, {
    id: "local-screenshot-upload-dynamic-library-3",
    content: "local screenshot upload dynamic library"
  }, {
    id: "http-status-codes-3",
    content: "HTTP status codes"
  }, {
    id: "understand-the-tech-4",
    content: "Understand the tech"
  }, {
    id: "prerequisites-4",
    content: "Prerequisites"
  }, {
    id: "implement-local-screenshot-upload-4",
    content: "Implement local screenshot upload"
  }, {
    id: "enable-screenshot-upload-4",
    content: "Enable screenshot upload"
  }, {
    id: "http-notification-callback-4",
    content: "HTTP notification callback"
  }, {
    id: "request-header-3",
    content: "Request header"
  }, {
    id: "request-body-3",
    content: "Request body"
  }, {
    id: "response-3",
    content: "Response"
  }, {
    id: "reference-4",
    content: "Reference"
  }, {
    id: "pricing-4",
    content: "Pricing"
  }, {
    id: "api-reference-3",
    content: "API reference"
  }, {
    id: "local-screenshot-upload-dynamic-library-4",
    content: "local screenshot upload dynamic library"
  }, {
    id: "http-status-codes-4",
    content: "HTTP status codes"
  }, {
    id: "understand-the-tech-5",
    content: "Understand the tech"
  }, {
    id: "prerequisites-5",
    content: "Prerequisites"
  }, {
    id: "implement-local-screenshot-upload-5",
    content: "Implement local screenshot upload"
  }, {
    id: "enable-screenshot-upload-5",
    content: "Enable screenshot upload"
  }, {
    id: "http-notification-callback-5",
    content: "HTTP notification callback"
  }, {
    id: "request-header-4",
    content: "Request header"
  }, {
    id: "request-body-4",
    content: "Request body"
  }, {
    id: "response-4",
    content: "Response"
  }, {
    id: "reference-5",
    content: "Reference"
  }, {
    id: "pricing-5",
    content: "Pricing"
  }, {
    id: "api-reference-4",
    content: "API reference"
  }, {
    id: "local-screenshot-upload-dynamic-library-5",
    content: "local screenshot upload dynamic library"
  }, {
    id: "http-status-codes-5",
    content: "HTTP status codes"
  }, {
    id: "understand-the-tech-6",
    content: "Understand the tech"
  }, {
    id: "prerequisites-6",
    content: "Prerequisites"
  }, {
    id: "implement-local-screenshot-upload-6",
    content: "Implement local screenshot upload"
  }, {
    id: "enable-screenshot-upload-6",
    content: "Enable screenshot upload"
  }, {
    id: "http-notification-callback-6",
    content: "HTTP notification callback"
  }, {
    id: "request-header-5",
    content: "Request header"
  }, {
    id: "request-body-5",
    content: "Request body"
  }, {
    id: "response-5",
    content: "Response"
  }, {
    id: "reference-6",
    content: "Reference"
  }, {
    id: "pricing-6",
    content: "Pricing"
  }, {
    id: "api-reference-5",
    content: "API reference"
  }, {
    id: "local-screenshot-upload-dynamic-library-6",
    content: "local screenshot upload dynamic library"
  }, {
    id: "http-status-codes-6",
    content: "HTTP status codes"
  }, {
    id: "understand-the-tech-7",
    content: "Understand the tech"
  }, {
    id: "prerequisites-7",
    content: "Prerequisites"
  }, {
    id: "implement-local-screenshot-upload-7",
    content: "Implement local screenshot upload"
  }, {
    id: "enable-screenshot-upload-7",
    content: "Enable screenshot upload"
  }, {
    id: "http-notification-callback-7",
    content: "HTTP notification callback"
  }, {
    id: "request-header-6",
    content: "Request header"
  }, {
    id: "request-body-6",
    content: "Request body"
  }, {
    id: "response-6",
    content: "Response"
  }, {
    id: "reference-7",
    content: "Reference"
  }, {
    id: "pricing-7",
    content: "Pricing"
  }, {
    id: "api-reference-6",
    content: "API reference"
  }, {
    id: "local-screenshot-upload-dynamic-library-7",
    content: "local screenshot upload dynamic library"
  }, {
    id: "http-status-codes-7",
    content: "HTTP status codes"
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
  url: "#implement-local-screenshot-upload",
  title: _jsx(_Fragment, {
    children: "Implement local screenshot upload"
  })
}, {
  depth: 3,
  url: "#enable-screenshot-upload",
  title: _jsx(_Fragment, {
    children: "Enable screenshot upload"
  })
}, {
  depth: 3,
  url: "#http-notification-callback",
  title: _jsx(_Fragment, {
    children: "HTTP notification callback"
  })
}, {
  depth: 4,
  url: "#request-header",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 4,
  url: "#request-body",
  title: _jsx(_Fragment, {
    children: "Request body"
  })
}, {
  depth: 4,
  url: "#response",
  title: _jsx(_Fragment, {
    children: "Response"
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
  url: "#api-reference",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#local-screenshot-upload-dynamic-library",
  title: _jsx(_Fragment, {
    children: "local screenshot upload dynamic library"
  })
}, {
  depth: 3,
  url: "#http-status-codes",
  title: _jsx(_Fragment, {
    children: "HTTP status codes"
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
  url: "#implement-local-screenshot-upload-1",
  title: _jsx(_Fragment, {
    children: "Implement local screenshot upload"
  })
}, {
  depth: 3,
  url: "#enable-screenshot-upload-1",
  title: _jsx(_Fragment, {
    children: "Enable screenshot upload"
  })
}, {
  depth: 3,
  url: "#http-notification-callback-1",
  title: _jsx(_Fragment, {
    children: "HTTP notification callback"
  })
}, {
  depth: 4,
  url: "#request-header-1",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 4,
  url: "#request-body-1",
  title: _jsx(_Fragment, {
    children: "Request body"
  })
}, {
  depth: 4,
  url: "#response-1",
  title: _jsx(_Fragment, {
    children: "Response"
  })
}, {
  depth: 2,
  url: "#reference-1",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#pricing-1",
  title: _jsx(_Fragment, {
    children: "Pricing"
  })
}, {
  depth: 3,
  url: "#api-reference-1",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#local-screenshot-upload-dynamic-library-1",
  title: _jsx(_Fragment, {
    children: "local screenshot upload dynamic library"
  })
}, {
  depth: 3,
  url: "#http-status-codes-1",
  title: _jsx(_Fragment, {
    children: "HTTP status codes"
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
  url: "#implement-local-screenshot-upload-2",
  title: _jsx(_Fragment, {
    children: "Implement local screenshot upload"
  })
}, {
  depth: 3,
  url: "#enable-screenshot-upload-2",
  title: _jsx(_Fragment, {
    children: "Enable screenshot upload"
  })
}, {
  depth: 3,
  url: "#http-notification-callback-2",
  title: _jsx(_Fragment, {
    children: "HTTP notification callback"
  })
}, {
  depth: 4,
  url: "#request-header-2",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 4,
  url: "#request-body-2",
  title: _jsx(_Fragment, {
    children: "Request body"
  })
}, {
  depth: 4,
  url: "#response-2",
  title: _jsx(_Fragment, {
    children: "Response"
  })
}, {
  depth: 2,
  url: "#reference-2",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#pricing-2",
  title: _jsx(_Fragment, {
    children: "Pricing"
  })
}, {
  depth: 3,
  url: "#api-reference-2",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#local-screenshot-upload-dynamic-library-2",
  title: _jsx(_Fragment, {
    children: "local screenshot upload dynamic library"
  })
}, {
  depth: 3,
  url: "#http-status-codes-2",
  title: _jsx(_Fragment, {
    children: "HTTP status codes"
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
  url: "#implement-local-screenshot-upload-3",
  title: _jsx(_Fragment, {
    children: "Implement local screenshot upload"
  })
}, {
  depth: 3,
  url: "#enable-screenshot-upload-3",
  title: _jsx(_Fragment, {
    children: "Enable screenshot upload"
  })
}, {
  depth: 3,
  url: "#http-notification-callback-3",
  title: _jsx(_Fragment, {
    children: "HTTP notification callback"
  })
}, {
  depth: 2,
  url: "#reference-3",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#pricing-3",
  title: _jsx(_Fragment, {
    children: "Pricing"
  })
}, {
  depth: 3,
  url: "#local-screenshot-upload-dynamic-library-3",
  title: _jsx(_Fragment, {
    children: "local screenshot upload dynamic library"
  })
}, {
  depth: 3,
  url: "#http-status-codes-3",
  title: _jsx(_Fragment, {
    children: "HTTP status codes"
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
  url: "#implement-local-screenshot-upload-4",
  title: _jsx(_Fragment, {
    children: "Implement local screenshot upload"
  })
}, {
  depth: 3,
  url: "#enable-screenshot-upload-4",
  title: _jsx(_Fragment, {
    children: "Enable screenshot upload"
  })
}, {
  depth: 3,
  url: "#http-notification-callback-4",
  title: _jsx(_Fragment, {
    children: "HTTP notification callback"
  })
}, {
  depth: 4,
  url: "#request-header-3",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 4,
  url: "#request-body-3",
  title: _jsx(_Fragment, {
    children: "Request body"
  })
}, {
  depth: 4,
  url: "#response-3",
  title: _jsx(_Fragment, {
    children: "Response"
  })
}, {
  depth: 2,
  url: "#reference-4",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#pricing-4",
  title: _jsx(_Fragment, {
    children: "Pricing"
  })
}, {
  depth: 3,
  url: "#api-reference-3",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#local-screenshot-upload-dynamic-library-4",
  title: _jsx(_Fragment, {
    children: "local screenshot upload dynamic library"
  })
}, {
  depth: 3,
  url: "#http-status-codes-4",
  title: _jsx(_Fragment, {
    children: "HTTP status codes"
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
  url: "#implement-local-screenshot-upload-5",
  title: _jsx(_Fragment, {
    children: "Implement local screenshot upload"
  })
}, {
  depth: 3,
  url: "#enable-screenshot-upload-5",
  title: _jsx(_Fragment, {
    children: "Enable screenshot upload"
  })
}, {
  depth: 3,
  url: "#http-notification-callback-5",
  title: _jsx(_Fragment, {
    children: "HTTP notification callback"
  })
}, {
  depth: 4,
  url: "#request-header-4",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 4,
  url: "#request-body-4",
  title: _jsx(_Fragment, {
    children: "Request body"
  })
}, {
  depth: 4,
  url: "#response-4",
  title: _jsx(_Fragment, {
    children: "Response"
  })
}, {
  depth: 2,
  url: "#reference-5",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#pricing-5",
  title: _jsx(_Fragment, {
    children: "Pricing"
  })
}, {
  depth: 3,
  url: "#api-reference-4",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#local-screenshot-upload-dynamic-library-5",
  title: _jsx(_Fragment, {
    children: "local screenshot upload dynamic library"
  })
}, {
  depth: 3,
  url: "#http-status-codes-5",
  title: _jsx(_Fragment, {
    children: "HTTP status codes"
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
  url: "#implement-local-screenshot-upload-6",
  title: _jsx(_Fragment, {
    children: "Implement local screenshot upload"
  })
}, {
  depth: 3,
  url: "#enable-screenshot-upload-6",
  title: _jsx(_Fragment, {
    children: "Enable screenshot upload"
  })
}, {
  depth: 3,
  url: "#http-notification-callback-6",
  title: _jsx(_Fragment, {
    children: "HTTP notification callback"
  })
}, {
  depth: 4,
  url: "#request-header-5",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 4,
  url: "#request-body-5",
  title: _jsx(_Fragment, {
    children: "Request body"
  })
}, {
  depth: 4,
  url: "#response-5",
  title: _jsx(_Fragment, {
    children: "Response"
  })
}, {
  depth: 2,
  url: "#reference-6",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#pricing-6",
  title: _jsx(_Fragment, {
    children: "Pricing"
  })
}, {
  depth: 3,
  url: "#api-reference-5",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#local-screenshot-upload-dynamic-library-6",
  title: _jsx(_Fragment, {
    children: "local screenshot upload dynamic library"
  })
}, {
  depth: 3,
  url: "#http-status-codes-6",
  title: _jsx(_Fragment, {
    children: "HTTP status codes"
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
  url: "#implement-local-screenshot-upload-7",
  title: _jsx(_Fragment, {
    children: "Implement local screenshot upload"
  })
}, {
  depth: 3,
  url: "#enable-screenshot-upload-7",
  title: _jsx(_Fragment, {
    children: "Enable screenshot upload"
  })
}, {
  depth: 3,
  url: "#http-notification-callback-7",
  title: _jsx(_Fragment, {
    children: "HTTP notification callback"
  })
}, {
  depth: 4,
  url: "#request-header-6",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 4,
  url: "#request-body-6",
  title: _jsx(_Fragment, {
    children: "Request body"
  })
}, {
  depth: 4,
  url: "#response-6",
  title: _jsx(_Fragment, {
    children: "Response"
  })
}, {
  depth: 2,
  url: "#reference-7",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#pricing-7",
  title: _jsx(_Fragment, {
    children: "Pricing"
  })
}, {
  depth: 3,
  url: "#api-reference-6",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#local-screenshot-upload-dynamic-library-7",
  title: _jsx(_Fragment, {
    children: "local screenshot upload dynamic library"
  })
}, {
  depth: 3,
  url: "#http-status-codes-7",
  title: _jsx(_Fragment, {
    children: "HTTP status codes"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "To meet the needs of video content supervision, Agora RTC SDK enables you to take screenshots of the video stream in a channel and then upload these images to third-party cloud storage."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["android","ios","macos","web","windows","electron","react-native","unity"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsx(_components.p, {
          children: "This page shows you how to enable screenshot uploads on your app and handle screenshot upload callbacks."
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Local screenshot upload is a paid service. For billing details, refer to ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/reference/pricing",
                children: "Pricing"
              }), "."]
            })
          })
        }), _jsx(_components.h2, {
          id: "understand-the-tech",
          children: "Understand the tech"
        }), _jsxs(_components.p, {
          children: ["When you enable screenshot upload, you set the interval between screenshots. After each interval, RTC SDK takes a screenshot of the video stream sent by local users, and uploads the image to Agora SDRTN®. Agora SDRTN® uploads each screenshot to your third-party cloud storage and sends a callback notification to your server in the form of an ", _jsx(_components.code, {
            children: "HTTPS"
          }), " request."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Screenshot upload"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/screenshot-upload.svg",
            alt: "image"
          })
        }), _jsx(_components.h2, {
          id: "prerequisites",
          children: "Prerequisites"
        }), _jsx(_components.p, {
          children: "Before implementing the Agora local screenshot upload feature, take the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Activate local screenshot upload service"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["In ", _jsx(_components.a, {
                href: "https://console.agora.io",
                children: "Agora Console"
              }), ", select ", _jsx(_components.strong, {
                children: "RTC Services"
              }), " from the sidebar, then locate the ", _jsx(_components.strong, {
                children: "Video Screenshot Upload"
              }), " card and turn on its toggle. Select the settings icon on the card to open its configuration panel."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/console/enable-screenshot-upload.png",
                alt: "Enable screenshot upload"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Configure third-party cloud storage"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Select the settings icon on the ", _jsx(_components.strong, {
                children: "Video Screenshot Upload"
              }), " card to open its configuration panel."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/console/screenshot-upload-configuration.png",
                alt: "Screenshot upload config"
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "warning",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Once you turn on ", _jsx(_components.strong, {
                    children: "Enable Video Screenshot Upload"
                  }), ", you can't disable it."]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Currently, the Agora local screenshot upload service only supports Amazon S3 as the third-party cloud storage provider. If you want to use a different provider, ", _jsx(_components.a, {
                    href: "mailto:support@agora.io",
                    children: "contact"
                  }), " technical support."]
                })
              })
            }), `
`, _jsx(_components.p, {
              children: "Fill in the following information:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Storage"
                  }), ": The third-party cloud storage provider. Fixed to AWS."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Callback URL"
                  }), ": The server address to receive callback notifications of local screenshot upload results."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Endpoint"
                  }), ": Specify the access domain (Endpoint) of the bucket. See ", _jsx(_components.a, {
                    href: "https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region",
                    children: "AWS Official Documentation"
                  }), " for details."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Region"
                  }), ": The data center region setting for third-party cloud storage. See ", _jsx(_components.a, {
                    href: "https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region",
                    children: "AWS Official Documentation"
                  }), " for details."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Access key"
                  }), ": String type, the access key of the third-party cloud storage. Best practice is to provide a write-only access key."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Secret key"
                  }), ": String type, the secret key of the third-party cloud storage."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Bucket Name"
                  }), ": String type, the bucket name of the third-party cloud storage. The bucket name must comply with the naming rules of the corresponding third-party cloud storage service."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Filename Prefix"
                  }), ": (Optional) JSON Array, an array composed of multiple strings, indicating the storage location of screenshots in the third-party cloud storage. For example, if ", _jsx(_components.code, {
                    children: "fileNamePrefix"
                  }), " = ", _jsx(_components.code, {
                    children: '["directory1","directory2"]'
                  }), ", the prefix ", _jsx(_components.code, {
                    children: "directory1/directory2/"
                  }), " will be added to the screenshot filename, that is, ", _jsx(_components.code, {
                    children: "directory1/directory2/xxx.jpg"
                  }), ". The prefix length, including slashes, must not exceed 128 characters. The string should not contain symbols such as slashes, underscores, parentheses, and so on. The supported character set is as follows:"]
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "26 lowercase English letters a-z"
                  }), `
`, _jsx(_components.li, {
                    children: "26 uppercase English letters A-Z"
                  }), `
`, _jsx(_components.li, {
                    children: "10 digits 0-9"
                  }), `
`]
                }), `
`]
              }), `
`]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Sample configuration"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Storage: AWS"
              }), `
`, _jsxs(_components.li, {
                children: ["Callback URL: ", _jsx(_components.code, {
                  children: "https://webhook.site/2e75da2d-xxxx-xxxx-xxx-a0ef44a5259d"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Endpoint: ", _jsx(_components.code, {
                  children: "s3.cn-north-1.amazonaws.com.cn"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Region: ", _jsx(_components.code, {
                  children: "cn-north-1"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Access key: ", _jsx(_components.code, {
                  children: "12345678"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Secret key: ", _jsx(_components.code, {
                  children: "abcd123"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Bucket Name: ", _jsx(_components.code, {
                  children: "test-artifacts"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Filename Prefix: ", _jsx(_components.code, {
                  children: "test"
                })]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Integrate RTC SDK"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Integrate the RTC SDK (including the local screenshot upload dynamic library) into your project, join a channel, and publish a video stream. See ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/get-started-sdk",
                children: "SDK quickstart"
              }), " for details."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "implement-local-screenshot-upload",
          children: "Implement local screenshot upload"
        }), _jsx(_components.p, {
          children: "You enable screenshot upload in your Video Calling client and handle the notification callback from Agora on your callback server."
        }), _jsx(_components.h3, {
          id: "enable-screenshot-upload",
          children: "Enable screenshot upload"
        }), _jsxs(_components.p, {
          children: ["Call the ", _jsx(_components.code, {
            children: "enableContentInspect"
          }), " method to enable the local screenshot upload feature. After successfully enabling the feature, the SDK will capture screenshots at the specified frequency and upload them to the Agora cloud server. To implement this logic, refer to the following code:"]
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
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "ContentInspectConfig config "
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
                      children: " ContentInspectConfig"
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
                      children: "config.extraInfo "
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
                      children: ' "YourExtraInfo"'
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
                      children: "config.moduleCount "
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
                      children: "// The type of the feature module is local screenshot upload"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.modules["
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
                      children: "].type "
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
                      children: " ContentInspectConfig.CONTENT_INSPECT_TYPE_SUPERVISE;"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// The frequency of local screenshot upload is once every 2 seconds"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.modules["
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
                      children: "].interval "
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
                      children: " 2"
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
                      children: "mRtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "enableContentInspect"
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
                      children: ", config);"
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
                      children: "val"
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
                      children: " ContentInspectConfig"
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
                      children: "config.extraInfo "
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
                      children: ' "YourExtraInfo"'
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.moduleCount "
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
                      children: "// The type of the feature module is local screenshot upload"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.modules["
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
                      children: "].type "
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
                      children: " ContentInspectConfig.CONTENT_INSPECT_TYPE_SUPERVISE"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// The frequency of local screenshot upload is once every 2 seconds"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.modules["
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
                      children: "].interval "
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
                      children: " 2"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "mRtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "enableContentInspect"
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
                      children: ", config)"
                    })]
                  })]
                })
              })
            })
          })]
        }), _jsx(_components.h3, {
          id: "http-notification-callback",
          children: "HTTP notification callback"
        }), _jsxs(_components.p, {
          children: ["After a screenshot is successfully uploaded to the Agora SDRTN®, Agora sends a message notification callback to your application server in the form of an ", _jsx(_components.code, {
            children: "HTTPS"
          }), " ", _jsx(_components.code, {
            children: "POST"
          }), " request. The data format is ", _jsx(_components.code, {
            children: "JSON"
          }), ", and the character encoding is ", _jsx(_components.code, {
            children: "UTF-8"
          }), "."]
        }), _jsxs(_components.p, {
          children: ["Upon receiving the message notification, your application server must respond with status code ", _jsx(_components.code, {
            children: "200"
          }), ". The expected response body format is ", _jsx(_components.code, {
            children: "JSON"
          }), ". In any of the following cases, the notification is considered to have failed:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "No response is received from your server within 5 seconds after sending the message notification."
          }), `
`, _jsxs(_components.li, {
            children: ["The ", _jsx(_components.code, {
              children: "HTTP"
            }), " status code of the response is not ", _jsx(_components.code, {
              children: "200"
            }), ", or the response body format is not ", _jsx(_components.code, {
              children: "JSON"
            }), "."]
          }), `
`]
        }), _jsx(_components.p, {
          children: "The Agora service immediately retries after the first notification failure, and sends the message three times in total."
        }), _jsx(_components.h4, {
          id: "request-header",
          children: "Request header"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Field Name"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "Content-Type"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "application/json;charset=utf-8"
                })
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "request-body",
          children: "Request body"
        }), _jsx(_components.p, {
          children: "The request body is a JSON Object, containing the following fields:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Field"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Type"
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
                children: _jsx(_components.code, {
                  children: "requestId"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Callback notification ID, identifying an event notification from the Agora business server."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "callbackParam"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "JSON Object"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Custom fields passed in the callback, currently includes the ", _jsx(_components.code, {
                  children: "cname"
                }), " field, representing the channel name."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "callbackData"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String data passed through by the SDK local screenshot upload module."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "checksum"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["MD5 value calculated from the parameters ", _jsx(_components.code, {
                  children: "callbackAddr"
                }), ", ", _jsx(_components.code, {
                  children: "code"
                }), ", ", _jsx(_components.code, {
                  children: "object"
                }), ", and ", _jsx(_components.code, {
                  children: "requestId"
                }), ". Used to verify whether this callback notification comes from the local screenshot upload service."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "object"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.p, {
                  children: ["Name of the screenshot file. The naming convention for this file is: ", _jsx(_components.code, {
                    children: "//___uid_s___uid_e__utc.jpg"
                  }), ". The meanings of the fields in the filename are as follows: ", _jsx(_components.code, {
                    children: ": Screenshot ID, a unique identifier for a screenshot."
                  }), ": Channel name to which the user being screenshotted belongs.", _jsx(_components.code, {
                    children: ": The user ID set when joining the channel."
                  }), ": File type, supports only ", _jsx(_components.code, {
                    children: "video"
                  }), ".``: Unix timestamp of this screenshot. UTC time, consists of year, month, day, hour, minute, second, and millisecond. For example, if ", _jsx(_components.code, {
                    children: "utc"
                  }), " is equal to ", _jsx(_components.code, {
                    children: "20190611073246073"
                  }), ", it represents the start time of this slice file as UTC June 11, 2019, 7:32", _jsx(_components.div, {}), ".073 AM."]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "code"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Number"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Status code of this screenshot. ", _jsx(_components.code, {
                  children: "200"
                }), " indicates that the screenshot is completed."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "msg"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Status of this screenshot. ", _jsx(_components.code, {
                  children: '"Supervise complete"'
                }), " indicates that the screenshot is completed."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "channelName"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Channel name to which the user being screenshotted belongs. Consistent with ", _jsx(_components.code, {
                  children: "object.cname"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "userId"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["User ID of the user being screenshotted. Consistent with ", _jsx(_components.code, {
                  children: "object.uid"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "timestamp"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Int"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Unix timestamp (milliseconds) of this screenshot. UTC time, consistent with ", _jsx(_components.code, {
                  children: "object.utc"
                }), "."]
              })]
            })]
          })]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Request Example"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "requestId"'
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
                  children: '"38f8e3cfdcXXXXXXXXX1ceba380d7e1a_1652693284_b5813fe2ae4fa5cdfe5abd8fef82526f"'
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
                  children: '  "callbackParam"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "cname"'
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
                  children: '"httpClient463224"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "callbackData"'
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
                  children: '""'
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
                  children: '  "checksum"'
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
                  children: '"75ee988XXXXXXc2ad4ec2aef58f178fd8"'
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
                  children: '  "object"'
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
                  children: '"test/20201216/38f8e3cfdc474cd56fc1ceba380d7e1a_httpClient463224__uid_s_91__uid_e_video_20200413081128672.jpg"'
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
                  children: '  "code"'
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
                  children: "200"
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
                  children: '  "msg"'
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
                  children: '"Supervise complete"'
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
                  children: '  "channelName"'
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
                  children: '"httpClient463224"'
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
                  children: '  "userId"'
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
                  children: '"91"'
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
                  children: '  "timestamp"'
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
                  children: "20190611073246070"
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
        }), _jsx(_components.h4, {
          id: "response",
          children: "Response"
        }), _jsx(_components.p, {
          children: "After receiving the message notification, your application server is expected to respond. The response package format is JSON. In any of the following cases, the Agora service considers the notification as failed:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "After sending a message notification, no response is received from your server within 5 seconds."
          }), `
`, _jsxs(_components.li, {
            children: ["The HTTP status code of the response is not ", _jsx(_components.code, {
              children: "200"
            }), ", or the response body format is not JSON."]
          }), `
`]
        }), _jsx(_components.p, {
          children: "The Agora service immediately retries and sends the message notification again after the first notification fails. It attempts to notify you three times in total."
        }), _jsx(_components.h2, {
          id: "reference",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "pricing",
          children: "Pricing"
        }), _jsx(_components.p, {
          children: "Agora charges for local screenshot upload based on two metrics:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.strong, {
              children: "Screenshot fee"
            })
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "QPS overage fee"
            }), " (queries per second)"]
          }), `
`]
        }), _jsx(_components.p, {
          children: "At the end of each month, Agora calculates:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "The total number of screenshots generated"
          }), `
`, _jsx(_components.li, {
            children: "The monthly peak QPS if it exceeds the free quota"
          }), `
`]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Billing formula:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M22.27 19.385H1.73A1.73 1.73 0 010 17.655V6.345a1.73 1.73 0 011.73-1.73h20.54A1.73 1.73 0 0124 6.345v11.308a1.73 1.73 0 01-1.73 1.731zM5.769 15.923v-4.5l2.308 2.885 2.307-2.885v4.5h2.308V8.078h-2.308l-2.307 2.885-2.308-2.885H3.46v7.847zM21.232 12h-2.309V8.077h-2.307V12h-2.308l3.461 4.039z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "Monthly fee = (Number of screenshots - free quota) × Screenshot unit price"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      + (Monthly peak QPS - free QPS) × QPS overage unit price"
                })
              })]
            })
          })
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Billing Type"
              }), _jsx(_components.th, {
                children: "Unit Price"
              }), _jsx(_components.th, {
                children: "Discount Policy"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Screenshot Fee"
              }), _jsx(_components.td, {
                children: "$0.30 per 10,000 images"
              }), _jsx(_components.td, {
                children: "First 10,000 images per month are free"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "QPS Overage Fee"
              }), _jsx(_components.td, {
                children: "$1.5 per QPS"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.p, {
                  children: "Includes 500 QPS per month:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: "≤ 500 QPS: No charge"
                    }), `
`]
                  }), `
`, _jsxs(_components.li, {
                    children: [`
`, _jsxs(_components.blockquote, {
                      children: [`
`, _jsx(_components.p, {
                        children: "500 QPS: Charged based on monthly peak QPS"
                      }), `
`]
                    }), `
`]
                  }), `
`]
                })]
              })]
            })]
          })]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Example 1:"
              }), `
A project generates `, _jsx(_components.strong, {
                children: "910,000 screenshots"
              }), " in one month. Peak QPS = ", _jsx(_components.strong, {
                children: "100"
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Screenshots: 910,000 - 10,000 (free) = 900,000 billable images"
              }), `
`, _jsxs(_components.li, {
                children: ["Screenshot fee: 900,000 ÷ 10,000 × $0.30 = ", _jsx(_components.strong, {
                  children: "$27.00"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["QPS fee: 100 ≤ 500 (free), so ", _jsx(_components.strong, {
                  children: "$0"
                })]
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.strong, {
                  children: "Total fee = $27.00"
                })
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Example 2:"
              }), `
A project generates `, _jsx(_components.strong, {
                children: "2.91 million screenshots"
              }), " in one month. Peak QPS = ", _jsx(_components.strong, {
                children: "600"
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Screenshots: 2,910,000 - 10,000 (free) = 2,900,000 billable images"
              }), `
`, _jsxs(_components.li, {
                children: ["Screenshot fee: 2,900,000 ÷ 10,000 × $0.30 = ", _jsx(_components.strong, {
                  children: "$87.00"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["QPS fee: (600 - 500) × $1.5 = ", _jsx(_components.strong, {
                  children: "$150.00"
                })]
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.strong, {
                  children: "Total fee = $237.00"
                })
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_enablecontentinspect",
              children: _jsx(_components.code, {
                children: "enableContentInspect"
              })
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "local-screenshot-upload-dynamic-library",
          children: "local screenshot upload dynamic library"
        }), _jsxs(_components.p, {
          children: ["You can find details about the name of the local screenshot upload dynamic library and the increase in app size after integration in ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/optimize-and-operate/app-size-optimization",
            children: "App size optimization"
          }), "."]
        }), _jsx(_components.h3, {
          id: "http-status-codes",
          children: "HTTP status codes"
        }), _jsx(_components.p, {
          children: "The HTTP status codes for the application server responses are as follows:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Status Code"
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
                children: _jsx(_components.code, {
                  children: "200"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Successful request."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "201"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Successful request and creation of a new resource."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "206"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "No user streamed during the entire screenshot process, or some screenshot files were not uploaded to the third-party cloud storage."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "400"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Syntax error in the request (For example, parameter error), and the server cannot understand it."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "401"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Unauthorized (App ID or Customer Certificate mismatch)."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "404"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "The server cannot find the requested resource (webpage)."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "500"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Internal server error, unable to complete the request."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "504"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Internal server error. The server acting as a gateway or proxy did not receive a timely response from the upstream server."
              })]
            })]
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
          children: "This page shows you how to enable screenshot uploads on your app and handle screenshot upload callbacks."
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Local screenshot upload is a paid service. For billing details, refer to ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/reference/pricing",
                children: "Pricing"
              }), "."]
            })
          })
        }), _jsx(_components.h2, {
          id: "understand-the-tech-1",
          children: "Understand the tech"
        }), _jsxs(_components.p, {
          children: ["When you enable screenshot upload, you set the interval between screenshots. After each interval, RTC SDK takes a screenshot of the video stream sent by local users, and uploads the image to Agora SDRTN®. Agora SDRTN® uploads each screenshot to your third-party cloud storage and sends a callback notification to your server in the form of an ", _jsx(_components.code, {
            children: "HTTPS"
          }), " request."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Screenshot upload"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/screenshot-upload.svg",
            alt: "image"
          })
        }), _jsx(_components.h2, {
          id: "prerequisites-1",
          children: "Prerequisites"
        }), _jsx(_components.p, {
          children: "Before implementing the Agora local screenshot upload feature, take the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Activate local screenshot upload service"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["In ", _jsx(_components.a, {
                href: "https://console.agora.io",
                children: "Agora Console"
              }), ", select ", _jsx(_components.strong, {
                children: "RTC Services"
              }), " from the sidebar, then locate the ", _jsx(_components.strong, {
                children: "Video Screenshot Upload"
              }), " card and turn on its toggle. Select the settings icon on the card to open its configuration panel."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/console/enable-screenshot-upload.png",
                alt: "Enable screenshot upload"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Configure third-party cloud storage"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Select the settings icon on the ", _jsx(_components.strong, {
                children: "Video Screenshot Upload"
              }), " card to open its configuration panel."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/console/screenshot-upload-configuration.png",
                alt: "Screenshot upload config"
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "warning",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Once you turn on ", _jsx(_components.strong, {
                    children: "Enable Video Screenshot Upload"
                  }), ", you can't disable it."]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Currently, the Agora local screenshot upload service only supports Amazon S3 as the third-party cloud storage provider. If you want to use a different provider, ", _jsx(_components.a, {
                    href: "mailto:support@agora.io",
                    children: "contact"
                  }), " technical support."]
                })
              })
            }), `
`, _jsx(_components.p, {
              children: "Fill in the following information:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Storage"
                  }), ": The third-party cloud storage provider. Fixed to AWS."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Callback URL"
                  }), ": The server address to receive callback notifications of local screenshot upload results."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Endpoint"
                  }), ": Specify the access domain (Endpoint) of the bucket. See ", _jsx(_components.a, {
                    href: "https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region",
                    children: "AWS Official Documentation"
                  }), " for details."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Region"
                  }), ": The data center region setting for third-party cloud storage. See ", _jsx(_components.a, {
                    href: "https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region",
                    children: "AWS Official Documentation"
                  }), " for details."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Access key"
                  }), ": String type, the access key of the third-party cloud storage. Best practice is to provide a write-only access key."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Secret key"
                  }), ": String type, the secret key of the third-party cloud storage."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Bucket Name"
                  }), ": String type, the bucket name of the third-party cloud storage. The bucket name must comply with the naming rules of the corresponding third-party cloud storage service."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Filename Prefix"
                  }), ": (Optional) JSON Array, an array composed of multiple strings, indicating the storage location of screenshots in the third-party cloud storage. For example, if ", _jsx(_components.code, {
                    children: "fileNamePrefix"
                  }), " = ", _jsx(_components.code, {
                    children: '["directory1","directory2"]'
                  }), ", the prefix ", _jsx(_components.code, {
                    children: "directory1/directory2/"
                  }), " will be added to the screenshot filename, that is, ", _jsx(_components.code, {
                    children: "directory1/directory2/xxx.jpg"
                  }), ". The prefix length, including slashes, must not exceed 128 characters. The string should not contain symbols such as slashes, underscores, parentheses, and so on. The supported character set is as follows:"]
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "26 lowercase English letters a-z"
                  }), `
`, _jsx(_components.li, {
                    children: "26 uppercase English letters A-Z"
                  }), `
`, _jsx(_components.li, {
                    children: "10 digits 0-9"
                  }), `
`]
                }), `
`]
              }), `
`]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Sample configuration"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Storage: AWS"
              }), `
`, _jsxs(_components.li, {
                children: ["Callback URL: ", _jsx(_components.code, {
                  children: "https://webhook.site/2e75da2d-xxxx-xxxx-xxx-a0ef44a5259d"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Endpoint: ", _jsx(_components.code, {
                  children: "s3.cn-north-1.amazonaws.com.cn"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Region: ", _jsx(_components.code, {
                  children: "cn-north-1"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Access key: ", _jsx(_components.code, {
                  children: "12345678"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Secret key: ", _jsx(_components.code, {
                  children: "abcd123"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Bucket Name: ", _jsx(_components.code, {
                  children: "test-artifacts"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Filename Prefix: ", _jsx(_components.code, {
                  children: "test"
                })]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Integrate RTC SDK"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Integrate the RTC SDK (including the local screenshot upload dynamic library) into your project, join a channel, and publish a video stream. See ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/get-started-sdk",
                children: "SDK quickstart"
              }), " for details."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "implement-local-screenshot-upload-1",
          children: "Implement local screenshot upload"
        }), _jsx(_components.p, {
          children: "You enable screenshot upload in your Video Calling client and handle the notification callback from Agora on your callback server."
        }), _jsx(_components.h3, {
          id: "enable-screenshot-upload-1",
          children: "Enable screenshot upload"
        }), _jsxs(_components.p, {
          children: ["Call the ", _jsx(_components.code, {
            children: "enableContentInspect"
          }), " method to enable the local screenshot upload feature. After successfully enabling the feature, the SDK will capture screenshots at the specified frequency and upload them to the Agora cloud server. To implement this logic, refer to the following code:"]
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
                  children: " inspectExtraConfig "
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
                  children: " AgoraContentInspectConfig"
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
                  children: "inspectExtraConfig.extraInfo "
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
                  children: ' "YourExtraInfo"'
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
                  children: " modules "
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
                  children: " [AgoraContentInspectModule]()"
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
                  children: " module1 "
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
                  children: " AgoraContentInspectModule"
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
                  children: "// The type of the feature module is local screenshot upload"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "module1.type "
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
                  children: " .supervise"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// The frequency of local screenshot upload is once every 2 seconds"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "module1.interval "
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
                  children: " 2"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "modules."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "append"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(module1)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "inspectExtraConfig.modules "
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
                  children: " modules"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "enableContentInspect"
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
                  children: "config"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ":inspectExtraConfig)"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "http-notification-callback-1",
          children: "HTTP notification callback"
        }), _jsxs(_components.p, {
          children: ["After a screenshot is successfully uploaded to the Agora SDRTN®, Agora sends a message notification callback to your application server in the form of an ", _jsx(_components.code, {
            children: "HTTPS"
          }), " ", _jsx(_components.code, {
            children: "POST"
          }), " request. The data format is ", _jsx(_components.code, {
            children: "JSON"
          }), ", and the character encoding is ", _jsx(_components.code, {
            children: "UTF-8"
          }), "."]
        }), _jsxs(_components.p, {
          children: ["Upon receiving the message notification, your application server must respond with status code ", _jsx(_components.code, {
            children: "200"
          }), ". The expected response body format is ", _jsx(_components.code, {
            children: "JSON"
          }), ". In any of the following cases, the notification is considered to have failed:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "No response is received from your server within 5 seconds after sending the message notification."
          }), `
`, _jsxs(_components.li, {
            children: ["The ", _jsx(_components.code, {
              children: "HTTP"
            }), " status code of the response is not ", _jsx(_components.code, {
              children: "200"
            }), ", or the response body format is not ", _jsx(_components.code, {
              children: "JSON"
            }), "."]
          }), `
`]
        }), _jsx(_components.p, {
          children: "The Agora service immediately retries after the first notification failure, and sends the message three times in total."
        }), _jsx(_components.h4, {
          id: "request-header-1",
          children: "Request header"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Field Name"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "Content-Type"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "application/json;charset=utf-8"
                })
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "request-body-1",
          children: "Request body"
        }), _jsx(_components.p, {
          children: "The request body is a JSON Object, containing the following fields:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Field"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Type"
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
                children: _jsx(_components.code, {
                  children: "requestId"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Callback notification ID, identifying an event notification from the Agora business server."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "callbackParam"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "JSON Object"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Custom fields passed in the callback, currently includes the ", _jsx(_components.code, {
                  children: "cname"
                }), " field, representing the channel name."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "callbackData"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String data passed through by the SDK local screenshot upload module."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "checksum"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["MD5 value calculated from the parameters ", _jsx(_components.code, {
                  children: "callbackAddr"
                }), ", ", _jsx(_components.code, {
                  children: "code"
                }), ", ", _jsx(_components.code, {
                  children: "object"
                }), ", and ", _jsx(_components.code, {
                  children: "requestId"
                }), ". Used to verify whether this callback notification comes from the local screenshot upload service."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "object"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.p, {
                  children: ["Name of the screenshot file. The naming convention for this file is: ", _jsx(_components.code, {
                    children: "//___uid_s___uid_e__utc.jpg"
                  }), ". The meanings of the fields in the filename are as follows: ", _jsx(_components.code, {
                    children: ": Screenshot ID, a unique identifier for a screenshot."
                  }), ": Channel name to which the user being screenshotted belongs.", _jsx(_components.code, {
                    children: ": The user ID set when joining the channel."
                  }), ": File type, supports only ", _jsx(_components.code, {
                    children: "video"
                  }), ".``: Unix timestamp of this screenshot. UTC time, consists of year, month, day, hour, minute, second, and millisecond. For example, if ", _jsx(_components.code, {
                    children: "utc"
                  }), " is equal to ", _jsx(_components.code, {
                    children: "20190611073246073"
                  }), ", it represents the start time of this slice file as UTC June 11, 2019, 7:32", _jsx(_components.div, {}), ".073 AM."]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "code"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Number"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Status code of this screenshot. ", _jsx(_components.code, {
                  children: "200"
                }), " indicates that the screenshot is completed."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "msg"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Status of this screenshot. ", _jsx(_components.code, {
                  children: '"Supervise complete"'
                }), " indicates that the screenshot is completed."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "channelName"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Channel name to which the user being screenshotted belongs. Consistent with ", _jsx(_components.code, {
                  children: "object.cname"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "userId"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["User ID of the user being screenshotted. Consistent with ", _jsx(_components.code, {
                  children: "object.uid"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "timestamp"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Int"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Unix timestamp (milliseconds) of this screenshot. UTC time, consistent with ", _jsx(_components.code, {
                  children: "object.utc"
                }), "."]
              })]
            })]
          })]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Request Example"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "requestId"'
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
                  children: '"38f8e3cfdcXXXXXXXXX1ceba380d7e1a_1652693284_b5813fe2ae4fa5cdfe5abd8fef82526f"'
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
                  children: '  "callbackParam"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "cname"'
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
                  children: '"httpClient463224"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "callbackData"'
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
                  children: '""'
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
                  children: '  "checksum"'
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
                  children: '"75ee988XXXXXXc2ad4ec2aef58f178fd8"'
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
                  children: '  "object"'
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
                  children: '"test/20201216/38f8e3cfdc474cd56fc1ceba380d7e1a_httpClient463224__uid_s_91__uid_e_video_20200413081128672.jpg"'
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
                  children: '  "code"'
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
                  children: "200"
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
                  children: '  "msg"'
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
                  children: '"Supervise complete"'
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
                  children: '  "channelName"'
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
                  children: '"httpClient463224"'
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
                  children: '  "userId"'
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
                  children: '"91"'
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
                  children: '  "timestamp"'
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
                  children: "20190611073246070"
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
        }), _jsx(_components.h4, {
          id: "response-1",
          children: "Response"
        }), _jsx(_components.p, {
          children: "After receiving the message notification, your application server is expected to respond. The response package format is JSON. In any of the following cases, the Agora service considers the notification as failed:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "After sending a message notification, no response is received from your server within 5 seconds."
          }), `
`, _jsxs(_components.li, {
            children: ["The HTTP status code of the response is not ", _jsx(_components.code, {
              children: "200"
            }), ", or the response body format is not JSON."]
          }), `
`]
        }), _jsx(_components.p, {
          children: "The Agora service immediately retries and sends the message notification again after the first notification fails. It attempts to notify you three times in total."
        }), _jsx(_components.h2, {
          id: "reference-1",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "pricing-1",
          children: "Pricing"
        }), _jsx(_components.p, {
          children: "Agora charges for local screenshot upload based on two metrics:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.strong, {
              children: "Screenshot fee"
            })
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "QPS overage fee"
            }), " (queries per second)"]
          }), `
`]
        }), _jsx(_components.p, {
          children: "At the end of each month, Agora calculates:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "The total number of screenshots generated"
          }), `
`, _jsx(_components.li, {
            children: "The monthly peak QPS if it exceeds the free quota"
          }), `
`]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Billing formula:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M22.27 19.385H1.73A1.73 1.73 0 010 17.655V6.345a1.73 1.73 0 011.73-1.73h20.54A1.73 1.73 0 0124 6.345v11.308a1.73 1.73 0 01-1.73 1.731zM5.769 15.923v-4.5l2.308 2.885 2.307-2.885v4.5h2.308V8.078h-2.308l-2.307 2.885-2.308-2.885H3.46v7.847zM21.232 12h-2.309V8.077h-2.307V12h-2.308l3.461 4.039z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "Monthly fee = (Number of screenshots - free quota) × Screenshot unit price"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      + (Monthly peak QPS - free QPS) × QPS overage unit price"
                })
              })]
            })
          })
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Billing Type"
              }), _jsx(_components.th, {
                children: "Unit Price"
              }), _jsx(_components.th, {
                children: "Discount Policy"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Screenshot Fee"
              }), _jsx(_components.td, {
                children: "$0.30 per 10,000 images"
              }), _jsx(_components.td, {
                children: "First 10,000 images per month are free"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "QPS Overage Fee"
              }), _jsx(_components.td, {
                children: "$1.5 per QPS"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.p, {
                  children: "Includes 500 QPS per month:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: "≤ 500 QPS: No charge"
                    }), `
`]
                  }), `
`, _jsxs(_components.li, {
                    children: [`
`, _jsxs(_components.blockquote, {
                      children: [`
`, _jsx(_components.p, {
                        children: "500 QPS: Charged based on monthly peak QPS"
                      }), `
`]
                    }), `
`]
                  }), `
`]
                })]
              })]
            })]
          })]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Example 1:"
              }), `
A project generates `, _jsx(_components.strong, {
                children: "910,000 screenshots"
              }), " in one month. Peak QPS = ", _jsx(_components.strong, {
                children: "100"
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Screenshots: 910,000 - 10,000 (free) = 900,000 billable images"
              }), `
`, _jsxs(_components.li, {
                children: ["Screenshot fee: 900,000 ÷ 10,000 × $0.30 = ", _jsx(_components.strong, {
                  children: "$27.00"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["QPS fee: 100 ≤ 500 (free), so ", _jsx(_components.strong, {
                  children: "$0"
                })]
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.strong, {
                  children: "Total fee = $27.00"
                })
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Example 2:"
              }), `
A project generates `, _jsx(_components.strong, {
                children: "2.91 million screenshots"
              }), " in one month. Peak QPS = ", _jsx(_components.strong, {
                children: "600"
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Screenshots: 2,910,000 - 10,000 (free) = 2,900,000 billable images"
              }), `
`, _jsxs(_components.li, {
                children: ["Screenshot fee: 2,900,000 ÷ 10,000 × $0.30 = ", _jsx(_components.strong, {
                  children: "$87.00"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["QPS fee: (600 - 500) × $1.5 = ", _jsx(_components.strong, {
                  children: "$150.00"
                })]
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.strong, {
                  children: "Total fee = $237.00"
                })
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference-1",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enablecontentinspect(_:config:)",
              children: _jsx(_components.code, {
                children: "enableContentInspect(_:config:)"
              })
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "local-screenshot-upload-dynamic-library-1",
          children: "local screenshot upload dynamic library"
        }), _jsxs(_components.p, {
          children: ["You can find details about the name of the local screenshot upload dynamic library and the increase in app size after integration in ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/optimize-and-operate/app-size-optimization",
            children: "App size optimization"
          }), "."]
        }), _jsx(_components.h3, {
          id: "http-status-codes-1",
          children: "HTTP status codes"
        }), _jsx(_components.p, {
          children: "The HTTP status codes for the application server responses are as follows:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Status Code"
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
                children: _jsx(_components.code, {
                  children: "200"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Successful request."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "201"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Successful request and creation of a new resource."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "206"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "No user streamed during the entire screenshot process, or some screenshot files were not uploaded to the third-party cloud storage."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "400"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Syntax error in the request (For example, parameter error), and the server cannot understand it."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "401"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Unauthorized (App ID or Customer Certificate mismatch)."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "404"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "The server cannot find the requested resource (webpage)."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "500"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Internal server error, unable to complete the request."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "504"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Internal server error. The server acting as a gateway or proxy did not receive a timely response from the upstream server."
              })]
            })]
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
          children: "This page shows you how to enable screenshot uploads on your app and handle screenshot upload callbacks."
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Local screenshot upload is a paid service. For billing details, refer to ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/reference/pricing",
                children: "Pricing"
              }), "."]
            })
          })
        }), _jsx(_components.h2, {
          id: "understand-the-tech-2",
          children: "Understand the tech"
        }), _jsxs(_components.p, {
          children: ["When you enable screenshot upload, you set the interval between screenshots. After each interval, RTC SDK takes a screenshot of the video stream sent by local users, and uploads the image to Agora SDRTN®. Agora SDRTN® uploads each screenshot to your third-party cloud storage and sends a callback notification to your server in the form of an ", _jsx(_components.code, {
            children: "HTTPS"
          }), " request."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Screenshot upload"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/screenshot-upload.svg",
            alt: "image"
          })
        }), _jsx(_components.h2, {
          id: "prerequisites-2",
          children: "Prerequisites"
        }), _jsx(_components.p, {
          children: "Before implementing the Agora local screenshot upload feature, take the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Activate local screenshot upload service"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["In ", _jsx(_components.a, {
                href: "https://console.agora.io",
                children: "Agora Console"
              }), ", select ", _jsx(_components.strong, {
                children: "RTC Services"
              }), " from the sidebar, then locate the ", _jsx(_components.strong, {
                children: "Video Screenshot Upload"
              }), " card and turn on its toggle. Select the settings icon on the card to open its configuration panel."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/console/enable-screenshot-upload.png",
                alt: "Enable screenshot upload"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Configure third-party cloud storage"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Select the settings icon on the ", _jsx(_components.strong, {
                children: "Video Screenshot Upload"
              }), " card to open its configuration panel."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/console/screenshot-upload-configuration.png",
                alt: "Screenshot upload config"
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "warning",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Once you turn on ", _jsx(_components.strong, {
                    children: "Enable Video Screenshot Upload"
                  }), ", you can't disable it."]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Currently, the Agora local screenshot upload service only supports Amazon S3 as the third-party cloud storage provider. If you want to use a different provider, ", _jsx(_components.a, {
                    href: "mailto:support@agora.io",
                    children: "contact"
                  }), " technical support."]
                })
              })
            }), `
`, _jsx(_components.p, {
              children: "Fill in the following information:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Storage"
                  }), ": The third-party cloud storage provider. Fixed to AWS."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Callback URL"
                  }), ": The server address to receive callback notifications of local screenshot upload results."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Endpoint"
                  }), ": Specify the access domain (Endpoint) of the bucket. See ", _jsx(_components.a, {
                    href: "https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region",
                    children: "AWS Official Documentation"
                  }), " for details."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Region"
                  }), ": The data center region setting for third-party cloud storage. See ", _jsx(_components.a, {
                    href: "https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region",
                    children: "AWS Official Documentation"
                  }), " for details."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Access key"
                  }), ": String type, the access key of the third-party cloud storage. Best practice is to provide a write-only access key."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Secret key"
                  }), ": String type, the secret key of the third-party cloud storage."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Bucket Name"
                  }), ": String type, the bucket name of the third-party cloud storage. The bucket name must comply with the naming rules of the corresponding third-party cloud storage service."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Filename Prefix"
                  }), ": (Optional) JSON Array, an array composed of multiple strings, indicating the storage location of screenshots in the third-party cloud storage. For example, if ", _jsx(_components.code, {
                    children: "fileNamePrefix"
                  }), " = ", _jsx(_components.code, {
                    children: '["directory1","directory2"]'
                  }), ", the prefix ", _jsx(_components.code, {
                    children: "directory1/directory2/"
                  }), " will be added to the screenshot filename, that is, ", _jsx(_components.code, {
                    children: "directory1/directory2/xxx.jpg"
                  }), ". The prefix length, including slashes, must not exceed 128 characters. The string should not contain symbols such as slashes, underscores, parentheses, and so on. The supported character set is as follows:"]
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "26 lowercase English letters a-z"
                  }), `
`, _jsx(_components.li, {
                    children: "26 uppercase English letters A-Z"
                  }), `
`, _jsx(_components.li, {
                    children: "10 digits 0-9"
                  }), `
`]
                }), `
`]
              }), `
`]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Sample configuration"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Storage: AWS"
              }), `
`, _jsxs(_components.li, {
                children: ["Callback URL: ", _jsx(_components.code, {
                  children: "https://webhook.site/2e75da2d-xxxx-xxxx-xxx-a0ef44a5259d"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Endpoint: ", _jsx(_components.code, {
                  children: "s3.cn-north-1.amazonaws.com.cn"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Region: ", _jsx(_components.code, {
                  children: "cn-north-1"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Access key: ", _jsx(_components.code, {
                  children: "12345678"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Secret key: ", _jsx(_components.code, {
                  children: "abcd123"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Bucket Name: ", _jsx(_components.code, {
                  children: "test-artifacts"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Filename Prefix: ", _jsx(_components.code, {
                  children: "test"
                })]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Integrate RTC SDK"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Integrate the RTC SDK (including the local screenshot upload dynamic library) into your project, join a channel, and publish a video stream. See ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/get-started-sdk",
                children: "SDK quickstart"
              }), " for details."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "implement-local-screenshot-upload-2",
          children: "Implement local screenshot upload"
        }), _jsx(_components.p, {
          children: "You enable screenshot upload in your Video Calling client and handle the notification callback from Agora on your callback server."
        }), _jsx(_components.h3, {
          id: "enable-screenshot-upload-2",
          children: "Enable screenshot upload"
        }), _jsxs(_components.p, {
          children: ["Call the ", _jsx(_components.code, {
            children: "enableContentInspect"
          }), " method to enable the local screenshot upload feature. After successfully enabling the feature, the SDK will capture screenshots at the specified frequency and upload them to the Agora cloud server. To implement this logic, refer to the following code:"]
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
                  children: " inspectExtraConfig "
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
                  children: " AgoraContentInspectConfig"
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
                  children: "inspectExtraConfig.extraInfo "
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
                  children: ' "YourExtraInfo"'
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
                  children: " modules "
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
                  children: " [AgoraContentInspectModule]()"
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
                  children: " module1 "
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
                  children: " AgoraContentInspectModule"
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
                  children: "// The type of the feature module is local screenshot upload"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "module1.type "
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
                  children: " .supervise"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// The frequency of local screenshot upload is once every 2 seconds"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "module1.interval "
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
                  children: " 2"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "modules."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "append"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(module1)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "inspectExtraConfig.modules "
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
                  children: " modules"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "enableContentInspect"
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
                  children: "config"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ":inspectExtraConfig)"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "http-notification-callback-2",
          children: "HTTP notification callback"
        }), _jsxs(_components.p, {
          children: ["After a screenshot is successfully uploaded to the Agora SDRTN®, Agora sends a message notification callback to your application server in the form of an ", _jsx(_components.code, {
            children: "HTTPS"
          }), " ", _jsx(_components.code, {
            children: "POST"
          }), " request. The data format is ", _jsx(_components.code, {
            children: "JSON"
          }), ", and the character encoding is ", _jsx(_components.code, {
            children: "UTF-8"
          }), "."]
        }), _jsxs(_components.p, {
          children: ["Upon receiving the message notification, your application server must respond with status code ", _jsx(_components.code, {
            children: "200"
          }), ". The expected response body format is ", _jsx(_components.code, {
            children: "JSON"
          }), ". In any of the following cases, the notification is considered to have failed:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "No response is received from your server within 5 seconds after sending the message notification."
          }), `
`, _jsxs(_components.li, {
            children: ["The ", _jsx(_components.code, {
              children: "HTTP"
            }), " status code of the response is not ", _jsx(_components.code, {
              children: "200"
            }), ", or the response body format is not ", _jsx(_components.code, {
              children: "JSON"
            }), "."]
          }), `
`]
        }), _jsx(_components.p, {
          children: "The Agora service immediately retries after the first notification failure, and sends the message three times in total."
        }), _jsx(_components.h4, {
          id: "request-header-2",
          children: "Request header"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Field Name"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "Content-Type"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "application/json;charset=utf-8"
                })
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "request-body-2",
          children: "Request body"
        }), _jsx(_components.p, {
          children: "The request body is a JSON Object, containing the following fields:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Field"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Type"
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
                children: _jsx(_components.code, {
                  children: "requestId"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Callback notification ID, identifying an event notification from the Agora business server."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "callbackParam"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "JSON Object"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Custom fields passed in the callback, currently includes the ", _jsx(_components.code, {
                  children: "cname"
                }), " field, representing the channel name."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "callbackData"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String data passed through by the SDK local screenshot upload module."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "checksum"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["MD5 value calculated from the parameters ", _jsx(_components.code, {
                  children: "callbackAddr"
                }), ", ", _jsx(_components.code, {
                  children: "code"
                }), ", ", _jsx(_components.code, {
                  children: "object"
                }), ", and ", _jsx(_components.code, {
                  children: "requestId"
                }), ". Used to verify whether this callback notification comes from the local screenshot upload service."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "object"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.p, {
                  children: ["Name of the screenshot file. The naming convention for this file is: ", _jsx(_components.code, {
                    children: "//___uid_s___uid_e__utc.jpg"
                  }), ". The meanings of the fields in the filename are as follows: ", _jsx(_components.code, {
                    children: ": Screenshot ID, a unique identifier for a screenshot."
                  }), ": Channel name to which the user being screenshotted belongs.", _jsx(_components.code, {
                    children: ": The user ID set when joining the channel."
                  }), ": File type, supports only ", _jsx(_components.code, {
                    children: "video"
                  }), ".``: Unix timestamp of this screenshot. UTC time, consists of year, month, day, hour, minute, second, and millisecond. For example, if ", _jsx(_components.code, {
                    children: "utc"
                  }), " is equal to ", _jsx(_components.code, {
                    children: "20190611073246073"
                  }), ", it represents the start time of this slice file as UTC June 11, 2019, 7:32", _jsx(_components.div, {}), ".073 AM."]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "code"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Number"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Status code of this screenshot. ", _jsx(_components.code, {
                  children: "200"
                }), " indicates that the screenshot is completed."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "msg"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Status of this screenshot. ", _jsx(_components.code, {
                  children: '"Supervise complete"'
                }), " indicates that the screenshot is completed."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "channelName"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Channel name to which the user being screenshotted belongs. Consistent with ", _jsx(_components.code, {
                  children: "object.cname"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "userId"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["User ID of the user being screenshotted. Consistent with ", _jsx(_components.code, {
                  children: "object.uid"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "timestamp"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Int"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Unix timestamp (milliseconds) of this screenshot. UTC time, consistent with ", _jsx(_components.code, {
                  children: "object.utc"
                }), "."]
              })]
            })]
          })]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Request Example"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "requestId"'
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
                  children: '"38f8e3cfdcXXXXXXXXX1ceba380d7e1a_1652693284_b5813fe2ae4fa5cdfe5abd8fef82526f"'
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
                  children: '  "callbackParam"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "cname"'
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
                  children: '"httpClient463224"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "callbackData"'
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
                  children: '""'
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
                  children: '  "checksum"'
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
                  children: '"75ee988XXXXXXc2ad4ec2aef58f178fd8"'
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
                  children: '  "object"'
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
                  children: '"test/20201216/38f8e3cfdc474cd56fc1ceba380d7e1a_httpClient463224__uid_s_91__uid_e_video_20200413081128672.jpg"'
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
                  children: '  "code"'
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
                  children: "200"
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
                  children: '  "msg"'
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
                  children: '"Supervise complete"'
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
                  children: '  "channelName"'
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
                  children: '"httpClient463224"'
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
                  children: '  "userId"'
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
                  children: '"91"'
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
                  children: '  "timestamp"'
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
                  children: "20190611073246070"
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
        }), _jsx(_components.h4, {
          id: "response-2",
          children: "Response"
        }), _jsx(_components.p, {
          children: "After receiving the message notification, your application server is expected to respond. The response package format is JSON. In any of the following cases, the Agora service considers the notification as failed:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "After sending a message notification, no response is received from your server within 5 seconds."
          }), `
`, _jsxs(_components.li, {
            children: ["The HTTP status code of the response is not ", _jsx(_components.code, {
              children: "200"
            }), ", or the response body format is not JSON."]
          }), `
`]
        }), _jsx(_components.p, {
          children: "The Agora service immediately retries and sends the message notification again after the first notification fails. It attempts to notify you three times in total."
        }), _jsx(_components.h2, {
          id: "reference-2",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "pricing-2",
          children: "Pricing"
        }), _jsx(_components.p, {
          children: "Agora charges for local screenshot upload based on two metrics:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.strong, {
              children: "Screenshot fee"
            })
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "QPS overage fee"
            }), " (queries per second)"]
          }), `
`]
        }), _jsx(_components.p, {
          children: "At the end of each month, Agora calculates:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "The total number of screenshots generated"
          }), `
`, _jsx(_components.li, {
            children: "The monthly peak QPS if it exceeds the free quota"
          }), `
`]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Billing formula:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M22.27 19.385H1.73A1.73 1.73 0 010 17.655V6.345a1.73 1.73 0 011.73-1.73h20.54A1.73 1.73 0 0124 6.345v11.308a1.73 1.73 0 01-1.73 1.731zM5.769 15.923v-4.5l2.308 2.885 2.307-2.885v4.5h2.308V8.078h-2.308l-2.307 2.885-2.308-2.885H3.46v7.847zM21.232 12h-2.309V8.077h-2.307V12h-2.308l3.461 4.039z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "Monthly fee = (Number of screenshots - free quota) × Screenshot unit price"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      + (Monthly peak QPS - free QPS) × QPS overage unit price"
                })
              })]
            })
          })
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Billing Type"
              }), _jsx(_components.th, {
                children: "Unit Price"
              }), _jsx(_components.th, {
                children: "Discount Policy"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Screenshot Fee"
              }), _jsx(_components.td, {
                children: "$0.30 per 10,000 images"
              }), _jsx(_components.td, {
                children: "First 10,000 images per month are free"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "QPS Overage Fee"
              }), _jsx(_components.td, {
                children: "$1.5 per QPS"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.p, {
                  children: "Includes 500 QPS per month:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: "≤ 500 QPS: No charge"
                    }), `
`]
                  }), `
`, _jsxs(_components.li, {
                    children: [`
`, _jsxs(_components.blockquote, {
                      children: [`
`, _jsx(_components.p, {
                        children: "500 QPS: Charged based on monthly peak QPS"
                      }), `
`]
                    }), `
`]
                  }), `
`]
                })]
              })]
            })]
          })]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Example 1:"
              }), `
A project generates `, _jsx(_components.strong, {
                children: "910,000 screenshots"
              }), " in one month. Peak QPS = ", _jsx(_components.strong, {
                children: "100"
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Screenshots: 910,000 - 10,000 (free) = 900,000 billable images"
              }), `
`, _jsxs(_components.li, {
                children: ["Screenshot fee: 900,000 ÷ 10,000 × $0.30 = ", _jsx(_components.strong, {
                  children: "$27.00"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["QPS fee: 100 ≤ 500 (free), so ", _jsx(_components.strong, {
                  children: "$0"
                })]
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.strong, {
                  children: "Total fee = $27.00"
                })
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Example 2:"
              }), `
A project generates `, _jsx(_components.strong, {
                children: "2.91 million screenshots"
              }), " in one month. Peak QPS = ", _jsx(_components.strong, {
                children: "600"
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Screenshots: 2,910,000 - 10,000 (free) = 2,900,000 billable images"
              }), `
`, _jsxs(_components.li, {
                children: ["Screenshot fee: 2,900,000 ÷ 10,000 × $0.30 = ", _jsx(_components.strong, {
                  children: "$87.00"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["QPS fee: (600 - 500) × $1.5 = ", _jsx(_components.strong, {
                  children: "$150.00"
                })]
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.strong, {
                  children: "Total fee = $237.00"
                })
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference-2",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/enablecontentinspect(_:config:)",
              children: _jsx(_components.code, {
                children: "enableContentInspect(_:config:)"
              })
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "local-screenshot-upload-dynamic-library-2",
          children: "local screenshot upload dynamic library"
        }), _jsxs(_components.p, {
          children: ["You can find details about the name of the local screenshot upload dynamic library and the increase in app size after integration in ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/optimize-and-operate/app-size-optimization",
            children: "App size optimization"
          }), "."]
        }), _jsx(_components.h3, {
          id: "http-status-codes-2",
          children: "HTTP status codes"
        }), _jsx(_components.p, {
          children: "The HTTP status codes for the application server responses are as follows:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Status Code"
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
                children: _jsx(_components.code, {
                  children: "200"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Successful request."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "201"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Successful request and creation of a new resource."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "206"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "No user streamed during the entire screenshot process, or some screenshot files were not uploaded to the third-party cloud storage."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "400"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Syntax error in the request (For example, parameter error), and the server cannot understand it."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "401"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Unauthorized (App ID or Customer Certificate mismatch)."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "404"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "The server cannot find the requested resource (webpage)."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "500"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Internal server error, unable to complete the request."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "504"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Internal server error. The server acting as a gateway or proxy did not receive a timely response from the upstream server."
              })]
            })]
          })]
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
          children: "This page shows you how to enable screenshot uploads on your app and handle screenshot upload callbacks."
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Local screenshot upload is a paid service. For billing details, refer to ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/reference/pricing",
                children: "Pricing"
              }), "."]
            })
          })
        }), _jsx(_components.h2, {
          id: "understand-the-tech-3",
          children: "Understand the tech"
        }), _jsxs(_components.p, {
          children: ["When you enable screenshot upload, you set the interval between screenshots. After each interval, RTC SDK takes a screenshot of the video stream sent by local users, and uploads the image to Agora SDRTN®. Agora SDRTN® uploads each screenshot to your third-party cloud storage and sends a callback notification to your server in the form of an ", _jsx(_components.code, {
            children: "HTTPS"
          }), " request."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Screenshot upload"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/screenshot-upload.svg",
            alt: "image"
          })
        }), _jsx(_components.h2, {
          id: "prerequisites-3",
          children: "Prerequisites"
        }), _jsx(_components.p, {
          children: "Before implementing the Agora local screenshot upload feature, take the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Activate local screenshot upload service"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["In ", _jsx(_components.a, {
                href: "https://console.agora.io",
                children: "Agora Console"
              }), ", select ", _jsx(_components.strong, {
                children: "RTC Services"
              }), " from the sidebar, then locate the ", _jsx(_components.strong, {
                children: "Video Screenshot Upload"
              }), " card and turn on its toggle. Select the settings icon on the card to open its configuration panel."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/console/enable-screenshot-upload.png",
                alt: "Enable screenshot upload"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Configure third-party cloud storage"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Select the settings icon on the ", _jsx(_components.strong, {
                children: "Video Screenshot Upload"
              }), " card to open its configuration panel."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/console/screenshot-upload-configuration.png",
                alt: "Screenshot upload config"
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "warning",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Once you turn on ", _jsx(_components.strong, {
                    children: "Enable Video Screenshot Upload"
                  }), ", you can't disable it."]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Currently, the Agora local screenshot upload service only supports Amazon S3 as the third-party cloud storage provider. If you want to use a different provider, ", _jsx(_components.a, {
                    href: "mailto:support@agora.io",
                    children: "contact"
                  }), " technical support."]
                })
              })
            }), `
`, _jsx(_components.p, {
              children: "Fill in the following information:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Storage"
                  }), ": The third-party cloud storage provider. Fixed to AWS."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Callback URL"
                  }), ": The server address to receive callback notifications of local screenshot upload results."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Endpoint"
                  }), ": Specify the access domain (Endpoint) of the bucket. See ", _jsx(_components.a, {
                    href: "https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region",
                    children: "AWS Official Documentation"
                  }), " for details."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Region"
                  }), ": The data center region setting for third-party cloud storage. See ", _jsx(_components.a, {
                    href: "https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region",
                    children: "AWS Official Documentation"
                  }), " for details."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Access key"
                  }), ": String type, the access key of the third-party cloud storage. Best practice is to provide a write-only access key."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Secret key"
                  }), ": String type, the secret key of the third-party cloud storage."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Bucket Name"
                  }), ": String type, the bucket name of the third-party cloud storage. The bucket name must comply with the naming rules of the corresponding third-party cloud storage service."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Filename Prefix"
                  }), ": (Optional) JSON Array, an array composed of multiple strings, indicating the storage location of screenshots in the third-party cloud storage. For example, if ", _jsx(_components.code, {
                    children: "fileNamePrefix"
                  }), " = ", _jsx(_components.code, {
                    children: '["directory1","directory2"]'
                  }), ", the prefix ", _jsx(_components.code, {
                    children: "directory1/directory2/"
                  }), " will be added to the screenshot filename, that is, ", _jsx(_components.code, {
                    children: "directory1/directory2/xxx.jpg"
                  }), ". The prefix length, including slashes, must not exceed 128 characters. The string should not contain symbols such as slashes, underscores, parentheses, and so on. The supported character set is as follows:"]
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "26 lowercase English letters a-z"
                  }), `
`, _jsx(_components.li, {
                    children: "26 uppercase English letters A-Z"
                  }), `
`, _jsx(_components.li, {
                    children: "10 digits 0-9"
                  }), `
`]
                }), `
`]
              }), `
`]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Sample configuration"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Storage: AWS"
              }), `
`, _jsxs(_components.li, {
                children: ["Callback URL: ", _jsx(_components.code, {
                  children: "https://webhook.site/2e75da2d-xxxx-xxxx-xxx-a0ef44a5259d"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Endpoint: ", _jsx(_components.code, {
                  children: "s3.cn-north-1.amazonaws.com.cn"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Region: ", _jsx(_components.code, {
                  children: "cn-north-1"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Access key: ", _jsx(_components.code, {
                  children: "12345678"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Secret key: ", _jsx(_components.code, {
                  children: "abcd123"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Bucket Name: ", _jsx(_components.code, {
                  children: "test-artifacts"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Filename Prefix: ", _jsx(_components.code, {
                  children: "test"
                })]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Integrate RTC SDK"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Integrate the RTC SDK (including the local screenshot upload dynamic library) into your project, join a channel, and publish a video stream. See ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/get-started-sdk",
                children: "SDK quickstart"
              }), " for details."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "implement-local-screenshot-upload-3",
          children: "Implement local screenshot upload"
        }), _jsx(_components.p, {
          children: "You enable screenshot upload in your Video Calling client and handle the notification callback from Agora on your callback server."
        }), _jsx(_components.h3, {
          id: "enable-screenshot-upload-3",
          children: "Enable screenshot upload"
        }), _jsxs(_components.p, {
          children: ["Call the ", _jsx(_components.code, {
            children: "enableContentInspect"
          }), " method to enable the local screenshot upload feature. After successfully enabling the feature, the SDK will capture screenshots at the specified frequency and upload them to the Agora cloud server. To implement this logic, refer to the following code:"]
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
                  children: " inspectConfig"
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Set the interval for local screenshot to 2000 milliseconds (2 seconds), with a minimum value of 1000."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  interval: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "2000"
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // (Optional) Set the address prefix for third-party cloud storage."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  ossFilePrefix: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'https://your-cloud-storage.com/'"
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // (Optional) Add additional information."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  extraInfo: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'This is some additional information for content inspection.'"
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Set the function type to \\\"supervise\\\"."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  inspectType: ["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'supervise'"
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
                  children: "};"
                })
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
                  children: "client"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  ."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "enableContentInspect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(inspectConfig)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  ."
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
                  children: "'Content inspection enabled successfully.'"
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
                  children: "  })"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  ."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "catch"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(("
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
                  children: "'Failed to enable content inspection:'"
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
                  children: "  });"
                })
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "http-notification-callback-3",
          children: "HTTP notification callback"
        }), _jsxs(_components.p, {
          children: ["After a screenshot is successfully uploaded to the Agora SDRTN®, Agora sends a message notification callback to your application server in the form of an ", _jsx(_components.code, {
            children: "HTTPS"
          }), " ", _jsx(_components.code, {
            children: "POST"
          }), " request. The data format is ", _jsx(_components.code, {
            children: "JSON"
          }), ", and the character encoding is ", _jsx(_components.code, {
            children: "UTF-8"
          }), "."]
        }), _jsxs(_components.p, {
          children: ["Upon receiving the message notification, your application server must respond with status code ", _jsx(_components.code, {
            children: "200"
          }), ". The expected response body format is ", _jsx(_components.code, {
            children: "JSON"
          }), ". In any of the following cases, the notification is considered to have failed:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "No response is received from your server within 5 seconds after sending the message notification."
          }), `
`, _jsxs(_components.li, {
            children: ["The ", _jsx(_components.code, {
              children: "HTTP"
            }), " status code of the response is not ", _jsx(_components.code, {
              children: "200"
            }), ", or the response body format is not ", _jsx(_components.code, {
              children: "JSON"
            }), "."]
          }), `
`]
        }), _jsx(_components.p, {
          children: "The Agora service immediately retries after the first notification failure, and sends the message three times in total."
        }), _jsx(_components.h2, {
          id: "reference-3",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "pricing-3",
          children: "Pricing"
        }), _jsx(_components.p, {
          children: "Agora charges for local screenshot upload based on two metrics:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.strong, {
              children: "Screenshot fee"
            })
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "QPS overage fee"
            }), " (queries per second)"]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "local-screenshot-upload-dynamic-library-3",
          children: "local screenshot upload dynamic library"
        }), _jsxs(_components.p, {
          children: ["You can find details about the name of the local screenshot upload dynamic library and the increase in app size after integration in ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/optimize-and-operate/app-size-optimization",
            children: "App size optimization"
          }), "."]
        }), _jsx(_components.h3, {
          id: "http-status-codes-3",
          children: "HTTP status codes"
        }), _jsx(_components.p, {
          children: "The HTTP status codes for the application server responses are as follows:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Status Code"
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
                children: _jsx(_components.code, {
                  children: "200"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Successful request."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "201"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Successful request and creation of a new resource."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "206"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "No user streamed during the entire screenshot process, or some screenshot files were not uploaded to the third-party cloud storage."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "400"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Syntax error in the request (for example, parameter error), and the server cannot understand it."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "401"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Unauthorized (App ID or Customer Certificate mismatch)."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "404"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "The server cannot find the requested resource (webpage)."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "500"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Internal server error, unable to complete the request."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "504"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Internal server error. The server acting as a gateway or proxy did not receive a timely response from the upstream server."
              })]
            })]
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
          children: "This page shows you how to enable screenshot uploads on your app and handle screenshot upload callbacks."
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Local screenshot upload is a paid service. For billing details, refer to ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/reference/pricing",
                children: "Pricing"
              }), "."]
            })
          })
        }), _jsx(_components.h2, {
          id: "understand-the-tech-4",
          children: "Understand the tech"
        }), _jsxs(_components.p, {
          children: ["When you enable screenshot upload, you set the interval between screenshots. After each interval, RTC SDK takes a screenshot of the video stream sent by local users, and uploads the image to Agora SDRTN®. Agora SDRTN® uploads each screenshot to your third-party cloud storage and sends a callback notification to your server in the form of an ", _jsx(_components.code, {
            children: "HTTPS"
          }), " request."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Screenshot upload"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/screenshot-upload.svg",
            alt: "image"
          })
        }), _jsx(_components.h2, {
          id: "prerequisites-4",
          children: "Prerequisites"
        }), _jsx(_components.p, {
          children: "Before implementing the Agora local screenshot upload feature, take the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Activate local screenshot upload service"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["In ", _jsx(_components.a, {
                href: "https://console.agora.io",
                children: "Agora Console"
              }), ", select ", _jsx(_components.strong, {
                children: "RTC Services"
              }), " from the sidebar, then locate the ", _jsx(_components.strong, {
                children: "Video Screenshot Upload"
              }), " card and turn on its toggle. Select the settings icon on the card to open its configuration panel."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/console/enable-screenshot-upload.png",
                alt: "Enable screenshot upload"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Configure third-party cloud storage"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Select the settings icon on the ", _jsx(_components.strong, {
                children: "Video Screenshot Upload"
              }), " card to open its configuration panel."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/console/screenshot-upload-configuration.png",
                alt: "Screenshot upload config"
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "warning",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Once you turn on ", _jsx(_components.strong, {
                    children: "Enable Video Screenshot Upload"
                  }), ", you can't disable it."]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Currently, the Agora local screenshot upload service only supports Amazon S3 as the third-party cloud storage provider. If you want to use a different provider, ", _jsx(_components.a, {
                    href: "mailto:support@agora.io",
                    children: "contact"
                  }), " technical support."]
                })
              })
            }), `
`, _jsx(_components.p, {
              children: "Fill in the following information:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Storage"
                  }), ": The third-party cloud storage provider. Fixed to AWS."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Callback URL"
                  }), ": The server address to receive callback notifications of local screenshot upload results."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Endpoint"
                  }), ": Specify the access domain (Endpoint) of the bucket. See ", _jsx(_components.a, {
                    href: "https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region",
                    children: "AWS Official Documentation"
                  }), " for details."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Region"
                  }), ": The data center region setting for third-party cloud storage. See ", _jsx(_components.a, {
                    href: "https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region",
                    children: "AWS Official Documentation"
                  }), " for details."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Access key"
                  }), ": String type, the access key of the third-party cloud storage. Best practice is to provide a write-only access key."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Secret key"
                  }), ": String type, the secret key of the third-party cloud storage."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Bucket Name"
                  }), ": String type, the bucket name of the third-party cloud storage. The bucket name must comply with the naming rules of the corresponding third-party cloud storage service."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Filename Prefix"
                  }), ": (Optional) JSON Array, an array composed of multiple strings, indicating the storage location of screenshots in the third-party cloud storage. For example, if ", _jsx(_components.code, {
                    children: "fileNamePrefix"
                  }), " = ", _jsx(_components.code, {
                    children: '["directory1","directory2"]'
                  }), ", the prefix ", _jsx(_components.code, {
                    children: "directory1/directory2/"
                  }), " will be added to the screenshot filename, that is, ", _jsx(_components.code, {
                    children: "directory1/directory2/xxx.jpg"
                  }), ". The prefix length, including slashes, must not exceed 128 characters. The string should not contain symbols such as slashes, underscores, parentheses, and so on. The supported character set is as follows:"]
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "26 lowercase English letters a-z"
                  }), `
`, _jsx(_components.li, {
                    children: "26 uppercase English letters A-Z"
                  }), `
`, _jsx(_components.li, {
                    children: "10 digits 0-9"
                  }), `
`]
                }), `
`]
              }), `
`]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Sample configuration"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Storage: AWS"
              }), `
`, _jsxs(_components.li, {
                children: ["Callback URL: ", _jsx(_components.code, {
                  children: "https://webhook.site/2e75da2d-xxxx-xxxx-xxx-a0ef44a5259d"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Endpoint: ", _jsx(_components.code, {
                  children: "s3.cn-north-1.amazonaws.com.cn"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Region: ", _jsx(_components.code, {
                  children: "cn-north-1"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Access key: ", _jsx(_components.code, {
                  children: "12345678"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Secret key: ", _jsx(_components.code, {
                  children: "abcd123"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Bucket Name: ", _jsx(_components.code, {
                  children: "test-artifacts"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Filename Prefix: ", _jsx(_components.code, {
                  children: "test"
                })]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Integrate RTC SDK"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Integrate the RTC SDK (including the local screenshot upload dynamic library) into your project, join a channel, and publish a video stream. See ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/get-started-sdk",
                children: "SDK quickstart"
              }), " for details."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "implement-local-screenshot-upload-4",
          children: "Implement local screenshot upload"
        }), _jsx(_components.p, {
          children: "You enable screenshot upload in your Video Calling client and handle the notification callback from Agora on your callback server."
        }), _jsx(_components.h3, {
          id: "enable-screenshot-upload-4",
          children: "Enable screenshot upload"
        }), _jsxs(_components.p, {
          children: ["Call the ", _jsx(_components.code, {
            children: "enableContentInspect"
          }), " method to enable the local screenshot upload feature. After successfully enabling the feature, the SDK will capture screenshots at the specified frequency and upload them to the Agora cloud server. To implement this logic, refer to the following code:"]
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
                  children: " CMainFrame"
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
                  children: "OnBtnEnableContentInspect"
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
                  children: "  if"
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
                  children: "CAgoraObject"
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
                  children: "GetEngine"
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
                  children: "=="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " NULL"
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
                  children: "  ContentInspectConfig config;"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  ContentInspectModule module1;"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // The type of the feature module is local screenshot upload"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  module1.type "
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
                  children: " kContentInspectSupervise;"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // The frequency of local screenshot upload is once every 2 seconds"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  module1.interval "
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
                  children: " 2"
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
                  children: "  config.moduleCount "
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  config.modules["
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
                  children: "] "
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
                  children: " module1;"
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
                  children: "  CAgoraObject"
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
                  children: "GetEngine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "enableContentInspect"
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
                  children: ", config);"
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
          id: "http-notification-callback-4",
          children: "HTTP notification callback"
        }), _jsxs(_components.p, {
          children: ["After a screenshot is successfully uploaded to the Agora SDRTN®, Agora sends a message notification callback to your application server in the form of an ", _jsx(_components.code, {
            children: "HTTPS"
          }), " ", _jsx(_components.code, {
            children: "POST"
          }), " request. The data format is ", _jsx(_components.code, {
            children: "JSON"
          }), ", and the character encoding is ", _jsx(_components.code, {
            children: "UTF-8"
          }), "."]
        }), _jsxs(_components.p, {
          children: ["Upon receiving the message notification, your application server must respond with status code ", _jsx(_components.code, {
            children: "200"
          }), ". The expected response body format is ", _jsx(_components.code, {
            children: "JSON"
          }), ". In any of the following cases, the notification is considered to have failed:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "No response is received from your server within 5 seconds after sending the message notification."
          }), `
`, _jsxs(_components.li, {
            children: ["The ", _jsx(_components.code, {
              children: "HTTP"
            }), " status code of the response is not ", _jsx(_components.code, {
              children: "200"
            }), ", or the response body format is not ", _jsx(_components.code, {
              children: "JSON"
            }), "."]
          }), `
`]
        }), _jsx(_components.p, {
          children: "The Agora service immediately retries after the first notification failure, and sends the message three times in total."
        }), _jsx(_components.h4, {
          id: "request-header-3",
          children: "Request header"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Field Name"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "Content-Type"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "application/json;charset=utf-8"
                })
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "request-body-3",
          children: "Request body"
        }), _jsx(_components.p, {
          children: "The request body is a JSON Object, containing the following fields:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Field"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Type"
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
                children: _jsx(_components.code, {
                  children: "requestId"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Callback notification ID, identifying an event notification from the Agora business server."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "callbackParam"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "JSON Object"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Custom fields passed in the callback, currently includes the ", _jsx(_components.code, {
                  children: "cname"
                }), " field, representing the channel name."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "callbackData"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String data passed through by the SDK local screenshot upload module."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "checksum"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["MD5 value calculated from the parameters ", _jsx(_components.code, {
                  children: "callbackAddr"
                }), ", ", _jsx(_components.code, {
                  children: "code"
                }), ", ", _jsx(_components.code, {
                  children: "object"
                }), ", and ", _jsx(_components.code, {
                  children: "requestId"
                }), ". Used to verify whether this callback notification comes from the local screenshot upload service."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "object"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.p, {
                  children: ["Name of the screenshot file. The naming convention for this file is: ", _jsx(_components.code, {
                    children: "//___uid_s___uid_e__utc.jpg"
                  }), ". The meanings of the fields in the filename are as follows: ", _jsx(_components.code, {
                    children: ": Screenshot ID, a unique identifier for a screenshot."
                  }), ": Channel name to which the user being screenshotted belongs.", _jsx(_components.code, {
                    children: ": The user ID set when joining the channel."
                  }), ": File type, supports only ", _jsx(_components.code, {
                    children: "video"
                  }), ".``: Unix timestamp of this screenshot. UTC time, consists of year, month, day, hour, minute, second, and millisecond. For example, if ", _jsx(_components.code, {
                    children: "utc"
                  }), " is equal to ", _jsx(_components.code, {
                    children: "20190611073246073"
                  }), ", it represents the start time of this slice file as UTC June 11, 2019, 7:32", _jsx(_components.div, {}), ".073 AM."]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "code"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Number"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Status code of this screenshot. ", _jsx(_components.code, {
                  children: "200"
                }), " indicates that the screenshot is completed."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "msg"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Status of this screenshot. ", _jsx(_components.code, {
                  children: '"Supervise complete"'
                }), " indicates that the screenshot is completed."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "channelName"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Channel name to which the user being screenshotted belongs. Consistent with ", _jsx(_components.code, {
                  children: "object.cname"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "userId"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["User ID of the user being screenshotted. Consistent with ", _jsx(_components.code, {
                  children: "object.uid"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "timestamp"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Int"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Unix timestamp (milliseconds) of this screenshot. UTC time, consistent with ", _jsx(_components.code, {
                  children: "object.utc"
                }), "."]
              })]
            })]
          })]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Request Example"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "requestId"'
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
                  children: '"38f8e3cfdcXXXXXXXXX1ceba380d7e1a_1652693284_b5813fe2ae4fa5cdfe5abd8fef82526f"'
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
                  children: '  "callbackParam"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "cname"'
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
                  children: '"httpClient463224"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "callbackData"'
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
                  children: '""'
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
                  children: '  "checksum"'
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
                  children: '"75ee988XXXXXXc2ad4ec2aef58f178fd8"'
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
                  children: '  "object"'
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
                  children: '"test/20201216/38f8e3cfdc474cd56fc1ceba380d7e1a_httpClient463224__uid_s_91__uid_e_video_20200413081128672.jpg"'
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
                  children: '  "code"'
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
                  children: "200"
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
                  children: '  "msg"'
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
                  children: '"Supervise complete"'
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
                  children: '  "channelName"'
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
                  children: '"httpClient463224"'
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
                  children: '  "userId"'
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
                  children: '"91"'
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
                  children: '  "timestamp"'
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
                  children: "20190611073246070"
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
        }), _jsx(_components.h4, {
          id: "response-3",
          children: "Response"
        }), _jsx(_components.p, {
          children: "After receiving the message notification, your application server is expected to respond. The response package format is JSON. In any of the following cases, the Agora service considers the notification as failed:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "After sending a message notification, no response is received from your server within 5 seconds."
          }), `
`, _jsxs(_components.li, {
            children: ["The HTTP status code of the response is not ", _jsx(_components.code, {
              children: "200"
            }), ", or the response body format is not JSON."]
          }), `
`]
        }), _jsx(_components.p, {
          children: "The Agora service immediately retries and sends the message notification again after the first notification fails. It attempts to notify you three times in total."
        }), _jsx(_components.h2, {
          id: "reference-4",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "pricing-4",
          children: "Pricing"
        }), _jsx(_components.p, {
          children: "Agora charges for local screenshot upload based on two metrics:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.strong, {
              children: "Screenshot fee"
            })
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "QPS overage fee"
            }), " (queries per second)"]
          }), `
`]
        }), _jsx(_components.p, {
          children: "At the end of each month, Agora calculates:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "The total number of screenshots generated"
          }), `
`, _jsx(_components.li, {
            children: "The monthly peak QPS if it exceeds the free quota"
          }), `
`]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Billing formula:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M22.27 19.385H1.73A1.73 1.73 0 010 17.655V6.345a1.73 1.73 0 011.73-1.73h20.54A1.73 1.73 0 0124 6.345v11.308a1.73 1.73 0 01-1.73 1.731zM5.769 15.923v-4.5l2.308 2.885 2.307-2.885v4.5h2.308V8.078h-2.308l-2.307 2.885-2.308-2.885H3.46v7.847zM21.232 12h-2.309V8.077h-2.307V12h-2.308l3.461 4.039z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "Monthly fee = (Number of screenshots - free quota) × Screenshot unit price"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      + (Monthly peak QPS - free QPS) × QPS overage unit price"
                })
              })]
            })
          })
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Billing Type"
              }), _jsx(_components.th, {
                children: "Unit Price"
              }), _jsx(_components.th, {
                children: "Discount Policy"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Screenshot Fee"
              }), _jsx(_components.td, {
                children: "$0.30 per 10,000 images"
              }), _jsx(_components.td, {
                children: "First 10,000 images per month are free"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "QPS Overage Fee"
              }), _jsx(_components.td, {
                children: "$1.5 per QPS"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.p, {
                  children: "Includes 500 QPS per month:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: "≤ 500 QPS: No charge"
                    }), `
`]
                  }), `
`, _jsxs(_components.li, {
                    children: [`
`, _jsxs(_components.blockquote, {
                      children: [`
`, _jsx(_components.p, {
                        children: "500 QPS: Charged based on monthly peak QPS"
                      }), `
`]
                    }), `
`]
                  }), `
`]
                })]
              })]
            })]
          })]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Example 1:"
              }), `
A project generates `, _jsx(_components.strong, {
                children: "910,000 screenshots"
              }), " in one month. Peak QPS = ", _jsx(_components.strong, {
                children: "100"
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Screenshots: 910,000 - 10,000 (free) = 900,000 billable images"
              }), `
`, _jsxs(_components.li, {
                children: ["Screenshot fee: 900,000 ÷ 10,000 × $0.30 = ", _jsx(_components.strong, {
                  children: "$27.00"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["QPS fee: 100 ≤ 500 (free), so ", _jsx(_components.strong, {
                  children: "$0"
                })]
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.strong, {
                  children: "Total fee = $27.00"
                })
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Example 2:"
              }), `
A project generates `, _jsx(_components.strong, {
                children: "2.91 million screenshots"
              }), " in one month. Peak QPS = ", _jsx(_components.strong, {
                children: "600"
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Screenshots: 2,910,000 - 10,000 (free) = 2,900,000 billable images"
              }), `
`, _jsxs(_components.li, {
                children: ["Screenshot fee: 2,900,000 ÷ 10,000 × $0.30 = ", _jsx(_components.strong, {
                  children: "$87.00"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["QPS fee: (600 - 500) × $1.5 = ", _jsx(_components.strong, {
                  children: "$150.00"
                })]
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.strong, {
                  children: "Total fee = $237.00"
                })
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference-3",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_enablecontentinspect",
              children: _jsx(_components.code, {
                children: "enableContentInspect"
              })
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "local-screenshot-upload-dynamic-library-4",
          children: "local screenshot upload dynamic library"
        }), _jsxs(_components.p, {
          children: ["You can find details about the name of the local screenshot upload dynamic library and the increase in app size after integration in ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/optimize-and-operate/app-size-optimization",
            children: "App size optimization"
          }), "."]
        }), _jsx(_components.h3, {
          id: "http-status-codes-4",
          children: "HTTP status codes"
        }), _jsx(_components.p, {
          children: "The HTTP status codes for the application server responses are as follows:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Status Code"
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
                children: _jsx(_components.code, {
                  children: "200"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Successful request."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "201"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Successful request and creation of a new resource."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "206"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "No user streamed during the entire screenshot process, or some screenshot files were not uploaded to the third-party cloud storage."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "400"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Syntax error in the request (For example, parameter error), and the server cannot understand it."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "401"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Unauthorized (App ID or Customer Certificate mismatch)."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "404"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "The server cannot find the requested resource (webpage)."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "500"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Internal server error, unable to complete the request."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "504"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Internal server error. The server acting as a gateway or proxy did not receive a timely response from the upstream server."
              })]
            })]
          })]
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
          children: "This page shows you how to enable screenshot uploads on your app and handle screenshot upload callbacks."
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Local screenshot upload is a paid service. For billing details, refer to ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/reference/pricing",
                children: "Pricing"
              }), "."]
            })
          })
        }), _jsx(_components.h2, {
          id: "understand-the-tech-5",
          children: "Understand the tech"
        }), _jsxs(_components.p, {
          children: ["When you enable screenshot upload, you set the interval between screenshots. After each interval, RTC SDK takes a screenshot of the video stream sent by local users, and uploads the image to Agora SDRTN®. Agora SDRTN® uploads each screenshot to your third-party cloud storage and sends a callback notification to your server in the form of an ", _jsx(_components.code, {
            children: "HTTPS"
          }), " request."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Screenshot upload"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/screenshot-upload.svg",
            alt: "image"
          })
        }), _jsx(_components.h2, {
          id: "prerequisites-5",
          children: "Prerequisites"
        }), _jsx(_components.p, {
          children: "Before implementing the Agora local screenshot upload feature, take the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Activate local screenshot upload service"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["In ", _jsx(_components.a, {
                href: "https://console.agora.io",
                children: "Agora Console"
              }), ", select ", _jsx(_components.strong, {
                children: "RTC Services"
              }), " from the sidebar, then locate the ", _jsx(_components.strong, {
                children: "Video Screenshot Upload"
              }), " card and turn on its toggle. Select the settings icon on the card to open its configuration panel."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/console/enable-screenshot-upload.png",
                alt: "Enable screenshot upload"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Configure third-party cloud storage"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Select the settings icon on the ", _jsx(_components.strong, {
                children: "Video Screenshot Upload"
              }), " card to open its configuration panel."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/console/screenshot-upload-configuration.png",
                alt: "Screenshot upload config"
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "warning",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Once you turn on ", _jsx(_components.strong, {
                    children: "Enable Video Screenshot Upload"
                  }), ", you can't disable it."]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Currently, the Agora local screenshot upload service only supports Amazon S3 as the third-party cloud storage provider. If you want to use a different provider, ", _jsx(_components.a, {
                    href: "mailto:support@agora.io",
                    children: "contact"
                  }), " technical support."]
                })
              })
            }), `
`, _jsx(_components.p, {
              children: "Fill in the following information:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Storage"
                  }), ": The third-party cloud storage provider. Fixed to AWS."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Callback URL"
                  }), ": The server address to receive callback notifications of local screenshot upload results."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Endpoint"
                  }), ": Specify the access domain (Endpoint) of the bucket. See ", _jsx(_components.a, {
                    href: "https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region",
                    children: "AWS Official Documentation"
                  }), " for details."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Region"
                  }), ": The data center region setting for third-party cloud storage. See ", _jsx(_components.a, {
                    href: "https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region",
                    children: "AWS Official Documentation"
                  }), " for details."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Access key"
                  }), ": String type, the access key of the third-party cloud storage. Best practice is to provide a write-only access key."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Secret key"
                  }), ": String type, the secret key of the third-party cloud storage."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Bucket Name"
                  }), ": String type, the bucket name of the third-party cloud storage. The bucket name must comply with the naming rules of the corresponding third-party cloud storage service."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Filename Prefix"
                  }), ": (Optional) JSON Array, an array composed of multiple strings, indicating the storage location of screenshots in the third-party cloud storage. For example, if ", _jsx(_components.code, {
                    children: "fileNamePrefix"
                  }), " = ", _jsx(_components.code, {
                    children: '["directory1","directory2"]'
                  }), ", the prefix ", _jsx(_components.code, {
                    children: "directory1/directory2/"
                  }), " will be added to the screenshot filename, that is, ", _jsx(_components.code, {
                    children: "directory1/directory2/xxx.jpg"
                  }), ". The prefix length, including slashes, must not exceed 128 characters. The string should not contain symbols such as slashes, underscores, parentheses, and so on. The supported character set is as follows:"]
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "26 lowercase English letters a-z"
                  }), `
`, _jsx(_components.li, {
                    children: "26 uppercase English letters A-Z"
                  }), `
`, _jsx(_components.li, {
                    children: "10 digits 0-9"
                  }), `
`]
                }), `
`]
              }), `
`]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Sample configuration"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Storage: AWS"
              }), `
`, _jsxs(_components.li, {
                children: ["Callback URL: ", _jsx(_components.code, {
                  children: "https://webhook.site/2e75da2d-xxxx-xxxx-xxx-a0ef44a5259d"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Endpoint: ", _jsx(_components.code, {
                  children: "s3.cn-north-1.amazonaws.com.cn"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Region: ", _jsx(_components.code, {
                  children: "cn-north-1"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Access key: ", _jsx(_components.code, {
                  children: "12345678"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Secret key: ", _jsx(_components.code, {
                  children: "abcd123"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Bucket Name: ", _jsx(_components.code, {
                  children: "test-artifacts"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Filename Prefix: ", _jsx(_components.code, {
                  children: "test"
                })]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Integrate RTC SDK"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Integrate the RTC SDK (including the local screenshot upload dynamic library) into your project, join a channel, and publish a video stream. See ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/get-started-sdk",
                children: "SDK quickstart"
              }), " for details."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "implement-local-screenshot-upload-5",
          children: "Implement local screenshot upload"
        }), _jsx(_components.p, {
          children: "You enable screenshot upload in your Video Calling client and handle the notification callback from Agora on your callback server."
        }), _jsx(_components.h3, {
          id: "enable-screenshot-upload-5",
          children: "Enable screenshot upload"
        }), _jsxs(_components.p, {
          children: ["Call the ", _jsx(_components.code, {
            children: "enableContentInspect"
          }), " method to enable the local screenshot upload feature. After successfully enabling the feature, the SDK will capture screenshots at the specified frequency and upload them to the Agora cloud server. To implement this logic, refer to the following code:"]
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
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define ContentInspectModule Function Modules"
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
                  children: " modules"
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
                  children: " [{"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: " // Use Agora's own screenshot upload function"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " type: ContentInspectType.ContentInspectSupervision,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: " // The frequency of local screenshot upload."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " interval: "
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
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Once every 2 seconds"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}];"
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
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "enableContentInspect"
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: " // Enable local screenshot upload"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
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
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: " // Local screenshot upload configuration"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " {"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  modules: modules"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  moduleCount: modules."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "length"
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
                  children: " }"
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
          id: "http-notification-callback-5",
          children: "HTTP notification callback"
        }), _jsxs(_components.p, {
          children: ["After a screenshot is successfully uploaded to the Agora SDRTN®, Agora sends a message notification callback to your application server in the form of an ", _jsx(_components.code, {
            children: "HTTPS"
          }), " ", _jsx(_components.code, {
            children: "POST"
          }), " request. The data format is ", _jsx(_components.code, {
            children: "JSON"
          }), ", and the character encoding is ", _jsx(_components.code, {
            children: "UTF-8"
          }), "."]
        }), _jsxs(_components.p, {
          children: ["Upon receiving the message notification, your application server must respond with status code ", _jsx(_components.code, {
            children: "200"
          }), ". The expected response body format is ", _jsx(_components.code, {
            children: "JSON"
          }), ". In any of the following cases, the notification is considered to have failed:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "No response is received from your server within 5 seconds after sending the message notification."
          }), `
`, _jsxs(_components.li, {
            children: ["The ", _jsx(_components.code, {
              children: "HTTP"
            }), " status code of the response is not ", _jsx(_components.code, {
              children: "200"
            }), ", or the response body format is not ", _jsx(_components.code, {
              children: "JSON"
            }), "."]
          }), `
`]
        }), _jsx(_components.p, {
          children: "The Agora service immediately retries after the first notification failure, and sends the message three times in total."
        }), _jsx(_components.h4, {
          id: "request-header-4",
          children: "Request header"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Field Name"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "Content-Type"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "application/json;charset=utf-8"
                })
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "request-body-4",
          children: "Request body"
        }), _jsx(_components.p, {
          children: "The request body is a JSON Object, containing the following fields:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Field"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Type"
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
                children: _jsx(_components.code, {
                  children: "requestId"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Callback notification ID, identifying an event notification from the Agora business server."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "callbackParam"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "JSON Object"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Custom fields passed in the callback, currently includes the ", _jsx(_components.code, {
                  children: "cname"
                }), " field, representing the channel name."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "callbackData"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String data passed through by the SDK local screenshot upload module."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "checksum"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["MD5 value calculated from the parameters ", _jsx(_components.code, {
                  children: "callbackAddr"
                }), ", ", _jsx(_components.code, {
                  children: "code"
                }), ", ", _jsx(_components.code, {
                  children: "object"
                }), ", and ", _jsx(_components.code, {
                  children: "requestId"
                }), ". Used to verify whether this callback notification comes from the local screenshot upload service."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "object"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.p, {
                  children: ["Name of the screenshot file. The naming convention for this file is: ", _jsx(_components.code, {
                    children: "//___uid_s___uid_e__utc.jpg"
                  }), ". The meanings of the fields in the filename are as follows: ", _jsx(_components.code, {
                    children: ": Screenshot ID, a unique identifier for a screenshot."
                  }), ": Channel name to which the user being screenshotted belongs.", _jsx(_components.code, {
                    children: ": The user ID set when joining the channel."
                  }), ": File type, supports only ", _jsx(_components.code, {
                    children: "video"
                  }), ".``: Unix timestamp of this screenshot. UTC time, consists of year, month, day, hour, minute, second, and millisecond. For example, if ", _jsx(_components.code, {
                    children: "utc"
                  }), " is equal to ", _jsx(_components.code, {
                    children: "20190611073246073"
                  }), ", it represents the start time of this slice file as UTC June 11, 2019, 7:32", _jsx(_components.div, {}), ".073 AM."]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "code"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Number"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Status code of this screenshot. ", _jsx(_components.code, {
                  children: "200"
                }), " indicates that the screenshot is completed."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "msg"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Status of this screenshot. ", _jsx(_components.code, {
                  children: '"Supervise complete"'
                }), " indicates that the screenshot is completed."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "channelName"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Channel name to which the user being screenshotted belongs. Consistent with ", _jsx(_components.code, {
                  children: "object.cname"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "userId"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["User ID of the user being screenshotted. Consistent with ", _jsx(_components.code, {
                  children: "object.uid"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "timestamp"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Int"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Unix timestamp (milliseconds) of this screenshot. UTC time, consistent with ", _jsx(_components.code, {
                  children: "object.utc"
                }), "."]
              })]
            })]
          })]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Request Example"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "requestId"'
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
                  children: '"38f8e3cfdcXXXXXXXXX1ceba380d7e1a_1652693284_b5813fe2ae4fa5cdfe5abd8fef82526f"'
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
                  children: '  "callbackParam"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "cname"'
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
                  children: '"httpClient463224"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "callbackData"'
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
                  children: '""'
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
                  children: '  "checksum"'
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
                  children: '"75ee988XXXXXXc2ad4ec2aef58f178fd8"'
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
                  children: '  "object"'
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
                  children: '"test/20201216/38f8e3cfdc474cd56fc1ceba380d7e1a_httpClient463224__uid_s_91__uid_e_video_20200413081128672.jpg"'
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
                  children: '  "code"'
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
                  children: "200"
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
                  children: '  "msg"'
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
                  children: '"Supervise complete"'
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
                  children: '  "channelName"'
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
                  children: '"httpClient463224"'
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
                  children: '  "userId"'
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
                  children: '"91"'
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
                  children: '  "timestamp"'
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
                  children: "20190611073246070"
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
        }), _jsx(_components.h4, {
          id: "response-4",
          children: "Response"
        }), _jsx(_components.p, {
          children: "After receiving the message notification, your application server is expected to respond. The response package format is JSON. In any of the following cases, the Agora service considers the notification as failed:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "After sending a message notification, no response is received from your server within 5 seconds."
          }), `
`, _jsxs(_components.li, {
            children: ["The HTTP status code of the response is not ", _jsx(_components.code, {
              children: "200"
            }), ", or the response body format is not JSON."]
          }), `
`]
        }), _jsx(_components.p, {
          children: "The Agora service immediately retries and sends the message notification again after the first notification fails. It attempts to notify you three times in total."
        }), _jsx(_components.h2, {
          id: "reference-5",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "pricing-5",
          children: "Pricing"
        }), _jsx(_components.p, {
          children: "Agora charges for local screenshot upload based on two metrics:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.strong, {
              children: "Screenshot fee"
            })
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "QPS overage fee"
            }), " (queries per second)"]
          }), `
`]
        }), _jsx(_components.p, {
          children: "At the end of each month, Agora calculates:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "The total number of screenshots generated"
          }), `
`, _jsx(_components.li, {
            children: "The monthly peak QPS if it exceeds the free quota"
          }), `
`]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Billing formula:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M22.27 19.385H1.73A1.73 1.73 0 010 17.655V6.345a1.73 1.73 0 011.73-1.73h20.54A1.73 1.73 0 0124 6.345v11.308a1.73 1.73 0 01-1.73 1.731zM5.769 15.923v-4.5l2.308 2.885 2.307-2.885v4.5h2.308V8.078h-2.308l-2.307 2.885-2.308-2.885H3.46v7.847zM21.232 12h-2.309V8.077h-2.307V12h-2.308l3.461 4.039z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "Monthly fee = (Number of screenshots - free quota) × Screenshot unit price"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      + (Monthly peak QPS - free QPS) × QPS overage unit price"
                })
              })]
            })
          })
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Billing Type"
              }), _jsx(_components.th, {
                children: "Unit Price"
              }), _jsx(_components.th, {
                children: "Discount Policy"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Screenshot Fee"
              }), _jsx(_components.td, {
                children: "$0.30 per 10,000 images"
              }), _jsx(_components.td, {
                children: "First 10,000 images per month are free"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "QPS Overage Fee"
              }), _jsx(_components.td, {
                children: "$1.5 per QPS"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.p, {
                  children: "Includes 500 QPS per month:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: "≤ 500 QPS: No charge"
                    }), `
`]
                  }), `
`, _jsxs(_components.li, {
                    children: [`
`, _jsxs(_components.blockquote, {
                      children: [`
`, _jsx(_components.p, {
                        children: "500 QPS: Charged based on monthly peak QPS"
                      }), `
`]
                    }), `
`]
                  }), `
`]
                })]
              })]
            })]
          })]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Example 1:"
              }), `
A project generates `, _jsx(_components.strong, {
                children: "910,000 screenshots"
              }), " in one month. Peak QPS = ", _jsx(_components.strong, {
                children: "100"
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Screenshots: 910,000 - 10,000 (free) = 900,000 billable images"
              }), `
`, _jsxs(_components.li, {
                children: ["Screenshot fee: 900,000 ÷ 10,000 × $0.30 = ", _jsx(_components.strong, {
                  children: "$27.00"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["QPS fee: 100 ≤ 500 (free), so ", _jsx(_components.strong, {
                  children: "$0"
                })]
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.strong, {
                  children: "Total fee = $27.00"
                })
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Example 2:"
              }), `
A project generates `, _jsx(_components.strong, {
                children: "2.91 million screenshots"
              }), " in one month. Peak QPS = ", _jsx(_components.strong, {
                children: "600"
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Screenshots: 2,910,000 - 10,000 (free) = 2,900,000 billable images"
              }), `
`, _jsxs(_components.li, {
                children: ["Screenshot fee: 2,900,000 ÷ 10,000 × $0.30 = ", _jsx(_components.strong, {
                  children: "$87.00"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["QPS fee: (600 - 500) × $1.5 = ", _jsx(_components.strong, {
                  children: "$150.00"
                })]
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.strong, {
                  children: "Total fee = $237.00"
                })
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference-4",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_enablecontentinspect",
              children: _jsx(_components.code, {
                children: "enableContentInspect"
              })
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "local-screenshot-upload-dynamic-library-5",
          children: "local screenshot upload dynamic library"
        }), _jsxs(_components.p, {
          children: ["You can find details about the name of the local screenshot upload dynamic library and the increase in app size after integration in ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/optimize-and-operate/app-size-optimization",
            children: "App size optimization"
          }), "."]
        }), _jsx(_components.h3, {
          id: "http-status-codes-5",
          children: "HTTP status codes"
        }), _jsx(_components.p, {
          children: "The HTTP status codes for the application server responses are as follows:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Status Code"
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
                children: _jsx(_components.code, {
                  children: "200"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Successful request."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "201"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Successful request and creation of a new resource."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "206"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "No user streamed during the entire screenshot process, or some screenshot files were not uploaded to the third-party cloud storage."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "400"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Syntax error in the request (For example, parameter error), and the server cannot understand it."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "401"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Unauthorized (App ID or Customer Certificate mismatch)."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "404"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "The server cannot find the requested resource (webpage)."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "500"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Internal server error, unable to complete the request."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "504"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Internal server error. The server acting as a gateway or proxy did not receive a timely response from the upstream server."
              })]
            })]
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
          children: "This page shows you how to enable screenshot uploads on your app and handle screenshot upload callbacks."
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Local screenshot upload is a paid service. For billing details, refer to ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/reference/pricing",
                children: "Pricing"
              }), "."]
            })
          })
        }), _jsx(_components.h2, {
          id: "understand-the-tech-6",
          children: "Understand the tech"
        }), _jsxs(_components.p, {
          children: ["When you enable screenshot upload, you set the interval between screenshots. After each interval, RTC SDK takes a screenshot of the video stream sent by local users, and uploads the image to Agora SDRTN®. Agora SDRTN® uploads each screenshot to your third-party cloud storage and sends a callback notification to your server in the form of an ", _jsx(_components.code, {
            children: "HTTPS"
          }), " request."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Screenshot upload"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/screenshot-upload.svg",
            alt: "image"
          })
        }), _jsx(_components.h2, {
          id: "prerequisites-6",
          children: "Prerequisites"
        }), _jsx(_components.p, {
          children: "Before implementing the Agora local screenshot upload feature, take the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Activate local screenshot upload service"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["In ", _jsx(_components.a, {
                href: "https://console.agora.io",
                children: "Agora Console"
              }), ", select ", _jsx(_components.strong, {
                children: "RTC Services"
              }), " from the sidebar, then locate the ", _jsx(_components.strong, {
                children: "Video Screenshot Upload"
              }), " card and turn on its toggle. Select the settings icon on the card to open its configuration panel."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/console/enable-screenshot-upload.png",
                alt: "Enable screenshot upload"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Configure third-party cloud storage"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Select the settings icon on the ", _jsx(_components.strong, {
                children: "Video Screenshot Upload"
              }), " card to open its configuration panel."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/console/screenshot-upload-configuration.png",
                alt: "Screenshot upload config"
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "warning",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Once you turn on ", _jsx(_components.strong, {
                    children: "Enable Video Screenshot Upload"
                  }), ", you can't disable it."]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Currently, the Agora local screenshot upload service only supports Amazon S3 as the third-party cloud storage provider. If you want to use a different provider, ", _jsx(_components.a, {
                    href: "mailto:support@agora.io",
                    children: "contact"
                  }), " technical support."]
                })
              })
            }), `
`, _jsx(_components.p, {
              children: "Fill in the following information:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Storage"
                  }), ": The third-party cloud storage provider. Fixed to AWS."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Callback URL"
                  }), ": The server address to receive callback notifications of local screenshot upload results."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Endpoint"
                  }), ": Specify the access domain (Endpoint) of the bucket. See ", _jsx(_components.a, {
                    href: "https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region",
                    children: "AWS Official Documentation"
                  }), " for details."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Region"
                  }), ": The data center region setting for third-party cloud storage. See ", _jsx(_components.a, {
                    href: "https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region",
                    children: "AWS Official Documentation"
                  }), " for details."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Access key"
                  }), ": String type, the access key of the third-party cloud storage. Best practice is to provide a write-only access key."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Secret key"
                  }), ": String type, the secret key of the third-party cloud storage."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Bucket Name"
                  }), ": String type, the bucket name of the third-party cloud storage. The bucket name must comply with the naming rules of the corresponding third-party cloud storage service."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Filename Prefix"
                  }), ": (Optional) JSON Array, an array composed of multiple strings, indicating the storage location of screenshots in the third-party cloud storage. For example, if ", _jsx(_components.code, {
                    children: "fileNamePrefix"
                  }), " = ", _jsx(_components.code, {
                    children: '["directory1","directory2"]'
                  }), ", the prefix ", _jsx(_components.code, {
                    children: "directory1/directory2/"
                  }), " will be added to the screenshot filename, that is, ", _jsx(_components.code, {
                    children: "directory1/directory2/xxx.jpg"
                  }), ". The prefix length, including slashes, must not exceed 128 characters. The string should not contain symbols such as slashes, underscores, parentheses, and so on. The supported character set is as follows:"]
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "26 lowercase English letters a-z"
                  }), `
`, _jsx(_components.li, {
                    children: "26 uppercase English letters A-Z"
                  }), `
`, _jsx(_components.li, {
                    children: "10 digits 0-9"
                  }), `
`]
                }), `
`]
              }), `
`]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Sample configuration"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Storage: AWS"
              }), `
`, _jsxs(_components.li, {
                children: ["Callback URL: ", _jsx(_components.code, {
                  children: "https://webhook.site/2e75da2d-xxxx-xxxx-xxx-a0ef44a5259d"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Endpoint: ", _jsx(_components.code, {
                  children: "s3.cn-north-1.amazonaws.com.cn"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Region: ", _jsx(_components.code, {
                  children: "cn-north-1"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Access key: ", _jsx(_components.code, {
                  children: "12345678"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Secret key: ", _jsx(_components.code, {
                  children: "abcd123"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Bucket Name: ", _jsx(_components.code, {
                  children: "test-artifacts"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Filename Prefix: ", _jsx(_components.code, {
                  children: "test"
                })]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Integrate RTC SDK"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Integrate the RTC SDK (including the local screenshot upload dynamic library) into your project, join a channel, and publish a video stream. See ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/get-started-sdk",
                children: "SDK quickstart"
              }), " for details."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "implement-local-screenshot-upload-6",
          children: "Implement local screenshot upload"
        }), _jsx(_components.p, {
          children: "You enable screenshot upload in your Video Calling client and handle the notification callback from Agora on your callback server."
        }), _jsx(_components.h3, {
          id: "enable-screenshot-upload-6",
          children: "Enable screenshot upload"
        }), _jsxs(_components.p, {
          children: ["Call the ", _jsx(_components.code, {
            children: "enableContentInspect"
          }), " method to enable the local screenshot upload feature. After successfully enabling the feature, the SDK will capture screenshots at the specified frequency and upload them to the Agora cloud server. To implement this logic, refer to the following code:"]
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
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define ContentInspectModule Function Modules"
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
                  children: " modules"
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
                  children: " [{"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: " // Use Agora's own screenshot upload function"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " type: ContentInspectType.ContentInspectSupervision,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: " // The frequency of local screenshot upload."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " interval: "
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
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Once every 2 seconds"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}];"
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
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "enableContentInspect"
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: " // Enable local screenshot upload"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
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
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: " // Local screenshot upload configuration"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " {"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  modules: modules"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  moduleCount: modules."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "length"
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
                  children: " }"
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
          id: "http-notification-callback-6",
          children: "HTTP notification callback"
        }), _jsxs(_components.p, {
          children: ["After a screenshot is successfully uploaded to the Agora SDRTN®, Agora sends a message notification callback to your application server in the form of an ", _jsx(_components.code, {
            children: "HTTPS"
          }), " ", _jsx(_components.code, {
            children: "POST"
          }), " request. The data format is ", _jsx(_components.code, {
            children: "JSON"
          }), ", and the character encoding is ", _jsx(_components.code, {
            children: "UTF-8"
          }), "."]
        }), _jsxs(_components.p, {
          children: ["Upon receiving the message notification, your application server must respond with status code ", _jsx(_components.code, {
            children: "200"
          }), ". The expected response body format is ", _jsx(_components.code, {
            children: "JSON"
          }), ". In any of the following cases, the notification is considered to have failed:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "No response is received from your server within 5 seconds after sending the message notification."
          }), `
`, _jsxs(_components.li, {
            children: ["The ", _jsx(_components.code, {
              children: "HTTP"
            }), " status code of the response is not ", _jsx(_components.code, {
              children: "200"
            }), ", or the response body format is not ", _jsx(_components.code, {
              children: "JSON"
            }), "."]
          }), `
`]
        }), _jsx(_components.p, {
          children: "The Agora service immediately retries after the first notification failure, and sends the message three times in total."
        }), _jsx(_components.h4, {
          id: "request-header-5",
          children: "Request header"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Field Name"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "Content-Type"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "application/json;charset=utf-8"
                })
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "request-body-5",
          children: "Request body"
        }), _jsx(_components.p, {
          children: "The request body is a JSON Object, containing the following fields:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Field"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Type"
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
                children: _jsx(_components.code, {
                  children: "requestId"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Callback notification ID, identifying an event notification from the Agora business server."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "callbackParam"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "JSON Object"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Custom fields passed in the callback, currently includes the ", _jsx(_components.code, {
                  children: "cname"
                }), " field, representing the channel name."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "callbackData"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String data passed through by the SDK local screenshot upload module."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "checksum"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["MD5 value calculated from the parameters ", _jsx(_components.code, {
                  children: "callbackAddr"
                }), ", ", _jsx(_components.code, {
                  children: "code"
                }), ", ", _jsx(_components.code, {
                  children: "object"
                }), ", and ", _jsx(_components.code, {
                  children: "requestId"
                }), ". Used to verify whether this callback notification comes from the local screenshot upload service."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "object"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.p, {
                  children: ["Name of the screenshot file. The naming convention for this file is: ", _jsx(_components.code, {
                    children: "//___uid_s___uid_e__utc.jpg"
                  }), ". The meanings of the fields in the filename are as follows: ", _jsx(_components.code, {
                    children: ": Screenshot ID, a unique identifier for a screenshot."
                  }), ": Channel name to which the user being screenshotted belongs.", _jsx(_components.code, {
                    children: ": The user ID set when joining the channel."
                  }), ": File type, supports only ", _jsx(_components.code, {
                    children: "video"
                  }), ".``: Unix timestamp of this screenshot. UTC time, consists of year, month, day, hour, minute, second, and millisecond. For example, if ", _jsx(_components.code, {
                    children: "utc"
                  }), " is equal to ", _jsx(_components.code, {
                    children: "20190611073246073"
                  }), ", it represents the start time of this slice file as UTC June 11, 2019, 7:32", _jsx(_components.div, {}), ".073 AM."]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "code"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Number"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Status code of this screenshot. ", _jsx(_components.code, {
                  children: "200"
                }), " indicates that the screenshot is completed."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "msg"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Status of this screenshot. ", _jsx(_components.code, {
                  children: '"Supervise complete"'
                }), " indicates that the screenshot is completed."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "channelName"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Channel name to which the user being screenshotted belongs. Consistent with ", _jsx(_components.code, {
                  children: "object.cname"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "userId"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["User ID of the user being screenshotted. Consistent with ", _jsx(_components.code, {
                  children: "object.uid"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "timestamp"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Int"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Unix timestamp (milliseconds) of this screenshot. UTC time, consistent with ", _jsx(_components.code, {
                  children: "object.utc"
                }), "."]
              })]
            })]
          })]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Request Example"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "requestId"'
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
                  children: '"38f8e3cfdcXXXXXXXXX1ceba380d7e1a_1652693284_b5813fe2ae4fa5cdfe5abd8fef82526f"'
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
                  children: '  "callbackParam"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "cname"'
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
                  children: '"httpClient463224"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "callbackData"'
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
                  children: '""'
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
                  children: '  "checksum"'
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
                  children: '"75ee988XXXXXXc2ad4ec2aef58f178fd8"'
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
                  children: '  "object"'
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
                  children: '"test/20201216/38f8e3cfdc474cd56fc1ceba380d7e1a_httpClient463224__uid_s_91__uid_e_video_20200413081128672.jpg"'
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
                  children: '  "code"'
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
                  children: "200"
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
                  children: '  "msg"'
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
                  children: '"Supervise complete"'
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
                  children: '  "channelName"'
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
                  children: '"httpClient463224"'
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
                  children: '  "userId"'
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
                  children: '"91"'
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
                  children: '  "timestamp"'
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
                  children: "20190611073246070"
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
        }), _jsx(_components.h4, {
          id: "response-5",
          children: "Response"
        }), _jsx(_components.p, {
          children: "After receiving the message notification, your application server is expected to respond. The response package format is JSON. In any of the following cases, the Agora service considers the notification as failed:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "After sending a message notification, no response is received from your server within 5 seconds."
          }), `
`, _jsxs(_components.li, {
            children: ["The HTTP status code of the response is not ", _jsx(_components.code, {
              children: "200"
            }), ", or the response body format is not JSON."]
          }), `
`]
        }), _jsx(_components.p, {
          children: "The Agora service immediately retries and sends the message notification again after the first notification fails. It attempts to notify you three times in total."
        }), _jsx(_components.h2, {
          id: "reference-6",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "pricing-6",
          children: "Pricing"
        }), _jsx(_components.p, {
          children: "Agora charges for local screenshot upload based on two metrics:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.strong, {
              children: "Screenshot fee"
            })
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "QPS overage fee"
            }), " (queries per second)"]
          }), `
`]
        }), _jsx(_components.p, {
          children: "At the end of each month, Agora calculates:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "The total number of screenshots generated"
          }), `
`, _jsx(_components.li, {
            children: "The monthly peak QPS if it exceeds the free quota"
          }), `
`]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Billing formula:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M22.27 19.385H1.73A1.73 1.73 0 010 17.655V6.345a1.73 1.73 0 011.73-1.73h20.54A1.73 1.73 0 0124 6.345v11.308a1.73 1.73 0 01-1.73 1.731zM5.769 15.923v-4.5l2.308 2.885 2.307-2.885v4.5h2.308V8.078h-2.308l-2.307 2.885-2.308-2.885H3.46v7.847zM21.232 12h-2.309V8.077h-2.307V12h-2.308l3.461 4.039z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "Monthly fee = (Number of screenshots - free quota) × Screenshot unit price"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      + (Monthly peak QPS - free QPS) × QPS overage unit price"
                })
              })]
            })
          })
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Billing Type"
              }), _jsx(_components.th, {
                children: "Unit Price"
              }), _jsx(_components.th, {
                children: "Discount Policy"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Screenshot Fee"
              }), _jsx(_components.td, {
                children: "$0.30 per 10,000 images"
              }), _jsx(_components.td, {
                children: "First 10,000 images per month are free"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "QPS Overage Fee"
              }), _jsx(_components.td, {
                children: "$1.5 per QPS"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.p, {
                  children: "Includes 500 QPS per month:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: "≤ 500 QPS: No charge"
                    }), `
`]
                  }), `
`, _jsxs(_components.li, {
                    children: [`
`, _jsxs(_components.blockquote, {
                      children: [`
`, _jsx(_components.p, {
                        children: "500 QPS: Charged based on monthly peak QPS"
                      }), `
`]
                    }), `
`]
                  }), `
`]
                })]
              })]
            })]
          })]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Example 1:"
              }), `
A project generates `, _jsx(_components.strong, {
                children: "910,000 screenshots"
              }), " in one month. Peak QPS = ", _jsx(_components.strong, {
                children: "100"
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Screenshots: 910,000 - 10,000 (free) = 900,000 billable images"
              }), `
`, _jsxs(_components.li, {
                children: ["Screenshot fee: 900,000 ÷ 10,000 × $0.30 = ", _jsx(_components.strong, {
                  children: "$27.00"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["QPS fee: 100 ≤ 500 (free), so ", _jsx(_components.strong, {
                  children: "$0"
                })]
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.strong, {
                  children: "Total fee = $27.00"
                })
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Example 2:"
              }), `
A project generates `, _jsx(_components.strong, {
                children: "2.91 million screenshots"
              }), " in one month. Peak QPS = ", _jsx(_components.strong, {
                children: "600"
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Screenshots: 2,910,000 - 10,000 (free) = 2,900,000 billable images"
              }), `
`, _jsxs(_components.li, {
                children: ["Screenshot fee: 2,900,000 ÷ 10,000 × $0.30 = ", _jsx(_components.strong, {
                  children: "$87.00"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["QPS fee: (600 - 500) × $1.5 = ", _jsx(_components.strong, {
                  children: "$150.00"
                })]
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.strong, {
                  children: "Total fee = $237.00"
                })
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference-5",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_enablecontentinspect",
              children: _jsx(_components.code, {
                children: "enableContentInspect"
              })
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "local-screenshot-upload-dynamic-library-6",
          children: "local screenshot upload dynamic library"
        }), _jsxs(_components.p, {
          children: ["You can find details about the name of the local screenshot upload dynamic library and the increase in app size after integration in ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/optimize-and-operate/app-size-optimization",
            children: "App size optimization"
          }), "."]
        }), _jsx(_components.h3, {
          id: "http-status-codes-6",
          children: "HTTP status codes"
        }), _jsx(_components.p, {
          children: "The HTTP status codes for the application server responses are as follows:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Status Code"
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
                children: _jsx(_components.code, {
                  children: "200"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Successful request."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "201"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Successful request and creation of a new resource."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "206"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "No user streamed during the entire screenshot process, or some screenshot files were not uploaded to the third-party cloud storage."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "400"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Syntax error in the request (For example, parameter error), and the server cannot understand it."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "401"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Unauthorized (App ID or Customer Certificate mismatch)."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "404"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "The server cannot find the requested resource (webpage)."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "500"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Internal server error, unable to complete the request."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "504"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Internal server error. The server acting as a gateway or proxy did not receive a timely response from the upstream server."
              })]
            })]
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
          children: "This page shows you how to enable screenshot uploads on your game and handle screenshot upload callbacks."
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Local screenshot upload is a paid service. For billing details, refer to ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/reference/pricing",
                children: "Pricing"
              }), "."]
            })
          })
        }), _jsx(_components.h2, {
          id: "understand-the-tech-7",
          children: "Understand the tech"
        }), _jsxs(_components.p, {
          children: ["When you enable screenshot upload, you set the interval between screenshots. After each interval, RTC SDK takes a screenshot of the video stream sent by local users, and uploads the image to Agora SDRTN®. Agora SDRTN® uploads each screenshot to your third-party cloud storage and sends a callback notification to your server in the form of an ", _jsx(_components.code, {
            children: "HTTPS"
          }), " request."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Screenshot upload"
          })
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/screenshot-upload.svg",
            alt: "image"
          })
        }), _jsx(_components.h2, {
          id: "prerequisites-7",
          children: "Prerequisites"
        }), _jsx(_components.p, {
          children: "Before implementing the Agora local screenshot upload feature, take the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Activate local screenshot upload service"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["In ", _jsx(_components.a, {
                href: "https://console.agora.io",
                children: "Agora Console"
              }), ", select ", _jsx(_components.strong, {
                children: "RTC Services"
              }), " from the sidebar, then locate the ", _jsx(_components.strong, {
                children: "Video Screenshot Upload"
              }), " card and turn on its toggle. Select the settings icon on the card to open its configuration panel."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/console/enable-screenshot-upload.png",
                alt: "Enable screenshot upload"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Configure third-party cloud storage"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Select the settings icon on the ", _jsx(_components.strong, {
                children: "Video Screenshot Upload"
              }), " card to open its configuration panel."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/console/screenshot-upload-configuration.png",
                alt: "Screenshot upload config"
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "warning",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Once you turn on ", _jsx(_components.strong, {
                    children: "Enable Video Screenshot Upload"
                  }), ", you can't disable it."]
                })
              })
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Currently, the Agora local screenshot upload service only supports Amazon S3 as the third-party cloud storage provider. If you want to use a different provider, ", _jsx(_components.a, {
                    href: "mailto:support@agora.io",
                    children: "contact"
                  }), " technical support."]
                })
              })
            }), `
`, _jsx(_components.p, {
              children: "Fill in the following information:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Storage"
                  }), ": The third-party cloud storage provider. Fixed to AWS."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Callback URL"
                  }), ": The server address to receive callback notifications of local screenshot upload results."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Endpoint"
                  }), ": Specify the access domain (Endpoint) of the bucket. See ", _jsx(_components.a, {
                    href: "https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region",
                    children: "AWS Official Documentation"
                  }), " for details."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Region"
                  }), ": The data center region setting for third-party cloud storage. See ", _jsx(_components.a, {
                    href: "https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region",
                    children: "AWS Official Documentation"
                  }), " for details."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Access key"
                  }), ": String type, the access key of the third-party cloud storage. Best practice is to provide a write-only access key."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Secret key"
                  }), ": String type, the secret key of the third-party cloud storage."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Bucket Name"
                  }), ": String type, the bucket name of the third-party cloud storage. The bucket name must comply with the naming rules of the corresponding third-party cloud storage service."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.strong, {
                    children: "Filename Prefix"
                  }), ": (Optional) JSON Array, an array composed of multiple strings, indicating the storage location of screenshots in the third-party cloud storage. For example, if ", _jsx(_components.code, {
                    children: "fileNamePrefix"
                  }), " = ", _jsx(_components.code, {
                    children: '["directory1","directory2"]'
                  }), ", the prefix ", _jsx(_components.code, {
                    children: "directory1/directory2/"
                  }), " will be added to the screenshot filename, that is, ", _jsx(_components.code, {
                    children: "directory1/directory2/xxx.jpg"
                  }), ". The prefix length, including slashes, must not exceed 128 characters. The string should not contain symbols such as slashes, underscores, parentheses, and so on. The supported character set is as follows:"]
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "26 lowercase English letters a-z"
                  }), `
`, _jsx(_components.li, {
                    children: "26 uppercase English letters A-Z"
                  }), `
`, _jsx(_components.li, {
                    children: "10 digits 0-9"
                  }), `
`]
                }), `
`]
              }), `
`]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Sample configuration"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Storage: AWS"
              }), `
`, _jsxs(_components.li, {
                children: ["Callback URL: ", _jsx(_components.code, {
                  children: "https://webhook.site/2e75da2d-xxxx-xxxx-xxx-a0ef44a5259d"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Endpoint: ", _jsx(_components.code, {
                  children: "s3.cn-north-1.amazonaws.com.cn"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Region: ", _jsx(_components.code, {
                  children: "cn-north-1"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Access key: ", _jsx(_components.code, {
                  children: "12345678"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Secret key: ", _jsx(_components.code, {
                  children: "abcd123"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Bucket Name: ", _jsx(_components.code, {
                  children: "test-artifacts"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["Filename Prefix: ", _jsx(_components.code, {
                  children: "test"
                })]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Integrate RTC SDK"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["Integrate the RTC SDK (including the local screenshot upload dynamic library) into your project, join a channel, and publish a video stream. See ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/get-started-sdk",
                children: "SDK quickstart"
              }), " for details."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "implement-local-screenshot-upload-7",
          children: "Implement local screenshot upload"
        }), _jsx(_components.p, {
          children: "You enable screenshot upload in your Video Calling client and handle the notification callback from Agora on your callback server."
        }), _jsx(_components.h3, {
          id: "enable-screenshot-upload-7",
          children: "Enable screenshot upload"
        }), _jsxs(_components.p, {
          children: ["Call the ", _jsx(_components.code, {
            children: "enableContentInspect"
          }), " method to enable the local screenshot upload feature. After successfully enabling the feature, the SDK will capture screenshots at the specified frequency and upload them to the Agora cloud server. To implement this logic, refer to the following code:"]
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
                  children: " OnStartButtonClick"
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
                  children: "  var"
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
                  children: " ContentInspectConfig"
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
                  children: "  config.modules "
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
                  children: " ContentInspectModule"
                }), _jsx(_components.span, {
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
                  children: "1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "];"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // The type of the feature module is local screenshot upload"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  config.modules["
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
                  children: "] "
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
                  children: " ContentInspectModule"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    type "
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
                  children: " CONTENT_INSPECT_TYPE.CONTENT_INSPECT_SUPERVISION,"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // The frequency of local screenshot upload"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    interval "
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
                  children: " 2"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: " // Once every 2 seconds"
                })]
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
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  config.moduleCount "
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  var nRet "
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
                  children: "EnableContentInspect"
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
                  children: ", config);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  this"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".Log."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "UpdateLog"
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
                  children: '"StartContentInspect: "'
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
                  children: " nRet);"
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
          id: "http-notification-callback-7",
          children: "HTTP notification callback"
        }), _jsxs(_components.p, {
          children: ["After a screenshot is successfully uploaded to the Agora SDRTN®, Agora sends a message notification callback to your application server in the form of an ", _jsx(_components.code, {
            children: "HTTPS"
          }), " ", _jsx(_components.code, {
            children: "POST"
          }), " request. The data format is ", _jsx(_components.code, {
            children: "JSON"
          }), ", and the character encoding is ", _jsx(_components.code, {
            children: "UTF-8"
          }), "."]
        }), _jsxs(_components.p, {
          children: ["Upon receiving the message notification, your application server must respond with status code ", _jsx(_components.code, {
            children: "200"
          }), ". The expected response body format is ", _jsx(_components.code, {
            children: "JSON"
          }), ". In any of the following cases, the notification is considered to have failed:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "No response is received from your server within 5 seconds after sending the message notification."
          }), `
`, _jsxs(_components.li, {
            children: ["The ", _jsx(_components.code, {
              children: "HTTP"
            }), " status code of the response is not ", _jsx(_components.code, {
              children: "200"
            }), ", or the response body format is not ", _jsx(_components.code, {
              children: "JSON"
            }), "."]
          }), `
`]
        }), _jsx(_components.p, {
          children: "The Agora service immediately retries after the first notification failure, and sends the message three times in total."
        }), _jsx(_components.h4, {
          id: "request-header-6",
          children: "Request header"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Field Name"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "Content-Type"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "application/json;charset=utf-8"
                })
              })]
            })
          })]
        }), _jsx(_components.h4, {
          id: "request-body-6",
          children: "Request body"
        }), _jsx(_components.p, {
          children: "The request body is a JSON Object, containing the following fields:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Field"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Type"
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
                children: _jsx(_components.code, {
                  children: "requestId"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Callback notification ID, identifying an event notification from the Agora business server."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "callbackParam"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "JSON Object"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Custom fields passed in the callback, currently includes the ", _jsx(_components.code, {
                  children: "cname"
                }), " field, representing the channel name."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "callbackData"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String data passed through by the SDK local screenshot upload module."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "checksum"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["MD5 value calculated from the parameters ", _jsx(_components.code, {
                  children: "callbackAddr"
                }), ", ", _jsx(_components.code, {
                  children: "code"
                }), ", ", _jsx(_components.code, {
                  children: "object"
                }), ", and ", _jsx(_components.code, {
                  children: "requestId"
                }), ". Used to verify whether this callback notification comes from the local screenshot upload service."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "object"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsxs(_components.p, {
                  children: ["Name of the screenshot file. The naming convention for this file is: ", _jsx(_components.code, {
                    children: "//___uid_s___uid_e__utc.jpg"
                  }), ". The meanings of the fields in the filename are as follows: ", _jsx(_components.code, {
                    children: ": Screenshot ID, a unique identifier for a screenshot."
                  }), ": Channel name to which the user being screenshotted belongs.", _jsx(_components.code, {
                    children: ": The user ID set when joining the channel."
                  }), ": File type, supports only ", _jsx(_components.code, {
                    children: "video"
                  }), ".``: Unix timestamp of this screenshot. UTC time, consists of year, month, day, hour, minute, second, and millisecond. For example, if ", _jsx(_components.code, {
                    children: "utc"
                  }), " is equal to ", _jsx(_components.code, {
                    children: "20190611073246073"
                  }), ", it represents the start time of this slice file as UTC June 11, 2019, 7:32", _jsx(_components.div, {}), ".073 AM."]
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "code"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Number"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Status code of this screenshot. ", _jsx(_components.code, {
                  children: "200"
                }), " indicates that the screenshot is completed."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "msg"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Status of this screenshot. ", _jsx(_components.code, {
                  children: '"Supervise complete"'
                }), " indicates that the screenshot is completed."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "channelName"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Channel name to which the user being screenshotted belongs. Consistent with ", _jsx(_components.code, {
                  children: "object.cname"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "userId"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["User ID of the user being screenshotted. Consistent with ", _jsx(_components.code, {
                  children: "object.uid"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "timestamp"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Int"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Unix timestamp (milliseconds) of this screenshot. UTC time, consistent with ", _jsx(_components.code, {
                  children: "object.utc"
                }), "."]
              })]
            })]
          })]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Request Example"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "requestId"'
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
                  children: '"38f8e3cfdcXXXXXXXXX1ceba380d7e1a_1652693284_b5813fe2ae4fa5cdfe5abd8fef82526f"'
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
                  children: '  "callbackParam"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "cname"'
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
                  children: '"httpClient463224"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "callbackData"'
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
                  children: '""'
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
                  children: '  "checksum"'
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
                  children: '"75ee988XXXXXXc2ad4ec2aef58f178fd8"'
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
                  children: '  "object"'
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
                  children: '"test/20201216/38f8e3cfdc474cd56fc1ceba380d7e1a_httpClient463224__uid_s_91__uid_e_video_20200413081128672.jpg"'
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
                  children: '  "code"'
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
                  children: "200"
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
                  children: '  "msg"'
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
                  children: '"Supervise complete"'
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
                  children: '  "channelName"'
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
                  children: '"httpClient463224"'
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
                  children: '  "userId"'
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
                  children: '"91"'
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
                  children: '  "timestamp"'
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
                  children: "20190611073246070"
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
        }), _jsx(_components.h4, {
          id: "response-6",
          children: "Response"
        }), _jsx(_components.p, {
          children: "After receiving the message notification, your application server is expected to respond. The response package format is JSON. In any of the following cases, the Agora service considers the notification as failed:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "After sending a message notification, no response is received from your server within 5 seconds."
          }), `
`, _jsxs(_components.li, {
            children: ["The HTTP status code of the response is not ", _jsx(_components.code, {
              children: "200"
            }), ", or the response body format is not JSON."]
          }), `
`]
        }), _jsx(_components.p, {
          children: "The Agora service immediately retries and sends the message notification again after the first notification fails. It attempts to notify you three times in total."
        }), _jsx(_components.h2, {
          id: "reference-7",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "pricing-7",
          children: "Pricing"
        }), _jsx(_components.p, {
          children: "Agora charges for local screenshot upload based on two metrics:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.strong, {
              children: "Screenshot fee"
            })
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "QPS overage fee"
            }), " (queries per second)"]
          }), `
`]
        }), _jsx(_components.p, {
          children: "At the end of each month, Agora calculates:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "The total number of screenshots generated"
          }), `
`, _jsx(_components.li, {
            children: "The monthly peak QPS if it exceeds the free quota"
          }), `
`]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Billing formula:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M22.27 19.385H1.73A1.73 1.73 0 010 17.655V6.345a1.73 1.73 0 011.73-1.73h20.54A1.73 1.73 0 0124 6.345v11.308a1.73 1.73 0 01-1.73 1.731zM5.769 15.923v-4.5l2.308 2.885 2.307-2.885v4.5h2.308V8.078h-2.308l-2.307 2.885-2.308-2.885H3.46v7.847zM21.232 12h-2.309V8.077h-2.307V12h-2.308l3.461 4.039z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "Monthly fee = (Number of screenshots - free quota) × Screenshot unit price"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      + (Monthly peak QPS - free QPS) × QPS overage unit price"
                })
              })]
            })
          })
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Billing Type"
              }), _jsx(_components.th, {
                children: "Unit Price"
              }), _jsx(_components.th, {
                children: "Discount Policy"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Screenshot Fee"
              }), _jsx(_components.td, {
                children: "$0.30 per 10,000 images"
              }), _jsx(_components.td, {
                children: "First 10,000 images per month are free"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "QPS Overage Fee"
              }), _jsx(_components.td, {
                children: "$1.5 per QPS"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.p, {
                  children: "Includes 500 QPS per month:"
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: "≤ 500 QPS: No charge"
                    }), `
`]
                  }), `
`, _jsxs(_components.li, {
                    children: [`
`, _jsxs(_components.blockquote, {
                      children: [`
`, _jsx(_components.p, {
                        children: "500 QPS: Charged based on monthly peak QPS"
                      }), `
`]
                    }), `
`]
                  }), `
`]
                })]
              })]
            })]
          })]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Example 1:"
              }), `
A project generates `, _jsx(_components.strong, {
                children: "910,000 screenshots"
              }), " in one month. Peak QPS = ", _jsx(_components.strong, {
                children: "100"
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Screenshots: 910,000 - 10,000 (free) = 900,000 billable images"
              }), `
`, _jsxs(_components.li, {
                children: ["Screenshot fee: 900,000 ÷ 10,000 × $0.30 = ", _jsx(_components.strong, {
                  children: "$27.00"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["QPS fee: 100 ≤ 500 (free), so ", _jsx(_components.strong, {
                  children: "$0"
                })]
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.strong, {
                  children: "Total fee = $27.00"
                })
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Example 2:"
              }), `
A project generates `, _jsx(_components.strong, {
                children: "2.91 million screenshots"
              }), " in one month. Peak QPS = ", _jsx(_components.strong, {
                children: "600"
              })]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Screenshots: 2,910,000 - 10,000 (free) = 2,900,000 billable images"
              }), `
`, _jsxs(_components.li, {
                children: ["Screenshot fee: 2,900,000 ÷ 10,000 × $0.30 = ", _jsx(_components.strong, {
                  children: "$87.00"
                })]
              }), `
`, _jsxs(_components.li, {
                children: ["QPS fee: (600 - 500) × $1.5 = ", _jsx(_components.strong, {
                  children: "$150.00"
                })]
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.strong, {
                  children: "Total fee = $237.00"
                })
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference-6",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_enablecontentinspect",
              children: _jsx(_components.code, {
                children: "EnableContentInspect"
              })
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "local-screenshot-upload-dynamic-library-7",
          children: "local screenshot upload dynamic library"
        }), _jsxs(_components.p, {
          children: ["You can find details about the name of the local screenshot upload dynamic library and the increase in app size after integration in ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/optimize-and-operate/app-size-optimization",
            children: "App size optimization"
          }), "."]
        }), _jsx(_components.h3, {
          id: "http-status-codes-7",
          children: "HTTP status codes"
        }), _jsx(_components.p, {
          children: "The HTTP status codes for the application server responses are as follows:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Status Code"
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
                children: _jsx(_components.code, {
                  children: "200"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Successful request."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "201"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Successful request and creation of a new resource."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "206"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "No user streamed during the entire screenshot process, or some screenshot files were not uploaded to the third-party cloud storage."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "400"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Syntax error in the request (For example, parameter error), and the server cannot understand it."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "401"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Unauthorized (App ID or Customer Certificate mismatch)."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "404"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "The server cannot find the requested resource (webpage)."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "500"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Internal server error, unable to complete the request."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "504"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Internal server error. The server acting as a gateway or proxy did not receive a timely response from the upstream server."
              })]
            })]
          })]
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
