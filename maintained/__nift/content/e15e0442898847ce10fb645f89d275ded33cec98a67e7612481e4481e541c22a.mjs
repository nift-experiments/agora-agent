import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Analytics REST API reference",
  description: "Agora Analytics REST APIs for call quality, usage, and real-time monitoring metrics."
};
export let _markdown = `

Before working with the RESTful APIs, review the Agora Analytics features in [Agora Console](https://console.agora.io/) to gain a visual understanding of the quality and usage metrics that are available. For details, see the following user guides:

* [Call Inspector](#call-inspector)
* [Data Insights](#data-insights)
* [Real-time Monitoring](#real-time-monitoring)

<CalloutContainer type="info">
  <CalloutDescription>
    To use Agora Analytics RESTful APIs, subscribe to an [Agora Analytics pricing plan](/en/realtime-media/agora-analytics/reference/pricing).
  </CalloutDescription>
</CalloutContainer>

## Authentication [#authentication]

Before using the Agora RESTful API, you need to pass the [basic HTTP authentication](analytics-restful-authentication).

## Data format [#data-format]

All requests are sent to the host: \`api.agora.io\`.

* Request: The request uses query string parameters in the URL.
* Response: The response content is in JSON format.

## Call Inspector [#call-inspector]

With the Call Inspector RESTful APIs, you can search for calls with quality issues and obtain detailed metrics about call quality.

### API limits [#api-limits]

The limits of the Call Inspector RESTful APIs depend on the [pricing plan](/en/realtime-media/agora-analytics/reference/pricing) you subscribe to.

The Starter, Standard, Premium, and Enterprise pricing plans have the following differences in terms of API limits:

<CalloutContainer type="info">
  <CalloutDescription>
    * Request frequency is calculated using the server's UTC time.
    * Data delay refers to the time required from the generation of data to the point where it can be queried.
  </CalloutDescription>
</CalloutContainer>

* Endpoint is \`/beta/analytics/call/lists\`:

|                   | Starter | Standard                            | Premium                             | Enterprise                            |
| :---------------- | ------- | :---------------------------------- | :---------------------------------- | :------------------------------------ |
| Request frequency | N/A     | No more than 1/second and 1,000/day | No more than 3/second and 2,000/day | No more than 10/second and 10,000/day |
| Available data    | N/A     | Within the past 1 day               | Within the past 7 days              | Within the past 15 days               |
| Response content  | N/A     | A maximum of 8 hours of data        | A maximum of 16 hours of data       | A maximum of 24 hours of data         |
| Data delay        | N/A     | 60 seconds                          | 20 seconds                          | 20 seconds                            |

* Endpoint is \`/beta/analytics/call/sessions\` or \`/beta/analytics/call/metrics\`:

|                   | Starter | Standard                            | Premium                             | Enterprise                            |
| :---------------- | ------- | :---------------------------------- | :---------------------------------- | :------------------------------------ |
| Request frequency | N/A     | No more than 1/second and 1,000/day | No more than 3/second and 2,000/day | No more than 10/second and 10,000/day |
| Available data    | N/A     | Within the past 1 day               | Within the past 7 days              | Within the past 15 days               |
| Response content  | N/A     | A maximum of 1 hours of data        | A maximum of 3 hours of data        | A maximum of 6 hours of data          |
| Data delay        | N/A     | 300 seconds                         | 150 seconds                         | 100 seconds                           |

### Get call list [#get-call-list]

This method gets a list of the calls that meet the search criteria.

* Method: \`GET\`
* Endpoint: \`/beta/analytics/call/lists\`

#### Query parameters [#query-parameters]

The following query string parameters are required in the URL as search criteria:

| Parameter   | Type   | Description                                                                                     |
| ----------- | ------ | ----------------------------------------------------------------------------------------------- |
| \`appid\`     | String | The [App ID](/en/realtime-media/agora-analytics/reference/glossary#app-id) of your project.     |
| \`start_ts\`  | Number | The starting time of the search time frame. Unix time (in seconds since 1 January 1970) in UTC. |
| \`end_ts\`    | Number | The ending time of the search time frame. Unix time (in seconds since 1 January 1970) in UTC.   |
| \`cname\`     | String | (Optional) The channel name.                                                                    |
| \`page_no\`   | Number | (Optional) The page number. The default is 1.                                                   |
| \`page_size\` | Number | (Optional) The number of calls on each page. The default is 20 and the maximum is 100.          |

#### HTTP request example [#http-request-example]

\`\`\`html
GET /beta/analytics/call/lists?start_ts=1550024508&end_ts=1550025508&appid=xxxxxxxxxxxxxxxxxxxx&page_no=1&page_size=20 HTTP/1.1
Host: api.agora.io
Accept: application/json
Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh
\`\`\`

#### Response example [#response-example]

\`\`\`json
{
  "code": 0,
  "message": "string",
  "requestId": "15c99xxxxxxxxxxx9be9b",
  "total_size": 101,
  "page_no": 1,
  "page_size": 20,
  "has_more": true,
  "call_lists": [
    {
      "call_id": "cxxxxxxxxxxxxxxxxxxxx",
      "cname": "cname1",
      "created_ts": 1547448383,
      "destroyed_ts": 1547448483,
      "finished": true,
      "call_pcu": 2,
      "call_acu": 2,
      "call_audio_freeze_rate": 0.12,
      "call_video_freeze_rate": 0.07
    }
  ]
}
\`\`\`

Where:

* \`code\`: Number. The [status code](#status-codes).
* \`message\`: String. The error message.
* \`requestId\`: String. The unique identifier of the HTTP request corresponding to this HTTP response.
* \`total_size\`: Number. The total number of returned calls.
* \`page_no\`: Number. The page number.
* \`page_size\`: Number. The number of calls on each page.
* \`has_more\`: Boolean. Whether there are calls not included in \`call_lists\`.

  * \`true\` Indicates that some calls that meet the search criteria are not listed.
  * \`false\` Indicates that all calls that meet the query criteria are listed.

  If the call you need is not in \`call_lists\`, try narrowing the search and resend the request.
* \`call_lists\`: JSONArray. The returned calls in descending order of the starting time. Each call has the following properties:
  * \`call_id\`: String. The unique ID of the call.
  * \`cname\`: String. The channel name.
  * \`created_ts\`: Number. The starting time of the call. Unix time (in seconds since 1 January 1970) in UTC.
  * \`destroyed_ts\`: Number. The ending time of the call. Unix time (in seconds since 1 January 1970) in UTC.
  * \`finished\`: Boolean. Whether the call has finished or is still ongoing.
  * \`call_pcu\`: Number. Peak number of callers.
  * \`call_acu\`: Number. Average number of callers.
  * \`call_audio_freeze_rate\`: Number. The audio freeze rate.
  * \`call_video_freeze_rate\`: Number. The video freeze rate.

### Get session details [#get-session-details]

This method gets the detailed call statistics of users by specifying the unique ID of the call.

* Method: \`GET\`
* Endpoint: \`/beta/analytics/call/sessions\`

#### Query parameters [#query-parameters-1]

The following query string parameters are required in the URL to specify the call ID and statistics:

| Parameter             | Type    | Description                                                                                                                                                                                                                                                                                           |
| --------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`start_ts\`            | Number  | The starting time of the call. Unix time (in seconds since 1 January 1970) in UTC.                                                                                                                                                                                                                    |
| \`end_ts\`              | Number  | The ending time of the call. Unix time (in seconds since 1 January 1970) in UTC.                                                                                                                                                                                                                      |
| \`call_id\`             | String  | The unique ID of the call.                                                                                                                                                                                                                                                                            |
| \`page_no\`             | Number  | (Optional) The page number. The default is 1.                                                                                                                                                                                                                                                         |
| \`page_size\`           | Number  | (Optional) The number of user sessions on each page. The default is 20 and the maximum is 100. To implement pagination, specify values for both \`page_no\` and \`page_size\`.                                                                                                                            |
| \`uids\`                | String  | (Optional) The list of user IDs separated by commas. For example, \`uids=10001,10002,10003\`. You can specify a maximum of 10 user IDs. A user ID may occur twice in the list according to the actual use-case. Therefore, if you specify 10 user IDs in the request, 10 or more user IDs are returned. |
| \`appid\`               | String  | [App ID](/en/realtime-media/agora-analytics/reference/glossary#app-id) of your project.                                                                                                                                                                                                               |
| \`exclude_server_user\` | Boolean | (Optional) Whether or not to exclude Linux users. \`true\` by default, which represents excluding Linux users.                                                                                                                                                                                          |

#### HTTP request example [#http-request-example-1]

\`\`\`html
GET /beta/analytics/call/sessions?start_ts=1548665345&end_ts=1548670821&appid=axxxxxxxxxxxxxxxxxxxx&call_id=cxxxxxxxxxxxxxxxxxxxx&page_no=1&page_size=20&uids=uxx1,uxx2 HTTP/1.1
Host: api.agora.io
Accept: application/json
Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh
\`\`\`

#### Response example [#response-example-1]

\`\`\`json
{
  "code": 0,
  "message": "string",
  "requestId": "15c99xxxxxxxxxxx9be9b",
  "total_size": 101,
  "page_no": 1,
  "page_size": 20,
  "call_info": [
    {
      "sid": "xxxxxxxxxxxxxxxxxxx",
      "cname": "cname1",
      "uid": 1234567,
      "account": "UserA",
      "network": "LAN",
      "platform": "Linux",
      "speaker": false,
      "roles": [
        "SPEAKER",
        "SCREEN_SHARER"
      ],
      "sdk_version": "2.3.3.150",
      "device_type": "Linux version 4.14.255-311-248.529.amzn2.x86_64 (mockbuild@ip-10",
      "join_ts": 1692584005,
      "leave_ts": 1692584015,
      "finished": true,
      "user_audio_freeze_rate": 0.01,
      "user_video_freeze_rate": 0.03
    }
  ]
}
\`\`\`

Where:

* \`code\`: Number. The [status code](#status-codes).
* \`message\`: String. The error message.
* \`requestId\`: String. The unique identifier of the HTTP request corresponding to this HTTP response.
* \`has_more\`: Boolean. Whether there are user sessions not included in \`call_info\`.

  * \`true\` Indicates that some user sessions that meet the search criteria are not listed.
  * \`false\` Indicates that all user sessions that meet the query criteria are listed.

  If the user session you need is not in \`call_info\`, try narrowing the search and resend the request.
* \`total_size\`: Number. The total number of returned user sessions.
* \`page_no\`: Number. The page number.
* \`page_size\`: Number. The number of user sessions on each page.
* \`call_info\`: JSONArray. Information of each user in the call in descending order of the joining time per page. Each user has the following properties:
  * \`sid\`: String. The unique ID of the user session.

  * \`cname\`: String. The channel name.

  * \`uid\`: Number. The user ID.

  * \`account\`: String. User-defined nickname.

  * \`network\`: String. The network type.

  * \`platform\`: String. The platform.

  * \`speaker\`: Boolean. Whether or not the user speaks in the call.

  * \`sdk_version\`: String. The SDK version.

  * \`device_type\`: String. The type of the device used by the user.

  * \`join_ts\`: Number. The time when the user joins the call. Unix time (in seconds since 1 January 1970) in UTC.

  * \`leave_ts\`: Number. The time when the user leaves the call. Unix time (in seconds since 1 January 1970) in UTC.

  * \`finished\`: Boolean. Whether the user is in the call or has left it.

  * \`roles\`: Array. The user role ID reflects the user's role and the functions used in this call.
    * \`Audience\`: Receiving user.
    * \`Host\`: The sending user.
    * \`Screen Share\`: Screen sharing.
    * \`Interactive Live Streaming(ILS)\`: Interactive live broadcast.
    * \`Broadcast Streaming(BS)\`: Live broadcast at high speed.
    * \`Streaming robot\`: Streaming robot.
    * \`On-Premise Recording\`: Local recording.
    * \`Cloud Recording\`: Cloud recording.
    * \`WebPage Recording\`: Page recording.

  * \`user_video_freeze_rate\`: Number. User-level video freeze rate.

  * \`user_audio_freeze_rate\`: Number. User-level audio stuttering rate.

### Get quality metrics [#get-quality-metrics]

Gets the quality metrics of a specified call.

* Method: \`GET\`
* Endpoint: \`/beta/analytics/call/metrics\`

#### Query parameters [#query-parameters-2]

The following query string parameters are required in the URL to specify the call:

| Parameter  | Type   | Description                                                                                                                                                     |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`appid\`    | String | [App ID](/en/realtime-media/agora-analytics/reference/glossary#app-id) of your project.                                                                         |
| \`call_id\`  | String | The unique ID of the call.                                                                                                                                      |
| \`start_ts\` | Number | The starting time of the call. Unix time (in seconds since 1 January 1970) in UTC.                                                                              |
| \`end_ts\`   | Number | The ending time of the call. Unix time (in seconds since 1 January 1970) in UTC.                                                                                |
| \`sids\`     | String | The list of user session IDs separated by commas, for example,  \`sids=SXXXXXXXXXXXXXXXX1,SXXXXXXXXXXXXXXXX2\`. You can specify a maximum of 20 user session IDs. |

#### HTTP request example [#http-request-example-2]

\`\`\`html
GET /beta/analytics/call/metrics?start_ts=1548665345&end_ts=1548670821&appid=axxxxxxxxxxxxxxxxxxxx&call_id=cxxxxxxxxxxxxxxxxxxxx&sids=sxxxxxxxxxxxxxxxx1,sxxxxxxxxxxxxxxxx2,sxxxxxxxxxxxxxxxx3 HTTP/1.1
Host: api.agora.io
Accept: application/json
Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh
\`\`\`

#### Response example [#response-example-2]

\`\`\`json
{
  "code": 200,
  "message": "",
  "requestId": "bxxxxxxxxxxxxxxxxxx4",
  "metrics": [
      {
          "sid": "EDB224CCF4FB4F99815C24302BDF3301",
          "data": [
              {
                  "mid": 20003,
                  "kvs": [
                      [
                          1548670255,
                          215
                      ],
                      [
                          1548670257,
                          129
                      ],
                      [
                          1548670259,
                          121
                      ]
                  ],
                  "peer_uid": 0
              }
          ]
      }
  ]
}
\`\`\`

* \`code\`: Number. The [status code](#status-codes).
* \`message\`: String. The error message.
* \`requestId\`: String. The unique identifier of the HTTP request corresponding to this HTTP response.
* \`metrics\`: JSONArray. Detailed quality metrics of each user session (\`sid\`). Each user session includes the following properties:
  * \`sid\`: String. The unique ID of the user session.
  * \`data\`: Array. The quality metrics of the user session.
    * \`mid\`: Number. The ID of the metric. See [Metrics ID](#metrics-id) for details.
    * \`kvs\`: Array. Pairs of the timestamp and the corresponding metric value.
    * \`peer_uid\`: Number. The user ID of the remote user. 0 represents that the returned metrics are the local user's.

### Get call statistics [#get-call-statistics]

Retrieves statistics on the audio or video freeze rate for a specified call within a given time range and dimension.

* Method: \`GET\`
* Endpoint: \`/beta/analytics/call/statistics\`

#### Query parameters [#query-parameters-3]

The following query string parameters are required in the URL to specify the call ID and statistics:

| Parameter   | Type   | Description                                                                                                                                                                |
| ----------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`appid\`     | String | [App ID](/en/realtime-media/agora-analytics/reference/glossary#app-id) of your project.                                                                                    |
| \`call_id\`   | String | The unique ID of the call.                                                                                                                                                 |
| \`start_ts\`  | Number | The starting time of the call. Unix time (in seconds since 1 January 1970) in UTC.                                                                                         |
| \`end_ts\`    | Number | The ending time of the call. Unix time (in seconds since 1 January 1970) in UTC.                                                                                           |
| \`dimension\` | String | Statistical dimension. Supported values: \`country\` (Nation); \`region\` (Area); \`net\` (Network type); \`sdk\` (SDK version); \`os\` (Operating system); \`device\` (Device model). |
| \`metric\`    | String | Supported values: \`audio_freeze_rate\` (Audio stuttering rate); \`video_freeze_rate\` (Video freeze rate).                                                                    |

#### HTTP request example [#http-request-example-3]

\`\`\`html
curl --request GET \\
  --url https://api.sd-rtn.com/beta/analytics/call/statistics \\
  --header 'Accept: application/json' \\
  --header 'Authorization: Basic 123'
\`\`\`

#### Response example [#response-example-3]

\`\`\`json
{
  "code": 200,
  "message": "Success request: /beta/analytics/call/statistics",
  "requestId": "191xxxxxxxxxxxxxxxx0f",
  "data": [
    {
      "dimension_value": "3.7.1.247",
      "user_count": 6,
      "value": 0.007
    }
  ]
}
\`\`\`

Where:

* \`code\`: Number. The [status code](#status-codes).
* \`message\`: String. The error message.
* \`requestId\`: String. The unique identifier of the HTTP request corresponding to this HTTP response.
* \`data\`: JSONArray. An array containing the dimension value, user count, and metric values:
  * \`dimension_value\`: String. The value of the statistical dimension provided in the request.
  * \`user_count\`: Number. The number of users.
  * \`value\`: Number. The average metric value over the queried time range, matching the metric specified in the request.

### Retrieve Audio/Video freeze rate statistics [#retrieve-audiovideo-freeze-rate-statistics]

This method gets audio or video freeze rate statistics for a specific call within a defined time range.

* Method: \`GET\`
* Endpoint: \`/beta/analytics/call/freeze/bucket\`

#### Query parameters [#query-parameters-4]

The following query string parameters are required in the URL to specify the call ID and statistics:

| Parameter  | Type   | Description                                                                                             |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------- |
| \`appid\`    | String | [App ID](/en/realtime-media/agora-analytics/reference/glossary#app-id) of your project.                 |
| \`call_id\`  | String | The unique ID of the call.                                                                              |
| \`start_ts\` | Number | The starting time of the call. Unix time (in seconds since 1 January 1970) in UTC.                      |
| \`end_ts\`   | Number | The ending time of the call. Unix time (in seconds since 1 January 1970) in UTC.                        |
| \`metric\`   | String | Supported values: \`audio_freeze_rate\` (Audio stuttering rate); \`video_freeze_rate\` (Video freeze rate). |

#### HTTP request example [#http-request-example-4]

\`\`\`html
curl --request GET \\
  --url https://api.sd-rtn.com/beta/analytics/call/freeze/bucket \\
  --header 'Accept: application/json' \\
  --header 'Authorization: Basic 123'
\`\`\`

#### Response example [#response-example-4]

\`\`\`json
{
  "code": 200,
  "message": "Success request: /beta/analytics/call/freeze/bucket",
  "requestId": "1f7a7xxxxxxxxxxxxxxxe89d",
  "data": [
    {
      "bucket": "[3%,5%)",
      "user_count": 1
    },
    {
      "bucket": "[0%,3%)",
      "user_count": 19
    }
  ]
}
\`\`\`

Where:

* \`code\`: Number. The [status code](#status-codes).
* \`message\`: String. The error message.
* \`requestId\`: String. The unique identifier of the HTTP request corresponding to this HTTP response.
* \`data\`: JSONArray. An array consisting of buckets and number of people:
  * \`bucket\`: String. The call jam rate buckets represent the distribution of jam rates and include these values:
    * \`[0%,3%)\`
    * \`[3%,5%)\`
    * \`[5%,10%)\`
    * \`[10%,100%)\`
  * \`user_count\`: number. The number of people in this bucket.

### Retrieve insight statistics [#retrieve-insight-statistics]

This method gets the insight statistics for a specific call within a specified time range.

* Method: \`GET\`
* Endpoint: \`/beta/analytics/call/statistics/time\`

#### Query parameters [#query-parameters-5]

The following query string parameters are required in the URL to specify the call ID and statistics:

| Parameter  | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`appid\`    | String | [App ID](/en/realtime-media/agora-analytics/reference/glossary#app-id) of your project.                                                                                                                                                                                                                                                                                                                                           |
| \`call_id\`  | String | The unique ID of the call.                                                                                                                                                                                                                                                                                                                                                                                                        |
| \`start_ts\` | Number | The starting time of the call. Unix time (in seconds since 1 January 1970) in UTC.                                                                                                                                                                                                                                                                                                                                                |
| \`end_ts\`   | Number | The ending time of the call. Unix time (in seconds since 1 January 1970) in UTC.                                                                                                                                                                                                                                                                                                                                                  |
| \`metric\`   | String | Supported values: \`user_count\` (Number of participants in a call. Each user ID counts as one participant per channel and as multiple participants across different channels); \`audio_freeze_rate\` (Audio stuttering rate); \`video_freeze_rate\` (Video freeze rate); \`audio_freeze_user_count\` (Number of participants experiencing audio freezes); \`video_freeze_user_count\` (Number of participants experiencing video freezes). |

#### HTTP request example [#http-request-example-5]

\`\`\`html
curl --request GET \\
  --url https://api.sd-rtn.com/beta/analytics/call/statistics/time \\
  --header 'Accept: application/json' \\
  --header 'Authorization: Basic 123'
\`\`\`

#### Response example [#response-example-5]

\`\`\`json
{
  "code": 200,
  "message": "Success request: /beta/analytics/call/statistics/time",
  "requestId": "139dxxxxxxxxxxxxxxxxe968",
  "data": [
    {
      "ts": 1692584160,
      "value": 0
    },
    {
      "ts": 1692584340,
      "value": 0.007
    },
    {
      "ts": 1692584100,
      "value": 0
    },
    {
      "ts": 1692584460,
      "value": 0.003
    },
    {
      "ts": 1692584400,
      "value": 0.005
    },
    {
      "ts": 1692584580,
      "value": 0.05
    }
  ]
}
\`\`\`

Where:

* \`code\`: Number. The [status code](#status-codes).
* \`message\`: String. The error message.
* \`requestId\`: String. The unique identifier of the HTTP request corresponding to this HTTP response.
* \`data\`: JSONArray. An array containing timestamps and metric values:
  * \`ts\`: Number. Timestamp in seconds.
  * \`value\`: The indicator value at the current timestamp.

## Data Insights [#data-insights]

With the Data Insights RESTful APIs, you can query the usage and quality metrics within a specified time frame.

### API limits [#api-limits-1]

The limits of the Data Insights RESTful APIs depend on the [pricing plan](/en/realtime-media/agora-analytics/reference/pricing) you subscribe to.

The Starter, Standard, Premium, and Enterprise pricing plans have the following differences in terms of API limits:

<CalloutContainer type="info">
  <CalloutDescription>
    * Request frequency is calculated using the server's UTC time.
    * Data delay refers to the time required from the generation of data to the point where it can be queried.
  </CalloutDescription>
</CalloutContainer>

* Endpoint is \`/beta/insight/usage/by_time\`:

|                   | Starter | Standard | Premium                          | Enterprise                        |
| :---------------- | ------- | :------- | :------------------------------- | :-------------------------------- |
| Request frequency | N/A     | N/A      | No more than 3/minute and 40/day | No more than 10/minute and 60/day |
| Available data    | N/A     | N/A      | Within the past 14 days          | Within the past 30 days           |
| Query time frame  | N/A     | N/A      | No longer than 3 days            | No longer than 7 days             |
| Data granularity  | N/A     | N/A      | Per day and hour                 | Per day and hour                  |
| Data delay        | N/A     | N/A      | 12 hours                         | 6 hours                           |

* Endpoint is \`/beta/insight/quality/by_time\`:

|                   | Starter | Standard | Premium                          | Enterprise                        |
| :---------------- | ------- | :------- | :------------------------------- | :-------------------------------- |
| Request frequency | N/A     | N/A      | No more than 3/minute and 40/day | No more than 10/minute and 60/day |
| Available data    | N/A     | N/A      | Within the past 14 days          | Within the past 30 days           |
| Query time frame  | N/A     | N/A      | No longer than 3 days            | No longer than 7 days             |
| Data granularity  | N/A     | N/A      | Per day, hour, and minute        | Per day, hour, and minute         |
| Data delay        | N/A     | N/A      | 6 hours                          | 6 hours                           |

* Endpoint is \`/beta/insight/usage/aggregation\`:

|                   | Starter | Standard | Premium                          | Enterprise                        |
| :---------------- | ------- | :------- | :------------------------------- | :-------------------------------- |
| Request frequency | N/A     | N/A      | No more than 3/minute and 40/day | No more than 10/minute and 60/day |
| Available data    | N/A     | N/A      | Within the past 14 days          | Within the past 30 days           |
| Data granularity  | N/A     | N/A      | Per day and hour                 | Per day and hour                  |
| Data delay        | N/A     | N/A      | 12 hours                         | 6 hours                           |

* Endpoint is \`/beta/insight/quality/aggregation\`:

|                   | Starter | Standard | Premium                          | Enterprise                        |
| :---------------- | ------- | :------- | :------------------------------- | :-------------------------------- |
| Request frequency | N/A     | N/A      | No more than 3/minute and 40/day | No more than 10/minute and 60/day |
| Available data    | N/A     | N/A      | Within the past 14 days          | Within the past 30 days           |
| Data granularity  | N/A     | N/A      | Per day and hour                 | Per day and hour                  |
| Data delay        | N/A     | N/A      | 6 hours                          | 6 hours                           |

### Query time-frame usage metrics [#query-time-frame-usage-metrics]

This method queries usage metrics for a specified time frame with granularity of hours or days, such as the number of users or channels.

* Method: \`GET\`
* Endpoint: \`/beta/insight/usage/by_time\`

#### Query parameters [#query-parameters-6]

The following query string parameters are required in the URL:

| Parameter              | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :--------------------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`appid\`                | String | The [App ID](/en/realtime-media/agora-analytics/reference/glossary#app-id) of your project.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| \`startTs\`              | Number | The start point (Unix timestamp) of the time frame to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| \`endTs\`                | Number | The end point (Unix timestamp) of the time frame to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| \`metric\`               | String | Supported values: \`userCount\` (The total number of users across all channels. A user joining the same channel with different user IDs or joining different channels with the same user ID is counted multiple times); \`sessionCount\` (The total count of users joining channels. Each time any user ID joins any channel is counted); \`channelCount\` (The total number of channels. A channel is counted once for each period between the time when the first user joins it and the time when the last user leaves it); \`peakCurrentChannels\` (The maximum number of channels in use); \`peakCurrentUsers\` (The maximum number of in-call users across channels); \`totalDuration\` (The total duration of video and audio-only calls calculated by the number of users); \`totalVideoDuration\` (The total duration of video calls calculated by the number of users); \`totalAudioDuration\` (The total duration of audio-only calls calculated by the number of users). |
| \`aggregateGranularity\` | String | Supported values: \`1d\` (By day. Returns data for the entire day starting from UTC 00:00 within the query time range); \`1h\` (By hour. Returns data for each whole UTC hour within the query time range).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

<CalloutContainer type="info">
  <CalloutDescription>
    For more information about calculating by the number of users, see [How does Agora calculate service minutes?](/en/realtime-media/agora-analytics/reference/billing-policies#how-does-agora-calculate-service-minutes)
  </CalloutDescription>
</CalloutContainer>

#### HTTP request example [#http-request-example-6]

The following example queries the total number of users across all channels starting from 8:00 am on July 1, 2021 to 8:00 am on July 3, 2021:

\`\`\`html
GET /beta/insight/usage/by_time?startTs=1625097600&endTs=1625270400&appid=axxxxxxxxxxxxxxxxxxxx&metric=userCount&aggregateGranularity=1d HTTP/1.1
Host: api.agora.io
Accept: application/json
Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh
\`\`\`

#### Response example [#response-example-6]

The response for the previous HTTP request example is as follows:

\`\`\`json
{
    "code": 200,
    "message": "success",
    "data": [
        {
            "userCount": 42,
            "ts": 1625155200
        },
        {
            "userCount": 37,
            "ts": 1625241600
        }
   ]
}
\`\`\`

#### Response parameters [#response-parameters]

| Parameter | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                                |
| :-------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`code\`    | Number    | The [status code](#status-codes).                                                                                                                                                                                                                                                                                                                                                                          |
| \`message\` | String    | The success or error message.                                                                                                                                                                                                                                                                                                                                                                              |
| \`data\`    | JSONArray | Each JSON object contains a Unix timestamp representing 12:00 am (UTC) on each day within the specified time frame and the corresponding metric value. In the previous request example, two JSON objects are returned: one for 12:00 am on July 2, 2021, and one for 12:00 am on July 3, 2021. Fields: \`userCount\` (Number. The total number of users across all channels); \`ts\` (Number. Unix timestamp). |

### Query time-series quality metrics [#query-time-series-quality-metrics]

This method queries quality metrics for a specified time range with granularity of hours, days, or minutes, such as the audio or video freeze rate.

* Method: \`GET\`
* Endpoint: \`/beta/insight/quality/by_time\`

#### Query parameters [#query-parameters-7]

The following query string parameters are required in the URL:

| Parameter              | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :--------------------- | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`appid\`                | String | The [App ID](/en/realtime-media/agora-analytics/reference/glossary#app-id) of your project.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| \`startTs\`              | Number | The start point (Unix timestamp) of the time frame to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| \`endTs\`                | Number | The end point (Unix timestamp) of the time frame to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| \`metric\`               | String | Supported values: \`joinSuccessRate\` (The rate at which users attempting to join any channel succeed, equal to number of users who joined divided by number of attempts to join); \`joinSuccessIn5sRate\` (The rate at which users attempting to join any channel succeed within 5 seconds, equal to number of users who joined within 5 seconds divided by number of attempts to join); \`audioFreezeRate\` (The rate at which audio freezing occurs, equal to total audio freeze time divided by total audio minutes calculated by the number of streams. Only audio freezes longer than 200 milliseconds are counted); \`videoFreezeRate\` (The rate at which video freezing occurs, equal to total video freeze time divided by total video minutes calculated by the number of streams. Only video freezes longer than 600 milliseconds are counted); \`networkDelay\` (The rate at which network delay occurs, equal to total end-to-end network delay divided by total audio and video minutes calculated by the number of streams. Only end-to-end network delays longer than 400 milliseconds are counted). |
| \`aggregateGranularity\` | String | Supported values: \`1d\` (By day. Returns data for the entire day starting from UTC 00:00 within the query time range); \`1h\` (By hour. Returns data for each whole UTC hour within the query time range).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| \`productType\`          | String | Supported values: \`Native\` (The Agora RTC SDK for Android, iOS, macOS, and Windows); \`WebRTC\` (The Agora RTC SDK for Web).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

<CalloutContainer type="info">
  <CalloutDescription>
    For more information about calculating by the number of streams, see [How does Agora calculate service minutes?](/en/realtime-media/agora-analytics/reference/billing-policies#how-does-agora-calculate-service-minutes)
  </CalloutDescription>
</CalloutContainer>

#### HTTP request example [#http-request-example-7]

The following example queries the hourly network delay rate starting from 8:00 am on July 1, 2021 to 8:00 am on July 2, 2021:

\`\`\`html
GET /beta/insight/quality/by_time?startTs=1625097600&endTs=1625184000&appid=axxxxxxxxxxxxxxxxxxxx&metric=networkDelay&aggregateGranularity=1h&productType=Native HTTP/1.1
Host: api.agora.io
Accept: application/json
Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh
\`\`\`

#### Response example [#response-example-7]

The response for the previous HTTP request example is as follows:

\`\`\`json
{
    "code": 200,
    "message": "success",
    "data": [
        {
            "networkDelay": 0.064762,
            "ts": 1625097600
        },
        {
            "networkDelay": 0.028156,
            "ts": 1625101200
        },
        ...
        {
            "networkDelay": 0.03765,
            "ts": 1625184000
        }
   ]
}
\`\`\`

#### Response parameters [#response-parameters-1]

| Parameter | Type      | Description                                                                                                                                                                                                                                                                                                                                        |
| :-------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`code\`    | Number    | The [status code](#status-codes).                                                                                                                                                                                                                                                                                                                  |
| \`message\` | String    | The success or error message.                                                                                                                                                                                                                                                                                                                      |
| \`data\`    | JSONArray | Each JSON object contains a Unix timestamp for every hour within the specified time frame and the corresponding metric value. In the previous request example, 25 JSON objects are returned, from 8:00 am on July 1, 2021 through 8:00 am on July 2, 2021. Fields: \`networkDelay\` (Number. The network delay rate); \`ts\` (Number. Unix timestamp). |

### Query aggregated usage metrics [#query-aggregated-usage-metrics]

This method queries aggregated usage metrics for a specified time range and dimension, such as the number of users or channels.

* Method: \`POST\`
* Endpoint: \`/beta/insight/usage/aggregation\`

#### Query parameters [#query-parameters-8]

The following query string parameters are required in the URL:

| Parameter | Type   | Description                                                                                 |
| :-------- | :----- | :------------------------------------------------------------------------------------------ |
| \`appid\`   | String | The [App ID](/en/realtime-media/agora-analytics/reference/glossary#app-id) of your project. |

#### Body parameters [#body-parameters]

The following query string parameters are required in the URL:

| Parameter         | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :---------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`startTs\`         | Number    | The start point (Unix timestamp) of the time frame to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| \`endTs\`           | Number    | The end point (Unix timestamp) of the time frame to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| \`metric\`          | String    | Supported values: \`userCount\` (The total number of users across all channels. A user joining the same channel with different user IDs or joining different channels with the same user ID is counted multiple times); \`sessionCount\` (The total count of users joining channels. Each time any user ID joins any channel is counted); \`channelCount\` (The total number of channels. A channel is counted once for each period between the time when the first user joins it and the time when the last user leaves it); \`peakCurrentChannels\` (The maximum number of channels in use); \`peakCurrentUsers\` (The maximum number of in-call users across channels); \`totalDuration\` (The total duration of video and audio-only calls calculated by the number of users); \`totalVideoDuration\` (The total duration of video calls calculated by the number of users); \`totalAudioDuration\` (The total duration of audio-only calls calculated by the number of users). |
| \`dimension\`       | String    | (Optional) Aggregation dimension. Supported values: \`country\`, \`region\`, \`net\`, \`sdk\`, \`os\`, \`device\`. If you set this parameter, the request returns the top 20 values in the dimension by default, or the top 50 values for \`device\`. When \`metric\` is \`peakCurrentUsers\` or \`peakCurrentChannels\`, \`dimension\` and \`dimensionValues\` are not supported, and the request returns aggregated results only by App ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| \`dimensionValues\` | String    | (Optional) Values for the specified dimension. This parameter is valid only when \`dimension\` is set. Enclose all values in double quotes and separate them with commas. If you set this parameter, the request returns aggregated metric data for the specified values. To discover top values first, omit \`dimensionValues\` in an initial request, then choose values from the results for later requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| \`filters\`         | JSONArray | (Optional) Region filters used to filter results by country. This parameter is valid only when \`dimension\` is \`region\`. It includes \`name\` (String. Only \`country\` is supported) and \`value\` (String. The country to filter by. Only one country value is supported).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

#### HTTP Request example [#http-request-example-8]

The following examples query the total number of users across all channels starting from 8:00 am on July 1, 2021 to 8:00 am on July 2, 2021:

**Example 1: Query the top 20 countries with the highest number of calls and their respective call counts**

\`\`\`html
POST /beta/insight/usage/aggregation?appid=axxxxxxxxxxxxxxxxxxxx HTTP/1.1
Host: api.agora.io
Accept: application/json
Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh

{
	"startTs": 1625097600,
	"endTs": 1625184000,
	"metric": "userCount",
	"dimension": "country"
}
\`\`\`

**Example 2: Query the number of calls for SDK versions 3.6.1.1 and 4.1.1**

\`\`\`html
POST /beta/insight/usage/aggregation?appid=axxxxxxxxxxxxxxxxxxxx HTTP/1.1
Host: api.agora.io
Accept: application/json
Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh

{
	"startTs": 1625097600,
	"endTs": 1625184000,
	"metric": "userCount",
	"dimension": "sdkVersion",
	"dimensionValues":["3.6.1.1","4.1.1"]
}
\`\`\`

**Example 3: Query the top 20 regions in China with the highest number of calls and their respective call counts**

\`\`\`html
POST /beta/insight/usage/aggregation?appid=axxxxxxxxxxxxxxxxxxxx HTTP/1.1
Host: api.agora.io
Accept: application/json
Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh

{
	"startTs": 1625097600,
	"endTs": 1625184000,
	"metric": "userCount",
    "dimension": "region",
    "filters": [{"name": "country", "value": "China"}]
}
\`\`\`

#### Response parameters [#response-parameters-2]

| Parameter | Type      | Description                                                                                                                                                                                                             |
| :-------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`code\`    | Number    | The [status code](#status-codes).                                                                                                                                                                                       |
| \`message\` | String    | The success or error message.                                                                                                                                                                                           |
| \`data\`    | JSONArray | If the request does not include \`dimension\`, the response returns metric data aggregated by App ID. If the request includes \`dimension\`, the response returns an array containing the dimension values and metric data. |

#### Response example [#response-example-8]

**Example 1: Query the top 20 countries with the highest number of calls and their respective call counts**

Contains 20 sets of data, each representing the top 20 countries with the highest total number of calls between 8:00 am on July 1, 2021 and 8:00 am on July 2, 2021.

\`\`\`json
{
    "code": 200,
    "message": "null",
    "data": [
        {
            "country": "China",
            "userCount": 42,
        },
        {
            "country": "United States",
            "userCount": 37
        }
        ......
   ]
}
\`\`\`

**Example 2: Query the number of calls for SDK versions 3.6.1.1 and 4.1.1**

Contains 2 sets of data, each representing the total number of calls between 8:00 am on July 1, 2021 and 8:00 am on July 2, 2021 for SDK versions 3.6.1.1 and 4.1.1 respectively.

\`\`\`json
{
    "code": 200,
    "message": "null",
    "data": [
        {
            "sdkVersion": "3.6.1.1",
            "userCount": 42,
        },
        {
            "sdkVersion": "4.1.1",
            "userCount": 37
        }
   ]
}
\`\`\`

**Example 3: Query the top 20 regions in China with the highest number of calls and their respective call counts**

Contains 20 sets of data, each representing the top 20 regions in China with the highest total number of calls between 8:00 am on July 1, 2021 and 8:00 am on July 2, 2021.

\`\`\`json
{
    "code": 200,
    "message": "null",
    "data": [
        {
            "region": "Shanghai",
            "userCount": 42,
        },
        {
            "region": "Beijing",
            "userCount": 37
        }
        ......
   ]
}
\`\`\`

### Query aggregated quality metrics [#query-aggregated-quality-metrics]

This method queries aggregated quality metrics for a specified time range and dimension, such as the audio or video freeze rate.

* Method: \`POST\`
* Endpoint: \`/beta/insight/quality/aggregation\`

#### Query parameters [#query-parameters-9]

The following query string parameters are required in the URL:

| Parameter | Type   | Description                                                                                 |
| :-------- | :----- | :------------------------------------------------------------------------------------------ |
| \`appid\`   | String | The [App ID](/en/realtime-media/agora-analytics/reference/glossary#app-id) of your project. |

#### Body parameters [#body-parameters-1]

The following query string parameters are required in the URL:

| Parameter         | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :---------------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`startTs\`         | Number    | The start point (Unix timestamp) of the time frame to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| \`endTs\`           | Number    | The end point (Unix timestamp) of the time frame to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| \`metric\`          | String    | Supported values: \`joinSuccessRate\` (The rate at which users attempting to join any channel succeed, equal to number of users who joined divided by number of attempts to join); \`joinSuccessIn5sRate\` (The rate at which users attempting to join any channel succeed within 5 seconds, equal to number of users who joined within 5 seconds divided by number of attempts to join); \`audioFreezeRate\` (The rate at which audio freezing occurs, equal to total audio freeze time divided by total audio minutes calculated by the number of streams. Only audio freezes longer than 200 milliseconds are counted); \`videoFreezeRate\` (The rate at which video freezing occurs, equal to total video freeze time divided by total video minutes calculated by the number of streams. Only video freezes longer than 600 milliseconds are counted); \`networkDelay\` (The rate at which network delay occurs, equal to total end-to-end network delay divided by total audio and video minutes calculated by the number of streams. Only end-to-end network delays longer than 400 milliseconds are counted). |
| \`dimension\`       | String    | (Optional) Aggregation dimension. Supported values: \`country\`, \`region\`, \`net\`, \`sdk\`, \`os\`, \`device\`, \`channelSize\`. If you set this parameter, the request returns the top 20 values in the dimension by default, or the top 50 values for \`device\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| \`dimensionValues\` | String    | (Optional) Values for the specified dimension. This parameter is valid only when \`dimension\` is set. Enclose all values in double quotes and separate them with commas. If you set this parameter, the request returns aggregated metric data for the specified values. To discover top values first, omit \`dimensionValues\` in an initial request, then choose values from the results for later requests. When \`dimension\` is \`channelSize\`, \`dimensionValues\` is not supported and the results are grouped by the preset gradient scale.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| \`filters\`         | JSONArray | (Optional) Region filters used to filter results by country. This parameter is valid only when \`dimension\` is \`region\`. It includes \`name\` (String. Only \`country\` is supported) and \`value\` (String. The country to filter by. Only one country value is supported).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### HTTP Request example [#http-request-example-9]

The following examples query the audio freeze rate across all channels starting from 8:00 am on July 1, 2021 to 8:00 am on July 2, 2021:

**Example 1: Query the top 20 countries with the highest audio freeze rates and their respective audio freeze rate**

\`\`\`html
POST /beta/insight/usage/aggregation?appid=axxxxxxxxxxxxxxxxxxxx HTTP/1.1
Host: api.agora.io
Accept: application/json
Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh

{
	"startTs": 1625097600,
	"endTs": 1625184000,
	"metric": "audioFreezeRate",
    "dimension": "country"
}
\`\`\`

**Example 2: Query the audio freeze rates for SDK versions 3.6.1.1 and 4.1.1**

\`\`\`html
POST /beta/insight/usage/aggregation?appid=axxxxxxxxxxxxxxxxxxxx HTTP/1.1
Host: api.agora.io
Accept: application/json
Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh

{
	"startTs": 1625097600,
	"endTs": 1625184000,
	"metric": "audioFreezeRate",
    "dimension": "sdkVersion",
    "dimensionValues":["3.6.1.1","4.1.1"]
}
\`\`\`

**Example 3: Query the top 20 regions in China with the highest audio freeze rates and their respective audio freeze rate**

\`\`\`html
POST /beta/insight/usage/aggregation?appid=axxxxxxxxxxxxxxxxxxxx HTTP/1.1
Host: api.agora.io
Accept: application/json
Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh

{
	"startTs": 1625097600,
	"endTs": 1625184000,
	"metric": "audioFreezeRate",
    "dimension": "region",
    "filters": [{"name": "country", "value": "China"}]
}
\`\`\`

#### Response parameters [#response-parameters-3]

| Parameter | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :-------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`code\`    | Number    | The [status code](#status-codes).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| \`message\` | String    | The success or error message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| \`data\`    | JSONArray | If the \`dimension\` field is not filled in the request, returns the metric data of the App ID dimension. If the \`dimension\` field is filled in the request, returns an array composed of dimensions, \`refUsage\`, and metric data. \`refUsage\` is auxiliary usage data. In each returned data group, each \`metric\` corresponds to auxiliary usage data used to assist in determining data validity. When \`metric\` is \`joinSuccessRate\` or \`joinSuccessIn5sRate\`, \`refUsage\` represents the number of attempts to join the channel. When \`metric\` is \`audioFreezeRate\` or \`videoFreezeRate\`, \`refUsage\` represents the duration of audio calls or video calls in minutes. When \`metric\` is \`networkDelay\`, \`refUsage\` represents the total duration of audio and video calls in minutes. |

#### Response example [#response-example-9]

**Example 1: Query the top 20 countries with the highest audio freeze rates and their respective audio freeze rate**

Contains 20 sets of data, each representing the top 20 countries with the highest audio freeze rates between 8:00 am on July 1, 2021 and 8:00 am on July 2, 2021.

\`\`\`json
{
    "code": 200,
    "message": "null",
    "data": [
        {
            "country": "China",
            "refUsage": 231234,
            "audioFreezeRate": 0.0017,
        },
        {
            "country": "United States",
            "refUsage": 213212,
            "audioFreezeRate": 0.0014
        }
        ......
   ]
}
\`\`\`

**Example 2: Query the audio freeze rates for SDK versions 3.6.1.1 and 4.1.1**

Contains 2 sets of data, each representing the audio freeze rates between 8:00 am on July 1, 2021 and 8:00 am on July 2, 2021 for SDK versions 3.6.1.1 and 4.1.1 respectively.

\`\`\`json
{
    "code": 200,
    "message": "null",
    "data": [
        {
            "sdkVersion": "3.6.1.1",
            "refUsage": 231234,
            "audioFreezeRate": 0.0017,
        },
        {
            "sdkVersion": "4.1.1",
            "refUsage": 213212,
            "audioFreezeRate": 0.0014
        }
   ]
}
\`\`\`

**Example 3: Query the top 20 regions in China with the highest audio freeze rates and their respective audio freeze rate**

Contains 20 sets of data, each representing the top 20 regions in China with the highest audio freeze rates between 8:00 am on July 1, 2021 and 8:00 am on July 2, 2021.

\`\`\`json
{
    "code": 200,
    "message": "null",
    "data": [
        {
            "region": "Shanghai",
            "refUsage": 231234,
            "audioFreezeRate": 0.0017,
        },
        {
            "region": "Beijing",
            "refUsage": 213212,
            "audioFreezeRate": 0.0014
        }
        ......
   ]
}
\`\`\`

## Real-time Monitoring [#real-time-monitoring]

With the Real-time Monitoring RESTful APIs, you can query the scale and quality metrics within a specified time frame. The granularity of the returned data is seconds, which can reflect the actual situation in close to real time.

The data is returned in regular 20-second time windows starting from 00:00:00. For example, \\[00:00:00, 00:00:20] is a time window, while \\[00:00:10, 00:00:30] is not a time window.

### API limits [#api-limits-2]

The limits of the Real-time Monitoring RESTful APIs depend on the [pricing plan](/en/realtime-media/agora-analytics/reference/pricing) you subscribe to.

The Starter, Standard, Premium, and Enterprise pricing plans have the following differences in terms of API limits:

|                   | Starter | Standard | Premium                           | Enterprise                          |
| :---------------- | ------- | :------- | :-------------------------------- | :---------------------------------- |
| Request frequency | N/A     | N/A      | No more than 3/minute and 480/day | No more than 10/minute and 1440/day |
| Available data    | N/A     | N/A      | Within the past 40 minutes        | Within the past 60 minutes          |
| Query time frame  | N/A     | N/A      | No longer than 40 minutes         | No longer than 60 minutes           |
| Data delay        | N/A     | N/A      | 40 seconds                        | 20 seconds                          |

<CalloutContainer type="info">
  <CalloutDescription>
    Request frequency is calculated using the server's UTC time.
  </CalloutDescription>
</CalloutContainer>

### Query real-time scale metrics [#query-real-time-scale-metrics]

This method queries the real-time number of users and channels.

* Method: \`GET\`
* Endpoint: \`/beta/realtime/usage/by_time_20sec\`

#### Query parameters [#query-parameters-10]

The following query string parameters are required in the URL:

| **Parameter**     | Type   | **Description**                                                                                                                                                                                                                                                                                                                       |
| :---------------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`appid\`           | String | The [App ID](/en/realtime-media/agora-analytics/reference/glossary#app-id) of your project.                                                                                                                                                                                                                                           |
| \`startTs\`         | Number | The start point (Unix timestamp) of the time frame to query. The time window that  \`startTs\` falls in is included in the response.                                                                                                                                                                                                    |
| \`endTs\`           | Number | The end point (Unix timestamp) of the time frame to query.  The time window that  \`endTs\` falls in is *not* included in the response.                                                                                                                                                                                                 |
| \`productType\`     | String | Supported values: \`Native\` (The Agora RTC SDK for Android, iOS, macOS, and Windows); \`WebRTC\` (The Agora RTC SDK for Web).                                                                                                                                                                                                            |
| \`metric\`          | String | Supported values: \`userCount\` (The total number of users across all in-use channels. A user joining multiple channels is counted multiple times); \`channelCount\` (The total number of channels. A channel is counted once for each period between the time when the first user joins it and the time when the last user leaves it).   |
| \`dimension\`       | String | (Optional) Aggregation dimension. Supported values: \`country\`, \`region\`, \`net\`, \`sdk\`, \`os\`, \`device\`. To obtain the top values for the current \`dimension\`, query [top 20 real-time scale metrics](#query-top-20-real-time-scale-metrics), then choose values from the results and pass them in \`dimensionValues\` in later requests. |
| \`dimensionValues\` | String | (Optional) The values for the specified dimension. This parameter is only valid when the \`dimension\` parameter is set. All values must be enclosed in double quotes and separated by commas. If this parameter is set, the request will return the aggregated metric data corresponding to the values specified in \`dimensionValues\`. |
| \`cname\`           | String | (Optional)The channel name. If you do not specify this parameter, the metric data of your entire project (rather than a specific channel) is returned.                                                                                                                                                                                |

#### HTTP request example [#http-request-example-10]

The following example queries the real-time number of users for SDK versions 3.6.1.1 and 4.1.1, with \`startTs\` set to 08:10:10 on September 17, 2021 and \`endTs\` set to 08:11:10 on the same day. The HTTP request is as follows:

\`\`\`html
GET /beta/realtime/usage/by_time_20sec?startTs=1631837410&endTs=1631837470&appid=your_app_id&productType=Native&metric=userCount&dimension=sdk&dimensionValues="3.6.1.1","4.1.1" HTTP/1.1
Host: api.agora.io
Accept: application/json
Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh
\`\`\`

#### Response parameters [#response-parameters-4]

The response contains the following fields:

| Field     | Type      | Description                                                                                                                                    |
| :-------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| \`code\`    | Number    | The [status code](#status-codes). \`200\` indicates that the request is successful.                                                              |
| \`message\` | String    | The error message.                                                                                                                             |
| \`data\`    | JSONArray | An array consisting of the requested \`metric\` field and \`ts\`, which is the Unix timestamp of the start point of the corresponding time window. |

#### Response example [#response-example-10]

For the previous HTTP request example, the response includes the total number of users, corresponding SDK version, and Unix timestamp of the following time windows:

* \\[00:10:00, 00:10:20] on September 17, 2021
* \\[00:10:20, 00:10:40] on September 17, 2021
* \\[00:10:40, 00:11:00] on September 17, 2021

\`\`\`json
{
    "code": 200,
    "message": null,
    "data": [
        {
            "userCount": 236,
            "sdk": "3.6.1.1",
            "ts": 1631837400
        },
        {
            "userCount": 82,
            "sdk": "4.1.1",
            "ts": 1631837400
        },
        {
            "userCount": 235,
            "sdk": "3.6.1.1",
            "ts": 1631837420
        },
        {
            "userCount": 85,
            "sdk": "4.1.1",
            "ts": 1631837420
        },
        {
            "userCount": 252,
            "sdk": "3.6.1.1",
            "ts": 1631837440
        },
        {
            "userCount": 90,
            "sdk": "4.1.1",
            "ts": 1631837440
        }
    ]
}
\`\`\`

### Query real-time quality metrics [#query-real-time-quality-metrics]

This method queries the real-time values of quality metrics such as the audio or video freeze rate.

* Method: \`GET\`
* Endpoint: \`/beta/realtime/quality/by_time_20sec\`

#### Query parameters [#query-parameters-11]

The following query string parameters are required in the URL:

| Parameter         | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :---------------- | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`appid\`           | String | The [App ID](/en/realtime-media/agora-analytics/reference/glossary#app-id) of your project.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| \`startTs\`         | Number | The start point (Unix timestamp) of the time frame to query. The time window that  \`startTs\` falls in is included in the response.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| \`endTs\`           | Number | The end point (Unix timestamp) of the time frame to query.  The time window that  \`endTs\` falls in is *not* included in the response.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| \`productType\`     | String | Supported values: \`Native\` (The Agora RTC SDK for Android, iOS, macOS, and Windows); \`WebRTC\` (The Agora RTC SDK for Web).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| \`metric\`          | String | Supported values: \`joinSuccessRate\` (The rate at which users attempting to join any channel succeed, equal to number of users who joined divided by number of attempts to join); \`joinSuccessIn5sRate\` (The rate at which users attempting to join any channel succeed within 5 seconds, equal to number of users who joined within 5 seconds divided by number of attempts to join); \`audioFreezeRate\` (The rate at which audio freezing occurs, equal to total audio freeze time divided by total audio minutes calculated by the number of streams. Only audio freezes longer than 200 milliseconds are counted); \`videoFreezeRate\` (The rate at which video freezing occurs, equal to total video freeze time divided by total video minutes calculated by the number of streams. Only video freezes longer than 600 milliseconds are counted); \`networkDelay\` (The rate at which network delay occurs, equal to total end-to-end network delay divided by total audio and video minutes calculated by the number of streams. Only end-to-end network delays longer than 400 milliseconds are counted). |
| \`dimension\`       | String | (Optional) Aggregation dimension. Supported values: \`country\`, \`region\`, \`net\`, \`sdk\`, \`os\`, \`device\`. To obtain the top values for the current \`dimension\`, query [top 20 real-time quality metrics](#query-top-20-real-time-quality-metrics), then choose values from the results and pass them in \`dimensionValues\` in later requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| \`dimensionValues\` | String | (Optional) The values for the specified dimension. This parameter is only valid when the \`dimension\` parameter is set. All values must be enclosed in double quotes and separated by commas. If this parameter is set, the request will return the aggregated metric data corresponding to the values specified in \`dimensionValues\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| \`cname\`           | String | (Optional) The channel name. If you do not specify this parameter, the metric data of your entire project (rather than a specific channel) is returned.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| \`uids\`            | String | (Optional) The list of user IDs (\`uid\`). You need to separate multiple user IDs with commas (for example, \`uids=10001,10002,10003\`). You can specify a maximum of 10 user IDs. The \`uids\` parameter takes effect only when you specify the \`cname\` parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

#### HTTP request example [#http-request-example-11]

The following example queries the network delay rate from 00:10:10 to 00:11:10 on September 17, 2021:

**Example 1: \`uids\` is not specified**

\`\`\`html
GET /beta/realtime/usage/by_time_20sec?startTs=1631837410&endTs=1631837470&appid=axxxxxxxxxxxxxxxxxxxx&productType=Native&metric=networkDelay HTTP/1.1
Host: api.agora.io
Accept: application/json
Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh
\`\`\`

**Example 2: \`uids\` is specified as \`2303692334\` and \`2963430861\`**

\`\`\`html
GET /beta/realtime/usage/by_time_20sec?startTs=1631837410&endTs=1631837470&appid=axxxxxxxxxxxxxxxxxxxx&productType=Native&metric=networkDelay&cname=demoChannel&uids=2303692334,2963430861 HTTP/1.1
Host: api.agora.io
Accept: application/json
Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh
\`\`\`

**Example 3: \`dimension\` is specified as \`sdkVersion\`, and \`dimensionValues\` as \`3.6.1.1\` and \`4.1.1\`**

\`\`\`html
GET /beta/realtime/quality/by_time_20sec?startTs=1631837410&endTs=1631837470&appid=your_app_id&productType=Native&metric=networkDelay&dimension=sdk&dimensionValues="3.6.1.1","4.1.1" HTTP/1.1
Host: api.agora.io
Accept: application/json
Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh
\`\`\`

#### Response parameters [#response-parameters-5]

The response contains the following fields:

| Field     | Type      | Description                                                                                                                                                                                                                                                                                                                                                       |
| :-------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`code\`    | Number    | The [status code](#status-codes). \`200\` indicates that the request is successful.                                                                                                                                                                                                                                                                                 |
| \`message\` | String    | The error message.                                                                                                                                                                                                                                                                                                                                                |
| \`data\`    | JSONArray | - The request does not include the \`uids\` field: An array of metric data and Unix timestamps (in seconds).\`; \`The request includes the \`uids\` field: An array of \`uid\`, metric data, and Unix timestamps (in seconds).\`; \`The request includes the \`dimension\` and \`dimensionValues\` fields: Arrays of metric data, dimensions, and Unix timestamps (in seconds). |

#### Response example [#response-example-11]

For the previous HTTP request example, the response includes data of the following time windows:

* \\[00:10:00, 00:10:20] on September 17, 2021
* \\[00:10:20, 00:10:40] on September 17, 2021
* \\[00:10:40, 00:11:00] on September 17, 2021

**Example 1: \`uids\` is not specified**

\`\`\`json
{
    "code": 200,
    "message": "success",
    "data": [
        {
            "networkDelay": 0.0120,
            "ts": 1631837400
        },
        {
            "networkDelay": 0.0057,
            "ts": 1631837420
        },
        {
            "networkDelay": 0.0039,
            "ts": 1631837440
        }
    ]
}
\`\`\`

**Example 2: \`uids\` is specified as \`2303692334\` and \`2963430861\`**

\`\`\`json
{
    "code": 200,
    "message": "success",
    "data": [
        {
            "uid": 2303692334,
            "values": [
                {
                    "ts": 1631837400,
                    "networkDelay": 0.389
                },
                {
                    "ts": 1631837420,
                    "networkDelay": 0.389
                },
                {
                    "ts": 1631837440,
                    "networkDelay": 0.389
                }
            ]
        },
        {
            "uid": 2963430861,
            "values": [
                {
                    "ts": 1631837400,
                    "networkDelay": 0.389
                },
                {
                    "ts": 1631837420,
                    "networkDelay": 0.389
                },
                {
                    "ts": 1631837440,
                    "networkDelay": 0.389
                }
            ]
        }
    ]
}
\`\`\`

**Example 3: \`dimension\` is specified as \`sdkVersion\`, and \`dimensionValues\` as \`3.6.1.1\` and \`4.1.1\`**

\`\`\`json
{
    "code": 200,
    "message": null,
    "data": [
        {
            "networkDelay": 0.389,
            "sdk": "3.6.1.1",
            "ts": 1631837400
        },
        {
            "networkDelay": 0.411,
            "sdk": "4.1.1",
            "ts": 1631837400
        },
        {
            "networkDelay": 0.343,
            "sdk": "3.6.1.1",
            "ts": 1631837420
        },
        {
            "networkDelay": 0.363,
            "sdk": "4.1.1",
            "ts": 1631837420
        },
        {
            "networkDelay": 0.511,
            "sdk": "3.6.1.1",
            "ts": 1631837440
        },
        {
            "networkDelay": 0.436,
            "sdk": "4.1.1",
            "ts": 1631837440
        }
    ]
}
\`\`\`

### Query top 20 real-time scale metrics [#query-top-20-real-time-scale-metrics]

This method queries the top 20 grouped data of real-time scale for a specified dimension and provides content input for the \`dimensionValues\` parameter in [Query real-time scale](#query-real-time-scale-metrics).

* Method: \`GET\`
* Endpoint: \`/beta/realtime/usage/dimension/top20\`

#### Query parameters [#query-parameters-12]

The following query string parameters are required in the URL:

| **Parameter** | Type   | **Description**                                                                                                                                                                                                    |
| :------------ | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`appid\`       | String | The [App ID](/en/realtime-media/agora-analytics/reference/glossary#app-id) of your project.                                                                                                                        |
| \`ts\`          | Number | The start point (Unix timestamp) of the time frame to query. The actual query range is \\[ts, ts + 20s].                                                                                                            |
| \`productType\` | String | Supported values: \`Native\` (The Agora RTC SDK for Android, iOS, macOS, and Windows); \`WebRTC\` (The Agora RTC SDK for Web).                                                                                         |
| \`metric\`      | String | The metric you want to query. You can only set it \`userCount\`, namely the number of users. One user ID in one channel is counted as one user, while one user ID in multiple channels is counted as multiple users. |
| \`dimension\`   | String | Aggregation dimension. Supported values: \`country\`, \`region\`, \`net\`, \`sdk\`, \`os\`, \`device\`. The request returns the top 20 values in the dimension by default, or the top 50 values for \`device\`.                  |

#### Request example [#request-example]

The following example queries the top 20 number of users for each SDK version starting from 08:10:10 on September 17, 2021 is as follows:

\`\`\`html
GET /beta/realtime/usage/dimension/top20?ts=1631837410&appid=your_app_id&productType=Native&metric=userCount&dimension=sdk HTTP/1.1
Host: api.agora.io
Accept: application/json
Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh
\`\`\`

#### Response parameters [#response-parameters-6]

The response contains the following fields:

| Field     | Type      | Description                                                                                                           |
| :-------- | :-------- | :-------------------------------------------------------------------------------------------------------------------- |
| \`code\`    | Number    | The [status code](#status-codes). \`200\` indicates that the request is successful.                                     |
| \`message\` | String    | The error message.                                                                                                    |
| \`data\`    | JSONArray | An array consists of dimensions, metric, and the starting and ending Unix timestamps (in seconds) of the time window. |

#### Response example [#response-example-12]

The response contains 20 sets of data, each representing the top 20 call volume data for each SDK version during the time window from 08:10:10 to 08:10:30 on September 17, 2021.

\`\`\`json

{
    "code": 200,
    "message": null,
    "data": {
        "list": [
            {
                "sdk": "3.6.1.1",
                "userCount": 236,
                "windowStartTs": 1631837410,
                "windowEndTs": 1631837430
            },
            {
                "sdk": "4.1.1",
                "userCount": 82,
                "windowStartTs": 1631837410,
                "windowEndTs": 1631837430
            },
            {
                "sdk": "2.9.1",
                "userCount": 68,
                "windowStartTs": 1631837410,
                "windowEndTs": 1631837430
            },
            ...
        ]
    }
}
\`\`\`

### Query top 20 real-time quality metrics [#query-top-20-real-time-quality-metrics]

This method queries the top 20 grouped data of real-time call quality for a specified dimension and provides content input for the \`dimensionValues\` parameter in [Query real-time quality](#query-real-time-quality-metrics).

* Method: \`GET\`
* Endpoint: \`/beta/realtime/quality/dimension/top20\`

#### Query parameters [#query-parameters-13]

The following query string parameters are required in the URL:

| **Parameter**  | Type   | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :------------- | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`appid\`        | String | The [App ID](/en/realtime-media/agora-analytics/reference/glossary#app-id) of your project.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| \`ts\`           | Number | The start point (Unix timestamp) of the time frame to query. The actual query range is \\[ts, ts + 20s].                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| \`productType\`  | String | Supported values: \`Native\` (The Agora RTC SDK for Android, iOS, macOS, and Windows); \`WebRTC\` (The Agora RTC SDK for Web).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| \`metric\`       | String | Supported values: \`joinSuccessRate\` (The rate at which users attempting to join any channel succeed, equal to number of users who joined divided by number of attempts to join); \`joinSuccessIn5sRate\` (The rate at which users attempting to join any channel succeed within 5 seconds, equal to number of users who joined within 5 seconds divided by number of attempts to join); \`audioFreezeRate\` (The rate at which audio freezing occurs, equal to total audio freeze time divided by total audio minutes calculated by the number of streams. Only audio freezes longer than 200 milliseconds are counted); \`videoFreezeRate\` (The rate at which video freezing occurs, equal to total video freeze time divided by total video minutes calculated by the number of streams. Only video freezes longer than 600 milliseconds are counted); \`networkDelay\` (The rate at which network delay occurs, equal to total end-to-end network delay divided by total audio and video minutes calculated by the number of streams. Only end-to-end network delays longer than 400 milliseconds are counted). |
| \`dimension\`    | String | Aggregation dimension. Supported values: \`country\`, \`region\`, \`net\`, \`sdk\`, \`os\`, \`device\`. The request returns the top 20 values in the dimension by default, or the top 50 values for \`device\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| \`extraMetrics\` | String | Additional indicator, used to help determine the validity of data. Only supports setting to \`userCount\`, that is, the number of users under the current dimension.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

#### Request example [#request-example-1]

The following example passes in \`extraMetrics\` and queries the top 50 audio freeze rate values for each device starting from 20:00:00 on December 21, 2022:

\`\`\`html
GET /beta/realtime/quality/dimension/top20?ts=1671624000&appid=your_app_id&productType=Native&metric=audioFreezeRate&dimension=device&extraMetrics=userCount HTTP/1.1
Host: api.agora.io
Accept: application/json
Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh
\`\`\`

#### Response parameters [#response-parameters-7]

The response contains the following fields:

| Field     | Type      | Description                                                                                                           |
| :-------- | :-------- | :-------------------------------------------------------------------------------------------------------------------- |
| \`code\`    | Number    | The [status code](#status-codes). \`200\` indicates that the request is successful.                                     |
| \`message\` | String    | The error message.                                                                                                    |
| \`data\`    | JSONArray | An array consists of dimensions, metric, and the starting and ending Unix timestamps (in seconds) of the time window. |

#### Response example [#response-example-13]

The response contains 50 sets of data, each representing the top 50 audio freeze rate values for each device model during the time window from 20:00:00 to 20:00:20 on December 21, 2022.

\`\`\`json
{
    "code": 200,
    "message": null,
    "data": {
        "list": [
            {
                "audioFreezeRate": 0.050833333333333335,
                "windowStartTs": 1671624000,
                "userCount": 2,
                "device": "ldn-al00",
                "windowEndTs": 1671624020
            },
            {
                "audioFreezeRate": 0,
                "windowStartTs": 1671624000,
                "userCount": 2,
                "device": "80HH",
                "windowEndTs": 1671624020
            },
            {
                "audioFreezeRate": 0,
                "windowStartTs": 1671624000,
                "userCount": 1,
                "device": "20KNA004CD",
                "windowEndTs": 1671624020
            }
        ]
    }
}
\`\`\`

## References [#references]

### Status codes [#status-codes]

| Code  | Description                                                       |
| ----- | ----------------------------------------------------------------- |
| \`200\` | The request is successful.                                        |
| \`300\` | The API limits are exceeded ([Call Search](#call-inspector) only) |
| \`400\` | Invalid parameters.                                               |
| \`401\` | Unauthorized.                                                     |
| \`403\` | Wrong authorization information. The request is forbidden.        |
| \`404\` | Wrong API invoked.                                                |
| \`500\` | Unknown error.                                                    |

When \`300\` is returned, you might get the following error messages:

| Error message                                                                         | Description                                   | Examples of error fix                                                                                              |
| :------------------------------------------------------------------------------------ | --------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| \`qps limit error\`                                                                     | The limit on requests per second is exceeded. | If qps limit = 10, ensure that current qps \\< 10                                                                   |
| \`qpd limit error\`                                                                     | The limit on requests per day is exceeded.    | If qpd limit = 10000, ensure that current qpd \\< 10000                                                             |
| \`query latency limit error\`                                                           | The limit on data delay is exceeded.          | If query latency limit = 10s and current time = 1623316864, ensure that  \`end_ts\` \\< 1623316864 - 10               |
| \`query time range limit error\`                                                        | The limit on available calls is exceeded.     | If query time range limit = 3d and current time = 1623316864, ensure that  \`start_ts\` > 1623316864 - 3 \\* 86400(s) |
| \`query time length limit error\`                                                       | The limit on response content is exceeded.    | If query time length limit = 3h, ensure that \`end_ts\` - \`start_ts\` \\< 3 \\* 3600(s)                                 |
| \`you have no auth to access this service, please buy or upgrade your service package\` | You have no access to this service.           | N/A                                                                                                                |

### Metrics ID [#metrics-id]

| \`mid\` | Description                                                    | Unit | Example    |
| :---- | :------------------------------------------------------------- | :--- | :--------- |
| 20001 | App CPU usage.                                                 | %    | 27%        |
| 20002 | System CPU usage.                                              | %    | 15%        |
| 20003 | The upstream bitrate of the audio.                             | Kbps | 126 Kbps   |
| 20004 | The downstream bitrate of the audio.                           | Kbps | 108 Kbps   |
| 20005 | The freeze time in rendering the audio.                        | ms   | 106.67 ms  |
| 20006 | The upstream bitrate of the low-quality video stream.          | Kbps | 472 Kbps   |
| 20007 | The capturing frame rate of the video.                         | fps  | 16 fps     |
| 20008 | The upstream frame rate of the high-quality video stream.      | fps  | 12 fps     |
| 20009 | The downstream bitrate of the high-quality video.              | Kbps | 309 Kbps   |
| 20010 | The downstream frame rate of the high-quality  video.          | fps  | 6 fps      |
| 20011 | The freeze time in rendering the video.                        | ms   | 2000.50 ms |
| 20015 | The upstream packet loss rate of the audio.                    | %    | 1%         |
| 20016 | The end-to-end packet loss rate of the audio.                  | %    | 3%         |
| 20017 | The upstream packet loss rate of the video.                    | %    | 5%         |
| 20018 | The end-to-end packet loss rate of the video.                  | %    | 7%         |
| 20019 | The width of the received video.                               | -    | 360        |
| 20020 | The height of the received video.                              | -    | 640        |
| 20021 | The task scheduling delay.                                     | ms   | 2 ms       |
| 20022 | The round-trip time delay from the client to the local router. | ms   | 3 ms       |
| 20023 | The upstream frame rate of the low-quality video stream.       | fps  | 108 fps    |
| 20024 | The upstream bitrate of the video stream.                      | Kbps | 126 Kbps   |
| 20025 | The sampling volume of the sent audio.                         | dB   | 105 dB     |
| 20026 | The playback volume of the received audio.                     | dB   | 98 dB      |
| 20027 | The width of the sent video.                                   | -    | 360        |
| 20028 | The height of the sent video.                                  | -    | 640        |
| 20030 | The downstream bitrate of the low-quality video stream.        | Kbps | 100 Kbps   |
| 20031 | The downstream frame rate of the low-quality video stream.     | fps  | 6 fps      |
| 20032 | The width of the received low-quality video.                   | -    | 360        |
| 20033 | The height of the received low-quality video.                  | -    | 640        |
| 20034 | The width of the sent low-quality video.                       | -    | 360        |
| 20035 | The height of the sent low-quality video.                      | -    | 640        |
| 20036 | The WebRTC downstream packet loss rate of the video.           |      |            |
| 20037 | The WebRTC upstream packet loss rate of the audio.             |      |            |
| 20038 | The WebRTC upstream packet loss rate of the video.             |      |            |
| 20039 | App memory usage.                                              | %    | 50%        |
| 20040 | System memory usage.                                           | %    | 70%        |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Before working with the RESTful APIs, review the Agora Analytics features in Agora Console to gain a visual understanding of the quality and usage metrics that are available. For details, see the following user guides:"
  }, {
    heading: undefined,
    content: "Call Inspector"
  }, {
    heading: undefined,
    content: "Data Insights"
  }, {
    heading: undefined,
    content: "Real-time Monitoring"
  }, {
    heading: undefined,
    content: "To use Agora Analytics RESTful APIs, subscribe to an Agora Analytics pricing plan."
  }, {
    heading: "authentication",
    content: "Before using the Agora RESTful API, you need to pass the basic HTTP authentication."
  }, {
    heading: "data-format",
    content: "All requests are sent to the host: `api.agora.io`."
  }, {
    heading: "data-format",
    content: "Request: The request uses query string parameters in the URL."
  }, {
    heading: "data-format",
    content: "Response: The response content is in JSON format."
  }, {
    heading: "call-inspector",
    content: "With the Call Inspector RESTful APIs, you can search for calls with quality issues and obtain detailed metrics about call quality."
  }, {
    heading: "api-limits",
    content: "The limits of the Call Inspector RESTful APIs depend on the pricing plan you subscribe to."
  }, {
    heading: "api-limits",
    content: "The Starter, Standard, Premium, and Enterprise pricing plans have the following differences in terms of API limits:"
  }, {
    heading: "api-limits",
    content: "Request frequency is calculated using the server's UTC time."
  }, {
    heading: "api-limits",
    content: "Data delay refers to the time required from the generation of data to the point where it can be queried."
  }, {
    heading: "api-limits",
    content: "Endpoint is `/beta/analytics/call/lists`:"
  }, {
    heading: "api-limits",
    content: "Starter"
  }, {
    heading: "api-limits",
    content: "Standard"
  }, {
    heading: "api-limits",
    content: "Premium"
  }, {
    heading: "api-limits",
    content: "Enterprise"
  }, {
    heading: "api-limits",
    content: "Request frequency"
  }, {
    heading: "api-limits",
    content: "N/A"
  }, {
    heading: "api-limits",
    content: "No more than 1/second and 1,000/day"
  }, {
    heading: "api-limits",
    content: "No more than 3/second and 2,000/day"
  }, {
    heading: "api-limits",
    content: "No more than 10/second and 10,000/day"
  }, {
    heading: "api-limits",
    content: "Available data"
  }, {
    heading: "api-limits",
    content: "N/A"
  }, {
    heading: "api-limits",
    content: "Within the past 1 day"
  }, {
    heading: "api-limits",
    content: "Within the past 7 days"
  }, {
    heading: "api-limits",
    content: "Within the past 15 days"
  }, {
    heading: "api-limits",
    content: "Response content"
  }, {
    heading: "api-limits",
    content: "N/A"
  }, {
    heading: "api-limits",
    content: "A maximum of 8 hours of data"
  }, {
    heading: "api-limits",
    content: "A maximum of 16 hours of data"
  }, {
    heading: "api-limits",
    content: "A maximum of 24 hours of data"
  }, {
    heading: "api-limits",
    content: "Data delay"
  }, {
    heading: "api-limits",
    content: "N/A"
  }, {
    heading: "api-limits",
    content: "60 seconds"
  }, {
    heading: "api-limits",
    content: "20 seconds"
  }, {
    heading: "api-limits",
    content: "20 seconds"
  }, {
    heading: "api-limits",
    content: "Endpoint is `/beta/analytics/call/sessions` or `/beta/analytics/call/metrics`:"
  }, {
    heading: "api-limits",
    content: "Starter"
  }, {
    heading: "api-limits",
    content: "Standard"
  }, {
    heading: "api-limits",
    content: "Premium"
  }, {
    heading: "api-limits",
    content: "Enterprise"
  }, {
    heading: "api-limits",
    content: "Request frequency"
  }, {
    heading: "api-limits",
    content: "N/A"
  }, {
    heading: "api-limits",
    content: "No more than 1/second and 1,000/day"
  }, {
    heading: "api-limits",
    content: "No more than 3/second and 2,000/day"
  }, {
    heading: "api-limits",
    content: "No more than 10/second and 10,000/day"
  }, {
    heading: "api-limits",
    content: "Available data"
  }, {
    heading: "api-limits",
    content: "N/A"
  }, {
    heading: "api-limits",
    content: "Within the past 1 day"
  }, {
    heading: "api-limits",
    content: "Within the past 7 days"
  }, {
    heading: "api-limits",
    content: "Within the past 15 days"
  }, {
    heading: "api-limits",
    content: "Response content"
  }, {
    heading: "api-limits",
    content: "N/A"
  }, {
    heading: "api-limits",
    content: "A maximum of 1 hours of data"
  }, {
    heading: "api-limits",
    content: "A maximum of 3 hours of data"
  }, {
    heading: "api-limits",
    content: "A maximum of 6 hours of data"
  }, {
    heading: "api-limits",
    content: "Data delay"
  }, {
    heading: "api-limits",
    content: "N/A"
  }, {
    heading: "api-limits",
    content: "300 seconds"
  }, {
    heading: "api-limits",
    content: "150 seconds"
  }, {
    heading: "api-limits",
    content: "100 seconds"
  }, {
    heading: "get-call-list",
    content: "This method gets a list of the calls that meet the search criteria."
  }, {
    heading: "get-call-list",
    content: "Method: `GET`"
  }, {
    heading: "get-call-list",
    content: "Endpoint: `/beta/analytics/call/lists`"
  }, {
    heading: "query-parameters",
    content: "The following query string parameters are required in the URL as search criteria:"
  }, {
    heading: "query-parameters",
    content: "Parameter"
  }, {
    heading: "query-parameters",
    content: "Type"
  }, {
    heading: "query-parameters",
    content: "Description"
  }, {
    heading: "query-parameters",
    content: "`appid`"
  }, {
    heading: "query-parameters",
    content: "String"
  }, {
    heading: "query-parameters",
    content: "The App ID of your project."
  }, {
    heading: "query-parameters",
    content: "`start_ts`"
  }, {
    heading: "query-parameters",
    content: "Number"
  }, {
    heading: "query-parameters",
    content: "The starting time of the search time frame. Unix time (in seconds since 1 January 1970) in UTC."
  }, {
    heading: "query-parameters",
    content: "`end_ts`"
  }, {
    heading: "query-parameters",
    content: "Number"
  }, {
    heading: "query-parameters",
    content: "The ending time of the search time frame. Unix time (in seconds since 1 January 1970) in UTC."
  }, {
    heading: "query-parameters",
    content: "`cname`"
  }, {
    heading: "query-parameters",
    content: "String"
  }, {
    heading: "query-parameters",
    content: "(Optional) The channel name."
  }, {
    heading: "query-parameters",
    content: "`page_no`"
  }, {
    heading: "query-parameters",
    content: "Number"
  }, {
    heading: "query-parameters",
    content: "(Optional) The page number. The default is 1."
  }, {
    heading: "query-parameters",
    content: "`page_size`"
  }, {
    heading: "query-parameters",
    content: "Number"
  }, {
    heading: "query-parameters",
    content: "(Optional) The number of calls on each page. The default is 20 and the maximum is 100."
  }, {
    heading: "response-example",
    content: "Where:"
  }, {
    heading: "response-example",
    content: "`code`: Number. The status code."
  }, {
    heading: "response-example",
    content: "`message`: String. The error message."
  }, {
    heading: "response-example",
    content: "`requestId`: String. The unique identifier of the HTTP request corresponding to this HTTP response."
  }, {
    heading: "response-example",
    content: "`total_size`: Number. The total number of returned calls."
  }, {
    heading: "response-example",
    content: "`page_no`: Number. The page number."
  }, {
    heading: "response-example",
    content: "`page_size`: Number. The number of calls on each page."
  }, {
    heading: "response-example",
    content: "`has_more`: Boolean. Whether there are calls not included in `call_lists`."
  }, {
    heading: "response-example",
    content: "`true` Indicates that some calls that meet the search criteria are not listed."
  }, {
    heading: "response-example",
    content: "`false` Indicates that all calls that meet the query criteria are listed."
  }, {
    heading: "response-example",
    content: "If the call you need is not in `call_lists`, try narrowing the search and resend the request."
  }, {
    heading: "response-example",
    content: "`call_lists`: JSONArray. The returned calls in descending order of the starting time. Each call has the following properties:"
  }, {
    heading: "response-example",
    content: "`call_id`: String. The unique ID of the call."
  }, {
    heading: "response-example",
    content: "`cname`: String. The channel name."
  }, {
    heading: "response-example",
    content: "`created_ts`: Number. The starting time of the call. Unix time (in seconds since 1 January 1970) in UTC."
  }, {
    heading: "response-example",
    content: "`destroyed_ts`: Number. The ending time of the call. Unix time (in seconds since 1 January 1970) in UTC."
  }, {
    heading: "response-example",
    content: "`finished`: Boolean. Whether the call has finished or is still ongoing."
  }, {
    heading: "response-example",
    content: "`call_pcu`: Number. Peak number of callers."
  }, {
    heading: "response-example",
    content: "`call_acu`: Number. Average number of callers."
  }, {
    heading: "response-example",
    content: "`call_audio_freeze_rate`: Number. The audio freeze rate."
  }, {
    heading: "response-example",
    content: "`call_video_freeze_rate`: Number. The video freeze rate."
  }, {
    heading: "get-session-details",
    content: "This method gets the detailed call statistics of users by specifying the unique ID of the call."
  }, {
    heading: "get-session-details",
    content: "Method: `GET`"
  }, {
    heading: "get-session-details",
    content: "Endpoint: `/beta/analytics/call/sessions`"
  }, {
    heading: "query-parameters-1",
    content: "The following query string parameters are required in the URL to specify the call ID and statistics:"
  }, {
    heading: "query-parameters-1",
    content: "Parameter"
  }, {
    heading: "query-parameters-1",
    content: "Type"
  }, {
    heading: "query-parameters-1",
    content: "Description"
  }, {
    heading: "query-parameters-1",
    content: "`start_ts`"
  }, {
    heading: "query-parameters-1",
    content: "Number"
  }, {
    heading: "query-parameters-1",
    content: "The starting time of the call. Unix time (in seconds since 1 January 1970) in UTC."
  }, {
    heading: "query-parameters-1",
    content: "`end_ts`"
  }, {
    heading: "query-parameters-1",
    content: "Number"
  }, {
    heading: "query-parameters-1",
    content: "The ending time of the call. Unix time (in seconds since 1 January 1970) in UTC."
  }, {
    heading: "query-parameters-1",
    content: "`call_id`"
  }, {
    heading: "query-parameters-1",
    content: "String"
  }, {
    heading: "query-parameters-1",
    content: "The unique ID of the call."
  }, {
    heading: "query-parameters-1",
    content: "`page_no`"
  }, {
    heading: "query-parameters-1",
    content: "Number"
  }, {
    heading: "query-parameters-1",
    content: "(Optional) The page number. The default is 1."
  }, {
    heading: "query-parameters-1",
    content: "`page_size`"
  }, {
    heading: "query-parameters-1",
    content: "Number"
  }, {
    heading: "query-parameters-1",
    content: "(Optional) The number of user sessions on each page. The default is 20 and the maximum is 100. To implement pagination, specify values for both `page_no` and `page_size`."
  }, {
    heading: "query-parameters-1",
    content: "`uids`"
  }, {
    heading: "query-parameters-1",
    content: "String"
  }, {
    heading: "query-parameters-1",
    content: "(Optional) The list of user IDs separated by commas. For example, `uids=10001,10002,10003`. You can specify a maximum of 10 user IDs. A user ID may occur twice in the list according to the actual use-case. Therefore, if you specify 10 user IDs in the request, 10 or more user IDs are returned."
  }, {
    heading: "query-parameters-1",
    content: "`appid`"
  }, {
    heading: "query-parameters-1",
    content: "String"
  }, {
    heading: "query-parameters-1",
    content: "App ID of your project."
  }, {
    heading: "query-parameters-1",
    content: "`exclude_server_user`"
  }, {
    heading: "query-parameters-1",
    content: "Boolean"
  }, {
    heading: "query-parameters-1",
    content: "(Optional) Whether or not to exclude Linux users. `true` by default, which represents excluding Linux users."
  }, {
    heading: "response-example-1",
    content: "Where:"
  }, {
    heading: "response-example-1",
    content: "`code`: Number. The status code."
  }, {
    heading: "response-example-1",
    content: "`message`: String. The error message."
  }, {
    heading: "response-example-1",
    content: "`requestId`: String. The unique identifier of the HTTP request corresponding to this HTTP response."
  }, {
    heading: "response-example-1",
    content: "`has_more`: Boolean. Whether there are user sessions not included in `call_info`."
  }, {
    heading: "response-example-1",
    content: "`true` Indicates that some user sessions that meet the search criteria are not listed."
  }, {
    heading: "response-example-1",
    content: "`false` Indicates that all user sessions that meet the query criteria are listed."
  }, {
    heading: "response-example-1",
    content: "If the user session you need is not in `call_info`, try narrowing the search and resend the request."
  }, {
    heading: "response-example-1",
    content: "`total_size`: Number. The total number of returned user sessions."
  }, {
    heading: "response-example-1",
    content: "`page_no`: Number. The page number."
  }, {
    heading: "response-example-1",
    content: "`page_size`: Number. The number of user sessions on each page."
  }, {
    heading: "response-example-1",
    content: "`call_info`: JSONArray. Information of each user in the call in descending order of the joining time per page. Each user has the following properties:"
  }, {
    heading: "response-example-1",
    content: "`sid`: String. The unique ID of the user session."
  }, {
    heading: "response-example-1",
    content: "`cname`: String. The channel name."
  }, {
    heading: "response-example-1",
    content: "`uid`: Number. The user ID."
  }, {
    heading: "response-example-1",
    content: "`account`: String. User-defined nickname."
  }, {
    heading: "response-example-1",
    content: "`network`: String. The network type."
  }, {
    heading: "response-example-1",
    content: "`platform`: String. The platform."
  }, {
    heading: "response-example-1",
    content: "`speaker`: Boolean. Whether or not the user speaks in the call."
  }, {
    heading: "response-example-1",
    content: "`sdk_version`: String. The SDK version."
  }, {
    heading: "response-example-1",
    content: "`device_type`: String. The type of the device used by the user."
  }, {
    heading: "response-example-1",
    content: "`join_ts`: Number. The time when the user joins the call. Unix time (in seconds since 1 January 1970) in UTC."
  }, {
    heading: "response-example-1",
    content: "`leave_ts`: Number. The time when the user leaves the call. Unix time (in seconds since 1 January 1970) in UTC."
  }, {
    heading: "response-example-1",
    content: "`finished`: Boolean. Whether the user is in the call or has left it."
  }, {
    heading: "response-example-1",
    content: "`roles`: Array. The user role ID reflects the user's role and the functions used in this call."
  }, {
    heading: "response-example-1",
    content: "`Audience`: Receiving user."
  }, {
    heading: "response-example-1",
    content: "`Host`: The sending user."
  }, {
    heading: "response-example-1",
    content: "`Screen Share`: Screen sharing."
  }, {
    heading: "response-example-1",
    content: "`Interactive Live Streaming(ILS)`: Interactive live broadcast."
  }, {
    heading: "response-example-1",
    content: "`Broadcast Streaming(BS)`: Live broadcast at high speed."
  }, {
    heading: "response-example-1",
    content: "`Streaming robot`: Streaming robot."
  }, {
    heading: "response-example-1",
    content: "`On-Premise Recording`: Local recording."
  }, {
    heading: "response-example-1",
    content: "`Cloud Recording`: Cloud recording."
  }, {
    heading: "response-example-1",
    content: "`WebPage Recording`: Page recording."
  }, {
    heading: "response-example-1",
    content: "`user_video_freeze_rate`: Number. User-level video freeze rate."
  }, {
    heading: "response-example-1",
    content: "`user_audio_freeze_rate`: Number. User-level audio stuttering rate."
  }, {
    heading: "get-quality-metrics",
    content: "Gets the quality metrics of a specified call."
  }, {
    heading: "get-quality-metrics",
    content: "Method: `GET`"
  }, {
    heading: "get-quality-metrics",
    content: "Endpoint: `/beta/analytics/call/metrics`"
  }, {
    heading: "query-parameters-2",
    content: "The following query string parameters are required in the URL to specify the call:"
  }, {
    heading: "query-parameters-2",
    content: "Parameter"
  }, {
    heading: "query-parameters-2",
    content: "Type"
  }, {
    heading: "query-parameters-2",
    content: "Description"
  }, {
    heading: "query-parameters-2",
    content: "`appid`"
  }, {
    heading: "query-parameters-2",
    content: "String"
  }, {
    heading: "query-parameters-2",
    content: "App ID of your project."
  }, {
    heading: "query-parameters-2",
    content: "`call_id`"
  }, {
    heading: "query-parameters-2",
    content: "String"
  }, {
    heading: "query-parameters-2",
    content: "The unique ID of the call."
  }, {
    heading: "query-parameters-2",
    content: "`start_ts`"
  }, {
    heading: "query-parameters-2",
    content: "Number"
  }, {
    heading: "query-parameters-2",
    content: "The starting time of the call. Unix time (in seconds since 1 January 1970) in UTC."
  }, {
    heading: "query-parameters-2",
    content: "`end_ts`"
  }, {
    heading: "query-parameters-2",
    content: "Number"
  }, {
    heading: "query-parameters-2",
    content: "The ending time of the call. Unix time (in seconds since 1 January 1970) in UTC."
  }, {
    heading: "query-parameters-2",
    content: "`sids`"
  }, {
    heading: "query-parameters-2",
    content: "String"
  }, {
    heading: "query-parameters-2",
    content: "The list of user session IDs separated by commas, for example,  `sids=SXXXXXXXXXXXXXXXX1,SXXXXXXXXXXXXXXXX2`. You can specify a maximum of 20 user session IDs."
  }, {
    heading: "response-example-2",
    content: "`code`: Number. The status code."
  }, {
    heading: "response-example-2",
    content: "`message`: String. The error message."
  }, {
    heading: "response-example-2",
    content: "`requestId`: String. The unique identifier of the HTTP request corresponding to this HTTP response."
  }, {
    heading: "response-example-2",
    content: "`metrics`: JSONArray. Detailed quality metrics of each user session (`sid`). Each user session includes the following properties:"
  }, {
    heading: "response-example-2",
    content: "`sid`: String. The unique ID of the user session."
  }, {
    heading: "response-example-2",
    content: "`data`: Array. The quality metrics of the user session."
  }, {
    heading: "response-example-2",
    content: "`mid`: Number. The ID of the metric. See Metrics ID for details."
  }, {
    heading: "response-example-2",
    content: "`kvs`: Array. Pairs of the timestamp and the corresponding metric value."
  }, {
    heading: "response-example-2",
    content: "`peer_uid`: Number. The user ID of the remote user. 0 represents that the returned metrics are the local user's."
  }, {
    heading: "get-call-statistics",
    content: "Retrieves statistics on the audio or video freeze rate for a specified call within a given time range and dimension."
  }, {
    heading: "get-call-statistics",
    content: "Method: `GET`"
  }, {
    heading: "get-call-statistics",
    content: "Endpoint: `/beta/analytics/call/statistics`"
  }, {
    heading: "query-parameters-3",
    content: "The following query string parameters are required in the URL to specify the call ID and statistics:"
  }, {
    heading: "query-parameters-3",
    content: "Parameter"
  }, {
    heading: "query-parameters-3",
    content: "Type"
  }, {
    heading: "query-parameters-3",
    content: "Description"
  }, {
    heading: "query-parameters-3",
    content: "`appid`"
  }, {
    heading: "query-parameters-3",
    content: "String"
  }, {
    heading: "query-parameters-3",
    content: "App ID of your project."
  }, {
    heading: "query-parameters-3",
    content: "`call_id`"
  }, {
    heading: "query-parameters-3",
    content: "String"
  }, {
    heading: "query-parameters-3",
    content: "The unique ID of the call."
  }, {
    heading: "query-parameters-3",
    content: "`start_ts`"
  }, {
    heading: "query-parameters-3",
    content: "Number"
  }, {
    heading: "query-parameters-3",
    content: "The starting time of the call. Unix time (in seconds since 1 January 1970) in UTC."
  }, {
    heading: "query-parameters-3",
    content: "`end_ts`"
  }, {
    heading: "query-parameters-3",
    content: "Number"
  }, {
    heading: "query-parameters-3",
    content: "The ending time of the call. Unix time (in seconds since 1 January 1970) in UTC."
  }, {
    heading: "query-parameters-3",
    content: "`dimension`"
  }, {
    heading: "query-parameters-3",
    content: "String"
  }, {
    heading: "query-parameters-3",
    content: "Statistical dimension. Supported values: `country` (Nation); `region` (Area); `net` (Network type); `sdk` (SDK version); `os` (Operating system); `device` (Device model)."
  }, {
    heading: "query-parameters-3",
    content: "`metric`"
  }, {
    heading: "query-parameters-3",
    content: "String"
  }, {
    heading: "query-parameters-3",
    content: "Supported values: `audio_freeze_rate` (Audio stuttering rate); `video_freeze_rate` (Video freeze rate)."
  }, {
    heading: "response-example-3",
    content: "Where:"
  }, {
    heading: "response-example-3",
    content: "`code`: Number. The status code."
  }, {
    heading: "response-example-3",
    content: "`message`: String. The error message."
  }, {
    heading: "response-example-3",
    content: "`requestId`: String. The unique identifier of the HTTP request corresponding to this HTTP response."
  }, {
    heading: "response-example-3",
    content: "`data`: JSONArray. An array containing the dimension value, user count, and metric values:"
  }, {
    heading: "response-example-3",
    content: "`dimension_value`: String. The value of the statistical dimension provided in the request."
  }, {
    heading: "response-example-3",
    content: "`user_count`: Number. The number of users."
  }, {
    heading: "response-example-3",
    content: "`value`: Number. The average metric value over the queried time range, matching the metric specified in the request."
  }, {
    heading: "retrieve-audiovideo-freeze-rate-statistics",
    content: "This method gets audio or video freeze rate statistics for a specific call within a defined time range."
  }, {
    heading: "retrieve-audiovideo-freeze-rate-statistics",
    content: "Method: `GET`"
  }, {
    heading: "retrieve-audiovideo-freeze-rate-statistics",
    content: "Endpoint: `/beta/analytics/call/freeze/bucket`"
  }, {
    heading: "query-parameters-4",
    content: "The following query string parameters are required in the URL to specify the call ID and statistics:"
  }, {
    heading: "query-parameters-4",
    content: "Parameter"
  }, {
    heading: "query-parameters-4",
    content: "Type"
  }, {
    heading: "query-parameters-4",
    content: "Description"
  }, {
    heading: "query-parameters-4",
    content: "`appid`"
  }, {
    heading: "query-parameters-4",
    content: "String"
  }, {
    heading: "query-parameters-4",
    content: "App ID of your project."
  }, {
    heading: "query-parameters-4",
    content: "`call_id`"
  }, {
    heading: "query-parameters-4",
    content: "String"
  }, {
    heading: "query-parameters-4",
    content: "The unique ID of the call."
  }, {
    heading: "query-parameters-4",
    content: "`start_ts`"
  }, {
    heading: "query-parameters-4",
    content: "Number"
  }, {
    heading: "query-parameters-4",
    content: "The starting time of the call. Unix time (in seconds since 1 January 1970) in UTC."
  }, {
    heading: "query-parameters-4",
    content: "`end_ts`"
  }, {
    heading: "query-parameters-4",
    content: "Number"
  }, {
    heading: "query-parameters-4",
    content: "The ending time of the call. Unix time (in seconds since 1 January 1970) in UTC."
  }, {
    heading: "query-parameters-4",
    content: "`metric`"
  }, {
    heading: "query-parameters-4",
    content: "String"
  }, {
    heading: "query-parameters-4",
    content: "Supported values: `audio_freeze_rate` (Audio stuttering rate); `video_freeze_rate` (Video freeze rate)."
  }, {
    heading: "response-example-4",
    content: "Where:"
  }, {
    heading: "response-example-4",
    content: "`code`: Number. The status code."
  }, {
    heading: "response-example-4",
    content: "`message`: String. The error message."
  }, {
    heading: "response-example-4",
    content: "`requestId`: String. The unique identifier of the HTTP request corresponding to this HTTP response."
  }, {
    heading: "response-example-4",
    content: "`data`: JSONArray. An array consisting of buckets and number of people:"
  }, {
    heading: "response-example-4",
    content: "`bucket`: String. The call jam rate buckets represent the distribution of jam rates and include these values:"
  }, {
    heading: "response-example-4",
    content: "`[0%,3%)`"
  }, {
    heading: "response-example-4",
    content: "`[3%,5%)`"
  }, {
    heading: "response-example-4",
    content: "`[5%,10%)`"
  }, {
    heading: "response-example-4",
    content: "`[10%,100%)`"
  }, {
    heading: "response-example-4",
    content: "`user_count`: number. The number of people in this bucket."
  }, {
    heading: "retrieve-insight-statistics",
    content: "This method gets the insight statistics for a specific call within a specified time range."
  }, {
    heading: "retrieve-insight-statistics",
    content: "Method: `GET`"
  }, {
    heading: "retrieve-insight-statistics",
    content: "Endpoint: `/beta/analytics/call/statistics/time`"
  }, {
    heading: "query-parameters-5",
    content: "The following query string parameters are required in the URL to specify the call ID and statistics:"
  }, {
    heading: "query-parameters-5",
    content: "Parameter"
  }, {
    heading: "query-parameters-5",
    content: "Type"
  }, {
    heading: "query-parameters-5",
    content: "Description"
  }, {
    heading: "query-parameters-5",
    content: "`appid`"
  }, {
    heading: "query-parameters-5",
    content: "String"
  }, {
    heading: "query-parameters-5",
    content: "App ID of your project."
  }, {
    heading: "query-parameters-5",
    content: "`call_id`"
  }, {
    heading: "query-parameters-5",
    content: "String"
  }, {
    heading: "query-parameters-5",
    content: "The unique ID of the call."
  }, {
    heading: "query-parameters-5",
    content: "`start_ts`"
  }, {
    heading: "query-parameters-5",
    content: "Number"
  }, {
    heading: "query-parameters-5",
    content: "The starting time of the call. Unix time (in seconds since 1 January 1970) in UTC."
  }, {
    heading: "query-parameters-5",
    content: "`end_ts`"
  }, {
    heading: "query-parameters-5",
    content: "Number"
  }, {
    heading: "query-parameters-5",
    content: "The ending time of the call. Unix time (in seconds since 1 January 1970) in UTC."
  }, {
    heading: "query-parameters-5",
    content: "`metric`"
  }, {
    heading: "query-parameters-5",
    content: "String"
  }, {
    heading: "query-parameters-5",
    content: "Supported values: `user_count` (Number of participants in a call. Each user ID counts as one participant per channel and as multiple participants across different channels); `audio_freeze_rate` (Audio stuttering rate); `video_freeze_rate` (Video freeze rate); `audio_freeze_user_count` (Number of participants experiencing audio freezes); `video_freeze_user_count` (Number of participants experiencing video freezes)."
  }, {
    heading: "response-example-5",
    content: "Where:"
  }, {
    heading: "response-example-5",
    content: "`code`: Number. The status code."
  }, {
    heading: "response-example-5",
    content: "`message`: String. The error message."
  }, {
    heading: "response-example-5",
    content: "`requestId`: String. The unique identifier of the HTTP request corresponding to this HTTP response."
  }, {
    heading: "response-example-5",
    content: "`data`: JSONArray. An array containing timestamps and metric values:"
  }, {
    heading: "response-example-5",
    content: "`ts`: Number. Timestamp in seconds."
  }, {
    heading: "response-example-5",
    content: "`value`: The indicator value at the current timestamp."
  }, {
    heading: "data-insights",
    content: "With the Data Insights RESTful APIs, you can query the usage and quality metrics within a specified time frame."
  }, {
    heading: "api-limits-1",
    content: "The limits of the Data Insights RESTful APIs depend on the pricing plan you subscribe to."
  }, {
    heading: "api-limits-1",
    content: "The Starter, Standard, Premium, and Enterprise pricing plans have the following differences in terms of API limits:"
  }, {
    heading: "api-limits-1",
    content: "Request frequency is calculated using the server's UTC time."
  }, {
    heading: "api-limits-1",
    content: "Data delay refers to the time required from the generation of data to the point where it can be queried."
  }, {
    heading: "api-limits-1",
    content: "Endpoint is `/beta/insight/usage/by_time`:"
  }, {
    heading: "api-limits-1",
    content: "Starter"
  }, {
    heading: "api-limits-1",
    content: "Standard"
  }, {
    heading: "api-limits-1",
    content: "Premium"
  }, {
    heading: "api-limits-1",
    content: "Enterprise"
  }, {
    heading: "api-limits-1",
    content: "Request frequency"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "No more than 3/minute and 40/day"
  }, {
    heading: "api-limits-1",
    content: "No more than 10/minute and 60/day"
  }, {
    heading: "api-limits-1",
    content: "Available data"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "Within the past 14 days"
  }, {
    heading: "api-limits-1",
    content: "Within the past 30 days"
  }, {
    heading: "api-limits-1",
    content: "Query time frame"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "No longer than 3 days"
  }, {
    heading: "api-limits-1",
    content: "No longer than 7 days"
  }, {
    heading: "api-limits-1",
    content: "Data granularity"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "Per day and hour"
  }, {
    heading: "api-limits-1",
    content: "Per day and hour"
  }, {
    heading: "api-limits-1",
    content: "Data delay"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "12 hours"
  }, {
    heading: "api-limits-1",
    content: "6 hours"
  }, {
    heading: "api-limits-1",
    content: "Endpoint is `/beta/insight/quality/by_time`:"
  }, {
    heading: "api-limits-1",
    content: "Starter"
  }, {
    heading: "api-limits-1",
    content: "Standard"
  }, {
    heading: "api-limits-1",
    content: "Premium"
  }, {
    heading: "api-limits-1",
    content: "Enterprise"
  }, {
    heading: "api-limits-1",
    content: "Request frequency"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "No more than 3/minute and 40/day"
  }, {
    heading: "api-limits-1",
    content: "No more than 10/minute and 60/day"
  }, {
    heading: "api-limits-1",
    content: "Available data"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "Within the past 14 days"
  }, {
    heading: "api-limits-1",
    content: "Within the past 30 days"
  }, {
    heading: "api-limits-1",
    content: "Query time frame"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "No longer than 3 days"
  }, {
    heading: "api-limits-1",
    content: "No longer than 7 days"
  }, {
    heading: "api-limits-1",
    content: "Data granularity"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "Per day, hour, and minute"
  }, {
    heading: "api-limits-1",
    content: "Per day, hour, and minute"
  }, {
    heading: "api-limits-1",
    content: "Data delay"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "6 hours"
  }, {
    heading: "api-limits-1",
    content: "6 hours"
  }, {
    heading: "api-limits-1",
    content: "Endpoint is `/beta/insight/usage/aggregation`:"
  }, {
    heading: "api-limits-1",
    content: "Starter"
  }, {
    heading: "api-limits-1",
    content: "Standard"
  }, {
    heading: "api-limits-1",
    content: "Premium"
  }, {
    heading: "api-limits-1",
    content: "Enterprise"
  }, {
    heading: "api-limits-1",
    content: "Request frequency"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "No more than 3/minute and 40/day"
  }, {
    heading: "api-limits-1",
    content: "No more than 10/minute and 60/day"
  }, {
    heading: "api-limits-1",
    content: "Available data"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "Within the past 14 days"
  }, {
    heading: "api-limits-1",
    content: "Within the past 30 days"
  }, {
    heading: "api-limits-1",
    content: "Data granularity"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "Per day and hour"
  }, {
    heading: "api-limits-1",
    content: "Per day and hour"
  }, {
    heading: "api-limits-1",
    content: "Data delay"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "12 hours"
  }, {
    heading: "api-limits-1",
    content: "6 hours"
  }, {
    heading: "api-limits-1",
    content: "Endpoint is `/beta/insight/quality/aggregation`:"
  }, {
    heading: "api-limits-1",
    content: "Starter"
  }, {
    heading: "api-limits-1",
    content: "Standard"
  }, {
    heading: "api-limits-1",
    content: "Premium"
  }, {
    heading: "api-limits-1",
    content: "Enterprise"
  }, {
    heading: "api-limits-1",
    content: "Request frequency"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "No more than 3/minute and 40/day"
  }, {
    heading: "api-limits-1",
    content: "No more than 10/minute and 60/day"
  }, {
    heading: "api-limits-1",
    content: "Available data"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "Within the past 14 days"
  }, {
    heading: "api-limits-1",
    content: "Within the past 30 days"
  }, {
    heading: "api-limits-1",
    content: "Data granularity"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "Per day and hour"
  }, {
    heading: "api-limits-1",
    content: "Per day and hour"
  }, {
    heading: "api-limits-1",
    content: "Data delay"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "N/A"
  }, {
    heading: "api-limits-1",
    content: "6 hours"
  }, {
    heading: "api-limits-1",
    content: "6 hours"
  }, {
    heading: "query-time-frame-usage-metrics",
    content: "This method queries usage metrics for a specified time frame with granularity of hours or days, such as the number of users or channels."
  }, {
    heading: "query-time-frame-usage-metrics",
    content: "Method: `GET`"
  }, {
    heading: "query-time-frame-usage-metrics",
    content: "Endpoint: `/beta/insight/usage/by_time`"
  }, {
    heading: "query-parameters-6",
    content: "The following query string parameters are required in the URL:"
  }, {
    heading: "query-parameters-6",
    content: "Parameter"
  }, {
    heading: "query-parameters-6",
    content: "Type"
  }, {
    heading: "query-parameters-6",
    content: "Description"
  }, {
    heading: "query-parameters-6",
    content: "`appid`"
  }, {
    heading: "query-parameters-6",
    content: "String"
  }, {
    heading: "query-parameters-6",
    content: "The App ID of your project."
  }, {
    heading: "query-parameters-6",
    content: "`startTs`"
  }, {
    heading: "query-parameters-6",
    content: "Number"
  }, {
    heading: "query-parameters-6",
    content: "The start point (Unix timestamp) of the time frame to query."
  }, {
    heading: "query-parameters-6",
    content: "`endTs`"
  }, {
    heading: "query-parameters-6",
    content: "Number"
  }, {
    heading: "query-parameters-6",
    content: "The end point (Unix timestamp) of the time frame to query."
  }, {
    heading: "query-parameters-6",
    content: "`metric`"
  }, {
    heading: "query-parameters-6",
    content: "String"
  }, {
    heading: "query-parameters-6",
    content: "Supported values: `userCount` (The total number of users across all channels. A user joining the same channel with different user IDs or joining different channels with the same user ID is counted multiple times); `sessionCount` (The total count of users joining channels. Each time any user ID joins any channel is counted); `channelCount` (The total number of channels. A channel is counted once for each period between the time when the first user joins it and the time when the last user leaves it); `peakCurrentChannels` (The maximum number of channels in use); `peakCurrentUsers` (The maximum number of in-call users across channels); `totalDuration` (The total duration of video and audio-only calls calculated by the number of users); `totalVideoDuration` (The total duration of video calls calculated by the number of users); `totalAudioDuration` (The total duration of audio-only calls calculated by the number of users)."
  }, {
    heading: "query-parameters-6",
    content: "`aggregateGranularity`"
  }, {
    heading: "query-parameters-6",
    content: "String"
  }, {
    heading: "query-parameters-6",
    content: "Supported values: `1d` (By day. Returns data for the entire day starting from UTC 00:00 within the query time range); `1h` (By hour. Returns data for each whole UTC hour within the query time range)."
  }, {
    heading: "query-parameters-6",
    content: "For more information about calculating by the number of users, see How does Agora calculate service minutes?"
  }, {
    heading: "http-request-example-6",
    content: "The following example queries the total number of users across all channels starting from 8:00 am on July 1, 2021 to 8:00 am on July 3, 2021:"
  }, {
    heading: "response-example-6",
    content: "The response for the previous HTTP request example is as follows:"
  }, {
    heading: "response-parameters",
    content: "Parameter"
  }, {
    heading: "response-parameters",
    content: "Type"
  }, {
    heading: "response-parameters",
    content: "Description"
  }, {
    heading: "response-parameters",
    content: "`code`"
  }, {
    heading: "response-parameters",
    content: "Number"
  }, {
    heading: "response-parameters",
    content: "The status code."
  }, {
    heading: "response-parameters",
    content: "`message`"
  }, {
    heading: "response-parameters",
    content: "String"
  }, {
    heading: "response-parameters",
    content: "The success or error message."
  }, {
    heading: "response-parameters",
    content: "`data`"
  }, {
    heading: "response-parameters",
    content: "JSONArray"
  }, {
    heading: "response-parameters",
    content: "Each JSON object contains a Unix timestamp representing 12:00 am (UTC) on each day within the specified time frame and the corresponding metric value. In the previous request example, two JSON objects are returned: one for 12:00 am on July 2, 2021, and one for 12:00 am on July 3, 2021. Fields: `userCount` (Number. The total number of users across all channels); `ts` (Number. Unix timestamp)."
  }, {
    heading: "query-time-series-quality-metrics",
    content: "This method queries quality metrics for a specified time range with granularity of hours, days, or minutes, such as the audio or video freeze rate."
  }, {
    heading: "query-time-series-quality-metrics",
    content: "Method: `GET`"
  }, {
    heading: "query-time-series-quality-metrics",
    content: "Endpoint: `/beta/insight/quality/by_time`"
  }, {
    heading: "query-parameters-7",
    content: "The following query string parameters are required in the URL:"
  }, {
    heading: "query-parameters-7",
    content: "Parameter"
  }, {
    heading: "query-parameters-7",
    content: "Type"
  }, {
    heading: "query-parameters-7",
    content: "Description"
  }, {
    heading: "query-parameters-7",
    content: "`appid`"
  }, {
    heading: "query-parameters-7",
    content: "String"
  }, {
    heading: "query-parameters-7",
    content: "The App ID of your project."
  }, {
    heading: "query-parameters-7",
    content: "`startTs`"
  }, {
    heading: "query-parameters-7",
    content: "Number"
  }, {
    heading: "query-parameters-7",
    content: "The start point (Unix timestamp) of the time frame to query."
  }, {
    heading: "query-parameters-7",
    content: "`endTs`"
  }, {
    heading: "query-parameters-7",
    content: "Number"
  }, {
    heading: "query-parameters-7",
    content: "The end point (Unix timestamp) of the time frame to query."
  }, {
    heading: "query-parameters-7",
    content: "`metric`"
  }, {
    heading: "query-parameters-7",
    content: "String"
  }, {
    heading: "query-parameters-7",
    content: "Supported values: `joinSuccessRate` (The rate at which users attempting to join any channel succeed, equal to number of users who joined divided by number of attempts to join); `joinSuccessIn5sRate` (The rate at which users attempting to join any channel succeed within 5 seconds, equal to number of users who joined within 5 seconds divided by number of attempts to join); `audioFreezeRate` (The rate at which audio freezing occurs, equal to total audio freeze time divided by total audio minutes calculated by the number of streams. Only audio freezes longer than 200 milliseconds are counted); `videoFreezeRate` (The rate at which video freezing occurs, equal to total video freeze time divided by total video minutes calculated by the number of streams. Only video freezes longer than 600 milliseconds are counted); `networkDelay` (The rate at which network delay occurs, equal to total end-to-end network delay divided by total audio and video minutes calculated by the number of streams. Only end-to-end network delays longer than 400 milliseconds are counted)."
  }, {
    heading: "query-parameters-7",
    content: "`aggregateGranularity`"
  }, {
    heading: "query-parameters-7",
    content: "String"
  }, {
    heading: "query-parameters-7",
    content: "Supported values: `1d` (By day. Returns data for the entire day starting from UTC 00:00 within the query time range); `1h` (By hour. Returns data for each whole UTC hour within the query time range)."
  }, {
    heading: "query-parameters-7",
    content: "`productType`"
  }, {
    heading: "query-parameters-7",
    content: "String"
  }, {
    heading: "query-parameters-7",
    content: "Supported values: `Native` (The Agora RTC SDK for Android, iOS, macOS, and Windows); `WebRTC` (The Agora RTC SDK for Web)."
  }, {
    heading: "query-parameters-7",
    content: "For more information about calculating by the number of streams, see How does Agora calculate service minutes?"
  }, {
    heading: "http-request-example-7",
    content: "The following example queries the hourly network delay rate starting from 8:00 am on July 1, 2021 to 8:00 am on July 2, 2021:"
  }, {
    heading: "response-example-7",
    content: "The response for the previous HTTP request example is as follows:"
  }, {
    heading: "response-parameters-1",
    content: "Parameter"
  }, {
    heading: "response-parameters-1",
    content: "Type"
  }, {
    heading: "response-parameters-1",
    content: "Description"
  }, {
    heading: "response-parameters-1",
    content: "`code`"
  }, {
    heading: "response-parameters-1",
    content: "Number"
  }, {
    heading: "response-parameters-1",
    content: "The status code."
  }, {
    heading: "response-parameters-1",
    content: "`message`"
  }, {
    heading: "response-parameters-1",
    content: "String"
  }, {
    heading: "response-parameters-1",
    content: "The success or error message."
  }, {
    heading: "response-parameters-1",
    content: "`data`"
  }, {
    heading: "response-parameters-1",
    content: "JSONArray"
  }, {
    heading: "response-parameters-1",
    content: "Each JSON object contains a Unix timestamp for every hour within the specified time frame and the corresponding metric value. In the previous request example, 25 JSON objects are returned, from 8:00 am on July 1, 2021 through 8:00 am on July 2, 2021. Fields: `networkDelay` (Number. The network delay rate); `ts` (Number. Unix timestamp)."
  }, {
    heading: "query-aggregated-usage-metrics",
    content: "This method queries aggregated usage metrics for a specified time range and dimension, such as the number of users or channels."
  }, {
    heading: "query-aggregated-usage-metrics",
    content: "Method: `POST`"
  }, {
    heading: "query-aggregated-usage-metrics",
    content: "Endpoint: `/beta/insight/usage/aggregation`"
  }, {
    heading: "query-parameters-8",
    content: "The following query string parameters are required in the URL:"
  }, {
    heading: "query-parameters-8",
    content: "Parameter"
  }, {
    heading: "query-parameters-8",
    content: "Type"
  }, {
    heading: "query-parameters-8",
    content: "Description"
  }, {
    heading: "query-parameters-8",
    content: "`appid`"
  }, {
    heading: "query-parameters-8",
    content: "String"
  }, {
    heading: "query-parameters-8",
    content: "The App ID of your project."
  }, {
    heading: "body-parameters",
    content: "The following query string parameters are required in the URL:"
  }, {
    heading: "body-parameters",
    content: "Parameter"
  }, {
    heading: "body-parameters",
    content: "Type"
  }, {
    heading: "body-parameters",
    content: "Description"
  }, {
    heading: "body-parameters",
    content: "`startTs`"
  }, {
    heading: "body-parameters",
    content: "Number"
  }, {
    heading: "body-parameters",
    content: "The start point (Unix timestamp) of the time frame to query."
  }, {
    heading: "body-parameters",
    content: "`endTs`"
  }, {
    heading: "body-parameters",
    content: "Number"
  }, {
    heading: "body-parameters",
    content: "The end point (Unix timestamp) of the time frame to query."
  }, {
    heading: "body-parameters",
    content: "`metric`"
  }, {
    heading: "body-parameters",
    content: "String"
  }, {
    heading: "body-parameters",
    content: "Supported values: `userCount` (The total number of users across all channels. A user joining the same channel with different user IDs or joining different channels with the same user ID is counted multiple times); `sessionCount` (The total count of users joining channels. Each time any user ID joins any channel is counted); `channelCount` (The total number of channels. A channel is counted once for each period between the time when the first user joins it and the time when the last user leaves it); `peakCurrentChannels` (The maximum number of channels in use); `peakCurrentUsers` (The maximum number of in-call users across channels); `totalDuration` (The total duration of video and audio-only calls calculated by the number of users); `totalVideoDuration` (The total duration of video calls calculated by the number of users); `totalAudioDuration` (The total duration of audio-only calls calculated by the number of users)."
  }, {
    heading: "body-parameters",
    content: "`dimension`"
  }, {
    heading: "body-parameters",
    content: "String"
  }, {
    heading: "body-parameters",
    content: "(Optional) Aggregation dimension. Supported values: `country`, `region`, `net`, `sdk`, `os`, `device`. If you set this parameter, the request returns the top 20 values in the dimension by default, or the top 50 values for `device`. When `metric` is `peakCurrentUsers` or `peakCurrentChannels`, `dimension` and `dimensionValues` are not supported, and the request returns aggregated results only by App ID."
  }, {
    heading: "body-parameters",
    content: "`dimensionValues`"
  }, {
    heading: "body-parameters",
    content: "String"
  }, {
    heading: "body-parameters",
    content: "(Optional) Values for the specified dimension. This parameter is valid only when `dimension` is set. Enclose all values in double quotes and separate them with commas. If you set this parameter, the request returns aggregated metric data for the specified values. To discover top values first, omit `dimensionValues` in an initial request, then choose values from the results for later requests."
  }, {
    heading: "body-parameters",
    content: "`filters`"
  }, {
    heading: "body-parameters",
    content: "JSONArray"
  }, {
    heading: "body-parameters",
    content: "(Optional) Region filters used to filter results by country. This parameter is valid only when `dimension` is `region`. It includes `name` (String. Only `country` is supported) and `value` (String. The country to filter by. Only one country value is supported)."
  }, {
    heading: "http-request-example-8",
    content: "The following examples query the total number of users across all channels starting from 8:00 am on July 1, 2021 to 8:00 am on July 2, 2021:"
  }, {
    heading: "http-request-example-8",
    content: "**Example 1: Query the top 20 countries with the highest number of calls and their respective call counts**"
  }, {
    heading: "http-request-example-8",
    content: "**Example 2: Query the number of calls for SDK versions 3.6.1.1 and 4.1.1**"
  }, {
    heading: "http-request-example-8",
    content: "**Example 3: Query the top 20 regions in China with the highest number of calls and their respective call counts**"
  }, {
    heading: "response-parameters-2",
    content: "Parameter"
  }, {
    heading: "response-parameters-2",
    content: "Type"
  }, {
    heading: "response-parameters-2",
    content: "Description"
  }, {
    heading: "response-parameters-2",
    content: "`code`"
  }, {
    heading: "response-parameters-2",
    content: "Number"
  }, {
    heading: "response-parameters-2",
    content: "The status code."
  }, {
    heading: "response-parameters-2",
    content: "`message`"
  }, {
    heading: "response-parameters-2",
    content: "String"
  }, {
    heading: "response-parameters-2",
    content: "The success or error message."
  }, {
    heading: "response-parameters-2",
    content: "`data`"
  }, {
    heading: "response-parameters-2",
    content: "JSONArray"
  }, {
    heading: "response-parameters-2",
    content: "If the request does not include `dimension`, the response returns metric data aggregated by App ID. If the request includes `dimension`, the response returns an array containing the dimension values and metric data."
  }, {
    heading: "response-example-8",
    content: "**Example 1: Query the top 20 countries with the highest number of calls and their respective call counts**"
  }, {
    heading: "response-example-8",
    content: "Contains 20 sets of data, each representing the top 20 countries with the highest total number of calls between 8:00 am on July 1, 2021 and 8:00 am on July 2, 2021."
  }, {
    heading: "response-example-8",
    content: "**Example 2: Query the number of calls for SDK versions 3.6.1.1 and 4.1.1**"
  }, {
    heading: "response-example-8",
    content: "Contains 2 sets of data, each representing the total number of calls between 8:00 am on July 1, 2021 and 8:00 am on July 2, 2021 for SDK versions 3.6.1.1 and 4.1.1 respectively."
  }, {
    heading: "response-example-8",
    content: "**Example 3: Query the top 20 regions in China with the highest number of calls and their respective call counts**"
  }, {
    heading: "response-example-8",
    content: "Contains 20 sets of data, each representing the top 20 regions in China with the highest total number of calls between 8:00 am on July 1, 2021 and 8:00 am on July 2, 2021."
  }, {
    heading: "query-aggregated-quality-metrics",
    content: "This method queries aggregated quality metrics for a specified time range and dimension, such as the audio or video freeze rate."
  }, {
    heading: "query-aggregated-quality-metrics",
    content: "Method: `POST`"
  }, {
    heading: "query-aggregated-quality-metrics",
    content: "Endpoint: `/beta/insight/quality/aggregation`"
  }, {
    heading: "query-parameters-9",
    content: "The following query string parameters are required in the URL:"
  }, {
    heading: "query-parameters-9",
    content: "Parameter"
  }, {
    heading: "query-parameters-9",
    content: "Type"
  }, {
    heading: "query-parameters-9",
    content: "Description"
  }, {
    heading: "query-parameters-9",
    content: "`appid`"
  }, {
    heading: "query-parameters-9",
    content: "String"
  }, {
    heading: "query-parameters-9",
    content: "The App ID of your project."
  }, {
    heading: "body-parameters-1",
    content: "The following query string parameters are required in the URL:"
  }, {
    heading: "body-parameters-1",
    content: "Parameter"
  }, {
    heading: "body-parameters-1",
    content: "Type"
  }, {
    heading: "body-parameters-1",
    content: "Description"
  }, {
    heading: "body-parameters-1",
    content: "`startTs`"
  }, {
    heading: "body-parameters-1",
    content: "Number"
  }, {
    heading: "body-parameters-1",
    content: "The start point (Unix timestamp) of the time frame to query."
  }, {
    heading: "body-parameters-1",
    content: "`endTs`"
  }, {
    heading: "body-parameters-1",
    content: "Number"
  }, {
    heading: "body-parameters-1",
    content: "The end point (Unix timestamp) of the time frame to query."
  }, {
    heading: "body-parameters-1",
    content: "`metric`"
  }, {
    heading: "body-parameters-1",
    content: "String"
  }, {
    heading: "body-parameters-1",
    content: "Supported values: `joinSuccessRate` (The rate at which users attempting to join any channel succeed, equal to number of users who joined divided by number of attempts to join); `joinSuccessIn5sRate` (The rate at which users attempting to join any channel succeed within 5 seconds, equal to number of users who joined within 5 seconds divided by number of attempts to join); `audioFreezeRate` (The rate at which audio freezing occurs, equal to total audio freeze time divided by total audio minutes calculated by the number of streams. Only audio freezes longer than 200 milliseconds are counted); `videoFreezeRate` (The rate at which video freezing occurs, equal to total video freeze time divided by total video minutes calculated by the number of streams. Only video freezes longer than 600 milliseconds are counted); `networkDelay` (The rate at which network delay occurs, equal to total end-to-end network delay divided by total audio and video minutes calculated by the number of streams. Only end-to-end network delays longer than 400 milliseconds are counted)."
  }, {
    heading: "body-parameters-1",
    content: "`dimension`"
  }, {
    heading: "body-parameters-1",
    content: "String"
  }, {
    heading: "body-parameters-1",
    content: "(Optional) Aggregation dimension. Supported values: `country`, `region`, `net`, `sdk`, `os`, `device`, `channelSize`. If you set this parameter, the request returns the top 20 values in the dimension by default, or the top 50 values for `device`."
  }, {
    heading: "body-parameters-1",
    content: "`dimensionValues`"
  }, {
    heading: "body-parameters-1",
    content: "String"
  }, {
    heading: "body-parameters-1",
    content: "(Optional) Values for the specified dimension. This parameter is valid only when `dimension` is set. Enclose all values in double quotes and separate them with commas. If you set this parameter, the request returns aggregated metric data for the specified values. To discover top values first, omit `dimensionValues` in an initial request, then choose values from the results for later requests. When `dimension` is `channelSize`, `dimensionValues` is not supported and the results are grouped by the preset gradient scale."
  }, {
    heading: "body-parameters-1",
    content: "`filters`"
  }, {
    heading: "body-parameters-1",
    content: "JSONArray"
  }, {
    heading: "body-parameters-1",
    content: "(Optional) Region filters used to filter results by country. This parameter is valid only when `dimension` is `region`. It includes `name` (String. Only `country` is supported) and `value` (String. The country to filter by. Only one country value is supported)."
  }, {
    heading: "http-request-example-9",
    content: "The following examples query the audio freeze rate across all channels starting from 8:00 am on July 1, 2021 to 8:00 am on July 2, 2021:"
  }, {
    heading: "http-request-example-9",
    content: "**Example 1: Query the top 20 countries with the highest audio freeze rates and their respective audio freeze rate**"
  }, {
    heading: "http-request-example-9",
    content: "**Example 2: Query the audio freeze rates for SDK versions 3.6.1.1 and 4.1.1**"
  }, {
    heading: "http-request-example-9",
    content: "**Example 3: Query the top 20 regions in China with the highest audio freeze rates and their respective audio freeze rate**"
  }, {
    heading: "response-parameters-3",
    content: "Parameter"
  }, {
    heading: "response-parameters-3",
    content: "Type"
  }, {
    heading: "response-parameters-3",
    content: "Description"
  }, {
    heading: "response-parameters-3",
    content: "`code`"
  }, {
    heading: "response-parameters-3",
    content: "Number"
  }, {
    heading: "response-parameters-3",
    content: "The status code."
  }, {
    heading: "response-parameters-3",
    content: "`message`"
  }, {
    heading: "response-parameters-3",
    content: "String"
  }, {
    heading: "response-parameters-3",
    content: "The success or error message."
  }, {
    heading: "response-parameters-3",
    content: "`data`"
  }, {
    heading: "response-parameters-3",
    content: "JSONArray"
  }, {
    heading: "response-parameters-3",
    content: "If the `dimension` field is not filled in the request, returns the metric data of the App ID dimension. If the `dimension` field is filled in the request, returns an array composed of dimensions, `refUsage`, and metric data. `refUsage` is auxiliary usage data. In each returned data group, each `metric` corresponds to auxiliary usage data used to assist in determining data validity. When `metric` is `joinSuccessRate` or `joinSuccessIn5sRate`, `refUsage` represents the number of attempts to join the channel. When `metric` is `audioFreezeRate` or `videoFreezeRate`, `refUsage` represents the duration of audio calls or video calls in minutes. When `metric` is `networkDelay`, `refUsage` represents the total duration of audio and video calls in minutes."
  }, {
    heading: "response-example-9",
    content: "**Example 1: Query the top 20 countries with the highest audio freeze rates and their respective audio freeze rate**"
  }, {
    heading: "response-example-9",
    content: "Contains 20 sets of data, each representing the top 20 countries with the highest audio freeze rates between 8:00 am on July 1, 2021 and 8:00 am on July 2, 2021."
  }, {
    heading: "response-example-9",
    content: "**Example 2: Query the audio freeze rates for SDK versions 3.6.1.1 and 4.1.1**"
  }, {
    heading: "response-example-9",
    content: "Contains 2 sets of data, each representing the audio freeze rates between 8:00 am on July 1, 2021 and 8:00 am on July 2, 2021 for SDK versions 3.6.1.1 and 4.1.1 respectively."
  }, {
    heading: "response-example-9",
    content: "**Example 3: Query the top 20 regions in China with the highest audio freeze rates and their respective audio freeze rate**"
  }, {
    heading: "response-example-9",
    content: "Contains 20 sets of data, each representing the top 20 regions in China with the highest audio freeze rates between 8:00 am on July 1, 2021 and 8:00 am on July 2, 2021."
  }, {
    heading: "real-time-monitoring",
    content: "With the Real-time Monitoring RESTful APIs, you can query the scale and quality metrics within a specified time frame. The granularity of the returned data is seconds, which can reflect the actual situation in close to real time."
  }, {
    heading: "real-time-monitoring",
    content: "The data is returned in regular 20-second time windows starting from 00:00:00. For example, \\[00:00:00, 00:00:20] is a time window, while \\[00:00:10, 00:00:30] is not a time window."
  }, {
    heading: "api-limits-2",
    content: "The limits of the Real-time Monitoring RESTful APIs depend on the pricing plan you subscribe to."
  }, {
    heading: "api-limits-2",
    content: "The Starter, Standard, Premium, and Enterprise pricing plans have the following differences in terms of API limits:"
  }, {
    heading: "api-limits-2",
    content: "Starter"
  }, {
    heading: "api-limits-2",
    content: "Standard"
  }, {
    heading: "api-limits-2",
    content: "Premium"
  }, {
    heading: "api-limits-2",
    content: "Enterprise"
  }, {
    heading: "api-limits-2",
    content: "Request frequency"
  }, {
    heading: "api-limits-2",
    content: "N/A"
  }, {
    heading: "api-limits-2",
    content: "N/A"
  }, {
    heading: "api-limits-2",
    content: "No more than 3/minute and 480/day"
  }, {
    heading: "api-limits-2",
    content: "No more than 10/minute and 1440/day"
  }, {
    heading: "api-limits-2",
    content: "Available data"
  }, {
    heading: "api-limits-2",
    content: "N/A"
  }, {
    heading: "api-limits-2",
    content: "N/A"
  }, {
    heading: "api-limits-2",
    content: "Within the past 40 minutes"
  }, {
    heading: "api-limits-2",
    content: "Within the past 60 minutes"
  }, {
    heading: "api-limits-2",
    content: "Query time frame"
  }, {
    heading: "api-limits-2",
    content: "N/A"
  }, {
    heading: "api-limits-2",
    content: "N/A"
  }, {
    heading: "api-limits-2",
    content: "No longer than 40 minutes"
  }, {
    heading: "api-limits-2",
    content: "No longer than 60 minutes"
  }, {
    heading: "api-limits-2",
    content: "Data delay"
  }, {
    heading: "api-limits-2",
    content: "N/A"
  }, {
    heading: "api-limits-2",
    content: "N/A"
  }, {
    heading: "api-limits-2",
    content: "40 seconds"
  }, {
    heading: "api-limits-2",
    content: "20 seconds"
  }, {
    heading: "api-limits-2",
    content: "Request frequency is calculated using the server's UTC time."
  }, {
    heading: "query-real-time-scale-metrics",
    content: "This method queries the real-time number of users and channels."
  }, {
    heading: "query-real-time-scale-metrics",
    content: "Method: `GET`"
  }, {
    heading: "query-real-time-scale-metrics",
    content: "Endpoint: `/beta/realtime/usage/by_time_20sec`"
  }, {
    heading: "query-parameters-10",
    content: "The following query string parameters are required in the URL:"
  }, {
    heading: "query-parameters-10",
    content: "**Parameter**"
  }, {
    heading: "query-parameters-10",
    content: "Type"
  }, {
    heading: "query-parameters-10",
    content: "**Description**"
  }, {
    heading: "query-parameters-10",
    content: "`appid`"
  }, {
    heading: "query-parameters-10",
    content: "String"
  }, {
    heading: "query-parameters-10",
    content: "The App ID of your project."
  }, {
    heading: "query-parameters-10",
    content: "`startTs`"
  }, {
    heading: "query-parameters-10",
    content: "Number"
  }, {
    heading: "query-parameters-10",
    content: "The start point (Unix timestamp) of the time frame to query. The time window that  `startTs` falls in is included in the response."
  }, {
    heading: "query-parameters-10",
    content: "`endTs`"
  }, {
    heading: "query-parameters-10",
    content: "Number"
  }, {
    heading: "query-parameters-10",
    content: "The end point (Unix timestamp) of the time frame to query.  The time window that  `endTs` falls in is *not* included in the response."
  }, {
    heading: "query-parameters-10",
    content: "`productType`"
  }, {
    heading: "query-parameters-10",
    content: "String"
  }, {
    heading: "query-parameters-10",
    content: "Supported values: `Native` (The Agora RTC SDK for Android, iOS, macOS, and Windows); `WebRTC` (The Agora RTC SDK for Web)."
  }, {
    heading: "query-parameters-10",
    content: "`metric`"
  }, {
    heading: "query-parameters-10",
    content: "String"
  }, {
    heading: "query-parameters-10",
    content: "Supported values: `userCount` (The total number of users across all in-use channels. A user joining multiple channels is counted multiple times); `channelCount` (The total number of channels. A channel is counted once for each period between the time when the first user joins it and the time when the last user leaves it)."
  }, {
    heading: "query-parameters-10",
    content: "`dimension`"
  }, {
    heading: "query-parameters-10",
    content: "String"
  }, {
    heading: "query-parameters-10",
    content: "(Optional) Aggregation dimension. Supported values: `country`, `region`, `net`, `sdk`, `os`, `device`. To obtain the top values for the current `dimension`, query top 20 real-time scale metrics, then choose values from the results and pass them in `dimensionValues` in later requests."
  }, {
    heading: "query-parameters-10",
    content: "`dimensionValues`"
  }, {
    heading: "query-parameters-10",
    content: "String"
  }, {
    heading: "query-parameters-10",
    content: "(Optional) The values for the specified dimension. This parameter is only valid when the `dimension` parameter is set. All values must be enclosed in double quotes and separated by commas. If this parameter is set, the request will return the aggregated metric data corresponding to the values specified in `dimensionValues`."
  }, {
    heading: "query-parameters-10",
    content: "`cname`"
  }, {
    heading: "query-parameters-10",
    content: "String"
  }, {
    heading: "query-parameters-10",
    content: "(Optional)The channel name. If you do not specify this parameter, the metric data of your entire project (rather than a specific channel) is returned."
  }, {
    heading: "http-request-example-10",
    content: "The following example queries the real-time number of users for SDK versions 3.6.1.1 and 4.1.1, with `startTs` set to 08:10:10 on September 17, 2021 and `endTs` set to 08:11:10 on the same day. The HTTP request is as follows:"
  }, {
    heading: "response-parameters-4",
    content: "The response contains the following fields:"
  }, {
    heading: "response-parameters-4",
    content: "Field"
  }, {
    heading: "response-parameters-4",
    content: "Type"
  }, {
    heading: "response-parameters-4",
    content: "Description"
  }, {
    heading: "response-parameters-4",
    content: "`code`"
  }, {
    heading: "response-parameters-4",
    content: "Number"
  }, {
    heading: "response-parameters-4",
    content: "The status code. `200` indicates that the request is successful."
  }, {
    heading: "response-parameters-4",
    content: "`message`"
  }, {
    heading: "response-parameters-4",
    content: "String"
  }, {
    heading: "response-parameters-4",
    content: "The error message."
  }, {
    heading: "response-parameters-4",
    content: "`data`"
  }, {
    heading: "response-parameters-4",
    content: "JSONArray"
  }, {
    heading: "response-parameters-4",
    content: "An array consisting of the requested `metric` field and `ts`, which is the Unix timestamp of the start point of the corresponding time window."
  }, {
    heading: "response-example-10",
    content: "For the previous HTTP request example, the response includes the total number of users, corresponding SDK version, and Unix timestamp of the following time windows:"
  }, {
    heading: "response-example-10",
    content: "\\[00:10:00, 00:10:20] on September 17, 2021"
  }, {
    heading: "response-example-10",
    content: "\\[00:10:20, 00:10:40] on September 17, 2021"
  }, {
    heading: "response-example-10",
    content: "\\[00:10:40, 00:11:00] on September 17, 2021"
  }, {
    heading: "query-real-time-quality-metrics",
    content: "This method queries the real-time values of quality metrics such as the audio or video freeze rate."
  }, {
    heading: "query-real-time-quality-metrics",
    content: "Method: `GET`"
  }, {
    heading: "query-real-time-quality-metrics",
    content: "Endpoint: `/beta/realtime/quality/by_time_20sec`"
  }, {
    heading: "query-parameters-11",
    content: "The following query string parameters are required in the URL:"
  }, {
    heading: "query-parameters-11",
    content: "Parameter"
  }, {
    heading: "query-parameters-11",
    content: "Type"
  }, {
    heading: "query-parameters-11",
    content: "Description"
  }, {
    heading: "query-parameters-11",
    content: "`appid`"
  }, {
    heading: "query-parameters-11",
    content: "String"
  }, {
    heading: "query-parameters-11",
    content: "The App ID of your project."
  }, {
    heading: "query-parameters-11",
    content: "`startTs`"
  }, {
    heading: "query-parameters-11",
    content: "Number"
  }, {
    heading: "query-parameters-11",
    content: "The start point (Unix timestamp) of the time frame to query. The time window that  `startTs` falls in is included in the response."
  }, {
    heading: "query-parameters-11",
    content: "`endTs`"
  }, {
    heading: "query-parameters-11",
    content: "Number"
  }, {
    heading: "query-parameters-11",
    content: "The end point (Unix timestamp) of the time frame to query.  The time window that  `endTs` falls in is *not* included in the response."
  }, {
    heading: "query-parameters-11",
    content: "`productType`"
  }, {
    heading: "query-parameters-11",
    content: "String"
  }, {
    heading: "query-parameters-11",
    content: "Supported values: `Native` (The Agora RTC SDK for Android, iOS, macOS, and Windows); `WebRTC` (The Agora RTC SDK for Web)."
  }, {
    heading: "query-parameters-11",
    content: "`metric`"
  }, {
    heading: "query-parameters-11",
    content: "String"
  }, {
    heading: "query-parameters-11",
    content: "Supported values: `joinSuccessRate` (The rate at which users attempting to join any channel succeed, equal to number of users who joined divided by number of attempts to join); `joinSuccessIn5sRate` (The rate at which users attempting to join any channel succeed within 5 seconds, equal to number of users who joined within 5 seconds divided by number of attempts to join); `audioFreezeRate` (The rate at which audio freezing occurs, equal to total audio freeze time divided by total audio minutes calculated by the number of streams. Only audio freezes longer than 200 milliseconds are counted); `videoFreezeRate` (The rate at which video freezing occurs, equal to total video freeze time divided by total video minutes calculated by the number of streams. Only video freezes longer than 600 milliseconds are counted); `networkDelay` (The rate at which network delay occurs, equal to total end-to-end network delay divided by total audio and video minutes calculated by the number of streams. Only end-to-end network delays longer than 400 milliseconds are counted)."
  }, {
    heading: "query-parameters-11",
    content: "`dimension`"
  }, {
    heading: "query-parameters-11",
    content: "String"
  }, {
    heading: "query-parameters-11",
    content: "(Optional) Aggregation dimension. Supported values: `country`, `region`, `net`, `sdk`, `os`, `device`. To obtain the top values for the current `dimension`, query top 20 real-time quality metrics, then choose values from the results and pass them in `dimensionValues` in later requests."
  }, {
    heading: "query-parameters-11",
    content: "`dimensionValues`"
  }, {
    heading: "query-parameters-11",
    content: "String"
  }, {
    heading: "query-parameters-11",
    content: "(Optional) The values for the specified dimension. This parameter is only valid when the `dimension` parameter is set. All values must be enclosed in double quotes and separated by commas. If this parameter is set, the request will return the aggregated metric data corresponding to the values specified in `dimensionValues`."
  }, {
    heading: "query-parameters-11",
    content: "`cname`"
  }, {
    heading: "query-parameters-11",
    content: "String"
  }, {
    heading: "query-parameters-11",
    content: "(Optional) The channel name. If you do not specify this parameter, the metric data of your entire project (rather than a specific channel) is returned."
  }, {
    heading: "query-parameters-11",
    content: "`uids`"
  }, {
    heading: "query-parameters-11",
    content: "String"
  }, {
    heading: "query-parameters-11",
    content: "(Optional) The list of user IDs (`uid`). You need to separate multiple user IDs with commas (for example, `uids=10001,10002,10003`). You can specify a maximum of 10 user IDs. The `uids` parameter takes effect only when you specify the `cname` parameter."
  }, {
    heading: "http-request-example-11",
    content: "The following example queries the network delay rate from 00:10:10 to 00:11:10 on September 17, 2021:"
  }, {
    heading: "http-request-example-11",
    content: "**Example 1: `uids` is not specified**"
  }, {
    heading: "http-request-example-11",
    content: "**Example 2: `uids` is specified as `2303692334` and `2963430861`**"
  }, {
    heading: "http-request-example-11",
    content: "**Example 3: `dimension` is specified as `sdkVersion`, and `dimensionValues` as `3.6.1.1` and `4.1.1`**"
  }, {
    heading: "response-parameters-5",
    content: "The response contains the following fields:"
  }, {
    heading: "response-parameters-5",
    content: "Field"
  }, {
    heading: "response-parameters-5",
    content: "Type"
  }, {
    heading: "response-parameters-5",
    content: "Description"
  }, {
    heading: "response-parameters-5",
    content: "`code`"
  }, {
    heading: "response-parameters-5",
    content: "Number"
  }, {
    heading: "response-parameters-5",
    content: "The status code. `200` indicates that the request is successful."
  }, {
    heading: "response-parameters-5",
    content: "`message`"
  }, {
    heading: "response-parameters-5",
    content: "String"
  }, {
    heading: "response-parameters-5",
    content: "The error message."
  }, {
    heading: "response-parameters-5",
    content: "`data`"
  }, {
    heading: "response-parameters-5",
    content: "JSONArray"
  }, {
    heading: "response-parameters-5",
    content: "- The request does not include the `uids` field: An array of metric data and Unix timestamps (in seconds).`; `The request includes the `uids` field: An array of `uid`, metric data, and Unix timestamps (in seconds).`; `The request includes the `dimension` and `dimensionValues` fields: Arrays of metric data, dimensions, and Unix timestamps (in seconds)."
  }, {
    heading: "response-example-11",
    content: "For the previous HTTP request example, the response includes data of the following time windows:"
  }, {
    heading: "response-example-11",
    content: "\\[00:10:00, 00:10:20] on September 17, 2021"
  }, {
    heading: "response-example-11",
    content: "\\[00:10:20, 00:10:40] on September 17, 2021"
  }, {
    heading: "response-example-11",
    content: "\\[00:10:40, 00:11:00] on September 17, 2021"
  }, {
    heading: "response-example-11",
    content: "**Example 1: `uids` is not specified**"
  }, {
    heading: "response-example-11",
    content: "**Example 2: `uids` is specified as `2303692334` and `2963430861`**"
  }, {
    heading: "response-example-11",
    content: "**Example 3: `dimension` is specified as `sdkVersion`, and `dimensionValues` as `3.6.1.1` and `4.1.1`**"
  }, {
    heading: "query-top-20-real-time-scale-metrics",
    content: "This method queries the top 20 grouped data of real-time scale for a specified dimension and provides content input for the `dimensionValues` parameter in Query real-time scale."
  }, {
    heading: "query-top-20-real-time-scale-metrics",
    content: "Method: `GET`"
  }, {
    heading: "query-top-20-real-time-scale-metrics",
    content: "Endpoint: `/beta/realtime/usage/dimension/top20`"
  }, {
    heading: "query-parameters-12",
    content: "The following query string parameters are required in the URL:"
  }, {
    heading: "query-parameters-12",
    content: "**Parameter**"
  }, {
    heading: "query-parameters-12",
    content: "Type"
  }, {
    heading: "query-parameters-12",
    content: "**Description**"
  }, {
    heading: "query-parameters-12",
    content: "`appid`"
  }, {
    heading: "query-parameters-12",
    content: "String"
  }, {
    heading: "query-parameters-12",
    content: "The App ID of your project."
  }, {
    heading: "query-parameters-12",
    content: "`ts`"
  }, {
    heading: "query-parameters-12",
    content: "Number"
  }, {
    heading: "query-parameters-12",
    content: "The start point (Unix timestamp) of the time frame to query. The actual query range is \\[ts, ts + 20s]."
  }, {
    heading: "query-parameters-12",
    content: "`productType`"
  }, {
    heading: "query-parameters-12",
    content: "String"
  }, {
    heading: "query-parameters-12",
    content: "Supported values: `Native` (The Agora RTC SDK for Android, iOS, macOS, and Windows); `WebRTC` (The Agora RTC SDK for Web)."
  }, {
    heading: "query-parameters-12",
    content: "`metric`"
  }, {
    heading: "query-parameters-12",
    content: "String"
  }, {
    heading: "query-parameters-12",
    content: "The metric you want to query. You can only set it `userCount`, namely the number of users. One user ID in one channel is counted as one user, while one user ID in multiple channels is counted as multiple users."
  }, {
    heading: "query-parameters-12",
    content: "`dimension`"
  }, {
    heading: "query-parameters-12",
    content: "String"
  }, {
    heading: "query-parameters-12",
    content: "Aggregation dimension. Supported values: `country`, `region`, `net`, `sdk`, `os`, `device`. The request returns the top 20 values in the dimension by default, or the top 50 values for `device`."
  }, {
    heading: "request-example",
    content: "The following example queries the top 20 number of users for each SDK version starting from 08:10:10 on September 17, 2021 is as follows:"
  }, {
    heading: "response-parameters-6",
    content: "The response contains the following fields:"
  }, {
    heading: "response-parameters-6",
    content: "Field"
  }, {
    heading: "response-parameters-6",
    content: "Type"
  }, {
    heading: "response-parameters-6",
    content: "Description"
  }, {
    heading: "response-parameters-6",
    content: "`code`"
  }, {
    heading: "response-parameters-6",
    content: "Number"
  }, {
    heading: "response-parameters-6",
    content: "The status code. `200` indicates that the request is successful."
  }, {
    heading: "response-parameters-6",
    content: "`message`"
  }, {
    heading: "response-parameters-6",
    content: "String"
  }, {
    heading: "response-parameters-6",
    content: "The error message."
  }, {
    heading: "response-parameters-6",
    content: "`data`"
  }, {
    heading: "response-parameters-6",
    content: "JSONArray"
  }, {
    heading: "response-parameters-6",
    content: "An array consists of dimensions, metric, and the starting and ending Unix timestamps (in seconds) of the time window."
  }, {
    heading: "response-example-12",
    content: "The response contains 20 sets of data, each representing the top 20 call volume data for each SDK version during the time window from 08:10:10 to 08:10:30 on September 17, 2021."
  }, {
    heading: "query-top-20-real-time-quality-metrics",
    content: "This method queries the top 20 grouped data of real-time call quality for a specified dimension and provides content input for the `dimensionValues` parameter in Query real-time quality."
  }, {
    heading: "query-top-20-real-time-quality-metrics",
    content: "Method: `GET`"
  }, {
    heading: "query-top-20-real-time-quality-metrics",
    content: "Endpoint: `/beta/realtime/quality/dimension/top20`"
  }, {
    heading: "query-parameters-13",
    content: "The following query string parameters are required in the URL:"
  }, {
    heading: "query-parameters-13",
    content: "**Parameter**"
  }, {
    heading: "query-parameters-13",
    content: "Type"
  }, {
    heading: "query-parameters-13",
    content: "**Description**"
  }, {
    heading: "query-parameters-13",
    content: "`appid`"
  }, {
    heading: "query-parameters-13",
    content: "String"
  }, {
    heading: "query-parameters-13",
    content: "The App ID of your project."
  }, {
    heading: "query-parameters-13",
    content: "`ts`"
  }, {
    heading: "query-parameters-13",
    content: "Number"
  }, {
    heading: "query-parameters-13",
    content: "The start point (Unix timestamp) of the time frame to query. The actual query range is \\[ts, ts + 20s]."
  }, {
    heading: "query-parameters-13",
    content: "`productType`"
  }, {
    heading: "query-parameters-13",
    content: "String"
  }, {
    heading: "query-parameters-13",
    content: "Supported values: `Native` (The Agora RTC SDK for Android, iOS, macOS, and Windows); `WebRTC` (The Agora RTC SDK for Web)."
  }, {
    heading: "query-parameters-13",
    content: "`metric`"
  }, {
    heading: "query-parameters-13",
    content: "String"
  }, {
    heading: "query-parameters-13",
    content: "Supported values: `joinSuccessRate` (The rate at which users attempting to join any channel succeed, equal to number of users who joined divided by number of attempts to join); `joinSuccessIn5sRate` (The rate at which users attempting to join any channel succeed within 5 seconds, equal to number of users who joined within 5 seconds divided by number of attempts to join); `audioFreezeRate` (The rate at which audio freezing occurs, equal to total audio freeze time divided by total audio minutes calculated by the number of streams. Only audio freezes longer than 200 milliseconds are counted); `videoFreezeRate` (The rate at which video freezing occurs, equal to total video freeze time divided by total video minutes calculated by the number of streams. Only video freezes longer than 600 milliseconds are counted); `networkDelay` (The rate at which network delay occurs, equal to total end-to-end network delay divided by total audio and video minutes calculated by the number of streams. Only end-to-end network delays longer than 400 milliseconds are counted)."
  }, {
    heading: "query-parameters-13",
    content: "`dimension`"
  }, {
    heading: "query-parameters-13",
    content: "String"
  }, {
    heading: "query-parameters-13",
    content: "Aggregation dimension. Supported values: `country`, `region`, `net`, `sdk`, `os`, `device`. The request returns the top 20 values in the dimension by default, or the top 50 values for `device`."
  }, {
    heading: "query-parameters-13",
    content: "`extraMetrics`"
  }, {
    heading: "query-parameters-13",
    content: "String"
  }, {
    heading: "query-parameters-13",
    content: "Additional indicator, used to help determine the validity of data. Only supports setting to `userCount`, that is, the number of users under the current dimension."
  }, {
    heading: "request-example-1",
    content: "The following example passes in `extraMetrics` and queries the top 50 audio freeze rate values for each device starting from 20:00:00 on December 21, 2022:"
  }, {
    heading: "response-parameters-7",
    content: "The response contains the following fields:"
  }, {
    heading: "response-parameters-7",
    content: "Field"
  }, {
    heading: "response-parameters-7",
    content: "Type"
  }, {
    heading: "response-parameters-7",
    content: "Description"
  }, {
    heading: "response-parameters-7",
    content: "`code`"
  }, {
    heading: "response-parameters-7",
    content: "Number"
  }, {
    heading: "response-parameters-7",
    content: "The status code. `200` indicates that the request is successful."
  }, {
    heading: "response-parameters-7",
    content: "`message`"
  }, {
    heading: "response-parameters-7",
    content: "String"
  }, {
    heading: "response-parameters-7",
    content: "The error message."
  }, {
    heading: "response-parameters-7",
    content: "`data`"
  }, {
    heading: "response-parameters-7",
    content: "JSONArray"
  }, {
    heading: "response-parameters-7",
    content: "An array consists of dimensions, metric, and the starting and ending Unix timestamps (in seconds) of the time window."
  }, {
    heading: "response-example-13",
    content: "The response contains 50 sets of data, each representing the top 50 audio freeze rate values for each device model during the time window from 20:00:00 to 20:00:20 on December 21, 2022."
  }, {
    heading: "status-codes",
    content: "Code"
  }, {
    heading: "status-codes",
    content: "Description"
  }, {
    heading: "status-codes",
    content: "`200`"
  }, {
    heading: "status-codes",
    content: "The request is successful."
  }, {
    heading: "status-codes",
    content: "`300`"
  }, {
    heading: "status-codes",
    content: "The API limits are exceeded (Call Search only)"
  }, {
    heading: "status-codes",
    content: "`400`"
  }, {
    heading: "status-codes",
    content: "Invalid parameters."
  }, {
    heading: "status-codes",
    content: "`401`"
  }, {
    heading: "status-codes",
    content: "Unauthorized."
  }, {
    heading: "status-codes",
    content: "`403`"
  }, {
    heading: "status-codes",
    content: "Wrong authorization information. The request is forbidden."
  }, {
    heading: "status-codes",
    content: "`404`"
  }, {
    heading: "status-codes",
    content: "Wrong API invoked."
  }, {
    heading: "status-codes",
    content: "`500`"
  }, {
    heading: "status-codes",
    content: "Unknown error."
  }, {
    heading: "status-codes",
    content: "When `300` is returned, you might get the following error messages:"
  }, {
    heading: "status-codes",
    content: "Error message"
  }, {
    heading: "status-codes",
    content: "Description"
  }, {
    heading: "status-codes",
    content: "Examples of error fix"
  }, {
    heading: "status-codes",
    content: "`qps limit error`"
  }, {
    heading: "status-codes",
    content: "The limit on requests per second is exceeded."
  }, {
    heading: "status-codes",
    content: "If qps limit = 10, ensure that current qps \\< 10"
  }, {
    heading: "status-codes",
    content: "`qpd limit error`"
  }, {
    heading: "status-codes",
    content: "The limit on requests per day is exceeded."
  }, {
    heading: "status-codes",
    content: "If qpd limit = 10000, ensure that current qpd \\< 10000"
  }, {
    heading: "status-codes",
    content: "`query latency limit error`"
  }, {
    heading: "status-codes",
    content: "The limit on data delay is exceeded."
  }, {
    heading: "status-codes",
    content: "If query latency limit = 10s and current time = 1623316864, ensure that  `end_ts` \\< 1623316864 - 10"
  }, {
    heading: "status-codes",
    content: "`query time range limit error`"
  }, {
    heading: "status-codes",
    content: "The limit on available calls is exceeded."
  }, {
    heading: "status-codes",
    content: "If query time range limit = 3d and current time = 1623316864, ensure that  `start_ts` > 1623316864 - 3 \\* 86400(s)"
  }, {
    heading: "status-codes",
    content: "`query time length limit error`"
  }, {
    heading: "status-codes",
    content: "The limit on response content is exceeded."
  }, {
    heading: "status-codes",
    content: "If query time length limit = 3h, ensure that `end_ts` - `start_ts` \\< 3 \\* 3600(s)"
  }, {
    heading: "status-codes",
    content: "`you have no auth to access this service, please buy or upgrade your service package`"
  }, {
    heading: "status-codes",
    content: "You have no access to this service."
  }, {
    heading: "status-codes",
    content: "N/A"
  }, {
    heading: "metrics-id",
    content: "`mid`"
  }, {
    heading: "metrics-id",
    content: "Description"
  }, {
    heading: "metrics-id",
    content: "Unit"
  }, {
    heading: "metrics-id",
    content: "Example"
  }, {
    heading: "metrics-id",
    content: "20001"
  }, {
    heading: "metrics-id",
    content: "App CPU usage."
  }, {
    heading: "metrics-id",
    content: "%"
  }, {
    heading: "metrics-id",
    content: "27%"
  }, {
    heading: "metrics-id",
    content: "20002"
  }, {
    heading: "metrics-id",
    content: "System CPU usage."
  }, {
    heading: "metrics-id",
    content: "%"
  }, {
    heading: "metrics-id",
    content: "15%"
  }, {
    heading: "metrics-id",
    content: "20003"
  }, {
    heading: "metrics-id",
    content: "The upstream bitrate of the audio."
  }, {
    heading: "metrics-id",
    content: "Kbps"
  }, {
    heading: "metrics-id",
    content: "126 Kbps"
  }, {
    heading: "metrics-id",
    content: "20004"
  }, {
    heading: "metrics-id",
    content: "The downstream bitrate of the audio."
  }, {
    heading: "metrics-id",
    content: "Kbps"
  }, {
    heading: "metrics-id",
    content: "108 Kbps"
  }, {
    heading: "metrics-id",
    content: "20005"
  }, {
    heading: "metrics-id",
    content: "The freeze time in rendering the audio."
  }, {
    heading: "metrics-id",
    content: "ms"
  }, {
    heading: "metrics-id",
    content: "106.67 ms"
  }, {
    heading: "metrics-id",
    content: "20006"
  }, {
    heading: "metrics-id",
    content: "The upstream bitrate of the low-quality video stream."
  }, {
    heading: "metrics-id",
    content: "Kbps"
  }, {
    heading: "metrics-id",
    content: "472 Kbps"
  }, {
    heading: "metrics-id",
    content: "20007"
  }, {
    heading: "metrics-id",
    content: "The capturing frame rate of the video."
  }, {
    heading: "metrics-id",
    content: "fps"
  }, {
    heading: "metrics-id",
    content: "16 fps"
  }, {
    heading: "metrics-id",
    content: "20008"
  }, {
    heading: "metrics-id",
    content: "The upstream frame rate of the high-quality video stream."
  }, {
    heading: "metrics-id",
    content: "fps"
  }, {
    heading: "metrics-id",
    content: "12 fps"
  }, {
    heading: "metrics-id",
    content: "20009"
  }, {
    heading: "metrics-id",
    content: "The downstream bitrate of the high-quality video."
  }, {
    heading: "metrics-id",
    content: "Kbps"
  }, {
    heading: "metrics-id",
    content: "309 Kbps"
  }, {
    heading: "metrics-id",
    content: "20010"
  }, {
    heading: "metrics-id",
    content: "The downstream frame rate of the high-quality  video."
  }, {
    heading: "metrics-id",
    content: "fps"
  }, {
    heading: "metrics-id",
    content: "6 fps"
  }, {
    heading: "metrics-id",
    content: "20011"
  }, {
    heading: "metrics-id",
    content: "The freeze time in rendering the video."
  }, {
    heading: "metrics-id",
    content: "ms"
  }, {
    heading: "metrics-id",
    content: "2000.50 ms"
  }, {
    heading: "metrics-id",
    content: "20015"
  }, {
    heading: "metrics-id",
    content: "The upstream packet loss rate of the audio."
  }, {
    heading: "metrics-id",
    content: "%"
  }, {
    heading: "metrics-id",
    content: "1%"
  }, {
    heading: "metrics-id",
    content: "20016"
  }, {
    heading: "metrics-id",
    content: "The end-to-end packet loss rate of the audio."
  }, {
    heading: "metrics-id",
    content: "%"
  }, {
    heading: "metrics-id",
    content: "3%"
  }, {
    heading: "metrics-id",
    content: "20017"
  }, {
    heading: "metrics-id",
    content: "The upstream packet loss rate of the video."
  }, {
    heading: "metrics-id",
    content: "%"
  }, {
    heading: "metrics-id",
    content: "5%"
  }, {
    heading: "metrics-id",
    content: "20018"
  }, {
    heading: "metrics-id",
    content: "The end-to-end packet loss rate of the video."
  }, {
    heading: "metrics-id",
    content: "%"
  }, {
    heading: "metrics-id",
    content: "7%"
  }, {
    heading: "metrics-id",
    content: "20019"
  }, {
    heading: "metrics-id",
    content: "The width of the received video."
  }, {
    heading: "metrics-id",
    content: "-"
  }, {
    heading: "metrics-id",
    content: "360"
  }, {
    heading: "metrics-id",
    content: "20020"
  }, {
    heading: "metrics-id",
    content: "The height of the received video."
  }, {
    heading: "metrics-id",
    content: "-"
  }, {
    heading: "metrics-id",
    content: "640"
  }, {
    heading: "metrics-id",
    content: "20021"
  }, {
    heading: "metrics-id",
    content: "The task scheduling delay."
  }, {
    heading: "metrics-id",
    content: "ms"
  }, {
    heading: "metrics-id",
    content: "2 ms"
  }, {
    heading: "metrics-id",
    content: "20022"
  }, {
    heading: "metrics-id",
    content: "The round-trip time delay from the client to the local router."
  }, {
    heading: "metrics-id",
    content: "ms"
  }, {
    heading: "metrics-id",
    content: "3 ms"
  }, {
    heading: "metrics-id",
    content: "20023"
  }, {
    heading: "metrics-id",
    content: "The upstream frame rate of the low-quality video stream."
  }, {
    heading: "metrics-id",
    content: "fps"
  }, {
    heading: "metrics-id",
    content: "108 fps"
  }, {
    heading: "metrics-id",
    content: "20024"
  }, {
    heading: "metrics-id",
    content: "The upstream bitrate of the video stream."
  }, {
    heading: "metrics-id",
    content: "Kbps"
  }, {
    heading: "metrics-id",
    content: "126 Kbps"
  }, {
    heading: "metrics-id",
    content: "20025"
  }, {
    heading: "metrics-id",
    content: "The sampling volume of the sent audio."
  }, {
    heading: "metrics-id",
    content: "dB"
  }, {
    heading: "metrics-id",
    content: "105 dB"
  }, {
    heading: "metrics-id",
    content: "20026"
  }, {
    heading: "metrics-id",
    content: "The playback volume of the received audio."
  }, {
    heading: "metrics-id",
    content: "dB"
  }, {
    heading: "metrics-id",
    content: "98 dB"
  }, {
    heading: "metrics-id",
    content: "20027"
  }, {
    heading: "metrics-id",
    content: "The width of the sent video."
  }, {
    heading: "metrics-id",
    content: "-"
  }, {
    heading: "metrics-id",
    content: "360"
  }, {
    heading: "metrics-id",
    content: "20028"
  }, {
    heading: "metrics-id",
    content: "The height of the sent video."
  }, {
    heading: "metrics-id",
    content: "-"
  }, {
    heading: "metrics-id",
    content: "640"
  }, {
    heading: "metrics-id",
    content: "20030"
  }, {
    heading: "metrics-id",
    content: "The downstream bitrate of the low-quality video stream."
  }, {
    heading: "metrics-id",
    content: "Kbps"
  }, {
    heading: "metrics-id",
    content: "100 Kbps"
  }, {
    heading: "metrics-id",
    content: "20031"
  }, {
    heading: "metrics-id",
    content: "The downstream frame rate of the low-quality video stream."
  }, {
    heading: "metrics-id",
    content: "fps"
  }, {
    heading: "metrics-id",
    content: "6 fps"
  }, {
    heading: "metrics-id",
    content: "20032"
  }, {
    heading: "metrics-id",
    content: "The width of the received low-quality video."
  }, {
    heading: "metrics-id",
    content: "-"
  }, {
    heading: "metrics-id",
    content: "360"
  }, {
    heading: "metrics-id",
    content: "20033"
  }, {
    heading: "metrics-id",
    content: "The height of the received low-quality video."
  }, {
    heading: "metrics-id",
    content: "-"
  }, {
    heading: "metrics-id",
    content: "640"
  }, {
    heading: "metrics-id",
    content: "20034"
  }, {
    heading: "metrics-id",
    content: "The width of the sent low-quality video."
  }, {
    heading: "metrics-id",
    content: "-"
  }, {
    heading: "metrics-id",
    content: "360"
  }, {
    heading: "metrics-id",
    content: "20035"
  }, {
    heading: "metrics-id",
    content: "The height of the sent low-quality video."
  }, {
    heading: "metrics-id",
    content: "-"
  }, {
    heading: "metrics-id",
    content: "640"
  }, {
    heading: "metrics-id",
    content: "20036"
  }, {
    heading: "metrics-id",
    content: "The WebRTC downstream packet loss rate of the video."
  }, {
    heading: "metrics-id",
    content: "20037"
  }, {
    heading: "metrics-id",
    content: "The WebRTC upstream packet loss rate of the audio."
  }, {
    heading: "metrics-id",
    content: "20038"
  }, {
    heading: "metrics-id",
    content: "The WebRTC upstream packet loss rate of the video."
  }, {
    heading: "metrics-id",
    content: "20039"
  }, {
    heading: "metrics-id",
    content: "App memory usage."
  }, {
    heading: "metrics-id",
    content: "%"
  }, {
    heading: "metrics-id",
    content: "50%"
  }, {
    heading: "metrics-id",
    content: "20040"
  }, {
    heading: "metrics-id",
    content: "System memory usage."
  }, {
    heading: "metrics-id",
    content: "%"
  }, {
    heading: "metrics-id",
    content: "70%"
  }],
  headings: [{
    id: "authentication",
    content: "Authentication"
  }, {
    id: "data-format",
    content: "Data format"
  }, {
    id: "call-inspector",
    content: "Call Inspector"
  }, {
    id: "api-limits",
    content: "API limits"
  }, {
    id: "get-call-list",
    content: "Get call list"
  }, {
    id: "query-parameters",
    content: "Query parameters"
  }, {
    id: "http-request-example",
    content: "HTTP request example"
  }, {
    id: "response-example",
    content: "Response example"
  }, {
    id: "get-session-details",
    content: "Get session details"
  }, {
    id: "query-parameters-1",
    content: "Query parameters"
  }, {
    id: "http-request-example-1",
    content: "HTTP request example"
  }, {
    id: "response-example-1",
    content: "Response example"
  }, {
    id: "get-quality-metrics",
    content: "Get quality metrics"
  }, {
    id: "query-parameters-2",
    content: "Query parameters"
  }, {
    id: "http-request-example-2",
    content: "HTTP request example"
  }, {
    id: "response-example-2",
    content: "Response example"
  }, {
    id: "get-call-statistics",
    content: "Get call statistics"
  }, {
    id: "query-parameters-3",
    content: "Query parameters"
  }, {
    id: "http-request-example-3",
    content: "HTTP request example"
  }, {
    id: "response-example-3",
    content: "Response example"
  }, {
    id: "retrieve-audiovideo-freeze-rate-statistics",
    content: "Retrieve Audio/Video freeze rate statistics"
  }, {
    id: "query-parameters-4",
    content: "Query parameters"
  }, {
    id: "http-request-example-4",
    content: "HTTP request example"
  }, {
    id: "response-example-4",
    content: "Response example"
  }, {
    id: "retrieve-insight-statistics",
    content: "Retrieve insight statistics"
  }, {
    id: "query-parameters-5",
    content: "Query parameters"
  }, {
    id: "http-request-example-5",
    content: "HTTP request example"
  }, {
    id: "response-example-5",
    content: "Response example"
  }, {
    id: "data-insights",
    content: "Data Insights"
  }, {
    id: "api-limits-1",
    content: "API limits"
  }, {
    id: "query-time-frame-usage-metrics",
    content: "Query time-frame usage metrics"
  }, {
    id: "query-parameters-6",
    content: "Query parameters"
  }, {
    id: "http-request-example-6",
    content: "HTTP request example"
  }, {
    id: "response-example-6",
    content: "Response example"
  }, {
    id: "response-parameters",
    content: "Response parameters"
  }, {
    id: "query-time-series-quality-metrics",
    content: "Query time-series quality metrics"
  }, {
    id: "query-parameters-7",
    content: "Query parameters"
  }, {
    id: "http-request-example-7",
    content: "HTTP request example"
  }, {
    id: "response-example-7",
    content: "Response example"
  }, {
    id: "response-parameters-1",
    content: "Response parameters"
  }, {
    id: "query-aggregated-usage-metrics",
    content: "Query aggregated usage metrics"
  }, {
    id: "query-parameters-8",
    content: "Query parameters"
  }, {
    id: "body-parameters",
    content: "Body parameters"
  }, {
    id: "http-request-example-8",
    content: "HTTP Request example"
  }, {
    id: "response-parameters-2",
    content: "Response parameters"
  }, {
    id: "response-example-8",
    content: "Response example"
  }, {
    id: "query-aggregated-quality-metrics",
    content: "Query aggregated quality metrics"
  }, {
    id: "query-parameters-9",
    content: "Query parameters"
  }, {
    id: "body-parameters-1",
    content: "Body parameters"
  }, {
    id: "http-request-example-9",
    content: "HTTP Request example"
  }, {
    id: "response-parameters-3",
    content: "Response parameters"
  }, {
    id: "response-example-9",
    content: "Response example"
  }, {
    id: "real-time-monitoring",
    content: "Real-time Monitoring"
  }, {
    id: "api-limits-2",
    content: "API limits"
  }, {
    id: "query-real-time-scale-metrics",
    content: "Query real-time scale metrics"
  }, {
    id: "query-parameters-10",
    content: "Query parameters"
  }, {
    id: "http-request-example-10",
    content: "HTTP request example"
  }, {
    id: "response-parameters-4",
    content: "Response parameters"
  }, {
    id: "response-example-10",
    content: "Response example"
  }, {
    id: "query-real-time-quality-metrics",
    content: "Query real-time quality metrics"
  }, {
    id: "query-parameters-11",
    content: "Query parameters"
  }, {
    id: "http-request-example-11",
    content: "HTTP request example"
  }, {
    id: "response-parameters-5",
    content: "Response parameters"
  }, {
    id: "response-example-11",
    content: "Response example"
  }, {
    id: "query-top-20-real-time-scale-metrics",
    content: "Query top 20 real-time scale metrics"
  }, {
    id: "query-parameters-12",
    content: "Query parameters"
  }, {
    id: "request-example",
    content: "Request example"
  }, {
    id: "response-parameters-6",
    content: "Response parameters"
  }, {
    id: "response-example-12",
    content: "Response example"
  }, {
    id: "query-top-20-real-time-quality-metrics",
    content: "Query top 20 real-time quality metrics"
  }, {
    id: "query-parameters-13",
    content: "Query parameters"
  }, {
    id: "request-example-1",
    content: "Request example"
  }, {
    id: "response-parameters-7",
    content: "Response parameters"
  }, {
    id: "response-example-13",
    content: "Response example"
  }, {
    id: "references",
    content: "References"
  }, {
    id: "status-codes",
    content: "Status codes"
  }, {
    id: "metrics-id",
    content: "Metrics ID"
  }]
};
export let toc = [{
  depth: 2,
  url: "#authentication",
  title: _jsx(_Fragment, {
    children: "Authentication"
  })
}, {
  depth: 2,
  url: "#data-format",
  title: _jsx(_Fragment, {
    children: "Data format"
  })
}, {
  depth: 2,
  url: "#call-inspector",
  title: _jsx(_Fragment, {
    children: "Call Inspector"
  })
}, {
  depth: 3,
  url: "#api-limits",
  title: _jsx(_Fragment, {
    children: "API limits"
  })
}, {
  depth: 3,
  url: "#get-call-list",
  title: _jsx(_Fragment, {
    children: "Get call list"
  })
}, {
  depth: 4,
  url: "#query-parameters",
  title: _jsx(_Fragment, {
    children: "Query parameters"
  })
}, {
  depth: 4,
  url: "#http-request-example",
  title: _jsx(_Fragment, {
    children: "HTTP request example"
  })
}, {
  depth: 4,
  url: "#response-example",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 3,
  url: "#get-session-details",
  title: _jsx(_Fragment, {
    children: "Get session details"
  })
}, {
  depth: 4,
  url: "#query-parameters-1",
  title: _jsx(_Fragment, {
    children: "Query parameters"
  })
}, {
  depth: 4,
  url: "#http-request-example-1",
  title: _jsx(_Fragment, {
    children: "HTTP request example"
  })
}, {
  depth: 4,
  url: "#response-example-1",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 3,
  url: "#get-quality-metrics",
  title: _jsx(_Fragment, {
    children: "Get quality metrics"
  })
}, {
  depth: 4,
  url: "#query-parameters-2",
  title: _jsx(_Fragment, {
    children: "Query parameters"
  })
}, {
  depth: 4,
  url: "#http-request-example-2",
  title: _jsx(_Fragment, {
    children: "HTTP request example"
  })
}, {
  depth: 4,
  url: "#response-example-2",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 3,
  url: "#get-call-statistics",
  title: _jsx(_Fragment, {
    children: "Get call statistics"
  })
}, {
  depth: 4,
  url: "#query-parameters-3",
  title: _jsx(_Fragment, {
    children: "Query parameters"
  })
}, {
  depth: 4,
  url: "#http-request-example-3",
  title: _jsx(_Fragment, {
    children: "HTTP request example"
  })
}, {
  depth: 4,
  url: "#response-example-3",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 3,
  url: "#retrieve-audiovideo-freeze-rate-statistics",
  title: _jsx(_Fragment, {
    children: "Retrieve Audio/Video freeze rate statistics"
  })
}, {
  depth: 4,
  url: "#query-parameters-4",
  title: _jsx(_Fragment, {
    children: "Query parameters"
  })
}, {
  depth: 4,
  url: "#http-request-example-4",
  title: _jsx(_Fragment, {
    children: "HTTP request example"
  })
}, {
  depth: 4,
  url: "#response-example-4",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 3,
  url: "#retrieve-insight-statistics",
  title: _jsx(_Fragment, {
    children: "Retrieve insight statistics"
  })
}, {
  depth: 4,
  url: "#query-parameters-5",
  title: _jsx(_Fragment, {
    children: "Query parameters"
  })
}, {
  depth: 4,
  url: "#http-request-example-5",
  title: _jsx(_Fragment, {
    children: "HTTP request example"
  })
}, {
  depth: 4,
  url: "#response-example-5",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#data-insights",
  title: _jsx(_Fragment, {
    children: "Data Insights"
  })
}, {
  depth: 3,
  url: "#api-limits-1",
  title: _jsx(_Fragment, {
    children: "API limits"
  })
}, {
  depth: 3,
  url: "#query-time-frame-usage-metrics",
  title: _jsx(_Fragment, {
    children: "Query time-frame usage metrics"
  })
}, {
  depth: 4,
  url: "#query-parameters-6",
  title: _jsx(_Fragment, {
    children: "Query parameters"
  })
}, {
  depth: 4,
  url: "#http-request-example-6",
  title: _jsx(_Fragment, {
    children: "HTTP request example"
  })
}, {
  depth: 4,
  url: "#response-example-6",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 4,
  url: "#response-parameters",
  title: _jsx(_Fragment, {
    children: "Response parameters"
  })
}, {
  depth: 3,
  url: "#query-time-series-quality-metrics",
  title: _jsx(_Fragment, {
    children: "Query time-series quality metrics"
  })
}, {
  depth: 4,
  url: "#query-parameters-7",
  title: _jsx(_Fragment, {
    children: "Query parameters"
  })
}, {
  depth: 4,
  url: "#http-request-example-7",
  title: _jsx(_Fragment, {
    children: "HTTP request example"
  })
}, {
  depth: 4,
  url: "#response-example-7",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 4,
  url: "#response-parameters-1",
  title: _jsx(_Fragment, {
    children: "Response parameters"
  })
}, {
  depth: 3,
  url: "#query-aggregated-usage-metrics",
  title: _jsx(_Fragment, {
    children: "Query aggregated usage metrics"
  })
}, {
  depth: 4,
  url: "#query-parameters-8",
  title: _jsx(_Fragment, {
    children: "Query parameters"
  })
}, {
  depth: 4,
  url: "#body-parameters",
  title: _jsx(_Fragment, {
    children: "Body parameters"
  })
}, {
  depth: 4,
  url: "#http-request-example-8",
  title: _jsx(_Fragment, {
    children: "HTTP Request example"
  })
}, {
  depth: 4,
  url: "#response-parameters-2",
  title: _jsx(_Fragment, {
    children: "Response parameters"
  })
}, {
  depth: 4,
  url: "#response-example-8",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 3,
  url: "#query-aggregated-quality-metrics",
  title: _jsx(_Fragment, {
    children: "Query aggregated quality metrics"
  })
}, {
  depth: 4,
  url: "#query-parameters-9",
  title: _jsx(_Fragment, {
    children: "Query parameters"
  })
}, {
  depth: 4,
  url: "#body-parameters-1",
  title: _jsx(_Fragment, {
    children: "Body parameters"
  })
}, {
  depth: 4,
  url: "#http-request-example-9",
  title: _jsx(_Fragment, {
    children: "HTTP Request example"
  })
}, {
  depth: 4,
  url: "#response-parameters-3",
  title: _jsx(_Fragment, {
    children: "Response parameters"
  })
}, {
  depth: 4,
  url: "#response-example-9",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#real-time-monitoring",
  title: _jsx(_Fragment, {
    children: "Real-time Monitoring"
  })
}, {
  depth: 3,
  url: "#api-limits-2",
  title: _jsx(_Fragment, {
    children: "API limits"
  })
}, {
  depth: 3,
  url: "#query-real-time-scale-metrics",
  title: _jsx(_Fragment, {
    children: "Query real-time scale metrics"
  })
}, {
  depth: 4,
  url: "#query-parameters-10",
  title: _jsx(_Fragment, {
    children: "Query parameters"
  })
}, {
  depth: 4,
  url: "#http-request-example-10",
  title: _jsx(_Fragment, {
    children: "HTTP request example"
  })
}, {
  depth: 4,
  url: "#response-parameters-4",
  title: _jsx(_Fragment, {
    children: "Response parameters"
  })
}, {
  depth: 4,
  url: "#response-example-10",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 3,
  url: "#query-real-time-quality-metrics",
  title: _jsx(_Fragment, {
    children: "Query real-time quality metrics"
  })
}, {
  depth: 4,
  url: "#query-parameters-11",
  title: _jsx(_Fragment, {
    children: "Query parameters"
  })
}, {
  depth: 4,
  url: "#http-request-example-11",
  title: _jsx(_Fragment, {
    children: "HTTP request example"
  })
}, {
  depth: 4,
  url: "#response-parameters-5",
  title: _jsx(_Fragment, {
    children: "Response parameters"
  })
}, {
  depth: 4,
  url: "#response-example-11",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 3,
  url: "#query-top-20-real-time-scale-metrics",
  title: _jsx(_Fragment, {
    children: "Query top 20 real-time scale metrics"
  })
}, {
  depth: 4,
  url: "#query-parameters-12",
  title: _jsx(_Fragment, {
    children: "Query parameters"
  })
}, {
  depth: 4,
  url: "#request-example",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 4,
  url: "#response-parameters-6",
  title: _jsx(_Fragment, {
    children: "Response parameters"
  })
}, {
  depth: 4,
  url: "#response-example-12",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 3,
  url: "#query-top-20-real-time-quality-metrics",
  title: _jsx(_Fragment, {
    children: "Query top 20 real-time quality metrics"
  })
}, {
  depth: 4,
  url: "#query-parameters-13",
  title: _jsx(_Fragment, {
    children: "Query parameters"
  })
}, {
  depth: 4,
  url: "#request-example-1",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 4,
  url: "#response-parameters-7",
  title: _jsx(_Fragment, {
    children: "Response parameters"
  })
}, {
  depth: 4,
  url: "#response-example-13",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#references",
  title: _jsx(_Fragment, {
    children: "References"
  })
}, {
  depth: 3,
  url: "#status-codes",
  title: _jsx(_Fragment, {
    children: "Status codes"
  })
}, {
  depth: 3,
  url: "#metrics-id",
  title: _jsx(_Fragment, {
    children: "Metrics ID"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["Before working with the RESTful APIs, review the Agora Analytics features in ", _jsx(_components.a, {
        href: "https://console.agora.io/",
        children: "Agora Console"
      }), " to gain a visual understanding of the quality and usage metrics that are available. For details, see the following user guides:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#call-inspector",
          children: "Call Inspector"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#data-insights",
          children: "Data Insights"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#real-time-monitoring",
          children: "Real-time Monitoring"
        })
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["To use Agora Analytics RESTful APIs, subscribe to an ", _jsx(_components.a, {
            href: "/en/realtime-media/agora-analytics/reference/pricing",
            children: "Agora Analytics pricing plan"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "authentication",
      children: "Authentication"
    }), `
