import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I resolve common development issues on Electron?"
};
export let _markdown = `

This page outlines common challenges encountered throughout the integration, compilation, execution, and packaging phases of Electron SDK app development. It offers potential solutions to address these issues effectively.

## SDK Integrate issues [#sdk-integrate-issues]

### npm install is slow or times out [#npm-install-is-slow-or-times-out]

Error message: \`code ETIMEDOUT\`

This issue is usually caused by a network or proxy problem. Try one of the following solutions:

* Set a mirror source

  \`https://registry.npmjs.org/\` is the original official npm mirror download address which is slow for domestic users. Switching to a reliable mirror source can improve the download speed:

  \`\`\`bash
  # Set npm mirror source to Taobao source
  npm config set registry https://registry.npmmirror.com/
  # Set npm Electron mirror source as a Taobao mirror source
  npm config set ELECTRON_MIRROR https://npmmirror.com/mirrors/electron/
  \`\`\`

* Set up the proxy correctly

  If you are using a network proxy, make sure that the proxy settings for the command line tool are correct:

  \`\`\`bash
  # View Global Proxy Address
  npm config get proxy
  # Set the global proxy (HTTP proxy address)
  npm config set proxy http://<proxy-server-address>:<port-number>
  # Set the global proxy (HTTPS proxy address)
  npm config set proxy https://<proxy-server-address>:<port-number>
  \`\`\`

  Typically, the proxy tool offers a convenient one-click copy command for configuring the terminal proxy settings.

* Modify environment variables

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">
      Windows
    </TabsTrigger>

    <TabsTrigger value="tab2">
      macOS
    </TabsTrigger>
  </TabsList>

  <TabsContent value="tab1">
    Right click on **Computer > Properties > Advanced System Settings > Environment Variables**. Create the following variable under user variables:

    | variable name    | variable                                  |
    | :--------------- | :---------------------------------------- |
    | ELECTRON\\_MIRROR | \`https://npmmirror.com/mirrors/electron/\` |

    Once the setup is complete, reopen a command line tool and run \`npm install\` to install the dependencies.
  </TabsContent>

  <TabsContent value="tab2">
    Run the following command in a terminal to modify the environment variables:

    \`\`\`bash
    export ELECTRON_MIRROR='https://npmmirror.com/mirrors/electron/'
    export ELECTRON_GET_USE_PROXY=true
    \`\`\`

    <CalloutContainer type="warning">
      <CalloutTitle>
        Note
      </CalloutTitle>

      <CalloutDescription>
        Environment variables modified using this method take effect in the current terminal only. If you want the variables to take effect permanently, configure these in \`.zshrc\` or \`.bashrc\`.
      </CalloutDescription>
    </CalloutContainer>
  </TabsContent>
</Tabs>

### Error installing dependencies with \`cnpm\` and \`yarn\` [#error-installing-dependencies-with-cnpm-and-yarn]

In this case, Agora recommends that you first refer to [npm install is slow or times out](#npm-install-is-slow-or-times-out). Use npm native commands to set the mirror source and proxy address, and then install the dependencies.

Refer to the following commands to set up the proxy and mirror source for yarn:

\`\`\`bash
# Set up a proxy
yarn config set proxy <proxy-server-address>:<port-number>
yarn config set https-proxy <proxy-server-address>:<port-number>

# Set the mirror source
yarn config set registry https://registry.npmmirror.com/
yarn config set ELECTRON_MIRROR https://npmmirror.com/mirrors/electron/
\`\`\`

### Too many levels of symbolic links [#too-many-levels-of-symbolic-links]

Error message: \`Too many levels of symbolic links error\`

The error indicates that there are too many layers of symbolic links (also called soft links) in the project, and there may be circular dependencies that prevent the library from being installed.

Use the following command to prevent symbolic links from being created when installing npm packages:

\`\`\`bash
npm install --no-bin-links
\`\`\`

### How to identify the correspondence between Electron SDK version number and Native SDK version number? [#how-to-identify-the-correspondence-between-electron-sdk-version-number-and-native-sdk-version-number]

* Obtain from the release notes: The **SDK version number** listed in the release notes is identical to the **Native version number**.

* Obtain from the demo: The version number of Native SDK is shown directly at the bottom of the Electron demo as shown in the following figure:

  ![Native Version Check](https://assets-docs.agora.io/images/faq/electron_faq_native_version_check.png)

## Compile and run issues [#compile-and-run-issues]

### Running prompts for non-32-bit applications [#running-prompts-for-non-32-bit-applications]

Error message: \`agora_node_ext.node is not a valid Win32 application\`

![Run Prompts For Non-32bit Apps](https://assets-docs.agora.io/images/faq/electron_faq_run_prompts_for_non32bit_app.png)

By default, **npm** downloads the native5 module for the current computer architecture when installing dependencies.

This error means that the wrong architecture module was retrieved during the dependency download, resulting in the application being unable to start. It suggests that a 32-bit \`agora_node_ext.node\` is required.

Try one of the following methods to fix the issue:

* Use npm environment variables

  Create a new \`.npmrc\` file directly in the root directory of your project and write the following to configure the **npm environment variables**:

  \`\`\`bash
  agora_electron_sdk_arch=ia32
  arch=ia32
  \`\`\`

  After saving the configuration, reinstall \`agora-electron-sdk\` and try to package it again.

* Manually configure \`agora_electron\` in \`package.json\`

  Configure \`agora_electron\` with the following fields:

  * \`platform\`: (Optional) The default is selected according to the system. For example, macOS is \`darwin\`, Windows is \`win32\`.
  * \`prebuilt\`: (Optional) Set to \`true\` by default to prevent compatibility issues with Electron or Node.js versions that are incompatible with the SDK.
  * \`arch\`: (Optional) Selected by default according to the system architecture.

  For example, if you want to package a 32-bit application on a Windows 64-bit computer, configure \`package.json\` as follows:

  \`\`\`json
  "agora_electron":{
      "platform":"win32",
      "arch":"ia32"
      }
  \`\`\`

  After saving the configuration, reinstall \`agora-electron-sdk\` and try to package it again.

### Unable to get the application window, resulting in an inability to share the screen [#unable-to-get-the-application-window-resulting-in-an-inability-to-share-the-screen]

If you encounter the problem that the application window cannot be obtained through \`getScreenWindowsInfo\` which prevents you from sharing the screen, refer to the following steps to troubleshoot:

1. Confirm that the API call is correct

   Refer to the following documentation to check that the screen sharing related API calls are correct:

   * [Electron screen sharing demo source code](https://github.com/AgoraIO-Extensions/Electron-SDK/blob/main/example/src/renderer/examples/advanced/ScreenShare/ScreenShare.tsx)

2. Check for authorization

   Refer to the [Official Electron documentation](https://www.electronjs.org/docs/latest/api/system-preferences#systempreferencesgetmediaaccessstatusmediatype-windows-macos) to make sure that screen sharing permissions have been granted.

3. Contact Agora support to troubleshoot

   If the previous steps do not solve the problem, contact [Agora technical support](https://www.agora.io/en/customer-support).

## Packaging issues [#packaging-issues]

### Packaging crashes [#packaging-crashes]

Packaging crashes with a message similar to the following:

![Packaging Crash](https://assets-docs.agora.io/images/faq/electron_faq_packaging_crash.png)

If you encounter this problems, check the following:

1. Check if the file in the error message exists. For example, in the figure, \`AgoraRtcwrapper\` cannot be found.

2. Check if \`webpack.config\` is configured correctly.

   Make sure that the syntax of the \`webpack.config\` file is correct and matches the requirements of your project. Refer to the [official webpack documentation](https://webpack.js.org/concepts/) for details.

3. Check if the \`asar.unpacked\` configuration is correct.

   The \`asar.unpacked\` configuration is used to specify which files should be unpacked into the application package. Refer to the [configuration in the demo](https://github.com/AgoraIO-Extensions/Electron-SDK/blob/main/example/package.json#L20), or check the [Electron official documentation](https://www.electron.build/configuration/configuration#configuration-asarUnpack).

4. Ensure that you use \`require\` for your project's dependency on the SDK.

   On macOS, using \`import\` statements may result in symbol conflict issues that lead to packaging failures. To avoid this, use \`require\` statements instead. This is particularly relevant for projects using the Vue framework, as they are prone to packaging failures.

   \`\`\`typescript
   // import changed to require
   // import createAgoraRtcEngine from 'agora-electron-sdk';
   const createAgoraRtcEngine = require("agora-electron-sdk");
   \`\`\`

### Errors related to application authorization [#errors-related-to-application-authorization]

Error message: \`com.apple.security.app-sandbox of null\`

This error indicates an \`app-sandbox\` exception. \`app-sandbox\` is a security mechanism that restricts an application's access to system resources.

Check that the \`.entitlements\` file is configured correctly to ensure that there are no syntax and naming errors. If you don't need to publish your app to the App Store, remove \`com.apple.security.app-sandbox\` from the \`.entitlements\`.

### Incorrect configuration of \`asar.unpacked\` [#incorrect-configuration-of-asarunpacked]

Error message: \`Uncaught SyntaxError:Error parsing\`

This error appears when the configuration of \`asar.unpacked\`, which is used to specify which files should be unpacked into the application package, is incorrect.
Refer to the [configuration in the demo](https://github.com/AgoraIO-Extensions/Electron-SDK/blob/main/example/package.json#L20), or check the [official Electron documentation](https://www.electron.build/configuration/configuration#configuration-asarUnpack) for details.

### Unable to resolve library or module [#unable-to-resolve-library-or-module]

The following errors indicate that the library could not be parsed or the module could not be found.

* \`failed to compile, can't resolve agora-electron-sdk\`

* \`failed to compile, can't resolve agora_node_ext\`

* \`cannot find module\`

The error is usually caused by incorrect configuration of the compilation tool. Refer to the following methods to solve the problem:

1. If your project uses Vue, make sure that you use \`require\`, not \`import\`.

   \`\`\`typescript
   // modify import to require
   // import createAgoraRtcEngine from 'agora-electron-sdk';
   const createAgoraRtcEngine = require("agora-electron-sdk");
   \`\`\`

2. Modify tool configuration

   Depending on the language you are using and the compilation tool, refer to the following pages for configuration:

   * **Vue**：[https://nklayman.github.io/vue-cli-plugin-electron-builder/](https://nklayman.github.io/vue-cli-plugin-electron-builder/)
   * **Vite**：[https://electron-vite.github.io/](https://electron-vite.github.io/)
   * **React**：[https://github.com/electron-react-boilerplate/electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate)
   * **Webpack**：[https://webpack.electron.build/](https://webpack.electron.build/)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page outlines common challenges encountered throughout the integration, compilation, execution, and packaging phases of Electron SDK app development. It offers potential solutions to address these issues effectively."
  }, {
    heading: "npm-install-is-slow-or-times-out",
    content: "Error message: `code ETIMEDOUT`"
  }, {
    heading: "npm-install-is-slow-or-times-out",
    content: "This issue is usually caused by a network or proxy problem. Try one of the following solutions:"
  }, {
    heading: "npm-install-is-slow-or-times-out",
    content: "Set a mirror source"
  }, {
    heading: "npm-install-is-slow-or-times-out",
    content: "`https://registry.npmjs.org/` is the original official npm mirror download address which is slow for domestic users. Switching to a reliable mirror source can improve the download speed:"
  }, {
    heading: "npm-install-is-slow-or-times-out",
    content: "Set up the proxy correctly"
  }, {
    heading: "npm-install-is-slow-or-times-out",
    content: "If you are using a network proxy, make sure that the proxy settings for the command line tool are correct:"
  }, {
    heading: "npm-install-is-slow-or-times-out",
    content: "Typically, the proxy tool offers a convenient one-click copy command for configuring the terminal proxy settings."
  }, {
    heading: "npm-install-is-slow-or-times-out",
    content: "Modify environment variables"
  }, {
    heading: "npm-install-is-slow-or-times-out",
    content: "Right click on **Computer > Properties > Advanced System Settings > Environment Variables**. Create the following variable under user variables:"
  }, {
    heading: "npm-install-is-slow-or-times-out",
    content: "variable name"
  }, {
    heading: "npm-install-is-slow-or-times-out",
    content: "variable"
  }, {
    heading: "npm-install-is-slow-or-times-out",
    content: "ELECTRON\\_MIRROR"
  }, {
    heading: "npm-install-is-slow-or-times-out",
    content: "`https://npmmirror.com/mirrors/electron/`"
  }, {
    heading: "npm-install-is-slow-or-times-out",
    content: "Once the setup is complete, reopen a command line tool and run `npm install` to install the dependencies."
  }, {
    heading: "npm-install-is-slow-or-times-out",
    content: "Run the following command in a terminal to modify the environment variables:"
  }, {
    heading: "npm-install-is-slow-or-times-out",
    content: "Environment variables modified using this method take effect in the current terminal only. If you want the variables to take effect permanently, configure these in `.zshrc` or `.bashrc`."
  }, {
    heading: "error-installing-dependencies-with-cnpm-and-yarn",
    content: "In this case, Agora recommends that you first refer to npm install is slow or times out. Use npm native commands to set the mirror source and proxy address, and then install the dependencies."
  }, {
    heading: "error-installing-dependencies-with-cnpm-and-yarn",
    content: "Refer to the following commands to set up the proxy and mirror source for yarn:"
  }, {
    heading: "too-many-levels-of-symbolic-links",
    content: "Error message: `Too many levels of symbolic links error`"
  }, {
    heading: "too-many-levels-of-symbolic-links",
    content: "The error indicates that there are too many layers of symbolic links (also called soft links) in the project, and there may be circular dependencies that prevent the library from being installed."
  }, {
    heading: "too-many-levels-of-symbolic-links",
    content: "Use the following command to prevent symbolic links from being created when installing npm packages:"
  }, {
    heading: "how-to-identify-the-correspondence-between-electron-sdk-version-number-and-native-sdk-version-number",
    content: "Obtain from the release notes: The **SDK version number** listed in the release notes is identical to the **Native version number**."
  }, {
    heading: "how-to-identify-the-correspondence-between-electron-sdk-version-number-and-native-sdk-version-number",
    content: "Obtain from the demo: The version number of Native SDK is shown directly at the bottom of the Electron demo as shown in the following figure:"
  }, {
    heading: "running-prompts-for-non-32-bit-applications",
    content: "Error message: `agora_node_ext.node is not a valid Win32 application`"
  }, {
    heading: "running-prompts-for-non-32-bit-applications",
    content: "By default, **npm** downloads the native5 module for the current computer architecture when installing dependencies."
  }, {
    heading: "running-prompts-for-non-32-bit-applications",
    content: "This error means that the wrong architecture module was retrieved during the dependency download, resulting in the application being unable to start. It suggests that a 32-bit `agora_node_ext.node` is required."
  }, {
    heading: "running-prompts-for-non-32-bit-applications",
    content: "Try one of the following methods to fix the issue:"
  }, {
    heading: "running-prompts-for-non-32-bit-applications",
    content: "Use npm environment variables"
  }, {
    heading: "running-prompts-for-non-32-bit-applications",
    content: "Create a new `.npmrc` file directly in the root directory of your project and write the following to configure the **npm environment variables**:"
  }, {
    heading: "running-prompts-for-non-32-bit-applications",
    content: "After saving the configuration, reinstall `agora-electron-sdk` and try to package it again."
  }, {
    heading: "running-prompts-for-non-32-bit-applications",
    content: "Manually configure `agora_electron` in `package.json`"
  }, {
    heading: "running-prompts-for-non-32-bit-applications",
    content: "Configure `agora_electron` with the following fields:"
  }, {
    heading: "running-prompts-for-non-32-bit-applications",
    content: "`platform`: (Optional) The default is selected according to the system. For example, macOS is `darwin`, Windows is `win32`."
  }, {
    heading: "running-prompts-for-non-32-bit-applications",
    content: "`prebuilt`: (Optional) Set to `true` by default to prevent compatibility issues with Electron or Node.js versions that are incompatible with the SDK."
  }, {
    heading: "running-prompts-for-non-32-bit-applications",
    content: "`arch`: (Optional) Selected by default according to the system architecture."
  }, {
    heading: "running-prompts-for-non-32-bit-applications",
    content: "For example, if you want to package a 32-bit application on a Windows 64-bit computer, configure `package.json` as follows:"
  }, {
    heading: "running-prompts-for-non-32-bit-applications",
    content: "After saving the configuration, reinstall `agora-electron-sdk` and try to package it again."
  }, {
    heading: "unable-to-get-the-application-window-resulting-in-an-inability-to-share-the-screen",
    content: "If you encounter the problem that the application window cannot be obtained through `getScreenWindowsInfo` which prevents you from sharing the screen, refer to the following steps to troubleshoot:"
  }, {
    heading: "unable-to-get-the-application-window-resulting-in-an-inability-to-share-the-screen",
    content: "Confirm that the API call is correct"
  }, {
    heading: "unable-to-get-the-application-window-resulting-in-an-inability-to-share-the-screen",
    content: "Refer to the following documentation to check that the screen sharing related API calls are correct:"
  }, {
    heading: "unable-to-get-the-application-window-resulting-in-an-inability-to-share-the-screen",
    content: "Electron screen sharing demo source code"
  }, {
    heading: "unable-to-get-the-application-window-resulting-in-an-inability-to-share-the-screen",
    content: "Check for authorization"
  }, {
    heading: "unable-to-get-the-application-window-resulting-in-an-inability-to-share-the-screen",
    content: "Refer to the Official Electron documentation to make sure that screen sharing permissions have been granted."
  }, {
    heading: "unable-to-get-the-application-window-resulting-in-an-inability-to-share-the-screen",
    content: "Contact Agora support to troubleshoot"
  }, {
    heading: "unable-to-get-the-application-window-resulting-in-an-inability-to-share-the-screen",
    content: "If the previous steps do not solve the problem, contact Agora technical support."
  }, {
    heading: "packaging-crashes",
    content: "Packaging crashes with a message similar to the following:"
  }, {
    heading: "packaging-crashes",
    content: "If you encounter this problems, check the following:"
  }, {
    heading: "packaging-crashes",
    content: "Check if the file in the error message exists. For example, in the figure, `AgoraRtcwrapper` cannot be found."
  }, {
    heading: "packaging-crashes",
    content: "Check if `webpack.config` is configured correctly."
  }, {
    heading: "packaging-crashes",
    content: "Make sure that the syntax of the `webpack.config` file is correct and matches the requirements of your project. Refer to the official webpack documentation for details."
  }, {
    heading: "packaging-crashes",
    content: "Check if the `asar.unpacked` configuration is correct."
  }, {
    heading: "packaging-crashes",
    content: "The `asar.unpacked` configuration is used to specify which files should be unpacked into the application package. Refer to the configuration in the demo, or check the Electron official documentation."
  }, {
    heading: "packaging-crashes",
    content: "Ensure that you use `require` for your project's dependency on the SDK."
  }, {
    heading: "packaging-crashes",
    content: "On macOS, using `import` statements may result in symbol conflict issues that lead to packaging failures. To avoid this, use `require` statements instead. This is particularly relevant for projects using the Vue framework, as they are prone to packaging failures."
  }, {
    heading: "errors-related-to-application-authorization",
    content: "Error message: `com.apple.security.app-sandbox of null`"
  }, {
    heading: "errors-related-to-application-authorization",
    content: "This error indicates an `app-sandbox` exception. `app-sandbox` is a security mechanism that restricts an application's access to system resources."
  }, {
    heading: "errors-related-to-application-authorization",
    content: "Check that the `.entitlements` file is configured correctly to ensure that there are no syntax and naming errors. If you don't need to publish your app to the App Store, remove `com.apple.security.app-sandbox` from the `.entitlements`."
  }, {
    heading: "incorrect-configuration-of-asarunpacked",
    content: "Error message: `Uncaught SyntaxError:Error parsing`"
  }, {
    heading: "incorrect-configuration-of-asarunpacked",
    content: "This error appears when the configuration of `asar.unpacked`, which is used to specify which files should be unpacked into the application package, is incorrect.\nRefer to the configuration in the demo, or check the official Electron documentation for details."
  }, {
    heading: "unable-to-resolve-library-or-module",
    content: "The following errors indicate that the library could not be parsed or the module could not be found."
  }, {
    heading: "unable-to-resolve-library-or-module",
    content: "`failed to compile, can't resolve agora-electron-sdk`"
  }, {
    heading: "unable-to-resolve-library-or-module",
    content: "`failed to compile, can't resolve agora_node_ext`"
  }, {
    heading: "unable-to-resolve-library-or-module",
    content: "`cannot find module`"
  }, {
    heading: "unable-to-resolve-library-or-module",
    content: "The error is usually caused by incorrect configuration of the compilation tool. Refer to the following methods to solve the problem:"
  }, {
    heading: "unable-to-resolve-library-or-module",
    content: "If your project uses Vue, make sure that you use `require`, not `import`."
  }, {
    heading: "unable-to-resolve-library-or-module",
    content: "Modify tool configuration"
  }, {
    heading: "unable-to-resolve-library-or-module",
    content: "Depending on the language you are using and the compilation tool, refer to the following pages for configuration:"
  }, {
    heading: "unable-to-resolve-library-or-module",
    content: "**Vue**：https\\://nklayman.github.io/vue-cli-plugin-electron-builder/"
  }, {
    heading: "unable-to-resolve-library-or-module",
    content: "**Vite**：https\\://electron-vite.github.io/"
  }, {
    heading: "unable-to-resolve-library-or-module",
    content: "**React**：https\\://github.com/electron-react-boilerplate/electron-react-boilerplate"
  }, {
    heading: "unable-to-resolve-library-or-module",
    content: "**Webpack**：https\\://webpack.electron.build/"
  }],
  headings: [{
    id: "sdk-integrate-issues",
    content: "SDK Integrate issues"
  }, {
    id: "npm-install-is-slow-or-times-out",
    content: "npm install is slow or times out"
  }, {
    id: "error-installing-dependencies-with-cnpm-and-yarn",
    content: "Error installing dependencies with `cnpm` and `yarn`"
  }, {
    id: "too-many-levels-of-symbolic-links",
    content: "Too many levels of symbolic links"
  }, {
    id: "how-to-identify-the-correspondence-between-electron-sdk-version-number-and-native-sdk-version-number",
    content: "How to identify the correspondence between Electron SDK version number and Native SDK version number?"
  }, {
    id: "compile-and-run-issues",
    content: "Compile and run issues"
  }, {
    id: "running-prompts-for-non-32-bit-applications",
    content: "Running prompts for non-32-bit applications"
  }, {
    id: "unable-to-get-the-application-window-resulting-in-an-inability-to-share-the-screen",
    content: "Unable to get the application window, resulting in an inability to share the screen"
  }, {
    id: "packaging-issues",
    content: "Packaging issues"
  }, {
    id: "packaging-crashes",
    content: "Packaging crashes"
  }, {
    id: "errors-related-to-application-authorization",
    content: "Errors related to application authorization"
  }, {
    id: "incorrect-configuration-of-asarunpacked",
    content: "Incorrect configuration of `asar.unpacked`"
  }, {
    id: "unable-to-resolve-library-or-module",
    content: "Unable to resolve library or module"
  }]
};
export let toc = [{
  depth: 2,
  url: "#sdk-integrate-issues",
  title: _jsx(_Fragment, {
    children: "SDK Integrate issues"
  })
}, {
  depth: 3,
  url: "#npm-install-is-slow-or-times-out",
  title: _jsx(_Fragment, {
    children: "npm install is slow or times out"
  })
}, {
  depth: 3,
  url: "#error-installing-dependencies-with-cnpm-and-yarn",
  title: _jsxs(_Fragment, {
    children: ["Error installing dependencies with ", _jsx("code", {
      children: "cnpm"
    }), " and ", _jsx("code", {
      children: "yarn"
    })]
  })
}, {
  depth: 3,
  url: "#too-many-levels-of-symbolic-links",
  title: _jsx(_Fragment, {
    children: "Too many levels of symbolic links"
  })
}, {
  depth: 3,
  url: "#how-to-identify-the-correspondence-between-electron-sdk-version-number-and-native-sdk-version-number",
  title: _jsx(_Fragment, {
    children: "How to identify the correspondence between Electron SDK version number and Native SDK version number?"
  })
}, {
  depth: 2,
  url: "#compile-and-run-issues",
  title: _jsx(_Fragment, {
    children: "Compile and run issues"
  })
}, {
  depth: 3,
  url: "#running-prompts-for-non-32-bit-applications",
  title: _jsx(_Fragment, {
    children: "Running prompts for non-32-bit applications"
  })
}, {
  depth: 3,
  url: "#unable-to-get-the-application-window-resulting-in-an-inability-to-share-the-screen",
  title: _jsx(_Fragment, {
    children: "Unable to get the application window, resulting in an inability to share the screen"
  })
}, {
  depth: 2,
  url: "#packaging-issues",
  title: _jsx(_Fragment, {
    children: "Packaging issues"
  })
}, {
  depth: 3,
  url: "#packaging-crashes",
  title: _jsx(_Fragment, {
    children: "Packaging crashes"
  })
}, {
  depth: 3,
  url: "#errors-related-to-application-authorization",
  title: _jsx(_Fragment, {
    children: "Errors related to application authorization"
  })
}, {
  depth: 3,
  url: "#incorrect-configuration-of-asarunpacked",
  title: _jsxs(_Fragment, {
    children: ["Incorrect configuration of ", _jsx("code", {
      children: "asar.unpacked"
    })]
  })
}, {
  depth: 3,
  url: "#unable-to-resolve-library-or-module",
  title: _jsx(_Fragment, {
    children: "Unable to resolve library or module"
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle, Tabs, TabsContent, TabsList, TabsTrigger } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  if (!Tabs)
    _missingMdxReference("Tabs", true);
  if (!TabsContent)
    _missingMdxReference("TabsContent", true);
  if (!TabsList)
    _missingMdxReference("TabsList", true);
  if (!TabsTrigger)
    _missingMdxReference("TabsTrigger", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page outlines common challenges encountered throughout the integration, compilation, execution, and packaging phases of Electron SDK app development. It offers potential solutions to address these issues effectively."
    }), `
`, _jsx(_components.h2, {
      id: "sdk-integrate-issues",
      children: "SDK Integrate issues"
    }), `
`, _jsx(_components.h3, {
      id: "npm-install-is-slow-or-times-out",
      children: "npm install is slow or times out"
    }), `
`, _jsxs(_components.p, {
      children: ["Error message: ", _jsx(_components.code, {
        children: "code ETIMEDOUT"
      })]
    }), `
`, _jsx(_components.p, {
      children: "This issue is usually caused by a network or proxy problem. Try one of the following solutions:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Set a mirror source"
        }), `
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "https://registry.npmjs.org/"
          }), " is the original official npm mirror download address which is slow for domestic users. Switching to a reliable mirror source can improve the download speed:"]
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "# Set npm mirror source to Taobao source"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "npm"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " config"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " set"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " registry"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " https://registry.npmmirror.com/"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "# Set npm Electron mirror source as a Taobao mirror source"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "npm"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " config"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " set"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " ELECTRON_MIRROR"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " https://npmmirror.com/mirrors/electron/"
                })]
              })]
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Set up the proxy correctly"
        }), `
`, _jsx(_components.p, {
          children: "If you are using a network proxy, make sure that the proxy settings for the command line tool are correct:"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "# View Global Proxy Address"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "npm"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " config"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " get"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " proxy"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "# Set the global proxy (HTTP proxy address)"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "npm"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " config"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " set"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " proxy"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " http://"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "proxy-server-addres"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "s"
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
                  children: ":"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "port-numbe"
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
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "# Set the global proxy (HTTPS proxy address)"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "npm"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " config"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " set"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " proxy"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " https://"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "proxy-server-addres"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "s"
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
                  children: ":"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "port-numbe"
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
                })]
              })]
            })
          })
        }), `
`, _jsx(_components.p, {
          children: "Typically, the proxy tool offers a convenient one-click copy command for configuring the terminal proxy settings."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Modify environment variables"
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(Tabs, {
      defaultValue: "tab1",
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "tab1",
          children: "Windows"
        }), _jsx(TabsTrigger, {
          value: "tab2",
          children: "macOS"
        })]
      }), _jsxs(TabsContent, {
        value: "tab1",
        children: [_jsxs(_components.p, {
          children: ["Right click on ", _jsx(_components.strong, {
            children: "Computer > Properties > Advanced System Settings > Environment Variables"
          }), ". Create the following variable under user variables:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "variable name"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "variable"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "ELECTRON_MIRROR"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "https://npmmirror.com/mirrors/electron/"
                })
              })]
            })
          })]
        }), _jsxs(_components.p, {
          children: ["Once the setup is complete, reopen a command line tool and run ", _jsx(_components.code, {
            children: "npm install"
          }), " to install the dependencies."]
        })]
      }), _jsxs(TabsContent, {
        value: "tab2",
        children: [_jsx(_components.p, {
          children: "Run the following command in a terminal to modify the environment variables:"
        }), _jsx(_Fragment, {
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "export"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ELECTRON_MIRROR"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'https://npmmirror.com/mirrors/electron/'"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "export"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ELECTRON_GET_USE_PROXY"
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
                  children: "true"
                })]
              })]
            })
          })
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Note"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Environment variables modified using this method take effect in the current terminal only. If you want the variables to take effect permanently, configure these in ", _jsx(_components.code, {
                children: ".zshrc"
              }), " or ", _jsx(_components.code, {
                children: ".bashrc"
              }), "."]
            })
          })]
        })]
      })]
    }), `
`, _jsxs(_components.h3, {
      id: "error-installing-dependencies-with-cnpm-and-yarn",
      children: ["Error installing dependencies with ", _jsx(_components.code, {
        children: "cnpm"
      }), " and ", _jsx(_components.code, {
        children: "yarn"
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["In this case, Agora recommends that you first refer to ", _jsx(_components.a, {
        href: "#npm-install-is-slow-or-times-out",
        children: "npm install is slow or times out"
      }), ". Use npm native commands to set the mirror source and proxy address, and then install the dependencies."]
    }), `
`, _jsx(_components.p, {
      children: "Refer to the following commands to set up the proxy and mirror source for yarn:"
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
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Set up a proxy"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "yarn"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " config"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " set"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " proxy"
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
              children: "proxy-server-addres"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "s"
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
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "port-numbe"
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
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "yarn"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " config"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " set"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https-proxy"
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
              children: "proxy-server-addres"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "s"
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
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "port-numbe"
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
              children: "# Set the mirror source"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "yarn"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " config"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " set"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " registry"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://registry.npmmirror.com/"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "yarn"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " config"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " set"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ELECTRON_MIRROR"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://npmmirror.com/mirrors/electron/"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "too-many-levels-of-symbolic-links",
      children: "Too many levels of symbolic links"
    }), `
`, _jsxs(_components.p, {
      children: ["Error message: ", _jsx(_components.code, {
        children: "Too many levels of symbolic links error"
      })]
    }), `
`, _jsx(_components.p, {
      children: "The error indicates that there are too many layers of symbolic links (also called soft links) in the project, and there may be circular dependencies that prevent the library from being installed."
    }), `
`, _jsx(_components.p, {
      children: "Use the following command to prevent symbolic links from being created when installing npm packages:"
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
              children: "npm"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " install"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --no-bin-links"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "how-to-identify-the-correspondence-between-electron-sdk-version-number-and-native-sdk-version-number",
      children: "How to identify the correspondence between Electron SDK version number and Native SDK version number?"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Obtain from the release notes: The ", _jsx(_components.strong, {
            children: "SDK version number"
          }), " listed in the release notes is identical to the ", _jsx(_components.strong, {
            children: "Native version number"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Obtain from the demo: The version number of Native SDK is shown directly at the bottom of the Electron demo as shown in the following figure:"
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/faq/electron_faq_native_version_check.png",
            alt: "Native Version Check"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "compile-and-run-issues",
      children: "Compile and run issues"
    }), `
`, _jsx(_components.h3, {
      id: "running-prompts-for-non-32-bit-applications",
      children: "Running prompts for non-32-bit applications"
    }), `
`, _jsxs(_components.p, {
      children: ["Error message: ", _jsx(_components.code, {
        children: "agora_node_ext.node is not a valid Win32 application"
      })]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/faq/electron_faq_run_prompts_for_non32bit_app.png",
        alt: "Run Prompts For Non-32bit Apps"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["By default, ", _jsx(_components.strong, {
        children: "npm"
      }), " downloads the native5 module for the current computer architecture when installing dependencies."]
    }), `
`, _jsxs(_components.p, {
      children: ["This error means that the wrong architecture module was retrieved during the dependency download, resulting in the application being unable to start. It suggests that a 32-bit ", _jsx(_components.code, {
        children: "agora_node_ext.node"
      }), " is required."]
    }), `
`, _jsx(_components.p, {
      children: "Try one of the following methods to fix the issue:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Use npm environment variables"
        }), `
`, _jsxs(_components.p, {
          children: ["Create a new ", _jsx(_components.code, {
            children: ".npmrc"
          }), " file directly in the root directory of your project and write the following to configure the ", _jsx(_components.strong, {
            children: "npm environment variables"
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
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agora_electron_sdk_arch"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "ia32"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "arch"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "ia32"
                })]
              })]
            })
          })
        }), `
`, _jsxs(_components.p, {
          children: ["After saving the configuration, reinstall ", _jsx(_components.code, {
            children: "agora-electron-sdk"
          }), " and try to package it again."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Manually configure ", _jsx(_components.code, {
            children: "agora_electron"
          }), " in ", _jsx(_components.code, {
            children: "package.json"
          })]
        }), `
`, _jsxs(_components.p, {
          children: ["Configure ", _jsx(_components.code, {
            children: "agora_electron"
          }), " with the following fields:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "platform"
            }), ": (Optional) The default is selected according to the system. For example, macOS is ", _jsx(_components.code, {
              children: "darwin"
            }), ", Windows is ", _jsx(_components.code, {
              children: "win32"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "prebuilt"
            }), ": (Optional) Set to ", _jsx(_components.code, {
              children: "true"
            }), " by default to prevent compatibility issues with Electron or Node.js versions that are incompatible with the SDK."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "arch"
            }), ": (Optional) Selected by default according to the system architecture."]
          }), `
`]
        }), `
`, _jsxs(_components.p, {
          children: ["For example, if you want to package a 32-bit application on a Windows 64-bit computer, configure ", _jsx(_components.code, {
            children: "package.json"
          }), " as follows:"]
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
                  children: '"agora_electron"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ":{"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "platform"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ":"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"win32"'
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
                  children: '    "arch"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ":"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"ia32"'
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
              })]
            })
          })
        }), `
`, _jsxs(_components.p, {
          children: ["After saving the configuration, reinstall ", _jsx(_components.code, {
            children: "agora-electron-sdk"
          }), " and try to package it again."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "unable-to-get-the-application-window-resulting-in-an-inability-to-share-the-screen",
      children: "Unable to get the application window, resulting in an inability to share the screen"
    }), `
`, _jsxs(_components.p, {
      children: ["If you encounter the problem that the application window cannot be obtained through ", _jsx(_components.code, {
        children: "getScreenWindowsInfo"
      }), " which prevents you from sharing the screen, refer to the following steps to troubleshoot:"]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Confirm that the API call is correct"
        }), `
`, _jsx(_components.p, {
          children: "Refer to the following documentation to check that the screen sharing related API calls are correct:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO-Extensions/Electron-SDK/blob/main/example/src/renderer/examples/advanced/ScreenShare/ScreenShare.tsx",
              children: "Electron screen sharing demo source code"
            })
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Check for authorization"
        }), `
`, _jsxs(_components.p, {
          children: ["Refer to the ", _jsx(_components.a, {
            href: "https://www.electronjs.org/docs/latest/api/system-preferences#systempreferencesgetmediaaccessstatusmediatype-windows-macos",
            children: "Official Electron documentation"
          }), " to make sure that screen sharing permissions have been granted."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Contact Agora support to troubleshoot"
        }), `
`, _jsxs(_components.p, {
          children: ["If the previous steps do not solve the problem, contact ", _jsx(_components.a, {
            href: "https://www.agora.io/en/customer-support",
            children: "Agora technical support"
          }), "."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "packaging-issues",
      children: "Packaging issues"
    }), `
`, _jsx(_components.h3, {
      id: "packaging-crashes",
      children: "Packaging crashes"
    }), `
`, _jsx(_components.p, {
      children: "Packaging crashes with a message similar to the following:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/faq/electron_faq_packaging_crash.png",
        alt: "Packaging Crash"
      })
    }), `
`, _jsx(_components.p, {
      children: "If you encounter this problems, check the following:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Check if the file in the error message exists. For example, in the figure, ", _jsx(_components.code, {
            children: "AgoraRtcwrapper"
          }), " cannot be found."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Check if ", _jsx(_components.code, {
            children: "webpack.config"
          }), " is configured correctly."]
        }), `
`, _jsxs(_components.p, {
          children: ["Make sure that the syntax of the ", _jsx(_components.code, {
            children: "webpack.config"
          }), " file is correct and matches the requirements of your project. Refer to the ", _jsx(_components.a, {
            href: "https://webpack.js.org/concepts/",
            children: "official webpack documentation"
          }), " for details."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Check if the ", _jsx(_components.code, {
            children: "asar.unpacked"
          }), " configuration is correct."]
        }), `
`, _jsxs(_components.p, {
          children: ["The ", _jsx(_components.code, {
            children: "asar.unpacked"
          }), " configuration is used to specify which files should be unpacked into the application package. Refer to the ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/Electron-SDK/blob/main/example/package.json#L20",
            children: "configuration in the demo"
          }), ", or check the ", _jsx(_components.a, {
            href: "https://www.electron.build/configuration/configuration#configuration-asarUnpack",
            children: "Electron official documentation"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Ensure that you use ", _jsx(_components.code, {
            children: "require"
          }), " for your project's dependency on the SDK."]
        }), `
`, _jsxs(_components.p, {
          children: ["On macOS, using ", _jsx(_components.code, {
            children: "import"
          }), " statements may result in symbol conflict issues that lead to packaging failures. To avoid this, use ", _jsx(_components.code, {
            children: "require"
          }), " statements instead. This is particularly relevant for projects using the Vue framework, as they are prone to packaging failures."]
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// import changed to require"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// import createAgoraRtcEngine from 'agora-electron-sdk';"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " createAgoraRtcEngine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " require"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"agora-electron-sdk"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
                })]
              })]
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "errors-related-to-application-authorization",
      children: "Errors related to application authorization"
    }), `
`, _jsxs(_components.p, {
      children: ["Error message: ", _jsx(_components.code, {
        children: "com.apple.security.app-sandbox of null"
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["This error indicates an ", _jsx(_components.code, {
        children: "app-sandbox"
      }), " exception. ", _jsx(_components.code, {
        children: "app-sandbox"
      }), " is a security mechanism that restricts an application's access to system resources."]
    }), `
`, _jsxs(_components.p, {
      children: ["Check that the ", _jsx(_components.code, {
        children: ".entitlements"
      }), " file is configured correctly to ensure that there are no syntax and naming errors. If you don't need to publish your app to the App Store, remove ", _jsx(_components.code, {
        children: "com.apple.security.app-sandbox"
      }), " from the ", _jsx(_components.code, {
        children: ".entitlements"
      }), "."]
    }), `
`, _jsxs(_components.h3, {
      id: "incorrect-configuration-of-asarunpacked",
      children: ["Incorrect configuration of ", _jsx(_components.code, {
        children: "asar.unpacked"
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["Error message: ", _jsx(_components.code, {
        children: "Uncaught SyntaxError:Error parsing"
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["This error appears when the configuration of ", _jsx(_components.code, {
        children: "asar.unpacked"
      }), `, which is used to specify which files should be unpacked into the application package, is incorrect.
Refer to the `, _jsx(_components.a, {
        href: "https://github.com/AgoraIO-Extensions/Electron-SDK/blob/main/example/package.json#L20",
        children: "configuration in the demo"
      }), ", or check the ", _jsx(_components.a, {
        href: "https://www.electron.build/configuration/configuration#configuration-asarUnpack",
        children: "official Electron documentation"
      }), " for details."]
    }), `
`, _jsx(_components.h3, {
      id: "unable-to-resolve-library-or-module",
      children: "Unable to resolve library or module"
    }), `
`, _jsx(_components.p, {
      children: "The following errors indicate that the library could not be parsed or the module could not be found."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.code, {
            children: "failed to compile, can't resolve agora-electron-sdk"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.code, {
            children: "failed to compile, can't resolve agora_node_ext"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.code, {
            children: "cannot find module"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The error is usually caused by incorrect configuration of the compilation tool. Refer to the following methods to solve the problem:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If your project uses Vue, make sure that you use ", _jsx(_components.code, {
            children: "require"
          }), ", not ", _jsx(_components.code, {
            children: "import"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// modify import to require"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// import createAgoraRtcEngine from 'agora-electron-sdk';"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " createAgoraRtcEngine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " require"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"agora-electron-sdk"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
                })]
              })]
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Modify tool configuration"
        }), `
`, _jsx(_components.p, {
          children: "Depending on the language you are using and the compilation tool, refer to the following pages for configuration:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Vue"
            }), "：", _jsx(_components.a, {
              href: "https://nklayman.github.io/vue-cli-plugin-electron-builder/",
              children: "https://nklayman.github.io/vue-cli-plugin-electron-builder/"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Vite"
            }), "：", _jsx(_components.a, {
              href: "https://electron-vite.github.io/",
              children: "https://electron-vite.github.io/"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "React"
            }), "：", _jsx(_components.a, {
              href: "https://github.com/electron-react-boilerplate/electron-react-boilerplate",
              children: "https://github.com/electron-react-boilerplate/electron-react-boilerplate"
            })]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Webpack"
            }), "：", _jsx(_components.a, {
              href: "https://webpack.electron.build/",
              children: "https://webpack.electron.build/"
            })]
          }), `
`]
        }), `
`]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
