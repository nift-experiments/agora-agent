import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Content moderation with Microsoft Azure",
  description: "Shows content moderation functionalities powered by Azure."
};
export let _markdown = `

Delivering a safe and appropriate chat environment to your users is essential. Chat gives you multiple options to intelligently moderate the chat content and handle inappropriate user behavior.

The following message management tools are available:

* Message reporting.
* Message moderation, including text and image moderation, profanity filtering, and domain filtering. Message moderation can be applied globally or to selected chat groups and chat rooms.

## Prerequisites [#prerequisites]

* You have created a valid [Agora developer account](/en/introduction/account#sign-up-for-an-agora-account).
* Moderation is not enabled by default. To use this feature, subscribe to the **Pro** or **Enterprise** [pricing plan](./pricing-plan-details) and enable it in [Agora Console](https://console.agora.io).
  <CalloutContainer type="info" />

Add-on fees are incurred if you use this feature. See [Pricing](/en/realtime-media/im/reference/pricing#optional-add-on-fee) for details.
\\:::

## Enable the moderation feature [#enable-the-moderation-feature]

1. Log in to Agora Console.
2. In the left navigation menu, click **Project Management** > **Config** for the project for which you want to enable the moderation feature > **Config** of Chat > **Features** > **Overview**.
3. On the **Chat Overview** page, turn on the switch of a specific moderation option, as shown in the following figure:

   ![enable\\_moderation\\_en](https://web-cdn.agora.io/docs-files/1656312916879)

<CalloutContainer type="info">
  <CalloutDescription>
    After enabling the moderation feature, see [Message moderation mechanism](/en/realtime-media/im/build/moderate-and-manage-client-behavior/moderation-mechanism) to understand how message moderation works and how to configure your moderation strategy.
  </CalloutDescription>
</CalloutContainer>

## Message management [#message-management]

The following table summarizes the message management tools provided by Chat:

| Function                  | Description                                                                                                                                                                                               |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message reporting         | The reporting API allows end-users to report objectionable messages directly from their applications. Moderators can view the report items on Agora Console and process the messages and message senders. |
| Text and image moderation | This feature is based on a third-party machine learning model and is used to automatically moderate text and image messages and block questionable content.                                               |
| Profanity filter          | The profanity filter can detect and filter out profanities contained words in messages according to configurations you set.                                                                               |
| Domain filter             | The domain filter can detect and filter out certain domains contained in messages according to configurations you set.                                                                                    |

### Implement the reporting feature [#implement-the-reporting-feature]

The Chat SDK provides a message reporting API, which allows end-users to report objectionable messages directly from their applications. After the Chat server receives the report, it stores the report and displays it on Agora Console. Moderators can view the report items on the Agora Console and process the messages and message senders according to their content policy.

To use the reporting feature, refer to the following code sample to call the reporting API:

<CodeBlockTabs defaultValue="android">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="android">
      Android
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="ios">
      iOS
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="web">
      Web
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="flutter">
      Flutter
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="react-native">
      React Native
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="unity">
      Unity
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="windows">
      Windows
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="android">
    \`\`\`java
        // msgid: The ID of the message to report.
        // label The label of the illegal message. You need to add custom labels, like, pornography or advertising. It corresponds to the \`Label\` field on the \`Message Report\` page on the Agora Console.
        // reason The reason for reporting the message. It cannot exceed 512 bytes. It corresponds to the \`Reason\` field on the \`Message Report\` page on the Agora Console.
    AgoraChatClient.getInstance().chatManager().asyncReportMessage(msgid, label, reason, new EMCallBack() {
            @Override
            public void onSuccess() {

                    }
            @Override
            public void onError(int code, String error) {

                    }
            @Override
            public void onProgress(int progress, String status) {

                    }
        });
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="ios">
    \`\`\`objc
    // msgId: The ID of the message to report.
    // tag: The label of the illegal message. You need to add custom labels, like, pornography or advertising. It corresponds to the \`Label\` field on the \`Message Report\` page on the Agora Console.
    // reason: The reason for reporting the message. It cannot exceed 512 bytes. It corresponds to the \`Reason\` field on the \`Message Report\` page on the Agora Console.
    [AgoraChatClient.sharedClient.chatManager reportMessageWithId:msgId
                                                           tag:tag
                                                        reason:reason
                                                    completion:nil];
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="web">
    \`\`\`javascript
    // reportType: The label of the illegal message. You need to add custom labels, like, pornography or advertising. It corresponds to the \`Label\` field on the \`Message Report\` page on the Agora Console.
    // reason: The reason for reporting the message. It cannot exceed 512 bytes. It corresponds to the \`Reason\` field on the \`Message Report\` page on the Agora Console.
    // messageId: The ID of the message to report.
    chatClient.reportMessage({
      reportType: "report type",
      reportReason: "report reason",
      messageId: "ID of the reported message",
    });
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="flutter">
    \`\`\`typescript
    // messageId: The ID of the message to report.
    // tag: The label of the illegal message. You need to add custom labels, like, pornography or advertising. It corresponds to the \`Label\` field on the \`Message Report\` page on the Agora Console.
    // reason: The reason for reporting the message. It cannot exceed 512 bytes. It corresponds to the \`Reason\` field on the \`Message Report\` page on the Agora Console.
    try {
      await ChatClient.getInstance.chatManager.reportMessage(
        messageId: messageId,
        tag: tag,
        reason: reason,
      );
    } on ChatError catch (e) {
    }
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="react-native">
    \`\`\`typescript
    // msgId: The ID of the message to report.
    // tag: The label of the illegal message. You need to add custom labels, like, pornography or advertising. It corresponds to the \`Label\` field on the \`Message Report\` page on the Agora Console.
    // reason: The reason for reporting the message. It cannot exceed 512 bytes. It corresponds to the \`Reason\` field on the \`Message Report\` page on the Agora Console.
    ChatClient.getInstance()
      .chatManager.reportMessage(msgId, tag, reason)
      .then((result) => {
        console.log("success: ", result);
      })
      .catch((error) => {
        console.log("fail: ", error);
      });
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="unity">
    \`\`\`csharp
    // msgId: The ID of the message to report.
    // tag: The label of the illegal message. You need to add custom labels, like, pornography or advertising. It corresponds to the \`Label\` field on the \`Message Report\` page on the Agora Console.
    // reason: The reason for reporting the message. It cannot exceed 512 bytes. It corresponds to the \`Reason\` field on the \`Message Report\` page on the Agora Console.
    SDKClient.Instance.ChatManager.ReportMessage(msgId, tag, reason, new CallBack(
        onSuccess: () =>
        {
            Debug.Log($"ReportMessage success.");
        },
        onError: (code, desc) =>
        {
            Debug.Log($"ReportMessage failed, code:{code}, desc:{desc}");
        }
    ));
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="windows">
    \`\`\`csharp
    // msgId: The ID of the message to report.
    // tag: The label of the illegal message. You need to add custom labels, like, pornography or advertising. It corresponds to the \`Label\` field on the \`Message Report\` page on the Agora Console.
    // reason: The reason for reporting the message. It cannot exceed 512 bytes. It corresponds to the \`Reason\` field on the Message Report page on the Agora Console.
    SDKClient.Instance.ChatManager.ReportMessage(msgId, tag, reason, new CallBack(
        onSuccess: () =>
        {
            Debug.Log($"ReportMessage success.");
        },
        onError: (code, desc) =>
        {
            Debug.Log($"ReportMessage failed, code:{code}, desc:{desc}");
        }
    ));
    \`\`\`
  </CodeBlockTab>
</CodeBlockTabs>

After a user reports a message from the application, moderators can check and deal with the report on Agora Console:

1. To enter the **Message Report** page, in the left navigation menu, click **Project Management** > **Config** for the project that you want > **Config** of Chat > **Message Report** > **History**, as shown in the following figure:

   ![report\\_en](https://web-cdn.agora.io/docs-files/1656312948783)

2. On the **Message Report** page, moderators can filter the message report items by time period, session type, or handling method. They can also search for a specific report item by user ID, group ID, or chat room ID. For the reports, Chat supports two handling methods: withdrawing the message or asking the sender to process the message.

### Text and image moderation [#text-and-image-moderation]

#### Introduction [#introduction]

Powered by [Microsoft Azure Moderator](https://azure.microsoft.com/en-us/services/cognitive-services/content-moderator/), Agora Chat's text and image moderation can scan messages for illegal and inappropriate text and image content and mark the content for moderation. Microsoft Azure Moderator uses the following four categories to moderate the message:

* Adult: The content may be considered sexually explicit or adult in certain situations.
* Mature: The content may be considered sexually suggestive or mature in certain situations.
* Offensive: The content may be considered offensive or abusive.
* Personal Data: The content contains personally identifiable information, which includes email address, US mailing address, IP address, and a US phone number. Please note that content moderation will determine an input to be a US mailing address only if the input contains all elements of a mailing address (e.g., zip code, state abbreviation).

After enabling the text and image moderation feature on Agora Console, you can set a sensitivity threshold for each moderation category. If the sensitivity threshold is exceeded, Agora Chat will handle the message as specified in the moderation rule. A greater sensitivity indicates more strict review and that Agora Chat will block more inappropriate content. You are advised to test the moderation rule to check whether the sensitivity threshold you set meets your requirements.

You can also impose a penalty on users who reach the violation limit within a time period. The moderation penalties include the following:

* Penalties at the app level or in one-to-one chat:
  * **Ban**: If the user is banned, he will be forced to go offline immediately and cannot log in to Agora Chat. The banned user cannot log in again until he or she is unbanned. For example, if a user sends inappropriate content 5 times within 1 minute, he or she will be banned. Once a user is banned, the user state is changed to \`Blocked\` on the **Users** page under **Operation Management**. You can click **Unblock** in the **Action** column or call the [RESTful API](/en/api-reference/api-ref/im/user-system-registration#unbanning-a-user) to unblock the user.
  * **Force Offline**: The user is forced to go offline and needs to log in again to use Agora Chat normally.
  * **Delete**: The user is removed. If the user is the group owner or chat room owner, the system will delete the corresponding group and chat room at the same time.

* Penalties for users in groups and chat rooms:
  * **Add to Block list**: If the user is added to the blocklist of the group or chat room, he cannot no longer view or receive the messages of the group or chat room.
  * **Kick Out**: The user is kicked out of the group or chat room. After the user is removed from the group, he or she will be removed from the message threads he or she joined in the group.
  * **Mute**: After the user is muted, he or she will not be able to send messages in the group or chat room. If a user is muted in a group, he or she cannot send messages in the message threads he or she joined in the group.

To see how moderation works and determine which moderation settings suit your needs, you can test different text strings and images on Agora Console.

#### Create a moderation rule [#create-a-moderation-rule]

Taking a one-to-one chat text as an example, follow these steps to create a text moderation rule:

1. To enter the **Rule Config** page, in the left navigation menu, click **Project Management** > **Config** for the project for which you want > **Config** of Chat > **Text Moderation** or **Image Moderation** > **Rule Config**, as shown in the following figure:

   ![text\\_rule\\_en](https://web-cdn.agora.io/docs-files/1656312971641)

2. To create a text moderation rule, click **Add**:

   ![text\\_rule\\_create\\_en](https://assets-docs.agora.io/images/im/text_rule_create_en.png)

   The following table lists the fields that a text moderation rule supports:

   | Field             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
   | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | Rule Name         | The rule name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
   | Conversation Type | The moderation scope, which can be one of the following: a one-to-one chat, chat group or chat room, chat groups or chat rooms. If you set a rule for a specific chat group or room, the global moderation rules for chat groups and rooms are overwritten.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
   | Enable            | Determine whether to turn a rule on or off.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
   | Message Handling  | When the moderation result is **Rejected**, you can set the action on the moderated message to one of the following options:Blocks the message. Agora recommends using this setting for online messages after you fully test this moderation rule and ensure it suits your needs.(Default) Sends the message. Agora recommends using this setting when you are testing this moderation rule and do not want this rule to affect online messages.Replaces the message with \\*\\*\\*.When the moderation action fails (for example, the timeout period of the text audit interface is 200 milliseconds; if no result  is returned within 200 milliseconds, this moderation action times out), the message processing policy can be set to one of the following options:Blocks the message.(Default) Sends the message.If the action on the moderated message is set as **Blocks the message**, the \`508, MESSAGE_EXTERNAL_LOGIC_BLOCKED\` error is returned after the message is blocked. You can set whether to indicate this error in the application. If you choose to indicate this error in the application, a red exclamation mark is displayed before the blocked message. |
   | Model Selection   | Set whether to use AI alongside your keyword lists.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
   | Word Sensitivity  | Set the threshold for each moderation category.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
   | User management   | Impose a penalty on users who reach the violation limit within a time period. The moderation penalties include the following: banning the user, forcing the user to go offline, or deleting the user.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

3. After creating a rule, you can **edit** or **delete** the rule:

   ![text\\_rule\\_edit\\_en](https://assets-docs.agora.io/images/im/text_rule_edit_en.png)

#### Conduct a text or image moderation rule test [#conduct-a-text-or-image-moderation-rule-test]

1. To enter the **Rule Test** page, in the left navigation menu, click **Project Management** > **Config** for the project that you want > **Config** of Chat > **Text Moderation** or **Image Moderation** > **Rule Test**, as shown in the following figure:

   ![text\\_rule\\_test\\_en](https://assets-docs.agora.io/images/im/text_rule_test_en.png)

2. Select a rule, fill in the text to moderate, and click **Check** to test the rule. The moderation result is displayed on the same page.

### Profanity filter [#profanity-filter]

The profanity filter can detect and filter out profanities contained words in messages according to configurations you set.

Follow these steps to specify a profanity filter configuration:

1. To enter the **Rule Config** page, in the left navigation menu, click **Project Management** > **Config** for the project that you want > **Config** of Chat > **Word List** > **Rule Config**, as shown in the following figure:

   ![keyword\\_en](https://web-cdn.agora.io/docs-files/1656313419195)

2. On the **Rule Config** page, you can add or delete words and determine which filtering method to apply to messages that contain the specified keywords. You can replace the word with \\*\\*\\* or simply not send the word. You can add up to 500 words to the list. Contact [support@agora.io](mailto\\:support@agora.io) if you need to extend this limit to 100,000 words.

### Domain filter [#domain-filter]

The domain filter can detect and filter out certain domains contained in messages according to configurations you set.

Follow these steps to specify a domain filter configuration:

1. To enter the **Rule Config** page, in the left navigation menu, click **Project Management** > **Config** for the project that you want > **Config** of Chat > **Domain Filter** > **Rule Config**, as shown in the following figure:

   ![domain\\_en](https://web-cdn.agora.io/docs-files/1656313436703)

2. To create a domain filtering rule, click **Add**:

   ![domain\\_rule\\_en](https://web-cdn.agora.io/docs-files/1656313449970)

   The following table lists the fields that a domain filtering rule supports:

   | Field             | Description                                                                                                                                                                                                                                                 |
   | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | Rule name         | The rule name.                                                                                                                                                                                                                                              |
   | Conversation type | The moderation scope, which can be one of the following: a one-to-one chat, chat group or chat room, chat groups or chat rooms. If you set a rule for a specific chat group or room, the global moderation rules for chat groups and rooms are overwritten. |
   | Enable            | Determines whether to turn a rule on or off.                                                                                                                                                                                                                |
   | Message handling  | Blocks messages containing the domain.Only allows messages containing the domain to pass.Replaces the domain in the message with \\*\\*\\*. Takes no action on the moderated message.                                                                          |
   | Domain name       | Adds a domain to the rule.                                                                                                                                                                                                                                  |
   | User management   | Imposes a penalty on users who reach the violation limit within a time period. The moderation penalties include the following: banning the user, forcing the user to go offline, or deleting the user.                                                      |

3. After creating a rule, you can **edit** or **delete** the rule:

   ![domain\\_rule\\_edit\\_en](https://web-cdn.agora.io/docs-files/1656313466023)

### Check the moderation history [#check-the-moderation-history]

You can check the history of the **text moderation**, **image moderation**, **profanity filter**, and **domain filter** on Agora Console. You can filter the moderation items by the time period, session type, or moderation result. You can also search for a specific item by the sender ID or receiver ID.

![history](https://web-cdn.agora.io/docs-files/1657017751717)

## User management [#user-management]

You can impose a penalty on users for repeated violations. The penalties can be applied as a global application setting, or only to a specific chat group or room. The following table lists all the user moderation options that Chat supports:

User moderation options
Actions
Description

Global actions on users
Banning a user
A banned user immediately goes offline and is not allowed to log in again until the ban is lifted.

Forcing a user to go offline
Users who are forced to go offline need to log in again to use the Chat service.

Deleting a user
If the deleted user is the owner of a chat group or chat room, the group or room is also deleted.

Chat group management
Muting a user in a chat group
A muted user cannot send messages in this chat group until unmuted.

Muting all users in a chat group
Members in a muted group cannot send messages until the muted state is lifted.

Managing a group blocklist
Users who are added to the group blocklist are removed from the group immediately and cannot join the group again.

Removing a user from a chat group
The removed user can no longer receive the messages in this group until rejoining the group.

Chat room management
Muting a user in a chat room
A muted user cannot send messages in this chat room until unmuted.

Muting all users in a chat room
Members in a muted room cannot send messages until the muted state is lifted.

Managing a room blocklist
Users who are added to the room blocklist are removed from the room immediately and cannot join the room again.

Removing a user from a chat room
The removed user can no longer receive the messages in this room until rejoining the room.

### Take global actions on users [#take-global-actions-on-users]

1. To enter the **User Management** page, in the left navigation menu, click **Project Management** > **Config** for the project that you want > **Config** of Chat > **Operation Management** > **User**, as shown in the following figure:

   ![user\\_manage](https://web-cdn.agora.io/docs-files/1657017861309)

2. To take action on a user (banning a user, deleting a user, or forcing a user to go offline), search for the user ID, and click **More**:

   ![user\\_manage\\_action](https://web-cdn.agora.io/docs-files/1657017977179)

### Take actions on chat group members [#take-actions-on-chat-group-members]

1. To enter the Chat Group Management page, in the left navigation menu, click **Project Management** > **Config** for the project that you want > **Config** of Chat > **Operation Management** > **Group**, as shown in the following figure:

   ![group\\_manage](https://web-cdn.agora.io/docs-files/1657018187786)

2. To take action on a group member (removing a member from the group or adding a user to the group blocklist), search for the group ID, and click **More**:

   ![group\\_manage\\_action](https://web-cdn.agora.io/docs-files/1657018261864)

3. You can also click the group ID to enter the group's moderation dashboard, where you can manage the group info, group members, and messages in real-time:

   To use this feature, enable it on the **Features** > **Overview** page.

   ![group\\_manage\\_live](https://web-cdn.agora.io/docs-files/1657018366024)

### Take actions on chat room members [#take-actions-on-chat-room-members]

1. To enter the Chat Room Management page, in the left navigation menu, click **Project Management** > **Config** for the project that you want > **Config** of Chat > **Chat Room Management**, as shown in the following figure:

   ![room\\_manage](https://web-cdn.agora.io/docs-files/1657018521135)

2. To take action on a room member (removing a member from the room or adding a user to the room blocklist), search for the room ID, and click **More**:

   ![room\\_manage\\_action](https://web-cdn.agora.io/docs-files/1657018546001)

3. You can also click the room ID to enter the room's moderation dashboard, where you can manage the room info, room members, and messages in real-time:

   To use this feature, enable it on the **Features** > **Overview** page.

   ![room\\_manage\\_live](https://web-cdn.agora.io/docs-files/1657018564652)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Delivering a safe and appropriate chat environment to your users is essential. Chat gives you multiple options to intelligently moderate the chat content and handle inappropriate user behavior."
  }, {
    heading: undefined,
    content: "The following message management tools are available:"
  }, {
    heading: undefined,
    content: "Message reporting."
  }, {
    heading: undefined,
    content: "Message moderation, including text and image moderation, profanity filtering, and domain filtering. Message moderation can be applied globally or to selected chat groups and chat rooms."
  }, {
    heading: "prerequisites",
    content: "You have created a valid Agora developer account."
  }, {
    heading: "prerequisites",
    content: "Moderation is not enabled by default. To use this feature, subscribe to the **Pro** or **Enterprise** pricing plan and enable it in Agora Console."
  }, {
    heading: "prerequisites",
    content: `Add-on fees are incurred if you use this feature. See Pricing for details.
