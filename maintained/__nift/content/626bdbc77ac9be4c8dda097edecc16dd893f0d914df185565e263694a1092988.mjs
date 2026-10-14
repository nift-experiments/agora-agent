import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Firewall requirements",
  description: "Use Agora products in environments with restricted network access"
};
export let _markdown = `

To allow you to use Agora products in environments with restricted network access, Agora provides the following solutions: the firewall whitelist and the Agora cloud proxy.

The following table lists the support of Agora products for the two solutions:

| Agora Products                           | Firewall Whitelist | Agora Cloud Proxy |
| ---------------------------------------- | :----------------: | :---------------: |
| RTC SDK (Native, third-party frameworks) |          ✘         |         ✔         |
| RTC SDK (Web)                            |          ✔         |         ✔         |
| Signaling SDK (Native)                   |          ✔         |         ✘         |
| Signaling SDK (Web)                      |          ✔         |         ✔         |
| On-Premise Recording SDK                 |          ✘         |         ✔         |

* When using the firewall whitelist, add the domains and ports to the firewall whitelist, and do not set restrictions on IP addresses.
* When using Agora cloud proxy, refer to [Connect to Agora through a restricted network](/en/realtime-media/rtc/build/manage-connection-and-quality/cloud-proxy)

### RTC SDK (Web) [#rtc-sdk-web]

Add the following destination domains and the corresponding ports to your firewall whitelist.

#### Domains [#domains]

\`\`\`text
.agora.io
.edge.agora.io
.sd-rtn.com
.edge.sd-rtn.com
.ap.sd-rtn.com
.statscollector.sd-rtn.com
.webrtc-cloud-proxy.sd-rtn.com
.rtnsvc.com
.edge.rtnsvc.com
.rtesvc.com
.edge.rtesvc.com
\`\`\`

<CalloutContainer type="info">
  <CalloutDescription>
    To improve connectivity over public networks, we recommend adding the domains listed above to your firewall allowlist.
  </CalloutDescription>
</CalloutContainer>

#### Ports [#ports]

| Destination ports                                                                                        | Port type | Operation |
| -------------------------------------------------------------------------------------------------------- | --------- | --------- |
| 80; 443; 3433; 3478; 4700 - 5000; 5668; 5669; 6080; 6443; 8667; 9667; 30011 - 30013 (for RTMP converter) | TCP       | Allow     |
| 3478; 4700 - 5000 (2.9.0 or later); 10000 - 65535 (before 2.9.0)                                         | UDP       | Allow     |

### Signaling SDK (Web) [#signaling-sdk-web]

#### Message channel [#message-channel]

For a message channel, you need to add the following content to the firewall whitelist:

* **Domains**:
  \`\`\`text
  .edge.agora.io
  .edge.sd-rtn.com
  web-1.ap.sd-rtn.com
  web-2.ap.sd-rtn.com
  web-3.ap.sd-rtn.com
  web-4.ap.sd-rtn.com
  ap-web-1.agora.io
  ap-web-2.agora.io
  ap-web-3.agora.io
  ap-web-4.agora.io
  webcollector-rtm.agora.io
  logservice-rtm.agora.io
  rtm.statscollector.sd-rtn.com
  rtm.logservice.sd-rtn.com
  \`\`\`

* **Ports**:

  | **Destination port**   | **Protocol** | **Operate** |
  | ---------------------- | ------------ | ----------- |
  | 443; 9591; 9593; 27387 | TCP          | Allow       |

  <CalloutContainer type="info">
    <CalloutTitle>
      Info
    </CalloutTitle>

    <CalloutDescription>
      If you are using Signaling 1.x, also add port 9601.
    </CalloutDescription>
  </CalloutContainer>

#### Stream channel [#stream-channel]

For a stream channel, you need to add the following to your firewall whitelist:

* **Domains**:

  \`\`\`text
  .agora.io
  .edge.agora.io
  .sd-rtn.com
  .edge.sd-rtn.com
  \`\`\`

* **Ports**:

  | **Destination port**                                      | **Protocol** | **Operate** |
  | --------------------------------------------------------- | ------------ | ----------- |
  | 80; 3433; 4700 - 5000; 5668; 5669; 6080; 6443; 8667; 9667 | TCP          | Allow       |
  | 3478; 4700 - 5000                                         | UDP          | Allow       |

### Signaling SDK (Native) [#signaling-sdk-native]

#### Message channel [#message-channel-1]

For a message channel, you need to add the following content to the firewall whitelist:

* **Domains**:
  \`\`\`text
  .agora.io
  \`\`\`
* **Ports**:
  | **Destination port**                                  | **Protocol** | **Operate** |
  | ----------------------------------------------------- | ------------ | ----------- |
  | 443; 7384; 8443; 9130; 9131; 9136; 9137; 9140; 9141   | TCP          | Allow       |
  | 1080; 3000; 8000; 8130; 8443; 9120; 9121; 9700; 25000 | UDP          | Allow       |

#### Stream channel [#stream-channel-1]

For a stream channel, you need to add the following to your firewall whitelist:

* **Ports**:

  | **Destination port** | **Protocol** | **Operate** |
  | -------------------- | ------------ | ----------- |
  | 4001 - 4150          | UDP          | Allow       |

  <CalloutContainer type="info">
    <CalloutTitle>
      Info
    </CalloutTitle>

    <CalloutDescription>
      The target ports listed in this section may be adjusted according to actual conditions. If you encounter any issues, contact [rtm@agora.io](mailto\\:rtm@agora.io).
    </CalloutDescription>
  </CalloutContainer>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "To allow you to use Agora products in environments with restricted network access, Agora provides the following solutions: the firewall whitelist and the Agora cloud proxy."
  }, {
    heading: undefined,
    content: "The following table lists the support of Agora products for the two solutions:"
  }, {
    heading: undefined,
    content: "Agora Products"
  }, {
    heading: undefined,
    content: "Firewall Whitelist"
  }, {
    heading: undefined,
    content: "Agora Cloud Proxy"
  }, {
    heading: undefined,
    content: "RTC SDK (Native, third-party frameworks)"
  }, {
    heading: undefined,
    content: "✘"
  }, {
    heading: undefined,
    content: "✔"
  }, {
    heading: undefined,
    content: "RTC SDK (Web)"
  }, {
    heading: undefined,
    content: "✔"
  }, {
    heading: undefined,
    content: "✔"
  }, {
    heading: undefined,
    content: "Signaling SDK (Native)"
  }, {
    heading: undefined,
    content: "✔"
  }, {
    heading: undefined,
    content: "✘"
  }, {
    heading: undefined,
    content: "Signaling SDK (Web)"
  }, {
    heading: undefined,
    content: "✔"
  }, {
    heading: undefined,
    content: "✔"
  }, {
    heading: undefined,
    content: "On-Premise Recording SDK"
  }, {
    heading: undefined,
    content: "✘"
  }, {
    heading: undefined,
    content: "✔"
  }, {
    heading: undefined,
    content: "When using the firewall whitelist, add the domains and ports to the firewall whitelist, and do not set restrictions on IP addresses."
  }, {
    heading: undefined,
    content: "When using Agora cloud proxy, refer to Connect to Agora through a restricted network"
  }, {
    heading: "rtc-sdk-web",
    content: "Add the following destination domains and the corresponding ports to your firewall whitelist."
  }, {
    heading: "domains",
    content: "To improve connectivity over public networks, we recommend adding the domains listed above to your firewall allowlist."
  }, {
    heading: "ports",
    content: "Destination ports"
  }, {
    heading: "ports",
    content: "Port type"
  }, {
    heading: "ports",
    content: "Operation"
  }, {
    heading: "ports",
    content: "80; 443; 3433; 3478; 4700 - 5000; 5668; 5669; 6080; 6443; 8667; 9667; 30011 - 30013 (for RTMP converter)"
  }, {
    heading: "ports",
    content: "TCP"
  }, {
    heading: "ports",
    content: "Allow"
  }, {
    heading: "ports",
    content: "3478; 4700 - 5000 (2.9.0 or later); 10000 - 65535 (before 2.9.0)"
  }, {
    heading: "ports",
    content: "UDP"
  }, {
    heading: "ports",
    content: "Allow"
  }, {
    heading: "message-channel",
    content: "For a message channel, you need to add the following content to the firewall whitelist:"
  }, {
    heading: "message-channel",
    content: "**Domains**:"
  }, {
    heading: "message-channel",
    content: "**Ports**:"
  }, {
    heading: "message-channel",
    content: "**Destination port**"
  }, {
    heading: "message-channel",
    content: "**Protocol**"
  }, {
    heading: "message-channel",
    content: "**Operate**"
  }, {
    heading: "message-channel",
    content: "443; 9591; 9593; 27387"
  }, {
    heading: "message-channel",
    content: "TCP"
  }, {
    heading: "message-channel",
    content: "Allow"
  }, {
    heading: "message-channel",
    content: "If you are using Signaling 1.x, also add port 9601."
  }, {
    heading: "stream-channel",
    content: "For a stream channel, you need to add the following to your firewall whitelist:"
  }, {
    heading: "stream-channel",
    content: "**Domains**:"
  }, {
    heading: "stream-channel",
    content: "**Ports**:"
  }, {
    heading: "stream-channel",
    content: "**Destination port**"
  }, {
    heading: "stream-channel",
    content: "**Protocol**"
  }, {
    heading: "stream-channel",
    content: "**Operate**"
  }, {
    heading: "stream-channel",
    content: "80; 3433; 4700 - 5000; 5668; 5669; 6080; 6443; 8667; 9667"
  }, {
    heading: "stream-channel",
    content: "TCP"
  }, {
    heading: "stream-channel",
    content: "Allow"
  }, {
    heading: "stream-channel",
    content: "3478; 4700 - 5000"
  }, {
    heading: "stream-channel",
    content: "UDP"
  }, {
    heading: "stream-channel",
    content: "Allow"
  }, {
    heading: "message-channel-1",
    content: "For a message channel, you need to add the following content to the firewall whitelist:"
  }, {
    heading: "message-channel-1",
    content: "**Domains**:"
  }, {
    heading: "message-channel-1",
    content: "**Ports**:"
  }, {
    heading: "message-channel-1",
    content: "**Destination port**"
  }, {
    heading: "message-channel-1",
    content: "**Protocol**"
  }, {
    heading: "message-channel-1",
    content: "**Operate**"
  }, {
    heading: "message-channel-1",
    content: "443; 7384; 8443; 9130; 9131; 9136; 9137; 9140; 9141"
  }, {
    heading: "message-channel-1",
    content: "TCP"
  }, {
    heading: "message-channel-1",
    content: "Allow"
  }, {
    heading: "message-channel-1",
    content: "1080; 3000; 8000; 8130; 8443; 9120; 9121; 9700; 25000"
  }, {
    heading: "message-channel-1",
    content: "UDP"
  }, {
    heading: "message-channel-1",
    content: "Allow"
  }, {
    heading: "stream-channel-1",
    content: "For a stream channel, you need to add the following to your firewall whitelist:"
  }, {
    heading: "stream-channel-1",
    content: "**Ports**:"
  }, {
    heading: "stream-channel-1",
    content: "**Destination port**"
  }, {
    heading: "stream-channel-1",
    content: "**Protocol**"
  }, {
    heading: "stream-channel-1",
    content: "**Operate**"
  }, {
    heading: "stream-channel-1",
    content: "4001 - 4150"
  }, {
    heading: "stream-channel-1",
    content: "UDP"
  }, {
    heading: "stream-channel-1",
    content: "Allow"
  }, {
    heading: "stream-channel-1",
    content: "The target ports listed in this section may be adjusted according to actual conditions. If you encounter any issues, contact rtm\\@agora.io."
  }],
  headings: [{
    id: "rtc-sdk-web",
    content: "RTC SDK (Web)"
  }, {
    id: "domains",
    content: "Domains"
  }, {
    id: "ports",
    content: "Ports"
  }, {
    id: "signaling-sdk-web",
    content: "Signaling SDK (Web)"
  }, {
    id: "message-channel",
    content: "Message channel"
  }, {
    id: "stream-channel",
    content: "Stream channel"
  }, {
    id: "signaling-sdk-native",
    content: "Signaling SDK (Native)"
  }, {
    id: "message-channel-1",
    content: "Message channel"
  }, {
    id: "stream-channel-1",
    content: "Stream channel"
  }]
};
export let toc = [{
  depth: 3,
  url: "#rtc-sdk-web",
  title: _jsx(_Fragment, {
    children: "RTC SDK (Web)"
  })
}, {
  depth: 4,
  url: "#domains",
  title: _jsx(_Fragment, {
    children: "Domains"
  })
}, {
  depth: 4,
  url: "#ports",
  title: _jsx(_Fragment, {
    children: "Ports"
  })
}, {
  depth: 3,
  url: "#signaling-sdk-web",
  title: _jsx(_Fragment, {
    children: "Signaling SDK (Web)"
  })
}, {
  depth: 4,
  url: "#message-channel",
  title: _jsx(_Fragment, {
    children: "Message channel"
  })
}, {
  depth: 4,
  url: "#stream-channel",
  title: _jsx(_Fragment, {
    children: "Stream channel"
  })
}, {
  depth: 3,
  url: "#signaling-sdk-native",
  title: _jsx(_Fragment, {
    children: "Signaling SDK (Native)"
  })
}, {
  depth: 4,
  url: "#message-channel-1",
  title: _jsx(_Fragment, {
    children: "Message channel"
  })
}, {
  depth: 4,
  url: "#stream-channel-1",
  title: _jsx(_Fragment, {
    children: "Stream channel"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h3: "h3",
    h4: "h4",
    li: "li",
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
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "To allow you to use Agora products in environments with restricted network access, Agora provides the following solutions: the firewall whitelist and the Agora cloud proxy."
    }), `
