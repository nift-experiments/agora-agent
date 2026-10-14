import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Use TEN Designer",
  description: "Use TEN Designer to install, configure, run, and debug TEN Framework applications through a browser-based interface."
};
export let _markdown = `

TEN Designer is a browser-based visual development environment that provides the graphical interface for TEN Manager. It simplifies building and debugging applications with the TEN Framework. Instead of working solely with command-line tools and configuration files, TEN Designer provides an intuitive graphical interface for creating, editing, and managing TEN applications and extensions. Following are the key benefits of the TEN Designer:

* **Visual graph editing**: See and modify extension connections through an interactive diagram
* **Simplified dependency management**: Install and manage TEN packages through a user-friendly interface
* **Integrated development workflow**: Build, run, and debug applications without leaving the designer
* **Cloud Store integration**: Browse and install extensions directly from the TEN Cloud Store
* **Cross-platform support**: Works on Windows, Linux, and macOS through your web browser

TEN Designer provides an accessible entry point for developers who prefer visual tools while preserving the full power and flexibility of the TEN Framework.

## Prerequisites [#prerequisites]

Before starting, ensure that you have:

* One of the following operating systems and architectures:
  * **Windows**: x86\\_64
  * **Linux**: x86\\_64
  * **macOS**: x86\\_64, arm64

* A modern web browser to access the TEN Designer interface.

## Install and run [#install-and-run]

Follow these steps to install and run TEN Manager:

1. Open the [TEN Framework releases page](https://github.com/TEN-framework/ten-framework/releases) on GitHub.

2. Find the TEN Manager package for your operating system and architecture. The package uses the naming structure \`tman-[OS]-release-[ARCH].zip\`.

3. Download the package. For example, to download the Linux x64 package:

   \`\`\`bash
   wget https://github.com/TEN-framework/ten-framework/releases/download/0.10.10/tman-linux-release-x64.zip
   \`\`\`

4. Extract the package:

   \`\`\`bash
   unzip tman-linux-release-x64.zip
   \`\`\`

5. Optionally copy the binary to a directory in your system \`PATH\`:

   \`\`\`bash
   sudo cp ten_manager/bin/tman /usr/local/bin/
   \`\`\`

6. Verify the installation:

   \`\`\`bash
   tman --version
   \`\`\`

7. Start TEN Designer:

   \`\`\`bash
   tman designer
   \`\`\`

   You see output similar to:

   \`\`\`text
   \uD83C\uDFC6  Starting server at http://0.0.0.0:49483
   \`\`\`

   <CalloutContainer type="info">
     <CalloutDescription>
       You can run \`tman designer\` from the root directory of an existing TEN app to automatically load the app in the designer. You can also start TEN Designer from any location and manually load an app later.
     </CalloutDescription>
   </CalloutContainer>

8. Open your browser and go to \`http://127.0.0.1:49483/\` to access the interface.

   <CalloutContainer type="info">
     <CalloutDescription>
       If TEN Designer is running on a remote machine, replace \`127.0.0.1\` with the IP address of that machine.
     </CalloutDescription>
   </CalloutContainer>

## Interface overview [#interface-overview]

The TEN Designer interface provides easy access to development tools. The upper left corner shows the following dropdown menus:

* **Designer**: Set preferences such as language, theme, and logs
* **App**: Create, load, and manage apps
* **Graph**: Load and manage graphs
* **Extensions**: Install extensions from the extensions store

![TEN Designer Overview](https://assets-docs.agora.io/images/ten-framework/ten_designer_interface.png)

The upper right corner contains the following function buttons:

* **Version button** (rightmost): Displays the current version and automatically checks for updates. When an update is available, an up arrow appears. Click to open the download page.
* **TEN Agent button**: Opens the [TEN Agent](https://agent.theten.ai/) page, which showcases a complete AI agent implementation built with TEN Framework
* **GitHub button**: Links to the [TEN Framework repository](https://github.com/TEN-framework/ten_framework) where you can view source code, documentation, and submit issues
* **Theme and language toggles**: Switch between light and dark modes and select your preferred language

## Working with TEN apps [#working-with-ten-apps]

This section guides you through working with TEN apps in the TEN Designer.

### Load an existing app [#load-an-existing-app]

To load an existing app, use the **Load App** button in the **App** menu. You see the following interface:

![Loading an Existing TEN app](https://assets-docs.agora.io/images/ten-framework/ten_designer_load_app.png)

Use the file browser to select the app's root directory. TEN Designer automatically loads the app.

### Manage loaded apps [#manage-loaded-apps]

To manage loaded TEN apps, click the &#x2A;*Manage Loaded App(s)** button in the **App** menu. You see the following **Apps Manager** interface:

![Managing Loaded TEN apps](https://assets-docs.agora.io/images/ten-framework/ten_designer_manage_loaded_apps.png)

Use the Apps Manager dialog to perform various operations on your loaded applications:

* Unload loaded apps
* Reload specified apps
* Reload all loaded apps
* Install dependencies for specified apps
* Execute predefined scripts for specific apps

### Install app dependencies [#install-app-dependencies]

To install all dependencies for your app using the **Apps Manager**:

1. Open the **Apps Manager** interface in TEN Designer
2. Click **Install All** for your target application
3. Monitor the installation progress in the interface shown below:

   ![Installing All Dependencies for an App](https://assets-docs.agora.io/images/ten-framework/ten_designer_app_install_all.png)

The app's \`manifest.json\` file defines these dependencies. Following is an example of a \`manifest.json\` file:

\`\`\`json
{
  "type": "app",
  "name": "aaa",
  "version": "0.8.18",
  "dependencies": [
    {
      "type": "system",
      "name": "ten_runtime",
      "version": "0.8.18"
    },
    {
      "type": "extension",
      "name": "ffmpeg_muxer",
      "version": "^0.1.0"
    },
    {
      "type": "extension",
      "name": "ffmpeg_demuxer",
      "version": "^0.1.0"
    },
    {
      "type": "extension",
      "name": "ffmpeg_client",
      "version": "^0.1.0"
    },
    {
      "type": "protocol",
      "name": "msgpack",
      "version": "^0.8.18"
    }
  ],
  "scripts": {
    "start": "python3 tools/run_script.py start",
    "build": "python3 tools/run_script.py build"
  }
}
\`\`\`

This configuration specifies the following TEN package dependencies:

* \`ten_runtime\`: The system package of TEN Framework
* \`ffmpeg_demuxer\`: A TEN Extension package for decoding audio and video
* \`ffmpeg_muxer\`: A TEN Extension package for encoding audio and video
* \`ffmpeg_client\`: A TEN Extension package for processing audio and video using the other two ffmpeg extension packages
* \`msgpack\`: A TEN Protocol package for message serialization and deserialization using the MessagePack protocol

After installing the dependencies, TEN Manager organizes the packages in the following directory structure:

\`\`\`text
├── ten_packages
│   ├── extension
│   │   ├── ffmpeg_client
│   │   ├── ffmpeg_demuxer
│   │   └── ffmpeg_muxer
│   ├── protocol
│   │   └── msgpack
│   └── system
│       ├── ffmpeg
│       └── ten_runtime
\`\`\`

Note that the \`ffmpeg\` system package appears even though it's not listed in \`manifest.json\`. TEN Manager automatically detects and installs transitive dependencies when \`ffmpeg_demuxer\` and \`ffmpeg_muxer\` require the \`ffmpeg\` package.

### Install TEN extensions [#install-ten-extensions]

To install extensions from the TEN Cloud Store:

1. Click **Open Extension Store** in the **Extensions** menu
2. Search for the required extension in the store interface
3. Click **Install** to add the extension to your current app

After installation, the new extension appears in your current TEN app and is available for use in your graphs.

![TEN Cloud Store](https://assets-docs.agora.io/images/ten-framework/ten_designer_extension_store.png)

### Run a TEN app [#run-a-ten-app]

Use the **Apps Manager** to execute preset runtime operations on the selected app. Click the **Run** button in the **Apps Manager** to open the following interface:

![Run a TEN app](https://assets-docs.agora.io/images/ten-framework/ten_designer_app_run.png)

In the dialog, select the preset operation to execute from the dropdown menu. The menu typically includes the following operations:

* **Run App**: Start the app and display output in the TEN Designer message window
* **Build App**: Compile the app, if required. Since TEN Framework supports multiple programming languages, compilation requirements vary by language. For example, C++ apps require compilation, while Python apps run directly without a build step.

Following is the build interface for a TEN app developed in C++:

![Building a TEN app](https://assets-docs.agora.io/images/ten-framework/ten_designer_app_build.png)

After the build is complete, continue with the startup operation. The system displays a window showing the TEN app's runtime logs in real-time:

![Starting a TEN app](https://assets-docs.agora.io/images/ten-framework/ten_designer_app_start.png)

## Working with TEN graphs [#working-with-ten-graphs]

TEN graphs define how extensions connect and communicate within your application, providing a visual representation of your app's data flow and processing pipeline.

### Load an existing graph [#load-an-existing-graph]

To load an existing TEN graph, click the **Load Graph** option in the **Graph** menu. After the graph loads, you see an interface similar to the following:

![TEN Graph](https://assets-docs.agora.io/images/ten-framework/ten_designer_graph_overview.png)

This sample graph contains three TEN extensions:

* **ffmpeg\\_demuxer**: Decodes audio and video
* **ffmpeg\\_muxer**: Encodes audio and video
* **ffmpeg\\_client**: Processes audio and video

Each TEN extension has defined inputs and outputs. For example, the \`ffmpeg_demuxer\` extension includes:

* 2 command inputs
* 1 command output
* 1 audio frame output
* 1 video frame output

Click the numbered input or output buttons on any extension to open a connection management dialog:

![TEN Message Input/Output Dialog](https://assets-docs.agora.io/images/ten-framework/ten_designer_msg_info_dialog.png)

Use this dialog to view and manage connections between extensions in your graph.

### Organize graph layout [#organize-graph-layout]

You can organize your graph layout as follows:

1. **Manual positioning**: Drag extensions to desired locations
2. **Automatic layout**: Click **Auto Layout** in the **Graph** menu to automatically arrange all extensions

The auto-layout feature is particularly helpful when your graph becomes cluttered or after adding multiple new extensions.

### Access extension files and tools [#access-extension-files-and-tools]

Right-click any extension in the graph to open its context menu:

![TEN Extension Context Menu](https://assets-docs.agora.io/images/ten-framework/ten_designer_extension_context_menu.png)

The context menu provides quick access to extension files and tools:

* **Edit manifest.json**: Edit the extension's configuration and API definitions
* **Edit property.json**: Modify the extension's runtime properties
* **Launch terminal**: Launch a terminal in the extension's root directory
* **View logs**: Display the extension's runtime logs and debug information
* **Delete**: Remove the extension from the current graph

![Opening Manifest](https://assets-docs.agora.io/images/ten-framework/ten_designer_context_menu_effect.png)

## Documentation window [#documentation-window]

TEN Designer has integrated documentation that allows you to view TEN Framework concepts and terminology. For example, select **About App** from the **App** dropdown menu to open the documentation window and display general information about TEN Apps and their structure.

![TEN Designer Doc Window](https://assets-docs.agora.io/images/ten-framework/ten_designer_doc_window.png)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "TEN Designer is a browser-based visual development environment that provides the graphical interface for TEN Manager. It simplifies building and debugging applications with the TEN Framework. Instead of working solely with command-line tools and configuration files, TEN Designer provides an intuitive graphical interface for creating, editing, and managing TEN applications and extensions. Following are the key benefits of the TEN Designer:"
  }, {
    heading: undefined,
    content: "**Visual graph editing**: See and modify extension connections through an interactive diagram"
  }, {
    heading: undefined,
    content: "**Simplified dependency management**: Install and manage TEN packages through a user-friendly interface"
  }, {
    heading: undefined,
    content: "**Integrated development workflow**: Build, run, and debug applications without leaving the designer"
  }, {
    heading: undefined,
    content: "**Cloud Store integration**: Browse and install extensions directly from the TEN Cloud Store"
  }, {
    heading: undefined,
    content: "**Cross-platform support**: Works on Windows, Linux, and macOS through your web browser"
  }, {
    heading: undefined,
    content: "TEN Designer provides an accessible entry point for developers who prefer visual tools while preserving the full power and flexibility of the TEN Framework."
  }, {
    heading: "prerequisites",
    content: "Before starting, ensure that you have:"
  }, {
    heading: "prerequisites",
    content: "One of the following operating systems and architectures:"
  }, {
    heading: "prerequisites",
    content: "**Windows**: x86\\_64"
  }, {
    heading: "prerequisites",
    content: "**Linux**: x86\\_64"
  }, {
    heading: "prerequisites",
    content: "**macOS**: x86\\_64, arm64"
  }, {
    heading: "prerequisites",
    content: "A modern web browser to access the TEN Designer interface."
  }, {
    heading: "install-and-run",
    content: "Follow these steps to install and run TEN Manager:"
  }, {
    heading: "install-and-run",
    content: "Open the TEN Framework releases page on GitHub."
  }, {
    heading: "install-and-run",
    content: "Find the TEN Manager package for your operating system and architecture. The package uses the naming structure `tman-[OS]-release-[ARCH].zip`."
  }, {
    heading: "install-and-run",
    content: "Download the package. For example, to download the Linux x64 package:"
  }, {
    heading: "install-and-run",
    content: "Extract the package:"
  }, {
    heading: "install-and-run",
    content: "Optionally copy the binary to a directory in your system `PATH`:"
  }, {
    heading: "install-and-run",
    content: "Verify the installation:"
  }, {
    heading: "install-and-run",
    content: "Start TEN Designer:"
  }, {
    heading: "install-and-run",
    content: "You see output similar to:"
  }, {
    heading: "install-and-run",
    content: "You can run `tman designer` from the root directory of an existing TEN app to automatically load the app in the designer. You can also start TEN Designer from any location and manually load an app later."
  }, {
    heading: "install-and-run",
    content: "Open your browser and go to `http://127.0.0.1:49483/` to access the interface."
  }, {
    heading: "install-and-run",
    content: "If TEN Designer is running on a remote machine, replace `127.0.0.1` with the IP address of that machine."
  }, {
    heading: "interface-overview",
    content: "The TEN Designer interface provides easy access to development tools. The upper left corner shows the following dropdown menus:"
  }, {
    heading: "interface-overview",
    content: "**Designer**: Set preferences such as language, theme, and logs"
  }, {
    heading: "interface-overview",
    content: "**App**: Create, load, and manage apps"
  }, {
    heading: "interface-overview",
    content: "**Graph**: Load and manage graphs"
  }, {
    heading: "interface-overview",
    content: "**Extensions**: Install extensions from the extensions store"
  }, {
    heading: "interface-overview",
    content: "The upper right corner contains the following function buttons:"
  }, {
    heading: "interface-overview",
    content: "**Version button** (rightmost): Displays the current version and automatically checks for updates. When an update is available, an up arrow appears. Click to open the download page."
  }, {
    heading: "interface-overview",
    content: "**TEN Agent button**: Opens the TEN Agent page, which showcases a complete AI agent implementation built with TEN Framework"
  }, {
    heading: "interface-overview",
    content: "**GitHub button**: Links to the TEN Framework repository where you can view source code, documentation, and submit issues"
  }, {
    heading: "interface-overview",
    content: "**Theme and language toggles**: Switch between light and dark modes and select your preferred language"
  }, {
    heading: "working-with-ten-apps",
    content: "This section guides you through working with TEN apps in the TEN Designer."
  }, {
    heading: "load-an-existing-app",
    content: "To load an existing app, use the **Load App** button in the **App** menu. You see the following interface:"
  }, {
    heading: "load-an-existing-app",
    content: "Use the file browser to select the app's root directory. TEN Designer automatically loads the app."
  }, {
    heading: "manage-loaded-apps",
    content: "To manage loaded TEN apps, click the &#x2A;*Manage Loaded App(s)** button in the **App** menu. You see the following **Apps Manager** interface:"
  }, {
    heading: "manage-loaded-apps",
    content: "Use the Apps Manager dialog to perform various operations on your loaded applications:"
  }, {
    heading: "manage-loaded-apps",
    content: "Unload loaded apps"
  }, {
    heading: "manage-loaded-apps",
    content: "Reload specified apps"
  }, {
    heading: "manage-loaded-apps",
    content: "Reload all loaded apps"
  }, {
    heading: "manage-loaded-apps",
    content: "Install dependencies for specified apps"
  }, {
    heading: "manage-loaded-apps",
    content: "Execute predefined scripts for specific apps"
  }, {
    heading: "install-app-dependencies",
    content: "To install all dependencies for your app using the **Apps Manager**:"
  }, {
    heading: "install-app-dependencies",
    content: "Open the **Apps Manager** interface in TEN Designer"
  }, {
    heading: "install-app-dependencies",
    content: "Click **Install All** for your target application"
  }, {
    heading: "install-app-dependencies",
    content: "Monitor the installation progress in the interface shown below:"
  }, {
    heading: "install-app-dependencies",
    content: "The app's `manifest.json` file defines these dependencies. Following is an example of a `manifest.json` file:"
  }, {
    heading: "install-app-dependencies",
    content: "This configuration specifies the following TEN package dependencies:"
  }, {
    heading: "install-app-dependencies",
    content: "`ten_runtime`: The system package of TEN Framework"
  }, {
    heading: "install-app-dependencies",
    content: "`ffmpeg_demuxer`: A TEN Extension package for decoding audio and video"
  }, {
    heading: "install-app-dependencies",
    content: "`ffmpeg_muxer`: A TEN Extension package for encoding audio and video"
  }, {
    heading: "install-app-dependencies",
    content: "`ffmpeg_client`: A TEN Extension package for processing audio and video using the other two ffmpeg extension packages"
  }, {
    heading: "install-app-dependencies",
    content: "`msgpack`: A TEN Protocol package for message serialization and deserialization using the MessagePack protocol"
  }, {
    heading: "install-app-dependencies",
    content: "After installing the dependencies, TEN Manager organizes the packages in the following directory structure:"
  }, {
    heading: "install-app-dependencies",
    content: "Note that the `ffmpeg` system package appears even though it's not listed in `manifest.json`. TEN Manager automatically detects and installs transitive dependencies when `ffmpeg_demuxer` and `ffmpeg_muxer` require the `ffmpeg` package."
  }, {
    heading: "install-ten-extensions",
    content: "To install extensions from the TEN Cloud Store:"
  }, {
    heading: "install-ten-extensions",
    content: "Click **Open Extension Store** in the **Extensions** menu"
  }, {
    heading: "install-ten-extensions",
    content: "Search for the required extension in the store interface"
  }, {
    heading: "install-ten-extensions",
    content: "Click **Install** to add the extension to your current app"
  }, {
    heading: "install-ten-extensions",
    content: "After installation, the new extension appears in your current TEN app and is available for use in your graphs."
  }, {
    heading: "run-a-ten-app",
    content: "Use the **Apps Manager** to execute preset runtime operations on the selected app. Click the **Run** button in the **Apps Manager** to open the following interface:"
  }, {
    heading: "run-a-ten-app",
    content: "In the dialog, select the preset operation to execute from the dropdown menu. The menu typically includes the following operations:"
  }, {
    heading: "run-a-ten-app",
    content: "**Run App**: Start the app and display output in the TEN Designer message window"
  }, {
    heading: "run-a-ten-app",
    content: "**Build App**: Compile the app, if required. Since TEN Framework supports multiple programming languages, compilation requirements vary by language. For example, C++ apps require compilation, while Python apps run directly without a build step."
  }, {
    heading: "run-a-ten-app",
    content: "Following is the build interface for a TEN app developed in C++:"
  }, {
    heading: "run-a-ten-app",
    content: "After the build is complete, continue with the startup operation. The system displays a window showing the TEN app's runtime logs in real-time:"
  }, {
    heading: "working-with-ten-graphs",
    content: "TEN graphs define how extensions connect and communicate within your application, providing a visual representation of your app's data flow and processing pipeline."
  }, {
    heading: "load-an-existing-graph",
    content: "To load an existing TEN graph, click the **Load Graph** option in the **Graph** menu. After the graph loads, you see an interface similar to the following:"
  }, {
    heading: "load-an-existing-graph",
    content: "This sample graph contains three TEN extensions:"
  }, {
    heading: "load-an-existing-graph",
    content: "**ffmpeg\\_demuxer**: Decodes audio and video"
  }, {
    heading: "load-an-existing-graph",
    content: "**ffmpeg\\_muxer**: Encodes audio and video"
  }, {
    heading: "load-an-existing-graph",
    content: "**ffmpeg\\_client**: Processes audio and video"
  }, {
    heading: "load-an-existing-graph",
    content: "Each TEN extension has defined inputs and outputs. For example, the `ffmpeg_demuxer` extension includes:"
  }, {
    heading: "load-an-existing-graph",
    content: "2 command inputs"
  }, {
    heading: "load-an-existing-graph",
    content: "1 command output"
  }, {
    heading: "load-an-existing-graph",
    content: "1 audio frame output"
  }, {
    heading: "load-an-existing-graph",
    content: "1 video frame output"
  }, {
    heading: "load-an-existing-graph",
    content: "Click the numbered input or output buttons on any extension to open a connection management dialog:"
  }, {
    heading: "load-an-existing-graph",
    content: "Use this dialog to view and manage connections between extensions in your graph."
  }, {
    heading: "organize-graph-layout",
    content: "You can organize your graph layout as follows:"
  }, {
    heading: "organize-graph-layout",
    content: "**Manual positioning**: Drag extensions to desired locations"
  }, {
    heading: "organize-graph-layout",
    content: "**Automatic layout**: Click **Auto Layout** in the **Graph** menu to automatically arrange all extensions"
  }, {
    heading: "organize-graph-layout",
    content: "The auto-layout feature is particularly helpful when your graph becomes cluttered or after adding multiple new extensions."
  }, {
    heading: "access-extension-files-and-tools",
    content: "Right-click any extension in the graph to open its context menu:"
  }, {
    heading: "access-extension-files-and-tools",
    content: "The context menu provides quick access to extension files and tools:"
  }, {
    heading: "access-extension-files-and-tools",
    content: "**Edit manifest.json**: Edit the extension's configuration and API definitions"
  }, {
    heading: "access-extension-files-and-tools",
    content: "**Edit property.json**: Modify the extension's runtime properties"
  }, {
    heading: "access-extension-files-and-tools",
    content: "**Launch terminal**: Launch a terminal in the extension's root directory"
  }, {
    heading: "access-extension-files-and-tools",
    content: "**View logs**: Display the extension's runtime logs and debug information"
  }, {
    heading: "access-extension-files-and-tools",
    content: "**Delete**: Remove the extension from the current graph"
  }, {
    heading: "documentation-window",
    content: "TEN Designer has integrated documentation that allows you to view TEN Framework concepts and terminology. For example, select **About App** from the **App** dropdown menu to open the documentation window and display general information about TEN Apps and their structure."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "install-and-run",
    content: "Install and run"
  }, {
    id: "interface-overview",
    content: "Interface overview"
  }, {
    id: "working-with-ten-apps",
    content: "Working with TEN apps"
  }, {
    id: "load-an-existing-app",
    content: "Load an existing app"
  }, {
    id: "manage-loaded-apps",
    content: "Manage loaded apps"
  }, {
    id: "install-app-dependencies",
    content: "Install app dependencies"
  }, {
    id: "install-ten-extensions",
    content: "Install TEN extensions"
  }, {
    id: "run-a-ten-app",
    content: "Run a TEN app"
  }, {
    id: "working-with-ten-graphs",
    content: "Working with TEN graphs"
  }, {
    id: "load-an-existing-graph",
    content: "Load an existing graph"
  }, {
    id: "organize-graph-layout",
    content: "Organize graph layout"
  }, {
    id: "access-extension-files-and-tools",
    content: "Access extension files and tools"
  }, {
    id: "documentation-window",
    content: "Documentation window"
  }]
};
export let toc = [{
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#install-and-run",
  title: _jsx(_Fragment, {
    children: "Install and run"
  })
}, {
  depth: 2,
  url: "#interface-overview",
  title: _jsx(_Fragment, {
    children: "Interface overview"
  })
}, {
  depth: 2,
  url: "#working-with-ten-apps",
  title: _jsx(_Fragment, {
    children: "Working with TEN apps"
  })
}, {
  depth: 3,
  url: "#load-an-existing-app",
  title: _jsx(_Fragment, {
    children: "Load an existing app"
  })
}, {
  depth: 3,
  url: "#manage-loaded-apps",
  title: _jsx(_Fragment, {
    children: "Manage loaded apps"
  })
}, {
  depth: 3,
  url: "#install-app-dependencies",
  title: _jsx(_Fragment, {
    children: "Install app dependencies"
  })
}, {
  depth: 3,
  url: "#install-ten-extensions",
  title: _jsx(_Fragment, {
    children: "Install TEN extensions"
  })
}, {
  depth: 3,
  url: "#run-a-ten-app",
  title: _jsx(_Fragment, {
    children: "Run a TEN app"
  })
}, {
  depth: 2,
  url: "#working-with-ten-graphs",
  title: _jsx(_Fragment, {
    children: "Working with TEN graphs"
  })
}, {
  depth: 3,
  url: "#load-an-existing-graph",
  title: _jsx(_Fragment, {
    children: "Load an existing graph"
  })
}, {
  depth: 3,
  url: "#organize-graph-layout",
  title: _jsx(_Fragment, {
    children: "Organize graph layout"
  })
}, {
  depth: 3,
  url: "#access-extension-files-and-tools",
  title: _jsx(_Fragment, {
    children: "Access extension files and tools"
  })
}, {
  depth: 2,
  url: "#documentation-window",
  title: _jsx(_Fragment, {
    children: "Documentation window"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "TEN Designer is a browser-based visual development environment that provides the graphical interface for TEN Manager. It simplifies building and debugging applications with the TEN Framework. Instead of working solely with command-line tools and configuration files, TEN Designer provides an intuitive graphical interface for creating, editing, and managing TEN applications and extensions. Following are the key benefits of the TEN Designer:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Visual graph editing"
        }), ": See and modify extension connections through an interactive diagram"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Simplified dependency management"
        }), ": Install and manage TEN packages through a user-friendly interface"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Integrated development workflow"
        }), ": Build, run, and debug applications without leaving the designer"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Cloud Store integration"
        }), ": Browse and install extensions directly from the TEN Cloud Store"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Cross-platform support"
        }), ": Works on Windows, Linux, and macOS through your web browser"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "TEN Designer provides an accessible entry point for developers who prefer visual tools while preserving the full power and flexibility of the TEN Framework."
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "Before starting, ensure that you have:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "One of the following operating systems and architectures:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Windows"
            }), ": x86_64"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Linux"
            }), ": x86_64"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "macOS"
            }), ": x86_64, arm64"]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "A modern web browser to access the TEN Designer interface."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "install-and-run",
      children: "Install and run"
    }), `
`, _jsx(_components.p, {
      children: "Follow these steps to install and run TEN Manager:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Open the ", _jsx(_components.a, {
            href: "https://github.com/TEN-framework/ten-framework/releases",
            children: "TEN Framework releases page"
          }), " on GitHub."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Find the TEN Manager package for your operating system and architecture. The package uses the naming structure ", _jsx(_components.code, {
            children: "tman-[OS]-release-[ARCH].zip"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Download the package. For example, to download the Linux x64 package:"
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
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "wget"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " https://github.com/TEN-framework/ten-framework/releases/download/0.10.10/tman-linux-release-x64.zip"
                })]
              })
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Extract the package:"
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
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "unzip"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " tman-linux-release-x64.zip"
                })]
              })
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Optionally copy the binary to a directory in your system ", _jsx(_components.code, {
            children: "PATH"
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
            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "sudo"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " cp"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " ten_manager/bin/tman"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " /usr/local/bin/"
                })]
              })
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Verify the installation:"
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
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "tman"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " --version"
                })]
              })
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Start TEN Designer:"
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
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "tman"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " designer"
                })]
              })
            })
          })
        }), `
`, _jsx(_components.p, {
          children: "You see output similar to:"
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
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "\uD83C\uDFC6"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "  Starting"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " server"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " at"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " http://0.0.0.0:49483"
                })]
              })
            })
          })
        }), `
`, _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["You can run ", _jsx(_components.code, {
                children: "tman designer"
              }), " from the root directory of an existing TEN app to automatically load the app in the designer. You can also start TEN Designer from any location and manually load an app later."]
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Open your browser and go to ", _jsx(_components.code, {
            children: "http://127.0.0.1:49483/"
          }), " to access the interface."]
        }), `
`, _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["If TEN Designer is running on a remote machine, replace ", _jsx(_components.code, {
                children: "127.0.0.1"
              }), " with the IP address of that machine."]
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "interface-overview",
      children: "Interface overview"
    }), `
`, _jsx(_components.p, {
      children: "The TEN Designer interface provides easy access to development tools. The upper left corner shows the following dropdown menus:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Designer"
        }), ": Set preferences such as language, theme, and logs"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "App"
        }), ": Create, load, and manage apps"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Graph"
        }), ": Load and manage graphs"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Extensions"
        }), ": Install extensions from the extensions store"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/ten-framework/ten_designer_interface.png",
        alt: "TEN Designer Overview"
      })
    }), `
`, _jsx(_components.p, {
      children: "The upper right corner contains the following function buttons:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Version button"
        }), " (rightmost): Displays the current version and automatically checks for updates. When an update is available, an up arrow appears. Click to open the download page."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "TEN Agent button"
        }), ": Opens the ", _jsx(_components.a, {
          href: "https://agent.theten.ai/",
          children: "TEN Agent"
        }), " page, which showcases a complete AI agent implementation built with TEN Framework"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "GitHub button"
        }), ": Links to the ", _jsx(_components.a, {
          href: "https://github.com/TEN-framework/ten_framework",
          children: "TEN Framework repository"
        }), " where you can view source code, documentation, and submit issues"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Theme and language toggles"
        }), ": Switch between light and dark modes and select your preferred language"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "working-with-ten-apps",
      children: "Working with TEN apps"
    }), `
`, _jsx(_components.p, {
      children: "This section guides you through working with TEN apps in the TEN Designer."
    }), `
`, _jsx(_components.h3, {
      id: "load-an-existing-app",
      children: "Load an existing app"
    }), `
`, _jsxs(_components.p, {
      children: ["To load an existing app, use the ", _jsx(_components.strong, {
        children: "Load App"
      }), " button in the ", _jsx(_components.strong, {
        children: "App"
      }), " menu. You see the following interface:"]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/ten-framework/ten_designer_load_app.png",
        alt: "Loading an Existing TEN app"
      })
    }), `
`, _jsx(_components.p, {
      children: "Use the file browser to select the app's root directory. TEN Designer automatically loads the app."
    }), `
`, _jsx(_components.h3, {
      id: "manage-loaded-apps",
      children: "Manage loaded apps"
    }), `
`, _jsxs(_components.p, {
      children: ["To manage loaded TEN apps, click the ", _jsx(_components.strong, {
        children: "Manage Loaded App(s)"
      }), " button in the ", _jsx(_components.strong, {
        children: "App"
      }), " menu. You see the following ", _jsx(_components.strong, {
        children: "Apps Manager"
      }), " interface:"]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/ten-framework/ten_designer_manage_loaded_apps.png",
        alt: "Managing Loaded TEN apps"
      })
    }), `
`, _jsx(_components.p, {
      children: "Use the Apps Manager dialog to perform various operations on your loaded applications:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Unload loaded apps"
      }), `
`, _jsx(_components.li, {
        children: "Reload specified apps"
      }), `
`, _jsx(_components.li, {
        children: "Reload all loaded apps"
      }), `
`, _jsx(_components.li, {
        children: "Install dependencies for specified apps"
      }), `
`, _jsx(_components.li, {
        children: "Execute predefined scripts for specific apps"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "install-app-dependencies",
      children: "Install app dependencies"
    }), `
`, _jsxs(_components.p, {
      children: ["To install all dependencies for your app using the ", _jsx(_components.strong, {
        children: "Apps Manager"
      }), ":"]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Open the ", _jsx(_components.strong, {
            children: "Apps Manager"
          }), " interface in TEN Designer"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Click ", _jsx(_components.strong, {
            children: "Install All"
          }), " for your target application"]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Monitor the installation progress in the interface shown below:"
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/ten-framework/ten_designer_app_install_all.png",
            alt: "Installing All Dependencies for an App"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["The app's ", _jsx(_components.code, {
        children: "manifest.json"
      }), " file defines these dependencies. Following is an example of a ", _jsx(_components.code, {
        children: "manifest.json"
      }), " file:"]
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
              children: '"aaa"'
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
              children: '"0.8.18"'
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
              children: '"0.8.18"'
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
              children: '"ffmpeg_muxer"'
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
              children: '"^0.1.0"'
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
              children: '"ffmpeg_demuxer"'
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
              children: '"^0.1.0"'
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
              children: '"ffmpeg_client"'
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
              children: '"^0.1.0"'
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
              children: '"protocol"'
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
              children: '"msgpack"'
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
              children: '"^0.8.18"'
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
              children: '  "scripts"'
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
              children: '    "start"'
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
              children: '"python3 tools/run_script.py start"'
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
              children: '    "build"'
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
              children: '"python3 tools/run_script.py build"'
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
`, _jsx(_components.p, {
      children: "This configuration specifies the following TEN package dependencies:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "ten_runtime"
        }), ": The system package of TEN Framework"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "ffmpeg_demuxer"
        }), ": A TEN Extension package for decoding audio and video"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "ffmpeg_muxer"
        }), ": A TEN Extension package for encoding audio and video"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "ffmpeg_client"
        }), ": A TEN Extension package for processing audio and video using the other two ffmpeg extension packages"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgpack"
        }), ": A TEN Protocol package for message serialization and deserialization using the MessagePack protocol"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "After installing the dependencies, TEN Manager organizes the packages in the following directory structure:"
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
              children: " ten_packages"
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
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " extension"
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
              children: " ffmpeg_client"
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
              children: " ffmpeg_demuxer"
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
              children: " ffmpeg_muxer"
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
              children: "   ├──"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " protocol"
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
              children: " msgpack"
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
              children: " system"
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
              children: " ffmpeg"
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
              children: " ten_runtime"
            })]
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Note that the ", _jsx(_components.code, {
        children: "ffmpeg"
      }), " system package appears even though it's not listed in ", _jsx(_components.code, {
        children: "manifest.json"
      }), ". TEN Manager automatically detects and installs transitive dependencies when ", _jsx(_components.code, {
        children: "ffmpeg_demuxer"
      }), " and ", _jsx(_components.code, {
        children: "ffmpeg_muxer"
      }), " require the ", _jsx(_components.code, {
        children: "ffmpeg"
      }), " package."]
    }), `
