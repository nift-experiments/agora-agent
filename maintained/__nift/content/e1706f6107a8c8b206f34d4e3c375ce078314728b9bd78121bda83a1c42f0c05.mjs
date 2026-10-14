import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Glossary",
  description: "A list of common Agora terms referenced in Media Gateway documentation."
};
export let _markdown = `

## A [#a]

### Agora Console [#agora-console]

Agora Console is the site where developers manage Agora projects and services.

### App ID [#app-id]

An App ID is a randomly generated string provided by Agora and is the unique identifier of an app.

### App certificate [#app-certificate]

An App certificate is a randomly generated string provided by Agora for enabling token authentication.

### Audio mixing [#audio-mixing]

Audio mixing means combining multiple audio streams into one.

## C [#c]

### Channel [#channel]

A channel is a way of grouping users together and is identified by a unique channel name.

### Channel profile [#channel-profile]

The channel profile is a configuration that Agora uses to apply optimized algorithms for different real-time use cases.

### Cloud proxy [#cloud-proxy]

Cloud proxy is a proxy service that enables users to connect to Agora services through a firewall by using fixed IP addresses.

## D [#d]

### Delay [#delay]

In real-time audio and video communication, delay refers to the time elapsed from when data is sent to when it is received.

### Dual-stream mode [#dual-stream-mode]

In dual-stream mode, the RTC SDK simultaneously transmits a higher-resolution video stream along with an additional low-resolution, low-bitrate video stream.

## H [#h]

### Host [#host]

The host is a user who has streaming permissions in a channel.

## J [#j]

### Jitter [#jitter]

In real-time audio and video communication, jitter is the variation in the delay of data packets transmitted continuously on the network.

## L [#l]

### Last mile [#last-mile]

The last mile refers to the network between the Agora edge server and the end user's device.

### Low-quality video stream [#low-quality-video-stream]

In dual-stream mode, the SDK transmits two video streams of differing quality at the same time.

## M [#m]

### Media stream [#media-stream]

A media stream is an object that contains media data.

### Media Push [#media-push]

Media Push enables you to upload audio and video streams from Agora channels to a CDN to reach a larger audience.

## P [#p]

### Packet loss [#packet-loss]

Packet loss refers to data packets transmitted on the network failing to arrive at their intended destination.

### Publish [#publish]

Publishing is the act of sending a user's audio or video data to the channel.

## S [#s]

### SDRTN(R) [#sdrtnr]

SDRTN(R) is Agora's globally distributed Software-Defined Real-Time Network.

### Stream [#stream]

A stream is a sequence of digitally encoded coherent signals that contains audio or video data.

### Subscribe [#subscribe]

Subscribing is the act of receiving media streams published by remote users.

## T [#t]

### Token [#token]

A token, also known as a dynamic key, is used for authentication when an app user joins a channel or logs in to Agora Signaling.

### Transcoding [#transcoding]

Transcoding is the process of decoding audio and video data and then re-encoding them into the target conversion output or format.

## U [#u]

### User ID (UID) [#user-id-uid]

In the Agora RTC SDK, a user ID identifies a user in the channel.

### User role [#user-role]

The type of user role determines whether the user in the channel has streaming permissions.

## V [#v]

### Video layout [#video-layout]

Video layout arranges the display of users when multiple users are mixed into one stream, such as in Media Push or composite recording.

### Video mixing [#video-mixing]

Video mixing means combining multiple video streams into one.

### Video profile [#video-profile]

The video profile refers to a set of video attributes, such as resolution, bitrate, and frame rate.

### RTC SDK [#rtc-sdk]

The RTC SDK is an SDK developed by Agora to enable developers to add real-time video and audio interaction to their projects.

### Voice SDK [#voice-sdk]

The Voice SDK enables real-time audio communication.

## W [#w]

### Web page recording mode [#web-page-recording-mode]

In web page recording mode, the content and audio of a specified web page are recorded in a single file.
`;
export let structuredData = {
  contents: [{
    heading: "agora-console",
    content: "Agora Console is the site where developers manage Agora projects and services."
  }, {
    heading: "app-id",
    content: "An App ID is a randomly generated string provided by Agora and is the unique identifier of an app."
  }, {
    heading: "app-certificate",
    content: "An App certificate is a randomly generated string provided by Agora for enabling token authentication."
  }, {
    heading: "audio-mixing",
    content: "Audio mixing means combining multiple audio streams into one."
  }, {
    heading: "channel",
    content: "A channel is a way of grouping users together and is identified by a unique channel name."
  }, {
    heading: "channel-profile",
    content: "The channel profile is a configuration that Agora uses to apply optimized algorithms for different real-time use cases."
  }, {
    heading: "cloud-proxy",
    content: "Cloud proxy is a proxy service that enables users to connect to Agora services through a firewall by using fixed IP addresses."
  }, {
    heading: "delay",
    content: "In real-time audio and video communication, delay refers to the time elapsed from when data is sent to when it is received."
  }, {
    heading: "dual-stream-mode",
    content: "In dual-stream mode, the RTC SDK simultaneously transmits a higher-resolution video stream along with an additional low-resolution, low-bitrate video stream."
  }, {
    heading: "host",
    content: "The host is a user who has streaming permissions in a channel."
  }, {
    heading: "jitter",
    content: "In real-time audio and video communication, jitter is the variation in the delay of data packets transmitted continuously on the network."
  }, {
    heading: "last-mile",
    content: "The last mile refers to the network between the Agora edge server and the end user's device."
  }, {
    heading: "low-quality-video-stream",
    content: "In dual-stream mode, the SDK transmits two video streams of differing quality at the same time."
  }, {
    heading: "media-stream",
    content: "A media stream is an object that contains media data."
  }, {
    heading: "media-push",
    content: "Media Push enables you to upload audio and video streams from Agora channels to a CDN to reach a larger audience."
  }, {
    heading: "packet-loss",
    content: "Packet loss refers to data packets transmitted on the network failing to arrive at their intended destination."
  }, {
    heading: "publish",
    content: "Publishing is the act of sending a user's audio or video data to the channel."
  }, {
    heading: "sdrtnr",
    content: "SDRTN(R) is Agora's globally distributed Software-Defined Real-Time Network."
  }, {
    heading: "stream",
    content: "A stream is a sequence of digitally encoded coherent signals that contains audio or video data."
  }, {
    heading: "subscribe",
    content: "Subscribing is the act of receiving media streams published by remote users."
  }, {
    heading: "token",
    content: "A token, also known as a dynamic key, is used for authentication when an app user joins a channel or logs in to Agora Signaling."
  }, {
    heading: "transcoding",
    content: "Transcoding is the process of decoding audio and video data and then re-encoding them into the target conversion output or format."
  }, {
    heading: "user-id-uid",
    content: "In the Agora RTC SDK, a user ID identifies a user in the channel."
  }, {
    heading: "user-role",
    content: "The type of user role determines whether the user in the channel has streaming permissions."
  }, {
    heading: "video-layout",
    content: "Video layout arranges the display of users when multiple users are mixed into one stream, such as in Media Push or composite recording."
  }, {
    heading: "video-mixing",
    content: "Video mixing means combining multiple video streams into one."
  }, {
    heading: "video-profile",
    content: "The video profile refers to a set of video attributes, such as resolution, bitrate, and frame rate."
  }, {
    heading: "rtc-sdk",
    content: "The RTC SDK is an SDK developed by Agora to enable developers to add real-time video and audio interaction to their projects."
  }, {
    heading: "voice-sdk",
    content: "The Voice SDK enables real-time audio communication."
  }, {
    heading: "web-page-recording-mode",
    content: "In web page recording mode, the content and audio of a specified web page are recorded in a single file."
  }],
  headings: [{
    id: "a",
    content: "A"
  }, {
    id: "agora-console",
    content: "Agora Console"
  }, {
    id: "app-id",
    content: "App ID"
  }, {
    id: "app-certificate",
    content: "App certificate"
  }, {
    id: "audio-mixing",
    content: "Audio mixing"
  }, {
    id: "c",
    content: "C"
  }, {
    id: "channel",
    content: "Channel"
  }, {
    id: "channel-profile",
    content: "Channel profile"
  }, {
    id: "cloud-proxy",
    content: "Cloud proxy"
  }, {
    id: "d",
    content: "D"
  }, {
    id: "delay",
    content: "Delay"
  }, {
    id: "dual-stream-mode",
    content: "Dual-stream mode"
  }, {
    id: "h",
    content: "H"
  }, {
    id: "host",
    content: "Host"
  }, {
    id: "j",
    content: "J"
  }, {
    id: "jitter",
    content: "Jitter"
  }, {
    id: "l",
    content: "L"
  }, {
    id: "last-mile",
    content: "Last mile"
  }, {
    id: "low-quality-video-stream",
    content: "Low-quality video stream"
  }, {
    id: "m",
    content: "M"
  }, {
    id: "media-stream",
    content: "Media stream"
  }, {
    id: "media-push",
    content: "Media Push"
  }, {
    id: "p",
    content: "P"
  }, {
    id: "packet-loss",
    content: "Packet loss"
  }, {
    id: "publish",
    content: "Publish"
  }, {
    id: "s",
    content: "S"
  }, {
    id: "sdrtnr",
    content: "SDRTN(R)"
  }, {
    id: "stream",
    content: "Stream"
  }, {
    id: "subscribe",
    content: "Subscribe"
  }, {
    id: "t",
    content: "T"
  }, {
    id: "token",
    content: "Token"
  }, {
    id: "transcoding",
    content: "Transcoding"
  }, {
    id: "u",
    content: "U"
  }, {
    id: "user-id-uid",
    content: "User ID (UID)"
  }, {
    id: "user-role",
    content: "User role"
  }, {
    id: "v",
    content: "V"
  }, {
    id: "video-layout",
    content: "Video layout"
  }, {
    id: "video-mixing",
    content: "Video mixing"
  }, {
    id: "video-profile",
    content: "Video profile"
  }, {
    id: "rtc-sdk",
    content: "RTC SDK"
  }, {
    id: "voice-sdk",
    content: "Voice SDK"
  }, {
    id: "w",
    content: "W"
  }, {
    id: "web-page-recording-mode",
    content: "Web page recording mode"
  }]
};
export let toc = [{
  depth: 2,
  url: "#a",
  title: _jsx(_Fragment, {
    children: "A"
  })
}, {
  depth: 3,
  url: "#agora-console",
  title: _jsx(_Fragment, {
    children: "Agora Console"
  })
}, {
  depth: 3,
  url: "#app-id",
  title: _jsx(_Fragment, {
    children: "App ID"
  })
}, {
  depth: 3,
  url: "#app-certificate",
  title: _jsx(_Fragment, {
    children: "App certificate"
  })
}, {
  depth: 3,
  url: "#audio-mixing",
  title: _jsx(_Fragment, {
    children: "Audio mixing"
  })
}, {
  depth: 2,
  url: "#c",
  title: _jsx(_Fragment, {
    children: "C"
  })
}, {
  depth: 3,
  url: "#channel",
  title: _jsx(_Fragment, {
    children: "Channel"
  })
}, {
  depth: 3,
  url: "#channel-profile",
  title: _jsx(_Fragment, {
    children: "Channel profile"
  })
}, {
  depth: 3,
  url: "#cloud-proxy",
  title: _jsx(_Fragment, {
    children: "Cloud proxy"
  })
}, {
  depth: 2,
  url: "#d",
  title: _jsx(_Fragment, {
    children: "D"
  })
}, {
  depth: 3,
  url: "#delay",
  title: _jsx(_Fragment, {
    children: "Delay"
  })
}, {
  depth: 3,
  url: "#dual-stream-mode",
  title: _jsx(_Fragment, {
    children: "Dual-stream mode"
  })
}, {
  depth: 2,
  url: "#h",
  title: _jsx(_Fragment, {
    children: "H"
  })
}, {
  depth: 3,
  url: "#host",
  title: _jsx(_Fragment, {
    children: "Host"
  })
}, {
  depth: 2,
  url: "#j",
  title: _jsx(_Fragment, {
    children: "J"
  })
}, {
  depth: 3,
  url: "#jitter",
  title: _jsx(_Fragment, {
    children: "Jitter"
  })
}, {
  depth: 2,
  url: "#l",
  title: _jsx(_Fragment, {
    children: "L"
  })
}, {
  depth: 3,
  url: "#last-mile",
  title: _jsx(_Fragment, {
    children: "Last mile"
  })
}, {
  depth: 3,
  url: "#low-quality-video-stream",
  title: _jsx(_Fragment, {
    children: "Low-quality video stream"
  })
}, {
  depth: 2,
  url: "#m",
  title: _jsx(_Fragment, {
    children: "M"
  })
}, {
  depth: 3,
  url: "#media-stream",
  title: _jsx(_Fragment, {
    children: "Media stream"
  })
}, {
  depth: 3,
  url: "#media-push",
  title: _jsx(_Fragment, {
    children: "Media Push"
  })
}, {
  depth: 2,
  url: "#p",
  title: _jsx(_Fragment, {
    children: "P"
  })
}, {
  depth: 3,
  url: "#packet-loss",
  title: _jsx(_Fragment, {
    children: "Packet loss"
  })
}, {
  depth: 3,
  url: "#publish",
  title: _jsx(_Fragment, {
    children: "Publish"
  })
}, {
  depth: 2,
  url: "#s",
  title: _jsx(_Fragment, {
    children: "S"
  })
}, {
  depth: 3,
  url: "#sdrtnr",
  title: _jsx(_Fragment, {
    children: "SDRTN(R)"
  })
}, {
  depth: 3,
  url: "#stream",
  title: _jsx(_Fragment, {
    children: "Stream"
  })
}, {
  depth: 3,
  url: "#subscribe",
  title: _jsx(_Fragment, {
    children: "Subscribe"
  })
}, {
  depth: 2,
  url: "#t",
  title: _jsx(_Fragment, {
    children: "T"
  })
}, {
  depth: 3,
  url: "#token",
  title: _jsx(_Fragment, {
    children: "Token"
  })
}, {
  depth: 3,
  url: "#transcoding",
  title: _jsx(_Fragment, {
    children: "Transcoding"
  })
}, {
  depth: 2,
  url: "#u",
  title: _jsx(_Fragment, {
    children: "U"
  })
}, {
  depth: 3,
  url: "#user-id-uid",
  title: _jsx(_Fragment, {
    children: "User ID (UID)"
  })
}, {
  depth: 3,
  url: "#user-role",
  title: _jsx(_Fragment, {
    children: "User role"
  })
}, {
  depth: 2,
  url: "#v",
  title: _jsx(_Fragment, {
    children: "V"
  })
}, {
  depth: 3,
  url: "#video-layout",
  title: _jsx(_Fragment, {
    children: "Video layout"
  })
}, {
  depth: 3,
  url: "#video-mixing",
  title: _jsx(_Fragment, {
    children: "Video mixing"
  })
}, {
  depth: 3,
  url: "#video-profile",
  title: _jsx(_Fragment, {
    children: "Video profile"
  })
}, {
  depth: 3,
  url: "#rtc-sdk",
  title: _jsx(_Fragment, {
    children: "RTC SDK"
  })
}, {
  depth: 3,
  url: "#voice-sdk",
  title: _jsx(_Fragment, {
    children: "Voice SDK"
  })
}, {
  depth: 2,
  url: "#w",
  title: _jsx(_Fragment, {
    children: "W"
  })
}, {
  depth: 3,
  url: "#web-page-recording-mode",
  title: _jsx(_Fragment, {
    children: "Web page recording mode"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "a",
      children: "A"
    }), `
`, _jsx(_components.h3, {
      id: "agora-console",
      children: "Agora Console"
    }), `
`, _jsx(_components.p, {
      children: "Agora Console is the site where developers manage Agora projects and services."
    }), `
`, _jsx(_components.h3, {
      id: "app-id",
      children: "App ID"
    }), `
`, _jsx(_components.p, {
      children: "An App ID is a randomly generated string provided by Agora and is the unique identifier of an app."
    }), `
`, _jsx(_components.h3, {
      id: "app-certificate",
      children: "App certificate"
    }), `
`, _jsx(_components.p, {
      children: "An App certificate is a randomly generated string provided by Agora for enabling token authentication."
    }), `
`, _jsx(_components.h3, {
      id: "audio-mixing",
      children: "Audio mixing"
    }), `
`, _jsx(_components.p, {
      children: "Audio mixing means combining multiple audio streams into one."
    }), `
`, _jsx(_components.h2, {
      id: "c",
      children: "C"
    }), `
`, _jsx(_components.h3, {
      id: "channel",
      children: "Channel"
    }), `
`, _jsx(_components.p, {
      children: "A channel is a way of grouping users together and is identified by a unique channel name."
    }), `
`, _jsx(_components.h3, {
      id: "channel-profile",
      children: "Channel profile"
    }), `
`, _jsx(_components.p, {
      children: "The channel profile is a configuration that Agora uses to apply optimized algorithms for different real-time use cases."
    }), `
`, _jsx(_components.h3, {
      id: "cloud-proxy",
      children: "Cloud proxy"
    }), `
`, _jsx(_components.p, {
      children: "Cloud proxy is a proxy service that enables users to connect to Agora services through a firewall by using fixed IP addresses."
    }), `
`, _jsx(_components.h2, {
      id: "d",
      children: "D"
    }), `
`, _jsx(_components.h3, {
      id: "delay",
      children: "Delay"
    }), `
`, _jsx(_components.p, {
      children: "In real-time audio and video communication, delay refers to the time elapsed from when data is sent to when it is received."
    }), `
`, _jsx(_components.h3, {
      id: "dual-stream-mode",
      children: "Dual-stream mode"
    }), `
`, _jsx(_components.p, {
      children: "In dual-stream mode, the RTC SDK simultaneously transmits a higher-resolution video stream along with an additional low-resolution, low-bitrate video stream."
    }), `
`, _jsx(_components.h2, {
      id: "h",
      children: "H"
    }), `
`, _jsx(_components.h3, {
      id: "host",
      children: "Host"
    }), `
`, _jsx(_components.p, {
      children: "The host is a user who has streaming permissions in a channel."
    }), `
`, _jsx(_components.h2, {
      id: "j",
      children: "J"
    }), `
`, _jsx(_components.h3, {
      id: "jitter",
      children: "Jitter"
    }), `
`, _jsx(_components.p, {
      children: "In real-time audio and video communication, jitter is the variation in the delay of data packets transmitted continuously on the network."
    }), `
`, _jsx(_components.h2, {
      id: "l",
      children: "L"
    }), `
`, _jsx(_components.h3, {
      id: "last-mile",
      children: "Last mile"
    }), `
`, _jsx(_components.p, {
      children: "The last mile refers to the network between the Agora edge server and the end user's device."
    }), `
`, _jsx(_components.h3, {
      id: "low-quality-video-stream",
      children: "Low-quality video stream"
    }), `
`, _jsx(_components.p, {
      children: "In dual-stream mode, the SDK transmits two video streams of differing quality at the same time."
    }), `
`, _jsx(_components.h2, {
      id: "m",
      children: "M"
    }), `
`, _jsx(_components.h3, {
      id: "media-stream",
      children: "Media stream"
    }), `
`, _jsx(_components.p, {
      children: "A media stream is an object that contains media data."
    }), `
`, _jsx(_components.h3, {
      id: "media-push",
      children: "Media Push"
    }), `
`, _jsx(_components.p, {
      children: "Media Push enables you to upload audio and video streams from Agora channels to a CDN to reach a larger audience."
    }), `
`, _jsx(_components.h2, {
      id: "p",
      children: "P"
    }), `
`, _jsx(_components.h3, {
      id: "packet-loss",
      children: "Packet loss"
    }), `
`, _jsx(_components.p, {
      children: "Packet loss refers to data packets transmitted on the network failing to arrive at their intended destination."
    }), `
`, _jsx(_components.h3, {
      id: "publish",
      children: "Publish"
    }), `
`, _jsx(_components.p, {
      children: "Publishing is the act of sending a user's audio or video data to the channel."
    }), `
`, _jsx(_components.h2, {
      id: "s",
      children: "S"
    }), `
`, _jsx(_components.h3, {
      id: "sdrtnr",
      children: "SDRTN(R)"
    }), `
`, _jsx(_components.p, {
      children: "SDRTN(R) is Agora's globally distributed Software-Defined Real-Time Network."
    }), `
`, _jsx(_components.h3, {
      id: "stream",
      children: "Stream"
    }), `
`, _jsx(_components.p, {
      children: "A stream is a sequence of digitally encoded coherent signals that contains audio or video data."
    }), `
`, _jsx(_components.h3, {
      id: "subscribe",
      children: "Subscribe"
    }), `
`, _jsx(_components.p, {
      children: "Subscribing is the act of receiving media streams published by remote users."
    }), `
`, _jsx(_components.h2, {
      id: "t",
      children: "T"
    }), `
`, _jsx(_components.h3, {
      id: "token",
      children: "Token"
    }), `
`, _jsx(_components.p, {
      children: "A token, also known as a dynamic key, is used for authentication when an app user joins a channel or logs in to Agora Signaling."
    }), `
`, _jsx(_components.h3, {
      id: "transcoding",
      children: "Transcoding"
    }), `
`, _jsx(_components.p, {
      children: "Transcoding is the process of decoding audio and video data and then re-encoding them into the target conversion output or format."
    }), `
`, _jsx(_components.h2, {
      id: "u",
      children: "U"
    }), `
`, _jsx(_components.h3, {
      id: "user-id-uid",
      children: "User ID (UID)"
    }), `
`, _jsx(_components.p, {
      children: "In the Agora RTC SDK, a user ID identifies a user in the channel."
    }), `
`, _jsx(_components.h3, {
      id: "user-role",
      children: "User role"
    }), `
`, _jsx(_components.p, {
      children: "The type of user role determines whether the user in the channel has streaming permissions."
    }), `
`, _jsx(_components.h2, {
      id: "v",
      children: "V"
    }), `
`, _jsx(_components.h3, {
      id: "video-layout",
      children: "Video layout"
    }), `
`, _jsx(_components.p, {
      children: "Video layout arranges the display of users when multiple users are mixed into one stream, such as in Media Push or composite recording."
    }), `
`, _jsx(_components.h3, {
      id: "video-mixing",
      children: "Video mixing"
    }), `
`, _jsx(_components.p, {
      children: "Video mixing means combining multiple video streams into one."
    }), `
`, _jsx(_components.h3, {
      id: "video-profile",
      children: "Video profile"
    }), `
`, _jsx(_components.p, {
      children: "The video profile refers to a set of video attributes, such as resolution, bitrate, and frame rate."
    }), `
`, _jsx(_components.h3, {
      id: "rtc-sdk",
      children: "RTC SDK"
    }), `
`, _jsx(_components.p, {
      children: "The RTC SDK is an SDK developed by Agora to enable developers to add real-time video and audio interaction to their projects."
    }), `
`, _jsx(_components.h3, {
      id: "voice-sdk",
      children: "Voice SDK"
    }), `
`, _jsx(_components.p, {
      children: "The Voice SDK enables real-time audio communication."
    }), `
`, _jsx(_components.h2, {
      id: "w",
      children: "W"
    }), `
`, _jsx(_components.h3, {
      id: "web-page-recording-mode",
      children: "Web page recording mode"
    }), `
`, _jsx(_components.p, {
      children: "In web page recording mode, the content and audio of a specified web page are recorded in a single file."
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
