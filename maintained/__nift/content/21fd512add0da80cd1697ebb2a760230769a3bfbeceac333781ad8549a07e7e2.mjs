import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Project overview",
  description: "Understand the TEN Agent project structure, runtime configuration, extension folders, and local server API."
};
export let _markdown = `

The TEN Agent project is built on the TEN Framework and follows a modular architecture. This page describes the project structure, configuration system, and web server API.

TEN Agent uses a graph-based configuration system built on TEN Framework concepts. The project organizes code into modular extensions that can be orchestrated through configuration files without modifying source code.

The folder structure follows this pattern:

\`\`\`text
├── agents/
│   └── ten_packages/
│       ├── extension/
│       │   ├── openai_chatgpt_python/
│       │   │   ├── extension.py
│       │   │   ├── ..
│       │   │   └── requirements.txt
│       │   ├── elevenlabs_tts
│       │   └── ..
│       └── property.json
├── playground
├── demo
└── server
\`\`\`

It contains the following important folders and files:

* \`property.json\`: This file contains the orchestration of extensions. It is the main runtime configuration file.
* \`ten_packages/extension\`: This folder contains the extension modules. Each extension module is a separate Python/Golang/C++ package.
* \`server\`: This folder contains the web server code. It is responsible for handling the incoming requests and start/stop of agent processes.
* \`playground\`: This folder contains the UI code for the playground. It is a web-based interface to interact with the agent.

## Runtime configuration [#runtime-configuration]

The main runtime configuration file is \`property.json\`. It contains the orchestration of extensions. The file is structured as follows:

\`\`\`json
  "predefined_graphs": [
    {
      "name": "va_openai_azure_fashionai",
      "auto_start": false,
      "connections": [
        // ...
      ],
      "nodes": [
        // ...
      ]
    },
    // ...
  ]
\`\`\`

The file contains the following orchestration info:

* **Graphs**: Collections of nodes and connections that determine agent behavior
* **Nodes**: Individual extension instances with specific configurations
* **Connections**: Data flow paths between nodes

\`\`\`json
{
  "predefined_graphs": [
    {
      "name": "va_openai_azure_fashionai",
      "auto_start": false,
      "connections": [...],
      "nodes": [...]
    }
  ]
}
\`\`\`

### Graphs [#graphs]

The \`predefined_graphs\` property contains a list of available graphs. Each graph defines how the agent behaves in a specific scenario. Each graph contains:

* \`name\`: Unique identifier for the graph
* \`auto_start\`: Whether to start this graph automatically
* \`nodes\`: List of extension instances
* \`connections\`: Data routing between nodes

### Nodes [#nodes]

The \`nodes\` section contains the list of extensions that are part of the graph. Each node includes the following:

* \`name\`: Unique identifier of a node within the graph
* \`addon\`: Specifies the extension module to use. You can create multiple instances of the same extension within a graph. For example, you might include several \`chatgpt_openai_python\` nodes, each using the same \`addon\` property but with unique \`name\` properties. This allows you to run parallel instances of an extension with different configurations or behaviors.
* \`property\`: Extension-specific configuration

\`\`\`json
{
  "name": "chatgpt_openai_python",
  "addon": "chatgpt_openai_python",
  "property": {
    "api_key": "\${env:OPENAI_API_KEY|}",
    "model": "gpt-3.5-turbo",
    "temperature": 0.5,
    "max_tokens": 100,
    "prompt": "You are a helpful assistant"
  }
}
\`\`\`

#### Node properties [#node-properties]

The \`property\` section of a node configures the extension's behavior. Each extension defines its available properties in the \`manifest.json\` file within its folder. You can customize an extension by setting these runtime properties.

#### Read environment variables [#read-environment-variables]

Many extensions require API keys to function. Instead of hardcoding sensitive keys in \`property.json\`, use environment variables with the syntax \`\${env:<env_var_name>|<default_value>}\`. The following example shows how to read and use the \`OPENAI_API_KEY\` environment variable:

\`\`\`json
{
  "name": "chatgpt_openai_python",
  "addon": "chatgpt_openai_python",
  "property": {
    "api_key": "\${env:OPENAI_API_KEY|}"
  }
}
\`\`\`

### Connections [#connections]

The connections section defines how data flows between nodes. Each connection specifies:

* **Source node**: Identified by \`extension_group\` and \`extension\` properties
* **Data protocols**: Types of data that can flow: \`audio_frame\`, \`video_frame\`, \`data\`, or \`cmd\`
* **Destinations**: Where each data type is routed

For each protocol, you define destinations with:

* \`name\`: The data property key
* \`dest\`: List of target nodes

The following example connects \`agora_rtc\` extension to \`deepgram_asr\` extension. The \`agora_rtc\` extension sends \`pcm_frame\` data to \`deepgram_asr\` extension.

\`\`\`json
{
  "extension_group": "default",
  "extension": "agora_rtc",
  "audio_frame": [
    {
      "name": "pcm_frame",
      "dest": [
        {
          "extension_group": "default",
          "extension": "deepgram_asr"
        }
      ]
    }
  ]
}
\`\`\`

## Extension folder [#extension-folder]

The \`ten_packages/extension\` folder contains extension modules written in Python, Go, or C++. Each extension is a self-contained package with its own structure.
Extension folder names typically match the module name, though the definitive module name is specified in the extension's \`manifest.json\` file. Use this module name as the \`addon\` property value in your configuration.

The extension folder is structured as follows:

\`\`\`text
project_root/
├── ten_packages/
│   └── extension/
│       ├── sample_python_extension/
│       │   ├── ...
│       │   ├── extension.py
│       │   ├── manifest.json
│       │   └── property.json
│       ├── sample_go_extension/
│       │   ├── ...
│       │   ├── example_extension.go
│       │   ├── manifest.json
│       │   └── property.json
│       └── sample_cpp_extension/
│           ├── ...
│           ├── src/
│           │   ├── main.cc
│           │   └── ...
│           ├── BUILD.gn
│           ├── manifest.json
│           └── property.json
├── manifest.json
└── property.json
\`\`\`

### Extension common files [#extension-common-files]

* \`manifest.json\`: Defines the extension's metadata including name, version, available properties, and supported APIs such as \`data\`, \`audio_frame\`, and \`video_frame\`
* \`property.json\`: Specifies default configuration values for the extension

### Extension-specific files [#extension-specific-files]

Each language has its own set of required files for extension development:

| Language | Main logic file        | Dependencies/Build file                                                                                                              |
| -------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Python   | \`extension.py\`         | \`requirements.txt\`: Python dependencies required by the extension. Dependencies are installed automatically when you run \`task use\`. |
| Go       | \`example_extension.go\` | \`go.mod\`: Go module definition that specifies the module name and dependencies.                                                      |
| C++      | \`src/main.cc\`          | \`BUILD.gn\`: Build configuration that specifies the target name and dependencies.                                                     |

The main logic file contains the core implementation of the extension for each language.

## Web server [#web-server]

The Go-based web server manages agent processes and handles HTTP requests from clients. Both the playground and demo interfaces communicate with this server, though you can also interact directly using curl or any HTTP client.

### API endpoints [#api-endpoints]

The server exposes three endpoints for agent management:

* [POST /start](#post-start): Start an agent with specified configuration
* [POST /stop](#post-stop): Stop a running agent
* [POST /ping](#post-ping): Maintain agent connection

#### POST /start [#post-start]

Starts an agent with a specified graph and property overrides. The agent joins the specified RTC channel and subscribes to the user's audio stream.

| Parameter      | Description                                                                                                           |
| -------------- | --------------------------------------------------------------------------------------------------------------------- |
| \`request_id\`   | UUID for request tracking                                                                                             |
| \`channel_name\` | RTC channel name (must match the channel your client joins)                                                           |
| \`user_uid\`     | User's RTC identifier for audio subscription                                                                          |
| \`bot_uid\`      | Optional agent RTC identifier                                                                                         |
| \`graph_name\`   | Graph configuration name from \`property.json\`                                                                         |
| \`properties\`   | Property overrides (temporary, doesn't modify \`property.json\`)                                                        |
| \`timeout\`      | Inactivity timeout in seconds (\`-1\` disables timeout, default: 60s, configurable using \`WORKER_QUIT_TIMEOUT_SECONDS\`) |

Example:

\`\`\`bash
curl 'http://localhost:8080/start' \\
  -H 'Content-Type: application/json' \\
  --data-raw '{
    "request_id": "c1912182-924c-4d15-a8bb-85063343077c",
    "channel_name": "test",
    "user_uid": 176573,
    "graph_name": "camera_va_openai_azure",
    "properties": {
      "openai_chatgpt": {
        "model": "gpt-4o"
      }
    }
  }'
\`\`\`

#### POST /stop [#post-stop]

Stops a running agent instance.

| Parameter      | Description                               |
| -------------- | ----------------------------------------- |
| \`request_id\`   | UUID for request tracking                 |
| \`channel_name\` | Channel name used when starting the agent |

Example:

\`\`\`bash
curl 'http://localhost:8080/stop' \\
  -H 'Content-Type: application/json' \\
  --data-raw '{
    "request_id": "c1912182-924c-4d15-a8bb-85063343077c",
    "channel_name": "test"
  }'
\`\`\`

#### POST /ping [#post-ping]

Maintains the agent connection by sending a keepalive signal. Not required if the agent was started with \`timeout: -1\`. Without pings, agents terminate after the configured timeout period.

| Param          | Description                      |
| -------------- | -------------------------------- |
| \`request_id\`   | UUID for request tracking        |
| \`channel_name\` | Channel name of the active agent |

Example:

\`\`\`bash
curl 'http://localhost:8080/ping' \\
  -H 'Content-Type: application/json' \\
  --data-raw '{
    "request_id": "c1912182-924c-4d15-a8bb-85063343077c",
    "channel_name": "test"
  }'
\`\`\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The TEN Agent project is built on the TEN Framework and follows a modular architecture. This page describes the project structure, configuration system, and web server API."
  }, {
    heading: undefined,
    content: "TEN Agent uses a graph-based configuration system built on TEN Framework concepts. The project organizes code into modular extensions that can be orchestrated through configuration files without modifying source code."
  }, {
    heading: undefined,
    content: "The folder structure follows this pattern:"
  }, {
    heading: undefined,
    content: "It contains the following important folders and files:"
  }, {
    heading: undefined,
    content: "`property.json`: This file contains the orchestration of extensions. It is the main runtime configuration file."
  }, {
    heading: undefined,
    content: "`ten_packages/extension`: This folder contains the extension modules. Each extension module is a separate Python/Golang/C++ package."
  }, {
    heading: undefined,
    content: "`server`: This folder contains the web server code. It is responsible for handling the incoming requests and start/stop of agent processes."
  }, {
    heading: undefined,
    content: "`playground`: This folder contains the UI code for the playground. It is a web-based interface to interact with the agent."
  }, {
    heading: "runtime-configuration",
    content: "The main runtime configuration file is `property.json`. It contains the orchestration of extensions. The file is structured as follows:"
  }, {
    heading: "runtime-configuration",
    content: "The file contains the following orchestration info:"
  }, {
    heading: "runtime-configuration",
    content: "**Graphs**: Collections of nodes and connections that determine agent behavior"
  }, {
    heading: "runtime-configuration",
    content: "**Nodes**: Individual extension instances with specific configurations"
  }, {
    heading: "runtime-configuration",
    content: "**Connections**: Data flow paths between nodes"
  }, {
    heading: "graphs",
    content: "The `predefined_graphs` property contains a list of available graphs. Each graph defines how the agent behaves in a specific scenario. Each graph contains:"
  }, {
    heading: "graphs",
    content: "`name`: Unique identifier for the graph"
  }, {
    heading: "graphs",
    content: "`auto_start`: Whether to start this graph automatically"
  }, {
    heading: "graphs",
    content: "`nodes`: List of extension instances"
  }, {
    heading: "graphs",
    content: "`connections`: Data routing between nodes"
  }, {
    heading: "nodes",
    content: "The `nodes` section contains the list of extensions that are part of the graph. Each node includes the following:"
  }, {
    heading: "nodes",
    content: "`name`: Unique identifier of a node within the graph"
  }, {
    heading: "nodes",
    content: "`addon`: Specifies the extension module to use. You can create multiple instances of the same extension within a graph. For example, you might include several `chatgpt_openai_python` nodes, each using the same `addon` property but with unique `name` properties. This allows you to run parallel instances of an extension with different configurations or behaviors."
  }, {
    heading: "nodes",
    content: "`property`: Extension-specific configuration"
  }, {
    heading: "node-properties",
    content: "The `property` section of a node configures the extension's behavior. Each extension defines its available properties in the `manifest.json` file within its folder. You can customize an extension by setting these runtime properties."
  }, {
    heading: "read-environment-variables",
    content: "Many extensions require API keys to function. Instead of hardcoding sensitive keys in `property.json`, use environment variables with the syntax `${env:<env_var_name>|<default_value>}`. The following example shows how to read and use the `OPENAI_API_KEY` environment variable:"
  }, {
    heading: "connections",
    content: "The connections section defines how data flows between nodes. Each connection specifies:"
  }, {
    heading: "connections",
    content: "**Source node**: Identified by `extension_group` and `extension` properties"
  }, {
    heading: "connections",
    content: "**Data protocols**: Types of data that can flow: `audio_frame`, `video_frame`, `data`, or `cmd`"
  }, {
    heading: "connections",
    content: "**Destinations**: Where each data type is routed"
  }, {
    heading: "connections",
    content: "For each protocol, you define destinations with:"
  }, {
    heading: "connections",
    content: "`name`: The data property key"
  }, {
    heading: "connections",
    content: "`dest`: List of target nodes"
  }, {
    heading: "connections",
    content: "The following example connects `agora_rtc` extension to `deepgram_asr` extension. The `agora_rtc` extension sends `pcm_frame` data to `deepgram_asr` extension."
  }, {
    heading: "extension-folder",
    content: "The `ten_packages/extension` folder contains extension modules written in Python, Go, or C++. Each extension is a self-contained package with its own structure.\nExtension folder names typically match the module name, though the definitive module name is specified in the extension's `manifest.json` file. Use this module name as the `addon` property value in your configuration."
  }, {
    heading: "extension-folder",
    content: "The extension folder is structured as follows:"
  }, {
    heading: "extension-common-files",
    content: "`manifest.json`: Defines the extension's metadata including name, version, available properties, and supported APIs such as `data`, `audio_frame`, and `video_frame`"
  }, {
    heading: "extension-common-files",
    content: "`property.json`: Specifies default configuration values for the extension"
  }, {
    heading: "extension-specific-files",
    content: "Each language has its own set of required files for extension development:"
  }, {
    heading: "extension-specific-files",
    content: "Language"
  }, {
    heading: "extension-specific-files",
    content: "Main logic file"
  }, {
    heading: "extension-specific-files",
    content: "Dependencies/Build file"
  }, {
    heading: "extension-specific-files",
    content: "Python"
  }, {
    heading: "extension-specific-files",
    content: "`extension.py`"
  }, {
    heading: "extension-specific-files",
    content: "`requirements.txt`: Python dependencies required by the extension. Dependencies are installed automatically when you run `task use`."
  }, {
    heading: "extension-specific-files",
    content: "Go"
  }, {
    heading: "extension-specific-files",
    content: "`example_extension.go`"
  }, {
    heading: "extension-specific-files",
    content: "`go.mod`: Go module definition that specifies the module name and dependencies."
  }, {
    heading: "extension-specific-files",
    content: "C++"
  }, {
    heading: "extension-specific-files",
    content: "`src/main.cc`"
  }, {
    heading: "extension-specific-files",
    content: "`BUILD.gn`: Build configuration that specifies the target name and dependencies."
  }, {
    heading: "extension-specific-files",
    content: "The main logic file contains the core implementation of the extension for each language."
  }, {
    heading: "web-server",
    content: "The Go-based web server manages agent processes and handles HTTP requests from clients. Both the playground and demo interfaces communicate with this server, though you can also interact directly using curl or any HTTP client."
  }, {
    heading: "api-endpoints",
    content: "The server exposes three endpoints for agent management:"
  }, {
    heading: "api-endpoints",
    content: "POST /start: Start an agent with specified configuration"
  }, {
    heading: "api-endpoints",
    content: "POST /stop: Stop a running agent"
  }, {
    heading: "api-endpoints",
    content: "POST /ping: Maintain agent connection"
  }, {
    heading: "post-start",
    content: "Starts an agent with a specified graph and property overrides. The agent joins the specified RTC channel and subscribes to the user's audio stream."
  }, {
    heading: "post-start",
    content: "Parameter"
  }, {
    heading: "post-start",
    content: "Description"
  }, {
    heading: "post-start",
    content: "`request_id`"
  }, {
    heading: "post-start",
    content: "UUID for request tracking"
  }, {
    heading: "post-start",
    content: "`channel_name`"
  }, {
    heading: "post-start",
    content: "RTC channel name (must match the channel your client joins)"
  }, {
    heading: "post-start",
    content: "`user_uid`"
  }, {
    heading: "post-start",
    content: "User's RTC identifier for audio subscription"
  }, {
    heading: "post-start",
    content: "`bot_uid`"
  }, {
    heading: "post-start",
    content: "Optional agent RTC identifier"
  }, {
    heading: "post-start",
    content: "`graph_name`"
  }, {
    heading: "post-start",
    content: "Graph configuration name from `property.json`"
  }, {
    heading: "post-start",
    content: "`properties`"
  }, {
    heading: "post-start",
    content: "Property overrides (temporary, doesn't modify `property.json`)"
  }, {
    heading: "post-start",
    content: "`timeout`"
  }, {
    heading: "post-start",
    content: "Inactivity timeout in seconds (`-1` disables timeout, default: 60s, configurable using `WORKER_QUIT_TIMEOUT_SECONDS`)"
  }, {
    heading: "post-start",
    content: "Example:"
  }, {
    heading: "post-stop",
    content: "Stops a running agent instance."
  }, {
    heading: "post-stop",
    content: "Parameter"
  }, {
    heading: "post-stop",
    content: "Description"
  }, {
    heading: "post-stop",
    content: "`request_id`"
  }, {
    heading: "post-stop",
    content: "UUID for request tracking"
  }, {
    heading: "post-stop",
    content: "`channel_name`"
  }, {
    heading: "post-stop",
    content: "Channel name used when starting the agent"
  }, {
    heading: "post-stop",
    content: "Example:"
  }, {
    heading: "post-ping",
    content: "Maintains the agent connection by sending a keepalive signal. Not required if the agent was started with `timeout: -1`. Without pings, agents terminate after the configured timeout period."
  }, {
    heading: "post-ping",
    content: "Param"
  }, {
    heading: "post-ping",
    content: "Description"
  }, {
    heading: "post-ping",
    content: "`request_id`"
  }, {
    heading: "post-ping",
    content: "UUID for request tracking"
  }, {
    heading: "post-ping",
    content: "`channel_name`"
  }, {
    heading: "post-ping",
    content: "Channel name of the active agent"
  }, {
    heading: "post-ping",
    content: "Example:"
  }],
  headings: [{
    id: "runtime-configuration",
    content: "Runtime configuration"
  }, {
    id: "graphs",
    content: "Graphs"
  }, {
    id: "nodes",
    content: "Nodes"
  }, {
    id: "node-properties",
    content: "Node properties"
  }, {
    id: "read-environment-variables",
    content: "Read environment variables"
  }, {
    id: "connections",
    content: "Connections"
  }, {
    id: "extension-folder",
    content: "Extension folder"
  }, {
    id: "extension-common-files",
    content: "Extension common files"
  }, {
    id: "extension-specific-files",
    content: "Extension-specific files"
  }, {
    id: "web-server",
    content: "Web server"
  }, {
    id: "api-endpoints",
    content: "API endpoints"
  }, {
    id: "post-start",
    content: "POST /start"
  }, {
    id: "post-stop",
    content: "POST /stop"
  }, {
    id: "post-ping",
    content: "POST /ping"
  }]
};
export let toc = [{
  depth: 2,
  url: "#runtime-configuration",
  title: _jsx(_Fragment, {
    children: "Runtime configuration"
  })
}, {
  depth: 3,
  url: "#graphs",
  title: _jsx(_Fragment, {
    children: "Graphs"
  })
}, {
  depth: 3,
  url: "#nodes",
  title: _jsx(_Fragment, {
    children: "Nodes"
  })
}, {
  depth: 4,
  url: "#node-properties",
  title: _jsx(_Fragment, {
    children: "Node properties"
  })
}, {
  depth: 4,
  url: "#read-environment-variables",
  title: _jsx(_Fragment, {
    children: "Read environment variables"
  })
}, {
  depth: 3,
  url: "#connections",
  title: _jsx(_Fragment, {
    children: "Connections"
  })
}, {
  depth: 2,
  url: "#extension-folder",
  title: _jsx(_Fragment, {
    children: "Extension folder"
  })
}, {
  depth: 3,
  url: "#extension-common-files",
  title: _jsx(_Fragment, {
    children: "Extension common files"
  })
}, {
  depth: 3,
  url: "#extension-specific-files",
  title: _jsx(_Fragment, {
    children: "Extension-specific files"
  })
}, {
  depth: 2,
  url: "#web-server",
  title: _jsx(_Fragment, {
    children: "Web server"
  })
}, {
  depth: 3,
  url: "#api-endpoints",
  title: _jsx(_Fragment, {
    children: "API endpoints"
  })
}, {
  depth: 4,
  url: "#post-start",
  title: _jsx(_Fragment, {
    children: "POST /start"
  })
}, {
  depth: 4,
  url: "#post-stop",
  title: _jsx(_Fragment, {
    children: "POST /stop"
  })
}, {
  depth: 4,
  url: "#post-ping",
  title: _jsx(_Fragment, {
    children: "POST /ping"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The TEN Agent project is built on the TEN Framework and follows a modular architecture. This page describes the project structure, configuration system, and web server API."
    }), `
