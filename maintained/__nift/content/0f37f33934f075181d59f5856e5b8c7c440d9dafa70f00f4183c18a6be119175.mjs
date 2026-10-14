import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Response status codes",
  description: "Error codes and status codes returned by the Cloud Recording RESTful API."
};
export let _markdown = `

When you call the Cloud Recording RESTful API, each response includes an HTTP status code. A \`200\` status code means the request was successful. If the request fails, use the status code together with the following response body fields to troubleshoot:

* \`message\`

  \`\`\`json
  // 401 Unauthorized
  {
    "message": "Invalid authentication credentials"
  }
  \`\`\`

* \`code\` and \`reason\`

  \`\`\`json
  // 400 Bad Request
  {
    "code": 2,
    "reason": "Acquire: invalid resourceExpiredHour value!"
  }
  \`\`\`

## General status codes [#general-status-codes]

| Status code             | \`message\`                              | Description                      | Resolution                                                                                                                                                                 |
| ----------------------- | -------------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`400 Bad Request\`       | \`"appid is invalid"\`                   | Invalid App ID.                  | Enable the cloud recording service for this App ID before calling the API.                                                                                                 |
| \`401 Unauthorized\`      | \`"Unauthorized"\`                       | Authorization header is missing. | Ensure you are using [HTTP Basic Auth](/en/api-reference/api-ref/cloud-recording/authentication) and that the \`Authorization\` field is included in the request header.     |
| \`401 Unauthorized\`      | \`"Invalid authentication credentials"\` | Invalid Authorization.           | Check that your Customer ID and Customer Secret are correct, that the Authorization is generated correctly, and that the Customer ID and Customer Secret match the App ID. |
| \`404 Not Found\`         | \`"no Route matched with those values"\` | Incorrect request route.         | Check that the HTTP method and URL are correct.                                                                                                                            |
| \`429 Too Many Requests\` | \`"API rate limit exceeded"\`            | Request rate limit exceeded.     | Reduce the frequency of API calls. To request a higher quota, contact [support@agora.io](mailto\\:support@agora.io).                                                        |

## Endpoint-specific status codes [#endpoint-specific-status-codes]

### Acquire [#acquire]

| Status code                 | \`code\` and \`reason\`                                | Description                     | Resolution                                                                                                                              |
| --------------------------- | -------------------------------------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| \`400 Bad Request\`           | \`code: 2\`                                          | Invalid request parameters.     | Check the request header, URL, and body. Refer to the \`reason\` field for details.                                                       |
| \`400 Bad Request\`           | \`code: 400, reason: "invalid_appid"\`               | Invalid App ID.                 | Enable the cloud recording service for this App ID before calling the API.                                                              |
| \`400 Bad Request\`           | \`code: 401, reason: "invalid_channel_name"\`        | Invalid channel name.           | The \`cname\` field in the request body contains unsupported characters. Check your integration.                                          |
| \`400 Bad Request\`           | \`code: 405, reason: "no_active_status"\`            | App status abnormal.            | The App service is unavailable, possibly due to an overdue account. Check your account status.                                          |
| \`400 Bad Request\`           | \`code: 406, reason: "vendor_over_load"\`            | Concurrent task limit exceeded. | Retry later and check your integration for task leaks. To request a higher quota, contact [support@agora.io](mailto\\:support@agora.io). |
| \`500 Internal Server Error\` | \`code: 500, reason: "internal_error"\`              | Internal server error.          | Retry with a backoff strategy.                                                                                                          |
| \`500 Internal Server Error\` | \`code: 501, reason: "no_worker_manager_available"\` | No resources available.         | Retry with a backoff strategy.                                                                                                          |
| \`500 Internal Server Error\` | \`code: 504, reason: "allocate_timeout"\`            | Request timed out.              | Retry with a backoff strategy.                                                                                                          |

### Start [#start]

| Status code                 | \`code\` and \`reason\`                              | Description                                                                        | Resolution                                                                                                                  |
| --------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| \`201 Created\`               | \`code: 7, reason: "already started"\`             | Recording is already running. Duplicate \`start\` request.                           | Do not repeat the \`start\` request with the same resource ID.                                                                |
| \`206 Partial Content\`       | \`code: 65, reason: "request not completed"\`      | Request not completed. The request reached the backend but the response timed out. | Retry the request. If the retry fails, call \`acquire\` and \`start\` again to initiate a new session.                          |
| \`400 Bad Request\`           | \`code: 2\`                                        | Invalid request parameters.                                                        | Check the request header, URL, and body. Refer to the \`reason\` field for details.                                           |
| \`400 Bad Request\`           | \`code: 53, reason: "task conflict"\`              | A task with the same \`cname\` and \`uid\` already exists.                             | Check your integration to avoid duplicate tasks, or use a different \`cname\` and \`uid\` and call \`acquire\` and \`start\` again. |
| \`500 Internal Server Error\` | \`code: 502, reason: "Failed to allocate worker"\` | No resources available.                                                            | Call \`acquire\` and \`start\` again to initiate a new session.                                                                 |
| \`500 Internal Server Error\` | \`code: 62, reason: "request timeout"\`            | Request timed out.                                                                 | Retry the request. If the retry fails, call \`acquire\` and \`start\` again to initiate a new session.                          |

### Query [#query]

| Status code           | \`code\` and \`reason\`                          | Description                                                                        | Resolution                                                                                           |
| --------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| \`206 Partial Content\` | \`code: 65, reason: "request not completed"\`  | Request not completed. The request reached the backend but the response timed out. | Retry the request.                                                                                   |
| \`400 Bad Request\`     | \`code: 2\`                                    | Invalid request parameters.                                                        | Check the request header, URL, and body. Refer to the \`reason\` field for details.                    |
| \`404 Not Found\`       | \`code: 404, reason: "failed to find worker"\` | Task does not exist.                                                               | The task may have already exited. Check whether this requires handling based on your business logic. |
| \`504 Gateway Timeout\` | \`code: 62, reason: "request timeout"\`        | Request timed out.                                                                 | The backend service is temporarily unavailable. Retry the request.                                   |

### Update [#update]

| Status code           | \`code\` and \`reason\`                          | Description                                                                        | Resolution                                                                                           |
| --------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| \`206 Partial Content\` | \`code: 65, reason: "request not completed"\`  | Request not completed. The request reached the backend but the response timed out. | Retry the request.                                                                                   |
| \`400 Bad Request\`     | \`code: 2\`                                    | Invalid request parameters.                                                        | Check the request header, URL, and body. Refer to the \`reason\` field for details.                    |
| \`404 Not Found\`       | \`code: 404, reason: "failed to find worker"\` | Task does not exist.                                                               | The task may have already exited. Check whether this requires handling based on your business logic. |
| \`504 Gateway Timeout\` | \`code: 62, reason: "request timeout"\`        | Request timed out.                                                                 | The backend service is temporarily unavailable. Retry the request.                                   |

### Update layout [#update-layout]

| Status code           | \`code\` and \`reason\`                          | Description                                                                        | Resolution                                                                                           |
| --------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| \`206 Partial Content\` | \`code: 65, reason: "request not completed"\`  | Request not completed. The request reached the backend but the response timed out. | Retry the request.                                                                                   |
| \`400 Bad Request\`     | \`code: 2\`                                    | Invalid request parameters.                                                        | Check the request header, URL, and body. Refer to the \`reason\` field for details.                    |
| \`404 Not Found\`       | \`code: 404, reason: "failed to find worker"\` | Task does not exist.                                                               | The task may have already exited. Check whether this requires handling based on your business logic. |
| \`504 Gateway Timeout\` | \`code: 62, reason: "request timeout"\`        | Request timed out.                                                                 | The backend service is temporarily unavailable. Retry the request.                                   |

### Stop [#stop]

| Status code           | \`code\` and \`reason\`                          | Description                                                                        | Resolution                                                                                                                                                                    |
| --------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`206 Partial Content\` | \`code: 65, reason: "request not completed"\`  | Request not completed. The request reached the backend but the response timed out. | Retry the request.                                                                                                                                                            |
| \`206 Partial Content\` | \`code: 435, reason: "no recorded data"\`      | No recorded files generated.                                                       | No users were sending streams in the channel. Check whether this is expected based on your business logic.                                                                    |
| \`400 Bad Request\`     | \`code: 2\`                                    | Invalid request parameters.                                                        | Check the request header, URL, and body. Refer to the \`reason\` field for details.                                                                                             |
| \`400 Bad Request\`     | \`code: 49, reason: "invalid operation"\`      | Invalid operation.                                                                 | The task is already exiting. This may be caused by a duplicate \`stop\` call, the recording bot being removed from the channel, or \`maxIdleTime\` being triggered automatically. |
| \`404 Not Found\`       | \`code: 404, reason: "failed to find worker"\` | Task does not exist.                                                               | The task may have already exited. Check whether this requires handling based on your business logic.                                                                          |
| \`504 Gateway Timeout\` | \`code: 62, reason: "request timeout"\`        | Request timed out.                                                                 | The backend service is temporarily unavailable. Retry the request.                                                                                                            |

If you encounter errors not listed on this page, contact [support@agora.io](mailto\\:support@agora.io).

## FAQs [#faqs]

### Why do I get a 404 when calling \`query\`, \`updateLayout\`, or \`stop\`? [#why-do-i-get-a-404-when-calling-query-updatelayout-or-stop]

Cloud recording uses a high availability mechanism that automatically recovers from server failures. During recovery, these endpoints temporarily return \`404\` even though the recording session is still active.

Recovery time depends on the type of failure:

* **Server process failure**: The service switches to a new server within 30 seconds.
* **Server disconnection**: The service attempts to reconnect. If reconnection fails within one minute, it switches to a different server.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When you call the Cloud Recording RESTful API, each response includes an HTTP status code. A `200` status code means the request was successful. If the request fails, use the status code together with the following response body fields to troubleshoot:"
  }, {
    heading: undefined,
    content: "`message`"
  }, {
    heading: undefined,
    content: "`code` and `reason`"
  }, {
    heading: "general-status-codes",
    content: "Status code"
  }, {
    heading: "general-status-codes",
    content: "`message`"
  }, {
    heading: "general-status-codes",
    content: "Description"
  }, {
    heading: "general-status-codes",
    content: "Resolution"
  }, {
    heading: "general-status-codes",
    content: "`400 Bad Request`"
  }, {
    heading: "general-status-codes",
    content: '`"appid is invalid"`'
  }, {
    heading: "general-status-codes",
    content: "Invalid App ID."
  }, {
    heading: "general-status-codes",
    content: "Enable the cloud recording service for this App ID before calling the API."
  }, {
    heading: "general-status-codes",
    content: "`401 Unauthorized`"
  }, {
    heading: "general-status-codes",
    content: '`"Unauthorized"`'
  }, {
    heading: "general-status-codes",
    content: "Authorization header is missing."
  }, {
    heading: "general-status-codes",
    content: "Ensure you are using HTTP Basic Auth and that the `Authorization` field is included in the request header."
  }, {
    heading: "general-status-codes",
    content: "`401 Unauthorized`"
  }, {
    heading: "general-status-codes",
    content: '`"Invalid authentication credentials"`'
  }, {
    heading: "general-status-codes",
    content: "Invalid Authorization."
  }, {
    heading: "general-status-codes",
    content: "Check that your Customer ID and Customer Secret are correct, that the Authorization is generated correctly, and that the Customer ID and Customer Secret match the App ID."
  }, {
    heading: "general-status-codes",
    content: "`404 Not Found`"
  }, {
    heading: "general-status-codes",
    content: '`"no Route matched with those values"`'
  }, {
    heading: "general-status-codes",
    content: "Incorrect request route."
  }, {
    heading: "general-status-codes",
    content: "Check that the HTTP method and URL are correct."
  }, {
    heading: "general-status-codes",
    content: "`429 Too Many Requests`"
  }, {
    heading: "general-status-codes",
    content: '`"API rate limit exceeded"`'
  }, {
    heading: "general-status-codes",
    content: "Request rate limit exceeded."
  }, {
    heading: "general-status-codes",
    content: "Reduce the frequency of API calls. To request a higher quota, contact support\\@agora.io."
  }, {
    heading: "acquire",
    content: "Status code"
  }, {
    heading: "acquire",
    content: "`code` and `reason`"
  }, {
    heading: "acquire",
    content: "Description"
  }, {
    heading: "acquire",
    content: "Resolution"
  }, {
    heading: "acquire",
    content: "`400 Bad Request`"
  }, {
    heading: "acquire",
    content: "`code: 2`"
  }, {
    heading: "acquire",
    content: "Invalid request parameters."
  }, {
    heading: "acquire",
    content: "Check the request header, URL, and body. Refer to the `reason` field for details."
  }, {
    heading: "acquire",
    content: "`400 Bad Request`"
  }, {
    heading: "acquire",
    content: '`code: 400, reason: "invalid_appid"`'
  }, {
    heading: "acquire",
    content: "Invalid App ID."
  }, {
    heading: "acquire",
    content: "Enable the cloud recording service for this App ID before calling the API."
  }, {
    heading: "acquire",
    content: "`400 Bad Request`"
  }, {
    heading: "acquire",
    content: '`code: 401, reason: "invalid_channel_name"`'
  }, {
    heading: "acquire",
    content: "Invalid channel name."
  }, {
    heading: "acquire",
    content: "The `cname` field in the request body contains unsupported characters. Check your integration."
  }, {
    heading: "acquire",
    content: "`400 Bad Request`"
  }, {
    heading: "acquire",
    content: '`code: 405, reason: "no_active_status"`'
  }, {
    heading: "acquire",
    content: "App status abnormal."
  }, {
    heading: "acquire",
    content: "The App service is unavailable, possibly due to an overdue account. Check your account status."
  }, {
    heading: "acquire",
    content: "`400 Bad Request`"
  }, {
    heading: "acquire",
    content: '`code: 406, reason: "vendor_over_load"`'
  }, {
    heading: "acquire",
    content: "Concurrent task limit exceeded."
  }, {
    heading: "acquire",
    content: "Retry later and check your integration for task leaks. To request a higher quota, contact support\\@agora.io."
  }, {
    heading: "acquire",
    content: "`500 Internal Server Error`"
  }, {
    heading: "acquire",
    content: '`code: 500, reason: "internal_error"`'
  }, {
    heading: "acquire",
    content: "Internal server error."
  }, {
    heading: "acquire",
    content: "Retry with a backoff strategy."
  }, {
    heading: "acquire",
    content: "`500 Internal Server Error`"
  }, {
    heading: "acquire",
    content: '`code: 501, reason: "no_worker_manager_available"`'
  }, {
    heading: "acquire",
    content: "No resources available."
  }, {
    heading: "acquire",
    content: "Retry with a backoff strategy."
  }, {
    heading: "acquire",
    content: "`500 Internal Server Error`"
  }, {
    heading: "acquire",
    content: '`code: 504, reason: "allocate_timeout"`'
  }, {
    heading: "acquire",
    content: "Request timed out."
  }, {
    heading: "acquire",
    content: "Retry with a backoff strategy."
  }, {
    heading: "start",
    content: "Status code"
  }, {
    heading: "start",
    content: "`code` and `reason`"
  }, {
    heading: "start",
    content: "Description"
  }, {
    heading: "start",
    content: "Resolution"
  }, {
    heading: "start",
    content: "`201 Created`"
  }, {
    heading: "start",
    content: '`code: 7, reason: "already started"`'
  }, {
    heading: "start",
    content: "Recording is already running. Duplicate `start` request."
  }, {
    heading: "start",
    content: "Do not repeat the `start` request with the same resource ID."
  }, {
    heading: "start",
    content: "`206 Partial Content`"
  }, {
    heading: "start",
    content: '`code: 65, reason: "request not completed"`'
  }, {
    heading: "start",
    content: "Request not completed. The request reached the backend but the response timed out."
  }, {
    heading: "start",
    content: "Retry the request. If the retry fails, call `acquire` and `start` again to initiate a new session."
  }, {
    heading: "start",
    content: "`400 Bad Request`"
  }, {
    heading: "start",
    content: "`code: 2`"
  }, {
    heading: "start",
    content: "Invalid request parameters."
  }, {
    heading: "start",
    content: "Check the request header, URL, and body. Refer to the `reason` field for details."
  }, {
    heading: "start",
    content: "`400 Bad Request`"
  }, {
    heading: "start",
    content: '`code: 53, reason: "task conflict"`'
  }, {
    heading: "start",
    content: "A task with the same `cname` and `uid` already exists."
  }, {
    heading: "start",
    content: "Check your integration to avoid duplicate tasks, or use a different `cname` and `uid` and call `acquire` and `start` again."
  }, {
    heading: "start",
    content: "`500 Internal Server Error`"
  }, {
    heading: "start",
    content: '`code: 502, reason: "Failed to allocate worker"`'
  }, {
    heading: "start",
    content: "No resources available."
  }, {
    heading: "start",
    content: "Call `acquire` and `start` again to initiate a new session."
  }, {
    heading: "start",
    content: "`500 Internal Server Error`"
  }, {
    heading: "start",
    content: '`code: 62, reason: "request timeout"`'
  }, {
    heading: "start",
    content: "Request timed out."
  }, {
    heading: "start",
    content: "Retry the request. If the retry fails, call `acquire` and `start` again to initiate a new session."
  }, {
    heading: "query",
    content: "Status code"
  }, {
    heading: "query",
    content: "`code` and `reason`"
  }, {
    heading: "query",
    content: "Description"
  }, {
    heading: "query",
    content: "Resolution"
  }, {
    heading: "query",
    content: "`206 Partial Content`"
  }, {
    heading: "query",
    content: '`code: 65, reason: "request not completed"`'
  }, {
    heading: "query",
    content: "Request not completed. The request reached the backend but the response timed out."
  }, {
    heading: "query",
    content: "Retry the request."
  }, {
    heading: "query",
    content: "`400 Bad Request`"
  }, {
    heading: "query",
    content: "`code: 2`"
  }, {
    heading: "query",
    content: "Invalid request parameters."
  }, {
    heading: "query",
    content: "Check the request header, URL, and body. Refer to the `reason` field for details."
  }, {
    heading: "query",
    content: "`404 Not Found`"
  }, {
    heading: "query",
    content: '`code: 404, reason: "failed to find worker"`'
  }, {
    heading: "query",
    content: "Task does not exist."
  }, {
    heading: "query",
    content: "The task may have already exited. Check whether this requires handling based on your business logic."
  }, {
    heading: "query",
    content: "`504 Gateway Timeout`"
  }, {
    heading: "query",
    content: '`code: 62, reason: "request timeout"`'
  }, {
    heading: "query",
    content: "Request timed out."
  }, {
    heading: "query",
    content: "The backend service is temporarily unavailable. Retry the request."
  }, {
    heading: "update",
    content: "Status code"
  }, {
    heading: "update",
    content: "`code` and `reason`"
  }, {
    heading: "update",
    content: "Description"
  }, {
    heading: "update",
    content: "Resolution"
  }, {
    heading: "update",
    content: "`206 Partial Content`"
  }, {
    heading: "update",
    content: '`code: 65, reason: "request not completed"`'
  }, {
    heading: "update",
    content: "Request not completed. The request reached the backend but the response timed out."
  }, {
    heading: "update",
    content: "Retry the request."
  }, {
    heading: "update",
    content: "`400 Bad Request`"
  }, {
    heading: "update",
    content: "`code: 2`"
  }, {
    heading: "update",
    content: "Invalid request parameters."
  }, {
    heading: "update",
    content: "Check the request header, URL, and body. Refer to the `reason` field for details."
  }, {
    heading: "update",
    content: "`404 Not Found`"
  }, {
    heading: "update",
    content: '`code: 404, reason: "failed to find worker"`'
  }, {
    heading: "update",
    content: "Task does not exist."
  }, {
    heading: "update",
    content: "The task may have already exited. Check whether this requires handling based on your business logic."
  }, {
    heading: "update",
    content: "`504 Gateway Timeout`"
  }, {
    heading: "update",
    content: '`code: 62, reason: "request timeout"`'
  }, {
    heading: "update",
    content: "Request timed out."
  }, {
    heading: "update",
    content: "The backend service is temporarily unavailable. Retry the request."
  }, {
    heading: "update-layout",
    content: "Status code"
  }, {
    heading: "update-layout",
    content: "`code` and `reason`"
  }, {
    heading: "update-layout",
    content: "Description"
  }, {
    heading: "update-layout",
    content: "Resolution"
  }, {
    heading: "update-layout",
    content: "`206 Partial Content`"
  }, {
    heading: "update-layout",
    content: '`code: 65, reason: "request not completed"`'
  }, {
    heading: "update-layout",
    content: "Request not completed. The request reached the backend but the response timed out."
  }, {
    heading: "update-layout",
    content: "Retry the request."
  }, {
    heading: "update-layout",
    content: "`400 Bad Request`"
  }, {
    heading: "update-layout",
    content: "`code: 2`"
  }, {
    heading: "update-layout",
    content: "Invalid request parameters."
  }, {
    heading: "update-layout",
    content: "Check the request header, URL, and body. Refer to the `reason` field for details."
  }, {
    heading: "update-layout",
    content: "`404 Not Found`"
  }, {
    heading: "update-layout",
    content: '`code: 404, reason: "failed to find worker"`'
  }, {
    heading: "update-layout",
    content: "Task does not exist."
  }, {
    heading: "update-layout",
    content: "The task may have already exited. Check whether this requires handling based on your business logic."
  }, {
    heading: "update-layout",
    content: "`504 Gateway Timeout`"
  }, {
    heading: "update-layout",
    content: '`code: 62, reason: "request timeout"`'
  }, {
    heading: "update-layout",
    content: "Request timed out."
  }, {
    heading: "update-layout",
    content: "The backend service is temporarily unavailable. Retry the request."
  }, {
    heading: "stop",
    content: "Status code"
  }, {
    heading: "stop",
    content: "`code` and `reason`"
  }, {
    heading: "stop",
    content: "Description"
  }, {
    heading: "stop",
    content: "Resolution"
  }, {
    heading: "stop",
    content: "`206 Partial Content`"
  }, {
    heading: "stop",
    content: '`code: 65, reason: "request not completed"`'
  }, {
    heading: "stop",
    content: "Request not completed. The request reached the backend but the response timed out."
  }, {
    heading: "stop",
    content: "Retry the request."
  }, {
    heading: "stop",
    content: "`206 Partial Content`"
  }, {
    heading: "stop",
    content: '`code: 435, reason: "no recorded data"`'
  }, {
    heading: "stop",
    content: "No recorded files generated."
  }, {
    heading: "stop",
    content: "No users were sending streams in the channel. Check whether this is expected based on your business logic."
  }, {
    heading: "stop",
    content: "`400 Bad Request`"
  }, {
    heading: "stop",
    content: "`code: 2`"
  }, {
    heading: "stop",
    content: "Invalid request parameters."
  }, {
    heading: "stop",
    content: "Check the request header, URL, and body. Refer to the `reason` field for details."
  }, {
    heading: "stop",
    content: "`400 Bad Request`"
  }, {
    heading: "stop",
    content: '`code: 49, reason: "invalid operation"`'
  }, {
    heading: "stop",
    content: "Invalid operation."
  }, {
    heading: "stop",
    content: "The task is already exiting. This may be caused by a duplicate `stop` call, the recording bot being removed from the channel, or `maxIdleTime` being triggered automatically."
  }, {
    heading: "stop",
    content: "`404 Not Found`"
  }, {
    heading: "stop",
    content: '`code: 404, reason: "failed to find worker"`'
  }, {
    heading: "stop",
    content: "Task does not exist."
  }, {
    heading: "stop",
    content: "The task may have already exited. Check whether this requires handling based on your business logic."
  }, {
    heading: "stop",
    content: "`504 Gateway Timeout`"
  }, {
    heading: "stop",
    content: '`code: 62, reason: "request timeout"`'
  }, {
    heading: "stop",
    content: "Request timed out."
  }, {
    heading: "stop",
    content: "The backend service is temporarily unavailable. Retry the request."
  }, {
    heading: "stop",
    content: "If you encounter errors not listed on this page, contact support\\@agora.io."
  }, {
    heading: "why-do-i-get-a-404-when-calling-query-updatelayout-or-stop",
    content: "Cloud recording uses a high availability mechanism that automatically recovers from server failures. During recovery, these endpoints temporarily return `404` even though the recording session is still active."
  }, {
    heading: "why-do-i-get-a-404-when-calling-query-updatelayout-or-stop",
    content: "Recovery time depends on the type of failure:"
  }, {
    heading: "why-do-i-get-a-404-when-calling-query-updatelayout-or-stop",
    content: "**Server process failure**: The service switches to a new server within 30 seconds."
  }, {
    heading: "why-do-i-get-a-404-when-calling-query-updatelayout-or-stop",
    content: "**Server disconnection**: The service attempts to reconnect. If reconnection fails within one minute, it switches to a different server."
  }],
  headings: [{
    id: "general-status-codes",
    content: "General status codes"
  }, {
    id: "endpoint-specific-status-codes",
    content: "Endpoint-specific status codes"
  }, {
    id: "acquire",
    content: "Acquire"
  }, {
    id: "start",
    content: "Start"
  }, {
    id: "query",
    content: "Query"
  }, {
    id: "update",
    content: "Update"
  }, {
    id: "update-layout",
    content: "Update layout"
  }, {
    id: "stop",
    content: "Stop"
  }, {
    id: "faqs",
    content: "FAQs"
  }, {
    id: "why-do-i-get-a-404-when-calling-query-updatelayout-or-stop",
    content: "Why do I get a 404 when calling `query`, `updateLayout`, or `stop`?"
  }]
};
export let toc = [{
  depth: 2,
  url: "#general-status-codes",
  title: _jsx(_Fragment, {
    children: "General status codes"
  })
}, {
  depth: 2,
  url: "#endpoint-specific-status-codes",
  title: _jsx(_Fragment, {
    children: "Endpoint-specific status codes"
  })
}, {
  depth: 3,
  url: "#acquire",
  title: _jsx(_Fragment, {
    children: "Acquire"
  })
}, {
  depth: 3,
  url: "#start",
  title: _jsx(_Fragment, {
    children: "Start"
  })
}, {
  depth: 3,
  url: "#query",
  title: _jsx(_Fragment, {
    children: "Query"
  })
}, {
  depth: 3,
  url: "#update",
  title: _jsx(_Fragment, {
    children: "Update"
  })
}, {
  depth: 3,
  url: "#update-layout",
  title: _jsx(_Fragment, {
    children: "Update layout"
  })
}, {
  depth: 3,
  url: "#stop",
  title: _jsx(_Fragment, {
    children: "Stop"
  })
}, {
  depth: 2,
  url: "#faqs",
  title: _jsx(_Fragment, {
    children: "FAQs"
  })
}, {
  depth: 3,
  url: "#why-do-i-get-a-404-when-calling-query-updatelayout-or-stop",
  title: _jsxs(_Fragment, {
    children: ["Why do I get a 404 when calling ", _jsx("code", {
      children: "query"
    }), ", ", _jsx("code", {
      children: "updateLayout"
    }), ", or ", _jsx("code", {
      children: "stop"
    }), "?"]
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
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["When you call the Cloud Recording RESTful API, each response includes an HTTP status code. A ", _jsx(_components.code, {
        children: "200"
      }), " status code means the request was successful. If the request fails, use the status code together with the following response body fields to troubleshoot:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.code, {
            children: "message"
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// 401 Unauthorized"
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
                  children: '"Invalid authentication credentials"'
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
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "code"
          }), " and ", _jsx(_components.code, {
            children: "reason"
          })]
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// 400 Bad Request"
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
                  children: '  "reason"'
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
                  children: '"Acquire: invalid resourceExpiredHour value!"'
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
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "general-status-codes",
      children: "General status codes"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Status code"
          }), _jsx(_components.th, {
            children: _jsx(_components.code, {
              children: "message"
            })
          }), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "Resolution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "400 Bad Request"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"appid is invalid"'
            })
          }), _jsx(_components.td, {
            children: "Invalid App ID."
          }), _jsx(_components.td, {
            children: "Enable the cloud recording service for this App ID before calling the API."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "401 Unauthorized"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"Unauthorized"'
            })
          }), _jsx(_components.td, {
            children: "Authorization header is missing."
          }), _jsxs(_components.td, {
            children: ["Ensure you are using ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording/authentication",
              children: "HTTP Basic Auth"
            }), " and that the ", _jsx(_components.code, {
              children: "Authorization"
            }), " field is included in the request header."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "401 Unauthorized"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"Invalid authentication credentials"'
            })
          }), _jsx(_components.td, {
            children: "Invalid Authorization."
          }), _jsx(_components.td, {
            children: "Check that your Customer ID and Customer Secret are correct, that the Authorization is generated correctly, and that the Customer ID and Customer Secret match the App ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "404 Not Found"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"no Route matched with those values"'
            })
          }), _jsx(_components.td, {
            children: "Incorrect request route."
          }), _jsx(_components.td, {
            children: "Check that the HTTP method and URL are correct."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "429 Too Many Requests"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: '"API rate limit exceeded"'
            })
          }), _jsx(_components.td, {
            children: "Request rate limit exceeded."
          }), _jsxs(_components.td, {
            children: ["Reduce the frequency of API calls. To request a higher quota, contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "endpoint-specific-status-codes",
      children: "Endpoint-specific status codes"
    }), `
