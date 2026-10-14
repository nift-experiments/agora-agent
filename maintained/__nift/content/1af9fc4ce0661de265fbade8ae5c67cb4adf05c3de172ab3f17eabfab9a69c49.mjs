import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Core concepts",
  description: "Ideas that are central to developing with Agora."
};
export let _markdown = `

RTC (Real-Time Communication) refers to real-time communication technology, which allows almost instant exchange of audio, video, and other data between the sender and the receiver.

Agora SDKs provide real-time audio and video interaction services, with multi-platform and multi-device support. This includes high-definition video calls, voice-only calls, interactive live streaming, as well as one-on-one and multi-group chats.

This guide introduces the key processes and concepts you need to know to use RTC SDK.

Agora relies on the following fundamental concepts to enable seamless real-time communication:

## Agora SDRTN® [#agora-sdrtn]

Agora's core engagement services are powered by its Software-Defined Real-Time Network (SDRTN®), a global infrastructure accessible anytime, anywhere. Unlike traditional networks, Agora SDRTN® is not restricted by devices, phone numbers, or telecom coverage areas. With data centers in over 200 countries and regions, it ensures sub-second latency and high availability for real-time media.

Agora SDRTN® enables live user engagement through real-time communication (RTC), offering:

* Unmatched quality of service
* High availability and accessibility
* True scalability
* Low cost

## Channel concepts [#channel-concepts]

Agora uses channels to group users together, enabling seamless communication and interaction. Channels serve as the foundation for transmitting real-time data, whether audio, video, or signaling, and play a crucial role in connecting users and services.

### Channel [#channel]

A channel organizes users into a group and is identified by a unique channel name. Users who connect to the same channel are able to communicate with each other. A channel is created when the first user joins and ceases to exist when the last user leaves.

Channels are created by calling the methods for transmitting real-time data. Agora uses different channels to transmit different types of data:

* An RTC channel is used for transmitting audio or video data.

* A Signaling channel is used for transmitting messaging or signaling data.

These channels are independent of each other.

Additional services provided by Agora, such as Cloud Recording and STT, join the RTC SDK channel to provide real-time recording, transmission acceleration, media playback, and content moderation.

### Channel profile [#channel-profile]

The RTC SDK applies different optimization methods according to the selected channel profile. Agora supports the following channel profiles:

| Channel profile       | Description                                                                                                                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Communication**     | This profile is suitable for one-on-one or group calls, where all users in the channel talk freely.                                                                                                    |
| **Live Broadcasting** | In a live streaming channel, users have two client roles: *host* and *audience*. The *host* sends and receives streams, while the *audience* only receives streams with the sending function disabled. |

### Stream [#stream]

A stream is a sequence of digitally encoded, coherent signals that contain media data. Users in a channel [publish](#publish) local streams and [subscribe](#subscribe) to remote streams from other users.

### User role [#user-role]

The user role defines whether a user in a channel has the permission to publish streams. There are two user roles:

* **Host**: A user who can publish streams to a channel.
* **Audience**: A User who can only subscribe to remote media streams. A user with this role cannot publish streams.

### Publish [#publish]

Publishing is the act of sending a user’s audio or video data to the channel. Usually, the published stream is created by the audio data sampled from a microphone or the video data captured by a camera. You can also publish media streams from other sources, such as an online music file or the user’s screen.

After successfully publishing a stream, the SDK uses it to send media data to other users in the channel. Users communicate with each other in real-time by publishing local streams and subscribing to remote streams.

### Subscribe [#subscribe]

Subscribing is the act of receiving media streams published by remote users to the channel. A user receives audio and video data from other users by subscribing to one or more of their streams. You either directly play the subscribed streams or process incoming data for other purposes such as recording or capturing screenshots.

### User ID [#user-id]

In Video Calling, the UID is an integer value that uniquely identifies a user within the context of a channel. When joining a channel, you have the option to either assign a specific UID to the user or pass \`0\` or \`null\` and allow Agora to automatically generate and assign a UID to the user. If two users attempt to join the same channel with the same UID, it can lead to unexpected behavior.

The UID is used by Agora's services and components to identify and manage users within a channel. Ensure that UIDs are properly assigned to prevent conflicts.

### RTC connection [#rtc-connection]

The connection between the SDK and the channel. When publishing or subscribing to multiple streams in multiple channels, a connection is used to specify the target channel.

## Credentials [#credentials]

To ensure reliable access and secure communication, Agora uses credentials such as the App ID, App Certificate, and tokens to identify applications, authenticate their requests, and authorize their access on its platform.

### App ID [#app-id]

The App ID is a unique key generated by Agora to identify each project and provide billing and other statistical data services. The App ID is critical for connecting users within your app. It is used to initialize the Agora Engine in your app, and as one of the required keys to create authentication tokens for secure communication. Retrieve the App ID for your project using the [Agora Console](https://console.agora.io/v2/project-management).

App IDs are stored on the front-end client and do not provide access control. Projects using only an App ID allow any user with the App ID to join. For access control, especially in production environments, choose the **App ID + Token** mechanism for user authentication when creating a new project. Without authentication tokens, your environment is open to anyone with access to your App ID.

### App Certificate [#app-certificate]

An App Certificate is a unique key generated by the Agora Console to secure projects through token authentication. It is required, along with the App ID, to generate a token that proves authorization between your systems and Agora's network. App Certificates are used to generate Video Calling authentication tokens.

Store the App Certificate securely in your backend systems. If your App Certificate is compromised or to meet security compliance requirements, you can invalidate certificates and create new ones through the Agora Console.

### Tokens [#tokens]

A token is a dynamic key generated using the App ID, App Certificate, user ID, and expiration timestamp. Tokens authenticate and secure access to Agora's services, ensuring only authorized users can join a channel and participate in real-time communication.

Tokens are generated on your server and passed to the client for use in Video Calling. The token generation process involves digitally signing the App ID, App Certificate, user ID, and expiration timestamp using a specific algorithm, preventing tampering or forgery.

During development and testing, use the Agora Console to generate temporary tokens. For production environments, implement a token server as part of your security infrastructure to control access to your channels.

For information on setting up a token server for generating and managing tokens, refer to [Deploy a token server](/en/realtime-media/rtc/build/authenticate-users/deploy-token-server).

### Agora Console [#agora-console]

[Agora Console](https://console.agora.io/v2) is the main dashboard where you manage your Agora projects and services. Before you can use Agora's SDKs, you must first create a project in the Agora Console. See [Agora account management](/en/introduction/account) for
details.

![Create project in Agora Console](https://assets-docs.agora.io/images/common/create-project.svg)

Agora Console provides an intuitive interface for developers to query and manage their Agora account. After registering an Agora account, you use the Agora Console to perform the following tasks:

* Manage your account
* Create and configure Agora projects and services
* Get an App ID and the App certificate
* Generate temporary tokens for development and testing
* Manage members and roles
* Check call quality and usage
* Check bills and make payments
* Access product resources

See [Agora account management](/en/introduction/account) for details on how to manage all aspects of your Agora account.

Agora also provides RESTful APIs that you use to implement features such as creating a project and fetching usage numbers programmatically.

## Audio and video concepts [#audio-and-video-concepts]

### Audio and video interaction workflow [#audio-and-video-interaction-workflow]

The following figure illustrates the workflow of using the RTC SDK to implement basic audio and video interaction.

![orientation\\_adaptive\\_locked\\_landscape](https://assets-docs.agora.io/images/common/basic-audio-and-video.svg)

Agora relies on the following fundamental concepts to enable seamless real-time communication:

### Track [#track]

A track contains specific audio or video information. It consists of three parts: input source, filter, and output. According to different functions in the RTC process, tracks can be further classified into uplink tracks and downlink tracks.

![Track](https://assets-docs.agora.io/images/common/track.svg)

#### Input source [#input-source]

The input source is the local audio or video data to be published. It can be from a camera, screen capture, or microphone source, or parsed from a media file.

#### Filter [#filter]

A filter performs a series of processing operations on audio and video, including pre-processing and post-processing, and transmits the processed audio and video signals to the output. Filters can be connected to multiple input sources or multiple outputs.

* Pre-processing: Audio/video filters in the sender track, such as virtual background, beautification, echo cancellation, and noise reduction.
* Post-processing : Audio/video filters in the receiving track, such as super-resolution, and spatial audio effects.

#### Output [#output]

Located at the end of the track, such as an encoder, or a renderer.

### Audio module [#audio-module]

In audio interaction, the main functions of the audio module are as shown in the figure below:

![Audio module functions](https://assets-docs.agora.io/images/common/audio-module.svg)

After you call \`registerAudioFrameObserver\`, you can obtain the raw audio data at the following observation points in the audio transmission process:

1. Obtain the raw audio data of ear monitoring through the \`onEarMonitoringAudioFrame\` callback.
2. Obtain the captured raw audio data through the \`onRecordAudioFrame\` callback.
3. Obtain the raw audio playback data of each individual stream through the \`onPlaybackAudioFrameBeforeMixing\` callback.
4. Obtain the raw audio playback data of all mixed streams through the \`onPlaybackAudioFrame\` callback.
5. Obtain the raw audio data after mixing the captured and playback audio through the \`onMixedAudioFrame\` callback.
   (5) \`onMixedAudioFrame\` = (2) \`onRecordAudioFrame\` + (4) \`onPlaybackAudioFrame\`

### Audio routing [#audio-routing]

The audio output device used by the app when playing audio. Common audio routes include wired headphones, earpieces, speakers, Bluetooth headphones, and others.

The APIs used by the audio module are as follows:

* Enable local audio collection: \`enableLocalAudio\`
* Set local playback device: \`setPlaybackDevice\`
* Set up audio routing: \`setDefaultAudioRouteToSpeakerphone\`

### Video module [#video-module]

The following diagram shows the main functions of the video module in video interaction:

![Video module functions](https://assets-docs.agora.io/images/common/video-module.svg)

The figure shows the following observation points:

1. \`POSITION_POST_CAPTURER_ORIGIN\`.
2. \`POSITION_POST_CAPTURER\`, corresponds to the \`onCaptureVideoFrame\` callback.
3. \`POSITION_PRE_ENCODER\`, corresponds to the \`onPreEncodeVideoFrame\` callback.
4. \`POSITION_PRE_RENDERER\`, corresponds to the \`onRenderVideoFrame\` callback.

The APIs used by the video module are as follows:

* Enable local video collection: \`enableLocalVideo\`
* Local preview: \`setupLocalVideo\` → \`startPreview\`
* Video rendering shows: \`setupRemoteVideo\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "RTC (Real-Time Communication) refers to real-time communication technology, which allows almost instant exchange of audio, video, and other data between the sender and the receiver."
  }, {
    heading: undefined,
    content: "Agora SDKs provide real-time audio and video interaction services, with multi-platform and multi-device support. This includes high-definition video calls, voice-only calls, interactive live streaming, as well as one-on-one and multi-group chats."
  }, {
    heading: undefined,
    content: "This guide introduces the key processes and concepts you need to know to use RTC SDK."
  }, {
    heading: undefined,
    content: "Agora relies on the following fundamental concepts to enable seamless real-time communication:"
  }, {
    heading: "agora-sdrtn",
    content: "Agora's core engagement services are powered by its Software-Defined Real-Time Network (SDRTN®), a global infrastructure accessible anytime, anywhere. Unlike traditional networks, Agora SDRTN® is not restricted by devices, phone numbers, or telecom coverage areas. With data centers in over 200 countries and regions, it ensures sub-second latency and high availability for real-time media."
  }, {
    heading: "agora-sdrtn",
    content: "Agora SDRTN® enables live user engagement through real-time communication (RTC), offering:"
  }, {
    heading: "agora-sdrtn",
    content: "Unmatched quality of service"
  }, {
    heading: "agora-sdrtn",
    content: "High availability and accessibility"
  }, {
    heading: "agora-sdrtn",
    content: "True scalability"
  }, {
    heading: "agora-sdrtn",
    content: "Low cost"
  }, {
    heading: "channel-concepts",
    content: "Agora uses channels to group users together, enabling seamless communication and interaction. Channels serve as the foundation for transmitting real-time data, whether audio, video, or signaling, and play a crucial role in connecting users and services."
  }, {
    heading: "channel",
    content: "A channel organizes users into a group and is identified by a unique channel name. Users who connect to the same channel are able to communicate with each other. A channel is created when the first user joins and ceases to exist when the last user leaves."
  }, {
    heading: "channel",
    content: "Channels are created by calling the methods for transmitting real-time data. Agora uses different channels to transmit different types of data:"
  }, {
    heading: "channel",
    content: "An RTC channel is used for transmitting audio or video data."
  }, {
    heading: "channel",
    content: "A Signaling channel is used for transmitting messaging or signaling data."
  }, {
    heading: "channel",
    content: "These channels are independent of each other."
  }, {
    heading: "channel",
    content: "Additional services provided by Agora, such as Cloud Recording and STT, join the RTC SDK channel to provide real-time recording, transmission acceleration, media playback, and content moderation."
  }, {
    heading: "channel-profile",
    content: "The RTC SDK applies different optimization methods according to the selected channel profile. Agora supports the following channel profiles:"
  }, {
    heading: "channel-profile",
    content: "Channel profile"
  }, {
    heading: "channel-profile",
    content: "Description"
  }, {
    heading: "channel-profile",
    content: "**Communication**"
  }, {
    heading: "channel-profile",
    content: "This profile is suitable for one-on-one or group calls, where all users in the channel talk freely."
  }, {
    heading: "channel-profile",
    content: "**Live Broadcasting**"
  }, {
    heading: "channel-profile",
    content: "In a live streaming channel, users have two client roles: *host* and *audience*. The *host* sends and receives streams, while the *audience* only receives streams with the sending function disabled."
  }, {
    heading: "stream",
    content: "A stream is a sequence of digitally encoded, coherent signals that contain media data. Users in a channel publish local streams and subscribe to remote streams from other users."
  }, {
    heading: "user-role",
    content: "The user role defines whether a user in a channel has the permission to publish streams. There are two user roles:"
  }, {
    heading: "user-role",
    content: "**Host**: A user who can publish streams to a channel."
  }, {
    heading: "user-role",
    content: "**Audience**: A User who can only subscribe to remote media streams. A user with this role cannot publish streams."
  }, {
    heading: "publish",
    content: "Publishing is the act of sending a user’s audio or video data to the channel. Usually, the published stream is created by the audio data sampled from a microphone or the video data captured by a camera. You can also publish media streams from other sources, such as an online music file or the user’s screen."
  }, {
    heading: "publish",
    content: "After successfully publishing a stream, the SDK uses it to send media data to other users in the channel. Users communicate with each other in real-time by publishing local streams and subscribing to remote streams."
  }, {
    heading: "subscribe",
    content: "Subscribing is the act of receiving media streams published by remote users to the channel. A user receives audio and video data from other users by subscribing to one or more of their streams. You either directly play the subscribed streams or process incoming data for other purposes such as recording or capturing screenshots."
  }, {
    heading: "user-id",
    content: "In Video Calling, the UID is an integer value that uniquely identifies a user within the context of a channel. When joining a channel, you have the option to either assign a specific UID to the user or pass `0` or `null` and allow Agora to automatically generate and assign a UID to the user. If two users attempt to join the same channel with the same UID, it can lead to unexpected behavior."
  }, {
    heading: "user-id",
    content: "The UID is used by Agora's services and components to identify and manage users within a channel. Ensure that UIDs are properly assigned to prevent conflicts."
  }, {
    heading: "rtc-connection",
    content: "The connection between the SDK and the channel. When publishing or subscribing to multiple streams in multiple channels, a connection is used to specify the target channel."
  }, {
    heading: "credentials",
    content: "To ensure reliable access and secure communication, Agora uses credentials such as the App ID, App Certificate, and tokens to identify applications, authenticate their requests, and authorize their access on its platform."
  }, {
    heading: "app-id",
    content: "The App ID is a unique key generated by Agora to identify each project and provide billing and other statistical data services. The App ID is critical for connecting users within your app. It is used to initialize the Agora Engine in your app, and as one of the required keys to create authentication tokens for secure communication. Retrieve the App ID for your project using the Agora Console."
  }, {
    heading: "app-id",
    content: "App IDs are stored on the front-end client and do not provide access control. Projects using only an App ID allow any user with the App ID to join. For access control, especially in production environments, choose the **App ID + Token** mechanism for user authentication when creating a new project. Without authentication tokens, your environment is open to anyone with access to your App ID."
  }, {
    heading: "app-certificate",
    content: "An App Certificate is a unique key generated by the Agora Console to secure projects through token authentication. It is required, along with the App ID, to generate a token that proves authorization between your systems and Agora's network. App Certificates are used to generate Video Calling authentication tokens."
  }, {
    heading: "app-certificate",
    content: "Store the App Certificate securely in your backend systems. If your App Certificate is compromised or to meet security compliance requirements, you can invalidate certificates and create new ones through the Agora Console."
  }, {
    heading: "tokens",
    content: "A token is a dynamic key generated using the App ID, App Certificate, user ID, and expiration timestamp. Tokens authenticate and secure access to Agora's services, ensuring only authorized users can join a channel and participate in real-time communication."
  }, {
    heading: "tokens",
    content: "Tokens are generated on your server and passed to the client for use in Video Calling. The token generation process involves digitally signing the App ID, App Certificate, user ID, and expiration timestamp using a specific algorithm, preventing tampering or forgery."
  }, {
    heading: "tokens",
    content: "During development and testing, use the Agora Console to generate temporary tokens. For production environments, implement a token server as part of your security infrastructure to control access to your channels."
  }, {
    heading: "tokens",
    content: "For information on setting up a token server for generating and managing tokens, refer to Deploy a token server."
  }, {
    heading: "agora-console",
    content: `Agora Console is the main dashboard where you manage your Agora projects and services. Before you can use Agora's SDKs, you must first create a project in the Agora Console. See Agora account management for
