import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Core concepts",
  description: "Ideas that are central to developing with Agora Interactive Whiteboard."
};
export let _markdown = `

Agora Interactive Whiteboard enables you to record video and voice calls or streams in the cloud for storage or on-demand viewing. Interactive Whiteboard works with Voice Calling, Video Calling, Broadcast Streaming and Interactive Live Streaming.

This page introduces the key processes and concepts you need to know to use Interactive Whiteboard.

## Interactive Whiteboard concepts [#interactive-whiteboard-concepts]

The following figure shows the basic process of Interactive Whiteboard configuration and joining a whiteboard room:

![Interactive Whiteboard concepts](https://assets-docs.agora.io/images/interactive-whiteboard/whiteboard-concepts.png)

In the project configuration under **Whiteboard > Basic Information**, you can obtain the **AppIdentifier**, **Access Key** (AK), and **Secret Key** (SK), and directly generate the SDK token.

### AppIdentifier [#appidentifier]

Also known as the App ID, the \`AppIdentifier\` is the unique identifier of your project. You use the \`AppIdentifier\` when initializing the Whiteboard SDK.

### Access key and Secret key [#access-key-and-secret-key]

The access key pair (AK amd SK) is used to generate Interactive Whiteboard tokens.

### SDK token [#sdk-token]

The SDK token is a dynamic key used for authentication. For project testing, you can generate a token using the Agora Console. In a production environment, you call the server API or use sample code to generate an SDK token on your app server.

### Types of tokens [#types-of-tokens]

Interactive Whiteboard employs the following types of tokens:

#### SDK token [#sdk-token-1]

An SDK token is bound to a specific Interactive Whiteboard project and is the highest level token. Users holding an SDK token can operate all rooms and document conversion tasks under the bound project. The permissions of SDK tokens for different roles are as follows:

| Permission                                                                                                                                                                | \`admin\` | \`writer\` | \`reader\` |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-----: | :------: | :------: |
| Create a Room                                                                                                                                                             |    ✔    |     ✔    |     ✘    |
| Join a room in interactive mode                                                                                                                                           |    ✔    |     ✔    |     ✘    |
| Join the room in read-only mode                                                                                                                                           |    ✘    |     ✘    |     ✔    |
| Get room list                                                                                                                                                             |    ✔    |     ✔    |     ✘    |
| Get room information                                                                                                                                                      |    ✔    |     ✔    |     ✘    |
| Ban a Room                                                                                                                                                                |    ✔    |     ✘    |     ✘    |
| Take a screenshot of the specified scene                                                                                                                                  |    ✔    |     ✔    |     ✘    |
| Take screenshots of all scenes under the scene group                                                                                                                      |    ✔    |     ✔    |     ✘    |
| Get the scene address list of the room                                                                                                                                    |    ✔    |     ✔    |     ✘    |
| Insert a new scene                                                                                                                                                        |    ✔    |     ✔    |     ✘    |
| Scene Jump                                                                                                                                                                |    ✔    |     ✔    |     ✘    |
| Initiate a document conversion task                                                                                                                                       |    ✔    |     ✔    |     ✘    |
| Generate a Room token of an equal or lower role <br />(for example, the SDK token of the \`admin\` role can generate a Room token of the \`admin\` \`writer\` or \`reader\` role) |    ✔    |     ✔    |     ✔    |
| Generate a task token of an equal or lower role <br />(for example, the SDK Token of the \`admin\` role can generate a task token of the admin \`writer\` or \`reader\` role)   |    ✔    |     ✔    |     ✔    |

<CalloutContainer type="warning">
  <CalloutTitle>
    Note
  </CalloutTitle>

  <CalloutDescription>
    An SDK token has the highest level of permissions. If leaked, it can compromise your business security. Follow these security best practices:

    * Do not expose the SDK token to the client, store it in a database, or write it to a configuration file. Instead, retrieve the SDK token from the business server when needed.
    * Avoid issuing SDK tokens that never expire. Instead, set the validity period based on your business requirements.
  </CalloutDescription>
</CalloutContainer>

#### Room token [#room-token]

A Room token is tied to a specific room within a particular Interactive Whiteboard project. Users with a Room token can interact with the associated room. The permissions granted by Room tokens vary depending on the user's role, as follows:

| Permission                                           | \`admin\` | \`writer\` | \`reader\` |
| :--------------------------------------------------- | :-----: | :------: | :------: |
| Join a specific room in interactive mode             |    ✔    |     ✔    |     ✘    |
| Join a specific room in subscription mode            |    ✘    |     ✘    |     ✔    |
| Get specific room information                        |    ✔    |     ✔    |     ✘    |
| Block specific rooms                                 |    ✔    |     ✘    |     ✘    |
| Take a screenshot of the specified scene             |    ✔    |     ✔    |     ✘    |
| Take screenshots of all scenes under the scene group |    ✔    |     ✔    |     ✘    |
| Get a list of scene addresses for a specific room    |    ✔    |     ✔    |     ✘    |
| Insert a new scene in a specific room                |    ✔    |     ✔    |     ✘    |
| Jump to a specific room                              |    ✔    |     ✔    |     ✘    |

#### Task token [#task-token]

A Task token is linked to a specific document conversion task within a project. Users with the Task token can perform actions on the associated document conversion task. The permissions for Task tokens are based on the user's role as follows:

| Permission                                                | \`admin\` | \`writer\` | \`reader\` |
| :-------------------------------------------------------- | :-----: | :------: | :------: |
| Query the progress of a specific document conversion task |    ✔    |     ✔    |     ✔    |

### UUIDs [#uuids]

#### Room UUID [#room-uuid]

The unique identifier of an interactive whiteboard room. The room UUID is returned after a call to create a room succeeds.

#### Task UUID [#task-uuid]

The unique identifier of a document conversion task. It is returned when a call to initiate document conversion is successful.

### Interactive mode [#interactive-mode]

Users who join a whiteboard room in interactive mode have read and write permissions and can edit the whiteboard. Users holding \`admin\` or \`writer\` role Room tokens can join a room in interactive mode.

### Subscription mode [#subscription-mode]

Users who join the whiteboard room in subscription mode have read-only permissions and can only view the whiteboard content. Users holding a \`reader\` role Room token can join the room in subscription mode.

<CalloutContainer type="info">
  <CalloutTitle>
    Info
  </CalloutTitle>

  <CalloutDescription>
    Limiting the number of users in interactive mode in rooms with a large audience helps improve the stability of the whiteboard connection and increases the maximum capacity of the room.
  </CalloutDescription>
</CalloutContainer>

### Document conversion [#document-conversion]

Agora interactive whiteboard provides document conversion services, which support converting \`PPT\`, \`PPTX\`, \`DOC\`, \`DOCX\` and \`PDF\` files into static images, and converting \`PPT\` and \`PPTX\` files into dynamic \`HTML\` web pages. The converted images or web pages can be displayed as presentation materials in the interactive whiteboard. For details, see [File conversion overview](../build/display-files-and-manage-scenes/file-conversion-overview.md).

#### Static file conversion [#static-file-conversion]

Convert \`PPT\`, \`PPTX\`, \`DOC\`, \`DOCX\`, \`PDF\` files to static images in \`PNG\`, \`JPG\` or \`JPEG\` formats. The converted files do not retain the animation effects in the original files.

#### Dynamic file conversion [#dynamic-file-conversion]

Convert \`PPT\` and \`PPTX\` files edited with Microsoft Office into \`HTML\` web pages. The converted files retain the animation effects in the source files.

### Multi-window mode [#multi-window-mode]

Multi-window mode is a Interactive Whiteboard display, which supports displaying multiple windows on a whiteboard page at the same time. These windows float on the main whiteboard page, each showing different content. You can freely drag, maximize, and minimize each window.

The interactive whiteboard Fastboard SDK enables multi-window mode by default; the Whiteboard SDK \`window-manger\` can implement multi-window mode through integration.

### Small window application [#small-window-application]

In multi-window mode, the interactive whiteboard supports inserting \`PPT\` or whiteboard plug-ins in the form of creating new windows, which are collectively referred to as small window applications.

### Scene [#scene]

When you enter a whiteboard room, you see a page that extends infinitely in all directions. This page is called a scene. On a scene, you can write, draw, insert an image, and present a dynamic \`PPT\` slide. In a whiteboard room, you can add multiple scenes, switch between scenes, and move around a scene. For details, see [Scenes overview](../build/display-files-and-manage-scenes/scenes/overview.mdx).

### Agora Console [#agora-console]

To use Agora Interactive Whiteboard, create a project in the [Agora Console](https://console.agora.io/) first.

Agora Console provides an intuitive interface for developers to query and manage their Agora account. After registering an Agora account, you use the Agora Console to perform the following tasks:

* Manage your account
* Create and configure Agora projects and services
* Get an App ID and the App certificate
* Generate temporary tokens for development and testing
* Manage members and roles
* Check call quality and usage
* Check bills and make payments
* Access product resources

See [Agora account management](/en/introduction/account) for details on how to manage all aspects of your Agora account.

Agora also provides RESTful APIs that you use to implement features such as creating a project and fetching usage numbers programmatically.
For details, see [Enable Interactive Whiteboard](../build/set-up-and-build-your-first-app/enable-whiteboard.md).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora Interactive Whiteboard enables you to record video and voice calls or streams in the cloud for storage or on-demand viewing. Interactive Whiteboard works with Voice Calling, Video Calling, Broadcast Streaming and Interactive Live Streaming."
  }, {
    heading: undefined,
    content: "This page introduces the key processes and concepts you need to know to use Interactive Whiteboard."
  }, {
    heading: "interactive-whiteboard-concepts",
    content: "The following figure shows the basic process of Interactive Whiteboard configuration and joining a whiteboard room:"
  }, {
    heading: "interactive-whiteboard-concepts",
    content: "In the project configuration under **Whiteboard > Basic Information**, you can obtain the **AppIdentifier**, **Access Key** (AK), and **Secret Key** (SK), and directly generate the SDK token."
  }, {
    heading: "appidentifier",
    content: "Also known as the App ID, the `AppIdentifier` is the unique identifier of your project. You use the `AppIdentifier` when initializing the Whiteboard SDK."
  }, {
    heading: "access-key-and-secret-key",
    content: "The access key pair (AK amd SK) is used to generate Interactive Whiteboard tokens."
  }, {
    heading: "sdk-token",
    content: "The SDK token is a dynamic key used for authentication. For project testing, you can generate a token using the Agora Console. In a production environment, you call the server API or use sample code to generate an SDK token on your app server."
  }, {
    heading: "types-of-tokens",
    content: "Interactive Whiteboard employs the following types of tokens:"
  }, {
    heading: "sdk-token-1",
    content: "An SDK token is bound to a specific Interactive Whiteboard project and is the highest level token. Users holding an SDK token can operate all rooms and document conversion tasks under the bound project. The permissions of SDK tokens for different roles are as follows:"
  }, {
    heading: "sdk-token-1",
    content: "Permission"
  }, {
    heading: "sdk-token-1",
    content: "`admin`"
  }, {
    heading: "sdk-token-1",
    content: "`writer`"
  }, {
    heading: "sdk-token-1",
    content: "`reader`"
  }, {
    heading: "sdk-token-1",
    content: "Create a Room"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✘"
  }, {
    heading: "sdk-token-1",
    content: "Join a room in interactive mode"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✘"
  }, {
    heading: "sdk-token-1",
    content: "Join the room in read-only mode"
  }, {
    heading: "sdk-token-1",
    content: "✘"
  }, {
    heading: "sdk-token-1",
    content: "✘"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "Get room list"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✘"
  }, {
    heading: "sdk-token-1",
    content: "Get room information"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✘"
  }, {
    heading: "sdk-token-1",
    content: "Ban a Room"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✘"
  }, {
    heading: "sdk-token-1",
    content: "✘"
  }, {
    heading: "sdk-token-1",
    content: "Take a screenshot of the specified scene"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✘"
  }, {
    heading: "sdk-token-1",
    content: "Take screenshots of all scenes under the scene group"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✘"
  }, {
    heading: "sdk-token-1",
    content: "Get the scene address list of the room"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✘"
  }, {
    heading: "sdk-token-1",
    content: "Insert a new scene"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✘"
  }, {
    heading: "sdk-token-1",
    content: "Scene Jump"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✘"
  }, {
    heading: "sdk-token-1",
    content: "Initiate a document conversion task"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✘"
  }, {
    heading: "sdk-token-1",
    content: "Generate a Room token of an equal or lower role (for example, the SDK token of the `admin` role can generate a Room token of the `admin` `writer` or `reader` role)"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "Generate a task token of an equal or lower role (for example, the SDK Token of the `admin` role can generate a task token of the admin `writer` or `reader` role)"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "✔"
  }, {
    heading: "sdk-token-1",
    content: "An SDK token has the highest level of permissions. If leaked, it can compromise your business security. Follow these security best practices:"
  }, {
    heading: "sdk-token-1",
    content: "Do not expose the SDK token to the client, store it in a database, or write it to a configuration file. Instead, retrieve the SDK token from the business server when needed."
  }, {
    heading: "sdk-token-1",
    content: "Avoid issuing SDK tokens that never expire. Instead, set the validity period based on your business requirements."
  }, {
    heading: "room-token",
    content: "A Room token is tied to a specific room within a particular Interactive Whiteboard project. Users with a Room token can interact with the associated room. The permissions granted by Room tokens vary depending on the user's role, as follows:"
  }, {
    heading: "room-token",
    content: "Permission"
  }, {
    heading: "room-token",
    content: "`admin`"
  }, {
    heading: "room-token",
    content: "`writer`"
  }, {
    heading: "room-token",
    content: "`reader`"
  }, {
    heading: "room-token",
    content: "Join a specific room in interactive mode"
  }, {
    heading: "room-token",
    content: "✔"
  }, {
    heading: "room-token",
    content: "✔"
  }, {
    heading: "room-token",
    content: "✘"
  }, {
    heading: "room-token",
    content: "Join a specific room in subscription mode"
  }, {
    heading: "room-token",
    content: "✘"
  }, {
    heading: "room-token",
    content: "✘"
  }, {
    heading: "room-token",
    content: "✔"
  }, {
    heading: "room-token",
    content: "Get specific room information"
  }, {
    heading: "room-token",
    content: "✔"
  }, {
    heading: "room-token",
    content: "✔"
  }, {
    heading: "room-token",
    content: "✘"
  }, {
    heading: "room-token",
    content: "Block specific rooms"
  }, {
    heading: "room-token",
    content: "✔"
  }, {
    heading: "room-token",
    content: "✘"
  }, {
    heading: "room-token",
    content: "✘"
  }, {
    heading: "room-token",
    content: "Take a screenshot of the specified scene"
  }, {
    heading: "room-token",
    content: "✔"
  }, {
    heading: "room-token",
    content: "✔"
  }, {
    heading: "room-token",
    content: "✘"
  }, {
    heading: "room-token",
    content: "Take screenshots of all scenes under the scene group"
  }, {
    heading: "room-token",
    content: "✔"
  }, {
    heading: "room-token",
    content: "✔"
  }, {
    heading: "room-token",
    content: "✘"
  }, {
    heading: "room-token",
    content: "Get a list of scene addresses for a specific room"
  }, {
    heading: "room-token",
    content: "✔"
  }, {
    heading: "room-token",
    content: "✔"
  }, {
    heading: "room-token",
    content: "✘"
  }, {
    heading: "room-token",
    content: "Insert a new scene in a specific room"
  }, {
    heading: "room-token",
    content: "✔"
  }, {
    heading: "room-token",
    content: "✔"
  }, {
    heading: "room-token",
    content: "✘"
  }, {
    heading: "room-token",
    content: "Jump to a specific room"
  }, {
    heading: "room-token",
    content: "✔"
  }, {
    heading: "room-token",
    content: "✔"
  }, {
    heading: "room-token",
    content: "✘"
  }, {
    heading: "task-token",
    content: "A Task token is linked to a specific document conversion task within a project. Users with the Task token can perform actions on the associated document conversion task. The permissions for Task tokens are based on the user's role as follows:"
  }, {
    heading: "task-token",
    content: "Permission"
  }, {
    heading: "task-token",
    content: "`admin`"
  }, {
    heading: "task-token",
    content: "`writer`"
  }, {
    heading: "task-token",
    content: "`reader`"
  }, {
    heading: "task-token",
    content: "Query the progress of a specific document conversion task"
  }, {
    heading: "task-token",
    content: "✔"
  }, {
    heading: "task-token",
    content: "✔"
  }, {
    heading: "task-token",
    content: "✔"
  }, {
    heading: "room-uuid",
    content: "The unique identifier of an interactive whiteboard room. The room UUID is returned after a call to create a room succeeds."
  }, {
    heading: "task-uuid",
    content: "The unique identifier of a document conversion task. It is returned when a call to initiate document conversion is successful."
  }, {
    heading: "interactive-mode",
    content: "Users who join a whiteboard room in interactive mode have read and write permissions and can edit the whiteboard. Users holding `admin` or `writer` role Room tokens can join a room in interactive mode."
  }, {
    heading: "subscription-mode",
    content: "Users who join the whiteboard room in subscription mode have read-only permissions and can only view the whiteboard content. Users holding a `reader` role Room token can join the room in subscription mode."
  }, {
    heading: "subscription-mode",
    content: "Limiting the number of users in interactive mode in rooms with a large audience helps improve the stability of the whiteboard connection and increases the maximum capacity of the room."
  }, {
    heading: "document-conversion",
    content: "Agora interactive whiteboard provides document conversion services, which support converting `PPT`, `PPTX`, `DOC`, `DOCX` and `PDF` files into static images, and converting `PPT` and `PPTX` files into dynamic `HTML` web pages. The converted images or web pages can be displayed as presentation materials in the interactive whiteboard. For details, see File conversion overview."
  }, {
    heading: "static-file-conversion",
    content: "Convert `PPT`, `PPTX`, `DOC`, `DOCX`, `PDF` files to static images in `PNG`, `JPG` or `JPEG` formats. The converted files do not retain the animation effects in the original files."
  }, {
    heading: "dynamic-file-conversion",
    content: "Convert `PPT` and `PPTX` files edited with Microsoft Office into `HTML` web pages. The converted files retain the animation effects in the source files."
  }, {
    heading: "multi-window-mode",
    content: "Multi-window mode is a Interactive Whiteboard display, which supports displaying multiple windows on a whiteboard page at the same time. These windows float on the main whiteboard page, each showing different content. You can freely drag, maximize, and minimize each window."
  }, {
    heading: "multi-window-mode",
    content: "The interactive whiteboard Fastboard SDK enables multi-window mode by default; the Whiteboard SDK `window-manger` can implement multi-window mode through integration."
  }, {
    heading: "small-window-application",
    content: "In multi-window mode, the interactive whiteboard supports inserting `PPT` or whiteboard plug-ins in the form of creating new windows, which are collectively referred to as small window applications."
  }, {
    heading: "scene",
    content: "When you enter a whiteboard room, you see a page that extends infinitely in all directions. This page is called a scene. On a scene, you can write, draw, insert an image, and present a dynamic `PPT` slide. In a whiteboard room, you can add multiple scenes, switch between scenes, and move around a scene. For details, see Scenes overview."
  }, {
    heading: "agora-console",
    content: "To use Agora Interactive Whiteboard, create a project in the Agora Console first."
  }, {
    heading: "agora-console",
    content: "Agora Console provides an intuitive interface for developers to query and manage their Agora account. After registering an Agora account, you use the Agora Console to perform the following tasks:"
  }, {
    heading: "agora-console",
    content: "Manage your account"
  }, {
    heading: "agora-console",
    content: "Create and configure Agora projects and services"
  }, {
    heading: "agora-console",
    content: "Get an App ID and the App certificate"
  }, {
    heading: "agora-console",
    content: "Generate temporary tokens for development and testing"
  }, {
    heading: "agora-console",
    content: "Manage members and roles"
  }, {
    heading: "agora-console",
    content: "Check call quality and usage"
  }, {
    heading: "agora-console",
    content: "Check bills and make payments"
  }, {
    heading: "agora-console",
    content: "Access product resources"
  }, {
    heading: "agora-console",
    content: "See Agora account management for details on how to manage all aspects of your Agora account."
  }, {
    heading: "agora-console",
    content: `Agora also provides RESTful APIs that you use to implement features such as creating a project and fetching usage numbers programmatically.
