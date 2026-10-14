import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Channel management REST API",
  description: "Use Channel management REST APIs for Agora IoT channel operations."
};
export let _markdown = `

In addition to the SDK that you integrate into the app client, Agora provides a set of simple, secure, and reliable server-side RESTful APIs to manage real-time audio and video channels.

This page provides detailed documentation for the Agora Channel Management RESTful APIs.

### Key features and use-cases [#key-features-and-use-cases]

| Key features              | Description                                                                                               | Typical application use-cases                                                                                                                                                                                                                           |
| ------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Manage user privileges    | Includes removing specified users from channels and preventing them from sending audio and video streams. | Unauthorized users appear in a live broadcast.<br />Users disrupt the room during a live broadcast.<br />The signaling message sent to the client is hijacked.<br />The user is offline abnormally, which interferes with timely user list updates.     |
| Query channel information | Query the list of online channels, users in a channel, and the status of a specified user.                | In a use-case where the number of concurrent channels is not large, directly query the channel list to sync the channel status. In a use-case where real-time sync performance is not required, query and sync the user list and status in the channel. |

### Authorization [#authorization]

### Domain [#domain]

All requests are sent to the following domain name: \`api.agora.io\`.

<CalloutContainer type="warning">
  <CalloutDescription>
    The Agora RESTful API supports only HTTPS with TLS 1.0, 1.1, or 1.2. Requests over plain HTTP are not supported.
  </CalloutDescription>
</CalloutContainer>

For example, after implementing basic HTTP authentication, use the following code to send a simple request to obtain the total number of channels and the number of users in each channel:

<Tabs defaultValue="java">
  <TabsList>
    <TabsTrigger value="java">
      Java
    </TabsTrigger>

    <TabsTrigger value="go">
      Go
    </TabsTrigger>
  </TabsList>

  <TabsContent value="java">
    \`\`\`java
    public class Base64Encoding {

        public static void main(String[] args) throws IOException, InterruptedException {

            // Customer ID
            // Set the AGORA_CUSTOMER_KEY environment variable
            final String customerKey = System.getenv("AGORA_CUSTOMER_KEY");
            // Customer key
            // Set the AGORA_CUSTOMER_SECRET environment variable
            final String customerSecret = System.getenv("AGORA_CUSTOMER_SECRET");

            // Set the AGORA_APP_ID variable
            final String appid = System.getenv("AGORA_APP_ID");

            // Concatenate the customer ID and customer secret and encode them using base64
            String plainCredentials = customerKey + ":" + customerSecret;
            String base64Credentials = new String(Base64.getEncoder().encode(plainCredentials.getBytes()));
            // Create the authorization header
            String authorizationHeader = "Basic :" + base64Credentials

            HttpClient client = HttpClient.newHttpClient();

            // Create an HTTP request object
            HttpRequest request = HttpRequest.newBuilder()
                   .uri(URI.create("https://api.sd-rtn.com/dev/v1/channel/" + appid))
                   .GET()
                   .header("Authorization", authorizationHeader)
                   .header("Content-Type", "application/json")
                   .build();
            // Send an HTTP request
            HttpResponse<String> response = client.send(request,
                    HttpResponse.BodyHandlers.ofString());

            System.out.println(response.body());
            // Add the subsequent processing logic for the response content
       }
    }
    \`\`\`
  </TabsContent>

  <TabsContent value="go">
    \`\`\`go
    package main

      "encoding/base64"
      "fmt"
      "net/http"
      "os"
      "io/ioutil"
    )

    func main() {
      // Retrieve environment variables
      customerKey := os.Getenv("AGORA_CUSTOMER_KEY")
      customerSecret := os.Getenv("AGORA_CUSTOMER_SECRET")
      appID := os.Getenv("AGORA_APP_ID")

      if customerKey == "" || customerSecret == "" || appID == "" {
        fmt.Println("Environment variables AGORA_CUSTOMER_KEY, AGORA_CUSTOMER_SECRET, and AGORA_APP_ID must be set.")
        return
      }

      // Concatenate the customer ID and secret, then encode them using Base64
      plainCredentials := customerKey + ":" + customerSecret
      base64Credentials := base64.StdEncoding.EncodeToString([]byte(plainCredentials))

      // Create the authorization header
      authorizationHeader := "Basic " + base64Credentials

      // Build the request
      req, err := http.NewRequest("GET", "https://api.sd-rtn.com/dev/v1/channel/"+appID, nil)
      if err != nil {
        fmt.Println("Error creating request:", err)
        return
      }

      // Add headers
      req.Header.Add("Authorization", authorizationHeader)
      req.Header.Add("Content-Type", "application/json")

      // Create an HTTP client and send the request
      client := &http.Client{}
      resp, err := client.Do(req)
      if err != nil {
        fmt.Println("Error sending request:", err)
        return
      }
      defer resp.Body.Close()

      // Read the response body
      body, err := ioutil.ReadAll(resp.Body)
      if err != nil {
        fmt.Println("Error reading response body:", err)
        return
      }

      // Print the response body
      fmt.Println(string(body))

      // Add any subsequent processing logic for the response content here
    }
    \`\`\`
  </TabsContent>
</Tabs>

Use the channel management RESTful API along with the [Agora Notifications](/en/realtime-media/rtc/build/optimize-and-operate/receive-notifications) service for reliable and effective channel management and status synchronization.

### Call frequency limit [#call-frequency-limit]

For each Agora account (not each App ID), the maximum call frequency of every online channel statistics query API is 20 queries per second. The maximum call frequency of every other API is 10 queries per second. If you are frequency limited when calling the APIs, see [How can I avoid being frequency limited when calling Agora Server RESTful APIs](/en/api-reference/faq/integration/restful_api_call_frequency) to optimize API call frequency.

### Response status codes [#response-status-codes]

For a description of the response status codes, refer to [Response status codes](/en/api-reference/api-ref/rtc/response-status-codes).

## Authentication [#authentication]

The \`Content-Type\` field in all HTTP request headers is \`application/json\`. All requests and responses are in JSON format. All request URLs and request bodies are case-sensitive.

The Agora Channel Management RESTful APIs only support HTTPS. Before sending HTTP requests, you must generate a Base64-encoded credential with the **Customer ID** and **Customer Secret** provided by Agora, and pass the credential to the \`Authorization\` field in the HTTP request header. See [RESTful authentication](/en/api-reference/api-ref/rtc/authentication) for details.

## Call the API [#call-the-api]

This page explains the structure of the channel management RESTful API and how to call it correctly.

## Prerequisites [#prerequisites]

Before calling the API, make sure you have the following:

* An Agora app ID
* Customer ID
* Customer key

## Request URL [#request-url]

Following is a sample request URL:

\`\`\`text
https://api.agora.io/dev/v1/kicking-rule
\`\`\`

* \`https\`: The communication protocol. Agora uses HTTPS.
* \`api.agora.io\`: The domain name of the Agora server.
* \`dev/v1/kicking-rule\`: The resource path, including the API version and the resource name.

The above example is for reference only. Refer to the documentation of the API you want to call, select the method (\`GET\`, \`POST\`, \`PUT\`, \`PATCH\`, \`DELETE\`) in the code source file or debug application, and then configure the actual request URL according to your needs. The request URL is case-sensitive.

## Request structure [#request-structure]

A request consists of two parts: The request header and the request body.

The following example shows how to create a privilege banning rule by sending a \`POST\` request containing the app ID, channel name, user ID, user IP, ban duration, and the privilege list to the specified API address:

\`\`\`bash
curl --location --request POST 'https://api.agora.io/dev/v1/kicking-rule' \\
--header 'Content-Type: application/json' \\
--header 'Accept: application/json' \\
--header 'Authorization: <http_basic_auth>' \\
--data '{
  "appid": "4855xxxxxxxxxxxxxxxxxxxxxxxxeae2",
  "cname": "channel1",
  "uid": 589517928,
  "ip": "123",
  "time": 60,
  "privileges": [
    "join_channel"
  ]
}'
\`\`\`

### Request header [#request-header]

The request header contains the following information needed to process the request:

* \`Accept\`: Tells the server what types of responses the client can handle, such as \`application/json\`.
* \`Authorization\`: The Agora RESTful API requires HTTP authentication. Every time you send an HTTP request, fill in the \`Authorization\` field in the request header. See [RESTful authentication](/en/api-reference/api-ref/rtc/authentication) for details.
* \`Content-Type\`: Specifies the type of the request body, such as \`application/json\`.

### Request body (optional) [#request-body-optional]

The request body contains the information to be sent to the server. For example, to create a new rule to ban user privileges, include the relevant information, such as the app ID, channel name, user ID, user IP, ban duration, and the banned privileges. The request body is case-sensitive.

## Response [#response]

After you send the request, the Agora server sends a response that includes a response status code and a response body. The channel management RESTful API does not have a response header.

### Response status code [#response-status-code]

The HTTP response status code can be one of the following:

* \`200\`: The request is successful.
* Other than \`200\`: Refer to [Response status codes](/en/api-reference/api-ref/rtc/response-status-codes) to troubleshoot the problem.

### Response body [#response-body]

The response body contains the information returned by the server. For example, the response body of creating a banning rule includes the request status and the rule ID.

The following is a response example for creating a banning rule:

\`\`\`json
{
  "status": "success",
  "id": 1953
}
\`\`\`

## Error handling [#error-handling]

If you encounter a problem, use developer tools to view the request and response, and troubleshoot based on the response status code. If the problem persists, contact [technical support](mailto\\:support@agora.io).

## Query channel list [#query-channel-list]

### \`GET\` \`https://api.agora.io/dev/v1/channel/{appid}\` [#get-httpsapiagoraiodevv1channelappid]

Use this endpoint to get the list of all channels under a specified project. The channel list is returned by page; specify the page number and page size in the request URL.

<CalloutContainer type="info">
  <CalloutDescription>
    If the number of users in a channel changes frequently, the query results may be inaccurate. The following situations may occur:

    * A channel appears repeatedly on different pages.
    * A channel does not appear on any page.
  </CalloutDescription>
</CalloutContainer>

## Request [#request]

The request URL and request body is case-sensitive. All requests must use HTTPS.

### Request header [#request-header-1]

* \`Content-Type\`: \`application/json\`
* The request header must contain the \`Authorization\` field. For details, see [RESTful authentication](/en/api-reference/api-ref/rtc/authentication).

### Path parameters [#path-parameters]

<Parameter name="appid" type="string" required="true">
  The App ID of the project. You can get it through one of the following methods:

  * Copy from the [Agora Console](https://console.agora.io)
  * Call the [Get all projects](/en/api-reference/api-ref/console/solutions-agora-console-rest-api#get-all-projects) API, and read the value of the \`vendor_key\` field in the response body.
</Parameter>

### Query parameters [#query-parameters]

<ParameterList title="QUERY">
  <Parameter name="page_no" type="number" required="false">
    The page number to query. The default value is \`0\`, which is the first page. The value of \`page_no\` cannot exceed \`(total number of channels / page_size) - 1\`; otherwise, the specified page contains no channels.
  </Parameter>

  <Parameter name="page_size" type="number" required="false">
    The number of channels per page.
  </Parameter>
</ParameterList>

## Response [#response-1]

A \`200\` status code indicates success. The response body contains the following parameters:

<ParameterList title="OK">
  <Parameter name="success" type="boolean">
    The state of this request:

    * \`true\`: Success.
    * \`false\`: Reserved for future use.
  </Parameter>

  <Parameter name="data" type="object">
    Channel statistics.

    <Parameter name="channels" type="array">
      The list of channels. Each object in the array represents one channel and contains the following fields. If the specified page contains no channels, this field is empty.

      <Parameter name="channel_name" type="string">
        The channel name.
      </Parameter>

      <Parameter name="user_count" type="number">
        The total number of users in the channel.
      </Parameter>
    </Parameter>

    <Parameter name="total_size" type="number">
      The total number of channels under the specified project.
    </Parameter>
  </Parameter>
</ParameterList>

If the status code is not \`200\`, the request fails. See the \`message\` field in the response body for the reason for this failure. Refer to [Response status codes](/en/api-reference/api-ref/rtc/response-status-codes) for details.

### Authorization [#authorization-1]

This endpoint requires [Basic authentication](/en/api-reference/api-ref/rtc/authentication).

### Request example [#request-example]

Test this request in [Postman](https://documenter.getpostman.com/view/6319646/SVSLr9AM#080ffa91-0c31-42ab-9177-7942f8691ea2) or use one of the following code examples:

<Tabs defaultValue="curl">
  <TabsList>
    <TabsTrigger value="curl">
      cURL
    </TabsTrigger>

    <TabsTrigger value="node">
      Node
    </TabsTrigger>

    <TabsTrigger value="python">
      Python
    </TabsTrigger>
  </TabsList>

  <TabsContent value="curl">
    \`\`\`bash
    curl --request GET \\
      --url 'https://api.sd-rtn.com/dev/v1/channel/<appid>?page_no=0&page_size=100' \\
      --header 'Accept: application/json' \\
      --header 'Authorization: Basic <your_base64_encoded_credentials>'
    \`\`\`
  </TabsContent>

  <TabsContent value="node">
    \`\`\`js
    const http = require('http');

    const options = {
      method: 'GET',
      hostname: 'api.sd-rtn.com',
      port: null,
      path: '/dev/v1/channel/<appid>?page_no=0&page_size=100',
      headers: {
        Authorization: 'Basic <your_base64_encoded_credentials>',
        Accept: 'application/json'
      }
    };

    const req = http.request(options, function (res) {
      const chunks = [];

      res.on('data', function (chunk) {
        chunks.push(chunk);
      });

      res.on('end', function () {
        const body = Buffer.concat(chunks);
        console.log(body.toString());
      });
    });

    req.end();
    \`\`\`
  </TabsContent>

  <TabsContent value="python">
    \`\`\`python

    conn = http.client.HTTPConnection("api.sd-rtn.com")

    headers = {
        'Authorization': "Basic <your_base64_encoded_credentials>",
        'Accept': "application/json"
    }

    conn.request("GET", "/dev/v1/channel/<appid>?page_no=0&page_size=100", headers=headers)

    res = conn.getresponse()
    data = res.read()
    print(data.decode("utf-8"))
    \`\`\`
  </TabsContent>
</Tabs>

### Response example [#response-example]

\`\`\`json
{
  "success": true,
  "data": {
    "channels": [
      {
        "channel_name": "lkj144",
        "user_count": 3
      }
    ],
    "total_size": 1
  }
}
\`\`\`

## Query host list [#query-host-list]

### \`GET\` \`https://api.agora.io/dev/v1/channel/user/{appid}/{channelName}/hosts_only\` [#get-httpsapiagoraiodevv1channeluserappidchannelnamehosts_only]

Use this endpoint to get the list of hosts in a specified channel. This endpoint is only available in the \`LIVE_BROADCASTING\` profile (\`mode = 2\`); all users in the channel must use the same profile, otherwise query results may be inaccurate.

## Request [#request-1]

The request URL and request body is case-sensitive. All requests must use HTTPS.

### Request header [#request-header-2]

* \`Content-Type\`: \`application/json\`
* The request header must contain the \`Authorization\` field. For details, see [RESTful authentication](/en/api-reference/api-ref/rtc/authentication).

### Path parameters [#path-parameters-1]

<Parameter name="appid" type="string" required="true">
  The App ID of the project. You can get it through one of the following methods:

  * Copy from the [Agora Console](https://console.agora.io)
  * Call the [Get all projects](/en/api-reference/api-ref/console/solutions-agora-console-rest-api#get-all-projects) API, and read the value of the \`vendor_key\` field in the response body.
</Parameter>

<Parameter name="channelName" type="string" required="true">
  The channel name.
</Parameter>

## Response [#response-2]

A \`200\` status code indicates success. The response body contains the following parameters:

<ParameterList title="OK">
  <Parameter name="success" type="boolean">
    The state of this request:

    * \`true\`: Success.
    * \`false\`: Reserved for future use.
  </Parameter>

  <Parameter name="data" type="object">
    User information.

    <Parameter name="channel_exist" type="boolean">
      Whether the specified channel exists:

      * \`true\`: The channel exists.
      * \`false\`: The channel does not exist. When this is \`false\`, no other fields are returned.
    </Parameter>

    <Parameter name="mode" type="number">
      The channel profile:

      * \`1\`: The \`COMMUNICATION\` profile.
      * \`2\`: The \`LIVE_BROADCASTING\` profile.
    </Parameter>

    <Parameter name="broadcasters" type="array">
      User IDs of all hosts in the channel. Returned only when \`mode\` is \`2\`.
    </Parameter>
  </Parameter>
</ParameterList>

If the status code is not \`200\`, the request fails. See the \`message\` field in the response body for the reason for this failure. Refer to [Response status codes](/en/api-reference/api-ref/rtc/response-status-codes) for details.

## Reference [#reference]

### Synchronizing host online status [#synchronizing-host-online-status]

To synchronize the online status of hosts, you can use this endpoint or the [query user status](#query-user-status) endpoint. This endpoint requires a lower call frequency and offers higher efficiency, so Agora recommends it for this purpose.

### Authorization [#authorization-2]

This endpoint requires [Basic authentication](/en/api-reference/api-ref/rtc/authentication).

### Request example [#request-example-1]

<Tabs defaultValue="curl">
  <TabsList>
    <TabsTrigger value="curl">
      cURL
    </TabsTrigger>

    <TabsTrigger value="node">
      Node
    </TabsTrigger>

    <TabsTrigger value="python">
      Python
    </TabsTrigger>
  </TabsList>

  <TabsContent value="curl">
    \`\`\`bash
    curl --request GET \\
      --url https://api.sd-rtn.com/dev/v1/channel/user/<appid>/<channelName>/hosts_only \\
      --header 'Accept: application/json' \\
      --header 'Authorization: Basic <your_base64_encoded_credentials>'
    \`\`\`
  </TabsContent>

  <TabsContent value="node">
    \`\`\`js
    const https = require('https');

    const options = {
      method: 'GET',
      hostname: 'api.sd-rtn.com',
      port: null,
      path: '/dev/v1/channel/user/<appid>/<channelName>/hosts_only',
      headers: {
        Accept: 'application/json',
        Authorization: 'Basic <your_base64_encoded_credentials>'
      }
    };

    const req = https.request(options, function (res) {
      const chunks = [];

      res.on('data', function (chunk) {
        chunks.push(chunk);
      });

      res.on('end', function () {
        const body = Buffer.concat(chunks);
        console.log(body.toString());
      });
    });

    req.end();
    \`\`\`
  </TabsContent>

  <TabsContent value="python">
    \`\`\`python

    conn = http.client.HTTPSConnection("api.sd-rtn.com")

    headers = {
        'Accept': "application/json",
        'Authorization': "Basic <your_base64_encoded_credentials>"
    }

    conn.request("GET", "/dev/v1/channel/user/<appid>/<channelName>/hosts_only", headers=headers)

    res = conn.getresponse()
    data = res.read()
    print(data.decode("utf-8"))
    \`\`\`
  </TabsContent>
</Tabs>

### Response example [#response-example-1]

\`\`\`json
{
  "success": true,
  "data": {
    "channel_exist": true,
    "mode": 2,
    "broadcasters": [
      574332,
      1347839
    ]
  }
}
\`\`\`

## Query user list [#query-user-list]

### \`GET\` \`https://api.agora.io/dev/v1/channel/user/{appid}/{channelName}\` [#get-httpsapiagoraiodevv1channeluserappidchannelname]

Use this endpoint to get the list of all users in a specified channel. All users in the channel must use the same channel profile; otherwise, the query results may be inaccurate.

The returned list differs based on the channel profile:

* \`COMMUNICATION\` profile: Returns the list of all users in the channel.
* \`LIVE_BROADCASTING\` profile: Returns the list of all hosts and audience members in the channel.

## Request [#request-2]

The request URL and request body is case-sensitive. All requests must use HTTPS.

### Request header [#request-header-3]

* \`Content-Type\`: \`application/json\`
* The request header must contain the \`Authorization\` field. For details, see [RESTful authentication](/en/api-reference/api-ref/rtc/authentication).

### Path parameters [#path-parameters-2]

<Parameter name="appid" type="string" required="true">
  The App ID of the project. You can get it through one of the following methods:

  * Copy from the [Agora Console](https://console.agora.io)
  * Call the [Get all projects](/en/api-reference/api-ref/console/solutions-agora-console-rest-api#get-all-projects) API, and read the value of the \`vendor_key\` field in the response body.
</Parameter>

<Parameter name="channelName" type="string" required="true">
  The channel name.
</Parameter>

### Query parameters [#query-parameters-1]

<ParameterList title="QUERY">
  <Parameter name="hosts_only" type="string" required="false">
    When specified, only the host list is returned. Applicable to the \`LIVE_BROADCASTING\` profile only.
  </Parameter>
</ParameterList>

## Response [#response-3]

A \`200\` status code indicates success. The response body contains the following parameters:

<ParameterList title="OK">
  <Parameter name="success" type="boolean">
    The state of this request:

    * \`true\`: Success.
    * \`false\`: Reserved for future use.
  </Parameter>

  <Parameter name="data" type="object">
    User information.

    <Parameter name="channel_exist" type="boolean">
      Whether the specified channel exists:

      * \`true\`: The channel exists.
      * \`false\`: The channel does not exist. When this is \`false\`, no other fields are returned.
    </Parameter>

    <Parameter name="mode" type="number">
      The channel profile:

      * \`1\`: The \`COMMUNICATION\` profile.
      * \`2\`: The \`LIVE_BROADCASTING\` profile.
    </Parameter>

    <Parameter name="total" type="number">
      The total number of users in the channel. Returned only when \`mode\` is \`1\`.
    </Parameter>

    <Parameter name="users" type="array">
      User IDs of all users in the channel. Returned only when \`mode\` is \`1\`.
    </Parameter>

    <Parameter name="broadcasters" type="array">
      User IDs of all hosts in the channel. Returned only when \`mode\` is \`2\`.
    </Parameter>

    <Parameter name="audience" type="array">
      User IDs of the first 10,000 audience members in the channel. Returned only when \`mode\` is \`2\` and \`hosts_only\` is not specified.
    </Parameter>

    <Parameter name="audience_total" type="number">
      The total number of audience members in the channel. Returned only when \`mode\` is \`2\` and \`hosts_only\` is not specified.
    </Parameter>
  </Parameter>
</ParameterList>

If the status code is not \`200\`, the request fails. See the \`message\` field in the response body for the reason for this failure. Refer to [Response status codes](/en/api-reference/api-ref/rtc/response-status-codes) for details.

## Reference [#reference-1]

### Synchronizing channel online statistics [#synchronizing-channel-online-statistics]

To synchronize online channel statistics, you can use this endpoint or the [query user status](#query-user-status) endpoint. This endpoint requires a lower call frequency and offers higher efficiency, so Agora recommends it for this purpose.

### Authorization [#authorization-3]

This endpoint requires [Basic authentication](/en/api-reference/api-ref/rtc/authentication).

### Request example [#request-example-2]

Test this request in [Postman](https://documenter.getpostman.com/view/6319646/SVSLr9AM#85067b69-dbde-4dca-bd54-2413221844cf) or use one of the following code examples:

<Tabs defaultValue="curl">
  <TabsList>
    <TabsTrigger value="curl">
      cURL
    </TabsTrigger>

    <TabsTrigger value="node">
      Node
    </TabsTrigger>

    <TabsTrigger value="python">
      Python
    </TabsTrigger>
  </TabsList>

  <TabsContent value="curl">
    \`\`\`bash
    curl --request GET \\
      --url https://api.sd-rtn.com/dev/v1/channel/user/<appid>/<channelName> \\
      --header 'Accept: application/json' \\
      --header 'Authorization: Basic <your_base64_encoded_credentials>'
    \`\`\`
  </TabsContent>

  <TabsContent value="node">
    \`\`\`js
    const https = require('https');

    const options = {
      method: 'GET',
      hostname: 'api.sd-rtn.com',
      port: null,
      path: '/dev/v1/channel/user/<appid>/<channelName>',
      headers: {
        Authorization: 'Basic <your_base64_encoded_credentials>',
        Accept: 'application/json'
      }
    };

    const req = https.request(options, function (res) {
      const chunks = [];

      res.on('data', function (chunk) {
        chunks.push(chunk);
      });

      res.on('end', function () {
        const body = Buffer.concat(chunks);
        console.log(body.toString());
      });
    });

    req.end();
    \`\`\`
  </TabsContent>

  <TabsContent value="python">
    \`\`\`python

    conn = http.client.HTTPSConnection("api.sd-rtn.com")

    headers = {
        'Authorization': "Basic <your_base64_encoded_credentials>",
        'Accept': "application/json"
    }

    conn.request("GET", "/dev/v1/channel/user/<appid>/<channelName>", headers=headers)

    res = conn.getresponse()
    data = res.read()
    print(data.decode("utf-8"))
    \`\`\`
  </TabsContent>
</Tabs>

### Response example [#response-example-2]

**In \`COMMUNICATION\` profile:**

\`\`\`json
{
  "success": true,
  "data": {
    "channel_exist": true,
    "mode": 1,
    "total": 1,
    "users": [
      906218805
    ]
  }
}
\`\`\`

**In \`LIVE_BROADCASTING\` profile:**

\`\`\`json
{
  "success": true,
  "data": {
    "channel_exist": true,
    "mode": 2,
    "broadcasters": [
      2206227541,
      2845863044
    ],
    "audience": [
      906219905
    ],
    "audience_total": 1
  }
}
\`\`\`

## Query user status [#query-user-status]

### \`GET\` \`https://api.agora.io/dev/v1/channel/user/property/{appid}/{uid}/{channelName}\` [#get-httpsapiagoraiodevv1channeluserpropertyappiduidchannelname]

Use this endpoint to get the status of a specified user. It checks whether the user is in the specified channel and, if present, returns the user's role and the time they joined.

## Request [#request-3]

The request URL and request body is case-sensitive. All requests must use HTTPS.

### Request header [#request-header-4]

* \`Content-Type\`: \`application/json\`
* The request header must contain the \`Authorization\` field. For details, see [RESTful authentication](/en/api-reference/api-ref/rtc/authentication).

### Path parameters [#path-parameters-3]

<Parameter name="appid" type="string" required="true">
  The App ID of the project. You can get it through one of the following methods:

  * Copy from the [Agora Console](https://console.agora.io)
  * Call the [Get all projects](/en/api-reference/api-ref/console/solutions-agora-console-rest-api#get-all-projects) API, and read the value of the \`vendor_key\` field in the response body.
</Parameter>

<Parameter name="uid" type="number" required="true">
  The user ID. This parameter does not support string user accounts; use the integer user ID only.
</Parameter>

<Parameter name="channelName" type="string" required="true">
  The channel name.
</Parameter>

## Response [#response-4]

A \`200\` status code indicates success. The response body contains the following parameters:

<ParameterList title="OK">
  <Parameter name="success" type="boolean">
    The state of this request:

    * \`true\`: Success.
    * \`false\`: Reserved for future use.
  </Parameter>

  <Parameter name="data" type="object">
    User statistics.

    <Parameter name="in_channel" type="boolean">
      Whether the user is in the channel. When \`false\`, no other fields are returned.
    </Parameter>

    <Parameter name="uid" type="number">
      The user ID.
    </Parameter>

    <Parameter name="join" type="number">
      The Unix timestamp (in seconds) of when the user joined the channel.
    </Parameter>

    <Parameter name="role" type="number">
      The role of the user in the channel:

      * \`0\`: Unknown user role.
      * \`1\`: User, in a communication channel.
      * \`2\`: Host, in a live broadcast channel.
      * \`3\`: Audience, in a live broadcast channel.
    </Parameter>

    <Parameter name="platform" type="number">
      The platform of the user's device. Common values include:

      * \`1\`: Android
      * \`2\`: iOS
      * \`5\`: Windows
      * \`6\`: Linux
      * \`7\`: Web
      * \`8\`: macOS
      * \`0\`: Others
    </Parameter>
  </Parameter>
</ParameterList>

If the status code is not \`200\`, the request fails. See the \`message\` field in the response body for the reason for this failure. Refer to [Response status codes](/en/api-reference/api-ref/rtc/response-status-codes) for details.

### Authorization [#authorization-4]

This endpoint requires [Basic authentication](/en/api-reference/api-ref/rtc/authentication).

### Request example [#request-example-3]

Test this request in [Postman](https://documenter.getpostman.com/view/6319646/SVSLr9AM#6d8e52b7-3273-4dd5-94ee-389448429d96) or use one of the following code examples:

<Tabs defaultValue="curl">
  <TabsList>
    <TabsTrigger value="curl">
      cURL
    </TabsTrigger>

    <TabsTrigger value="node">
      Node
    </TabsTrigger>

    <TabsTrigger value="python">
      Python
    </TabsTrigger>
  </TabsList>

  <TabsContent value="curl">
    \`\`\`bash
    curl --request GET \\
      --url https://api.sd-rtn.com/dev/v1/channel/user/property/<appid>/<uid>/<channelName> \\
      --header 'Accept: application/json' \\
      --header 'Authorization: Basic <your_base64_encoded_credentials>'
    \`\`\`
  </TabsContent>

  <TabsContent value="node">
    \`\`\`js
    const https = require('https');

    const options = {
      method: 'GET',
      hostname: 'api.sd-rtn.com',
      port: null,
      path: '/dev/v1/channel/user/property/<appid>/<uid>/<channelName>',
      headers: {
        Authorization: 'Basic <your_base64_encoded_credentials>',
        Accept: 'application/json'
      }
    };

    const req = https.request(options, function (res) {
      const chunks = [];

      res.on('data', function (chunk) {
        chunks.push(chunk);
      });

      res.on('end', function () {
        const body = Buffer.concat(chunks);
        console.log(body.toString());
      });
    });

    req.end();
    \`\`\`
  </TabsContent>

  <TabsContent value="python">
    \`\`\`python

    conn = http.client.HTTPSConnection("api.sd-rtn.com")

    headers = {
        'Authorization': "Basic <your_base64_encoded_credentials>",
        'Accept': "application/json"
    }

    conn.request("GET", "/dev/v1/channel/user/property/<appid>/<uid>/<channelName>", headers=headers)

    res = conn.getresponse()
    data = res.read()
    print(data.decode("utf-8"))
    \`\`\`
  </TabsContent>
</Tabs>

### Response example [#response-example-3]

\`\`\`json
{
  "success": true,
  "data": {
    "join": 1640330382,
    "uid": 2845863044,
    "in_channel": true,
    "platform": 7,
    "role": 2
  }
}
\`\`\`

## Manage user privileges [#manage-user-privileges]

This page illustrates the usage of the privilege banning API, including usage principles, applicable use-cases, inapplicable use-cases, and best practices for the exception handling.

For the API reference, see [Create rule](#create-a-rule-to-ban-user-privileges).

## Usage principles [#usage-principles]

Follow these principles when using the API:

* Prevent the main business processes from relying too heavily on the privilege banning API.
* Prevent a RESTful call failure from affecting the main business processes.

## Applicable use-cases [#applicable-use-cases]

### Ban violating users [#ban-violating-users]

Revoke the user's right to join the channel based on UID: Set \`privileges\` to \`join_channel\`, fill in \`uid\`, leave \`cname\` and \`ip\` blank, and set \`time\` to a value other than \`0\`.

For example, when it is impossible to completely ban a violating user through your business signaling, you can ban them with this API by their UID.

Note that the banning API can be used as a fallback for your business signaling system, but you should consider whether there is a need to unban. Unbanning users is usually not integrated into the main service process to prevent possible call failures from affecting its operation.

* Correct usage example: A user files a complaint and their account is manually unbanned.
* Incorrect usage example: A user is automatically unbanned the next time they join the channel. This might result in the user being unable to join because of an API call failure.

### Ban user audio and video privileges [#ban-user-audio-and-video-privileges]

Ban the user's audio and video streaming privileges based on UID: Set \`privileges\` to \`publish_audio\` or \`publish_video\`, fill in \`uid\`, leave \`cname\` and \`ip\` blank, and set \`time\` to a value other than \`0\`.

For example, you can prevent a microphone from being used after it was left unattended by the streaming user.

Note that banning a user's streaming privileges through this API is a dangerous operation. It should be used as a backup measure after the user was notified of a failure to disconnect.

Take into full consideration the impact that a delay or failure to unban might have on the user's ability to use the microphone again, and set the ban time to be as short as possible.

### Kick a user out of a channel [#kick-a-user-out-of-a-channel]

Kick the user out of the channel based on the channel name and UID. This means taking the user offline, after which they can log in again. Set \`privileges\` to \`join_channel\`, fill in \`cname\` and \`uid\`, leave \`ip\` blank, and set \`time\` to \`0\`.

For example, if the host logs in from 2 devices simultaneously, these two devices will stream with the same \`uid\`, causing an exception. This API can be used to kick both devices offline, after which one of them can reconnect.

This API can be used as a backup if the leave channel signal sent by your own business server is invalid.

Note that a one-time kick with \`time\` set to \`0\` is a safer way to use this API. When the kick request reaches the edge node, if the SDK is disconnected from the edge node, the one-time kick will fail. If you find that the SDK is reconnected to the edge node after kicking the user, you can call this API again.

### Disband a channel [#disband-a-channel]

When streaming ends, kick all users out of the channel by the channel name: set \`privileges\` to \`join_channel\`, fill in \`cname\`, leave \`uid\` and \`ip\` blank, and set \`time\` to \`0\`.

Use this API to disband a channel. Set \`time\` to the time that the channel should not be restarted.

<CalloutContainer type="warning">
  <CalloutTitle>
    Caution
  </CalloutTitle>

  <CalloutDescription>
    Using \`cname\` for a banning rule is equivalent to destroying a channel. Make sure that doing so meets your business requirements.
  </CalloutDescription>
</CalloutContainer>

In this use-case, use your own signaling to notify the SDK to call \`leave channel\` after the streaming ends. If the business signaling cannot meet the needs, you can use forced disbanding as a fallback. If you rely entirely on RESTful requests, the impact caused by request failures might be too heavy.

If the channel will not be reused, you can set the ban for a longer period of time. If the channel will be reused after a certain period, make sure that the end time of the channel ban is not later than the next channel creation time. If the channel will be reused in an unknown period of time, it is recommended to kick the user from the channel or set the ban time to 1 minute.

It is not recommended to ban for a longer time and call the unbanning API when the channel starts. If unbanning fails, the users will not be able to join the channel.

### Ban illegal IPs [#ban-illegal-ips]

Prevent the user from joining a channel based on IP: Set \`privileges\` to \`join_channel\`, fill in \`ip\`, leave \`cname\` and \`uid\` blank, and set \`time\` to a value other than \`0\`.

For example, when a business is attacked and the IP of the attack source is identified, the \`ip\` field can be used to ban it.

Note that using the IP as the banning rule may accidentally affect other users, such as when multiple people share it.

## Non-applicable use-cases [#non-applicable-use-cases]

The following table summarizes the use-cases where this API should not be used and provides the reasons why.

| Use-case                                                   | Details                                                                                                           | Reason                                                                                                                                                                                                                           |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Use the banning API for user microphone management         | Ban the streaming privilege when the user is off the microphone, and restore it when the user is back on.         | The real-time communication logic depends on the availability of the banning API. If the unbanning fails, the user cannot send streams.                                                                                          |
| Use the banning API for user channel permission management | Ban the user's privilege to join the channel when the user leaves it, and restore it when they attempt to rejoin. | The real-time communication logic depends on the availability of the banning API. If the unbanning fails, the user cannot join the channel. It is recommended to use a one-time kick to ensure that the user leaves the channel. |

<CalloutContainer type="info">
  <CalloutTitle>
    Note
  </CalloutTitle>

  <CalloutDescription>
    To better manage microphone positions, Agora provides a channel status API and a Notifications service. You can use them to obtain the real-time status of a channel and design the subsequent business logic. For details, see [Receive notifications about channel events](/en/realtime-media/rtc/build/optimize-and-operate/receive-notifications).
  </CalloutDescription>
</CalloutContainer>

## Best practices for handling call exceptions [#best-practices-for-handling-call-exceptions]

* Timeout settings

  It is recommended to set the client request timeout to a value of more than 20s (minimum 5s) to mitigate network fluctuations. When retrying a timed-out request, increase the timeout accordingly to improve the request success rate.

* Retry the request

  Decide whether to retry the request after failure and determine the number of retries based on your own business logic.

  When a request returns an error code greater than or equal to \`500\` or the request times out, you can continue to retry and increase the waiting interval between multiple retries in a gradual manner.

## Query Agora Notifications IP addresses [#query-agora-notifications-ip-addresses]

### \`GET\` \`https://api.agora.io/v2/ncs/ip\` [#get-httpsapiagoraiov2ncsip]

Use this endpoint to retrieve the IP addresses of the Agora Notifications server. If your server is behind a firewall, add these IP addresses to your allowlist to receive channel event notifications.

<CalloutContainer type="success">
  <CalloutDescription>
    Agora occasionally adjusts the Agora Notifications IP addresses. Call this endpoint at least every 24 hours and automatically update your firewall configuration with the latest addresses.
  </CalloutDescription>
</CalloutContainer>

## Request [#request-4]

The request URL and request body is case-sensitive. All requests must use HTTPS.

### Request header [#request-header-5]

* \`Content-Type\`: \`application/json\`
* The request header must contain the \`Authorization\` field. For details, see [RESTful authentication](/en/api-reference/api-ref/rtc/authentication).

## Response [#response-5]

A \`200\` status code indicates success. The response body contains the following parameters:

<ParameterList title="OK">
  <Parameter name="data" type="object">
    <Parameter name="service" type="object">
      <Parameter name="hosts" type="array">
        A list of Agora Notifications server host objects.

        <Parameter name="primaryIP" type="string">
          The IP address of the Agora Notifications server. Add all IP addresses returned in this field to your firewall allowlist.
        </Parameter>
      </Parameter>
    </Parameter>
  </Parameter>
</ParameterList>

If the status code is not \`200\`, the request fails. See the \`message\` field in the response body for the reason for this failure. Refer to [Response status codes](/en/api-reference/api-ref/rtc/response-status-codes) for details.

### Authorization [#authorization-5]

This endpoint requires [Basic authentication](/en/api-reference/api-ref/rtc/authentication).

### Request example [#request-example-4]

Use one of the following code examples to test this request:

<Tabs defaultValue="curl">
  <TabsList>
    <TabsTrigger value="curl">
      cURL
    </TabsTrigger>

    <TabsTrigger value="node">
      Node
    </TabsTrigger>

    <TabsTrigger value="python">
      Python
    </TabsTrigger>
  </TabsList>

  <TabsContent value="curl">
    \`\`\`bash
    curl --request GET \\
      --url https://api.sd-rtn.com/v2/ncs/ip \\
      --header 'Accept: application/json' \\
      --header 'Authorization: Basic <your_base64_encoded_credentials>'
    \`\`\`
  </TabsContent>

  <TabsContent value="node">
    \`\`\`js
    const https = require('https');

    const options = {
      method: 'GET',
      hostname: 'api.sd-rtn.com',
      port: null,
      path: '/v2/ncs/ip',
      headers: {
        Authorization: 'Basic <your_base64_encoded_credentials>',
        Accept: 'application/json'
      }
    };

    const req = https.request(options, function (res) {
      const chunks = [];

      res.on('data', function (chunk) {
        chunks.push(chunk);
      });

      res.on('end', function () {
        const body = Buffer.concat(chunks);
        console.log(body.toString());
      });
    });

    req.end();
    \`\`\`
  </TabsContent>

  <TabsContent value="python">
    \`\`\`python

    conn = http.client.HTTPSConnection("api.sd-rtn.com")

    headers = {
        'Authorization': "Basic <your_base64_encoded_credentials>",
        'Accept': "application/json"
    }

    conn.request("GET", "/v2/ncs/ip", headers=headers)

    res = conn.getresponse()
    data = res.read()
    print(data.decode("utf-8"))
    \`\`\`
  </TabsContent>
</Tabs>

### Response example [#response-example-4]

\`\`\`json
{
  "data": {
    "service": {
      "hosts": [
        {
          "primaryIP": "xxx.xxx.xxx.xxx"
        },
        {
          "primaryIP": "xxx.xxx.xxx.xxx"
        }
      ]
    }
  }
}
\`\`\`

## Response status codes [#response-status-codes-1]

This page describes all response status codes returned when calling the channel management RESTful API.

If the status code is \`200\`, the request is successful. If not, troubleshoot the problem based on the \`message\` and \`reason\` fields that may appear in the corresponding response body.

For example, when a request fails, you might receive the following response:

\`\`\`json
# 400 Bad Request
{
  "message": "invalid appid"
}
\`\`\`

### Status codes [#status-codes]

The following table summarizes all response status codes, their meanings, and recommended actions:

| Response status code | Description                                | Recommended actions                                                                                                                                           |
| :------------------- | :----------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 200                  | The operation is successful.               | No troubleshooting required.                                                                                                                                  |
| 400                  | Bad request.                               | Troubleshoot based on the \`message\` field in the response body.                                                                                               |
| 401                  | Unauthorized.                              | Check and confirm that your authentication information is correct. Possible reasons include: App ID does not exist.<br />Non-matching customer ID and secret. |
| 403                  | Access is forbidden.                       | The authorization information is incorrect. Contact [Agora technical support](mailto\\:support@agora.io).                                                      |
| 404                  | The requested resource could not be found. | Confirm that the requested URL and resource are correct.                                                                                                      |
| 415                  | Unsupported media type.                    | Make sure you have set \`Content-Type\` in the request header as \`application/json\`.                                                                            |
| 429                  | Too many requests.                         | Wait and retry.                                                                                                                                               |
| 500                  | Internal server error.                     | Use a backoff strategy for query requests or contact [Agora technical support](mailto\\:support@agora.io)                                                      |

<CalloutContainer type="info">
  <CalloutTitle>
    Note
  </CalloutTitle>

  <CalloutDescription>
    If the problem is not solved after taking the recommended action, print out the \`X-Request-ID\` and \`X-Resource-ID\` response header values and contact [technical support](mailto\\:support@agora.io).
  </CalloutDescription>
</CalloutContainer>

### Troubleshooting example [#troubleshooting-example]

A call to create a privilege banning rule returns \`400 Bad Request\` and the \`message\` field value is \`invalid appid\`.

This means that the App ID is invalid and the rule creation has failed. Obtain the App ID in [Agora Console](https://console.agora.io/) and call the API again.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "In addition to the SDK that you integrate into the app client, Agora provides a set of simple, secure, and reliable server-side RESTful APIs to manage real-time audio and video channels."
  }, {
    heading: undefined,
    content: "This page provides detailed documentation for the Agora Channel Management RESTful APIs."
  }, {
    heading: "key-features-and-use-cases",
    content: "Key features"
  }, {
    heading: "key-features-and-use-cases",
    content: "Description"
  }, {
    heading: "key-features-and-use-cases",
    content: "Typical application use-cases"
  }, {
    heading: "key-features-and-use-cases",
    content: "Manage user privileges"
  }, {
    heading: "key-features-and-use-cases",
    content: "Includes removing specified users from channels and preventing them from sending audio and video streams."
  }, {
    heading: "key-features-and-use-cases",
    content: "Unauthorized users appear in a live broadcast.Users disrupt the room during a live broadcast.The signaling message sent to the client is hijacked.The user is offline abnormally, which interferes with timely user list updates."
  }, {
    heading: "key-features-and-use-cases",
    content: "Query channel information"
  }, {
    heading: "key-features-and-use-cases",
    content: "Query the list of online channels, users in a channel, and the status of a specified user."
  }, {
    heading: "key-features-and-use-cases",
    content: "In a use-case where the number of concurrent channels is not large, directly query the channel list to sync the channel status. In a use-case where real-time sync performance is not required, query and sync the user list and status in the channel."
  }, {
    heading: "domain",
    content: "All requests are sent to the following domain name: `api.agora.io`."
  }, {
    heading: "domain",
    content: "The Agora RESTful API supports only HTTPS with TLS 1.0, 1.1, or 1.2. Requests over plain HTTP are not supported."
  }, {
    heading: "domain",
    content: "For example, after implementing basic HTTP authentication, use the following code to send a simple request to obtain the total number of channels and the number of users in each channel:"
  }, {
    heading: "domain",
    content: "Use the channel management RESTful API along with the Agora Notifications service for reliable and effective channel management and status synchronization."
  }, {
    heading: "call-frequency-limit",
    content: "For each Agora account (not each App ID), the maximum call frequency of every online channel statistics query API is 20 queries per second. The maximum call frequency of every other API is 10 queries per second. If you are frequency limited when calling the APIs, see How can I avoid being frequency limited when calling Agora Server RESTful APIs to optimize API call frequency."
  }, {
    heading: "response-status-codes",
    content: "For a description of the response status codes, refer to Response status codes."
  }, {
    heading: "authentication",
    content: "The `Content-Type` field in all HTTP request headers is `application/json`. All requests and responses are in JSON format. All request URLs and request bodies are case-sensitive."
  }, {
    heading: "authentication",
    content: "The Agora Channel Management RESTful APIs only support HTTPS. Before sending HTTP requests, you must generate a Base64-encoded credential with the **Customer ID** and **Customer Secret** provided by Agora, and pass the credential to the `Authorization` field in the HTTP request header. See RESTful authentication for details."
  }, {
    heading: "call-the-api",
    content: "This page explains the structure of the channel management RESTful API and how to call it correctly."
  }, {
    heading: "prerequisites",
    content: "Before calling the API, make sure you have the following:"
  }, {
    heading: "prerequisites",
    content: "An Agora app ID"
  }, {
    heading: "prerequisites",
    content: "Customer ID"
  }, {
    heading: "prerequisites",
    content: "Customer key"
  }, {
    heading: "request-url",
    content: "Following is a sample request URL:"
  }, {
    heading: "request-url",
    content: "`https`: The communication protocol. Agora uses HTTPS."
  }, {
    heading: "request-url",
    content: "`api.agora.io`: The domain name of the Agora server."
  }, {
    heading: "request-url",
    content: "`dev/v1/kicking-rule`: The resource path, including the API version and the resource name."
  }, {
    heading: "request-url",
    content: "The above example is for reference only. Refer to the documentation of the API you want to call, select the method (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) in the code source file or debug application, and then configure the actual request URL according to your needs. The request URL is case-sensitive."
  }, {
    heading: "request-structure",
    content: "A request consists of two parts: The request header and the request body."
  }, {
    heading: "request-structure",
    content: "The following example shows how to create a privilege banning rule by sending a `POST` request containing the app ID, channel name, user ID, user IP, ban duration, and the privilege list to the specified API address:"
  }, {
    heading: "request-header",
    content: "The request header contains the following information needed to process the request:"
  }, {
    heading: "request-header",
    content: "`Accept`: Tells the server what types of responses the client can handle, such as `application/json`."
  }, {
    heading: "request-header",
    content: "`Authorization`: The Agora RESTful API requires HTTP authentication. Every time you send an HTTP request, fill in the `Authorization` field in the request header. See RESTful authentication for details."
  }, {
    heading: "request-header",
    content: "`Content-Type`: Specifies the type of the request body, such as `application/json`."
  }, {
    heading: "request-body-optional",
    content: "The request body contains the information to be sent to the server. For example, to create a new rule to ban user privileges, include the relevant information, such as the app ID, channel name, user ID, user IP, ban duration, and the banned privileges. The request body is case-sensitive."
  }, {
    heading: "response",
    content: "After you send the request, the Agora server sends a response that includes a response status code and a response body. The channel management RESTful API does not have a response header."
  }, {
    heading: "response-status-code",
    content: "The HTTP response status code can be one of the following:"
  }, {
    heading: "response-status-code",
    content: "`200`: The request is successful."
  }, {
    heading: "response-status-code",
    content: "Other than `200`: Refer to Response status codes to troubleshoot the problem."
  }, {
    heading: "response-body",
    content: "The response body contains the information returned by the server. For example, the response body of creating a banning rule includes the request status and the rule ID."
  }, {
    heading: "response-body",
    content: "The following is a response example for creating a banning rule:"
  }, {
    heading: "error-handling",
    content: "If you encounter a problem, use developer tools to view the request and response, and troubleshoot based on the response status code. If the problem persists, contact technical support."
  }, {
    heading: "get-httpsapiagoraiodevv1channelappid",
    content: "Use this endpoint to get the list of all channels under a specified project. The channel list is returned by page; specify the page number and page size in the request URL."
  }, {
    heading: "get-httpsapiagoraiodevv1channelappid",
    content: "If the number of users in a channel changes frequently, the query results may be inaccurate. The following situations may occur:"
  }, {
    heading: "get-httpsapiagoraiodevv1channelappid",
    content: "A channel appears repeatedly on different pages."
  }, {
    heading: "get-httpsapiagoraiodevv1channelappid",
    content: "A channel does not appear on any page."
  }, {
    heading: "request",
    content: "The request URL and request body is case-sensitive. All requests must use HTTPS."
  }, {
    heading: "request-header-1",
    content: "`Content-Type`: `application/json`"
  }, {
    heading: "request-header-1",
    content: "The request header must contain the `Authorization` field. For details, see RESTful authentication."
  }, {
    heading: "path-parameters",
    content: "The App ID of the project. You can get it through one of the following methods:"
  }, {
    heading: "path-parameters",
    content: "Copy from the Agora Console"
  }, {
    heading: "path-parameters",
    content: "Call the Get all projects API, and read the value of the `vendor_key` field in the response body."
  }, {
    heading: "query-parameters",
    content: "The page number to query. The default value is `0`, which is the first page. The value of `page_no` cannot exceed `(total number of channels / page_size) - 1`; otherwise, the specified page contains no channels."
  }, {
    heading: "query-parameters",
    content: "The number of channels per page."
  }, {
    heading: "response-1",
    content: "A `200` status code indicates success. The response body contains the following parameters:"
  }, {
    heading: "response-1",
    content: "The state of this request:"
  }, {
    heading: "response-1",
    content: "`true`: Success."
  }, {
    heading: "response-1",
    content: "`false`: Reserved for future use."
  }, {
    heading: "response-1",
    content: "Channel statistics."
  }, {
    heading: "response-1",
    content: "The list of channels. Each object in the array represents one channel and contains the following fields. If the specified page contains no channels, this field is empty."
  }, {
    heading: "response-1",
    content: "The channel name."
  }, {
    heading: "response-1",
    content: "The total number of users in the channel."
  }, {
    heading: "response-1",
    content: "The total number of channels under the specified project."
  }, {
    heading: "response-1",
    content: "If the status code is not `200`, the request fails. See the `message` field in the response body for the reason for this failure. Refer to Response status codes for details."
  }, {
    heading: "authorization-1",
    content: "This endpoint requires Basic authentication."
  }, {
    heading: "request-example",
    content: "Test this request in Postman or use one of the following code examples:"
  }, {
    heading: "get-httpsapiagoraiodevv1channeluserappidchannelnamehosts_only",
    content: "Use this endpoint to get the list of hosts in a specified channel. This endpoint is only available in the `LIVE_BROADCASTING` profile (`mode = 2`); all users in the channel must use the same profile, otherwise query results may be inaccurate."
  }, {
    heading: "request-1",
    content: "The request URL and request body is case-sensitive. All requests must use HTTPS."
  }, {
    heading: "request-header-2",
    content: "`Content-Type`: `application/json`"
  }, {
    heading: "request-header-2",
    content: "The request header must contain the `Authorization` field. For details, see RESTful authentication."
  }, {
    heading: "path-parameters-1",
    content: "The App ID of the project. You can get it through one of the following methods:"
  }, {
    heading: "path-parameters-1",
    content: "Copy from the Agora Console"
  }, {
    heading: "path-parameters-1",
    content: "Call the Get all projects API, and read the value of the `vendor_key` field in the response body."
  }, {
    heading: "path-parameters-1",
    content: "The channel name."
  }, {
    heading: "response-2",
    content: "A `200` status code indicates success. The response body contains the following parameters:"
  }, {
    heading: "response-2",
    content: "The state of this request:"
  }, {
    heading: "response-2",
    content: "`true`: Success."
  }, {
    heading: "response-2",
    content: "`false`: Reserved for future use."
  }, {
    heading: "response-2",
    content: "User information."
  }, {
    heading: "response-2",
    content: "Whether the specified channel exists:"
  }, {
    heading: "response-2",
    content: "`true`: The channel exists."
  }, {
    heading: "response-2",
    content: "`false`: The channel does not exist. When this is `false`, no other fields are returned."
  }, {
    heading: "response-2",
    content: "The channel profile:"
  }, {
    heading: "response-2",
    content: "`1`: The `COMMUNICATION` profile."
  }, {
    heading: "response-2",
    content: "`2`: The `LIVE_BROADCASTING` profile."
  }, {
    heading: "response-2",
    content: "User IDs of all hosts in the channel. Returned only when `mode` is `2`."
  }, {
    heading: "response-2",
    content: "If the status code is not `200`, the request fails. See the `message` field in the response body for the reason for this failure. Refer to Response status codes for details."
  }, {
    heading: "synchronizing-host-online-status",
    content: "To synchronize the online status of hosts, you can use this endpoint or the query user status endpoint. This endpoint requires a lower call frequency and offers higher efficiency, so Agora recommends it for this purpose."
  }, {
    heading: "authorization-2",
    content: "This endpoint requires Basic authentication."
  }, {
    heading: "get-httpsapiagoraiodevv1channeluserappidchannelname",
    content: "Use this endpoint to get the list of all users in a specified channel. All users in the channel must use the same channel profile; otherwise, the query results may be inaccurate."
  }, {
    heading: "get-httpsapiagoraiodevv1channeluserappidchannelname",
    content: "The returned list differs based on the channel profile:"
  }, {
    heading: "get-httpsapiagoraiodevv1channeluserappidchannelname",
    content: "`COMMUNICATION` profile: Returns the list of all users in the channel."
  }, {
    heading: "get-httpsapiagoraiodevv1channeluserappidchannelname",
    content: "`LIVE_BROADCASTING` profile: Returns the list of all hosts and audience members in the channel."
  }, {
    heading: "request-2",
    content: "The request URL and request body is case-sensitive. All requests must use HTTPS."
  }, {
    heading: "request-header-3",
    content: "`Content-Type`: `application/json`"
  }, {
    heading: "request-header-3",
    content: "The request header must contain the `Authorization` field. For details, see RESTful authentication."
  }, {
    heading: "path-parameters-2",
    content: "The App ID of the project. You can get it through one of the following methods:"
  }, {
    heading: "path-parameters-2",
    content: "Copy from the Agora Console"
  }, {
    heading: "path-parameters-2",
    content: "Call the Get all projects API, and read the value of the `vendor_key` field in the response body."
  }, {
    heading: "path-parameters-2",
    content: "The channel name."
  }, {
    heading: "query-parameters-1",
    content: "When specified, only the host list is returned. Applicable to the `LIVE_BROADCASTING` profile only."
  }, {
    heading: "response-3",
    content: "A `200` status code indicates success. The response body contains the following parameters:"
  }, {
    heading: "response-3",
    content: "The state of this request:"
  }, {
    heading: "response-3",
    content: "`true`: Success."
  }, {
    heading: "response-3",
    content: "`false`: Reserved for future use."
  }, {
    heading: "response-3",
    content: "User information."
  }, {
    heading: "response-3",
    content: "Whether the specified channel exists:"
  }, {
    heading: "response-3",
    content: "`true`: The channel exists."
  }, {
    heading: "response-3",
    content: "`false`: The channel does not exist. When this is `false`, no other fields are returned."
  }, {
    heading: "response-3",
    content: "The channel profile:"
  }, {
    heading: "response-3",
    content: "`1`: The `COMMUNICATION` profile."
  }, {
    heading: "response-3",
    content: "`2`: The `LIVE_BROADCASTING` profile."
  }, {
    heading: "response-3",
    content: "The total number of users in the channel. Returned only when `mode` is `1`."
  }, {
    heading: "response-3",
    content: "User IDs of all users in the channel. Returned only when `mode` is `1`."
  }, {
    heading: "response-3",
    content: "User IDs of all hosts in the channel. Returned only when `mode` is `2`."
  }, {
    heading: "response-3",
    content: "User IDs of the first 10,000 audience members in the channel. Returned only when `mode` is `2` and `hosts_only` is not specified."
  }, {
    heading: "response-3",
    content: "The total number of audience members in the channel. Returned only when `mode` is `2` and `hosts_only` is not specified."
  }, {
    heading: "response-3",
    content: "If the status code is not `200`, the request fails. See the `message` field in the response body for the reason for this failure. Refer to Response status codes for details."
  }, {
    heading: "synchronizing-channel-online-statistics",
    content: "To synchronize online channel statistics, you can use this endpoint or the query user status endpoint. This endpoint requires a lower call frequency and offers higher efficiency, so Agora recommends it for this purpose."
  }, {
    heading: "authorization-3",
    content: "This endpoint requires Basic authentication."
  }, {
    heading: "request-example-2",
    content: "Test this request in Postman or use one of the following code examples:"
  }, {
    heading: "response-example-2",
    content: "**In `COMMUNICATION` profile:**"
  }, {
    heading: "response-example-2",
    content: "**In `LIVE_BROADCASTING` profile:**"
  }, {
    heading: "get-httpsapiagoraiodevv1channeluserpropertyappiduidchannelname",
    content: "Use this endpoint to get the status of a specified user. It checks whether the user is in the specified channel and, if present, returns the user's role and the time they joined."
  }, {
    heading: "request-3",
    content: "The request URL and request body is case-sensitive. All requests must use HTTPS."
  }, {
    heading: "request-header-4",
    content: "`Content-Type`: `application/json`"
  }, {
    heading: "request-header-4",
    content: "The request header must contain the `Authorization` field. For details, see RESTful authentication."
  }, {
    heading: "path-parameters-3",
    content: "The App ID of the project. You can get it through one of the following methods:"
  }, {
    heading: "path-parameters-3",
    content: "Copy from the Agora Console"
  }, {
    heading: "path-parameters-3",
    content: "Call the Get all projects API, and read the value of the `vendor_key` field in the response body."
  }, {
    heading: "path-parameters-3",
    content: "The user ID. This parameter does not support string user accounts; use the integer user ID only."
  }, {
    heading: "path-parameters-3",
    content: "The channel name."
  }, {
    heading: "response-4",
    content: "A `200` status code indicates success. The response body contains the following parameters:"
  }, {
    heading: "response-4",
    content: "The state of this request:"
  }, {
    heading: "response-4",
    content: "`true`: Success."
  }, {
    heading: "response-4",
    content: "`false`: Reserved for future use."
  }, {
    heading: "response-4",
    content: "User statistics."
  }, {
    heading: "response-4",
    content: "Whether the user is in the channel. When `false`, no other fields are returned."
  }, {
    heading: "response-4",
    content: "The user ID."
  }, {
    heading: "response-4",
    content: "The Unix timestamp (in seconds) of when the user joined the channel."
  }, {
    heading: "response-4",
    content: "The role of the user in the channel:"
  }, {
    heading: "response-4",
    content: "`0`: Unknown user role."
  }, {
    heading: "response-4",
    content: "`1`: User, in a communication channel."
  }, {
    heading: "response-4",
    content: "`2`: Host, in a live broadcast channel."
  }, {
    heading: "response-4",
    content: "`3`: Audience, in a live broadcast channel."
  }, {
    heading: "response-4",
    content: "The platform of the user's device. Common values include:"
  }, {
    heading: "response-4",
    content: "`1`: Android"
  }, {
    heading: "response-4",
    content: "`2`: iOS"
  }, {
    heading: "response-4",
    content: "`5`: Windows"
  }, {
    heading: "response-4",
    content: "`6`: Linux"
  }, {
    heading: "response-4",
    content: "`7`: Web"
  }, {
    heading: "response-4",
    content: "`8`: macOS"
  }, {
    heading: "response-4",
    content: "`0`: Others"
  }, {
    heading: "response-4",
    content: "If the status code is not `200`, the request fails. See the `message` field in the response body for the reason for this failure. Refer to Response status codes for details."
  }, {
    heading: "authorization-4",
    content: "This endpoint requires Basic authentication."
  }, {
    heading: "request-example-3",
    content: "Test this request in Postman or use one of the following code examples:"
  }, {
    heading: "manage-user-privileges",
    content: "This page illustrates the usage of the privilege banning API, including usage principles, applicable use-cases, inapplicable use-cases, and best practices for the exception handling."
  }, {
    heading: "manage-user-privileges",
    content: "For the API reference, see Create rule."
  }, {
    heading: "usage-principles",
    content: "Follow these principles when using the API:"
  }, {
    heading: "usage-principles",
    content: "Prevent the main business processes from relying too heavily on the privilege banning API."
  }, {
    heading: "usage-principles",
    content: "Prevent a RESTful call failure from affecting the main business processes."
  }, {
    heading: "ban-violating-users",
    content: "Revoke the user's right to join the channel based on UID: Set `privileges` to `join_channel`, fill in `uid`, leave `cname` and `ip` blank, and set `time` to a value other than `0`."
  }, {
    heading: "ban-violating-users",
    content: "For example, when it is impossible to completely ban a violating user through your business signaling, you can ban them with this API by their UID."
  }, {
    heading: "ban-violating-users",
    content: "Note that the banning API can be used as a fallback for your business signaling system, but you should consider whether there is a need to unban. Unbanning users is usually not integrated into the main service process to prevent possible call failures from affecting its operation."
  }, {
    heading: "ban-violating-users",
    content: "Correct usage example: A user files a complaint and their account is manually unbanned."
  }, {
    heading: "ban-violating-users",
    content: "Incorrect usage example: A user is automatically unbanned the next time they join the channel. This might result in the user being unable to join because of an API call failure."
  }, {
    heading: "ban-user-audio-and-video-privileges",
    content: "Ban the user's audio and video streaming privileges based on UID: Set `privileges` to `publish_audio` or `publish_video`, fill in `uid`, leave `cname` and `ip` blank, and set `time` to a value other than `0`."
  }, {
    heading: "ban-user-audio-and-video-privileges",
    content: "For example, you can prevent a microphone from being used after it was left unattended by the streaming user."
  }, {
    heading: "ban-user-audio-and-video-privileges",
    content: "Note that banning a user's streaming privileges through this API is a dangerous operation. It should be used as a backup measure after the user was notified of a failure to disconnect."
  }, {
    heading: "ban-user-audio-and-video-privileges",
    content: "Take into full consideration the impact that a delay or failure to unban might have on the user's ability to use the microphone again, and set the ban time to be as short as possible."
  }, {
    heading: "kick-a-user-out-of-a-channel",
    content: "Kick the user out of the channel based on the channel name and UID. This means taking the user offline, after which they can log in again. Set `privileges` to `join_channel`, fill in `cname` and `uid`, leave `ip` blank, and set `time` to `0`."
  }, {
    heading: "kick-a-user-out-of-a-channel",
    content: "For example, if the host logs in from 2 devices simultaneously, these two devices will stream with the same `uid`, causing an exception. This API can be used to kick both devices offline, after which one of them can reconnect."
  }, {
    heading: "kick-a-user-out-of-a-channel",
    content: "This API can be used as a backup if the leave channel signal sent by your own business server is invalid."
  }, {
    heading: "kick-a-user-out-of-a-channel",
    content: "Note that a one-time kick with `time` set to `0` is a safer way to use this API. When the kick request reaches the edge node, if the SDK is disconnected from the edge node, the one-time kick will fail. If you find that the SDK is reconnected to the edge node after kicking the user, you can call this API again."
  }, {
    heading: "disband-a-channel",
    content: "When streaming ends, kick all users out of the channel by the channel name: set `privileges` to `join_channel`, fill in `cname`, leave `uid` and `ip` blank, and set `time` to `0`."
  }, {
    heading: "disband-a-channel",
    content: "Use this API to disband a channel. Set `time` to the time that the channel should not be restarted."
  }, {
    heading: "disband-a-channel",
    content: "Using `cname` for a banning rule is equivalent to destroying a channel. Make sure that doing so meets your business requirements."
  }, {
    heading: "disband-a-channel",
    content: "In this use-case, use your own signaling to notify the SDK to call `leave channel` after the streaming ends. If the business signaling cannot meet the needs, you can use forced disbanding as a fallback. If you rely entirely on RESTful requests, the impact caused by request failures might be too heavy."
  }, {
    heading: "disband-a-channel",
    content: "If the channel will not be reused, you can set the ban for a longer period of time. If the channel will be reused after a certain period, make sure that the end time of the channel ban is not later than the next channel creation time. If the channel will be reused in an unknown period of time, it is recommended to kick the user from the channel or set the ban time to 1 minute."
  }, {
    heading: "disband-a-channel",
    content: "It is not recommended to ban for a longer time and call the unbanning API when the channel starts. If unbanning fails, the users will not be able to join the channel."
  }, {
    heading: "ban-illegal-ips",
    content: "Prevent the user from joining a channel based on IP: Set `privileges` to `join_channel`, fill in `ip`, leave `cname` and `uid` blank, and set `time` to a value other than `0`."
  }, {
    heading: "ban-illegal-ips",
    content: "For example, when a business is attacked and the IP of the attack source is identified, the `ip` field can be used to ban it."
  }, {
    heading: "ban-illegal-ips",
    content: "Note that using the IP as the banning rule may accidentally affect other users, such as when multiple people share it."
  }, {
    heading: "non-applicable-use-cases",
    content: "The following table summarizes the use-cases where this API should not be used and provides the reasons why."
  }, {
    heading: "non-applicable-use-cases",
    content: "Use-case"
  }, {
    heading: "non-applicable-use-cases",
    content: "Details"
  }, {
    heading: "non-applicable-use-cases",
    content: "Reason"
  }, {
    heading: "non-applicable-use-cases",
    content: "Use the banning API for user microphone management"
  }, {
    heading: "non-applicable-use-cases",
    content: "Ban the streaming privilege when the user is off the microphone, and restore it when the user is back on."
  }, {
    heading: "non-applicable-use-cases",
    content: "The real-time communication logic depends on the availability of the banning API. If the unbanning fails, the user cannot send streams."
  }, {
    heading: "non-applicable-use-cases",
    content: "Use the banning API for user channel permission management"
  }, {
    heading: "non-applicable-use-cases",
    content: "Ban the user's privilege to join the channel when the user leaves it, and restore it when they attempt to rejoin."
  }, {
    heading: "non-applicable-use-cases",
    content: "The real-time communication logic depends on the availability of the banning API. If the unbanning fails, the user cannot join the channel. It is recommended to use a one-time kick to ensure that the user leaves the channel."
  }, {
    heading: "non-applicable-use-cases",
    content: "To better manage microphone positions, Agora provides a channel status API and a Notifications service. You can use them to obtain the real-time status of a channel and design the subsequent business logic. For details, see Receive notifications about channel events."
  }, {
    heading: "best-practices-for-handling-call-exceptions",
    content: "Timeout settings"
  }, {
    heading: "best-practices-for-handling-call-exceptions",
    content: "It is recommended to set the client request timeout to a value of more than 20s (minimum 5s) to mitigate network fluctuations. When retrying a timed-out request, increase the timeout accordingly to improve the request success rate."
  }, {
    heading: "best-practices-for-handling-call-exceptions",
    content: "Retry the request"
  }, {
    heading: "best-practices-for-handling-call-exceptions",
    content: "Decide whether to retry the request after failure and determine the number of retries based on your own business logic."
  }, {
    heading: "best-practices-for-handling-call-exceptions",
    content: "When a request returns an error code greater than or equal to `500` or the request times out, you can continue to retry and increase the waiting interval between multiple retries in a gradual manner."
  }, {
    heading: "get-httpsapiagoraiov2ncsip",
    content: "Use this endpoint to retrieve the IP addresses of the Agora Notifications server. If your server is behind a firewall, add these IP addresses to your allowlist to receive channel event notifications."
  }, {
    heading: "get-httpsapiagoraiov2ncsip",
    content: "Agora occasionally adjusts the Agora Notifications IP addresses. Call this endpoint at least every 24 hours and automatically update your firewall configuration with the latest addresses."
  }, {
    heading: "request-4",
    content: "The request URL and request body is case-sensitive. All requests must use HTTPS."
  }, {
    heading: "request-header-5",
    content: "`Content-Type`: `application/json`"
  }, {
    heading: "request-header-5",
    content: "The request header must contain the `Authorization` field. For details, see RESTful authentication."
  }, {
    heading: "response-5",
    content: "A `200` status code indicates success. The response body contains the following parameters:"
  }, {
    heading: "response-5",
    content: "A list of Agora Notifications server host objects."
  }, {
    heading: "response-5",
    content: "The IP address of the Agora Notifications server. Add all IP addresses returned in this field to your firewall allowlist."
  }, {
    heading: "response-5",
    content: "If the status code is not `200`, the request fails. See the `message` field in the response body for the reason for this failure. Refer to Response status codes for details."
  }, {
    heading: "authorization-5",
    content: "This endpoint requires Basic authentication."
  }, {
    heading: "request-example-4",
    content: "Use one of the following code examples to test this request:"
  }, {
    heading: "response-status-codes-1",
    content: "This page describes all response status codes returned when calling the channel management RESTful API."
  }, {
    heading: "response-status-codes-1",
    content: "If the status code is `200`, the request is successful. If not, troubleshoot the problem based on the `message` and `reason` fields that may appear in the corresponding response body."
  }, {
    heading: "response-status-codes-1",
    content: "For example, when a request fails, you might receive the following response:"
  }, {
    heading: "status-codes",
    content: "The following table summarizes all response status codes, their meanings, and recommended actions:"
  }, {
    heading: "status-codes",
    content: "Response status code"
  }, {
    heading: "status-codes",
    content: "Description"
  }, {
    heading: "status-codes",
    content: "Recommended actions"
  }, {
    heading: "status-codes",
    content: "200"
  }, {
    heading: "status-codes",
    content: "The operation is successful."
  }, {
    heading: "status-codes",
    content: "No troubleshooting required."
  }, {
    heading: "status-codes",
    content: "400"
  }, {
    heading: "status-codes",
    content: "Bad request."
  }, {
    heading: "status-codes",
    content: "Troubleshoot based on the `message` field in the response body."
  }, {
    heading: "status-codes",
    content: "401"
  }, {
    heading: "status-codes",
    content: "Unauthorized."
  }, {
    heading: "status-codes",
    content: "Check and confirm that your authentication information is correct. Possible reasons include: App ID does not exist.Non-matching customer ID and secret."
  }, {
    heading: "status-codes",
    content: "403"
  }, {
    heading: "status-codes",
    content: "Access is forbidden."
  }, {
    heading: "status-codes",
    content: "The authorization information is incorrect. Contact Agora technical support."
  }, {
    heading: "status-codes",
    content: "404"
  }, {
    heading: "status-codes",
    content: "The requested resource could not be found."
  }, {
    heading: "status-codes",
    content: "Confirm that the requested URL and resource are correct."
  }, {
    heading: "status-codes",
    content: "415"
  }, {
    heading: "status-codes",
    content: "Unsupported media type."
  }, {
    heading: "status-codes",
    content: "Make sure you have set `Content-Type` in the request header as `application/json`."
  }, {
    heading: "status-codes",
    content: "429"
  }, {
    heading: "status-codes",
    content: "Too many requests."
  }, {
    heading: "status-codes",
    content: "Wait and retry."
  }, {
    heading: "status-codes",
    content: "500"
  }, {
    heading: "status-codes",
    content: "Internal server error."
  }, {
    heading: "status-codes",
    content: "Use a backoff strategy for query requests or contact Agora technical support"
  }, {
    heading: "status-codes",
    content: "If the problem is not solved after taking the recommended action, print out the `X-Request-ID` and `X-Resource-ID` response header values and contact technical support."
  }, {
    heading: "troubleshooting-example",
    content: "A call to create a privilege banning rule returns `400 Bad Request` and the `message` field value is `invalid appid`."
  }, {
    heading: "troubleshooting-example",
    content: "This means that the App ID is invalid and the rule creation has failed. Obtain the App ID in Agora Console and call the API again."
  }],
  headings: [{
    id: "key-features-and-use-cases",
    content: "Key features and use-cases"
  }, {
    id: "authorization",
    content: "Authorization"
  }, {
    id: "domain",
    content: "Domain"
  }, {
    id: "call-frequency-limit",
    content: "Call frequency limit"
  }, {
    id: "response-status-codes",
    content: "Response status codes"
  }, {
    id: "authentication",
    content: "Authentication"
  }, {
    id: "call-the-api",
    content: "Call the API"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "request-url",
    content: "Request URL"
  }, {
    id: "request-structure",
    content: "Request structure"
  }, {
    id: "request-header",
    content: "Request header"
  }, {
    id: "request-body-optional",
    content: "Request body (optional)"
  }, {
    id: "response",
    content: "Response"
  }, {
    id: "response-status-code",
    content: "Response status code"
  }, {
    id: "response-body",
    content: "Response body"
  }, {
    id: "error-handling",
    content: "Error handling"
  }, {
    id: "query-channel-list",
    content: "Query channel list"
  }, {
    id: "get-httpsapiagoraiodevv1channelappid",
    content: "`GET` `https://api.agora.io/dev/v1/channel/{appid}`"
  }, {
    id: "request",
    content: "Request"
  }, {
    id: "request-header-1",
    content: "Request header"
  }, {
    id: "path-parameters",
    content: "Path parameters"
  }, {
    id: "query-parameters",
    content: "Query parameters"
  }, {
    id: "response-1",
    content: "Response"
  }, {
    id: "authorization-1",
    content: "Authorization"
  }, {
    id: "request-example",
    content: "Request example"
  }, {
    id: "response-example",
    content: "Response example"
  }, {
    id: "query-host-list",
    content: "Query host list"
  }, {
    id: "get-httpsapiagoraiodevv1channeluserappidchannelnamehosts_only",
    content: "`GET` `https://api.agora.io/dev/v1/channel/user/{appid}/{channelName}/hosts_only`"
  }, {
    id: "request-1",
    content: "Request"
  }, {
    id: "request-header-2",
    content: "Request header"
  }, {
    id: "path-parameters-1",
    content: "Path parameters"
  }, {
    id: "response-2",
    content: "Response"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "synchronizing-host-online-status",
    content: "Synchronizing host online status"
  }, {
    id: "authorization-2",
    content: "Authorization"
  }, {
    id: "request-example-1",
    content: "Request example"
  }, {
    id: "response-example-1",
    content: "Response example"
  }, {
    id: "query-user-list",
    content: "Query user list"
  }, {
    id: "get-httpsapiagoraiodevv1channeluserappidchannelname",
    content: "`GET` `https://api.agora.io/dev/v1/channel/user/{appid}/{channelName}`"
  }, {
    id: "request-2",
    content: "Request"
  }, {
    id: "request-header-3",
    content: "Request header"
  }, {
    id: "path-parameters-2",
    content: "Path parameters"
  }, {
    id: "query-parameters-1",
    content: "Query parameters"
  }, {
    id: "response-3",
    content: "Response"
  }, {
    id: "reference-1",
    content: "Reference"
  }, {
    id: "synchronizing-channel-online-statistics",
    content: "Synchronizing channel online statistics"
  }, {
    id: "authorization-3",
    content: "Authorization"
  }, {
    id: "request-example-2",
    content: "Request example"
  }, {
    id: "response-example-2",
    content: "Response example"
  }, {
    id: "query-user-status",
    content: "Query user status"
  }, {
    id: "get-httpsapiagoraiodevv1channeluserpropertyappiduidchannelname",
    content: "`GET` `https://api.agora.io/dev/v1/channel/user/property/{appid}/{uid}/{channelName}`"
  }, {
    id: "request-3",
    content: "Request"
  }, {
    id: "request-header-4",
    content: "Request header"
  }, {
    id: "path-parameters-3",
    content: "Path parameters"
  }, {
    id: "response-4",
    content: "Response"
  }, {
    id: "authorization-4",
    content: "Authorization"
  }, {
    id: "request-example-3",
    content: "Request example"
  }, {
    id: "response-example-3",
    content: "Response example"
  }, {
    id: "manage-user-privileges",
    content: "Manage user privileges"
  }, {
    id: "usage-principles",
    content: "Usage principles"
  }, {
    id: "applicable-use-cases",
    content: "Applicable use-cases"
  }, {
    id: "ban-violating-users",
    content: "Ban violating users"
  }, {
    id: "ban-user-audio-and-video-privileges",
    content: "Ban user audio and video privileges"
  }, {
    id: "kick-a-user-out-of-a-channel",
    content: "Kick a user out of a channel"
  }, {
    id: "disband-a-channel",
    content: "Disband a channel"
  }, {
    id: "ban-illegal-ips",
    content: "Ban illegal IPs"
  }, {
    id: "non-applicable-use-cases",
    content: "Non-applicable use-cases"
  }, {
    id: "best-practices-for-handling-call-exceptions",
    content: "Best practices for handling call exceptions"
  }, {
    id: "query-agora-notifications-ip-addresses",
    content: "Query Agora Notifications IP addresses"
  }, {
    id: "get-httpsapiagoraiov2ncsip",
    content: "`GET` `https://api.agora.io/v2/ncs/ip`"
  }, {
    id: "request-4",
    content: "Request"
  }, {
    id: "request-header-5",
    content: "Request header"
  }, {
    id: "response-5",
    content: "Response"
  }, {
    id: "authorization-5",
    content: "Authorization"
  }, {
    id: "request-example-4",
    content: "Request example"
  }, {
    id: "response-example-4",
    content: "Response example"
  }, {
    id: "response-status-codes-1",
    content: "Response status codes"
  }, {
    id: "status-codes",
    content: "Status codes"
  }, {
    id: "troubleshooting-example",
    content: "Troubleshooting example"
  }]
};
export let toc = [{
  depth: 3,
  url: "#key-features-and-use-cases",
  title: _jsx(_Fragment, {
    children: "Key features and use-cases"
  })
}, {
  depth: 3,
  url: "#authorization",
  title: _jsx(_Fragment, {
    children: "Authorization"
  })
}, {
  depth: 3,
  url: "#domain",
  title: _jsx(_Fragment, {
    children: "Domain"
  })
}, {
  depth: 3,
  url: "#call-frequency-limit",
  title: _jsx(_Fragment, {
    children: "Call frequency limit"
  })
}, {
  depth: 3,
  url: "#response-status-codes",
  title: _jsx(_Fragment, {
    children: "Response status codes"
  })
}, {
  depth: 2,
  url: "#authentication",
  title: _jsx(_Fragment, {
    children: "Authentication"
  })
}, {
  depth: 2,
  url: "#call-the-api",
  title: _jsx(_Fragment, {
    children: "Call the API"
  })
}, {
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#request-url",
  title: _jsx(_Fragment, {
    children: "Request URL"
  })
}, {
  depth: 2,
  url: "#request-structure",
  title: _jsx(_Fragment, {
    children: "Request structure"
  })
}, {
  depth: 3,
  url: "#request-header",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 3,
  url: "#request-body-optional",
  title: _jsx(_Fragment, {
    children: "Request body (optional)"
  })
}, {
  depth: 2,
  url: "#response",
  title: _jsx(_Fragment, {
    children: "Response"
  })
}, {
  depth: 3,
  url: "#response-status-code",
  title: _jsx(_Fragment, {
    children: "Response status code"
  })
}, {
  depth: 3,
  url: "#response-body",
  title: _jsx(_Fragment, {
    children: "Response body"
  })
}, {
  depth: 2,
  url: "#error-handling",
  title: _jsx(_Fragment, {
    children: "Error handling"
  })
}, {
  depth: 2,
  url: "#query-channel-list",
  title: _jsx(_Fragment, {
    children: "Query channel list"
  })
}, {
  depth: 3,
  url: "#get-httpsapiagoraiodevv1channelappid",
  title: _jsxs(_Fragment, {
    children: [_jsx("code", {
      children: "GET"
    }), " ", _jsx("code", {
      children: "https://api.agora.io/dev/v1/channel/{appid}"
    })]
  })
}, {
  depth: 2,
  url: "#request",
  title: _jsx(_Fragment, {
    children: "Request"
  })
}, {
  depth: 3,
  url: "#request-header-1",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 3,
  url: "#path-parameters",
  title: _jsx(_Fragment, {
    children: "Path parameters"
  })
}, {
  depth: 3,
  url: "#query-parameters",
  title: _jsx(_Fragment, {
    children: "Query parameters"
  })
}, {
  depth: 2,
  url: "#response-1",
  title: _jsx(_Fragment, {
    children: "Response"
  })
}, {
  depth: 3,
  url: "#authorization-1",
  title: _jsx(_Fragment, {
    children: "Authorization"
  })
}, {
  depth: 3,
  url: "#request-example",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 3,
  url: "#response-example",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#query-host-list",
  title: _jsx(_Fragment, {
    children: "Query host list"
  })
}, {
  depth: 3,
  url: "#get-httpsapiagoraiodevv1channeluserappidchannelnamehosts_only",
  title: _jsxs(_Fragment, {
    children: [_jsx("code", {
      children: "GET"
    }), " ", _jsx("code", {
      children: "https://api.agora.io/dev/v1/channel/user/{appid}/{channelName}/hosts_only"
    })]
  })
}, {
  depth: 2,
  url: "#request-1",
  title: _jsx(_Fragment, {
    children: "Request"
  })
}, {
  depth: 3,
  url: "#request-header-2",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 3,
  url: "#path-parameters-1",
  title: _jsx(_Fragment, {
    children: "Path parameters"
  })
}, {
  depth: 2,
  url: "#response-2",
  title: _jsx(_Fragment, {
    children: "Response"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#synchronizing-host-online-status",
  title: _jsx(_Fragment, {
    children: "Synchronizing host online status"
  })
}, {
  depth: 3,
  url: "#authorization-2",
  title: _jsx(_Fragment, {
    children: "Authorization"
  })
}, {
  depth: 3,
  url: "#request-example-1",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 3,
  url: "#response-example-1",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#query-user-list",
  title: _jsx(_Fragment, {
    children: "Query user list"
  })
}, {
  depth: 3,
  url: "#get-httpsapiagoraiodevv1channeluserappidchannelname",
  title: _jsxs(_Fragment, {
    children: [_jsx("code", {
      children: "GET"
    }), " ", _jsx("code", {
      children: "https://api.agora.io/dev/v1/channel/user/{appid}/{channelName}"
    })]
  })
}, {
  depth: 2,
  url: "#request-2",
  title: _jsx(_Fragment, {
    children: "Request"
  })
}, {
  depth: 3,
  url: "#request-header-3",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 3,
  url: "#path-parameters-2",
  title: _jsx(_Fragment, {
    children: "Path parameters"
  })
}, {
  depth: 3,
  url: "#query-parameters-1",
  title: _jsx(_Fragment, {
    children: "Query parameters"
  })
}, {
  depth: 2,
  url: "#response-3",
  title: _jsx(_Fragment, {
    children: "Response"
  })
}, {
  depth: 2,
  url: "#reference-1",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#synchronizing-channel-online-statistics",
  title: _jsx(_Fragment, {
    children: "Synchronizing channel online statistics"
  })
}, {
  depth: 3,
  url: "#authorization-3",
  title: _jsx(_Fragment, {
    children: "Authorization"
  })
}, {
  depth: 3,
  url: "#request-example-2",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 3,
  url: "#response-example-2",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#query-user-status",
  title: _jsx(_Fragment, {
    children: "Query user status"
  })
}, {
  depth: 3,
  url: "#get-httpsapiagoraiodevv1channeluserpropertyappiduidchannelname",
  title: _jsxs(_Fragment, {
    children: [_jsx("code", {
      children: "GET"
    }), " ", _jsx("code", {
      children: "https://api.agora.io/dev/v1/channel/user/property/{appid}/{uid}/{channelName}"
    })]
  })
}, {
  depth: 2,
  url: "#request-3",
  title: _jsx(_Fragment, {
    children: "Request"
  })
}, {
  depth: 3,
  url: "#request-header-4",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 3,
  url: "#path-parameters-3",
  title: _jsx(_Fragment, {
    children: "Path parameters"
  })
}, {
  depth: 2,
  url: "#response-4",
  title: _jsx(_Fragment, {
    children: "Response"
  })
}, {
  depth: 3,
  url: "#authorization-4",
  title: _jsx(_Fragment, {
    children: "Authorization"
  })
}, {
  depth: 3,
  url: "#request-example-3",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 3,
  url: "#response-example-3",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#manage-user-privileges",
  title: _jsx(_Fragment, {
    children: "Manage user privileges"
  })
}, {
  depth: 2,
  url: "#usage-principles",
  title: _jsx(_Fragment, {
    children: "Usage principles"
  })
}, {
  depth: 2,
  url: "#applicable-use-cases",
  title: _jsx(_Fragment, {
    children: "Applicable use-cases"
  })
}, {
  depth: 3,
  url: "#ban-violating-users",
  title: _jsx(_Fragment, {
    children: "Ban violating users"
  })
}, {
  depth: 3,
  url: "#ban-user-audio-and-video-privileges",
  title: _jsx(_Fragment, {
    children: "Ban user audio and video privileges"
  })
}, {
  depth: 3,
  url: "#kick-a-user-out-of-a-channel",
  title: _jsx(_Fragment, {
    children: "Kick a user out of a channel"
  })
}, {
  depth: 3,
  url: "#disband-a-channel",
  title: _jsx(_Fragment, {
    children: "Disband a channel"
  })
}, {
  depth: 3,
  url: "#ban-illegal-ips",
  title: _jsx(_Fragment, {
    children: "Ban illegal IPs"
  })
}, {
  depth: 2,
  url: "#non-applicable-use-cases",
  title: _jsx(_Fragment, {
    children: "Non-applicable use-cases"
  })
}, {
  depth: 2,
  url: "#best-practices-for-handling-call-exceptions",
  title: _jsx(_Fragment, {
    children: "Best practices for handling call exceptions"
  })
}, {
  depth: 2,
  url: "#query-agora-notifications-ip-addresses",
  title: _jsx(_Fragment, {
    children: "Query Agora Notifications IP addresses"
  })
}, {
  depth: 3,
  url: "#get-httpsapiagoraiov2ncsip",
  title: _jsxs(_Fragment, {
    children: [_jsx("code", {
      children: "GET"
    }), " ", _jsx("code", {
      children: "https://api.agora.io/v2/ncs/ip"
    })]
  })
}, {
  depth: 2,
  url: "#request-4",
  title: _jsx(_Fragment, {
    children: "Request"
  })
}, {
  depth: 3,
  url: "#request-header-5",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 2,
  url: "#response-5",
  title: _jsx(_Fragment, {
    children: "Response"
  })
}, {
  depth: 3,
  url: "#authorization-5",
  title: _jsx(_Fragment, {
    children: "Authorization"
  })
}, {
  depth: 3,
  url: "#request-example-4",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 3,
  url: "#response-example-4",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#response-status-codes-1",
  title: _jsx(_Fragment, {
    children: "Response status codes"
  })
}, {
  depth: 3,
  url: "#status-codes",
  title: _jsx(_Fragment, {
    children: "Status codes"
  })
}, {
  depth: 3,
  url: "#troubleshooting-example",
  title: _jsx(_Fragment, {
    children: "Troubleshooting example"
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
  }, { CalloutContainer, CalloutDescription, CalloutTitle, Parameter, ParameterList, Tabs, TabsContent, TabsList, TabsTrigger } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  if (!Parameter)
    _missingMdxReference("Parameter", true);
  if (!ParameterList)
    _missingMdxReference("ParameterList", true);
  if (!Tabs)
    _missingMdxReference("Tabs", true);
  if (!TabsContent)
    _missingMdxReference("TabsContent", true);
  if (!TabsList)
    _missingMdxReference("TabsList", true);
  if (!TabsTrigger)
    _missingMdxReference("TabsTrigger", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "In addition to the SDK that you integrate into the app client, Agora provides a set of simple, secure, and reliable server-side RESTful APIs to manage real-time audio and video channels."
    }), `
`, _jsx(_components.p, {
      children: "This page provides detailed documentation for the Agora Channel Management RESTful APIs."
    }), `
`, _jsx(_components.h3, {
      id: "key-features-and-use-cases",
      children: "Key features and use-cases"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Key features"
          }), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "Typical application use-cases"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Manage user privileges"
          }), _jsx(_components.td, {
            children: "Includes removing specified users from channels and preventing them from sending audio and video streams."
          }), _jsxs(_components.td, {
            children: ["Unauthorized users appear in a live broadcast.", _jsx("br", {}), "Users disrupt the room during a live broadcast.", _jsx("br", {}), "The signaling message sent to the client is hijacked.", _jsx("br", {}), "The user is offline abnormally, which interferes with timely user list updates."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Query channel information"
          }), _jsx(_components.td, {
            children: "Query the list of online channels, users in a channel, and the status of a specified user."
          }), _jsx(_components.td, {
            children: "In a use-case where the number of concurrent channels is not large, directly query the channel list to sync the channel status. In a use-case where real-time sync performance is not required, query and sync the user list and status in the channel."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "authorization",
      children: "Authorization"
    }), `
`, _jsx(_components.h3, {
      id: "domain",
      children: "Domain"
    }), `
`, _jsxs(_components.p, {
      children: ["All requests are sent to the following domain name: ", _jsx(_components.code, {
        children: "api.agora.io"
      }), "."]
    }), `
`, _jsx(CalloutContainer, {
      type: "warning",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "The Agora RESTful API supports only HTTPS with TLS 1.0, 1.1, or 1.2. Requests over plain HTTP are not supported."
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "For example, after implementing basic HTTP authentication, use the following code to send a simple request to obtain the total number of channels and the number of users in each channel:"
    }), `
`, _jsxs(Tabs, {
      defaultValue: "java",
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "java",
          children: "Java"
        }), _jsx(TabsTrigger, {
          value: "go",
          children: "Go"
        })]
      }), _jsx(TabsContent, {
        value: "java",
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
                  children: " Base64Encoding"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " {"
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
                  children: "    public"
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
                  children: " void"
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
                  children: "("
                }), _jsx(_components.span, {
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
                  children: "[] "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "args"
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
                  children: "throws"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " IOException, InterruptedException {"
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
                  children: "        // Customer ID"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "        // Set the AGORA_CUSTOMER_KEY environment variable"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        final"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " String customerKey "
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
                  children: " System."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getenv"
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
                  children: '"AGORA_CUSTOMER_KEY"'
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
                  children: "        // Customer key"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "        // Set the AGORA_CUSTOMER_SECRET environment variable"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        final"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " String customerSecret "
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
                  children: " System."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getenv"
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
                  children: '"AGORA_CUSTOMER_SECRET"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
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
                  children: "        // Set the AGORA_APP_ID variable"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        final"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " String appid "
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
                  children: " System."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getenv"
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
                  children: '"AGORA_APP_ID"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
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
                  children: "        // Concatenate the customer ID and customer secret and encode them using base64"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        String plainCredentials "
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
                  children: " customerKey "
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
                  children: ' ":"'
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
                  children: " customerSecret;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        String base64Credentials "
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
                  children: " String"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(Base64."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getEncoder"
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
                  children: "encode"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(plainCredentials."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getBytes"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()));"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "        // Create the authorization header"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        String authorizationHeader "
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
                  children: ' "Basic :"'
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
                  children: " base64Credentials"
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
                  children: "        HttpClient client "
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
                  children: " HttpClient."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "newHttpClient"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
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
                  children: "        // Create an HTTP request object"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        HttpRequest request "
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
                  children: " HttpRequest."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "newBuilder"
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
                  children: "               ."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "uri"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(URI."
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
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"https://api.sd-rtn.com/dev/v1/channel/"'
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
                  children: " appid))"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "               ."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GET"
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
                  children: "               ."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "header"
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
                  children: '"Authorization"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", authorizationHeader)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "               ."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "header"
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
                  children: '"Content-Type"'
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
                  children: '"application/json"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "               ."
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
                  children: "        // Send an HTTP request"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        HttpResponse<"
                }), _jsx(_components.span, {
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
                  children: "> response "
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
                  children: " client."
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
                  children: "(request,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                HttpResponse.BodyHandlers."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "ofString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "());"
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
                  children: "        System.out."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "println"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(response."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "body"
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
                  children: "        // Add the subsequent processing logic for the response content"
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
        })
      }), _jsx(TabsContent, {
        value: "go",
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "package"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " main"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '  "encoding/base64"'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '  "fmt"'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '  "net/http"'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '  "os"'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '  "io/ioutil"'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "func"
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
                  children: "() {"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Retrieve environment variables"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  customerKey "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " os."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Getenv"
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
                  children: '"AGORA_CUSTOMER_KEY"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  customerSecret "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " os."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Getenv"
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
                  children: '"AGORA_CUSTOMER_SECRET"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  appID "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " os."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Getenv"
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
                  children: '"AGORA_APP_ID"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "  if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " customerKey "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "=="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' ""'
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
                  children: " customerSecret "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "=="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' ""'
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
                  children: " appID "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "=="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' ""'
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
                  children: "    fmt."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Println"
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
                  children: '"Environment variables AGORA_CUSTOMER_KEY, AGORA_CUSTOMER_SECRET, and AGORA_APP_ID must be set."'
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    return"
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
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Concatenate the customer ID and secret, then encode them using Base64"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  plainCredentials "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " customerKey "
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
                  children: ' ":"'
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
                  children: " customerSecret"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  base64Credentials "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " base64.StdEncoding."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "EncodeToString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "([]"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "byte"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(plainCredentials))"
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
                  children: "  // Create the authorization header"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  authorizationHeader "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "Basic "'
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
                  children: " base64Credentials"
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
                  children: "  // Build the request"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  req, err "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " http."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "NewRequest"
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
                  children: '"GET"'
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
                  children: '"https://api.sd-rtn.com/dev/v1/channel/"'
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
                  children: "appID, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "nil"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " err "
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
                  children: " nil"
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
                  children: "    fmt."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Println"
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
                  children: '"Error creating request:"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", err)"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    return"
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
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Add headers"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  req.Header."
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
                  children: '"Authorization"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", authorizationHeader)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  req.Header."
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
                  children: '"Content-Type"'
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
                  children: '"application/json"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "  // Create an HTTP client and send the request"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  client "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " &"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "http"
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
                  children: "Client"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{}"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  resp, err "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " client."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Do"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(req)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " err "
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
                  children: " nil"
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
                  children: "    fmt."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Println"
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
                  children: '"Error sending request:"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", err)"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    return"
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  defer"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " resp.Body."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Close"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
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
                  children: "  // Read the response body"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  body, err "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ioutil."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "ReadAll"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(resp.Body)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " err "
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
                  children: " nil"
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
                  children: "    fmt."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Println"
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
                  children: '"Error reading response body:"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", err)"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    return"
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
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Print the response body"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  fmt."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Println"
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
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(body))"
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
                  children: "  // Add any subsequent processing logic for the response content here"
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
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["Use the channel management RESTful API along with the ", _jsx(_components.a, {
        href: "/en/realtime-media/rtc/build/optimize-and-operate/receive-notifications",
        children: "Agora Notifications"
      }), " service for reliable and effective channel management and status synchronization."]
    }), `
`, _jsx(_components.h3, {
      id: "call-frequency-limit",
      children: "Call frequency limit"
    }), `
`, _jsxs(_components.p, {
      children: ["For each Agora account (not each App ID), the maximum call frequency of every online channel statistics query API is 20 queries per second. The maximum call frequency of every other API is 10 queries per second. If you are frequency limited when calling the APIs, see ", _jsx(_components.a, {
        href: "/en/api-reference/faq/integration/restful_api_call_frequency",
        children: "How can I avoid being frequency limited when calling Agora Server RESTful APIs"
      }), " to optimize API call frequency."]
    }), `
`, _jsx(_components.h3, {
      id: "response-status-codes",
      children: "Response status codes"
    }), `
`, _jsxs(_components.p, {
      children: ["For a description of the response status codes, refer to ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/rtc/response-status-codes",
        children: "Response status codes"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "authentication",
      children: "Authentication"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "Content-Type"
      }), " field in all HTTP request headers is ", _jsx(_components.code, {
        children: "application/json"
      }), ". All requests and responses are in JSON format. All request URLs and request bodies are case-sensitive."]
    }), `
`, _jsxs(_components.p, {
      children: ["The Agora Channel Management RESTful APIs only support HTTPS. Before sending HTTP requests, you must generate a Base64-encoded credential with the ", _jsx(_components.strong, {
        children: "Customer ID"
      }), " and ", _jsx(_components.strong, {
        children: "Customer Secret"
      }), " provided by Agora, and pass the credential to the ", _jsx(_components.code, {
        children: "Authorization"
      }), " field in the HTTP request header. See ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/rtc/authentication",
        children: "RESTful authentication"
      }), " for details."]
    }), `
`, _jsx(_components.h2, {
      id: "call-the-api",
      children: "Call the API"
    }), `
`, _jsx(_components.p, {
      children: "This page explains the structure of the channel management RESTful API and how to call it correctly."
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "Before calling the API, make sure you have the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "An Agora app ID"
      }), `
`, _jsx(_components.li, {
        children: "Customer ID"
      }), `
`, _jsx(_components.li, {
        children: "Customer key"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "request-url",
      children: "Request URL"
    }), `
`, _jsx(_components.p, {
      children: "Following is a sample request URL:"
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "https://api.agora.io/dev/v1/kicking-rule"
            })
          })
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "https"
        }), ": The communication protocol. Agora uses HTTPS."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "api.agora.io"
        }), ": The domain name of the Agora server."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "dev/v1/kicking-rule"
        }), ": The resource path, including the API version and the resource name."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["The above example is for reference only. Refer to the documentation of the API you want to call, select the method (", _jsx(_components.code, {
        children: "GET"
      }), ", ", _jsx(_components.code, {
        children: "POST"
      }), ", ", _jsx(_components.code, {
        children: "PUT"
      }), ", ", _jsx(_components.code, {
        children: "PATCH"
      }), ", ", _jsx(_components.code, {
        children: "DELETE"
      }), ") in the code source file or debug application, and then configure the actual request URL according to your needs. The request URL is case-sensitive."]
    }), `
`, _jsx(_components.h2, {
      id: "request-structure",
      children: "Request structure"
    }), `
`, _jsx(_components.p, {
      children: "A request consists of two parts: The request header and the request body."
    }), `
`, _jsxs(_components.p, {
      children: ["The following example shows how to create a privilege banning rule by sending a ", _jsx(_components.code, {
        children: "POST"
      }), " request containing the app ID, channel name, user ID, user IP, ban duration, and the privilege list to the specified API address:"]
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
              children: " 'https://api.agora.io/dev/v1/kicking-rule'"
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
              children: "'Content-Type: application/json'"
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
              children: "'Accept: application/json'"
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
              children: "--data "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'{"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "appid": "4855xxxxxxxxxxxxxxxxxxxxxxxxeae2",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "cname": "channel1",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "uid": 589517928,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "ip": "123",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "time": 60,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "privileges": ['
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "join_channel"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  ]"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "}'"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "request-header",
      children: "Request header"
    }), `
`, _jsx(_components.p, {
      children: "The request header contains the following information needed to process the request:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Accept"
        }), ": Tells the server what types of responses the client can handle, such as ", _jsx(_components.code, {
          children: "application/json"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Authorization"
        }), ": The Agora RESTful API requires HTTP authentication. Every time you send an HTTP request, fill in the ", _jsx(_components.code, {
          children: "Authorization"
        }), " field in the request header. See ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc/authentication",
          children: "RESTful authentication"
        }), " for details."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Content-Type"
        }), ": Specifies the type of the request body, such as ", _jsx(_components.code, {
          children: "application/json"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "request-body-optional",
      children: "Request body (optional)"
    }), `
`, _jsx(_components.p, {
      children: "The request body contains the information to be sent to the server. For example, to create a new rule to ban user privileges, include the relevant information, such as the app ID, channel name, user ID, user IP, ban duration, and the banned privileges. The request body is case-sensitive."
    }), `
`, _jsx(_components.h2, {
      id: "response",
      children: "Response"
    }), `
`, _jsx(_components.p, {
      children: "After you send the request, the Agora server sends a response that includes a response status code and a response body. The channel management RESTful API does not have a response header."
    }), `
`, _jsx(_components.h3, {
      id: "response-status-code",
      children: "Response status code"
    }), `
`, _jsx(_components.p, {
      children: "The HTTP response status code can be one of the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "200"
        }), ": The request is successful."]
      }), `
`, _jsxs(_components.li, {
        children: ["Other than ", _jsx(_components.code, {
          children: "200"
        }), ": Refer to ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc/response-status-codes",
          children: "Response status codes"
        }), " to troubleshoot the problem."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "response-body",
      children: "Response body"
    }), `
`, _jsx(_components.p, {
      children: "The response body contains the information returned by the server. For example, the response body of creating a banning rule includes the request status and the rule ID."
    }), `
`, _jsx(_components.p, {
      children: "The following is a response example for creating a banning rule:"
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
              children: '  "status"'
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
              children: '"success"'
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
              children: '  "id"'
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
              children: "1953"
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
`, _jsx(_components.h2, {
      id: "error-handling",
      children: "Error handling"
    }), `
`, _jsxs(_components.p, {
      children: ["If you encounter a problem, use developer tools to view the request and response, and troubleshoot based on the response status code. If the problem persists, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "technical support"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "query-channel-list",
      children: "Query channel list"
    }), `
`, _jsxs(_components.h3, {
      id: "get-httpsapiagoraiodevv1channelappid",
      children: [_jsx(_components.code, {
        children: "GET"
      }), " ", _jsx(_components.code, {
        children: "https://api.agora.io/dev/v1/channel/{appid}"
      })]
    }), `
`, _jsx(_components.p, {
      children: "Use this endpoint to get the list of all channels under a specified project. The channel list is returned by page; specify the page number and page size in the request URL."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsxs(CalloutDescription, {
        children: [_jsx(_components.p, {
          children: "If the number of users in a channel changes frequently, the query results may be inaccurate. The following situations may occur:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "A channel appears repeatedly on different pages."
          }), `
`, _jsx(_components.li, {
            children: "A channel does not appear on any page."
          }), `
`]
        })]
      })
    }), `
`, _jsx(_components.h2, {
      id: "request",
      children: "Request"
    }), `
`, _jsx(_components.p, {
      children: "The request URL and request body is case-sensitive. All requests must use HTTPS."
    }), `
`, _jsx(_components.h3, {
      id: "request-header-1",
      children: "Request header"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Content-Type"
        }), ": ", _jsx(_components.code, {
          children: "application/json"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["The request header must contain the ", _jsx(_components.code, {
          children: "Authorization"
        }), " field. For details, see ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc/authentication",
          children: "RESTful authentication"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "path-parameters",
      children: "Path parameters"
    }), `
`, _jsxs(Parameter, {
      name: "appid",
      type: "string",
      required: true,
      children: [_jsx(_components.p, {
        children: "The App ID of the project. You can get it through one of the following methods:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["Copy from the ", _jsx(_components.a, {
            href: "https://console.agora.io",
            children: "Agora Console"
          })]
        }), `
`, _jsxs(_components.li, {
          children: ["Call the ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/console/solutions-agora-console-rest-api#get-all-projects",
            children: "Get all projects"
          }), " API, and read the value of the ", _jsx(_components.code, {
            children: "vendor_key"
          }), " field in the response body."]
        }), `
`]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "query-parameters",
      children: "Query parameters"
    }), `
`, _jsxs(ParameterList, {
      title: "QUERY",
      children: [_jsx(Parameter, {
        name: "page_no",
        type: "number",
        required: false,
        children: _jsxs(_components.p, {
          children: ["The page number to query. The default value is ", _jsx(_components.code, {
            children: "0"
          }), ", which is the first page. The value of ", _jsx(_components.code, {
            children: "page_no"
          }), " cannot exceed ", _jsx(_components.code, {
            children: "(total number of channels / page_size) - 1"
          }), "; otherwise, the specified page contains no channels."]
        })
      }), _jsx(Parameter, {
        name: "page_size",
        type: "number",
        required: false,
        children: _jsx(_components.p, {
          children: "The number of channels per page."
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "response-1",
      children: "Response"
    }), `
`, _jsxs(_components.p, {
      children: ["A ", _jsx(_components.code, {
        children: "200"
      }), " status code indicates success. The response body contains the following parameters:"]
    }), `
`, _jsxs(ParameterList, {
      title: "OK",
      children: [_jsxs(Parameter, {
        name: "success",
        type: "boolean",
        children: [_jsx(_components.p, {
          children: "The state of this request:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "true"
            }), ": Success."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "false"
            }), ": Reserved for future use."]
          }), `
`]
        })]
      }), _jsxs(Parameter, {
        name: "data",
        type: "object",
        children: [_jsx(_components.p, {
          children: "Channel statistics."
        }), _jsxs(Parameter, {
          name: "channels",
          type: "array",
          children: [_jsx(_components.p, {
            children: "The list of channels. Each object in the array represents one channel and contains the following fields. If the specified page contains no channels, this field is empty."
          }), _jsx(Parameter, {
            name: "channel_name",
            type: "string",
            children: _jsx(_components.p, {
              children: "The channel name."
            })
          }), _jsx(Parameter, {
            name: "user_count",
            type: "number",
            children: _jsx(_components.p, {
              children: "The total number of users in the channel."
            })
          })]
        }), _jsx(Parameter, {
          name: "total_size",
          type: "number",
          children: _jsx(_components.p, {
            children: "The total number of channels under the specified project."
          })
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is not ", _jsx(_components.code, {
        children: "200"
      }), ", the request fails. See the ", _jsx(_components.code, {
        children: "message"
      }), " field in the response body for the reason for this failure. Refer to ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/rtc/response-status-codes",
        children: "Response status codes"
      }), " for details."]
    }), `
`, _jsx(_components.h3, {
      id: "authorization-1",
      children: "Authorization"
    }), `
`, _jsxs(_components.p, {
      children: ["This endpoint requires ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/rtc/authentication",
        children: "Basic authentication"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "request-example",
      children: "Request example"
    }), `
`, _jsxs(_components.p, {
      children: ["Test this request in ", _jsx(_components.a, {
        href: "https://documenter.getpostman.com/view/6319646/SVSLr9AM#080ffa91-0c31-42ab-9177-7942f8691ea2",
        children: "Postman"
      }), " or use one of the following code examples:"]
    }), `
`, _jsxs(Tabs, {
      defaultValue: "curl",
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "curl",
          children: "cURL"
        }), _jsx(TabsTrigger, {
          value: "node",
          children: "Node"
        }), _jsx(TabsTrigger, {
          value: "python",
          children: "Python"
        })]
      }), _jsx(TabsContent, {
        value: "curl",
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
                  children: " --request"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " GET"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  --url"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'https://api.sd-rtn.com/dev/v1/channel/<appid>?page_no=0&page_size=100'"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  --header"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'Accept: application/json'"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  --header"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'Authorization: Basic <your_base64_encoded_credentials>'"
                })]
              })]
            })
          })
        })
      }), _jsx(TabsContent, {
        value: "node",
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
                  children: " http"
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
                  children: " require"
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
                  children: "'http'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
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
                  children: "  method: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'GET'"
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
                  children: "  hostname: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'api.sd-rtn.com'"
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
                  children: "  port: "
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
                  children: "  path: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'/dev/v1/channel/<appid>?page_no=0&page_size=100'"
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
                  children: "  headers: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    Authorization: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'Basic <your_base64_encoded_credentials>'"
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
                  children: "    Accept: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'application/json'"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " req"
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
                  children: " http."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "request"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(options, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "function"
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
                  children: "res"
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
                  children: "  const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " chunks"
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
                  children: " [];"
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
                  children: "  res."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "on"
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
                  children: "'data'"
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
                  children: "function"
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
                  children: "chunk"
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
                  children: "    chunks."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "push"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(chunk);"
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
                  children: "  res."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "on"
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
                  children: "'end'"
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
                  children: "function"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " () {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " body"
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
                  children: " Buffer."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "concat"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(chunks);"
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
                  children: "(body."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "toString"
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
                  children: "  });"
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
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "req."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "end"
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
        })
      }), _jsx(TabsContent, {
        value: "python",
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
            icon: '<svg viewBox="0 0 24 24"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "conn "
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
                  children: " http.client.HTTPConnection("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"api.sd-rtn.com"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "headers "
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "    'Authorization'"
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
                  children: '"Basic <your_base64_encoded_credentials>"'
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
                  children: "    'Accept'"
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
                  children: '"application/json"'
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
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "conn.request("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"GET"'
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
                  children: '"/dev/v1/channel/<appid>?page_no=0&page_size=100"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "headers"
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
                  children: "headers)"
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
                  children: "res "
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
                  children: " conn.getresponse()"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "data "
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
                  children: " res.read()"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "print"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(data.decode("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"utf-8"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "))"
                })]
              })]
            })
          })
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "response-example",
      children: "Response example"
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
              children: '  "success"'
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
              children: '    "channels"'
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
              children: '        "channel_name"'
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
              children: '"lkj144"'
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
              children: '        "user_count"'
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
              children: "    ],"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "total_size"'
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
`, _jsx(_components.h2, {
      id: "query-host-list",
      children: "Query host list"
    }), `
`, _jsxs(_components.h3, {
      id: "get-httpsapiagoraiodevv1channeluserappidchannelnamehosts_only",
      children: [_jsx(_components.code, {
        children: "GET"
      }), " ", _jsx(_components.code, {
        children: "https://api.agora.io/dev/v1/channel/user/{appid}/{channelName}/hosts_only"
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["Use this endpoint to get the list of hosts in a specified channel. This endpoint is only available in the ", _jsx(_components.code, {
        children: "LIVE_BROADCASTING"
      }), " profile (", _jsx(_components.code, {
        children: "mode = 2"
      }), "); all users in the channel must use the same profile, otherwise query results may be inaccurate."]
    }), `
`, _jsx(_components.h2, {
      id: "request-1",
      children: "Request"
    }), `
`, _jsx(_components.p, {
      children: "The request URL and request body is case-sensitive. All requests must use HTTPS."
    }), `
`, _jsx(_components.h3, {
      id: "request-header-2",
      children: "Request header"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Content-Type"
        }), ": ", _jsx(_components.code, {
          children: "application/json"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["The request header must contain the ", _jsx(_components.code, {
          children: "Authorization"
        }), " field. For details, see ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc/authentication",
          children: "RESTful authentication"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "path-parameters-1",
      children: "Path parameters"
    }), `
`, _jsxs(Parameter, {
      name: "appid",
      type: "string",
      required: true,
      children: [_jsx(_components.p, {
        children: "The App ID of the project. You can get it through one of the following methods:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["Copy from the ", _jsx(_components.a, {
            href: "https://console.agora.io",
            children: "Agora Console"
          })]
        }), `
`, _jsxs(_components.li, {
          children: ["Call the ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/console/solutions-agora-console-rest-api#get-all-projects",
            children: "Get all projects"
          }), " API, and read the value of the ", _jsx(_components.code, {
            children: "vendor_key"
          }), " field in the response body."]
        }), `
`]
      })]
    }), `
`, _jsx(Parameter, {
      name: "channelName",
      type: "string",
      required: true,
      children: _jsx(_components.p, {
        children: "The channel name."
      })
    }), `
`, _jsx(_components.h2, {
      id: "response-2",
      children: "Response"
    }), `
`, _jsxs(_components.p, {
      children: ["A ", _jsx(_components.code, {
        children: "200"
      }), " status code indicates success. The response body contains the following parameters:"]
    }), `
`, _jsxs(ParameterList, {
      title: "OK",
      children: [_jsxs(Parameter, {
        name: "success",
        type: "boolean",
        children: [_jsx(_components.p, {
          children: "The state of this request:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "true"
            }), ": Success."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "false"
            }), ": Reserved for future use."]
          }), `
`]
        })]
      }), _jsxs(Parameter, {
        name: "data",
        type: "object",
        children: [_jsx(_components.p, {
          children: "User information."
        }), _jsxs(Parameter, {
          name: "channel_exist",
          type: "boolean",
          children: [_jsx(_components.p, {
            children: "Whether the specified channel exists:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "true"
              }), ": The channel exists."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "false"
              }), ": The channel does not exist. When this is ", _jsx(_components.code, {
                children: "false"
              }), ", no other fields are returned."]
            }), `
`]
          })]
        }), _jsxs(Parameter, {
          name: "mode",
          type: "number",
          children: [_jsx(_components.p, {
            children: "The channel profile:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "1"
              }), ": The ", _jsx(_components.code, {
                children: "COMMUNICATION"
              }), " profile."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "2"
              }), ": The ", _jsx(_components.code, {
                children: "LIVE_BROADCASTING"
              }), " profile."]
            }), `
`]
          })]
        }), _jsx(Parameter, {
          name: "broadcasters",
          type: "array",
          children: _jsxs(_components.p, {
            children: ["User IDs of all hosts in the channel. Returned only when ", _jsx(_components.code, {
              children: "mode"
            }), " is ", _jsx(_components.code, {
              children: "2"
            }), "."]
          })
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is not ", _jsx(_components.code, {
        children: "200"
      }), ", the request fails. See the ", _jsx(_components.code, {
        children: "message"
      }), " field in the response body for the reason for this failure. Refer to ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/rtc/response-status-codes",
        children: "Response status codes"
      }), " for details."]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.h3, {
      id: "synchronizing-host-online-status",
      children: "Synchronizing host online status"
    }), `
`, _jsxs(_components.p, {
      children: ["To synchronize the online status of hosts, you can use this endpoint or the ", _jsx(_components.a, {
        href: "#query-user-status",
        children: "query user status"
      }), " endpoint. This endpoint requires a lower call frequency and offers higher efficiency, so Agora recommends it for this purpose."]
    }), `
`, _jsx(_components.h3, {
      id: "authorization-2",
      children: "Authorization"
    }), `
`, _jsxs(_components.p, {
      children: ["This endpoint requires ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/rtc/authentication",
        children: "Basic authentication"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "request-example-1",
      children: "Request example"
    }), `
`, _jsxs(Tabs, {
      defaultValue: "curl",
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "curl",
          children: "cURL"
        }), _jsx(TabsTrigger, {
          value: "node",
          children: "Node"
        }), _jsx(TabsTrigger, {
          value: "python",
          children: "Python"
        })]
      }), _jsx(TabsContent, {
        value: "curl",
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
                  children: " --request"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " GET"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  --url"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " https://api.sd-rtn.com/dev/v1/channel/user/"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "appi"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "d"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ">"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "/"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "channelNam"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "e"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ">"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "/hosts_only"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  --header"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'Accept: application/json'"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  --header"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'Authorization: Basic <your_base64_encoded_credentials>'"
                })]
              })]
            })
          })
        })
      }), _jsx(TabsContent, {
        value: "node",
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
                  children: " https"
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
                  children: " require"
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
                  children: "'https'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
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
                  children: "  method: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'GET'"
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
                  children: "  hostname: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'api.sd-rtn.com'"
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
                  children: "  port: "
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
                  children: "  path: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'/dev/v1/channel/user/<appid>/<channelName>/hosts_only'"
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
                  children: "  headers: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    Accept: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'application/json'"
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
                  children: "    Authorization: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'Basic <your_base64_encoded_credentials>'"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " req"
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
                  children: " https."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "request"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(options, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "function"
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
                  children: "res"
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
                  children: "  const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " chunks"
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
                  children: " [];"
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
                  children: "  res."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "on"
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
                  children: "'data'"
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
                  children: "function"
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
                  children: "chunk"
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
                  children: "    chunks."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "push"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(chunk);"
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
                  children: "  res."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "on"
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
                  children: "'end'"
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
                  children: "function"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " () {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " body"
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
                  children: " Buffer."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "concat"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(chunks);"
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
                  children: "(body."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "toString"
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
                  children: "  });"
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
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "req."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "end"
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
        })
      }), _jsx(TabsContent, {
        value: "python",
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
            icon: '<svg viewBox="0 0 24 24"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "conn "
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
                  children: " http.client.HTTPSConnection("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"api.sd-rtn.com"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "headers "
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "    'Accept'"
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
                  children: '"application/json"'
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
                  children: "    'Authorization'"
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
                  children: '"Basic <your_base64_encoded_credentials>"'
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
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "conn.request("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"GET"'
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
                  children: '"/dev/v1/channel/user/<appid>/<channelName>/hosts_only"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "headers"
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
                  children: "headers)"
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
                  children: "res "
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
                  children: " conn.getresponse()"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "data "
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
                  children: " res.read()"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "print"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(data.decode("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"utf-8"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "))"
                })]
              })]
            })
          })
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "response-example-1",
      children: "Response example"
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
              children: '  "success"'
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
              children: '    "channel_exist"'
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
              children: '    "mode"'
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
              children: '    "broadcasters"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "      574332"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "      1347839"
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
`, _jsx(_components.h2, {
      id: "query-user-list",
      children: "Query user list"
    }), `
