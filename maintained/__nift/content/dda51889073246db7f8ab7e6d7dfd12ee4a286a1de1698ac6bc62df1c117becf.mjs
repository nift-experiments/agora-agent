import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "TEN package and runtime architecture",
  description: "Understand TEN package layout, runtime modes, extension lifecycle, message processing, and multi-language execution."
};
export let _markdown = `

TEN packages are the fundamental building blocks of the TEN Framework, providing a standardized structure for organizing applications, extensions, and system components. This guide explains the TEN package architecture, lifecycle management, and deployment strategies.

Understanding TEN packages is essential for effective development with the framework. Packages define how code, configuration, and dependencies are organized, while the extension lifecycle provides a predictable pattern for component initialization, operation, and cleanup across different programming languages.

Whether you're building standalone extensions, complete applications, or contributing to the framework itself, this guide covers the package structure and lifecycle concepts you need to develop robust TEN-based solutions.

## Package structure and types [#package-structure-and-types]

### Common package structure [#common-package-structure]

Every TEN package follows a standardized directory structure that ensures consistency across different package types and programming languages:

\`\`\`text
.
├── bin/
├── src/
├── manifest.json
├── manifest-lock.json
├── property.json
└── ten_packages/
   ├── extension/
   │   ├── <extension_foo>/
   │   └── <extension_bar>/
   ├── extension_group/
   │   └── <extension_group_x>/
   ├── protocol/
   │   └── <protocol_a>/
   └── system/
       ├── <system_package_1>/
       └── <system_package_2>/
\`\`\`

**Language-specific files:**

* **C++**: \`BUILD.gn\` file for the \`ten_gn\` build system
* **Go**: \`go.mod\` and \`go.sum\` files for dependency management
* **Python**: \`requirements.txt\` file for package dependencies

### Package types [#package-types]

TEN Framework packages are organized into distinct types, each serving specific purposes in the application architecture:

* **App**: Complete TEN applications that can run as standalone processes or embedded threads. Apps serve as containers for extensions and extension groups.

* **Extension**: Individual functional components that implement specific business logic or capabilities. Extensions are the primary building blocks for TEN applications.

* **Extension group**: Collections of related extensions that work together as a cohesive unit. Extension groups provide organizational structure and shared resources.

* **Protocol**: Communication protocols that define how extensions interact and exchange messages. Protocols ensure consistent data flow between components.

* **System**: Core framework components and runtime packages that provide essential TEN functionality. System packages include the runtime engine and fundamental services.

Each package type has specific responsibilities and usage patterns within the TEN ecosystem, allowing developers to build modular, scalable applications through composition.

## App packages [#app-packages]

Apps are containers that orchestrate extensions and extension groups to create complete TEN applications. Apps provide the runtime environment and can be deployed in multiple ways to suit different architectural needs.

### Deployment modes [#deployment-modes]

TEN apps have two deployment modes:

* **Process mode**: Apps run as standalone processes, typically deployed in Docker containers for cloud environments. This mode provides complete isolation and is ideal for microservices architectures.

* **Thread mode**: Apps run as embedded threads within existing applications. This mode enables incremental adoption of TEN without requiring complete application rewrites.

![Run TEN as a process or a thread](https://assets-docs.agora.io/images/ten-framework/run_ten_as_process_or_thread.png)

![Different modes of app running](https://assets-docs.agora.io/images/ten-framework/different_mode_of_app_runnings.png)

### App structure [#app-structure]

TEN apps maintain consistent folder structures across all programming languages, ensuring uniformity and predictability regardless of implementation language:

![TEN package folder structure](https://assets-docs.agora.io/images/ten-framework/ten_package_folder_structure.png)

This consistency allows developers to work with TEN apps using familiar patterns, whether building in C++, Go, Python, or other supported languages.

## Extension packages [#extension-packages]

Extension packages contain individual components that implement specific functionality within TEN applications. Extensions are the core building blocks that handle business logic, data processing, and external integrations.

### Extension lifecycle [#extension-lifecycle]

Extensions follow a predictable five-stage lifecycle that ensures proper initialization, operation, and cleanup. Each stage provides specific capabilities for message handling and inter-extension communication.

| Stage          | Purpose                        | Completion Function   |
| -------------- | ------------------------------ | --------------------- |
| \`on_configure\` | Set initial property values    | \`on_configure_done()\` |
| \`on_init\`      | Initialize extension resources | \`on_init_done()\`      |
| \`on_start\`     | Begin normal operation         | \`on_start_done()\`     |
| \`on_stop\`      | Prepare for shutdown           | \`on_stop_done()\`      |
| \`on_deinit\`    | Clean up resources             | \`on_deinit_done()\`    |

You can send messages and receive command results at any lifecycle stage, enabling flexible inter-extension dependencies and communication patterns. You must call the corresponding completion function to complete each stage and advance to the next. The following diagram illustrates the extension lifecycle flow, showing how each stage transitions to its completion function and then to the next stage:

![Extension lifecycle stage transitions](https://assets-docs.agora.io/images/ten-framework/stage-transition-graph.png)

#### \`on_configure\` [#on_configure]

Use this stage to set the initial values of your extension's properties. This allows you to use the \`get_property\` API from \`ten_env\` in other lifecycle stages to retrieve properties set during \`on_configure\`. Call \`on_configure_done()\` to mark the end of this stage.

\`\`\`cpp
void on_configure(ten::ten_env_t &ten_env) override {
 // Set the initial values of the extension's properties.
 ten_env.init_property_from_json(
   R"({
        "ten": {
          "uri": "msgpack://127.0.0.1:8001/",
          "log_level": 2
        }
      })", nullptr);
 ten_env.on_configure_done();
}
\`\`\`

#### \`on_init\` [#on_init]

Use this stage to initialize your extension. The TEN runtime queues all incoming messages until you call \`on_init_done()\`, then delivers the queued messages once your extension is ready.

**Exception:** Command results from commands you send yourself are delivered immediately, since you must be prepared to handle results from your own commands.

\`\`\`cpp
void on_init(ten::ten_env_t &ten_env) override {
  // Initialize extension resources
  ten_env.on_init_done();
}
\`\`\`

#### \`on_start\` [#on_start]

Use this stage to finalize startup operations before your extension begins receiving messages from other extensions. The TEN runtime starts delivering messages from other extensions after you call \`on_start_done()\`.

\`\`\`cpp
void on_start(ten::ten_env_t &ten_env) override {
  // Perform startup operations
  ten_env.on_start_done();
}
\`\`\`

#### \`on_stop\` [#on_stop]

Use this stage to perform cleanup operations when your extension needs to stop, such as when the containing app is terminating. Call \`on_stop_done()\` to complete the shutdown process.

\`\`\`cpp
void on_stop(ten::ten_env_t &ten_env) override {
  // Perform cleanup operations
  ten_env.on_stop_done();
}
\`\`\`

#### \`on_deinit\` [#on_deinit]

Use this stage for final resource cleanup. The TEN runtime will not deliver messages from other extensions during this stage since your extension's resources may no longer be fully available. Call \`on_deinit_done()\` to complete the lifecycle.

\`\`\`cpp
void on_deinit(ten::ten_env_t &ten_env) override {
  // Final cleanup
  ten_env.on_deinit_done();
}
\`\`\`

### Extension coordination [#extension-coordination]

Extensions operate independently through their lifecycle stages with no built-in synchronization. Each extension progresses through its own lifecycle stages without waiting for other extensions. You must explicitly implement any dependencies between extensions.

To coordinate between extensions, use message passing during lifecycle stages. For example, if extension A needs extension B to complete initialization first:

1. Extension A sends a command to extension B during its \`on_init\` stage
2. Extension B completes initialization and responds to the command
3. Extension A receives the response and calls \`on_init_done()\`

   ![Extension initialization coordination sequence](https://assets-docs.agora.io/images/ten-framework/extension-sequence.png)

You can apply the same message-passing approach to coordinate extensions at any lifecycle stage.

### Runtime interfaces [#runtime-interfaces]

Extensions interact with the TEN runtime through three primary interfaces:

* **Lifecycle callbacks**: Handle extension state transitions: \`on_init\`, \`on_deinit\`, \`on_start\`, \`on_stop\`, and \`on_configure\`.

* **Message receivers**: Process incoming messages: \`on_cmd\`, \`on_data\`, \`on_audio_frame\`, and \`on_video_frame\`.

* **Message senders**: Send outgoing messages: \`send_cmd\`, \`send_data\`, \`send_audio_frame\`, and \`send_video_frame\`.

These interfaces provide complete control over your extension's lifecycle and communication with other components in the TEN application.

### Message handling by lifecycle stage [#message-handling-by-lifecycle-stage]

Each lifecycle stage has specific message handling capabilities that determine what your extension can send and receive:

* **\`on_configure\` to \`on_configure_done\`**: Set up properties only. No message handling capabilities.

* **\`on_init\` to \`on_init_done\`**: You can send messages and receive results from your own commands, but cannot receive messages from other extensions.

* **\`on_start\` to \`on_start_done\`**: You can send messages and receive results from your own commands, but cannot receive messages from other extensions. Since properties are configured, you can perform actions that depend on these settings.

* **Normal operation (after \`on_start_done\` until \`on_stop\`)**: Full message handling capabilities. You can send and receive all types of messages and their results.

* **\`on_stop\` to \`on_stop_done\`**: You can send messages and receive results from your own commands, but cannot receive messages from other extensions.

* **\`on_deinit\` to \`on_deinit_done\`**: Similar to \`on_init\`. You can send messages and receive results from your own commands, but cannot receive messages from other extensions.

### Multi-language support [#multi-language-support]

You can implement extensions in C++, Go, and Python using the same conceptual approach across all languages. Once you learn extension development in one language, the concepts transfer easily to other supported languages.

### Asynchronous message processing [#asynchronous-message-processing]

Extensions process messages asynchronously, giving you flexibility in how and when to handle incoming data. When the TEN runtime delivers a message through callbacks like \`on_cmd\`, \`on_data\`, \`on_audio_frame\`, or \`on_video_frame\`, you can:

* Process the message immediately within the callback
* Delegate processing to other threads for parallel execution
* Forward the message to other processes or machines for distributed processing

This asynchronous design enables full utilization of multi-core and distributed computing resources without blocking the TEN runtime.

![Asynchronous Message Processing](https://assets-docs.agora.io/images/ten-framework/asynchronous_message_processing.png)

After processing completes, send results back to the TEN runtime using functions like \`send_cmd\`, \`send_data\`, \`send_audio_frame\`, or \`send_video_frame\`. You can send results at any time after processing finishes; the callback functions don't need to wait for results before returning.

### Python async extensions [#python-async-extensions]

TEN's Python async extensions provide a powerful way to handle long-running tasks asynchronously. By integrating Python's \`asyncio\` framework, these extensions ensure that operations such as network calls or file handling are efficient and non-blocking.

To wrap existing Python code that uses \`asyncio\` into a TEN extension, use the Python async extension. A Python async extension is structured as follows:

\`\`\`python
import asyncio
from ten_runtime import AsyncExtension, AsyncTenEnv

class DefaultAsyncExtension(AsyncExtension):
   async def on_configure(self, ten_env: AsyncTenEnv) -> None:
       # Mock async operation, e.g. network, file I/O.
       await asyncio.sleep(0.5)

   async def on_init(self, ten_env: AsyncTenEnv) -> None:
       # Mock async operation, e.g. network, file I/O.
       await asyncio.sleep(0.5)

   async def on_start(self, ten_env: AsyncTenEnv) -> None:
       # Mock async operation, e.g. network, file I/O.
       await asyncio.sleep(0.5)

   async def on_deinit(self, ten_env: AsyncTenEnv) -> None:
       # Mock async operation, e.g. network, file I/O.
       await asyncio.sleep(0.5)

   async def on_cmd(self, ten_env: AsyncTenEnv, cmd: Cmd) -> None:
       cmd_json = cmd.to_json()
       ten_env.log_debug(f"DefaultAsyncExtension on_cmd: {cmd_json}")

       # Mock async operation, e.g. network, file I/O.
       await asyncio.sleep(0.5)

       # Send a new command to other extensions and wait for the result. The
       # result will be returned to the original sender.
       new_cmd = Cmd.create("hello")
       cmd_result = await ten_env.send_cmd(new_cmd)
       ten_env.return_result(cmd_result, cmd)
\`\`\`

Each method simulates a delay using \`await asyncio.sleep()\`.

#### Async loop for event handling [#async-loop-for-event-handling]

To create an async event loop to handle continuous event processing:

* Create a queue using \`asyncio.Queue\`
* Create an async task for event handling in \`on_start\`
* Signal shutdown by putting \`None\` in the queue during \`on_stop\`

\`\`\`python
import asyncio
from ten_runtime import AsyncExtension, AsyncTenEnv

class DefaultAsyncExtension(AsyncExtension):
   def __init__(self):
       super().__init__()
       self.queue = asyncio.Queue()
       self.loop = None

   async def on_start(self, ten_env: AsyncTenEnv) -> None:
       self.loop = asyncio.get_event_loop()
       self.loop.create_task(self._consume())

   async def on_stop(self, ten_env: AsyncTenEnv) -> None:
       await self.queue.put(None)

   async def _consume(self) -> None:
       while True:
           try:
               value = await self.queue.get()
               if value is None:
                   self.ten_env.log_info("async loop exit")
                   break

               # Code for processing values retrieved from the queue.

           except Exception as e:
               self.ten_env.log_error(f"Failed to handle {e}")
\`\`\`

## Package deployment types [#package-deployment-types]

TEN packages come in two deployment formats:

* **Development packages**: Include source code and build configurations for creating and modifying extensions
* **Release packages**: Contain only compiled artifacts and runtime files for direct deployment

### Development packages [#development-packages]

Development packages are used for creating and modifying TEN components. They contain:

* Complete source code
* Build configurations
* Development dependencies
* Documentation and examples

Use development packages when you need to modify existing extensions or create new TEN components from scratch.

### Release packages [#release-packages]

Release packages are optimized for deployment and operation. They contain:

* Compiled binaries and libraries
* Runtime configurations
* Essential dependencies only

Use release packages for production deployment where you only need to run existing functionality without modification. Release packages require no build steps and can be deployed immediately.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "TEN packages are the fundamental building blocks of the TEN Framework, providing a standardized structure for organizing applications, extensions, and system components. This guide explains the TEN package architecture, lifecycle management, and deployment strategies."
  }, {
    heading: undefined,
    content: "Understanding TEN packages is essential for effective development with the framework. Packages define how code, configuration, and dependencies are organized, while the extension lifecycle provides a predictable pattern for component initialization, operation, and cleanup across different programming languages."
  }, {
    heading: undefined,
    content: "Whether you're building standalone extensions, complete applications, or contributing to the framework itself, this guide covers the package structure and lifecycle concepts you need to develop robust TEN-based solutions."
  }, {
    heading: "common-package-structure",
    content: "Every TEN package follows a standardized directory structure that ensures consistency across different package types and programming languages:"
  }, {
    heading: "common-package-structure",
    content: "**Language-specific files:**"
  }, {
    heading: "common-package-structure",
    content: "**C++**: `BUILD.gn` file for the `ten_gn` build system"
  }, {
    heading: "common-package-structure",
    content: "**Go**: `go.mod` and `go.sum` files for dependency management"
  }, {
    heading: "common-package-structure",
    content: "**Python**: `requirements.txt` file for package dependencies"
  }, {
    heading: "package-types",
    content: "TEN Framework packages are organized into distinct types, each serving specific purposes in the application architecture:"
  }, {
    heading: "package-types",
    content: "**App**: Complete TEN applications that can run as standalone processes or embedded threads. Apps serve as containers for extensions and extension groups."
  }, {
    heading: "package-types",
    content: "**Extension**: Individual functional components that implement specific business logic or capabilities. Extensions are the primary building blocks for TEN applications."
  }, {
    heading: "package-types",
    content: "**Extension group**: Collections of related extensions that work together as a cohesive unit. Extension groups provide organizational structure and shared resources."
  }, {
    heading: "package-types",
    content: "**Protocol**: Communication protocols that define how extensions interact and exchange messages. Protocols ensure consistent data flow between components."
  }, {
    heading: "package-types",
    content: "**System**: Core framework components and runtime packages that provide essential TEN functionality. System packages include the runtime engine and fundamental services."
  }, {
    heading: "package-types",
    content: "Each package type has specific responsibilities and usage patterns within the TEN ecosystem, allowing developers to build modular, scalable applications through composition."
  }, {
    heading: "app-packages",
    content: "Apps are containers that orchestrate extensions and extension groups to create complete TEN applications. Apps provide the runtime environment and can be deployed in multiple ways to suit different architectural needs."
  }, {
    heading: "deployment-modes",
    content: "TEN apps have two deployment modes:"
  }, {
    heading: "deployment-modes",
    content: "**Process mode**: Apps run as standalone processes, typically deployed in Docker containers for cloud environments. This mode provides complete isolation and is ideal for microservices architectures."
  }, {
    heading: "deployment-modes",
    content: "**Thread mode**: Apps run as embedded threads within existing applications. This mode enables incremental adoption of TEN without requiring complete application rewrites."
  }, {
    heading: "app-structure",
    content: "TEN apps maintain consistent folder structures across all programming languages, ensuring uniformity and predictability regardless of implementation language:"
  }, {
    heading: "app-structure",
    content: "This consistency allows developers to work with TEN apps using familiar patterns, whether building in C++, Go, Python, or other supported languages."
  }, {
    heading: "extension-packages",
    content: "Extension packages contain individual components that implement specific functionality within TEN applications. Extensions are the core building blocks that handle business logic, data processing, and external integrations."
  }, {
    heading: "extension-lifecycle",
    content: "Extensions follow a predictable five-stage lifecycle that ensures proper initialization, operation, and cleanup. Each stage provides specific capabilities for message handling and inter-extension communication."
  }, {
    heading: "extension-lifecycle",
    content: "Stage"
  }, {
    heading: "extension-lifecycle",
    content: "Purpose"
  }, {
    heading: "extension-lifecycle",
    content: "Completion Function"
  }, {
    heading: "extension-lifecycle",
    content: "`on_configure`"
  }, {
    heading: "extension-lifecycle",
    content: "Set initial property values"
  }, {
    heading: "extension-lifecycle",
    content: "`on_configure_done()`"
  }, {
    heading: "extension-lifecycle",
    content: "`on_init`"
  }, {
    heading: "extension-lifecycle",
    content: "Initialize extension resources"
  }, {
    heading: "extension-lifecycle",
    content: "`on_init_done()`"
  }, {
    heading: "extension-lifecycle",
    content: "`on_start`"
  }, {
    heading: "extension-lifecycle",
    content: "Begin normal operation"
  }, {
    heading: "extension-lifecycle",
    content: "`on_start_done()`"
  }, {
    heading: "extension-lifecycle",
    content: "`on_stop`"
  }, {
    heading: "extension-lifecycle",
    content: "Prepare for shutdown"
  }, {
    heading: "extension-lifecycle",
    content: "`on_stop_done()`"
  }, {
    heading: "extension-lifecycle",
    content: "`on_deinit`"
  }, {
    heading: "extension-lifecycle",
    content: "Clean up resources"
  }, {
    heading: "extension-lifecycle",
    content: "`on_deinit_done()`"
  }, {
    heading: "extension-lifecycle",
    content: "You can send messages and receive command results at any lifecycle stage, enabling flexible inter-extension dependencies and communication patterns. You must call the corresponding completion function to complete each stage and advance to the next. The following diagram illustrates the extension lifecycle flow, showing how each stage transitions to its completion function and then to the next stage:"
  }, {
    heading: "on_configure",
    content: "Use this stage to set the initial values of your extension's properties. This allows you to use the `get_property` API from `ten_env` in other lifecycle stages to retrieve properties set during `on_configure`. Call `on_configure_done()` to mark the end of this stage."
  }, {
    heading: "on_init",
    content: "Use this stage to initialize your extension. The TEN runtime queues all incoming messages until you call `on_init_done()`, then delivers the queued messages once your extension is ready."
  }, {
    heading: "on_init",
    content: "**Exception:** Command results from commands you send yourself are delivered immediately, since you must be prepared to handle results from your own commands."
  }, {
    heading: "on_start",
    content: "Use this stage to finalize startup operations before your extension begins receiving messages from other extensions. The TEN runtime starts delivering messages from other extensions after you call `on_start_done()`."
  }, {
    heading: "on_stop",
    content: "Use this stage to perform cleanup operations when your extension needs to stop, such as when the containing app is terminating. Call `on_stop_done()` to complete the shutdown process."
  }, {
    heading: "on_deinit",
    content: "Use this stage for final resource cleanup. The TEN runtime will not deliver messages from other extensions during this stage since your extension's resources may no longer be fully available. Call `on_deinit_done()` to complete the lifecycle."
  }, {
    heading: "extension-coordination",
    content: "Extensions operate independently through their lifecycle stages with no built-in synchronization. Each extension progresses through its own lifecycle stages without waiting for other extensions. You must explicitly implement any dependencies between extensions."
  }, {
    heading: "extension-coordination",
    content: "To coordinate between extensions, use message passing during lifecycle stages. For example, if extension A needs extension B to complete initialization first:"
  }, {
    heading: "extension-coordination",
    content: "Extension A sends a command to extension B during its `on_init` stage"
  }, {
    heading: "extension-coordination",
    content: "Extension B completes initialization and responds to the command"
  }, {
    heading: "extension-coordination",
    content: "Extension A receives the response and calls `on_init_done()`"
  }, {
    heading: "extension-coordination",
    content: "You can apply the same message-passing approach to coordinate extensions at any lifecycle stage."
  }, {
    heading: "runtime-interfaces",
    content: "Extensions interact with the TEN runtime through three primary interfaces:"
  }, {
    heading: "runtime-interfaces",
    content: "**Lifecycle callbacks**: Handle extension state transitions: `on_init`, `on_deinit`, `on_start`, `on_stop`, and `on_configure`."
  }, {
    heading: "runtime-interfaces",
    content: "**Message receivers**: Process incoming messages: `on_cmd`, `on_data`, `on_audio_frame`, and `on_video_frame`."
  }, {
    heading: "runtime-interfaces",
    content: "**Message senders**: Send outgoing messages: `send_cmd`, `send_data`, `send_audio_frame`, and `send_video_frame`."
  }, {
    heading: "runtime-interfaces",
    content: "These interfaces provide complete control over your extension's lifecycle and communication with other components in the TEN application."
  }, {
    heading: "message-handling-by-lifecycle-stage",
    content: "Each lifecycle stage has specific message handling capabilities that determine what your extension can send and receive:"
  }, {
    heading: "message-handling-by-lifecycle-stage",
    content: "**`on_configure` to `on_configure_done`**: Set up properties only. No message handling capabilities."
  }, {
    heading: "message-handling-by-lifecycle-stage",
    content: "**`on_init` to `on_init_done`**: You can send messages and receive results from your own commands, but cannot receive messages from other extensions."
  }, {
    heading: "message-handling-by-lifecycle-stage",
    content: "**`on_start` to `on_start_done`**: You can send messages and receive results from your own commands, but cannot receive messages from other extensions. Since properties are configured, you can perform actions that depend on these settings."
  }, {
    heading: "message-handling-by-lifecycle-stage",
    content: "**Normal operation (after `on_start_done` until `on_stop`)**: Full message handling capabilities. You can send and receive all types of messages and their results."
  }, {
    heading: "message-handling-by-lifecycle-stage",
    content: "**`on_stop` to `on_stop_done`**: You can send messages and receive results from your own commands, but cannot receive messages from other extensions."
  }, {
    heading: "message-handling-by-lifecycle-stage",
    content: "**`on_deinit` to `on_deinit_done`**: Similar to `on_init`. You can send messages and receive results from your own commands, but cannot receive messages from other extensions."
  }, {
    heading: "multi-language-support",
    content: "You can implement extensions in C++, Go, and Python using the same conceptual approach across all languages. Once you learn extension development in one language, the concepts transfer easily to other supported languages."
  }, {
    heading: "asynchronous-message-processing",
    content: "Extensions process messages asynchronously, giving you flexibility in how and when to handle incoming data. When the TEN runtime delivers a message through callbacks like `on_cmd`, `on_data`, `on_audio_frame`, or `on_video_frame`, you can:"
  }, {
    heading: "asynchronous-message-processing",
    content: "Process the message immediately within the callback"
  }, {
    heading: "asynchronous-message-processing",
    content: "Delegate processing to other threads for parallel execution"
  }, {
    heading: "asynchronous-message-processing",
    content: "Forward the message to other processes or machines for distributed processing"
  }, {
    heading: "asynchronous-message-processing",
    content: "This asynchronous design enables full utilization of multi-core and distributed computing resources without blocking the TEN runtime."
  }, {
    heading: "asynchronous-message-processing",
    content: "After processing completes, send results back to the TEN runtime using functions like `send_cmd`, `send_data`, `send_audio_frame`, or `send_video_frame`. You can send results at any time after processing finishes; the callback functions don't need to wait for results before returning."
  }, {
    heading: "python-async-extensions",
    content: "TEN's Python async extensions provide a powerful way to handle long-running tasks asynchronously. By integrating Python's `asyncio` framework, these extensions ensure that operations such as network calls or file handling are efficient and non-blocking."
  }, {
    heading: "python-async-extensions",
    content: "To wrap existing Python code that uses `asyncio` into a TEN extension, use the Python async extension. A Python async extension is structured as follows:"
  }, {
    heading: "python-async-extensions",
    content: "Each method simulates a delay using `await asyncio.sleep()`."
  }, {
    heading: "async-loop-for-event-handling",
    content: "To create an async event loop to handle continuous event processing:"
  }, {
    heading: "async-loop-for-event-handling",
    content: "Create a queue using `asyncio.Queue`"
  }, {
    heading: "async-loop-for-event-handling",
    content: "Create an async task for event handling in `on_start`"
  }, {
    heading: "async-loop-for-event-handling",
    content: "Signal shutdown by putting `None` in the queue during `on_stop`"
  }, {
    heading: "package-deployment-types",
    content: "TEN packages come in two deployment formats:"
  }, {
    heading: "package-deployment-types",
    content: "**Development packages**: Include source code and build configurations for creating and modifying extensions"
  }, {
    heading: "package-deployment-types",
    content: "**Release packages**: Contain only compiled artifacts and runtime files for direct deployment"
  }, {
    heading: "development-packages",
    content: "Development packages are used for creating and modifying TEN components. They contain:"
  }, {
    heading: "development-packages",
    content: "Complete source code"
  }, {
    heading: "development-packages",
    content: "Build configurations"
  }, {
    heading: "development-packages",
    content: "Development dependencies"
  }, {
    heading: "development-packages",
    content: "Documentation and examples"
  }, {
    heading: "development-packages",
    content: "Use development packages when you need to modify existing extensions or create new TEN components from scratch."
  }, {
    heading: "release-packages",
    content: "Release packages are optimized for deployment and operation. They contain:"
  }, {
    heading: "release-packages",
    content: "Compiled binaries and libraries"
  }, {
    heading: "release-packages",
    content: "Runtime configurations"
  }, {
    heading: "release-packages",
    content: "Essential dependencies only"
  }, {
    heading: "release-packages",
    content: "Use release packages for production deployment where you only need to run existing functionality without modification. Release packages require no build steps and can be deployed immediately."
  }],
  headings: [{
    id: "package-structure-and-types",
    content: "Package structure and types"
  }, {
    id: "common-package-structure",
    content: "Common package structure"
  }, {
    id: "package-types",
    content: "Package types"
  }, {
    id: "app-packages",
    content: "App packages"
  }, {
    id: "deployment-modes",
    content: "Deployment modes"
  }, {
    id: "app-structure",
    content: "App structure"
  }, {
    id: "extension-packages",
    content: "Extension packages"
  }, {
    id: "extension-lifecycle",
    content: "Extension lifecycle"
  }, {
    id: "on_configure",
    content: "`on_configure`"
  }, {
    id: "on_init",
    content: "`on_init`"
  }, {
    id: "on_start",
    content: "`on_start`"
  }, {
    id: "on_stop",
    content: "`on_stop`"
  }, {
    id: "on_deinit",
    content: "`on_deinit`"
  }, {
    id: "extension-coordination",
    content: "Extension coordination"
  }, {
    id: "runtime-interfaces",
    content: "Runtime interfaces"
  }, {
    id: "message-handling-by-lifecycle-stage",
    content: "Message handling by lifecycle stage"
  }, {
    id: "multi-language-support",
    content: "Multi-language support"
  }, {
    id: "asynchronous-message-processing",
    content: "Asynchronous message processing"
  }, {
    id: "python-async-extensions",
    content: "Python async extensions"
  }, {
    id: "async-loop-for-event-handling",
    content: "Async loop for event handling"
  }, {
    id: "package-deployment-types",
    content: "Package deployment types"
  }, {
    id: "development-packages",
    content: "Development packages"
  }, {
    id: "release-packages",
    content: "Release packages"
  }]
};
export let toc = [{
  depth: 2,
  url: "#package-structure-and-types",
  title: _jsx(_Fragment, {
    children: "Package structure and types"
  })
}, {
  depth: 3,
  url: "#common-package-structure",
  title: _jsx(_Fragment, {
    children: "Common package structure"
  })
}, {
  depth: 3,
  url: "#package-types",
  title: _jsx(_Fragment, {
    children: "Package types"
  })
}, {
  depth: 2,
  url: "#app-packages",
  title: _jsx(_Fragment, {
    children: "App packages"
  })
}, {
  depth: 3,
  url: "#deployment-modes",
  title: _jsx(_Fragment, {
    children: "Deployment modes"
  })
}, {
  depth: 3,
  url: "#app-structure",
  title: _jsx(_Fragment, {
    children: "App structure"
  })
}, {
  depth: 2,
  url: "#extension-packages",
  title: _jsx(_Fragment, {
    children: "Extension packages"
  })
}, {
  depth: 3,
  url: "#extension-lifecycle",
  title: _jsx(_Fragment, {
    children: "Extension lifecycle"
  })
}, {
  depth: 4,
  url: "#on_configure",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "on_configure"
    })
  })
}, {
  depth: 4,
  url: "#on_init",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "on_init"
    })
  })
}, {
  depth: 4,
  url: "#on_start",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "on_start"
    })
  })
}, {
  depth: 4,
  url: "#on_stop",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "on_stop"
    })
  })
}, {
  depth: 4,
  url: "#on_deinit",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "on_deinit"
    })
  })
}, {
  depth: 3,
  url: "#extension-coordination",
  title: _jsx(_Fragment, {
    children: "Extension coordination"
  })
}, {
  depth: 3,
  url: "#runtime-interfaces",
  title: _jsx(_Fragment, {
    children: "Runtime interfaces"
  })
}, {
  depth: 3,
  url: "#message-handling-by-lifecycle-stage",
  title: _jsx(_Fragment, {
    children: "Message handling by lifecycle stage"
  })
}, {
  depth: 3,
  url: "#multi-language-support",
  title: _jsx(_Fragment, {
    children: "Multi-language support"
  })
}, {
  depth: 3,
  url: "#asynchronous-message-processing",
  title: _jsx(_Fragment, {
    children: "Asynchronous message processing"
  })
}, {
  depth: 3,
  url: "#python-async-extensions",
  title: _jsx(_Fragment, {
    children: "Python async extensions"
  })
}, {
  depth: 4,
  url: "#async-loop-for-event-handling",
  title: _jsx(_Fragment, {
    children: "Async loop for event handling"
  })
}, {
  depth: 2,
  url: "#package-deployment-types",
  title: _jsx(_Fragment, {
    children: "Package deployment types"
  })
}, {
  depth: 3,
  url: "#development-packages",
  title: _jsx(_Fragment, {
    children: "Development packages"
  })
}, {
  depth: 3,
  url: "#release-packages",
  title: _jsx(_Fragment, {
    children: "Release packages"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    ol: "ol",
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
      children: "TEN packages are the fundamental building blocks of the TEN Framework, providing a standardized structure for organizing applications, extensions, and system components. This guide explains the TEN package architecture, lifecycle management, and deployment strategies."
    }), `