For details, see Enable Interactive Whiteboard.`
  }],
  headings: [{
    id: "interactive-whiteboard-concepts",
    content: "Interactive Whiteboard concepts"
  }, {
    id: "appidentifier",
    content: "AppIdentifier"
  }, {
    id: "access-key-and-secret-key",
    content: "Access key and Secret key"
  }, {
    id: "sdk-token",
    content: "SDK token"
  }, {
    id: "types-of-tokens",
    content: "Types of tokens"
  }, {
    id: "sdk-token-1",
    content: "SDK token"
  }, {
    id: "room-token",
    content: "Room token"
  }, {
    id: "task-token",
    content: "Task token"
  }, {
    id: "uuids",
    content: "UUIDs"
  }, {
    id: "room-uuid",
    content: "Room UUID"
  }, {
    id: "task-uuid",
    content: "Task UUID"
  }, {
    id: "interactive-mode",
    content: "Interactive mode"
  }, {
    id: "subscription-mode",
    content: "Subscription mode"
  }, {
    id: "document-conversion",
    content: "Document conversion"
  }, {
    id: "static-file-conversion",
    content: "Static file conversion"
  }, {
    id: "dynamic-file-conversion",
    content: "Dynamic file conversion"
  }, {
    id: "multi-window-mode",
    content: "Multi-window mode"
  }, {
    id: "small-window-application",
    content: "Small window application"
  }, {
    id: "scene",
    content: "Scene"
  }, {
    id: "agora-console",
    content: "Agora Console"
  }]
};
export let toc = [{
  depth: 2,
  url: "#interactive-whiteboard-concepts",
  title: _jsx(_Fragment, {
    children: "Interactive Whiteboard concepts"
  })
}, {
  depth: 3,
  url: "#appidentifier",
  title: _jsx(_Fragment, {
    children: "AppIdentifier"
  })
}, {
  depth: 3,
  url: "#access-key-and-secret-key",
  title: _jsx(_Fragment, {
    children: "Access key and Secret key"
  })
}, {
  depth: 3,
  url: "#sdk-token",
  title: _jsx(_Fragment, {
    children: "SDK token"
  })
}, {
  depth: 3,
  url: "#types-of-tokens",
  title: _jsx(_Fragment, {
    children: "Types of tokens"
  })
}, {
  depth: 4,
  url: "#sdk-token-1",
  title: _jsx(_Fragment, {
    children: "SDK token"
  })
}, {
  depth: 4,
  url: "#room-token",
  title: _jsx(_Fragment, {
    children: "Room token"
  })
}, {
  depth: 4,
  url: "#task-token",
  title: _jsx(_Fragment, {
    children: "Task token"
  })
}, {
  depth: 3,
  url: "#uuids",
  title: _jsx(_Fragment, {
    children: "UUIDs"
  })
}, {
  depth: 4,
  url: "#room-uuid",
  title: _jsx(_Fragment, {
    children: "Room UUID"
  })
}, {
  depth: 4,
  url: "#task-uuid",
  title: _jsx(_Fragment, {
    children: "Task UUID"
  })
}, {
  depth: 3,
  url: "#interactive-mode",
  title: _jsx(_Fragment, {
    children: "Interactive mode"
  })
}, {
  depth: 3,
  url: "#subscription-mode",
  title: _jsx(_Fragment, {
    children: "Subscription mode"
  })
}, {
  depth: 3,
  url: "#document-conversion",
  title: _jsx(_Fragment, {
    children: "Document conversion"
  })
}, {
  depth: 4,
  url: "#static-file-conversion",
  title: _jsx(_Fragment, {
    children: "Static file conversion"
  })
}, {
  depth: 4,
  url: "#dynamic-file-conversion",
  title: _jsx(_Fragment, {
    children: "Dynamic file conversion"
  })
}, {
  depth: 3,
  url: "#multi-window-mode",
  title: _jsx(_Fragment, {
    children: "Multi-window mode"
  })
}, {
  depth: 3,
  url: "#small-window-application",
  title: _jsx(_Fragment, {
    children: "Small window application"
  })
}, {
  depth: 3,
  url: "#scene",
  title: _jsx(_Fragment, {
    children: "Scene"
  })
}, {
  depth: 3,
  url: "#agora-console",
  title: _jsx(_Fragment, {
    children: "Agora Console"
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
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Agora Interactive Whiteboard enables you to record video and voice calls or streams in the cloud for storage or on-demand viewing. Interactive Whiteboard works with Voice Calling, Video Calling, Broadcast Streaming and Interactive Live Streaming."
    }), `
