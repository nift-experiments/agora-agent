import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Set display content",
  description: "Set the display content of a push notification"
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;web&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;,&#x22;windows&#x22;,&#x22;unity&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    You can configure the push title and content displayed in the notification bar in the following ways, with the configuration priority from low to high:

    1. Configure the display attributes of push notifications;
    2. Use the default push template;
    3. Use message extension fields;
    4. Use a custom push template.

    ## Configure the display attributes of push notifications [#configure-the-display-attributes-of-push-notifications]

    Call \`updatePushNickname\` and \`updatePushDisplayStyle\` to configure the nickname (\`nickname\`) and notification display style (\`DisplayStyle\`), which includes the push title and content in the notification bar.

    This nickname indicates the nickname of the message sender that is displayed in the push notification bar of the recipient's client when a message from the user is pushed. The nickname can be different from the nickname in user attributes. However, Agora recommends that you use the same nickname for both. Therefore, if either nickname is updated, the other should be changed at the same time. To update the nickname in user attributes, see [Set user attributes](..//en/realtime-media/im/build/build-core-messaging/user-attributes#set-user-attributes).

    \`\`\`java
    // Asynchronous processing is required.
    ChatClient.getInstance().pushManager().updatePushNickname("nickname");
    \`\`\`

    \`\`\`java
    PushManager.DisplayStyle displayStyle = PushManager.DisplayStyle.SimpleBanner;
    // Asynchronous processing is required.
    ChatClient.getInstance().pushManager().updatePushDisplayStyle(displayStyle);
    \`\`\`

    Call \`getPushConfigsFromServer\` to get the display attributes for push notifications, as shown in the following example:

    \`\`\`java
    PushConfigs pushConfigs = ChatClient.getInstance().pushManager().getPushConfigsFromServer();
    // Get the nickname displayed in the push notification.
    String nickname = pushConfigs.getDisplayNickname();
    // Get the display style of the push notification.
    PushManager.DisplayStyle style = pushConfigs.getDisplayStyle();
    \`\`\`

    To display the message content in the notification bar, set the notification display style (\`DisplayStyle\`). This parameter has the following two settings:

    * (Default) \`SimpleBanner\`: Regardless of whether \`nickname\` is set, for any type of message pushed, the notification bar uses the default display setting, that is, the push title is "You have a new message" and the push content is "Please click to view".
    * \`MessageSummary\`: Displays the message content. The nickname you set only takes effect when \`DisplayStyle\` is \`MessageSummary\`, not \`SimpleBanner\`.

    The following table uses a one-to-one chat text message as an example to introduce the settings of the display attributes.

    For group chats, "Push nickname of message sender" and "Chat user ID of message sender" in the table below are displayed as "Group ID".

    | Parameter settings                                                   | Push display                                                                                               | Image                                                                                            |
    | :------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- |
    | \`DisplayStyle\`: (default) \`SimpleBanner\`  \`nickname\`: Set or not set | Push title: "You have a new message"  Push content: "Please click to view"                                 | ![push\\_displayattribute\\_1](https://assets-docs.agora.io/images/im/push_displayattribute_1.png) |
    | \`DisplayStyle\`: \`MessageSummary\`  \`nickname\`: Set specific value     | Push title: "You have a new message"  Push content: "Push nickname of the message sender: message content" | ![push\\_displayattribute\\_2](https://assets-docs.agora.io/images/im/push_displayattribute_2.png) |
    | \`DisplayStyle\`: \`MessageSummary\`  \`nickname\`: Not set                | Push title: “You have a new message”  Push content: “Message sender's Chat user ID: message content”       | ![push\\_displayattribute\\_3](https://assets-docs.agora.io/images/im/push_displayattribute_3.png) |

    ## Use the default push template [#use-the-default-push-template]

    The default push template is mainly used when the default configuration provided by the server does not meet your needs. It allows you to set the global push title and push content. For example, the default settings provided by the server are push titles and content in English. If you need to use push titles and content in another language, you can set the push template in the corresponding language.

    To use the default template, create a default push template in [Agora Console](https://console.agora.io/) or [call RESTful API](/en/api-reference/api-ref/im/offline-push/offline-push-configuration). The template name is \`default\`. After setting, the default template is automatically used when pushing messages, and there is no need to enter the template name when creating messages.

    Follow the steps below to create a default push template in [Agora Console](https://console.agora.io/):

    1. Log in to [Agora Console](https://console.agora.io/) and click **Project Management** in the left navigation bar.

    2. On the **Project Management** page, click **Config** in the **Action** column for the project that has Chat enabled.

    3. On the **Edit Project** page, in the **Features** area, click **Enable / Config** for Chat.

    4. On the project configuration page, select **Features** > **Push Template**, click **Add Push Template**, and configure the fields in the pop-up dialog box, as shown in the following figure:

       ![push\\_add\\_template](https://assets-docs.agora.io/images/im/push_add_template.png)

    5. Set the **Template Name** to **default**, then set the **Title** and **Content** parameters, and click **OK**.

       | Parameter         | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Required |
       | :---------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
       | **Template Name** | String | The push template name. The default template is **default**.                                                                                                                                                                                                                                                                                                                                                                                                             | Yes      |
       | **Title**         | Array  | The push title. Can be set in the following ways: Enter a fixed push title. Use built-in variables and enter \`{$fromNickname}, {$msg}\`. Set custom variables through the value array. The field format is \`{0} {1} {2} ... {n}\`. If the default template is used, the first two settings do not need to pass in this parameter when creating a message. The server automatically obtains it. The third setting method needs to be passed in through the extension field. | Yes      |
       | **Content**       | Array  | The push content. Can be set in the following ways: Enter fixed push content. Use variables and enter \`{$fromNickname}, {$msg}\`. Set custom variables through the value array. The field format is \`{0} {1} {2} ... {n}\`. If the default template is used, the first two settings do not require parameters to be passed in when creating a message. The server automatically obtains them. The third setting method needs to be passed in through the extension field.  | Yes      |

    ## Use message extension fields [#use-message-extension-fields]

    When creating a push message, you can set the \`em_push_title\` and \`em_push_content\` message extension fields to customize the push title and content, respectively.

    \`\`\`java
    // This takes text messages as an example. The setting methods for message types such as images and files are the same.
    ChatMessage message = ChatMessage.createSendMessage(ChatMessage.Type.TXT);
    // Set custom push display.
    JSONObject extObject = new JSONObject();
    try {
        extObject . put( " em_push_title " , " custom push title " ); // Custom push message title. This field is a built-in field and the field name cannot be modified.
        extObject . put( " em_push_content " , " custom push content " ); // Custom push message content. This field is a built-in field and the field name cannot be modified.
    } catch (JSONException e) {
        e.printStackTrace();
    }
    // Set the push extension to the message. This field is a built-in push extension field.
    message.setAttribute("em_apns_ext", extObject);
    \`\`\`

    The data structure of the custom display field is as follows:

    \`\`\`java
    {
        "em_apns_ext": {
            "em_push_title": "custom push title",
            "em_push_content": "custom push content"
        }
    }
    \`\`\`

    ## Use a custom push template [#use-a-custom-push-template]

    The steps to use a custom push template are as follows:

    1. If you use a custom push template, create it in [Agora Console](https://console.agora.io/) or call [RESTful API](/en/api-reference/api-ref/im/offline-push/offline-push-configuration#create-a-push-template). For a description of the parameters in the **Add Push Template** dialog box, see the section about using the default template. When using a custom template, regardless of how the **Title** and **Content** parameters are set, they must be passed in through the extension fields when creating a message.

    2. When creating a message, pass in the template name, push title, and push content by using the extension fields. The push title and content in the notification bar use the formats in the template, respectively.

       \`\`\`java
       // The following takes text messages as an example. The setting methods for other types of messages are the same.
       ChatMessage message = ChatMessage.createSendMessage(ChatMessage.Type.TXT);
       TextMessageBody txtBody = new TextMessageBody("message content");
       // Set the push notification recipient. For one-to-one chats, it is the recipient's user ID; for group chats, it is the group ID.
       message.setTo("receiver");
       // Use the push template.
       JSONObject pushObject = new JSONObject();
       JSONArray titleArgs = new JSONArray();
       JSONArray contentArgs = new JSONArray();
       try {
               // Set the push template name.
               pushObject.put("name", "test6");
               // Set the value array of the push title in the template. If the push title specified in the template is a placeholder, you can customize the title here; if the specified title is a fixed value, the title will be a fixed value when using this template.
               titleArgs.put("test1");
               //...
               pushObject.put("title_args", titleArgs);
               // Set the value array of the pushed content in the template. If the template content specified in the template is a placeholder, you can customize the content here; if the specified content is a fixed value, the content will be a fixed value when using the template.
               contentArgs.put("$fromNickname");
               contentArgs.put("$msg");
               //...
               pushObject.put("content_args", contentArgs);
       } catch (JSONException e) {
               e.printStackTrace();
       }
       // Add the push template to the message.
       message.setAttribute("em_push_template", pushObject);
       // Set the message status callback.
       message.setMessageStatusCallback(new CallBack() {...});
       // Send the message.
       ChatClient.getInstance().chatManager().sendMessage(message);
       \`\`\`

    The JSON structure of the push template is as follows:

    \`\`\`json
        "em_push_template":{
                "name":"test6",
                "title_args":[
                    "test1"
                ],
                "content_args":[
                    "{$fromNickname}",
                    "{$msg}"
                ]
        }
    \`\`\`

    The message receiver can call the \`setPushTemplate\` method to pass in the push template name and select the template to use.

    If the sender uses a push template when sending a message, the content displayed in the push notification bar is based on the sender's push template.

    \`\`\`java
    ChatClient.getInstance().pushManager().setPushTemplate("Template Name", new CallBack() {
        @Override
        public void onSuccess() {

        }

        @Override
        public void onError(int code, String error) {

        }
    });
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    You can configure the push title and content displayed in the notification bar in the following ways, with the configuration priority from low to high:

    1. Configure the display attributes of push notifications;
    2. Use the default push template;
    3. Use message extension fields;
    4. Use a custom push template.

    ## Configure the display attributes of push notifications [#configure-the-display-attributes-of-push-notifications-1]

    Call \`updatePushDisplayName\` and \`updatePushDisplayStyle\` methods to set the nickname (\`displayName\`) and notification display style (\`pushDisplayStyle\`), which includes the push title and content in the notification bar.

    This nickname indicates the nickname of the message sender that is displayed in the push notification bar of the recipient's client when a message from the user is pushed. The nickname can be different from the nickname in user attributes. However, Agora recommends that you use the same nickname for both. Therefore, if either nickname is updated, the other should be changed at the same time. To update the nickname in user attributes, see [Set user attributes](..//en/realtime-media/im/build/build-core-messaging/user-attributes#set-user-attributes).

    \`\`\`objc
    [AgoraChatClient.sharedClient.pushManager updatePushDisplayName:@"displayName" completion:^(NSString * aDisplayName, AgoraChatError * aError) {
        if (aError)
        {
            NSLog(@"update push display name error: %@", aError.errorDescription);
        }
    }];
    \`\`\`

    \`\`\`objc
    [AgoraChatClient.sharedClient.pushManager updatePushDisplayStyle:AgoraChatPushDisplayStyleSimpleBanner completion:^(AgoraChatError * aError)
    {
        if(aError)
        {
            NSLog(@"update display style error --- %@", aError.errorDescription);
        }
    }];
    \`\`\`

    Call \`getPushNotificationOptionsFromServerWithCompletion\` to get the display attributes for a push notification, as shown in the following code example:

    \`\`\`objc
    [AgoraChatClient.sharedClient.pushManager getPushNotificationOptionsFromServerWithCompletion:^(AgoraChatPushOptions *aOptions, AgoraChatError *aError) {
            if (!aError) {
                // Get the nickname displayed in the push notification.
                NSString *displayName = aOptions.displayName;
                // Get the display style of the push notification.
                AgoraChatPushDisplayStyle displayStyle = aOptions.displayStyle;
            }
        }];
    \`\`\`

    To display the message content in the notification bar, set the notification display style (\`pushDisplayStyle\`). This parameter has the following two settings:

    * (Default) \`AgoraChatPushDisplayStyleSimpleBanner\`: Regardless of whether \`displayName\` is set, for any type of message push, the notification bar uses the default display settings, that is, the push title is "You have a new message" and the push content is "Please click to view".
    * \`AgoraPushDisplayStyleMessageSummary\`: Displays the message content. The nickname you set is only effective when \`pushDisplayStyle\` is \`AgoraPushDisplayStyleMessageSummary\`, not \`AgoraChatPushDisplayStyleSimpleBanner\`.

    The following table uses a one-to-one chat text message as an example to introduce the settings of the display attributes. For group chats, the "Push nickname of the message sender" and "Chat user ID of the message sender" in the table below are displayed as "Group ID".

    | Parameter settings                                                                              | Push display                                                                                             | Image                                                                                            |
    | :---------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- |
    | \`pushDisplayStyle\`: (default) \`AgoraChatPushDisplayStyleSimpleBanner\`\`displayName\`: Set or not. | Push title: "You have a new message"Push content: "Please click to view"                                 | ![push\\_displayattribute\\_1](https://assets-docs.agora.io/images/im/push_displayattribute_1.png) |
    | \`pushDisplayStyle\`: \`AgoraPushDisplayStyleMessageSummary\`\`displayName\`: Set a specific value.   | Push title: "You have a new message"Push content: "Push nickname of the message sender: message content" | ![push\\_displayattribute\\_2](https://assets-docs.agora.io/images/im/push_displayattribute_2.png) |
    | \`pushDisplayStyle\`: \`AgoraPushDisplayStyleMessageSummary\`\`displayName\`: Not set.                | Push title: "You have a new message"Push content: "Message sender's Chat user ID: Message content"       | ![push\\_displayattribute\\_3](https://assets-docs.agora.io/images/im/push_displayattribute_3.png) |

    ## Use the default push template [#use-the-default-push-template-1]

    The default push template is mainly used when the default configuration provided by the server does not meet your needs. It allows you to set the global push title and push content. For example, the default settings provided by the server are push titles and content in English. If you need to display push titles and content in another language, you can set the push template in the corresponding language.

    To use the default template, create a default push template in [Agora Console](https://console.agora.io/) or [call RESTful API](/en/api-reference/api-ref/im/offline-push/offline-push-configuration). The template name is \`default\`. After setting, the default template is automatically used when pushing messages, and there is no need to enter the template name when creating messages.

    Follow the steps below to create a default push template in [Agora Console](https://console.agora.io/):

    1. Log in to [Agora Console](https://console.agora.io/) and click **Project Management** in the left navigation bar.

    2. On the **Project Management** page, click **Config** in the **Action** column for the project that has Chat enabled.

    3. On the **Edit Project** page, in the **Features** area, click **Enable / Config** for Chat.

    4. On the project configuration page, select **Features** > **Push Template**, click **Add Push Template**, and configure the fields in the pop-up dialog box, as shown in the following figure.

       ![push\\_add\\_template](https://assets-docs.agora.io/images/im/push_add_template.png)

    5. Set **Template Name** to **default**, then set the **Title** and **Content** parameters, and click **OK**.

       | Parameter         | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Required |
       | :---------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
       | **Template Name** | String | The push template name. The default template is **default**.                                                                                                                                                                                                                                                                                                                                                                                                             | Yes      |
       | **Title**         | Array  | The push title. Can be set in the following ways: Enter a fixed push title. Use built-in variables and enter \`{$fromNickname}, {$msg}\`. Set custom variables through the value array. The field format is \`{0} {1} {2} ... {n}\`. If the default template is used, the first two settings do not need to pass in this parameter when creating a message. The server automatically obtains it. The third setting method needs to be passed in through the extension field. | Yes      |
       | **Content**       | Array  | The push content. Can be set in the following ways: Enter fixed push content. Use variables and enter \`{$fromNickname}, {$msg}\`. Set custom variables through the value array. The field format is \`{0} {1} {2} ... {n}\`. If the default template is used, the first two settings do not require parameters to be passed in when creating a message. The server automatically obtains them. The third setting method needs to be passed in through the extension field.  | Yes      |

    ## Use message extension fields [#use-message-extension-fields-1]

    When creating a push message, you can set the message extension fields to customize the push content to be displayed.
    For the display attributes of push notifications, that is, the display attributes and display style of push notifications, in addition to calling specific methods to set them, you can also set them through custom fields. If you use both methods at the same time, the custom fields have a higher priority.

    \`\`\`objc
    AgoraChatTextMessageBody *body = [[AgoraChatTextMessageBody alloc] initWithText:@"test"];
        AgoraChatMessage *message = [[AgoraChatMessage alloc] initWithConversationID:conversationId from:AgoraChatClient.sharedClient.currentUsername to:conversationId body:body ext:nil];
        message.ext = @{@"em_apns_ext":@{@"em_push_content":@"custom push content",@"em_push_title":@"custom push title"}};
        message.chatType = AgoraChatTypeChat;
        [AgoraChatClient.sharedClient.chatManager sendMessage:message progress:nil completion:nil];
    \`\`\`

    The structure of a custom display field is as follows:

    \`\`\`json
    {
        "em_apns_ext": {
           "em_push_title": "custom push title",
           "em_push_content": "custom push content"
        }
    }
    \`\`\`

    | Parameters        | Description                                                                          |
    | :---------------- | :----------------------------------------------------------------------------------- |
    | \`em_apns_ext\`     | The message extension fields.                                                        |
    | \`em_push_title\`   | Customize the push message title. This field name is fixed and cannot be modified.   |
    | \`em_push_content\` | Customize the push message content. This field name is fixed and cannot be modified. |

    ## Use a custom push template [#use-a-custom-push-template-1]

    The steps to use a custom push template are as follows:

    1. If you use a custom push template, create it in [Agora Console](https://console.agora.io/) or call [RESTful API](/en/api-reference/api-ref/im/offline-push/offline-push-configuration#create-a-push-template). For a description of the parameters in the **Add Push Template** dialog box, see the section about using the default template. When using a custom template, regardless of how the **Title** and **Content** parameters are set, they must be passed in through the extension fields when creating a message.

    2. When creating a message, pass in the template name, push title, and push content by using the extension fields. The push title and content in the notification bar use the formats in the template, respectively.

       \`\`\`objc
       // The following takes text messages as an example. The setting methods for other types of messages are the same.
       AgoraChatTextMessageBody *body = [[AgoraChatTextMessageBody alloc]initWithText:@"test"];
       AgoraChatMessage *message = [[AgoraChatMessage alloc]initWithConversationID:@"conversationId" from:@"currentUsername" to:@"conversationId" body:body ext:nil];
              // Set the push template created on the Agora console as the default push template.
              NSDictionary *pushObject = @{
                  @"name":@"templateName", // Set the push template name.
                  @"title_args":@ [ @"titleValue1" ] , // Set the push title variable. If the push title specified in the template is a placeholder, you can customize the title here; if the specified title is a fixed value, the title will be a fixed value when using this template.
                  @"content_args":@ [ @"contentValue1" ] // Set the push content variable. If the push content specified in the template is placeholder data, you can customize the push content here; if the specified push content is a fixed value, the push content will be a fixed value when using this template.
              };
              message.ext = @{
                  @"em_push_template":pushObject,
              };
              message.chatType = AgoraChatTypeChat;
       [[AgoraChatClient sharedClient].chatManager sendMessage:message progress:nil completion:nil];
       \`\`\`

    The JSON structure of the push template is as follows:

    \`\`\`json
    "em_push_template":{
            "name":"test6",
            "title_args":[
                "test1"
            ],
            "content_args":[
                "{$fromNickname}",
                "{$msg}"
            ]
    }
    \`\`\`

    The message receiver can call \`setPushTemplate\` to pass in the push template name and select the template to use.

    If the sender uses a push template when sending a message, the content displayed in the push notification bar is based on the sender's push template.

    \`\`\`objc
    [AgoraChatClient.sharedClient.pushManager setPushTemplate:@"templateName" completion:^(AgoraChatError * _Nullable aError) {

    }];
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    You can configure the push title and content displayed in the notification bar by using push templates.

    ### Set the push template [#set-the-push-template]

    The default push template is mainly used when the default configuration provided by the server does not meet your needs. It allows you to set the global push title and push content. For example, the default settings provided by the server are push titles and content in English. If you need to use push titles and content in another language, you can set the push template in the corresponding language.

    #### Use the default push template [#use-the-default-push-template-2]

    To use the default template, create a default push template in [Agora Console](https://console.agora.io/) or [call RESTful API](/en/api-reference/api-ref/im/offline-push/offline-push-configuration). The template name is \`default\`. After setting, the default template is automatically used when pushing messages. You do not need to enter the template name when creating messages.

    Follow the steps below to create a default push template in [Agora Console](https://console.agora.io/):

    1. Log in to [Agora Console](https://console.agora.io/) and click **Project Management** in the left navigation bar.

    2. On the **Project Management** page, click **Config** in the **Action** column for the project that has Chat enabled.

    3. On the **Edit Project** page, in the **Features** area, click **Enable / Config** for Chat.

    4. On the project configuration page, select **Features** > **Push Template** , click **Add Push Template** , and configure the fields in the pop-up dialog box, as shown in the following figure:

       ![push\\_add\\_template](https://assets-docs.agora.io/images/im/push_add_template.png)

    5. Set **Template Name** to **default**, then set the **Title** and **Content** parameters, and click **OK**.

       | Parameter         | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Required |
       | :---------------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
       | **Template Name** | String | Push template name. The default template is **default**.                                                                                                                                                                                                                                                                                                                                                                                                             | Yes      |
       | **Title**         | Array  | Push title. Can be set in the following ways: Enter a fixed push title. Use built-in variables and enter \`{$fromNickname}, {$msg}\`. Set custom variables through the value array. The field format is \`{0} {1} {2} ... {n}\`. If the default template is used, the first two settings do not need to pass in this parameter when creating a message; the server automatically obtains it. The third setting method needs to be passed in through the extension field. | Yes      |
       | **Content**       | Array  | Push content. Can be set in the following ways: Enter fixed push content. Use variables and enter \`{$fromNickname}, {$msg}\`. Set custom variables through the value array. The field format is \`{0} {1} {2} ... {n}\`. If the default template is used, the first two settings do not require parameters to be passed in when creating a message; the server automatically obtains them. The third setting method needs to be passed in through the extension field.  | Yes      |

    #### Use a custom push template [#use-a-custom-push-template-2]

    The steps to use a custom push template are as follows:

    1. If you use a custom push template, create a custom push template in [Agora Console](https://console.agora.io/) or [Call RESTful API](/en/api-reference/api-ref/im/offline-push/offline-push-configuration#create-a-push-template). For a description of the parameters in the **Add Push Template** dialog box, see [Use the default push template](#use-the-default-push-template). When using a custom template, regardless of how the **Title** and **Content** parameters are set, they must be passed in through the extension fields when creating a message.

    2. When creating a message, pass in the template name, push title, and push content by using the extension fields. The push title and content in the notification bar use the formats in the template, respectively:

       \`\`\`javascript
       // The following takes text messages as an example. The setting methods for other types of messages are the same.

       const sendTextMsg = () => {
         const options: AgoraChat.CreateTextMsgParameters = {
           chatType: chatType,
           type: "txt",
           to: targetUserId,
           msg: msgContent,
           ext: {
             em_push_template: {
               name: " templateName ", // Set the push template name.
               title_args: [" titleValue1 "], // Set the value array of the push title in the template. If the push title specified in the template is placeholder data, you can customize the title here; if the specified title is a fixed value, the title will be a fixed value when using this template.
               content_args: [" contentValue1 "], // Set the value array of the pushed content in the template. If the template content specified in the template is placeholder data, you can customize the content here; if the specified content is a fixed value, the content will be a fixed value when the template is used.
             },
           },
         };
         const msg = AgoraChat.message.create(options);
         chatClient.send(msg);
       };
       \`\`\`

       The JSON structure of the push template is as follows:

       \`\`\`json
       "em_push_template":{
               "name":"test6",
               "title_args":[
                   "test1"
               ],
               "content_args":[
                   \`\${fromNickname}\`,
                   \`\${msg}\`
               ]
       }
       \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    You can configure the push title and content displayed in the notification bar in the following ways, with the configuration priority from low to high:

    1. Configure the display attributes of push notifications;
    2. Use the default push template;
    3. Use message extension fields;
    4. Use a custom push template.

    ## Configure the display attributes of push notifications [#configure-the-display-attributes-of-push-notifications-2]

    Call \`updatePushNickname\` and \`updatePushDisplayStyle\` methods to set the nickname (\`nickname\`) and notification display style (\`DisplayStyle\`), which includes the push title and content in the notification bar.

    This nickname indicates the nickname of the message sender that is displayed in the push notification bar of the recipient's client when a message from the user is pushed. The nickname can be different from the nickname in user attributes. However, Agora recommends that you use the same nickname for both. Therefore, if either nickname is updated, the other should be changed at the same time. To update the nickname in user attributes, see [Set user attributes](..//en/realtime-media/im/build/build-core-messaging/user-attributes#set-user-attributes).

    \`\`\`dart
    try {
      ChatClient.getInstance.pushManager.updatePushNickname('nickname');
    } on ChatError catch (e) {}
    \`\`\`

    \`\`\`dart
    try {
      ChatClient.getInstance.pushManager.updatePushDisplayStyle(DisplayStyle.Simple);
    } on ChatError catch (e) {}
    \`\`\`

    Call \`getPushConfigsFromServer\` to get the display attributes for push notifications, as shown in the following example:

    \`\`\`dart
    try {
      ChatPushConfigs configs = await ChatClient.getInstance.pushManager.fetchPushConfigsFromServer();
      // Get the nickname displayed in push notifications.
      String? pushNickname = configs.displayName;
      // Get the display style of the push notification.
      DisplayStyle pushDisplayStyle = configs.displayStyle;
    } on ChatError catch (e) {}
    \`\`\`

    To display the message content in the notification bar, set the notification display style (\`DisplayStyle\`). This parameter has the following two settings:

    * (Default) \`Simple\`: Regardless of whether \`nickname\` is set, for any type of message pushed, the notification bar uses the default display setting, that is, the push title is "You have a new message" and the push content is "Please click to view".
    * \`Summary\`: Displays the message content. The nickname you set only takes effect when \`DisplayStyle\` is set \`Summary\`, not \`Simple\`.

    The following table uses a one-to-one chat message as an example to introduce the settings of the display attributes.

    For group chats, "Push nickname of message sender" and "Chat user ID of message sender" in the table below are displayed as "Group ID".

    | Parameter settings                                             | Push display                                                                                               | Image                                                                                            |
    | :------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- |
    | \`DisplayStyle\`: (default) \`Simple\`  \`nickname\`: Set or not set | Push title: "You have a new message"  Push content: "Please click to view"                                 | ![push\\_displayattribute\\_1](https://assets-docs.agora.io/images/im/push_displayattribute_1.png) |
    | \`DisplayStyle\`: \`Summary\`  \`nickname\`: Set specific value      | Push title: "You have a new message"  Push content: "Push nickname of the message sender: message content" | ![push\\_displayattribute\\_2](https://assets-docs.agora.io/images/im/push_displayattribute_2.png) |
    | \`DisplayStyle\`: \`Summary\`  \`nickname\`: Not set                 | Push title: “You have a new message”  Push content: “Message sender's Chat user ID: message content”       | ![push\\_displayattribute\\_3](https://assets-docs.agora.io/images/im/push_displayattribute_3.png) |

    ## Use the default push template [#use-the-default-push-template-3]

    The default push template is mainly used when the default configuration provided by the server does not meet your needs. It allows you to set the global push title and push content. For example, the default settings provided by the server are push titles and content in English. If you need to use push titles and content in another language, you can set the push template in the corresponding language.

    To use the default template, create a default push template in [Agora Console](https://console.agora.io/) or [call RESTful API](/en/api-reference/api-ref/im/offline-push/offline-push-configuration). The template name is \`default\`. After setting, the default template is automatically used when pushing messages, and there is no need to enter the template name when creating messages.

    Follow the steps below to create a default push template in [Agora Console](https://console.agora.io/):

    1. Log in to [Agora Console](https://console.agora.io/) and click **Project Management** in the left navigation bar.

    2. On the **Project Management** page, click **Config** in the **Action** column for the project that has Chat enabled.

    3. On the **Edit Project** page, in the **Features** area, click **Enable / Config** for Chat.

    4. On the project configuration page, select **Features** > **Push Template**, click **Add Push Template**, and configure the fields in the pop-up dialog box, as shown in the following figure:

       ![push\\_add\\_template](https://assets-docs.agora.io/images/im/push_add_template.png)

    5. Set the **Template Name** to **default**, then set the **Title** and **Content** parameters and click **OK**.

    | Parameter         | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Required |
    | :---------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
    | **Template Name** | String | The push template name. The default template is **default**.                                                                                                                                                                                                                                                                                                                                                                                                             | Yes      |
    | **Title**         | Array  | The push title. Can be set in the following ways: Enter a fixed push title. Use built-in variables and enter \`{$fromNickname}, {$msg}\`. Set custom variables through the value array. The field format is \`{0} {1} {2} ... {n}\`. If the default template is used, the first two settings do not need to pass in this parameter when creating a message. The server automatically obtains it. The third setting method needs to be passed in through the extension field. | Yes      |
    | **Content**       | Array  | The push content. Can be set in the following ways: Enter fixed push content. Use variables and enter \`{$fromNickname}, {$msg}\`. Set custom variables through the value array. The field format is \`{0} {1} {2} ... {n}\`. If the default template is used, the first two settings do not require parameters to be passed in when creating a message. The server automatically obtains them. The third setting method needs to be passed in through the extension field.  | Yes      |

    ## Use message extension fields [#use-message-extension-fields-2]

    When creating a push message, you can set the \`em_push_title\` and \`em_push_content\` message extension fields to customize the push title and content, respectively.

    \`\`\`dart
    ChatMessage msg = ChatMessage.createTxtSendMessage(
      targetId: 'receiveId',
      content: 'content',
    );
    msg.attributes = {
      // Set the push extension to the message. This field is a built-in push extension field.
      'em_push_ext': {
        // Customize the push message title. This field is a built-in field and the field name cannot be modified.
        'em_push_title': 'custom push title',
        // Customize push message content. This field is a built-in field and the field name cannot be modified.
        'em_push_content': 'custom push content'
      }
    };
    try {
      await ChatClient.getInstance.chatManager.sendMessage(msg);
    } on ChatError catch (e) {}
    \`\`\`

    The data structure of the custom display field is as follows:

    \`\`\`dart
    {
        "em_apns_ext": {
            "em_push_title": "custom push title",
            "em_push_content": "custom push content"
        }
    }
    \`\`\`

    ## Use a custom push template [#use-a-custom-push-template-3]

    The steps to use a custom push template are as follows:

    1. If you use a custom push template, create it in [Agora Console](https://console.agora.io/) or call [RESTful API](/en/api-reference/api-ref/im/offline-push/offline-push-configuration#create-a-push-template). For a description of the parameters in the **Add Push Template** dialog box, see the section about using the default template. When using a custom template, regardless of how the **Title** and **Content** parameters are set, they must be passed in through the extension fields when creating a message.

    2. When creating a message, pass in the template name, push title, and push content by using the extension fields. The push title and content in the notification bar use the formats in the template, respectively.

       \`\`\`dart
       ChatMessage msg = ChatMessage.createTxtSendMessage(
         targetId: 'receiveId',
         content: 'content',
       );
       msg.attributes = {
         // Add the push template to the message.
         'em_push_template': {
           // Set the push template name.
           'name': 'templateName',
           // Set the push title variable. If the push title specified in the template is a placeholder, you can customize the title here; if the specified title is a fixed value, the title will be a fixed value when using this template.
           'title_args': ['titleValue1'],
           // Set the push content variable. If the push content specified in the template is a placeholder, you can customize the push content here; if the specified push content is a fixed value, the push content will be a fixed value when using this template.
           'content_args': ['contentValue1'],
         }
       };
       try {
         await ChatClient.getInstance.chatManager.sendMessage(msg);
       } on ChatError catch (e) {}
       \`\`\`

    The JSON structure of the push template is as follows:

    \`\`\`json
    "em_push_template":{
            "name":"templateName",
            "title_args":[
                "titleValue1"
            ],
            "content_args":[
                "{$contentValue1}",
            ]
    }
    \`\`\`

    The message receiver can call the \`setPushTemplate\` method to pass in the push template name and select the template to use.

    If the sender uses a push template when sending a message, the content displayed in the push notification bar is based on the sender's push template.

    \`\`\`dart
    try {
      await ChatClient.getInstance.pushManager.setPushTemplate('Template Name');
    } on ChatError catch (e) {}
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    You can configure the push title and content displayed in the notification bar in the following ways, with the configuration priority from low to high:

    1. Configure the display attributes of push notifications;
    2. Use the default push template;
    3. Use message extension fields;
    4. Use a custom push template.

    ## Configure the display attributes of push notifications [#configure-the-display-attributes-of-push-notifications-3]

    Call \`updatePushNickname\` and \`updatePushDisplayStyle\` to set the nickname (\`nickname\`) and notification display style (\`displayStyle\`), which includes the push title and content in the notification bar.

    This nickname indicates the nickname of the message sender that is displayed in the push notification bar of the recipient's client when a message from the user is pushed. The nickname can be different from the nickname in user attributes. However, Agora recommends that you use the same nickname for both. Therefore, if either nickname is updated, the other should be changed at the same time. To update the nickname in user attributes, see [Set user attributes](..//en/realtime-media/im/build/build-core-messaging/user-attributes#set-user-attributes).

    \`\`\`typescript
    ChatClient.getInstance()
      .pushManager.updatePushNickname(nickname)
      .then(() => {
        console.log("Succeeded in updating the nickname.");
      })
      .catch((reason) => {
        console.log("Failed to update the nickname.", reason);
      });
    \`\`\`

    \`\`\`typescript
    ChatClient.getInstance()
      .pushManager.updatePushDisplayStyle(displayStyle)
      .then(() => {
        console.log("Succeeded in updating the display style.");
      })
      .catch((reason) => {
        console.log("Failed to update the display style.", reason);
      });
    \`\`\`

    You can call \`fetchPushOptionFromServer\` to retrieve the display attributes in a push notification, as shown in the following example:

    \`\`\`typescript
    ChatClient.getInstance()
      .pushManager.fetchPushOptionFromServer()
      .then(() => {
        console.log("Succeeded in getting the push configurations.");
      })
      .catch((reason) => {
        console.log("Failed to get the push configuration.", reason);
      });
    \`\`\`

    To display the message content in the notification bar, set the notification display style (\`displayStyle\`). This parameter has the following two settings:

    * (Default) \`Simple\`: Regardless of whether \`nickname\` is set, for any type of message pushed, the notification bar uses the default display settings, that is, the push title is "You have a new message" and the push content is "Please click to view".
    * \`Summary\`: Displays the message content. The nickname you set only takes effect when \`displayStyle\` is \`Summary\`, not \`Simple\`.

    The following table uses a one-to-one chat text message as an example to introduce the settings of the display attributes.
    For group chats, "Push nickname of message sender" and "Chat user ID of message sender" in the table below are displayed as "Group ID".

    | Parameter settings                                             | Push display                                                                                               | Image                                                                                            |
    | :------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- |
    | \`displayStyle\`: (default) \`Simple\` \`nickname\`: Set or not set. | Push title: "You have a new message"  Push content: "Please click to view"                                 | ![push\\_displayattribute\\_1](https://assets-docs.agora.io/images/im/push_displayattribute_1.png) |
    | \`displayStyle\`: \`Summary\`  \`nickname\`: Set a specific value    | Push title: "You have a new message"  Push content: "Push nickname of the message sender: message content" | ![push\\_displayattribute\\_2](https://assets-docs.agora.io/images/im/push_displayattribute_2.png) |
    | \`displayStyle\`: \`Summary\`  \`nickname\`: Not set                 | Push title: “You have a new message”  Push content: “Chat user ID of the message sender: message content”  | ![push\\_displayattribute\\_3](https://assets-docs.agora.io/images/im/push_displayattribute_3.png) |

    ## Use the default push template [#use-the-default-push-template-4]

    The default push template is mainly used when the default configuration provided by the server does not meet your needs. It allows you to set the global push title and push content. For example, the default settings provided by the server are push titles and content in English. If you need to use push titles and content in another language, you can set the push template in the corresponding language.

    To use the default template, create a default push template in [Agora Console](https://console.agora.io/) or [call RESTful API](/en/api-reference/api-ref/im/offline-push/offline-push-configuration). The template name is \`default\`. After setting, the default template is automatically used when pushing messages, and there is no need to enter the template name when creating messages.

    Follow the steps below to create a default push template in [Agora Console](https://console.agora.io/):

    1. Log in to [Agora Console](https://console.agora.io/) and click **Project Management** in the left navigation bar.

    2. On the **Project Management** page, click **Config** in the **Action** column for the project that has Chat enabled.

    3. On the **Edit Project** page, in the **Features** area, click **Enable / Config** for Chat.

    4. On the project configuration page, select **Features** > **Push Template**, click **Add Push Template**, and configure the fields in the pop-up dialog box, as shown in the following figure:

       ![push\\_add\\_template](https://assets-docs.agora.io/images/im/push_add_template.png)

    5. Set the **Template Name** to **default**, then set the **Title** and **Content** parameters, and click **OK**.

       | Parameter         | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Required |
       | :---------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
       | **Template Name** | String | The push template name. The default template is **default**.                                                                                                                                                                                                                                                                                                                                                                                                             | Yes      |
       | **Title**         | Array  | The push title. Can be set in the following ways: Enter a fixed push title. Use built-in variables and enter \`{$fromNickname}, {$msg}\`. Set custom variables through the value array. The field format is \`{0} {1} {2} ... {n}\`. If the default template is used, the first two settings do not need to pass in this parameter when creating a message. The server automatically obtains it. The third setting method needs to be passed in through the extension field. | Yes      |
       | **Content**       | Array  | The push content. Can be set in the following ways: Enter fixed push content. Use variables and enter \`{$fromNickname}, {$msg}\`. Set custom variables through the value array. The field format is \`{0} {1} {2} ... {n}\`. If the default template is used, the first two settings do not require parameters to be passed in when creating a message. The server automatically obtains them. The third setting method needs to be passed in through the extension field.  | Yes      |

    ## Use message extension fields [#use-message-extension-fields-3]

    When creating a push message, you can set the \`em_push_title\` and \`em_push_content\` message extension fields to customize the push title and content, respectively.

    \`\`\`typescript
    msg.attributes = {
      // Message extension field. This field is a built-in field and the field name cannot be modified.
      em_apns_ext: {
        em_push_title: " custom push title " , // Custom push message title. This field is a built-in field and the field name cannot be modified.
        em_push_content: " custom push content " , // Custom push message content. This field is a built-in field and the field name cannot be modified.
      },
    };
    \`\`\`

    The data structure of the custom display field is as follows:

    \`\`\`java
    {
        "em_apns_ext": {
            "em_push_title": "custom push title",
            "em_push_content": "custom push content"
        }
    }
    \`\`\`

    ## Use a custom push template [#use-a-custom-push-template-4]

    The steps to use a custom push template are as follows:

    1. If you use a custom push template, create it in [Agora Console](https://console.agora.io/) or call [RESTful API](/en/api-reference/api-ref/im/offline-push/offline-push-configuration#create-a-push-template). For a description of the parameters in the **Add Push Template** dialog box, see the section about using the default template. When using a custom template, regardless of how the **Title** and **Content** parameters are set, they must be passed in through the extension fields when creating a message.

    2. When creating a message, pass in the template name, push title, and push content by using the extension fields. The push title and content in the notification bar use the formats in the template, respectively.

       \`\`\`typescript
       // The following takes text messages as an example. The setting methods for other types of messages are the same.
       const msg = ChatMessage.createTextMessage(targetId, content, targetType);
       msg.attributes = {
         em_push_template: {
           name: "foo",
           // Set the value array of the push title in the template. If the push title specified in the template is placeholder data, you can customize the title here; if the specified title is a fixed value, the title will be a fixed value when using this template.
           title_args: "title",
           // Set the value array of the pushed content in the template. If the template content specified in the template is placeholder data, you can customize the content here; if the specified content is a fixed value, the content will be a fixed value when using the template.
           content_args: "test",
         },
       };
       ChatClient.getInstance()
         .chatManager.sendMessage(msg, {
           onError: (error) => {},
           onSuccess: (msg) => {},
         } as  any )
         .then(() => {
           console.log("send message success");
         })
         .catch((reason) => {
           console.log("set message fail.", reason);
         });
       \`\`\`

    The JSON structure of the push template is as follows:

    \`\`\`json
    "em_push_template":{
            "name":"test6",
            "title_args":[
                "test1"
            ],
            "content_args":[
                "{$fromNickname}",
                "{$msg}"
            ]
    }
    \`\`\`

    The message receiver can call \`selectPushTemplate\` to pass in the push template name and select the template to use.

    If the sender uses a push template when sending a message, the content displayed in the push notification bar is based on the sender's push template.

    \`\`\`typescript
    ChatClient.getInstance()
      .pushManager.selectPushTemplate(templateName)
      .then(() => {
        console.log("Succeeded in updating the nickname.");
      })
      .catch((reason) => {
        console.log("Failed to update the nickname.", reason);
      });
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    **This feature is not supported for this platform.**

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    **This feature is not supported for this platform.**

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "You can configure the push title and content displayed in the notification bar in the following ways, with the configuration priority from low to high:"
  }, {
    heading: undefined,
    content: "Configure the display attributes of push notifications;"
  }, {
    heading: undefined,
    content: "Use the default push template;"
  }, {
    heading: undefined,
    content: "Use message extension fields;"
  }, {
    heading: undefined,
    content: "Use a custom push template."
  }, {
    heading: "configure-the-display-attributes-of-push-notifications",
    content: "Call `updatePushNickname` and `updatePushDisplayStyle` to configure the nickname (`nickname`) and notification display style (`DisplayStyle`), which includes the push title and content in the notification bar."
  }, {
    heading: "configure-the-display-attributes-of-push-notifications",
    content: "This nickname indicates the nickname of the message sender that is displayed in the push notification bar of the recipient's client when a message from the user is pushed. The nickname can be different from the nickname in user attributes. However, Agora recommends that you use the same nickname for both. Therefore, if either nickname is updated, the other should be changed at the same time. To update the nickname in user attributes, see Set user attributes."
  }, {
    heading: "configure-the-display-attributes-of-push-notifications",
    content: "Call `getPushConfigsFromServer` to get the display attributes for push notifications, as shown in the following example:"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications",
    content: "To display the message content in the notification bar, set the notification display style (`DisplayStyle`). This parameter has the following two settings:"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications",
    content: '(Default) `SimpleBanner`: Regardless of whether `nickname` is set, for any type of message pushed, the notification bar uses the default display setting, that is, the push title is "You have a new message" and the push content is "Please click to view".'
  }, {
    heading: "configure-the-display-attributes-of-push-notifications",
    content: "`MessageSummary`: Displays the message content. The nickname you set only takes effect when `DisplayStyle` is `MessageSummary`, not `SimpleBanner`."
  }, {
    heading: "configure-the-display-attributes-of-push-notifications",
    content: "The following table uses a one-to-one chat text message as an example to introduce the settings of the display attributes."
  }, {
    heading: "configure-the-display-attributes-of-push-notifications",
    content: 'For group chats, "Push nickname of message sender" and "Chat user ID of message sender" in the table below are displayed as "Group ID".'
  }, {
    heading: "configure-the-display-attributes-of-push-notifications",
    content: "Parameter settings"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications",
    content: "Push display"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications",
    content: "Image"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications",
    content: "`DisplayStyle`: (default) `SimpleBanner`  `nickname`: Set or not set"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications",
    content: 'Push title: "You have a new message"  Push content: "Please click to view"'
  }, {
    heading: "configure-the-display-attributes-of-push-notifications",
    content: "`DisplayStyle`: `MessageSummary`  `nickname`: Set specific value"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications",
    content: 'Push title: "You have a new message"  Push content: "Push nickname of the message sender: message content"'
  }, {
    heading: "configure-the-display-attributes-of-push-notifications",
    content: "`DisplayStyle`: `MessageSummary`  `nickname`: Not set"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications",
    content: "Push title: “You have a new message”  Push content: “Message sender's Chat user ID: message content”"
  }, {
    heading: "use-the-default-push-template",
    content: "The default push template is mainly used when the default configuration provided by the server does not meet your needs. It allows you to set the global push title and push content. For example, the default settings provided by the server are push titles and content in English. If you need to use push titles and content in another language, you can set the push template in the corresponding language."
  }, {
    heading: "use-the-default-push-template",
    content: "To use the default template, create a default push template in Agora Console or call RESTful API. The template name is `default`. After setting, the default template is automatically used when pushing messages, and there is no need to enter the template name when creating messages."
  }, {
    heading: "use-the-default-push-template",
    content: "Follow the steps below to create a default push template in Agora Console:"
  }, {
    heading: "use-the-default-push-template",
    content: "Log in to Agora Console and click **Project Management** in the left navigation bar."
  }, {
    heading: "use-the-default-push-template",
    content: "On the **Project Management** page, click **Config** in the **Action** column for the project that has Chat enabled."
  }, {
    heading: "use-the-default-push-template",
    content: "On the **Edit Project** page, in the **Features** area, click **Enable / Config** for Chat."
  }, {
    heading: "use-the-default-push-template",
    content: "On the project configuration page, select **Features** > **Push Template**, click **Add Push Template**, and configure the fields in the pop-up dialog box, as shown in the following figure:"
  }, {
    heading: "use-the-default-push-template",
    content: "Set the **Template Name** to **default**, then set the **Title** and **Content** parameters, and click **OK**."
  }, {
    heading: "use-the-default-push-template",
    content: "Parameter"
  }, {
    heading: "use-the-default-push-template",
    content: "Type"
  }, {
    heading: "use-the-default-push-template",
    content: "Description"
  }, {
    heading: "use-the-default-push-template",
    content: "Required"
  }, {
    heading: "use-the-default-push-template",
    content: "**Template Name**"
  }, {
    heading: "use-the-default-push-template",
    content: "String"
  }, {
    heading: "use-the-default-push-template",
    content: "The push template name. The default template is **default**."
  }, {
    heading: "use-the-default-push-template",
    content: "Yes"
  }, {
    heading: "use-the-default-push-template",
    content: "**Title**"
  }, {
    heading: "use-the-default-push-template",
    content: "Array"
  }, {
    heading: "use-the-default-push-template",
    content: "The push title. Can be set in the following ways: Enter a fixed push title. Use built-in variables and enter `{$fromNickname}, {$msg}`. Set custom variables through the value array. The field format is `{0} {1} {2} ... {n}`. If the default template is used, the first two settings do not need to pass in this parameter when creating a message. The server automatically obtains it. The third setting method needs to be passed in through the extension field."
  }, {
    heading: "use-the-default-push-template",
    content: "Yes"
  }, {
    heading: "use-the-default-push-template",
    content: "**Content**"
  }, {
    heading: "use-the-default-push-template",
    content: "Array"
  }, {
    heading: "use-the-default-push-template",
    content: "The push content. Can be set in the following ways: Enter fixed push content. Use variables and enter `{$fromNickname}, {$msg}`. Set custom variables through the value array. The field format is `{0} {1} {2} ... {n}`. If the default template is used, the first two settings do not require parameters to be passed in when creating a message. The server automatically obtains them. The third setting method needs to be passed in through the extension field."
  }, {
    heading: "use-the-default-push-template",
    content: "Yes"
  }, {
    heading: "use-message-extension-fields",
    content: "When creating a push message, you can set the `em_push_title` and `em_push_content` message extension fields to customize the push title and content, respectively."
  }, {
    heading: "use-message-extension-fields",
    content: "The data structure of the custom display field is as follows:"
  }, {
    heading: "use-a-custom-push-template",
    content: "The steps to use a custom push template are as follows:"
  }, {
    heading: "use-a-custom-push-template",
    content: "If you use a custom push template, create it in Agora Console or call RESTful API. For a description of the parameters in the **Add Push Template** dialog box, see the section about using the default template. When using a custom template, regardless of how the **Title** and **Content** parameters are set, they must be passed in through the extension fields when creating a message."
  }, {
    heading: "use-a-custom-push-template",
    content: "When creating a message, pass in the template name, push title, and push content by using the extension fields. The push title and content in the notification bar use the formats in the template, respectively."
  }, {
    heading: "use-a-custom-push-template",
    content: "The JSON structure of the push template is as follows:"
  }, {
    heading: "use-a-custom-push-template",
    content: "The message receiver can call the `setPushTemplate` method to pass in the push template name and select the template to use."
  }, {
    heading: "use-a-custom-push-template",
    content: "If the sender uses a push template when sending a message, the content displayed in the push notification bar is based on the sender's push template."
  }, {
    heading: "use-a-custom-push-template",
    content: "You can configure the push title and content displayed in the notification bar in the following ways, with the configuration priority from low to high:"
  }, {
    heading: "use-a-custom-push-template",
    content: "Configure the display attributes of push notifications;"
  }, {
    heading: "use-a-custom-push-template",
    content: "Use the default push template;"
  }, {
    heading: "use-a-custom-push-template",
    content: "Use message extension fields;"
  }, {
    heading: "use-a-custom-push-template",
    content: "Use a custom push template."
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-1",
    content: "Call `updatePushDisplayName` and `updatePushDisplayStyle` methods to set the nickname (`displayName`) and notification display style (`pushDisplayStyle`), which includes the push title and content in the notification bar."
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-1",
    content: "This nickname indicates the nickname of the message sender that is displayed in the push notification bar of the recipient's client when a message from the user is pushed. The nickname can be different from the nickname in user attributes. However, Agora recommends that you use the same nickname for both. Therefore, if either nickname is updated, the other should be changed at the same time. To update the nickname in user attributes, see Set user attributes."
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-1",
    content: "Call `getPushNotificationOptionsFromServerWithCompletion` to get the display attributes for a push notification, as shown in the following code example:"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-1",
    content: "To display the message content in the notification bar, set the notification display style (`pushDisplayStyle`). This parameter has the following two settings:"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-1",
    content: '(Default) `AgoraChatPushDisplayStyleSimpleBanner`: Regardless of whether `displayName` is set, for any type of message push, the notification bar uses the default display settings, that is, the push title is "You have a new message" and the push content is "Please click to view".'
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-1",
    content: "`AgoraPushDisplayStyleMessageSummary`: Displays the message content. The nickname you set is only effective when `pushDisplayStyle` is `AgoraPushDisplayStyleMessageSummary`, not `AgoraChatPushDisplayStyleSimpleBanner`."
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-1",
    content: 'The following table uses a one-to-one chat text message as an example to introduce the settings of the display attributes. For group chats, the "Push nickname of the message sender" and "Chat user ID of the message sender" in the table below are displayed as "Group ID".'
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-1",
    content: "Parameter settings"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-1",
    content: "Push display"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-1",
    content: "Image"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-1",
    content: "`pushDisplayStyle`: (default) `AgoraChatPushDisplayStyleSimpleBanner``displayName`: Set or not."
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-1",
    content: 'Push title: "You have a new message"Push content: "Please click to view"'
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-1",
    content: "`pushDisplayStyle`: `AgoraPushDisplayStyleMessageSummary``displayName`: Set a specific value."
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-1",
    content: 'Push title: "You have a new message"Push content: "Push nickname of the message sender: message content"'
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-1",
    content: "`pushDisplayStyle`: `AgoraPushDisplayStyleMessageSummary``displayName`: Not set."
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-1",
    content: `Push title: "You have a new message"Push content: "Message sender's Chat user ID: Message content"`
  }, {
    heading: "use-the-default-push-template-1",
    content: "The default push template is mainly used when the default configuration provided by the server does not meet your needs. It allows you to set the global push title and push content. For example, the default settings provided by the server are push titles and content in English. If you need to display push titles and content in another language, you can set the push template in the corresponding language."
  }, {
    heading: "use-the-default-push-template-1",
    content: "To use the default template, create a default push template in Agora Console or call RESTful API. The template name is `default`. After setting, the default template is automatically used when pushing messages, and there is no need to enter the template name when creating messages."
  }, {
    heading: "use-the-default-push-template-1",
    content: "Follow the steps below to create a default push template in Agora Console:"
  }, {
    heading: "use-the-default-push-template-1",
    content: "Log in to Agora Console and click **Project Management** in the left navigation bar."
  }, {
    heading: "use-the-default-push-template-1",
    content: "On the **Project Management** page, click **Config** in the **Action** column for the project that has Chat enabled."
  }, {
    heading: "use-the-default-push-template-1",
    content: "On the **Edit Project** page, in the **Features** area, click **Enable / Config** for Chat."
  }, {
    heading: "use-the-default-push-template-1",
    content: "On the project configuration page, select **Features** > **Push Template**, click **Add Push Template**, and configure the fields in the pop-up dialog box, as shown in the following figure."
  }, {
    heading: "use-the-default-push-template-1",
    content: "Set **Template Name** to **default**, then set the **Title** and **Content** parameters, and click **OK**."
  }, {
    heading: "use-the-default-push-template-1",
    content: "Parameter"
  }, {
    heading: "use-the-default-push-template-1",
    content: "Type"
  }, {
    heading: "use-the-default-push-template-1",
    content: "Description"
  }, {
    heading: "use-the-default-push-template-1",
    content: "Required"
  }, {
    heading: "use-the-default-push-template-1",
    content: "**Template Name**"
  }, {
    heading: "use-the-default-push-template-1",
    content: "String"
  }, {
    heading: "use-the-default-push-template-1",
    content: "The push template name. The default template is **default**."
  }, {
    heading: "use-the-default-push-template-1",
    content: "Yes"
  }, {
    heading: "use-the-default-push-template-1",
    content: "**Title**"
  }, {
    heading: "use-the-default-push-template-1",
    content: "Array"
  }, {
    heading: "use-the-default-push-template-1",
    content: "The push title. Can be set in the following ways: Enter a fixed push title. Use built-in variables and enter `{$fromNickname}, {$msg}`. Set custom variables through the value array. The field format is `{0} {1} {2} ... {n}`. If the default template is used, the first two settings do not need to pass in this parameter when creating a message. The server automatically obtains it. The third setting method needs to be passed in through the extension field."
  }, {
    heading: "use-the-default-push-template-1",
    content: "Yes"
  }, {
    heading: "use-the-default-push-template-1",
    content: "**Content**"
  }, {
    heading: "use-the-default-push-template-1",
    content: "Array"
  }, {
    heading: "use-the-default-push-template-1",
    content: "The push content. Can be set in the following ways: Enter fixed push content. Use variables and enter `{$fromNickname}, {$msg}`. Set custom variables through the value array. The field format is `{0} {1} {2} ... {n}`. If the default template is used, the first two settings do not require parameters to be passed in when creating a message. The server automatically obtains them. The third setting method needs to be passed in through the extension field."
  }, {
    heading: "use-the-default-push-template-1",
    content: "Yes"
  }, {
    heading: "use-message-extension-fields-1",
    content: `When creating a push message, you can set the message extension fields to customize the push content to be displayed.