`, _jsxs(_components.p, {
      children: ["Before using the Agora RESTful API, you need to pass the ", _jsx(_components.a, {
        href: "analytics-restful-authentication",
        children: "basic HTTP authentication"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "data-format",
      children: "Data format"
    }), `
`, _jsxs(_components.p, {
      children: ["All requests are sent to the host: ", _jsx(_components.code, {
        children: "api.agora.io"
      }), "."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Request: The request uses query string parameters in the URL."
      }), `
`, _jsx(_components.li, {
        children: "Response: The response content is in JSON format."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "call-inspector",
      children: "Call Inspector"
    }), `
`, _jsx(_components.p, {
      children: "With the Call Inspector RESTful APIs, you can search for calls with quality issues and obtain detailed metrics about call quality."
    }), `
`, _jsx(_components.h3, {
      id: "api-limits",
      children: "API limits"
    }), `
`, _jsxs(_components.p, {
      children: ["The limits of the Call Inspector RESTful APIs depend on the ", _jsx(_components.a, {
        href: "/en/realtime-media/agora-analytics/reference/pricing",
        children: "pricing plan"
      }), " you subscribe to."]
    }), `
`, _jsx(_components.p, {
      children: "The Starter, Standard, Premium, and Enterprise pricing plans have the following differences in terms of API limits:"
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Request frequency is calculated using the server's UTC time."
          }), `
