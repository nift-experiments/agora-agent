import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Record a class",
  description: "Best practice to implement the recording feature in Flexible Classroom"
};
export let _markdown = `

This page introduces some best practices that you need to keep in mind when you implement the recording feature in Flexible Classroom. These best practices can help to ensure the reliability of the recording and improve the quality of the recorded files.

## The process of implementing the recording feature [#the-process-of-implementing-the-recording-feature]

In Flexible Classroom, users normally start recording manually. The process is as follows:

1. In the Flexible Classroom client, click the recording button, and click **Confirm** to start recording, as shown in the following screenshot:

   ![start recording confirm](https://assets-docs.agora.io/images/flexible-classroom/flexible-classroom-start-recording.png)

2. The client notifies the server to start recording.

3. The server opens a browser window and navigates to the address specified in \`recordURL\` configured in \`launchOption\`.

4. The server starts recording.

If you want the recording to start automatically, you can listen for the event of class starting on the server side, and call [Set the recording state](/en/api-reference/api-ref/flexible-classroom/classroom-rest-api) to start automatic recording.

If you want to implement recording on your own, you can refer to the following diagram for the process. The steps highlighted in purple need to be implemented by you.

![implement recording on your own](https://assets-docs.agora.io/images/flexible-classroom/flexible-classroom-recording-process.png)

When you deploy the web page to be recorded into your CDN, you can use the template HTML file \`templates/record_page_prod.html\` provided by Agora in the [Flexible-Classroom-Desktop](https://github.com/AgoraIO-Community/flexible-classroom-desktop) GitHub repository.

![record\\_page\\_prod.html](https://assets-docs.agora.io/images/flexible-classroom/flexible-classroom-recording-template.png)

## Start the recording [#start-the-recording]

Whether you initiate the recording on the client or server, call [Set the recording state](/en/api-reference/api-ref/flexible-classroom/classroom-rest-api). When calling this method, pay attention to the following parameters:

* \`mode\`: Set this parameter as \`web\` to enable [web page recording](/en/realtime-media/cloud-recording/build/start-a-recording/webpage-mode).
* \`rootUrl\`: The root address of the web page to be recorded. The Flexible Classroom cloud service automatically gets the full address of the web page to be recorded by appending \`roomUuid\`, \`roomType\`, and other parameters after the root address. You need to extract this information from the URL and pass it in when calling the [launch](/en/api-reference/api-ref/flexible-classroom/classroom-sdk) method.
* \`retryTimeout\`: The amount of time (seconds) that the Flexible Classroom cloud service waits between attempts to begin recording. The Flexible Classroom cloud service retries a maximum of two times.

Sample code:

\`\`\`json
{
    "mode": "web",
    "webRecordConfig": {
        "rootUrl":"https://xxx.yyy.zzz",
    },
    ...
    "retryTimeout": 60
}
\`\`\`

After setting \`retryTimeout\`, when calling the [launch](/en/api-reference/api-ref/flexible-classroom/classroom-sdk) method, you need to set the \`listener\` parameter to listen for the \`1\` event, which represents that the page has been loaded. When this event is triggered, you need to call the following method to inform the Flexible Classroom cloud service. If the Flexible Classroom cloud service does not receive this notification within \`retryTimeout\`, it retries the recording.

* Prototype

  * Method: PUT
  * Path: \`api.agora.io/edu/apps/{appId}/v2/rooms/\\{roomUUid}/records/ready\`
  * A successful method call returns the following response:

    \`\`\`json
    status: 200,
    body:{
        "msg": "Success",
        "code": 0,
        "ts": 1610167740309
    }
    \`\`\`

    The following sample code shows this logic:

    \`\`\`typescript
    AgoraEduSDK.launch(document.querySelector(\`#\${this.elem.id}\`), {
        ...
        listener: (evt) => {
            if ( evt === 1 ) {
            // Send a web request to notify the server side that the recording page was fully loaded.
            }
        }
    })
    \`\`\`

    If you use a version earlier than v1.1.5, you also need to set \`params\` to monitor the whiteboard loading state. The following sample code shows this logic:

    \`\`\`typescript
    AgoraEduSDK.launch(document.querySelector(\`#\${this.elem.id}\`), {
        ...
        listener: (evt, params) => {
            if ( evt === 1 && params.type === "whiteboard") {
            // Send a web request to notify the server side that the recording page was fully loaded.
            }
        }
    })
    \`\`\`

## Get the recording state [#get-the-recording-state]

After starting the recording, the Flexible Classroom cloud service generates an event to indicate the [recording state change](/en/api-reference/api-ref/flexible-classroom/classroom-rest-api). You can get the recording state by calling [Query a specified event](/en/api-reference/api-ref/flexible-classroom/classroom-rest-api) or [Get classroom events](/en/api-reference/api-ref/flexible-classroom/classroom-rest-api). Pay attention to the \`reason\` field in the recording state change event:

* \`1\`: Start the recording normally.
* \`2\`: Stop the recording normally.
* \`3\`: Start the recording after retry.
* \`4\`: Time out. Wait for retry.
* \`5\`: Exit the recording when the number of retries reaches the upper limit.

The clients also receive callbacks that indicate the recording state change in [room properties](/en/api-reference/api-ref/flexible-classroom/classroom-rest-api). You can further implement your own logic based on the recording state change.

## Remove the white screen at the beginning of the recorded file [#remove-the-white-screen-at-the-beginning-of-the-recorded-file]

It takes a while for the recording server to load the web page, but the file slicing begins before the loading finishes. As a result, there may be a period of white screen at the beginning of the recorded file. To remove the white screen, do the following:

1. Before the class starts, call [Set the recording state](/en/api-reference/api-ref/flexible-classroom/classroom-rest-api), and set \`onhold\` as \`true\`. The Flexible Classroom cloud service pauses the recording immediately after the recording task is initiated. The recording server opens and renders the web page, but does not generate a slice file. The following sample code shows this logic:

   \`\`\`json
   {
       "mode": "web",
       "webRecordConfig": {
           "url": "https://xxx.yyy.zzz",
           "onhold": true
       }
   }
   \`\`\`

2. At least 60 seconds later, call [Update the recording configurations](/en/api-reference/api-ref/flexible-classroom/classroom-rest-api) and set the \`onhold\` parameter as \`false\` to start the recording and file slicing. The following sample code shows this logic:

   \`\`\`json
   {
       "webRecordConfig": {
           "onhold": false
       }
   }
   \`\`\`

## Improve the video clarity when the recorded content is a shared screen [#improve-the-video-clarity-when-the-recorded-content-is-a-shared-screen]

In use-cases where the recorded content is a shared screen or whiteboard, if you have high requirements for video clarity, you can set the following parameters when calling [Set the recording state](/en/api-reference/api-ref/flexible-classroom/classroom-rest-api):

* Set \`videoWidth\` as 1920.
* Set \`videoHeight\` as 1080.
* Set \`videoBitrate\` as 2000.

Request body:

\`\`\`json
{
    "mode": "web",
    "webRecordConfig": {
        "url": "https://xxx.yyy.zzz",
        "videoWidth": 1920,
        "videoHeight": 1080,
        "videoBitrate": 2000
    }
}
\`\`\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page introduces some best practices that you need to keep in mind when you implement the recording feature in Flexible Classroom. These best practices can help to ensure the reliability of the recording and improve the quality of the recorded files."
  }, {
    heading: "the-process-of-implementing-the-recording-feature",
    content: "In Flexible Classroom, users normally start recording manually. The process is as follows:"
  }, {
    heading: "the-process-of-implementing-the-recording-feature",
    content: "In the Flexible Classroom client, click the recording button, and click **Confirm** to start recording, as shown in the following screenshot:"
  }, {
    heading: "the-process-of-implementing-the-recording-feature",
    content: "The client notifies the server to start recording."
  }, {
    heading: "the-process-of-implementing-the-recording-feature",
    content: "The server opens a browser window and navigates to the address specified in `recordURL` configured in `launchOption`."
  }, {
    heading: "the-process-of-implementing-the-recording-feature",
    content: "The server starts recording."
  }, {
    heading: "the-process-of-implementing-the-recording-feature",
    content: "If you want the recording to start automatically, you can listen for the event of class starting on the server side, and call Set the recording state to start automatic recording."
  }, {
    heading: "the-process-of-implementing-the-recording-feature",
    content: "If you want to implement recording on your own, you can refer to the following diagram for the process. The steps highlighted in purple need to be implemented by you."
  }, {
    heading: "the-process-of-implementing-the-recording-feature",
    content: "When you deploy the web page to be recorded into your CDN, you can use the template HTML file `templates/record_page_prod.html` provided by Agora in the Flexible-Classroom-Desktop GitHub repository."
  }, {
    heading: "start-the-recording",
    content: "Whether you initiate the recording on the client or server, call Set the recording state. When calling this method, pay attention to the following parameters:"
  }, {
    heading: "start-the-recording",
    content: "`mode`: Set this parameter as `web` to enable web page recording."
  }, {
    heading: "start-the-recording",
    content: "`rootUrl`: The root address of the web page to be recorded. The Flexible Classroom cloud service automatically gets the full address of the web page to be recorded by appending `roomUuid`, `roomType`, and other parameters after the root address. You need to extract this information from the URL and pass it in when calling the launch method."
  }, {
    heading: "start-the-recording",
    content: "`retryTimeout`: The amount of time (seconds) that the Flexible Classroom cloud service waits between attempts to begin recording. The Flexible Classroom cloud service retries a maximum of two times."
  }, {
    heading: "start-the-recording",
    content: "Sample code:"
  }, {
    heading: "start-the-recording",
    content: "After setting `retryTimeout`, when calling the launch method, you need to set the `listener` parameter to listen for the `1` event, which represents that the page has been loaded. When this event is triggered, you need to call the following method to inform the Flexible Classroom cloud service. If the Flexible Classroom cloud service does not receive this notification within `retryTimeout`, it retries the recording."
  }, {
    heading: "start-the-recording",
    content: "Prototype"
  }, {
    heading: "start-the-recording",
    content: "Method: PUT"
  }, {
    heading: "start-the-recording",
    content: "Path: `api.agora.io/edu/apps/{appId}/v2/rooms/\\{roomUUid}/records/ready`"
  }, {
    heading: "start-the-recording",
    content: "A successful method call returns the following response:"
  }, {
    heading: "start-the-recording",
    content: "The following sample code shows this logic:"
  }, {
    heading: "start-the-recording",
    content: "If you use a version earlier than v1.1.5, you also need to set `params` to monitor the whiteboard loading state. The following sample code shows this logic:"
  }, {
    heading: "get-the-recording-state",
    content: "After starting the recording, the Flexible Classroom cloud service generates an event to indicate the recording state change. You can get the recording state by calling Query a specified event or Get classroom events. Pay attention to the `reason` field in the recording state change event:"
  }, {
    heading: "get-the-recording-state",
    content: "`1`: Start the recording normally."
  }, {
    heading: "get-the-recording-state",
    content: "`2`: Stop the recording normally."
  }, {
    heading: "get-the-recording-state",
    content: "`3`: Start the recording after retry."
  }, {
    heading: "get-the-recording-state",
    content: "`4`: Time out. Wait for retry."
  }, {
    heading: "get-the-recording-state",
    content: "`5`: Exit the recording when the number of retries reaches the upper limit."
  }, {
    heading: "get-the-recording-state",
    content: "The clients also receive callbacks that indicate the recording state change in room properties. You can further implement your own logic based on the recording state change."
  }, {
    heading: "remove-the-white-screen-at-the-beginning-of-the-recorded-file",
    content: "It takes a while for the recording server to load the web page, but the file slicing begins before the loading finishes. As a result, there may be a period of white screen at the beginning of the recorded file. To remove the white screen, do the following:"
  }, {
    heading: "remove-the-white-screen-at-the-beginning-of-the-recorded-file",
    content: "Before the class starts, call Set the recording state, and set `onhold` as `true`. The Flexible Classroom cloud service pauses the recording immediately after the recording task is initiated. The recording server opens and renders the web page, but does not generate a slice file. The following sample code shows this logic:"
  }, {
    heading: "remove-the-white-screen-at-the-beginning-of-the-recorded-file",
    content: "At least 60 seconds later, call Update the recording configurations and set the `onhold` parameter as `false` to start the recording and file slicing. The following sample code shows this logic:"
  }, {
    heading: "improve-the-video-clarity-when-the-recorded-content-is-a-shared-screen",
    content: "In use-cases where the recorded content is a shared screen or whiteboard, if you have high requirements for video clarity, you can set the following parameters when calling Set the recording state:"
  }, {
    heading: "improve-the-video-clarity-when-the-recorded-content-is-a-shared-screen",
    content: "Set `videoWidth` as 1920."
  }, {
    heading: "improve-the-video-clarity-when-the-recorded-content-is-a-shared-screen",
    content: "Set `videoHeight` as 1080."
  }, {
    heading: "improve-the-video-clarity-when-the-recorded-content-is-a-shared-screen",
    content: "Set `videoBitrate` as 2000."
  }, {
    heading: "improve-the-video-clarity-when-the-recorded-content-is-a-shared-screen",
    content: "Request body:"
  }],
  headings: [{
    id: "the-process-of-implementing-the-recording-feature",
    content: "The process of implementing the recording feature"
  }, {
    id: "start-the-recording",
    content: "Start the recording"
  }, {
    id: "get-the-recording-state",
    content: "Get the recording state"
  }, {
    id: "remove-the-white-screen-at-the-beginning-of-the-recorded-file",
    content: "Remove the white screen at the beginning of the recorded file"
  }, {
    id: "improve-the-video-clarity-when-the-recorded-content-is-a-shared-screen",
    content: "Improve the video clarity when the recorded content is a shared screen"
  }]
};
export let toc = [{
  depth: 2,
  url: "#the-process-of-implementing-the-recording-feature",
  title: _jsx(_Fragment, {
    children: "The process of implementing the recording feature"
  })
}, {
  depth: 2,
  url: "#start-the-recording",
  title: _jsx(_Fragment, {
    children: "Start the recording"
  })
}, {
  depth: 2,
  url: "#get-the-recording-state",
  title: _jsx(_Fragment, {
    children: "Get the recording state"
  })
}, {
  depth: 2,
  url: "#remove-the-white-screen-at-the-beginning-of-the-recorded-file",
  title: _jsx(_Fragment, {
    children: "Remove the white screen at the beginning of the recorded file"
  })
}, {
  depth: 2,
  url: "#improve-the-video-clarity-when-the-recorded-content-is-a-shared-screen",
  title: _jsx(_Fragment, {
    children: "Improve the video clarity when the recorded content is a shared screen"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page introduces some best practices that you need to keep in mind when you implement the recording feature in Flexible Classroom. These best practices can help to ensure the reliability of the recording and improve the quality of the recorded files."
    }), `
