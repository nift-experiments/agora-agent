import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "TEN message system",
  description: "Understand TEN message types, ownership rules, routing behavior, and result handling in graph-based applications."
};
export let _markdown = `

Messages are the primary communication mechanism in the TEN Framework, enabling extensions to exchange data, commands, and media content. The message system provides a structured, type-safe way for different components in your application to interact with each other.

The TEN message system offers several key benefits:

* **Type safety and validation**: Each message type has defined schemas that ensure data integrity and prevent communication errors between extensions.

* **Asynchronous communication**: Extensions can send and receive messages without blocking, enabling efficient parallel processing and responsive applications.

* **Clear interface definitions**: Message APIs in manifest files provide explicit contracts between extensions, making it easier to understand how components interact.

* **Thread safety**: The framework's ownership model ensures that messages can be safely passed between extensions running in different threads.

Messages in TEN work similarly to function calls in traditional programming, where message names act like function names, properties serve as parameters, and the framework handles routing and delivery between extensions.

## Message types and categories [#message-types-and-categories]

The TEN Framework supports four message types, each serving different communication needs:

* **Command**: Request-response messages that expect a result. For example, configuration requests and status queries
* **Data**: One-way messages for streaming content, events, and application data
* **Video Frame**: Specialized messages for video content and metadata
* **Audio Frame**: Specialized messages for audio content and metadata

The following diagram shows this categorization:

\`\`\`text
┌── Has result (expects response)
│   └── Command
│       ├── TEN Framework built-in command (name starts with \`ten:\`)
│       └── Custom command (name does not start with \`ten:\`)
└── No result (one-way communication)
   ├── Data
   │   ├── TEN Framework built-in data (name starts with \`ten:\`)
   │   └── Custom data (name does not start with \`ten:\`)
   ├── Video Frame
   │   ├── TEN Framework built-in video frame (name starts with \`ten:\`)
   │   └── Custom video frame (name does not start with \`ten:\`)
   └── Audio Frame
       ├── TEN Framework built-in audio frame (name starts with \`ten:\`)
       └── Custom audio frame (name does not start with \`ten:\`)
\`\`\`

The key distinction is that commands expect a response, while data, video, and audio messages are one-way communications.

### Built-in vs custom messages [#built-in-vs-custom-messages]

* **Built-in messages** start with \`ten:\` and provide core framework functionality.
* **Custom messages** use any other naming pattern and implement your application-specific logic.

### Message handling callbacks [#message-handling-callbacks]

Extensions handle messages through specific callback methods:

* \`OnCmd\` for commands
* \`OnData\` for data messages
* \`OnVideoFrame\` for video frames
* \`OnAudioFrame\` for audio frames

## Message naming and identification [#message-naming-and-identification]

The TEN Framework uses message names to differentiate between messages of the same type but with different purposes. Extensions use these names to determine what actions to take when receiving messages.

### Naming rules [#naming-rules]

Message names must follow these requirements:

* First character must be a letter (\`a-z\`, \`A-Z\`) or underscore (\`_\`)
* Subsequent characters can be letters (\`a-z\`, \`A-Z\`), digits (\`0-9\`), or underscores (\`_\`)
* Names starting with \`ten:\` are reserved for framework built-in messages

### Message pairing [#message-pairing]

The message pairing mechanism between extensions works like function calls in traditional programming:

* **Message name** acts as the function name - pairing relies solely on matching names
* **Message properties** serve as function parameters
* **Routing** occurs when an output message from one extension matches an input message name in another extension

The framework does not support message overloading - multiple messages with the same name but different properties are not allowed.

## Message flow patterns [#message-flow-patterns]

The TEN Framework supports the following message flow patterns to handle different communication scenarios:

### One message, one result [#one-message-one-result]

A single command produces a single response. This pattern is suitable for:

* Simple queries that return specific information
* Configuration updates that need confirmation
* Operations with clear success or failure outcomes

### One message, multiple results [#one-message-multiple-results]

A single command generates multiple responses over time. This pattern is suitable for:

* Long-running operations that provide progress updates
* Queries that return streaming data
* Operations that produce incremental results

### Multiple messages [#multiple-messages]

Multiple messages are sent without expecting results. This pattern is suitable for:

* Event notifications and broadcasts
* Streaming data flows
* Fire-and-forget operations

![Message Flow](https://assets-docs.agora.io/images/ten-framework/message_flow.png)

### API field types [#api-field-types]

The manifest API includes the following message direction specifications:

* \`cmd_in\`: Commands the extension can receive
* \`cmd_out\`: Commands the extension can send
* \`data_in\`: Data messages the extension can receive
* \`data_out\`: Data messages the extension can send
* \`video_frame_in\`: Video frames the extension can receive
* \`video_frame_out\`: Video frames the extension can send
* \`audio_frame_in\`: Audio frames the extension can receive
* \`audio_frame_out\`: Audio frames the extension can send

### API definition structure [#api-definition-structure]

Each message definition includes the message name and property schema. Following is a sample API definition:

\`\`\`json
{
 "api": {
   "cmd_in": [
     {
       "name": "process_data",
       "property": {
         "input_file": {
           "type": "string"
         },
         "quality": {
           "type": "int8"
         }
       },
       "result": {
         "property": {
           "output_path": {
             "type": "string"
           },
           "status": {
             "type": "string"
           }
         }
       }
     }
   ],
   "data_out": [
     {
       "name": "processing_progress",
       "property": {
         "percentage": {
           "type": "int8"
         },
         "current_step": {
           "type": "string"
         }
       }
     }
   ]
 }
}
\`\`\`

## Message ownership and thread safety [#message-ownership-and-thread-safety]

The TEN Framework uses an ownership model to ensure thread safety and prevent data races when messages are passed between extensions. Once a message is sent, the sending extension can no longer use it.

### Ownership transfer to extensions [#ownership-transfer-to-extensions]

When the TEN Framework delivers a message to an extension through \`OnCmd\`, \`OnData\`, \`OnVideoFrame\`, or \`OnAudioFrame\` callbacks, ownership transfers to the receiving extension. The framework guarantees that only the receiving extension has access to the message, ensuring safety across different threads.

The extension can freely use the message but must return ownership to the framework when finished. After returning ownership, the extension must not interact with the message.

![Message Processing Follows the Concept of Ownership](https://assets-docs.agora.io/images/ten-framework/message_ownership.png)

### Ownership transfer to the framework [#ownership-transfer-to-the-framework]

When an extension sends a message using APIs like \`SendCmd\`, \`ReturnResult\`, \`SendData\`, \`SendVideoFrame\`, or \`SendAudioFrame\`, ownership transfers back to the TEN Framework. The sending extension can no longer access the message after successful transmission.

### Resource ownership [#resource-ownership]

The ownership concept extends to all resources associated with a message, including buffers and data structures. Only one extension can own these resources at a time, mirroring the message ownership to maintain safety.

### Copy semantics by default [#copy-semantics-by-default]

To prevent data races from multiple extensions handling the same resource simultaneously, the TEN Framework uses **copy semantics** by default when transmitting data across boundaries. Copying ensures ownership separation and maintains safety.

### Borrowing semantics [#borrowing-semantics]

The framework also supports **borrowing semantics** for enhanced resource utilization while maintaining safety. Extensions can temporarily use resources without taking ownership through borrowing APIs, but must use GiveBack APIs to return borrowed resources.

When returning message ownership to the runtime, all associated borrowed resources must also be returned. If an extension fails to return borrowed resources, the runtime rejects the message. For example, \`SendData\` will fail.

## Commands and results [#commands-and-results]

Commands are special messages that follow a request-response pattern, where the sending extension expects to receive a result back from the receiving extension.

### Command structure [#command-structure]

Commands can be sent by TEN clients and TEN extensions to other TEN extensions. You can also use commands in situations where the result isn't required - the TEN runtime automatically discards any unnecessary results.

### Result format [#result-format]

A result is the response to a command. When extension A sends command X to extension B, extension B processes the command and sends a result back to extension A. Results can include meaningful details about the execution outcome.

The JSON representation of a typical result includes a status code:

\`\`\`json
{
  "ten": {
    "status_code": 200
  }
}
\`\`\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Messages are the primary communication mechanism in the TEN Framework, enabling extensions to exchange data, commands, and media content. The message system provides a structured, type-safe way for different components in your application to interact with each other."
  }, {
    heading: undefined,
    content: "The TEN message system offers several key benefits:"
  }, {
    heading: undefined,
    content: "**Type safety and validation**: Each message type has defined schemas that ensure data integrity and prevent communication errors between extensions."
  }, {
    heading: undefined,
    content: "**Asynchronous communication**: Extensions can send and receive messages without blocking, enabling efficient parallel processing and responsive applications."
  }, {
    heading: undefined,
    content: "**Clear interface definitions**: Message APIs in manifest files provide explicit contracts between extensions, making it easier to understand how components interact."
  }, {
    heading: undefined,
    content: "**Thread safety**: The framework's ownership model ensures that messages can be safely passed between extensions running in different threads."
  }, {
    heading: undefined,
    content: "Messages in TEN work similarly to function calls in traditional programming, where message names act like function names, properties serve as parameters, and the framework handles routing and delivery between extensions."
  }, {
    heading: "message-types-and-categories",
    content: "The TEN Framework supports four message types, each serving different communication needs:"
  }, {
    heading: "message-types-and-categories",
    content: "**Command**: Request-response messages that expect a result. For example, configuration requests and status queries"
  }, {
    heading: "message-types-and-categories",
    content: "**Data**: One-way messages for streaming content, events, and application data"
  }, {
    heading: "message-types-and-categories",
    content: "**Video Frame**: Specialized messages for video content and metadata"
  }, {
    heading: "message-types-and-categories",
    content: "**Audio Frame**: Specialized messages for audio content and metadata"
  }, {
    heading: "message-types-and-categories",
    content: "The following diagram shows this categorization:"
  }, {
    heading: "message-types-and-categories",
    content: "The key distinction is that commands expect a response, while data, video, and audio messages are one-way communications."
  }, {
    heading: "built-in-vs-custom-messages",
    content: "**Built-in messages** start with `ten:` and provide core framework functionality."
  }, {
    heading: "built-in-vs-custom-messages",
    content: "**Custom messages** use any other naming pattern and implement your application-specific logic."
  }, {
    heading: "message-handling-callbacks",
    content: "Extensions handle messages through specific callback methods:"
  }, {
    heading: "message-handling-callbacks",
    content: "`OnCmd` for commands"
  }, {
    heading: "message-handling-callbacks",
    content: "`OnData` for data messages"
  }, {
    heading: "message-handling-callbacks",
    content: "`OnVideoFrame` for video frames"
  }, {
    heading: "message-handling-callbacks",
    content: "`OnAudioFrame` for audio frames"
  }, {
    heading: "message-naming-and-identification",
    content: "The TEN Framework uses message names to differentiate between messages of the same type but with different purposes. Extensions use these names to determine what actions to take when receiving messages."
  }, {
    heading: "naming-rules",
    content: "Message names must follow these requirements:"
  }, {
    heading: "naming-rules",
    content: "First character must be a letter (`a-z`, `A-Z`) or underscore (`_`)"
  }, {
    heading: "naming-rules",
    content: "Subsequent characters can be letters (`a-z`, `A-Z`), digits (`0-9`), or underscores (`_`)"
  }, {
    heading: "naming-rules",
    content: "Names starting with `ten:` are reserved for framework built-in messages"
  }, {
    heading: "message-pairing",
    content: "The message pairing mechanism between extensions works like function calls in traditional programming:"
  }, {
    heading: "message-pairing",
    content: "**Message name** acts as the function name - pairing relies solely on matching names"
  }, {
    heading: "message-pairing",
    content: "**Message properties** serve as function parameters"
  }, {
    heading: "message-pairing",
    content: "**Routing** occurs when an output message from one extension matches an input message name in another extension"
  }, {
    heading: "message-pairing",
    content: "The framework does not support message overloading - multiple messages with the same name but different properties are not allowed."
  }, {
    heading: "message-flow-patterns",
    content: "The TEN Framework supports the following message flow patterns to handle different communication scenarios:"
  }, {
    heading: "one-message-one-result",
    content: "A single command produces a single response. This pattern is suitable for:"
  }, {
    heading: "one-message-one-result",
    content: "Simple queries that return specific information"
  }, {
    heading: "one-message-one-result",
    content: "Configuration updates that need confirmation"
  }, {
    heading: "one-message-one-result",
    content: "Operations with clear success or failure outcomes"
  }, {
    heading: "one-message-multiple-results",
    content: "A single command generates multiple responses over time. This pattern is suitable for:"
  }, {
    heading: "one-message-multiple-results",
    content: "Long-running operations that provide progress updates"
  }, {
    heading: "one-message-multiple-results",
    content: "Queries that return streaming data"
  }, {
    heading: "one-message-multiple-results",
    content: "Operations that produce incremental results"
  }, {
    heading: "multiple-messages",
    content: "Multiple messages are sent without expecting results. This pattern is suitable for:"
  }, {
    heading: "multiple-messages",
    content: "Event notifications and broadcasts"
  }, {
    heading: "multiple-messages",
    content: "Streaming data flows"
  }, {
    heading: "multiple-messages",
    content: "Fire-and-forget operations"
  }, {
    heading: "api-field-types",
    content: "The manifest API includes the following message direction specifications:"
  }, {
    heading: "api-field-types",
    content: "`cmd_in`: Commands the extension can receive"
  }, {
    heading: "api-field-types",
    content: "`cmd_out`: Commands the extension can send"
  }, {
    heading: "api-field-types",
    content: "`data_in`: Data messages the extension can receive"
  }, {
    heading: "api-field-types",
    content: "`data_out`: Data messages the extension can send"
  }, {
    heading: "api-field-types",
    content: "`video_frame_in`: Video frames the extension can receive"
  }, {
    heading: "api-field-types",
    content: "`video_frame_out`: Video frames the extension can send"
  }, {
    heading: "api-field-types",
    content: "`audio_frame_in`: Audio frames the extension can receive"
  }, {
    heading: "api-field-types",
    content: "`audio_frame_out`: Audio frames the extension can send"
  }, {
    heading: "api-definition-structure",
    content: "Each message definition includes the message name and property schema. Following is a sample API definition:"
  }, {
    heading: "message-ownership-and-thread-safety",
    content: "The TEN Framework uses an ownership model to ensure thread safety and prevent data races when messages are passed between extensions. Once a message is sent, the sending extension can no longer use it."
  }, {
    heading: "ownership-transfer-to-extensions",
    content: "When the TEN Framework delivers a message to an extension through `OnCmd`, `OnData`, `OnVideoFrame`, or `OnAudioFrame` callbacks, ownership transfers to the receiving extension. The framework guarantees that only the receiving extension has access to the message, ensuring safety across different threads."
  }, {
    heading: "ownership-transfer-to-extensions",
    content: "The extension can freely use the message but must return ownership to the framework when finished. After returning ownership, the extension must not interact with the message."
  }, {
    heading: "ownership-transfer-to-the-framework",
    content: "When an extension sends a message using APIs like `SendCmd`, `ReturnResult`, `SendData`, `SendVideoFrame`, or `SendAudioFrame`, ownership transfers back to the TEN Framework. The sending extension can no longer access the message after successful transmission."
  }, {
    heading: "resource-ownership",
    content: "The ownership concept extends to all resources associated with a message, including buffers and data structures. Only one extension can own these resources at a time, mirroring the message ownership to maintain safety."
  }, {
    heading: "copy-semantics-by-default",
    content: "To prevent data races from multiple extensions handling the same resource simultaneously, the TEN Framework uses **copy semantics** by default when transmitting data across boundaries. Copying ensures ownership separation and maintains safety."
  }, {
    heading: "borrowing-semantics",
    content: "The framework also supports **borrowing semantics** for enhanced resource utilization while maintaining safety. Extensions can temporarily use resources without taking ownership through borrowing APIs, but must use GiveBack APIs to return borrowed resources."
  }, {
    heading: "borrowing-semantics",
    content: "When returning message ownership to the runtime, all associated borrowed resources must also be returned. If an extension fails to return borrowed resources, the runtime rejects the message. For example, `SendData` will fail."
  }, {
    heading: "commands-and-results",
    content: "Commands are special messages that follow a request-response pattern, where the sending extension expects to receive a result back from the receiving extension."
  }, {
    heading: "command-structure",
    content: "Commands can be sent by TEN clients and TEN extensions to other TEN extensions. You can also use commands in situations where the result isn't required - the TEN runtime automatically discards any unnecessary results."
  }, {
    heading: "result-format",
    content: "A result is the response to a command. When extension A sends command X to extension B, extension B processes the command and sends a result back to extension A. Results can include meaningful details about the execution outcome."
  }, {
    heading: "result-format",
    content: "The JSON representation of a typical result includes a status code:"
  }],
  headings: [{
    id: "message-types-and-categories",
    content: "Message types and categories"
  }, {
    id: "built-in-vs-custom-messages",
    content: "Built-in vs custom messages"
  }, {
    id: "message-handling-callbacks",
    content: "Message handling callbacks"
  }, {
    id: "message-naming-and-identification",
    content: "Message naming and identification"
  }, {
    id: "naming-rules",
    content: "Naming rules"
  }, {
    id: "message-pairing",
    content: "Message pairing"
  }, {
    id: "message-flow-patterns",
    content: "Message flow patterns"
  }, {
    id: "one-message-one-result",
    content: "One message, one result"
  }, {
    id: "one-message-multiple-results",
    content: "One message, multiple results"
  }, {
    id: "multiple-messages",
    content: "Multiple messages"
  }, {
    id: "api-field-types",
    content: "API field types"
  }, {
    id: "api-definition-structure",
    content: "API definition structure"
  }, {
    id: "message-ownership-and-thread-safety",
    content: "Message ownership and thread safety"
  }, {
    id: "ownership-transfer-to-extensions",
    content: "Ownership transfer to extensions"
  }, {
    id: "ownership-transfer-to-the-framework",
    content: "Ownership transfer to the framework"
  }, {
    id: "resource-ownership",
    content: "Resource ownership"
  }, {
    id: "copy-semantics-by-default",
    content: "Copy semantics by default"
  }, {
    id: "borrowing-semantics",
    content: "Borrowing semantics"
  }, {
    id: "commands-and-results",
    content: "Commands and results"
  }, {
    id: "command-structure",
    content: "Command structure"
  }, {
    id: "result-format",
    content: "Result format"
  }]
};
export let toc = [{
  depth: 2,
  url: "#message-types-and-categories",
  title: _jsx(_Fragment, {
    children: "Message types and categories"
  })
}, {
  depth: 3,
  url: "#built-in-vs-custom-messages",
  title: _jsx(_Fragment, {
    children: "Built-in vs custom messages"
  })
}, {
  depth: 3,
  url: "#message-handling-callbacks",
  title: _jsx(_Fragment, {
    children: "Message handling callbacks"
  })
}, {
  depth: 2,
  url: "#message-naming-and-identification",
  title: _jsx(_Fragment, {
    children: "Message naming and identification"
  })
}, {
  depth: 3,
  url: "#naming-rules",
  title: _jsx(_Fragment, {
    children: "Naming rules"
  })
}, {
  depth: 3,
  url: "#message-pairing",
  title: _jsx(_Fragment, {
    children: "Message pairing"
  })
}, {
  depth: 2,
  url: "#message-flow-patterns",
  title: _jsx(_Fragment, {
    children: "Message flow patterns"
  })
}, {
  depth: 3,
  url: "#one-message-one-result",
  title: _jsx(_Fragment, {
    children: "One message, one result"
  })
}, {
  depth: 3,
  url: "#one-message-multiple-results",
  title: _jsx(_Fragment, {
    children: "One message, multiple results"
  })
}, {
  depth: 3,
  url: "#multiple-messages",
  title: _jsx(_Fragment, {
    children: "Multiple messages"
  })
}, {
  depth: 3,
  url: "#api-field-types",
  title: _jsx(_Fragment, {
    children: "API field types"
  })
}, {
  depth: 3,
  url: "#api-definition-structure",
  title: _jsx(_Fragment, {
    children: "API definition structure"
  })
}, {
  depth: 2,
  url: "#message-ownership-and-thread-safety",
  title: _jsx(_Fragment, {
    children: "Message ownership and thread safety"
  })
}, {
  depth: 3,
  url: "#ownership-transfer-to-extensions",
  title: _jsx(_Fragment, {
    children: "Ownership transfer to extensions"
  })
}, {
  depth: 3,
  url: "#ownership-transfer-to-the-framework",
  title: _jsx(_Fragment, {
    children: "Ownership transfer to the framework"
  })
}, {
  depth: 3,
  url: "#resource-ownership",
  title: _jsx(_Fragment, {
    children: "Resource ownership"
  })
}, {
  depth: 3,
  url: "#copy-semantics-by-default",
  title: _jsx(_Fragment, {
    children: "Copy semantics by default"
  })
}, {
  depth: 3,
  url: "#borrowing-semantics",
  title: _jsx(_Fragment, {
    children: "Borrowing semantics"
  })
}, {
  depth: 2,
  url: "#commands-and-results",
  title: _jsx(_Fragment, {
    children: "Commands and results"
  })
}, {
  depth: 3,
  url: "#command-structure",
  title: _jsx(_Fragment, {
    children: "Command structure"
  })
}, {
  depth: 3,
  url: "#result-format",
  title: _jsx(_Fragment, {
    children: "Result format"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Messages are the primary communication mechanism in the TEN Framework, enabling extensions to exchange data, commands, and media content. The message system provides a structured, type-safe way for different components in your application to interact with each other."
    }), `
