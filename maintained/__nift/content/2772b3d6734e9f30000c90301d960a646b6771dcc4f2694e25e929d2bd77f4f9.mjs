import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Best practice integrating Media Pull",
  description: "Best practices for integrating Media Pull into your app"
};
export let _markdown = `

To ensure reliability of Media Pull, follow the advice on this page when integrating Media Pull RESTful APIs.

## Prerequisites [#prerequisites]

You need the following to start using Media Pull RESTful API:

* The scene of the channel is live, profile set to \`BROADCASTING\`
* Media Pull is enabled

Agora also recommends enabling the Message Notification Service to monitor Media Pull events.

## Check the limits [#check-the-limits]

Check that your Peak Concurrent Worker (PCW), Queries Per Second (QPS), and the number of streams do not exceed the following limits set by Agora.

#### QPS [#qps]

Agora sets the following QPS limits for the Media Pull RESTful API:

| API    | QPS limit                                                                                                                                                                                                  |
| :----- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Create | * Creating Media Pull tasks (cloud players) with names is limited to 2 queries per second.
* Creating cloud players without names is limited to 50 queries per second.                                     |
| Delete | Deleting cloud players is limited to 100 queries per second.                                                                                                                                               |
| List   | - For a project with filter, the limit of the query rate is 2 times per second and 15 times per minute.
- When there is no filter, the limit of query rate is 10 times per second and 20 times per minute. |

When the QPS limit is exceeded, the status code \`429\` (Too Many Requests) is returned. To extend the QPS limit, contact [support@agora.io](mailto\\:support@agora.io).

#### PCW [#pcw]

The PCW limit depends on your video stream resolution and region.

Resolutions:

* SD: Standard definition video, resolution ≤ 640 × 360
* HD: High definition video, resolution ≤ 1280 × 720 and > 640 × 360
* FHD: Full HD video, resolution ≤ 1920 × 1080 and > 1280 × 720

| Service type | Mainland China           | Europe                  | America                 | Asia (excluding mainland China) |
| :----------- | :----------------------- | :---------------------- | :---------------------- | :------------------------------ |
| Media Pull   | - SD 20
- HD 20
- FHD 10 | * SD 20
* HD 10
* FHD 5 | - SD 20
- HD 10
- FHD 5 | * SD 20
* HD 20
* FHD 5         |

If you need to extend the PCW limit, contact [support@agora.io](mailto\\:support@agora.io).

### Number of streams [#number-of-streams]

The upper limit of video attributes supported by Agora is as follows:

* Resolution 1920 × 1080
* Frame rate 30 FPS

The maximum number of supported streams is as follows:

| Service type | Mainland China           | Europe                  | America                 | Asia (excluding mainland China) |
| :----------- | :----------------------- | :---------------------- | :---------------------- | :------------------------------ |
| Media Pull   | * SD 20
* HD 20
* FHD 10 | - SD 20
- HD 10
- FHD 5 | * SD 20
* HD 10
* FHD 5 | - SD 20
- HD 20
- FHD 5         |

<CalloutContainer type="warning">
  <CalloutTitle>
    Important
  </CalloutTitle>

  <CalloutDescription>
    If you need to inject multiple streams of different resolutions at the same time, make sure you meet the following requirements:<ul><li>The number of streams per resolution cannot exceed the corresponding limit for that resolution.</li><li>The total number of streams cannot exceed the limit set for the higher resolution. For example, if you need to inject both SD and HD streams in Europe, the total number of streams cannot exceed 20. If you need to inject HD and FHD, the total number cannot exceed 10.</li></ul>
  </CalloutDescription>
</CalloutContainer>

## Ensure the high availability of REST services [#ensure-the-high-availability-of-rest-services]

To ensure the high availability of REST services and prevent downtime caused by regional network faults, Agora provides
failover and domain name switch.

### Failover [#failover]

Network failures and risks may be caused by cloud and network software, infrastructure, and other factors that Agora cannot control.
To provide the best possible user experience, Media Pull provides high availability automatic task migration for failure recovery.
After a failure is confirmed, the Media Pull task is migrated within 240 seconds. During this period, the task may be interrupted.

If you cannot accept the impact of high availability migration based on your own business characteristics, adopt higher quality assurance measures. For example, create multiple Media Pull tasks for critical
scenes. Alternatively, you can make periodic API calls and monitor notifications to get the latest
task status, then create a new task with a different UID once you confirm the task status is unhealthy.

### Multiple Media Pull tasks [#multiple-media-pull-tasks]

If you need a more reliable solution than fault recovery, use multiple Media Pull tasks.

Start a master Media Pull task and multiple backup tasks at the same time, then publish their streams into the same channel.
In your app, subscribe audience members to the master stream and listen to the following callback events:

* \`onUserOffline\` - The callback saying that the anchor is offline
* \`onRemoteAudioStateChanged/onRemoteVideoStateChanged\` - The host audio and callback state has changed

When you receive these notification, notify the apps where users are subscribed to the channel as audience members so that they switch to a backup stream.

When you create multiple Media Pull tasks, you are charged separately for each of them. For details, see [Media Pull pricing](../reference/pricing).

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

## Troubleshooting and recommended measures [#troubleshooting-and-recommended-measures]

### Retry with retreat strategy [#retry-with-retreat-strategy]

If you receive \`404\`, \`429\`, or \`5xx\` error codes, take an escape strategy. For example, wait 5-6 seconds, 10-11 seconds,
or 15-16 seconds and try again.
If you get three consecutive \`404\` or \`5xx\` error codes, or if the \`state\` field in the response to checking the status of a media push task says \`failed\`, it means that the Media Pull task has failed. To fix this problem, follow these steps:

1. Check whether the media stream address is correct and whether the media stream can be played.
2. If the media stream address is correct and can be played, destroy the current cloud player and create a new one.

### Troubleshooting by error code [#troubleshooting-by-error-code]

* If the status code is \`200\`, the request is successful.
* If the status code is not \`200\`, the request has failed. See the error message in the response body for clarification.

| Status code               | Possible error message                                                                                                                                    | Possible reason of failure                                             | Measures to take                                                                           |
| :------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------- | :----------------------------------------------------------------------------------------- |
| \`400\` Bad Request         | The 'streamUrl' parameter is incorrectly formatted. The \`channelName\` parameter is invalid. Fix it in your request and retry.                             | Wrong parameters                                                       | Check by referring to the \`reason\` field in the HTTP response body.                        |
| \`401\` Unauthorized        | Invalid authentication credentials.                                                                                                                       | RESTful API authentication failed.                                     | See [RESTful Authentication](/en/api-reference/api-ref/media-pull/restful-authentication). |
| \`403\` Forbidden           | Cloud player is not enabled for this project. Contact us to enable it. This project's permission to use cloud player was revoked. Contact us for details. | The service is not enabled.                                            | Enable the service.                                                                        |
| \`404\` Not Found           | Resource is not found or destroyed.                                                                                                                       | The task was not started or is in the process of failover or deletion. | Retry following the retreat strategy.                                                      |
| \`409\` Conflict            | Resource with the same name already exists.                                                                                                               | Resource with the same name already exists.                            | Delete the existing cloud player and create it again.                                      |
| \`429\` Too Many Requests   | Request rate limit exceeded. Resource quota exceeded. No available resources.                                                                             | Too many requests.                                                     | Retry following the retreat strategy.                                                      |
| \`500\` Unknown             | Some internal error happened. Contact us to help fix it.                                                                                                  | Internal error.                                                        | Retry following the retreat strategy.                                                      |
| \`502\` Bad gateway         | Internal errors. Contact us for troubleshooting.                                                                                                          | Internal error.                                                        | Retry with retreat strategy.                                                               |
| \`503\` Service Unavailable | Service overload. Retry with the retreat strategy and contact us to help fix it. Service unavailable temporarily. Retry with the retreat strategy.        | Internal error                                                         | Retry following the retreat strategy.                                                      |
| \`504\` Gateway Timeout     | Gateway timeout. Query to check whether the player has been created or to create one instead.                                                             | Internal error.                                                        | Retry following the retreat strategy.                                                      |

### Contact Agora technical support [#contact-agora-technical-support]

If the error persists, print the \`X-Request-ID\` and \`X-Resource-ID\` fields in the response header in the log and contact technical support.

## Integration checklist [#integration-checklist]

Refer to the following table to quickly check whether each check item meets the integration requirements to ensure the
reliability of Media Pull.

| Required or optional | Item                               | Check                                                                                                                                                                                                                                                                               |
| :------------------- | :--------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Required             | Channel mode                       | Ensure that the scene of the channel is live.                                                                                                                                                                                                                                       |
| Required             | Availability                       | Enable Media Pull.                                                                                                                                                                                                                                                                  |
| Required             | QPS limit                          | Ensure that the rate of API calls in a project is below the maximum limit.                                                                                                                                                                                                          |
| Required             | Maximum number of concurrent Tasks | Ensure that the number of concurrent tasks in a project is below 50.                                                                                                                                                                                                                |
| Optional             | Cloud player user name             | * Set UID or account as the user name for cloud player. Do not set both fields at the same time.
* Use the name field to manage the cloud player under the specified project.                                                                                                       |
| Required             | Region                             | - Set the region in the same area as your media streaming.
- Pass region value in lowercase.                                                                                                                                                                                        |
| Required             | Idle timeout                       | Set an appropriate \`idleTimeout\` value. 300 seconds is recommended.                                                                                                                                                                                                                 |
| Optional             | Troubleshooting                    | Rectify the errors as follows:- Use the retreat strategy.
- Check the error code.If the preceding troubleshooting methods do not resolve the problem, print the values of the \`X-Request-ID\` and \`X-Resource-ID\` fields in the response header and contact Agora technical support. |
| Optional             | Message notifications              | Enable message notification service for Media Pull and listen to Media Pull events.                                                                                                                                                                                                 |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "To ensure reliability of Media Pull, follow the advice on this page when integrating Media Pull RESTful APIs."
  }, {
    heading: "prerequisites",
    content: "You need the following to start using Media Pull RESTful API:"
  }, {
    heading: "prerequisites",
    content: "The scene of the channel is live, profile set to `BROADCASTING`"
  }, {
    heading: "prerequisites",
    content: "Media Pull is enabled"
  }, {
    heading: "prerequisites",
    content: "Agora also recommends enabling the Message Notification Service to monitor Media Pull events."
  }, {
    heading: "check-the-limits",
    content: "Check that your Peak Concurrent Worker (PCW), Queries Per Second (QPS), and the number of streams do not exceed the following limits set by Agora."
  }, {
    heading: "qps",
    content: "Agora sets the following QPS limits for the Media Pull RESTful API:"
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
    content: `* Creating Media Pull tasks (cloud players) with names is limited to 2 queries per second.