`, _jsxs(_components.h3, {
      id: "get-httpsapiagoraiodevv1channeluserappidchannelname",
      children: [_jsx(_components.code, {
        children: "GET"
      }), " ", _jsx(_components.code, {
        children: "https://api.agora.io/dev/v1/channel/user/{appid}/{channelName}"
      })]
    }), `
`, _jsx(_components.p, {
      children: "Use this endpoint to get the list of all users in a specified channel. All users in the channel must use the same channel profile; otherwise, the query results may be inaccurate."
    }), `
`, _jsx(_components.p, {
      children: "The returned list differs based on the channel profile:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "COMMUNICATION"
        }), " profile: Returns the list of all users in the channel."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "LIVE_BROADCASTING"
        }), " profile: Returns the list of all hosts and audience members in the channel."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "request-2",
      children: "Request"
    }), `
`, _jsx(_components.p, {
      children: "The request URL and request body is case-sensitive. All requests must use HTTPS."
    }), `
`, _jsx(_components.h3, {
      id: "request-header-3",
      children: "Request header"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Content-Type"
        }), ": ", _jsx(_components.code, {
          children: "application/json"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["The request header must contain the ", _jsx(_components.code, {
          children: "Authorization"
        }), " field. For details, see ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc/authentication",
          children: "RESTful authentication"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "path-parameters-2",
      children: "Path parameters"
    }), `
