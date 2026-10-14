import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "User attributes",
  description: "Shows how to use the Agora Chat SDK to implement managing user attributes."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;,&#x22;windows&#x22;,&#x22;unity&#x22;,&#x22;web&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    After joining a Chat channel, a user can update information such as the nickname, avatar, age, and mobile phone number as needed. These are known as user attributes.

    This page shows how to use the Chat SDK to implement managing user attributes.

    <CalloutContainer type="info">
      <CalloutDescription>
        User attributes are stored on the Chat server. If you have security concerns, Agora recommends that you manage user attributes yourself.To ensure information security, app users can only modify their own user attributes. Only app admins can modify the user attributes of other users.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech]

    The Chat SDK uses \`UserInfoManager\` to retrieve, set, and modify user attributes. The following are the core methods:

    * \`updateOwnInfo\`: Set or update user attributes.
    * \`updateOwnInfoByAttributes\`: Set or update the specified user attribute.
    * \`fetchUserInfoByUserId\`: Retrieve the user attributes of the specified user.
    * \`fetchUserInfoByAttributes\`: Retrieve the specified user attributes of the specified user.

    ## Prerequisites [#prerequisites]

    Before proceeding, ensure that you meet the following requirements:

    * You have integrated the Chat SDK, initialized the SDK and implemented the functionality of registering accounts and login. For details, see [Chat SDK quickstart](../../get-started-sdk).
    * Have a thorough understanding of the API call frequency limit, the maximum size of all the attributes of a specified user, and the maximum size of all user attributes in an app. For details, see [Known limitations](../limitations).

    ## Implementation [#implementation]

    This section shows how to manage user attributes and contacts with the methods provided by the Chat SDK.

    ### Set user attributes [#set-user-attributes]

    Chat users can set and update their own attributes. Refer to the code example to set all the user attributes:

    \`\`\`java
    // Call updateOwnInfo to set all the user attributes
    UserInfo userInfo = new UserInfo();
    userInfo.setUserId(ChatClient.getInstance().getCurrentUser());
    userInfo.setNickname("agora");
    userInfo.setAvatarUrl("http://www.agora.io");
    userInfo.setBirth("2000.10.10");
    userInfo.setSignature("hello world");
    userInfo.setPhoneNumber("13333333333");
    userInfo.setEmail("123456@qq.com");
    userInfo.setGender(1);
    ChatClient.getInstance().userInfoManager().updateOwnInfo(userInfo, new ValueCallBack() {
                @Override
                public void onSuccess(String value) {
                }

                @Override
                public void onError(int error, String errorMsg) {
                }
      });
    \`\`\`

    The following sample code uses avatar as an example to show how to set the specified user attribute:

    \`\`\`java
    // Call updateOwnInfoByAttribute to update the specified attribute of the specified user
    String url = "https://download-sdk.oss-cn-beijing.aliyuncs.com/downloads/IMDemo/avatar/Image1.png";
    ChatClient.getInstance().userInfoManager().updateOwnInfoByAttribute(UserInfoType.AVATAR_URL, url, new ValueCallBack() {
                  @Override
                  public void onSuccess(String value) {
                  }

                  @Override
                  public void onError(int error, String errorMsg) {
                  }
       });
    \`\`\`

    Keys listed in the following table are used by default when user attributes are set on the client side, including the nickname, avatar URL, contact information, email address, gender, signature, birthday and extension fields. When you call the [RESTful API to set](/en/api-reference/api-ref/im/user-attributes-management#setting-user-attributes) or [delete](/en/api-reference/api-ref/im/user-attributes-management#deleting-user-attributes) these user attributes, you must pass in the following keys to make sure that the client can obtain the settings from the server:

    | Field       | Type   | Description                                                                            |
    | :---------- | :----- | :------------------------------------------------------------------------------------- |
    | \`nickname\`  | String | The user nickname, which can contain at most 64 characters.                            |
    | \`avatarurl\` | String | The user avatar URL, which can contain at most 256 characters.                         |
    | \`phone\`     | String | The user's phone number, which can contain at most 32 characters.                      |
    | \`mail\`      | String | The user's email address, which can contain at most 64 characters.                     |
    | \`gender\`    | Number | The user gender: \`1\`：Male; \`2\`：Female;(Default) \`0\`: Unknown;Other values are invalid. |
    | \`sign\`      | String | The user's signature, which can contain at most 256 characters.                        |
    | \`birth\`     | String | The user's birthday, which can contain at most 256 characters.                         |
    | \`ext\`       | String | The extension fields.                                                                  |

    ### Retrieve user attributes [#retrieve-user-attributes]

    You can use \`fetchUserInfoByUserId\` to retrieve the user attributes of the specified users. For each method call, you can retrieve the user attributes of a maximum of 100 users.

    Refer to the following code example:

    \`\`\`java
    // Call fetchUserInfoByUserId to retrieve all the attributes of the specified user.
    String[] userId = new String[1];
    //username indicates the user ID.
    userId[0] = username;
    ChatClient.getInstance().userInfoManager().fetchUserInfoByUserId(userId, new ValueCallBack>() {});
    \`\`\`

    \`\`\`java
    // Call fetchUserInfoByAttribute to retrieve the specified user attribute
    String[] userId = new String[1];
    userId[0] = ChatClient.getInstance().getCurrentUser();
    UserInfoType[] userInfoTypes = new UserInfoType[2];
    userInfoTypes[0] = UserInfoType.NICKNAME;
    userInfoTypes[1] = UserInfoType.AVATAR_URL;
    ChatClient.getInstance().userInfoManager().fetchUserInfoByAttribute(userId, userInfoTypes,
               new ValueCallBack>() {});
    \`\`\`

    ## Next steps [#next-steps]

    This section introduces extra functions you can implement in your app using user attributes and contact management.

    ### Manage user avatar [#manage-user-avatar]

    The Chat SDK only supports storing the URL address of the avatar file rather than the file itself. To manage user avatars, you need to use a third-party file storage service.

    To implement user avatar management in your app, take the following steps:

    1. Upload the avatar file to the third-party file storage service. Once the file is successfully uploaded, you get a URL address of the avatar file.
    2. Set the \`avatarUrl\` parameter in user attributes as the URL address of the avatar file.
    3. To display the avatar, call \`fetchUserInfoByUserId\` to retrieve the URL of the avatar file, and then render the image on the local UI.

    ### Create and send a namecard using user attributes [#create-and-send-a-namecard-using-user-attributes]

    Namecard messages are custom messages that include the user ID, nickname, avatar, email address, and phone number of the specified user. To create and send a namecard, take the following steps:

    1. Create a custom message and set the \`event\` of the custom message as \`USER_CARD_EVENT\`.
    2. Add \`userId\`, \`getNickname\`, and \`getAvatarUrl\` as fileds in \`params\`. Send the custom message.

    The following is sample code for creating and sending a namecard message:

    \`\`\`java
    // Creates a cutom message
    ChatMessage message = ChatMessage.createSendMessage(ChatMessage.Type.CUSTOM);
                    CustomMessageBody body = new CustomMessageBody(DemoConstant.USER_CARD_EVENT);
                    Map params = new HashMap<>();
                    params.put(DemoConstant.USER_CARD_ID,userId);
                    params.put(DemoConstant.USER_CARD_NICK,user.getNickname());
                    params.put(DemoConstant.USER_CARD_AVATAR,user.getAvatarUrl());
                    body.setParams(params);
                    message.setBody(body);
                    message.setTo(toUser);
    // Sends the custom message
    ChatClient.getInstance().chatManager().sendMessage(message);
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    After joining a Chat channel, a user can update information such as the nickname, avatar, age, and mobile phone number as needed. These are known as user attributes.

    This page shows how to use the Chat SDK to implement managing user attributes.

    <CalloutContainer type="info">
      <CalloutDescription>
        User attributes are stored on the Chat server. If you have security concerns, Agora recommends that you manage user attributes yourself.To ensure information security, app users can only modify their own user attributes. Only app admins can modify the user attributes of other users.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-1]

    The Chat SDK uses \`UserInfoManager\` to retrieve, set, and modify user attributes. The following are the core methods:

    * \`updateOwnUserInfo\`: Set or update user attributes.
    * \`fetchUserInfoById\`: Retrieve the user attributes of the specified user.

    ## Prerequisites [#prerequisites-1]

    Before proceeding, ensure that you meet the following requirements:

    * You have integrated the Chat SDK, initialized the SDK and implemented the functionality of registering accounts and login. For details, see [Chat SDK quickstart](../../get-started-sdk).
    * Have a thorough understanding of the API call frequency limit, the maximum size of all the attributes of a specified user, and the maximum size of all user attributes in an app. For details, see [Known limitations](../limitations).

    ## Implementation [#implementation-1]

    This section shows how to manage user attributes and contacts with the methods provided by the Chat SDK.

    ### Set user attributes [#set-user-attributes-1]

    Chat users can set and update their own attributes. Refer to the code example to set all the user attributes:

    \`\`\`objc
    // Sets the user attributes.
    AgoraChatUserInfo *userInfo = [[AgoraChatUserInfo alloc] init];
    userInfo.userId = AgoraChatClient.sharedClient.currentUsername;
    userInfo.nickName = @"agora";
    userInfo.avatarUrl = @"http://www.agora.io";
    userInfo.birth = @"2000.10.10";
    userInfo.sign = @"hello world";
    userInfo.phone = @"12333333333";
    userInfo.mail = @"123456@qq.com";
    userInfo.gender = 1;
    [AgoraChatClient.sharedClient.userInfoManager updateOwnUserInfo:userInfo completion:^(AgoraChatUserInfo *aUserInfo, AgoraChatError *aError)

    }];
    \`\`\`

    The following sample code uses avatar as an example to show how to set the specified user attribute:

    \`\`\`objc
    NSString *url = @"https://download-sdk.oss-cn-beijing.aliyuncs.com/downloads/IMDemo/avatar/Image1.png";

    [[AgoraChatClient sharedClient].userInfoManager updateOwnUserInfo:url withType:AgoraChatUserInfoTypeAvatarURL completion:^(AgoraChatUserInfo *aUserInfo, AgoraChatError *aError) {
            if (aUserInfo && completion) {
                completion(aUserInfo);
            }
        }];
    \`\`\`

    Keys listed in the following table are used by default when user attributes are set on the client side, including the nickname, avatar URL, contact information, email address, gender, signature, birthday and extension fields. When you call the [RESTful API to set](/en/api-reference/api-ref/im/user-attributes-management#setting-user-attributes) or [delete](/en/api-reference/api-ref/im/user-attributes-management#deleting-user-attributes) these user attributes, you must pass in the following keys to make sure that the client can obtain the settings from the server:

    | Field       | Type   | Description                                                                            |
    | :---------- | :----- | :------------------------------------------------------------------------------------- |
    | \`nickname\`  | String | The user nickname, which can contain at most 64 characters.                            |
    | \`avatarurl\` | String | The user avatar URL, which can contain at most 256 characters.                         |
    | \`phone\`     | String | The user's phone number, which can contain at most 32 characters.                      |
    | \`mail\`      | String | The user's email address, which can contain at most 64 characters.                     |
    | \`gender\`    | Number | The user gender: \`1\`：Male; \`2\`：Female;(Default) \`0\`: Unknown;Other values are invalid. |
    | \`sign\`      | String | The user's signature, which can contain at most 256 characters.                        |
    | \`birth\`     | String | The user's birthday, which can contain at most 256 characters.                         |
    | \`ext\`       | String | The extension fields.                                                                  |

    ### Retrieve user attributes [#retrieve-user-attributes-1]

    You can use \`fetchUserInfoById\` to retrieve the user attributes of the specified users. For each method call, you can retrieve the user attributes of a maximum of 100 users.

    Refer to the following code example to retrieve all the attributes of the specified user:

    \`\`\`objc
    [[AgoraChatClient sharedClient].userInfoManager fetchUserInfoById:@[AgoraChatClient.sharedClient.currentUsername]     completion:^(NSDictionary *aUserDatas, AgoraChatError *aError) {
    }];
    \`\`\`

    The following sample code shows how to retrieve the specified attributes of the user.

    \`\`\`objc
    NSString *userIds = @[@"user1",@"user2"];
    NSArray *userInfoTypes = @[@(AgoraChatUserInfoTypeAvatarURL),@(AgoraChatUserInfoTypePhone),@(AgoraChatUserInfoTypeMail)];
    [[AgoraChatClient sharedClient].userInfoManager fetchUserInfoById:userIds type:userInfoTypes completion:^(NSDictionary *aUserDatas, AgoraChatError *aError) {

    }];
    \`\`\`

    ## Next steps [#next-steps-1]

    This section introduces extra functions you can implement in your app using user attributes and contact management.

    ### Manage user avatar [#manage-user-avatar-1]

    The Chat SDK only supports storing the URL address of the avatar file rather than the file itself. To manage user avatars, you need to use a third-party file storage service.

    To implement user avatar management in your app, take the following steps:

    1. Upload the avatar file to the third-party file storage service. Once the file is successfully uploaded, you get a URL address of the avatar file.
    2. Set the \`avatarUrl\` parameter in user attributes as the URL address of the avatar file.
    3. To display the avatar, call \`fetchUserInfoById\` to retrieve the URL of the avatar file, and then render the image on the local UI.

    ### Create and send a namecard using user attributes [#create-and-send-a-namecard-using-user-attributes-1]

    Namecard messages are custom messages that include the user ID, nickname, avatar, email address, and phone number of the specified user. To create and send a namecard, take the following steps:

    1. Create a custom message and set the \`event\` of the custom message as \`userCard\`.
    2. Add \`userId\`, \`nickname\`, and \`avatar\` as fileds in \`ext\`. Send the custom message.

    The following is sample code for creating and sending a namecard message:

    \`\`\`objc
    AgoraChatCustomMessageBody *body = [[AgoraChatCustomMessageBody alloc] init];
        body.event = @"userCard";
        NSDictionary *messageExt = @{@"userId":AgoraChatClient.sharedClient.currentUsername,
                              @"nickname":@"nickname",
                              @"avatar":@"https://download-sdk.oss-cn-beijing.aliyuncs.com/downloads/IMDemo/avatar/Image1.png"
                            };
        body.ext = messageExt;
        AgoraChatMessage *message = [[AgoraChatMessage alloc] initWithConversationID:@"conversationID"
                                                              from:@"sender"
                                                                to:@"receiver"
                                                              body:body
                                                               ext:nil];
        // send message
        [[AgoraChatClient sharedClient].chatManager sendMessage:message progress:nil completion:^(AgoraChatMessage *message, AgoraChatError *error) {
        }];
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    After joining a Chat channel, a user can update information such as the nickname, avatar, age, and mobile phone number as needed. These are known as user attributes.

    This page shows how to use the Chat SDK to implement managing user attributes.

    <CalloutContainer type="info">
      <CalloutDescription>
        User attributes are stored on the Chat server. If you have security concerns, Agora recommends that you manage user attributes yourself.To ensure information security, app users can only modify their own user attributes. Only app admins can modify the user attributes of other users.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-2]

    The Chat SDK uses \`ChatUserInfoManager\` to retrieve, set, and modify user attributes. The following are the core methods:

    * \`updateOwnInfo\`: Set and update user attributes.
    * \`fetchUserInfoById\`: Retrieve the user attributes of the specified user.
    * \`fetchOwnInfo\`: Retrieve the user's own user attributes.

    ## Prerequisites [#prerequisites-2]

    Before proceeding, ensure that you meet the following requirements:

    * You have integrated the Chat SDK, initialized the SDK and implemented the functionality of registering accounts and login. For details, see [Chat SDK quickstart](../../get-started-sdk).
    * Have a thorough understanding of the API call frequency limit, the maximum size of all the attributes of a specified user, and the maximum size of all user attributes in an app. For details, see [Known limitations](../limitations).

    ## Implementation [#implementation-2]

    This section shows how to manage user attributes and contacts with the methods provided by the Chat SDK.

    ### Set user attributes [#set-user-attributes-2]

    Chat users can set and update their own attributes. Refer to the code example to set user attributes:

    \`\`\`dart
    try {
      ChatClient.getInstance.userInfoManager.updateUserInfo(userInfo);
    } on ChatError catch (e) {
      // Fails to update user attributes. See e.code for the error code, and e.description for the error description.
    }
    \`\`\`

    Keys listed in the following table are used by default when user attributes are set on the client side, including the nickname, avatar URL, contact information, email address, gender, signature, birthday and extension fields. When you call the [RESTful API to set](/en/api-reference/api-ref/im/user-attributes-management#setting-user-attributes) or [delete](/en/api-reference/api-ref/im/user-attributes-management#deleting-user-attributes) these user attributes, you must pass in the following keys to make sure that the client can obtain the settings from the server:

    | Field       | Type   | Description                                                                            |
    | :---------- | :----- | :------------------------------------------------------------------------------------- |
    | \`nickname\`  | String | The user nickname, which can contain at most 64 characters.                            |
    | \`avatarurl\` | String | The user avatar URL, which can contain at most 256 characters.                         |
    | \`phone\`     | String | The user's phone number, which can contain at most 32 characters.                      |
    | \`mail\`      | String | The user's email address, which can contain at most 64 characters.                     |
    | \`gender\`    | Number | The user gender: \`1\`：Male; \`2\`：Female;(Default) \`0\`: Unknown;Other values are invalid. |
    | \`sign\`      | String | The user's signature, which can contain at most 256 characters.                        |
    | \`birth\`     | String | The user's birthday, which can contain at most 256 characters.                         |
    | \`ext\`       | String | The extension fields.                                                                  |

    ### Retrieve user attributes [#retrieve-user-attributes-2]

    You can use \`fetchUserInfoById\` to retrieve the user attributes of the specified users. For each method call, you can retrieve the user attributes of a maximum of 100 users.

    Refer to the following code example:

    \`\`\`dart
    List list = ["tom", "json"];
    try {
      Map userInfos =
          await ChatClient.getInstance.userInfoManager.fetchUserInfoById(list);
    } on ChatError catch (e) {
      // Fails to retrieve the user attributes. See e.code for the error code, and e.description for the error description.
    }
    \`\`\`

    ### Retrieve the user's own attributes [#retrieve-the-users-own-attributes]

    Call \`fetchOwnInfo\` to fetch the user attributes of the local user:

    \`\`\`dart
    try {
      ChatUserInfo? userInfo =
          await ChatClient.getInstance.userInfoManager.fetchOwnInfo();
    } on ChatError catch (e) {
      // Fails to retrieve the user attributes of the current user. See e.code for the error code, and e.description for the error description.
    }
    \`\`\`

    ## Next steps [#next-steps-2]

    This section introduces extra functions you can implement in your app using user attributes and contact management.

    ### Manage user avatar [#manage-user-avatar-2]

    The Chat SDK only supports storing the URL address of the avatar file rather than the file itself. To manage user avatars, you need to use a third-party file storage service.

    To implement user avatar management in your app, take the following steps:

    1. Upload the avatar file to the third-party file storage service. Once the file is successfully uploaded, you get a URL address of the avatar file.
    2. Set the \`avatarUrl\` parameter in user attributes as the URL address of the avatar file.
    3. To display the avatar, call \`fetchUserInfoById\` to retrieve the URL of the avatar file, and then render the image on the local UI.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    After joining a Chat channel, a user can update information such as the nickname, avatar, age, and mobile phone number as needed. These are known as user attributes.

    This page shows how to use the Chat SDK to implement managing user attributes.

    <CalloutContainer type="info">
      <CalloutDescription>
        User attributes are stored on the Chat server. If you have security concerns, Agora recommends that you manage user attributes yourself.To ensure information security, app users can only modify their own user attributes. Only app admins can modify the user attributes of other users.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-3]

    The Chat SDK uses \`ChatUserInfoManager\` to retrieve, set, and modify user attributes. The following are the core methods:

    * \`updateOwnInfo\`: Set and update user attributes.
    * \`fetchUserInfoById\`: Retrieve the user attributes of the specified user.
    * \`fetchOwnInfo\`: Retrieve the user's own user attributes.

    ## Prerequisites [#prerequisites-3]

    Before proceeding, ensure that you meet the following requirements:

    * You have integrated the Chat SDK, initialized the SDK and implemented the functionality of registering accounts and login. For details, see [Chat SDK quickstart](../../get-started-sdk).
    * Have a thorough understanding of the API call frequency limit, the maximum size of all the attributes of a specified user, and the maximum size of all user attributes in an app. For details, see [Known limitations](../limitations).

    ## Implementation [#implementation-3]

    This section shows how to manage user attributes and contacts with the methods provided by the Chat SDK.

    ### Set user attributes [#set-user-attributes-3]

    Chat users can set and update their own attributes. Refer to the code example to set user attributes:

    \`\`\`typescript
    // Update the user attributes.
    // All the user attributes except user ID can be updated.
    // You can update one or more attributes with each method call.
    ChatClient.getInstance()
      .userManager.updateOwnUserInfo({
        nickName,
        avatarUrl,
        mail,
        phone,
        gender,
        sign,
        birth,
        ext,
      })
      .then(() => {
        console.log("update userInfo success.");
      })
      .catch((reason) => {
        console.log("update userInfo fail.", reason);
      });
    \`\`\`

    Keys listed in the following table are used by default when user attributes are set on the client side, including the nickname, avatar URL, contact information, email address, gender, signature, birthday and extension fields. When you call the [RESTful API to set](/en/api-reference/api-ref/im/user-attributes-management#setting-user-attributes) or [delete](/en/api-reference/api-ref/im/user-attributes-management#deleting-user-attributes) these user attributes, you must pass in the following keys to make sure that the client can obtain the settings from the server:

    | Field       | Type   | Description                                                                            |
    | :---------- | :----- | :------------------------------------------------------------------------------------- |
    | \`nickname\`  | String | The user nickname, which can contain at most 64 characters.                            |
    | \`avatarurl\` | String | The user avatar URL, which can contain at most 256 characters.                         |
    | \`phone\`     | String | The user's phone number, which can contain at most 32 characters.                      |
    | \`mail\`      | String | The user's email address, which can contain at most 64 characters.                     |
    | \`gender\`    | Number | The user gender: \`1\`：Male; \`2\`：Female;(Default) \`0\`: Unknown;Other values are invalid. |
    | \`sign\`      | String | The user's signature, which can contain at most 256 characters.                        |
    | \`birth\`     | String | The user's birthday, which can contain at most 256 characters.                         |
    | \`ext\`       | String | The extension fields.                                                                  |

    ### Retrieve user attributes [#retrieve-user-attributes-3]

    You can use \`fetchUserInfoById\` to retrieve the user attributes of the specified users. For each method call, you can retrieve the user attributes of a maximum of 100 users.

    Refer to the following code example:

    \`\`\`typescript
    // Specify one or more user IDs.
    const userIds = ["tom", "json"];
    // Call fetchUserInfoById
    ChatClient.getInstance()
      .userManager.fetchUserInfoById(userIds)
      .then((users) => {
        console.log("get userInfo success.", users);
      })
      .catch((reason) => {
        console.log("get userInfo fail.", reason);
      });
    \`\`\`

    ### Retrieve the user's own attributes [#retrieve-the-users-own-attributes-1]

    Call \`fetchOwnInfo\` to fetch the user attributes of the local user:

    \`\`\`typescript
    ChatClient.getInstance()
      .userManager.fetchOwnInfo()
      .then((users) => {
        console.log("get userInfo success.", users);
      })
      .catch((reason) => {
        console.log("get userInfo fail.", reason);
      });
    \`\`\`

    ## Next steps [#next-steps-3]

    This section introduces extra functions you can implement in your app using user attributes and contact management.

    ### Manage user avatar [#manage-user-avatar-3]

    The Chat SDK only supports storing the URL address of the avatar file rather than the file itself. To manage user avatars, you need to use a third-party file storage service.

    To implement user avatar management in your app, take the following steps:

    1. Upload the avatar file to the third-party file storage service. Once the file is successfully uploaded, you get a URL address of the avatar file.
    2. Set the \`avatarUrl\` parameter in user attributes as the URL address of the avatar file.
    3. To display the avatar, call \`fetchUserInfoById\` to retrieve the URL of the avatar file, and then render the image on the local UI.

    ### Create and send a namecard using user attributes [#create-and-send-a-namecard-using-user-attributes-2]

    Namecard messages are custom messages that include the user ID, nickname, avatar, email address, and phone number of the specified user. To create and send a namecard, take the following steps:

    1. Create a custom message and set the \`event\` of the custom message as \`userCard\`.
    2. Add \`userId\`, \`nickname\`, and \`avatarUrl\` as fileds in \`ext\`. Send the custom message.

    The following is sample code for creating and sending a namecard message:

    \`\`\`typescript
    // Customize the message.
    const event = "userCard";
    // You can also add more fields in ext
    const ext = { userId: "userId", nickname: "nickname", avatarUrl: "avatarUrl" };
    const msg = ChatMessage.createCustomMessage(targetId, event, chatType, {
      params: JSON.parse(ext),
    });
    // Call sendMessage to send the customized message.
    ChatClient.getInstance()
      .chatManager.sendMessage(msg!, new ChatMessageCallback())
      .then(() => {
        console.log("send message success.");
      })
      .catch((reason) => {
        console.log("send message fail.", reason);
      });
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    After joining a Chat channel, a user can update information such as the nickname, avatar, age, and mobile phone number as needed. These are known as user attributes.

    This page shows how to use the Chat SDK to implement managing user attributes.

    <CalloutContainer type="info">
      <CalloutDescription>
        User attributes are stored on the Chat server. If you have security concerns, Agora recommends that you manage user attributes yourself.To ensure information security, app users can only modify their own user attributes. Only app admins can modify the user attributes of other users.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-4]

    The Chat SDK uses \`IUserInfoManager\` to retrieve, set, and modify user attributes. The following are the core methods:

    * \`UpdateOwnInfo\`: Set and update user attributes.
    * \`FetchUserInfoByUserId\`: Retrieve the user attributes of the specified user.

    ## Prerequisites [#prerequisites-4]

    Before proceeding, ensure that you meet the following requirements:

    * You have integrated the Chat SDK, initialized the SDK and implemented the functionality of registering accounts and login. For details, see [Chat SDK quickstart](../../get-started-sdk).
    * Have a thorough understanding of the API call frequency limit, the maximum size of all the attributes of a specified user, and the maximum size of all user attributes in an app. For details, see [Known limitations](../limitations).

    ## Implementation [#implementation-4]

    This section shows how to manage user attributes and contacts with the methods provided by the Chat SDK.

    ### Set user attributes [#set-user-attributes-4]

    Chat users can set and update their own attributes. Refer to the code example to set user attributes:

    \`\`\`csharp
    // Set the user attributes of the specified user.
    UserInfo userInfo;
    userInfo.userId = currentId;
    userInfo.nickName = "chatuser";
    userInfo.avatarUrl = "http://www.easemob.com";
    userInfo.birth = "2000.10.10";
    userInfo.signature = "hello world";
    userInfo.phoneNumber = "13333333333";
    userInfo.email = "123456@qq.com";
    userInfo.gender = 1; // 1 indicates that the gender is male. 2 means female.
    SDKClient.Instance.UserInfoManager.UpdateOwnInfo(userInfo, new CallBack(
      onSuccess: () => {
      },
      onError:(code, desc) => {
      }
    ));
    \`\`\`

    Keys listed in the following table are used by default when user attributes are set on the client side, including the nickname, avatar URL, contact information, email address, gender, signature, birthday and extension fields. When you call the [RESTful API to set](/en/api-reference/api-ref/im/user-attributes-management#setting-user-attributes) or [delete](/en/api-reference/api-ref/im/user-attributes-management#deleting-user-attributes) these user attributes, you must pass in the following keys to make sure that the client can obtain the settings from the server:

    | Field       | Type   | Description                                                                            |
    | :---------- | :----- | :------------------------------------------------------------------------------------- |
    | \`nickname\`  | String | The user nickname, which can contain at most 64 characters.                            |
    | \`avatarurl\` | String | The user avatar URL, which can contain at most 256 characters.                         |
    | \`phone\`     | String | The user's phone number, which can contain at most 32 characters.                      |
    | \`mail\`      | String | The user's email address, which can contain at most 64 characters.                     |
    | \`gender\`    | Number | The user gender: \`1\`：Male; \`2\`：Female;(Default) \`0\`: Unknown;Other values are invalid. |
    | \`sign\`      | String | The user's signature, which can contain at most 256 characters.                        |
    | \`birth\`     | String | The user's birthday, which can contain at most 256 characters.                         |
    | \`ext\`       | String | The extension fields.                                                                  |

    ### Retrieve user attributes [#retrieve-user-attributes-4]

    You can use \`FetchUserInfoByUserId\` to retrieve the user attributes of the specified users. For each method call, you can retrieve the user attributes of a maximum of 100 users.

    Refer to the following code example:

    \`\`\`csharp
    // Retrieve user attributes of one or multiple users.
    List idList = new List();
    idList.Add("username");
    SDKClient.Instance.UserInfoManager.FetchUserInfoByUserId
    SDKClient.Instance.UserInfoManager.FetchUserInfoByUserId(idList, type, startId, loadCount, new ValueCallBack>(
      // \`result\` is in the format of Dictionary
      onSuccess: (result) => {
      // Traverse all the user attributes in the dictionary
      },
      onError:(code, desc) => {
      }
    ));
    \`\`\`

    ## Next steps [#next-steps-4]

    This section introduces extra functions you can implement in your app using user attributes and contact management.

    ### Manage user avatar [#manage-user-avatar-4]

    The Chat SDK only supports storing the URL address of the avatar file rather than the file itself. To manage user avatars, you need to use a third-party file storage service.

    To implement user avatar management in your app, take the following steps:

    1. Upload the avatar file to the third-party file storage service. Once the file is successfully uploaded, you get a URL address of the avatar file.
    2. Set the \`avatarUrl\` parameter in user attributes as the URL address of the avatar file.
    3. To display the avatar, call \`FetchUserInfoByUserId\` to retrieve the URL of the avatar file, and then render the image on the local UI.

    ### Create and send a namecard using user attributes [#create-and-send-a-namecard-using-user-attributes-3]

    Namecard messages are custom messages that include the user ID, nickname, avatar, email address, and phone number of the specified user. To create and send a namecard, take the following steps:

    1. Create a custom message and set the \`event\` of the custom message as \`userCard\`.
    2. Add \`userID\`, \`nickname\`, and \`avatarUrl\` as fileds in \`ext\`. Send the custom message.

    The following is sample code for creating and sending a namecard message:

    \`\`\`csharp
    string event = "userCard";
    Dictionary adict = new Dictionary();
    adict.Add("userId", userInfo.userId);
    adict.Add("nickname", userInfo. nickname);
    adict.Add("avatarUrl", userInfo.avatarUrl);
    // You can add more fields.

    // Create a custom message.
    Message msg = Message.CreateCustomSendMessage(toChatUsername, event, adict);

    // Send the message.
    SDKClient.Instance.ChatManager.SendMessage(ref msg, new CallBack(
       onSuccess: () => {
          Debug.Log($"{msg.MsgId}Sending success");
       },
       onError: (code, desc) => {
          Debug.Log($"{msg.MsgId}Sending failure，errCode={code}, errDesc={desc}");
       }
    ));
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    After joining a Chat channel, a user can update information such as the nickname, avatar, age, and mobile phone number as needed. These are known as user attributes.

    This page shows how to use the Chat SDK to implement managing user attributes.

    <CalloutContainer type="info">
      <CalloutDescription>
        User attributes are stored on the Chat server. If you have security concerns, Agora recommends that you manage user attributes yourself.To ensure information security, app users can only modify their own user attributes. Only app admins can modify the user attributes of other users.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-5]

    The Chat SDK uses \`IUserInfoManager\` to retrieve, set, and modify user attributes. The following are the core methods:

    * \`UpdateOwnInfo\`: Set and update user attributes.
    * \`FetchUserInfoByUserId\`: Retrieve the user attributes of the specified user.

    ## Prerequisites [#prerequisites-5]

    Before proceeding, ensure that you meet the following requirements:

    * You have integrated the Chat SDK, initialized the SDK and implemented the functionality of registering accounts and login. For details, see [Chat SDK quickstart](../../get-started-sdk).
    * Have a thorough understanding of the API call frequency limit, the maximum size of all the attributes of a specified user, and the maximum size of all user attributes in an app. For details, see [Known limitations](../limitations).

    ## Implementation [#implementation-5]

    This section shows how to manage user attributes and contacts with the methods provided by the Chat SDK.

    ### Set user attributes [#set-user-attributes-5]

    Chat users can set and update their own attributes. Refer to the code example to set user attributes:

    \`\`\`csharp
    // Set the user attributes of the specified user.
    UserInfo userInfo;
    userInfo.userId = currentId;
    userInfo.nickName = "chatuser";
    userInfo.avatarUrl = "http://www.easemob.com";
    userInfo.birth = "2000.10.10";
    userInfo.signature = "hello world";
    userInfo.phoneNumber = "13333333333";
    userInfo.email = "123456@qq.com";
    userInfo.gender = 1; // 1 indicates that the gender is male. 2 means female.
    SDKClient.Instance.UserInfoManager.UpdateOwnInfo(userInfo, new CallBack(
      onSuccess: () => {
      },
      onError:(code, desc) => {
      }
    ));
    \`\`\`

    Keys listed in the following table are used by default when user attributes are set on the client side, including the nickname, avatar URL, contact information, email address, gender, signature, birthday and extension fields. When you call the [RESTful API to set](/en/api-reference/api-ref/im/user-attributes-management#setting-user-attributes) or [delete](/en/api-reference/api-ref/im/user-attributes-management#deleting-user-attributes) these user attributes, you must pass in the following keys to make sure that the client can obtain the settings from the server:

    | Field       | Type   | Description                                                                            |
    | :---------- | :----- | :------------------------------------------------------------------------------------- |
    | \`nickname\`  | String | The user nickname, which can contain at most 64 characters.                            |
    | \`avatarurl\` | String | The user avatar URL, which can contain at most 256 characters.                         |
    | \`phone\`     | String | The user's phone number, which can contain at most 32 characters.                      |
    | \`mail\`      | String | The user's email address, which can contain at most 64 characters.                     |
    | \`gender\`    | Number | The user gender: \`1\`：Male; \`2\`：Female;(Default) \`0\`: Unknown;Other values are invalid. |
    | \`sign\`      | String | The user's signature, which can contain at most 256 characters.                        |
    | \`birth\`     | String | The user's birthday, which can contain at most 256 characters.                         |
    | \`ext\`       | String | The extension fields.                                                                  |

    ### Retrieve user attributes [#retrieve-user-attributes-5]

    You can use \`FetchUserInfoByUserId\` to retrieve the user attributes of the specified users. For each method call, you can retrieve the user attributes of a maximum of 100 users.

    Refer to the following code example:

    \`\`\`csharp
    // Retrieve user attributes of one or multiple users.
    List idList = new List();
    idList.Add("username");
    SDKClient.Instance.UserInfoManager.FetchUserInfoByUserId
    SDKClient.Instance.UserInfoManager.FetchUserInfoByUserId(idList, type, startId, loadCount, new ValueCallBack>(
      // \`result\` is in the format of Dictionary
      onSuccess: (result) => {
      // Traverse all the user attributes in the dictionary
      },
      onError:(code, desc) => {
      }
    ));
    \`\`\`

    ## Next steps [#next-steps-5]

    This section introduces extra functions you can implement in your app using user attributes and contact management.

    ### Manage user avatar [#manage-user-avatar-5]

    The Chat SDK only supports storing the URL address of the avatar file rather than the file itself. To manage user avatars, you need to use a third-party file storage service.

    To implement user avatar management in your app, take the following steps:

    1. Upload the avatar file to the third-party file storage service. Once the file is successfully uploaded, you get a URL address of the avatar file.
    2. Set the \`avatarUrl\` parameter in user attributes as the URL address of the avatar file.
    3. To display the avatar, call \`FetchUserInfoByUserId\` to retrieve the URL of the avatar file, and then render the image on the local UI.

    ### Create and send a namecard using user attributes [#create-and-send-a-namecard-using-user-attributes-4]

    Namecard messages are custom messages that include the user ID, nickname, avatar, email address, and phone number of the specified user. To create and send a namecard, take the following steps:

    1. Create a custom message and set the \`event\` of the custom message as \`userCard\`.
    2. Add \`userID\`, \`nickname\`, and \`avatarUrl\` as fileds in \`ext\`. Send the custom message.

    The following is sample code for creating and sending a namecard message:

    \`\`\`csharp
    string event = "userCard";
    Dictionary adict = new Dictionary();
    adict.Add("userId", userInfo.userId);
    adict.Add("nickname", userInfo. nickname);
    adict.Add("avatarUrl", userInfo.avatarUrl);
    // You can add more fields.

    // Create a custom message.
    Message msg = Message.CreateCustomSendMessage(toChatUsername, event, adict);

    // Send the message.
    SDKClient.Instance.ChatManager.SendMessage(ref msg, new CallBack(
       onSuccess: () => {
          Debug.Log($"{msg.MsgId}Sending success");
       },
       onError: (code, desc) => {
          Debug.Log($"{msg.MsgId}Sending failure，errCode={code}, errDesc={desc}");
       }
    ));
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    After joining a Chat channel, a user can update information such as the nickname, avatar, age, and mobile phone number as needed. These are known as user attributes.

    This page shows how to use the Chat SDK to implement managing user attributes.

    <CalloutContainer type="info">
      <CalloutDescription>
        User attributes are stored on the Chat server. If you have security concerns, Agora recommends that you manage user attributes yourself.To ensure information security, app users can only modify their own user attributes. Only app admins can modify the user attributes of other users.
      </CalloutDescription>
    </CalloutContainer>

    ## Understand the tech [#understand-the-tech-6]

    The Chat SDK uses \`UserInfoManager\` to retrieve, set, and modify user attributes. The following are the core methods:

    * \`updateUserInfo\`: Set or update user attributes.
    * \`fetchUserInfoById\`: Retrieve the user attributes of the specified user.

    ## Prerequisites [#prerequisites-6]

    Before proceeding, ensure that you meet the following requirements:

    * You have integrated the Chat SDK, initialized the SDK and implemented the functionality of registering accounts and login. For details, see [Chat SDK quickstart](../../get-started-sdk).
    * Have a thorough understanding of the API call frequency limit, the maximum size of all the attributes of a specified user, and the maximum size of all user attributes in an app. For details, see [Known limitations](../limitations).

    ## Implementation [#implementation-6]

    This section shows how to manage user attributes and contacts with the methods provided by the Chat SDK.

    ### Set user attributes [#set-user-attributes-6]

    Chat users can set and update their own attributes. Refer to the code example to set all the user attributes:

    \`\`\`javascript
    // Sets all user attributes
    const options = {
      nickname: "The nickname",
      avatarurl: "https://avatarurl",
      mail: "abc@gmail.com",
      phone: "phone number",
      gender: "female",
      birth: "2000-01-01",
      sign: "a sign",
      ext: JSON.stringify({
        nationality: "China",
        merit: "Hello, world！",
      }),
    };
    chatClient.updateUserInfo(options).then((res) => {
      console.log(res);
    });
    \`\`\`

    The following sample code uses nickname as an example to show how to set the specified user attribute:

    \`\`\`javascript
    chatClient.updateUserInfo("nickname", "Your nickname").then((res) => {
      console.log(res);
    });
    \`\`\`

    Keys listed in the following table are used by default when user attributes are set on the client side, including the nickname, avatar URL, contact information, email address, gender, signature, birthday and extension fields. When you call the [RESTful API to set](/en/api-reference/api-ref/im/user-attributes-management#setting-user-attributes) or [delete](/en/api-reference/api-ref/im/user-attributes-management#deleting-user-attributes) these user attributes, you must pass in the following keys to make sure that the client can obtain the settings from the server:

    | Field       | Type   | Description                                                                            |
    | :---------- | :----- | :------------------------------------------------------------------------------------- |
    | \`nickname\`  | String | The user nickname, which can contain at most 64 characters.                            |
    | \`avatarurl\` | String | The user avatar URL, which can contain at most 256 characters.                         |
    | \`phone\`     | String | The user's phone number, which can contain at most 32 characters.                      |
    | \`mail\`      | String | The user's email address, which can contain at most 64 characters.                     |
    | \`gender\`    | Number | The user gender: \`1\`：Male; \`2\`：Female;(Default) \`0\`: Unknown;Other values are invalid. |
    | \`sign\`      | String | The user's signature, which can contain at most 256 characters.                        |
    | \`birth\`     | String | The user's birthday, which can contain at most 256 characters.                         |
    | \`ext\`       | String | The extension fields.                                                                  |

    ### Retrieve user attributes [#retrieve-user-attributes-6]

    You can use \`fetchUserInfoById\` to retrieve the user attributes of the specified users. For each method call, you can retrieve the user attributes of a maximum of 100 users.

    Refer to the following code example to retrieve all the attributes of the specified user:

    \`\`\`javascript
    /**
     * @param {String|Array} users - The user ID. You can set it as one user ID, or multiple user IDs in the format of array.
     */
    let users = "user1" || ["user1", "user2"];
    chatClient.fetchUserInfoById(users).then((res) => {
      console.log(res);
    });
    \`\`\`

    The following sample code shows how to retrieve the specified attributes of the user.

    \`\`\`javascript
    /**
     * @param {String|Array} users - The user ID. You can set it as one user ID, or multiple user IDs in the format of array.
     * @param {String|Array} properties - The specified attribute.
     */
    chatClient.fetchUserInfoById("userId", "nickname").then((res) => {
      console.log(res);
    });

    // Retrieves the specified attributes of the specified users.
    chatClient
      .fetchUserInfoById(["user1", "user2"], ["nickname", "avatarurl"])
      .then((res) => {
        console.log(res);
      });
    \`\`\`

    ## Next steps [#next-steps-6]

    This section introduces extra functions you can implement in your app using user attributes and contact management.

    ### Manage user avatar [#manage-user-avatar-6]

    The Chat SDK only supports storing the URL address of the avatar file rather than the file itself. To manage user avatars, you need to use a third-party file storage service.

    To implement user avatar management in your app, take the following steps:

    1. Upload the avatar file to the third-party file storage service. Once the file is successfully uploaded, you get a URL address of the avatar file.
    2. Set the \`avatarUrl\` parameter in user attributes as the URL address of the avatar file.
    3. To display the avatar, call \`fetchUserInfoById\` to retrieve the URL of the avatar file, and then render the image on the local UI.

    ### Create and send a namecard using user attributes [#create-and-send-a-namecard-using-user-attributes-5]

    Namecard messages are custom messages that include the user ID, nickname, avatar, email address, and phone number of the specified user. To create and send a namecard, take the following steps:

    1. Set the message type as \`custom\`.
    2. Set the \`customEvent\` of the custom message as \`userCard\`.
    3. Retrieve the values of \`nickname\`, \`mail\`, and \`avatarurl\` from the user attributes, and then set them as the extension of the custom message using \`customExts\`.

    The following is sample code for creating and sending a namecard message:

    \`\`\`javascript
    // Set custom event type as userCard
    const customEvent = "userCard";
    // Set these attributes as the extension of the custom message using customExts.
    const customExts = {
      nickname: "The nickname",
      avatarurl: "https://avatarurl",
      mail: "abc@gmail.com",
      phone: "phone number",
      gender: "female",
      birth: "2000-01-01",
      sign: "a sign",
    };
    const options = {
      // Set the message type.
      type: "custom",
      // Set the message recipient.
      to: "username",
      // Set the message event.
      customEvent,
      // Set the message content
      customExts,
      chatType: "singleChat",
    };
    // Create a custom message.
    const msg = AgoraChat.message.create(options);
    chatClient
      .send(msg)
      .then((res) => {
        console.log("Success");
      })
      .catch((e) => {
        console.log("error");
      });
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "After joining a Chat channel, a user can update information such as the nickname, avatar, age, and mobile phone number as needed. These are known as user attributes."
  }, {
    heading: undefined,
    content: "This page shows how to use the Chat SDK to implement managing user attributes."
  }, {
    heading: undefined,
    content: "User attributes are stored on the Chat server. If you have security concerns, Agora recommends that you manage user attributes yourself.To ensure information security, app users can only modify their own user attributes. Only app admins can modify the user attributes of other users."
  }, {
    heading: "understand-the-tech",
    content: "The Chat SDK uses `UserInfoManager` to retrieve, set, and modify user attributes. The following are the core methods:"
  }, {
    heading: "understand-the-tech",
    content: "`updateOwnInfo`: Set or update user attributes."
  }, {
    heading: "understand-the-tech",
    content: "`updateOwnInfoByAttributes`: Set or update the specified user attribute."
  }, {
    heading: "understand-the-tech",
    content: "`fetchUserInfoByUserId`: Retrieve the user attributes of the specified user."
  }, {
    heading: "understand-the-tech",
    content: "`fetchUserInfoByAttributes`: Retrieve the specified user attributes of the specified user."
  }, {
    heading: "prerequisites",
    content: "Before proceeding, ensure that you meet the following requirements:"
  }, {
    heading: "prerequisites",
    content: "You have integrated the Chat SDK, initialized the SDK and implemented the functionality of registering accounts and login. For details, see Chat SDK quickstart."
  }, {
    heading: "prerequisites",
    content: "Have a thorough understanding of the API call frequency limit, the maximum size of all the attributes of a specified user, and the maximum size of all user attributes in an app. For details, see Known limitations."
  }, {
    heading: "implementation",
    content: "This section shows how to manage user attributes and contacts with the methods provided by the Chat SDK."
  }, {
    heading: "set-user-attributes",
    content: "Chat users can set and update their own attributes. Refer to the code example to set all the user attributes:"
  }, {
    heading: "set-user-attributes",
    content: "The following sample code uses avatar as an example to show how to set the specified user attribute:"
  }, {
    heading: "set-user-attributes",
    content: "Keys listed in the following table are used by default when user attributes are set on the client side, including the nickname, avatar URL, contact information, email address, gender, signature, birthday and extension fields. When you call the RESTful API to set or delete these user attributes, you must pass in the following keys to make sure that the client can obtain the settings from the server:"
  }, {
    heading: "set-user-attributes",
    content: "Field"
  }, {
    heading: "set-user-attributes",
    content: "Type"
  }, {
    heading: "set-user-attributes",
    content: "Description"
  }, {
    heading: "set-user-attributes",
    content: "`nickname`"
  }, {
    heading: "set-user-attributes",
    content: "String"
  }, {
    heading: "set-user-attributes",
    content: "The user nickname, which can contain at most 64 characters."
  }, {
    heading: "set-user-attributes",
    content: "`avatarurl`"
  }, {
    heading: "set-user-attributes",
    content: "String"
  }, {
    heading: "set-user-attributes",
    content: "The user avatar URL, which can contain at most 256 characters."
  }, {
    heading: "set-user-attributes",
    content: "`phone`"
  }, {
    heading: "set-user-attributes",
    content: "String"
  }, {
    heading: "set-user-attributes",
    content: "The user's phone number, which can contain at most 32 characters."
  }, {
    heading: "set-user-attributes",
    content: "`mail`"
  }, {
    heading: "set-user-attributes",
    content: "String"
  }, {
    heading: "set-user-attributes",
    content: "The user's email address, which can contain at most 64 characters."
  }, {
    heading: "set-user-attributes",
    content: "`gender`"
  }, {
    heading: "set-user-attributes",
    content: "Number"
  }, {
    heading: "set-user-attributes",
    content: "The user gender: `1`：Male; `2`：Female;(Default) `0`: Unknown;Other values are invalid."
  }, {
    heading: "set-user-attributes",
    content: "`sign`"
  }, {
    heading: "set-user-attributes",
    content: "String"
  }, {
    heading: "set-user-attributes",
    content: "The user's signature, which can contain at most 256 characters."
  }, {
    heading: "set-user-attributes",
    content: "`birth`"
  }, {
    heading: "set-user-attributes",
    content: "String"
  }, {
    heading: "set-user-attributes",
    content: "The user's birthday, which can contain at most 256 characters."
  }, {
    heading: "set-user-attributes",
    content: "`ext`"
  }, {
    heading: "set-user-attributes",
    content: "String"
  }, {
    heading: "set-user-attributes",
    content: "The extension fields."
  }, {
    heading: "retrieve-user-attributes",
    content: "You can use `fetchUserInfoByUserId` to retrieve the user attributes of the specified users. For each method call, you can retrieve the user attributes of a maximum of 100 users."
  }, {
    heading: "retrieve-user-attributes",
    content: "Refer to the following code example:"
  }, {
    heading: "next-steps",
    content: "This section introduces extra functions you can implement in your app using user attributes and contact management."
  }, {
    heading: "manage-user-avatar",
    content: "The Chat SDK only supports storing the URL address of the avatar file rather than the file itself. To manage user avatars, you need to use a third-party file storage service."
  }, {
    heading: "manage-user-avatar",
    content: "To implement user avatar management in your app, take the following steps:"
  }, {
    heading: "manage-user-avatar",
    content: "Upload the avatar file to the third-party file storage service. Once the file is successfully uploaded, you get a URL address of the avatar file."
  }, {
    heading: "manage-user-avatar",
    content: "Set the `avatarUrl` parameter in user attributes as the URL address of the avatar file."
  }, {
    heading: "manage-user-avatar",
    content: "To display the avatar, call `fetchUserInfoByUserId` to retrieve the URL of the avatar file, and then render the image on the local UI."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes",
    content: "Namecard messages are custom messages that include the user ID, nickname, avatar, email address, and phone number of the specified user. To create and send a namecard, take the following steps:"
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes",
    content: "Create a custom message and set the `event` of the custom message as `USER_CARD_EVENT`."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes",
    content: "Add `userId`, `getNickname`, and `getAvatarUrl` as fileds in `params`. Send the custom message."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes",
    content: "The following is sample code for creating and sending a namecard message:"
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes",
    content: "After joining a Chat channel, a user can update information such as the nickname, avatar, age, and mobile phone number as needed. These are known as user attributes."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes",
    content: "This page shows how to use the Chat SDK to implement managing user attributes."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes",
    content: "User attributes are stored on the Chat server. If you have security concerns, Agora recommends that you manage user attributes yourself.To ensure information security, app users can only modify their own user attributes. Only app admins can modify the user attributes of other users."
  }, {
    heading: "understand-the-tech-1",
    content: "The Chat SDK uses `UserInfoManager` to retrieve, set, and modify user attributes. The following are the core methods:"
  }, {
    heading: "understand-the-tech-1",
    content: "`updateOwnUserInfo`: Set or update user attributes."
  }, {
    heading: "understand-the-tech-1",
    content: "`fetchUserInfoById`: Retrieve the user attributes of the specified user."
  }, {
    heading: "prerequisites-1",
    content: "Before proceeding, ensure that you meet the following requirements:"
  }, {
    heading: "prerequisites-1",
    content: "You have integrated the Chat SDK, initialized the SDK and implemented the functionality of registering accounts and login. For details, see Chat SDK quickstart."
  }, {
    heading: "prerequisites-1",
    content: "Have a thorough understanding of the API call frequency limit, the maximum size of all the attributes of a specified user, and the maximum size of all user attributes in an app. For details, see Known limitations."
  }, {
    heading: "implementation-1",
    content: "This section shows how to manage user attributes and contacts with the methods provided by the Chat SDK."
  }, {
    heading: "set-user-attributes-1",
    content: "Chat users can set and update their own attributes. Refer to the code example to set all the user attributes:"
  }, {
    heading: "set-user-attributes-1",
    content: "The following sample code uses avatar as an example to show how to set the specified user attribute:"
  }, {
    heading: "set-user-attributes-1",
    content: "Keys listed in the following table are used by default when user attributes are set on the client side, including the nickname, avatar URL, contact information, email address, gender, signature, birthday and extension fields. When you call the RESTful API to set or delete these user attributes, you must pass in the following keys to make sure that the client can obtain the settings from the server:"
  }, {
    heading: "set-user-attributes-1",
    content: "Field"
  }, {
    heading: "set-user-attributes-1",
    content: "Type"
  }, {
    heading: "set-user-attributes-1",
    content: "Description"
  }, {
    heading: "set-user-attributes-1",
    content: "`nickname`"
  }, {
    heading: "set-user-attributes-1",
    content: "String"
  }, {
    heading: "set-user-attributes-1",
    content: "The user nickname, which can contain at most 64 characters."
  }, {
    heading: "set-user-attributes-1",
    content: "`avatarurl`"
  }, {
    heading: "set-user-attributes-1",
    content: "String"
  }, {
    heading: "set-user-attributes-1",
    content: "The user avatar URL, which can contain at most 256 characters."
  }, {
    heading: "set-user-attributes-1",
    content: "`phone`"
  }, {
    heading: "set-user-attributes-1",
    content: "String"
  }, {
    heading: "set-user-attributes-1",
    content: "The user's phone number, which can contain at most 32 characters."
  }, {
    heading: "set-user-attributes-1",
    content: "`mail`"
  }, {
    heading: "set-user-attributes-1",
    content: "String"
  }, {
    heading: "set-user-attributes-1",
    content: "The user's email address, which can contain at most 64 characters."
  }, {
    heading: "set-user-attributes-1",
    content: "`gender`"
  }, {
    heading: "set-user-attributes-1",
    content: "Number"
  }, {
    heading: "set-user-attributes-1",
    content: "The user gender: `1`：Male; `2`：Female;(Default) `0`: Unknown;Other values are invalid."
  }, {
    heading: "set-user-attributes-1",
    content: "`sign`"
  }, {
    heading: "set-user-attributes-1",
    content: "String"
  }, {
    heading: "set-user-attributes-1",
    content: "The user's signature, which can contain at most 256 characters."
  }, {
    heading: "set-user-attributes-1",
    content: "`birth`"
  }, {
    heading: "set-user-attributes-1",
    content: "String"
  }, {
    heading: "set-user-attributes-1",
    content: "The user's birthday, which can contain at most 256 characters."
  }, {
    heading: "set-user-attributes-1",
    content: "`ext`"
  }, {
    heading: "set-user-attributes-1",
    content: "String"
  }, {
    heading: "set-user-attributes-1",
    content: "The extension fields."
  }, {
    heading: "retrieve-user-attributes-1",
    content: "You can use `fetchUserInfoById` to retrieve the user attributes of the specified users. For each method call, you can retrieve the user attributes of a maximum of 100 users."
  }, {
    heading: "retrieve-user-attributes-1",
    content: "Refer to the following code example to retrieve all the attributes of the specified user:"
  }, {
    heading: "retrieve-user-attributes-1",
    content: "The following sample code shows how to retrieve the specified attributes of the user."
  }, {
    heading: "next-steps-1",
    content: "This section introduces extra functions you can implement in your app using user attributes and contact management."
  }, {
    heading: "manage-user-avatar-1",
    content: "The Chat SDK only supports storing the URL address of the avatar file rather than the file itself. To manage user avatars, you need to use a third-party file storage service."
  }, {
    heading: "manage-user-avatar-1",
    content: "To implement user avatar management in your app, take the following steps:"
  }, {
    heading: "manage-user-avatar-1",
    content: "Upload the avatar file to the third-party file storage service. Once the file is successfully uploaded, you get a URL address of the avatar file."
  }, {
    heading: "manage-user-avatar-1",
    content: "Set the `avatarUrl` parameter in user attributes as the URL address of the avatar file."
  }, {
    heading: "manage-user-avatar-1",
    content: "To display the avatar, call `fetchUserInfoById` to retrieve the URL of the avatar file, and then render the image on the local UI."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-1",
    content: "Namecard messages are custom messages that include the user ID, nickname, avatar, email address, and phone number of the specified user. To create and send a namecard, take the following steps:"
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-1",
    content: "Create a custom message and set the `event` of the custom message as `userCard`."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-1",
    content: "Add `userId`, `nickname`, and `avatar` as fileds in `ext`. Send the custom message."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-1",
    content: "The following is sample code for creating and sending a namecard message:"
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-1",
    content: "After joining a Chat channel, a user can update information such as the nickname, avatar, age, and mobile phone number as needed. These are known as user attributes."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-1",
    content: "This page shows how to use the Chat SDK to implement managing user attributes."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-1",
    content: "User attributes are stored on the Chat server. If you have security concerns, Agora recommends that you manage user attributes yourself.To ensure information security, app users can only modify their own user attributes. Only app admins can modify the user attributes of other users."
  }, {
    heading: "understand-the-tech-2",
    content: "The Chat SDK uses `ChatUserInfoManager` to retrieve, set, and modify user attributes. The following are the core methods:"
  }, {
    heading: "understand-the-tech-2",
    content: "`updateOwnInfo`: Set and update user attributes."
  }, {
    heading: "understand-the-tech-2",
    content: "`fetchUserInfoById`: Retrieve the user attributes of the specified user."
  }, {
    heading: "understand-the-tech-2",
    content: "`fetchOwnInfo`: Retrieve the user's own user attributes."
  }, {
    heading: "prerequisites-2",
    content: "Before proceeding, ensure that you meet the following requirements:"
  }, {
    heading: "prerequisites-2",
    content: "You have integrated the Chat SDK, initialized the SDK and implemented the functionality of registering accounts and login. For details, see Chat SDK quickstart."
  }, {
    heading: "prerequisites-2",
    content: "Have a thorough understanding of the API call frequency limit, the maximum size of all the attributes of a specified user, and the maximum size of all user attributes in an app. For details, see Known limitations."
  }, {
    heading: "implementation-2",
    content: "This section shows how to manage user attributes and contacts with the methods provided by the Chat SDK."
  }, {
    heading: "set-user-attributes-2",
    content: "Chat users can set and update their own attributes. Refer to the code example to set user attributes:"
  }, {
    heading: "set-user-attributes-2",
    content: "Keys listed in the following table are used by default when user attributes are set on the client side, including the nickname, avatar URL, contact information, email address, gender, signature, birthday and extension fields. When you call the RESTful API to set or delete these user attributes, you must pass in the following keys to make sure that the client can obtain the settings from the server:"
  }, {
    heading: "set-user-attributes-2",
    content: "Field"
  }, {
    heading: "set-user-attributes-2",
    content: "Type"
  }, {
    heading: "set-user-attributes-2",
    content: "Description"
  }, {
    heading: "set-user-attributes-2",
    content: "`nickname`"
  }, {
    heading: "set-user-attributes-2",
    content: "String"
  }, {
    heading: "set-user-attributes-2",
    content: "The user nickname, which can contain at most 64 characters."
  }, {
    heading: "set-user-attributes-2",
    content: "`avatarurl`"
  }, {
    heading: "set-user-attributes-2",
    content: "String"
  }, {
    heading: "set-user-attributes-2",
    content: "The user avatar URL, which can contain at most 256 characters."
  }, {
    heading: "set-user-attributes-2",
    content: "`phone`"
  }, {
    heading: "set-user-attributes-2",
    content: "String"
  }, {
    heading: "set-user-attributes-2",
    content: "The user's phone number, which can contain at most 32 characters."
  }, {
    heading: "set-user-attributes-2",
    content: "`mail`"
  }, {
    heading: "set-user-attributes-2",
    content: "String"
  }, {
    heading: "set-user-attributes-2",
    content: "The user's email address, which can contain at most 64 characters."
  }, {
    heading: "set-user-attributes-2",
    content: "`gender`"
  }, {
    heading: "set-user-attributes-2",
    content: "Number"
  }, {
    heading: "set-user-attributes-2",
    content: "The user gender: `1`：Male; `2`：Female;(Default) `0`: Unknown;Other values are invalid."
  }, {
    heading: "set-user-attributes-2",
    content: "`sign`"
  }, {
    heading: "set-user-attributes-2",
    content: "String"
  }, {
    heading: "set-user-attributes-2",
    content: "The user's signature, which can contain at most 256 characters."
  }, {
    heading: "set-user-attributes-2",
    content: "`birth`"
  }, {
    heading: "set-user-attributes-2",
    content: "String"
  }, {
    heading: "set-user-attributes-2",
    content: "The user's birthday, which can contain at most 256 characters."
  }, {
    heading: "set-user-attributes-2",
    content: "`ext`"
  }, {
    heading: "set-user-attributes-2",
    content: "String"
  }, {
    heading: "set-user-attributes-2",
    content: "The extension fields."
  }, {
    heading: "retrieve-user-attributes-2",
    content: "You can use `fetchUserInfoById` to retrieve the user attributes of the specified users. For each method call, you can retrieve the user attributes of a maximum of 100 users."
  }, {
    heading: "retrieve-user-attributes-2",
    content: "Refer to the following code example:"
  }, {
    heading: "retrieve-the-users-own-attributes",
    content: "Call `fetchOwnInfo` to fetch the user attributes of the local user:"
  }, {
    heading: "next-steps-2",
    content: "This section introduces extra functions you can implement in your app using user attributes and contact management."
  }, {
    heading: "manage-user-avatar-2",
    content: "The Chat SDK only supports storing the URL address of the avatar file rather than the file itself. To manage user avatars, you need to use a third-party file storage service."
  }, {
    heading: "manage-user-avatar-2",
    content: "To implement user avatar management in your app, take the following steps:"
  }, {
    heading: "manage-user-avatar-2",
    content: "Upload the avatar file to the third-party file storage service. Once the file is successfully uploaded, you get a URL address of the avatar file."
  }, {
    heading: "manage-user-avatar-2",
    content: "Set the `avatarUrl` parameter in user attributes as the URL address of the avatar file."
  }, {
    heading: "manage-user-avatar-2",
    content: "To display the avatar, call `fetchUserInfoById` to retrieve the URL of the avatar file, and then render the image on the local UI."
  }, {
    heading: "manage-user-avatar-2",
    content: "After joining a Chat channel, a user can update information such as the nickname, avatar, age, and mobile phone number as needed. These are known as user attributes."
  }, {
    heading: "manage-user-avatar-2",
    content: "This page shows how to use the Chat SDK to implement managing user attributes."
  }, {
    heading: "manage-user-avatar-2",
    content: "User attributes are stored on the Chat server. If you have security concerns, Agora recommends that you manage user attributes yourself.To ensure information security, app users can only modify their own user attributes. Only app admins can modify the user attributes of other users."
  }, {
    heading: "understand-the-tech-3",
    content: "The Chat SDK uses `ChatUserInfoManager` to retrieve, set, and modify user attributes. The following are the core methods:"
  }, {
    heading: "understand-the-tech-3",
    content: "`updateOwnInfo`: Set and update user attributes."
  }, {
    heading: "understand-the-tech-3",
    content: "`fetchUserInfoById`: Retrieve the user attributes of the specified user."
  }, {
    heading: "understand-the-tech-3",
    content: "`fetchOwnInfo`: Retrieve the user's own user attributes."
  }, {
    heading: "prerequisites-3",
    content: "Before proceeding, ensure that you meet the following requirements:"
  }, {
    heading: "prerequisites-3",
    content: "You have integrated the Chat SDK, initialized the SDK and implemented the functionality of registering accounts and login. For details, see Chat SDK quickstart."
  }, {
    heading: "prerequisites-3",
    content: "Have a thorough understanding of the API call frequency limit, the maximum size of all the attributes of a specified user, and the maximum size of all user attributes in an app. For details, see Known limitations."
  }, {
    heading: "implementation-3",
    content: "This section shows how to manage user attributes and contacts with the methods provided by the Chat SDK."
  }, {
    heading: "set-user-attributes-3",
    content: "Chat users can set and update their own attributes. Refer to the code example to set user attributes:"
  }, {
    heading: "set-user-attributes-3",
    content: "Keys listed in the following table are used by default when user attributes are set on the client side, including the nickname, avatar URL, contact information, email address, gender, signature, birthday and extension fields. When you call the RESTful API to set or delete these user attributes, you must pass in the following keys to make sure that the client can obtain the settings from the server:"
  }, {
    heading: "set-user-attributes-3",
    content: "Field"
  }, {
    heading: "set-user-attributes-3",
    content: "Type"
  }, {
    heading: "set-user-attributes-3",
    content: "Description"
  }, {
    heading: "set-user-attributes-3",
    content: "`nickname`"
  }, {
    heading: "set-user-attributes-3",
    content: "String"
  }, {
    heading: "set-user-attributes-3",
    content: "The user nickname, which can contain at most 64 characters."
  }, {
    heading: "set-user-attributes-3",
    content: "`avatarurl`"
  }, {
    heading: "set-user-attributes-3",
    content: "String"
  }, {
    heading: "set-user-attributes-3",
    content: "The user avatar URL, which can contain at most 256 characters."
  }, {
    heading: "set-user-attributes-3",
    content: "`phone`"
  }, {
    heading: "set-user-attributes-3",
    content: "String"
  }, {
    heading: "set-user-attributes-3",
    content: "The user's phone number, which can contain at most 32 characters."
  }, {
    heading: "set-user-attributes-3",
    content: "`mail`"
  }, {
    heading: "set-user-attributes-3",
    content: "String"
  }, {
    heading: "set-user-attributes-3",
    content: "The user's email address, which can contain at most 64 characters."
  }, {
    heading: "set-user-attributes-3",
    content: "`gender`"
  }, {
    heading: "set-user-attributes-3",
    content: "Number"
  }, {
    heading: "set-user-attributes-3",
    content: "The user gender: `1`：Male; `2`：Female;(Default) `0`: Unknown;Other values are invalid."
  }, {
    heading: "set-user-attributes-3",
    content: "`sign`"
  }, {
    heading: "set-user-attributes-3",
    content: "String"
  }, {
    heading: "set-user-attributes-3",
    content: "The user's signature, which can contain at most 256 characters."
  }, {
    heading: "set-user-attributes-3",
    content: "`birth`"
  }, {
    heading: "set-user-attributes-3",
    content: "String"
  }, {
    heading: "set-user-attributes-3",
    content: "The user's birthday, which can contain at most 256 characters."
  }, {
    heading: "set-user-attributes-3",
    content: "`ext`"
  }, {
    heading: "set-user-attributes-3",
    content: "String"
  }, {
    heading: "set-user-attributes-3",
    content: "The extension fields."
  }, {
    heading: "retrieve-user-attributes-3",
    content: "You can use `fetchUserInfoById` to retrieve the user attributes of the specified users. For each method call, you can retrieve the user attributes of a maximum of 100 users."
  }, {
    heading: "retrieve-user-attributes-3",
    content: "Refer to the following code example:"
  }, {
    heading: "retrieve-the-users-own-attributes-1",
    content: "Call `fetchOwnInfo` to fetch the user attributes of the local user:"
  }, {
    heading: "next-steps-3",
    content: "This section introduces extra functions you can implement in your app using user attributes and contact management."
  }, {
    heading: "manage-user-avatar-3",
    content: "The Chat SDK only supports storing the URL address of the avatar file rather than the file itself. To manage user avatars, you need to use a third-party file storage service."
  }, {
    heading: "manage-user-avatar-3",
    content: "To implement user avatar management in your app, take the following steps:"
  }, {
    heading: "manage-user-avatar-3",
    content: "Upload the avatar file to the third-party file storage service. Once the file is successfully uploaded, you get a URL address of the avatar file."
  }, {
    heading: "manage-user-avatar-3",
    content: "Set the `avatarUrl` parameter in user attributes as the URL address of the avatar file."
  }, {
    heading: "manage-user-avatar-3",
    content: "To display the avatar, call `fetchUserInfoById` to retrieve the URL of the avatar file, and then render the image on the local UI."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-2",
    content: "Namecard messages are custom messages that include the user ID, nickname, avatar, email address, and phone number of the specified user. To create and send a namecard, take the following steps:"
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-2",
    content: "Create a custom message and set the `event` of the custom message as `userCard`."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-2",
    content: "Add `userId`, `nickname`, and `avatarUrl` as fileds in `ext`. Send the custom message."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-2",
    content: "The following is sample code for creating and sending a namecard message:"
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-2",
    content: "After joining a Chat channel, a user can update information such as the nickname, avatar, age, and mobile phone number as needed. These are known as user attributes."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-2",
    content: "This page shows how to use the Chat SDK to implement managing user attributes."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-2",
    content: "User attributes are stored on the Chat server. If you have security concerns, Agora recommends that you manage user attributes yourself.To ensure information security, app users can only modify their own user attributes. Only app admins can modify the user attributes of other users."
  }, {
    heading: "understand-the-tech-4",
    content: "The Chat SDK uses `IUserInfoManager` to retrieve, set, and modify user attributes. The following are the core methods:"
  }, {
    heading: "understand-the-tech-4",
    content: "`UpdateOwnInfo`: Set and update user attributes."
  }, {
    heading: "understand-the-tech-4",
    content: "`FetchUserInfoByUserId`: Retrieve the user attributes of the specified user."
  }, {
    heading: "prerequisites-4",
    content: "Before proceeding, ensure that you meet the following requirements:"
  }, {
    heading: "prerequisites-4",
    content: "You have integrated the Chat SDK, initialized the SDK and implemented the functionality of registering accounts and login. For details, see Chat SDK quickstart."
  }, {
    heading: "prerequisites-4",
    content: "Have a thorough understanding of the API call frequency limit, the maximum size of all the attributes of a specified user, and the maximum size of all user attributes in an app. For details, see Known limitations."
  }, {
    heading: "implementation-4",
    content: "This section shows how to manage user attributes and contacts with the methods provided by the Chat SDK."
  }, {
    heading: "set-user-attributes-4",
    content: "Chat users can set and update their own attributes. Refer to the code example to set user attributes:"
  }, {
    heading: "set-user-attributes-4",
    content: "Keys listed in the following table are used by default when user attributes are set on the client side, including the nickname, avatar URL, contact information, email address, gender, signature, birthday and extension fields. When you call the RESTful API to set or delete these user attributes, you must pass in the following keys to make sure that the client can obtain the settings from the server:"
  }, {
    heading: "set-user-attributes-4",
    content: "Field"
  }, {
    heading: "set-user-attributes-4",
    content: "Type"
  }, {
    heading: "set-user-attributes-4",
    content: "Description"
  }, {
    heading: "set-user-attributes-4",
    content: "`nickname`"
  }, {
    heading: "set-user-attributes-4",
    content: "String"
  }, {
    heading: "set-user-attributes-4",
    content: "The user nickname, which can contain at most 64 characters."
  }, {
    heading: "set-user-attributes-4",
    content: "`avatarurl`"
  }, {
    heading: "set-user-attributes-4",
    content: "String"
  }, {
    heading: "set-user-attributes-4",
    content: "The user avatar URL, which can contain at most 256 characters."
  }, {
    heading: "set-user-attributes-4",
    content: "`phone`"
  }, {
    heading: "set-user-attributes-4",
    content: "String"
  }, {
    heading: "set-user-attributes-4",
    content: "The user's phone number, which can contain at most 32 characters."
  }, {
    heading: "set-user-attributes-4",
    content: "`mail`"
  }, {
    heading: "set-user-attributes-4",
    content: "String"
  }, {
    heading: "set-user-attributes-4",
    content: "The user's email address, which can contain at most 64 characters."
  }, {
    heading: "set-user-attributes-4",
    content: "`gender`"
  }, {
    heading: "set-user-attributes-4",
    content: "Number"
  }, {
    heading: "set-user-attributes-4",
    content: "The user gender: `1`：Male; `2`：Female;(Default) `0`: Unknown;Other values are invalid."
  }, {
    heading: "set-user-attributes-4",
    content: "`sign`"
  }, {
    heading: "set-user-attributes-4",
    content: "String"
  }, {
    heading: "set-user-attributes-4",
    content: "The user's signature, which can contain at most 256 characters."
  }, {
    heading: "set-user-attributes-4",
    content: "`birth`"
  }, {
    heading: "set-user-attributes-4",
    content: "String"
  }, {
    heading: "set-user-attributes-4",
    content: "The user's birthday, which can contain at most 256 characters."
  }, {
    heading: "set-user-attributes-4",
    content: "`ext`"
  }, {
    heading: "set-user-attributes-4",
    content: "String"
  }, {
    heading: "set-user-attributes-4",
    content: "The extension fields."
  }, {
    heading: "retrieve-user-attributes-4",
    content: "You can use `FetchUserInfoByUserId` to retrieve the user attributes of the specified users. For each method call, you can retrieve the user attributes of a maximum of 100 users."
  }, {
    heading: "retrieve-user-attributes-4",
    content: "Refer to the following code example:"
  }, {
    heading: "next-steps-4",
    content: "This section introduces extra functions you can implement in your app using user attributes and contact management."
  }, {
    heading: "manage-user-avatar-4",
    content: "The Chat SDK only supports storing the URL address of the avatar file rather than the file itself. To manage user avatars, you need to use a third-party file storage service."
  }, {
    heading: "manage-user-avatar-4",
    content: "To implement user avatar management in your app, take the following steps:"
  }, {
    heading: "manage-user-avatar-4",
    content: "Upload the avatar file to the third-party file storage service. Once the file is successfully uploaded, you get a URL address of the avatar file."
  }, {
    heading: "manage-user-avatar-4",
    content: "Set the `avatarUrl` parameter in user attributes as the URL address of the avatar file."
  }, {
    heading: "manage-user-avatar-4",
    content: "To display the avatar, call `FetchUserInfoByUserId` to retrieve the URL of the avatar file, and then render the image on the local UI."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-3",
    content: "Namecard messages are custom messages that include the user ID, nickname, avatar, email address, and phone number of the specified user. To create and send a namecard, take the following steps:"
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-3",
    content: "Create a custom message and set the `event` of the custom message as `userCard`."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-3",
    content: "Add `userID`, `nickname`, and `avatarUrl` as fileds in `ext`. Send the custom message."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-3",
    content: "The following is sample code for creating and sending a namecard message:"
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-3",
    content: "After joining a Chat channel, a user can update information such as the nickname, avatar, age, and mobile phone number as needed. These are known as user attributes."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-3",
    content: "This page shows how to use the Chat SDK to implement managing user attributes."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-3",
    content: "User attributes are stored on the Chat server. If you have security concerns, Agora recommends that you manage user attributes yourself.To ensure information security, app users can only modify their own user attributes. Only app admins can modify the user attributes of other users."
  }, {
    heading: "understand-the-tech-5",
    content: "The Chat SDK uses `IUserInfoManager` to retrieve, set, and modify user attributes. The following are the core methods:"
  }, {
    heading: "understand-the-tech-5",
    content: "`UpdateOwnInfo`: Set and update user attributes."
  }, {
    heading: "understand-the-tech-5",
    content: "`FetchUserInfoByUserId`: Retrieve the user attributes of the specified user."
  }, {
    heading: "prerequisites-5",
    content: "Before proceeding, ensure that you meet the following requirements:"
  }, {
    heading: "prerequisites-5",
    content: "You have integrated the Chat SDK, initialized the SDK and implemented the functionality of registering accounts and login. For details, see Chat SDK quickstart."
  }, {
    heading: "prerequisites-5",
    content: "Have a thorough understanding of the API call frequency limit, the maximum size of all the attributes of a specified user, and the maximum size of all user attributes in an app. For details, see Known limitations."
  }, {
    heading: "implementation-5",
    content: "This section shows how to manage user attributes and contacts with the methods provided by the Chat SDK."
  }, {
    heading: "set-user-attributes-5",
    content: "Chat users can set and update their own attributes. Refer to the code example to set user attributes:"
  }, {
    heading: "set-user-attributes-5",
    content: "Keys listed in the following table are used by default when user attributes are set on the client side, including the nickname, avatar URL, contact information, email address, gender, signature, birthday and extension fields. When you call the RESTful API to set or delete these user attributes, you must pass in the following keys to make sure that the client can obtain the settings from the server:"
  }, {
    heading: "set-user-attributes-5",
    content: "Field"
  }, {
    heading: "set-user-attributes-5",
    content: "Type"
  }, {
    heading: "set-user-attributes-5",
    content: "Description"
  }, {
    heading: "set-user-attributes-5",
    content: "`nickname`"
  }, {
    heading: "set-user-attributes-5",
    content: "String"
  }, {
    heading: "set-user-attributes-5",
    content: "The user nickname, which can contain at most 64 characters."
  }, {
    heading: "set-user-attributes-5",
    content: "`avatarurl`"
  }, {
    heading: "set-user-attributes-5",
    content: "String"
  }, {
    heading: "set-user-attributes-5",
    content: "The user avatar URL, which can contain at most 256 characters."
  }, {
    heading: "set-user-attributes-5",
    content: "`phone`"
  }, {
    heading: "set-user-attributes-5",
    content: "String"
  }, {
    heading: "set-user-attributes-5",
    content: "The user's phone number, which can contain at most 32 characters."
  }, {
    heading: "set-user-attributes-5",
    content: "`mail`"
  }, {
    heading: "set-user-attributes-5",
    content: "String"
  }, {
    heading: "set-user-attributes-5",
    content: "The user's email address, which can contain at most 64 characters."
  }, {
    heading: "set-user-attributes-5",
    content: "`gender`"
  }, {
    heading: "set-user-attributes-5",
    content: "Number"
  }, {
    heading: "set-user-attributes-5",
    content: "The user gender: `1`：Male; `2`：Female;(Default) `0`: Unknown;Other values are invalid."
  }, {
    heading: "set-user-attributes-5",
    content: "`sign`"
  }, {
    heading: "set-user-attributes-5",
    content: "String"
  }, {
    heading: "set-user-attributes-5",
    content: "The user's signature, which can contain at most 256 characters."
  }, {
    heading: "set-user-attributes-5",
    content: "`birth`"
  }, {
    heading: "set-user-attributes-5",
    content: "String"
  }, {
    heading: "set-user-attributes-5",
    content: "The user's birthday, which can contain at most 256 characters."
  }, {
    heading: "set-user-attributes-5",
    content: "`ext`"
  }, {
    heading: "set-user-attributes-5",
    content: "String"
  }, {
    heading: "set-user-attributes-5",
    content: "The extension fields."
  }, {
    heading: "retrieve-user-attributes-5",
    content: "You can use `FetchUserInfoByUserId` to retrieve the user attributes of the specified users. For each method call, you can retrieve the user attributes of a maximum of 100 users."
  }, {
    heading: "retrieve-user-attributes-5",
    content: "Refer to the following code example:"
  }, {
    heading: "next-steps-5",
    content: "This section introduces extra functions you can implement in your app using user attributes and contact management."
  }, {
    heading: "manage-user-avatar-5",
    content: "The Chat SDK only supports storing the URL address of the avatar file rather than the file itself. To manage user avatars, you need to use a third-party file storage service."
  }, {
    heading: "manage-user-avatar-5",
    content: "To implement user avatar management in your app, take the following steps:"
  }, {
    heading: "manage-user-avatar-5",
    content: "Upload the avatar file to the third-party file storage service. Once the file is successfully uploaded, you get a URL address of the avatar file."
  }, {
    heading: "manage-user-avatar-5",
    content: "Set the `avatarUrl` parameter in user attributes as the URL address of the avatar file."
  }, {
    heading: "manage-user-avatar-5",
    content: "To display the avatar, call `FetchUserInfoByUserId` to retrieve the URL of the avatar file, and then render the image on the local UI."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-4",
    content: "Namecard messages are custom messages that include the user ID, nickname, avatar, email address, and phone number of the specified user. To create and send a namecard, take the following steps:"
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-4",
    content: "Create a custom message and set the `event` of the custom message as `userCard`."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-4",
    content: "Add `userID`, `nickname`, and `avatarUrl` as fileds in `ext`. Send the custom message."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-4",
    content: "The following is sample code for creating and sending a namecard message:"
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-4",
    content: "After joining a Chat channel, a user can update information such as the nickname, avatar, age, and mobile phone number as needed. These are known as user attributes."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-4",
    content: "This page shows how to use the Chat SDK to implement managing user attributes."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-4",
    content: "User attributes are stored on the Chat server. If you have security concerns, Agora recommends that you manage user attributes yourself.To ensure information security, app users can only modify their own user attributes. Only app admins can modify the user attributes of other users."
  }, {
    heading: "understand-the-tech-6",
    content: "The Chat SDK uses `UserInfoManager` to retrieve, set, and modify user attributes. The following are the core methods:"
  }, {
    heading: "understand-the-tech-6",
    content: "`updateUserInfo`: Set or update user attributes."
  }, {
    heading: "understand-the-tech-6",
    content: "`fetchUserInfoById`: Retrieve the user attributes of the specified user."
  }, {
    heading: "prerequisites-6",
    content: "Before proceeding, ensure that you meet the following requirements:"
  }, {
    heading: "prerequisites-6",
    content: "You have integrated the Chat SDK, initialized the SDK and implemented the functionality of registering accounts and login. For details, see Chat SDK quickstart."
  }, {
    heading: "prerequisites-6",
    content: "Have a thorough understanding of the API call frequency limit, the maximum size of all the attributes of a specified user, and the maximum size of all user attributes in an app. For details, see Known limitations."
  }, {
    heading: "implementation-6",
    content: "This section shows how to manage user attributes and contacts with the methods provided by the Chat SDK."
  }, {
    heading: "set-user-attributes-6",
    content: "Chat users can set and update their own attributes. Refer to the code example to set all the user attributes:"
  }, {
    heading: "set-user-attributes-6",
    content: "The following sample code uses nickname as an example to show how to set the specified user attribute:"
  }, {
    heading: "set-user-attributes-6",
    content: "Keys listed in the following table are used by default when user attributes are set on the client side, including the nickname, avatar URL, contact information, email address, gender, signature, birthday and extension fields. When you call the RESTful API to set or delete these user attributes, you must pass in the following keys to make sure that the client can obtain the settings from the server:"
  }, {
    heading: "set-user-attributes-6",
    content: "Field"
  }, {
    heading: "set-user-attributes-6",
    content: "Type"
  }, {
    heading: "set-user-attributes-6",
    content: "Description"
  }, {
    heading: "set-user-attributes-6",
    content: "`nickname`"
  }, {
    heading: "set-user-attributes-6",
    content: "String"
  }, {
    heading: "set-user-attributes-6",
    content: "The user nickname, which can contain at most 64 characters."
  }, {
    heading: "set-user-attributes-6",
    content: "`avatarurl`"
  }, {
    heading: "set-user-attributes-6",
    content: "String"
  }, {
    heading: "set-user-attributes-6",
    content: "The user avatar URL, which can contain at most 256 characters."
  }, {
    heading: "set-user-attributes-6",
    content: "`phone`"
  }, {
    heading: "set-user-attributes-6",
    content: "String"
  }, {
    heading: "set-user-attributes-6",
    content: "The user's phone number, which can contain at most 32 characters."
  }, {
    heading: "set-user-attributes-6",
    content: "`mail`"
  }, {
    heading: "set-user-attributes-6",
    content: "String"
  }, {
    heading: "set-user-attributes-6",
    content: "The user's email address, which can contain at most 64 characters."
  }, {
    heading: "set-user-attributes-6",
    content: "`gender`"
  }, {
    heading: "set-user-attributes-6",
    content: "Number"
  }, {
    heading: "set-user-attributes-6",
    content: "The user gender: `1`：Male; `2`：Female;(Default) `0`: Unknown;Other values are invalid."
  }, {
    heading: "set-user-attributes-6",
    content: "`sign`"
  }, {
    heading: "set-user-attributes-6",
    content: "String"
  }, {
    heading: "set-user-attributes-6",
    content: "The user's signature, which can contain at most 256 characters."
  }, {
    heading: "set-user-attributes-6",
    content: "`birth`"
  }, {
    heading: "set-user-attributes-6",
    content: "String"
  }, {
    heading: "set-user-attributes-6",
    content: "The user's birthday, which can contain at most 256 characters."
  }, {
    heading: "set-user-attributes-6",
    content: "`ext`"
  }, {
    heading: "set-user-attributes-6",
    content: "String"
  }, {
    heading: "set-user-attributes-6",
    content: "The extension fields."
  }, {
    heading: "retrieve-user-attributes-6",
    content: "You can use `fetchUserInfoById` to retrieve the user attributes of the specified users. For each method call, you can retrieve the user attributes of a maximum of 100 users."
  }, {
    heading: "retrieve-user-attributes-6",
    content: "Refer to the following code example to retrieve all the attributes of the specified user:"
  }, {
    heading: "retrieve-user-attributes-6",
    content: "The following sample code shows how to retrieve the specified attributes of the user."
  }, {
    heading: "next-steps-6",
    content: "This section introduces extra functions you can implement in your app using user attributes and contact management."
  }, {
    heading: "manage-user-avatar-6",
    content: "The Chat SDK only supports storing the URL address of the avatar file rather than the file itself. To manage user avatars, you need to use a third-party file storage service."
  }, {
    heading: "manage-user-avatar-6",
    content: "To implement user avatar management in your app, take the following steps:"
  }, {
    heading: "manage-user-avatar-6",
    content: "Upload the avatar file to the third-party file storage service. Once the file is successfully uploaded, you get a URL address of the avatar file."
  }, {
    heading: "manage-user-avatar-6",
    content: "Set the `avatarUrl` parameter in user attributes as the URL address of the avatar file."
  }, {
    heading: "manage-user-avatar-6",
    content: "To display the avatar, call `fetchUserInfoById` to retrieve the URL of the avatar file, and then render the image on the local UI."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-5",
    content: "Namecard messages are custom messages that include the user ID, nickname, avatar, email address, and phone number of the specified user. To create and send a namecard, take the following steps:"
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-5",
    content: "Set the message type as `custom`."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-5",
    content: "Set the `customEvent` of the custom message as `userCard`."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-5",
    content: "Retrieve the values of `nickname`, `mail`, and `avatarurl` from the user attributes, and then set them as the extension of the custom message using `customExts`."
  }, {
    heading: "create-and-send-a-namecard-using-user-attributes-5",
    content: "The following is sample code for creating and sending a namecard message:"
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
    id: "set-user-attributes",
    content: "Set user attributes"
  }, {
    id: "retrieve-user-attributes",
    content: "Retrieve user attributes"
  }, {
    id: "next-steps",
    content: "Next steps"
  }, {
    id: "manage-user-avatar",
    content: "Manage user avatar"
  }, {
    id: "create-and-send-a-namecard-using-user-attributes",
    content: "Create and send a namecard using user attributes"
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
    id: "set-user-attributes-1",
    content: "Set user attributes"
  }, {
    id: "retrieve-user-attributes-1",
    content: "Retrieve user attributes"
  }, {
    id: "next-steps-1",
    content: "Next steps"
  }, {
    id: "manage-user-avatar-1",
    content: "Manage user avatar"
  }, {
    id: "create-and-send-a-namecard-using-user-attributes-1",
    content: "Create and send a namecard using user attributes"
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
    id: "set-user-attributes-2",
    content: "Set user attributes"
  }, {
    id: "retrieve-user-attributes-2",
    content: "Retrieve user attributes"
  }, {
    id: "retrieve-the-users-own-attributes",
    content: "Retrieve the user's own attributes"
  }, {
    id: "next-steps-2",
    content: "Next steps"
  }, {
    id: "manage-user-avatar-2",
    content: "Manage user avatar"
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
    id: "set-user-attributes-3",
    content: "Set user attributes"
  }, {
    id: "retrieve-user-attributes-3",
    content: "Retrieve user attributes"
  }, {
    id: "retrieve-the-users-own-attributes-1",
    content: "Retrieve the user's own attributes"
  }, {
    id: "next-steps-3",
    content: "Next steps"
  }, {
    id: "manage-user-avatar-3",
    content: "Manage user avatar"
  }, {
    id: "create-and-send-a-namecard-using-user-attributes-2",
    content: "Create and send a namecard using user attributes"
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
    id: "set-user-attributes-4",
    content: "Set user attributes"
  }, {
    id: "retrieve-user-attributes-4",
    content: "Retrieve user attributes"
  }, {
    id: "next-steps-4",
    content: "Next steps"
  }, {
    id: "manage-user-avatar-4",
    content: "Manage user avatar"
  }, {
    id: "create-and-send-a-namecard-using-user-attributes-3",
    content: "Create and send a namecard using user attributes"
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
    id: "set-user-attributes-5",
    content: "Set user attributes"
  }, {
    id: "retrieve-user-attributes-5",
    content: "Retrieve user attributes"
  }, {
    id: "next-steps-5",
    content: "Next steps"
  }, {
    id: "manage-user-avatar-5",
    content: "Manage user avatar"
  }, {
    id: "create-and-send-a-namecard-using-user-attributes-4",
    content: "Create and send a namecard using user attributes"
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
    id: "set-user-attributes-6",
    content: "Set user attributes"
  }, {
    id: "retrieve-user-attributes-6",
    content: "Retrieve user attributes"
  }, {
    id: "next-steps-6",
    content: "Next steps"
  }, {
    id: "manage-user-avatar-6",
    content: "Manage user avatar"
  }, {
    id: "create-and-send-a-namecard-using-user-attributes-5",
    content: "Create and send a namecard using user attributes"
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
  url: "#set-user-attributes",
  title: _jsx(_Fragment, {
    children: "Set user attributes"
  })
}, {
  depth: 3,
  url: "#retrieve-user-attributes",
  title: _jsx(_Fragment, {
    children: "Retrieve user attributes"
  })
}, {
  depth: 2,
  url: "#next-steps",
  title: _jsx(_Fragment, {
    children: "Next steps"
  })
}, {
  depth: 3,
  url: "#manage-user-avatar",
  title: _jsx(_Fragment, {
    children: "Manage user avatar"
  })
}, {
  depth: 3,
  url: "#create-and-send-a-namecard-using-user-attributes",
  title: _jsx(_Fragment, {
    children: "Create and send a namecard using user attributes"
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
  url: "#set-user-attributes-1",
  title: _jsx(_Fragment, {
    children: "Set user attributes"
  })
}, {
  depth: 3,
  url: "#retrieve-user-attributes-1",
  title: _jsx(_Fragment, {
    children: "Retrieve user attributes"
  })
}, {
  depth: 2,
  url: "#next-steps-1",
  title: _jsx(_Fragment, {
    children: "Next steps"
  })
}, {
  depth: 3,
  url: "#manage-user-avatar-1",
  title: _jsx(_Fragment, {
    children: "Manage user avatar"
  })
}, {
  depth: 3,
  url: "#create-and-send-a-namecard-using-user-attributes-1",
  title: _jsx(_Fragment, {
    children: "Create and send a namecard using user attributes"
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
  url: "#set-user-attributes-2",
  title: _jsx(_Fragment, {
    children: "Set user attributes"
  })
}, {
  depth: 3,
  url: "#retrieve-user-attributes-2",
  title: _jsx(_Fragment, {
    children: "Retrieve user attributes"
  })
}, {
  depth: 3,
  url: "#retrieve-the-users-own-attributes",
  title: _jsx(_Fragment, {
    children: "Retrieve the user's own attributes"
  })
}, {
  depth: 2,
  url: "#next-steps-2",
  title: _jsx(_Fragment, {
    children: "Next steps"
  })
}, {
  depth: 3,
  url: "#manage-user-avatar-2",
  title: _jsx(_Fragment, {
    children: "Manage user avatar"
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
  url: "#set-user-attributes-3",
  title: _jsx(_Fragment, {
    children: "Set user attributes"
  })
}, {
  depth: 3,
  url: "#retrieve-user-attributes-3",
  title: _jsx(_Fragment, {
    children: "Retrieve user attributes"
  })
}, {
  depth: 3,
  url: "#retrieve-the-users-own-attributes-1",
  title: _jsx(_Fragment, {
    children: "Retrieve the user's own attributes"
  })
}, {
  depth: 2,
  url: "#next-steps-3",
  title: _jsx(_Fragment, {
    children: "Next steps"
  })
}, {
  depth: 3,
  url: "#manage-user-avatar-3",
  title: _jsx(_Fragment, {
    children: "Manage user avatar"
  })
}, {
  depth: 3,
  url: "#create-and-send-a-namecard-using-user-attributes-2",
  title: _jsx(_Fragment, {
    children: "Create and send a namecard using user attributes"
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
  url: "#set-user-attributes-4",
  title: _jsx(_Fragment, {
    children: "Set user attributes"
  })
}, {
  depth: 3,
  url: "#retrieve-user-attributes-4",
  title: _jsx(_Fragment, {
    children: "Retrieve user attributes"
  })
}, {
  depth: 2,
  url: "#next-steps-4",
  title: _jsx(_Fragment, {
    children: "Next steps"
  })
}, {
  depth: 3,
  url: "#manage-user-avatar-4",
  title: _jsx(_Fragment, {
    children: "Manage user avatar"
  })
}, {
  depth: 3,
  url: "#create-and-send-a-namecard-using-user-attributes-3",
  title: _jsx(_Fragment, {
    children: "Create and send a namecard using user attributes"
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
  url: "#set-user-attributes-5",
  title: _jsx(_Fragment, {
    children: "Set user attributes"
  })
}, {
  depth: 3,
  url: "#retrieve-user-attributes-5",
  title: _jsx(_Fragment, {
    children: "Retrieve user attributes"
  })
}, {
  depth: 2,
  url: "#next-steps-5",
  title: _jsx(_Fragment, {
    children: "Next steps"
  })
}, {
  depth: 3,
  url: "#manage-user-avatar-5",
  title: _jsx(_Fragment, {
    children: "Manage user avatar"
  })
}, {
  depth: 3,
  url: "#create-and-send-a-namecard-using-user-attributes-4",
  title: _jsx(_Fragment, {
    children: "Create and send a namecard using user attributes"
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
  url: "#set-user-attributes-6",
  title: _jsx(_Fragment, {
    children: "Set user attributes"
  })
}, {
  depth: 3,
  url: "#retrieve-user-attributes-6",
  title: _jsx(_Fragment, {
    children: "Retrieve user attributes"
  })
}, {
  depth: 2,
  url: "#next-steps-6",
  title: _jsx(_Fragment, {
    children: "Next steps"
  })
}, {
  depth: 3,
  url: "#manage-user-avatar-6",
  title: _jsx(_Fragment, {
    children: "Manage user avatar"
  })
}, {
  depth: 3,
  url: "#create-and-send-a-namecard-using-user-attributes-5",
  title: _jsx(_Fragment, {
    children: "Create and send a namecard using user attributes"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
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
        children: "After joining a Chat channel, a user can update information such as the nickname, avatar, age, and mobile phone number as needed. These are known as user attributes."
      }), _jsx(_components.p, {
        children: "This page shows how to use the Chat SDK to implement managing user attributes."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "User attributes are stored on the Chat server. If you have security concerns, Agora recommends that you manage user attributes yourself.To ensure information security, app users can only modify their own user attributes. Only app admins can modify the user attributes of other users."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech",
        children: "Understand the tech"
      }), _jsxs(_components.p, {
        children: ["The Chat SDK uses ", _jsx(_components.code, {
          children: "UserInfoManager"
        }), " to retrieve, set, and modify user attributes. The following are the core methods:"]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "updateOwnInfo"
          }), ": Set or update user attributes."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "updateOwnInfoByAttributes"
          }), ": Set or update the specified user attribute."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "fetchUserInfoByUserId"
          }), ": Retrieve the user attributes of the specified user."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "fetchUserInfoByAttributes"
          }), ": Retrieve the specified user attributes of the specified user."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Before proceeding, ensure that you meet the following requirements:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["You have integrated the Chat SDK, initialized the SDK and implemented the functionality of registering accounts and login. For details, see ", _jsx(_components.a, {
            href: "../../get-started-sdk",
            children: "Chat SDK quickstart"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["Have a thorough understanding of the API call frequency limit, the maximum size of all the attributes of a specified user, and the maximum size of all user attributes in an app. For details, see ", _jsx(_components.a, {
            href: "../limitations",
            children: "Known limitations"
          }), "."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "implementation",
        children: "Implementation"
      }), _jsx(_components.p, {
        children: "This section shows how to manage user attributes and contacts with the methods provided by the Chat SDK."
      }), _jsx(_components.h3, {
        id: "set-user-attributes",
        children: "Set user attributes"
      }), _jsx(_components.p, {
        children: "Chat users can set and update their own attributes. Refer to the code example to set all the user attributes:"
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
                children: "// Call updateOwnInfo to set all the user attributes"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "UserInfo userInfo "
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
                children: " UserInfo"
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
                children: "userInfo."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setUserId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(ChatClient."
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
                children: "getCurrentUser"
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
                children: "userInfo."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setNickname"
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
                children: '"agora"'
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
                children: "userInfo."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setAvatarUrl"
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
                children: '"http://www.agora.io"'
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
                children: "userInfo."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setBirth"
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
                children: '"2000.10.10"'
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
                children: "userInfo."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setSignature"
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
                children: '"hello world"'
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
                children: "userInfo."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setPhoneNumber"
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
                children: '"13333333333"'
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
                children: "userInfo."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setEmail"
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
                children: '"123456@qq.com"'
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
                children: "userInfo."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setGender"
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
                children: "1"
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
                children: "userInfoManager"
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
                children: "updateOwnInfo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(userInfo, "
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
                children: " ValueCallBack"
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
                children: "(String "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "value"
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
              className: "line"
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
                children: "  });"
              })
            })]
          })
        })
      }), _jsx(_components.p, {
        children: "The following sample code uses avatar as an example to show how to set the specified user attribute:"
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
                children: "// Call updateOwnInfoByAttribute to update the specified attribute of the specified user"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "String url "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "https://download-sdk.oss-cn-beijing.aliyuncs.com/downloads/IMDemo/avatar/Image1.png"'
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
                children: "userInfoManager"
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
                children: "updateOwnInfoByAttribute"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(UserInfoType.AVATAR_URL, url, "
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
                children: " ValueCallBack"
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
                children: "              @"
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
                children: "              public"
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
                children: "(String "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "value"
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
                children: "              }"
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
                children: "              @"
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
                children: "              public"
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
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "              }"
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
      }), _jsxs(_components.p, {
        children: ["Keys listed in the following table are used by default when user attributes are set on the client side, including the nickname, avatar URL, contact information, email address, gender, signature, birthday and extension fields. When you call the ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/user-attributes-management#setting-user-attributes",
          children: "RESTful API to set"
        }), " or ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/user-attributes-management#deleting-user-attributes",
          children: "delete"
        }), " these user attributes, you must pass in the following keys to make sure that the client can obtain the settings from the server:"]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Field"
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
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "nickname"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user nickname, which can contain at most 64 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "avatarurl"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user avatar URL, which can contain at most 256 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "phone"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's phone number, which can contain at most 32 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "mail"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's email address, which can contain at most 64 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "gender"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Number"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The user gender: ", _jsx(_components.code, {
                children: "1"
              }), "：Male; ", _jsx(_components.code, {
                children: "2"
              }), "：Female;(Default) ", _jsx(_components.code, {
                children: "0"
              }), ": Unknown;Other values are invalid."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "sign"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's signature, which can contain at most 256 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "birth"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's birthday, which can contain at most 256 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "ext"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The extension fields."
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "retrieve-user-attributes",
        children: "Retrieve user attributes"
      }), _jsxs(_components.p, {
        children: ["You can use ", _jsx(_components.code, {
          children: "fetchUserInfoByUserId"
        }), " to retrieve the user attributes of the specified users. For each method call, you can retrieve the user attributes of a maximum of 100 users."]
      }), _jsx(_components.p, {
        children: "Refer to the following code example:"
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
                children: "// Call fetchUserInfoByUserId to retrieve all the attributes of the specified user."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "String"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "[] userId "
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " String"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "["
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "1"
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
                children: "//username indicates the user ID."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "userId["
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
                children: "] "
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
                children: " username;"
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
                children: "()."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "userInfoManager"
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
                children: "fetchUserInfoByUserId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(userId, "
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
                children: " ValueCallBack>() {});"
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
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Call fetchUserInfoByAttribute to retrieve the specified user attribute"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "String"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "[] userId "
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " String"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "["
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "1"
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
                children: "userId["
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
                children: "] "
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
                children: "getCurrentUser"
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
                children: "UserInfoType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "[] userInfoTypes "
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " UserInfoType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "["
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
                children: "userInfoTypes["
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
                children: "] "
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
                children: " UserInfoType.NICKNAME;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "userInfoTypes["
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "1"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "] "
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
                children: " UserInfoType.AVATAR_URL;"
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
                children: "()."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "userInfoManager"
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
                children: "fetchUserInfoByAttribute"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(userId, userInfoTypes,"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "           new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ValueCallBack>() {});"
              })]
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "next-steps",
        children: "Next steps"
      }), _jsx(_components.p, {
        children: "This section introduces extra functions you can implement in your app using user attributes and contact management."
      }), _jsx(_components.h3, {
        id: "manage-user-avatar",
        children: "Manage user avatar"
      }), _jsx(_components.p, {
        children: "The Chat SDK only supports storing the URL address of the avatar file rather than the file itself. To manage user avatars, you need to use a third-party file storage service."
      }), _jsx(_components.p, {
        children: "To implement user avatar management in your app, take the following steps:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsx(_components.li, {
          children: "Upload the avatar file to the third-party file storage service. Once the file is successfully uploaded, you get a URL address of the avatar file."
        }), `