`, _jsx(_components.p, {
      children: "Understanding TEN packages is essential for effective development with the framework. Packages define how code, configuration, and dependencies are organized, while the extension lifecycle provides a predictable pattern for component initialization, operation, and cleanup across different programming languages."
    }), `
`, _jsx(_components.p, {
      children: "Whether you're building standalone extensions, complete applications, or contributing to the framework itself, this guide covers the package structure and lifecycle concepts you need to develop robust TEN-based solutions."
    }), `
`, _jsx(_components.h2, {
      id: "package-structure-and-types",
      children: "Package structure and types"
    }), `
`, _jsx(_components.h3, {
      id: "common-package-structure",
      children: "Common package structure"
    }), `
`, _jsx(_components.p, {
      children: "Every TEN package follows a standardized directory structure that ensures consistency across different package types and programming languages:"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "."
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
              children: " bin/"
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
              children: "├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " manifest-lock.json"
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
              children: "└──"
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
              children: "   ├──"
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
              children: "   │"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "extension_fo"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "o"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "/"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "extension_ba"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "r"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "/"
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
              children: " extension_group/"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "extension_group_"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "x"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "/"
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
              children: " protocol/"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "protocol_"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "a"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "/"
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
              children: " system/"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "system_package_"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "1>"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "/"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "system_package_"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "2>"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "/"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Language-specific files:"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "C++"
        }), ": ", _jsx(_components.code, {
          children: "BUILD.gn"
        }), " file for the ", _jsx(_components.code, {
          children: "ten_gn"
        }), " build system"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Go"
        }), ": ", _jsx(_components.code, {
          children: "go.mod"
        }), " and ", _jsx(_components.code, {
          children: "go.sum"
        }), " files for dependency management"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Python"
        }), ": ", _jsx(_components.code, {
          children: "requirements.txt"
        }), " file for package dependencies"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "package-types",
      children: "Package types"
    }), `
