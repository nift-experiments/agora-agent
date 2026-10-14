import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Proctor exams online",
  description: "Proctor exams in real time"
};
export let _markdown = `

Online proctoring refers to supervision of examinees through their web cameras, microphones, and by
sharing their screens during online exams. This can be useful in the following cases:

* College exams
* Professional/certification exams
* Recruitment

Flexible Classroom provides Proctor SDK to implement such supervision. Agora recommends one examiner proctoring 25 to 50 examinees simultaneously. This page illustrates how the proctoring feature works for an examiner and an examinee using the [Flexible Classroom web demo](/en/realtime-media/flexible-classroom/quickstart).

## Prerequisites [#prerequisites]

* Examiner:
  * Appropriate test equipment:
    * Desktop computer, laptop, tablet, or a mobile device
    * Camera and microphone to broadcast to all examinees and transmit video
    * Speaker to monitor the sound of the examinees' environment
    * Chrome browser
  * Stable network connection: The device needs to monitor 6 students, 3 video streams per each at the same time. The recommended downlink bandwidth is 100M or more

* Examinee:
  * Appropriate test equipment:
    * Desktop computer, laptop, tablet, or a mobile device
    * Camera and microphone to monitor the examinee's surrounding environment
    * Chrome browser
  * Stable network connection: The device needs to send a shared screen video at 1080p and a video stream at 240p at the same time. The recommended upstream bandwidth is 20M or more

## Platform support [#platform-support]

* Examiner
  * Web
* Examinee
  * Main: Web
  * Secondary: Android, iOS. The secondary camera function is still in the development stage

## Features [#features]

Available features area:

| Role               | Feature                                    | Example                                                                                                                                  |
| :----------------- | :----------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| Examiner           | Broadcast to all                           | The examiner initiates an all-hands call to examinees                                                                                    |
| Examiner           | Examinee real-time monitoring              | Examinees are monitored in real time via their main camera, secondary camera, and screen images                                          |
| Examiner           | Surveillance video wall                    | The examiner monitors the examinees' behavior via their video streams presented on the examiner's screen                                 |
| Examiner           | Examinee video playback                    | The examiner records and plays back video taken via the main camera, secondary camera, and screen images of the examinee                 |
| Examiner           | Examiner/AI abnormal exam situation record | The examiner *manually* records or the AI *automatically* records the abnormal situation of the exam (you need to implement it yourself) |
| Examiner, examinee | Hardware device detection                  | Microphone, camera, and speakers of the examiner and examinees are detected                                                              |
| Examinee           | Screen sharing                             | Examinees share their screens to prevent cheating. If an examinee turns off screen sharing during the test, the test is suspended        |
| Examinee           | Main camera monitoring                     | Examinee is monitored via their main device camera                                                                                       |
| Examinee           | Secondary camera monitoring                | Examinee is monitored via their mobile device camera                                                                                     |
| Examinee           | Online test questions                      | Examinees answer exam questions presented in the classroom                                                                               |

## How to use online proctoring [#how-to-use-online-proctoring]

Examiners supervise examinees during an exam and can pay special attention to those who are suspected of cheating.
Examinees take the exam in a fully supervised environment that includes identity verification, streams from primary and secondary camera with sound, and
screen sharing.

### Examiner role [#examiner-role]

Take the following steps to join and proctor an exam:

1. Open the [Flexible Classroom web demo](/en/realtime-media/flexible-classroom/quickstart) and click **Create** to create a room.

   ![flexible\\_classroom\\_web\\_demo](https://assets-docs.agora.io/images/flexible-classroom/fc_web_demo.png)

2. Enter the classroom name, class start and end time, then select **Online Proctoring** in **Class mode** and click **Create**.

   ![create\\_classroom\\_web\\_demo](https://assets-docs.agora.io/images/flexible-classroom/create_classroom_web_demo.png)

   In the Flexible Classroom demo, the room creator holds the examiner role by default. You have now successfully created a classroom under the proctoring use-case.

3. Test your hardware before entering the room to ensure that you can monitor the exam.

   ![online\\_proctoring](https://assets-docs.agora.io/images/flexible-classroom/online_proctoring.png)

4. Once hardware is successfully tested, click **Next step** to enter the room. After you enter the room, the exam starts
   automatically at the preset time. You can also click **Start Exam** to start the exam manually.

5. During the exam you can see monitor screens, or surveillance walls, for examinees. You can do the following:

   * Switch the layout and filter surveillance walls.

   ![start\\_exam](https://assets-docs.agora.io/images/flexible-classroom/start_exam.png)

   * Broadcast video and audio to all examinees.

   ![broadcast\\_video\\_audio](https://assets-docs.agora.io/images/flexible-classroom/broadcast_video_audio.png)

   * Click the surveillance wall of an examinee to enter the monitoring details page.

   ![monitoring\\_details](https://assets-docs.agora.io/images/flexible-classroom/monitoring_details.png)

   On the monitoring details page, you can see the recording view and the monitoring view:

   * The recording view shows the examinee's video and screen recordings from the start of the exam to the current time. You can drag the time axis to jump to a specific time, or click a submitted abnormal event to jump to the time point of the event.

   * The monitoring view shows the real-time video and screen sharing of the examinee. If the examinee demonstrates abnormal exam behavior (cheating), you select the corresponding event and submit it. Preset abnormal events include multiple people on camera, cheat sheets, identity verification, and use of electronic devices. Abnormal events are customizable.

   If there are examinees that you suspect of cheating without solid evidence, you can pay closer attention to them. To do so,
   click the focus icon on the monitoring details page to add them to the corresponding list. You can then filter surveillance
   walls in the main proctoring page to show only those that require your special attention.

The test ends automatically when the test time is over, or you can manually click **End Test** to end the test in advance.

### Examinee role [#examinee-role]

Take the following steps to join and take an exam in a supervised environment:

1. Open the [Flexible Classroom web demo](/en/realtime-media/flexible-classroom/quickstart) and click **Join**.

   ![join\\_classroom](https://assets-docs.agora.io/images/flexible-classroom/join_classroom.png)

2. Enter the room ID, select the **Student** role, and click **Join**.

   ![enter\\_name](https://assets-docs.agora.io/images/flexible-classroom/enter_name.png)

   In the Flexible Classroom demo, a room joiner holds the examinee role by default.

3. Test your device capabilities before entering the room.

   ![join\\_exam](https://assets-docs.agora.io/images/flexible-classroom/join_exam.png)

4. Once your hardware is successfully tested, click **Join Exam**. After entering the classroom, you see the exam paper,
   the video from your main and secondary camera, and the video of your shared screen. You also see the examiner's video
   when they broadcast.

   ![take\\_exam](https://assets-docs.agora.io/images/flexible-classroom/take_exam.png)

   Your exam paper is automatically displayed at the beginning of the exam and automatically submitted at the end of the exam,
   unless you submit it manually before that.

5. When the exam is complete, click **Leave**.

## Reference [#reference]

This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

### API Reference [#api-reference]

* [Proctor SDK](/en/api-reference/api-ref/flexible-classroom/proctor-sdk)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: `Online proctoring refers to supervision of examinees through their web cameras, microphones, and by
sharing their screens during online exams. This can be useful in the following cases:`
  }, {
    heading: undefined,
    content: "College exams"
  }, {
    heading: undefined,
    content: "Professional/certification exams"
  }, {
    heading: undefined,
    content: "Recruitment"
  }, {
    heading: undefined,
    content: "Flexible Classroom provides Proctor SDK to implement such supervision. Agora recommends one examiner proctoring 25 to 50 examinees simultaneously. This page illustrates how the proctoring feature works for an examiner and an examinee using the Flexible Classroom web demo."
  }, {
    heading: "prerequisites",
    content: "Examiner:"
  }, {
    heading: "prerequisites",
    content: "Appropriate test equipment:"
  }, {
    heading: "prerequisites",
    content: "Desktop computer, laptop, tablet, or a mobile device"
  }, {
    heading: "prerequisites",
    content: "Camera and microphone to broadcast to all examinees and transmit video"
  }, {
    heading: "prerequisites",
    content: "Speaker to monitor the sound of the examinees' environment"
  }, {
    heading: "prerequisites",
    content: "Chrome browser"
  }, {
    heading: "prerequisites",
    content: "Stable network connection: The device needs to monitor 6 students, 3 video streams per each at the same time. The recommended downlink bandwidth is 100M or more"
  }, {
    heading: "prerequisites",
    content: "Examinee:"
  }, {
    heading: "prerequisites",
    content: "Appropriate test equipment:"
  }, {
    heading: "prerequisites",
    content: "Desktop computer, laptop, tablet, or a mobile device"
  }, {
    heading: "prerequisites",
    content: "Camera and microphone to monitor the examinee's surrounding environment"
  }, {
    heading: "prerequisites",
    content: "Chrome browser"
  }, {
    heading: "prerequisites",
    content: "Stable network connection: The device needs to send a shared screen video at 1080p and a video stream at 240p at the same time. The recommended upstream bandwidth is 20M or more"
  }, {
    heading: "platform-support",
    content: "Examiner"
  }, {
    heading: "platform-support",
    content: "Web"
  }, {
    heading: "platform-support",
    content: "Examinee"
  }, {
    heading: "platform-support",
    content: "Main: Web"
  }, {
    heading: "platform-support",
    content: "Secondary: Android, iOS. The secondary camera function is still in the development stage"
  }, {
    heading: "features",
    content: "Available features area:"
  }, {
    heading: "features",
    content: "Role"
  }, {
    heading: "features",
    content: "Feature"
  }, {
    heading: "features",
    content: "Example"
  }, {
    heading: "features",
    content: "Examiner"
  }, {
    heading: "features",
    content: "Broadcast to all"
  }, {
    heading: "features",
    content: "The examiner initiates an all-hands call to examinees"
  }, {
    heading: "features",
    content: "Examiner"
  }, {
    heading: "features",
    content: "Examinee real-time monitoring"
  }, {
    heading: "features",
    content: "Examinees are monitored in real time via their main camera, secondary camera, and screen images"
  }, {
    heading: "features",
    content: "Examiner"
  }, {
    heading: "features",
    content: "Surveillance video wall"
  }, {
    heading: "features",
    content: "The examiner monitors the examinees' behavior via their video streams presented on the examiner's screen"
  }, {
    heading: "features",
    content: "Examiner"
  }, {
    heading: "features",
    content: "Examinee video playback"
  }, {
    heading: "features",
    content: "The examiner records and plays back video taken via the main camera, secondary camera, and screen images of the examinee"
  }, {
    heading: "features",
    content: "Examiner"
  }, {
    heading: "features",
    content: "Examiner/AI abnormal exam situation record"
  }, {
    heading: "features",
    content: "The examiner *manually* records or the AI *automatically* records the abnormal situation of the exam (you need to implement it yourself)"
  }, {
    heading: "features",
    content: "Examiner, examinee"
  }, {
    heading: "features",
    content: "Hardware device detection"
  }, {
    heading: "features",
    content: "Microphone, camera, and speakers of the examiner and examinees are detected"
  }, {
    heading: "features",
    content: "Examinee"
  }, {
    heading: "features",
    content: "Screen sharing"
  }, {
    heading: "features",
    content: "Examinees share their screens to prevent cheating. If an examinee turns off screen sharing during the test, the test is suspended"
  }, {
    heading: "features",
    content: "Examinee"
  }, {
    heading: "features",
    content: "Main camera monitoring"
  }, {
    heading: "features",
    content: "Examinee is monitored via their main device camera"
  }, {
    heading: "features",
    content: "Examinee"
  }, {
    heading: "features",
    content: "Secondary camera monitoring"
  }, {
    heading: "features",
    content: "Examinee is monitored via their mobile device camera"
  }, {
    heading: "features",
    content: "Examinee"
  }, {
    heading: "features",
    content: "Online test questions"
  }, {
    heading: "features",
    content: "Examinees answer exam questions presented in the classroom"
  }, {
    heading: "how-to-use-online-proctoring",
    content: `Examiners supervise examinees during an exam and can pay special attention to those who are suspected of cheating.