`, _jsx(_components.p, {
      children: "This page introduces the key processes and concepts you need to know to use Interactive Whiteboard."
    }), `
`, _jsx(_components.h2, {
      id: "interactive-whiteboard-concepts",
      children: "Interactive Whiteboard concepts"
    }), `
`, _jsx(_components.p, {
      children: "The following figure shows the basic process of Interactive Whiteboard configuration and joining a whiteboard room:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/interactive-whiteboard/whiteboard-concepts.png",
        alt: "Interactive Whiteboard concepts"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["In the project configuration under ", _jsx(_components.strong, {
        children: "Whiteboard > Basic Information"
      }), ", you can obtain the ", _jsx(_components.strong, {
        children: "AppIdentifier"
      }), ", ", _jsx(_components.strong, {
        children: "Access Key"
      }), " (AK), and ", _jsx(_components.strong, {
        children: "Secret Key"
      }), " (SK), and directly generate the SDK token."]
    }), `
`, _jsx(_components.h3, {
      id: "appidentifier",
      children: "AppIdentifier"
    }), `
`, _jsxs(_components.p, {
      children: ["Also known as the App ID, the ", _jsx(_components.code, {
        children: "AppIdentifier"
      }), " is the unique identifier of your project. You use the ", _jsx(_components.code, {
        children: "AppIdentifier"
      }), " when initializing the Whiteboard SDK."]
    }), `