`, _jsxs(Parameter, {
      name: "appid",
      type: "string",
      required: true,
      children: [_jsx(_components.p, {
        children: "The App ID of the project. You can get it through one of the following methods:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["Copy from the ", _jsx(_components.a, {
            href: "https://console.agora.io",
            children: "Agora Console"
          })]
        }), `
`, _jsxs(_components.li, {
          children: ["Call the ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/console/solutions-agora-console-rest-api#get-all-projects",
            children: "Get all projects"
          }), " API, and read the value of the ", _jsx(_components.code, {
            children: "vendor_key"
          }), " field in the response body."]
        }), `
`]
      })]
    }), `
`, _jsx(Parameter, {
      name: "channelName",
      type: "string",
      required: true,
      children: _jsx(_components.p, {
        children: "The channel name."
      })
    }), `
`, _jsx(_components.h3, {
      id: "query-parameters-1",
      children: "Query parameters"
    }), `
`, _jsx(ParameterList, {
      title: "QUERY",
      children: _jsx(Parameter, {
        name: "hosts_only",
        type: "string",
        required: false,
        children: _jsxs(_components.p, {
          children: ["When specified, only the host list is returned. Applicable to the ", _jsx(_components.code, {
            children: "LIVE_BROADCASTING"
          }), " profile only."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "response-3",
      children: "Response"
    }), `
