import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  analyticsPageType: "concept-explanation",
  title: "Implement licensing",
  description: "Acquire and use licenses for your IoT devices."
};
export let _markdown = `

Agora grants a device-specific license to bill for its services, with each device having its own unique license. During the license validity period, the standard minutes included with the license cover the duration-based charges for audio and video calls. Any usage beyond the included quota is converted into standard minutes and charged at the applicable standard-minute rate. Typically, device manufacturers predict the sales volume and usage of their devices, buy and activate licenses from Agora, and then embed the license into each device in the form of a single code.

## Understand the tech [#understand-the-tech]

The following figure shows the overall process of using an IoT SDK device license:

![IoT SDK device license workflow](/temp/iot-licensing.svg)

## Obtain and use a device license [#obtain-and-use-a-device-license]

Follow the steps below to add a license to your IoT SDK devices.

### Apply for a license [#apply-for-a-license]

Agora provides each developer with 10 free trial licenses, valid for 6 months, each including a quota of 150 standard minutes per month. To apply for additional or commercial licenses, contact [support@agora.io](mailto\\:support@agora.io) and provide the following information:

| Name                                         | Description                                                                                                                                                                                                                                                                       |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Category                                     | **Device license**: Binds the license to a specific device.                                                                                                                                                                                                                       |
| Company ID (CID)                             | A unique identifier assigned by Agora to each company or organization. You can create an Agora account and get your company ID on the **Settings** page of the Agora Console.                                                                                                     |
| License type                                 | Trial license or commercial license.                                                                                                                                                                                                                                              |
| Stock keeping unit (SKU)                     | The license capability set, including product, media capabilities, minute limits, and usage period.                                                                                                                                                                               |
| Validity period                              | The license validity period, which starts on the day of activation.                                                                                                                                                                                                               |
| Number of applications                       | The number of licenses you require.                                                                                                                                                                                                                                               |
| List of license-enabled project IDs (App ID) | An App ID is the unique identifier of a project, which is provided by Agora and subordinate to the CID. You enable the license for a specific App ID. For how to create a project and get the App ID, see [Account](/en/introduction/account#get-the-app-id-and-app-certificate). |
| Maximum concurrent user (PCU) limit          | After enabling the PCU limit, you can limit the maximum number of people who can access the SDK at the same time in the dimension of CID or App ID.                                                                                                                               |

Note the following when you fill out the license application:

* **License type**: Choose a trial license or a commercial license. Agora recommends that you use a trial license during integration testing, and switch to a commercial license before the official launch. For further details, see [Trial license and commercial license](#trial-and-commercial-license).
* **Stock keeping unit (SKU)**: Specify the capability set of the license, including the following parameters:
  * **Product**: Media Stream Acceleration (RTSA) / IoT SDK.
  * **License capabilities**: Audio, video, or both audio and video.
  * **Upper limit of license minutes**: Whether to limit the duration for using the license, which is accurate to minutes.
  * **License usage period**: Whether to limit the period for using the license, which is accurate to minutes.
* **Validity period**: The validity period of the license starts on the day of activation.
  * **Trial license**: Specify the period in days. Minimum is 3 days.
  * **Commercial license**: Specify the period in years. Minimum is 1 year.

### Obtain pre-authorization [#obtain-pre-authorization]

To reduce the risk of license theft, Agora requires pre-authorization before you can activate a license. Send your project's App ID and the device's \`licenseKey\` to [support@agora.io](mailto\\:support@agora.io) to add the device to an activation whitelist. The activation API only succeeds when you pass a whitelisted \`licenseKey\`. Pre-authorizing a device consumes one license from your purchased quantity.

### Activate a license [#activate-a-license]

After receiving pre-authorization, refer to the information in this section to activate the license.

<CalloutContainer type="info">
  <CalloutDescription>
    The license activation, renewal, and query APIs on this page require [Basic HTTP authentication](/en/api-reference/api-ref/rtc/authentication) and are limited to 10 calls per second per Agora account, not per App ID.
  </CalloutDescription>
</CalloutContainer>

**Request**

* Method: \`POST\`
* Access point: \`https://api.agora.io/global/dabiz/license/v2/active\`

**Request parameters**

The activation request requires the following query parameters:

| Parameter    | Type   | Description                                                                                                                                                                                               |
| ------------ | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`pid\`        | String | The license identification defined by SKU, validity period, and category.                                                                                                                                 |
| \`licenseKey\` | String | The unique ID of the device. For example, the SN number, Mac address, and so on. The string length must be less than 64 bytes. Case-sensitive, and must already be whitelisted through pre-authorization. |
| \`appid\`      | String | The unique identifier assigned by Agora to your project.                                                                                                                                                  |

**Request example**

\`\`\`bash
curl --location --request POST 'https://api.agora.io/global/dabiz/license/v2/active?pid=02F5xxxxxxxxxxxxxxxxxxxxxxxxEC30&licenseKey=111&appid=a6d6xxxxxxxxxxxxxxxxxxxxxxxxf75e' \\
--header 'Authorization: <http_basic_auth>'
\`\`\`

**Response parameters**
If the status code is \`200\`, the request is successful, and the response body contains the following parameters:

| Parameter        | Type   | Description                                                                                                                      |
| ---------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------- |
| \`pid\`            | String | The license identification you passed in the request.                                                                            |
| \`license\`        | String | The value of the active license. Case-sensitive. Save this value; you need it for renewal operations.                            |
| \`licenseKey\`     | String | The device unique identifier you passed in the request.                                                                          |
| \`expireTime\`     | String | The timestamp when the license expires.                                                                                          |
| \`activationTime\` | String | The timestamp when the license was activated.                                                                                    |
| \`skuView\`        | Object | The SKU capability set. Only the \`product\` field is meaningful; \`name\`, \`mediaType\`, \`minutes\`, and \`period\` are no longer used. |

**Response example**

The following is a response example for a successful activation request:

\`\`\`json
{
   "code": 200,
   "data": {
      "pid": "E4D6xxxxxxxxxxxxxxxxxxxxxxxx7E79",
      "license": "1D65xxxxxxxxxxxxxxxxxxxxxxxx6016",
      "licenseKey": "1234xxxxxxxxxxx1234",
      "expireTime": 1700000000,
      "activationTime": 1699000000,
      "skuView": {
         "product": 1
      }
   }
}
\`\`\`

If the request fails, the status code is not \`200\`. Follow the returned status code and the \`message\` field in the response body to troubleshoot errors.

### Use the license [#use-the-license]

After successfully activating a license, you write the license to the device and use it in the SDK. Take the following steps to use the license:

1. Receive an activated license from the server.

2. Write the license to the device. Ensure that the license written to each device is correct and unique. There are two common methods to write the license information to your device:
   * Write the license to a file on the device, and have your program read it.
   * The manufacturer burns the license into the device during production, and the device reads it directly.

3. Device reads license:
   * If the device successfully reads the license, proceed to the next step.
   * If the device fails to read the license, troubleshoot the problem and write the license again.

4. In the IoT SDK, call \`agora_rtc_init\` and pass the license in the \`license_value\` parameter of \`rtc_service_option_t\`.

5. The IoT SDK automatically verifies the license when a user joins a channel.
   * If the license verification is successful, the user can use the functions of the SDK.
   * If the license verification fails, the SDK kicks the user out of the channel and triggers the \`on_license_validation_failure\` callback with an error code, so your app can report and handle the failure explicitly:

     \`\`\`c
     static void __on_license_validation_failure(connection_id_t conn_id, int reason) {
         printf("License verification failed, reason: %d\\n", reason);
     }
     \`\`\`

     Assign the handler in your event handler setup:

     \`\`\`cpp
     event_handler->on_license_validation_failure = __on_license_validation_failure;
     \`\`\`

### Check license usage [#check-license-usage]

Check your license usage in [Agora Console](https://console.agora.io).

### Renew a license [#renew-a-license]

Agora recommends renewing a license at least 30 days before it expires, to avoid a service interruption. You can only renew a license once its remaining validity period is shorter than the validity period of the renewal you request.

**Request**

* Method: \`POST\`
* Access point: \`https://api.agora.io/global/dabiz/license/v2/renew\`

**Request parameters**

| Parameter | Type   | Required | Description                                                                                                                                                                                                           |
| --------- | ------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`appid\`   | String | Yes      | The unique identifier assigned by Agora to your project.                                                                                                                                                              |
| \`renewId\` | String | No       | The license renewal identifier, defined by SKU, validity period, and category. Contact [support@agora.io](mailto\\:support@agora.io) to obtain a \`renewId\`. If you don't provide one, Agora selects one automatically. |
| \`license\` | String | Yes      | The license value to renew. Case-sensitive.                                                                                                                                                                           |

**Request example**

\`\`\`bash
curl --location --request POST 'https://api.agora.io/global/dabiz/license/v2/renew?appid=a6d6xxxxxxxxxxxxxxxxxxxxxxxxf75e&renewId=4750xxxxxxxxxxxxxxxxxxxxxxxx6270&license=85B3xxxxxxxxxxxxxxxxxxxxxxxx656F' \\
--header 'Authorization: <http_basic_auth>'
\`\`\`

**Response parameters**

If the status code is \`200\`, the request is successful, and the response body contains the following parameters:

| Parameter        | Type    | Description                                        |
| ---------------- | ------- | -------------------------------------------------- |
| \`licenseKey\`     | String  | The device unique identifier.                      |
| \`license\`        | String  | The renewed license value.                         |
| \`renewTimes\`     | Integer | The number of times this license has been renewed. |
| \`lastRenewTime\`  | Integer | The timestamp of the most recent renewal.          |
| \`activationTime\` | Integer | The timestamp when the license was activated.      |
| \`expireTime\`     | Integer | The timestamp when the renewed license expires.    |

**Response example**

\`\`\`json
{
  "code": 200,
  "message": "license renewed successfully",
  "data": {
    "licenseKey": "1234xxxxxxxxxxx1234",
    "license": "85B3xxxxxxxxxxxxxxxxxxxxxxxx656F",
    "renewTimes": 1,
    "lastRenewTime": 1700644272,
    "activationTime": 1699000000,
    "expireTime": 1705913065
  }
}
\`\`\`

### Check for expiring licenses [#check-for-expiring-licenses]

Query which of your licenses are expiring soon so you can renew them in time.

**Request**

* Method: \`GET\`
* Access point: \`https://api.agora.io/global/dabiz/license/v3/projects/{appId}/pids/{pid}/expiringLicenses\`

**Path parameters**

| Parameter | Type   | Description                                                     |
| --------- | ------ | --------------------------------------------------------------- |
| \`appId\`   | String | The unique identifier assigned by Agora to your project.        |
| \`pid\`     | String | The license identification used when you activated the license. |

**Query parameters**

| Parameter     | Type    | Description                                                                            |
| ------------- | ------- | -------------------------------------------------------------------------------------- |
| \`expiringDay\` | Integer | The number of days until expiry to check for. Accepts \`60\` or \`90\`.                    |
| \`page\`        | Integer | The page number to return. Optional, defaults to \`1\`.                                  |
| \`size\`        | Integer | The number of licenses to return per page. Optional, defaults to \`100\`, maximum \`100\`. |

**Request example**

\`\`\`bash
curl --location --request GET 'https://api.agora.io/global/dabiz/license/v3/projects/{appId}/pids/{pid}/expiringLicenses?expiringDay=90&size=10&page=1' \\
--header 'Authorization: <http_basic_auth>'
\`\`\`

**Response parameters**

If the status code is \`200\`, the request is successful, and the response body contains the following parameters:

| Parameter      | Type    | Description                                                                                                                                                                                                                                                         |
| -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`count\`        | Integer | The number of expiring licenses found.                                                                                                                                                                                                                              |
| \`licenseInfos\` | Array   | The list of expiring licenses. Each entry contains \`licenseKey\` (the device unique identifier), \`license\` (the expiring license value), \`activeTime\` (the activation timestamp, in RFC3339 format), and \`expireTime\` (the expiration timestamp, in RFC3339 format). |

**Response example**

\`\`\`json
{
  "code": 200,
  "data": {
    "count": 1,
    "list": [
      {
        "license": "698AxxxxxxxxxxxxxxxxxxxxxxxxEDDB0",
        "licenseKey": "1234xxxxxxxxxxx1234",
        "activeTime": "2024-12-02T08:15:39Z",
        "expireTime": "2024-12-05T08:15:39Z"
      }
    ]
  }
}
\`\`\`

### Check renewal orders [#check-renewal-orders]

**Request**

* Method: \`GET\`
* Access point: \`https://api.agora.io/global/dabiz/license/v3/projects/{appId}/renewals\`

**Path parameters**

| Parameter | Type   | Description                                              |
| --------- | ------ | -------------------------------------------------------- |
| \`appId\`   | String | The unique identifier assigned by Agora to your project. |

**Request example**

\`\`\`bash
curl --location --request GET 'https://api.agora.io/global/dabiz/license/v3/projects/{appId}/renewals' \\
--header 'Authorization: <http_basic_auth>'
\`\`\`

**Response parameters**

If the status code is \`200\`, the request is successful, and the response body contains a list of renewal orders. Each order includes \`renewId\`, \`pid\`, the renewal type, the renewal duration, \`totalCount\`, \`allocateCount\`, and \`createTime\`.

## Reference [#reference]

The content in this section completes the information on this page, or points you to documentation that explains other aspects of this product.

### Difference between \`licenseValue\` and \`licenseKey\` [#difference-between-licensevalue-and-licensekey]

**\`licenseValue\`** is the ID of each license. You need this value to renew a license. You receive the activated \`licenseValue\` in the response when you call the activation API.

**\`licenseKey\`** is the unique identifier of the device. For example, the SN number, or the Mac address. The string length must be less than 64 bytes. When a user calls the activation API to activate a license for a device, the user consumes the license which is passed in the \`licenseKey\` parameter. Users can perform pre-authorization operations, so that only the \`licenseKey\` in the whitelist can successfully activate the license.

### Trial and commercial license [#trial-and-commercial-license]

To facilitate development and testing, Agora offers the following types of licenses:

* **Trial license**: For integration-testing and product debugging. Every developer gets 10 free trial licenses, valid for 6 months, each including a quota of 150 standard minutes per month. Minimum validity period for additional trial licenses you request is 3 days.
* **Commercial license**: For the launch stage of the product. Minimum validity period is 1 year.

Best practice is to use a trial license before the product is officially launched. To switch to a commercial license, follow these steps:

1. Contact [support@agora.io](mailto\\:support@agora.io) to apply for a commercial license. After successfully applying for a license, you can check the PID of the license in the **License Usage** page of the Agora Console.
2. Call the activation API to activate a new license and pass in the PID of the new license and the \`licenseKey\` which is consistent with the old license.
3. Write the new license to the device and read it.
4. Call the initialization method of the SDK with the new license.

### API reference [#api-reference]

* [\`agora_rtc_init()\`](https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html#a6187076d897f0b56cb20942368c15aaa)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora grants a device-specific license to bill for its services, with each device having its own unique license. During the license validity period, the standard minutes included with the license cover the duration-based charges for audio and video calls. Any usage beyond the included quota is converted into standard minutes and charged at the applicable standard-minute rate. Typically, device manufacturers predict the sales volume and usage of their devices, buy and activate licenses from Agora, and then embed the license into each device in the form of a single code."
  }, {
    heading: "understand-the-tech",
    content: "The following figure shows the overall process of using an IoT SDK device license:"
  }, {
    heading: "obtain-and-use-a-device-license",
    content: "Follow the steps below to add a license to your IoT SDK devices."
  }, {
    heading: "apply-for-a-license",
    content: "Agora provides each developer with 10 free trial licenses, valid for 6 months, each including a quota of 150 standard minutes per month. To apply for additional or commercial licenses, contact support\\@agora.io and provide the following information:"
  }, {
    heading: "apply-for-a-license",
    content: "Name"
  }, {
    heading: "apply-for-a-license",
    content: "Description"
  }, {
    heading: "apply-for-a-license",
    content: "Category"
  }, {
    heading: "apply-for-a-license",
    content: "**Device license**: Binds the license to a specific device."
  }, {
    heading: "apply-for-a-license",
    content: "Company ID (CID)"
  }, {
    heading: "apply-for-a-license",
    content: "A unique identifier assigned by Agora to each company or organization. You can create an Agora account and get your company ID on the **Settings** page of the Agora Console."
  }, {
    heading: "apply-for-a-license",
    content: "License type"
  }, {
    heading: "apply-for-a-license",
    content: "Trial license or commercial license."
  }, {
    heading: "apply-for-a-license",
    content: "Stock keeping unit (SKU)"
  }, {
    heading: "apply-for-a-license",
    content: "The license capability set, including product, media capabilities, minute limits, and usage period."
  }, {
    heading: "apply-for-a-license",
    content: "Validity period"
  }, {
    heading: "apply-for-a-license",
    content: "The license validity period, which starts on the day of activation."
  }, {
    heading: "apply-for-a-license",
    content: "Number of applications"
  }, {
    heading: "apply-for-a-license",
    content: "The number of licenses you require."
  }, {
    heading: "apply-for-a-license",
    content: "List of license-enabled project IDs (App ID)"
  }, {
    heading: "apply-for-a-license",
    content: "An App ID is the unique identifier of a project, which is provided by Agora and subordinate to the CID. You enable the license for a specific App ID. For how to create a project and get the App ID, see Account."
  }, {
    heading: "apply-for-a-license",
    content: "Maximum concurrent user (PCU) limit"
  }, {
    heading: "apply-for-a-license",
    content: "After enabling the PCU limit, you can limit the maximum number of people who can access the SDK at the same time in the dimension of CID or App ID."
  }, {
    heading: "apply-for-a-license",
    content: "Note the following when you fill out the license application:"
  }, {
    heading: "apply-for-a-license",
    content: "**License type**: Choose a trial license or a commercial license. Agora recommends that you use a trial license during integration testing, and switch to a commercial license before the official launch. For further details, see Trial license and commercial license."
  }, {
    heading: "apply-for-a-license",
    content: "**Stock keeping unit (SKU)**: Specify the capability set of the license, including the following parameters:"
  }, {
    heading: "apply-for-a-license",
    content: "**Product**: Media Stream Acceleration (RTSA) / IoT SDK."
  }, {
    heading: "apply-for-a-license",
    content: "**License capabilities**: Audio, video, or both audio and video."
  }, {
    heading: "apply-for-a-license",
    content: "**Upper limit of license minutes**: Whether to limit the duration for using the license, which is accurate to minutes."
  }, {
    heading: "apply-for-a-license",
    content: "**License usage period**: Whether to limit the period for using the license, which is accurate to minutes."
  }, {
    heading: "apply-for-a-license",
    content: "**Validity period**: The validity period of the license starts on the day of activation."
  }, {
    heading: "apply-for-a-license",
    content: "**Trial license**: Specify the period in days. Minimum is 3 days."
  }, {
    heading: "apply-for-a-license",
    content: "**Commercial license**: Specify the period in years. Minimum is 1 year."
  }, {
    heading: "obtain-pre-authorization",
    content: "To reduce the risk of license theft, Agora requires pre-authorization before you can activate a license. Send your project's App ID and the device's `licenseKey` to support\\@agora.io to add the device to an activation whitelist. The activation API only succeeds when you pass a whitelisted `licenseKey`. Pre-authorizing a device consumes one license from your purchased quantity."
  }, {
    heading: "activate-a-license",
    content: "After receiving pre-authorization, refer to the information in this section to activate the license."
  }, {
    heading: "activate-a-license",
    content: "The license activation, renewal, and query APIs on this page require Basic HTTP authentication and are limited to 10 calls per second per Agora account, not per App ID."
  }, {
    heading: "activate-a-license",
    content: "**Request**"
  }, {
    heading: "activate-a-license",
    content: "Method: `POST`"
  }, {
    heading: "activate-a-license",
    content: "Access point: `https://api.agora.io/global/dabiz/license/v2/active`"
  }, {
    heading: "activate-a-license",
    content: "**Request parameters**"
  }, {
    heading: "activate-a-license",
    content: "The activation request requires the following query parameters:"
  }, {
    heading: "activate-a-license",
    content: "Parameter"
  }, {
    heading: "activate-a-license",
    content: "Type"
  }, {
    heading: "activate-a-license",
    content: "Description"
  }, {
    heading: "activate-a-license",
    content: "`pid`"
  }, {
    heading: "activate-a-license",
    content: "String"
  }, {
    heading: "activate-a-license",
    content: "The license identification defined by SKU, validity period, and category."
  }, {
    heading: "activate-a-license",
    content: "`licenseKey`"
  }, {
    heading: "activate-a-license",
    content: "String"
  }, {
    heading: "activate-a-license",
    content: "The unique ID of the device. For example, the SN number, Mac address, and so on. The string length must be less than 64 bytes. Case-sensitive, and must already be whitelisted through pre-authorization."
  }, {
    heading: "activate-a-license",
    content: "`appid`"
  }, {
    heading: "activate-a-license",
    content: "String"
  }, {
    heading: "activate-a-license",
    content: "The unique identifier assigned by Agora to your project."
  }, {
    heading: "activate-a-license",
    content: "**Request example**"
  }, {
    heading: "activate-a-license",
    content: "**Response parameters**\nIf the status code is `200`, the request is successful, and the response body contains the following parameters:"
  }, {
    heading: "activate-a-license",
    content: "Parameter"
  }, {
    heading: "activate-a-license",
    content: "Type"
  }, {
    heading: "activate-a-license",
    content: "Description"
  }, {
    heading: "activate-a-license",
    content: "`pid`"
  }, {
    heading: "activate-a-license",
    content: "String"
  }, {
    heading: "activate-a-license",
    content: "The license identification you passed in the request."
  }, {
    heading: "activate-a-license",
    content: "`license`"
  }, {
    heading: "activate-a-license",
    content: "String"
  }, {
    heading: "activate-a-license",
    content: "The value of the active license. Case-sensitive. Save this value; you need it for renewal operations."
  }, {
    heading: "activate-a-license",
    content: "`licenseKey`"
  }, {
    heading: "activate-a-license",
    content: "String"
  }, {
    heading: "activate-a-license",
    content: "The device unique identifier you passed in the request."
  }, {
    heading: "activate-a-license",
    content: "`expireTime`"
  }, {
    heading: "activate-a-license",
    content: "String"
  }, {
    heading: "activate-a-license",
    content: "The timestamp when the license expires."
  }, {
    heading: "activate-a-license",
    content: "`activationTime`"
  }, {
    heading: "activate-a-license",
    content: "String"
  }, {
    heading: "activate-a-license",
    content: "The timestamp when the license was activated."
  }, {
    heading: "activate-a-license",
    content: "`skuView`"
  }, {
    heading: "activate-a-license",
    content: "Object"
  }, {
    heading: "activate-a-license",
    content: "The SKU capability set. Only the `product` field is meaningful; `name`, `mediaType`, `minutes`, and `period` are no longer used."
  }, {
    heading: "activate-a-license",
    content: "**Response example**"
  }, {
    heading: "activate-a-license",
    content: "The following is a response example for a successful activation request:"
  }, {
    heading: "activate-a-license",
    content: "If the request fails, the status code is not `200`. Follow the returned status code and the `message` field in the response body to troubleshoot errors."
  }, {
    heading: "use-the-license",
    content: "After successfully activating a license, you write the license to the device and use it in the SDK. Take the following steps to use the license:"
  }, {
    heading: "use-the-license",
    content: "Receive an activated license from the server."
  }, {
    heading: "use-the-license",
    content: "Write the license to the device. Ensure that the license written to each device is correct and unique. There are two common methods to write the license information to your device:"
  }, {
    heading: "use-the-license",
    content: "Write the license to a file on the device, and have your program read it."
  }, {
    heading: "use-the-license",
    content: "The manufacturer burns the license into the device during production, and the device reads it directly."
  }, {
    heading: "use-the-license",
    content: "Device reads license:"
  }, {
    heading: "use-the-license",
    content: "If the device successfully reads the license, proceed to the next step."
  }, {
    heading: "use-the-license",
    content: "If the device fails to read the license, troubleshoot the problem and write the license again."
  }, {
    heading: "use-the-license",
    content: "In the IoT SDK, call `agora_rtc_init` and pass the license in the `license_value` parameter of `rtc_service_option_t`."
  }, {
    heading: "use-the-license",
    content: "The IoT SDK automatically verifies the license when a user joins a channel."
  }, {
    heading: "use-the-license",
    content: "If the license verification is successful, the user can use the functions of the SDK."
  }, {
    heading: "use-the-license",
    content: "If the license verification fails, the SDK kicks the user out of the channel and triggers the `on_license_validation_failure` callback with an error code, so your app can report and handle the failure explicitly:"
  }, {
    heading: "use-the-license",
    content: "Assign the handler in your event handler setup:"
  }, {
    heading: "check-license-usage",
    content: "Check your license usage in Agora Console."
  }, {
    heading: "renew-a-license",
    content: "Agora recommends renewing a license at least 30 days before it expires, to avoid a service interruption. You can only renew a license once its remaining validity period is shorter than the validity period of the renewal you request."
  }, {
    heading: "renew-a-license",
    content: "**Request**"
  }, {
    heading: "renew-a-license",
    content: "Method: `POST`"
  }, {
    heading: "renew-a-license",
    content: "Access point: `https://api.agora.io/global/dabiz/license/v2/renew`"
  }, {
    heading: "renew-a-license",
    content: "**Request parameters**"
  }, {
    heading: "renew-a-license",
    content: "Parameter"
  }, {
    heading: "renew-a-license",
    content: "Type"
  }, {
    heading: "renew-a-license",
    content: "Required"
  }, {
    heading: "renew-a-license",
    content: "Description"
  }, {
    heading: "renew-a-license",
    content: "`appid`"
  }, {
    heading: "renew-a-license",
    content: "String"
  }, {
    heading: "renew-a-license",
    content: "Yes"
  }, {
    heading: "renew-a-license",
    content: "The unique identifier assigned by Agora to your project."
  }, {
    heading: "renew-a-license",
    content: "`renewId`"
  }, {
    heading: "renew-a-license",
    content: "String"
  }, {
    heading: "renew-a-license",
    content: "No"
  }, {
    heading: "renew-a-license",
    content: "The license renewal identifier, defined by SKU, validity period, and category. Contact support\\@agora.io to obtain a `renewId`. If you don't provide one, Agora selects one automatically."
  }, {
    heading: "renew-a-license",
    content: "`license`"
  }, {
    heading: "renew-a-license",
    content: "String"
  }, {
    heading: "renew-a-license",
    content: "Yes"
  }, {
    heading: "renew-a-license",
    content: "The license value to renew. Case-sensitive."
  }, {
    heading: "renew-a-license",
    content: "**Request example**"
  }, {
    heading: "renew-a-license",
    content: "**Response parameters**"
  }, {
    heading: "renew-a-license",
    content: "If the status code is `200`, the request is successful, and the response body contains the following parameters:"
  }, {
    heading: "renew-a-license",
    content: "Parameter"
  }, {
    heading: "renew-a-license",
    content: "Type"
  }, {
    heading: "renew-a-license",
    content: "Description"
  }, {
    heading: "renew-a-license",
    content: "`licenseKey`"
  }, {
    heading: "renew-a-license",
    content: "String"
  }, {
    heading: "renew-a-license",
    content: "The device unique identifier."
  }, {
    heading: "renew-a-license",
    content: "`license`"
  }, {
    heading: "renew-a-license",
    content: "String"
  }, {
    heading: "renew-a-license",
    content: "The renewed license value."
  }, {
    heading: "renew-a-license",
    content: "`renewTimes`"
  }, {
    heading: "renew-a-license",
    content: "Integer"
  }, {
    heading: "renew-a-license",
    content: "The number of times this license has been renewed."
  }, {
    heading: "renew-a-license",
    content: "`lastRenewTime`"
  }, {
    heading: "renew-a-license",
    content: "Integer"
  }, {
    heading: "renew-a-license",
    content: "The timestamp of the most recent renewal."
  }, {
    heading: "renew-a-license",
    content: "`activationTime`"
  }, {
    heading: "renew-a-license",
    content: "Integer"
  }, {
    heading: "renew-a-license",
    content: "The timestamp when the license was activated."
  }, {
    heading: "renew-a-license",
    content: "`expireTime`"
  }, {
    heading: "renew-a-license",
    content: "Integer"
  }, {
    heading: "renew-a-license",
    content: "The timestamp when the renewed license expires."
  }, {
    heading: "renew-a-license",
    content: "**Response example**"
  }, {
    heading: "check-for-expiring-licenses",
    content: "Query which of your licenses are expiring soon so you can renew them in time."
  }, {
    heading: "check-for-expiring-licenses",
    content: "**Request**"
  }, {
    heading: "check-for-expiring-licenses",
    content: "Method: `GET`"
  }, {
    heading: "check-for-expiring-licenses",
    content: "Access point: `https://api.agora.io/global/dabiz/license/v3/projects/{appId}/pids/{pid}/expiringLicenses`"
  }, {
    heading: "check-for-expiring-licenses",
    content: "**Path parameters**"
  }, {
    heading: "check-for-expiring-licenses",
    content: "Parameter"
  }, {
    heading: "check-for-expiring-licenses",
    content: "Type"
  }, {
    heading: "check-for-expiring-licenses",
    content: "Description"
  }, {
    heading: "check-for-expiring-licenses",
    content: "`appId`"
  }, {
    heading: "check-for-expiring-licenses",
    content: "String"
  }, {
    heading: "check-for-expiring-licenses",
    content: "The unique identifier assigned by Agora to your project."
  }, {
    heading: "check-for-expiring-licenses",
    content: "`pid`"
  }, {
    heading: "check-for-expiring-licenses",
    content: "String"
  }, {
    heading: "check-for-expiring-licenses",
    content: "The license identification used when you activated the license."
  }, {
    heading: "check-for-expiring-licenses",
    content: "**Query parameters**"
  }, {
    heading: "check-for-expiring-licenses",
    content: "Parameter"
  }, {
    heading: "check-for-expiring-licenses",
    content: "Type"
  }, {
    heading: "check-for-expiring-licenses",
    content: "Description"
  }, {
    heading: "check-for-expiring-licenses",
    content: "`expiringDay`"
  }, {
    heading: "check-for-expiring-licenses",
    content: "Integer"
  }, {
    heading: "check-for-expiring-licenses",
    content: "The number of days until expiry to check for. Accepts `60` or `90`."
  }, {
    heading: "check-for-expiring-licenses",
    content: "`page`"
  }, {
    heading: "check-for-expiring-licenses",
    content: "Integer"
  }, {
    heading: "check-for-expiring-licenses",
    content: "The page number to return. Optional, defaults to `1`."
  }, {
    heading: "check-for-expiring-licenses",
    content: "`size`"
  }, {
    heading: "check-for-expiring-licenses",
    content: "Integer"
  }, {
    heading: "check-for-expiring-licenses",
    content: "The number of licenses to return per page. Optional, defaults to `100`, maximum `100`."
  }, {
    heading: "check-for-expiring-licenses",
    content: "**Request example**"
  }, {
    heading: "check-for-expiring-licenses",
    content: "**Response parameters**"
  }, {
    heading: "check-for-expiring-licenses",
    content: "If the status code is `200`, the request is successful, and the response body contains the following parameters:"
  }, {
    heading: "check-for-expiring-licenses",
    content: "Parameter"
  }, {
    heading: "check-for-expiring-licenses",
    content: "Type"
  }, {
    heading: "check-for-expiring-licenses",
    content: "Description"
  }, {
    heading: "check-for-expiring-licenses",
    content: "`count`"
  }, {
    heading: "check-for-expiring-licenses",
    content: "Integer"
  }, {
    heading: "check-for-expiring-licenses",
    content: "The number of expiring licenses found."
  }, {
    heading: "check-for-expiring-licenses",
    content: "`licenseInfos`"
  }, {
    heading: "check-for-expiring-licenses",
    content: "Array"
  }, {
    heading: "check-for-expiring-licenses",
    content: "The list of expiring licenses. Each entry contains `licenseKey` (the device unique identifier), `license` (the expiring license value), `activeTime` (the activation timestamp, in RFC3339 format), and `expireTime` (the expiration timestamp, in RFC3339 format)."
  }, {
    heading: "check-for-expiring-licenses",
    content: "**Response example**"
  }, {
    heading: "check-renewal-orders",
    content: "**Request**"
  }, {
    heading: "check-renewal-orders",
    content: "Method: `GET`"
  }, {
    heading: "check-renewal-orders",
    content: "Access point: `https://api.agora.io/global/dabiz/license/v3/projects/{appId}/renewals`"
  }, {
    heading: "check-renewal-orders",
    content: "**Path parameters**"
  }, {
    heading: "check-renewal-orders",
    content: "Parameter"
  }, {
    heading: "check-renewal-orders",
    content: "Type"
  }, {
    heading: "check-renewal-orders",
    content: "Description"
  }, {
    heading: "check-renewal-orders",
    content: "`appId`"
  }, {
    heading: "check-renewal-orders",
    content: "String"
  }, {
    heading: "check-renewal-orders",
    content: "The unique identifier assigned by Agora to your project."
  }, {
    heading: "check-renewal-orders",
    content: "**Request example**"
  }, {
    heading: "check-renewal-orders",
    content: "**Response parameters**"
  }, {
    heading: "check-renewal-orders",
    content: "If the status code is `200`, the request is successful, and the response body contains a list of renewal orders. Each order includes `renewId`, `pid`, the renewal type, the renewal duration, `totalCount`, `allocateCount`, and `createTime`."
  }, {
    heading: "reference",
    content: "The content in this section completes the information on this page, or points you to documentation that explains other aspects of this product."
  }, {
    heading: "difference-between-licensevalue-and-licensekey",
    content: "**`licenseValue`** is the ID of each license. You need this value to renew a license. You receive the activated `licenseValue` in the response when you call the activation API."
  }, {
    heading: "difference-between-licensevalue-and-licensekey",
    content: "**`licenseKey`** is the unique identifier of the device. For example, the SN number, or the Mac address. The string length must be less than 64 bytes. When a user calls the activation API to activate a license for a device, the user consumes the license which is passed in the `licenseKey` parameter. Users can perform pre-authorization operations, so that only the `licenseKey` in the whitelist can successfully activate the license."
  }, {
    heading: "trial-and-commercial-license",
    content: "To facilitate development and testing, Agora offers the following types of licenses:"
  }, {
    heading: "trial-and-commercial-license",
    content: "**Trial license**: For integration-testing and product debugging. Every developer gets 10 free trial licenses, valid for 6 months, each including a quota of 150 standard minutes per month. Minimum validity period for additional trial licenses you request is 3 days."
  }, {
    heading: "trial-and-commercial-license",
    content: "**Commercial license**: For the launch stage of the product. Minimum validity period is 1 year."
  }, {
    heading: "trial-and-commercial-license",
    content: "Best practice is to use a trial license before the product is officially launched. To switch to a commercial license, follow these steps:"
  }, {
    heading: "trial-and-commercial-license",
    content: "Contact support\\@agora.io to apply for a commercial license. After successfully applying for a license, you can check the PID of the license in the **License Usage** page of the Agora Console."
  }, {
    heading: "trial-and-commercial-license",
    content: "Call the activation API to activate a new license and pass in the PID of the new license and the `licenseKey` which is consistent with the old license."
  }, {
    heading: "trial-and-commercial-license",
    content: "Write the new license to the device and read it."
  }, {
    heading: "trial-and-commercial-license",
    content: "Call the initialization method of the SDK with the new license."
  }, {
    heading: "api-reference",
    content: "`agora_rtc_init()`"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "obtain-and-use-a-device-license",
    content: "Obtain and use a device license"
  }, {
    id: "apply-for-a-license",
    content: "Apply for a license"
  }, {
    id: "obtain-pre-authorization",
    content: "Obtain pre-authorization"
  }, {
    id: "activate-a-license",
    content: "Activate a license"
  }, {
    id: "use-the-license",
    content: "Use the license"
  }, {
    id: "check-license-usage",
    content: "Check license usage"
  }, {
    id: "renew-a-license",
    content: "Renew a license"
  }, {
    id: "check-for-expiring-licenses",
    content: "Check for expiring licenses"
  }, {
    id: "check-renewal-orders",
    content: "Check renewal orders"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "difference-between-licensevalue-and-licensekey",
    content: "Difference between `licenseValue` and `licenseKey`"
  }, {
    id: "trial-and-commercial-license",
    content: "Trial and commercial license"
  }, {
    id: "api-reference",
    content: "API reference"
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
  url: "#obtain-and-use-a-device-license",
  title: _jsx(_Fragment, {
    children: "Obtain and use a device license"
  })
}, {
  depth: 3,
  url: "#apply-for-a-license",
  title: _jsx(_Fragment, {
    children: "Apply for a license"
  })
}, {
  depth: 3,
  url: "#obtain-pre-authorization",
  title: _jsx(_Fragment, {
    children: "Obtain pre-authorization"
  })
}, {
  depth: 3,
  url: "#activate-a-license",
  title: _jsx(_Fragment, {
    children: "Activate a license"
  })
}, {
  depth: 3,
  url: "#use-the-license",
  title: _jsx(_Fragment, {
    children: "Use the license"
  })
}, {
  depth: 3,
  url: "#check-license-usage",
  title: _jsx(_Fragment, {
    children: "Check license usage"
  })
}, {
  depth: 3,
  url: "#renew-a-license",
  title: _jsx(_Fragment, {
    children: "Renew a license"
  })
}, {
  depth: 3,
  url: "#check-for-expiring-licenses",
  title: _jsx(_Fragment, {
    children: "Check for expiring licenses"
  })
}, {
  depth: 3,
  url: "#check-renewal-orders",
  title: _jsx(_Fragment, {
    children: "Check renewal orders"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#difference-between-licensevalue-and-licensekey",
  title: _jsxs(_Fragment, {
    children: ["Difference between ", _jsx("code", {
      children: "licenseValue"
    }), " and ", _jsx("code", {
      children: "licenseKey"
    })]
  })
}, {
  depth: 3,
  url: "#trial-and-commercial-license",
  title: _jsx(_Fragment, {
    children: "Trial and commercial license"
  })
}, {
  depth: 3,
  url: "#api-reference",
  title: _jsx(_Fragment, {
    children: "API reference"
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Agora grants a device-specific license to bill for its services, with each device having its own unique license. During the license validity period, the standard minutes included with the license cover the duration-based charges for audio and video calls. Any usage beyond the included quota is converted into standard minutes and charged at the applicable standard-minute rate. Typically, device manufacturers predict the sales volume and usage of their devices, buy and activate licenses from Agora, and then embed the license into each device in the form of a single code."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsx(_components.p, {
      children: "The following figure shows the overall process of using an IoT SDK device license:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "/temp/iot-licensing.svg",
        alt: "IoT SDK device license workflow",
        width: "628",
        height: "732"
      })
    }), `
`, _jsx(_components.h2, {
      id: "obtain-and-use-a-device-license",
      children: "Obtain and use a device license"
    }), `
`, _jsx(_components.p, {
      children: "Follow the steps below to add a license to your IoT SDK devices."
    }), `
`, _jsx(_components.h3, {
      id: "apply-for-a-license",
      children: "Apply for a license"
    }), `
`, _jsxs(_components.p, {
      children: ["Agora provides each developer with 10 free trial licenses, valid for 6 months, each including a quota of 150 standard minutes per month. To apply for additional or commercial licenses, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), " and provide the following information:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Name"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Category"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.strong, {
              children: "Device license"
            }), ": Binds the license to a specific device."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Company ID (CID)"
          }), _jsxs(_components.td, {
            children: ["A unique identifier assigned by Agora to each company or organization. You can create an Agora account and get your company ID on the ", _jsx(_components.strong, {
              children: "Settings"
            }), " page of the Agora Console."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "License type"
          }), _jsx(_components.td, {
            children: "Trial license or commercial license."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Stock keeping unit (SKU)"
          }), _jsx(_components.td, {
            children: "The license capability set, including product, media capabilities, minute limits, and usage period."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Validity period"
          }), _jsx(_components.td, {
            children: "The license validity period, which starts on the day of activation."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Number of applications"
          }), _jsx(_components.td, {
            children: "The number of licenses you require."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "List of license-enabled project IDs (App ID)"
          }), _jsxs(_components.td, {
            children: ["An App ID is the unique identifier of a project, which is provided by Agora and subordinate to the CID. You enable the license for a specific App ID. For how to create a project and get the App ID, see ", _jsx(_components.a, {
              href: "/en/introduction/account#get-the-app-id-and-app-certificate",
              children: "Account"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Maximum concurrent user (PCU) limit"
          }), _jsx(_components.td, {
            children: "After enabling the PCU limit, you can limit the maximum number of people who can access the SDK at the same time in the dimension of CID or App ID."
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "Note the following when you fill out the license application:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "License type"
        }), ": Choose a trial license or a commercial license. Agora recommends that you use a trial license during integration testing, and switch to a commercial license before the official launch. For further details, see ", _jsx(_components.a, {
          href: "#trial-and-commercial-license",
          children: "Trial license and commercial license"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Stock keeping unit (SKU)"
        }), ": Specify the capability set of the license, including the following parameters:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Product"
            }), ": Media Stream Acceleration (RTSA) / IoT SDK."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "License capabilities"
            }), ": Audio, video, or both audio and video."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Upper limit of license minutes"
            }), ": Whether to limit the duration for using the license, which is accurate to minutes."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "License usage period"
            }), ": Whether to limit the period for using the license, which is accurate to minutes."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Validity period"
        }), ": The validity period of the license starts on the day of activation.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Trial license"
            }), ": Specify the period in days. Minimum is 3 days."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Commercial license"
            }), ": Specify the period in years. Minimum is 1 year."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "obtain-pre-authorization",
      children: "Obtain pre-authorization"
    }), `
`, _jsxs(_components.p, {
      children: ["To reduce the risk of license theft, Agora requires pre-authorization before you can activate a license. Send your project's App ID and the device's ", _jsx(_components.code, {
        children: "licenseKey"
      }), " to ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), " to add the device to an activation whitelist. The activation API only succeeds when you pass a whitelisted ", _jsx(_components.code, {
        children: "licenseKey"
      }), ". Pre-authorizing a device consumes one license from your purchased quantity."]
    }), `
`, _jsx(_components.h3, {
      id: "activate-a-license",
      children: "Activate a license"
    }), `
`, _jsx(_components.p, {
      children: "After receiving pre-authorization, refer to the information in this section to activate the license."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["The license activation, renewal, and query APIs on this page require ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/rtc/authentication",
            children: "Basic HTTP authentication"
          }), " and are limited to 10 calls per second per Agora account, not per App ID."]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "POST"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Access point: ", _jsx(_components.code, {
          children: "https://api.agora.io/global/dabiz/license/v2/active"
        })]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request parameters"
      })
    }), `
`, _jsx(_components.p, {
      children: "The activation request requires the following query parameters:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "pid"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The license identification defined by SKU, validity period, and category."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "licenseKey"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The unique ID of the device. For example, the SN number, Mac address, and so on. The string length must be less than 64 bytes. Case-sensitive, and must already be whitelisted through pre-authorization."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "appid"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The unique identifier assigned by Agora to your project."
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request example"
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "curl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --location"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --request"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " POST"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'https://api.agora.io/global/dabiz/license/v2/active?pid=02F5xxxxxxxxxxxxxxxxxxxxxxxxEC30&licenseKey=111&appid=a6d6xxxxxxxxxxxxxxxxxxxxxxxxf75e'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "--header "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'Authorization: <http_basic_auth>'"
            })]
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Response parameters"
      }), `
If the status code is `, _jsx(_components.code, {
        children: "200"
      }), ", the request is successful, and the response body contains the following parameters:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "pid"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The license identification you passed in the request."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "license"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The value of the active license. Case-sensitive. Save this value; you need it for renewal operations."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "licenseKey"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The device unique identifier you passed in the request."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "expireTime"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The timestamp when the license expires."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "activationTime"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The timestamp when the license was activated."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "skuView"
            })
          }), _jsx(_components.td, {
            children: "Object"
          }), _jsxs(_components.td, {
            children: ["The SKU capability set. Only the ", _jsx(_components.code, {
              children: "product"
            }), " field is meaningful; ", _jsx(_components.code, {
              children: "name"
            }), ", ", _jsx(_components.code, {
              children: "mediaType"
            }), ", ", _jsx(_components.code, {
              children: "minutes"
            }), ", and ", _jsx(_components.code, {
              children: "period"
            }), " are no longer used."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Response example"
      })
    }), `
`, _jsx(_components.p, {
      children: "The following is a response example for a successful activation request:"
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
              children: '   "code"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "200"
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
              children: '   "data"'
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
              children: '      "pid"'
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
              children: '"E4D6xxxxxxxxxxxxxxxxxxxxxxxx7E79"'
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
              children: '      "license"'
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
              children: '"1D65xxxxxxxxxxxxxxxxxxxxxxxx6016"'
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
              children: '      "licenseKey"'
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
              children: '"1234xxxxxxxxxxx1234"'
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
              children: '      "expireTime"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1700000000"
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
              children: '      "activationTime"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1699000000"
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
              children: '      "skuView"'
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
              children: '         "product"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      }"
            })
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
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["If the request fails, the status code is not ", _jsx(_components.code, {
        children: "200"
      }), ". Follow the returned status code and the ", _jsx(_components.code, {
        children: "message"
      }), " field in the response body to troubleshoot errors."]
    }), `
`, _jsx(_components.h3, {
      id: "use-the-license",
      children: "Use the license"
    }), `
`, _jsx(_components.p, {
      children: "After successfully activating a license, you write the license to the device and use it in the SDK. Take the following steps to use the license:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Receive an activated license from the server."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Write the license to the device. Ensure that the license written to each device is correct and unique. There are two common methods to write the license information to your device:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Write the license to a file on the device, and have your program read it."
          }), `
`, _jsx(_components.li, {
            children: "The manufacturer burns the license into the device during production, and the device reads it directly."
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Device reads license:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "If the device successfully reads the license, proceed to the next step."
          }), `
`, _jsx(_components.li, {
            children: "If the device fails to read the license, troubleshoot the problem and write the license again."
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the IoT SDK, call ", _jsx(_components.code, {
            children: "agora_rtc_init"
          }), " and pass the license in the ", _jsx(_components.code, {
            children: "license_value"
          }), " parameter of ", _jsx(_components.code, {
            children: "rtc_service_option_t"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "The IoT SDK automatically verifies the license when a user joins a channel."
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "If the license verification is successful, the user can use the functions of the SDK."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["If the license verification fails, the SDK kicks the user out of the channel and triggers the ", _jsx(_components.code, {
                children: "on_license_validation_failure"
              }), " callback with an error code, so your app can report and handle the failure explicitly:"]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "static"
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
                      children: " __on_license_validation_failure"
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
                      children: "connection_id_t"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: " conn_id"
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
                      children: "int"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: " reason"
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
                      children: "    printf"
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
                      children: '"License verification failed, reason: '
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "%d\\n"
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
                      children: "}"
                    })
                  })]
                })
              })
            }), `
`, _jsx(_components.p, {
              children: "Assign the handler in your event handler setup:"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsx(_components.code, {
                  children: _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "event_handler->on_license_validation_failure "
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
                      children: " __on_license_validation_failure;"
                    })]
                  })
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
    }), `
`, _jsx(_components.h3, {
      id: "check-license-usage",
      children: "Check license usage"
    }), `
`, _jsxs(_components.p, {
      children: ["Check your license usage in ", _jsx(_components.a, {
        href: "https://console.agora.io",
        children: "Agora Console"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "renew-a-license",
      children: "Renew a license"
    }), `
`, _jsx(_components.p, {
      children: "Agora recommends renewing a license at least 30 days before it expires, to avoid a service interruption. You can only renew a license once its remaining validity period is shorter than the validity period of the renewal you request."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "POST"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Access point: ", _jsx(_components.code, {
          children: "https://api.agora.io/global/dabiz/license/v2/renew"
        })]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request parameters"
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Required"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "appid"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "The unique identifier assigned by Agora to your project."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "renewId"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "No"
          }), _jsxs(_components.td, {
            children: ["The license renewal identifier, defined by SKU, validity period, and category. Contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), " to obtain a ", _jsx(_components.code, {
              children: "renewId"
            }), ". If you don't provide one, Agora selects one automatically."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "license"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "The license value to renew. Case-sensitive."
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request example"
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "curl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --location"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --request"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " POST"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'https://api.agora.io/global/dabiz/license/v2/renew?appid=a6d6xxxxxxxxxxxxxxxxxxxxxxxxf75e&renewId=4750xxxxxxxxxxxxxxxxxxxxxxxx6270&license=85B3xxxxxxxxxxxxxxxxxxxxxxxx656F'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "--header "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'Authorization: <http_basic_auth>'"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Response parameters"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is ", _jsx(_components.code, {
        children: "200"
      }), ", the request is successful, and the response body contains the following parameters:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "licenseKey"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The device unique identifier."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "license"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The renewed license value."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "renewTimes"
            })
          }), _jsx(_components.td, {
            children: "Integer"
          }), _jsx(_components.td, {
            children: "The number of times this license has been renewed."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "lastRenewTime"
            })
          }), _jsx(_components.td, {
            children: "Integer"
          }), _jsx(_components.td, {
            children: "The timestamp of the most recent renewal."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "activationTime"
            })
          }), _jsx(_components.td, {
            children: "Integer"
          }), _jsx(_components.td, {
            children: "The timestamp when the license was activated."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "expireTime"
            })
          }), _jsx(_components.td, {
            children: "Integer"
          }), _jsx(_components.td, {
            children: "The timestamp when the renewed license expires."
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Response example"
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
              children: '  "code"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "200"
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
              children: '  "message"'
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
              children: '"license renewed successfully"'
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
              children: '  "data"'
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
              children: '    "licenseKey"'
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
              children: '"1234xxxxxxxxxxx1234"'
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
              children: '    "license"'
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
              children: '"85B3xxxxxxxxxxxxxxxxxxxxxxxx656F"'
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
              children: '    "renewTimes"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
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
              children: '    "lastRenewTime"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1700644272"
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
              children: '    "activationTime"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1699000000"
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
              children: '    "expireTime"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1705913065"
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
`, _jsx(_components.h3, {
      id: "check-for-expiring-licenses",
      children: "Check for expiring licenses"
    }), `
`, _jsx(_components.p, {
      children: "Query which of your licenses are expiring soon so you can renew them in time."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "GET"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Access point: ", _jsx(_components.code, {
          children: "https://api.agora.io/global/dabiz/license/v3/projects/{appId}/pids/{pid}/expiringLicenses"
        })]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Path parameters"
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "appId"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The unique identifier assigned by Agora to your project."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "pid"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The license identification used when you activated the license."
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Query parameters"
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "expiringDay"
            })
          }), _jsx(_components.td, {
            children: "Integer"
          }), _jsxs(_components.td, {
            children: ["The number of days until expiry to check for. Accepts ", _jsx(_components.code, {
              children: "60"
            }), " or ", _jsx(_components.code, {
              children: "90"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "page"
            })
          }), _jsx(_components.td, {
            children: "Integer"
          }), _jsxs(_components.td, {
            children: ["The page number to return. Optional, defaults to ", _jsx(_components.code, {
              children: "1"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "size"
            })
          }), _jsx(_components.td, {
            children: "Integer"
          }), _jsxs(_components.td, {
            children: ["The number of licenses to return per page. Optional, defaults to ", _jsx(_components.code, {
              children: "100"
            }), ", maximum ", _jsx(_components.code, {
              children: "100"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request example"
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "curl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --location"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --request"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " GET"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'https://api.agora.io/global/dabiz/license/v3/projects/{appId}/pids/{pid}/expiringLicenses?expiringDay=90&size=10&page=1'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "--header "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'Authorization: <http_basic_auth>'"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Response parameters"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is ", _jsx(_components.code, {
        children: "200"
      }), ", the request is successful, and the response body contains the following parameters:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "count"
            })
          }), _jsx(_components.td, {
            children: "Integer"
          }), _jsx(_components.td, {
            children: "The number of expiring licenses found."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "licenseInfos"
            })
          }), _jsx(_components.td, {
            children: "Array"
          }), _jsxs(_components.td, {
            children: ["The list of expiring licenses. Each entry contains ", _jsx(_components.code, {
              children: "licenseKey"
            }), " (the device unique identifier), ", _jsx(_components.code, {
              children: "license"
            }), " (the expiring license value), ", _jsx(_components.code, {
              children: "activeTime"
            }), " (the activation timestamp, in RFC3339 format), and ", _jsx(_components.code, {
              children: "expireTime"
            }), " (the expiration timestamp, in RFC3339 format)."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Response example"
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
              children: '  "code"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "200"
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
              children: '  "data"'
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
              children: '    "count"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
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
              children: '    "list"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "license"'
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
              children: '"698AxxxxxxxxxxxxxxxxxxxxxxxxEDDB0"'
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
              children: '        "licenseKey"'
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
              children: '"1234xxxxxxxxxxx1234"'
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
              children: '        "activeTime"'
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
              children: '"2024-12-02T08:15:39Z"'
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
              children: '        "expireTime"'
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
              children: '"2024-12-05T08:15:39Z"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    ]"
            })
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
`, _jsx(_components.h3, {
      id: "check-renewal-orders",
      children: "Check renewal orders"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "GET"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Access point: ", _jsx(_components.code, {
          children: "https://api.agora.io/global/dabiz/license/v3/projects/{appId}/renewals"
        })]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Path parameters"
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "appId"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The unique identifier assigned by Agora to your project."
          })]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request example"
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "curl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --location"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --request"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " GET"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'https://api.agora.io/global/dabiz/license/v3/projects/{appId}/renewals'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "--header "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'Authorization: <http_basic_auth>'"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Response parameters"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is ", _jsx(_components.code, {
        children: "200"
      }), ", the request is successful, and the response body contains a list of renewal orders. Each order includes ", _jsx(_components.code, {
        children: "renewId"
      }), ", ", _jsx(_components.code, {
        children: "pid"
      }), ", the renewal type, the renewal duration, ", _jsx(_components.code, {
        children: "totalCount"
      }), ", ", _jsx(_components.code, {
        children: "allocateCount"
      }), ", and ", _jsx(_components.code, {
        children: "createTime"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "The content in this section completes the information on this page, or points you to documentation that explains other aspects of this product."
    }), `
`, _jsxs(_components.h3, {
      id: "difference-between-licensevalue-and-licensekey",
      children: ["Difference between ", _jsx(_components.code, {
        children: "licenseValue"
      }), " and ", _jsx(_components.code, {
        children: "licenseKey"
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: _jsx(_components.code, {
          children: "licenseValue"
        })
      }), " is the ID of each license. You need this value to renew a license. You receive the activated ", _jsx(_components.code, {
        children: "licenseValue"
      }), " in the response when you call the activation API."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: _jsx(_components.code, {
          children: "licenseKey"
        })
      }), " is the unique identifier of the device. For example, the SN number, or the Mac address. The string length must be less than 64 bytes. When a user calls the activation API to activate a license for a device, the user consumes the license which is passed in the ", _jsx(_components.code, {
        children: "licenseKey"
      }), " parameter. Users can perform pre-authorization operations, so that only the ", _jsx(_components.code, {
        children: "licenseKey"
      }), " in the whitelist can successfully activate the license."]
    }), `
`, _jsx(_components.h3, {
      id: "trial-and-commercial-license",
      children: "Trial and commercial license"
    }), `
`, _jsx(_components.p, {
      children: "To facilitate development and testing, Agora offers the following types of licenses:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Trial license"
        }), ": For integration-testing and product debugging. Every developer gets 10 free trial licenses, valid for 6 months, each including a quota of 150 standard minutes per month. Minimum validity period for additional trial licenses you request is 3 days."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Commercial license"
        }), ": For the launch stage of the product. Minimum validity period is 1 year."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Best practice is to use a trial license before the product is officially launched. To switch to a commercial license, follow these steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), " to apply for a commercial license. After successfully applying for a license, you can check the PID of the license in the ", _jsx(_components.strong, {
          children: "License Usage"
        }), " page of the Agora Console."]
      }), `
`, _jsxs(_components.li, {
        children: ["Call the activation API to activate a new license and pass in the PID of the new license and the ", _jsx(_components.code, {
          children: "licenseKey"
        }), " which is consistent with the old license."]
      }), `
`, _jsx(_components.li, {
        children: "Write the new license to the device and read it."
      }), `
`, _jsx(_components.li, {
        children: "Call the initialization method of the SDK with the new license."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "api-reference",
      children: "API reference"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html#a6187076d897f0b56cb20942368c15aaa",
          children: _jsx(_components.code, {
            children: "agora_rtc_init()"
          })
        })
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