`, _jsx(_components.p, {
      children: "TEN Framework packages are organized into distinct types, each serving specific purposes in the application architecture:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "App"
          }), ": Complete TEN applications that can run as standalone processes or embedded threads. Apps serve as containers for extensions and extension groups."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Extension"
          }), ": Individual functional components that implement specific business logic or capabilities. Extensions are the primary building blocks for TEN applications."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Extension group"
          }), ": Collections of related extensions that work together as a cohesive unit. Extension groups provide organizational structure and shared resources."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Protocol"
          }), ": Communication protocols that define how extensions interact and exchange messages. Protocols ensure consistent data flow between components."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "System"
          }), ": Core framework components and runtime packages that provide essential TEN functionality. System packages include the runtime engine and fundamental services."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Each package type has specific responsibilities and usage patterns within the TEN ecosystem, allowing developers to build modular, scalable applications through composition."
    }), `
`, _jsx(_components.h2, {
      id: "app-packages",
      children: "App packages"
    }), `
`, _jsx(_components.p, {
      children: "Apps are containers that orchestrate extensions and extension groups to create complete TEN applications. Apps provide the runtime environment and can be deployed in multiple ways to suit different architectural needs."
    }), `
`, _jsx(_components.h3, {
      id: "deployment-modes",
      children: "Deployment modes"
    }), `
