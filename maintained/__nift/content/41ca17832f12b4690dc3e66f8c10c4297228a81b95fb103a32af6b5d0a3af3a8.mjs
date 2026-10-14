import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I view Agora API references offline?"
};
export let _markdown = `

Agora updates Agora API references on Dash platform, you can download and view the offline reference in Dash.

<CalloutContainer type="info">
  <CalloutDescription>
    You can only run Dash on macOS or iOS.
  </CalloutDescription>
</CalloutContainer>

## Implementation [#implementation]

1. Download and install [Dash](https://kapeli.com/dash). You can only run Dash on macOS or iOS.

2. Run Dash and click &#x2A;*Download Docsets.**

   ![](https://web-cdn.agora.io/docs-files/1562815959318)

3. Select **User Contributed** and click **Continue**.

   ![](https://web-cdn.agora.io/docs-files/1562815968777)

4. Type Agora in the search box and click **Download** for your target docsets.
   ![](https://web-cdn.agora.io/docs-files/1562815977504)
   After downloading your target docsets, the **Download** buttons change to **Uninstall**.
   ![](https://web-cdn.agora.io/docs-files/1562815983687)

5. Close the **Downloads** window to view all the downloaded API references in the left bar of the main interface.

   ![](https://web-cdn.agora.io/docs-files/1562815996648)

6. Alternatively, you can access the **Downloads** window by clicking the plus icon on the left bar of the main interface, choosing **Download Docsets**, and clicking **User Contributed**.

   ![](https://web-cdn.agora.io/docs-files/1562816005485)
   ![](https://web-cdn.agora.io/docs-files/1562816012084)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora updates Agora API references on Dash platform, you can download and view the offline reference in Dash."
  }, {
    heading: undefined,
    content: "You can only run Dash on macOS or iOS."
  }, {
    heading: "implementation",
    content: "Download and install Dash. You can only run Dash on macOS or iOS."
  }, {
    heading: "implementation",
    content: "Run Dash and click &#x2A;*Download Docsets.**"
  }, {
    heading: "implementation",
    content: "Select **User Contributed** and click **Continue**."
  }, {
    heading: "implementation",
    content: `Type Agora in the search box and click **Download** for your target docsets.

After downloading your target docsets, the **Download** buttons change to **Uninstall**.`
  }, {
    heading: "implementation",
    content: "Close the **Downloads** window to view all the downloaded API references in the left bar of the main interface."
  }, {
    heading: "implementation",
    content: "Alternatively, you can access the **Downloads** window by clicking the plus icon on the left bar of the main interface, choosing **Download Docsets**, and clicking **User Contributed**."
  }],
  headings: [{
    id: "implementation",
    content: "Implementation"
  }]
};
export let toc = [{
  depth: 2,
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Agora updates Agora API references on Dash platform, you can download and view the offline reference in Dash."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "You can only run Dash on macOS or iOS."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Download and install ", _jsx(_components.a, {
            href: "https://kapeli.com/dash",
            children: "Dash"
          }), ". You can only run Dash on macOS or iOS."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Run Dash and click ", _jsx(_components.strong, {
            children: "Download Docsets."
          })]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1562815959318",
            alt: ""
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Select ", _jsx(_components.strong, {
            children: "User Contributed"
          }), " and click ", _jsx(_components.strong, {
            children: "Continue"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1562815968777",
            alt: ""
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Type Agora in the search box and click ", _jsx(_components.strong, {
            children: "Download"
          }), ` for your target docsets.
`, _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1562815977504",
            alt: ""
          }), `
After downloading your target docsets, the `, _jsx(_components.strong, {
            children: "Download"
          }), " buttons change to ", _jsx(_components.strong, {
            children: "Uninstall"
          }), `.
`, _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1562815983687",
            alt: ""
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Close the ", _jsx(_components.strong, {
            children: "Downloads"
          }), " window to view all the downloaded API references in the left bar of the main interface."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1562815996648",
            alt: ""
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Alternatively, you can access the ", _jsx(_components.strong, {
            children: "Downloads"
          }), " window by clicking the plus icon on the left bar of the main interface, choosing ", _jsx(_components.strong, {
            children: "Download Docsets"
          }), ", and clicking ", _jsx(_components.strong, {
            children: "User Contributed"
          }), "."]
        }), `
`, _jsxs(_components.p, {
          children: [_jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1562816005485",
            alt: ""
          }), `
`, _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1562816012084",
            alt: ""
          })]
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
