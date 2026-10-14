import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Secure authentication with tokens",
  description: "Create a token server and use a token for authentication"
};
export let _markdown = `

Authentication is the act of validating the identity of each user before they access your system. Agora uses digital tokens to authenticate users and their privileges before they access an Agora service, for example, join a classroom.

In order to provide a better authentication experience and security guarantee, on August 18, 2022, Agora launched a new version of the token, AccessToken2. We recommend using AccessToken2, which is compatible with AccessToken.

This page explains how to use AccessToken2 to deploy a token generator on the server and use token authentication on the client, as well as providing reference information.

## Understand the tech [#understand-the-tech]

The following figure shows the steps in the authentication flow:

![FCR authentication flow](https://assets-docs.agora.io/images/flexible-classroom/authentication-flow.svg)

An Agora token is a dynamic key generated on your app server that is valid for 24 hours or less. When your users log in to Flexible Classroom from your app client, the Agora platform validates the token and reads the user and project information stored in the token. A token contains the following information:

* The app ID of your Agora project

* The Flexible Classroom user ID

* The Unix timestamp for when the token expires

## Prerequisites [#prerequisites]

<CalloutContainer type="info">
  <CalloutDescription>
    This page provides an example procedure using Go. You can use another language or platform for the same purpose.
  </CalloutDescription>
</CalloutContainer>

In order to follow this example procedure, you must have the following:

* A valid [Agora account](/en/introduction/account).

* An Agora project with the [app certificate](/en/introduction/account) enabled.

* [Golang](https://golang.org/) 1.14+ with GO111MODULE set to on.

  <CalloutContainer type="info">
    <CalloutDescription>
      If you are using Go 1.16+, GO111MODULE is on by default. See [this blog post](https://blog.golang.org/go116-module-changes) for details.
    </CalloutDescription>
  </CalloutContainer>

* [npm](https://www.npmjs.com/get-npm) and a [supported browser](../../reference/supported-platforms.mdx).

## Implement the authentication flow [#implement-the-authentication-flow]

This section shows you how to use a [token generator](https://github.com/AgoraIO/Tools/tree/master/DynamicKey/AgoraDynamicKey) to generate tokens and authenticate users.

### Get the app ID and app certificate [#get-the-app-id-and-app-certificate]

This section shows you how to get the security information needed to generate a token, including the app ID and app certificate of your project.

To copy your project's app ID and app certificate, see [Get the App ID and App Certificate](/en/introduction/account#get-the-app-id-and-app-certificate).

### Deploy a token server for AccessToken2 [#deploy-a-token-server-for-accesstoken2]

Token generators create the tokens requested by your client app to enable secure access to Agora Platform. To serve these tokens you deploy a generator in your security infrastructure.

In order to show the authentication workflow, this section shows how to build and run a token server written in Golang on your local machine.

<CalloutContainer type="info">
  <CalloutDescription>
    This sample server is for demonstration purposes only. Do not use it in a production environment.
  </CalloutDescription>
</CalloutContainer>

1. Create a file, \`server.go\`, with the following content. Then replace \`YOUR_APP_ID\` and \`YOUR_APP_CERTIFICATE\` with your app ID and app certificate.

   \`\`\`go
   package main

   import (
       educationtokenbuilder "github.com/AgoraIO/Tools/DynamicKey/AgoraDynamicKey/go/src/educationtokenbuilder"
       "fmt"
       "log"
       "net/http"
       "time"
       "encoding/json"
       "errors"
       "strconv"
   )

   type education_token_struct struct {
       roomUuid string \`json:"roomUuid"\`
       userUuid string \`json:"userUuid"\`
       role int \`json:"role"\`
   }

   var educationToken string

   func generateEducationToken(roomUuid string, userUuid string, role int) {
       // Replace "Your_App_ID" with your app ID
       appID := "Your_App_ID"
       // Replace "Your_Certificate" with your app certificate
       appCertificate := "Your_Certificate"
       expire := uint32(3600)

       result, err := educationtokenbuilder.BuildRoomUserToken(appID, appCertificate, roomUuid, userUuid, role, expire)

       if err != nil {
           fmt.Println(err)
       } else {
           fmt.Printf("EducationToken: %s\\n", result)
           educationToken = result
       }
   }

   func educationTokenHandler(w http.ResponseWriter, r *http.Request) {
       w.Header().Set("Content-Type", "application/json;charset=UTF-8")
       w.Header().Set("Access-Control-Allow-Origin", "*")
       w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS");
       w.Header().Set("Access-Control-Allow-Headers", "*");

       if r.Method == "OPTIONS" {
           w.WriteHeader(http.StatusOK)
           return
       }

       if r.Method != "POST" && r.Method != "OPTIONS" {
           http.Error(w, "Unsupported method. Please check.", http.StatusNotFound)
           return
       }

       var t_education_str education_token_struct
       var unmarshalErr *json.UnmarshalTypeError
       str_decoder := json.NewDecoder(r.Body)
       education_err := str_decoder.Decode(&t_education_str)

       if (education_err != nil) {
           if errors.As(education_err, &unmarshalErr) {
               errorResponse(w, "Bad request. Please check your params.", http.StatusBadRequest)
           } else {
               errorResponse(w, "Bad request.", http.StatusBadRequest)
           }
           return
       }

       generateRtmToken(t_education_str.roomUuid,t_education_str.userUuid,t_education_str.role)
       errorResponse(w, educationToken, http.StatusOK)
       log.Println(w, r)
   }

   func errorResponse(w http.ResponseWriter, message string, httpStatusCode int) {
       w.Header().Set("Content-Type", "application/json")
       w.Header().Set("Access-Control-Allow-Origin", "*")
       w.WriteHeader(httpStatusCode)
       resp := make(map[string]string)
       resp["token"] = message
       resp["code"] = strconv.Itoa(httpStatusCode)
       jsonResp, _ := json.Marshal(resp)
       w.Write(jsonResp)
   }

   func main() {
       // Handle routing
       http.HandleFunc("/fetch_education_token", educationTokenHandler)

       fmt.Printf("Starting server at port 8082\\n")

       if err := http.ListenAndServe(":8082", nil); err != nil {
           log.Fatal(err)
       }
   }
   \`\`\`

2. A \`go.mod\` file defines this module’s import path and dependency requirements. To create the \`go.mod\` for your token server, run the following command:

   \`\`\`bash
      $ go mod init sampleServer
   \`\`\`

3. Get dependencies by running the following command:

   \`\`\`bash
      $ go get
   \`\`\`

4. Start the server by running the following command:

   \`\`\`bash
      $ go run server.go
   \`\`\`

### Use AccessToken2 for authentication [#use-accesstoken2-for-authentication]

This section uses the Web client as an example to show how to use a token for client-side user authentication.
The following reference code comes from the [Flexible Classroom web source code](https://github.com/AgoraIO-Community/flexible-classroom-desktop/blob/release/2.8.30/packages/agora-demo-app/src/pages/home/index.tsx).

1. Initiate a token request to the server integrated with the Agora token generator:

   \`\`\`typescript
   const { token, appId } = await roomApi.getCredentialNoAuth({
       userUuid,
       roomUuid,
       role: userRole,
   });
   \`\`\`

2. Use the token obtained in this request to create a \`launchOption\` object:

   \`\`\`typescript
   const launchOption = {
   appId,
   sdkDomain,
   pretest: true,
   courseWareList: [],
   language: language as LanguageEnum,
   userUuid: \`\${userUuid}\`,
   rtmToken: token,
   roomUuid: \`\${roomUuid}\`,
   roomType: roomType,
   roomName: \`\${roomName}\`,
   userName: userName,
   roleType: userRole,
   region: region as EduRegion,
   duration: +duration * 60,
   latencyLevel: 2,
   shareUrl,
   };
   \`\`\`

3. Call \`launch\` and use the token to join the classroom:

   \`\`\`typescript
   AgoraEduSDK.launch(dom, launchOption);
   \`\`\`

## Reference [#reference]

This section introduces token generator libraries, version requirements, and related documents about tokens.

### Token generator libraries [#token-generator-libraries]

Agora provides an open-source [AgoraDynamicKey](https://github.com/AgoraIO/Tools/tree/master/DynamicKey/AgoraDynamicKey) repository on GitHub, which enables you to generate tokens on your server with programming languages such as C++, Java, and Go.

#### AccessToken2 [#accesstoken2]

* App Global

  The scope is global App operations, such as creating classrooms, setting and querying rooms, etc.

  | Language | Algorithm   | Core method                                                                                                                                                | Sample code                                                                                                                                                                       |
  | -------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | C++      | HMAC-SHA256 | [BuildAppToken](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/cpp/src/EducationTokenBuilder2.h)                                  | N/A                                                                                                                                                                               |
  | Go       | HMAC-SHA256 | [BuildAppToken](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/go/src/educationtokenbuilder/educationtokenbuilder.go)             | [sample.go](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/go/sample/educationtokenbuilder/sample.go)                                                    |
  | Java     | HMAC-SHA256 | [buildAppToken](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/java/src/main/java/io/agora/education/EducationTokenBuilder2.java) | [EducationTokenBuilder2Sample.java](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/java/src/main/java/io/agora/sample/EducationTokenBuilder2Sample.java) |
  | Node.js  | HMAC-SHA256 | [buildAppToken](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/nodejs/src/EducationTokenBuilder.js)                               | [EducationTokenSample.js](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/nodejs/sample/EducationTokenSample.js)                                          |
  | PHP      | HMAC-SHA256 | [buildAppToken](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/php/src/EducationTokenBuilder.php)                                 | [EducationTokenBuilderSample.php](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/php/sample/EducationTokenBuilderSample.php)                             |
  | Python 2 | HMAC-SHA256 | [build\\_app\\_token](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/python/src/education_token_builder.py)                         | [education\\_token\\_builder\\_sample.py](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/python/sample/education_token_builder_sample.py)                   |
  | Python 3 | HMAC-SHA256 | [build\\_app\\_token](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/python3/src/education_token_builder.py)                        | [education\\_token\\_builder\\_sample.py](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/python3/sample/education_token_builder_sample.py)                  |

* Specify room and user (used by client)

  The scope is the specified user in the specified room. This token packages two services, \`ServiceEducation\` and \`ServiceRtm\`, which are passed in when the client SDK is started. It can help users open the token for Flexible Classroom and Signaling user login.

  | Language | Algorithm   | Core method                                                                                                                                                     | Sample code                                                                                                                                                                       |
  | -------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | C++      | HMAC-SHA256 | [BuildRoomUserToken](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/cpp/src/EducationTokenBuilder2.h)                                  | N/A                                                                                                                                                                               |
  | Go       | HMAC-SHA256 | [BuildRoomUserToken](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/go/src/educationtokenbuilder/educationtokenbuilder.go)             | [sample.go](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/go/sample/educationtokenbuilder/sample.go)                                                    |
  | Java     | HMAC-SHA256 | [buildRoomUserToken](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/java/src/main/java/io/agora/education/EducationTokenBuilder2.java) | [EducationTokenBuilder2Sample.java](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/java/src/main/java/io/agora/sample/EducationTokenBuilder2Sample.java) |
  | Node.js  | HMAC-SHA256 | [buildRoomUserToken](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/nodejs/src/EducationTokenBuilder.js)                               | [EducationTokenSample.js](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/nodejs/sample/EducationTokenSample.js)                                          |
  | PHP      | HMAC-SHA256 | [buildRoomUserToken](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/php/src/EducationTokenBuilder.php)                                 | [EducationTokenBuilderSample.php](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/php/sample/EducationTokenBuilderSample.php)                             |
  | Python 2 | HMAC-SHA256 | [build\\_room\\_user\\_token](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/python/src/education_token_builder.py)                       | [education\\_token\\_builder\\_sample.py](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/python/sample/education_token_builder_sample.py)                   |
  | Python 3 | HMAC-SHA256 | [build\\_room\\_user\\_token](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/python3/src/education_token_builder.py)                      | [education\\_token\\_builder\\_sample.py](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/python3/sample/education_token_builder_sample.py)                  |

#### AccessToken [#accesstoken]

* If you are using AccessToken, you can refer to the following sample code:

  | Language | Algorithm   | Core method                                                                                                                                | Sample code                                                                                                                                                         |
  | -------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | C++      | HMAC-SHA256 | [buildToken](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/cpp/src/RtmTokenBuilder.h)                            | [RtmTokenBuilderSample.cpp](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/cpp/sample/RtmTokenBuilderSample.cpp)                           |
  | Go       | HMAC-SHA256 | [buildToken](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/go/src/RtmTokenBuilder/RtmTokenBuilder.go)            | [sample.go](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/go/sample/RtmTokenBuilder/sample.go)                                            |
  | Java     | HMAC-SHA256 | [buildToken](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/java/src/main/java/io/agora/rtm/RtmTokenBuilder.java) | [RtmTokenBuilderSample.java](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/java/src/main/java/io/agora/sample/RtmTokenBuilderSample.java) |
  | Node.js  | HMAC-SHA256 | [buildToken](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/nodejs/src/RtmTokenBuilder.js)                        | [RtmTokenBuilderSample.js](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/nodejs/sample/RtmTokenBuilderSample.js)                          |
  | PHP      | HMAC-SHA256 | [buildToken](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/php/src/RtmTokenBuilder.php)                          | [RtmTokenBuilderSample.php](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/php/sample/RtmTokenBuilderSample.php)                           |
  | Python 2 | HMAC-SHA256 | [buildToken](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/python/src/RtmTokenBuilder.py)                        | [RtmTokenBuilderSample.py](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/python/sample/RtmTokenBuilderSample.py)                          |
  | Python 3 | HMAC-SHA256 | [buildToken](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/python3/src/RtmTokenBuilder.py)                       | [RtmTokenBuilderSample.py](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/python3/sample/RtmTokenBuilderSample.py)                         |

### Considerations [#considerations]

#### Parameter consistency [#parameter-consistency]

The parameters used to generate the token need to be consistent with the ones you used to launch Flexible Classroom.

#### App certificate and token [#app-certificate-and-token]

To use the token for authentication, you need to enable the app certificate for your project on Agora Console. Once a project has enabled the app certificate, you must use tokens to authenticate its users.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Authentication is the act of validating the identity of each user before they access your system. Agora uses digital tokens to authenticate users and their privileges before they access an Agora service, for example, join a classroom."
  }, {
    heading: undefined,
    content: "In order to provide a better authentication experience and security guarantee, on August 18, 2022, Agora launched a new version of the token, AccessToken2. We recommend using AccessToken2, which is compatible with AccessToken."
  }, {
    heading: undefined,
    content: "This page explains how to use AccessToken2 to deploy a token generator on the server and use token authentication on the client, as well as providing reference information."
  }, {
    heading: "understand-the-tech",
    content: "The following figure shows the steps in the authentication flow:"
  }, {
    heading: "understand-the-tech",
    content: "An Agora token is a dynamic key generated on your app server that is valid for 24 hours or less. When your users log in to Flexible Classroom from your app client, the Agora platform validates the token and reads the user and project information stored in the token. A token contains the following information:"
  }, {
    heading: "understand-the-tech",
    content: "The app ID of your Agora project"
  }, {
    heading: "understand-the-tech",
    content: "The Flexible Classroom user ID"
  }, {
    heading: "understand-the-tech",
    content: "The Unix timestamp for when the token expires"
  }, {
    heading: "prerequisites",
    content: "This page provides an example procedure using Go. You can use another language or platform for the same purpose."
  }, {
    heading: "prerequisites",
    content: "In order to follow this example procedure, you must have the following:"
  }, {
    heading: "prerequisites",
    content: "A valid Agora account."
  }, {
    heading: "prerequisites",
    content: "An Agora project with the app certificate enabled."
  }, {
    heading: "prerequisites",
    content: "Golang 1.14+ with GO111MODULE set to on."
  }, {
    heading: "prerequisites",
    content: "If you are using Go 1.16+, GO111MODULE is on by default. See this blog post for details."
  }, {
    heading: "prerequisites",
    content: "npm and a supported browser."
  }, {
    heading: "implement-the-authentication-flow",
    content: "This section shows you how to use a token generator to generate tokens and authenticate users."
  }, {
    heading: "get-the-app-id-and-app-certificate",
    content: "This section shows you how to get the security information needed to generate a token, including the app ID and app certificate of your project."
  }, {
    heading: "get-the-app-id-and-app-certificate",
    content: "To copy your project's app ID and app certificate, see Get the App ID and App Certificate."
  }, {
    heading: "deploy-a-token-server-for-accesstoken2",
    content: "Token generators create the tokens requested by your client app to enable secure access to Agora Platform. To serve these tokens you deploy a generator in your security infrastructure."
  }, {
    heading: "deploy-a-token-server-for-accesstoken2",
    content: "In order to show the authentication workflow, this section shows how to build and run a token server written in Golang on your local machine."
  }, {
    heading: "deploy-a-token-server-for-accesstoken2",
    content: "This sample server is for demonstration purposes only. Do not use it in a production environment."
  }, {
    heading: "deploy-a-token-server-for-accesstoken2",
    content: "Create a file, `server.go`, with the following content. Then replace `YOUR_APP_ID` and `YOUR_APP_CERTIFICATE` with your app ID and app certificate."
  }, {
    heading: "deploy-a-token-server-for-accesstoken2",
    content: "A `go.mod` file defines this module’s import path and dependency requirements. To create the `go.mod` for your token server, run the following command:"
  }, {
    heading: "deploy-a-token-server-for-accesstoken2",
    content: "Get dependencies by running the following command:"
  }, {
    heading: "deploy-a-token-server-for-accesstoken2",
    content: "Start the server by running the following command:"
  }, {
    heading: "use-accesstoken2-for-authentication",
    content: `This section uses the Web client as an example to show how to use a token for client-side user authentication.
