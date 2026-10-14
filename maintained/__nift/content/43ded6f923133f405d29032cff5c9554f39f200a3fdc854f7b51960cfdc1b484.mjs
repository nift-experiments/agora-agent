import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Migrate from Real-Time STT 6.x to 7.x",
  description: "How to migrate from real-time STT 6.x to 7.x."
};
export let _markdown = `

This document guides you through migrating from version 6.x of Real-Time STT to the latest version 7.x. The updated architecture delivers improved stability, a simplified API workflow, and enhanced functionality to support a broader range of scenarios.

<CalloutContainer type="info">
  <CalloutDescription>
    Thoroughly test your implementation during the migration process and prepare a fallback plan. Complete verification in a test environment before deploying it to production.
  </CalloutDescription>
</CalloutContainer>

## Version differences and upgrade advantages [#version-differences-and-upgrade-advantages]

This section summarizes the key differences between major versions and the benefits of upgrading.

### Version history [#version-history]

Version 7.x is the latest recommended release. It offers several key improvements over version 6.x:

* **Simplified API workflow**: Removes the need to obtain a \`builderToken\` through the \`acquire\` interface.
* **Consistent API naming**: Aligns AI product APIs with the Convo AI RESTful API naming conventions.
* **Extended functionality**: Adds improved language recognition configuration at the UID level.
* **Standardized URL paths**: Keeps the domain \`api.agora.io\` and standardizes the path structure.

### Major changes [#major-changes]

#### API endpoint and method name changes [#api-endpoint-and-method-name-changes]

| 6.x       | 7.x                           | Summary                                                                                                    |
| --------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------- |
| \`acquire\` | This method has been removed. | The process of obtaining a \`builderToken\` through the \`acquire\` interface has been removed in version 7.x. |
| \`start\`   | \`join\`                        | The method for starting an STT task has been renamed to \`join\`.                                            |
| \`query\`   | \`get\`                         | The method for querying task status has been renamed to \`get\`.                                             |
| \`stop\`    | \`leave\`                       | Method for stopping a task has been renamed to \`leave\`.                                                    |
| \`update\`  | \`update\`                      | The method name remains unchanged.                                                                         |

#### URL path changes [#url-path-changes]

| API                  | 6.x URL                                                                                                      | 7.x URL                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| Start task           | \`https://api.agora.io/v1/projects/{{appId}}/rtsc/speech-to-text/tasks?builderToken={{tokenName}}\`            | \`https://api.agora.io/api/speech-to-text/v1/projects/{appid}/join\`                     |
| Query status         | \`https://api.agora.io/v1/projects/{{appId}}/rtsc/speech-to-text/tasks/{{taskId}}?builderToken={{tokenName}}\` | \`https://api.agora.io/api/speech-to-text/v1/projects/{appid}/agents/{agent_id}\`        |
| Stop task            | \`https://api.agora.io/v1/projects/{{appId}}/rtsc/speech-to-text/tasks/{{taskId}}?builderToken={{tokenName}}\` | \`https://api.agora.io/api/speech-to-text/v1/projects/{appid}/agents/{agent_id}/leave\`  |
| Update configuration | \`https://api.agora.io/v1/projects/{{appId}}/rtsc/speech-to-text/tasks/{{taskId}}?builderToken={{tokenName}}\` | \`https://api.agora.io/api/speech-to-text/v1/projects/{appid}/agents/{agent_id}/update\` |

#### Parameter changes [#parameter-changes]

* Task identifier changes
  * 6.x: Uses \`taskId to\` identify tasks
  * 7.x: Uses \`agent_id\` to identify tasks

* Authentication method changes
  * 6.x: Need to call \`acquire\` to obtain a \`builderToken\` first. Subsequent requests were passed through URL parameters.
  * 7.x: Removes the process of obtaining a \`builderToken\` through the \`acquire\` interface, simplifying the API call process.

#### Request parameter changes [#request-parameter-changes]

* Parameters added to the \`join\` method (formerly \`start\`):

  * \`name\`: Required. A unique task name of up to 64 characters. This parameter is used for task deduplication to ensure that only one speech-to-text task runs in the same channel. To run multiple speech-to-text tasks in a channel, set different \`name\` values.

#### Other changes [#other-changes]

* URL path standardization: Version 7.x uses the same domain name \`api.agora.io\` but introduces a more standardized path structure, such as \`/api/speech-to-text/v1/projects/{appid}/\`.
* HTTP method standardization: The \`stop\` method now uses \`POST\` instead of \`DELETE\` to better comply with RESTful conventions.
* Error response format: Version 7.x error responses include more detailed information. The \`message\` field has been replaced by two fields: \`reason\`, which contains the reason for the failure, and \`detail\`, which provides additional details.
* \`status\` field values: The \`status\` field in the \`join\` response has been updated. The following values have been removed: \`PREPARING\`, \`PREPARED\`, \`CREATED\`, \`STARTED\`, \`IN_PROGRESS\`, and \`FAILURE_STOP\`. The following values have been added: \`RUNNING\`, \`RECOVERING\`, and \`FAILED\`.

## Migrate to 7.x [#migrate-to-7x]

This section guides you through the migration process.

### Migration steps [#migration-steps]

The migration steps are as follows:

#### Update the API call process [#update-the-api-call-process]

In version 6.x, the basic process was as follows:

1. Call \`acquire\` to get a \`builderToken\`.
2. Use the \`builderToken\` to call \`start\` and begin the task.
3. Call \`query\` to check the task status.
4. Call \`stop\` to end the task.
5. Call \`update\` to modify the task configuration (optional).

For version 7.x, modify the API call sequence as follows:

1. Call \`join\` to start the task and get the \`agent_id\`.
2. Call \`get\` to check the task status.
3. Call \`leave\` to stop the task.
4. Call \`update\` to modify the task configuration (optional).

#### Update the URL and authentication method [#update-the-url-and-authentication-method]

1. Remove all calls to \`acquire\` and the \`builderToken\` processing logic.
2. Update the API path from \`/v1/projects/{{appId}}/rtsc/speech-to-text/\` to \`/api/speech-to-text/v1/projects/{appid}/\`.
3. Update the request path and parameters according to the new API specification.
4. Add the \`name\` parameter to the \`join\` request (required).

#### Update the task identifier [#update-the-task-identifier]

Update all uses of \`taskId\` in the code to \`agent_id\` and ensure that subsequent operations use the correct task identifier.

#### Update response processing [#update-response-processing]

Update the response processing logic to adapt to the new response format:

* Successful calls to \`join\`, \`get\`, and \`update\` return an object containing \`status\`, \`create_ts\` and \`agent_id\`.
* Failed calls to \`join\`, \`get\`, and \`update\` return \`reason\` and \`detail\` fields.
* Update status field handling to account for removed values (\`PREPARING\`, \`PREPARED\`, \`CREATED\`, \`STARTED\`, \`IN_PROGRESS\`, \`FAILURE_STOP\`) and new values (\`RUNNING\`, \`RECOVERING\`, \`FAILED\`).

### Code comparison [#code-comparison]

Comparison between 6.x and 7.x code:

#### 6.x [#6x]

\`\`\`js
// 1. Get builderToken
const acquireResponse = await fetch(\`https://api.agora.io/v1/projects/\${appId}/rtsc/speech-to-text/builderTokens\`, {
 method: 'POST',
 body: JSON.stringify({ "instanceId": "your-instance-id" })
});
const { tokenName } = await acquireResponse.json();

// 2. Start task
const startResponse = await fetch(\`https://api.agora.io/v1/projects/\${appId}/rtsc/speech-to-text/tasks?builderToken=\${tokenName}\`, {
 method: 'POST',
 body: JSON.stringify({
   "languages": ["zh-CN"],
   "rtcConfig": {
     "channelName": "your-channel",
     "subBotUid": "123",
     "subBotToken": "your-sub-token",
     "pubBotUid": "456",
     "pubBotToken": "your-pub-token"
   }
 })
});
const { taskId } = await startResponse.json();

// 3. Query task status
const queryResponse = await fetch(\`https://api.agora.io/v1/projects/\${appId}/rtsc/speech-to-text/tasks/\${taskId}?builderToken=\${tokenName}\`, {
 method: 'GET'
});
const status = await queryResponse.json();

// 4. Stop task
await fetch(\`https://api.agora.io/v1/projects/\${appId}/rtsc/speech-to-text/tasks/\${taskId}?builderToken=\${tokenName}\`, {
 method: 'DELETE'
});
\`\`\`

#### 7.x code [#7x-code]

\`\`\`js
// 1. Start task
const joinResponse = await fetch(\`https://api.agora.io/api/speech-to-text/v1/projects/\${appId}/join\`, {
 method: 'POST',
 headers: headers,
 body: JSON.stringify({
   "name": "my-stt-task",  // New parameter, required
   "languages": ["zh-CN"],
   "rtcConfig": {
     "channelName": "your-channel",
     "subBotUid": "123",
     "subBotToken": "your-sub-token",
     "pubBotUid": "456",
     "pubBotToken": "your-pub-token",
     "subscribeAudioUids": ["789"]  // New parameter, optional
   }
 })
});

// Error handling
if (!joinResponse.ok) {
 const errorData = await joinResponse.json();
 console.error('Task start failed:', errorData);
 throw new Error(\`Task start failed: \${errorData.reason  || joinResponse.status}\`);
}

const { agent_id } = await joinResponse.json();

// 2. Query task status
const getResponse = await fetch(\`https://api.agora.io/api/speech-to-text/v1/projects/\${appId}/agents/\${agent_id}\`, {
 method: 'GET',
 headers: headers
});

// Task status parsing and handling
if (getResponse.ok) {
 const status = await getResponse.json();
 console.log('Task status:', status.status);
} else {
 console.error('Failed to get task status:', await getResponse.json());
}

// 3. Stop task
const leaveResponse = await fetch(\`https://api.agora.io/api/speech-to-text/v1/projects/\${appId}/agents/\${agent_id}/leave\`, {
 method: 'POST',  // Note: POST in 7.x instead of DELETE
 headers: headers
});

if (!leaveResponse.ok) {
 console.error('Task stop failed:', await leaveResponse.json());
}
\`\`\`

### Migration checklist [#migration-checklist]

* Remove all code related to the \`acquire\` method.
* Update all API calls to use the latest URLs.
* Replace \`start\` with \`join\`.
* Replace \`query\` with \`get\` .
* Replace \`stop\` with \`leave\` and change the HTTP method from \`DELETE\` to \`POST\`.
* Update the task identifier from \`taskId\` to \`agent_id\`.
* Update request parameters, add the \`name\` field required for start
* Update error response handling to use \`reason\` and \`detail\` instead of \`message\`.
* Update \`status\` field handling to use the new values.
* Add error-handling mechanisms.
* Test all updated API calls.
* Prepare a fallback plan.

### Troubleshooting [#troubleshooting]

If you encounter problems during the migration process, refer to the following table:

| Error description             | Possible cause                                                      | Recommended action                                                                               |
| ----------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Authentication failed         | Missing or incorrect authentication header or incorrect parameters. | Check that the auth configuration is correct and that the app ID is enabled for the new service. |
| Task cannot be started        | Incorrect request parameter format.                                 | Verify the parameter format against the documentation; ensure \`languages\` is an array.           |
| Task status cannot be queried | Incorrect \`agent_id\` or the task has already ended.                 | Use the correct \`agent_id\` returned by the \`join\` interface.                                     |
| Audio subscription issues     | Subscription config doesn't match UID in the channel.               | Check that \`subscribeAudioUids\` matches actual UIDs in the channel.                              |
| Recognition result problem    | Incorrect language configuration.                                   | Ensure that the \`languages\` array includes a valid language code, such as \`["en-US"]\`            |

## FAQs [#faqs]

#### Is version 7.x compatible with version 6.x? [#is-version-7x-compatible-with-version-6x]

No, version 7.x is not compatible with version 6.x. Version 7.x refactored the API to provide more stable services, simplified API processes, and added new features such as language identification at the UID level. Code migration is required following this guide.

#### Do I need to keep the logic to obtain a \`builderToken\` from version 6.x? [#do-i-need-to-keep-the-logic-to-obtain-a-buildertoken-from-version-6x]

No. Version 7.x removes the process of obtaining \`builderToken\` through the acquire interface, and this parameter is no longer required for API calls.

#### Does version 7.x support string-type UIDs? [#does-version-7x-support-string-type-uids]

String-type UIDs are not supported. The current version still uses integer-type UIDs, but they are passed as strings in the API for future compatibility.

#### Are there any changes to the task status field? [#are-there-any-changes-to-the-task-status-field]

Yes. The \`status\` field in the \`join\` response has been updated. The following values have been removed: \`PREPARING\`, \`PREPARED\`, \`CREATED\`, \`STARTED\`, \`IN_PROGRESS\`, and \`FAILURE_STOP\`. The following values have been added: \`RUNNING\`, \`RECOVERING\`, and \`FAILED\`.

#### Do I need to update call frequency or limits? [#do-i-need-to-update-call-frequency-or-limits]

Basic call rates and limits remain the same. Refer to the latest documentation for detailed limit specifications.

#### Are there changes to error codes returned by API requests? [#are-there-changes-to-error-codes-returned-by-api-requests]

Yes, version 7.x has standardized error codes. See [Update response processing](#update-response-processing) for details.

#### How can I verify that the new API works correctly after migration? [#how-can-i-verify-that-the-new-api-works-correctly-after-migration]

Follow these steps to validate functionality after migration:

1. Start a task and obtain the \`agent_id\`
2. Query the task status to confirm it is running properly
3. Conduct speech recognition tests and compare recognition results
4. Test task stopping and configuration update functions

#### How can I ensure smooth migration? [#how-can-i-ensure-smooth-migration]

Use the following approach to ensure smooth migration:

* Complete migration and testing in a staging environment
* Prepare a fallback plan and temporarily maintain the old version code
* Use a phased rollout, starting with non-critical services
* Monitor the new API's performance and error rate before full deployment
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This document guides you through migrating from version 6.x of Real-Time STT to the latest version 7.x. The updated architecture delivers improved stability, a simplified API workflow, and enhanced functionality to support a broader range of scenarios."
  }, {
    heading: undefined,
    content: "Thoroughly test your implementation during the migration process and prepare a fallback plan. Complete verification in a test environment before deploying it to production."
  }, {
    heading: "version-differences-and-upgrade-advantages",
    content: "This section summarizes the key differences between major versions and the benefits of upgrading."
  }, {
    heading: "version-history",
    content: "Version 7.x is the latest recommended release. It offers several key improvements over version 6.x:"
  }, {
    heading: "version-history",
    content: "**Simplified API workflow**: Removes the need to obtain a `builderToken` through the `acquire` interface."
  }, {
    heading: "version-history",
    content: "**Consistent API naming**: Aligns AI product APIs with the Convo AI RESTful API naming conventions."
  }, {
    heading: "version-history",
    content: "**Extended functionality**: Adds improved language recognition configuration at the UID level."
  }, {
    heading: "version-history",
    content: "**Standardized URL paths**: Keeps the domain `api.agora.io` and standardizes the path structure."
  }, {
    heading: "api-endpoint-and-method-name-changes",
    content: "6.x"
  }, {
    heading: "api-endpoint-and-method-name-changes",
    content: "7.x"
  }, {
    heading: "api-endpoint-and-method-name-changes",
    content: "Summary"
  }, {
    heading: "api-endpoint-and-method-name-changes",
    content: "`acquire`"
  }, {
    heading: "api-endpoint-and-method-name-changes",
    content: "This method has been removed."
  }, {
    heading: "api-endpoint-and-method-name-changes",
    content: "The process of obtaining a `builderToken` through the `acquire` interface has been removed in version 7.x."
  }, {
    heading: "api-endpoint-and-method-name-changes",
    content: "`start`"
  }, {
    heading: "api-endpoint-and-method-name-changes",
    content: "`join`"
  }, {
    heading: "api-endpoint-and-method-name-changes",
    content: "The method for starting an STT task has been renamed to `join`."
  }, {
    heading: "api-endpoint-and-method-name-changes",
    content: "`query`"
  }, {
    heading: "api-endpoint-and-method-name-changes",
    content: "`get`"
  }, {
    heading: "api-endpoint-and-method-name-changes",
    content: "The method for querying task status has been renamed to `get`."
  }, {
    heading: "api-endpoint-and-method-name-changes",
    content: "`stop`"
  }, {
    heading: "api-endpoint-and-method-name-changes",
    content: "`leave`"
  }, {
    heading: "api-endpoint-and-method-name-changes",
    content: "Method for stopping a task has been renamed to `leave`."
  }, {
    heading: "api-endpoint-and-method-name-changes",
    content: "`update`"
  }, {
    heading: "api-endpoint-and-method-name-changes",
    content: "`update`"
  }, {
    heading: "api-endpoint-and-method-name-changes",
    content: "The method name remains unchanged."
  }, {
    heading: "url-path-changes",
    content: "API"
  }, {
    heading: "url-path-changes",
    content: "6.x URL"
  }, {
    heading: "url-path-changes",
    content: "7.x URL"
  }, {
    heading: "url-path-changes",
    content: "Start task"
  }, {
    heading: "url-path-changes",
    content: "`https://api.agora.io/v1/projects/{{appId}}/rtsc/speech-to-text/tasks?builderToken={{tokenName}}`"
  }, {
    heading: "url-path-changes",
    content: "`https://api.agora.io/api/speech-to-text/v1/projects/{appid}/join`"
  }, {
    heading: "url-path-changes",
    content: "Query status"
  }, {
    heading: "url-path-changes",
    content: "`https://api.agora.io/v1/projects/{{appId}}/rtsc/speech-to-text/tasks/{{taskId}}?builderToken={{tokenName}}`"
  }, {
    heading: "url-path-changes",
    content: "`https://api.agora.io/api/speech-to-text/v1/projects/{appid}/agents/{agent_id}`"
  }, {
    heading: "url-path-changes",
    content: "Stop task"
  }, {
    heading: "url-path-changes",
    content: "`https://api.agora.io/v1/projects/{{appId}}/rtsc/speech-to-text/tasks/{{taskId}}?builderToken={{tokenName}}`"
  }, {
    heading: "url-path-changes",
    content: "`https://api.agora.io/api/speech-to-text/v1/projects/{appid}/agents/{agent_id}/leave`"
  }, {
    heading: "url-path-changes",
    content: "Update configuration"
  }, {
    heading: "url-path-changes",
    content: "`https://api.agora.io/v1/projects/{{appId}}/rtsc/speech-to-text/tasks/{{taskId}}?builderToken={{tokenName}}`"
  }, {
    heading: "url-path-changes",
    content: "`https://api.agora.io/api/speech-to-text/v1/projects/{appid}/agents/{agent_id}/update`"
  }, {
    heading: "parameter-changes",
    content: "Task identifier changes"
  }, {
    heading: "parameter-changes",
    content: "6.x: Uses `taskId to` identify tasks"
  }, {
    heading: "parameter-changes",
    content: "7.x: Uses `agent_id` to identify tasks"
  }, {
    heading: "parameter-changes",
    content: "Authentication method changes"
  }, {
    heading: "parameter-changes",
    content: "6.x: Need to call `acquire` to obtain a `builderToken` first. Subsequent requests were passed through URL parameters."
  }, {
    heading: "parameter-changes",
    content: "7.x: Removes the process of obtaining a `builderToken` through the `acquire` interface, simplifying the API call process."
  }, {
    heading: "request-parameter-changes",
    content: "Parameters added to the `join` method (formerly `start`):"
  }, {
    heading: "request-parameter-changes",
    content: "`name`: Required. A unique task name of up to 64 characters. This parameter is used for task deduplication to ensure that only one speech-to-text task runs in the same channel. To run multiple speech-to-text tasks in a channel, set different `name` values."
  }, {
    heading: "other-changes",
    content: "URL path standardization: Version 7.x uses the same domain name `api.agora.io` but introduces a more standardized path structure, such as `/api/speech-to-text/v1/projects/{appid}/`."
  }, {
    heading: "other-changes",
    content: "HTTP method standardization: The `stop` method now uses `POST` instead of `DELETE` to better comply with RESTful conventions."
  }, {
    heading: "other-changes",
    content: "Error response format: Version 7.x error responses include more detailed information. The `message` field has been replaced by two fields: `reason`, which contains the reason for the failure, and `detail`, which provides additional details."
  }, {
    heading: "other-changes",
    content: "`status` field values: The `status` field in the `join` response has been updated. The following values have been removed: `PREPARING`, `PREPARED`, `CREATED`, `STARTED`, `IN_PROGRESS`, and `FAILURE_STOP`. The following values have been added: `RUNNING`, `RECOVERING`, and `FAILED`."
  }, {
    heading: "migrate-to-7x",
    content: "This section guides you through the migration process."
  }, {
    heading: "migration-steps",
    content: "The migration steps are as follows:"
  }, {
    heading: "update-the-api-call-process",
    content: "In version 6.x, the basic process was as follows:"
  }, {
    heading: "update-the-api-call-process",
    content: "Call `acquire` to get a `builderToken`."
  }, {
    heading: "update-the-api-call-process",
    content: "Use the `builderToken` to call `start` and begin the task."
  }, {
    heading: "update-the-api-call-process",
    content: "Call `query` to check the task status."
  }, {
    heading: "update-the-api-call-process",
    content: "Call `stop` to end the task."
  }, {
    heading: "update-the-api-call-process",
    content: "Call `update` to modify the task configuration (optional)."
  }, {
    heading: "update-the-api-call-process",
    content: "For version 7.x, modify the API call sequence as follows:"
  }, {
    heading: "update-the-api-call-process",
    content: "Call `join` to start the task and get the `agent_id`."
  }, {
    heading: "update-the-api-call-process",
    content: "Call `get` to check the task status."
  }, {
    heading: "update-the-api-call-process",
    content: "Call `leave` to stop the task."
  }, {
    heading: "update-the-api-call-process",
    content: "Call `update` to modify the task configuration (optional)."
  }, {
    heading: "update-the-url-and-authentication-method",
    content: "Remove all calls to `acquire` and the `builderToken` processing logic."
  }, {
    heading: "update-the-url-and-authentication-method",
    content: "Update the API path from `/v1/projects/{{appId}}/rtsc/speech-to-text/` to `/api/speech-to-text/v1/projects/{appid}/`."
  }, {
    heading: "update-the-url-and-authentication-method",
    content: "Update the request path and parameters according to the new API specification."
  }, {
    heading: "update-the-url-and-authentication-method",
    content: "Add the `name` parameter to the `join` request (required)."
  }, {
    heading: "update-the-task-identifier",
    content: "Update all uses of `taskId` in the code to `agent_id` and ensure that subsequent operations use the correct task identifier."
  }, {
    heading: "update-response-processing",
    content: "Update the response processing logic to adapt to the new response format:"
  }, {
    heading: "update-response-processing",
    content: "Successful calls to `join`, `get`, and `update` return an object containing `status`, `create_ts` and `agent_id`."
  }, {
    heading: "update-response-processing",
    content: "Failed calls to `join`, `get`, and `update` return `reason` and `detail` fields."
  }, {
    heading: "update-response-processing",
    content: "Update status field handling to account for removed values (`PREPARING`, `PREPARED`, `CREATED`, `STARTED`, `IN_PROGRESS`, `FAILURE_STOP`) and new values (`RUNNING`, `RECOVERING`, `FAILED`)."
  }, {
    heading: "code-comparison",
    content: "Comparison between 6.x and 7.x code:"
  }, {
    heading: "migration-checklist",
    content: "Remove all code related to the `acquire` method."
  }, {
    heading: "migration-checklist",
    content: "Update all API calls to use the latest URLs."
  }, {
    heading: "migration-checklist",
    content: "Replace `start` with `join`."
  }, {
    heading: "migration-checklist",
    content: "Replace `query` with `get` ."
  }, {
    heading: "migration-checklist",
    content: "Replace `stop` with `leave` and change the HTTP method from `DELETE` to `POST`."
  }, {
    heading: "migration-checklist",
    content: "Update the task identifier from `taskId` to `agent_id`."
  }, {
    heading: "migration-checklist",
    content: "Update request parameters, add the `name` field required for start"
  }, {
    heading: "migration-checklist",
    content: "Update error response handling to use `reason` and `detail` instead of `message`."
  }, {
    heading: "migration-checklist",
    content: "Update `status` field handling to use the new values."
  }, {
    heading: "migration-checklist",
    content: "Add error-handling mechanisms."
  }, {
    heading: "migration-checklist",
    content: "Test all updated API calls."
  }, {
    heading: "migration-checklist",
    content: "Prepare a fallback plan."
  }, {
    heading: "troubleshooting",
    content: "If you encounter problems during the migration process, refer to the following table:"
  }, {
    heading: "troubleshooting",
    content: "Error description"
  }, {
    heading: "troubleshooting",
    content: "Possible cause"
  }, {
    heading: "troubleshooting",
    content: "Recommended action"
  }, {
    heading: "troubleshooting",
    content: "Authentication failed"
  }, {
    heading: "troubleshooting",
    content: "Missing or incorrect authentication header or incorrect parameters."
  }, {
    heading: "troubleshooting",
    content: "Check that the auth configuration is correct and that the app ID is enabled for the new service."
  }, {
    heading: "troubleshooting",
    content: "Task cannot be started"
  }, {
    heading: "troubleshooting",
    content: "Incorrect request parameter format."
  }, {
    heading: "troubleshooting",
    content: "Verify the parameter format against the documentation; ensure `languages` is an array."
  }, {
    heading: "troubleshooting",
    content: "Task status cannot be queried"
  }, {
    heading: "troubleshooting",
    content: "Incorrect `agent_id` or the task has already ended."
  }, {
    heading: "troubleshooting",
    content: "Use the correct `agent_id` returned by the `join` interface."
  }, {
    heading: "troubleshooting",
    content: "Audio subscription issues"
  }, {
    heading: "troubleshooting",
    content: "Subscription config doesn't match UID in the channel."
  }, {
    heading: "troubleshooting",
    content: "Check that `subscribeAudioUids` matches actual UIDs in the channel."
  }, {
    heading: "troubleshooting",
    content: "Recognition result problem"
  }, {
    heading: "troubleshooting",
    content: "Incorrect language configuration."
  }, {
    heading: "troubleshooting",
    content: 'Ensure that the `languages` array includes a valid language code, such as `["en-US"]`'
  }, {
    heading: "is-version-7x-compatible-with-version-6x",
    content: "No, version 7.x is not compatible with version 6.x. Version 7.x refactored the API to provide more stable services, simplified API processes, and added new features such as language identification at the UID level. Code migration is required following this guide."
  }, {
    heading: "do-i-need-to-keep-the-logic-to-obtain-a-buildertoken-from-version-6x",
    content: "No. Version 7.x removes the process of obtaining `builderToken` through the acquire interface, and this parameter is no longer required for API calls."
  }, {
    heading: "does-version-7x-support-string-type-uids",
    content: "String-type UIDs are not supported. The current version still uses integer-type UIDs, but they are passed as strings in the API for future compatibility."
  }, {
    heading: "are-there-any-changes-to-the-task-status-field",
    content: "Yes. The `status` field in the `join` response has been updated. The following values have been removed: `PREPARING`, `PREPARED`, `CREATED`, `STARTED`, `IN_PROGRESS`, and `FAILURE_STOP`. The following values have been added: `RUNNING`, `RECOVERING`, and `FAILED`."
  }, {
    heading: "do-i-need-to-update-call-frequency-or-limits",
    content: "Basic call rates and limits remain the same. Refer to the latest documentation for detailed limit specifications."
  }, {
    heading: "are-there-changes-to-error-codes-returned-by-api-requests",
    content: "Yes, version 7.x has standardized error codes. See Update response processing for details."
  }, {
    heading: "how-can-i-verify-that-the-new-api-works-correctly-after-migration",
    content: "Follow these steps to validate functionality after migration:"
  }, {
    heading: "how-can-i-verify-that-the-new-api-works-correctly-after-migration",
    content: "Start a task and obtain the `agent_id`"
  }, {
    heading: "how-can-i-verify-that-the-new-api-works-correctly-after-migration",
    content: "Query the task status to confirm it is running properly"
  }, {
    heading: "how-can-i-verify-that-the-new-api-works-correctly-after-migration",
    content: "Conduct speech recognition tests and compare recognition results"
  }, {
    heading: "how-can-i-verify-that-the-new-api-works-correctly-after-migration",
    content: "Test task stopping and configuration update functions"
  }, {
    heading: "how-can-i-ensure-smooth-migration",
    content: "Use the following approach to ensure smooth migration:"
  }, {
    heading: "how-can-i-ensure-smooth-migration",
    content: "Complete migration and testing in a staging environment"
  }, {
    heading: "how-can-i-ensure-smooth-migration",
    content: "Prepare a fallback plan and temporarily maintain the old version code"
  }, {
    heading: "how-can-i-ensure-smooth-migration",
    content: "Use a phased rollout, starting with non-critical services"
  }, {
    heading: "how-can-i-ensure-smooth-migration",
    content: "Monitor the new API's performance and error rate before full deployment"
  }],
  headings: [{
    id: "version-differences-and-upgrade-advantages",
    content: "Version differences and upgrade advantages"
  }, {
    id: "version-history",
    content: "Version history"
  }, {
    id: "major-changes",
    content: "Major changes"
  }, {
    id: "api-endpoint-and-method-name-changes",
    content: "API endpoint and method name changes"
  }, {
    id: "url-path-changes",
    content: "URL path changes"
  }, {
    id: "parameter-changes",
    content: "Parameter changes"
  }, {
    id: "request-parameter-changes",
    content: "Request parameter changes"
  }, {
    id: "other-changes",
    content: "Other changes"
  }, {
    id: "migrate-to-7x",
    content: "Migrate to 7.x"
  }, {
    id: "migration-steps",
    content: "Migration steps"
  }, {
    id: "update-the-api-call-process",
    content: "Update the API call process"
  }, {
    id: "update-the-url-and-authentication-method",
    content: "Update the URL and authentication method"
  }, {
    id: "update-the-task-identifier",
    content: "Update the task identifier"
  }, {
    id: "update-response-processing",
    content: "Update response processing"
  }, {
    id: "code-comparison",
    content: "Code comparison"
  }, {
    id: "6x",
    content: "6.x"
  }, {
    id: "7x-code",
    content: "7.x code"
  }, {
    id: "migration-checklist",
    content: "Migration checklist"
  }, {
    id: "troubleshooting",
    content: "Troubleshooting"
  }, {
    id: "faqs",
    content: "FAQs"
  }, {
    id: "is-version-7x-compatible-with-version-6x",
    content: "Is version 7.x compatible with version 6.x?"
  }, {
    id: "do-i-need-to-keep-the-logic-to-obtain-a-buildertoken-from-version-6x",
    content: "Do I need to keep the logic to obtain a `builderToken` from version 6.x?"
  }, {
    id: "does-version-7x-support-string-type-uids",
    content: "Does version 7.x support string-type UIDs?"
  }, {
    id: "are-there-any-changes-to-the-task-status-field",
    content: "Are there any changes to the task status field?"
  }, {
    id: "do-i-need-to-update-call-frequency-or-limits",
    content: "Do I need to update call frequency or limits?"
  }, {
    id: "are-there-changes-to-error-codes-returned-by-api-requests",
    content: "Are there changes to error codes returned by API requests?"
  }, {
    id: "how-can-i-verify-that-the-new-api-works-correctly-after-migration",
    content: "How can I verify that the new API works correctly after migration?"
  }, {
    id: "how-can-i-ensure-smooth-migration",
    content: "How can I ensure smooth migration?"
  }]
};
export let toc = [{
  depth: 2,
  url: "#version-differences-and-upgrade-advantages",
  title: _jsx(_Fragment, {
    children: "Version differences and upgrade advantages"
  })
}, {
  depth: 3,
  url: "#version-history",
  title: _jsx(_Fragment, {
    children: "Version history"
  })
}, {
  depth: 3,
  url: "#major-changes",
  title: _jsx(_Fragment, {
    children: "Major changes"
  })
}, {
  depth: 4,
  url: "#api-endpoint-and-method-name-changes",
  title: _jsx(_Fragment, {
    children: "API endpoint and method name changes"
  })
}, {
  depth: 4,
  url: "#url-path-changes",
  title: _jsx(_Fragment, {
    children: "URL path changes"
  })
}, {
  depth: 4,
  url: "#parameter-changes",
  title: _jsx(_Fragment, {
    children: "Parameter changes"
  })
}, {
  depth: 4,
  url: "#request-parameter-changes",
  title: _jsx(_Fragment, {
    children: "Request parameter changes"
  })
}, {
  depth: 4,
  url: "#other-changes",
  title: _jsx(_Fragment, {
    children: "Other changes"
  })
}, {
  depth: 2,
  url: "#migrate-to-7x",
  title: _jsx(_Fragment, {
    children: "Migrate to 7.x"
  })
}, {
  depth: 3,
  url: "#migration-steps",
  title: _jsx(_Fragment, {
    children: "Migration steps"
  })
}, {
  depth: 4,
  url: "#update-the-api-call-process",
  title: _jsx(_Fragment, {
    children: "Update the API call process"
  })
}, {
  depth: 4,
  url: "#update-the-url-and-authentication-method",
  title: _jsx(_Fragment, {
    children: "Update the URL and authentication method"
  })
}, {
  depth: 4,
  url: "#update-the-task-identifier",
  title: _jsx(_Fragment, {
    children: "Update the task identifier"
  })
}, {
  depth: 4,
  url: "#update-response-processing",
  title: _jsx(_Fragment, {
    children: "Update response processing"
  })
}, {
  depth: 3,
  url: "#code-comparison",
  title: _jsx(_Fragment, {
    children: "Code comparison"
  })
}, {
  depth: 4,
  url: "#6x",
  title: _jsx(_Fragment, {
    children: "6.x"
  })
}, {
  depth: 4,
  url: "#7x-code",
  title: _jsx(_Fragment, {
    children: "7.x code"
  })
}, {
  depth: 3,
  url: "#migration-checklist",
  title: _jsx(_Fragment, {
    children: "Migration checklist"
  })
}, {
  depth: 3,
  url: "#troubleshooting",
  title: _jsx(_Fragment, {
    children: "Troubleshooting"
  })
}, {
  depth: 2,
  url: "#faqs",
  title: _jsx(_Fragment, {
    children: "FAQs"
  })
}, {
  depth: 4,
  url: "#is-version-7x-compatible-with-version-6x",
  title: _jsx(_Fragment, {
    children: "Is version 7.x compatible with version 6.x?"
  })
}, {
  depth: 4,
  url: "#do-i-need-to-keep-the-logic-to-obtain-a-buildertoken-from-version-6x",
  title: _jsxs(_Fragment, {
    children: ["Do I need to keep the logic to obtain a ", _jsx("code", {
      children: "builderToken"
    }), " from version 6.x?"]
  })
}, {
  depth: 4,
  url: "#does-version-7x-support-string-type-uids",
  title: _jsx(_Fragment, {
    children: "Does version 7.x support string-type UIDs?"
  })
}, {
  depth: 4,
  url: "#are-there-any-changes-to-the-task-status-field",
  title: _jsx(_Fragment, {
    children: "Are there any changes to the task status field?"
  })
}, {
  depth: 4,
  url: "#do-i-need-to-update-call-frequency-or-limits",
  title: _jsx(_Fragment, {
    children: "Do I need to update call frequency or limits?"
  })
}, {
  depth: 4,
  url: "#are-there-changes-to-error-codes-returned-by-api-requests",
  title: _jsx(_Fragment, {
    children: "Are there changes to error codes returned by API requests?"
  })
}, {
  depth: 4,
  url: "#how-can-i-verify-that-the-new-api-works-correctly-after-migration",
  title: _jsx(_Fragment, {
    children: "How can I verify that the new API works correctly after migration?"
  })
}, {
  depth: 4,
  url: "#how-can-i-ensure-smooth-migration",
  title: _jsx(_Fragment, {
    children: "How can I ensure smooth migration?"
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
    children: [_jsx(_components.p, {
      children: "This document guides you through migrating from version 6.x of Real-Time STT to the latest version 7.x. The updated architecture delivers improved stability, a simplified API workflow, and enhanced functionality to support a broader range of scenarios."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Thoroughly test your implementation during the migration process and prepare a fallback plan. Complete verification in a test environment before deploying it to production."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "version-differences-and-upgrade-advantages",
      children: "Version differences and upgrade advantages"
    }), `
`, _jsx(_components.p, {
      children: "This section summarizes the key differences between major versions and the benefits of upgrading."
    }), `
`, _jsx(_components.h3, {
      id: "version-history",
      children: "Version history"
    }), `
`, _jsx(_components.p, {
      children: "Version 7.x is the latest recommended release. It offers several key improvements over version 6.x:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Simplified API workflow"
        }), ": Removes the need to obtain a ", _jsx(_components.code, {
          children: "builderToken"
        }), " through the ", _jsx(_components.code, {
          children: "acquire"
        }), " interface."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Consistent API naming"
        }), ": Aligns AI product APIs with the Convo AI RESTful API naming conventions."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Extended functionality"
        }), ": Adds improved language recognition configuration at the UID level."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Standardized URL paths"
        }), ": Keeps the domain ", _jsx(_components.code, {
          children: "api.agora.io"
        }), " and standardizes the path structure."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "major-changes",
      children: "Major changes"
    }), `
`, _jsx(_components.h4, {
      id: "api-endpoint-and-method-name-changes",
      children: "API endpoint and method name changes"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "6.x"
          }), _jsx(_components.th, {
            children: "7.x"
          }), _jsx(_components.th, {
            children: "Summary"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "acquire"
            })
          }), _jsx(_components.td, {
            children: "This method has been removed."
          }), _jsxs(_components.td, {
            children: ["The process of obtaining a ", _jsx(_components.code, {
              children: "builderToken"
            }), " through the ", _jsx(_components.code, {
              children: "acquire"
            }), " interface has been removed in version 7.x."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "start"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "join"
            })
          }), _jsxs(_components.td, {
            children: ["The method for starting an STT task has been renamed to ", _jsx(_components.code, {
              children: "join"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "query"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "get"
            })
          }), _jsxs(_components.td, {
            children: ["The method for querying task status has been renamed to ", _jsx(_components.code, {
              children: "get"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "stop"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "leave"
            })
          }), _jsxs(_components.td, {
            children: ["Method for stopping a task has been renamed to ", _jsx(_components.code, {
              children: "leave"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "update"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "update"
            })
          }), _jsx(_components.td, {
            children: "The method name remains unchanged."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "url-path-changes",
      children: "URL path changes"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "API"
          }), _jsx(_components.th, {
            children: "6.x URL"
          }), _jsx(_components.th, {
            children: "7.x URL"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Start task"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "https://api.agora.io/v1/projects/{{appId}}/rtsc/speech-to-text/tasks?builderToken={{tokenName}}"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "https://api.agora.io/api/speech-to-text/v1/projects/{appid}/join"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Query status"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "https://api.agora.io/v1/projects/{{appId}}/rtsc/speech-to-text/tasks/{{taskId}}?builderToken={{tokenName}}"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "https://api.agora.io/api/speech-to-text/v1/projects/{appid}/agents/{agent_id}"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Stop task"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "https://api.agora.io/v1/projects/{{appId}}/rtsc/speech-to-text/tasks/{{taskId}}?builderToken={{tokenName}}"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "https://api.agora.io/api/speech-to-text/v1/projects/{appid}/agents/{agent_id}/leave"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Update configuration"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "https://api.agora.io/v1/projects/{{appId}}/rtsc/speech-to-text/tasks/{{taskId}}?builderToken={{tokenName}}"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "https://api.agora.io/api/speech-to-text/v1/projects/{appid}/agents/{agent_id}/update"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "parameter-changes",
      children: "Parameter changes"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Task identifier changes"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["6.x: Uses ", _jsx(_components.code, {
              children: "taskId to"
            }), " identify tasks"]
          }), `
`, _jsxs(_components.li, {
            children: ["7.x: Uses ", _jsx(_components.code, {
              children: "agent_id"
            }), " to identify tasks"]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Authentication method changes"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["6.x: Need to call ", _jsx(_components.code, {
              children: "acquire"
            }), " to obtain a ", _jsx(_components.code, {
              children: "builderToken"
            }), " first. Subsequent requests were passed through URL parameters."]
          }), `
`, _jsxs(_components.li, {
            children: ["7.x: Removes the process of obtaining a ", _jsx(_components.code, {
              children: "builderToken"
            }), " through the ", _jsx(_components.code, {
              children: "acquire"
            }), " interface, simplifying the API call process."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "request-parameter-changes",
      children: "Request parameter changes"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Parameters added to the ", _jsx(_components.code, {
            children: "join"
          }), " method (formerly ", _jsx(_components.code, {
            children: "start"
          }), "):"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "name"
            }), ": Required. A unique task name of up to 64 characters. This parameter is used for task deduplication to ensure that only one speech-to-text task runs in the same channel. To run multiple speech-to-text tasks in a channel, set different ", _jsx(_components.code, {
              children: "name"
            }), " values."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "other-changes",
      children: "Other changes"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["URL path standardization: Version 7.x uses the same domain name ", _jsx(_components.code, {
          children: "api.agora.io"
        }), " but introduces a more standardized path structure, such as ", _jsx(_components.code, {
          children: "/api/speech-to-text/v1/projects/{appid}/"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["HTTP method standardization: The ", _jsx(_components.code, {
          children: "stop"
        }), " method now uses ", _jsx(_components.code, {
          children: "POST"
        }), " instead of ", _jsx(_components.code, {
          children: "DELETE"
        }), " to better comply with RESTful conventions."]
      }), `
`, _jsxs(_components.li, {
        children: ["Error response format: Version 7.x error responses include more detailed information. The ", _jsx(_components.code, {
          children: "message"
        }), " field has been replaced by two fields: ", _jsx(_components.code, {
          children: "reason"
        }), ", which contains the reason for the failure, and ", _jsx(_components.code, {
          children: "detail"
        }), ", which provides additional details."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "status"
        }), " field values: The ", _jsx(_components.code, {
          children: "status"
        }), " field in the ", _jsx(_components.code, {
          children: "join"
        }), " response has been updated. The following values have been removed: ", _jsx(_components.code, {
          children: "PREPARING"
        }), ", ", _jsx(_components.code, {
          children: "PREPARED"
        }), ", ", _jsx(_components.code, {
          children: "CREATED"
        }), ", ", _jsx(_components.code, {
          children: "STARTED"
        }), ", ", _jsx(_components.code, {
          children: "IN_PROGRESS"
        }), ", and ", _jsx(_components.code, {
          children: "FAILURE_STOP"
        }), ". The following values have been added: ", _jsx(_components.code, {
          children: "RUNNING"
        }), ", ", _jsx(_components.code, {
          children: "RECOVERING"
        }), ", and ", _jsx(_components.code, {
          children: "FAILED"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "migrate-to-7x",
      children: "Migrate to 7.x"
    }), `
`, _jsx(_components.p, {
      children: "This section guides you through the migration process."
    }), `
`, _jsx(_components.h3, {
      id: "migration-steps",
      children: "Migration steps"
    }), `
`, _jsx(_components.p, {
      children: "The migration steps are as follows:"
    }), `
`, _jsx(_components.h4, {
      id: "update-the-api-call-process",
      children: "Update the API call process"
    }), `
`, _jsx(_components.p, {
      children: "In version 6.x, the basic process was as follows:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Call ", _jsx(_components.code, {
          children: "acquire"
        }), " to get a ", _jsx(_components.code, {
          children: "builderToken"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Use the ", _jsx(_components.code, {
          children: "builderToken"
        }), " to call ", _jsx(_components.code, {
          children: "start"
        }), " and begin the task."]
      }), `
`, _jsxs(_components.li, {
        children: ["Call ", _jsx(_components.code, {
          children: "query"
        }), " to check the task status."]
      }), `
`, _jsxs(_components.li, {
        children: ["Call ", _jsx(_components.code, {
          children: "stop"
        }), " to end the task."]
      }), `
`, _jsxs(_components.li, {
        children: ["Call ", _jsx(_components.code, {
          children: "update"
        }), " to modify the task configuration (optional)."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "For version 7.x, modify the API call sequence as follows:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Call ", _jsx(_components.code, {
          children: "join"
        }), " to start the task and get the ", _jsx(_components.code, {
          children: "agent_id"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Call ", _jsx(_components.code, {
          children: "get"
        }), " to check the task status."]
      }), `
`, _jsxs(_components.li, {
        children: ["Call ", _jsx(_components.code, {
          children: "leave"
        }), " to stop the task."]
      }), `
`, _jsxs(_components.li, {
        children: ["Call ", _jsx(_components.code, {
          children: "update"
        }), " to modify the task configuration (optional)."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "update-the-url-and-authentication-method",
      children: "Update the URL and authentication method"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Remove all calls to ", _jsx(_components.code, {
          children: "acquire"
        }), " and the ", _jsx(_components.code, {
          children: "builderToken"
        }), " processing logic."]
      }), `
`, _jsxs(_components.li, {
        children: ["Update the API path from ", _jsx(_components.code, {
          children: "/v1/projects/{{appId}}/rtsc/speech-to-text/"
        }), " to ", _jsx(_components.code, {
          children: "/api/speech-to-text/v1/projects/{appid}/"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Update the request path and parameters according to the new API specification."
      }), `
`, _jsxs(_components.li, {
        children: ["Add the ", _jsx(_components.code, {
          children: "name"
        }), " parameter to the ", _jsx(_components.code, {
          children: "join"
        }), " request (required)."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "update-the-task-identifier",
      children: "Update the task identifier"
    }), `
`, _jsxs(_components.p, {
      children: ["Update all uses of ", _jsx(_components.code, {
        children: "taskId"
      }), " in the code to ", _jsx(_components.code, {
        children: "agent_id"
      }), " and ensure that subsequent operations use the correct task identifier."]
    }), `
`, _jsx(_components.h4, {
      id: "update-response-processing",
      children: "Update response processing"
    }), `
`, _jsx(_components.p, {
      children: "Update the response processing logic to adapt to the new response format:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Successful calls to ", _jsx(_components.code, {
          children: "join"
        }), ", ", _jsx(_components.code, {
          children: "get"
        }), ", and ", _jsx(_components.code, {
          children: "update"
        }), " return an object containing ", _jsx(_components.code, {
          children: "status"
        }), ", ", _jsx(_components.code, {
          children: "create_ts"
        }), " and ", _jsx(_components.code, {
          children: "agent_id"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Failed calls to ", _jsx(_components.code, {
          children: "join"
        }), ", ", _jsx(_components.code, {
          children: "get"
        }), ", and ", _jsx(_components.code, {
          children: "update"
        }), " return ", _jsx(_components.code, {
          children: "reason"
        }), " and ", _jsx(_components.code, {
          children: "detail"
        }), " fields."]
      }), `
`, _jsxs(_components.li, {
        children: ["Update status field handling to account for removed values (", _jsx(_components.code, {
          children: "PREPARING"
        }), ", ", _jsx(_components.code, {
          children: "PREPARED"
        }), ", ", _jsx(_components.code, {
          children: "CREATED"
        }), ", ", _jsx(_components.code, {
          children: "STARTED"
        }), ", ", _jsx(_components.code, {
          children: "IN_PROGRESS"
        }), ", ", _jsx(_components.code, {
          children: "FAILURE_STOP"
        }), ") and new values (", _jsx(_components.code, {
          children: "RUNNING"
        }), ", ", _jsx(_components.code, {
          children: "RECOVERING"
        }), ", ", _jsx(_components.code, {
          children: "FAILED"
        }), ")."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "code-comparison",
      children: "Code comparison"
    }), `
`, _jsx(_components.p, {
      children: "Comparison between 6.x and 7.x code:"
    }), `
`, _jsx(_components.h4, {
      id: "6x",
      children: "6.x"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// 1. Get builderToken"
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
              children: " acquireResponse"
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
              children: " await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " fetch"
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
              children: "`https://api.agora.io/v1/projects/${"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "appId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}/rtsc/speech-to-text/builderTokens`"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " method: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'POST'"
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
              children: " body: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "JSON"
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
              children: "stringify"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"instanceId"'
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
              children: '"your-instance-id"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " })"
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
              children: " { "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "tokenName"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " acquireResponse."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "json"
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
              children: "// 2. Start task"
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
              children: " startResponse"
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
              children: " await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " fetch"
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
              children: "`https://api.agora.io/v1/projects/${"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "appId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}/rtsc/speech-to-text/tasks?builderToken=${"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "tokenName"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}`"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " method: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'POST'"
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
              children: " body: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "JSON"
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
              children: "stringify"
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '   "languages"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"zh-CN"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '   "rtcConfig"'
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '     "channelName"'
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
              children: '"your-channel"'
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '     "subBotUid"'
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
              children: '"123"'
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '     "subBotToken"'
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
              children: '"your-sub-token"'
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '     "pubBotUid"'
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
              children: '"456"'
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '     "pubBotToken"'
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
              children: '"your-pub-token"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "   }"
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
              children: "});"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "taskId"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " startResponse."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "json"
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
              children: "// 3. Query task status"
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
              children: " queryResponse"
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
              children: " await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " fetch"
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
              children: "`https://api.agora.io/v1/projects/${"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "appId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}/rtsc/speech-to-text/tasks/${"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "taskId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}?builderToken=${"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "tokenName"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}`"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " method: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'GET'"
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
              children: " status"
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
              children: " await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " queryResponse."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "json"
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
              children: "// 4. Stop task"
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " fetch"
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
              children: "`https://api.agora.io/v1/projects/${"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "appId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}/rtsc/speech-to-text/tasks/${"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "taskId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}?builderToken=${"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "tokenName"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}`"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " method: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'DELETE'"
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
    }), `
`, _jsx(_components.h4, {
      id: "7x-code",
      children: "7.x code"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// 1. Start task"
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
              children: " joinResponse"
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
              children: " await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " fetch"
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
              children: "`https://api.agora.io/api/speech-to-text/v1/projects/${"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "appId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}/join`"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " method: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'POST'"
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
              children: " headers: headers,"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " body: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "JSON"
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
              children: "stringify"
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '   "name"'
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
              children: '"my-stt-task"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ",  "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// New parameter, required"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '   "languages"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"zh-CN"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '   "rtcConfig"'
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '     "channelName"'
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
              children: '"your-channel"'
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '     "subBotUid"'
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
              children: '"123"'
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '     "subBotToken"'
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
              children: '"your-sub-token"'
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '     "pubBotUid"'
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
              children: '"456"'
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '     "pubBotToken"'
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
              children: '"your-pub-token"'
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '     "subscribeAudioUids"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"789"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]  "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// New parameter, optional"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "   }"
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
              children: "});"
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
              children: "// Error handling"
            })
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
              children: "joinResponse.ok) {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " errorData"
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
              children: " await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " joinResponse."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "json"
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
              children: " console."
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
              children: "'Task start failed:'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", errorData);"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " throw"
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
              children: " Error"
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
              children: "`Task start failed: ${"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "errorData"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "reason"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  ||"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " joinResponse"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "status"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}`"
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
              children: " { "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "agent_id"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " joinResponse."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "json"
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
              children: "// 2. Query task status"
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
              children: " getResponse"
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
              children: " await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " fetch"
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
              children: "`https://api.agora.io/api/speech-to-text/v1/projects/${"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "appId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}/agents/${"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "agent_id"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}`"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " method: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'GET'"
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
              children: " headers: headers"
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
              children: "// Task status parsing and handling"
            })
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
              children: " (getResponse.ok) {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " status"
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
              children: " await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " getResponse."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "json"
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
              children: " console."
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
              children: "'Task status:'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", status.status);"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " console."
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
              children: "'Failed to get task status:'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
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
              children: " getResponse."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "json"
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
              children: "// 3. Stop task"
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
              children: " leaveResponse"
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
              children: " await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " fetch"
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
              children: "`https://api.agora.io/api/speech-to-text/v1/projects/${"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "appId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}/agents/${"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "agent_id"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}/leave`"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " method: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'POST'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ",  "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Note: POST in 7.x instead of DELETE"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " headers: headers"
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
              children: "leaveResponse.ok) {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " console."
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
              children: "'Task stop failed:'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
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
              children: " leaveResponse."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "json"
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
    }), `
`, _jsx(_components.h3, {
      id: "migration-checklist",
      children: "Migration checklist"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Remove all code related to the ", _jsx(_components.code, {
          children: "acquire"
        }), " method."]
      }), `
`, _jsx(_components.li, {
        children: "Update all API calls to use the latest URLs."
      }), `
`, _jsxs(_components.li, {
        children: ["Replace ", _jsx(_components.code, {
          children: "start"
        }), " with ", _jsx(_components.code, {
          children: "join"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Replace ", _jsx(_components.code, {
          children: "query"
        }), " with ", _jsx(_components.code, {
          children: "get"
        }), " ."]
      }), `
`, _jsxs(_components.li, {
        children: ["Replace ", _jsx(_components.code, {
          children: "stop"
        }), " with ", _jsx(_components.code, {
          children: "leave"
        }), " and change the HTTP method from ", _jsx(_components.code, {
          children: "DELETE"
        }), " to ", _jsx(_components.code, {
          children: "POST"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Update the task identifier from ", _jsx(_components.code, {
          children: "taskId"
        }), " to ", _jsx(_components.code, {
          children: "agent_id"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Update request parameters, add the ", _jsx(_components.code, {
          children: "name"
        }), " field required for start"]
      }), `
`, _jsxs(_components.li, {
        children: ["Update error response handling to use ", _jsx(_components.code, {
          children: "reason"
        }), " and ", _jsx(_components.code, {
          children: "detail"
        }), " instead of ", _jsx(_components.code, {
          children: "message"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Update ", _jsx(_components.code, {
          children: "status"
        }), " field handling to use the new values."]
      }), `
`, _jsx(_components.li, {
        children: "Add error-handling mechanisms."
      }), `
`, _jsx(_components.li, {
        children: "Test all updated API calls."
      }), `
`, _jsx(_components.li, {
        children: "Prepare a fallback plan."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), `
`, _jsx(_components.p, {
      children: "If you encounter problems during the migration process, refer to the following table:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Error description"
          }), _jsx(_components.th, {
            children: "Possible cause"
          }), _jsx(_components.th, {
            children: "Recommended action"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Authentication failed"
          }), _jsx(_components.td, {
            children: "Missing or incorrect authentication header or incorrect parameters."
          }), _jsx(_components.td, {
            children: "Check that the auth configuration is correct and that the app ID is enabled for the new service."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Task cannot be started"
          }), _jsx(_components.td, {
            children: "Incorrect request parameter format."
          }), _jsxs(_components.td, {
            children: ["Verify the parameter format against the documentation; ensure ", _jsx(_components.code, {
              children: "languages"
            }), " is an array."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Task status cannot be queried"
          }), _jsxs(_components.td, {
            children: ["Incorrect ", _jsx(_components.code, {
              children: "agent_id"
            }), " or the task has already ended."]
          }), _jsxs(_components.td, {
            children: ["Use the correct ", _jsx(_components.code, {
              children: "agent_id"
            }), " returned by the ", _jsx(_components.code, {
              children: "join"
            }), " interface."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audio subscription issues"
          }), _jsx(_components.td, {
            children: "Subscription config doesn't match UID in the channel."
          }), _jsxs(_components.td, {
            children: ["Check that ", _jsx(_components.code, {
              children: "subscribeAudioUids"
            }), " matches actual UIDs in the channel."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Recognition result problem"
          }), _jsx(_components.td, {
            children: "Incorrect language configuration."
          }), _jsxs(_components.td, {
            children: ["Ensure that the ", _jsx(_components.code, {
              children: "languages"
            }), " array includes a valid language code, such as ", _jsx(_components.code, {
              children: '["en-US"]'
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), `
`, _jsx(_components.h4, {
      id: "is-version-7x-compatible-with-version-6x",
      children: "Is version 7.x compatible with version 6.x?"
    }), `
`, _jsx(_components.p, {
      children: "No, version 7.x is not compatible with version 6.x. Version 7.x refactored the API to provide more stable services, simplified API processes, and added new features such as language identification at the UID level. Code migration is required following this guide."
    }), `
`, _jsxs(_components.h4, {
      id: "do-i-need-to-keep-the-logic-to-obtain-a-buildertoken-from-version-6x",
      children: ["Do I need to keep the logic to obtain a ", _jsx(_components.code, {
        children: "builderToken"
      }), " from version 6.x?"]
    }), `
`, _jsxs(_components.p, {
      children: ["No. Version 7.x removes the process of obtaining ", _jsx(_components.code, {
        children: "builderToken"
      }), " through the acquire interface, and this parameter is no longer required for API calls."]
    }), `
`, _jsx(_components.h4, {
      id: "does-version-7x-support-string-type-uids",
      children: "Does version 7.x support string-type UIDs?"
    }), `
`, _jsx(_components.p, {
      children: "String-type UIDs are not supported. The current version still uses integer-type UIDs, but they are passed as strings in the API for future compatibility."
    }), `
`, _jsx(_components.h4, {
      id: "are-there-any-changes-to-the-task-status-field",
      children: "Are there any changes to the task status field?"
    }), `
`, _jsxs(_components.p, {
      children: ["Yes. The ", _jsx(_components.code, {
        children: "status"
      }), " field in the ", _jsx(_components.code, {
        children: "join"
      }), " response has been updated. The following values have been removed: ", _jsx(_components.code, {
        children: "PREPARING"
      }), ", ", _jsx(_components.code, {
        children: "PREPARED"
      }), ", ", _jsx(_components.code, {
        children: "CREATED"
      }), ", ", _jsx(_components.code, {
        children: "STARTED"
      }), ", ", _jsx(_components.code, {
        children: "IN_PROGRESS"
      }), ", and ", _jsx(_components.code, {
        children: "FAILURE_STOP"
      }), ". The following values have been added: ", _jsx(_components.code, {
        children: "RUNNING"
      }), ", ", _jsx(_components.code, {
        children: "RECOVERING"
      }), ", and ", _jsx(_components.code, {
        children: "FAILED"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "do-i-need-to-update-call-frequency-or-limits",
      children: "Do I need to update call frequency or limits?"
    }), `
`, _jsx(_components.p, {
      children: "Basic call rates and limits remain the same. Refer to the latest documentation for detailed limit specifications."
    }), `
`, _jsx(_components.h4, {
      id: "are-there-changes-to-error-codes-returned-by-api-requests",
      children: "Are there changes to error codes returned by API requests?"
    }), `
`, _jsxs(_components.p, {
      children: ["Yes, version 7.x has standardized error codes. See ", _jsx(_components.a, {
        href: "#update-response-processing",
        children: "Update response processing"
      }), " for details."]
    }), `
`, _jsx(_components.h4, {
      id: "how-can-i-verify-that-the-new-api-works-correctly-after-migration",
      children: "How can I verify that the new API works correctly after migration?"
    }), `
`, _jsx(_components.p, {
      children: "Follow these steps to validate functionality after migration:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Start a task and obtain the ", _jsx(_components.code, {
          children: "agent_id"
        })]
      }), `
`, _jsx(_components.li, {
        children: "Query the task status to confirm it is running properly"
      }), `
`, _jsx(_components.li, {
        children: "Conduct speech recognition tests and compare recognition results"
      }), `
`, _jsx(_components.li, {
        children: "Test task stopping and configuration update functions"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "how-can-i-ensure-smooth-migration",
      children: "How can I ensure smooth migration?"
    }), `
`, _jsx(_components.p, {
      children: "Use the following approach to ensure smooth migration:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Complete migration and testing in a staging environment"
      }), `
`, _jsx(_components.li, {
        children: "Prepare a fallback plan and temporarily maintain the old version code"
      }), `
`, _jsx(_components.li, {
        children: "Use a phased rollout, starting with non-critical services"
      }), `
`, _jsx(_components.li, {
        children: "Monitor the new API's performance and error rate before full deployment"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
