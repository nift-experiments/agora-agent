import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Integrate user system and course scheduling system",
  description: "Best practices to integrate user system and course scheduling system in Flexible Classroom"
};
export let _markdown = `

Flexible Classroom provides a real-time interactive experience in the classroom out of the box. This document shows you how to integrate a custom user system and a custom course scheduling system with Flexible Classroom.

## Understand the tech [#understand-the-tech]

![Flexible Classroom system integration architecture](https://assets-docs.agora.io/images/flexible-classroom/integrate-systems-flexible-classroom.png)

As shown in the figure above, if you need to integrate Flexible Classroom with your user system and course scheduling system, implement the following business logic:

1. [Deploy a Signaling token server](../set-up-your-account-and-authentication/authentication-workflow.mdx) in your backend services.
2. Design a RESTful API for the following three purposes:
   1. Verify that the user logged into the app exists in the user system.
   2. If the user exists, obtain the user information and course scheduling information of the user.
   3. Get the Signaling token issued by the Signaling token generator for this user.
   4. Upon getting the user ID, classroom ID and Signaling token, the app calls the launch method of the Agora Classroom SDK. This starts the Flexible Classroom, and passes in the user ID, classroom ID, Signaling token and other parameters.

## Integrated user system [#integrated-user-system]

You need to pass either the user ID or the mapping of the user ID in your user system to Flexible Classroom as \`userUuid\`.

Flexible Classroom's \`userUuidi\`s are globally unique, that is, each \`userUuidi\` is only allowed to log in on one instance of one device at a time, and logging in again overwrites the previous device's login status.

Each \`userUuid\` in the same \`roomUuiddata\` is retained, that is, if a user changes the device \`userUuid\` in the same class, such as switching from browser login to mobile application login, the user's information in the class is not lost.

## Integrated course scheduling system [#integrated-course-scheduling-system]

You need to pass the class ID (or the mapping of the class ID) in your own course scheduling system to the Flexible Classroom as \`roomUuid\`.

Flexible Classroom \`roomUuid\` is created when the first user enters and is completely destroyed 1 hour after the last user leaves.

Agora does not save your user information and classroom information. After the class is destroyed, if you reuse the previous \`roomUuid\` again to enter the room, you get a new classroom instead of the previous one.

Note: Agora does not recommend that you reuse \`roomUuid\`, as this makes it impossible to distinguish between two sessions. For example, use a new \`roomUuid\` for each math class instead of reusing the same one for math classes of all grades.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Flexible Classroom provides a real-time interactive experience in the classroom out of the box. This document shows you how to integrate a custom user system and a custom course scheduling system with Flexible Classroom."
  }, {
    heading: "understand-the-tech",
    content: "As shown in the figure above, if you need to integrate Flexible Classroom with your user system and course scheduling system, implement the following business logic:"
  }, {
    heading: "understand-the-tech",
    content: "Deploy a Signaling token server in your backend services."
  }, {
    heading: "understand-the-tech",
    content: "Design a RESTful API for the following three purposes:"
  }, {
    heading: "understand-the-tech",
    content: "Verify that the user logged into the app exists in the user system."
  }, {
    heading: "understand-the-tech",
    content: "If the user exists, obtain the user information and course scheduling information of the user."
  }, {
    heading: "understand-the-tech",
    content: "Get the Signaling token issued by the Signaling token generator for this user."
  }, {
    heading: "understand-the-tech",
    content: "Upon getting the user ID, classroom ID and Signaling token, the app calls the launch method of the Agora Classroom SDK. This starts the Flexible Classroom, and passes in the user ID, classroom ID, Signaling token and other parameters."
  }, {
    heading: "integrated-user-system",
    content: "You need to pass either the user ID or the mapping of the user ID in your user system to Flexible Classroom as `userUuid`."
  }, {
    heading: "integrated-user-system",
    content: "Flexible Classroom's `userUuidi`s are globally unique, that is, each `userUuidi` is only allowed to log in on one instance of one device at a time, and logging in again overwrites the previous device's login status."
  }, {
    heading: "integrated-user-system",
    content: "Each `userUuid` in the same `roomUuiddata` is retained, that is, if a user changes the device `userUuid` in the same class, such as switching from browser login to mobile application login, the user's information in the class is not lost."
  }, {
    heading: "integrated-course-scheduling-system",
    content: "You need to pass the class ID (or the mapping of the class ID) in your own course scheduling system to the Flexible Classroom as `roomUuid`."
  }, {
    heading: "integrated-course-scheduling-system",
    content: "Flexible Classroom `roomUuid` is created when the first user enters and is completely destroyed 1 hour after the last user leaves."
  }, {
    heading: "integrated-course-scheduling-system",
    content: "Agora does not save your user information and classroom information. After the class is destroyed, if you reuse the previous `roomUuid` again to enter the room, you get a new classroom instead of the previous one."
  }, {
    heading: "integrated-course-scheduling-system",
    content: "Note: Agora does not recommend that you reuse `roomUuid`, as this makes it impossible to distinguish between two sessions. For example, use a new `roomUuid` for each math class instead of reusing the same one for math classes of all grades."
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "integrated-user-system",
    content: "Integrated user system"
  }, {
    id: "integrated-course-scheduling-system",
    content: "Integrated course scheduling system"
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
  url: "#integrated-user-system",
  title: _jsx(_Fragment, {
    children: "Integrated user system"
  })
}, {
  depth: 2,
  url: "#integrated-course-scheduling-system",
  title: _jsx(_Fragment, {
    children: "Integrated course scheduling system"
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
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Flexible Classroom provides a real-time interactive experience in the classroom out of the box. This document shows you how to integrate a custom user system and a custom course scheduling system with Flexible Classroom."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/flexible-classroom/integrate-systems-flexible-classroom.png",
        alt: "Flexible Classroom system integration architecture"
      })
    }), `