`, _jsxs(_components.li, {
          children: ["Set the ", _jsx(_components.code, {
            children: "avatarUrl"
          }), " parameter in user attributes as the URL address of the avatar file."]
        }), `
`, _jsxs(_components.li, {
          children: ["To display the avatar, call ", _jsx(_components.code, {
            children: "fetchUserInfoByUserId"
          }), " to retrieve the URL of the avatar file, and then render the image on the local UI."]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "create-and-send-a-namecard-using-user-attributes",
        children: "Create and send a namecard using user attributes"
      }), _jsx(_components.p, {
        children: "Namecard messages are custom messages that include the user ID, nickname, avatar, email address, and phone number of the specified user. To create and send a namecard, take the following steps:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: ["Create a custom message and set the ", _jsx(_components.code, {
            children: "event"
          }), " of the custom message as ", _jsx(_components.code, {
            children: "USER_CARD_EVENT"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["Add ", _jsx(_components.code, {
            children: "userId"
          }), ", ", _jsx(_components.code, {
            children: "getNickname"
          }), ", and ", _jsx(_components.code, {
            children: "getAvatarUrl"
          }), " as fileds in ", _jsx(_components.code, {
            children: "params"
          }), ". Send the custom message."]
        }), `
`]
      }), _jsx(_components.p, {
        children: "The following is sample code for creating and sending a namecard message:"
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
                children: "// Creates a cutom message"
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
                children: "(ChatMessage.Type.CUSTOM);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                CustomMessageBody body "
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
                children: " CustomMessageBody"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(DemoConstant.USER_CARD_EVENT);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                Map params "
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " HashMap<>();"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                params."
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
                children: "(DemoConstant.USER_CARD_ID,userId);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                params."
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
                children: "(DemoConstant.USER_CARD_NICK,user."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getNickname"
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
                children: "                params."
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
                children: "(DemoConstant.USER_CARD_AVATAR,user."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getAvatarUrl"
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
                children: "                body."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setParams"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(params);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                message."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setBody"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(body);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                message."
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
                children: "(toUser);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Sends the custom message"
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
        children: "After joining a Chat channel, a user can update information such as the nickname, avatar, age, and mobile phone number as needed. These are known as user attributes."
      }), _jsx(_components.p, {
        children: "This page shows how to use the Chat SDK to implement managing user attributes."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "User attributes are stored on the Chat server. If you have security concerns, Agora recommends that you manage user attributes yourself.To ensure information security, app users can only modify their own user attributes. Only app admins can modify the user attributes of other users."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-1",
        children: "Understand the tech"
      }), _jsxs(_components.p, {
        children: ["The Chat SDK uses ", _jsx(_components.code, {
          children: "UserInfoManager"
        }), " to retrieve, set, and modify user attributes. The following are the core methods:"]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "updateOwnUserInfo"
          }), ": Set or update user attributes."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "fetchUserInfoById"
          }), ": Retrieve the user attributes of the specified user."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-1",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Before proceeding, ensure that you meet the following requirements:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["You have integrated the Chat SDK, initialized the SDK and implemented the functionality of registering accounts and login. For details, see ", _jsx(_components.a, {
            href: "../../get-started-sdk",
            children: "Chat SDK quickstart"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["Have a thorough understanding of the API call frequency limit, the maximum size of all the attributes of a specified user, and the maximum size of all user attributes in an app. For details, see ", _jsx(_components.a, {
            href: "../limitations",
            children: "Known limitations"
          }), "."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "implementation-1",
        children: "Implementation"
      }), _jsx(_components.p, {
        children: "This section shows how to manage user attributes and contacts with the methods provided by the Chat SDK."
      }), _jsx(_components.h3, {
        id: "set-user-attributes-1",
        children: "Set user attributes"
      }), _jsx(_components.p, {
        children: "Chat users can set and update their own attributes. Refer to the code example to set all the user attributes:"
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
                children: "// Sets the user attributes."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "AgoraChatUserInfo "
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
                children: "userInfo "
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
                children: " [[AgoraChatUserInfo "
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
                children: "init"
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
                children: "userInfo.userId "
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
                children: " AgoraChatClient.sharedClient.currentUsername;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "userInfo.nickName "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' @"agora"'
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
                children: "userInfo.avatarUrl "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' @"http://www.agora.io"'
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
                children: "userInfo.birth "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' @"2000.10.10"'
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
                children: "userInfo.sign "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' @"hello world"'
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
                children: "userInfo.phone "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' @"12333333333"'
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
                children: "userInfo.mail "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' @"123456@qq.com"'
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
                children: "userInfo.gender "
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
                children: " 1"
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
                children: "[AgoraChatClient.sharedClient.userInfoManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "updateOwnUserInfo:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "userInfo "
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
                children: "(AgoraChatUserInfo "
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
                children: "aUserInfo, AgoraChatError "
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
                children: "aError)"
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
      }), _jsx(_components.p, {
        children: "The following sample code uses avatar as an example to show how to set the specified user attribute:"
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
                children: "url "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' @"https://download-sdk.oss-cn-beijing.aliyuncs.com/downloads/IMDemo/avatar/Image1.png"'
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
                children: "].userInfoManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "updateOwnUserInfo:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "url "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "withType:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "AgoraChatUserInfoTypeAvatarURL "
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
                children: "(AgoraChatUserInfo "
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
                children: "aUserInfo, AgoraChatError "
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
                children: " (aUserInfo "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "&&"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " completion) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "            completion"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(aUserInfo);"
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
        children: ["Keys listed in the following table are used by default when user attributes are set on the client side, including the nickname, avatar URL, contact information, email address, gender, signature, birthday and extension fields. When you call the ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/user-attributes-management#setting-user-attributes",
          children: "RESTful API to set"
        }), " or ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/user-attributes-management#deleting-user-attributes",
          children: "delete"
        }), " these user attributes, you must pass in the following keys to make sure that the client can obtain the settings from the server:"]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Field"
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
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "nickname"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user nickname, which can contain at most 64 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "avatarurl"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user avatar URL, which can contain at most 256 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "phone"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's phone number, which can contain at most 32 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "mail"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's email address, which can contain at most 64 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "gender"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Number"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The user gender: ", _jsx(_components.code, {
                children: "1"
              }), "：Male; ", _jsx(_components.code, {
                children: "2"
              }), "：Female;(Default) ", _jsx(_components.code, {
                children: "0"
              }), ": Unknown;Other values are invalid."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "sign"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's signature, which can contain at most 256 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "birth"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's birthday, which can contain at most 256 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "ext"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The extension fields."
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "retrieve-user-attributes-1",
        children: "Retrieve user attributes"
      }), _jsxs(_components.p, {
        children: ["You can use ", _jsx(_components.code, {
          children: "fetchUserInfoById"
        }), " to retrieve the user attributes of the specified users. For each method call, you can retrieve the user attributes of a maximum of 100 users."]
      }), _jsx(_components.p, {
        children: "Refer to the following code example to retrieve all the attributes of the specified user:"
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
                children: "].userInfoManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "fetchUserInfoById:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "@[AgoraChatClient.sharedClient.currentUsername]     "
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
                children: "aUserDatas, AgoraChatError "
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
      }), _jsx(_components.p, {
        children: "The following sample code shows how to retrieve the specified attributes of the user."
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
                children: "userIds "
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
                children: " @["
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '@"user1"'
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
                children: '@"user2"'
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
                children: "userInfoTypes "
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
                children: " @[@(AgoraChatUserInfoTypeAvatarURL),@(AgoraChatUserInfoTypePhone),@(AgoraChatUserInfoTypeMail)];"
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
                children: "].userInfoManager "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "fetchUserInfoById:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "userIds "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "type:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "userInfoTypes "
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
                children: "aUserDatas, AgoraChatError "
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
      }), _jsx(_components.p, {
        children: "This section introduces extra functions you can implement in your app using user attributes and contact management."
      }), _jsx(_components.h3, {
        id: "manage-user-avatar-1",
        children: "Manage user avatar"
      }), _jsx(_components.p, {
        children: "The Chat SDK only supports storing the URL address of the avatar file rather than the file itself. To manage user avatars, you need to use a third-party file storage service."
      }), _jsx(_components.p, {
        children: "To implement user avatar management in your app, take the following steps:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsx(_components.li, {
          children: "Upload the avatar file to the third-party file storage service. Once the file is successfully uploaded, you get a URL address of the avatar file."
        }), `
