import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Best practices integrating Media Push",
  description: "Best practices for integrating Media Push into your app"
};
export let _markdown = `

To ensure reliability of Media Push, follow the advice on this page when integrating Media Push RESTful APIs.

## Prerequisites [#prerequisites]

You need the following to start using Media Push RESTful API:

* The scene of the channel is live, profile set to \`BROADCASTING\`
* Media Push is enabled
* To monitor Media Push events, enable [Notifications](./receive-notifications) (optional).

## Check the limits [#check-the-limits]

Check that your Peak Concurrent Worker (PCW), Queries Per Second (QPS), and the number of streams do not exceed the following limits set by Agora.

#### QPS [#qps]

Agora sets the following QPS limits for the Media Push RESTful API:

| API    | QPS limit                                                                              |
| :----- | :------------------------------------------------------------------------------------- |
| Create | Creating a converter is limited to 50 queries per second.                              |
| Delete | Deleting a converter is limited to 50 queries per second.                              |
| Update | Updating a specified converter is limited to 50 queries per second.                    |
| Get    | Getting the request rate of a specified converter is limited to 50 queries per second. |

When the QPS limit is exceeded, the status code \`429\` (Too Many Requests)
is returned. To extend the QPS limit, contact [support@agora.io](mailto\\:support@agora.io).

#### PCW [#pcw]

The PCW limit depends on your video stream resolution and region.

Resolutions:

* SD: Standard definition video, resolution ≤ 640 × 360
* HD: High definition video, resolution ≤ 1280 × 720 and > 640 × 360
* FHD: Full HD video, resolution ≤ 1920 × 1080 and > 1280 × 720

| Item        | Mainland China            | Europe                                                                                | America                                                                               | Asia (excluding mainland China)                                                       |
| :---------- | :------------------------ | :------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------ |
| RESTful API | - SD 300
- HD 50
- FHD 20 | * SD 20
* HD 5
* FHD - Contact [support@agora.io](mailto\\:support@agora.io) to enable | - SD 20
- HD 5
- FHD - Contact [support@agora.io](mailto\\:support@agora.io) to enable | * SD 20
* HD 5
* FHD - Contact [support@agora.io](mailto\\:support@agora.io) to enable |

To learn the details of the PCW limits for SDK API, or if you need to extend the RESTful API PCW limit, contact [support@agora.io](mailto\\:support@agora.io).

#### Number of streams [#number-of-streams]

The upper limit of video attributes supported by Agora is as follows:

* Resolution 1920 × 1080
* Frame rate 30 FPS

The maximum number of supported streams is as follows:

| Service type | Mainland China            | Europe                                                                                | America                                                                               | Asia (excluding mainland China)                                                       |
| :----------- | :------------------------ | :------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------ |
| Media Push   | * SD 300
* HD 50
* FHD 20 | - SD 20
- HD 5
- FHD - Contact [support@agora.io](mailto\\:support@agora.io) to enable | * SD 20
* HD 5
* FHD - Contact [support@agora.io](mailto\\:support@agora.io) to enable | - SD 20
- HD 5
- FHD - Contact [support@agora.io](mailto\\:support@agora.io) to enable |

<CalloutContainer type="warning">
  <CalloutTitle>
    Note
  </CalloutTitle>

  <CalloutDescription>
    If you need to upload multiple streams of different resolutions at the same time, make sure you meet the following requirements:<ul><li>The number of streams per resolution cannot exceed the corresponding limit for that resolution.</li><li>The total number of streams cannot exceed the limit set for the higher resolution. For example, if you upload both SD and HD streams in America, the total number of streams cannot exceed 20. If you upload HD and FHD, the total number cannot exceed 5.</li></ul>
  </CalloutDescription>
</CalloutContainer>

## Ensure the high availability of REST services [#ensure-the-high-availability-of-rest-services]

To ensure the high availability of REST services and prevent downtime caused by regional network faults, Agora provides
failover and domain name switch.

### Failover [#failover]

Network failures and risks may be caused by cloud and network software, infrastructure, and other factors that Agora cannot control.
To provide the best possible user experience, Media Push provides high availability automatic task migration for failure recovery.
After a failure is confirmed, the Media Push task is migrated within 120 seconds. During this period, the task may be interrupted.

Consider whether you can accept the impact of high availability migration based on your own business characteristics, and decide whether to adopt higher quality assurance measures. For example, create multiple Media Push tasks for critical scenes. Alternatively, you can make periodic API calls and monitor notifications to get the latest task status, then create a new task with a different UID once you confirm the task status is unhealthy.

### Multiple Media Push tasks (RTMP Converters) [#multiple-media-push-tasks-rtmp-converters]

If you need a more reliable solution than fault recovery, you can use a multiple Media Push task strategy. You can choose the following two ways to implement it:

1. Start the main push task and multiple backup tasks at the same time.
   Set a different CDN address for each Media Push task. When the main
   Media Push task fails, the CDN audience can switch to the backup CDN
   address in time.

2. If the CDN vendor you use supports the feature of pushing several
   streams to the same CDN address with different priorities,
   create a Media Push task No. 1 to the CDN with priority 1
   (\`<rtmp://xxx/xxx/xxx>? priority=1\`). If task 1 fails, create
   task 2 with priority is 2. In this case, task 1 is ignored by the CDN.
   The priority fields of different CDNs are different. Check with the CDN vendor
   whether the priority function is supported and what the name of the
   priority field is.

For use cases with higher quality requirements, requesting multiple Media Push tasks with different tagging enables isolated resources for these tasks and raises the success rate. Media Push supports room-level isolation for tasks. For example, if there is a task with \`"name":"my-task"\` in the original request, you can add a suffix to the \`name\` parameter to realize isolation at the computer room level. Use \`"name":"my-task-agora-isolate-1"\` and \`"name":"my-task-agora-isolate-2"\` to start additional tasks. Note that:

* If resources are insufficient, then tasks started later fails.
* Media Push supports up to three-way isolation, That is, \`my-taskagora-isolate1\`, \`my-task-agoraisolate-2\`, and \`my-taskagora-isolate-3\` can be separated.

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

## Create a Media Push RTMP Converter [#create-a-media-push-rtmp-converter]

When creating a converter with a \`create\` call, pay attention to the following:

* Create the converter by region parameter:
  * The region you set must be in the same area as your CDN origin station. For example, if your CDN origin is located in the US, set region to \`na\`.
  * Pass the region value in lowercase.

* Agora recommends that you assign a string value to the \`X-Request-ID\` field in the request header. The Agora server returns an \`X-Custom-request-ID\` field in the response header for troubleshooting purposes.

* Set UID or account as the user name for the converter. Do not set these two fields at the same time. Ensure that each converter has a unique user name within the channel.

* To avoid repeated media streaming due to repeated creation of multiple converters, it is recommended to use the name field to manage converters under a specific project. At the same time, converters with the same names cannot exist in a project. If you attempt to create a converter with the same name, you receive the \`409\` (Conflict) status code.

* Agora recommends that you assign the name using a combination of the channel name and a converter property. For example, \`show68_horizontal\` and \`show68_vertical\` would represent a horizontal and a vertical layout respectively.

* \`audioOption\` and \`videoOptions\` are set as follows for audio only or video only use-cases:
  * In a video only use-case, you do not need to set \`audioOptions\` and its related fields.
  * In an audio-only use-case, you do not need to set \`videoOptions\` and its related fields by default. For special cases, see [Output SEI in audio-only use-cases](#output-sei-in-audio-only-use-cases).
  * In audio plus video use-cases, \`videoOptions\` and \`audioOptions\` are required and cannot be left blank. If you do not need to configure \`audioOptions\`, set the field to the JSON \`null\` value.

* Set an appropriate value for \`idleTimeout\`. The default value of 300 seconds is recommended. It means that the converter is automatically destroyed, 300 seconds after all subscribers leave the channel.

### Output SEI in audio-only use-cases [#output-sei-in-audio-only-use-cases]

In an audio-only use-case, by default, you do not need to set \`videoOptions\` and its related fields. However, if you need to carry additional user information, such as volume, you can set SEI information with the \`seiOptions\` field in \`videoOptions\`.

If you want to output SEI information in Metadata or DataStream type carried by the user in an audio-only use-case and avoid video transcoding fees, follow these steps:

1. Pass the SEI information to be output in \`videoOptions.seiOptions\`.
2. Ensure that the \`width\` and \`height\` in \`videoOptions.canvas\` are set to \`16\` to avoid video transcoding fees.
3. Pass the UID of the user who carries the SEI information in \`rtcStreamUid\` field in \`videoOptions.layout\`.

## Update RTMP converter [#update-rtmp-converter]

When updating a specified converter with an \`Update\` call, pay attention
to the following:

When you use the query parameter sequence to update the same converter
multiple times, ensure that the sequence value increases. Media Push updates the converter according to the latest update request, that is, the maximum sequence number.

The Update API does not support the following configuration parameters:

* \`name\`
* \`idleTimeOut\`
* \`transcodeOptions.rtcChannel\`
* \`transcodeOptions.audioOptions.codecProfile\`
* \`transcodeOptions.audioOptions.sampleRate\`
* \`transcodeOptions.audioOptions.bitrate\`
* \`transcodeOptions.audioOptions.audioChannels\`
* \`transcodeOptions.videoOptions.codec\`
* \`transcodeOptions.videoOptions.codecProfile\`

## Troubleshooting and recommended measures [#troubleshooting-and-recommended-measures]

### Retry with retreat strategy [#retry-with-retreat-strategy]

If you receive \`404\`, \`429\`, or \`5xx\` error codes, use a backoff strategy. For example, wait 5-6 seconds, 10-11 seconds, or 15-16 seconds and try again. If you get three consecutive \`404\` or \`5xx\` error codes, or if the \`state\` field in the response to checking the status of a Media Push task says \`failed\`, it means that the Media Push task has failed. To fix this problem, follow these steps:

1. Check whether the CDN address is correct.
2. If the CDN address is correct, destroy the current converter and create a new one.

### Troubleshooting by error code [#troubleshooting-by-error-code]

* If the status code is 200, the request is successful.
* If the status code is not \`200\`, the request has failed. See the error message in the response body for clarification.

| Status code               | Possible error message                                                                                                                                                               | Possible reason of failure                                             | Measures to take                                                                          |
| :------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------- | :---------------------------------------------------------------------------------------- |
| \`400\` Bad Request         | Invalid parameter: \`rtmpUrl\`. Replace and retry. Invalid parameter: \`idleTimeout\`. Replace and retry.                                                                                | Wrong parameters.                                                      | Check by referring to the \`reason\` field in the HTTP response body.                       |
| \`401\` Unauthorized        | Invalid authentication credentials.                                                                                                                                                  | RESTful API authentication failed.                                     | See [RESTful Authentication](/en/api-reference/api-ref/media-push/restful-authentication) |
| \`403\` Forbidden           | No valid permission to use this function. Contact us.                                                                                                                                | Service is not enabled.                                                | Enable the service.                                                                       |
| \`404\` Not Found           | Resource is not found and destroyed.                                                                                                                                                 | The task was not started or is in the process of failover or deletion. | Retry following the retreat strategy.                                                     |
| \`409\` Conflict            | Resource with the same name already exists. Use the existing resource or delete it and create a new resource.                                                                        | Resource with the same name already exists.                            | Delete the existing converter and create a new one.                                       |
| \`429\` Too Many Requests   | Request rate limit exceeded. Resources quota exceeded. No available resources.                                                                                                       | Too many request                                                       | Retry following the retreat strategy.                                                     |
| \`500\` Unknown             | Internal error. Contact us for troubleshooting.                                                                                                                                      | Internal error                                                         | Retry following the retreat strategy.                                                     |
| \`501\` Not Implemented     | The requested method has not been implemented.                                                                                                                                       | Internal error                                                         | Retry following the retreat strategy.                                                     |
| \`503\` Service Unavailable | The server is temporarily overloaded. Retry following the retreat strategy and contact us for troubleshooting. The server is temporarily down. Retry following the retreat strategy. | Internal error.                                                        | Retry following the retreat strategy.                                                     |
| \`504\` Gateway Timeout     | Gateway timeout. Check whether the resource is created. If not, create a new resource.                                                                                               | Internal error.                                                        | Retry following the retreat strategy.                                                     |

### Contact Agora technical support [#contact-agora-technical-support]

If the error persists, print the \`X-Request-ID\` and \`X-Resource-ID\` fields in the response header in the log and contact technical support.

## Integration checklist [#integration-checklist]

Refer to the following table to quickly check whether each check item meets the integration requirements to ensure the
reliability of Media Push.

| Required or optional | Item                               | Check                                                                                                                                                                                                                                                                               |
| :------------------- | :--------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Required             | Channel mode                       | Ensure that the scene of the channel is live.                                                                                                                                                                                                                                       |
| Required             | Availability                       | Enable Media Push.                                                                                                                                                                                                                                                                  |
| Required             | QPS limit                          | Ensure that the rate of API calls in a project is below the maximum limit.                                                                                                                                                                                                          |
| Required             | Maximum number of concurrent Tasks | Ensure that the number of concurrent tasks in a project is below 300.                                                                                                                                                                                                               |
| Optional             | Converter name                     | Use the name field to manage the converter under the specified project. Assigning the name as a combination of the channel name and a converter property.                                                                                                                           |
| Required             | Region                             | * Set the region in the same area as your media streaming.
* Pass region value in lowercase.                                                                                                                                                                                        |
| Required             | Idle timeout                       | Set an appropriate \`idleTimeout\` value. 300 seconds is recommended.                                                                                                                                                                                                                 |
| Optional             | Troubleshooting                    | Rectify the errors as follows:* Use the retreat strategy.
* Check the error code.If the preceding troubleshooting methods do not resolve the problem, print the values of the \`X-Request-ID\` and \`X-Resource-ID\` fields in the response header and contact Agora technical support. |
| Optional             | Message notifications              | Enable message notification service for Media Push and listen to Media Push events.                                                                                                                                                                                                 |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "To ensure reliability of Media Push, follow the advice on this page when integrating Media Push RESTful APIs."
  }, {
    heading: "prerequisites",
    content: "You need the following to start using Media Push RESTful API:"
  }, {
    heading: "prerequisites",
    content: "The scene of the channel is live, profile set to `BROADCASTING`"
  }, {
    heading: "prerequisites",
    content: "Media Push is enabled"
  }, {
    heading: "prerequisites",
    content: "To monitor Media Push events, enable Notifications (optional)."
  }, {
    heading: "check-the-limits",
    content: "Check that your Peak Concurrent Worker (PCW), Queries Per Second (QPS), and the number of streams do not exceed the following limits set by Agora."
  }, {
    heading: "qps",
    content: "Agora sets the following QPS limits for the Media Push RESTful API:"
  }, {
    heading: "qps",
    content: "API"
  }, {
    heading: "qps",
    content: "QPS limit"
  }, {
    heading: "qps",
    content: "Create"
  }, {
    heading: "qps",
    content: "Creating a converter is limited to 50 queries per second."
  }, {
    heading: "qps",
    content: "Delete"
  }, {
    heading: "qps",
    content: "Deleting a converter is limited to 50 queries per second."
  }, {
    heading: "qps",
    content: "Update"
  }, {
    heading: "qps",
    content: "Updating a specified converter is limited to 50 queries per second."
  }, {
    heading: "qps",
    content: "Get"
  }, {
    heading: "qps",
    content: "Getting the request rate of a specified converter is limited to 50 queries per second."
  }, {
    heading: "qps",
    content: "When the QPS limit is exceeded, the status code `429` (Too Many Requests)\nis returned. To extend the QPS limit, contact support\\@agora.io."
  }, {
    heading: "pcw",
    content: "The PCW limit depends on your video stream resolution and region."
  }, {
    heading: "pcw",
    content: "Resolutions:"
  }, {
    heading: "pcw",
    content: "SD: Standard definition video, resolution ≤ 640 × 360"
  }, {
    heading: "pcw",
    content: "HD: High definition video, resolution ≤ 1280 × 720 and > 640 × 360"
  }, {
    heading: "pcw",
    content: "FHD: Full HD video, resolution ≤ 1920 × 1080 and > 1280 × 720"
  }, {
    heading: "pcw",
    content: "Item"
  }, {
    heading: "pcw",
    content: "Mainland China"
  }, {
    heading: "pcw",
    content: "Europe"
  }, {
    heading: "pcw",
    content: "America"
  }, {
    heading: "pcw",
    content: "Asia (excluding mainland China)"
  }, {
    heading: "pcw",
    content: "RESTful API"
  }, {
    heading: "pcw",
    content: `* SD 300
