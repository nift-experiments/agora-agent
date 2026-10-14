import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Error codes",
  description: "Error codes returned by IoT SDK during runtime, their meanings, and solutions."
};
export let _markdown = `

This page lists the error codes IoT SDK returns during runtime, along with their meanings and, where applicable, how to resolve them.

## General errors [#general-errors]

| Code | Enum                               | Explanation                                                                                                       | Solution                                       |
| ---- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 0    | \`ERR_OKAY\`                         | No error.                                                                                                         |                                                |
| 1    | \`ERR_FAILED\`                       | A generic error. Check the log files to troubleshoot the issue.                                                   |                                                |
| 2    | \`ERR_INVALID_PARAM\`                | An API call used an invalid parameter, for example a channel name that contains illegal characters.               | Correct the parameter and try again.           |
| 3    | \`ERR_INVALID_STATE\`                | The API call is invalid in the current state, for example calling a publish method after disabling local capture. |                                                |
| 4    | \`ERR_NOT_SUPPORTED\`                | The operation isn't supported in the current state.                                                               |                                                |
| 6    | \`ERR_NOT_IN_CHANNEL\`               | The connection hasn't successfully joined a channel.                                                              | Join a channel first.                          |
| 7    | \`ERR_NOT_INITIALIZED\`              | The service isn't initialized.                                                                                    | Call \`agora_rtc_init\` first.                   |
| 8    | \`ERR_NOT_EXIST_CONNECTION\`         | The connection doesn't exist.                                                                                     |                                                |
| 10   | \`ERR_TIMEDOUT\`                     | The API call timed out because processing took longer than 10 seconds.                                            |                                                |
| 11   | \`ERR_NO_MEMORY\`                    | The device is out of memory.                                                                                      | Free up memory.                                |
| 12   | \`ERR_CALL_FAILED\`                  | The API call failed.                                                                                              | Retry with valid parameters.                   |
| 14   | \`ERR_NET_DOWN\`                     | The network is unavailable.                                                                                       | Check the device's network connection.         |
| 17   | \`ERR_JOIN_CHANNEL_REJECTED\`        | The join channel request was rejected. The local user may already be in the channel.                              | Avoid joining the same channel more than once. |
| 18   | \`ERR_LEAVE_CHANNEL_REJECTED\`       | The leave channel request was rejected. The local user has already left the channel.                              |                                                |
| 23   | \`ERR_LICENSE_VERIFICATION_FAILURE\` | SDK initialization failed because the license didn't pass verification.                                           | Verify that the license is valid.              |
| 30   | \`ERR_ENCRYPTION\`                   | An encryption error occurred.                                                                                     | Check your encryption settings.                |
| 31   | \`ERR_DECRYPTION\`                   | A decryption error occurred.                                                                                      | Check your decryption configuration.           |

## Transmission-related errors [#transmission-related-errors]

| Code | Enum                                   | Explanation                                                                                     | Solution                                                                                                                                          |
| ---- | -------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 101  | \`ERR_INVALID_APP_ID\`                   | The App ID isn't valid.                                                                         | Replace it with a valid App ID and rejoin the channel.                                                                                            |
| 102  | \`ERR_INVALID_CHANNEL_NAME\`             | The channel name isn't valid, or the parameter's data type is incorrect.                        | Use a valid channel name and rejoin the channel.                                                                                                  |
| 103  | \`ERR_NO_SERVER_RESOURCES\`              | IoT SDK can't obtain server resources for the specified region.                                 | Retry, or select a different region.                                                                                                              |
| 105  | \`ERR_LOOKUP_CHANNEL_REJECTED\`          | The Agora server rejected the request to look up the channel.                                   | Check whether the RTC token is valid.                                                                                                             |
| 107  | \`ERR_OPEN_CHANNEL_REJECTED\`            | The Agora server rejected the request to create the channel.                                    | Check whether the RTC token is valid.                                                                                                             |
| 109  | \`ERR_TOKEN_EXPIRED\`                    | The RTC token has expired.                                                                      | Generate a new RTC token on your server, and rejoin the channel with it.                                                                          |
| 110  | \`ERR_INVALID_TOKEN\`                    | The token isn't valid.                                                                          | Make sure token authentication is enabled in Agora Console, and that the UID used to generate the token matches the UID used to join the channel. |
| 115  | \`ERR_DYNAMIC_TOKEN_BUT_USE_STATIC_KEY\` | Token authentication is enabled, but the join channel call passed an App ID instead of a token. | Pass a token to the join channel call.                                                                                                            |
| 119  | \`ERR_SET_CLIENT_ROLE_NOT_AUTHORIZED\`   | Switching the user role failed.                                                                 | Rejoin the channel.                                                                                                                               |
| 120  | \`ERR_DECRYPTION_FAILED\`                | Decryption failed. The user may be using an incorrect encryption key or salt.                   | Check your encryption settings, or rejoin the channel.                                                                                            |
| 121  | \`ERR_OPEN_CHANNEL_INVALID_TICKET\`      | A signaling error occurred while opening the channel.                                           | Rejoin the channel.                                                                                                                               |
| 122  | \`ERR_OPEN_CHANNEL_TRY_NEXT_VOS\`        | IoT SDK is switching servers.                                                                   | No action is usually needed; IoT SDK retries automatically.                                                                                       |
| 123  | \`ERR_CLIENT_IS_BANNED_BY_SERVER\`       | The server banned this client.                                                                  | Check whether the license is correct.                                                                                                             |

## Audio-related errors [#audio-related-errors]

| Code | Enum                            | Explanation                                           |
| ---- | ------------------------------- | ----------------------------------------------------- |
| 200  | \`ERR_AUDIO_CODEC_NOT_SUPPORT\`   | IoT SDK doesn't support the audio codec you're using. |
| 201  | \`ERR_AUDIO_INVALID_PCM_LEN\`     | The PCM audio data length isn't valid.                |
| 202  | \`ERR_AUDIO_INVALID_CODEC_PARAM\` | The audio codec parameters aren't valid.              |

## Video-related errors [#video-related-errors]

| Code | Enum                                  | Explanation                                                                                                        |
| ---- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 300  | \`ERR_VIDEO_SEND_OVER_BANDWIDTH_LIMIT\` | Video data is sending too fast and exceeds the bandwidth limit. Packet loss is likely at the current sending rate. |
| 301  | \`ERR_VIDEO_SEND_PACKETIZE_FAILED\`     | Packetizing the video data failed.                                                                                 |

## RDT-related errors [#rdt-related-errors]

| Code | Enum                        | Explanation                                                                 | Solution                                                                 |
| ---- | --------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 600  | \`ERR_RDT_USER_NOT_EXIST\`    | The peer user doesn't exist in the channel.                                 |                                                                          |
| 601  | \`ERR_RDT_USER_NOT_READY\`    | The RDT connection with the peer user isn't established yet.                | Wait for the RDT channel state to become \`RDT_STATE_OPENED\`, then retry. |
| 602  | \`ERR_RDT_DATA_BLOCKED\`      | The send buffer is full.                                                    | Wait for the RDT channel state to become \`RDT_STATE_OPENED\`, then retry. |
| 603  | \`ERR_RDT_CMD_EXCEED_LIMIT\`  | The number of control messages exceeds the limit of 100 packets per second. |                                                                          |
| 604  | \`ERR_RDT_DATA_EXCEED_LIMIT\` | The data message traffic exceeds the limit of 4 Mbps per second.            |                                                                          |

## RTM-related errors [#rtm-related-errors]

| Code | Enum                        | Explanation                                                                | Solution                     |
| ---- | --------------------------- | -------------------------------------------------------------------------- | ---------------------------- |
| 1001 | \`ERR_RTM_NOT_LOGINED\`       | The device isn't logged in to the RTM system.                              |                              |
| 1002 | \`ERR_RTM_HAD_LOGINED\`       | The device is already logged in to the RTM system.                         |                              |
| 1003 | \`ERR_RTM_SEND_TO_SELF\`      | The \`rtmUid\` parameter was set to the local user's own user ID by mistake. |                              |
| 1004 | \`ERR_RTM_EXCEED_MSG_SIZE\`   | The RTM message exceeds the maximum length of 31 KB.                       |                              |
| 1005 | \`ERR_RTM_EXCEED_MSG_CNT\`    | The RTM message sending rate exceeds the limit of 60 messages per second.  |                              |
| 1006 | \`ERR_RTM_EXCEED_SND_BUFFER\` | The message channel is full.                                               | Wait one second, then retry. |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page lists the error codes IoT SDK returns during runtime, along with their meanings and, where applicable, how to resolve them."
  }, {
    heading: "general-errors",
    content: "Code"
  }, {
    heading: "general-errors",
    content: "Enum"
  }, {
    heading: "general-errors",
    content: "Explanation"
  }, {
    heading: "general-errors",
    content: "Solution"
  }, {
    heading: "general-errors",
    content: "0"
  }, {
    heading: "general-errors",
    content: "`ERR_OKAY`"
  }, {
    heading: "general-errors",
    content: "No error."
  }, {
    heading: "general-errors",
    content: "1"
  }, {
    heading: "general-errors",
    content: "`ERR_FAILED`"
  }, {
    heading: "general-errors",
    content: "A generic error. Check the log files to troubleshoot the issue."
  }, {
    heading: "general-errors",
    content: "2"
  }, {
    heading: "general-errors",
    content: "`ERR_INVALID_PARAM`"
  }, {
    heading: "general-errors",
    content: "An API call used an invalid parameter, for example a channel name that contains illegal characters."
  }, {
    heading: "general-errors",
    content: "Correct the parameter and try again."
  }, {
    heading: "general-errors",
    content: "3"
  }, {
    heading: "general-errors",
    content: "`ERR_INVALID_STATE`"
  }, {
    heading: "general-errors",
    content: "The API call is invalid in the current state, for example calling a publish method after disabling local capture."
  }, {
    heading: "general-errors",
    content: "4"
  }, {
    heading: "general-errors",
    content: "`ERR_NOT_SUPPORTED`"
  }, {
    heading: "general-errors",
    content: "The operation isn't supported in the current state."
  }, {
    heading: "general-errors",
    content: "6"
  }, {
    heading: "general-errors",
    content: "`ERR_NOT_IN_CHANNEL`"
  }, {
    heading: "general-errors",
    content: "The connection hasn't successfully joined a channel."
  }, {
    heading: "general-errors",
    content: "Join a channel first."
  }, {
    heading: "general-errors",
    content: "7"
  }, {
    heading: "general-errors",
    content: "`ERR_NOT_INITIALIZED`"
  }, {
    heading: "general-errors",
    content: "The service isn't initialized."
  }, {
    heading: "general-errors",
    content: "Call `agora_rtc_init` first."
  }, {
    heading: "general-errors",
    content: "8"
  }, {
    heading: "general-errors",
    content: "`ERR_NOT_EXIST_CONNECTION`"
  }, {
    heading: "general-errors",
    content: "The connection doesn't exist."
  }, {
    heading: "general-errors",
    content: "10"
  }, {
    heading: "general-errors",
    content: "`ERR_TIMEDOUT`"
  }, {
    heading: "general-errors",
    content: "The API call timed out because processing took longer than 10 seconds."
  }, {
    heading: "general-errors",
    content: "11"
  }, {
    heading: "general-errors",
    content: "`ERR_NO_MEMORY`"
  }, {
    heading: "general-errors",
    content: "The device is out of memory."
  }, {
    heading: "general-errors",
    content: "Free up memory."
  }, {
    heading: "general-errors",
    content: "12"
  }, {
    heading: "general-errors",
    content: "`ERR_CALL_FAILED`"
  }, {
    heading: "general-errors",
    content: "The API call failed."
  }, {
    heading: "general-errors",
    content: "Retry with valid parameters."
  }, {
    heading: "general-errors",
    content: "14"
  }, {
    heading: "general-errors",
    content: "`ERR_NET_DOWN`"
  }, {
    heading: "general-errors",
    content: "The network is unavailable."
  }, {
    heading: "general-errors",
    content: "Check the device's network connection."
  }, {
    heading: "general-errors",
    content: "17"
  }, {
    heading: "general-errors",
    content: "`ERR_JOIN_CHANNEL_REJECTED`"
  }, {
    heading: "general-errors",
    content: "The join channel request was rejected. The local user may already be in the channel."
  }, {
    heading: "general-errors",
    content: "Avoid joining the same channel more than once."
  }, {
    heading: "general-errors",
    content: "18"
  }, {
    heading: "general-errors",
    content: "`ERR_LEAVE_CHANNEL_REJECTED`"
  }, {
    heading: "general-errors",
    content: "The leave channel request was rejected. The local user has already left the channel."
  }, {
    heading: "general-errors",
    content: "23"
  }, {
    heading: "general-errors",
    content: "`ERR_LICENSE_VERIFICATION_FAILURE`"
  }, {
    heading: "general-errors",
    content: "SDK initialization failed because the license didn't pass verification."
  }, {
    heading: "general-errors",
    content: "Verify that the license is valid."
  }, {
    heading: "general-errors",
    content: "30"
  }, {
    heading: "general-errors",
    content: "`ERR_ENCRYPTION`"
  }, {
    heading: "general-errors",
    content: "An encryption error occurred."
  }, {
    heading: "general-errors",
    content: "Check your encryption settings."
  }, {
    heading: "general-errors",
    content: "31"
  }, {
    heading: "general-errors",
    content: "`ERR_DECRYPTION`"
  }, {
    heading: "general-errors",
    content: "A decryption error occurred."
  }, {
    heading: "general-errors",
    content: "Check your decryption configuration."
  }, {
    heading: "transmission-related-errors",
    content: "Code"
  }, {
    heading: "transmission-related-errors",
    content: "Enum"
  }, {
    heading: "transmission-related-errors",
    content: "Explanation"
  }, {
    heading: "transmission-related-errors",
    content: "Solution"
  }, {
    heading: "transmission-related-errors",
    content: "101"
  }, {
    heading: "transmission-related-errors",
    content: "`ERR_INVALID_APP_ID`"
  }, {
    heading: "transmission-related-errors",
    content: "The App ID isn't valid."
  }, {
    heading: "transmission-related-errors",
    content: "Replace it with a valid App ID and rejoin the channel."
  }, {
    heading: "transmission-related-errors",
    content: "102"
  }, {
    heading: "transmission-related-errors",
    content: "`ERR_INVALID_CHANNEL_NAME`"
  }, {
    heading: "transmission-related-errors",
    content: "The channel name isn't valid, or the parameter's data type is incorrect."
  }, {
    heading: "transmission-related-errors",
    content: "Use a valid channel name and rejoin the channel."
  }, {
    heading: "transmission-related-errors",
    content: "103"
  }, {
    heading: "transmission-related-errors",
    content: "`ERR_NO_SERVER_RESOURCES`"
  }, {
    heading: "transmission-related-errors",
    content: "IoT SDK can't obtain server resources for the specified region."
  }, {
    heading: "transmission-related-errors",
    content: "Retry, or select a different region."
  }, {
    heading: "transmission-related-errors",
    content: "105"
  }, {
    heading: "transmission-related-errors",
    content: "`ERR_LOOKUP_CHANNEL_REJECTED`"
  }, {
    heading: "transmission-related-errors",
    content: "The Agora server rejected the request to look up the channel."
  }, {
    heading: "transmission-related-errors",
    content: "Check whether the RTC token is valid."
  }, {
    heading: "transmission-related-errors",
    content: "107"
  }, {
    heading: "transmission-related-errors",
    content: "`ERR_OPEN_CHANNEL_REJECTED`"
  }, {
    heading: "transmission-related-errors",
    content: "The Agora server rejected the request to create the channel."
  }, {
    heading: "transmission-related-errors",
    content: "Check whether the RTC token is valid."
  }, {
    heading: "transmission-related-errors",
    content: "109"
  }, {
    heading: "transmission-related-errors",
    content: "`ERR_TOKEN_EXPIRED`"
  }, {
    heading: "transmission-related-errors",
    content: "The RTC token has expired."
  }, {
    heading: "transmission-related-errors",
    content: "Generate a new RTC token on your server, and rejoin the channel with it."
  }, {
    heading: "transmission-related-errors",
    content: "110"
  }, {
    heading: "transmission-related-errors",
    content: "`ERR_INVALID_TOKEN`"
  }, {
    heading: "transmission-related-errors",
    content: "The token isn't valid."
  }, {
    heading: "transmission-related-errors",
    content: "Make sure token authentication is enabled in Agora Console, and that the UID used to generate the token matches the UID used to join the channel."
  }, {
    heading: "transmission-related-errors",
    content: "115"
  }, {
    heading: "transmission-related-errors",
    content: "`ERR_DYNAMIC_TOKEN_BUT_USE_STATIC_KEY`"
  }, {
    heading: "transmission-related-errors",
    content: "Token authentication is enabled, but the join channel call passed an App ID instead of a token."
  }, {
    heading: "transmission-related-errors",
    content: "Pass a token to the join channel call."
  }, {
    heading: "transmission-related-errors",
    content: "119"
  }, {
    heading: "transmission-related-errors",
    content: "`ERR_SET_CLIENT_ROLE_NOT_AUTHORIZED`"
  }, {
    heading: "transmission-related-errors",
    content: "Switching the user role failed."
  }, {
    heading: "transmission-related-errors",
    content: "Rejoin the channel."
  }, {
    heading: "transmission-related-errors",
    content: "120"
  }, {
    heading: "transmission-related-errors",
    content: "`ERR_DECRYPTION_FAILED`"
  }, {
    heading: "transmission-related-errors",
    content: "Decryption failed. The user may be using an incorrect encryption key or salt."
  }, {
    heading: "transmission-related-errors",
    content: "Check your encryption settings, or rejoin the channel."
  }, {
    heading: "transmission-related-errors",
    content: "121"
  }, {
    heading: "transmission-related-errors",
    content: "`ERR_OPEN_CHANNEL_INVALID_TICKET`"
  }, {
    heading: "transmission-related-errors",
    content: "A signaling error occurred while opening the channel."
  }, {
    heading: "transmission-related-errors",
    content: "Rejoin the channel."
  }, {
    heading: "transmission-related-errors",
    content: "122"
  }, {
    heading: "transmission-related-errors",
    content: "`ERR_OPEN_CHANNEL_TRY_NEXT_VOS`"
  }, {
    heading: "transmission-related-errors",
    content: "IoT SDK is switching servers."
  }, {
    heading: "transmission-related-errors",
    content: "No action is usually needed; IoT SDK retries automatically."
  }, {
    heading: "transmission-related-errors",
    content: "123"
  }, {
    heading: "transmission-related-errors",
    content: "`ERR_CLIENT_IS_BANNED_BY_SERVER`"
  }, {
    heading: "transmission-related-errors",
    content: "The server banned this client."
  }, {
    heading: "transmission-related-errors",
    content: "Check whether the license is correct."
  }, {
    heading: "audio-related-errors",
    content: "Code"
  }, {
    heading: "audio-related-errors",
    content: "Enum"
  }, {
    heading: "audio-related-errors",
    content: "Explanation"
  }, {
    heading: "audio-related-errors",
    content: "200"
  }, {
    heading: "audio-related-errors",
    content: "`ERR_AUDIO_CODEC_NOT_SUPPORT`"
  }, {
    heading: "audio-related-errors",
    content: "IoT SDK doesn't support the audio codec you're using."
  }, {
    heading: "audio-related-errors",
    content: "201"
  }, {
    heading: "audio-related-errors",
    content: "`ERR_AUDIO_INVALID_PCM_LEN`"
  }, {
    heading: "audio-related-errors",
    content: "The PCM audio data length isn't valid."
  }, {
    heading: "audio-related-errors",
    content: "202"
  }, {
    heading: "audio-related-errors",
    content: "`ERR_AUDIO_INVALID_CODEC_PARAM`"
  }, {
    heading: "audio-related-errors",
    content: "The audio codec parameters aren't valid."
  }, {
    heading: "video-related-errors",
    content: "Code"
  }, {
    heading: "video-related-errors",
    content: "Enum"
  }, {
    heading: "video-related-errors",
    content: "Explanation"
  }, {
    heading: "video-related-errors",
    content: "300"
  }, {
    heading: "video-related-errors",
    content: "`ERR_VIDEO_SEND_OVER_BANDWIDTH_LIMIT`"
  }, {
    heading: "video-related-errors",
    content: "Video data is sending too fast and exceeds the bandwidth limit. Packet loss is likely at the current sending rate."
  }, {
    heading: "video-related-errors",
    content: "301"
  }, {
    heading: "video-related-errors",
    content: "`ERR_VIDEO_SEND_PACKETIZE_FAILED`"
  }, {
    heading: "video-related-errors",
    content: "Packetizing the video data failed."
  }, {
    heading: "rdt-related-errors",
    content: "Code"
  }, {
    heading: "rdt-related-errors",
    content: "Enum"
  }, {
    heading: "rdt-related-errors",
    content: "Explanation"
  }, {
    heading: "rdt-related-errors",
    content: "Solution"
  }, {
    heading: "rdt-related-errors",
    content: "600"
  }, {
    heading: "rdt-related-errors",
    content: "`ERR_RDT_USER_NOT_EXIST`"
  }, {
    heading: "rdt-related-errors",
    content: "The peer user doesn't exist in the channel."
  }, {
    heading: "rdt-related-errors",
    content: "601"
  }, {
    heading: "rdt-related-errors",
    content: "`ERR_RDT_USER_NOT_READY`"
  }, {
    heading: "rdt-related-errors",
    content: "The RDT connection with the peer user isn't established yet."
  }, {
    heading: "rdt-related-errors",
    content: "Wait for the RDT channel state to become `RDT_STATE_OPENED`, then retry."
  }, {
    heading: "rdt-related-errors",
    content: "602"
  }, {
    heading: "rdt-related-errors",
    content: "`ERR_RDT_DATA_BLOCKED`"
  }, {
    heading: "rdt-related-errors",
    content: "The send buffer is full."
  }, {
    heading: "rdt-related-errors",
    content: "Wait for the RDT channel state to become `RDT_STATE_OPENED`, then retry."
  }, {
    heading: "rdt-related-errors",
    content: "603"
  }, {
    heading: "rdt-related-errors",
    content: "`ERR_RDT_CMD_EXCEED_LIMIT`"
  }, {
    heading: "rdt-related-errors",
    content: "The number of control messages exceeds the limit of 100 packets per second."
  }, {
    heading: "rdt-related-errors",
    content: "604"
  }, {
    heading: "rdt-related-errors",
    content: "`ERR_RDT_DATA_EXCEED_LIMIT`"
  }, {
    heading: "rdt-related-errors",
    content: "The data message traffic exceeds the limit of 4 Mbps per second."
  }, {
    heading: "rtm-related-errors",
    content: "Code"
  }, {
    heading: "rtm-related-errors",
    content: "Enum"
  }, {
    heading: "rtm-related-errors",
    content: "Explanation"
  }, {
    heading: "rtm-related-errors",
    content: "Solution"
  }, {
    heading: "rtm-related-errors",
    content: "1001"
  }, {
    heading: "rtm-related-errors",
    content: "`ERR_RTM_NOT_LOGINED`"
  }, {
    heading: "rtm-related-errors",
    content: "The device isn't logged in to the RTM system."
  }, {
    heading: "rtm-related-errors",
    content: "1002"
  }, {
    heading: "rtm-related-errors",
    content: "`ERR_RTM_HAD_LOGINED`"
  }, {
    heading: "rtm-related-errors",
    content: "The device is already logged in to the RTM system."
  }, {
    heading: "rtm-related-errors",
    content: "1003"
  }, {
    heading: "rtm-related-errors",
    content: "`ERR_RTM_SEND_TO_SELF`"
  }, {
    heading: "rtm-related-errors",
    content: "The `rtmUid` parameter was set to the local user's own user ID by mistake."
  }, {
    heading: "rtm-related-errors",
    content: "1004"
  }, {
    heading: "rtm-related-errors",
    content: "`ERR_RTM_EXCEED_MSG_SIZE`"
  }, {
    heading: "rtm-related-errors",
    content: "The RTM message exceeds the maximum length of 31 KB."
  }, {
    heading: "rtm-related-errors",
    content: "1005"
  }, {
    heading: "rtm-related-errors",
    content: "`ERR_RTM_EXCEED_MSG_CNT`"
  }, {
    heading: "rtm-related-errors",
    content: "The RTM message sending rate exceeds the limit of 60 messages per second."
  }, {
    heading: "rtm-related-errors",
    content: "1006"
  }, {
    heading: "rtm-related-errors",
    content: "`ERR_RTM_EXCEED_SND_BUFFER`"
  }, {
    heading: "rtm-related-errors",
    content: "The message channel is full."
  }, {
    heading: "rtm-related-errors",
    content: "Wait one second, then retry."
  }],
  headings: [{
    id: "general-errors",
    content: "General errors"
  }, {
    id: "transmission-related-errors",
    content: "Transmission-related errors"
  }, {
    id: "audio-related-errors",
    content: "Audio-related errors"
  }, {
    id: "video-related-errors",
    content: "Video-related errors"
  }, {
    id: "rdt-related-errors",
    content: "RDT-related errors"
  }, {
    id: "rtm-related-errors",
    content: "RTM-related errors"
  }]
};
export let toc = [{
  depth: 2,
  url: "#general-errors",
  title: _jsx(_Fragment, {
    children: "General errors"
  })
}, {
  depth: 2,
  url: "#transmission-related-errors",
  title: _jsx(_Fragment, {
    children: "Transmission-related errors"
  })
}, {
  depth: 2,
  url: "#audio-related-errors",
  title: _jsx(_Fragment, {
    children: "Audio-related errors"
  })
}, {
  depth: 2,
  url: "#video-related-errors",
  title: _jsx(_Fragment, {
    children: "Video-related errors"
  })
}, {
  depth: 2,
  url: "#rdt-related-errors",
  title: _jsx(_Fragment, {
    children: "RDT-related errors"
  })
}, {
  depth: 2,
  url: "#rtm-related-errors",
  title: _jsx(_Fragment, {
    children: "RTM-related errors"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page lists the error codes IoT SDK returns during runtime, along with their meanings and, where applicable, how to resolve them."
    }), `