details.`
  }, {
    heading: "agora-console",
    content: "Agora Console provides an intuitive interface for developers to query and manage their Agora account. After registering an Agora account, you use the Agora Console to perform the following tasks:"
  }, {
    heading: "agora-console",
    content: "Manage your account"
  }, {
    heading: "agora-console",
    content: "Create and configure Agora projects and services"
  }, {
    heading: "agora-console",
    content: "Get an App ID and the App certificate"
  }, {
    heading: "agora-console",
    content: "Generate temporary tokens for development and testing"
  }, {
    heading: "agora-console",
    content: "Manage members and roles"
  }, {
    heading: "agora-console",
    content: "Check call quality and usage"
  }, {
    heading: "agora-console",
    content: "Check bills and make payments"
  }, {
    heading: "agora-console",
    content: "Access product resources"
  }, {
    heading: "agora-console",
    content: "See Agora account management for details on how to manage all aspects of your Agora account."
  }, {
    heading: "agora-console",
    content: "Agora also provides RESTful APIs that you use to implement features such as creating a project and fetching usage numbers programmatically."
  }, {
    heading: "audio-and-video-interaction-workflow",
    content: "The following figure illustrates the workflow of using the RTC SDK to implement basic audio and video interaction."
  }, {
    heading: "audio-and-video-interaction-workflow",
    content: "Agora relies on the following fundamental concepts to enable seamless real-time communication:"
  }, {
    heading: "track",
    content: "A track contains specific audio or video information. It consists of three parts: input source, filter, and output. According to different functions in the RTC process, tracks can be further classified into uplink tracks and downlink tracks."
  }, {
    heading: "input-source",
    content: "The input source is the local audio or video data to be published. It can be from a camera, screen capture, or microphone source, or parsed from a media file."
  }, {
    heading: "filter",
    content: "A filter performs a series of processing operations on audio and video, including pre-processing and post-processing, and transmits the processed audio and video signals to the output. Filters can be connected to multiple input sources or multiple outputs."
  }, {
    heading: "filter",
    content: "Pre-processing: Audio/video filters in the sender track, such as virtual background, beautification, echo cancellation, and noise reduction."
  }, {
    heading: "filter",
    content: "Post-processing : Audio/video filters in the receiving track, such as super-resolution, and spatial audio effects."
  }, {
    heading: "output",
    content: "Located at the end of the track, such as an encoder, or a renderer."
  }, {
    heading: "audio-module",
    content: "In audio interaction, the main functions of the audio module are as shown in the figure below:"
  }, {
    heading: "audio-module",
    content: "After you call `registerAudioFrameObserver`, you can obtain the raw audio data at the following observation points in the audio transmission process:"
  }, {
    heading: "audio-module",
    content: "Obtain the raw audio data of ear monitoring through the `onEarMonitoringAudioFrame` callback."
  }, {
    heading: "audio-module",
    content: "Obtain the captured raw audio data through the `onRecordAudioFrame` callback."
  }, {
    heading: "audio-module",
    content: "Obtain the raw audio playback data of each individual stream through the `onPlaybackAudioFrameBeforeMixing` callback."
  }, {
    heading: "audio-module",
    content: "Obtain the raw audio playback data of all mixed streams through the `onPlaybackAudioFrame` callback."
  }, {
    heading: "audio-module",
    content: "Obtain the raw audio data after mixing the captured and playback audio through the `onMixedAudioFrame` callback.\n(5) `onMixedAudioFrame` = (2) `onRecordAudioFrame` + (4) `onPlaybackAudioFrame`"
  }, {
    heading: "audio-routing",
    content: "The audio output device used by the app when playing audio. Common audio routes include wired headphones, earpieces, speakers, Bluetooth headphones, and others."
  }, {
    heading: "audio-routing",
    content: "The APIs used by the audio module are as follows:"
  }, {
    heading: "audio-routing",
    content: "Enable local audio collection: `enableLocalAudio`"
  }, {
    heading: "audio-routing",
    content: "Set local playback device: `setPlaybackDevice`"
  }, {
    heading: "audio-routing",
    content: "Set up audio routing: `setDefaultAudioRouteToSpeakerphone`"
  }, {
    heading: "video-module",
    content: "The following diagram shows the main functions of the video module in video interaction:"
  }, {
    heading: "video-module",
    content: "The figure shows the following observation points:"
  }, {
    heading: "video-module",
    content: "`POSITION_POST_CAPTURER_ORIGIN`."
  }, {
    heading: "video-module",
    content: "`POSITION_POST_CAPTURER`, corresponds to the `onCaptureVideoFrame` callback."
  }, {
    heading: "video-module",
    content: "`POSITION_PRE_ENCODER`, corresponds to the `onPreEncodeVideoFrame` callback."
  }, {
    heading: "video-module",
    content: "`POSITION_PRE_RENDERER`, corresponds to the `onRenderVideoFrame` callback."
  }, {
    heading: "video-module",
    content: "The APIs used by the video module are as follows:"
  }, {
    heading: "video-module",
    content: "Enable local video collection: `enableLocalVideo`"
  }, {
    heading: "video-module",
    content: "Local preview: `setupLocalVideo` → `startPreview`"
  }, {
    heading: "video-module",
    content: "Video rendering shows: `setupRemoteVideo`"
  }],
  headings: [{
    id: "agora-sdrtn",
    content: "Agora SDRTN®"
  }, {
    id: "channel-concepts",
    content: "Channel concepts"
  }, {
    id: "channel",
    content: "Channel"
  }, {
    id: "channel-profile",
    content: "Channel profile"
  }, {
    id: "stream",
    content: "Stream"
  }, {
    id: "user-role",
    content: "User role"
  }, {
    id: "publish",
    content: "Publish"
  }, {
    id: "subscribe",
    content: "Subscribe"
  }, {
    id: "user-id",
    content: "User ID"
  }, {
    id: "rtc-connection",
    content: "RTC connection"
  }, {
    id: "credentials",
    content: "Credentials"
  }, {
    id: "app-id",
    content: "App ID"
  }, {
    id: "app-certificate",
    content: "App Certificate"
  }, {
    id: "tokens",
    content: "Tokens"
  }, {
    id: "agora-console",
    content: "Agora Console"
  }, {
    id: "audio-and-video-concepts",
    content: "Audio and video concepts"
  }, {
    id: "audio-and-video-interaction-workflow",
    content: "Audio and video interaction workflow"
  }, {
    id: "track",
    content: "Track"
  }, {
    id: "input-source",
    content: "Input source"
  }, {
    id: "filter",
    content: "Filter"
  }, {
    id: "output",
    content: "Output"
  }, {
    id: "audio-module",
    content: "Audio module"
  }, {
    id: "audio-routing",
    content: "Audio routing"
  }, {
    id: "video-module",
    content: "Video module"
  }]
};
export let toc = [{
  depth: 2,
  url: "#agora-sdrtn",
  title: _jsx(_Fragment, {
    children: "Agora SDRTN®"
  })
}, {
  depth: 2,
  url: "#channel-concepts",
  title: _jsx(_Fragment, {
    children: "Channel concepts"
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
  url: "#stream",
  title: _jsx(_Fragment, {
    children: "Stream"
  })
}, {
  depth: 3,
  url: "#user-role",
  title: _jsx(_Fragment, {
    children: "User role"
  })
}, {
  depth: 3,
  url: "#publish",
  title: _jsx(_Fragment, {
    children: "Publish"
  })
}, {
  depth: 3,
  url: "#subscribe",
  title: _jsx(_Fragment, {
    children: "Subscribe"
  })
}, {
  depth: 3,
  url: "#user-id",
  title: _jsx(_Fragment, {
    children: "User ID"
  })
}, {
  depth: 3,
  url: "#rtc-connection",
  title: _jsx(_Fragment, {
    children: "RTC connection"
  })
}, {
  depth: 2,
  url: "#credentials",
  title: _jsx(_Fragment, {
    children: "Credentials"
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
    children: "App Certificate"
  })
}, {
  depth: 3,
  url: "#tokens",
  title: _jsx(_Fragment, {
    children: "Tokens"
  })
}, {
  depth: 3,
  url: "#agora-console",
  title: _jsx(_Fragment, {
    children: "Agora Console"
  })
}, {
  depth: 2,
  url: "#audio-and-video-concepts",
  title: _jsx(_Fragment, {
    children: "Audio and video concepts"
  })
}, {
  depth: 3,
  url: "#audio-and-video-interaction-workflow",
  title: _jsx(_Fragment, {
    children: "Audio and video interaction workflow"
  })
}, {
  depth: 3,
  url: "#track",
  title: _jsx(_Fragment, {
    children: "Track"
  })
}, {
  depth: 4,
  url: "#input-source",
  title: _jsx(_Fragment, {
    children: "Input source"
  })
}, {
  depth: 4,
  url: "#filter",
  title: _jsx(_Fragment, {
    children: "Filter"
  })
}, {
  depth: 4,
  url: "#output",
  title: _jsx(_Fragment, {
    children: "Output"
  })
}, {
  depth: 3,
  url: "#audio-module",
  title: _jsx(_Fragment, {
    children: "Audio module"
  })
}, {
  depth: 3,
  url: "#audio-routing",
  title: _jsx(_Fragment, {
    children: "Audio routing"
  })
}, {
  depth: 3,
  url: "#video-module",
  title: _jsx(_Fragment, {
    children: "Video module"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
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
    children: [_jsx(_components.p, {
      children: "RTC (Real-Time Communication) refers to real-time communication technology, which allows almost instant exchange of audio, video, and other data between the sender and the receiver."
    }), `
