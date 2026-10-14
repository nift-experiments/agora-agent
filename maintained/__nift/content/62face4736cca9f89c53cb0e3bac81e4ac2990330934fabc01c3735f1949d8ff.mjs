import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "TEN metadata system",
  description: "Use manifest and property metadata to describe TEN packages, configure runtime behavior, and validate app configuration."
};
export let _markdown = `

The TEN Framework uses a metadata system to define, validate, and manage configuration data across all components in your application. The system applies consistently to all package types in the framework, namely:

* **App**: Main application containers that orchestrate the overall system behavior
* **Extension**: Individual functional components that implement specific features or capabilities
* **Extension Group**: Collections of related extensions that work together as a coordinated unit
* **Protocol**: Communication protocol handlers that manage data exchange between components
* **System**: Core framework components that provide essential runtime services

The metadata system provides several key benefits:

* **Type safety and validation**: Ensures data integrity by validating property types and values at runtime, preventing common configuration errors before they cause application failures.
* **Clear API definitions**: Establishes standardized interfaces between components, making it easier to understand how different parts of your application communicate and what data they expect.
* **Runtime flexibility**: Allows you to modify configuration settings while your application runs, enabling dynamic behavior changes without requiring restarts or redeployment.
* **Dependency management**: Tracks relationships between components and their version requirements, ensuring compatibility and proper loading order.

The metadata system consists of two main files in each package:

* \`manifest.json\` for structural definitions and schemas
* \`property.json\` for runtime configuration values

## Manifest File System [#manifest-file-system]

The \`manifest.json\` file serves as the primary metadata definition for each TEN package. Located in the package's root directory, it defines the package's core metadata and API specifications:

* **Package identification**: Name and version following semantic versioning
* **Dependencies**: Required packages and their version constraints
* **API schema definitions**: Type definitions for properties and messages
  * **Property schemas**: Data type specifications for package configuration
  * **Message schemas**: Input/output message format definitions

The TEN schema in \`manifest.json\` provides metadata about the package's external API, enabling:

* **Property validation**: Validates properties when the runtime gets/sets them
* **Data conversion**: Converts JSON to TEN package or message properties using the \`from_json\` API
* **Compatibility checks**: Verifies if messages can be routed between extensions according to the TEN schema

### File structure and required fields [#file-structure-and-required-fields]

The \`manifest.json\` file contains the following main sections:

* \`type\`: Package type: app, extension, extension\\_group, protocol, system
* \`name\`: Unique package identifier
* \`version\`: Semantic version number
* \`dependencies\`: Array of required packages with version constraints
* \`api\`: Complete API specification including properties and message definitions

### Dependencies Section [#dependencies-section]

Dependencies specify other packages required for this package to function properly. Each dependency includes:

\`\`\`json
"dependencies": [
  {
    "type": "system",
    "name": "ten_runtime",
    "version": "1.0.0"
  }
]
\`\`\`

### API schema definitions [#api-schema-definitions]

The \`api\` section defines the complete interface specification for the package, including:

* \`property\`: Package property schemas with type definitions
* \`cmd_in\`/\`cmd_out\`: Command message schemas for input and output
* \`data_in\`/\`data_out\`: Data message schemas for input and output
* \`video_frame_in\`/\`video_frame_out\`: Video frame message schemas
* \`audio_frame_in\`/\`audio_frame_out\`: Audio frame message schemas

<CalloutContainer type="info">
  <CalloutDescription>
    The TEN schema in \`manifest.json\` is not a JSON schema. It describes TEN value metadata that are central to the TEN runtime, while JSON serves only as a representation format.
  </CalloutDescription>
</CalloutContainer>

Example \`manifest.json\`:

\`\`\`json
{
  "type": "app",
  "name": "default_app_cpp",
  "version": "1.0.0",
  "dependencies": [
    {
      "type": "system",
      "name": "ten_runtime",
      "version": "1.0.0"
    }
  ],
  "api": {
    "property": {
      "exampleInt8": {
        "type": "int8"
      },
      "exampleString": {
        "type": "string"
      }
    },
    "cmd_in": [
      {
        "name": "cmd_foo",
        "property": {
          "foo": {
            "type": "int8"
          },
          "bar": {
            "type": "string"
          }
        },
        "result": {
          "property": {
            "detail": {
              "type": "string"
            },
            "aaa": {
              "type": "int8"
            },
            "bbb": {
              "type": "string"
            }
          }
        }
      }
    ],
    "cmd_out": [],
    "data_in": [
      {
        "name": "data_foo",
        "property": {
          "foo": {
            "type": "int8"
          },
          "bar": {
            "type": "string"
          }
        }
      }
    ],
    "data_out": [],
    "video_frame_in": [],
    "video_frame_out": [],
    "audio_frame_in": [],
    "audio_frame_out": []
  }
}
\`\`\`

## Property File System [#property-file-system]

The \`property.json\` file, located in the package's root directory, contains runtime configuration values that the TEN Framework can modify during execution. These properties:

* Store configurable settings and parameters
* Support runtime modification without restarting the application
* Must conform to any schema definitions specified in the manifest file

The property system enables dynamic configuration management, allowing your TEN application to adapt its behavior based on runtime conditions or user preferences.

### Property types [#property-types]

The TEN Framework manages two distinct types of properties:

* **Message properties** are associated with messages exchanged between extensions within the framework. These properties define specific data or parameters carried within a message, such as:
  * Command parameters and arguments
  * Data payloads and content
  * Metadata for audio/video frames
  * Custom message attributes

* **Package properties** are associated with TEN packages themselves (extensions, apps, etc.). These properties define configuration or settings specific to a package, such as:
  * Runtime behavior settings
  * Initialization parameters
  * Feature flags and options
  * Connection and timeout values

### Defining properties in property.json [#defining-properties-in-propertyjson]

The \`property.json\` file defines package properties using JSON format. Properties can include various data types and nested structures:

\`\`\`json
{
 "connection_timeout": 5000,
 "max_retries": 3,
 "debug_mode": false,
 "api_endpoint": "https://api.example.com",
 "nested_config": {
   "buffer_size": 1024,
   "compression_enabled": true
 },
 "array_values": ["option1", "option2", "option3"]
}
\`\`\`

<CalloutContainer type="info">
  <CalloutDescription>
    Each property name in the \`property.json\` file must be unique.
  </CalloutDescription>
</CalloutContainer>

### Property schema definitions [#property-schema-definitions]

You can define TEN schemas for properties in the \`manifest.json\` file, enabling the TEN runtime to handle these properties more effectively. The runtime behavior depends on whether properties have corresponding schema definitions:

| Property defined | Schema defined | Runtime behavior                                           |
| ---------------- | -------------- | ---------------------------------------------------------- |
| Yes              | Yes            | Validates values against schema and enforces type checking |
| Yes              | No             | Uses default JSON handling (numbers become float64)        |

### Property validation rules [#property-validation-rules]

When TEN schemas are defined for properties, the runtime validates:

* **Type compliance**: Ensures property values match their declared types
* **Value constraints**: Enforces any specified ranges or validation rules
* **Required properties**: Verifies that mandatory properties are present
* **Format validation**: Checks string formats, numeric ranges, and other constraints

### Setting properties in \`start_graph\` [#setting-properties-in-start_graph]

You can override default property values when starting a TEN application by specifying them in the \`start_graph\` command. The runtime processes these values according to their TEN schema definitions and applies them to the appropriate package instances:

\`\`\`json
{
  "nodes": [
    {
      "type": "extension_group",
      "name": "foo_extension_group",
      "addon": "foo_extension_group_addon"
    },
    {
      "type": "extension",
      "name": "bar_extension",
      "extension_group": "foo_extension_group",
      "property": {
        "connection_timeout": 3000,
        "debug_mode": true,
        "custom_setting": "override_value"
      }
    }
  ]
}
\`\`\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The TEN Framework uses a metadata system to define, validate, and manage configuration data across all components in your application. The system applies consistently to all package types in the framework, namely:"
  }, {
    heading: undefined,
    content: "**App**: Main application containers that orchestrate the overall system behavior"
  }, {
    heading: undefined,
    content: "**Extension**: Individual functional components that implement specific features or capabilities"
  }, {
    heading: undefined,
    content: "**Extension Group**: Collections of related extensions that work together as a coordinated unit"
  }, {
    heading: undefined,
    content: "**Protocol**: Communication protocol handlers that manage data exchange between components"
  }, {
    heading: undefined,
    content: "**System**: Core framework components that provide essential runtime services"
  }, {
    heading: undefined,
    content: "The metadata system provides several key benefits:"
  }, {
    heading: undefined,
    content: "**Type safety and validation**: Ensures data integrity by validating property types and values at runtime, preventing common configuration errors before they cause application failures."
  }, {
    heading: undefined,
    content: "**Clear API definitions**: Establishes standardized interfaces between components, making it easier to understand how different parts of your application communicate and what data they expect."
  }, {
    heading: undefined,
    content: "**Runtime flexibility**: Allows you to modify configuration settings while your application runs, enabling dynamic behavior changes without requiring restarts or redeployment."
  }, {
    heading: undefined,
    content: "**Dependency management**: Tracks relationships between components and their version requirements, ensuring compatibility and proper loading order."
  }, {
    heading: undefined,
    content: "The metadata system consists of two main files in each package:"
  }, {
    heading: undefined,
    content: "`manifest.json` for structural definitions and schemas"
  }, {
    heading: undefined,
    content: "`property.json` for runtime configuration values"
  }, {
    heading: "manifest-file-system",
    content: "The `manifest.json` file serves as the primary metadata definition for each TEN package. Located in the package's root directory, it defines the package's core metadata and API specifications:"
  }, {
    heading: "manifest-file-system",
    content: "**Package identification**: Name and version following semantic versioning"
  }, {
    heading: "manifest-file-system",
    content: "**Dependencies**: Required packages and their version constraints"
  }, {
    heading: "manifest-file-system",
    content: "**API schema definitions**: Type definitions for properties and messages"
  }, {
    heading: "manifest-file-system",
    content: "**Property schemas**: Data type specifications for package configuration"
  }, {
    heading: "manifest-file-system",
    content: "**Message schemas**: Input/output message format definitions"
  }, {
    heading: "manifest-file-system",
    content: "The TEN schema in `manifest.json` provides metadata about the package's external API, enabling:"
  }, {
    heading: "manifest-file-system",
    content: "**Property validation**: Validates properties when the runtime gets/sets them"
  }, {
    heading: "manifest-file-system",
    content: "**Data conversion**: Converts JSON to TEN package or message properties using the `from_json` API"
  }, {
    heading: "manifest-file-system",
    content: "**Compatibility checks**: Verifies if messages can be routed between extensions according to the TEN schema"
  }, {
    heading: "file-structure-and-required-fields",
    content: "The `manifest.json` file contains the following main sections:"
  }, {
    heading: "file-structure-and-required-fields",
    content: "`type`: Package type: app, extension, extension\\_group, protocol, system"
  }, {
    heading: "file-structure-and-required-fields",
    content: "`name`: Unique package identifier"
  }, {
    heading: "file-structure-and-required-fields",
    content: "`version`: Semantic version number"
  }, {
    heading: "file-structure-and-required-fields",
    content: "`dependencies`: Array of required packages with version constraints"
  }, {
    heading: "file-structure-and-required-fields",
    content: "`api`: Complete API specification including properties and message definitions"
  }, {
    heading: "dependencies-section",
    content: "Dependencies specify other packages required for this package to function properly. Each dependency includes:"
  }, {
    heading: "api-schema-definitions",
    content: "The `api` section defines the complete interface specification for the package, including:"
  }, {
    heading: "api-schema-definitions",
    content: "`property`: Package property schemas with type definitions"
  }, {
    heading: "api-schema-definitions",
    content: "`cmd_in`/`cmd_out`: Command message schemas for input and output"
  }, {
    heading: "api-schema-definitions",
    content: "`data_in`/`data_out`: Data message schemas for input and output"
  }, {
    heading: "api-schema-definitions",
    content: "`video_frame_in`/`video_frame_out`: Video frame message schemas"
  }, {
    heading: "api-schema-definitions",
    content: "`audio_frame_in`/`audio_frame_out`: Audio frame message schemas"
  }, {
    heading: "api-schema-definitions",
    content: "The TEN schema in `manifest.json` is not a JSON schema. It describes TEN value metadata that are central to the TEN runtime, while JSON serves only as a representation format."
  }, {
    heading: "api-schema-definitions",
    content: "Example `manifest.json`:"
  }, {
    heading: "property-file-system",
    content: "The `property.json` file, located in the package's root directory, contains runtime configuration values that the TEN Framework can modify during execution. These properties:"
  }, {
    heading: "property-file-system",
    content: "Store configurable settings and parameters"
  }, {
    heading: "property-file-system",
    content: "Support runtime modification without restarting the application"
  }, {
    heading: "property-file-system",
    content: "Must conform to any schema definitions specified in the manifest file"
  }, {
    heading: "property-file-system",
    content: "The property system enables dynamic configuration management, allowing your TEN application to adapt its behavior based on runtime conditions or user preferences."
  }, {
    heading: "property-types",
    content: "The TEN Framework manages two distinct types of properties:"
  }, {
    heading: "property-types",
    content: "**Message properties** are associated with messages exchanged between extensions within the framework. These properties define specific data or parameters carried within a message, such as:"
  }, {
    heading: "property-types",
    content: "Command parameters and arguments"
  }, {
    heading: "property-types",
    content: "Data payloads and content"
  }, {
    heading: "property-types",
    content: "Metadata for audio/video frames"
  }, {
    heading: "property-types",
    content: "Custom message attributes"
  }, {
    heading: "property-types",
    content: "**Package properties** are associated with TEN packages themselves (extensions, apps, etc.). These properties define configuration or settings specific to a package, such as:"
  }, {
    heading: "property-types",
    content: "Runtime behavior settings"
  }, {
    heading: "property-types",
    content: "Initialization parameters"
  }, {
    heading: "property-types",
    content: "Feature flags and options"
  }, {
    heading: "property-types",
    content: "Connection and timeout values"
  }, {
    heading: "defining-properties-in-propertyjson",
    content: "The `property.json` file defines package properties using JSON format. Properties can include various data types and nested structures:"
  }, {
    heading: "defining-properties-in-propertyjson",
    content: "Each property name in the `property.json` file must be unique."
  }, {
    heading: "property-schema-definitions",
    content: "You can define TEN schemas for properties in the `manifest.json` file, enabling the TEN runtime to handle these properties more effectively. The runtime behavior depends on whether properties have corresponding schema definitions:"
  }, {
    heading: "property-schema-definitions",
    content: "Property defined"
  }, {
    heading: "property-schema-definitions",
    content: "Schema defined"
  }, {
    heading: "property-schema-definitions",
    content: "Runtime behavior"
  }, {
    heading: "property-schema-definitions",
    content: "Yes"
  }, {
    heading: "property-schema-definitions",
    content: "Yes"
  }, {
    heading: "property-schema-definitions",
    content: "Validates values against schema and enforces type checking"
  }, {
    heading: "property-schema-definitions",
    content: "Yes"
  }, {
    heading: "property-schema-definitions",
    content: "No"
  }, {
    heading: "property-schema-definitions",
    content: "Uses default JSON handling (numbers become float64)"
  }, {
    heading: "property-validation-rules",
    content: "When TEN schemas are defined for properties, the runtime validates:"
  }, {
    heading: "property-validation-rules",
    content: "**Type compliance**: Ensures property values match their declared types"
  }, {
    heading: "property-validation-rules",
    content: "**Value constraints**: Enforces any specified ranges or validation rules"
  }, {
    heading: "property-validation-rules",
    content: "**Required properties**: Verifies that mandatory properties are present"
  }, {
    heading: "property-validation-rules",
    content: "**Format validation**: Checks string formats, numeric ranges, and other constraints"
  }, {
    heading: "setting-properties-in-start_graph",
    content: "You can override default property values when starting a TEN application by specifying them in the `start_graph` command. The runtime processes these values according to their TEN schema definitions and applies them to the appropriate package instances:"
  }],
  headings: [{
    id: "manifest-file-system",
    content: "Manifest File System"
  }, {
    id: "file-structure-and-required-fields",
    content: "File structure and required fields"
  }, {
    id: "dependencies-section",
    content: "Dependencies Section"
  }, {
    id: "api-schema-definitions",
    content: "API schema definitions"
  }, {
    id: "property-file-system",
    content: "Property File System"
  }, {
    id: "property-types",
    content: "Property types"
  }, {
    id: "defining-properties-in-propertyjson",
    content: "Defining properties in property.json"
  }, {
    id: "property-schema-definitions",
    content: "Property schema definitions"
  }, {
    id: "property-validation-rules",
    content: "Property validation rules"
  }, {
    id: "setting-properties-in-start_graph",
    content: "Setting properties in `start_graph`"
  }]
};
export let toc = [{
  depth: 2,
  url: "#manifest-file-system",
  title: _jsx(_Fragment, {
    children: "Manifest File System"
  })
}, {
  depth: 3,
  url: "#file-structure-and-required-fields",
  title: _jsx(_Fragment, {
    children: "File structure and required fields"
  })
}, {
  depth: 3,
  url: "#dependencies-section",
  title: _jsx(_Fragment, {
    children: "Dependencies Section"
  })
}, {
  depth: 3,
  url: "#api-schema-definitions",
  title: _jsx(_Fragment, {
    children: "API schema definitions"
  })
}, {
  depth: 2,
  url: "#property-file-system",
  title: _jsx(_Fragment, {
    children: "Property File System"
  })
}, {
  depth: 3,
  url: "#property-types",
  title: _jsx(_Fragment, {
    children: "Property types"
  })
}, {
  depth: 3,
  url: "#defining-properties-in-propertyjson",
  title: _jsx(_Fragment, {
    children: "Defining properties in property.json"
  })
}, {
  depth: 3,
  url: "#property-schema-definitions",
  title: _jsx(_Fragment, {
    children: "Property schema definitions"
  })
}, {
  depth: 3,
  url: "#property-validation-rules",
  title: _jsx(_Fragment, {
    children: "Property validation rules"
  })
}, {
  depth: 3,
  url: "#setting-properties-in-start_graph",
  title: _jsxs(_Fragment, {
    children: ["Setting properties in ", _jsx("code", {
      children: "start_graph"
    })]
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The TEN Framework uses a metadata system to define, validate, and manage configuration data across all components in your application. The system applies consistently to all package types in the framework, namely:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "App"
        }), ": Main application containers that orchestrate the overall system behavior"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Extension"
        }), ": Individual functional components that implement specific features or capabilities"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Extension Group"
        }), ": Collections of related extensions that work together as a coordinated unit"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Protocol"
        }), ": Communication protocol handlers that manage data exchange between components"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "System"
        }), ": Core framework components that provide essential runtime services"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The metadata system provides several key benefits:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Type safety and validation"
        }), ": Ensures data integrity by validating property types and values at runtime, preventing common configuration errors before they cause application failures."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Clear API definitions"
        }), ": Establishes standardized interfaces between components, making it easier to understand how different parts of your application communicate and what data they expect."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Runtime flexibility"
        }), ": Allows you to modify configuration settings while your application runs, enabling dynamic behavior changes without requiring restarts or redeployment."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Dependency management"
        }), ": Tracks relationships between components and their version requirements, ensuring compatibility and proper loading order."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The metadata system consists of two main files in each package:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "manifest.json"
        }), " for structural definitions and schemas"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "property.json"
        }), " for runtime configuration values"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "manifest-file-system",
      children: "Manifest File System"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "manifest.json"
      }), " file serves as the primary metadata definition for each TEN package. Located in the package's root directory, it defines the package's core metadata and API specifications:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Package identification"
        }), ": Name and version following semantic versioning"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Dependencies"
        }), ": Required packages and their version constraints"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "API schema definitions"
        }), ": Type definitions for properties and messages", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Property schemas"
            }), ": Data type specifications for package configuration"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Message schemas"
            }), ": Input/output message format definitions"]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["The TEN schema in ", _jsx(_components.code, {
        children: "manifest.json"
      }), " provides metadata about the package's external API, enabling:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Property validation"
        }), ": Validates properties when the runtime gets/sets them"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Data conversion"
        }), ": Converts JSON to TEN package or message properties using the ", _jsx(_components.code, {
          children: "from_json"
        }), " API"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Compatibility checks"
        }), ": Verifies if messages can be routed between extensions according to the TEN schema"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "file-structure-and-required-fields",
      children: "File structure and required fields"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "manifest.json"
      }), " file contains the following main sections:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "type"
        }), ": Package type: app, extension, extension_group, protocol, system"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "name"
        }), ": Unique package identifier"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "version"
        }), ": Semantic version number"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "dependencies"
        }), ": Array of required packages with version constraints"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "api"
        }), ": Complete API specification including properties and message definitions"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "dependencies-section",
      children: "Dependencies Section"
    }), `