`, _jsx(_components.h3, {
      id: "install-ten-extensions",
      children: "Install TEN extensions"
    }), `
`, _jsx(_components.p, {
      children: "To install extensions from the TEN Cloud Store:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Click ", _jsx(_components.strong, {
          children: "Open Extension Store"
        }), " in the ", _jsx(_components.strong, {
          children: "Extensions"
        }), " menu"]
      }), `
`, _jsx(_components.li, {
        children: "Search for the required extension in the store interface"
      }), `
`, _jsxs(_components.li, {
        children: ["Click ", _jsx(_components.strong, {
          children: "Install"
        }), " to add the extension to your current app"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "After installation, the new extension appears in your current TEN app and is available for use in your graphs."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/ten-framework/ten_designer_extension_store.png",
        alt: "TEN Cloud Store"
      })
    }), `
`, _jsx(_components.h3, {
      id: "run-a-ten-app",
      children: "Run a TEN app"
    }), `
`, _jsxs(_components.p, {
      children: ["Use the ", _jsx(_components.strong, {
        children: "Apps Manager"
      }), " to execute preset runtime operations on the selected app. Click the ", _jsx(_components.strong, {
        children: "Run"
      }), " button in the ", _jsx(_components.strong, {
        children: "Apps Manager"
      }), " to open the following interface:"]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/ten-framework/ten_designer_app_run.png",
        alt: "Run a TEN app"
      })
    }), `
