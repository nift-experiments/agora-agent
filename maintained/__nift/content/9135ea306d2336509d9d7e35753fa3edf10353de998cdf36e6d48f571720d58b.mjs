import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Media Gateway event types",
  description: "Event types returned by Media Gateway channel event callbacks."
};
export let _markdown = `

After you enable the Agora message notification service, Agora sends channel event notifications to your server through HTTPS \`POST\` callbacks. When the callback request body contains \`product_id: 10\`, the event belongs to Media Gateway.

This page describes the Media Gateway event types returned in channel event callbacks.

## \`live_stream_connected\` [#live_stream_connected]

The gateway has received the RTMP or SRT stream and successfully entered the channel.

\`\`\`json
{
  "sid": "55df7402-8778-11ee-92ed-07ec2e86c928",
  "region": "na",
  "domain": "rtls-ingress-prod-na.agoramdn.com",
  "streamKey": "7B***Qbs",
  "rtcInfo": {
    "channel": "123",
    "uid": "1234"
  },
  "transcoding": {
    "audio": {
      "enabled": true,
      "profile": 5
    },
    "video": {
      "enabled": true,
      "bitrate": 3800,
      "fps": 30,
      "height": 1080,
      "width": 1920
    }
  },
  "beginAt": "2023-11-21T02:27:31Z"
}
\`\`\`

| Field         | Type   | Description                                                                                                                                                               |
| :------------ | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`sid\`         | String | The unique ID of each streaming session.                                                                                                                                  |
| \`region\`      | String | The server area that has received the pushed stream.                                                                                                                      |
| \`streamKey\`   | String | The streaming key used by the stream.                                                                                                                                     |
| \`rtcInfo\`     | Object | RTC information, including \`channel\` and \`uid\`. When \`channel\` or \`uid\` is empty or \`0\` in the streaming key, this field stores the generated value used for this stream. |
| \`transcoding\` | Object | Transcoding configuration information used for streaming.                                                                                                                 |
| \`beginAt\`     | String | The streaming start time in RFC 3339 format.                                                                                                                              |

This event is followed by a corresponding \`live_stream_disconnected\` event.

## \`live_stream_disconnected\` [#live_stream_disconnected]

The gateway has actively or passively disconnected and left the channel.

\`\`\`json
{
  "sid": "55df7402-8778-11ee-92ed-07ec2e86c928",
  "region": "na",
  "streamKey": "7B***Qbs",
  "domain": "rtls-ingress-prod-na.agoramdn.com:1935",
  "rtcInfo": {
    "channel": "123",
    "uid": "1234"
  },
  "streamStats": {
    "inputAudioBytes": 281799,
    "inputVideoBytes": 9244544,
    "outputAudioBytes": 130000,
    "outputVideoBytes": 6656704
  },
  "beginAt": "2023-11-21T02:27:31Z",
  "endAt": "2023-11-21T03:27:31Z"
}
\`\`\`

| Field         | Type   | Description                                                                                                    |
| :------------ | :----- | :------------------------------------------------------------------------------------------------------------- |
| \`sid\`         | String | The unique ID of each streaming session.                                                                       |
| \`region\`      | String | The server area that has received the pushed stream.                                                           |
| \`streamKey\`   | String | The streaming key used by the stream.                                                                          |
| \`rtcInfo\`     | Object | RTC information, including \`channel\` and \`uid\`.                                                                |
| \`streamStats\` | Object | Stream statistics, including \`inputAudioBytes\`, \`inputVideoBytes\`, \`outputAudioBytes\`, and \`outputVideoBytes\`. |
| \`beginAt\`     | String | The streaming start time in RFC 3339 format.                                                                   |
| \`endAt\`       | String | The streaming end time in RFC 3339 format.                                                                     |

## \`live_stream_aborted\` [#live_stream_aborted]

The gateway has received an RTMP or SRT stream but terminated it for some reason. This event may be sent individually or between \`live_stream_connected\` and \`live_stream_disconnected\`.

\`\`\`json
{
  "sid": "55df7402-8778-11ee-92ed-07ec2e86c928",
  "region": "na",
  "domain": "rtls-ingress-prod-na.agoramdn.com",
  "streamKey": "7B***Qbs",
  "rtcInfo": {
    "channel": "123",
    "uid": "1234"
  },
  "beginAt": "2023-11-21T02:27:31Z",
  "errorCode": 100,
  "reason": "invalid"
}
\`\`\`

| Field       | Type   | Description                                          |
| :---------- | :----- | :--------------------------------------------------- |
| \`sid\`       | String | The unique ID of each streaming session.             |
| \`region\`    | String | The server area that has received the pushed stream. |
| \`domain\`    | String | The domain used for streaming.                       |
| \`streamKey\` | String | The streaming key used by the stream.                |
| \`rtcInfo\`   | Object | RTC information, including \`channel\` and \`uid\`.      |
| \`beginAt\`   | String | The streaming start time in RFC 3339 format.         |
| \`errorCode\` | Number | The stream termination error code.                   |
| \`reason\`    | String | The error message.                                   |

| \`errorCode\` | Description                                                                                        | Recommended action                                                                                                                                      |
| :---------- | :------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`1\`         | Illegal \`streamKey\`, for example an empty \`channelName\` or unsupported characters.                 | Check the \`streamKey\` format, especially for locally generated keys.                                                                                    |
| \`2\`         | Invalid \`streamKey\`, such as an expired or deleted key.                                            | Create a new \`streamKey\` and try again.                                                                                                                 |
| \`3\`         | No permission to use this \`streamKey\`, for example when the custom domain and app ID do not match. | Check whether the \`streamKey\` matches the domain name used for the push.                                                                                |
| \`4\`         | Number of concurrent streams exceeds the limit.                                                    | Wait and retry.                                                                                                                                         |
| \`5\`         | Conflict detected, for example pushing to the same channel at the same time.                       | If the streams are not being pushed at the same time, try again after 5 to 10 seconds.                                                                  |
| \`6\`         | Stream attribute exceeds the limit. Currently, this applies to bitrate only.                       | Check the streaming software configuration and lower the target bitrate.                                                                                |
| \`7\`         | Streaming without audio or video data for more than 10 seconds.                                    | Check whether the last push exited abnormally, and then try again.                                                                                      |
| \`8\`         | Failed to join the channel.                                                                        | The \`reason\` field provides the specific error reason, for example \`connect to rtc failed, reason:$N\`.                                                  |
| \`9\`         | Disconnected from the main network.                                                                | Try again several times. If the problem persists, contact technical support to confirm whether the app certificate provided during activation is valid. |
| \`10\`        | Unknown internal service error.                                                                    | Try again several times. If the problem persists, contact technical support.                                                                            |

## \`live_profile_updated\` [#live_profile_updated]

Stream properties have been updated. For example, the first audio or video frame has been received, or the audio or video profile has changed.

\`\`\`json
{
  "sid": "55df7402-8778-11ee-92ed-07ec2e86c928",
  "region": "na",
  "domain": "rtls-ingress-prod-na.agoramdn.com",
  "streamKey": "7B***Qbs",
  "rtcInfo": {
    "channel": "123",
    "uid": "1234"
  },
  "videoProfile": {
    "codec": "H.264",
    "width": 1920,
    "height": 1080,
    "gop": 2000
  },
  "audioProfile": {
    "sampleRate": 48000,
    "channels": 2
  },
  "beginAt": "2023-11-21T02:27:31Z"
}
\`\`\`

| Field          | Type   | Description                                                                                              |
| :------------- | :----- | :------------------------------------------------------------------------------------------------------- |
| \`sid\`          | String | The unique ID of each streaming session.                                                                 |
| \`region\`       | String | The server area that has received the pushed stream.                                                     |
| \`streamKey\`    | String | The streaming key used by the stream.                                                                    |
| \`rtcInfo\`      | Object | RTC information, including \`channel\` and \`uid\`.                                                          |
| \`videoProfile\` | Object | Video properties. Not applicable for audio-only streams. Includes \`codec\`, \`width\`, \`height\`, and \`gop\`. |
| \`audioProfile\` | Object | Audio properties, including \`sampleRate\` and \`channels\`.                                                 |
| \`beginAt\`      | String | The streaming start time in RFC 3339 format.                                                             |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "After you enable the Agora message notification service, Agora sends channel event notifications to your server through HTTPS `POST` callbacks. When the callback request body contains `product_id: 10`, the event belongs to Media Gateway."
  }, {
    heading: undefined,
    content: "This page describes the Media Gateway event types returned in channel event callbacks."
  }, {
    heading: "live_stream_connected",
    content: "The gateway has received the RTMP or SRT stream and successfully entered the channel."
  }, {
    heading: "live_stream_connected",
    content: "Field"
  }, {
    heading: "live_stream_connected",
    content: "Type"
  }, {
    heading: "live_stream_connected",
    content: "Description"
  }, {
    heading: "live_stream_connected",
    content: "`sid`"
  }, {
    heading: "live_stream_connected",
    content: "String"
  }, {
    heading: "live_stream_connected",
    content: "The unique ID of each streaming session."
  }, {
    heading: "live_stream_connected",
    content: "`region`"
  }, {
    heading: "live_stream_connected",
    content: "String"
  }, {
    heading: "live_stream_connected",
    content: "The server area that has received the pushed stream."
  }, {
    heading: "live_stream_connected",
    content: "`streamKey`"
  }, {
    heading: "live_stream_connected",
    content: "String"
  }, {
    heading: "live_stream_connected",
    content: "The streaming key used by the stream."
  }, {
    heading: "live_stream_connected",
    content: "`rtcInfo`"
  }, {
    heading: "live_stream_connected",
    content: "Object"
  }, {
    heading: "live_stream_connected",
    content: "RTC information, including `channel` and `uid`. When `channel` or `uid` is empty or `0` in the streaming key, this field stores the generated value used for this stream."
  }, {
    heading: "live_stream_connected",
    content: "`transcoding`"
  }, {
    heading: "live_stream_connected",
    content: "Object"
  }, {
    heading: "live_stream_connected",
    content: "Transcoding configuration information used for streaming."
  }, {
    heading: "live_stream_connected",
    content: "`beginAt`"
  }, {
    heading: "live_stream_connected",
    content: "String"
  }, {
    heading: "live_stream_connected",
    content: "The streaming start time in RFC 3339 format."
  }, {
    heading: "live_stream_connected",
    content: "This event is followed by a corresponding `live_stream_disconnected` event."
  }, {
    heading: "live_stream_disconnected",
    content: "The gateway has actively or passively disconnected and left the channel."
  }, {
    heading: "live_stream_disconnected",
    content: "Field"
  }, {
    heading: "live_stream_disconnected",
    content: "Type"
  }, {
    heading: "live_stream_disconnected",
    content: "Description"
  }, {
    heading: "live_stream_disconnected",
    content: "`sid`"
  }, {
    heading: "live_stream_disconnected",
    content: "String"
  }, {
    heading: "live_stream_disconnected",
    content: "The unique ID of each streaming session."
  }, {
    heading: "live_stream_disconnected",
    content: "`region`"
  }, {
    heading: "live_stream_disconnected",
    content: "String"
  }, {
    heading: "live_stream_disconnected",
    content: "The server area that has received the pushed stream."
  }, {
    heading: "live_stream_disconnected",
    content: "`streamKey`"
  }, {
    heading: "live_stream_disconnected",
    content: "String"
  }, {
    heading: "live_stream_disconnected",
    content: "The streaming key used by the stream."
  }, {
    heading: "live_stream_disconnected",
    content: "`rtcInfo`"
  }, {
    heading: "live_stream_disconnected",
    content: "Object"
  }, {
    heading: "live_stream_disconnected",
    content: "RTC information, including `channel` and `uid`."
  }, {
    heading: "live_stream_disconnected",
    content: "`streamStats`"
  }, {
    heading: "live_stream_disconnected",
    content: "Object"
  }, {
    heading: "live_stream_disconnected",
    content: "Stream statistics, including `inputAudioBytes`, `inputVideoBytes`, `outputAudioBytes`, and `outputVideoBytes`."
  }, {
    heading: "live_stream_disconnected",
    content: "`beginAt`"
  }, {
    heading: "live_stream_disconnected",
    content: "String"
  }, {
    heading: "live_stream_disconnected",
    content: "The streaming start time in RFC 3339 format."
  }, {
    heading: "live_stream_disconnected",
    content: "`endAt`"
  }, {
    heading: "live_stream_disconnected",
    content: "String"
  }, {
    heading: "live_stream_disconnected",
    content: "The streaming end time in RFC 3339 format."
  }, {
    heading: "live_stream_aborted",
    content: "The gateway has received an RTMP or SRT stream but terminated it for some reason. This event may be sent individually or between `live_stream_connected` and `live_stream_disconnected`."
  }, {
    heading: "live_stream_aborted",
    content: "Field"
  }, {
    heading: "live_stream_aborted",
    content: "Type"
  }, {
    heading: "live_stream_aborted",
    content: "Description"
  }, {
    heading: "live_stream_aborted",
    content: "`sid`"
  }, {
    heading: "live_stream_aborted",
    content: "String"
  }, {
    heading: "live_stream_aborted",
    content: "The unique ID of each streaming session."
  }, {
    heading: "live_stream_aborted",
    content: "`region`"
  }, {
    heading: "live_stream_aborted",
    content: "String"
  }, {
    heading: "live_stream_aborted",
    content: "The server area that has received the pushed stream."
  }, {
    heading: "live_stream_aborted",
    content: "`domain`"
  }, {
    heading: "live_stream_aborted",
    content: "String"
  }, {
    heading: "live_stream_aborted",
    content: "The domain used for streaming."
  }, {
    heading: "live_stream_aborted",
    content: "`streamKey`"
  }, {
    heading: "live_stream_aborted",
    content: "String"
  }, {
    heading: "live_stream_aborted",
    content: "The streaming key used by the stream."
  }, {
    heading: "live_stream_aborted",
    content: "`rtcInfo`"
  }, {
    heading: "live_stream_aborted",
    content: "Object"
  }, {
    heading: "live_stream_aborted",
    content: "RTC information, including `channel` and `uid`."
  }, {
    heading: "live_stream_aborted",
    content: "`beginAt`"
  }, {
    heading: "live_stream_aborted",
    content: "String"
  }, {
    heading: "live_stream_aborted",
    content: "The streaming start time in RFC 3339 format."
  }, {
    heading: "live_stream_aborted",
    content: "`errorCode`"
  }, {
    heading: "live_stream_aborted",
    content: "Number"
  }, {
    heading: "live_stream_aborted",
    content: "The stream termination error code."
  }, {
    heading: "live_stream_aborted",
    content: "`reason`"
  }, {
    heading: "live_stream_aborted",
    content: "String"
  }, {
    heading: "live_stream_aborted",
    content: "The error message."
  }, {
    heading: "live_stream_aborted",
    content: "`errorCode`"
  }, {
    heading: "live_stream_aborted",
    content: "Description"
  }, {
    heading: "live_stream_aborted",
    content: "Recommended action"
  }, {
    heading: "live_stream_aborted",
    content: "`1`"
  }, {
    heading: "live_stream_aborted",
    content: "Illegal `streamKey`, for example an empty `channelName` or unsupported characters."
  }, {
    heading: "live_stream_aborted",
    content: "Check the `streamKey` format, especially for locally generated keys."
  }, {
    heading: "live_stream_aborted",
    content: "`2`"
  }, {
    heading: "live_stream_aborted",
    content: "Invalid `streamKey`, such as an expired or deleted key."
  }, {
    heading: "live_stream_aborted",
    content: "Create a new `streamKey` and try again."
  }, {
    heading: "live_stream_aborted",
    content: "`3`"
  }, {
    heading: "live_stream_aborted",
    content: "No permission to use this `streamKey`, for example when the custom domain and app ID do not match."
  }, {
    heading: "live_stream_aborted",
    content: "Check whether the `streamKey` matches the domain name used for the push."
  }, {
    heading: "live_stream_aborted",
    content: "`4`"
  }, {
    heading: "live_stream_aborted",
    content: "Number of concurrent streams exceeds the limit."
  }, {
    heading: "live_stream_aborted",
    content: "Wait and retry."
  }, {
    heading: "live_stream_aborted",
    content: "`5`"
  }, {
    heading: "live_stream_aborted",
    content: "Conflict detected, for example pushing to the same channel at the same time."
  }, {
    heading: "live_stream_aborted",
    content: "If the streams are not being pushed at the same time, try again after 5 to 10 seconds."
  }, {
    heading: "live_stream_aborted",
    content: "`6`"
  }, {
    heading: "live_stream_aborted",
    content: "Stream attribute exceeds the limit. Currently, this applies to bitrate only."
  }, {
    heading: "live_stream_aborted",
    content: "Check the streaming software configuration and lower the target bitrate."
  }, {
    heading: "live_stream_aborted",
    content: "`7`"
  }, {
    heading: "live_stream_aborted",
    content: "Streaming without audio or video data for more than 10 seconds."
  }, {
    heading: "live_stream_aborted",
    content: "Check whether the last push exited abnormally, and then try again."
  }, {
    heading: "live_stream_aborted",
    content: "`8`"
  }, {
    heading: "live_stream_aborted",
    content: "Failed to join the channel."
  }, {
    heading: "live_stream_aborted",
    content: "The `reason` field provides the specific error reason, for example `connect to rtc failed, reason:$N`."
  }, {
    heading: "live_stream_aborted",
    content: "`9`"
  }, {
    heading: "live_stream_aborted",
    content: "Disconnected from the main network."
  }, {
    heading: "live_stream_aborted",
    content: "Try again several times. If the problem persists, contact technical support to confirm whether the app certificate provided during activation is valid."
  }, {
    heading: "live_stream_aborted",
    content: "`10`"
  }, {
    heading: "live_stream_aborted",
    content: "Unknown internal service error."
  }, {
    heading: "live_stream_aborted",
    content: "Try again several times. If the problem persists, contact technical support."
  }, {
    heading: "live_profile_updated",
    content: "Stream properties have been updated. For example, the first audio or video frame has been received, or the audio or video profile has changed."
  }, {
    heading: "live_profile_updated",
    content: "Field"
  }, {
    heading: "live_profile_updated",
    content: "Type"
  }, {
    heading: "live_profile_updated",
    content: "Description"
  }, {
    heading: "live_profile_updated",
    content: "`sid`"
  }, {
    heading: "live_profile_updated",
    content: "String"
  }, {
    heading: "live_profile_updated",
    content: "The unique ID of each streaming session."
  }, {
    heading: "live_profile_updated",
    content: "`region`"
  }, {
    heading: "live_profile_updated",
    content: "String"
  }, {
    heading: "live_profile_updated",
    content: "The server area that has received the pushed stream."
  }, {
    heading: "live_profile_updated",
    content: "`streamKey`"
  }, {
    heading: "live_profile_updated",
    content: "String"
  }, {
    heading: "live_profile_updated",
    content: "The streaming key used by the stream."
  }, {
    heading: "live_profile_updated",
    content: "`rtcInfo`"
  }, {
    heading: "live_profile_updated",
    content: "Object"
  }, {
    heading: "live_profile_updated",
    content: "RTC information, including `channel` and `uid`."
  }, {
    heading: "live_profile_updated",
    content: "`videoProfile`"
  }, {
    heading: "live_profile_updated",
    content: "Object"
  }, {
    heading: "live_profile_updated",
    content: "Video properties. Not applicable for audio-only streams. Includes `codec`, `width`, `height`, and `gop`."
  }, {
    heading: "live_profile_updated",
    content: "`audioProfile`"
  }, {
    heading: "live_profile_updated",
    content: "Object"
  }, {
    heading: "live_profile_updated",
    content: "Audio properties, including `sampleRate` and `channels`."
  }, {
    heading: "live_profile_updated",
    content: "`beginAt`"
  }, {
    heading: "live_profile_updated",
    content: "String"
  }, {
    heading: "live_profile_updated",
    content: "The streaming start time in RFC 3339 format."
  }],
  headings: [{
    id: "live_stream_connected",
    content: "`live_stream_connected`"
  }, {
    id: "live_stream_disconnected",
    content: "`live_stream_disconnected`"
  }, {
    id: "live_stream_aborted",
    content: "`live_stream_aborted`"
  }, {
    id: "live_profile_updated",
    content: "`live_profile_updated`"
  }]
};
export let toc = [{
  depth: 2,
  url: "#live_stream_connected",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "live_stream_connected"
    })
  })
}, {
  depth: 2,
  url: "#live_stream_disconnected",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "live_stream_disconnected"
    })
  })
}, {
  depth: 2,
  url: "#live_stream_aborted",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "live_stream_aborted"
    })
  })
}, {
  depth: 2,
  url: "#live_profile_updated",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "live_profile_updated"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["After you enable the Agora message notification service, Agora sends channel event notifications to your server through HTTPS ", _jsx(_components.code, {
        children: "POST"
      }), " callbacks. When the callback request body contains ", _jsx(_components.code, {
        children: "product_id: 10"
      }), ", the event belongs to Media Gateway."]
    }), `
