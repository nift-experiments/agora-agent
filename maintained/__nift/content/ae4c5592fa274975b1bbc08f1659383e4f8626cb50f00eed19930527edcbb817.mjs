import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Console overview",
  description: "Use Agora Console to activate services, collect credentials, and prepare the project settings your integration relies on."
};
export let _markdown = `

Use Agora Console to manage your projects and account settings. Console settings are organized into two groups:

* **Project-level settings**: Apply to a specific project.
* **Account settings**: Apply across your entire Agora account.

## Project-level view [#project-level-view]

When you log in to Agora Console, you land on the **Home** page for the selected project. Use the **Project** dropdown at the top of the page to switch between projects. Agora creates a default project for you when you create a new account.

![Home page](https://assets-docs.agora.io/images/console/project-overview.png)

Use the sidebar to switch between project-level pages.

### Home [#home]

The **Home** page is the landing page for a project in Agora Console. It shows quick links to start building an AI agent, RTC services, your project's App ID and certificate, and a summary of your usage and billing across RTC, Signaling, and Conversational AI.

### Credentials [#credentials]

Select **Manage credentials** on the project card, on the **Home** page, to open the **Project credentials** panel. This panel shows the basic identity, security configuration, and credentials for the selected project.

* **Project Name**: An editable, human-readable name for the project. Select **Edit** to rename the project.
* **Project ID**: An internal ID for your project. This is **not** the App ID.
* **Status**: The status of your Agora project. Select **Disable project** to disable it.
* **App ID**: A unique, non-editable identifier for the project. Select the copy icon to copy the ID to your clipboard.
* **Primary certificate**: The project's primary server-side secret, used to generate authentication tokens. Enabling the primary certificate (default) secures the project and requires clients to authenticate with a token. Treat the primary certificate like a database password.
* **Secondary certificate**: An optional fallback certificate used during certificate rotation. Enable it using the **Enable Secondary** button. You can't delete a secondary certificate while it is enabled; disable it first before deleting.

You can copy your **App ID** and **Primary certificate** individually, generate a temporary token, or download your Agora \`.env\` file for use in your projects.

![Project credentials panel](https://assets-docs.agora.io/images/console/project-credentials.png)

**Rotate certificates**

If you suspect your primary certificate has been compromised, rotate it using the secondary certificate. Replacing the primary certificate may impact your live business, so only rotate certificates when necessary.

1. Select **Add a Certificate** to enable the secondary certificate.
2. Select **Make Primary** against the secondary certificate to swap the primary and secondary certificates.
3. Select **Disable Secondary** to disable the secondary certificate (the original primary certificate).
4. Once your users have switched to the new certificate, select **Delete Secondary** to delete it.

<CalloutContainer type="warning">
  <CalloutDescription>
    Once deleted, a certificate can't be restored. Before deleting it, confirm that users have switched to the new certificate. Deleting a certificate immediately invalidates all tokens generated with it, and users already connected can't renew their tokens using it.
  </CalloutDescription>
</CalloutContainer>

### RTC Services [#rtc-services]

Select **RTC Services** in the sidebar to view and configure the Agora products and services available for the current project. Services are grouped into the following categories:

* **Intelligence**: Conversational AI Engine, Real-Time Speech-to-Text.
* **Media**: Cloud Recording, Media Push, Video Screenshot Upload, Media Gateway, Media Pull.
* **Messaging and Signaling**: Signaling, Chat.
* **Collaboration**: Whiteboard, Flexible Classroom.
* **Infrastructure**: Cloud Proxy, Co-Host Authentication.

Use the toggle on each product panel to enable or disable it for the project. Select the settings icon to open its configuration panel. For an overview of the available configuration options, refer to the specific product documentation.

![RTC Services page](https://assets-docs.agora.io/images/console/realtime-services.png)

### Webhooks [#webhooks]

A webhook is a callback over HTTPS that allows your app or back-end system to receive notifications. Agora calls your webhook endpoint from its servers to send notifications when selected events occur.

Select **Webhooks** in the sidebar to view and manage webhooks for the current project.

![Webhooks page](https://assets-docs.agora.io/images/console/webhooks-list.png)

To configure webhooks:

1. In [Agora Console](https://console.agora.io), select **Webhooks** in the sidebar.

2. Select **New Webhook** to open the webhook configuration panel.

   ![Webhook configuration in Agora Console](https://assets-docs.agora.io/images/console/webhook-rtc.png)

3. From the **Product** dropdown, select the product for which you want to set up Webhook notifications.

4. Copy the **Signing secret**. Use this secret to add signature verification.

5. Fill in the following:

   * **Region**: Select the region where your notifications receiving server is located. Agora connects to the nearest Agora node server based on your selection.

   * **Receiving URL**: The \`HTTPS\` public address of your server that receives the notifications, for example \`https://1111-123-456-789-99.ap.ngrok.io/ncsNotify\`. Only \`HTTPS\` endpoints are supported.

   * **Subscribe to events**: Select all the events for which you want to receive notifications.

     If the selected events generate a high number of queries per second (QPS), ensure that your server has sufficient processing capacity.

   * **IP whitelist**: If your server is behind a firewall, enable this option, then call the [IP address query API](/en/api-reference/api-ref/rtc/query-ip-address) to get the IP addresses of the Agora Notifications server and add them to the firewall's allowed IP list.

   <CalloutContainer type="info">
     <CalloutDescription>
       To reduce the delay in notification delivery, best practice is to activate \`HTTP\` persistent connection (also called \`HTTP\` keep-alive) on your server with the following settings:

       * \`MaxKeepAliveRequests\`: 100 or more
       * \`KeepAliveTimeout\`: 10 seconds or more
     </CalloutDescription>
   </CalloutContainer>

6. Select **Run health check**. Agora performs a health test for your configuration as follows:

   1. The health test generates test events that correspond to your subscribed events, and sends callbacks to your server.

      In test event callbacks, the channelName is \`test_webhook\`, and the uid is \`12121212\`.

   2. After receiving each test callback, your server must respond within 10 seconds with a status code of \`200\`. The response body must be in JSON format.

7. When the health check succeeds, select **Save**.

   If the health check fails, follow the prompt in Agora Console to troubleshoot the error. Common errors include the following:

   | Status code | Error                   | Description                                                                                                                                                                                                                                                                                                             |
   | ----------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | \`590\`       | Request timeout         | Your server does not return the status code \`200\` within 10 seconds. Check whether your server responds to the request properly. If your server responds to the request properly, contact Agora Technical Support to check if the network connection between the Agora Notifications server and your server is working. |
   | \`591\`       | Domain name unreachable | The domain name is invalid and cannot be resolved to the target IP address. Check whether your server is properly deployed.                                                                                                                                                                                             |
   | \`592\`       | Certificate error       | The Agora Notifications server fails to verify the SSL certificates returned by your server. Check if the SSL certificates of your server are valid. If your server is behind a firewall, check whether you have added all IP addresses of the Agora Notifications server to the firewall's allowed IP list.            |
   | Other       | Other response errors   | Your server returns a response with a status code other than \`200\`. See the prompt in Agora Console for the specific status code and error messages.                                                                                                                                                                    |

### Agora analytics [#agora-analytics]

Select **Agora Analytics** in the sidebar to open analytics in a new tab. Use it to track and analyze usage and quality data for RTC and Chat. For details, see [Agora Analytics overview](/en/realtime-media/agora-analytics/product-overview).

## Account settings [#account-settings]

Account settings apply across your entire Agora account, not to a single project. **Usage**, **Projects**, and **Billing** are available directly in the sidebar. Access other options by clicking the username at the bottom of the sidebar.

![Account popup menu](https://assets-docs.agora.io/images/console/account-menu.png)

The popup menu shows your current workspace and gives access to **Profile**, **Subscriptions**, **Extensions**, **RESTful API Keys**, and **Settings**. It also gives you access to developer and support resources, including documentation, support tickets, and community links (**Get Support**), as well as account-wide actions like switching the theme (**Theme**), reverting to the legacy Console (**Back to classic console**), and signing out (**Sign out**).

### Profile [#profile]

Use the profile page to update your personal and security details such as your name, email, and phone number. You can also reset your password or connect a Google or GitHub account to enable alternate sign-in methods.

### Usage [#usage]

Select **Usage** in the sidebar. The **Usage** page shows your account's usage for the current billing cycle.

* **Total Usage**: A summary of RTC minutes, agent minutes, and Signaling messages used in the current billing cycle.
* **Detailed Usage**: A breakdown of usage by product, filterable by project and date range. Select **View Breakdown** to chart usage over time, and export the data using the download icon.

![Detailed Usage chart with filters](https://assets-docs.agora.io/images/console/usage-detailed.png)

For deeper usage insights, use [Agora Analytics](/en/realtime-media/agora-analytics/product-overview).

### Projects [#projects]

Select **Projects** in the sidebar to view and manage all projects in your account.

* Search projects by name or App ID.
* Select **Create project** to create a new project.
* Click the **Actions** menu next to a project to open its **Credentials** panel, or perform other project actions.

![Projects page](https://assets-docs.agora.io/images/console/projects-list.png)

### Subscriptions [#subscriptions]

The **Subscriptions** page shows available monthly subscription plans and top-up packs for Agora products. You can view your current subscription, compare included features between various plans, and upgrade or downgrade your subscription. You can also view your purchase history on this page.

![Subscription plans](https://assets-docs.agora.io/images/console/subscription-plans.png)

For detailed pricing for a specific product, see the product's pricing page.

### Billing [#billing]

Select **Billing** in the sidebar. The **Billing** page shows your available and reserved balance, invoices, transactions, payment methods, and billing information.

![Billing page showing balance, invoices, and transactions](https://assets-docs.agora.io/images/console/billing.png)

* **Account Balance**: Your available balance, with options to top up your wallet or withdraw funds once a payment method is on file.

* **Reserved Balance**: Funds reserved against estimated usage. Select **View Estimate** to see the breakdown.

* **Your Invoices**: Monthly and pre-paid invoices, filterable by date range.

* **Transactions**: A log of balance movements, filterable by type, plus a separate tab for withdraw requests.

* **Payment Methods**: Saved cards and bank transfer details used for billing.

  * **Cards**: Select **Add New Card** to save a credit card for billing and invoice settlement. Provide the card number, name on card, expiration date, and CVC. Optionally set the card as the default for future payments.

    ![Add New Card dialog](https://assets-docs.agora.io/images/console/add-new-card.png)

  * **Bank Transfer**: Switch to the **Bank Transfer** tab for wire transfer instructions, including the beneficiary's name, account number, bank, SWIFT code, and bank address. Include the provided note (your Company ID) in the transfer's notes field.

    <CalloutContainer type="warning">
      <CalloutDescription>
        Transfers made without the provided note can't be matched to your account and will be disregarded.
      </CalloutDescription>
    </CalloutContainer>

* **Billing Information**: The name and address associated with your billing card.

* **Billing FAQ**: Information about billing, such as schedule, account suspension policy, payment orders, and refunds.

### Extensions [#extensions]

Use the **Extensions** page to browse and manage extensions that add features to your app on top of Agora SDKs.

![Extensions marketplace](https://assets-docs.agora.io/images/console/extensions.png)

Select an extension from the list, then click **View details** to open the configuration page.

### RESTful API keys [#restful-api-keys]

This page lists your RESTful API keys, used to authenticate with Agora's RESTful API.

Each key consists of a Customer ID and Customer Secret. Select **Create API Key** to generate a new key. You can download the Customer Secret only once, so save it somewhere secure. Add a note to a key to help identify it. Select the trash icon to delete a key. You can have a maximum of 10 keys per account.

![RESTful API keys](https://assets-docs.agora.io/images/console/restful-api-keys.png)

### Settings [#settings]

The **Settings** page lets you manage your account information, team members, SSO integration, and notification settings.

#### Account [#account]

Use the **Account** tab to manage your account details, security controls, and account deletion. The tab has the following panels:

* **Account**: Edit your organization name, copy your company ID, or change your account email. Select **Save account** to apply your changes.
* **Security controls**: Toggle **Support operation allowance** to allow Agora customer support to operate your Console for the next 24 hours. Toggle **Two-factor authentication** to require two-factor authentication for sensitive account actions.
* **Delete account**: Check whether your account can be deleted, then delete it.

To delete your Agora account, do the following:

1. On the **Account** tab, go to the **Delete account** panel at the bottom of the page.
2. Select **Run pre-check**. The pre-check lists anything that prevents you from deleting your account, such as active projects, a nonzero balance, or remaining team members. Resolve each blocker, then run the pre-check again.
3. When the pre-check finds no blockers, select **Delete account** and confirm the deletion.

#### Teams and members [#teams-and-members]

The **Teams and Members** tab lets you manage who has access to your account.

* **Members**: Lists each member, their role, status, and any remarks. Select **Invite Member** to add a new member.
* **Roles**: Lists each role, its permissions, and the projects it applies to. Permissions cover Usage, Finance, Teams & Members, Projects, XLA, and Agora Analytics access. Agora provides five built-in roles: **Finance**, **Engineer**, **CS & Maintenance**, **Product & Operation**, and **Admin**. Built-in roles are locked and can't be edited.

![Roles table showing permissions by module](https://assets-docs.agora.io/images/console/members-roles.png)

Select **Create Role** to define a custom role. When creating a role, set:

* **Role name**: A name for the role.
* **Permissions**: Access level (**None**, **View**, or **Edit**, depending on the module) for Usage, Finance, Teams & Members, Projects, and XLA.
* **Agora Analytics**: Access to Call Inspector, Data Insights, and Live Data.
* **Data**: The projects the role applies to. Select **All Projects**, or choose specific projects from the list.

![Create Role dialog with permissions form](https://assets-docs.agora.io/images/console/create-role.png)

#### SSO management [#sso-management]

The **SSO Management** tab lets you integrate Agora Console with Okta as your identity provider, so your team can log in using their Okta SSO credentials. This integration manages access using SAML and SCIM, and requires an active Premium or Enterprise Support Plan. Select **Request** to request the integration.

#### Notification preferences [#notification-preferences]

Use the **Notification Preferences** tab to configure whether you want to receive notifications from Agora by email or text messages. You can set fine-grained preferences for each type of alert.

![Notification preferences](https://assets-docs.agora.io/images/console/notification-preferences.png)

To view your notifications press the bell icon next to your username to open the **Notifications** page. The page lists notifications related to your Agora account. Filter by category using **All**, **Unread**, **Account**, **Billing**, **Product**, or **System**. Select a notification to read its full content.

### Get support [#get-support]

The **Get support** sub-menu provides useful links to Agora documentation, sales, support tickets, and the community platform.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Use Agora Console to manage your projects and account settings. Console settings are organized into two groups:"
  }, {
    heading: undefined,
    content: "**Project-level settings**: Apply to a specific project."
  }, {
    heading: undefined,
    content: "**Account settings**: Apply across your entire Agora account."
  }, {
    heading: "project-level-view",
    content: "When you log in to Agora Console, you land on the **Home** page for the selected project. Use the **Project** dropdown at the top of the page to switch between projects. Agora creates a default project for you when you create a new account."
  }, {
    heading: "project-level-view",
    content: "Use the sidebar to switch between project-level pages."
  }, {
    heading: "home",
    content: "The **Home** page is the landing page for a project in Agora Console. It shows quick links to start building an AI agent, RTC services, your project's App ID and certificate, and a summary of your usage and billing across RTC, Signaling, and Conversational AI."
  }, {
    heading: "credentials",
    content: "Select **Manage credentials** on the project card, on the **Home** page, to open the **Project credentials** panel. This panel shows the basic identity, security configuration, and credentials for the selected project."
  }, {
    heading: "credentials",
    content: "**Project Name**: An editable, human-readable name for the project. Select **Edit** to rename the project."
  }, {
    heading: "credentials",
    content: "**Project ID**: An internal ID for your project. This is **not** the App ID."
  }, {
    heading: "credentials",
    content: "**Status**: The status of your Agora project. Select **Disable project** to disable it."
  }, {
    heading: "credentials",
    content: "**App ID**: A unique, non-editable identifier for the project. Select the copy icon to copy the ID to your clipboard."
  }, {
    heading: "credentials",
    content: "**Primary certificate**: The project's primary server-side secret, used to generate authentication tokens. Enabling the primary certificate (default) secures the project and requires clients to authenticate with a token. Treat the primary certificate like a database password."
  }, {
    heading: "credentials",
    content: "**Secondary certificate**: An optional fallback certificate used during certificate rotation. Enable it using the **Enable Secondary** button. You can't delete a secondary certificate while it is enabled; disable it first before deleting."
  }, {
    heading: "credentials",
    content: "You can copy your **App ID** and **Primary certificate** individually, generate a temporary token, or download your Agora `.env` file for use in your projects."
  }, {
    heading: "credentials",
    content: "**Rotate certificates**"
  }, {
    heading: "credentials",
    content: "If you suspect your primary certificate has been compromised, rotate it using the secondary certificate. Replacing the primary certificate may impact your live business, so only rotate certificates when necessary."
  }, {
    heading: "credentials",
    content: "Select **Add a Certificate** to enable the secondary certificate."
  }, {
    heading: "credentials",
    content: "Select **Make Primary** against the secondary certificate to swap the primary and secondary certificates."
  }, {
    heading: "credentials",
    content: "Select **Disable Secondary** to disable the secondary certificate (the original primary certificate)."
  }, {
    heading: "credentials",
    content: "Once your users have switched to the new certificate, select **Delete Secondary** to delete it."
  }, {
    heading: "credentials",
    content: "Once deleted, a certificate can't be restored. Before deleting it, confirm that users have switched to the new certificate. Deleting a certificate immediately invalidates all tokens generated with it, and users already connected can't renew their tokens using it."
  }, {
    heading: "rtc-services",
    content: "Select **RTC Services** in the sidebar to view and configure the Agora products and services available for the current project. Services are grouped into the following categories:"
  }, {
    heading: "rtc-services",
    content: "**Intelligence**: Conversational AI Engine, Real-Time Speech-to-Text."
  }, {
    heading: "rtc-services",
    content: "**Media**: Cloud Recording, Media Push, Video Screenshot Upload, Media Gateway, Media Pull."
  }, {
    heading: "rtc-services",
    content: "**Messaging and Signaling**: Signaling, Chat."
  }, {
    heading: "rtc-services",
    content: "**Collaboration**: Whiteboard, Flexible Classroom."
  }, {
    heading: "rtc-services",
    content: "**Infrastructure**: Cloud Proxy, Co-Host Authentication."
  }, {
    heading: "rtc-services",
    content: "Use the toggle on each product panel to enable or disable it for the project. Select the settings icon to open its configuration panel. For an overview of the available configuration options, refer to the specific product documentation."
  }, {
    heading: "webhooks",
    content: "A webhook is a callback over HTTPS that allows your app or back-end system to receive notifications. Agora calls your webhook endpoint from its servers to send notifications when selected events occur."
  }, {
    heading: "webhooks",
    content: "Select **Webhooks** in the sidebar to view and manage webhooks for the current project."
  }, {
    heading: "webhooks",
    content: "To configure webhooks:"
  }, {
    heading: "webhooks",
    content: "In Agora Console, select **Webhooks** in the sidebar."
  }, {
    heading: "webhooks",
    content: "Select **New Webhook** to open the webhook configuration panel."
  }, {
    heading: "webhooks",
    content: "From the **Product** dropdown, select the product for which you want to set up Webhook notifications."
  }, {
    heading: "webhooks",
    content: "Copy the **Signing secret**. Use this secret to add signature verification."
  }, {
    heading: "webhooks",
    content: "Fill in the following:"
  }, {
    heading: "webhooks",
    content: "**Region**: Select the region where your notifications receiving server is located. Agora connects to the nearest Agora node server based on your selection."
  }, {
    heading: "webhooks",
    content: "**Receiving URL**: The `HTTPS` public address of your server that receives the notifications, for example `https://1111-123-456-789-99.ap.ngrok.io/ncsNotify`. Only `HTTPS` endpoints are supported."
  }, {
    heading: "webhooks",
    content: "**Subscribe to events**: Select all the events for which you want to receive notifications."
  }, {
    heading: "webhooks",
    content: "If the selected events generate a high number of queries per second (QPS), ensure that your server has sufficient processing capacity."
  }, {
    heading: "webhooks",
    content: "**IP whitelist**: If your server is behind a firewall, enable this option, then call the IP address query API to get the IP addresses of the Agora Notifications server and add them to the firewall's allowed IP list."
  }, {
    heading: "webhooks",
    content: "To reduce the delay in notification delivery, best practice is to activate `HTTP` persistent connection (also called `HTTP` keep-alive) on your server with the following settings:"
  }, {
    heading: "webhooks",
    content: "`MaxKeepAliveRequests`: 100 or more"
  }, {
    heading: "webhooks",
    content: "`KeepAliveTimeout`: 10 seconds or more"
  }, {
    heading: "webhooks",
    content: "Select **Run health check**. Agora performs a health test for your configuration as follows:"
  }, {
    heading: "webhooks",
    content: "The health test generates test events that correspond to your subscribed events, and sends callbacks to your server."
  }, {
    heading: "webhooks",
    content: "In test event callbacks, the channelName is `test_webhook`, and the uid is `12121212`."
  }, {
    heading: "webhooks",
    content: "After receiving each test callback, your server must respond within 10 seconds with a status code of `200`. The response body must be in JSON format."
  }, {
    heading: "webhooks",
    content: "When the health check succeeds, select **Save**."
  }, {
    heading: "webhooks",
    content: "If the health check fails, follow the prompt in Agora Console to troubleshoot the error. Common errors include the following:"
  }, {
    heading: "webhooks",
    content: "Status code"
  }, {
    heading: "webhooks",
    content: "Error"
  }, {
    heading: "webhooks",
    content: "Description"
  }, {
    heading: "webhooks",
    content: "`590`"
  }, {
    heading: "webhooks",
    content: "Request timeout"
  }, {
    heading: "webhooks",
    content: "Your server does not return the status code `200` within 10 seconds. Check whether your server responds to the request properly. If your server responds to the request properly, contact Agora Technical Support to check if the network connection between the Agora Notifications server and your server is working."
  }, {
    heading: "webhooks",
    content: "`591`"
  }, {
    heading: "webhooks",
    content: "Domain name unreachable"
  }, {
    heading: "webhooks",
    content: "The domain name is invalid and cannot be resolved to the target IP address. Check whether your server is properly deployed."
  }, {
    heading: "webhooks",
    content: "`592`"
  }, {
    heading: "webhooks",
    content: "Certificate error"
  }, {
    heading: "webhooks",
    content: "The Agora Notifications server fails to verify the SSL certificates returned by your server. Check if the SSL certificates of your server are valid. If your server is behind a firewall, check whether you have added all IP addresses of the Agora Notifications server to the firewall's allowed IP list."
  }, {
    heading: "webhooks",
    content: "Other"
  }, {
    heading: "webhooks",
    content: "Other response errors"
  }, {
    heading: "webhooks",
    content: "Your server returns a response with a status code other than `200`. See the prompt in Agora Console for the specific status code and error messages."
  }, {
    heading: "agora-analytics",
    content: "Select **Agora Analytics** in the sidebar to open analytics in a new tab. Use it to track and analyze usage and quality data for RTC and Chat. For details, see Agora Analytics overview."
  }, {
    heading: "account-settings",
    content: "Account settings apply across your entire Agora account, not to a single project. **Usage**, **Projects**, and **Billing** are available directly in the sidebar. Access other options by clicking the username at the bottom of the sidebar."
  }, {
    heading: "account-settings",
    content: "The popup menu shows your current workspace and gives access to **Profile**, **Subscriptions**, **Extensions**, **RESTful API Keys**, and **Settings**. It also gives you access to developer and support resources, including documentation, support tickets, and community links (**Get Support**), as well as account-wide actions like switching the theme (**Theme**), reverting to the legacy Console (**Back to classic console**), and signing out (**Sign out**)."
  }, {
    heading: "profile",
    content: "Use the profile page to update your personal and security details such as your name, email, and phone number. You can also reset your password or connect a Google or GitHub account to enable alternate sign-in methods."
  }, {
    heading: "usage",
    content: "Select **Usage** in the sidebar. The **Usage** page shows your account's usage for the current billing cycle."
  }, {
    heading: "usage",
    content: "**Total Usage**: A summary of RTC minutes, agent minutes, and Signaling messages used in the current billing cycle."
  }, {
    heading: "usage",
    content: "**Detailed Usage**: A breakdown of usage by product, filterable by project and date range. Select **View Breakdown** to chart usage over time, and export the data using the download icon."
  }, {
    heading: "usage",
    content: "For deeper usage insights, use Agora Analytics."
  }, {
    heading: "projects",
    content: "Select **Projects** in the sidebar to view and manage all projects in your account."
  }, {
    heading: "projects",
    content: "Search projects by name or App ID."
  }, {
    heading: "projects",
    content: "Select **Create project** to create a new project."
  }, {
    heading: "projects",
    content: "Click the **Actions** menu next to a project to open its **Credentials** panel, or perform other project actions."
  }, {
    heading: "subscriptions",
    content: "The **Subscriptions** page shows available monthly subscription plans and top-up packs for Agora products. You can view your current subscription, compare included features between various plans, and upgrade or downgrade your subscription. You can also view your purchase history on this page."
  }, {
    heading: "subscriptions",
    content: "For detailed pricing for a specific product, see the product's pricing page."
  }, {
    heading: "billing",
    content: "Select **Billing** in the sidebar. The **Billing** page shows your available and reserved balance, invoices, transactions, payment methods, and billing information."
  }, {
    heading: "billing",
    content: "**Account Balance**: Your available balance, with options to top up your wallet or withdraw funds once a payment method is on file."
  }, {
    heading: "billing",
    content: "**Reserved Balance**: Funds reserved against estimated usage. Select **View Estimate** to see the breakdown."
  }, {
    heading: "billing",
    content: "**Your Invoices**: Monthly and pre-paid invoices, filterable by date range."
  }, {
    heading: "billing",
    content: "**Transactions**: A log of balance movements, filterable by type, plus a separate tab for withdraw requests."
  }, {
    heading: "billing",
    content: "**Payment Methods**: Saved cards and bank transfer details used for billing."
  }, {
    heading: "billing",
    content: "**Cards**: Select **Add New Card** to save a credit card for billing and invoice settlement. Provide the card number, name on card, expiration date, and CVC. Optionally set the card as the default for future payments."
  }, {
    heading: "billing",
    content: "**Bank Transfer**: Switch to the **Bank Transfer** tab for wire transfer instructions, including the beneficiary's name, account number, bank, SWIFT code, and bank address. Include the provided note (your Company ID) in the transfer's notes field."
  }, {
    heading: "billing",
    content: "Transfers made without the provided note can't be matched to your account and will be disregarded."
  }, {
    heading: "billing",
    content: "**Billing Information**: The name and address associated with your billing card."
  }, {
    heading: "billing",
    content: "**Billing FAQ**: Information about billing, such as schedule, account suspension policy, payment orders, and refunds."
  }, {
    heading: "extensions",
    content: "Use the **Extensions** page to browse and manage extensions that add features to your app on top of Agora SDKs."
  }, {
    heading: "extensions",
    content: "Select an extension from the list, then click **View details** to open the configuration page."
  }, {
    heading: "restful-api-keys",
    content: "This page lists your RESTful API keys, used to authenticate with Agora's RESTful API."
  }, {
    heading: "restful-api-keys",
    content: "Each key consists of a Customer ID and Customer Secret. Select **Create API Key** to generate a new key. You can download the Customer Secret only once, so save it somewhere secure. Add a note to a key to help identify it. Select the trash icon to delete a key. You can have a maximum of 10 keys per account."
  }, {
    heading: "settings",
    content: "The **Settings** page lets you manage your account information, team members, SSO integration, and notification settings."
  }, {
    heading: "account",
    content: "Use the **Account** tab to manage your account details, security controls, and account deletion. The tab has the following panels:"
  }, {
    heading: "account",
    content: "**Account**: Edit your organization name, copy your company ID, or change your account email. Select **Save account** to apply your changes."
  }, {
    heading: "account",
    content: "**Security controls**: Toggle **Support operation allowance** to allow Agora customer support to operate your Console for the next 24 hours. Toggle **Two-factor authentication** to require two-factor authentication for sensitive account actions."
  }, {
    heading: "account",
    content: "**Delete account**: Check whether your account can be deleted, then delete it."
  }, {
    heading: "account",
    content: "To delete your Agora account, do the following:"
  }, {
    heading: "account",
    content: "On the **Account** tab, go to the **Delete account** panel at the bottom of the page."
  }, {
    heading: "account",
    content: "Select **Run pre-check**. The pre-check lists anything that prevents you from deleting your account, such as active projects, a nonzero balance, or remaining team members. Resolve each blocker, then run the pre-check again."
  }, {
    heading: "account",
    content: "When the pre-check finds no blockers, select **Delete account** and confirm the deletion."
  }, {
    heading: "teams-and-members",
    content: "The **Teams and Members** tab lets you manage who has access to your account."
  }, {
    heading: "teams-and-members",
    content: "**Members**: Lists each member, their role, status, and any remarks. Select **Invite Member** to add a new member."
  }, {
    heading: "teams-and-members",
    content: "**Roles**: Lists each role, its permissions, and the projects it applies to. Permissions cover Usage, Finance, Teams & Members, Projects, XLA, and Agora Analytics access. Agora provides five built-in roles: **Finance**, **Engineer**, **CS & Maintenance**, **Product & Operation**, and **Admin**. Built-in roles are locked and can't be edited."
  }, {
    heading: "teams-and-members",
    content: "Select **Create Role** to define a custom role. When creating a role, set:"
  }, {
    heading: "teams-and-members",
    content: "**Role name**: A name for the role."
  }, {
    heading: "teams-and-members",
    content: "**Permissions**: Access level (**None**, **View**, or **Edit**, depending on the module) for Usage, Finance, Teams & Members, Projects, and XLA."
  }, {
    heading: "teams-and-members",
    content: "**Agora Analytics**: Access to Call Inspector, Data Insights, and Live Data."
  }, {
    heading: "teams-and-members",
    content: "**Data**: The projects the role applies to. Select **All Projects**, or choose specific projects from the list."
  }, {
    heading: "sso-management",
    content: "The **SSO Management** tab lets you integrate Agora Console with Okta as your identity provider, so your team can log in using their Okta SSO credentials. This integration manages access using SAML and SCIM, and requires an active Premium or Enterprise Support Plan. Select **Request** to request the integration."
  }, {
    heading: "notification-preferences",
    content: "Use the **Notification Preferences** tab to configure whether you want to receive notifications from Agora by email or text messages. You can set fine-grained preferences for each type of alert."
  }, {
    heading: "notification-preferences",
    content: "To view your notifications press the bell icon next to your username to open the **Notifications** page. The page lists notifications related to your Agora account. Filter by category using **All**, **Unread**, **Account**, **Billing**, **Product**, or **System**. Select a notification to read its full content."
  }, {
    heading: "get-support",
    content: "The **Get support** sub-menu provides useful links to Agora documentation, sales, support tickets, and the community platform."
  }],
  headings: [{
    id: "project-level-view",
    content: "Project-level view"
  }, {
    id: "home",
    content: "Home"
  }, {
    id: "credentials",
    content: "Credentials"
  }, {
    id: "rtc-services",
    content: "RTC Services"
  }, {
    id: "webhooks",
    content: "Webhooks"
  }, {
    id: "agora-analytics",
    content: "Agora analytics"
  }, {
    id: "account-settings",
    content: "Account settings"
  }, {
    id: "profile",
    content: "Profile"
  }, {
    id: "usage",
    content: "Usage"
  }, {
    id: "projects",
    content: "Projects"
  }, {
    id: "subscriptions",
    content: "Subscriptions"
  }, {
    id: "billing",
    content: "Billing"
  }, {
    id: "extensions",
    content: "Extensions"
  }, {
    id: "restful-api-keys",
    content: "RESTful API keys"
  }, {
    id: "settings",
    content: "Settings"
  }, {
    id: "account",
    content: "Account"
  }, {
    id: "teams-and-members",
    content: "Teams and members"
  }, {
    id: "sso-management",
    content: "SSO management"
  }, {
    id: "notification-preferences",
    content: "Notification preferences"
  }, {
    id: "get-support",
    content: "Get support"
  }]
};
export let toc = [{
  depth: 2,
  url: "#project-level-view",
  title: _jsx(_Fragment, {
    children: "Project-level view"
  })
}, {
  depth: 3,
  url: "#home",
  title: _jsx(_Fragment, {
    children: "Home"
  })
}, {
  depth: 3,
  url: "#credentials",
  title: _jsx(_Fragment, {
    children: "Credentials"
  })
}, {
  depth: 3,
  url: "#rtc-services",
  title: _jsx(_Fragment, {
    children: "RTC Services"
  })
}, {
  depth: 3,
  url: "#webhooks",
  title: _jsx(_Fragment, {
    children: "Webhooks"
  })
}, {
  depth: 3,
  url: "#agora-analytics",
  title: _jsx(_Fragment, {
    children: "Agora analytics"
  })
}, {
  depth: 2,
  url: "#account-settings",
  title: _jsx(_Fragment, {
    children: "Account settings"
  })
}, {
  depth: 3,
  url: "#profile",
  title: _jsx(_Fragment, {
    children: "Profile"
  })
}, {
  depth: 3,
  url: "#usage",
  title: _jsx(_Fragment, {
    children: "Usage"
  })
}, {
  depth: 3,
  url: "#projects",
  title: _jsx(_Fragment, {
    children: "Projects"
  })
}, {
  depth: 3,
  url: "#subscriptions",
  title: _jsx(_Fragment, {
    children: "Subscriptions"
  })
}, {
  depth: 3,
  url: "#billing",
  title: _jsx(_Fragment, {
    children: "Billing"
  })
}, {
  depth: 3,
  url: "#extensions",
  title: _jsx(_Fragment, {
    children: "Extensions"
  })
}, {
  depth: 3,
  url: "#restful-api-keys",
  title: _jsx(_Fragment, {
    children: "RESTful API keys"
  })
}, {
  depth: 3,
  url: "#settings",
  title: _jsx(_Fragment, {
    children: "Settings"
  })
}, {
  depth: 4,
  url: "#account",
  title: _jsx(_Fragment, {
    children: "Account"
  })
}, {
  depth: 4,
  url: "#teams-and-members",
  title: _jsx(_Fragment, {
    children: "Teams and members"
  })
}, {
  depth: 4,
  url: "#sso-management",
  title: _jsx(_Fragment, {
    children: "SSO management"
  })
}, {
  depth: 4,
  url: "#notification-preferences",
  title: _jsx(_Fragment, {
    children: "Notification preferences"
  })
}, {
  depth: 3,
  url: "#get-support",
  title: _jsx(_Fragment, {
    children: "Get support"
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
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Use Agora Console to manage your projects and account settings. Console settings are organized into two groups:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Project-level settings"
        }), ": Apply to a specific project."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Account settings"
        }), ": Apply across your entire Agora account."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "project-level-view",
      children: "Project-level view"
    }), `
`, _jsxs(_components.p, {
      children: ["When you log in to Agora Console, you land on the ", _jsx(_components.strong, {
        children: "Home"
      }), " page for the selected project. Use the ", _jsx(_components.strong, {
        children: "Project"
      }), " dropdown at the top of the page to switch between projects. Agora creates a default project for you when you create a new account."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/project-overview.png",
        alt: "Home page"
      })
    }), `
`, _jsx(_components.p, {
      children: "Use the sidebar to switch between project-level pages."
    }), `
`, _jsx(_components.h3, {
      id: "home",
      children: "Home"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.strong, {
        children: "Home"
      }), " page is the landing page for a project in Agora Console. It shows quick links to start building an AI agent, RTC services, your project's App ID and certificate, and a summary of your usage and billing across RTC, Signaling, and Conversational AI."]
    }), `
`, _jsx(_components.h3, {
      id: "credentials",
      children: "Credentials"
    }), `
`, _jsxs(_components.p, {
      children: ["Select ", _jsx(_components.strong, {
        children: "Manage credentials"
      }), " on the project card, on the ", _jsx(_components.strong, {
        children: "Home"
      }), " page, to open the ", _jsx(_components.strong, {
        children: "Project credentials"
      }), " panel. This panel shows the basic identity, security configuration, and credentials for the selected project."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Project Name"
        }), ": An editable, human-readable name for the project. Select ", _jsx(_components.strong, {
          children: "Edit"
        }), " to rename the project."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Project ID"
        }), ": An internal ID for your project. This is ", _jsx(_components.strong, {
          children: "not"
        }), " the App ID."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Status"
        }), ": The status of your Agora project. Select ", _jsx(_components.strong, {
          children: "Disable project"
        }), " to disable it."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "App ID"
        }), ": A unique, non-editable identifier for the project. Select the copy icon to copy the ID to your clipboard."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Primary certificate"
        }), ": The project's primary server-side secret, used to generate authentication tokens. Enabling the primary certificate (default) secures the project and requires clients to authenticate with a token. Treat the primary certificate like a database password."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Secondary certificate"
        }), ": An optional fallback certificate used during certificate rotation. Enable it using the ", _jsx(_components.strong, {
          children: "Enable Secondary"
        }), " button. You can't delete a secondary certificate while it is enabled; disable it first before deleting."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["You can copy your ", _jsx(_components.strong, {
        children: "App ID"
      }), " and ", _jsx(_components.strong, {
        children: "Primary certificate"
      }), " individually, generate a temporary token, or download your Agora ", _jsx(_components.code, {
        children: ".env"
      }), " file for use in your projects."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/project-credentials.png",
        alt: "Project credentials panel"
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Rotate certificates"
      })
    }), `
`, _jsx(_components.p, {
      children: "If you suspect your primary certificate has been compromised, rotate it using the secondary certificate. Replacing the primary certificate may impact your live business, so only rotate certificates when necessary."
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "Add a Certificate"
        }), " to enable the secondary certificate."]
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "Make Primary"
        }), " against the secondary certificate to swap the primary and secondary certificates."]
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "Disable Secondary"
        }), " to disable the secondary certificate (the original primary certificate)."]
      }), `
`, _jsxs(_components.li, {
        children: ["Once your users have switched to the new certificate, select ", _jsx(_components.strong, {
          children: "Delete Secondary"
        }), " to delete it."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "warning",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Once deleted, a certificate can't be restored. Before deleting it, confirm that users have switched to the new certificate. Deleting a certificate immediately invalidates all tokens generated with it, and users already connected can't renew their tokens using it."
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "rtc-services",
      children: "RTC Services"
    }), `
`, _jsxs(_components.p, {
      children: ["Select ", _jsx(_components.strong, {
        children: "RTC Services"
      }), " in the sidebar to view and configure the Agora products and services available for the current project. Services are grouped into the following categories:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Intelligence"
        }), ": Conversational AI Engine, Real-Time Speech-to-Text."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Media"
        }), ": Cloud Recording, Media Push, Video Screenshot Upload, Media Gateway, Media Pull."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Messaging and Signaling"
        }), ": Signaling, Chat."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Collaboration"
        }), ": Whiteboard, Flexible Classroom."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Infrastructure"
        }), ": Cloud Proxy, Co-Host Authentication."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Use the toggle on each product panel to enable or disable it for the project. Select the settings icon to open its configuration panel. For an overview of the available configuration options, refer to the specific product documentation."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/realtime-services.png",
        alt: "RTC Services page"
      })
    }), `
`, _jsx(_components.h3, {
      id: "webhooks",
      children: "Webhooks"
    }), `
`, _jsx(_components.p, {
      children: "A webhook is a callback over HTTPS that allows your app or back-end system to receive notifications. Agora calls your webhook endpoint from its servers to send notifications when selected events occur."
    }), `
`, _jsxs(_components.p, {
      children: ["Select ", _jsx(_components.strong, {
        children: "Webhooks"
      }), " in the sidebar to view and manage webhooks for the current project."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/webhooks-list.png",
        alt: "Webhooks page"
      })
    }), `
`, _jsxs(_Fragment, {
      children: [_jsx(_components.p, {
        children: "To configure webhooks:"
      }), `
`, _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["In ", _jsx(_components.a, {
              href: "https://console.agora.io",
              children: "Agora Console"
            }), ", select ", _jsx(_components.strong, {
              children: "Webhooks"
            }), " in the sidebar."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Select ", _jsx(_components.strong, {
              children: "New Webhook"
            }), " to open the webhook configuration panel."]
          }), `
`, _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://assets-docs.agora.io/images/console/webhook-rtc.png",
              alt: "Webhook configuration in Agora Console"
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["From the ", _jsx(_components.strong, {
              children: "Product"
            }), " dropdown, select the product for which you want to set up Webhook notifications."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Copy the ", _jsx(_components.strong, {
              children: "Signing secret"
            }), ". Use this secret to add signature verification."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Fill in the following:"
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: [_jsx(_components.strong, {
                  children: "Region"
                }), ": Select the region where your notifications receiving server is located. Agora connects to the nearest Agora node server based on your selection."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: [_jsx(_components.strong, {
                  children: "Receiving URL"
                }), ": The ", _jsx(_components.code, {
                  children: "HTTPS"
                }), " public address of your server that receives the notifications, for example ", _jsx(_components.code, {
                  children: "https://1111-123-456-789-99.ap.ngrok.io/ncsNotify"
                }), ". Only ", _jsx(_components.code, {
                  children: "HTTPS"
                }), " endpoints are supported."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: [_jsx(_components.strong, {
                  children: "Subscribe to events"
                }), ": Select all the events for which you want to receive notifications."]
              }), `
`, _jsx(_components.p, {
                children: "If the selected events generate a high number of queries per second (QPS), ensure that your server has sufficient processing capacity."
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: [_jsx(_components.strong, {
                  children: "IP whitelist"
                }), ": If your server is behind a firewall, enable this option, then call the ", _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/rtc/query-ip-address",
                  children: "IP address query API"
                }), " to get the IP addresses of the Agora Notifications server and add them to the firewall's allowed IP list."]
              }), `
`]
            }), `
`]
          }), `
`, _jsx(CalloutContainer, {
            type: "info",
            children: _jsxs(CalloutDescription, {
              children: [_jsxs(_components.p, {
                children: ["To reduce the delay in notification delivery, best practice is to activate ", _jsx(_components.code, {
                  children: "HTTP"
                }), " persistent connection (also called ", _jsx(_components.code, {
                  children: "HTTP"
                }), " keep-alive) on your server with the following settings:"]
              }), _jsxs(_components.ul, {
                children: [`
`, _jsxs(_components.li, {
                  children: [_jsx(_components.code, {
                    children: "MaxKeepAliveRequests"
                  }), ": 100 or more"]
                }), `
`, _jsxs(_components.li, {
                  children: [_jsx(_components.code, {
                    children: "KeepAliveTimeout"
                  }), ": 10 seconds or more"]
                }), `
`]
              })]
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Select ", _jsx(_components.strong, {
              children: "Run health check"
            }), ". Agora performs a health test for your configuration as follows:"]
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: "The health test generates test events that correspond to your subscribed events, and sends callbacks to your server."
              }), `
`, _jsxs(_components.p, {
                children: ["In test event callbacks, the channelName is ", _jsx(_components.code, {
                  children: "test_webhook"
                }), ", and the uid is ", _jsx(_components.code, {
                  children: "12121212"
                }), "."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["After receiving each test callback, your server must respond within 10 seconds with a status code of ", _jsx(_components.code, {
                  children: "200"
                }), ". The response body must be in JSON format."]
              }), `
`]
            }), `
`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["When the health check succeeds, select ", _jsx(_components.strong, {
              children: "Save"
            }), "."]
          }), `
`, _jsx(_components.p, {
            children: "If the health check fails, follow the prompt in Agora Console to troubleshoot the error. Common errors include the following:"
          }), `
`, _jsxs(_components.table, {
            children: [_jsx(_components.thead, {
              children: _jsxs(_components.tr, {
                children: [_jsx(_components.th, {
                  children: "Status code"
                }), _jsx(_components.th, {
                  children: "Error"
                }), _jsx(_components.th, {
                  children: "Description"
                })]
              })
            }), _jsxs(_components.tbody, {
              children: [_jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  children: _jsx(_components.code, {
                    children: "590"
                  })
                }), _jsx(_components.td, {
                  children: "Request timeout"
                }), _jsxs(_components.td, {
                  children: ["Your server does not return the status code ", _jsx(_components.code, {
                    children: "200"
                  }), " within 10 seconds. Check whether your server responds to the request properly. If your server responds to the request properly, contact Agora Technical Support to check if the network connection between the Agora Notifications server and your server is working."]
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  children: _jsx(_components.code, {
                    children: "591"
                  })
                }), _jsx(_components.td, {
                  children: "Domain name unreachable"
                }), _jsx(_components.td, {
                  children: "The domain name is invalid and cannot be resolved to the target IP address. Check whether your server is properly deployed."
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  children: _jsx(_components.code, {
                    children: "592"
                  })
                }), _jsx(_components.td, {
                  children: "Certificate error"
                }), _jsx(_components.td, {
                  children: "The Agora Notifications server fails to verify the SSL certificates returned by your server. Check if the SSL certificates of your server are valid. If your server is behind a firewall, check whether you have added all IP addresses of the Agora Notifications server to the firewall's allowed IP list."
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  children: "Other"
                }), _jsx(_components.td, {
                  children: "Other response errors"
                }), _jsxs(_components.td, {
                  children: ["Your server returns a response with a status code other than ", _jsx(_components.code, {
                    children: "200"
                  }), ". See the prompt in Agora Console for the specific status code and error messages."]
                })]
              })]
            })]
          }), `
`]
        }), `
`]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "agora-analytics",
      children: "Agora analytics"
    }), `
`, _jsxs(_components.p, {
      children: ["Select ", _jsx(_components.strong, {
        children: "Agora Analytics"
      }), " in the sidebar to open analytics in a new tab. Use it to track and analyze usage and quality data for RTC and Chat. For details, see ", _jsx(_components.a, {
        href: "/en/realtime-media/agora-analytics/product-overview",
        children: "Agora Analytics overview"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "account-settings",
      children: "Account settings"
    }), `
`, _jsxs(_components.p, {
      children: ["Account settings apply across your entire Agora account, not to a single project. ", _jsx(_components.strong, {
        children: "Usage"
      }), ", ", _jsx(_components.strong, {
        children: "Projects"
      }), ", and ", _jsx(_components.strong, {
        children: "Billing"
      }), " are available directly in the sidebar. Access other options by clicking the username at the bottom of the sidebar."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/account-menu.png",
        alt: "Account popup menu"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The popup menu shows your current workspace and gives access to ", _jsx(_components.strong, {
        children: "Profile"
      }), ", ", _jsx(_components.strong, {
        children: "Subscriptions"
      }), ", ", _jsx(_components.strong, {
        children: "Extensions"
      }), ", ", _jsx(_components.strong, {
        children: "RESTful API Keys"
      }), ", and ", _jsx(_components.strong, {
        children: "Settings"
      }), ". It also gives you access to developer and support resources, including documentation, support tickets, and community links (", _jsx(_components.strong, {
        children: "Get Support"
      }), "), as well as account-wide actions like switching the theme (", _jsx(_components.strong, {
        children: "Theme"
      }), "), reverting to the legacy Console (", _jsx(_components.strong, {
        children: "Back to classic console"
      }), "), and signing out (", _jsx(_components.strong, {
        children: "Sign out"
      }), ")."]
    }), `
`, _jsx(_components.h3, {
      id: "profile",
      children: "Profile"
    }), `
`, _jsx(_components.p, {
      children: "Use the profile page to update your personal and security details such as your name, email, and phone number. You can also reset your password or connect a Google or GitHub account to enable alternate sign-in methods."
    }), `
`, _jsx(_components.h3, {
      id: "usage",
      children: "Usage"
    }), `
`, _jsxs(_components.p, {
      children: ["Select ", _jsx(_components.strong, {
        children: "Usage"
      }), " in the sidebar. The ", _jsx(_components.strong, {
        children: "Usage"
      }), " page shows your account's usage for the current billing cycle."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Total Usage"
        }), ": A summary of RTC minutes, agent minutes, and Signaling messages used in the current billing cycle."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Detailed Usage"
        }), ": A breakdown of usage by product, filterable by project and date range. Select ", _jsx(_components.strong, {
          children: "View Breakdown"
        }), " to chart usage over time, and export the data using the download icon."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/usage-detailed.png",
        alt: "Detailed Usage chart with filters"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["For deeper usage insights, use ", _jsx(_components.a, {
        href: "/en/realtime-media/agora-analytics/product-overview",
        children: "Agora Analytics"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "projects",
      children: "Projects"
    }), `
`, _jsxs(_components.p, {
      children: ["Select ", _jsx(_components.strong, {
        children: "Projects"
      }), " in the sidebar to view and manage all projects in your account."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Search projects by name or App ID."
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "Create project"
        }), " to create a new project."]
      }), `
`, _jsxs(_components.li, {
        children: ["Click the ", _jsx(_components.strong, {
          children: "Actions"
        }), " menu next to a project to open its ", _jsx(_components.strong, {
          children: "Credentials"
        }), " panel, or perform other project actions."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/projects-list.png",
        alt: "Projects page"
      })
    }), `
`, _jsx(_components.h3, {
      id: "subscriptions",
      children: "Subscriptions"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.strong, {
        children: "Subscriptions"
      }), " page shows available monthly subscription plans and top-up packs for Agora products. You can view your current subscription, compare included features between various plans, and upgrade or downgrade your subscription. You can also view your purchase history on this page."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/subscription-plans.png",
        alt: "Subscription plans"
      })
    }), `
`, _jsx(_components.p, {
      children: "For detailed pricing for a specific product, see the product's pricing page."
    }), `
`, _jsx(_components.h3, {
      id: "billing",
      children: "Billing"
    }), `
`, _jsxs(_components.p, {
      children: ["Select ", _jsx(_components.strong, {
        children: "Billing"
      }), " in the sidebar. The ", _jsx(_components.strong, {
        children: "Billing"
      }), " page shows your available and reserved balance, invoices, transactions, payment methods, and billing information."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/billing.png",
        alt: "Billing page showing balance, invoices, and transactions"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Account Balance"
          }), ": Your available balance, with options to top up your wallet or withdraw funds once a payment method is on file."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Reserved Balance"
          }), ": Funds reserved against estimated usage. Select ", _jsx(_components.strong, {
            children: "View Estimate"
          }), " to see the breakdown."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Your Invoices"
          }), ": Monthly and pre-paid invoices, filterable by date range."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Transactions"
          }), ": A log of balance movements, filterable by type, plus a separate tab for withdraw requests."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Payment Methods"
          }), ": Saved cards and bank transfer details used for billing."]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Cards"
              }), ": Select ", _jsx(_components.strong, {
                children: "Add New Card"
              }), " to save a credit card for billing and invoice settlement. Provide the card number, name on card, expiration date, and CVC. Optionally set the card as the default for future payments."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/console/add-new-card.png",
                alt: "Add New Card dialog"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Bank Transfer"
              }), ": Switch to the ", _jsx(_components.strong, {
                children: "Bank Transfer"
              }), " tab for wire transfer instructions, including the beneficiary's name, account number, bank, SWIFT code, and bank address. Include the provided note (your Company ID) in the transfer's notes field."]
            }), `
`, _jsx(CalloutContainer, {
              type: "warning",
              children: _jsx(CalloutDescription, {
                children: _jsx(_components.p, {
                  children: "Transfers made without the provided note can't be matched to your account and will be disregarded."
                })
              })
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Billing Information"
          }), ": The name and address associated with your billing card."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Billing FAQ"
          }), ": Information about billing, such as schedule, account suspension policy, payment orders, and refunds."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "extensions",
      children: "Extensions"
    }), `
`, _jsxs(_components.p, {
      children: ["Use the ", _jsx(_components.strong, {
        children: "Extensions"
      }), " page to browse and manage extensions that add features to your app on top of Agora SDKs."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/extensions.png",
        alt: "Extensions marketplace"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Select an extension from the list, then click ", _jsx(_components.strong, {
        children: "View details"
      }), " to open the configuration page."]
    }), `
`, _jsx(_components.h3, {
      id: "restful-api-keys",
      children: "RESTful API keys"
    }), `
`, _jsx(_components.p, {
      children: "This page lists your RESTful API keys, used to authenticate with Agora's RESTful API."
    }), `
`, _jsxs(_components.p, {
      children: ["Each key consists of a Customer ID and Customer Secret. Select ", _jsx(_components.strong, {
        children: "Create API Key"
      }), " to generate a new key. You can download the Customer Secret only once, so save it somewhere secure. Add a note to a key to help identify it. Select the trash icon to delete a key. You can have a maximum of 10 keys per account."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/restful-api-keys.png",
        alt: "RESTful API keys"
      })
    }), `
`, _jsx(_components.h3, {
      id: "settings",
      children: "Settings"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.strong, {
        children: "Settings"
      }), " page lets you manage your account information, team members, SSO integration, and notification settings."]
    }), `
`, _jsx(_components.h4, {
      id: "account",
      children: "Account"
    }), `
`, _jsxs(_components.p, {
      children: ["Use the ", _jsx(_components.strong, {
        children: "Account"
      }), " tab to manage your account details, security controls, and account deletion. The tab has the following panels:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Account"
        }), ": Edit your organization name, copy your company ID, or change your account email. Select ", _jsx(_components.strong, {
          children: "Save account"
        }), " to apply your changes."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Security controls"
        }), ": Toggle ", _jsx(_components.strong, {
          children: "Support operation allowance"
        }), " to allow Agora customer support to operate your Console for the next 24 hours. Toggle ", _jsx(_components.strong, {
          children: "Two-factor authentication"
        }), " to require two-factor authentication for sensitive account actions."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Delete account"
        }), ": Check whether your account can be deleted, then delete it."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "To delete your Agora account, do the following:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["On the ", _jsx(_components.strong, {
          children: "Account"
        }), " tab, go to the ", _jsx(_components.strong, {
          children: "Delete account"
        }), " panel at the bottom of the page."]
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "Run pre-check"
        }), ". The pre-check lists anything that prevents you from deleting your account, such as active projects, a nonzero balance, or remaining team members. Resolve each blocker, then run the pre-check again."]
      }), `
`, _jsxs(_components.li, {
        children: ["When the pre-check finds no blockers, select ", _jsx(_components.strong, {
          children: "Delete account"
        }), " and confirm the deletion."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "teams-and-members",
      children: "Teams and members"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.strong, {
        children: "Teams and Members"
      }), " tab lets you manage who has access to your account."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Members"
        }), ": Lists each member, their role, status, and any remarks. Select ", _jsx(_components.strong, {
          children: "Invite Member"
        }), " to add a new member."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Roles"
        }), ": Lists each role, its permissions, and the projects it applies to. Permissions cover Usage, Finance, Teams & Members, Projects, XLA, and Agora Analytics access. Agora provides five built-in roles: ", _jsx(_components.strong, {
          children: "Finance"
        }), ", ", _jsx(_components.strong, {
          children: "Engineer"
        }), ", ", _jsx(_components.strong, {
          children: "CS & Maintenance"
        }), ", ", _jsx(_components.strong, {
          children: "Product & Operation"
        }), ", and ", _jsx(_components.strong, {
          children: "Admin"
        }), ". Built-in roles are locked and can't be edited."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/members-roles.png",
        alt: "Roles table showing permissions by module"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Select ", _jsx(_components.strong, {
        children: "Create Role"
      }), " to define a custom role. When creating a role, set:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Role name"
        }), ": A name for the role."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Permissions"
        }), ": Access level (", _jsx(_components.strong, {
          children: "None"
        }), ", ", _jsx(_components.strong, {
          children: "View"
        }), ", or ", _jsx(_components.strong, {
          children: "Edit"
        }), ", depending on the module) for Usage, Finance, Teams & Members, Projects, and XLA."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Agora Analytics"
        }), ": Access to Call Inspector, Data Insights, and Live Data."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Data"
        }), ": The projects the role applies to. Select ", _jsx(_components.strong, {
          children: "All Projects"
        }), ", or choose specific projects from the list."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/create-role.png",
        alt: "Create Role dialog with permissions form"
      })
    }), `
`, _jsx(_components.h4, {
      id: "sso-management",
      children: "SSO management"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.strong, {
        children: "SSO Management"
      }), " tab lets you integrate Agora Console with Okta as your identity provider, so your team can log in using their Okta SSO credentials. This integration manages access using SAML and SCIM, and requires an active Premium or Enterprise Support Plan. Select ", _jsx(_components.strong, {
        children: "Request"
      }), " to request the integration."]
    }), `
`, _jsx(_components.h4, {
      id: "notification-preferences",
      children: "Notification preferences"
    }), `
`, _jsxs(_components.p, {
      children: ["Use the ", _jsx(_components.strong, {
        children: "Notification Preferences"
      }), " tab to configure whether you want to receive notifications from Agora by email or text messages. You can set fine-grained preferences for each type of alert."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/notification-preferences.png",
        alt: "Notification preferences"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["To view your notifications press the bell icon next to your username to open the ", _jsx(_components.strong, {
        children: "Notifications"
      }), " page. The page lists notifications related to your Agora account. Filter by category using ", _jsx(_components.strong, {
        children: "All"
      }), ", ", _jsx(_components.strong, {
        children: "Unread"
      }), ", ", _jsx(_components.strong, {
        children: "Account"
      }), ", ", _jsx(_components.strong, {
        children: "Billing"
      }), ", ", _jsx(_components.strong, {
        children: "Product"
      }), ", or ", _jsx(_components.strong, {
        children: "System"
      }), ". Select a notification to read its full content."]
    }), `
`, _jsx(_components.h3, {
      id: "get-support",
      children: "Get support"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.strong, {
        children: "Get support"
      }), " sub-menu provides useful links to Agora documentation, sales, support tickets, and the community platform."]
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
