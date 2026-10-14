import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "What are the classroom states of Flexible Classroom?"
};
export let _markdown = `

Flexible Classroom has the following classroom states:

| State       | \`state\` value | Example                                                                                                                                                                                                                                                                                              |
| ----------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Not started | \`0\`           | Before the start time of the class. Both teachers and students can do the following:- Use real-time audio and video functions.
- Use instant messaging.
- See the student list.
- Use the interactive whiteboard.                                                                                    |
| Started     | \`1\`           | After the start time of the class and within its duration. Both teachers and students can do the following:- Use real-time audio and video.
- Use instant messaging.
- See the student list.
- Use the interactive whiteboard.                                                                       |
| Ended       | \`2\`           | The class duration has been exceeded, but it's still within its end delay time. Teachers and students can still enter and leave the classroom, as well as using the other functions normally.                                                                                                        |
| Closed      | \`3\`           | The class duration and end delay time have been exceeded.- Teachers and students are kicked out of the classroom and cannot rejoin.
- Audio, video, instant messaging, and whiteboard services are disconnected.
- Once a classroom is closed, it cannot be restarted and is destroyed 1 hour later. |

### Classroom state change [#classroom-state-change]

Classroom states change according to the following parameters set when calling the \`launch\` method in the Flexible Classroom client:

* \`startTime\`: The class start time in milliseconds, subject to the parameter passed in by the first user who enters the class.
* \`duration\`: The class duration in seconds, subject to the parameter passed in by the first user who enters the class.
* \`closeDelay\`: Delay time in seconds, subject to the parameter passed in when creating the classroom, defaults to 10 minutes.

The class automatically starts at the specified start time and ends after its duration and end delay times are exceeded. Teachers can also start and end classes manually.

You can also switch the class state with [RESTful API](/en/api-reference/api-ref/flexible-classroom/classroom-rest-api?platform=web#set-the-classroom-state).

### Reference API [#reference-api]

* [\`launch\`](/en/api-reference/api-ref/flexible-classroom/classroom-sdk#launch)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Flexible Classroom has the following classroom states:"
  }, {
    heading: undefined,
    content: "State"
  }, {
    heading: undefined,
    content: "`state` value"
  }, {
    heading: undefined,
    content: "Example"
  }, {
    heading: undefined,
    content: "Not started"
  }, {
    heading: undefined,
    content: "`0`"
  }, {
    heading: undefined,
    content: `Before the start time of the class. Both teachers and students can do the following:- Use real-time audio and video functions.
- Use instant messaging.
- See the student list.
- Use the interactive whiteboard.`
  }, {
    heading: undefined,
    content: "Started"
  }, {
    heading: undefined,
    content: "`1`"
  }, {
    heading: undefined,
    content: `After the start time of the class and within its duration. Both teachers and students can do the following:- Use real-time audio and video.
- Use instant messaging.
- See the student list.
- Use the interactive whiteboard.`
  }, {
    heading: undefined,
    content: "Ended"
  }, {
    heading: undefined,
    content: "`2`"
  }, {
    heading: undefined,
    content: "The class duration has been exceeded, but it's still within its end delay time. Teachers and students can still enter and leave the classroom, as well as using the other functions normally."
  }, {
    heading: undefined,
    content: "Closed"
  }, {
    heading: undefined,
    content: "`3`"
  }, {
    heading: undefined,
    content: `The class duration and end delay time have been exceeded.- Teachers and students are kicked out of the classroom and cannot rejoin.
