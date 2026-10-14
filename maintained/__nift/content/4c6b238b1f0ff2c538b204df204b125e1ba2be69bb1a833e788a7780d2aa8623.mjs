import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Magic Leap",
  description: "Integrate RTC SDK for Unity into your Magic Leap app."
};
export let _markdown = `

Agora RTC SDK for Magic Leap allows you to integrate real-time Video Calling features into your [Magic Leap](https://www.magicleap.com/) app. You can enhance the overall user experience and add new possibilities for collaboration and interaction within Magic Leap environments.

This page shows the minimum code you need to integrate high-quality, low-latency Video Calling features into your Magic Leap project using RTC SDK.

## Understand the tech [#understand-the-tech]

This section explains how you can integrate Video Calling features into your Magic Leap project using RTC SDK.

To start a session, implement the following steps in your app:

* **Retrieve a token**: A token is a computer-generated string that authenticates a user when your app joins a channel. In a test or production environment, your app retrieves tokens from a server in your security infrastructure.
* **Join a channel**: Call methods to create and join a channel. Apps that pass the same channel name join the same channel.
* **Send and receive video and audio**: All users in the channel can send and receive real-time audio and video streams.

## Prerequisites [#prerequisites]

To test the code used on this page, you need:

* An Agora [account](/en/introduction/account) and [project](/en/introduction/account)
* A computer with Internet access
* A network environment where no firewall blocks required communication
* The [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) implemented in your project
* [ML Hub](https://developer-docs.magicleap.cloud/docs/guides/getting-started/install-the-tools)
* [Unity Hub](https://unity.com/download)
* [Install and configure the Unity Editor required to develop for Magic Leap 2](https://developer-docs.magicleap.cloud/docs/guides/unity/getting-started/install-the-tools)

## Project setup [#project-setup]

To integrate Video Calling into your Magic Leap project, do the following:

1. **Create a Magic Leap project for Unity**

* [Create a project](https://developer-docs.magicleap.cloud/docs/guides/unity/getting-started/create-a-project) for your Agora Magic Leap app
* [Configure your app settings](https://developer-docs.magicleap.cloud/docs/guides/unity/getting-started/configure-unity-settings)

2. **Configure your project**

In Unity Editor:

1. Click **Edit** > **Project settings**.
2. In **XR Plug-in Management**, enable **Magic Leap**.
3. In **XR Plug-in Management** > **Magic Leap Settings**, enable **Use ML Audio**.
4. In **Player settings** > **Android** > **Publishing settings**, enable **Custom Main Manifest**.
5. In **Magic Leap** > **Permissions**, enable \`android.permission.CAMERA\` and \`android.permission.RECORD_AUDIO\`.

You are now ready to add Video Calling features to your Magic Leap project.

## Integrate the Video Calling demo [#integrate-the-video-calling-demo]

When a user opens the app, you initialize the Agora Engine. When the user taps a button, the app joins or leaves a channel. When another user joins the same channel, their video and audio are rendered in the app. This simple workflow lets you focus on implementing Agora features instead of surrounding UI complexity.

This section shows how to integrate the RTC SDK to implement the Video Calling demo in your Magic Leap project:

1. [Download](/sdks) the latest version of RTC SDK for Magic Leap to a local folder.
2. Double-click the downloaded package.

The Import dialog opens automatically in Unity Editor.

3. Click **Import**.

In **Project** > **Assets**, you see \`Agora-RTC-Plugin\` and \`Agora_MagicLeap2_Plugin\`.

## Test your implementation [#test-your-implementation]

Agora recommends that you run this project on a physical device, because some simulators may not support the full feature set.

To verify the integration:

1. Obtain an App ID with token enabled.
2. [Generate a temporary token](/en/introduction/account#generate-temporary-tokens) in Agora Console.
3. In your browser, open the [Agora web demo](https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html) and update \`App ID\`, \`Channel\`, and \`Token\` with the same values used for this project, then click **Join**.
4. In Unity Editor, double-click **Agora\\_MagicLeap2\\_Plugin** > **AgoraEngine** > **ML2Support** > **Demo**.
5. In **Project**, open **Agora\\_MagicLeap2\\_Plugin** > **AgoraEngine** > **ML2Support** > **Scripts** > **Agora Controller**.
6. Update \`APP_ID\`, \`TOKEN\`, and \`CHANNEL_NAME\` with the same values you used for the web demo.
7. Connect an ML2 device, then click **Build and Run**.
8. Click **Connect Camera**.

Video from your ML2 is streamed to the channel and is visible in the web demo. You also see the remote video stream from the web demo.

## Reference [#reference]

* [Manual install](/sdks) shows how to install RTC SDK manually
* To ensure communication security in test or production environments, best practice is to use a token server. See [Use tokens](../build/authenticate-users/authentication-workflow.mdx)

### API reference [#api-reference]

* [JoinChannel](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_joinchannel)
* [EnableVideo](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_enablevideo)
* [CreateAgoraRtcEngine](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_createagorartcengine)
* [InitEventHandler](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_addhandler)
* [LeaveChannel](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_leavechannel)
* [DisableVideo](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_disablevideo)
* [PushVideoFrame](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_imediaengine_pushvideoframe)
* [PushAudioFrame](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_imediaengine_pushaudioframe0)
* [PullAudioFrame](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_imediaengine_pullaudioframe)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora RTC SDK for Magic Leap allows you to integrate real-time Video Calling features into your Magic Leap app. You can enhance the overall user experience and add new possibilities for collaboration and interaction within Magic Leap environments."
  }, {
    heading: undefined,
    content: "This page shows the minimum code you need to integrate high-quality, low-latency Video Calling features into your Magic Leap project using RTC SDK."
  }, {
    heading: "understand-the-tech",
    content: "This section explains how you can integrate Video Calling features into your Magic Leap project using RTC SDK."
  }, {
    heading: "understand-the-tech",
    content: "To start a session, implement the following steps in your app:"
  }, {
    heading: "understand-the-tech",
    content: "**Retrieve a token**: A token is a computer-generated string that authenticates a user when your app joins a channel. In a test or production environment, your app retrieves tokens from a server in your security infrastructure."
  }, {
    heading: "understand-the-tech",
    content: "**Join a channel**: Call methods to create and join a channel. Apps that pass the same channel name join the same channel."
  }, {
    heading: "understand-the-tech",
    content: "**Send and receive video and audio**: All users in the channel can send and receive real-time audio and video streams."
  }, {
    heading: "prerequisites",
    content: "To test the code used on this page, you need:"
  }, {
    heading: "prerequisites",
    content: "An Agora account and project"
  }, {
    heading: "prerequisites",
    content: "A computer with Internet access"
  }, {
    heading: "prerequisites",
    content: "A network environment where no firewall blocks required communication"
  }, {
    heading: "prerequisites",
    content: "The SDK quickstart implemented in your project"
  }, {
    heading: "prerequisites",
    content: "ML Hub"
  }, {
    heading: "prerequisites",
    content: "Unity Hub"
  }, {
    heading: "prerequisites",
    content: "Install and configure the Unity Editor required to develop for Magic Leap 2"
  }, {
    heading: "project-setup",
    content: "To integrate Video Calling into your Magic Leap project, do the following:"
  }, {
    heading: "project-setup",
    content: "**Create a Magic Leap project for Unity**"
  }, {
    heading: "project-setup",
    content: "Create a project for your Agora Magic Leap app"
  }, {
    heading: "project-setup",
    content: "Configure your app settings"
  }, {
    heading: "project-setup",
    content: "**Configure your project**"
  }, {
    heading: "project-setup",
    content: "In Unity Editor:"
  }, {
    heading: "project-setup",
    content: "Click **Edit** > **Project settings**."
  }, {
    heading: "project-setup",
    content: "In **XR Plug-in Management**, enable **Magic Leap**."
  }, {
    heading: "project-setup",
    content: "In **XR Plug-in Management** > **Magic Leap Settings**, enable **Use ML Audio**."
  }, {
    heading: "project-setup",
    content: "In **Player settings** > **Android** > **Publishing settings**, enable **Custom Main Manifest**."
  }, {
    heading: "project-setup",
    content: "In **Magic Leap** > **Permissions**, enable `android.permission.CAMERA` and `android.permission.RECORD_AUDIO`."
  }, {
    heading: "project-setup",
    content: "You are now ready to add Video Calling features to your Magic Leap project."
  }, {
    heading: "integrate-the-video-calling-demo",
    content: "When a user opens the app, you initialize the Agora Engine. When the user taps a button, the app joins or leaves a channel. When another user joins the same channel, their video and audio are rendered in the app. This simple workflow lets you focus on implementing Agora features instead of surrounding UI complexity."
  }, {
    heading: "integrate-the-video-calling-demo",
    content: "This section shows how to integrate the RTC SDK to implement the Video Calling demo in your Magic Leap project:"
  }, {
    heading: "integrate-the-video-calling-demo",
    content: "Download the latest version of RTC SDK for Magic Leap to a local folder."
  }, {
    heading: "integrate-the-video-calling-demo",
    content: "Double-click the downloaded package."
  }, {
    heading: "integrate-the-video-calling-demo",
    content: "The Import dialog opens automatically in Unity Editor."
  }, {
    heading: "integrate-the-video-calling-demo",
    content: "Click **Import**."
  }, {
    heading: "integrate-the-video-calling-demo",
    content: "In **Project** > **Assets**, you see `Agora-RTC-Plugin` and `Agora_MagicLeap2_Plugin`."
  }, {
    heading: "test-your-implementation",
    content: "Agora recommends that you run this project on a physical device, because some simulators may not support the full feature set."
  }, {
    heading: "test-your-implementation",
    content: "To verify the integration:"
  }, {
    heading: "test-your-implementation",
    content: "Obtain an App ID with token enabled."
  }, {
    heading: "test-your-implementation",
    content: "Generate a temporary token in Agora Console."
  }, {
    heading: "test-your-implementation",
    content: "In your browser, open the Agora web demo and update `App ID`, `Channel`, and `Token` with the same values used for this project, then click **Join**."
  }, {
    heading: "test-your-implementation",
    content: "In Unity Editor, double-click **Agora\\_MagicLeap2\\_Plugin** > **AgoraEngine** > **ML2Support** > **Demo**."
  }, {
    heading: "test-your-implementation",
    content: "In **Project**, open **Agora\\_MagicLeap2\\_Plugin** > **AgoraEngine** > **ML2Support** > **Scripts** > **Agora Controller**."
  }, {
    heading: "test-your-implementation",
    content: "Update `APP_ID`, `TOKEN`, and `CHANNEL_NAME` with the same values you used for the web demo."
  }, {
    heading: "test-your-implementation",
    content: "Connect an ML2 device, then click **Build and Run**."
  }, {
    heading: "test-your-implementation",
    content: "Click **Connect Camera**."
  }, {
    heading: "test-your-implementation",
    content: "Video from your ML2 is streamed to the channel and is visible in the web demo. You also see the remote video stream from the web demo."
  }, {
    heading: "reference",
    content: "Manual install shows how to install RTC SDK manually"
  }, {
    heading: "reference",
    content: "To ensure communication security in test or production environments, best practice is to use a token server. See Use tokens"
  }, {
    heading: "api-reference",
    content: "JoinChannel"
  }, {
    heading: "api-reference",
    content: "EnableVideo"
  }, {
    heading: "api-reference",
    content: "CreateAgoraRtcEngine"
  }, {
    heading: "api-reference",
    content: "InitEventHandler"
  }, {
    heading: "api-reference",
    content: "LeaveChannel"
  }, {
    heading: "api-reference",
    content: "DisableVideo"
  }, {
    heading: "api-reference",
    content: "PushVideoFrame"
  }, {
    heading: "api-reference",
    content: "PushAudioFrame"
  }, {
    heading: "api-reference",
    content: "PullAudioFrame"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "project-setup",
    content: "Project setup"
  }, {
    id: "integrate-the-video-calling-demo",
    content: "Integrate the Video Calling demo"
  }, {
    id: "test-your-implementation",
    content: "Test your implementation"
  }, {
    id: "reference",
    content: "Reference"
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
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#project-setup",
  title: _jsx(_Fragment, {
    children: "Project setup"
  })
}, {
  depth: 2,
  url: "#integrate-the-video-calling-demo",
  title: _jsx(_Fragment, {
    children: "Integrate the Video Calling demo"
  })
}, {
  depth: 2,
  url: "#test-your-implementation",
  title: _jsx(_Fragment, {
    children: "Test your implementation"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
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
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["Agora RTC SDK for Magic Leap allows you to integrate real-time Video Calling features into your ", _jsx(_components.a, {
        href: "https://www.magicleap.com/",
        children: "Magic Leap"
      }), " app. You can enhance the overall user experience and add new possibilities for collaboration and interaction within Magic Leap environments."]
    }), `