The following reference code comes from the Flexible Classroom web source code.`
  }, {
    heading: "use-accesstoken2-for-authentication",
    content: "Initiate a token request to the server integrated with the Agora token generator:"
  }, {
    heading: "use-accesstoken2-for-authentication",
    content: "Use the token obtained in this request to create a `launchOption` object:"
  }, {
    heading: "use-accesstoken2-for-authentication",
    content: "Call `launch` and use the token to join the classroom:"
  }, {
    heading: "reference",
    content: "This section introduces token generator libraries, version requirements, and related documents about tokens."
  }, {
    heading: "token-generator-libraries",
    content: "Agora provides an open-source AgoraDynamicKey repository on GitHub, which enables you to generate tokens on your server with programming languages such as C++, Java, and Go."
  }, {
    heading: "accesstoken2",
    content: "App Global"
  }, {
    heading: "accesstoken2",
    content: "The scope is global App operations, such as creating classrooms, setting and querying rooms, etc."
  }, {
    heading: "accesstoken2",
    content: "Language"
  }, {
    heading: "accesstoken2",
    content: "Algorithm"
  }, {
    heading: "accesstoken2",
    content: "Core method"
  }, {
    heading: "accesstoken2",
    content: "Sample code"
  }, {
    heading: "accesstoken2",
    content: "C++"
  }, {
    heading: "accesstoken2",
    content: "HMAC-SHA256"
  }, {
    heading: "accesstoken2",
    content: "BuildAppToken"
  }, {
    heading: "accesstoken2",
    content: "N/A"
  }, {
    heading: "accesstoken2",
    content: "Go"
  }, {
    heading: "accesstoken2",
    content: "HMAC-SHA256"
  }, {
    heading: "accesstoken2",
    content: "BuildAppToken"
  }, {
    heading: "accesstoken2",
    content: "sample.go"
  }, {
    heading: "accesstoken2",
    content: "Java"
  }, {
    heading: "accesstoken2",
    content: "HMAC-SHA256"
  }, {
    heading: "accesstoken2",
    content: "buildAppToken"
  }, {
    heading: "accesstoken2",
    content: "EducationTokenBuilder2Sample.java"
  }, {
    heading: "accesstoken2",
    content: "Node.js"
  }, {
    heading: "accesstoken2",
    content: "HMAC-SHA256"
  }, {
    heading: "accesstoken2",
    content: "buildAppToken"
  }, {
    heading: "accesstoken2",
    content: "EducationTokenSample.js"
  }, {
    heading: "accesstoken2",
    content: "PHP"
  }, {
    heading: "accesstoken2",
    content: "HMAC-SHA256"
  }, {
    heading: "accesstoken2",
    content: "buildAppToken"
  }, {
    heading: "accesstoken2",
    content: "EducationTokenBuilderSample.php"
  }, {
    heading: "accesstoken2",
    content: "Python 2"
  }, {
    heading: "accesstoken2",
    content: "HMAC-SHA256"
  }, {
    heading: "accesstoken2",
    content: "build\\_app\\_token"
  }, {
    heading: "accesstoken2",
    content: "education\\_token\\_builder\\_sample.py"
  }, {
    heading: "accesstoken2",
    content: "Python 3"
  }, {
    heading: "accesstoken2",
    content: "HMAC-SHA256"
  }, {
    heading: "accesstoken2",
    content: "build\\_app\\_token"
  }, {
    heading: "accesstoken2",
    content: "education\\_token\\_builder\\_sample.py"
  }, {
    heading: "accesstoken2",
    content: "Specify room and user (used by client)"
  }, {
    heading: "accesstoken2",
    content: "The scope is the specified user in the specified room. This token packages two services, `ServiceEducation` and `ServiceRtm`, which are passed in when the client SDK is started. It can help users open the token for Flexible Classroom and Signaling user login."
  }, {
    heading: "accesstoken2",
    content: "Language"
  }, {
    heading: "accesstoken2",
    content: "Algorithm"
  }, {
    heading: "accesstoken2",
    content: "Core method"
  }, {
    heading: "accesstoken2",
    content: "Sample code"
  }, {
    heading: "accesstoken2",
    content: "C++"
  }, {
    heading: "accesstoken2",
    content: "HMAC-SHA256"
  }, {
    heading: "accesstoken2",
    content: "BuildRoomUserToken"
  }, {
    heading: "accesstoken2",
    content: "N/A"
  }, {
    heading: "accesstoken2",
    content: "Go"
  }, {
    heading: "accesstoken2",
    content: "HMAC-SHA256"
  }, {
    heading: "accesstoken2",
    content: "BuildRoomUserToken"
  }, {
    heading: "accesstoken2",
    content: "sample.go"
  }, {
    heading: "accesstoken2",
    content: "Java"
  }, {
    heading: "accesstoken2",
    content: "HMAC-SHA256"
  }, {
    heading: "accesstoken2",
    content: "buildRoomUserToken"
  }, {
    heading: "accesstoken2",
    content: "EducationTokenBuilder2Sample.java"
  }, {
    heading: "accesstoken2",
    content: "Node.js"
  }, {
    heading: "accesstoken2",
    content: "HMAC-SHA256"
  }, {
    heading: "accesstoken2",
    content: "buildRoomUserToken"
  }, {
    heading: "accesstoken2",
    content: "EducationTokenSample.js"
  }, {
    heading: "accesstoken2",
    content: "PHP"
  }, {
    heading: "accesstoken2",
    content: "HMAC-SHA256"
  }, {
    heading: "accesstoken2",
    content: "buildRoomUserToken"
  }, {
    heading: "accesstoken2",
    content: "EducationTokenBuilderSample.php"
  }, {
    heading: "accesstoken2",
    content: "Python 2"
  }, {
    heading: "accesstoken2",
    content: "HMAC-SHA256"
  }, {
    heading: "accesstoken2",
    content: "build\\_room\\_user\\_token"
  }, {
    heading: "accesstoken2",
    content: "education\\_token\\_builder\\_sample.py"
  }, {
    heading: "accesstoken2",
    content: "Python 3"
  }, {
    heading: "accesstoken2",
    content: "HMAC-SHA256"
  }, {
    heading: "accesstoken2",
    content: "build\\_room\\_user\\_token"
  }, {
    heading: "accesstoken2",
    content: "education\\_token\\_builder\\_sample.py"
  }, {
    heading: "accesstoken",
    content: "If you are using AccessToken, you can refer to the following sample code:"
  }, {
    heading: "accesstoken",
    content: "Language"
  }, {
    heading: "accesstoken",
    content: "Algorithm"
  }, {
    heading: "accesstoken",
    content: "Core method"
  }, {
    heading: "accesstoken",
    content: "Sample code"
  }, {
    heading: "accesstoken",
    content: "C++"
  }, {
    heading: "accesstoken",
    content: "HMAC-SHA256"
  }, {
    heading: "accesstoken",
    content: "buildToken"
  }, {
    heading: "accesstoken",
    content: "RtmTokenBuilderSample.cpp"
  }, {
    heading: "accesstoken",
    content: "Go"
  }, {
    heading: "accesstoken",
    content: "HMAC-SHA256"
  }, {
    heading: "accesstoken",
    content: "buildToken"
  }, {
    heading: "accesstoken",
    content: "sample.go"
  }, {
    heading: "accesstoken",
    content: "Java"
  }, {
    heading: "accesstoken",
    content: "HMAC-SHA256"
  }, {
    heading: "accesstoken",
    content: "buildToken"
  }, {
    heading: "accesstoken",
    content: "RtmTokenBuilderSample.java"
  }, {
    heading: "accesstoken",
    content: "Node.js"
  }, {
    heading: "accesstoken",
    content: "HMAC-SHA256"
  }, {
    heading: "accesstoken",
    content: "buildToken"
  }, {
    heading: "accesstoken",
    content: "RtmTokenBuilderSample.js"
  }, {
    heading: "accesstoken",
    content: "PHP"
  }, {
    heading: "accesstoken",
    content: "HMAC-SHA256"
  }, {
    heading: "accesstoken",
    content: "buildToken"
  }, {
    heading: "accesstoken",
    content: "RtmTokenBuilderSample.php"
  }, {
    heading: "accesstoken",
    content: "Python 2"
  }, {
    heading: "accesstoken",
    content: "HMAC-SHA256"
  }, {
    heading: "accesstoken",
    content: "buildToken"
  }, {
    heading: "accesstoken",
    content: "RtmTokenBuilderSample.py"
  }, {
    heading: "accesstoken",
    content: "Python 3"
  }, {
    heading: "accesstoken",
    content: "HMAC-SHA256"
  }, {
    heading: "accesstoken",
    content: "buildToken"
  }, {
    heading: "accesstoken",
    content: "RtmTokenBuilderSample.py"
  }, {
    heading: "parameter-consistency",
    content: "The parameters used to generate the token need to be consistent with the ones you used to launch Flexible Classroom."
  }, {
    heading: "app-certificate-and-token",
    content: "To use the token for authentication, you need to enable the app certificate for your project on Agora Console. Once a project has enabled the app certificate, you must use tokens to authenticate its users."
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implement-the-authentication-flow",
    content: "Implement the authentication flow"
  }, {
    id: "get-the-app-id-and-app-certificate",
    content: "Get the app ID and app certificate"
  }, {
    id: "deploy-a-token-server-for-accesstoken2",
    content: "Deploy a token server for AccessToken2"
  }, {
    id: "use-accesstoken2-for-authentication",
    content: "Use AccessToken2 for authentication"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "token-generator-libraries",
    content: "Token generator libraries"
  }, {
    id: "accesstoken2",
    content: "AccessToken2"
  }, {
    id: "accesstoken",
    content: "AccessToken"
  }, {
    id: "considerations",
    content: "Considerations"
  }, {
    id: "parameter-consistency",
    content: "Parameter consistency"
  }, {
    id: "app-certificate-and-token",
    content: "App certificate and token"
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
  url: "#implement-the-authentication-flow",
  title: _jsx(_Fragment, {
    children: "Implement the authentication flow"
  })
}, {
  depth: 3,
  url: "#get-the-app-id-and-app-certificate",
  title: _jsx(_Fragment, {
    children: "Get the app ID and app certificate"
  })
}, {
  depth: 3,
  url: "#deploy-a-token-server-for-accesstoken2",
  title: _jsx(_Fragment, {
    children: "Deploy a token server for AccessToken2"
  })
}, {
  depth: 3,
  url: "#use-accesstoken2-for-authentication",
  title: _jsx(_Fragment, {
    children: "Use AccessToken2 for authentication"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#token-generator-libraries",
  title: _jsx(_Fragment, {
    children: "Token generator libraries"
  })
}, {
  depth: 4,
  url: "#accesstoken2",
  title: _jsx(_Fragment, {
    children: "AccessToken2"
  })
}, {
  depth: 4,
  url: "#accesstoken",
  title: _jsx(_Fragment, {
    children: "AccessToken"
  })
}, {
  depth: 3,
  url: "#considerations",
  title: _jsx(_Fragment, {
    children: "Considerations"
  })
}, {
  depth: 4,
  url: "#parameter-consistency",
  title: _jsx(_Fragment, {
    children: "Parameter consistency"
  })
}, {
  depth: 4,
  url: "#app-certificate-and-token",
  title: _jsx(_Fragment, {
    children: "App certificate and token"
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
      children: "Authentication is the act of validating the identity of each user before they access your system. Agora uses digital tokens to authenticate users and their privileges before they access an Agora service, for example, join a classroom."
    }), `
