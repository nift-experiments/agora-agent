import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Custom recording configuration",
  description: "Media Broadcast RESTful API reference."
};
export let _markdown = `

<CalloutContainer type="info">
  <CalloutDescription>
    Custom recording enables you to use third-party cloud storage services, while standard recording does not.
  </CalloutDescription>
</CalloutContainer>

## Set custom recording configuration [#set-custom-recording-configuration]

Sets the custom recording configuration for all live streams under the specified entry point.

### HTTP request [#http-request]

\`\`\`bash
PATCH https://api.agora.io/v1/projects/{appid}/fls/entry_points/{entry_point}/settings/record/custom/regions/{region}
\`\`\`

#### Path parameter [#path-parameter]

| Parameter     | Type   | Description                                             |
| :------------ | :----- | :------------------------------------------------------ |
| \`appid\`       | String | Required. The App ID corresponding to the entry point.  |
| \`entry_point\` | String | Required. The entry point name.                         |
| \`region\`      | String | Required. The configured region when adding the domain. |

#### Request body [#request-body]

The request body is in the JSON Object type, and contains the following fields:

| Field           | Type        | Description                                                                                                                                                       |
| :-------------- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`mp4Config\`     | JSON Object | Optional. For the configuration of the MP4 recording files, see [mp4Config](#mp4config).                                                                          |
| \`hlsConfig\`     | JSON Object | Optional. For the configuration of the HLS recording files, see [HlsConfig](#hlsconfig).                                                                          |
| \`storageConfig\` | JSON Object | Optional (required when setting recording options for the first time). For the storage configuration of the recording files, see [StorageConfig](#storageconfig). |

### HTTP response [#http-response]

If the returned HTTP status code is 200, the request is successful.

If the returned HTTP status code is not 200, the request fails. You can refer to the [HTTP status code](#http-code) for possible reasons.

### Example [#example]

**Request line**

\`\`\`bash
PATCH https://api.agora.io/v1/projects/{your_appid}/fls/entry_points/live/settings/record/custom/regions/cn HTTP/1.1
\`\`\`

**Request body**

\`\`\`json
{
    "hlsConfig": {
        "enabled": true
    },
    "mp4Config": {
        "enabled": true
    },
    "storageConfig": {
        "accessKey": "{your access key}",
        "bucket": "{your bucket}",
        "region": 3,
        "secretKey": "{your secret key}",
        "vendor": 2
    }
}
\`\`\`

**Response line**

\`\`\`bash
HTTP/1.1 200 OK
\`\`\`

## Get custom recording configuration [#get-custom-recording-configuration]

Gets the custom recording configuration for the specified entry point.

### HTTP request [#http-request-1]

\`\`\`bash
GET https://api.agora.io/v1/projects/{appid}/fls/entry_points/{entry_point}/settings/record/custom/regions/{region}
\`\`\`

#### Path parameter [#path-parameter-1]

| Parameter     | Type   | Description                                             |
| :------------ | :----- | :------------------------------------------------------ |
| \`appid\`       | String | Required. The App ID corresponding to the entry point.  |
| \`entry_point\` | String | Required. The entry point name.                         |
| \`region\`      | String | Required. The configured region when adding the domain. |

### HTTP response [#http-response-1]

If the returned HTTP status code is 200, the request is successful, and the response body contains the following fields:

| Field           | Type        | Description                                                                                |
| :-------------- | :---------- | :----------------------------------------------------------------------------------------- |
| \`mp4Config\`     | JSON Object | For the configuration of the MP4 recording files, see [mp4Config](#mp4config).             |
| \`hlsConfig\`     | JSON Object | For the configuration of the HLS recording files, see [HlsConfig](#hlsconfig).             |
| \`storageConfig\` | JSON Object | For the storage configuration of the recording files, see [StorageConfig](#storageconfig). |

If the returned HTTP status code is not 200, the request fails. You can refer to the [HTTP status code](#http-code) for possible reasons.

### Example [#example-1]

**Request line**

\`\`\`bash
GET https://api.agora.io/v1/projects/{your_appid}/fls/entry_points/live/settings/record/custom/regions/cn HTTP/1.1
\`\`\`

**Response line**

\`\`\`bash
HTTP/1.1 200 OK
\`\`\`

**Request body**

\`\`\`json
{
    "hlsConfig": {
        "enabled": true
    },
    "mp4Config": {
        "enabled": true
    },
    "storageConfig": {
        "accessKey": "{your accesskey}",
        "region": 3,
        "secretKey": "{your secretkey}",
        "vendor": 2
    }
}
\`\`\`

## Parameter type [#parameter-type]

### mp4Config [#mp4config]

The configuration of the MP4 recording files, including the following fields:

\`enabled\`: Bool type, optional. Whether to enable recording in the MP4 format.

### HlsConfig [#hlsconfig]

The configuration of the HLS recording files, including the following fields:

\`enabled\`: Bool type, optional. Whether to enable recording in the HLS format.

### StorageConfig [#storageconfig]

The storage configuration of the recording files, including the following fields:

* \`vendor\`: Number. The third-party cloud storage vendor.

  * \`0\`: [Qiniu Cloud](https://www.qiniu.com/en/products/kodo)
  * \`1\`: [Amazon S3](https://aws.amazon.com/s3/?nc1=h_ls)
  * \`2\`: [Alibaba Cloud](https://www.alibabacloud.com/product/oss)
  * \`3\`: [Tencent Cloud](https://intl.cloud.tencent.com/product/cos)
  * \`4\`: [Kingsoft Cloud](https://en.ksyun.com/nv/product/KS3.html)
  * \`5\`: [Microsoft Azure](https://azure.microsoft.com/en-us/services/storage/blobs/)
  * \`6\`: [Google Cloud](https://cloud.google.com/storage)
  * \`7\`: [Huawei Cloud](https://www.huaweicloud.com/intl/en-us/product/obs.html)
  * \`8\`: [Baidu AI Cloud](https://intl.cloud.baidu.com/product/bos.html)

* \`region\`: Number. The region information specified for the third-party cloud storage. The recording service only supports regions in the following lists:
  <CalloutContainer type="info" />

In order to improve the success rate and real-time performance when uploading recording files, if you set the \`region\` of the cloud recording service in the \`acquire\` method, make sure that the region of the third-party cloud storage corresponds to the same geographical region. For example, if the region of the cloud recording service is set to \`NA\` (North America), the third-party cloud storage needs to be set to a location within North America.
\\:::

<details>
  <summary>
    When the third-party cloud storage is Qiniu Cloud (

    <code>vendor</code>

     \\= 0):
  </summary>

  <ul>
    <li>
      <code>0</code>

      : East China
    </li>

    <li>
      <code>1</code>

      : North China 
    </li>

    <li>
      <code>2</code>

      : South China
    </li>

    <li>
      <code>3</code>

      : North America 
    </li>

    <li>
      <code>4</code>

      : Southeast Asia
    </li>
  </ul>
</details>

<details>
  <summary>
    When the third-party cloud storage is Amazon S3 (

    <code>vendor</code>

     \\= 1):
  </summary>

  <ul>
    <li>
      <code>0</code>

      ：US_EAST_1
    </li>

    <li>
      <code>1</code>

      ：US_EAST_2
    </li>

    <li>
      <code>2</code>

      ：US_WEST_1
    </li>

    <li>
      <code>3</code>

      ：US_WEST_2
    </li>

    <li>
      <code>4</code>

      ：EU_WEST_1
    </li>

    <li>
      <code>5</code>

      ：EU_WEST_2
    </li>

    <li>
      <code>6</code>

      ：EU_WEST_3
    </li>

    <li>
      <code>7</code>

      ：EU_CENTRAL_1
    </li>

    <li>
      <code>8</code>

      ：AP_SOUTHEAST_1
    </li>

    <li>
      <code>9</code>

      ：AP_SOUTHEAST_2
    </li>

    <li>
      <code>10</code>

      ：AP_NORTHEAST_1
    </li>

    <li>
      <code>11</code>

      ：AP_NORTHEAST_2
    </li>

    <li>
      <code>12</code>

      ：SA_EAST_1
    </li>

    <li>
      <code>13</code>

      ：CA_CENTRAL_1
    </li>

    <li>
      <code>14</code>

      ：AP_SOUTH_1
    </li>

    <li>
      <code>15</code>

      ：CN_NORTH_1
    </li>

    <li>
      <code>16</code>

      ：CN_NORTHWEST_1
    </li>

    <li>
      <code>18</code>

      ：AF_SOUTH_1
    </li>

    <li>
      <code>19</code>

      ：AP_EAST_1
    </li>

    <li>
      <code>20</code>

      ：AP_NORTHEAST_3
    </li>

    <li>
      <code>21</code>

      ：EU_NORTH_1
    </li>

    <li>
      <code>22</code>

      ：ME_SOUTH_1
    </li>

    <li>
      <code>24</code>

      ：AP_SOUTHEAST_3
    </li>

    <li>
      <code>25</code>

      ：EU_SOUTH_1
    </li>

    <li>
      <code>26</code>

      ：AWS_REGION_NUM
    </li>
  </ul>
</details>

<details>
  <summary>
    When the third-party cloud storage is Alibaba Cloud (

    <code>vendor</code>

     \\= 2):
  </summary>

  <ul>
    <li>
      <code>0</code>

      : CN_Hangzhou 
    </li>

    <li>
      <code>1</code>

      : CN_Shanghai 
    </li>

    <li>
      <code>2</code>

      : CN_Qingdao 
    </li>

    <li>
      <code>3</code>

      : CN_Beijing
    </li>

    <li>
      <code>4</code>

      : CN_Zhangjiakou 
    </li>

    <li>
      <code>5</code>

      : CN_Huhehaote 
    </li>

    <li>
      <code>6</code>

      : CN_Shenzhen 
    </li>

    <li>
      <code>7</code>

      : CN_Hongkong 
    </li>

    <li>
      <code>8</code>

      : US_West_1 
    </li>

    <li>
      <code>9</code>

      : US_East_1 
    </li>

    <li>
      <code>10</code>

      : AP_Southeast_1 
    </li>

    <li>
      <code>11</code>

      : AP_Southeast_2 
    </li>

    <li>
      <code>12</code>

      : AP_Southeast_3 
    </li>

    <li>
      <code>13</code>

      : AP_Southeast_5 
    </li>

    <li>
      <code>14</code>

      : AP_Northeast_1 
    </li>

    <li>
      <code>15</code>

      : AP_South_1 
    </li>

    <li>
      <code>16</code>

      : EU_Central_1 
    </li>

    <li>
      <code>17</code>

      : EU_West_1 
    </li>

    <li>
      <code>18</code>

      : EU_East_1
    </li>

    <li>
      <code>19</code>

      ：AP_Southeast_6
    </li>

    <li>
      <code>20</code>

      ：CN_Heyuan
    </li>

    <li>
      <code>21</code>

      ：CN_Guangzhou
    </li>

    <li>
      <code>22</code>

      ：CN_Chengdu
    </li>
  </ul>

  For details, see <a href="https://www.alibabacloud.com/help/doc-detail/31837.html">Alibaba Cloud Documentation</a>.
</details>

<details>
  <summary>
    When the third-party cloud storage is Tencent Cloud (

    <code>vendor</code>

     \\= 3):
  </summary>

  <ul>
    <li>
      <code>0</code>

      ：AP_Beijing_1
    </li>

    <li>
      <code>1</code>

      ：AP_Beijing
    </li>

    <li>
      <code>2</code>

      ：AP_Shanghai
    </li>

    <li>
      <code>3</code>

      ：AP_Guangzhou
    </li>

    <li>
      <code>4</code>

      ：AP_Chengdu 
    </li>

    <li>
      <code>5</code>

      ：AP_Chongqing 
    </li>

    <li>
      <code>6</code>

      ：AP_Shenzhen_FSI 
    </li>

    <li>
      <code>7</code>

      ：AP_Shanghai_FSI 
    </li>

    <li>
      <code>8</code>

      ：AP_Beijing_FSI 
    </li>

    <li>
      <code>9</code>

      ：AP_Hongkong 
    </li>

    <li>
      <code>10</code>

      ：AP_Singapore 
    </li>

    <li>
      <code>11</code>

      ：AP_Mumbai 
    </li>

    <li>
      <code>12</code>

      ：AP_Seoul 
    </li>

    <li>
      <code>13</code>

      ：AP_Bangkok 
    </li>

    <li>
      <code>14</code>

      ：AP_Tokyo 
    </li>

    <li>
      <code>15</code>

      ：NA_Siliconvalley 
    </li>

    <li>
      <code>16</code>

      ：NA_Ashburn 
    </li>

    <li>
      <code>17</code>

      ：NA_Toronto 
    </li>

    <li>
      <code>18</code>

      ：EU_Frankfurt 
    </li>

    <li>
      <code>19</code>

      ：EU_Moscow
    </li>
  </ul>
</details>

<details>
  <summary>
    When the third-party cloud storage is Kingsoft Cloud (

    <code>vendor</code>

     \\= 4):
  </summary>

  <ul>
    <li>
      <code>0</code>

      ：CN_Hangzhou
    </li>

    <li>
      <code>1</code>

      ：CN_Shanghai
    </li>

    <li>
      <code>2</code>

      ：CN_Qingdao
    </li>

    <li>
      <code>3</code>

      ：CN_Beijing
    </li>

    <li>
      <code>4</code>

      ：CN_Guangzhou
    </li>

    <li>
      <code>5</code>

      ：CN_Hongkong
    </li>

    <li>
      <code>6</code>

      ：JR_Beijing
    </li>

    <li>
      <code>7</code>

      ：JR_Shanghai
    </li>

    <li>
      <code>8</code>

      ：NA_Russia_1
    </li>

    <li>
      <code>9</code>

      ：NA_Singapore_1
    </li>
  </ul>
</details>

<details>
  <summary>
    When the third-party cloud storage is Microsoft Azure (

    <code>vendor</code>

     \\= 5): 
  </summary>

  <summary>
    The 

    <code>region</code>

     parameter has no effect, whether or not it is set.
  </summary>
</details>

<details>
  <summary>
    When the third-party cloud storage is Google Cloud (

    <code>vendor</code>

     \\= 6): 
  </summary>

  <summary>
    The 

    <code>region</code>

     parameter has no effect, whether or not it is set.
  </summary>
</details>

<details>
  <summary>
    When the third-party cloud storage is Huawei Cloud (

    <code>vendor</code>

     \\= 7):
  </summary>

  <ul>
    <li>
      <code>0</code>

      ：CN_North_1
    </li>

    <li>
      <code>1</code>

      ：CN_North_4
    </li>

    <li>
      <code>2</code>

      ：CN_East_2
    </li>

    <li>
      <code>3</code>

      ：CN_East_3
    </li>

    <li>
      <code>4</code>

      ：CN_South_1
    </li>

    <li>
      <code>5</code>

      ：CN_Southwest_2
    </li>

    <li>
      <code>6</code>

      ：AP_Southeast_1
    </li>

    <li>
      <code>7</code>

      ：AP_Southeast_2
    </li>

    <li>
      <code>8</code>

      ：AP_Southeast_3
    </li>

    <li>
      <code>9</code>

      ：AF_South_1
    </li>

    <li>
      <code>10</code>

      ：SA_Argentina_1
    </li>

    <li>
      <code>11</code>

      ：SA_Peru_1
    </li>

    <li>
      <code>12</code>

      ：NA_Mexico_1
    </li>

    <li>
      <code>13</code>

      ：SA_Brazil_1
    </li>

    <li>
      <code>14</code>

      ：LA_South_2
    </li>

    <li>
      <code>15</code>

      ：SA_Chile_1
    </li>
  </ul>
</details>

<details>
  <summary>
    When the third-party cloud storage is Baidu AI Cloud (

    <code>vendor</code>

     \\= 8):
  </summary>

  <ul>
    <li>
      <code>0</code>

      ：Beijing
    </li>

    <li>
      <code>1</code>

      ：Baoding
    </li>

    <li>
      <code>2</code>

      ：Suzhou
    </li>

    <li>
      <code>3</code>

      ：Guangzhou
    </li>

    <li>
      <code>4</code>

      ：Hongkong
    </li>

    <li>
      <code>5</code>

      ：Singapore
    </li>

    <li>
      <code>6</code>

      ：Wuhan
    </li>

    <li>
      <code>7</code>

      ：Shanghai
    </li>
  </ul>
</details>

* \`bucket\`: String. The bucket name of the third-party cloud storage.

* \`accessKey\`: String. The access key of the third-party cloud storage. Agora suggests that you use a write-only access key.

* \`secretKey\`: String. The secret key of the third-party cloud storage.

<a name="http-code" />

## HTTP status code [#http-status-code]

| Status code | Description                                                                                                                                              |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 200         | The request succeeds.                                                                                                                                    |
| 400         | The parameter is invalid, for example the \`appid\` or the \`entry_point\` is empty, or the \`region\` parameter value is invalid.                             |
| 401         | Unauthorized (the customer ID and the customer secret do not match).                                                                                     |
| 404         | The server cannot find the resource according to the request, which means the requested entry point does not exist or the requested URI path is invalid. |
| 500         | An internal error occurs in the server, so the server is not able to complete the request.                                                               |
| 504         | An internal error occurs in the server. The gateway or the proxy server did not receive a timely request from the remote server.                         |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Custom recording enables you to use third-party cloud storage services, while standard recording does not."
  }, {
    heading: "set-custom-recording-configuration",
    content: "Sets the custom recording configuration for all live streams under the specified entry point."
  }, {
    heading: "path-parameter",
    content: "Parameter"
  }, {
    heading: "path-parameter",
    content: "Type"
  }, {
    heading: "path-parameter",
    content: "Description"
  }, {
    heading: "path-parameter",
    content: "`appid`"
  }, {
    heading: "path-parameter",
    content: "String"
  }, {
    heading: "path-parameter",
    content: "Required. The App ID corresponding to the entry point."
  }, {
    heading: "path-parameter",
    content: "`entry_point`"
  }, {
    heading: "path-parameter",
    content: "String"
  }, {
    heading: "path-parameter",
    content: "Required. The entry point name."
  }, {
    heading: "path-parameter",
    content: "`region`"
  }, {
    heading: "path-parameter",
    content: "String"
  }, {
    heading: "path-parameter",
    content: "Required. The configured region when adding the domain."
  }, {
    heading: "request-body",
    content: "The request body is in the JSON Object type, and contains the following fields:"
  }, {
    heading: "request-body",
    content: "Field"
  }, {
    heading: "request-body",
    content: "Type"
  }, {
    heading: "request-body",
    content: "Description"
  }, {
    heading: "request-body",
    content: "`mp4Config`"
  }, {
    heading: "request-body",
    content: "JSON Object"
  }, {
    heading: "request-body",
    content: "Optional. For the configuration of the MP4 recording files, see mp4Config."
  }, {
    heading: "request-body",
    content: "`hlsConfig`"
  }, {
    heading: "request-body",
    content: "JSON Object"
  }, {
    heading: "request-body",
    content: "Optional. For the configuration of the HLS recording files, see HlsConfig."
  }, {
    heading: "request-body",
    content: "`storageConfig`"
  }, {
    heading: "request-body",
    content: "JSON Object"
  }, {
    heading: "request-body",
    content: "Optional (required when setting recording options for the first time). For the storage configuration of the recording files, see StorageConfig."
  }, {
    heading: "http-response",
    content: "If the returned HTTP status code is 200, the request is successful."
  }, {
    heading: "http-response",
    content: "If the returned HTTP status code is not 200, the request fails. You can refer to the HTTP status code for possible reasons."
  }, {
    heading: "example",
    content: "**Request line**"
  }, {
    heading: "example",
    content: "**Request body**"
  }, {
    heading: "example",
    content: "**Response line**"
  }, {
    heading: "get-custom-recording-configuration",
    content: "Gets the custom recording configuration for the specified entry point."
  }, {
    heading: "path-parameter-1",
    content: "Parameter"
  }, {
    heading: "path-parameter-1",
    content: "Type"
  }, {
    heading: "path-parameter-1",
    content: "Description"
  }, {
    heading: "path-parameter-1",
    content: "`appid`"
  }, {
    heading: "path-parameter-1",
    content: "String"
  }, {
    heading: "path-parameter-1",
    content: "Required. The App ID corresponding to the entry point."
  }, {
    heading: "path-parameter-1",
    content: "`entry_point`"
  }, {
    heading: "path-parameter-1",
    content: "String"
  }, {
    heading: "path-parameter-1",
    content: "Required. The entry point name."
  }, {
    heading: "path-parameter-1",
    content: "`region`"
  }, {
    heading: "path-parameter-1",
    content: "String"
  }, {
    heading: "path-parameter-1",
    content: "Required. The configured region when adding the domain."
  }, {
    heading: "http-response-1",
    content: "If the returned HTTP status code is 200, the request is successful, and the response body contains the following fields:"
  }, {
    heading: "http-response-1",
    content: "Field"
  }, {
    heading: "http-response-1",
    content: "Type"
  }, {
    heading: "http-response-1",
    content: "Description"
  }, {
    heading: "http-response-1",
    content: "`mp4Config`"
  }, {
    heading: "http-response-1",
    content: "JSON Object"
  }, {
    heading: "http-response-1",
    content: "For the configuration of the MP4 recording files, see mp4Config."
  }, {
    heading: "http-response-1",
    content: "`hlsConfig`"
  }, {
    heading: "http-response-1",
    content: "JSON Object"
  }, {
    heading: "http-response-1",
    content: "For the configuration of the HLS recording files, see HlsConfig."
  }, {
    heading: "http-response-1",
    content: "`storageConfig`"
  }, {
    heading: "http-response-1",
    content: "JSON Object"
  }, {
    heading: "http-response-1",
    content: "For the storage configuration of the recording files, see StorageConfig."
  }, {
    heading: "http-response-1",
    content: "If the returned HTTP status code is not 200, the request fails. You can refer to the HTTP status code for possible reasons."
  }, {
    heading: "example-1",
    content: "**Request line**"
  }, {
    heading: "example-1",
    content: "**Response line**"
  }, {
    heading: "example-1",
    content: "**Request body**"
  }, {
    heading: "mp4config",
    content: "The configuration of the MP4 recording files, including the following fields:"
  }, {
    heading: "mp4config",
    content: "`enabled`: Bool type, optional. Whether to enable recording in the MP4 format."
  }, {
    heading: "hlsconfig",
    content: "The configuration of the HLS recording files, including the following fields:"
  }, {
    heading: "hlsconfig",
    content: "`enabled`: Bool type, optional. Whether to enable recording in the HLS format."
  }, {
    heading: "storageconfig",
    content: "The storage configuration of the recording files, including the following fields:"
  }, {
    heading: "storageconfig",
    content: "`vendor`: Number. The third-party cloud storage vendor."
  }, {
    heading: "storageconfig",
    content: "`0`: Qiniu Cloud"
  }, {
    heading: "storageconfig",
    content: "`1`: Amazon S3"
  }, {
    heading: "storageconfig",
    content: "`2`: Alibaba Cloud"
  }, {
    heading: "storageconfig",
    content: "`3`: Tencent Cloud"
  }, {
    heading: "storageconfig",
    content: "`4`: Kingsoft Cloud"
  }, {
    heading: "storageconfig",
    content: "`5`: Microsoft Azure"
  }, {
    heading: "storageconfig",
    content: "`6`: Google Cloud"
  }, {
    heading: "storageconfig",
    content: "`7`: Huawei Cloud"
  }, {
    heading: "storageconfig",
    content: "`8`: Baidu AI Cloud"
  }, {
    heading: "storageconfig",
    content: "`region`: Number. The region information specified for the third-party cloud storage. The recording service only supports regions in the following lists:"
  }, {
    heading: "storageconfig",
    content: "In order to improve the success rate and real-time performance when uploading recording files, if you set the `region` of the cloud recording service in the `acquire` method, make sure that the region of the third-party cloud storage corresponds to the same geographical region. For example, if the region of the cloud recording service is set to `NA` (North America), the third-party cloud storage needs to be set to a location within North America.\n\\:::"
  }, {
    heading: "storageconfig",
    content: "For details, see Alibaba Cloud Documentation."
  }, {
    heading: "storageconfig",
    content: "`bucket`: String. The bucket name of the third-party cloud storage."
  }, {
    heading: "storageconfig",
    content: "`accessKey`: String. The access key of the third-party cloud storage. Agora suggests that you use a write-only access key."
  }, {
    heading: "storageconfig",
    content: "`secretKey`: String. The secret key of the third-party cloud storage."
  }, {
    heading: "http-status-code",
    content: "Status code"
  }, {
    heading: "http-status-code",
    content: "Description"
  }, {
    heading: "http-status-code",
    content: "200"
  }, {
    heading: "http-status-code",
    content: "The request succeeds."
  }, {
    heading: "http-status-code",
    content: "400"
  }, {
    heading: "http-status-code",
    content: "The parameter is invalid, for example the `appid` or the `entry_point` is empty, or the `region` parameter value is invalid."
  }, {
    heading: "http-status-code",
    content: "401"
  }, {
    heading: "http-status-code",
    content: "Unauthorized (the customer ID and the customer secret do not match)."
  }, {
    heading: "http-status-code",
    content: "404"
  }, {
    heading: "http-status-code",
    content: "The server cannot find the resource according to the request, which means the requested entry point does not exist or the requested URI path is invalid."
  }, {
    heading: "http-status-code",
    content: "500"
  }, {
    heading: "http-status-code",
    content: "An internal error occurs in the server, so the server is not able to complete the request."
  }, {
    heading: "http-status-code",
    content: "504"
  }, {
    heading: "http-status-code",
    content: "An internal error occurs in the server. The gateway or the proxy server did not receive a timely request from the remote server."
  }],
  headings: [{
    id: "set-custom-recording-configuration",
    content: "Set custom recording configuration"
  }, {
    id: "http-request",
    content: "HTTP request"
  }, {
    id: "path-parameter",
    content: "Path parameter"
  }, {
    id: "request-body",
    content: "Request body"
  }, {
    id: "http-response",
    content: "HTTP response"
  }, {
    id: "example",
    content: "Example"
  }, {
    id: "get-custom-recording-configuration",
    content: "Get custom recording configuration"
  }, {
    id: "http-request-1",
    content: "HTTP request"
  }, {
    id: "path-parameter-1",
    content: "Path parameter"
  }, {
    id: "http-response-1",
    content: "HTTP response"
  }, {
    id: "example-1",
    content: "Example"
  }, {
    id: "parameter-type",
    content: "Parameter type"
  }, {
    id: "mp4config",
    content: "mp4Config"
  }, {
    id: "hlsconfig",
    content: "HlsConfig"
  }, {
    id: "storageconfig",
    content: "StorageConfig"
  }, {
    id: "http-status-code",
    content: "HTTP status code"
  }]
};
export let toc = [{
  depth: 2,
  url: "#set-custom-recording-configuration",
  title: _jsx(_Fragment, {
    children: "Set custom recording configuration"
  })
}, {
  depth: 3,
  url: "#http-request",
  title: _jsx(_Fragment, {
    children: "HTTP request"
  })
}, {
  depth: 4,
  url: "#path-parameter",
  title: _jsx(_Fragment, {
    children: "Path parameter"
  })
}, {
  depth: 4,
  url: "#request-body",
  title: _jsx(_Fragment, {
    children: "Request body"
  })
}, {
  depth: 3,
  url: "#http-response",
  title: _jsx(_Fragment, {
    children: "HTTP response"
  })
}, {
  depth: 3,
  url: "#example",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 2,
  url: "#get-custom-recording-configuration",
  title: _jsx(_Fragment, {
    children: "Get custom recording configuration"
  })
}, {
  depth: 3,
  url: "#http-request-1",
  title: _jsx(_Fragment, {
    children: "HTTP request"
  })
}, {
  depth: 4,
  url: "#path-parameter-1",
  title: _jsx(_Fragment, {
    children: "Path parameter"
  })
}, {
  depth: 3,
  url: "#http-response-1",
  title: _jsx(_Fragment, {
    children: "HTTP response"
  })
}, {
  depth: 3,
  url: "#example-1",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 2,
  url: "#parameter-type",
  title: _jsx(_Fragment, {
    children: "Parameter type"
  })
}, {
  depth: 3,
  url: "#mp4config",
  title: _jsx(_Fragment, {
    children: "mp4Config"
  })
}, {
  depth: 3,
  url: "#hlsconfig",
  title: _jsx(_Fragment, {
    children: "HlsConfig"
  })
}, {
  depth: 3,
  url: "#storageconfig",
  title: _jsx(_Fragment, {
    children: "StorageConfig"
  })
}, {
  depth: 2,
  url: "#http-status-code",
  title: _jsx(_Fragment, {
    children: "HTTP status code"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
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
    children: [_jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Custom recording enables you to use third-party cloud storage services, while standard recording does not."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "set-custom-recording-configuration",
      children: "Set custom recording configuration"
    }), `