Examinees take the exam in a fully supervised environment that includes identity verification, streams from primary and secondary camera with sound, and
screen sharing.`
  }, {
    heading: "examiner-role",
    content: "Take the following steps to join and proctor an exam:"
  }, {
    heading: "examiner-role",
    content: "Open the Flexible Classroom web demo and click **Create** to create a room."
  }, {
    heading: "examiner-role",
    content: "Enter the classroom name, class start and end time, then select **Online Proctoring** in **Class mode** and click **Create**."
  }, {
    heading: "examiner-role",
    content: "In the Flexible Classroom demo, the room creator holds the examiner role by default. You have now successfully created a classroom under the proctoring use-case."
  }, {
    heading: "examiner-role",
    content: "Test your hardware before entering the room to ensure that you can monitor the exam."
  }, {
    heading: "examiner-role",
    content: `Once hardware is successfully tested, click **Next step** to enter the room. After you enter the room, the exam starts
automatically at the preset time. You can also click **Start Exam** to start the exam manually.`
  }, {
    heading: "examiner-role",
    content: "During the exam you can see monitor screens, or surveillance walls, for examinees. You can do the following:"
  }, {
    heading: "examiner-role",
    content: "Switch the layout and filter surveillance walls."
  }, {
    heading: "examiner-role",
    content: "Broadcast video and audio to all examinees."
  }, {
    heading: "examiner-role",
    content: "Click the surveillance wall of an examinee to enter the monitoring details page."
  }, {
    heading: "examiner-role",
    content: "On the monitoring details page, you can see the recording view and the monitoring view:"
  }, {
    heading: "examiner-role",
    content: "The recording view shows the examinee's video and screen recordings from the start of the exam to the current time. You can drag the time axis to jump to a specific time, or click a submitted abnormal event to jump to the time point of the event."
  }, {
    heading: "examiner-role",
    content: "The monitoring view shows the real-time video and screen sharing of the examinee. If the examinee demonstrates abnormal exam behavior (cheating), you select the corresponding event and submit it. Preset abnormal events include multiple people on camera, cheat sheets, identity verification, and use of electronic devices. Abnormal events are customizable."
  }, {
    heading: "examiner-role",
    content: `If there are examinees that you suspect of cheating without solid evidence, you can pay closer attention to them. To do so,