`, _jsxs(_components.p, {
      children: ["A ", _jsx(_components.code, {
        children: "200"
      }), " status code indicates success. The response body contains the following parameters:"]
    }), `
`, _jsxs(ParameterList, {
      title: "OK",
      children: [_jsxs(Parameter, {
        name: "success",
        type: "boolean",
        children: [_jsx(_components.p, {
          children: "The state of this request:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "true"
            }), ": Success."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "false"
            }), ": Reserved for future use."]
          }), `
`]
        })]
      }), _jsxs(Parameter, {
        name: "data",
        type: "object",
        children: [_jsx(_components.p, {
          children: "User information."
        }), _jsxs(Parameter, {
          name: "channel_exist",
          type: "boolean",
          children: [_jsx(_components.p, {
            children: "Whether the specified channel exists:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "true"
              }), ": The channel exists."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "false"
              }), ": The channel does not exist. When this is ", _jsx(_components.code, {
                children: "false"
              }), ", no other fields are returned."]
            }), `
`]
          })]
        }), _jsxs(Parameter, {
          name: "mode",
          type: "number",
          children: [_jsx(_components.p, {
            children: "The channel profile:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "1"
              }), ": The ", _jsx(_components.code, {
                children: "COMMUNICATION"
              }), " profile."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "2"
              }), ": The ", _jsx(_components.code, {
                children: "LIVE_BROADCASTING"
              }), " profile."]
            }), `