`, _jsx(_components.p, {
      children: "TEN Agent uses a graph-based configuration system built on TEN Framework concepts. The project organizes code into modular extensions that can be orchestrated through configuration files without modifying source code."
    }), `
`, _jsx(_components.p, {
      children: "The folder structure follows this pattern:"
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
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " agents/"
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
              children: " ten_packages/"
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
              children: " extension/"
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
              children: "       │"
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
              children: " openai_chatgpt_python/"
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
              children: "       │"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
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
              children: " extension.py"
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
              children: "       │"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
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
              children: " .."
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
              children: "       │"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
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
              children: " requirements.txt"
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
              children: "       │"
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
              children: " elevenlabs_tts"
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
              children: "       │"
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
              children: " .."
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
              children: " property.json"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " playground"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " demo"
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
              children: " server"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "It contains the following important folders and files:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "property.json"
        }), ": This file contains the orchestration of extensions. It is the main runtime configuration file."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "ten_packages/extension"
        }), ": This folder contains the extension modules. Each extension module is a separate Python/Golang/C++ package."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "server"
        }), ": This folder contains the web server code. It is responsible for handling the incoming requests and start/stop of agent processes."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "playground"
        }), ": This folder contains the UI code for the playground. It is a web-based interface to interact with the agent."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "runtime-configuration",
      children: "Runtime configuration"
    }), `