`, _jsx(_components.p, {
      children: "In order to provide a better authentication experience and security guarantee, on August 18, 2022, Agora launched a new version of the token, AccessToken2. We recommend using AccessToken2, which is compatible with AccessToken."
    }), `
`, _jsx(_components.p, {
      children: "This page explains how to use AccessToken2 to deploy a token generator on the server and use token authentication on the client, as well as providing reference information."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsx(_components.p, {
      children: "The following figure shows the steps in the authentication flow:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/flexible-classroom/authentication-flow.svg",
        alt: "FCR authentication flow"
      })
    }), `
`, _jsx(_components.p, {
      children: "An Agora token is a dynamic key generated on your app server that is valid for 24 hours or less. When your users log in to Flexible Classroom from your app client, the Agora platform validates the token and reads the user and project information stored in the token. A token contains the following information:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "The app ID of your Agora project"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "The Flexible Classroom user ID"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "The Unix timestamp for when the token expires"
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "This page provides an example procedure using Go. You can use another language or platform for the same purpose."
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "In order to follow this example procedure, you must have the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["A valid ", _jsx(_components.a, {
            href: "/en/introduction/account",
            children: "Agora account"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["An Agora project with the ", _jsx(_components.a, {
            href: "/en/introduction/account",
            children: "app certificate"
          }), " enabled."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "https://golang.org/",
            children: "Golang"
          }), " 1.14+ with GO111MODULE set to on."]
        }), `
