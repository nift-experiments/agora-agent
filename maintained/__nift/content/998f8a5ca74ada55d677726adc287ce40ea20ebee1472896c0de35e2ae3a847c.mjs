import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Set up SIP trunk",
  description: "Configure an Elastic SIP Trunk for inbound and outbound calling."
};
export let _markdown = `

This guide walks you through configuring an Elastic SIP Trunk for both inbound calls (customers call your AI agent) and outbound calls (your AI agent calls customers).

## Prerequisites [#prerequisites]

Before you begin, ensure that you have:

* An active SIP trunk account.
* A phone number that supports SIP Trunking.

## Understand the setup [#understand-the-setup]

Both inbound and outbound calls are supported through Elastic SIP Trunk, but each direction requires different configuration in your SIP trunk and in Agora Console. The table below summarizes the key differences.

|                      | Inbound                                                                                    | Outbound                                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| **Use case**         | Customer support hotline, IVR replacement, appointment booking                             | Outbound campaigns, appointment reminders, follow-up calls                                   |
| **Call direction**   | External caller dials your SIP trunk number → SIP trunk routes to Agora → AI Agent answers | Agora initiates call via SIP trunk → SIP trunk connects to external number → AI Agent speaks |
| **SIP trunk config** | Origination URI (SIP trunk sends calls to Agora)                                           | Termination URI + IP ACL (Agora sends calls to SIP trunk)                                    |
| **Console config**   | Import number → assign to Inbound agent                                                    | Import number → use in Campaign or Outbound agent                                            |

## Basic setup [#basic-setup]

The following steps are required for both inbound and outbound calling.

### Verify your SIP trunk phone number [#verify-your-sip-trunk-phone-number]

To confirm your phone number is ready for SIP trunk configuration:

1. Log in to [Twilio Console](https://console.twilio.com/).
2. Navigate to **Phone Numbers → Manage → Active Numbers**.
3. Check that the number you want to use is active and supports SIP Trunking.
4. If you do not have a number, select **Buy a number** and choose a number from the list.

### Create or select an Elastic SIP Trunk [#create-or-select-an-elastic-sip-trunk]

To set up a trunk that handles inbound and outbound calls:

1. Go to **Elastic SIP Trunking → Manage → Trunks** in Twilio Console.
2. Select **Create a new SIP Trunk** (or select an existing one).
3. Give it a descriptive name. For example, \`Production Trunk\`.

   ![](https://assets-docs.agora.io/images/conversational-ai/twilio/select-sip-trunk.png)

<CalloutContainer type="info">
  <CalloutTitle>
    Info
  </CalloutTitle>

  <CalloutDescription>
    You can use the same trunk for both inbound and outbound calling or create separate trunks for easier management. Agora recommends using separate trunks if you have different security requirements for inbound and outbound.
  </CalloutDescription>
</CalloutContainer>

### Assign the phone number to the Elastic SIP Trunk [#assign-the-phone-number-to-the-elastic-sip-trunk]

To link your phone number with the SIP trunk:

1. Go to **Phone Numbers → Manage → Active Numbers**.
2. Select the phone number.
3. Under **Voice Calling** settings, set the number to use your Elastic SIP Trunk.
4. Save changes.

### Check secure trunking setting [#check-secure-trunking-setting]

To determine which transport protocol to use when you import your number:

1. Open **SIP Trunk → General Settings**.
2. Locate **Secure Trunking**.
3. Check whether it is enabled or disabled:
   * **Enabled**: Choose **TLS** for the Transport Protocol.
   * **Disabled**: Choose **TCP** or **UDP** for the Transport Protocol.
4. Save any changes.

   ![](https://assets-docs.agora.io/images/conversational-ai/twilio/general-settings.png)

<CalloutContainer type="warning">
  <CalloutTitle>
    Caution
  </CalloutTitle>

  <CalloutDescription>
    The Transport Protocol setting you choose when importing your number must match your SIP trunk's Secure Trunking setting. A mismatch causes calls to fail silently.
  </CalloutDescription>
</CalloutContainer>

## Outbound calling setup [#outbound-calling-setup]

Complete the following steps to enable your agent to make outbound calls through your SIP trunk phone number.

### Configure the Termination URI [#configure-the-termination-uri]

To set up the domain that Agora will use to reach your SIP trunk:

1. In your SIP trunk, go to **Termination**.
2. Set a custom **Termination SIP URI**. For example: \`yourcompany.pstn.twilio.com\`.
3. This domain is required later as the **SIP Trunk Address** when you import the number.

   ![](https://assets-docs.agora.io/images/conversational-ai/twilio/termination-uri.png)

### Create an IP Access Control List (Whitelist) [#create-an-ip-access-control-list-whitelist]

Without correct IP whitelisting, your SIP trunk blocks Agora traffic. To allow Agora's traffic through Twilio, create an Access Control List (ACL) containing the Agora SIP outgoing IPs for your phone number's country code:

<Accordions>
  <Accordion title="+1 (United States)">
    \`\`\`
    49.51.250.59
    49.51.250.76
    \`\`\`
  </Accordion>

  <Accordion title="+52 (Mexico), +54 (Argentina), +55 (Brazil), +56 (Chile), +51 (Peru), +44 (United Kingdom), +33 (France), +49 (Germany), +39 (Italy), +34 (Spain), +61 (Australia), +64 (New Zealand)">
    \`\`\`
    43.157.157.7
    43.157.180.46
    43.157.154.150
    43.157.147.39
    43.157.160.149
    43.157.170.160
    43.157.176.50
    43.157.182.24
    43.157.150.207
    43.157.146.198
    43.157.186.243
    43.157.149.172
    \`\`\`
  </Accordion>

  <Accordion title="+82 (South Korea), +65 (Singapore), +81 (Japan), +91 (India), +886 (Taiwan), +27 (South Africa), +20 (Egypt), +254 (Kenya)">
    \`\`\`
    3.111.249.176
    15.207.132.164
    13.205.109.117
    13.127.230.35
    13.200.127.200
    13.205.242.117
    13.232.246.98
    13.235.159.216
    43.204.61.200
    52.66.173.52
    65.1.195.82
    65.1.38.21
    \`\`\`
  </Accordion>
</Accordions>

To create the ACL:

1. Go to **Elastic SIP Trunking → Manage → IP Access Control Lists**.
2. Select **+ Create new Access Control List**.
3. Give your ACL a descriptive name.
4. Add the Agora SIP outgoing IPs for your country code, listed above.
5. Save the Access Control List.

   ![](https://assets-docs.agora.io/images/conversational-ai/twilio/access-control-list.png)

   ![](https://assets-docs.agora.io/images/conversational-ai/twilio/access-list-configuration.png)

### Add IP Access Control List [#add-ip-access-control-list]

1. In your SIP trunk, go to **Termination → Authentication**.
2. Under **IP Access Control Lists**, select the authentication list you just created. If you do not see the list you created, access it by selecting **View all Authentication lists**.
3. Select **Save**.

   ![](https://assets-docs.agora.io/images/conversational-ai/twilio/ip-access-control-list.png)

   ![](https://assets-docs.agora.io/images/conversational-ai/twilio/authentication.png)

### Credential Lists (Optional) [#credential-lists-optional]

You can create username and password authentication if required.

* If you do not specify a credential list, you can leave the **SIP Trunk Username** and **SIP Trunk Password** fields blank when you import the number.
* If you configure a credential list, you must specify the same username and password in the **SIP Trunk Username** and **SIP Trunk Password** fields when you import the number.

To set up a credential list:

1. Under **Authentication**, find **Credential Lists**.
2. Use the \`+\` button to create a new list.
3. Give your list a descriptive name.
4. Specify a username and password.
5. Select **Save**.

### Import the outbound number [#import-the-outbound-number]

Once your SIP trunk is configured, import the number. See [Import a phone number](import) for step-by-step instructions. Use your Termination URI as the SIP Trunk Address and match the Transport Protocol to your Secure Trunking setting.

## Inbound calling setup [#inbound-calling-setup]

Complete the following steps to enable customers to call your agent through your SIP trunk phone number.

### Configure Origination URI [#configure-origination-uri]

1. In your SIP trunk, go to **Origination**.

2. Select **Add new Origination URI**.

3. Enter the Agora SIP Origination URI for your region:

   The Origination URI depends on the country code of your phone number. Select the URI for your region and enter it in your SIP trunk.

   * **United States**

     | Transport | URI                                  |
     | --------- | ------------------------------------ |
     | TLS       | \`sip:sbc-us-west-1.viblinx.com:5061\` |
     | TCP/UDP   | \`sip:sbc-us-west-1.viblinx.com:5060\` |

     **Supported country codes**: +1 (United States)

   * **Americas, Europe, Oceania, and Brazil**

     | Transport | URI                                  |
     | --------- | ------------------------------------ |
     | TLS       | \`sip:sbc-sa-east-1.viblinx.com:5061\` |
     | TCP/UDP   | \`sip:sbc-sa-east-1.viblinx.com:5060\` |

     **Supported country codes**: +52 (Mexico), +54 (Argentina), +55 (Brazil), +56 (Chile), +51 (Peru), +44 (United Kingdom), +33 (France), +49 (Germany), +39 (Italy), +34 (Spain), +61 (Australia), +64 (New Zealand)

   * **Asia-Pacific, India, and Africa**

     | Transport | URI                                 |
     | --------- | ----------------------------------- |
     | TLS       | \`sip:sbc-ap-south.viblinx.com:5061\` |
     | TCP/UDP   | \`sip:sbc-ap-south.viblinx.com:5060\` |

     **Supported country codes**: +82 (South Korea), +65 (Singapore), +81 (Japan), +91 (India), +886 (Taiwan), +27 (South Africa), +20 (Egypt), +254 (Kenya)

4. Set Priority to \`10\` and Weight to \`10\` (default).

5. Select **Add**.

### Configure number routing [#configure-number-routing]

1. Go to **Phone Numbers → Manage → Active numbers**.
2. Select the number you want to use for inbound calling.
3. Under **Voice Configuration → Configure with**, select **SIP Trunk**.
4. Choose the trunk you created in [Basic setup](#basic-setup).
5. Select **Save configuration**.

### Import the inbound number [#import-the-inbound-number]

Once SIP trunk origination and routing is configured, import the number and associate it with an agent to answer inbound calls. See [Handle inbound calls](inbound) for step-by-step instructions.

## Configuration checklist [#configuration-checklist]

Before testing inbound and outbound calls, make sure you address each item in the checklist:

| Item                                               | Inbound            | Outbound             |
| -------------------------------------------------- | ------------------ | -------------------- |
| Assign phone number to SIP trunk                   | Required           | Required             |
| SIP Trunk Address                                  | Required           | Required             |
| Configure Origination URI (SIP trunk → Agora)      | Required           | Not needed           |
| IP Access Control List                             | Not needed         | Required             |
| Credential List                                    | Not needed         | Optional             |
| Secure Trunking setting matches Transport Protocol | Required           | Required             |
| Import number                                      | Required           | Required             |
| Assign number                                      | Assign to an agent | Assign to a campaign |

## Troubleshooting [#troubleshooting]

If you encounter issues with your SIP trunk setup, use the following table to identify and resolve common problems.

| Symptom                              | Cause                                | Solution                                                                                |
| ------------------------------------ | ------------------------------------ | --------------------------------------------------------------------------------------- |
| Inbound calls don't reach agent      | Origination URI not set or incorrect | Verify the Origination URI in your SIP trunk matches what's shown during import         |
| Outbound calls rejected by SIP trunk | IP ACL missing or incomplete         | Add all Agora SIP IPs to the SIP trunk IP Access Control List                           |
| Calls connect but no audio           | Transport mismatch (TLS vs TCP/UDP)  | Match the Secure Trunking setting in your SIP trunk with the Transport Protocol setting |
| One-way audio                        | Firewall or NAT issue                | Ensure Agora SIP IPs are whitelisted on both sides                                      |
| "403 Forbidden" in SIP trunk logs    | Authentication failed                | Check Credential List or IP ACL configuration                                           |
| Call drops after \\~30 seconds        | SIP session timer timeout            | Check SIP trunk timeout settings                                                        |

## Next steps [#next-steps]

* [Import a phone number](import): Import your configured SIP trunk number
* [Set up a campaign](campaign): Use your imported number to create an outbound calling campaign
* [Handle inbound calls](inbound): Associate a number with an agent to answer inbound calls
* [Publish your agent](deploy-agent): Publish an agent to use with your imported number
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This guide walks you through configuring an Elastic SIP Trunk for both inbound calls (customers call your AI agent) and outbound calls (your AI agent calls customers)."
  }, {
    heading: "prerequisites",
    content: "Before you begin, ensure that you have:"
  }, {
    heading: "prerequisites",
    content: "An active SIP trunk account."
  }, {
    heading: "prerequisites",
    content: "A phone number that supports SIP Trunking."
  }, {
    heading: "understand-the-setup",
    content: "Both inbound and outbound calls are supported through Elastic SIP Trunk, but each direction requires different configuration in your SIP trunk and in Agora Console. The table below summarizes the key differences."
  }, {
    heading: "understand-the-setup",
    content: "Inbound"
  }, {
    heading: "understand-the-setup",
    content: "Outbound"
  }, {
    heading: "understand-the-setup",
    content: "**Use case**"
  }, {
    heading: "understand-the-setup",
    content: "Customer support hotline, IVR replacement, appointment booking"
  }, {
    heading: "understand-the-setup",
    content: "Outbound campaigns, appointment reminders, follow-up calls"
  }, {
    heading: "understand-the-setup",
    content: "**Call direction**"
  }, {
    heading: "understand-the-setup",
    content: "External caller dials your SIP trunk number → SIP trunk routes to Agora → AI Agent answers"
  }, {
    heading: "understand-the-setup",
    content: "Agora initiates call via SIP trunk → SIP trunk connects to external number → AI Agent speaks"
  }, {
    heading: "understand-the-setup",
    content: "**SIP trunk config**"
  }, {
    heading: "understand-the-setup",
    content: "Origination URI (SIP trunk sends calls to Agora)"
  }, {
    heading: "understand-the-setup",
    content: "Termination URI + IP ACL (Agora sends calls to SIP trunk)"
  }, {
    heading: "understand-the-setup",
    content: "**Console config**"
  }, {
    heading: "understand-the-setup",
    content: "Import number → assign to Inbound agent"
  }, {
    heading: "understand-the-setup",
    content: "Import number → use in Campaign or Outbound agent"
  }, {
    heading: "basic-setup",
    content: "The following steps are required for both inbound and outbound calling."
  }, {
    heading: "verify-your-sip-trunk-phone-number",
    content: "To confirm your phone number is ready for SIP trunk configuration:"
  }, {
    heading: "verify-your-sip-trunk-phone-number",
    content: "Log in to Twilio Console."
  }, {
    heading: "verify-your-sip-trunk-phone-number",
    content: "Navigate to **Phone Numbers → Manage → Active Numbers**."
  }, {
    heading: "verify-your-sip-trunk-phone-number",
    content: "Check that the number you want to use is active and supports SIP Trunking."
  }, {
    heading: "verify-your-sip-trunk-phone-number",
    content: "If you do not have a number, select **Buy a number** and choose a number from the list."
  }, {
    heading: "create-or-select-an-elastic-sip-trunk",
    content: "To set up a trunk that handles inbound and outbound calls:"
  }, {
    heading: "create-or-select-an-elastic-sip-trunk",
    content: "Go to **Elastic SIP Trunking → Manage → Trunks** in Twilio Console."
  }, {
    heading: "create-or-select-an-elastic-sip-trunk",
    content: "Select **Create a new SIP Trunk** (or select an existing one)."
  }, {
    heading: "create-or-select-an-elastic-sip-trunk",
    content: "Give it a descriptive name. For example, `Production Trunk`."
  }, {
    heading: "create-or-select-an-elastic-sip-trunk",
    content: "You can use the same trunk for both inbound and outbound calling or create separate trunks for easier management. Agora recommends using separate trunks if you have different security requirements for inbound and outbound."
  }, {
    heading: "assign-the-phone-number-to-the-elastic-sip-trunk",
    content: "To link your phone number with the SIP trunk:"
  }, {
    heading: "assign-the-phone-number-to-the-elastic-sip-trunk",
    content: "Go to **Phone Numbers → Manage → Active Numbers**."
  }, {
    heading: "assign-the-phone-number-to-the-elastic-sip-trunk",
    content: "Select the phone number."
  }, {
    heading: "assign-the-phone-number-to-the-elastic-sip-trunk",
    content: "Under **Voice Calling** settings, set the number to use your Elastic SIP Trunk."
  }, {
    heading: "assign-the-phone-number-to-the-elastic-sip-trunk",
    content: "Save changes."
  }, {
    heading: "check-secure-trunking-setting",
    content: "To determine which transport protocol to use when you import your number:"
  }, {
    heading: "check-secure-trunking-setting",
    content: "Open **SIP Trunk → General Settings**."
  }, {
    heading: "check-secure-trunking-setting",
    content: "Locate **Secure Trunking**."
  }, {
    heading: "check-secure-trunking-setting",
    content: "Check whether it is enabled or disabled:"
  }, {
    heading: "check-secure-trunking-setting",
    content: "**Enabled**: Choose **TLS** for the Transport Protocol."
  }, {
    heading: "check-secure-trunking-setting",
    content: "**Disabled**: Choose **TCP** or **UDP** for the Transport Protocol."
  }, {
    heading: "check-secure-trunking-setting",
    content: "Save any changes."
  }, {
    heading: "check-secure-trunking-setting",
    content: "The Transport Protocol setting you choose when importing your number must match your SIP trunk's Secure Trunking setting. A mismatch causes calls to fail silently."
  }, {
    heading: "outbound-calling-setup",
    content: "Complete the following steps to enable your agent to make outbound calls through your SIP trunk phone number."
  }, {
    heading: "configure-the-termination-uri",
    content: "To set up the domain that Agora will use to reach your SIP trunk:"
  }, {
    heading: "configure-the-termination-uri",
    content: "In your SIP trunk, go to **Termination**."
  }, {
    heading: "configure-the-termination-uri",
    content: "Set a custom **Termination SIP URI**. For example: `yourcompany.pstn.twilio.com`."
  }, {
    heading: "configure-the-termination-uri",
    content: "This domain is required later as the **SIP Trunk Address** when you import the number."
  }, {
    heading: "create-an-ip-access-control-list-whitelist",
    content: "Without correct IP whitelisting, your SIP trunk blocks Agora traffic. To allow Agora's traffic through Twilio, create an Access Control List (ACL) containing the Agora SIP outgoing IPs for your phone number's country code:"
  }, {
    heading: "create-an-ip-access-control-list-whitelist",
    content: "To create the ACL:"
  }, {
    heading: "create-an-ip-access-control-list-whitelist",
    content: "Go to **Elastic SIP Trunking → Manage → IP Access Control Lists**."
  }, {
    heading: "create-an-ip-access-control-list-whitelist",
    content: "Select **+ Create new Access Control List**."
  }, {
    heading: "create-an-ip-access-control-list-whitelist",
    content: "Give your ACL a descriptive name."
  }, {
    heading: "create-an-ip-access-control-list-whitelist",
    content: "Add the Agora SIP outgoing IPs for your country code, listed above."
  }, {
    heading: "create-an-ip-access-control-list-whitelist",
    content: "Save the Access Control List."
  }, {
    heading: "add-ip-access-control-list",
    content: "In your SIP trunk, go to **Termination → Authentication**."
  }, {
    heading: "add-ip-access-control-list",
    content: "Under **IP Access Control Lists**, select the authentication list you just created. If you do not see the list you created, access it by selecting **View all Authentication lists**."
  }, {
    heading: "add-ip-access-control-list",
    content: "Select **Save**."
  }, {
    heading: "credential-lists-optional",
    content: "You can create username and password authentication if required."
  }, {
    heading: "credential-lists-optional",
    content: "If you do not specify a credential list, you can leave the **SIP Trunk Username** and **SIP Trunk Password** fields blank when you import the number."
  }, {
    heading: "credential-lists-optional",
    content: "If you configure a credential list, you must specify the same username and password in the **SIP Trunk Username** and **SIP Trunk Password** fields when you import the number."
  }, {
    heading: "credential-lists-optional",
    content: "To set up a credential list:"
  }, {
    heading: "credential-lists-optional",
    content: "Under **Authentication**, find **Credential Lists**."
  }, {
    heading: "credential-lists-optional",
    content: "Use the `+` button to create a new list."
  }, {
    heading: "credential-lists-optional",
    content: "Give your list a descriptive name."
  }, {
    heading: "credential-lists-optional",
    content: "Specify a username and password."
  }, {
    heading: "credential-lists-optional",
    content: "Select **Save**."
  }, {
    heading: "import-the-outbound-number",
    content: "Once your SIP trunk is configured, import the number. See Import a phone number for step-by-step instructions. Use your Termination URI as the SIP Trunk Address and match the Transport Protocol to your Secure Trunking setting."
  }, {
    heading: "inbound-calling-setup",
    content: "Complete the following steps to enable customers to call your agent through your SIP trunk phone number."
  }, {
    heading: "configure-origination-uri",
    content: "In your SIP trunk, go to **Origination**."
  }, {
    heading: "configure-origination-uri",
    content: "Select **Add new Origination URI**."
  }, {
    heading: "configure-origination-uri",
    content: "Enter the Agora SIP Origination URI for your region:"
  }, {
    heading: "configure-origination-uri",
    content: "The Origination URI depends on the country code of your phone number. Select the URI for your region and enter it in your SIP trunk."
  }, {
    heading: "configure-origination-uri",
    content: "**United States**"
  }, {
    heading: "configure-origination-uri",
    content: "Transport"
  }, {
    heading: "configure-origination-uri",
    content: "URI"
  }, {
    heading: "configure-origination-uri",
    content: "TLS"
  }, {
    heading: "configure-origination-uri",
    content: "`sip:sbc-us-west-1.viblinx.com:5061`"
  }, {
    heading: "configure-origination-uri",
    content: "TCP/UDP"
  }, {
    heading: "configure-origination-uri",
    content: "`sip:sbc-us-west-1.viblinx.com:5060`"
  }, {
    heading: "configure-origination-uri",
    content: "**Supported country codes**: +1 (United States)"
  }, {
    heading: "configure-origination-uri",
    content: "**Americas, Europe, Oceania, and Brazil**"
  }, {
    heading: "configure-origination-uri",
    content: "Transport"
  }, {
    heading: "configure-origination-uri",
    content: "URI"
  }, {
    heading: "configure-origination-uri",
    content: "TLS"
  }, {
    heading: "configure-origination-uri",
    content: "`sip:sbc-sa-east-1.viblinx.com:5061`"
  }, {
    heading: "configure-origination-uri",
    content: "TCP/UDP"
  }, {
    heading: "configure-origination-uri",
    content: "`sip:sbc-sa-east-1.viblinx.com:5060`"
  }, {
    heading: "configure-origination-uri",
    content: "**Supported country codes**: +52 (Mexico), +54 (Argentina), +55 (Brazil), +56 (Chile), +51 (Peru), +44 (United Kingdom), +33 (France), +49 (Germany), +39 (Italy), +34 (Spain), +61 (Australia), +64 (New Zealand)"
  }, {
    heading: "configure-origination-uri",
    content: "**Asia-Pacific, India, and Africa**"
  }, {
    heading: "configure-origination-uri",
    content: "Transport"
  }, {
    heading: "configure-origination-uri",
    content: "URI"
  }, {
    heading: "configure-origination-uri",
    content: "TLS"
  }, {
    heading: "configure-origination-uri",
    content: "`sip:sbc-ap-south.viblinx.com:5061`"
  }, {
    heading: "configure-origination-uri",
    content: "TCP/UDP"
  }, {
    heading: "configure-origination-uri",
    content: "`sip:sbc-ap-south.viblinx.com:5060`"
  }, {
    heading: "configure-origination-uri",
    content: "**Supported country codes**: +82 (South Korea), +65 (Singapore), +81 (Japan), +91 (India), +886 (Taiwan), +27 (South Africa), +20 (Egypt), +254 (Kenya)"
  }, {
    heading: "configure-origination-uri",
    content: "Set Priority to `10` and Weight to `10` (default)."
  }, {
    heading: "configure-origination-uri",
    content: "Select **Add**."
  }, {
    heading: "configure-number-routing",
    content: "Go to **Phone Numbers → Manage → Active numbers**."
  }, {
    heading: "configure-number-routing",
    content: "Select the number you want to use for inbound calling."
  }, {
    heading: "configure-number-routing",
    content: "Under **Voice Configuration → Configure with**, select **SIP Trunk**."
  }, {
    heading: "configure-number-routing",
    content: "Choose the trunk you created in Basic setup."
  }, {
    heading: "configure-number-routing",
    content: "Select **Save configuration**."
  }, {
    heading: "import-the-inbound-number",
    content: "Once SIP trunk origination and routing is configured, import the number and associate it with an agent to answer inbound calls. See Handle inbound calls for step-by-step instructions."
  }, {
    heading: "configuration-checklist",
    content: "Before testing inbound and outbound calls, make sure you address each item in the checklist:"
  }, {
    heading: "configuration-checklist",
    content: "Item"
  }, {
    heading: "configuration-checklist",
    content: "Inbound"
  }, {
    heading: "configuration-checklist",
    content: "Outbound"
  }, {
    heading: "configuration-checklist",
    content: "Assign phone number to SIP trunk"
  }, {
    heading: "configuration-checklist",
    content: "Required"
  }, {
    heading: "configuration-checklist",
    content: "Required"
  }, {
    heading: "configuration-checklist",
    content: "SIP Trunk Address"
  }, {
    heading: "configuration-checklist",
    content: "Required"
  }, {
    heading: "configuration-checklist",
    content: "Required"
  }, {
    heading: "configuration-checklist",
    content: "Configure Origination URI (SIP trunk → Agora)"
  }, {
    heading: "configuration-checklist",
    content: "Required"
  }, {
    heading: "configuration-checklist",
    content: "Not needed"
  }, {
    heading: "configuration-checklist",
    content: "IP Access Control List"
  }, {
    heading: "configuration-checklist",
    content: "Not needed"
  }, {
    heading: "configuration-checklist",
    content: "Required"
  }, {
    heading: "configuration-checklist",
    content: "Credential List"
  }, {
    heading: "configuration-checklist",
    content: "Not needed"
  }, {
    heading: "configuration-checklist",
    content: "Optional"
  }, {
    heading: "configuration-checklist",
    content: "Secure Trunking setting matches Transport Protocol"
  }, {
    heading: "configuration-checklist",
    content: "Required"
  }, {
    heading: "configuration-checklist",
    content: "Required"
  }, {
    heading: "configuration-checklist",
    content: "Import number"
  }, {
    heading: "configuration-checklist",
    content: "Required"
  }, {
    heading: "configuration-checklist",
    content: "Required"
  }, {
    heading: "configuration-checklist",
    content: "Assign number"
  }, {
    heading: "configuration-checklist",
    content: "Assign to an agent"
  }, {
    heading: "configuration-checklist",
    content: "Assign to a campaign"
  }, {
    heading: "troubleshooting",
    content: "If you encounter issues with your SIP trunk setup, use the following table to identify and resolve common problems."
  }, {
    heading: "troubleshooting",
    content: "Symptom"
  }, {
    heading: "troubleshooting",
    content: "Cause"
  }, {
    heading: "troubleshooting",
    content: "Solution"
  }, {
    heading: "troubleshooting",
    content: "Inbound calls don't reach agent"
  }, {
    heading: "troubleshooting",
    content: "Origination URI not set or incorrect"
  }, {
    heading: "troubleshooting",
    content: "Verify the Origination URI in your SIP trunk matches what's shown during import"
  }, {
    heading: "troubleshooting",
    content: "Outbound calls rejected by SIP trunk"
  }, {
    heading: "troubleshooting",
    content: "IP ACL missing or incomplete"
  }, {
    heading: "troubleshooting",
    content: "Add all Agora SIP IPs to the SIP trunk IP Access Control List"
  }, {
    heading: "troubleshooting",
    content: "Calls connect but no audio"
  }, {
    heading: "troubleshooting",
    content: "Transport mismatch (TLS vs TCP/UDP)"
  }, {
    heading: "troubleshooting",
    content: "Match the Secure Trunking setting in your SIP trunk with the Transport Protocol setting"
  }, {
    heading: "troubleshooting",
    content: "One-way audio"
  }, {
    heading: "troubleshooting",
    content: "Firewall or NAT issue"
  }, {
    heading: "troubleshooting",
    content: "Ensure Agora SIP IPs are whitelisted on both sides"
  }, {
    heading: "troubleshooting",
    content: '"403 Forbidden" in SIP trunk logs'
  }, {
    heading: "troubleshooting",
    content: "Authentication failed"
  }, {
    heading: "troubleshooting",
    content: "Check Credential List or IP ACL configuration"
  }, {
    heading: "troubleshooting",
    content: "Call drops after \\~30 seconds"
  }, {
    heading: "troubleshooting",
    content: "SIP session timer timeout"
  }, {
    heading: "troubleshooting",
    content: "Check SIP trunk timeout settings"
  }, {
    heading: "next-steps",
    content: "Import a phone number: Import your configured SIP trunk number"
  }, {
    heading: "next-steps",
    content: "Set up a campaign: Use your imported number to create an outbound calling campaign"
  }, {
    heading: "next-steps",
    content: "Handle inbound calls: Associate a number with an agent to answer inbound calls"
  }, {
    heading: "next-steps",
    content: "Publish your agent: Publish an agent to use with your imported number"
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "understand-the-setup",
    content: "Understand the setup"
  }, {
    id: "basic-setup",
    content: "Basic setup"
  }, {
    id: "verify-your-sip-trunk-phone-number",
    content: "Verify your SIP trunk phone number"
  }, {
    id: "create-or-select-an-elastic-sip-trunk",
    content: "Create or select an Elastic SIP Trunk"
  }, {
    id: "assign-the-phone-number-to-the-elastic-sip-trunk",
    content: "Assign the phone number to the Elastic SIP Trunk"
  }, {
    id: "check-secure-trunking-setting",
    content: "Check secure trunking setting"
  }, {
    id: "outbound-calling-setup",
    content: "Outbound calling setup"
  }, {
    id: "configure-the-termination-uri",
    content: "Configure the Termination URI"
  }, {
    id: "create-an-ip-access-control-list-whitelist",
    content: "Create an IP Access Control List (Whitelist)"
  }, {
    id: "add-ip-access-control-list",
    content: "Add IP Access Control List"
  }, {
    id: "credential-lists-optional",
    content: "Credential Lists (Optional)"
  }, {
    id: "import-the-outbound-number",
    content: "Import the outbound number"
  }, {
    id: "inbound-calling-setup",
    content: "Inbound calling setup"
  }, {
    id: "configure-origination-uri",
    content: "Configure Origination URI"
  }, {
    id: "configure-number-routing",
    content: "Configure number routing"
  }, {
    id: "import-the-inbound-number",
    content: "Import the inbound number"
  }, {
    id: "configuration-checklist",
    content: "Configuration checklist"
  }, {
    id: "troubleshooting",
    content: "Troubleshooting"
  }, {
    id: "next-steps",
    content: "Next steps"
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
  url: "#understand-the-setup",
  title: _jsx(_Fragment, {
    children: "Understand the setup"
  })
}, {
  depth: 2,
  url: "#basic-setup",
  title: _jsx(_Fragment, {
    children: "Basic setup"
  })
}, {
  depth: 3,
  url: "#verify-your-sip-trunk-phone-number",
  title: _jsx(_Fragment, {
    children: "Verify your SIP trunk phone number"
  })
}, {
  depth: 3,
  url: "#create-or-select-an-elastic-sip-trunk",
  title: _jsx(_Fragment, {
    children: "Create or select an Elastic SIP Trunk"
  })
}, {
  depth: 3,
  url: "#assign-the-phone-number-to-the-elastic-sip-trunk",
  title: _jsx(_Fragment, {
    children: "Assign the phone number to the Elastic SIP Trunk"
  })
}, {
  depth: 3,
  url: "#check-secure-trunking-setting",
  title: _jsx(_Fragment, {
    children: "Check secure trunking setting"
  })
}, {
  depth: 2,
  url: "#outbound-calling-setup",
  title: _jsx(_Fragment, {
    children: "Outbound calling setup"
  })
}, {
  depth: 3,
  url: "#configure-the-termination-uri",
  title: _jsx(_Fragment, {
    children: "Configure the Termination URI"
  })
}, {
  depth: 3,
  url: "#create-an-ip-access-control-list-whitelist",
  title: _jsx(_Fragment, {
    children: "Create an IP Access Control List (Whitelist)"
  })
}, {
  depth: 3,
  url: "#add-ip-access-control-list",
  title: _jsx(_Fragment, {
    children: "Add IP Access Control List"
  })
}, {
  depth: 3,
  url: "#credential-lists-optional",
  title: _jsx(_Fragment, {
    children: "Credential Lists (Optional)"
  })
}, {
  depth: 3,
  url: "#import-the-outbound-number",
  title: _jsx(_Fragment, {
    children: "Import the outbound number"
  })
}, {
  depth: 2,
  url: "#inbound-calling-setup",
  title: _jsx(_Fragment, {
    children: "Inbound calling setup"
  })
}, {
  depth: 3,
  url: "#configure-origination-uri",
  title: _jsx(_Fragment, {
    children: "Configure Origination URI"
  })
}, {
  depth: 3,
  url: "#configure-number-routing",
  title: _jsx(_Fragment, {
    children: "Configure number routing"
  })
}, {
  depth: 3,
  url: "#import-the-inbound-number",
  title: _jsx(_Fragment, {
    children: "Import the inbound number"
  })
}, {
  depth: 2,
  url: "#configuration-checklist",
  title: _jsx(_Fragment, {
    children: "Configuration checklist"
  })
}, {
  depth: 2,
  url: "#troubleshooting",
  title: _jsx(_Fragment, {
    children: "Troubleshooting"
  })
}, {
  depth: 2,
  url: "#next-steps",
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
  }, { Accordion, Accordions, CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!Accordion)
    _missingMdxReference("Accordion", true);
  if (!Accordions)
    _missingMdxReference("Accordions", true);
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This guide walks you through configuring an Elastic SIP Trunk for both inbound calls (customers call your AI agent) and outbound calls (your AI agent calls customers)."
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "Before you begin, ensure that you have:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "An active SIP trunk account."
      }), `