\\:::`
  }, {
    heading: "enable-the-moderation-feature",
    content: "Log in to Agora Console."
  }, {
    heading: "enable-the-moderation-feature",
    content: "In the left navigation menu, click **Project Management** > **Config** for the project for which you want to enable the moderation feature > **Config** of Chat > **Features** > **Overview**."
  }, {
    heading: "enable-the-moderation-feature",
    content: "On the **Chat Overview** page, turn on the switch of a specific moderation option, as shown in the following figure:"
  }, {
    heading: "enable-the-moderation-feature",
    content: "After enabling the moderation feature, see Message moderation mechanism to understand how message moderation works and how to configure your moderation strategy."
  }, {
    heading: "message-management",
    content: "The following table summarizes the message management tools provided by Chat:"
  }, {
    heading: "message-management",
    content: "Function"
  }, {
    heading: "message-management",
    content: "Description"
  }, {
    heading: "message-management",
    content: "Message reporting"
  }, {
    heading: "message-management",
    content: "The reporting API allows end-users to report objectionable messages directly from their applications. Moderators can view the report items on Agora Console and process the messages and message senders."
  }, {
    heading: "message-management",
    content: "Text and image moderation"
  }, {
    heading: "message-management",
    content: "This feature is based on a third-party machine learning model and is used to automatically moderate text and image messages and block questionable content."
  }, {
    heading: "message-management",
    content: "Profanity filter"
  }, {
    heading: "message-management",
    content: "The profanity filter can detect and filter out profanities contained words in messages according to configurations you set."
  }, {
    heading: "message-management",
    content: "Domain filter"
  }, {
    heading: "message-management",
    content: "The domain filter can detect and filter out certain domains contained in messages according to configurations you set."
  }, {
    heading: "implement-the-reporting-feature",
    content: "The Chat SDK provides a message reporting API, which allows end-users to report objectionable messages directly from their applications. After the Chat server receives the report, it stores the report and displays it on Agora Console. Moderators can view the report items on the Agora Console and process the messages and message senders according to their content policy."
  }, {
    heading: "implement-the-reporting-feature",
    content: "To use the reporting feature, refer to the following code sample to call the reporting API:"
  }, {
    heading: "implement-the-reporting-feature",
    content: "After a user reports a message from the application, moderators can check and deal with the report on Agora Console:"
  }, {
    heading: "implement-the-reporting-feature",
    content: "To enter the **Message Report** page, in the left navigation menu, click **Project Management** > **Config** for the project that you want > **Config** of Chat > **Message Report** > **History**, as shown in the following figure:"
  }, {
    heading: "implement-the-reporting-feature",
    content: "On the **Message Report** page, moderators can filter the message report items by time period, session type, or handling method. They can also search for a specific report item by user ID, group ID, or chat room ID. For the reports, Chat supports two handling methods: withdrawing the message or asking the sender to process the message."
  }, {
    heading: "introduction",
    content: "Powered by Microsoft Azure Moderator, Agora Chat's text and image moderation can scan messages for illegal and inappropriate text and image content and mark the content for moderation. Microsoft Azure Moderator uses the following four categories to moderate the message:"
  }, {
    heading: "introduction",
    content: "Adult: The content may be considered sexually explicit or adult in certain situations."
  }, {
    heading: "introduction",
    content: "Mature: The content may be considered sexually suggestive or mature in certain situations."
  }, {
    heading: "introduction",
    content: "Offensive: The content may be considered offensive or abusive."
  }, {
    heading: "introduction",
    content: "Personal Data: The content contains personally identifiable information, which includes email address, US mailing address, IP address, and a US phone number. Please note that content moderation will determine an input to be a US mailing address only if the input contains all elements of a mailing address (e.g., zip code, state abbreviation)."
  }, {
    heading: "introduction",
    content: "After enabling the text and image moderation feature on Agora Console, you can set a sensitivity threshold for each moderation category. If the sensitivity threshold is exceeded, Agora Chat will handle the message as specified in the moderation rule. A greater sensitivity indicates more strict review and that Agora Chat will block more inappropriate content. You are advised to test the moderation rule to check whether the sensitivity threshold you set meets your requirements."
  }, {
    heading: "introduction",
    content: "You can also impose a penalty on users who reach the violation limit within a time period. The moderation penalties include the following:"
  }, {
    heading: "introduction",
    content: "Penalties at the app level or in one-to-one chat:"
  }, {
    heading: "introduction",
    content: "**Ban**: If the user is banned, he will be forced to go offline immediately and cannot log in to Agora Chat. The banned user cannot log in again until he or she is unbanned. For example, if a user sends inappropriate content 5 times within 1 minute, he or she will be banned. Once a user is banned, the user state is changed to `Blocked` on the **Users** page under **Operation Management**. You can click **Unblock** in the **Action** column or call the RESTful API to unblock the user."
  }, {
    heading: "introduction",
    content: "**Force Offline**: The user is forced to go offline and needs to log in again to use Agora Chat normally."
  }, {
    heading: "introduction",
    content: "**Delete**: The user is removed. If the user is the group owner or chat room owner, the system will delete the corresponding group and chat room at the same time."
  }, {
    heading: "introduction",
    content: "Penalties for users in groups and chat rooms:"
  }, {
    heading: "introduction",
    content: "**Add to Block list**: If the user is added to the blocklist of the group or chat room, he cannot no longer view or receive the messages of the group or chat room."
  }, {
    heading: "introduction",
    content: "**Kick Out**: The user is kicked out of the group or chat room. After the user is removed from the group, he or she will be removed from the message threads he or she joined in the group."
  }, {
    heading: "introduction",
    content: "**Mute**: After the user is muted, he or she will not be able to send messages in the group or chat room. If a user is muted in a group, he or she cannot send messages in the message threads he or she joined in the group."
  }, {
    heading: "introduction",
    content: "To see how moderation works and determine which moderation settings suit your needs, you can test different text strings and images on Agora Console."
  }, {
    heading: "create-a-moderation-rule",
    content: "Taking a one-to-one chat text as an example, follow these steps to create a text moderation rule:"
  }, {
    heading: "create-a-moderation-rule",
    content: "To enter the **Rule Config** page, in the left navigation menu, click **Project Management** > **Config** for the project for which you want > **Config** of Chat > **Text Moderation** or **Image Moderation** > **Rule Config**, as shown in the following figure:"
  }, {
    heading: "create-a-moderation-rule",
    content: "To create a text moderation rule, click **Add**:"
  }, {
    heading: "create-a-moderation-rule",
    content: "The following table lists the fields that a text moderation rule supports:"
  }, {
    heading: "create-a-moderation-rule",
    content: "Field"
  }, {
    heading: "create-a-moderation-rule",
    content: "Description"
  }, {
    heading: "create-a-moderation-rule",
    content: "Rule Name"
  }, {
    heading: "create-a-moderation-rule",
    content: "The rule name."
  }, {
    heading: "create-a-moderation-rule",
    content: "Conversation Type"
  }, {
    heading: "create-a-moderation-rule",
    content: "The moderation scope, which can be one of the following: a one-to-one chat, chat group or chat room, chat groups or chat rooms. If you set a rule for a specific chat group or room, the global moderation rules for chat groups and rooms are overwritten."
  }, {
    heading: "create-a-moderation-rule",
    content: "Enable"
  }, {
    heading: "create-a-moderation-rule",
    content: "Determine whether to turn a rule on or off."
  }, {
    heading: "create-a-moderation-rule",
    content: "Message Handling"
  }, {
    heading: "create-a-moderation-rule",
    content: "When the moderation result is **Rejected**, you can set the action on the moderated message to one of the following options:Blocks the message. Agora recommends using this setting for online messages after you fully test this moderation rule and ensure it suits your needs.(Default) Sends the message. Agora recommends using this setting when you are testing this moderation rule and do not want this rule to affect online messages.Replaces the message with \\*\\*\\*.When the moderation action fails (for example, the timeout period of the text audit interface is 200 milliseconds; if no result  is returned within 200 milliseconds, this moderation action times out), the message processing policy can be set to one of the following options:Blocks the message.(Default) Sends the message.If the action on the moderated message is set as **Blocks the message**, the `508, MESSAGE_EXTERNAL_LOGIC_BLOCKED` error is returned after the message is blocked. You can set whether to indicate this error in the application. If you choose to indicate this error in the application, a red exclamation mark is displayed before the blocked message."
  }, {
    heading: "create-a-moderation-rule",
    content: "Model Selection"
  }, {
    heading: "create-a-moderation-rule",
    content: "Set whether to use AI alongside your keyword lists."
  }, {
    heading: "create-a-moderation-rule",
    content: "Word Sensitivity"
  }, {
    heading: "create-a-moderation-rule",
    content: "Set the threshold for each moderation category."
  }, {
    heading: "create-a-moderation-rule",
    content: "User management"
  }, {
    heading: "create-a-moderation-rule",
    content: "Impose a penalty on users who reach the violation limit within a time period. The moderation penalties include the following: banning the user, forcing the user to go offline, or deleting the user."
  }, {
    heading: "create-a-moderation-rule",
    content: "After creating a rule, you can **edit** or **delete** the rule:"
  }, {
    heading: "conduct-a-text-or-image-moderation-rule-test",
    content: "To enter the **Rule Test** page, in the left navigation menu, click **Project Management** > **Config** for the project that you want > **Config** of Chat > **Text Moderation** or **Image Moderation** > **Rule Test**, as shown in the following figure:"
  }, {
    heading: "conduct-a-text-or-image-moderation-rule-test",
    content: "Select a rule, fill in the text to moderate, and click **Check** to test the rule. The moderation result is displayed on the same page."
  }, {
    heading: "profanity-filter",
    content: "The profanity filter can detect and filter out profanities contained words in messages according to configurations you set."
  }, {
    heading: "profanity-filter",
    content: "Follow these steps to specify a profanity filter configuration:"
  }, {
    heading: "profanity-filter",
    content: "To enter the **Rule Config** page, in the left navigation menu, click **Project Management** > **Config** for the project that you want > **Config** of Chat > **Word List** > **Rule Config**, as shown in the following figure:"
  }, {
    heading: "profanity-filter",
    content: "On the **Rule Config** page, you can add or delete words and determine which filtering method to apply to messages that contain the specified keywords. You can replace the word with \\*\\*\\* or simply not send the word. You can add up to 500 words to the list. Contact support\\@agora.io if you need to extend this limit to 100,000 words."
  }, {
    heading: "domain-filter",
    content: "The domain filter can detect and filter out certain domains contained in messages according to configurations you set."
  }, {
    heading: "domain-filter",
    content: "Follow these steps to specify a domain filter configuration:"
  }, {
    heading: "domain-filter",
    content: "To enter the **Rule Config** page, in the left navigation menu, click **Project Management** > **Config** for the project that you want > **Config** of Chat > **Domain Filter** > **Rule Config**, as shown in the following figure:"
  }, {
    heading: "domain-filter",
    content: "To create a domain filtering rule, click **Add**:"
  }, {
    heading: "domain-filter",
    content: "The following table lists the fields that a domain filtering rule supports:"
  }, {
    heading: "domain-filter",
    content: "Field"
  }, {
    heading: "domain-filter",
    content: "Description"
  }, {
    heading: "domain-filter",
    content: "Rule name"
  }, {
    heading: "domain-filter",
    content: "The rule name."
  }, {
    heading: "domain-filter",
    content: "Conversation type"
  }, {
    heading: "domain-filter",
    content: "The moderation scope, which can be one of the following: a one-to-one chat, chat group or chat room, chat groups or chat rooms. If you set a rule for a specific chat group or room, the global moderation rules for chat groups and rooms are overwritten."
  }, {
    heading: "domain-filter",
    content: "Enable"
  }, {
    heading: "domain-filter",
    content: "Determines whether to turn a rule on or off."
  }, {
    heading: "domain-filter",
    content: "Message handling"
  }, {
    heading: "domain-filter",
    content: "Blocks messages containing the domain.Only allows messages containing the domain to pass.Replaces the domain in the message with \\*\\*\\*. Takes no action on the moderated message."
  }, {
    heading: "domain-filter",
    content: "Domain name"
  }, {
    heading: "domain-filter",
    content: "Adds a domain to the rule."
  }, {
    heading: "domain-filter",
    content: "User management"
  }, {
    heading: "domain-filter",
    content: "Imposes a penalty on users who reach the violation limit within a time period. The moderation penalties include the following: banning the user, forcing the user to go offline, or deleting the user."
  }, {
    heading: "domain-filter",
    content: "After creating a rule, you can **edit** or **delete** the rule:"
  }, {
    heading: "check-the-moderation-history",
    content: "You can check the history of the **text moderation**, **image moderation**, **profanity filter**, and **domain filter** on Agora Console. You can filter the moderation items by the time period, session type, or moderation result. You can also search for a specific item by the sender ID or receiver ID."
  }, {
    heading: "user-management",
    content: "You can impose a penalty on users for repeated violations. The penalties can be applied as a global application setting, or only to a specific chat group or room. The following table lists all the user moderation options that Chat supports:"
  }, {
    heading: "user-management",
    content: `User moderation options
