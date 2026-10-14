import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Web page recording",
  description: "Record web pages and push web page media streams to the CDN with Cloud Recording."
};
export let _markdown = `

Agora Cloud Recording supports three recording modes:

* Individual recording
* Composite recording
* Web page recording

This guide outlines the key steps for using the Cloud Recording RESTful API to record a web page.
In this recording mode, the content and audio of the specified web page are captured in a single file.

![](https://assets-docs.agora.io/images/cloud-recording/web-page-recording.svg)

You can use web page recording to reproduce use-cases such as online classes and video conferences. For example, if your web application integrates both the Agora SDK and a third-party whiteboard SDK, web page recording can record everything on the web page instead of only the audio and video streams.

![](https://assets-docs.agora.io/images/cloud-recording/web-page-layout.svg)

In web page recording mode, you can also convert the content and audio of the page into a media stream and push it to the CDN during the recording process.

![](https://assets-docs.agora.io/images/cloud-recording/web-page-push-cdn.svg)

## Prerequisites [#prerequisites]

* If you want to use web page recording along with other cloud recording functions, such as individual recording or screenshot capturing, Agora suggests that you use a separate App ID for web page recording for more independent resource management.
* You need to provide a web application that can be accessed through a URL, so that the content can be recorded. (The hosts and the audience can use web or other platforms.)
* Your web application should support Chrome.
* The web page content is displayed completely in one screen, that is, no scrolling is needed.
* If you want to record every operation of the host on the screen, you need to sync the operations in your web application.

## Implement a Web Page Recording [#implement-a-web-page-recording]

### Get a resource ID [#get-a-resource-id]

Before recording, call the [\`acquire\`](/en/api-reference/api-ref/cloud-recording#acquire) method to apply for a resource ID. Note that you must set \`scene\` as \`1\`.

#### Example \`acquire\` request over HTTPS [#example-acquire-request-over-https]

* Request URL:

  \`\`\`html
  https://api.agora.io/v1/apps/<yourappid>/cloud_recording/acquire
  \`\`\`

* \`Content-type\`: \`application/json;charset=utf-8\`

* \`Authorization\`: Basic authorization. For more information, see [How to pass the basic HTTP authentication](/en/api-reference/api-ref/cloud-recording/authentication).

* Request body:

  \`\`\`json
  {
      "cname": "httpClient463224",
      "uid": "527841",
      "clientRequest": {
          "resourceExpiredHour": 24,
          "scene": 1
      }
  }
  \`\`\`

### Start recording [#start-recording]

To enable [web page recording mode](/en/realtime-media/cloud-recording/build/start-a-recording/webpage-mode), set \`mode\` to \`web\` when calling [\`start\`](/en/api-reference/api-ref/cloud-recording#start). Use \`extensionServiceConfig\` to configure web page recording, and use \`storageConfig\` to configure your third-party cloud storage.

You cannot switch to a different recording mode once you start recording.

In web page recording mode, you can configure the following parameters in \`clientRequest\`:

| Parameter                | Description                               | Note     |
| :----------------------- | :---------------------------------------- | :------- |
| \`storageConfig\`          | Configures the third-party cloud storage. | Required |
| \`recordingFileConfig\`    | Configures the recorded files.            | Optional |
| \`extensionServiceConfig\` | Configures web page recording.            | Required |

#### Example \`start\` request over HTTPS [#example-start-request-over-https]

* Request URL:

  \`\`\`html
  https://api.agora.io/v1/apps/<yourappid>/cloud_recording/resourceid/<resourceid>/mode/web/start
  \`\`\`

* \`Content-type:\` \`application/json;charset=utf-8\`

* \`Authorization:\` Basic authorization. For more information, see [How to pass the basic HTTP authentication](/en/api-reference/api-ref/cloud-recording/authentication).

* Request body:

  \`\`\`json
  {
      "cname": "httpClient463224",
      "uid": "527841",
      "clientRequest": {
          "token": "<token if any>",
          "extensionServiceConfig": {
              "errorHandlePolicy": "error_abort",
              "extensionServices": [
                  {
                      "serviceName": "web_recorder_service",
                      "errorHandlePolicy": "error_abort",
                      "serviceParam": {
                          "url": "https://xxxxx",
                          "audioProfile": 0,
                          "videoWidth": 1280,
                          "videoHeight": 720,
                          "maxRecordingHour": 3
                      }
                  }
              ]
          },
          "recordingFileConfig": {
              "avFileType": [
                  "hls",
                  "mp4"
              ]
          },
          "storageConfig": {
              "vendor": 2,
              "region": 3,
              "bucket": "xxxxx",
              "accessKey": "xxxxx",
              "secretKey": "xxxxx",
              "fileNamePrefix": [
                  "directory1",
                  "directory2"
              ]
          }
      }
  }
  \`\`\`

### Stop recording [#stop-recording]

The charging will continue until the web page recording stops. You should set a reasonable \`maxRecordingHour\` based on the actual business use-case or actively stop the web page recording.

When a recording finishes, call [\`stop\`](/en/api-reference/api-ref/cloud-recording#stop) to leave the channel and stop recording. To use Agora Cloud Recording again, you need to call the [\`acquire\`](/en/api-reference/api-ref/cloud-recording#acquire) method for a new resource ID.

#### Example \`stop\` request over HTTPS [#example-stop-request-over-https]

* The request URL is:

  \`\`\`html
  https://api.agora.io/v1/apps/<yourappid>/cloud_recording/resourceid/<resourceid>/sid/<sid>/mode/web/stop
  \`\`\`

* \`Content-type\`: \`application/json;charset=utf-8\`

* \`Authorization\`: Basic authorization. For more information, see [How to pass the basic HTTP authentication](/en/api-reference/api-ref/cloud-recording/authentication).

* Request body:

  \`\`\`json
  {
      "cname": "httpClient463224",
      "uid": "527841",
      "clientRequest": {}
  }
  \`\`\`

## Implement Pushing Stream to the CDN during a Web Page Recording [#implement-pushing-stream-to-the-cdn-during-a-web-page-recording]

### Get a resource ID [#get-a-resource-id-1]

Before starting the process, call the [\`acquire\`](/en/api-reference/api-ref/cloud-recording#acquire) method to apply for a resource ID. Note that you must set \`scene\` as \`1\`.

#### Example \`acquire\` request over HTTPS [#example-acquire-request-over-https-1]

* Request URL:

  \`\`\`html
  https://api.agora.io/v1/apps/<yourappid>/cloud_recording/acquire
  \`\`\`

* \`Content-type\`: \`application/json;charset=utf-8\`

* \`Authorization\`: Basic authorization. For more information, see [How to pass the basic HTTP authentication](/en/api-reference/api-ref/cloud-recording/authentication).

* Request body:

  \`\`\`json
  {
      "cname": "httpClient463224",
      "uid": "527841",
      "clientRequest": {
          "resourceExpiredHour": 24,
          "scene": 1
      }
  }
  \`\`\`

### Start a process [#start-a-process]

To enable [web page recording mode](/en/realtime-media/cloud-recording/build/start-a-recording/webpage-mode), set \`mode\` to \`web\` when calling [\`start\`](/en/api-reference/api-ref/cloud-recording#start). Use \`extensionServiceConfig\` to configure web page recording, and use \`storageConfig\` to configure your third-party cloud storage.

You cannot switch to a different recording mode once you start recording.

In web page recording mode, you can configure the following parameters in \`clientRequest\`:

| Parameter                | Description                               | Note     |
| :----------------------- | :---------------------------------------- | :------- |
| \`storageConfig\`          | Configures the third-party cloud storage. | Required |
| \`recordingFileConfig\`    | Configures the recorded files.            | Optional |
| \`extensionServiceConfig\` | Configures web page recording.            | Required |

#### Example \`start\` request over HTTPS [#example-start-request-over-https-1]

* Request URL:

  \`\`\`html
  https://api.agora.io/v1/apps/<yourappid>/cloud_recording/resourceid/<resourceid>/mode/web/start
  \`\`\`

* \`Content-type:\` \`application/json;charset=utf-8\`

* \`Authorization:\` Basic authorization. For more information, see [How to pass the basic HTTP authentication](/en/api-reference/api-ref/cloud-recording/authentication).

* Request body:

  \`\`\`json
  {
      "cname": "httpClient463224",
      "uid": "527841",
      "clientRequest": {
          "token": "<token>",
          "extensionServiceConfig": {
              "extensionServices": [
                  {
                      "serviceName": "web_recorder_service",
                      "errorHandlePolicy": "error_abort",
                      "serviceParam": {
                          "url": "https://xxxxx",
                          "audioProfile": 0,
                          "videoWidth": 1280,
                          "videoHeight": 720,
                          "maxRecordingHour": 3,
                          "maxVideoDuration": 200
                      }
                  },
                  {
                      "serviceName": "rtmp_publish_service",
                      "errorHandlePolicy": "error_ignore",
                      "serviceParam": {
                          "outputs": [
                              {
                                  "rtmpUrl": "rtmp://xxx"
                              }
                          ]
                      }
                  }
              ]
          },
          "recordingFileConfig": {
              "avFileType": [
                  "hls",
                  "mp4"
              ]
          },
          "storageConfig": {
              "vendor": 2,
              "region": 3,
              "bucket": "xxxxx",
              "accessKey": "xxxxx",
              "secretKey": "xxxxx",
              "fileNamePrefix": [
                  "directory1",
                  "directory2"
              ]
          }
      }
  }
  \`\`\`

### Stop the process [#stop-the-process]

When a recording and stream pushing finishes, call [\`stop\`](/en/api-reference/api-ref/cloud-recording#stop) to leave the channel and stop recording. To use Agora Cloud Web Page Recording again, you need to call the [\`acquire\`](/en/api-reference/api-ref/cloud-recording#acquire) method for a new resource ID.

#### An HTTP request example of \`stop\` [#an-http-request-example-of-stop]

* The request URL is:

  \`\`\`html
  https://api.agora.io/v1/apps/<yourappid>/cloud_recording/resourceid/<resourceid>/sid/<sid>/mode/web/stop
  \`\`\`

* \`Content-type\`: \`application/json;charset=utf-8\`

* \`Authorization\`: Basic authorization. For more information, see [How to pass the basic HTTP authentication](/en/api-reference/api-ref/cloud-recording/authentication).

* Request body:

  \`\`\`json
  {
      "cname": "httpClient463224",
      "uid": "527841",
      "clientRequest": {}
  }
  \`\`\`

## Recorded files [#recorded-files]

A web page recording session generates one M3U8 file and multiple TS files. Depending on the value of \`avFileType\`, the recording session may also generate one or more MP4 files. For detailed information about the naming conventions of the recorded files, see [Manage Recorded Files](/en/realtime-media/cloud-recording/build/process-recorded-files/manage-files).

## Pricing [#pricing]

Web page recording mode is free to use by November 1, 2021. See [Pricing for Web Page Recording](/en/realtime-media/cloud-recording/reference/pricing-webpage-recording) for details.

## Considerations [#considerations]

### Application restrictions [#application-restrictions]

* The recorded web page should not contain any video that has a resolution higher than 1920 × 1080.
* The resolution of the videos generated by the web page recording is up to 1920 × 1080.
* The recorded web page should not use WebGL.
* The downlink bitrate of your web application should not exceed 10 Mbps, and the uplink bitrate should not exceed 2 Mbps.
* Ensure that your web application does not consume excessive CPU memory and network bandwidth and that your application is used legally.
* If you enable the autoplay property for a video element in the recorded web page, the recording service can play the video without any user interaction. However, if you disable the autoplay property, the video cannot be played automatically, and the recording service cannot record the content of the video.
* The recorded webpage should not be redirected to a different domain, and should avoid any other types of redirection. If the webpage requires login, complete the login first before the recording session starts.
* You can use the [web page load timeout detection function](/en/realtime-media/cloud-recording/build/customize-the-recording/webpage-load-timeout) to prevent the recorded content from being inconsistent with the expected content caused by the web page load timeout.

### RESTful API requests [#restful-api-requests]

* Recording starts approximately five seconds after you send a request. We recommend you send the request in advance to ensure that everything you want to record is captured.
* Web page recording does not support the \`updateLayout\` method.
* If the URL you specify in the \`start\` method cannot be accessed, the recording service exits automatically after the \`start\` call. To ensure that the recording service starts successfully, see [Best Practices in Integrating Cloud Recording](/en/realtime-media/cloud-recording/build/best-practices/integration-best-practices#ensure-the-recording-service-starts-successfully).

### Other considerations [#other-considerations]

* During a recording, when the length of the recorded file reaches around the value of \`maxVideoDuration\`, or when the size of the file exceeds around 2 GB, the recording service automatically creates another MP4 file.
* In a web page recording, the recording service can be considered a client of your web application.
  * If the URL you specify in the \`start\` method automatically enables the client to publish streams, the browser engine started by the recording server becomes a video sender. As a result, the recording server's video may be displayed as empty in the video panel of your application.
  * If your application displays a user list, we recommend you hide the recording server from the list to avoid confusion among other users.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora Cloud Recording supports three recording modes:"
  }, {
    heading: undefined,
    content: "Individual recording"
  }, {
    heading: undefined,
    content: "Composite recording"
  }, {
    heading: undefined,
    content: "Web page recording"
  }, {
    heading: undefined,
    content: `This guide outlines the key steps for using the Cloud Recording RESTful API to record a web page.