`, _jsx(_components.p, {
      children: "This page shows the minimum code you need to integrate high-quality, low-latency Video Calling features into your Magic Leap project using RTC SDK."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsx(_components.p, {
      children: "This section explains how you can integrate Video Calling features into your Magic Leap project using RTC SDK."
    }), `
`, _jsx(_components.p, {
      children: "To start a session, implement the following steps in your app:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Retrieve a token"
        }), ": A token is a computer-generated string that authenticates a user when your app joins a channel. In a test or production environment, your app retrieves tokens from a server in your security infrastructure."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Join a channel"
        }), ": Call methods to create and join a channel. Apps that pass the same channel name join the same channel."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Send and receive video and audio"
        }), ": All users in the channel can send and receive real-time audio and video streams."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "To test the code used on this page, you need:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["An Agora ", _jsx(_components.a, {
          href: "/en/introduction/account",
          children: "account"
        }), " and ", _jsx(_components.a, {
          href: "/en/introduction/account",
          children: "project"
        })]
      }), `
`, _jsx(_components.li, {
        children: "A computer with Internet access"
      }), `
`, _jsx(_components.li, {
        children: "A network environment where no firewall blocks required communication"
      }), `
`, _jsxs(_components.li, {
        children: ["The ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/get-started-sdk",
          children: "SDK quickstart"
        }), " implemented in your project"]
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://developer-docs.magicleap.cloud/docs/guides/getting-started/install-the-tools",
          children: "ML Hub"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://unity.com/download",
          children: "Unity Hub"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://developer-docs.magicleap.cloud/docs/guides/unity/getting-started/install-the-tools",
          children: "Install and configure the Unity Editor required to develop for Magic Leap 2"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "project-setup",
      children: "Project setup"
    }), `