Actions
Description`
  }, {
    heading: "user-management",
    content: `Global actions on users
Banning a user
A banned user immediately goes offline and is not allowed to log in again until the ban is lifted.`
  }, {
    heading: "user-management",
    content: `Forcing a user to go offline
Users who are forced to go offline need to log in again to use the Chat service.`
  }, {
    heading: "user-management",
    content: `Deleting a user
If the deleted user is the owner of a chat group or chat room, the group or room is also deleted.`
  }, {
    heading: "user-management",
    content: `Chat group management
Muting a user in a chat group
A muted user cannot send messages in this chat group until unmuted.`
  }, {
    heading: "user-management",
    content: `Muting all users in a chat group
Members in a muted group cannot send messages until the muted state is lifted.`
  }, {
    heading: "user-management",
    content: `Managing a group blocklist
Users who are added to the group blocklist are removed from the group immediately and cannot join the group again.`
  }, {
    heading: "user-management",
    content: `Removing a user from a chat group
The removed user can no longer receive the messages in this group until rejoining the group.`
  }, {
    heading: "user-management",
    content: `Chat room management
Muting a user in a chat room
A muted user cannot send messages in this chat room until unmuted.`
  }, {
    heading: "user-management",
    content: `Muting all users in a chat room
Members in a muted room cannot send messages until the muted state is lifted.`
  }, {
    heading: "user-management",
    content: `Managing a room blocklist