`, _jsx(_components.h2, {
      id: "general-errors",
      children: "General errors"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Code"
          }), _jsx(_components.th, {
            children: "Enum"
          }), _jsx(_components.th, {
            children: "Explanation"
          }), _jsx(_components.th, {
            children: "Solution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "0"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_OKAY"
            })
          }), _jsx(_components.td, {
            children: "No error."
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "1"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_FAILED"
            })
          }), _jsx(_components.td, {
            children: "A generic error. Check the log files to troubleshoot the issue."
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "2"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_INVALID_PARAM"
            })
          }), _jsx(_components.td, {
            children: "An API call used an invalid parameter, for example a channel name that contains illegal characters."
          }), _jsx(_components.td, {
            children: "Correct the parameter and try again."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "3"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_INVALID_STATE"
            })
          }), _jsx(_components.td, {
            children: "The API call is invalid in the current state, for example calling a publish method after disabling local capture."
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "4"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_NOT_SUPPORTED"
            })
          }), _jsx(_components.td, {
            children: "The operation isn't supported in the current state."
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "6"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_NOT_IN_CHANNEL"
            })
          }), _jsx(_components.td, {
            children: "The connection hasn't successfully joined a channel."
          }), _jsx(_components.td, {
            children: "Join a channel first."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "7"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_NOT_INITIALIZED"
            })
          }), _jsx(_components.td, {
            children: "The service isn't initialized."
          }), _jsxs(_components.td, {
            children: ["Call ", _jsx(_components.code, {
              children: "agora_rtc_init"
            }), " first."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "8"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_NOT_EXIST_CONNECTION"
            })
          }), _jsx(_components.td, {
            children: "The connection doesn't exist."
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "10"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_TIMEDOUT"
            })
          }), _jsx(_components.td, {
            children: "The API call timed out because processing took longer than 10 seconds."
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "11"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_NO_MEMORY"
            })
          }), _jsx(_components.td, {
            children: "The device is out of memory."
          }), _jsx(_components.td, {
            children: "Free up memory."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "12"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_CALL_FAILED"
            })
          }), _jsx(_components.td, {
            children: "The API call failed."
          }), _jsx(_components.td, {
            children: "Retry with valid parameters."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "14"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_NET_DOWN"
            })
          }), _jsx(_components.td, {
            children: "The network is unavailable."
          }), _jsx(_components.td, {
            children: "Check the device's network connection."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "17"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_JOIN_CHANNEL_REJECTED"
            })
          }), _jsx(_components.td, {
            children: "The join channel request was rejected. The local user may already be in the channel."
          }), _jsx(_components.td, {
            children: "Avoid joining the same channel more than once."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "18"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_LEAVE_CHANNEL_REJECTED"
            })
          }), _jsx(_components.td, {
            children: "The leave channel request was rejected. The local user has already left the channel."
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "23"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_LICENSE_VERIFICATION_FAILURE"
            })
          }), _jsx(_components.td, {
            children: "SDK initialization failed because the license didn't pass verification."
          }), _jsx(_components.td, {
            children: "Verify that the license is valid."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "30"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_ENCRYPTION"
            })
          }), _jsx(_components.td, {
            children: "An encryption error occurred."
          }), _jsx(_components.td, {
            children: "Check your encryption settings."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "31"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_DECRYPTION"
            })
          }), _jsx(_components.td, {
            children: "A decryption error occurred."
          }), _jsx(_components.td, {
            children: "Check your decryption configuration."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "transmission-related-errors",
      children: "Transmission-related errors"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Code"
          }), _jsx(_components.th, {
            children: "Enum"
          }), _jsx(_components.th, {
            children: "Explanation"
          }), _jsx(_components.th, {
            children: "Solution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "101"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_INVALID_APP_ID"
            })
          }), _jsx(_components.td, {
            children: "The App ID isn't valid."
          }), _jsx(_components.td, {
            children: "Replace it with a valid App ID and rejoin the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "102"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_INVALID_CHANNEL_NAME"
            })
          }), _jsx(_components.td, {
            children: "The channel name isn't valid, or the parameter's data type is incorrect."
          }), _jsx(_components.td, {
            children: "Use a valid channel name and rejoin the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "103"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_NO_SERVER_RESOURCES"
            })
          }), _jsx(_components.td, {
            children: "IoT SDK can't obtain server resources for the specified region."
          }), _jsx(_components.td, {
            children: "Retry, or select a different region."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "105"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_LOOKUP_CHANNEL_REJECTED"
            })
          }), _jsx(_components.td, {
            children: "The Agora server rejected the request to look up the channel."
          }), _jsx(_components.td, {
            children: "Check whether the RTC token is valid."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "107"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_OPEN_CHANNEL_REJECTED"
            })
          }), _jsx(_components.td, {
            children: "The Agora server rejected the request to create the channel."
          }), _jsx(_components.td, {
            children: "Check whether the RTC token is valid."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "109"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_TOKEN_EXPIRED"
            })
          }), _jsx(_components.td, {
            children: "The RTC token has expired."
          }), _jsx(_components.td, {
            children: "Generate a new RTC token on your server, and rejoin the channel with it."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "110"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_INVALID_TOKEN"
            })
          }), _jsx(_components.td, {
            children: "The token isn't valid."
          }), _jsx(_components.td, {
            children: "Make sure token authentication is enabled in Agora Console, and that the UID used to generate the token matches the UID used to join the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "115"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_DYNAMIC_TOKEN_BUT_USE_STATIC_KEY"
            })
          }), _jsx(_components.td, {
            children: "Token authentication is enabled, but the join channel call passed an App ID instead of a token."
          }), _jsx(_components.td, {
            children: "Pass a token to the join channel call."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "119"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_SET_CLIENT_ROLE_NOT_AUTHORIZED"
            })
          }), _jsx(_components.td, {
            children: "Switching the user role failed."
          }), _jsx(_components.td, {
            children: "Rejoin the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "120"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_DECRYPTION_FAILED"
            })
          }), _jsx(_components.td, {
            children: "Decryption failed. The user may be using an incorrect encryption key or salt."
          }), _jsx(_components.td, {
            children: "Check your encryption settings, or rejoin the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "121"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_OPEN_CHANNEL_INVALID_TICKET"
            })
          }), _jsx(_components.td, {
            children: "A signaling error occurred while opening the channel."
          }), _jsx(_components.td, {
            children: "Rejoin the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "122"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_OPEN_CHANNEL_TRY_NEXT_VOS"
            })
          }), _jsx(_components.td, {
            children: "IoT SDK is switching servers."
          }), _jsx(_components.td, {
            children: "No action is usually needed; IoT SDK retries automatically."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "123"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_CLIENT_IS_BANNED_BY_SERVER"
            })
          }), _jsx(_components.td, {
            children: "The server banned this client."
          }), _jsx(_components.td, {
            children: "Check whether the license is correct."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "audio-related-errors",
      children: "Audio-related errors"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Code"
          }), _jsx(_components.th, {
            children: "Enum"
          }), _jsx(_components.th, {
            children: "Explanation"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "200"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_AUDIO_CODEC_NOT_SUPPORT"
            })
          }), _jsx(_components.td, {
            children: "IoT SDK doesn't support the audio codec you're using."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "201"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_AUDIO_INVALID_PCM_LEN"
            })
          }), _jsx(_components.td, {
            children: "The PCM audio data length isn't valid."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "202"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_AUDIO_INVALID_CODEC_PARAM"
            })
          }), _jsx(_components.td, {
            children: "The audio codec parameters aren't valid."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "video-related-errors",
      children: "Video-related errors"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Code"
          }), _jsx(_components.th, {
            children: "Enum"
          }), _jsx(_components.th, {
            children: "Explanation"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "300"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_VIDEO_SEND_OVER_BANDWIDTH_LIMIT"
            })
          }), _jsx(_components.td, {
            children: "Video data is sending too fast and exceeds the bandwidth limit. Packet loss is likely at the current sending rate."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "301"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_VIDEO_SEND_PACKETIZE_FAILED"
            })
          }), _jsx(_components.td, {
            children: "Packetizing the video data failed."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "rdt-related-errors",
      children: "RDT-related errors"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Code"
          }), _jsx(_components.th, {
            children: "Enum"
          }), _jsx(_components.th, {
            children: "Explanation"
          }), _jsx(_components.th, {
            children: "Solution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "600"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_RDT_USER_NOT_EXIST"
            })
          }), _jsx(_components.td, {
            children: "The peer user doesn't exist in the channel."
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "601"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_RDT_USER_NOT_READY"
            })
          }), _jsx(_components.td, {
            children: "The RDT connection with the peer user isn't established yet."
          }), _jsxs(_components.td, {
            children: ["Wait for the RDT channel state to become ", _jsx(_components.code, {
              children: "RDT_STATE_OPENED"
            }), ", then retry."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "602"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_RDT_DATA_BLOCKED"
            })
          }), _jsx(_components.td, {
            children: "The send buffer is full."
          }), _jsxs(_components.td, {
            children: ["Wait for the RDT channel state to become ", _jsx(_components.code, {
              children: "RDT_STATE_OPENED"
            }), ", then retry."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "603"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_RDT_CMD_EXCEED_LIMIT"
            })
          }), _jsx(_components.td, {
            children: "The number of control messages exceeds the limit of 100 packets per second."
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "604"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_RDT_DATA_EXCEED_LIMIT"
            })
          }), _jsx(_components.td, {
            children: "The data message traffic exceeds the limit of 4 Mbps per second."
          }), _jsx(_components.td, {})]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "rtm-related-errors",
      children: "RTM-related errors"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Code"
          }), _jsx(_components.th, {
            children: "Enum"
          }), _jsx(_components.th, {
            children: "Explanation"
          }), _jsx(_components.th, {
            children: "Solution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "1001"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_RTM_NOT_LOGINED"
            })
          }), _jsx(_components.td, {
            children: "The device isn't logged in to the RTM system."
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "1002"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_RTM_HAD_LOGINED"
            })
          }), _jsx(_components.td, {
            children: "The device is already logged in to the RTM system."
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "1003"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_RTM_SEND_TO_SELF"
            })
          }), _jsxs(_components.td, {
            children: ["The ", _jsx(_components.code, {
              children: "rtmUid"
            }), " parameter was set to the local user's own user ID by mistake."]
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "1004"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_RTM_EXCEED_MSG_SIZE"
            })
          }), _jsx(_components.td, {
            children: "The RTM message exceeds the maximum length of 31 KB."
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "1005"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_RTM_EXCEED_MSG_CNT"
            })
          }), _jsx(_components.td, {
            children: "The RTM message sending rate exceeds the limit of 60 messages per second."
          }), _jsx(_components.td, {})]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "1006"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ERR_RTM_EXCEED_SND_BUFFER"
            })
          }), _jsx(_components.td, {
            children: "The message channel is full."
          }), _jsx(_components.td, {
            children: "Wait one second, then retry."
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
