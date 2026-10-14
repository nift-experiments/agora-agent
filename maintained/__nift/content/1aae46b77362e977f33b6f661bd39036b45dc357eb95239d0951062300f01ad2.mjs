import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Manage room state",
  description: "Understand room state fields and listen for room state changes in Interactive Whiteboard."
};
export let _markdown = "\n\nThe Whiteboard SDK provides the `state` property in the `room` interface to indicate the various states of a room. By reading or modifying the `state` property of a `room` object, you can change the behavior of the whiteboard or implement custom business logic.\n\nThis feature is for Web only.\n\nThis page describes the different states of an interactive whiteboard room and how to listen for room state changes.\n\n## Understand the tech [#understand-the-tech]\n\nIn an interactive whiteboard room, the `state` property includes the following fields:\n\n* [`memberState`](/en/api-reference/whiteboard/web): The whiteboard tool currently in use. By modifying the `memberState` value of the current room, you can switch the whiteboard tool. See [Use Whiteboard Tools](../draw-and-edit-content/whiteboard-tools.mdx).\n* [`broadcastState`](/en/api-reference/whiteboard/web): The view mode of the user, as well as the user ID of the host in the room.\n* [`cameraState`](/en/api-reference/whiteboard/web): The state of the view, including the coordinates of the center, the width and height, and the scale factor of the view.\n* [`roomMember`](/en/api-reference/whiteboard/web).: The information of all the users in interactive mode (those who have read and write permission) in the room.\n* [`sceneState`](/en/api-reference/whiteboard/web): The information of the current scene, including the name, index, and path of the scene. By modifying the `sceneState` value of the current room, you can switch the scene. See [Manage Scenes](../display-files-and-manage-scenes/scenes/manage-scenes.mdx).\n* [`globalState`](/en/api-reference/whiteboard/web): The global state of the room. You can use `globalState` to implement custom business logic.\n\nTo get the current room states, you can either read the value of each field, or register a callback to listen for their changes.\n\n## Prerequisites [#prerequisites]\n\nTo follow the procedure on this page, ensure that you have integrated the Whiteboard SDK into your project and implemented joining a room. For details, see [Join the Whiteboard Room](../set-up-and-build-your-first-app/get-started-uikit/#join-the-whiteboard-room).\n\nThe following section extends the [Join a Whiteboard Room](../set-up-and-build-your-first-app/get-started-sdk/#join-the-interactive-whiteboard-room-from-your-app-client) sample code to show the implementation of getting or listening for room states.\n\n## Implement room state management [#implement-room-state-management]\n\n### Read the value of a state [#read-the-value-of-a-state]\n\nAfter successfully joining a whiteboard room, to get a room state, you can directly read the corresponding field in the `state` property of the `room` object.\n\nFor example, to get information about the current scene (`sceneState`) after joining a room, add the following line to the `joinWhiteboard.js` file:\n\n```javascript\nwhiteWebSdk.joinRoom(joinRoomParams).then(function(room) {\n\n    room.bindHtmlElement(document.getElementById(\"whiteboard\"));\n\n    // Add the following code to get the path, name, and index of the current scene.\n    var sceneState = room.state.sceneState;\n    console.log(\"scene path:\", sceneState.scenePath);\n    console.log(\"scene name:\", sceneState.sceneName);\n    console.log(\"scene index:\", sceneState.index);\n\n}).catch(function(err) {\n\n    console.error(err);\n});\n```\n\nSave the changes, refresh the `index.html` page, and open the console of your browser. You can see the following information on the console:\n\n```json\n[White] join room success\nscene path: /init\nscene name: init\nscene index: 0\n```\n\n### Use callbacks to listen for state changes [#use-callbacks-to-listen-for-state-changes]\n\nThe Whiteboard SDK provides the `onRoomStateChanged` method in `RoomCallbacks` to report room state changes. You can register this callback when calling `joinRoom` to listen for room state changes in real time.\n\nFor example, to listen for changes of `broadcastState`, you can add the following code to the `joinWhiteboard.js` file:\n\n```javascript\nvar whiteWebSdk = new WhiteWebSdk({\n    appIdentifier: \"RMmxxxQ\",\n});\n\nvar joinRoomParams = {\n    uuid: \"a7exxxa69\",\n    roomToken: \"NETLESSROOM_YWs9xxxNjk\",\n};\n\n// Define the callback to be listened for.\nvar roomCallbacks = {\n    onRoomStateChanged: function onStateChanged(modifyState) {\n    // When the broadcastState field changes, output the current broadcastState.\n    if (modifyState.broadcastState) {\n        console.log(modifyState);\n    } else {\n        // Ignore the changes of other fields.\n    }\n },\n};\n// Register the callback when joining a room.\nwhiteWebSdk.joinRoom(joinRoomParams, roomCallbacks).then(function(room) {\n\n    room.bindHtmlElement(document.getElementById(\"whiteboard\"));\n    // Set the view mode of the user as broadcaster.\n    room.setViewMode(\"broadcaster\");\n\n}).catch(function(err) {\n\n    console.error(err);\n});\n```\n\nSave the changes, refresh the `index.html` page, and open the console of your browser. You can see the following information on the console:\n\n```text\nbroadcasterId: 409\nmode: \"broadcaster\"\n```\n\n## API reference [#api-reference]\n\n* [`roomState`](/en/api-reference/whiteboard/web)\n* [`joinRoom`](/en/api-reference/whiteboard/web)\n* [`RoomCallbacks`](/en/api-reference/whiteboard/web)\n";
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Whiteboard SDK provides the `state` property in the `room` interface to indicate the various states of a room. By reading or modifying the `state` property of a `room` object, you can change the behavior of the whiteboard or implement custom business logic."
  }, {
    heading: undefined,
    content: "This feature is for Web only."
  }, {
    heading: undefined,
    content: "This page describes the different states of an interactive whiteboard room and how to listen for room state changes."
  }, {
    heading: "understand-the-tech",
    content: "In an interactive whiteboard room, the `state` property includes the following fields:"
  }, {
    heading: "understand-the-tech",
    content: "`memberState`: The whiteboard tool currently in use. By modifying the `memberState` value of the current room, you can switch the whiteboard tool. See Use Whiteboard Tools."
  }, {
    heading: "understand-the-tech",
    content: "`broadcastState`: The view mode of the user, as well as the user ID of the host in the room."
  }, {
    heading: "understand-the-tech",
    content: "`cameraState`: The state of the view, including the coordinates of the center, the width and height, and the scale factor of the view."
  }, {
    heading: "understand-the-tech",
    content: "`roomMember`.: The information of all the users in interactive mode (those who have read and write permission) in the room."
  }, {
    heading: "understand-the-tech",
    content: "`sceneState`: The information of the current scene, including the name, index, and path of the scene. By modifying the `sceneState` value of the current room, you can switch the scene. See Manage Scenes."
  }, {
    heading: "understand-the-tech",
    content: "`globalState`: The global state of the room. You can use `globalState` to implement custom business logic."
  }, {
    heading: "understand-the-tech",
    content: "To get the current room states, you can either read the value of each field, or register a callback to listen for their changes."
  }, {
    heading: "prerequisites",
    content: "To follow the procedure on this page, ensure that you have integrated the Whiteboard SDK into your project and implemented joining a room. For details, see Join the Whiteboard Room."
  }, {
    heading: "prerequisites",
    content: "The following section extends the Join a Whiteboard Room sample code to show the implementation of getting or listening for room states."
  }, {
    heading: "read-the-value-of-a-state",
    content: "After successfully joining a whiteboard room, to get a room state, you can directly read the corresponding field in the `state` property of the `room` object."
  }, {
    heading: "read-the-value-of-a-state",
    content: "For example, to get information about the current scene (`sceneState`) after joining a room, add the following line to the `joinWhiteboard.js` file:"
  }, {
    heading: "read-the-value-of-a-state",
    content: "Save the changes, refresh the `index.html` page, and open the console of your browser. You can see the following information on the console:"
  }, {
    heading: "use-callbacks-to-listen-for-state-changes",
    content: "The Whiteboard SDK provides the `onRoomStateChanged` method in `RoomCallbacks` to report room state changes. You can register this callback when calling `joinRoom` to listen for room state changes in real time."
  }, {
    heading: "use-callbacks-to-listen-for-state-changes",
    content: "For example, to listen for changes of `broadcastState`, you can add the following code to the `joinWhiteboard.js` file:"
  }, {
    heading: "use-callbacks-to-listen-for-state-changes",
    content: "Save the changes, refresh the `index.html` page, and open the console of your browser. You can see the following information on the console:"
  }, {
    heading: "api-reference",
    content: "`roomState`"
  }, {
    heading: "api-reference",
    content: "`joinRoom`"
  }, {
    heading: "api-reference",
    content: "`RoomCallbacks`"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implement-room-state-management",
    content: "Implement room state management"
  }, {
    id: "read-the-value-of-a-state",
    content: "Read the value of a state"
  }, {
    id: "use-callbacks-to-listen-for-state-changes",
    content: "Use callbacks to listen for state changes"
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
  url: "#implement-room-state-management",
  title: _jsx(_Fragment, {
    children: "Implement room state management"
  })
}, {
  depth: 3,
  url: "#read-the-value-of-a-state",
  title: _jsx(_Fragment, {
    children: "Read the value of a state"
  })
}, {
  depth: 3,
  url: "#use-callbacks-to-listen-for-state-changes",
  title: _jsx(_Fragment, {
    children: "Use callbacks to listen for state changes"
  })
}, {
  depth: 2,
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
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["The Whiteboard SDK provides the ", _jsx(_components.code, {
        children: "state"
      }), " property in the ", _jsx(_components.code, {
        children: "room"
      }), " interface to indicate the various states of a room. By reading or modifying the ", _jsx(_components.code, {
        children: "state"
      }), " property of a ", _jsx(_components.code, {
        children: "room"
      }), " object, you can change the behavior of the whiteboard or implement custom business logic."]
    }), `
`, _jsx(_components.p, {
      children: "This feature is for Web only."
    }), `
`, _jsx(_components.p, {
      children: "This page describes the different states of an interactive whiteboard room and how to listen for room state changes."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsxs(_components.p, {
      children: ["In an interactive whiteboard room, the ", _jsx(_components.code, {
        children: "state"
      }), " property includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/api-reference/whiteboard/web",
          children: _jsx(_components.code, {
            children: "memberState"
          })
        }), ": The whiteboard tool currently in use. By modifying the ", _jsx(_components.code, {
          children: "memberState"
        }), " value of the current room, you can switch the whiteboard tool. See ", _jsx(_components.a, {
          href: "../draw-and-edit-content/whiteboard-tools.mdx",
          children: "Use Whiteboard Tools"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/api-reference/whiteboard/web",
          children: _jsx(_components.code, {
            children: "broadcastState"
          })
        }), ": The view mode of the user, as well as the user ID of the host in the room."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/api-reference/whiteboard/web",
          children: _jsx(_components.code, {
            children: "cameraState"
          })
        }), ": The state of the view, including the coordinates of the center, the width and height, and the scale factor of the view."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/api-reference/whiteboard/web",
          children: _jsx(_components.code, {
            children: "roomMember"
          })
        }), ".: The information of all the users in interactive mode (those who have read and write permission) in the room."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/api-reference/whiteboard/web",
          children: _jsx(_components.code, {
            children: "sceneState"
          })
        }), ": The information of the current scene, including the name, index, and path of the scene. By modifying the ", _jsx(_components.code, {
          children: "sceneState"
        }), " value of the current room, you can switch the scene. See ", _jsx(_components.a, {
          href: "../display-files-and-manage-scenes/scenes/manage-scenes.mdx",
          children: "Manage Scenes"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "/en/api-reference/whiteboard/web",
          children: _jsx(_components.code, {
            children: "globalState"
          })
        }), ": The global state of the room. You can use ", _jsx(_components.code, {
          children: "globalState"
        }), " to implement custom business logic."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "To get the current room states, you can either read the value of each field, or register a callback to listen for their changes."
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsxs(_components.p, {
      children: ["To follow the procedure on this page, ensure that you have integrated the Whiteboard SDK into your project and implemented joining a room. For details, see ", _jsx(_components.a, {
        href: "../set-up-and-build-your-first-app/get-started-uikit/#join-the-whiteboard-room",
        children: "Join the Whiteboard Room"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["The following section extends the ", _jsx(_components.a, {
        href: "../set-up-and-build-your-first-app/get-started-sdk/#join-the-interactive-whiteboard-room-from-your-app-client",
        children: "Join a Whiteboard Room"
      }), " sample code to show the implementation of getting or listening for room states."]
    }), `
`, _jsx(_components.h2, {
      id: "implement-room-state-management",
      children: "Implement room state management"
    }), `
`, _jsx(_components.h3, {
      id: "read-the-value-of-a-state",
      children: "Read the value of a state"
    }), `
`, _jsxs(_components.p, {
      children: ["After successfully joining a whiteboard room, to get a room state, you can directly read the corresponding field in the ", _jsx(_components.code, {
        children: "state"
      }), " property of the ", _jsx(_components.code, {
        children: "room"
      }), " object."]
    }), `
`, _jsxs(_components.p, {
      children: ["For example, to get information about the current scene (", _jsx(_components.code, {
        children: "sceneState"
      }), ") after joining a room, add the following line to the ", _jsx(_components.code, {
        children: "joinWhiteboard.js"
      }), " file:"]
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "whiteWebSdk."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "joinRoom"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(joinRoomParams)."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "then"
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
              children: "function"
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
              children: "room"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") {"
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
              children: "    room."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "bindHtmlElement"
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
              children: "getElementById"
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
              children: '"whiteboard"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "));"
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
              children: "    // Add the following code to get the path, name, and index of the current scene."
            })
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
              children: " sceneState "
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
              children: " room.state.sceneState;"
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
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"scene path:"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", sceneState.scenePath);"
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
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"scene name:"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", sceneState.sceneName);"
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
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"scene index:"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", sceneState.index);"
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
              children: "})."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "catch"
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
              children: "function"
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
              children: "err"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") {"
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
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "error"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(err);"
            })]
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
`, _jsxs(_components.p, {
      children: ["Save the changes, refresh the ", _jsx(_components.code, {
        children: "index.html"
      }), " page, and open the console of your browser. You can see the following information on the console:"]
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
              children: "["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "White"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "] join room success"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "scene path: /init"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "scene name: init"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "scene index: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "use-callbacks-to-listen-for-state-changes",
      children: "Use callbacks to listen for state changes"
    }), `
