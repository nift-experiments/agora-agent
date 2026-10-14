import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why are dynamic libraries preferred over static libraries in the RTC SDK?"
};
export let _markdown = `

Static libraries and Dynamic Link Libraries (DLL) are both used for organizing and sharing code in programming. In earlier versions, the RTC SDK utilized static libraries on certain platforms. However, there are several drawbacks associated with static libraries:

1. **Compilation Conflicts**: Static libraries can lead to symbol conflicts with third-party libraries used by your application. For instance, if your app and the Agora SDK both utilize the same \`ffmpeg\` library, conflicts may arise during compilation, resulting in build failures.

2. **Compatibility Issues**: Inconsistent versions of third-party libraries between your application and the RTC SDK may lead to compatibility issues and app crashes.

3. **Compliance Concerns**: The RTC SDK incorporates open-source protocol libraries like \`ffmpeg\`. Distributing the SDK as a static library extends the open-source agreement to your application, potentially necessitating that your app also be open-source. To comply with open-source protocol specifications, dynamic libraries are preferred.

To address these challenges and align with industry trends favoring dynamic libraries in the Real-Time Communication sector, the RTC SDK platform now exclusively provides dynamic libraries.

## Reference [#reference]

The following table summarizes the differences between static and dynamic libraries:

| Feature                     | Static Library                                                                                                                                      | Dynamic Library                                                                                                                                           |
| :-------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Link timing**             | At compile time. The library code and the program code are merged together to form an independent executable file.                                  | The library code is not merged into the executable at compile time, but is loaded dynamically at runtime.                                                 |
| **Space occupied**          | Increases the size of the executable file because the library's code is completely merged into the executable file, thus taking up more disk space. | The size of the executable file is relatively small because it only contains references to dynamic libraries and not the actual code, saving disk space.  |
| **Operating efficiency**    | The library is linked to the executable at compile time, so no extra loading step is required at runtime and the program may start faster.          | Dynamic loading is required at runtime. The operating system loads the dynamic library into memory when the program starts or when the library is needed. |
| **Updates and maintenance** | After the library is updated, the program needs to be recompiled to use the new version of the library.                                             | After the library is updated, only the dynamic library files need to be updated without recompiling.                                                      |
| **Reusability**             | The code is statically copied, so each program that uses the library has its own copy of the library.                                               | Multiple programs can share an instance of the same dynamic library because there is only one copy of the dynamic library in memory.                      |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Static libraries and Dynamic Link Libraries (DLL) are both used for organizing and sharing code in programming. In earlier versions, the RTC SDK utilized static libraries on certain platforms. However, there are several drawbacks associated with static libraries:"
  }, {
    heading: undefined,
    content: "**Compilation Conflicts**: Static libraries can lead to symbol conflicts with third-party libraries used by your application. For instance, if your app and the Agora SDK both utilize the same `ffmpeg` library, conflicts may arise during compilation, resulting in build failures."
  }, {
    heading: undefined,
    content: "**Compatibility Issues**: Inconsistent versions of third-party libraries between your application and the RTC SDK may lead to compatibility issues and app crashes."
  }, {
    heading: undefined,
    content: "**Compliance Concerns**: The RTC SDK incorporates open-source protocol libraries like `ffmpeg`. Distributing the SDK as a static library extends the open-source agreement to your application, potentially necessitating that your app also be open-source. To comply with open-source protocol specifications, dynamic libraries are preferred."
  }, {
    heading: undefined,
    content: "To address these challenges and align with industry trends favoring dynamic libraries in the Real-Time Communication sector, the RTC SDK platform now exclusively provides dynamic libraries."
  }, {
    heading: "reference",
    content: "The following table summarizes the differences between static and dynamic libraries:"
  }, {
    heading: "reference",
    content: "Feature"
  }, {
    heading: "reference",
    content: "Static Library"
  }, {
    heading: "reference",
    content: "Dynamic Library"
  }, {
    heading: "reference",
    content: "**Link timing**"
  }, {
    heading: "reference",
    content: "At compile time. The library code and the program code are merged together to form an independent executable file."
  }, {
    heading: "reference",
    content: "The library code is not merged into the executable at compile time, but is loaded dynamically at runtime."
  }, {
    heading: "reference",
    content: "**Space occupied**"
  }, {
    heading: "reference",
    content: "Increases the size of the executable file because the library's code is completely merged into the executable file, thus taking up more disk space."
  }, {
    heading: "reference",
    content: "The size of the executable file is relatively small because it only contains references to dynamic libraries and not the actual code, saving disk space."
  }, {
    heading: "reference",
    content: "**Operating efficiency**"
  }, {
    heading: "reference",
    content: "The library is linked to the executable at compile time, so no extra loading step is required at runtime and the program may start faster."
  }, {
    heading: "reference",
    content: "Dynamic loading is required at runtime. The operating system loads the dynamic library into memory when the program starts or when the library is needed."
  }, {
    heading: "reference",
    content: "**Updates and maintenance**"
  }, {
    heading: "reference",
    content: "After the library is updated, the program needs to be recompiled to use the new version of the library."
  }, {
    heading: "reference",
    content: "After the library is updated, only the dynamic library files need to be updated without recompiling."
  }, {
    heading: "reference",
    content: "**Reusability**"
  }, {
    heading: "reference",
    content: "The code is statically copied, so each program that uses the library has its own copy of the library."
  }, {
    heading: "reference",
    content: "Multiple programs can share an instance of the same dynamic library because there is only one copy of the dynamic library in memory."
  }],
  headings: [{
    id: "reference",
    content: "Reference"
  }]
};
export let toc = [{
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Static libraries and Dynamic Link Libraries (DLL) are both used for organizing and sharing code in programming. In earlier versions, the RTC SDK utilized static libraries on certain platforms. However, there are several drawbacks associated with static libraries:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Compilation Conflicts"
          }), ": Static libraries can lead to symbol conflicts with third-party libraries used by your application. For instance, if your app and the Agora SDK both utilize the same ", _jsx(_components.code, {
            children: "ffmpeg"
          }), " library, conflicts may arise during compilation, resulting in build failures."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Compatibility Issues"
          }), ": Inconsistent versions of third-party libraries between your application and the RTC SDK may lead to compatibility issues and app crashes."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Compliance Concerns"
          }), ": The RTC SDK incorporates open-source protocol libraries like ", _jsx(_components.code, {
            children: "ffmpeg"
          }), ". Distributing the SDK as a static library extends the open-source agreement to your application, potentially necessitating that your app also be open-source. To comply with open-source protocol specifications, dynamic libraries are preferred."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "To address these challenges and align with industry trends favoring dynamic libraries in the Real-Time Communication sector, the RTC SDK platform now exclusively provides dynamic libraries."
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "The following table summarizes the differences between static and dynamic libraries:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Feature"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Static Library"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Dynamic Library"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "Link timing"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "At compile time. The library code and the program code are merged together to form an independent executable file."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The library code is not merged into the executable at compile time, but is loaded dynamically at runtime."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "Space occupied"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Increases the size of the executable file because the library's code is completely merged into the executable file, thus taking up more disk space."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The size of the executable file is relatively small because it only contains references to dynamic libraries and not the actual code, saving disk space."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "Operating efficiency"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The library is linked to the executable at compile time, so no extra loading step is required at runtime and the program may start faster."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Dynamic loading is required at runtime. The operating system loads the dynamic library into memory when the program starts or when the library is needed."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "Updates and maintenance"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "After the library is updated, the program needs to be recompiled to use the new version of the library."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "After the library is updated, only the dynamic library files need to be updated without recompiling."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "Reusability"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The code is statically copied, so each program that uses the library has its own copy of the library."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Multiple programs can share an instance of the same dynamic library because there is only one copy of the dynamic library in memory."
          })]
        })]
      })]
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