`, _jsx(_components.li, {
        children: "A phone number that supports SIP Trunking."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-setup",
      children: "Understand the setup"
    }), `
`, _jsx(_components.p, {
      children: "Both inbound and outbound calls are supported through Elastic SIP Trunk, but each direction requires different configuration in your SIP trunk and in Agora Console. The table below summarizes the key differences."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {}), _jsx(_components.th, {
            children: "Inbound"
          }), _jsx(_components.th, {
            children: "Outbound"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Use case"
            })
          }), _jsx(_components.td, {
            children: "Customer support hotline, IVR replacement, appointment booking"
          }), _jsx(_components.td, {
            children: "Outbound campaigns, appointment reminders, follow-up calls"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Call direction"
            })
          }), _jsx(_components.td, {
            children: "External caller dials your SIP trunk number → SIP trunk routes to Agora → AI Agent answers"
          }), _jsx(_components.td, {
            children: "Agora initiates call via SIP trunk → SIP trunk connects to external number → AI Agent speaks"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "SIP trunk config"
            })
          }), _jsx(_components.td, {
            children: "Origination URI (SIP trunk sends calls to Agora)"
          }), _jsx(_components.td, {
            children: "Termination URI + IP ACL (Agora sends calls to SIP trunk)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Console config"
            })
          }), _jsx(_components.td, {
            children: "Import number → assign to Inbound agent"
          }), _jsx(_components.td, {
            children: "Import number → use in Campaign or Outbound agent"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "basic-setup",
      children: "Basic setup"
    }), `