`]
          })]
        }), _jsx(Parameter, {
          name: "total",
          type: "number",
          children: _jsxs(_components.p, {
            children: ["The total number of users in the channel. Returned only when ", _jsx(_components.code, {
              children: "mode"
            }), " is ", _jsx(_components.code, {
              children: "1"
            }), "."]
          })
        }), _jsx(Parameter, {
          name: "users",
          type: "array",
          children: _jsxs(_components.p, {
            children: ["User IDs of all users in the channel. Returned only when ", _jsx(_components.code, {
              children: "mode"
            }), " is ", _jsx(_components.code, {
              children: "1"
            }), "."]
          })
        }), _jsx(Parameter, {
          name: "broadcasters",
          type: "array",
          children: _jsxs(_components.p, {
            children: ["User IDs of all hosts in the channel. Returned only when ", _jsx(_components.code, {
              children: "mode"
            }), " is ", _jsx(_components.code, {
              children: "2"
            }), "."]
          })
        }), _jsx(Parameter, {
          name: "audience",
          type: "array",
          children: _jsxs(_components.p, {
            children: ["User IDs of the first 10,000 audience members in the channel. Returned only when ", _jsx(_components.code, {
              children: "mode"
            }), " is ", _jsx(_components.code, {
              children: "2"
            }), " and ", _jsx(_components.code, {
              children: "hosts_only"
            }), " is not specified."]
          })
        }), _jsx(Parameter, {
          name: "audience_total",
          type: "number",
          children: _jsxs(_components.p, {
            children: ["The total number of audience members in the channel. Returned only when ", _jsx(_components.code, {
              children: "mode"
            }), " is ", _jsx(_components.code, {
              children: "2"
            }), " and ", _jsx(_components.code, {
              children: "hosts_only"
            }), " is not specified."]
          })
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is not ", _jsx(_components.code, {
        children: "200"
      }), ", the request fails. See the ", _jsx(_components.code, {
        children: "message"
      }), " field in the response body for the reason for this failure. Refer to ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/rtc/response-status-codes",
        children: "Response status codes"
      }), " for details."]
    }), `