`, _jsx(_components.p, {
      children: "Sets the custom recording configuration for all live streams under the specified entry point."
    }), `
`, _jsx(_components.h3, {
      id: "http-request",
      children: "HTTP request"
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
              children: "PATCH"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.agora.io/v1/projects/{appid}/fls/entry_points/{entry_point}/settings/record/custom/regions/{region}"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameter",
      children: "Path parameter"
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
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "appid"
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
            children: "Required. The App ID corresponding to the entry point."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "entry_point"
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
            children: "Required. The entry point name."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "region"
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
            children: "Required. The configured region when adding the domain."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-body",
      children: "Request body"
    }), `
`, _jsx(_components.p, {
      children: "The request body is in the JSON Object type, and contains the following fields:"
    }), `
`, _jsxs(_components.table, {
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
              children: "mp4Config"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSON Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Optional. For the configuration of the MP4 recording files, see ", _jsx(_components.a, {
              href: "#mp4config",
              children: "mp4Config"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "hlsConfig"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSON Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Optional. For the configuration of the HLS recording files, see ", _jsx(_components.a, {
              href: "#hlsconfig",
              children: "HlsConfig"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "storageConfig"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSON Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Optional (required when setting recording options for the first time). For the storage configuration of the recording files, see ", _jsx(_components.a, {
              href: "#storageconfig",
              children: "StorageConfig"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "http-response",
      children: "HTTP response"
    }), `