* Creating cloud players without names is limited to 50 queries per second.`
  }, {
    heading: "qps",
    content: "Delete"
  }, {
    heading: "qps",
    content: "Deleting cloud players is limited to 100 queries per second."
  }, {
    heading: "qps",
    content: "List"
  }, {
    heading: "qps",
    content: `* For a project with filter, the limit of the query rate is 2 times per second and 15 times per minute.
* When there is no filter, the limit of query rate is 10 times per second and 20 times per minute.`
  }, {
    heading: "qps",
    content: "When the QPS limit is exceeded, the status code `429` (Too Many Requests) is returned. To extend the QPS limit, contact support\\@agora.io."
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
    content: "Service type"
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
    content: "Media Pull"
  }, {
    heading: "pcw",
    content: `* SD 20
* HD 20
* FHD 10`
  }, {
    heading: "pcw",
    content: `* SD 20
* HD 10
* FHD 5`
  }, {
    heading: "pcw",
    content: `* SD 20
* HD 10
* FHD 5`
  }, {
    heading: "pcw",
    content: `* SD 20
* HD 20
* FHD 5`
  }, {
    heading: "pcw",
    content: "If you need to extend the PCW limit, contact support\\@agora.io."
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
    content: "Media Pull"
  }, {
    heading: "number-of-streams",
    content: `* SD 20
