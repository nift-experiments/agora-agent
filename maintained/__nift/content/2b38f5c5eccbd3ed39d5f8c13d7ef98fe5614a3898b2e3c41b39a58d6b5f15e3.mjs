import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Reaction",
  description: "Show the implementation of adding a reaction to a message."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;,&#x22;windows&#x22;,&#x22;unity&#x22;,&#x22;web&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    Emojis are widely used in real-time chats because they allow users to express their feelings in a direct and vivid way. In Chat, "reactions" allow users to quickly react to a message using emojis in one-to-one chats and chat groups. In group chats, reactions can also be used to cast a vote, for example, by calculating the number of different emojis attached to the message.

    The following illustration shows the implementation of adding a reaction to a message, how a conversation looks with reactions, and what retrieving a list of reactions (with related information) looks like.

    ![1655257598155](https://web-cdn.agora.io/docs-files/1655257598155)

    ## Understand the tech [#understand-the-tech]

    The SDK provides the following APIs to implement reaction functionalities:

    * \`asyncAddReaction\`: Adds a reaction to the specified message.
    * \`asyncRemoveReaction\`: Removes the reaction from the specified message.
    * \`asyncGetReactionList\`: Retrieves a list of reactions from the server.
    * \`asyncGetReactionDetail\`: Retrieves the details of the reaction from the server.
    * \`ChatMessage.getMessageReaction\`: Retrieves a list of reactions from the \`ChatMessage\` objects in the local database.

    ## Prerequisites [#prerequisites]

    Before proceeding, ensure that your environment meets the following requirements:

    * The project integrates a version of the Chat SDK later than v1.0.3 and has implemented the [basic real-time chat functionalities](../../get-started-sdk).
    * You understand the API call frequency limit as described in [Limitations](/en/api-reference/api-ref/im/limitations).

    <CalloutContainer type="info">
      <CalloutDescription>
        The reaction feature is supported by all types of [Pricing Plans](../../reference/pricing-plan-details) and is enabled by default once you have enabled Chat in [Agora Console](https://console.agora.io/).
      </CalloutDescription>
    </CalloutContainer>

    ## Implementation [#implementation]

    This section introduces how to implement reaction functionalities in your project.

    ### Add a reaction [#add-a-reaction]

    Call \`asyncAddReaction\` to add a reaction to the specified message. In a one-to-one conversation, the peer user receives the \`onReactionChanged\` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (ID of the new reaction, user ID of the user that adds the reaction, and the addition operation).

    For a reaction, a user can add only once, or the error 1301 is reported for repeated addition.

    \`\`\`java
    // Add a reaction
    ChatClient.getInstance().chatManager().asyncAddReaction(message.getMsgId(), reaction, new CallBack() {
                @Override
                public void onSuccess() {

                }
                @Override
                public void onError(int error, String errorMsg) {

                }
                @Override
                public void onProgress(int i, String s) {
                }
            });
    // Listen for the state of the reaction.
    public class MyClass implements MessageListener {
        private void init() {
            ChatClient.getInstance().chatManager().addMessageListener(this);
        }
        @Override
        public void onReactionChanged(List list) {

        }
    }
    \`\`\`

    ### Remove a reaction [#remove-a-reaction]

    Call \`asyncRemoveReaction\` to remove the specified reaction. In a one-to-one conversation, the peer user receives the \`onReactionChanged\` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (ID of the removed reaction, user ID of the user that removes the reaction, and the removal operation).

    \`\`\`java
    // Remove the reaction.
    ChatClient.getInstance().chatManager().asyncRemoveReaction(message.getMsgId(), reaction, new CallBack() {
                @Override
                public void onSuccess() {

                }
                @Override
                public void onError(int error, String errorMsg) {

                }
                @Override
                public void onProgress(int i, String s) {
                }
            });
    // Listen for reaction state change.
    public class MyClass implements MessageListener {
        private void init() {
            ChatClient.getInstance().chatManager().addMessageListener(this);
        }
        @Override
        public void onReactionChanged(List list) {

        }
    }
    \`\`\`

    ### Retrieve a list of reactions [#retrieve-a-list-of-reactions]

    Call \`asyncGetReactionList\` to retrieve a list of reactions of messages from the server. This method also returns the basic information of the reactions, including the content of the reaction, the number of users that added or removed the reaction, and a list of the first three user IDs that added or removed the reaction.

    \`\`\`java
    ChatClient.getInstance().chatManager().asyncGetReactionList(msgIdList, ChatMessage.ChatType.Chat, groupId, new ValueCallBack>>() {
                @Override
                public void onSuccess(Map> stringListMap) {

                }
                @Override
                public void onError(int i, String s) {

                }
       });
    \`\`\`

    ### Retrieve the details of the reaction [#retrieve-the-details-of-the-reaction]

    Call \`asyncGetReactionDetail\` to get the detailed information of the reaction from the server. The detailed information includes the reaction content, the number of users that added or removed the reaction, and the complete list of user IDs that added or removed the reaction.

    \`\`\`java
    ChatClient.getInstance().chatManager().asyncGetReactionDetail(mMsgId, emojiconId, pageCurosr, 30, new ValueCallBack>() {
                        @Override
                        public void onSuccess(CursorResult messageReactionCursorResult) {

                        }
                        @Override
                        public void onError(int i, String s) {

                        }
                    });
    \`\`\`

    ## Next steps [#next-steps]

    Reactions are also supported in the [Chat UIKit](../../get-started-uikit), which contains a wider range of emojis. You can also use the Chat SDK to implement reactions in your project.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    Emojis are widely used in real-time chats because they allow users to express their feelings in a direct and vivid way. In Chat, "reactions" allow users to quickly react to a message using emojis in one-to-one chats and chat groups. In group chats, reactions can also be used to cast a vote, for example, by calculating the number of different emojis attached to the message.

    The following illustration shows the implementation of adding a reaction to a message, how a conversation looks with reactions, and what retrieving a list of reactions (with related information) looks like.

    ![1655257598155](https://web-cdn.agora.io/docs-files/1655257598155)

    ## Understand the tech [#understand-the-tech-1]

    The SDK provides the following APIs to implement reaction functionalities:

    * \`addReaction\`: Adds a reaction to the specified message.
    * \`removeReaction\`: Removes the reaction from the specified message.
    * \`getReactionList\`: Retrieves a list of reactions from the server.
    * \`getReactionDetail\`: Retrieves the details of the reaction from the server.
    * \`AgoraChatMessage.reactionlist\`: Retrieves a list of reactions from the \`AgoraChatMessage\` objects in the local database.

    ## Prerequisites [#prerequisites-1]

    Before proceeding, ensure that your environment meets the following requirements:

    * The project integrates a version of the Chat SDK later than v1.0.3 and has implemented the [basic real-time chat functionalities](../../get-started-sdk).
    * You understand the API call frequency limit as described in [Limitations](/en/api-reference/api-ref/im/limitations).

    <CalloutContainer type="info">
      <CalloutDescription>
        The reaction feature is supported by all types of [Pricing Plans](../../reference/pricing-plan-details) and is enabled by default once you have enabled Chat in [Agora Console](https://console.agora.io/).
      </CalloutDescription>
    </CalloutContainer>

    ## Implementation [#implementation-1]

    This section introduces how to implement reaction functionalities in your project.

    ### Add a reaction [#add-a-reaction-1]

    Call \`addReaction\` to add a reaction to the specified message. In a one-to-one conversation, the peer user receives the \`messageReactionDidChange\` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (reaction ID, user ID of the user that adds the reaction, and the addition operation).

    For a reaction, a user can add only once, or the error 1301 is reported for repeated addition.

    \`\`\`objc
    // Add a reaction
    [AgoraChatClient.sharedClient.chatManager addReaction:"reaction" toMessage:"messageId" completion:^(AgoraChatError * _Nullable error) {
      refreshBlock(error, changeSelectedStateHandle);
    }];
    // Listen for the state of the reaction.
    - (void)messageReactionDidChange:(NSArray *)changes
    {

    }
    \`\`\`

    ### Remove a reaction [#remove-a-reaction-1]

    Call \`removeReaction\` to remove the specified reaction. In a one-to-one conversation, the peer user receives the \`messageReactionDidChange\` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (ID of the removed reaction, user ID of the user that removes the reaction, and the removal operation).

    \`\`\`objc
    // Remove the reaction.
    [AgoraChatClient.sharedClient.chatManager removeReaction:"reaction" fromMessage:"messageId" completion:^(AgoraChatError * _Nullable error) {
      refreshBlock(error, changeSelectedStateHandle);
    }];
    // Listen for reaction state change.
    - (void)messageReactionDidChange:(NSArray *)changes
    {

    }
    \`\`\`

    ### Retrieve a list of reactions [#retrieve-a-list-of-reactions-1]

    Call \`getReactionList\` to retrieve a list of reactions of messages from the server. This method also returns the basic information of the reactions, including the content of the reaction, the number of users that added or removed the reaction, and a list of the first three user IDs that added or removed the reaction.

    \`\`\`objc
    [AgoraChatClient.sharedClient.chatManager getReactionList:@["messageId"] groupId:@"groupId" chatType:AgoraChatTypeChat completion:^(NSDictionary * _Nonnull, AgoraChatError * _Nullable) {

    }];
    \`\`\`

    ### Retrieve the details of the reaction [#retrieve-the-details-of-the-reaction-1]

    Call \`getReactionDetail\` to get the detailed information of the reaction from the server. The detailed information includes the reaction content, the number of users that added or removed the reaction, and the complete list of user IDs that added or removed the reaction.

    \`\`\`objc
    [AgoraChatClient.sharedClient.chatManager getReactionDetail:@"messageId" reaction:@"reaction" cursor:nil pageSize:30 completion:^(AgoraChatMessageReaction * _Nonnull, NSString * _Nullable cursor, AgoraChatError * _Nullable) {

    }];
    \`\`\`

    ## Next steps [#next-steps-1]

    Reactions are also supported in the [Chat UIKit](../../get-started-uikit), which contains a wider range of emojis. You can also use the Chat SDK to implement reactions in your project.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    Emojis are widely used in real-time chats because they allow users to express their feelings in a direct and vivid way. In Chat, "reactions" allow users to quickly react to a message using emojis in one-to-one chats and chat groups. In group chats, reactions can also be used to cast a vote, for example, by calculating the number of different emojis attached to the message.

    The following illustration shows the implementation of adding a reaction to a message, how a conversation looks with reactions, and what retrieving a list of reactions (with related information) looks like.

    ![1655257598155](https://web-cdn.agora.io/docs-files/1655257598155)

    ## Understand the tech [#understand-the-tech-2]

    The SDK provides the following APIs to implement reaction functionalities:

    * \`addReaction\`: Adds a reaction to the specified message.
    * \`removeReaction\`: Removes the reaction from the specified message.
    * \`fetchReactionList\`: Retrieves a list of reactions from the server.
    * \`fetchReactionDetail\`: Retrieves the details of the reaction from the server.

    ## Prerequisites [#prerequisites-2]

    Before proceeding, ensure that your environment meets the following requirements:

    * The project integrates a version of the Chat SDK later than v1.0.3 and has implemented the [basic real-time chat functionalities](../../get-started-sdk).
    * You understand the API call frequency limit as described in [Limitations](/en/api-reference/api-ref/im/limitations).

    <CalloutContainer type="info">
      <CalloutDescription>
        The reaction feature is supported by all types of [Pricing Plans](../../reference/pricing-plan-details) and is enabled by default once you have enabled Chat in [Agora Console](https://console.agora.io/).
      </CalloutDescription>
    </CalloutContainer>

    ## Implementation [#implementation-2]

    This section introduces how to implement reaction functionalities in your project.

    ### Add a reaction [#add-a-reaction-2]

    Call \`addReaction\` to add a reaction to the specified message. In a one-to-one conversation, the peer user receives the \`onMessageReactionDidChange\` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (reaction ID, user ID of the user that adds the reaction, and the addition operation).

    For a reaction, a user can add only once, or the error 1301 is reported for repeated addition.

    \`\`\`dart
    // reaction: Reaction ID
    // msgId: The message ID
    // Adds a reaction to the specified message
    ChatClient.getInstance()
      .chatManager.addReaction(reaction, msgId)
      .then((result) => {
        console.log("success: ", result);
      })
      .catch((error) => {
        console.log("fail: ", error);
      });
    \`\`\`

    ### Remove a reaction [#remove-a-reaction-2]

    Call \`removeReaction\` to remove the specified reaction. In a one-to-one conversation, the peer user receives the \`onMessageReactionDidChange\` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (ID of the removed reaction, user ID of the user that removes the reaction, and the removal operation).

    \`\`\`dart
    try {
      await ChatClient.getInstance.chatManager.addReaction(
        messageId: messageId,
        reaction: reaction,
      );
    } on ChatError catch (e) {
    }
    \`\`\`

    ### Retrieve a list of reactions [#retrieve-a-list-of-reactions-2]

    Call \`getReactionList\` to retrieve a list of reactions of messages from the server. This method also returns the basic information of the reactions, including the content of the reaction, the number of users that added or removed the reaction, and a list of the first three user IDs that added or removed the reaction.

    \`\`\`dart
    try {
      Map> map =
          await ChatClient.getInstance.chatManager.fetchReactionList(
        messageIds: messageIds,
        chatType: ChatType.GroupChat,
        groupId: groupId,
      );
    } on ChatError catch (e) {
    }
    \`\`\`

    You can also use the \`reactionList\` member in \`ChatMessage\` to quickly retrieve the reactions of the specified message.

    \`\`\`dart
    try {
        List reactions = await msg.reactionList();
    }on ChatError catch (e) {
    }
    \`\`\`

    ### Retrieve the details of the reaction [#retrieve-the-details-of-the-reaction-2]

    Call \`fetchReactionDetail\` to get the detailed information of the reaction from the server. The detailed information includes the reaction content, the number of users that added or removed the reaction, and the complete list of user IDs that added or removed the reaction.

    \`\`\`dart
    try {
      ChatCursorResult result =
          await ChatClient.getInstance.chatManager.fetchReactionDetail(
        messageId: messageId,
        reaction: reaction,
      );
    } on ChatError catch (e) {
    }
    \`\`\`

    ### Listen for reaction status [#listen-for-reaction-status]

    Use \`onMessageReactionDidChange\` to listen for changes or status of the reaction.

    \`\`\`dart
        // Adds the chat event handler.
        ChatClient.getInstance.chatManager.addEventHandler(
          "UNIQUE_HANDLER_ID",
          ChatEventHandler(
            onMessageReactionDidChange: (events) {},
          ),
        );

        ...

        // Removes the chat event handler.
        ChatClient.getInstance.chatManager.removeEventHandler("UNIQUE_HANDLER_ID");
    }
    \`\`\`

    ## Next steps [#next-steps-2]

    Reactions are also supported in the [Chat UIKit](../../get-started-uikit), which contains a wider range of emojis. You can also use the Chat SDK to implement reactions in your project.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    Emojis are widely used in real-time chats because they allow users to express their feelings in a direct and vivid way. In Chat, "reactions" allow users to quickly react to a message using emojis in one-to-one chats and chat groups. In group chats, reactions can also be used to cast a vote, for example, by calculating the number of different emojis attached to the message.

    The following illustration shows the implementation of adding a reaction to a message, how a conversation looks with reactions, and what retrieving a list of reactions (with related information) looks like.

    ![1655257598155](https://web-cdn.agora.io/docs-files/1655257598155)

    ## Understand the tech [#understand-the-tech-3]

    The SDK provides the following APIs to implement reaction functionalities:

    * \`addReaction\`: Adds a reaction to the specified message.
    * \`removeReaction\`: Removes the reaction from the specified message.
    * \`getReactionList\`: Retrieves a list of reactions from the server.
    * \`fetchReactionDetail\`: Retrieves the details of the reaction from the server.

    ## Prerequisites [#prerequisites-3]

    Before proceeding, ensure that your environment meets the following requirements:

    * The project integrates a version of the Chat SDK later than v1.0.3 and has implemented the [basic real-time chat functionalities](../../get-started-sdk).
    * You understand the API call frequency limit as described in [Limitations](/en/api-reference/api-ref/im/limitations).

    <CalloutContainer type="info">
      <CalloutDescription>
        The reaction feature is supported by all types of [Pricing Plans](../../reference/pricing-plan-details) and is enabled by default once you have enabled Chat in [Agora Console](https://console.agora.io/).
      </CalloutDescription>
    </CalloutContainer>

    ## Implementation [#implementation-3]

    This section introduces how to implement reaction functionalities in your project.

    ### Add a reaction [#add-a-reaction-3]

    Call \`addReaction\` to add a reaction to the specified message. In a one-to-one conversation, the peer user receives the \`onMessageReactionDidChange\` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (reaction ID, user ID of the user that adds the reaction, and the addition operation).

    For a reaction, a user can add only once, or the error 1301 is reported for repeated addition.

    \`\`\`typescript
    // reaction: Reaction ID
    // msgId: The message ID
    // Adds a reaction to the specified message
    ChatClient.getInstance()
      .chatManager.addReaction(reaction, msgId)
      .then((result) => {
        console.log("success: ", result);
      })
      .catch((error) => {
        console.log("fail: ", error);
      });
    \`\`\`

    ### Remove a reaction [#remove-a-reaction-3]

    Call \`removeReaction\` to remove the specified reaction. You can also listen for the reaction change in \`onMessageReactionDidChange\`. In a one-to-one conversation, the peer user receives the \`onMessageReactionDidChange\` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (ID of the removed reaction, user ID of the user that removes the reaction, and the removal operation).

    \`\`\`typescript
    // reaction: Reaction ID
    // msgId: The message ID
    ChatClient.getInstance()
      .chatManager.removeReaction(reaction, msgId)
      .then((result) => {
        console.log("success: ", result);
      })
      .catch((error) => {
        console.log("fail: ", error);
      });
    \`\`\`

    ### Retrieve a list of reactions [#retrieve-a-list-of-reactions-3]

    Call \`getReactionList\` to retrieve a list of reactions of messages from the server. This method also returns the basic information of the reactions, including the content of the reaction, the number of users that added or removed the reaction, and a list of the first three user IDs that added or removed the reaction.

    \`\`\`typescript
    // msgId: The message ID
    ChatClient.getInstance()
      .chatManager.getReactionList(msgId)
      .then((result) => {
        console.log("success: ", result);
      })
      .catch((error) => {
        console.log("fail: ", error);
      });
    \`\`\`

    You can also use the \`reactionList\` member in \`ChatMessage\` to quickly retrieve the reactions of the specified message.

    \`\`\`typescript
    const msg = ChatMessage.createTextMessage(targetId, content);
    msg.reactionList
      .then((result) => {
        console.log("success: ", result);
      })
      .catch((error) => {
        console.log("fail: ", error);
      });
    \`\`\`

    ### Retrieve the details of the reaction [#retrieve-the-details-of-the-reaction-3]

    Call \`fetchReactionDetail\` to get the detailed information of the reaction from the server. The detailed information includes the reaction content, the number of users that added or removed the reaction, and the complete list of user IDs that added or removed the reaction.

    \`\`\`typescript
    // reaction: Reaction ID
    // msgId: The message ID
    // pageSize: The number of reactions returned for each method call. The value range is [1,50]
    // cursor: The position from which to get the reaction detail. Pass \`null\` or an empty string for the first method call.
    ChatClient.getInstance()
      .chatManager.fetchReactionDetail(msgId, reaction, cursor, pageSize)
      .then((result) => {
        console.log("success: ", result);
      })
      .catch((error) => {
        console.log("fail: ", error);
      });
    \`\`\`

    ### Listen for reaction status [#listen-for-reaction-status-1]

    Use \`onMessageReactionDidChange\` to listen for changes or status of the reaction.

    \`\`\`typescript
    // listens for reaction updates
    class ChatMessageEvent implements ChatMessageEventListener {
      onMessageReactionDidChange(_list: ChatMessageReactionEvent[]): void {
        throw new Error("Method not implemented.");
      }
      // Add other callbacks according to your business logic
    }
    // Adds the message status listener
    const listener = new ChatMessageEvent();
    ChatClient.getInstance().chatManager.addMessageListener(listener);
    // Removes the listener
    ChatClient.getInstance().chatManager.removeMessageListener(listener);
    // Removes all listeners
    ChatClient.getInstance().chatManager.removeAllMessageListener();
    \`\`\`

    ## Next steps [#next-steps-3]

    Reactions are also supported in the [Chat UIKit](../../get-started-uikit), which contains a wider range of emojis. You can also use the Chat SDK to implement reactions in your project.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    Emojis are widely used in real-time chats because they allow users to express their feelings in a direct and vivid way. In Chat, "reactions" allow users to quickly react to a message using emojis in one-to-one chats and chat groups. In group chats, reactions can also be used to cast a vote, for example, by calculating the number of different emojis attached to the message.

    The following illustration shows the implementation of adding a reaction to a message, how a conversation looks with reactions, and what retrieving a list of reactions (with related information) looks like.

    ![1655257598155](https://web-cdn.agora.io/docs-files/1655257598155)

    ## Understand the tech [#understand-the-tech-4]

    The SDK provides the following APIs to implement reaction functionalities:

    * \`AddReaction\`: Adds a reaction to the specified message.
    * \`RemoveReaction\`: Removes the reaction from the specified message.
    * \`GetReactionList\`: Retrieves a list of reactions from the server.
    * \`GetReactionDetail\`: Retrieves the details of the reaction from the server.
    * \`Message.ReactionList\`: Retrieves a list of reactions from the Message object.

    ## Prerequisites [#prerequisites-4]

    Before proceeding, ensure that your environment meets the following requirements:

    * The project integrates a version of the Chat SDK later than v1.0.3 and has implemented the [basic real-time chat functionalities](../../get-started-sdk).
    * You understand the API call frequency limit as described in [Limitations](/en/api-reference/api-ref/im/limitations).

    <CalloutContainer type="info">
      <CalloutDescription>
        The reaction feature is supported by all types of [Pricing Plans](../../reference/pricing-plan-details) and is enabled by default once you have enabled Chat in [Agora Console](https://console.agora.io/).
      </CalloutDescription>
    </CalloutContainer>

    ## Implementation [#implementation-4]

    This section introduces how to implement reaction functionalities in your project.

    ### Add a reaction [#add-a-reaction-4]

    Call \`AddReaction\` to add a reaction to the specified message. In a one-to-one conversation, the peer user receives the \`MessageReactionDidChange\` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (reaction ID, user ID of the user that adds the reaction, and the addition operation).

    For a reaction, a user can add only once, or the error 1301 is reported for repeated addition.

    \`\`\`csharp
    // Adds a reaction to the specified message
    SDKClient.Instance.ChatManager.AddReaction(msg_id, reaction, new CallBack(
         onSuccess: () =>
         {
             Debug.Log($"AddReaction success.");
         },
         onError: (code, desc) =>
         {
             Debug.Log($"AddReaction failed, code:{code}, desc:{desc}");
         }
    ));

    // Listens for the reaction changes.
    class ReactionManagerDelegate : IReactionManagerDelegate
    {
        public void MessageReactionDidChange(List list)
        {
            if (list.Count == 0) return;
            foreach(var it in list)
            {
                // Add the iteration logic here.
            }
        }
    }

    // Adds a listener for the reaction.
    ReactionManagerDelegate reactionManagerDelegate = new ReactionManagerDelegate();
    SDKClient.Instance.ChatManager.AddReactionManagerDelegate(reactionManagerDelegate);
    \`\`\`

    ### Remove a reaction [#remove-a-reaction-4]

    Call \`RemoveReaction\` to remove the specified reaction. In a one-to-one conversation, the peer user receives the \`MessageReactionDidChange\` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (ID of the removed reaction, user ID of the user that removes the reaction, and the removal operation).

    \`\`\`csharp
    // Removes the reaction.
    SDKClient.Instance.ChatManager.RemoveReaction(msg_id, reaction, new CallBack(
         onSuccess: () =>
         {
             Debug.Log($"RemoveReaction success.");
         },
         onError: (code, desc) =>
         {
             Debug.Log($"RemoveReaction failed, code:{code}, desc:{desc}");
         }
    ));

    // Listens for the reaction changes.
    class ReactionManagerDelegate : IReactionManagerDelegate
    {
        public void MessageReactionDidChange(List list)
        {
            if (list.Count == 0) return;
            foreach(var it in list)
            {
                // Add the iteration logic here.
            }
        }
    }

    // Adds a listener for the reaction.
    ReactionManagerDelegate reactionManagerDelegate = new ReactionManagerDelegate();
    SDKClient.Instance.ChatManager.AddReactionManagerDelegate(reactionManagerDelegate);
    \`\`\`

    ### Retrieve a list of reactions [#retrieve-a-list-of-reactions-4]

    Call \`GetReactionList\` to retrieve a list of reactions of messages from the server. This method also returns the basic information of the reactions, including the content of the reaction, the number of users that added or removed the reaction, and a list of the first three user IDs that added or removed the reaction.

    \`\`\`csharp
    SDKClient.Instance.ChatManager.GetReactionList(messageIdList, chatType, groupId, new ValueCallBack>>(
    onSuccess: (dict) =>
    {
        // Iterates through the returned reaction dictionary.
        foreach (var it in dict)
        {
            // Iterates each list of reaction in the dictionary.
            List rl = it.Value;
            foreach (var lit in rl)
            {
                // Handles each reaction.
            }
        }
    },
    onError: (code, desc) =>
    {
        Debug.Log($"GetReactionList failed, code:{code}, desc:{desc}");
    }
    ));
    \`\`\`

    ### Retrieve the details of the reaction [#retrieve-the-details-of-the-reaction-4]

    Call \`GetReactionDetail\` to get the detailed information of the reaction from the server. The detailed information includes the reaction content, the number of users that added or removed the reaction, and the complete list of user IDs that added or removed the reaction.

    \`\`\`csharp
    SDKClient.Instance.ChatManager.GetReactionDetail(msg_id, reaction, cursor, pageSize, new ValueCallBack>(
    onSuccess: (ret) =>
    {
        Debug.Log($"GetReactionDetail success");
        if (ret.Data.Count > 0)
        {
            MessageReaction mr = ret.Data[0];
            // Handles the retrieved reaction.
        }
    },
    onError: (code, desc) =>
    {
        Debug($"GetReactionDetail failed, code:{code}, desc:{desc}");
    }
    ));
    \`\`\`

    ## Next steps [#next-steps-4]

    Reactions are also supported in the [Chat UIKit](../../get-started-uikit), which contains a wider range of emojis. You can also use the Chat SDK to implement reactions in your project.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    Emojis are widely used in real-time chats because they allow users to express their feelings in a direct and vivid way. In Chat, "reactions" allow users to quickly react to a message using emojis in one-to-one chats and chat groups. In group chats, reactions can also be used to cast a vote, for example, by calculating the number of different emojis attached to the message.

    The following illustration shows the implementation of adding a reaction to a message, how a conversation looks with reactions, and what retrieving a list of reactions (with related information) looks like.

    ![1655257598155](https://web-cdn.agora.io/docs-files/1655257598155)

    ## Understand the tech [#understand-the-tech-5]

    The SDK provides the following APIs to implement reaction functionalities:

    * \`AddReaction\`: Adds a reaction to the specified message.
    * \`RemoveReaction\`: Removes the reaction from the specified message.
    * \`GetReactionList\`: Retrieves a list of reactions from the server.
    * \`GetReactionDetail\`: Retrieves the details of the reaction from the server.
    * \`Message.ReactionList\`: Retrieves a list of reactions from the Message object.

    ## Prerequisites [#prerequisites-5]

    Before proceeding, ensure that your environment meets the following requirements:

    * The project integrates a version of the Chat SDK later than v1.0.3 and has implemented the [basic real-time chat functionalities](../../get-started-sdk).
    * You understand the API call frequency limit as described in [Limitations](/en/api-reference/api-ref/im/limitations).

    <CalloutContainer type="info">
      <CalloutDescription>
        The reaction feature is supported by all types of [Pricing Plans](../../reference/pricing-plan-details) and is enabled by default once you have enabled Chat in [Agora Console](https://console.agora.io/).
      </CalloutDescription>
    </CalloutContainer>

    ## Implementation [#implementation-5]

    This section introduces how to implement reaction functionalities in your project.

    ### Add a reaction [#add-a-reaction-5]

    Call \`AddReaction\` to add a reaction to the specified message. In a one-to-one conversation, the peer user receives the \`MessageReactionDidChange\` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (reaction ID, user ID of the user that adds the reaction, and the addition operation).

    For a reaction, a user can add only once, or the error 1301 is reported for repeated addition.

    \`\`\`csharp
    // Adds a reaction to the specified message
    SDKClient.Instance.ChatManager.AddReaction(msg_id, reaction, new CallBack(
         onSuccess: () =>
         {
             Debug.Log($"AddReaction success.");
         },
         onError: (code, desc) =>
         {
             Debug.Log($"AddReaction failed, code:{code}, desc:{desc}");
         }
    ));

    // Listens for the reaction changes.
    class ReactionManagerDelegate : IReactionManagerDelegate
    {
        public void MessageReactionDidChange(List list)
        {
            if (list.Count == 0) return;
            foreach(var it in list)
            {
                // Add the iteration logic here.
            }
        }
    }

    // Adds a listener for the reaction.
    ReactionManagerDelegate reactionManagerDelegate = new ReactionManagerDelegate();
    SDKClient.Instance.ChatManager.AddReactionManagerDelegate(reactionManagerDelegate);
    \`\`\`

    ### Remove a reaction [#remove-a-reaction-5]

    Call \`RemoveReaction\` to remove the specified reaction. In a one-to-one conversation, the peer user receives the \`MessageReactionDidChange\` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (ID of the removed reaction, user ID of the user that removes the reaction, and the removal operation).

    \`\`\`csharp
    // Removes the reaction.
    SDKClient.Instance.ChatManager.RemoveReaction(msg_id, reaction, new CallBack(
         onSuccess: () =>
         {
             Debug.Log($"RemoveReaction success.");
         },
         onError: (code, desc) =>
         {
             Debug.Log($"RemoveReaction failed, code:{code}, desc:{desc}");
         }
    ));

    // Listens for the reaction changes.
    class ReactionManagerDelegate : IReactionManagerDelegate
    {
        public void MessageReactionDidChange(List list)
        {
            if (list.Count == 0) return;
            foreach(var it in list)
            {
                // Add the iteration logic here.
            }
        }
    }

    // Adds a listener for the reaction.
    ReactionManagerDelegate reactionManagerDelegate = new ReactionManagerDelegate();
    SDKClient.Instance.ChatManager.AddReactionManagerDelegate(reactionManagerDelegate);
    \`\`\`

    ### Retrieve a list of reactions [#retrieve-a-list-of-reactions-5]

    Call \`GetReactionList\` to retrieve a list of reactions of messages from the server. This method also returns the basic information of the reactions, including the content of the reaction, the number of users that added or removed the reaction, and a list of the first three user IDs that added or removed the reaction.

    \`\`\`csharp
    SDKClient.Instance.ChatManager.GetReactionList(messageIdList, chatType, groupId, new ValueCallBack>>(
    onSuccess: (dict) =>
    {
        // Iterates through the returned reaction dictionary.
        foreach (var it in dict)
        {
            // Iterates each list of reaction in the dictionary.
            List rl = it.Value;
            foreach (var lit in rl)
            {
                // Handles each reaction.
            }
        }
    },
    onError: (code, desc) =>
    {
        Debug.Log($"GetReactionList failed, code:{code}, desc:{desc}");
    }
    ));
    \`\`\`

    ### Retrieve the details of the reaction [#retrieve-the-details-of-the-reaction-5]

    Call \`GetReactionDetail\` to get the detailed information of the reaction from the server. The detailed information includes the reaction content, the number of users that added or removed the reaction, and the complete list of user IDs that added or removed the reaction.

    \`\`\`csharp
    SDKClient.Instance.ChatManager.GetReactionDetail(msg_id, reaction, cursor, pageSize, new ValueCallBack>(
    onSuccess: (ret) =>
    {
        Debug.Log($"GetReactionDetail success");
        if (ret.Data.Count > 0)
        {
            MessageReaction mr = ret.Data[0];
            // Handles the retrieved reaction.
        }
    },
    onError: (code, desc) =>
    {
        Debug($"GetReactionDetail failed, code:{code}, desc:{desc}");
    }
    ));
    \`\`\`

    ## Next steps [#next-steps-5]

    Reactions are also supported in the [Chat UIKit](../../get-started-uikit), which contains a wider range of emojis. You can also use the Chat SDK to implement reactions in your project.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    Emojis are widely used in real-time chats because they allow users to express their feelings in a direct and vivid way. In Chat, "reactions" allow users to quickly react to a message using emojis in one-to-one chats and chat groups. In group chats, reactions can also be used to cast a vote, for example, by calculating the number of different emojis attached to the message.

    The following illustration shows the implementation of adding a reaction to a message, how a conversation looks with reactions, and what retrieving a list of reactions (with related information) looks like.

    * Adding a reaction

      ![1655257804635](https://web-cdn.agora.io/docs-files/1655257804635)

    * Retrieving a list of reactions

      ![1655257845986](https://web-cdn.agora.io/docs-files/1655257845986)

    This page shows how to use the Chat SDK to implement reactions in your project.

    ## Understand the tech [#understand-the-tech-6]

    The SDK provides the following APIs to implement reaction functionalities:

    * \`addReaction\`: Adds a reaction to the specified message.
    * \`deleteReaction\`: Removes the reaction from the specified message.
    * \`getReactionlist\`: Retrieves a list of reactions from the server.
    * \`getReactionDetail\`: Retrieves the details of the reaction from the server.
    * \`getHistoryMessages\`：Retrieves the reactions in historical messages from the server.

    ## Prerequisites [#prerequisites-6]

    Before proceeding, ensure that your environment meets the following requirements:

    * The project integrates a version of the Chat SDK later than v1.0.3 and has implemented the [basic real-time chat functionalities](../../get-started-sdk).
    * You understand the API call frequency limit as described in [Limitations](/en/api-reference/api-ref/im/limitations).

    <CalloutContainer type="info">
      <CalloutDescription>
        The reaction feature is supported by all types of [Pricing Plans](../../reference/pricing-plan-details) and is enabled by default once you have enabled Chat in [Agora Console](https://console.agora.io/).
      </CalloutDescription>
    </CalloutContainer>

    ## Implementation [#implementation-6]

    This section introduces how to implement reaction functionalities in your project.

    ### Add a reaction [#add-a-reaction-6]

    Call \`addReaction\` to add a reaction to the specified message. In a one-to-one conversation, the peer user receives the \`onReactionChange\` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (reaction ID, user ID of the user that adds the reaction, and the addition operation).

    For a reaction, a user can add only once, or the error 1101 is reported for repeated addition.

    \`\`\`javascript
    // Add a reaction
    chatClient.addReaction({ messageId: "messageId", reaction: "reaction" });
    // Listen for the state of the reaction.
    chatClient.addEventHandler("handlerId", {
      onReactionChange: (reactionMsg) => {
        console.log(reactionMsg);
      },
    });
    \`\`\`

    ### Remove a reaction [#remove-a-reaction-6]

    Call \`deleteReaction\` to remove the specified reaction. In a one-to-one conversation, the peer user receives the \`onReactionChanged\` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (ID of the removed reaction, user ID of the user that removes the reaction, and the removal operation).

    \`\`\`javascript
    // Remove the reaction.
    chatClient.deleteReaction({ messageId: "messageId", reaction: "reaction" });
    // Listen for reaction state change.
    chatClient.addEventHandler("handlerId", {
      onReactionChange: (reactionMsg) => {
        console.log(reactionMsg);
      },
    });
    \`\`\`

    ### Retrieve a list of reactions [#retrieve-a-list-of-reactions-6]

    Call \`getReactionlist\` to retrieve a list of reactions of messages from the server. This method also returns the basic information of the reactions, including the content of the reaction, the number of users that added or removed the reaction, and a list of the first three user IDs that added or removed the reaction.

    \`\`\`javascript
    chatClient
      .getReactionlist({ chatType: "singleChat", messageId: "messageId" })
      .then((res) => {
        console.log(res);
      });
    \`\`\`

    ### Retrieve the details of the reaction [#retrieve-the-details-of-the-reaction-6]

    Call \`getReactionDetail\` to get the detailed information of the reaction from the server. The detailed information includes the reaction content, the number of users that added or removed the reaction, and the complete list of user IDs that added or removed the reaction.

    \`\`\`javascript
    chatClient
      .getReactionDetail({
        messageId: "messageId",
        reaction: "reaction",
        cursor: null,
        pageSize: 20,
      })
      .then((res) => {
        console.log(res);
      });
    \`\`\`

    ### Retrieve the reaction in the historical message from the server [#retrieve-the-reaction-in-the-historical-message-from-the-server]

    When calling \`getHistoryMessages\` to retrieve historical messages from the server, if the message has a reaction attached to it, the retrieved message body also contains the information of the reaction.

    \`\`\`javascript
    chatClient
      .getHistoryMessages({
        targetId: "targetId",
        chatType: "groupChat",
        pageSize: 20,
      })
      .then((messages) => {
        console.log(messages);
      });
    \`\`\`

    ## Next steps [#next-steps-6]

    Reactions are also supported in the [Chat UIKit](../../get-started-uikit), which contains a wider range of emojis. You can also use the Chat SDK to implement reactions in your project.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: 'Emojis are widely used in real-time chats because they allow users to express their feelings in a direct and vivid way. In Chat, "reactions" allow users to quickly react to a message using emojis in one-to-one chats and chat groups. In group chats, reactions can also be used to cast a vote, for example, by calculating the number of different emojis attached to the message.'
  }, {
    heading: undefined,
    content: "The following illustration shows the implementation of adding a reaction to a message, how a conversation looks with reactions, and what retrieving a list of reactions (with related information) looks like."
  }, {
    heading: "understand-the-tech",
    content: "The SDK provides the following APIs to implement reaction functionalities:"
  }, {
    heading: "understand-the-tech",
    content: "`asyncAddReaction`: Adds a reaction to the specified message."
  }, {
    heading: "understand-the-tech",
    content: "`asyncRemoveReaction`: Removes the reaction from the specified message."
  }, {
    heading: "understand-the-tech",
    content: "`asyncGetReactionList`: Retrieves a list of reactions from the server."
  }, {
    heading: "understand-the-tech",
    content: "`asyncGetReactionDetail`: Retrieves the details of the reaction from the server."
  }, {
    heading: "understand-the-tech",
    content: "`ChatMessage.getMessageReaction`: Retrieves a list of reactions from the `ChatMessage` objects in the local database."
  }, {
    heading: "prerequisites",
    content: "Before proceeding, ensure that your environment meets the following requirements:"
  }, {
    heading: "prerequisites",
    content: "The project integrates a version of the Chat SDK later than v1.0.3 and has implemented the basic real-time chat functionalities."
  }, {
    heading: "prerequisites",
    content: "You understand the API call frequency limit as described in Limitations."
  }, {
    heading: "prerequisites",
    content: "The reaction feature is supported by all types of Pricing Plans and is enabled by default once you have enabled Chat in Agora Console."
  }, {
    heading: "implementation",
    content: "This section introduces how to implement reaction functionalities in your project."
  }, {
    heading: "add-a-reaction",
    content: "Call `asyncAddReaction` to add a reaction to the specified message. In a one-to-one conversation, the peer user receives the `onReactionChanged` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (ID of the new reaction, user ID of the user that adds the reaction, and the addition operation)."
  }, {
    heading: "add-a-reaction",
    content: "For a reaction, a user can add only once, or the error 1301 is reported for repeated addition."
  }, {
    heading: "remove-a-reaction",
    content: "Call `asyncRemoveReaction` to remove the specified reaction. In a one-to-one conversation, the peer user receives the `onReactionChanged` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (ID of the removed reaction, user ID of the user that removes the reaction, and the removal operation)."
  }, {
    heading: "retrieve-a-list-of-reactions",
    content: "Call `asyncGetReactionList` to retrieve a list of reactions of messages from the server. This method also returns the basic information of the reactions, including the content of the reaction, the number of users that added or removed the reaction, and a list of the first three user IDs that added or removed the reaction."
  }, {
    heading: "retrieve-the-details-of-the-reaction",
    content: "Call `asyncGetReactionDetail` to get the detailed information of the reaction from the server. The detailed information includes the reaction content, the number of users that added or removed the reaction, and the complete list of user IDs that added or removed the reaction."
  }, {
    heading: "next-steps",
    content: "Reactions are also supported in the Chat UIKit, which contains a wider range of emojis. You can also use the Chat SDK to implement reactions in your project."
  }, {
    heading: "next-steps",
    content: 'Emojis are widely used in real-time chats because they allow users to express their feelings in a direct and vivid way. In Chat, "reactions" allow users to quickly react to a message using emojis in one-to-one chats and chat groups. In group chats, reactions can also be used to cast a vote, for example, by calculating the number of different emojis attached to the message.'
  }, {
    heading: "next-steps",
    content: "The following illustration shows the implementation of adding a reaction to a message, how a conversation looks with reactions, and what retrieving a list of reactions (with related information) looks like."
  }, {
    heading: "understand-the-tech-1",
    content: "The SDK provides the following APIs to implement reaction functionalities:"
  }, {
    heading: "understand-the-tech-1",
    content: "`addReaction`: Adds a reaction to the specified message."
  }, {
    heading: "understand-the-tech-1",
    content: "`removeReaction`: Removes the reaction from the specified message."
  }, {
    heading: "understand-the-tech-1",
    content: "`getReactionList`: Retrieves a list of reactions from the server."
  }, {
    heading: "understand-the-tech-1",
    content: "`getReactionDetail`: Retrieves the details of the reaction from the server."
  }, {
    heading: "understand-the-tech-1",
    content: "`AgoraChatMessage.reactionlist`: Retrieves a list of reactions from the `AgoraChatMessage` objects in the local database."
  }, {
    heading: "prerequisites-1",
    content: "Before proceeding, ensure that your environment meets the following requirements:"
  }, {
    heading: "prerequisites-1",
    content: "The project integrates a version of the Chat SDK later than v1.0.3 and has implemented the basic real-time chat functionalities."
  }, {
    heading: "prerequisites-1",
    content: "You understand the API call frequency limit as described in Limitations."
  }, {
    heading: "prerequisites-1",
    content: "The reaction feature is supported by all types of Pricing Plans and is enabled by default once you have enabled Chat in Agora Console."
  }, {
    heading: "implementation-1",
    content: "This section introduces how to implement reaction functionalities in your project."
  }, {
    heading: "add-a-reaction-1",
    content: "Call `addReaction` to add a reaction to the specified message. In a one-to-one conversation, the peer user receives the `messageReactionDidChange` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (reaction ID, user ID of the user that adds the reaction, and the addition operation)."
  }, {
    heading: "add-a-reaction-1",
    content: "For a reaction, a user can add only once, or the error 1301 is reported for repeated addition."
  }, {
    heading: "remove-a-reaction-1",
    content: "Call `removeReaction` to remove the specified reaction. In a one-to-one conversation, the peer user receives the `messageReactionDidChange` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (ID of the removed reaction, user ID of the user that removes the reaction, and the removal operation)."
  }, {
    heading: "retrieve-a-list-of-reactions-1",
    content: "Call `getReactionList` to retrieve a list of reactions of messages from the server. This method also returns the basic information of the reactions, including the content of the reaction, the number of users that added or removed the reaction, and a list of the first three user IDs that added or removed the reaction."
  }, {
    heading: "retrieve-the-details-of-the-reaction-1",
    content: "Call `getReactionDetail` to get the detailed information of the reaction from the server. The detailed information includes the reaction content, the number of users that added or removed the reaction, and the complete list of user IDs that added or removed the reaction."
  }, {
    heading: "next-steps-1",
    content: "Reactions are also supported in the Chat UIKit, which contains a wider range of emojis. You can also use the Chat SDK to implement reactions in your project."
  }, {
    heading: "next-steps-1",
    content: 'Emojis are widely used in real-time chats because they allow users to express their feelings in a direct and vivid way. In Chat, "reactions" allow users to quickly react to a message using emojis in one-to-one chats and chat groups. In group chats, reactions can also be used to cast a vote, for example, by calculating the number of different emojis attached to the message.'
  }, {
    heading: "next-steps-1",
    content: "The following illustration shows the implementation of adding a reaction to a message, how a conversation looks with reactions, and what retrieving a list of reactions (with related information) looks like."
  }, {
    heading: "understand-the-tech-2",
    content: "The SDK provides the following APIs to implement reaction functionalities:"
  }, {
    heading: "understand-the-tech-2",
    content: "`addReaction`: Adds a reaction to the specified message."
  }, {
    heading: "understand-the-tech-2",
    content: "`removeReaction`: Removes the reaction from the specified message."
  }, {
    heading: "understand-the-tech-2",
    content: "`fetchReactionList`: Retrieves a list of reactions from the server."
  }, {
    heading: "understand-the-tech-2",
    content: "`fetchReactionDetail`: Retrieves the details of the reaction from the server."
  }, {
    heading: "prerequisites-2",
    content: "Before proceeding, ensure that your environment meets the following requirements:"
  }, {
    heading: "prerequisites-2",
    content: "The project integrates a version of the Chat SDK later than v1.0.3 and has implemented the basic real-time chat functionalities."
  }, {
    heading: "prerequisites-2",
    content: "You understand the API call frequency limit as described in Limitations."
  }, {
    heading: "prerequisites-2",
    content: "The reaction feature is supported by all types of Pricing Plans and is enabled by default once you have enabled Chat in Agora Console."
  }, {
    heading: "implementation-2",
    content: "This section introduces how to implement reaction functionalities in your project."
  }, {
    heading: "add-a-reaction-2",
    content: "Call `addReaction` to add a reaction to the specified message. In a one-to-one conversation, the peer user receives the `onMessageReactionDidChange` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (reaction ID, user ID of the user that adds the reaction, and the addition operation)."
  }, {
    heading: "add-a-reaction-2",
    content: "For a reaction, a user can add only once, or the error 1301 is reported for repeated addition."
  }, {
    heading: "remove-a-reaction-2",
    content: "Call `removeReaction` to remove the specified reaction. In a one-to-one conversation, the peer user receives the `onMessageReactionDidChange` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (ID of the removed reaction, user ID of the user that removes the reaction, and the removal operation)."
  }, {
    heading: "retrieve-a-list-of-reactions-2",
    content: "Call `getReactionList` to retrieve a list of reactions of messages from the server. This method also returns the basic information of the reactions, including the content of the reaction, the number of users that added or removed the reaction, and a list of the first three user IDs that added or removed the reaction."
  }, {
    heading: "retrieve-a-list-of-reactions-2",
    content: "You can also use the `reactionList` member in `ChatMessage` to quickly retrieve the reactions of the specified message."
  }, {
    heading: "retrieve-the-details-of-the-reaction-2",
    content: "Call `fetchReactionDetail` to get the detailed information of the reaction from the server. The detailed information includes the reaction content, the number of users that added or removed the reaction, and the complete list of user IDs that added or removed the reaction."
  }, {
    heading: "listen-for-reaction-status",
    content: "Use `onMessageReactionDidChange` to listen for changes or status of the reaction."
  }, {
    heading: "next-steps-2",
    content: "Reactions are also supported in the Chat UIKit, which contains a wider range of emojis. You can also use the Chat SDK to implement reactions in your project."
  }, {
    heading: "next-steps-2",
    content: 'Emojis are widely used in real-time chats because they allow users to express their feelings in a direct and vivid way. In Chat, "reactions" allow users to quickly react to a message using emojis in one-to-one chats and chat groups. In group chats, reactions can also be used to cast a vote, for example, by calculating the number of different emojis attached to the message.'
  }, {
    heading: "next-steps-2",
    content: "The following illustration shows the implementation of adding a reaction to a message, how a conversation looks with reactions, and what retrieving a list of reactions (with related information) looks like."
  }, {
    heading: "understand-the-tech-3",
    content: "The SDK provides the following APIs to implement reaction functionalities:"
  }, {
    heading: "understand-the-tech-3",
    content: "`addReaction`: Adds a reaction to the specified message."
  }, {
    heading: "understand-the-tech-3",
    content: "`removeReaction`: Removes the reaction from the specified message."
  }, {
    heading: "understand-the-tech-3",
    content: "`getReactionList`: Retrieves a list of reactions from the server."
  }, {
    heading: "understand-the-tech-3",
    content: "`fetchReactionDetail`: Retrieves the details of the reaction from the server."
  }, {
    heading: "prerequisites-3",
    content: "Before proceeding, ensure that your environment meets the following requirements:"
  }, {
    heading: "prerequisites-3",
    content: "The project integrates a version of the Chat SDK later than v1.0.3 and has implemented the basic real-time chat functionalities."
  }, {
    heading: "prerequisites-3",
    content: "You understand the API call frequency limit as described in Limitations."
  }, {
    heading: "prerequisites-3",
    content: "The reaction feature is supported by all types of Pricing Plans and is enabled by default once you have enabled Chat in Agora Console."
  }, {
    heading: "implementation-3",
    content: "This section introduces how to implement reaction functionalities in your project."
  }, {
    heading: "add-a-reaction-3",
    content: "Call `addReaction` to add a reaction to the specified message. In a one-to-one conversation, the peer user receives the `onMessageReactionDidChange` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (reaction ID, user ID of the user that adds the reaction, and the addition operation)."
  }, {
    heading: "add-a-reaction-3",
    content: "For a reaction, a user can add only once, or the error 1301 is reported for repeated addition."
  }, {
    heading: "remove-a-reaction-3",
    content: "Call `removeReaction` to remove the specified reaction. You can also listen for the reaction change in `onMessageReactionDidChange`. In a one-to-one conversation, the peer user receives the `onMessageReactionDidChange` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (ID of the removed reaction, user ID of the user that removes the reaction, and the removal operation)."
  }, {
    heading: "retrieve-a-list-of-reactions-3",
    content: "Call `getReactionList` to retrieve a list of reactions of messages from the server. This method also returns the basic information of the reactions, including the content of the reaction, the number of users that added or removed the reaction, and a list of the first three user IDs that added or removed the reaction."
  }, {
    heading: "retrieve-a-list-of-reactions-3",
    content: "You can also use the `reactionList` member in `ChatMessage` to quickly retrieve the reactions of the specified message."
  }, {
    heading: "retrieve-the-details-of-the-reaction-3",
    content: "Call `fetchReactionDetail` to get the detailed information of the reaction from the server. The detailed information includes the reaction content, the number of users that added or removed the reaction, and the complete list of user IDs that added or removed the reaction."
  }, {
    heading: "listen-for-reaction-status-1",
    content: "Use `onMessageReactionDidChange` to listen for changes or status of the reaction."
  }, {
    heading: "next-steps-3",
    content: "Reactions are also supported in the Chat UIKit, which contains a wider range of emojis. You can also use the Chat SDK to implement reactions in your project."
  }, {
    heading: "next-steps-3",
    content: 'Emojis are widely used in real-time chats because they allow users to express their feelings in a direct and vivid way. In Chat, "reactions" allow users to quickly react to a message using emojis in one-to-one chats and chat groups. In group chats, reactions can also be used to cast a vote, for example, by calculating the number of different emojis attached to the message.'
  }, {
    heading: "next-steps-3",
    content: "The following illustration shows the implementation of adding a reaction to a message, how a conversation looks with reactions, and what retrieving a list of reactions (with related information) looks like."
  }, {
    heading: "understand-the-tech-4",
    content: "The SDK provides the following APIs to implement reaction functionalities:"
  }, {
    heading: "understand-the-tech-4",
    content: "`AddReaction`: Adds a reaction to the specified message."
  }, {
    heading: "understand-the-tech-4",
    content: "`RemoveReaction`: Removes the reaction from the specified message."
  }, {
    heading: "understand-the-tech-4",
    content: "`GetReactionList`: Retrieves a list of reactions from the server."
  }, {
    heading: "understand-the-tech-4",
    content: "`GetReactionDetail`: Retrieves the details of the reaction from the server."
  }, {
    heading: "understand-the-tech-4",
    content: "`Message.ReactionList`: Retrieves a list of reactions from the Message object."
  }, {
    heading: "prerequisites-4",
    content: "Before proceeding, ensure that your environment meets the following requirements:"
  }, {
    heading: "prerequisites-4",
    content: "The project integrates a version of the Chat SDK later than v1.0.3 and has implemented the basic real-time chat functionalities."
  }, {
    heading: "prerequisites-4",
    content: "You understand the API call frequency limit as described in Limitations."
  }, {
    heading: "prerequisites-4",
    content: "The reaction feature is supported by all types of Pricing Plans and is enabled by default once you have enabled Chat in Agora Console."
  }, {
    heading: "implementation-4",
    content: "This section introduces how to implement reaction functionalities in your project."
  }, {
    heading: "add-a-reaction-4",
    content: "Call `AddReaction` to add a reaction to the specified message. In a one-to-one conversation, the peer user receives the `MessageReactionDidChange` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (reaction ID, user ID of the user that adds the reaction, and the addition operation)."
  }, {
    heading: "add-a-reaction-4",
    content: "For a reaction, a user can add only once, or the error 1301 is reported for repeated addition."
  }, {
    heading: "remove-a-reaction-4",
    content: "Call `RemoveReaction` to remove the specified reaction. In a one-to-one conversation, the peer user receives the `MessageReactionDidChange` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (ID of the removed reaction, user ID of the user that removes the reaction, and the removal operation)."
  }, {
    heading: "retrieve-a-list-of-reactions-4",
    content: "Call `GetReactionList` to retrieve a list of reactions of messages from the server. This method also returns the basic information of the reactions, including the content of the reaction, the number of users that added or removed the reaction, and a list of the first three user IDs that added or removed the reaction."
  }, {
    heading: "retrieve-the-details-of-the-reaction-4",
    content: "Call `GetReactionDetail` to get the detailed information of the reaction from the server. The detailed information includes the reaction content, the number of users that added or removed the reaction, and the complete list of user IDs that added or removed the reaction."
  }, {
    heading: "next-steps-4",
    content: "Reactions are also supported in the Chat UIKit, which contains a wider range of emojis. You can also use the Chat SDK to implement reactions in your project."
  }, {
    heading: "next-steps-4",
    content: 'Emojis are widely used in real-time chats because they allow users to express their feelings in a direct and vivid way. In Chat, "reactions" allow users to quickly react to a message using emojis in one-to-one chats and chat groups. In group chats, reactions can also be used to cast a vote, for example, by calculating the number of different emojis attached to the message.'
  }, {
    heading: "next-steps-4",
    content: "The following illustration shows the implementation of adding a reaction to a message, how a conversation looks with reactions, and what retrieving a list of reactions (with related information) looks like."
  }, {
    heading: "understand-the-tech-5",
    content: "The SDK provides the following APIs to implement reaction functionalities:"
  }, {
    heading: "understand-the-tech-5",
    content: "`AddReaction`: Adds a reaction to the specified message."
  }, {
    heading: "understand-the-tech-5",
    content: "`RemoveReaction`: Removes the reaction from the specified message."
  }, {
    heading: "understand-the-tech-5",
    content: "`GetReactionList`: Retrieves a list of reactions from the server."
  }, {
    heading: "understand-the-tech-5",
    content: "`GetReactionDetail`: Retrieves the details of the reaction from the server."
  }, {
    heading: "understand-the-tech-5",
    content: "`Message.ReactionList`: Retrieves a list of reactions from the Message object."
  }, {
    heading: "prerequisites-5",
    content: "Before proceeding, ensure that your environment meets the following requirements:"
  }, {
    heading: "prerequisites-5",
    content: "The project integrates a version of the Chat SDK later than v1.0.3 and has implemented the basic real-time chat functionalities."
  }, {
    heading: "prerequisites-5",
    content: "You understand the API call frequency limit as described in Limitations."
  }, {
    heading: "prerequisites-5",
    content: "The reaction feature is supported by all types of Pricing Plans and is enabled by default once you have enabled Chat in Agora Console."
  }, {
    heading: "implementation-5",
    content: "This section introduces how to implement reaction functionalities in your project."
  }, {
    heading: "add-a-reaction-5",
    content: "Call `AddReaction` to add a reaction to the specified message. In a one-to-one conversation, the peer user receives the `MessageReactionDidChange` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (reaction ID, user ID of the user that adds the reaction, and the addition operation)."
  }, {
    heading: "add-a-reaction-5",
    content: "For a reaction, a user can add only once, or the error 1301 is reported for repeated addition."
  }, {
    heading: "remove-a-reaction-5",
    content: "Call `RemoveReaction` to remove the specified reaction. In a one-to-one conversation, the peer user receives the `MessageReactionDidChange` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (ID of the removed reaction, user ID of the user that removes the reaction, and the removal operation)."
  }, {
    heading: "retrieve-a-list-of-reactions-5",
    content: "Call `GetReactionList` to retrieve a list of reactions of messages from the server. This method also returns the basic information of the reactions, including the content of the reaction, the number of users that added or removed the reaction, and a list of the first three user IDs that added or removed the reaction."
  }, {
    heading: "retrieve-the-details-of-the-reaction-5",
    content: "Call `GetReactionDetail` to get the detailed information of the reaction from the server. The detailed information includes the reaction content, the number of users that added or removed the reaction, and the complete list of user IDs that added or removed the reaction."
  }, {
    heading: "next-steps-5",
    content: "Reactions are also supported in the Chat UIKit, which contains a wider range of emojis. You can also use the Chat SDK to implement reactions in your project."
  }, {
    heading: "next-steps-5",
    content: 'Emojis are widely used in real-time chats because they allow users to express their feelings in a direct and vivid way. In Chat, "reactions" allow users to quickly react to a message using emojis in one-to-one chats and chat groups. In group chats, reactions can also be used to cast a vote, for example, by calculating the number of different emojis attached to the message.'
  }, {
    heading: "next-steps-5",
    content: "The following illustration shows the implementation of adding a reaction to a message, how a conversation looks with reactions, and what retrieving a list of reactions (with related information) looks like."
  }, {
    heading: "next-steps-5",
    content: "Adding a reaction"
  }, {
    heading: "next-steps-5",
    content: "Retrieving a list of reactions"
  }, {
    heading: "next-steps-5",
    content: "This page shows how to use the Chat SDK to implement reactions in your project."
  }, {
    heading: "understand-the-tech-6",
    content: "The SDK provides the following APIs to implement reaction functionalities:"
  }, {
    heading: "understand-the-tech-6",
    content: "`addReaction`: Adds a reaction to the specified message."
  }, {
    heading: "understand-the-tech-6",
    content: "`deleteReaction`: Removes the reaction from the specified message."
  }, {
    heading: "understand-the-tech-6",
    content: "`getReactionlist`: Retrieves a list of reactions from the server."
  }, {
    heading: "understand-the-tech-6",
    content: "`getReactionDetail`: Retrieves the details of the reaction from the server."
  }, {
    heading: "understand-the-tech-6",
    content: "`getHistoryMessages`：Retrieves the reactions in historical messages from the server."
  }, {
    heading: "prerequisites-6",
    content: "Before proceeding, ensure that your environment meets the following requirements:"
  }, {
    heading: "prerequisites-6",
    content: "The project integrates a version of the Chat SDK later than v1.0.3 and has implemented the basic real-time chat functionalities."
  }, {
    heading: "prerequisites-6",
    content: "You understand the API call frequency limit as described in Limitations."
  }, {
    heading: "prerequisites-6",
    content: "The reaction feature is supported by all types of Pricing Plans and is enabled by default once you have enabled Chat in Agora Console."
  }, {
    heading: "implementation-6",
    content: "This section introduces how to implement reaction functionalities in your project."
  }, {
    heading: "add-a-reaction-6",
    content: "Call `addReaction` to add a reaction to the specified message. In a one-to-one conversation, the peer user receives the `onReactionChange` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (reaction ID, user ID of the user that adds the reaction, and the addition operation)."
  }, {
    heading: "add-a-reaction-6",
    content: "For a reaction, a user can add only once, or the error 1101 is reported for repeated addition."
  }, {
    heading: "remove-a-reaction-6",
    content: "Call `deleteReaction` to remove the specified reaction. In a one-to-one conversation, the peer user receives the `onReactionChanged` event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (ID of the removed reaction, user ID of the user that removes the reaction, and the removal operation)."
  }, {
    heading: "retrieve-a-list-of-reactions-6",
    content: "Call `getReactionlist` to retrieve a list of reactions of messages from the server. This method also returns the basic information of the reactions, including the content of the reaction, the number of users that added or removed the reaction, and a list of the first three user IDs that added or removed the reaction."
  }, {
    heading: "retrieve-the-details-of-the-reaction-6",
    content: "Call `getReactionDetail` to get the detailed information of the reaction from the server. The detailed information includes the reaction content, the number of users that added or removed the reaction, and the complete list of user IDs that added or removed the reaction."
  }, {
    heading: "retrieve-the-reaction-in-the-historical-message-from-the-server",
    content: "When calling `getHistoryMessages` to retrieve historical messages from the server, if the message has a reaction attached to it, the retrieved message body also contains the information of the reaction."
  }, {
    heading: "next-steps-6",
    content: "Reactions are also supported in the Chat UIKit, which contains a wider range of emojis. You can also use the Chat SDK to implement reactions in your project."
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implementation",
    content: "Implementation"
  }, {
    id: "add-a-reaction",
    content: "Add a reaction"
  }, {
    id: "remove-a-reaction",
    content: "Remove a reaction"
  }, {
    id: "retrieve-a-list-of-reactions",
    content: "Retrieve a list of reactions"
  }, {
    id: "retrieve-the-details-of-the-reaction",
    content: "Retrieve the details of the reaction"
  }, {
    id: "next-steps",
    content: "Next steps"
  }, {
    id: "understand-the-tech-1",
    content: "Understand the tech"
  }, {
    id: "prerequisites-1",
    content: "Prerequisites"
  }, {
    id: "implementation-1",
    content: "Implementation"
  }, {
    id: "add-a-reaction-1",
    content: "Add a reaction"
  }, {
    id: "remove-a-reaction-1",
    content: "Remove a reaction"
  }, {
    id: "retrieve-a-list-of-reactions-1",
    content: "Retrieve a list of reactions"
  }, {
    id: "retrieve-the-details-of-the-reaction-1",
    content: "Retrieve the details of the reaction"
  }, {
    id: "next-steps-1",
    content: "Next steps"
  }, {
    id: "understand-the-tech-2",
    content: "Understand the tech"
  }, {
    id: "prerequisites-2",
    content: "Prerequisites"
  }, {
    id: "implementation-2",
    content: "Implementation"
  }, {
    id: "add-a-reaction-2",
    content: "Add a reaction"
  }, {
    id: "remove-a-reaction-2",
    content: "Remove a reaction"
  }, {
    id: "retrieve-a-list-of-reactions-2",
    content: "Retrieve a list of reactions"
  }, {
    id: "retrieve-the-details-of-the-reaction-2",
    content: "Retrieve the details of the reaction"
  }, {
    id: "listen-for-reaction-status",
    content: "Listen for reaction status"
  }, {
    id: "next-steps-2",
    content: "Next steps"
  }, {
    id: "understand-the-tech-3",
    content: "Understand the tech"
  }, {
    id: "prerequisites-3",
    content: "Prerequisites"
  }, {
    id: "implementation-3",
    content: "Implementation"
  }, {
    id: "add-a-reaction-3",
    content: "Add a reaction"
  }, {
    id: "remove-a-reaction-3",
    content: "Remove a reaction"
  }, {
    id: "retrieve-a-list-of-reactions-3",
    content: "Retrieve a list of reactions"
  }, {
    id: "retrieve-the-details-of-the-reaction-3",
    content: "Retrieve the details of the reaction"
  }, {
    id: "listen-for-reaction-status-1",
    content: "Listen for reaction status"
  }, {
    id: "next-steps-3",
    content: "Next steps"
  }, {
    id: "understand-the-tech-4",
    content: "Understand the tech"
  }, {
    id: "prerequisites-4",
    content: "Prerequisites"
  }, {
    id: "implementation-4",
    content: "Implementation"
  }, {
    id: "add-a-reaction-4",
    content: "Add a reaction"
  }, {
    id: "remove-a-reaction-4",
    content: "Remove a reaction"
  }, {
    id: "retrieve-a-list-of-reactions-4",
    content: "Retrieve a list of reactions"
  }, {
    id: "retrieve-the-details-of-the-reaction-4",
    content: "Retrieve the details of the reaction"
  }, {
    id: "next-steps-4",
    content: "Next steps"
  }, {
    id: "understand-the-tech-5",
    content: "Understand the tech"
  }, {
    id: "prerequisites-5",
    content: "Prerequisites"
  }, {
    id: "implementation-5",
    content: "Implementation"
  }, {
    id: "add-a-reaction-5",
    content: "Add a reaction"
  }, {
    id: "remove-a-reaction-5",
    content: "Remove a reaction"
  }, {
    id: "retrieve-a-list-of-reactions-5",
    content: "Retrieve a list of reactions"
  }, {
    id: "retrieve-the-details-of-the-reaction-5",
    content: "Retrieve the details of the reaction"
  }, {
    id: "next-steps-5",
    content: "Next steps"
  }, {
    id: "understand-the-tech-6",
    content: "Understand the tech"
  }, {
    id: "prerequisites-6",
    content: "Prerequisites"
  }, {
    id: "implementation-6",
    content: "Implementation"
  }, {
    id: "add-a-reaction-6",
    content: "Add a reaction"
  }, {
    id: "remove-a-reaction-6",
    content: "Remove a reaction"
  }, {
    id: "retrieve-a-list-of-reactions-6",
    content: "Retrieve a list of reactions"
  }, {
    id: "retrieve-the-details-of-the-reaction-6",
    content: "Retrieve the details of the reaction"
  }, {
    id: "retrieve-the-reaction-in-the-historical-message-from-the-server",
    content: "Retrieve the reaction in the historical message from the server"
  }, {
    id: "next-steps-6",
    content: "Next steps"
  }]
};
export let toc = [{
  depth: 2,
  url: "#understand-the-tech",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#add-a-reaction",
  title: _jsx(_Fragment, {
    children: "Add a reaction"
  })
}, {
  depth: 3,
  url: "#remove-a-reaction",
  title: _jsx(_Fragment, {
    children: "Remove a reaction"
  })
}, {
  depth: 3,
  url: "#retrieve-a-list-of-reactions",
  title: _jsx(_Fragment, {
    children: "Retrieve a list of reactions"
  })
}, {
  depth: 3,
  url: "#retrieve-the-details-of-the-reaction",
  title: _jsx(_Fragment, {
    children: "Retrieve the details of the reaction"
  })
}, {
  depth: 2,
  url: "#next-steps",
  title: _jsx(_Fragment, {
    children: "Next steps"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-1",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-1",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation-1",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#add-a-reaction-1",
  title: _jsx(_Fragment, {
    children: "Add a reaction"
  })
}, {
  depth: 3,
  url: "#remove-a-reaction-1",
  title: _jsx(_Fragment, {
    children: "Remove a reaction"
  })
}, {
  depth: 3,
  url: "#retrieve-a-list-of-reactions-1",
  title: _jsx(_Fragment, {
    children: "Retrieve a list of reactions"
  })
}, {
  depth: 3,
  url: "#retrieve-the-details-of-the-reaction-1",
  title: _jsx(_Fragment, {
    children: "Retrieve the details of the reaction"
  })
}, {
  depth: 2,
  url: "#next-steps-1",
  title: _jsx(_Fragment, {
    children: "Next steps"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-2",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-2",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation-2",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#add-a-reaction-2",
  title: _jsx(_Fragment, {
    children: "Add a reaction"
  })
}, {
  depth: 3,
  url: "#remove-a-reaction-2",
  title: _jsx(_Fragment, {
    children: "Remove a reaction"
  })
}, {
  depth: 3,
  url: "#retrieve-a-list-of-reactions-2",
  title: _jsx(_Fragment, {
    children: "Retrieve a list of reactions"
  })
}, {
  depth: 3,
  url: "#retrieve-the-details-of-the-reaction-2",
  title: _jsx(_Fragment, {
    children: "Retrieve the details of the reaction"
  })
}, {
  depth: 3,
  url: "#listen-for-reaction-status",
  title: _jsx(_Fragment, {
    children: "Listen for reaction status"
  })
}, {
  depth: 2,
  url: "#next-steps-2",
  title: _jsx(_Fragment, {
    children: "Next steps"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-3",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-3",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation-3",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#add-a-reaction-3",
  title: _jsx(_Fragment, {
    children: "Add a reaction"
  })
}, {
  depth: 3,
  url: "#remove-a-reaction-3",
  title: _jsx(_Fragment, {
    children: "Remove a reaction"
  })
}, {
  depth: 3,
  url: "#retrieve-a-list-of-reactions-3",
  title: _jsx(_Fragment, {
    children: "Retrieve a list of reactions"
  })
}, {
  depth: 3,
  url: "#retrieve-the-details-of-the-reaction-3",
  title: _jsx(_Fragment, {
    children: "Retrieve the details of the reaction"
  })
}, {
  depth: 3,
  url: "#listen-for-reaction-status-1",
  title: _jsx(_Fragment, {
    children: "Listen for reaction status"
  })
}, {
  depth: 2,
  url: "#next-steps-3",
  title: _jsx(_Fragment, {
    children: "Next steps"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-4",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-4",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation-4",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#add-a-reaction-4",
  title: _jsx(_Fragment, {
    children: "Add a reaction"
  })
}, {
  depth: 3,
  url: "#remove-a-reaction-4",
  title: _jsx(_Fragment, {
    children: "Remove a reaction"
  })
}, {
  depth: 3,
  url: "#retrieve-a-list-of-reactions-4",
  title: _jsx(_Fragment, {
    children: "Retrieve a list of reactions"
  })
}, {
  depth: 3,
  url: "#retrieve-the-details-of-the-reaction-4",
  title: _jsx(_Fragment, {
    children: "Retrieve the details of the reaction"
  })
}, {
  depth: 2,
  url: "#next-steps-4",
  title: _jsx(_Fragment, {
    children: "Next steps"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-5",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-5",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation-5",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#add-a-reaction-5",
  title: _jsx(_Fragment, {
    children: "Add a reaction"
  })
}, {
  depth: 3,
  url: "#remove-a-reaction-5",
  title: _jsx(_Fragment, {
    children: "Remove a reaction"
  })
}, {
  depth: 3,
  url: "#retrieve-a-list-of-reactions-5",
  title: _jsx(_Fragment, {
    children: "Retrieve a list of reactions"
  })
}, {
  depth: 3,
  url: "#retrieve-the-details-of-the-reaction-5",
  title: _jsx(_Fragment, {
    children: "Retrieve the details of the reaction"
  })
}, {
  depth: 2,
  url: "#next-steps-5",
  title: _jsx(_Fragment, {
    children: "Next steps"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-6",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-6",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation-6",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#add-a-reaction-6",
  title: _jsx(_Fragment, {
    children: "Add a reaction"
  })
}, {
  depth: 3,
  url: "#remove-a-reaction-6",
  title: _jsx(_Fragment, {
    children: "Remove a reaction"
  })
}, {
  depth: 3,
  url: "#retrieve-a-list-of-reactions-6",
  title: _jsx(_Fragment, {
    children: "Retrieve a list of reactions"
  })
}, {
  depth: 3,
  url: "#retrieve-the-details-of-the-reaction-6",
  title: _jsx(_Fragment, {
    children: "Retrieve the details of the reaction"
  })
}, {
  depth: 3,
  url: "#retrieve-the-reaction-in-the-historical-message-from-the-server",
  title: _jsx(_Fragment, {
    children: "Retrieve the reaction in the historical message from the server"
  })
}, {
  depth: 2,
  url: "#next-steps-6",
  title: _jsx(_Fragment, {
    children: "Next steps"
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
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_PlatformTabsGroup, {
    groupMode: "structured",
    canonicalPlatform: "web",
    platforms: '["android","ios","flutter","react-native","windows","unity","web"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "android",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "android"
      }), _jsx(_components.p, {
        children: 'Emojis are widely used in real-time chats because they allow users to express their feelings in a direct and vivid way. In Chat, "reactions" allow users to quickly react to a message using emojis in one-to-one chats and chat groups. In group chats, reactions can also be used to cast a vote, for example, by calculating the number of different emojis attached to the message.'
      }), _jsx(_components.p, {
        children: "The following illustration shows the implementation of adding a reaction to a message, how a conversation looks with reactions, and what retrieving a list of reactions (with related information) looks like."
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://web-cdn.agora.io/docs-files/1655257598155",
          alt: "1655257598155"
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "The SDK provides the following APIs to implement reaction functionalities:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "asyncAddReaction"
          }), ": Adds a reaction to the specified message."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "asyncRemoveReaction"
          }), ": Removes the reaction from the specified message."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "asyncGetReactionList"
          }), ": Retrieves a list of reactions from the server."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "asyncGetReactionDetail"
          }), ": Retrieves the details of the reaction from the server."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "ChatMessage.getMessageReaction"
          }), ": Retrieves a list of reactions from the ", _jsx(_components.code, {
            children: "ChatMessage"
          }), " objects in the local database."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Before proceeding, ensure that your environment meets the following requirements:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["The project integrates a version of the Chat SDK later than v1.0.3 and has implemented the ", _jsx(_components.a, {
            href: "../../get-started-sdk",
            children: "basic real-time chat functionalities"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["You understand the API call frequency limit as described in ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/im/limitations",
            children: "Limitations"
          }), "."]
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["The reaction feature is supported by all types of ", _jsx(_components.a, {
              href: "../../reference/pricing-plan-details",
              children: "Pricing Plans"
            }), " and is enabled by default once you have enabled Chat in ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), "."]
          })
        })
      }), _jsx(_components.h2, {
        id: "implementation",
        children: "Implementation"
      }), _jsx(_components.p, {
        children: "This section introduces how to implement reaction functionalities in your project."
      }), _jsx(_components.h3, {
        id: "add-a-reaction",
        children: "Add a reaction"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "asyncAddReaction"
        }), " to add a reaction to the specified message. In a one-to-one conversation, the peer user receives the ", _jsx(_components.code, {
          children: "onReactionChanged"
        }), " event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (ID of the new reaction, user ID of the user that adds the reaction, and the addition operation)."]
      }), _jsx(_components.p, {
        children: "For a reaction, a user can add only once, or the error 1301 is reported for repeated addition."
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
                children: "// Add a reaction"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "ChatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getInstance"
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
                children: "chatManager"
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
                children: "asyncAddReaction"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(message."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getMsgId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(), reaction, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " CallBack"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "() {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            @"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "Override"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            public"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " onSuccess"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "() {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            }"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            @"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "Override"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            public"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " onError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "int"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " error"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", String "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "errorMsg"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            }"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            @"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "Override"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            public"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " onProgress"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "int"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " i"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", String "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "s"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            }"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        });"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Listen for the state of the reaction."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "public"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " class"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " MyClass"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " implements"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " MessageListener"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    private"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " init"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "() {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        ChatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getInstance"
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
                children: "chatManager"
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
                children: "addMessageListener"
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
                children: "this"
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
                children: "    }"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    @"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "Override"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    public"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " onReactionChanged"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(List "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "list"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
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
      }), _jsx(_components.h3, {
        id: "remove-a-reaction",
        children: "Remove a reaction"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "asyncRemoveReaction"
        }), " to remove the specified reaction. In a one-to-one conversation, the peer user receives the ", _jsx(_components.code, {
          children: "onReactionChanged"
        }), " event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (ID of the removed reaction, user ID of the user that removes the reaction, and the removal operation)."]
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
                children: "// Remove the reaction."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "ChatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getInstance"
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
                children: "chatManager"
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
                children: "asyncRemoveReaction"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(message."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getMsgId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(), reaction, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " CallBack"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "() {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            @"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "Override"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            public"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " onSuccess"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "() {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            }"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            @"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "Override"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            public"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " onError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "int"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " error"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", String "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "errorMsg"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            }"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            @"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "Override"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            public"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " onProgress"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "int"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " i"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", String "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "s"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            }"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        });"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Listen for reaction state change."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "public"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " class"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " MyClass"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " implements"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " MessageListener"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    private"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " init"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "() {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        ChatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getInstance"
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
                children: "chatManager"
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
                children: "addMessageListener"
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
                children: "this"
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
                children: "    }"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    @"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "Override"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    public"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " onReactionChanged"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(List "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "list"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
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
      }), _jsx(_components.h3, {
        id: "retrieve-a-list-of-reactions",
        children: "Retrieve a list of reactions"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "asyncGetReactionList"
        }), " to retrieve a list of reactions of messages from the server. This method also returns the basic information of the reactions, including the content of the reaction, the number of users that added or removed the reaction, and a list of the first three user IDs that added or removed the reaction."]
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
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "ChatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getInstance"
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
                children: "chatManager"
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
                children: "asyncGetReactionList"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(msgIdList, ChatMessage.ChatType.Chat, groupId, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ValueCallBack>>() {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            @"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "Override"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            public"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " onSuccess"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "Map"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "> "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "stringListMap"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            }"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            @"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "Override"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "            public"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " onError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "int"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " i"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", String "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "s"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            }"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "   });"
              })
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "retrieve-the-details-of-the-reaction",
        children: "Retrieve the details of the reaction"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "asyncGetReactionDetail"
        }), " to get the detailed information of the reaction from the server. The detailed information includes the reaction content, the number of users that added or removed the reaction, and the complete list of user IDs that added or removed the reaction."]
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
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "ChatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getInstance"
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
                children: "chatManager"
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
                children: "asyncGetReactionDetail"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(mMsgId, emojiconId, pageCurosr, "
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
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ValueCallBack>() {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                    @"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "Override"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "                    public"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " onSuccess"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(CursorResult "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "messageReactionCursorResult"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                    @"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "Override"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "                    public"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " onError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "int"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " i"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", String "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "s"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
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
                children: "                });"
              })
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "next-steps",
        children: "Next steps"
      }), _jsxs(_components.p, {
        children: ["Reactions are also supported in the ", _jsx(_components.a, {
          href: "../../get-started-uikit",
          children: "Chat UIKit"
        }), ", which contains a wider range of emojis. You can also use the Chat SDK to implement reactions in your project."]
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
        children: 'Emojis are widely used in real-time chats because they allow users to express their feelings in a direct and vivid way. In Chat, "reactions" allow users to quickly react to a message using emojis in one-to-one chats and chat groups. In group chats, reactions can also be used to cast a vote, for example, by calculating the number of different emojis attached to the message.'
      }), _jsx(_components.p, {
        children: "The following illustration shows the implementation of adding a reaction to a message, how a conversation looks with reactions, and what retrieving a list of reactions (with related information) looks like."
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://web-cdn.agora.io/docs-files/1655257598155",
          alt: "1655257598155"
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-1",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "The SDK provides the following APIs to implement reaction functionalities:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "addReaction"
          }), ": Adds a reaction to the specified message."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "removeReaction"
          }), ": Removes the reaction from the specified message."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "getReactionList"
          }), ": Retrieves a list of reactions from the server."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "getReactionDetail"
          }), ": Retrieves the details of the reaction from the server."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AgoraChatMessage.reactionlist"
          }), ": Retrieves a list of reactions from the ", _jsx(_components.code, {
            children: "AgoraChatMessage"
          }), " objects in the local database."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-1",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Before proceeding, ensure that your environment meets the following requirements:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["The project integrates a version of the Chat SDK later than v1.0.3 and has implemented the ", _jsx(_components.a, {
            href: "../../get-started-sdk",
            children: "basic real-time chat functionalities"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["You understand the API call frequency limit as described in ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/im/limitations",
            children: "Limitations"
          }), "."]
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["The reaction feature is supported by all types of ", _jsx(_components.a, {
              href: "../../reference/pricing-plan-details",
              children: "Pricing Plans"
            }), " and is enabled by default once you have enabled Chat in ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), "."]
          })
        })
      }), _jsx(_components.h2, {
        id: "implementation-1",
        children: "Implementation"
      }), _jsx(_components.p, {
        children: "This section introduces how to implement reaction functionalities in your project."
      }), _jsx(_components.h3, {
        id: "add-a-reaction-1",
        children: "Add a reaction"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "addReaction"
        }), " to add a reaction to the specified message. In a one-to-one conversation, the peer user receives the ", _jsx(_components.code, {
          children: "messageReactionDidChange"
        }), " event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (reaction ID, user ID of the user that adds the reaction, and the addition operation)."]
      }), _jsx(_components.p, {
        children: "For a reaction, a user can add only once, or the error 1301 is reported for repeated addition."
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
                children: "// Add a reaction"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "[AgoraChatClient.sharedClient.chatManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "addReaction:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"reaction"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " toMessage:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"messageId"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " completion:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "^"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(AgoraChatError "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " _Nullable error) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "  refreshBlock"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(error, changeSelectedStateHandle);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "}];"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Listen for the state of the reaction."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "-"
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
                children: "void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")messageReactionDidChange:("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "NSArray"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " *"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")changes"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "{"
              })
            }), `
`, _jsx(_components.span, {
              className: "line"
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
      }), _jsx(_components.h3, {
        id: "remove-a-reaction-1",
        children: "Remove a reaction"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "removeReaction"
        }), " to remove the specified reaction. In a one-to-one conversation, the peer user receives the ", _jsx(_components.code, {
          children: "messageReactionDidChange"
        }), " event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (ID of the removed reaction, user ID of the user that removes the reaction, and the removal operation)."]
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
                children: "// Remove the reaction."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "[AgoraChatClient.sharedClient.chatManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "removeReaction:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"reaction"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " fromMessage:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"messageId"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " completion:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "^"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(AgoraChatError "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " _Nullable error) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "  refreshBlock"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(error, changeSelectedStateHandle);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "}];"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Listen for reaction state change."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "-"
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
                children: "void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")messageReactionDidChange:("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "NSArray"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " *"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")changes"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "{"
              })
            }), `
`, _jsx(_components.span, {
              className: "line"
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
      }), _jsx(_components.h3, {
        id: "retrieve-a-list-of-reactions-1",
        children: "Retrieve a list of reactions"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "getReactionList"
        }), " to retrieve a list of reactions of messages from the server. This method also returns the basic information of the reactions, including the content of the reaction, the number of users that added or removed the reaction, and a list of the first three user IDs that added or removed the reaction."]
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
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "[AgoraChatClient.sharedClient.chatManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "getReactionList:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "@["
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"messageId"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "] "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "groupId:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '@"groupId"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " chatType:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "AgoraChatTypeChat "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "completion:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "^"
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
                children: "NSDictionary"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " *"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " _Nonnull, AgoraChatError "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " _Nullable) {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "}];"
              })
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "retrieve-the-details-of-the-reaction-1",
        children: "Retrieve the details of the reaction"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "getReactionDetail"
        }), " to get the detailed information of the reaction from the server. The detailed information includes the reaction content, the number of users that added or removed the reaction, and the complete list of user IDs that added or removed the reaction."]
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
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "[AgoraChatClient.sharedClient.chatManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "getReactionDetail:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '@"messageId"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " reaction:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '@"reaction"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " cursor:nil"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " pageSize:30"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " completion:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "^"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(AgoraChatMessageReaction "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " _Nonnull, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "NSString"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " *"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " _Nullable cursor, AgoraChatError "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " _Nullable) {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "}];"
              })
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "next-steps-1",
        children: "Next steps"
      }), _jsxs(_components.p, {
        children: ["Reactions are also supported in the ", _jsx(_components.a, {
          href: "../../get-started-uikit",
          children: "Chat UIKit"
        }), ", which contains a wider range of emojis. You can also use the Chat SDK to implement reactions in your project."]
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
        children: 'Emojis are widely used in real-time chats because they allow users to express their feelings in a direct and vivid way. In Chat, "reactions" allow users to quickly react to a message using emojis in one-to-one chats and chat groups. In group chats, reactions can also be used to cast a vote, for example, by calculating the number of different emojis attached to the message.'
      }), _jsx(_components.p, {
        children: "The following illustration shows the implementation of adding a reaction to a message, how a conversation looks with reactions, and what retrieving a list of reactions (with related information) looks like."
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://web-cdn.agora.io/docs-files/1655257598155",
          alt: "1655257598155"
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-2",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "The SDK provides the following APIs to implement reaction functionalities:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "addReaction"
          }), ": Adds a reaction to the specified message."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "removeReaction"
          }), ": Removes the reaction from the specified message."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "fetchReactionList"
          }), ": Retrieves a list of reactions from the server."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "fetchReactionDetail"
          }), ": Retrieves the details of the reaction from the server."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-2",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Before proceeding, ensure that your environment meets the following requirements:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["The project integrates a version of the Chat SDK later than v1.0.3 and has implemented the ", _jsx(_components.a, {
            href: "../../get-started-sdk",
            children: "basic real-time chat functionalities"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["You understand the API call frequency limit as described in ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/im/limitations",
            children: "Limitations"
          }), "."]
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["The reaction feature is supported by all types of ", _jsx(_components.a, {
              href: "../../reference/pricing-plan-details",
              children: "Pricing Plans"
            }), " and is enabled by default once you have enabled Chat in ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), "."]
          })
        })
      }), _jsx(_components.h2, {
        id: "implementation-2",
        children: "Implementation"
      }), _jsx(_components.p, {
        children: "This section introduces how to implement reaction functionalities in your project."
      }), _jsx(_components.h3, {
        id: "add-a-reaction-2",
        children: "Add a reaction"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "addReaction"
        }), " to add a reaction to the specified message. In a one-to-one conversation, the peer user receives the ", _jsx(_components.code, {
          children: "onMessageReactionDidChange"
        }), " event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (reaction ID, user ID of the user that adds the reaction, and the addition operation)."]
      }), _jsx(_components.p, {
        children: "For a reaction, a user can add only once, or the error 1301 is reported for repeated addition."
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
                children: "// reaction: Reaction ID"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// msgId: The message ID"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Adds a reaction to the specified message"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "ChatClient"
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
                children: "getInstance"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  .chatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "addReaction"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(reaction, msgId)"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "then"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "((result) "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    console."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "log"
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
                children: '"success: "'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", result);"
              })]
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "catch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "((error) "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    console."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "log"
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
                children: '"fail: "'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", error);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  });"
              })
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "remove-a-reaction-2",
        children: "Remove a reaction"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "removeReaction"
        }), " to remove the specified reaction. In a one-to-one conversation, the peer user receives the ", _jsx(_components.code, {
          children: "onMessageReactionDidChange"
        }), " event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (ID of the removed reaction, user ID of the user that removes the reaction, and the removal operation)."]
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
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "try"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "  await"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".getInstance.chatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "addReaction"
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
                children: "    messageId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " messageId,"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    reaction"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " reaction,"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  );"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "} "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "on"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " catch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (e) {"
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
      }), _jsx(_components.h3, {
        id: "retrieve-a-list-of-reactions-2",
        children: "Retrieve a list of reactions"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "getReactionList"
        }), " to retrieve a list of reactions of messages from the server. This method also returns the basic information of the reactions, including the content of the reaction, the number of users that added or removed the reaction, and a list of the first three user IDs that added or removed the reaction."]
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
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "try"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "  Map"
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
                children: " map "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "      await"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".getInstance.chatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "fetchReactionList"
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
                children: "    messageIds"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " messageIds,"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    chatType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "GroupChat"
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
                children: "    groupId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " groupId,"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  );"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "} "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "on"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " catch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (e) {"
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
      }), _jsxs(_components.p, {
        children: ["You can also use the ", _jsx(_components.code, {
          children: "reactionList"
        }), " member in ", _jsx(_components.code, {
          children: "ChatMessage"
        }), " to quickly retrieve the reactions of the specified message."]
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
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "try"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "    List"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " reactions "
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
                children: " msg."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "reactionList"
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
                children: "}"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "on"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " catch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (e) {"
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
      }), _jsx(_components.h3, {
        id: "retrieve-the-details-of-the-reaction-2",
        children: "Retrieve the details of the reaction"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "fetchReactionDetail"
        }), " to get the detailed information of the reaction from the server. The detailed information includes the reaction content, the number of users that added or removed the reaction, and the complete list of user IDs that added or removed the reaction."]
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
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "try"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "  ChatCursorResult"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " result "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "      await"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".getInstance.chatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "fetchReactionDetail"
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
                children: "    messageId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " messageId,"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    reaction"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " reaction,"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  );"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "} "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "on"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " catch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (e) {"
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
      }), _jsx(_components.h3, {
        id: "listen-for-reaction-status",
        children: "Listen for reaction status"
      }), _jsxs(_components.p, {
        children: ["Use ", _jsx(_components.code, {
          children: "onMessageReactionDidChange"
        }), " to listen for changes or status of the reaction."]
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
                children: "    // Adds the chat event handler."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "    ChatClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".getInstance.chatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "addEventHandler"
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '      "UNIQUE_HANDLER_ID"'
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
                children: "      ChatEventHandler"
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
                children: "        onMessageReactionDidChange"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (events) {},"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "      ),"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    );"
              })
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    ..."
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
                children: "    // Removes the chat event handler."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "    ChatClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".getInstance.chatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "removeEventHandler"
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
                children: '"UNIQUE_HANDLER_ID"'
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
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "next-steps-2",
        children: "Next steps"
      }), _jsxs(_components.p, {
        children: ["Reactions are also supported in the ", _jsx(_components.a, {
          href: "../../get-started-uikit",
          children: "Chat UIKit"
        }), ", which contains a wider range of emojis. You can also use the Chat SDK to implement reactions in your project."]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "react-native",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "react-native"
      }), _jsx(_components.p, {
        children: 'Emojis are widely used in real-time chats because they allow users to express their feelings in a direct and vivid way. In Chat, "reactions" allow users to quickly react to a message using emojis in one-to-one chats and chat groups. In group chats, reactions can also be used to cast a vote, for example, by calculating the number of different emojis attached to the message.'
      }), _jsx(_components.p, {
        children: "The following illustration shows the implementation of adding a reaction to a message, how a conversation looks with reactions, and what retrieving a list of reactions (with related information) looks like."
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://web-cdn.agora.io/docs-files/1655257598155",
          alt: "1655257598155"
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-3",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "The SDK provides the following APIs to implement reaction functionalities:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "addReaction"
          }), ": Adds a reaction to the specified message."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "removeReaction"
          }), ": Removes the reaction from the specified message."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "getReactionList"
          }), ": Retrieves a list of reactions from the server."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "fetchReactionDetail"
          }), ": Retrieves the details of the reaction from the server."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-3",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Before proceeding, ensure that your environment meets the following requirements:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["The project integrates a version of the Chat SDK later than v1.0.3 and has implemented the ", _jsx(_components.a, {
            href: "../../get-started-sdk",
            children: "basic real-time chat functionalities"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["You understand the API call frequency limit as described in ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/im/limitations",
            children: "Limitations"
          }), "."]
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["The reaction feature is supported by all types of ", _jsx(_components.a, {
              href: "../../reference/pricing-plan-details",
              children: "Pricing Plans"
            }), " and is enabled by default once you have enabled Chat in ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), "."]
          })
        })
      }), _jsx(_components.h2, {
        id: "implementation-3",
        children: "Implementation"
      }), _jsx(_components.p, {
        children: "This section introduces how to implement reaction functionalities in your project."
      }), _jsx(_components.h3, {
        id: "add-a-reaction-3",
        children: "Add a reaction"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "addReaction"
        }), " to add a reaction to the specified message. In a one-to-one conversation, the peer user receives the ", _jsx(_components.code, {
          children: "onMessageReactionDidChange"
        }), " event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (reaction ID, user ID of the user that adds the reaction, and the addition operation)."]
      }), _jsx(_components.p, {
        children: "For a reaction, a user can add only once, or the error 1301 is reported for repeated addition."
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
          icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// reaction: Reaction ID"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// msgId: The message ID"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Adds a reaction to the specified message"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "ChatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getInstance"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  .chatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "addReaction"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(reaction, msgId)"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "then"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "result"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    console."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "log"
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
                children: '"success: "'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", result);"
              })]
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "catch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "error"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    console."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "log"
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
                children: '"fail: "'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", error);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  });"
              })
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "remove-a-reaction-3",
        children: "Remove a reaction"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "removeReaction"
        }), " to remove the specified reaction. You can also listen for the reaction change in ", _jsx(_components.code, {
          children: "onMessageReactionDidChange"
        }), ". In a one-to-one conversation, the peer user receives the ", _jsx(_components.code, {
          children: "onMessageReactionDidChange"
        }), " event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (ID of the removed reaction, user ID of the user that removes the reaction, and the removal operation)."]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// reaction: Reaction ID"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// msgId: The message ID"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "ChatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getInstance"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  .chatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "removeReaction"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(reaction, msgId)"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "then"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "result"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    console."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "log"
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
                children: '"success: "'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", result);"
              })]
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "catch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "error"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    console."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "log"
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
                children: '"fail: "'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", error);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  });"
              })
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "retrieve-a-list-of-reactions-3",
        children: "Retrieve a list of reactions"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "getReactionList"
        }), " to retrieve a list of reactions of messages from the server. This method also returns the basic information of the reactions, including the content of the reaction, the number of users that added or removed the reaction, and a list of the first three user IDs that added or removed the reaction."]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// msgId: The message ID"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "ChatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getInstance"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  .chatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getReactionList"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(msgId)"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "then"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "result"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    console."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "log"
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
                children: '"success: "'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", result);"
              })]
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "catch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "error"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    console."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "log"
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
                children: '"fail: "'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", error);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  });"
              })
            })]
          })
        })
      }), _jsxs(_components.p, {
        children: ["You can also use the ", _jsx(_components.code, {
          children: "reactionList"
        }), " member in ", _jsx(_components.code, {
          children: "ChatMessage"
        }), " to quickly retrieve the reactions of the specified message."]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
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
                children: " msg"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ChatMessage."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "createTextMessage"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(targetId, content);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "msg.reactionList"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "then"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "result"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    console."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "log"
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
                children: '"success: "'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", result);"
              })]
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "catch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "error"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    console."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "log"
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
                children: '"fail: "'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", error);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  });"
              })
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "retrieve-the-details-of-the-reaction-3",
        children: "Retrieve the details of the reaction"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "fetchReactionDetail"
        }), " to get the detailed information of the reaction from the server. The detailed information includes the reaction content, the number of users that added or removed the reaction, and the complete list of user IDs that added or removed the reaction."]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// reaction: Reaction ID"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// msgId: The message ID"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// pageSize: The number of reactions returned for each method call. The value range is [1,50]"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// cursor: The position from which to get the reaction detail. Pass `null` or an empty string for the first method call."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "ChatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getInstance"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  .chatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "fetchReactionDetail"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(msgId, reaction, cursor, pageSize)"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "then"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "result"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    console."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "log"
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
                children: '"success: "'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", result);"
              })]
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "catch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "error"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    console."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "log"
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
                children: '"fail: "'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", error);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  });"
              })
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "listen-for-reaction-status-1",
        children: "Listen for reaction status"
      }), _jsxs(_components.p, {
        children: ["Use ", _jsx(_components.code, {
          children: "onMessageReactionDidChange"
        }), " to listen for changes or status of the reaction."]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// listens for reaction updates"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "class"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " ChatMessageEvent"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " implements"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " ChatMessageEventListener"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "  onMessageReactionDidChange"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "_list"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " ChatMessageReactionEvent"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "[])"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    throw"
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
                children: '"Method not implemented."'
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
                children: "  }"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Add other callbacks according to your business logic"
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
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Adds the message status listener"
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
                children: " listener"
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
                children: " new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " ChatMessageEvent"
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
                children: "ChatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getInstance"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "().chatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "addMessageListener"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(listener);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Removes the listener"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "ChatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getInstance"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "().chatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "removeMessageListener"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(listener);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Removes all listeners"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "ChatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getInstance"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "().chatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "removeAllMessageListener"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "next-steps-3",
        children: "Next steps"
      }), _jsxs(_components.p, {
        children: ["Reactions are also supported in the ", _jsx(_components.a, {
          href: "../../get-started-uikit",
          children: "Chat UIKit"
        }), ", which contains a wider range of emojis. You can also use the Chat SDK to implement reactions in your project."]
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
        children: 'Emojis are widely used in real-time chats because they allow users to express their feelings in a direct and vivid way. In Chat, "reactions" allow users to quickly react to a message using emojis in one-to-one chats and chat groups. In group chats, reactions can also be used to cast a vote, for example, by calculating the number of different emojis attached to the message.'
      }), _jsx(_components.p, {
        children: "The following illustration shows the implementation of adding a reaction to a message, how a conversation looks with reactions, and what retrieving a list of reactions (with related information) looks like."
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://web-cdn.agora.io/docs-files/1655257598155",
          alt: "1655257598155"
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-4",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "The SDK provides the following APIs to implement reaction functionalities:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AddReaction"
          }), ": Adds a reaction to the specified message."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "RemoveReaction"
          }), ": Removes the reaction from the specified message."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "GetReactionList"
          }), ": Retrieves a list of reactions from the server."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "GetReactionDetail"
          }), ": Retrieves the details of the reaction from the server."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "Message.ReactionList"
          }), ": Retrieves a list of reactions from the Message object."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-4",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Before proceeding, ensure that your environment meets the following requirements:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["The project integrates a version of the Chat SDK later than v1.0.3 and has implemented the ", _jsx(_components.a, {
            href: "../../get-started-sdk",
            children: "basic real-time chat functionalities"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["You understand the API call frequency limit as described in ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/im/limitations",
            children: "Limitations"
          }), "."]
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["The reaction feature is supported by all types of ", _jsx(_components.a, {
              href: "../../reference/pricing-plan-details",
              children: "Pricing Plans"
            }), " and is enabled by default once you have enabled Chat in ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), "."]
          })
        })
      }), _jsx(_components.h2, {
        id: "implementation-4",
        children: "Implementation"
      }), _jsx(_components.p, {
        children: "This section introduces how to implement reaction functionalities in your project."
      }), _jsx(_components.h3, {
        id: "add-a-reaction-4",
        children: "Add a reaction"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "AddReaction"
        }), " to add a reaction to the specified message. In a one-to-one conversation, the peer user receives the ", _jsx(_components.code, {
          children: "MessageReactionDidChange"
        }), " event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (reaction ID, user ID of the user that adds the reaction, and the addition operation)."]
      }), _jsx(_components.p, {
        children: "For a reaction, a user can add only once, or the error 1301 is reported for repeated addition."
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
          icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Adds a reaction to the specified message"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "SDKClient.Instance.ChatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "AddReaction"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(msg_id, reaction, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " CallBack"
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "     onSuccess"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": () "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "     {"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "         Debug."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Log"
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
                children: '$"AddReaction success."'
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
                children: "     },"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "     onError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "code"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "desc"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "     {"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "         Debug."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Log"
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
                children: '$"AddReaction failed, code:'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "{"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "code"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "}"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ", desc:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "{"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "desc"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "}"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"'
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
                children: "     }"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "));"
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
                children: "// Listens for the reaction changes."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "class"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " ReactionManagerDelegate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " : "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "IReactionManagerDelegate"
              })]
            }), `
`, _jsx(_components.span, {
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    public"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " MessageReactionDidChange"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "List"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " list"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    {"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        if"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (list.Count "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " 0"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "return"
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        foreach"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "var"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " it"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " in"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " list)"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            // Add the iteration logic here."
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
                children: "// Adds a listener for the reaction."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "ReactionManagerDelegate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " reactionManagerDelegate"
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
                children: " new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " ReactionManagerDelegate"
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
                children: "SDKClient.Instance.ChatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "AddReactionManagerDelegate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(reactionManagerDelegate);"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "remove-a-reaction-4",
        children: "Remove a reaction"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "RemoveReaction"
        }), " to remove the specified reaction. In a one-to-one conversation, the peer user receives the ", _jsx(_components.code, {
          children: "MessageReactionDidChange"
        }), " event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (ID of the removed reaction, user ID of the user that removes the reaction, and the removal operation)."]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Removes the reaction."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "SDKClient.Instance.ChatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "RemoveReaction"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(msg_id, reaction, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " CallBack"
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "     onSuccess"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": () "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "     {"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "         Debug."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Log"
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
                children: '$"RemoveReaction success."'
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
                children: "     },"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "     onError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "code"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "desc"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "     {"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "         Debug."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Log"
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
                children: '$"RemoveReaction failed, code:'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "{"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "code"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "}"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ", desc:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "{"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "desc"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "}"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"'
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
                children: "     }"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "));"
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
                children: "// Listens for the reaction changes."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "class"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " ReactionManagerDelegate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " : "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "IReactionManagerDelegate"
              })]
            }), `
`, _jsx(_components.span, {
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    public"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " MessageReactionDidChange"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "List"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " list"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    {"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        if"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (list.Count "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " 0"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "return"
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        foreach"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "var"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " it"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " in"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " list)"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            // Add the iteration logic here."
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
                children: "// Adds a listener for the reaction."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "ReactionManagerDelegate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " reactionManagerDelegate"
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
                children: " new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " ReactionManagerDelegate"
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
                children: "SDKClient.Instance.ChatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "AddReactionManagerDelegate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(reactionManagerDelegate);"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "retrieve-a-list-of-reactions-4",
        children: "Retrieve a list of reactions"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "GetReactionList"
        }), " to retrieve a list of reactions of messages from the server. This method also returns the basic information of the reactions, including the content of the reaction, the number of users that added or removed the reaction, and a list of the first three user IDs that added or removed the reaction."]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "SDKClient.Instance.ChatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "GetReactionList"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(messageIdList, chatType, groupId, new ValueCallBack"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ">>"
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
                children: "onSuccess"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "dict"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "{"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    // Iterates through the returned reaction dictionary."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    foreach"
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
                children: "var"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " it"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " in"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " dict)"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        // Iterates each list of reaction in the dictionary."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "        List"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " rl"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " it.Value;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        foreach"
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
                children: "var"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " lit"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " in"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " rl)"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            // Handles each reaction."
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
                children: "},"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "onError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "code"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "desc"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              })]
            }), `
`, _jsx(_components.span, {
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    Debug."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Log"
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
                children: '$"GetReactionList failed, code:'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "{"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "code"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "}"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ", desc:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "{"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "desc"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "}"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"'
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
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "));"
              })
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "retrieve-the-details-of-the-reaction-4",
        children: "Retrieve the details of the reaction"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "GetReactionDetail"
        }), " to get the detailed information of the reaction from the server. The detailed information includes the reaction content, the number of users that added or removed the reaction, and the complete list of user IDs that added or removed the reaction."]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "SDKClient.Instance.ChatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "GetReactionDetail"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(msg_id, reaction, cursor, pageSize, new ValueCallBack"
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
                children: "onSuccess"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "ret"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              })]
            }), `
`, _jsx(_components.span, {
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    Debug."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Log"
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
                children: '$"GetReactionDetail success"'
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    if"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (ret.Data.Count "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ">"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " 0"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    {"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "        MessageReaction"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " mr"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ret.Data["
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
                children: "];"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        // Handles the retrieved reaction."
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
                children: "},"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "onError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "code"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "desc"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              })]
            }), `
`, _jsx(_components.span, {
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "    Debug"
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
                children: '$"GetReactionDetail failed, code:'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "{"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "code"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "}"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ", desc:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "{"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "desc"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "}"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"'
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
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "));"
              })
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "next-steps-4",
        children: "Next steps"
      }), _jsxs(_components.p, {
        children: ["Reactions are also supported in the ", _jsx(_components.a, {
          href: "../../get-started-uikit",
          children: "Chat UIKit"
        }), ", which contains a wider range of emojis. You can also use the Chat SDK to implement reactions in your project."]
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
        children: 'Emojis are widely used in real-time chats because they allow users to express their feelings in a direct and vivid way. In Chat, "reactions" allow users to quickly react to a message using emojis in one-to-one chats and chat groups. In group chats, reactions can also be used to cast a vote, for example, by calculating the number of different emojis attached to the message.'
      }), _jsx(_components.p, {
        children: "The following illustration shows the implementation of adding a reaction to a message, how a conversation looks with reactions, and what retrieving a list of reactions (with related information) looks like."
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://web-cdn.agora.io/docs-files/1655257598155",
          alt: "1655257598155"
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-5",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "The SDK provides the following APIs to implement reaction functionalities:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AddReaction"
          }), ": Adds a reaction to the specified message."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "RemoveReaction"
          }), ": Removes the reaction from the specified message."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "GetReactionList"
          }), ": Retrieves a list of reactions from the server."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "GetReactionDetail"
          }), ": Retrieves the details of the reaction from the server."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "Message.ReactionList"
          }), ": Retrieves a list of reactions from the Message object."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-5",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Before proceeding, ensure that your environment meets the following requirements:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["The project integrates a version of the Chat SDK later than v1.0.3 and has implemented the ", _jsx(_components.a, {
            href: "../../get-started-sdk",
            children: "basic real-time chat functionalities"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["You understand the API call frequency limit as described in ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/im/limitations",
            children: "Limitations"
          }), "."]
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["The reaction feature is supported by all types of ", _jsx(_components.a, {
              href: "../../reference/pricing-plan-details",
              children: "Pricing Plans"
            }), " and is enabled by default once you have enabled Chat in ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), "."]
          })
        })
      }), _jsx(_components.h2, {
        id: "implementation-5",
        children: "Implementation"
      }), _jsx(_components.p, {
        children: "This section introduces how to implement reaction functionalities in your project."
      }), _jsx(_components.h3, {
        id: "add-a-reaction-5",
        children: "Add a reaction"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "AddReaction"
        }), " to add a reaction to the specified message. In a one-to-one conversation, the peer user receives the ", _jsx(_components.code, {
          children: "MessageReactionDidChange"
        }), " event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (reaction ID, user ID of the user that adds the reaction, and the addition operation)."]
      }), _jsx(_components.p, {
        children: "For a reaction, a user can add only once, or the error 1301 is reported for repeated addition."
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
          icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Adds a reaction to the specified message"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "SDKClient.Instance.ChatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "AddReaction"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(msg_id, reaction, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " CallBack"
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "     onSuccess"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": () "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "     {"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "         Debug."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Log"
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
                children: '$"AddReaction success."'
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
                children: "     },"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "     onError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "code"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "desc"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "     {"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "         Debug."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Log"
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
                children: '$"AddReaction failed, code:'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "{"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "code"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "}"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ", desc:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "{"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "desc"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "}"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"'
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
                children: "     }"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "));"
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
                children: "// Listens for the reaction changes."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "class"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " ReactionManagerDelegate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " : "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "IReactionManagerDelegate"
              })]
            }), `
`, _jsx(_components.span, {
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    public"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " MessageReactionDidChange"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "List"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " list"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    {"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        if"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (list.Count "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " 0"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "return"
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        foreach"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "var"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " it"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " in"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " list)"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            // Add the iteration logic here."
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
                children: "// Adds a listener for the reaction."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "ReactionManagerDelegate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " reactionManagerDelegate"
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
                children: " new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " ReactionManagerDelegate"
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
                children: "SDKClient.Instance.ChatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "AddReactionManagerDelegate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(reactionManagerDelegate);"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "remove-a-reaction-5",
        children: "Remove a reaction"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "RemoveReaction"
        }), " to remove the specified reaction. In a one-to-one conversation, the peer user receives the ", _jsx(_components.code, {
          children: "MessageReactionDidChange"
        }), " event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (ID of the removed reaction, user ID of the user that removes the reaction, and the removal operation)."]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Removes the reaction."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "SDKClient.Instance.ChatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "RemoveReaction"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(msg_id, reaction, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " CallBack"
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "     onSuccess"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": () "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "     {"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "         Debug."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Log"
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
                children: '$"RemoveReaction success."'
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
                children: "     },"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "     onError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "code"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "desc"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "     {"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "         Debug."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Log"
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
                children: '$"RemoveReaction failed, code:'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "{"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "code"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "}"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ", desc:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "{"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "desc"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "}"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"'
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
                children: "     }"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "));"
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
                children: "// Listens for the reaction changes."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "class"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " ReactionManagerDelegate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " : "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "IReactionManagerDelegate"
              })]
            }), `
`, _jsx(_components.span, {
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    public"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " MessageReactionDidChange"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "List"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " list"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    {"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        if"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (list.Count "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " 0"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "return"
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        foreach"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "var"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " it"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " in"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " list)"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            // Add the iteration logic here."
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
                children: "// Adds a listener for the reaction."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "ReactionManagerDelegate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " reactionManagerDelegate"
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
                children: " new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " ReactionManagerDelegate"
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
                children: "SDKClient.Instance.ChatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "AddReactionManagerDelegate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(reactionManagerDelegate);"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "retrieve-a-list-of-reactions-5",
        children: "Retrieve a list of reactions"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "GetReactionList"
        }), " to retrieve a list of reactions of messages from the server. This method also returns the basic information of the reactions, including the content of the reaction, the number of users that added or removed the reaction, and a list of the first three user IDs that added or removed the reaction."]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "SDKClient.Instance.ChatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "GetReactionList"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(messageIdList, chatType, groupId, new ValueCallBack"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ">>"
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
                children: "onSuccess"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "dict"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "{"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    // Iterates through the returned reaction dictionary."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    foreach"
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
                children: "var"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " it"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " in"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " dict)"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        // Iterates each list of reaction in the dictionary."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "        List"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " rl"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " it.Value;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        foreach"
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
                children: "var"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " lit"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " in"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " rl)"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            // Handles each reaction."
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
                children: "},"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "onError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "code"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "desc"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              })]
            }), `
`, _jsx(_components.span, {
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    Debug."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Log"
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
                children: '$"GetReactionList failed, code:'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "{"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "code"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "}"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ", desc:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "{"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "desc"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "}"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"'
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
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "));"
              })
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "retrieve-the-details-of-the-reaction-5",
        children: "Retrieve the details of the reaction"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "GetReactionDetail"
        }), " to get the detailed information of the reaction from the server. The detailed information includes the reaction content, the number of users that added or removed the reaction, and the complete list of user IDs that added or removed the reaction."]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "SDKClient.Instance.ChatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "GetReactionDetail"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(msg_id, reaction, cursor, pageSize, new ValueCallBack"
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
                children: "onSuccess"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "ret"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              })]
            }), `
`, _jsx(_components.span, {
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    Debug."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Log"
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
                children: '$"GetReactionDetail success"'
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    if"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (ret.Data.Count "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ">"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " 0"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    {"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "        MessageReaction"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " mr"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ret.Data["
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
                children: "];"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "        // Handles the retrieved reaction."
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
                children: "},"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "onError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "code"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "desc"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              })]
            }), `
`, _jsx(_components.span, {
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "    Debug"
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
                children: '$"GetReactionDetail failed, code:'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "{"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "code"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "}"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ", desc:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "{"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "desc"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "}"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"'
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
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "));"
              })
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "next-steps-5",
        children: "Next steps"
      }), _jsxs(_components.p, {
        children: ["Reactions are also supported in the ", _jsx(_components.a, {
          href: "../../get-started-uikit",
          children: "Chat UIKit"
        }), ", which contains a wider range of emojis. You can also use the Chat SDK to implement reactions in your project."]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "web",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "web"
      }), _jsx(_components.p, {
        children: 'Emojis are widely used in real-time chats because they allow users to express their feelings in a direct and vivid way. In Chat, "reactions" allow users to quickly react to a message using emojis in one-to-one chats and chat groups. In group chats, reactions can also be used to cast a vote, for example, by calculating the number of different emojis attached to the message.'
      }), _jsx(_components.p, {
        children: "The following illustration shows the implementation of adding a reaction to a message, how a conversation looks with reactions, and what retrieving a list of reactions (with related information) looks like."
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Adding a reaction"
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://web-cdn.agora.io/docs-files/1655257804635",
              alt: "1655257804635"
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Retrieving a list of reactions"
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://web-cdn.agora.io/docs-files/1655257845986",
              alt: "1655257845986"
            })
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "This page shows how to use the Chat SDK to implement reactions in your project."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-6",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "The SDK provides the following APIs to implement reaction functionalities:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "addReaction"
          }), ": Adds a reaction to the specified message."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "deleteReaction"
          }), ": Removes the reaction from the specified message."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "getReactionlist"
          }), ": Retrieves a list of reactions from the server."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "getReactionDetail"
          }), ": Retrieves the details of the reaction from the server."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "getHistoryMessages"
          }), "：Retrieves the reactions in historical messages from the server."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-6",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Before proceeding, ensure that your environment meets the following requirements:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["The project integrates a version of the Chat SDK later than v1.0.3 and has implemented the ", _jsx(_components.a, {
            href: "../../get-started-sdk",
            children: "basic real-time chat functionalities"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["You understand the API call frequency limit as described in ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/im/limitations",
            children: "Limitations"
          }), "."]
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["The reaction feature is supported by all types of ", _jsx(_components.a, {
              href: "../../reference/pricing-plan-details",
              children: "Pricing Plans"
            }), " and is enabled by default once you have enabled Chat in ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), "."]
          })
        })
      }), _jsx(_components.h2, {
        id: "implementation-6",
        children: "Implementation"
      }), _jsx(_components.p, {
        children: "This section introduces how to implement reaction functionalities in your project."
      }), _jsx(_components.h3, {
        id: "add-a-reaction-6",
        children: "Add a reaction"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "addReaction"
        }), " to add a reaction to the specified message. In a one-to-one conversation, the peer user receives the ", _jsx(_components.code, {
          children: "onReactionChange"
        }), " event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (reaction ID, user ID of the user that adds the reaction, and the addition operation)."]
      }), _jsx(_components.p, {
        children: "For a reaction, a user can add only once, or the error 1101 is reported for repeated addition."
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
          icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Add a reaction"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "chatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "addReaction"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "({ messageId: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"messageId"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", reaction: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"reaction"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " });"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Listen for the state of the reaction."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "chatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "addEventHandler"
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
                children: '"handlerId"'
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "  onReactionChange"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "reactionMsg"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    console."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "log"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(reactionMsg);"
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
      }), _jsx(_components.h3, {
        id: "remove-a-reaction-6",
        children: "Remove a reaction"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "deleteReaction"
        }), " to remove the specified reaction. In a one-to-one conversation, the peer user receives the ", _jsx(_components.code, {
          children: "onReactionChanged"
        }), " event. In a group conversation, other group members than the operator receive this event. This event contains the conversation ID, message ID, reaction list of the message, and reaction operation list (ID of the removed reaction, user ID of the user that removes the reaction, and the removal operation)."]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Remove the reaction."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "chatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "deleteReaction"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "({ messageId: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"messageId"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", reaction: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"reaction"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " });"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Listen for reaction state change."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "chatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "addEventHandler"
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
                children: '"handlerId"'
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "  onReactionChange"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "reactionMsg"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    console."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "log"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(reactionMsg);"
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
      }), _jsx(_components.h3, {
        id: "retrieve-a-list-of-reactions-6",
        children: "Retrieve a list of reactions"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "getReactionlist"
        }), " to retrieve a list of reactions of messages from the server. This method also returns the basic information of the reactions, including the content of the reaction, the number of users that added or removed the reaction, and a list of the first three user IDs that added or removed the reaction."]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "chatClient"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getReactionlist"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "({ chatType: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"singleChat"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", messageId: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"messageId"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " })"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "then"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "res"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    console."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "log"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(res);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  });"
              })
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "retrieve-the-details-of-the-reaction-6",
        children: "Retrieve the details of the reaction"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "getReactionDetail"
        }), " to get the detailed information of the reaction from the server. The detailed information includes the reaction content, the number of users that added or removed the reaction, and the complete list of user IDs that added or removed the reaction."]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "chatClient"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getReactionDetail"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    messageId: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"messageId"'
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
                children: "    reaction: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"reaction"'
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
                children: "    cursor: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "null"
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
                children: "    pageSize: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "20"
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
                children: "  })"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "then"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "res"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    console."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "log"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(res);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  });"
              })
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "retrieve-the-reaction-in-the-historical-message-from-the-server",
        children: "Retrieve the reaction in the historical message from the server"
      }), _jsxs(_components.p, {
        children: ["When calling ", _jsx(_components.code, {
          children: "getHistoryMessages"
        }), " to retrieve historical messages from the server, if the message has a reaction attached to it, the retrieved message body also contains the information of the reaction."]
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
          icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "chatClient"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getHistoryMessages"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    targetId: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"targetId"'
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
                children: "    chatType: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"groupChat"'
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
                children: "    pageSize: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "20"
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
                children: "  })"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  ."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "then"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "messages"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    console."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "log"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(messages);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  });"
              })
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "next-steps-6",
        children: "Next steps"
      }), _jsxs(_components.p, {
        children: ["Reactions are also supported in the ", _jsx(_components.a, {
          href: "../../get-started-uikit",
          children: "Chat UIKit"
        }), ", which contains a wider range of emojis. You can also use the Chat SDK to implement reactions in your project."]
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