`, _jsx(_components.li, {
            children: "Data delay refers to the time required from the generation of data to the point where it can be queried."
          }), `
`]
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Endpoint is ", _jsx(_components.code, {
          children: "/beta/analytics/call/lists"
        }), ":"]
      }), `
`]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.th, {
            children: "Starter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Standard"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Premium"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Enterprise"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Request frequency"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No more than 1/second and 1,000/day"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No more than 3/second and 2,000/day"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No more than 10/second and 10,000/day"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Available data"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Within the past 1 day"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Within the past 7 days"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Within the past 15 days"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Response content"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A maximum of 8 hours of data"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A maximum of 16 hours of data"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A maximum of 24 hours of data"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Data delay"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "60 seconds"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20 seconds"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20 seconds"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Endpoint is ", _jsx(_components.code, {
          children: "/beta/analytics/call/sessions"
        }), " or ", _jsx(_components.code, {
          children: "/beta/analytics/call/metrics"
        }), ":"]
      }), `
`]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.th, {
            children: "Starter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Standard"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Premium"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Enterprise"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Request frequency"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No more than 1/second and 1,000/day"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No more than 3/second and 2,000/day"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No more than 10/second and 10,000/day"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Available data"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Within the past 1 day"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Within the past 7 days"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Within the past 15 days"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Response content"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A maximum of 1 hours of data"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A maximum of 3 hours of data"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A maximum of 6 hours of data"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Data delay"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "300 seconds"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "150 seconds"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100 seconds"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "get-call-list",
      children: "Get call list"
    }), `