`, _jsx(_components.p, {
      children: "To integrate Video Calling into your Magic Leap project, do the following:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.strong, {
          children: "Create a Magic Leap project for Unity"
        })
      }), `
`]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "https://developer-docs.magicleap.cloud/docs/guides/unity/getting-started/create-a-project",
          children: "Create a project"
        }), " for your Agora Magic Leap app"]
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://developer-docs.magicleap.cloud/docs/guides/unity/getting-started/configure-unity-settings",
          children: "Configure your app settings"
        })
      }), `
`]
    }), `
`, _jsxs(_components.ol, {
      start: "2",
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.strong, {
          children: "Configure your project"
        })
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "In Unity Editor:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Click ", _jsx(_components.strong, {
          children: "Edit"
        }), " > ", _jsx(_components.strong, {
          children: "Project settings"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["In ", _jsx(_components.strong, {
          children: "XR Plug-in Management"
        }), ", enable ", _jsx(_components.strong, {
          children: "Magic Leap"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["In ", _jsx(_components.strong, {
          children: "XR Plug-in Management"
        }), " > ", _jsx(_components.strong, {
          children: "Magic Leap Settings"
        }), ", enable ", _jsx(_components.strong, {
          children: "Use ML Audio"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["In ", _jsx(_components.strong, {
          children: "Player settings"
        }), " > ", _jsx(_components.strong, {
          children: "Android"
        }), " > ", _jsx(_components.strong, {
          children: "Publishing settings"
        }), ", enable ", _jsx(_components.strong, {
          children: "Custom Main Manifest"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["In ", _jsx(_components.strong, {
          children: "Magic Leap"
        }), " > ", _jsx(_components.strong, {
          children: "Permissions"
        }), ", enable ", _jsx(_components.code, {
          children: "android.permission.CAMERA"
        }), " and ", _jsx(_components.code, {
          children: "android.permission.RECORD_AUDIO"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "You are now ready to add Video Calling features to your Magic Leap project."
    }), `