`, _jsx(_components.p, {
      children: "Agora SDKs provide real-time audio and video interaction services, with multi-platform and multi-device support. This includes high-definition video calls, voice-only calls, interactive live streaming, as well as one-on-one and multi-group chats."
    }), `
`, _jsx(_components.p, {
      children: "This guide introduces the key processes and concepts you need to know to use RTC SDK."
    }), `
`, _jsx(_components.p, {
      children: "Agora relies on the following fundamental concepts to enable seamless real-time communication:"
    }), `
`, _jsx(_components.h2, {
      id: "agora-sdrtn",
      children: "Agora SDRTN®"
    }), `
`, _jsx(_components.p, {
      children: "Agora's core engagement services are powered by its Software-Defined Real-Time Network (SDRTN®), a global infrastructure accessible anytime, anywhere. Unlike traditional networks, Agora SDRTN® is not restricted by devices, phone numbers, or telecom coverage areas. With data centers in over 200 countries and regions, it ensures sub-second latency and high availability for real-time media."
    }), `
`, _jsx(_components.p, {
      children: "Agora SDRTN® enables live user engagement through real-time communication (RTC), offering:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Unmatched quality of service"
      }), `
`, _jsx(_components.li, {
        children: "High availability and accessibility"
      }), `
`, _jsx(_components.li, {
        children: "True scalability"
      }), `
