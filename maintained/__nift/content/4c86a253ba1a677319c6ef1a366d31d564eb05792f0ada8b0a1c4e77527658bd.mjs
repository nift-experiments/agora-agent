import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Glossary",
  description: "A list of terms used in Agora documentation."
};
export let _markdown = `

## A [#a]

### Agora Analytics [#agora-analytics]

Agora Analytics is a site for developers to track and analyze the usage and quality of calls.

### Agora Cloud Backup [#agora-cloud-backup]

Agora Cloud Backup is a backup cloud storage service used in cloud recording. If the recording service cannot upload the recorded files to the specified third-party cloud storage, then the service automatically and temporarily stores them in the backup cloud.

### Agora Console [#agora-console]

Agora Console is a site for developers to manage Agora projects and services.

### App ID [#app-id]

An app ID is a randomly generated string provided by Agora and is the unique identifier of an app.

### App certificate [#app-certificate]

An app certificate is a randomly generated string provided by Agora for enabling token authentication. It is one of the required arguments for generating a token.

### Audience [#audience]

Audience are users who do not have streaming permissions in a channel. An audience user can subscribe to remote audio and video streams, but cannot publish audio and video streams. For more information, see [user role](#user-role).

### Audience (becoming) [#audience-becoming]

Becoming an audience describes a use-case within an Interactive Live Streaming channel (the channel profile is Live-Broadcast) when a host switches the user role and becomes an audience.

### Audio mixing [#audio-mixing]

Audio mixing means combining multiple audio streams into one.

### Audio profile [#audio-profile]

An audio profile includes the sample rate, encoding scheme, number of channels, and bitrate for encoded audio data.

### Audio route [#audio-route]

The audio route is the pathway audio data takes through audio hardware components during playback.

## C [#c]

### Callee [#callee]

A callee is a Signaling user who receives a [call invitation](#call-invitation).

### Caller [#caller]

A caller is a Signaling user who sends a [call invitation](#call-invitation).

### Call invitation [#call-invitation]

Call invitation is a communication protocol based on the peer-to-peer messaging functionality of the Agora Signaling SDK. Call invitation supports starting, ending, accepting, and refusing calls.

### Channel [#channel]

In Agora's platform, a channel is a way of grouping users together and is identified by a unique channel name. Users who connect to the same channel can communicate with each other. A channel is created when the first user joins and ceases to exist when the last user leaves.

### Channel attribute [#channel-attribute]

Channel attributes are tags added to Signaling channels, including the property name, property value, the ID of the last Signaling user who updated the attribute, and the time of the last update.

### Channel message [#channel-message]

A channel message is a message that a Signaling user sends to all Signaling users in a channel.

### Channel profile [#channel-profile]

The channel profile is a configuration that Agora uses to apply optimized algorithms for different real-time use-cases.

### Cloud proxy [#cloud-proxy]

Cloud proxy is a proxy service that enables users to connect to Agora services through a firewall by using fixed IP addresses.

### Cloud Recording [#cloud-recording]

Cloud Recording is a component provided by Agora for recording and saving voice and video calls and interactive streaming on a third-party cloud storage through RESTful APIs.

### Co-hosting [#co-hosting]

Co-hosting describes a use-case with more than one host.

### Composite recording mode [#composite-recording-mode]

Composite recording mode generates a single mixed audio and video file for all UIDs in a channel.

### Custom rendering [#custom-rendering]

Custom rendering is the process where developers collect raw data from the SDK and process it according to specific needs.

### Custom source [#custom-source]

Custom source is the process where an app captures raw data by itself.

## D [#d]

### Delay [#delay]

In real-time audio and video communication, delay refers to the time elapsed from when the data is sent to when it is received.

### Dual-stream mode [#dual-stream-mode]

In the dual-stream mode, the RTC SDK simultaneously transmits a higher-resolution video stream along with an additional low-resolution, low bitrate video stream.

## F [#f]

### Freeze [#freeze]

Freeze refers to choppy audio or video playback caused by a poor network connection or limited device performance during real-time audio and video communication.

## H [#h]

### High-quality video stream [#high-quality-video-stream]

In dual-stream mode, the SDK transmits two video streams of differing quality at the same time. See [dual stream mode](#dual-stream-mode) for details.

### Host [#host]

The host refers to a user who has streaming permissions in a channel. A host can publish audio and video. A host may also subscribe to audio and video published by other hosts.

### Host (becoming) [#host-becoming]

Becoming a host describes a use-case within an Interactive Live Streaming channel (the channel profile is Live-Broadcast) when an audience switches the user role and becomes a host.

## I [#i]

### Individual recording mode [#individual-recording-mode]

Individual recording mode records audio and video of each UID as separate files.

### Inject online media stream [#inject-online-media-stream]

Inject online media stream refers to injecting an online media stream in an Interactive Live Streaming channel to share the stream with all users in the channel. The Agora RTC SDK provides a method for developers to inject an online mixed audio and video stream or an audio only stream to a channel.

### Interactive Live Streaming [#interactive-live-streaming]

Enabled by either Agora’s RTC SDK or Voice SDK, Interactive Live Streaming gives you full control over the streaming experience from a standard one-to-many stream to a highly-interactive live event.

## J [#j]

### Jitter [#jitter]

In real-time audio and video communication, jitter is the variation in the delay of data packets transmitted continuously on the network.

## L [#l]

### Last mile [#last-mile]

The last mile refers to the network between the Agora edge server and the end user's device.

### Loopback test [#loopback-test]

A loopback test sends a signal from a communication device and is then returned (looped back) to it. It is often used to determine whether a device is working properly.

### Low-quality video stream [#low-quality-video-stream]

In dual-stream mode, the SDK transmits two video streams of differing quality at the same time. The low-quality video stream has a lower resolution and bitrate than the high-quality video stream. See [dual stream mode](#dual-stream-mode) for details.

## M [#m]

### MediaPlayer kit [#mediaplayer-kit]

The mediaplayer kit is a plug-in of the RTC SDK to play local and online media resources and publish the media streams to other users in an Interactive Live Streaming channel.

### Media stream [#media-stream]

A media stream is an object that contains media data.

### Media Push [#media-push]

Media Push enables you to upload audio and video streams from Agora channels and upload them to a Content Delivery Network (CDN) to reach a larger audience.

### Mirror [#mirror]

Mirroring is an effect that a video image renders.

## O [#o]

### Offline [#offline]

Offline describes the status of a Signaling user who has successfully logged out of Signaling.

### Offline message [#offline-message]

An offline message is a peer-to-peer message that an online Signaling user sends to an offline Signaling user.

### Online [#online]

Online describes the status of a user who has successfully logged in to the Agora Signaling system or stays disconnected from the Agora Signaling system for more than 30 seconds.

### On-Premise Recording [#on-premise-recording]

On-Premise Recording is a component provided by Agora for recording and saving voice and video calls and interactive streaming on a Linux server.

## P [#p]

### Packet loss [#packet-loss]

Packet loss refers to the data packets transmitted on the network failing to arrive at their intended destination.

### Peer-to-peer message [#peer-to-peer-message]

A peer-to-peer message is a message that an online Signaling user sends to an online or offline user.

### Publish [#publish]

Publishing is the action of sending the user's audio and/or video data to the channel.

## R [#r]

### Raw data [#raw-data]

Raw data, including raw audio data and raw video data, is the unprocessed data which developers can collect during real-time communication.

### Render the first video frame [#render-the-first-video-frame]

Rendering the first video frame is the action of rendering the first video frame on the local device.

## S [#s]

### Agora SDRTN® [#agora-sdrtn]

Software-Defined Real-Time Network (SDRTN®) is a real-time transmission network built by Agora and is the only network infrastructure specifically designed for real-time communications in the world.

### Signaling SDK [#signaling-sdk]

You use the Signaling SDK to implement real-time messaging use-cases that require low latency and high concurrency for a global audience.

### Slice [#slice]

Slicing means cutting recorded audio or video into separate files according to specific rules. During an Agora Cloud Recording, the recording service cuts the streams and generates multiple slice files (TS or WebM files) and M3U8 files that serve as a playlist of the slice files.

### Sound localization [#sound-localization]

Sound localization means determining the distance to and direction of a sound through hearing the difference of volume, time, and timbre between users' ears.

### Stream fallback [#stream-fallback]

In use-cases where multiple users engage in real-time audio and video communication, user experience can be impaired if the network condition is too poor to guarantee both audio and video at the same time.

### Stream mixing [#stream-mixing]

Stream mixing means combining multiple media streams into one. It may include the mixing of video streams (video mixing) and audio streams (audio mixing).

### Subscribe [#subscribe]

In the Agora RTC SDK, subscribing is the action of receiving media streams published to the channel. In the Agora Signaling SDK, subscribing is the action of monitoring the online status of one or multiple Signaling users.

## T [#t]

### TCP [#tcp]

TCP (Transmission Control Protocol) is a connection-oriented and reliable transport layer communication protocol.

### Token [#token]

A token, also known as a dynamic key, is used for authentication when an app user joins a channel or logs onto the Agora Signaling.

### Transcoding [#transcoding]

Transcoding is the process of decoding audio and video data and then re-encoding them into the target conversion output or format.

## U [#u]

### UDP [#udp]

UDP (User Datagram Protocol) is a connectionless-oriented and unreliable transport layer communication protocol.

### User attribute [#user-attribute]

User attributes are tags added to Signaling users, including property names and property values.

### User ID (uid) [#user-id-uid]

In the Agora RTC SDK, a user ID identifies a user in the channel. The user ID is a 32-bit signed integer, with a value range from -231 to 231-1, that you can specify yourself. If you specify \`0\` for the user ID when joining a channel, the SDK generates a random number and returns the value in the join channel success callback.

In the Agora Signaling SDK, a user ID identifies a user in Signaling.

The user ID in the Agora RTC SDK and the Agora Signaling SDK are independent of each other.

### User role [#user-role]

The type of user role determines whether the user in the channel has streaming permissions.

## V [#v]

### Video layout [#video-layout]

Video layout arranges the display of users when multiple users are mixed into one stream, such as in Media Push or a composite recording.

### Video mixing [#video-mixing]

Video mixing means combining multiple video streams into one.

### Video profile [#video-profile]

The video profile refers to a set of video attributes, such as resolution, bitrate, and frame rate.

### RTC SDK [#rtc-sdk]

An SDK developed by Agora to enable developers to add real-time audio interaction to their projects.

### Voice SDK [#voice-sdk]

Agora provides the Voice SDK to enable real-time audio communication.

## W [#w]

### Web page recording mode [#web-page-recording-mode]

In web page recording mode, the content and audio of a specified web page are recorded in a single file.
`;
export let structuredData = {
  contents: [{
    heading: "agora-analytics",
    content: "Agora Analytics is a site for developers to track and analyze the usage and quality of calls."
  }, {
    heading: "agora-cloud-backup",
    content: "Agora Cloud Backup is a backup cloud storage service used in cloud recording. If the recording service cannot upload the recorded files to the specified third-party cloud storage, then the service automatically and temporarily stores them in the backup cloud."
  }, {
    heading: "agora-console",
    content: "Agora Console is a site for developers to manage Agora projects and services."
  }, {
    heading: "app-id",
    content: "An app ID is a randomly generated string provided by Agora and is the unique identifier of an app."
  }, {
    heading: "app-certificate",
    content: "An app certificate is a randomly generated string provided by Agora for enabling token authentication. It is one of the required arguments for generating a token."
  }, {
    heading: "audience",
    content: "Audience are users who do not have streaming permissions in a channel. An audience user can subscribe to remote audio and video streams, but cannot publish audio and video streams. For more information, see user role."
  }, {
    heading: "audience-becoming",
    content: "Becoming an audience describes a use-case within an Interactive Live Streaming channel (the channel profile is Live-Broadcast) when a host switches the user role and becomes an audience."
  }, {
    heading: "audio-mixing",
    content: "Audio mixing means combining multiple audio streams into one."
  }, {
    heading: "audio-profile",
    content: "An audio profile includes the sample rate, encoding scheme, number of channels, and bitrate for encoded audio data."
  }, {
    heading: "audio-route",
    content: "The audio route is the pathway audio data takes through audio hardware components during playback."
  }, {
    heading: "callee",
    content: "A callee is a Signaling user who receives a call invitation."
  }, {
    heading: "caller",
    content: "A caller is a Signaling user who sends a call invitation."
  }, {
    heading: "call-invitation",
    content: "Call invitation is a communication protocol based on the peer-to-peer messaging functionality of the Agora Signaling SDK. Call invitation supports starting, ending, accepting, and refusing calls."
  }, {
    heading: "channel",
    content: "In Agora's platform, a channel is a way of grouping users together and is identified by a unique channel name. Users who connect to the same channel can communicate with each other. A channel is created when the first user joins and ceases to exist when the last user leaves."
  }, {
    heading: "channel-attribute",
    content: "Channel attributes are tags added to Signaling channels, including the property name, property value, the ID of the last Signaling user who updated the attribute, and the time of the last update."
  }, {
    heading: "channel-message",
    content: "A channel message is a message that a Signaling user sends to all Signaling users in a channel."
  }, {
    heading: "channel-profile",
    content: "The channel profile is a configuration that Agora uses to apply optimized algorithms for different real-time use-cases."
  }, {
    heading: "cloud-proxy",
    content: "Cloud proxy is a proxy service that enables users to connect to Agora services through a firewall by using fixed IP addresses."
  }, {
    heading: "cloud-recording",
    content: "Cloud Recording is a component provided by Agora for recording and saving voice and video calls and interactive streaming on a third-party cloud storage through RESTful APIs."
  }, {
    heading: "co-hosting",
    content: "Co-hosting describes a use-case with more than one host."
  }, {
    heading: "composite-recording-mode",
    content: "Composite recording mode generates a single mixed audio and video file for all UIDs in a channel."
  }, {
    heading: "custom-rendering",
    content: "Custom rendering is the process where developers collect raw data from the SDK and process it according to specific needs."
  }, {
    heading: "custom-source",
    content: "Custom source is the process where an app captures raw data by itself."
  }, {
    heading: "delay",
    content: "In real-time audio and video communication, delay refers to the time elapsed from when the data is sent to when it is received."
  }, {
    heading: "dual-stream-mode",
    content: "In the dual-stream mode, the RTC SDK simultaneously transmits a higher-resolution video stream along with an additional low-resolution, low bitrate video stream."
  }, {
    heading: "freeze",
    content: "Freeze refers to choppy audio or video playback caused by a poor network connection or limited device performance during real-time audio and video communication."
  }, {
    heading: "high-quality-video-stream",
    content: "In dual-stream mode, the SDK transmits two video streams of differing quality at the same time. See dual stream mode for details."
  }, {
    heading: "host",
    content: "The host refers to a user who has streaming permissions in a channel. A host can publish audio and video. A host may also subscribe to audio and video published by other hosts."
  }, {
    heading: "host-becoming",
    content: "Becoming a host describes a use-case within an Interactive Live Streaming channel (the channel profile is Live-Broadcast) when an audience switches the user role and becomes a host."
  }, {
    heading: "individual-recording-mode",
    content: "Individual recording mode records audio and video of each UID as separate files."
  }, {
    heading: "inject-online-media-stream",
    content: "Inject online media stream refers to injecting an online media stream in an Interactive Live Streaming channel to share the stream with all users in the channel. The Agora RTC SDK provides a method for developers to inject an online mixed audio and video stream or an audio only stream to a channel."
  }, {
    heading: "interactive-live-streaming",
    content: "Enabled by either Agora’s RTC SDK or Voice SDK, Interactive Live Streaming gives you full control over the streaming experience from a standard one-to-many stream to a highly-interactive live event."
  }, {
    heading: "jitter",
    content: "In real-time audio and video communication, jitter is the variation in the delay of data packets transmitted continuously on the network."
  }, {
    heading: "last-mile",
    content: "The last mile refers to the network between the Agora edge server and the end user's device."
  }, {
    heading: "loopback-test",
    content: "A loopback test sends a signal from a communication device and is then returned (looped back) to it. It is often used to determine whether a device is working properly."
  }, {
    heading: "low-quality-video-stream",
    content: "In dual-stream mode, the SDK transmits two video streams of differing quality at the same time. The low-quality video stream has a lower resolution and bitrate than the high-quality video stream. See dual stream mode for details."
  }, {
    heading: "mediaplayer-kit",
    content: "The mediaplayer kit is a plug-in of the RTC SDK to play local and online media resources and publish the media streams to other users in an Interactive Live Streaming channel."
  }, {
    heading: "media-stream",
    content: "A media stream is an object that contains media data."
  }, {
    heading: "media-push",
    content: "Media Push enables you to upload audio and video streams from Agora channels and upload them to a Content Delivery Network (CDN) to reach a larger audience."
  }, {
    heading: "mirror",
    content: "Mirroring is an effect that a video image renders."
  }, {
    heading: "offline",
    content: "Offline describes the status of a Signaling user who has successfully logged out of Signaling."
  }, {
    heading: "offline-message",
    content: "An offline message is a peer-to-peer message that an online Signaling user sends to an offline Signaling user."
  }, {
    heading: "online",
    content: "Online describes the status of a user who has successfully logged in to the Agora Signaling system or stays disconnected from the Agora Signaling system for more than 30 seconds."
  }, {
    heading: "on-premise-recording",
    content: "On-Premise Recording is a component provided by Agora for recording and saving voice and video calls and interactive streaming on a Linux server."
  }, {
    heading: "packet-loss",
    content: "Packet loss refers to the data packets transmitted on the network failing to arrive at their intended destination."
  }, {
    heading: "peer-to-peer-message",
    content: "A peer-to-peer message is a message that an online Signaling user sends to an online or offline user."
  }, {
    heading: "publish",
    content: "Publishing is the action of sending the user's audio and/or video data to the channel."
  }, {
    heading: "raw-data",
    content: "Raw data, including raw audio data and raw video data, is the unprocessed data which developers can collect during real-time communication."
  }, {
    heading: "render-the-first-video-frame",
    content: "Rendering the first video frame is the action of rendering the first video frame on the local device."
  }, {
    heading: "agora-sdrtn",
    content: "Software-Defined Real-Time Network (SDRTN®) is a real-time transmission network built by Agora and is the only network infrastructure specifically designed for real-time communications in the world."
  }, {
    heading: "signaling-sdk",
    content: "You use the Signaling SDK to implement real-time messaging use-cases that require low latency and high concurrency for a global audience."
  }, {
    heading: "slice",
    content: "Slicing means cutting recorded audio or video into separate files according to specific rules. During an Agora Cloud Recording, the recording service cuts the streams and generates multiple slice files (TS or WebM files) and M3U8 files that serve as a playlist of the slice files."
  }, {
    heading: "sound-localization",
    content: "Sound localization means determining the distance to and direction of a sound through hearing the difference of volume, time, and timbre between users' ears."
  }, {
    heading: "stream-fallback",
    content: "In use-cases where multiple users engage in real-time audio and video communication, user experience can be impaired if the network condition is too poor to guarantee both audio and video at the same time."
  }, {
    heading: "stream-mixing",
    content: "Stream mixing means combining multiple media streams into one. It may include the mixing of video streams (video mixing) and audio streams (audio mixing)."
  }, {
    heading: "subscribe",
    content: "In the Agora RTC SDK, subscribing is the action of receiving media streams published to the channel. In the Agora Signaling SDK, subscribing is the action of monitoring the online status of one or multiple Signaling users."
  }, {
    heading: "tcp",
    content: "TCP (Transmission Control Protocol) is a connection-oriented and reliable transport layer communication protocol."
  }, {
    heading: "token",
    content: "A token, also known as a dynamic key, is used for authentication when an app user joins a channel or logs onto the Agora Signaling."
  }, {
    heading: "transcoding",
    content: "Transcoding is the process of decoding audio and video data and then re-encoding them into the target conversion output or format."
  }, {
    heading: "udp",
    content: "UDP (User Datagram Protocol) is a connectionless-oriented and unreliable transport layer communication protocol."
  }, {
    heading: "user-attribute",
    content: "User attributes are tags added to Signaling users, including property names and property values."
  }, {
    heading: "user-id-uid",
    content: "In the Agora RTC SDK, a user ID identifies a user in the channel. The user ID is a 32-bit signed integer, with a value range from -231 to 231-1, that you can specify yourself. If you specify `0` for the user ID when joining a channel, the SDK generates a random number and returns the value in the join channel success callback."
  }, {
    heading: "user-id-uid",
    content: "In the Agora Signaling SDK, a user ID identifies a user in Signaling."
  }, {
    heading: "user-id-uid",
    content: "The user ID in the Agora RTC SDK and the Agora Signaling SDK are independent of each other."
  }, {
    heading: "user-role",
    content: "The type of user role determines whether the user in the channel has streaming permissions."
  }, {
    heading: "video-layout",
    content: "Video layout arranges the display of users when multiple users are mixed into one stream, such as in Media Push or a composite recording."
  }, {
    heading: "video-mixing",
    content: "Video mixing means combining multiple video streams into one."
  }, {
    heading: "video-profile",
    content: "The video profile refers to a set of video attributes, such as resolution, bitrate, and frame rate."
  }, {
    heading: "rtc-sdk",
    content: "An SDK developed by Agora to enable developers to add real-time audio interaction to their projects."
  }, {
    heading: "voice-sdk",
    content: "Agora provides the Voice SDK to enable real-time audio communication."
  }, {
    heading: "web-page-recording-mode",
    content: "In web page recording mode, the content and audio of a specified web page are recorded in a single file."
  }],
  headings: [{
    id: "a",
    content: "A"
  }, {
    id: "agora-analytics",
    content: "Agora Analytics"
  }, {
    id: "agora-cloud-backup",
    content: "Agora Cloud Backup"
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
    id: "audience",
    content: "Audience"
  }, {
    id: "audience-becoming",
    content: "Audience (becoming)"
  }, {
    id: "audio-mixing",
    content: "Audio mixing"
  }, {
    id: "audio-profile",
    content: "Audio profile"
  }, {
    id: "audio-route",
    content: "Audio route"
  }, {
    id: "c",
    content: "C"
  }, {
    id: "callee",
    content: "Callee"
  }, {
    id: "caller",
    content: "Caller"
  }, {
    id: "call-invitation",
    content: "Call invitation"
  }, {
    id: "channel",
    content: "Channel"
  }, {
    id: "channel-attribute",
    content: "Channel attribute"
  }, {
    id: "channel-message",
    content: "Channel message"
  }, {
    id: "channel-profile",
    content: "Channel profile"
  }, {
    id: "cloud-proxy",
    content: "Cloud proxy"
  }, {
    id: "cloud-recording",
    content: "Cloud Recording"
  }, {
    id: "co-hosting",
    content: "Co-hosting"
  }, {
    id: "composite-recording-mode",
    content: "Composite recording mode"
  }, {
    id: "custom-rendering",
    content: "Custom rendering"
  }, {
    id: "custom-source",
    content: "Custom source"
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
    id: "f",
    content: "F"
  }, {
    id: "freeze",
    content: "Freeze"
  }, {
    id: "h",
    content: "H"
  }, {
    id: "high-quality-video-stream",
    content: "High-quality video stream"
  }, {
    id: "host",
    content: "Host"
  }, {
    id: "host-becoming",
    content: "Host (becoming)"
  }, {
    id: "i",
    content: "I"
  }, {
    id: "individual-recording-mode",
    content: "Individual recording mode"
  }, {
    id: "inject-online-media-stream",
    content: "Inject online media stream"
  }, {
    id: "interactive-live-streaming",
    content: "Interactive Live Streaming"
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
    id: "loopback-test",
    content: "Loopback test"
  }, {
    id: "low-quality-video-stream",
    content: "Low-quality video stream"
  }, {
    id: "m",
    content: "M"
  }, {
    id: "mediaplayer-kit",
    content: "MediaPlayer kit"
  }, {
    id: "media-stream",
    content: "Media stream"
  }, {
    id: "media-push",
    content: "Media Push"
  }, {
    id: "mirror",
    content: "Mirror"
  }, {
    id: "o",
    content: "O"
  }, {
    id: "offline",
    content: "Offline"
  }, {
    id: "offline-message",
    content: "Offline message"
  }, {
    id: "online",
    content: "Online"
  }, {
    id: "on-premise-recording",
    content: "On-Premise Recording"
  }, {
    id: "p",
    content: "P"
  }, {
    id: "packet-loss",
    content: "Packet loss"
  }, {
    id: "peer-to-peer-message",
    content: "Peer-to-peer message"
  }, {
    id: "publish",
    content: "Publish"
  }, {
    id: "r",
    content: "R"
  }, {
    id: "raw-data",
    content: "Raw data"
  }, {
    id: "render-the-first-video-frame",
    content: "Render the first video frame"
  }, {
    id: "s",
    content: "S"
  }, {
    id: "agora-sdrtn",
    content: "Agora SDRTN®"
  }, {
    id: "signaling-sdk",
    content: "Signaling SDK"
  }, {
    id: "slice",
    content: "Slice"
  }, {
    id: "sound-localization",
    content: "Sound localization"
  }, {
    id: "stream-fallback",
    content: "Stream fallback"
  }, {
    id: "stream-mixing",
    content: "Stream mixing"
  }, {
    id: "subscribe",
    content: "Subscribe"
  }, {
    id: "t",
    content: "T"
  }, {
    id: "tcp",
    content: "TCP"
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
    id: "udp",
    content: "UDP"
  }, {
    id: "user-attribute",
    content: "User attribute"
  }, {
    id: "user-id-uid",
    content: "User ID (uid)"
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
  url: "#agora-analytics",
  title: _jsx(_Fragment, {
    children: "Agora Analytics"
  })
}, {
  depth: 3,
  url: "#agora-cloud-backup",
  title: _jsx(_Fragment, {
    children: "Agora Cloud Backup"
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
  url: "#audience",
  title: _jsx(_Fragment, {
    children: "Audience"
  })
}, {
  depth: 3,
  url: "#audience-becoming",
  title: _jsx(_Fragment, {
    children: "Audience (becoming)"
  })
}, {
  depth: 3,
  url: "#audio-mixing",
  title: _jsx(_Fragment, {
    children: "Audio mixing"
  })
}, {
  depth: 3,
  url: "#audio-profile",
  title: _jsx(_Fragment, {
    children: "Audio profile"
  })
}, {
  depth: 3,
  url: "#audio-route",
  title: _jsx(_Fragment, {
    children: "Audio route"
  })
}, {
  depth: 2,
  url: "#c",
  title: _jsx(_Fragment, {
    children: "C"
  })
}, {
  depth: 3,
  url: "#callee",
  title: _jsx(_Fragment, {
    children: "Callee"
  })
}, {
  depth: 3,
  url: "#caller",
  title: _jsx(_Fragment, {
    children: "Caller"
  })
}, {
  depth: 3,
  url: "#call-invitation",
  title: _jsx(_Fragment, {
    children: "Call invitation"
  })
}, {
  depth: 3,
  url: "#channel",
  title: _jsx(_Fragment, {
    children: "Channel"
  })
}, {
  depth: 3,
  url: "#channel-attribute",
  title: _jsx(_Fragment, {
    children: "Channel attribute"
  })
}, {
  depth: 3,
  url: "#channel-message",
  title: _jsx(_Fragment, {
    children: "Channel message"
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
  depth: 3,
  url: "#cloud-recording",
  title: _jsx(_Fragment, {
    children: "Cloud Recording"
  })
}, {
  depth: 3,
  url: "#co-hosting",
  title: _jsx(_Fragment, {
    children: "Co-hosting"
  })
}, {
  depth: 3,
  url: "#composite-recording-mode",
  title: _jsx(_Fragment, {
    children: "Composite recording mode"
  })
}, {
  depth: 3,
  url: "#custom-rendering",
  title: _jsx(_Fragment, {
    children: "Custom rendering"
  })
}, {
  depth: 3,
  url: "#custom-source",
  title: _jsx(_Fragment, {
    children: "Custom source"
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
  url: "#f",
  title: _jsx(_Fragment, {
    children: "F"
  })
}, {
  depth: 3,
  url: "#freeze",
  title: _jsx(_Fragment, {
    children: "Freeze"
  })
}, {
  depth: 2,
  url: "#h",
  title: _jsx(_Fragment, {
    children: "H"
  })
}, {
  depth: 3,
  url: "#high-quality-video-stream",
  title: _jsx(_Fragment, {
    children: "High-quality video stream"
  })
}, {
  depth: 3,
  url: "#host",
  title: _jsx(_Fragment, {
    children: "Host"
  })
}, {
  depth: 3,
  url: "#host-becoming",
  title: _jsx(_Fragment, {
    children: "Host (becoming)"
  })
}, {
  depth: 2,
  url: "#i",
  title: _jsx(_Fragment, {
    children: "I"
  })
}, {
  depth: 3,
  url: "#individual-recording-mode",
  title: _jsx(_Fragment, {
    children: "Individual recording mode"
  })
}, {
  depth: 3,
  url: "#inject-online-media-stream",
  title: _jsx(_Fragment, {
    children: "Inject online media stream"
  })
}, {
  depth: 3,
  url: "#interactive-live-streaming",
  title: _jsx(_Fragment, {
    children: "Interactive Live Streaming"
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
  url: "#loopback-test",
  title: _jsx(_Fragment, {
    children: "Loopback test"
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
  url: "#mediaplayer-kit",
  title: _jsx(_Fragment, {
    children: "MediaPlayer kit"
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
  depth: 3,
  url: "#mirror",
  title: _jsx(_Fragment, {
    children: "Mirror"
  })
}, {
  depth: 2,
  url: "#o",
  title: _jsx(_Fragment, {
    children: "O"
  })
}, {
  depth: 3,
  url: "#offline",
  title: _jsx(_Fragment, {
    children: "Offline"
  })
}, {
  depth: 3,
  url: "#offline-message",
  title: _jsx(_Fragment, {
    children: "Offline message"
  })
}, {
  depth: 3,
  url: "#online",
  title: _jsx(_Fragment, {
    children: "Online"
  })
}, {
  depth: 3,
  url: "#on-premise-recording",
  title: _jsx(_Fragment, {
    children: "On-Premise Recording"
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
  url: "#peer-to-peer-message",
  title: _jsx(_Fragment, {
    children: "Peer-to-peer message"
  })
}, {
  depth: 3,
  url: "#publish",
  title: _jsx(_Fragment, {
    children: "Publish"
  })
}, {
  depth: 2,
  url: "#r",
  title: _jsx(_Fragment, {
    children: "R"
  })
}, {
  depth: 3,
  url: "#raw-data",
  title: _jsx(_Fragment, {
    children: "Raw data"
  })
}, {
  depth: 3,
  url: "#render-the-first-video-frame",
  title: _jsx(_Fragment, {
    children: "Render the first video frame"
  })
}, {
  depth: 2,
  url: "#s",
  title: _jsx(_Fragment, {
    children: "S"
  })
}, {
  depth: 3,
  url: "#agora-sdrtn",
  title: _jsx(_Fragment, {
    children: "Agora SDRTN®"
  })
}, {
  depth: 3,
  url: "#signaling-sdk",
  title: _jsx(_Fragment, {
    children: "Signaling SDK"
  })
}, {
  depth: 3,
  url: "#slice",
  title: _jsx(_Fragment, {
    children: "Slice"
  })
}, {
  depth: 3,
  url: "#sound-localization",
  title: _jsx(_Fragment, {
    children: "Sound localization"
  })
}, {
  depth: 3,
  url: "#stream-fallback",
  title: _jsx(_Fragment, {
    children: "Stream fallback"
  })
}, {
  depth: 3,
  url: "#stream-mixing",
  title: _jsx(_Fragment, {
    children: "Stream mixing"
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
  url: "#tcp",
  title: _jsx(_Fragment, {
    children: "TCP"
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
  url: "#udp",
  title: _jsx(_Fragment, {
    children: "UDP"
  })
}, {
  depth: 3,
  url: "#user-attribute",
  title: _jsx(_Fragment, {
    children: "User attribute"
  })
}, {
  depth: 3,
  url: "#user-id-uid",
  title: _jsx(_Fragment, {
    children: "User ID (uid)"
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
    a: "a",
    code: "code",
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
      id: "agora-analytics",
      children: "Agora Analytics"
    }), `
`, _jsx(_components.p, {
      children: "Agora Analytics is a site for developers to track and analyze the usage and quality of calls."
    }), `
`, _jsx(_components.h3, {
      id: "agora-cloud-backup",
      children: "Agora Cloud Backup"
    }), `
`, _jsx(_components.p, {
      children: "Agora Cloud Backup is a backup cloud storage service used in cloud recording. If the recording service cannot upload the recorded files to the specified third-party cloud storage, then the service automatically and temporarily stores them in the backup cloud."
    }), `
`, _jsx(_components.h3, {
      id: "agora-console",
      children: "Agora Console"
    }), `
`, _jsx(_components.p, {
      children: "Agora Console is a site for developers to manage Agora projects and services."
    }), `
`, _jsx(_components.h3, {
      id: "app-id",
      children: "App ID"
    }), `
`, _jsx(_components.p, {
      children: "An app ID is a randomly generated string provided by Agora and is the unique identifier of an app."
    }), `
`, _jsx(_components.h3, {
      id: "app-certificate",
      children: "App certificate"
    }), `
`, _jsx(_components.p, {
      children: "An app certificate is a randomly generated string provided by Agora for enabling token authentication. It is one of the required arguments for generating a token."
    }), `
`, _jsx(_components.h3, {
      id: "audience",
      children: "Audience"
    }), `
`, _jsxs(_components.p, {
      children: ["Audience are users who do not have streaming permissions in a channel. An audience user can subscribe to remote audio and video streams, but cannot publish audio and video streams. For more information, see ", _jsx(_components.a, {
        href: "#user-role",
        children: "user role"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "audience-becoming",
      children: "Audience (becoming)"
    }), `
`, _jsx(_components.p, {
      children: "Becoming an audience describes a use-case within an Interactive Live Streaming channel (the channel profile is Live-Broadcast) when a host switches the user role and becomes an audience."
    }), `
`, _jsx(_components.h3, {
      id: "audio-mixing",
      children: "Audio mixing"
    }), `
`, _jsx(_components.p, {
      children: "Audio mixing means combining multiple audio streams into one."
    }), `
`, _jsx(_components.h3, {
      id: "audio-profile",
      children: "Audio profile"
    }), `
`, _jsx(_components.p, {
      children: "An audio profile includes the sample rate, encoding scheme, number of channels, and bitrate for encoded audio data."
    }), `
`, _jsx(_components.h3, {
      id: "audio-route",
      children: "Audio route"
    }), `
`, _jsx(_components.p, {
      children: "The audio route is the pathway audio data takes through audio hardware components during playback."
    }), `
`, _jsx(_components.h2, {
      id: "c",
      children: "C"
    }), `
`, _jsx(_components.h3, {
      id: "callee",
      children: "Callee"
    }), `
`, _jsxs(_components.p, {
      children: ["A callee is a Signaling user who receives a ", _jsx(_components.a, {
        href: "#call-invitation",
        children: "call invitation"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "caller",
      children: "Caller"
    }), `
`, _jsxs(_components.p, {
      children: ["A caller is a Signaling user who sends a ", _jsx(_components.a, {
        href: "#call-invitation",
        children: "call invitation"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "call-invitation",
      children: "Call invitation"
    }), `
`, _jsx(_components.p, {
      children: "Call invitation is a communication protocol based on the peer-to-peer messaging functionality of the Agora Signaling SDK. Call invitation supports starting, ending, accepting, and refusing calls."
    }), `
`, _jsx(_components.h3, {
      id: "channel",
      children: "Channel"
    }), `
`, _jsx(_components.p, {
      children: "In Agora's platform, a channel is a way of grouping users together and is identified by a unique channel name. Users who connect to the same channel can communicate with each other. A channel is created when the first user joins and ceases to exist when the last user leaves."
    }), `
`, _jsx(_components.h3, {
      id: "channel-attribute",
      children: "Channel attribute"
    }), `
`, _jsx(_components.p, {
      children: "Channel attributes are tags added to Signaling channels, including the property name, property value, the ID of the last Signaling user who updated the attribute, and the time of the last update."
    }), `
`, _jsx(_components.h3, {
      id: "channel-message",
      children: "Channel message"
    }), `
`, _jsx(_components.p, {
      children: "A channel message is a message that a Signaling user sends to all Signaling users in a channel."
    }), `
`, _jsx(_components.h3, {
      id: "channel-profile",
      children: "Channel profile"
    }), `
`, _jsx(_components.p, {
      children: "The channel profile is a configuration that Agora uses to apply optimized algorithms for different real-time use-cases."
    }), `
`, _jsx(_components.h3, {
      id: "cloud-proxy",
      children: "Cloud proxy"
    }), `
`, _jsx(_components.p, {
      children: "Cloud proxy is a proxy service that enables users to connect to Agora services through a firewall by using fixed IP addresses."
    }), `
`, _jsx(_components.h3, {
      id: "cloud-recording",
      children: "Cloud Recording"
    }), `
`, _jsx(_components.p, {
      children: "Cloud Recording is a component provided by Agora for recording and saving voice and video calls and interactive streaming on a third-party cloud storage through RESTful APIs."
    }), `
`, _jsx(_components.h3, {
      id: "co-hosting",
      children: "Co-hosting"
    }), `
`, _jsx(_components.p, {
      children: "Co-hosting describes a use-case with more than one host."
    }), `
`, _jsx(_components.h3, {
      id: "composite-recording-mode",
      children: "Composite recording mode"
    }), `
`, _jsx(_components.p, {
      children: "Composite recording mode generates a single mixed audio and video file for all UIDs in a channel."
    }), `
`, _jsx(_components.h3, {
      id: "custom-rendering",
      children: "Custom rendering"
    }), `
`, _jsx(_components.p, {
      children: "Custom rendering is the process where developers collect raw data from the SDK and process it according to specific needs."
    }), `
`, _jsx(_components.h3, {
      id: "custom-source",
      children: "Custom source"
    }), `
`, _jsx(_components.p, {
      children: "Custom source is the process where an app captures raw data by itself."
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
      children: "In real-time audio and video communication, delay refers to the time elapsed from when the data is sent to when it is received."
    }), `
`, _jsx(_components.h3, {
      id: "dual-stream-mode",
      children: "Dual-stream mode"
    }), `
`, _jsx(_components.p, {
      children: "In the dual-stream mode, the RTC SDK simultaneously transmits a higher-resolution video stream along with an additional low-resolution, low bitrate video stream."
    }), `
`, _jsx(_components.h2, {
      id: "f",
      children: "F"
    }), `
`, _jsx(_components.h3, {
      id: "freeze",
      children: "Freeze"
    }), `
`, _jsx(_components.p, {
      children: "Freeze refers to choppy audio or video playback caused by a poor network connection or limited device performance during real-time audio and video communication."
    }), `
`, _jsx(_components.h2, {
      id: "h",
      children: "H"
    }), `
`, _jsx(_components.h3, {
      id: "high-quality-video-stream",
      children: "High-quality video stream"
    }), `
`, _jsxs(_components.p, {
      children: ["In dual-stream mode, the SDK transmits two video streams of differing quality at the same time. See ", _jsx(_components.a, {
        href: "#dual-stream-mode",
        children: "dual stream mode"
      }), " for details."]
    }), `
`, _jsx(_components.h3, {
      id: "host",
      children: "Host"
    }), `
`, _jsx(_components.p, {
      children: "The host refers to a user who has streaming permissions in a channel. A host can publish audio and video. A host may also subscribe to audio and video published by other hosts."
    }), `
`, _jsx(_components.h3, {
      id: "host-becoming",
      children: "Host (becoming)"
    }), `
`, _jsx(_components.p, {
      children: "Becoming a host describes a use-case within an Interactive Live Streaming channel (the channel profile is Live-Broadcast) when an audience switches the user role and becomes a host."
    }), `
`, _jsx(_components.h2, {
      id: "i",
      children: "I"
    }), `
`, _jsx(_components.h3, {
      id: "individual-recording-mode",
      children: "Individual recording mode"
    }), `
`, _jsx(_components.p, {
      children: "Individual recording mode records audio and video of each UID as separate files."
    }), `
`, _jsx(_components.h3, {
      id: "inject-online-media-stream",
      children: "Inject online media stream"
    }), `
`, _jsx(_components.p, {
      children: "Inject online media stream refers to injecting an online media stream in an Interactive Live Streaming channel to share the stream with all users in the channel. The Agora RTC SDK provides a method for developers to inject an online mixed audio and video stream or an audio only stream to a channel."
    }), `
`, _jsx(_components.h3, {
      id: "interactive-live-streaming",
      children: "Interactive Live Streaming"
    }), `
`, _jsx(_components.p, {
      children: "Enabled by either Agora’s RTC SDK or Voice SDK, Interactive Live Streaming gives you full control over the streaming experience from a standard one-to-many stream to a highly-interactive live event."
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
      id: "loopback-test",
      children: "Loopback test"
    }), `
`, _jsx(_components.p, {
      children: "A loopback test sends a signal from a communication device and is then returned (looped back) to it. It is often used to determine whether a device is working properly."
    }), `
`, _jsx(_components.h3, {
      id: "low-quality-video-stream",
      children: "Low-quality video stream"
    }), `
`, _jsxs(_components.p, {
      children: ["In dual-stream mode, the SDK transmits two video streams of differing quality at the same time. The low-quality video stream has a lower resolution and bitrate than the high-quality video stream. See ", _jsx(_components.a, {
        href: "#dual-stream-mode",
        children: "dual stream mode"
      }), " for details."]
    }), `
`, _jsx(_components.h2, {
      id: "m",
      children: "M"
    }), `
`, _jsx(_components.h3, {
      id: "mediaplayer-kit",
      children: "MediaPlayer kit"
    }), `
`, _jsx(_components.p, {
      children: "The mediaplayer kit is a plug-in of the RTC SDK to play local and online media resources and publish the media streams to other users in an Interactive Live Streaming channel."
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
      children: "Media Push enables you to upload audio and video streams from Agora channels and upload them to a Content Delivery Network (CDN) to reach a larger audience."
    }), `
`, _jsx(_components.h3, {
      id: "mirror",
      children: "Mirror"
    }), `
`, _jsx(_components.p, {
      children: "Mirroring is an effect that a video image renders."
    }), `
`, _jsx(_components.h2, {
      id: "o",
      children: "O"
    }), `
`, _jsx(_components.h3, {
      id: "offline",
      children: "Offline"
    }), `
`, _jsx(_components.p, {
      children: "Offline describes the status of a Signaling user who has successfully logged out of Signaling."
    }), `
`, _jsx(_components.h3, {
      id: "offline-message",
      children: "Offline message"
    }), `
`, _jsx(_components.p, {
      children: "An offline message is a peer-to-peer message that an online Signaling user sends to an offline Signaling user."
    }), `
`, _jsx(_components.h3, {
      id: "online",
      children: "Online"
    }), `
`, _jsx(_components.p, {
      children: "Online describes the status of a user who has successfully logged in to the Agora Signaling system or stays disconnected from the Agora Signaling system for more than 30 seconds."
    }), `
`, _jsx(_components.h3, {
      id: "on-premise-recording",
      children: "On-Premise Recording"
    }), `
`, _jsx(_components.p, {
      children: "On-Premise Recording is a component provided by Agora for recording and saving voice and video calls and interactive streaming on a Linux server."
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
      children: "Packet loss refers to the data packets transmitted on the network failing to arrive at their intended destination."
    }), `
`, _jsx(_components.h3, {
      id: "peer-to-peer-message",
      children: "Peer-to-peer message"
    }), `
`, _jsx(_components.p, {
      children: "A peer-to-peer message is a message that an online Signaling user sends to an online or offline user."
    }), `
`, _jsx(_components.h3, {
      id: "publish",
      children: "Publish"
    }), `
`, _jsx(_components.p, {
      children: "Publishing is the action of sending the user's audio and/or video data to the channel."
    }), `
`, _jsx(_components.h2, {
      id: "r",
      children: "R"
    }), `
`, _jsx(_components.h3, {
      id: "raw-data",
      children: "Raw data"
    }), `
`, _jsx(_components.p, {
      children: "Raw data, including raw audio data and raw video data, is the unprocessed data which developers can collect during real-time communication."
    }), `
`, _jsx(_components.h3, {
      id: "render-the-first-video-frame",
      children: "Render the first video frame"
    }), `
`, _jsx(_components.p, {
      children: "Rendering the first video frame is the action of rendering the first video frame on the local device."
    }), `
`, _jsx(_components.h2, {
      id: "s",
      children: "S"
    }), `
`, _jsx(_components.h3, {
      id: "agora-sdrtn",
      children: "Agora SDRTN®"
    }), `
`, _jsx(_components.p, {
      children: "Software-Defined Real-Time Network (SDRTN®) is a real-time transmission network built by Agora and is the only network infrastructure specifically designed for real-time communications in the world."
    }), `
`, _jsx(_components.h3, {
      id: "signaling-sdk",
      children: "Signaling SDK"
    }), `
`, _jsx(_components.p, {
      children: "You use the Signaling SDK to implement real-time messaging use-cases that require low latency and high concurrency for a global audience."
    }), `
`, _jsx(_components.h3, {
      id: "slice",
      children: "Slice"
    }), `
`, _jsx(_components.p, {
      children: "Slicing means cutting recorded audio or video into separate files according to specific rules. During an Agora Cloud Recording, the recording service cuts the streams and generates multiple slice files (TS or WebM files) and M3U8 files that serve as a playlist of the slice files."
    }), `
`, _jsx(_components.h3, {
      id: "sound-localization",
      children: "Sound localization"
    }), `
`, _jsx(_components.p, {
      children: "Sound localization means determining the distance to and direction of a sound through hearing the difference of volume, time, and timbre between users' ears."
    }), `
`, _jsx(_components.h3, {
      id: "stream-fallback",
      children: "Stream fallback"
    }), `
`, _jsx(_components.p, {
      children: "In use-cases where multiple users engage in real-time audio and video communication, user experience can be impaired if the network condition is too poor to guarantee both audio and video at the same time."
    }), `
`, _jsx(_components.h3, {
      id: "stream-mixing",
      children: "Stream mixing"
    }), `
`, _jsx(_components.p, {
      children: "Stream mixing means combining multiple media streams into one. It may include the mixing of video streams (video mixing) and audio streams (audio mixing)."
    }), `
`, _jsx(_components.h3, {
      id: "subscribe",
      children: "Subscribe"
    }), `
`, _jsx(_components.p, {
      children: "In the Agora RTC SDK, subscribing is the action of receiving media streams published to the channel. In the Agora Signaling SDK, subscribing is the action of monitoring the online status of one or multiple Signaling users."
    }), `
`, _jsx(_components.h2, {
      id: "t",
      children: "T"
    }), `
`, _jsx(_components.h3, {
      id: "tcp",
      children: "TCP"
    }), `
`, _jsx(_components.p, {
      children: "TCP (Transmission Control Protocol) is a connection-oriented and reliable transport layer communication protocol."
    }), `
`, _jsx(_components.h3, {
      id: "token",
      children: "Token"
    }), `
`, _jsx(_components.p, {
      children: "A token, also known as a dynamic key, is used for authentication when an app user joins a channel or logs onto the Agora Signaling."
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
      id: "udp",
      children: "UDP"
    }), `
`, _jsx(_components.p, {
      children: "UDP (User Datagram Protocol) is a connectionless-oriented and unreliable transport layer communication protocol."
    }), `
`, _jsx(_components.h3, {
      id: "user-attribute",
      children: "User attribute"
    }), `
`, _jsx(_components.p, {
      children: "User attributes are tags added to Signaling users, including property names and property values."
    }), `
`, _jsx(_components.h3, {
      id: "user-id-uid",
      children: "User ID (uid)"
    }), `
`, _jsxs(_components.p, {
      children: ["In the Agora RTC SDK, a user ID identifies a user in the channel. The user ID is a 32-bit signed integer, with a value range from -231 to 231-1, that you can specify yourself. If you specify ", _jsx(_components.code, {
        children: "0"
      }), " for the user ID when joining a channel, the SDK generates a random number and returns the value in the join channel success callback."]
    }), `
`, _jsx(_components.p, {
      children: "In the Agora Signaling SDK, a user ID identifies a user in Signaling."
    }), `
`, _jsx(_components.p, {
      children: "The user ID in the Agora RTC SDK and the Agora Signaling SDK are independent of each other."
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
      children: "Video layout arranges the display of users when multiple users are mixed into one stream, such as in Media Push or a composite recording."
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
      children: "An SDK developed by Agora to enable developers to add real-time audio interaction to their projects."
    }), `
`, _jsx(_components.h3, {
      id: "voice-sdk",
      children: "Voice SDK"
    }), `
`, _jsx(_components.p, {
      children: "Agora provides the Voice SDK to enable real-time audio communication."
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
