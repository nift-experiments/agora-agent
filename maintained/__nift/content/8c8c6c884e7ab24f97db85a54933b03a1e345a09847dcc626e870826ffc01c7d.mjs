import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "REST quickstart",
  description: "Start cloud recording, query cloud recording status, and stop cloud recording by sending a RESTful API request."
};
export let _markdown = `

Cloud Recording enables you to record and store real-time audio and video streams from channels. To implement Cloud Recording, you set up a self-hosted backend that interacts with Agora servers to manage recording tasks. This guide introduces the essential Cloud Recording RESTful APIs you use to manage the recording process.

<CalloutContainer type="info">
  <CalloutDescription>
    The command-line examples in this guide are for demonstration purposes only. Do not use them directly in a production environment. Implement RESTful API requests through your application server or use Agora's [Go backend middleware](https://github.com/AgoraIO-Community/agora-go-backend-middleware). For details, see [Quickstart using middleware](/en/realtime-media/cloud-recording/middleware-quickstart)
  </CalloutDescription>
</CalloutContainer>

## Understand the tech [#understand-the-tech]

The basic process of implementing Cloud Recording is as follows:
![](https://assets-docs.agora.io/images/cloud-recording/cloud-recording-tech.svg)

1. Get a resource ID

   Before starting a cloud recording, call the [\`acquire\`](#acquire) method to obtain a cloud recording resource ID. After calling this method successfully, you get a resource ID in the response body.

2. Start cloud recording

   Call the [\`start\`](#start) method to join the channel and start a cloud recording. After calling this method successfully, you get a recording ID from the response body to identify the current recording process.

3. Query the recording status

   Call the [\`query\`](#query) method to check the recording status during the recording.

4. Stop cloud recording

   Call the [\`stop\`](#stop) method to stop the cloud recording.

5. Upload the recording file

   After the recording ends, the cloud recording service uploads the recording file to the [third-party cloud storage](/en/api-reference/api-ref/cloud-recording#storageconfig) you specify.

## Prerequisites [#prerequisites]

To implement Cloud Recording, ensure that you have:

* A valid Agora account and project. Obtain the following parameters from [Agora Console](https://console.agora.io):
  * The App ID and App certificate for your project. See [Get Started with Agora](/en/introduction/account#get-the-app-id-and-app-certificate)
  * A valid temporary token
  * Customer ID and Customer key for RESTful API. See [Authenticate REST calls](/en/api-reference/api-ref/cloud-recording/authentication)

* A credit card added to your Agora account. Cloud Recording usage isn't covered by the [10,000 free minutes](/en/introduction/billing/billing-policies#free-of-charge-policy), so you must add a card before you enable Cloud Recording.

* Set up and enabled a supported third-party cloud storage service. Obtain the following parameters for your storage:

  * Bucket name
  * Access key
  * Secret key

  <Accordions>
    <Accordion title="Supported third-party cloud storage services">
      - [Alibaba Cloud](https://www.alibabacloud.com/product/object-storage-service)
      - [Amazon S3](https://aws.amazon.com/s3/?nc1=h_ls)
      - [Baidu AI Cloud](https://intl.cloud.baidu.com/product/bos.html)
      - [Google Cloud](https://cloud.google.com/storage)
      - [Huawei Cloud](https://www.huaweicloud.com/intl/en-us/product/obs)
      - [Kingsoft Cloud](https://en.ksyun.com/nv/product/KS3)
      - [Microsoft Azure](https://azure.microsoft.com/en-us/services/storage/blobs/)
      - [Qiniu Cloud](https://www.qiniu.com/en/products/kodo)
      - [Tencent Cloud](https://intl.cloud.tencent.com/product/cos)
    </Accordion>
  </Accordions>

* Enabled the Agora Cloud Recording service for your project.

  <Accordions>
    <Accordion title="Enable cloud recording">
      In [Agora Console](https://console.agora.io), select **RTC Services** from the sidebar, then locate the **Cloud Recording** card and turn on its toggle.

      You can now use Agora Cloud Recording and see the usage statistics on the **Usage** page.
    </Accordion>
  </Accordions>

* If your network has a firewall, follow the instructions in [Firewall Requirements](/en/realtime-media/cloud-recording/reference/firewall).

## Implement cloud recording [#implement-cloud-recording]

The following figure shows the API call sequence to start and manage cloud recording:

![](https://assets-docs.agora.io/images/cloud-recording/cloud-recording-sequence.svg)

The following APIs are optional and can be called multiple times. However, they must be called during a recording session, that is, after recording starts and before it ends:

* [\`query\`](#query): Query the recording status
* [\`update\`](/en/api-reference/api-ref/cloud-recording#update): Update the subscription list
* [\`updateLayout\`](/en/api-reference/api-ref/cloud-recording#updatelayout): Update the video layout

### Use basic HTTP authentication [#use-basic-http-authentication]

The Cloud Recording RESTful APIs require basic HTTP authentication. You need to set the \`Authorization\` parameter in every HTTP request header. For details, see [Basic HTTP authentication](/en/api-reference/api-ref/cloud-recording/authentication).

### Get a resource ID [#acquire]

Call the [\`acquire\`](/en/api-reference/api-ref/cloud-recording#acquire) method to request a resource ID for Cloud Recording.

After calling this method successfully, you receive a resource ID in the response body. The resource ID is valid for five minutes. Start recording with this resource ID within the validity period. One resource ID can only be used for a single recording session.

* The recording service is equivalent to a non-streaming client in the channel. The \`uid\` parameter in the request body is used to identify the recording service and cannot be the same as any existing user ID in the channel. For example, if there are two users already in the channel and their user IDs are 123 and 456, the \`uid\` cannot be \`"123"\` or \`"456"\`.

* Agora Cloud Recording does not support user IDs in string format (User Accounts). Ensure that every user in the channel has an integer user ID. The string content of the \`uid\` parameter must also be an integer.

#### Sample code [#sample-code]

For testing purposes, use the following command in the terminal to call the \`acquire\` method.

\`\`\`bash
# Replace <appid> with the App ID of your Agora project
curl --location --request POST 'https://api.agora.io/v1/apps/<appid>/cloud_recording/acquire' \\
# Replace <Authorization> with the Base64-encoded credential in basic HTTP authentication
--header 'Authorization: Basic <Authorization>' \\
--header 'Content-Type: application/json' \\
--data-raw '{
    # Replace <YourChannelName> with the name of the channel you need to record
    "cname": "<YourChannelName>",
    # Replace <YourRecordingUID> with your user ID
    "uid": "<YourRecordingUID>",
    "clientRequest":{}
}'
\`\`\`

### Start recording [#start]

Call the [\`start\`](/en/api-reference/api-ref/cloud-recording#start) method within five minutes of getting a resource ID to join a channel and start recording. You can choose either [individual recording](/en/realtime-media/cloud-recording/build/start-a-recording/individual-mode) or [composite recording](/en/realtime-media/cloud-recording/build/start-a-recording/composite-mode) as the recording mode.

If this method call succeeds, you receive a recording ID (sid) in the HTTP response body. This ID identifies the current recording.

<CalloutContainer type="info">
  <CalloutDescription>
    After you obtain the recording ID \`sid\`, you can call the \`query\`, \`updateLayout\`, and \`stop\` methods before the time set (in hours) by \`resourceExpiredHour\` has passed.
  </CalloutDescription>
</CalloutContainer>

#### Sample code [#sample-code-1]

For testing purposes, use the following command in the terminal to call the \`start\` method.

\`\`\`bash
# Replace <appid> with the App ID of your Agora project
# Replace <resourceid> with the resource ID obtained through the acquire method
# Replace "<mode>" with "individual" for individual recording or "composite" for composite recording
curl --location --request POST  'https://api.agora.io/v1/apps/<appid>/cloud_recording/resourceid/<resourceid>/mode/<mode>/start' \\
# Replace <Authorization> with the Base64-encoded credential in basic HTTP authentication
--header 'Authorization: Basic <Authorization>' \\
--header 'Content-Type: application/json' \\
--data-raw '{
    # Replace <YourChannelName> with the name of the channel you need to record.
    "cname": "<YourChannelName>",
	# Replace <YourRecordingUID> with your user ID that identifies the recording service.
    "uid": "<YourRecordingUID>",
    "clientRequest": {
		# Replace <YourToken> with the temporary token you obtain from the console.
	    "token": "<YourToken>",
		# Set the storageConfig related parameters.
        "storageConfig": {
            "secretKey": "<YourSecretKey>",
            "vendor": 0,
            "region": 0,
            "bucket": "<YourBucketName>",
            "accessKey": "<YourAccessKey>"
        },
		# Set the recordingConfig related parameters.
        "recordingConfig": {
		   # Which is consistent with the "channelType" of the Agora RTC SDK.
            "channelType": 0
        }
    }
}'
\`\`\`

### Query recording status [#query]

During a recording session, can call the [\`query\`](/en/api-reference/api-ref/cloud-recording#query) method to query the recording status. You can call this API multiple times.

When you call this method successfully, you receive the current recording status and related information about the recording file in the response body. See [Best Practices in Integrating Cloud Recording](/en/realtime-media/cloud-recording/build/best-practices/integration-best-practices) for details about how to [Monitor service status during a recording](../best-practices/integration-best-practices#monitor-service-status-during-a-recording) and[ Obtain the M3U8 file name](../best-practices/integration-best-practices#obtain-the-m3u8-file-name).

#### Sample code [#sample-code-2]

For testing purposes, use the following command in the terminal to call the \`query\` method.

\`\`\`bash
# Replace <appid> with the App ID of your Agora project
# Replace <resourceid> with the resource ID obtained through the acquire method
# Replace <sid> with the sid obtained through the start method
# Replace "<mode>" with "individual" for individual recording or "composite" for composite recording
curl --location --request GET 'https://api.agora.io/v1/apps/<appid>/cloud_recording/resourceid/<resourceid>/sid/<sid>/mode/<mode>/query' \\
# Replace <Authorization> with the Base64-encoded credential in basic HTTP authentication
--header 'Authorization: Basic <Authorization>' \\
--header 'Content-Type: application/json'
\`\`\`

### Stop recording [#stop]

Call the [\`stop\`](/en/api-reference/api-ref/cloud-recording#stop) API to end the recording session.

When you call this method successfully, you receive the status of the recording file upload and information about the recording file in the response body.

#### Sample code [#sample-code-3]

For testing purposes, use the following command in the terminal to call the \`stop\` method.

\`\`\`bash
# Replace <appid> with the App ID of your Agora project
# Replace <resourceid> with the resource ID obtained through the acquire method
# Replace <sid> with the sid obtained through the start method
# Replace "<mode>" with "individual" for individual recording or "composite" for composite recording
curl --location --request POST
'https://api.agora.io/v1/apps/<appid>/cloud_recording/resourceid/<resourceid>/sid/<sid>/mode/<mode>/stop' \\
--header 'Content-Type: application/json;charset=utf-8' \\
# Replace <Authorization> with the Base64-encoded credential in basic HTTP authentication
--header 'Authorization: Basic <Authorization>' \\
--data-raw '{
    # Replace <YourRecordingUID> with your user ID that identifies the recording service.
    "uid": "<YourRecordingUID>",
	# Replace <YourChannelName> with the name of the channel you are recording.
    "cname": "<YourChannelName>",
	"clientRequest":{
    }
}'
\`\`\`

<CalloutContainer type="info">
  <CalloutTitle>
    Parameter settings
  </CalloutTitle>

  <CalloutDescription>
    * If the \`uid\` parameter in the request body is the same as a user ID in the channel, or if you use a non-integer user ID, the recording fails. For details, see the notes on the \`uid\` parameter in the section [Get a cloud recording resource](#acquire).
    * When the \`start\` request returns \`200\`, it only means that the RESTful API request is successful. To ensure that the recording has started successfully and continues normally, call \`query\` to check the recording status. Errors such as unreasonable \`transcodingConfig\` parameter settings, incorrect third-party cloud storage information, or incorrect token information cause the \`query\` method to return \`404\`. See [Why do I get a 404 error when I call query after successfully starting a cloud recording? ](../reference/common-errors#errors).
    * Set the \`maxIdleTime\` parameter based on your business needs. Within the time range set by \`maxIdleTime\`, the recording continues and billing is generated even if the channel is idle.
  </CalloutDescription>
</CalloutContainer>

## Reference [#reference]

This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

### Sample project [#sample-project]

Agora provides a [Postman collection](https://documenter.getpostman.com/view/6319646/SVSLr9AM), which contains sample requests of RESTful API for a cloud recording. You can use the collection to quickly grasp the basic functionalities of the Cloud Recording RESTful APIs. You only need to import the collection to Postman and set your environment variables.

You can also use Postman to generate code snippets written in various programming languages. To do so, select a request, click **Code**, and select the desired language in **GENERATE CODE SNIPPETS**.

![img](https://web-cdn.agora.io/docs-files/1588737379230)

### See also [#see-also]

* To streamline the use of Agora RESTful APIs within your infrastructure, see
  [Quickstart using middleware](/en/realtime-media/cloud-recording/middleware-quickstart). The community middleware project provides RESTful APIs for tasks such as token generation and cloud recording management.

* To update the subscription lists during the recording, call [\`update\`](/en/api-reference/api-ref/cloud-recording#update). You can call this method multiple times. See [Set up subscription lists](/en/realtime-media/cloud-recording/build/customize-the-recording/subscription) for details.

* To set or update the video layout during the recording, call the [\`updateLayout\`](/en/api-reference/api-ref/cloud-recording#updatelayout) method. See [Set Video Layout](/en/realtime-media/cloud-recording/build/customize-the-recording/layout) for details.

* [Common errors in cloud recording](/en/realtime-media/cloud-recording/reference/common-errors) lists common error codes and error messages in the response body.

* [Agora Cloud Recording RESTful API Callback Service](../reference/rest-api-overview) lists all the callback events of cloud recording.

* To learn more about the implementation steps and details of basic functions, you can refer to the following documents:
  * [Individual recording](/en/realtime-media/cloud-recording/build/start-a-recording/individual-mode)
  * [Composite recording](/en/realtime-media/cloud-recording/build/start-a-recording/composite-mode)
  * [Web page recording](/en/realtime-media/cloud-recording/build/start-a-recording/webpage-mode)
  * [Capture screenshots](/en/realtime-media/cloud-recording/build/start-a-recording/screen-capture)

## Next steps [#next-steps]

### Manage recorded files [#manage-recorded-files]

After the recording starts, the Agora server splits the recorded content into multiple TS/WebM files and keeps uploading them to the third-party cloud storage until the recording stops. You can refer to [Manage Recorded Files](/en/realtime-media/cloud-recording/build/process-recorded-files/manage-files) to learn about the naming rules, file sizes, and slicing rules of recording files.

### Token authentication [#token-authentication]

To ensure communication security, in a formal production environment, you need to generate tokens on your app server. See [Authenticate Your Users with Token](/en/realtime-media/cloud-recording/build/set-up-authentication/authentication-workflow).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Cloud Recording enables you to record and store real-time audio and video streams from channels. To implement Cloud Recording, you set up a self-hosted backend that interacts with Agora servers to manage recording tasks. This guide introduces the essential Cloud Recording RESTful APIs you use to manage the recording process."
  }, {
    heading: undefined,
    content: "The command-line examples in this guide are for demonstration purposes only. Do not use them directly in a production environment. Implement RESTful API requests through your application server or use Agora's Go backend middleware. For details, see Quickstart using middleware"
  }, {
    heading: "understand-the-tech",
    content: "The basic process of implementing Cloud Recording is as follows:"
  }, {
    heading: "understand-the-tech",
    content: "Get a resource ID"
  }, {
    heading: "understand-the-tech",
    content: "Before starting a cloud recording, call the `acquire` method to obtain a cloud recording resource ID. After calling this method successfully, you get a resource ID in the response body."
  }, {
    heading: "understand-the-tech",
    content: "Start cloud recording"
  }, {
    heading: "understand-the-tech",
    content: "Call the `start` method to join the channel and start a cloud recording. After calling this method successfully, you get a recording ID from the response body to identify the current recording process."
  }, {
    heading: "understand-the-tech",
    content: "Query the recording status"
  }, {
    heading: "understand-the-tech",
    content: "Call the `query` method to check the recording status during the recording."
  }, {
    heading: "understand-the-tech",
    content: "Stop cloud recording"
  }, {
    heading: "understand-the-tech",
    content: "Call the `stop` method to stop the cloud recording."
  }, {
    heading: "understand-the-tech",
    content: "Upload the recording file"
  }, {
    heading: "understand-the-tech",
    content: "After the recording ends, the cloud recording service uploads the recording file to the third-party cloud storage you specify."
  }, {
    heading: "prerequisites",
    content: "To implement Cloud Recording, ensure that you have:"
  }, {
    heading: "prerequisites",
    content: "A valid Agora account and project. Obtain the following parameters from Agora Console:"
  }, {
    heading: "prerequisites",
    content: "The App ID and App certificate for your project. See Get Started with Agora"
  }, {
    heading: "prerequisites",
    content: "A valid temporary token"
  }, {
    heading: "prerequisites",
    content: "Customer ID and Customer key for RESTful API. See Authenticate REST calls"
  }, {
    heading: "prerequisites",
    content: "A credit card added to your Agora account. Cloud Recording usage isn't covered by the 10,000 free minutes, so you must add a card before you enable Cloud Recording."
  }, {
    heading: "prerequisites",
    content: "Set up and enabled a supported third-party cloud storage service. Obtain the following parameters for your storage:"
  }, {
    heading: "prerequisites",
    content: "Bucket name"
  }, {
    heading: "prerequisites",
    content: "Access key"
  }, {
    heading: "prerequisites",
    content: "Secret key"
  }, {
    heading: "prerequisites",
    content: "Alibaba Cloud"
  }, {
    heading: "prerequisites",
    content: "Amazon S3"
  }, {
    heading: "prerequisites",
    content: "Baidu AI Cloud"
  }, {
    heading: "prerequisites",
    content: "Google Cloud"
  }, {
    heading: "prerequisites",
    content: "Huawei Cloud"
  }, {
    heading: "prerequisites",
    content: "Kingsoft Cloud"
  }, {
    heading: "prerequisites",
    content: "Microsoft Azure"
  }, {
    heading: "prerequisites",
    content: "Qiniu Cloud"
  }, {
    heading: "prerequisites",
    content: "Tencent Cloud"
  }, {
    heading: "prerequisites",
    content: "Enabled the Agora Cloud Recording service for your project."
  }, {
    heading: "prerequisites",
    content: "In Agora Console, select **RTC Services** from the sidebar, then locate the **Cloud Recording** card and turn on its toggle."
  }, {
    heading: "prerequisites",
    content: "You can now use Agora Cloud Recording and see the usage statistics on the **Usage** page."
  }, {
    heading: "prerequisites",
    content: "If your network has a firewall, follow the instructions in Firewall Requirements."
  }, {
    heading: "implement-cloud-recording",
    content: "The following figure shows the API call sequence to start and manage cloud recording:"
  }, {
    heading: "implement-cloud-recording",
    content: "The following APIs are optional and can be called multiple times. However, they must be called during a recording session, that is, after recording starts and before it ends:"
  }, {
    heading: "implement-cloud-recording",
    content: "`query`: Query the recording status"
  }, {
    heading: "implement-cloud-recording",
    content: "`update`: Update the subscription list"
  }, {
    heading: "implement-cloud-recording",
    content: "`updateLayout`: Update the video layout"
  }, {
    heading: "use-basic-http-authentication",
    content: "The Cloud Recording RESTful APIs require basic HTTP authentication. You need to set the `Authorization` parameter in every HTTP request header. For details, see Basic HTTP authentication."
  }, {
    heading: "acquire",
    content: "Call the `acquire` method to request a resource ID for Cloud Recording."
  }, {
    heading: "acquire",
    content: "After calling this method successfully, you receive a resource ID in the response body. The resource ID is valid for five minutes. Start recording with this resource ID within the validity period. One resource ID can only be used for a single recording session."
  }, {
    heading: "acquire",
    content: 'The recording service is equivalent to a non-streaming client in the channel. The `uid` parameter in the request body is used to identify the recording service and cannot be the same as any existing user ID in the channel. For example, if there are two users already in the channel and their user IDs are 123 and 456, the `uid` cannot be `"123"` or `"456"`.'
  }, {
    heading: "acquire",
    content: "Agora Cloud Recording does not support user IDs in string format (User Accounts). Ensure that every user in the channel has an integer user ID. The string content of the `uid` parameter must also be an integer."
  }, {
    heading: "sample-code",
    content: "For testing purposes, use the following command in the terminal to call the `acquire` method."
  }, {
    heading: "start",
    content: "Call the `start` method within five minutes of getting a resource ID to join a channel and start recording. You can choose either individual recording or composite recording as the recording mode."
  }, {
    heading: "start",
    content: "If this method call succeeds, you receive a recording ID (sid) in the HTTP response body. This ID identifies the current recording."
  }, {
    heading: "start",
    content: "After you obtain the recording ID `sid`, you can call the `query`, `updateLayout`, and `stop` methods before the time set (in hours) by `resourceExpiredHour` has passed."
  }, {
    heading: "sample-code-1",
    content: "For testing purposes, use the following command in the terminal to call the `start` method."
  }, {
    heading: "query",
    content: "During a recording session, can call the `query` method to query the recording status. You can call this API multiple times."
  }, {
    heading: "query",
    content: "When you call this method successfully, you receive the current recording status and related information about the recording file in the response body. See Best Practices in Integrating Cloud Recording for details about how to Monitor service status during a recording and Obtain the M3U8 file name."
  }, {
    heading: "sample-code-2",
    content: "For testing purposes, use the following command in the terminal to call the `query` method."
  }, {
    heading: "stop",
    content: "Call the `stop` API to end the recording session."
  }, {
    heading: "stop",
    content: "When you call this method successfully, you receive the status of the recording file upload and information about the recording file in the response body."
  }, {
    heading: "sample-code-3",
    content: "For testing purposes, use the following command in the terminal to call the `stop` method."
  }, {
    heading: "sample-code-3",
    content: "If the `uid` parameter in the request body is the same as a user ID in the channel, or if you use a non-integer user ID, the recording fails. For details, see the notes on the `uid` parameter in the section Get a cloud recording resource."
  }, {
    heading: "sample-code-3",
    content: "When the `start` request returns `200`, it only means that the RESTful API request is successful. To ensure that the recording has started successfully and continues normally, call `query` to check the recording status. Errors such as unreasonable `transcodingConfig` parameter settings, incorrect third-party cloud storage information, or incorrect token information cause the `query` method to return `404`. See Why do I get a 404 error when I call query after successfully starting a cloud recording? ."
  }, {
    heading: "sample-code-3",
    content: "Set the `maxIdleTime` parameter based on your business needs. Within the time range set by `maxIdleTime`, the recording continues and billing is generated even if the channel is idle."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "sample-project",
    content: "Agora provides a Postman collection, which contains sample requests of RESTful API for a cloud recording. You can use the collection to quickly grasp the basic functionalities of the Cloud Recording RESTful APIs. You only need to import the collection to Postman and set your environment variables."
  }, {
    heading: "sample-project",
    content: "You can also use Postman to generate code snippets written in various programming languages. To do so, select a request, click **Code**, and select the desired language in **GENERATE CODE SNIPPETS**."
  }, {
    heading: "see-also",
    content: `To streamline the use of Agora RESTful APIs within your infrastructure, see