`, _jsx(_components.p, {
      children: "The following steps are required for both inbound and outbound calling."
    }), `
`, _jsx(_components.h3, {
      id: "verify-your-sip-trunk-phone-number",
      children: "Verify your SIP trunk phone number"
    }), `
`, _jsx(_components.p, {
      children: "To confirm your phone number is ready for SIP trunk configuration:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Log in to ", _jsx(_components.a, {
          href: "https://console.twilio.com/",
          children: "Twilio Console"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Navigate to ", _jsx(_components.strong, {
          children: "Phone Numbers → Manage → Active Numbers"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Check that the number you want to use is active and supports SIP Trunking."
      }), `
`, _jsxs(_components.li, {
        children: ["If you do not have a number, select ", _jsx(_components.strong, {
          children: "Buy a number"
        }), " and choose a number from the list."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "create-or-select-an-elastic-sip-trunk",
      children: "Create or select an Elastic SIP Trunk"
    }), `
`, _jsx(_components.p, {
      children: "To set up a trunk that handles inbound and outbound calls:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Go to ", _jsx(_components.strong, {
            children: "Elastic SIP Trunking → Manage → Trunks"
          }), " in Twilio Console."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Select ", _jsx(_components.strong, {
            children: "Create a new SIP Trunk"
          }), " (or select an existing one)."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Give it a descriptive name. For example, ", _jsx(_components.code, {
            children: "Production Trunk"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/conversational-ai/twilio/select-sip-trunk.png",
            alt: ""
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Info"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "You can use the same trunk for both inbound and outbound calling or create separate trunks for easier management. Agora recommends using separate trunks if you have different security requirements for inbound and outbound."
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "assign-the-phone-number-to-the-elastic-sip-trunk",
      children: "Assign the phone number to the Elastic SIP Trunk"
    }), `