In this recording mode, the content and audio of the specified web page are captured in a single file.`
  }, {
    heading: undefined,
    content: "You can use web page recording to reproduce use-cases such as online classes and video conferences. For example, if your web application integrates both the Agora SDK and a third-party whiteboard SDK, web page recording can record everything on the web page instead of only the audio and video streams."
  }, {
    heading: undefined,
    content: "In web page recording mode, you can also convert the content and audio of the page into a media stream and push it to the CDN during the recording process."
  }, {
    heading: "prerequisites",
    content: "If you want to use web page recording along with other cloud recording functions, such as individual recording or screenshot capturing, Agora suggests that you use a separate App ID for web page recording for more independent resource management."
  }, {
    heading: "prerequisites",
    content: "You need to provide a web application that can be accessed through a URL, so that the content can be recorded. (The hosts and the audience can use web or other platforms.)"
  }, {
    heading: "prerequisites",
    content: "Your web application should support Chrome."
  }, {
    heading: "prerequisites",
    content: "The web page content is displayed completely in one screen, that is, no scrolling is needed."
  }, {
    heading: "prerequisites",
    content: "If you want to record every operation of the host on the screen, you need to sync the operations in your web application."
  }, {
    heading: "get-a-resource-id",
    content: "Before recording, call the `acquire` method to apply for a resource ID. Note that you must set `scene` as `1`."
  }, {
    heading: "example-acquire-request-over-https",
    content: "Request URL:"
  }, {
    heading: "example-acquire-request-over-https",
    content: "`Content-type`: `application/json;charset=utf-8`"
  }, {
    heading: "example-acquire-request-over-https",
    content: "`Authorization`: Basic authorization. For more information, see How to pass the basic HTTP authentication."
  }, {
    heading: "example-acquire-request-over-https",
    content: "Request body:"
  }, {
    heading: "start-recording",
    content: "To enable web page recording mode, set `mode` to `web` when calling `start`. Use `extensionServiceConfig` to configure web page recording, and use `storageConfig` to configure your third-party cloud storage."
  }, {
    heading: "start-recording",
    content: "You cannot switch to a different recording mode once you start recording."
  }, {
    heading: "start-recording",
    content: "In web page recording mode, you can configure the following parameters in `clientRequest`:"
  }, {
    heading: "start-recording",
    content: "Parameter"
  }, {
    heading: "start-recording",
    content: "Description"
  }, {
    heading: "start-recording",
    content: "Note"
  }, {
    heading: "start-recording",
    content: "`storageConfig`"
  }, {
    heading: "start-recording",
    content: "Configures the third-party cloud storage."
  }, {
    heading: "start-recording",
    content: "Required"
  }, {
    heading: "start-recording",
    content: "`recordingFileConfig`"
  }, {
    heading: "start-recording",
    content: "Configures the recorded files."
  }, {
    heading: "start-recording",
    content: "Optional"
  }, {
    heading: "start-recording",
    content: "`extensionServiceConfig`"
  }, {
    heading: "start-recording",
    content: "Configures web page recording."
  }, {
    heading: "start-recording",
    content: "Required"
  }, {
    heading: "example-start-request-over-https",
    content: "Request URL:"
  }, {
    heading: "example-start-request-over-https",
    content: "`Content-type:` `application/json;charset=utf-8`"
  }, {
    heading: "example-start-request-over-https",
    content: "`Authorization:` Basic authorization. For more information, see How to pass the basic HTTP authentication."
  }, {
    heading: "example-start-request-over-https",
    content: "Request body:"
  }, {
    heading: "stop-recording",
    content: "The charging will continue until the web page recording stops. You should set a reasonable `maxRecordingHour` based on the actual business use-case or actively stop the web page recording."
  }, {
    heading: "stop-recording",
    content: "When a recording finishes, call `stop` to leave the channel and stop recording. To use Agora Cloud Recording again, you need to call the `acquire` method for a new resource ID."
  }, {
    heading: "example-stop-request-over-https",
    content: "The request URL is:"
  }, {
    heading: "example-stop-request-over-https",
    content: "`Content-type`: `application/json;charset=utf-8`"
  }, {
    heading: "example-stop-request-over-https",
    content: "`Authorization`: Basic authorization. For more information, see How to pass the basic HTTP authentication."
  }, {
    heading: "example-stop-request-over-https",
    content: "Request body:"
  }, {
    heading: "get-a-resource-id-1",
    content: "Before starting the process, call the `acquire` method to apply for a resource ID. Note that you must set `scene` as `1`."
  }, {
    heading: "example-acquire-request-over-https-1",
    content: "Request URL:"
  }, {
    heading: "example-acquire-request-over-https-1",
    content: "`Content-type`: `application/json;charset=utf-8`"
  }, {
    heading: "example-acquire-request-over-https-1",
    content: "`Authorization`: Basic authorization. For more information, see How to pass the basic HTTP authentication."
  }, {
    heading: "example-acquire-request-over-https-1",
    content: "Request body:"
  }, {
    heading: "start-a-process",
    content: "To enable web page recording mode, set `mode` to `web` when calling `start`. Use `extensionServiceConfig` to configure web page recording, and use `storageConfig` to configure your third-party cloud storage."
  }, {
    heading: "start-a-process",
    content: "You cannot switch to a different recording mode once you start recording."
  }, {
    heading: "start-a-process",
    content: "In web page recording mode, you can configure the following parameters in `clientRequest`:"
  }, {
    heading: "start-a-process",
    content: "Parameter"
  }, {
    heading: "start-a-process",
    content: "Description"
  }, {
    heading: "start-a-process",
    content: "Note"
  }, {
    heading: "start-a-process",
    content: "`storageConfig`"
  }, {
    heading: "start-a-process",
    content: "Configures the third-party cloud storage."
  }, {
    heading: "start-a-process",
    content: "Required"
  }, {
    heading: "start-a-process",
    content: "`recordingFileConfig`"
  }, {
    heading: "start-a-process",
    content: "Configures the recorded files."
  }, {
    heading: "start-a-process",
    content: "Optional"
  }, {
    heading: "start-a-process",
    content: "`extensionServiceConfig`"
  }, {
    heading: "start-a-process",
    content: "Configures web page recording."
  }, {
    heading: "start-a-process",
    content: "Required"
  }, {
    heading: "example-start-request-over-https-1",
    content: "Request URL:"
  }, {
    heading: "example-start-request-over-https-1",
    content: "`Content-type:` `application/json;charset=utf-8`"
  }, {
    heading: "example-start-request-over-https-1",
    content: "`Authorization:` Basic authorization. For more information, see How to pass the basic HTTP authentication."
  }, {
    heading: "example-start-request-over-https-1",
    content: "Request body:"
  }, {
    heading: "stop-the-process",
    content: "When a recording and stream pushing finishes, call `stop` to leave the channel and stop recording. To use Agora Cloud Web Page Recording again, you need to call the `acquire` method for a new resource ID."
  }, {
    heading: "an-http-request-example-of-stop",
    content: "The request URL is:"
  }, {
    heading: "an-http-request-example-of-stop",
    content: "`Content-type`: `application/json;charset=utf-8`"
  }, {
    heading: "an-http-request-example-of-stop",
    content: "`Authorization`: Basic authorization. For more information, see How to pass the basic HTTP authentication."
  }, {
    heading: "an-http-request-example-of-stop",
    content: "Request body:"
  }, {
    heading: "recorded-files",
    content: "A web page recording session generates one M3U8 file and multiple TS files. Depending on the value of `avFileType`, the recording session may also generate one or more MP4 files. For detailed information about the naming conventions of the recorded files, see Manage Recorded Files."
  }, {
    heading: "pricing",
    content: "Web page recording mode is free to use by November 1, 2021. See Pricing for Web Page Recording for details."
  }, {
    heading: "application-restrictions",
    content: "The recorded web page should not contain any video that has a resolution higher than 1920 × 1080."
  }, {
    heading: "application-restrictions",
    content: "The resolution of the videos generated by the web page recording is up to 1920 × 1080."
  }, {
    heading: "application-restrictions",
    content: "The recorded web page should not use WebGL."
  }, {
    heading: "application-restrictions",
    content: "The downlink bitrate of your web application should not exceed 10 Mbps, and the uplink bitrate should not exceed 2 Mbps."
  }, {
    heading: "application-restrictions",
    content: "Ensure that your web application does not consume excessive CPU memory and network bandwidth and that your application is used legally."
  }, {
    heading: "application-restrictions",
    content: "If you enable the autoplay property for a video element in the recorded web page, the recording service can play the video without any user interaction. However, if you disable the autoplay property, the video cannot be played automatically, and the recording service cannot record the content of the video."
  }, {
    heading: "application-restrictions",
    content: "The recorded webpage should not be redirected to a different domain, and should avoid any other types of redirection. If the webpage requires login, complete the login first before the recording session starts."
  }, {
    heading: "application-restrictions",
    content: "You can use the web page load timeout detection function to prevent the recorded content from being inconsistent with the expected content caused by the web page load timeout."
  }, {
    heading: "restful-api-requests",
    content: "Recording starts approximately five seconds after you send a request. We recommend you send the request in advance to ensure that everything you want to record is captured."
  }, {
    heading: "restful-api-requests",
    content: "Web page recording does not support the `updateLayout` method."
  }, {
    heading: "restful-api-requests",
    content: "If the URL you specify in the `start` method cannot be accessed, the recording service exits automatically after the `start` call. To ensure that the recording service starts successfully, see Best Practices in Integrating Cloud Recording."
  }, {
    heading: "other-considerations",
    content: "During a recording, when the length of the recorded file reaches around the value of `maxVideoDuration`, or when the size of the file exceeds around 2 GB, the recording service automatically creates another MP4 file."
  }, {
    heading: "other-considerations",
    content: "In a web page recording, the recording service can be considered a client of your web application."
  }, {
    heading: "other-considerations",
    content: "If the URL you specify in the `start` method automatically enables the client to publish streams, the browser engine started by the recording server becomes a video sender. As a result, the recording server's video may be displayed as empty in the video panel of your application."
  }, {
    heading: "other-considerations",
    content: "If your application displays a user list, we recommend you hide the recording server from the list to avoid confusion among other users."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implement-a-web-page-recording",
    content: "Implement a Web Page Recording"
  }, {
    id: "get-a-resource-id",
    content: "Get a resource ID"
  }, {
    id: "example-acquire-request-over-https",
    content: "Example `acquire` request over HTTPS"
  }, {
    id: "start-recording",
    content: "Start recording"
  }, {
    id: "example-start-request-over-https",
    content: "Example `start` request over HTTPS"
  }, {
    id: "stop-recording",
    content: "Stop recording"
  }, {
    id: "example-stop-request-over-https",
    content: "Example `stop` request over HTTPS"
  }, {
    id: "implement-pushing-stream-to-the-cdn-during-a-web-page-recording",
    content: "Implement Pushing Stream to the CDN during a Web Page Recording"
  }, {
    id: "get-a-resource-id-1",
    content: "Get a resource ID"
  }, {
    id: "example-acquire-request-over-https-1",
    content: "Example `acquire` request over HTTPS"
  }, {
    id: "start-a-process",
    content: "Start a process"
  }, {
    id: "example-start-request-over-https-1",
    content: "Example `start` request over HTTPS"
  }, {
    id: "stop-the-process",
    content: "Stop the process"
  }, {
    id: "an-http-request-example-of-stop",
    content: "An HTTP request example of `stop`"
  }, {
    id: "recorded-files",
    content: "Recorded files"
  }, {
    id: "pricing",
    content: "Pricing"
  }, {
    id: "considerations",
    content: "Considerations"
  }, {
    id: "application-restrictions",
    content: "Application restrictions"
  }, {
    id: "restful-api-requests",
    content: "RESTful API requests"
  }, {
    id: "other-considerations",
    content: "Other considerations"
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
  url: "#implement-a-web-page-recording",
  title: _jsx(_Fragment, {
    children: "Implement a Web Page Recording"
  })
}, {
  depth: 3,
  url: "#get-a-resource-id",
  title: _jsx(_Fragment, {
    children: "Get a resource ID"
  })
}, {
  depth: 4,
  url: "#example-acquire-request-over-https",
  title: _jsxs(_Fragment, {
    children: ["Example ", _jsx("code", {
      children: "acquire"
    }), " request over HTTPS"]
  })
}, {
  depth: 3,
  url: "#start-recording",
  title: _jsx(_Fragment, {
    children: "Start recording"
  })
}, {
  depth: 4,
  url: "#example-start-request-over-https",
  title: _jsxs(_Fragment, {
    children: ["Example ", _jsx("code", {
      children: "start"
    }), " request over HTTPS"]
  })
}, {
  depth: 3,
  url: "#stop-recording",
  title: _jsx(_Fragment, {
    children: "Stop recording"
  })
}, {
  depth: 4,
  url: "#example-stop-request-over-https",
  title: _jsxs(_Fragment, {
    children: ["Example ", _jsx("code", {
      children: "stop"
    }), " request over HTTPS"]
  })
}, {
  depth: 2,
  url: "#implement-pushing-stream-to-the-cdn-during-a-web-page-recording",
  title: _jsx(_Fragment, {
    children: "Implement Pushing Stream to the CDN during a Web Page Recording"
  })
}, {
  depth: 3,
  url: "#get-a-resource-id-1",
  title: _jsx(_Fragment, {
    children: "Get a resource ID"
  })
}, {
  depth: 4,
  url: "#example-acquire-request-over-https-1",
  title: _jsxs(_Fragment, {
    children: ["Example ", _jsx("code", {
      children: "acquire"
    }), " request over HTTPS"]
  })
}, {
  depth: 3,
  url: "#start-a-process",
  title: _jsx(_Fragment, {
    children: "Start a process"
  })
}, {
  depth: 4,
  url: "#example-start-request-over-https-1",
  title: _jsxs(_Fragment, {
    children: ["Example ", _jsx("code", {
      children: "start"
    }), " request over HTTPS"]
  })
}, {
  depth: 3,
  url: "#stop-the-process",
  title: _jsx(_Fragment, {
    children: "Stop the process"
  })
}, {
  depth: 4,
  url: "#an-http-request-example-of-stop",
  title: _jsxs(_Fragment, {
    children: ["An HTTP request example of ", _jsx("code", {
      children: "stop"
    })]
  })
}, {
  depth: 2,
  url: "#recorded-files",
  title: _jsx(_Fragment, {
    children: "Recorded files"
  })
}, {
  depth: 2,
  url: "#pricing",
  title: _jsx(_Fragment, {
    children: "Pricing"
  })
}, {
  depth: 2,
  url: "#considerations",
  title: _jsx(_Fragment, {
    children: "Considerations"
  })
}, {
  depth: 3,
  url: "#application-restrictions",
  title: _jsx(_Fragment, {
    children: "Application restrictions"
  })
}, {
  depth: 3,
  url: "#restful-api-requests",
  title: _jsx(_Fragment, {
    children: "RESTful API requests"
  })
}, {
  depth: 3,
  url: "#other-considerations",
  title: _jsx(_Fragment, {
    children: "Other considerations"
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
    p: "p",
    pre: "pre",
    span: "span",
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
    children: [_jsx(_components.p, {
      children: "Agora Cloud Recording supports three recording modes:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Individual recording"
      }), `