`, _jsxs(_components.li, {
          children: ["Set the ", _jsx(_components.code, {
            children: "avatarUrl"
          }), " parameter in user attributes as the URL address of the avatar file."]
        }), `
`, _jsxs(_components.li, {
          children: ["To display the avatar, call ", _jsx(_components.code, {
            children: "fetchUserInfoById"
          }), " to retrieve the URL of the avatar file, and then render the image on the local UI."]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "create-and-send-a-namecard-using-user-attributes-1",
        children: "Create and send a namecard using user attributes"
      }), _jsx(_components.p, {
        children: "Namecard messages are custom messages that include the user ID, nickname, avatar, email address, and phone number of the specified user. To create and send a namecard, take the following steps:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: ["Create a custom message and set the ", _jsx(_components.code, {
            children: "event"
          }), " of the custom message as ", _jsx(_components.code, {
            children: "userCard"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["Add ", _jsx(_components.code, {
            children: "userId"
          }), ", ", _jsx(_components.code, {
            children: "nickname"
          }), ", and ", _jsx(_components.code, {
            children: "avatar"
          }), " as fileds in ", _jsx(_components.code, {
            children: "ext"
          }), ". Send the custom message."]
        }), `
`]
      }), _jsx(_components.p, {
        children: "The following is sample code for creating and sending a namecard message:"
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
                children: "AgoraChatCustomMessageBody "
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
                children: " [[AgoraChatCustomMessageBody "
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
                children: "init"
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
                children: "    body.event "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' @"userCard"'
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "    NSDictionary"
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
                children: "messageExt "
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
                children: '@"userId"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":AgoraChatClient.sharedClient.currentUsername,"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '                          @"nickname"'
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
                children: '@"nickname"'
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
                children: '                          @"avatar"'
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
                children: '@"https://download-sdk.oss-cn-beijing.aliyuncs.com/downloads/IMDemo/avatar/Image1.png"'
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                        };"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    body.ext "
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
                children: " messageExt;"
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
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '@"conversationID"'
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "                                                          from:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '@"sender"'
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "                                                            to:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '@"receiver"'
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "                                                          body:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "body"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "                                                           ext:nil"
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
                children: "    // send message"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    [[AgoraChatClient "
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
                children: "(AgoraChatMessage "
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
                children: "message, AgoraChatError "
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
                children: "error) {"
              })]
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
        children: "After joining a Chat channel, a user can update information such as the nickname, avatar, age, and mobile phone number as needed. These are known as user attributes."
      }), _jsx(_components.p, {
        children: "This page shows how to use the Chat SDK to implement managing user attributes."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "User attributes are stored on the Chat server. If you have security concerns, Agora recommends that you manage user attributes yourself.To ensure information security, app users can only modify their own user attributes. Only app admins can modify the user attributes of other users."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-2",
        children: "Understand the tech"
      }), _jsxs(_components.p, {
        children: ["The Chat SDK uses ", _jsx(_components.code, {
          children: "ChatUserInfoManager"
        }), " to retrieve, set, and modify user attributes. The following are the core methods:"]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "updateOwnInfo"
          }), ": Set and update user attributes."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "fetchUserInfoById"
          }), ": Retrieve the user attributes of the specified user."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "fetchOwnInfo"
          }), ": Retrieve the user's own user attributes."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-2",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Before proceeding, ensure that you meet the following requirements:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["You have integrated the Chat SDK, initialized the SDK and implemented the functionality of registering accounts and login. For details, see ", _jsx(_components.a, {
            href: "../../get-started-sdk",
            children: "Chat SDK quickstart"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["Have a thorough understanding of the API call frequency limit, the maximum size of all the attributes of a specified user, and the maximum size of all user attributes in an app. For details, see ", _jsx(_components.a, {
            href: "../limitations",
            children: "Known limitations"
          }), "."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "implementation-2",
        children: "Implementation"
      }), _jsx(_components.p, {
        children: "This section shows how to manage user attributes and contacts with the methods provided by the Chat SDK."
      }), _jsx(_components.h3, {
        id: "set-user-attributes-2",
        children: "Set user attributes"
      }), _jsx(_components.p, {
        children: "Chat users can set and update their own attributes. Refer to the code example to set user attributes:"
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
                children: ".getInstance.userInfoManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "updateUserInfo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(userInfo);"
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
                children: " (e) {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Fails to update user attributes. See e.code for the error code, and e.description for the error description."
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
        children: ["Keys listed in the following table are used by default when user attributes are set on the client side, including the nickname, avatar URL, contact information, email address, gender, signature, birthday and extension fields. When you call the ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/user-attributes-management#setting-user-attributes",
          children: "RESTful API to set"
        }), " or ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/user-attributes-management#deleting-user-attributes",
          children: "delete"
        }), " these user attributes, you must pass in the following keys to make sure that the client can obtain the settings from the server:"]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Field"
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
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "nickname"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user nickname, which can contain at most 64 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "avatarurl"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user avatar URL, which can contain at most 256 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "phone"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's phone number, which can contain at most 32 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "mail"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's email address, which can contain at most 64 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "gender"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Number"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The user gender: ", _jsx(_components.code, {
                children: "1"
              }), "：Male; ", _jsx(_components.code, {
                children: "2"
              }), "：Female;(Default) ", _jsx(_components.code, {
                children: "0"
              }), ": Unknown;Other values are invalid."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "sign"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's signature, which can contain at most 256 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "birth"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's birthday, which can contain at most 256 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "ext"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The extension fields."
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "retrieve-user-attributes-2",
        children: "Retrieve user attributes"
      }), _jsxs(_components.p, {
        children: ["You can use ", _jsx(_components.code, {
          children: "fetchUserInfoById"
        }), " to retrieve the user attributes of the specified users. For each method call, you can retrieve the user attributes of a maximum of 100 users."]
      }), _jsx(_components.p, {
        children: "Refer to the following code example:"
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
                children: "List"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " list "
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
                children: " ["
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"tom"'
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
                children: '"json"'
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " userInfos "
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
                children: ".getInstance.userInfoManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "fetchUserInfoById"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(list);"
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
                children: " (e) {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Fails to retrieve the user attributes. See e.code for the error code, and e.description for the error description."
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
        id: "retrieve-the-users-own-attributes",
        children: "Retrieve the user's own attributes"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "fetchOwnInfo"
        }), " to fetch the user attributes of the local user:"]
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
                children: "  ChatUserInfo"
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
                children: " userInfo "
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
                children: ".getInstance.userInfoManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "fetchOwnInfo"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Fails to retrieve the user attributes of the current user. See e.code for the error code, and e.description for the error description."
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
        id: "next-steps-2",
        children: "Next steps"
      }), _jsx(_components.p, {
        children: "This section introduces extra functions you can implement in your app using user attributes and contact management."
      }), _jsx(_components.h3, {
        id: "manage-user-avatar-2",
        children: "Manage user avatar"
      }), _jsx(_components.p, {
        children: "The Chat SDK only supports storing the URL address of the avatar file rather than the file itself. To manage user avatars, you need to use a third-party file storage service."
      }), _jsx(_components.p, {
        children: "To implement user avatar management in your app, take the following steps:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsx(_components.li, {
          children: "Upload the avatar file to the third-party file storage service. Once the file is successfully uploaded, you get a URL address of the avatar file."
        }), `