click the focus icon on the monitoring details page to add them to the corresponding list. You can then filter surveillance
walls in the main proctoring page to show only those that require your special attention.`
  }, {
    heading: "examiner-role",
    content: "The test ends automatically when the test time is over, or you can manually click **End Test** to end the test in advance."
  }, {
    heading: "examinee-role",
    content: "Take the following steps to join and take an exam in a supervised environment:"
  }, {
    heading: "examinee-role",
    content: "Open the Flexible Classroom web demo and click **Join**."
  }, {
    heading: "examinee-role",
    content: "Enter the room ID, select the **Student** role, and click **Join**."
  }, {
    heading: "examinee-role",
    content: "In the Flexible Classroom demo, a room joiner holds the examinee role by default."
  }, {
    heading: "examinee-role",
    content: "Test your device capabilities before entering the room."
  }, {
    heading: "examinee-role",
    content: `Once your hardware is successfully tested, click **Join Exam**. After entering the classroom, you see the exam paper,
the video from your main and secondary camera, and the video of your shared screen. You also see the examiner's video
when they broadcast.`
  }, {
    heading: "examinee-role",
    content: `Your exam paper is automatically displayed at the beginning of the exam and automatically submitted at the end of the exam,
unless you submit it manually before that.`
  }, {
    heading: "examinee-role",
    content: "When the exam is complete, click **Leave**."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference",
    content: "Proctor SDK"
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "platform-support",
    content: "Platform support"
  }, {
    id: "features",
    content: "Features"
  }, {
    id: "how-to-use-online-proctoring",
    content: "How to use online proctoring"
  }, {
    id: "examiner-role",
    content: "Examiner role"
  }, {
    id: "examinee-role",
    content: "Examinee role"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "api-reference",
    content: "API Reference"
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
  url: "#platform-support",
  title: _jsx(_Fragment, {
    children: "Platform support"
  })
}, {
  depth: 2,
  url: "#features",
  title: _jsx(_Fragment, {
    children: "Features"
  })
}, {
  depth: 2,
  url: "#how-to-use-online-proctoring",
  title: _jsx(_Fragment, {
    children: "How to use online proctoring"
  })
}, {
  depth: 3,
  url: "#examiner-role",
  title: _jsx(_Fragment, {
    children: "Examiner role"
  })
}, {
  depth: 3,
  url: "#examinee-role",
  title: _jsx(_Fragment, {
    children: "Examinee role"
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
    children: "API Reference"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: `Online proctoring refers to supervision of examinees through their web cameras, microphones, and by