`, _jsx(_components.li, {
        children: "Composite recording"
      }), `
`, _jsx(_components.li, {
        children: "Web page recording"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: `This guide outlines the key steps for using the Cloud Recording RESTful API to record a web page.
In this recording mode, the content and audio of the specified web page are captured in a single file.`
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/cloud-recording/web-page-recording.svg",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: "You can use web page recording to reproduce use-cases such as online classes and video conferences. For example, if your web application integrates both the Agora SDK and a third-party whiteboard SDK, web page recording can record everything on the web page instead of only the audio and video streams."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/cloud-recording/web-page-layout.svg",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: "In web page recording mode, you can also convert the content and audio of the page into a media stream and push it to the CDN during the recording process."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/cloud-recording/web-page-push-cdn.svg",
        alt: ""
      })
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If you want to use web page recording along with other cloud recording functions, such as individual recording or screenshot capturing, Agora suggests that you use a separate App ID for web page recording for more independent resource management."
      }), `
`, _jsx(_components.li, {
        children: "You need to provide a web application that can be accessed through a URL, so that the content can be recorded. (The hosts and the audience can use web or other platforms.)"
      }), `
`, _jsx(_components.li, {
        children: "Your web application should support Chrome."
      }), `
`, _jsx(_components.li, {
        children: "The web page content is displayed completely in one screen, that is, no scrolling is needed."
      }), `