`, _jsx(_components.p, {
      children: "This page describes the Media Gateway event types returned in channel event callbacks."
    }), `
`, _jsx(_components.h2, {
      id: "live_stream_connected",
      children: _jsx(_components.code, {
        children: "live_stream_connected"
      })
    }), `
`, _jsx(_components.p, {
      children: "The gateway has received the RTMP or SRT stream and successfully entered the channel."
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
              children: '  "sid"'
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
              children: '"55df7402-8778-11ee-92ed-07ec2e86c928"'
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
              children: '  "region"'
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
              children: '"na"'
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
              children: '  "domain"'
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
              children: '"rtls-ingress-prod-na.agoramdn.com"'
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
              children: '  "streamKey"'
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
              children: '"7B***Qbs"'
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
              children: '  "rtcInfo"'
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
              children: '    "channel"'
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "uid"'
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
              children: '"1234"'
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
              children: '  "transcoding"'
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "enabled"'
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
              children: '      "profile"'
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
              children: "5"
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "video"'
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
              children: '      "enabled"'
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
              children: '      "bitrate"'
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
              children: "3800"
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
              children: '      "fps"'
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
              children: "30"
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
              children: '      "height"'
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
              children: "1080"
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
              children: '      "width"'
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
              children: "1920"
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
              children: '  "beginAt"'
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
              children: '"2023-11-21T02:27:31Z"'
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
              children: "sid"
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
            children: "The unique ID of each streaming session."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "region"
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
            children: "The server area that has received the pushed stream."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "streamKey"
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
            children: "The streaming key used by the stream."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "rtcInfo"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["RTC information, including ", _jsx(_components.code, {
              children: "channel"
            }), " and ", _jsx(_components.code, {
              children: "uid"
            }), ". When ", _jsx(_components.code, {
              children: "channel"
            }), " or ", _jsx(_components.code, {
              children: "uid"
            }), " is empty or ", _jsx(_components.code, {
              children: "0"
            }), " in the streaming key, this field stores the generated value used for this stream."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "transcoding"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Object"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Transcoding configuration information used for streaming."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "beginAt"
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
            children: "The streaming start time in RFC 3339 format."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["This event is followed by a corresponding ", _jsx(_components.code, {
        children: "live_stream_disconnected"
      }), " event."]
    }), `