`, _jsx(_components.h2, {
      id: "reference-1",
      children: "Reference"
    }), `
`, _jsx(_components.h3, {
      id: "synchronizing-channel-online-statistics",
      children: "Synchronizing channel online statistics"
    }), `
`, _jsxs(_components.p, {
      children: ["To synchronize online channel statistics, you can use this endpoint or the ", _jsx(_components.a, {
        href: "#query-user-status",
        children: "query user status"
      }), " endpoint. This endpoint requires a lower call frequency and offers higher efficiency, so Agora recommends it for this purpose."]
    }), `
`, _jsx(_components.h3, {
      id: "authorization-3",
      children: "Authorization"
    }), `
`, _jsxs(_components.p, {
      children: ["This endpoint requires ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/rtc/authentication",
        children: "Basic authentication"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "request-example-2",
      children: "Request example"
    }), `
`, _jsxs(_components.p, {
      children: ["Test this request in ", _jsx(_components.a, {
        href: "https://documenter.getpostman.com/view/6319646/SVSLr9AM#85067b69-dbde-4dca-bd54-2413221844cf",
        children: "Postman"
      }), " or use one of the following code examples:"]
    }), `
`, _jsxs(Tabs, {
      defaultValue: "curl",
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "curl",
          children: "cURL"
        }), _jsx(TabsTrigger, {
          value: "node",
          children: "Node"
        }), _jsx(TabsTrigger, {
          value: "python",
          children: "Python"
        })]
      }), _jsx(TabsContent, {
        value: "curl",
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
                  children: " --request"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " GET"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  --url"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " https://api.sd-rtn.com/dev/v1/channel/user/"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "appi"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "d"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ">"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "/"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "channelNam"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "e"
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
                  children: " \\"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  --header"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'Accept: application/json'"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  --header"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'Authorization: Basic <your_base64_encoded_credentials>'"
                })]
              })]
            })
          })
        })
      }), _jsx(TabsContent, {
        value: "node",
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
                  children: " https"
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
                  children: " require"
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
                  children: "'https'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
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
                  children: "  method: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'GET'"
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
                  children: "  hostname: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'api.sd-rtn.com'"
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
                  children: "  port: "
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
                  children: "  path: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'/dev/v1/channel/user/<appid>/<channelName>'"
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
                  children: "  headers: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    Authorization: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'Basic <your_base64_encoded_credentials>'"
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
                  children: "    Accept: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'application/json'"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " req"
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
                  children: " https."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "request"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(options, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "function"
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
                  children: "res"
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
                  children: "  const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " chunks"
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
                  children: " [];"
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
                  children: "  res."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "on"
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
                  children: "'data'"
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
                  children: "function"
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
                  children: "chunk"
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
                  children: "    chunks."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "push"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(chunk);"
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
                  children: "  res."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "on"
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
                  children: "'end'"
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
                  children: "function"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " () {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " body"
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
                  children: " Buffer."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "concat"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(chunks);"
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
                  children: "(body."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "toString"
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
                  children: "  });"
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
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "req."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "end"
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
        })
      }), _jsx(TabsContent, {
        value: "python",
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
            icon: '<svg viewBox="0 0 24 24"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "conn "
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
                  children: " http.client.HTTPSConnection("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"api.sd-rtn.com"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "headers "
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "    'Authorization'"
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
                  children: '"Basic <your_base64_encoded_credentials>"'
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
                  children: "    'Accept'"
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
                  children: '"application/json"'
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
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "conn.request("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"GET"'
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
                  children: '"/dev/v1/channel/user/<appid>/<channelName>"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "headers"
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
                  children: "headers)"
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
                  children: "res "
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
                  children: " conn.getresponse()"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "data "
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
                  children: " res.read()"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "print"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(data.decode("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"utf-8"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "))"
                })]
              })]
            })
          })
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "response-example-2",
      children: "Response example"
    }), `
