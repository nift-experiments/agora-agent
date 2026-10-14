import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Supported platforms",
  description: "The platforms supported by this product."
};
export let _markdown = `

This section lists the platforms and products you use to develop apps that interact with Agora SDRTN®.

* *Platforms*:

  | Target Platform | Operating system version                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | IDE version |
  | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
  | Linux           | <ul><li>x86\\_64: gcc 2.6.35 or higher.</li><li>ARM:<ul><li>arm-linux-gnueabi 4.4.x or higher</li><li>arm-linux-gnueabihf 4.8.x or higher</li><li>aarch64-linux-gnu 4.8.x or higher</li><li>arm-linux-musleabihf 5.2.x or higher</li><li>arm-linux-musleabi 5.5.x or higher</li><li>aarch64-linux-musl 5.5.x or higher</li><li>arm-linux-uclibceabi 4.4.x or higher</li><li>arm-linux-uclibceabihf 4.8.x or higher</li></ul></li><li>MIPS: mips-linux-uclibceabihf 4.7.x or higher.</li></ul> | -           |
  | HarmonyOS       | ARM: armv7a-harmony-eabi.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | -           |
  | LiteOS          | ARM: arm-liteos-eabi, LiteOS 2.0 or higher.                                                                                                                                                                                                                                                                                                                                                                                                                                                  | -           |

For a full list of downloadable SDK packages by architecture, C library, and float ABI, see [Resources](/en/realtime-media/iot/reference/resources).

If your target platform isn't listed, see [Agora Open Source Layer (AOSL)](https://github.com/AgoraIO-Community/aosl). AOSL provides a lightweight platform abstraction layer for common operations such as threads, I/O, logging, memory, files, sockets, time, and atomic operations. It helps isolate platform-specific code and simplify SDK integration on custom embedded platforms. AOSL doesn't automatically add support for every chipset or operating system: you may need to implement and validate the required platform layer for your target device.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This section lists the platforms and products you use to develop apps that interact with Agora SDRTN®."
  }, {
    heading: undefined,
    content: "*Platforms*:"
  }, {
    heading: undefined,
    content: "Target Platform"
  }, {
    heading: undefined,
    content: "Operating system version"
  }, {
    heading: undefined,
    content: "IDE version"
  }, {
    heading: undefined,
    content: "Linux"
  }, {
    heading: undefined,
    content: "x86\\_64: gcc 2.6.35 or higher.ARM\\:arm-linux-gnueabi 4.4.x or higherarm-linux-gnueabihf 4.8.x or higheraarch64-linux-gnu 4.8.x or higherarm-linux-musleabihf 5.2.x or higherarm-linux-musleabi 5.5.x or higheraarch64-linux-musl 5.5.x or higherarm-linux-uclibceabi 4.4.x or higherarm-linux-uclibceabihf 4.8.x or higherMIPS: mips-linux-uclibceabihf 4.7.x or higher."
  }, {
    heading: undefined,
    content: "-"
  }, {
    heading: undefined,
    content: "HarmonyOS"
  }, {
    heading: undefined,
    content: "ARM: armv7a-harmony-eabi."
  }, {
    heading: undefined,
    content: "-"
  }, {
    heading: undefined,
    content: "LiteOS"
  }, {
    heading: undefined,
    content: "ARM: arm-liteos-eabi, LiteOS 2.0 or higher."
  }, {
    heading: undefined,
    content: "-"
  }, {
    heading: undefined,
    content: "For a full list of downloadable SDK packages by architecture, C library, and float ABI, see Resources."
  }, {
    heading: undefined,
    content: "If your target platform isn't listed, see Agora Open Source Layer (AOSL). AOSL provides a lightweight platform abstraction layer for common operations such as threads, I/O, logging, memory, files, sockets, time, and atomic operations. It helps isolate platform-specific code and simplify SDK integration on custom embedded platforms. AOSL doesn't automatically add support for every chipset or operating system: you may need to implement and validate the required platform layer for your target device."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
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
      children: "This section lists the platforms and products you use to develop apps that interact with Agora SDRTN®."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.em, {
            children: "Platforms"
          }), ":"]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Target Platform"
              }), _jsx(_components.th, {
                children: "Operating system version"
              }), _jsx(_components.th, {
                children: "IDE version"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Linux"
              }), _jsx(_components.td, {
                children: _jsxs("ul", {
                  children: [_jsx("li", {
                    children: "x86_64: gcc 2.6.35 or higher."
                  }), _jsxs("li", {
                    children: ["ARM:", _jsxs("ul", {
                      children: [_jsx("li", {
                        children: "arm-linux-gnueabi 4.4.x or higher"
                      }), _jsx("li", {
                        children: "arm-linux-gnueabihf 4.8.x or higher"
                      }), _jsx("li", {
                        children: "aarch64-linux-gnu 4.8.x or higher"
                      }), _jsx("li", {
                        children: "arm-linux-musleabihf 5.2.x or higher"
                      }), _jsx("li", {
                        children: "arm-linux-musleabi 5.5.x or higher"
                      }), _jsx("li", {
                        children: "aarch64-linux-musl 5.5.x or higher"
                      }), _jsx("li", {
                        children: "arm-linux-uclibceabi 4.4.x or higher"
                      }), _jsx("li", {
                        children: "arm-linux-uclibceabihf 4.8.x or higher"
                      })]
                    })]
                  }), _jsx("li", {
                    children: "MIPS: mips-linux-uclibceabihf 4.7.x or higher."
                  })]
                })
              }), _jsx(_components.td, {
                children: "-"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "HarmonyOS"
              }), _jsx(_components.td, {
                children: "ARM: armv7a-harmony-eabi."
              }), _jsx(_components.td, {
                children: "-"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "LiteOS"
              }), _jsx(_components.td, {
                children: "ARM: arm-liteos-eabi, LiteOS 2.0 or higher."
              }), _jsx(_components.td, {
                children: "-"
              })]
            })]
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["For a full list of downloadable SDK packages by architecture, C library, and float ABI, see ", _jsx(_components.a, {
        href: "/en/realtime-media/iot/reference/resources",
        children: "Resources"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["If your target platform isn't listed, see ", _jsx(_components.a, {
        href: "https://github.com/AgoraIO-Community/aosl",
        children: "Agora Open Source Layer (AOSL)"
      }), ". AOSL provides a lightweight platform abstraction layer for common operations such as threads, I/O, logging, memory, files, sockets, time, and atomic operations. It helps isolate platform-specific code and simplify SDK integration on custom embedded platforms. AOSL doesn't automatically add support for every chipset or operating system: you may need to implement and validate the required platform layer for your target device."]
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