`, _jsxs(_components.p, {
      children: ["The main runtime configuration file is ", _jsx(_components.code, {
        children: "property.json"
      }), ". It contains the orchestration of extensions. The file is structured as follows:"]
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
              children: '  "predefined_graphs"'
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
              children: '"va_openai_azure_fashionai"'
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
              children: '      "auto_start"'
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
              children: '      "connections"'
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
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "        // ..."
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      ],"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "nodes"'
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
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "        // ..."
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      ]"
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
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "    // ..."
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
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "The file contains the following orchestration info:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Graphs"
        }), ": Collections of nodes and connections that determine agent behavior"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Nodes"
        }), ": Individual extension instances with specific configurations"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Connections"
        }), ": Data flow paths between nodes"]
      }), `
`]
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
              children: '  "predefined_graphs"'
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
              children: '"va_openai_azure_fashionai"'
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
              children: '      "auto_start"'
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
              children: '      "connections"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "nodes"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "..."
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
    }), `
`, _jsx(_components.h3, {
      id: "graphs",
      children: "Graphs"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "predefined_graphs"
      }), " property contains a list of available graphs. Each graph defines how the agent behaves in a specific scenario. Each graph contains:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "name"
        }), ": Unique identifier for the graph"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "auto_start"
        }), ": Whether to start this graph automatically"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "nodes"
        }), ": List of extension instances"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "connections"
        }), ": Data routing between nodes"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "nodes",
      children: "Nodes"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "nodes"
      }), " section contains the list of extensions that are part of the graph. Each node includes the following:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "name"
        }), ": Unique identifier of a node within the graph"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "addon"
        }), ": Specifies the extension module to use. You can create multiple instances of the same extension within a graph. For example, you might include several ", _jsx(_components.code, {
          children: "chatgpt_openai_python"
        }), " nodes, each using the same ", _jsx(_components.code, {
          children: "addon"
        }), " property but with unique ", _jsx(_components.code, {
          children: "name"
        }), " properties. This allows you to run parallel instances of an extension with different configurations or behaviors."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "property"
        }), ": Extension-specific configuration"]
      }), `