`, _jsx(_components.p, {
      children: _jsxs(_components.strong, {
        children: ["In ", _jsx(_components.code, {
          children: "COMMUNICATION"
        }), " profile:"]
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
              children: '  "success"'
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
              children: '    "channel_exist"'
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
              children: '    "mode"'
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
              children: '    "total"'
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
              children: '    "users"'
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "      906218805"
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
`, _jsx(_components.p, {
      children: _jsxs(_components.strong, {
        children: ["In ", _jsx(_components.code, {
          children: "LIVE_BROADCASTING"
        }), " profile:"]
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
              children: '  "success"'
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
              children: '    "channel_exist"'
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
              children: '    "mode"'
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
              children: '    "broadcasters"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "      2206227541"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "      2845863044"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    ],"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "audience"'
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "      906219905"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    ],"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "audience_total"'
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
`, _jsx(_components.h2, {
      id: "query-user-status",
      children: "Query user status"
    }), `
`, _jsxs(_components.h3, {
      id: "get-httpsapiagoraiodevv1channeluserpropertyappiduidchannelname",
      children: [_jsx(_components.code, {
        children: "GET"
      }), " ", _jsx(_components.code, {
        children: "https://api.agora.io/dev/v1/channel/user/property/{appid}/{uid}/{channelName}"
      })]
    }), `
`, _jsx(_components.p, {
      children: "Use this endpoint to get the status of a specified user. It checks whether the user is in the specified channel and, if present, returns the user's role and the time they joined."
    }), `
`, _jsx(_components.h2, {
      id: "request-3",
      children: "Request"
    }), `
`, _jsx(_components.p, {
      children: "The request URL and request body is case-sensitive. All requests must use HTTPS."
    }), `
`, _jsx(_components.h3, {
      id: "request-header-4",
      children: "Request header"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Content-Type"
        }), ": ", _jsx(_components.code, {
          children: "application/json"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["The request header must contain the ", _jsx(_components.code, {
          children: "Authorization"
        }), " field. For details, see ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc/authentication",
          children: "RESTful authentication"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "path-parameters-3",
      children: "Path parameters"
    }), `
`, _jsxs(Parameter, {
      name: "appid",
      type: "string",
      required: true,
      children: [_jsx(_components.p, {
        children: "The App ID of the project. You can get it through one of the following methods:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["Copy from the ", _jsx(_components.a, {
            href: "https://console.agora.io",
            children: "Agora Console"
          })]
        }), `
`, _jsxs(_components.li, {
          children: ["Call the ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/console/solutions-agora-console-rest-api#get-all-projects",
            children: "Get all projects"
          }), " API, and read the value of the ", _jsx(_components.code, {
            children: "vendor_key"
          }), " field in the response body."]
        }), `
`]
      })]
    }), `
`, _jsx(Parameter, {
      name: "uid",
      type: "number",
      required: true,
      children: _jsx(_components.p, {
        children: "The user ID. This parameter does not support string user accounts; use the integer user ID only."
      })
    }), `
`, _jsx(Parameter, {
      name: "channelName",
      type: "string",
      required: true,
      children: _jsx(_components.p, {
        children: "The channel name."
      })
    }), `
`, _jsx(_components.h2, {
      id: "response-4",
      children: "Response"
    }), `
`, _jsxs(_components.p, {
      children: ["A ", _jsx(_components.code, {
        children: "200"
      }), " status code indicates success. The response body contains the following parameters:"]
    }), `
`, _jsxs(ParameterList, {
      title: "OK",
      children: [_jsxs(Parameter, {
        name: "success",
        type: "boolean",
        children: [_jsx(_components.p, {
          children: "The state of this request:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "true"
            }), ": Success."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "false"
            }), ": Reserved for future use."]
          }), `
`]
        })]
      }), _jsxs(Parameter, {
        name: "data",
        type: "object",
        children: [_jsx(_components.p, {
          children: "User statistics."
        }), _jsx(Parameter, {
          name: "in_channel",
          type: "boolean",
          children: _jsxs(_components.p, {
            children: ["Whether the user is in the channel. When ", _jsx(_components.code, {
              children: "false"
            }), ", no other fields are returned."]
          })
        }), _jsx(Parameter, {
          name: "uid",
          type: "number",
          children: _jsx(_components.p, {
            children: "The user ID."
          })
        }), _jsx(Parameter, {
          name: "join",
          type: "number",
          children: _jsx(_components.p, {
            children: "The Unix timestamp (in seconds) of when the user joined the channel."
          })
        }), _jsxs(Parameter, {
          name: "role",
          type: "number",
          children: [_jsx(_components.p, {
            children: "The role of the user in the channel:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "0"
              }), ": Unknown user role."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "1"
              }), ": User, in a communication channel."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "2"
              }), ": Host, in a live broadcast channel."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "3"
              }), ": Audience, in a live broadcast channel."]
            }), `
`]
          })]
        }), _jsxs(Parameter, {
          name: "platform",
          type: "number",
          children: [_jsx(_components.p, {
            children: "The platform of the user's device. Common values include:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "1"
              }), ": Android"]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "2"
              }), ": iOS"]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "5"
              }), ": Windows"]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "6"
              }), ": Linux"]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "7"
              }), ": Web"]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "8"
              }), ": macOS"]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "0"
              }), ": Others"]
            }), `
`]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is not ", _jsx(_components.code, {
        children: "200"
      }), ", the request fails. See the ", _jsx(_components.code, {
        children: "message"
      }), " field in the response body for the reason for this failure. Refer to ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/rtc/response-status-codes",
        children: "Response status codes"
      }), " for details."]
    }), `
`, _jsx(_components.h3, {
      id: "authorization-4",
      children: "Authorization"
    }), `
`, _jsxs(_components.p, {
      children: ["This endpoint requires ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/rtc/authentication",
        children: "Basic authentication"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "request-example-3",
      children: "Request example"
    }), `
`, _jsxs(_components.p, {
      children: ["Test this request in ", _jsx(_components.a, {
        href: "https://documenter.getpostman.com/view/6319646/SVSLr9AM#6d8e52b7-3273-4dd5-94ee-389448429d96",
        children: "Postman"
      }), " or use one of the following code examples:"]
    }), `
`, _jsxs(Tabs, {
      defaultValue: "curl",
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "curl",
          children: "cURL"
        }), _jsx(TabsTrigger, {
          value: "node",
          children: "Node"
        }), _jsx(TabsTrigger, {
          value: "python",
          children: "Python"
        })]
      }), _jsx(TabsContent, {
        value: "curl",
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
                  children: " --request"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " GET"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  --url"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " https://api.sd-rtn.com/dev/v1/channel/user/property/"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "appi"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "d"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ">"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "/"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "ui"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "d"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ">"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "/"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "channelNam"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "e"
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
                  children: " \\"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  --header"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'Accept: application/json'"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  --header"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'Authorization: Basic <your_base64_encoded_credentials>'"
                })]
              })]
            })
          })
        })
      }), _jsx(TabsContent, {
        value: "node",
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
                  children: " https"
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
                  children: " require"
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
                  children: "'https'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
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
                  children: "  method: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'GET'"
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
                  children: "  hostname: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'api.sd-rtn.com'"
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
                  children: "  port: "
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
                  children: "  path: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'/dev/v1/channel/user/property/<appid>/<uid>/<channelName>'"
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
                  children: "  headers: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    Authorization: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'Basic <your_base64_encoded_credentials>'"
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
                  children: "    Accept: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'application/json'"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " req"
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
                  children: " https."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "request"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(options, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "function"
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
                  children: "res"
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
                  children: "  const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " chunks"
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
                  children: " [];"
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
                  children: "  res."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "on"
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
                  children: "'data'"
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
                  children: "function"
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
                  children: "chunk"
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
                  children: "    chunks."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "push"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(chunk);"
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
                  children: "  res."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "on"
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
                  children: "'end'"
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
                  children: "function"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " () {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " body"
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
                  children: " Buffer."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "concat"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(chunks);"
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
                  children: "(body."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "toString"
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
                  children: "  });"
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
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "req."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "end"
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
        })
      }), _jsx(TabsContent, {
        value: "python",
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
            icon: '<svg viewBox="0 0 24 24"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "conn "
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
                  children: " http.client.HTTPSConnection("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"api.sd-rtn.com"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "headers "
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "    'Authorization'"
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
                  children: '"Basic <your_base64_encoded_credentials>"'
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
                  children: "    'Accept'"
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
                  children: '"application/json"'
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
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "conn.request("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"GET"'
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
                  children: '"/dev/v1/channel/user/property/<appid>/<uid>/<channelName>"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "headers"
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
                  children: "headers)"
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
                  children: "res "
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
                  children: " conn.getresponse()"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "data "
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
                  children: " res.read()"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "print"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(data.decode("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"utf-8"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "))"
                })]
              })]
            })
          })
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "response-example-3",
      children: "Response example"
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
              children: '  "success"'
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
              children: '    "join"'
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
              children: "1640330382"
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
              children: '    "uid"'
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
              children: "2845863044"
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
              children: '    "in_channel"'
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
              children: '    "platform"'
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
              children: "7"
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
              children: '    "role"'
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
`, _jsx(_components.h2, {
      id: "manage-user-privileges",
      children: "Manage user privileges"
    }), `
`, _jsx(_components.p, {
      children: "This page illustrates the usage of the privilege banning API, including usage principles, applicable use-cases, inapplicable use-cases, and best practices for the exception handling."
    }), `
`, _jsxs(_components.p, {
      children: ["For the API reference, see ", _jsx(_components.a, {
        href: "#create-a-rule-to-ban-user-privileges",
        children: "Create rule"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "usage-principles",
      children: "Usage principles"
    }), `
`, _jsx(_components.p, {
      children: "Follow these principles when using the API:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Prevent the main business processes from relying too heavily on the privilege banning API."
      }), `
`, _jsx(_components.li, {
        children: "Prevent a RESTful call failure from affecting the main business processes."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "applicable-use-cases",
      children: "Applicable use-cases"
    }), `
`, _jsx(_components.h3, {
      id: "ban-violating-users",
      children: "Ban violating users"
    }), `
`, _jsxs(_components.p, {
      children: ["Revoke the user's right to join the channel based on UID: Set ", _jsx(_components.code, {
        children: "privileges"
      }), " to ", _jsx(_components.code, {
        children: "join_channel"
      }), ", fill in ", _jsx(_components.code, {
        children: "uid"
      }), ", leave ", _jsx(_components.code, {
        children: "cname"
      }), " and ", _jsx(_components.code, {
        children: "ip"
      }), " blank, and set ", _jsx(_components.code, {
        children: "time"
      }), " to a value other than ", _jsx(_components.code, {
        children: "0"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "For example, when it is impossible to completely ban a violating user through your business signaling, you can ban them with this API by their UID."
    }), `
`, _jsx(_components.p, {
      children: "Note that the banning API can be used as a fallback for your business signaling system, but you should consider whether there is a need to unban. Unbanning users is usually not integrated into the main service process to prevent possible call failures from affecting its operation."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Correct usage example: A user files a complaint and their account is manually unbanned."
      }), `
`, _jsx(_components.li, {
        children: "Incorrect usage example: A user is automatically unbanned the next time they join the channel. This might result in the user being unable to join because of an API call failure."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "ban-user-audio-and-video-privileges",
      children: "Ban user audio and video privileges"
    }), `
`, _jsxs(_components.p, {
      children: ["Ban the user's audio and video streaming privileges based on UID: Set ", _jsx(_components.code, {
        children: "privileges"
      }), " to ", _jsx(_components.code, {
        children: "publish_audio"
      }), " or ", _jsx(_components.code, {
        children: "publish_video"
      }), ", fill in ", _jsx(_components.code, {
        children: "uid"
      }), ", leave ", _jsx(_components.code, {
        children: "cname"
      }), " and ", _jsx(_components.code, {
        children: "ip"
      }), " blank, and set ", _jsx(_components.code, {
        children: "time"
      }), " to a value other than ", _jsx(_components.code, {
        children: "0"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "For example, you can prevent a microphone from being used after it was left unattended by the streaming user."
    }), `
`, _jsx(_components.p, {
      children: "Note that banning a user's streaming privileges through this API is a dangerous operation. It should be used as a backup measure after the user was notified of a failure to disconnect."
    }), `
`, _jsx(_components.p, {
      children: "Take into full consideration the impact that a delay or failure to unban might have on the user's ability to use the microphone again, and set the ban time to be as short as possible."
    }), `
`, _jsx(_components.h3, {
      id: "kick-a-user-out-of-a-channel",
      children: "Kick a user out of a channel"
    }), `
`, _jsxs(_components.p, {
      children: ["Kick the user out of the channel based on the channel name and UID. This means taking the user offline, after which they can log in again. Set ", _jsx(_components.code, {
        children: "privileges"
      }), " to ", _jsx(_components.code, {
        children: "join_channel"
      }), ", fill in ", _jsx(_components.code, {
        children: "cname"
      }), " and ", _jsx(_components.code, {
        children: "uid"
      }), ", leave ", _jsx(_components.code, {
        children: "ip"
      }), " blank, and set ", _jsx(_components.code, {
        children: "time"
      }), " to ", _jsx(_components.code, {
        children: "0"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["For example, if the host logs in from 2 devices simultaneously, these two devices will stream with the same ", _jsx(_components.code, {
        children: "uid"
      }), ", causing an exception. This API can be used to kick both devices offline, after which one of them can reconnect."]
    }), `
`, _jsx(_components.p, {
      children: "This API can be used as a backup if the leave channel signal sent by your own business server is invalid."
    }), `
`, _jsxs(_components.p, {
      children: ["Note that a one-time kick with ", _jsx(_components.code, {
        children: "time"
      }), " set to ", _jsx(_components.code, {
        children: "0"
      }), " is a safer way to use this API. When the kick request reaches the edge node, if the SDK is disconnected from the edge node, the one-time kick will fail. If you find that the SDK is reconnected to the edge node after kicking the user, you can call this API again."]
    }), `
`, _jsx(_components.h3, {
      id: "disband-a-channel",
      children: "Disband a channel"
    }), `
`, _jsxs(_components.p, {
      children: ["When streaming ends, kick all users out of the channel by the channel name: set ", _jsx(_components.code, {
        children: "privileges"
      }), " to ", _jsx(_components.code, {
        children: "join_channel"
      }), ", fill in ", _jsx(_components.code, {
        children: "cname"
      }), ", leave ", _jsx(_components.code, {
        children: "uid"
      }), " and ", _jsx(_components.code, {
        children: "ip"
      }), " blank, and set ", _jsx(_components.code, {
        children: "time"
      }), " to ", _jsx(_components.code, {
        children: "0"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["Use this API to disband a channel. Set ", _jsx(_components.code, {
        children: "time"
      }), " to the time that the channel should not be restarted."]
    }), `
`, _jsxs(CalloutContainer, {
      type: "warning",
      children: [_jsx(CalloutTitle, {
        children: "Caution"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Using ", _jsx(_components.code, {
            children: "cname"
          }), " for a banning rule is equivalent to destroying a channel. Make sure that doing so meets your business requirements."]
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["In this use-case, use your own signaling to notify the SDK to call ", _jsx(_components.code, {
        children: "leave channel"
      }), " after the streaming ends. If the business signaling cannot meet the needs, you can use forced disbanding as a fallback. If you rely entirely on RESTful requests, the impact caused by request failures might be too heavy."]
    }), `
`, _jsx(_components.p, {
      children: "If the channel will not be reused, you can set the ban for a longer period of time. If the channel will be reused after a certain period, make sure that the end time of the channel ban is not later than the next channel creation time. If the channel will be reused in an unknown period of time, it is recommended to kick the user from the channel or set the ban time to 1 minute."
    }), `
`, _jsx(_components.p, {
      children: "It is not recommended to ban for a longer time and call the unbanning API when the channel starts. If unbanning fails, the users will not be able to join the channel."
    }), `
`, _jsx(_components.h3, {
      id: "ban-illegal-ips",
      children: "Ban illegal IPs"
    }), `
`, _jsxs(_components.p, {
      children: ["Prevent the user from joining a channel based on IP: Set ", _jsx(_components.code, {
        children: "privileges"
      }), " to ", _jsx(_components.code, {
        children: "join_channel"
      }), ", fill in ", _jsx(_components.code, {
        children: "ip"
      }), ", leave ", _jsx(_components.code, {
        children: "cname"
      }), " and ", _jsx(_components.code, {
        children: "uid"
      }), " blank, and set ", _jsx(_components.code, {
        children: "time"
      }), " to a value other than ", _jsx(_components.code, {
        children: "0"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["For example, when a business is attacked and the IP of the attack source is identified, the ", _jsx(_components.code, {
        children: "ip"
      }), " field can be used to ban it."]
    }), `
`, _jsx(_components.p, {
      children: "Note that using the IP as the banning rule may accidentally affect other users, such as when multiple people share it."
    }), `
`, _jsx(_components.h2, {
      id: "non-applicable-use-cases",
      children: "Non-applicable use-cases"
    }), `
`, _jsx(_components.p, {
      children: "The following table summarizes the use-cases where this API should not be used and provides the reasons why."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Use-case"
          }), _jsx(_components.th, {
            children: "Details"
          }), _jsx(_components.th, {
            children: "Reason"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Use the banning API for user microphone management"
          }), _jsx(_components.td, {
            children: "Ban the streaming privilege when the user is off the microphone, and restore it when the user is back on."
          }), _jsx(_components.td, {
            children: "The real-time communication logic depends on the availability of the banning API. If the unbanning fails, the user cannot send streams."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Use the banning API for user channel permission management"
          }), _jsx(_components.td, {
            children: "Ban the user's privilege to join the channel when the user leaves it, and restore it when they attempt to rejoin."
          }), _jsx(_components.td, {
            children: "The real-time communication logic depends on the availability of the banning API. If the unbanning fails, the user cannot join the channel. It is recommended to use a one-time kick to ensure that the user leaves the channel."
          })]
        })]
      })]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Note"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["To better manage microphone positions, Agora provides a channel status API and a Notifications service. You can use them to obtain the real-time status of a channel and design the subsequent business logic. For details, see ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/optimize-and-operate/receive-notifications",
            children: "Receive notifications about channel events"
          }), "."]
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "best-practices-for-handling-call-exceptions",
      children: "Best practices for handling call exceptions"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Timeout settings"
        }), `
`, _jsx(_components.p, {
          children: "It is recommended to set the client request timeout to a value of more than 20s (minimum 5s) to mitigate network fluctuations. When retrying a timed-out request, increase the timeout accordingly to improve the request success rate."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Retry the request"
        }), `
`, _jsx(_components.p, {
          children: "Decide whether to retry the request after failure and determine the number of retries based on your own business logic."
        }), `
`, _jsxs(_components.p, {
          children: ["When a request returns an error code greater than or equal to ", _jsx(_components.code, {
            children: "500"
          }), " or the request times out, you can continue to retry and increase the waiting interval between multiple retries in a gradual manner."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "query-agora-notifications-ip-addresses",
      children: "Query Agora Notifications IP addresses"
    }), `
`, _jsxs(_components.h3, {
      id: "get-httpsapiagoraiov2ncsip",
      children: [_jsx(_components.code, {
        children: "GET"
      }), " ", _jsx(_components.code, {
        children: "https://api.agora.io/v2/ncs/ip"
      })]
    }), `
`, _jsx(_components.p, {
      children: "Use this endpoint to retrieve the IP addresses of the Agora Notifications server. If your server is behind a firewall, add these IP addresses to your allowlist to receive channel event notifications."
    }), `
`, _jsx(CalloutContainer, {
      type: "success",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Agora occasionally adjusts the Agora Notifications IP addresses. Call this endpoint at least every 24 hours and automatically update your firewall configuration with the latest addresses."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "request-4",
      children: "Request"
    }), `
`, _jsx(_components.p, {
      children: "The request URL and request body is case-sensitive. All requests must use HTTPS."
    }), `
`, _jsx(_components.h3, {
      id: "request-header-5",
      children: "Request header"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Content-Type"
        }), ": ", _jsx(_components.code, {
          children: "application/json"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["The request header must contain the ", _jsx(_components.code, {
          children: "Authorization"
        }), " field. For details, see ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc/authentication",
          children: "RESTful authentication"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "response-5",
      children: "Response"
    }), `
`, _jsxs(_components.p, {
      children: ["A ", _jsx(_components.code, {
        children: "200"
      }), " status code indicates success. The response body contains the following parameters:"]
    }), `
`, _jsx(ParameterList, {
      title: "OK",
      children: _jsx(Parameter, {
        name: "data",
        type: "object",
        children: _jsx(Parameter, {
          name: "service",
          type: "object",
          children: _jsxs(Parameter, {
            name: "hosts",
            type: "array",
            children: [_jsx(_components.p, {
              children: "A list of Agora Notifications server host objects."
            }), _jsx(Parameter, {
              name: "primaryIP",
              type: "string",
              children: _jsx(_components.p, {
                children: "The IP address of the Agora Notifications server. Add all IP addresses returned in this field to your firewall allowlist."
              })
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is not ", _jsx(_components.code, {
        children: "200"
      }), ", the request fails. See the ", _jsx(_components.code, {
        children: "message"
      }), " field in the response body for the reason for this failure. Refer to ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/rtc/response-status-codes",
        children: "Response status codes"
      }), " for details."]
    }), `
`, _jsx(_components.h3, {
      id: "authorization-5",
      children: "Authorization"
    }), `
`, _jsxs(_components.p, {
      children: ["This endpoint requires ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/rtc/authentication",
        children: "Basic authentication"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "request-example-4",
      children: "Request example"
    }), `
`, _jsx(_components.p, {
      children: "Use one of the following code examples to test this request:"
    }), `
`, _jsxs(Tabs, {
      defaultValue: "curl",
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "curl",
          children: "cURL"
        }), _jsx(TabsTrigger, {
          value: "node",
          children: "Node"
        }), _jsx(TabsTrigger, {
          value: "python",
          children: "Python"
        })]
      }), _jsx(TabsContent, {
        value: "curl",
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
                  children: " --request"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " GET"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  --url"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " https://api.sd-rtn.com/v2/ncs/ip"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  --header"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'Accept: application/json'"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  --header"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'Authorization: Basic <your_base64_encoded_credentials>'"
                })]
              })]
            })
          })
        })
      }), _jsx(TabsContent, {
        value: "node",
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
                  children: " https"
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
                  children: " require"
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
                  children: "'https'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
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
                  children: "  method: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'GET'"
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
                  children: "  hostname: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'api.sd-rtn.com'"
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
                  children: "  port: "
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
                  children: "  path: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'/v2/ncs/ip'"
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
                  children: "  headers: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    Authorization: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'Basic <your_base64_encoded_credentials>'"
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
                  children: "    Accept: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'application/json'"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " req"
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
                  children: " https."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "request"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(options, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "function"
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
                  children: "res"
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
                  children: "  const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " chunks"
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
                  children: " [];"
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
                  children: "  res."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "on"
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
                  children: "'data'"
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
                  children: "function"
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
                  children: "chunk"
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
                  children: "    chunks."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "push"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(chunk);"
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
                  children: "  res."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "on"
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
                  children: "'end'"
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
                  children: "function"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " () {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " body"
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
                  children: " Buffer."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "concat"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(chunks);"
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
                  children: "(body."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "toString"
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
                  children: "  });"
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
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "req."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "end"
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
        })
      }), _jsx(TabsContent, {
        value: "python",
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
            icon: '<svg viewBox="0 0 24 24"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "conn "
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
                  children: " http.client.HTTPSConnection("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"api.sd-rtn.com"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "headers "
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "    'Authorization'"
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
                  children: '"Basic <your_base64_encoded_credentials>"'
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
                  children: "    'Accept'"
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
                  children: '"application/json"'
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
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "conn.request("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"GET"'
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
                  children: '"/v2/ncs/ip"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "headers"
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
                  children: "headers)"
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
                  children: "res "
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
                  children: " conn.getresponse()"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "data "
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
                  children: " res.read()"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "print"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(data.decode("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"utf-8"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "))"
                })]
              })]
            })
          })
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "response-example-4",
      children: "Response example"
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
              children: '    "service"'
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
              children: '      "hosts"'
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
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '          "primaryIP"'
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
              children: '"xxx.xxx.xxx.xxx"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '          "primaryIP"'
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
              children: '"xxx.xxx.xxx.xxx"'
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
              children: "      ]"
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
`, _jsx(_components.h2, {
      id: "response-status-codes-1",
      children: "Response status codes"
    }), `