For the display attributes of push notifications, that is, the display attributes and display style of push notifications, in addition to calling specific methods to set them, you can also set them through custom fields. If you use both methods at the same time, the custom fields have a higher priority.`
  }, {
    heading: "use-message-extension-fields-1",
    content: "The structure of a custom display field is as follows:"
  }, {
    heading: "use-message-extension-fields-1",
    content: "Parameters"
  }, {
    heading: "use-message-extension-fields-1",
    content: "Description"
  }, {
    heading: "use-message-extension-fields-1",
    content: "`em_apns_ext`"
  }, {
    heading: "use-message-extension-fields-1",
    content: "The message extension fields."
  }, {
    heading: "use-message-extension-fields-1",
    content: "`em_push_title`"
  }, {
    heading: "use-message-extension-fields-1",
    content: "Customize the push message title. This field name is fixed and cannot be modified."
  }, {
    heading: "use-message-extension-fields-1",
    content: "`em_push_content`"
  }, {
    heading: "use-message-extension-fields-1",
    content: "Customize the push message content. This field name is fixed and cannot be modified."
  }, {
    heading: "use-a-custom-push-template-1",
    content: "The steps to use a custom push template are as follows:"
  }, {
    heading: "use-a-custom-push-template-1",
    content: "If you use a custom push template, create it in Agora Console or call RESTful API. For a description of the parameters in the **Add Push Template** dialog box, see the section about using the default template. When using a custom template, regardless of how the **Title** and **Content** parameters are set, they must be passed in through the extension fields when creating a message."
  }, {
    heading: "use-a-custom-push-template-1",
    content: "When creating a message, pass in the template name, push title, and push content by using the extension fields. The push title and content in the notification bar use the formats in the template, respectively."
  }, {
    heading: "use-a-custom-push-template-1",
    content: "The JSON structure of the push template is as follows:"
  }, {
    heading: "use-a-custom-push-template-1",
    content: "The message receiver can call `setPushTemplate` to pass in the push template name and select the template to use."
  }, {
    heading: "use-a-custom-push-template-1",
    content: "If the sender uses a push template when sending a message, the content displayed in the push notification bar is based on the sender's push template."
  }, {
    heading: "use-a-custom-push-template-1",
    content: "You can configure the push title and content displayed in the notification bar by using push templates."
  }, {
    heading: "set-the-push-template",
    content: "The default push template is mainly used when the default configuration provided by the server does not meet your needs. It allows you to set the global push title and push content. For example, the default settings provided by the server are push titles and content in English. If you need to use push titles and content in another language, you can set the push template in the corresponding language."
  }, {
    heading: "use-the-default-push-template-2",
    content: "To use the default template, create a default push template in Agora Console or call RESTful API. The template name is `default`. After setting, the default template is automatically used when pushing messages. You do not need to enter the template name when creating messages."
  }, {
    heading: "use-the-default-push-template-2",
    content: "Follow the steps below to create a default push template in Agora Console:"
  }, {
    heading: "use-the-default-push-template-2",
    content: "Log in to Agora Console and click **Project Management** in the left navigation bar."
  }, {
    heading: "use-the-default-push-template-2",
    content: "On the **Project Management** page, click **Config** in the **Action** column for the project that has Chat enabled."
  }, {
    heading: "use-the-default-push-template-2",
    content: "On the **Edit Project** page, in the **Features** area, click **Enable / Config** for Chat."
  }, {
    heading: "use-the-default-push-template-2",
    content: "On the project configuration page, select **Features** > **Push Template** , click **Add Push Template** , and configure the fields in the pop-up dialog box, as shown in the following figure:"
  }, {
    heading: "use-the-default-push-template-2",
    content: "Set **Template Name** to **default**, then set the **Title** and **Content** parameters, and click **OK**."
  }, {
    heading: "use-the-default-push-template-2",
    content: "Parameter"
  }, {
    heading: "use-the-default-push-template-2",
    content: "Type"
  }, {
    heading: "use-the-default-push-template-2",
    content: "Description"
  }, {
    heading: "use-the-default-push-template-2",
    content: "Required"
  }, {
    heading: "use-the-default-push-template-2",
    content: "**Template Name**"
  }, {
    heading: "use-the-default-push-template-2",
    content: "String"
  }, {
    heading: "use-the-default-push-template-2",
    content: "Push template name. The default template is **default**."
  }, {
    heading: "use-the-default-push-template-2",
    content: "Yes"
  }, {
    heading: "use-the-default-push-template-2",
    content: "**Title**"
  }, {
    heading: "use-the-default-push-template-2",
    content: "Array"
  }, {
    heading: "use-the-default-push-template-2",
    content: "Push title. Can be set in the following ways: Enter a fixed push title. Use built-in variables and enter `{$fromNickname}, {$msg}`. Set custom variables through the value array. The field format is `{0} {1} {2} ... {n}`. If the default template is used, the first two settings do not need to pass in this parameter when creating a message; the server automatically obtains it. The third setting method needs to be passed in through the extension field."
  }, {
    heading: "use-the-default-push-template-2",
    content: "Yes"
  }, {
    heading: "use-the-default-push-template-2",
    content: "**Content**"
  }, {
    heading: "use-the-default-push-template-2",
    content: "Array"
  }, {
    heading: "use-the-default-push-template-2",
    content: "Push content. Can be set in the following ways: Enter fixed push content. Use variables and enter `{$fromNickname}, {$msg}`. Set custom variables through the value array. The field format is `{0} {1} {2} ... {n}`. If the default template is used, the first two settings do not require parameters to be passed in when creating a message; the server automatically obtains them. The third setting method needs to be passed in through the extension field."
  }, {
    heading: "use-the-default-push-template-2",
    content: "Yes"
  }, {
    heading: "use-a-custom-push-template-2",
    content: "The steps to use a custom push template are as follows:"
  }, {
    heading: "use-a-custom-push-template-2",
    content: "If you use a custom push template, create a custom push template in Agora Console or Call RESTful API. For a description of the parameters in the **Add Push Template** dialog box, see Use the default push template. When using a custom template, regardless of how the **Title** and **Content** parameters are set, they must be passed in through the extension fields when creating a message."
  }, {
    heading: "use-a-custom-push-template-2",
    content: "When creating a message, pass in the template name, push title, and push content by using the extension fields. The push title and content in the notification bar use the formats in the template, respectively:"
  }, {
    heading: "use-a-custom-push-template-2",
    content: "The JSON structure of the push template is as follows:"
  }, {
    heading: "use-a-custom-push-template-2",
    content: "You can configure the push title and content displayed in the notification bar in the following ways, with the configuration priority from low to high:"
  }, {
    heading: "use-a-custom-push-template-2",
    content: "Configure the display attributes of push notifications;"
  }, {
    heading: "use-a-custom-push-template-2",
    content: "Use the default push template;"
  }, {
    heading: "use-a-custom-push-template-2",
    content: "Use message extension fields;"
  }, {
    heading: "use-a-custom-push-template-2",
    content: "Use a custom push template."
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-2",
    content: "Call `updatePushNickname` and `updatePushDisplayStyle` methods to set the nickname (`nickname`) and notification display style (`DisplayStyle`), which includes the push title and content in the notification bar."
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-2",
    content: "This nickname indicates the nickname of the message sender that is displayed in the push notification bar of the recipient's client when a message from the user is pushed. The nickname can be different from the nickname in user attributes. However, Agora recommends that you use the same nickname for both. Therefore, if either nickname is updated, the other should be changed at the same time. To update the nickname in user attributes, see Set user attributes."
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-2",
    content: "Call `getPushConfigsFromServer` to get the display attributes for push notifications, as shown in the following example:"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-2",
    content: "To display the message content in the notification bar, set the notification display style (`DisplayStyle`). This parameter has the following two settings:"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-2",
    content: '(Default) `Simple`: Regardless of whether `nickname` is set, for any type of message pushed, the notification bar uses the default display setting, that is, the push title is "You have a new message" and the push content is "Please click to view".'
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-2",
    content: "`Summary`: Displays the message content. The nickname you set only takes effect when `DisplayStyle` is set `Summary`, not `Simple`."
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-2",
    content: "The following table uses a one-to-one chat message as an example to introduce the settings of the display attributes."
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-2",
    content: 'For group chats, "Push nickname of message sender" and "Chat user ID of message sender" in the table below are displayed as "Group ID".'
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-2",
    content: "Parameter settings"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-2",
    content: "Push display"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-2",
    content: "Image"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-2",
    content: "`DisplayStyle`: (default) `Simple`  `nickname`: Set or not set"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-2",
    content: 'Push title: "You have a new message"  Push content: "Please click to view"'
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-2",
    content: "`DisplayStyle`: `Summary`  `nickname`: Set specific value"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-2",
    content: 'Push title: "You have a new message"  Push content: "Push nickname of the message sender: message content"'
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-2",
    content: "`DisplayStyle`: `Summary`  `nickname`: Not set"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-2",
    content: "Push title: “You have a new message”  Push content: “Message sender's Chat user ID: message content”"
  }, {
    heading: "use-the-default-push-template-3",
    content: "The default push template is mainly used when the default configuration provided by the server does not meet your needs. It allows you to set the global push title and push content. For example, the default settings provided by the server are push titles and content in English. If you need to use push titles and content in another language, you can set the push template in the corresponding language."
  }, {
    heading: "use-the-default-push-template-3",
    content: "To use the default template, create a default push template in Agora Console or call RESTful API. The template name is `default`. After setting, the default template is automatically used when pushing messages, and there is no need to enter the template name when creating messages."
  }, {
    heading: "use-the-default-push-template-3",
    content: "Follow the steps below to create a default push template in Agora Console:"
  }, {
    heading: "use-the-default-push-template-3",
    content: "Log in to Agora Console and click **Project Management** in the left navigation bar."
  }, {
    heading: "use-the-default-push-template-3",
    content: "On the **Project Management** page, click **Config** in the **Action** column for the project that has Chat enabled."
  }, {
    heading: "use-the-default-push-template-3",
    content: "On the **Edit Project** page, in the **Features** area, click **Enable / Config** for Chat."
  }, {
    heading: "use-the-default-push-template-3",
    content: "On the project configuration page, select **Features** > **Push Template**, click **Add Push Template**, and configure the fields in the pop-up dialog box, as shown in the following figure:"
  }, {
    heading: "use-the-default-push-template-3",
    content: "Set the **Template Name** to **default**, then set the **Title** and **Content** parameters and click **OK**."
  }, {
    heading: "use-the-default-push-template-3",
    content: "Parameter"
  }, {
    heading: "use-the-default-push-template-3",
    content: "Type"
  }, {
    heading: "use-the-default-push-template-3",
    content: "Description"
  }, {
    heading: "use-the-default-push-template-3",
    content: "Required"
  }, {
    heading: "use-the-default-push-template-3",
    content: "**Template Name**"
  }, {
    heading: "use-the-default-push-template-3",
    content: "String"
  }, {
    heading: "use-the-default-push-template-3",
    content: "The push template name. The default template is **default**."
  }, {
    heading: "use-the-default-push-template-3",
    content: "Yes"
  }, {
    heading: "use-the-default-push-template-3",
    content: "**Title**"
  }, {
    heading: "use-the-default-push-template-3",
    content: "Array"
  }, {
    heading: "use-the-default-push-template-3",
    content: "The push title. Can be set in the following ways: Enter a fixed push title. Use built-in variables and enter `{$fromNickname}, {$msg}`. Set custom variables through the value array. The field format is `{0} {1} {2} ... {n}`. If the default template is used, the first two settings do not need to pass in this parameter when creating a message. The server automatically obtains it. The third setting method needs to be passed in through the extension field."
  }, {
    heading: "use-the-default-push-template-3",
    content: "Yes"
  }, {
    heading: "use-the-default-push-template-3",
    content: "**Content**"
  }, {
    heading: "use-the-default-push-template-3",
    content: "Array"
  }, {
    heading: "use-the-default-push-template-3",
    content: "The push content. Can be set in the following ways: Enter fixed push content. Use variables and enter `{$fromNickname}, {$msg}`. Set custom variables through the value array. The field format is `{0} {1} {2} ... {n}`. If the default template is used, the first two settings do not require parameters to be passed in when creating a message. The server automatically obtains them. The third setting method needs to be passed in through the extension field."
  }, {
    heading: "use-the-default-push-template-3",
    content: "Yes"
  }, {
    heading: "use-message-extension-fields-2",
    content: "When creating a push message, you can set the `em_push_title` and `em_push_content` message extension fields to customize the push title and content, respectively."
  }, {
    heading: "use-message-extension-fields-2",
    content: "The data structure of the custom display field is as follows:"
  }, {
    heading: "use-a-custom-push-template-3",
    content: "The steps to use a custom push template are as follows:"
  }, {
    heading: "use-a-custom-push-template-3",
    content: "If you use a custom push template, create it in Agora Console or call RESTful API. For a description of the parameters in the **Add Push Template** dialog box, see the section about using the default template. When using a custom template, regardless of how the **Title** and **Content** parameters are set, they must be passed in through the extension fields when creating a message."
  }, {
    heading: "use-a-custom-push-template-3",
    content: "When creating a message, pass in the template name, push title, and push content by using the extension fields. The push title and content in the notification bar use the formats in the template, respectively."
  }, {
    heading: "use-a-custom-push-template-3",
    content: "The JSON structure of the push template is as follows:"
  }, {
    heading: "use-a-custom-push-template-3",
    content: "The message receiver can call the `setPushTemplate` method to pass in the push template name and select the template to use."
  }, {
    heading: "use-a-custom-push-template-3",
    content: "If the sender uses a push template when sending a message, the content displayed in the push notification bar is based on the sender's push template."
  }, {
    heading: "use-a-custom-push-template-3",
    content: "You can configure the push title and content displayed in the notification bar in the following ways, with the configuration priority from low to high:"
  }, {
    heading: "use-a-custom-push-template-3",
    content: "Configure the display attributes of push notifications;"
  }, {
    heading: "use-a-custom-push-template-3",
    content: "Use the default push template;"
  }, {
    heading: "use-a-custom-push-template-3",
    content: "Use message extension fields;"
  }, {
    heading: "use-a-custom-push-template-3",
    content: "Use a custom push template."
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-3",
    content: "Call `updatePushNickname` and `updatePushDisplayStyle` to set the nickname (`nickname`) and notification display style (`displayStyle`), which includes the push title and content in the notification bar."
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-3",
    content: "This nickname indicates the nickname of the message sender that is displayed in the push notification bar of the recipient's client when a message from the user is pushed. The nickname can be different from the nickname in user attributes. However, Agora recommends that you use the same nickname for both. Therefore, if either nickname is updated, the other should be changed at the same time. To update the nickname in user attributes, see Set user attributes."
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-3",
    content: "You can call `fetchPushOptionFromServer` to retrieve the display attributes in a push notification, as shown in the following example:"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-3",
    content: "To display the message content in the notification bar, set the notification display style (`displayStyle`). This parameter has the following two settings:"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-3",
    content: '(Default) `Simple`: Regardless of whether `nickname` is set, for any type of message pushed, the notification bar uses the default display settings, that is, the push title is "You have a new message" and the push content is "Please click to view".'
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-3",
    content: "`Summary`: Displays the message content. The nickname you set only takes effect when `displayStyle` is `Summary`, not `Simple`."
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-3",
    content: `The following table uses a one-to-one chat text message as an example to introduce the settings of the display attributes.