`, _jsxs(_components.li, {
          children: ["Set the ", _jsx(_components.code, {
            children: "avatarUrl"
          }), " parameter in user attributes as the URL address of the avatar file."]
        }), `
`, _jsxs(_components.li, {
          children: ["To display the avatar, call ", _jsx(_components.code, {
            children: "fetchUserInfoById"
          }), " to retrieve the URL of the avatar file, and then render the image on the local UI."]
        }), `
`]
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
        children: "After joining a Chat channel, a user can update information such as the nickname, avatar, age, and mobile phone number as needed. These are known as user attributes."
      }), _jsx(_components.p, {
        children: "This page shows how to use the Chat SDK to implement managing user attributes."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "User attributes are stored on the Chat server. If you have security concerns, Agora recommends that you manage user attributes yourself.To ensure information security, app users can only modify their own user attributes. Only app admins can modify the user attributes of other users."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-3",
        children: "Understand the tech"
      }), _jsxs(_components.p, {
        children: ["The Chat SDK uses ", _jsx(_components.code, {
          children: "ChatUserInfoManager"
        }), " to retrieve, set, and modify user attributes. The following are the core methods:"]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "updateOwnInfo"
          }), ": Set and update user attributes."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "fetchUserInfoById"
          }), ": Retrieve the user attributes of the specified user."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "fetchOwnInfo"
          }), ": Retrieve the user's own user attributes."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-3",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Before proceeding, ensure that you meet the following requirements:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["You have integrated the Chat SDK, initialized the SDK and implemented the functionality of registering accounts and login. For details, see ", _jsx(_components.a, {
            href: "../../get-started-sdk",
            children: "Chat SDK quickstart"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["Have a thorough understanding of the API call frequency limit, the maximum size of all the attributes of a specified user, and the maximum size of all user attributes in an app. For details, see ", _jsx(_components.a, {
            href: "../limitations",
            children: "Known limitations"
          }), "."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "implementation-3",
        children: "Implementation"
      }), _jsx(_components.p, {
        children: "This section shows how to manage user attributes and contacts with the methods provided by the Chat SDK."
      }), _jsx(_components.h3, {
        id: "set-user-attributes-3",
        children: "Set user attributes"
      }), _jsx(_components.p, {
        children: "Chat users can set and update their own attributes. Refer to the code example to set user attributes:"
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
                children: "// Update the user attributes."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// All the user attributes except user ID can be updated."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// You can update one or more attributes with each method call."
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
                children: "  .userManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "updateOwnUserInfo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "({"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    nickName,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    avatarUrl,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    mail,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    phone,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    gender,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    sign,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    birth,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    ext,"
              })
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
                children: '"update userInfo success."'
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
                children: '"update userInfo fail."'
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
        children: ["Keys listed in the following table are used by default when user attributes are set on the client side, including the nickname, avatar URL, contact information, email address, gender, signature, birthday and extension fields. When you call the ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/user-attributes-management#setting-user-attributes",
          children: "RESTful API to set"
        }), " or ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/user-attributes-management#deleting-user-attributes",
          children: "delete"
        }), " these user attributes, you must pass in the following keys to make sure that the client can obtain the settings from the server:"]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Field"
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
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "nickname"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user nickname, which can contain at most 64 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "avatarurl"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user avatar URL, which can contain at most 256 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "phone"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's phone number, which can contain at most 32 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "mail"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's email address, which can contain at most 64 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "gender"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Number"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The user gender: ", _jsx(_components.code, {
                children: "1"
              }), "：Male; ", _jsx(_components.code, {
                children: "2"
              }), "：Female;(Default) ", _jsx(_components.code, {
                children: "0"
              }), ": Unknown;Other values are invalid."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "sign"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's signature, which can contain at most 256 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "birth"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's birthday, which can contain at most 256 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "ext"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The extension fields."
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "retrieve-user-attributes-3",
        children: "Retrieve user attributes"
      }), _jsxs(_components.p, {
        children: ["You can use ", _jsx(_components.code, {
          children: "fetchUserInfoById"
        }), " to retrieve the user attributes of the specified users. For each method call, you can retrieve the user attributes of a maximum of 100 users."]
      }), _jsx(_components.p, {
        children: "Refer to the following code example:"
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
                children: "// Specify one or more user IDs."
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
                children: " userIds"
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
                children: " ["
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"tom"'
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
                children: '"json"'
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
                children: "// Call fetchUserInfoById"
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
                children: "  .userManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "fetchUserInfoById"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(userIds)"
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
                children: "users"
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
                children: '"get userInfo success."'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", users);"
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
                children: '"get userInfo fail."'
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
      }), _jsx(_components.h3, {
        id: "retrieve-the-users-own-attributes-1",
        children: "Retrieve the user's own attributes"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.code, {
          children: "fetchOwnInfo"
        }), " to fetch the user attributes of the local user:"]
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
                children: "  .userManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "fetchOwnInfo"
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
                children: "(("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "users"
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
                children: '"get userInfo success."'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", users);"
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
                children: '"get userInfo fail."'
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
      }), _jsx(_components.h2, {
        id: "next-steps-3",
        children: "Next steps"
      }), _jsx(_components.p, {
        children: "This section introduces extra functions you can implement in your app using user attributes and contact management."
      }), _jsx(_components.h3, {
        id: "manage-user-avatar-3",
        children: "Manage user avatar"
      }), _jsx(_components.p, {
        children: "The Chat SDK only supports storing the URL address of the avatar file rather than the file itself. To manage user avatars, you need to use a third-party file storage service."
      }), _jsx(_components.p, {
        children: "To implement user avatar management in your app, take the following steps:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsx(_components.li, {
          children: "Upload the avatar file to the third-party file storage service. Once the file is successfully uploaded, you get a URL address of the avatar file."
        }), `