`, _jsx(_components.p, {
      children: "The following table lists the support of Agora products for the two solutions:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Agora Products"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Firewall Whitelist"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Agora Cloud Proxy"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "RTC SDK (Native, third-party frameworks)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "RTC SDK (Web)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Signaling SDK (Native)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Signaling SDK (Web)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "On-Premise Recording SDK"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✘"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✔"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "When using the firewall whitelist, add the domains and ports to the firewall whitelist, and do not set restrictions on IP addresses."
      }), `
`, _jsxs(_components.li, {
        children: ["When using Agora cloud proxy, refer to ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/build/manage-connection-and-quality/cloud-proxy",
          children: "Connect to Agora through a restricted network"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "rtc-sdk-web",
      children: "RTC SDK (Web)"
    }), `
`, _jsx(_components.p, {
      children: "Add the following destination domains and the corresponding ports to your firewall whitelist."
    }), `
`, _jsx(_components.h4, {
      id: "domains",
      children: "Domains"
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: ".agora.io"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: ".edge.agora.io"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: ".sd-rtn.com"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: ".edge.sd-rtn.com"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: ".ap.sd-rtn.com"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: ".statscollector.sd-rtn.com"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: ".webrtc-cloud-proxy.sd-rtn.com"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: ".rtnsvc.com"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: ".edge.rtnsvc.com"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: ".rtesvc.com"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: ".edge.rtesvc.com"
            })
          })]
        })
      })
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "To improve connectivity over public networks, we recommend adding the domains listed above to your firewall allowlist."
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "ports",
      children: "Ports"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Destination ports"
          }), _jsx(_components.th, {
            children: "Port type"
          }), _jsx(_components.th, {
            children: "Operation"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "80; 443; 3433; 3478; 4700 - 5000; 5668; 5669; 6080; 6443; 8667; 9667; 30011 - 30013 (for RTMP converter)"
          }), _jsx(_components.td, {
            children: "TCP"
          }), _jsx(_components.td, {
            children: "Allow"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "3478; 4700 - 5000 (2.9.0 or later); 10000 - 65535 (before 2.9.0)"
          }), _jsx(_components.td, {
            children: "UDP"
          }), _jsx(_components.td, {
            children: "Allow"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "signaling-sdk-web",
      children: "Signaling SDK (Web)"
    }), `
