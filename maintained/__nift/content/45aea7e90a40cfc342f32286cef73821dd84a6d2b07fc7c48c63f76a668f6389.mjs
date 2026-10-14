import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Fastboard release notes",
  description: "Track Fastboard SDK release notes across Android, iOS, and Web."
};
export let _markdown = `

Shared intro.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;web&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    ## Understand the tech [#understand-the-tech]

    The Fastboard SDK is the latest generation of the Whiteboard SDK launched by Agora to help developers quickly build whiteboard applications.

    ## Reference [#reference]

    <Accordions type="multiple">
      <Accordion title="v1.7.2" id="v172" headingLevel="2" value="v172">
        Released on July 28, 2025.

        #### New features [#new-features]

        **Register third-party window apps**

        This version adds the [\`registerApp\`](/en/api-reference/api-ref/uikit-sdk#registerapp) method to the \`FastRoom\` class.

        **Set stroke thickness range**

        This version introduces the [\`setStrokeRange\`](/en/api-reference/api-ref/uikit-sdk#setstrokerange) method in the \`FastUiSettings\` class.

        #### Bug fixes [#bug-fixes]

        * The [\`setToolboxEdgeMargin\`](/en/api-reference/api-ref/uikit-sdk#settoolboxedgemargin) method did not work when Toolbox Gravity was not specified.
        * UI updates did not take effect on the first call of [\`setResource\`](/en/api-reference/api-ref/uikit-sdk#setresource).
        * The brush color was not in the custom color list when first entering the room after setting it with [\`setToolsColors\`](/en/api-reference/api-ref/uikit-sdk#settoolscolors).
      </Accordion>

      <Accordion title="v1.6.2" id="v162" headingLevel="2" value="v162">
        Released on July 28, 2025.

        #### New features [#new-features-1]

        * \`preloadWhiteboardView\`
        * \`insertStaticDoc\`
        * \`insertPptx\`
        * \`FastboardConfig\`
        * \`FastLogger\`
      </Accordion>
    </Accordions>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    ## Understand the tech [#understand-the-tech-1]

    The Fastboard SDK is the latest generation of the Interactive Whiteboard SDK launched by Agora to help developers quickly build whiteboard applications.

    ## Reference [#reference-1]

    <Accordions type="multiple">
      <Accordion title="v1.4.2" id="v142" headingLevel="2" value="v142">
        Released on July 28, 2025.

        #### Issues fixed [#issues-fixed]

        * Setting \`drawOnlyApplePencil\` does not take effect on some high-version iOS devices.
        * The \`warning: duplicate UUIDs\` error occurs when installing the SDK using Cocoapods.

        #### Improvements [#improvements]

        Since this version, there is no distinction between YYModel and YYKit when integrating the SDK.
      </Accordion>

      <Accordion title="v1.2.2" id="v122" headingLevel="2" value="v122">
        Released on January 19, 2024.

        #### New features [#new-features-2]

        * \`insertPptx\`
        * \`FastRoomPanelItemAsset\`
        * \`FastRoomControlBarAssets\`
        * \`userPayload\`

        #### Reference [#reference-2]

        * [Join a Whiteboard Room](../build/set-up-and-build-your-first-app/get-started-sdk/)
        * [Display Files](../build/display-files-and-manage-scenes/scenes/display-files-fast/)
        * [API Reference](/en/api-reference/api-ref/uikit-sdk)
      </Accordion>
    </Accordions>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    ## Understand the tech [#understand-the-tech-2]

    The Fastboard SDK is the latest generation of the whiteboard SDK launched by Agora to help developers quickly build whiteboard applications.

    ## Reference [#reference-3]

    <Accordions type="multiple">
      <Accordion title="v1.1.0" id="v110" headingLevel="2" value="v110">
        Released on July 28, 2025.

        #### New features [#new-features-3]

        * \`FastboardOptions.enableAppInMainViewPlugin\`
        * \`markPen\`

        #### Bug fixes [#bug-fixes-1]

        * The declaration file \`full.d.ts\` was missing when using the full package import.
        * The toolbar did not display when the floating bar was set to \`false\`.
      </Accordion>

      <Accordion title="v1.0.0" id="v100" headingLevel="2" value="v100">
        Released on July 28, 2025.

        #### New features [#new-features-4]

        * Full package reference support
        * \`appliance-plugin\`
        * \`canOperate\`
        * \`toggleDottedLine\`
        * \`setPencilEraserSize\`
        * \`insertImage.crossOrigin\`
        * \`jumpPage\`
      </Accordion>
    </Accordions>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Shared intro."
  }, {
    heading: "understand-the-tech",
    content: "The Fastboard SDK is the latest generation of the Whiteboard SDK launched by Agora to help developers quickly build whiteboard applications."
  }, {
    heading: "reference",
    content: "Released on July 28, 2025."
  }, {
    heading: "new-features",
    content: "**Register third-party window apps**"
  }, {
    heading: "new-features",
    content: "This version adds the `registerApp` method to the `FastRoom` class."
  }, {
    heading: "new-features",
    content: "**Set stroke thickness range**"
  }, {
    heading: "new-features",
    content: "This version introduces the `setStrokeRange` method in the `FastUiSettings` class."
  }, {
    heading: "bug-fixes",
    content: "The `setToolboxEdgeMargin` method did not work when Toolbox Gravity was not specified."
  }, {
    heading: "bug-fixes",
    content: "UI updates did not take effect on the first call of `setResource`."
  }, {
    heading: "bug-fixes",
    content: "The brush color was not in the custom color list when first entering the room after setting it with `setToolsColors`."
  }, {
    heading: "bug-fixes",
    content: "Released on July 28, 2025."
  }, {
    heading: "new-features-1",
    content: "`preloadWhiteboardView`"
  }, {
    heading: "new-features-1",
    content: "`insertStaticDoc`"
  }, {
    heading: "new-features-1",
    content: "`insertPptx`"
  }, {
    heading: "new-features-1",
    content: "`FastboardConfig`"
  }, {
    heading: "new-features-1",
    content: "`FastLogger`"
  }, {
    heading: "understand-the-tech-1",
    content: "The Fastboard SDK is the latest generation of the Interactive Whiteboard SDK launched by Agora to help developers quickly build whiteboard applications."
  }, {
    heading: "reference-1",
    content: "Released on July 28, 2025."
  }, {
    heading: "issues-fixed",
    content: "Setting `drawOnlyApplePencil` does not take effect on some high-version iOS devices."
  }, {
    heading: "issues-fixed",
    content: "The `warning: duplicate UUIDs` error occurs when installing the SDK using Cocoapods."
  }, {
    heading: "improvements",
    content: "Since this version, there is no distinction between YYModel and YYKit when integrating the SDK."
  }, {
    heading: "improvements",
    content: "Released on January 19, 2024."
  }, {
    heading: "new-features-2",
    content: "`insertPptx`"
  }, {
    heading: "new-features-2",
    content: "`FastRoomPanelItemAsset`"
  }, {
    heading: "new-features-2",
    content: "`FastRoomControlBarAssets`"
  }, {
    heading: "new-features-2",
    content: "`userPayload`"
  }, {
    heading: "reference-2",
    content: "Join a Whiteboard Room"
  }, {
    heading: "reference-2",
    content: "Display Files"
  }, {
    heading: "reference-2",
    content: "API Reference"
  }, {
    heading: "understand-the-tech-2",
    content: "The Fastboard SDK is the latest generation of the whiteboard SDK launched by Agora to help developers quickly build whiteboard applications."
  }, {
    heading: "reference-3",
    content: "Released on July 28, 2025."
  }, {
    heading: "new-features-3",
    content: "`FastboardOptions.enableAppInMainViewPlugin`"
  }, {
    heading: "new-features-3",
    content: "`markPen`"
  }, {
    heading: "bug-fixes-1",
    content: "The declaration file `full.d.ts` was missing when using the full package import."
  }, {
    heading: "bug-fixes-1",
    content: "The toolbar did not display when the floating bar was set to `false`."
  }, {
    heading: "bug-fixes-1",
    content: "Released on July 28, 2025."
  }, {
    heading: "new-features-4",
    content: "Full package reference support"
  }, {
    heading: "new-features-4",
    content: "`appliance-plugin`"
  }, {
    heading: "new-features-4",
    content: "`canOperate`"
  }, {
    heading: "new-features-4",
    content: "`toggleDottedLine`"
  }, {
    heading: "new-features-4",
    content: "`setPencilEraserSize`"
  }, {
    heading: "new-features-4",
    content: "`insertImage.crossOrigin`"
  }, {
    heading: "new-features-4",
    content: "`jumpPage`"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "new-features",
    content: "New features"
  }, {
    id: "bug-fixes",
    content: "Bug fixes"
  }, {
    id: "new-features-1",
    content: "New features"
  }, {
    id: "understand-the-tech-1",
    content: "Understand the tech"
  }, {
    id: "reference-1",
    content: "Reference"
  }, {
    id: "issues-fixed",
    content: "Issues fixed"
  }, {
    id: "improvements",
    content: "Improvements"
  }, {
    id: "new-features-2",
    content: "New features"
  }, {
    id: "reference-2",
    content: "Reference"
  }, {
    id: "understand-the-tech-2",
    content: "Understand the tech"
  }, {
    id: "reference-3",
    content: "Reference"
  }, {
    id: "new-features-3",
    content: "New features"
  }, {
    id: "bug-fixes-1",
    content: "Bug fixes"
  }, {
    id: "new-features-4",
    content: "New features"
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
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 4,
  url: "#new-features",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#bug-fixes",
  title: _jsx(_Fragment, {
    children: "Bug fixes"
  })
}, {
  depth: 4,
  url: "#new-features-1",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-1",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#reference-1",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 4,
  url: "#issues-fixed",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#improvements",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#new-features-2",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#reference-2",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-2",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#reference-3",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 4,
  url: "#new-features-3",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#bug-fixes-1",
  title: _jsx(_Fragment, {
    children: "Bug fixes"
  })
}, {
  depth: 4,
  url: "#new-features-4",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h4: "h4",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { Accordion, Accordions, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!Accordion)
    _missingMdxReference("Accordion", true);
  if (!Accordions)
    _missingMdxReference("Accordions", true);
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Shared intro."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["android","ios","web"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsx(_components.h2, {
          id: "understand-the-tech",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "The Fastboard SDK is the latest generation of the Whiteboard SDK launched by Agora to help developers quickly build whiteboard applications."
        }), _jsx(_components.h2, {
          id: "reference",
          children: "Reference"
        }), _jsxs(Accordions, {
          type: "multiple",
          openFirst: true,
          children: [_jsxs(Accordion, {
            title: "v1.7.2",
            id: "v172",
            headingLevel: 2,
            value: "v172",
            children: [_jsx(_components.p, {
              children: "Released on July 28, 2025."
            }), _jsx(_components.h4, {
              id: "new-features",
              children: "New features"
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Register third-party window apps"
              })
            }), _jsxs(_components.p, {
              children: ["This version adds the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/uikit-sdk#registerapp",
                children: _jsx(_components.code, {
                  children: "registerApp"
                })
              }), " method to the ", _jsx(_components.code, {
                children: "FastRoom"
              }), " class."]
            }), _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Set stroke thickness range"
              })
            }), _jsxs(_components.p, {
              children: ["This version introduces the ", _jsx(_components.a, {
                href: "/en/api-reference/api-ref/uikit-sdk#setstrokerange",
                children: _jsx(_components.code, {
                  children: "setStrokeRange"
                })
              }), " method in the ", _jsx(_components.code, {
                children: "FastUiSettings"
              }), " class."]
            }), _jsx(_components.h4, {
              id: "bug-fixes",
              children: "Bug fixes"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["The ", _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/uikit-sdk#settoolboxedgemargin",
                  children: _jsx(_components.code, {
                    children: "setToolboxEdgeMargin"
                  })
                }), " method did not work when Toolbox Gravity was not specified."]
              }), `