* HD 50
* FHD 20`
  }, {
    heading: "pcw",
    content: `* SD 20
* HD 5
* FHD - Contact support\\@agora.io to enable`
  }, {
    heading: "pcw",
    content: `* SD 20
* HD 5
* FHD - Contact support\\@agora.io to enable`
  }, {
    heading: "pcw",
    content: `* SD 20
* HD 5
* FHD - Contact support\\@agora.io to enable`
  }, {
    heading: "pcw",
    content: "To learn the details of the PCW limits for SDK API, or if you need to extend the RESTful API PCW limit, contact support\\@agora.io."
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
    content: "Media Push"
  }, {
    heading: "number-of-streams",
    content: `* SD 300
* HD 50
* FHD 20`
  }, {
    heading: "number-of-streams",
    content: `* SD 20
* HD 5
* FHD - Contact support\\@agora.io to enable`
  }, {
    heading: "number-of-streams",
    content: `* SD 20
* HD 5
* FHD - Contact support\\@agora.io to enable`
  }, {
    heading: "number-of-streams",
    content: `* SD 20
* HD 5
* FHD - Contact support\\@agora.io to enable`
  }, {
    heading: "number-of-streams",
    content: "If you need to upload multiple streams of different resolutions at the same time, make sure you meet the following requirements:<ul><li>The number of streams per resolution cannot exceed the corresponding limit for that resolution.</li><li>The total number of streams cannot exceed the limit set for the higher resolution. For example, if you upload both SD and HD streams in America, the total number of streams cannot exceed 20. If you upload HD and FHD, the total number cannot exceed 5.</li></ul>"
  }, {
    heading: "ensure-the-high-availability-of-rest-services",
    content: `To ensure the high availability of REST services and prevent downtime caused by regional network faults, Agora provides