`, _jsx(_components.p, {
      children: "Dependencies specify other packages required for this package to function properly. Each dependency includes:"
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"dependencies"'
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
              children: "  {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "type"'
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
              children: '"system"'
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
              children: '    "name"'
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
              children: '"ten_runtime"'
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
              children: '    "version"'
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
              children: '"1.0.0"'
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
              children: "]"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "api-schema-definitions",
      children: "API schema definitions"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "api"
      }), " section defines the complete interface specification for the package, including:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "property"
        }), ": Package property schemas with type definitions"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "cmd_in"
        }), "/", _jsx(_components.code, {
          children: "cmd_out"
        }), ": Command message schemas for input and output"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "data_in"
        }), "/", _jsx(_components.code, {
          children: "data_out"
        }), ": Data message schemas for input and output"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "video_frame_in"
        }), "/", _jsx(_components.code, {
          children: "video_frame_out"
        }), ": Video frame message schemas"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "audio_frame_in"
        }), "/", _jsx(_components.code, {
          children: "audio_frame_out"
        }), ": Audio frame message schemas"]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["The TEN schema in ", _jsx(_components.code, {
            children: "manifest.json"
          }), " is not a JSON schema. It describes TEN value metadata that are central to the TEN runtime, while JSON serves only as a representation format."]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Example ", _jsx(_components.code, {
        children: "manifest.json"
      }), ":"]
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
              children: '  "type"'
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
              children: '"app"'
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
              children: '  "name"'
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
              children: '"default_app_cpp"'
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
              children: '  "version"'
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
              children: '"1.0.0"'
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
              children: '  "dependencies"'
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
              children: "    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "type"'
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
              children: '"system"'
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
              children: '      "name"'
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
              children: '"ten_runtime"'
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
              children: '      "version"'
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
              children: '"1.0.0"'
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
              children: "  ],"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "api"'
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
              children: '    "property"'
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
              children: '      "exampleInt8"'
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
              children: '        "type"'
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
              children: "      },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "exampleString"'
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
              children: '        "type"'
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
              children: "      }"
            })
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "cmd_in"'
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
              children: "      {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "name"'
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
              children: '"cmd_foo"'
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
              children: '        "property"'
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
              children: '          "foo"'
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
              children: '            "type"'
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
              children: "          },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '          "bar"'
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
              children: '            "type"'
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
              children: "          }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "result"'
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
              children: '          "property"'
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
              children: '            "detail"'
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
              children: '              "type"'
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
              children: "            },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "aaa"'
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
              children: '              "type"'
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
              children: "            },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "bbb"'
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
              children: '              "type"'
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
              children: "            }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "          }"
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
              children: "      }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    ],"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "cmd_out"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": [],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "data_in"'
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
              children: "      {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "name"'
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
              children: '"data_foo"'
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
              children: '        "property"'
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
              children: '          "foo"'
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
              children: '            "type"'
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
              children: "          },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '          "bar"'
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
              children: '            "type"'
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
              children: "          }"
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
              children: "      }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    ],"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "data_out"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": [],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "video_frame_in"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": [],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "video_frame_out"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": [],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "audio_frame_in"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": [],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "audio_frame_out"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": []"
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
    }), `