`, _jsx(_components.li, {
        children: "Low cost"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "channel-concepts",
      children: "Channel concepts"
    }), `
`, _jsx(_components.p, {
      children: "Agora uses channels to group users together, enabling seamless communication and interaction. Channels serve as the foundation for transmitting real-time data, whether audio, video, or signaling, and play a crucial role in connecting users and services."
    }), `
`, _jsx(_components.h3, {
      id: "channel",
      children: "Channel"
    }), `
`, _jsx(_components.p, {
      children: "A channel organizes users into a group and is identified by a unique channel name. Users who connect to the same channel are able to communicate with each other. A channel is created when the first user joins and ceases to exist when the last user leaves."
    }), `
`, _jsx(_components.p, {
      children: "Channels are created by calling the methods for transmitting real-time data. Agora uses different channels to transmit different types of data:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "An RTC channel is used for transmitting audio or video data."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "A Signaling channel is used for transmitting messaging or signaling data."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "These channels are independent of each other."
    }), `
`, _jsx(_components.p, {
      children: "Additional services provided by Agora, such as Cloud Recording and STT, join the RTC SDK channel to provide real-time recording, transmission acceleration, media playback, and content moderation."
    }), `
`, _jsx(_components.h3, {
      id: "channel-profile",
      children: "Channel profile"
    }), `