`, _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["If you are using Go 1.16+, GO111MODULE is on by default. See ", _jsx(_components.a, {
                href: "https://blog.golang.org/go116-module-changes",
                children: "this blog post"
              }), " for details."]
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "https://www.npmjs.com/get-npm",
            children: "npm"
          }), " and a ", _jsx(_components.a, {
            href: "../../reference/supported-platforms.mdx",
            children: "supported browser"
          }), "."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "implement-the-authentication-flow",
      children: "Implement the authentication flow"
    }), `
`, _jsxs(_components.p, {
      children: ["This section shows you how to use a ", _jsx(_components.a, {
        href: "https://github.com/AgoraIO/Tools/tree/master/DynamicKey/AgoraDynamicKey",
        children: "token generator"
      }), " to generate tokens and authenticate users."]
    }), `
`, _jsx(_components.h3, {
      id: "get-the-app-id-and-app-certificate",
      children: "Get the app ID and app certificate"
    }), `
`, _jsx(_components.p, {
      children: "This section shows you how to get the security information needed to generate a token, including the app ID and app certificate of your project."
    }), `
`, _jsxs(_components.p, {
      children: ["To copy your project's app ID and app certificate, see ", _jsx(_components.a, {
        href: "/en/introduction/account#get-the-app-id-and-app-certificate",
        children: "Get the App ID and App Certificate"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "deploy-a-token-server-for-accesstoken2",
      children: "Deploy a token server for AccessToken2"
    }), `