`, _jsx(_components.h3, {
      id: "access-key-and-secret-key",
      children: "Access key and Secret key"
    }), `
`, _jsx(_components.p, {
      children: "The access key pair (AK amd SK) is used to generate Interactive Whiteboard tokens."
    }), `
`, _jsx(_components.h3, {
      id: "sdk-token",
      children: "SDK token"
    }), `
`, _jsx(_components.p, {
      children: "The SDK token is a dynamic key used for authentication. For project testing, you can generate a token using the Agora Console. In a production environment, you call the server API or use sample code to generate an SDK token on your app server."
    }), `
`, _jsx(_components.h3, {
      id: "types-of-tokens",
      children: "Types of tokens"
    }), `
`, _jsx(_components.p, {
      children: "Interactive Whiteboard employs the following types of tokens:"
    }), `
`, _jsx(_components.h4, {
      id: "sdk-token-1",
      children: "SDK token"
    }), `
`, _jsx(_components.p, {
      children: "An SDK token is bound to a specific Interactive Whiteboard project and is the highest level token. Users holding an SDK token can operate all rooms and document conversion tasks under the bound project. The permissions of SDK tokens for different roles are as follows:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Permission"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "admin"
            })
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "writer"
            })
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "reader"
            })
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Create a Room"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Join a room in interactive mode"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Join the room in read-only mode"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get room list"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get room information"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Ban a Room"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Take a screenshot of the specified scene"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Take screenshots of all scenes under the scene group"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get the scene address list of the room"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Insert a new scene"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Scene Jump"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Initiate a document conversion task"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Generate a Room token of an equal or lower role ", _jsx("br", {}), "(for example, the SDK token of the ", _jsx(_components.code, {
              children: "admin"
            }), " role can generate a Room token of the ", _jsx(_components.code, {
              children: "admin"
            }), " ", _jsx(_components.code, {
              children: "writer"
            }), " or ", _jsx(_components.code, {
              children: "reader"
            }), " role)"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Generate a task token of an equal or lower role ", _jsx("br", {}), "(for example, the SDK Token of the ", _jsx(_components.code, {
              children: "admin"
            }), " role can generate a task token of the admin ", _jsx(_components.code, {
              children: "writer"
            }), " or ", _jsx(_components.code, {
              children: "reader"
            }), " role)"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          })]
        })]
      })]
    }), `
