import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Technical architecture",
  description: "Overview of the components in Flexible Classroom."
};
export let _markdown = `

The following figure shows the overall technical architecture of Flexible Classroom:

![Flexible Classroom technical architecture](https://web-cdn.agora.io/docs-files/1653557375318)

## Module description [#module-description]

### Agora Classroom SDK [#agora-classroom-sdk]

* This module includes the source code of Agora's online education solutions. It supports three types of classrooms: One-to-one Classroom, Small Classroom, and Lecture Hall. Customized classroom types are also supported.
* Developers can integrate the Classroom SDK into their own project as a third-party package, inherit the classroom types provided by Agora and make custom modifications.
* The Classroom SDK consists of the Edu UI layer, the Edu Context or UI Store layer, and the Edu Core layer.

### Pluggable widgets [#pluggable-widgets]

* Pluggable widgets are independent of the Classroom SDK.
* Agora provides several ready-to-use widgets, including Interactive Whiteboard, Instant Messaging, Poll, Pop-up Quiz, and Countdown Timer.
* Developers are free to customize pluggable widgets based on their own business requirements.

### The Edu UI layer [#the-edu-ui-layer]

* This module provides UI templates for three types of classrooms: One-to-one Classroom, Small Classroom, and Lecture Hall.
* This layer is open-sourced and available on GitHub. Developers can edit the source code to add customized classroom types.

### Edu Context (Native) [#edu-context-native]

* This module is for native clients, including Android and iOS.
* It connects the Edu UI layer with the Edu Core layer and enables developers to quickly launch a flexible classroom with a small amount of code.
* This layer is open-sourced and provides APIs for modules such as users, rooms, streams, and widgets.

### Edu UI Store (Web/Electron) [#edu-ui-store-webelectron]

* This module is for the Web and Electron clients.
* It implements business logic for the containers in the Edu UI layer and defines states and APIs used by the Edu UI layer.
* This module is open-sourced and available on GitHub. Developers are free to edit the source code based on their own UI requirements.

### The Edu Core layer [#the-edu-core-layer]

* This layer provides core business abilities and data support for the upper layers.
* This layer is closed source and provides modular interfaces for the user, room, stream, device, and widget management. With these abilities and API methods, developers can control operations and behaviors in classrooms.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The following figure shows the overall technical architecture of Flexible Classroom:"
  }, {
    heading: "agora-classroom-sdk",
    content: "This module includes the source code of Agora's online education solutions. It supports three types of classrooms: One-to-one Classroom, Small Classroom, and Lecture Hall. Customized classroom types are also supported."
  }, {
    heading: "agora-classroom-sdk",
    content: "Developers can integrate the Classroom SDK into their own project as a third-party package, inherit the classroom types provided by Agora and make custom modifications."
  }, {
    heading: "agora-classroom-sdk",
    content: "The Classroom SDK consists of the Edu UI layer, the Edu Context or UI Store layer, and the Edu Core layer."
  }, {
    heading: "pluggable-widgets",
    content: "Pluggable widgets are independent of the Classroom SDK."
  }, {
    heading: "pluggable-widgets",
    content: "Agora provides several ready-to-use widgets, including Interactive Whiteboard, Instant Messaging, Poll, Pop-up Quiz, and Countdown Timer."
  }, {
    heading: "pluggable-widgets",
    content: "Developers are free to customize pluggable widgets based on their own business requirements."
  }, {
    heading: "the-edu-ui-layer",
    content: "This module provides UI templates for three types of classrooms: One-to-one Classroom, Small Classroom, and Lecture Hall."
  }, {
    heading: "the-edu-ui-layer",
    content: "This layer is open-sourced and available on GitHub. Developers can edit the source code to add customized classroom types."
  }, {
    heading: "edu-context-native",
    content: "This module is for native clients, including Android and iOS."
  }, {
    heading: "edu-context-native",
    content: "It connects the Edu UI layer with the Edu Core layer and enables developers to quickly launch a flexible classroom with a small amount of code."
  }, {
    heading: "edu-context-native",
    content: "This layer is open-sourced and provides APIs for modules such as users, rooms, streams, and widgets."
  }, {
    heading: "edu-ui-store-webelectron",
    content: "This module is for the Web and Electron clients."
  }, {
    heading: "edu-ui-store-webelectron",
    content: "It implements business logic for the containers in the Edu UI layer and defines states and APIs used by the Edu UI layer."
  }, {
    heading: "edu-ui-store-webelectron",
    content: "This module is open-sourced and available on GitHub. Developers are free to edit the source code based on their own UI requirements."
  }, {
    heading: "the-edu-core-layer",
    content: "This layer provides core business abilities and data support for the upper layers."
  }, {
    heading: "the-edu-core-layer",
    content: "This layer is closed source and provides modular interfaces for the user, room, stream, device, and widget management. With these abilities and API methods, developers can control operations and behaviors in classrooms."
  }],
  headings: [{
    id: "module-description",
    content: "Module description"
  }, {
    id: "agora-classroom-sdk",
    content: "Agora Classroom SDK"
  }, {
    id: "pluggable-widgets",
    content: "Pluggable widgets"
  }, {
    id: "the-edu-ui-layer",
    content: "The Edu UI layer"
  }, {
    id: "edu-context-native",
    content: "Edu Context (Native)"
  }, {
    id: "edu-ui-store-webelectron",
    content: "Edu UI Store (Web/Electron)"
  }, {
    id: "the-edu-core-layer",
    content: "The Edu Core layer"
  }]
};
export let toc = [{
  depth: 2,
  url: "#module-description",
  title: _jsx(_Fragment, {
    children: "Module description"
  })
}, {
  depth: 3,
  url: "#agora-classroom-sdk",
  title: _jsx(_Fragment, {
    children: "Agora Classroom SDK"
  })
}, {
  depth: 3,
  url: "#pluggable-widgets",
  title: _jsx(_Fragment, {
    children: "Pluggable widgets"
  })
}, {
  depth: 3,
  url: "#the-edu-ui-layer",
  title: _jsx(_Fragment, {
    children: "The Edu UI layer"
  })
}, {
  depth: 3,
  url: "#edu-context-native",
  title: _jsx(_Fragment, {
    children: "Edu Context (Native)"
  })
}, {
  depth: 3,
  url: "#edu-ui-store-webelectron",
  title: _jsx(_Fragment, {
    children: "Edu UI Store (Web/Electron)"
  })
}, {
  depth: 3,
  url: "#the-edu-core-layer",
  title: _jsx(_Fragment, {
    children: "The Edu Core layer"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The following figure shows the overall technical architecture of Flexible Classroom:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1653557375318",
        alt: "Flexible Classroom technical architecture"
      })
    }), `