sharing their screens during online exams. This can be useful in the following cases:`
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "College exams"
      }), `
`, _jsx(_components.li, {
        children: "Professional/certification exams"
      }), `
`, _jsx(_components.li, {
        children: "Recruitment"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["Flexible Classroom provides Proctor SDK to implement such supervision. Agora recommends one examiner proctoring 25 to 50 examinees simultaneously. This page illustrates how the proctoring feature works for an examiner and an examinee using the ", _jsx(_components.a, {
        href: "/en/realtime-media/flexible-classroom/quickstart",
        children: "Flexible Classroom web demo"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Examiner:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Appropriate test equipment:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Desktop computer, laptop, tablet, or a mobile device"
              }), `
`, _jsx(_components.li, {
                children: "Camera and microphone to broadcast to all examinees and transmit video"
              }), `
`, _jsx(_components.li, {
                children: "Speaker to monitor the sound of the examinees' environment"
              }), `
`, _jsx(_components.li, {
                children: "Chrome browser"
              }), `
`]
            }), `
`]
          }), `
`, _jsx(_components.li, {
            children: "Stable network connection: The device needs to monitor 6 students, 3 video streams per each at the same time. The recommended downlink bandwidth is 100M or more"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Examinee:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Appropriate test equipment:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Desktop computer, laptop, tablet, or a mobile device"
              }), `