`, _jsxs(CalloutContainer, {
      type: "warning",
      children: [_jsx(CalloutTitle, {
        children: "Note"
      }), _jsxs(CalloutDescription, {
        children: [_jsx(_components.p, {
          children: "An SDK token has the highest level of permissions. If leaked, it can compromise your business security. Follow these security best practices:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Do not expose the SDK token to the client, store it in a database, or write it to a configuration file. Instead, retrieve the SDK token from the business server when needed."
          }), `
`, _jsx(_components.li, {
            children: "Avoid issuing SDK tokens that never expire. Instead, set the validity period based on your business requirements."
          }), `
`]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "room-token",
      children: "Room token"
    }), `
`, _jsx(_components.p, {
      children: "A Room token is tied to a specific room within a particular Interactive Whiteboard project. Users with a Room token can interact with the associated room. The permissions granted by Room tokens vary depending on the user's role, as follows:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Permission"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "admin"
            })
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "writer"
            })
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "reader"
            })
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Join a specific room in interactive mode"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Join a specific room in subscription mode"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get specific room information"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Block specific rooms"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Take a screenshot of the specified scene"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Take screenshots of all scenes under the scene group"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get a list of scene addresses for a specific room"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Insert a new scene in a specific room"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Jump to a specific room"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "task-token",
      children: "Task token"
    }), `