`, _jsxs(_components.li, {
                children: ["UI updates did not take effect on the first call of ", _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/uikit-sdk#setresource",
                  children: _jsx(_components.code, {
                    children: "setResource"
                  })
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: ["The brush color was not in the custom color list when first entering the room after setting it with ", _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/uikit-sdk#settoolscolors",
                  children: _jsx(_components.code, {
                    children: "setToolsColors"
                  })
                }), "."]
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v1.6.2",
            id: "v162",
            headingLevel: 2,
            value: "v162",
            children: [_jsx(_components.p, {
              children: "Released on July 28, 2025."
            }), _jsx(_components.h4, {
              id: "new-features-1",
              children: "New features"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "preloadWhiteboardView"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "insertStaticDoc"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "insertPptx"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "FastboardConfig"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "FastLogger"
                })
              }), `
`]
            })]
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "ios",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "ios"
        }), _jsx(_components.h2, {
          id: "understand-the-tech-1",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "The Fastboard SDK is the latest generation of the Interactive Whiteboard SDK launched by Agora to help developers quickly build whiteboard applications."
        }), _jsx(_components.h2, {
          id: "reference-1",
          children: "Reference"
        }), _jsxs(Accordions, {
          type: "multiple",
          openFirst: true,
          children: [_jsxs(Accordion, {
            title: "v1.4.2",
            id: "v142",
            headingLevel: 2,
            value: "v142",
            children: [_jsx(_components.p, {
              children: "Released on July 28, 2025."
            }), _jsx(_components.h4, {
              id: "issues-fixed",
              children: "Issues fixed"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["Setting ", _jsx(_components.code, {
                  children: "drawOnlyApplePencil"
                }), " does not take effect on some high-version iOS devices."]
              }), `