`, _jsx(_components.h3, {
      id: "acquire",
      children: "Acquire"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Status code"
          }), _jsxs(_components.th, {
            children: [_jsx(_components.code, {
              children: "code"
            }), " and ", _jsx(_components.code, {
              children: "reason"
            })]
          }), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "Resolution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "400 Bad Request"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "code: 2"
            })
          }), _jsx(_components.td, {
            children: "Invalid request parameters."
          }), _jsxs(_components.td, {
            children: ["Check the request header, URL, and body. Refer to the ", _jsx(_components.code, {
              children: "reason"
            }), " field for details."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "400 Bad Request"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 400, reason: "invalid_appid"'
            })
          }), _jsx(_components.td, {
            children: "Invalid App ID."
          }), _jsx(_components.td, {
            children: "Enable the cloud recording service for this App ID before calling the API."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "400 Bad Request"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 401, reason: "invalid_channel_name"'
            })
          }), _jsx(_components.td, {
            children: "Invalid channel name."
          }), _jsxs(_components.td, {
            children: ["The ", _jsx(_components.code, {
              children: "cname"
            }), " field in the request body contains unsupported characters. Check your integration."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "400 Bad Request"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 405, reason: "no_active_status"'
            })
          }), _jsx(_components.td, {
            children: "App status abnormal."
          }), _jsx(_components.td, {
            children: "The App service is unavailable, possibly due to an overdue account. Check your account status."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "400 Bad Request"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 406, reason: "vendor_over_load"'
            })
          }), _jsx(_components.td, {
            children: "Concurrent task limit exceeded."
          }), _jsxs(_components.td, {
            children: ["Retry later and check your integration for task leaks. To request a higher quota, contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "500 Internal Server Error"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 500, reason: "internal_error"'
            })
          }), _jsx(_components.td, {
            children: "Internal server error."
          }), _jsx(_components.td, {
            children: "Retry with a backoff strategy."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "500 Internal Server Error"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 501, reason: "no_worker_manager_available"'
            })
          }), _jsx(_components.td, {
            children: "No resources available."
          }), _jsx(_components.td, {
            children: "Retry with a backoff strategy."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "500 Internal Server Error"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 504, reason: "allocate_timeout"'
            })
          }), _jsx(_components.td, {
            children: "Request timed out."
          }), _jsx(_components.td, {
            children: "Retry with a backoff strategy."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "start",
      children: "Start"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Status code"
          }), _jsxs(_components.th, {
            children: [_jsx(_components.code, {
              children: "code"
            }), " and ", _jsx(_components.code, {
              children: "reason"
            })]
          }), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "Resolution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "201 Created"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 7, reason: "already started"'
            })
          }), _jsxs(_components.td, {
            children: ["Recording is already running. Duplicate ", _jsx(_components.code, {
              children: "start"
            }), " request."]
          }), _jsxs(_components.td, {
            children: ["Do not repeat the ", _jsx(_components.code, {
              children: "start"
            }), " request with the same resource ID."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "206 Partial Content"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 65, reason: "request not completed"'
            })
          }), _jsx(_components.td, {
            children: "Request not completed. The request reached the backend but the response timed out."
          }), _jsxs(_components.td, {
            children: ["Retry the request. If the retry fails, call ", _jsx(_components.code, {
              children: "acquire"
            }), " and ", _jsx(_components.code, {
              children: "start"
            }), " again to initiate a new session."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "400 Bad Request"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "code: 2"
            })
          }), _jsx(_components.td, {
            children: "Invalid request parameters."
          }), _jsxs(_components.td, {
            children: ["Check the request header, URL, and body. Refer to the ", _jsx(_components.code, {
              children: "reason"
            }), " field for details."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "400 Bad Request"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 53, reason: "task conflict"'
            })
          }), _jsxs(_components.td, {
            children: ["A task with the same ", _jsx(_components.code, {
              children: "cname"
            }), " and ", _jsx(_components.code, {
              children: "uid"
            }), " already exists."]
          }), _jsxs(_components.td, {
            children: ["Check your integration to avoid duplicate tasks, or use a different ", _jsx(_components.code, {
              children: "cname"
            }), " and ", _jsx(_components.code, {
              children: "uid"
            }), " and call ", _jsx(_components.code, {
              children: "acquire"
            }), " and ", _jsx(_components.code, {
              children: "start"
            }), " again."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "500 Internal Server Error"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 502, reason: "Failed to allocate worker"'
            })
          }), _jsx(_components.td, {
            children: "No resources available."
          }), _jsxs(_components.td, {
            children: ["Call ", _jsx(_components.code, {
              children: "acquire"
            }), " and ", _jsx(_components.code, {
              children: "start"
            }), " again to initiate a new session."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "500 Internal Server Error"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 62, reason: "request timeout"'
            })
          }), _jsx(_components.td, {
            children: "Request timed out."
          }), _jsxs(_components.td, {
            children: ["Retry the request. If the retry fails, call ", _jsx(_components.code, {
              children: "acquire"
            }), " and ", _jsx(_components.code, {
              children: "start"
            }), " again to initiate a new session."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "query",
      children: "Query"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Status code"
          }), _jsxs(_components.th, {
            children: [_jsx(_components.code, {
              children: "code"
            }), " and ", _jsx(_components.code, {
              children: "reason"
            })]
          }), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "Resolution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "206 Partial Content"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 65, reason: "request not completed"'
            })
          }), _jsx(_components.td, {
            children: "Request not completed. The request reached the backend but the response timed out."
          }), _jsx(_components.td, {
            children: "Retry the request."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "400 Bad Request"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "code: 2"
            })
          }), _jsx(_components.td, {
            children: "Invalid request parameters."
          }), _jsxs(_components.td, {
            children: ["Check the request header, URL, and body. Refer to the ", _jsx(_components.code, {
              children: "reason"
            }), " field for details."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "404 Not Found"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 404, reason: "failed to find worker"'
            })
          }), _jsx(_components.td, {
            children: "Task does not exist."
          }), _jsx(_components.td, {
            children: "The task may have already exited. Check whether this requires handling based on your business logic."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "504 Gateway Timeout"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 62, reason: "request timeout"'
            })
          }), _jsx(_components.td, {
            children: "Request timed out."
          }), _jsx(_components.td, {
            children: "The backend service is temporarily unavailable. Retry the request."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "update",
      children: "Update"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Status code"
          }), _jsxs(_components.th, {
            children: [_jsx(_components.code, {
              children: "code"
            }), " and ", _jsx(_components.code, {
              children: "reason"
            })]
          }), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "Resolution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "206 Partial Content"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 65, reason: "request not completed"'
            })
          }), _jsx(_components.td, {
            children: "Request not completed. The request reached the backend but the response timed out."
          }), _jsx(_components.td, {
            children: "Retry the request."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "400 Bad Request"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "code: 2"
            })
          }), _jsx(_components.td, {
            children: "Invalid request parameters."
          }), _jsxs(_components.td, {
            children: ["Check the request header, URL, and body. Refer to the ", _jsx(_components.code, {
              children: "reason"
            }), " field for details."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "404 Not Found"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 404, reason: "failed to find worker"'
            })
          }), _jsx(_components.td, {
            children: "Task does not exist."
          }), _jsx(_components.td, {
            children: "The task may have already exited. Check whether this requires handling based on your business logic."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "504 Gateway Timeout"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 62, reason: "request timeout"'
            })
          }), _jsx(_components.td, {
            children: "Request timed out."
          }), _jsx(_components.td, {
            children: "The backend service is temporarily unavailable. Retry the request."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "update-layout",
      children: "Update layout"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Status code"
          }), _jsxs(_components.th, {
            children: [_jsx(_components.code, {
              children: "code"
            }), " and ", _jsx(_components.code, {
              children: "reason"
            })]
          }), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "Resolution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "206 Partial Content"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 65, reason: "request not completed"'
            })
          }), _jsx(_components.td, {
            children: "Request not completed. The request reached the backend but the response timed out."
          }), _jsx(_components.td, {
            children: "Retry the request."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "400 Bad Request"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "code: 2"
            })
          }), _jsx(_components.td, {
            children: "Invalid request parameters."
          }), _jsxs(_components.td, {
            children: ["Check the request header, URL, and body. Refer to the ", _jsx(_components.code, {
              children: "reason"
            }), " field for details."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "404 Not Found"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 404, reason: "failed to find worker"'
            })
          }), _jsx(_components.td, {
            children: "Task does not exist."
          }), _jsx(_components.td, {
            children: "The task may have already exited. Check whether this requires handling based on your business logic."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "504 Gateway Timeout"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 62, reason: "request timeout"'
            })
          }), _jsx(_components.td, {
            children: "Request timed out."
          }), _jsx(_components.td, {
            children: "The backend service is temporarily unavailable. Retry the request."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "stop",
      children: "Stop"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Status code"
          }), _jsxs(_components.th, {
            children: [_jsx(_components.code, {
              children: "code"
            }), " and ", _jsx(_components.code, {
              children: "reason"
            })]
          }), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "Resolution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "206 Partial Content"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 65, reason: "request not completed"'
            })
          }), _jsx(_components.td, {
            children: "Request not completed. The request reached the backend but the response timed out."
          }), _jsx(_components.td, {
            children: "Retry the request."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "206 Partial Content"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 435, reason: "no recorded data"'
            })
          }), _jsx(_components.td, {
            children: "No recorded files generated."
          }), _jsx(_components.td, {
            children: "No users were sending streams in the channel. Check whether this is expected based on your business logic."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "400 Bad Request"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "code: 2"
            })
          }), _jsx(_components.td, {
            children: "Invalid request parameters."
          }), _jsxs(_components.td, {
            children: ["Check the request header, URL, and body. Refer to the ", _jsx(_components.code, {
              children: "reason"
            }), " field for details."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "400 Bad Request"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 49, reason: "invalid operation"'
            })
          }), _jsx(_components.td, {
            children: "Invalid operation."
          }), _jsxs(_components.td, {
            children: ["The task is already exiting. This may be caused by a duplicate ", _jsx(_components.code, {
              children: "stop"
            }), " call, the recording bot being removed from the channel, or ", _jsx(_components.code, {
              children: "maxIdleTime"
            }), " being triggered automatically."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "404 Not Found"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 404, reason: "failed to find worker"'
            })
          }), _jsx(_components.td, {
            children: "Task does not exist."
          }), _jsx(_components.td, {
            children: "The task may have already exited. Check whether this requires handling based on your business logic."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "504 Gateway Timeout"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'code: 62, reason: "request timeout"'
            })
          }), _jsx(_components.td, {
            children: "Request timed out."
          }), _jsx(_components.td, {
            children: "The backend service is temporarily unavailable. Retry the request."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["If you encounter errors not listed on this page, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), `
`, _jsxs(_components.h3, {
      id: "why-do-i-get-a-404-when-calling-query-updatelayout-or-stop",
      children: ["Why do I get a 404 when calling ", _jsx(_components.code, {
        children: "query"
      }), ", ", _jsx(_components.code, {
        children: "updateLayout"
      }), ", or ", _jsx(_components.code, {
        children: "stop"
      }), "?"]
    }), `
`, _jsxs(_components.p, {
      children: ["Cloud recording uses a high availability mechanism that automatically recovers from server failures. During recovery, these endpoints temporarily return ", _jsx(_components.code, {
        children: "404"
      }), " even though the recording session is still active."]
    }), `
`, _jsx(_components.p, {
      children: "Recovery time depends on the type of failure:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Server process failure"
        }), ": The service switches to a new server within 30 seconds."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Server disconnection"
        }), ": The service attempts to reconnect. If reconnection fails within one minute, it switches to a different server."]
      }), `
`]
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