- Audio, video, instant messaging, and whiteboard services are disconnected.
- Once a classroom is closed, it cannot be restarted and is destroyed 1 hour later.`
  }, {
    heading: "classroom-state-change",
    content: "Classroom states change according to the following parameters set when calling the `launch` method in the Flexible Classroom client:"
  }, {
    heading: "classroom-state-change",
    content: "`startTime`: The class start time in milliseconds, subject to the parameter passed in by the first user who enters the class."
  }, {
    heading: "classroom-state-change",
    content: "`duration`: The class duration in seconds, subject to the parameter passed in by the first user who enters the class."
  }, {
    heading: "classroom-state-change",
    content: "`closeDelay`: Delay time in seconds, subject to the parameter passed in when creating the classroom, defaults to 10 minutes."
  }, {
    heading: "classroom-state-change",
    content: "The class automatically starts at the specified start time and ends after its duration and end delay times are exceeded. Teachers can also start and end classes manually."
  }, {
    heading: "classroom-state-change",
    content: "You can also switch the class state with RESTful API."
  }, {
    heading: "reference-api",
    content: "`launch`"
  }],
  headings: [{
    id: "classroom-state-change",
    content: "Classroom state change"
  }, {
    id: "reference-api",
    content: "Reference API"
  }]
};
export let toc = [{
  depth: 3,
  url: "#classroom-state-change",
  title: _jsx(_Fragment, {
    children: "Classroom state change"
  })
}, {
  depth: 3,
  url: "#reference-api",
  title: _jsx(_Fragment, {
    children: "Reference API"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
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
      children: "Flexible Classroom has the following classroom states:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "State"
          }), _jsxs(_components.th, {
            children: [_jsx(_components.code, {
              children: "state"
            }), " value"]
          }), _jsx(_components.th, {
            children: "Example"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Not started"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "0"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "Before the start time of the class. Both teachers and students can do the following:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Use real-time audio and video functions."
              }), `
`, _jsx(_components.li, {
                children: "Use instant messaging."
              }), `
`, _jsx(_components.li, {
                children: "See the student list."
              }), `
`, _jsx(_components.li, {
                children: "Use the interactive whiteboard."
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Started"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "1"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "After the start time of the class and within its duration. Both teachers and students can do the following:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Use real-time audio and video."
              }), `
`, _jsx(_components.li, {
                children: "Use instant messaging."
              }), `
`, _jsx(_components.li, {
                children: "See the student list."
              }), `
`, _jsx(_components.li, {
                children: "Use the interactive whiteboard."
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Ended"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "2"
            })
          }), _jsx(_components.td, {
            children: "The class duration has been exceeded, but it's still within its end delay time. Teachers and students can still enter and leave the classroom, as well as using the other functions normally."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Closed"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "3"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The class duration and end delay time have been exceeded."
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Teachers and students are kicked out of the classroom and cannot rejoin."
              }), `
`, _jsx(_components.li, {
                children: "Audio, video, instant messaging, and whiteboard services are disconnected."
              }), `
`, _jsx(_components.li, {
                children: "Once a classroom is closed, it cannot be restarted and is destroyed 1 hour later."
              }), `
`]
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "classroom-state-change",
      children: "Classroom state change"
    }), `
`, _jsxs(_components.p, {
      children: ["Classroom states change according to the following parameters set when calling the ", _jsx(_components.code, {
        children: "launch"
      }), " method in the Flexible Classroom client:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "startTime"
        }), ": The class start time in milliseconds, subject to the parameter passed in by the first user who enters the class."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "duration"
        }), ": The class duration in seconds, subject to the parameter passed in by the first user who enters the class."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "closeDelay"
        }), ": Delay time in seconds, subject to the parameter passed in when creating the classroom, defaults to 10 minutes."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The class automatically starts at the specified start time and ends after its duration and end delay times are exceeded. Teachers can also start and end classes manually."
    }), `
`, _jsxs(_components.p, {
      children: ["You can also switch the class state with ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/flexible-classroom/classroom-rest-api?platform=web#set-the-classroom-state",
        children: "RESTful API"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "reference-api",
      children: "Reference API"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/api-reference/api-ref/flexible-classroom/classroom-sdk#launch",
          children: _jsx(_components.code, {
            children: "launch"
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
