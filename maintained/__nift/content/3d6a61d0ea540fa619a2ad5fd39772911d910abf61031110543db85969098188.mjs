import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Individual recording",
  description: "How to record audio and video in individual recording mode using command line."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="linux-cpp" platforms="[&#x22;linux-cpp&#x22;,&#x22;linux-java&#x22;]" showTabs="true">
  <_PlatformPanel platform="linux-cpp">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="linux-cpp" />

    The On-Premise Recording SDK supports two recording modes:

    * Individual recording mode: This is the default recording mode. The SDK generates one audio and/or video file for each UID.
    * Composite recording mode: Generates a single mixed audio and video file for all UIDs in a channel, or mixes the audio of all UIDs in the channel into an audio file and the video of all UIDs into a video file.

    See [Differences between individual recording mode and composite recording mode](/en/api-reference/faq/integration/recording_mode) to decide which mode you should use.

    ## Prerequisites [#prerequisites]

    Before continuing, follow the [Quickstart](/en/realtime-media/on-premise-recording/quickstart) guide to integrate the Recording SDK and implement the basic recording functionality.

    ## Implement individual recording [#implement-individual-recording]

    The implementation of individual recording is largely similar to the steps in the [Quickstart](/en/realtime-media/on-premise-recording/quickstart) guide. The main differences are in the configuration parameters and the APIs used.

    Refer to the following call sequence diagram to understand the recording workflow.

    <details>
      <summary>
        Sequence diagram
      </summary>

      ![Sequence diagram](https://assets-docs.agora.io/images/on-premise-recording/individual-recording-logic-cpp.svg)
    </details>

    To implement individual recording in your app, follow these steps:

    1. Initialize the recorder with [\`enableMix\`](/en/api-reference/api-ref/on-premise-recording#initialize) set to \`false\` to enable individual recording mode.
    2. Subscribe to the audio and video streams of the users you want to record.
    3. Join the channel using [\`joinChannel\`](/en/api-reference/api-ref/on-premise-recording#joinchannel).
    4. Wait for the [\`onUserJoined\`](/en/api-reference/api-ref/on-premise-recording#onuserjoined) callback to get the \`uid\` of each remote user.
    5. Configure recording for the specific \`uid\`:
       * Use [\`setRecorderConfigByUid\`](/en/api-reference/api-ref/on-premise-recording#setrecorderconfigbyuid) to define video and audio settings, storage path, and maximum duration.
       * Optionally use [\`enableAndUpdateVideoWatermarksByUid\`](/en/api-reference/api-ref/on-premise-recording#enableandupdatevideowatermarksbyuid) to apply watermarks.
    6. Start and stop recording for each user:
       * Call [\`startSingleRecordingByUid\`](/en/api-reference/api-ref/on-premise-recording#startsinglerecordingbyuid) to start.
       * Call [\`stopSingleRecordingByUid\`](/en/api-reference/api-ref/on-premise-recording#stopsinglerecordingbyuid) to stop.

    Refer to the following code to implement these steps:

    \`\`\`cpp
    // Initialize the recorder in individual recording mode
    recorder->initialize(service, false);

    // Subscribe to all audio and video streams
    recorder->subscribeAllAudio();
    recorder->subscribeAllVideo(options);

    // Join the channel
    recorder->joinChannel(config.token.c_str(), config.ChannelName.c_str(), config.UserId.c_str());

    // After receiving the onUserJoined callback, configure recording for the given uid
    agora::media::MediaRecorderConfiguration config;
    config.fps = config_.video.fps;
    config.width = config_.video.width;
    config.height = config_.video.height;
    config.channel_num = config_.audio.numOfChannels;
    config.sample_rate = config_.audio.sampleRate;

    // Generate a unique file name using uid and timestamp
    std::string curTime = getCurrentTimeAsString();
    std::string storagePath = config_.recorderPath + std::string(uid) + "_" + curTime + ".mp4";
    config.storagePath = storagePath.c_str();
    config.streamType = static_cast<agora::media::MediaRecorderStreamType>(config_.recorderStreamType);
    config.maxDurationMs = config_.maxDuration * 1000;

    // Apply configuration for the specific user
    recorder_->setRecorderConfigByUid(config, uid);

    // Apply watermarks (optional)
    recorder_->enableAndUpdateVideoWatermarksByUid(watermarks, config_.waterMarks.size(), uid);

    // Start recording for the user
    recorder_->startSingleRecordingByUid(uid);

    // ...

    // Stop recording for the user
    recorder_->stopSingleRecordingByUid(uid);
    \`\`\`

    ## Reference [#reference]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Considerations [#considerations]

    The individual recording mode supports a specific set of APIs. Calling unsupported methods in the wrong mode has no effect. When using the individual recording mode, the following methods do not work:

    * [\`setRecorderConfig\`](/en/api-reference/api-ref/on-premise-recording#setrecorderconfig)
    * [\`enableAndUpdateVideoWatermarks\`](/en/api-reference/api-ref/on-premise-recording#enableandupdatevideowatermarks)
    * [\`setVideoMixingLayout\`](/en/api-reference/api-ref/on-premise-recording#setvideomixinglayout)
    * [\`startRecording\`](/en/api-reference/api-ref/on-premise-recording#startrecording)
    * [\`stopRecording\`](/en/api-reference/api-ref/on-premise-recording#stoprecording)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="linux-java">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="linux-java" />

    The On-Premise Recording SDK supports two recording modes:

    * Individual recording mode: This is the default recording mode. The SDK generates one audio and/or video file for each UID.
    * Composite recording mode: Generates a single mixed audio and video file for all UIDs in a channel, or mixes the audio of all UIDs in the channel into an audio file and the video of all UIDs into a video file.

    See [Differences between individual recording mode and composite recording mode](/en/api-reference/faq/integration/recording_mode) to decide which mode you should use.

    ## Prerequisites [#prerequisites-1]

    Before continuing, follow the [Quickstart](/en/realtime-media/on-premise-recording/quickstart) guide to integrate the Recording SDK and implement the basic recording functionality.

    ## Implement individual recording [#implement-individual-recording-1]

    The implementation of individual recording is largely similar to the steps in the [Quickstart](/en/realtime-media/on-premise-recording/quickstart) guide. The main differences are in the configuration parameters and the APIs used.

    Refer to the following call sequence diagram to understand the recording workflow.

    <details>
      <summary>
        Sequence diagram
      </summary>

      ![Sequence diagram](https://assets-docs.agora.io/images/on-premise-recording/individual-recording-logic-cpp.svg)
    </details>

    To implement individual recording mode, configure the recorder and use the appropriate APIs as follows:

    1. Initialize the recorder with [\`enableMix\`](/en/api-reference/api-ref/on-premise-recording#initialize) set to \`false\`.
    2. Subscribe to the audio and video streams of the users you want to record.
    3. Join the channel and listen for the [\`onUserJoined\`](/en/api-reference/api-ref/on-premise-recording#onuserjoined) callback to get the \`userId\` of each remote user.
    4. Configure individual recording for each user:
       * Use [\`setRecorderConfigByUid\`](/en/api-reference/api-ref/on-premise-recording#setrecorderconfigbyuid) to define recording options.
       * Optionally, call [\`enableAndUpdateVideoWatermarksByUid\`](/en/api-reference/api-ref/on-premise-recording#enableandupdatevideowatermarksbyuid) to apply watermarks.
    5. Start and stop the recording for each user:
       * Call [\`startSingleRecordingByUid\`](/en/api-reference/api-ref/on-premise-recording#startsinglerecordingbyuid) to start recording.
       * Call [\`stopSingleRecordingByUid\`](/en/api-reference/api-ref/on-premise-recording#stopsinglerecordingbyuid) to stop recording.

    Refer to the following code to implement these steps:

    \`\`\`java
    // Initialize the recorder with individual recording mode enabled
    agoraMediaRtcRecorder.initialize(agoraService, false);

    // Subscribe to all audio and high-quality video streams
    agoraMediaRtcRecorder.subscribeAllAudio();
    VideoSubscriptionOptions options = new VideoSubscriptionOptions();
    options.setEncodedFrameOnly(false);
    options.setType(Constants.VideoStreamType.VIDEO_STREAM_HIGH);
    agoraMediaRtcRecorder.subscribeAllVideo(options);

    // Join the channel
    agoraMediaRtcRecorder.joinChannel(
        recorderConfig.getToken(),
        recorderConfig.getChannelName(),
        recorderConfig.getUserId()
    );

    // In the onUserJoined callback, configure individual recording for the user
    MediaRecorderConfiguration config = new MediaRecorderConfiguration();
    config.setFps(recorderConfig.getVideo().getFps());
    config.setWidth(recorderConfig.getVideo().getWidth());
    config.setHeight(recorderConfig.getVideo().getHeight());
    config.setChannelNum(recorderConfig.getAudio().getNumOfChannels());
    config.setSampleRate(recorderConfig.getAudio().getSampleRate());

    // Set a unique file name based on UID and timestamp
    String curTime = getCurrentTimeAsString();
    String storagePath = recorderConfig.getRecorderPath() + uid + "_" + curTime + ".mp4";
    config.setStoragePath(storagePath);
    config.setStreamType(Constants.MediaRecorderStreamType.STREAM_TYPE_BOTH);
    config.setMaxDurationMs(recorderConfig.getMaxDuration() * 1000);

    // Apply the configuration for the specific UID
    agoraMediaRtcRecorder.setRecorderConfigByUid(config, uid);

    // Apply a watermark (optional)
    agoraMediaRtcRecorder.enableAndUpdateVideoWatermarksByUid(watermarks, uid);

    // Start recording for the specific UID
    agoraMediaRtcRecorder.startSingleRecordingByUid(uid);

    // ...

    // Stop recording for the specific UID
    agoraMediaRtcRecorder.stopSingleRecordingByUid(uid);
    \`\`\`

    ## Reference [#reference-1]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Considerations [#considerations-1]

    The individual recording mode supports a specific set of APIs. Calling unsupported methods in the wrong mode has no effect. When using the individual recording mode, the following methods do not work:

    * [\`setRecorderConfig\`](/en/api-reference/api-ref/on-premise-recording#setrecorderconfig)
    * [\`enableAndUpdateVideoWatermarks\`](/en/api-reference/api-ref/on-premise-recording#enableandupdatevideowatermarks)
    * [\`setVideoMixingLayout\`](/en/api-reference/api-ref/on-premise-recording#setvideomixinglayout)
    * [\`startRecording\`](/en/api-reference/api-ref/on-premise-recording#startrecording)
    * [\`stopRecording\`](/en/api-reference/api-ref/on-premise-recording#stoprecording)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The On-Premise Recording SDK supports two recording modes:"
  }, {
    heading: undefined,
    content: "Individual recording mode: This is the default recording mode. The SDK generates one audio and/or video file for each UID."
  }, {
    heading: undefined,
    content: "Composite recording mode: Generates a single mixed audio and video file for all UIDs in a channel, or mixes the audio of all UIDs in the channel into an audio file and the video of all UIDs into a video file."
  }, {
    heading: undefined,
    content: "See Differences between individual recording mode and composite recording mode to decide which mode you should use."
  }, {
    heading: "prerequisites",
    content: "Before continuing, follow the Quickstart guide to integrate the Recording SDK and implement the basic recording functionality."
  }, {
    heading: "implement-individual-recording",
    content: "The implementation of individual recording is largely similar to the steps in the Quickstart guide. The main differences are in the configuration parameters and the APIs used."
  }, {
    heading: "implement-individual-recording",
    content: "Refer to the following call sequence diagram to understand the recording workflow."
  }, {
    heading: "implement-individual-recording",
    content: "To implement individual recording in your app, follow these steps:"
  }, {
    heading: "implement-individual-recording",
    content: "Initialize the recorder with `enableMix` set to `false` to enable individual recording mode."
  }, {
    heading: "implement-individual-recording",
    content: "Subscribe to the audio and video streams of the users you want to record."
  }, {
    heading: "implement-individual-recording",
    content: "Join the channel using `joinChannel`."
  }, {
    heading: "implement-individual-recording",
    content: "Wait for the `onUserJoined` callback to get the `uid` of each remote user."
  }, {
    heading: "implement-individual-recording",
    content: "Configure recording for the specific `uid`:"
  }, {
    heading: "implement-individual-recording",
    content: "Use `setRecorderConfigByUid` to define video and audio settings, storage path, and maximum duration."
  }, {
    heading: "implement-individual-recording",
    content: "Optionally use `enableAndUpdateVideoWatermarksByUid` to apply watermarks."
  }, {
    heading: "implement-individual-recording",
    content: "Start and stop recording for each user:"
  }, {
    heading: "implement-individual-recording",
    content: "Call `startSingleRecordingByUid` to start."
  }, {
    heading: "implement-individual-recording",
    content: "Call `stopSingleRecordingByUid` to stop."
  }, {
    heading: "implement-individual-recording",
    content: "Refer to the following code to implement these steps:"
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "considerations",
    content: "The individual recording mode supports a specific set of APIs. Calling unsupported methods in the wrong mode has no effect. When using the individual recording mode, the following methods do not work:"
  }, {
    heading: "considerations",
    content: "`setRecorderConfig`"
  }, {
    heading: "considerations",
    content: "`enableAndUpdateVideoWatermarks`"
  }, {
    heading: "considerations",
    content: "`setVideoMixingLayout`"
  }, {
    heading: "considerations",
    content: "`startRecording`"
  }, {
    heading: "considerations",
    content: "`stopRecording`"
  }, {
    heading: "considerations",
    content: "The On-Premise Recording SDK supports two recording modes:"
  }, {
    heading: "considerations",
    content: "Individual recording mode: This is the default recording mode. The SDK generates one audio and/or video file for each UID."
  }, {
    heading: "considerations",
    content: "Composite recording mode: Generates a single mixed audio and video file for all UIDs in a channel, or mixes the audio of all UIDs in the channel into an audio file and the video of all UIDs into a video file."
  }, {
    heading: "considerations",
    content: "See Differences between individual recording mode and composite recording mode to decide which mode you should use."
  }, {
    heading: "prerequisites-1",
    content: "Before continuing, follow the Quickstart guide to integrate the Recording SDK and implement the basic recording functionality."
  }, {
    heading: "implement-individual-recording-1",
    content: "The implementation of individual recording is largely similar to the steps in the Quickstart guide. The main differences are in the configuration parameters and the APIs used."
  }, {
    heading: "implement-individual-recording-1",
    content: "Refer to the following call sequence diagram to understand the recording workflow."
  }, {
    heading: "implement-individual-recording-1",
    content: "To implement individual recording mode, configure the recorder and use the appropriate APIs as follows:"
  }, {
    heading: "implement-individual-recording-1",
    content: "Initialize the recorder with `enableMix` set to `false`."
  }, {
    heading: "implement-individual-recording-1",
    content: "Subscribe to the audio and video streams of the users you want to record."
  }, {
    heading: "implement-individual-recording-1",
    content: "Join the channel and listen for the `onUserJoined` callback to get the `userId` of each remote user."
  }, {
    heading: "implement-individual-recording-1",
    content: "Configure individual recording for each user:"
  }, {
    heading: "implement-individual-recording-1",
    content: "Use `setRecorderConfigByUid` to define recording options."
  }, {
    heading: "implement-individual-recording-1",
    content: "Optionally, call `enableAndUpdateVideoWatermarksByUid` to apply watermarks."
  }, {
    heading: "implement-individual-recording-1",
    content: "Start and stop the recording for each user:"
  }, {
    heading: "implement-individual-recording-1",
    content: "Call `startSingleRecordingByUid` to start recording."
  }, {
    heading: "implement-individual-recording-1",
    content: "Call `stopSingleRecordingByUid` to stop recording."
  }, {
    heading: "implement-individual-recording-1",
    content: "Refer to the following code to implement these steps:"
  }, {
    heading: "reference-1",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "considerations-1",
    content: "The individual recording mode supports a specific set of APIs. Calling unsupported methods in the wrong mode has no effect. When using the individual recording mode, the following methods do not work:"
  }, {
    heading: "considerations-1",
    content: "`setRecorderConfig`"
  }, {
    heading: "considerations-1",
    content: "`enableAndUpdateVideoWatermarks`"
  }, {
    heading: "considerations-1",
    content: "`setVideoMixingLayout`"
  }, {
    heading: "considerations-1",
    content: "`startRecording`"
  }, {
    heading: "considerations-1",
    content: "`stopRecording`"
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implement-individual-recording",
    content: "Implement individual recording"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "considerations",
    content: "Considerations"
  }, {
    id: "prerequisites-1",
    content: "Prerequisites"
  }, {
    id: "implement-individual-recording-1",
    content: "Implement individual recording"
  }, {
    id: "reference-1",
    content: "Reference"
  }, {
    id: "considerations-1",
    content: "Considerations"
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
  url: "#implement-individual-recording",
  title: _jsx(_Fragment, {
    children: "Implement individual recording"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#considerations",
  title: _jsx(_Fragment, {
    children: "Considerations"
  })
}, {
  depth: 2,
  url: "#prerequisites-1",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-individual-recording-1",
  title: _jsx(_Fragment, {
    children: "Implement individual recording"
  })
}, {
  depth: 2,
  url: "#reference-1",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#considerations-1",
  title: _jsx(_Fragment, {
    children: "Considerations"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  }, { _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_PlatformTabsGroup, {
    groupMode: "structured",
    canonicalPlatform: "linux-cpp",
    platforms: '["linux-cpp","linux-java"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "linux-cpp",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "linux-cpp",
        platform: "linux-cpp"
      }), _jsx(_components.p, {
        children: "The On-Premise Recording SDK supports two recording modes:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Individual recording mode: This is the default recording mode. The SDK generates one audio and/or video file for each UID."
        }), `
`, _jsx(_components.li, {
          children: "Composite recording mode: Generates a single mixed audio and video file for all UIDs in a channel, or mixes the audio of all UIDs in the channel into an audio file and the video of all UIDs into a video file."
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["See ", _jsx(_components.a, {
          href: "/en/api-reference/faq/integration/recording_mode",
          children: "Differences between individual recording mode and composite recording mode"
        }), " to decide which mode you should use."]
      }), _jsx(_components.h2, {
        id: "prerequisites",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Before continuing, follow the ", _jsx(_components.a, {
          href: "/en/realtime-media/on-premise-recording/quickstart",
          children: "Quickstart"
        }), " guide to integrate the Recording SDK and implement the basic recording functionality."]
      }), _jsx(_components.h2, {
        id: "implement-individual-recording",
        children: "Implement individual recording"
      }), _jsxs(_components.p, {
        children: ["The implementation of individual recording is largely similar to the steps in the ", _jsx(_components.a, {
          href: "/en/realtime-media/on-premise-recording/quickstart",
          children: "Quickstart"
        }), " guide. The main differences are in the configuration parameters and the APIs used."]
      }), _jsx(_components.p, {
        children: "Refer to the following call sequence diagram to understand the recording workflow."
      }), _jsxs("details", {
        children: [_jsx("summary", {
          children: "Sequence diagram"
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/on-premise-recording/individual-recording-logic-cpp.svg",
            alt: "Sequence diagram"
          })
        })]
      }), _jsx(_components.p, {
        children: "To implement individual recording in your app, follow these steps:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: ["Initialize the recorder with ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#initialize",
            children: _jsx(_components.code, {
              children: "enableMix"
            })
          }), " set to ", _jsx(_components.code, {
            children: "false"
          }), " to enable individual recording mode."]
        }), `
`, _jsx(_components.li, {
          children: "Subscribe to the audio and video streams of the users you want to record."
        }), `
`, _jsxs(_components.li, {
          children: ["Join the channel using ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#joinchannel",
            children: _jsx(_components.code, {
              children: "joinChannel"
            })
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["Wait for the ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#onuserjoined",
            children: _jsx(_components.code, {
              children: "onUserJoined"
            })
          }), " callback to get the ", _jsx(_components.code, {
            children: "uid"
          }), " of each remote user."]
        }), `
`, _jsxs(_components.li, {
          children: ["Configure recording for the specific ", _jsx(_components.code, {
            children: "uid"
          }), ":", `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Use ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/on-premise-recording#setrecorderconfigbyuid",
                children: _jsx(_components.code, {
                  children: "setRecorderConfigByUid"
                })
              }), " to define video and audio settings, storage path, and maximum duration."]
            }), `
`, _jsxs(_components.li, {
              children: ["Optionally use ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/on-premise-recording#enableandupdatevideowatermarksbyuid",
                children: _jsx(_components.code, {
                  children: "enableAndUpdateVideoWatermarksByUid"
                })
              }), " to apply watermarks."]
            }), `
`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: ["Start and stop recording for each user:", `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Call ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/on-premise-recording#startsinglerecordingbyuid",
                children: _jsx(_components.code, {
                  children: "startSingleRecordingByUid"
                })
              }), " to start."]
            }), `
`, _jsxs(_components.li, {
              children: ["Call ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/on-premise-recording#stopsinglerecordingbyuid",
                children: _jsx(_components.code, {
                  children: "stopSingleRecordingByUid"
                })
              }), " to stop."]
            }), `
`]
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "Refer to the following code to implement these steps:"
      }), _jsx(_Fragment, {
        children: _jsx(_components.pre, {
          className: "shiki shiki-themes github-light github-dark",
          style: {
            "--shiki-light": "#24292e",
            "--shiki-dark": "#e1e4e8",
            "--shiki-light-bg": "#fff",
            "--shiki-dark-bg": "#24292e"
          },
          tabIndex: "0",
          icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Initialize the recorder in individual recording mode"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorder->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "initialize"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(service, "
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
                children: ");"
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
                children: "// Subscribe to all audio and video streams"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorder->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "subscribeAllAudio"
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
                children: "recorder->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "subscribeAllVideo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(options);"
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
                children: "// Join the channel"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorder->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "joinChannel"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(config.token."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "c_str"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(), config.ChannelName."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "c_str"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(), config.UserId."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "c_str"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "());"
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
                children: "// After receiving the onUserJoined callback, configure recording for the given uid"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "agora"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "media"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::MediaRecorderConfiguration config;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config.fps "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " config_.video.fps;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config.width "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " config_.video.width;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config.height "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " config_.video.height;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config.channel_num "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " config_.audio.numOfChannels;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config.sample_rate "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " config_.audio.sampleRate;"
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
                children: "// Generate a unique file name using uid and timestamp"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "std"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::string curTime "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " getCurrentTimeAsString"
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "std"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::string storagePath "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " config_.recorderPath "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "+"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " std"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(uid) "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "+"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "_"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " +"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " curTime "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "+"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' ".mp4"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config.storagePath "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " storagePath."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "c_str"
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
                children: "config.streamType "
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
                children: " static_cast<"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "agora"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "media"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::MediaRecorderStreamType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ">"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(config_.recorderStreamType);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config.maxDurationMs "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " config_.maxDuration "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " 1000"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
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
                children: "// Apply configuration for the specific user"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorder_->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setRecorderConfigByUid"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(config, uid);"
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
                children: "// Apply watermarks (optional)"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorder_->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "enableAndUpdateVideoWatermarksByUid"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(watermarks, config_.waterMarks."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "size"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(), uid);"
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
                children: "// Start recording for the user"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorder_->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "startSingleRecordingByUid"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(uid);"
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
                children: "// ..."
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
                children: "// Stop recording for the user"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "recorder_->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "stopSingleRecordingByUid"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(uid);"
              })]
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "reference",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "considerations",
        children: "Considerations"
      }), _jsx(_components.p, {
        children: "The individual recording mode supports a specific set of APIs. Calling unsupported methods in the wrong mode has no effect. When using the individual recording mode, the following methods do not work:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#setrecorderconfig",
            children: _jsx(_components.code, {
              children: "setRecorderConfig"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#enableandupdatevideowatermarks",
            children: _jsx(_components.code, {
              children: "enableAndUpdateVideoWatermarks"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#setvideomixinglayout",
            children: _jsx(_components.code, {
              children: "setVideoMixingLayout"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#startrecording",
            children: _jsx(_components.code, {
              children: "startRecording"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#stoprecording",
            children: _jsx(_components.code, {
              children: "stopRecording"
            })
          })
        }), `
`]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "linux-java",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "linux-cpp",
        platform: "linux-java"
      }), _jsx(_components.p, {
        children: "The On-Premise Recording SDK supports two recording modes:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Individual recording mode: This is the default recording mode. The SDK generates one audio and/or video file for each UID."
        }), `
`, _jsx(_components.li, {
          children: "Composite recording mode: Generates a single mixed audio and video file for all UIDs in a channel, or mixes the audio of all UIDs in the channel into an audio file and the video of all UIDs into a video file."
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["See ", _jsx(_components.a, {
          href: "/en/api-reference/faq/integration/recording_mode",
          children: "Differences between individual recording mode and composite recording mode"
        }), " to decide which mode you should use."]
      }), _jsx(_components.h2, {
        id: "prerequisites-1",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Before continuing, follow the ", _jsx(_components.a, {
          href: "/en/realtime-media/on-premise-recording/quickstart",
          children: "Quickstart"
        }), " guide to integrate the Recording SDK and implement the basic recording functionality."]
      }), _jsx(_components.h2, {
        id: "implement-individual-recording-1",
        children: "Implement individual recording"
      }), _jsxs(_components.p, {
        children: ["The implementation of individual recording is largely similar to the steps in the ", _jsx(_components.a, {
          href: "/en/realtime-media/on-premise-recording/quickstart",
          children: "Quickstart"
        }), " guide. The main differences are in the configuration parameters and the APIs used."]
      }), _jsx(_components.p, {
        children: "Refer to the following call sequence diagram to understand the recording workflow."
      }), _jsxs("details", {
        children: [_jsx("summary", {
          children: "Sequence diagram"
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/on-premise-recording/individual-recording-logic-cpp.svg",
            alt: "Sequence diagram"
          })
        })]
      }), _jsx(_components.p, {
        children: "To implement individual recording mode, configure the recorder and use the appropriate APIs as follows:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: ["Initialize the recorder with ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#initialize",
            children: _jsx(_components.code, {
              children: "enableMix"
            })
          }), " set to ", _jsx(_components.code, {
            children: "false"
          }), "."]
        }), `
`, _jsx(_components.li, {
          children: "Subscribe to the audio and video streams of the users you want to record."
        }), `
`, _jsxs(_components.li, {
          children: ["Join the channel and listen for the ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#onuserjoined",
            children: _jsx(_components.code, {
              children: "onUserJoined"
            })
          }), " callback to get the ", _jsx(_components.code, {
            children: "userId"
          }), " of each remote user."]
        }), `
`, _jsxs(_components.li, {
          children: ["Configure individual recording for each user:", `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Use ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/on-premise-recording#setrecorderconfigbyuid",
                children: _jsx(_components.code, {
                  children: "setRecorderConfigByUid"
                })
              }), " to define recording options."]
            }), `
`, _jsxs(_components.li, {
              children: ["Optionally, call ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/on-premise-recording#enableandupdatevideowatermarksbyuid",
                children: _jsx(_components.code, {
                  children: "enableAndUpdateVideoWatermarksByUid"
                })
              }), " to apply watermarks."]
            }), `
`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: ["Start and stop the recording for each user:", `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Call ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/on-premise-recording#startsinglerecordingbyuid",
                children: _jsx(_components.code, {
                  children: "startSingleRecordingByUid"
                })
              }), " to start recording."]
            }), `
`, _jsxs(_components.li, {
              children: ["Call ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/on-premise-recording#stopsinglerecordingbyuid",
                children: _jsx(_components.code, {
                  children: "stopSingleRecordingByUid"
                })
              }), " to stop recording."]
            }), `
`]
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "Refer to the following code to implement these steps:"
      }), _jsx(_Fragment, {
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
                children: "// Initialize the recorder with individual recording mode enabled"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "agoraMediaRtcRecorder."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "initialize"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(agoraService, "
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
                children: ");"
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
                children: "// Subscribe to all audio and high-quality video streams"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "agoraMediaRtcRecorder."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "subscribeAllAudio"
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
                children: "VideoSubscriptionOptions options "
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
                children: " new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " VideoSubscriptionOptions"
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
                children: "options."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setEncodedFrameOnly"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
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
                children: ");"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "options."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(Constants.VideoStreamType.VIDEO_STREAM_HIGH);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "agoraMediaRtcRecorder."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "subscribeAllVideo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(options);"
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
                children: "// Join the channel"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "agoraMediaRtcRecorder."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "joinChannel"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getToken"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(),"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getChannelName"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(),"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getUserId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ");"
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
                children: "// In the onUserJoined callback, configure individual recording for the user"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "MediaRecorderConfiguration config "
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
                children: " new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " MediaRecorderConfiguration"
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
                children: "config."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setFps"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getVideo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getFps"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "());"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setWidth"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getVideo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getWidth"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "());"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setHeight"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getVideo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getHeight"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "());"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setChannelNum"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getAudio"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getNumOfChannels"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "());"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setSampleRate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getAudio"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getSampleRate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "());"
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
                children: "// Set a unique file name based on UID and timestamp"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "String curTime "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " getCurrentTimeAsString"
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
                children: "String storagePath "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getRecorderPath"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "() "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "+"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " uid "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "+"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "_"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " +"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " curTime "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "+"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' ".mp4"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setStoragePath"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(storagePath);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setStreamType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(Constants.MediaRecorderStreamType.STREAM_TYPE_BOTH);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "config."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setMaxDurationMs"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(recorderConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getMaxDuration"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "() "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " 1000"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ");"
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
                children: "// Apply the configuration for the specific UID"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "agoraMediaRtcRecorder."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setRecorderConfigByUid"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(config, uid);"
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
                children: "// Apply a watermark (optional)"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "agoraMediaRtcRecorder."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "enableAndUpdateVideoWatermarksByUid"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(watermarks, uid);"
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
                children: "// Start recording for the specific UID"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "agoraMediaRtcRecorder."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "startSingleRecordingByUid"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(uid);"
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
                children: "// ..."
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
                children: "// Stop recording for the specific UID"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "agoraMediaRtcRecorder."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "stopSingleRecordingByUid"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(uid);"
              })]
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "reference-1",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "considerations-1",
        children: "Considerations"
      }), _jsx(_components.p, {
        children: "The individual recording mode supports a specific set of APIs. Calling unsupported methods in the wrong mode has no effect. When using the individual recording mode, the following methods do not work:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#setrecorderconfig",
            children: _jsx(_components.code, {
              children: "setRecorderConfig"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#enableandupdatevideowatermarks",
            children: _jsx(_components.code, {
              children: "enableAndUpdateVideoWatermarks"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#setvideomixinglayout",
            children: _jsx(_components.code, {
              children: "setVideoMixingLayout"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#startrecording",
            children: _jsx(_components.code, {
              children: "startRecording"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#stoprecording",
            children: _jsx(_components.code, {
              children: "stopRecording"
            })
          })
        }), `
`]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
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