`, _jsxs(_components.p, {
      children: ["The Whiteboard SDK provides the ", _jsx(_components.code, {
        children: "onRoomStateChanged"
      }), " method in ", _jsx(_components.code, {
        children: "RoomCallbacks"
      }), " to report room state changes. You can register this callback when calling ", _jsx(_components.code, {
        children: "joinRoom"
      }), " to listen for room state changes in real time."]
    }), `
`, _jsxs(_components.p, {
      children: ["For example, to listen for changes of ", _jsx(_components.code, {
        children: "broadcastState"
      }), ", you can add the following code to the ", _jsx(_components.code, {
        children: "joinWhiteboard.js"
      }), " file:"]
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
              children: "var"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " whiteWebSdk "
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
              children: " WhiteWebSdk"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "({"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    appIdentifier: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"RMmxxxQ"'
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "var"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " joinRoomParams "
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    uuid: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"a7exxxa69"'
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
              children: "    roomToken: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"NETLESSROOM_YWs9xxxNjk"'
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
              children: "};"
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
              children: "// Define the callback to be listened for."
            })
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
              children: " roomCallbacks "
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "    onRoomStateChanged"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onStateChanged"
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
              children: "modifyState"
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
              children: "    // When the broadcastState field changes, output the current broadcastState."
            })
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
              children: " (modifyState.broadcastState) {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        console."
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
              children: "(modifyState);"
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
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "        // Ignore the changes of other fields."
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
              children: " },"
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
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Register the callback when joining a room."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "whiteWebSdk."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "joinRoom"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(joinRoomParams, roomCallbacks)."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "then"
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
              children: "function"
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
              children: "room"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") {"
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
              children: "    room."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "bindHtmlElement"
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
              children: "getElementById"
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
              children: '"whiteboard"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "));"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "    // Set the view mode of the user as broadcaster."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    room."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "setViewMode"
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
              children: '"broadcaster"'
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "})."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "catch"
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
              children: "function"
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
              children: "err"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") {"
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
              children: "    console."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "error"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(err);"
            })]
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
`, _jsxs(_components.p, {
      children: ["Save the changes, refresh the ", _jsx(_components.code, {
        children: "index.html"
      }), " page, and open the console of your browser. You can see the following information on the console:"]
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "broadcasterId:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 409"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "mode:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "broadcaster"'
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "api-reference",
      children: "API reference"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/whiteboard/web",
          children: _jsx(_components.code, {
            children: "roomState"
          })
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/whiteboard/web",
          children: _jsx(_components.code, {
            children: "joinRoom"
          })
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/whiteboard/web",
          children: _jsx(_components.code, {
            children: "RoomCallbacks"
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