`, _jsx(_components.p, {
      children: "A Task token is linked to a specific document conversion task within a project. Users with the Task token can perform actions on the associated document conversion task. The permissions for Task tokens are based on the user's role as follows:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Permission"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "admin"
            })
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "writer"
            })
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.code, {
              children: "reader"
            })
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Query the progress of a specific document conversion task"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "uuids",
      children: "UUIDs"
    }), `
`, _jsx(_components.h4, {
      id: "room-uuid",
      children: "Room UUID"
    }), `
`, _jsx(_components.p, {
      children: "The unique identifier of an interactive whiteboard room. The room UUID is returned after a call to create a room succeeds."
    }), `
`, _jsx(_components.h4, {
      id: "task-uuid",
      children: "Task UUID"
    }), `
`, _jsx(_components.p, {
      children: "The unique identifier of a document conversion task. It is returned when a call to initiate document conversion is successful."
    }), `
`, _jsx(_components.h3, {
      id: "interactive-mode",
      children: "Interactive mode"
    }), `
`, _jsxs(_components.p, {
      children: ["Users who join a whiteboard room in interactive mode have read and write permissions and can edit the whiteboard. Users holding ", _jsx(_components.code, {
        children: "admin"
      }), " or ", _jsx(_components.code, {
        children: "writer"
      }), " role Room tokens can join a room in interactive mode."]
    }), `