`, _jsx(_components.p, {
      children: "Token generators create the tokens requested by your client app to enable secure access to Agora Platform. To serve these tokens you deploy a generator in your security infrastructure."
    }), `
`, _jsx(_components.p, {
      children: "In order to show the authentication workflow, this section shows how to build and run a token server written in Golang on your local machine."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "This sample server is for demonstration purposes only. Do not use it in a production environment."
        })
      })
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Create a file, ", _jsx(_components.code, {
            children: "server.go"
          }), ", with the following content. Then replace ", _jsx(_components.code, {
            children: "YOUR_APP_ID"
          }), " and ", _jsx(_components.code, {
            children: "YOUR_APP_CERTIFICATE"
          }), " with your app ID and app certificate."]
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "import"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ("
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    educationtokenbuilder "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "github.com/AgoraIO/Tools/DynamicKey/AgoraDynamicKey/go/src/educationtokenbuilder"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "fmt"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "log"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "net/http"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "time"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "encoding/json"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "errors"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "strconv"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
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
                  children: "type"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " education_token_struct"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " struct"
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
                  children: "    roomUuid "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' `json:"roomUuid"`'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    userUuid "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' `json:"userUuid"`'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    role "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' `json:"role"`'
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " educationToken "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
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
                  children: "func"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " generateEducationToken"
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
                  children: "roomUuid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " string"
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
                  children: "userUuid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " string"
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
                  children: "role"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " int"
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
                  children: '    // Replace "Your_App_ID" with your app ID'
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    appID "
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
                  children: ' "Your_App_ID"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: '    // Replace "Your_Certificate" with your app certificate'
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    appCertificate "
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
                  children: ' "Your_Certificate"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    expire "
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
                  children: " uint32"
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
                  children: "3600"
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
                  children: "    result, err "
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
                  children: " educationtokenbuilder."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "BuildRoomUserToken"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(appID, appCertificate, roomUuid, userUuid, role, expire)"
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
                  children: "    if"
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
                  children: "        fmt."
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
                  children: "(err)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    } "
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        fmt."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Printf"
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
                  children: '"EducationToken: '
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%s\\n"
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
                  children: ", result)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        educationToken "
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
                  children: " result"
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
                  children: " educationTokenHandler"
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
                  children: "w"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " http"
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
                  children: "ResponseWriter"
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
                  children: "r"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " *"
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
                  children: "Request"
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
                  children: "    w."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Header"
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
                  children: "Set"
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
                  children: '"application/json;charset=UTF-8"'
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
                  children: "    w."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Header"
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
                  children: "Set"
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
                  children: '"Access-Control-Allow-Origin"'
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
                  children: '"*"'
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
                  children: "    w."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Header"
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
                  children: "Set"
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
                  children: '"Access-Control-Allow-Methods"'
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
                  children: '"POST, OPTIONS"'
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
                  children: "    w."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Header"
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
                  children: "Set"
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
                  children: '"Access-Control-Allow-Headers"'
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
                  children: '"*"'
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
                  children: "    if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " r.Method "
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
                  children: ' "OPTIONS"'
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
                  children: "        w."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "WriteHeader"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(http.StatusOK)"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        return"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " r.Method "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "!="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "POST"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " &&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " r.Method "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "!="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "OPTIONS"'
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
                  children: "        http."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Error"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(w, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"Unsupported method. Please check."'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", http.StatusNotFound)"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        return"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " t_education_str "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "education_token_struct"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " unmarshalErr "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "*"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "json"
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
                  children: "UnmarshalTypeError"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    str_decoder "
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
                  children: " json."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "NewDecoder"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(r.Body)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    education_err "
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
                  children: " str_decoder."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Decode"
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
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "t_education_str)"
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
                  children: "    if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " (education_err "
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
                  children: " errors."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "As"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(education_err, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "&"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "unmarshalErr) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "            errorResponse"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(w, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"Bad request. Please check your params."'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", http.StatusBadRequest)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        } "
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
                  children: "            errorResponse"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(w, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"Bad request."'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", http.StatusBadRequest)"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        return"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "    generateRtmToken"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(t_education_str.roomUuid,t_education_str.userUuid,t_education_str.role)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "    errorResponse"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(w, educationToken, http.StatusOK)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    log."
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
                  children: "(w, r)"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "func"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " errorResponse"
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
                  children: "w"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " http"
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
                  children: "ResponseWriter"
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
                  children: "message"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " string"
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
                  children: "httpStatusCode"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " int"
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
                  children: "    w."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Header"
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
                  children: "Set"
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
                  children: "    w."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Header"
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
                  children: "Set"
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
                  children: '"Access-Control-Allow-Origin"'
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
                  children: '"*"'
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
                  children: "    w."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "WriteHeader"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(httpStatusCode)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    resp "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " make"
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
                  children: "map"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "["
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
                  children: "]"
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
                  children: "    resp["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"token"'
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
                  children: " message"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    resp["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"code"'
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
                  children: " strconv."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Itoa"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(httpStatusCode)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    jsonResp, _ "
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
                  children: " json."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Marshal"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(resp)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    w."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Write"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(jsonResp)"
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
                  children: "    // Handle routing"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    http."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "HandleFunc"
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
                  children: '"/fetch_education_token"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", educationTokenHandler)"
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
                  children: "    fmt."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Printf"
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
                  children: '"Starting server at port 8082'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "\\n"
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
                  children: "    if"
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
                  children: "ListenAndServe"
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
                  children: '":8082"'
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
                  children: "nil"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "); err "
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
                  children: "        log."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Fatal"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(err)"
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
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["A ", _jsx(_components.code, {
            children: "go.mod"
          }), " file defines this module’s import path and dependency requirements. To create the ", _jsx(_components.code, {
            children: "go.mod"
          }), " for your token server, run the following command:"]
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
                  children: "   $"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " go"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " mod"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " init"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " sampleServer"
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
          children: "Get dependencies by running the following command:"
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
                  children: "   $"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " go"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " get"
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
          children: "Start the server by running the following command:"
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
                  children: "   $"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " go"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " run"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " server.go"
                })]
              })
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "use-accesstoken2-for-authentication",
      children: "Use AccessToken2 for authentication"
    }), `