`, _jsxs(_components.li, {
                children: ["The ", _jsx(_components.code, {
                  children: "warning: duplicate UUIDs"
                }), " error occurs when installing the SDK using Cocoapods."]
              }), `
`]
            }), _jsx(_components.h4, {
              id: "improvements",
              children: "Improvements"
            }), _jsx(_components.p, {
              children: "Since this version, there is no distinction between YYModel and YYKit when integrating the SDK."
            })]
          }), _jsxs(Accordion, {
            title: "v1.2.2",
            id: "v122",
            headingLevel: 2,
            value: "v122",
            children: [_jsx(_components.p, {
              children: "Released on January 19, 2024."
            }), _jsx(_components.h4, {
              id: "new-features-2",
              children: "New features"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "insertPptx"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "FastRoomPanelItemAsset"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "FastRoomControlBarAssets"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "userPayload"
                })
              }), `
`]
            }), _jsx(_components.h4, {
              id: "reference-2",
              children: "Reference"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "../build/set-up-and-build-your-first-app/get-started-sdk/",
                  children: "Join a Whiteboard Room"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "../build/display-files-and-manage-scenes/scenes/display-files-fast/",
                  children: "Display Files"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "/en/api-reference/api-ref/uikit-sdk",
                  children: "API Reference"
                })
              }), `