Users who are added to the room blocklist are removed from the room immediately and cannot join the room again.`
  }, {
    heading: "user-management",
    content: `Removing a user from a chat room
The removed user can no longer receive the messages in this room until rejoining the room.`
  }, {
    heading: "take-global-actions-on-users",
    content: "To enter the **User Management** page, in the left navigation menu, click **Project Management** > **Config** for the project that you want > **Config** of Chat > **Operation Management** > **User**, as shown in the following figure:"
  }, {
    heading: "take-global-actions-on-users",
    content: "To take action on a user (banning a user, deleting a user, or forcing a user to go offline), search for the user ID, and click **More**:"
  }, {
    heading: "take-actions-on-chat-group-members",
    content: "To enter the Chat Group Management page, in the left navigation menu, click **Project Management** > **Config** for the project that you want > **Config** of Chat > **Operation Management** > **Group**, as shown in the following figure:"
  }, {
    heading: "take-actions-on-chat-group-members",
    content: "To take action on a group member (removing a member from the group or adding a user to the group blocklist), search for the group ID, and click **More**:"
  }, {
    heading: "take-actions-on-chat-group-members",
    content: "You can also click the group ID to enter the group's moderation dashboard, where you can manage the group info, group members, and messages in real-time:"
  }, {
    heading: "take-actions-on-chat-group-members",
    content: "To use this feature, enable it on the **Features** > **Overview** page."
  }, {
    heading: "take-actions-on-chat-room-members",
    content: "To enter the Chat Room Management page, in the left navigation menu, click **Project Management** > **Config** for the project that you want > **Config** of Chat > **Chat Room Management**, as shown in the following figure:"
  }, {
    heading: "take-actions-on-chat-room-members",
    content: "To take action on a room member (removing a member from the room or adding a user to the room blocklist), search for the room ID, and click **More**:"
  }, {
    heading: "take-actions-on-chat-room-members",
    content: "You can also click the room ID to enter the room's moderation dashboard, where you can manage the room info, room members, and messages in real-time:"
  }, {
    heading: "take-actions-on-chat-room-members",
    content: "To use this feature, enable it on the **Features** > **Overview** page."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "enable-the-moderation-feature",
    content: "Enable the moderation feature"
  }, {
    id: "message-management",
    content: "Message management"
  }, {
    id: "implement-the-reporting-feature",
    content: "Implement the reporting feature"
  }, {
    id: "text-and-image-moderation",
    content: "Text and image moderation"
  }, {
    id: "introduction",
    content: "Introduction"
  }, {
    id: "create-a-moderation-rule",
    content: "Create a moderation rule"
  }, {
    id: "conduct-a-text-or-image-moderation-rule-test",
    content: "Conduct a text or image moderation rule test"
  }, {
    id: "profanity-filter",
    content: "Profanity filter"
  }, {
    id: "domain-filter",
    content: "Domain filter"
  }, {
    id: "check-the-moderation-history",
    content: "Check the moderation history"
  }, {
    id: "user-management",
    content: "User management"
  }, {
    id: "take-global-actions-on-users",
    content: "Take global actions on users"
  }, {
    id: "take-actions-on-chat-group-members",
    content: "Take actions on chat group members"
  }, {
    id: "take-actions-on-chat-room-members",
    content: "Take actions on chat room members"
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
  url: "#enable-the-moderation-feature",
  title: _jsx(_Fragment, {
    children: "Enable the moderation feature"
  })
}, {
  depth: 2,
  url: "#message-management",
  title: _jsx(_Fragment, {
    children: "Message management"
  })
}, {
  depth: 3,
  url: "#implement-the-reporting-feature",
  title: _jsx(_Fragment, {
    children: "Implement the reporting feature"
  })
}, {
  depth: 3,
  url: "#text-and-image-moderation",
  title: _jsx(_Fragment, {
    children: "Text and image moderation"
  })
}, {
  depth: 4,
  url: "#introduction",
  title: _jsx(_Fragment, {
    children: "Introduction"
  })
}, {
  depth: 4,
  url: "#create-a-moderation-rule",
  title: _jsx(_Fragment, {
    children: "Create a moderation rule"
  })
}, {
  depth: 4,
  url: "#conduct-a-text-or-image-moderation-rule-test",
  title: _jsx(_Fragment, {
    children: "Conduct a text or image moderation rule test"
  })
}, {
  depth: 3,
  url: "#profanity-filter",
  title: _jsx(_Fragment, {
    children: "Profanity filter"
  })
}, {
  depth: 3,
  url: "#domain-filter",
  title: _jsx(_Fragment, {
    children: "Domain filter"
  })
}, {
  depth: 3,
  url: "#check-the-moderation-history",
  title: _jsx(_Fragment, {
    children: "Check the moderation history"
  })
}, {
  depth: 2,
  url: "#user-management",
  title: _jsx(_Fragment, {
    children: "User management"
  })
}, {
  depth: 3,
  url: "#take-global-actions-on-users",
  title: _jsx(_Fragment, {
    children: "Take global actions on users"
  })
}, {
  depth: 3,
  url: "#take-actions-on-chat-group-members",
  title: _jsx(_Fragment, {
    children: "Take actions on chat group members"
  })
}, {
  depth: 3,
  url: "#take-actions-on-chat-room-members",
  title: _jsx(_Fragment, {
    children: "Take actions on chat room members"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CodeBlockTab)
    _missingMdxReference("CodeBlockTab", true);
  if (!CodeBlockTabs)
    _missingMdxReference("CodeBlockTabs", true);
  if (!CodeBlockTabsList)
    _missingMdxReference("CodeBlockTabsList", true);
  if (!CodeBlockTabsTrigger)
    _missingMdxReference("CodeBlockTabsTrigger", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Delivering a safe and appropriate chat environment to your users is essential. Chat gives you multiple options to intelligently moderate the chat content and handle inappropriate user behavior."
    }), `