Quickstart using middleware. The community middleware project provides RESTful APIs for tasks such as token generation and cloud recording management.`
  }, {
    heading: "see-also",
    content: "To update the subscription lists during the recording, call `update`. You can call this method multiple times. See Set up subscription lists for details."
  }, {
    heading: "see-also",
    content: "To set or update the video layout during the recording, call the `updateLayout` method. See Set Video Layout for details."
  }, {
    heading: "see-also",
    content: "Common errors in cloud recording lists common error codes and error messages in the response body."
  }, {
    heading: "see-also",
    content: "Agora Cloud Recording RESTful API Callback Service lists all the callback events of cloud recording."
  }, {
    heading: "see-also",
    content: "To learn more about the implementation steps and details of basic functions, you can refer to the following documents:"
  }, {
    heading: "see-also",
    content: "Individual recording"
  }, {
    heading: "see-also",
    content: "Composite recording"
  }, {
    heading: "see-also",
    content: "Web page recording"
  }, {
    heading: "see-also",
    content: "Capture screenshots"
  }, {
    heading: "manage-recorded-files",
    content: "After the recording starts, the Agora server splits the recorded content into multiple TS/WebM files and keeps uploading them to the third-party cloud storage until the recording stops. You can refer to Manage Recorded Files to learn about the naming rules, file sizes, and slicing rules of recording files."
  }, {
    heading: "token-authentication",
    content: "To ensure communication security, in a formal production environment, you need to generate tokens on your app server. See Authenticate Your Users with Token."
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implement-cloud-recording",
    content: "Implement cloud recording"
  }, {
    id: "use-basic-http-authentication",
    content: "Use basic HTTP authentication"
  }, {
    id: "acquire",
    content: "Get a resource ID"
  }, {
    id: "sample-code",
    content: "Sample code"
  }, {
    id: "start",
    content: "Start recording"
  }, {
    id: "sample-code-1",
    content: "Sample code"
  }, {
    id: "query",
    content: "Query recording status"
  }, {
    id: "sample-code-2",
    content: "Sample code"
  }, {
    id: "stop",
    content: "Stop recording"
  }, {
    id: "sample-code-3",
    content: "Sample code"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "sample-project",
    content: "Sample project"
  }, {
    id: "see-also",
    content: "See also"
  }, {
    id: "next-steps",
    content: "Next steps"
  }, {
    id: "manage-recorded-files",
    content: "Manage recorded files"
  }, {
    id: "token-authentication",
    content: "Token authentication"
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
  url: "#implement-cloud-recording",
  title: _jsx(_Fragment, {
    children: "Implement cloud recording"
  })
}, {
  depth: 3,
  url: "#use-basic-http-authentication",
  title: _jsx(_Fragment, {
    children: "Use basic HTTP authentication"
  })
}, {
  depth: 3,
  url: "#acquire",
  title: _jsx(_Fragment, {
    children: "Get a resource ID"
  })
}, {
  depth: 4,
  url: "#sample-code",
  title: _jsx(_Fragment, {
    children: "Sample code"
  })
}, {
  depth: 3,
  url: "#start",
  title: _jsx(_Fragment, {
    children: "Start recording"
  })
}, {
  depth: 4,
  url: "#sample-code-1",
  title: _jsx(_Fragment, {
    children: "Sample code"
  })
}, {
  depth: 3,
  url: "#query",
  title: _jsx(_Fragment, {
    children: "Query recording status"
  })
}, {
  depth: 4,
  url: "#sample-code-2",
  title: _jsx(_Fragment, {
    children: "Sample code"
  })
}, {
  depth: 3,
  url: "#stop",
  title: _jsx(_Fragment, {
    children: "Stop recording"
  })
}, {
  depth: 4,
  url: "#sample-code-3",
  title: _jsx(_Fragment, {
    children: "Sample code"
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
  url: "#see-also",
  title: _jsx(_Fragment, {
    children: "See also"
  })
}, {
  depth: 2,
  url: "#next-steps",
  title: _jsx(_Fragment, {
    children: "Next steps"
  })
}, {
  depth: 3,
  url: "#manage-recorded-files",
  title: _jsx(_Fragment, {
    children: "Manage recorded files"
  })
}, {
  depth: 3,
  url: "#token-authentication",
  title: _jsx(_Fragment, {
    children: "Token authentication"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
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
    ul: "ul",
    ...props.components
  }, { Accordion, Accordions, CalloutContainer, CalloutDescription, CalloutTitle } = _components;
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
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Cloud Recording enables you to record and store real-time audio and video streams from channels. To implement Cloud Recording, you set up a self-hosted backend that interacts with Agora servers to manage recording tasks. This guide introduces the essential Cloud Recording RESTful APIs you use to manage the recording process."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["The command-line examples in this guide are for demonstration purposes only. Do not use them directly in a production environment. Implement RESTful API requests through your application server or use Agora's ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Community/agora-go-backend-middleware",
            children: "Go backend middleware"
          }), ". For details, see ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/middleware-quickstart",
            children: "Quickstart using middleware"
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsxs(_components.p, {
      children: [`The basic process of implementing Cloud Recording is as follows:
