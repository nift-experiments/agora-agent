import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "FcrUIScene SDK",
  description: "Integrate FcrUIScene into your app with the default UI or by customizing the scene UI."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;web&#x22;,&#x22;electron&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    Currently not supported for this platform.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    Currently not supported for this platform.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    This page introduces how to add Flexible Classroom into your app.

    ## Understand the tech [#understand-the-tech]

    The following figure shows the overall technical architecture of Flexible Classroom:

    ![Flexible Classroom technical architecture](https://web-cdn.agora.io/docs-files/1653557375318)

    The source code of Flexible Classroom contains the following packages:

    * \`agora-demo-app\`: The Agora Classroom SDK demo app, supports Web, H5, Electron and other platforms, supports online classroom, online invigilation function, and provides code samples for online classroom before, during, and after class.

    * \`agora-plugin-gallery\`: An independent plug-in library for Agora Classroom SDK, which inherits the \`AgoraWidgetBase\` class and implements the \`AgoraWidgetLifecycle\` interface. It includes plug-ins such as interactive whiteboard, IM chat, answering machine, voting machine, and timer.

    * \`fcr-ui-scene/\`: General education scene SDK
      * \`/src/uistores\`: UI Store directory. UI Store is responsible for providing business logic encapsulation for UI components.
      * \`/src/containers\`: UI functional components combined with UI Store to become UI business components.
      * \`/src/scenarios\`: UI scene. Scenarios are composed of multiple business components.
      * \`/src/extension\`: API package for communicating with Widget
      * \`/src/resources\`: Static resource files such as pictures and sounds
      * \`/src/utils\`: Common UI components

    * \`fcr-ui-kit/\`: Common scene UI component library
      * \`/src/components\`: Common UI components
      * \`/src/utils\`: General hooks tool class

    * \`agora-common-libs\`: General tool class library, including ThemeProvider, I18nProvider, and other global general tools

    * \`agora-edu-core\`: Provides upstream API calls and downstream data structure encapsulation for education and proctoring scenarios in smart classrooms.

    * \`agora-rte-sdk\`: Provides cross-end RTC adaptation capabilities as well as classroom event callbacks and data structure encapsulation.

    ## Integration methods [#integration-methods]

    You can use multiple methods to integrate Cloud Classroom into your web project. Depending on whether you need to customize the classroom UI, you can choose different integration methods:

    * If you are satisfied with the default UI and do not want to change any of it, integrate the whole Cloud Classroom through [npm](https://www.npmjs.com/package/agora-classroom-sdk) or CDN.
    * If you want to customize the classroom UI based on the default UI of Cloud Classroom, you need to integrate by downloading the [source code](https://github.com/AgoraIO-Community/flexible-classroom-desktop) on GitHub.

    ### Use the default UI [#use-the-default-ui]

    If you are satisfied with the default UI of Cloud Classroom and do not want to change any of it, integrate through npm or CDN.

    #### Through npm [#through-npm]

    1. To install the SDK, run the following command:

       \`\`\`bash
       npm install fcr-ui-scene agora-plugin-gallery
       \`\`\`

    2. Import modules and plug-ins into the project's JavaScript code:

       \`\`\`javascript
       import { FcrUIScene } from 'fcr-ui-scene'
       import {
         FcrChatroom,
         FcrBoardWidget,
         FcrPollingWidget,
         FcrStreamMediaPlayerWidget,
         FcrWebviewWidget,
         FcrCountdownWidget,
         FcrPopupQuizWidget
       } from 'agora-plugin-gallery/scene'
       \`\`\`

    3. To launch a classroom, call [FcrUIScene.launch](/en/api-reference/api-ref/flexible-classroom/ui-scene).

       \`\`\`javascript
       import { FcrUIScene } from 'fcr-ui-scene'
       import {
       FcrChatroom,
       FcrBoardWidget,
       FcrPollingWidget,
       FcrStreamMediaPlayerWidget,
       FcrWebviewWidget,
       FcrCountdownWidget,
       FcrPopupQuizWidget
       } from 'agora-plugin-gallery/scene'

       const unmount = FcrUIScene.launch(document.querySelector("#root"), {
       appId: "Your App ID",
       region: "NA",
       userUuid: "user id",
       userName: "user name",
       roomUuid: "room id",
       roomType: 10, // Room type: 10 for Cloud Class.
       roomName: "room name",
       pretest: true, // Whether to enable pre-class equipment detection
       token: "rtm token", // In a test environment, you can use temporary RTM Token; in a production or security environment, it is strongly recommended that you use a server-generated RTM Token.
       language: "zh",
       duration: 60 * 30, // Course time in seconds.
       recordUrl: "your record url",
       roleType: 1, // User roles: 1 is teacher, 2 is student
       widgets: {
       easemobIM: FcrChatroom, // IM widget
       netlessBoard: FcrBoardWidget, // Interactive whiteboard widget
       poll: FcrPollingWidget, // Voter widget
       mediaPlayer: FcrStreamMediaPlayerWidget, // Video sync player widget
       webView: FcrWebviewWidget, // Embedded browser widget
       countdownTimer: FcrCountdownWidget, // Countdown widget
       popupQuiz: FcrPopupQuizWidget, // Clicker widget
       },
       });
       \`\`\`

    #### Through CDN [#through-cdn]

    1. Add the following code to the HTML file in your project:

       \`\`\`html
       <!-- <!-- Please replace X.Y.Z with the cloud classroom version number, such as 1.0.40.
       You can check the latest version number through the release notes or GitHub repository branch. -->
       <script src="https://download.agora.io/edu-apaas/release/scene_sdk@X.Y.Z.bundle.js"></script>
       <script src="https://download.agora.io/edu-apaas/release/scene_widget@X.Y.Z.bundle.js"></script>
       \`\`\`

    2. To launch a classroom, call [FcrUIScene.launch](/en/api-reference/api-ref/flexible-classroom/ui-scene).

    #### Sample code [#sample-code]

    \`\`\`html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <!-- Introduce SDK, 1.0.40 is the sample version number. You can check the latest version number through the release notes or GitHub repository branch. -->
        <script src="https://download.agora.io/edu-apaas/release/scene_sdk@1.0.40.bundle.js"></script>
        <!-- Introduce Widget, 1.0.40 is the sample version number. You can check the latest version number through the release notes or GitHub warehouse branch -->
        <script src="https://download.agora.io/edu-apaas/release/scene_widget@1.0.40.bundle.js"></script>
      </head>
      <body>
        <style>
          #root {
            width: 100%;
            height: 100%;
          }
        </style>
        <div id="root"></div>
        <script type="text/javascript">
        const virtualBackgroundImages = {
        // virtual background assets
          virtualBackground1: 'effect/default1.jpg',
          virtualBackground2: 'effect/default2.jpg',
          virtualBackground3: 'effect/default3.jpg',
          virtualBackground4: 'effect/default4.jpg',
          virtualBackground5: 'effect/default5.jpg',
          virtualBackground6: 'effect/default6.jpg',
          virtualBackground7: 'effect/default7.jpg',
          virtualBackground8: 'effect/default8.mp4',
          virtualBackground9: 'effect/default9.mp4',
        };

        const virtualBackgroundVideos = [
        virtualBackgroundImages.virtualBackground8,
        virtualBackgroundImages.virtualBackground9,
          ];
          // Start cloud classroom
          const unmount = FcrUIScene.launch(document.querySelector("#root"), {
            appId: "your appid",
            region: "NA",
            userUuid: "12345678",
            userName: "Teacher001",
            roomUuid: "room003",
            roomType: 10, // Room type: 10 for Cloud Class.
            roomName: "RoomName001",
            pretest: true, // Whether to enable pre-class equipment detection
            token: "your token", // In a test environment, you can use temporary RTM Token; in a production or security environment, it is strongly recommended that you use a server-generated RTM Token.
            language: "zh",
            duration: 60 * 60 *2, // Course time in seconds.
            recordUrl: "your record url",
            roleType: 1, // User roles: 1 is teacher, 2 is student
            widgets: {
              easemobIM: FcrChatroom, // IM widget
              netlessBoard: FcrBoardWidget, // Interactive whiteboard widget
              poll: FcrPollingWidget, // Voter widget
              mediaPlayer: FcrStreamMediaPlayerWidget, // Video sync player widget
              webView: FcrWebviewWidget, // Embedded browser widget
              countdownTimer: FcrCountdownWidget, // Countdown widget
              popupQuiz: FcrPopupQuizWidget, // Clicker widget
            },
            virtualBackgroundImages,
            virtualBackgroundVideos
          },
            () => {
              // success
            },
            (err) => {
              console.log(err)
              // failure
            },
            (type) => {
              //Destroy
              history.push(\`/?reason=\${type}\`);
            },
    );
        </script>
      </body>
    </html>
    \`\`\`

    The sample code requires passing in \`rtmToken\`. You can refer to [Secure authentication with tokens](/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/authentication-workflow) to learn what a Signaling token is, how to get a temporary Signaling token for testing purposes, and how to generate a Signaling token from the server. The generated token passed in \`userId\` must be consistent with the \`userUuid\` parameters passed in the \`launch\` method; otherwise, the generated token will be invalid.

    <CalloutContainer type="info">
      <CalloutDescription>
        Calling \`launch\` returns \`unmount\`. When your App routing changes cause the unloading of a page, call \`unmount\` to disconnect the room and recycle resources.
      </CalloutDescription>
    </CalloutContainer>

    ### Customize the classroom UI [#customize-the-classroom-ui]

    If you want to customize the classroom UI based on the default UI of Cloud Classroom, you need to integrate by downloading the source code on GitHub. Refer to the following steps:

    <CalloutContainer type="info">
      <CalloutDescription>
        Make sure you have [set up a development environment](/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/enable-flexible-classroom).
      </CalloutDescription>
    </CalloutContainer>

    1. Clone the Flexible-Classroom-Desktop repository:

       \`\`\`bash
       git clone https://github.com/AgoraIO-Community/flexible-classroom-desktop.git
       \`\`\`

    2. [Checkout the latest release branch](https://github.com/AgoraIO-Community/flexible-classroom-desktop/tree/release/2.9.0).

       1. Change directory to \`flexible-classroom-desktop\`

       2. Switch the branch, run the following commands:

          \`\`\`bash
          cd flexible-classroom-desktop
          git checkout release/2.9.0
          \`\`\`

    3. Modify the code according to your needs. See [FcrUIScene SDK customization guide](/en/realtime-media/flexible-classroom/build/customize-the-ui-and-plugins/customize-ui-scene-sdk) for details.

    4. Debug your code.

       After finishing the development, follow these steps to debug:

       1. To install dependencies, run the following command:

          \`\`\`bash
          yarn install:packages
          \`\`\`

       2. To run the project in development mode, use the following command:

          \`\`\`bash
          yarn dev:scene
          \`\`\`

    5. After finishing the development, package the SDK JS file with the following command:

       1. To package the SDK code:

          \`\`\`bash
          yarn pack:scene:sdk
          \`\`\`

       2. To package the SDK plugins:

          \`\`\`bash
          yarn pack:scene:plugin
          \`\`\`

    <CalloutContainer type="info">
      <CalloutDescription>
        Find the output in the \`packages/fcr-ui-scene/lib/fcr-ui-scene_sdk.bundle.js\` and \`packages/agora-plugin-gallery/lib/scene_widget.bundle.js\` respectively.
      </CalloutDescription>
    </CalloutContainer>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    Currently not supported for this platform.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Currently not supported for this platform."
  }, {
    heading: undefined,
    content: "Currently not supported for this platform."
  }, {
    heading: undefined,
    content: "This page introduces how to add Flexible Classroom into your app."
  }, {
    heading: "understand-the-tech",
    content: "The following figure shows the overall technical architecture of Flexible Classroom:"
  }, {
    heading: "understand-the-tech",
    content: "The source code of Flexible Classroom contains the following packages:"
  }, {
    heading: "understand-the-tech",
    content: "`agora-demo-app`: The Agora Classroom SDK demo app, supports Web, H5, Electron and other platforms, supports online classroom, online invigilation function, and provides code samples for online classroom before, during, and after class."
  }, {
    heading: "understand-the-tech",
    content: "`agora-plugin-gallery`: An independent plug-in library for Agora Classroom SDK, which inherits the `AgoraWidgetBase` class and implements the `AgoraWidgetLifecycle` interface. It includes plug-ins such as interactive whiteboard, IM chat, answering machine, voting machine, and timer."
  }, {
    heading: "understand-the-tech",
    content: "`fcr-ui-scene/`: General education scene SDK"
  }, {
    heading: "understand-the-tech",
    content: "`/src/uistores`: UI Store directory. UI Store is responsible for providing business logic encapsulation for UI components."
  }, {
    heading: "understand-the-tech",
    content: "`/src/containers`: UI functional components combined with UI Store to become UI business components."
  }, {
    heading: "understand-the-tech",
    content: "`/src/scenarios`: UI scene. Scenarios are composed of multiple business components."
  }, {
    heading: "understand-the-tech",
    content: "`/src/extension`: API package for communicating with Widget"
  }, {
    heading: "understand-the-tech",
    content: "`/src/resources`: Static resource files such as pictures and sounds"
  }, {
    heading: "understand-the-tech",
    content: "`/src/utils`: Common UI components"
  }, {
    heading: "understand-the-tech",
    content: "`fcr-ui-kit/`: Common scene UI component library"
  }, {
    heading: "understand-the-tech",
    content: "`/src/components`: Common UI components"
  }, {
    heading: "understand-the-tech",
    content: "`/src/utils`: General hooks tool class"
  }, {
    heading: "understand-the-tech",
    content: "`agora-common-libs`: General tool class library, including ThemeProvider, I18nProvider, and other global general tools"
  }, {
    heading: "understand-the-tech",
    content: "`agora-edu-core`: Provides upstream API calls and downstream data structure encapsulation for education and proctoring scenarios in smart classrooms."
  }, {
    heading: "understand-the-tech",
    content: "`agora-rte-sdk`: Provides cross-end RTC adaptation capabilities as well as classroom event callbacks and data structure encapsulation."
  }, {
    heading: "integration-methods",
    content: "You can use multiple methods to integrate Cloud Classroom into your web project. Depending on whether you need to customize the classroom UI, you can choose different integration methods:"
  }, {
    heading: "integration-methods",
    content: "If you are satisfied with the default UI and do not want to change any of it, integrate the whole Cloud Classroom through npm or CDN."
  }, {
    heading: "integration-methods",
    content: "If you want to customize the classroom UI based on the default UI of Cloud Classroom, you need to integrate by downloading the source code on GitHub."
  }, {
    heading: "use-the-default-ui",
    content: "If you are satisfied with the default UI of Cloud Classroom and do not want to change any of it, integrate through npm or CDN."
  }, {
    heading: "through-npm",
    content: "To install the SDK, run the following command:"
  }, {
    heading: "through-npm",
    content: "Import modules and plug-ins into the project's JavaScript code:"
  }, {
    heading: "through-npm",
    content: "To launch a classroom, call FcrUIScene.launch."
  }, {
    heading: "through-cdn",
    content: "Add the following code to the HTML file in your project:"
  }, {
    heading: "through-cdn",
    content: "To launch a classroom, call FcrUIScene.launch."
  }, {
    heading: "sample-code",
    content: "The sample code requires passing in `rtmToken`. You can refer to Secure authentication with tokens to learn what a Signaling token is, how to get a temporary Signaling token for testing purposes, and how to generate a Signaling token from the server. The generated token passed in `userId` must be consistent with the `userUuid` parameters passed in the `launch` method; otherwise, the generated token will be invalid."
  }, {
    heading: "sample-code",
    content: "Calling `launch` returns `unmount`. When your App routing changes cause the unloading of a page, call `unmount` to disconnect the room and recycle resources."
  }, {
    heading: "customize-the-classroom-ui",
    content: "If you want to customize the classroom UI based on the default UI of Cloud Classroom, you need to integrate by downloading the source code on GitHub. Refer to the following steps:"
  }, {
    heading: "customize-the-classroom-ui",
    content: "Make sure you have set up a development environment."
  }, {
    heading: "customize-the-classroom-ui",
    content: "Clone the Flexible-Classroom-Desktop repository:"
  }, {
    heading: "customize-the-classroom-ui",
    content: "Checkout the latest release branch."
  }, {
    heading: "customize-the-classroom-ui",
    content: "Change directory to `flexible-classroom-desktop`"
  }, {
    heading: "customize-the-classroom-ui",
    content: "Switch the branch, run the following commands:"
  }, {
    heading: "customize-the-classroom-ui",
    content: "Modify the code according to your needs. See FcrUIScene SDK customization guide for details."
  }, {
    heading: "customize-the-classroom-ui",
    content: "Debug your code."
  }, {
    heading: "customize-the-classroom-ui",
    content: "After finishing the development, follow these steps to debug:"
  }, {
    heading: "customize-the-classroom-ui",
    content: "To install dependencies, run the following command:"
  }, {
    heading: "customize-the-classroom-ui",
    content: "To run the project in development mode, use the following command:"
  }, {
    heading: "customize-the-classroom-ui",
    content: "After finishing the development, package the SDK JS file with the following command:"
  }, {
    heading: "customize-the-classroom-ui",
    content: "To package the SDK code:"
  }, {
    heading: "customize-the-classroom-ui",
    content: "To package the SDK plugins:"
  }, {
    heading: "customize-the-classroom-ui",
    content: "Find the output in the `packages/fcr-ui-scene/lib/fcr-ui-scene_sdk.bundle.js` and `packages/agora-plugin-gallery/lib/scene_widget.bundle.js` respectively."
  }, {
    heading: "customize-the-classroom-ui",
    content: "Currently not supported for this platform."
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "integration-methods",
    content: "Integration methods"
  }, {
    id: "use-the-default-ui",
    content: "Use the default UI"
  }, {
    id: "through-npm",
    content: "Through npm"
  }, {
    id: "through-cdn",
    content: "Through CDN"
  }, {
    id: "sample-code",
    content: "Sample code"
  }, {
    id: "customize-the-classroom-ui",
    content: "Customize the classroom UI"
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
  url: "#integration-methods",
  title: _jsx(_Fragment, {
    children: "Integration methods"
  })
}, {
  depth: 3,
  url: "#use-the-default-ui",
  title: _jsx(_Fragment, {
    children: "Use the default UI"
  })
}, {
  depth: 4,
  url: "#through-npm",
  title: _jsx(_Fragment, {
    children: "Through npm"
  })
}, {
  depth: 4,
  url: "#through-cdn",
  title: _jsx(_Fragment, {
    children: "Through CDN"
  })
}, {
  depth: 4,
  url: "#sample-code",
  title: _jsx(_Fragment, {
    children: "Sample code"
  })
}, {
  depth: 3,
  url: "#customize-the-classroom-ui",
  title: _jsx(_Fragment, {
    children: "Customize the classroom UI"
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
    platforms: '["android","ios","web","electron"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "android",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "android"
      }), _jsx(_components.p, {
        children: "Currently not supported for this platform."
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
        children: "Currently not supported for this platform."
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
        children: "This page introduces how to add Flexible Classroom into your app."
      }), _jsx(_components.h2, {
        id: "understand-the-tech",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "The following figure shows the overall technical architecture of Flexible Classroom:"
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://web-cdn.agora.io/docs-files/1653557375318",
          alt: "Flexible Classroom technical architecture"
        })
      }), _jsx(_components.p, {
        children: "The source code of Flexible Classroom contains the following packages:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.code, {
              children: "agora-demo-app"
            }), ": The Agora Classroom SDK demo app, supports Web, H5, Electron and other platforms, supports online classroom, online invigilation function, and provides code samples for online classroom before, during, and after class."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.code, {
              children: "agora-plugin-gallery"
            }), ": An independent plug-in library for Agora Classroom SDK, which inherits the ", _jsx(_components.code, {
              children: "AgoraWidgetBase"
            }), " class and implements the ", _jsx(_components.code, {
              children: "AgoraWidgetLifecycle"
            }), " interface. It includes plug-ins such as interactive whiteboard, IM chat, answering machine, voting machine, and timer."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.code, {
              children: "fcr-ui-scene/"
            }), ": General education scene SDK"]
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "/src/uistores"
              }), ": UI Store directory. UI Store is responsible for providing business logic encapsulation for UI components."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "/src/containers"
              }), ": UI functional components combined with UI Store to become UI business components."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "/src/scenarios"
              }), ": UI scene. Scenarios are composed of multiple business components."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "/src/extension"
              }), ": API package for communicating with Widget"]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "/src/resources"
              }), ": Static resource files such as pictures and sounds"]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "/src/utils"
              }), ": Common UI components"]
            }), `
`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.code, {
              children: "fcr-ui-kit/"
            }), ": Common scene UI component library"]
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "/src/components"
              }), ": Common UI components"]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "/src/utils"
              }), ": General hooks tool class"]
            }), `
`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.code, {
              children: "agora-common-libs"
            }), ": General tool class library, including ThemeProvider, I18nProvider, and other global general tools"]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.code, {
              children: "agora-edu-core"
            }), ": Provides upstream API calls and downstream data structure encapsulation for education and proctoring scenarios in smart classrooms."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.code, {
              children: "agora-rte-sdk"
            }), ": Provides cross-end RTC adaptation capabilities as well as classroom event callbacks and data structure encapsulation."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "integration-methods",
        children: "Integration methods"
      }), _jsx(_components.p, {
        children: "You can use multiple methods to integrate Cloud Classroom into your web project. Depending on whether you need to customize the classroom UI, you can choose different integration methods:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: ["If you are satisfied with the default UI and do not want to change any of it, integrate the whole Cloud Classroom through ", _jsx(_components.a, {
            href: "https://www.npmjs.com/package/agora-classroom-sdk",
            children: "npm"
          }), " or CDN."]
        }), `
`, _jsxs(_components.li, {
          children: ["If you want to customize the classroom UI based on the default UI of Cloud Classroom, you need to integrate by downloading the ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Community/flexible-classroom-desktop",
            children: "source code"
          }), " on GitHub."]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "use-the-default-ui",
        children: "Use the default UI"
      }), _jsx(_components.p, {
        children: "If you are satisfied with the default UI of Cloud Classroom and do not want to change any of it, integrate through npm or CDN."
      }), _jsx(_components.h4, {
        id: "through-npm",
        children: "Through npm"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "To install the SDK, run the following command:"
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
                    children: "npm"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " install"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " fcr-ui-scene"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " agora-plugin-gallery"
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
            children: "Import modules and plug-ins into the project's JavaScript code:"
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
              icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
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
                    children: " { FcrUIScene } "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "from"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " 'fcr-ui-scene'"
                  })]
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
                    children: "  FcrChatroom,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  FcrBoardWidget,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  FcrPollingWidget,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  FcrStreamMediaPlayerWidget,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  FcrWebviewWidget,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  FcrCountdownWidget,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  FcrPopupQuizWidget"
                  })
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
                    children: "from"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " 'agora-plugin-gallery/scene'"
                  })]
                })]
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["To launch a classroom, call ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/flexible-classroom/ui-scene",
              children: "FcrUIScene.launch"
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
              icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
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
                    children: " { FcrUIScene } "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "from"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " 'fcr-ui-scene'"
                  })]
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
                    children: "FcrChatroom,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "FcrBoardWidget,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "FcrPollingWidget,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "FcrStreamMediaPlayerWidget,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "FcrWebviewWidget,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "FcrCountdownWidget,"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "FcrPopupQuizWidget"
                  })
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
                    children: "from"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " 'agora-plugin-gallery/scene'"
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
                    children: " unmount"
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
                    children: " FcrUIScene."
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
                    children: "(document."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "querySelector"
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
                    children: '"#root"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "), {"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "appId: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"Your App ID"'
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
                    children: "region: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"NA"'
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
                    children: '"user id"'
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
                    children: "userName: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"user name"'
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
                    children: "roomUuid: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"room id"'
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
                    children: "roomType: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "10"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Room type: 10 for Cloud Class."
                  })]
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
                    children: '"room name"'
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
                    children: ", "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Whether to enable pre-class equipment detection"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "token: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"rtm token"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// In a test environment, you can use temporary RTM Token; in a production or security environment, it is strongly recommended that you use a server-generated RTM Token."
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "language: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"zh"'
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
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "60"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " *"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " 30"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Course time in seconds."
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "recordUrl: "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"your record url"'
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
                    children: "roleType: "
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
                    children: ", "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// User roles: 1 is teacher, 2 is student"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "widgets: {"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "easemobIM: FcrChatroom, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// IM widget"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "netlessBoard: FcrBoardWidget, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Interactive whiteboard widget"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "poll: FcrPollingWidget, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Voter widget"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "mediaPlayer: FcrStreamMediaPlayerWidget, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Video sync player widget"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "webView: FcrWebviewWidget, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Embedded browser widget"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "countdownTimer: FcrCountdownWidget, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Countdown widget"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "popupQuiz: FcrPopupQuizWidget, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Clicker widget"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "},"
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
`]
      }), _jsx(_components.h4, {
        id: "through-cdn",
        children: "Through CDN"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Add the following code to the HTML file in your project:"
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
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "<!-- "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#B31D28",
                      "--shiki-light-font-style": "italic",
                      "--shiki-dark": "#FDAEB7",
                      "--shiki-dark-font-style": "italic"
                    },
                    children: "<!--"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: " Please replace X.Y.Z with the cloud classroom version number, such as 1.0.40."
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "You can check the latest version number through the release notes or GitHub repository branch. -->"
                  })
                }), `
`, _jsxs(_components.span, {
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
                    children: "script"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " src"
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
                    children: '"https://download.agora.io/edu-apaas/release/scene_sdk@X.Y.Z.bundle.js"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "></"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "script"
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
                    children: "<"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "script"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " src"
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
                    children: '"https://download.agora.io/edu-apaas/release/scene_widget@X.Y.Z.bundle.js"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "></"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "script"
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
`, _jsxs(_components.p, {
            children: ["To launch a classroom, call ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/flexible-classroom/ui-scene",
              children: "FcrUIScene.launch"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h4, {
        id: "sample-code",
        children: "Sample code"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "<!"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "DOCTYPE"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " html"
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
                children: "<"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "html"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " lang"
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
                children: '"en"'
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
                children: "  <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "head"
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
                children: "meta"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " charset"
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
                children: '"UTF-8"'
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
                children: "    <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "meta"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " name"
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
                children: '"viewport"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " content"
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
                children: '"width=device-width, initial-scale=1"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " />"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    <!-- Introduce SDK, 1.0.40 is the sample version number. You can check the latest version number through the release notes or GitHub repository branch. -->"
              })
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
                children: "script"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " src"
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
                children: '"https://download.agora.io/edu-apaas/release/scene_sdk@1.0.40.bundle.js"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "></"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "script"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    <!-- Introduce Widget, 1.0.40 is the sample version number. You can check the latest version number through the release notes or GitHub warehouse branch -->"
              })
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
                children: "script"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " src"
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
                children: '"https://download.agora.io/edu-apaas/release/scene_widget@1.0.40.bundle.js"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "></"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "script"
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
                children: "  </"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "head"
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
                children: "  <"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "body"
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
                children: "style"
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "      #root"
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
                children: "        width"
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
                children: "100"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "%"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "        height"
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
                children: "100"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "%"
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
                children: "      }"
              })
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
                children: "style"
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
                children: "div"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " id"
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
                children: '"root"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "></"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "div"
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
                children: "script"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " type"
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
                children: '"text/javascript"'
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    const"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " virtualBackgroundImages"
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
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "    // virtual background assets"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "      virtualBackground1: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'effect/default1.jpg'"
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
                children: "      virtualBackground2: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'effect/default2.jpg'"
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
                children: "      virtualBackground3: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'effect/default3.jpg'"
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
                children: "      virtualBackground4: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'effect/default4.jpg'"
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
                children: "      virtualBackground5: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'effect/default5.jpg'"
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
                children: "      virtualBackground6: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'effect/default6.jpg'"
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
                children: "      virtualBackground7: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'effect/default7.jpg'"
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
                children: "      virtualBackground8: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'effect/default8.mp4'"
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
                children: "      virtualBackground9: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "'effect/default9.mp4'"
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
                children: "    };"
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
                children: "    const"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " virtualBackgroundVideos"
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
                children: " ["
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    virtualBackgroundImages.virtualBackground8,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    virtualBackgroundImages.virtualBackground9,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "      ];"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "      // Start cloud classroom"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "      const"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " unmount"
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
                children: " FcrUIScene."
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
                children: "(document."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "querySelector"
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
                children: '"#root"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "), {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        appId: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"your appid"'
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
                children: "        region: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"NA"'
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
                children: "        userUuid: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"12345678"'
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
                children: "        userName: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"Teacher001"'
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
                children: "        roomUuid: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"room003"'
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
                children: "        roomType: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "10"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Room type: 10 for Cloud Class."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        roomName: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"RoomName001"'
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
                children: "        pretest: "
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
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Whether to enable pre-class equipment detection"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        token: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"your token"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// In a test environment, you can use temporary RTM Token; in a production or security environment, it is strongly recommended that you use a server-generated RTM Token."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        language: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"zh"'
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
                children: "        duration: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "60"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " *"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " 60"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " *"
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
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Course time in seconds."
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        recordUrl: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"your record url"'
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
                children: "        roleType: "
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
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// User roles: 1 is teacher, 2 is student"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        widgets: {"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "          easemobIM: FcrChatroom, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// IM widget"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "          netlessBoard: FcrBoardWidget, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Interactive whiteboard widget"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "          poll: FcrPollingWidget, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Voter widget"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "          mediaPlayer: FcrStreamMediaPlayerWidget, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Video sync player widget"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "          webView: FcrWebviewWidget, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Embedded browser widget"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "          countdownTimer: FcrCountdownWidget, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Countdown widget"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "          popupQuiz: FcrPopupQuizWidget, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Clicker widget"
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
                children: "        virtualBackgroundImages,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        virtualBackgroundVideos"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "      },"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        () "
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
                children: "          // success"
              })
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "err"
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "          console."
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
                children: "(err)"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "          // failure"
              })
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "        ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "type"
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
                children: "          //Destroy"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "          history."
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
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "`/?reason=${"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "type"
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
                children: ");"
              })
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
                children: "script"
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
                children: "  </"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                children: "body"
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
                children: "html"
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
      }), _jsxs(_components.p, {
        children: ["The sample code requires passing in ", _jsx(_components.code, {
          children: "rtmToken"
        }), ". You can refer to ", _jsx(_components.a, {
          href: "/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/authentication-workflow",
          children: "Secure authentication with tokens"
        }), " to learn what a Signaling token is, how to get a temporary Signaling token for testing purposes, and how to generate a Signaling token from the server. The generated token passed in ", _jsx(_components.code, {
          children: "userId"
        }), " must be consistent with the ", _jsx(_components.code, {
          children: "userUuid"
        }), " parameters passed in the ", _jsx(_components.code, {
          children: "launch"
        }), " method; otherwise, the generated token will be invalid."]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["Calling ", _jsx(_components.code, {
              children: "launch"
            }), " returns ", _jsx(_components.code, {
              children: "unmount"
            }), ". When your App routing changes cause the unloading of a page, call ", _jsx(_components.code, {
              children: "unmount"
            }), " to disconnect the room and recycle resources."]
          })
        })
      }), _jsx(_components.h3, {
        id: "customize-the-classroom-ui",
        children: "Customize the classroom UI"
      }), _jsx(_components.p, {
        children: "If you want to customize the classroom UI based on the default UI of Cloud Classroom, you need to integrate by downloading the source code on GitHub. Refer to the following steps:"
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["Make sure you have ", _jsx(_components.a, {
              href: "/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/enable-flexible-classroom",
              children: "set up a development environment"
            }), "."]
          })
        })
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Clone the Flexible-Classroom-Desktop repository:"
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
                    children: "git"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " clone"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " https://github.com/AgoraIO-Community/flexible-classroom-desktop.git"
                  })]
                })
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.a, {
              href: "https://github.com/AgoraIO-Community/flexible-classroom-desktop/tree/release/2.9.0",
              children: "Checkout the latest release branch"
            }), "."]
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Change directory to ", _jsx(_components.code, {
                  children: "flexible-classroom-desktop"
                })]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: "Switch the branch, run the following commands:"
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
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "cd"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " flexible-classroom-desktop"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "git"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " checkout"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " release/2.9.0"
                      })]
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
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Modify the code according to your needs. See ", _jsx(_components.a, {
              href: "/en/realtime-media/flexible-classroom/build/customize-the-ui-and-plugins/customize-ui-scene-sdk",
              children: "FcrUIScene SDK customization guide"
            }), " for details."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Debug your code."
          }), `
`, _jsx(_components.p, {
            children: "After finishing the development, follow these steps to debug:"
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: "To install dependencies, run the following command:"
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
                        children: " install:packages"
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
                children: "To run the project in development mode, use the following command:"
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
                        children: " dev:scene"
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
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "After finishing the development, package the SDK JS file with the following command:"
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: "To package the SDK code:"
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
                        children: " pack:scene:sdk"
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
                children: "To package the SDK plugins:"
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
                        children: " pack:scene:plugin"
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
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["Find the output in the ", _jsx(_components.code, {
              children: "packages/fcr-ui-scene/lib/fcr-ui-scene_sdk.bundle.js"
            }), " and ", _jsx(_components.code, {
              children: "packages/agora-plugin-gallery/lib/scene_widget.bundle.js"
            }), " respectively."]
          })
        })
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "electron",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "electron"
      }), _jsx(_components.p, {
        children: "Currently not supported for this platform."
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