For group chats, "Push nickname of message sender" and "Chat user ID of message sender" in the table below are displayed as "Group ID".`
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-3",
    content: "Parameter settings"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-3",
    content: "Push display"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-3",
    content: "Image"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-3",
    content: "`displayStyle`: (default) `Simple` `nickname`: Set or not set."
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-3",
    content: 'Push title: "You have a new message"  Push content: "Please click to view"'
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-3",
    content: "`displayStyle`: `Summary`  `nickname`: Set a specific value"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-3",
    content: 'Push title: "You have a new message"  Push content: "Push nickname of the message sender: message content"'
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-3",
    content: "`displayStyle`: `Summary`  `nickname`: Not set"
  }, {
    heading: "configure-the-display-attributes-of-push-notifications-3",
    content: "Push title: “You have a new message”  Push content: “Chat user ID of the message sender: message content”"
  }, {
    heading: "use-the-default-push-template-4",
    content: "The default push template is mainly used when the default configuration provided by the server does not meet your needs. It allows you to set the global push title and push content. For example, the default settings provided by the server are push titles and content in English. If you need to use push titles and content in another language, you can set the push template in the corresponding language."
  }, {
    heading: "use-the-default-push-template-4",
    content: "To use the default template, create a default push template in Agora Console or call RESTful API. The template name is `default`. After setting, the default template is automatically used when pushing messages, and there is no need to enter the template name when creating messages."
  }, {
    heading: "use-the-default-push-template-4",
    content: "Follow the steps below to create a default push template in Agora Console:"
  }, {
    heading: "use-the-default-push-template-4",
    content: "Log in to Agora Console and click **Project Management** in the left navigation bar."
  }, {
    heading: "use-the-default-push-template-4",
    content: "On the **Project Management** page, click **Config** in the **Action** column for the project that has Chat enabled."
  }, {
    heading: "use-the-default-push-template-4",
    content: "On the **Edit Project** page, in the **Features** area, click **Enable / Config** for Chat."
  }, {
    heading: "use-the-default-push-template-4",
    content: "On the project configuration page, select **Features** > **Push Template**, click **Add Push Template**, and configure the fields in the pop-up dialog box, as shown in the following figure:"
  }, {
    heading: "use-the-default-push-template-4",
    content: "Set the **Template Name** to **default**, then set the **Title** and **Content** parameters, and click **OK**."
  }, {
    heading: "use-the-default-push-template-4",
    content: "Parameter"
  }, {
    heading: "use-the-default-push-template-4",
    content: "Type"
  }, {
    heading: "use-the-default-push-template-4",
    content: "Description"
  }, {
    heading: "use-the-default-push-template-4",
    content: "Required"
  }, {
    heading: "use-the-default-push-template-4",
    content: "**Template Name**"
  }, {
    heading: "use-the-default-push-template-4",
    content: "String"
  }, {
    heading: "use-the-default-push-template-4",
    content: "The push template name. The default template is **default**."
  }, {
    heading: "use-the-default-push-template-4",
    content: "Yes"
  }, {
    heading: "use-the-default-push-template-4",
    content: "**Title**"
  }, {
    heading: "use-the-default-push-template-4",
    content: "Array"
  }, {
    heading: "use-the-default-push-template-4",
    content: "The push title. Can be set in the following ways: Enter a fixed push title. Use built-in variables and enter `{$fromNickname}, {$msg}`. Set custom variables through the value array. The field format is `{0} {1} {2} ... {n}`. If the default template is used, the first two settings do not need to pass in this parameter when creating a message. The server automatically obtains it. The third setting method needs to be passed in through the extension field."
  }, {
    heading: "use-the-default-push-template-4",
    content: "Yes"
  }, {
    heading: "use-the-default-push-template-4",
    content: "**Content**"
  }, {
    heading: "use-the-default-push-template-4",
    content: "Array"
  }, {
    heading: "use-the-default-push-template-4",
    content: "The push content. Can be set in the following ways: Enter fixed push content. Use variables and enter `{$fromNickname}, {$msg}`. Set custom variables through the value array. The field format is `{0} {1} {2} ... {n}`. If the default template is used, the first two settings do not require parameters to be passed in when creating a message. The server automatically obtains them. The third setting method needs to be passed in through the extension field."
  }, {
    heading: "use-the-default-push-template-4",
    content: "Yes"
  }, {
    heading: "use-message-extension-fields-3",
    content: "When creating a push message, you can set the `em_push_title` and `em_push_content` message extension fields to customize the push title and content, respectively."
  }, {
    heading: "use-message-extension-fields-3",
    content: "The data structure of the custom display field is as follows:"
  }, {
    heading: "use-a-custom-push-template-4",
    content: "The steps to use a custom push template are as follows:"
  }, {
    heading: "use-a-custom-push-template-4",
    content: "If you use a custom push template, create it in Agora Console or call RESTful API. For a description of the parameters in the **Add Push Template** dialog box, see the section about using the default template. When using a custom template, regardless of how the **Title** and **Content** parameters are set, they must be passed in through the extension fields when creating a message."
  }, {
    heading: "use-a-custom-push-template-4",
    content: "When creating a message, pass in the template name, push title, and push content by using the extension fields. The push title and content in the notification bar use the formats in the template, respectively."
  }, {
    heading: "use-a-custom-push-template-4",
    content: "The JSON structure of the push template is as follows:"
  }, {
    heading: "use-a-custom-push-template-4",
    content: "The message receiver can call `selectPushTemplate` to pass in the push template name and select the template to use."
  }, {
    heading: "use-a-custom-push-template-4",
    content: "If the sender uses a push template when sending a message, the content displayed in the push notification bar is based on the sender's push template."
  }, {
    heading: "use-a-custom-push-template-4",
    content: "**This feature is not supported for this platform.**"
  }, {
    heading: "use-a-custom-push-template-4",
    content: "**This feature is not supported for this platform.**"
  }],
  headings: [{
    id: "configure-the-display-attributes-of-push-notifications",
    content: "Configure the display attributes of push notifications"
  }, {
    id: "use-the-default-push-template",
    content: "Use the default push template"
  }, {
    id: "use-message-extension-fields",
    content: "Use message extension fields"
  }, {
    id: "use-a-custom-push-template",
    content: "Use a custom push template"
  }, {
    id: "configure-the-display-attributes-of-push-notifications-1",
    content: "Configure the display attributes of push notifications"
  }, {
    id: "use-the-default-push-template-1",
    content: "Use the default push template"
  }, {
    id: "use-message-extension-fields-1",
    content: "Use message extension fields"
  }, {
    id: "use-a-custom-push-template-1",
    content: "Use a custom push template"
  }, {
    id: "set-the-push-template",
    content: "Set the push template"
  }, {
    id: "use-the-default-push-template-2",
    content: "Use the default push template"
  }, {
    id: "use-a-custom-push-template-2",
    content: "Use a custom push template"
  }, {
    id: "configure-the-display-attributes-of-push-notifications-2",
    content: "Configure the display attributes of push notifications"
  }, {
    id: "use-the-default-push-template-3",
    content: "Use the default push template"
  }, {
    id: "use-message-extension-fields-2",
    content: "Use message extension fields"
  }, {
    id: "use-a-custom-push-template-3",
    content: "Use a custom push template"
  }, {
    id: "configure-the-display-attributes-of-push-notifications-3",
    content: "Configure the display attributes of push notifications"
  }, {
    id: "use-the-default-push-template-4",
    content: "Use the default push template"
  }, {
    id: "use-message-extension-fields-3",
    content: "Use message extension fields"
  }, {
    id: "use-a-custom-push-template-4",
    content: "Use a custom push template"
  }]
};
export let toc = [{
  depth: 2,
  url: "#configure-the-display-attributes-of-push-notifications",
  title: _jsx(_Fragment, {
    children: "Configure the display attributes of push notifications"
  })
}, {
  depth: 2,
  url: "#use-the-default-push-template",
  title: _jsx(_Fragment, {
    children: "Use the default push template"
  })
}, {
  depth: 2,
  url: "#use-message-extension-fields",
  title: _jsx(_Fragment, {
    children: "Use message extension fields"
  })
}, {
  depth: 2,
  url: "#use-a-custom-push-template",
  title: _jsx(_Fragment, {
    children: "Use a custom push template"
  })
}, {
  depth: 2,
  url: "#configure-the-display-attributes-of-push-notifications-1",
  title: _jsx(_Fragment, {
    children: "Configure the display attributes of push notifications"
  })
}, {
  depth: 2,
  url: "#use-the-default-push-template-1",
  title: _jsx(_Fragment, {
    children: "Use the default push template"
  })
}, {
  depth: 2,
  url: "#use-message-extension-fields-1",
  title: _jsx(_Fragment, {
    children: "Use message extension fields"
  })
}, {
  depth: 2,
  url: "#use-a-custom-push-template-1",
  title: _jsx(_Fragment, {
    children: "Use a custom push template"
  })
}, {
  depth: 3,
  url: "#set-the-push-template",
  title: _jsx(_Fragment, {
    children: "Set the push template"
  })
}, {
  depth: 4,
  url: "#use-the-default-push-template-2",
  title: _jsx(_Fragment, {
    children: "Use the default push template"
  })
}, {
  depth: 4,
  url: "#use-a-custom-push-template-2",
  title: _jsx(_Fragment, {
    children: "Use a custom push template"
  })
}, {
  depth: 2,
  url: "#configure-the-display-attributes-of-push-notifications-2",
  title: _jsx(_Fragment, {
    children: "Configure the display attributes of push notifications"
  })
}, {
  depth: 2,
  url: "#use-the-default-push-template-3",
  title: _jsx(_Fragment, {
    children: "Use the default push template"
  })
}, {
  depth: 2,
  url: "#use-message-extension-fields-2",
  title: _jsx(_Fragment, {
    children: "Use message extension fields"
  })
}, {
  depth: 2,
  url: "#use-a-custom-push-template-3",
  title: _jsx(_Fragment, {
    children: "Use a custom push template"
  })
}, {
  depth: 2,
  url: "#configure-the-display-attributes-of-push-notifications-3",
  title: _jsx(_Fragment, {
    children: "Configure the display attributes of push notifications"
  })
}, {
  depth: 2,
  url: "#use-the-default-push-template-4",
  title: _jsx(_Fragment, {
    children: "Use the default push template"
  })
}, {
  depth: 2,
  url: "#use-message-extension-fields-3",
  title: _jsx(_Fragment, {
    children: "Use message extension fields"
  })
}, {
  depth: 2,
  url: "#use-a-custom-push-template-4",
  title: _jsx(_Fragment, {
    children: "Use a custom push template"
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
  }, { _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_PlatformTabsGroup, {
    groupMode: "structured",
    canonicalPlatform: "web",
    platforms: '["android","ios","web","flutter","react-native","windows","unity"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "android",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "android"
      }), _jsx(_components.p, {
        children: "You can configure the push title and content displayed in the notification bar in the following ways, with the configuration priority from low to high:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsx(_components.li, {
          children: "Configure the display attributes of push notifications;"
        }), `