`, _jsxs(_components.li, {
          children: ["Set the ", _jsx(_components.code, {
            children: "avatarUrl"
          }), " parameter in user attributes as the URL address of the avatar file."]
        }), `
`, _jsxs(_components.li, {
          children: ["To display the avatar, call ", _jsx(_components.code, {
            children: "fetchUserInfoById"
          }), " to retrieve the URL of the avatar file, and then render the image on the local UI."]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "create-and-send-a-namecard-using-user-attributes-2",
        children: "Create and send a namecard using user attributes"
      }), _jsx(_components.p, {
        children: "Namecard messages are custom messages that include the user ID, nickname, avatar, email address, and phone number of the specified user. To create and send a namecard, take the following steps:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: ["Create a custom message and set the ", _jsx(_components.code, {
            children: "event"
          }), " of the custom message as ", _jsx(_components.code, {
            children: "userCard"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["Add ", _jsx(_components.code, {
            children: "userId"
          }), ", ", _jsx(_components.code, {
            children: "nickname"
          }), ", and ", _jsx(_components.code, {
            children: "avatarUrl"
          }), " as fileds in ", _jsx(_components.code, {
            children: "ext"
          }), ". Send the custom message."]
        }), `
`]
      }), _jsx(_components.p, {
        children: "The following is sample code for creating and sending a namecard message:"
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
                children: "// Customize the message."
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
                children: " event"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "userCard"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// You can also add more fields in ext"
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
                children: " ext"
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
                children: " { userId: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"userId"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", nickname: "
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
                children: ", avatarUrl: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"avatarUrl"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " };"
              })]
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
                children: "createCustomMessage"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(targetId, event, chatType, {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  params: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "JSON"
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
                children: "parse"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(ext),"
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
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Call sendMessage to send the customized message."
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
                children: "(msg"
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
                children: " ChatMessageCallback"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "())"
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
                children: '"send message success."'
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
                children: '"send message fail."'
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
        children: "After joining a Chat channel, a user can update information such as the nickname, avatar, age, and mobile phone number as needed. These are known as user attributes."
      }), _jsx(_components.p, {
        children: "This page shows how to use the Chat SDK to implement managing user attributes."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "User attributes are stored on the Chat server. If you have security concerns, Agora recommends that you manage user attributes yourself.To ensure information security, app users can only modify their own user attributes. Only app admins can modify the user attributes of other users."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-4",
        children: "Understand the tech"
      }), _jsxs(_components.p, {
        children: ["The Chat SDK uses ", _jsx(_components.code, {
          children: "IUserInfoManager"
        }), " to retrieve, set, and modify user attributes. The following are the core methods:"]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "UpdateOwnInfo"
          }), ": Set and update user attributes."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "FetchUserInfoByUserId"
          }), ": Retrieve the user attributes of the specified user."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-4",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Before proceeding, ensure that you meet the following requirements:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["You have integrated the Chat SDK, initialized the SDK and implemented the functionality of registering accounts and login. For details, see ", _jsx(_components.a, {
            href: "../../get-started-sdk",
            children: "Chat SDK quickstart"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["Have a thorough understanding of the API call frequency limit, the maximum size of all the attributes of a specified user, and the maximum size of all user attributes in an app. For details, see ", _jsx(_components.a, {
            href: "../limitations",
            children: "Known limitations"
          }), "."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "implementation-4",
        children: "Implementation"
      }), _jsx(_components.p, {
        children: "This section shows how to manage user attributes and contacts with the methods provided by the Chat SDK."
      }), _jsx(_components.h3, {
        id: "set-user-attributes-4",
        children: "Set user attributes"
      }), _jsx(_components.p, {
        children: "Chat users can set and update their own attributes. Refer to the code example to set user attributes:"
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
                children: "// Set the user attributes of the specified user."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "UserInfo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " userInfo"
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
                children: "userInfo.userId "
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
                children: " currentId;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "userInfo.nickName "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "chatuser"'
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
                children: "userInfo.avatarUrl "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "http://www.easemob.com"'
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
                children: "userInfo.birth "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "2000.10.10"'
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
                children: "userInfo.signature "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "hello world"'
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
                children: "userInfo.phoneNumber "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "13333333333"'
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
                children: "userInfo.email "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "123456@qq.com"'
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
                children: "userInfo.gender "
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
                children: " 1"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "; "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// 1 indicates that the gender is male. 2 means female."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "SDKClient.Instance.UserInfoManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "UpdateOwnInfo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(userInfo, "
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
                children: "  onSuccess"
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
                children: "  },"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "  onError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":("
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
                children: "));"
              })
            })]
          })
        })
      }), _jsxs(_components.p, {
        children: ["Keys listed in the following table are used by default when user attributes are set on the client side, including the nickname, avatar URL, contact information, email address, gender, signature, birthday and extension fields. When you call the ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/user-attributes-management#setting-user-attributes",
          children: "RESTful API to set"
        }), " or ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/user-attributes-management#deleting-user-attributes",
          children: "delete"
        }), " these user attributes, you must pass in the following keys to make sure that the client can obtain the settings from the server:"]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Field"
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
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "nickname"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user nickname, which can contain at most 64 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "avatarurl"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user avatar URL, which can contain at most 256 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "phone"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's phone number, which can contain at most 32 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "mail"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's email address, which can contain at most 64 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "gender"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Number"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The user gender: ", _jsx(_components.code, {
                children: "1"
              }), "：Male; ", _jsx(_components.code, {
                children: "2"
              }), "：Female;(Default) ", _jsx(_components.code, {
                children: "0"
              }), ": Unknown;Other values are invalid."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "sign"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's signature, which can contain at most 256 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "birth"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's birthday, which can contain at most 256 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "ext"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The extension fields."
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "retrieve-user-attributes-4",
        children: "Retrieve user attributes"
      }), _jsxs(_components.p, {
        children: ["You can use ", _jsx(_components.code, {
          children: "FetchUserInfoByUserId"
        }), " to retrieve the user attributes of the specified users. For each method call, you can retrieve the user attributes of a maximum of 100 users."]
      }), _jsx(_components.p, {
        children: "Refer to the following code example:"
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
                children: "// Retrieve user attributes of one or multiple users."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
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
                children: " idList"
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
                children: " List"
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
                children: "idList."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Add"
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
                children: '"username"'
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
                children: "SDKClient.Instance.UserInfoManager.FetchUserInfoByUserId"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "SDKClient.Instance.UserInfoManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "FetchUserInfoByUserId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(idList, type, startId, loadCount, new ValueCallBack"
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
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // `result` is in the format of Dictionary"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  onSuccess"
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
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Traverse all the user attributes in the dictionary"
              })
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  onError"
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
                children: "("
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
                children: "));"
              })
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "next-steps-4",
        children: "Next steps"
      }), _jsx(_components.p, {
        children: "This section introduces extra functions you can implement in your app using user attributes and contact management."
      }), _jsx(_components.h3, {
        id: "manage-user-avatar-4",
        children: "Manage user avatar"
      }), _jsx(_components.p, {
        children: "The Chat SDK only supports storing the URL address of the avatar file rather than the file itself. To manage user avatars, you need to use a third-party file storage service."
      }), _jsx(_components.p, {
        children: "To implement user avatar management in your app, take the following steps:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsx(_components.li, {
          children: "Upload the avatar file to the third-party file storage service. Once the file is successfully uploaded, you get a URL address of the avatar file."
        }), `