`, _jsx(_components.p, {
      children: "The RTC SDK applies different optimization methods according to the selected channel profile. Agora supports the following channel profiles:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Channel profile"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Communication"
            })
          }), _jsx(_components.td, {
            children: "This profile is suitable for one-on-one or group calls, where all users in the channel talk freely."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Live Broadcasting"
            })
          }), _jsxs(_components.td, {
            children: ["In a live streaming channel, users have two client roles: ", _jsx(_components.em, {
              children: "host"
            }), " and ", _jsx(_components.em, {
              children: "audience"
            }), ". The ", _jsx(_components.em, {
              children: "host"
            }), " sends and receives streams, while the ", _jsx(_components.em, {
              children: "audience"
            }), " only receives streams with the sending function disabled."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "stream",
      children: "Stream"
    }), `
`, _jsxs(_components.p, {
      children: ["A stream is a sequence of digitally encoded, coherent signals that contain media data. Users in a channel ", _jsx(_components.a, {
        href: "#publish",
        children: "publish"
      }), " local streams and ", _jsx(_components.a, {
        href: "#subscribe",
        children: "subscribe"
      }), " to remote streams from other users."]
    }), `
`, _jsx(_components.h3, {
      id: "user-role",
      children: "User role"
    }), `
`, _jsx(_components.p, {
      children: "The user role defines whether a user in a channel has the permission to publish streams. There are two user roles:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Host"
        }), ": A user who can publish streams to a channel."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Audience"
        }), ": A User who can only subscribe to remote media streams. A user with this role cannot publish streams."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "publish",
      children: "Publish"
    }), `