`, _jsx(_components.li, {
        children: "If you want to record every operation of the host on the screen, you need to sync the operations in your web application."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "implement-a-web-page-recording",
      children: "Implement a Web Page Recording"
    }), `
`, _jsx(_components.h3, {
      id: "get-a-resource-id",
      children: "Get a resource ID"
    }), `
`, _jsxs(_components.p, {
      children: ["Before recording, call the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#acquire",
        children: _jsx(_components.code, {
          children: "acquire"
        })
      }), " method to apply for a resource ID. Note that you must set ", _jsx(_components.code, {
        children: "scene"
      }), " as ", _jsx(_components.code, {
        children: "1"
      }), "."]
    }), `
`, _jsxs(_components.h4, {
      id: "example-acquire-request-over-https",
      children: ["Example ", _jsx(_components.code, {
        children: "acquire"
      }), " request over HTTPS"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Request URL:"
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
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "https://api.agora.io/v1/apps/<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "yourappid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">/cloud_recording/acquire"
                })]
              })
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Content-type"
          }), ": ", _jsx(_components.code, {
            children: "application/json;charset=utf-8"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Authorization"
          }), ": Basic authorization. For more information, see ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording/authentication",
            children: "How to pass the basic HTTP authentication"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Request body:"
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
                  children: '    "cname"'
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
                  children: '"httpClient463224"'
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
                  children: '"527841"'
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
                  children: '    "clientRequest"'
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
                  children: '        "resourceExpiredHour"'
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
                  children: "24"
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
                  children: '        "scene"'
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
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "start-recording",
      children: "Start recording"
    }), `
