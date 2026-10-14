import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Resources",
  description: "Choose the SDK package that matches your device's architecture, OS, and C library."
};
export let _markdown = `

Agora publishes a separate Linux C SDK package for each combination of processor architecture, C library, and float ABI. Use this page to identify the package that matches your device before you download the SDK.

## Package naming convention [#package-naming-convention]

Each package name follows the pattern \`<architecture>-<OS>-<C library><float type>\`. For example:

* \`aarch64-linux-gnu\`: ARMv8 architecture, Linux, glibc, soft-float
* \`armv7a-linux-uclibceabihf\`: ARMv7 architecture, Linux, uClibc, hard-float

A package name ending in \`hf\` uses hard-float; all other packages use soft-float.

## Available packages [#available-packages]

| Package                     | Architecture | C library           |
| --------------------------- | ------------ | ------------------- |
| \`x86_64-linux-gnu\`          | x86-64       | glibc               |
| \`aarch64-linux-gnu\`         | ARMv8        | glibc               |
| \`aarch64-linux-musl\`        | ARMv8        | musl                |
| \`armv7a-linux-gnueabihf\`    | ARMv7        | glibc (hard-float)  |
| \`armv7a-linux-gnueabi\`      | ARMv7        | glibc (soft-float)  |
| \`armv7a-linux-uclibceabihf\` | ARMv7        | uClibc (hard-float) |
| \`armv7a-linux-uclibceabi\`   | ARMv7        | uClibc (soft-float) |
| \`armv7a-linux-musleabihf\`   | ARMv7        | musl (hard-float)   |
| \`armv7a-linux-musleabi\`     | ARMv7        | musl (soft-float)   |
| \`armv6-linux-gnueabihf\`     | ARMv6        | glibc (hard-float)  |
| \`armv6-linux-uclibceabi\`    | ARMv6        | uClibc (soft-float) |
| \`armv5-linux-gnueabi\`       | ARMv5        | glibc               |
| \`armv5-linux-uclibceabi\`    | ARMv5        | uClibc              |
| \`mipsel-linux-gnueabihf\`    | MIPS         | glibc (hard-float)  |
| \`mipsel-linux-uclibceabihf\` | MIPS         | uClibc (hard-float) |
| \`mipsel-linux-uclibceabi\`   | MIPS         | uClibc (soft-float) |
| \`arm-liteos-eabi\`           | ARM          | LiteOS              |
| \`armv7a-harmony-eabi\`       | ARMv7        | HarmonyOS           |

If your target architecture is not listed, contact [sales@agora.io](mailto\\:sales@agora.io) for a custom platform build.

## Download the SDK [#download-the-sdk]

For download links to the latest SDK build for your platform and architecture, see [SDK downloads](/en/api-reference/sdks?platform=linux).

## Related pages [#related-pages]

* [Quickstart](/en/realtime-media/iot/quickstart)
* [Build from scratch](/en/realtime-media/iot/build-from-scratch)
* [Supported platforms](/en/realtime-media/iot/reference/supported-platforms)
* [License](/en/realtime-media/iot/build/authenticate-and-secure-channels/license)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora publishes a separate Linux C SDK package for each combination of processor architecture, C library, and float ABI. Use this page to identify the package that matches your device before you download the SDK."
  }, {
    heading: "package-naming-convention",
    content: "Each package name follows the pattern `<architecture>-<OS>-<C library><float type>`. For example:"
  }, {
    heading: "package-naming-convention",
    content: "`aarch64-linux-gnu`: ARMv8 architecture, Linux, glibc, soft-float"
  }, {
    heading: "package-naming-convention",
    content: "`armv7a-linux-uclibceabihf`: ARMv7 architecture, Linux, uClibc, hard-float"
  }, {
    heading: "package-naming-convention",
    content: "A package name ending in `hf` uses hard-float; all other packages use soft-float."
  }, {
    heading: "available-packages",
    content: "Package"
  }, {
    heading: "available-packages",
    content: "Architecture"
  }, {
    heading: "available-packages",
    content: "C library"
  }, {
    heading: "available-packages",
    content: "`x86_64-linux-gnu`"
  }, {
    heading: "available-packages",
    content: "x86-64"
  }, {
    heading: "available-packages",
    content: "glibc"
  }, {
    heading: "available-packages",
    content: "`aarch64-linux-gnu`"
  }, {
    heading: "available-packages",
    content: "ARMv8"
  }, {
    heading: "available-packages",
    content: "glibc"
  }, {
    heading: "available-packages",
    content: "`aarch64-linux-musl`"
  }, {
    heading: "available-packages",
    content: "ARMv8"
  }, {
    heading: "available-packages",
    content: "musl"
  }, {
    heading: "available-packages",
    content: "`armv7a-linux-gnueabihf`"
  }, {
    heading: "available-packages",
    content: "ARMv7"
  }, {
    heading: "available-packages",
    content: "glibc (hard-float)"
  }, {
    heading: "available-packages",
    content: "`armv7a-linux-gnueabi`"
  }, {
    heading: "available-packages",
    content: "ARMv7"
  }, {
    heading: "available-packages",
    content: "glibc (soft-float)"
  }, {
    heading: "available-packages",
    content: "`armv7a-linux-uclibceabihf`"
  }, {
    heading: "available-packages",
    content: "ARMv7"
  }, {
    heading: "available-packages",
    content: "uClibc (hard-float)"
  }, {
    heading: "available-packages",
    content: "`armv7a-linux-uclibceabi`"
  }, {
    heading: "available-packages",
    content: "ARMv7"
  }, {
    heading: "available-packages",
    content: "uClibc (soft-float)"
  }, {
    heading: "available-packages",
    content: "`armv7a-linux-musleabihf`"
  }, {
    heading: "available-packages",
    content: "ARMv7"
  }, {
    heading: "available-packages",
    content: "musl (hard-float)"
  }, {
    heading: "available-packages",
    content: "`armv7a-linux-musleabi`"
  }, {
    heading: "available-packages",
    content: "ARMv7"
  }, {
    heading: "available-packages",
    content: "musl (soft-float)"
  }, {
    heading: "available-packages",
    content: "`armv6-linux-gnueabihf`"
  }, {
    heading: "available-packages",
    content: "ARMv6"
  }, {
    heading: "available-packages",
    content: "glibc (hard-float)"
  }, {
    heading: "available-packages",
    content: "`armv6-linux-uclibceabi`"
  }, {
    heading: "available-packages",
    content: "ARMv6"
  }, {
    heading: "available-packages",
    content: "uClibc (soft-float)"
  }, {
    heading: "available-packages",
    content: "`armv5-linux-gnueabi`"
  }, {
    heading: "available-packages",
    content: "ARMv5"
  }, {
    heading: "available-packages",
    content: "glibc"
  }, {
    heading: "available-packages",
    content: "`armv5-linux-uclibceabi`"
  }, {
    heading: "available-packages",
    content: "ARMv5"
  }, {
    heading: "available-packages",
    content: "uClibc"
  }, {
    heading: "available-packages",
    content: "`mipsel-linux-gnueabihf`"
  }, {
    heading: "available-packages",
    content: "MIPS"
  }, {
    heading: "available-packages",
    content: "glibc (hard-float)"
  }, {
    heading: "available-packages",
    content: "`mipsel-linux-uclibceabihf`"
  }, {
    heading: "available-packages",
    content: "MIPS"
  }, {
    heading: "available-packages",
    content: "uClibc (hard-float)"
  }, {
    heading: "available-packages",
    content: "`mipsel-linux-uclibceabi`"
  }, {
    heading: "available-packages",
    content: "MIPS"
  }, {
    heading: "available-packages",
    content: "uClibc (soft-float)"
  }, {
    heading: "available-packages",
    content: "`arm-liteos-eabi`"
  }, {
    heading: "available-packages",
    content: "ARM"
  }, {
    heading: "available-packages",
    content: "LiteOS"
  }, {
    heading: "available-packages",
    content: "`armv7a-harmony-eabi`"
  }, {
    heading: "available-packages",
    content: "ARMv7"
  }, {
    heading: "available-packages",
    content: "HarmonyOS"
  }, {
    heading: "available-packages",
    content: "If your target architecture is not listed, contact sales\\@agora.io for a custom platform build."
  }, {
    heading: "download-the-sdk",
    content: "For download links to the latest SDK build for your platform and architecture, see SDK downloads."
  }, {
    heading: "related-pages",
    content: "Quickstart"
  }, {
    heading: "related-pages",
    content: "Build from scratch"
  }, {
    heading: "related-pages",
    content: "Supported platforms"
  }, {
    heading: "related-pages",
    content: "License"
  }],
  headings: [{
    id: "package-naming-convention",
    content: "Package naming convention"
  }, {
    id: "available-packages",
    content: "Available packages"
  }, {
    id: "download-the-sdk",
    content: "Download the SDK"
  }, {
    id: "related-pages",
    content: "Related pages"
  }]
};
export let toc = [{
  depth: 2,
  url: "#package-naming-convention",
  title: _jsx(_Fragment, {
    children: "Package naming convention"
  })
}, {
  depth: 2,
  url: "#available-packages",
  title: _jsx(_Fragment, {
    children: "Available packages"
  })
}, {
  depth: 2,
  url: "#download-the-sdk",
  title: _jsx(_Fragment, {
    children: "Download the SDK"
  })
}, {
  depth: 2,
  url: "#related-pages",
  title: _jsx(_Fragment, {
    children: "Related pages"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
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
      children: "Agora publishes a separate Linux C SDK package for each combination of processor architecture, C library, and float ABI. Use this page to identify the package that matches your device before you download the SDK."
    }), `