`, _jsx(_components.p, {
      children: "The TEN message system offers several key benefits:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Type safety and validation"
          }), ": Each message type has defined schemas that ensure data integrity and prevent communication errors between extensions."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Asynchronous communication"
          }), ": Extensions can send and receive messages without blocking, enabling efficient parallel processing and responsive applications."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Clear interface definitions"
          }), ": Message APIs in manifest files provide explicit contracts between extensions, making it easier to understand how components interact."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Thread safety"
          }), ": The framework's ownership model ensures that messages can be safely passed between extensions running in different threads."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Messages in TEN work similarly to function calls in traditional programming, where message names act like function names, properties serve as parameters, and the framework handles routing and delivery between extensions."
    }), `
`, _jsx(_components.h2, {
      id: "message-types-and-categories",
      children: "Message types and categories"
    }), `
`, _jsx(_components.p, {
      children: "The TEN Framework supports four message types, each serving different communication needs:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Command"
        }), ": Request-response messages that expect a result. For example, configuration requests and status queries"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Data"
        }), ": One-way messages for streaming content, events, and application data"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Video Frame"
        }), ": Specialized messages for video content and metadata"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Audio Frame"
        }), ": Specialized messages for audio content and metadata"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The following diagram shows this categorization:"
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
              children: "┌──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Has"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " result"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (expects "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "response"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "   └──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Command"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "       ├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " TEN"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Framework"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " built-in"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " command"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (name "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "starts"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " with"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " `"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ten:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "`"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "       └──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Custom"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " command"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (name "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "does"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " not"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " start"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " with"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " `"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ten:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "`"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "└──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " No"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " result"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (one-way "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "communication"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Data"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " TEN"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Framework"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " built-in"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (name "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "starts"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " with"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " `"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ten:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "`"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "   └──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Custom"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " data"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (name "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "does"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " not"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " start"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " with"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " `"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ten:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "`"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Video"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Frame"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " TEN"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Framework"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " built-in"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " video"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " frame"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (name "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "starts"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " with"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " `"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ten:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "`"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "   └──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Custom"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " video"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " frame"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (name "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "does"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " not"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " start"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " with"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " `"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ten:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "`"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "   └──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Audio"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Frame"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "       ├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " TEN"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Framework"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " built-in"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " audio"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " frame"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (name "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "starts"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " with"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " `"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ten:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "`"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "       └──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Custom"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " audio"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " frame"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (name "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "does"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " not"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " start"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " with"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " `"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ten:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "`"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "The key distinction is that commands expect a response, while data, video, and audio messages are one-way communications."
    }), `