`, _jsx(_components.p, {
      children: "This page describes all response status codes returned when calling the channel management RESTful API."
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is ", _jsx(_components.code, {
        children: "200"
      }), ", the request is successful. If not, troubleshoot the problem based on the ", _jsx(_components.code, {
        children: "message"
      }), " and ", _jsx(_components.code, {
        children: "reason"
      }), " fields that may appear in the corresponding response body."]
    }), `
`, _jsx(_components.p, {
      children: "For example, when a request fails, you might receive the following response:"
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
              children: "# "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "400"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Bad Request"
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
              children: '"invalid appid"'
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
`, _jsx(_components.h3, {
      id: "status-codes",
      children: "Status codes"
    }), `
`, _jsx(_components.p, {
      children: "The following table summarizes all response status codes, their meanings, and recommended actions:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Response status code"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Recommended actions"
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
            children: "The operation is successful."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No troubleshooting required."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "400"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Bad request."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Troubleshoot based on the ", _jsx(_components.code, {
              children: "message"
            }), " field in the response body."]
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
            children: "Unauthorized."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Check and confirm that your authentication information is correct. Possible reasons include: App ID does not exist.", _jsx("br", {}), "Non-matching customer ID and secret."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "403"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Access is forbidden."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The authorization information is incorrect. Contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "Agora technical support"
            }), "."]
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
            children: "The requested resource could not be found."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Confirm that the requested URL and resource are correct."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "415"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Unsupported media type."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Make sure you have set ", _jsx(_components.code, {
              children: "Content-Type"
            }), " in the request header as ", _jsx(_components.code, {
              children: "application/json"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "429"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Too many requests."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Wait and retry."
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
            children: "Internal server error."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Use a backoff strategy for query requests or contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "Agora technical support"
            })]
          })]
        })]
      })]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Note"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If the problem is not solved after taking the recommended action, print out the ", _jsx(_components.code, {
            children: "X-Request-ID"
          }), " and ", _jsx(_components.code, {
            children: "X-Resource-ID"
          }), " response header values and contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "technical support"
          }), "."]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "troubleshooting-example",
      children: "Troubleshooting example"
    }), `
`, _jsxs(_components.p, {
      children: ["A call to create a privilege banning rule returns ", _jsx(_components.code, {
        children: "400 Bad Request"
      }), " and the ", _jsx(_components.code, {
        children: "message"
      }), " field value is ", _jsx(_components.code, {
        children: "invalid appid"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["This means that the App ID is invalid and the rule creation has failed. Obtain the App ID in ", _jsx(_components.a, {
        href: "https://console.agora.io/",
        children: "Agora Console"
      }), " and call the API again."]
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