`, _jsx(_components.li, {
          children: "Use the default push template;"
        }), `
`, _jsx(_components.li, {
          children: "Use message extension fields;"
        }), `
`, _jsx(_components.li, {
          children: "Use a custom push template."
        }), `
`]
      }), _jsx(_components.h2, {
        id: "configure-the-display-attributes-of-push-notifications",
        children: "Configure the display attributes of push notifications"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "updatePushNickname"
        }), " and ", _jsx(_components.code, {
          children: "updatePushDisplayStyle"
        }), " to configure the nickname (", _jsx(_components.code, {
          children: "nickname"
        }), ") and notification display style (", _jsx(_components.code, {
          children: "DisplayStyle"
        }), "), which includes the push title and content in the notification bar."]
      }), _jsxs(_components.p, {
        children: ["This nickname indicates the nickname of the message sender that is displayed in the push notification bar of the recipient's client when a message from the user is pushed. The nickname can be different from the nickname in user attributes. However, Agora recommends that you use the same nickname for both. Therefore, if either nickname is updated, the other should be changed at the same time. To update the nickname in user attributes, see ", _jsx(_components.a, {
          href: "..//en/realtime-media/im/build/build-core-messaging/user-attributes#set-user-attributes",
          children: "Set user attributes"
        }), "."]
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
                children: "// Asynchronous processing is required."
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
                children: "pushManager"
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
                children: "updatePushNickname"
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
                children: '"nickname"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ");"
              })]
            })]
          })
        })
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
                children: "PushManager.DisplayStyle displayStyle "
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
                children: " PushManager.DisplayStyle.SimpleBanner;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Asynchronous processing is required."
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
                children: "pushManager"
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
                children: "updatePushDisplayStyle"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(displayStyle);"
              })]
            })]
          })
        })
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "getPushConfigsFromServer"
        }), " to get the display attributes for push notifications, as shown in the following example:"]
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
                children: "PushConfigs pushConfigs "
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
                children: " ChatClient."
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
                children: "pushManager"
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
                children: "getPushConfigsFromServer"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Get the nickname displayed in the push notification."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "String nickname "
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
                children: " pushConfigs."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getDisplayNickname"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Get the display style of the push notification."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "PushManager.DisplayStyle style "
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
                children: " pushConfigs."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getDisplayStyle"
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
      }), _jsxs(_components.p, {
        children: ["To display the message content in the notification bar, set the notification display style (", _jsx(_components.code, {
          children: "DisplayStyle"
        }), "). This parameter has the following two settings:"]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["(Default) ", _jsx(_components.code, {
            children: "SimpleBanner"
          }), ": Regardless of whether ", _jsx(_components.code, {
            children: "nickname"
          }), ' is set, for any type of message pushed, the notification bar uses the default display setting, that is, the push title is "You have a new message" and the push content is "Please click to view".']
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "MessageSummary"
          }), ": Displays the message content. The nickname you set only takes effect when ", _jsx(_components.code, {
            children: "DisplayStyle"
          }), " is ", _jsx(_components.code, {
            children: "MessageSummary"
          }), ", not ", _jsx(_components.code, {
            children: "SimpleBanner"
          }), "."]
        }), `