`]
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
              children: '"chatgpt_openai_python"'
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
              children: '  "addon"'
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
              children: '"chatgpt_openai_python"'
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
              children: '  "property"'
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
              children: '    "api_key"'
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
              children: '"${env:OPENAI_API_KEY|}"'
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
              children: '    "model"'
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
              children: '"gpt-3.5-turbo"'
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
              children: '    "temperature"'
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
              children: "0.5"
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
              children: '    "max_tokens"'
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
              children: "100"
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
              children: '    "prompt"'
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
              children: '"You are a helpful assistant"'
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
`, _jsx(_components.h4, {
      id: "node-properties",
      children: "Node properties"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "property"
      }), " section of a node configures the extension's behavior. Each extension defines its available properties in the ", _jsx(_components.code, {
        children: "manifest.json"
      }), " file within its folder. You can customize an extension by setting these runtime properties."]
    }), `
`, _jsx(_components.h4, {
      id: "read-environment-variables",
      children: "Read environment variables"
    }), `
`, _jsxs(_components.p, {
      children: ["Many extensions require API keys to function. Instead of hardcoding sensitive keys in ", _jsx(_components.code, {
        children: "property.json"
      }), ", use environment variables with the syntax ", _jsx(_components.code, {
        children: "${env:<env_var_name>|<default_value>}"
      }), ". The following example shows how to read and use the ", _jsx(_components.code, {
        children: "OPENAI_API_KEY"
      }), " environment variable:"]
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
              children: '"chatgpt_openai_python"'
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
              children: '  "addon"'
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
              children: '"chatgpt_openai_python"'
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
              children: '  "property"'
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
              children: '    "api_key"'
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
              children: '"${env:OPENAI_API_KEY|}"'
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
`, _jsx(_components.h3, {
      id: "connections",
      children: "Connections"
    }), `
`, _jsx(_components.p, {
      children: "The connections section defines how data flows between nodes. Each connection specifies:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Source node"
        }), ": Identified by ", _jsx(_components.code, {
          children: "extension_group"
        }), " and ", _jsx(_components.code, {
          children: "extension"
        }), " properties"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Data protocols"
        }), ": Types of data that can flow: ", _jsx(_components.code, {
          children: "audio_frame"
        }), ", ", _jsx(_components.code, {
          children: "video_frame"
        }), ", ", _jsx(_components.code, {
          children: "data"
        }), ", or ", _jsx(_components.code, {
          children: "cmd"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Destinations"
        }), ": Where each data type is routed"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "For each protocol, you define destinations with:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "name"
        }), ": The data property key"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "dest"
        }), ": List of target nodes"]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["The following example connects ", _jsx(_components.code, {
        children: "agora_rtc"
      }), " extension to ", _jsx(_components.code, {
        children: "deepgram_asr"
      }), " extension. The ", _jsx(_components.code, {
        children: "agora_rtc"
      }), " extension sends ", _jsx(_components.code, {
        children: "pcm_frame"
      }), " data to ", _jsx(_components.code, {
        children: "deepgram_asr"
      }), " extension."]
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
              children: '  "extension_group"'
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
              children: '"default"'
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
              children: '  "extension"'
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
              children: '"agora_rtc"'
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
              children: '  "audio_frame"'
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
              children: '"pcm_frame"'
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
              children: '      "dest"'
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
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '          "extension_group"'
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
              children: '"default"'
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
              children: '          "extension"'
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
              children: '"deepgram_asr"'
            })]
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
              children: "      ]"
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
    }), `
`, _jsx(_components.h2, {
      id: "extension-folder",
      children: "Extension folder"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "ten_packages/extension"
      }), ` folder contains extension modules written in Python, Go, or C++. Each extension is a self-contained package with its own structure.
Extension folder names typically match the module name, though the definitive module name is specified in the extension's `, _jsx(_components.code, {
        children: "manifest.json"
      }), " file. Use this module name as the ", _jsx(_components.code, {
        children: "addon"
      }), " property value in your configuration."]
    }), `
`, _jsx(_components.p, {
      children: "The extension folder is structured as follows:"
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "project_root/"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ten_packages/"
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
              children: " extension/"
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
              children: " sample_python_extension/"
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
              children: "       │"
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
              children: " ..."
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
              children: "       │"
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
              children: " extension.py"
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
              children: "       │"
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
              children: " manifest.json"
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
              children: "       │"
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
              children: " property.json"
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
              children: " sample_go_extension/"
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
              children: "       │"
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
              children: " ..."
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
              children: "       │"
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
              children: " example_extension.go"
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
              children: "       │"
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
              children: " manifest.json"
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
              children: "       │"
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
              children: " property.json"
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
              children: " sample_cpp_extension/"
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
              children: "           ├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ..."
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
              children: "           ├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " src/"
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
              children: "           │"
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
              children: " main.cc"
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
              children: "           │"
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
              children: " ..."
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
              children: "           ├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " BUILD.gn"
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
              children: "           ├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " manifest.json"
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
              children: "           └──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " property.json"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " manifest.json"
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
              children: " property.json"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "extension-common-files",
      children: "Extension common files"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "manifest.json"
        }), ": Defines the extension's metadata including name, version, available properties, and supported APIs such as ", _jsx(_components.code, {
          children: "data"
        }), ", ", _jsx(_components.code, {
          children: "audio_frame"
        }), ", and ", _jsx(_components.code, {
          children: "video_frame"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "property.json"
        }), ": Specifies default configuration values for the extension"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "extension-specific-files",
      children: "Extension-specific files"
    }), `
`, _jsx(_components.p, {
      children: "Each language has its own set of required files for extension development:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Language"
          }), _jsx(_components.th, {
            children: "Main logic file"
          }), _jsx(_components.th, {
            children: "Dependencies/Build file"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Python"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "extension.py"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "requirements.txt"
            }), ": Python dependencies required by the extension. Dependencies are installed automatically when you run ", _jsx(_components.code, {
              children: "task use"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Go"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "example_extension.go"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "go.mod"
            }), ": Go module definition that specifies the module name and dependencies."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "C++"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "src/main.cc"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "BUILD.gn"
            }), ": Build configuration that specifies the target name and dependencies."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "The main logic file contains the core implementation of the extension for each language."
    }), `
`, _jsx(_components.h2, {
      id: "web-server",
      children: "Web server"
    }), `
`, _jsx(_components.p, {
      children: "The Go-based web server manages agent processes and handles HTTP requests from clients. Both the playground and demo interfaces communicate with this server, though you can also interact directly using curl or any HTTP client."
    }), `
`, _jsx(_components.h3, {
      id: "api-endpoints",
      children: "API endpoints"
    }), `
`, _jsx(_components.p, {
      children: "The server exposes three endpoints for agent management:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "#post-start",
          children: "POST /start"
        }), ": Start an agent with specified configuration"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "#post-stop",
          children: "POST /stop"
        }), ": Stop a running agent"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "#post-ping",
          children: "POST /ping"
        }), ": Maintain agent connection"]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "post-start",
      children: "POST /start"
    }), `
`, _jsx(_components.p, {
      children: "Starts an agent with a specified graph and property overrides. The agent joins the specified RTC channel and subscribes to the user's audio stream."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "request_id"
            })
          }), _jsx(_components.td, {
            children: "UUID for request tracking"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "channel_name"
            })
          }), _jsx(_components.td, {
            children: "RTC channel name (must match the channel your client joins)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "user_uid"
            })
          }), _jsx(_components.td, {
            children: "User's RTC identifier for audio subscription"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "bot_uid"
            })
          }), _jsx(_components.td, {
            children: "Optional agent RTC identifier"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "graph_name"
            })
          }), _jsxs(_components.td, {
            children: ["Graph configuration name from ", _jsx(_components.code, {
              children: "property.json"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "properties"
            })
          }), _jsxs(_components.td, {
            children: ["Property overrides (temporary, doesn't modify ", _jsx(_components.code, {
              children: "property.json"
            }), ")"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "timeout"
            })
          }), _jsxs(_components.td, {
            children: ["Inactivity timeout in seconds (", _jsx(_components.code, {
              children: "-1"
            }), " disables timeout, default: 60s, configurable using ", _jsx(_components.code, {
              children: "WORKER_QUIT_TIMEOUT_SECONDS"
            }), ")"]
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "Example:"
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "curl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'http://localhost:8080/start'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  -H"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'Content-Type: application/json'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --data-raw"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " '{"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "request_id": "c1912182-924c-4d15-a8bb-85063343077c",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "channel_name": "test",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "user_uid": 176573,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "graph_name": "camera_va_openai_azure",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "properties": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "openai_chatgpt": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "model": "gpt-4o"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "      }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "    }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  }'"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "post-stop",
      children: "POST /stop"
    }), `
`, _jsx(_components.p, {
      children: "Stops a running agent instance."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "request_id"
            })
          }), _jsx(_components.td, {
            children: "UUID for request tracking"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "channel_name"
            })
          }), _jsx(_components.td, {
            children: "Channel name used when starting the agent"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "Example:"
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "curl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'http://localhost:8080/stop'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  -H"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'Content-Type: application/json'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --data-raw"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " '{"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "request_id": "c1912182-924c-4d15-a8bb-85063343077c",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "channel_name": "test"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  }'"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "post-ping",
      children: "POST /ping"
    }), `
`, _jsxs(_components.p, {
      children: ["Maintains the agent connection by sending a keepalive signal. Not required if the agent was started with ", _jsx(_components.code, {
        children: "timeout: -1"
      }), ". Without pings, agents terminate after the configured timeout period."]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Param"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "request_id"
            })
          }), _jsx(_components.td, {
            children: "UUID for request tracking"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "channel_name"
            })
          }), _jsx(_components.td, {
            children: "Channel name of the active agent"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "Example:"
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "curl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'http://localhost:8080/ping'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  -H"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'Content-Type: application/json'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --data-raw"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " '{"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "request_id": "c1912182-924c-4d15-a8bb-85063343077c",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "channel_name": "test"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  }'"
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