`, _jsx(_components.p, {
      children: "To link your phone number with the SIP trunk:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Go to ", _jsx(_components.strong, {
          children: "Phone Numbers → Manage → Active Numbers"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Select the phone number."
      }), `
`, _jsxs(_components.li, {
        children: ["Under ", _jsx(_components.strong, {
          children: "Voice Calling"
        }), " settings, set the number to use your Elastic SIP Trunk."]
      }), `
`, _jsx(_components.li, {
        children: "Save changes."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "check-secure-trunking-setting",
      children: "Check secure trunking setting"
    }), `
`, _jsx(_components.p, {
      children: "To determine which transport protocol to use when you import your number:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Open ", _jsx(_components.strong, {
            children: "SIP Trunk → General Settings"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Locate ", _jsx(_components.strong, {
            children: "Secure Trunking"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Check whether it is enabled or disabled:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Enabled"
            }), ": Choose ", _jsx(_components.strong, {
              children: "TLS"
            }), " for the Transport Protocol."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Disabled"
            }), ": Choose ", _jsx(_components.strong, {
              children: "TCP"
            }), " or ", _jsx(_components.strong, {
              children: "UDP"
            }), " for the Transport Protocol."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Save any changes."
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/conversational-ai/twilio/general-settings.png",
            alt: ""
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "warning",
      children: [_jsx(CalloutTitle, {
        children: "Caution"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "The Transport Protocol setting you choose when importing your number must match your SIP trunk's Secure Trunking setting. A mismatch causes calls to fail silently."
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "outbound-calling-setup",
      children: "Outbound calling setup"
    }), `