`]
      }), _jsx(_components.p, {
        children: "The following table uses a one-to-one chat text message as an example to introduce the settings of the display attributes."
      }), _jsx(_components.p, {
        children: 'For group chats, "Push nickname of message sender" and "Chat user ID of message sender" in the table below are displayed as "Group ID".'
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Parameter settings"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Push display"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Image"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "DisplayStyle"
              }), ": (default) ", _jsx(_components.code, {
                children: "SimpleBanner"
              }), "  ", _jsx(_components.code, {
                children: "nickname"
              }), ": Set or not set"]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: 'Push title: "You have a new message"  Push content: "Please click to view"'
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/im/push_displayattribute_1.png",
                alt: "push_displayattribute_1"
              })
            })]
          }), _jsxs(_components.tr, {
            children: [_jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "DisplayStyle"
              }), ": ", _jsx(_components.code, {
                children: "MessageSummary"
              }), "  ", _jsx(_components.code, {
                children: "nickname"
              }), ": Set specific value"]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: 'Push title: "You have a new message"  Push content: "Push nickname of the message sender: message content"'
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/im/push_displayattribute_2.png",
                alt: "push_displayattribute_2"
              })
            })]
          }), _jsxs(_components.tr, {
            children: [_jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "DisplayStyle"
              }), ": ", _jsx(_components.code, {
                children: "MessageSummary"
              }), "  ", _jsx(_components.code, {
                children: "nickname"
              }), ": Not set"]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Push title: “You have a new message”  Push content: “Message sender's Chat user ID: message content”"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/im/push_displayattribute_3.png",
                alt: "push_displayattribute_3"
              })
            })]
          })]
        })]
      }), _jsx(_components.h2, {
        id: "use-the-default-push-template",
        children: "Use the default push template"
      }), _jsx(_components.p, {
        children: "The default push template is mainly used when the default configuration provided by the server does not meet your needs. It allows you to set the global push title and push content. For example, the default settings provided by the server are push titles and content in English. If you need to use push titles and content in another language, you can set the push template in the corresponding language."
      }), _jsxs(_components.p, {
        children: ["To use the default template, create a default push template in ", _jsx(_components.a, {
          href: "https://console.agora.io/",
          children: "Agora Console"
        }), " or ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/offline-push/offline-push-configuration",
          children: "call RESTful API"
        }), ". The template name is ", _jsx(_components.code, {
          children: "default"
        }), ". After setting, the default template is automatically used when pushing messages, and there is no need to enter the template name when creating messages."]
      }), _jsxs(_components.p, {
        children: ["Follow the steps below to create a default push template in ", _jsx(_components.a, {
          href: "https://console.agora.io/",
          children: "Agora Console"
        }), ":"]
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Log in to ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), " and click ", _jsx(_components.strong, {
              children: "Project Management"
            }), " in the left navigation bar."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the ", _jsx(_components.strong, {
              children: "Project Management"
            }), " page, click ", _jsx(_components.strong, {
              children: "Config"
            }), " in the ", _jsx(_components.strong, {
              children: "Action"
            }), " column for the project that has Chat enabled."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the ", _jsx(_components.strong, {
              children: "Edit Project"
            }), " page, in the ", _jsx(_components.strong, {
              children: "Features"
            }), " area, click ", _jsx(_components.strong, {
              children: "Enable / Config"
            }), " for Chat."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the project configuration page, select ", _jsx(_components.strong, {
              children: "Features"
            }), " > ", _jsx(_components.strong, {
              children: "Push Template"
            }), ", click ", _jsx(_components.strong, {
              children: "Add Push Template"
            }), ", and configure the fields in the pop-up dialog box, as shown in the following figure:"]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_add_template.png",
              alt: "push_add_template"
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Set the ", _jsx(_components.strong, {
              children: "Template Name"
            }), " to ", _jsx(_components.strong, {
              children: "default"
            }), ", then set the ", _jsx(_components.strong, {
              children: "Title"
            }), " and ", _jsx(_components.strong, {
              children: "Content"
            }), " parameters, and click ", _jsx(_components.strong, {
              children: "OK"
            }), "."]
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
                  children: "Type"
                }), _jsx(_components.th, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Description"
                }), _jsx(_components.th, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Required"
                })]
              })
            }), _jsxs(_components.tbody, {
              children: [_jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Template Name"
                  })
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "String"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["The push template name. The default template is ", _jsx(_components.strong, {
                    children: "default"
                  }), "."]
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Yes"
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Title"
                  })
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Array"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["The push title. Can be set in the following ways: Enter a fixed push title. Use built-in variables and enter ", _jsx(_components.code, {
                    children: "{$fromNickname}, {$msg}"
                  }), ". Set custom variables through the value array. The field format is ", _jsx(_components.code, {
                    children: "{0} {1} {2} ... {n}"
                  }), ". If the default template is used, the first two settings do not need to pass in this parameter when creating a message. The server automatically obtains it. The third setting method needs to be passed in through the extension field."]
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Yes"
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Content"
                  })
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Array"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["The push content. Can be set in the following ways: Enter fixed push content. Use variables and enter ", _jsx(_components.code, {
                    children: "{$fromNickname}, {$msg}"
                  }), ". Set custom variables through the value array. The field format is ", _jsx(_components.code, {
                    children: "{0} {1} {2} ... {n}"
                  }), ". If the default template is used, the first two settings do not require parameters to be passed in when creating a message. The server automatically obtains them. The third setting method needs to be passed in through the extension field."]
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Yes"
                })]
              })]
            })]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "use-message-extension-fields",
        children: "Use message extension fields"
      }), _jsxs(_components.p, {
        children: ["When creating a push message, you can set the ", _jsx(_components.code, {
          children: "em_push_title"
        }), " and ", _jsx(_components.code, {
          children: "em_push_content"
        }), " message extension fields to customize the push title and content, respectively."]
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
                children: "// This takes text messages as an example. The setting methods for message types such as images and files are the same."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "ChatMessage message "
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
                children: " ChatMessage."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "createSendMessage"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(ChatMessage.Type.TXT);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set custom push display."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "JSONObject extObject "
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
                children: " JSONObject"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    extObject . "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "put"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "( "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '" em_push_title "'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " , "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '" custom push title "'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ); "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Custom push message title. This field is a built-in field and the field name cannot be modified."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    extObject . "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "put"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "( "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '" em_push_content "'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " , "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '" custom push content "'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ); "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Custom push message content. This field is a built-in field and the field name cannot be modified."
              })]
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
                children: "catch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (JSONException "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "e"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    e."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "printStackTrace"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set the push extension to the message. This field is a built-in push extension field."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "message."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setAttribute"
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
                children: '"em_apns_ext"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", extObject);"
              })]
            })]
          })
        })
      }), _jsx(_components.p, {
        children: "The data structure of the custom display field is as follows:"
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '    "em_apns_ext"'
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
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '        "em_push_title"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "custom push title"'
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '        "em_push_content"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "custom push content"'
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
      }), _jsx(_components.h2, {
        id: "use-a-custom-push-template",
        children: "Use a custom push template"
      }), _jsx(_components.p, {
        children: "The steps to use a custom push template are as follows:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["If you use a custom push template, create it in ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), " or call ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/im/offline-push/offline-push-configuration#create-a-push-template",
              children: "RESTful API"
            }), ". For a description of the parameters in the ", _jsx(_components.strong, {
              children: "Add Push Template"
            }), " dialog box, see the section about using the default template. When using a custom template, regardless of how the ", _jsx(_components.strong, {
              children: "Title"
            }), " and ", _jsx(_components.strong, {
              children: "Content"
            }), " parameters are set, they must be passed in through the extension fields when creating a message."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "When creating a message, pass in the template name, push title, and push content by using the extension fields. The push title and content in the notification bar use the formats in the template, respectively."
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// The following takes text messages as an example. The setting methods for other types of messages are the same."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "ChatMessage message "
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
                    children: " ChatMessage."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "createSendMessage"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(ChatMessage.Type.TXT);"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "TextMessageBody txtBody "
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
                    children: " TextMessageBody"
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
                    children: '"message content"'
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Set the push notification recipient. For one-to-one chats, it is the recipient's user ID; for group chats, it is the group ID."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "message."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setTo"
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
                    children: '"receiver"'
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Use the push template."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "JSONObject pushObject "
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
                    children: " JSONObject"
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
                    children: "JSONArray titleArgs "
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
                    children: " JSONArray"
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
                    children: "JSONArray contentArgs "
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
                    children: " JSONArray"
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
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "        // Set the push template name."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        pushObject."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "put"
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
                    children: '"name"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"test6"'
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "        // Set the value array of the push title in the template. If the push title specified in the template is a placeholder, you can customize the title here; if the specified title is a fixed value, the title will be a fixed value when using this template."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        titleArgs."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "put"
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
                    children: '"test1"'
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "        //..."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        pushObject."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "put"
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
                    children: '"title_args"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", titleArgs);"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "        // Set the value array of the pushed content in the template. If the template content specified in the template is a placeholder, you can customize the content here; if the specified content is a fixed value, the content will be a fixed value when using the template."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        contentArgs."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "put"
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
                    children: '"$fromNickname"'
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
                    children: "        contentArgs."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "put"
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
                    children: '"$msg"'
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "        //..."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        pushObject."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "put"
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
                    children: '"content_args"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", contentArgs);"
                  })]
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
                    children: "catch"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " (JSONException "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: "e"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ") {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        e."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "printStackTrace"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "();"
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Add the push template to the message."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "message."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setAttribute"
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
                    children: '"em_push_template"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", pushObject);"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Set the message status callback."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "message."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setMessageStatusCallback"
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
                    children: "() {...});"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Send the message."
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
                    children: "sendMessage"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(message);"
                  })]
                })]
              })
            })
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "The JSON structure of the push template is as follows:"
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '    "em_push_template"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":{"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: '            "name"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"test6"'
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
                children: '            "title_args"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":["
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '                "test1"'
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            ],"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: '            "content_args"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":["
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '                "{$fromNickname}"'
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
                children: '                "{$msg}"'
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
                children: "    }"
              })
            })]
          })
        })
      }), _jsxs(_components.p, {
        children: ["The message receiver can call the ", _jsx(_components.code, {
          children: "setPushTemplate"
        }), " method to pass in the push template name and select the template to use."]
      }), _jsx(_components.p, {
        children: "If the sender uses a push template when sending a message, the content displayed in the push notification bar is based on the sender's push template."
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
                children: "pushManager"
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
                children: "setPushTemplate"
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
                children: '"Template Name"'
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
                children: "    }"
              })
            }), `