* HD 20
* FHD 10`
  }, {
    heading: "number-of-streams",
    content: `* SD 20
* HD 10
* FHD 5`
  }, {
    heading: "number-of-streams",
    content: `* SD 20
* HD 10
* FHD 5`
  }, {
    heading: "number-of-streams",
    content: `* SD 20
* HD 20
* FHD 5`
  }, {
    heading: "number-of-streams",
    content: "If you need to inject multiple streams of different resolutions at the same time, make sure you meet the following requirements:<ul><li>The number of streams per resolution cannot exceed the corresponding limit for that resolution.</li><li>The total number of streams cannot exceed the limit set for the higher resolution. For example, if you need to inject both SD and HD streams in Europe, the total number of streams cannot exceed 20. If you need to inject HD and FHD, the total number cannot exceed 10.</li></ul>"
  }, {
    heading: "ensure-the-high-availability-of-rest-services",
    content: `To ensure the high availability of REST services and prevent downtime caused by regional network faults, Agora provides
failover and domain name switch.`
  }, {
    heading: "failover",
    content: `Network failures and risks may be caused by cloud and network software, infrastructure, and other factors that Agora cannot control.
To provide the best possible user experience, Media Pull provides high availability automatic task migration for failure recovery.
After a failure is confirmed, the Media Pull task is migrated within 240 seconds. During this period, the task may be interrupted.`
  }, {
    heading: "failover",
    content: `If you cannot accept the impact of high availability migration based on your own business characteristics, adopt higher quality assurance measures. For example, create multiple Media Pull tasks for critical