`, _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/cloud-recording/cloud-recording-tech.svg",
        alt: ""
      })]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Get a resource ID"
        }), `
`, _jsxs(_components.p, {
          children: ["Before starting a cloud recording, call the ", _jsx(_components.a, {
            href: "#acquire",
            children: _jsx(_components.code, {
              children: "acquire"
            })
          }), " method to obtain a cloud recording resource ID. After calling this method successfully, you get a resource ID in the response body."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Start cloud recording"
        }), `
`, _jsxs(_components.p, {
          children: ["Call the ", _jsx(_components.a, {
            href: "#start",
            children: _jsx(_components.code, {
              children: "start"
            })
          }), " method to join the channel and start a cloud recording. After calling this method successfully, you get a recording ID from the response body to identify the current recording process."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Query the recording status"
        }), `
`, _jsxs(_components.p, {
          children: ["Call the ", _jsx(_components.a, {
            href: "#query",
            children: _jsx(_components.code, {
              children: "query"
            })
          }), " method to check the recording status during the recording."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Stop cloud recording"
        }), `
`, _jsxs(_components.p, {
          children: ["Call the ", _jsx(_components.a, {
            href: "#stop",
            children: _jsx(_components.code, {
              children: "stop"
            })
          }), " method to stop the cloud recording."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Upload the recording file"
        }), `