`, _jsx(_components.p, {
      children: "Complete the following steps to enable your agent to make outbound calls through your SIP trunk phone number."
    }), `
`, _jsx(_components.h3, {
      id: "configure-the-termination-uri",
      children: "Configure the Termination URI"
    }), `
`, _jsx(_components.p, {
      children: "To set up the domain that Agora will use to reach your SIP trunk:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In your SIP trunk, go to ", _jsx(_components.strong, {
            children: "Termination"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Set a custom ", _jsx(_components.strong, {
            children: "Termination SIP URI"
          }), ". For example: ", _jsx(_components.code, {
            children: "yourcompany.pstn.twilio.com"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["This domain is required later as the ", _jsx(_components.strong, {
            children: "SIP Trunk Address"
          }), " when you import the number."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/conversational-ai/twilio/termination-uri.png",
            alt: ""
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "create-an-ip-access-control-list-whitelist",
      children: "Create an IP Access Control List (Whitelist)"
    }), `
`, _jsx(_components.p, {
      children: "Without correct IP whitelisting, your SIP trunk blocks Agora traffic. To allow Agora's traffic through Twilio, create an Access Control List (ACL) containing the Agora SIP outgoing IPs for your phone number's country code:"
    }), `
`, _jsxs(Accordions, {
      children: [_jsx(Accordion, {
        title: "+1 (United States)",
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
                  children: "49.51.250.59"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  children: "49.51.250.76"
                })
              })]
            })
          })
        })
      }), _jsx(Accordion, {
        title: "+52 (Mexico), +54 (Argentina), +55 (Brazil), +56 (Chile), +51 (Peru), +44 (United Kingdom), +33 (France), +49 (Germany), +39 (Italy), +34 (Spain), +61 (Australia), +64 (New Zealand)",
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
                  children: "43.157.157.7"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  children: "43.157.180.46"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  children: "43.157.154.150"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  children: "43.157.147.39"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  children: "43.157.160.149"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  children: "43.157.170.160"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  children: "43.157.176.50"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  children: "43.157.182.24"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  children: "43.157.150.207"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  children: "43.157.146.198"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  children: "43.157.186.243"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  children: "43.157.149.172"
                })
              })]
            })
          })
        })
      }), _jsx(Accordion, {
        title: "+82 (South Korea), +65 (Singapore), +81 (Japan), +91 (India), +886 (Taiwan), +27 (South Africa), +20 (Egypt), +254 (Kenya)",
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
                  children: "3.111.249.176"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  children: "15.207.132.164"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  children: "13.205.109.117"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  children: "13.127.230.35"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  children: "13.200.127.200"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  children: "13.205.242.117"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  children: "13.232.246.98"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  children: "13.235.159.216"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  children: "43.204.61.200"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  children: "52.66.173.52"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  children: "65.1.195.82"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  children: "65.1.38.21"
                })
              })]
            })
          })
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "To create the ACL:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Go to ", _jsx(_components.strong, {
            children: "Elastic SIP Trunking → Manage → IP Access Control Lists"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Select ", _jsx(_components.strong, {
            children: "+ Create new Access Control List"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Give your ACL a descriptive name."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Add the Agora SIP outgoing IPs for your country code, listed above."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Save the Access Control List."
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/conversational-ai/twilio/access-control-list.png",
            alt: ""
          })
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/conversational-ai/twilio/access-list-configuration.png",
            alt: ""
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "add-ip-access-control-list",
      children: "Add IP Access Control List"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In your SIP trunk, go to ", _jsx(_components.strong, {
            children: "Termination → Authentication"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Under ", _jsx(_components.strong, {
            children: "IP Access Control Lists"
          }), ", select the authentication list you just created. If you do not see the list you created, access it by selecting ", _jsx(_components.strong, {
            children: "View all Authentication lists"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Select ", _jsx(_components.strong, {
            children: "Save"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/conversational-ai/twilio/ip-access-control-list.png",
            alt: ""
          })
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/conversational-ai/twilio/authentication.png",
            alt: ""
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "credential-lists-optional",
      children: "Credential Lists (Optional)"
    }), `