`, _jsx(_components.h3, {
      id: "subscription-mode",
      children: "Subscription mode"
    }), `
`, _jsxs(_components.p, {
      children: ["Users who join the whiteboard room in subscription mode have read-only permissions and can only view the whiteboard content. Users holding a ", _jsx(_components.code, {
        children: "reader"
      }), " role Room token can join the room in subscription mode."]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Info"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Limiting the number of users in interactive mode in rooms with a large audience helps improve the stability of the whiteboard connection and increases the maximum capacity of the room."
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "document-conversion",
      children: "Document conversion"
    }), `
`, _jsxs(_components.p, {
      children: ["Agora interactive whiteboard provides document conversion services, which support converting ", _jsx(_components.code, {
        children: "PPT"
      }), ", ", _jsx(_components.code, {
        children: "PPTX"
      }), ", ", _jsx(_components.code, {
        children: "DOC"
      }), ", ", _jsx(_components.code, {
        children: "DOCX"
      }), " and ", _jsx(_components.code, {
        children: "PDF"
      }), " files into static images, and converting ", _jsx(_components.code, {
        children: "PPT"
      }), " and ", _jsx(_components.code, {
        children: "PPTX"
      }), " files into dynamic ", _jsx(_components.code, {
        children: "HTML"
      }), " web pages. The converted images or web pages can be displayed as presentation materials in the interactive whiteboard. For details, see ", _jsx(_components.a, {
        href: "../build/display-files-and-manage-scenes/file-conversion-overview.md",
        children: "File conversion overview"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "static-file-conversion",
      children: "Static file conversion"
    }), `
