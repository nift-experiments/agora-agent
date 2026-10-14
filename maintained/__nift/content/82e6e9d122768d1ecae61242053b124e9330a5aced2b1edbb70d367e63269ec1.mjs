import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Use TEN Manager",
  description: "Use TEN Manager to create TEN packages, manage dependencies, launch tools, validate packages, and publish components."
};
export let _markdown = `

In the TEN ecosystem, almost everything is a component. A TEN app, a TEN extension, and a TEN protocol are all components. To help developers manage operations related to these components, the TEN Framework provides a tool called TEN Manager.

## Understand the tech [#understand-the-tech]

TEN Manager is the command-line package manager for the TEN Framework ecosystem. It provides essential tools for creating, installing, and managing TEN packages throughout your development workflow.

TEN Manager provides the following key functionalities:

* **Package creation**: Generate new apps, extensions, and protocol packages from templates
* **Dependency management**: Automatically resolve, fetch, and install required packages
* **Cloud Store integration**: Browse and install packages from the TEN Cloud Store
* **Development tools**: Launch the visual designer and run custom build scripts
* **Validation**: Check application graphs and package configurations for errors

TEN Manager handles the complexity of package dependencies and installations, allowing you to focus on building your applications rather than managing infrastructure.

<CalloutContainer type="info">
  <CalloutDescription>
    \`tman\` is the command-line abbreviation for TEN Manager.
  </CalloutDescription>
</CalloutContainer>

## Set up TEN Manager [#set-up-ten-manager]

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

## Package management [#package-management]

TEN Manager provides the following package management commands.

### Create packages [#create-packages]

Use \`tman create\` to generate new apps, extensions, protocols, and other package types using predefined templates. The command sets up proper directory structure, creates \`manifest.json\` and \`property.json\` configuration files, and provides template code to get you started quickly.

#### Usage [#usage]

\`\`\`text
tman create [OPTIONS] --template <TEMPLATE> <PACKAGE_TYPE> <PACKAGE_NAME>
\`\`\`

See supported [Package types](#package-types).

#### Examples [#examples]

\`\`\`bash
# Create a new TEN application
tman create app my_app --template default_app_python

# Create a new extension
tman create extension my_extension --template default_extension_go

# Create a protocol package
tman create protocol my_protocol --template custom_protocol
\`\`\`

### Fetch packages [#fetch-packages]

Use \`tman fetch\` to download packages from the TEN Cloud Store registry. The command allows you to specify target directories and control extraction behavior.

#### Usage [#usage-1]

\`\`\`bash
tman fetch [OPTIONS] <PACKAGE_TYPE> <PACKAGE_NAME>
\`\`\`

See supported [Package types](#package-types).

#### Examples [#examples-1]

\`\`\`bash
# Fetch and extract an extension package
tman fetch extension speech_recognition

# Fetch a specific version of an app
tman fetch app ai_agent@1.2.0

# Download package file only (no extraction) to specific directory
tman fetch protocol websocket --output-dir ./downloads --no-extract

# Fetch system package for specific platform
tman fetch system ten_runtime --os linux --arch x64
\`\`\`

### Uninstall packages [#uninstall-packages]

Use \`tman uninstall\` to remove packages from your TEN application. This removes the package files and cleans up the local package directory structure.

#### Usage [#usage-2]

\`\`\`bash
tman uninstall <PACKAGE_TYPE> <PACKAGE_NAME>
\`\`\`

See supported [Package types](#package-types).

#### Examples [#examples-2]

\`\`\`bash
# Uninstall an extension package
tman uninstall extension speech_recognition

# Remove a protocol package
tman uninstall protocol websocket

# Uninstall a system component
tman uninstall system ten_runtime
\`\`\`

### Package TEN components [#package-ten-components]

Use \`tman package\` to create distributable package files from your TEN packages. Run this command from the base directory of the package you want to distribute.

#### Usage [#usage-3]

\`\`\`bash
tman package [OPTIONS]
\`\`\`

#### Examples [#examples-3]

\`\`\`bash
# Create a package file from current directory
cd my_extension
tman package

# Create package file with custom output path
tman package --output-path ./dist/my_extension.zip

# Package an app for distribution
cd my_ten_app
tman package --output-path ../releases/my_app_v1.0.zip
\`\`\`

### Publish packages [#publish-packages]

Use \`tman publish\` to publish your TEN packages to the TEN Cloud Store. Run this command from the base directory of the package you want to publish.

#### Usage [#usage-4]

\`\`\`bash
tman publish
\`\`\`

#### Examples [#examples-4]

\`\`\`bash
# Publish an extension to the Cloud Store
cd my_extension
tman publish

# Publish an app package
cd my_ten_app
tman publish

# Publish a protocol package
cd my_custom_protocol
tman publish
\`\`\`

## Development tools [#development-tools]

TEN Manager provides the following development tools.

### TEN designer [#ten-designer]

Use \`tman designer\` to start the TEN Designer visual development environment. This opens a browser-based interface for creating, editing, and managing TEN applications and extensions. See [Use TEN Designer](./use-ten-designer) for details.

#### Usage [#usage-5]

\`\`\`bash
tman designer [OPTIONS]
\`\`\`

#### Examples [#examples-5]

\`\`\`bash
# Launch designer with default settings
tman designer

# Launch on a specific port
tman designer --port 8080

# Launch with custom IP and port
tman designer --ip 127.0.0.1 --port 3000

# Launch from a specific app directory
cd my_ten_app
tman designer --base-dir .
\`\`\`

### Check consistency [#check-consistency]

Use \`tman check\` to validate various aspects of your TEN packages and configurations. This helps ensure your packages are properly configured before deployment.

#### Usage [#usage-6]

\`\`\`bash
tman check <COMMAND>
\`\`\`

The following commands are available:

* \`manifest-json\`: Validate manifest.json files against JSON schema
* \`property-json\`: Validate property.json files against JSON schema

#### Examples [#examples-6]

\`\`\`bash
# Check manifest.json validity
tman check manifest-json

# Check property.json validity
tman check property-json
\`\`\`

### Modify framework components [#modify-framework-components]

Use \`tman modify\` to modify various components and configurations within the TEN Framework. This allows you to update existing configurations without manually editing files.

#### Usage [#usage-7]

\`\`\`bash
tman modify <COMMAND>
\`\`\`

The following modify commands are available:

* \`graph\`: Modify predefined graphs in property.json files

### Run custom scripts [#run-custom-scripts]

Use \`tman run\` to execute custom scripts defined in your package's manifest.json file. This allows you to run predefined build, start, test, or other custom commands for your TEN packages.

#### Usage [#usage-8]

\`\`\`bash
tman run <SCRIPT_NAME> [-- <EXTRA_ARGS>]
\`\`\`

#### Examples [#examples-7]

\`\`\`bash
# Run the start script
tman run start

# Run the build script
tman run build

# Run a custom script with additional arguments
tman run test -- --verbose

# Run stop script
tman run stop
\`\`\`

## Reference [#reference]

### Package types [#package-types]

The following package types are supported:

* \`app\`: Main application containers
* \`extension\`: Functional components that implement specific features
* \`protocol\`: Communication protocol handlers
* \`system\`: Core framework components
* \`addon_loader\`: Specialized loaders for different programming languages

### Common options [#common-options]

TEN Manager supports the following global options:

* **\`--verbose\`** - Enable detailed output for debugging
* **\`-y, --yes\`** - Automatically confirm all prompts
* **\`-c, --config-file <CONFIG_FILE>\`** - Specify custom configuration file
* **\`--user-token <USER_TOKEN>\`** - Provide authentication token
* **\`-h, --help\`** - Display help information

### Get help [#get-help]

Use the following options with \`tman\` to get help:

* **\`help\`** - Display help information for each command
* **\`--version\`** - Show version information and check for updates
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "In the TEN ecosystem, almost everything is a component. A TEN app, a TEN extension, and a TEN protocol are all components. To help developers manage operations related to these components, the TEN Framework provides a tool called TEN Manager."
  }, {
    heading: "understand-the-tech",
    content: "TEN Manager is the command-line package manager for the TEN Framework ecosystem. It provides essential tools for creating, installing, and managing TEN packages throughout your development workflow."
  }, {
    heading: "understand-the-tech",
    content: "TEN Manager provides the following key functionalities:"
  }, {
    heading: "understand-the-tech",
    content: "**Package creation**: Generate new apps, extensions, and protocol packages from templates"
  }, {
    heading: "understand-the-tech",
    content: "**Dependency management**: Automatically resolve, fetch, and install required packages"
  }, {
    heading: "understand-the-tech",
    content: "**Cloud Store integration**: Browse and install packages from the TEN Cloud Store"
  }, {
    heading: "understand-the-tech",
    content: "**Development tools**: Launch the visual designer and run custom build scripts"
  }, {
    heading: "understand-the-tech",
    content: "**Validation**: Check application graphs and package configurations for errors"
  }, {
    heading: "understand-the-tech",
    content: "TEN Manager handles the complexity of package dependencies and installations, allowing you to focus on building your applications rather than managing infrastructure."
  }, {
    heading: "understand-the-tech",
    content: "`tman` is the command-line abbreviation for TEN Manager."
  }, {
    heading: "set-up-ten-manager",
    content: "Follow these steps to install and run TEN Manager:"
  }, {
    heading: "set-up-ten-manager",
    content: "Open the TEN Framework releases page on GitHub."
  }, {
    heading: "set-up-ten-manager",
    content: "Find the TEN Manager package for your operating system and architecture. The package uses the naming structure `tman-[OS]-release-[ARCH].zip`."
  }, {
    heading: "set-up-ten-manager",
    content: "Download the package. For example, to download the Linux x64 package:"
  }, {
    heading: "set-up-ten-manager",
    content: "Extract the package:"
  }, {
    heading: "set-up-ten-manager",
    content: "Optionally copy the binary to a directory in your system `PATH`:"
  }, {
    heading: "set-up-ten-manager",
    content: "Verify the installation:"
  }, {
    heading: "package-management",
    content: "TEN Manager provides the following package management commands."
  }, {
    heading: "create-packages",
    content: "Use `tman create` to generate new apps, extensions, protocols, and other package types using predefined templates. The command sets up proper directory structure, creates `manifest.json` and `property.json` configuration files, and provides template code to get you started quickly."
  }, {
    heading: "usage",
    content: "See supported Package types."
  }, {
    heading: "fetch-packages",
    content: "Use `tman fetch` to download packages from the TEN Cloud Store registry. The command allows you to specify target directories and control extraction behavior."
  }, {
    heading: "usage-1",
    content: "See supported Package types."
  }, {
    heading: "uninstall-packages",
    content: "Use `tman uninstall` to remove packages from your TEN application. This removes the package files and cleans up the local package directory structure."
  }, {
    heading: "usage-2",
    content: "See supported Package types."
  }, {
    heading: "package-ten-components",
    content: "Use `tman package` to create distributable package files from your TEN packages. Run this command from the base directory of the package you want to distribute."
  }, {
    heading: "publish-packages",
    content: "Use `tman publish` to publish your TEN packages to the TEN Cloud Store. Run this command from the base directory of the package you want to publish."
  }, {
    heading: "development-tools",
    content: "TEN Manager provides the following development tools."
  }, {
    heading: "ten-designer",
    content: "Use `tman designer` to start the TEN Designer visual development environment. This opens a browser-based interface for creating, editing, and managing TEN applications and extensions. See Use TEN Designer for details."
  }, {
    heading: "check-consistency",
    content: "Use `tman check` to validate various aspects of your TEN packages and configurations. This helps ensure your packages are properly configured before deployment."
  }, {
    heading: "usage-6",
    content: "The following commands are available:"
  }, {
    heading: "usage-6",
    content: "`manifest-json`: Validate manifest.json files against JSON schema"
  }, {
    heading: "usage-6",
    content: "`property-json`: Validate property.json files against JSON schema"
  }, {
    heading: "modify-framework-components",
    content: "Use `tman modify` to modify various components and configurations within the TEN Framework. This allows you to update existing configurations without manually editing files."
  }, {
    heading: "usage-7",
    content: "The following modify commands are available:"
  }, {
    heading: "usage-7",
    content: "`graph`: Modify predefined graphs in property.json files"
  }, {
    heading: "run-custom-scripts",
    content: "Use `tman run` to execute custom scripts defined in your package's manifest.json file. This allows you to run predefined build, start, test, or other custom commands for your TEN packages."
  }, {
    heading: "package-types",
    content: "The following package types are supported:"
  }, {
    heading: "package-types",
    content: "`app`: Main application containers"
  }, {
    heading: "package-types",
    content: "`extension`: Functional components that implement specific features"
  }, {
    heading: "package-types",
    content: "`protocol`: Communication protocol handlers"
  }, {
    heading: "package-types",
    content: "`system`: Core framework components"
  }, {
    heading: "package-types",
    content: "`addon_loader`: Specialized loaders for different programming languages"
  }, {
    heading: "common-options",
    content: "TEN Manager supports the following global options:"
  }, {
    heading: "common-options",
    content: "**`--verbose`** - Enable detailed output for debugging"
  }, {
    heading: "common-options",
    content: "**`-y, --yes`** - Automatically confirm all prompts"
  }, {
    heading: "common-options",
    content: "**`-c, --config-file <CONFIG_FILE>`** - Specify custom configuration file"
  }, {
    heading: "common-options",
    content: "**`--user-token <USER_TOKEN>`** - Provide authentication token"
  }, {
    heading: "common-options",
    content: "**`-h, --help`** - Display help information"
  }, {
    heading: "get-help",
    content: "Use the following options with `tman` to get help:"
  }, {
    heading: "get-help",
    content: "**`help`** - Display help information for each command"
  }, {
    heading: "get-help",
    content: "**`--version`** - Show version information and check for updates"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "set-up-ten-manager",
    content: "Set up TEN Manager"
  }, {
    id: "package-management",
    content: "Package management"
  }, {
    id: "create-packages",
    content: "Create packages"
  }, {
    id: "usage",
    content: "Usage"
  }, {
    id: "examples",
    content: "Examples"
  }, {
    id: "fetch-packages",
    content: "Fetch packages"
  }, {
    id: "usage-1",
    content: "Usage"
  }, {
    id: "examples-1",
    content: "Examples"
  }, {
    id: "uninstall-packages",
    content: "Uninstall packages"
  }, {
    id: "usage-2",
    content: "Usage"
  }, {
    id: "examples-2",
    content: "Examples"
  }, {
    id: "package-ten-components",
    content: "Package TEN components"
  }, {
    id: "usage-3",
    content: "Usage"
  }, {
    id: "examples-3",
    content: "Examples"
  }, {
    id: "publish-packages",
    content: "Publish packages"
  }, {
    id: "usage-4",
    content: "Usage"
  }, {
    id: "examples-4",
    content: "Examples"
  }, {
    id: "development-tools",
    content: "Development tools"
  }, {
    id: "ten-designer",
    content: "TEN designer"
  }, {
    id: "usage-5",
    content: "Usage"
  }, {
    id: "examples-5",
    content: "Examples"
  }, {
    id: "check-consistency",
    content: "Check consistency"
  }, {
    id: "usage-6",
    content: "Usage"
  }, {
    id: "examples-6",
    content: "Examples"
  }, {
    id: "modify-framework-components",
    content: "Modify framework components"
  }, {
    id: "usage-7",
    content: "Usage"
  }, {
    id: "run-custom-scripts",
    content: "Run custom scripts"
  }, {
    id: "usage-8",
    content: "Usage"
  }, {
    id: "examples-7",
    content: "Examples"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "package-types",
    content: "Package types"
  }, {
    id: "common-options",
    content: "Common options"
  }, {
    id: "get-help",
    content: "Get help"
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
  url: "#set-up-ten-manager",
  title: _jsx(_Fragment, {
    children: "Set up TEN Manager"
  })
}, {
  depth: 2,
  url: "#package-management",
  title: _jsx(_Fragment, {
    children: "Package management"
  })
}, {
  depth: 3,
  url: "#create-packages",
  title: _jsx(_Fragment, {
    children: "Create packages"
  })
}, {
  depth: 4,
  url: "#usage",
  title: _jsx(_Fragment, {
    children: "Usage"
  })
}, {
  depth: 4,
  url: "#examples",
  title: _jsx(_Fragment, {
    children: "Examples"
  })
}, {
  depth: 3,
  url: "#fetch-packages",
  title: _jsx(_Fragment, {
    children: "Fetch packages"
  })
}, {
  depth: 4,
  url: "#usage-1",
  title: _jsx(_Fragment, {
    children: "Usage"
  })
}, {
  depth: 4,
  url: "#examples-1",
  title: _jsx(_Fragment, {
    children: "Examples"
  })
}, {
  depth: 3,
  url: "#uninstall-packages",
  title: _jsx(_Fragment, {
    children: "Uninstall packages"
  })
}, {
  depth: 4,
  url: "#usage-2",
  title: _jsx(_Fragment, {
    children: "Usage"
  })
}, {
  depth: 4,
  url: "#examples-2",
  title: _jsx(_Fragment, {
    children: "Examples"
  })
}, {
  depth: 3,
  url: "#package-ten-components",
  title: _jsx(_Fragment, {
    children: "Package TEN components"
  })
}, {
  depth: 4,
  url: "#usage-3",
  title: _jsx(_Fragment, {
    children: "Usage"
  })
}, {
  depth: 4,
  url: "#examples-3",
  title: _jsx(_Fragment, {
    children: "Examples"
  })
}, {
  depth: 3,
  url: "#publish-packages",
  title: _jsx(_Fragment, {
    children: "Publish packages"
  })
}, {
  depth: 4,
  url: "#usage-4",
  title: _jsx(_Fragment, {
    children: "Usage"
  })
}, {
  depth: 4,
  url: "#examples-4",
  title: _jsx(_Fragment, {
    children: "Examples"
  })
}, {
  depth: 2,
  url: "#development-tools",
  title: _jsx(_Fragment, {
    children: "Development tools"
  })
}, {
  depth: 3,
  url: "#ten-designer",
  title: _jsx(_Fragment, {
    children: "TEN designer"
  })
}, {
  depth: 4,
  url: "#usage-5",
  title: _jsx(_Fragment, {
    children: "Usage"
  })
}, {
  depth: 4,
  url: "#examples-5",
  title: _jsx(_Fragment, {
    children: "Examples"
  })
}, {
  depth: 3,
  url: "#check-consistency",
  title: _jsx(_Fragment, {
    children: "Check consistency"
  })
}, {
  depth: 4,
  url: "#usage-6",
  title: _jsx(_Fragment, {
    children: "Usage"
  })
}, {
  depth: 4,
  url: "#examples-6",
  title: _jsx(_Fragment, {
    children: "Examples"
  })
}, {
  depth: 3,
  url: "#modify-framework-components",
  title: _jsx(_Fragment, {
    children: "Modify framework components"
  })
}, {
  depth: 4,
  url: "#usage-7",
  title: _jsx(_Fragment, {
    children: "Usage"
  })
}, {
  depth: 3,
  url: "#run-custom-scripts",
  title: _jsx(_Fragment, {
    children: "Run custom scripts"
  })
}, {
  depth: 4,
  url: "#usage-8",
  title: _jsx(_Fragment, {
    children: "Usage"
  })
}, {
  depth: 4,
  url: "#examples-7",
  title: _jsx(_Fragment, {
    children: "Examples"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#package-types",
  title: _jsx(_Fragment, {
    children: "Package types"
  })
}, {
  depth: 3,
  url: "#common-options",
  title: _jsx(_Fragment, {
    children: "Common options"
  })
}, {
  depth: 3,
  url: "#get-help",
  title: _jsx(_Fragment, {
    children: "Get help"
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
      children: "In the TEN ecosystem, almost everything is a component. A TEN app, a TEN extension, and a TEN protocol are all components. To help developers manage operations related to these components, the TEN Framework provides a tool called TEN Manager."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsx(_components.p, {
      children: "TEN Manager is the command-line package manager for the TEN Framework ecosystem. It provides essential tools for creating, installing, and managing TEN packages throughout your development workflow."
    }), `