`, _jsx(_components.h2, {
      id: "the-process-of-implementing-the-recording-feature",
      children: "The process of implementing the recording feature"
    }), `
`, _jsx(_components.p, {
      children: "In Flexible Classroom, users normally start recording manually. The process is as follows:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the Flexible Classroom client, click the recording button, and click ", _jsx(_components.strong, {
            children: "Confirm"
          }), " to start recording, as shown in the following screenshot:"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/flexible-classroom/flexible-classroom-start-recording.png",
            alt: "start recording confirm"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "The client notifies the server to start recording."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["The server opens a browser window and navigates to the address specified in ", _jsx(_components.code, {
            children: "recordURL"
          }), " configured in ", _jsx(_components.code, {
            children: "launchOption"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "The server starts recording."
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["If you want the recording to start automatically, you can listen for the event of class starting on the server side, and call ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/flexible-classroom/classroom-rest-api",
        children: "Set the recording state"
      }), " to start automatic recording."]
    }), `
`, _jsx(_components.p, {
      children: "If you want to implement recording on your own, you can refer to the following diagram for the process. The steps highlighted in purple need to be implemented by you."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/flexible-classroom/flexible-classroom-recording-process.png",
        alt: "implement recording on your own"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["When you deploy the web page to be recorded into your CDN, you can use the template HTML file ", _jsx(_components.code, {
        children: "templates/record_page_prod.html"
      }), " provided by Agora in the ", _jsx(_components.a, {
        href: "https://github.com/AgoraIO-Community/flexible-classroom-desktop",
        children: "Flexible-Classroom-Desktop"
      }), " GitHub repository."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/flexible-classroom/flexible-classroom-recording-template.png",
        alt: "record_page_prod.html"
      })
    }), `