`, _jsxs(_components.p, {
      children: ["Convert ", _jsx(_components.code, {
        children: "PPT"
      }), ", ", _jsx(_components.code, {
        children: "PPTX"
      }), ", ", _jsx(_components.code, {
        children: "DOC"
      }), ", ", _jsx(_components.code, {
        children: "DOCX"
      }), ", ", _jsx(_components.code, {
        children: "PDF"
      }), " files to static images in ", _jsx(_components.code, {
        children: "PNG"
      }), ", ", _jsx(_components.code, {
        children: "JPG"
      }), " or ", _jsx(_components.code, {
        children: "JPEG"
      }), " formats. The converted files do not retain the animation effects in the original files."]
    }), `
`, _jsx(_components.h4, {
      id: "dynamic-file-conversion",
      children: "Dynamic file conversion"
    }), `
`, _jsxs(_components.p, {
      children: ["Convert ", _jsx(_components.code, {
        children: "PPT"
      }), " and ", _jsx(_components.code, {
        children: "PPTX"
      }), " files edited with Microsoft Office into ", _jsx(_components.code, {
        children: "HTML"
      }), " web pages. The converted files retain the animation effects in the source files."]
    }), `
`, _jsx(_components.h3, {
      id: "multi-window-mode",
      children: "Multi-window mode"
    }), `
`, _jsx(_components.p, {
      children: "Multi-window mode is a Interactive Whiteboard display, which supports displaying multiple windows on a whiteboard page at the same time. These windows float on the main whiteboard page, each showing different content. You can freely drag, maximize, and minimize each window."
    }), `
`, _jsxs(_components.p, {
      children: ["The interactive whiteboard Fastboard SDK enables multi-window mode by default; the Whiteboard SDK ", _jsx(_components.code, {
        children: "window-manger"
      }), " can implement multi-window mode through integration."]
    }), `
`, _jsx(_components.h3, {
      id: "small-window-application",
      children: "Small window application"
    }), `
`, _jsxs(_components.p, {
      children: ["In multi-window mode, the interactive whiteboard supports inserting ", _jsx(_components.code, {
        children: "PPT"
      }), " or whiteboard plug-ins in the form of creating new windows, which are collectively referred to as small window applications."]
    }), `
`, _jsx(_components.h3, {
      id: "scene",
      children: "Scene"
    }), `
`, _jsxs(_components.p, {
      children: ["When you enter a whiteboard room, you see a page that extends infinitely in all directions. This page is called a scene. On a scene, you can write, draw, insert an image, and present a dynamic ", _jsx(_components.code, {
        children: "PPT"
      }), " slide. In a whiteboard room, you can add multiple scenes, switch between scenes, and move around a scene. For details, see ", _jsx(_components.a, {
        href: "../build/display-files-and-manage-scenes/scenes/overview.mdx",
        children: "Scenes overview"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "agora-console",
      children: "Agora Console"
    }), `
`, _jsxs(_components.p, {
      children: ["To use Agora Interactive Whiteboard, create a project in the ", _jsx(_components.a, {
        href: "https://console.agora.io/",
        children: "Agora Console"
      }), " first."]
    }), `
`, _jsx(_components.p, {
      children: "Agora Console provides an intuitive interface for developers to query and manage their Agora account. After registering an Agora account, you use the Agora Console to perform the following tasks:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Manage your account"
      }), `
`, _jsx(_components.li, {
        children: "Create and configure Agora projects and services"
      }), `
`, _jsx(_components.li, {
        children: "Get an App ID and the App certificate"
      }), `
`, _jsx(_components.li, {
        children: "Generate temporary tokens for development and testing"
      }), `
`, _jsx(_components.li, {
        children: "Manage members and roles"
      }), `
`, _jsx(_components.li, {
        children: "Check call quality and usage"
      }), `
`, _jsx(_components.li, {
        children: "Check bills and make payments"
      }), `
`, _jsx(_components.li, {
        children: "Access product resources"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["See ", _jsx(_components.a, {
        href: "/en/introduction/account",
        children: "Agora account management"
      }), " for details on how to manage all aspects of your Agora account."]
    }), `
`, _jsxs(_components.p, {
      children: [`Agora also provides RESTful APIs that you use to implement features such as creating a project and fetching usage numbers programmatically.
For details, see `, _jsx(_components.a, {
        href: "../build/set-up-and-build-your-first-app/enable-whiteboard.md",
        children: "Enable Interactive Whiteboard"
      }), "."]
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
