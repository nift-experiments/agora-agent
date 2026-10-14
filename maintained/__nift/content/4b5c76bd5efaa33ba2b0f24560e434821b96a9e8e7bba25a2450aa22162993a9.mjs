import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Channel basics",
  description: "Basic concepts of message and stream channels."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;web&#x22;,&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;flutter&#x22;,&#x22;windows&#x22;,&#x22;linux-cpp&#x22;,&#x22;linux-java&#x22;,&#x22;unity&#x22;]" showTabs="true">
  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters.

    ## Channel types [#channel-types]

    Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:

    * **Message channel**

      A message channel uses a communication method similar to the MQTT protocol. It follows the pub/sub (publish-subscriber) model to deliver messages. In message channels, instead of creating a channel in advance, you simply publish messages to a specified channel or subscribe to receive messages from a channel. Due to the flexibility of the model, you can easily implement different topologies such as one-to-one channels, group channels, broadcast channels, and unicast channels. Since the number of subscribers can be larger, this channel type does not guarantee sending delivery receipts from all subscribers after receipt of a message. See [Message channels](message-channel) for implementation details.

    * **User channel**

      Use this channel type to implement a one-to-one topology. User channels enable you to send peer-to-peer messages to a specified \`userId\`. To send a message to a user channel, set the \`channelType\` parameter in the \`publish\` method to \`USER\` and the \`channelName\` to the \`userId\` of the recipient. To receive messages sent to your \`userId\`, you don't need to subscribe; you implement the \`message\` event listener. User channels support delivery receipts. When a publisher sends a message, the API returns \`success\` if the receiver is online and receives the message successfully. If the receiver is not online or the reception fails, the method returns \`failure\` or \`timeout\`. Although you can use the return value to determine if the recipient is online, best practice is to use the \`Presence\` functionality for this purpose.

    * **Stream channel**

      This is a special type of channel based on the room concept that is similar to the observer pattern. In stream channels, users cannot send messages directly to a channel. You call the \`joinTopic\` method to register as a publisher of a topic before sending messages. To receive messages, users subscribe to the specified message publisher, identified by the \`userId\`, in the specified topic. In stream channels, client-side messages support delivery at higher QPS. This channel type is often recommended for use-cases such as Metaverse, parallel driving, and cloud gaming. See [Stream channels](stream-channel) for implementation details.

    The channel types are distinguished in the API by \`channelType\`. Apart from differences in the message sending and receiving mechanism, the features and use of message channels and stream channels for other features and events such as \`Presence\`, \`Storage\`, and \`Locks\`, is the same. User channels do not support these features as they are simple message pass-through channels.

    ## Create a channel [#create-a-channel]

    For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you.

    When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the \`createStreamChannel\` method to create an instance of a \`RTMStreamChannel\` object before joining the channel.

    ## Channel usage restrictions [#channel-usage-restrictions]

    Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see [API usage restrictions](../../reference/limitations).

    ## Channel naming [#channel-naming]

    A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel.

    ### Legal characters [#legal-characters]

    The supported legal characters are:

    * 26 lowercase English letters a-z
    * 26 uppercase English letters A-Z
    * 10 numbers 0\\~9
    * Space
    * \`!\`, \`#\`, \`$\`, \`%\`, \`&\`, \`(\`, \`)\`, \`+\`, \`,\`, \`-\`, \`:\`, \`;\`, \`<\`, \`=\`, \`>\`, \`?\`, \`@\`, \`[\`, \`]\`, \`^\`, \`_\`, \`{\`, \`|\`, \`}\`, \`~\`, \`\` \` \`\`

    <CalloutContainer type="warning">
      <CalloutTitle>
        Important
      </CalloutTitle>

      <CalloutDescription>
        Channel names cannot begin with an underscore.
      </CalloutDescription>
    </CalloutContainer>

    ### Illegal characters [#illegal-characters]

    The use of \`.\`, \`*\`, \`/\`, \`\\\`, \`\\0\` and non-printable ASCII characters in channel names is not allowed.

    ### Naming convention [#naming-convention]

    Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see [Channel naming recommendations](../../reference/channel-naming).

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters.

    ## Channel types [#channel-types-1]

    Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:

    * **Message channel**

      A message channel uses a communication method similar to the MQTT protocol. It follows the pub/sub (publish-subscriber) model to deliver messages. In message channels, instead of creating a channel in advance, you simply publish messages to a specified channel or subscribe to receive messages from a channel. Due to the flexibility of the model, you can easily implement different topologies such as one-to-one channels, group channels, broadcast channels, and unicast channels. Since the number of subscribers can be larger, this channel type does not guarantee sending delivery receipts from all subscribers after receipt of a message. See [Message channels](message-channel) for implementation details.

    * **User channel**

      Use this channel type to implement a one-to-one topology. User channels enable you to send peer-to-peer messages to a specified \`userId\`. To send a message to a user channel, set the \`channelType\` parameter in the \`publish\` method to \`USER\` and the \`channelName\` to the \`userId\` of the recipient. To receive messages sent to your \`userId\`, you don't need to subscribe; you implement the \`onMessageEvent\` event listener. User channels support delivery receipts. When a publisher sends a message, the API returns \`success\` if the receiver is online and receives the message successfully. If the receiver is not online or the reception fails, the method returns \`failure\` or \`timeout\`. Although you can use the return value to determine if the recipient is online, best practice is to use the \`Presence\` functionality for this purpose.

    * **Stream channel**

      This is a special type of channel based on the room concept that is similar to the observer pattern. In stream channels, users cannot send messages directly to a channel. You call the \`joinTopic\` method to register as a publisher of a topic before sending messages. To receive messages, users subscribe to the specified message publisher, identified by the \`userId\`, in the specified topic. In stream channels, client-side messages support delivery at higher QPS. This channel type is often recommended for use-cases such as Metaverse, parallel driving, and cloud gaming. See [Stream channels](stream-channel) for implementation details.

    The channel types are distinguished in the API by \`channelType\`. Apart from differences in the message sending and receiving mechanism, the features and use of message channels and stream channels for other features and events such as \`Presence\`, \`Storage\`, and \`Locks\`, is the same. User channels do not support these features as they are simple message pass-through channels.

    ## Create a channel [#create-a-channel-1]

    For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you.

    When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the \`createStreamChannel\` method to create an instance of a \`StreamChannel\` object before joining the channel.

    ## Channel usage restrictions [#channel-usage-restrictions-1]

    Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see [API usage restrictions](../../reference/limitations).

    ## Channel naming [#channel-naming-1]

    A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel.

    ### Legal characters [#legal-characters-1]

    The supported legal characters are:

    * 26 lowercase English letters a-z
    * 26 uppercase English letters A-Z
    * 10 numbers 0\\~9
    * Space
    * \`!\`, \`#\`, \`$\`, \`%\`, \`&\`, \`(\`, \`)\`, \`+\`, \`,\`, \`-\`, \`:\`, \`;\`, \`<\`, \`=\`, \`>\`, \`?\`, \`@\`, \`[\`, \`]\`, \`^\`, \`_\`, \`{\`, \`|\`, \`}\`, \`~\`, \`\` \` \`\`

    <CalloutContainer type="warning">
      <CalloutTitle>
        Important
      </CalloutTitle>

      <CalloutDescription>
        Channel names cannot begin with an underscore.
      </CalloutDescription>
    </CalloutContainer>

    ### Illegal characters [#illegal-characters-1]

    The use of \`.\`, \`*\`, \`/\`, \`\\\`, \`\\0\` and non-printable ASCII characters in channel names is not allowed.

    ### Naming convention [#naming-convention-1]

    Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see [Channel naming recommendations](../../reference/channel-naming).

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters.

    ## Channel types [#channel-types-2]

    Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:

    * **Message channel**

      A message channel uses a communication method similar to the MQTT protocol. It follows the pub/sub (publish-subscriber) model to deliver messages. In message channels, instead of creating a channel in advance, you simply publish messages to a specified channel or subscribe to receive messages from a channel. Due to the flexibility of the model, you can easily implement different topologies such as one-to-one channels, group channels, broadcast channels, and unicast channels. Since the number of subscribers can be larger, this channel type does not guarantee sending delivery receipts from all subscribers after receipt of a message. See [Message channels](message-channel) for implementation details.

    * **User channel**

      Use this channel type to implement a one-to-one topology. User channels enable you to send peer-to-peer messages to a specified \`userId\`. To send a message to a user channel, set the \`channelType\` parameter in the \`publish\` method to \`user\` and the \`channelName\` to the \`userId\` of the recipient. To receive messages sent to your \`userId\`, you don't need to subscribe; you implement the \`didReceiveMessageEvent\` event listener. User channels support delivery receipts. When a publisher sends a message, the API returns \`success\` if the receiver is online and receives the message successfully. If the receiver is not online or the reception fails, the method returns \`failure\` or \`timeout\`. Although you can use the return value to determine if the recipient is online, best practice is to use the \`Presence\` functionality for this purpose.

    * **Stream channel**

      This is a special type of channel based on the room concept that is similar to the observer pattern. In stream channels, users cannot send messages directly to a channel. You call the \`joinTopic\` method to register as a publisher of a topic before sending messages. To receive messages, users subscribe to the specified message publisher, identified by the \`userId\`, in the specified topic. In stream channels, client-side messages support delivery at higher QPS. This channel type is often recommended for use-cases such as Metaverse, parallel driving, and cloud gaming. See [Stream channels](stream-channel) for implementation details.

    The channel types are distinguished in the API by \`channelType\`. Apart from differences in the message sending and receiving mechanism, the features and use of message channels and stream channels for other features and events such as \`Presence\`, \`Storage\`, and \`Locks\`, is the same. User channels do not support these features as they are simple message pass-through channels.

    ## Create a channel [#create-a-channel-2]

    For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you.

    When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the \`createStreamChannel\` method to create an instance of a \`AgoraRtmStreamChannel\` object before joining the channel.

    ## Channel usage restrictions [#channel-usage-restrictions-2]

    Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see [API usage restrictions](../../reference/limitations).

    ## Channel naming [#channel-naming-2]

    A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel.

    ### Legal characters [#legal-characters-2]

    The supported legal characters are:

    * 26 lowercase English letters a-z
    * 26 uppercase English letters A-Z
    * 10 numbers 0\\~9
    * Space
    * \`!\`, \`#\`, \`$\`, \`%\`, \`&\`, \`(\`, \`)\`, \`+\`, \`,\`, \`-\`, \`:\`, \`;\`, \`<\`, \`=\`, \`>\`, \`?\`, \`@\`, \`[\`, \`]\`, \`^\`, \`_\`, \`{\`, \`|\`, \`}\`, \`~\`, \`\` \` \`\`

    <CalloutContainer type="warning">
      <CalloutTitle>
        Important
      </CalloutTitle>

      <CalloutDescription>
        Channel names cannot begin with an underscore.
      </CalloutDescription>
    </CalloutContainer>

    ### Illegal characters [#illegal-characters-2]

    The use of \`.\`, \`*\`, \`/\`, \`\\\`, \`\\0\` and non-printable ASCII characters in channel names is not allowed.

    ### Naming convention [#naming-convention-2]

    Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see [Channel naming recommendations](../../reference/channel-naming).

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters.

    ## Channel types [#channel-types-3]

    Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:

    * **Message channel**

      A message channel uses a communication method similar to the MQTT protocol. It follows the pub/sub (publish-subscriber) model to deliver messages. In message channels, instead of creating a channel in advance, you simply publish messages to a specified channel or subscribe to receive messages from a channel. Due to the flexibility of the model, you can easily implement different topologies such as one-to-one channels, group channels, broadcast channels, and unicast channels. Since the number of subscribers can be larger, this channel type does not guarantee sending delivery receipts from all subscribers after receipt of a message. See [Message channels](message-channel) for implementation details.

    * **User channel**

      Use this channel type to implement a one-to-one topology. User channels enable you to send peer-to-peer messages to a specified \`userId\`. To send a message to a user channel, set the \`channelType\` parameter in the \`publish\` method to \`user\` and the \`channelName\` to the \`userId\` of the recipient. To receive messages sent to your \`userId\`, you don't need to subscribe; you implement the \`didReceiveMessageEvent\` event listener. User channels support delivery receipts. When a publisher sends a message, the API returns \`success\` if the receiver is online and receives the message successfully. If the receiver is not online or the reception fails, the method returns \`failure\` or \`timeout\`. Although you can use the return value to determine if the recipient is online, best practice is to use the \`Presence\` functionality for this purpose.

    * **Stream channel**

      This is a special type of channel based on the room concept that is similar to the observer pattern. In stream channels, users cannot send messages directly to a channel. You call the \`joinTopic\` method to register as a publisher of a topic before sending messages. To receive messages, users subscribe to the specified message publisher, identified by the \`userId\`, in the specified topic. In stream channels, client-side messages support delivery at higher QPS. This channel type is often recommended for use-cases such as Metaverse, parallel driving, and cloud gaming. See [Stream channels](stream-channel) for implementation details.

    The channel types are distinguished in the API by \`channelType\`. Apart from differences in the message sending and receiving mechanism, the features and use of message channels and stream channels for other features and events such as \`Presence\`, \`Storage\`, and \`Locks\`, is the same. User channels do not support these features as they are simple message pass-through channels.

    ## Create a channel [#create-a-channel-3]

    For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you.

    When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the \`createStreamChannel\` method to create an instance of a \`AgoraRtmStreamChannel\` object before joining the channel.

    ## Channel usage restrictions [#channel-usage-restrictions-3]

    Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see [API usage restrictions](../../reference/limitations).

    ## Channel naming [#channel-naming-3]

    A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel.

    ### Legal characters [#legal-characters-3]

    The supported legal characters are:

    * 26 lowercase English letters a-z
    * 26 uppercase English letters A-Z
    * 10 numbers 0\\~9
    * Space
    * \`!\`, \`#\`, \`$\`, \`%\`, \`&\`, \`(\`, \`)\`, \`+\`, \`,\`, \`-\`, \`:\`, \`;\`, \`<\`, \`=\`, \`>\`, \`?\`, \`@\`, \`[\`, \`]\`, \`^\`, \`_\`, \`{\`, \`|\`, \`}\`, \`~\`, \`\` \` \`\`

    <CalloutContainer type="warning">
      <CalloutTitle>
        Important
      </CalloutTitle>

      <CalloutDescription>
        Channel names cannot begin with an underscore.
      </CalloutDescription>
    </CalloutContainer>

    ### Illegal characters [#illegal-characters-3]

    The use of \`.\`, \`*\`, \`/\`, \`\\\`, \`\\0\` and non-printable ASCII characters in channel names is not allowed.

    ### Naming convention [#naming-convention-3]

    Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see [Channel naming recommendations](../../reference/channel-naming).

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters.

    ## Channel types [#channel-types-4]

    Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:

    * **Message channel**

      A message channel uses a communication method similar to the MQTT protocol. It follows the pub/sub (publish-subscriber) model to deliver messages. In message channels, instead of creating a channel in advance, you simply publish messages to a specified channel or subscribe to receive messages from a channel. Due to the flexibility of the model, you can easily implement different topologies such as one-to-one channels, group channels, broadcast channels, and unicast channels. Since the number of subscribers can be larger, this channel type does not guarantee sending delivery receipts from all subscribers after receipt of a message. See [Message channels](message-channel) for implementation details.

    * **User channel**

      Use this channel type to implement a one-to-one topology. User channels enable you to send peer-to-peer messages to a specified \`userId\`. To send a message to a user channel, set the \`channelType\` parameter in the \`publish\` method to \`RtmChannelType.user\` and the \`channelName\` to the \`userId\` of the recipient. To receive messages sent to your \`userId\`, you don't need to subscribe; you implement the \`message\` event listener. User channels support delivery receipts. When a publisher sends a message, the API returns \`success\` if the receiver is online and receives the message successfully. If the receiver is not online or the reception fails, the method returns \`failure\` or \`timeout\`. Although you can use the return value to determine if the recipient is online, best practice is to use the \`Presence\` functionality for this purpose.

    * **Stream channel**

      This is a special type of channel based on the room concept that is similar to the observer pattern. In stream channels, users cannot send messages directly to a channel. You call the \`joinTopic\` method to register as a publisher of a topic before sending messages. To receive messages, users subscribe to the specified message publisher, identified by the \`userId\`, in the specified topic. In stream channels, client-side messages support delivery at higher QPS. This channel type is often recommended for use-cases such as Metaverse, parallel driving, and cloud gaming. See [Stream channels](stream-channel) for implementation details.

    The channel types are distinguished in the API by \`channelType\`. Apart from differences in the message sending and receiving mechanism, the features and use of message channels and stream channels for other features and events such as \`Presence\`, \`Storage\`, and \`Locks\`, is the same. User channels do not support these features as they are simple message pass-through channels.

    ## Create a channel [#create-a-channel-4]

    For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you.

    When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the \`createStreamChannel\` method to create an instance of a \`StreamChannel\` object before joining the channel.

    ## Channel usage restrictions [#channel-usage-restrictions-4]

    Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see [API usage restrictions](../../reference/limitations).

    ## Channel naming [#channel-naming-4]

    A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel.

    ### Legal characters [#legal-characters-4]

    The supported legal characters are:

    * 26 lowercase English letters a-z
    * 26 uppercase English letters A-Z
    * 10 numbers 0\\~9
    * Space
    * \`!\`, \`#\`, \`$\`, \`%\`, \`&\`, \`(\`, \`)\`, \`+\`, \`,\`, \`-\`, \`:\`, \`;\`, \`<\`, \`=\`, \`>\`, \`?\`, \`@\`, \`[\`, \`]\`, \`^\`, \`_\`, \`{\`, \`|\`, \`}\`, \`~\`, \`\` \` \`\`

    <CalloutContainer type="warning">
      <CalloutTitle>
        Important
      </CalloutTitle>

      <CalloutDescription>
        Channel names cannot begin with an underscore.
      </CalloutDescription>
    </CalloutContainer>

    ### Illegal characters [#illegal-characters-4]

    The use of \`.\`, \`*\`, \`/\`, \`\\\`, \`\\0\` and non-printable ASCII characters in channel names is not allowed.

    ### Naming convention [#naming-convention-4]

    Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see [Channel naming recommendations](../../reference/channel-naming).

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters.

    ## Channel types [#channel-types-5]

    Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:

    * **Message channel**

      A message channel uses a communication method similar to the MQTT protocol. It follows the pub/sub (publish-subscriber) model to deliver messages. In message channels, instead of creating a channel in advance, you simply publish messages to a specified channel or subscribe to receive messages from a channel. Due to the flexibility of the model, you can easily implement different topologies such as one-to-one channels, group channels, broadcast channels, and unicast channels. Since the number of subscribers can be larger, this channel type does not guarantee sending delivery receipts from all subscribers after receipt of a message. See [Message channels](message-channel) for implementation details.

    * **User channel**

      Use this channel type to implement a one-to-one topology. User channels enable you to send peer-to-peer messages to a specified \`userId\`. To send a message to a user channel, set the \`channelType\` parameter in the \`publish\` method to \`RTM_CHANNEL_TYPE_USER\` and the \`channelName\` to the \`userId\` of the recipient. To receive messages sent to your \`userId\`, you don't need to subscribe; you implement the \`onMessageEvent\` event listener. User channels support delivery receipts. When a publisher sends a message, the API returns \`success\` if the receiver is online and receives the message successfully. If the receiver is not online or the reception fails, the method returns \`failure\` or \`timeout\`. Although you can use the return value to determine if the recipient is online, best practice is to use the \`Presence\` functionality for this purpose.

    * **Stream channel**

      This is a special type of channel based on the room concept that is similar to the observer pattern. In stream channels, users cannot send messages directly to a channel. You call the \`joinTopic\` method to register as a publisher of a topic before sending messages. To receive messages, users subscribe to the specified message publisher, identified by the \`userId\`, in the specified topic. In stream channels, client-side messages support delivery at higher QPS. This channel type is often recommended for use-cases such as Metaverse, parallel driving, and cloud gaming. See [Stream channels](stream-channel) for implementation details.

    The channel types are distinguished in the API by \`channelType\`. Apart from differences in the message sending and receiving mechanism, the features and use of message channels and stream channels for other features and events such as \`Presence\`, \`Storage\`, and \`Locks\`, is the same. User channels do not support these features as they are simple message pass-through channels.

    ## Create a channel [#create-a-channel-5]

    For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you.

    When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the \`createStreamChannel\` method to create an instance of a \`IStreamChannel\` object before joining the channel.

    ## Channel usage restrictions [#channel-usage-restrictions-5]

    Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see [API usage restrictions](../../reference/limitations).

    ## Channel naming [#channel-naming-5]

    A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel.

    ### Legal characters [#legal-characters-5]

    The supported legal characters are:

    * 26 lowercase English letters a-z
    * 26 uppercase English letters A-Z
    * 10 numbers 0\\~9
    * Space
    * \`!\`, \`#\`, \`$\`, \`%\`, \`&\`, \`(\`, \`)\`, \`+\`, \`,\`, \`-\`, \`:\`, \`;\`, \`<\`, \`=\`, \`>\`, \`?\`, \`@\`, \`[\`, \`]\`, \`^\`, \`_\`, \`{\`, \`|\`, \`}\`, \`~\`, \`\` \` \`\`

    <CalloutContainer type="warning">
      <CalloutTitle>
        Important
      </CalloutTitle>

      <CalloutDescription>
        Channel names cannot begin with an underscore.
      </CalloutDescription>
    </CalloutContainer>

    ### Illegal characters [#illegal-characters-5]

    The use of \`.\`, \`*\`, \`/\`, \`\\\`, \`\\0\` and non-printable ASCII characters in channel names is not allowed.

    ### Naming convention [#naming-convention-5]

    Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see [Channel naming recommendations](../../reference/channel-naming).

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="linux-cpp">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="linux-cpp" />

    In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters.

    ## Channel types [#channel-types-6]

    Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:

    * **Message channel**

      A message channel uses a communication method similar to the MQTT protocol. It follows the pub/sub (publish-subscriber) model to deliver messages. In message channels, instead of creating a channel in advance, you simply publish messages to a specified channel or subscribe to receive messages from a channel. Due to the flexibility of the model, you can easily implement different topologies such as one-to-one channels, group channels, broadcast channels, and unicast channels. Since the number of subscribers can be larger, this channel type does not guarantee sending delivery receipts from all subscribers after receipt of a message. See [Message channels](message-channel) for implementation details.

    * **User channel**

      Use this channel type to implement a one-to-one topology. User channels enable you to send peer-to-peer messages to a specified \`userId\`. To send a message to a user channel, set the \`channelType\` parameter in the \`publish\` method to \`RTM_CHANNEL_TYPE_USER\` and the \`channelName\` to the \`userId\` of the recipient. To receive messages sent to your \`userId\`, you don't need to subscribe; you implement the \`onMessageEvent\` event listener. User channels support delivery receipts. When a publisher sends a message, the API returns \`success\` if the receiver is online and receives the message successfully. If the receiver is not online or the reception fails, the method returns \`failure\` or \`timeout\`. Although you can use the return value to determine if the recipient is online, best practice is to use the \`Presence\` functionality for this purpose.

    * **Stream channel**

      This is a special type of channel based on the room concept that is similar to the observer pattern. In stream channels, users cannot send messages directly to a channel. You call the \`joinTopic\` method to register as a publisher of a topic before sending messages. To receive messages, users subscribe to the specified message publisher, identified by the \`userId\`, in the specified topic. In stream channels, client-side messages support delivery at higher QPS. This channel type is often recommended for use-cases such as Metaverse, parallel driving, and cloud gaming. See [Stream channels](stream-channel) for implementation details.

    The channel types are distinguished in the API by \`channelType\`. Apart from differences in the message sending and receiving mechanism, the features and use of message channels and stream channels for other features and events such as \`Presence\`, \`Storage\`, and \`Locks\`, is the same. User channels do not support these features as they are simple message pass-through channels.

    ## Create a channel [#create-a-channel-6]

    For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you.

    When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the \`createStreamChannel\` method to create an instance of a \`IStreamChannel\` object before joining the channel.

    ## Channel usage restrictions [#channel-usage-restrictions-6]

    Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see [API usage restrictions](../../reference/limitations).

    ## Channel naming [#channel-naming-6]

    A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel.

    ### Legal characters [#legal-characters-6]

    The supported legal characters are:

    * 26 lowercase English letters a-z
    * 26 uppercase English letters A-Z
    * 10 numbers 0\\~9
    * Space
    * \`!\`, \`#\`, \`$\`, \`%\`, \`&\`, \`(\`, \`)\`, \`+\`, \`,\`, \`-\`, \`:\`, \`;\`, \`<\`, \`=\`, \`>\`, \`?\`, \`@\`, \`[\`, \`]\`, \`^\`, \`_\`, \`{\`, \`|\`, \`}\`, \`~\`, \`\` \` \`\`

    <CalloutContainer type="warning">
      <CalloutTitle>
        Important
      </CalloutTitle>

      <CalloutDescription>
        Channel names cannot begin with an underscore.
      </CalloutDescription>
    </CalloutContainer>

    ### Illegal characters [#illegal-characters-6]

    The use of \`.\`, \`*\`, \`/\`, \`\\\`, \`\\0\` and non-printable ASCII characters in channel names is not allowed.

    ### Naming convention [#naming-convention-6]

    Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see [Channel naming recommendations](../../reference/channel-naming).

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="linux-java">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="linux-java" />

    In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters.

    ## Channel types [#channel-types-7]

    Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:

    * **Message channel**

      A message channel uses a communication method similar to the MQTT protocol. It follows the pub/sub (publish-subscriber) model to deliver messages. In message channels, instead of creating a channel in advance, you simply publish messages to a specified channel or subscribe to receive messages from a channel. Due to the flexibility of the model, you can easily implement different topologies such as one-to-one channels, group channels, broadcast channels, and unicast channels. Since the number of subscribers can be larger, this channel type does not guarantee sending delivery receipts from all subscribers after receipt of a message. See [Message channels](message-channel) for implementation details.

    * **User channel**

      Use this channel type to implement a one-to-one topology. User channels enable you to send peer-to-peer messages to a specified \`userId\`. To send a message to a user channel, set the \`channelType\` parameter in the \`publish\` method to \`USER\` and the \`channelName\` to the \`userId\` of the recipient. To receive messages sent to your \`userId\`, you don't need to subscribe; you implement the \`onMessageEvent\` event listener. User channels support delivery receipts. When a publisher sends a message, the API returns \`success\` if the receiver is online and receives the message successfully. If the receiver is not online or the reception fails, the method returns \`failure\` or \`timeout\`. Although you can use the return value to determine if the recipient is online, best practice is to use the \`Presence\` functionality for this purpose.

    * **Stream channel**

      This is a special type of channel based on the room concept that is similar to the observer pattern. In stream channels, users cannot send messages directly to a channel. You call the \`joinTopic\` method to register as a publisher of a topic before sending messages. To receive messages, users subscribe to the specified message publisher, identified by the \`userId\`, in the specified topic. In stream channels, client-side messages support delivery at higher QPS. This channel type is often recommended for use-cases such as Metaverse, parallel driving, and cloud gaming. See [Stream channels](stream-channel) for implementation details.

    The channel types are distinguished in the API by \`channelType\`. Apart from differences in the message sending and receiving mechanism, the features and use of message channels and stream channels for other features and events such as \`Presence\`, \`Storage\`, and \`Locks\`, is the same. User channels do not support these features as they are simple message pass-through channels.

    ## Create a channel [#create-a-channel-7]

    For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you.

    When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the \`createStreamChannel\` method to create an instance of a \`StreamChannel\` object before joining the channel.

    ## Channel usage restrictions [#channel-usage-restrictions-7]

    Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see [API usage restrictions](../../reference/limitations).

    ## Channel naming [#channel-naming-7]

    A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel.

    ### Legal characters [#legal-characters-7]

    The supported legal characters are:

    * 26 lowercase English letters a-z
    * 26 uppercase English letters A-Z
    * 10 numbers 0\\~9
    * Space
    * \`!\`, \`#\`, \`$\`, \`%\`, \`&\`, \`(\`, \`)\`, \`+\`, \`,\`, \`-\`, \`:\`, \`;\`, \`<\`, \`=\`, \`>\`, \`?\`, \`@\`, \`[\`, \`]\`, \`^\`, \`_\`, \`{\`, \`|\`, \`}\`, \`~\`, \`\` \` \`\`

    <CalloutContainer type="warning">
      <CalloutTitle>
        Important
      </CalloutTitle>

      <CalloutDescription>
        Channel names cannot begin with an underscore.
      </CalloutDescription>
    </CalloutContainer>

    ### Illegal characters [#illegal-characters-7]

    The use of \`.\`, \`*\`, \`/\`, \`\\\`, \`\\0\` and non-printable ASCII characters in channel names is not allowed.

    ### Naming convention [#naming-convention-7]

    Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see [Channel naming recommendations](../../reference/channel-naming).

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters.

    ## Channel types [#channel-types-8]

    Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:

    * **Message channel**

      In a message channel, a publisher simply delivers a message to a specific channel, and any device or user subscribed to that channel receives that message or event notification. See [Message channels](message-channel) for implementation details.

    * **Stream channel**

      In a stream channel, users call the \`JoinTopicAsync\` method to register as a publisher of a topic before they can send messages. To receive messages from a publisher in a given topic, a user subscribes to a specific message publisher, identified by their user ID. See [Stream channels](stream-channel) for implementation details.

    The channel types are distinguished in the API by \`RTM_CHANNEL_TYPE\`. Apart from the message sending and receiving mechanism, the features and use of message channels and stream channels for notification of other events such as \`Presence\`, \`Storage\`, and \`Locks\`, is the same. The following table summarizes the main characteristics and applicable use-cases for the channel types:

    | Channel type | Main characteristics                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Applicable use-cases                                                                                                                                                                                                                             |
    | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | Message      | Message channels use the industry-standard pub/sub (publish/subscribe) model to deliver messages and events. These channels do not need to be created in advance and are available on demand. There is no limit on the number of publishers and subscribers in a channel, but there is a limit on the upstream queries per second (QPS) for a single channel.                                                                                                                          | Common applications include use-cases based on the pub/sub model and multi-device applications, such as multi-device management and command sending/receiving in location tracking, the IoT industry, smart devices, and large communities.      |
    | Stream       | Stream channels are based on the room concept, which is similar to the observer pattern in the industry. Users join a channel to send messages and receive event notifications. Messages are managed and delivered using topics within a channel. A single channel allows up to 1000 users to join at the same time. Message channels support co-channel and synchronous transmission of audio and video data. In addition, they support client-side message delivery with higher QPS. | High-frequency and high-concurrency data transmission use-cases, as well as use-cases where audio and video data are synchronously transmitted in the same channel. Examples include Metaverse applications, parallel driving, and cloud gaming. |

    ## Create a channel [#create-a-channel-8]

    For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you.

    When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the \`CreateStreamChannel\` method to create an instance of a \`IStreamChannel\` object before joining the channel.

    ## Channel usage restrictions [#channel-usage-restrictions-8]

    Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see [API usage restrictions](../../reference/limitations).

    ## Channel naming [#channel-naming-8]

    A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel.

    ### Legal characters [#legal-characters-8]

    The supported legal characters are:

    * 26 lowercase English letters a-z
    * 26 uppercase English letters A-Z
    * 10 numbers 0\\~9
    * Space
    * \`!\`, \`#\`, \`$\`, \`%\`, \`&\`, \`(\`, \`)\`, \`+\`, \`,\`, \`-\`, \`:\`, \`;\`, \`<\`, \`=\`, \`>\`, \`?\`, \`@\`, \`[\`, \`]\`, \`^\`, \`_\`, \`{\`, \`|\`, \`}\`, \`~\`, \`\` \` \`\`

    <CalloutContainer type="warning">
      <CalloutTitle>
        Important
      </CalloutTitle>

      <CalloutDescription>
        Channel names cannot begin with an underscore.
      </CalloutDescription>
    </CalloutContainer>

    ### Illegal characters [#illegal-characters-8]

    The use of \`.\`, \`*\`, \`/\`, \`\\\`, \`\\0\` and non-printable ASCII characters in channel names is not allowed.

    ### Naming convention [#naming-convention-8]

    Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see [Channel naming recommendations](../../reference/channel-naming).

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters."
  }, {
    heading: "channel-types",
    content: "Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:"
  }, {
    heading: "channel-types",
    content: "**Message channel**"
  }, {
    heading: "channel-types",
    content: "A message channel uses a communication method similar to the MQTT protocol. It follows the pub/sub (publish-subscriber) model to deliver messages. In message channels, instead of creating a channel in advance, you simply publish messages to a specified channel or subscribe to receive messages from a channel. Due to the flexibility of the model, you can easily implement different topologies such as one-to-one channels, group channels, broadcast channels, and unicast channels. Since the number of subscribers can be larger, this channel type does not guarantee sending delivery receipts from all subscribers after receipt of a message. See Message channels for implementation details."
  }, {
    heading: "channel-types",
    content: "**User channel**"
  }, {
    heading: "channel-types",
    content: "Use this channel type to implement a one-to-one topology. User channels enable you to send peer-to-peer messages to a specified `userId`. To send a message to a user channel, set the `channelType` parameter in the `publish` method to `USER` and the `channelName` to the `userId` of the recipient. To receive messages sent to your `userId`, you don't need to subscribe; you implement the `message` event listener. User channels support delivery receipts. When a publisher sends a message, the API returns `success` if the receiver is online and receives the message successfully. If the receiver is not online or the reception fails, the method returns `failure` or `timeout`. Although you can use the return value to determine if the recipient is online, best practice is to use the `Presence` functionality for this purpose."
  }, {
    heading: "channel-types",
    content: "**Stream channel**"
  }, {
    heading: "channel-types",
    content: "This is a special type of channel based on the room concept that is similar to the observer pattern. In stream channels, users cannot send messages directly to a channel. You call the `joinTopic` method to register as a publisher of a topic before sending messages. To receive messages, users subscribe to the specified message publisher, identified by the `userId`, in the specified topic. In stream channels, client-side messages support delivery at higher QPS. This channel type is often recommended for use-cases such as Metaverse, parallel driving, and cloud gaming. See Stream channels for implementation details."
  }, {
    heading: "channel-types",
    content: "The channel types are distinguished in the API by `channelType`. Apart from differences in the message sending and receiving mechanism, the features and use of message channels and stream channels for other features and events such as `Presence`, `Storage`, and `Locks`, is the same. User channels do not support these features as they are simple message pass-through channels."
  }, {
    heading: "create-a-channel",
    content: "For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you."
  }, {
    heading: "create-a-channel",
    content: "When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the `createStreamChannel` method to create an instance of a `RTMStreamChannel` object before joining the channel."
  }, {
    heading: "channel-usage-restrictions",
    content: "Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see API usage restrictions."
  }, {
    heading: "channel-naming",
    content: "A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel."
  }, {
    heading: "legal-characters",
    content: "The supported legal characters are:"
  }, {
    heading: "legal-characters",
    content: "26 lowercase English letters a-z"
  }, {
    heading: "legal-characters",
    content: "26 uppercase English letters A-Z"
  }, {
    heading: "legal-characters",
    content: "10 numbers 0\\~9"
  }, {
    heading: "legal-characters",
    content: "Space"
  }, {
    heading: "legal-characters",
    content: "`!`, `#`, `$`, `%`, `&`, `(`, `)`, `+`, `,`, `-`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `]`, `^`, `_`, `{`, `|`, `}`, `~`, `` ` ``"
  }, {
    heading: "legal-characters",
    content: "Channel names cannot begin with an underscore."
  }, {
    heading: "illegal-characters",
    content: "The use of `.`, `*`, `/`, `\\`, `\\0` and non-printable ASCII characters in channel names is not allowed."
  }, {
    heading: "naming-convention",
    content: "Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see Channel naming recommendations."
  }, {
    heading: "naming-convention",
    content: "In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters."
  }, {
    heading: "channel-types-1",
    content: "Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:"
  }, {
    heading: "channel-types-1",
    content: "**Message channel**"
  }, {
    heading: "channel-types-1",
    content: "A message channel uses a communication method similar to the MQTT protocol. It follows the pub/sub (publish-subscriber) model to deliver messages. In message channels, instead of creating a channel in advance, you simply publish messages to a specified channel or subscribe to receive messages from a channel. Due to the flexibility of the model, you can easily implement different topologies such as one-to-one channels, group channels, broadcast channels, and unicast channels. Since the number of subscribers can be larger, this channel type does not guarantee sending delivery receipts from all subscribers after receipt of a message. See Message channels for implementation details."
  }, {
    heading: "channel-types-1",
    content: "**User channel**"
  }, {
    heading: "channel-types-1",
    content: "Use this channel type to implement a one-to-one topology. User channels enable you to send peer-to-peer messages to a specified `userId`. To send a message to a user channel, set the `channelType` parameter in the `publish` method to `USER` and the `channelName` to the `userId` of the recipient. To receive messages sent to your `userId`, you don't need to subscribe; you implement the `onMessageEvent` event listener. User channels support delivery receipts. When a publisher sends a message, the API returns `success` if the receiver is online and receives the message successfully. If the receiver is not online or the reception fails, the method returns `failure` or `timeout`. Although you can use the return value to determine if the recipient is online, best practice is to use the `Presence` functionality for this purpose."
  }, {
    heading: "channel-types-1",
    content: "**Stream channel**"
  }, {
    heading: "channel-types-1",
    content: "This is a special type of channel based on the room concept that is similar to the observer pattern. In stream channels, users cannot send messages directly to a channel. You call the `joinTopic` method to register as a publisher of a topic before sending messages. To receive messages, users subscribe to the specified message publisher, identified by the `userId`, in the specified topic. In stream channels, client-side messages support delivery at higher QPS. This channel type is often recommended for use-cases such as Metaverse, parallel driving, and cloud gaming. See Stream channels for implementation details."
  }, {
    heading: "channel-types-1",
    content: "The channel types are distinguished in the API by `channelType`. Apart from differences in the message sending and receiving mechanism, the features and use of message channels and stream channels for other features and events such as `Presence`, `Storage`, and `Locks`, is the same. User channels do not support these features as they are simple message pass-through channels."
  }, {
    heading: "create-a-channel-1",
    content: "For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you."
  }, {
    heading: "create-a-channel-1",
    content: "When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the `createStreamChannel` method to create an instance of a `StreamChannel` object before joining the channel."
  }, {
    heading: "channel-usage-restrictions-1",
    content: "Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see API usage restrictions."
  }, {
    heading: "channel-naming-1",
    content: "A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel."
  }, {
    heading: "legal-characters-1",
    content: "The supported legal characters are:"
  }, {
    heading: "legal-characters-1",
    content: "26 lowercase English letters a-z"
  }, {
    heading: "legal-characters-1",
    content: "26 uppercase English letters A-Z"
  }, {
    heading: "legal-characters-1",
    content: "10 numbers 0\\~9"
  }, {
    heading: "legal-characters-1",
    content: "Space"
  }, {
    heading: "legal-characters-1",
    content: "`!`, `#`, `$`, `%`, `&`, `(`, `)`, `+`, `,`, `-`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `]`, `^`, `_`, `{`, `|`, `}`, `~`, `` ` ``"
  }, {
    heading: "legal-characters-1",
    content: "Channel names cannot begin with an underscore."
  }, {
    heading: "illegal-characters-1",
    content: "The use of `.`, `*`, `/`, `\\`, `\\0` and non-printable ASCII characters in channel names is not allowed."
  }, {
    heading: "naming-convention-1",
    content: "Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see Channel naming recommendations."
  }, {
    heading: "naming-convention-1",
    content: "In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters."
  }, {
    heading: "channel-types-2",
    content: "Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:"
  }, {
    heading: "channel-types-2",
    content: "**Message channel**"
  }, {
    heading: "channel-types-2",
    content: "A message channel uses a communication method similar to the MQTT protocol. It follows the pub/sub (publish-subscriber) model to deliver messages. In message channels, instead of creating a channel in advance, you simply publish messages to a specified channel or subscribe to receive messages from a channel. Due to the flexibility of the model, you can easily implement different topologies such as one-to-one channels, group channels, broadcast channels, and unicast channels. Since the number of subscribers can be larger, this channel type does not guarantee sending delivery receipts from all subscribers after receipt of a message. See Message channels for implementation details."
  }, {
    heading: "channel-types-2",
    content: "**User channel**"
  }, {
    heading: "channel-types-2",
    content: "Use this channel type to implement a one-to-one topology. User channels enable you to send peer-to-peer messages to a specified `userId`. To send a message to a user channel, set the `channelType` parameter in the `publish` method to `user` and the `channelName` to the `userId` of the recipient. To receive messages sent to your `userId`, you don't need to subscribe; you implement the `didReceiveMessageEvent` event listener. User channels support delivery receipts. When a publisher sends a message, the API returns `success` if the receiver is online and receives the message successfully. If the receiver is not online or the reception fails, the method returns `failure` or `timeout`. Although you can use the return value to determine if the recipient is online, best practice is to use the `Presence` functionality for this purpose."
  }, {
    heading: "channel-types-2",
    content: "**Stream channel**"
  }, {
    heading: "channel-types-2",
    content: "This is a special type of channel based on the room concept that is similar to the observer pattern. In stream channels, users cannot send messages directly to a channel. You call the `joinTopic` method to register as a publisher of a topic before sending messages. To receive messages, users subscribe to the specified message publisher, identified by the `userId`, in the specified topic. In stream channels, client-side messages support delivery at higher QPS. This channel type is often recommended for use-cases such as Metaverse, parallel driving, and cloud gaming. See Stream channels for implementation details."
  }, {
    heading: "channel-types-2",
    content: "The channel types are distinguished in the API by `channelType`. Apart from differences in the message sending and receiving mechanism, the features and use of message channels and stream channels for other features and events such as `Presence`, `Storage`, and `Locks`, is the same. User channels do not support these features as they are simple message pass-through channels."
  }, {
    heading: "create-a-channel-2",
    content: "For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you."
  }, {
    heading: "create-a-channel-2",
    content: "When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the `createStreamChannel` method to create an instance of a `AgoraRtmStreamChannel` object before joining the channel."
  }, {
    heading: "channel-usage-restrictions-2",
    content: "Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see API usage restrictions."
  }, {
    heading: "channel-naming-2",
    content: "A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel."
  }, {
    heading: "legal-characters-2",
    content: "The supported legal characters are:"
  }, {
    heading: "legal-characters-2",
    content: "26 lowercase English letters a-z"
  }, {
    heading: "legal-characters-2",
    content: "26 uppercase English letters A-Z"
  }, {
    heading: "legal-characters-2",
    content: "10 numbers 0\\~9"
  }, {
    heading: "legal-characters-2",
    content: "Space"
  }, {
    heading: "legal-characters-2",
    content: "`!`, `#`, `$`, `%`, `&`, `(`, `)`, `+`, `,`, `-`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `]`, `^`, `_`, `{`, `|`, `}`, `~`, `` ` ``"
  }, {
    heading: "legal-characters-2",
    content: "Channel names cannot begin with an underscore."
  }, {
    heading: "illegal-characters-2",
    content: "The use of `.`, `*`, `/`, `\\`, `\\0` and non-printable ASCII characters in channel names is not allowed."
  }, {
    heading: "naming-convention-2",
    content: "Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see Channel naming recommendations."
  }, {
    heading: "naming-convention-2",
    content: "In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters."
  }, {
    heading: "channel-types-3",
    content: "Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:"
  }, {
    heading: "channel-types-3",
    content: "**Message channel**"
  }, {
    heading: "channel-types-3",
    content: "A message channel uses a communication method similar to the MQTT protocol. It follows the pub/sub (publish-subscriber) model to deliver messages. In message channels, instead of creating a channel in advance, you simply publish messages to a specified channel or subscribe to receive messages from a channel. Due to the flexibility of the model, you can easily implement different topologies such as one-to-one channels, group channels, broadcast channels, and unicast channels. Since the number of subscribers can be larger, this channel type does not guarantee sending delivery receipts from all subscribers after receipt of a message. See Message channels for implementation details."
  }, {
    heading: "channel-types-3",
    content: "**User channel**"
  }, {
    heading: "channel-types-3",
    content: "Use this channel type to implement a one-to-one topology. User channels enable you to send peer-to-peer messages to a specified `userId`. To send a message to a user channel, set the `channelType` parameter in the `publish` method to `user` and the `channelName` to the `userId` of the recipient. To receive messages sent to your `userId`, you don't need to subscribe; you implement the `didReceiveMessageEvent` event listener. User channels support delivery receipts. When a publisher sends a message, the API returns `success` if the receiver is online and receives the message successfully. If the receiver is not online or the reception fails, the method returns `failure` or `timeout`. Although you can use the return value to determine if the recipient is online, best practice is to use the `Presence` functionality for this purpose."
  }, {
    heading: "channel-types-3",
    content: "**Stream channel**"
  }, {
    heading: "channel-types-3",
    content: "This is a special type of channel based on the room concept that is similar to the observer pattern. In stream channels, users cannot send messages directly to a channel. You call the `joinTopic` method to register as a publisher of a topic before sending messages. To receive messages, users subscribe to the specified message publisher, identified by the `userId`, in the specified topic. In stream channels, client-side messages support delivery at higher QPS. This channel type is often recommended for use-cases such as Metaverse, parallel driving, and cloud gaming. See Stream channels for implementation details."
  }, {
    heading: "channel-types-3",
    content: "The channel types are distinguished in the API by `channelType`. Apart from differences in the message sending and receiving mechanism, the features and use of message channels and stream channels for other features and events such as `Presence`, `Storage`, and `Locks`, is the same. User channels do not support these features as they are simple message pass-through channels."
  }, {
    heading: "create-a-channel-3",
    content: "For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you."
  }, {
    heading: "create-a-channel-3",
    content: "When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the `createStreamChannel` method to create an instance of a `AgoraRtmStreamChannel` object before joining the channel."
  }, {
    heading: "channel-usage-restrictions-3",
    content: "Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see API usage restrictions."
  }, {
    heading: "channel-naming-3",
    content: "A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel."
  }, {
    heading: "legal-characters-3",
    content: "The supported legal characters are:"
  }, {
    heading: "legal-characters-3",
    content: "26 lowercase English letters a-z"
  }, {
    heading: "legal-characters-3",
    content: "26 uppercase English letters A-Z"
  }, {
    heading: "legal-characters-3",
    content: "10 numbers 0\\~9"
  }, {
    heading: "legal-characters-3",
    content: "Space"
  }, {
    heading: "legal-characters-3",
    content: "`!`, `#`, `$`, `%`, `&`, `(`, `)`, `+`, `,`, `-`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `]`, `^`, `_`, `{`, `|`, `}`, `~`, `` ` ``"
  }, {
    heading: "legal-characters-3",
    content: "Channel names cannot begin with an underscore."
  }, {
    heading: "illegal-characters-3",
    content: "The use of `.`, `*`, `/`, `\\`, `\\0` and non-printable ASCII characters in channel names is not allowed."
  }, {
    heading: "naming-convention-3",
    content: "Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see Channel naming recommendations."
  }, {
    heading: "naming-convention-3",
    content: "In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters."
  }, {
    heading: "channel-types-4",
    content: "Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:"
  }, {
    heading: "channel-types-4",
    content: "**Message channel**"
  }, {
    heading: "channel-types-4",
    content: "A message channel uses a communication method similar to the MQTT protocol. It follows the pub/sub (publish-subscriber) model to deliver messages. In message channels, instead of creating a channel in advance, you simply publish messages to a specified channel or subscribe to receive messages from a channel. Due to the flexibility of the model, you can easily implement different topologies such as one-to-one channels, group channels, broadcast channels, and unicast channels. Since the number of subscribers can be larger, this channel type does not guarantee sending delivery receipts from all subscribers after receipt of a message. See Message channels for implementation details."
  }, {
    heading: "channel-types-4",
    content: "**User channel**"
  }, {
    heading: "channel-types-4",
    content: "Use this channel type to implement a one-to-one topology. User channels enable you to send peer-to-peer messages to a specified `userId`. To send a message to a user channel, set the `channelType` parameter in the `publish` method to `RtmChannelType.user` and the `channelName` to the `userId` of the recipient. To receive messages sent to your `userId`, you don't need to subscribe; you implement the `message` event listener. User channels support delivery receipts. When a publisher sends a message, the API returns `success` if the receiver is online and receives the message successfully. If the receiver is not online or the reception fails, the method returns `failure` or `timeout`. Although you can use the return value to determine if the recipient is online, best practice is to use the `Presence` functionality for this purpose."
  }, {
    heading: "channel-types-4",
    content: "**Stream channel**"
  }, {
    heading: "channel-types-4",
    content: "This is a special type of channel based on the room concept that is similar to the observer pattern. In stream channels, users cannot send messages directly to a channel. You call the `joinTopic` method to register as a publisher of a topic before sending messages. To receive messages, users subscribe to the specified message publisher, identified by the `userId`, in the specified topic. In stream channels, client-side messages support delivery at higher QPS. This channel type is often recommended for use-cases such as Metaverse, parallel driving, and cloud gaming. See Stream channels for implementation details."
  }, {
    heading: "channel-types-4",
    content: "The channel types are distinguished in the API by `channelType`. Apart from differences in the message sending and receiving mechanism, the features and use of message channels and stream channels for other features and events such as `Presence`, `Storage`, and `Locks`, is the same. User channels do not support these features as they are simple message pass-through channels."
  }, {
    heading: "create-a-channel-4",
    content: "For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you."
  }, {
    heading: "create-a-channel-4",
    content: "When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the `createStreamChannel` method to create an instance of a `StreamChannel` object before joining the channel."
  }, {
    heading: "channel-usage-restrictions-4",
    content: "Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see API usage restrictions."
  }, {
    heading: "channel-naming-4",
    content: "A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel."
  }, {
    heading: "legal-characters-4",
    content: "The supported legal characters are:"
  }, {
    heading: "legal-characters-4",
    content: "26 lowercase English letters a-z"
  }, {
    heading: "legal-characters-4",
    content: "26 uppercase English letters A-Z"
  }, {
    heading: "legal-characters-4",
    content: "10 numbers 0\\~9"
  }, {
    heading: "legal-characters-4",
    content: "Space"
  }, {
    heading: "legal-characters-4",
    content: "`!`, `#`, `$`, `%`, `&`, `(`, `)`, `+`, `,`, `-`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `]`, `^`, `_`, `{`, `|`, `}`, `~`, `` ` ``"
  }, {
    heading: "legal-characters-4",
    content: "Channel names cannot begin with an underscore."
  }, {
    heading: "illegal-characters-4",
    content: "The use of `.`, `*`, `/`, `\\`, `\\0` and non-printable ASCII characters in channel names is not allowed."
  }, {
    heading: "naming-convention-4",
    content: "Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see Channel naming recommendations."
  }, {
    heading: "naming-convention-4",
    content: "In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters."
  }, {
    heading: "channel-types-5",
    content: "Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:"
  }, {
    heading: "channel-types-5",
    content: "**Message channel**"
  }, {
    heading: "channel-types-5",
    content: "A message channel uses a communication method similar to the MQTT protocol. It follows the pub/sub (publish-subscriber) model to deliver messages. In message channels, instead of creating a channel in advance, you simply publish messages to a specified channel or subscribe to receive messages from a channel. Due to the flexibility of the model, you can easily implement different topologies such as one-to-one channels, group channels, broadcast channels, and unicast channels. Since the number of subscribers can be larger, this channel type does not guarantee sending delivery receipts from all subscribers after receipt of a message. See Message channels for implementation details."
  }, {
    heading: "channel-types-5",
    content: "**User channel**"
  }, {
    heading: "channel-types-5",
    content: "Use this channel type to implement a one-to-one topology. User channels enable you to send peer-to-peer messages to a specified `userId`. To send a message to a user channel, set the `channelType` parameter in the `publish` method to `RTM_CHANNEL_TYPE_USER` and the `channelName` to the `userId` of the recipient. To receive messages sent to your `userId`, you don't need to subscribe; you implement the `onMessageEvent` event listener. User channels support delivery receipts. When a publisher sends a message, the API returns `success` if the receiver is online and receives the message successfully. If the receiver is not online or the reception fails, the method returns `failure` or `timeout`. Although you can use the return value to determine if the recipient is online, best practice is to use the `Presence` functionality for this purpose."
  }, {
    heading: "channel-types-5",
    content: "**Stream channel**"
  }, {
    heading: "channel-types-5",
    content: "This is a special type of channel based on the room concept that is similar to the observer pattern. In stream channels, users cannot send messages directly to a channel. You call the `joinTopic` method to register as a publisher of a topic before sending messages. To receive messages, users subscribe to the specified message publisher, identified by the `userId`, in the specified topic. In stream channels, client-side messages support delivery at higher QPS. This channel type is often recommended for use-cases such as Metaverse, parallel driving, and cloud gaming. See Stream channels for implementation details."
  }, {
    heading: "channel-types-5",
    content: "The channel types are distinguished in the API by `channelType`. Apart from differences in the message sending and receiving mechanism, the features and use of message channels and stream channels for other features and events such as `Presence`, `Storage`, and `Locks`, is the same. User channels do not support these features as they are simple message pass-through channels."
  }, {
    heading: "create-a-channel-5",
    content: "For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you."
  }, {
    heading: "create-a-channel-5",
    content: "When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the `createStreamChannel` method to create an instance of a `IStreamChannel` object before joining the channel."
  }, {
    heading: "channel-usage-restrictions-5",
    content: "Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see API usage restrictions."
  }, {
    heading: "channel-naming-5",
    content: "A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel."
  }, {
    heading: "legal-characters-5",
    content: "The supported legal characters are:"
  }, {
    heading: "legal-characters-5",
    content: "26 lowercase English letters a-z"
  }, {
    heading: "legal-characters-5",
    content: "26 uppercase English letters A-Z"
  }, {
    heading: "legal-characters-5",
    content: "10 numbers 0\\~9"
  }, {
    heading: "legal-characters-5",
    content: "Space"
  }, {
    heading: "legal-characters-5",
    content: "`!`, `#`, `$`, `%`, `&`, `(`, `)`, `+`, `,`, `-`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `]`, `^`, `_`, `{`, `|`, `}`, `~`, `` ` ``"
  }, {
    heading: "legal-characters-5",
    content: "Channel names cannot begin with an underscore."
  }, {
    heading: "illegal-characters-5",
    content: "The use of `.`, `*`, `/`, `\\`, `\\0` and non-printable ASCII characters in channel names is not allowed."
  }, {
    heading: "naming-convention-5",
    content: "Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see Channel naming recommendations."
  }, {
    heading: "naming-convention-5",
    content: "In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters."
  }, {
    heading: "channel-types-6",
    content: "Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:"
  }, {
    heading: "channel-types-6",
    content: "**Message channel**"
  }, {
    heading: "channel-types-6",
    content: "A message channel uses a communication method similar to the MQTT protocol. It follows the pub/sub (publish-subscriber) model to deliver messages. In message channels, instead of creating a channel in advance, you simply publish messages to a specified channel or subscribe to receive messages from a channel. Due to the flexibility of the model, you can easily implement different topologies such as one-to-one channels, group channels, broadcast channels, and unicast channels. Since the number of subscribers can be larger, this channel type does not guarantee sending delivery receipts from all subscribers after receipt of a message. See Message channels for implementation details."
  }, {
    heading: "channel-types-6",
    content: "**User channel**"
  }, {
    heading: "channel-types-6",
    content: "Use this channel type to implement a one-to-one topology. User channels enable you to send peer-to-peer messages to a specified `userId`. To send a message to a user channel, set the `channelType` parameter in the `publish` method to `RTM_CHANNEL_TYPE_USER` and the `channelName` to the `userId` of the recipient. To receive messages sent to your `userId`, you don't need to subscribe; you implement the `onMessageEvent` event listener. User channels support delivery receipts. When a publisher sends a message, the API returns `success` if the receiver is online and receives the message successfully. If the receiver is not online or the reception fails, the method returns `failure` or `timeout`. Although you can use the return value to determine if the recipient is online, best practice is to use the `Presence` functionality for this purpose."
  }, {
    heading: "channel-types-6",
    content: "**Stream channel**"
  }, {
    heading: "channel-types-6",
    content: "This is a special type of channel based on the room concept that is similar to the observer pattern. In stream channels, users cannot send messages directly to a channel. You call the `joinTopic` method to register as a publisher of a topic before sending messages. To receive messages, users subscribe to the specified message publisher, identified by the `userId`, in the specified topic. In stream channels, client-side messages support delivery at higher QPS. This channel type is often recommended for use-cases such as Metaverse, parallel driving, and cloud gaming. See Stream channels for implementation details."
  }, {
    heading: "channel-types-6",
    content: "The channel types are distinguished in the API by `channelType`. Apart from differences in the message sending and receiving mechanism, the features and use of message channels and stream channels for other features and events such as `Presence`, `Storage`, and `Locks`, is the same. User channels do not support these features as they are simple message pass-through channels."
  }, {
    heading: "create-a-channel-6",
    content: "For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you."
  }, {
    heading: "create-a-channel-6",
    content: "When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the `createStreamChannel` method to create an instance of a `IStreamChannel` object before joining the channel."
  }, {
    heading: "channel-usage-restrictions-6",
    content: "Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see API usage restrictions."
  }, {
    heading: "channel-naming-6",
    content: "A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel."
  }, {
    heading: "legal-characters-6",
    content: "The supported legal characters are:"
  }, {
    heading: "legal-characters-6",
    content: "26 lowercase English letters a-z"
  }, {
    heading: "legal-characters-6",
    content: "26 uppercase English letters A-Z"
  }, {
    heading: "legal-characters-6",
    content: "10 numbers 0\\~9"
  }, {
    heading: "legal-characters-6",
    content: "Space"
  }, {
    heading: "legal-characters-6",
    content: "`!`, `#`, `$`, `%`, `&`, `(`, `)`, `+`, `,`, `-`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `]`, `^`, `_`, `{`, `|`, `}`, `~`, `` ` ``"
  }, {
    heading: "legal-characters-6",
    content: "Channel names cannot begin with an underscore."
  }, {
    heading: "illegal-characters-6",
    content: "The use of `.`, `*`, `/`, `\\`, `\\0` and non-printable ASCII characters in channel names is not allowed."
  }, {
    heading: "naming-convention-6",
    content: "Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see Channel naming recommendations."
  }, {
    heading: "naming-convention-6",
    content: "In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters."
  }, {
    heading: "channel-types-7",
    content: "Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:"
  }, {
    heading: "channel-types-7",
    content: "**Message channel**"
  }, {
    heading: "channel-types-7",
    content: "A message channel uses a communication method similar to the MQTT protocol. It follows the pub/sub (publish-subscriber) model to deliver messages. In message channels, instead of creating a channel in advance, you simply publish messages to a specified channel or subscribe to receive messages from a channel. Due to the flexibility of the model, you can easily implement different topologies such as one-to-one channels, group channels, broadcast channels, and unicast channels. Since the number of subscribers can be larger, this channel type does not guarantee sending delivery receipts from all subscribers after receipt of a message. See Message channels for implementation details."
  }, {
    heading: "channel-types-7",
    content: "**User channel**"
  }, {
    heading: "channel-types-7",
    content: "Use this channel type to implement a one-to-one topology. User channels enable you to send peer-to-peer messages to a specified `userId`. To send a message to a user channel, set the `channelType` parameter in the `publish` method to `USER` and the `channelName` to the `userId` of the recipient. To receive messages sent to your `userId`, you don't need to subscribe; you implement the `onMessageEvent` event listener. User channels support delivery receipts. When a publisher sends a message, the API returns `success` if the receiver is online and receives the message successfully. If the receiver is not online or the reception fails, the method returns `failure` or `timeout`. Although you can use the return value to determine if the recipient is online, best practice is to use the `Presence` functionality for this purpose."
  }, {
    heading: "channel-types-7",
    content: "**Stream channel**"
  }, {
    heading: "channel-types-7",
    content: "This is a special type of channel based on the room concept that is similar to the observer pattern. In stream channels, users cannot send messages directly to a channel. You call the `joinTopic` method to register as a publisher of a topic before sending messages. To receive messages, users subscribe to the specified message publisher, identified by the `userId`, in the specified topic. In stream channels, client-side messages support delivery at higher QPS. This channel type is often recommended for use-cases such as Metaverse, parallel driving, and cloud gaming. See Stream channels for implementation details."
  }, {
    heading: "channel-types-7",
    content: "The channel types are distinguished in the API by `channelType`. Apart from differences in the message sending and receiving mechanism, the features and use of message channels and stream channels for other features and events such as `Presence`, `Storage`, and `Locks`, is the same. User channels do not support these features as they are simple message pass-through channels."
  }, {
    heading: "create-a-channel-7",
    content: "For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you."
  }, {
    heading: "create-a-channel-7",
    content: "When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the `createStreamChannel` method to create an instance of a `StreamChannel` object before joining the channel."
  }, {
    heading: "channel-usage-restrictions-7",
    content: "Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see API usage restrictions."
  }, {
    heading: "channel-naming-7",
    content: "A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel."
  }, {
    heading: "legal-characters-7",
    content: "The supported legal characters are:"
  }, {
    heading: "legal-characters-7",
    content: "26 lowercase English letters a-z"
  }, {
    heading: "legal-characters-7",
    content: "26 uppercase English letters A-Z"
  }, {
    heading: "legal-characters-7",
    content: "10 numbers 0\\~9"
  }, {
    heading: "legal-characters-7",
    content: "Space"
  }, {
    heading: "legal-characters-7",
    content: "`!`, `#`, `$`, `%`, `&`, `(`, `)`, `+`, `,`, `-`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `]`, `^`, `_`, `{`, `|`, `}`, `~`, `` ` ``"
  }, {
    heading: "legal-characters-7",
    content: "Channel names cannot begin with an underscore."
  }, {
    heading: "illegal-characters-7",
    content: "The use of `.`, `*`, `/`, `\\`, `\\0` and non-printable ASCII characters in channel names is not allowed."
  }, {
    heading: "naming-convention-7",
    content: "Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see Channel naming recommendations."
  }, {
    heading: "naming-convention-7",
    content: "In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters."
  }, {
    heading: "channel-types-8",
    content: "Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:"
  }, {
    heading: "channel-types-8",
    content: "**Message channel**"
  }, {
    heading: "channel-types-8",
    content: "In a message channel, a publisher simply delivers a message to a specific channel, and any device or user subscribed to that channel receives that message or event notification. See Message channels for implementation details."
  }, {
    heading: "channel-types-8",
    content: "**Stream channel**"
  }, {
    heading: "channel-types-8",
    content: "In a stream channel, users call the `JoinTopicAsync` method to register as a publisher of a topic before they can send messages. To receive messages from a publisher in a given topic, a user subscribes to a specific message publisher, identified by their user ID. See Stream channels for implementation details."
  }, {
    heading: "channel-types-8",
    content: "The channel types are distinguished in the API by `RTM_CHANNEL_TYPE`. Apart from the message sending and receiving mechanism, the features and use of message channels and stream channels for notification of other events such as `Presence`, `Storage`, and `Locks`, is the same. The following table summarizes the main characteristics and applicable use-cases for the channel types:"
  }, {
    heading: "channel-types-8",
    content: "Channel type"
  }, {
    heading: "channel-types-8",
    content: "Main characteristics"
  }, {
    heading: "channel-types-8",
    content: "Applicable use-cases"
  }, {
    heading: "channel-types-8",
    content: "Message"
  }, {
    heading: "channel-types-8",
    content: "Message channels use the industry-standard pub/sub (publish/subscribe) model to deliver messages and events. These channels do not need to be created in advance and are available on demand. There is no limit on the number of publishers and subscribers in a channel, but there is a limit on the upstream queries per second (QPS) for a single channel."
  }, {
    heading: "channel-types-8",
    content: "Common applications include use-cases based on the pub/sub model and multi-device applications, such as multi-device management and command sending/receiving in location tracking, the IoT industry, smart devices, and large communities."
  }, {
    heading: "channel-types-8",
    content: "Stream"
  }, {
    heading: "channel-types-8",
    content: "Stream channels are based on the room concept, which is similar to the observer pattern in the industry. Users join a channel to send messages and receive event notifications. Messages are managed and delivered using topics within a channel. A single channel allows up to 1000 users to join at the same time. Message channels support co-channel and synchronous transmission of audio and video data. In addition, they support client-side message delivery with higher QPS."
  }, {
    heading: "channel-types-8",
    content: "High-frequency and high-concurrency data transmission use-cases, as well as use-cases where audio and video data are synchronously transmitted in the same channel. Examples include Metaverse applications, parallel driving, and cloud gaming."
  }, {
    heading: "create-a-channel-8",
    content: "For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you."
  }, {
    heading: "create-a-channel-8",
    content: "When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the `CreateStreamChannel` method to create an instance of a `IStreamChannel` object before joining the channel."
  }, {
    heading: "channel-usage-restrictions-8",
    content: "Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see API usage restrictions."
  }, {
    heading: "channel-naming-8",
    content: "A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel."
  }, {
    heading: "legal-characters-8",
    content: "The supported legal characters are:"
  }, {
    heading: "legal-characters-8",
    content: "26 lowercase English letters a-z"
  }, {
    heading: "legal-characters-8",
    content: "26 uppercase English letters A-Z"
  }, {
    heading: "legal-characters-8",
    content: "10 numbers 0\\~9"
  }, {
    heading: "legal-characters-8",
    content: "Space"
  }, {
    heading: "legal-characters-8",
    content: "`!`, `#`, `$`, `%`, `&`, `(`, `)`, `+`, `,`, `-`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `]`, `^`, `_`, `{`, `|`, `}`, `~`, `` ` ``"
  }, {
    heading: "legal-characters-8",
    content: "Channel names cannot begin with an underscore."
  }, {
    heading: "illegal-characters-8",
    content: "The use of `.`, `*`, `/`, `\\`, `\\0` and non-printable ASCII characters in channel names is not allowed."
  }, {
    heading: "naming-convention-8",
    content: "Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see Channel naming recommendations."
  }],
  headings: [{
    id: "channel-types",
    content: "Channel types"
  }, {
    id: "create-a-channel",
    content: "Create a channel"
  }, {
    id: "channel-usage-restrictions",
    content: "Channel usage restrictions"
  }, {
    id: "channel-naming",
    content: "Channel naming"
  }, {
    id: "legal-characters",
    content: "Legal characters"
  }, {
    id: "illegal-characters",
    content: "Illegal characters"
  }, {
    id: "naming-convention",
    content: "Naming convention"
  }, {
    id: "channel-types-1",
    content: "Channel types"
  }, {
    id: "create-a-channel-1",
    content: "Create a channel"
  }, {
    id: "channel-usage-restrictions-1",
    content: "Channel usage restrictions"
  }, {
    id: "channel-naming-1",
    content: "Channel naming"
  }, {
    id: "legal-characters-1",
    content: "Legal characters"
  }, {
    id: "illegal-characters-1",
    content: "Illegal characters"
  }, {
    id: "naming-convention-1",
    content: "Naming convention"
  }, {
    id: "channel-types-2",
    content: "Channel types"
  }, {
    id: "create-a-channel-2",
    content: "Create a channel"
  }, {
    id: "channel-usage-restrictions-2",
    content: "Channel usage restrictions"
  }, {
    id: "channel-naming-2",
    content: "Channel naming"
  }, {
    id: "legal-characters-2",
    content: "Legal characters"
  }, {
    id: "illegal-characters-2",
    content: "Illegal characters"
  }, {
    id: "naming-convention-2",
    content: "Naming convention"
  }, {
    id: "channel-types-3",
    content: "Channel types"
  }, {
    id: "create-a-channel-3",
    content: "Create a channel"
  }, {
    id: "channel-usage-restrictions-3",
    content: "Channel usage restrictions"
  }, {
    id: "channel-naming-3",
    content: "Channel naming"
  }, {
    id: "legal-characters-3",
    content: "Legal characters"
  }, {
    id: "illegal-characters-3",
    content: "Illegal characters"
  }, {
    id: "naming-convention-3",
    content: "Naming convention"
  }, {
    id: "channel-types-4",
    content: "Channel types"
  }, {
    id: "create-a-channel-4",
    content: "Create a channel"
  }, {
    id: "channel-usage-restrictions-4",
    content: "Channel usage restrictions"
  }, {
    id: "channel-naming-4",
    content: "Channel naming"
  }, {
    id: "legal-characters-4",
    content: "Legal characters"
  }, {
    id: "illegal-characters-4",
    content: "Illegal characters"
  }, {
    id: "naming-convention-4",
    content: "Naming convention"
  }, {
    id: "channel-types-5",
    content: "Channel types"
  }, {
    id: "create-a-channel-5",
    content: "Create a channel"
  }, {
    id: "channel-usage-restrictions-5",
    content: "Channel usage restrictions"
  }, {
    id: "channel-naming-5",
    content: "Channel naming"
  }, {
    id: "legal-characters-5",
    content: "Legal characters"
  }, {
    id: "illegal-characters-5",
    content: "Illegal characters"
  }, {
    id: "naming-convention-5",
    content: "Naming convention"
  }, {
    id: "channel-types-6",
    content: "Channel types"
  }, {
    id: "create-a-channel-6",
    content: "Create a channel"
  }, {
    id: "channel-usage-restrictions-6",
    content: "Channel usage restrictions"
  }, {
    id: "channel-naming-6",
    content: "Channel naming"
  }, {
    id: "legal-characters-6",
    content: "Legal characters"
  }, {
    id: "illegal-characters-6",
    content: "Illegal characters"
  }, {
    id: "naming-convention-6",
    content: "Naming convention"
  }, {
    id: "channel-types-7",
    content: "Channel types"
  }, {
    id: "create-a-channel-7",
    content: "Create a channel"
  }, {
    id: "channel-usage-restrictions-7",
    content: "Channel usage restrictions"
  }, {
    id: "channel-naming-7",
    content: "Channel naming"
  }, {
    id: "legal-characters-7",
    content: "Legal characters"
  }, {
    id: "illegal-characters-7",
    content: "Illegal characters"
  }, {
    id: "naming-convention-7",
    content: "Naming convention"
  }, {
    id: "channel-types-8",
    content: "Channel types"
  }, {
    id: "create-a-channel-8",
    content: "Create a channel"
  }, {
    id: "channel-usage-restrictions-8",
    content: "Channel usage restrictions"
  }, {
    id: "channel-naming-8",
    content: "Channel naming"
  }, {
    id: "legal-characters-8",
    content: "Legal characters"
  }, {
    id: "illegal-characters-8",
    content: "Illegal characters"
  }, {
    id: "naming-convention-8",
    content: "Naming convention"
  }]
};
export let toc = [{
  depth: 2,
  url: "#channel-types",
  title: _jsx(_Fragment, {
    children: "Channel types"
  })
}, {
  depth: 2,
  url: "#create-a-channel",
  title: _jsx(_Fragment, {
    children: "Create a channel"
  })
}, {
  depth: 2,
  url: "#channel-usage-restrictions",
  title: _jsx(_Fragment, {
    children: "Channel usage restrictions"
  })
}, {
  depth: 2,
  url: "#channel-naming",
  title: _jsx(_Fragment, {
    children: "Channel naming"
  })
}, {
  depth: 3,
  url: "#legal-characters",
  title: _jsx(_Fragment, {
    children: "Legal characters"
  })
}, {
  depth: 3,
  url: "#illegal-characters",
  title: _jsx(_Fragment, {
    children: "Illegal characters"
  })
}, {
  depth: 3,
  url: "#naming-convention",
  title: _jsx(_Fragment, {
    children: "Naming convention"
  })
}, {
  depth: 2,
  url: "#channel-types-1",
  title: _jsx(_Fragment, {
    children: "Channel types"
  })
}, {
  depth: 2,
  url: "#create-a-channel-1",
  title: _jsx(_Fragment, {
    children: "Create a channel"
  })
}, {
  depth: 2,
  url: "#channel-usage-restrictions-1",
  title: _jsx(_Fragment, {
    children: "Channel usage restrictions"
  })
}, {
  depth: 2,
  url: "#channel-naming-1",
  title: _jsx(_Fragment, {
    children: "Channel naming"
  })
}, {
  depth: 3,
  url: "#legal-characters-1",
  title: _jsx(_Fragment, {
    children: "Legal characters"
  })
}, {
  depth: 3,
  url: "#illegal-characters-1",
  title: _jsx(_Fragment, {
    children: "Illegal characters"
  })
}, {
  depth: 3,
  url: "#naming-convention-1",
  title: _jsx(_Fragment, {
    children: "Naming convention"
  })
}, {
  depth: 2,
  url: "#channel-types-2",
  title: _jsx(_Fragment, {
    children: "Channel types"
  })
}, {
  depth: 2,
  url: "#create-a-channel-2",
  title: _jsx(_Fragment, {
    children: "Create a channel"
  })
}, {
  depth: 2,
  url: "#channel-usage-restrictions-2",
  title: _jsx(_Fragment, {
    children: "Channel usage restrictions"
  })
}, {
  depth: 2,
  url: "#channel-naming-2",
  title: _jsx(_Fragment, {
    children: "Channel naming"
  })
}, {
  depth: 3,
  url: "#legal-characters-2",
  title: _jsx(_Fragment, {
    children: "Legal characters"
  })
}, {
  depth: 3,
  url: "#illegal-characters-2",
  title: _jsx(_Fragment, {
    children: "Illegal characters"
  })
}, {
  depth: 3,
  url: "#naming-convention-2",
  title: _jsx(_Fragment, {
    children: "Naming convention"
  })
}, {
  depth: 2,
  url: "#channel-types-3",
  title: _jsx(_Fragment, {
    children: "Channel types"
  })
}, {
  depth: 2,
  url: "#create-a-channel-3",
  title: _jsx(_Fragment, {
    children: "Create a channel"
  })
}, {
  depth: 2,
  url: "#channel-usage-restrictions-3",
  title: _jsx(_Fragment, {
    children: "Channel usage restrictions"
  })
}, {
  depth: 2,
  url: "#channel-naming-3",
  title: _jsx(_Fragment, {
    children: "Channel naming"
  })
}, {
  depth: 3,
  url: "#legal-characters-3",
  title: _jsx(_Fragment, {
    children: "Legal characters"
  })
}, {
  depth: 3,
  url: "#illegal-characters-3",
  title: _jsx(_Fragment, {
    children: "Illegal characters"
  })
}, {
  depth: 3,
  url: "#naming-convention-3",
  title: _jsx(_Fragment, {
    children: "Naming convention"
  })
}, {
  depth: 2,
  url: "#channel-types-4",
  title: _jsx(_Fragment, {
    children: "Channel types"
  })
}, {
  depth: 2,
  url: "#create-a-channel-4",
  title: _jsx(_Fragment, {
    children: "Create a channel"
  })
}, {
  depth: 2,
  url: "#channel-usage-restrictions-4",
  title: _jsx(_Fragment, {
    children: "Channel usage restrictions"
  })
}, {
  depth: 2,
  url: "#channel-naming-4",
  title: _jsx(_Fragment, {
    children: "Channel naming"
  })
}, {
  depth: 3,
  url: "#legal-characters-4",
  title: _jsx(_Fragment, {
    children: "Legal characters"
  })
}, {
  depth: 3,
  url: "#illegal-characters-4",
  title: _jsx(_Fragment, {
    children: "Illegal characters"
  })
}, {
  depth: 3,
  url: "#naming-convention-4",
  title: _jsx(_Fragment, {
    children: "Naming convention"
  })
}, {
  depth: 2,
  url: "#channel-types-5",
  title: _jsx(_Fragment, {
    children: "Channel types"
  })
}, {
  depth: 2,
  url: "#create-a-channel-5",
  title: _jsx(_Fragment, {
    children: "Create a channel"
  })
}, {
  depth: 2,
  url: "#channel-usage-restrictions-5",
  title: _jsx(_Fragment, {
    children: "Channel usage restrictions"
  })
}, {
  depth: 2,
  url: "#channel-naming-5",
  title: _jsx(_Fragment, {
    children: "Channel naming"
  })
}, {
  depth: 3,
  url: "#legal-characters-5",
  title: _jsx(_Fragment, {
    children: "Legal characters"
  })
}, {
  depth: 3,
  url: "#illegal-characters-5",
  title: _jsx(_Fragment, {
    children: "Illegal characters"
  })
}, {
  depth: 3,
  url: "#naming-convention-5",
  title: _jsx(_Fragment, {
    children: "Naming convention"
  })
}, {
  depth: 2,
  url: "#channel-types-6",
  title: _jsx(_Fragment, {
    children: "Channel types"
  })
}, {
  depth: 2,
  url: "#create-a-channel-6",
  title: _jsx(_Fragment, {
    children: "Create a channel"
  })
}, {
  depth: 2,
  url: "#channel-usage-restrictions-6",
  title: _jsx(_Fragment, {
    children: "Channel usage restrictions"
  })
}, {
  depth: 2,
  url: "#channel-naming-6",
  title: _jsx(_Fragment, {
    children: "Channel naming"
  })
}, {
  depth: 3,
  url: "#legal-characters-6",
  title: _jsx(_Fragment, {
    children: "Legal characters"
  })
}, {
  depth: 3,
  url: "#illegal-characters-6",
  title: _jsx(_Fragment, {
    children: "Illegal characters"
  })
}, {
  depth: 3,
  url: "#naming-convention-6",
  title: _jsx(_Fragment, {
    children: "Naming convention"
  })
}, {
  depth: 2,
  url: "#channel-types-7",
  title: _jsx(_Fragment, {
    children: "Channel types"
  })
}, {
  depth: 2,
  url: "#create-a-channel-7",
  title: _jsx(_Fragment, {
    children: "Create a channel"
  })
}, {
  depth: 2,
  url: "#channel-usage-restrictions-7",
  title: _jsx(_Fragment, {
    children: "Channel usage restrictions"
  })
}, {
  depth: 2,
  url: "#channel-naming-7",
  title: _jsx(_Fragment, {
    children: "Channel naming"
  })
}, {
  depth: 3,
  url: "#legal-characters-7",
  title: _jsx(_Fragment, {
    children: "Legal characters"
  })
}, {
  depth: 3,
  url: "#illegal-characters-7",
  title: _jsx(_Fragment, {
    children: "Illegal characters"
  })
}, {
  depth: 3,
  url: "#naming-convention-7",
  title: _jsx(_Fragment, {
    children: "Naming convention"
  })
}, {
  depth: 2,
  url: "#channel-types-8",
  title: _jsx(_Fragment, {
    children: "Channel types"
  })
}, {
  depth: 2,
  url: "#create-a-channel-8",
  title: _jsx(_Fragment, {
    children: "Create a channel"
  })
}, {
  depth: 2,
  url: "#channel-usage-restrictions-8",
  title: _jsx(_Fragment, {
    children: "Channel usage restrictions"
  })
}, {
  depth: 2,
  url: "#channel-naming-8",
  title: _jsx(_Fragment, {
    children: "Channel naming"
  })
}, {
  depth: 3,
  url: "#legal-characters-8",
  title: _jsx(_Fragment, {
    children: "Legal characters"
  })
}, {
  depth: 3,
  url: "#illegal-characters-8",
  title: _jsx(_Fragment, {
    children: "Illegal characters"
  })
}, {
  depth: 3,
  url: "#naming-convention-8",
  title: _jsx(_Fragment, {
    children: "Naming convention"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
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
  }, { CalloutContainer, CalloutDescription, CalloutTitle, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_PlatformTabsGroup, {
    groupMode: "structured",
    canonicalPlatform: "web",
    platforms: '["web","android","ios","macos","flutter","windows","linux-cpp","linux-java","unity"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "web",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "web"
      }), _jsx(_components.p, {
        children: "In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters."
      }), _jsx(_components.h2, {
        id: "channel-types",
        children: "Channel types"
      }), _jsx(_components.p, {
        children: "Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Message channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["A message channel uses a communication method similar to the MQTT protocol. It follows the pub/sub (publish-subscriber) model to deliver messages. In message channels, instead of creating a channel in advance, you simply publish messages to a specified channel or subscribe to receive messages from a channel. Due to the flexibility of the model, you can easily implement different topologies such as one-to-one channels, group channels, broadcast channels, and unicast channels. Since the number of subscribers can be larger, this channel type does not guarantee sending delivery receipts from all subscribers after receipt of a message. See ", _jsx(_components.a, {
              href: "message-channel",
              children: "Message channels"
            }), " for implementation details."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "User channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["Use this channel type to implement a one-to-one topology. User channels enable you to send peer-to-peer messages to a specified ", _jsx(_components.code, {
              children: "userId"
            }), ". To send a message to a user channel, set the ", _jsx(_components.code, {
              children: "channelType"
            }), " parameter in the ", _jsx(_components.code, {
              children: "publish"
            }), " method to ", _jsx(_components.code, {
              children: "USER"
            }), " and the ", _jsx(_components.code, {
              children: "channelName"
            }), " to the ", _jsx(_components.code, {
              children: "userId"
            }), " of the recipient. To receive messages sent to your ", _jsx(_components.code, {
              children: "userId"
            }), ", you don't need to subscribe; you implement the ", _jsx(_components.code, {
              children: "message"
            }), " event listener. User channels support delivery receipts. When a publisher sends a message, the API returns ", _jsx(_components.code, {
              children: "success"
            }), " if the receiver is online and receives the message successfully. If the receiver is not online or the reception fails, the method returns ", _jsx(_components.code, {
              children: "failure"
            }), " or ", _jsx(_components.code, {
              children: "timeout"
            }), ". Although you can use the return value to determine if the recipient is online, best practice is to use the ", _jsx(_components.code, {
              children: "Presence"
            }), " functionality for this purpose."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Stream channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["This is a special type of channel based on the room concept that is similar to the observer pattern. In stream channels, users cannot send messages directly to a channel. You call the ", _jsx(_components.code, {
              children: "joinTopic"
            }), " method to register as a publisher of a topic before sending messages. To receive messages, users subscribe to the specified message publisher, identified by the ", _jsx(_components.code, {
              children: "userId"
            }), ", in the specified topic. In stream channels, client-side messages support delivery at higher QPS. This channel type is often recommended for use-cases such as Metaverse, parallel driving, and cloud gaming. See ", _jsx(_components.a, {
              href: "stream-channel",
              children: "Stream channels"
            }), " for implementation details."]
          }), `
`]
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["The channel types are distinguished in the API by ", _jsx(_components.code, {
          children: "channelType"
        }), ". Apart from differences in the message sending and receiving mechanism, the features and use of message channels and stream channels for other features and events such as ", _jsx(_components.code, {
          children: "Presence"
        }), ", ", _jsx(_components.code, {
          children: "Storage"
        }), ", and ", _jsx(_components.code, {
          children: "Locks"
        }), ", is the same. User channels do not support these features as they are simple message pass-through channels."]
      }), _jsx(_components.h2, {
        id: "create-a-channel",
        children: "Create a channel"
      }), _jsx(_components.p, {
        children: "For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you."
      }), _jsxs(_components.p, {
        children: ["When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the ", _jsx(_components.code, {
          children: "createStreamChannel"
        }), " method to create an instance of a ", _jsx(_components.code, {
          children: "RTMStreamChannel"
        }), " object before joining the channel."]
      }), _jsx(_components.h2, {
        id: "channel-usage-restrictions",
        children: "Channel usage restrictions"
      }), _jsxs(_components.p, {
        children: ["Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see ", _jsx(_components.a, {
          href: "../../reference/limitations",
          children: "API usage restrictions"
        }), "."]
      }), _jsx(_components.h2, {
        id: "channel-naming",
        children: "Channel naming"
      }), _jsx(_components.p, {
        children: "A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel."
      }), _jsx(_components.h3, {
        id: "legal-characters",
        children: "Legal characters"
      }), _jsx(_components.p, {
        children: "The supported legal characters are:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "26 lowercase English letters a-z"
        }), `
`, _jsx(_components.li, {
          children: "26 uppercase English letters A-Z"
        }), `
`, _jsx(_components.li, {
          children: "10 numbers 0~9"
        }), `
`, _jsx(_components.li, {
          children: "Space"
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "!"
          }), ", ", _jsx(_components.code, {
            children: "#"
          }), ", ", _jsx(_components.code, {
            children: "$"
          }), ", ", _jsx(_components.code, {
            children: "%"
          }), ", ", _jsx(_components.code, {
            children: "&"
          }), ", ", _jsx(_components.code, {
            children: "("
          }), ", ", _jsx(_components.code, {
            children: ")"
          }), ", ", _jsx(_components.code, {
            children: "+"
          }), ", ", _jsx(_components.code, {
            children: ","
          }), ", ", _jsx(_components.code, {
            children: "-"
          }), ", ", _jsx(_components.code, {
            children: ":"
          }), ", ", _jsx(_components.code, {
            children: ";"
          }), ", ", _jsx(_components.code, {
            children: "<"
          }), ", ", _jsx(_components.code, {
            children: "="
          }), ", ", _jsx(_components.code, {
            children: ">"
          }), ", ", _jsx(_components.code, {
            children: "?"
          }), ", ", _jsx(_components.code, {
            children: "@"
          }), ", ", _jsx(_components.code, {
            children: "["
          }), ", ", _jsx(_components.code, {
            children: "]"
          }), ", ", _jsx(_components.code, {
            children: "^"
          }), ", ", _jsx(_components.code, {
            children: "_"
          }), ", ", _jsx(_components.code, {
            children: "{"
          }), ", ", _jsx(_components.code, {
            children: "|"
          }), ", ", _jsx(_components.code, {
            children: "}"
          }), ", ", _jsx(_components.code, {
            children: "~"
          }), ", ", _jsx(_components.code, {
            children: "`"
          })]
        }), `
`]
      }), _jsxs(CalloutContainer, {
        type: "warning",
        children: [_jsx(CalloutTitle, {
          children: "Important"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Channel names cannot begin with an underscore."
          })
        })]
      }), _jsx(_components.h3, {
        id: "illegal-characters",
        children: "Illegal characters"
      }), _jsxs(_components.p, {
        children: ["The use of ", _jsx(_components.code, {
          children: "."
        }), ", ", _jsx(_components.code, {
          children: "*"
        }), ", ", _jsx(_components.code, {
          children: "/"
        }), ", ", _jsx(_components.code, {
          children: "\\"
        }), ", ", _jsx(_components.code, {
          children: "\\0"
        }), " and non-printable ASCII characters in channel names is not allowed."]
      }), _jsx(_components.h3, {
        id: "naming-convention",
        children: "Naming convention"
      }), _jsxs(_components.p, {
        children: ["Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see ", _jsx(_components.a, {
          href: "../../reference/channel-naming",
          children: "Channel naming recommendations"
        }), "."]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "android",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "android"
      }), _jsx(_components.p, {
        children: "In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters."
      }), _jsx(_components.h2, {
        id: "channel-types-1",
        children: "Channel types"
      }), _jsx(_components.p, {
        children: "Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Message channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["A message channel uses a communication method similar to the MQTT protocol. It follows the pub/sub (publish-subscriber) model to deliver messages. In message channels, instead of creating a channel in advance, you simply publish messages to a specified channel or subscribe to receive messages from a channel. Due to the flexibility of the model, you can easily implement different topologies such as one-to-one channels, group channels, broadcast channels, and unicast channels. Since the number of subscribers can be larger, this channel type does not guarantee sending delivery receipts from all subscribers after receipt of a message. See ", _jsx(_components.a, {
              href: "message-channel",
              children: "Message channels"
            }), " for implementation details."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "User channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["Use this channel type to implement a one-to-one topology. User channels enable you to send peer-to-peer messages to a specified ", _jsx(_components.code, {
              children: "userId"
            }), ". To send a message to a user channel, set the ", _jsx(_components.code, {
              children: "channelType"
            }), " parameter in the ", _jsx(_components.code, {
              children: "publish"
            }), " method to ", _jsx(_components.code, {
              children: "USER"
            }), " and the ", _jsx(_components.code, {
              children: "channelName"
            }), " to the ", _jsx(_components.code, {
              children: "userId"
            }), " of the recipient. To receive messages sent to your ", _jsx(_components.code, {
              children: "userId"
            }), ", you don't need to subscribe; you implement the ", _jsx(_components.code, {
              children: "onMessageEvent"
            }), " event listener. User channels support delivery receipts. When a publisher sends a message, the API returns ", _jsx(_components.code, {
              children: "success"
            }), " if the receiver is online and receives the message successfully. If the receiver is not online or the reception fails, the method returns ", _jsx(_components.code, {
              children: "failure"
            }), " or ", _jsx(_components.code, {
              children: "timeout"
            }), ". Although you can use the return value to determine if the recipient is online, best practice is to use the ", _jsx(_components.code, {
              children: "Presence"
            }), " functionality for this purpose."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Stream channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["This is a special type of channel based on the room concept that is similar to the observer pattern. In stream channels, users cannot send messages directly to a channel. You call the ", _jsx(_components.code, {
              children: "joinTopic"
            }), " method to register as a publisher of a topic before sending messages. To receive messages, users subscribe to the specified message publisher, identified by the ", _jsx(_components.code, {
              children: "userId"
            }), ", in the specified topic. In stream channels, client-side messages support delivery at higher QPS. This channel type is often recommended for use-cases such as Metaverse, parallel driving, and cloud gaming. See ", _jsx(_components.a, {
              href: "stream-channel",
              children: "Stream channels"
            }), " for implementation details."]
          }), `
`]
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["The channel types are distinguished in the API by ", _jsx(_components.code, {
          children: "channelType"
        }), ". Apart from differences in the message sending and receiving mechanism, the features and use of message channels and stream channels for other features and events such as ", _jsx(_components.code, {
          children: "Presence"
        }), ", ", _jsx(_components.code, {
          children: "Storage"
        }), ", and ", _jsx(_components.code, {
          children: "Locks"
        }), ", is the same. User channels do not support these features as they are simple message pass-through channels."]
      }), _jsx(_components.h2, {
        id: "create-a-channel-1",
        children: "Create a channel"
      }), _jsx(_components.p, {
        children: "For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you."
      }), _jsxs(_components.p, {
        children: ["When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the ", _jsx(_components.code, {
          children: "createStreamChannel"
        }), " method to create an instance of a ", _jsx(_components.code, {
          children: "StreamChannel"
        }), " object before joining the channel."]
      }), _jsx(_components.h2, {
        id: "channel-usage-restrictions-1",
        children: "Channel usage restrictions"
      }), _jsxs(_components.p, {
        children: ["Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see ", _jsx(_components.a, {
          href: "../../reference/limitations",
          children: "API usage restrictions"
        }), "."]
      }), _jsx(_components.h2, {
        id: "channel-naming-1",
        children: "Channel naming"
      }), _jsx(_components.p, {
        children: "A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel."
      }), _jsx(_components.h3, {
        id: "legal-characters-1",
        children: "Legal characters"
      }), _jsx(_components.p, {
        children: "The supported legal characters are:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "26 lowercase English letters a-z"
        }), `
`, _jsx(_components.li, {
          children: "26 uppercase English letters A-Z"
        }), `
`, _jsx(_components.li, {
          children: "10 numbers 0~9"
        }), `
`, _jsx(_components.li, {
          children: "Space"
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "!"
          }), ", ", _jsx(_components.code, {
            children: "#"
          }), ", ", _jsx(_components.code, {
            children: "$"
          }), ", ", _jsx(_components.code, {
            children: "%"
          }), ", ", _jsx(_components.code, {
            children: "&"
          }), ", ", _jsx(_components.code, {
            children: "("
          }), ", ", _jsx(_components.code, {
            children: ")"
          }), ", ", _jsx(_components.code, {
            children: "+"
          }), ", ", _jsx(_components.code, {
            children: ","
          }), ", ", _jsx(_components.code, {
            children: "-"
          }), ", ", _jsx(_components.code, {
            children: ":"
          }), ", ", _jsx(_components.code, {
            children: ";"
          }), ", ", _jsx(_components.code, {
            children: "<"
          }), ", ", _jsx(_components.code, {
            children: "="
          }), ", ", _jsx(_components.code, {
            children: ">"
          }), ", ", _jsx(_components.code, {
            children: "?"
          }), ", ", _jsx(_components.code, {
            children: "@"
          }), ", ", _jsx(_components.code, {
            children: "["
          }), ", ", _jsx(_components.code, {
            children: "]"
          }), ", ", _jsx(_components.code, {
            children: "^"
          }), ", ", _jsx(_components.code, {
            children: "_"
          }), ", ", _jsx(_components.code, {
            children: "{"
          }), ", ", _jsx(_components.code, {
            children: "|"
          }), ", ", _jsx(_components.code, {
            children: "}"
          }), ", ", _jsx(_components.code, {
            children: "~"
          }), ", ", _jsx(_components.code, {
            children: "`"
          })]
        }), `
`]
      }), _jsxs(CalloutContainer, {
        type: "warning",
        children: [_jsx(CalloutTitle, {
          children: "Important"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Channel names cannot begin with an underscore."
          })
        })]
      }), _jsx(_components.h3, {
        id: "illegal-characters-1",
        children: "Illegal characters"
      }), _jsxs(_components.p, {
        children: ["The use of ", _jsx(_components.code, {
          children: "."
        }), ", ", _jsx(_components.code, {
          children: "*"
        }), ", ", _jsx(_components.code, {
          children: "/"
        }), ", ", _jsx(_components.code, {
          children: "\\"
        }), ", ", _jsx(_components.code, {
          children: "\\0"
        }), " and non-printable ASCII characters in channel names is not allowed."]
      }), _jsx(_components.h3, {
        id: "naming-convention-1",
        children: "Naming convention"
      }), _jsxs(_components.p, {
        children: ["Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see ", _jsx(_components.a, {
          href: "../../reference/channel-naming",
          children: "Channel naming recommendations"
        }), "."]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "ios",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "ios"
      }), _jsx(_components.p, {
        children: "In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters."
      }), _jsx(_components.h2, {
        id: "channel-types-2",
        children: "Channel types"
      }), _jsx(_components.p, {
        children: "Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Message channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["A message channel uses a communication method similar to the MQTT protocol. It follows the pub/sub (publish-subscriber) model to deliver messages. In message channels, instead of creating a channel in advance, you simply publish messages to a specified channel or subscribe to receive messages from a channel. Due to the flexibility of the model, you can easily implement different topologies such as one-to-one channels, group channels, broadcast channels, and unicast channels. Since the number of subscribers can be larger, this channel type does not guarantee sending delivery receipts from all subscribers after receipt of a message. See ", _jsx(_components.a, {
              href: "message-channel",
              children: "Message channels"
            }), " for implementation details."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "User channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["Use this channel type to implement a one-to-one topology. User channels enable you to send peer-to-peer messages to a specified ", _jsx(_components.code, {
              children: "userId"
            }), ". To send a message to a user channel, set the ", _jsx(_components.code, {
              children: "channelType"
            }), " parameter in the ", _jsx(_components.code, {
              children: "publish"
            }), " method to ", _jsx(_components.code, {
              children: "user"
            }), " and the ", _jsx(_components.code, {
              children: "channelName"
            }), " to the ", _jsx(_components.code, {
              children: "userId"
            }), " of the recipient. To receive messages sent to your ", _jsx(_components.code, {
              children: "userId"
            }), ", you don't need to subscribe; you implement the ", _jsx(_components.code, {
              children: "didReceiveMessageEvent"
            }), " event listener. User channels support delivery receipts. When a publisher sends a message, the API returns ", _jsx(_components.code, {
              children: "success"
            }), " if the receiver is online and receives the message successfully. If the receiver is not online or the reception fails, the method returns ", _jsx(_components.code, {
              children: "failure"
            }), " or ", _jsx(_components.code, {
              children: "timeout"
            }), ". Although you can use the return value to determine if the recipient is online, best practice is to use the ", _jsx(_components.code, {
              children: "Presence"
            }), " functionality for this purpose."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Stream channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["This is a special type of channel based on the room concept that is similar to the observer pattern. In stream channels, users cannot send messages directly to a channel. You call the ", _jsx(_components.code, {
              children: "joinTopic"
            }), " method to register as a publisher of a topic before sending messages. To receive messages, users subscribe to the specified message publisher, identified by the ", _jsx(_components.code, {
              children: "userId"
            }), ", in the specified topic. In stream channels, client-side messages support delivery at higher QPS. This channel type is often recommended for use-cases such as Metaverse, parallel driving, and cloud gaming. See ", _jsx(_components.a, {
              href: "stream-channel",
              children: "Stream channels"
            }), " for implementation details."]
          }), `
`]
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["The channel types are distinguished in the API by ", _jsx(_components.code, {
          children: "channelType"
        }), ". Apart from differences in the message sending and receiving mechanism, the features and use of message channels and stream channels for other features and events such as ", _jsx(_components.code, {
          children: "Presence"
        }), ", ", _jsx(_components.code, {
          children: "Storage"
        }), ", and ", _jsx(_components.code, {
          children: "Locks"
        }), ", is the same. User channels do not support these features as they are simple message pass-through channels."]
      }), _jsx(_components.h2, {
        id: "create-a-channel-2",
        children: "Create a channel"
      }), _jsx(_components.p, {
        children: "For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you."
      }), _jsxs(_components.p, {
        children: ["When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the ", _jsx(_components.code, {
          children: "createStreamChannel"
        }), " method to create an instance of a ", _jsx(_components.code, {
          children: "AgoraRtmStreamChannel"
        }), " object before joining the channel."]
      }), _jsx(_components.h2, {
        id: "channel-usage-restrictions-2",
        children: "Channel usage restrictions"
      }), _jsxs(_components.p, {
        children: ["Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see ", _jsx(_components.a, {
          href: "../../reference/limitations",
          children: "API usage restrictions"
        }), "."]
      }), _jsx(_components.h2, {
        id: "channel-naming-2",
        children: "Channel naming"
      }), _jsx(_components.p, {
        children: "A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel."
      }), _jsx(_components.h3, {
        id: "legal-characters-2",
        children: "Legal characters"
      }), _jsx(_components.p, {
        children: "The supported legal characters are:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "26 lowercase English letters a-z"
        }), `
`, _jsx(_components.li, {
          children: "26 uppercase English letters A-Z"
        }), `
`, _jsx(_components.li, {
          children: "10 numbers 0~9"
        }), `
`, _jsx(_components.li, {
          children: "Space"
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "!"
          }), ", ", _jsx(_components.code, {
            children: "#"
          }), ", ", _jsx(_components.code, {
            children: "$"
          }), ", ", _jsx(_components.code, {
            children: "%"
          }), ", ", _jsx(_components.code, {
            children: "&"
          }), ", ", _jsx(_components.code, {
            children: "("
          }), ", ", _jsx(_components.code, {
            children: ")"
          }), ", ", _jsx(_components.code, {
            children: "+"
          }), ", ", _jsx(_components.code, {
            children: ","
          }), ", ", _jsx(_components.code, {
            children: "-"
          }), ", ", _jsx(_components.code, {
            children: ":"
          }), ", ", _jsx(_components.code, {
            children: ";"
          }), ", ", _jsx(_components.code, {
            children: "<"
          }), ", ", _jsx(_components.code, {
            children: "="
          }), ", ", _jsx(_components.code, {
            children: ">"
          }), ", ", _jsx(_components.code, {
            children: "?"
          }), ", ", _jsx(_components.code, {
            children: "@"
          }), ", ", _jsx(_components.code, {
            children: "["
          }), ", ", _jsx(_components.code, {
            children: "]"
          }), ", ", _jsx(_components.code, {
            children: "^"
          }), ", ", _jsx(_components.code, {
            children: "_"
          }), ", ", _jsx(_components.code, {
            children: "{"
          }), ", ", _jsx(_components.code, {
            children: "|"
          }), ", ", _jsx(_components.code, {
            children: "}"
          }), ", ", _jsx(_components.code, {
            children: "~"
          }), ", ", _jsx(_components.code, {
            children: "`"
          })]
        }), `
`]
      }), _jsxs(CalloutContainer, {
        type: "warning",
        children: [_jsx(CalloutTitle, {
          children: "Important"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Channel names cannot begin with an underscore."
          })
        })]
      }), _jsx(_components.h3, {
        id: "illegal-characters-2",
        children: "Illegal characters"
      }), _jsxs(_components.p, {
        children: ["The use of ", _jsx(_components.code, {
          children: "."
        }), ", ", _jsx(_components.code, {
          children: "*"
        }), ", ", _jsx(_components.code, {
          children: "/"
        }), ", ", _jsx(_components.code, {
          children: "\\"
        }), ", ", _jsx(_components.code, {
          children: "\\0"
        }), " and non-printable ASCII characters in channel names is not allowed."]
      }), _jsx(_components.h3, {
        id: "naming-convention-2",
        children: "Naming convention"
      }), _jsxs(_components.p, {
        children: ["Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see ", _jsx(_components.a, {
          href: "../../reference/channel-naming",
          children: "Channel naming recommendations"
        }), "."]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "macos",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "macos"
      }), _jsx(_components.p, {
        children: "In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters."
      }), _jsx(_components.h2, {
        id: "channel-types-3",
        children: "Channel types"
      }), _jsx(_components.p, {
        children: "Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Message channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["A message channel uses a communication method similar to the MQTT protocol. It follows the pub/sub (publish-subscriber) model to deliver messages. In message channels, instead of creating a channel in advance, you simply publish messages to a specified channel or subscribe to receive messages from a channel. Due to the flexibility of the model, you can easily implement different topologies such as one-to-one channels, group channels, broadcast channels, and unicast channels. Since the number of subscribers can be larger, this channel type does not guarantee sending delivery receipts from all subscribers after receipt of a message. See ", _jsx(_components.a, {
              href: "message-channel",
              children: "Message channels"
            }), " for implementation details."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "User channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["Use this channel type to implement a one-to-one topology. User channels enable you to send peer-to-peer messages to a specified ", _jsx(_components.code, {
              children: "userId"
            }), ". To send a message to a user channel, set the ", _jsx(_components.code, {
              children: "channelType"
            }), " parameter in the ", _jsx(_components.code, {
              children: "publish"
            }), " method to ", _jsx(_components.code, {
              children: "user"
            }), " and the ", _jsx(_components.code, {
              children: "channelName"
            }), " to the ", _jsx(_components.code, {
              children: "userId"
            }), " of the recipient. To receive messages sent to your ", _jsx(_components.code, {
              children: "userId"
            }), ", you don't need to subscribe; you implement the ", _jsx(_components.code, {
              children: "didReceiveMessageEvent"
            }), " event listener. User channels support delivery receipts. When a publisher sends a message, the API returns ", _jsx(_components.code, {
              children: "success"
            }), " if the receiver is online and receives the message successfully. If the receiver is not online or the reception fails, the method returns ", _jsx(_components.code, {
              children: "failure"
            }), " or ", _jsx(_components.code, {
              children: "timeout"
            }), ". Although you can use the return value to determine if the recipient is online, best practice is to use the ", _jsx(_components.code, {
              children: "Presence"
            }), " functionality for this purpose."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Stream channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["This is a special type of channel based on the room concept that is similar to the observer pattern. In stream channels, users cannot send messages directly to a channel. You call the ", _jsx(_components.code, {
              children: "joinTopic"
            }), " method to register as a publisher of a topic before sending messages. To receive messages, users subscribe to the specified message publisher, identified by the ", _jsx(_components.code, {
              children: "userId"
            }), ", in the specified topic. In stream channels, client-side messages support delivery at higher QPS. This channel type is often recommended for use-cases such as Metaverse, parallel driving, and cloud gaming. See ", _jsx(_components.a, {
              href: "stream-channel",
              children: "Stream channels"
            }), " for implementation details."]
          }), `
`]
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["The channel types are distinguished in the API by ", _jsx(_components.code, {
          children: "channelType"
        }), ". Apart from differences in the message sending and receiving mechanism, the features and use of message channels and stream channels for other features and events such as ", _jsx(_components.code, {
          children: "Presence"
        }), ", ", _jsx(_components.code, {
          children: "Storage"
        }), ", and ", _jsx(_components.code, {
          children: "Locks"
        }), ", is the same. User channels do not support these features as they are simple message pass-through channels."]
      }), _jsx(_components.h2, {
        id: "create-a-channel-3",
        children: "Create a channel"
      }), _jsx(_components.p, {
        children: "For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you."
      }), _jsxs(_components.p, {
        children: ["When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the ", _jsx(_components.code, {
          children: "createStreamChannel"
        }), " method to create an instance of a ", _jsx(_components.code, {
          children: "AgoraRtmStreamChannel"
        }), " object before joining the channel."]
      }), _jsx(_components.h2, {
        id: "channel-usage-restrictions-3",
        children: "Channel usage restrictions"
      }), _jsxs(_components.p, {
        children: ["Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see ", _jsx(_components.a, {
          href: "../../reference/limitations",
          children: "API usage restrictions"
        }), "."]
      }), _jsx(_components.h2, {
        id: "channel-naming-3",
        children: "Channel naming"
      }), _jsx(_components.p, {
        children: "A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel."
      }), _jsx(_components.h3, {
        id: "legal-characters-3",
        children: "Legal characters"
      }), _jsx(_components.p, {
        children: "The supported legal characters are:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "26 lowercase English letters a-z"
        }), `
`, _jsx(_components.li, {
          children: "26 uppercase English letters A-Z"
        }), `
`, _jsx(_components.li, {
          children: "10 numbers 0~9"
        }), `
`, _jsx(_components.li, {
          children: "Space"
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "!"
          }), ", ", _jsx(_components.code, {
            children: "#"
          }), ", ", _jsx(_components.code, {
            children: "$"
          }), ", ", _jsx(_components.code, {
            children: "%"
          }), ", ", _jsx(_components.code, {
            children: "&"
          }), ", ", _jsx(_components.code, {
            children: "("
          }), ", ", _jsx(_components.code, {
            children: ")"
          }), ", ", _jsx(_components.code, {
            children: "+"
          }), ", ", _jsx(_components.code, {
            children: ","
          }), ", ", _jsx(_components.code, {
            children: "-"
          }), ", ", _jsx(_components.code, {
            children: ":"
          }), ", ", _jsx(_components.code, {
            children: ";"
          }), ", ", _jsx(_components.code, {
            children: "<"
          }), ", ", _jsx(_components.code, {
            children: "="
          }), ", ", _jsx(_components.code, {
            children: ">"
          }), ", ", _jsx(_components.code, {
            children: "?"
          }), ", ", _jsx(_components.code, {
            children: "@"
          }), ", ", _jsx(_components.code, {
            children: "["
          }), ", ", _jsx(_components.code, {
            children: "]"
          }), ", ", _jsx(_components.code, {
            children: "^"
          }), ", ", _jsx(_components.code, {
            children: "_"
          }), ", ", _jsx(_components.code, {
            children: "{"
          }), ", ", _jsx(_components.code, {
            children: "|"
          }), ", ", _jsx(_components.code, {
            children: "}"
          }), ", ", _jsx(_components.code, {
            children: "~"
          }), ", ", _jsx(_components.code, {
            children: "`"
          })]
        }), `
`]
      }), _jsxs(CalloutContainer, {
        type: "warning",
        children: [_jsx(CalloutTitle, {
          children: "Important"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Channel names cannot begin with an underscore."
          })
        })]
      }), _jsx(_components.h3, {
        id: "illegal-characters-3",
        children: "Illegal characters"
      }), _jsxs(_components.p, {
        children: ["The use of ", _jsx(_components.code, {
          children: "."
        }), ", ", _jsx(_components.code, {
          children: "*"
        }), ", ", _jsx(_components.code, {
          children: "/"
        }), ", ", _jsx(_components.code, {
          children: "\\"
        }), ", ", _jsx(_components.code, {
          children: "\\0"
        }), " and non-printable ASCII characters in channel names is not allowed."]
      }), _jsx(_components.h3, {
        id: "naming-convention-3",
        children: "Naming convention"
      }), _jsxs(_components.p, {
        children: ["Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see ", _jsx(_components.a, {
          href: "../../reference/channel-naming",
          children: "Channel naming recommendations"
        }), "."]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "flutter",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "flutter"
      }), _jsx(_components.p, {
        children: "In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters."
      }), _jsx(_components.h2, {
        id: "channel-types-4",
        children: "Channel types"
      }), _jsx(_components.p, {
        children: "Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Message channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["A message channel uses a communication method similar to the MQTT protocol. It follows the pub/sub (publish-subscriber) model to deliver messages. In message channels, instead of creating a channel in advance, you simply publish messages to a specified channel or subscribe to receive messages from a channel. Due to the flexibility of the model, you can easily implement different topologies such as one-to-one channels, group channels, broadcast channels, and unicast channels. Since the number of subscribers can be larger, this channel type does not guarantee sending delivery receipts from all subscribers after receipt of a message. See ", _jsx(_components.a, {
              href: "message-channel",
              children: "Message channels"
            }), " for implementation details."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "User channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["Use this channel type to implement a one-to-one topology. User channels enable you to send peer-to-peer messages to a specified ", _jsx(_components.code, {
              children: "userId"
            }), ". To send a message to a user channel, set the ", _jsx(_components.code, {
              children: "channelType"
            }), " parameter in the ", _jsx(_components.code, {
              children: "publish"
            }), " method to ", _jsx(_components.code, {
              children: "RtmChannelType.user"
            }), " and the ", _jsx(_components.code, {
              children: "channelName"
            }), " to the ", _jsx(_components.code, {
              children: "userId"
            }), " of the recipient. To receive messages sent to your ", _jsx(_components.code, {
              children: "userId"
            }), ", you don't need to subscribe; you implement the ", _jsx(_components.code, {
              children: "message"
            }), " event listener. User channels support delivery receipts. When a publisher sends a message, the API returns ", _jsx(_components.code, {
              children: "success"
            }), " if the receiver is online and receives the message successfully. If the receiver is not online or the reception fails, the method returns ", _jsx(_components.code, {
              children: "failure"
            }), " or ", _jsx(_components.code, {
              children: "timeout"
            }), ". Although you can use the return value to determine if the recipient is online, best practice is to use the ", _jsx(_components.code, {
              children: "Presence"
            }), " functionality for this purpose."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Stream channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["This is a special type of channel based on the room concept that is similar to the observer pattern. In stream channels, users cannot send messages directly to a channel. You call the ", _jsx(_components.code, {
              children: "joinTopic"
            }), " method to register as a publisher of a topic before sending messages. To receive messages, users subscribe to the specified message publisher, identified by the ", _jsx(_components.code, {
              children: "userId"
            }), ", in the specified topic. In stream channels, client-side messages support delivery at higher QPS. This channel type is often recommended for use-cases such as Metaverse, parallel driving, and cloud gaming. See ", _jsx(_components.a, {
              href: "stream-channel",
              children: "Stream channels"
            }), " for implementation details."]
          }), `
`]
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["The channel types are distinguished in the API by ", _jsx(_components.code, {
          children: "channelType"
        }), ". Apart from differences in the message sending and receiving mechanism, the features and use of message channels and stream channels for other features and events such as ", _jsx(_components.code, {
          children: "Presence"
        }), ", ", _jsx(_components.code, {
          children: "Storage"
        }), ", and ", _jsx(_components.code, {
          children: "Locks"
        }), ", is the same. User channels do not support these features as they are simple message pass-through channels."]
      }), _jsx(_components.h2, {
        id: "create-a-channel-4",
        children: "Create a channel"
      }), _jsx(_components.p, {
        children: "For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you."
      }), _jsxs(_components.p, {
        children: ["When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the ", _jsx(_components.code, {
          children: "createStreamChannel"
        }), " method to create an instance of a ", _jsx(_components.code, {
          children: "StreamChannel"
        }), " object before joining the channel."]
      }), _jsx(_components.h2, {
        id: "channel-usage-restrictions-4",
        children: "Channel usage restrictions"
      }), _jsxs(_components.p, {
        children: ["Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see ", _jsx(_components.a, {
          href: "../../reference/limitations",
          children: "API usage restrictions"
        }), "."]
      }), _jsx(_components.h2, {
        id: "channel-naming-4",
        children: "Channel naming"
      }), _jsx(_components.p, {
        children: "A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel."
      }), _jsx(_components.h3, {
        id: "legal-characters-4",
        children: "Legal characters"
      }), _jsx(_components.p, {
        children: "The supported legal characters are:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "26 lowercase English letters a-z"
        }), `
`, _jsx(_components.li, {
          children: "26 uppercase English letters A-Z"
        }), `
`, _jsx(_components.li, {
          children: "10 numbers 0~9"
        }), `
`, _jsx(_components.li, {
          children: "Space"
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "!"
          }), ", ", _jsx(_components.code, {
            children: "#"
          }), ", ", _jsx(_components.code, {
            children: "$"
          }), ", ", _jsx(_components.code, {
            children: "%"
          }), ", ", _jsx(_components.code, {
            children: "&"
          }), ", ", _jsx(_components.code, {
            children: "("
          }), ", ", _jsx(_components.code, {
            children: ")"
          }), ", ", _jsx(_components.code, {
            children: "+"
          }), ", ", _jsx(_components.code, {
            children: ","
          }), ", ", _jsx(_components.code, {
            children: "-"
          }), ", ", _jsx(_components.code, {
            children: ":"
          }), ", ", _jsx(_components.code, {
            children: ";"
          }), ", ", _jsx(_components.code, {
            children: "<"
          }), ", ", _jsx(_components.code, {
            children: "="
          }), ", ", _jsx(_components.code, {
            children: ">"
          }), ", ", _jsx(_components.code, {
            children: "?"
          }), ", ", _jsx(_components.code, {
            children: "@"
          }), ", ", _jsx(_components.code, {
            children: "["
          }), ", ", _jsx(_components.code, {
            children: "]"
          }), ", ", _jsx(_components.code, {
            children: "^"
          }), ", ", _jsx(_components.code, {
            children: "_"
          }), ", ", _jsx(_components.code, {
            children: "{"
          }), ", ", _jsx(_components.code, {
            children: "|"
          }), ", ", _jsx(_components.code, {
            children: "}"
          }), ", ", _jsx(_components.code, {
            children: "~"
          }), ", ", _jsx(_components.code, {
            children: "`"
          })]
        }), `
`]
      }), _jsxs(CalloutContainer, {
        type: "warning",
        children: [_jsx(CalloutTitle, {
          children: "Important"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Channel names cannot begin with an underscore."
          })
        })]
      }), _jsx(_components.h3, {
        id: "illegal-characters-4",
        children: "Illegal characters"
      }), _jsxs(_components.p, {
        children: ["The use of ", _jsx(_components.code, {
          children: "."
        }), ", ", _jsx(_components.code, {
          children: "*"
        }), ", ", _jsx(_components.code, {
          children: "/"
        }), ", ", _jsx(_components.code, {
          children: "\\"
        }), ", ", _jsx(_components.code, {
          children: "\\0"
        }), " and non-printable ASCII characters in channel names is not allowed."]
      }), _jsx(_components.h3, {
        id: "naming-convention-4",
        children: "Naming convention"
      }), _jsxs(_components.p, {
        children: ["Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see ", _jsx(_components.a, {
          href: "../../reference/channel-naming",
          children: "Channel naming recommendations"
        }), "."]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "windows",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "windows"
      }), _jsx(_components.p, {
        children: "In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters."
      }), _jsx(_components.h2, {
        id: "channel-types-5",
        children: "Channel types"
      }), _jsx(_components.p, {
        children: "Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Message channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["A message channel uses a communication method similar to the MQTT protocol. It follows the pub/sub (publish-subscriber) model to deliver messages. In message channels, instead of creating a channel in advance, you simply publish messages to a specified channel or subscribe to receive messages from a channel. Due to the flexibility of the model, you can easily implement different topologies such as one-to-one channels, group channels, broadcast channels, and unicast channels. Since the number of subscribers can be larger, this channel type does not guarantee sending delivery receipts from all subscribers after receipt of a message. See ", _jsx(_components.a, {
              href: "message-channel",
              children: "Message channels"
            }), " for implementation details."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "User channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["Use this channel type to implement a one-to-one topology. User channels enable you to send peer-to-peer messages to a specified ", _jsx(_components.code, {
              children: "userId"
            }), ". To send a message to a user channel, set the ", _jsx(_components.code, {
              children: "channelType"
            }), " parameter in the ", _jsx(_components.code, {
              children: "publish"
            }), " method to ", _jsx(_components.code, {
              children: "RTM_CHANNEL_TYPE_USER"
            }), " and the ", _jsx(_components.code, {
              children: "channelName"
            }), " to the ", _jsx(_components.code, {
              children: "userId"
            }), " of the recipient. To receive messages sent to your ", _jsx(_components.code, {
              children: "userId"
            }), ", you don't need to subscribe; you implement the ", _jsx(_components.code, {
              children: "onMessageEvent"
            }), " event listener. User channels support delivery receipts. When a publisher sends a message, the API returns ", _jsx(_components.code, {
              children: "success"
            }), " if the receiver is online and receives the message successfully. If the receiver is not online or the reception fails, the method returns ", _jsx(_components.code, {
              children: "failure"
            }), " or ", _jsx(_components.code, {
              children: "timeout"
            }), ". Although you can use the return value to determine if the recipient is online, best practice is to use the ", _jsx(_components.code, {
              children: "Presence"
            }), " functionality for this purpose."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Stream channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["This is a special type of channel based on the room concept that is similar to the observer pattern. In stream channels, users cannot send messages directly to a channel. You call the ", _jsx(_components.code, {
              children: "joinTopic"
            }), " method to register as a publisher of a topic before sending messages. To receive messages, users subscribe to the specified message publisher, identified by the ", _jsx(_components.code, {
              children: "userId"
            }), ", in the specified topic. In stream channels, client-side messages support delivery at higher QPS. This channel type is often recommended for use-cases such as Metaverse, parallel driving, and cloud gaming. See ", _jsx(_components.a, {
              href: "stream-channel",
              children: "Stream channels"
            }), " for implementation details."]
          }), `
`]
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["The channel types are distinguished in the API by ", _jsx(_components.code, {
          children: "channelType"
        }), ". Apart from differences in the message sending and receiving mechanism, the features and use of message channels and stream channels for other features and events such as ", _jsx(_components.code, {
          children: "Presence"
        }), ", ", _jsx(_components.code, {
          children: "Storage"
        }), ", and ", _jsx(_components.code, {
          children: "Locks"
        }), ", is the same. User channels do not support these features as they are simple message pass-through channels."]
      }), _jsx(_components.h2, {
        id: "create-a-channel-5",
        children: "Create a channel"
      }), _jsx(_components.p, {
        children: "For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you."
      }), _jsxs(_components.p, {
        children: ["When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the ", _jsx(_components.code, {
          children: "createStreamChannel"
        }), " method to create an instance of a ", _jsx(_components.code, {
          children: "IStreamChannel"
        }), " object before joining the channel."]
      }), _jsx(_components.h2, {
        id: "channel-usage-restrictions-5",
        children: "Channel usage restrictions"
      }), _jsxs(_components.p, {
        children: ["Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see ", _jsx(_components.a, {
          href: "../../reference/limitations",
          children: "API usage restrictions"
        }), "."]
      }), _jsx(_components.h2, {
        id: "channel-naming-5",
        children: "Channel naming"
      }), _jsx(_components.p, {
        children: "A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel."
      }), _jsx(_components.h3, {
        id: "legal-characters-5",
        children: "Legal characters"
      }), _jsx(_components.p, {
        children: "The supported legal characters are:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "26 lowercase English letters a-z"
        }), `
`, _jsx(_components.li, {
          children: "26 uppercase English letters A-Z"
        }), `
`, _jsx(_components.li, {
          children: "10 numbers 0~9"
        }), `
`, _jsx(_components.li, {
          children: "Space"
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "!"
          }), ", ", _jsx(_components.code, {
            children: "#"
          }), ", ", _jsx(_components.code, {
            children: "$"
          }), ", ", _jsx(_components.code, {
            children: "%"
          }), ", ", _jsx(_components.code, {
            children: "&"
          }), ", ", _jsx(_components.code, {
            children: "("
          }), ", ", _jsx(_components.code, {
            children: ")"
          }), ", ", _jsx(_components.code, {
            children: "+"
          }), ", ", _jsx(_components.code, {
            children: ","
          }), ", ", _jsx(_components.code, {
            children: "-"
          }), ", ", _jsx(_components.code, {
            children: ":"
          }), ", ", _jsx(_components.code, {
            children: ";"
          }), ", ", _jsx(_components.code, {
            children: "<"
          }), ", ", _jsx(_components.code, {
            children: "="
          }), ", ", _jsx(_components.code, {
            children: ">"
          }), ", ", _jsx(_components.code, {
            children: "?"
          }), ", ", _jsx(_components.code, {
            children: "@"
          }), ", ", _jsx(_components.code, {
            children: "["
          }), ", ", _jsx(_components.code, {
            children: "]"
          }), ", ", _jsx(_components.code, {
            children: "^"
          }), ", ", _jsx(_components.code, {
            children: "_"
          }), ", ", _jsx(_components.code, {
            children: "{"
          }), ", ", _jsx(_components.code, {
            children: "|"
          }), ", ", _jsx(_components.code, {
            children: "}"
          }), ", ", _jsx(_components.code, {
            children: "~"
          }), ", ", _jsx(_components.code, {
            children: "`"
          })]
        }), `
`]
      }), _jsxs(CalloutContainer, {
        type: "warning",
        children: [_jsx(CalloutTitle, {
          children: "Important"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Channel names cannot begin with an underscore."
          })
        })]
      }), _jsx(_components.h3, {
        id: "illegal-characters-5",
        children: "Illegal characters"
      }), _jsxs(_components.p, {
        children: ["The use of ", _jsx(_components.code, {
          children: "."
        }), ", ", _jsx(_components.code, {
          children: "*"
        }), ", ", _jsx(_components.code, {
          children: "/"
        }), ", ", _jsx(_components.code, {
          children: "\\"
        }), ", ", _jsx(_components.code, {
          children: "\\0"
        }), " and non-printable ASCII characters in channel names is not allowed."]
      }), _jsx(_components.h3, {
        id: "naming-convention-5",
        children: "Naming convention"
      }), _jsxs(_components.p, {
        children: ["Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see ", _jsx(_components.a, {
          href: "../../reference/channel-naming",
          children: "Channel naming recommendations"
        }), "."]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "linux-cpp",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "linux-cpp"
      }), _jsx(_components.p, {
        children: "In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters."
      }), _jsx(_components.h2, {
        id: "channel-types-6",
        children: "Channel types"
      }), _jsx(_components.p, {
        children: "Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Message channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["A message channel uses a communication method similar to the MQTT protocol. It follows the pub/sub (publish-subscriber) model to deliver messages. In message channels, instead of creating a channel in advance, you simply publish messages to a specified channel or subscribe to receive messages from a channel. Due to the flexibility of the model, you can easily implement different topologies such as one-to-one channels, group channels, broadcast channels, and unicast channels. Since the number of subscribers can be larger, this channel type does not guarantee sending delivery receipts from all subscribers after receipt of a message. See ", _jsx(_components.a, {
              href: "message-channel",
              children: "Message channels"
            }), " for implementation details."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "User channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["Use this channel type to implement a one-to-one topology. User channels enable you to send peer-to-peer messages to a specified ", _jsx(_components.code, {
              children: "userId"
            }), ". To send a message to a user channel, set the ", _jsx(_components.code, {
              children: "channelType"
            }), " parameter in the ", _jsx(_components.code, {
              children: "publish"
            }), " method to ", _jsx(_components.code, {
              children: "RTM_CHANNEL_TYPE_USER"
            }), " and the ", _jsx(_components.code, {
              children: "channelName"
            }), " to the ", _jsx(_components.code, {
              children: "userId"
            }), " of the recipient. To receive messages sent to your ", _jsx(_components.code, {
              children: "userId"
            }), ", you don't need to subscribe; you implement the ", _jsx(_components.code, {
              children: "onMessageEvent"
            }), " event listener. User channels support delivery receipts. When a publisher sends a message, the API returns ", _jsx(_components.code, {
              children: "success"
            }), " if the receiver is online and receives the message successfully. If the receiver is not online or the reception fails, the method returns ", _jsx(_components.code, {
              children: "failure"
            }), " or ", _jsx(_components.code, {
              children: "timeout"
            }), ". Although you can use the return value to determine if the recipient is online, best practice is to use the ", _jsx(_components.code, {
              children: "Presence"
            }), " functionality for this purpose."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Stream channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["This is a special type of channel based on the room concept that is similar to the observer pattern. In stream channels, users cannot send messages directly to a channel. You call the ", _jsx(_components.code, {
              children: "joinTopic"
            }), " method to register as a publisher of a topic before sending messages. To receive messages, users subscribe to the specified message publisher, identified by the ", _jsx(_components.code, {
              children: "userId"
            }), ", in the specified topic. In stream channels, client-side messages support delivery at higher QPS. This channel type is often recommended for use-cases such as Metaverse, parallel driving, and cloud gaming. See ", _jsx(_components.a, {
              href: "stream-channel",
              children: "Stream channels"
            }), " for implementation details."]
          }), `
`]
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["The channel types are distinguished in the API by ", _jsx(_components.code, {
          children: "channelType"
        }), ". Apart from differences in the message sending and receiving mechanism, the features and use of message channels and stream channels for other features and events such as ", _jsx(_components.code, {
          children: "Presence"
        }), ", ", _jsx(_components.code, {
          children: "Storage"
        }), ", and ", _jsx(_components.code, {
          children: "Locks"
        }), ", is the same. User channels do not support these features as they are simple message pass-through channels."]
      }), _jsx(_components.h2, {
        id: "create-a-channel-6",
        children: "Create a channel"
      }), _jsx(_components.p, {
        children: "For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you."
      }), _jsxs(_components.p, {
        children: ["When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the ", _jsx(_components.code, {
          children: "createStreamChannel"
        }), " method to create an instance of a ", _jsx(_components.code, {
          children: "IStreamChannel"
        }), " object before joining the channel."]
      }), _jsx(_components.h2, {
        id: "channel-usage-restrictions-6",
        children: "Channel usage restrictions"
      }), _jsxs(_components.p, {
        children: ["Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see ", _jsx(_components.a, {
          href: "../../reference/limitations",
          children: "API usage restrictions"
        }), "."]
      }), _jsx(_components.h2, {
        id: "channel-naming-6",
        children: "Channel naming"
      }), _jsx(_components.p, {
        children: "A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel."
      }), _jsx(_components.h3, {
        id: "legal-characters-6",
        children: "Legal characters"
      }), _jsx(_components.p, {
        children: "The supported legal characters are:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "26 lowercase English letters a-z"
        }), `
`, _jsx(_components.li, {
          children: "26 uppercase English letters A-Z"
        }), `
`, _jsx(_components.li, {
          children: "10 numbers 0~9"
        }), `
`, _jsx(_components.li, {
          children: "Space"
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "!"
          }), ", ", _jsx(_components.code, {
            children: "#"
          }), ", ", _jsx(_components.code, {
            children: "$"
          }), ", ", _jsx(_components.code, {
            children: "%"
          }), ", ", _jsx(_components.code, {
            children: "&"
          }), ", ", _jsx(_components.code, {
            children: "("
          }), ", ", _jsx(_components.code, {
            children: ")"
          }), ", ", _jsx(_components.code, {
            children: "+"
          }), ", ", _jsx(_components.code, {
            children: ","
          }), ", ", _jsx(_components.code, {
            children: "-"
          }), ", ", _jsx(_components.code, {
            children: ":"
          }), ", ", _jsx(_components.code, {
            children: ";"
          }), ", ", _jsx(_components.code, {
            children: "<"
          }), ", ", _jsx(_components.code, {
            children: "="
          }), ", ", _jsx(_components.code, {
            children: ">"
          }), ", ", _jsx(_components.code, {
            children: "?"
          }), ", ", _jsx(_components.code, {
            children: "@"
          }), ", ", _jsx(_components.code, {
            children: "["
          }), ", ", _jsx(_components.code, {
            children: "]"
          }), ", ", _jsx(_components.code, {
            children: "^"
          }), ", ", _jsx(_components.code, {
            children: "_"
          }), ", ", _jsx(_components.code, {
            children: "{"
          }), ", ", _jsx(_components.code, {
            children: "|"
          }), ", ", _jsx(_components.code, {
            children: "}"
          }), ", ", _jsx(_components.code, {
            children: "~"
          }), ", ", _jsx(_components.code, {
            children: "`"
          })]
        }), `
`]
      }), _jsxs(CalloutContainer, {
        type: "warning",
        children: [_jsx(CalloutTitle, {
          children: "Important"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Channel names cannot begin with an underscore."
          })
        })]
      }), _jsx(_components.h3, {
        id: "illegal-characters-6",
        children: "Illegal characters"
      }), _jsxs(_components.p, {
        children: ["The use of ", _jsx(_components.code, {
          children: "."
        }), ", ", _jsx(_components.code, {
          children: "*"
        }), ", ", _jsx(_components.code, {
          children: "/"
        }), ", ", _jsx(_components.code, {
          children: "\\"
        }), ", ", _jsx(_components.code, {
          children: "\\0"
        }), " and non-printable ASCII characters in channel names is not allowed."]
      }), _jsx(_components.h3, {
        id: "naming-convention-6",
        children: "Naming convention"
      }), _jsxs(_components.p, {
        children: ["Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see ", _jsx(_components.a, {
          href: "../../reference/channel-naming",
          children: "Channel naming recommendations"
        }), "."]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "linux-java",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "linux-java"
      }), _jsx(_components.p, {
        children: "In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters."
      }), _jsx(_components.h2, {
        id: "channel-types-7",
        children: "Channel types"
      }), _jsx(_components.p, {
        children: "Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Message channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["A message channel uses a communication method similar to the MQTT protocol. It follows the pub/sub (publish-subscriber) model to deliver messages. In message channels, instead of creating a channel in advance, you simply publish messages to a specified channel or subscribe to receive messages from a channel. Due to the flexibility of the model, you can easily implement different topologies such as one-to-one channels, group channels, broadcast channels, and unicast channels. Since the number of subscribers can be larger, this channel type does not guarantee sending delivery receipts from all subscribers after receipt of a message. See ", _jsx(_components.a, {
              href: "message-channel",
              children: "Message channels"
            }), " for implementation details."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "User channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["Use this channel type to implement a one-to-one topology. User channels enable you to send peer-to-peer messages to a specified ", _jsx(_components.code, {
              children: "userId"
            }), ". To send a message to a user channel, set the ", _jsx(_components.code, {
              children: "channelType"
            }), " parameter in the ", _jsx(_components.code, {
              children: "publish"
            }), " method to ", _jsx(_components.code, {
              children: "USER"
            }), " and the ", _jsx(_components.code, {
              children: "channelName"
            }), " to the ", _jsx(_components.code, {
              children: "userId"
            }), " of the recipient. To receive messages sent to your ", _jsx(_components.code, {
              children: "userId"
            }), ", you don't need to subscribe; you implement the ", _jsx(_components.code, {
              children: "onMessageEvent"
            }), " event listener. User channels support delivery receipts. When a publisher sends a message, the API returns ", _jsx(_components.code, {
              children: "success"
            }), " if the receiver is online and receives the message successfully. If the receiver is not online or the reception fails, the method returns ", _jsx(_components.code, {
              children: "failure"
            }), " or ", _jsx(_components.code, {
              children: "timeout"
            }), ". Although you can use the return value to determine if the recipient is online, best practice is to use the ", _jsx(_components.code, {
              children: "Presence"
            }), " functionality for this purpose."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Stream channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["This is a special type of channel based on the room concept that is similar to the observer pattern. In stream channels, users cannot send messages directly to a channel. You call the ", _jsx(_components.code, {
              children: "joinTopic"
            }), " method to register as a publisher of a topic before sending messages. To receive messages, users subscribe to the specified message publisher, identified by the ", _jsx(_components.code, {
              children: "userId"
            }), ", in the specified topic. In stream channels, client-side messages support delivery at higher QPS. This channel type is often recommended for use-cases such as Metaverse, parallel driving, and cloud gaming. See ", _jsx(_components.a, {
              href: "stream-channel",
              children: "Stream channels"
            }), " for implementation details."]
          }), `
`]
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["The channel types are distinguished in the API by ", _jsx(_components.code, {
          children: "channelType"
        }), ". Apart from differences in the message sending and receiving mechanism, the features and use of message channels and stream channels for other features and events such as ", _jsx(_components.code, {
          children: "Presence"
        }), ", ", _jsx(_components.code, {
          children: "Storage"
        }), ", and ", _jsx(_components.code, {
          children: "Locks"
        }), ", is the same. User channels do not support these features as they are simple message pass-through channels."]
      }), _jsx(_components.h2, {
        id: "create-a-channel-7",
        children: "Create a channel"
      }), _jsx(_components.p, {
        children: "For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you."
      }), _jsxs(_components.p, {
        children: ["When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the ", _jsx(_components.code, {
          children: "createStreamChannel"
        }), " method to create an instance of a ", _jsx(_components.code, {
          children: "StreamChannel"
        }), " object before joining the channel."]
      }), _jsx(_components.h2, {
        id: "channel-usage-restrictions-7",
        children: "Channel usage restrictions"
      }), _jsxs(_components.p, {
        children: ["Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see ", _jsx(_components.a, {
          href: "../../reference/limitations",
          children: "API usage restrictions"
        }), "."]
      }), _jsx(_components.h2, {
        id: "channel-naming-7",
        children: "Channel naming"
      }), _jsx(_components.p, {
        children: "A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel."
      }), _jsx(_components.h3, {
        id: "legal-characters-7",
        children: "Legal characters"
      }), _jsx(_components.p, {
        children: "The supported legal characters are:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "26 lowercase English letters a-z"
        }), `
`, _jsx(_components.li, {
          children: "26 uppercase English letters A-Z"
        }), `
`, _jsx(_components.li, {
          children: "10 numbers 0~9"
        }), `
`, _jsx(_components.li, {
          children: "Space"
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "!"
          }), ", ", _jsx(_components.code, {
            children: "#"
          }), ", ", _jsx(_components.code, {
            children: "$"
          }), ", ", _jsx(_components.code, {
            children: "%"
          }), ", ", _jsx(_components.code, {
            children: "&"
          }), ", ", _jsx(_components.code, {
            children: "("
          }), ", ", _jsx(_components.code, {
            children: ")"
          }), ", ", _jsx(_components.code, {
            children: "+"
          }), ", ", _jsx(_components.code, {
            children: ","
          }), ", ", _jsx(_components.code, {
            children: "-"
          }), ", ", _jsx(_components.code, {
            children: ":"
          }), ", ", _jsx(_components.code, {
            children: ";"
          }), ", ", _jsx(_components.code, {
            children: "<"
          }), ", ", _jsx(_components.code, {
            children: "="
          }), ", ", _jsx(_components.code, {
            children: ">"
          }), ", ", _jsx(_components.code, {
            children: "?"
          }), ", ", _jsx(_components.code, {
            children: "@"
          }), ", ", _jsx(_components.code, {
            children: "["
          }), ", ", _jsx(_components.code, {
            children: "]"
          }), ", ", _jsx(_components.code, {
            children: "^"
          }), ", ", _jsx(_components.code, {
            children: "_"
          }), ", ", _jsx(_components.code, {
            children: "{"
          }), ", ", _jsx(_components.code, {
            children: "|"
          }), ", ", _jsx(_components.code, {
            children: "}"
          }), ", ", _jsx(_components.code, {
            children: "~"
          }), ", ", _jsx(_components.code, {
            children: "`"
          })]
        }), `
`]
      }), _jsxs(CalloutContainer, {
        type: "warning",
        children: [_jsx(CalloutTitle, {
          children: "Important"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Channel names cannot begin with an underscore."
          })
        })]
      }), _jsx(_components.h3, {
        id: "illegal-characters-7",
        children: "Illegal characters"
      }), _jsxs(_components.p, {
        children: ["The use of ", _jsx(_components.code, {
          children: "."
        }), ", ", _jsx(_components.code, {
          children: "*"
        }), ", ", _jsx(_components.code, {
          children: "/"
        }), ", ", _jsx(_components.code, {
          children: "\\"
        }), ", ", _jsx(_components.code, {
          children: "\\0"
        }), " and non-printable ASCII characters in channel names is not allowed."]
      }), _jsx(_components.h3, {
        id: "naming-convention-7",
        children: "Naming convention"
      }), _jsxs(_components.p, {
        children: ["Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see ", _jsx(_components.a, {
          href: "../../reference/channel-naming",
          children: "Channel naming recommendations"
        }), "."]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "unity",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "unity"
      }), _jsx(_components.p, {
        children: "In Signaling, a channel is an efficient data transfer management mechanism for communicating data from one device to another. A user who subscribes to or joins a channel receives messages or events transmitted in that channel within 100 milliseconds. Agora enables a client to subscribe to or join multiple channels at the same time. Most Signaling SDK APIs, such as those for sending and receiving messages, and encryption, use channels as parameters."
      }), _jsx(_components.h2, {
        id: "channel-types-8",
        children: "Channel types"
      }), _jsx(_components.p, {
        children: "Conceptually, a channel is a conduit that controls the flow of messages. Signaling provides the following channel types:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Message channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["In a message channel, a publisher simply delivers a message to a specific channel, and any device or user subscribed to that channel receives that message or event notification. See ", _jsx(_components.a, {
              href: "message-channel",
              children: "Message channels"
            }), " for implementation details."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Stream channel"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["In a stream channel, users call the ", _jsx(_components.code, {
              children: "JoinTopicAsync"
            }), " method to register as a publisher of a topic before they can send messages. To receive messages from a publisher in a given topic, a user subscribes to a specific message publisher, identified by their user ID. See ", _jsx(_components.a, {
              href: "stream-channel",
              children: "Stream channels"
            }), " for implementation details."]
          }), `
`]
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["The channel types are distinguished in the API by ", _jsx(_components.code, {
          children: "RTM_CHANNEL_TYPE"
        }), ". Apart from the message sending and receiving mechanism, the features and use of message channels and stream channels for notification of other events such as ", _jsx(_components.code, {
          children: "Presence"
        }), ", ", _jsx(_components.code, {
          children: "Storage"
        }), ", and ", _jsx(_components.code, {
          children: "Locks"
        }), ", is the same. The following table summarizes the main characteristics and applicable use-cases for the channel types:"]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "Channel type"
            }), _jsx(_components.th, {
              children: "Main characteristics"
            }), _jsx(_components.th, {
              children: "Applicable use-cases"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Message"
            }), _jsx(_components.td, {
              children: "Message channels use the industry-standard pub/sub (publish/subscribe) model to deliver messages and events. These channels do not need to be created in advance and are available on demand. There is no limit on the number of publishers and subscribers in a channel, but there is a limit on the upstream queries per second (QPS) for a single channel."
            }), _jsx(_components.td, {
              children: "Common applications include use-cases based on the pub/sub model and multi-device applications, such as multi-device management and command sending/receiving in location tracking, the IoT industry, smart devices, and large communities."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              children: "Stream"
            }), _jsx(_components.td, {
              children: "Stream channels are based on the room concept, which is similar to the observer pattern in the industry. Users join a channel to send messages and receive event notifications. Messages are managed and delivered using topics within a channel. A single channel allows up to 1000 users to join at the same time. Message channels support co-channel and synchronous transmission of audio and video data. In addition, they support client-side message delivery with higher QPS."
            }), _jsx(_components.td, {
              children: "High-frequency and high-concurrency data transmission use-cases, as well as use-cases where audio and video data are synchronously transmitted in the same channel. Examples include Metaverse applications, parallel driving, and cloud gaming."
            })]
          })]
        })]
      }), _jsx(_components.h2, {
        id: "create-a-channel-8",
        children: "Create a channel"
      }), _jsx(_components.p, {
        children: "For message channels, you do not need to define or create a channel before using it. When you send a message or subscribe to a message channel for the first time, Signaling automatically creates the channel for you."
      }), _jsxs(_components.p, {
        children: ["When using stream channels, although a channel is essentially ready-to-use, you must explicitly call the ", _jsx(_components.code, {
          children: "CreateStreamChannel"
        }), " method to create an instance of a ", _jsx(_components.code, {
          children: "IStreamChannel"
        }), " object before joining the channel."]
      }), _jsx(_components.h2, {
        id: "channel-usage-restrictions-8",
        children: "Channel usage restrictions"
      }), _jsxs(_components.p, {
        children: ["Signaling puts no limits on the number of message and stream channels that may exist at the same time. However, different types of channels have different restrictions on the number of channels a single client may subscribe to or join concurrently, and the QPS for sending and receiving messages. For details, see ", _jsx(_components.a, {
          href: "../../reference/limitations",
          children: "API usage restrictions"
        }), "."]
      }), _jsx(_components.h2, {
        id: "channel-naming-8",
        children: "Channel naming"
      }), _jsx(_components.p, {
        children: "A channel name cannot be empty. It must be a string of up to 64 bytes in length, consisting of letters or numbers from the ASCII character set. Signaling uses the app ID as the namespace for the channel. Each channel under the app ID is jointly identified by the channel name and the channel type. If two channels have different channel types or different channel names, Signaling treats them as two separate channels. If two channels have the same channel type and channel name, Signaling treats them as the same channel."
      }), _jsx(_components.h3, {
        id: "legal-characters-8",
        children: "Legal characters"
      }), _jsx(_components.p, {
        children: "The supported legal characters are:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "26 lowercase English letters a-z"
        }), `
`, _jsx(_components.li, {
          children: "26 uppercase English letters A-Z"
        }), `
`, _jsx(_components.li, {
          children: "10 numbers 0~9"
        }), `
`, _jsx(_components.li, {
          children: "Space"
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "!"
          }), ", ", _jsx(_components.code, {
            children: "#"
          }), ", ", _jsx(_components.code, {
            children: "$"
          }), ", ", _jsx(_components.code, {
            children: "%"
          }), ", ", _jsx(_components.code, {
            children: "&"
          }), ", ", _jsx(_components.code, {
            children: "("
          }), ", ", _jsx(_components.code, {
            children: ")"
          }), ", ", _jsx(_components.code, {
            children: "+"
          }), ", ", _jsx(_components.code, {
            children: ","
          }), ", ", _jsx(_components.code, {
            children: "-"
          }), ", ", _jsx(_components.code, {
            children: ":"
          }), ", ", _jsx(_components.code, {
            children: ";"
          }), ", ", _jsx(_components.code, {
            children: "<"
          }), ", ", _jsx(_components.code, {
            children: "="
          }), ", ", _jsx(_components.code, {
            children: ">"
          }), ", ", _jsx(_components.code, {
            children: "?"
          }), ", ", _jsx(_components.code, {
            children: "@"
          }), ", ", _jsx(_components.code, {
            children: "["
          }), ", ", _jsx(_components.code, {
            children: "]"
          }), ", ", _jsx(_components.code, {
            children: "^"
          }), ", ", _jsx(_components.code, {
            children: "_"
          }), ", ", _jsx(_components.code, {
            children: "{"
          }), ", ", _jsx(_components.code, {
            children: "|"
          }), ", ", _jsx(_components.code, {
            children: "}"
          }), ", ", _jsx(_components.code, {
            children: "~"
          }), ", ", _jsx(_components.code, {
            children: "`"
          })]
        }), `
`]
      }), _jsxs(CalloutContainer, {
        type: "warning",
        children: [_jsx(CalloutTitle, {
          children: "Important"
        }), _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "Channel names cannot begin with an underscore."
          })
        })]
      }), _jsx(_components.h3, {
        id: "illegal-characters-8",
        children: "Illegal characters"
      }), _jsxs(_components.p, {
        children: ["The use of ", _jsx(_components.code, {
          children: "."
        }), ", ", _jsx(_components.code, {
          children: "*"
        }), ", ", _jsx(_components.code, {
          children: "/"
        }), ", ", _jsx(_components.code, {
          children: "\\"
        }), ", ", _jsx(_components.code, {
          children: "\\0"
        }), " and non-printable ASCII characters in channel names is not allowed."]
      }), _jsx(_components.h3, {
        id: "naming-convention-8",
        children: "Naming convention"
      }), _jsxs(_components.p, {
        children: ["Although not mandated by the SDK, best practice when naming your channels is to use meaningful prefix characters to indicate the purpose of the channel or the type of messages in the channel so that you present your business logic more clearly. For details, see ", _jsx(_components.a, {
          href: "../../reference/channel-naming",
          children: "Channel naming recommendations"
        }), "."]
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