`, _jsx(_components.p, {
      children: "In the dialog, select the preset operation to execute from the dropdown menu. The menu typically includes the following operations:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Run App"
        }), ": Start the app and display output in the TEN Designer message window"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Build App"
        }), ": Compile the app, if required. Since TEN Framework supports multiple programming languages, compilation requirements vary by language. For example, C++ apps require compilation, while Python apps run directly without a build step."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Following is the build interface for a TEN app developed in C++:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/ten-framework/ten_designer_app_build.png",
        alt: "Building a TEN app"
      })
    }), `
`, _jsx(_components.p, {
      children: "After the build is complete, continue with the startup operation. The system displays a window showing the TEN app's runtime logs in real-time:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/ten-framework/ten_designer_app_start.png",
        alt: "Starting a TEN app"
      })
    }), `
`, _jsx(_components.h2, {
      id: "working-with-ten-graphs",
      children: "Working with TEN graphs"
    }), `
`, _jsx(_components.p, {
      children: "TEN graphs define how extensions connect and communicate within your application, providing a visual representation of your app's data flow and processing pipeline."
    }), `
`, _jsx(_components.h3, {
      id: "load-an-existing-graph",
      children: "Load an existing graph"
    }), `
`, _jsxs(_components.p, {
      children: ["To load an existing TEN graph, click the ", _jsx(_components.strong, {
        children: "Load Graph"
      }), " option in the ", _jsx(_components.strong, {
        children: "Graph"
      }), " menu. After the graph loads, you see an interface similar to the following:"]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/ten-framework/ten_designer_graph_overview.png",
        alt: "TEN Graph"
      })
    }), `