`, _jsx(_components.p, {
      children: "TEN apps have two deployment modes:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Process mode"
          }), ": Apps run as standalone processes, typically deployed in Docker containers for cloud environments. This mode provides complete isolation and is ideal for microservices architectures."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Thread mode"
          }), ": Apps run as embedded threads within existing applications. This mode enables incremental adoption of TEN without requiring complete application rewrites."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/ten-framework/run_ten_as_process_or_thread.png",
        alt: "Run TEN as a process or a thread"
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/ten-framework/different_mode_of_app_runnings.png",
        alt: "Different modes of app running"
      })
    }), `
`, _jsx(_components.h3, {
      id: "app-structure",
      children: "App structure"
    }), `
`, _jsx(_components.p, {
      children: "TEN apps maintain consistent folder structures across all programming languages, ensuring uniformity and predictability regardless of implementation language:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/ten-framework/ten_package_folder_structure.png",
        alt: "TEN package folder structure"
      })
    }), `
`, _jsx(_components.p, {
      children: "This consistency allows developers to work with TEN apps using familiar patterns, whether building in C++, Go, Python, or other supported languages."
    }), `
`, _jsx(_components.h2, {
      id: "extension-packages",
      children: "Extension packages"
    }), `
`, _jsx(_components.p, {
      children: "Extension packages contain individual components that implement specific functionality within TEN applications. Extensions are the core building blocks that handle business logic, data processing, and external integrations."
    }), `