`, _jsxs(_components.p, {
      children: ["To enable ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/start-a-recording/webpage-mode",
        children: "web page recording mode"
      }), ", set ", _jsx(_components.code, {
        children: "mode"
      }), " to ", _jsx(_components.code, {
        children: "web"
      }), " when calling ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#start",
        children: _jsx(_components.code, {
          children: "start"
        })
      }), ". Use ", _jsx(_components.code, {
        children: "extensionServiceConfig"
      }), " to configure web page recording, and use ", _jsx(_components.code, {
        children: "storageConfig"
      }), " to configure your third-party cloud storage."]
    }), `
`, _jsx(_components.p, {
      children: "You cannot switch to a different recording mode once you start recording."
    }), `
`, _jsxs(_components.p, {
      children: ["In web page recording mode, you can configure the following parameters in ", _jsx(_components.code, {
        children: "clientRequest"
      }), ":"]
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
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Note"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "storageConfig"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Configures the third-party cloud storage."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "recordingFileConfig"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Configures the recorded files."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Optional"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "extensionServiceConfig"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Configures web page recording."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.h4, {
      id: "example-start-request-over-https",
      children: ["Example ", _jsx(_components.code, {
        children: "start"
      }), " request over HTTPS"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Request URL:"
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
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "https://api.agora.io/v1/apps/<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "yourappid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">/cloud_recording/resourceid/<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "resourceid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">/mode/web/start"
                })]
              })
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Content-type:"
          }), " ", _jsx(_components.code, {
            children: "application/json;charset=utf-8"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Authorization:"
          }), " Basic authorization. For more information, see ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording/authentication",
            children: "How to pass the basic HTTP authentication"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Request body:"
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
                  children: '    "cname"'
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
                  children: '"httpClient463224"'
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
                  children: '"527841"'
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
                  children: '    "clientRequest"'
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
                  children: '"<token if any>"'
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
                  children: '        "extensionServiceConfig"'
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
                  children: '            "errorHandlePolicy"'
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
                  children: '"error_abort"'
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
                  children: '            "extensionServices"'
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
                  children: '                    "serviceName"'
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
                  children: '"web_recorder_service"'
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
                  children: '                    "errorHandlePolicy"'
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
                  children: '"error_abort"'
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
                  children: '                    "serviceParam"'
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
                  children: '                        "url"'
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
                  children: '"https://xxxxx"'
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
                  children: '                        "audioProfile"'
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
                  children: '                        "videoWidth"'
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
                  children: "1280"
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
                  children: '                        "videoHeight"'
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
                  children: "720"
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
                  children: '                        "maxRecordingHour"'
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
                  children: "3"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                    }"
                })
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '        "recordingFileConfig"'
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
                  children: '            "avFileType"'
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
                  children: '                "hls"'
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
                  children: '                "mp4"'
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '        "storageConfig"'
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
                  children: '            "vendor"'
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
                  children: '            "region"'
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
                  children: "3"
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
                  children: '            "bucket"'
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
                  children: '"xxxxx"'
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
                  children: '            "accessKey"'
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
                  children: '"xxxxx"'
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
                  children: '            "secretKey"'
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
                  children: '"xxxxx"'
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
                  children: '            "fileNamePrefix"'
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
                  children: '                "directory1"'
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
                  children: '                "directory2"'
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
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "stop-recording",
      children: "Stop recording"
    }), `