`, _jsx(_components.h2, {
      id: "start-the-recording",
      children: "Start the recording"
    }), `
`, _jsxs(_components.p, {
      children: ["Whether you initiate the recording on the client or server, call ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/flexible-classroom/classroom-rest-api",
        children: "Set the recording state"
      }), ". When calling this method, pay attention to the following parameters:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "mode"
        }), ": Set this parameter as ", _jsx(_components.code, {
          children: "web"
        }), " to enable ", _jsx(_components.a, {
          href: "/en/realtime-media/cloud-recording/build/start-a-recording/webpage-mode",
          children: "web page recording"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "rootUrl"
        }), ": The root address of the web page to be recorded. The Flexible Classroom cloud service automatically gets the full address of the web page to be recorded by appending ", _jsx(_components.code, {
          children: "roomUuid"
        }), ", ", _jsx(_components.code, {
          children: "roomType"
        }), ", and other parameters after the root address. You need to extract this information from the URL and pass it in when calling the ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/flexible-classroom/classroom-sdk",
          children: "launch"
        }), " method."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "retryTimeout"
        }), ": The amount of time (seconds) that the Flexible Classroom cloud service waits between attempts to begin recording. The Flexible Classroom cloud service retries a maximum of two times."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Sample code:"
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
              children: '    "mode"'
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
              children: '"web"'
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
              children: '    "webRecordConfig"'
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
              children: '        "rootUrl"'
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
              children: '"https://xxx.yyy.zzz"'
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
              children: "    },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "    ..."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "retryTimeout"'
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
              children: "60"
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
      children: ["After setting ", _jsx(_components.code, {
        children: "retryTimeout"
      }), ", when calling the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/flexible-classroom/classroom-sdk",
        children: "launch"
      }), " method, you need to set the ", _jsx(_components.code, {
        children: "listener"
      }), " parameter to listen for the ", _jsx(_components.code, {
        children: "1"
      }), " event, which represents that the page has been loaded. When this event is triggered, you need to call the following method to inform the Flexible Classroom cloud service. If the Flexible Classroom cloud service does not receive this notification within ", _jsx(_components.code, {
        children: "retryTimeout"
      }), ", it retries the recording."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Prototype"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Method: PUT"
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Path: ", _jsx(_components.code, {
                children: "api.agora.io/edu/apps/{appId}/v2/rooms/\\{roomUUid}/records/ready"
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "A successful method call returns the following response:"
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
                      children: "status: "
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
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "body:{"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: '    "msg"'
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
                      children: '"Success"'
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
                      children: '    "code"'
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
                      children: '    "ts"'
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
                      children: "1610167740309"
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
              children: "The following sample code shows this logic:"
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
                      children: "`#${"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "this"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "elem"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "id"
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
                      children: "), {"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "    ..."
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    listener: ("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: "evt"
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
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "        if"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " ( evt "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "==="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 1"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " ) {"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "        // Send a web request to notify the server side that the recording page was fully loaded."
                    })
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
                      children: "})"
                    })
                  })]
                })
              })
            }), `
`, _jsxs(_components.p, {
              children: ["If you use a version earlier than v1.1.5, you also need to set ", _jsx(_components.code, {
                children: "params"
              }), " to monitor the whiteboard loading state. The following sample code shows this logic:"]
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
                      children: "`#${"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "this"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "elem"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "id"
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
                      children: "), {"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "    ..."
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    listener: ("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
                      },
                      children: "evt"
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
                      children: "params"
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
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "        if"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " ( evt "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "==="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 1"
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
                      children: " params.type "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "==="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: ' "whiteboard"'
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
                      children: "        // Send a web request to notify the server side that the recording page was fully loaded."
                    })
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
                      children: "})"
                    })
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
`]
    }), `