`, _jsx(_components.h4, {
      id: "message-channel",
      children: "Message channel"
    }), `
`, _jsx(_components.p, {
      children: "For a message channel, you need to add the following content to the firewall whitelist:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Domains"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: ".edge.agora.io"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: ".edge.sd-rtn.com"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "web-1.ap.sd-rtn.com"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "web-2.ap.sd-rtn.com"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "web-3.ap.sd-rtn.com"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "web-4.ap.sd-rtn.com"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "ap-web-1.agora.io"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "ap-web-2.agora.io"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "ap-web-3.agora.io"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "ap-web-4.agora.io"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "webcollector-rtm.agora.io"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "logservice-rtm.agora.io"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "rtm.statscollector.sd-rtn.com"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "rtm.logservice.sd-rtn.com"
                })
              })]
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Ports"
          }), ":"]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: _jsx(_components.strong, {
                  children: "Destination port"
                })
              }), _jsx(_components.th, {
                children: _jsx(_components.strong, {
                  children: "Protocol"
                })
              }), _jsx(_components.th, {
                children: _jsx(_components.strong, {
                  children: "Operate"
                })
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "443; 9591; 9593; 27387"
              }), _jsx(_components.td, {
                children: "TCP"
              }), _jsx(_components.td, {
                children: "Allow"
              })]
            })
          })]
        }), `