`, _jsx(_components.p, {
      children: "Publishing is the act of sending a user’s audio or video data to the channel. Usually, the published stream is created by the audio data sampled from a microphone or the video data captured by a camera. You can also publish media streams from other sources, such as an online music file or the user’s screen."
    }), `
`, _jsx(_components.p, {
      children: "After successfully publishing a stream, the SDK uses it to send media data to other users in the channel. Users communicate with each other in real-time by publishing local streams and subscribing to remote streams."
    }), `
`, _jsx(_components.h3, {
      id: "subscribe",
      children: "Subscribe"
    }), `
`, _jsx(_components.p, {
      children: "Subscribing is the act of receiving media streams published by remote users to the channel. A user receives audio and video data from other users by subscribing to one or more of their streams. You either directly play the subscribed streams or process incoming data for other purposes such as recording or capturing screenshots."
    }), `
`, _jsx(_components.h3, {
      id: "user-id",
      children: "User ID"
    }), `
`, _jsxs(_components.p, {
      children: ["In Video Calling, the UID is an integer value that uniquely identifies a user within the context of a channel. When joining a channel, you have the option to either assign a specific UID to the user or pass ", _jsx(_components.code, {
        children: "0"
      }), " or ", _jsx(_components.code, {
        children: "null"
      }), " and allow Agora to automatically generate and assign a UID to the user. If two users attempt to join the same channel with the same UID, it can lead to unexpected behavior."]
    }), `
