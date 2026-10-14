import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I solve issues relating to recording files?"
};
export let _markdown = "\n\n### Why aren't there any files generated under the recording folder? [#why-arent-there-any-files-generated-under-the-recording-folder]\n\n* Check whether you enter the same `appID` and `channelProfile` (Communication or Live Broadcast) as the Agora Native SDK integrated into your app. Communication and Live Broadcast cannot interoperate.\n* Check if the recording process successfully joined the channel. Check if the App ID and channel name are valid. If the App Certificate is enabled, ensure that a valid Channel Key or Token is used when joining the channel. You can check the `appID`, channel, and `channelKey` parameters in the recording log, `recording_sys.log`.\n* Check if there is any Native/Web user in the channel. At least one Native/Web SDK user is required in the channel for the recording client to generate a recording file. If there is a Native/Web user, ensure that the user sent a stream. If not, the recording file cannot be generated.\n\n### Why is the recording duration of the recorded file incorrect? [#why-is-the-recording-duration-of-the-recorded-file-incorrect]\n\nIf the Native/Web SDK and Recording SDK are in the same channel during the same time, contact Agora customer support.\n\n### Why is there no audio when playing the recorded video? [#why-is-there-no-audio-when-playing-the-recorded-video]\n\nThe recorded audio and video files are independent; the audio is in AAC format, while the video is in MPEG-4 format. The video file does not contain any voice, you need to manually merge the audio and video files into one file. If the recorded files are already transcoded, contact Agora customer support.\n\n### Why can't I play the MPEG-4 file after the recording is complete? [#why-cant-i-play-the-mpeg-4-file-after-the-recording-is-complete]\n\nThis is usually because the player is not supported. Refer to the [Supported Players List](/en/api-reference/faq/integration/recording_player).\n\n### Why can't I play the recorded video files after enabling encryption mode? [#why-cant-i-play-the-recorded-video-files-after-enabling-encryption-mode]\n\nIn encryption mode, if the encryption password is not entered or incorrect, the recorded file does not play. The audio output is corrupted because it is encrypted.\n\n### Why are there only audio files and no video files after recording? [#why-are-there-only-audio-files-and-no-video-files-after-recording]\n\nThis usually occurs when the Native/Web SDK and Recording SDK use different communication modes. Check the Argus SDK Client Role.\n\nIf the same communication mode is used, check the following parameters for the client sending the video and the receiver receiving the video: Video Receive Bitrate, Video Decoder In/Out Frame Rate, and ARS Received H264 Frame Num. If the parameters are fine, check the `recording_sys.log` file.\n\n### Why is there a blank period at the beginning of the recorded and transcoded video during playback? [#why-is-there-a-blank-period-at-the-beginning-of-the-recorded-and-transcoded-video-during-playback]\n\nPossible reasons:\n\n* Poor network conditions.\n* The video recording is only created when the I frame of the video packet is received; which means that the previously received B and P frames are ignored.\n* The size of each video frame is significantly larger than each voice frame. This means that the voice packet is transmitted quicker and received before the video packet. Once the video packet is received, the recording starts.\n\n### Why is there a black screen when playing the recorded video, but the sound is normal? [#why-is-there-a-black-screen-when-playing-the-recorded-video-but-the-sound-is-normal]\n\nThis is usually because the player is not supported. Refer to the [Supported Players List](/en/api-reference/faq/integration/recording_player).\n\n### Why is the recorded video inverted? [#why-is-the-recorded-video-inverted]\n\nPlease upgrade to the latest official version. Contact Agora customer support for any issues.\n\n### What should I do if the audio and video are out of sync when I play the recording file? [#what-should-i-do-if-the-audio-and-video-are-out-of-sync-when-i-play-the-recording-file]\n\nPlease upgrade to the latest official version. Contact Agora customer support for any issues.\n";
export let structuredData = {
  contents: [{
    heading: "why-arent-there-any-files-generated-under-the-recording-folder",
    content: "Check whether you enter the same `appID` and `channelProfile` (Communication or Live Broadcast) as the Agora Native SDK integrated into your app. Communication and Live Broadcast cannot interoperate."
  }, {
    heading: "why-arent-there-any-files-generated-under-the-recording-folder",
    content: "Check if the recording process successfully joined the channel. Check if the App ID and channel name are valid. If the App Certificate is enabled, ensure that a valid Channel Key or Token is used when joining the channel. You can check the `appID`, channel, and `channelKey` parameters in the recording log, `recording_sys.log`."
  }, {
    heading: "why-arent-there-any-files-generated-under-the-recording-folder",
    content: "Check if there is any Native/Web user in the channel. At least one Native/Web SDK user is required in the channel for the recording client to generate a recording file. If there is a Native/Web user, ensure that the user sent a stream. If not, the recording file cannot be generated."
  }, {
    heading: "why-is-the-recording-duration-of-the-recorded-file-incorrect",
    content: "If the Native/Web SDK and Recording SDK are in the same channel during the same time, contact Agora customer support."
  }, {
    heading: "why-is-there-no-audio-when-playing-the-recorded-video",
    content: "The recorded audio and video files are independent; the audio is in AAC format, while the video is in MPEG-4 format. The video file does not contain any voice, you need to manually merge the audio and video files into one file. If the recorded files are already transcoded, contact Agora customer support."
  }, {
    heading: "why-cant-i-play-the-mpeg-4-file-after-the-recording-is-complete",
    content: "This is usually because the player is not supported. Refer to the Supported Players List."
  }, {
    heading: "why-cant-i-play-the-recorded-video-files-after-enabling-encryption-mode",
    content: "In encryption mode, if the encryption password is not entered or incorrect, the recorded file does not play. The audio output is corrupted because it is encrypted."
  }, {
    heading: "why-are-there-only-audio-files-and-no-video-files-after-recording",
    content: "This usually occurs when the Native/Web SDK and Recording SDK use different communication modes. Check the Argus SDK Client Role."
  }, {
    heading: "why-are-there-only-audio-files-and-no-video-files-after-recording",
    content: "If the same communication mode is used, check the following parameters for the client sending the video and the receiver receiving the video: Video Receive Bitrate, Video Decoder In/Out Frame Rate, and ARS Received H264 Frame Num. If the parameters are fine, check the `recording_sys.log` file."
  }, {
    heading: "why-is-there-a-blank-period-at-the-beginning-of-the-recorded-and-transcoded-video-during-playback",
    content: "Possible reasons:"
  }, {
    heading: "why-is-there-a-blank-period-at-the-beginning-of-the-recorded-and-transcoded-video-during-playback",
    content: "Poor network conditions."
  }, {
    heading: "why-is-there-a-blank-period-at-the-beginning-of-the-recorded-and-transcoded-video-during-playback",
    content: "The video recording is only created when the I frame of the video packet is received; which means that the previously received B and P frames are ignored."
  }, {
    heading: "why-is-there-a-blank-period-at-the-beginning-of-the-recorded-and-transcoded-video-during-playback",
    content: "The size of each video frame is significantly larger than each voice frame. This means that the voice packet is transmitted quicker and received before the video packet. Once the video packet is received, the recording starts."
  }, {
    heading: "why-is-there-a-black-screen-when-playing-the-recorded-video-but-the-sound-is-normal",
    content: "This is usually because the player is not supported. Refer to the Supported Players List."
  }, {
    heading: "why-is-the-recorded-video-inverted",
    content: "Please upgrade to the latest official version. Contact Agora customer support for any issues."
  }, {
    heading: "what-should-i-do-if-the-audio-and-video-are-out-of-sync-when-i-play-the-recording-file",
    content: "Please upgrade to the latest official version. Contact Agora customer support for any issues."
  }],
  headings: [{
    id: "why-arent-there-any-files-generated-under-the-recording-folder",
    content: "Why aren't there any files generated under the recording folder?"
  }, {
    id: "why-is-the-recording-duration-of-the-recorded-file-incorrect",
    content: "Why is the recording duration of the recorded file incorrect?"
  }, {
    id: "why-is-there-no-audio-when-playing-the-recorded-video",
    content: "Why is there no audio when playing the recorded video?"
  }, {
    id: "why-cant-i-play-the-mpeg-4-file-after-the-recording-is-complete",
    content: "Why can't I play the MPEG-4 file after the recording is complete?"
  }, {
    id: "why-cant-i-play-the-recorded-video-files-after-enabling-encryption-mode",
    content: "Why can't I play the recorded video files after enabling encryption mode?"
  }, {
    id: "why-are-there-only-audio-files-and-no-video-files-after-recording",
    content: "Why are there only audio files and no video files after recording?"
  }, {
    id: "why-is-there-a-blank-period-at-the-beginning-of-the-recorded-and-transcoded-video-during-playback",
    content: "Why is there a blank period at the beginning of the recorded and transcoded video during playback?"
  }, {
    id: "why-is-there-a-black-screen-when-playing-the-recorded-video-but-the-sound-is-normal",
    content: "Why is there a black screen when playing the recorded video, but the sound is normal?"
  }, {
    id: "why-is-the-recorded-video-inverted",
    content: "Why is the recorded video inverted?"
  }, {
    id: "what-should-i-do-if-the-audio-and-video-are-out-of-sync-when-i-play-the-recording-file",
    content: "What should I do if the audio and video are out of sync when I play the recording file?"
  }]
};
export let toc = [{
  depth: 3,
  url: "#why-arent-there-any-files-generated-under-the-recording-folder",
  title: _jsx(_Fragment, {
    children: "Why aren't there any files generated under the recording folder?"
  })
}, {
  depth: 3,
  url: "#why-is-the-recording-duration-of-the-recorded-file-incorrect",
  title: _jsx(_Fragment, {
    children: "Why is the recording duration of the recorded file incorrect?"
  })
}, {
  depth: 3,
  url: "#why-is-there-no-audio-when-playing-the-recorded-video",
  title: _jsx(_Fragment, {
    children: "Why is there no audio when playing the recorded video?"
  })
}, {
  depth: 3,
  url: "#why-cant-i-play-the-mpeg-4-file-after-the-recording-is-complete",
  title: _jsx(_Fragment, {
    children: "Why can't I play the MPEG-4 file after the recording is complete?"
  })
}, {
  depth: 3,
  url: "#why-cant-i-play-the-recorded-video-files-after-enabling-encryption-mode",
  title: _jsx(_Fragment, {
    children: "Why can't I play the recorded video files after enabling encryption mode?"
  })
}, {
  depth: 3,
  url: "#why-are-there-only-audio-files-and-no-video-files-after-recording",
  title: _jsx(_Fragment, {
    children: "Why are there only audio files and no video files after recording?"
  })
}, {
  depth: 3,
  url: "#why-is-there-a-blank-period-at-the-beginning-of-the-recorded-and-transcoded-video-during-playback",
  title: _jsx(_Fragment, {
    children: "Why is there a blank period at the beginning of the recorded and transcoded video during playback?"
  })
}, {
  depth: 3,
  url: "#why-is-there-a-black-screen-when-playing-the-recorded-video-but-the-sound-is-normal",
  title: _jsx(_Fragment, {
    children: "Why is there a black screen when playing the recorded video, but the sound is normal?"
  })
}, {
  depth: 3,
  url: "#why-is-the-recorded-video-inverted",
  title: _jsx(_Fragment, {
    children: "Why is the recorded video inverted?"
  })
}, {
  depth: 3,
  url: "#what-should-i-do-if-the-audio-and-video-are-out-of-sync-when-i-play-the-recording-file",
  title: _jsx(_Fragment, {
    children: "What should I do if the audio and video are out of sync when I play the recording file?"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h3, {
      id: "why-arent-there-any-files-generated-under-the-recording-folder",
      children: "Why aren't there any files generated under the recording folder?"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Check whether you enter the same ", _jsx(_components.code, {
          children: "appID"
        }), " and ", _jsx(_components.code, {
          children: "channelProfile"
        }), " (Communication or Live Broadcast) as the Agora Native SDK integrated into your app. Communication and Live Broadcast cannot interoperate."]
      }), `
`, _jsxs(_components.li, {
        children: ["Check if the recording process successfully joined the channel. Check if the App ID and channel name are valid. If the App Certificate is enabled, ensure that a valid Channel Key or Token is used when joining the channel. You can check the ", _jsx(_components.code, {
          children: "appID"
        }), ", channel, and ", _jsx(_components.code, {
          children: "channelKey"
        }), " parameters in the recording log, ", _jsx(_components.code, {
          children: "recording_sys.log"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Check if there is any Native/Web user in the channel. At least one Native/Web SDK user is required in the channel for the recording client to generate a recording file. If there is a Native/Web user, ensure that the user sent a stream. If not, the recording file cannot be generated."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "why-is-the-recording-duration-of-the-recorded-file-incorrect",
      children: "Why is the recording duration of the recorded file incorrect?"
    }), `
`, _jsx(_components.p, {
      children: "If the Native/Web SDK and Recording SDK are in the same channel during the same time, contact Agora customer support."
    }), `
`, _jsx(_components.h3, {
      id: "why-is-there-no-audio-when-playing-the-recorded-video",
      children: "Why is there no audio when playing the recorded video?"
    }), `
`, _jsx(_components.p, {
      children: "The recorded audio and video files are independent; the audio is in AAC format, while the video is in MPEG-4 format. The video file does not contain any voice, you need to manually merge the audio and video files into one file. If the recorded files are already transcoded, contact Agora customer support."
    }), `
`, _jsx(_components.h3, {
      id: "why-cant-i-play-the-mpeg-4-file-after-the-recording-is-complete",
      children: "Why can't I play the MPEG-4 file after the recording is complete?"
    }), `
`, _jsxs(_components.p, {
      children: ["This is usually because the player is not supported. Refer to the ", _jsx(_components.a, {
        href: "/en/api-reference/faq/integration/recording_player",
        children: "Supported Players List"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "why-cant-i-play-the-recorded-video-files-after-enabling-encryption-mode",
      children: "Why can't I play the recorded video files after enabling encryption mode?"
    }), `
`, _jsx(_components.p, {
      children: "In encryption mode, if the encryption password is not entered or incorrect, the recorded file does not play. The audio output is corrupted because it is encrypted."
    }), `
`, _jsx(_components.h3, {
      id: "why-are-there-only-audio-files-and-no-video-files-after-recording",
      children: "Why are there only audio files and no video files after recording?"
    }), `
`, _jsx(_components.p, {
      children: "This usually occurs when the Native/Web SDK and Recording SDK use different communication modes. Check the Argus SDK Client Role."
    }), `
`, _jsxs(_components.p, {
      children: ["If the same communication mode is used, check the following parameters for the client sending the video and the receiver receiving the video: Video Receive Bitrate, Video Decoder In/Out Frame Rate, and ARS Received H264 Frame Num. If the parameters are fine, check the ", _jsx(_components.code, {
        children: "recording_sys.log"
      }), " file."]
    }), `
`, _jsx(_components.h3, {
      id: "why-is-there-a-blank-period-at-the-beginning-of-the-recorded-and-transcoded-video-during-playback",
      children: "Why is there a blank period at the beginning of the recorded and transcoded video during playback?"
    }), `
`, _jsx(_components.p, {
      children: "Possible reasons:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Poor network conditions."
      }), `
`, _jsx(_components.li, {
        children: "The video recording is only created when the I frame of the video packet is received; which means that the previously received B and P frames are ignored."
      }), `
`, _jsx(_components.li, {
        children: "The size of each video frame is significantly larger than each voice frame. This means that the voice packet is transmitted quicker and received before the video packet. Once the video packet is received, the recording starts."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "why-is-there-a-black-screen-when-playing-the-recorded-video-but-the-sound-is-normal",
      children: "Why is there a black screen when playing the recorded video, but the sound is normal?"
    }), `
`, _jsxs(_components.p, {
      children: ["This is usually because the player is not supported. Refer to the ", _jsx(_components.a, {
        href: "/en/api-reference/faq/integration/recording_player",
        children: "Supported Players List"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "why-is-the-recorded-video-inverted",
      children: "Why is the recorded video inverted?"
    }), `
`, _jsx(_components.p, {
      children: "Please upgrade to the latest official version. Contact Agora customer support for any issues."
    }), `
`, _jsx(_components.h3, {
      id: "what-should-i-do-if-the-audio-and-video-are-out-of-sync-when-i-play-the-recording-file",
      children: "What should I do if the audio and video are out of sync when I play the recording file?"
    }), `
`, _jsx(_components.p, {
      children: "Please upgrade to the latest official version. Contact Agora customer support for any issues."
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