`, _jsx(_components.span, {
              className: "line"
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
                children: "});"
              })
            })]
          })
        })
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
        children: "You can configure the push title and content displayed in the notification bar in the following ways, with the configuration priority from low to high:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsx(_components.li, {
          children: "Configure the display attributes of push notifications;"
        }), `
`, _jsx(_components.li, {
          children: "Use the default push template;"
        }), `
`, _jsx(_components.li, {
          children: "Use message extension fields;"
        }), `
`, _jsx(_components.li, {
          children: "Use a custom push template."
        }), `
`]
      }), _jsx(_components.h2, {
        id: "configure-the-display-attributes-of-push-notifications-1",
        children: "Configure the display attributes of push notifications"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "updatePushDisplayName"
        }), " and ", _jsx(_components.code, {
          children: "updatePushDisplayStyle"
        }), " methods to set the nickname (", _jsx(_components.code, {
          children: "displayName"
        }), ") and notification display style (", _jsx(_components.code, {
          children: "pushDisplayStyle"
        }), "), which includes the push title and content in the notification bar."]
      }), _jsxs(_components.p, {
        children: ["This nickname indicates the nickname of the message sender that is displayed in the push notification bar of the recipient's client when a message from the user is pushed. The nickname can be different from the nickname in user attributes. However, Agora recommends that you use the same nickname for both. Therefore, if either nickname is updated, the other should be changed at the same time. To update the nickname in user attributes, see ", _jsx(_components.a, {
          href: "..//en/realtime-media/im/build/build-core-messaging/user-attributes#set-user-attributes",
          children: "Set user attributes"
        }), "."]
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
                children: "[AgoraChatClient.sharedClient.pushManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "updatePushDisplayName:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '@"displayName"'
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
                children: "("
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
                children: " aDisplayName, AgoraChatError "
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
                children: " aError) {"
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
                children: " (aError)"
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "        NSLog"
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
                children: '@"update push display name error: '
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "%@"
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
                children: ", aError.errorDescription);"
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
                children: "}];"
              })
            })]
          })
        })
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
                children: "[AgoraChatClient.sharedClient.pushManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "updatePushDisplayStyle:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "AgoraChatPushDisplayStyleSimpleBanner "
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
                children: " aError)"
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
                children: "    if"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(aError)"
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "        NSLog"
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
                children: '@"update display style error --- '
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "%@"
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
                children: ", aError.errorDescription);"
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
                children: "}];"
              })
            })]
          })
        })
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "getPushNotificationOptionsFromServerWithCompletion"
        }), " to get the display attributes for a push notification, as shown in the following code example:"]
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
                children: "[AgoraChatClient.sharedClient.pushManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "getPushNotificationOptionsFromServerWithCompletion:"
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
                children: "(AgoraChatPushOptions "
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
                children: "aOptions, AgoraChatError "
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
                children: "aError) {"
              })]
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
                children: " ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "!"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "aError) {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            // Get the nickname displayed in the push notification."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "            NSString"
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
                children: "displayName "
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
                children: " aOptions.displayName;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "            // Get the display style of the push notification."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            AgoraChatPushDisplayStyle displayStyle "
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
                children: " aOptions.displayStyle;"
              })]
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
                children: "    }];"
              })
            })]
          })
        })
      }), _jsxs(_components.p, {
        children: ["To display the message content in the notification bar, set the notification display style (", _jsx(_components.code, {
          children: "pushDisplayStyle"
        }), "). This parameter has the following two settings:"]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["(Default) ", _jsx(_components.code, {
            children: "AgoraChatPushDisplayStyleSimpleBanner"
          }), ": Regardless of whether ", _jsx(_components.code, {
            children: "displayName"
          }), ' is set, for any type of message push, the notification bar uses the default display settings, that is, the push title is "You have a new message" and the push content is "Please click to view".']
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "AgoraPushDisplayStyleMessageSummary"
          }), ": Displays the message content. The nickname you set is only effective when ", _jsx(_components.code, {
            children: "pushDisplayStyle"
          }), " is ", _jsx(_components.code, {
            children: "AgoraPushDisplayStyleMessageSummary"
          }), ", not ", _jsx(_components.code, {
            children: "AgoraChatPushDisplayStyleSimpleBanner"
          }), "."]
        }), `
`]
      }), _jsx(_components.p, {
        children: 'The following table uses a one-to-one chat text message as an example to introduce the settings of the display attributes. For group chats, the "Push nickname of the message sender" and "Chat user ID of the message sender" in the table below are displayed as "Group ID".'
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Parameter settings"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Push display"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Image"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsxs(_components.p, {
                children: [_jsx(_components.code, {
                  children: "pushDisplayStyle"
                }), ": (default) ", _jsx(_components.code, {
                  children: "AgoraChatPushDisplayStyleSimpleBanner"
                })]
              }), _jsxs(_components.p, {
                children: [_jsx(_components.code, {
                  children: "displayName"
                }), ": Set or not."]
              })]
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.p, {
                children: 'Push title: "You have a new message"'
              }), _jsx(_components.p, {
                children: 'Push content: "Please click to view"'
              })]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/im/push_displayattribute_1.png",
                alt: "push_displayattribute_1"
              })
            })]
          }), _jsxs(_components.tr, {
            children: [_jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsxs(_components.p, {
                children: [_jsx(_components.code, {
                  children: "pushDisplayStyle"
                }), ": ", _jsx(_components.code, {
                  children: "AgoraPushDisplayStyleMessageSummary"
                })]
              }), _jsxs(_components.p, {
                children: [_jsx(_components.code, {
                  children: "displayName"
                }), ": Set a specific value."]
              })]
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.p, {
                children: 'Push title: "You have a new message"'
              }), _jsx(_components.p, {
                children: 'Push content: "Push nickname of the message sender: message content"'
              })]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/im/push_displayattribute_2.png",
                alt: "push_displayattribute_2"
              })
            })]
          }), _jsxs(_components.tr, {
            children: [_jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsxs(_components.p, {
                children: [_jsx(_components.code, {
                  children: "pushDisplayStyle"
                }), ": ", _jsx(_components.code, {
                  children: "AgoraPushDisplayStyleMessageSummary"
                })]
              }), _jsxs(_components.p, {
                children: [_jsx(_components.code, {
                  children: "displayName"
                }), ": Not set."]
              })]
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.p, {
                children: 'Push title: "You have a new message"'
              }), _jsx(_components.p, {
                children: `Push content: "Message sender's Chat user ID: Message content"`
              })]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/im/push_displayattribute_3.png",
                alt: "push_displayattribute_3"
              })
            })]
          })]
        })]
      }), _jsx(_components.h2, {
        id: "use-the-default-push-template-1",
        children: "Use the default push template"
      }), _jsx(_components.p, {
        children: "The default push template is mainly used when the default configuration provided by the server does not meet your needs. It allows you to set the global push title and push content. For example, the default settings provided by the server are push titles and content in English. If you need to display push titles and content in another language, you can set the push template in the corresponding language."
      }), _jsxs(_components.p, {
        children: ["To use the default template, create a default push template in ", _jsx(_components.a, {
          href: "https://console.agora.io/",
          children: "Agora Console"
        }), " or ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/offline-push/offline-push-configuration",
          children: "call RESTful API"
        }), ". The template name is ", _jsx(_components.code, {
          children: "default"
        }), ". After setting, the default template is automatically used when pushing messages, and there is no need to enter the template name when creating messages."]
      }), _jsxs(_components.p, {
        children: ["Follow the steps below to create a default push template in ", _jsx(_components.a, {
          href: "https://console.agora.io/",
          children: "Agora Console"
        }), ":"]
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Log in to ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), " and click ", _jsx(_components.strong, {
              children: "Project Management"
            }), " in the left navigation bar."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the ", _jsx(_components.strong, {
              children: "Project Management"
            }), " page, click ", _jsx(_components.strong, {
              children: "Config"
            }), " in the ", _jsx(_components.strong, {
              children: "Action"
            }), " column for the project that has Chat enabled."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the ", _jsx(_components.strong, {
              children: "Edit Project"
            }), " page, in the ", _jsx(_components.strong, {
              children: "Features"
            }), " area, click ", _jsx(_components.strong, {
              children: "Enable / Config"
            }), " for Chat."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the project configuration page, select ", _jsx(_components.strong, {
              children: "Features"
            }), " > ", _jsx(_components.strong, {
              children: "Push Template"
            }), ", click ", _jsx(_components.strong, {
              children: "Add Push Template"
            }), ", and configure the fields in the pop-up dialog box, as shown in the following figure."]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_add_template.png",
              alt: "push_add_template"
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Set ", _jsx(_components.strong, {
              children: "Template Name"
            }), " to ", _jsx(_components.strong, {
              children: "default"
            }), ", then set the ", _jsx(_components.strong, {
              children: "Title"
            }), " and ", _jsx(_components.strong, {
              children: "Content"
            }), " parameters, and click ", _jsx(_components.strong, {
              children: "OK"
            }), "."]
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
                  children: "Type"
                }), _jsx(_components.th, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Description"
                }), _jsx(_components.th, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Required"
                })]
              })
            }), _jsxs(_components.tbody, {
              children: [_jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Template Name"
                  })
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "String"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["The push template name. The default template is ", _jsx(_components.strong, {
                    children: "default"
                  }), "."]
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Yes"
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Title"
                  })
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Array"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["The push title. Can be set in the following ways: Enter a fixed push title. Use built-in variables and enter ", _jsx(_components.code, {
                    children: "{$fromNickname}, {$msg}"
                  }), ". Set custom variables through the value array. The field format is ", _jsx(_components.code, {
                    children: "{0} {1} {2} ... {n}"
                  }), ". If the default template is used, the first two settings do not need to pass in this parameter when creating a message. The server automatically obtains it. The third setting method needs to be passed in through the extension field."]
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Yes"
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Content"
                  })
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Array"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["The push content. Can be set in the following ways: Enter fixed push content. Use variables and enter ", _jsx(_components.code, {
                    children: "{$fromNickname}, {$msg}"
                  }), ". Set custom variables through the value array. The field format is ", _jsx(_components.code, {
                    children: "{0} {1} {2} ... {n}"
                  }), ". If the default template is used, the first two settings do not require parameters to be passed in when creating a message. The server automatically obtains them. The third setting method needs to be passed in through the extension field."]
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Yes"
                })]
              })]
            })]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "use-message-extension-fields-1",
        children: "Use message extension fields"
      }), _jsx(_components.p, {
        children: `When creating a push message, you can set the message extension fields to customize the push content to be displayed.