`, _jsxs(_components.p, {
      children: ["The charging will continue until the web page recording stops. You should set a reasonable ", _jsx(_components.code, {
        children: "maxRecordingHour"
      }), " based on the actual business use-case or actively stop the web page recording."]
    }), `
`, _jsxs(_components.p, {
      children: ["When a recording finishes, call ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#stop",
        children: _jsx(_components.code, {
          children: "stop"
        })
      }), " to leave the channel and stop recording. To use Agora Cloud Recording again, you need to call the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#acquire",
        children: _jsx(_components.code, {
          children: "acquire"
        })
      }), " method for a new resource ID."]
    }), `
`, _jsxs(_components.h4, {
      id: "example-stop-request-over-https",
      children: ["Example ", _jsx(_components.code, {
        children: "stop"
      }), " request over HTTPS"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "The request URL is:"
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
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "https://api.agora.io/v1/apps/<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "yourappid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">/cloud_recording/resourceid/<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "resourceid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">/sid/<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "sid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">/mode/web/stop"
                })]
              })
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Content-type"
          }), ": ", _jsx(_components.code, {
            children: "application/json;charset=utf-8"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Authorization"
          }), ": Basic authorization. For more information, see ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording/authentication",
            children: "How to pass the basic HTTP authentication"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Request body:"
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
                  children: '    "cname"'
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
                  children: '"httpClient463224"'
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
                  children: '"527841"'
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
                  children: '    "clientRequest"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {}"
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
      id: "implement-pushing-stream-to-the-cdn-during-a-web-page-recording",
      children: "Implement Pushing Stream to the CDN during a Web Page Recording"
    }), `