`, _jsx(_components.p, {
      children: "This method gets a list of the calls that meet the search criteria."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "GET"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Endpoint: ", _jsx(_components.code, {
          children: "/beta/analytics/call/lists"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "query-parameters",
      children: "Query parameters"
    }), `
`, _jsx(_components.p, {
      children: "The following query string parameters are required in the URL as search criteria:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "appid"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsxs(_components.td, {
            children: ["The ", _jsx(_components.a, {
              href: "/en/realtime-media/agora-analytics/reference/glossary#app-id",
              children: "App ID"
            }), " of your project."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "start_ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The starting time of the search time frame. Unix time (in seconds since 1 January 1970) in UTC."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "end_ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The ending time of the search time frame. Unix time (in seconds since 1 January 1970) in UTC."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "cname"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "(Optional) The channel name."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "page_no"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "(Optional) The page number. The default is 1."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "page_size"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "(Optional) The number of calls on each page. The default is 20 and the maximum is 100."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "http-request-example",
      children: "HTTP request example"
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "GET /beta/analytics/call/lists?start_ts=1550024508&end_ts=1550025508&appid=xxxxxxxxxxxxxxxxxxxx&page_no=1&page_size=20 HTTP/1.1"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Host: api.agora.io"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Accept: application/json"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "response-example",
      children: "Response example"
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
              children: "0"
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
              children: '  "message"'
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
              children: '"string"'
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
              children: '"15c99xxxxxxxxxxx9be9b"'
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
              children: '  "total_size"'
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
              children: "101"
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
              children: '  "page_no"'
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
              children: "1"
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
              children: '  "page_size"'
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
              children: "20"
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
              children: '  "has_more"'
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "call_lists"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "call_id"'
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
              children: '"cxxxxxxxxxxxxxxxxxxxx"'
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
              children: '      "cname"'
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
              children: '"cname1"'
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
              children: '      "created_ts"'
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
              children: "1547448383"
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
              children: '      "destroyed_ts"'
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
              children: "1547448483"
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
              children: '      "finished"'
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "call_pcu"'
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
              children: "2"
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
              children: '      "call_acu"'
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
              children: "2"
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
              children: '      "call_audio_freeze_rate"'
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
              children: "0.12"
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
              children: '      "call_video_freeze_rate"'
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
              children: "0.07"
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
              children: "  ]"
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
    }), `