`, _jsxs(_components.p, {
      children: [`This section uses the Web client as an example to show how to use a token for client-side user authentication.
The following reference code comes from the `, _jsx(_components.a, {
        href: "https://github.com/AgoraIO-Community/flexible-classroom-desktop/blob/release/2.8.30/packages/agora-demo-app/src/pages/home/index.tsx",
        children: "Flexible Classroom web source code"
      }), "."]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Initiate a token request to the server integrated with the Agora token generator:"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " { "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "token"
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
                  children: "appId"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " } "
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
                  children: " roomApi."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getCredentialNoAuth"
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
                  children: "    userUuid,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    roomUuid,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    role: userRole,"
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
`, _jsxs(_components.p, {
          children: ["Use the token obtained in this request to create a ", _jsx(_components.code, {
            children: "launchOption"
          }), " object:"]
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " launchOption"
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
                  children: "appId,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "sdkDomain,"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "pretest: "
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
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "courseWareList: [],"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "language: language "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "as"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " LanguageEnum"
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
                  children: "userUuid: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "`${"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "userUuid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "}`"
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
                  children: "rtmToken: token,"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "roomUuid: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "`${"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "roomUuid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "}`"
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
                  children: "roomType: roomType,"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "roomName: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "`${"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "roomName"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "}`"
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
                  children: "userName: userName,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "roleType: userRole,"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "region: region "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "as"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " EduRegion"
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
                  children: "duration: "
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
                  children: "duration "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "*"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 60"
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
                  children: "latencyLevel: "
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
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "shareUrl,"
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
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "launch"
          }), " and use the token to join the classroom:"]
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
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "AgoraEduSDK."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "launch"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(dom, launchOption);"
                })]
              })
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "This section introduces token generator libraries, version requirements, and related documents about tokens."
    }), `
`, _jsx(_components.h3, {
      id: "token-generator-libraries",
      children: "Token generator libraries"
    }), `
`, _jsxs(_components.p, {
      children: ["Agora provides an open-source ", _jsx(_components.a, {
        href: "https://github.com/AgoraIO/Tools/tree/master/DynamicKey/AgoraDynamicKey",
        children: "AgoraDynamicKey"
      }), " repository on GitHub, which enables you to generate tokens on your server with programming languages such as C++, Java, and Go."]
    }), `
`, _jsx(_components.h4, {
      id: "accesstoken2",
      children: "AccessToken2"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "App Global"
        }), `
`, _jsx(_components.p, {
          children: "The scope is global App operations, such as creating classrooms, setting and querying rooms, etc."
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Language"
              }), _jsx(_components.th, {
                children: "Algorithm"
              }), _jsx(_components.th, {
                children: "Core method"
              }), _jsx(_components.th, {
                children: "Sample code"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "C++"
              }), _jsx(_components.td, {
                children: "HMAC-SHA256"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/cpp/src/EducationTokenBuilder2.h",
                  children: "BuildAppToken"
                })
              }), _jsx(_components.td, {
                children: "N/A"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Go"
              }), _jsx(_components.td, {
                children: "HMAC-SHA256"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/go/src/educationtokenbuilder/educationtokenbuilder.go",
                  children: "BuildAppToken"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/go/sample/educationtokenbuilder/sample.go",
                  children: "sample.go"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Java"
              }), _jsx(_components.td, {
                children: "HMAC-SHA256"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/java/src/main/java/io/agora/education/EducationTokenBuilder2.java",
                  children: "buildAppToken"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/java/src/main/java/io/agora/sample/EducationTokenBuilder2Sample.java",
                  children: "EducationTokenBuilder2Sample.java"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Node.js"
              }), _jsx(_components.td, {
                children: "HMAC-SHA256"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/nodejs/src/EducationTokenBuilder.js",
                  children: "buildAppToken"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/nodejs/sample/EducationTokenSample.js",
                  children: "EducationTokenSample.js"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "PHP"
              }), _jsx(_components.td, {
                children: "HMAC-SHA256"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/php/src/EducationTokenBuilder.php",
                  children: "buildAppToken"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/php/sample/EducationTokenBuilderSample.php",
                  children: "EducationTokenBuilderSample.php"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Python 2"
              }), _jsx(_components.td, {
                children: "HMAC-SHA256"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/python/src/education_token_builder.py",
                  children: "build_app_token"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/python/sample/education_token_builder_sample.py",
                  children: "education_token_builder_sample.py"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Python 3"
              }), _jsx(_components.td, {
                children: "HMAC-SHA256"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/python3/src/education_token_builder.py",
                  children: "build_app_token"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/python3/sample/education_token_builder_sample.py",
                  children: "education_token_builder_sample.py"
                })
              })]
            })]
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Specify room and user (used by client)"
        }), `
`, _jsxs(_components.p, {
          children: ["The scope is the specified user in the specified room. This token packages two services, ", _jsx(_components.code, {
            children: "ServiceEducation"
          }), " and ", _jsx(_components.code, {
            children: "ServiceRtm"
          }), ", which are passed in when the client SDK is started. It can help users open the token for Flexible Classroom and Signaling user login."]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Language"
              }), _jsx(_components.th, {
                children: "Algorithm"
              }), _jsx(_components.th, {
                children: "Core method"
              }), _jsx(_components.th, {
                children: "Sample code"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "C++"
              }), _jsx(_components.td, {
                children: "HMAC-SHA256"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/cpp/src/EducationTokenBuilder2.h",
                  children: "BuildRoomUserToken"
                })
              }), _jsx(_components.td, {
                children: "N/A"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Go"
              }), _jsx(_components.td, {
                children: "HMAC-SHA256"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/go/src/educationtokenbuilder/educationtokenbuilder.go",
                  children: "BuildRoomUserToken"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/go/sample/educationtokenbuilder/sample.go",
                  children: "sample.go"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Java"
              }), _jsx(_components.td, {
                children: "HMAC-SHA256"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/java/src/main/java/io/agora/education/EducationTokenBuilder2.java",
                  children: "buildRoomUserToken"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/java/src/main/java/io/agora/sample/EducationTokenBuilder2Sample.java",
                  children: "EducationTokenBuilder2Sample.java"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Node.js"
              }), _jsx(_components.td, {
                children: "HMAC-SHA256"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/nodejs/src/EducationTokenBuilder.js",
                  children: "buildRoomUserToken"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/nodejs/sample/EducationTokenSample.js",
                  children: "EducationTokenSample.js"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "PHP"
              }), _jsx(_components.td, {
                children: "HMAC-SHA256"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/php/src/EducationTokenBuilder.php",
                  children: "buildRoomUserToken"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/php/sample/EducationTokenBuilderSample.php",
                  children: "EducationTokenBuilderSample.php"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Python 2"
              }), _jsx(_components.td, {
                children: "HMAC-SHA256"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/python/src/education_token_builder.py",
                  children: "build_room_user_token"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/python/sample/education_token_builder_sample.py",
                  children: "education_token_builder_sample.py"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Python 3"
              }), _jsx(_components.td, {
                children: "HMAC-SHA256"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/python3/src/education_token_builder.py",
                  children: "build_room_user_token"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/python3/sample/education_token_builder_sample.py",
                  children: "education_token_builder_sample.py"
                })
              })]
            })]
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "accesstoken",
      children: "AccessToken"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "If you are using AccessToken, you can refer to the following sample code:"
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Language"
              }), _jsx(_components.th, {
                children: "Algorithm"
              }), _jsx(_components.th, {
                children: "Core method"
              }), _jsx(_components.th, {
                children: "Sample code"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "C++"
              }), _jsx(_components.td, {
                children: "HMAC-SHA256"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/cpp/src/RtmTokenBuilder.h",
                  children: "buildToken"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/cpp/sample/RtmTokenBuilderSample.cpp",
                  children: "RtmTokenBuilderSample.cpp"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Go"
              }), _jsx(_components.td, {
                children: "HMAC-SHA256"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/go/src/RtmTokenBuilder/RtmTokenBuilder.go",
                  children: "buildToken"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/go/sample/RtmTokenBuilder/sample.go",
                  children: "sample.go"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Java"
              }), _jsx(_components.td, {
                children: "HMAC-SHA256"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/java/src/main/java/io/agora/rtm/RtmTokenBuilder.java",
                  children: "buildToken"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/java/src/main/java/io/agora/sample/RtmTokenBuilderSample.java",
                  children: "RtmTokenBuilderSample.java"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Node.js"
              }), _jsx(_components.td, {
                children: "HMAC-SHA256"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/nodejs/src/RtmTokenBuilder.js",
                  children: "buildToken"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/nodejs/sample/RtmTokenBuilderSample.js",
                  children: "RtmTokenBuilderSample.js"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "PHP"
              }), _jsx(_components.td, {
                children: "HMAC-SHA256"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/php/src/RtmTokenBuilder.php",
                  children: "buildToken"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/php/sample/RtmTokenBuilderSample.php",
                  children: "RtmTokenBuilderSample.php"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Python 2"
              }), _jsx(_components.td, {
                children: "HMAC-SHA256"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/python/src/RtmTokenBuilder.py",
                  children: "buildToken"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/python/sample/RtmTokenBuilderSample.py",
                  children: "RtmTokenBuilderSample.py"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Python 3"
              }), _jsx(_components.td, {
                children: "HMAC-SHA256"
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/python3/src/RtmTokenBuilder.py",
                  children: "buildToken"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.a, {
                  href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/python3/sample/RtmTokenBuilderSample.py",
                  children: "RtmTokenBuilderSample.py"
                })
              })]
            })]
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "considerations",
      children: "Considerations"
    }), `
`, _jsx(_components.h4, {
      id: "parameter-consistency",
      children: "Parameter consistency"
    }), `
`, _jsx(_components.p, {
      children: "The parameters used to generate the token need to be consistent with the ones you used to launch Flexible Classroom."
    }), `
`, _jsx(_components.h4, {
      id: "app-certificate-and-token",
      children: "App certificate and token"
    }), `
`, _jsx(_components.p, {
      children: "To use the token for authentication, you need to enable the app certificate for your project on Agora Console. Once a project has enabled the app certificate, you must use tokens to authenticate its users."
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