`, _jsx(_components.h2, {
      id: "get-the-recording-state",
      children: "Get the recording state"
    }), `
`, _jsxs(_components.p, {
      children: ["After starting the recording, the Flexible Classroom cloud service generates an event to indicate the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/flexible-classroom/classroom-rest-api",
        children: "recording state change"
      }), ". You can get the recording state by calling ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/flexible-classroom/classroom-rest-api",
        children: "Query a specified event"
      }), " or ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/flexible-classroom/classroom-rest-api",
        children: "Get classroom events"
      }), ". Pay attention to the ", _jsx(_components.code, {
        children: "reason"
      }), " field in the recording state change event:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "1"
        }), ": Start the recording normally."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "2"
        }), ": Stop the recording normally."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "3"
        }), ": Start the recording after retry."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "4"
        }), ": Time out. Wait for retry."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "5"
        }), ": Exit the recording when the number of retries reaches the upper limit."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["The clients also receive callbacks that indicate the recording state change in ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/flexible-classroom/classroom-rest-api",
        children: "room properties"
      }), ". You can further implement your own logic based on the recording state change."]
    }), `
`, _jsx(_components.h2, {
      id: "remove-the-white-screen-at-the-beginning-of-the-recorded-file",
      children: "Remove the white screen at the beginning of the recorded file"
    }), `