`, _jsxs(_components.li, {
          children: ["Set the ", _jsx(_components.code, {
            children: "avatarUrl"
          }), " parameter in user attributes as the URL address of the avatar file."]
        }), `
`, _jsxs(_components.li, {
          children: ["To display the avatar, call ", _jsx(_components.code, {
            children: "FetchUserInfoByUserId"
          }), " to retrieve the URL of the avatar file, and then render the image on the local UI."]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "create-and-send-a-namecard-using-user-attributes-3",
        children: "Create and send a namecard using user attributes"
      }), _jsx(_components.p, {
        children: "Namecard messages are custom messages that include the user ID, nickname, avatar, email address, and phone number of the specified user. To create and send a namecard, take the following steps:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: ["Create a custom message and set the ", _jsx(_components.code, {
            children: "event"
          }), " of the custom message as ", _jsx(_components.code, {
            children: "userCard"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["Add ", _jsx(_components.code, {
            children: "userID"
          }), ", ", _jsx(_components.code, {
            children: "nickname"
          }), ", and ", _jsx(_components.code, {
            children: "avatarUrl"
          }), " as fileds in ", _jsx(_components.code, {
            children: "ext"
          }), ". Send the custom message."]
        }), `
`]
      }), _jsx(_components.p, {
        children: "The following is sample code for creating and sending a namecard message:"
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " event"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "userCard"'
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Dictionary"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " adict"
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
                children: " Dictionary"
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
                children: "adict."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Add"
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
                children: '"userId"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", userInfo.userId);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "adict."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Add"
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
                children: ", userInfo. nickname);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "adict."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Add"
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
                children: '"avatarUrl"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", userInfo.avatarUrl);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// You can add more fields."
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
                children: "// Create a custom message."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Message"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
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
                children: " Message."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "CreateCustomSendMessage"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(toChatUsername, event, adict);"
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
                children: "SDKClient.Instance.ChatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "SendMessage"
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
                children: "ref"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " msg, "
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
                children: "   onSuccess"
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
                children: "      Debug."
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
                children: '$"'
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
                children: "msg"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "MsgId"
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
                children: 'Sending success"'
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
                children: "   },"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "   onError"
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
                children: "      Debug."
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
                children: '$"'
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
                children: "msg"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "MsgId"
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
                children: "Sending failure，errCode="
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
                children: ", errDesc="
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
                children: "   }"
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
        children: "After joining a Chat channel, a user can update information such as the nickname, avatar, age, and mobile phone number as needed. These are known as user attributes."
      }), _jsx(_components.p, {
        children: "This page shows how to use the Chat SDK to implement managing user attributes."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "User attributes are stored on the Chat server. If you have security concerns, Agora recommends that you manage user attributes yourself.To ensure information security, app users can only modify their own user attributes. Only app admins can modify the user attributes of other users."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-5",
        children: "Understand the tech"
      }), _jsxs(_components.p, {
        children: ["The Chat SDK uses ", _jsx(_components.code, {
          children: "IUserInfoManager"
        }), " to retrieve, set, and modify user attributes. The following are the core methods:"]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "UpdateOwnInfo"
          }), ": Set and update user attributes."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "FetchUserInfoByUserId"
          }), ": Retrieve the user attributes of the specified user."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-5",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Before proceeding, ensure that you meet the following requirements:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["You have integrated the Chat SDK, initialized the SDK and implemented the functionality of registering accounts and login. For details, see ", _jsx(_components.a, {
            href: "../../get-started-sdk",
            children: "Chat SDK quickstart"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["Have a thorough understanding of the API call frequency limit, the maximum size of all the attributes of a specified user, and the maximum size of all user attributes in an app. For details, see ", _jsx(_components.a, {
            href: "../limitations",
            children: "Known limitations"
          }), "."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "implementation-5",
        children: "Implementation"
      }), _jsx(_components.p, {
        children: "This section shows how to manage user attributes and contacts with the methods provided by the Chat SDK."
      }), _jsx(_components.h3, {
        id: "set-user-attributes-5",
        children: "Set user attributes"
      }), _jsx(_components.p, {
        children: "Chat users can set and update their own attributes. Refer to the code example to set user attributes:"
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
                children: "// Set the user attributes of the specified user."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "UserInfo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " userInfo"
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
                children: "userInfo.userId "
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
                children: " currentId;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "userInfo.nickName "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "chatuser"'
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
                children: "userInfo.avatarUrl "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "http://www.easemob.com"'
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
                children: "userInfo.birth "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "2000.10.10"'
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
                children: "userInfo.signature "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "hello world"'
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
                children: "userInfo.phoneNumber "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "13333333333"'
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
                children: "userInfo.email "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "123456@qq.com"'
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
                children: "userInfo.gender "
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
                children: " 1"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "; "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// 1 indicates that the gender is male. 2 means female."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "SDKClient.Instance.UserInfoManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "UpdateOwnInfo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(userInfo, "
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
                children: "  onSuccess"
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
                children: "  },"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "  onError"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ":("
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
                children: "));"
              })
            })]
          })
        })
      }), _jsxs(_components.p, {
        children: ["Keys listed in the following table are used by default when user attributes are set on the client side, including the nickname, avatar URL, contact information, email address, gender, signature, birthday and extension fields. When you call the ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/user-attributes-management#setting-user-attributes",
          children: "RESTful API to set"
        }), " or ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/user-attributes-management#deleting-user-attributes",
          children: "delete"
        }), " these user attributes, you must pass in the following keys to make sure that the client can obtain the settings from the server:"]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Field"
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
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "nickname"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user nickname, which can contain at most 64 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "avatarurl"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user avatar URL, which can contain at most 256 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "phone"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's phone number, which can contain at most 32 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "mail"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's email address, which can contain at most 64 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "gender"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Number"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The user gender: ", _jsx(_components.code, {
                children: "1"
              }), "：Male; ", _jsx(_components.code, {
                children: "2"
              }), "：Female;(Default) ", _jsx(_components.code, {
                children: "0"
              }), ": Unknown;Other values are invalid."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "sign"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's signature, which can contain at most 256 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "birth"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's birthday, which can contain at most 256 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "ext"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The extension fields."
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "retrieve-user-attributes-5",
        children: "Retrieve user attributes"
      }), _jsxs(_components.p, {
        children: ["You can use ", _jsx(_components.code, {
          children: "FetchUserInfoByUserId"
        }), " to retrieve the user attributes of the specified users. For each method call, you can retrieve the user attributes of a maximum of 100 users."]
      }), _jsx(_components.p, {
        children: "Refer to the following code example:"
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
                children: "// Retrieve user attributes of one or multiple users."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
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
                children: " idList"
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
                children: " List"
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
                children: "idList."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Add"
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
                children: '"username"'
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
                children: "SDKClient.Instance.UserInfoManager.FetchUserInfoByUserId"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "SDKClient.Instance.UserInfoManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "FetchUserInfoByUserId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(idList, type, startId, loadCount, new ValueCallBack"
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
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // `result` is in the format of Dictionary"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  onSuccess"
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
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Traverse all the user attributes in the dictionary"
              })
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  onError"
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
                children: "("
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
                children: "));"
              })
            })]
          })
        })
      }), _jsx(_components.h2, {
        id: "next-steps-5",
        children: "Next steps"
      }), _jsx(_components.p, {
        children: "This section introduces extra functions you can implement in your app using user attributes and contact management."
      }), _jsx(_components.h3, {
        id: "manage-user-avatar-5",
        children: "Manage user avatar"
      }), _jsx(_components.p, {
        children: "The Chat SDK only supports storing the URL address of the avatar file rather than the file itself. To manage user avatars, you need to use a third-party file storage service."
      }), _jsx(_components.p, {
        children: "To implement user avatar management in your app, take the following steps:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsx(_components.li, {
          children: "Upload the avatar file to the third-party file storage service. Once the file is successfully uploaded, you get a URL address of the avatar file."
        }), `