`, _jsxs(CalloutContainer, {
          type: "info",
          children: [_jsx(CalloutTitle, {
            children: "Info"
          }), _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "If you are using Signaling 1.x, also add port 9601."
            })
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "stream-channel",
      children: "Stream channel"
    }), `
`, _jsx(_components.p, {
      children: "For a stream channel, you need to add the following to your firewall whitelist:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Domains"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: ".agora.io"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: ".edge.agora.io"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: ".sd-rtn.com"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: ".edge.sd-rtn.com"
                })
              })]
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Ports"
          }), ":"]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: _jsx(_components.strong, {
                  children: "Destination port"
                })
              }), _jsx(_components.th, {
                children: _jsx(_components.strong, {
                  children: "Protocol"
                })
              }), _jsx(_components.th, {
                children: _jsx(_components.strong, {
                  children: "Operate"
                })
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "80; 3433; 4700 - 5000; 5668; 5669; 6080; 6443; 8667; 9667"
              }), _jsx(_components.td, {
                children: "TCP"
              }), _jsx(_components.td, {
                children: "Allow"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "3478; 4700 - 5000"
              }), _jsx(_components.td, {
                children: "UDP"
              }), _jsx(_components.td, {
                children: "Allow"
              })]
            })]
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "signaling-sdk-native",
      children: "Signaling SDK (Native)"
    }), `