`, _jsx(_components.p, {
      children: "Where:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "code"
          }), ": Number. The ", _jsx(_components.a, {
            href: "#status-codes",
            children: "status code"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "message"
          }), ": String. The error message."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "requestId"
          }), ": String. The unique identifier of the HTTP request corresponding to this HTTP response."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "total_size"
          }), ": Number. The total number of returned calls."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "page_no"
          }), ": Number. The page number."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "page_size"
          }), ": Number. The number of calls on each page."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "has_more"
          }), ": Boolean. Whether there are calls not included in ", _jsx(_components.code, {
            children: "call_lists"
          }), "."]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "true"
            }), " Indicates that some calls that meet the search criteria are not listed."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "false"
            }), " Indicates that all calls that meet the query criteria are listed."]
          }), `
`]
        }), `
`, _jsxs(_components.p, {
          children: ["If the call you need is not in ", _jsx(_components.code, {
            children: "call_lists"
          }), ", try narrowing the search and resend the request."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "call_lists"
          }), ": JSONArray. The returned calls in descending order of the starting time. Each call has the following properties:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "call_id"
            }), ": String. The unique ID of the call."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "cname"
            }), ": String. The channel name."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "created_ts"
            }), ": Number. The starting time of the call. Unix time (in seconds since 1 January 1970) in UTC."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "destroyed_ts"
            }), ": Number. The ending time of the call. Unix time (in seconds since 1 January 1970) in UTC."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "finished"
            }), ": Boolean. Whether the call has finished or is still ongoing."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "call_pcu"
            }), ": Number. Peak number of callers."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "call_acu"
            }), ": Number. Average number of callers."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "call_audio_freeze_rate"
            }), ": Number. The audio freeze rate."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "call_video_freeze_rate"
            }), ": Number. The video freeze rate."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "get-session-details",
      children: "Get session details"
    }), `