`, _jsx(_components.p, {
      children: "The following message management tools are available:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Message reporting."
      }), `
`, _jsx(_components.li, {
        children: "Message moderation, including text and image moderation, profanity filtering, and domain filtering. Message moderation can be applied globally or to selected chat groups and chat rooms."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["You have created a valid ", _jsx(_components.a, {
          href: "/en/introduction/account#sign-up-for-an-agora-account",
          children: "Agora developer account"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Moderation is not enabled by default. To use this feature, subscribe to the ", _jsx(_components.strong, {
          children: "Pro"
        }), " or ", _jsx(_components.strong, {
          children: "Enterprise"
        }), " ", _jsx(_components.a, {
          href: "./pricing-plan-details",
          children: "pricing plan"
        }), " and enable it in ", _jsx(_components.a, {
          href: "https://console.agora.io",
          children: "Agora Console"
        }), ".", `
`, _jsx(CalloutContainer, {
          type: "info"
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["Add-on fees are incurred if you use this feature. See ", _jsx(_components.a, {
        href: "/en/realtime-media/im/reference/pricing#optional-add-on-fee",
        children: "Pricing"
      }), ` for details.
:::`]
    }), `
`, _jsx(_components.h2, {
      id: "enable-the-moderation-feature",
      children: "Enable the moderation feature"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Log in to Agora Console."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the left navigation menu, click ", _jsx(_components.strong, {
            children: "Project Management"
          }), " > ", _jsx(_components.strong, {
            children: "Config"
          }), " for the project for which you want to enable the moderation feature > ", _jsx(_components.strong, {
            children: "Config"
          }), " of Chat > ", _jsx(_components.strong, {
            children: "Features"
          }), " > ", _jsx(_components.strong, {
            children: "Overview"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the ", _jsx(_components.strong, {
            children: "Chat Overview"
          }), " page, turn on the switch of a specific moderation option, as shown in the following figure:"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1656312916879",
            alt: "enable_moderation_en"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["After enabling the moderation feature, see ", _jsx(_components.a, {
            href: "/en/realtime-media/im/build/moderate-and-manage-client-behavior/moderation-mechanism",
            children: "Message moderation mechanism"
          }), " to understand how message moderation works and how to configure your moderation strategy."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "message-management",
      children: "Message management"
    }), `