`, _jsx(_components.h3, {
      id: "extension-lifecycle",
      children: "Extension lifecycle"
    }), `
`, _jsx(_components.p, {
      children: "Extensions follow a predictable five-stage lifecycle that ensures proper initialization, operation, and cleanup. Each stage provides specific capabilities for message handling and inter-extension communication."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Stage"
          }), _jsx(_components.th, {
            children: "Purpose"
          }), _jsx(_components.th, {
            children: "Completion Function"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "on_configure"
            })
          }), _jsx(_components.td, {
            children: "Set initial property values"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "on_configure_done()"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "on_init"
            })
          }), _jsx(_components.td, {
            children: "Initialize extension resources"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "on_init_done()"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "on_start"
            })
          }), _jsx(_components.td, {
            children: "Begin normal operation"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "on_start_done()"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "on_stop"
            })
          }), _jsx(_components.td, {
            children: "Prepare for shutdown"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "on_stop_done()"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "on_deinit"
            })
          }), _jsx(_components.td, {
            children: "Clean up resources"
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "on_deinit_done()"
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "You can send messages and receive command results at any lifecycle stage, enabling flexible inter-extension dependencies and communication patterns. You must call the corresponding completion function to complete each stage and advance to the next. The following diagram illustrates the extension lifecycle flow, showing how each stage transitions to its completion function and then to the next stage:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/ten-framework/stage-transition-graph.png",
        alt: "Extension lifecycle stage transitions"
      })
    }), `