`, _jsx(_components.p, {
      children: "The UID is used by Agora's services and components to identify and manage users within a channel. Ensure that UIDs are properly assigned to prevent conflicts."
    }), `
`, _jsx(_components.h3, {
      id: "rtc-connection",
      children: "RTC connection"
    }), `
`, _jsx(_components.p, {
      children: "The connection between the SDK and the channel. When publishing or subscribing to multiple streams in multiple channels, a connection is used to specify the target channel."
    }), `
`, _jsx(_components.h2, {
      id: "credentials",
      children: "Credentials"
    }), `
`, _jsx(_components.p, {
      children: "To ensure reliable access and secure communication, Agora uses credentials such as the App ID, App Certificate, and tokens to identify applications, authenticate their requests, and authorize their access on its platform."
    }), `
`, _jsx(_components.h3, {
      id: "app-id",
      children: "App ID"
    }), `
`, _jsxs(_components.p, {
      children: ["The App ID is a unique key generated by Agora to identify each project and provide billing and other statistical data services. The App ID is critical for connecting users within your app. It is used to initialize the Agora Engine in your app, and as one of the required keys to create authentication tokens for secure communication. Retrieve the App ID for your project using the ", _jsx(_components.a, {
        href: "https://console.agora.io/v2/project-management",
        children: "Agora Console"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["App IDs are stored on the front-end client and do not provide access control. Projects using only an App ID allow any user with the App ID to join. For access control, especially in production environments, choose the ", _jsx(_components.strong, {
        children: "App ID + Token"
      }), " mechanism for user authentication when creating a new project. Without authentication tokens, your environment is open to anyone with access to your App ID."]
    }), `
`, _jsx(_components.h3, {
      id: "app-certificate",
      children: "App Certificate"
    }), `
`, _jsx(_components.p, {
      children: "An App Certificate is a unique key generated by the Agora Console to secure projects through token authentication. It is required, along with the App ID, to generate a token that proves authorization between your systems and Agora's network. App Certificates are used to generate Video Calling authentication tokens."
    }), `
`, _jsx(_components.p, {
      children: "Store the App Certificate securely in your backend systems. If your App Certificate is compromised or to meet security compliance requirements, you can invalidate certificates and create new ones through the Agora Console."
    }), `
`, _jsx(_components.h3, {
      id: "tokens",
      children: "Tokens"
    }), `
`, _jsx(_components.p, {
      children: "A token is a dynamic key generated using the App ID, App Certificate, user ID, and expiration timestamp. Tokens authenticate and secure access to Agora's services, ensuring only authorized users can join a channel and participate in real-time communication."
    }), `
`, _jsx(_components.p, {
      children: "Tokens are generated on your server and passed to the client for use in Video Calling. The token generation process involves digitally signing the App ID, App Certificate, user ID, and expiration timestamp using a specific algorithm, preventing tampering or forgery."
    }), `
`, _jsx(_components.p, {
      children: "During development and testing, use the Agora Console to generate temporary tokens. For production environments, implement a token server as part of your security infrastructure to control access to your channels."
    }), `
`, _jsxs(_components.p, {
      children: ["For information on setting up a token server for generating and managing tokens, refer to ", _jsx(_components.a, {
        href: "/en/realtime-media/rtc/build/authenticate-users/deploy-token-server",
        children: "Deploy a token server"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "agora-console",
      children: "Agora Console"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "https://console.agora.io/v2",
        children: "Agora Console"
      }), " is the main dashboard where you manage your Agora projects and services. Before you can use Agora's SDKs, you must first create a project in the Agora Console. See ", _jsx(_components.a, {
        href: "/en/introduction/account",
        children: "Agora account management"
      }), ` for
details.`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/common/create-project.svg",
        alt: "Create project in Agora Console"
      })
    }), `
`, _jsx(_components.p, {
      children: "Agora Console provides an intuitive interface for developers to query and manage their Agora account. After registering an Agora account, you use the Agora Console to perform the following tasks:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Manage your account"
      }), `
`, _jsx(_components.li, {
        children: "Create and configure Agora projects and services"
      }), `
`, _jsx(_components.li, {
        children: "Get an App ID and the App certificate"
      }), `
`, _jsx(_components.li, {
        children: "Generate temporary tokens for development and testing"
      }), `
`, _jsx(_components.li, {
        children: "Manage members and roles"
      }), `
`, _jsx(_components.li, {
        children: "Check call quality and usage"
      }), `
`, _jsx(_components.li, {
        children: "Check bills and make payments"
      }), `
`, _jsx(_components.li, {
        children: "Access product resources"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["See ", _jsx(_components.a, {
        href: "/en/introduction/account",
        children: "Agora account management"
      }), " for details on how to manage all aspects of your Agora account."]
    }), `
`, _jsx(_components.p, {
      children: "Agora also provides RESTful APIs that you use to implement features such as creating a project and fetching usage numbers programmatically."
    }), `
`, _jsx(_components.h2, {
      id: "audio-and-video-concepts",
      children: "Audio and video concepts"
    }), `