`, _jsx(_components.p, {
      children: "You can create username and password authentication if required."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["If you do not specify a credential list, you can leave the ", _jsx(_components.strong, {
          children: "SIP Trunk Username"
        }), " and ", _jsx(_components.strong, {
          children: "SIP Trunk Password"
        }), " fields blank when you import the number."]
      }), `
`, _jsxs(_components.li, {
        children: ["If you configure a credential list, you must specify the same username and password in the ", _jsx(_components.strong, {
          children: "SIP Trunk Username"
        }), " and ", _jsx(_components.strong, {
          children: "SIP Trunk Password"
        }), " fields when you import the number."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "To set up a credential list:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Under ", _jsx(_components.strong, {
          children: "Authentication"
        }), ", find ", _jsx(_components.strong, {
          children: "Credential Lists"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Use the ", _jsx(_components.code, {
          children: "+"
        }), " button to create a new list."]
      }), `
`, _jsx(_components.li, {
        children: "Give your list a descriptive name."
      }), `
`, _jsx(_components.li, {
        children: "Specify a username and password."
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "Save"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "import-the-outbound-number",
      children: "Import the outbound number"
    }), `
`, _jsxs(_components.p, {
      children: ["Once your SIP trunk is configured, import the number. See ", _jsx(_components.a, {
        href: "import",
        children: "Import a phone number"
      }), " for step-by-step instructions. Use your Termination URI as the SIP Trunk Address and match the Transport Protocol to your Secure Trunking setting."]
    }), `