`, _jsx(_components.p, {
      children: "This sample graph contains three TEN extensions:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "ffmpeg_demuxer"
        }), ": Decodes audio and video"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "ffmpeg_muxer"
        }), ": Encodes audio and video"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "ffmpeg_client"
        }), ": Processes audio and video"]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["Each TEN extension has defined inputs and outputs. For example, the ", _jsx(_components.code, {
        children: "ffmpeg_demuxer"
      }), " extension includes:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "2 command inputs"
      }), `
`, _jsx(_components.li, {
        children: "1 command output"
      }), `
`, _jsx(_components.li, {
        children: "1 audio frame output"
      }), `
`, _jsx(_components.li, {
        children: "1 video frame output"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Click the numbered input or output buttons on any extension to open a connection management dialog:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/ten-framework/ten_designer_msg_info_dialog.png",
        alt: "TEN Message Input/Output Dialog"
      })
    }), `
`, _jsx(_components.p, {
      children: "Use this dialog to view and manage connections between extensions in your graph."
    }), `
`, _jsx(_components.h3, {
      id: "organize-graph-layout",
      children: "Organize graph layout"
    }), `
`, _jsx(_components.p, {
      children: "You can organize your graph layout as follows:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Manual positioning"
        }), ": Drag extensions to desired locations"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Automatic layout"
        }), ": Click ", _jsx(_components.strong, {
          children: "Auto Layout"
        }), " in the ", _jsx(_components.strong, {
          children: "Graph"
        }), " menu to automatically arrange all extensions"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The auto-layout feature is particularly helpful when your graph becomes cluttered or after adding multiple new extensions."
    }), `