`, _jsx(_components.h4, {
      id: "message-channel-1",
      children: "Message channel"
    }), `
`, _jsx(_components.p, {
      children: "For a message channel, you need to add the following content to the firewall whitelist:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Domains"
        }), ":", `
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
              children: _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: ".agora.io"
                })
              })
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Ports"
        }), ":", `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: _jsx(_components.strong, {
                  children: "Destination port"
                })
              }), _jsx(_components.th, {
                children: _jsx(_components.strong, {
                  children: "Protocol"
                })
              }), _jsx(_components.th, {
                children: _jsx(_components.strong, {
                  children: "Operate"
                })
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "443; 7384; 8443; 9130; 9131; 9136; 9137; 9140; 9141"
              }), _jsx(_components.td, {
                children: "TCP"
              }), _jsx(_components.td, {
                children: "Allow"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "1080; 3000; 8000; 8130; 8443; 9120; 9121; 9700; 25000"
              }), _jsx(_components.td, {
                children: "UDP"
              }), _jsx(_components.td, {
                children: "Allow"
              })]
            })]
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "stream-channel-1",
      children: "Stream channel"
    }), `
`, _jsx(_components.p, {
      children: "For a stream channel, you need to add the following to your firewall whitelist:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Ports"
          }), ":"]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: _jsx(_components.strong, {
                  children: "Destination port"
                })
              }), _jsx(_components.th, {
                children: _jsx(_components.strong, {
                  children: "Protocol"
                })
              }), _jsx(_components.th, {
                children: _jsx(_components.strong, {
                  children: "Operate"
                })
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "4001 - 4150"
              }), _jsx(_components.td, {
                children: "UDP"
              }), _jsx(_components.td, {
                children: "Allow"
              })]
            })
          })]
        }), `
`, _jsxs(CalloutContainer, {
          type: "info",
          children: [_jsx(CalloutTitle, {
            children: "Info"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["The target ports listed in this section may be adjusted according to actual conditions. If you encounter any issues, contact ", _jsx(_components.a, {
                href: "mailto:rtm@agora.io",
                children: "rtm@agora.io"
              }), "."]
            })
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