`, _jsx(_components.h4, {
      id: "on_configure",
      children: _jsx(_components.code, {
        children: "on_configure"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Use this stage to set the initial values of your extension's properties. This allows you to use the ", _jsx(_components.code, {
        children: "get_property"
      }), " API from ", _jsx(_components.code, {
        children: "ten_env"
      }), " in other lifecycle stages to retrieve properties set during ", _jsx(_components.code, {
        children: "on_configure"
      }), ". Call ", _jsx(_components.code, {
        children: "on_configure_done()"
      }), " to mark the end of this stage."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " on_configure"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ten"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "::"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "ten_env_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " &"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "ten_env"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "override"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: " // Set the initial values of the extension's properties."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " ten_env."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "init_property_from_json"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '   R"({'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "ten": {'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "uri": "msgpack://127.0.0.1:8001/",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '          "log_level": 2'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "        }"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      })"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "nullptr"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ");"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " ten_env."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "on_configure_done"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "();"
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
`, _jsx(_components.h4, {
      id: "on_init",
      children: _jsx(_components.code, {
        children: "on_init"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Use this stage to initialize your extension. The TEN runtime queues all incoming messages until you call ", _jsx(_components.code, {
        children: "on_init_done()"
      }), ", then delivers the queued messages once your extension is ready."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Exception:"
      }), " Command results from commands you send yourself are delivered immediately, since you must be prepared to handle results from your own commands."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " on_init"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ten"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "::"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "ten_env_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " &"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "ten_env"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "override"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  // Initialize extension resources"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  ten_env."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "on_init_done"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "();"
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
`, _jsx(_components.h4, {
      id: "on_start",
      children: _jsx(_components.code, {
        children: "on_start"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Use this stage to finalize startup operations before your extension begins receiving messages from other extensions. The TEN runtime starts delivering messages from other extensions after you call ", _jsx(_components.code, {
        children: "on_start_done()"
      }), "."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " on_start"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ten"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "::"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "ten_env_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " &"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "ten_env"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "override"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  // Perform startup operations"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  ten_env."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "on_start_done"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "();"
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
`, _jsx(_components.h4, {
      id: "on_stop",
      children: _jsx(_components.code, {
        children: "on_stop"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Use this stage to perform cleanup operations when your extension needs to stop, such as when the containing app is terminating. Call ", _jsx(_components.code, {
        children: "on_stop_done()"
      }), " to complete the shutdown process."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " on_stop"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ten"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "::"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "ten_env_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " &"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "ten_env"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "override"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  // Perform cleanup operations"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  ten_env."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "on_stop_done"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "();"
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
`, _jsx(_components.h4, {
      id: "on_deinit",
      children: _jsx(_components.code, {
        children: "on_deinit"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Use this stage for final resource cleanup. The TEN runtime will not deliver messages from other extensions during this stage since your extension's resources may no longer be fully available. Call ", _jsx(_components.code, {
        children: "on_deinit_done()"
      }), " to complete the lifecycle."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " on_deinit"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ten"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "::"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "ten_env_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " &"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "ten_env"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "override"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  // Final cleanup"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  ten_env."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "on_deinit_done"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "();"
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
`, _jsx(_components.h3, {
      id: "extension-coordination",
      children: "Extension coordination"
    }), `
`, _jsx(_components.p, {
      children: "Extensions operate independently through their lifecycle stages with no built-in synchronization. Each extension progresses through its own lifecycle stages without waiting for other extensions. You must explicitly implement any dependencies between extensions."
    }), `
`, _jsx(_components.p, {
      children: "To coordinate between extensions, use message passing during lifecycle stages. For example, if extension A needs extension B to complete initialization first:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Extension A sends a command to extension B during its ", _jsx(_components.code, {
            children: "on_init"
          }), " stage"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Extension B completes initialization and responds to the command"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Extension A receives the response and calls ", _jsx(_components.code, {
            children: "on_init_done()"
          })]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/ten-framework/extension-sequence.png",
            alt: "Extension initialization coordination sequence"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "You can apply the same message-passing approach to coordinate extensions at any lifecycle stage."
    }), `
`, _jsx(_components.h3, {
      id: "runtime-interfaces",
      children: "Runtime interfaces"
    }), `
`, _jsx(_components.p, {
      children: "Extensions interact with the TEN runtime through three primary interfaces:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Lifecycle callbacks"
          }), ": Handle extension state transitions: ", _jsx(_components.code, {
            children: "on_init"
          }), ", ", _jsx(_components.code, {
            children: "on_deinit"
          }), ", ", _jsx(_components.code, {
            children: "on_start"
          }), ", ", _jsx(_components.code, {
            children: "on_stop"
          }), ", and ", _jsx(_components.code, {
            children: "on_configure"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Message receivers"
          }), ": Process incoming messages: ", _jsx(_components.code, {
            children: "on_cmd"
          }), ", ", _jsx(_components.code, {
            children: "on_data"
          }), ", ", _jsx(_components.code, {
            children: "on_audio_frame"
          }), ", and ", _jsx(_components.code, {
            children: "on_video_frame"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Message senders"
          }), ": Send outgoing messages: ", _jsx(_components.code, {
            children: "send_cmd"
          }), ", ", _jsx(_components.code, {
            children: "send_data"
          }), ", ", _jsx(_components.code, {
            children: "send_audio_frame"
          }), ", and ", _jsx(_components.code, {
            children: "send_video_frame"
          }), "."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "These interfaces provide complete control over your extension's lifecycle and communication with other components in the TEN application."
    }), `
`, _jsx(_components.h3, {
      id: "message-handling-by-lifecycle-stage",
      children: "Message handling by lifecycle stage"
    }), `
`, _jsx(_components.p, {
      children: "Each lifecycle stage has specific message handling capabilities that determine what your extension can send and receive:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsxs(_components.strong, {
            children: [_jsx(_components.code, {
              children: "on_configure"
            }), " to ", _jsx(_components.code, {
              children: "on_configure_done"
            })]
          }), ": Set up properties only. No message handling capabilities."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsxs(_components.strong, {
            children: [_jsx(_components.code, {
              children: "on_init"
            }), " to ", _jsx(_components.code, {
              children: "on_init_done"
            })]
          }), ": You can send messages and receive results from your own commands, but cannot receive messages from other extensions."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsxs(_components.strong, {
            children: [_jsx(_components.code, {
              children: "on_start"
            }), " to ", _jsx(_components.code, {
              children: "on_start_done"
            })]
          }), ": You can send messages and receive results from your own commands, but cannot receive messages from other extensions. Since properties are configured, you can perform actions that depend on these settings."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsxs(_components.strong, {
            children: ["Normal operation (after ", _jsx(_components.code, {
              children: "on_start_done"
            }), " until ", _jsx(_components.code, {
              children: "on_stop"
            }), ")"]
          }), ": Full message handling capabilities. You can send and receive all types of messages and their results."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsxs(_components.strong, {
            children: [_jsx(_components.code, {
              children: "on_stop"
            }), " to ", _jsx(_components.code, {
              children: "on_stop_done"
            })]
          }), ": You can send messages and receive results from your own commands, but cannot receive messages from other extensions."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsxs(_components.strong, {
            children: [_jsx(_components.code, {
              children: "on_deinit"
            }), " to ", _jsx(_components.code, {
              children: "on_deinit_done"
            })]
          }), ": Similar to ", _jsx(_components.code, {
            children: "on_init"
          }), ". You can send messages and receive results from your own commands, but cannot receive messages from other extensions."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "multi-language-support",
      children: "Multi-language support"
    }), `
`, _jsx(_components.p, {
      children: "You can implement extensions in C++, Go, and Python using the same conceptual approach across all languages. Once you learn extension development in one language, the concepts transfer easily to other supported languages."
    }), `
`, _jsx(_components.h3, {
      id: "asynchronous-message-processing",
      children: "Asynchronous message processing"
    }), `
`, _jsxs(_components.p, {
      children: ["Extensions process messages asynchronously, giving you flexibility in how and when to handle incoming data. When the TEN runtime delivers a message through callbacks like ", _jsx(_components.code, {
        children: "on_cmd"
      }), ", ", _jsx(_components.code, {
        children: "on_data"
      }), ", ", _jsx(_components.code, {
        children: "on_audio_frame"
      }), ", or ", _jsx(_components.code, {
        children: "on_video_frame"
      }), ", you can:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Process the message immediately within the callback"
      }), `
`, _jsx(_components.li, {
        children: "Delegate processing to other threads for parallel execution"
      }), `
`, _jsx(_components.li, {
        children: "Forward the message to other processes or machines for distributed processing"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "This asynchronous design enables full utilization of multi-core and distributed computing resources without blocking the TEN runtime."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/ten-framework/asynchronous_message_processing.png",
        alt: "Asynchronous Message Processing"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["After processing completes, send results back to the TEN runtime using functions like ", _jsx(_components.code, {
        children: "send_cmd"
      }), ", ", _jsx(_components.code, {
        children: "send_data"
      }), ", ", _jsx(_components.code, {
        children: "send_audio_frame"
      }), ", or ", _jsx(_components.code, {
        children: "send_video_frame"
      }), ". You can send results at any time after processing finishes; the callback functions don't need to wait for results before returning."]
    }), `
`, _jsx(_components.h3, {
      id: "python-async-extensions",
      children: "Python async extensions"
    }), `
`, _jsxs(_components.p, {
      children: ["TEN's Python async extensions provide a powerful way to handle long-running tasks asynchronously. By integrating Python's ", _jsx(_components.code, {
        children: "asyncio"
      }), " framework, these extensions ensure that operations such as network calls or file handling are efficient and non-blocking."]
    }), `
`, _jsxs(_components.p, {
      children: ["To wrap existing Python code that uses ", _jsx(_components.code, {
        children: "asyncio"
      }), " into a TEN extension, use the Python async extension. A Python async extension is structured as follows:"]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " asyncio"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " ten_runtime "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " AsyncExtension, AsyncTenEnv"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " DefaultAsyncExtension"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "AsyncExtension"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "):"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "   async"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " def"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " on_configure"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(self, ten_env: AsyncTenEnv) -> "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "None"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "       # Mock async operation, e.g. network, file I/O."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "       await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " asyncio.sleep("
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
              children: ")"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "   async"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " def"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " on_init"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(self, ten_env: AsyncTenEnv) -> "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "None"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "       # Mock async operation, e.g. network, file I/O."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "       await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " asyncio.sleep("
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
              children: ")"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "   async"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " def"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " on_start"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(self, ten_env: AsyncTenEnv) -> "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "None"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "       # Mock async operation, e.g. network, file I/O."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "       await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " asyncio.sleep("
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
              children: ")"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "   async"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " def"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " on_deinit"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(self, ten_env: AsyncTenEnv) -> "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "None"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "       # Mock async operation, e.g. network, file I/O."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "       await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " asyncio.sleep("
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
              children: ")"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "   async"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " def"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " on_cmd"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(self, ten_env: AsyncTenEnv, cmd: Cmd) -> "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "None"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "       cmd_json "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " cmd.to_json()"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "       ten_env.log_debug("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "f"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"DefaultAsyncExtension on_cmd: '
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "cmd_json"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "       # Mock async operation, e.g. network, file I/O."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "       await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " asyncio.sleep("
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
              children: ")"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "       # Send a new command to other extensions and wait for the result. The"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "       # result will be returned to the original sender."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "       new_cmd "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Cmd.create("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"hello"'
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "       cmd_result "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " ten_env.send_cmd(new_cmd)"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "       ten_env.return_result(cmd_result, cmd)"
            })
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Each method simulates a delay using ", _jsx(_components.code, {
        children: "await asyncio.sleep()"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "async-loop-for-event-handling",
      children: "Async loop for event handling"
    }), `
`, _jsx(_components.p, {
      children: "To create an async event loop to handle continuous event processing:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Create a queue using ", _jsx(_components.code, {
          children: "asyncio.Queue"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Create an async task for event handling in ", _jsx(_components.code, {
          children: "on_start"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Signal shutdown by putting ", _jsx(_components.code, {
          children: "None"
        }), " in the queue during ", _jsx(_components.code, {
          children: "on_stop"
        })]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " asyncio"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " ten_runtime "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " AsyncExtension, AsyncTenEnv"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " DefaultAsyncExtension"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "AsyncExtension"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "):"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "   def"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " __init__"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(self):"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "       super"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "()."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "__init__"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "()"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "       self"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".queue "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " asyncio.Queue()"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "       self"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".loop "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " None"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "   async"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " def"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " on_start"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(self, ten_env: AsyncTenEnv) -> "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "None"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "       self"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".loop "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " asyncio.get_event_loop()"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "       self"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".loop.create_task("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "self"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "._consume())"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "   async"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " def"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " on_stop"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(self, ten_env: AsyncTenEnv) -> "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "None"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "       await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " self"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".queue.put("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "None"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "   async"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " def"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " _consume"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(self) -> "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "None"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "       while"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " True"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "           try"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "               value "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " self"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".queue.get()"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "               if"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " value "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "is"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " None"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "                   self"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".ten_env.log_info("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"async loop exit"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "                   break"
            })
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "               # Code for processing values retrieved from the queue."
            })
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "           except"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " Exception"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " as"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " e:"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "               self"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".ten_env.log_error("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "f"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"Failed to handle '
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "e"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"'
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
`, _jsx(_components.h2, {
      id: "package-deployment-types",
      children: "Package deployment types"
    }), `
`, _jsx(_components.p, {
      children: "TEN packages come in two deployment formats:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Development packages"
        }), ": Include source code and build configurations for creating and modifying extensions"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Release packages"
        }), ": Contain only compiled artifacts and runtime files for direct deployment"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "development-packages",
      children: "Development packages"
    }), `
`, _jsx(_components.p, {
      children: "Development packages are used for creating and modifying TEN components. They contain:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Complete source code"
      }), `
`, _jsx(_components.li, {
        children: "Build configurations"
      }), `
`, _jsx(_components.li, {
        children: "Development dependencies"
      }), `
`, _jsx(_components.li, {
        children: "Documentation and examples"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Use development packages when you need to modify existing extensions or create new TEN components from scratch."
    }), `
`, _jsx(_components.h3, {
      id: "release-packages",
      children: "Release packages"
    }), `
`, _jsx(_components.p, {
      children: "Release packages are optimized for deployment and operation. They contain:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Compiled binaries and libraries"
      }), `
`, _jsx(_components.li, {
        children: "Runtime configurations"
      }), `
`, _jsx(_components.li, {
        children: "Essential dependencies only"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Use release packages for production deployment where you only need to run existing functionality without modification. Release packages require no build steps and can be deployed immediately."
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