`, _jsxs(_components.p, {
          children: ["After the recording ends, the cloud recording service uploads the recording file to the ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording#storageconfig",
            children: "third-party cloud storage"
          }), " you specify."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "To implement Cloud Recording, ensure that you have:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["A valid Agora account and project. Obtain the following parameters from ", _jsx(_components.a, {
            href: "https://console.agora.io",
            children: "Agora Console"
          }), ":"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The App ID and App certificate for your project. See ", _jsx(_components.a, {
              href: "/en/introduction/account#get-the-app-id-and-app-certificate",
              children: "Get Started with Agora"
            })]
          }), `
`, _jsx(_components.li, {
            children: "A valid temporary token"
          }), `
`, _jsxs(_components.li, {
            children: ["Customer ID and Customer key for RESTful API. See ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording/authentication",
              children: "Authenticate REST calls"
            })]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["A credit card added to your Agora account. Cloud Recording usage isn't covered by the ", _jsx(_components.a, {
            href: "/en/introduction/billing/billing-policies#free-of-charge-policy",
            children: "10,000 free minutes"
          }), ", so you must add a card before you enable Cloud Recording."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Set up and enabled a supported third-party cloud storage service. Obtain the following parameters for your storage:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Bucket name"
          }), `
`, _jsx(_components.li, {
            children: "Access key"
          }), `
