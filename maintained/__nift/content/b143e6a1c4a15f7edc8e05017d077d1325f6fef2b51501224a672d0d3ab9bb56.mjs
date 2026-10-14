import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "RESTful API IP allowlist",
  description: "Describes the RESTful API IP allowlist function"
};
export let _markdown = `

For added security, Agora Chat provides the IP whitelist function. If only certain IP addresses are allowed to call the RESTful APIs to send messages, you can add these IP addresses to the IP whitelist on the [Agora Console](https://console.agora.io/). IP addresses outside the IP whitelist cannot call the RESTful API to send messages.

### Add an IP address to the IP whitelist [#add-an-ip-address-to-the-ip-whitelist]

1. Log in to [Agora Console](https://console.agora.io/).

2. From the sidebar, select **RTC Services**.

3. Find **Chat** and click  **Open chat console**.

4. From the side panel, select **Security Setting**.

5. On the **Security Setting** page, click **Create** and enter the IP address.

   <CalloutContainer type="info">
     <CalloutDescription>
       You can add at most eight IP addresses, with only one each time.The new IP addresses take effect 10 minutes after addition. When the IP whitelist is empty, all IP addresses can send messages via the RESTful APIs.
     </CalloutDescription>
   </CalloutContainer>

6. Click **Save** to complete the configuration.

### Remove an IP address from the IP whitelist [#remove-an-ip-address-from-the-ip-whitelist]

If you no longer allow an IP address to send messages via the RESTful APIs, you can remove it from the IP whitelist.

<CalloutContainer type="info">
  <CalloutTitle>
    Note
  </CalloutTitle>

  <CalloutDescription>
    If you remove every IP address from the whitelist and leave it empty, the whitelist is no longer enforced, and any IP address can call the RESTful APIs.
  </CalloutDescription>
</CalloutContainer>

1. Follow the same steps as [Add an IP address](#add-an-ip-address-to-the-ip-whitelist) to open the **Security Setting** page.

2. In the IP Whitelist, select and delete the IP address.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "For added security, Agora Chat provides the IP whitelist function. If only certain IP addresses are allowed to call the RESTful APIs to send messages, you can add these IP addresses to the IP whitelist on the Agora Console. IP addresses outside the IP whitelist cannot call the RESTful API to send messages."
  }, {
    heading: "add-an-ip-address-to-the-ip-whitelist",
    content: "Log in to Agora Console."
  }, {
    heading: "add-an-ip-address-to-the-ip-whitelist",
    content: "From the sidebar, select **RTC Services**."
  }, {
    heading: "add-an-ip-address-to-the-ip-whitelist",
    content: "Find **Chat** and click  **Open chat console**."
  }, {
    heading: "add-an-ip-address-to-the-ip-whitelist",
    content: "From the side panel, select **Security Setting**."
  }, {
    heading: "add-an-ip-address-to-the-ip-whitelist",
    content: "On the **Security Setting** page, click **Create** and enter the IP address."
  }, {
    heading: "add-an-ip-address-to-the-ip-whitelist",
    content: "You can add at most eight IP addresses, with only one each time.The new IP addresses take effect 10 minutes after addition. When the IP whitelist is empty, all IP addresses can send messages via the RESTful APIs."
  }, {
    heading: "add-an-ip-address-to-the-ip-whitelist",
    content: "Click **Save** to complete the configuration."
  }, {
    heading: "remove-an-ip-address-from-the-ip-whitelist",
    content: "If you no longer allow an IP address to send messages via the RESTful APIs, you can remove it from the IP whitelist."
  }, {
    heading: "remove-an-ip-address-from-the-ip-whitelist",
    content: "If you remove every IP address from the whitelist and leave it empty, the whitelist is no longer enforced, and any IP address can call the RESTful APIs."
  }, {
    heading: "remove-an-ip-address-from-the-ip-whitelist",
    content: "Follow the same steps as Add an IP address to open the **Security Setting** page."
  }, {
    heading: "remove-an-ip-address-from-the-ip-whitelist",
    content: "In the IP Whitelist, select and delete the IP address."
  }],
  headings: [{
    id: "add-an-ip-address-to-the-ip-whitelist",
    content: "Add an IP address to the IP whitelist"
  }, {
    id: "remove-an-ip-address-from-the-ip-whitelist",
    content: "Remove an IP address from the IP whitelist"
  }]
};
export let toc = [{
  depth: 3,
  url: "#add-an-ip-address-to-the-ip-whitelist",
  title: _jsx(_Fragment, {
    children: "Add an IP address to the IP whitelist"
  })
}, {
  depth: 3,
  url: "#remove-an-ip-address-from-the-ip-whitelist",
  title: _jsx(_Fragment, {
    children: "Remove an IP address from the IP whitelist"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["For added security, Agora Chat provides the IP whitelist function. If only certain IP addresses are allowed to call the RESTful APIs to send messages, you can add these IP addresses to the IP whitelist on the ", _jsx(_components.a, {
        href: "https://console.agora.io/",
        children: "Agora Console"
      }), ". IP addresses outside the IP whitelist cannot call the RESTful API to send messages."]
    }), `
`, _jsx(_components.h3, {
      id: "add-an-ip-address-to-the-ip-whitelist",
      children: "Add an IP address to the IP whitelist"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Log in to ", _jsx(_components.a, {
            href: "https://console.agora.io/",
            children: "Agora Console"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["From the sidebar, select ", _jsx(_components.strong, {
            children: "RTC Services"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Find ", _jsx(_components.strong, {
            children: "Chat"
          }), " and click  ", _jsx(_components.strong, {
            children: "Open chat console"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["From the side panel, select ", _jsx(_components.strong, {
            children: "Security Setting"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the ", _jsx(_components.strong, {
            children: "Security Setting"
          }), " page, click ", _jsx(_components.strong, {
            children: "Create"
          }), " and enter the IP address."]
        }), `
`, _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "You can add at most eight IP addresses, with only one each time.The new IP addresses take effect 10 minutes after addition. When the IP whitelist is empty, all IP addresses can send messages via the RESTful APIs."
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Click ", _jsx(_components.strong, {
            children: "Save"
          }), " to complete the configuration."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "remove-an-ip-address-from-the-ip-whitelist",
      children: "Remove an IP address from the IP whitelist"
    }), `
`, _jsx(_components.p, {
      children: "If you no longer allow an IP address to send messages via the RESTful APIs, you can remove it from the IP whitelist."
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Note"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "If you remove every IP address from the whitelist and leave it empty, the whitelist is no longer enforced, and any IP address can call the RESTful APIs."
        })
      })]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Follow the same steps as ", _jsx(_components.a, {
            href: "#add-an-ip-address-to-the-ip-whitelist",
            children: "Add an IP address"
          }), " to open the ", _jsx(_components.strong, {
            children: "Security Setting"
          }), " page."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "In the IP Whitelist, select and delete the IP address."
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