`, _jsxs(_components.li, {
          children: ["Set the ", _jsx(_components.code, {
            children: "avatarUrl"
          }), " parameter in user attributes as the URL address of the avatar file."]
        }), `
`, _jsxs(_components.li, {
          children: ["To display the avatar, call ", _jsx(_components.code, {
            children: "FetchUserInfoByUserId"
          }), " to retrieve the URL of the avatar file, and then render the image on the local UI."]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "create-and-send-a-namecard-using-user-attributes-4",
        children: "Create and send a namecard using user attributes"
      }), _jsx(_components.p, {
        children: "Namecard messages are custom messages that include the user ID, nickname, avatar, email address, and phone number of the specified user. To create and send a namecard, take the following steps:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: ["Create a custom message and set the ", _jsx(_components.code, {
            children: "event"
          }), " of the custom message as ", _jsx(_components.code, {
            children: "userCard"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["Add ", _jsx(_components.code, {
            children: "userID"
          }), ", ", _jsx(_components.code, {
            children: "nickname"
          }), ", and ", _jsx(_components.code, {
            children: "avatarUrl"
          }), " as fileds in ", _jsx(_components.code, {
            children: "ext"
          }), ". Send the custom message."]
        }), `
`]
      }), _jsx(_components.p, {
        children: "The following is sample code for creating and sending a namecard message:"
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " event"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "userCard"'
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Dictionary"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " adict"
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
                children: " Dictionary"
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
                children: "adict."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Add"
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
                children: '"userId"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", userInfo.userId);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "adict."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Add"
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
                children: ", userInfo. nickname);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "adict."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Add"
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
                children: '"avatarUrl"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", userInfo.avatarUrl);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// You can add more fields."
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
                children: "// Create a custom message."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Message"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
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
                children: " Message."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "CreateCustomSendMessage"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(toChatUsername, event, adict);"
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
                children: "SDKClient.Instance.ChatManager."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "SendMessage"
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
                children: "ref"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " msg, "
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
                children: "   onSuccess"
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
                children: "      Debug."
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
                children: '$"'
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
                children: "msg"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "MsgId"
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
                children: 'Sending success"'
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
                children: "   },"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "   onError"
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
                children: "      Debug."
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
                children: '$"'
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
                children: "msg"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "MsgId"
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
                children: "Sending failure，errCode="
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
                children: ", errDesc="
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
                children: "   }"
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
        children: "After joining a Chat channel, a user can update information such as the nickname, avatar, age, and mobile phone number as needed. These are known as user attributes."
      }), _jsx(_components.p, {
        children: "This page shows how to use the Chat SDK to implement managing user attributes."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "User attributes are stored on the Chat server. If you have security concerns, Agora recommends that you manage user attributes yourself.To ensure information security, app users can only modify their own user attributes. Only app admins can modify the user attributes of other users."
          })
        })
      }), _jsx(_components.h2, {
        id: "understand-the-tech-6",
        children: "Understand the tech"
      }), _jsxs(_components.p, {
        children: ["The Chat SDK uses ", _jsx(_components.code, {
          children: "UserInfoManager"
        }), " to retrieve, set, and modify user attributes. The following are the core methods:"]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "updateUserInfo"
          }), ": Set or update user attributes."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "fetchUserInfoById"
          }), ": Retrieve the user attributes of the specified user."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "prerequisites-6",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Before proceeding, ensure that you meet the following requirements:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["You have integrated the Chat SDK, initialized the SDK and implemented the functionality of registering accounts and login. For details, see ", _jsx(_components.a, {
            href: "../../get-started-sdk",
            children: "Chat SDK quickstart"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["Have a thorough understanding of the API call frequency limit, the maximum size of all the attributes of a specified user, and the maximum size of all user attributes in an app. For details, see ", _jsx(_components.a, {
            href: "../limitations",
            children: "Known limitations"
          }), "."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "implementation-6",
        children: "Implementation"
      }), _jsx(_components.p, {
        children: "This section shows how to manage user attributes and contacts with the methods provided by the Chat SDK."
      }), _jsx(_components.h3, {
        id: "set-user-attributes-6",
        children: "Set user attributes"
      }), _jsx(_components.p, {
        children: "Chat users can set and update their own attributes. Refer to the code example to set all the user attributes:"
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
                children: "// Sets all user attributes"
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
                children: " options"
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  nickname: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"The nickname"'
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
                children: "  avatarurl: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"https://avatarurl"'
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
                children: "  mail: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"abc@gmail.com"'
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
                children: "  phone: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"phone number"'
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
                children: "  gender: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"female"'
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
                children: "  birth: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"2000-01-01"'
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
                children: "  sign: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"a sign"'
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
                children: "  ext: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "JSON"
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
                children: "stringify"
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
                children: "    nationality: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"China"'
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
                children: "    merit: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"Hello, world！"'
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
                children: "  }),"
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
                children: "chatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "updateUserInfo"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(options)."
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
                children: "  console."
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
                children: "});"
              })
            })]
          })
        })
      }), _jsx(_components.p, {
        children: "The following sample code uses nickname as an example to show how to set the specified user attribute:"
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
            children: [_jsxs(_components.span, {
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
                children: "updateUserInfo"
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
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"Your nickname"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")."
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
                children: "  console."
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
                children: "});"
              })
            })]
          })
        })
      }), _jsxs(_components.p, {
        children: ["Keys listed in the following table are used by default when user attributes are set on the client side, including the nickname, avatar URL, contact information, email address, gender, signature, birthday and extension fields. When you call the ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/user-attributes-management#setting-user-attributes",
          children: "RESTful API to set"
        }), " or ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/im/user-attributes-management#deleting-user-attributes",
          children: "delete"
        }), " these user attributes, you must pass in the following keys to make sure that the client can obtain the settings from the server:"]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Field"
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
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "nickname"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user nickname, which can contain at most 64 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "avatarurl"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user avatar URL, which can contain at most 256 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "phone"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's phone number, which can contain at most 32 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "mail"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's email address, which can contain at most 64 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "gender"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Number"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The user gender: ", _jsx(_components.code, {
                children: "1"
              }), "：Male; ", _jsx(_components.code, {
                children: "2"
              }), "：Female;(Default) ", _jsx(_components.code, {
                children: "0"
              }), ": Unknown;Other values are invalid."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "sign"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's signature, which can contain at most 256 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "birth"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user's birthday, which can contain at most 256 characters."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "ext"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The extension fields."
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "retrieve-user-attributes-6",
        children: "Retrieve user attributes"
      }), _jsxs(_components.p, {
        children: ["You can use ", _jsx(_components.code, {
          children: "fetchUserInfoById"
        }), " to retrieve the user attributes of the specified users. For each method call, you can retrieve the user attributes of a maximum of 100 users."]
      }), _jsx(_components.p, {
        children: "Refer to the following code example to retrieve all the attributes of the specified user:"
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
                children: "/**"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " {String|Array}"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " users"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " - The user ID. You can set it as one user ID, or multiple user IDs in the format of array."
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " */"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "let"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " users "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "user1"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " ||"
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
                children: '"user1"'
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
                children: '"user2"'
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
                children: "chatClient."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "fetchUserInfoById"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(users)."
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
                children: "  console."
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
                children: "});"
              })
            })]
          })
        })
      }), _jsx(_components.p, {
        children: "The following sample code shows how to retrieve the specified attributes of the user."
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
                children: "/**"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " {String|Array}"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " users"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " - The user ID. You can set it as one user ID, or multiple user IDs in the format of array."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " * "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@param"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " {String|Array}"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " properties"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " - The specified attribute."
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " */"
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
                children: "fetchUserInfoById"
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
                children: '"userId"'
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
                children: '"nickname"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")."
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
                children: "  console."
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
                children: "});"
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
                children: "// Retrieves the specified attributes of the specified users."
              })
            }), `