`, _jsx(_components.li, {
            children: "Secret key"
          }), `
`]
        }), `
`, _jsx(Accordions, {
          children: _jsx(Accordion, {
            title: "Supported third-party cloud storage services",
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://www.alibabacloud.com/product/object-storage-service",
                  children: "Alibaba Cloud"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://aws.amazon.com/s3/?nc1=h_ls",
                  children: "Amazon S3"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://intl.cloud.baidu.com/product/bos.html",
                  children: "Baidu AI Cloud"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://cloud.google.com/storage",
                  children: "Google Cloud"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://www.huaweicloud.com/intl/en-us/product/obs",
                  children: "Huawei Cloud"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://en.ksyun.com/nv/product/KS3",
                  children: "Kingsoft Cloud"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://azure.microsoft.com/en-us/services/storage/blobs/",
                  children: "Microsoft Azure"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://www.qiniu.com/en/products/kodo",
                  children: "Qiniu Cloud"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://intl.cloud.tencent.com/product/cos",
                  children: "Tencent Cloud"
                })
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
          children: "Enabled the Agora Cloud Recording service for your project."
        }), `
`, _jsx(Accordions, {
          children: _jsxs(Accordion, {
            title: "Enable cloud recording",
            children: [_jsxs(_components.p, {
              children: ["In ", _jsx(_components.a, {
                href: "https://console.agora.io",
                children: "Agora Console"
              }), ", select ", _jsx(_components.strong, {
                children: "RTC Services"
              }), " from the sidebar, then locate the ", _jsx(_components.strong, {
                children: "Cloud Recording"
              }), " card and turn on its toggle."]
            }), _jsxs(_components.p, {
              children: ["You can now use Agora Cloud Recording and see the usage statistics on the ", _jsx(_components.strong, {
                children: "Usage"
              }), " page."]
            })]
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If your network has a firewall, follow the instructions in ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/reference/firewall",
            children: "Firewall Requirements"
          }), "."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "implement-cloud-recording",
      children: "Implement cloud recording"
    }), `