`, _jsx(_components.h2, {
      id: "inbound-calling-setup",
      children: "Inbound calling setup"
    }), `
`, _jsx(_components.p, {
      children: "Complete the following steps to enable customers to call your agent through your SIP trunk phone number."
    }), `
`, _jsx(_components.h3, {
      id: "configure-origination-uri",
      children: "Configure Origination URI"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In your SIP trunk, go to ", _jsx(_components.strong, {
            children: "Origination"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Select ", _jsx(_components.strong, {
            children: "Add new Origination URI"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Enter the Agora SIP Origination URI for your region:"
        }), `
`, _jsx(_components.p, {
          children: "The Origination URI depends on the country code of your phone number. Select the URI for your region and enter it in your SIP trunk."
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "United States"
              })
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    children: "Transport"
                  }), _jsx(_components.th, {
                    children: "URI"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: "TLS"
                  }), _jsx(_components.td, {
                    children: _jsx(_components.code, {
                      children: "sip:sbc-us-west-1.viblinx.com:5061"
                    })
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: "TCP/UDP"
                  }), _jsx(_components.td, {
                    children: _jsx(_components.code, {
                      children: "sip:sbc-us-west-1.viblinx.com:5060"
                    })
                  })]
                })]
              })]
            }), `
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Supported country codes"
              }), ": +1 (United States)"]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Americas, Europe, Oceania, and Brazil"
              })
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    children: "Transport"
                  }), _jsx(_components.th, {
                    children: "URI"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: "TLS"
                  }), _jsx(_components.td, {
                    children: _jsx(_components.code, {
                      children: "sip:sbc-sa-east-1.viblinx.com:5061"
                    })
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: "TCP/UDP"
                  }), _jsx(_components.td, {
                    children: _jsx(_components.code, {
                      children: "sip:sbc-sa-east-1.viblinx.com:5060"
                    })
                  })]
                })]
              })]
            }), `
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Supported country codes"
              }), ": +52 (Mexico), +54 (Argentina), +55 (Brazil), +56 (Chile), +51 (Peru), +44 (United Kingdom), +33 (France), +49 (Germany), +39 (Italy), +34 (Spain), +61 (Australia), +64 (New Zealand)"]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Asia-Pacific, India, and Africa"
              })
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    children: "Transport"
                  }), _jsx(_components.th, {
                    children: "URI"
                  })]
                })
              }), _jsxs(_components.tbody, {
                children: [_jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: "TLS"
                  }), _jsx(_components.td, {
                    children: _jsx(_components.code, {
                      children: "sip:sbc-ap-south.viblinx.com:5061"
                    })
                  })]
                }), _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: "TCP/UDP"
                  }), _jsx(_components.td, {
                    children: _jsx(_components.code, {
                      children: "sip:sbc-ap-south.viblinx.com:5060"
                    })
                  })]
                })]
              })]
            }), `
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Supported country codes"
              }), ": +82 (South Korea), +65 (Singapore), +81 (Japan), +91 (India), +886 (Taiwan), +27 (South Africa), +20 (Egypt), +254 (Kenya)"]
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
          children: ["Set Priority to ", _jsx(_components.code, {
            children: "10"
          }), " and Weight to ", _jsx(_components.code, {
            children: "10"
          }), " (default)."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Select ", _jsx(_components.strong, {
            children: "Add"
          }), "."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "configure-number-routing",
      children: "Configure number routing"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Go to ", _jsx(_components.strong, {
          children: "Phone Numbers → Manage → Active numbers"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Select the number you want to use for inbound calling."
      }), `
`, _jsxs(_components.li, {
        children: ["Under ", _jsx(_components.strong, {
          children: "Voice Configuration → Configure with"
        }), ", select ", _jsx(_components.strong, {
          children: "SIP Trunk"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Choose the trunk you created in ", _jsx(_components.a, {
          href: "#basic-setup",
          children: "Basic setup"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Select ", _jsx(_components.strong, {
          children: "Save configuration"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "import-the-inbound-number",
      children: "Import the inbound number"
    }), `
`, _jsxs(_components.p, {
      children: ["Once SIP trunk origination and routing is configured, import the number and associate it with an agent to answer inbound calls. See ", _jsx(_components.a, {
        href: "inbound",
        children: "Handle inbound calls"
      }), " for step-by-step instructions."]
    }), `
`, _jsx(_components.h2, {
      id: "configuration-checklist",
      children: "Configuration checklist"
    }), `
`, _jsx(_components.p, {
      children: "Before testing inbound and outbound calls, make sure you address each item in the checklist:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Item"
          }), _jsx(_components.th, {
            children: "Inbound"
          }), _jsx(_components.th, {
            children: "Outbound"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Assign phone number to SIP trunk"
          }), _jsx(_components.td, {
            children: "Required"
          }), _jsx(_components.td, {
            children: "Required"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "SIP Trunk Address"
          }), _jsx(_components.td, {
            children: "Required"
          }), _jsx(_components.td, {
            children: "Required"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Configure Origination URI (SIP trunk → Agora)"
          }), _jsx(_components.td, {
            children: "Required"
          }), _jsx(_components.td, {
            children: "Not needed"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "IP Access Control List"
          }), _jsx(_components.td, {
            children: "Not needed"
          }), _jsx(_components.td, {
            children: "Required"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Credential List"
          }), _jsx(_components.td, {
            children: "Not needed"
          }), _jsx(_components.td, {
            children: "Optional"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Secure Trunking setting matches Transport Protocol"
          }), _jsx(_components.td, {
            children: "Required"
          }), _jsx(_components.td, {
            children: "Required"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Import number"
          }), _jsx(_components.td, {
            children: "Required"
          }), _jsx(_components.td, {
            children: "Required"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Assign number"
          }), _jsx(_components.td, {
            children: "Assign to an agent"
          }), _jsx(_components.td, {
            children: "Assign to a campaign"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), `
`, _jsx(_components.p, {
      children: "If you encounter issues with your SIP trunk setup, use the following table to identify and resolve common problems."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Symptom"
          }), _jsx(_components.th, {
            children: "Cause"
          }), _jsx(_components.th, {
            children: "Solution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Inbound calls don't reach agent"
          }), _jsx(_components.td, {
            children: "Origination URI not set or incorrect"
          }), _jsx(_components.td, {
            children: "Verify the Origination URI in your SIP trunk matches what's shown during import"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Outbound calls rejected by SIP trunk"
          }), _jsx(_components.td, {
            children: "IP ACL missing or incomplete"
          }), _jsx(_components.td, {
            children: "Add all Agora SIP IPs to the SIP trunk IP Access Control List"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Calls connect but no audio"
          }), _jsx(_components.td, {
            children: "Transport mismatch (TLS vs TCP/UDP)"
          }), _jsx(_components.td, {
            children: "Match the Secure Trunking setting in your SIP trunk with the Transport Protocol setting"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "One-way audio"
          }), _jsx(_components.td, {
            children: "Firewall or NAT issue"
          }), _jsx(_components.td, {
            children: "Ensure Agora SIP IPs are whitelisted on both sides"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: '"403 Forbidden" in SIP trunk logs'
          }), _jsx(_components.td, {
            children: "Authentication failed"
          }), _jsx(_components.td, {
            children: "Check Credential List or IP ACL configuration"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Call drops after ~30 seconds"
          }), _jsx(_components.td, {
            children: "SIP session timer timeout"
          }), _jsx(_components.td, {
            children: "Check SIP trunk timeout settings"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "next-steps",
      children: "Next steps"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "import",
          children: "Import a phone number"
        }), ": Import your configured SIP trunk number"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "campaign",
          children: "Set up a campaign"
        }), ": Use your imported number to create an outbound calling campaign"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "inbound",
          children: "Handle inbound calls"
        }), ": Associate a number with an agent to answer inbound calls"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "deploy-agent",
          children: "Publish your agent"
        }), ": Publish an agent to use with your imported number"]
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