`, _jsx(_components.h3, {
      id: "built-in-vs-custom-messages",
      children: "Built-in vs custom messages"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Built-in messages"
        }), " start with ", _jsx(_components.code, {
          children: "ten:"
        }), " and provide core framework functionality."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Custom messages"
        }), " use any other naming pattern and implement your application-specific logic."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "message-handling-callbacks",
      children: "Message handling callbacks"
    }), `
`, _jsx(_components.p, {
      children: "Extensions handle messages through specific callback methods:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "OnCmd"
        }), " for commands"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "OnData"
        }), " for data messages"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "OnVideoFrame"
        }), " for video frames"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "OnAudioFrame"
        }), " for audio frames"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "message-naming-and-identification",
      children: "Message naming and identification"
    }), `
`, _jsx(_components.p, {
      children: "The TEN Framework uses message names to differentiate between messages of the same type but with different purposes. Extensions use these names to determine what actions to take when receiving messages."
    }), `
`, _jsx(_components.h3, {
      id: "naming-rules",
      children: "Naming rules"
    }), `
`, _jsx(_components.p, {
      children: "Message names must follow these requirements:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["First character must be a letter (", _jsx(_components.code, {
          children: "a-z"
        }), ", ", _jsx(_components.code, {
          children: "A-Z"
        }), ") or underscore (", _jsx(_components.code, {
          children: "_"
        }), ")"]
      }), `
