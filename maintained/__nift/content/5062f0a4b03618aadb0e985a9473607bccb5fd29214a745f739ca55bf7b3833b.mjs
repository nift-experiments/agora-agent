import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Migrate from Real-Time STT 5.x to 7.x",
  description: "How to migrate from real-time STT 5.x to 7.x."
};
export let _markdown = `

This document guides you through migrating from version 5.x of Real-Time STT to the latest version 7.x. The updated architecture delivers improved stability, a simplified API workflow, and enhanced functionality to support a broader range of scenarios.

<CalloutContainer type="info">
  <CalloutDescription>
    Thoroughly test your implementation during the migration process and prepare a fallback plan. Complete verification in a test environment before deploying it to production.
  </CalloutDescription>
</CalloutContainer>

## Version differences and upgrade advantages [#version-differences-and-upgrade-advantages]

This section summarizes the key differences between major versions and the benefits of upgrading.

### Version history [#version-history]

* Version 5.x had a more complex request structure and deeply nested parameter configurations.
* Version 7.x is the latest recommended release. It offers several key improvements over version 5.x:

  * **Simplified API workflow**: Removes the need to obtain a \`builderToken\` through the \`acquire\` interface.
  * **Consistent API naming**: Follows RESTful naming conventions.
  * **Extended functionality**: Adds support for configuring language settings by UID.
  * **Standardized URL paths**: Retains the same domain but introduces a more structured path format.

### Major changes [#major-changes]

#### API endpoint and method name changes [#api-endpoint-and-method-name-changes]

| 5.x       | 7.x                           | Summary                                                                                                    |
| --------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------- |
| \`acquire\` | This method has been removed. | The process of obtaining a \`builderToken\` through the \`acquire\` interface has been removed in version 7.x. |
| \`stop\`    | \`leave\`                       | Method for stopping a task has been renamed to \`leave\`.                                                    |
| \`start\`   | \`join\`                        | The method for starting an STT task has been renamed to \`join\`.                                            |
| \`update\`  | \`update\`                      | The method name remains unchanged.                                                                         |
| \`query\`   | \`get\`                         | The method for querying task status has been renamed to \`get\`.                                             |

#### URL path changes [#url-path-changes]

| API                  | 5.x URL                                                                                                      | 7.x URL                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| Start task           | \`https://api.agora.io/v1/projects/{{appId}}/rtsc/speech-to-text/tasks?builderToken={{tokenName}}\`            | \`https://api.agora.io/api/speech-to-text/v1/projects/{appid}/join\`                     |
| Query status         | \`https://api.agora.io/v1/projects/{{appId}}/rtsc/speech-to-text/tasks/{{taskId}}?builderToken={{tokenName}}\` | \`https://api.agora.io/api/speech-to-text/v1/projects/{appid}/agents/{agent_id}\`        |
| Stop task            | \`https://api.agora.io/v1/projects/{{appId}}/rtsc/speech-to-text/tasks/{{taskId}}?builderToken={{tokenName}}\` | \`https://api.agora.io/api/speech-to-text/v1/projects/{appid}/agents/{agent_id}/leave\`  |
| Update configuration | \`https://api.agora.io/v1/projects/{{appId}}/rtsc/speech-to-text/tasks/{{taskId}}?builderToken={{tokenName}}\` | \`https://api.agora.io/api/speech-to-text/v1/projects/{appid}/agents/{agent_id}/update\` |

#### Parameter changes [#parameter-changes]

* Task identifier changes
  * 5.x: Uses \`taskId to\` identify tasks
  * 7.x: Uses \`agent_id\` to identify tasks

* Authentication method changes
  * 5.x: Need to call \`acquire\` to obtain a \`builderToken\` first. Subsequent requests were passed through URL parameters.
  * 7.x: Removes the process of obtaining a \`builderToken\` through the \`acquire\` interface, simplifying the API call process.

#### Request parameter changes [#request-parameter-changes]

* Structural differences between 5.x and 7.x:

  * In 5.x, the API uses deeply nested structures such as \`audio.agoraRtcConfig\` and \`config.recognizeConfig\`.
  * In 7.x, the API uses a flatter structure with top-level fields such as \`languages\`, \`rtcConfig\`, and \`captionConfig\`.

* Parameters added to the \`join\` method (formerly \`start\`):

  * \`name\`: Required. A unique task name of up to 64 characters. This parameter is used for task deduplication to ensure that only one speech-to-text task runs in the same channel. To run multiple speech-to-text tasks in a channel, set different \`name\` values.
  * \`uidLanguagesConfig\`: Optional. Allows you to configure different languages for specific UIDs, providing greater flexibility.

#### Other changes [#other-changes]

* URL path standardization: Version 7.x uses the same domain name (\`api.agora.io\`) but introduces a more standardized path structure, such as \`/api/speech-to-text/v1/projects/{appid}/\`.
* HTTP method standardization: Some methods, such as \`stop\`, now use \`POST\` instead of \`DELETE\` to better comply with RESTful conventions.
* Error response format: Version 7.x error responses include more detailed information. The \`message\` field has been replaced by two fields: \`reason\`, which contains the reason for the failure, and \`detail\`, which provides additional details.
* \`status\` field values: The \`status\` field in the \`join\` response has been updated. The following values have been removed: \`PREPARING\`, \`PREPARED\`, \`CREATED\`, \`STARTED\`, \`IN_PROGRESS\`, and \`FAILURE_STOP\`. The following values have been added: \`RUNNING\`, \`RECOVERING\`, and \`FAILED\`.

## Migrate to 7.x [#migrate-to-7x]

There are large differences between the API structure of 5.x and 7.x. This section guides you through the migration process.

### Migration steps [#migration-steps]

The migration steps are as follows:

#### Update the API call process [#update-the-api-call-process]

In version 5.x, the basic process was as follows:

1. Call \`acquire\` to get a \`builderToken\`.
2. Use the \`builderToken\` to call \`start\` and begin the task.
3. Call \`query\` to check the task status.
4. Call \`stop\` to end the task.

For version 7.x, modify the API call sequence as follows:

1. Call \`join\` to start the task and get the \`agent_id\`.
2. Call \`get\` to check the task status.
3. Call \`leave\` to stop the task.
4. Call \`update\` to change the task configuration (optional).

#### Refactor the request body format [#refactor-the-request-body-format]

To refactor the request body format from version 5.x, use the following mapping relationships:

1. Map \`audio.agoraRtcConfig.channelName\` to \`rtcConfig.channelName\`.
2. Map \`audio.agoraRtcConfig.maxIdleTime\` to \`maxIdleTime\`.
3. Map \`config.recognizeConfig.language\` to the \`languages\` array.
4. Map \`audio.agoraRtcConfig.uid\` and \`token\` to \`rtcConfig.subBotUid\` and \`subBotToken\`.
5. Set \`rtcConfig.pubBotUid\` and \`pubBotToken\`, if needed.
6. If storage is required, map the storage configuration to \`captionConfig.storage\`.

#### Update the URL and authentication method [#update-the-url-and-authentication-method]

1. Remove all calls to \`acquire\` and the \`builderToken\` processing logic.
2. Update the API path from \`/v1/projects/{{appId}}/rtsc/speech-to-text/\` to \`/api/speech-to-text/v1/projects/{appid}/\`.
3. Update the task identifier from \`taskId\` to \`agent_id\`.
4. Implement changes in HTTP methods. Note that the request for stopping a task now uses \`POST\` instead of \`DELETE\`.

#### Update response handling [#update-response-handling]

1. Update error response handling to use the \`reason\` and \`detail\` fields instead of \`message\`.
2. Update \`status\` field handling to account for removed values (\`PREPARING\`, \`PREPARED\`, \`CREATED\`, \`STARTED\`, \`IN_PROGRESS\`, \`FAILURE_STOP\`) and new values (\`RUNNING\`, \`RECOVERING\`, \`FAILED\`).

### Code comparison [#code-comparison]

Comparison between 5.x and 7.x code:

#### 5.x [#5x]

\`\`\`js
// 1. Get builderToken
const acquireResponse = await fetch(\`https://api.agora.io/v1/projects/\${appId}/rtsc/speech-to-text/builderTokens\`, {
  method: 'POST',
  body: JSON.stringify({ "instanceId": "your-instance-id" })
});
const { tokenName } = await acquireResponse.json();

// 2. Start the task
const startResponse = await fetch(\`https://api.agora.io/v1/projects/\${appId}/rtsc/speech-to-text/tasks?builderToken=\${tokenName}\`, {
  method: 'POST',
  body: JSON.stringify({
    "audio": {
      "subscribeSource": "AGORARTC",
      "agoraRtcConfig": {
        "channelName": "your-channel",
        "uid": "123",
        "token": "your-token",
        "channelType": "LIVE_TYPE",
        "subscribeConfig": {
          "subscribeMode": "CHANNEL_MODE"
        },
        "maxIdleTime": 60
      }
    },
    "config": {
      "features": ["RECOGNIZE"],
      "recognizeConfig": {
        "language": "zh-CN",
        "profanityFilter": true,
        "output": {
          "destinations": ["AgoraRTCDataStream"]
        }
      }
    }
  })
});
const { taskId } = await startResponse.json();

// 3. Query task status
const queryResponse = await fetch(\`https://api.agora.io/v1/projects/\${appId}/rtsc/speech-to-text/tasks/\${taskId}?builderToken=\${tokenName}\`, {
  method: 'GET'
});
const status = await queryResponse.json();

// 4. Stop the task
await fetch(\`https://api.agora.io/v1/projects/\${appId}/rtsc/speech-to-text/tasks/\${taskId}?builderToken=\${tokenName}\`, {
  method: 'DELETE'
});
\`\`\`

#### 7.x code [#7x-code]

\`\`\`js
// 1. Start the task
const joinResponse = await fetch(\`https://api.agora.io/api/speech-to-text/v1/projects/\${appId}/join\`, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify({
    "name": "my-stt-task",  // New parameter, required
    "languages": ["zh-CN"],  // Convert language string to array
    "maxIdleTime": 60,
    "rtcConfig": {
      "channelName": "your-channel",
      "subBotUid": "123",  // Original uid field
      "subBotToken": "your-sub-token",  // Original token field
      "pubBotUid": "456",  // New field
      "pubBotToken": "your-pub-token",  // New field
      "subscribeAudioUids": ["789"]  // New parameter, optional
    }
  })
});

// Error handling
if (!joinResponse.ok) {
  const errorData = await joinResponse.json();
  console.error('Failed to start the task:', errorData);
  throw new Error(\`Failed to start the task: \${errorData.reason || joinResponse.status}\`);
}

const { agent_id } = await joinResponse.json();

// 2. Query the task status
const getResponse = await fetch(\`https://api.agora.io/api/speech-to-text/v1/projects/\${appId}/agents/\${agent_id}\`, {
  method: 'GET',
  headers: headers
});

const status = await getResponse.json();

// 3. Stop the task
await fetch(\`https://api.agora.io/api/speech-to-text/v1/projects/\${appId}/agents/\${agent_id}/leave\`, {
  method: 'POST',  // Note: In 7.x it is POST, not DELETE
  headers: headers
});
\`\`\`

### Migration checklist [#migration-checklist]

* Remove all code related to the \`acquire\` method.
* Update all API calls to use the latest URLs.
* Replace \`start\` with \`join\`.
* Replace \`query\` with \`get\` .
* Replace \`stop\` with \`leave\` and change the HTTP method from \`DELETE\` to \`POST\`.
* Refactor the request body structure from a nested to a flat structure.
* Update the task identifier from \`taskId\` to \`agent_id\`.
* Add any new parameters that are required.
* Update error response handling to use \`reason\` and \`detail\` instead of \`message\`.
* Update \`status\` field handling to use the new values.
* Add error-handling mechanisms.
* Test all updated API calls.
* Prepare a fallback plan.

### Troubleshooting [#troubleshooting]

If you encounter problems during the migration process, refer to the following table:

| Error description             | Possible cause                                        | Recommended action                                                                               |
| ----------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Authentication failed         | Missing or incorrect authentication header.           | Check that the auth configuration is correct and that the app ID is enabled for the new service. |
| Task cannot be started        | Incorrect request parameter format.                   | Verify the parameter format against the documentation; ensure \`languages\` is an array.           |
| Task status cannot be queried | Incorrect \`agent_id\` or the task has already ended.   | Use the correct \`agent_id\` returned by the \`join\` interface.                                     |
| Audio subscription problem    | Subscription config doesn't match UID in the channel. | Check that \`subscribeAudioUids\` matches actual UIDs in the channel.                              |
| Recognition result problem    | Incorrect language configuration.                     | Ensure that the \`languages\` array includes a valid language code, such as \`["en-US"]\`            |

## FAQs [#faqs]

#### Why should I migrate from version 5.x to 7.x? [#why-should-i-migrate-from-version-5x-to-7x]

Version 7.x delivers a more reliable and robust service, simplifies the API process, and adds new features such as support for language identification at the UID level. It significantly improves both stability and scalability.

#### Do I need to keep both version 5.x and 7.x in my codebase? [#do-i-need-to-keep-both-version-5x-and-7x-in-my-codebase]

No. Migrate fully to version 7.x. Older versions are deprecated and may not be maintained in the future.

#### What should I be aware of during the migration process? [#what-should-i-be-aware-of-during-the-migration-process]

If you're using version 5.x, pay close attention to the complete restructuring of the request body. For all users, make sure to update the API endpoints, remove the acquire-token flow, and implement changes to HTTP methods. For example, the \`stop\` method has changed from \`DELETE\` to \`POST\`.

#### Does version 7.x support string type UIDs? [#does-version-7x-support-string-type-uids]

Currently, UIDs are still treated as integers internally, although they are passed as strings in the API. This prepares for future support of true string UIDs. Version 7.x automatically converts string UIDs to integers for compatibility.

#### Have error codes changed in version 7.x? [#have-error-codes-changed-in-version-7x]

Yes. Version 7.x includes standardized error codes for more consistent handling.

#### How can I verify that the new API works correctly after migration? [#how-can-i-verify-that-the-new-api-works-correctly-after-migration]

Follow these steps to validate the functionality after migration:

* Start a task and obtain the \`agent_id\`.
* Query the task status to confirm it is running.
* Perform speech recognition tests and review the output.
* Test stopping the task and updating its configuration.

#### How can I ensure smooth migration? [#how-can-i-ensure-smooth-migration]

Use the following approach to ensure smooth migration:

* Complete migration and testing in a staging environment.
* Prepare a fallback plan and keep the old version temporarily.
* Use a phased rollout, starting with non-critical services.
* Monitor the new API’s performance and error rate before full deployment.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This document guides you through migrating from version 5.x of Real-Time STT to the latest version 7.x. The updated architecture delivers improved stability, a simplified API workflow, and enhanced functionality to support a broader range of scenarios."
  }, {
    heading: undefined,
    content: "Thoroughly test your implementation during the migration process and prepare a fallback plan. Complete verification in a test environment before deploying it to production."
  }, {
    heading: "version-differences-and-upgrade-advantages",
    content: "This section summarizes the key differences between major versions and the benefits of upgrading."
  }, {
    heading: "version-history",
    content: "Version 5.x had a more complex request structure and deeply nested parameter configurations."
  }, {
    heading: "version-history",
    content: "Version 7.x is the latest recommended release. It offers several key improvements over version 5.x:"
  }, {
    heading: "version-history",
    content: "**Simplified API workflow**: Removes the need to obtain a `builderToken` through the `acquire` interface."
  }, {
    heading: "version-history",
    content: "**Consistent API naming**: Follows RESTful naming conventions."
  }, {
    heading: "version-history",
    content: "**Extended functionality**: Adds support for configuring language settings by UID."
  }, {
    heading: "version-history",
    content: "**Standardized URL paths**: Retains the same domain but introduces a more structured path format."
  }, {
    heading: "api-endpoint-and-method-name-changes",
    content: "5.x"
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
    content: "`stop`"
  }, {
    heading: "api-endpoint-and-method-name-changes",
    content: "`leave`"
  }, {
    heading: "api-endpoint-and-method-name-changes",
    content: "Method for stopping a task has been renamed to `leave`."
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
    content: "`update`"
  }, {
    heading: "api-endpoint-and-method-name-changes",
    content: "`update`"
  }, {
    heading: "api-endpoint-and-method-name-changes",
    content: "The method name remains unchanged."
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
    heading: "url-path-changes",
    content: "API"
  }, {
    heading: "url-path-changes",
    content: "5.x URL"
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
    content: "5.x: Uses `taskId to` identify tasks"
  }, {
    heading: "parameter-changes",
    content: "7.x: Uses `agent_id` to identify tasks"
  }, {
    heading: "parameter-changes",
    content: "Authentication method changes"
  }, {
    heading: "parameter-changes",
    content: "5.x: Need to call `acquire` to obtain a `builderToken` first. Subsequent requests were passed through URL parameters."
  }, {
    heading: "parameter-changes",
    content: "7.x: Removes the process of obtaining a `builderToken` through the `acquire` interface, simplifying the API call process."
  }, {
    heading: "request-parameter-changes",
    content: "Structural differences between 5.x and 7.x:"
  }, {
    heading: "request-parameter-changes",
    content: "In 5.x, the API uses deeply nested structures such as `audio.agoraRtcConfig` and `config.recognizeConfig`."
  }, {
    heading: "request-parameter-changes",
    content: "In 7.x, the API uses a flatter structure with top-level fields such as `languages`, `rtcConfig`, and `captionConfig`."
  }, {
    heading: "request-parameter-changes",
    content: "Parameters added to the `join` method (formerly `start`):"
  }, {
    heading: "request-parameter-changes",
    content: "`name`: Required. A unique task name of up to 64 characters. This parameter is used for task deduplication to ensure that only one speech-to-text task runs in the same channel. To run multiple speech-to-text tasks in a channel, set different `name` values."
  }, {
    heading: "request-parameter-changes",
    content: "`uidLanguagesConfig`: Optional. Allows you to configure different languages for specific UIDs, providing greater flexibility."
  }, {
    heading: "other-changes",
    content: "URL path standardization: Version 7.x uses the same domain name (`api.agora.io`) but introduces a more standardized path structure, such as `/api/speech-to-text/v1/projects/{appid}/`."
  }, {
    heading: "other-changes",
    content: "HTTP method standardization: Some methods, such as `stop`, now use `POST` instead of `DELETE` to better comply with RESTful conventions."
  }, {
    heading: "other-changes",
    content: "Error response format: Version 7.x error responses include more detailed information. The `message` field has been replaced by two fields: `reason`, which contains the reason for the failure, and `detail`, which provides additional details."
  }, {
    heading: "other-changes",
    content: "`status` field values: The `status` field in the `join` response has been updated. The following values have been removed: `PREPARING`, `PREPARED`, `CREATED`, `STARTED`, `IN_PROGRESS`, and `FAILURE_STOP`. The following values have been added: `RUNNING`, `RECOVERING`, and `FAILED`."
  }, {
    heading: "migrate-to-7x",
    content: "There are large differences between the API structure of 5.x and 7.x. This section guides you through the migration process."
  }, {
    heading: "migration-steps",
    content: "The migration steps are as follows:"
  }, {
    heading: "update-the-api-call-process",
    content: "In version 5.x, the basic process was as follows:"
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
    content: "Call `update` to change the task configuration (optional)."
  }, {
    heading: "refactor-the-request-body-format",
    content: "To refactor the request body format from version 5.x, use the following mapping relationships:"
  }, {
    heading: "refactor-the-request-body-format",
    content: "Map `audio.agoraRtcConfig.channelName` to `rtcConfig.channelName`."
  }, {
    heading: "refactor-the-request-body-format",
    content: "Map `audio.agoraRtcConfig.maxIdleTime` to `maxIdleTime`."
  }, {
    heading: "refactor-the-request-body-format",
    content: "Map `config.recognizeConfig.language` to the `languages` array."
  }, {
    heading: "refactor-the-request-body-format",
    content: "Map `audio.agoraRtcConfig.uid` and `token` to `rtcConfig.subBotUid` and `subBotToken`."
  }, {
    heading: "refactor-the-request-body-format",
    content: "Set `rtcConfig.pubBotUid` and `pubBotToken`, if needed."
  }, {
    heading: "refactor-the-request-body-format",
    content: "If storage is required, map the storage configuration to `captionConfig.storage`."
  }, {
    heading: "update-the-url-and-authentication-method",
    content: "Remove all calls to `acquire` and the `builderToken` processing logic."
  }, {
    heading: "update-the-url-and-authentication-method",
    content: "Update the API path from `/v1/projects/{{appId}}/rtsc/speech-to-text/` to `/api/speech-to-text/v1/projects/{appid}/`."
  }, {
    heading: "update-the-url-and-authentication-method",
    content: "Update the task identifier from `taskId` to `agent_id`."
  }, {
    heading: "update-the-url-and-authentication-method",
    content: "Implement changes in HTTP methods. Note that the request for stopping a task now uses `POST` instead of `DELETE`."
  }, {
    heading: "update-response-handling",
    content: "Update error response handling to use the `reason` and `detail` fields instead of `message`."
  }, {
    heading: "update-response-handling",
    content: "Update `status` field handling to account for removed values (`PREPARING`, `PREPARED`, `CREATED`, `STARTED`, `IN_PROGRESS`, `FAILURE_STOP`) and new values (`RUNNING`, `RECOVERING`, `FAILED`)."
  }, {
    heading: "code-comparison",
    content: "Comparison between 5.x and 7.x code:"
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
    content: "Refactor the request body structure from a nested to a flat structure."
  }, {
    heading: "migration-checklist",
    content: "Update the task identifier from `taskId` to `agent_id`."
  }, {
    heading: "migration-checklist",
    content: "Add any new parameters that are required."
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
    content: "Missing or incorrect authentication header."
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
    content: "Audio subscription problem"
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
    heading: "why-should-i-migrate-from-version-5x-to-7x",
    content: "Version 7.x delivers a more reliable and robust service, simplifies the API process, and adds new features such as support for language identification at the UID level. It significantly improves both stability and scalability."
  }, {
    heading: "do-i-need-to-keep-both-version-5x-and-7x-in-my-codebase",
    content: "No. Migrate fully to version 7.x. Older versions are deprecated and may not be maintained in the future."
  }, {
    heading: "what-should-i-be-aware-of-during-the-migration-process",
    content: "If you're using version 5.x, pay close attention to the complete restructuring of the request body. For all users, make sure to update the API endpoints, remove the acquire-token flow, and implement changes to HTTP methods. For example, the `stop` method has changed from `DELETE` to `POST`."
  }, {
    heading: "does-version-7x-support-string-type-uids",
    content: "Currently, UIDs are still treated as integers internally, although they are passed as strings in the API. This prepares for future support of true string UIDs. Version 7.x automatically converts string UIDs to integers for compatibility."
  }, {
    heading: "have-error-codes-changed-in-version-7x",
    content: "Yes. Version 7.x includes standardized error codes for more consistent handling."
  }, {
    heading: "how-can-i-verify-that-the-new-api-works-correctly-after-migration",
    content: "Follow these steps to validate the functionality after migration:"
  }, {
    heading: "how-can-i-verify-that-the-new-api-works-correctly-after-migration",
    content: "Start a task and obtain the `agent_id`."
  }, {
    heading: "how-can-i-verify-that-the-new-api-works-correctly-after-migration",
    content: "Query the task status to confirm it is running."
  }, {
    heading: "how-can-i-verify-that-the-new-api-works-correctly-after-migration",
    content: "Perform speech recognition tests and review the output."
  }, {
    heading: "how-can-i-verify-that-the-new-api-works-correctly-after-migration",
    content: "Test stopping the task and updating its configuration."
  }, {
    heading: "how-can-i-ensure-smooth-migration",
    content: "Use the following approach to ensure smooth migration:"
  }, {
    heading: "how-can-i-ensure-smooth-migration",
    content: "Complete migration and testing in a staging environment."
  }, {
    heading: "how-can-i-ensure-smooth-migration",
    content: "Prepare a fallback plan and keep the old version temporarily."
  }, {
    heading: "how-can-i-ensure-smooth-migration",
    content: "Use a phased rollout, starting with non-critical services."
  }, {
    heading: "how-can-i-ensure-smooth-migration",
    content: "Monitor the new API’s performance and error rate before full deployment."
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
    id: "refactor-the-request-body-format",
    content: "Refactor the request body format"
  }, {
    id: "update-the-url-and-authentication-method",
    content: "Update the URL and authentication method"
  }, {
    id: "update-response-handling",
    content: "Update response handling"
  }, {
    id: "code-comparison",
    content: "Code comparison"
  }, {
    id: "5x",
    content: "5.x"
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
    id: "why-should-i-migrate-from-version-5x-to-7x",
    content: "Why should I migrate from version 5.x to 7.x?"
  }, {
    id: "do-i-need-to-keep-both-version-5x-and-7x-in-my-codebase",
    content: "Do I need to keep both version 5.x and 7.x in my codebase?"
  }, {
    id: "what-should-i-be-aware-of-during-the-migration-process",
    content: "What should I be aware of during the migration process?"
  }, {
    id: "does-version-7x-support-string-type-uids",
    content: "Does version 7.x support string type UIDs?"
  }, {
    id: "have-error-codes-changed-in-version-7x",
    content: "Have error codes changed in version 7.x?"
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
  url: "#refactor-the-request-body-format",
  title: _jsx(_Fragment, {
    children: "Refactor the request body format"
  })
}, {
  depth: 4,
  url: "#update-the-url-and-authentication-method",
  title: _jsx(_Fragment, {
    children: "Update the URL and authentication method"
  })
}, {
  depth: 4,
  url: "#update-response-handling",
  title: _jsx(_Fragment, {
    children: "Update response handling"
  })
}, {
  depth: 3,
  url: "#code-comparison",
  title: _jsx(_Fragment, {
    children: "Code comparison"
  })
}, {
  depth: 4,
  url: "#5x",
  title: _jsx(_Fragment, {
    children: "5.x"
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
  url: "#why-should-i-migrate-from-version-5x-to-7x",
  title: _jsx(_Fragment, {
    children: "Why should I migrate from version 5.x to 7.x?"
  })
}, {
  depth: 4,
  url: "#do-i-need-to-keep-both-version-5x-and-7x-in-my-codebase",
  title: _jsx(_Fragment, {
    children: "Do I need to keep both version 5.x and 7.x in my codebase?"
  })
}, {
  depth: 4,
  url: "#what-should-i-be-aware-of-during-the-migration-process",
  title: _jsx(_Fragment, {
    children: "What should I be aware of during the migration process?"
  })
}, {
  depth: 4,
  url: "#does-version-7x-support-string-type-uids",
  title: _jsx(_Fragment, {
    children: "Does version 7.x support string type UIDs?"
  })
}, {
  depth: 4,
  url: "#have-error-codes-changed-in-version-7x",
  title: _jsx(_Fragment, {
    children: "Have error codes changed in version 7.x?"
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
      children: "This document guides you through migrating from version 5.x of Real-Time STT to the latest version 7.x. The updated architecture delivers improved stability, a simplified API workflow, and enhanced functionality to support a broader range of scenarios."
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
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Version 5.x had a more complex request structure and deeply nested parameter configurations."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Version 7.x is the latest recommended release. It offers several key improvements over version 5.x:"
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
            }), ": Follows RESTful naming conventions."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Extended functionality"
            }), ": Adds support for configuring language settings by UID."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Standardized URL paths"
            }), ": Retains the same domain but introduces a more structured path format."]
          }), `