failover and domain name switch.`
  }, {
    heading: "failover",
    content: `Network failures and risks may be caused by cloud and network software, infrastructure, and other factors that Agora cannot control.
To provide the best possible user experience, Media Push provides high availability automatic task migration for failure recovery.
After a failure is confirmed, the Media Push task is migrated within 120 seconds. During this period, the task may be interrupted.`
  }, {
    heading: "failover",
    content: "Consider whether you can accept the impact of high availability migration based on your own business characteristics, and decide whether to adopt higher quality assurance measures. For example, create multiple Media Push tasks for critical scenes. Alternatively, you can make periodic API calls and monitor notifications to get the latest task status, then create a new task with a different UID once you confirm the task status is unhealthy."
  }, {
    heading: "multiple-media-push-tasks-rtmp-converters",
    content: "If you need a more reliable solution than fault recovery, you can use a multiple Media Push task strategy. You can choose the following two ways to implement it:"
  }, {
    heading: "multiple-media-push-tasks-rtmp-converters",
    content: `Start the main push task and multiple backup tasks at the same time.
Set a different CDN address for each Media Push task. When the main
Media Push task fails, the CDN audience can switch to the backup CDN
address in time.`
  }, {
    heading: "multiple-media-push-tasks-rtmp-converters",
    content: `If the CDN vendor you use supports the feature of pushing several