For the display attributes of push notifications, that is, the display attributes and display style of push notifications, in addition to calling specific methods to set them, you can also set them through custom fields. If you use both methods at the same time, the custom fields have a higher priority.`
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
                children: "AgoraChatTextMessageBody "
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
                children: "body "
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
                children: " [[AgoraChatTextMessageBody "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "alloc"
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
                children: "initWithText:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '@"test"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "];"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    AgoraChatMessage "
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
                children: "message "
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
                children: " [[AgoraChatMessage "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "alloc"
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
                children: "initWithConversationID:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "conversationId "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "from:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "AgoraChatClient.sharedClient.currentUsername "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "to:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "conversationId "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "body:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "body "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "ext:nil"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "];"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    message.ext "
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
                children: " @{"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '@"em_apns_ext"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":@{"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '@"em_push_content"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '@"custom push content"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ","
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '@"em_push_title"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '@"custom push title"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "}};"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    message.chatType "
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
                children: " AgoraChatTypeChat;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    [AgoraChatClient.sharedClient.chatManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "sendMessage:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "message "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "progress:nil"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " completion:nil"
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
      }), _jsx(_components.p, {
        children: "The structure of a custom display field is as follows:"
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
                children: '    "em_apns_ext"'
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
                children: '       "em_push_title"'
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
                children: '"custom push title"'
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
                children: '       "em_push_content"'
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
                children: '"custom push content"'
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
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Parameters"
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
                children: "em_apns_ext"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The message extension fields."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "em_push_title"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Customize the push message title. This field name is fixed and cannot be modified."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "em_push_content"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Customize the push message content. This field name is fixed and cannot be modified."
            })]
          })]
        })]
      }), _jsx(_components.h2, {
        id: "use-a-custom-push-template-1",
        children: "Use a custom push template"
      }), _jsx(_components.p, {
        children: "The steps to use a custom push template are as follows:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["If you use a custom push template, create it in ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), " or call ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/im/offline-push/offline-push-configuration#create-a-push-template",
              children: "RESTful API"
            }), ". For a description of the parameters in the ", _jsx(_components.strong, {
              children: "Add Push Template"
            }), " dialog box, see the section about using the default template. When using a custom template, regardless of how the ", _jsx(_components.strong, {
              children: "Title"
            }), " and ", _jsx(_components.strong, {
              children: "Content"
            }), " parameters are set, they must be passed in through the extension fields when creating a message."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "When creating a message, pass in the template name, push title, and push content by using the extension fields. The push title and content in the notification bar use the formats in the template, respectively."
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// The following takes text messages as an example. The setting methods for other types of messages are the same."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "AgoraChatTextMessageBody "
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
                    children: "body "
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
                    children: " [[AgoraChatTextMessageBody "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "alloc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "]initWithText:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"test"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "];"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "AgoraChatMessage "
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
                    children: "message "
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
                    children: " [[AgoraChatMessage "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "alloc"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "]initWithConversationID:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"conversationId"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " from:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"currentUsername"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " to:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"conversationId"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " body:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "body "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "ext:nil"
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
                    children: "       // Set the push template created on the Agora console as the default push template."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "       NSDictionary"
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
                    children: "pushObject "
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
                    children: " @{"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '           @"name"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"templateName"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Set the push template name."
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '           @"title_args"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ":@ [ "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"titleValue1"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " ] , "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Set the push title variable. If the push title specified in the template is a placeholder, you can customize the title here; if the specified title is a fixed value, the title will be a fixed value when using this template."
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '           @"content_args"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ":@ [ "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"contentValue1"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " ] "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Set the push content variable. If the push content specified in the template is placeholder data, you can customize the push content here; if the specified push content is a fixed value, the push content will be a fixed value when using this template."
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "       };"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "       message.ext "
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
                    children: " @{"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '           @"em_push_template"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ":pushObject,"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "       };"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "       message.chatType "
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
                    children: " AgoraChatTypeChat;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "[[AgoraChatClient "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "sharedClient"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "].chatManager "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "sendMessage:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "message "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "progress:nil"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " completion:nil"
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
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "The JSON structure of the push template is as follows:"
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"em_push_template"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":{"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: '        "name"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"test6"'
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
                children: '        "title_args"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":["
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '            "test1"'
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        ],"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: '        "content_args"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":["
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '            "{$fromNickname}"'
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
                children: '            "{$msg}"'
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        ]"
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
      }), _jsxs(_components.p, {
        children: ["The message receiver can call ", _jsx(_components.code, {
          children: "setPushTemplate"
        }), " to pass in the push template name and select the template to use."]
      }), _jsx(_components.p, {
        children: "If the sender uses a push template when sending a message, the content displayed in the push notification bar is based on the sender's push template."
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
                children: "[AgoraChatClient.sharedClient.pushManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "setPushTemplate:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '@"templateName"'
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
                children: " _Nullable aError) {"
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
        children: "You can configure the push title and content displayed in the notification bar by using push templates."
      }), _jsx(_components.h3, {
        id: "set-the-push-template",
        children: "Set the push template"
      }), _jsx(_components.p, {
        children: "The default push template is mainly used when the default configuration provided by the server does not meet your needs. It allows you to set the global push title and push content. For example, the default settings provided by the server are push titles and content in English. If you need to use push titles and content in another language, you can set the push template in the corresponding language."
      }), _jsx(_components.h4, {
        id: "use-the-default-push-template-2",
        children: "Use the default push template"
      }), _jsxs(_components.p, {
        children: ["To use the default template, create a default push template in ", _jsx(_components.a, {
          href: "https://console.agora.io/",
          children: "Agora Console"
        }), " or ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/offline-push/offline-push-configuration",
          children: "call RESTful API"
        }), ". The template name is ", _jsx(_components.code, {
          children: "default"
        }), ". After setting, the default template is automatically used when pushing messages. You do not need to enter the template name when creating messages."]
      }), _jsxs(_components.p, {
        children: ["Follow the steps below to create a default push template in ", _jsx(_components.a, {
          href: "https://console.agora.io/",
          children: "Agora Console"
        }), ":"]
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Log in to ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), " and click ", _jsx(_components.strong, {
              children: "Project Management"
            }), " in the left navigation bar."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the ", _jsx(_components.strong, {
              children: "Project Management"
            }), " page, click ", _jsx(_components.strong, {
              children: "Config"
            }), " in the ", _jsx(_components.strong, {
              children: "Action"
            }), " column for the project that has Chat enabled."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the ", _jsx(_components.strong, {
              children: "Edit Project"
            }), " page, in the ", _jsx(_components.strong, {
              children: "Features"
            }), " area, click ", _jsx(_components.strong, {
              children: "Enable / Config"
            }), " for Chat."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the project configuration page, select ", _jsx(_components.strong, {
              children: "Features"
            }), " > ", _jsx(_components.strong, {
              children: "Push Template"
            }), " , click ", _jsx(_components.strong, {
              children: "Add Push Template"
            }), " , and configure the fields in the pop-up dialog box, as shown in the following figure:"]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_add_template.png",
              alt: "push_add_template"
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Set ", _jsx(_components.strong, {
              children: "Template Name"
            }), " to ", _jsx(_components.strong, {
              children: "default"
            }), ", then set the ", _jsx(_components.strong, {
              children: "Title"
            }), " and ", _jsx(_components.strong, {
              children: "Content"
            }), " parameters, and click ", _jsx(_components.strong, {
              children: "OK"
            }), "."]
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
                  children: "Type"
                }), _jsx(_components.th, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Description"
                }), _jsx(_components.th, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Required"
                })]
              })
            }), _jsxs(_components.tbody, {
              children: [_jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Template Name"
                  })
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "String"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["Push template name. The default template is ", _jsx(_components.strong, {
                    children: "default"
                  }), "."]
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Yes"
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Title"
                  })
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Array"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["Push title. Can be set in the following ways: Enter a fixed push title. Use built-in variables and enter ", _jsx(_components.code, {
                    children: "{$fromNickname}, {$msg}"
                  }), ". Set custom variables through the value array. The field format is ", _jsx(_components.code, {
                    children: "{0} {1} {2} ... {n}"
                  }), ". If the default template is used, the first two settings do not need to pass in this parameter when creating a message; the server automatically obtains it. The third setting method needs to be passed in through the extension field."]
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Yes"
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Content"
                  })
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Array"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["Push content. Can be set in the following ways: Enter fixed push content. Use variables and enter ", _jsx(_components.code, {
                    children: "{$fromNickname}, {$msg}"
                  }), ". Set custom variables through the value array. The field format is ", _jsx(_components.code, {
                    children: "{0} {1} {2} ... {n}"
                  }), ". If the default template is used, the first two settings do not require parameters to be passed in when creating a message; the server automatically obtains them. The third setting method needs to be passed in through the extension field."]
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Yes"
                })]
              })]
            })]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h4, {
        id: "use-a-custom-push-template-2",
        children: "Use a custom push template"
      }), _jsx(_components.p, {
        children: "The steps to use a custom push template are as follows:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["If you use a custom push template, create a custom push template in ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), " or ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/im/offline-push/offline-push-configuration#create-a-push-template",
              children: "Call RESTful API"
            }), ". For a description of the parameters in the ", _jsx(_components.strong, {
              children: "Add Push Template"
            }), " dialog box, see ", _jsx(_components.a, {
              href: "#use-the-default-push-template",
              children: "Use the default push template"
            }), ". When using a custom template, regardless of how the ", _jsx(_components.strong, {
              children: "Title"
            }), " and ", _jsx(_components.strong, {
              children: "Content"
            }), " parameters are set, they must be passed in through the extension fields when creating a message."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "When creating a message, pass in the template name, push title, and push content by using the extension fields. The push title and content in the notification bar use the formats in the template, respectively:"
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
              icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// The following takes text messages as an example. The setting methods for other types of messages are the same."
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line"
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " sendTextMsg"
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
                    children: " () "
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "  const"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " options"
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
                    children: " AgoraChat"
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
                    children: "CreateTextMsgParameters"
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
                    children: " {"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    chatType: chatType,"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    type: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"txt"'
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
                    children: "    to: targetUserId,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    msg: msgContent,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    ext: {"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "      em_push_template: {"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        name: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '" templateName "'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Set the push template name."
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        title_args: ["
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '" titleValue1 "'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "], "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Set the value array of the push title in the template. If the push title specified in the template is placeholder data, you can customize the title here; if the specified title is a fixed value, the title will be a fixed value when using this template."
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        content_args: ["
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '" contentValue1 "'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "], "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Set the value array of the pushed content in the template. If the template content specified in the template is placeholder data, you can customize the content here; if the specified content is a fixed value, the content will be a fixed value when the template is used."
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "      },"
                  })
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
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  };"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "  const"
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
                    children: " AgoraChat.message."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "create"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(options);"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  chatClient."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "send"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(msg);"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "};"
                  })
                })]
              })
            })
          }), `