`]
        }), `
`]
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
            children: "5.x"
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
              children: "update"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "update"
            })
          }), _jsx(_components.td, {
            children: "The method name remains unchanged."
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
            children: "5.x URL"
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
            children: ["5.x: Uses ", _jsx(_components.code, {
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
            children: ["5.x: Need to call ", _jsx(_components.code, {
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
`, _jsx(_components.p, {
          children: "Structural differences between 5.x and 7.x:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["In 5.x, the API uses deeply nested structures such as ", _jsx(_components.code, {
              children: "audio.agoraRtcConfig"
            }), " and ", _jsx(_components.code, {
              children: "config.recognizeConfig"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["In 7.x, the API uses a flatter structure with top-level fields such as ", _jsx(_components.code, {
              children: "languages"
            }), ", ", _jsx(_components.code, {
              children: "rtcConfig"
            }), ", and ", _jsx(_components.code, {
              children: "captionConfig"
            }), "."]
          }), `
`]
        }), `
`]
      }), `
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
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "uidLanguagesConfig"
            }), ": Optional. Allows you to configure different languages for specific UIDs, providing greater flexibility."]
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
        children: ["URL path standardization: Version 7.x uses the same domain name (", _jsx(_components.code, {
          children: "api.agora.io"
        }), ") but introduces a more standardized path structure, such as ", _jsx(_components.code, {
          children: "/api/speech-to-text/v1/projects/{appid}/"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["HTTP method standardization: Some methods, such as ", _jsx(_components.code, {
          children: "stop"
        }), ", now use ", _jsx(_components.code, {
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
      children: "There are large differences between the API structure of 5.x and 7.x. This section guides you through the migration process."
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
      children: "In version 5.x, the basic process was as follows:"
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
        }), " to change the task configuration (optional)."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "refactor-the-request-body-format",
      children: "Refactor the request body format"
    }), `