`, _jsx(_components.p, {
      children: "This method gets the detailed call statistics of users by specifying the unique ID of the call."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "GET"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Endpoint: ", _jsx(_components.code, {
          children: "/beta/analytics/call/sessions"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "query-parameters-1",
      children: "Query parameters"
    }), `
`, _jsx(_components.p, {
      children: "The following query string parameters are required in the URL to specify the call ID and statistics:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "start_ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The starting time of the call. Unix time (in seconds since 1 January 1970) in UTC."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "end_ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The ending time of the call. Unix time (in seconds since 1 January 1970) in UTC."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "call_id"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The unique ID of the call."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "page_no"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "(Optional) The page number. The default is 1."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "page_size"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsxs(_components.td, {
            children: ["(Optional) The number of user sessions on each page. The default is 20 and the maximum is 100. To implement pagination, specify values for both ", _jsx(_components.code, {
              children: "page_no"
            }), " and ", _jsx(_components.code, {
              children: "page_size"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "uids"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsxs(_components.td, {
            children: ["(Optional) The list of user IDs separated by commas. For example, ", _jsx(_components.code, {
              children: "uids=10001,10002,10003"
            }), ". You can specify a maximum of 10 user IDs. A user ID may occur twice in the list according to the actual use-case. Therefore, if you specify 10 user IDs in the request, 10 or more user IDs are returned."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "appid"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "/en/realtime-media/agora-analytics/reference/glossary#app-id",
              children: "App ID"
            }), " of your project."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "exclude_server_user"
            })
          }), _jsx(_components.td, {
            children: "Boolean"
          }), _jsxs(_components.td, {
            children: ["(Optional) Whether or not to exclude Linux users. ", _jsx(_components.code, {
              children: "true"
            }), " by default, which represents excluding Linux users."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "http-request-example-1",
      children: "HTTP request example"
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "GET /beta/analytics/call/sessions?start_ts=1548665345&end_ts=1548670821&appid=axxxxxxxxxxxxxxxxxxxx&call_id=cxxxxxxxxxxxxxxxxxxxx&page_no=1&page_size=20&uids=uxx1,uxx2 HTTP/1.1"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Host: api.agora.io"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Accept: application/json"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "response-example-1",
      children: "Response example"
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
              children: "0"
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
              children: '  "message"'
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
              children: '"string"'
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
              children: '"15c99xxxxxxxxxxx9be9b"'
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
              children: '  "total_size"'
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
              children: "101"
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
              children: '  "page_no"'
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
              children: "1"
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
              children: '  "page_size"'
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
              children: "20"
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
              children: '  "call_info"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "sid"'
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
              children: '"xxxxxxxxxxxxxxxxxxx"'
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
              children: '      "cname"'
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
              children: '"cname1"'
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
              children: '      "uid"'
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
              children: "1234567"
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
              children: '      "account"'
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
              children: '"UserA"'
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
              children: '      "network"'
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
              children: '"LAN"'
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
              children: '      "platform"'
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
              children: '"Linux"'
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
              children: '      "speaker"'
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
              children: "false"
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
              children: '      "roles"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "SPEAKER"'
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "SCREEN_SHARER"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      ],"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "sdk_version"'
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
              children: '"2.3.3.150"'
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
              children: '      "device_type"'
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
              children: '"Linux version 4.14.255-311-248.529.amzn2.x86_64 (mockbuild@ip-10"'
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
              children: '      "join_ts"'
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
              children: "1692584005"
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
              children: '      "leave_ts"'
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
              children: "1692584015"
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
              children: '      "finished"'
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "user_audio_freeze_rate"'
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
              children: "0.01"
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
              children: '      "user_video_freeze_rate"'
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
              children: "0.03"
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
              children: "  ]"
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
    }), `
`, _jsx(_components.p, {
      children: "Where:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "code"
          }), ": Number. The ", _jsx(_components.a, {
            href: "#status-codes",
            children: "status code"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "message"
          }), ": String. The error message."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "requestId"
          }), ": String. The unique identifier of the HTTP request corresponding to this HTTP response."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "has_more"
          }), ": Boolean. Whether there are user sessions not included in ", _jsx(_components.code, {
            children: "call_info"
          }), "."]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "true"
            }), " Indicates that some user sessions that meet the search criteria are not listed."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "false"
            }), " Indicates that all user sessions that meet the query criteria are listed."]
          }), `
`]
        }), `
`, _jsxs(_components.p, {
          children: ["If the user session you need is not in ", _jsx(_components.code, {
            children: "call_info"
          }), ", try narrowing the search and resend the request."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "total_size"
          }), ": Number. The total number of returned user sessions."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "page_no"
          }), ": Number. The page number."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "page_size"
          }), ": Number. The number of user sessions on each page."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "call_info"
          }), ": JSONArray. Information of each user in the call in descending order of the joining time per page. Each user has the following properties:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.code, {
                children: "sid"
              }), ": String. The unique ID of the user session."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.code, {
                children: "cname"
              }), ": String. The channel name."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.code, {
                children: "uid"
              }), ": Number. The user ID."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.code, {
                children: "account"
              }), ": String. User-defined nickname."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.code, {
                children: "network"
              }), ": String. The network type."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.code, {
                children: "platform"
              }), ": String. The platform."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.code, {
                children: "speaker"
              }), ": Boolean. Whether or not the user speaks in the call."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.code, {
                children: "sdk_version"
              }), ": String. The SDK version."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.code, {
                children: "device_type"
              }), ": String. The type of the device used by the user."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.code, {
                children: "join_ts"
              }), ": Number. The time when the user joins the call. Unix time (in seconds since 1 January 1970) in UTC."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.code, {
                children: "leave_ts"
              }), ": Number. The time when the user leaves the call. Unix time (in seconds since 1 January 1970) in UTC."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.code, {
                children: "finished"
              }), ": Boolean. Whether the user is in the call or has left it."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.code, {
                children: "roles"
              }), ": Array. The user role ID reflects the user's role and the functions used in this call."]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "Audience"
                }), ": Receiving user."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "Host"
                }), ": The sending user."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "Screen Share"
                }), ": Screen sharing."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "Interactive Live Streaming(ILS)"
                }), ": Interactive live broadcast."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "Broadcast Streaming(BS)"
                }), ": Live broadcast at high speed."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "Streaming robot"
                }), ": Streaming robot."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "On-Premise Recording"
                }), ": Local recording."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "Cloud Recording"
                }), ": Cloud recording."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "WebPage Recording"
                }), ": Page recording."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.code, {
                children: "user_video_freeze_rate"
              }), ": Number. User-level video freeze rate."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.code, {
                children: "user_audio_freeze_rate"
              }), ": Number. User-level audio stuttering rate."]
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "get-quality-metrics",
      children: "Get quality metrics"
    }), `
`, _jsx(_components.p, {
      children: "Gets the quality metrics of a specified call."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "GET"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Endpoint: ", _jsx(_components.code, {
          children: "/beta/analytics/call/metrics"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "query-parameters-2",
      children: "Query parameters"
    }), `
`, _jsx(_components.p, {
      children: "The following query string parameters are required in the URL to specify the call:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "appid"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "/en/realtime-media/agora-analytics/reference/glossary#app-id",
              children: "App ID"
            }), " of your project."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "call_id"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The unique ID of the call."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "start_ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The starting time of the call. Unix time (in seconds since 1 January 1970) in UTC."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "end_ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The ending time of the call. Unix time (in seconds since 1 January 1970) in UTC."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "sids"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsxs(_components.td, {
            children: ["The list of user session IDs separated by commas, for example,  ", _jsx(_components.code, {
              children: "sids=SXXXXXXXXXXXXXXXX1,SXXXXXXXXXXXXXXXX2"
            }), ". You can specify a maximum of 20 user session IDs."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "http-request-example-2",
      children: "HTTP request example"
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "GET /beta/analytics/call/metrics?start_ts=1548665345&end_ts=1548670821&appid=axxxxxxxxxxxxxxxxxxxx&call_id=cxxxxxxxxxxxxxxxxxxxx&sids=sxxxxxxxxxxxxxxxx1,sxxxxxxxxxxxxxxxx2,sxxxxxxxxxxxxxxxx3 HTTP/1.1"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Host: api.agora.io"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Accept: application/json"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "response-example-2",
      children: "Response example"
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
              children: '  "message"'
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
              children: '"bxxxxxxxxxxxxxxxxxx4"'
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
              children: '  "metrics"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '          "sid"'
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
              children: '"EDB224CCF4FB4F99815C24302BDF3301"'
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
              children: '          "data"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "              {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                  "mid"'
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
              children: "20003"
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
              children: '                  "kvs"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                      ["
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "                          1548670255"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "                          215"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                      ],"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                      ["
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "                          1548670257"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "                          129"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                      ],"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                      ["
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "                          1548670259"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "                          121"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                      ]"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                  ],"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                  "peer_uid"'
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
              children: "0"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "              }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "          ]"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  ]"
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
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "code"
        }), ": Number. The ", _jsx(_components.a, {
          href: "#status-codes",
          children: "status code"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "message"
        }), ": String. The error message."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "requestId"
        }), ": String. The unique identifier of the HTTP request corresponding to this HTTP response."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "metrics"
        }), ": JSONArray. Detailed quality metrics of each user session (", _jsx(_components.code, {
          children: "sid"
        }), "). Each user session includes the following properties:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "sid"
            }), ": String. The unique ID of the user session."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "data"
            }), ": Array. The quality metrics of the user session.", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "mid"
                }), ": Number. The ID of the metric. See ", _jsx(_components.a, {
                  href: "#metrics-id",
                  children: "Metrics ID"
                }), " for details."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "kvs"
                }), ": Array. Pairs of the timestamp and the corresponding metric value."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "peer_uid"
                }), ": Number. The user ID of the remote user. 0 represents that the returned metrics are the local user's."]
              }), `
`]
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "get-call-statistics",
      children: "Get call statistics"
    }), `
`, _jsx(_components.p, {
      children: "Retrieves statistics on the audio or video freeze rate for a specified call within a given time range and dimension."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "GET"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Endpoint: ", _jsx(_components.code, {
          children: "/beta/analytics/call/statistics"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "query-parameters-3",
      children: "Query parameters"
    }), `
`, _jsx(_components.p, {
      children: "The following query string parameters are required in the URL to specify the call ID and statistics:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "appid"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "/en/realtime-media/agora-analytics/reference/glossary#app-id",
              children: "App ID"
            }), " of your project."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "call_id"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The unique ID of the call."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "start_ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The starting time of the call. Unix time (in seconds since 1 January 1970) in UTC."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "end_ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The ending time of the call. Unix time (in seconds since 1 January 1970) in UTC."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "dimension"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsxs(_components.td, {
            children: ["Statistical dimension. Supported values: ", _jsx(_components.code, {
              children: "country"
            }), " (Nation); ", _jsx(_components.code, {
              children: "region"
            }), " (Area); ", _jsx(_components.code, {
              children: "net"
            }), " (Network type); ", _jsx(_components.code, {
              children: "sdk"
            }), " (SDK version); ", _jsx(_components.code, {
              children: "os"
            }), " (Operating system); ", _jsx(_components.code, {
              children: "device"
            }), " (Device model)."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "metric"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsxs(_components.td, {
            children: ["Supported values: ", _jsx(_components.code, {
              children: "audio_freeze_rate"
            }), " (Audio stuttering rate); ", _jsx(_components.code, {
              children: "video_freeze_rate"
            }), " (Video freeze rate)."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "http-request-example-3",
      children: "HTTP request example"
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "curl --request GET \\"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  --url https://api.sd-rtn.com/beta/analytics/call/statistics \\"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  --header 'Accept: application/json' \\"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  --header 'Authorization: Basic 123'"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "response-example-3",
      children: "Response example"
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
              children: '  "message"'
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
              children: '"Success request: /beta/analytics/call/statistics"'
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
              children: '"191xxxxxxxxxxxxxxxx0f"'
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
              children: '  "data"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "dimension_value"'
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
              children: '"3.7.1.247"'
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
              children: '      "user_count"'
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
              children: "6"
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
              children: '      "value"'
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
              children: "0.007"
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
              children: "  ]"
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
    }), `
`, _jsx(_components.p, {
      children: "Where:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "code"
        }), ": Number. The ", _jsx(_components.a, {
          href: "#status-codes",
          children: "status code"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "message"
        }), ": String. The error message."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "requestId"
        }), ": String. The unique identifier of the HTTP request corresponding to this HTTP response."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "data"
        }), ": JSONArray. An array containing the dimension value, user count, and metric values:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "dimension_value"
            }), ": String. The value of the statistical dimension provided in the request."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "user_count"
            }), ": Number. The number of users."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "value"
            }), ": Number. The average metric value over the queried time range, matching the metric specified in the request."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "retrieve-audiovideo-freeze-rate-statistics",
      children: "Retrieve Audio/Video freeze rate statistics"
    }), `
`, _jsx(_components.p, {
      children: "This method gets audio or video freeze rate statistics for a specific call within a defined time range."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "GET"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Endpoint: ", _jsx(_components.code, {
          children: "/beta/analytics/call/freeze/bucket"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "query-parameters-4",
      children: "Query parameters"
    }), `
`, _jsx(_components.p, {
      children: "The following query string parameters are required in the URL to specify the call ID and statistics:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "appid"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "/en/realtime-media/agora-analytics/reference/glossary#app-id",
              children: "App ID"
            }), " of your project."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "call_id"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The unique ID of the call."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "start_ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The starting time of the call. Unix time (in seconds since 1 January 1970) in UTC."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "end_ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The ending time of the call. Unix time (in seconds since 1 January 1970) in UTC."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "metric"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsxs(_components.td, {
            children: ["Supported values: ", _jsx(_components.code, {
              children: "audio_freeze_rate"
            }), " (Audio stuttering rate); ", _jsx(_components.code, {
              children: "video_freeze_rate"
            }), " (Video freeze rate)."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "http-request-example-4",
      children: "HTTP request example"
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "curl --request GET \\"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  --url https://api.sd-rtn.com/beta/analytics/call/freeze/bucket \\"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  --header 'Accept: application/json' \\"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  --header 'Authorization: Basic 123'"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "response-example-4",
      children: "Response example"
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
              children: '  "message"'
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
              children: '"Success request: /beta/analytics/call/freeze/bucket"'
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
              children: '"1f7a7xxxxxxxxxxxxxxxe89d"'
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
              children: '  "data"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "bucket"'
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
              children: '"[3%,5%)"'
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
              children: '      "user_count"'
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
              children: "1"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "bucket"'
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
              children: '"[0%,3%)"'
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
              children: '      "user_count"'
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
              children: "19"
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
              children: "  ]"
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
    }), `
`, _jsx(_components.p, {
      children: "Where:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "code"
        }), ": Number. The ", _jsx(_components.a, {
          href: "#status-codes",
          children: "status code"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "message"
        }), ": String. The error message."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "requestId"
        }), ": String. The unique identifier of the HTTP request corresponding to this HTTP response."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "data"
        }), ": JSONArray. An array consisting of buckets and number of people:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "bucket"
            }), ": String. The call jam rate buckets represent the distribution of jam rates and include these values:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "[0%,3%)"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "[3%,5%)"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "[5%,10%)"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "[10%,100%)"
                })
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "user_count"
            }), ": number. The number of people in this bucket."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "retrieve-insight-statistics",
      children: "Retrieve insight statistics"
    }), `
`, _jsx(_components.p, {
      children: "This method gets the insight statistics for a specific call within a specified time range."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "GET"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Endpoint: ", _jsx(_components.code, {
          children: "/beta/analytics/call/statistics/time"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "query-parameters-5",
      children: "Query parameters"
    }), `
`, _jsx(_components.p, {
      children: "The following query string parameters are required in the URL to specify the call ID and statistics:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "appid"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.a, {
              href: "/en/realtime-media/agora-analytics/reference/glossary#app-id",
              children: "App ID"
            }), " of your project."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "call_id"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The unique ID of the call."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "start_ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The starting time of the call. Unix time (in seconds since 1 January 1970) in UTC."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "end_ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The ending time of the call. Unix time (in seconds since 1 January 1970) in UTC."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "metric"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsxs(_components.td, {
            children: ["Supported values: ", _jsx(_components.code, {
              children: "user_count"
            }), " (Number of participants in a call. Each user ID counts as one participant per channel and as multiple participants across different channels); ", _jsx(_components.code, {
              children: "audio_freeze_rate"
            }), " (Audio stuttering rate); ", _jsx(_components.code, {
              children: "video_freeze_rate"
            }), " (Video freeze rate); ", _jsx(_components.code, {
              children: "audio_freeze_user_count"
            }), " (Number of participants experiencing audio freezes); ", _jsx(_components.code, {
              children: "video_freeze_user_count"
            }), " (Number of participants experiencing video freezes)."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "http-request-example-5",
      children: "HTTP request example"
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "curl --request GET \\"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  --url https://api.sd-rtn.com/beta/analytics/call/statistics/time \\"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  --header 'Accept: application/json' \\"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  --header 'Authorization: Basic 123'"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "response-example-5",
      children: "Response example"
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
              children: '  "message"'
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
              children: '"Success request: /beta/analytics/call/statistics/time"'
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
              children: '"139dxxxxxxxxxxxxxxxxe968"'
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
              children: '  "data"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "ts"'
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
              children: "1692584160"
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
              children: '      "value"'
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
              children: "0"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "ts"'
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
              children: "1692584340"
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
              children: '      "value"'
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
              children: "0.007"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "ts"'
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
              children: "1692584100"
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
              children: '      "value"'
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
              children: "0"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "ts"'
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
              children: "1692584460"
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
              children: '      "value"'
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
              children: "0.003"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "ts"'
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
              children: "1692584400"
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
              children: '      "value"'
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
              children: "0.005"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "ts"'
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
              children: "1692584580"
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
              children: '      "value"'
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
              children: "0.05"
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
              children: "  ]"
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
    }), `
