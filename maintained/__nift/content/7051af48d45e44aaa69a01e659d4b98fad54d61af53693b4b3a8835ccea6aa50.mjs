import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Flexible classroom features",
  description: "Product architecture, basic and advanced features."
};
export let _markdown = `

## Overall product architecture [#overall-product-architecture]

The following figure shows the overall product architecture of Flexible Classroom:

![Product Architecture](https://assets-docs.agora.io/images/flexible-classroom/product-architecture.png)

## Basic features [#basic-features]

| Feature                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| :------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Real-time audio and video interaction | Multi-people audio and video call; recording; screen sharing; on/off stage; taking screenshots                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Real-time messaging                   | Text messages; emoji; images; muting all; announcement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Interactive whiteboard                | Supports rich drawing tools, including brushes, text boxes, shapes, erasers, paging, laser pointer, undo, and redo; allows teachers and teaching assistants to save contents on the whiteboard to their local device as JPG images; allows teachers and teaching assistants on the PC to drop local images to the whiteboard area and insert the images into the whiteboard                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Courseware management                 | Allows teachers to upload files in classrooms to help students better understand the class. Supported formats include PPT, PPTX, DOC, DOCX, PDF, MP3, MP4, PNG, JPG, and GIF                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Teaching tools                        | *Rewards*: Teachers can reward students with virtual credits, such as stars and trophies, for good performance during the class; *Pop-up quiz*: This tool is applicable to use-cases where the teacher asks a single-choice or multiple-choice question and requests the whole class to answer the question together. The teacher can set up the choices and the correct answer, and then trigger answering. The teacher can see the number of students who have submitted an answer and the percentage that are correct in real time; *Polling tool*: This tool is applicable to use-cases where the teacher wants to get feedback from the whole class. The teacher can set up the subject, choices, and start and end time of the poll. Flexible Classroom also provides live visualization of polling results; *Countdown timer*: The teacher can find the countdown timer in the toolbox and set an initial value. After the teacher clicks the start button, students see a countdown window; *Breakout rooms*: Supports the "breakout rooms" feature in small classrooms. Teachers can create breakout rooms manually, where the teacher manually assigns students to each breakout room, or automatically, where the system randomly assigns the whole class to breakout rooms after the teacher sets up the number of breakout rooms. No matter which way the teacher chooses, a class supports up to 20 breakout rooms with a maximum of 17 members in each room. The features that are available in breakout rooms include real-time audio and video interaction, messaging, whiteboard, and screen sharing. After the breakout session begins, the teacher and teaching assistants have the ability to dynamically join or leave any of the breakout rooms. They can also send announcements to all the breakout rooms. Students are notified in their chat to check for the announcements |

## Advanced features [#advanced-features]

| Feature          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Room             | Customizes room properties for personalized needs at the room level, such as letting students take a break during the class; sets the start time of a class; sets the class duration; sets the run-late time of a class, after which the room is closed and users are kicked out immediately; configures the upper limit on the number of students on the stage, with a default maximum of six students at the same time; configures the upper limit on the number of students raising their hands, with a default maximum of ten students at the same time; configures whether students go onto the stage by default after entering the classroom; configures the storage region, which must be consistent with the region of the OSS used to store class files and recording files; supports in-class event monitoring, which synchronizes events in real time |
| User             | Customizes user properties, such as avatar, age, or gender; displays the information of all users in the classroom, such as whether the user is on stage, whether the camera and microphone are on or off, and the number of rewards; customizes rewards; requests a student to go onto the stage; kicks students out of the room                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Stream           | Configures video encoding parameters, including bitrate, resolution, and mirror mode; encrypts audio and video streams; manages permission to send audio and video streams                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Device and media | Turns media devices on or off and conducts device tests; controls video rendering; controls audio playback                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| UIKit/UIStore    | Configures multiple languages; adjusts the classroom layout; changes the classroom colors                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Widget           | Implements pluggable widgets, such as the interactive whiteboard, pop-up quiz, and countdown timer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Recording        | Configures the resolution of recording files; configures the storage address of recording files; configures the start time and end time of a recording session                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## Supported classroom types [#supported-classroom-types]

| Classroom type                     | Example                                                                                                                                                                                                                                                                                                                                 | Applicable scene                                                                                                                                                       | Supported platform          |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| 1-to-1 interactive teaching        | One teacher provides exclusive online tutoring to one student.                                                                                                                                                                                                                                                                          | Suitable for 1-to-1 personalized VIP tutoring.                                                                                                                         | Web, Electron, Android, iOS |
| Small interactive online classroom | One teacher with multiple students watching and listening in real time. During the class, the teacher can invite students to *come on stage* to speak and interact with them using real-time audio and video. The class size limit is 200; contact [support@agora.io](mailto\\:support@agora.io) to extend it.                           | Suitable for teaching use-cases that emphasize peer learning, interactivity, and participation. The class size generally does not exceed 20 people.                    | Web, Electron, Android, iOS |
| Large interactive live classroom   | One teacher with multiple students watching and listening in real time. During the class, students can *raise their hands* to request to speak and interact with the teacher using real-time audio and video. The class size limit is 5,000; contact [support@agora.io](mailto\\:support@agora.io) to extend it.                         | Often used in open classes or diversion classes, where teachers deliver the lectures and assistant teachers help answer questions.                                     | Web, Electron, Android, iOS |
| Cloud classroom                    | The new UI style and interactive experience that are closer to education users' habits. One teacher interacting with multiple students using real-time audio and video. The class size limit is 50; contact [support@agora.io](mailto\\:support@agora.io) to extend it.                                                                  | Suitable for small classroom teaching use-cases with strong interaction. The class size does not exceed 50 people. Having no more than 10-20 attendees is recommended. | Web                         |
| Online proctoring                  | Online proctoring refers to online monitoring of candidates' behavior through webcams, microphones, and screen sharing during online exams. The recommended online proctoring use-case is for one examiner to proctor 25 to 50 candidates at the same time. For more information, contact [support@agora.io](mailto\\:support@agora.io). | School exams; certification exams; recruitment                                                                                                                         | Web, iOS                    |
`;
export let structuredData = {
  contents: [{
    heading: "overall-product-architecture",
    content: "The following figure shows the overall product architecture of Flexible Classroom:"
  }, {
    heading: "basic-features",
    content: "Feature"
  }, {
    heading: "basic-features",
    content: "Description"
  }, {
    heading: "basic-features",
    content: "Real-time audio and video interaction"
  }, {
    heading: "basic-features",
    content: "Multi-people audio and video call; recording; screen sharing; on/off stage; taking screenshots"
  }, {
    heading: "basic-features",
    content: "Real-time messaging"
  }, {
    heading: "basic-features",
    content: "Text messages; emoji; images; muting all; announcement"
  }, {
    heading: "basic-features",
    content: "Interactive whiteboard"
  }, {
    heading: "basic-features",
    content: "Supports rich drawing tools, including brushes, text boxes, shapes, erasers, paging, laser pointer, undo, and redo; allows teachers and teaching assistants to save contents on the whiteboard to their local device as JPG images; allows teachers and teaching assistants on the PC to drop local images to the whiteboard area and insert the images into the whiteboard"
  }, {
    heading: "basic-features",
    content: "Courseware management"
  }, {
    heading: "basic-features",
    content: "Allows teachers to upload files in classrooms to help students better understand the class. Supported formats include PPT, PPTX, DOC, DOCX, PDF, MP3, MP4, PNG, JPG, and GIF"
  }, {
    heading: "basic-features",
    content: "Teaching tools"
  }, {
    heading: "basic-features",
    content: '*Rewards*: Teachers can reward students with virtual credits, such as stars and trophies, for good performance during the class; *Pop-up quiz*: This tool is applicable to use-cases where the teacher asks a single-choice or multiple-choice question and requests the whole class to answer the question together. The teacher can set up the choices and the correct answer, and then trigger answering. The teacher can see the number of students who have submitted an answer and the percentage that are correct in real time; *Polling tool*: This tool is applicable to use-cases where the teacher wants to get feedback from the whole class. The teacher can set up the subject, choices, and start and end time of the poll. Flexible Classroom also provides live visualization of polling results; *Countdown timer*: The teacher can find the countdown timer in the toolbox and set an initial value. After the teacher clicks the start button, students see a countdown window; *Breakout rooms*: Supports the "breakout rooms" feature in small classrooms. Teachers can create breakout rooms manually, where the teacher manually assigns students to each breakout room, or automatically, where the system randomly assigns the whole class to breakout rooms after the teacher sets up the number of breakout rooms. No matter which way the teacher chooses, a class supports up to 20 breakout rooms with a maximum of 17 members in each room. The features that are available in breakout rooms include real-time audio and video interaction, messaging, whiteboard, and screen sharing. After the breakout session begins, the teacher and teaching assistants have the ability to dynamically join or leave any of the breakout rooms. They can also send announcements to all the breakout rooms. Students are notified in their chat to check for the announcements'
  }, {
    heading: "advanced-features",
    content: "Feature"
  }, {
    heading: "advanced-features",
    content: "Description"
  }, {
    heading: "advanced-features",
    content: "Room"
  }, {
    heading: "advanced-features",
    content: "Customizes room properties for personalized needs at the room level, such as letting students take a break during the class; sets the start time of a class; sets the class duration; sets the run-late time of a class, after which the room is closed and users are kicked out immediately; configures the upper limit on the number of students on the stage, with a default maximum of six students at the same time; configures the upper limit on the number of students raising their hands, with a default maximum of ten students at the same time; configures whether students go onto the stage by default after entering the classroom; configures the storage region, which must be consistent with the region of the OSS used to store class files and recording files; supports in-class event monitoring, which synchronizes events in real time"
  }, {
    heading: "advanced-features",
    content: "User"
  }, {
    heading: "advanced-features",
    content: "Customizes user properties, such as avatar, age, or gender; displays the information of all users in the classroom, such as whether the user is on stage, whether the camera and microphone are on or off, and the number of rewards; customizes rewards; requests a student to go onto the stage; kicks students out of the room"
  }, {
    heading: "advanced-features",
    content: "Stream"
  }, {
    heading: "advanced-features",
    content: "Configures video encoding parameters, including bitrate, resolution, and mirror mode; encrypts audio and video streams; manages permission to send audio and video streams"
  }, {
    heading: "advanced-features",
    content: "Device and media"
  }, {
    heading: "advanced-features",
    content: "Turns media devices on or off and conducts device tests; controls video rendering; controls audio playback"
  }, {
    heading: "advanced-features",
    content: "UIKit/UIStore"
  }, {
    heading: "advanced-features",
    content: "Configures multiple languages; adjusts the classroom layout; changes the classroom colors"
  }, {
    heading: "advanced-features",
    content: "Widget"
  }, {
    heading: "advanced-features",
    content: "Implements pluggable widgets, such as the interactive whiteboard, pop-up quiz, and countdown timer."
  }, {
    heading: "advanced-features",
    content: "Recording"
  }, {
    heading: "advanced-features",
    content: "Configures the resolution of recording files; configures the storage address of recording files; configures the start time and end time of a recording session"
  }, {
    heading: "supported-classroom-types",
    content: "Classroom type"
  }, {
    heading: "supported-classroom-types",
    content: "Example"
  }, {
    heading: "supported-classroom-types",
    content: "Applicable scene"
  }, {
    heading: "supported-classroom-types",
    content: "Supported platform"
  }, {
    heading: "supported-classroom-types",
    content: "1-to-1 interactive teaching"
  }, {
    heading: "supported-classroom-types",
    content: "One teacher provides exclusive online tutoring to one student."
  }, {
    heading: "supported-classroom-types",
    content: "Suitable for 1-to-1 personalized VIP tutoring."
  }, {
    heading: "supported-classroom-types",
    content: "Web, Electron, Android, iOS"
  }, {
    heading: "supported-classroom-types",
    content: "Small interactive online classroom"
  }, {
    heading: "supported-classroom-types",
    content: "One teacher with multiple students watching and listening in real time. During the class, the teacher can invite students to *come on stage* to speak and interact with them using real-time audio and video. The class size limit is 200; contact support\\@agora.io to extend it."
  }, {
    heading: "supported-classroom-types",
    content: "Suitable for teaching use-cases that emphasize peer learning, interactivity, and participation. The class size generally does not exceed 20 people."
  }, {
    heading: "supported-classroom-types",
    content: "Web, Electron, Android, iOS"
  }, {
    heading: "supported-classroom-types",
    content: "Large interactive live classroom"
  }, {
    heading: "supported-classroom-types",
    content: "One teacher with multiple students watching and listening in real time. During the class, students can *raise their hands* to request to speak and interact with the teacher using real-time audio and video. The class size limit is 5,000; contact support\\@agora.io to extend it."
  }, {
    heading: "supported-classroom-types",
    content: "Often used in open classes or diversion classes, where teachers deliver the lectures and assistant teachers help answer questions."
  }, {
    heading: "supported-classroom-types",
    content: "Web, Electron, Android, iOS"
  }, {
    heading: "supported-classroom-types",
    content: "Cloud classroom"
  }, {
    heading: "supported-classroom-types",
    content: "The new UI style and interactive experience that are closer to education users' habits. One teacher interacting with multiple students using real-time audio and video. The class size limit is 50; contact support\\@agora.io to extend it."
  }, {
    heading: "supported-classroom-types",
    content: "Suitable for small classroom teaching use-cases with strong interaction. The class size does not exceed 50 people. Having no more than 10-20 attendees is recommended."
  }, {
    heading: "supported-classroom-types",
    content: "Web"
  }, {
    heading: "supported-classroom-types",
    content: "Online proctoring"
  }, {
    heading: "supported-classroom-types",
    content: "Online proctoring refers to online monitoring of candidates' behavior through webcams, microphones, and screen sharing during online exams. The recommended online proctoring use-case is for one examiner to proctor 25 to 50 candidates at the same time. For more information, contact support\\@agora.io."
  }, {
    heading: "supported-classroom-types",
    content: "School exams; certification exams; recruitment"
  }, {
    heading: "supported-classroom-types",
    content: "Web, iOS"
  }],
  headings: [{
    id: "overall-product-architecture",
    content: "Overall product architecture"
  }, {
    id: "basic-features",
    content: "Basic features"
  }, {
    id: "advanced-features",
    content: "Advanced features"
  }, {
    id: "supported-classroom-types",
    content: "Supported classroom types"
  }]
};
export let toc = [{
  depth: 2,
  url: "#overall-product-architecture",
  title: _jsx(_Fragment, {
    children: "Overall product architecture"
  })
}, {
  depth: 2,
  url: "#basic-features",
  title: _jsx(_Fragment, {
    children: "Basic features"
  })
}, {
  depth: 2,
  url: "#advanced-features",
  title: _jsx(_Fragment, {
    children: "Advanced features"
  })
}, {
  depth: 2,
  url: "#supported-classroom-types",
  title: _jsx(_Fragment, {
    children: "Supported classroom types"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    img: "img",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "overall-product-architecture",
      children: "Overall product architecture"
    }), `
`, _jsx(_components.p, {
      children: "The following figure shows the overall product architecture of Flexible Classroom:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/flexible-classroom/product-architecture.png",
        alt: "Product Architecture"
      })
    }), `
`, _jsx(_components.h2, {
      id: "basic-features",
      children: "Basic features"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Feature"
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
            children: "Real-time audio and video interaction"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Multi-people audio and video call; recording; screen sharing; on/off stage; taking screenshots"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Real-time messaging"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Text messages; emoji; images; muting all; announcement"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Interactive whiteboard"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Supports rich drawing tools, including brushes, text boxes, shapes, erasers, paging, laser pointer, undo, and redo; allows teachers and teaching assistants to save contents on the whiteboard to their local device as JPG images; allows teachers and teaching assistants on the PC to drop local images to the whiteboard area and insert the images into the whiteboard"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Courseware management"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Allows teachers to upload files in classrooms to help students better understand the class. Supported formats include PPT, PPTX, DOC, DOCX, PDF, MP3, MP4, PNG, JPG, and GIF"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Teaching tools"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.em, {
              children: "Rewards"
            }), ": Teachers can reward students with virtual credits, such as stars and trophies, for good performance during the class; ", _jsx(_components.em, {
              children: "Pop-up quiz"
            }), ": This tool is applicable to use-cases where the teacher asks a single-choice or multiple-choice question and requests the whole class to answer the question together. The teacher can set up the choices and the correct answer, and then trigger answering. The teacher can see the number of students who have submitted an answer and the percentage that are correct in real time; ", _jsx(_components.em, {
              children: "Polling tool"
            }), ": This tool is applicable to use-cases where the teacher wants to get feedback from the whole class. The teacher can set up the subject, choices, and start and end time of the poll. Flexible Classroom also provides live visualization of polling results; ", _jsx(_components.em, {
              children: "Countdown timer"
            }), ": The teacher can find the countdown timer in the toolbox and set an initial value. After the teacher clicks the start button, students see a countdown window; ", _jsx(_components.em, {
              children: "Breakout rooms"
            }), ': Supports the "breakout rooms" feature in small classrooms. Teachers can create breakout rooms manually, where the teacher manually assigns students to each breakout room, or automatically, where the system randomly assigns the whole class to breakout rooms after the teacher sets up the number of breakout rooms. No matter which way the teacher chooses, a class supports up to 20 breakout rooms with a maximum of 17 members in each room. The features that are available in breakout rooms include real-time audio and video interaction, messaging, whiteboard, and screen sharing. After the breakout session begins, the teacher and teaching assistants have the ability to dynamically join or leave any of the breakout rooms. They can also send announcements to all the breakout rooms. Students are notified in their chat to check for the announcements']
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "advanced-features",
      children: "Advanced features"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Feature"
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
            children: "Room"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Customizes room properties for personalized needs at the room level, such as letting students take a break during the class; sets the start time of a class; sets the class duration; sets the run-late time of a class, after which the room is closed and users are kicked out immediately; configures the upper limit on the number of students on the stage, with a default maximum of six students at the same time; configures the upper limit on the number of students raising their hands, with a default maximum of ten students at the same time; configures whether students go onto the stage by default after entering the classroom; configures the storage region, which must be consistent with the region of the OSS used to store class files and recording files; supports in-class event monitoring, which synchronizes events in real time"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "User"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Customizes user properties, such as avatar, age, or gender; displays the information of all users in the classroom, such as whether the user is on stage, whether the camera and microphone are on or off, and the number of rewards; customizes rewards; requests a student to go onto the stage; kicks students out of the room"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Stream"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Configures video encoding parameters, including bitrate, resolution, and mirror mode; encrypts audio and video streams; manages permission to send audio and video streams"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Device and media"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Turns media devices on or off and conducts device tests; controls video rendering; controls audio playback"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "UIKit/UIStore"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Configures multiple languages; adjusts the classroom layout; changes the classroom colors"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Widget"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Implements pluggable widgets, such as the interactive whiteboard, pop-up quiz, and countdown timer."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Recording"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Configures the resolution of recording files; configures the storage address of recording files; configures the start time and end time of a recording session"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "supported-classroom-types",
      children: "Supported classroom types"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Classroom type"
          }), _jsx(_components.th, {
            children: "Example"
          }), _jsx(_components.th, {
            children: "Applicable scene"
          }), _jsx(_components.th, {
            children: "Supported platform"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "1-to-1 interactive teaching"
          }), _jsx(_components.td, {
            children: "One teacher provides exclusive online tutoring to one student."
          }), _jsx(_components.td, {
            children: "Suitable for 1-to-1 personalized VIP tutoring."
          }), _jsx(_components.td, {
            children: "Web, Electron, Android, iOS"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Small interactive online classroom"
          }), _jsxs(_components.td, {
            children: ["One teacher with multiple students watching and listening in real time. During the class, the teacher can invite students to ", _jsx(_components.em, {
              children: "come on stage"
            }), " to speak and interact with them using real-time audio and video. The class size limit is 200; contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), " to extend it."]
          }), _jsx(_components.td, {
            children: "Suitable for teaching use-cases that emphasize peer learning, interactivity, and participation. The class size generally does not exceed 20 people."
          }), _jsx(_components.td, {
            children: "Web, Electron, Android, iOS"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Large interactive live classroom"
          }), _jsxs(_components.td, {
            children: ["One teacher with multiple students watching and listening in real time. During the class, students can ", _jsx(_components.em, {
              children: "raise their hands"
            }), " to request to speak and interact with the teacher using real-time audio and video. The class size limit is 5,000; contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), " to extend it."]
          }), _jsx(_components.td, {
            children: "Often used in open classes or diversion classes, where teachers deliver the lectures and assistant teachers help answer questions."
          }), _jsx(_components.td, {
            children: "Web, Electron, Android, iOS"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Cloud classroom"
          }), _jsxs(_components.td, {
            children: ["The new UI style and interactive experience that are closer to education users' habits. One teacher interacting with multiple students using real-time audio and video. The class size limit is 50; contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), " to extend it."]
          }), _jsx(_components.td, {
            children: "Suitable for small classroom teaching use-cases with strong interaction. The class size does not exceed 50 people. Having no more than 10-20 attendees is recommended."
          }), _jsx(_components.td, {
            children: "Web"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Online proctoring"
          }), _jsxs(_components.td, {
            children: ["Online proctoring refers to online monitoring of candidates' behavior through webcams, microphones, and screen sharing during online exams. The recommended online proctoring use-case is for one examiner to proctor 25 to 50 candidates at the same time. For more information, contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), "."]
          }), _jsx(_components.td, {
            children: "School exams; certification exams; recruitment"
          }), _jsx(_components.td, {
            children: "Web, iOS"
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
