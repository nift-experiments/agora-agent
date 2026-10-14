import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "TEN Framework core concepts",
  description: "Understand the TEN Framework building blocks: applications, extensions, graphs, schemas, metadata, packages, and the Cloud Store."
};
export let _markdown = `

## TEN runtime [#ten-runtime]

The TEN runtime is an execution environment designed for running applications within the TEN Framework. It provides a flexible architecture that supports extensions developed in multiple programming languages and handles various types of data streams. By managing the lifecycle of extensions, data flows, and threads, the TEN runtime offers developers a powerful tool for building a wide range of applications and services.

![TEN Framework](https://assets-docs.agora.io/images/ten-framework/ten-architecture.png)

## App [#app]

An app in the TEN Framework can operate as a standalone process or as a thread within an existing process. This flexibility allows for versatile deployment options depending on the needs of the application.

## Extension group [#extension-group]

An extension group is a mechanism that designates a specific thread for execution. All extensions within a given group are executed on the same thread, ensuring consistent and synchronized processing.

## Extension [#extension]

An extension is the fundamental building block of the TEN Framework. Developers can create extensions in various programming languages and combine them to build different applications and scenarios. The framework's design supports cross-language collaboration, enabling extensions written in different languages to work together seamlessly within the same application or service.

For example, a developer might use C++ to create an extension for real-time communication (RTC) due to its performance benefits in handling audio and video data, while developing an AI extension in Python to take advantage of its robust libraries for data analysis and machine learning. These extensions can then be integrated into a single application, leveraging the strengths of each language.

## Graph [#graph]

A graph in the TEN Framework describes the data flow between extensions. It orchestrates how data moves from one extension to another, defining the participants and the flow of data between them. For example, you can route the output of a speech-to-text (STT) extension to a large language model (LLM) extension for further processing.

The TEN Framework supports four main types of data flows between extensions:

* Command
* Data
* Video frame
* Audio frame

By defining these data flows within a graph, you can create inter-extension communication and unidirectional data streams, particularly useful for handling audio and video data.

## Component hierarchy [#component-hierarchy]

The TEN Framework uses a nested structure where apps contain graphs, graphs contain extension groups, and extension groups contain extensions. Understanding this hierarchy is essential for building and configuring TEN applications.

![Hierarchical relationship of concepts](https://assets-docs.agora.io/images/ten-framework/hierarchical_relationship_of_concepts.png)

* **App**:

  An app can execute multiple graphs, which can be either statically predefined or dynamically assembled.

* **Graph**:

  A graph is formed by multiple extensions working together to create a meaningful scenario. Each graph instance operates as a session within the app.

* **Extension group**:

  The concept of an extension group is analogous to a thread. Extensions written in the same language and within the same extension group run on the same thread during runtime. You do not need to manage threads directly; simply declare the group to which each extension belongs.

* **Extension**:

  Each extension within the framework is assigned a unique ID, structured as: \`app-uri/graph-name/group-name/extension-name\`

## TEN cloud store [#ten-cloud-store]

The TEN cloud store functions similarly to Google Play Store or Apple's App Store, providing a marketplace for extensions. You can share your own extensions or download those created by others. Integrate these extensions into TEN apps to facilitate development and expand functionality.

![TEN cloud store](https://assets-docs.agora.io/images/ten-framework/ten_cloud_store.png)

## TEN manager [#ten-manager]

The TEN manager is a tool that simplifies the management of extensions. It handles tasks such as uploading, sharing, and installing extensions, automatically managing dependencies between them and their environment. This makes the installation and publication of extensions convenient and efficient, and streamlines the development process within the TEN Framework.
`;
export let structuredData = {
  contents: [{
    heading: "ten-runtime",
    content: "The TEN runtime is an execution environment designed for running applications within the TEN Framework. It provides a flexible architecture that supports extensions developed in multiple programming languages and handles various types of data streams. By managing the lifecycle of extensions, data flows, and threads, the TEN runtime offers developers a powerful tool for building a wide range of applications and services."
  }, {
    heading: "app",
    content: "An app in the TEN Framework can operate as a standalone process or as a thread within an existing process. This flexibility allows for versatile deployment options depending on the needs of the application."
  }, {
    heading: "extension-group",
    content: "An extension group is a mechanism that designates a specific thread for execution. All extensions within a given group are executed on the same thread, ensuring consistent and synchronized processing."
  }, {
    heading: "extension",
    content: "An extension is the fundamental building block of the TEN Framework. Developers can create extensions in various programming languages and combine them to build different applications and scenarios. The framework's design supports cross-language collaboration, enabling extensions written in different languages to work together seamlessly within the same application or service."
  }, {
    heading: "extension",
    content: "For example, a developer might use C++ to create an extension for real-time communication (RTC) due to its performance benefits in handling audio and video data, while developing an AI extension in Python to take advantage of its robust libraries for data analysis and machine learning. These extensions can then be integrated into a single application, leveraging the strengths of each language."
  }, {
    heading: "graph",
    content: "A graph in the TEN Framework describes the data flow between extensions. It orchestrates how data moves from one extension to another, defining the participants and the flow of data between them. For example, you can route the output of a speech-to-text (STT) extension to a large language model (LLM) extension for further processing."
  }, {
    heading: "graph",
    content: "The TEN Framework supports four main types of data flows between extensions:"
  }, {
    heading: "graph",
    content: "Command"
  }, {
    heading: "graph",
    content: "Data"
  }, {
    heading: "graph",
    content: "Video frame"
  }, {
    heading: "graph",
    content: "Audio frame"
  }, {
    heading: "graph",
    content: "By defining these data flows within a graph, you can create inter-extension communication and unidirectional data streams, particularly useful for handling audio and video data."
  }, {
    heading: "component-hierarchy",
    content: "The TEN Framework uses a nested structure where apps contain graphs, graphs contain extension groups, and extension groups contain extensions. Understanding this hierarchy is essential for building and configuring TEN applications."
  }, {
    heading: "component-hierarchy",
    content: "**App**:"
  }, {
    heading: "component-hierarchy",
    content: "An app can execute multiple graphs, which can be either statically predefined or dynamically assembled."
  }, {
    heading: "component-hierarchy",
    content: "**Graph**:"
  }, {
    heading: "component-hierarchy",
    content: "A graph is formed by multiple extensions working together to create a meaningful scenario. Each graph instance operates as a session within the app."
  }, {
    heading: "component-hierarchy",
    content: "**Extension group**:"
  }, {
    heading: "component-hierarchy",
    content: "The concept of an extension group is analogous to a thread. Extensions written in the same language and within the same extension group run on the same thread during runtime. You do not need to manage threads directly; simply declare the group to which each extension belongs."
  }, {
    heading: "component-hierarchy",
    content: "**Extension**:"
  }, {
    heading: "component-hierarchy",
    content: "Each extension within the framework is assigned a unique ID, structured as: `app-uri/graph-name/group-name/extension-name`"
  }, {
    heading: "ten-cloud-store",
    content: "The TEN cloud store functions similarly to Google Play Store or Apple's App Store, providing a marketplace for extensions. You can share your own extensions or download those created by others. Integrate these extensions into TEN apps to facilitate development and expand functionality."
  }, {
    heading: "ten-manager",
    content: "The TEN manager is a tool that simplifies the management of extensions. It handles tasks such as uploading, sharing, and installing extensions, automatically managing dependencies between them and their environment. This makes the installation and publication of extensions convenient and efficient, and streamlines the development process within the TEN Framework."
  }],
  headings: [{
    id: "ten-runtime",
    content: "TEN runtime"
  }, {
    id: "app",
    content: "App"
  }, {
    id: "extension-group",
    content: "Extension group"
  }, {
    id: "extension",
    content: "Extension"
  }, {
    id: "graph",
    content: "Graph"
  }, {
    id: "component-hierarchy",
    content: "Component hierarchy"
  }, {
    id: "ten-cloud-store",
    content: "TEN cloud store"
  }, {
    id: "ten-manager",
    content: "TEN manager"
  }]
};
export let toc = [{
  depth: 2,
  url: "#ten-runtime",
  title: _jsx(_Fragment, {
    children: "TEN runtime"
  })
}, {
  depth: 2,
  url: "#app",
  title: _jsx(_Fragment, {
    children: "App"
  })
}, {
  depth: 2,
  url: "#extension-group",
  title: _jsx(_Fragment, {
    children: "Extension group"
  })
}, {
  depth: 2,
  url: "#extension",
  title: _jsx(_Fragment, {
    children: "Extension"
  })
}, {
  depth: 2,
  url: "#graph",
  title: _jsx(_Fragment, {
    children: "Graph"
  })
}, {
  depth: 2,
  url: "#component-hierarchy",
  title: _jsx(_Fragment, {
    children: "Component hierarchy"
  })
}, {
  depth: 2,
  url: "#ten-cloud-store",
  title: _jsx(_Fragment, {
    children: "TEN cloud store"
  })
}, {
  depth: 2,
  url: "#ten-manager",
  title: _jsx(_Fragment, {
    children: "TEN manager"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "ten-runtime",
      children: "TEN runtime"
    }), `
`, _jsx(_components.p, {
      children: "The TEN runtime is an execution environment designed for running applications within the TEN Framework. It provides a flexible architecture that supports extensions developed in multiple programming languages and handles various types of data streams. By managing the lifecycle of extensions, data flows, and threads, the TEN runtime offers developers a powerful tool for building a wide range of applications and services."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/ten-framework/ten-architecture.png",
        alt: "TEN Framework"
      })
    }), `
`, _jsx(_components.h2, {
      id: "app",
      children: "App"
    }), `
`, _jsx(_components.p, {
      children: "An app in the TEN Framework can operate as a standalone process or as a thread within an existing process. This flexibility allows for versatile deployment options depending on the needs of the application."
    }), `
`, _jsx(_components.h2, {
      id: "extension-group",
      children: "Extension group"
    }), `
`, _jsx(_components.p, {
      children: "An extension group is a mechanism that designates a specific thread for execution. All extensions within a given group are executed on the same thread, ensuring consistent and synchronized processing."
    }), `
`, _jsx(_components.h2, {
      id: "extension",
      children: "Extension"
    }), `
`, _jsx(_components.p, {
      children: "An extension is the fundamental building block of the TEN Framework. Developers can create extensions in various programming languages and combine them to build different applications and scenarios. The framework's design supports cross-language collaboration, enabling extensions written in different languages to work together seamlessly within the same application or service."
    }), `
`, _jsx(_components.p, {
      children: "For example, a developer might use C++ to create an extension for real-time communication (RTC) due to its performance benefits in handling audio and video data, while developing an AI extension in Python to take advantage of its robust libraries for data analysis and machine learning. These extensions can then be integrated into a single application, leveraging the strengths of each language."
    }), `
`, _jsx(_components.h2, {
      id: "graph",
      children: "Graph"
    }), `
`, _jsx(_components.p, {
      children: "A graph in the TEN Framework describes the data flow between extensions. It orchestrates how data moves from one extension to another, defining the participants and the flow of data between them. For example, you can route the output of a speech-to-text (STT) extension to a large language model (LLM) extension for further processing."
    }), `
`, _jsx(_components.p, {
      children: "The TEN Framework supports four main types of data flows between extensions:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Command"
      }), `
`, _jsx(_components.li, {
        children: "Data"
      }), `
`, _jsx(_components.li, {
        children: "Video frame"
      }), `
`, _jsx(_components.li, {
        children: "Audio frame"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "By defining these data flows within a graph, you can create inter-extension communication and unidirectional data streams, particularly useful for handling audio and video data."
    }), `
`, _jsx(_components.h2, {
      id: "component-hierarchy",
      children: "Component hierarchy"
    }), `
`, _jsx(_components.p, {
      children: "The TEN Framework uses a nested structure where apps contain graphs, graphs contain extension groups, and extension groups contain extensions. Understanding this hierarchy is essential for building and configuring TEN applications."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/ten-framework/hierarchical_relationship_of_concepts.png",
        alt: "Hierarchical relationship of concepts"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "App"
          }), ":"]
        }), `
`, _jsx(_components.p, {
          children: "An app can execute multiple graphs, which can be either statically predefined or dynamically assembled."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Graph"
          }), ":"]
        }), `
`, _jsx(_components.p, {
          children: "A graph is formed by multiple extensions working together to create a meaningful scenario. Each graph instance operates as a session within the app."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Extension group"
          }), ":"]
        }), `
`, _jsx(_components.p, {
          children: "The concept of an extension group is analogous to a thread. Extensions written in the same language and within the same extension group run on the same thread during runtime. You do not need to manage threads directly; simply declare the group to which each extension belongs."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Extension"
          }), ":"]
        }), `
`, _jsxs(_components.p, {
          children: ["Each extension within the framework is assigned a unique ID, structured as: ", _jsx(_components.code, {
            children: "app-uri/graph-name/group-name/extension-name"
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "ten-cloud-store",
      children: "TEN cloud store"
    }), `
`, _jsx(_components.p, {
      children: "The TEN cloud store functions similarly to Google Play Store or Apple's App Store, providing a marketplace for extensions. You can share your own extensions or download those created by others. Integrate these extensions into TEN apps to facilitate development and expand functionality."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/ten-framework/ten_cloud_store.png",
        alt: "TEN cloud store"
      })
    }), `
`, _jsx(_components.h2, {
      id: "ten-manager",
      children: "TEN manager"
    }), `
`, _jsx(_components.p, {
      children: "The TEN manager is a tool that simplifies the management of extensions. It handles tasks such as uploading, sharing, and installing extensions, automatically managing dependencies between them and their environment. This makes the installation and publication of extensions convenient and efficient, and streamlines the development process within the TEN Framework."
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