`, _jsx(_components.p, {
      children: "The following figure shows the API call sequence to start and manage cloud recording:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/cloud-recording/cloud-recording-sequence.svg",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: "The following APIs are optional and can be called multiple times. However, they must be called during a recording session, that is, after recording starts and before it ends:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "#query",
          children: _jsx(_components.code, {
            children: "query"
          })
        }), ": Query the recording status"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/api-reference/api-ref/cloud-recording#update",
          children: _jsx(_components.code, {
            children: "update"
          })
        }), ": Update the subscription list"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/api-reference/api-ref/cloud-recording#updatelayout",
          children: _jsx(_components.code, {
            children: "updateLayout"
          })
        }), ": Update the video layout"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "use-basic-http-authentication",
      children: "Use basic HTTP authentication"
    }), `
`, _jsxs(_components.p, {
      children: ["The Cloud Recording RESTful APIs require basic HTTP authentication. You need to set the ", _jsx(_components.code, {
        children: "Authorization"
      }), " parameter in every HTTP request header. For details, see ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording/authentication",
        children: "Basic HTTP authentication"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "acquire",
      children: "Get a resource ID"
    }), `
`, _jsxs(_components.p, {
      children: ["Call the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#acquire",
        children: _jsx(_components.code, {
          children: "acquire"
        })
      }), " method to request a resource ID for Cloud Recording."]
    }), `
`, _jsx(_components.p, {
      children: "After calling this method successfully, you receive a resource ID in the response body. The resource ID is valid for five minutes. Start recording with this resource ID within the validity period. One resource ID can only be used for a single recording session."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["The recording service is equivalent to a non-streaming client in the channel. The ", _jsx(_components.code, {
            children: "uid"
          }), " parameter in the request body is used to identify the recording service and cannot be the same as any existing user ID in the channel. For example, if there are two users already in the channel and their user IDs are 123 and 456, the ", _jsx(_components.code, {
            children: "uid"
          }), " cannot be ", _jsx(_components.code, {
            children: '"123"'
          }), " or ", _jsx(_components.code, {
            children: '"456"'
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Agora Cloud Recording does not support user IDs in string format (User Accounts). Ensure that every user in the channel has an integer user ID. The string content of the ", _jsx(_components.code, {
            children: "uid"
          }), " parameter must also be an integer."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "sample-code",
      children: "Sample code"
    }), `