`, _jsx(_components.h3, {
      id: "audio-and-video-interaction-workflow",
      children: "Audio and video interaction workflow"
    }), `
`, _jsx(_components.p, {
      children: "The following figure illustrates the workflow of using the RTC SDK to implement basic audio and video interaction."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/common/basic-audio-and-video.svg",
        alt: "orientation_adaptive_locked_landscape"
      })
    }), `
`, _jsx(_components.p, {
      children: "Agora relies on the following fundamental concepts to enable seamless real-time communication:"
    }), `
`, _jsx(_components.h3, {
      id: "track",
      children: "Track"
    }), `
`, _jsx(_components.p, {
      children: "A track contains specific audio or video information. It consists of three parts: input source, filter, and output. According to different functions in the RTC process, tracks can be further classified into uplink tracks and downlink tracks."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/common/track.svg",
        alt: "Track"
      })
    }), `
`, _jsx(_components.h4, {
      id: "input-source",
      children: "Input source"
    }), `
`, _jsx(_components.p, {
      children: "The input source is the local audio or video data to be published. It can be from a camera, screen capture, or microphone source, or parsed from a media file."
    }), `
`, _jsx(_components.h4, {
      id: "filter",
      children: "Filter"
    }), `
`, _jsx(_components.p, {
      children: "A filter performs a series of processing operations on audio and video, including pre-processing and post-processing, and transmits the processed audio and video signals to the output. Filters can be connected to multiple input sources or multiple outputs."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Pre-processing: Audio/video filters in the sender track, such as virtual background, beautification, echo cancellation, and noise reduction."
      }), `
`, _jsx(_components.li, {
        children: "Post-processing : Audio/video filters in the receiving track, such as super-resolution, and spatial audio effects."
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "output",
      children: "Output"
    }), `
`, _jsx(_components.p, {
      children: "Located at the end of the track, such as an encoder, or a renderer."
    }), `
`, _jsx(_components.h3, {
      id: "audio-module",
      children: "Audio module"
    }), `
`, _jsx(_components.p, {
      children: "In audio interaction, the main functions of the audio module are as shown in the figure below:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/common/audio-module.svg",
        alt: "Audio module functions"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["After you call ", _jsx(_components.code, {
        children: "registerAudioFrameObserver"
      }), ", you can obtain the raw audio data at the following observation points in the audio transmission process:"]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Obtain the raw audio data of ear monitoring through the ", _jsx(_components.code, {
          children: "onEarMonitoringAudioFrame"
        }), " callback."]
      }), `
`, _jsxs(_components.li, {
        children: ["Obtain the captured raw audio data through the ", _jsx(_components.code, {
          children: "onRecordAudioFrame"
        }), " callback."]
      }), `
`, _jsxs(_components.li, {
        children: ["Obtain the raw audio playback data of each individual stream through the ", _jsx(_components.code, {
          children: "onPlaybackAudioFrameBeforeMixing"
        }), " callback."]
      }), `
`, _jsxs(_components.li, {
        children: ["Obtain the raw audio playback data of all mixed streams through the ", _jsx(_components.code, {
          children: "onPlaybackAudioFrame"
        }), " callback."]
      }), `
`, _jsxs(_components.li, {
        children: ["Obtain the raw audio data after mixing the captured and playback audio through the ", _jsx(_components.code, {
          children: "onMixedAudioFrame"
        }), ` callback.
(5) `, _jsx(_components.code, {
          children: "onMixedAudioFrame"
        }), " = (2) ", _jsx(_components.code, {
          children: "onRecordAudioFrame"
        }), " + (4) ", _jsx(_components.code, {
          children: "onPlaybackAudioFrame"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "audio-routing",
      children: "Audio routing"
    }), `
`, _jsx(_components.p, {
      children: "The audio output device used by the app when playing audio. Common audio routes include wired headphones, earpieces, speakers, Bluetooth headphones, and others."
    }), `
`, _jsx(_components.p, {
      children: "The APIs used by the audio module are as follows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Enable local audio collection: ", _jsx(_components.code, {
          children: "enableLocalAudio"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Set local playback device: ", _jsx(_components.code, {
          children: "setPlaybackDevice"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Set up audio routing: ", _jsx(_components.code, {
          children: "setDefaultAudioRouteToSpeakerphone"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "video-module",
      children: "Video module"
    }), `
`, _jsx(_components.p, {
      children: "The following diagram shows the main functions of the video module in video interaction:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/common/video-module.svg",
        alt: "Video module functions"
      })
    }), `
`, _jsx(_components.p, {
      children: "The figure shows the following observation points:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "POSITION_POST_CAPTURER_ORIGIN"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "POSITION_POST_CAPTURER"
        }), ", corresponds to the ", _jsx(_components.code, {
          children: "onCaptureVideoFrame"
        }), " callback."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "POSITION_PRE_ENCODER"
        }), ", corresponds to the ", _jsx(_components.code, {
          children: "onPreEncodeVideoFrame"
        }), " callback."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "POSITION_PRE_RENDERER"
        }), ", corresponds to the ", _jsx(_components.code, {
          children: "onRenderVideoFrame"
        }), " callback."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The APIs used by the video module are as follows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Enable local video collection: ", _jsx(_components.code, {
          children: "enableLocalVideo"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Local preview: ", _jsx(_components.code, {
          children: "setupLocalVideo"
        }), " → ", _jsx(_components.code, {
          children: "startPreview"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Video rendering shows: ", _jsx(_components.code, {
          children: "setupRemoteVideo"
        })]
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