`, _jsx(_components.h2, {
      id: "property-file-system",
      children: "Property File System"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "property.json"
      }), " file, located in the package's root directory, contains runtime configuration values that the TEN Framework can modify during execution. These properties:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Store configurable settings and parameters"
      }), `
`, _jsx(_components.li, {
        children: "Support runtime modification without restarting the application"
      }), `
`, _jsx(_components.li, {
        children: "Must conform to any schema definitions specified in the manifest file"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The property system enables dynamic configuration management, allowing your TEN application to adapt its behavior based on runtime conditions or user preferences."
    }), `
`, _jsx(_components.h3, {
      id: "property-types",
      children: "Property types"
    }), `
`, _jsx(_components.p, {
      children: "The TEN Framework manages two distinct types of properties:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Message properties"
          }), " are associated with messages exchanged between extensions within the framework. These properties define specific data or parameters carried within a message, such as:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Command parameters and arguments"
          }), `
`, _jsx(_components.li, {
            children: "Data payloads and content"
          }), `
`, _jsx(_components.li, {
            children: "Metadata for audio/video frames"
          }), `
`, _jsx(_components.li, {
            children: "Custom message attributes"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Package properties"
          }), " are associated with TEN packages themselves (extensions, apps, etc.). These properties define configuration or settings specific to a package, such as:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Runtime behavior settings"
          }), `