`, _jsx(_components.h2, {
      id: "integrate-the-video-calling-demo",
      children: "Integrate the Video Calling demo"
    }), `
`, _jsx(_components.p, {
      children: "When a user opens the app, you initialize the Agora Engine. When the user taps a button, the app joins or leaves a channel. When another user joins the same channel, their video and audio are rendered in the app. This simple workflow lets you focus on implementing Agora features instead of surrounding UI complexity."
    }), `
`, _jsx(_components.p, {
      children: "This section shows how to integrate the RTC SDK to implement the Video Calling demo in your Magic Leap project:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/sdks",
          children: "Download"
        }), " the latest version of RTC SDK for Magic Leap to a local folder."]
      }), `
`, _jsx(_components.li, {
        children: "Double-click the downloaded package."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The Import dialog opens automatically in Unity Editor."
    }), `
`, _jsxs(_components.ol, {
      start: "3",
      children: [`
`, _jsxs(_components.li, {
        children: ["Click ", _jsx(_components.strong, {
          children: "Import"
        }), "."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["In ", _jsx(_components.strong, {
        children: "Project"
      }), " > ", _jsx(_components.strong, {
        children: "Assets"
      }), ", you see ", _jsx(_components.code, {
        children: "Agora-RTC-Plugin"
      }), " and ", _jsx(_components.code, {
        children: "Agora_MagicLeap2_Plugin"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "test-your-implementation",
      children: "Test your implementation"
    }), `