`, _jsx(_components.p, {
      children: "Where:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "code"
        }), ": Number. The ", _jsx(_components.a, {
          href: "#status-codes",
          children: "status code"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "message"
        }), ": String. The error message."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "requestId"
        }), ": String. The unique identifier of the HTTP request corresponding to this HTTP response."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "data"
        }), ": JSONArray. An array containing timestamps and metric values:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "ts"
            }), ": Number. Timestamp in seconds."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "value"
            }), ": The indicator value at the current timestamp."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "data-insights",
      children: "Data Insights"
    }), `
`, _jsx(_components.p, {
      children: "With the Data Insights RESTful APIs, you can query the usage and quality metrics within a specified time frame."
    }), `
`, _jsx(_components.h3, {
      id: "api-limits-1",
      children: "API limits"
    }), `
`, _jsxs(_components.p, {
      children: ["The limits of the Data Insights RESTful APIs depend on the ", _jsx(_components.a, {
        href: "/en/realtime-media/agora-analytics/reference/pricing",
        children: "pricing plan"
      }), " you subscribe to."]
    }), `
`, _jsx(_components.p, {
      children: "The Starter, Standard, Premium, and Enterprise pricing plans have the following differences in terms of API limits:"
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Request frequency is calculated using the server's UTC time."
          }), `
`, _jsx(_components.li, {
            children: "Data delay refers to the time required from the generation of data to the point where it can be queried."
          }), `
`]
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Endpoint is ", _jsx(_components.code, {
          children: "/beta/insight/usage/by_time"
        }), ":"]
      }), `
`]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.th, {
            children: "Starter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Standard"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Premium"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Enterprise"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Request frequency"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No more than 3/minute and 40/day"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No more than 10/minute and 60/day"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Available data"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Within the past 14 days"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Within the past 30 days"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Query time frame"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No longer than 3 days"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No longer than 7 days"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Data granularity"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Per day and hour"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Per day and hour"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Data delay"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "12 hours"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "6 hours"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Endpoint is ", _jsx(_components.code, {
          children: "/beta/insight/quality/by_time"
        }), ":"]
      }), `
`]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.th, {
            children: "Starter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Standard"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Premium"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Enterprise"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Request frequency"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No more than 3/minute and 40/day"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No more than 10/minute and 60/day"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Available data"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Within the past 14 days"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Within the past 30 days"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Query time frame"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No longer than 3 days"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No longer than 7 days"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Data granularity"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Per day, hour, and minute"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Per day, hour, and minute"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Data delay"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "6 hours"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "6 hours"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Endpoint is ", _jsx(_components.code, {
          children: "/beta/insight/usage/aggregation"
        }), ":"]
      }), `
`]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.th, {
            children: "Starter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Standard"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Premium"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Enterprise"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Request frequency"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No more than 3/minute and 40/day"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No more than 10/minute and 60/day"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Available data"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Within the past 14 days"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Within the past 30 days"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Data granularity"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Per day and hour"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Per day and hour"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Data delay"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "12 hours"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "6 hours"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Endpoint is ", _jsx(_components.code, {
          children: "/beta/insight/quality/aggregation"
        }), ":"]
      }), `
`]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.th, {
            children: "Starter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Standard"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Premium"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Enterprise"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Request frequency"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No more than 3/minute and 40/day"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No more than 10/minute and 60/day"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Available data"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Within the past 14 days"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Within the past 30 days"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Data granularity"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Per day and hour"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Per day and hour"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Data delay"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "6 hours"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "6 hours"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "query-time-frame-usage-metrics",
      children: "Query time-frame usage metrics"
    }), `
`, _jsx(_components.p, {
      children: "This method queries usage metrics for a specified time frame with granularity of hours or days, such as the number of users or channels."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "GET"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Endpoint: ", _jsx(_components.code, {
          children: "/beta/insight/usage/by_time"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "query-parameters-6",
      children: "Query parameters"
    }), `
`, _jsx(_components.p, {
      children: "The following query string parameters are required in the URL:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Parameter"
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
              children: "appid"
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
            children: ["The ", _jsx(_components.a, {
              href: "/en/realtime-media/agora-analytics/reference/glossary#app-id",
              children: "App ID"
            }), " of your project."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "startTs"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The start point (Unix timestamp) of the time frame to query."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "endTs"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The end point (Unix timestamp) of the time frame to query."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "metric"
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
            children: ["Supported values: ", _jsx(_components.code, {
              children: "userCount"
            }), " (The total number of users across all channels. A user joining the same channel with different user IDs or joining different channels with the same user ID is counted multiple times); ", _jsx(_components.code, {
              children: "sessionCount"
            }), " (The total count of users joining channels. Each time any user ID joins any channel is counted); ", _jsx(_components.code, {
              children: "channelCount"
            }), " (The total number of channels. A channel is counted once for each period between the time when the first user joins it and the time when the last user leaves it); ", _jsx(_components.code, {
              children: "peakCurrentChannels"
            }), " (The maximum number of channels in use); ", _jsx(_components.code, {
              children: "peakCurrentUsers"
            }), " (The maximum number of in-call users across channels); ", _jsx(_components.code, {
              children: "totalDuration"
            }), " (The total duration of video and audio-only calls calculated by the number of users); ", _jsx(_components.code, {
              children: "totalVideoDuration"
            }), " (The total duration of video calls calculated by the number of users); ", _jsx(_components.code, {
              children: "totalAudioDuration"
            }), " (The total duration of audio-only calls calculated by the number of users)."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "aggregateGranularity"
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
            children: ["Supported values: ", _jsx(_components.code, {
              children: "1d"
            }), " (By day. Returns data for the entire day starting from UTC 00", _jsx(_components.div, {}), " within the query time range); ", _jsx(_components.code, {
              children: "1h"
            }), " (By hour. Returns data for each whole UTC hour within the query time range)."]
          })]
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["For more information about calculating by the number of users, see ", _jsx(_components.a, {
            href: "/en/realtime-media/agora-analytics/reference/billing-policies#how-does-agora-calculate-service-minutes",
            children: "How does Agora calculate service minutes?"
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "http-request-example-6",
      children: "HTTP request example"
    }), `
`, _jsxs(_components.p, {
      children: ["The following example queries the total number of users across all channels starting from 8", _jsx(_components.div, {}), " am on July 1, 2021 to 8", _jsx(_components.div, {}), " am on July 3, 2021:"]
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "GET /beta/insight/usage/by_time?startTs=1625097600&endTs=1625270400&appid=axxxxxxxxxxxxxxxxxxxx&metric=userCount&aggregateGranularity=1d HTTP/1.1"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Host: api.agora.io"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Accept: application/json"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "response-example-6",
      children: "Response example"
    }), `
`, _jsx(_components.p, {
      children: "The response for the previous HTTP request example is as follows:"
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
              children: '    "code"'
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
              children: '    "message"'
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
              children: '"success"'
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
              children: '    "data"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "userCount"'
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
              children: "42"
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
              children: '            "ts"'
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
              children: "1625155200"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "userCount"'
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
              children: "37"
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
              children: '            "ts"'
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
              children: "1625241600"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "   ]"
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
    }), `
`, _jsx(_components.h4, {
      id: "response-parameters",
      children: "Response parameters"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Parameter"
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
            children: ["The ", _jsx(_components.a, {
              href: "#status-codes",
              children: "status code"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "message"
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
            children: "The success or error message."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSONArray"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Each JSON object contains a Unix timestamp representing 12", _jsx(_components.div, {}), " am (UTC) on each day within the specified time frame and the corresponding metric value. In the previous request example, two JSON objects are returned: one for 12", _jsx(_components.div, {}), " am on July 2, 2021, and one for 12", _jsx(_components.div, {}), " am on July 3, 2021. Fields: ", _jsx(_components.code, {
              children: "userCount"
            }), " (Number. The total number of users across all channels); ", _jsx(_components.code, {
              children: "ts"
            }), " (Number. Unix timestamp)."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "query-time-series-quality-metrics",
      children: "Query time-series quality metrics"
    }), `
`, _jsx(_components.p, {
      children: "This method queries quality metrics for a specified time range with granularity of hours, days, or minutes, such as the audio or video freeze rate."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "GET"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Endpoint: ", _jsx(_components.code, {
          children: "/beta/insight/quality/by_time"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "query-parameters-7",
      children: "Query parameters"
    }), `
`, _jsx(_components.p, {
      children: "The following query string parameters are required in the URL:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Parameter"
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
              children: "appid"
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
            children: ["The ", _jsx(_components.a, {
              href: "/en/realtime-media/agora-analytics/reference/glossary#app-id",
              children: "App ID"
            }), " of your project."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "startTs"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The start point (Unix timestamp) of the time frame to query."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "endTs"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The end point (Unix timestamp) of the time frame to query."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "metric"
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
            children: ["Supported values: ", _jsx(_components.code, {
              children: "joinSuccessRate"
            }), " (The rate at which users attempting to join any channel succeed, equal to number of users who joined divided by number of attempts to join); ", _jsx(_components.code, {
              children: "joinSuccessIn5sRate"
            }), " (The rate at which users attempting to join any channel succeed within 5 seconds, equal to number of users who joined within 5 seconds divided by number of attempts to join); ", _jsx(_components.code, {
              children: "audioFreezeRate"
            }), " (The rate at which audio freezing occurs, equal to total audio freeze time divided by total audio minutes calculated by the number of streams. Only audio freezes longer than 200 milliseconds are counted); ", _jsx(_components.code, {
              children: "videoFreezeRate"
            }), " (The rate at which video freezing occurs, equal to total video freeze time divided by total video minutes calculated by the number of streams. Only video freezes longer than 600 milliseconds are counted); ", _jsx(_components.code, {
              children: "networkDelay"
            }), " (The rate at which network delay occurs, equal to total end-to-end network delay divided by total audio and video minutes calculated by the number of streams. Only end-to-end network delays longer than 400 milliseconds are counted)."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "aggregateGranularity"
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
            children: ["Supported values: ", _jsx(_components.code, {
              children: "1d"
            }), " (By day. Returns data for the entire day starting from UTC 00", _jsx(_components.div, {}), " within the query time range); ", _jsx(_components.code, {
              children: "1h"
            }), " (By hour. Returns data for each whole UTC hour within the query time range)."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "productType"
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
            children: ["Supported values: ", _jsx(_components.code, {
              children: "Native"
            }), " (The Agora RTC SDK for Android, iOS, macOS, and Windows); ", _jsx(_components.code, {
              children: "WebRTC"
            }), " (The Agora RTC SDK for Web)."]
          })]
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["For more information about calculating by the number of streams, see ", _jsx(_components.a, {
            href: "/en/realtime-media/agora-analytics/reference/billing-policies#how-does-agora-calculate-service-minutes",
            children: "How does Agora calculate service minutes?"
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "http-request-example-7",
      children: "HTTP request example"
    }), `
`, _jsxs(_components.p, {
      children: ["The following example queries the hourly network delay rate starting from 8", _jsx(_components.div, {}), " am on July 1, 2021 to 8", _jsx(_components.div, {}), " am on July 2, 2021:"]
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "GET /beta/insight/quality/by_time?startTs=1625097600&endTs=1625184000&appid=axxxxxxxxxxxxxxxxxxxx&metric=networkDelay&aggregateGranularity=1h&productType=Native HTTP/1.1"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Host: api.agora.io"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Accept: application/json"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "response-example-7",
      children: "Response example"
    }), `
`, _jsx(_components.p, {
      children: "The response for the previous HTTP request example is as follows:"
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
              children: '    "code"'
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
              children: '    "message"'
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
              children: '"success"'
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
              children: '    "data"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "networkDelay"'
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
              children: "0.064762"
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
              children: '            "ts"'
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
              children: "1625097600"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "networkDelay"'
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
              children: "0.028156"
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
              children: '            "ts"'
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
              children: "1625101200"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "        ..."
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "networkDelay"'
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
              children: "0.03765"
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
              children: '            "ts"'
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
              children: "1625184000"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "   ]"
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
    }), `
`, _jsx(_components.h4, {
      id: "response-parameters-1",
      children: "Response parameters"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Parameter"
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
            children: ["The ", _jsx(_components.a, {
              href: "#status-codes",
              children: "status code"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "message"
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
            children: "The success or error message."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSONArray"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Each JSON object contains a Unix timestamp for every hour within the specified time frame and the corresponding metric value. In the previous request example, 25 JSON objects are returned, from 8", _jsx(_components.div, {}), " am on July 1, 2021 through 8", _jsx(_components.div, {}), " am on July 2, 2021. Fields: ", _jsx(_components.code, {
              children: "networkDelay"
            }), " (Number. The network delay rate); ", _jsx(_components.code, {
              children: "ts"
            }), " (Number. Unix timestamp)."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "query-aggregated-usage-metrics",
      children: "Query aggregated usage metrics"
    }), `
`, _jsx(_components.p, {
      children: "This method queries aggregated usage metrics for a specified time range and dimension, such as the number of users or channels."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "POST"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Endpoint: ", _jsx(_components.code, {
          children: "/beta/insight/usage/aggregation"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "query-parameters-8",
      children: "Query parameters"
    }), `
`, _jsx(_components.p, {
      children: "The following query string parameters are required in the URL:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Parameter"
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
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "appid"
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
            children: ["The ", _jsx(_components.a, {
              href: "/en/realtime-media/agora-analytics/reference/glossary#app-id",
              children: "App ID"
            }), " of your project."]
          })]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "body-parameters",
      children: "Body parameters"
    }), `
`, _jsx(_components.p, {
      children: "The following query string parameters are required in the URL:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Parameter"
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
              children: "startTs"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The start point (Unix timestamp) of the time frame to query."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "endTs"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The end point (Unix timestamp) of the time frame to query."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "metric"
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
            children: ["Supported values: ", _jsx(_components.code, {
              children: "userCount"
            }), " (The total number of users across all channels. A user joining the same channel with different user IDs or joining different channels with the same user ID is counted multiple times); ", _jsx(_components.code, {
              children: "sessionCount"
            }), " (The total count of users joining channels. Each time any user ID joins any channel is counted); ", _jsx(_components.code, {
              children: "channelCount"
            }), " (The total number of channels. A channel is counted once for each period between the time when the first user joins it and the time when the last user leaves it); ", _jsx(_components.code, {
              children: "peakCurrentChannels"
            }), " (The maximum number of channels in use); ", _jsx(_components.code, {
              children: "peakCurrentUsers"
            }), " (The maximum number of in-call users across channels); ", _jsx(_components.code, {
              children: "totalDuration"
            }), " (The total duration of video and audio-only calls calculated by the number of users); ", _jsx(_components.code, {
              children: "totalVideoDuration"
            }), " (The total duration of video calls calculated by the number of users); ", _jsx(_components.code, {
              children: "totalAudioDuration"
            }), " (The total duration of audio-only calls calculated by the number of users)."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "dimension"
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
            children: ["(Optional) Aggregation dimension. Supported values: ", _jsx(_components.code, {
              children: "country"
            }), ", ", _jsx(_components.code, {
              children: "region"
            }), ", ", _jsx(_components.code, {
              children: "net"
            }), ", ", _jsx(_components.code, {
              children: "sdk"
            }), ", ", _jsx(_components.code, {
              children: "os"
            }), ", ", _jsx(_components.code, {
              children: "device"
            }), ". If you set this parameter, the request returns the top 20 values in the dimension by default, or the top 50 values for ", _jsx(_components.code, {
              children: "device"
            }), ". When ", _jsx(_components.code, {
              children: "metric"
            }), " is ", _jsx(_components.code, {
              children: "peakCurrentUsers"
            }), " or ", _jsx(_components.code, {
              children: "peakCurrentChannels"
            }), ", ", _jsx(_components.code, {
              children: "dimension"
            }), " and ", _jsx(_components.code, {
              children: "dimensionValues"
            }), " are not supported, and the request returns aggregated results only by App ID."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "dimensionValues"
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
            children: ["(Optional) Values for the specified dimension. This parameter is valid only when ", _jsx(_components.code, {
              children: "dimension"
            }), " is set. Enclose all values in double quotes and separate them with commas. If you set this parameter, the request returns aggregated metric data for the specified values. To discover top values first, omit ", _jsx(_components.code, {
              children: "dimensionValues"
            }), " in an initial request, then choose values from the results for later requests."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "filters"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSONArray"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["(Optional) Region filters used to filter results by country. This parameter is valid only when ", _jsx(_components.code, {
              children: "dimension"
            }), " is ", _jsx(_components.code, {
              children: "region"
            }), ". It includes ", _jsx(_components.code, {
              children: "name"
            }), " (String. Only ", _jsx(_components.code, {
              children: "country"
            }), " is supported) and ", _jsx(_components.code, {
              children: "value"
            }), " (String. The country to filter by. Only one country value is supported)."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "http-request-example-8",
      children: "HTTP Request example"
    }), `
`, _jsxs(_components.p, {
      children: ["The following examples query the total number of users across all channels starting from 8", _jsx(_components.div, {}), " am on July 1, 2021 to 8", _jsx(_components.div, {}), " am on July 2, 2021:"]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Example 1: Query the top 20 countries with the highest number of calls and their respective call counts"
      })
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "POST /beta/insight/usage/aggregation?appid=axxxxxxxxxxxxxxxxxxxx HTTP/1.1"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Host: api.agora.io"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Accept: application/json"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh"
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
              children: '\t"startTs": 1625097600,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '\t"endTs": 1625184000,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '\t"metric": "userCount",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '\t"dimension": "country"'
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
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Example 2: Query the number of calls for SDK versions 3.6.1.1 and 4.1.1"
      })
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "POST /beta/insight/usage/aggregation?appid=axxxxxxxxxxxxxxxxxxxx HTTP/1.1"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Host: api.agora.io"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Accept: application/json"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh"
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
              children: '\t"startTs": 1625097600,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '\t"endTs": 1625184000,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '\t"metric": "userCount",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '\t"dimension": "sdkVersion",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '\t"dimensionValues":["3.6.1.1","4.1.1"]'
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
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Example 3: Query the top 20 regions in China with the highest number of calls and their respective call counts"
      })
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "POST /beta/insight/usage/aggregation?appid=axxxxxxxxxxxxxxxxxxxx HTTP/1.1"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Host: api.agora.io"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Accept: application/json"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh"
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
              children: '\t"startTs": 1625097600,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '\t"endTs": 1625184000,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '\t"metric": "userCount",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '    "dimension": "region",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '    "filters": [{"name": "country", "value": "China"}]'
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
    }), `
`, _jsx(_components.h4, {
      id: "response-parameters-2",
      children: "Response parameters"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Parameter"
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
            children: ["The ", _jsx(_components.a, {
              href: "#status-codes",
              children: "status code"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "message"
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
            children: "The success or error message."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSONArray"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["If the request does not include ", _jsx(_components.code, {
              children: "dimension"
            }), ", the response returns metric data aggregated by App ID. If the request includes ", _jsx(_components.code, {
              children: "dimension"
            }), ", the response returns an array containing the dimension values and metric data."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "response-example-8",
      children: "Response example"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Example 1: Query the top 20 countries with the highest number of calls and their respective call counts"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Contains 20 sets of data, each representing the top 20 countries with the highest total number of calls between 8", _jsx(_components.div, {}), " am on July 1, 2021 and 8", _jsx(_components.div, {}), " am on July 2, 2021."]
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
              children: '    "code"'
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
              children: '    "message"'
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
              children: '"null"'
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
              children: '    "data"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "country"'
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
              children: '"China"'
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
              children: '            "userCount"'
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
              children: "42"
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
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "country"'
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
              children: '"United States"'
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
              children: '            "userCount"'
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
              children: "37"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "        ......"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "   ]"
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
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Example 2: Query the number of calls for SDK versions 3.6.1.1 and 4.1.1"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Contains 2 sets of data, each representing the total number of calls between 8", _jsx(_components.div, {}), " am on July 1, 2021 and 8", _jsx(_components.div, {}), " am on July 2, 2021 for SDK versions 3.6.1.1 and 4.1.1 respectively."]
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
              children: '    "code"'
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
              children: '    "message"'
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
              children: '"null"'
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
              children: '    "data"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "sdkVersion"'
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
              children: '"3.6.1.1"'
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
              children: '            "userCount"'
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
              children: "42"
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
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "sdkVersion"'
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
              children: '"4.1.1"'
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
              children: '            "userCount"'
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
              children: "37"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "   ]"
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
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Example 3: Query the top 20 regions in China with the highest number of calls and their respective call counts"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Contains 20 sets of data, each representing the top 20 regions in China with the highest total number of calls between 8", _jsx(_components.div, {}), " am on July 1, 2021 and 8", _jsx(_components.div, {}), " am on July 2, 2021."]
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
              children: '    "code"'
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
              children: '    "message"'
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
              children: '"null"'
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
              children: '    "data"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "region"'
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
              children: '"Shanghai"'
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
              children: '            "userCount"'
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
              children: "42"
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
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "region"'
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
              children: '"Beijing"'
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
              children: '            "userCount"'
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
              children: "37"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "        ......"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "   ]"
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
    }), `
`, _jsx(_components.h3, {
      id: "query-aggregated-quality-metrics",
      children: "Query aggregated quality metrics"
    }), `
`, _jsx(_components.p, {
      children: "This method queries aggregated quality metrics for a specified time range and dimension, such as the audio or video freeze rate."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "POST"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Endpoint: ", _jsx(_components.code, {
          children: "/beta/insight/quality/aggregation"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "query-parameters-9",
      children: "Query parameters"
    }), `
`, _jsx(_components.p, {
      children: "The following query string parameters are required in the URL:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Parameter"
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
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "appid"
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
            children: ["The ", _jsx(_components.a, {
              href: "/en/realtime-media/agora-analytics/reference/glossary#app-id",
              children: "App ID"
            }), " of your project."]
          })]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "body-parameters-1",
      children: "Body parameters"
    }), `
`, _jsx(_components.p, {
      children: "The following query string parameters are required in the URL:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Parameter"
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
              children: "startTs"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The start point (Unix timestamp) of the time frame to query."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "endTs"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The end point (Unix timestamp) of the time frame to query."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "metric"
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
            children: ["Supported values: ", _jsx(_components.code, {
              children: "joinSuccessRate"
            }), " (The rate at which users attempting to join any channel succeed, equal to number of users who joined divided by number of attempts to join); ", _jsx(_components.code, {
              children: "joinSuccessIn5sRate"
            }), " (The rate at which users attempting to join any channel succeed within 5 seconds, equal to number of users who joined within 5 seconds divided by number of attempts to join); ", _jsx(_components.code, {
              children: "audioFreezeRate"
            }), " (The rate at which audio freezing occurs, equal to total audio freeze time divided by total audio minutes calculated by the number of streams. Only audio freezes longer than 200 milliseconds are counted); ", _jsx(_components.code, {
              children: "videoFreezeRate"
            }), " (The rate at which video freezing occurs, equal to total video freeze time divided by total video minutes calculated by the number of streams. Only video freezes longer than 600 milliseconds are counted); ", _jsx(_components.code, {
              children: "networkDelay"
            }), " (The rate at which network delay occurs, equal to total end-to-end network delay divided by total audio and video minutes calculated by the number of streams. Only end-to-end network delays longer than 400 milliseconds are counted)."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "dimension"
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
            children: ["(Optional) Aggregation dimension. Supported values: ", _jsx(_components.code, {
              children: "country"
            }), ", ", _jsx(_components.code, {
              children: "region"
            }), ", ", _jsx(_components.code, {
              children: "net"
            }), ", ", _jsx(_components.code, {
              children: "sdk"
            }), ", ", _jsx(_components.code, {
              children: "os"
            }), ", ", _jsx(_components.code, {
              children: "device"
            }), ", ", _jsx(_components.code, {
              children: "channelSize"
            }), ". If you set this parameter, the request returns the top 20 values in the dimension by default, or the top 50 values for ", _jsx(_components.code, {
              children: "device"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "dimensionValues"
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
            children: ["(Optional) Values for the specified dimension. This parameter is valid only when ", _jsx(_components.code, {
              children: "dimension"
            }), " is set. Enclose all values in double quotes and separate them with commas. If you set this parameter, the request returns aggregated metric data for the specified values. To discover top values first, omit ", _jsx(_components.code, {
              children: "dimensionValues"
            }), " in an initial request, then choose values from the results for later requests. When ", _jsx(_components.code, {
              children: "dimension"
            }), " is ", _jsx(_components.code, {
              children: "channelSize"
            }), ", ", _jsx(_components.code, {
              children: "dimensionValues"
            }), " is not supported and the results are grouped by the preset gradient scale."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "filters"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSONArray"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["(Optional) Region filters used to filter results by country. This parameter is valid only when ", _jsx(_components.code, {
              children: "dimension"
            }), " is ", _jsx(_components.code, {
              children: "region"
            }), ". It includes ", _jsx(_components.code, {
              children: "name"
            }), " (String. Only ", _jsx(_components.code, {
              children: "country"
            }), " is supported) and ", _jsx(_components.code, {
              children: "value"
            }), " (String. The country to filter by. Only one country value is supported)."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "http-request-example-9",
      children: "HTTP Request example"
    }), `
`, _jsxs(_components.p, {
      children: ["The following examples query the audio freeze rate across all channels starting from 8", _jsx(_components.div, {}), " am on July 1, 2021 to 8", _jsx(_components.div, {}), " am on July 2, 2021:"]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Example 1: Query the top 20 countries with the highest audio freeze rates and their respective audio freeze rate"
      })
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "POST /beta/insight/usage/aggregation?appid=axxxxxxxxxxxxxxxxxxxx HTTP/1.1"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Host: api.agora.io"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Accept: application/json"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh"
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
              children: '\t"startTs": 1625097600,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '\t"endTs": 1625184000,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '\t"metric": "audioFreezeRate",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '    "dimension": "country"'
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
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Example 2: Query the audio freeze rates for SDK versions 3.6.1.1 and 4.1.1"
      })
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "POST /beta/insight/usage/aggregation?appid=axxxxxxxxxxxxxxxxxxxx HTTP/1.1"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Host: api.agora.io"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Accept: application/json"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh"
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
              children: '\t"startTs": 1625097600,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '\t"endTs": 1625184000,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '\t"metric": "audioFreezeRate",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '    "dimension": "sdkVersion",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '    "dimensionValues":["3.6.1.1","4.1.1"]'
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
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Example 3: Query the top 20 regions in China with the highest audio freeze rates and their respective audio freeze rate"
      })
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "POST /beta/insight/usage/aggregation?appid=axxxxxxxxxxxxxxxxxxxx HTTP/1.1"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Host: api.agora.io"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Accept: application/json"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh"
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
              children: '\t"startTs": 1625097600,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '\t"endTs": 1625184000,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '\t"metric": "audioFreezeRate",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '    "dimension": "region",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '    "filters": [{"name": "country", "value": "China"}]'
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
    }), `
`, _jsx(_components.h4, {
      id: "response-parameters-3",
      children: "Response parameters"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Parameter"
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
            children: ["The ", _jsx(_components.a, {
              href: "#status-codes",
              children: "status code"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "message"
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
            children: "The success or error message."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSONArray"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["If the ", _jsx(_components.code, {
              children: "dimension"
            }), " field is not filled in the request, returns the metric data of the App ID dimension. If the ", _jsx(_components.code, {
              children: "dimension"
            }), " field is filled in the request, returns an array composed of dimensions, ", _jsx(_components.code, {
              children: "refUsage"
            }), ", and metric data. ", _jsx(_components.code, {
              children: "refUsage"
            }), " is auxiliary usage data. In each returned data group, each ", _jsx(_components.code, {
              children: "metric"
            }), " corresponds to auxiliary usage data used to assist in determining data validity. When ", _jsx(_components.code, {
              children: "metric"
            }), " is ", _jsx(_components.code, {
              children: "joinSuccessRate"
            }), " or ", _jsx(_components.code, {
              children: "joinSuccessIn5sRate"
            }), ", ", _jsx(_components.code, {
              children: "refUsage"
            }), " represents the number of attempts to join the channel. When ", _jsx(_components.code, {
              children: "metric"
            }), " is ", _jsx(_components.code, {
              children: "audioFreezeRate"
            }), " or ", _jsx(_components.code, {
              children: "videoFreezeRate"
            }), ", ", _jsx(_components.code, {
              children: "refUsage"
            }), " represents the duration of audio calls or video calls in minutes. When ", _jsx(_components.code, {
              children: "metric"
            }), " is ", _jsx(_components.code, {
              children: "networkDelay"
            }), ", ", _jsx(_components.code, {
              children: "refUsage"
            }), " represents the total duration of audio and video calls in minutes."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "response-example-9",
      children: "Response example"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Example 1: Query the top 20 countries with the highest audio freeze rates and their respective audio freeze rate"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Contains 20 sets of data, each representing the top 20 countries with the highest audio freeze rates between 8", _jsx(_components.div, {}), " am on July 1, 2021 and 8", _jsx(_components.div, {}), " am on July 2, 2021."]
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
              children: '    "code"'
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
              children: '    "message"'
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
              children: '"null"'
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
              children: '    "data"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "country"'
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
              children: '"China"'
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
              children: '            "refUsage"'
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
              children: "231234"
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
              children: '            "audioFreezeRate"'
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
              children: "0.0017"
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
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "country"'
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
              children: '"United States"'
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
              children: '            "refUsage"'
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
              children: "213212"
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
              children: '            "audioFreezeRate"'
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
              children: "0.0014"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "        ......"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "   ]"
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
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Example 2: Query the audio freeze rates for SDK versions 3.6.1.1 and 4.1.1"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Contains 2 sets of data, each representing the audio freeze rates between 8", _jsx(_components.div, {}), " am on July 1, 2021 and 8", _jsx(_components.div, {}), " am on July 2, 2021 for SDK versions 3.6.1.1 and 4.1.1 respectively."]
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
              children: '    "code"'
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
              children: '    "message"'
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
              children: '"null"'
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
              children: '    "data"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "sdkVersion"'
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
              children: '"3.6.1.1"'
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
              children: '            "refUsage"'
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
              children: "231234"
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
              children: '            "audioFreezeRate"'
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
              children: "0.0017"
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
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "sdkVersion"'
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
              children: '"4.1.1"'
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
              children: '            "refUsage"'
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
              children: "213212"
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
              children: '            "audioFreezeRate"'
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
              children: "0.0014"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "   ]"
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
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Example 3: Query the top 20 regions in China with the highest audio freeze rates and their respective audio freeze rate"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Contains 20 sets of data, each representing the top 20 regions in China with the highest audio freeze rates between 8", _jsx(_components.div, {}), " am on July 1, 2021 and 8", _jsx(_components.div, {}), " am on July 2, 2021."]
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
              children: '    "code"'
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
              children: '    "message"'
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
              children: '"null"'
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
              children: '    "data"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "region"'
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
              children: '"Shanghai"'
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
              children: '            "refUsage"'
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
              children: "231234"
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
              children: '            "audioFreezeRate"'
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
              children: "0.0017"
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
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "region"'
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
              children: '"Beijing"'
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
              children: '            "refUsage"'
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
              children: "213212"
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
              children: '            "audioFreezeRate"'
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
              children: "0.0014"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "        ......"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "   ]"
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
    }), `
`, _jsx(_components.h2, {
      id: "real-time-monitoring",
      children: "Real-time Monitoring"
    }), `
`, _jsx(_components.p, {
      children: "With the Real-time Monitoring RESTful APIs, you can query the scale and quality metrics within a specified time frame. The granularity of the returned data is seconds, which can reflect the actual situation in close to real time."
    }), `
`, _jsxs(_components.p, {
      children: ["The data is returned in regular 20-second time windows starting from 00:00", _jsx(_components.div, {}), ". For example, [00:00", _jsx(_components.div, {}), ", 00:00", _jsx(_components.div, {}), "] is a time window, while [00:00", _jsx(_components.div, {}), ", 00:00", _jsx(_components.div, {}), "] is not a time window."]
    }), `
`, _jsx(_components.h3, {
      id: "api-limits-2",
      children: "API limits"
    }), `
`, _jsxs(_components.p, {
      children: ["The limits of the Real-time Monitoring RESTful APIs depend on the ", _jsx(_components.a, {
        href: "/en/realtime-media/agora-analytics/reference/pricing",
        children: "pricing plan"
      }), " you subscribe to."]
    }), `
`, _jsx(_components.p, {
      children: "The Starter, Standard, Premium, and Enterprise pricing plans have the following differences in terms of API limits:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.th, {
            children: "Starter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Standard"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Premium"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Enterprise"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Request frequency"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No more than 3/minute and 480/day"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No more than 10/minute and 1440/day"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Available data"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Within the past 40 minutes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Within the past 60 minutes"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Query time frame"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No longer than 40 minutes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No longer than 60 minutes"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Data delay"
          }), _jsx(_components.td, {
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "40 seconds"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20 seconds"
          })]
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Request frequency is calculated using the server's UTC time."
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "query-real-time-scale-metrics",
      children: "Query real-time scale metrics"
    }), `
