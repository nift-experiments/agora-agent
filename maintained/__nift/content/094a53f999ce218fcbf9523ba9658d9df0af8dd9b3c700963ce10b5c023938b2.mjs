import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Configure Flexible Classroom",
  description: "Enable the Flexible Classroom service and configure storage and recording in Agora Console."
};
export let _markdown = `

This page introduces how to enable and configure Flexible Classroom in Agora Console.

## Prerequisites [#prerequisites]

In order to follow this procedure you must have:

* An Agora [account](/en/introduction/account#sign-up-for-an-agora-account) and [project](/en/introduction/account#your-first-agora-project).

* A third-party cloud storage service for whiteboard snapshots and recordings, such as Amazon S3.

## Enable Flexible Classroom [#enable-flexible-classroom]

To enable Flexible Classroom, in [Agora Console](https://console.agora.io), select **RTC Services** from the sidebar, then locate the **Flexible Classroom** card and turn on its toggle.

Flexible Classroom depends on the following services, listed under **Prerequisites**.

* **RESTful API**: Needed to create the client keys Flexible Classroom depends on.
* **Whiteboard**: Needed for App Identifier and SDK token generation.
* **Cloud Recording**: Provisioned automatically when Flexible Classroom is enabled.

Turn on the toggle to enable Flexible Classroom and all the listed services at once, or select **Enable** next to each individual service to enable it manually.

## Configure Flexible Classroom [#configure-flexible-classroom]

Select the settings icon on the **Flexible Classroom** card to open its configuration panel. The panel provides the whiteboard credentials, storage, cloud recording, and Chat settings for the service. You must generate the Whiteboard SDK token before you can save your changes.

![Flexible Classroom whiteboard and storage settings](https://assets-docs.agora.io/images/console/flexible-classroom-config.png)

### Whiteboard [#whiteboard]

Under **Whiteboard**, copy the project's **App Identifier** and generate the **SDK Token**. When you regenerate the token, copy it immediately and save it for future reference — you cannot view it again.

To display PPT, Word, or PDF courseware on the whiteboard, enable the whiteboard server-side features (document-to-webpage, document-to-picture, and screenshot) on the Interactive Whiteboard panel. For details, see [Enable whiteboard server-side features](/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard).

### Storage configuration [#storage-configuration]

Under **Storage Configuration**, set the storage vendor for whiteboard snapshots and recordings:

* **Vendor**: The storage vendor for whiteboard snapshots and recordings.
* **Region**: The location of the data center you specified when creating a bucket.
* **Endpoint**: The domain name used to access the storage service, such as \`s3.us-east-2.amazonaws.com\`.
* **Bucket**: The bucket name.
* **Folder**: The folder used to store the files, such as \`whiteboard\`.
* **Access Key**: The access key provided by your storage vendor, which is used to identify visitors.
* **Secret Key**: The secret key provided by your storage vendor, which is used to authenticate signatures.

To ensure that Agora can access files in your storage space, enable public access or higher permissions for the space. See [Considerations](#considerations).

### Cloud recording [#cloud-recording]

Under **Cloud Recording**, set **Recording Config** and **Storage Config** to **Default** or **Custom**.

* **Recording Config**: By default, you record teacher audio and video in [composite recording mode](/en/realtime-media/cloud-recording/build/start-a-recording/composite-mode). To change the default behavior, select **Custom** and pass in a \`recordingConfig\` JSON object:

  \`\`\`json
  {
      "maxIdleTime": 30,
      "streamTypes": 2,
      "channelType": 0
  }
  \`\`\`

  For parameter descriptions, see [recordingConfig](/en/api-reference/api-ref/cloud-recording).

* **Storage Config**: By default, recorded files are stored in Agora's storage account. To store recordings in your own third-party cloud storage, select **Custom** and pass in a \`storageConfig\` JSON object. Use the following fields to specify the URL and storage location of the recording file:

  * \`endpoint\`: (Required) String. The full path composed of the Bucket name and the access domain name. For example, if your Bucket name is \`agora-recording\` and the OSS access domain name is \`oss-cn-shanghai.aliyuncs.com\`, then the \`endpoint\` field is set to \`https://agora-recording.oss-cn-shanghai.aliyuncs.com\`.
  * \`fileNamePrefix\`: (Optional) JSONArray. An array of strings that specifies the storage location of the recording file in the third-party cloud storage. The prefix length, including slashes, cannot exceed 128 characters. The string supports 26 uppercase and lowercase English letters a-z, A-Z, and 10 numbers 0-9. Slashes, underscores, brackets, and other symbol characters are not allowed. You can use variables to specify a dynamic path. When you initiate recording, Flexible Classroom replaces variables with real values.

  Sample \`storageConfig\`:

  \`\`\`json
  {
        "vendor": 2,
        "region": 3,
        "bucket": "xxxxx",
        "accessKey": "xxxxxxf",
        "secretKey": "xxxxx",
        "endpoint": "https://agora-recording.oss-cn-shanghai.aliyuncs.com",
        "fileNamePrefix": [
           "scenario",
           "recording"
        ]
  }
  \`\`\`

  To set the path dynamically, you can use these two types of variables:

  | Type            | Variable                                             | Description                                           |
  | :-------------- | :--------------------------------------------------- | :---------------------------------------------------- |
  | Fixed variables | \`\${appId}\`                                           | App ID                                                |
  | Fixed variables | \`\${roomUuid}\`                                        | The UUID of the class to be recorded                  |
  | Date variables  | \`\${yyyy}\`                                            | Year                                                  |
  | Date variables  | \`\${MM}\`                                              | Month                                                 |
  | Date variables  | \`\${dd}\`                                              | Day                                                   |
  | Date variables  | \`\${yyyyMMdd}\`, \`\${yyyyMM}\`, \`\${yyyy-dd}\`, \`\${MM_dd}\` | Date variables can be combined into different formats |

  For example, if you set the \`fileNamePrefix\` field as follows:

  \`\`\`json
  "fileNamePrefix": [
  "scenario",
  "recording",
  "\${appId}",
  "\${yyyyMM}",
  "\${roomUuid}"
  ]
  \`\`\`

  The recording storage path is similar to \`/scenario/recording/[appID]/202303/[roomUUID]/filename.mp4\`.

  For complete parameter descriptions, see [storageConfig](/en/api-reference/api-ref/cloud-recording).

### Chat [#chat]

Turn on **Enable Chat** to configure Chat (Huanxin IM) for Flexible Classroom, then complete the following fields:

* **API Host**: The REST API access address generated when enabling Chat.
* **orgName**: The unique identifier of the enterprise generated when enabling Chat.
* **superAdmin**: The super administrator username prefix. Only numbers and letters are supported. Agora uses \`\${superAdmin}-\${timestamp}\` as the super administrator to create a chat room.
* **appName**: The unique name of the app generated when enabling Chat.
* **appKey**: The unique identifier of the app generated when enabling Chat.

These values are generated when you enable Chat for the project. To enable Chat, in [Agora Console](https://console.agora.io), select **RTC Services** from the sidebar, then locate the **Chat** card and turn on its toggle.

## Considerations [#considerations]

#### AWS S3 account configuration [#aws-s3-account-configuration]

To ensure that Agora can access files in your third-party cloud storage space, you should enable public access or higher permissions for third-party storage spaces.

Configure your AWS S3 account as follows:

* Bucket policy

  \`\`\`json
  {
     "Version":"2012-10-17",
     "Id":"Policy1622700880591",
     "Statement":[
        {
           "Sid":"Stmt1622700872941",
           "Effect":"Allow",
           "Principal":"*",
           "Action":["s3:GetObject","s3:PutObject"],
           "Resource":"arn:aws-cn:s3:::agora-adc-artifacts/"
        }
     ]
  }
  \`\`\`

  ![AWS S3 bucket policy configuration](https://assets-docs.agora.io/images/flexible-classroom/configure-aws-ss1.png)

* Cross-origin resource sharing

  \`\`\`json
  [
     {
        "AllowedHeaders":[
           "*"
        ],
        "AllowedMethods":[
           "PUT",
           "GET"
        ],
        "AllowedOrigins":[
           "*"
        ],
        "ExposeHeaders":[

        ]
     }
  ]
  \`\`\`

  ![AWS S3 cross-origin resource sharing configuration](https://assets-docs.agora.io/images/flexible-classroom/configure-aws-ss2.png)

#### Service limit [#service-limit]

Flexible Classroom supports a maximum of 10,000 people online at the same time. If you need to extend your limit, contact technical support.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page introduces how to enable and configure Flexible Classroom in Agora Console."
  }, {
    heading: "prerequisites",
    content: "In order to follow this procedure you must have:"
  }, {
    heading: "prerequisites",
    content: "An Agora account and project."
  }, {
    heading: "prerequisites",
    content: "A third-party cloud storage service for whiteboard snapshots and recordings, such as Amazon S3."
  }, {
    heading: "enable-flexible-classroom",
    content: "To enable Flexible Classroom, in Agora Console, select **RTC Services** from the sidebar, then locate the **Flexible Classroom** card and turn on its toggle."
  }, {
    heading: "enable-flexible-classroom",
    content: "Flexible Classroom depends on the following services, listed under **Prerequisites**."
  }, {
    heading: "enable-flexible-classroom",
    content: "**RESTful API**: Needed to create the client keys Flexible Classroom depends on."
  }, {
    heading: "enable-flexible-classroom",
    content: "**Whiteboard**: Needed for App Identifier and SDK token generation."
  }, {
    heading: "enable-flexible-classroom",
    content: "**Cloud Recording**: Provisioned automatically when Flexible Classroom is enabled."
  }, {
    heading: "enable-flexible-classroom",
    content: "Turn on the toggle to enable Flexible Classroom and all the listed services at once, or select **Enable** next to each individual service to enable it manually."
  }, {
    heading: "configure-flexible-classroom",
    content: "Select the settings icon on the **Flexible Classroom** card to open its configuration panel. The panel provides the whiteboard credentials, storage, cloud recording, and Chat settings for the service. You must generate the Whiteboard SDK token before you can save your changes."
  }, {
    heading: "whiteboard",
    content: "Under **Whiteboard**, copy the project's **App Identifier** and generate the **SDK Token**. When you regenerate the token, copy it immediately and save it for future reference — you cannot view it again."
  }, {
    heading: "whiteboard",
    content: "To display PPT, Word, or PDF courseware on the whiteboard, enable the whiteboard server-side features (document-to-webpage, document-to-picture, and screenshot) on the Interactive Whiteboard panel. For details, see Enable whiteboard server-side features."
  }, {
    heading: "storage-configuration",
    content: "Under **Storage Configuration**, set the storage vendor for whiteboard snapshots and recordings:"
  }, {
    heading: "storage-configuration",
    content: "**Vendor**: The storage vendor for whiteboard snapshots and recordings."
  }, {
    heading: "storage-configuration",
    content: "**Region**: The location of the data center you specified when creating a bucket."
  }, {
    heading: "storage-configuration",
    content: "**Endpoint**: The domain name used to access the storage service, such as `s3.us-east-2.amazonaws.com`."
  }, {
    heading: "storage-configuration",
    content: "**Bucket**: The bucket name."
  }, {
    heading: "storage-configuration",
    content: "**Folder**: The folder used to store the files, such as `whiteboard`."
  }, {
    heading: "storage-configuration",
    content: "**Access Key**: The access key provided by your storage vendor, which is used to identify visitors."
  }, {
    heading: "storage-configuration",
    content: "**Secret Key**: The secret key provided by your storage vendor, which is used to authenticate signatures."
  }, {
    heading: "storage-configuration",
    content: "To ensure that Agora can access files in your storage space, enable public access or higher permissions for the space. See Considerations."
  }, {
    heading: "cloud-recording",
    content: "Under **Cloud Recording**, set **Recording Config** and **Storage Config** to **Default** or **Custom**."
  }, {
    heading: "cloud-recording",
    content: "**Recording Config**: By default, you record teacher audio and video in composite recording mode. To change the default behavior, select **Custom** and pass in a `recordingConfig` JSON object:"
  }, {
    heading: "cloud-recording",
    content: "For parameter descriptions, see recordingConfig."
  }, {
    heading: "cloud-recording",
    content: "**Storage Config**: By default, recorded files are stored in Agora's storage account. To store recordings in your own third-party cloud storage, select **Custom** and pass in a `storageConfig` JSON object. Use the following fields to specify the URL and storage location of the recording file:"
  }, {
    heading: "cloud-recording",
    content: "`endpoint`: (Required) String. The full path composed of the Bucket name and the access domain name. For example, if your Bucket name is `agora-recording` and the OSS access domain name is `oss-cn-shanghai.aliyuncs.com`, then the `endpoint` field is set to `https://agora-recording.oss-cn-shanghai.aliyuncs.com`."
  }, {
    heading: "cloud-recording",
    content: "`fileNamePrefix`: (Optional) JSONArray. An array of strings that specifies the storage location of the recording file in the third-party cloud storage. The prefix length, including slashes, cannot exceed 128 characters. The string supports 26 uppercase and lowercase English letters a-z, A-Z, and 10 numbers 0-9. Slashes, underscores, brackets, and other symbol characters are not allowed. You can use variables to specify a dynamic path. When you initiate recording, Flexible Classroom replaces variables with real values."
  }, {
    heading: "cloud-recording",
    content: "Sample `storageConfig`:"
  }, {
    heading: "cloud-recording",
    content: "To set the path dynamically, you can use these two types of variables:"
  }, {
    heading: "cloud-recording",
    content: "Type"
  }, {
    heading: "cloud-recording",
    content: "Variable"
  }, {
    heading: "cloud-recording",
    content: "Description"
  }, {
    heading: "cloud-recording",
    content: "Fixed variables"
  }, {
    heading: "cloud-recording",
    content: "`${appId}`"
  }, {
    heading: "cloud-recording",
    content: "App ID"
  }, {
    heading: "cloud-recording",
    content: "Fixed variables"
  }, {
    heading: "cloud-recording",
    content: "`${roomUuid}`"
  }, {
    heading: "cloud-recording",
    content: "The UUID of the class to be recorded"
  }, {
    heading: "cloud-recording",
    content: "Date variables"
  }, {
    heading: "cloud-recording",
    content: "`${yyyy}`"
  }, {
    heading: "cloud-recording",
    content: "Year"
  }, {
    heading: "cloud-recording",
    content: "Date variables"
  }, {
    heading: "cloud-recording",
    content: "`${MM}`"
  }, {
    heading: "cloud-recording",
    content: "Month"
  }, {
    heading: "cloud-recording",
    content: "Date variables"
  }, {
    heading: "cloud-recording",
    content: "`${dd}`"
  }, {
    heading: "cloud-recording",
    content: "Day"
  }, {
    heading: "cloud-recording",
    content: "Date variables"
  }, {
    heading: "cloud-recording",
    content: "`${yyyyMMdd}`, `${yyyyMM}`, `${yyyy-dd}`, `${MM_dd}`"
  }, {
    heading: "cloud-recording",
    content: "Date variables can be combined into different formats"
  }, {
    heading: "cloud-recording",
    content: "For example, if you set the `fileNamePrefix` field as follows:"
  }, {
    heading: "cloud-recording",
    content: "The recording storage path is similar to `/scenario/recording/[appID]/202303/[roomUUID]/filename.mp4`."
  }, {
    heading: "cloud-recording",
    content: "For complete parameter descriptions, see storageConfig."
  }, {
    heading: "chat",
    content: "Turn on **Enable Chat** to configure Chat (Huanxin IM) for Flexible Classroom, then complete the following fields:"
  }, {
    heading: "chat",
    content: "**API Host**: The REST API access address generated when enabling Chat."
  }, {
    heading: "chat",
    content: "**orgName**: The unique identifier of the enterprise generated when enabling Chat."
  }, {
    heading: "chat",
    content: "**superAdmin**: The super administrator username prefix. Only numbers and letters are supported. Agora uses `${superAdmin}-${timestamp}` as the super administrator to create a chat room."
  }, {
    heading: "chat",
    content: "**appName**: The unique name of the app generated when enabling Chat."
  }, {
    heading: "chat",
    content: "**appKey**: The unique identifier of the app generated when enabling Chat."
  }, {
    heading: "chat",
    content: "These values are generated when you enable Chat for the project. To enable Chat, in Agora Console, select **RTC Services** from the sidebar, then locate the **Chat** card and turn on its toggle."
  }, {
    heading: "aws-s3-account-configuration",
    content: "To ensure that Agora can access files in your third-party cloud storage space, you should enable public access or higher permissions for third-party storage spaces."
  }, {
    heading: "aws-s3-account-configuration",
    content: "Configure your AWS S3 account as follows:"
  }, {
    heading: "aws-s3-account-configuration",
    content: "Bucket policy"
  }, {
    heading: "aws-s3-account-configuration",
    content: "Cross-origin resource sharing"
  }, {
    heading: "service-limit",
    content: "Flexible Classroom supports a maximum of 10,000 people online at the same time. If you need to extend your limit, contact technical support."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "enable-flexible-classroom",
    content: "Enable Flexible Classroom"
  }, {
    id: "configure-flexible-classroom",
    content: "Configure Flexible Classroom"
  }, {
    id: "whiteboard",
    content: "Whiteboard"
  }, {
    id: "storage-configuration",
    content: "Storage configuration"
  }, {
    id: "cloud-recording",
    content: "Cloud recording"
  }, {
    id: "chat",
    content: "Chat"
  }, {
    id: "considerations",
    content: "Considerations"
  }, {
    id: "aws-s3-account-configuration",
    content: "AWS S3 account configuration"
  }, {
    id: "service-limit",
    content: "Service limit"
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
  url: "#enable-flexible-classroom",
  title: _jsx(_Fragment, {
    children: "Enable Flexible Classroom"
  })
}, {
  depth: 2,
  url: "#configure-flexible-classroom",
  title: _jsx(_Fragment, {
    children: "Configure Flexible Classroom"
  })
}, {
  depth: 3,
  url: "#whiteboard",
  title: _jsx(_Fragment, {
    children: "Whiteboard"
  })
}, {
  depth: 3,
  url: "#storage-configuration",
  title: _jsx(_Fragment, {
    children: "Storage configuration"
  })
}, {
  depth: 3,
  url: "#cloud-recording",
  title: _jsx(_Fragment, {
    children: "Cloud recording"
  })
}, {
  depth: 3,
  url: "#chat",
  title: _jsx(_Fragment, {
    children: "Chat"
  })
}, {
  depth: 2,
  url: "#considerations",
  title: _jsx(_Fragment, {
    children: "Considerations"
  })
}, {
  depth: 4,
  url: "#aws-s3-account-configuration",
  title: _jsx(_Fragment, {
    children: "AWS S3 account configuration"
  })
}, {
  depth: 4,
  url: "#service-limit",
  title: _jsx(_Fragment, {
    children: "Service limit"
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page introduces how to enable and configure Flexible Classroom in Agora Console."
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "In order to follow this procedure you must have:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["An Agora ", _jsx(_components.a, {
            href: "/en/introduction/account#sign-up-for-an-agora-account",
            children: "account"
          }), " and ", _jsx(_components.a, {
            href: "/en/introduction/account#your-first-agora-project",
            children: "project"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "A third-party cloud storage service for whiteboard snapshots and recordings, such as Amazon S3."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "enable-flexible-classroom",
      children: "Enable Flexible Classroom"
    }), `
`, _jsxs(_components.p, {
      children: ["To enable Flexible Classroom, in ", _jsx(_components.a, {
        href: "https://console.agora.io",
        children: "Agora Console"
      }), ", select ", _jsx(_components.strong, {
        children: "RTC Services"
      }), " from the sidebar, then locate the ", _jsx(_components.strong, {
        children: "Flexible Classroom"
      }), " card and turn on its toggle."]
    }), `
`, _jsxs(_components.p, {
      children: ["Flexible Classroom depends on the following services, listed under ", _jsx(_components.strong, {
        children: "Prerequisites"
      }), "."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "RESTful API"
        }), ": Needed to create the client keys Flexible Classroom depends on."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Whiteboard"
        }), ": Needed for App Identifier and SDK token generation."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Cloud Recording"
        }), ": Provisioned automatically when Flexible Classroom is enabled."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["Turn on the toggle to enable Flexible Classroom and all the listed services at once, or select ", _jsx(_components.strong, {
        children: "Enable"
      }), " next to each individual service to enable it manually."]
    }), `
`, _jsx(_components.h2, {
      id: "configure-flexible-classroom",
      children: "Configure Flexible Classroom"
    }), `
`, _jsxs(_components.p, {
      children: ["Select the settings icon on the ", _jsx(_components.strong, {
        children: "Flexible Classroom"
      }), " card to open its configuration panel. The panel provides the whiteboard credentials, storage, cloud recording, and Chat settings for the service. You must generate the Whiteboard SDK token before you can save your changes."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/flexible-classroom-config.png",
        alt: "Flexible Classroom whiteboard and storage settings"
      })
    }), `
`, _jsx(_components.h3, {
      id: "whiteboard",
      children: "Whiteboard"
    }), `
`, _jsxs(_components.p, {
      children: ["Under ", _jsx(_components.strong, {
        children: "Whiteboard"
      }), ", copy the project's ", _jsx(_components.strong, {
        children: "App Identifier"
      }), " and generate the ", _jsx(_components.strong, {
        children: "SDK Token"
      }), ". When you regenerate the token, copy it immediately and save it for future reference — you cannot view it again."]
    }), `
`, _jsxs(_components.p, {
      children: ["To display PPT, Word, or PDF courseware on the whiteboard, enable the whiteboard server-side features (document-to-webpage, document-to-picture, and screenshot) on the Interactive Whiteboard panel. For details, see ", _jsx(_components.a, {
        href: "/en/realtime-media/whiteboard/build/set-up-and-build-your-first-app/enable-whiteboard",
        children: "Enable whiteboard server-side features"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "storage-configuration",
      children: "Storage configuration"
    }), `
`, _jsxs(_components.p, {
      children: ["Under ", _jsx(_components.strong, {
        children: "Storage Configuration"
      }), ", set the storage vendor for whiteboard snapshots and recordings:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Vendor"
        }), ": The storage vendor for whiteboard snapshots and recordings."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Region"
        }), ": The location of the data center you specified when creating a bucket."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Endpoint"
        }), ": The domain name used to access the storage service, such as ", _jsx(_components.code, {
          children: "s3.us-east-2.amazonaws.com"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Bucket"
        }), ": The bucket name."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Folder"
        }), ": The folder used to store the files, such as ", _jsx(_components.code, {
          children: "whiteboard"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Access Key"
        }), ": The access key provided by your storage vendor, which is used to identify visitors."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Secret Key"
        }), ": The secret key provided by your storage vendor, which is used to authenticate signatures."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["To ensure that Agora can access files in your storage space, enable public access or higher permissions for the space. See ", _jsx(_components.a, {
        href: "#considerations",
        children: "Considerations"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "cloud-recording",
      children: "Cloud recording"
    }), `
`, _jsxs(_components.p, {
      children: ["Under ", _jsx(_components.strong, {
        children: "Cloud Recording"
      }), ", set ", _jsx(_components.strong, {
        children: "Recording Config"
      }), " and ", _jsx(_components.strong, {
        children: "Storage Config"
      }), " to ", _jsx(_components.strong, {
        children: "Default"
      }), " or ", _jsx(_components.strong, {
        children: "Custom"
      }), "."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Recording Config"
          }), ": By default, you record teacher audio and video in ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/build/start-a-recording/composite-mode",
            children: "composite recording mode"
          }), ". To change the default behavior, select ", _jsx(_components.strong, {
            children: "Custom"
          }), " and pass in a ", _jsx(_components.code, {
            children: "recordingConfig"
          }), " JSON object:"]
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
                  children: '    "maxIdleTime"'
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
                  children: "30"
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
                  children: '    "streamTypes"'
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
                  children: '    "channelType"'
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
                  children: "0"
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
          children: ["For parameter descriptions, see ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording",
            children: "recordingConfig"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Storage Config"
          }), ": By default, recorded files are stored in Agora's storage account. To store recordings in your own third-party cloud storage, select ", _jsx(_components.strong, {
            children: "Custom"
          }), " and pass in a ", _jsx(_components.code, {
            children: "storageConfig"
          }), " JSON object. Use the following fields to specify the URL and storage location of the recording file:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "endpoint"
            }), ": (Required) String. The full path composed of the Bucket name and the access domain name. For example, if your Bucket name is ", _jsx(_components.code, {
              children: "agora-recording"
            }), " and the OSS access domain name is ", _jsx(_components.code, {
              children: "oss-cn-shanghai.aliyuncs.com"
            }), ", then the ", _jsx(_components.code, {
              children: "endpoint"
            }), " field is set to ", _jsx(_components.code, {
              children: "https://agora-recording.oss-cn-shanghai.aliyuncs.com"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "fileNamePrefix"
            }), ": (Optional) JSONArray. An array of strings that specifies the storage location of the recording file in the third-party cloud storage. The prefix length, including slashes, cannot exceed 128 characters. The string supports 26 uppercase and lowercase English letters a-z, A-Z, and 10 numbers 0-9. Slashes, underscores, brackets, and other symbol characters are not allowed. You can use variables to specify a dynamic path. When you initiate recording, Flexible Classroom replaces variables with real values."]
          }), `
`]
        }), `
`, _jsxs(_components.p, {
          children: ["Sample ", _jsx(_components.code, {
            children: "storageConfig"
          }), ":"]
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
                  children: '      "vendor"'
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
                  children: '      "region"'
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
                  children: '      "bucket"'
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
                  children: '"xxxxx"'
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
                  children: '      "accessKey"'
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
                  children: '"xxxxxxf"'
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
                  children: '      "secretKey"'
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
                  children: '"xxxxx"'
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
                  children: '      "endpoint"'
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
                  children: '"https://agora-recording.oss-cn-shanghai.aliyuncs.com"'
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
                  children: '      "fileNamePrefix"'
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
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '         "scenario"'
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
                  children: '         "recording"'
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
                  children: "}"
                })
              })]
            })
          })
        }), `
`, _jsx(_components.p, {
          children: "To set the path dynamically, you can use these two types of variables:"
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Type"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Variable"
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
                children: "Fixed variables"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "${appId}"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "App ID"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Fixed variables"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "${roomUuid}"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "The UUID of the class to be recorded"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Date variables"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "${yyyy}"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Year"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Date variables"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "${MM}"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Month"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Date variables"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "${dd}"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Day"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Date variables"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "${yyyyMMdd}"
                }), ", ", _jsx(_components.code, {
                  children: "${yyyyMM}"
                }), ", ", _jsx(_components.code, {
                  children: "${yyyy-dd}"
                }), ", ", _jsx(_components.code, {
                  children: "${MM_dd}"
                })]
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Date variables can be combined into different formats"
              })]
            })]
          })]
        }), `
`, _jsxs(_components.p, {
          children: ["For example, if you set the ", _jsx(_components.code, {
            children: "fileNamePrefix"
          }), " field as follows:"]
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
                  children: '"fileNamePrefix"'
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
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"scenario"'
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
                  children: '"recording"'
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
                  children: '"${appId}"'
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
                  children: '"${yyyyMM}"'
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
                  children: '"${roomUuid}"'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "]"
                })
              })]
            })
          })
        }), `
`, _jsxs(_components.p, {
          children: ["The recording storage path is similar to ", _jsx(_components.code, {
            children: "/scenario/recording/[appID]/202303/[roomUUID]/filename.mp4"
          }), "."]
        }), `
`, _jsxs(_components.p, {
          children: ["For complete parameter descriptions, see ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording",
            children: "storageConfig"
          }), "."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "chat",
      children: "Chat"
    }), `
`, _jsxs(_components.p, {
      children: ["Turn on ", _jsx(_components.strong, {
        children: "Enable Chat"
      }), " to configure Chat (Huanxin IM) for Flexible Classroom, then complete the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "API Host"
        }), ": The REST API access address generated when enabling Chat."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "orgName"
        }), ": The unique identifier of the enterprise generated when enabling Chat."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "superAdmin"
        }), ": The super administrator username prefix. Only numbers and letters are supported. Agora uses ", _jsx(_components.code, {
          children: "${superAdmin}-${timestamp}"
        }), " as the super administrator to create a chat room."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "appName"
        }), ": The unique name of the app generated when enabling Chat."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "appKey"
        }), ": The unique identifier of the app generated when enabling Chat."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["These values are generated when you enable Chat for the project. To enable Chat, in ", _jsx(_components.a, {
        href: "https://console.agora.io",
        children: "Agora Console"
      }), ", select ", _jsx(_components.strong, {
        children: "RTC Services"
      }), " from the sidebar, then locate the ", _jsx(_components.strong, {
        children: "Chat"
      }), " card and turn on its toggle."]
    }), `
`, _jsx(_components.h2, {
      id: "considerations",
      children: "Considerations"
    }), `
`, _jsx(_components.h4, {
      id: "aws-s3-account-configuration",
      children: "AWS S3 account configuration"
    }), `
`, _jsx(_components.p, {
      children: "To ensure that Agora can access files in your third-party cloud storage space, you should enable public access or higher permissions for third-party storage spaces."
    }), `
`, _jsx(_components.p, {
      children: "Configure your AWS S3 account as follows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Bucket policy"
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
                  children: '   "Version"'
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
                  children: '"2012-10-17"'
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
                  children: '   "Id"'
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
                  children: '"Policy1622700880591"'
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
                  children: '   "Statement"'
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
                  children: '         "Sid"'
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
                  children: '"Stmt1622700872941"'
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
                  children: '         "Effect"'
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
                  children: '"Allow"'
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
                  children: '         "Principal"'
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
                  children: '"*"'
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
                  children: '         "Action"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ":["
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"s3:GetObject"'
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
                  children: '"s3:PutObject"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "],"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '         "Resource"'
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
                  children: '"arn:aws-cn:s3:::agora-adc-artifacts/"'
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
                  children: "   ]"
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
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/flexible-classroom/configure-aws-ss1.png",
            alt: "AWS S3 bucket policy configuration"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Cross-origin resource sharing"
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
                  children: "["
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "   {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "AllowedHeaders"'
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
                  children: '         "*"'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      ],"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "AllowedMethods"'
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
                  children: '         "PUT"'
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
                  children: '         "GET"'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      ],"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "AllowedOrigins"'
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
                  children: '         "*"'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      ],"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "ExposeHeaders"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ":["
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
                  children: "]"
                })
              })]
            })
          })
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/flexible-classroom/configure-aws-ss2.png",
            alt: "AWS S3 cross-origin resource sharing configuration"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "service-limit",
      children: "Service limit"
    }), `
`, _jsx(_components.p, {
      children: "Flexible Classroom supports a maximum of 10,000 people online at the same time. If you need to extend your limit, contact technical support."
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