`, _jsxs(_components.p, {
      children: ["For testing purposes, use the following command in the terminal to call the ", _jsx(_components.code, {
        children: "acquire"
      }), " method."]
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Replace <appid> with the App ID of your Agora project"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "curl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --location"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --request"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " POST"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'https://api.agora.io/v1/apps/<appid>/cloud_recording/acquire'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Replace <Authorization> with the Base64-encoded credential in basic HTTP authentication"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "--header"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'Authorization: Basic <Authorization>'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "--header "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'Content-Type: application/json'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "--data-raw "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'{"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "    # Replace <YourChannelName> with the name of the channel you need to record"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "cname": "<YourChannelName>",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "    # Replace <YourRecordingUID> with your user ID"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "uid": "<YourRecordingUID>",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "clientRequest":{}'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}'"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "start",
      children: "Start recording"
    }), `
`, _jsxs(_components.p, {
      children: ["Call the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#start",
        children: _jsx(_components.code, {
          children: "start"
        })
      }), " method within five minutes of getting a resource ID to join a channel and start recording. You can choose either ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/start-a-recording/individual-mode",
        children: "individual recording"
      }), " or ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/start-a-recording/composite-mode",
        children: "composite recording"
      }), " as the recording mode."]
    }), `
`, _jsx(_components.p, {
      children: "If this method call succeeds, you receive a recording ID (sid) in the HTTP response body. This ID identifies the current recording."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["After you obtain the recording ID ", _jsx(_components.code, {
            children: "sid"
          }), ", you can call the ", _jsx(_components.code, {
            children: "query"
          }), ", ", _jsx(_components.code, {
            children: "updateLayout"
          }), ", and ", _jsx(_components.code, {
            children: "stop"
          }), " methods before the time set (in hours) by ", _jsx(_components.code, {
            children: "resourceExpiredHour"
          }), " has passed."]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "sample-code-1",
      children: "Sample code"
    }), `
`, _jsxs(_components.p, {
      children: ["For testing purposes, use the following command in the terminal to call the ", _jsx(_components.code, {
        children: "start"
      }), " method."]
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Replace <appid> with the App ID of your Agora project"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Replace <resourceid> with the resource ID obtained through the acquire method"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '# Replace "<mode>" with "individual" for individual recording or "composite" for composite recording'
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "curl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --location"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --request"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " POST"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  'https://api.agora.io/v1/apps/<appid>/cloud_recording/resourceid/<resourceid>/mode/<mode>/start'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Replace <Authorization> with the Base64-encoded credential in basic HTTP authentication"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "--header"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'Authorization: Basic <Authorization>'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "--header "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'Content-Type: application/json'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "--data-raw "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'{"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "    # Replace <YourChannelName> with the name of the channel you need to record."
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "cname": "<YourChannelName>",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\t# Replace <YourRecordingUID> with your user ID that identifies the recording service."
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "uid": "<YourRecordingUID>",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "clientRequest": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\t\t# Replace <YourToken> with the temporary token you obtain from the console."
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '\t    "token": "<YourToken>",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\t\t# Set the storageConfig related parameters."
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "storageConfig": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '            "secretKey": "<YourSecretKey>",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '            "vendor": 0,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '            "region": 0,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '            "bucket": "<YourBucketName>",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '            "accessKey": "<YourAccessKey>"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\t\t# Set the recordingConfig related parameters."
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "recordingConfig": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '\t\t   # Which is consistent with the "channelType" of the Agora RTC SDK.'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '            "channelType": 0'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "    }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}'"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "query",
      children: "Query recording status"
    }), `
`, _jsxs(_components.p, {
      children: ["During a recording session, can call the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#query",
        children: _jsx(_components.code, {
          children: "query"
        })
      }), " method to query the recording status. You can call this API multiple times."]
    }), `
`, _jsxs(_components.p, {
      children: ["When you call this method successfully, you receive the current recording status and related information about the recording file in the response body. See ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/best-practices/integration-best-practices",
        children: "Best Practices in Integrating Cloud Recording"
      }), " for details about how to ", _jsx(_components.a, {
        href: "../best-practices/integration-best-practices#monitor-service-status-during-a-recording",
        children: "Monitor service status during a recording"
      }), " and", _jsx(_components.a, {
        href: "../best-practices/integration-best-practices#obtain-the-m3u8-file-name",
        children: " Obtain the M3U8 file name"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "sample-code-2",
      children: "Sample code"
    }), `
`, _jsxs(_components.p, {
      children: ["For testing purposes, use the following command in the terminal to call the ", _jsx(_components.code, {
        children: "query"
      }), " method."]
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Replace <appid> with the App ID of your Agora project"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Replace <resourceid> with the resource ID obtained through the acquire method"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Replace <sid> with the sid obtained through the start method"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '# Replace "<mode>" with "individual" for individual recording or "composite" for composite recording'
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "curl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --location"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --request"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " GET"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'https://api.agora.io/v1/apps/<appid>/cloud_recording/resourceid/<resourceid>/sid/<sid>/mode/<mode>/query'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Replace <Authorization> with the Base64-encoded credential in basic HTTP authentication"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "--header"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'Authorization: Basic <Authorization>'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "--header "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'Content-Type: application/json'"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "stop",
      children: "Stop recording"
    }), `
`, _jsxs(_components.p, {
      children: ["Call the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#stop",
        children: _jsx(_components.code, {
          children: "stop"
        })
      }), " API to end the recording session."]
    }), `
`, _jsx(_components.p, {
      children: "When you call this method successfully, you receive the status of the recording file upload and information about the recording file in the response body."
    }), `
`, _jsx(_components.h4, {
      id: "sample-code-3",
      children: "Sample code"
    }), `