`, _jsxs(_components.li, {
        children: ["Subsequent characters can be letters (", _jsx(_components.code, {
          children: "a-z"
        }), ", ", _jsx(_components.code, {
          children: "A-Z"
        }), "), digits (", _jsx(_components.code, {
          children: "0-9"
        }), "), or underscores (", _jsx(_components.code, {
          children: "_"
        }), ")"]
      }), `
`, _jsxs(_components.li, {
        children: ["Names starting with ", _jsx(_components.code, {
          children: "ten:"
        }), " are reserved for framework built-in messages"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "message-pairing",
      children: "Message pairing"
    }), `
`, _jsx(_components.p, {
      children: "The message pairing mechanism between extensions works like function calls in traditional programming:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Message name"
        }), " acts as the function name - pairing relies solely on matching names"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Message properties"
        }), " serve as function parameters"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Routing"
        }), " occurs when an output message from one extension matches an input message name in another extension"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The framework does not support message overloading - multiple messages with the same name but different properties are not allowed."
    }), `
`, _jsx(_components.h2, {
      id: "message-flow-patterns",
      children: "Message flow patterns"
    }), `
`, _jsx(_components.p, {
      children: "The TEN Framework supports the following message flow patterns to handle different communication scenarios:"
    }), `
`, _jsx(_components.h3, {
      id: "one-message-one-result",
      children: "One message, one result"
    }), `
