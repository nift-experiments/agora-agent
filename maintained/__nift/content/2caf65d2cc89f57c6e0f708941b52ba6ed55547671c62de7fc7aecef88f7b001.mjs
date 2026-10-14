import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "TEN Cloud Store",
  description: "Browse and download TEN packages from the cloud store to accelerate application development."
};
export let _markdown = `

The TEN Cloud Store is a centralized repository for TEN packages, similar to Google Play Store or Apple App Store. It provides a curated collection of extensions, apps, and system components that you can download directly into your TEN applications to accelerate development and add functionality.

## Available package types [#available-package-types]

The TEN Cloud Store offers the following types of packages for download:

* **App**: Complete TEN applications ready for deployment
* **Extension Group**: Collections of related extensions that work together
* **Extension**: Individual components that add specific functionality
* **System**: Core framework components and runtime services
* **Protocol**: Communication protocols for inter-extension messaging

## Package information [#package-information]

The cloud store maintains detailed metadata for each TEN package to ensure proper dependency resolution and version management:

* **Package type**: Identifies the category of package: \`extension\`, \`app\`, \`extension_group\`, \`protocol\`, or \`system\`.

* **Package name**: Unique identifier for the package, such as \`builtin_extension\` or \`audio_processor\`.

* **Package version**: Version number following [semantic versioning (semver)](https://semver.org/) standards, such as \`3.0.0\`.

* **Dependencies**: Array of required packages with their version constraints:
  * **Type**: Package category matching the supported types above
  * **Name**: Exact package identifier
  * **Version**: Version requirement using semver syntax, such as \`~3.0.0\` or \`^2.1.0\`

This structured metadata enables automatic dependency resolution and ensures compatibility when integrating packages into your TEN applications.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The TEN Cloud Store is a centralized repository for TEN packages, similar to Google Play Store or Apple App Store. It provides a curated collection of extensions, apps, and system components that you can download directly into your TEN applications to accelerate development and add functionality."
  }, {
    heading: "available-package-types",
    content: "The TEN Cloud Store offers the following types of packages for download:"
  }, {
    heading: "available-package-types",
    content: "**App**: Complete TEN applications ready for deployment"
  }, {
    heading: "available-package-types",
    content: "**Extension Group**: Collections of related extensions that work together"
  }, {
    heading: "available-package-types",
    content: "**Extension**: Individual components that add specific functionality"
  }, {
    heading: "available-package-types",
    content: "**System**: Core framework components and runtime services"
  }, {
    heading: "available-package-types",
    content: "**Protocol**: Communication protocols for inter-extension messaging"
  }, {
    heading: "package-information",
    content: "The cloud store maintains detailed metadata for each TEN package to ensure proper dependency resolution and version management:"
  }, {
    heading: "package-information",
    content: "**Package type**: Identifies the category of package: `extension`, `app`, `extension_group`, `protocol`, or `system`."
  }, {
    heading: "package-information",
    content: "**Package name**: Unique identifier for the package, such as `builtin_extension` or `audio_processor`."
  }, {
    heading: "package-information",
    content: "**Package version**: Version number following semantic versioning (semver) standards, such as `3.0.0`."
  }, {
    heading: "package-information",
    content: "**Dependencies**: Array of required packages with their version constraints:"
  }, {
    heading: "package-information",
    content: "**Type**: Package category matching the supported types above"
  }, {
    heading: "package-information",
    content: "**Name**: Exact package identifier"
  }, {
    heading: "package-information",
    content: "**Version**: Version requirement using semver syntax, such as `~3.0.0` or `^2.1.0`"
  }, {
    heading: "package-information",
    content: "This structured metadata enables automatic dependency resolution and ensures compatibility when integrating packages into your TEN applications."
  }],
  headings: [{
    id: "available-package-types",
    content: "Available package types"
  }, {
    id: "package-information",
    content: "Package information"
  }]
};
export let toc = [{
  depth: 2,
  url: "#available-package-types",
  title: _jsx(_Fragment, {
    children: "Available package types"
  })
}, {
  depth: 2,
  url: "#package-information",
  title: _jsx(_Fragment, {
    children: "Package information"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The TEN Cloud Store is a centralized repository for TEN packages, similar to Google Play Store or Apple App Store. It provides a curated collection of extensions, apps, and system components that you can download directly into your TEN applications to accelerate development and add functionality."
    }), `
`, _jsx(_components.h2, {
      id: "available-package-types",
      children: "Available package types"
    }), `
`, _jsx(_components.p, {
      children: "The TEN Cloud Store offers the following types of packages for download:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "App"
        }), ": Complete TEN applications ready for deployment"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Extension Group"
        }), ": Collections of related extensions that work together"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Extension"
        }), ": Individual components that add specific functionality"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "System"
        }), ": Core framework components and runtime services"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Protocol"
        }), ": Communication protocols for inter-extension messaging"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "package-information",
      children: "Package information"
    }), `
`, _jsx(_components.p, {
      children: "The cloud store maintains detailed metadata for each TEN package to ensure proper dependency resolution and version management:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Package type"
          }), ": Identifies the category of package: ", _jsx(_components.code, {
            children: "extension"
          }), ", ", _jsx(_components.code, {
            children: "app"
          }), ", ", _jsx(_components.code, {
            children: "extension_group"
          }), ", ", _jsx(_components.code, {
            children: "protocol"
          }), ", or ", _jsx(_components.code, {
            children: "system"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Package name"
          }), ": Unique identifier for the package, such as ", _jsx(_components.code, {
            children: "builtin_extension"
          }), " or ", _jsx(_components.code, {
            children: "audio_processor"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Package version"
          }), ": Version number following ", _jsx(_components.a, {
            href: "https://semver.org/",
            children: "semantic versioning (semver)"
          }), " standards, such as ", _jsx(_components.code, {
            children: "3.0.0"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Dependencies"
          }), ": Array of required packages with their version constraints:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Type"
            }), ": Package category matching the supported types above"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Name"
            }), ": Exact package identifier"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Version"
            }), ": Version requirement using semver syntax, such as ", _jsx(_components.code, {
              children: "~3.0.0"
            }), " or ", _jsx(_components.code, {
              children: "^2.1.0"
            })]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "This structured metadata enables automatic dependency resolution and ensures compatibility when integrating packages into your TEN applications."
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