`, _jsx(_components.h2, {
      id: "live_stream_disconnected",
      children: _jsx(_components.code, {
        children: "live_stream_disconnected"
      })
    }), `
`, _jsx(_components.p, {
      children: "The gateway has actively or passively disconnected and left the channel."
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
              children: '  "sid"'
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
              children: '"55df7402-8778-11ee-92ed-07ec2e86c928"'
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
              children: '  "region"'
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
              children: '"na"'
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
              children: '  "streamKey"'
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
              children: '"7B***Qbs"'
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
              children: '  "domain"'
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
              children: '"rtls-ingress-prod-na.agoramdn.com:1935"'
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
              children: '  "rtcInfo"'
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
              children: '    "channel"'
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "uid"'
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
              children: '"1234"'
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
              children: '  "streamStats"'
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
              children: '    "inputAudioBytes"'
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
              children: "281799"
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
              children: '    "inputVideoBytes"'
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
              children: "9244544"
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
              children: '    "outputAudioBytes"'
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
              children: "130000"
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
              children: '    "outputVideoBytes"'
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
              children: "6656704"
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
              children: '  "beginAt"'
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
              children: '"2023-11-21T02:27:31Z"'
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
              children: '  "endAt"'
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
              children: '"2023-11-21T03:27:31Z"'
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
              children: "sid"
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
            children: "The unique ID of each streaming session."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "region"
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
            children: "The server area that has received the pushed stream."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "streamKey"
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
            children: "The streaming key used by the stream."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "rtcInfo"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["RTC information, including ", _jsx(_components.code, {
              children: "channel"
            }), " and ", _jsx(_components.code, {
              children: "uid"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "streamStats"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Stream statistics, including ", _jsx(_components.code, {
              children: "inputAudioBytes"
            }), ", ", _jsx(_components.code, {
              children: "inputVideoBytes"
            }), ", ", _jsx(_components.code, {
              children: "outputAudioBytes"
            }), ", and ", _jsx(_components.code, {
              children: "outputVideoBytes"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "beginAt"
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
            children: "The streaming start time in RFC 3339 format."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "endAt"
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
            children: "The streaming end time in RFC 3339 format."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "live_stream_aborted",
      children: _jsx(_components.code, {
        children: "live_stream_aborted"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The gateway has received an RTMP or SRT stream but terminated it for some reason. This event may be sent individually or between ", _jsx(_components.code, {
        children: "live_stream_connected"
      }), " and ", _jsx(_components.code, {
        children: "live_stream_disconnected"
      }), "."]
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
              children: '  "sid"'
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
              children: '"55df7402-8778-11ee-92ed-07ec2e86c928"'
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
              children: '  "region"'
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
              children: '"na"'
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
              children: '  "domain"'
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
              children: '"rtls-ingress-prod-na.agoramdn.com"'
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
              children: '  "streamKey"'
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
              children: '"7B***Qbs"'
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
              children: '  "rtcInfo"'
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
              children: '    "channel"'
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "uid"'
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
              children: '"1234"'
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
              children: '  "beginAt"'
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
              children: '"2023-11-21T02:27:31Z"'
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
              children: '  "errorCode"'
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
              children: "100"
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
              children: '"invalid"'
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
              children: "sid"
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
            children: "The unique ID of each streaming session."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "region"
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
            children: "The server area that has received the pushed stream."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "domain"
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
            children: "The domain used for streaming."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "streamKey"
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
            children: "The streaming key used by the stream."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "rtcInfo"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["RTC information, including ", _jsx(_components.code, {
              children: "channel"
            }), " and ", _jsx(_components.code, {
              children: "uid"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "beginAt"
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
            children: "The streaming start time in RFC 3339 format."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "errorCode"
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
            children: "The stream termination error code."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "reason"
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
        })]
      })]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "errorCode"
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
            children: "Recommended action"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "1"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Illegal ", _jsx(_components.code, {
              children: "streamKey"
            }), ", for example an empty ", _jsx(_components.code, {
              children: "channelName"
            }), " or unsupported characters."]
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Check the ", _jsx(_components.code, {
              children: "streamKey"
            }), " format, especially for locally generated keys."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "2"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Invalid ", _jsx(_components.code, {
              children: "streamKey"
            }), ", such as an expired or deleted key."]
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Create a new ", _jsx(_components.code, {
              children: "streamKey"
            }), " and try again."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "3"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["No permission to use this ", _jsx(_components.code, {
              children: "streamKey"
            }), ", for example when the custom domain and app ID do not match."]
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Check whether the ", _jsx(_components.code, {
              children: "streamKey"
            }), " matches the domain name used for the push."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "4"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of concurrent streams exceeds the limit."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Wait and retry."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "5"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Conflict detected, for example pushing to the same channel at the same time."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "If the streams are not being pushed at the same time, try again after 5 to 10 seconds."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "6"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Stream attribute exceeds the limit. Currently, this applies to bitrate only."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check the streaming software configuration and lower the target bitrate."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "7"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Streaming without audio or video data for more than 10 seconds."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Check whether the last push exited abnormally, and then try again."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "8"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Failed to join the channel."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The ", _jsx(_components.code, {
              children: "reason"
            }), " field provides the specific error reason, for example ", _jsx(_components.code, {
              children: "connect to rtc failed, reason:$N"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "9"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Disconnected from the main network."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Try again several times. If the problem persists, contact technical support to confirm whether the app certificate provided during activation is valid."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "10"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unknown internal service error."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Try again several times. If the problem persists, contact technical support."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "live_profile_updated",
      children: _jsx(_components.code, {
        children: "live_profile_updated"
      })
    }), `