`, _jsx(_components.p, {
      children: "A single command produces a single response. This pattern is suitable for:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Simple queries that return specific information"
      }), `
`, _jsx(_components.li, {
        children: "Configuration updates that need confirmation"
      }), `
`, _jsx(_components.li, {
        children: "Operations with clear success or failure outcomes"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "one-message-multiple-results",
      children: "One message, multiple results"
    }), `
`, _jsx(_components.p, {
      children: "A single command generates multiple responses over time. This pattern is suitable for:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Long-running operations that provide progress updates"
      }), `
`, _jsx(_components.li, {
        children: "Queries that return streaming data"
      }), `
`, _jsx(_components.li, {
        children: "Operations that produce incremental results"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "multiple-messages",
      children: "Multiple messages"
    }), `
`, _jsx(_components.p, {
      children: "Multiple messages are sent without expecting results. This pattern is suitable for:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Event notifications and broadcasts"
      }), `
`, _jsx(_components.li, {
        children: "Streaming data flows"
      }), `
`, _jsx(_components.li, {
        children: "Fire-and-forget operations"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/ten-framework/message_flow.png",
        alt: "Message Flow"
      })
    }), `
`, _jsx(_components.h3, {
      id: "api-field-types",
      children: "API field types"
    }), `
`, _jsx(_components.p, {
      children: "The manifest API includes the following message direction specifications:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "cmd_in"
        }), ": Commands the extension can receive"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "cmd_out"
        }), ": Commands the extension can send"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "data_in"
        }), ": Data messages the extension can receive"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "data_out"
        }), ": Data messages the extension can send"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "video_frame_in"
        }), ": Video frames the extension can receive"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "video_frame_out"
        }), ": Video frames the extension can send"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "audio_frame_in"
        }), ": Audio frames the extension can receive"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "audio_frame_out"
        }), ": Audio frames the extension can send"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "api-definition-structure",
      children: "API definition structure"
    }), `