`, _jsx(_components.span, {
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
                children: "fetchUserInfoById"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(["
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"user1"'
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
                children: '"user2"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "], ["
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
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"avatarurl"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "])"
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
      }), _jsx(_components.h2, {
        id: "next-steps-6",
        children: "Next steps"
      }), _jsx(_components.p, {
        children: "This section introduces extra functions you can implement in your app using user attributes and contact management."
      }), _jsx(_components.h3, {
        id: "manage-user-avatar-6",
        children: "Manage user avatar"
      }), _jsx(_components.p, {
        children: "The Chat SDK only supports storing the URL address of the avatar file rather than the file itself. To manage user avatars, you need to use a third-party file storage service."
      }), _jsx(_components.p, {
        children: "To implement user avatar management in your app, take the following steps:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsx(_components.li, {
          children: "Upload the avatar file to the third-party file storage service. Once the file is successfully uploaded, you get a URL address of the avatar file."
        }), `
`, _jsxs(_components.li, {
          children: ["Set the ", _jsx(_components.code, {
            children: "avatarUrl"
          }), " parameter in user attributes as the URL address of the avatar file."]
        }), `
`, _jsxs(_components.li, {
          children: ["To display the avatar, call ", _jsx(_components.code, {
            children: "fetchUserInfoById"
          }), " to retrieve the URL of the avatar file, and then render the image on the local UI."]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "create-and-send-a-namecard-using-user-attributes-5",
        children: "Create and send a namecard using user attributes"
      }), _jsx(_components.p, {
        children: "Namecard messages are custom messages that include the user ID, nickname, avatar, email address, and phone number of the specified user. To create and send a namecard, take the following steps:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: ["Set the message type as ", _jsx(_components.code, {
            children: "custom"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["Set the ", _jsx(_components.code, {
            children: "customEvent"
          }), " of the custom message as ", _jsx(_components.code, {
            children: "userCard"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["Retrieve the values of ", _jsx(_components.code, {
            children: "nickname"
          }), ", ", _jsx(_components.code, {
            children: "mail"
          }), ", and ", _jsx(_components.code, {
            children: "avatarurl"
          }), " from the user attributes, and then set them as the extension of the custom message using ", _jsx(_components.code, {
            children: "customExts"
          }), "."]
        }), `
`]
      }), _jsx(_components.p, {
        children: "The following is sample code for creating and sending a namecard message:"
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
                children: "// Set custom event type as userCard"
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
                children: " customEvent"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " ="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "userCard"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set these attributes as the extension of the custom message using customExts."
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
                children: " customExts"
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  nickname: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"The nickname"'
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
                children: "  avatarurl: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"https://avatarurl"'
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
                children: "  mail: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"abc@gmail.com"'
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
                children: "  phone: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"phone number"'
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
                children: "  gender: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"female"'
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
                children: "  birth: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"2000-01-01"'
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
                children: "  sign: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"a sign"'
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
                children: "const"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Set the message type."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  type: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"custom"'
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
                children: "  // Set the message recipient."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  to: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"username"'
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
                children: "  // Set the message event."
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  customEvent,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Set the message content"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  customExts,"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  chatType: "
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
                children: "};"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Create a custom message."
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
`, _jsx(_components.span, {
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
                children: "send"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(msg)"
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
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"Success"'
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
                children: "e"
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
                children: '"error"'
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
                children: "  });"
              })
            })]
          })
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