`, _jsx(_components.p, {
      children: "The following table summarizes the message management tools provided by Chat:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Function"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Message reporting"
          }), _jsx(_components.td, {
            children: "The reporting API allows end-users to report objectionable messages directly from their applications. Moderators can view the report items on Agora Console and process the messages and message senders."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Text and image moderation"
          }), _jsx(_components.td, {
            children: "This feature is based on a third-party machine learning model and is used to automatically moderate text and image messages and block questionable content."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Profanity filter"
          }), _jsx(_components.td, {
            children: "The profanity filter can detect and filter out profanities contained words in messages according to configurations you set."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Domain filter"
          }), _jsx(_components.td, {
            children: "The domain filter can detect and filter out certain domains contained in messages according to configurations you set."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "implement-the-reporting-feature",
      children: "Implement the reporting feature"
    }), `
`, _jsx(_components.p, {
      children: "The Chat SDK provides a message reporting API, which allows end-users to report objectionable messages directly from their applications. After the Chat server receives the report, it stores the report and displays it on Agora Console. Moderators can view the report items on the Agora Console and process the messages and message senders according to their content policy."
    }), `
`, _jsx(_components.p, {
      children: "To use the reporting feature, refer to the following code sample to call the reporting API:"
    }), `
`, _jsxs(CodeBlockTabs, {
      defaultValue: "android",
      children: [_jsxs(CodeBlockTabsList, {
        children: [_jsx(CodeBlockTabsTrigger, {
          value: "android",
          children: "Android"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "ios",
          children: "iOS"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "web",
          children: "Web"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "flutter",
          children: "Flutter"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "react-native",
          children: "React Native"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "unity",
          children: "Unity"
        }), _jsx(CodeBlockTabsTrigger, {
          value: "windows",
          children: "Windows"
        })]
      }), _jsx(CodeBlockTab, {
        value: "android",
        children: _jsx(_Fragment, {
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
                  children: "    // msgid: The ID of the message to report."
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // label The label of the illegal message. You need to add custom labels, like, pornography or advertising. It corresponds to the `Label` field on the `Message Report` page on the Agora Console."
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // reason The reason for reporting the message. It cannot exceed 512 bytes. It corresponds to the `Reason` field on the `Message Report` page on the Agora Console."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "AgoraChatClient."
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
                  children: "asyncReportMessage"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(msgid, label, reason, "
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
                  children: " EMCallBack"
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
                  children: "        @"
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
                  children: "        public"
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
                  children: "                }"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        @"
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
                  children: "        public"
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
                  children: " code"
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
                  children: "error"
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
                  children: "                }"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        @"
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
                  children: "        public"
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
                  children: " progress"
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
                  children: "status"
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
                  children: "    });"
                })
              })]
            })
          })
        })
      }), _jsx(CodeBlockTab, {
        value: "ios",
        children: _jsx(_Fragment, {
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
                  children: "// msgId: The ID of the message to report."
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// tag: The label of the illegal message. You need to add custom labels, like, pornography or advertising. It corresponds to the `Label` field on the `Message Report` page on the Agora Console."
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// reason: The reason for reporting the message. It cannot exceed 512 bytes. It corresponds to the `Reason` field on the `Message Report` page on the Agora Console."
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
                  children: "reportMessageWithId:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "msgId"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "                                                       tag:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "tag"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "                                                    reason:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "reason"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "                                                completion:nil"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "];"
                })]
              })]
            })
          })
        })
      }), _jsx(CodeBlockTab, {
        value: "web",
        children: _jsx(_Fragment, {
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
                  children: "// reportType: The label of the illegal message. You need to add custom labels, like, pornography or advertising. It corresponds to the `Label` field on the `Message Report` page on the Agora Console."
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// reason: The reason for reporting the message. It cannot exceed 512 bytes. It corresponds to the `Reason` field on the `Message Report` page on the Agora Console."
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// messageId: The ID of the message to report."
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
                  children: "reportMessage"
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
                  children: "  reportType: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"report type"'
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
                  children: "  reportReason: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"report reason"'
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
                  children: "  messageId: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"ID of the reported message"'
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
                  children: "});"
                })
              })]
            })
          })
        })
      }), _jsx(CodeBlockTab, {
        value: "flutter",
        children: _jsx(_Fragment, {
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
                  children: "// messageId: The ID of the message to report."
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// tag: The label of the illegal message. You need to add custom labels, like, pornography or advertising. It corresponds to the `Label` field on the `Message Report` page on the Agora Console."
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// reason: The reason for reporting the message. It cannot exceed 512 bytes. It corresponds to the `Reason` field on the `Message Report` page on the Agora Console."
                })
              }), `
`, _jsxs(_components.span, {
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ChatClient.getInstance.chatManager."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "reportMessage"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    messageId: messageId,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    tag: tag,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    reason: reason,"
                })
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
                  children: "} on ChatError "
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
        })
      }), _jsx(CodeBlockTab, {
        value: "react-native",
        children: _jsx(_Fragment, {
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
                  children: "// msgId: The ID of the message to report."
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// tag: The label of the illegal message. You need to add custom labels, like, pornography or advertising. It corresponds to the `Label` field on the `Message Report` page on the Agora Console."
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// reason: The reason for reporting the message. It cannot exceed 512 bytes. It corresponds to the `Reason` field on the `Message Report` page on the Agora Console."
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
                  children: "reportMessage"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(msgId, tag, reason)"
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
        })
      }), _jsx(CodeBlockTab, {
        value: "unity",
        children: _jsx(_Fragment, {
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
                  children: "// msgId: The ID of the message to report."
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// tag: The label of the illegal message. You need to add custom labels, like, pornography or advertising. It corresponds to the `Label` field on the `Message Report` page on the Agora Console."
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// reason: The reason for reporting the message. It cannot exceed 512 bytes. It corresponds to the `Reason` field on the `Message Report` page on the Agora Console."
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
                  children: "ReportMessage"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(msgId, tag, reason, "
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
                  children: "    onSuccess"
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
                  children: "    {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Debug."
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
                  children: '$"ReportMessage success."'
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
                  children: "    },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "    onError"
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
                  children: "    {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Debug."
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
                  children: '$"ReportMessage failed, code:'
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
                  children: "));"
                })
              })]
            })
          })
        })
      }), _jsx(CodeBlockTab, {
        value: "windows",
        children: _jsx(_Fragment, {
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
                  children: "// msgId: The ID of the message to report."
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// tag: The label of the illegal message. You need to add custom labels, like, pornography or advertising. It corresponds to the `Label` field on the `Message Report` page on the Agora Console."
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// reason: The reason for reporting the message. It cannot exceed 512 bytes. It corresponds to the `Reason` field on the Message Report page on the Agora Console."
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
                  children: "ReportMessage"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(msgId, tag, reason, "
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
                  children: "    onSuccess"
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
                  children: "    {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Debug."
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
                  children: '$"ReportMessage success."'
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
                  children: "    },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "    onError"
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
                  children: "    {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        Debug."
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
                  children: '$"ReportMessage failed, code:'
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
                  children: "));"
                })
              })]
            })
          })
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "After a user reports a message from the application, moderators can check and deal with the report on Agora Console:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["To enter the ", _jsx(_components.strong, {
            children: "Message Report"
          }), " page, in the left navigation menu, click ", _jsx(_components.strong, {
            children: "Project Management"
          }), " > ", _jsx(_components.strong, {
            children: "Config"
          }), " for the project that you want > ", _jsx(_components.strong, {
            children: "Config"
          }), " of Chat > ", _jsx(_components.strong, {
            children: "Message Report"
          }), " > ", _jsx(_components.strong, {
            children: "History"
          }), ", as shown in the following figure:"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1656312948783",
            alt: "report_en"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the ", _jsx(_components.strong, {
            children: "Message Report"
          }), " page, moderators can filter the message report items by time period, session type, or handling method. They can also search for a specific report item by user ID, group ID, or chat room ID. For the reports, Chat supports two handling methods: withdrawing the message or asking the sender to process the message."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "text-and-image-moderation",
      children: "Text and image moderation"
    }), `
`, _jsx(_components.h4, {
      id: "introduction",
      children: "Introduction"
    }), `