`, _jsx(_components.p, {
      children: "To refactor the request body format from version 5.x, use the following mapping relationships:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Map ", _jsx(_components.code, {
          children: "audio.agoraRtcConfig.channelName"
        }), " to ", _jsx(_components.code, {
          children: "rtcConfig.channelName"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Map ", _jsx(_components.code, {
          children: "audio.agoraRtcConfig.maxIdleTime"
        }), " to ", _jsx(_components.code, {
          children: "maxIdleTime"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Map ", _jsx(_components.code, {
          children: "config.recognizeConfig.language"
        }), " to the ", _jsx(_components.code, {
          children: "languages"
        }), " array."]
      }), `
`, _jsxs(_components.li, {
        children: ["Map ", _jsx(_components.code, {
          children: "audio.agoraRtcConfig.uid"
        }), " and ", _jsx(_components.code, {
          children: "token"
        }), " to ", _jsx(_components.code, {
          children: "rtcConfig.subBotUid"
        }), " and ", _jsx(_components.code, {
          children: "subBotToken"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Set ", _jsx(_components.code, {
          children: "rtcConfig.pubBotUid"
        }), " and ", _jsx(_components.code, {
          children: "pubBotToken"
        }), ", if needed."]
      }), `
`, _jsxs(_components.li, {
        children: ["If storage is required, map the storage configuration to ", _jsx(_components.code, {
          children: "captionConfig.storage"
        }), "."]
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
`, _jsxs(_components.li, {
        children: ["Update the task identifier from ", _jsx(_components.code, {
          children: "taskId"
        }), " to ", _jsx(_components.code, {
          children: "agent_id"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Implement changes in HTTP methods. Note that the request for stopping a task now uses ", _jsx(_components.code, {
          children: "POST"
        }), " instead of ", _jsx(_components.code, {
          children: "DELETE"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "update-response-handling",
      children: "Update response handling"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Update error response handling to use the ", _jsx(_components.code, {
          children: "reason"
        }), " and ", _jsx(_components.code, {
          children: "detail"
        }), " fields instead of ", _jsx(_components.code, {
          children: "message"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Update ", _jsx(_components.code, {
          children: "status"
        }), " field handling to account for removed values (", _jsx(_components.code, {
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
      children: "Comparison between 5.x and 7.x code:"
    }), `
`, _jsx(_components.h4, {
      id: "5x",
      children: "5.x"
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
              children: "  method: "
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
              children: "  body: "
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
              children: "// 2. Start the task"
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
              children: "  method: "
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
              children: "  body: "
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
              children: '    "audio"'
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
              children: '      "subscribeSource"'
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
              children: '"AGORARTC"'
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
              children: '      "agoraRtcConfig"'
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
              children: '        "channelName"'
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
              children: '        "uid"'
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
              children: '        "token"'
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
              children: '"your-token"'
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
              children: '        "channelType"'
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
              children: '"LIVE_TYPE"'
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
              children: '        "subscribeConfig"'
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
              children: '          "subscribeMode"'
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
              children: '"CHANNEL_MODE"'
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "maxIdleTime"'
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
              children: "60"
            })]
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
              children: "    },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "config"'
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
              children: '      "features"'
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
              children: '"RECOGNIZE"'
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
              children: '      "recognizeConfig"'
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
              children: '        "language"'
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
              children: '"zh-CN"'
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
              children: '        "profanityFilter"'
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "output"'
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
              children: '          "destinations"'
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
              children: '"AgoraRTCDataStream"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
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
              children: "  })"
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
              children: "  method: "
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
              children: "// 4. Stop the task"
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
              children: "  method: "
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
              children: "// 1. Start the task"
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
              children: "  method: "
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
              children: "  headers: headers,"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  body: "
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
              children: '    "name"'
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
              children: '    "languages"'
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
              children: "],  "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Convert language string to array"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "maxIdleTime"'
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
              children: "60"
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
              children: '    "rtcConfig"'
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
              children: '      "channelName"'
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
              children: '      "subBotUid"'
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
              children: ",  "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Original uid field"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "subBotToken"'
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
              children: ",  "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Original token field"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "pubBotUid"'
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
              children: ",  "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// New field"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "pubBotToken"'
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
              children: ",  "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// New field"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "subscribeAudioUids"'
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
              children: "  })"
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
              children: "  const"
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
              children: "  console."
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
              children: "'Failed to start the task:'"
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
              children: "  throw"
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
              children: "`Failed to start the task: ${"
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
              children: " ||"
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
              children: "// 2. Query the task status"
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
              children: "  method: "
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
              children: "  headers: headers"
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
              children: "// 3. Stop the task"
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
              children: "  method: "
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
              children: "// Note: In 7.x it is POST, not DELETE"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  headers: headers"
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
`, _jsx(_components.li, {
        children: "Refactor the request body structure from a nested to a flat structure."
      }), `
`, _jsxs(_components.li, {
        children: ["Update the task identifier from ", _jsx(_components.code, {
          children: "taskId"
        }), " to ", _jsx(_components.code, {
          children: "agent_id"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Add any new parameters that are required."
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
            children: "Missing or incorrect authentication header."
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
            children: "Audio subscription problem"
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
      id: "why-should-i-migrate-from-version-5x-to-7x",
      children: "Why should I migrate from version 5.x to 7.x?"
    }), `
`, _jsx(_components.p, {
      children: "Version 7.x delivers a more reliable and robust service, simplifies the API process, and adds new features such as support for language identification at the UID level. It significantly improves both stability and scalability."
    }), `
`, _jsx(_components.h4, {
      id: "do-i-need-to-keep-both-version-5x-and-7x-in-my-codebase",
      children: "Do I need to keep both version 5.x and 7.x in my codebase?"
    }), `
`, _jsx(_components.p, {
      children: "No. Migrate fully to version 7.x. Older versions are deprecated and may not be maintained in the future."
    }), `
`, _jsx(_components.h4, {
      id: "what-should-i-be-aware-of-during-the-migration-process",
      children: "What should I be aware of during the migration process?"
    }), `
`, _jsxs(_components.p, {
      children: ["If you're using version 5.x, pay close attention to the complete restructuring of the request body. For all users, make sure to update the API endpoints, remove the acquire-token flow, and implement changes to HTTP methods. For example, the ", _jsx(_components.code, {
        children: "stop"
      }), " method has changed from ", _jsx(_components.code, {
        children: "DELETE"
      }), " to ", _jsx(_components.code, {
        children: "POST"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "does-version-7x-support-string-type-uids",
      children: "Does version 7.x support string type UIDs?"
    }), `
`, _jsx(_components.p, {
      children: "Currently, UIDs are still treated as integers internally, although they are passed as strings in the API. This prepares for future support of true string UIDs. Version 7.x automatically converts string UIDs to integers for compatibility."
    }), `
`, _jsx(_components.h4, {
      id: "have-error-codes-changed-in-version-7x",
      children: "Have error codes changed in version 7.x?"
    }), `
`, _jsx(_components.p, {
      children: "Yes. Version 7.x includes standardized error codes for more consistent handling."
    }), `
`, _jsx(_components.h4, {
      id: "how-can-i-verify-that-the-new-api-works-correctly-after-migration",
      children: "How can I verify that the new API works correctly after migration?"
    }), `
`, _jsx(_components.p, {
      children: "Follow these steps to validate the functionality after migration:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Start a task and obtain the ", _jsx(_components.code, {
          children: "agent_id"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Query the task status to confirm it is running."
      }), `
`, _jsx(_components.li, {
        children: "Perform speech recognition tests and review the output."
      }), `
`, _jsx(_components.li, {
        children: "Test stopping the task and updating its configuration."
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
        children: "Complete migration and testing in a staging environment."
      }), `
`, _jsx(_components.li, {
        children: "Prepare a fallback plan and keep the old version temporarily."
      }), `
`, _jsx(_components.li, {
        children: "Use a phased rollout, starting with non-critical services."
      }), `
`, _jsx(_components.li, {
        children: "Monitor the new API’s performance and error rate before full deployment."
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