`, _jsx(_components.li, {
            children: "Initialization parameters"
          }), `
`, _jsx(_components.li, {
            children: "Feature flags and options"
          }), `
`, _jsx(_components.li, {
            children: "Connection and timeout values"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "defining-properties-in-propertyjson",
      children: "Defining properties in property.json"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "property.json"
      }), " file defines package properties using JSON format. Properties can include various data types and nested structures:"]
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
              children: ' "connection_timeout"'
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
              children: "5000"
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
              children: ' "max_retries"'
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
              children: "3"
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
              children: ' "debug_mode"'
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
              children: ' "api_endpoint"'
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
              children: '"https://api.example.com"'
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
              children: ' "nested_config"'
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
              children: '   "buffer_size"'
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
              children: "1024"
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
              children: '   "compression_enabled"'
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
              children: " },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ' "array_values"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"option1"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"option2"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"option3"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
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
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Each property name in the ", _jsx(_components.code, {
            children: "property.json"
          }), " file must be unique."]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "property-schema-definitions",
      children: "Property schema definitions"
    }), `
`, _jsxs(_components.p, {
      children: ["You can define TEN schemas for properties in the ", _jsx(_components.code, {
        children: "manifest.json"
      }), " file, enabling the TEN runtime to handle these properties more effectively. The runtime behavior depends on whether properties have corresponding schema definitions:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Property defined"
          }), _jsx(_components.th, {
            children: "Schema defined"
          }), _jsx(_components.th, {
            children: "Runtime behavior"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "Validates values against schema and enforces type checking"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "No"
          }), _jsx(_components.td, {
            children: "Uses default JSON handling (numbers become float64)"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "property-validation-rules",
      children: "Property validation rules"
    }), `