`, _jsx(_components.p, {
      children: "Agora recommends that you run this project on a physical device, because some simulators may not support the full feature set."
    }), `
`, _jsx(_components.p, {
      children: "To verify the integration:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Obtain an App ID with token enabled."
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/introduction/account#generate-temporary-tokens",
          children: "Generate a temporary token"
        }), " in Agora Console."]
      }), `
`, _jsxs(_components.li, {
        children: ["In your browser, open the ", _jsx(_components.a, {
          href: "https://webdemo-global.agora.io/example/quickStart/videoAndVoiceCalling/index.html",
          children: "Agora web demo"
        }), " and update ", _jsx(_components.code, {
          children: "App ID"
        }), ", ", _jsx(_components.code, {
          children: "Channel"
        }), ", and ", _jsx(_components.code, {
          children: "Token"
        }), " with the same values used for this project, then click ", _jsx(_components.strong, {
          children: "Join"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["In Unity Editor, double-click ", _jsx(_components.strong, {
          children: "Agora_MagicLeap2_Plugin"
        }), " > ", _jsx(_components.strong, {
          children: "AgoraEngine"
        }), " > ", _jsx(_components.strong, {
          children: "ML2Support"
        }), " > ", _jsx(_components.strong, {
          children: "Demo"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["In ", _jsx(_components.strong, {
          children: "Project"
        }), ", open ", _jsx(_components.strong, {
          children: "Agora_MagicLeap2_Plugin"
        }), " > ", _jsx(_components.strong, {
          children: "AgoraEngine"
        }), " > ", _jsx(_components.strong, {
          children: "ML2Support"
        }), " > ", _jsx(_components.strong, {
          children: "Scripts"
        }), " > ", _jsx(_components.strong, {
          children: "Agora Controller"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Update ", _jsx(_components.code, {
          children: "APP_ID"
        }), ", ", _jsx(_components.code, {
          children: "TOKEN"
        }), ", and ", _jsx(_components.code, {
          children: "CHANNEL_NAME"
        }), " with the same values you used for the web demo."]
      }), `
`, _jsxs(_components.li, {
        children: ["Connect an ML2 device, then click ", _jsx(_components.strong, {
          children: "Build and Run"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Click ", _jsx(_components.strong, {
          children: "Connect Camera"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Video from your ML2 is streamed to the channel and is visible in the web demo. You also see the remote video stream from the web demo."
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/sdks",
          children: "Manual install"
        }), " shows how to install RTC SDK manually"]
      }), `
`, _jsxs(_components.li, {
        children: ["To ensure communication security in test or production environments, best practice is to use a token server. See ", _jsx(_components.a, {
          href: "../build/authenticate-users/authentication-workflow.mdx",
          children: "Use tokens"
        })]
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
          href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_joinchannel",
          children: "JoinChannel"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_enablevideo",
          children: "EnableVideo"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_createagorartcengine",
          children: "CreateAgoraRtcEngine"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_addhandler",
          children: "InitEventHandler"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_leavechannel",
          children: "LeaveChannel"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_disablevideo",
          children: "DisableVideo"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_imediaengine_pushvideoframe",
          children: "PushVideoFrame"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_imediaengine_pushaudioframe0",
          children: "PushAudioFrame"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_imediaengine_pullaudioframe",
          children: "PullAudioFrame"
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