`, _jsx(_components.li, {
                children: "Camera and microphone to monitor the examinee's surrounding environment"
              }), `
`, _jsx(_components.li, {
                children: "Chrome browser"
              }), `
`]
            }), `
`]
          }), `
`, _jsx(_components.li, {
            children: "Stable network connection: The device needs to send a shared screen video at 1080p and a video stream at 240p at the same time. The recommended upstream bandwidth is 20M or more"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "platform-support",
      children: "Platform support"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Examiner", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Web"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["Examinee", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Main: Web"
          }), `
`, _jsx(_components.li, {
            children: "Secondary: Android, iOS. The secondary camera function is still in the development stage"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "features",
      children: "Features"
    }), `
`, _jsx(_components.p, {
      children: "Available features area:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Role"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Feature"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Example"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Examiner"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Broadcast to all"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The examiner initiates an all-hands call to examinees"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Examiner"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Examinee real-time monitoring"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Examinees are monitored in real time via their main camera, secondary camera, and screen images"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Examiner"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Surveillance video wall"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The examiner monitors the examinees' behavior via their video streams presented on the examiner's screen"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Examiner"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Examinee video playback"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The examiner records and plays back video taken via the main camera, secondary camera, and screen images of the examinee"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Examiner"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Examiner/AI abnormal exam situation record"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The examiner ", _jsx(_components.em, {
              children: "manually"
            }), " records or the AI ", _jsx(_components.em, {
              children: "automatically"
            }), " records the abnormal situation of the exam (you need to implement it yourself)"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Examiner, examinee"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Hardware device detection"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Microphone, camera, and speakers of the examiner and examinees are detected"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Examinee"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Screen sharing"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Examinees share their screens to prevent cheating. If an examinee turns off screen sharing during the test, the test is suspended"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Examinee"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Main camera monitoring"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Examinee is monitored via their main device camera"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Examinee"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Secondary camera monitoring"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Examinee is monitored via their mobile device camera"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Examinee"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Online test questions"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Examinees answer exam questions presented in the classroom"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "how-to-use-online-proctoring",
      children: "How to use online proctoring"
    }), `
`, _jsx(_components.p, {
      children: `Examiners supervise examinees during an exam and can pay special attention to those who are suspected of cheating.
Examinees take the exam in a fully supervised environment that includes identity verification, streams from primary and secondary camera with sound, and
screen sharing.`
    }), `
`, _jsx(_components.h3, {
      id: "examiner-role",
      children: "Examiner role"
    }), `
`, _jsx(_components.p, {
      children: "Take the following steps to join and proctor an exam:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Open the ", _jsx(_components.a, {
            href: "/en/realtime-media/flexible-classroom/quickstart",
            children: "Flexible Classroom web demo"
          }), " and click ", _jsx(_components.strong, {
            children: "Create"
          }), " to create a room."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/flexible-classroom/fc_web_demo.png",
            alt: "flexible_classroom_web_demo"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Enter the classroom name, class start and end time, then select ", _jsx(_components.strong, {
            children: "Online Proctoring"
          }), " in ", _jsx(_components.strong, {
            children: "Class mode"
          }), " and click ", _jsx(_components.strong, {
            children: "Create"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/flexible-classroom/create_classroom_web_demo.png",
            alt: "create_classroom_web_demo"
          })
        }), `