`, _jsx(_components.p, {
      children: "As shown in the figure above, if you need to integrate Flexible Classroom with your user system and course scheduling system, implement the following business logic:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../set-up-your-account-and-authentication/authentication-workflow.mdx",
          children: "Deploy a Signaling token server"
        }), " in your backend services."]
      }), `
`, _jsxs(_components.li, {
        children: ["Design a RESTful API for the following three purposes:", `
`, _jsxs(_components.ol, {
          children: [`
`, _jsx(_components.li, {
            children: "Verify that the user logged into the app exists in the user system."
          }), `
`, _jsx(_components.li, {
            children: "If the user exists, obtain the user information and course scheduling information of the user."
          }), `
`, _jsx(_components.li, {
            children: "Get the Signaling token issued by the Signaling token generator for this user."
          }), `
`, _jsx(_components.li, {
            children: "Upon getting the user ID, classroom ID and Signaling token, the app calls the launch method of the Agora Classroom SDK. This starts the Flexible Classroom, and passes in the user ID, classroom ID, Signaling token and other parameters."
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "integrated-user-system",
      children: "Integrated user system"
    }), `
`, _jsxs(_components.p, {
      children: ["You need to pass either the user ID or the mapping of the user ID in your user system to Flexible Classroom as ", _jsx(_components.code, {
        children: "userUuid"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["Flexible Classroom's ", _jsx(_components.code, {
        children: "userUuidi"
      }), "s are globally unique, that is, each ", _jsx(_components.code, {
        children: "userUuidi"
      }), " is only allowed to log in on one instance of one device at a time, and logging in again overwrites the previous device's login status."]
    }), `
`, _jsxs(_components.p, {
      children: ["Each ", _jsx(_components.code, {
        children: "userUuid"
      }), " in the same ", _jsx(_components.code, {
        children: "roomUuiddata"
      }), " is retained, that is, if a user changes the device ", _jsx(_components.code, {
        children: "userUuid"
      }), " in the same class, such as switching from browser login to mobile application login, the user's information in the class is not lost."]
    }), `
`, _jsx(_components.h2, {
      id: "integrated-course-scheduling-system",
      children: "Integrated course scheduling system"
    }), `
`, _jsxs(_components.p, {
      children: ["You need to pass the class ID (or the mapping of the class ID) in your own course scheduling system to the Flexible Classroom as ", _jsx(_components.code, {
        children: "roomUuid"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["Flexible Classroom ", _jsx(_components.code, {
        children: "roomUuid"
      }), " is created when the first user enters and is completely destroyed 1 hour after the last user leaves."]
    }), `
`, _jsxs(_components.p, {
      children: ["Agora does not save your user information and classroom information. After the class is destroyed, if you reuse the previous ", _jsx(_components.code, {
        children: "roomUuid"
      }), " again to enter the room, you get a new classroom instead of the previous one."]
    }), `
`, _jsxs(_components.p, {
      children: ["Note: Agora does not recommend that you reuse ", _jsx(_components.code, {
        children: "roomUuid"
      }), ", as this makes it impossible to distinguish between two sessions. For example, use a new ", _jsx(_components.code, {
        children: "roomUuid"
      }), " for each math class instead of reusing the same one for math classes of all grades."]
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