`, _jsx(_components.p, {
      children: "If the returned HTTP status code is 200, the request is successful."
    }), `
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is not 200, the request fails. You can refer to the ", _jsx(_components.a, {
        href: "#http-code",
        children: "HTTP status code"
      }), " for possible reasons."]
    }), `
`, _jsx(_components.h3, {
      id: "example",
      children: "Example"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request line"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "PATCH"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.agora.io/v1/projects/{your_appid}/fls/entry_points/live/settings/record/custom/regions/cn"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " HTTP/1.1"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request body"
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
              children: '    "hlsConfig"'
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
              children: '        "enabled"'
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
              children: "true"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "mp4Config"'
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
              children: '        "enabled"'
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
              children: "true"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "storageConfig"'
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
              children: '        "accessKey"'
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
              children: '"{your access key}"'
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
              children: '        "bucket"'
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
              children: '"{your bucket}"'
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
              children: '        "region"'
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
              children: "3"
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
              children: '        "secretKey"'
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
              children: '"{your secret key}"'
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
              children: '        "vendor"'
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
              children: "2"
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
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Response line"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "HTTP/1.1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 200"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " OK"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "get-custom-recording-configuration",
      children: "Get custom recording configuration"
    }), `
`, _jsx(_components.p, {
      children: "Gets the custom recording configuration for the specified entry point."
    }), `
`, _jsx(_components.h3, {
      id: "http-request-1",
      children: "HTTP request"
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
              children: "GET"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.agora.io/v1/projects/{appid}/fls/entry_points/{entry_point}/settings/record/custom/regions/{region}"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameter-1",
      children: "Path parameter"
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
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "appid"
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
            children: "Required. The App ID corresponding to the entry point."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "entry_point"
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
            children: "Required. The entry point name."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "region"
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
            children: "Required. The configured region when adding the domain."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "http-response-1",
      children: "HTTP response"
    }), `
`, _jsx(_components.p, {
      children: "If the returned HTTP status code is 200, the request is successful, and the response body contains the following fields:"
    }), `
`, _jsxs(_components.table, {
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
              children: "mp4Config"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSON Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["For the configuration of the MP4 recording files, see ", _jsx(_components.a, {
              href: "#mp4config",
              children: "mp4Config"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "hlsConfig"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSON Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["For the configuration of the HLS recording files, see ", _jsx(_components.a, {
              href: "#hlsconfig",
              children: "HlsConfig"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "storageConfig"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSON Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["For the storage configuration of the recording files, see ", _jsx(_components.a, {
              href: "#storageconfig",
              children: "StorageConfig"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["If the returned HTTP status code is not 200, the request fails. You can refer to the ", _jsx(_components.a, {
        href: "#http-code",
        children: "HTTP status code"
      }), " for possible reasons."]
    }), `
`, _jsx(_components.h3, {
      id: "example-1",
      children: "Example"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request line"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "GET"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.agora.io/v1/projects/{your_appid}/fls/entry_points/live/settings/record/custom/regions/cn"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " HTTP/1.1"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Response line"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "HTTP/1.1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 200"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " OK"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Request body"
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
              children: '    "hlsConfig"'
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
              children: '        "enabled"'
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
              children: "true"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "mp4Config"'
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
              children: '        "enabled"'
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
              children: "true"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "storageConfig"'
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
              children: '        "accessKey"'
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
              children: '"{your accesskey}"'
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
              children: '        "region"'
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
              children: "3"
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
              children: '        "secretKey"'
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
              children: '"{your secretkey}"'
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
              children: '        "vendor"'
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
              children: "2"
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
`, _jsx(_components.h2, {
      id: "parameter-type",
      children: "Parameter type"
    }), `
`, _jsx(_components.h3, {
      id: "mp4config",
      children: "mp4Config"
    }), `
`, _jsx(_components.p, {
      children: "The configuration of the MP4 recording files, including the following fields:"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "enabled"
      }), ": Bool type, optional. Whether to enable recording in the MP4 format."]
    }), `
`, _jsx(_components.h3, {
      id: "hlsconfig",
      children: "HlsConfig"
    }), `
`, _jsx(_components.p, {
      children: "The configuration of the HLS recording files, including the following fields:"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "enabled"
      }), ": Bool type, optional. Whether to enable recording in the HLS format."]
    }), `
`, _jsx(_components.h3, {
      id: "storageconfig",
      children: "StorageConfig"
    }), `
`, _jsx(_components.p, {
      children: "The storage configuration of the recording files, including the following fields:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "vendor"
          }), ": Number. The third-party cloud storage vendor."]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "0"
            }), ": ", _jsx(_components.a, {
              href: "https://www.qiniu.com/en/products/kodo",
              children: "Qiniu Cloud"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "1"
            }), ": ", _jsx(_components.a, {
              href: "https://aws.amazon.com/s3/?nc1=h_ls",
              children: "Amazon S3"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "2"
            }), ": ", _jsx(_components.a, {
              href: "https://www.alibabacloud.com/product/oss",
              children: "Alibaba Cloud"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "3"
            }), ": ", _jsx(_components.a, {
              href: "https://intl.cloud.tencent.com/product/cos",
              children: "Tencent Cloud"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "4"
            }), ": ", _jsx(_components.a, {
              href: "https://en.ksyun.com/nv/product/KS3.html",
              children: "Kingsoft Cloud"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "5"
            }), ": ", _jsx(_components.a, {
              href: "https://azure.microsoft.com/en-us/services/storage/blobs/",
              children: "Microsoft Azure"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "6"
            }), ": ", _jsx(_components.a, {
              href: "https://cloud.google.com/storage",
              children: "Google Cloud"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "7"
            }), ": ", _jsx(_components.a, {
              href: "https://www.huaweicloud.com/intl/en-us/product/obs.html",
              children: "Huawei Cloud"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "8"
            }), ": ", _jsx(_components.a, {
              href: "https://intl.cloud.baidu.com/product/bos.html",
              children: "Baidu AI Cloud"
            })]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "region"
          }), ": Number. The region information specified for the third-party cloud storage. The recording service only supports regions in the following lists:"]
        }), `
`, _jsx(CalloutContainer, {
          type: "info"
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["In order to improve the success rate and real-time performance when uploading recording files, if you set the ", _jsx(_components.code, {
        children: "region"
      }), " of the cloud recording service in the ", _jsx(_components.code, {
        children: "acquire"
      }), " method, make sure that the region of the third-party cloud storage corresponds to the same geographical region. For example, if the region of the cloud recording service is set to ", _jsx(_components.code, {
        children: "NA"
      }), ` (North America), the third-party cloud storage needs to be set to a location within North America.
:::`]
    }), `
`, _jsxs("details", {
      children: [_jsxs("summary", {
        children: ["When the third-party cloud storage is Qiniu Cloud (", _jsx("code", {
          children: "vendor"
        }), " = 0):"]
      }), _jsxs("ul", {
        children: [_jsxs("li", {
          children: [_jsx("code", {
            children: "0"
          }), ": East China"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "1"
          }), ": North China "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "2"
          }), ": South China"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "3"
          }), ": North America "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "4"
          }), ": Southeast Asia"]
        })]
      })]
    }), `
`, _jsxs("details", {
      children: [_jsxs("summary", {
        children: ["When the third-party cloud storage is Amazon S3 (", _jsx("code", {
          children: "vendor"
        }), " = 1):"]
      }), _jsxs("ul", {
        children: [_jsxs("li", {
          children: [_jsx("code", {
            children: "0"
          }), "：US_EAST_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "1"
          }), "：US_EAST_2"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "2"
          }), "：US_WEST_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "3"
          }), "：US_WEST_2"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "4"
          }), "：EU_WEST_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "5"
          }), "：EU_WEST_2"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "6"
          }), "：EU_WEST_3"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "7"
          }), "：EU_CENTRAL_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "8"
          }), "：AP_SOUTHEAST_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "9"
          }), "：AP_SOUTHEAST_2"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "10"
          }), "：AP_NORTHEAST_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "11"
          }), "：AP_NORTHEAST_2"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "12"
          }), "：SA_EAST_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "13"
          }), "：CA_CENTRAL_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "14"
          }), "：AP_SOUTH_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "15"
          }), "：CN_NORTH_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "16"
          }), "：CN_NORTHWEST_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "18"
          }), "：AF_SOUTH_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "19"
          }), "：AP_EAST_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "20"
          }), "：AP_NORTHEAST_3"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "21"
          }), "：EU_NORTH_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "22"
          }), "：ME_SOUTH_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "24"
          }), "：AP_SOUTHEAST_3"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "25"
          }), "：EU_SOUTH_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "26"
          }), "：AWS_REGION_NUM"]
        })]
      })]
    }), `
`, _jsxs("details", {
      children: [_jsxs("summary", {
        children: ["When the third-party cloud storage is Alibaba Cloud (", _jsx("code", {
          children: "vendor"
        }), " = 2):"]
      }), _jsxs("ul", {
        children: [_jsxs("li", {
          children: [_jsx("code", {
            children: "0"
          }), ": CN_Hangzhou "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "1"
          }), ": CN_Shanghai "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "2"
          }), ": CN_Qingdao "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "3"
          }), ": CN_Beijing"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "4"
          }), ": CN_Zhangjiakou "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "5"
          }), ": CN_Huhehaote "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "6"
          }), ": CN_Shenzhen "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "7"
          }), ": CN_Hongkong "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "8"
          }), ": US_West_1 "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "9"
          }), ": US_East_1 "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "10"
          }), ": AP_Southeast_1 "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "11"
          }), ": AP_Southeast_2 "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "12"
          }), ": AP_Southeast_3 "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "13"
          }), ": AP_Southeast_5 "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "14"
          }), ": AP_Northeast_1 "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "15"
          }), ": AP_South_1 "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "16"
          }), ": EU_Central_1 "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "17"
          }), ": EU_West_1 "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "18"
          }), ": EU_East_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "19"
          }), "：AP_Southeast_6"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "20"
          }), "：CN_Heyuan"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "21"
          }), "：CN_Guangzhou"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "22"
          }), "：CN_Chengdu"]
        })]
      }), _jsxs(_components.p, {
        children: ["For details, see ", _jsx("a", {
          href: "https://www.alibabacloud.com/help/doc-detail/31837.html",
          children: "Alibaba Cloud Documentation"
        }), "."]
      })]
    }), `
`, _jsxs("details", {
      children: [_jsxs("summary", {
        children: ["When the third-party cloud storage is Tencent Cloud (", _jsx("code", {
          children: "vendor"
        }), " = 3):"]
      }), _jsxs("ul", {
        children: [_jsxs("li", {
          children: [_jsx("code", {
            children: "0"
          }), "：AP_Beijing_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "1"
          }), "：AP_Beijing"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "2"
          }), "：AP_Shanghai"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "3"
          }), "：AP_Guangzhou"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "4"
          }), "：AP_Chengdu "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "5"
          }), "：AP_Chongqing "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "6"
          }), "：AP_Shenzhen_FSI "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "7"
          }), "：AP_Shanghai_FSI "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "8"
          }), "：AP_Beijing_FSI "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "9"
          }), "：AP_Hongkong "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "10"
          }), "：AP_Singapore "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "11"
          }), "：AP_Mumbai "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "12"
          }), "：AP_Seoul "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "13"
          }), "：AP_Bangkok "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "14"
          }), "：AP_Tokyo "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "15"
          }), "：NA_Siliconvalley "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "16"
          }), "：NA_Ashburn "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "17"
          }), "：NA_Toronto "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "18"
          }), "：EU_Frankfurt "]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "19"
          }), "：EU_Moscow"]
        })]
      })]
    }), `
`, _jsxs("details", {
      children: [_jsxs("summary", {
        children: ["When the third-party cloud storage is Kingsoft Cloud (", _jsx("code", {
          children: "vendor"
        }), " = 4):"]
      }), _jsxs("ul", {
        children: [_jsxs("li", {
          children: [_jsx("code", {
            children: "0"
          }), "：CN_Hangzhou"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "1"
          }), "：CN_Shanghai"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "2"
          }), "：CN_Qingdao"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "3"
          }), "：CN_Beijing"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "4"
          }), "：CN_Guangzhou"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "5"
          }), "：CN_Hongkong"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "6"
          }), "：JR_Beijing"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "7"
          }), "：JR_Shanghai"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "8"
          }), "：NA_Russia_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "9"
          }), "：NA_Singapore_1"]
        })]
      })]
    }), `
`, _jsxs("details", {
      children: [_jsxs("summary", {
        children: ["When the third-party cloud storage is Microsoft Azure (", _jsx("code", {
          children: "vendor"
        }), " = 5): "]
      }), _jsxs("summary", {
        children: ["The ", _jsx("code", {
          children: "region"
        }), " parameter has no effect, whether or not it is set."]
      })]
    }), `
`, _jsxs("details", {
      children: [_jsxs("summary", {
        children: ["When the third-party cloud storage is Google Cloud (", _jsx("code", {
          children: "vendor"
        }), " = 6): "]
      }), _jsxs("summary", {
        children: ["The ", _jsx("code", {
          children: "region"
        }), " parameter has no effect, whether or not it is set."]
      })]
    }), `
`, _jsxs("details", {
      children: [_jsxs("summary", {
        children: ["When the third-party cloud storage is Huawei Cloud (", _jsx("code", {
          children: "vendor"
        }), " = 7):"]
      }), _jsxs("ul", {
        children: [_jsxs("li", {
          children: [_jsx("code", {
            children: "0"
          }), "：CN_North_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "1"
          }), "：CN_North_4"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "2"
          }), "：CN_East_2"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "3"
          }), "：CN_East_3"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "4"
          }), "：CN_South_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "5"
          }), "：CN_Southwest_2"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "6"
          }), "：AP_Southeast_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "7"
          }), "：AP_Southeast_2"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "8"
          }), "：AP_Southeast_3"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "9"
          }), "：AF_South_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "10"
          }), "：SA_Argentina_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "11"
          }), "：SA_Peru_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "12"
          }), "：NA_Mexico_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "13"
          }), "：SA_Brazil_1"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "14"
          }), "：LA_South_2"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "15"
          }), "：SA_Chile_1"]
        })]
      })]
    }), `
`, _jsxs("details", {
      children: [_jsxs("summary", {
        children: ["When the third-party cloud storage is Baidu AI Cloud (", _jsx("code", {
          children: "vendor"
        }), " = 8):"]
      }), _jsxs("ul", {
        children: [_jsxs("li", {
          children: [_jsx("code", {
            children: "0"
          }), "：Beijing"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "1"
          }), "：Baoding"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "2"
          }), "：Suzhou"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "3"
          }), "：Guangzhou"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "4"
          }), "：Hongkong"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "5"
          }), "：Singapore"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "6"
          }), "：Wuhan"]
        }), _jsxs("li", {
          children: [_jsx("code", {
            children: "7"
          }), "：Shanghai"]
        })]
      })]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "bucket"
          }), ": String. The bucket name of the third-party cloud storage."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "accessKey"
          }), ": String. The access key of the third-party cloud storage. Agora suggests that you use a write-only access key."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "secretKey"
          }), ": String. The secret key of the third-party cloud storage."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx("a", {
      name: "http-code"
    }), `
`, _jsx(_components.h2, {
      id: "http-status-code",
      children: "HTTP status code"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Status code"
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
            children: "200"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The request succeeds."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "400"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The parameter is invalid, for example the ", _jsx(_components.code, {
              children: "appid"
            }), " or the ", _jsx(_components.code, {
              children: "entry_point"
            }), " is empty, or the ", _jsx(_components.code, {
              children: "region"
            }), " parameter value is invalid."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "401"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unauthorized (the customer ID and the customer secret do not match)."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "404"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The server cannot find the resource according to the request, which means the requested entry point does not exist or the requested URI path is invalid."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "500"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "An internal error occurs in the server, so the server is not able to complete the request."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "504"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "An internal error occurs in the server. The gateway or the proxy server did not receive a timely request from the remote server."
          })]
        })]
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