`, _jsxs(_components.p, {
      children: ["Powered by ", _jsx(_components.a, {
        href: "https://azure.microsoft.com/en-us/services/cognitive-services/content-moderator/",
        children: "Microsoft Azure Moderator"
      }), ", Agora Chat's text and image moderation can scan messages for illegal and inappropriate text and image content and mark the content for moderation. Microsoft Azure Moderator uses the following four categories to moderate the message:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Adult: The content may be considered sexually explicit or adult in certain situations."
      }), `
`, _jsx(_components.li, {
        children: "Mature: The content may be considered sexually suggestive or mature in certain situations."
      }), `
`, _jsx(_components.li, {
        children: "Offensive: The content may be considered offensive or abusive."
      }), `
`, _jsx(_components.li, {
        children: "Personal Data: The content contains personally identifiable information, which includes email address, US mailing address, IP address, and a US phone number. Please note that content moderation will determine an input to be a US mailing address only if the input contains all elements of a mailing address (e.g., zip code, state abbreviation)."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "After enabling the text and image moderation feature on Agora Console, you can set a sensitivity threshold for each moderation category. If the sensitivity threshold is exceeded, Agora Chat will handle the message as specified in the moderation rule. A greater sensitivity indicates more strict review and that Agora Chat will block more inappropriate content. You are advised to test the moderation rule to check whether the sensitivity threshold you set meets your requirements."
    }), `
`, _jsx(_components.p, {
      children: "You can also impose a penalty on users who reach the violation limit within a time period. The moderation penalties include the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Penalties at the app level or in one-to-one chat:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Ban"
            }), ": If the user is banned, he will be forced to go offline immediately and cannot log in to Agora Chat. The banned user cannot log in again until he or she is unbanned. For example, if a user sends inappropriate content 5 times within 1 minute, he or she will be banned. Once a user is banned, the user state is changed to ", _jsx(_components.code, {
              children: "Blocked"
            }), " on the ", _jsx(_components.strong, {
              children: "Users"
            }), " page under ", _jsx(_components.strong, {
              children: "Operation Management"
            }), ". You can click ", _jsx(_components.strong, {
              children: "Unblock"
            }), " in the ", _jsx(_components.strong, {
              children: "Action"
            }), " column or call the ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/im/user-system-registration#unbanning-a-user",
              children: "RESTful API"
            }), " to unblock the user."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Force Offline"
            }), ": The user is forced to go offline and needs to log in again to use Agora Chat normally."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Delete"
            }), ": The user is removed. If the user is the group owner or chat room owner, the system will delete the corresponding group and chat room at the same time."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Penalties for users in groups and chat rooms:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Add to Block list"
            }), ": If the user is added to the blocklist of the group or chat room, he cannot no longer view or receive the messages of the group or chat room."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Kick Out"
            }), ": The user is kicked out of the group or chat room. After the user is removed from the group, he or she will be removed from the message threads he or she joined in the group."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Mute"
            }), ": After the user is muted, he or she will not be able to send messages in the group or chat room. If a user is muted in a group, he or she cannot send messages in the message threads he or she joined in the group."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "To see how moderation works and determine which moderation settings suit your needs, you can test different text strings and images on Agora Console."
    }), `
`, _jsx(_components.h4, {
      id: "create-a-moderation-rule",
      children: "Create a moderation rule"
    }), `
`, _jsx(_components.p, {
      children: "Taking a one-to-one chat text as an example, follow these steps to create a text moderation rule:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["To enter the ", _jsx(_components.strong, {
            children: "Rule Config"
          }), " page, in the left navigation menu, click ", _jsx(_components.strong, {
            children: "Project Management"
          }), " > ", _jsx(_components.strong, {
            children: "Config"
          }), " for the project for which you want > ", _jsx(_components.strong, {
            children: "Config"
          }), " of Chat > ", _jsx(_components.strong, {
            children: "Text Moderation"
          }), " or ", _jsx(_components.strong, {
            children: "Image Moderation"
          }), " > ", _jsx(_components.strong, {
            children: "Rule Config"
          }), ", as shown in the following figure:"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1656312971641",
            alt: "text_rule_en"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["To create a text moderation rule, click ", _jsx(_components.strong, {
            children: "Add"
          }), ":"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/im/text_rule_create_en.png",
            alt: "text_rule_create_en"
          })
        }), `
`, _jsx(_components.p, {
          children: "The following table lists the fields that a text moderation rule supports:"
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Field"
              }), _jsx(_components.th, {
                children: "Description"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Rule Name"
              }), _jsx(_components.td, {
                children: "The rule name."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Conversation Type"
              }), _jsx(_components.td, {
                children: "The moderation scope, which can be one of the following: a one-to-one chat, chat group or chat room, chat groups or chat rooms. If you set a rule for a specific chat group or room, the global moderation rules for chat groups and rooms are overwritten."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Enable"
              }), _jsx(_components.td, {
                children: "Determine whether to turn a rule on or off."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Message Handling"
              }), _jsxs(_components.td, {
                children: ["When the moderation result is ", _jsx(_components.strong, {
                  children: "Rejected"
                }), ", you can set the action on the moderated message to one of the following options", _jsx(_components.div, {}), " the message. Agora recommends using this setting for online messages after you fully test this moderation rule and ensure it suits your needs.(Default) Sends the message. Agora recommends using this setting when you are testing this moderation rule and do not want this rule to affect online messages.Replaces the message with ***.When the moderation action fails (for example, the timeout period of the text audit interface is 200 milliseconds; if no result  is returned within 200 milliseconds, this moderation action times out), the message processing policy can be set to one of the following options", _jsx(_components.div, {}), " the message.(Default) Sends the message.If the action on the moderated message is set as ", _jsx(_components.strong, {
                  children: "Blocks the message"
                }), ", the ", _jsx(_components.code, {
                  children: "508, MESSAGE_EXTERNAL_LOGIC_BLOCKED"
                }), " error is returned after the message is blocked. You can set whether to indicate this error in the application. If you choose to indicate this error in the application, a red exclamation mark is displayed before the blocked message."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Model Selection"
              }), _jsx(_components.td, {
                children: "Set whether to use AI alongside your keyword lists."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Word Sensitivity"
              }), _jsx(_components.td, {
                children: "Set the threshold for each moderation category."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "User management"
              }), _jsx(_components.td, {
                children: "Impose a penalty on users who reach the violation limit within a time period. The moderation penalties include the following: banning the user, forcing the user to go offline, or deleting the user."
              })]
            })]
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["After creating a rule, you can ", _jsx(_components.strong, {
            children: "edit"
          }), " or ", _jsx(_components.strong, {
            children: "delete"
          }), " the rule:"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/im/text_rule_edit_en.png",
            alt: "text_rule_edit_en"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "conduct-a-text-or-image-moderation-rule-test",
      children: "Conduct a text or image moderation rule test"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["To enter the ", _jsx(_components.strong, {
            children: "Rule Test"
          }), " page, in the left navigation menu, click ", _jsx(_components.strong, {
            children: "Project Management"
          }), " > ", _jsx(_components.strong, {
            children: "Config"
          }), " for the project that you want > ", _jsx(_components.strong, {
            children: "Config"
          }), " of Chat > ", _jsx(_components.strong, {
            children: "Text Moderation"
          }), " or ", _jsx(_components.strong, {
            children: "Image Moderation"
          }), " > ", _jsx(_components.strong, {
            children: "Rule Test"
          }), ", as shown in the following figure:"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/im/text_rule_test_en.png",
            alt: "text_rule_test_en"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Select a rule, fill in the text to moderate, and click ", _jsx(_components.strong, {
            children: "Check"
          }), " to test the rule. The moderation result is displayed on the same page."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "profanity-filter",
      children: "Profanity filter"
    }), `
`, _jsx(_components.p, {
      children: "The profanity filter can detect and filter out profanities contained words in messages according to configurations you set."
    }), `
`, _jsx(_components.p, {
      children: "Follow these steps to specify a profanity filter configuration:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["To enter the ", _jsx(_components.strong, {
            children: "Rule Config"
          }), " page, in the left navigation menu, click ", _jsx(_components.strong, {
            children: "Project Management"
          }), " > ", _jsx(_components.strong, {
            children: "Config"
          }), " for the project that you want > ", _jsx(_components.strong, {
            children: "Config"
          }), " of Chat > ", _jsx(_components.strong, {
            children: "Word List"
          }), " > ", _jsx(_components.strong, {
            children: "Rule Config"
          }), ", as shown in the following figure:"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1656313419195",
            alt: "keyword_en"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the ", _jsx(_components.strong, {
            children: "Rule Config"
          }), " page, you can add or delete words and determine which filtering method to apply to messages that contain the specified keywords. You can replace the word with *** or simply not send the word. You can add up to 500 words to the list. Contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "support@agora.io"
          }), " if you need to extend this limit to 100,000 words."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "domain-filter",
      children: "Domain filter"
    }), `
