import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Best practice in integrating Cloud Recording",
  description: "Guidelines for integrating cloud recording into your app."
};
export let _markdown = `

To improve application robustness, Agora recommends that you do the following when integrating Cloud Recording RESTful APIs:

## Failover [#failover]

In response to network failures, as well as risks that arise from factors such as non-Agora cloud services, non-Agora software, infrastructure, and force majeure, Agora cloud recording provides high-availability automatic task migration services. When the fault is confirmed, the migration is completed in the shortest possible time (estimated to be within 90 seconds). During this period, there are risks such as recording interruption and recording file loss.

For use-cases with a large number of viewers in the channel or extremely high requirements for high availability, consider whether you can accept the impact of high availability migration based on your own business characteristics, and decide whether to adopt higher quality assurance measures, such as [Multi-channel task assurance](#multi-channel-task-assurance), or [Monitor service status during a recording](#monitor-service-status-during-a-recording) through periodic channel query and message notification service, and re-initiate new recording tasks in a timely manner using a different \`uid\`.

## Multi-channel task assurance [#multi-channel-task-assurance]

If you need higher quality assurance than failover, use a multi-tasking assurance strategy. Each cloud recording task is billed separately. Please see [Pricing](/en/realtime-media/cloud-recording/reference/pricing) for details on the billing method. Take the following steps to implement this strategy:

1. Initiate the main task and a backup task at the same time to achieve multi-channel recording of the same channel. To do this, use the same \`appId\` and \`cname\`, and different \`uid\`s to initiate multiple recording tasks. When initiating a subsequent recording task, set the \`clientRequest.excludeResourceIds\` field in the \`acquire\` request's body to the previous recording task or several previous recording tasks. This prevents the subsequent task from using resources in the area where the previous recording task is located. When the network in the area where the previous recording task is located fails, the subsequent recording task will not be affected.

2. Listening to the following callback events on the client side promptly notifies the audience to subscribe to the backup task \`uid\`:

   * Anchor offline \`callbackonUserOffline\`
   * Anchor audio and video status change callbacks \`onRemoteAudioStateChanged\` and \`onRemoteVideoStateChanged\`

## Use dual domain names [#use-dual-domain-names]

If you send a Cloud Recording RESTful API request to \`api.agora.io\` and the request fails, retry with the same domain name first. If it fails again, replace the domain name with \`api.sd-rtn.com\` and retry. Best practice is to first try the DNS domain close to your server. See the [domain name table](#domain-name-table) for a list of DNS servers.

Agora recommends that you use a backoff strategy, for example, retry after 1, 3, and 6 seconds successively, to avoid exceeding the Queries Per Second limits.

## Check the limits [#check-the-limits]

Check that your Peak Concurrent Worker (PCW), Queries Per Second (QPS), and the number of streams do not exceed the following limits set by Agora.

#### PCW [#pcw]

The PCW limit is set to 50 for all regions and resolutions. If you need to extend the PCW limit, please contact [support@agora.io](mailto\\:support@agora.io).

#### QPS [#qps]

The initial QPS limit is 10 per App ID when you register. You can estimate the QPS that your project needs based on your PCW value and query frequency. If you need to extend the limit for QPS, contact [support@agora.io](mailto\\:support@agora.io).

#### Number of streams [#number-of-streams]

The upper limit of video attributes supported by Agora is as follows:

* Resolution 1920 × 1080
* Frame rate 30 FPS

The maximum number of supported streams is as follows:

| Service type    | Mainland China            | Europe                   | America                  | Asia (excluding mainland China) |
| :-------------- | :------------------------ | :----------------------- | :----------------------- | :------------------------------ |
| Cloud recording | * SD 100
* HD 50
* FHD 30 | - SD 50
- HD 30
- FHD 10 | * SD 50
* HD 50
* FHD 30 | - SD 50
- HD 50
- FHD 30        |

<CalloutContainer type="warning">
  <CalloutTitle>
    Note
  </CalloutTitle>

  <CalloutDescription>
    If you need to record multiple streams of different resolutions at the same time, make sure you meet the following requirements:

    * The number of streams per resolution cannot exceed the corresponding limit for that resolution.
    * The total number of streams cannot exceed the limit set for the higher resolution. For example, if you need to use cloud recording in Europe to record in both SD and HD, the total number of streams cannot exceed 50. If you record in both HD and FHD, the total number cannot exceed 30.
  </CalloutDescription>
</CalloutContainer>

## Get service status [#get-service-status]

You use Cloud Recording RESTful APIs to get the status of the recording service.

Best practice is that core apps do not rely on Notifications (NCS). If your apps already rely heavily on the NCS, contact [support@agora.io](mailto\\:support@agora.io) and enable the redundant message notification function. This doubles the received notifications and reduces the probability of message loss. After enabling the message notification function, you need to deduplicate messages based on \`sid\`. Message notification still cannot guarantee a 100% arrival rate.

### Ensure the recording service starts successfully [#ensure-the-recording-service-starts-successfully]

Take the following steps to ensure that the recording service starts successfully:

1. Ensure that the \`start\` request is successful, that is, you receive a \`sid\` (recording ID) from the response. If the request fails, take measures according to the HTTP status code:

   * If the returned HTTP status code is always \`40x\`, check the parameter values in your request.
   * If the returned HTTP status code is \`50x\`, you can retry several times with the same parameters until you receive a \`sid\`. Agora recommends that you use a backoff strategy, for example, retry after 3, 6, and 9 seconds successively, to avoid exceeding the QPS limits. If you retry three times and still do not get a \`sid\`, retry with a new user ID.
   * If you receive error code \`65\`, retry with the same parameters. Agora recommends that you use a backoff strategy, for example, retry after 3 and 6 seconds successively.

2. Five seconds after you receive a \`sid\`, use a backoff strategy to call \`query\`. Agora recommends that the interval between two \`query\` calls is shorter than \`maxIdleTime\`, which you set in the \`start\` call. If the \`query\` call succeeds, and \`status\` in \`serverResponse\` is \`4\` or \`5\`, it means the recording service starts successfully. Otherwise, you can deem the recording service as not having started, or quit halfway after starting.

* Agora recommends that you prepare a backup user ID, which you can use when restarting the recording service, to avoid two identical user IDs kicking each other out of the channel. You can alternate between the backup user ID and the original one.

### Monitor service status during a recording [#monitor-service-status-during-a-recording]

You can periodically call \`query\` to ensure that the recording service is in progress and in a normal state. Apart from \`query\`, you can use the NCS as a complementary method to monitor the service status. See [Comparison Between the NCS and the \`query\` Method](../../reference/rest-api-overview#what-are-the-differences-between-the-message-notification-service-and-the-query-method) for detailed comparison between the two methods.

#### Periodically query service status [#periodically-query-service-status]

If the reliability of the status of a cloud recording is a high priority, Agora strongly recommends using the \`query\` method to periodically query the recording service status. The interval between two calls can be around two minutes. Take the corresponding measure based on the received HTTP status code:

* If the returned HTTP status code is always \`40x\`, check the parameter values in your request.
* If the returned HTTP status code is \`404\`, and the request parameters are confirmed to be correct, the recording has either not started successfully, or the recording quit after starting. Agora recommends that you use a backoff strategy, for example, retry after 5, 10, and 15 seconds successively.
* If the returned HTTP status code is \`50x\`, the \`query\` request failed, but it is not clear whether the recording has quit. The \`50x\` error is rare. You can continue to use the backoff strategy (waiting for 5 seconds, 10 seconds, 15 seconds, or 30 seconds) to call \`query\`.

#### Redundant message notifications [#redundant-message-notifications]

After enabling the redundant message notification function, you need to deduplicate messages based on \`sid\`. For example, if you need to start recording again after a recording session times out and quits, the process is:

1. Your server receives the notifications of event \`31\`, \`32\`, or \`11\`, which means that the recording service quits normally.
2. After receiving the notifications, your application calls \`acquire\` to restart the recording service.
3. During this period, your server receives notifications of event \`31\`, \`32\`, or \`11\` again. If \`sid\` contained in the above notifications is identical to the previous ones, you can ignore them as redundant notifications.
4. Call \`query\` if you need to fully ensure that the recording service successfully starts.

When the recording service enables the [high availability mechanism](../../index#features), some notifications may be sent twice. You can distinguish them by the user ID in the notification. If the user ID is the same as the one you use when you start the recording, the notification belongs to the original recording session; otherwise, the notification belongs to the recording session initiated by the high availability mechanism.

### Obtain the M3U8 file name [#obtain-the-m3u8-file-name]

You can obtain the M3U8 file name by two means. One is by splicing according to the file naming rules. The other is by calling the \`query\` method. Agora recommends that you use splicing to obtain the M3U8 file name.

#### Obtain file name by splicing [#obtain-file-name-by-splicing]

In composite recording mode, the format of the M3U8 file name is \`<sid>_<cname>.m3u8\`. Therefore, you can predict the M3U8 file name by splicing. See [Naming conventions](/en/realtime-media/cloud-recording/build/process-recorded-files/manage-files#naming-conventions) for details.

#### Obtain file name via the \`query\` call [#obtain-file-name-via-the-query-call]

The M3U8 file name is generated after the first slice file is generated. Therefore, you should call \`query\` after the first slicing completes. See [Slicing](/en/realtime-media/cloud-recording/build/process-recorded-files/manage-files#slicing) for details.

In composite recording mode, call \`query\` 15 seconds after the cloud recording starts; in individual recording mode, call \`query\` one minute after the cloud recording starts. If the first \`query\` call fails, you can try again after one minute.

## Avoid frequent quits of the recording service [#avoid-frequent-quits-of-the-recording-service]

The default value of \`maxIdleTime\` in the \`start\` method is 30 seconds. If the host frequently goes online and offline, a brief \`maxIdleTime\` value causes the recording service to join and exit the channel frequently. For use-cases that require the recording service to be in the channel all the time, it is necessary to increase \`maxIdleTime\` in case the recording quits after a short idle time.

For example, if there is a fixed 5-minute break in each class, you can set \`maxIdleTime\` to 10 minutes to ensure uninterrupted recording of the entire class.

## Fault recovery [#fault-recovery]

Network failures and potential risks may occur due to factors such as cloud and network software, infrastructure, and other elements outside of Agora's control. To enhance the user experience, Cloud Recording offers automatic high availability task migration for failure recovery. When a failure is detected, the recording task will be migrated within 90 seconds. During this time, the recording may be disrupted and recorded files may be lost.

To guarantee high availability of important scenes with a large audience, best practice is to:

1. Monitor recording tasks with calls to the [query](/en/api-reference/api-ref/cloud-recording#query) method.

   If the call returns a \`404\` error, create a new recording task with a different UID.

2. Use Notifications to [Handle notifications for specific events](/en/realtime-media/cloud-recording/build/handle-events/receive-notifications#handle-notifications-for-specific-events). After starting the recording, if you don't receive event \`13\` \`High availability register success\` within 10 seconds, create a new recording task with a different UID.

These fault recovery methods may result in multiple recording tasks. You are charged separately for each task. For more information, see [Pricing](/en/realtime-media/cloud-recording/reference/pricing).

### Switch the domain name [#switch-the-domain-name]

To ensure high availability of REST services, Agora enables you to switch domain names when you experience service outage due to regional network failures. Take the following steps to set up and switch your domain name:

1. Set the primary domain name based on the location of your service server:
   * If the DNS address of the service server is located in a country or region other than mainland China, set the primary domain name to \`api.agora.io\`.
   * If the DNS address of the service server is in mainland China, set the primary domain name to \`api.sd-rtn.com\`.

2. If your attempt to initiate a RESTful API request using the primary domain fails, set up your retry strategy as follows:

   1. **Primary domain retry**: Retry using the same primary domain name.

   2. **Alternate domain retry**:
      * If the current primary domain name is \`api.sd-rtn.com\`, use \`api.agora.io\` as the alternate domain name.
      * If the current primary domain name is \`api.agora.io\`, use \`api.sd-rtn.com\` as the alternate domain name.

   3. **Adjacent domain retry**: If alternate domain retry fails, retry using the domain name adjacent to the current region.

      For example, suppose your business server is located in Europe. You set the primary domain name to \`api.agora.io\`, and the business server resolves the primary domain name to Germany. Germany is located in central Europe (\`api-eu-central-1.agora.io\`). The [domain name table](#domain-name-table) shows that the adjacent area is West Europe. Use the \`api-eu-west-1.agora.io\` or \`api-eu-west-1.sd-rtn.com\` domain name to retry.

#### Precautions [#precautions]

Take the following precautions when setting up your retry strategy:

* To avoid exceeding the QPS limit with retry requests, best practice is to use a back-off strategy. For example, wait 1 second before you retry for the first time, wait 3 seconds before retrying the second time, and wait 6 seconds before retry a third time.

* If the request fails because of a network problem rather than a DNS domain name resolution problem, skip alternate domain retry and proceed to adjacent domain retry.

* Before switching to the region domain name, ensure that the REST services you wish to use, for example, cloud recording or channel management, are deployed in that region.

### Domain name table [#domain-name-table]

The following table shows the primary and region domain names for various regions.

| Primary domain name | Region domain name              | Region                 |
| :------------------ | :------------------------------ | :--------------------- |
| \`api.sd-rtn.com\`    | \`api-us-west-1.sd-rtn.com\`      | Western United States  |
|                     | \`api-us-east-1.sd-rtn.com\`      | Eastern United States  |
|                     | \`api-ap-southeast-1.sd-rtn.com\` | Southeast Asia Pacific |
|                     | \`api-ap-northeast-1.sd-rtn.com\` | Northeast Asia Pacific |
|                     | \`api-eu-west-1.sd-rtn.com\`      | Western Europe         |
|                     | \`api-eu-central-1.sd-rtn.com\`   | Central Europe         |
|                     | \`api-cn-east-1.sd-rtn.com\`      | East China             |
|                     | \`api-cn-north-1.sd-rtn.com\`     | North China            |
| \`api.agora.io\`      | \`api-us-west-1.agora.io\`        | Western United States  |
|                     | \`api-us-east-1.agora.io\`        | Eastern United States  |
|                     | \`api-ap-southeast-1.agora.io\`   | Southeast Asia Pacific |
|                     | \`api-ap-northeast-1.agora.io\`   | Northeast Asia Pacific |
|                     | \`api-eu-west-1.agora.io\`        | Western Europe         |
|                     | \`api-eu-central-1.agora.io\`     | Central Europe         |
|                     | \`api-cn-east-1.agora.io\`        | East China             |
|                     | \`api-cn-north-1.agora.io\`       | North China            |

## Reference [#reference]

### Integration requirements checklist [#integration-requirements-checklist]

To ensure reliability of the cloud recording service, refer to the following checklist to confirm that your solution meets the integration requirements:

| Serial | Importance | Item                                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------ | ---------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | required   | Subscribe to a service                                      | Make sure you have activated the cloud recording service.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2      | required   | request method                                              | * To query, use the \`POST\` request method; to query the recording status use \`GET\`.
* Request URLs and request body content are case-sensitive.                                                                                                                                                                                                                                                                                                                                                                                               |
| 3      | required   | Get recording resources                                     | - The passed in \`uid\` cannot duplicate any UID within the current channel.
- For page recording, make sure an \`appid + cname + uid\` corresponds to a resource ID.
- Make sure that a resource ID is only used for one cloud recording service.
- Make sure to call the \`start\` method.                                                                                                                                                                                                                                                        |
| 4      | required   | channel scene                                               | Make sure that the channel scene (\`channelType\`) is consistent with the settings of the RTC SDK.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 5      | required   | recording parameters                                        | * Make sure that the type, case, and value range of all the parameters passed in when starting the recording are correct, and the required parameters are filled; otherwise, error code 2 is returned.
* Set the layout and video bit rate of the combined recording by referring to the combined layout document and the recording bit rate comparison table.                                                                                                                                                                                |
| 6      | required   | Confirm that the recording service has started successfully | - Make sure that the start request is successful, that is, the \`sid\` (recording ID) is successfully obtained.
- Call the query method 5 seconds after getting the \`sid\` using the backoff strategy. If the returned status is still not \`4\` or \`5\`, after 90 seconds, it can be considered that the recording has not started or exited after a timeout.                                                                                                                                                                                      |
| 7      | required   | PCW & QPS limits                                            | * Make sure that each App ID does not exceed 10 requests per second (QPS).
* To increase the QPS and PCW limits, please contact technical support.                                                                                                                                                                                                                                                                                                                                                                                            |
| 8      | optional   | NCS Service Activation                                      | Activate the cloud recording callback service and subscribe to the following events as an auxiliary means of monitoring the recording service status:* \`40 recorder_started\`: The recording service has started.
* \`11 session_exit\`: The recording service ended the task and exited.
* \`1 cloud_recording_error\`: An error occurred in the recording service.
* \`12 session_failover\`: Enable high availability mechanism for recording.
* \`31 uploaded\`: All recorded files have been uploaded to the specified third-party cloud storage. |
| 9      | optional   | Use dual domain names                                       | If the request fails with the primary domain name \`api.agora.io\`, try again with the primary domain name. If it fails again, switch to the secondary domain name \`api.sd-rtn.com\` and send the request again.                                                                                                                                                                                                                                                                                                                                 |
| 10     | optional   | timeout logic                                               | Make sure that the \`maxIdleTime\` setting is reasonable. The recommended value is 300 seconds.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "To improve application robustness, Agora recommends that you do the following when integrating Cloud Recording RESTful APIs:"
  }, {
    heading: "failover",
    content: "In response to network failures, as well as risks that arise from factors such as non-Agora cloud services, non-Agora software, infrastructure, and force majeure, Agora cloud recording provides high-availability automatic task migration services. When the fault is confirmed, the migration is completed in the shortest possible time (estimated to be within 90 seconds). During this period, there are risks such as recording interruption and recording file loss."
  }, {
    heading: "failover",
    content: "For use-cases with a large number of viewers in the channel or extremely high requirements for high availability, consider whether you can accept the impact of high availability migration based on your own business characteristics, and decide whether to adopt higher quality assurance measures, such as Multi-channel task assurance, or Monitor service status during a recording through periodic channel query and message notification service, and re-initiate new recording tasks in a timely manner using a different `uid`."
  }, {
    heading: "multi-channel-task-assurance",
    content: "If you need higher quality assurance than failover, use a multi-tasking assurance strategy. Each cloud recording task is billed separately. Please see Pricing for details on the billing method. Take the following steps to implement this strategy:"
  }, {
    heading: "multi-channel-task-assurance",
    content: "Initiate the main task and a backup task at the same time to achieve multi-channel recording of the same channel. To do this, use the same `appId` and `cname`, and different `uid`s to initiate multiple recording tasks. When initiating a subsequent recording task, set the `clientRequest.excludeResourceIds` field in the `acquire` request's body to the previous recording task or several previous recording tasks. This prevents the subsequent task from using resources in the area where the previous recording task is located. When the network in the area where the previous recording task is located fails, the subsequent recording task will not be affected."
  }, {
    heading: "multi-channel-task-assurance",
    content: "Listening to the following callback events on the client side promptly notifies the audience to subscribe to the backup task `uid`:"
  }, {
    heading: "multi-channel-task-assurance",
    content: "Anchor offline `callbackonUserOffline`"
  }, {
    heading: "multi-channel-task-assurance",
    content: "Anchor audio and video status change callbacks `onRemoteAudioStateChanged` and `onRemoteVideoStateChanged`"
  }, {
    heading: "use-dual-domain-names",
    content: "If you send a Cloud Recording RESTful API request to `api.agora.io` and the request fails, retry with the same domain name first. If it fails again, replace the domain name with `api.sd-rtn.com` and retry. Best practice is to first try the DNS domain close to your server. See the domain name table for a list of DNS servers."
  }, {
    heading: "use-dual-domain-names",
    content: "Agora recommends that you use a backoff strategy, for example, retry after 1, 3, and 6 seconds successively, to avoid exceeding the Queries Per Second limits."
  }, {
    heading: "check-the-limits",
    content: "Check that your Peak Concurrent Worker (PCW), Queries Per Second (QPS), and the number of streams do not exceed the following limits set by Agora."
  }, {
    heading: "pcw",
    content: "The PCW limit is set to 50 for all regions and resolutions. If you need to extend the PCW limit, please contact support\\@agora.io."
  }, {
    heading: "qps",
    content: "The initial QPS limit is 10 per App ID when you register. You can estimate the QPS that your project needs based on your PCW value and query frequency. If you need to extend the limit for QPS, contact support\\@agora.io."
  }, {
    heading: "number-of-streams",
    content: "The upper limit of video attributes supported by Agora is as follows:"
  }, {
    heading: "number-of-streams",
    content: "Resolution 1920 × 1080"
  }, {
    heading: "number-of-streams",
    content: "Frame rate 30 FPS"
  }, {
    heading: "number-of-streams",
    content: "The maximum number of supported streams is as follows:"
  }, {
    heading: "number-of-streams",
    content: "Service type"
  }, {
    heading: "number-of-streams",
    content: "Mainland China"
  }, {
    heading: "number-of-streams",
    content: "Europe"
  }, {
    heading: "number-of-streams",
    content: "America"
  }, {
    heading: "number-of-streams",
    content: "Asia (excluding mainland China)"
  }, {
    heading: "number-of-streams",
    content: "Cloud recording"
  }, {
    heading: "number-of-streams",
    content: `* SD 100
