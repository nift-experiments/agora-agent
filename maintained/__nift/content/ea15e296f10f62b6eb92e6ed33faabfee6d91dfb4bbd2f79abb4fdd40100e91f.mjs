import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Integrate offline push",
  description: "Integrate push notifications."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;windows&#x22;,&#x22;unity&#x22;,&#x22;web&#x22;,&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;]" showTabs="true">
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

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    **This feature guide is not available yet.**

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    Follow this guide to integrate and test push notifications in your environment.

    ## Prerequisites [#prerequisites]

    Before proceeding, ensure that you meet the following requirements:

    * You have initialized the Chat SDK. For details, see [SDK quickstart](../../../get-started-sdk).
    * You understand the call frequency limit of the Chat APIs supported by different pricing plans as described in [Limitations](../../limitations).

    ## Integrate FCM push [#integrate-fcm-push]

    This section guides you through integrating FCM with Chat.

    <CalloutContainer type="info">
      <CalloutDescription>
        For Android devices, if FCM and push services from other manufacturers are enabled at the same time, FCM push services will be used first.
      </CalloutDescription>
    </CalloutContainer>

    ### 1. Create a project in Firebase [#1-create-a-project-in-firebase]

    1. Log in to the [Firebase console](https://console.firebase.google.com/) and [add a project](https://firebase.google.com/docs/android/setup/#create-firebase-project).

    2. [Register the application](https://firebase.google.com/docs/android/setup/#register-app) in the project.

       In the **Download and then add config file** step of the **Add Firebase to your Android app** page, click **Download google-services.json** and put the file into your Android app module root directory.

       ![push\\_fcm\\_download\\_googleservice](https://assets-docs.agora.io/images/im/push_fcm_download_googleservice.png)

    3. Query the sender ID. On the **Project settings** page, select the **Cloud Messaging** tab and view **Sender ID**. When uploading the FCM certificate to Agora Console, set the certificate name to the FCM sender ID.

       ![push\\_fcm\\_senderid.png](https://assets-docs.agora.io/images/im/push_fcm_senderid.png)

    4. On the **Project settings** page, select the **Service accounts** tab and click **Generate new private key** to generate a JSON file. Save this file and upload it to Agora Console when using the V1 certificate.

       ![push\\_fcm\\_private\\_key](https://assets-docs.agora.io/images/im/push_fcm_private_key.png)

    ### 2. Upload FCM certificate to Agora Console [#2-upload-fcm-certificate-to-agora-console]

    After successfully logging into Chat, you can upload the FCM push certificate to Agora Console:

    1. Log in to [Agora Console](https://console.agora.io/), and click **Project Management** in the left navigation bar.

    2. On the **Project Management** page, locate the project that has Chat enabled and click **Config**.

    3. On the project editing page, click **Config** next to **Chat**.

    4. On the project config page, select **Features** > **Push Certificate** and click **Add Push Certificate**.

    5. In the pop-up window, select the **Google** tab, and configure the following fields:

       ![push\\_fcm\\_add\\_certificate](https://assets-docs.agora.io/images/im/push_fcm_add_certificate.png)

       | Parameter            | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
       | :------------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
       | **Certificate Type** |        | No       | Select whether to use a V1 certificate or a legacy certificate. **V1**: Recommended. You need to configure a **Private Key**. **Legacy**: Will soon be deprecated. You need to configure a **Push Key**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
       | **Private Key**      | file   | Yes      | Click **Generate new private key** on the **Project settings** > **Service accounts** page of the [Firebase Console](https://console.firebase.google.com) to generate the \`.json\` file, then upload it to Agora Console.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
       | **Push Key**         | String | Yes      | FCM Server Key. Obtain the server key in the &#x2A;*Cloud Messaging API (Legacy)** area of the **Project settings** > **Cloud Messaging** page of the [Firebase Console](https://console.firebase.google.com).   &#x2A;*This parameter is only valid for legacy certificates.**                                                                                                                                                                                                                                                                                                                                                                                                         |
       | **Certificate Name** | String | Yes      | The sender ID configured for the FCM. For the new version of the certificate, you can find the sender ID on the **Project settings** > **Cloud Messaging** page of the [Firebase Console](https://console.firebase.google.com). For legacy certificates, go to the \\***Project settings > Cloud Messaging** page of the [Firebase Console](https://console.firebase.google.com), and get the sender ID in the &#x2A;*Cloud  Messaging API (Legacy)** area.  The certificate name is the only condition used by the Agora server to determine which push channel the target device uses, so ensure that the sender set when integrating FCM in Chat is consistent with what is set here. |
       | **Sound**            | String | No       | The ringtone flag for when the receiver gets the push notification.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
       | **Push Priority**    |        | No       | Message delivery priority. See [Setting the priority of a message](https://firebase.google.cn/docs/cloud-messaging/concept-options#setting-the-priority-of-a-message).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
       | **Push Msg Type**    |        | No       | The type of the message sent to the client through FCM. See [Message types](https://firebase.google.com/docs/cloud-messaging/concept-options#notifications_and_data_messages): **Data**: Data message, processed by the client application. **Notification**: Notification message, automatically processed by FCM SDK. **Both**: Notification messages and data messages can be sent through the FCM client.                                                                                                                                                                                                                                                                           |

    #### Switch from legacy to the V1 certificate [#switch-from-legacy-to-the-v1-certificate]

    The legacy HTTP or XMPP API is being retired on June 20, 2024. In view of this, switch to the latest FCM API (HTTP v1) version of the certificate as soon as possible. See [Firebase Console](https://console.firebase.google.com) for details.

    Make sure that the uploaded V1 certificate is available, as the legacy one will be deleted upon upload. If the new certificate is not available, the push will fail.

    Take the following steps to switch from the old to the new certificate:

    1. Click **Edit** in the **Action** column of the old certificate on the **Push Certificate** page.

       ![push\\_fcm\\_oldcertificate\\_edit](https://assets-docs.agora.io/images/im/push_fcm_oldcertificate_edit.png)

    2. In the **Google** tab of the **Edit Push Certificate** window, switch the **Certificate Type** to **V1**.

       ![push\\_fcm\\_oldcertificate\\_switch](https://assets-docs.agora.io/images/im/push_fcm_oldcertificate_switch.png)

    3. Click **Upload** to upload the locally saved V1 certificate file (\`.json\`).

       ![push\\_fcm\\_newcertificate\\_upload](https://assets-docs.agora.io/images/im/push_fcm_newcertificate_upload.png)

    4. Click **OK** to complete the switch.

    ### 3. Integrate FCM on the client [#3-integrate-fcm-on-the-client]

    Take the following steps to integrate FCM on the client.

    1. In the \`build.gradle\` file of your app project, configure the FCM library dependency:

       \`\`\`java
       plugins {
           id 'com.android.application'
           // Add the Google services Gradle plugin
           id 'com.google.gms.google-services'
       }
       dependencies {
           // ...
           // Import the Firebase BoM
           implementation platform('com.google.firebase:firebase-bom:28.4.1')
           // Declare FCM dependency
           // When using BoM, do not specify versions in Firebase library dependencies
           implementation 'com.google.firebase:firebase-messaging'
       }
       \`\`\`

       In your \`/build.gradle\` file, configure the following:

       \`\`\`java
       plugins {
         // ...
         // Add the dependency for the Google services Gradle plugin
         id 'com.google.gms.google-services' version '4.3.15' apply false
       }
       \`\`\`

       For Gradle 5.0 and above, BoM is automatically enabled; for versions prior to Gradle 5.0, you need to enable it. For details, see [Firebase Android BoM](https://firebase.google.en/docs/android/learn-more#bom) and [Firebase Android SDK Release Notes](https://firebase.google.en/support/release-notes/android).

    2. Sync your project with gradle files, extend \`FirebaseMessagingService\`, and register it in the \`AndroidManifest.xml\` file of your project:

       \`\`\`java
       public class FCMMSGService extends FirebaseMessagingService {
       private static final String TAG = "FCMMSGService";

           @Override
           public void onMessageReceived(RemoteMessage remoteMessage) {
               super.onMessageReceived(remoteMessage);
               if (remoteMessage.getData().size() > 0) {
                   String message = remoteMessage.getData().get("alert");
                   Log.d(TAG, "onMessageReceived: " + message);
        }
           }

           @Override
           public void onNewToken(@NonNull String token) {
               great . onNewToken(token);
               Log.d(TAG, "onNewToken: " + token);
               ChatClient.getInstance().sendFCMTokenToServer(token);
           }
       }
       \`\`\`

       \`\`\`xml
       <service
           android:name=".FCMMSGService"
           android:exported="false">
           <intent-filter>
               <action android:name="com.google.firebase.MESSAGING_EVENT" />
           </intent-filter>
       </service>
       \`\`\`

    3. Initialize the Chat SDK and enable FCM:

       \`\`\`java
       ChatOptions options = new ChatOptions();
       ...
       PushConfig.Builder builder = new PushConfig.Builder(this);
       // Replace with your FCM Sender ID.
       builder.enableFCM("Your FCM sender id");
       // Configure push settings in the ChatOptions class.
       options.setPushConfig(builder.build());
       // Initialize the IM SDK.
       ChatClient.getInstance().init(this, options);
       // Set up push monitoring.
       PushHelper.getInstance().setPushListener(new PushListener() {
           @Override
           public void onError(PushType pushType, long errorCode) {
               EMLog.e("PushClient", "Push client occur a error: " + pushType + " - " + errorCode);
           }
           @Override
           public boolean isSupportPush(PushType pushType, PushConfig pushConfig) {
               // Set whether to enable FCM.
               if(pushType == PushType.FCM) {
                   return GoogleApiAvailabilityLight.getInstance().isGooglePlayServicesAvailable(MainActivity.this)
                               == ConnectionResult.SUCCESS;
               }
               return super.isSupportPush(pushType, pushConfig);
           }
       });
       \`\`\`

    4. Pass the FCM device token to the server.

       When the app is initialized, the FCM SDK generates a unique registration token for the client app on the user's device. Since FCM uses this token to determine which device to send the push message to, the Agora server needs to obtain the client app's registration token before sending the notification request to FCM. FCM then verifies the registration token and sends the notification message to the Android device. It is recommended to place this code on the main page after successfully logging into Chat.

       \`\`\`java
       // Check if FCM is enabled.
       if(GoogleApiAvailabilityLight.getInstance().isGooglePlayServicesAvailable(MainActivity.this) != ConnectionResult.SUCCESS) {
           return;
       }
       FirebaseMessaging.getInstance().getToken().addOnCompleteListener(new OnCompleteListener() {
           @Override
           public void onComplete(@NonNull Task task) {
               if (!task.isSuccessful()) {
                   EMLog.d("PushClient", "Fetching FCM registration token failed:"+task.getException());
                   return;
               }
               // Get the FCM registration token, i.e., the device token.
               String token = task.getResult();
               EMLog.d("FCM", token);
               ChatClient.getInstance().sendFCMTokenToServer(token);
           }
       });
       \`\`\`

    5. Monitor device token generation.

       After the FCM SDK successfully generates a registration token (device token), it will be passed to the \`onNewToken\` callback.

       Rewrite the \`onNewToken\` callback in \`FirebaseMessagingService\`. After the device token is generated, this callback will promptly update the new token to the Chat SDK.

       \`\`\`java
       @Override
       public  void onNewToken( @NonNull  String token) {
           Log.i("MessagingService", "onNewToken: " + token);
           // To send messages to the app or manage app subscriptions on the server, you need to send the FCM registration token to your App Server.
           if(ChatClient.getInstance().isSdkInited()) {
               ChatClient.getInstance().sendFCMTokenToServer(token);
           }
       }
       \`\`\`

    ## Test FCM push [#test-fcm-push]

    After integrating and enabling FCM, you can test whether the push feature is successfully integrated.

    Make sure your test device meets the following conditions:

    * Uses foreign IP addresses to establish connections.
    * Supports Google GMS services (Google Mobile Services).
    * Can access Google network services; otherwise, the device won't be able to receive push notifications from the FCM service.

    For more reliable testing, use a physical device.

    ### Test push notifications [#test-push-notifications]

    1. Log in to the app on your device and confirm that the device token is successfully bound.

       You can check the log or call [RESTful API for getting user details](..//en/api-reference/api-ref/im/user-system-registration#querying-a-user) to confirm whether the device token is successfully bound. If successful, there will be a \`pushInfo\` field under the \`entities\` field, and \`pushInfo\` will have relevant information such as \`device_Id\`, \`device_token\`, \`notifier_name\`, and others.

    2. Enable app notification bar permissions.

    3. Kill the application process.

    4. Send a test message in the [Agora Console](https://console.agora.io/).

       Select **Operation Management** > **User** in the left navigation bar. On the **Users** page, select **Send Admin Message** in the **Action** column for the corresponding user ID. In the dialog box that pops up, select the message type, enter the message content, and then click **Send** .

       <CalloutContainer type="info">
         <CalloutDescription>
           In the **Push Certificate** page, in the **Action** column of each certificate, click **More** and **Test** will appear. This is to directly call the third-party interface to push. The message sending test in the **Users** page first calls the Chat message sending interface and then the third-party interface when the conditions are met (that is, the user is offline, the push certificate is valid and bound to the device token).
         </CalloutDescription>
       </CalloutContainer>

    5. Check your device to see if it has received the push notification.

    ### Troubleshooting [#troubleshooting]

    In case of issues, take the following steps:

    1. Check whether FCM push is correctly integrated or enabled:

       Select **Operation Management** > **User** in the left navigation bar. On the **User Management** page, select **Push Certificate** in the **Action** column for the corresponding user ID. In the pop-up box, check whether the certificate name and device token are displayed correctly.
    2. Check whether the correct FCM certificate is uploaded in the [Agora Console](https://console.agora.io/).
    3. Check whether the message is pushed in the chat room. The chat room does not support offline message push.
    4. Check if the device supports GMS.
    5. Check whether online-only delivery is enabled (\`deliverOnlineOnly\` = \`true\`). Messages set to be delivered only when the receiver is online will not be pushed.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    Follow this guide to integrate and test push notifications in your environment.

    ## Prerequisites [#prerequisites-1]

    Before proceeding, ensure that you meet the following requirements:

    * You have initialized the Chat SDK. For details, see [SDK quickstart](../../../get-started-sdk).
    * You understand the call frequency limit of the Chat APIs supported by different pricing plans as described in [Limitations](../../limitations).

    ## Integrate APNs push [#integrate-apns-push]

    This section guides you through how to integrate APNs with Chat. To integrate APNs into Chat, follow these steps:

    ### 1. Create a push certificate on the Apple Developer Platform [#1-create-a-push-certificate-on-the-apple-developer-platform]

    APNs supports p8 and p12 certificates. The Agora server needs your APNs certificate to communicate with APNs and send push notifications to the client.

    The following steps describe how to create a p12 certificate on [Apple's developer platform](https://developer.apple.com/):

    1. Apply for the Certificate Signing Request (CSR) file.

    2. Open the Keychain Access app on your device and select **Keychain Access** > **Certificate Assistant** > **Request a Certificate from a Certificate Authority**.

    3. In the **Certificate Assistant** dialog box, fill in the **User Email Address** and **Common Name**, select **Saved to disk** for **Request is**, click **Continue**, and add a storage path to save the file.

       ![push\\_apns\\_ca](https://assets-docs.agora.io/images/im/push_apns_ca.png)

    4. The CSR file \`CertificateSigningRequest.certSigningRequest\` is generated under the storage path.

    ### 2. Create an App ID [#2-create-an-app-id]

    1. Log in to [iOS Developer Center](https://developer.apple.com/cn/)，choose **Account** > **Certificates, Identifiers & Profiles** > **Identifiers**.
    2. On the **Identifiers*&#x2A; tab, click the &#x2A;*+** icon to the right of **Identifiers**.
    3. On the **Register a new identifier** page, select **App IDs** and click **Continue**.
    4. For **Select a type**, select **App** and click **Continue**.
    5. On the **Register an App ID** page, configure the following fields:
       * **Description**: Description of the App ID.
       * **Bundle ID**: Can be set to **com.YourCompany.YourProjectName**.
       * **Capabilities**: Choose **Push Notification**.
    6. Make sure the information is correct and click **Register**.

    ### 3. Create push notification certificates [#3-create-push-notification-certificates]

    Create certificates for development and production environments, respectively:

    1. On the **Identifiers** tab, select the App ID created in the previous step.
    2. On the **Edit your App ID Configuration** page, find **Push Notifications** and click **Configure**.
    3. In the **Apple Push Notification service SSL Certificates** dialog box, click **Create Certificate** to create a push certificate for development or production environments.
    4. On the **Create a New Certificate** page, select **iOS** as the **Platform**, upload the CSR file created in step 1, and click **Continue**.
    5. On the **Download Your Certificate** page, click **Download** to generate the [APNs](https://help.apple.com/xcode/mac/current/?spm=a2c4g.11186623.0.0.14864088B1zf4p#/dev80c6204ec) certificate.

    ### 4. Generate the push certificate [#4-generate-the-push-certificate]

    1. Double-click to import the push certificate created in Keychain in previous steps.
    2. Open **Keychain Access** , select **login** > **Certificates**, find the imported certificate, right-click and select the certificate to export as a \`.p12\` file, and set the certificate key.

    ### 5. Generate the Provisioning Profile file [#5-generate-the-provisioning-profile-file]

    1. Open [iOS Developer Center](https://developer.apple.com/cn/)，select **Account** > **Certificates, Identifiers & Profiles** > \\**Profiles*.
    2. On the **Provisioning*&#x2A; tab, click the &#x2A;*+** icon to the right of **Profiles**.
    3. On the **Register a New Provisioning Profile** page, select **iOS App Development** for **Development**, select **Ad Hoc** for **Distribution**, and click **Continue**.
       For the official version on the App Store, select **App Store** for **Distribution**.
    4. On the **Generate a Provisioning Profile** page, configure the following fields:
       * **App ID**: Enter the App ID created in step 2.
       * **Select Certificates**: Select the \`.p12\` file generated in step 4.
       * **Select Devices**: Select the device to be developed.
       * **Provisioning Profile Name**: Enter the Provisioning Profile file name.
    5. Confirm the information and click **Download** to generate the Provisioning Profile file.

    ### 6. Upload the APNs certificate in the [Agora Console](https://console.agora.io/) [#6-upload-the-apns-certificate-in-the-agora-console]

    After successfully logging in to the Chat SDK, you can configure the push policy for multi-device login use-cases and upload the APNs push certificate in [Agora Console](https://console.agora.io/).

    1. Log in to [Agora Console](https://console.agora.io/) and click **Project Management** in the left navigation bar.
    2. On the **Project Management** page, click **Config** in the **Action** column for the project that has Chat enabled.
    3. On the **Edit Project** page, in the **Features** area, click **Enable/Config** for **Chat**.
    4. On the project configuration page, select **Features** > **Push Certificate**.
    5. On the Push Certificate page, click **Add Push Certificate**. In the dialog box that pops up, select the **Apple** tab and configure the fields.

       <CalloutContainer type="info">
         <CalloutDescription>
           If you use FCM push, select the **Google** tab and configure the FCM push parameters.
         </CalloutDescription>
       </CalloutContainer>

       ![push\\_apns\\_add\\_certificate](https://assets-docs.agora.io/images/im/push_apns_add_certificate.png)

    | Parameter                   | Type   | Required (Yes/No) | Description                                                                                                                                                                 |
    | :-------------------------- | :----- | :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **Certificate Type**        |        | Yes               | Message push certificate type, currently supports **p8** and **p12**.                                                                                                       |
    | **Certificate Name**        | String | Yes               | The name of the message push certificate. Enter the name of the message push certificate.                                                                                   |
    | **Push Key**                | String | Yes               | Message push certificate key. Fill in the certificate key set when exporting the message push certificate file. Configure this parameter only when using a p12 certificate. |
    | **Upload Certificate**      | File   | Yes               | Click **Upload** to upload the message push certificate file.                                                                                                               |
    | **Key ID**                  | String | Yes               | Enter the Key ID of the push certificate. Configure this parameter only when using a p8 certificate.                                                                        |
    | \\*\\*TeamID \\*\\*             | String | Yes               | Enter the Team ID of the push certificate. Configure this parameter only when using a p8 certificate.                                                                       |
    | **Integration Environment** |        | Yes               | Integration environment:  - **Development**: Development environment;  - **Production**: Production environment.                                                            |
    | **Bundle ID**               | String | Yes               | The bundle ID. The bundle ID set when creating the App ID.                                                                                                                  |
    | **sound**                   | String | No                | The ringtone alert when the receiver receives the push notification.                                                                                                        |

    ### 7. Integrate APNs on the client [#7-integrate-apns-on-the-client]

    1. Open Xcode and select **Targets** > **Capability** > **Push Notifications** to enable push notification permission.

    2. Pass the certificate name to the SDK:

       \`\`\`objc
       #import

       - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
           // Apply for notification permission
           UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
               [center requestAuthorizationWithOptions:(UNAuthorizationOptionBadge | UNAuthorizationOptionSound | UNAuthorizationOptionAlert) completionHandler:^(BOOL granted, NSError * _Nullable error) {
                   if (granted) {
                       NSLog(@"request authorization succeed");
                   }
               }];

           // Register push
           [application registerForRemoteNotifications];

           // Initialize options and set App Key
           AgoraChatOptions *options = [AgoraChatOptions optionsWithAppkey:@"XXXX#XXXX"];

           // Fill in the name you set when uploading the certificate. Make sure the certificate name you set here is consistent with the certificate name you filled in on Agora Console.
           options.apnsCertName = @"PushCertName";

           [AgoraChatClient.sharedClient initializeSDKWithOptions:options];

           return YES;
       }
       \`\`\`

    3. Get the device token and pass it to the server.

    After the device token is registered, the iOS system will call back the device token to you in the following way. Pass the device token to the SDK.

    \`\`\`objc
    - (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
        [AgoraChatClient.sharedClient registerForRemoteNotificationsWithDeviceToken:deviceToken completion:^(AgoraChatError *aError) {
            if (aError) {
                NSLog(@"bind deviceToken error: %@", aError.errorDescription);
            }
        }];
    }
    - (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
        NSLog(@"Register Remote Notifications Failed");
    }
    \`\`\`

    ## Test APNs push [#test-apns-push]

    After integrating and enabling FCM, you can test whether the push feature is successfully integrated.

    Make sure your test device is a non-jail-broken iOS device. For more reliable testing, use a physical device.

    ### Test push notifications [#test-push-notifications-1]

    1. Log in to the app on your device and confirm that the device token is successfully bound.

       You can check the log or call [RESTful API for getting user details](..//en/api-reference/api-ref/im/user-system-registration#querying-a-user) to confirm whether the device token is successfully bound. If successful, there will be a \`pushInfo\` field under the \`entities\` field, and \`pushInfo\` will have relevant information such as \`device_Id\`, \`device_token\`, \`notifier_name\`, and others.

    2. Enable app notification bar permissions.

    3. Kill the application process.

    4. Send a test message in the [Agora Console](https://console.agora.io/).

       Select **Operation Management** > **User** in the left navigation bar. On the **Users** page, select **Send Admin Message** in the **Action** column for the corresponding user ID. In the dialog box that pops up, select the message type, enter the message content, and then click **Send** .

       <CalloutContainer type="info">
         <CalloutDescription>
           In the **Push Certificate** page, in the **Action** column of each certificate, click **More** and **Test** will appear. This is to directly call the third-party interface to push. The message sending test in the **Users** page first calls the Chat message sending interface and then the third-party interface when the conditions are met (that is, the user is offline, the push certificate is valid and bound to the device token).
         </CalloutDescription>
       </CalloutContainer>

    5. Check your device to see if it has received the push notification.

    ### Troubleshooting [#troubleshooting-1]

    In case of issues, take the following steps:

    1. Check whether APNs push is correctly integrated or enabled:

       Select **Operation Management** > **User** in the left navigation bar. On the **User Management** page, select **Push Certificate** in the **Action** column for the corresponding user ID. In the pop-up box, check whether the certificate name and device token are displayed correctly.

    2. Check whether the correct APNs certificate has been uploaded in [Agora Console](https://console.agora.io/) and the correct certificate environment has been set.

    3. Check whether the message was pushed in the chat room. Chat rooms do not support offline message push.

    4. Check whether online-only delivery is enabled (\`AgoraChatMessage#deliverOnlineOnly = YES\`). Messages set to be delivered only when the receiver is online will not be pushed.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    Follow this guide to integrate and test push notifications in your environment.

    ## Prerequisites [#prerequisites-2]

    Before proceeding, ensure that you meet the following requirements:

    * You have initialized the Chat SDK. For details, see [SDK quickstart](../../../get-started-sdk).
    * You understand the call frequency limit of the Chat APIs supported by different pricing plans as described in [Limitations](../../limitations).

    ## Integrate FCM push [#integrate-fcm-push-1]

    This section guides you through how to integrate FCM with Chat.

    ### 1. Create a project in Firebase [#1-create-a-project-in-firebase-1]

    1. Log in to the [Firebase console](https://console.firebase.google.com/) and click **Add project**.

    2. In the **Create a project** page, enter a project name, and click **Create project**.

       Note: You can toggle off Enable Google Analytics for this project if this option is not needed.

    3. After the project is ready, click **Continue** to redirect to the project page. Then click the **Flutter** icon and follow the **Firebase CLI** to set your project.

    4. In the **Project settings** page, perform the following operations:

       * For Android apps, find the **Android apps** in **Your apps**, and set your Android app according to the [SDK instructions](#1-create-a-project-in-firebase).

       * For iOS apps, find the **Apple apps** in **Your apps**, and set your Apple app according to the [SDK instructions](#1-create-push-certificates).

    5. In the project page, click the project you have created.

    6. Query the sender ID. On the **Project settings** page, select the **Cloud Messaging** tab and view **Sender ID**. When uploading the FCM certificate to Agora Console, set the certificate name to the FCM sender ID.

       ![push\\_fcm\\_senderid.png](https://assets-docs.agora.io/images/im/push_fcm_senderid.png)

    7. On the **Project settings** page, select the **Service accounts** tab and click **Generate new private key** to generate a JSON file. Save this file and upload it to Agora Console when using the V1 certificate.

       ![push\\_fcm\\_private\\_key](https://assets-docs.agora.io/images/im/push_fcm_private_key.png)

    ### 2. Upload FCM certificate to Agora Console [#2-upload-fcm-certificate-to-agora-console-1]

    After successfully logging into Chat, you can upload the FCM push certificate to Agora Console:

    1. Log in to [Agora Console](https://console.agora.io/), and click **Project Management** in the left navigation bar.

    2. On the **Project Management** page, locate the project that has Chat enabled and click **Config**.

    3. On the project edit page, click **Config** next to **Chat**.

    4. On the project config page, select **Features** > **Push Certificate** and click **Add Push Certificate**.

    5. In the pop-up window, select the **Google** tab, and configure the following fields:

       ![push\\_fcm\\_add\\_certificate](https://assets-docs.agora.io/images/im/push_fcm_add_certificate.png)

       | Parameter            | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
       | :------------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
       | **Certificate Type** |        | No       | Select whether to use a V1 certificate or a legacy certificate. **V1**: Recommended. You need to configure a **Private Key**. **Legacy**: Will soon be deprecated. You need to configure a **Push Key**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
       | **Private Key**      | file   | Yes      | Click **Generate new private key** on the **Project settings** > **Service accounts** page of the [Firebase Console](https://console.firebase.google.com) to generate the \`.json\` file, then upload it to Agora Console.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
       | **Push Key**         | String | Yes      | FCM Server Key. Obtain the server key in the &#x2A;*Cloud Messaging API (Legacy)** area of the **Project settings** > **Cloud Messaging** page of the [Firebase Console](https://console.firebase.google.com).   &#x2A;*This parameter is only valid for legacy certificates.**                                                                                                                                                                                                                                                                                                                                                                                                         |
       | **Certificate Name** | String | Yes      | The sender ID configured for the FCM. For the new version of the certificate, you can find the sender ID on the **Project settings** > **Cloud Messaging** page of the [Firebase Console](https://console.firebase.google.com). For legacy certificates, go to the \\***Project settings > Cloud Messaging** page of the [Firebase Console](https://console.firebase.google.com), and get the sender ID in the &#x2A;*Cloud  Messaging API (Legacy)** area.  The certificate name is the only condition used by the Agora server to determine which push channel the target device uses, so ensure that the sender set when integrating FCM in Chat is consistent with what is set here. |
       | **Sound**            | String | No       | The ringtone flag for when the receiver gets the push notification.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
       | **Push Priority**    |        | No       | Message delivery priority. See [Setting the priority of a message](https://firebase.google.cn/docs/cloud-messaging/concept-options#setting-the-priority-of-a-message).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
       | **Push Msg Type**    |        | No       | The type of the message sent to the client through FCM. See [Message types](https://firebase.google.com/docs/cloud-messaging/concept-options#notifications_and_data_messages): **Data**: Data message, processed by the client application. **Notification**: Notification message, automatically processed by FCM SDK. **Both**: Notification messages and data messages can be sent through the FCM client.                                                                                                                                                                                                                                                                           |

    #### Switch from legacy to the V1 certificate [#switch-from-legacy-to-the-v1-certificate-1]

    The legacy HTTP or XMPP API is being retired on June 20, 2024. In view of this, switch to the latest FCM API (HTTP v1) version of the certificate as soon as possible. See [Firebase Console](https://console.firebase.google.com) for details.

    Make sure that the uploaded V1 certificate is available, as the legacy one will be deleted upon upload. If the new certificate is not available, the push will fail.

    Take the following steps to switch from the old to the new certificate:

    1. Click **Edit** in the **Action** column of the old certificate on the **Push Certificate** page.

       ![push\\_fcm\\_oldcertificate\\_edit](https://assets-docs.agora.io/images/im/push_fcm_oldcertificate_edit.png)

    2. In the **Google** tab of the **Edit Push Certificate** window, switch the **Certificate Type** to **V1**.

       ![push\\_fcm\\_oldcertificate\\_switch](https://assets-docs.agora.io/images/im/push_fcm_oldcertificate_switch.png)

    3. Click **Upload** to upload the locally saved V1 certificate file (.json).

       ![push\\_fcm\\_newcertificate\\_upload](https://assets-docs.agora.io/images/im/push_fcm_newcertificate_upload.png)

    4. Click **OK** to complete the switch.

    ### 3. Integrate FCM on the client [#3-integrate-fcm-on-the-client-1]

    Take the following steps to integrate FCM on the client.

    1. Install \`firebase_core\`: Execute \`flutter pub add firebase_core\` in the project root directory.
    2. Install \`firebase_messaging\`: Execute \`flutter pub add firebase_messaging\` in the project root directory.

    **For Android**

    In your flutter project's \`Android/build.gradle\` file, check the \`google-services\` version and make sure it is 4.3.14 or above.

    \`\`\`dart
    dependencies {
        // START: FlutterFire Configuration
        classpath 'com.google.gms:google-services:4.3.15'
        // END: FlutterFire Configuration
    }
    \`\`\`

    **For iOS**

    Before your app can start receiving messages, enable push notifications and background modes in your Xcode project.

    1. Open the Xcode project workspace (\`ios/Runner.xcworkspace\`).
    2. [Enable push notifications](https://help.apple.com/xcode/mac/current/#/devdfd3d04a1).
    3. Enable background fetching and remote notifications [background execution modes](https://developer.apple.com/documentation/xcode/configuring-background-execution-modes).

    #### SDK integration [#sdk-integration]

    1. Initialize the Chat SDK and enable FCM:

       \`\`\`dart
       void main() async {
         WidgetsFlutterBinding.ensureInitialized();
         // Replace with your Appkey.
         var options = ChatOptions(appKey: "Your Appkey", autoLogin: false);
         // Replace with your FCM Sender ID.
         options.enableFCM("Your FCM sender id");
         // Initialize the IM SDK.
         await ChatClient.getInstance.init(options);
         // Initialize FCM SDK.
         await Firebase.initializeApp(
           options: DefaultFirebaseOptions.currentPlatform,
         );
         runApp(const MyApp());
       }
       \`\`\`

    2. Pass the FCM device token to the server.

       When the app is initialized, the FCM SDK generates a unique registration token for the client app on the user's device. Since FCM uses this token to determine which device to send the push message to, the Agora server needs to obtain the client app's registration token before sending the notification request to FCM. FCM then verifies the registration token and sends the notification message to the device.

       \`\`\`dart
       // Request push permission
       await FirebaseMessaging.instance.requestPermission();
       FirebaseMessaging.instance.onTokenRefresh.listen((event) async {
           debugPrint('onTokenRefresh: $event');
           await ChatClient.getInstance.pushManager.updateFCMPushToken(event);
       });
       // Get the token and upload it to instant communication.
       final fcmToken = await FirebaseMessaging.instance.getToken();
       if (fcmToken != null) {
         debugPrint('fcmToken: $fcmToken');
         await ChatClient.getInstance.pushManager.updateFCMPushToken(fcmToken);
       } else {
         debugPrint('fcmToken is null');
       }
       \`\`\`

    ## Test FCM push [#test-fcm-push-1]

    After integrating and enabling FCM, you can test whether the push feature is successfully integrated.

    Make sure your test device meets the following conditions:

    * Uses foreign IP addresses to establish connections.
    * Supports Google GMS services (Google Mobile Services).
    * Can access Google network services; otherwise, the device won't be able to receive push notifications from the FCM service.

    For more reliable testing, use a physical device.

    ### Test push notifications [#test-push-notifications-2]

    1. Log in to the app on your device and confirm that the device token is successfully bound.

       You can check the log or call [RESTful API for getting user details](..//en/api-reference/api-ref/im/user-system-registration#querying-a-user) to confirm whether the device token is successfully bound. If successful, there will be a \`pushInfo\` field under the \`entities\` field, and \`pushInfo\` will have relevant information such as \`device_Id\`, \`device_token\`, \`notifier_name\`, and others.

    2. Enable app notification bar permissions.

    3. Kill the application process.

    4. Send a test message in the [Agora Console](https://console.agora.io/).

       Select **Operation Management** > **User** in the left navigation bar. On the **Users** page, select **Send Admin Message** in the **Action** column for the corresponding user ID. In the dialog box that pops up, select the message type, enter the message content, and then click **Send** .

       <CalloutContainer type="info">
         <CalloutDescription>
           In the **Push Certificate** page, in the **Action** column of each certificate, click **More** and **Test** will appear. This is to directly call the third-party interface to push. The message sending test in the **Users** page first calls the Chat message sending interface and then the third-party interface when the conditions are met (that is, the user is offline, the push certificate is valid and bound to the device token).
         </CalloutDescription>
       </CalloutContainer>

    5. Check your device to see if it has received the push notification.

    ### Troubleshooting [#troubleshooting-2]

    In case of issues, take the following steps:

    1. Check whether FCM push is correctly integrated or enabled:

       Select **Operation Management** > **User** in the left navigation bar. On the **User Management** page, select **Push Certificate** in the **Action** column for the corresponding user ID. In the pop-up box, check whether the certificate name and device token are displayed correctly.
    2. Check whether the correct FCM certificate is uploaded in the [Agora Console](https://console.agora.io/).
    3. Check whether the message is pushed in the chat room. The chat room does not support offline message push.
    4. Check if the device supports GMS.
    5. Check whether online-only delivery is enabled (\`deliverOnlineOnly\` = \`true\`). Messages set to be delivered only when the receiver is online will not be pushed.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    Follow this guide to integrate and test push notifications in your environment.

    ## Prerequisites [#prerequisites-3]

    Before proceeding, ensure that you meet the following requirements:

    * You have initialized the Chat SDK. For details, see [SDK quickstart](../../../get-started-sdk).
    * You understand the call frequency limit of the Chat APIs supported by different pricing plans as described in [Limitations](../../limitations).

    ## Integrate FCM push [#integrate-fcm-push-2]

    This section guides you through how to integrate FCM with Chat.

    ### 1. Create a project in Firebase [#1-create-a-project-in-firebase-2]

    1. Log in to [Firebase console](https://console.firebase.google.com/), and click **Add project**.

    2. On the **Create a project** page, enter a project name, and proceed with prompts.

    3. Query the sender ID. On the **Project settings** page, select the **Cloud Messaging** tab and view **Sender ID**. When uploading the FCM certificate to Agora Console, set the certificate name to the FCM sender ID.

       ![push\\_fcm\\_senderid.png](https://assets-docs.agora.io/images/im/push_fcm_senderid.png)

    4. On the **Project settings** page, select the **Service accounts** tab and click **Generate new private key** to generate a JSON file. Save this file and upload it to Agora Console when using the V1 certificate.

       ![push\\_fcm\\_private\\_key](https://assets-docs.agora.io/images/im/push_fcm_private_key.png)

    5. After the project is created, add an \`iOS\` application or an \`Android\` application according to the following steps:

    * Add an \`iOS\` app:
      1. The package name is the same as that of the \`iOS\` app;
      2. Once created, move the downloaded \`GoogleService-Info.plist\` file to the root directory of the \`Xcode\` project, and add it to all targets;
      3. Upload the \`APNs\` certificate on the Cloud Messaging page.

    * Add an \`Android\` app:
      1. The package name is the same as that of the \`Android\` app;
      2. Once created, move the downloaded \`google-services.json\` file to your module (application level) root directory.

    For detailed FCM configurations, you can see the [React Native Firebase document](https://rnfirebase.io/).

    ### 2. Upload FCM certificate to Agora Console [#2-upload-fcm-certificate-to-agora-console-2]

    After successfully logging into Chat, you can upload the FCM push certificate to Agora Console:

    1. Log in to [Agora Console](https://console.agora.io/), and click **Project Management** in the left navigation bar.

    2. On the **Project Management** page, locate the project that has Chat enabled and click **Config**.

    3. On the project edit page, click **Config** next to **Chat**.

    4. On the project config page, select **Features** > **Push Certificate** and click **Add Push Certificate**.

    5. In the pop-up window, select the **Google** tab, and configure the following fields:

       ![push\\_fcm\\_add\\_certificate](https://assets-docs.agora.io/images/im/push_fcm_add_certificate.png)

       | Parameter            | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
       | :------------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
       | **Certificate Type** |        | No       | Select whether to use a V1 certificate or a legacy certificate. **V1**: Recommended. You need to configure a **Private Key**. **Legacy**: Will soon be deprecated. You need to configure a **Push Key**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
       | **Private Key**      | file   | Yes      | Click **Generate new private key** on the **Project settings** > **Service accounts** page of the [Firebase Console](https://console.firebase.google.com) to generate the \`.json\` file, then upload it to Agora Console.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
       | **Push Key**         | String | Yes      | FCM Server Key. Obtain the server key in the &#x2A;*Cloud Messaging API (Legacy)** area of the **Project settings** > **Cloud Messaging** page of the [Firebase Console](https://console.firebase.google.com).   &#x2A;*This parameter is only valid for legacy certificates.**                                                                                                                                                                                                                                                                                                                                                                                                         |
       | **Certificate Name** | String | Yes      | The sender ID configured for the FCM. For the new version of the certificate, you can find the sender ID on the **Project settings** > **Cloud Messaging** page of the [Firebase Console](https://console.firebase.google.com). For legacy certificates, go to the \\***Project settings > Cloud Messaging** page of the [Firebase Console](https://console.firebase.google.com), and get the sender ID in the &#x2A;*Cloud  Messaging API (Legacy)** area.  The certificate name is the only condition used by the Agora server to determine which push channel the target device uses, so ensure that the sender set when integrating FCM in Chat is consistent with what is set here. |
       | **Sound**            | String | No       | The ringtone flag for when the receiver gets the push notification.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
       | **Push Priority**    |        | No       | Message delivery priority. See [Setting the priority of a message](https://firebase.google.cn/docs/cloud-messaging/concept-options#setting-the-priority-of-a-message).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
       | **Push Msg Type**    |        | No       | The type of the message sent to the client through FCM. See [Message types](https://firebase.google.com/docs/cloud-messaging/concept-options#notifications_and_data_messages): **Data**: Data message, processed by the client application. **Notification**: Notification message, automatically processed by FCM SDK. **Both**: Notification messages and data messages can be sent through the FCM client.                                                                                                                                                                                                                                                                           |

    #### Switch from legacy to the V1 certificate [#switch-from-legacy-to-the-v1-certificate-2]

    The legacy HTTP or XMPP API is being retired on June 20, 2024. In view of this, switch to the latest FCM API (HTTP v1) version of the certificate as soon as possible. See [Firebase Console](https://console.firebase.google.com) for details.

    Make sure that the uploaded V1 certificate is available, as the legacy one will be deleted upon upload. If the new certificate is not available, the push will fail.

    Take the following steps to switch from the old to the new certificate:

    1. Click **Edit** in the **Action** column of the old certificate on the **Push Certificate** page.

       ![push\\_fcm\\_oldcertificate\\_edit](https://assets-docs.agora.io/images/im/push_fcm_oldcertificate_edit.png)

    2. In the **Google** tab of the **Edit Push Certificate** window, switch the **Certificate Type** to **V1**.

       ![push\\_fcm\\_oldcertificate\\_switch](https://assets-docs.agora.io/images/im/push_fcm_oldcertificate_switch.png)

    3. Click **Upload** to upload the locally saved V1 certificate file (.json).

       ![push\\_fcm\\_newcertificate\\_upload](https://assets-docs.agora.io/images/im/push_fcm_newcertificate_upload.png)

    4. Click **OK** to complete the switch.

    ### 3. Integrate FCM on the client [#3-integrate-fcm-on-the-client-2]

    Take the following steps to integrate FCM on the client:

    1. Add dependencies:

       \`\`\`sh
       yarn add @react-native-firebase/app @react-native-firebase/messaging react-native-agora-chat
       \`\`\`

    2. Add native platform configuration:

       **Android**

       1. Download the \`google-services.json\` file and put it in the following path in your project: \`/android/app/google - services.json\`.

       2. In your \`/android/build.gradle\` file, add the google-services plugin as a dependency:

          \`\`\`text
          buildscript {
            dependencies {
              classpath 'com.google.gms:google-services:4.3.15'
            }
          }
          \`\`\`

       3. Add the google-services plugin to the \`/android/app/build.gradle\` file and execute the plugin:

          \`\`\`text
          apply plugin: 'com.google.gms.google-services' //  true
            pod 'FirebaseCore', :modular_headers => true
          end
          \`\`\`

       4. Run the \`pod install\` command in the \`ios\` directory to install dependencies.

       5. Open the \`/ios/{projectName}.xcworkspace\` file in Xcode.

       6. Right-click the project name, select **Add files** , then select the downloaded \`GoogleService-Info.plist\` file from your local computer, and make sure to select **Copy items if needed**.

       7. To do this, open the \`/ios/{projectName}/AppDelegate.mm\` file (\`AppDelegate.m\` in earlier versions of React Native).

       8. At the top of the file, import the Firebase SDK after &#x2A;*#import "AppDelegate.h"**.

          \`\`\`objc
          #import
          \`\`\`

       9. In the \`didFinishLaunchingWithOptions\` method, add the following code at the top:

          \`\`\`objc
          - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
            [FIRApp configure];
          }
          \`\`\`

    #### FCM push code implementation [#fcm-push-code-implementation]

    1. Set up message notifications:

       \`\`\`typescript
       React.useEffect(() => {
         const sub1 = messaging().onMessage(async (remoteMessage) => {
           // Process offline message notifications, such as printing logs and displaying messages.
           console.log("A new FCM message arrived!", JSON.stringify(remoteMessage));
         });
         return sub1;
       }, []);
       \`\`\`

    2. Initialize the Chat SDK:

       \`\`\`typescript
       // Get the device token.
       fcmToken.current = await messaging().getToken();
       // Push settings.
       const pushConfig = new ChatPushConfig({
         deviceId: senderId,
         deviceToken: fcmToken.current,
       });
       // Configure push settings in the ChatOptions class.
       let o = new ChatOptions({
         autoLogin: false ,
         appKey: appKey,
         pushConfig: pushConfig,
       });
       // Execute settings and initialize the IM SDK.
       ChatClient.getInstance()
         . heat ( o )
         .then(() => {
           // Initialization successful.
         })
         .catch((error) => {
           // Initialization failed and error message is returned.
         });
       \`\`\`

    3. Log in to the server:

       \`\`\`typescript
       // Log in to the server using user ID and token.
       ChatClient.getInstance()
         .loginWithAgoraToken(username, token)
         .then(() => {
           // Login successful.
         })
         .catch((reason) => {
           // Login failed, return error message.
         });
       \`\`\`

    4. Send the device token to the server:

       \`\`\`typescript
       // Send device token to the server.
       ChatClient.getInstance()
         .updatePushConfig(
           new ChatPushConfig({ deviceId: senderId, deviceToken: fcmToken.current })
         )
         .then(() => {
           // Sent successfully.
         })
         .catch((reason) => {
           // Sending failed, returning error information.
         });
       \`\`\`

    ## Test FCM push [#test-fcm-push-2]

    After integrating and enabling FCM, you can test whether the push feature is successfully integrated.

    Make sure your test device meets the following conditions:

    * Uses foreign IP addresses to establish connections.
    * Supports Google GMS services (Google Mobile Services).
    * Can access Google network services; otherwise, the device won't be able to receive push notifications from the FCM service.

    For more reliable testing, use a physical device.

    ### Test push notifications [#test-push-notifications-3]

    1. Log in to the app on your device and confirm that the device token is successfully bound.

       You can check the log or call [RESTful API for getting user details](..//en/api-reference/api-ref/im/user-system-registration#querying-a-user) to confirm whether the device token is successfully bound. If successful, there will be a \`pushInfo\` field under the \`entities\` field, and \`pushInfo\` will have relevant information such as \`device_Id\`, \`device_token\`, \`notifier_name\`, and others.

    2. Enable app notification bar permissions.

    3. Kill the application process.

    4. Send a test message in the [Agora Console](https://console.agora.io/).

       Select **Operation Management** > **User** in the left navigation bar. On the **Users** page, select **Send Admin Message** in the **Action** column for the corresponding user ID. In the dialog box that pops up, select the message type, enter the message content, and then click **Send** .

       <CalloutContainer type="info">
         <CalloutDescription>
           In the **Push Certificate** page, in the **Action** column of each certificate, click **More** and **Test** will appear. This is to directly call the third-party interface to push. The message sending test in the **Users** page first calls the Chat message sending interface and then the third-party interface when the conditions are met (that is, the user is offline, the push certificate is valid and bound to the device token).
         </CalloutDescription>
       </CalloutContainer>

    5. Check your device to see if it has received the push notification.

    ### Troubleshooting [#troubleshooting-3]

    In case of issues, take the following steps:

    1. Check whether FCM push is correctly integrated or enabled:

       Select **Operation Management** > **User** in the left navigation bar. On the **User Management** page, select **Push Certificate** in the **Action** column for the corresponding user ID. In the pop-up box, check whether the certificate name and device token are displayed correctly.
    2. Check whether the correct FCM certificate is uploaded in the [Agora Console](https://console.agora.io/).
    3. Check whether the message is pushed in the chat room. The chat room does not support offline message push.
    4. Check if the device supports GMS.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "**This feature is not supported for this platform.**"
  }, {
    heading: undefined,
    content: "**This feature is not supported for this platform.**"
  }, {
    heading: undefined,
    content: "**This feature guide is not available yet.**"
  }, {
    heading: undefined,
    content: "Follow this guide to integrate and test push notifications in your environment."
  }, {
    heading: "prerequisites",
    content: "Before proceeding, ensure that you meet the following requirements:"
  }, {
    heading: "prerequisites",
    content: "You have initialized the Chat SDK. For details, see SDK quickstart."
  }, {
    heading: "prerequisites",
    content: "You understand the call frequency limit of the Chat APIs supported by different pricing plans as described in Limitations."
  }, {
    heading: "integrate-fcm-push",
    content: "This section guides you through integrating FCM with Chat."
  }, {
    heading: "integrate-fcm-push",
    content: "For Android devices, if FCM and push services from other manufacturers are enabled at the same time, FCM push services will be used first."
  }, {
    heading: "1-create-a-project-in-firebase",
    content: "Log in to the Firebase console and add a project."
  }, {
    heading: "1-create-a-project-in-firebase",
    content: "Register the application in the project."
  }, {
    heading: "1-create-a-project-in-firebase",
    content: "In the **Download and then add config file** step of the **Add Firebase to your Android app** page, click **Download google-services.json** and put the file into your Android app module root directory."
  }, {
    heading: "1-create-a-project-in-firebase",
    content: "Query the sender ID. On the **Project settings** page, select the **Cloud Messaging** tab and view **Sender ID**. When uploading the FCM certificate to Agora Console, set the certificate name to the FCM sender ID."
  }, {
    heading: "1-create-a-project-in-firebase",
    content: "On the **Project settings** page, select the **Service accounts** tab and click **Generate new private key** to generate a JSON file. Save this file and upload it to Agora Console when using the V1 certificate."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "After successfully logging into Chat, you can upload the FCM push certificate to Agora Console:"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "Log in to Agora Console, and click **Project Management** in the left navigation bar."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "On the **Project Management** page, locate the project that has Chat enabled and click **Config**."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "On the project editing page, click **Config** next to **Chat**."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "On the project config page, select **Features** > **Push Certificate** and click **Add Push Certificate**."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "In the pop-up window, select the **Google** tab, and configure the following fields:"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "Parameter"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "Type"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "Required"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "Description"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "**Certificate Type**"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "No"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "Select whether to use a V1 certificate or a legacy certificate. **V1**: Recommended. You need to configure a **Private Key**. **Legacy**: Will soon be deprecated. You need to configure a **Push Key**."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "**Private Key**"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "file"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "Yes"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "Click **Generate new private key** on the **Project settings** > **Service accounts** page of the Firebase Console to generate the `.json` file, then upload it to Agora Console."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "**Push Key**"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "String"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "Yes"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "FCM Server Key. Obtain the server key in the &#x2A;*Cloud Messaging API (Legacy)** area of the **Project settings** > **Cloud Messaging** page of the Firebase Console.   &#x2A;*This parameter is only valid for legacy certificates.**"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "**Certificate Name**"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "String"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "Yes"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "The sender ID configured for the FCM. For the new version of the certificate, you can find the sender ID on the **Project settings** > **Cloud Messaging** page of the Firebase Console. For legacy certificates, go to the \\***Project settings > Cloud Messaging** page of the Firebase Console, and get the sender ID in the &#x2A;*Cloud  Messaging API (Legacy)** area.  The certificate name is the only condition used by the Agora server to determine which push channel the target device uses, so ensure that the sender set when integrating FCM in Chat is consistent with what is set here."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "**Sound**"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "String"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "No"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "The ringtone flag for when the receiver gets the push notification."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "**Push Priority**"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "No"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "Message delivery priority. See Setting the priority of a message."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "**Push Msg Type**"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "No"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console",
    content: "The type of the message sent to the client through FCM. See Message types: **Data**: Data message, processed by the client application. **Notification**: Notification message, automatically processed by FCM SDK. **Both**: Notification messages and data messages can be sent through the FCM client."
  }, {
    heading: "switch-from-legacy-to-the-v1-certificate",
    content: "The legacy HTTP or XMPP API is being retired on June 20, 2024. In view of this, switch to the latest FCM API (HTTP v1) version of the certificate as soon as possible. See Firebase Console for details."
  }, {
    heading: "switch-from-legacy-to-the-v1-certificate",
    content: "Make sure that the uploaded V1 certificate is available, as the legacy one will be deleted upon upload. If the new certificate is not available, the push will fail."
  }, {
    heading: "switch-from-legacy-to-the-v1-certificate",
    content: "Take the following steps to switch from the old to the new certificate:"
  }, {
    heading: "switch-from-legacy-to-the-v1-certificate",
    content: "Click **Edit** in the **Action** column of the old certificate on the **Push Certificate** page."
  }, {
    heading: "switch-from-legacy-to-the-v1-certificate",
    content: "In the **Google** tab of the **Edit Push Certificate** window, switch the **Certificate Type** to **V1**."
  }, {
    heading: "switch-from-legacy-to-the-v1-certificate",
    content: "Click **Upload** to upload the locally saved V1 certificate file (`.json`)."
  }, {
    heading: "switch-from-legacy-to-the-v1-certificate",
    content: "Click **OK** to complete the switch."
  }, {
    heading: "3-integrate-fcm-on-the-client",
    content: "Take the following steps to integrate FCM on the client."
  }, {
    heading: "3-integrate-fcm-on-the-client",
    content: "In the `build.gradle` file of your app project, configure the FCM library dependency:"
  }, {
    heading: "3-integrate-fcm-on-the-client",
    content: "In your `/build.gradle` file, configure the following:"
  }, {
    heading: "3-integrate-fcm-on-the-client",
    content: "For Gradle 5.0 and above, BoM is automatically enabled; for versions prior to Gradle 5.0, you need to enable it. For details, see Firebase Android BoM and Firebase Android SDK Release Notes."
  }, {
    heading: "3-integrate-fcm-on-the-client",
    content: "Sync your project with gradle files, extend `FirebaseMessagingService`, and register it in the `AndroidManifest.xml` file of your project:"
  }, {
    heading: "3-integrate-fcm-on-the-client",
    content: "Initialize the Chat SDK and enable FCM:"
  }, {
    heading: "3-integrate-fcm-on-the-client",
    content: "Pass the FCM device token to the server."
  }, {
    heading: "3-integrate-fcm-on-the-client",
    content: "When the app is initialized, the FCM SDK generates a unique registration token for the client app on the user's device. Since FCM uses this token to determine which device to send the push message to, the Agora server needs to obtain the client app's registration token before sending the notification request to FCM. FCM then verifies the registration token and sends the notification message to the Android device. It is recommended to place this code on the main page after successfully logging into Chat."
  }, {
    heading: "3-integrate-fcm-on-the-client",
    content: "Monitor device token generation."
  }, {
    heading: "3-integrate-fcm-on-the-client",
    content: "After the FCM SDK successfully generates a registration token (device token), it will be passed to the `onNewToken` callback."
  }, {
    heading: "3-integrate-fcm-on-the-client",
    content: "Rewrite the `onNewToken` callback in `FirebaseMessagingService`. After the device token is generated, this callback will promptly update the new token to the Chat SDK."
  }, {
    heading: "test-fcm-push",
    content: "After integrating and enabling FCM, you can test whether the push feature is successfully integrated."
  }, {
    heading: "test-fcm-push",
    content: "Make sure your test device meets the following conditions:"
  }, {
    heading: "test-fcm-push",
    content: "Uses foreign IP addresses to establish connections."
  }, {
    heading: "test-fcm-push",
    content: "Supports Google GMS services (Google Mobile Services)."
  }, {
    heading: "test-fcm-push",
    content: "Can access Google network services; otherwise, the device won't be able to receive push notifications from the FCM service."
  }, {
    heading: "test-fcm-push",
    content: "For more reliable testing, use a physical device."
  }, {
    heading: "test-push-notifications",
    content: "Log in to the app on your device and confirm that the device token is successfully bound."
  }, {
    heading: "test-push-notifications",
    content: "You can check the log or call RESTful API for getting user details to confirm whether the device token is successfully bound. If successful, there will be a `pushInfo` field under the `entities` field, and `pushInfo` will have relevant information such as `device_Id`, `device_token`, `notifier_name`, and others."
  }, {
    heading: "test-push-notifications",
    content: "Enable app notification bar permissions."
  }, {
    heading: "test-push-notifications",
    content: "Kill the application process."
  }, {
    heading: "test-push-notifications",
    content: "Send a test message in the Agora Console."
  }, {
    heading: "test-push-notifications",
    content: "Select **Operation Management** > **User** in the left navigation bar. On the **Users** page, select **Send Admin Message** in the **Action** column for the corresponding user ID. In the dialog box that pops up, select the message type, enter the message content, and then click **Send** ."
  }, {
    heading: "test-push-notifications",
    content: "In the **Push Certificate** page, in the **Action** column of each certificate, click **More** and **Test** will appear. This is to directly call the third-party interface to push. The message sending test in the **Users** page first calls the Chat message sending interface and then the third-party interface when the conditions are met (that is, the user is offline, the push certificate is valid and bound to the device token)."
  }, {
    heading: "test-push-notifications",
    content: "Check your device to see if it has received the push notification."
  }, {
    heading: "troubleshooting",
    content: "In case of issues, take the following steps:"
  }, {
    heading: "troubleshooting",
    content: "Check whether FCM push is correctly integrated or enabled:"
  }, {
    heading: "troubleshooting",
    content: "Select **Operation Management** > **User** in the left navigation bar. On the **User Management** page, select **Push Certificate** in the **Action** column for the corresponding user ID. In the pop-up box, check whether the certificate name and device token are displayed correctly."
  }, {
    heading: "troubleshooting",
    content: "Check whether the correct FCM certificate is uploaded in the Agora Console."
  }, {
    heading: "troubleshooting",
    content: "Check whether the message is pushed in the chat room. The chat room does not support offline message push."
  }, {
    heading: "troubleshooting",
    content: "Check if the device supports GMS."
  }, {
    heading: "troubleshooting",
    content: "Check whether online-only delivery is enabled (`deliverOnlineOnly` = `true`). Messages set to be delivered only when the receiver is online will not be pushed."
  }, {
    heading: "troubleshooting",
    content: "Follow this guide to integrate and test push notifications in your environment."
  }, {
    heading: "prerequisites-1",
    content: "Before proceeding, ensure that you meet the following requirements:"
  }, {
    heading: "prerequisites-1",
    content: "You have initialized the Chat SDK. For details, see SDK quickstart."
  }, {
    heading: "prerequisites-1",
    content: "You understand the call frequency limit of the Chat APIs supported by different pricing plans as described in Limitations."
  }, {
    heading: "integrate-apns-push",
    content: "This section guides you through how to integrate APNs with Chat. To integrate APNs into Chat, follow these steps:"
  }, {
    heading: "1-create-a-push-certificate-on-the-apple-developer-platform",
    content: "APNs supports p8 and p12 certificates. The Agora server needs your APNs certificate to communicate with APNs and send push notifications to the client."
  }, {
    heading: "1-create-a-push-certificate-on-the-apple-developer-platform",
    content: "The following steps describe how to create a p12 certificate on Apple's developer platform:"
  }, {
    heading: "1-create-a-push-certificate-on-the-apple-developer-platform",
    content: "Apply for the Certificate Signing Request (CSR) file."
  }, {
    heading: "1-create-a-push-certificate-on-the-apple-developer-platform",
    content: "Open the Keychain Access app on your device and select **Keychain Access** > **Certificate Assistant** > **Request a Certificate from a Certificate Authority**."
  }, {
    heading: "1-create-a-push-certificate-on-the-apple-developer-platform",
    content: "In the **Certificate Assistant** dialog box, fill in the **User Email Address** and **Common Name**, select **Saved to disk** for **Request is**, click **Continue**, and add a storage path to save the file."
  }, {
    heading: "1-create-a-push-certificate-on-the-apple-developer-platform",
    content: "The CSR file `CertificateSigningRequest.certSigningRequest` is generated under the storage path."
  }, {
    heading: "2-create-an-app-id",
    content: "Log in to iOS Developer Center，choose **Account** > **Certificates, Identifiers & Profiles** > **Identifiers**."
  }, {
    heading: "2-create-an-app-id",
    content: "On the **Identifiers*&#x2A; tab, click the &#x2A;*+** icon to the right of **Identifiers**."
  }, {
    heading: "2-create-an-app-id",
    content: "On the **Register a new identifier** page, select **App IDs** and click **Continue**."
  }, {
    heading: "2-create-an-app-id",
    content: "For **Select a type**, select **App** and click **Continue**."
  }, {
    heading: "2-create-an-app-id",
    content: "On the **Register an App ID** page, configure the following fields:"
  }, {
    heading: "2-create-an-app-id",
    content: "**Description**: Description of the App ID."
  }, {
    heading: "2-create-an-app-id",
    content: "**Bundle ID**: Can be set to **com.YourCompany.YourProjectName**."
  }, {
    heading: "2-create-an-app-id",
    content: "**Capabilities**: Choose **Push Notification**."
  }, {
    heading: "2-create-an-app-id",
    content: "Make sure the information is correct and click **Register**."
  }, {
    heading: "3-create-push-notification-certificates",
    content: "Create certificates for development and production environments, respectively:"
  }, {
    heading: "3-create-push-notification-certificates",
    content: "On the **Identifiers** tab, select the App ID created in the previous step."
  }, {
    heading: "3-create-push-notification-certificates",
    content: "On the **Edit your App ID Configuration** page, find **Push Notifications** and click **Configure**."
  }, {
    heading: "3-create-push-notification-certificates",
    content: "In the **Apple Push Notification service SSL Certificates** dialog box, click **Create Certificate** to create a push certificate for development or production environments."
  }, {
    heading: "3-create-push-notification-certificates",
    content: "On the **Create a New Certificate** page, select **iOS** as the **Platform**, upload the CSR file created in step 1, and click **Continue**."
  }, {
    heading: "3-create-push-notification-certificates",
    content: "On the **Download Your Certificate** page, click **Download** to generate the APNs certificate."
  }, {
    heading: "4-generate-the-push-certificate",
    content: "Double-click to import the push certificate created in Keychain in previous steps."
  }, {
    heading: "4-generate-the-push-certificate",
    content: "Open **Keychain Access** , select **login** > **Certificates**, find the imported certificate, right-click and select the certificate to export as a `.p12` file, and set the certificate key."
  }, {
    heading: "5-generate-the-provisioning-profile-file",
    content: "Open iOS Developer Center，select **Account** > **Certificates, Identifiers & Profiles** > \\**Profiles*."
  }, {
    heading: "5-generate-the-provisioning-profile-file",
    content: "On the **Provisioning*&#x2A; tab, click the &#x2A;*+** icon to the right of **Profiles**."
  }, {
    heading: "5-generate-the-provisioning-profile-file",
    content: `On the **Register a New Provisioning Profile** page, select **iOS App Development** for **Development**, select **Ad Hoc** for **Distribution**, and click **Continue**.
For the official version on the App Store, select **App Store** for **Distribution**.`
  }, {
    heading: "5-generate-the-provisioning-profile-file",
    content: "On the **Generate a Provisioning Profile** page, configure the following fields:"
  }, {
    heading: "5-generate-the-provisioning-profile-file",
    content: "**App ID**: Enter the App ID created in step 2."
  }, {
    heading: "5-generate-the-provisioning-profile-file",
    content: "**Select Certificates**: Select the `.p12` file generated in step 4."
  }, {
    heading: "5-generate-the-provisioning-profile-file",
    content: "**Select Devices**: Select the device to be developed."
  }, {
    heading: "5-generate-the-provisioning-profile-file",
    content: "**Provisioning Profile Name**: Enter the Provisioning Profile file name."
  }, {
    heading: "5-generate-the-provisioning-profile-file",
    content: "Confirm the information and click **Download** to generate the Provisioning Profile file."
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "After successfully logging in to the Chat SDK, you can configure the push policy for multi-device login use-cases and upload the APNs push certificate in Agora Console."
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "Log in to Agora Console and click **Project Management** in the left navigation bar."
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "On the **Project Management** page, click **Config** in the **Action** column for the project that has Chat enabled."
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "On the **Edit Project** page, in the **Features** area, click **Enable/Config** for **Chat**."
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "On the project configuration page, select **Features** > **Push Certificate**."
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "On the Push Certificate page, click **Add Push Certificate**. In the dialog box that pops up, select the **Apple** tab and configure the fields."
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "If you use FCM push, select the **Google** tab and configure the FCM push parameters."
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "Parameter"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "Type"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "Required (Yes/No)"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "Description"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "**Certificate Type**"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "Yes"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "Message push certificate type, currently supports **p8** and **p12**."
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "**Certificate Name**"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "String"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "Yes"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "The name of the message push certificate. Enter the name of the message push certificate."
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "**Push Key**"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "String"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "Yes"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "Message push certificate key. Fill in the certificate key set when exporting the message push certificate file. Configure this parameter only when using a p12 certificate."
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "**Upload Certificate**"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "File"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "Yes"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "Click **Upload** to upload the message push certificate file."
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "**Key ID**"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "String"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "Yes"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "Enter the Key ID of the push certificate. Configure this parameter only when using a p8 certificate."
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "\\*\\*TeamID \\*\\*"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "String"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "Yes"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "Enter the Team ID of the push certificate. Configure this parameter only when using a p8 certificate."
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "**Integration Environment**"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "Yes"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "Integration environment:  - **Development**: Development environment;  - **Production**: Production environment."
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "**Bundle ID**"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "String"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "Yes"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "The bundle ID. The bundle ID set when creating the App ID."
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "**sound**"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "String"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "No"
  }, {
    heading: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "The ringtone alert when the receiver receives the push notification."
  }, {
    heading: "7-integrate-apns-on-the-client",
    content: "Open Xcode and select **Targets** > **Capability** > **Push Notifications** to enable push notification permission."
  }, {
    heading: "7-integrate-apns-on-the-client",
    content: "Pass the certificate name to the SDK:"
  }, {
    heading: "7-integrate-apns-on-the-client",
    content: "Get the device token and pass it to the server."
  }, {
    heading: "7-integrate-apns-on-the-client",
    content: "After the device token is registered, the iOS system will call back the device token to you in the following way. Pass the device token to the SDK."
  }, {
    heading: "test-apns-push",
    content: "After integrating and enabling FCM, you can test whether the push feature is successfully integrated."
  }, {
    heading: "test-apns-push",
    content: "Make sure your test device is a non-jail-broken iOS device. For more reliable testing, use a physical device."
  }, {
    heading: "test-push-notifications-1",
    content: "Log in to the app on your device and confirm that the device token is successfully bound."
  }, {
    heading: "test-push-notifications-1",
    content: "You can check the log or call RESTful API for getting user details to confirm whether the device token is successfully bound. If successful, there will be a `pushInfo` field under the `entities` field, and `pushInfo` will have relevant information such as `device_Id`, `device_token`, `notifier_name`, and others."
  }, {
    heading: "test-push-notifications-1",
    content: "Enable app notification bar permissions."
  }, {
    heading: "test-push-notifications-1",
    content: "Kill the application process."
  }, {
    heading: "test-push-notifications-1",
    content: "Send a test message in the Agora Console."
  }, {
    heading: "test-push-notifications-1",
    content: "Select **Operation Management** > **User** in the left navigation bar. On the **Users** page, select **Send Admin Message** in the **Action** column for the corresponding user ID. In the dialog box that pops up, select the message type, enter the message content, and then click **Send** ."
  }, {
    heading: "test-push-notifications-1",
    content: "In the **Push Certificate** page, in the **Action** column of each certificate, click **More** and **Test** will appear. This is to directly call the third-party interface to push. The message sending test in the **Users** page first calls the Chat message sending interface and then the third-party interface when the conditions are met (that is, the user is offline, the push certificate is valid and bound to the device token)."
  }, {
    heading: "test-push-notifications-1",
    content: "Check your device to see if it has received the push notification."
  }, {
    heading: "troubleshooting-1",
    content: "In case of issues, take the following steps:"
  }, {
    heading: "troubleshooting-1",
    content: "Check whether APNs push is correctly integrated or enabled:"
  }, {
    heading: "troubleshooting-1",
    content: "Select **Operation Management** > **User** in the left navigation bar. On the **User Management** page, select **Push Certificate** in the **Action** column for the corresponding user ID. In the pop-up box, check whether the certificate name and device token are displayed correctly."
  }, {
    heading: "troubleshooting-1",
    content: "Check whether the correct APNs certificate has been uploaded in Agora Console and the correct certificate environment has been set."
  }, {
    heading: "troubleshooting-1",
    content: "Check whether the message was pushed in the chat room. Chat rooms do not support offline message push."
  }, {
    heading: "troubleshooting-1",
    content: "Check whether online-only delivery is enabled (`AgoraChatMessage#deliverOnlineOnly = YES`). Messages set to be delivered only when the receiver is online will not be pushed."
  }, {
    heading: "troubleshooting-1",
    content: "Follow this guide to integrate and test push notifications in your environment."
  }, {
    heading: "prerequisites-2",
    content: "Before proceeding, ensure that you meet the following requirements:"
  }, {
    heading: "prerequisites-2",
    content: "You have initialized the Chat SDK. For details, see SDK quickstart."
  }, {
    heading: "prerequisites-2",
    content: "You understand the call frequency limit of the Chat APIs supported by different pricing plans as described in Limitations."
  }, {
    heading: "integrate-fcm-push-1",
    content: "This section guides you through how to integrate FCM with Chat."
  }, {
    heading: "1-create-a-project-in-firebase-1",
    content: "Log in to the Firebase console and click **Add project**."
  }, {
    heading: "1-create-a-project-in-firebase-1",
    content: "In the **Create a project** page, enter a project name, and click **Create project**."
  }, {
    heading: "1-create-a-project-in-firebase-1",
    content: "Note: You can toggle off Enable Google Analytics for this project if this option is not needed."
  }, {
    heading: "1-create-a-project-in-firebase-1",
    content: "After the project is ready, click **Continue** to redirect to the project page. Then click the **Flutter** icon and follow the **Firebase CLI** to set your project."
  }, {
    heading: "1-create-a-project-in-firebase-1",
    content: "In the **Project settings** page, perform the following operations:"
  }, {
    heading: "1-create-a-project-in-firebase-1",
    content: "For Android apps, find the **Android apps** in **Your apps**, and set your Android app according to the SDK instructions."
  }, {
    heading: "1-create-a-project-in-firebase-1",
    content: "For iOS apps, find the **Apple apps** in **Your apps**, and set your Apple app according to the SDK instructions."
  }, {
    heading: "1-create-a-project-in-firebase-1",
    content: "In the project page, click the project you have created."
  }, {
    heading: "1-create-a-project-in-firebase-1",
    content: "Query the sender ID. On the **Project settings** page, select the **Cloud Messaging** tab and view **Sender ID**. When uploading the FCM certificate to Agora Console, set the certificate name to the FCM sender ID."
  }, {
    heading: "1-create-a-project-in-firebase-1",
    content: "On the **Project settings** page, select the **Service accounts** tab and click **Generate new private key** to generate a JSON file. Save this file and upload it to Agora Console when using the V1 certificate."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "After successfully logging into Chat, you can upload the FCM push certificate to Agora Console:"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "Log in to Agora Console, and click **Project Management** in the left navigation bar."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "On the **Project Management** page, locate the project that has Chat enabled and click **Config**."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "On the project edit page, click **Config** next to **Chat**."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "On the project config page, select **Features** > **Push Certificate** and click **Add Push Certificate**."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "In the pop-up window, select the **Google** tab, and configure the following fields:"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "Parameter"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "Type"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "Required"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "Description"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "**Certificate Type**"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "No"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "Select whether to use a V1 certificate or a legacy certificate. **V1**: Recommended. You need to configure a **Private Key**. **Legacy**: Will soon be deprecated. You need to configure a **Push Key**."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "**Private Key**"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "file"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "Yes"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "Click **Generate new private key** on the **Project settings** > **Service accounts** page of the Firebase Console to generate the `.json` file, then upload it to Agora Console."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "**Push Key**"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "String"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "Yes"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "FCM Server Key. Obtain the server key in the &#x2A;*Cloud Messaging API (Legacy)** area of the **Project settings** > **Cloud Messaging** page of the Firebase Console.   &#x2A;*This parameter is only valid for legacy certificates.**"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "**Certificate Name**"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "String"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "Yes"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "The sender ID configured for the FCM. For the new version of the certificate, you can find the sender ID on the **Project settings** > **Cloud Messaging** page of the Firebase Console. For legacy certificates, go to the \\***Project settings > Cloud Messaging** page of the Firebase Console, and get the sender ID in the &#x2A;*Cloud  Messaging API (Legacy)** area.  The certificate name is the only condition used by the Agora server to determine which push channel the target device uses, so ensure that the sender set when integrating FCM in Chat is consistent with what is set here."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "**Sound**"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "String"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "No"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "The ringtone flag for when the receiver gets the push notification."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "**Push Priority**"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "No"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "Message delivery priority. See Setting the priority of a message."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "**Push Msg Type**"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "No"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-1",
    content: "The type of the message sent to the client through FCM. See Message types: **Data**: Data message, processed by the client application. **Notification**: Notification message, automatically processed by FCM SDK. **Both**: Notification messages and data messages can be sent through the FCM client."
  }, {
    heading: "switch-from-legacy-to-the-v1-certificate-1",
    content: "The legacy HTTP or XMPP API is being retired on June 20, 2024. In view of this, switch to the latest FCM API (HTTP v1) version of the certificate as soon as possible. See Firebase Console for details."
  }, {
    heading: "switch-from-legacy-to-the-v1-certificate-1",
    content: "Make sure that the uploaded V1 certificate is available, as the legacy one will be deleted upon upload. If the new certificate is not available, the push will fail."
  }, {
    heading: "switch-from-legacy-to-the-v1-certificate-1",
    content: "Take the following steps to switch from the old to the new certificate:"
  }, {
    heading: "switch-from-legacy-to-the-v1-certificate-1",
    content: "Click **Edit** in the **Action** column of the old certificate on the **Push Certificate** page."
  }, {
    heading: "switch-from-legacy-to-the-v1-certificate-1",
    content: "In the **Google** tab of the **Edit Push Certificate** window, switch the **Certificate Type** to **V1**."
  }, {
    heading: "switch-from-legacy-to-the-v1-certificate-1",
    content: "Click **Upload** to upload the locally saved V1 certificate file (.json)."
  }, {
    heading: "switch-from-legacy-to-the-v1-certificate-1",
    content: "Click **OK** to complete the switch."
  }, {
    heading: "3-integrate-fcm-on-the-client-1",
    content: "Take the following steps to integrate FCM on the client."
  }, {
    heading: "3-integrate-fcm-on-the-client-1",
    content: "Install `firebase_core`: Execute `flutter pub add firebase_core` in the project root directory."
  }, {
    heading: "3-integrate-fcm-on-the-client-1",
    content: "Install `firebase_messaging`: Execute `flutter pub add firebase_messaging` in the project root directory."
  }, {
    heading: "3-integrate-fcm-on-the-client-1",
    content: "**For Android**"
  }, {
    heading: "3-integrate-fcm-on-the-client-1",
    content: "In your flutter project's `Android/build.gradle` file, check the `google-services` version and make sure it is 4.3.14 or above."
  }, {
    heading: "3-integrate-fcm-on-the-client-1",
    content: "**For iOS**"
  }, {
    heading: "3-integrate-fcm-on-the-client-1",
    content: "Before your app can start receiving messages, enable push notifications and background modes in your Xcode project."
  }, {
    heading: "3-integrate-fcm-on-the-client-1",
    content: "Open the Xcode project workspace (`ios/Runner.xcworkspace`)."
  }, {
    heading: "3-integrate-fcm-on-the-client-1",
    content: "Enable push notifications."
  }, {
    heading: "3-integrate-fcm-on-the-client-1",
    content: "Enable background fetching and remote notifications background execution modes."
  }, {
    heading: "sdk-integration",
    content: "Initialize the Chat SDK and enable FCM:"
  }, {
    heading: "sdk-integration",
    content: "Pass the FCM device token to the server."
  }, {
    heading: "sdk-integration",
    content: "When the app is initialized, the FCM SDK generates a unique registration token for the client app on the user's device. Since FCM uses this token to determine which device to send the push message to, the Agora server needs to obtain the client app's registration token before sending the notification request to FCM. FCM then verifies the registration token and sends the notification message to the device."
  }, {
    heading: "test-fcm-push-1",
    content: "After integrating and enabling FCM, you can test whether the push feature is successfully integrated."
  }, {
    heading: "test-fcm-push-1",
    content: "Make sure your test device meets the following conditions:"
  }, {
    heading: "test-fcm-push-1",
    content: "Uses foreign IP addresses to establish connections."
  }, {
    heading: "test-fcm-push-1",
    content: "Supports Google GMS services (Google Mobile Services)."
  }, {
    heading: "test-fcm-push-1",
    content: "Can access Google network services; otherwise, the device won't be able to receive push notifications from the FCM service."
  }, {
    heading: "test-fcm-push-1",
    content: "For more reliable testing, use a physical device."
  }, {
    heading: "test-push-notifications-2",
    content: "Log in to the app on your device and confirm that the device token is successfully bound."
  }, {
    heading: "test-push-notifications-2",
    content: "You can check the log or call RESTful API for getting user details to confirm whether the device token is successfully bound. If successful, there will be a `pushInfo` field under the `entities` field, and `pushInfo` will have relevant information such as `device_Id`, `device_token`, `notifier_name`, and others."
  }, {
    heading: "test-push-notifications-2",
    content: "Enable app notification bar permissions."
  }, {
    heading: "test-push-notifications-2",
    content: "Kill the application process."
  }, {
    heading: "test-push-notifications-2",
    content: "Send a test message in the Agora Console."
  }, {
    heading: "test-push-notifications-2",
    content: "Select **Operation Management** > **User** in the left navigation bar. On the **Users** page, select **Send Admin Message** in the **Action** column for the corresponding user ID. In the dialog box that pops up, select the message type, enter the message content, and then click **Send** ."
  }, {
    heading: "test-push-notifications-2",
    content: "In the **Push Certificate** page, in the **Action** column of each certificate, click **More** and **Test** will appear. This is to directly call the third-party interface to push. The message sending test in the **Users** page first calls the Chat message sending interface and then the third-party interface when the conditions are met (that is, the user is offline, the push certificate is valid and bound to the device token)."
  }, {
    heading: "test-push-notifications-2",
    content: "Check your device to see if it has received the push notification."
  }, {
    heading: "troubleshooting-2",
    content: "In case of issues, take the following steps:"
  }, {
    heading: "troubleshooting-2",
    content: "Check whether FCM push is correctly integrated or enabled:"
  }, {
    heading: "troubleshooting-2",
    content: "Select **Operation Management** > **User** in the left navigation bar. On the **User Management** page, select **Push Certificate** in the **Action** column for the corresponding user ID. In the pop-up box, check whether the certificate name and device token are displayed correctly."
  }, {
    heading: "troubleshooting-2",
    content: "Check whether the correct FCM certificate is uploaded in the Agora Console."
  }, {
    heading: "troubleshooting-2",
    content: "Check whether the message is pushed in the chat room. The chat room does not support offline message push."
  }, {
    heading: "troubleshooting-2",
    content: "Check if the device supports GMS."
  }, {
    heading: "troubleshooting-2",
    content: "Check whether online-only delivery is enabled (`deliverOnlineOnly` = `true`). Messages set to be delivered only when the receiver is online will not be pushed."
  }, {
    heading: "troubleshooting-2",
    content: "Follow this guide to integrate and test push notifications in your environment."
  }, {
    heading: "prerequisites-3",
    content: "Before proceeding, ensure that you meet the following requirements:"
  }, {
    heading: "prerequisites-3",
    content: "You have initialized the Chat SDK. For details, see SDK quickstart."
  }, {
    heading: "prerequisites-3",
    content: "You understand the call frequency limit of the Chat APIs supported by different pricing plans as described in Limitations."
  }, {
    heading: "integrate-fcm-push-2",
    content: "This section guides you through how to integrate FCM with Chat."
  }, {
    heading: "1-create-a-project-in-firebase-2",
    content: "Log in to Firebase console, and click **Add project**."
  }, {
    heading: "1-create-a-project-in-firebase-2",
    content: "On the **Create a project** page, enter a project name, and proceed with prompts."
  }, {
    heading: "1-create-a-project-in-firebase-2",
    content: "Query the sender ID. On the **Project settings** page, select the **Cloud Messaging** tab and view **Sender ID**. When uploading the FCM certificate to Agora Console, set the certificate name to the FCM sender ID."
  }, {
    heading: "1-create-a-project-in-firebase-2",
    content: "On the **Project settings** page, select the **Service accounts** tab and click **Generate new private key** to generate a JSON file. Save this file and upload it to Agora Console when using the V1 certificate."
  }, {
    heading: "1-create-a-project-in-firebase-2",
    content: "After the project is created, add an `iOS` application or an `Android` application according to the following steps:"
  }, {
    heading: "1-create-a-project-in-firebase-2",
    content: "Add an `iOS` app:"
  }, {
    heading: "1-create-a-project-in-firebase-2",
    content: "The package name is the same as that of the `iOS` app;"
  }, {
    heading: "1-create-a-project-in-firebase-2",
    content: "Once created, move the downloaded `GoogleService-Info.plist` file to the root directory of the `Xcode` project, and add it to all targets;"
  }, {
    heading: "1-create-a-project-in-firebase-2",
    content: "Upload the `APNs` certificate on the Cloud Messaging page."
  }, {
    heading: "1-create-a-project-in-firebase-2",
    content: "Add an `Android` app:"
  }, {
    heading: "1-create-a-project-in-firebase-2",
    content: "The package name is the same as that of the `Android` app;"
  }, {
    heading: "1-create-a-project-in-firebase-2",
    content: "Once created, move the downloaded `google-services.json` file to your module (application level) root directory."
  }, {
    heading: "1-create-a-project-in-firebase-2",
    content: "For detailed FCM configurations, you can see the React Native Firebase document."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "After successfully logging into Chat, you can upload the FCM push certificate to Agora Console:"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "Log in to Agora Console, and click **Project Management** in the left navigation bar."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "On the **Project Management** page, locate the project that has Chat enabled and click **Config**."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "On the project edit page, click **Config** next to **Chat**."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "On the project config page, select **Features** > **Push Certificate** and click **Add Push Certificate**."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "In the pop-up window, select the **Google** tab, and configure the following fields:"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "Parameter"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "Type"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "Required"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "Description"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "**Certificate Type**"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "No"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "Select whether to use a V1 certificate or a legacy certificate. **V1**: Recommended. You need to configure a **Private Key**. **Legacy**: Will soon be deprecated. You need to configure a **Push Key**."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "**Private Key**"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "file"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "Yes"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "Click **Generate new private key** on the **Project settings** > **Service accounts** page of the Firebase Console to generate the `.json` file, then upload it to Agora Console."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "**Push Key**"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "String"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "Yes"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "FCM Server Key. Obtain the server key in the &#x2A;*Cloud Messaging API (Legacy)** area of the **Project settings** > **Cloud Messaging** page of the Firebase Console.   &#x2A;*This parameter is only valid for legacy certificates.**"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "**Certificate Name**"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "String"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "Yes"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "The sender ID configured for the FCM. For the new version of the certificate, you can find the sender ID on the **Project settings** > **Cloud Messaging** page of the Firebase Console. For legacy certificates, go to the \\***Project settings > Cloud Messaging** page of the Firebase Console, and get the sender ID in the &#x2A;*Cloud  Messaging API (Legacy)** area.  The certificate name is the only condition used by the Agora server to determine which push channel the target device uses, so ensure that the sender set when integrating FCM in Chat is consistent with what is set here."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "**Sound**"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "String"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "No"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "The ringtone flag for when the receiver gets the push notification."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "**Push Priority**"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "No"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "Message delivery priority. See Setting the priority of a message."
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "**Push Msg Type**"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "No"
  }, {
    heading: "2-upload-fcm-certificate-to-agora-console-2",
    content: "The type of the message sent to the client through FCM. See Message types: **Data**: Data message, processed by the client application. **Notification**: Notification message, automatically processed by FCM SDK. **Both**: Notification messages and data messages can be sent through the FCM client."
  }, {
    heading: "switch-from-legacy-to-the-v1-certificate-2",
    content: "The legacy HTTP or XMPP API is being retired on June 20, 2024. In view of this, switch to the latest FCM API (HTTP v1) version of the certificate as soon as possible. See Firebase Console for details."
  }, {
    heading: "switch-from-legacy-to-the-v1-certificate-2",
    content: "Make sure that the uploaded V1 certificate is available, as the legacy one will be deleted upon upload. If the new certificate is not available, the push will fail."
  }, {
    heading: "switch-from-legacy-to-the-v1-certificate-2",
    content: "Take the following steps to switch from the old to the new certificate:"
  }, {
    heading: "switch-from-legacy-to-the-v1-certificate-2",
    content: "Click **Edit** in the **Action** column of the old certificate on the **Push Certificate** page."
  }, {
    heading: "switch-from-legacy-to-the-v1-certificate-2",
    content: "In the **Google** tab of the **Edit Push Certificate** window, switch the **Certificate Type** to **V1**."
  }, {
    heading: "switch-from-legacy-to-the-v1-certificate-2",
    content: "Click **Upload** to upload the locally saved V1 certificate file (.json)."
  }, {
    heading: "switch-from-legacy-to-the-v1-certificate-2",
    content: "Click **OK** to complete the switch."
  }, {
    heading: "3-integrate-fcm-on-the-client-2",
    content: "Take the following steps to integrate FCM on the client:"
  }, {
    heading: "3-integrate-fcm-on-the-client-2",
    content: "Add dependencies:"
  }, {
    heading: "3-integrate-fcm-on-the-client-2",
    content: "Add native platform configuration:"
  }, {
    heading: "3-integrate-fcm-on-the-client-2",
    content: "**Android**"
  }, {
    heading: "3-integrate-fcm-on-the-client-2",
    content: "Download the `google-services.json` file and put it in the following path in your project: `/android/app/google - services.json`."
  }, {
    heading: "3-integrate-fcm-on-the-client-2",
    content: "In your `/android/build.gradle` file, add the google-services plugin as a dependency:"
  }, {
    heading: "3-integrate-fcm-on-the-client-2",
    content: "Add the google-services plugin to the `/android/app/build.gradle` file and execute the plugin:"
  }, {
    heading: "3-integrate-fcm-on-the-client-2",
    content: "Run the `pod install` command in the `ios` directory to install dependencies."
  }, {
    heading: "3-integrate-fcm-on-the-client-2",
    content: "Open the `/ios/{projectName}.xcworkspace` file in Xcode."
  }, {
    heading: "3-integrate-fcm-on-the-client-2",
    content: "Right-click the project name, select **Add files** , then select the downloaded `GoogleService-Info.plist` file from your local computer, and make sure to select **Copy items if needed**."
  }, {
    heading: "3-integrate-fcm-on-the-client-2",
    content: "To do this, open the `/ios/{projectName}/AppDelegate.mm` file (`AppDelegate.m` in earlier versions of React Native)."
  }, {
    heading: "3-integrate-fcm-on-the-client-2",
    content: 'At the top of the file, import the Firebase SDK after &#x2A;*#import "AppDelegate.h"**.'
  }, {
    heading: "3-integrate-fcm-on-the-client-2",
    content: "In the `didFinishLaunchingWithOptions` method, add the following code at the top:"
  }, {
    heading: "fcm-push-code-implementation",
    content: "Set up message notifications:"
  }, {
    heading: "fcm-push-code-implementation",
    content: "Initialize the Chat SDK:"
  }, {
    heading: "fcm-push-code-implementation",
    content: "Log in to the server:"
  }, {
    heading: "fcm-push-code-implementation",
    content: "Send the device token to the server:"
  }, {
    heading: "test-fcm-push-2",
    content: "After integrating and enabling FCM, you can test whether the push feature is successfully integrated."
  }, {
    heading: "test-fcm-push-2",
    content: "Make sure your test device meets the following conditions:"
  }, {
    heading: "test-fcm-push-2",
    content: "Uses foreign IP addresses to establish connections."
  }, {
    heading: "test-fcm-push-2",
    content: "Supports Google GMS services (Google Mobile Services)."
  }, {
    heading: "test-fcm-push-2",
    content: "Can access Google network services; otherwise, the device won't be able to receive push notifications from the FCM service."
  }, {
    heading: "test-fcm-push-2",
    content: "For more reliable testing, use a physical device."
  }, {
    heading: "test-push-notifications-3",
    content: "Log in to the app on your device and confirm that the device token is successfully bound."
  }, {
    heading: "test-push-notifications-3",
    content: "You can check the log or call RESTful API for getting user details to confirm whether the device token is successfully bound. If successful, there will be a `pushInfo` field under the `entities` field, and `pushInfo` will have relevant information such as `device_Id`, `device_token`, `notifier_name`, and others."
  }, {
    heading: "test-push-notifications-3",
    content: "Enable app notification bar permissions."
  }, {
    heading: "test-push-notifications-3",
    content: "Kill the application process."
  }, {
    heading: "test-push-notifications-3",
    content: "Send a test message in the Agora Console."
  }, {
    heading: "test-push-notifications-3",
    content: "Select **Operation Management** > **User** in the left navigation bar. On the **Users** page, select **Send Admin Message** in the **Action** column for the corresponding user ID. In the dialog box that pops up, select the message type, enter the message content, and then click **Send** ."
  }, {
    heading: "test-push-notifications-3",
    content: "In the **Push Certificate** page, in the **Action** column of each certificate, click **More** and **Test** will appear. This is to directly call the third-party interface to push. The message sending test in the **Users** page first calls the Chat message sending interface and then the third-party interface when the conditions are met (that is, the user is offline, the push certificate is valid and bound to the device token)."
  }, {
    heading: "test-push-notifications-3",
    content: "Check your device to see if it has received the push notification."
  }, {
    heading: "troubleshooting-3",
    content: "In case of issues, take the following steps:"
  }, {
    heading: "troubleshooting-3",
    content: "Check whether FCM push is correctly integrated or enabled:"
  }, {
    heading: "troubleshooting-3",
    content: "Select **Operation Management** > **User** in the left navigation bar. On the **User Management** page, select **Push Certificate** in the **Action** column for the corresponding user ID. In the pop-up box, check whether the certificate name and device token are displayed correctly."
  }, {
    heading: "troubleshooting-3",
    content: "Check whether the correct FCM certificate is uploaded in the Agora Console."
  }, {
    heading: "troubleshooting-3",
    content: "Check whether the message is pushed in the chat room. The chat room does not support offline message push."
  }, {
    heading: "troubleshooting-3",
    content: "Check if the device supports GMS."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "integrate-fcm-push",
    content: "Integrate FCM push"
  }, {
    id: "1-create-a-project-in-firebase",
    content: "1\\. Create a project in Firebase"
  }, {
    id: "2-upload-fcm-certificate-to-agora-console",
    content: "2\\. Upload FCM certificate to Agora Console"
  }, {
    id: "switch-from-legacy-to-the-v1-certificate",
    content: "Switch from legacy to the V1 certificate"
  }, {
    id: "3-integrate-fcm-on-the-client",
    content: "3\\. Integrate FCM on the client"
  }, {
    id: "test-fcm-push",
    content: "Test FCM push"
  }, {
    id: "test-push-notifications",
    content: "Test push notifications"
  }, {
    id: "troubleshooting",
    content: "Troubleshooting"
  }, {
    id: "prerequisites-1",
    content: "Prerequisites"
  }, {
    id: "integrate-apns-push",
    content: "Integrate APNs push"
  }, {
    id: "1-create-a-push-certificate-on-the-apple-developer-platform",
    content: "1\\. Create a push certificate on the Apple Developer Platform"
  }, {
    id: "2-create-an-app-id",
    content: "2\\. Create an App ID"
  }, {
    id: "3-create-push-notification-certificates",
    content: "3\\. Create push notification certificates"
  }, {
    id: "4-generate-the-push-certificate",
    content: "4\\. Generate the push certificate"
  }, {
    id: "5-generate-the-provisioning-profile-file",
    content: "5\\. Generate the Provisioning Profile file"
  }, {
    id: "6-upload-the-apns-certificate-in-the-agora-console",
    content: "6\\. Upload the APNs certificate in the Agora Console"
  }, {
    id: "7-integrate-apns-on-the-client",
    content: "7\\. Integrate APNs on the client"
  }, {
    id: "test-apns-push",
    content: "Test APNs push"
  }, {
    id: "test-push-notifications-1",
    content: "Test push notifications"
  }, {
    id: "troubleshooting-1",
    content: "Troubleshooting"
  }, {
    id: "prerequisites-2",
    content: "Prerequisites"
  }, {
    id: "integrate-fcm-push-1",
    content: "Integrate FCM push"
  }, {
    id: "1-create-a-project-in-firebase-1",
    content: "1\\. Create a project in Firebase"
  }, {
    id: "2-upload-fcm-certificate-to-agora-console-1",
    content: "2\\. Upload FCM certificate to Agora Console"
  }, {
    id: "switch-from-legacy-to-the-v1-certificate-1",
    content: "Switch from legacy to the V1 certificate"
  }, {
    id: "3-integrate-fcm-on-the-client-1",
    content: "3\\. Integrate FCM on the client"
  }, {
    id: "sdk-integration",
    content: "SDK integration"
  }, {
    id: "test-fcm-push-1",
    content: "Test FCM push"
  }, {
    id: "test-push-notifications-2",
    content: "Test push notifications"
  }, {
    id: "troubleshooting-2",
    content: "Troubleshooting"
  }, {
    id: "prerequisites-3",
    content: "Prerequisites"
  }, {
    id: "integrate-fcm-push-2",
    content: "Integrate FCM push"
  }, {
    id: "1-create-a-project-in-firebase-2",
    content: "1\\. Create a project in Firebase"
  }, {
    id: "2-upload-fcm-certificate-to-agora-console-2",
    content: "2\\. Upload FCM certificate to Agora Console"
  }, {
    id: "switch-from-legacy-to-the-v1-certificate-2",
    content: "Switch from legacy to the V1 certificate"
  }, {
    id: "3-integrate-fcm-on-the-client-2",
    content: "3\\. Integrate FCM on the client"
  }, {
    id: "fcm-push-code-implementation",
    content: "FCM push code implementation"
  }, {
    id: "test-fcm-push-2",
    content: "Test FCM push"
  }, {
    id: "test-push-notifications-3",
    content: "Test push notifications"
  }, {
    id: "troubleshooting-3",
    content: "Troubleshooting"
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
  url: "#integrate-fcm-push",
  title: _jsx(_Fragment, {
    children: "Integrate FCM push"
  })
}, {
  depth: 3,
  url: "#1-create-a-project-in-firebase",
  title: _jsx(_Fragment, {
    children: "1. Create a project in Firebase"
  })
}, {
  depth: 3,
  url: "#2-upload-fcm-certificate-to-agora-console",
  title: _jsx(_Fragment, {
    children: "2. Upload FCM certificate to Agora Console"
  })
}, {
  depth: 4,
  url: "#switch-from-legacy-to-the-v1-certificate",
  title: _jsx(_Fragment, {
    children: "Switch from legacy to the V1 certificate"
  })
}, {
  depth: 3,
  url: "#3-integrate-fcm-on-the-client",
  title: _jsx(_Fragment, {
    children: "3. Integrate FCM on the client"
  })
}, {
  depth: 2,
  url: "#test-fcm-push",
  title: _jsx(_Fragment, {
    children: "Test FCM push"
  })
}, {
  depth: 3,
  url: "#test-push-notifications",
  title: _jsx(_Fragment, {
    children: "Test push notifications"
  })
}, {
  depth: 3,
  url: "#troubleshooting",
  title: _jsx(_Fragment, {
    children: "Troubleshooting"
  })
}, {
  depth: 2,
  url: "#prerequisites-1",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#integrate-apns-push",
  title: _jsx(_Fragment, {
    children: "Integrate APNs push"
  })
}, {
  depth: 3,
  url: "#1-create-a-push-certificate-on-the-apple-developer-platform",
  title: _jsx(_Fragment, {
    children: "1. Create a push certificate on the Apple Developer Platform"
  })
}, {
  depth: 3,
  url: "#2-create-an-app-id",
  title: _jsx(_Fragment, {
    children: "2. Create an App ID"
  })
}, {
  depth: 3,
  url: "#3-create-push-notification-certificates",
  title: _jsx(_Fragment, {
    children: "3. Create push notification certificates"
  })
}, {
  depth: 3,
  url: "#4-generate-the-push-certificate",
  title: _jsx(_Fragment, {
    children: "4. Generate the push certificate"
  })
}, {
  depth: 3,
  url: "#5-generate-the-provisioning-profile-file",
  title: _jsx(_Fragment, {
    children: "5. Generate the Provisioning Profile file"
  })
}, {
  depth: 3,
  url: "#6-upload-the-apns-certificate-in-the-agora-console",
  title: _jsxs(_Fragment, {
    children: ["6. Upload the APNs certificate in the ", _jsx("a", {
      href: "https://console.agora.io/",
      children: "Agora Console"
    })]
  })
}, {
  depth: 3,
  url: "#7-integrate-apns-on-the-client",
  title: _jsx(_Fragment, {
    children: "7. Integrate APNs on the client"
  })
}, {
  depth: 2,
  url: "#test-apns-push",
  title: _jsx(_Fragment, {
    children: "Test APNs push"
  })
}, {
  depth: 3,
  url: "#test-push-notifications-1",
  title: _jsx(_Fragment, {
    children: "Test push notifications"
  })
}, {
  depth: 3,
  url: "#troubleshooting-1",
  title: _jsx(_Fragment, {
    children: "Troubleshooting"
  })
}, {
  depth: 2,
  url: "#prerequisites-2",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#integrate-fcm-push-1",
  title: _jsx(_Fragment, {
    children: "Integrate FCM push"
  })
}, {
  depth: 3,
  url: "#1-create-a-project-in-firebase-1",
  title: _jsx(_Fragment, {
    children: "1. Create a project in Firebase"
  })
}, {
  depth: 3,
  url: "#2-upload-fcm-certificate-to-agora-console-1",
  title: _jsx(_Fragment, {
    children: "2. Upload FCM certificate to Agora Console"
  })
}, {
  depth: 4,
  url: "#switch-from-legacy-to-the-v1-certificate-1",
  title: _jsx(_Fragment, {
    children: "Switch from legacy to the V1 certificate"
  })
}, {
  depth: 3,
  url: "#3-integrate-fcm-on-the-client-1",
  title: _jsx(_Fragment, {
    children: "3. Integrate FCM on the client"
  })
}, {
  depth: 4,
  url: "#sdk-integration",
  title: _jsx(_Fragment, {
    children: "SDK integration"
  })
}, {
  depth: 2,
  url: "#test-fcm-push-1",
  title: _jsx(_Fragment, {
    children: "Test FCM push"
  })
}, {
  depth: 3,
  url: "#test-push-notifications-2",
  title: _jsx(_Fragment, {
    children: "Test push notifications"
  })
}, {
  depth: 3,
  url: "#troubleshooting-2",
  title: _jsx(_Fragment, {
    children: "Troubleshooting"
  })
}, {
  depth: 2,
  url: "#prerequisites-3",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#integrate-fcm-push-2",
  title: _jsx(_Fragment, {
    children: "Integrate FCM push"
  })
}, {
  depth: 3,
  url: "#1-create-a-project-in-firebase-2",
  title: _jsx(_Fragment, {
    children: "1. Create a project in Firebase"
  })
}, {
  depth: 3,
  url: "#2-upload-fcm-certificate-to-agora-console-2",
  title: _jsx(_Fragment, {
    children: "2. Upload FCM certificate to Agora Console"
  })
}, {
  depth: 4,
  url: "#switch-from-legacy-to-the-v1-certificate-2",
  title: _jsx(_Fragment, {
    children: "Switch from legacy to the V1 certificate"
  })
}, {
  depth: 3,
  url: "#3-integrate-fcm-on-the-client-2",
  title: _jsx(_Fragment, {
    children: "3. Integrate FCM on the client"
  })
}, {
  depth: 4,
  url: "#fcm-push-code-implementation",
  title: _jsx(_Fragment, {
    children: "FCM push code implementation"
  })
}, {
  depth: 2,
  url: "#test-fcm-push-2",
  title: _jsx(_Fragment, {
    children: "Test FCM push"
  })
}, {
  depth: 3,
  url: "#test-push-notifications-3",
  title: _jsx(_Fragment, {
    children: "Test push notifications"
  })
}, {
  depth: 3,
  url: "#troubleshooting-3",
  title: _jsx(_Fragment, {
    children: "Troubleshooting"
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
    platforms: '["windows","unity","web","android","ios","flutter","react-native"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
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
    }), _jsxs(_PlatformPanel, {
      platform: "web",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "web"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "This feature guide is not available yet."
        })
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
        children: "Follow this guide to integrate and test push notifications in your environment."
      }), _jsx(_components.h2, {
        id: "prerequisites",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Before proceeding, ensure that you meet the following requirements:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["You have initialized the Chat SDK. For details, see ", _jsx(_components.a, {
            href: "../../../get-started-sdk",
            children: "SDK quickstart"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["You understand the call frequency limit of the Chat APIs supported by different pricing plans as described in ", _jsx(_components.a, {
            href: "../../limitations",
            children: "Limitations"
          }), "."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "integrate-fcm-push",
        children: "Integrate FCM push"
      }), _jsx(_components.p, {
        children: "This section guides you through integrating FCM with Chat."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "For Android devices, if FCM and push services from other manufacturers are enabled at the same time, FCM push services will be used first."
          })
        })
      }), _jsx(_components.h3, {
        id: "1-create-a-project-in-firebase",
        children: "1. Create a project in Firebase"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Log in to the ", _jsx(_components.a, {
              href: "https://console.firebase.google.com/",
              children: "Firebase console"
            }), " and ", _jsx(_components.a, {
              href: "https://firebase.google.com/docs/android/setup/#create-firebase-project",
              children: "add a project"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.a, {
              href: "https://firebase.google.com/docs/android/setup/#register-app",
              children: "Register the application"
            }), " in the project."]
          }), `
`, _jsxs(_components.p, {
            children: ["In the ", _jsx(_components.strong, {
              children: "Download and then add config file"
            }), " step of the ", _jsx(_components.strong, {
              children: "Add Firebase to your Android app"
            }), " page, click ", _jsx(_components.strong, {
              children: "Download google-services.json"
            }), " and put the file into your Android app module root directory."]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_fcm_download_googleservice.png",
              alt: "push_fcm_download_googleservice"
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Query the sender ID. On the ", _jsx(_components.strong, {
              children: "Project settings"
            }), " page, select the ", _jsx(_components.strong, {
              children: "Cloud Messaging"
            }), " tab and view ", _jsx(_components.strong, {
              children: "Sender ID"
            }), ". When uploading the FCM certificate to Agora Console, set the certificate name to the FCM sender ID."]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_fcm_senderid.png",
              alt: "push_fcm_senderid.png"
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the ", _jsx(_components.strong, {
              children: "Project settings"
            }), " page, select the ", _jsx(_components.strong, {
              children: "Service accounts"
            }), " tab and click ", _jsx(_components.strong, {
              children: "Generate new private key"
            }), " to generate a JSON file. Save this file and upload it to Agora Console when using the V1 certificate."]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_fcm_private_key.png",
              alt: "push_fcm_private_key"
            })
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "2-upload-fcm-certificate-to-agora-console",
        children: "2. Upload FCM certificate to Agora Console"
      }), _jsx(_components.p, {
        children: "After successfully logging into Chat, you can upload the FCM push certificate to Agora Console:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Log in to ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), ", and click ", _jsx(_components.strong, {
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
            }), " page, locate the project that has Chat enabled and click ", _jsx(_components.strong, {
              children: "Config"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the project editing page, click ", _jsx(_components.strong, {
              children: "Config"
            }), " next to ", _jsx(_components.strong, {
              children: "Chat"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the project config page, select ", _jsx(_components.strong, {
              children: "Features"
            }), " > ", _jsx(_components.strong, {
              children: "Push Certificate"
            }), " and click ", _jsx(_components.strong, {
              children: "Add Push Certificate"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In the pop-up window, select the ", _jsx(_components.strong, {
              children: "Google"
            }), " tab, and configure the following fields:"]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_fcm_add_certificate.png",
              alt: "push_fcm_add_certificate"
            })
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
                  children: "Required"
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
                  children: _jsx(_components.strong, {
                    children: "Certificate Type"
                  })
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  }
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "No"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["Select whether to use a V1 certificate or a legacy certificate. ", _jsx(_components.strong, {
                    children: "V1"
                  }), ": Recommended. You need to configure a ", _jsx(_components.strong, {
                    children: "Private Key"
                  }), ". ", _jsx(_components.strong, {
                    children: "Legacy"
                  }), ": Will soon be deprecated. You need to configure a ", _jsx(_components.strong, {
                    children: "Push Key"
                  }), "."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Private Key"
                  })
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "file"
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Yes"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["Click ", _jsx(_components.strong, {
                    children: "Generate new private key"
                  }), " on the ", _jsx(_components.strong, {
                    children: "Project settings"
                  }), " > ", _jsx(_components.strong, {
                    children: "Service accounts"
                  }), " page of the ", _jsx(_components.a, {
                    href: "https://console.firebase.google.com",
                    children: "Firebase Console"
                  }), " to generate the ", _jsx(_components.code, {
                    children: ".json"
                  }), " file, then upload it to Agora Console."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Push Key"
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
                  children: "Yes"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["FCM Server Key. Obtain the server key in the ", _jsx(_components.strong, {
                    children: "Cloud Messaging API (Legacy)"
                  }), " area of the ", _jsx(_components.strong, {
                    children: "Project settings"
                  }), " > ", _jsx(_components.strong, {
                    children: "Cloud Messaging"
                  }), " page of the ", _jsx(_components.a, {
                    href: "https://console.firebase.google.com",
                    children: "Firebase Console"
                  }), ".   ", _jsx(_components.strong, {
                    children: "This parameter is only valid for legacy certificates."
                  })]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Certificate Name"
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
                  children: "Yes"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["The sender ID configured for the FCM. For the new version of the certificate, you can find the sender ID on the ", _jsx(_components.strong, {
                    children: "Project settings"
                  }), " > ", _jsx(_components.strong, {
                    children: "Cloud Messaging"
                  }), " page of the ", _jsx(_components.a, {
                    href: "https://console.firebase.google.com",
                    children: "Firebase Console"
                  }), ". For legacy certificates, go to the *", _jsx(_components.strong, {
                    children: "Project settings > Cloud Messaging"
                  }), " page of the ", _jsx(_components.a, {
                    href: "https://console.firebase.google.com",
                    children: "Firebase Console"
                  }), ", and get the sender ID in the ", _jsx(_components.strong, {
                    children: "Cloud  Messaging API (Legacy)"
                  }), " area.  The certificate name is the only condition used by the Agora server to determine which push channel the target device uses, so ensure that the sender set when integrating FCM in Chat is consistent with what is set here."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Sound"
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
                  children: "No"
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "The ringtone flag for when the receiver gets the push notification."
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Push Priority"
                  })
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  }
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "No"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["Message delivery priority. See ", _jsx(_components.a, {
                    href: "https://firebase.google.cn/docs/cloud-messaging/concept-options#setting-the-priority-of-a-message",
                    children: "Setting the priority of a message"
                  }), "."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Push Msg Type"
                  })
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  }
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "No"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["The type of the message sent to the client through FCM. See ", _jsx(_components.a, {
                    href: "https://firebase.google.com/docs/cloud-messaging/concept-options#notifications_and_data_messages",
                    children: "Message types"
                  }), ": ", _jsx(_components.strong, {
                    children: "Data"
                  }), ": Data message, processed by the client application. ", _jsx(_components.strong, {
                    children: "Notification"
                  }), ": Notification message, automatically processed by FCM SDK. ", _jsx(_components.strong, {
                    children: "Both"
                  }), ": Notification messages and data messages can be sent through the FCM client."]
                })]
              })]
            })]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h4, {
        id: "switch-from-legacy-to-the-v1-certificate",
        children: "Switch from legacy to the V1 certificate"
      }), _jsxs(_components.p, {
        children: ["The legacy HTTP or XMPP API is being retired on June 20, 2024. In view of this, switch to the latest FCM API (HTTP v1) version of the certificate as soon as possible. See ", _jsx(_components.a, {
          href: "https://console.firebase.google.com",
          children: "Firebase Console"
        }), " for details."]
      }), _jsx(_components.p, {
        children: "Make sure that the uploaded V1 certificate is available, as the legacy one will be deleted upon upload. If the new certificate is not available, the push will fail."
      }), _jsx(_components.p, {
        children: "Take the following steps to switch from the old to the new certificate:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Click ", _jsx(_components.strong, {
              children: "Edit"
            }), " in the ", _jsx(_components.strong, {
              children: "Action"
            }), " column of the old certificate on the ", _jsx(_components.strong, {
              children: "Push Certificate"
            }), " page."]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_fcm_oldcertificate_edit.png",
              alt: "push_fcm_oldcertificate_edit"
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In the ", _jsx(_components.strong, {
              children: "Google"
            }), " tab of the ", _jsx(_components.strong, {
              children: "Edit Push Certificate"
            }), " window, switch the ", _jsx(_components.strong, {
              children: "Certificate Type"
            }), " to ", _jsx(_components.strong, {
              children: "V1"
            }), "."]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_fcm_oldcertificate_switch.png",
              alt: "push_fcm_oldcertificate_switch"
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Click ", _jsx(_components.strong, {
              children: "Upload"
            }), " to upload the locally saved V1 certificate file (", _jsx(_components.code, {
              children: ".json"
            }), ")."]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_fcm_newcertificate_upload.png",
              alt: "push_fcm_newcertificate_upload"
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Click ", _jsx(_components.strong, {
              children: "OK"
            }), " to complete the switch."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "3-integrate-fcm-on-the-client",
        children: "3. Integrate FCM on the client"
      }), _jsx(_components.p, {
        children: "Take the following steps to integrate FCM on the client."
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In the ", _jsx(_components.code, {
              children: "build.gradle"
            }), " file of your app project, configure the FCM library dependency:"]
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "plugins {"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    id "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'com.android.application'"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // Add the Google services Gradle plugin"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    id "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'com.google.gms.google-services'"
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
                    children: "dependencies {"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // ..."
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // Import the Firebase BoM"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    implementation "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "platform"
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
                    children: "'com.google.firebase:firebase-bom:28.4.1'"
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // Declare FCM dependency"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // When using BoM, do not specify versions in Firebase library dependencies"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    implementation "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'com.google.firebase:firebase-messaging'"
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
          }), `
`, _jsxs(_components.p, {
            children: ["In your ", _jsx(_components.code, {
              children: "/build.gradle"
            }), " file, configure the following:"]
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "plugins {"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "  // ..."
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "  // Add the dependency for the Google services Gradle plugin"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  id "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'com.google.gms.google-services'"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " version "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'4.3.15'"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " apply "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "false"
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
          }), `
`, _jsxs(_components.p, {
            children: ["For Gradle 5.0 and above, BoM is automatically enabled; for versions prior to Gradle 5.0, you need to enable it. For details, see ", _jsx(_components.a, {
              href: "https://firebase.google.en/docs/android/learn-more#bom",
              children: "Firebase Android BoM"
            }), " and ", _jsx(_components.a, {
              href: "https://firebase.google.en/support/release-notes/android",
              children: "Firebase Android SDK Release Notes"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Sync your project with gradle files, extend ", _jsx(_components.code, {
              children: "FirebaseMessagingService"
            }), ", and register it in the ", _jsx(_components.code, {
              children: "AndroidManifest.xml"
            }), " file of your project:"]
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
                    children: " FCMMSGService"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " extends"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " FirebaseMessagingService"
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
                    children: "private"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " static"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " final"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " String TAG "
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
                    children: ' "FCMMSGService"'
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
                    children: " onMessageReceived"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(RemoteMessage "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: "remoteMessage"
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
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "        super"
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
                    children: "onMessageReceived"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(remoteMessage);"
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
                    children: " (remoteMessage."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "getData"
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
                    children: "size"
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
                    children: "            String message "
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
                    children: " remoteMessage."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "getData"
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
                    children: "get"
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
                    children: '"alert"'
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
                    children: "            Log."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "d"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(TAG, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"onMessageReceived: "'
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
                    children: " message);"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " }"
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
                    children: " onNewToken"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(@"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "NonNull"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " String "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: "token"
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
                    children: "        great . "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "onNewToken"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(token);"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        Log."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "d"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(TAG, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"onNewToken: "'
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
                    children: " token);"
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
                    children: "sendFCMTokenToServer"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(token);"
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "<"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "service"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    android:name"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '".FCMMSGService"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    android:exported"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"false"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "intent-filter"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "action"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " android:name"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"com.google.firebase.MESSAGING_EVENT"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " />"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "intent-filter"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "service"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
                  })]
                })]
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Initialize the Chat SDK and enable FCM:"
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "ChatOptions options "
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
                    children: " ChatOptions"
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
                    children: "..."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "PushConfig.Builder builder "
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
                    children: " PushConfig."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "Builder"
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Replace with your FCM Sender ID."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "builder."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "enableFCM"
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
                    children: '"Your FCM sender id"'
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
                    children: "// Configure push settings in the ChatOptions class."
                  })
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
                    children: "setPushConfig"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(builder."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "build"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "());"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Initialize the IM SDK."
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
                    children: "init"
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
                    children: ", options);"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Set up push monitoring."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "PushHelper."
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
                    children: "setPushListener"
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
                    children: " PushListener"
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
                    children: " onError"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(PushType "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: "pushType"
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
                    children: "long"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: " errorCode"
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
                    children: "        EMLog."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "e"
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
                    children: '"PushClient"'
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
                    children: '"Push client occur a error: "'
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
                    children: " pushType "
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
                    children: ' " - "'
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
                    children: " errorCode);"
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
                    children: " boolean"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " isSupportPush"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(PushType "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: "pushType"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", PushConfig "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: "pushConfig"
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "        // Set whether to enable FCM."
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
                    children: "(pushType "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "=="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " PushType.FCM) {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "            return"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " GoogleApiAvailabilityLight."
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
                    children: "isGooglePlayServicesAvailable"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(MainActivity.this)"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "                        =="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " ConnectionResult.SUCCESS;"
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
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "        return"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " super"
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
                    children: "isSupportPush"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(pushType, pushConfig);"
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
                    children: "});"
                  })
                })]
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Pass the FCM device token to the server."
          }), `
`, _jsx(_components.p, {
            children: "When the app is initialized, the FCM SDK generates a unique registration token for the client app on the user's device. Since FCM uses this token to determine which device to send the push message to, the Agora server needs to obtain the client app's registration token before sending the notification request to FCM. FCM then verifies the registration token and sends the notification message to the Android device. It is recommended to place this code on the main page after successfully logging into Chat."
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
                    children: "// Check if FCM is enabled."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "if"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(GoogleApiAvailabilityLight."
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
                    children: "isGooglePlayServicesAvailable"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(MainActivity.this) "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "!="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " ConnectionResult.SUCCESS) {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "    return"
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "}"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "FirebaseMessaging."
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
                    children: "getToken"
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
                    children: "addOnCompleteListener"
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
                    children: " OnCompleteListener"
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
                    children: " onComplete"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(@"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "NonNull"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " Task "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: "task"
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
                    children: "task."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "isSuccessful"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "()) {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "            EMLog."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "d"
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
                    children: '"PushClient"'
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
                    children: '"Fetching FCM registration token failed:"'
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
                    children: "task."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "getException"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "            return"
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "        // Get the FCM registration token, i.e., the device token."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        String token "
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
                    children: " task."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "getResult"
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
                    children: "        EMLog."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "d"
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
                    children: '"FCM"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", token);"
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
                    children: "sendFCMTokenToServer"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(token);"
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
                    children: "});"
                  })
                })]
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Monitor device token generation."
          }), `
`, _jsxs(_components.p, {
            children: ["After the FCM SDK successfully generates a registration token (device token), it will be passed to the ", _jsx(_components.code, {
              children: "onNewToken"
            }), " callback."]
          }), `
`, _jsxs(_components.p, {
            children: ["Rewrite the ", _jsx(_components.code, {
              children: "onNewToken"
            }), " callback in ", _jsx(_components.code, {
              children: "FirebaseMessagingService"
            }), ". After the device token is generated, this callback will promptly update the new token to the Chat SDK."]
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "@"
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
                    children: "public"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "  void"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " onNewToken"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "( @"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "NonNull"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  String token) {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    Log."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "i"
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
                    children: '"MessagingService"'
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
                    children: '"onNewToken: "'
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
                    children: " token);"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // To send messages to the app or manage app subscriptions on the server, you need to send the FCM registration token to your App Server."
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
                    children: "isSdkInited"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "()) {"
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
                    children: "sendFCMTokenToServer"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(token);"
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
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "test-fcm-push",
        children: "Test FCM push"
      }), _jsx(_components.p, {
        children: "After integrating and enabling FCM, you can test whether the push feature is successfully integrated."
      }), _jsx(_components.p, {
        children: "Make sure your test device meets the following conditions:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Uses foreign IP addresses to establish connections."
        }), `
`, _jsx(_components.li, {
          children: "Supports Google GMS services (Google Mobile Services)."
        }), `
`, _jsx(_components.li, {
          children: "Can access Google network services; otherwise, the device won't be able to receive push notifications from the FCM service."
        }), `
`]
      }), _jsx(_components.p, {
        children: "For more reliable testing, use a physical device."
      }), _jsx(_components.h3, {
        id: "test-push-notifications",
        children: "Test push notifications"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Log in to the app on your device and confirm that the device token is successfully bound."
          }), `
`, _jsxs(_components.p, {
            children: ["You can check the log or call ", _jsx(_components.a, {
              href: "..//en/api-reference/api-ref/im/user-system-registration#querying-a-user",
              children: "RESTful API for getting user details"
            }), " to confirm whether the device token is successfully bound. If successful, there will be a ", _jsx(_components.code, {
              children: "pushInfo"
            }), " field under the ", _jsx(_components.code, {
              children: "entities"
            }), " field, and ", _jsx(_components.code, {
              children: "pushInfo"
            }), " will have relevant information such as ", _jsx(_components.code, {
              children: "device_Id"
            }), ", ", _jsx(_components.code, {
              children: "device_token"
            }), ", ", _jsx(_components.code, {
              children: "notifier_name"
            }), ", and others."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Enable app notification bar permissions."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Kill the application process."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Send a test message in the ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), "."]
          }), `
`, _jsxs(_components.p, {
            children: ["Select ", _jsx(_components.strong, {
              children: "Operation Management"
            }), " > ", _jsx(_components.strong, {
              children: "User"
            }), " in the left navigation bar. On the ", _jsx(_components.strong, {
              children: "Users"
            }), " page, select ", _jsx(_components.strong, {
              children: "Send Admin Message"
            }), " in the ", _jsx(_components.strong, {
              children: "Action"
            }), " column for the corresponding user ID. In the dialog box that pops up, select the message type, enter the message content, and then click ", _jsx(_components.strong, {
              children: "Send"
            }), " ."]
          }), `
`, _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.p, {
                children: ["In the ", _jsx(_components.strong, {
                  children: "Push Certificate"
                }), " page, in the ", _jsx(_components.strong, {
                  children: "Action"
                }), " column of each certificate, click ", _jsx(_components.strong, {
                  children: "More"
                }), " and ", _jsx(_components.strong, {
                  children: "Test"
                }), " will appear. This is to directly call the third-party interface to push. The message sending test in the ", _jsx(_components.strong, {
                  children: "Users"
                }), " page first calls the Chat message sending interface and then the third-party interface when the conditions are met (that is, the user is offline, the push certificate is valid and bound to the device token)."]
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Check your device to see if it has received the push notification."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "troubleshooting",
        children: "Troubleshooting"
      }), _jsx(_components.p, {
        children: "In case of issues, take the following steps:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Check whether FCM push is correctly integrated or enabled:"
          }), `
`, _jsxs(_components.p, {
            children: ["Select ", _jsx(_components.strong, {
              children: "Operation Management"
            }), " > ", _jsx(_components.strong, {
              children: "User"
            }), " in the left navigation bar. On the ", _jsx(_components.strong, {
              children: "User Management"
            }), " page, select ", _jsx(_components.strong, {
              children: "Push Certificate"
            }), " in the ", _jsx(_components.strong, {
              children: "Action"
            }), " column for the corresponding user ID. In the pop-up box, check whether the certificate name and device token are displayed correctly."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Check whether the correct FCM certificate is uploaded in the ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Check whether the message is pushed in the chat room. The chat room does not support offline message push."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Check if the device supports GMS."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Check whether online-only delivery is enabled (", _jsx(_components.code, {
              children: "deliverOnlineOnly"
            }), " = ", _jsx(_components.code, {
              children: "true"
            }), "). Messages set to be delivered only when the receiver is online will not be pushed."]
          }), `
`]
        }), `
`]
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
        children: "Follow this guide to integrate and test push notifications in your environment."
      }), _jsx(_components.h2, {
        id: "prerequisites-1",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Before proceeding, ensure that you meet the following requirements:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["You have initialized the Chat SDK. For details, see ", _jsx(_components.a, {
            href: "../../../get-started-sdk",
            children: "SDK quickstart"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["You understand the call frequency limit of the Chat APIs supported by different pricing plans as described in ", _jsx(_components.a, {
            href: "../../limitations",
            children: "Limitations"
          }), "."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "integrate-apns-push",
        children: "Integrate APNs push"
      }), _jsx(_components.p, {
        children: "This section guides you through how to integrate APNs with Chat. To integrate APNs into Chat, follow these steps:"
      }), _jsx(_components.h3, {
        id: "1-create-a-push-certificate-on-the-apple-developer-platform",
        children: "1. Create a push certificate on the Apple Developer Platform"
      }), _jsx(_components.p, {
        children: "APNs supports p8 and p12 certificates. The Agora server needs your APNs certificate to communicate with APNs and send push notifications to the client."
      }), _jsxs(_components.p, {
        children: ["The following steps describe how to create a p12 certificate on ", _jsx(_components.a, {
          href: "https://developer.apple.com/",
          children: "Apple's developer platform"
        }), ":"]
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Apply for the Certificate Signing Request (CSR) file."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Open the Keychain Access app on your device and select ", _jsx(_components.strong, {
              children: "Keychain Access"
            }), " > ", _jsx(_components.strong, {
              children: "Certificate Assistant"
            }), " > ", _jsx(_components.strong, {
              children: "Request a Certificate from a Certificate Authority"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In the ", _jsx(_components.strong, {
              children: "Certificate Assistant"
            }), " dialog box, fill in the ", _jsx(_components.strong, {
              children: "User Email Address"
            }), " and ", _jsx(_components.strong, {
              children: "Common Name"
            }), ", select ", _jsx(_components.strong, {
              children: "Saved to disk"
            }), " for ", _jsx(_components.strong, {
              children: "Request is"
            }), ", click ", _jsx(_components.strong, {
              children: "Continue"
            }), ", and add a storage path to save the file."]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_apns_ca.png",
              alt: "push_apns_ca"
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["The CSR file ", _jsx(_components.code, {
              children: "CertificateSigningRequest.certSigningRequest"
            }), " is generated under the storage path."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "2-create-an-app-id",
        children: "2. Create an App ID"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: ["Log in to ", _jsx(_components.a, {
            href: "https://developer.apple.com/cn/",
            children: "iOS Developer Center"
          }), "，choose ", _jsx(_components.strong, {
            children: "Account"
          }), " > ", _jsx(_components.strong, {
            children: "Certificates, Identifiers & Profiles"
          }), " > ", _jsx(_components.strong, {
            children: "Identifiers"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["On the ", _jsx(_components.strong, {
            children: "Identifiers"
          }), " tab, click the ", _jsx(_components.strong, {
            children: "+"
          }), " icon to the right of ", _jsx(_components.strong, {
            children: "Identifiers"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["On the ", _jsx(_components.strong, {
            children: "Register a new identifier"
          }), " page, select ", _jsx(_components.strong, {
            children: "App IDs"
          }), " and click ", _jsx(_components.strong, {
            children: "Continue"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["For ", _jsx(_components.strong, {
            children: "Select a type"
          }), ", select ", _jsx(_components.strong, {
            children: "App"
          }), " and click ", _jsx(_components.strong, {
            children: "Continue"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["On the ", _jsx(_components.strong, {
            children: "Register an App ID"
          }), " page, configure the following fields:", `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.strong, {
                children: "Description"
              }), ": Description of the App ID."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.strong, {
                children: "Bundle ID"
              }), ": Can be set to ", _jsx(_components.strong, {
                children: "com.YourCompany.YourProjectName"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.strong, {
                children: "Capabilities"
              }), ": Choose ", _jsx(_components.strong, {
                children: "Push Notification"
              }), "."]
            }), `
`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: ["Make sure the information is correct and click ", _jsx(_components.strong, {
            children: "Register"
          }), "."]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "3-create-push-notification-certificates",
        children: "3. Create push notification certificates"
      }), _jsx(_components.p, {
        children: "Create certificates for development and production environments, respectively:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: ["On the ", _jsx(_components.strong, {
            children: "Identifiers"
          }), " tab, select the App ID created in the previous step."]
        }), `
`, _jsxs(_components.li, {
          children: ["On the ", _jsx(_components.strong, {
            children: "Edit your App ID Configuration"
          }), " page, find ", _jsx(_components.strong, {
            children: "Push Notifications"
          }), " and click ", _jsx(_components.strong, {
            children: "Configure"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["In the ", _jsx(_components.strong, {
            children: "Apple Push Notification service SSL Certificates"
          }), " dialog box, click ", _jsx(_components.strong, {
            children: "Create Certificate"
          }), " to create a push certificate for development or production environments."]
        }), `
`, _jsxs(_components.li, {
          children: ["On the ", _jsx(_components.strong, {
            children: "Create a New Certificate"
          }), " page, select ", _jsx(_components.strong, {
            children: "iOS"
          }), " as the ", _jsx(_components.strong, {
            children: "Platform"
          }), ", upload the CSR file created in step 1, and click ", _jsx(_components.strong, {
            children: "Continue"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["On the ", _jsx(_components.strong, {
            children: "Download Your Certificate"
          }), " page, click ", _jsx(_components.strong, {
            children: "Download"
          }), " to generate the ", _jsx(_components.a, {
            href: "https://help.apple.com/xcode/mac/current/?spm=a2c4g.11186623.0.0.14864088B1zf4p#/dev80c6204ec",
            children: "APNs"
          }), " certificate."]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "4-generate-the-push-certificate",
        children: "4. Generate the push certificate"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsx(_components.li, {
          children: "Double-click to import the push certificate created in Keychain in previous steps."
        }), `
`, _jsxs(_components.li, {
          children: ["Open ", _jsx(_components.strong, {
            children: "Keychain Access"
          }), " , select ", _jsx(_components.strong, {
            children: "login"
          }), " > ", _jsx(_components.strong, {
            children: "Certificates"
          }), ", find the imported certificate, right-click and select the certificate to export as a ", _jsx(_components.code, {
            children: ".p12"
          }), " file, and set the certificate key."]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "5-generate-the-provisioning-profile-file",
        children: "5. Generate the Provisioning Profile file"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: ["Open ", _jsx(_components.a, {
            href: "https://developer.apple.com/cn/",
            children: "iOS Developer Center"
          }), "，select ", _jsx(_components.strong, {
            children: "Account"
          }), " > ", _jsx(_components.strong, {
            children: "Certificates, Identifiers & Profiles"
          }), " > *", _jsx(_components.em, {
            children: "Profiles"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["On the ", _jsx(_components.strong, {
            children: "Provisioning"
          }), " tab, click the ", _jsx(_components.strong, {
            children: "+"
          }), " icon to the right of ", _jsx(_components.strong, {
            children: "Profiles"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["On the ", _jsx(_components.strong, {
            children: "Register a New Provisioning Profile"
          }), " page, select ", _jsx(_components.strong, {
            children: "iOS App Development"
          }), " for ", _jsx(_components.strong, {
            children: "Development"
          }), ", select ", _jsx(_components.strong, {
            children: "Ad Hoc"
          }), " for ", _jsx(_components.strong, {
            children: "Distribution"
          }), ", and click ", _jsx(_components.strong, {
            children: "Continue"
          }), `.
For the official version on the App Store, select `, _jsx(_components.strong, {
            children: "App Store"
          }), " for ", _jsx(_components.strong, {
            children: "Distribution"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["On the ", _jsx(_components.strong, {
            children: "Generate a Provisioning Profile"
          }), " page, configure the following fields:", `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.strong, {
                children: "App ID"
              }), ": Enter the App ID created in step 2."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.strong, {
                children: "Select Certificates"
              }), ": Select the ", _jsx(_components.code, {
                children: ".p12"
              }), " file generated in step 4."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.strong, {
                children: "Select Devices"
              }), ": Select the device to be developed."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.strong, {
                children: "Provisioning Profile Name"
              }), ": Enter the Provisioning Profile file name."]
            }), `
`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: ["Confirm the information and click ", _jsx(_components.strong, {
            children: "Download"
          }), " to generate the Provisioning Profile file."]
        }), `
`]
      }), _jsxs(_components.h3, {
        id: "6-upload-the-apns-certificate-in-the-agora-console",
        children: ["6. Upload the APNs certificate in the ", _jsx(_components.a, {
          href: "https://console.agora.io/",
          children: "Agora Console"
        })]
      }), _jsxs(_components.p, {
        children: ["After successfully logging in to the Chat SDK, you can configure the push policy for multi-device login use-cases and upload the APNs push certificate in ", _jsx(_components.a, {
          href: "https://console.agora.io/",
          children: "Agora Console"
        }), "."]
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
              children: "Enable/Config"
            }), " for ", _jsx(_components.strong, {
              children: "Chat"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the project configuration page, select ", _jsx(_components.strong, {
              children: "Features"
            }), " > ", _jsx(_components.strong, {
              children: "Push Certificate"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the Push Certificate page, click ", _jsx(_components.strong, {
              children: "Add Push Certificate"
            }), ". In the dialog box that pops up, select the ", _jsx(_components.strong, {
              children: "Apple"
            }), " tab and configure the fields."]
          }), `
`, _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.p, {
                children: ["If you use FCM push, select the ", _jsx(_components.strong, {
                  children: "Google"
                }), " tab and configure the FCM push parameters."]
              })
            })
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_apns_add_certificate.png",
              alt: "push_apns_add_certificate"
            })
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
              children: "Required (Yes/No)"
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
              children: _jsx(_components.strong, {
                children: "Certificate Type"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              }
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Yes"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Message push certificate type, currently supports ", _jsx(_components.strong, {
                children: "p8"
              }), " and ", _jsx(_components.strong, {
                children: "p12"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.strong, {
                children: "Certificate Name"
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
              children: "Yes"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The name of the message push certificate. Enter the name of the message push certificate."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.strong, {
                children: "Push Key"
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
              children: "Yes"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Message push certificate key. Fill in the certificate key set when exporting the message push certificate file. Configure this parameter only when using a p12 certificate."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.strong, {
                children: "Upload Certificate"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "File"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Yes"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Click ", _jsx(_components.strong, {
                children: "Upload"
              }), " to upload the message push certificate file."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.strong, {
                children: "Key ID"
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
              children: "Yes"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enter the Key ID of the push certificate. Configure this parameter only when using a p8 certificate."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "**TeamID **"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "String"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Yes"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Enter the Team ID of the push certificate. Configure this parameter only when using a p8 certificate."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.strong, {
                children: "Integration Environment"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              }
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Yes"
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Integration environment:  - ", _jsx(_components.strong, {
                children: "Development"
              }), ": Development environment;  - ", _jsx(_components.strong, {
                children: "Production"
              }), ": Production environment."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.strong, {
                children: "Bundle ID"
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
              children: "Yes"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The bundle ID. The bundle ID set when creating the App ID."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.strong, {
                children: "sound"
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
              children: "No"
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The ringtone alert when the receiver receives the push notification."
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "7-integrate-apns-on-the-client",
        children: "7. Integrate APNs on the client"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Open Xcode and select ", _jsx(_components.strong, {
              children: "Targets"
            }), " > ", _jsx(_components.strong, {
              children: "Capability"
            }), " > ", _jsx(_components.strong, {
              children: "Push Notifications"
            }), " to enable push notification permission."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Pass the certificate name to the SDK:"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "#import"
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
                    children: "- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // Apply for notification permission"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    UNUserNotificationCenter "
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
                    children: "center "
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
                    children: " [UNUserNotificationCenter "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "currentNotificationCenter"
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
                    children: "        [center "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "requestAuthorizationWithOptions:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(UNAuthorizationOptionBadge "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "|"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " UNAuthorizationOptionSound "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "|"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " UNAuthorizationOptionAlert) "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "completionHandler:"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "BOOL"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " granted, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "NSError"
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
                    children: " _Nullable error) {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "            if"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " (granted) {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "                NSLog"
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
                    children: '@"request authorization succeed"'
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
                    children: "        }];"
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
                    children: "    // Register push"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    [application "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "registerForRemoteNotifications"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "];"
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
                    children: "    // Initialize options and set App Key"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    AgoraChatOptions "
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
                    children: "options "
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
                    children: " [AgoraChatOptions "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "optionsWithAppkey:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '@"XXXX#XXXX"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "];"
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
                    children: "    // Fill in the name you set when uploading the certificate. Make sure the certificate name you set here is consistent with the certificate name you filled in on Agora Console."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    options.apnsCertName "
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
                    children: ' @"PushCertName"'
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
                    children: "    [AgoraChatClient.sharedClient "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "initializeSDKWithOptions:"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "options];"
                  })]
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
                    children: "    return"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " YES"
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
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Get the device token and pass it to the server."
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "After the device token is registered, the iOS system will call back the device token to you in the following way. Pass the device token to the SDK."
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
                children: ")application:(UIApplication "
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
                children: ")application didRegisterForRemoteNotificationsWithDeviceToken:("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "NSData"
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
                children: ")deviceToken {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    [AgoraChatClient.sharedClient "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "registerForRemoteNotificationsWithDeviceToken:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "deviceToken "
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
                children: " (aError) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "            NSLog"
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
                children: '@"bind deviceToken error: '
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
                children: ")application:(UIApplication "
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
                children: ")application didFailToRegisterForRemoteNotificationsWithError:("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "NSError"
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
                children: ")error {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "    NSLog"
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
                children: '@"Register Remote Notifications Failed"'
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
        id: "test-apns-push",
        children: "Test APNs push"
      }), _jsx(_components.p, {
        children: "After integrating and enabling FCM, you can test whether the push feature is successfully integrated."
      }), _jsx(_components.p, {
        children: "Make sure your test device is a non-jail-broken iOS device. For more reliable testing, use a physical device."
      }), _jsx(_components.h3, {
        id: "test-push-notifications-1",
        children: "Test push notifications"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Log in to the app on your device and confirm that the device token is successfully bound."
          }), `
`, _jsxs(_components.p, {
            children: ["You can check the log or call ", _jsx(_components.a, {
              href: "..//en/api-reference/api-ref/im/user-system-registration#querying-a-user",
              children: "RESTful API for getting user details"
            }), " to confirm whether the device token is successfully bound. If successful, there will be a ", _jsx(_components.code, {
              children: "pushInfo"
            }), " field under the ", _jsx(_components.code, {
              children: "entities"
            }), " field, and ", _jsx(_components.code, {
              children: "pushInfo"
            }), " will have relevant information such as ", _jsx(_components.code, {
              children: "device_Id"
            }), ", ", _jsx(_components.code, {
              children: "device_token"
            }), ", ", _jsx(_components.code, {
              children: "notifier_name"
            }), ", and others."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Enable app notification bar permissions."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Kill the application process."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Send a test message in the ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), "."]
          }), `
`, _jsxs(_components.p, {
            children: ["Select ", _jsx(_components.strong, {
              children: "Operation Management"
            }), " > ", _jsx(_components.strong, {
              children: "User"
            }), " in the left navigation bar. On the ", _jsx(_components.strong, {
              children: "Users"
            }), " page, select ", _jsx(_components.strong, {
              children: "Send Admin Message"
            }), " in the ", _jsx(_components.strong, {
              children: "Action"
            }), " column for the corresponding user ID. In the dialog box that pops up, select the message type, enter the message content, and then click ", _jsx(_components.strong, {
              children: "Send"
            }), " ."]
          }), `
`, _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.p, {
                children: ["In the ", _jsx(_components.strong, {
                  children: "Push Certificate"
                }), " page, in the ", _jsx(_components.strong, {
                  children: "Action"
                }), " column of each certificate, click ", _jsx(_components.strong, {
                  children: "More"
                }), " and ", _jsx(_components.strong, {
                  children: "Test"
                }), " will appear. This is to directly call the third-party interface to push. The message sending test in the ", _jsx(_components.strong, {
                  children: "Users"
                }), " page first calls the Chat message sending interface and then the third-party interface when the conditions are met (that is, the user is offline, the push certificate is valid and bound to the device token)."]
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Check your device to see if it has received the push notification."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "troubleshooting-1",
        children: "Troubleshooting"
      }), _jsx(_components.p, {
        children: "In case of issues, take the following steps:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Check whether APNs push is correctly integrated or enabled:"
          }), `
`, _jsxs(_components.p, {
            children: ["Select ", _jsx(_components.strong, {
              children: "Operation Management"
            }), " > ", _jsx(_components.strong, {
              children: "User"
            }), " in the left navigation bar. On the ", _jsx(_components.strong, {
              children: "User Management"
            }), " page, select ", _jsx(_components.strong, {
              children: "Push Certificate"
            }), " in the ", _jsx(_components.strong, {
              children: "Action"
            }), " column for the corresponding user ID. In the pop-up box, check whether the certificate name and device token are displayed correctly."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Check whether the correct APNs certificate has been uploaded in ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), " and the correct certificate environment has been set."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Check whether the message was pushed in the chat room. Chat rooms do not support offline message push."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Check whether online-only delivery is enabled (", _jsx(_components.code, {
              children: "AgoraChatMessage#deliverOnlineOnly = YES"
            }), "). Messages set to be delivered only when the receiver is online will not be pushed."]
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
        children: "Follow this guide to integrate and test push notifications in your environment."
      }), _jsx(_components.h2, {
        id: "prerequisites-2",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Before proceeding, ensure that you meet the following requirements:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["You have initialized the Chat SDK. For details, see ", _jsx(_components.a, {
            href: "../../../get-started-sdk",
            children: "SDK quickstart"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["You understand the call frequency limit of the Chat APIs supported by different pricing plans as described in ", _jsx(_components.a, {
            href: "../../limitations",
            children: "Limitations"
          }), "."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "integrate-fcm-push-1",
        children: "Integrate FCM push"
      }), _jsx(_components.p, {
        children: "This section guides you through how to integrate FCM with Chat."
      }), _jsx(_components.h3, {
        id: "1-create-a-project-in-firebase-1",
        children: "1. Create a project in Firebase"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Log in to the ", _jsx(_components.a, {
              href: "https://console.firebase.google.com/",
              children: "Firebase console"
            }), " and click ", _jsx(_components.strong, {
              children: "Add project"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In the ", _jsx(_components.strong, {
              children: "Create a project"
            }), " page, enter a project name, and click ", _jsx(_components.strong, {
              children: "Create project"
            }), "."]
          }), `
`, _jsx(_components.p, {
            children: "Note: You can toggle off Enable Google Analytics for this project if this option is not needed."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["After the project is ready, click ", _jsx(_components.strong, {
              children: "Continue"
            }), " to redirect to the project page. Then click the ", _jsx(_components.strong, {
              children: "Flutter"
            }), " icon and follow the ", _jsx(_components.strong, {
              children: "Firebase CLI"
            }), " to set your project."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In the ", _jsx(_components.strong, {
              children: "Project settings"
            }), " page, perform the following operations:"]
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["For Android apps, find the ", _jsx(_components.strong, {
                  children: "Android apps"
                }), " in ", _jsx(_components.strong, {
                  children: "Your apps"
                }), ", and set your Android app according to the ", _jsx(_components.a, {
                  href: "#1-create-a-project-in-firebase",
                  children: "SDK instructions"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["For iOS apps, find the ", _jsx(_components.strong, {
                  children: "Apple apps"
                }), " in ", _jsx(_components.strong, {
                  children: "Your apps"
                }), ", and set your Apple app according to the ", _jsx(_components.a, {
                  href: "#1-create-push-certificates",
                  children: "SDK instructions"
                }), "."]
              }), `
`]
            }), `
`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "In the project page, click the project you have created."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Query the sender ID. On the ", _jsx(_components.strong, {
              children: "Project settings"
            }), " page, select the ", _jsx(_components.strong, {
              children: "Cloud Messaging"
            }), " tab and view ", _jsx(_components.strong, {
              children: "Sender ID"
            }), ". When uploading the FCM certificate to Agora Console, set the certificate name to the FCM sender ID."]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_fcm_senderid.png",
              alt: "push_fcm_senderid.png"
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the ", _jsx(_components.strong, {
              children: "Project settings"
            }), " page, select the ", _jsx(_components.strong, {
              children: "Service accounts"
            }), " tab and click ", _jsx(_components.strong, {
              children: "Generate new private key"
            }), " to generate a JSON file. Save this file and upload it to Agora Console when using the V1 certificate."]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_fcm_private_key.png",
              alt: "push_fcm_private_key"
            })
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "2-upload-fcm-certificate-to-agora-console-1",
        children: "2. Upload FCM certificate to Agora Console"
      }), _jsx(_components.p, {
        children: "After successfully logging into Chat, you can upload the FCM push certificate to Agora Console:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Log in to ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), ", and click ", _jsx(_components.strong, {
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
            }), " page, locate the project that has Chat enabled and click ", _jsx(_components.strong, {
              children: "Config"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the project edit page, click ", _jsx(_components.strong, {
              children: "Config"
            }), " next to ", _jsx(_components.strong, {
              children: "Chat"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the project config page, select ", _jsx(_components.strong, {
              children: "Features"
            }), " > ", _jsx(_components.strong, {
              children: "Push Certificate"
            }), " and click ", _jsx(_components.strong, {
              children: "Add Push Certificate"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In the pop-up window, select the ", _jsx(_components.strong, {
              children: "Google"
            }), " tab, and configure the following fields:"]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_fcm_add_certificate.png",
              alt: "push_fcm_add_certificate"
            })
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
                  children: "Required"
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
                  children: _jsx(_components.strong, {
                    children: "Certificate Type"
                  })
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  }
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "No"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["Select whether to use a V1 certificate or a legacy certificate. ", _jsx(_components.strong, {
                    children: "V1"
                  }), ": Recommended. You need to configure a ", _jsx(_components.strong, {
                    children: "Private Key"
                  }), ". ", _jsx(_components.strong, {
                    children: "Legacy"
                  }), ": Will soon be deprecated. You need to configure a ", _jsx(_components.strong, {
                    children: "Push Key"
                  }), "."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Private Key"
                  })
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "file"
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Yes"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["Click ", _jsx(_components.strong, {
                    children: "Generate new private key"
                  }), " on the ", _jsx(_components.strong, {
                    children: "Project settings"
                  }), " > ", _jsx(_components.strong, {
                    children: "Service accounts"
                  }), " page of the ", _jsx(_components.a, {
                    href: "https://console.firebase.google.com",
                    children: "Firebase Console"
                  }), " to generate the ", _jsx(_components.code, {
                    children: ".json"
                  }), " file, then upload it to Agora Console."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Push Key"
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
                  children: "Yes"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["FCM Server Key. Obtain the server key in the ", _jsx(_components.strong, {
                    children: "Cloud Messaging API (Legacy)"
                  }), " area of the ", _jsx(_components.strong, {
                    children: "Project settings"
                  }), " > ", _jsx(_components.strong, {
                    children: "Cloud Messaging"
                  }), " page of the ", _jsx(_components.a, {
                    href: "https://console.firebase.google.com",
                    children: "Firebase Console"
                  }), ".   ", _jsx(_components.strong, {
                    children: "This parameter is only valid for legacy certificates."
                  })]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Certificate Name"
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
                  children: "Yes"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["The sender ID configured for the FCM. For the new version of the certificate, you can find the sender ID on the ", _jsx(_components.strong, {
                    children: "Project settings"
                  }), " > ", _jsx(_components.strong, {
                    children: "Cloud Messaging"
                  }), " page of the ", _jsx(_components.a, {
                    href: "https://console.firebase.google.com",
                    children: "Firebase Console"
                  }), ". For legacy certificates, go to the *", _jsx(_components.strong, {
                    children: "Project settings > Cloud Messaging"
                  }), " page of the ", _jsx(_components.a, {
                    href: "https://console.firebase.google.com",
                    children: "Firebase Console"
                  }), ", and get the sender ID in the ", _jsx(_components.strong, {
                    children: "Cloud  Messaging API (Legacy)"
                  }), " area.  The certificate name is the only condition used by the Agora server to determine which push channel the target device uses, so ensure that the sender set when integrating FCM in Chat is consistent with what is set here."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Sound"
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
                  children: "No"
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "The ringtone flag for when the receiver gets the push notification."
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Push Priority"
                  })
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  }
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "No"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["Message delivery priority. See ", _jsx(_components.a, {
                    href: "https://firebase.google.cn/docs/cloud-messaging/concept-options#setting-the-priority-of-a-message",
                    children: "Setting the priority of a message"
                  }), "."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Push Msg Type"
                  })
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  }
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "No"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["The type of the message sent to the client through FCM. See ", _jsx(_components.a, {
                    href: "https://firebase.google.com/docs/cloud-messaging/concept-options#notifications_and_data_messages",
                    children: "Message types"
                  }), ": ", _jsx(_components.strong, {
                    children: "Data"
                  }), ": Data message, processed by the client application. ", _jsx(_components.strong, {
                    children: "Notification"
                  }), ": Notification message, automatically processed by FCM SDK. ", _jsx(_components.strong, {
                    children: "Both"
                  }), ": Notification messages and data messages can be sent through the FCM client."]
                })]
              })]
            })]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h4, {
        id: "switch-from-legacy-to-the-v1-certificate-1",
        children: "Switch from legacy to the V1 certificate"
      }), _jsxs(_components.p, {
        children: ["The legacy HTTP or XMPP API is being retired on June 20, 2024. In view of this, switch to the latest FCM API (HTTP v1) version of the certificate as soon as possible. See ", _jsx(_components.a, {
          href: "https://console.firebase.google.com",
          children: "Firebase Console"
        }), " for details."]
      }), _jsx(_components.p, {
        children: "Make sure that the uploaded V1 certificate is available, as the legacy one will be deleted upon upload. If the new certificate is not available, the push will fail."
      }), _jsx(_components.p, {
        children: "Take the following steps to switch from the old to the new certificate:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Click ", _jsx(_components.strong, {
              children: "Edit"
            }), " in the ", _jsx(_components.strong, {
              children: "Action"
            }), " column of the old certificate on the ", _jsx(_components.strong, {
              children: "Push Certificate"
            }), " page."]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_fcm_oldcertificate_edit.png",
              alt: "push_fcm_oldcertificate_edit"
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In the ", _jsx(_components.strong, {
              children: "Google"
            }), " tab of the ", _jsx(_components.strong, {
              children: "Edit Push Certificate"
            }), " window, switch the ", _jsx(_components.strong, {
              children: "Certificate Type"
            }), " to ", _jsx(_components.strong, {
              children: "V1"
            }), "."]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_fcm_oldcertificate_switch.png",
              alt: "push_fcm_oldcertificate_switch"
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Click ", _jsx(_components.strong, {
              children: "Upload"
            }), " to upload the locally saved V1 certificate file (.json)."]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_fcm_newcertificate_upload.png",
              alt: "push_fcm_newcertificate_upload"
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Click ", _jsx(_components.strong, {
              children: "OK"
            }), " to complete the switch."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "3-integrate-fcm-on-the-client-1",
        children: "3. Integrate FCM on the client"
      }), _jsx(_components.p, {
        children: "Take the following steps to integrate FCM on the client."
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: ["Install ", _jsx(_components.code, {
            children: "firebase_core"
          }), ": Execute ", _jsx(_components.code, {
            children: "flutter pub add firebase_core"
          }), " in the project root directory."]
        }), `
`, _jsxs(_components.li, {
          children: ["Install ", _jsx(_components.code, {
            children: "firebase_messaging"
          }), ": Execute ", _jsx(_components.code, {
            children: "flutter pub add firebase_messaging"
          }), " in the project root directory."]
        }), `
`]
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "For Android"
        })
      }), _jsxs(_components.p, {
        children: ["In your flutter project's ", _jsx(_components.code, {
          children: "Android/build.gradle"
        }), " file, check the ", _jsx(_components.code, {
          children: "google-services"
        }), " version and make sure it is 4.3.14 or above."]
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
                children: "dependencies {"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    // START: FlutterFire Configuration"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    classpath "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'com.google.gms:google-services:4.3.15'"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    // END: FlutterFire Configuration"
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
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "For iOS"
        })
      }), _jsx(_components.p, {
        children: "Before your app can start receiving messages, enable push notifications and background modes in your Xcode project."
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: ["Open the Xcode project workspace (", _jsx(_components.code, {
            children: "ios/Runner.xcworkspace"
          }), ")."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.a, {
            href: "https://help.apple.com/xcode/mac/current/#/devdfd3d04a1",
            children: "Enable push notifications"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["Enable background fetching and remote notifications ", _jsx(_components.a, {
            href: "https://developer.apple.com/documentation/xcode/configuring-background-execution-modes",
            children: "background execution modes"
          }), "."]
        }), `
`]
      }), _jsx(_components.h4, {
        id: "sdk-integration",
        children: "SDK integration"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Initialize the Chat SDK and enable FCM:"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "void"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " main"
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
                    children: "async"
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
                    children: "  WidgetsFlutterBinding"
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
                    children: "ensureInitialized"
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
                    children: "  // Replace with your Appkey."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "  var"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " options "
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
                    children: " ChatOptions"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(appKey"
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
                    children: ' "Your Appkey"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", autoLogin"
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
                    children: " false"
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
                    children: "  // Replace with your FCM Sender ID."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  options."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "enableFCM"
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
                    children: '"Your FCM sender id"'
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
                    children: "  // Initialize the IM SDK."
                  })
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
                    children: ".getInstance."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "init"
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "  // Initialize FCM SDK."
                  })
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
                    children: " Firebase"
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
                    children: "initializeApp"
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
                    children: "    options"
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
                    children: " DefaultFirebaseOptions"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ".currentPlatform,"
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "  runApp"
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
                    children: "const"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " MyApp"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "());"
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
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Pass the FCM device token to the server."
          }), `
`, _jsx(_components.p, {
            children: "When the app is initialized, the FCM SDK generates a unique registration token for the client app on the user's device. Since FCM uses this token to determine which device to send the push message to, the Agora server needs to obtain the client app's registration token before sending the notification request to FCM. FCM then verifies the registration token and sends the notification message to the device."
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
                    children: "// Request push permission"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "await"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " FirebaseMessaging"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ".instance."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "requestPermission"
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
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "FirebaseMessaging"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ".instance.onTokenRefresh."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "listen"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "((event) "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "async"
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
                    children: "    debugPrint"
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
                    children: "'onTokenRefresh: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "$"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "event"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'"
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
                    children: "    await"
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
                    children: "updateFCMPushToken"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(event);"
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
                    children: "// Get the token and upload it to instant communication."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "final"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " fcmToken "
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
                    children: " FirebaseMessaging"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ".instance."
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
                    children: "if"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " (fcmToken "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "!="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " null"
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "  debugPrint"
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
                    children: "'fcmToken: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "$"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "fcmToken"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'"
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
                    children: "updateFCMPushToken"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(fcmToken);"
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
                    children: "else"
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
                    children: "  debugPrint"
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
                    children: "'fcmToken is null'"
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
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "test-fcm-push-1",
        children: "Test FCM push"
      }), _jsx(_components.p, {
        children: "After integrating and enabling FCM, you can test whether the push feature is successfully integrated."
      }), _jsx(_components.p, {
        children: "Make sure your test device meets the following conditions:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Uses foreign IP addresses to establish connections."
        }), `
`, _jsx(_components.li, {
          children: "Supports Google GMS services (Google Mobile Services)."
        }), `
`, _jsx(_components.li, {
          children: "Can access Google network services; otherwise, the device won't be able to receive push notifications from the FCM service."
        }), `
`]
      }), _jsx(_components.p, {
        children: "For more reliable testing, use a physical device."
      }), _jsx(_components.h3, {
        id: "test-push-notifications-2",
        children: "Test push notifications"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Log in to the app on your device and confirm that the device token is successfully bound."
          }), `
`, _jsxs(_components.p, {
            children: ["You can check the log or call ", _jsx(_components.a, {
              href: "..//en/api-reference/api-ref/im/user-system-registration#querying-a-user",
              children: "RESTful API for getting user details"
            }), " to confirm whether the device token is successfully bound. If successful, there will be a ", _jsx(_components.code, {
              children: "pushInfo"
            }), " field under the ", _jsx(_components.code, {
              children: "entities"
            }), " field, and ", _jsx(_components.code, {
              children: "pushInfo"
            }), " will have relevant information such as ", _jsx(_components.code, {
              children: "device_Id"
            }), ", ", _jsx(_components.code, {
              children: "device_token"
            }), ", ", _jsx(_components.code, {
              children: "notifier_name"
            }), ", and others."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Enable app notification bar permissions."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Kill the application process."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Send a test message in the ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), "."]
          }), `
`, _jsxs(_components.p, {
            children: ["Select ", _jsx(_components.strong, {
              children: "Operation Management"
            }), " > ", _jsx(_components.strong, {
              children: "User"
            }), " in the left navigation bar. On the ", _jsx(_components.strong, {
              children: "Users"
            }), " page, select ", _jsx(_components.strong, {
              children: "Send Admin Message"
            }), " in the ", _jsx(_components.strong, {
              children: "Action"
            }), " column for the corresponding user ID. In the dialog box that pops up, select the message type, enter the message content, and then click ", _jsx(_components.strong, {
              children: "Send"
            }), " ."]
          }), `
`, _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.p, {
                children: ["In the ", _jsx(_components.strong, {
                  children: "Push Certificate"
                }), " page, in the ", _jsx(_components.strong, {
                  children: "Action"
                }), " column of each certificate, click ", _jsx(_components.strong, {
                  children: "More"
                }), " and ", _jsx(_components.strong, {
                  children: "Test"
                }), " will appear. This is to directly call the third-party interface to push. The message sending test in the ", _jsx(_components.strong, {
                  children: "Users"
                }), " page first calls the Chat message sending interface and then the third-party interface when the conditions are met (that is, the user is offline, the push certificate is valid and bound to the device token)."]
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Check your device to see if it has received the push notification."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "troubleshooting-2",
        children: "Troubleshooting"
      }), _jsx(_components.p, {
        children: "In case of issues, take the following steps:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Check whether FCM push is correctly integrated or enabled:"
          }), `
`, _jsxs(_components.p, {
            children: ["Select ", _jsx(_components.strong, {
              children: "Operation Management"
            }), " > ", _jsx(_components.strong, {
              children: "User"
            }), " in the left navigation bar. On the ", _jsx(_components.strong, {
              children: "User Management"
            }), " page, select ", _jsx(_components.strong, {
              children: "Push Certificate"
            }), " in the ", _jsx(_components.strong, {
              children: "Action"
            }), " column for the corresponding user ID. In the pop-up box, check whether the certificate name and device token are displayed correctly."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Check whether the correct FCM certificate is uploaded in the ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Check whether the message is pushed in the chat room. The chat room does not support offline message push."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Check if the device supports GMS."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Check whether online-only delivery is enabled (", _jsx(_components.code, {
              children: "deliverOnlineOnly"
            }), " = ", _jsx(_components.code, {
              children: "true"
            }), "). Messages set to be delivered only when the receiver is online will not be pushed."]
          }), `
`]
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
        children: "Follow this guide to integrate and test push notifications in your environment."
      }), _jsx(_components.h2, {
        id: "prerequisites-3",
        children: "Prerequisites"
      }), _jsx(_components.p, {
        children: "Before proceeding, ensure that you meet the following requirements:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["You have initialized the Chat SDK. For details, see ", _jsx(_components.a, {
            href: "../../../get-started-sdk",
            children: "SDK quickstart"
          }), "."]
        }), `
`, _jsxs(_components.li, {
          children: ["You understand the call frequency limit of the Chat APIs supported by different pricing plans as described in ", _jsx(_components.a, {
            href: "../../limitations",
            children: "Limitations"
          }), "."]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "integrate-fcm-push-2",
        children: "Integrate FCM push"
      }), _jsx(_components.p, {
        children: "This section guides you through how to integrate FCM with Chat."
      }), _jsx(_components.h3, {
        id: "1-create-a-project-in-firebase-2",
        children: "1. Create a project in Firebase"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Log in to ", _jsx(_components.a, {
              href: "https://console.firebase.google.com/",
              children: "Firebase console"
            }), ", and click ", _jsx(_components.strong, {
              children: "Add project"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the ", _jsx(_components.strong, {
              children: "Create a project"
            }), " page, enter a project name, and proceed with prompts."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Query the sender ID. On the ", _jsx(_components.strong, {
              children: "Project settings"
            }), " page, select the ", _jsx(_components.strong, {
              children: "Cloud Messaging"
            }), " tab and view ", _jsx(_components.strong, {
              children: "Sender ID"
            }), ". When uploading the FCM certificate to Agora Console, set the certificate name to the FCM sender ID."]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_fcm_senderid.png",
              alt: "push_fcm_senderid.png"
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the ", _jsx(_components.strong, {
              children: "Project settings"
            }), " page, select the ", _jsx(_components.strong, {
              children: "Service accounts"
            }), " tab and click ", _jsx(_components.strong, {
              children: "Generate new private key"
            }), " to generate a JSON file. Save this file and upload it to Agora Console when using the V1 certificate."]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_fcm_private_key.png",
              alt: "push_fcm_private_key"
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["After the project is created, add an ", _jsx(_components.code, {
              children: "iOS"
            }), " application or an ", _jsx(_components.code, {
              children: "Android"
            }), " application according to the following steps:"]
          }), `
`]
        }), `
`]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Add an ", _jsx(_components.code, {
              children: "iOS"
            }), " app:"]
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: ["The package name is the same as that of the ", _jsx(_components.code, {
                children: "iOS"
              }), " app;"]
            }), `
`, _jsxs(_components.li, {
              children: ["Once created, move the downloaded ", _jsx(_components.code, {
                children: "GoogleService-Info.plist"
              }), " file to the root directory of the ", _jsx(_components.code, {
                children: "Xcode"
              }), " project, and add it to all targets;"]
            }), `
`, _jsxs(_components.li, {
              children: ["Upload the ", _jsx(_components.code, {
                children: "APNs"
              }), " certificate on the Cloud Messaging page."]
            }), `
`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Add an ", _jsx(_components.code, {
              children: "Android"
            }), " app:"]
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: ["The package name is the same as that of the ", _jsx(_components.code, {
                children: "Android"
              }), " app;"]
            }), `
`, _jsxs(_components.li, {
              children: ["Once created, move the downloaded ", _jsx(_components.code, {
                children: "google-services.json"
              }), " file to your module (application level) root directory."]
            }), `
`]
          }), `
`]
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["For detailed FCM configurations, you can see the ", _jsx(_components.a, {
          href: "https://rnfirebase.io/",
          children: "React Native Firebase document"
        }), "."]
      }), _jsx(_components.h3, {
        id: "2-upload-fcm-certificate-to-agora-console-2",
        children: "2. Upload FCM certificate to Agora Console"
      }), _jsx(_components.p, {
        children: "After successfully logging into Chat, you can upload the FCM push certificate to Agora Console:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Log in to ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), ", and click ", _jsx(_components.strong, {
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
            }), " page, locate the project that has Chat enabled and click ", _jsx(_components.strong, {
              children: "Config"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the project edit page, click ", _jsx(_components.strong, {
              children: "Config"
            }), " next to ", _jsx(_components.strong, {
              children: "Chat"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["On the project config page, select ", _jsx(_components.strong, {
              children: "Features"
            }), " > ", _jsx(_components.strong, {
              children: "Push Certificate"
            }), " and click ", _jsx(_components.strong, {
              children: "Add Push Certificate"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In the pop-up window, select the ", _jsx(_components.strong, {
              children: "Google"
            }), " tab, and configure the following fields:"]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_fcm_add_certificate.png",
              alt: "push_fcm_add_certificate"
            })
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
                  children: "Required"
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
                  children: _jsx(_components.strong, {
                    children: "Certificate Type"
                  })
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  }
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "No"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["Select whether to use a V1 certificate or a legacy certificate. ", _jsx(_components.strong, {
                    children: "V1"
                  }), ": Recommended. You need to configure a ", _jsx(_components.strong, {
                    children: "Private Key"
                  }), ". ", _jsx(_components.strong, {
                    children: "Legacy"
                  }), ": Will soon be deprecated. You need to configure a ", _jsx(_components.strong, {
                    children: "Push Key"
                  }), "."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Private Key"
                  })
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "file"
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "Yes"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["Click ", _jsx(_components.strong, {
                    children: "Generate new private key"
                  }), " on the ", _jsx(_components.strong, {
                    children: "Project settings"
                  }), " > ", _jsx(_components.strong, {
                    children: "Service accounts"
                  }), " page of the ", _jsx(_components.a, {
                    href: "https://console.firebase.google.com",
                    children: "Firebase Console"
                  }), " to generate the ", _jsx(_components.code, {
                    children: ".json"
                  }), " file, then upload it to Agora Console."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Push Key"
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
                  children: "Yes"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["FCM Server Key. Obtain the server key in the ", _jsx(_components.strong, {
                    children: "Cloud Messaging API (Legacy)"
                  }), " area of the ", _jsx(_components.strong, {
                    children: "Project settings"
                  }), " > ", _jsx(_components.strong, {
                    children: "Cloud Messaging"
                  }), " page of the ", _jsx(_components.a, {
                    href: "https://console.firebase.google.com",
                    children: "Firebase Console"
                  }), ".   ", _jsx(_components.strong, {
                    children: "This parameter is only valid for legacy certificates."
                  })]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Certificate Name"
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
                  children: "Yes"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["The sender ID configured for the FCM. For the new version of the certificate, you can find the sender ID on the ", _jsx(_components.strong, {
                    children: "Project settings"
                  }), " > ", _jsx(_components.strong, {
                    children: "Cloud Messaging"
                  }), " page of the ", _jsx(_components.a, {
                    href: "https://console.firebase.google.com",
                    children: "Firebase Console"
                  }), ". For legacy certificates, go to the *", _jsx(_components.strong, {
                    children: "Project settings > Cloud Messaging"
                  }), " page of the ", _jsx(_components.a, {
                    href: "https://console.firebase.google.com",
                    children: "Firebase Console"
                  }), ", and get the sender ID in the ", _jsx(_components.strong, {
                    children: "Cloud  Messaging API (Legacy)"
                  }), " area.  The certificate name is the only condition used by the Agora server to determine which push channel the target device uses, so ensure that the sender set when integrating FCM in Chat is consistent with what is set here."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Sound"
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
                  children: "No"
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "The ringtone flag for when the receiver gets the push notification."
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Push Priority"
                  })
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  }
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "No"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["Message delivery priority. See ", _jsx(_components.a, {
                    href: "https://firebase.google.cn/docs/cloud-messaging/concept-options#setting-the-priority-of-a-message",
                    children: "Setting the priority of a message"
                  }), "."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: _jsx(_components.strong, {
                    children: "Push Msg Type"
                  })
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  }
                }), _jsx(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: "No"
                }), _jsxs(_components.td, {
                  style: {
                    textAlign: "left"
                  },
                  children: ["The type of the message sent to the client through FCM. See ", _jsx(_components.a, {
                    href: "https://firebase.google.com/docs/cloud-messaging/concept-options#notifications_and_data_messages",
                    children: "Message types"
                  }), ": ", _jsx(_components.strong, {
                    children: "Data"
                  }), ": Data message, processed by the client application. ", _jsx(_components.strong, {
                    children: "Notification"
                  }), ": Notification message, automatically processed by FCM SDK. ", _jsx(_components.strong, {
                    children: "Both"
                  }), ": Notification messages and data messages can be sent through the FCM client."]
                })]
              })]
            })]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h4, {
        id: "switch-from-legacy-to-the-v1-certificate-2",
        children: "Switch from legacy to the V1 certificate"
      }), _jsxs(_components.p, {
        children: ["The legacy HTTP or XMPP API is being retired on June 20, 2024. In view of this, switch to the latest FCM API (HTTP v1) version of the certificate as soon as possible. See ", _jsx(_components.a, {
          href: "https://console.firebase.google.com",
          children: "Firebase Console"
        }), " for details."]
      }), _jsx(_components.p, {
        children: "Make sure that the uploaded V1 certificate is available, as the legacy one will be deleted upon upload. If the new certificate is not available, the push will fail."
      }), _jsx(_components.p, {
        children: "Take the following steps to switch from the old to the new certificate:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Click ", _jsx(_components.strong, {
              children: "Edit"
            }), " in the ", _jsx(_components.strong, {
              children: "Action"
            }), " column of the old certificate on the ", _jsx(_components.strong, {
              children: "Push Certificate"
            }), " page."]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_fcm_oldcertificate_edit.png",
              alt: "push_fcm_oldcertificate_edit"
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In the ", _jsx(_components.strong, {
              children: "Google"
            }), " tab of the ", _jsx(_components.strong, {
              children: "Edit Push Certificate"
            }), " window, switch the ", _jsx(_components.strong, {
              children: "Certificate Type"
            }), " to ", _jsx(_components.strong, {
              children: "V1"
            }), "."]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_fcm_oldcertificate_switch.png",
              alt: "push_fcm_oldcertificate_switch"
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Click ", _jsx(_components.strong, {
              children: "Upload"
            }), " to upload the locally saved V1 certificate file (.json)."]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/im/push_fcm_newcertificate_upload.png",
              alt: "push_fcm_newcertificate_upload"
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Click ", _jsx(_components.strong, {
              children: "OK"
            }), " to complete the switch."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "3-integrate-fcm-on-the-client-2",
        children: "3. Integrate FCM on the client"
      }), _jsx(_components.p, {
        children: "Take the following steps to integrate FCM on the client:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Add dependencies:"
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
              icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
              children: _jsx(_components.code, {
                children: _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "yarn"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " add"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " @react-native-firebase/app"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " @react-native-firebase/messaging"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " react-native-agora-chat"
                  })]
                })
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Add native platform configuration:"
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Android"
            })
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Download the ", _jsx(_components.code, {
                  children: "google-services.json"
                }), " file and put it in the following path in your project: ", _jsx(_components.code, {
                  children: "/android/app/google - services.json"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In your ", _jsx(_components.code, {
                  children: "/android/build.gradle"
                }), " file, add the google-services plugin as a dependency:"]
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
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "buildscript"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
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
                        children: "  dependencies"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
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
                        children: "    classpath"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " 'com.google.gms:google-services:4.3.15'"
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
                        children: "}"
                      })
                    })]
                  })
                })
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Add the google-services plugin to the ", _jsx(_components.code, {
                  children: "/android/app/build.gradle"
                }), " file and execute the plugin:"]
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
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "apply"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " plugin:"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " 'com.google.gms.google-services'"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " //"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "  true"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "  pod"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " 'FirebaseCore',"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " :modular_headers"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " ="
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
                        children: " true"
                      })]
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "end"
                      })
                    })]
                  })
                })
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Run the ", _jsx(_components.code, {
                  children: "pod install"
                }), " command in the ", _jsx(_components.code, {
                  children: "ios"
                }), " directory to install dependencies."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Open the ", _jsx(_components.code, {
                  children: "/ios/{projectName}.xcworkspace"
                }), " file in Xcode."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Right-click the project name, select ", _jsx(_components.strong, {
                  children: "Add files"
                }), " , then select the downloaded ", _jsx(_components.code, {
                  children: "GoogleService-Info.plist"
                }), " file from your local computer, and make sure to select ", _jsx(_components.strong, {
                  children: "Copy items if needed"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["To do this, open the ", _jsx(_components.code, {
                  children: "/ios/{projectName}/AppDelegate.mm"
                }), " file (", _jsx(_components.code, {
                  children: "AppDelegate.m"
                }), " in earlier versions of React Native)."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["At the top of the file, import the Firebase SDK after ", _jsx(_components.strong, {
                  children: '#import "AppDelegate.h"'
                }), "."]
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
                  children: _jsx(_components.code, {
                    children: _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "#import"
                      })
                    })
                  })
                })
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["In the ", _jsx(_components.code, {
                  children: "didFinishLaunchingWithOptions"
                }), " method, add the following code at the top:"]
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
                        children: "BOOL"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ")application:(UIApplication "
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
                        children: ")application didFinishLaunchingWithOptions:("
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
                        children: ")launchOptions {"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  [FIRApp "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "configure"
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
          }), `
`]
        }), `
`]
      }), _jsx(_components.h4, {
        id: "fcm-push-code-implementation",
        children: "FCM push code implementation"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Set up message notifications:"
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
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "React."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "useEffect"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "  const"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " sub1"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " ="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " messaging"
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
                    children: "onMessage"
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
                    children: "async"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " ("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: "remoteMessage"
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
                    children: "    // Process offline message notifications, such as printing logs and displaying messages."
                  })
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
                    children: '"A new FCM message arrived!"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", "
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
                    children: "(remoteMessage));"
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
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "  return"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " sub1;"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "}, []);"
                  })
                })]
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Initialize the Chat SDK:"
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
                    children: "// Get the device token."
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "fcmToken.current "
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " messaging"
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
                    children: "getToken"
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
                    children: "// Push settings."
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
                    children: " pushConfig"
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
                    children: " ChatPushConfig"
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
                    children: "  deviceId: senderId,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  deviceToken: fcmToken.current,"
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
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Configure push settings in the ChatOptions class."
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
                    children: " o "
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
                    children: " ChatOptions"
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
                    children: "  autoLogin: "
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
                    children: " ,"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  appKey: appKey,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  pushConfig: pushConfig,"
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
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Execute settings and initialize the IM SDK."
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
                    children: "  . "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "heat"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " ( o )"
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
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // Initialization successful."
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
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // Initialization failed and error message is returned."
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
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Log in to the server:"
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
                    children: "// Log in to the server using user ID and token."
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
                    children: "  ."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "loginWithAgoraToken"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(username, token)"
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
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // Login successful."
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
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // Login failed, return error message."
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
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Send the device token to the server:"
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
                    children: "// Send device token to the server."
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
                    children: "  ."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "updatePushConfig"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "    new"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " ChatPushConfig"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "({ deviceId: senderId, deviceToken: fcmToken.current })"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  )"
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
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // Sent successfully."
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
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "    // Sending failed, returning error information."
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
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "test-fcm-push-2",
        children: "Test FCM push"
      }), _jsx(_components.p, {
        children: "After integrating and enabling FCM, you can test whether the push feature is successfully integrated."
      }), _jsx(_components.p, {
        children: "Make sure your test device meets the following conditions:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Uses foreign IP addresses to establish connections."
        }), `
`, _jsx(_components.li, {
          children: "Supports Google GMS services (Google Mobile Services)."
        }), `
`, _jsx(_components.li, {
          children: "Can access Google network services; otherwise, the device won't be able to receive push notifications from the FCM service."
        }), `
`]
      }), _jsx(_components.p, {
        children: "For more reliable testing, use a physical device."
      }), _jsx(_components.h3, {
        id: "test-push-notifications-3",
        children: "Test push notifications"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Log in to the app on your device and confirm that the device token is successfully bound."
          }), `
`, _jsxs(_components.p, {
            children: ["You can check the log or call ", _jsx(_components.a, {
              href: "..//en/api-reference/api-ref/im/user-system-registration#querying-a-user",
              children: "RESTful API for getting user details"
            }), " to confirm whether the device token is successfully bound. If successful, there will be a ", _jsx(_components.code, {
              children: "pushInfo"
            }), " field under the ", _jsx(_components.code, {
              children: "entities"
            }), " field, and ", _jsx(_components.code, {
              children: "pushInfo"
            }), " will have relevant information such as ", _jsx(_components.code, {
              children: "device_Id"
            }), ", ", _jsx(_components.code, {
              children: "device_token"
            }), ", ", _jsx(_components.code, {
              children: "notifier_name"
            }), ", and others."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Enable app notification bar permissions."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Kill the application process."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Send a test message in the ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), "."]
          }), `
`, _jsxs(_components.p, {
            children: ["Select ", _jsx(_components.strong, {
              children: "Operation Management"
            }), " > ", _jsx(_components.strong, {
              children: "User"
            }), " in the left navigation bar. On the ", _jsx(_components.strong, {
              children: "Users"
            }), " page, select ", _jsx(_components.strong, {
              children: "Send Admin Message"
            }), " in the ", _jsx(_components.strong, {
              children: "Action"
            }), " column for the corresponding user ID. In the dialog box that pops up, select the message type, enter the message content, and then click ", _jsx(_components.strong, {
              children: "Send"
            }), " ."]
          }), `
`, _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.p, {
                children: ["In the ", _jsx(_components.strong, {
                  children: "Push Certificate"
                }), " page, in the ", _jsx(_components.strong, {
                  children: "Action"
                }), " column of each certificate, click ", _jsx(_components.strong, {
                  children: "More"
                }), " and ", _jsx(_components.strong, {
                  children: "Test"
                }), " will appear. This is to directly call the third-party interface to push. The message sending test in the ", _jsx(_components.strong, {
                  children: "Users"
                }), " page first calls the Chat message sending interface and then the third-party interface when the conditions are met (that is, the user is offline, the push certificate is valid and bound to the device token)."]
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Check your device to see if it has received the push notification."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "troubleshooting-3",
        children: "Troubleshooting"
      }), _jsx(_components.p, {
        children: "In case of issues, take the following steps:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Check whether FCM push is correctly integrated or enabled:"
          }), `
`, _jsxs(_components.p, {
            children: ["Select ", _jsx(_components.strong, {
              children: "Operation Management"
            }), " > ", _jsx(_components.strong, {
              children: "User"
            }), " in the left navigation bar. On the ", _jsx(_components.strong, {
              children: "User Management"
            }), " page, select ", _jsx(_components.strong, {
              children: "Push Certificate"
            }), " in the ", _jsx(_components.strong, {
              children: "Action"
            }), " column for the corresponding user ID. In the pop-up box, check whether the certificate name and device token are displayed correctly."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Check whether the correct FCM certificate is uploaded in the ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Check whether the message is pushed in the chat room. The chat room does not support offline message push."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Check if the device supports GMS."
          }), `
`]
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