`, _jsx(_components.p, {
          children: "In the Flexible Classroom demo, the room creator holds the examiner role by default. You have now successfully created a classroom under the proctoring use-case."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Test your hardware before entering the room to ensure that you can monitor the exam."
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/flexible-classroom/online_proctoring.png",
            alt: "online_proctoring"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Once hardware is successfully tested, click ", _jsx(_components.strong, {
            children: "Next step"
          }), ` to enter the room. After you enter the room, the exam starts
automatically at the preset time. You can also click `, _jsx(_components.strong, {
            children: "Start Exam"
          }), " to start the exam manually."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "During the exam you can see monitor screens, or surveillance walls, for examinees. You can do the following:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Switch the layout and filter surveillance walls."
          }), `
`]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/flexible-classroom/start_exam.png",
            alt: "start_exam"
          })
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Broadcast video and audio to all examinees."
          }), `
`]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/flexible-classroom/broadcast_video_audio.png",
            alt: "broadcast_video_audio"
          })
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Click the surveillance wall of an examinee to enter the monitoring details page."
          }), `
`]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/flexible-classroom/monitoring_details.png",
            alt: "monitoring_details"
          })
        }), `
`, _jsx(_components.p, {
          children: "On the monitoring details page, you can see the recording view and the monitoring view:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "The recording view shows the examinee's video and screen recordings from the start of the exam to the current time. You can drag the time axis to jump to a specific time, or click a submitted abnormal event to jump to the time point of the event."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "The monitoring view shows the real-time video and screen sharing of the examinee. If the examinee demonstrates abnormal exam behavior (cheating), you select the corresponding event and submit it. Preset abnormal events include multiple people on camera, cheat sheets, identity verification, and use of electronic devices. Abnormal events are customizable."
            }), `
`]
          }), `
`]
        }), `
`, _jsx(_components.p, {
          children: `If there are examinees that you suspect of cheating without solid evidence, you can pay closer attention to them. To do so,
click the focus icon on the monitoring details page to add them to the corresponding list. You can then filter surveillance
walls in the main proctoring page to show only those that require your special attention.`
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["The test ends automatically when the test time is over, or you can manually click ", _jsx(_components.strong, {
        children: "End Test"
      }), " to end the test in advance."]
    }), `
`, _jsx(_components.h3, {
      id: "examinee-role",
      children: "Examinee role"
    }), `
`, _jsx(_components.p, {
      children: "Take the following steps to join and take an exam in a supervised environment:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Open the ", _jsx(_components.a, {
            href: "/en/realtime-media/flexible-classroom/quickstart",
            children: "Flexible Classroom web demo"
          }), " and click ", _jsx(_components.strong, {
            children: "Join"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/flexible-classroom/join_classroom.png",
            alt: "join_classroom"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Enter the room ID, select the ", _jsx(_components.strong, {
            children: "Student"
          }), " role, and click ", _jsx(_components.strong, {
            children: "Join"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/flexible-classroom/enter_name.png",
            alt: "enter_name"
          })
        }), `
`, _jsx(_components.p, {
          children: "In the Flexible Classroom demo, a room joiner holds the examinee role by default."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Test your device capabilities before entering the room."
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/flexible-classroom/join_exam.png",
            alt: "join_exam"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Once your hardware is successfully tested, click ", _jsx(_components.strong, {
            children: "Join Exam"
          }), `. After entering the classroom, you see the exam paper,
the video from your main and secondary camera, and the video of your shared screen. You also see the examiner's video
when they broadcast.`]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/flexible-classroom/take_exam.png",
            alt: "take_exam"
          })
        }), `
`, _jsx(_components.p, {
          children: `Your exam paper is automatically displayed at the beginning of the exam and automatically submitted at the end of the exam,
unless you submit it manually before that.`
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["When the exam is complete, click ", _jsx(_components.strong, {
            children: "Leave"
          }), "."]
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
      children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
    }), `
`, _jsx(_components.h3, {
      id: "api-reference",
      children: "API Reference"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/flexible-classroom/proctor-sdk",
          children: "Proctor SDK"
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