streams to the same CDN address with different priorities,
create a Media Push task No. 1 to the CDN with priority 1
(\`<rtmp://xxx/xxx/xxx>? priority=1\`). If task 1 fails, create
task 2 with priority is 2. In this case, task 1 is ignored by the CDN.
The priority fields of different CDNs are different. Check with the CDN vendor
whether the priority function is supported and what the name of the
priority field is.`
  }, {
    heading: "multiple-media-push-tasks-rtmp-converters",
    content: 'For use cases with higher quality requirements, requesting multiple Media Push tasks with different tagging enables isolated resources for these tasks and raises the success rate. Media Push supports room-level isolation for tasks. For example, if there is a task with `"name":"my-task"` in the original request, you can add a suffix to the `name` parameter to realize isolation at the computer room level. Use `"name":"my-task-agora-isolate-1"` and `"name":"my-task-agora-isolate-2"` to start additional tasks. Note that:'
  }, {
    heading: "multiple-media-push-tasks-rtmp-converters",
    content: "If resources are insufficient, then tasks started later fails."
  }, {
    heading: "multiple-media-push-tasks-rtmp-converters",
    content: "Media Push supports up to three-way isolation, That is, `my-taskagora-isolate1`, `my-task-agoraisolate-2`, and `my-taskagora-isolate-3` can be separated."
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
    heading: "create-a-media-push-rtmp-converter",
    content: "When creating a converter with a `create` call, pay attention to the following:"
  }, {
    heading: "create-a-media-push-rtmp-converter",
    content: "Create the converter by region parameter:"
  }, {
    heading: "create-a-media-push-rtmp-converter",
    content: "The region you set must be in the same area as your CDN origin station. For example, if your CDN origin is located in the US, set region to `na`."
  }, {
    heading: "create-a-media-push-rtmp-converter",
    content: "Pass the region value in lowercase."
  }, {
    heading: "create-a-media-push-rtmp-converter",
    content: "Agora recommends that you assign a string value to the `X-Request-ID` field in the request header. The Agora server returns an `X-Custom-request-ID` field in the response header for troubleshooting purposes."
  }, {
    heading: "create-a-media-push-rtmp-converter",
    content: "Set UID or account as the user name for the converter. Do not set these two fields at the same time. Ensure that each converter has a unique user name within the channel."
  }, {
    heading: "create-a-media-push-rtmp-converter",
    content: "To avoid repeated media streaming due to repeated creation of multiple converters, it is recommended to use the name field to manage converters under a specific project. At the same time, converters with the same names cannot exist in a project. If you attempt to create a converter with the same name, you receive the `409` (Conflict) status code."
  }, {
    heading: "create-a-media-push-rtmp-converter",
    content: "Agora recommends that you assign the name using a combination of the channel name and a converter property. For example, `show68_horizontal` and `show68_vertical` would represent a horizontal and a vertical layout respectively."
  }, {
    heading: "create-a-media-push-rtmp-converter",
    content: "`audioOption` and `videoOptions` are set as follows for audio only or video only use-cases:"
  }, {
    heading: "create-a-media-push-rtmp-converter",
    content: "In a video only use-case, you do not need to set `audioOptions` and its related fields."
  }, {
    heading: "create-a-media-push-rtmp-converter",
    content: "In an audio-only use-case, you do not need to set `videoOptions` and its related fields by default. For special cases, see Output SEI in audio-only use-cases."
  }, {
    heading: "create-a-media-push-rtmp-converter",
    content: "In audio plus video use-cases, `videoOptions` and `audioOptions` are required and cannot be left blank. If you do not need to configure `audioOptions`, set the field to the JSON `null` value."
  }, {
    heading: "create-a-media-push-rtmp-converter",
    content: "Set an appropriate value for `idleTimeout`. The default value of 300 seconds is recommended. It means that the converter is automatically destroyed, 300 seconds after all subscribers leave the channel."
  }, {
    heading: "output-sei-in-audio-only-use-cases",
    content: "In an audio-only use-case, by default, you do not need to set `videoOptions` and its related fields. However, if you need to carry additional user information, such as volume, you can set SEI information with the `seiOptions` field in `videoOptions`."
  }, {
    heading: "output-sei-in-audio-only-use-cases",
    content: "If you want to output SEI information in Metadata or DataStream type carried by the user in an audio-only use-case and avoid video transcoding fees, follow these steps:"
  }, {
    heading: "output-sei-in-audio-only-use-cases",
    content: "Pass the SEI information to be output in `videoOptions.seiOptions`."
  }, {
    heading: "output-sei-in-audio-only-use-cases",
    content: "Ensure that the `width` and `height` in `videoOptions.canvas` are set to `16` to avoid video transcoding fees."
  }, {
    heading: "output-sei-in-audio-only-use-cases",
    content: "Pass the UID of the user who carries the SEI information in `rtcStreamUid` field in `videoOptions.layout`."
  }, {
    heading: "update-rtmp-converter",
    content: "When updating a specified converter with an `Update` call, pay attention\nto the following:"
  }, {
    heading: "update-rtmp-converter",
    content: `When you use the query parameter sequence to update the same converter
multiple times, ensure that the sequence value increases. Media Push updates the converter according to the latest update request, that is, the maximum sequence number.`
  }, {
    heading: "update-rtmp-converter",
    content: "The Update API does not support the following configuration parameters:"
  }, {
    heading: "update-rtmp-converter",
    content: "`name`"
  }, {
    heading: "update-rtmp-converter",
    content: "`idleTimeOut`"
  }, {
    heading: "update-rtmp-converter",
    content: "`transcodeOptions.rtcChannel`"
  }, {
    heading: "update-rtmp-converter",
    content: "`transcodeOptions.audioOptions.codecProfile`"
  }, {
    heading: "update-rtmp-converter",
    content: "`transcodeOptions.audioOptions.sampleRate`"
  }, {
    heading: "update-rtmp-converter",
    content: "`transcodeOptions.audioOptions.bitrate`"
  }, {
    heading: "update-rtmp-converter",
    content: "`transcodeOptions.audioOptions.audioChannels`"
  }, {
    heading: "update-rtmp-converter",
    content: "`transcodeOptions.videoOptions.codec`"
  }, {
    heading: "update-rtmp-converter",
    content: "`transcodeOptions.videoOptions.codecProfile`"
  }, {
    heading: "retry-with-retreat-strategy",
    content: "If you receive `404`, `429`, or `5xx` error codes, use a backoff strategy. For example, wait 5-6 seconds, 10-11 seconds, or 15-16 seconds and try again. If you get three consecutive `404` or `5xx` error codes, or if the `state` field in the response to checking the status of a Media Push task says `failed`, it means that the Media Push task has failed. To fix this problem, follow these steps:"
  }, {
    heading: "retry-with-retreat-strategy",
    content: "Check whether the CDN address is correct."
  }, {
    heading: "retry-with-retreat-strategy",
    content: "If the CDN address is correct, destroy the current converter and create a new one."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "If the status code is 200, the request is successful."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "If the status code is not `200`, the request has failed. See the error message in the response body for clarification."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Status code"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Possible error message"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Possible reason of failure"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Measures to take"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "`400` Bad Request"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Invalid parameter: `rtmpUrl`. Replace and retry. Invalid parameter: `idleTimeout`. Replace and retry."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Wrong parameters."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Check by referring to the `reason` field in the HTTP response body."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "`401` Unauthorized"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Invalid authentication credentials."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "RESTful API authentication failed."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "See RESTful Authentication"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "`403` Forbidden"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "No valid permission to use this function. Contact us."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Service is not enabled."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Enable the service."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "`404` Not Found"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Resource is not found and destroyed."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "The task was not started or is in the process of failover or deletion."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Retry following the retreat strategy."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "`409` Conflict"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Resource with the same name already exists. Use the existing resource or delete it and create a new resource."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Resource with the same name already exists."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Delete the existing converter and create a new one."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "`429` Too Many Requests"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Request rate limit exceeded. Resources quota exceeded. No available resources."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Too many request"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Retry following the retreat strategy."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "`500` Unknown"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Internal error. Contact us for troubleshooting."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Internal error"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Retry following the retreat strategy."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "`501` Not Implemented"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "The requested method has not been implemented."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Internal error"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Retry following the retreat strategy."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "`503` Service Unavailable"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "The server is temporarily overloaded. Retry following the retreat strategy and contact us for troubleshooting. The server is temporarily down. Retry following the retreat strategy."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Internal error."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Retry following the retreat strategy."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "`504` Gateway Timeout"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Gateway timeout. Check whether the resource is created. If not, create a new resource."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Internal error."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Retry following the retreat strategy."
  }, {
    heading: "contact-agora-technical-support",
    content: "If the error persists, print the `X-Request-ID` and `X-Resource-ID` fields in the response header in the log and contact technical support."
  }, {
    heading: "integration-checklist",
    content: `Refer to the following table to quickly check whether each check item meets the integration requirements to ensure the
reliability of Media Push.`
  }, {
    heading: "integration-checklist",
    content: "Required or optional"
  }, {
    heading: "integration-checklist",
    content: "Item"
  }, {
    heading: "integration-checklist",
    content: "Check"
  }, {
    heading: "integration-checklist",
    content: "Required"
  }, {
    heading: "integration-checklist",
    content: "Channel mode"
  }, {
    heading: "integration-checklist",
    content: "Ensure that the scene of the channel is live."
  }, {
    heading: "integration-checklist",
    content: "Required"
  }, {
    heading: "integration-checklist",
    content: "Availability"
  }, {
    heading: "integration-checklist",
    content: "Enable Media Push."
  }, {
    heading: "integration-checklist",
    content: "Required"
  }, {
    heading: "integration-checklist",
    content: "QPS limit"
  }, {
    heading: "integration-checklist",
    content: "Ensure that the rate of API calls in a project is below the maximum limit."
  }, {
    heading: "integration-checklist",
    content: "Required"
  }, {
    heading: "integration-checklist",
    content: "Maximum number of concurrent Tasks"
  }, {
    heading: "integration-checklist",
    content: "Ensure that the number of concurrent tasks in a project is below 300."
  }, {
    heading: "integration-checklist",
    content: "Optional"
  }, {
    heading: "integration-checklist",
    content: "Converter name"
  }, {
    heading: "integration-checklist",
    content: "Use the name field to manage the converter under the specified project. Assigning the name as a combination of the channel name and a converter property."
  }, {
    heading: "integration-checklist",
    content: "Required"
  }, {
    heading: "integration-checklist",
    content: "Region"
  }, {
    heading: "integration-checklist",
    content: `* Set the region in the same area as your media streaming.
* Pass region value in lowercase.`
  }, {
    heading: "integration-checklist",
    content: "Required"
  }, {
    heading: "integration-checklist",
    content: "Idle timeout"
  }, {
    heading: "integration-checklist",
    content: "Set an appropriate `idleTimeout` value. 300 seconds is recommended."
  }, {
    heading: "integration-checklist",
    content: "Optional"
  }, {
    heading: "integration-checklist",
    content: "Troubleshooting"
  }, {
    heading: "integration-checklist",
    content: "Rectify the errors as follows:- Use the retreat strategy.\n- Check the error code.If the preceding troubleshooting methods do not resolve the problem, print the values of the `X-Request-ID` and `X-Resource-ID` fields in the response header and contact Agora technical support."
  }, {
    heading: "integration-checklist",
    content: "Optional"
  }, {
    heading: "integration-checklist",
    content: "Message notifications"
  }, {
    heading: "integration-checklist",
    content: "Enable message notification service for Media Push and listen to Media Push events."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "check-the-limits",
    content: "Check the limits"
  }, {
    id: "qps",
    content: "QPS"
  }, {
    id: "pcw",
    content: "PCW"
  }, {
    id: "number-of-streams",
    content: "Number of streams"
  }, {
    id: "ensure-the-high-availability-of-rest-services",
    content: "Ensure the high availability of REST services"
  }, {
    id: "failover",
    content: "Failover"
  }, {
    id: "multiple-media-push-tasks-rtmp-converters",
    content: "Multiple Media Push tasks (RTMP Converters)"
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
    id: "create-a-media-push-rtmp-converter",
    content: "Create a Media Push RTMP Converter"
  }, {
    id: "output-sei-in-audio-only-use-cases",
    content: "Output SEI in audio-only use-cases"
  }, {
    id: "update-rtmp-converter",
    content: "Update RTMP converter"
  }, {
    id: "troubleshooting-and-recommended-measures",
    content: "Troubleshooting and recommended measures"
  }, {
    id: "retry-with-retreat-strategy",
    content: "Retry with retreat strategy"
  }, {
    id: "troubleshooting-by-error-code",
    content: "Troubleshooting by error code"
  }, {
    id: "contact-agora-technical-support",
    content: "Contact Agora technical support"
  }, {
    id: "integration-checklist",
    content: "Integration checklist"
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
  url: "#check-the-limits",
  title: _jsx(_Fragment, {
    children: "Check the limits"
  })
}, {
  depth: 4,
  url: "#qps",
  title: _jsx(_Fragment, {
    children: "QPS"
  })
}, {
  depth: 4,
  url: "#pcw",
  title: _jsx(_Fragment, {
    children: "PCW"
  })
}, {
  depth: 4,
  url: "#number-of-streams",
  title: _jsx(_Fragment, {
    children: "Number of streams"
  })
}, {
  depth: 2,
  url: "#ensure-the-high-availability-of-rest-services",
  title: _jsx(_Fragment, {
    children: "Ensure the high availability of REST services"
  })
}, {
  depth: 3,
  url: "#failover",
  title: _jsx(_Fragment, {
    children: "Failover"
  })
}, {
  depth: 3,
  url: "#multiple-media-push-tasks-rtmp-converters",
  title: _jsx(_Fragment, {
    children: "Multiple Media Push tasks (RTMP Converters)"
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
  url: "#create-a-media-push-rtmp-converter",
  title: _jsx(_Fragment, {
    children: "Create a Media Push RTMP Converter"
  })
}, {
  depth: 3,
  url: "#output-sei-in-audio-only-use-cases",
  title: _jsx(_Fragment, {
    children: "Output SEI in audio-only use-cases"
  })
}, {
  depth: 2,
  url: "#update-rtmp-converter",
  title: _jsx(_Fragment, {
    children: "Update RTMP converter"
  })
}, {
  depth: 2,
  url: "#troubleshooting-and-recommended-measures",
  title: _jsx(_Fragment, {
    children: "Troubleshooting and recommended measures"
  })
}, {
  depth: 3,
  url: "#retry-with-retreat-strategy",
  title: _jsx(_Fragment, {
    children: "Retry with retreat strategy"
  })
}, {
  depth: 3,
  url: "#troubleshooting-by-error-code",
  title: _jsx(_Fragment, {
    children: "Troubleshooting by error code"
  })
}, {
  depth: 3,
  url: "#contact-agora-technical-support",
  title: _jsx(_Fragment, {
    children: "Contact Agora technical support"
  })
}, {
  depth: 2,
  url: "#integration-checklist",
  title: _jsx(_Fragment, {
    children: "Integration checklist"
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
      children: "To ensure reliability of Media Push, follow the advice on this page when integrating Media Push RESTful APIs."
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "You need the following to start using Media Push RESTful API:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["The scene of the channel is live, profile set to ", _jsx(_components.code, {
          children: "BROADCASTING"
        })]
      }), `
`, _jsx(_components.li, {
        children: "Media Push is enabled"
      }), `
`, _jsxs(_components.li, {
        children: ["To monitor Media Push events, enable ", _jsx(_components.a, {
          href: "./receive-notifications",
          children: "Notifications"
        }), " (optional)."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "check-the-limits",
      children: "Check the limits"
    }), `
`, _jsx(_components.p, {
      children: "Check that your Peak Concurrent Worker (PCW), Queries Per Second (QPS), and the number of streams do not exceed the following limits set by Agora."
    }), `
`, _jsx(_components.h4, {
      id: "qps",
      children: "QPS"
    }), `
`, _jsx(_components.p, {
      children: "Agora sets the following QPS limits for the Media Push RESTful API:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "API"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "QPS limit"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Create"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Creating a converter is limited to 50 queries per second."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Delete"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Deleting a converter is limited to 50 queries per second."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Update"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Updating a specified converter is limited to 50 queries per second."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Getting the request rate of a specified converter is limited to 50 queries per second."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["When the QPS limit is exceeded, the status code ", _jsx(_components.code, {
        children: "429"
      }), ` (Too Many Requests)
is returned. To extend the QPS limit, contact `, _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "pcw",
      children: "PCW"
    }), `
`, _jsx(_components.p, {
      children: "The PCW limit depends on your video stream resolution and region."
    }), `
`, _jsx(_components.p, {
      children: "Resolutions:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "SD: Standard definition video, resolution ≤ 640 × 360"
      }), `
`, _jsx(_components.li, {
        children: "HD: High definition video, resolution ≤ 1280 × 720 and > 640 × 360"
      }), `
`, _jsx(_components.li, {
        children: "FHD: Full HD video, resolution ≤ 1920 × 1080 and > 1280 × 720"
      }), `
`]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Item"
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
            children: "RESTful API"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "SD 300"
              }), `
`, _jsx(_components.li, {
                children: "HD 50"
              }), `
`, _jsx(_components.li, {
                children: "FHD 20"
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
                children: "SD 20"
              }), `
`, _jsx(_components.li, {
                children: "HD 5"
              }), `
`, _jsxs(_components.li, {
                children: ["FHD - Contact ", _jsx(_components.a, {
                  href: "mailto:support@agora.io",
                  children: "support@agora.io"
                }), " to enable"]
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
                children: "SD 20"
              }), `
`, _jsx(_components.li, {
                children: "HD 5"
              }), `
`, _jsxs(_components.li, {
                children: ["FHD - Contact ", _jsx(_components.a, {
                  href: "mailto:support@agora.io",
                  children: "support@agora.io"
                }), " to enable"]
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
                children: "SD 20"
              }), `
`, _jsx(_components.li, {
                children: "HD 5"
              }), `
`, _jsxs(_components.li, {
                children: ["FHD - Contact ", _jsx(_components.a, {
                  href: "mailto:support@agora.io",
                  children: "support@agora.io"
                }), " to enable"]
              }), `
`]
            })
          })]
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["To learn the details of the PCW limits for SDK API, or if you need to extend the RESTful API PCW limit, contact ", _jsx(_components.a, {
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
            children: "Media Push"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "SD 300"
              }), `
`, _jsx(_components.li, {
                children: "HD 50"
              }), `
`, _jsx(_components.li, {
                children: "FHD 20"
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
                children: "SD 20"
              }), `
`, _jsx(_components.li, {
                children: "HD 5"
              }), `
`, _jsxs(_components.li, {
                children: ["FHD - Contact ", _jsx(_components.a, {
                  href: "mailto:support@agora.io",
                  children: "support@agora.io"
                }), " to enable"]
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
                children: "SD 20"
              }), `
`, _jsx(_components.li, {
                children: "HD 5"
              }), `
`, _jsxs(_components.li, {
                children: ["FHD - Contact ", _jsx(_components.a, {
                  href: "mailto:support@agora.io",
                  children: "support@agora.io"
                }), " to enable"]
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
                children: "SD 20"
              }), `
`, _jsx(_components.li, {
                children: "HD 5"
              }), `
`, _jsxs(_components.li, {
                children: ["FHD - Contact ", _jsx(_components.a, {
                  href: "mailto:support@agora.io",
                  children: "support@agora.io"
                }), " to enable"]
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
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If you need to upload multiple streams of different resolutions at the same time, make sure you meet the following requirements:", "The number of streams per resolution cannot exceed the corresponding limit for that resolution.", "The total number of streams cannot exceed the limit set for the higher resolution. For example, if you upload both SD and HD streams in America, the total number of streams cannot exceed 20. If you upload HD and FHD, the total number cannot exceed 5."]
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "ensure-the-high-availability-of-rest-services",
      children: "Ensure the high availability of REST services"
    }), `
`, _jsx(_components.p, {
      children: `To ensure the high availability of REST services and prevent downtime caused by regional network faults, Agora provides
failover and domain name switch.`
    }), `
`, _jsx(_components.h3, {
      id: "failover",
      children: "Failover"
    }), `
`, _jsx(_components.p, {
      children: `Network failures and risks may be caused by cloud and network software, infrastructure, and other factors that Agora cannot control.
To provide the best possible user experience, Media Push provides high availability automatic task migration for failure recovery.
After a failure is confirmed, the Media Push task is migrated within 120 seconds. During this period, the task may be interrupted.`
    }), `
`, _jsx(_components.p, {
      children: "Consider whether you can accept the impact of high availability migration based on your own business characteristics, and decide whether to adopt higher quality assurance measures. For example, create multiple Media Push tasks for critical scenes. Alternatively, you can make periodic API calls and monitor notifications to get the latest task status, then create a new task with a different UID once you confirm the task status is unhealthy."
    }), `
`, _jsx(_components.h3, {
      id: "multiple-media-push-tasks-rtmp-converters",
      children: "Multiple Media Push tasks (RTMP Converters)"
    }), `
`, _jsx(_components.p, {
      children: "If you need a more reliable solution than fault recovery, you can use a multiple Media Push task strategy. You can choose the following two ways to implement it:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: `Start the main push task and multiple backup tasks at the same time.
Set a different CDN address for each Media Push task. When the main
Media Push task fails, the CDN audience can switch to the backup CDN
address in time.`
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [`If the CDN vendor you use supports the feature of pushing several
streams to the same CDN address with different priorities,
create a Media Push task No. 1 to the CDN with priority 1
(`, _jsx(_components.code, {
            children: "<rtmp://xxx/xxx/xxx>? priority=1"
          }), `). If task 1 fails, create
task 2 with priority is 2. In this case, task 1 is ignored by the CDN.
The priority fields of different CDNs are different. Check with the CDN vendor
whether the priority function is supported and what the name of the
priority field is.`]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["For use cases with higher quality requirements, requesting multiple Media Push tasks with different tagging enables isolated resources for these tasks and raises the success rate. Media Push supports room-level isolation for tasks. For example, if there is a task with ", _jsx(_components.code, {
        children: '"name":"my-task"'
      }), " in the original request, you can add a suffix to the ", _jsx(_components.code, {
        children: "name"
      }), " parameter to realize isolation at the computer room level. Use ", _jsx(_components.code, {
        children: '"name":"my-task-agora-isolate-1"'
      }), " and ", _jsx(_components.code, {
        children: '"name":"my-task-agora-isolate-2"'
      }), " to start additional tasks. Note that:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If resources are insufficient, then tasks started later fails."
      }), `
`, _jsxs(_components.li, {
        children: ["Media Push supports up to three-way isolation, That is, ", _jsx(_components.code, {
          children: "my-taskagora-isolate1"
        }), ", ", _jsx(_components.code, {
          children: "my-task-agoraisolate-2"
        }), ", and ", _jsx(_components.code, {
          children: "my-taskagora-isolate-3"
        }), " can be separated."]
      }), `
`]
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
      id: "create-a-media-push-rtmp-converter",
      children: "Create a Media Push RTMP Converter"
    }), `
`, _jsxs(_components.p, {
      children: ["When creating a converter with a ", _jsx(_components.code, {
        children: "create"
      }), " call, pay attention to the following:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Create the converter by region parameter:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The region you set must be in the same area as your CDN origin station. For example, if your CDN origin is located in the US, set region to ", _jsx(_components.code, {
              children: "na"
            }), "."]
          }), `
`, _jsx(_components.li, {
            children: "Pass the region value in lowercase."
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Agora recommends that you assign a string value to the ", _jsx(_components.code, {
            children: "X-Request-ID"
          }), " field in the request header. The Agora server returns an ", _jsx(_components.code, {
            children: "X-Custom-request-ID"
          }), " field in the response header for troubleshooting purposes."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Set UID or account as the user name for the converter. Do not set these two fields at the same time. Ensure that each converter has a unique user name within the channel."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["To avoid repeated media streaming due to repeated creation of multiple converters, it is recommended to use the name field to manage converters under a specific project. At the same time, converters with the same names cannot exist in a project. If you attempt to create a converter with the same name, you receive the ", _jsx(_components.code, {
            children: "409"
          }), " (Conflict) status code."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Agora recommends that you assign the name using a combination of the channel name and a converter property. For example, ", _jsx(_components.code, {
            children: "show68_horizontal"
          }), " and ", _jsx(_components.code, {
            children: "show68_vertical"
          }), " would represent a horizontal and a vertical layout respectively."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "audioOption"
          }), " and ", _jsx(_components.code, {
            children: "videoOptions"
          }), " are set as follows for audio only or video only use-cases:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["In a video only use-case, you do not need to set ", _jsx(_components.code, {
              children: "audioOptions"
            }), " and its related fields."]
          }), `
`, _jsxs(_components.li, {
            children: ["In an audio-only use-case, you do not need to set ", _jsx(_components.code, {
              children: "videoOptions"
            }), " and its related fields by default. For special cases, see ", _jsx(_components.a, {
              href: "#output-sei-in-audio-only-use-cases",
              children: "Output SEI in audio-only use-cases"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["In audio plus video use-cases, ", _jsx(_components.code, {
              children: "videoOptions"
            }), " and ", _jsx(_components.code, {
              children: "audioOptions"
            }), " are required and cannot be left blank. If you do not need to configure ", _jsx(_components.code, {
              children: "audioOptions"
            }), ", set the field to the JSON ", _jsx(_components.code, {
              children: "null"
            }), " value."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Set an appropriate value for ", _jsx(_components.code, {
            children: "idleTimeout"
          }), ". The default value of 300 seconds is recommended. It means that the converter is automatically destroyed, 300 seconds after all subscribers leave the channel."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "output-sei-in-audio-only-use-cases",
      children: "Output SEI in audio-only use-cases"
    }), `
`, _jsxs(_components.p, {
      children: ["In an audio-only use-case, by default, you do not need to set ", _jsx(_components.code, {
        children: "videoOptions"
      }), " and its related fields. However, if you need to carry additional user information, such as volume, you can set SEI information with the ", _jsx(_components.code, {
        children: "seiOptions"
      }), " field in ", _jsx(_components.code, {
        children: "videoOptions"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "If you want to output SEI information in Metadata or DataStream type carried by the user in an audio-only use-case and avoid video transcoding fees, follow these steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Pass the SEI information to be output in ", _jsx(_components.code, {
          children: "videoOptions.seiOptions"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Ensure that the ", _jsx(_components.code, {
          children: "width"
        }), " and ", _jsx(_components.code, {
          children: "height"
        }), " in ", _jsx(_components.code, {
          children: "videoOptions.canvas"
        }), " are set to ", _jsx(_components.code, {
          children: "16"
        }), " to avoid video transcoding fees."]
      }), `
`, _jsxs(_components.li, {
        children: ["Pass the UID of the user who carries the SEI information in ", _jsx(_components.code, {
          children: "rtcStreamUid"
        }), " field in ", _jsx(_components.code, {
          children: "videoOptions.layout"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "update-rtmp-converter",
      children: "Update RTMP converter"
    }), `
`, _jsxs(_components.p, {
      children: ["When updating a specified converter with an ", _jsx(_components.code, {
        children: "Update"
      }), ` call, pay attention
to the following:`]
    }), `
`, _jsx(_components.p, {
      children: `When you use the query parameter sequence to update the same converter
multiple times, ensure that the sequence value increases. Media Push updates the converter according to the latest update request, that is, the maximum sequence number.`
    }), `
`, _jsx(_components.p, {
      children: "The Update API does not support the following configuration parameters:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "name"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "idleTimeOut"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "transcodeOptions.rtcChannel"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "transcodeOptions.audioOptions.codecProfile"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "transcodeOptions.audioOptions.sampleRate"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "transcodeOptions.audioOptions.bitrate"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "transcodeOptions.audioOptions.audioChannels"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "transcodeOptions.videoOptions.codec"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "transcodeOptions.videoOptions.codecProfile"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "troubleshooting-and-recommended-measures",
      children: "Troubleshooting and recommended measures"
    }), `
`, _jsx(_components.h3, {
      id: "retry-with-retreat-strategy",
      children: "Retry with retreat strategy"
    }), `
`, _jsxs(_components.p, {
      children: ["If you receive ", _jsx(_components.code, {
        children: "404"
      }), ", ", _jsx(_components.code, {
        children: "429"
      }), ", or ", _jsx(_components.code, {
        children: "5xx"
      }), " error codes, use a backoff strategy. For example, wait 5-6 seconds, 10-11 seconds, or 15-16 seconds and try again. If you get three consecutive ", _jsx(_components.code, {
        children: "404"
      }), " or ", _jsx(_components.code, {
        children: "5xx"
      }), " error codes, or if the ", _jsx(_components.code, {
        children: "state"
      }), " field in the response to checking the status of a Media Push task says ", _jsx(_components.code, {
        children: "failed"
      }), ", it means that the Media Push task has failed. To fix this problem, follow these steps:"]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Check whether the CDN address is correct."
      }), `
`, _jsx(_components.li, {
        children: "If the CDN address is correct, destroy the current converter and create a new one."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "troubleshooting-by-error-code",
      children: "Troubleshooting by error code"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If the status code is 200, the request is successful."
      }), `
`, _jsxs(_components.li, {
        children: ["If the status code is not ", _jsx(_components.code, {
          children: "200"
        }), ", the request has failed. See the error message in the response body for clarification."]
      }), `
`]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Status code"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Possible error message"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Possible reason of failure"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Measures to take"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "400"
            }), " Bad Request"]
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Invalid parameter: ", _jsx(_components.code, {
              children: "rtmpUrl"
            }), ". Replace and retry. Invalid parameter: ", _jsx(_components.code, {
              children: "idleTimeout"
            }), ". Replace and retry."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Wrong parameters."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Check by referring to the ", _jsx(_components.code, {
              children: "reason"
            }), " field in the HTTP response body."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "401"
            }), " Unauthorized"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Invalid authentication credentials."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "RESTful API authentication failed."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["See ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/media-push/restful-authentication",
              children: "RESTful Authentication"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "403"
            }), " Forbidden"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No valid permission to use this function. Contact us."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Service is not enabled."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Enable the service."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "404"
            }), " Not Found"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Resource is not found and destroyed."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The task was not started or is in the process of failover or deletion."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retry following the retreat strategy."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "409"
            }), " Conflict"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Resource with the same name already exists. Use the existing resource or delete it and create a new resource."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Resource with the same name already exists."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Delete the existing converter and create a new one."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "429"
            }), " Too Many Requests"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Request rate limit exceeded. Resources quota exceeded. No available resources."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Too many request"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retry following the retreat strategy."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "500"
            }), " Unknown"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internal error. Contact us for troubleshooting."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internal error"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retry following the retreat strategy."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "501"
            }), " Not Implemented"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The requested method has not been implemented."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internal error"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retry following the retreat strategy."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "503"
            }), " Service Unavailable"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The server is temporarily overloaded. Retry following the retreat strategy and contact us for troubleshooting. The server is temporarily down. Retry following the retreat strategy."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internal error."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retry following the retreat strategy."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "504"
            }), " Gateway Timeout"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Gateway timeout. Check whether the resource is created. If not, create a new resource."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internal error."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retry following the retreat strategy."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "contact-agora-technical-support",
      children: "Contact Agora technical support"
    }), `
`, _jsxs(_components.p, {
      children: ["If the error persists, print the ", _jsx(_components.code, {
        children: "X-Request-ID"
      }), " and ", _jsx(_components.code, {
        children: "X-Resource-ID"
      }), " fields in the response header in the log and contact technical support."]
    }), `
`, _jsx(_components.h2, {
      id: "integration-checklist",
      children: "Integration checklist"
    }), `
`, _jsx(_components.p, {
      children: `Refer to the following table to quickly check whether each check item meets the integration requirements to ensure the
reliability of Media Push.`
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Required or optional"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Item"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Check"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Channel mode"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Ensure that the scene of the channel is live."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Availability"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Enable Media Push."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "QPS limit"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Ensure that the rate of API calls in a project is below the maximum limit."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Maximum number of concurrent Tasks"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Ensure that the number of concurrent tasks in a project is below 300."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Optional"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Converter name"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Use the name field to manage the converter under the specified project. Assigning the name as a combination of the channel name and a converter property."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Region"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Set the region in the same area as your media streaming."
              }), `
`, _jsx(_components.li, {
                children: "Pass region value in lowercase."
              }), `
`]
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Idle timeout"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Set an appropriate ", _jsx(_components.code, {
              children: "idleTimeout"
            }), " value. 300 seconds is recommended."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Optional"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Troubleshooting"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.p, {
              children: "Rectify the errors as follows:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Use the retreat strategy."
              }), `
`, _jsx(_components.li, {
                children: "Check the error code."
              }), `
`]
            }), _jsxs(_components.p, {
              children: ["If the preceding troubleshooting methods do not resolve the problem, print the values of the ", _jsx(_components.code, {
                children: "X-Request-ID"
              }), " and ", _jsx(_components.code, {
                children: "X-Resource-ID"
              }), " fields in the response header and contact Agora technical support."]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Optional"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Message notifications"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Enable message notification service for Media Push and listen to Media Push events."
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