`, _jsx(_components.h3, {
      id: "access-extension-files-and-tools",
      children: "Access extension files and tools"
    }), `
`, _jsx(_components.p, {
      children: "Right-click any extension in the graph to open its context menu:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/ten-framework/ten_designer_extension_context_menu.png",
        alt: "TEN Extension Context Menu"
      })
    }), `
`, _jsx(_components.p, {
      children: "The context menu provides quick access to extension files and tools:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Edit manifest.json"
        }), ": Edit the extension's configuration and API definitions"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Edit property.json"
        }), ": Modify the extension's runtime properties"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Launch terminal"
        }), ": Launch a terminal in the extension's root directory"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "View logs"
        }), ": Display the extension's runtime logs and debug information"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Delete"
        }), ": Remove the extension from the current graph"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/ten-framework/ten_designer_context_menu_effect.png",
        alt: "Opening Manifest"
      })
    }), `
`, _jsx(_components.h2, {
      id: "documentation-window",
      children: "Documentation window"
    }), `
`, _jsxs(_components.p, {
      children: ["TEN Designer has integrated documentation that allows you to view TEN Framework concepts and terminology. For example, select ", _jsx(_components.strong, {
        children: "About App"
      }), " from the ", _jsx(_components.strong, {
        children: "App"
      }), " dropdown menu to open the documentation window and display general information about TEN Apps and their structure."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/ten-framework/ten_designer_doc_window.png",
        alt: "TEN Designer Doc Window"
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