`, _jsxs(_components.p, {
      children: ["For testing purposes, use the following command in the terminal to call the ", _jsx(_components.code, {
        children: "stop"
      }), " method."]
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Replace <appid> with the App ID of your Agora project"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Replace <resourceid> with the resource ID obtained through the acquire method"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Replace <sid> with the sid obtained through the start method"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '# Replace "<mode>" with "individual" for individual recording or "composite" for composite recording'
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "curl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --location"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --request"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " POST"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "'https://api.agora.io/v1/apps/<appid>/cloud_recording/resourceid/<resourceid>/sid/<sid>/mode/<mode>/stop'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "--header "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'Content-Type: application/json;charset=utf-8'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Replace <Authorization> with the Base64-encoded credential in basic HTTP authentication"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "--header"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'Authorization: Basic <Authorization>'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "--data-raw "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'{"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "    # Replace <YourRecordingUID> with your user ID that identifies the recording service."
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "uid": "<YourRecordingUID>",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "\t# Replace <YourChannelName> with the name of the channel you are recording."
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "cname": "<YourChannelName>",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '\t"clientRequest":{'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "    }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}'"
            })
          })]
        })
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Parameter settings"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["If the ", _jsx(_components.code, {
              children: "uid"
            }), " parameter in the request body is the same as a user ID in the channel, or if you use a non-integer user ID, the recording fails. For details, see the notes on the ", _jsx(_components.code, {
              children: "uid"
            }), " parameter in the section ", _jsx(_components.a, {
              href: "#acquire",
              children: "Get a cloud recording resource"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["When the ", _jsx(_components.code, {
              children: "start"
            }), " request returns ", _jsx(_components.code, {
              children: "200"
            }), ", it only means that the RESTful API request is successful. To ensure that the recording has started successfully and continues normally, call ", _jsx(_components.code, {
              children: "query"
            }), " to check the recording status. Errors such as unreasonable ", _jsx(_components.code, {
              children: "transcodingConfig"
            }), " parameter settings, incorrect third-party cloud storage information, or incorrect token information cause the ", _jsx(_components.code, {
              children: "query"
            }), " method to return ", _jsx(_components.code, {
              children: "404"
            }), ". See ", _jsx(_components.a, {
              href: "../reference/common-errors#errors",
              children: "Why do I get a 404 error when I call query after successfully starting a cloud recording? "
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["Set the ", _jsx(_components.code, {
              children: "maxIdleTime"
            }), " parameter based on your business needs. Within the time range set by ", _jsx(_components.code, {
              children: "maxIdleTime"
            }), ", the recording continues and billing is generated even if the channel is idle."]
          }), `
`]
        })
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
      id: "sample-project",
      children: "Sample project"
    }), `
`, _jsxs(_components.p, {
      children: ["Agora provides a ", _jsx(_components.a, {
        href: "https://documenter.getpostman.com/view/6319646/SVSLr9AM",
        children: "Postman collection"
      }), ", which contains sample requests of RESTful API for a cloud recording. You can use the collection to quickly grasp the basic functionalities of the Cloud Recording RESTful APIs. You only need to import the collection to Postman and set your environment variables."]
    }), `
`, _jsxs(_components.p, {
      children: ["You can also use Postman to generate code snippets written in various programming languages. To do so, select a request, click ", _jsx(_components.strong, {
        children: "Code"
      }), ", and select the desired language in ", _jsx(_components.strong, {
        children: "GENERATE CODE SNIPPETS"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1588737379230",
        alt: "img"
      })
    }), `
`, _jsx(_components.h3, {
      id: "see-also",
      children: "See also"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [`To streamline the use of Agora RESTful APIs within your infrastructure, see
`, _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/middleware-quickstart",
            children: "Quickstart using middleware"
          }), ". The community middleware project provides RESTful APIs for tasks such as token generation and cloud recording management."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["To update the subscription lists during the recording, call ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording#update",
            children: _jsx(_components.code, {
              children: "update"
            })
          }), ". You can call this method multiple times. See ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/build/customize-the-recording/subscription",
            children: "Set up subscription lists"
          }), " for details."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["To set or update the video layout during the recording, call the ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording#updatelayout",
            children: _jsx(_components.code, {
              children: "updateLayout"
            })
          }), " method. See ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/build/customize-the-recording/layout",
            children: "Set Video Layout"
          }), " for details."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/reference/common-errors",
            children: "Common errors in cloud recording"
          }), " lists common error codes and error messages in the response body."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "../reference/rest-api-overview",
            children: "Agora Cloud Recording RESTful API Callback Service"
          }), " lists all the callback events of cloud recording."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "To learn more about the implementation steps and details of basic functions, you can refer to the following documents:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/realtime-media/cloud-recording/build/start-a-recording/individual-mode",
              children: "Individual recording"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/realtime-media/cloud-recording/build/start-a-recording/composite-mode",
              children: "Composite recording"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/realtime-media/cloud-recording/build/start-a-recording/webpage-mode",
              children: "Web page recording"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/realtime-media/cloud-recording/build/start-a-recording/screen-capture",
              children: "Capture screenshots"
            })
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "next-steps",
      children: "Next steps"
    }), `
`, _jsx(_components.h3, {
      id: "manage-recorded-files",
      children: "Manage recorded files"
    }), `
`, _jsxs(_components.p, {
      children: ["After the recording starts, the Agora server splits the recorded content into multiple TS/WebM files and keeps uploading them to the third-party cloud storage until the recording stops. You can refer to ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/process-recorded-files/manage-files",
        children: "Manage Recorded Files"
      }), " to learn about the naming rules, file sizes, and slicing rules of recording files."]
    }), `
`, _jsx(_components.h3, {
      id: "token-authentication",
      children: "Token authentication"
    }), `
`, _jsxs(_components.p, {
      children: ["To ensure communication security, in a formal production environment, you need to generate tokens on your app server. See ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/set-up-authentication/authentication-workflow",
        children: "Authenticate Your Users with Token"
      }), "."]
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