`]
            })]
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "web",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "web"
        }), _jsx(_components.h2, {
          id: "understand-the-tech-2",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "The Fastboard SDK is the latest generation of the whiteboard SDK launched by Agora to help developers quickly build whiteboard applications."
        }), _jsx(_components.h2, {
          id: "reference-3",
          children: "Reference"
        }), _jsxs(Accordions, {
          type: "multiple",
          openFirst: true,
          children: [_jsxs(Accordion, {
            title: "v1.1.0",
            id: "v110",
            headingLevel: 2,
            value: "v110",
            children: [_jsx(_components.p, {
              children: "Released on July 28, 2025."
            }), _jsx(_components.h4, {
              id: "new-features-3",
              children: "New features"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "FastboardOptions.enableAppInMainViewPlugin"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "markPen"
                })
              }), `
`]
            }), _jsx(_components.h4, {
              id: "bug-fixes-1",
              children: "Bug fixes"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["The declaration file ", _jsx(_components.code, {
                  children: "full.d.ts"
                }), " was missing when using the full package import."]
              }), `
`, _jsxs(_components.li, {
                children: ["The toolbar did not display when the floating bar was set to ", _jsx(_components.code, {
                  children: "false"
                }), "."]
              }), `
`]
            })]
          }), _jsxs(Accordion, {
            title: "v1.0.0",
            id: "v100",
            headingLevel: 2,
            value: "v100",
            children: [_jsx(_components.p, {
              children: "Released on July 28, 2025."
            }), _jsx(_components.h4, {
              id: "new-features-4",
              children: "New features"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Full package reference support"
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "appliance-plugin"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "canOperate"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "toggleDottedLine"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "setPencilEraserSize"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "insertImage.crossOrigin"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.code, {
                  children: "jumpPage"
                })
              }), `
`]
            })]
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