* HD 50
* FHD 30`
  }, {
    heading: "number-of-streams",
    content: `* SD 50
* HD 30
* FHD 10`
  }, {
    heading: "number-of-streams",
    content: `* SD 50
* HD 50
* FHD 30`
  }, {
    heading: "number-of-streams",
    content: `* SD 50
* HD 50
* FHD 30`
  }, {
    heading: "number-of-streams",
    content: "If you need to record multiple streams of different resolutions at the same time, make sure you meet the following requirements:"
  }, {
    heading: "number-of-streams",
    content: "The number of streams per resolution cannot exceed the corresponding limit for that resolution."
  }, {
    heading: "number-of-streams",
    content: "The total number of streams cannot exceed the limit set for the higher resolution. For example, if you need to use cloud recording in Europe to record in both SD and HD, the total number of streams cannot exceed 50. If you record in both HD and FHD, the total number cannot exceed 30."
  }, {
    heading: "get-service-status",
    content: "You use Cloud Recording RESTful APIs to get the status of the recording service."
  }, {
    heading: "get-service-status",
    content: "Best practice is that core apps do not rely on Notifications (NCS). If your apps already rely heavily on the NCS, contact support\\@agora.io and enable the redundant message notification function. This doubles the received notifications and reduces the probability of message loss. After enabling the message notification function, you need to deduplicate messages based on `sid`. Message notification still cannot guarantee a 100% arrival rate."
  }, {
    heading: "ensure-the-recording-service-starts-successfully",
    content: "Take the following steps to ensure that the recording service starts successfully:"
  }, {
    heading: "ensure-the-recording-service-starts-successfully",
    content: "Ensure that the `start` request is successful, that is, you receive a `sid` (recording ID) from the response. If the request fails, take measures according to the HTTP status code:"
  }, {
    heading: "ensure-the-recording-service-starts-successfully",
    content: "If the returned HTTP status code is always `40x`, check the parameter values in your request."
  }, {
    heading: "ensure-the-recording-service-starts-successfully",
    content: "If the returned HTTP status code is `50x`, you can retry several times with the same parameters until you receive a `sid`. Agora recommends that you use a backoff strategy, for example, retry after 3, 6, and 9 seconds successively, to avoid exceeding the QPS limits. If you retry three times and still do not get a `sid`, retry with a new user ID."
  }, {
    heading: "ensure-the-recording-service-starts-successfully",
    content: "If you receive error code `65`, retry with the same parameters. Agora recommends that you use a backoff strategy, for example, retry after 3 and 6 seconds successively."
  }, {
    heading: "ensure-the-recording-service-starts-successfully",
    content: "Five seconds after you receive a `sid`, use a backoff strategy to call `query`. Agora recommends that the interval between two `query` calls is shorter than `maxIdleTime`, which you set in the `start` call. If the `query` call succeeds, and `status` in `serverResponse` is `4` or `5`, it means the recording service starts successfully. Otherwise, you can deem the recording service as not having started, or quit halfway after starting."
  }, {
    heading: "ensure-the-recording-service-starts-successfully",
    content: "Agora recommends that you prepare a backup user ID, which you can use when restarting the recording service, to avoid two identical user IDs kicking each other out of the channel. You can alternate between the backup user ID and the original one."
  }, {
    heading: "monitor-service-status-during-a-recording",
    content: "You can periodically call `query` to ensure that the recording service is in progress and in a normal state. Apart from `query`, you can use the NCS as a complementary method to monitor the service status. See Comparison Between the NCS and the `query` Method for detailed comparison between the two methods."
  }, {
    heading: "periodically-query-service-status",
    content: "If the reliability of the status of a cloud recording is a high priority, Agora strongly recommends using the `query` method to periodically query the recording service status. The interval between two calls can be around two minutes. Take the corresponding measure based on the received HTTP status code:"
  }, {
    heading: "periodically-query-service-status",
    content: "If the returned HTTP status code is always `40x`, check the parameter values in your request."
  }, {
    heading: "periodically-query-service-status",
    content: "If the returned HTTP status code is `404`, and the request parameters are confirmed to be correct, the recording has either not started successfully, or the recording quit after starting. Agora recommends that you use a backoff strategy, for example, retry after 5, 10, and 15 seconds successively."
  }, {
    heading: "periodically-query-service-status",
    content: "If the returned HTTP status code is `50x`, the `query` request failed, but it is not clear whether the recording has quit. The `50x` error is rare. You can continue to use the backoff strategy (waiting for 5 seconds, 10 seconds, 15 seconds, or 30 seconds) to call `query`."
  }, {
    heading: "redundant-message-notifications",
    content: "After enabling the redundant message notification function, you need to deduplicate messages based on `sid`. For example, if you need to start recording again after a recording session times out and quits, the process is:"
  }, {
    heading: "redundant-message-notifications",
    content: "Your server receives the notifications of event `31`, `32`, or `11`, which means that the recording service quits normally."
  }, {
    heading: "redundant-message-notifications",
    content: "After receiving the notifications, your application calls `acquire` to restart the recording service."
  }, {
    heading: "redundant-message-notifications",
    content: "During this period, your server receives notifications of event `31`, `32`, or `11` again. If `sid` contained in the above notifications is identical to the previous ones, you can ignore them as redundant notifications."
  }, {
    heading: "redundant-message-notifications",
    content: "Call `query` if you need to fully ensure that the recording service successfully starts."
  }, {
    heading: "redundant-message-notifications",
    content: "When the recording service enables the high availability mechanism, some notifications may be sent twice. You can distinguish them by the user ID in the notification. If the user ID is the same as the one you use when you start the recording, the notification belongs to the original recording session; otherwise, the notification belongs to the recording session initiated by the high availability mechanism."
  }, {
    heading: "obtain-the-m3u8-file-name",
    content: "You can obtain the M3U8 file name by two means. One is by splicing according to the file naming rules. The other is by calling the `query` method. Agora recommends that you use splicing to obtain the M3U8 file name."
  }, {
    heading: "obtain-file-name-by-splicing",
    content: "In composite recording mode, the format of the M3U8 file name is `<sid>_<cname>.m3u8`. Therefore, you can predict the M3U8 file name by splicing. See Naming conventions for details."
  }, {
    heading: "obtain-file-name-via-the-query-call",
    content: "The M3U8 file name is generated after the first slice file is generated. Therefore, you should call `query` after the first slicing completes. See Slicing for details."
  }, {
    heading: "obtain-file-name-via-the-query-call",
    content: "In composite recording mode, call `query` 15 seconds after the cloud recording starts; in individual recording mode, call `query` one minute after the cloud recording starts. If the first `query` call fails, you can try again after one minute."
  }, {
    heading: "avoid-frequent-quits-of-the-recording-service",
    content: "The default value of `maxIdleTime` in the `start` method is 30 seconds. If the host frequently goes online and offline, a brief `maxIdleTime` value causes the recording service to join and exit the channel frequently. For use-cases that require the recording service to be in the channel all the time, it is necessary to increase `maxIdleTime` in case the recording quits after a short idle time."
  }, {
    heading: "avoid-frequent-quits-of-the-recording-service",
    content: "For example, if there is a fixed 5-minute break in each class, you can set `maxIdleTime` to 10 minutes to ensure uninterrupted recording of the entire class."
  }, {
    heading: "fault-recovery",
    content: "Network failures and potential risks may occur due to factors such as cloud and network software, infrastructure, and other elements outside of Agora's control. To enhance the user experience, Cloud Recording offers automatic high availability task migration for failure recovery. When a failure is detected, the recording task will be migrated within 90 seconds. During this time, the recording may be disrupted and recorded files may be lost."
  }, {
    heading: "fault-recovery",
    content: "To guarantee high availability of important scenes with a large audience, best practice is to:"
  }, {
    heading: "fault-recovery",
    content: "Monitor recording tasks with calls to the query method."
  }, {
    heading: "fault-recovery",
    content: "If the call returns a `404` error, create a new recording task with a different UID."
  }, {
    heading: "fault-recovery",
    content: "Use Notifications to Handle notifications for specific events. After starting the recording, if you don't receive event `13` `High availability register success` within 10 seconds, create a new recording task with a different UID."
  }, {
    heading: "fault-recovery",
    content: "These fault recovery methods may result in multiple recording tasks. You are charged separately for each task. For more information, see Pricing."
  }, {
    heading: "switch-the-domain-name",
    content: "To ensure high availability of REST services, Agora enables you to switch domain names when you experience service outage due to regional network failures. Take the following steps to set up and switch your domain name:"
  }, {
    heading: "switch-the-domain-name",
    content: "Set the primary domain name based on the location of your service server:"
  }, {
    heading: "switch-the-domain-name",
    content: "If the DNS address of the service server is located in a country or region other than mainland China, set the primary domain name to `api.agora.io`."
  }, {
    heading: "switch-the-domain-name",
    content: "If the DNS address of the service server is in mainland China, set the primary domain name to `api.sd-rtn.com`."
  }, {
    heading: "switch-the-domain-name",
    content: "If your attempt to initiate a RESTful API request using the primary domain fails, set up your retry strategy as follows:"
  }, {
    heading: "switch-the-domain-name",
    content: "**Primary domain retry**: Retry using the same primary domain name."
  }, {
    heading: "switch-the-domain-name",
    content: "**Alternate domain retry**:"
  }, {
    heading: "switch-the-domain-name",
    content: "If the current primary domain name is `api.sd-rtn.com`, use `api.agora.io` as the alternate domain name."
  }, {
    heading: "switch-the-domain-name",
    content: "If the current primary domain name is `api.agora.io`, use `api.sd-rtn.com` as the alternate domain name."
  }, {
    heading: "switch-the-domain-name",
    content: "**Adjacent domain retry**: If alternate domain retry fails, retry using the domain name adjacent to the current region."
  }, {
    heading: "switch-the-domain-name",
    content: "For example, suppose your business server is located in Europe. You set the primary domain name to `api.agora.io`, and the business server resolves the primary domain name to Germany. Germany is located in central Europe (`api-eu-central-1.agora.io`). The domain name table shows that the adjacent area is West Europe. Use the `api-eu-west-1.agora.io` or `api-eu-west-1.sd-rtn.com` domain name to retry."
  }, {
    heading: "precautions",
    content: "Take the following precautions when setting up your retry strategy:"
  }, {
    heading: "precautions",
    content: "To avoid exceeding the QPS limit with retry requests, best practice is to use a back-off strategy. For example, wait 1 second before you retry for the first time, wait 3 seconds before retrying the second time, and wait 6 seconds before retry a third time."
  }, {
    heading: "precautions",
    content: "If the request fails because of a network problem rather than a DNS domain name resolution problem, skip alternate domain retry and proceed to adjacent domain retry."
  }, {
    heading: "precautions",
    content: "Before switching to the region domain name, ensure that the REST services you wish to use, for example, cloud recording or channel management, are deployed in that region."
  }, {
    heading: "domain-name-table",
    content: "The following table shows the primary and region domain names for various regions."
  }, {
    heading: "domain-name-table",
    content: "Primary domain name"
  }, {
    heading: "domain-name-table",
    content: "Region domain name"
  }, {
    heading: "domain-name-table",
    content: "Region"
  }, {
    heading: "domain-name-table",
    content: "`api.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "`api-us-west-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "Western United States"
  }, {
    heading: "domain-name-table",
    content: "`api-us-east-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "Eastern United States"
  }, {
    heading: "domain-name-table",
    content: "`api-ap-southeast-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "Southeast Asia Pacific"
  }, {
    heading: "domain-name-table",
    content: "`api-ap-northeast-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "Northeast Asia Pacific"
  }, {
    heading: "domain-name-table",
    content: "`api-eu-west-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "Western Europe"
  }, {
    heading: "domain-name-table",
    content: "`api-eu-central-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "Central Europe"
  }, {
    heading: "domain-name-table",
    content: "`api-cn-east-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "East China"
  }, {
    heading: "domain-name-table",
    content: "`api-cn-north-1.sd-rtn.com`"
  }, {
    heading: "domain-name-table",
    content: "North China"
  }, {
    heading: "domain-name-table",
    content: "`api.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "`api-us-west-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "Western United States"
  }, {
    heading: "domain-name-table",
    content: "`api-us-east-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "Eastern United States"
  }, {
    heading: "domain-name-table",
    content: "`api-ap-southeast-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "Southeast Asia Pacific"
  }, {
    heading: "domain-name-table",
    content: "`api-ap-northeast-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "Northeast Asia Pacific"
  }, {
    heading: "domain-name-table",
    content: "`api-eu-west-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "Western Europe"
  }, {
    heading: "domain-name-table",
    content: "`api-eu-central-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "Central Europe"
  }, {
    heading: "domain-name-table",
    content: "`api-cn-east-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "East China"
  }, {
    heading: "domain-name-table",
    content: "`api-cn-north-1.agora.io`"
  }, {
    heading: "domain-name-table",
    content: "North China"
  }, {
    heading: "integration-requirements-checklist",
    content: "To ensure reliability of the cloud recording service, refer to the following checklist to confirm that your solution meets the integration requirements:"
  }, {
    heading: "integration-requirements-checklist",
    content: "Serial"
  }, {
    heading: "integration-requirements-checklist",
    content: "Importance"
  }, {
    heading: "integration-requirements-checklist",
    content: "Item"
  }, {
    heading: "integration-requirements-checklist",
    content: "Description"
  }, {
    heading: "integration-requirements-checklist",
    content: "1"
  }, {
    heading: "integration-requirements-checklist",
    content: "required"
  }, {
    heading: "integration-requirements-checklist",
    content: "Subscribe to a service"
  }, {
    heading: "integration-requirements-checklist",
    content: "Make sure you have activated the cloud recording service."
  }, {
    heading: "integration-requirements-checklist",
    content: "2"
  }, {
    heading: "integration-requirements-checklist",
    content: "required"
  }, {
    heading: "integration-requirements-checklist",
    content: "request method"
  }, {
    heading: "integration-requirements-checklist",
    content: "* To query, use the `POST` request method; to query the recording status use `GET`.\n* Request URLs and request body content are case-sensitive."
  }, {
    heading: "integration-requirements-checklist",
    content: "3"
  }, {
    heading: "integration-requirements-checklist",
    content: "required"
  }, {
    heading: "integration-requirements-checklist",
    content: "Get recording resources"
  }, {
    heading: "integration-requirements-checklist",
    content: "* The passed in `uid` cannot duplicate any UID within the current channel.\n* For page recording, make sure an `appid + cname + uid` corresponds to a resource ID.\n* Make sure that a resource ID is only used for one cloud recording service.\n* Make sure to call the `start` method."
  }, {
    heading: "integration-requirements-checklist",
    content: "4"
  }, {
    heading: "integration-requirements-checklist",
    content: "required"
  }, {
    heading: "integration-requirements-checklist",
    content: "channel scene"
  }, {
    heading: "integration-requirements-checklist",
    content: "Make sure that the channel scene (`channelType`) is consistent with the settings of the RTC SDK."
  }, {
    heading: "integration-requirements-checklist",
    content: "5"
  }, {
    heading: "integration-requirements-checklist",
    content: "required"
  }, {
    heading: "integration-requirements-checklist",
    content: "recording parameters"
  }, {
    heading: "integration-requirements-checklist",
    content: `* Make sure that the type, case, and value range of all the parameters passed in when starting the recording are correct, and the required parameters are filled; otherwise, error code 2 is returned.
* Set the layout and video bit rate of the combined recording by referring to the combined layout document and the recording bit rate comparison table.`
  }, {
    heading: "integration-requirements-checklist",
    content: "6"
  }, {
    heading: "integration-requirements-checklist",
    content: "required"
  }, {
    heading: "integration-requirements-checklist",
    content: "Confirm that the recording service has started successfully"
  }, {
    heading: "integration-requirements-checklist",
    content: "* Make sure that the start request is successful, that is, the `sid` (recording ID) is successfully obtained.\n* Call the query method 5 seconds after getting the `sid` using the backoff strategy. If the returned status is still not `4` or `5`, after 90 seconds, it can be considered that the recording has not started or exited after a timeout."
  }, {
    heading: "integration-requirements-checklist",
    content: "7"
  }, {
    heading: "integration-requirements-checklist",
    content: "required"
  }, {
    heading: "integration-requirements-checklist",
    content: "PCW & QPS limits"
  }, {
    heading: "integration-requirements-checklist",
    content: `* Make sure that each App ID does not exceed 10 requests per second (QPS).
* To increase the QPS and PCW limits, please contact technical support.`
  }, {
    heading: "integration-requirements-checklist",
    content: "8"
  }, {
    heading: "integration-requirements-checklist",
    content: "optional"
  }, {
    heading: "integration-requirements-checklist",
    content: "NCS Service Activation"
  }, {
    heading: "integration-requirements-checklist",
    content: "Activate the cloud recording callback service and subscribe to the following events as an auxiliary means of monitoring the recording service status:- `40 recorder_started`: The recording service has started.\n- `11 session_exit`: The recording service ended the task and exited.\n- `1 cloud_recording_error`: An error occurred in the recording service.\n- `12 session_failover`: Enable high availability mechanism for recording.\n- `31 uploaded`: All recorded files have been uploaded to the specified third-party cloud storage."
  }, {
    heading: "integration-requirements-checklist",
    content: "9"
  }, {
    heading: "integration-requirements-checklist",
    content: "optional"
  }, {
    heading: "integration-requirements-checklist",
    content: "Use dual domain names"
  }, {
    heading: "integration-requirements-checklist",
    content: "If the request fails with the primary domain name `api.agora.io`, try again with the primary domain name. If it fails again, switch to the secondary domain name `api.sd-rtn.com` and send the request again."
  }, {
    heading: "integration-requirements-checklist",
    content: "10"
  }, {
    heading: "integration-requirements-checklist",
    content: "optional"
  }, {
    heading: "integration-requirements-checklist",
    content: "timeout logic"
  }, {
    heading: "integration-requirements-checklist",
    content: "Make sure that the `maxIdleTime` setting is reasonable. The recommended value is 300 seconds."
  }],
  headings: [{
    id: "failover",
    content: "Failover"
  }, {
    id: "multi-channel-task-assurance",
    content: "Multi-channel task assurance"
  }, {
    id: "use-dual-domain-names",
    content: "Use dual domain names"
  }, {
    id: "check-the-limits",
    content: "Check the limits"
  }, {
    id: "pcw",
    content: "PCW"
  }, {
    id: "qps",
    content: "QPS"
  }, {
    id: "number-of-streams",
    content: "Number of streams"
  }, {
    id: "get-service-status",
    content: "Get service status"
  }, {
    id: "ensure-the-recording-service-starts-successfully",
    content: "Ensure the recording service starts successfully"
  }, {
    id: "monitor-service-status-during-a-recording",
    content: "Monitor service status during a recording"
  }, {
    id: "periodically-query-service-status",
    content: "Periodically query service status"
  }, {
    id: "redundant-message-notifications",
    content: "Redundant message notifications"
  }, {
    id: "obtain-the-m3u8-file-name",
    content: "Obtain the M3U8 file name"
  }, {
    id: "obtain-file-name-by-splicing",
    content: "Obtain file name by splicing"
  }, {
    id: "obtain-file-name-via-the-query-call",
    content: "Obtain file name via the `query` call"
  }, {
    id: "avoid-frequent-quits-of-the-recording-service",
    content: "Avoid frequent quits of the recording service"
  }, {
    id: "fault-recovery",
    content: "Fault recovery"
  }, {
    id: "switch-the-domain-name",
    content: "Switch the domain name"
  }, {
    id: "precautions",
    content: "Precautions"
  }, {
    id: "domain-name-table",
    content: "Domain name table"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "integration-requirements-checklist",
    content: "Integration requirements checklist"
  }]
};
export let toc = [{
  depth: 2,
  url: "#failover",
  title: _jsx(_Fragment, {
    children: "Failover"
  })
}, {
  depth: 2,
  url: "#multi-channel-task-assurance",
  title: _jsx(_Fragment, {
    children: "Multi-channel task assurance"
  })
}, {
  depth: 2,
  url: "#use-dual-domain-names",
  title: _jsx(_Fragment, {
    children: "Use dual domain names"
  })
}, {
  depth: 2,
  url: "#check-the-limits",
  title: _jsx(_Fragment, {
    children: "Check the limits"
  })
}, {
  depth: 4,
  url: "#pcw",
  title: _jsx(_Fragment, {
    children: "PCW"
  })
}, {
  depth: 4,
  url: "#qps",
  title: _jsx(_Fragment, {
    children: "QPS"
  })
}, {
  depth: 4,
  url: "#number-of-streams",
  title: _jsx(_Fragment, {
    children: "Number of streams"
  })
}, {
  depth: 2,
  url: "#get-service-status",
  title: _jsx(_Fragment, {
    children: "Get service status"
  })
}, {
  depth: 3,
  url: "#ensure-the-recording-service-starts-successfully",
  title: _jsx(_Fragment, {
    children: "Ensure the recording service starts successfully"
  })
}, {
  depth: 3,
  url: "#monitor-service-status-during-a-recording",
  title: _jsx(_Fragment, {
    children: "Monitor service status during a recording"
  })
}, {
  depth: 4,
  url: "#periodically-query-service-status",
  title: _jsx(_Fragment, {
    children: "Periodically query service status"
  })
}, {
  depth: 4,
  url: "#redundant-message-notifications",
  title: _jsx(_Fragment, {
    children: "Redundant message notifications"
  })
}, {
  depth: 3,
  url: "#obtain-the-m3u8-file-name",
  title: _jsx(_Fragment, {
    children: "Obtain the M3U8 file name"
  })
}, {
  depth: 4,
  url: "#obtain-file-name-by-splicing",
  title: _jsx(_Fragment, {
    children: "Obtain file name by splicing"
  })
}, {
  depth: 4,
  url: "#obtain-file-name-via-the-query-call",
  title: _jsxs(_Fragment, {
    children: ["Obtain file name via the ", _jsx("code", {
      children: "query"
    }), " call"]
  })
}, {
  depth: 2,
  url: "#avoid-frequent-quits-of-the-recording-service",
  title: _jsx(_Fragment, {
    children: "Avoid frequent quits of the recording service"
  })
}, {
  depth: 2,
  url: "#fault-recovery",
  title: _jsx(_Fragment, {
    children: "Fault recovery"
  })
}, {
  depth: 3,
  url: "#switch-the-domain-name",
  title: _jsx(_Fragment, {
    children: "Switch the domain name"
  })
}, {
  depth: 4,
  url: "#precautions",
  title: _jsx(_Fragment, {
    children: "Precautions"
  })
}, {
  depth: 3,
  url: "#domain-name-table",
  title: _jsx(_Fragment, {
    children: "Domain name table"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#integration-requirements-checklist",
  title: _jsx(_Fragment, {
    children: "Integration requirements checklist"
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
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "To improve application robustness, Agora recommends that you do the following when integrating Cloud Recording RESTful APIs:"
    }), `
`, _jsx(_components.h2, {
      id: "failover",
      children: "Failover"
    }), `
`, _jsx(_components.p, {
      children: "In response to network failures, as well as risks that arise from factors such as non-Agora cloud services, non-Agora software, infrastructure, and force majeure, Agora cloud recording provides high-availability automatic task migration services. When the fault is confirmed, the migration is completed in the shortest possible time (estimated to be within 90 seconds). During this period, there are risks such as recording interruption and recording file loss."
    }), `
`, _jsxs(_components.p, {
      children: ["For use-cases with a large number of viewers in the channel or extremely high requirements for high availability, consider whether you can accept the impact of high availability migration based on your own business characteristics, and decide whether to adopt higher quality assurance measures, such as ", _jsx(_components.a, {
        href: "#multi-channel-task-assurance",
        children: "Multi-channel task assurance"
      }), ", or ", _jsx(_components.a, {
        href: "#monitor-service-status-during-a-recording",
        children: "Monitor service status during a recording"
      }), " through periodic channel query and message notification service, and re-initiate new recording tasks in a timely manner using a different ", _jsx(_components.code, {
        children: "uid"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "multi-channel-task-assurance",
      children: "Multi-channel task assurance"
    }), `
`, _jsxs(_components.p, {
      children: ["If you need higher quality assurance than failover, use a multi-tasking assurance strategy. Each cloud recording task is billed separately. Please see ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/reference/pricing",
        children: "Pricing"
      }), " for details on the billing method. Take the following steps to implement this strategy:"]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Initiate the main task and a backup task at the same time to achieve multi-channel recording of the same channel. To do this, use the same ", _jsx(_components.code, {
            children: "appId"
          }), " and ", _jsx(_components.code, {
            children: "cname"
          }), ", and different ", _jsx(_components.code, {
            children: "uid"
          }), "s to initiate multiple recording tasks. When initiating a subsequent recording task, set the ", _jsx(_components.code, {
            children: "clientRequest.excludeResourceIds"
          }), " field in the ", _jsx(_components.code, {
            children: "acquire"
          }), " request's body to the previous recording task or several previous recording tasks. This prevents the subsequent task from using resources in the area where the previous recording task is located. When the network in the area where the previous recording task is located fails, the subsequent recording task will not be affected."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Listening to the following callback events on the client side promptly notifies the audience to subscribe to the backup task ", _jsx(_components.code, {
            children: "uid"
          }), ":"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Anchor offline ", _jsx(_components.code, {
              children: "callbackonUserOffline"
            })]
          }), `
`, _jsxs(_components.li, {
            children: ["Anchor audio and video status change callbacks ", _jsx(_components.code, {
              children: "onRemoteAudioStateChanged"
            }), " and ", _jsx(_components.code, {
              children: "onRemoteVideoStateChanged"
            })]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "use-dual-domain-names",
      children: "Use dual domain names"
    }), `
`, _jsxs(_components.p, {
      children: ["If you send a Cloud Recording RESTful API request to ", _jsx(_components.code, {
        children: "api.agora.io"
      }), " and the request fails, retry with the same domain name first. If it fails again, replace the domain name with ", _jsx(_components.code, {
        children: "api.sd-rtn.com"
      }), " and retry. Best practice is to first try the DNS domain close to your server. See the ", _jsx(_components.a, {
        href: "#domain-name-table",
        children: "domain name table"
      }), " for a list of DNS servers."]
    }), `
`, _jsx(_components.p, {
      children: "Agora recommends that you use a backoff strategy, for example, retry after 1, 3, and 6 seconds successively, to avoid exceeding the Queries Per Second limits."
    }), `
`, _jsx(_components.h2, {
      id: "check-the-limits",
      children: "Check the limits"
    }), `
`, _jsx(_components.p, {
      children: "Check that your Peak Concurrent Worker (PCW), Queries Per Second (QPS), and the number of streams do not exceed the following limits set by Agora."
    }), `
`, _jsx(_components.h4, {
      id: "pcw",
      children: "PCW"
    }), `
`, _jsxs(_components.p, {
      children: ["The PCW limit is set to 50 for all regions and resolutions. If you need to extend the PCW limit, please contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "qps",
      children: "QPS"
    }), `
`, _jsxs(_components.p, {
      children: ["The initial QPS limit is 10 per App ID when you register. You can estimate the QPS that your project needs based on your PCW value and query frequency. If you need to extend the limit for QPS, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "number-of-streams",
      children: "Number of streams"
    }), `
`, _jsx(_components.p, {
      children: "The upper limit of video attributes supported by Agora is as follows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Resolution 1920 × 1080"
      }), `
`, _jsx(_components.li, {
        children: "Frame rate 30 FPS"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The maximum number of supported streams is as follows:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Service type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Mainland China"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Europe"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "America"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Asia (excluding mainland China)"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Cloud recording"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "SD 100"
              }), `
`, _jsx(_components.li, {
                children: "HD 50"
              }), `
`, _jsx(_components.li, {
                children: "FHD 30"
              }), `
`]
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "SD 50"
              }), `
`, _jsx(_components.li, {
                children: "HD 30"
              }), `
`, _jsx(_components.li, {
                children: "FHD 10"
              }), `
`]
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "SD 50"
              }), `
`, _jsx(_components.li, {
                children: "HD 50"
              }), `
`, _jsx(_components.li, {
                children: "FHD 30"
              }), `
`]
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "SD 50"
              }), `
`, _jsx(_components.li, {
                children: "HD 50"
              }), `
`, _jsx(_components.li, {
                children: "FHD 30"
              }), `
`]
            })
          })]
        })
      })]
    }), `
`, _jsxs(CalloutContainer, {
      type: "warning",
      children: [_jsx(CalloutTitle, {
        children: "Note"
      }), _jsxs(CalloutDescription, {
        children: [_jsx(_components.p, {
          children: "If you need to record multiple streams of different resolutions at the same time, make sure you meet the following requirements:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "The number of streams per resolution cannot exceed the corresponding limit for that resolution."
          }), `
`, _jsx(_components.li, {
            children: "The total number of streams cannot exceed the limit set for the higher resolution. For example, if you need to use cloud recording in Europe to record in both SD and HD, the total number of streams cannot exceed 50. If you record in both HD and FHD, the total number cannot exceed 30."
          }), `
`]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "get-service-status",
      children: "Get service status"
    }), `
`, _jsx(_components.p, {
      children: "You use Cloud Recording RESTful APIs to get the status of the recording service."
    }), `
`, _jsxs(_components.p, {
      children: ["Best practice is that core apps do not rely on Notifications (NCS). If your apps already rely heavily on the NCS, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), " and enable the redundant message notification function. This doubles the received notifications and reduces the probability of message loss. After enabling the message notification function, you need to deduplicate messages based on ", _jsx(_components.code, {
        children: "sid"
      }), ". Message notification still cannot guarantee a 100% arrival rate."]
    }), `
`, _jsx(_components.h3, {
      id: "ensure-the-recording-service-starts-successfully",
      children: "Ensure the recording service starts successfully"
    }), `
`, _jsx(_components.p, {
      children: "Take the following steps to ensure that the recording service starts successfully:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Ensure that the ", _jsx(_components.code, {
            children: "start"
          }), " request is successful, that is, you receive a ", _jsx(_components.code, {
            children: "sid"
          }), " (recording ID) from the response. If the request fails, take measures according to the HTTP status code:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["If the returned HTTP status code is always ", _jsx(_components.code, {
              children: "40x"
            }), ", check the parameter values in your request."]
          }), `
`, _jsxs(_components.li, {
            children: ["If the returned HTTP status code is ", _jsx(_components.code, {
              children: "50x"
            }), ", you can retry several times with the same parameters until you receive a ", _jsx(_components.code, {
              children: "sid"
            }), ". Agora recommends that you use a backoff strategy, for example, retry after 3, 6, and 9 seconds successively, to avoid exceeding the QPS limits. If you retry three times and still do not get a ", _jsx(_components.code, {
              children: "sid"
            }), ", retry with a new user ID."]
          }), `
`, _jsxs(_components.li, {
            children: ["If you receive error code ", _jsx(_components.code, {
              children: "65"
            }), ", retry with the same parameters. Agora recommends that you use a backoff strategy, for example, retry after 3 and 6 seconds successively."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Five seconds after you receive a ", _jsx(_components.code, {
            children: "sid"
          }), ", use a backoff strategy to call ", _jsx(_components.code, {
            children: "query"
          }), ". Agora recommends that the interval between two ", _jsx(_components.code, {
            children: "query"
          }), " calls is shorter than ", _jsx(_components.code, {
            children: "maxIdleTime"
          }), ", which you set in the ", _jsx(_components.code, {
            children: "start"
          }), " call. If the ", _jsx(_components.code, {
            children: "query"
          }), " call succeeds, and ", _jsx(_components.code, {
            children: "status"
          }), " in ", _jsx(_components.code, {
            children: "serverResponse"
          }), " is ", _jsx(_components.code, {
            children: "4"
          }), " or ", _jsx(_components.code, {
            children: "5"
          }), ", it means the recording service starts successfully. Otherwise, you can deem the recording service as not having started, or quit halfway after starting."]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Agora recommends that you prepare a backup user ID, which you can use when restarting the recording service, to avoid two identical user IDs kicking each other out of the channel. You can alternate between the backup user ID and the original one."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "monitor-service-status-during-a-recording",
      children: "Monitor service status during a recording"
    }), `
`, _jsxs(_components.p, {
      children: ["You can periodically call ", _jsx(_components.code, {
        children: "query"
      }), " to ensure that the recording service is in progress and in a normal state. Apart from ", _jsx(_components.code, {
        children: "query"
      }), ", you can use the NCS as a complementary method to monitor the service status. See ", _jsxs(_components.a, {
        href: "../../reference/rest-api-overview#what-are-the-differences-between-the-message-notification-service-and-the-query-method",
        children: ["Comparison Between the NCS and the ", _jsx(_components.code, {
          children: "query"
        }), " Method"]
      }), " for detailed comparison between the two methods."]
    }), `
`, _jsx(_components.h4, {
      id: "periodically-query-service-status",
      children: "Periodically query service status"
    }), `
`, _jsxs(_components.p, {
      children: ["If the reliability of the status of a cloud recording is a high priority, Agora strongly recommends using the ", _jsx(_components.code, {
        children: "query"
      }), " method to periodically query the recording service status. The interval between two calls can be around two minutes. Take the corresponding measure based on the received HTTP status code:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["If the returned HTTP status code is always ", _jsx(_components.code, {
          children: "40x"
        }), ", check the parameter values in your request."]
      }), `
`, _jsxs(_components.li, {
        children: ["If the returned HTTP status code is ", _jsx(_components.code, {
          children: "404"
        }), ", and the request parameters are confirmed to be correct, the recording has either not started successfully, or the recording quit after starting. Agora recommends that you use a backoff strategy, for example, retry after 5, 10, and 15 seconds successively."]
      }), `
`, _jsxs(_components.li, {
        children: ["If the returned HTTP status code is ", _jsx(_components.code, {
          children: "50x"
        }), ", the ", _jsx(_components.code, {
          children: "query"
        }), " request failed, but it is not clear whether the recording has quit. The ", _jsx(_components.code, {
          children: "50x"
        }), " error is rare. You can continue to use the backoff strategy (waiting for 5 seconds, 10 seconds, 15 seconds, or 30 seconds) to call ", _jsx(_components.code, {
          children: "query"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "redundant-message-notifications",
      children: "Redundant message notifications"
    }), `
`, _jsxs(_components.p, {
      children: ["After enabling the redundant message notification function, you need to deduplicate messages based on ", _jsx(_components.code, {
        children: "sid"
      }), ". For example, if you need to start recording again after a recording session times out and quits, the process is:"]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Your server receives the notifications of event ", _jsx(_components.code, {
          children: "31"
        }), ", ", _jsx(_components.code, {
          children: "32"
        }), ", or ", _jsx(_components.code, {
          children: "11"
        }), ", which means that the recording service quits normally."]
      }), `
`, _jsxs(_components.li, {
        children: ["After receiving the notifications, your application calls ", _jsx(_components.code, {
          children: "acquire"
        }), " to restart the recording service."]
      }), `
`, _jsxs(_components.li, {
        children: ["During this period, your server receives notifications of event ", _jsx(_components.code, {
          children: "31"
        }), ", ", _jsx(_components.code, {
          children: "32"
        }), ", or ", _jsx(_components.code, {
          children: "11"
        }), " again. If ", _jsx(_components.code, {
          children: "sid"
        }), " contained in the above notifications is identical to the previous ones, you can ignore them as redundant notifications."]
      }), `
`, _jsxs(_components.li, {
        children: ["Call ", _jsx(_components.code, {
          children: "query"
        }), " if you need to fully ensure that the recording service successfully starts."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["When the recording service enables the ", _jsx(_components.a, {
        href: "../../index#features",
        children: "high availability mechanism"
      }), ", some notifications may be sent twice. You can distinguish them by the user ID in the notification. If the user ID is the same as the one you use when you start the recording, the notification belongs to the original recording session; otherwise, the notification belongs to the recording session initiated by the high availability mechanism."]
    }), `
`, _jsx(_components.h3, {
      id: "obtain-the-m3u8-file-name",
      children: "Obtain the M3U8 file name"
    }), `
`, _jsxs(_components.p, {
      children: ["You can obtain the M3U8 file name by two means. One is by splicing according to the file naming rules. The other is by calling the ", _jsx(_components.code, {
        children: "query"
      }), " method. Agora recommends that you use splicing to obtain the M3U8 file name."]
    }), `
`, _jsx(_components.h4, {
      id: "obtain-file-name-by-splicing",
      children: "Obtain file name by splicing"
    }), `
`, _jsxs(_components.p, {
      children: ["In composite recording mode, the format of the M3U8 file name is ", _jsx(_components.code, {
        children: "<sid>_<cname>.m3u8"
      }), ". Therefore, you can predict the M3U8 file name by splicing. See ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/process-recorded-files/manage-files#naming-conventions",
        children: "Naming conventions"
      }), " for details."]
    }), `
`, _jsxs(_components.h4, {
      id: "obtain-file-name-via-the-query-call",
      children: ["Obtain file name via the ", _jsx(_components.code, {
        children: "query"
      }), " call"]
    }), `
`, _jsxs(_components.p, {
      children: ["The M3U8 file name is generated after the first slice file is generated. Therefore, you should call ", _jsx(_components.code, {
        children: "query"
      }), " after the first slicing completes. See ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/process-recorded-files/manage-files#slicing",
        children: "Slicing"
      }), " for details."]
    }), `
`, _jsxs(_components.p, {
      children: ["In composite recording mode, call ", _jsx(_components.code, {
        children: "query"
      }), " 15 seconds after the cloud recording starts; in individual recording mode, call ", _jsx(_components.code, {
        children: "query"
      }), " one minute after the cloud recording starts. If the first ", _jsx(_components.code, {
        children: "query"
      }), " call fails, you can try again after one minute."]
    }), `
`, _jsx(_components.h2, {
      id: "avoid-frequent-quits-of-the-recording-service",
      children: "Avoid frequent quits of the recording service"
    }), `
`, _jsxs(_components.p, {
      children: ["The default value of ", _jsx(_components.code, {
        children: "maxIdleTime"
      }), " in the ", _jsx(_components.code, {
        children: "start"
      }), " method is 30 seconds. If the host frequently goes online and offline, a brief ", _jsx(_components.code, {
        children: "maxIdleTime"
      }), " value causes the recording service to join and exit the channel frequently. For use-cases that require the recording service to be in the channel all the time, it is necessary to increase ", _jsx(_components.code, {
        children: "maxIdleTime"
      }), " in case the recording quits after a short idle time."]
    }), `
`, _jsxs(_components.p, {
      children: ["For example, if there is a fixed 5-minute break in each class, you can set ", _jsx(_components.code, {
        children: "maxIdleTime"
      }), " to 10 minutes to ensure uninterrupted recording of the entire class."]
    }), `
`, _jsx(_components.h2, {
      id: "fault-recovery",
      children: "Fault recovery"
    }), `
`, _jsx(_components.p, {
      children: "Network failures and potential risks may occur due to factors such as cloud and network software, infrastructure, and other elements outside of Agora's control. To enhance the user experience, Cloud Recording offers automatic high availability task migration for failure recovery. When a failure is detected, the recording task will be migrated within 90 seconds. During this time, the recording may be disrupted and recorded files may be lost."
    }), `
`, _jsx(_components.p, {
      children: "To guarantee high availability of important scenes with a large audience, best practice is to:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Monitor recording tasks with calls to the ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording#query",
            children: "query"
          }), " method."]
        }), `
`, _jsxs(_components.p, {
          children: ["If the call returns a ", _jsx(_components.code, {
            children: "404"
          }), " error, create a new recording task with a different UID."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Use Notifications to ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/build/handle-events/receive-notifications#handle-notifications-for-specific-events",
            children: "Handle notifications for specific events"
          }), ". After starting the recording, if you don't receive event ", _jsx(_components.code, {
            children: "13"
          }), " ", _jsx(_components.code, {
            children: "High availability register success"
          }), " within 10 seconds, create a new recording task with a different UID."]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["These fault recovery methods may result in multiple recording tasks. You are charged separately for each task. For more information, see ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/reference/pricing",
        children: "Pricing"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "switch-the-domain-name",
      children: "Switch the domain name"
    }), `
`, _jsx(_components.p, {
      children: "To ensure high availability of REST services, Agora enables you to switch domain names when you experience service outage due to regional network failures. Take the following steps to set up and switch your domain name:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Set the primary domain name based on the location of your service server:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["If the DNS address of the service server is located in a country or region other than mainland China, set the primary domain name to ", _jsx(_components.code, {
              children: "api.agora.io"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["If the DNS address of the service server is in mainland China, set the primary domain name to ", _jsx(_components.code, {
              children: "api.sd-rtn.com"
            }), "."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "If your attempt to initiate a RESTful API request using the primary domain fails, set up your retry strategy as follows:"
        }), `
`, _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Primary domain retry"
              }), ": Retry using the same primary domain name."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Alternate domain retry"
              }), ":"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["If the current primary domain name is ", _jsx(_components.code, {
                  children: "api.sd-rtn.com"
                }), ", use ", _jsx(_components.code, {
                  children: "api.agora.io"
                }), " as the alternate domain name."]
              }), `
`, _jsxs(_components.li, {
                children: ["If the current primary domain name is ", _jsx(_components.code, {
                  children: "api.agora.io"
                }), ", use ", _jsx(_components.code, {
                  children: "api.sd-rtn.com"
                }), " as the alternate domain name."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Adjacent domain retry"
              }), ": If alternate domain retry fails, retry using the domain name adjacent to the current region."]
            }), `
`, _jsxs(_components.p, {
              children: ["For example, suppose your business server is located in Europe. You set the primary domain name to ", _jsx(_components.code, {
                children: "api.agora.io"
              }), ", and the business server resolves the primary domain name to Germany. Germany is located in central Europe (", _jsx(_components.code, {
                children: "api-eu-central-1.agora.io"
              }), "). The ", _jsx(_components.a, {
                href: "#domain-name-table",
                children: "domain name table"
              }), " shows that the adjacent area is West Europe. Use the ", _jsx(_components.code, {
                children: "api-eu-west-1.agora.io"
              }), " or ", _jsx(_components.code, {
                children: "api-eu-west-1.sd-rtn.com"
              }), " domain name to retry."]
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "precautions",
      children: "Precautions"
    }), `
`, _jsx(_components.p, {
      children: "Take the following precautions when setting up your retry strategy:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "To avoid exceeding the QPS limit with retry requests, best practice is to use a back-off strategy. For example, wait 1 second before you retry for the first time, wait 3 seconds before retrying the second time, and wait 6 seconds before retry a third time."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "If the request fails because of a network problem rather than a DNS domain name resolution problem, skip alternate domain retry and proceed to adjacent domain retry."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Before switching to the region domain name, ensure that the REST services you wish to use, for example, cloud recording or channel management, are deployed in that region."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "domain-name-table",
      children: "Domain name table"
    }), `
`, _jsx(_components.p, {
      children: "The following table shows the primary and region domain names for various regions."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Primary domain name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Region domain name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Region"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-us-west-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Western United States"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-us-east-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Eastern United States"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-ap-southeast-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Southeast Asia Pacific"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-ap-northeast-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Northeast Asia Pacific"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-eu-west-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Western Europe"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-eu-central-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Central Europe"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-cn-east-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "East China"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-cn-north-1.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "North China"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-us-west-1.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Western United States"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-us-east-1.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Eastern United States"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-ap-southeast-1.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Southeast Asia Pacific"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-ap-northeast-1.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Northeast Asia Pacific"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-eu-west-1.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Western Europe"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-eu-central-1.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Central Europe"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-cn-east-1.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "East China"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api-cn-north-1.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "North China"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.h3, {
      id: "integration-requirements-checklist",
      children: "Integration requirements checklist"
    }), `
`, _jsx(_components.p, {
      children: "To ensure reliability of the cloud recording service, refer to the following checklist to confirm that your solution meets the integration requirements:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Serial"
          }), _jsx(_components.th, {
            children: "Importance"
          }), _jsx(_components.th, {
            children: "Item"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "1"
          }), _jsx(_components.td, {
            children: "required"
          }), _jsx(_components.td, {
            children: "Subscribe to a service"
          }), _jsx(_components.td, {
            children: "Make sure you have activated the cloud recording service."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "2"
          }), _jsx(_components.td, {
            children: "required"
          }), _jsx(_components.td, {
            children: "request method"
          }), _jsx(_components.td, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["To query, use the ", _jsx(_components.code, {
                  children: "POST"
                }), " request method; to query the recording status use ", _jsx(_components.code, {
                  children: "GET"
                }), "."]
              }), `
`, _jsx(_components.li, {
                children: "Request URLs and request body content are case-sensitive."
              }), `
`]
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "3"
          }), _jsx(_components.td, {
            children: "required"
          }), _jsx(_components.td, {
            children: "Get recording resources"
          }), _jsx(_components.td, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["The passed in ", _jsx(_components.code, {
                  children: "uid"
                }), " cannot duplicate any UID within the current channel."]
              }), `
`, _jsxs(_components.li, {
                children: ["For page recording, make sure an ", _jsx(_components.code, {
                  children: "appid + cname + uid"
                }), " corresponds to a resource ID."]
              }), `
`, _jsx(_components.li, {
                children: "Make sure that a resource ID is only used for one cloud recording service."
              }), `
`, _jsxs(_components.li, {
                children: ["Make sure to call the ", _jsx(_components.code, {
                  children: "start"
                }), " method."]
              }), `
`]
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "4"
          }), _jsx(_components.td, {
            children: "required"
          }), _jsx(_components.td, {
            children: "channel scene"
          }), _jsxs(_components.td, {
            children: ["Make sure that the channel scene (", _jsx(_components.code, {
              children: "channelType"
            }), ") is consistent with the settings of the RTC SDK."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "5"
          }), _jsx(_components.td, {
            children: "required"
          }), _jsx(_components.td, {
            children: "recording parameters"
          }), _jsx(_components.td, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Make sure that the type, case, and value range of all the parameters passed in when starting the recording are correct, and the required parameters are filled; otherwise, error code 2 is returned."
              }), `
`, _jsx(_components.li, {
                children: "Set the layout and video bit rate of the combined recording by referring to the combined layout document and the recording bit rate comparison table."
              }), `
`]
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "6"
          }), _jsx(_components.td, {
            children: "required"
          }), _jsx(_components.td, {
            children: "Confirm that the recording service has started successfully"
          }), _jsx(_components.td, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["Make sure that the start request is successful, that is, the ", _jsx(_components.code, {
                  children: "sid"
                }), " (recording ID) is successfully obtained."]
              }), `
`, _jsxs(_components.li, {
                children: ["Call the query method 5 seconds after getting the ", _jsx(_components.code, {
                  children: "sid"
                }), " using the backoff strategy. If the returned status is still not ", _jsx(_components.code, {
                  children: "4"
                }), " or ", _jsx(_components.code, {
                  children: "5"
                }), ", after 90 seconds, it can be considered that the recording has not started or exited after a timeout."]
              }), `
`]
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "7"
          }), _jsx(_components.td, {
            children: "required"
          }), _jsx(_components.td, {
            children: "PCW & QPS limits"
          }), _jsx(_components.td, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Make sure that each App ID does not exceed 10 requests per second (QPS)."
              }), `
`, _jsx(_components.li, {
                children: "To increase the QPS and PCW limits, please contact technical support."
              }), `
`]
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "8"
          }), _jsx(_components.td, {
            children: "optional"
          }), _jsx(_components.td, {
            children: "NCS Service Activation"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "Activate the cloud recording callback service and subscribe to the following events as an auxiliary means of monitoring the recording service status:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "40 recorder_started"
                }), ": The recording service has started."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "11 session_exit"
                }), ": The recording service ended the task and exited."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "1 cloud_recording_error"
                }), ": An error occurred in the recording service."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "12 session_failover"
                }), ": Enable high availability mechanism for recording."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "31 uploaded"
                }), ": All recorded files have been uploaded to the specified third-party cloud storage."]
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "9"
          }), _jsx(_components.td, {
            children: "optional"
          }), _jsx(_components.td, {
            children: "Use dual domain names"
          }), _jsxs(_components.td, {
            children: ["If the request fails with the primary domain name ", _jsx(_components.code, {
              children: "api.agora.io"
            }), ", try again with the primary domain name. If it fails again, switch to the secondary domain name ", _jsx(_components.code, {
              children: "api.sd-rtn.com"
            }), " and send the request again."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "10"
          }), _jsx(_components.td, {
            children: "optional"
          }), _jsx(_components.td, {
            children: "timeout logic"
          }), _jsxs(_components.td, {
            children: ["Make sure that the ", _jsx(_components.code, {
              children: "maxIdleTime"
            }), " setting is reasonable. The recommended value is 300 seconds."]
          })]
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