`, _jsx(_components.p, {
      children: "When TEN schemas are defined for properties, the runtime validates:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Type compliance"
        }), ": Ensures property values match their declared types"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Value constraints"
        }), ": Enforces any specified ranges or validation rules"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Required properties"
        }), ": Verifies that mandatory properties are present"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Format validation"
        }), ": Checks string formats, numeric ranges, and other constraints"]
      }), `
`]
    }), `
`, _jsxs(_components.h3, {
      id: "setting-properties-in-start_graph",
      children: ["Setting properties in ", _jsx(_components.code, {
        children: "start_graph"
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["You can override default property values when starting a TEN application by specifying them in the ", _jsx(_components.code, {
        children: "start_graph"
      }), " command. The runtime processes these values according to their TEN schema definitions and applies them to the appropriate package instances:"]
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
              children: '  "nodes"'
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
              children: "    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "type"'
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
              children: '"extension_group"'
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
              children: '      "name"'
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
              children: '"foo_extension_group"'
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
              children: '      "addon"'
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
              children: '"foo_extension_group_addon"'
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "type"'
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
              children: '"extension"'
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
              children: '      "name"'
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
              children: '"bar_extension"'
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
              children: '      "extension_group"'
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
              children: '"foo_extension_group"'
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
              children: '      "property"'
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
              children: '        "connection_timeout"'
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
              children: "3000"
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
              children: '        "debug_mode"'
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
              children: '        "custom_setting"'
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
              children: '"override_value"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      }"
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
              children: "  ]"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