`, _jsx(_components.p, {
      children: "Stream properties have been updated. For example, the first audio or video frame has been received, or the audio or video profile has changed."
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
              children: '  "sid"'
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
              children: '"55df7402-8778-11ee-92ed-07ec2e86c928"'
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
              children: '  "region"'
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
              children: '"na"'
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
              children: '  "domain"'
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
              children: '"rtls-ingress-prod-na.agoramdn.com"'
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
              children: '  "streamKey"'
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
              children: '"7B***Qbs"'
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
              children: '  "rtcInfo"'
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
              children: '    "channel"'
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "uid"'
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
              children: '"1234"'
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
              children: '  "videoProfile"'
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
              children: '    "codec"'
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
              children: '"H.264"'
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
              children: '    "width"'
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
              children: "1920"
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
              children: '    "height"'
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
              children: "1080"
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
              children: '    "gop"'
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
              children: "2000"
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
              children: '  "audioProfile"'
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
              children: '    "sampleRate"'
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
              children: "48000"
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
              children: '    "channels"'
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
              children: '  "beginAt"'
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
              children: '"2023-11-21T02:27:31Z"'
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
              children: "sid"
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
            children: "The unique ID of each streaming session."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "region"
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
            children: "The server area that has received the pushed stream."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "streamKey"
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
            children: "The streaming key used by the stream."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "rtcInfo"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["RTC information, including ", _jsx(_components.code, {
              children: "channel"
            }), " and ", _jsx(_components.code, {
              children: "uid"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "videoProfile"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Video properties. Not applicable for audio-only streams. Includes ", _jsx(_components.code, {
              children: "codec"
            }), ", ", _jsx(_components.code, {
              children: "width"
            }), ", ", _jsx(_components.code, {
              children: "height"
            }), ", and ", _jsx(_components.code, {
              children: "gop"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "audioProfile"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Audio properties, including ", _jsx(_components.code, {
              children: "sampleRate"
            }), " and ", _jsx(_components.code, {
              children: "channels"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "beginAt"
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
            children: "The streaming start time in RFC 3339 format."
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
