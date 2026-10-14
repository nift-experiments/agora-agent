import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Glossary",
  description: "Definitions for common Interactive Whiteboard terms."
};
export let _markdown = `

## A [#a]

### App Identifier [#app-identifier]

The App Identifier, also called the App ID, is the unique identifier of a whiteboard project. You use it when initializing the Whiteboard SDK or Fastboard SDK.

### Access Key (AK) [#access-key-ak]

The Access Key is part of the credential pair used to generate whiteboard tokens.

## R [#r]

### Room token [#room-token]

A Room token is tied to a specific whiteboard room. It grants access to that room according to the assigned role, such as \`admin\`, \`writer\`, or \`reader\`.

### Room UUID [#room-uuid]

The Room UUID is the unique identifier of a whiteboard room. You receive it when the room is created successfully.

## S [#s]

### SDK token [#sdk-token]

An SDK token is the highest-permission token type in Interactive Whiteboard. It is linked to a specific whiteboard project and can be used to manage rooms and file-conversion tasks for that project.

### Scene [#scene]

A scene is a whiteboard page that can contain drawings, text, images, or converted presentation content. A room can contain multiple scenes and scene directories.

### Subscription mode [#subscription-mode]

Subscription mode is the read-only mode for joining a whiteboard room. Users in this mode can view content but cannot edit the whiteboard.

## T [#t]

### Task token [#task-token]

A Task token is linked to a specific file-conversion task and is used when querying task progress or related results.

### Task UUID [#task-uuid]

The Task UUID is the unique identifier of a file-conversion task. It is returned when you start a file-conversion task successfully.

## W [#w]

### Whiteboard SDK [#whiteboard-sdk]

The Whiteboard SDK is the lower-level SDK for building custom interactive whiteboard experiences.

### Fastboard SDK [#fastboard-sdk]

The Fastboard SDK is the higher-level SDK that adds a ready-to-use UI and related integrations on top of the Whiteboard SDK.
`;
export let structuredData = {
  contents: [{
    heading: "app-identifier",
    content: "The App Identifier, also called the App ID, is the unique identifier of a whiteboard project. You use it when initializing the Whiteboard SDK or Fastboard SDK."
  }, {
    heading: "access-key-ak",
    content: "The Access Key is part of the credential pair used to generate whiteboard tokens."
  }, {
    heading: "room-token",
    content: "A Room token is tied to a specific whiteboard room. It grants access to that room according to the assigned role, such as `admin`, `writer`, or `reader`."
  }, {
    heading: "room-uuid",
    content: "The Room UUID is the unique identifier of a whiteboard room. You receive it when the room is created successfully."
  }, {
    heading: "sdk-token",
    content: "An SDK token is the highest-permission token type in Interactive Whiteboard. It is linked to a specific whiteboard project and can be used to manage rooms and file-conversion tasks for that project."
  }, {
    heading: "scene",
    content: "A scene is a whiteboard page that can contain drawings, text, images, or converted presentation content. A room can contain multiple scenes and scene directories."
  }, {
    heading: "subscription-mode",
    content: "Subscription mode is the read-only mode for joining a whiteboard room. Users in this mode can view content but cannot edit the whiteboard."
  }, {
    heading: "task-token",
    content: "A Task token is linked to a specific file-conversion task and is used when querying task progress or related results."
  }, {
    heading: "task-uuid",
    content: "The Task UUID is the unique identifier of a file-conversion task. It is returned when you start a file-conversion task successfully."
  }, {
    heading: "whiteboard-sdk",
    content: "The Whiteboard SDK is the lower-level SDK for building custom interactive whiteboard experiences."
  }, {
    heading: "fastboard-sdk",
    content: "The Fastboard SDK is the higher-level SDK that adds a ready-to-use UI and related integrations on top of the Whiteboard SDK."
  }],
  headings: [{
    id: "a",
    content: "A"
  }, {
    id: "app-identifier",
    content: "App Identifier"
  }, {
    id: "access-key-ak",
    content: "Access Key (AK)"
  }, {
    id: "r",
    content: "R"
  }, {
    id: "room-token",
    content: "Room token"
  }, {
    id: "room-uuid",
    content: "Room UUID"
  }, {
    id: "s",
    content: "S"
  }, {
    id: "sdk-token",
    content: "SDK token"
  }, {
    id: "scene",
    content: "Scene"
  }, {
    id: "subscription-mode",
    content: "Subscription mode"
  }, {
    id: "t",
    content: "T"
  }, {
    id: "task-token",
    content: "Task token"
  }, {
    id: "task-uuid",
    content: "Task UUID"
  }, {
    id: "w",
    content: "W"
  }, {
    id: "whiteboard-sdk",
    content: "Whiteboard SDK"
  }, {
    id: "fastboard-sdk",
    content: "Fastboard SDK"
  }]
};
export let toc = [{
  depth: 2,
  url: "#a",
  title: _jsx(_Fragment, {
    children: "A"
  })
}, {
  depth: 3,
  url: "#app-identifier",
  title: _jsx(_Fragment, {
    children: "App Identifier"
  })
}, {
  depth: 3,
  url: "#access-key-ak",
  title: _jsx(_Fragment, {
    children: "Access Key (AK)"
  })
}, {
  depth: 2,
  url: "#r",
  title: _jsx(_Fragment, {
    children: "R"
  })
}, {
  depth: 3,
  url: "#room-token",
  title: _jsx(_Fragment, {
    children: "Room token"
  })
}, {
  depth: 3,
  url: "#room-uuid",
  title: _jsx(_Fragment, {
    children: "Room UUID"
  })
}, {
  depth: 2,
  url: "#s",
  title: _jsx(_Fragment, {
    children: "S"
  })
}, {
  depth: 3,
  url: "#sdk-token",
  title: _jsx(_Fragment, {
    children: "SDK token"
  })
}, {
  depth: 3,
  url: "#scene",
  title: _jsx(_Fragment, {
    children: "Scene"
  })
}, {
  depth: 3,
  url: "#subscription-mode",
  title: _jsx(_Fragment, {
    children: "Subscription mode"
  })
}, {
  depth: 2,
  url: "#t",
  title: _jsx(_Fragment, {
    children: "T"
  })
}, {
  depth: 3,
  url: "#task-token",
  title: _jsx(_Fragment, {
    children: "Task token"
  })
}, {
  depth: 3,
  url: "#task-uuid",
  title: _jsx(_Fragment, {
    children: "Task UUID"
  })
}, {
  depth: 2,
  url: "#w",
  title: _jsx(_Fragment, {
    children: "W"
  })
}, {
  depth: 3,
  url: "#whiteboard-sdk",
  title: _jsx(_Fragment, {
    children: "Whiteboard SDK"
  })
}, {
  depth: 3,
  url: "#fastboard-sdk",
  title: _jsx(_Fragment, {
    children: "Fastboard SDK"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "a",
      children: "A"
    }), `
`, _jsx(_components.h3, {
      id: "app-identifier",
      children: "App Identifier"
    }), `
`, _jsx(_components.p, {
      children: "The App Identifier, also called the App ID, is the unique identifier of a whiteboard project. You use it when initializing the Whiteboard SDK or Fastboard SDK."
    }), `
`, _jsx(_components.h3, {
      id: "access-key-ak",
      children: "Access Key (AK)"
    }), `
`, _jsx(_components.p, {
      children: "The Access Key is part of the credential pair used to generate whiteboard tokens."
    }), `
`, _jsx(_components.h2, {
      id: "r",
      children: "R"
    }), `
`, _jsx(_components.h3, {
      id: "room-token",
      children: "Room token"
    }), `
`, _jsxs(_components.p, {
      children: ["A Room token is tied to a specific whiteboard room. It grants access to that room according to the assigned role, such as ", _jsx(_components.code, {
        children: "admin"
      }), ", ", _jsx(_components.code, {
        children: "writer"
      }), ", or ", _jsx(_components.code, {
        children: "reader"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "room-uuid",
      children: "Room UUID"
    }), `
`, _jsx(_components.p, {
      children: "The Room UUID is the unique identifier of a whiteboard room. You receive it when the room is created successfully."
    }), `
`, _jsx(_components.h2, {
      id: "s",
      children: "S"
    }), `
`, _jsx(_components.h3, {
      id: "sdk-token",
      children: "SDK token"
    }), `
`, _jsx(_components.p, {
      children: "An SDK token is the highest-permission token type in Interactive Whiteboard. It is linked to a specific whiteboard project and can be used to manage rooms and file-conversion tasks for that project."
    }), `
`, _jsx(_components.h3, {
      id: "scene",
      children: "Scene"
    }), `
`, _jsx(_components.p, {
      children: "A scene is a whiteboard page that can contain drawings, text, images, or converted presentation content. A room can contain multiple scenes and scene directories."
    }), `
`, _jsx(_components.h3, {
      id: "subscription-mode",
      children: "Subscription mode"
    }), `
`, _jsx(_components.p, {
      children: "Subscription mode is the read-only mode for joining a whiteboard room. Users in this mode can view content but cannot edit the whiteboard."
    }), `
`, _jsx(_components.h2, {
      id: "t",
      children: "T"
    }), `
`, _jsx(_components.h3, {
      id: "task-token",
      children: "Task token"
    }), `
`, _jsx(_components.p, {
      children: "A Task token is linked to a specific file-conversion task and is used when querying task progress or related results."
    }), `
`, _jsx(_components.h3, {
      id: "task-uuid",
      children: "Task UUID"
    }), `
`, _jsx(_components.p, {
      children: "The Task UUID is the unique identifier of a file-conversion task. It is returned when you start a file-conversion task successfully."
    }), `
`, _jsx(_components.h2, {
      id: "w",
      children: "W"
    }), `
`, _jsx(_components.h3, {
      id: "whiteboard-sdk",
      children: "Whiteboard SDK"
    }), `
`, _jsx(_components.p, {
      children: "The Whiteboard SDK is the lower-level SDK for building custom interactive whiteboard experiences."
    }), `
`, _jsx(_components.h3, {
      id: "fastboard-sdk",
      children: "Fastboard SDK"
    }), `
`, _jsx(_components.p, {
      children: "The Fastboard SDK is the higher-level SDK that adds a ready-to-use UI and related integrations on top of the Whiteboard SDK."
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