`, _jsx(_components.p, {
      children: "It takes a while for the recording server to load the web page, but the file slicing begins before the loading finishes. As a result, there may be a period of white screen at the beginning of the recorded file. To remove the white screen, do the following:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Before the class starts, call ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/flexible-classroom/classroom-rest-api",
            children: "Set the recording state"
          }), ", and set ", _jsx(_components.code, {
            children: "onhold"
          }), " as ", _jsx(_components.code, {
            children: "true"
          }), ". The Flexible Classroom cloud service pauses the recording immediately after the recording task is initiated. The recording server opens and renders the web page, but does not generate a slice file. The following sample code shows this logic:"]
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
                  children: '    "mode"'
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
                  children: '"web"'
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
                  children: '    "webRecordConfig"'
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
                  children: '        "url"'
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
                  children: '"https://xxx.yyy.zzz"'
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
                  children: '        "onhold"'
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
          children: ["At least 60 seconds later, call ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/flexible-classroom/classroom-rest-api",
            children: "Update the recording configurations"
          }), " and set the ", _jsx(_components.code, {
            children: "onhold"
          }), " parameter as ", _jsx(_components.code, {
            children: "false"
          }), " to start the recording and file slicing. The following sample code shows this logic:"]
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
                  children: '    "webRecordConfig"'
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
                  children: '        "onhold"'
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
                  children: "false"
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
`]
    }), `
`, _jsx(_components.h2, {
      id: "improve-the-video-clarity-when-the-recorded-content-is-a-shared-screen",
      children: "Improve the video clarity when the recorded content is a shared screen"
    }), `
`, _jsxs(_components.p, {
      children: ["In use-cases where the recorded content is a shared screen or whiteboard, if you have high requirements for video clarity, you can set the following parameters when calling ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/flexible-classroom/classroom-rest-api",
        children: "Set the recording state"
      }), ":"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Set ", _jsx(_components.code, {
          children: "videoWidth"
        }), " as 1920."]
      }), `
`, _jsxs(_components.li, {
        children: ["Set ", _jsx(_components.code, {
          children: "videoHeight"
        }), " as 1080."]
      }), `
`, _jsxs(_components.li, {
        children: ["Set ", _jsx(_components.code, {
          children: "videoBitrate"
        }), " as 2000."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Request body:"
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
              children: '    "mode"'
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
              children: '"web"'
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
              children: '    "webRecordConfig"'
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
              children: '        "url"'
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
              children: '"https://xxx.yyy.zzz"'
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
              children: '        "videoWidth"'
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
              children: "1920"
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
              children: '        "videoHeight"'
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
              children: "1080"
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
              children: '        "videoBitrate"'
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
              children: "2000"
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