`, _jsx(_components.p, {
      children: "The domain filter can detect and filter out certain domains contained in messages according to configurations you set."
    }), `
`, _jsx(_components.p, {
      children: "Follow these steps to specify a domain filter configuration:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["To enter the ", _jsx(_components.strong, {
            children: "Rule Config"
          }), " page, in the left navigation menu, click ", _jsx(_components.strong, {
            children: "Project Management"
          }), " > ", _jsx(_components.strong, {
            children: "Config"
          }), " for the project that you want > ", _jsx(_components.strong, {
            children: "Config"
          }), " of Chat > ", _jsx(_components.strong, {
            children: "Domain Filter"
          }), " > ", _jsx(_components.strong, {
            children: "Rule Config"
          }), ", as shown in the following figure:"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1656313436703",
            alt: "domain_en"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["To create a domain filtering rule, click ", _jsx(_components.strong, {
            children: "Add"
          }), ":"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1656313449970",
            alt: "domain_rule_en"
          })
        }), `
`, _jsx(_components.p, {
          children: "The following table lists the fields that a domain filtering rule supports:"
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Field"
              }), _jsx(_components.th, {
                children: "Description"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Rule name"
              }), _jsx(_components.td, {
                children: "The rule name."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Conversation type"
              }), _jsx(_components.td, {
                children: "The moderation scope, which can be one of the following: a one-to-one chat, chat group or chat room, chat groups or chat rooms. If you set a rule for a specific chat group or room, the global moderation rules for chat groups and rooms are overwritten."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Enable"
              }), _jsx(_components.td, {
                children: "Determines whether to turn a rule on or off."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Message handling"
              }), _jsx(_components.td, {
                children: "Blocks messages containing the domain.Only allows messages containing the domain to pass.Replaces the domain in the message with ***. Takes no action on the moderated message."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Domain name"
              }), _jsx(_components.td, {
                children: "Adds a domain to the rule."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "User management"
              }), _jsx(_components.td, {
                children: "Imposes a penalty on users who reach the violation limit within a time period. The moderation penalties include the following: banning the user, forcing the user to go offline, or deleting the user."
              })]
            })]
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["After creating a rule, you can ", _jsx(_components.strong, {
            children: "edit"
          }), " or ", _jsx(_components.strong, {
            children: "delete"
          }), " the rule:"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1656313466023",
            alt: "domain_rule_edit_en"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "check-the-moderation-history",
      children: "Check the moderation history"
    }), `
`, _jsxs(_components.p, {
      children: ["You can check the history of the ", _jsx(_components.strong, {
        children: "text moderation"
      }), ", ", _jsx(_components.strong, {
        children: "image moderation"
      }), ", ", _jsx(_components.strong, {
        children: "profanity filter"
      }), ", and ", _jsx(_components.strong, {
        children: "domain filter"
      }), " on Agora Console. You can filter the moderation items by the time period, session type, or moderation result. You can also search for a specific item by the sender ID or receiver ID."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1657017751717",
        alt: "history"
      })
    }), `
`, _jsx(_components.h2, {
      id: "user-management",
      children: "User management"
    }), `
`, _jsx(_components.p, {
      children: "You can impose a penalty on users for repeated violations. The penalties can be applied as a global application setting, or only to a specific chat group or room. The following table lists all the user moderation options that Chat supports:"
    }), `
`, _jsx(_components.p, {
      children: `User moderation options
Actions
Description`
    }), `
`, _jsx(_components.p, {
      children: `Global actions on users
Banning a user
A banned user immediately goes offline and is not allowed to log in again until the ban is lifted.`
    }), `
`, _jsx(_components.p, {
      children: `Forcing a user to go offline
Users who are forced to go offline need to log in again to use the Chat service.`
    }), `
`, _jsx(_components.p, {
      children: `Deleting a user
If the deleted user is the owner of a chat group or chat room, the group or room is also deleted.`
    }), `
`, _jsx(_components.p, {
      children: `Chat group management
Muting a user in a chat group
A muted user cannot send messages in this chat group until unmuted.`
    }), `
`, _jsx(_components.p, {
      children: `Muting all users in a chat group
Members in a muted group cannot send messages until the muted state is lifted.`
    }), `
`, _jsx(_components.p, {
      children: `Managing a group blocklist
Users who are added to the group blocklist are removed from the group immediately and cannot join the group again.`
    }), `
`, _jsx(_components.p, {
      children: `Removing a user from a chat group
The removed user can no longer receive the messages in this group until rejoining the group.`
    }), `
`, _jsx(_components.p, {
      children: `Chat room management
Muting a user in a chat room
A muted user cannot send messages in this chat room until unmuted.`
    }), `
`, _jsx(_components.p, {
      children: `Muting all users in a chat room
Members in a muted room cannot send messages until the muted state is lifted.`
    }), `
`, _jsx(_components.p, {
      children: `Managing a room blocklist
Users who are added to the room blocklist are removed from the room immediately and cannot join the room again.`
    }), `
`, _jsx(_components.p, {
      children: `Removing a user from a chat room
The removed user can no longer receive the messages in this room until rejoining the room.`
    }), `
`, _jsx(_components.h3, {
      id: "take-global-actions-on-users",
      children: "Take global actions on users"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["To enter the ", _jsx(_components.strong, {
            children: "User Management"
          }), " page, in the left navigation menu, click ", _jsx(_components.strong, {
            children: "Project Management"
          }), " > ", _jsx(_components.strong, {
            children: "Config"
          }), " for the project that you want > ", _jsx(_components.strong, {
            children: "Config"
          }), " of Chat > ", _jsx(_components.strong, {
            children: "Operation Management"
          }), " > ", _jsx(_components.strong, {
            children: "User"
          }), ", as shown in the following figure:"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1657017861309",
            alt: "user_manage"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["To take action on a user (banning a user, deleting a user, or forcing a user to go offline), search for the user ID, and click ", _jsx(_components.strong, {
            children: "More"
          }), ":"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1657017977179",
            alt: "user_manage_action"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "take-actions-on-chat-group-members",
      children: "Take actions on chat group members"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["To enter the Chat Group Management page, in the left navigation menu, click ", _jsx(_components.strong, {
            children: "Project Management"
          }), " > ", _jsx(_components.strong, {
            children: "Config"
          }), " for the project that you want > ", _jsx(_components.strong, {
            children: "Config"
          }), " of Chat > ", _jsx(_components.strong, {
            children: "Operation Management"
          }), " > ", _jsx(_components.strong, {
            children: "Group"
          }), ", as shown in the following figure:"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1657018187786",
            alt: "group_manage"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["To take action on a group member (removing a member from the group or adding a user to the group blocklist), search for the group ID, and click ", _jsx(_components.strong, {
            children: "More"
          }), ":"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1657018261864",
            alt: "group_manage_action"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "You can also click the group ID to enter the group's moderation dashboard, where you can manage the group info, group members, and messages in real-time:"
        }), `
`, _jsxs(_components.p, {
          children: ["To use this feature, enable it on the ", _jsx(_components.strong, {
            children: "Features"
          }), " > ", _jsx(_components.strong, {
            children: "Overview"
          }), " page."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1657018366024",
            alt: "group_manage_live"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "take-actions-on-chat-room-members",
      children: "Take actions on chat room members"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["To enter the Chat Room Management page, in the left navigation menu, click ", _jsx(_components.strong, {
            children: "Project Management"
          }), " > ", _jsx(_components.strong, {
            children: "Config"
          }), " for the project that you want > ", _jsx(_components.strong, {
            children: "Config"
          }), " of Chat > ", _jsx(_components.strong, {
            children: "Chat Room Management"
          }), ", as shown in the following figure:"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1657018521135",
            alt: "room_manage"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["To take action on a room member (removing a member from the room or adding a user to the room blocklist), search for the room ID, and click ", _jsx(_components.strong, {
            children: "More"
          }), ":"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1657018546001",
            alt: "room_manage_action"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "You can also click the room ID to enter the room's moderation dashboard, where you can manage the room info, room members, and messages in real-time:"
        }), `
`, _jsxs(_components.p, {
          children: ["To use this feature, enable it on the ", _jsx(_components.strong, {
            children: "Features"
          }), " > ", _jsx(_components.strong, {
            children: "Overview"
          }), " page."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1657018564652",
            alt: "room_manage_live"
          })
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