`, _jsx(_components.p, {
            children: "The JSON structure of the push template is as follows:"
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
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"em_push_template"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ":{"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: '        "name"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"test6"'
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
                    children: '        "title_args"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ":["
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '            "test1"'
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        ],"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: '        "content_args"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ":["
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#B31D28",
                      "--shiki-light-font-style": "italic",
                      "--shiki-dark": "#FDAEB7",
                      "--shiki-dark-font-style": "italic"
                    },
                    children: "            `$"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "{"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#B31D28",
                      "--shiki-light-font-style": "italic",
                      "--shiki-dark": "#FDAEB7",
                      "--shiki-dark-font-style": "italic"
                    },
                    children: "fromNickname"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "}"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#B31D28",
                      "--shiki-light-font-style": "italic",
                      "--shiki-dark": "#FDAEB7",
                      "--shiki-dark-font-style": "italic"
                    },
                    children: "`"
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
                      "--shiki-light": "#B31D28",
                      "--shiki-light-font-style": "italic",
                      "--shiki-dark": "#FDAEB7",
                      "--shiki-dark-font-style": "italic"
                    },
                    children: "            `$"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "{"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#B31D28",
                      "--shiki-light-font-style": "italic",
                      "--shiki-dark": "#FDAEB7",
                      "--shiki-dark-font-style": "italic"
                    },
                    children: "msg"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "}"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#B31D28",
                      "--shiki-light-font-style": "italic",
                      "--shiki-dark": "#FDAEB7",
                      "--shiki-dark-font-style": "italic"
                    },
                    children: "`"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        ]"
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
        children: "You can configure the push title and content displayed in the notification bar in the following ways, with the configuration priority from low to high:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsx(_components.li, {
          children: "Configure the display attributes of push notifications;"
        }), `
`, _jsx(_components.li, {
          children: "Use the default push template;"
        }), `
`, _jsx(_components.li, {
          children: "Use message extension fields;"
        }), `
`, _jsx(_components.li, {
          children: "Use a custom push template."
        }), `
`]
      }), _jsx(_components.h2, {
        id: "configure-the-display-attributes-of-push-notifications-2",
        children: "Configure the display attributes of push notifications"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "updatePushNickname"
        }), " and ", _jsx(_components.code, {
          children: "updatePushDisplayStyle"
        }), " methods to set the nickname (", _jsx(_components.code, {
          children: "nickname"
        }), ") and notification display style (", _jsx(_components.code, {
          children: "DisplayStyle"
        }), "), which includes the push title and content in the notification bar."]
      }), _jsxs(_components.p, {
        children: ["This nickname indicates the nickname of the message sender that is displayed in the push notification bar of the recipient's client when a message from the user is pushed. The nickname can be different from the nickname in user attributes. However, Agora recommends that you use the same nickname for both. Therefore, if either nickname is updated, the other should be changed at the same time. To update the nickname in user attributes, see ", _jsx(_components.a, {
          href: "..//en/realtime-media/im/build/build-core-messaging/user-attributes#set-user-attributes",
          children: "Set user attributes"
        }), "."]
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
                children: "  ChatClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".getInstance.pushManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "updatePushNickname"
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
                children: "'nickname'"
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
                children: " (e) {}"
              })]
            })]
          })
        })
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
                children: "  ChatClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".getInstance.pushManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "updatePushDisplayStyle"
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
                children: "DisplayStyle"
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
                children: "Simple"
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
                children: " (e) {}"
              })]
            })]
          })
        })
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "getPushConfigsFromServer"
        }), " to get the display attributes for push notifications, as shown in the following example:"]
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
                children: "  ChatPushConfigs"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " configs "
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatClient"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".getInstance.pushManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "fetchPushConfigsFromServer"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Get the nickname displayed in push notifications."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "  String"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " pushNickname "
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
                children: " configs.displayName;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Get the display style of the push notification."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "  DisplayStyle"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " pushDisplayStyle "
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
                children: " configs.displayStyle;"
              })]
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
                children: " (e) {}"
              })]
            })]
          })
        })
      }), _jsxs(_components.p, {
        children: ["To display the message content in the notification bar, set the notification display style (", _jsx(_components.code, {
          children: "DisplayStyle"
        }), "). This parameter has the following two settings:"]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["(Default) ", _jsx(_components.code, {
            children: "Simple"
          }), ": Regardless of whether ", _jsx(_components.code, {
            children: "nickname"
          }), ' is set, for any type of message pushed, the notification bar uses the default display setting, that is, the push title is "You have a new message" and the push content is "Please click to view".']
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "Summary"
          }), ": Displays the message content. The nickname you set only takes effect when ", _jsx(_components.code, {
            children: "DisplayStyle"
          }), " is set ", _jsx(_components.code, {
            children: "Summary"
          }), ", not ", _jsx(_components.code, {
            children: "Simple"
          }), "."]
        }), `
`]
      }), _jsx(_components.p, {
        children: "The following table uses a one-to-one chat message as an example to introduce the settings of the display attributes."
      }), _jsx(_components.p, {
        children: 'For group chats, "Push nickname of message sender" and "Chat user ID of message sender" in the table below are displayed as "Group ID".'
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Parameter settings"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Push display"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Image"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "DisplayStyle"
              }), ": (default) ", _jsx(_components.code, {
                children: "Simple"
              }), "  ", _jsx(_components.code, {
                children: "nickname"
              }), ": Set or not set"]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: 'Push title: "You have a new message"  Push content: "Please click to view"'
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/im/push_displayattribute_1.png",
                alt: "push_displayattribute_1"
              })
            })]
          }), _jsxs(_components.tr, {
            children: [_jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "DisplayStyle"
              }), ": ", _jsx(_components.code, {
                children: "Summary"
              }), "  ", _jsx(_components.code, {
                children: "nickname"
              }), ": Set specific value"]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: 'Push title: "You have a new message"  Push content: "Push nickname of the message sender: message content"'
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/im/push_displayattribute_2.png",
                alt: "push_displayattribute_2"
              })
            })]
          }), _jsxs(_components.tr, {
            children: [_jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "DisplayStyle"
              }), ": ", _jsx(_components.code, {
                children: "Summary"
              }), "  ", _jsx(_components.code, {
                children: "nickname"
              }), ": Not set"]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Push title: “You have a new message”  Push content: “Message sender's Chat user ID: message content”"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/im/push_displayattribute_3.png",
                alt: "push_displayattribute_3"
              })
            })]
          })]
        })]
      }), _jsx(_components.h2, {
        id: "use-the-default-push-template-3",
        children: "Use the default push template"
      }), _jsx(_components.p, {
        children: "The default push template is mainly used when the default configuration provided by the server does not meet your needs. It allows you to set the global push title and push content. For example, the default settings provided by the server are push titles and content in English. If you need to use push titles and content in another language, you can set the push template in the corresponding language."
      }), _jsxs(_components.p, {
        children: ["To use the default template, create a default push template in ", _jsx(_components.a, {
          href: "https://console.agora.io/",
          children: "Agora Console"
        }), " or ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/offline-push/offline-push-configuration",
          children: "call RESTful API"
        }), ". The template name is ", _jsx(_components.code, {
          children: "default"
        }), ". After setting, the default template is automatically used when pushing messages, and there is no need to enter the template name when creating messages."]
      }), _jsxs(_components.p, {
        children: ["Follow the steps below to create a default push template in ", _jsx(_components.a, {
          href: "https://console.agora.io/",
          children: "Agora Console"
        }), ":"]
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Log in to ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), " and click ", _jsx(_components.strong, {
              children: "Project Management"
            }), " in the left navigation bar."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the ", _jsx(_components.strong, {
              children: "Project Management"
            }), " page, click ", _jsx(_components.strong, {
              children: "Config"
            }), " in the ", _jsx(_components.strong, {
              children: "Action"
            }), " column for the project that has Chat enabled."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the ", _jsx(_components.strong, {
              children: "Edit Project"
            }), " page, in the ", _jsx(_components.strong, {
              children: "Features"
            }), " area, click ", _jsx(_components.strong, {
              children: "Enable / Config"
            }), " for Chat."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the project configuration page, select ", _jsx(_components.strong, {
              children: "Features"
            }), " > ", _jsx(_components.strong, {
              children: "Push Template"
            }), ", click ", _jsx(_components.strong, {
              children: "Add Push Template"
            }), ", and configure the fields in the pop-up dialog box, as shown in the following figure:"]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_add_template.png",
              alt: "push_add_template"
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Set the ", _jsx(_components.strong, {
              children: "Template Name"
            }), " to ", _jsx(_components.strong, {
              children: "default"
            }), ", then set the ", _jsx(_components.strong, {
              children: "Title"
            }), " and ", _jsx(_components.strong, {
              children: "Content"
            }), " parameters and click ", _jsx(_components.strong, {
              children: "OK"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsxs(_components.table, {
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
              children: "Type"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Required"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.strong, {
                children: "Template Name"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The push template name. The default template is ", _jsx(_components.strong, {
                children: "default"
              }), "."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Yes"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.strong, {
                children: "Title"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Array"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The push title. Can be set in the following ways: Enter a fixed push title. Use built-in variables and enter ", _jsx(_components.code, {
                children: "{$fromNickname}, {$msg}"
              }), ". Set custom variables through the value array. The field format is ", _jsx(_components.code, {
                children: "{0} {1} {2} ... {n}"
              }), ". If the default template is used, the first two settings do not need to pass in this parameter when creating a message. The server automatically obtains it. The third setting method needs to be passed in through the extension field."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Yes"
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.strong, {
                children: "Content"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Array"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The push content. Can be set in the following ways: Enter fixed push content. Use variables and enter ", _jsx(_components.code, {
                children: "{$fromNickname}, {$msg}"
              }), ". Set custom variables through the value array. The field format is ", _jsx(_components.code, {
                children: "{0} {1} {2} ... {n}"
              }), ". If the default template is used, the first two settings do not require parameters to be passed in when creating a message. The server automatically obtains them. The third setting method needs to be passed in through the extension field."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Yes"
            })]
          })]
        })]
      }), _jsx(_components.h2, {
        id: "use-message-extension-fields-2",
        children: "Use message extension fields"
      }), _jsxs(_components.p, {
        children: ["When creating a push message, you can set the ", _jsx(_components.code, {
          children: "em_push_title"
        }), " and ", _jsx(_components.code, {
          children: "em_push_content"
        }), " message extension fields to customize the push title and content, respectively."]
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "ChatMessage"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " msg "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " ChatMessage"
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
                children: "createTxtSendMessage"
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
                children: "  targetId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " 'receiveId'"
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
                children: "  content"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " 'content'"
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
                children: ");"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "msg.attributes "
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
                children: " {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Set the push extension to the message. This field is a built-in push extension field."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "  'em_push_ext'"
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
                children: " {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    // Customize the push message title. This field is a built-in field and the field name cannot be modified."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "    'em_push_title'"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " 'custom push title'"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    // Customize push message content. This field is a built-in field and the field name cannot be modified."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "    'em_push_content'"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " 'custom push content'"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "};"
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
                children: "sendMessage"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(msg);"
              })]
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
                children: " (e) {}"
              })]
            })]
          })
        })
      }), _jsx(_components.p, {
        children: "The data structure of the custom display field is as follows:"
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '    "em_apns_ext"'
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
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '        "em_push_title"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "custom push title"'
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '        "em_push_content"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "custom push content"'
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
      }), _jsx(_components.h2, {
        id: "use-a-custom-push-template-3",
        children: "Use a custom push template"
      }), _jsx(_components.p, {
        children: "The steps to use a custom push template are as follows:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["If you use a custom push template, create it in ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), " or call ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/im/offline-push/offline-push-configuration#create-a-push-template",
              children: "RESTful API"
            }), ". For a description of the parameters in the ", _jsx(_components.strong, {
              children: "Add Push Template"
            }), " dialog box, see the section about using the default template. When using a custom template, regardless of how the ", _jsx(_components.strong, {
              children: "Title"
            }), " and ", _jsx(_components.strong, {
              children: "Content"
            }), " parameters are set, they must be passed in through the extension fields when creating a message."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "When creating a message, pass in the template name, push title, and push content by using the extension fields. The push title and content in the notification bar use the formats in the template, respectively."
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
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "ChatMessage"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " msg "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " ChatMessage"
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
                    children: "createTxtSendMessage"
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
                    children: "  targetId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " 'receiveId'"
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
                    children: "  content"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " 'content'"
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
                    children: ");"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "msg.attributes "
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
                    children: " {"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "  // Add the push template to the message."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "  'em_push_template'"
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
                    children: " {"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // Set the push template name."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "    'name'"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " 'templateName'"
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // Set the push title variable. If the push title specified in the template is a placeholder, you can customize the title here; if the specified title is a fixed value, the title will be a fixed value when using this template."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "    'title_args'"
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
                    children: " ["
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'titleValue1'"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "],"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // Set the push content variable. If the push content specified in the template is a placeholder, you can customize the push content here; if the specified push content is a fixed value, the push content will be a fixed value when using this template."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "    'content_args'"
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
                    children: " ["
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'contentValue1'"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "],"
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "};"
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
                    children: "sendMessage"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(msg);"
                  })]
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
                    children: " (e) {}"
                  })]
                })]
              })
            })
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "The JSON structure of the push template is as follows:"
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"em_push_template"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":{"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: '        "name"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"templateName"'
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
                children: '        "title_args"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":["
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '            "titleValue1"'
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        ],"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: '        "content_args"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":["
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '            "{$contentValue1}"'
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
                children: "        ]"
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
      }), _jsxs(_components.p, {
        children: ["The message receiver can call the ", _jsx(_components.code, {
          children: "setPushTemplate"
        }), " method to pass in the push template name and select the template to use."]
      }), _jsx(_components.p, {
        children: "If the sender uses a push template when sending a message, the content displayed in the push notification bar is based on the sender's push template."
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
                children: ".getInstance.pushManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setPushTemplate"
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
                children: "'Template Name'"
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
                children: " (e) {}"
              })]
            })]
          })
        })
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
        children: "You can configure the push title and content displayed in the notification bar in the following ways, with the configuration priority from low to high:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsx(_components.li, {
          children: "Configure the display attributes of push notifications;"
        }), `
`, _jsx(_components.li, {
          children: "Use the default push template;"
        }), `
`, _jsx(_components.li, {
          children: "Use message extension fields;"
        }), `
`, _jsx(_components.li, {
          children: "Use a custom push template."
        }), `
`]
      }), _jsx(_components.h2, {
        id: "configure-the-display-attributes-of-push-notifications-3",
        children: "Configure the display attributes of push notifications"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "updatePushNickname"
        }), " and ", _jsx(_components.code, {
          children: "updatePushDisplayStyle"
        }), " to set the nickname (", _jsx(_components.code, {
          children: "nickname"
        }), ") and notification display style (", _jsx(_components.code, {
          children: "displayStyle"
        }), "), which includes the push title and content in the notification bar."]
      }), _jsxs(_components.p, {
        children: ["This nickname indicates the nickname of the message sender that is displayed in the push notification bar of the recipient's client when a message from the user is pushed. The nickname can be different from the nickname in user attributes. However, Agora recommends that you use the same nickname for both. Therefore, if either nickname is updated, the other should be changed at the same time. To update the nickname in user attributes, see ", _jsx(_components.a, {
          href: "..//en/realtime-media/im/build/build-core-messaging/user-attributes#set-user-attributes",
          children: "Set user attributes"
        }), "."]
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
                children: "  .pushManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "updatePushNickname"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(nickname)"
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
                children: "(() "
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
                children: '"Succeeded in updating the nickname."'
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
                children: "reason"
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
                children: '"Failed to update the nickname."'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", reason);"
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
                children: "  .pushManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "updatePushDisplayStyle"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(displayStyle)"
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
                children: "(() "
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
                children: '"Succeeded in updating the display style."'
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
                children: "reason"
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
                children: '"Failed to update the display style."'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", reason);"
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
        children: ["You can call ", _jsx(_components.code, {
          children: "fetchPushOptionFromServer"
        }), " to retrieve the display attributes in a push notification, as shown in the following example:"]
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
                children: "  .pushManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "fetchPushOptionFromServer"
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
                children: "(() "
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
                children: '"Succeeded in getting the push configurations."'
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
                children: "reason"
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
                children: '"Failed to get the push configuration."'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", reason);"
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
        children: ["To display the message content in the notification bar, set the notification display style (", _jsx(_components.code, {
          children: "displayStyle"
        }), "). This parameter has the following two settings:"]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["(Default) ", _jsx(_components.code, {
            children: "Simple"
          }), ": Regardless of whether ", _jsx(_components.code, {
            children: "nickname"
          }), ' is set, for any type of message pushed, the notification bar uses the default display settings, that is, the push title is "You have a new message" and the push content is "Please click to view".']
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "Summary"
          }), ": Displays the message content. The nickname you set only takes effect when ", _jsx(_components.code, {
            children: "displayStyle"
          }), " is ", _jsx(_components.code, {
            children: "Summary"
          }), ", not ", _jsx(_components.code, {
            children: "Simple"
          }), "."]
        }), `
`]
      }), _jsx(_components.p, {
        children: `The following table uses a one-to-one chat text message as an example to introduce the settings of the display attributes.
For group chats, "Push nickname of message sender" and "Chat user ID of message sender" in the table below are displayed as "Group ID".`
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Parameter settings"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Push display"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Image"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "displayStyle"
              }), ": (default) ", _jsx(_components.code, {
                children: "Simple"
              }), " ", _jsx(_components.code, {
                children: "nickname"
              }), ": Set or not set."]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: 'Push title: "You have a new message"  Push content: "Please click to view"'
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/im/push_displayattribute_1.png",
                alt: "push_displayattribute_1"
              })
            })]
          }), _jsxs(_components.tr, {
            children: [_jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "displayStyle"
              }), ": ", _jsx(_components.code, {
                children: "Summary"
              }), "  ", _jsx(_components.code, {
                children: "nickname"
              }), ": Set a specific value"]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: 'Push title: "You have a new message"  Push content: "Push nickname of the message sender: message content"'
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/im/push_displayattribute_2.png",
                alt: "push_displayattribute_2"
              })
            })]
          }), _jsxs(_components.tr, {
            children: [_jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "displayStyle"
              }), ": ", _jsx(_components.code, {
                children: "Summary"
              }), "  ", _jsx(_components.code, {
                children: "nickname"
              }), ": Not set"]
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Push title: “You have a new message”  Push content: “Chat user ID of the message sender: message content”"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/im/push_displayattribute_3.png",
                alt: "push_displayattribute_3"
              })
            })]
          })]
        })]
      }), _jsx(_components.h2, {
        id: "use-the-default-push-template-4",
        children: "Use the default push template"
      }), _jsx(_components.p, {
        children: "The default push template is mainly used when the default configuration provided by the server does not meet your needs. It allows you to set the global push title and push content. For example, the default settings provided by the server are push titles and content in English. If you need to use push titles and content in another language, you can set the push template in the corresponding language."
      }), _jsxs(_components.p, {
        children: ["To use the default template, create a default push template in ", _jsx(_components.a, {
          href: "https://console.agora.io/",
          children: "Agora Console"
        }), " or ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/offline-push/offline-push-configuration",
          children: "call RESTful API"
        }), ". The template name is ", _jsx(_components.code, {
          children: "default"
        }), ". After setting, the default template is automatically used when pushing messages, and there is no need to enter the template name when creating messages."]
      }), _jsxs(_components.p, {
        children: ["Follow the steps below to create a default push template in ", _jsx(_components.a, {
          href: "https://console.agora.io/",
          children: "Agora Console"
        }), ":"]
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Log in to ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), " and click ", _jsx(_components.strong, {
              children: "Project Management"
            }), " in the left navigation bar."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the ", _jsx(_components.strong, {
              children: "Project Management"
            }), " page, click ", _jsx(_components.strong, {
              children: "Config"
            }), " in the ", _jsx(_components.strong, {
              children: "Action"
            }), " column for the project that has Chat enabled."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the ", _jsx(_components.strong, {
              children: "Edit Project"
            }), " page, in the ", _jsx(_components.strong, {
              children: "Features"
            }), " area, click ", _jsx(_components.strong, {
              children: "Enable / Config"
            }), " for Chat."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the project configuration page, select ", _jsx(_components.strong, {
              children: "Features"
            }), " > ", _jsx(_components.strong, {
              children: "Push Template"
            }), ", click ", _jsx(_components.strong, {
              children: "Add Push Template"
            }), ", and configure the fields in the pop-up dialog box, as shown in the following figure:"]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_add_template.png",
              alt: "push_add_template"
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Set the ", _jsx(_components.strong, {
              children: "Template Name"
            }), " to ", _jsx(_components.strong, {
              children: "default"
            }), ", then set the ", _jsx(_components.strong, {
              children: "Title"
            }), " and ", _jsx(_components.strong, {
              children: "Content"
            }), " parameters, and click ", _jsx(_components.strong, {
              children: "OK"
            }), "."]
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
                  children: "Type"
                }), _jsx(_components.th, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Description"
                }), _jsx(_components.th, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Required"
                })]
              })
            }), _jsxs(_components.tbody, {
              children: [_jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Template Name"
                  })
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "String"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["The push template name. The default template is ", _jsx(_components.strong, {
                    children: "default"
                  }), "."]
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Yes"
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Title"
                  })
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Array"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["The push title. Can be set in the following ways: Enter a fixed push title. Use built-in variables and enter ", _jsx(_components.code, {
                    children: "{$fromNickname}, {$msg}"
                  }), ". Set custom variables through the value array. The field format is ", _jsx(_components.code, {
                    children: "{0} {1} {2} ... {n}"
                  }), ". If the default template is used, the first two settings do not need to pass in this parameter when creating a message. The server automatically obtains it. The third setting method needs to be passed in through the extension field."]
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Yes"
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Content"
                  })
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Array"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["The push content. Can be set in the following ways: Enter fixed push content. Use variables and enter ", _jsx(_components.code, {
                    children: "{$fromNickname}, {$msg}"
                  }), ". Set custom variables through the value array. The field format is ", _jsx(_components.code, {
                    children: "{0} {1} {2} ... {n}"
                  }), ". If the default template is used, the first two settings do not require parameters to be passed in when creating a message. The server automatically obtains them. The third setting method needs to be passed in through the extension field."]
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Yes"
                })]
              })]
            })]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "use-message-extension-fields-3",
        children: "Use message extension fields"
      }), _jsxs(_components.p, {
        children: ["When creating a push message, you can set the ", _jsx(_components.code, {
          children: "em_push_title"
        }), " and ", _jsx(_components.code, {
          children: "em_push_content"
        }), " message extension fields to customize the push title and content, respectively."]
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "msg.attributes "
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
                children: " {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Message extension field. This field is a built-in field and the field name cannot be modified."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  em_apns_ext: {"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    em_push_title: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '" custom push title "'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " , "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Custom push message title. This field is a built-in field and the field name cannot be modified."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    em_push_content: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '" custom push content "'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " , "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Custom push message content. This field is a built-in field and the field name cannot be modified."
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
                children: "};"
              })
            })]
          })
        })
      }), _jsx(_components.p, {
        children: "The data structure of the custom display field is as follows:"
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '    "em_apns_ext"'
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
                children: " {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '        "em_push_title"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "custom push title"'
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '        "em_push_content"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "custom push content"'
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
      }), _jsx(_components.h2, {
        id: "use-a-custom-push-template-4",
        children: "Use a custom push template"
      }), _jsx(_components.p, {
        children: "The steps to use a custom push template are as follows:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["If you use a custom push template, create it in ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), " or call ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/im/offline-push/offline-push-configuration#create-a-push-template",
              children: "RESTful API"
            }), ". For a description of the parameters in the ", _jsx(_components.strong, {
              children: "Add Push Template"
            }), " dialog box, see the section about using the default template. When using a custom template, regardless of how the ", _jsx(_components.strong, {
              children: "Title"
            }), " and ", _jsx(_components.strong, {
              children: "Content"
            }), " parameters are set, they must be passed in through the extension fields when creating a message."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "When creating a message, pass in the template name, push title, and push content by using the extension fields. The push title and content in the notification bar use the formats in the template, respectively."
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
              icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// The following takes text messages as an example. The setting methods for other types of messages are the same."
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
                    children: "(targetId, content, targetType);"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "msg.attributes "
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
                    children: " {"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  em_push_template: {"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    name: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"foo"'
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // Set the value array of the push title in the template. If the push title specified in the template is placeholder data, you can customize the title here; if the specified title is a fixed value, the title will be a fixed value when using this template."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    title_args: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"title"'
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // Set the value array of the pushed content in the template. If the template content specified in the template is placeholder data, you can customize the content here; if the specified content is a fixed value, the content will be a fixed value when using the template."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    content_args: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"test"'
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
                    children: "};"
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
                    children: "sendMessage"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(msg, {"
                  })]
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
                    children: " {},"
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
                    children: ": ("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: "msg"
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
                    children: " {},"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  } "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "as"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "  any"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " )"
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
                    children: "(() "
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
                    children: '"send message success"'
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
                    children: "reason"
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
                    children: '"set message fail."'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", reason);"
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
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "The JSON structure of the push template is as follows:"
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"em_push_template"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":{"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: '        "name"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"test6"'
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
                children: '        "title_args"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":["
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '            "test1"'
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        ],"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: '        "content_args"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":["
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '            "{$fromNickname}"'
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
                children: '            "{$msg}"'
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        ]"
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
      }), _jsxs(_components.p, {
        children: ["The message receiver can call ", _jsx(_components.code, {
          children: "selectPushTemplate"
        }), " to pass in the push template name and select the template to use."]
      }), _jsx(_components.p, {
        children: "If the sender uses a push template when sending a message, the content displayed in the push notification bar is based on the sender's push template."
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
                children: "  .pushManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "selectPushTemplate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(templateName)"
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
                children: "(() "
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
                children: '"Succeeded in updating the nickname."'
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
                children: "reason"
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
                children: '"Failed to update the nickname."'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", reason);"
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
        children: _jsx(_components.strong, {
          children: "This feature is not supported for this platform."
        })
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
        children: _jsx(_components.strong, {
          children: "This feature is not supported for this platform."
        })
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