`, _jsx(_components.p, {
      children: "Each message definition includes the message name and property schema. Following is a sample API definition:"
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
              children: ' "api"'
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
              children: '   "cmd_in"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "     {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '       "name"'
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
              children: '"process_data"'
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
              children: '       "property"'
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
              children: '         "input_file"'
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
              children: '           "type"'
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
              children: '"string"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "         },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '         "quality"'
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
              children: '           "type"'
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
              children: '"int8"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "         }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "       },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '       "result"'
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
              children: '         "property"'
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
              children: '           "output_path"'
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
              children: '             "type"'
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
              children: '"string"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "           },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '           "status"'
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
              children: '             "type"'
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
              children: '"string"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "           }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "         }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "       }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "     }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "   ],"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '   "data_out"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "     {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '       "name"'
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
              children: '"processing_progress"'
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
              children: '       "property"'
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
              children: '         "percentage"'
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
              children: '           "type"'
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
              children: '"int8"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "         },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '         "current_step"'
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
              children: '           "type"'
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
              children: '"string"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "         }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "       }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "     }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "   ]"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " }"
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
`, _jsx(_components.h2, {
      id: "message-ownership-and-thread-safety",
      children: "Message ownership and thread safety"
    }), `
`, _jsx(_components.p, {
      children: "The TEN Framework uses an ownership model to ensure thread safety and prevent data races when messages are passed between extensions. Once a message is sent, the sending extension can no longer use it."
    }), `
`, _jsx(_components.h3, {
      id: "ownership-transfer-to-extensions",
      children: "Ownership transfer to extensions"
    }), `
`, _jsxs(_components.p, {
      children: ["When the TEN Framework delivers a message to an extension through ", _jsx(_components.code, {
        children: "OnCmd"
      }), ", ", _jsx(_components.code, {
        children: "OnData"
      }), ", ", _jsx(_components.code, {
        children: "OnVideoFrame"
      }), ", or ", _jsx(_components.code, {
        children: "OnAudioFrame"
      }), " callbacks, ownership transfers to the receiving extension. The framework guarantees that only the receiving extension has access to the message, ensuring safety across different threads."]
    }), `
`, _jsx(_components.p, {
      children: "The extension can freely use the message but must return ownership to the framework when finished. After returning ownership, the extension must not interact with the message."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/ten-framework/message_ownership.png",
        alt: "Message Processing Follows the Concept of Ownership"
      })
    }), `
`, _jsx(_components.h3, {
      id: "ownership-transfer-to-the-framework",
      children: "Ownership transfer to the framework"
    }), `
`, _jsxs(_components.p, {
      children: ["When an extension sends a message using APIs like ", _jsx(_components.code, {
        children: "SendCmd"
      }), ", ", _jsx(_components.code, {
        children: "ReturnResult"
      }), ", ", _jsx(_components.code, {
        children: "SendData"
      }), ", ", _jsx(_components.code, {
        children: "SendVideoFrame"
      }), ", or ", _jsx(_components.code, {
        children: "SendAudioFrame"
      }), ", ownership transfers back to the TEN Framework. The sending extension can no longer access the message after successful transmission."]
    }), `
`, _jsx(_components.h3, {
      id: "resource-ownership",
      children: "Resource ownership"
    }), `
`, _jsx(_components.p, {
      children: "The ownership concept extends to all resources associated with a message, including buffers and data structures. Only one extension can own these resources at a time, mirroring the message ownership to maintain safety."
    }), `
`, _jsx(_components.h3, {
      id: "copy-semantics-by-default",
      children: "Copy semantics by default"
    }), `
`, _jsxs(_components.p, {
      children: ["To prevent data races from multiple extensions handling the same resource simultaneously, the TEN Framework uses ", _jsx(_components.strong, {
        children: "copy semantics"
      }), " by default when transmitting data across boundaries. Copying ensures ownership separation and maintains safety."]
    }), `
`, _jsx(_components.h3, {
      id: "borrowing-semantics",
      children: "Borrowing semantics"
    }), `
`, _jsxs(_components.p, {
      children: ["The framework also supports ", _jsx(_components.strong, {
        children: "borrowing semantics"
      }), " for enhanced resource utilization while maintaining safety. Extensions can temporarily use resources without taking ownership through borrowing APIs, but must use GiveBack APIs to return borrowed resources."]
    }), `
`, _jsxs(_components.p, {
      children: ["When returning message ownership to the runtime, all associated borrowed resources must also be returned. If an extension fails to return borrowed resources, the runtime rejects the message. For example, ", _jsx(_components.code, {
        children: "SendData"
      }), " will fail."]
    }), `
`, _jsx(_components.h2, {
      id: "commands-and-results",
      children: "Commands and results"
    }), `
`, _jsx(_components.p, {
      children: "Commands are special messages that follow a request-response pattern, where the sending extension expects to receive a result back from the receiving extension."
    }), `
`, _jsx(_components.h3, {
      id: "command-structure",
      children: "Command structure"
    }), `
`, _jsx(_components.p, {
      children: "Commands can be sent by TEN clients and TEN extensions to other TEN extensions. You can also use commands in situations where the result isn't required - the TEN runtime automatically discards any unnecessary results."
    }), `
`, _jsx(_components.h3, {
      id: "result-format",
      children: "Result format"
    }), `
`, _jsx(_components.p, {
      children: "A result is the response to a command. When extension A sends command X to extension B, extension B processes the command and sends a result back to extension A. Results can include meaningful details about the execution outcome."
    }), `
`, _jsx(_components.p, {
      children: "The JSON representation of a typical result includes a status code:"
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
              children: '  "ten"'
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
              children: '    "status_code"'
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
              children: "200"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  }"
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