scenes. Alternatively, you can make periodic API calls and monitor notifications to get the latest
task status, then create a new task with a different UID once you confirm the task status is unhealthy.`
  }, {
    heading: "multiple-media-pull-tasks",
    content: "If you need a more reliable solution than fault recovery, use multiple Media Pull tasks."
  }, {
    heading: "multiple-media-pull-tasks",
    content: `Start a master Media Pull task and multiple backup tasks at the same time, then publish their streams into the same channel.
In your app, subscribe audience members to the master stream and listen to the following callback events:`
  }, {
    heading: "multiple-media-pull-tasks",
    content: "`onUserOffline` - The callback saying that the anchor is offline"
  }, {
    heading: "multiple-media-pull-tasks",
    content: "`onRemoteAudioStateChanged/onRemoteVideoStateChanged` - The host audio and callback state has changed"
  }, {
    heading: "multiple-media-pull-tasks",
    content: "When you receive these notification, notify the apps where users are subscribed to the channel as audience members so that they switch to a backup stream."
  }, {
    heading: "multiple-media-pull-tasks",
    content: "When you create multiple Media Pull tasks, you are charged separately for each of them. For details, see Media Pull pricing."
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
    heading: "retry-with-retreat-strategy",
    content: "If you receive `404`, `429`, or `5xx` error codes, take an escape strategy. For example, wait 5-6 seconds, 10-11 seconds,\nor 15-16 seconds and try again.\nIf you get three consecutive `404` or `5xx` error codes, or if the `state` field in the response to checking the status of a media push task says `failed`, it means that the Media Pull task has failed. To fix this problem, follow these steps:"
  }, {
    heading: "retry-with-retreat-strategy",
    content: "Check whether the media stream address is correct and whether the media stream can be played."
  }, {
    heading: "retry-with-retreat-strategy",
    content: "If the media stream address is correct and can be played, destroy the current cloud player and create a new one."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "If the status code is `200`, the request is successful."
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
    content: "The 'streamUrl' parameter is incorrectly formatted. The `channelName` parameter is invalid. Fix it in your request and retry."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Wrong parameters"
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
    content: "See RESTful Authentication."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "`403` Forbidden"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Cloud player is not enabled for this project. Contact us to enable it. This project's permission to use cloud player was revoked. Contact us for details."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "The service is not enabled."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Enable the service."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "`404` Not Found"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Resource is not found or destroyed."
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
    content: "Resource with the same name already exists."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Resource with the same name already exists."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Delete the existing cloud player and create it again."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "`429` Too Many Requests"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Request rate limit exceeded. Resource quota exceeded. No available resources."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Too many requests."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Retry following the retreat strategy."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "`500` Unknown"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Some internal error happened. Contact us to help fix it."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Internal error."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Retry following the retreat strategy."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "`502` Bad gateway"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Internal errors. Contact us for troubleshooting."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Internal error."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Retry with retreat strategy."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "`503` Service Unavailable"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Service overload. Retry with the retreat strategy and contact us to help fix it. Service unavailable temporarily. Retry with the retreat strategy."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Internal error"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Retry following the retreat strategy."
  }, {
    heading: "troubleshooting-by-error-code",
    content: "`504` Gateway Timeout"
  }, {
    heading: "troubleshooting-by-error-code",
    content: "Gateway timeout. Query to check whether the player has been created or to create one instead."
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
reliability of Media Pull.`
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
    content: "Enable Media Pull."
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
    content: "Ensure that the number of concurrent tasks in a project is below 50."
  }, {
    heading: "integration-checklist",
    content: "Optional"
  }, {
    heading: "integration-checklist",
    content: "Cloud player user name"
  }, {
    heading: "integration-checklist",
    content: `* Set UID or account as the user name for cloud player. Do not set both fields at the same time.
* Use the name field to manage the cloud player under the specified project.`
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
    content: "Enable message notification service for Media Pull and listen to Media Pull events."
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
    id: "multiple-media-pull-tasks",
    content: "Multiple Media Pull tasks"
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
  depth: 3,
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
  url: "#multiple-media-pull-tasks",
  title: _jsx(_Fragment, {
    children: "Multiple Media Pull tasks"
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
      children: "To ensure reliability of Media Pull, follow the advice on this page when integrating Media Pull RESTful APIs."
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "You need the following to start using Media Pull RESTful API:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["The scene of the channel is live, profile set to ", _jsx(_components.code, {
          children: "BROADCASTING"
        })]
      }), `
`, _jsx(_components.li, {
        children: "Media Pull is enabled"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Agora also recommends enabling the Message Notification Service to monitor Media Pull events."
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
      children: "Agora sets the following QPS limits for the Media Pull RESTful API:"
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
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Creating Media Pull tasks (cloud players) with names is limited to 2 queries per second."
              }), `
`, _jsx(_components.li, {
                children: "Creating cloud players without names is limited to 50 queries per second."
              }), `
`]
            })
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
            children: "Deleting cloud players is limited to 100 queries per second."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "List"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "For a project with filter, the limit of the query rate is 2 times per second and 15 times per minute."
              }), `
`, _jsx(_components.li, {
                children: "When there is no filter, the limit of query rate is 10 times per second and 20 times per minute."
              }), `
`]
            })
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["When the QPS limit is exceeded, the status code ", _jsx(_components.code, {
        children: "429"
      }), " (Too Many Requests) is returned. To extend the QPS limit, contact ", _jsx(_components.a, {
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
            children: "Media Pull"
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
                children: "HD 20"
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
                children: "SD 20"
              }), `
`, _jsx(_components.li, {
                children: "HD 10"
              }), `
`, _jsx(_components.li, {
                children: "FHD 5"
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
                children: "HD 10"
              }), `
`, _jsx(_components.li, {
                children: "FHD 5"
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
                children: "HD 20"
              }), `
`, _jsx(_components.li, {
                children: "FHD 5"
              }), `
`]
            })
          })]
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["If you need to extend the PCW limit, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), "."]
    }), `
`, _jsx(_components.h3, {
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
            children: "Media Pull"
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
                children: "HD 20"
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
                children: "SD 20"
              }), `
`, _jsx(_components.li, {
                children: "HD 10"
              }), `
`, _jsx(_components.li, {
                children: "FHD 5"
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
                children: "HD 10"
              }), `
`, _jsx(_components.li, {
                children: "FHD 5"
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
                children: "HD 20"
              }), `
`, _jsx(_components.li, {
                children: "FHD 5"
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
        children: "Important"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If you need to inject multiple streams of different resolutions at the same time, make sure you meet the following requirements:", "The number of streams per resolution cannot exceed the corresponding limit for that resolution.", "The total number of streams cannot exceed the limit set for the higher resolution. For example, if you need to inject both SD and HD streams in Europe, the total number of streams cannot exceed 20. If you need to inject HD and FHD, the total number cannot exceed 10."]
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
To provide the best possible user experience, Media Pull provides high availability automatic task migration for failure recovery.
After a failure is confirmed, the Media Pull task is migrated within 240 seconds. During this period, the task may be interrupted.`
    }), `
`, _jsx(_components.p, {
      children: `If you cannot accept the impact of high availability migration based on your own business characteristics, adopt higher quality assurance measures. For example, create multiple Media Pull tasks for critical
scenes. Alternatively, you can make periodic API calls and monitor notifications to get the latest
task status, then create a new task with a different UID once you confirm the task status is unhealthy.`
    }), `
`, _jsx(_components.h3, {
      id: "multiple-media-pull-tasks",
      children: "Multiple Media Pull tasks"
    }), `
`, _jsx(_components.p, {
      children: "If you need a more reliable solution than fault recovery, use multiple Media Pull tasks."
    }), `
`, _jsx(_components.p, {
      children: `Start a master Media Pull task and multiple backup tasks at the same time, then publish their streams into the same channel.
In your app, subscribe audience members to the master stream and listen to the following callback events:`
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "onUserOffline"
        }), " - The callback saying that the anchor is offline"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "onRemoteAudioStateChanged/onRemoteVideoStateChanged"
        }), " - The host audio and callback state has changed"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "When you receive these notification, notify the apps where users are subscribed to the channel as audience members so that they switch to a backup stream."
    }), `
`, _jsxs(_components.p, {
      children: ["When you create multiple Media Pull tasks, you are charged separately for each of them. For details, see ", _jsx(_components.a, {
        href: "../reference/pricing",
        children: "Media Pull pricing"
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
      }), ` error codes, take an escape strategy. For example, wait 5-6 seconds, 10-11 seconds,
or 15-16 seconds and try again.
If you get three consecutive `, _jsx(_components.code, {
        children: "404"
      }), " or ", _jsx(_components.code, {
        children: "5xx"
      }), " error codes, or if the ", _jsx(_components.code, {
        children: "state"
      }), " field in the response to checking the status of a media push task says ", _jsx(_components.code, {
        children: "failed"
      }), ", it means that the Media Pull task has failed. To fix this problem, follow these steps:"]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Check whether the media stream address is correct and whether the media stream can be played."
      }), `
`, _jsx(_components.li, {
        children: "If the media stream address is correct and can be played, destroy the current cloud player and create a new one."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "troubleshooting-by-error-code",
      children: "Troubleshooting by error code"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["If the status code is ", _jsx(_components.code, {
          children: "200"
        }), ", the request is successful."]
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
            children: ["The 'streamUrl' parameter is incorrectly formatted. The ", _jsx(_components.code, {
              children: "channelName"
            }), " parameter is invalid. Fix it in your request and retry."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Wrong parameters"
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
              href: "/en/api-reference/api-ref/media-pull/restful-authentication",
              children: "RESTful Authentication"
            }), "."]
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
            children: "Cloud player is not enabled for this project. Contact us to enable it. This project's permission to use cloud player was revoked. Contact us for details."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The service is not enabled."
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
            children: "Resource is not found or destroyed."
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
            children: "Resource with the same name already exists."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Resource with the same name already exists."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Delete the existing cloud player and create it again."
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
            children: "Request rate limit exceeded. Resource quota exceeded. No available resources."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Too many requests."
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
            children: "Some internal error happened. Contact us to help fix it."
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
              children: "502"
            }), " Bad gateway"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internal errors. Contact us for troubleshooting."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Internal error."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Retry with retreat strategy."
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
            children: "Service overload. Retry with the retreat strategy and contact us to help fix it. Service unavailable temporarily. Retry with the retreat strategy."
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
              children: "504"
            }), " Gateway Timeout"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Gateway timeout. Query to check whether the player has been created or to create one instead."
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
reliability of Media Pull.`
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
            children: "Enable Media Pull."
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
            children: "Ensure that the number of concurrent tasks in a project is below 50."
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
            children: "Cloud player user name"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Set UID or account as the user name for cloud player. Do not set both fields at the same time."
              }), `
`, _jsx(_components.li, {
                children: "Use the name field to manage the cloud player under the specified project."
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
            children: "Enable message notification service for Media Pull and listen to Media Pull events."
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