`, _jsx(_components.h3, {
      id: "get-a-resource-id-1",
      children: "Get a resource ID"
    }), `
`, _jsxs(_components.p, {
      children: ["Before starting the process, call the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#acquire",
        children: _jsx(_components.code, {
          children: "acquire"
        })
      }), " method to apply for a resource ID. Note that you must set ", _jsx(_components.code, {
        children: "scene"
      }), " as ", _jsx(_components.code, {
        children: "1"
      }), "."]
    }), `
`, _jsxs(_components.h4, {
      id: "example-acquire-request-over-https-1",
      children: ["Example ", _jsx(_components.code, {
        children: "acquire"
      }), " request over HTTPS"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Request URL:"
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
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "https://api.agora.io/v1/apps/<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "yourappid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">/cloud_recording/acquire"
                })]
              })
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Content-type"
          }), ": ", _jsx(_components.code, {
            children: "application/json;charset=utf-8"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Authorization"
          }), ": Basic authorization. For more information, see ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording/authentication",
            children: "How to pass the basic HTTP authentication"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Request body:"
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
                  children: '    "cname"'
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
                  children: '"httpClient463224"'
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
                  children: '"527841"'
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
                  children: '    "clientRequest"'
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
                  children: '        "resourceExpiredHour"'
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
                  children: "24"
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
                  children: '        "scene"'
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
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "start-a-process",
      children: "Start a process"
    }), `
`, _jsxs(_components.p, {
      children: ["To enable ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/start-a-recording/webpage-mode",
        children: "web page recording mode"
      }), ", set ", _jsx(_components.code, {
        children: "mode"
      }), " to ", _jsx(_components.code, {
        children: "web"
      }), " when calling ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#start",
        children: _jsx(_components.code, {
          children: "start"
        })
      }), ". Use ", _jsx(_components.code, {
        children: "extensionServiceConfig"
      }), " to configure web page recording, and use ", _jsx(_components.code, {
        children: "storageConfig"
      }), " to configure your third-party cloud storage."]
    }), `
`, _jsx(_components.p, {
      children: "You cannot switch to a different recording mode once you start recording."
    }), `
`, _jsxs(_components.p, {
      children: ["In web page recording mode, you can configure the following parameters in ", _jsx(_components.code, {
        children: "clientRequest"
      }), ":"]
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
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Note"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "storageConfig"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Configures the third-party cloud storage."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "recordingFileConfig"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Configures the recorded files."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Optional"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "extensionServiceConfig"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Configures web page recording."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Required"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.h4, {
      id: "example-start-request-over-https-1",
      children: ["Example ", _jsx(_components.code, {
        children: "start"
      }), " request over HTTPS"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Request URL:"
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
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "https://api.agora.io/v1/apps/<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "yourappid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">/cloud_recording/resourceid/<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "resourceid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">/mode/web/start"
                })]
              })
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Content-type:"
          }), " ", _jsx(_components.code, {
            children: "application/json;charset=utf-8"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Authorization:"
          }), " Basic authorization. For more information, see ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording/authentication",
            children: "How to pass the basic HTTP authentication"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Request body:"
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
                  children: '    "cname"'
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
                  children: '"httpClient463224"'
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
                  children: '"527841"'
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
                  children: '    "clientRequest"'
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
                  children: '"<token>"'
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
                  children: '        "extensionServiceConfig"'
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
                  children: '            "extensionServices"'
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
                  children: '                    "serviceName"'
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
                  children: '"web_recorder_service"'
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
                  children: '                    "errorHandlePolicy"'
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
                  children: '"error_abort"'
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
                  children: '                    "serviceParam"'
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
                  children: '                        "url"'
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
                  children: '"https://xxxxx"'
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
                  children: '                        "audioProfile"'
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
                  children: '                        "videoWidth"'
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
                  children: "1280"
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
                  children: '                        "videoHeight"'
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
                  children: "720"
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
                  children: '                        "maxRecordingHour"'
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
                  children: "3"
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
                  children: '                        "maxVideoDuration"'
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
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                    }"
                })
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
                  children: '                    "serviceName"'
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
                  children: '"rtmp_publish_service"'
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
                  children: '                    "errorHandlePolicy"'
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
                  children: '"error_ignore"'
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
                  children: '                    "serviceParam"'
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
                  children: '                        "outputs"'
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
                  children: "                            {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '                                "rtmpUrl"'
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
                  children: '"rtmp://xxx"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                            }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                        ]"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                    }"
                })
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '        "recordingFileConfig"'
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
                  children: '            "avFileType"'
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
                  children: '                "hls"'
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
                  children: '                "mp4"'
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '        "storageConfig"'
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
                  children: '            "vendor"'
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
                  children: '            "region"'
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
                  children: "3"
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
                  children: '            "bucket"'
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
                  children: '"xxxxx"'
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
                  children: '            "accessKey"'
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
                  children: '"xxxxx"'
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
                  children: '            "secretKey"'
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
                  children: '"xxxxx"'
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
                  children: '            "fileNamePrefix"'
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
                  children: '                "directory1"'
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
                  children: '                "directory2"'
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
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "stop-the-process",
      children: "Stop the process"
    }), `