`, _jsx(_components.h2, {
      id: "module-description",
      children: "Module description"
    }), `
`, _jsx(_components.h3, {
      id: "agora-classroom-sdk",
      children: "Agora Classroom SDK"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "This module includes the source code of Agora's online education solutions. It supports three types of classrooms: One-to-one Classroom, Small Classroom, and Lecture Hall. Customized classroom types are also supported."
      }), `
`, _jsx(_components.li, {
        children: "Developers can integrate the Classroom SDK into their own project as a third-party package, inherit the classroom types provided by Agora and make custom modifications."
      }), `
`, _jsx(_components.li, {
        children: "The Classroom SDK consists of the Edu UI layer, the Edu Context or UI Store layer, and the Edu Core layer."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "pluggable-widgets",
      children: "Pluggable widgets"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Pluggable widgets are independent of the Classroom SDK."
      }), `
`, _jsx(_components.li, {
        children: "Agora provides several ready-to-use widgets, including Interactive Whiteboard, Instant Messaging, Poll, Pop-up Quiz, and Countdown Timer."
      }), `
`, _jsx(_components.li, {
        children: "Developers are free to customize pluggable widgets based on their own business requirements."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "the-edu-ui-layer",
      children: "The Edu UI layer"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "This module provides UI templates for three types of classrooms: One-to-one Classroom, Small Classroom, and Lecture Hall."
      }), `
`, _jsx(_components.li, {
        children: "This layer is open-sourced and available on GitHub. Developers can edit the source code to add customized classroom types."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "edu-context-native",
      children: "Edu Context (Native)"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "This module is for native clients, including Android and iOS."
      }), `
`, _jsx(_components.li, {
        children: "It connects the Edu UI layer with the Edu Core layer and enables developers to quickly launch a flexible classroom with a small amount of code."
      }), `
`, _jsx(_components.li, {
        children: "This layer is open-sourced and provides APIs for modules such as users, rooms, streams, and widgets."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "edu-ui-store-webelectron",
      children: "Edu UI Store (Web/Electron)"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "This module is for the Web and Electron clients."
      }), `
`, _jsx(_components.li, {
        children: "It implements business logic for the containers in the Edu UI layer and defines states and APIs used by the Edu UI layer."
      }), `
`, _jsx(_components.li, {
        children: "This module is open-sourced and available on GitHub. Developers are free to edit the source code based on their own UI requirements."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "the-edu-core-layer",
      children: "The Edu Core layer"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "This layer provides core business abilities and data support for the upper layers."
      }), `
`, _jsx(_components.li, {
        children: "This layer is closed source and provides modular interfaces for the user, room, stream, device, and widget management. With these abilities and API methods, developers can control operations and behaviors in classrooms."
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