`, _jsx(_components.p, {
      children: "TEN Manager provides the following key functionalities:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Package creation"
        }), ": Generate new apps, extensions, and protocol packages from templates"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Dependency management"
        }), ": Automatically resolve, fetch, and install required packages"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Cloud Store integration"
        }), ": Browse and install packages from the TEN Cloud Store"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Development tools"
        }), ": Launch the visual designer and run custom build scripts"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Validation"
        }), ": Check application graphs and package configurations for errors"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "TEN Manager handles the complexity of package dependencies and installations, allowing you to focus on building your applications rather than managing infrastructure."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "tman"
          }), " is the command-line abbreviation for TEN Manager."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "set-up-ten-manager",
      children: "Set up TEN Manager"
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
`]
    }), `
`, _jsx(_components.h2, {
      id: "package-management",
      children: "Package management"
    }), `
`, _jsx(_components.p, {
      children: "TEN Manager provides the following package management commands."
    }), `
`, _jsx(_components.h3, {
      id: "create-packages",
      children: "Create packages"
    }), `
`, _jsxs(_components.p, {
      children: ["Use ", _jsx(_components.code, {
        children: "tman create"
      }), " to generate new apps, extensions, protocols, and other package types using predefined templates. The command sets up proper directory structure, creates ", _jsx(_components.code, {
        children: "manifest.json"
      }), " and ", _jsx(_components.code, {
        children: "property.json"
      }), " configuration files, and provides template code to get you started quickly."]
    }), `
`, _jsx(_components.h4, {
      id: "usage",
      children: "Usage"
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
              children: "tman"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " create"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " [OPTIONS] --template "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "TEMPLATE"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "PACKAGE_TYPE"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "PACKAGE_NAME"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["See supported ", _jsx(_components.a, {
        href: "#package-types",
        children: "Package types"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "examples",
      children: "Examples"
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
              children: "# Create a new TEN application"
            })
          }), `
`, _jsxs(_components.span, {
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
              children: " create"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " app"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " my_app"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --template"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " default_app_python"
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
              children: "# Create a new extension"
            })
          }), `
`, _jsxs(_components.span, {
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
              children: " create"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " extension"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " my_extension"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --template"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " default_extension_go"
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
              children: "# Create a protocol package"
            })
          }), `
`, _jsxs(_components.span, {
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
              children: " create"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " protocol"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " my_protocol"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --template"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " custom_protocol"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "fetch-packages",
      children: "Fetch packages"
    }), `
`, _jsxs(_components.p, {
      children: ["Use ", _jsx(_components.code, {
        children: "tman fetch"
      }), " to download packages from the TEN Cloud Store registry. The command allows you to specify target directories and control extraction behavior."]
    }), `
`, _jsx(_components.h4, {
      id: "usage-1",
      children: "Usage"
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
              children: " fetch"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " [OPTIONS] "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "PACKAGE_TYPE"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "PACKAGE_NAME"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["See supported ", _jsx(_components.a, {
        href: "#package-types",
        children: "Package types"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "examples-1",
      children: "Examples"
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
              children: "# Fetch and extract an extension package"
            })
          }), `
`, _jsxs(_components.span, {
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
              children: " fetch"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " extension"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " speech_recognition"
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
              children: "# Fetch a specific version of an app"
            })
          }), `
`, _jsxs(_components.span, {
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
              children: " fetch"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " app"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ai_agent@1.2.0"
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
              children: "# Download package file only (no extraction) to specific directory"
            })
          }), `
`, _jsxs(_components.span, {
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
              children: " fetch"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " protocol"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " websocket"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --output-dir"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ./downloads"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --no-extract"
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
              children: "# Fetch system package for specific platform"
            })
          }), `
`, _jsxs(_components.span, {
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
              children: " fetch"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " system"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ten_runtime"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --os"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " linux"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --arch"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " x64"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "uninstall-packages",
      children: "Uninstall packages"
    }), `
`, _jsxs(_components.p, {
      children: ["Use ", _jsx(_components.code, {
        children: "tman uninstall"
      }), " to remove packages from your TEN application. This removes the package files and cleans up the local package directory structure."]
    }), `
`, _jsx(_components.h4, {
      id: "usage-2",
      children: "Usage"
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
              children: " uninstall"
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
              children: "PACKAGE_TYP"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "E"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
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
              children: "PACKAGE_NAM"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "E"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["See supported ", _jsx(_components.a, {
        href: "#package-types",
        children: "Package types"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "examples-2",
      children: "Examples"
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
              children: "# Uninstall an extension package"
            })
          }), `
`, _jsxs(_components.span, {
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
              children: " uninstall"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " extension"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " speech_recognition"
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
              children: "# Remove a protocol package"
            })
          }), `
`, _jsxs(_components.span, {
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
              children: " uninstall"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " protocol"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " websocket"
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
              children: "# Uninstall a system component"
            })
          }), `
`, _jsxs(_components.span, {
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
              children: " uninstall"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " system"
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
`, _jsx(_components.h3, {
      id: "package-ten-components",
      children: "Package TEN components"
    }), `
`, _jsxs(_components.p, {
      children: ["Use ", _jsx(_components.code, {
        children: "tman package"
      }), " to create distributable package files from your TEN packages. Run this command from the base directory of the package you want to distribute."]
    }), `
`, _jsx(_components.h4, {
      id: "usage-3",
      children: "Usage"
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
              children: " package"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " [OPTIONS]"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "examples-3",
      children: "Examples"
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
              children: "# Create a package file from current directory"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "cd"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " my_extension"
            })]
          }), `
`, _jsxs(_components.span, {
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
              children: " package"
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
              children: "# Create package file with custom output path"
            })
          }), `
`, _jsxs(_components.span, {
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
              children: " package"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --output-path"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ./dist/my_extension.zip"
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
              children: "# Package an app for distribution"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "cd"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " my_ten_app"
            })]
          }), `
`, _jsxs(_components.span, {
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
              children: " package"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --output-path"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ../releases/my_app_v1.0.zip"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "publish-packages",
      children: "Publish packages"
    }), `
`, _jsxs(_components.p, {
      children: ["Use ", _jsx(_components.code, {
        children: "tman publish"
      }), " to publish your TEN packages to the TEN Cloud Store. Run this command from the base directory of the package you want to publish."]
    }), `
`, _jsx(_components.h4, {
      id: "usage-4",
      children: "Usage"
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
              children: " publish"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "examples-4",
      children: "Examples"
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
              children: "# Publish an extension to the Cloud Store"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "cd"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " my_extension"
            })]
          }), `
`, _jsxs(_components.span, {
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
              children: " publish"
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
              children: "# Publish an app package"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "cd"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " my_ten_app"
            })]
          }), `
`, _jsxs(_components.span, {
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
              children: " publish"
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
              children: "# Publish a protocol package"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "cd"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " my_custom_protocol"
            })]
          }), `
`, _jsxs(_components.span, {
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
              children: " publish"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "development-tools",
      children: "Development tools"
    }), `
`, _jsx(_components.p, {
      children: "TEN Manager provides the following development tools."
    }), `
`, _jsx(_components.h3, {
      id: "ten-designer",
      children: "TEN designer"
    }), `
`, _jsxs(_components.p, {
      children: ["Use ", _jsx(_components.code, {
        children: "tman designer"
      }), " to start the TEN Designer visual development environment. This opens a browser-based interface for creating, editing, and managing TEN applications and extensions. See ", _jsx(_components.a, {
        href: "./use-ten-designer",
        children: "Use TEN Designer"
      }), " for details."]
    }), `
`, _jsx(_components.h4, {
      id: "usage-5",
      children: "Usage"
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
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " [OPTIONS]"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "examples-5",
      children: "Examples"
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
              children: "# Launch designer with default settings"
            })
          }), `
`, _jsxs(_components.span, {
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
              children: "# Launch on a specific port"
            })
          }), `
`, _jsxs(_components.span, {
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
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --port"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 8080"
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
              children: "# Launch with custom IP and port"
            })
          }), `
`, _jsxs(_components.span, {
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
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --ip"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 127.0.0.1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --port"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 3000"
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
              children: "# Launch from a specific app directory"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "cd"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " my_ten_app"
            })]
          }), `
`, _jsxs(_components.span, {
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
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --base-dir"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ."
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "check-consistency",
      children: "Check consistency"
    }), `
`, _jsxs(_components.p, {
      children: ["Use ", _jsx(_components.code, {
        children: "tman check"
      }), " to validate various aspects of your TEN packages and configurations. This helps ensure your packages are properly configured before deployment."]
    }), `
`, _jsx(_components.h4, {
      id: "usage-6",
      children: "Usage"
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
              children: " check"
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
              children: "COMMAN"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "D"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "The following commands are available:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "manifest-json"
        }), ": Validate manifest.json files against JSON schema"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "property-json"
        }), ": Validate property.json files against JSON schema"]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "examples-6",
      children: "Examples"
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
              children: "# Check manifest.json validity"
            })
          }), `
`, _jsxs(_components.span, {
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
              children: " check"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " manifest-json"
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
              children: "# Check property.json validity"
            })
          }), `
`, _jsxs(_components.span, {
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
              children: " check"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " property-json"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "modify-framework-components",
      children: "Modify framework components"
    }), `
`, _jsxs(_components.p, {
      children: ["Use ", _jsx(_components.code, {
        children: "tman modify"
      }), " to modify various components and configurations within the TEN Framework. This allows you to update existing configurations without manually editing files."]
    }), `
`, _jsx(_components.h4, {
      id: "usage-7",
      children: "Usage"
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
              children: " modify"
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
              children: "COMMAN"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "D"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "The following modify commands are available:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "graph"
        }), ": Modify predefined graphs in property.json files"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "run-custom-scripts",
      children: "Run custom scripts"
    }), `
`, _jsxs(_components.p, {
      children: ["Use ", _jsx(_components.code, {
        children: "tman run"
      }), " to execute custom scripts defined in your package's manifest.json file. This allows you to run predefined build, start, test, or other custom commands for your TEN packages."]
    }), `
`, _jsx(_components.h4, {
      id: "usage-8",
      children: "Usage"
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
              children: " run"
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
              children: "SCRIPT_NAM"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "E"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " [-- "
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
              children: "EXTRA_ARG"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "S"
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
              children: "]"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "examples-7",
      children: "Examples"
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
              children: "# Run the start script"
            })
          }), `
`, _jsxs(_components.span, {
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
              children: " run"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " start"
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
              children: "# Run the build script"
            })
          }), `
`, _jsxs(_components.span, {
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
              children: " run"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " build"
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
              children: "# Run a custom script with additional arguments"
            })
          }), `
`, _jsxs(_components.span, {
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
              children: " run"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " test"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --verbose"
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
              children: "# Run stop script"
            })
          }), `
`, _jsxs(_components.span, {
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
              children: " run"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " stop"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.h3, {
      id: "package-types",
      children: "Package types"
    }), `
`, _jsx(_components.p, {
      children: "The following package types are supported:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "app"
        }), ": Main application containers"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "extension"
        }), ": Functional components that implement specific features"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "protocol"
        }), ": Communication protocol handlers"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "system"
        }), ": Core framework components"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "addon_loader"
        }), ": Specialized loaders for different programming languages"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "common-options",
      children: "Common options"
    }), `
`, _jsx(_components.p, {
      children: "TEN Manager supports the following global options:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: _jsx(_components.code, {
            children: "--verbose"
          })
        }), " - Enable detailed output for debugging"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: _jsx(_components.code, {
            children: "-y, --yes"
          })
        }), " - Automatically confirm all prompts"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: _jsx(_components.code, {
            children: "-c, --config-file <CONFIG_FILE>"
          })
        }), " - Specify custom configuration file"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: _jsx(_components.code, {
            children: "--user-token <USER_TOKEN>"
          })
        }), " - Provide authentication token"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: _jsx(_components.code, {
            children: "-h, --help"
          })
        }), " - Display help information"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "get-help",
      children: "Get help"
    }), `
`, _jsxs(_components.p, {
      children: ["Use the following options with ", _jsx(_components.code, {
        children: "tman"
      }), " to get help:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: _jsx(_components.code, {
            children: "help"
          })
        }), " - Display help information for each command"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: _jsx(_components.code, {
            children: "--version"
          })
        }), " - Show version information and check for updates"]
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