`, _jsx(_components.h2, {
      id: "package-naming-convention",
      children: "Package naming convention"
    }), `
`, _jsxs(_components.p, {
      children: ["Each package name follows the pattern ", _jsx(_components.code, {
        children: "<architecture>-<OS>-<C library><float type>"
      }), ". For example:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "aarch64-linux-gnu"
        }), ": ARMv8 architecture, Linux, glibc, soft-float"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "armv7a-linux-uclibceabihf"
        }), ": ARMv7 architecture, Linux, uClibc, hard-float"]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["A package name ending in ", _jsx(_components.code, {
        children: "hf"
      }), " uses hard-float; all other packages use soft-float."]
    }), `
`, _jsx(_components.h2, {
      id: "available-packages",
      children: "Available packages"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Package"
          }), _jsx(_components.th, {
            children: "Architecture"
          }), _jsx(_components.th, {
            children: "C library"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "x86_64-linux-gnu"
            })
          }), _jsx(_components.td, {
            children: "x86-64"
          }), _jsx(_components.td, {
            children: "glibc"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "aarch64-linux-gnu"
            })
          }), _jsx(_components.td, {
            children: "ARMv8"
          }), _jsx(_components.td, {
            children: "glibc"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "aarch64-linux-musl"
            })
          }), _jsx(_components.td, {
            children: "ARMv8"
          }), _jsx(_components.td, {
            children: "musl"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "armv7a-linux-gnueabihf"
            })
          }), _jsx(_components.td, {
            children: "ARMv7"
          }), _jsx(_components.td, {
            children: "glibc (hard-float)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "armv7a-linux-gnueabi"
            })
          }), _jsx(_components.td, {
            children: "ARMv7"
          }), _jsx(_components.td, {
            children: "glibc (soft-float)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "armv7a-linux-uclibceabihf"
            })
          }), _jsx(_components.td, {
            children: "ARMv7"
          }), _jsx(_components.td, {
            children: "uClibc (hard-float)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "armv7a-linux-uclibceabi"
            })
          }), _jsx(_components.td, {
            children: "ARMv7"
          }), _jsx(_components.td, {
            children: "uClibc (soft-float)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "armv7a-linux-musleabihf"
            })
          }), _jsx(_components.td, {
            children: "ARMv7"
          }), _jsx(_components.td, {
            children: "musl (hard-float)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "armv7a-linux-musleabi"
            })
          }), _jsx(_components.td, {
            children: "ARMv7"
          }), _jsx(_components.td, {
            children: "musl (soft-float)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "armv6-linux-gnueabihf"
            })
          }), _jsx(_components.td, {
            children: "ARMv6"
          }), _jsx(_components.td, {
            children: "glibc (hard-float)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "armv6-linux-uclibceabi"
            })
          }), _jsx(_components.td, {
            children: "ARMv6"
          }), _jsx(_components.td, {
            children: "uClibc (soft-float)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "armv5-linux-gnueabi"
            })
          }), _jsx(_components.td, {
            children: "ARMv5"
          }), _jsx(_components.td, {
            children: "glibc"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "armv5-linux-uclibceabi"
            })
          }), _jsx(_components.td, {
            children: "ARMv5"
          }), _jsx(_components.td, {
            children: "uClibc"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "mipsel-linux-gnueabihf"
            })
          }), _jsx(_components.td, {
            children: "MIPS"
          }), _jsx(_components.td, {
            children: "glibc (hard-float)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "mipsel-linux-uclibceabihf"
            })
          }), _jsx(_components.td, {
            children: "MIPS"
          }), _jsx(_components.td, {
            children: "uClibc (hard-float)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "mipsel-linux-uclibceabi"
            })
          }), _jsx(_components.td, {
            children: "MIPS"
          }), _jsx(_components.td, {
            children: "uClibc (soft-float)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "arm-liteos-eabi"
            })
          }), _jsx(_components.td, {
            children: "ARM"
          }), _jsx(_components.td, {
            children: "LiteOS"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "armv7a-harmony-eabi"
            })
          }), _jsx(_components.td, {
            children: "ARMv7"
          }), _jsx(_components.td, {
            children: "HarmonyOS"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["If your target architecture is not listed, contact ", _jsx(_components.a, {
        href: "mailto:sales@agora.io",
        children: "sales@agora.io"
      }), " for a custom platform build."]
    }), `
`, _jsx(_components.h2, {
      id: "download-the-sdk",
      children: "Download the SDK"
    }), `
`, _jsxs(_components.p, {
      children: ["For download links to the latest SDK build for your platform and architecture, see ", _jsx(_components.a, {
        href: "/en/api-reference/sdks?platform=linux",
        children: "SDK downloads"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "related-pages",
      children: "Related pages"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/iot/quickstart",
          children: "Quickstart"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/iot/build-from-scratch",
          children: "Build from scratch"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/iot/reference/supported-platforms",
          children: "Supported platforms"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/iot/build/authenticate-and-secure-channels/license",
          children: "License"
        })
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