`, _jsxs(_components.p, {
      children: ["When a recording and stream pushing finishes, call ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#stop",
        children: _jsx(_components.code, {
          children: "stop"
        })
      }), " to leave the channel and stop recording. To use Agora Cloud Web Page Recording again, you need to call the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#acquire",
        children: _jsx(_components.code, {
          children: "acquire"
        })
      }), " method for a new resource ID."]
    }), `
`, _jsxs(_components.h4, {
      id: "an-http-request-example-of-stop",
      children: ["An HTTP request example of ", _jsx(_components.code, {
        children: "stop"
      })]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "The request URL is:"
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
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "https://api.agora.io/v1/apps/<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "yourappid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">/cloud_recording/resourceid/<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "resourceid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">/sid/<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "sid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">/mode/web/stop"
                })]
              })
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Content-type"
          }), ": ", _jsx(_components.code, {
            children: "application/json;charset=utf-8"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Authorization"
          }), ": Basic authorization. For more information, see ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording/authentication",
            children: "How to pass the basic HTTP authentication"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Request body:"
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
                  children: '    "cname"'
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
                  children: '"httpClient463224"'
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
                  children: '"527841"'
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
                  children: '    "clientRequest"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {}"
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
      id: "recorded-files",
      children: "Recorded files"
    }), `
`, _jsxs(_components.p, {
      children: ["A web page recording session generates one M3U8 file and multiple TS files. Depending on the value of ", _jsx(_components.code, {
        children: "avFileType"
      }), ", the recording session may also generate one or more MP4 files. For detailed information about the naming conventions of the recorded files, see ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/process-recorded-files/manage-files",
        children: "Manage Recorded Files"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "pricing",
      children: "Pricing"
    }), `
`, _jsxs(_components.p, {
      children: ["Web page recording mode is free to use by November 1, 2021. See ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/reference/pricing-webpage-recording",
        children: "Pricing for Web Page Recording"
      }), " for details."]
    }), `
`, _jsx(_components.h2, {
      id: "considerations",
      children: "Considerations"
    }), `
`, _jsx(_components.h3, {
      id: "application-restrictions",
      children: "Application restrictions"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The recorded web page should not contain any video that has a resolution higher than 1920 × 1080."
      }), `
`, _jsx(_components.li, {
        children: "The resolution of the videos generated by the web page recording is up to 1920 × 1080."
      }), `
`, _jsx(_components.li, {
        children: "The recorded web page should not use WebGL."
      }), `
`, _jsx(_components.li, {
        children: "The downlink bitrate of your web application should not exceed 10 Mbps, and the uplink bitrate should not exceed 2 Mbps."
      }), `
`, _jsx(_components.li, {
        children: "Ensure that your web application does not consume excessive CPU memory and network bandwidth and that your application is used legally."
      }), `
`, _jsx(_components.li, {
        children: "If you enable the autoplay property for a video element in the recorded web page, the recording service can play the video without any user interaction. However, if you disable the autoplay property, the video cannot be played automatically, and the recording service cannot record the content of the video."
      }), `
`, _jsx(_components.li, {
        children: "The recorded webpage should not be redirected to a different domain, and should avoid any other types of redirection. If the webpage requires login, complete the login first before the recording session starts."
      }), `
`, _jsxs(_components.li, {
        children: ["You can use the ", _jsx(_components.a, {
          href: "/en/realtime-media/cloud-recording/build/customize-the-recording/webpage-load-timeout",
          children: "web page load timeout detection function"
        }), " to prevent the recorded content from being inconsistent with the expected content caused by the web page load timeout."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "restful-api-requests",
      children: "RESTful API requests"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Recording starts approximately five seconds after you send a request. We recommend you send the request in advance to ensure that everything you want to record is captured."
      }), `
`, _jsxs(_components.li, {
        children: ["Web page recording does not support the ", _jsx(_components.code, {
          children: "updateLayout"
        }), " method."]
      }), `
`, _jsxs(_components.li, {
        children: ["If the URL you specify in the ", _jsx(_components.code, {
          children: "start"
        }), " method cannot be accessed, the recording service exits automatically after the ", _jsx(_components.code, {
          children: "start"
        }), " call. To ensure that the recording service starts successfully, see ", _jsx(_components.a, {
          href: "/en/realtime-media/cloud-recording/build/best-practices/integration-best-practices#ensure-the-recording-service-starts-successfully",
          children: "Best Practices in Integrating Cloud Recording"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "other-considerations",
      children: "Other considerations"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["During a recording, when the length of the recorded file reaches around the value of ", _jsx(_components.code, {
          children: "maxVideoDuration"
        }), ", or when the size of the file exceeds around 2 GB, the recording service automatically creates another MP4 file."]
      }), `
`, _jsxs(_components.li, {
        children: ["In a web page recording, the recording service can be considered a client of your web application.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["If the URL you specify in the ", _jsx(_components.code, {
              children: "start"
            }), " method automatically enables the client to publish streams, the browser engine started by the recording server becomes a video sender. As a result, the recording server's video may be displayed as empty in the video panel of your application."]
          }), `
`, _jsx(_components.li, {
            children: "If your application displays a user list, we recommend you hide the recording server from the list to avoid confusion among other users."
          }), `
`]
        }), `
`]
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