`, _jsx(_components.p, {
      children: "This method queries the real-time number of users and channels."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "GET"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Endpoint: ", _jsx(_components.code, {
          children: "/beta/realtime/usage/by_time_20sec"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "query-parameters-10",
      children: "Query parameters"
    }), `
`, _jsx(_components.p, {
      children: "The following query string parameters are required in the URL:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "Parameter"
            })
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "Description"
            })
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "appid"
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
            children: ["The ", _jsx(_components.a, {
              href: "/en/realtime-media/agora-analytics/reference/glossary#app-id",
              children: "App ID"
            }), " of your project."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "startTs"
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
            children: ["The start point (Unix timestamp) of the time frame to query. The time window that  ", _jsx(_components.code, {
              children: "startTs"
            }), " falls in is included in the response."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "endTs"
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
            children: ["The end point (Unix timestamp) of the time frame to query.  The time window that  ", _jsx(_components.code, {
              children: "endTs"
            }), " falls in is ", _jsx(_components.em, {
              children: "not"
            }), " included in the response."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "productType"
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
            children: ["Supported values: ", _jsx(_components.code, {
              children: "Native"
            }), " (The Agora RTC SDK for Android, iOS, macOS, and Windows); ", _jsx(_components.code, {
              children: "WebRTC"
            }), " (The Agora RTC SDK for Web)."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "metric"
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
            children: ["Supported values: ", _jsx(_components.code, {
              children: "userCount"
            }), " (The total number of users across all in-use channels. A user joining multiple channels is counted multiple times); ", _jsx(_components.code, {
              children: "channelCount"
            }), " (The total number of channels. A channel is counted once for each period between the time when the first user joins it and the time when the last user leaves it)."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "dimension"
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
            children: ["(Optional) Aggregation dimension. Supported values: ", _jsx(_components.code, {
              children: "country"
            }), ", ", _jsx(_components.code, {
              children: "region"
            }), ", ", _jsx(_components.code, {
              children: "net"
            }), ", ", _jsx(_components.code, {
              children: "sdk"
            }), ", ", _jsx(_components.code, {
              children: "os"
            }), ", ", _jsx(_components.code, {
              children: "device"
            }), ". To obtain the top values for the current ", _jsx(_components.code, {
              children: "dimension"
            }), ", query ", _jsx(_components.a, {
              href: "#query-top-20-real-time-scale-metrics",
              children: "top 20 real-time scale metrics"
            }), ", then choose values from the results and pass them in ", _jsx(_components.code, {
              children: "dimensionValues"
            }), " in later requests."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "dimensionValues"
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
            children: ["(Optional) The values for the specified dimension. This parameter is only valid when the ", _jsx(_components.code, {
              children: "dimension"
            }), " parameter is set. All values must be enclosed in double quotes and separated by commas. If this parameter is set, the request will return the aggregated metric data corresponding to the values specified in ", _jsx(_components.code, {
              children: "dimensionValues"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "cname"
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
            children: "(Optional)The channel name. If you do not specify this parameter, the metric data of your entire project (rather than a specific channel) is returned."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "http-request-example-10",
      children: "HTTP request example"
    }), `
`, _jsxs(_components.p, {
      children: ["The following example queries the real-time number of users for SDK versions 3.6.1.1 and 4.1.1, with ", _jsx(_components.code, {
        children: "startTs"
      }), " set to 08:10", _jsx(_components.div, {}), " on September 17, 2021 and ", _jsx(_components.code, {
        children: "endTs"
      }), " set to 08:11", _jsx(_components.div, {}), " on the same day. The HTTP request is as follows:"]
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: 'GET /beta/realtime/usage/by_time_20sec?startTs=1631837410&endTs=1631837470&appid=your_app_id&productType=Native&metric=userCount&dimension=sdk&dimensionValues="3.6.1.1","4.1.1" HTTP/1.1'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Host: api.agora.io"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Accept: application/json"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "response-parameters-4",
      children: "Response parameters"
    }), `
`, _jsx(_components.p, {
      children: "The response contains the following fields:"
    }), `
`, _jsxs(_components.table, {
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
            children: ["The ", _jsx(_components.a, {
              href: "#status-codes",
              children: "status code"
            }), ". ", _jsx(_components.code, {
              children: "200"
            }), " indicates that the request is successful."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "message"
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
            children: "The error message."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSONArray"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["An array consisting of the requested ", _jsx(_components.code, {
              children: "metric"
            }), " field and ", _jsx(_components.code, {
              children: "ts"
            }), ", which is the Unix timestamp of the start point of the corresponding time window."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "response-example-10",
      children: "Response example"
    }), `
`, _jsx(_components.p, {
      children: "For the previous HTTP request example, the response includes the total number of users, corresponding SDK version, and Unix timestamp of the following time windows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["[00:10", _jsx(_components.div, {}), ", 00:10", _jsx(_components.div, {}), "] on September 17, 2021"]
      }), `
`, _jsxs(_components.li, {
        children: ["[00:10", _jsx(_components.div, {}), ", 00:10", _jsx(_components.div, {}), "] on September 17, 2021"]
      }), `
`, _jsxs(_components.li, {
        children: ["[00:10", _jsx(_components.div, {}), ", 00:11", _jsx(_components.div, {}), "] on September 17, 2021"]
      }), `
`]
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
              children: '    "code"'
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
              children: '    "message"'
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
              children: "null"
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
              children: '    "data"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "userCount"'
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
              children: "236"
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
              children: '            "sdk"'
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
              children: '"3.6.1.1"'
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
              children: '            "ts"'
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
              children: "1631837400"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "userCount"'
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
              children: "82"
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
              children: '            "sdk"'
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
              children: '"4.1.1"'
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
              children: '            "ts"'
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
              children: "1631837400"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "userCount"'
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
              children: "235"
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
              children: '            "sdk"'
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
              children: '"3.6.1.1"'
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
              children: '            "ts"'
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
              children: "1631837420"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "userCount"'
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
              children: "85"
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
              children: '            "sdk"'
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
              children: '"4.1.1"'
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
              children: '            "ts"'
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
              children: "1631837420"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "userCount"'
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
              children: "252"
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
              children: '            "sdk"'
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
              children: '"3.6.1.1"'
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
              children: '            "ts"'
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
              children: "1631837440"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "userCount"'
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
              children: "90"
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
              children: '            "sdk"'
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
              children: '"4.1.1"'
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
              children: '            "ts"'
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
              children: "1631837440"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    ]"
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
    }), `
`, _jsx(_components.h3, {
      id: "query-real-time-quality-metrics",
      children: "Query real-time quality metrics"
    }), `
`, _jsx(_components.p, {
      children: "This method queries the real-time values of quality metrics such as the audio or video freeze rate."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "GET"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Endpoint: ", _jsx(_components.code, {
          children: "/beta/realtime/quality/by_time_20sec"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "query-parameters-11",
      children: "Query parameters"
    }), `
`, _jsx(_components.p, {
      children: "The following query string parameters are required in the URL:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Parameter"
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
              children: "appid"
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
            children: ["The ", _jsx(_components.a, {
              href: "/en/realtime-media/agora-analytics/reference/glossary#app-id",
              children: "App ID"
            }), " of your project."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "startTs"
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
            children: ["The start point (Unix timestamp) of the time frame to query. The time window that  ", _jsx(_components.code, {
              children: "startTs"
            }), " falls in is included in the response."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "endTs"
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
            children: ["The end point (Unix timestamp) of the time frame to query.  The time window that  ", _jsx(_components.code, {
              children: "endTs"
            }), " falls in is ", _jsx(_components.em, {
              children: "not"
            }), " included in the response."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "productType"
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
            children: ["Supported values: ", _jsx(_components.code, {
              children: "Native"
            }), " (The Agora RTC SDK for Android, iOS, macOS, and Windows); ", _jsx(_components.code, {
              children: "WebRTC"
            }), " (The Agora RTC SDK for Web)."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "metric"
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
            children: ["Supported values: ", _jsx(_components.code, {
              children: "joinSuccessRate"
            }), " (The rate at which users attempting to join any channel succeed, equal to number of users who joined divided by number of attempts to join); ", _jsx(_components.code, {
              children: "joinSuccessIn5sRate"
            }), " (The rate at which users attempting to join any channel succeed within 5 seconds, equal to number of users who joined within 5 seconds divided by number of attempts to join); ", _jsx(_components.code, {
              children: "audioFreezeRate"
            }), " (The rate at which audio freezing occurs, equal to total audio freeze time divided by total audio minutes calculated by the number of streams. Only audio freezes longer than 200 milliseconds are counted); ", _jsx(_components.code, {
              children: "videoFreezeRate"
            }), " (The rate at which video freezing occurs, equal to total video freeze time divided by total video minutes calculated by the number of streams. Only video freezes longer than 600 milliseconds are counted); ", _jsx(_components.code, {
              children: "networkDelay"
            }), " (The rate at which network delay occurs, equal to total end-to-end network delay divided by total audio and video minutes calculated by the number of streams. Only end-to-end network delays longer than 400 milliseconds are counted)."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "dimension"
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
            children: ["(Optional) Aggregation dimension. Supported values: ", _jsx(_components.code, {
              children: "country"
            }), ", ", _jsx(_components.code, {
              children: "region"
            }), ", ", _jsx(_components.code, {
              children: "net"
            }), ", ", _jsx(_components.code, {
              children: "sdk"
            }), ", ", _jsx(_components.code, {
              children: "os"
            }), ", ", _jsx(_components.code, {
              children: "device"
            }), ". To obtain the top values for the current ", _jsx(_components.code, {
              children: "dimension"
            }), ", query ", _jsx(_components.a, {
              href: "#query-top-20-real-time-quality-metrics",
              children: "top 20 real-time quality metrics"
            }), ", then choose values from the results and pass them in ", _jsx(_components.code, {
              children: "dimensionValues"
            }), " in later requests."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "dimensionValues"
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
            children: ["(Optional) The values for the specified dimension. This parameter is only valid when the ", _jsx(_components.code, {
              children: "dimension"
            }), " parameter is set. All values must be enclosed in double quotes and separated by commas. If this parameter is set, the request will return the aggregated metric data corresponding to the values specified in ", _jsx(_components.code, {
              children: "dimensionValues"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "cname"
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
            children: "(Optional) The channel name. If you do not specify this parameter, the metric data of your entire project (rather than a specific channel) is returned."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uids"
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
            children: ["(Optional) The list of user IDs (", _jsx(_components.code, {
              children: "uid"
            }), "). You need to separate multiple user IDs with commas (for example, ", _jsx(_components.code, {
              children: "uids=10001,10002,10003"
            }), "). You can specify a maximum of 10 user IDs. The ", _jsx(_components.code, {
              children: "uids"
            }), " parameter takes effect only when you specify the ", _jsx(_components.code, {
              children: "cname"
            }), " parameter."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "http-request-example-11",
      children: "HTTP request example"
    }), `
`, _jsxs(_components.p, {
      children: ["The following example queries the network delay rate from 00:10", _jsx(_components.div, {}), " to 00:11", _jsx(_components.div, {}), " on September 17, 2021:"]
    }), `
`, _jsx(_components.p, {
      children: _jsxs(_components.strong, {
        children: ["Example 1: ", _jsx(_components.code, {
          children: "uids"
        }), " is not specified"]
      })
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "GET /beta/realtime/usage/by_time_20sec?startTs=1631837410&endTs=1631837470&appid=axxxxxxxxxxxxxxxxxxxx&productType=Native&metric=networkDelay HTTP/1.1"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Host: api.agora.io"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Accept: application/json"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsxs(_components.strong, {
        children: ["Example 2: ", _jsx(_components.code, {
          children: "uids"
        }), " is specified as ", _jsx(_components.code, {
          children: "2303692334"
        }), " and ", _jsx(_components.code, {
          children: "2963430861"
        })]
      })
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "GET /beta/realtime/usage/by_time_20sec?startTs=1631837410&endTs=1631837470&appid=axxxxxxxxxxxxxxxxxxxx&productType=Native&metric=networkDelay&cname=demoChannel&uids=2303692334,2963430861 HTTP/1.1"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Host: api.agora.io"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Accept: application/json"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsxs(_components.strong, {
        children: ["Example 3: ", _jsx(_components.code, {
          children: "dimension"
        }), " is specified as ", _jsx(_components.code, {
          children: "sdkVersion"
        }), ", and ", _jsx(_components.code, {
          children: "dimensionValues"
        }), " as ", _jsx(_components.code, {
          children: "3.6.1.1"
        }), " and ", _jsx(_components.code, {
          children: "4.1.1"
        })]
      })
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: 'GET /beta/realtime/quality/by_time_20sec?startTs=1631837410&endTs=1631837470&appid=your_app_id&productType=Native&metric=networkDelay&dimension=sdk&dimensionValues="3.6.1.1","4.1.1" HTTP/1.1'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Host: api.agora.io"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Accept: application/json"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "response-parameters-5",
      children: "Response parameters"
    }), `
`, _jsx(_components.p, {
      children: "The response contains the following fields:"
    }), `
`, _jsxs(_components.table, {
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
            children: ["The ", _jsx(_components.a, {
              href: "#status-codes",
              children: "status code"
            }), ". ", _jsx(_components.code, {
              children: "200"
            }), " indicates that the request is successful."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "message"
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
            children: "The error message."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSONArray"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- The request does not include the ", _jsx(_components.code, {
              children: "uids"
            }), " field: An array of metric data and Unix timestamps (in seconds).", _jsx(_components.code, {
              children: "; "
            }), "The request includes the ", _jsx(_components.code, {
              children: "uids"
            }), " field: An array of ", _jsx(_components.code, {
              children: "uid"
            }), ", metric data, and Unix timestamps (in seconds).", _jsx(_components.code, {
              children: "; "
            }), "The request includes the ", _jsx(_components.code, {
              children: "dimension"
            }), " and ", _jsx(_components.code, {
              children: "dimensionValues"
            }), " fields: Arrays of metric data, dimensions, and Unix timestamps (in seconds)."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "response-example-11",
      children: "Response example"
    }), `
`, _jsx(_components.p, {
      children: "For the previous HTTP request example, the response includes data of the following time windows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["[00:10", _jsx(_components.div, {}), ", 00:10", _jsx(_components.div, {}), "] on September 17, 2021"]
      }), `
`, _jsxs(_components.li, {
        children: ["[00:10", _jsx(_components.div, {}), ", 00:10", _jsx(_components.div, {}), "] on September 17, 2021"]
      }), `
`, _jsxs(_components.li, {
        children: ["[00:10", _jsx(_components.div, {}), ", 00:11", _jsx(_components.div, {}), "] on September 17, 2021"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsxs(_components.strong, {
        children: ["Example 1: ", _jsx(_components.code, {
          children: "uids"
        }), " is not specified"]
      })
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
              children: '    "code"'
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
              children: '    "message"'
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
              children: '"success"'
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
              children: '    "data"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "networkDelay"'
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
              children: "0.0120"
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
              children: '            "ts"'
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
              children: "1631837400"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "networkDelay"'
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
              children: "0.0057"
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
              children: '            "ts"'
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
              children: "1631837420"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "networkDelay"'
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
              children: "0.0039"
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
              children: '            "ts"'
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
              children: "1631837440"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    ]"
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
    }), `
`, _jsx(_components.p, {
      children: _jsxs(_components.strong, {
        children: ["Example 2: ", _jsx(_components.code, {
          children: "uids"
        }), " is specified as ", _jsx(_components.code, {
          children: "2303692334"
        }), " and ", _jsx(_components.code, {
          children: "2963430861"
        })]
      })
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
              children: '    "code"'
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
              children: '    "message"'
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
              children: '"success"'
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
              children: '    "data"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "uid"'
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
              children: "2303692334"
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
              children: '            "values"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "ts"'
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
              children: "1631837400"
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
              children: '                    "networkDelay"'
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
              children: "0.389"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "ts"'
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
              children: "1631837420"
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
              children: '                    "networkDelay"'
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
              children: "0.389"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "ts"'
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
              children: "1631837440"
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
              children: '                    "networkDelay"'
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
              children: "0.389"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            ]"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "uid"'
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
              children: "2963430861"
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
              children: '            "values"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "ts"'
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
              children: "1631837400"
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
              children: '                    "networkDelay"'
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
              children: "0.389"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "ts"'
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
              children: "1631837420"
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
              children: '                    "networkDelay"'
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
              children: "0.389"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "ts"'
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
              children: "1631837440"
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
              children: '                    "networkDelay"'
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
              children: "0.389"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            ]"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    ]"
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
    }), `
`, _jsx(_components.p, {
      children: _jsxs(_components.strong, {
        children: ["Example 3: ", _jsx(_components.code, {
          children: "dimension"
        }), " is specified as ", _jsx(_components.code, {
          children: "sdkVersion"
        }), ", and ", _jsx(_components.code, {
          children: "dimensionValues"
        }), " as ", _jsx(_components.code, {
          children: "3.6.1.1"
        }), " and ", _jsx(_components.code, {
          children: "4.1.1"
        })]
      })
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
              children: '    "code"'
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
              children: '    "message"'
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
              children: "null"
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
              children: '    "data"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "networkDelay"'
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
              children: "0.389"
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
              children: '            "sdk"'
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
              children: '"3.6.1.1"'
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
              children: '            "ts"'
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
              children: "1631837400"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "networkDelay"'
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
              children: "0.411"
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
              children: '            "sdk"'
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
              children: '"4.1.1"'
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
              children: '            "ts"'
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
              children: "1631837400"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "networkDelay"'
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
              children: "0.343"
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
              children: '            "sdk"'
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
              children: '"3.6.1.1"'
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
              children: '            "ts"'
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
              children: "1631837420"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "networkDelay"'
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
              children: "0.363"
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
              children: '            "sdk"'
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
              children: '"4.1.1"'
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
              children: '            "ts"'
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
              children: "1631837420"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "networkDelay"'
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
              children: "0.511"
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
              children: '            "sdk"'
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
              children: '"3.6.1.1"'
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
              children: '            "ts"'
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
              children: "1631837440"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "networkDelay"'
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
              children: "0.436"
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
              children: '            "sdk"'
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
              children: '"4.1.1"'
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
              children: '            "ts"'
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
              children: "1631837440"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    ]"
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
    }), `
`, _jsx(_components.h3, {
      id: "query-top-20-real-time-scale-metrics",
      children: "Query top 20 real-time scale metrics"
    }), `
`, _jsxs(_components.p, {
      children: ["This method queries the top 20 grouped data of real-time scale for a specified dimension and provides content input for the ", _jsx(_components.code, {
        children: "dimensionValues"
      }), " parameter in ", _jsx(_components.a, {
        href: "#query-real-time-scale-metrics",
        children: "Query real-time scale"
      }), "."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "GET"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Endpoint: ", _jsx(_components.code, {
          children: "/beta/realtime/usage/dimension/top20"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "query-parameters-12",
      children: "Query parameters"
    }), `
`, _jsx(_components.p, {
      children: "The following query string parameters are required in the URL:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "Parameter"
            })
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "Description"
            })
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "appid"
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
            children: ["The ", _jsx(_components.a, {
              href: "/en/realtime-media/agora-analytics/reference/glossary#app-id",
              children: "App ID"
            }), " of your project."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "ts"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The start point (Unix timestamp) of the time frame to query. The actual query range is [ts, ts + 20s]."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "productType"
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
            children: ["Supported values: ", _jsx(_components.code, {
              children: "Native"
            }), " (The Agora RTC SDK for Android, iOS, macOS, and Windows); ", _jsx(_components.code, {
              children: "WebRTC"
            }), " (The Agora RTC SDK for Web)."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "metric"
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
            children: ["The metric you want to query. You can only set it ", _jsx(_components.code, {
              children: "userCount"
            }), ", namely the number of users. One user ID in one channel is counted as one user, while one user ID in multiple channels is counted as multiple users."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "dimension"
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
            children: ["Aggregation dimension. Supported values: ", _jsx(_components.code, {
              children: "country"
            }), ", ", _jsx(_components.code, {
              children: "region"
            }), ", ", _jsx(_components.code, {
              children: "net"
            }), ", ", _jsx(_components.code, {
              children: "sdk"
            }), ", ", _jsx(_components.code, {
              children: "os"
            }), ", ", _jsx(_components.code, {
              children: "device"
            }), ". The request returns the top 20 values in the dimension by default, or the top 50 values for ", _jsx(_components.code, {
              children: "device"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-example",
      children: "Request example"
    }), `
`, _jsxs(_components.p, {
      children: ["The following example queries the top 20 number of users for each SDK version starting from 08:10", _jsx(_components.div, {}), " on September 17, 2021 is as follows:"]
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "GET /beta/realtime/usage/dimension/top20?ts=1631837410&appid=your_app_id&productType=Native&metric=userCount&dimension=sdk HTTP/1.1"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Host: api.agora.io"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Accept: application/json"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "response-parameters-6",
      children: "Response parameters"
    }), `
`, _jsx(_components.p, {
      children: "The response contains the following fields:"
    }), `
`, _jsxs(_components.table, {
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
            children: ["The ", _jsx(_components.a, {
              href: "#status-codes",
              children: "status code"
            }), ". ", _jsx(_components.code, {
              children: "200"
            }), " indicates that the request is successful."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "message"
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
            children: "The error message."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSONArray"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "An array consists of dimensions, metric, and the starting and ending Unix timestamps (in seconds) of the time window."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "response-example-12",
      children: "Response example"
    }), `
`, _jsxs(_components.p, {
      children: ["The response contains 20 sets of data, each representing the top 20 call volume data for each SDK version during the time window from 08:10", _jsx(_components.div, {}), " to 08:10", _jsx(_components.div, {}), " on September 17, 2021."]
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
              children: '    "code"'
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
              children: '    "message"'
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
              children: "null"
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
              children: '    "data"'
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
              children: '        "list"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                "sdk"'
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
              children: '"3.6.1.1"'
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
              children: '                "userCount"'
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
              children: "236"
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
              children: '                "windowStartTs"'
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
              children: "1631837410"
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
              children: '                "windowEndTs"'
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
              children: "1631837430"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                "sdk"'
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
              children: '"4.1.1"'
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
              children: '                "userCount"'
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
              children: "82"
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
              children: '                "windowStartTs"'
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
              children: "1631837410"
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
              children: '                "windowEndTs"'
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
              children: "1631837430"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                "sdk"'
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
              children: '"2.9.1"'
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
              children: '                "userCount"'
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
              children: "68"
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
              children: '                "windowStartTs"'
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
              children: "1631837410"
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
              children: '                "windowEndTs"'
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
              children: "1631837430"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "            ..."
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        ]"
            })
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
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "query-top-20-real-time-quality-metrics",
      children: "Query top 20 real-time quality metrics"
    }), `
`, _jsxs(_components.p, {
      children: ["This method queries the top 20 grouped data of real-time call quality for a specified dimension and provides content input for the ", _jsx(_components.code, {
        children: "dimensionValues"
      }), " parameter in ", _jsx(_components.a, {
        href: "#query-real-time-quality-metrics",
        children: "Query real-time quality"
      }), "."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "GET"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Endpoint: ", _jsx(_components.code, {
          children: "/beta/realtime/quality/dimension/top20"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "query-parameters-13",
      children: "Query parameters"
    }), `
`, _jsx(_components.p, {
      children: "The following query string parameters are required in the URL:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "Parameter"
            })
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "Description"
            })
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "appid"
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
            children: ["The ", _jsx(_components.a, {
              href: "/en/realtime-media/agora-analytics/reference/glossary#app-id",
              children: "App ID"
            }), " of your project."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "ts"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The start point (Unix timestamp) of the time frame to query. The actual query range is [ts, ts + 20s]."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "productType"
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
            children: ["Supported values: ", _jsx(_components.code, {
              children: "Native"
            }), " (The Agora RTC SDK for Android, iOS, macOS, and Windows); ", _jsx(_components.code, {
              children: "WebRTC"
            }), " (The Agora RTC SDK for Web)."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "metric"
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
            children: ["Supported values: ", _jsx(_components.code, {
              children: "joinSuccessRate"
            }), " (The rate at which users attempting to join any channel succeed, equal to number of users who joined divided by number of attempts to join); ", _jsx(_components.code, {
              children: "joinSuccessIn5sRate"
            }), " (The rate at which users attempting to join any channel succeed within 5 seconds, equal to number of users who joined within 5 seconds divided by number of attempts to join); ", _jsx(_components.code, {
              children: "audioFreezeRate"
            }), " (The rate at which audio freezing occurs, equal to total audio freeze time divided by total audio minutes calculated by the number of streams. Only audio freezes longer than 200 milliseconds are counted); ", _jsx(_components.code, {
              children: "videoFreezeRate"
            }), " (The rate at which video freezing occurs, equal to total video freeze time divided by total video minutes calculated by the number of streams. Only video freezes longer than 600 milliseconds are counted); ", _jsx(_components.code, {
              children: "networkDelay"
            }), " (The rate at which network delay occurs, equal to total end-to-end network delay divided by total audio and video minutes calculated by the number of streams. Only end-to-end network delays longer than 400 milliseconds are counted)."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "dimension"
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
            children: ["Aggregation dimension. Supported values: ", _jsx(_components.code, {
              children: "country"
            }), ", ", _jsx(_components.code, {
              children: "region"
            }), ", ", _jsx(_components.code, {
              children: "net"
            }), ", ", _jsx(_components.code, {
              children: "sdk"
            }), ", ", _jsx(_components.code, {
              children: "os"
            }), ", ", _jsx(_components.code, {
              children: "device"
            }), ". The request returns the top 20 values in the dimension by default, or the top 50 values for ", _jsx(_components.code, {
              children: "device"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "extraMetrics"
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
            children: ["Additional indicator, used to help determine the validity of data. Only supports setting to ", _jsx(_components.code, {
              children: "userCount"
            }), ", that is, the number of users under the current dimension."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-example-1",
      children: "Request example"
    }), `
`, _jsxs(_components.p, {
      children: ["The following example passes in ", _jsx(_components.code, {
        children: "extraMetrics"
      }), " and queries the top 50 audio freeze rate values for each device starting from 20:00", _jsx(_components.div, {}), " on December 21, 2022:"]
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "GET /beta/realtime/quality/dimension/top20?ts=1671624000&appid=your_app_id&productType=Native&metric=audioFreezeRate&dimension=device&extraMetrics=userCount HTTP/1.1"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Host: api.agora.io"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Accept: application/json"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "Authorization: Basic ZGJhZDMyNmFkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxWQzYTczNzg2ODdiMmNiYjRh"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "response-parameters-7",
      children: "Response parameters"
    }), `
`, _jsx(_components.p, {
      children: "The response contains the following fields:"
    }), `
`, _jsxs(_components.table, {
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
            children: ["The ", _jsx(_components.a, {
              href: "#status-codes",
              children: "status code"
            }), ". ", _jsx(_components.code, {
              children: "200"
            }), " indicates that the request is successful."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "message"
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
            children: "The error message."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSONArray"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "An array consists of dimensions, metric, and the starting and ending Unix timestamps (in seconds) of the time window."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "response-example-13",
      children: "Response example"
    }), `
`, _jsxs(_components.p, {
      children: ["The response contains 50 sets of data, each representing the top 50 audio freeze rate values for each device model during the time window from 20:00", _jsx(_components.div, {}), " to 20:00", _jsx(_components.div, {}), " on December 21, 2022."]
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
              children: '    "code"'
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
              children: '    "message"'
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
              children: "null"
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
              children: '    "data"'
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
              children: '        "list"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                "audioFreezeRate"'
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
              children: "0.050833333333333335"
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
              children: '                "windowStartTs"'
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
              children: "1671624000"
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
              children: '                "userCount"'
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
              children: "2"
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
              children: '                "device"'
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
              children: '"ldn-al00"'
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
              children: '                "windowEndTs"'
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
              children: "1671624020"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                "audioFreezeRate"'
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
              children: "0"
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
              children: '                "windowStartTs"'
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
              children: "1671624000"
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
              children: '                "userCount"'
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
              children: "2"
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
              children: '                "device"'
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
              children: '"80HH"'
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
              children: '                "windowEndTs"'
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
              children: "1671624020"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                "audioFreezeRate"'
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
              children: "0"
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
              children: '                "windowStartTs"'
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
              children: "1671624000"
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
              children: '                "userCount"'
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
              children: "1"
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
              children: '                "device"'
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
              children: '"20KNA004CD"'
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
              children: '                "windowEndTs"'
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
              children: "1671624020"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        ]"
            })
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
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "references",
      children: "References"
    }), `
`, _jsx(_components.h3, {
      id: "status-codes",
      children: "Status codes"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Code"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "200"
            })
          }), _jsx(_components.td, {
            children: "The request is successful."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "300"
            })
          }), _jsxs(_components.td, {
            children: ["The API limits are exceeded (", _jsx(_components.a, {
              href: "#call-inspector",
              children: "Call Search"
            }), " only)"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "400"
            })
          }), _jsx(_components.td, {
            children: "Invalid parameters."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "401"
            })
          }), _jsx(_components.td, {
            children: "Unauthorized."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "403"
            })
          }), _jsx(_components.td, {
            children: "Wrong authorization information. The request is forbidden."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "404"
            })
          }), _jsx(_components.td, {
            children: "Wrong API invoked."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "500"
            })
          }), _jsx(_components.td, {
            children: "Unknown error."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["When ", _jsx(_components.code, {
        children: "300"
      }), " is returned, you might get the following error messages:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Error message"
          }), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Examples of error fix"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "qps limit error"
            })
          }), _jsx(_components.td, {
            children: "The limit on requests per second is exceeded."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "If qps limit = 10, ensure that current qps < 10"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "qpd limit error"
            })
          }), _jsx(_components.td, {
            children: "The limit on requests per day is exceeded."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "If qpd limit = 10000, ensure that current qpd < 10000"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "query latency limit error"
            })
          }), _jsx(_components.td, {
            children: "The limit on data delay is exceeded."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["If query latency limit = 10s and current time = 1623316864, ensure that  ", _jsx(_components.code, {
              children: "end_ts"
            }), " < 1623316864 - 10"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "query time range limit error"
            })
          }), _jsx(_components.td, {
            children: "The limit on available calls is exceeded."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["If query time range limit = 3d and current time = 1623316864, ensure that  ", _jsx(_components.code, {
              children: "start_ts"
            }), " > 1623316864 - 3 * 86400(s)"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "query time length limit error"
            })
          }), _jsx(_components.td, {
            children: "The limit on response content is exceeded."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["If query time length limit = 3h, ensure that ", _jsx(_components.code, {
              children: "end_ts"
            }), " - ", _jsx(_components.code, {
              children: "start_ts"
            }), " < 3 * 3600(s)"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "you have no auth to access this service, please buy or upgrade your service package"
            })
          }), _jsx(_components.td, {
            children: "You have no access to this service."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "N/A"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "metrics-id",
      children: "Metrics ID"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "mid"
            })
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Unit"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Example"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20001"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "App CPU usage."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "%"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "27%"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20002"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "System CPU usage."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "%"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15%"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20003"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The upstream bitrate of the audio."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Kbps"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "126 Kbps"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20004"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The downstream bitrate of the audio."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Kbps"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "108 Kbps"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20005"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The freeze time in rendering the audio."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "ms"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "106.67 ms"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20006"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The upstream bitrate of the low-quality video stream."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Kbps"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "472 Kbps"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20007"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The capturing frame rate of the video."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "fps"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "16 fps"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20008"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The upstream frame rate of the high-quality video stream."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "fps"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "12 fps"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20009"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The downstream bitrate of the high-quality video."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Kbps"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "309 Kbps"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20010"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The downstream frame rate of the high-quality  video."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "fps"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "6 fps"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20011"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The freeze time in rendering the video."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "ms"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2000.50 ms"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20015"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The upstream packet loss rate of the audio."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "%"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1%"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20016"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The end-to-end packet loss rate of the audio."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "%"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "3%"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20017"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The upstream packet loss rate of the video."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "%"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "5%"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20018"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The end-to-end packet loss rate of the video."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "%"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "7%"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20019"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The width of the received video."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20020"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The height of the received video."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "640"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20021"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The task scheduling delay."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "ms"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2 ms"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20022"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The round-trip time delay from the client to the local router."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "ms"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "3 ms"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20023"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The upstream frame rate of the low-quality video stream."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "fps"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "108 fps"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20024"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The upstream bitrate of the video stream."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Kbps"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "126 Kbps"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20025"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The sampling volume of the sent audio."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "dB"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "105 dB"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20026"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The playback volume of the received audio."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "dB"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "98 dB"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20027"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The width of the sent video."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20028"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The height of the sent video."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "640"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20030"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The downstream bitrate of the low-quality video stream."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Kbps"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100 Kbps"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20031"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The downstream frame rate of the low-quality video stream."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "fps"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "6 fps"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20032"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The width of the received low-quality video."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20033"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The height of the received low-quality video."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "640"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20034"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The width of the sent low-quality video."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20035"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The height of the sent low-quality video."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "-"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "640"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20036"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The WebRTC downstream packet loss rate of the video."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20037"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The WebRTC upstream packet loss rate of the audio."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20038"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The WebRTC upstream packet loss rate of the video."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20039"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "App memory usage."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "%"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "50%"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20040"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "System memory usage."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "%"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "70%"
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
