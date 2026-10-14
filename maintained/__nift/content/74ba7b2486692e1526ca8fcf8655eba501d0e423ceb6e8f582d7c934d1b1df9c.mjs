import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Firewall requirements",
  description: "Use Interactive Whiteboard in environments with restricted network access."
};
export let _markdown = `

Large organizations, such as enterprises, hospitals, universities, and banks, typically deploy firewalls to isolate internal networks from external ones, ensuring robust information security. For enterprise users needing to access the Agora Interactive Whiteboard service in such restricted environments, this guide provides the necessary steps to configure a firewall whitelist.

## Prerequisites [#prerequisites]

Before proceeding with firewall configuration, ensure that the latest version of the Whiteboard SDK is integrated into your app.

## Firewall Whitelist Configuration [#firewall-whitelist-configuration]

To enable seamless access to the Interactive Whiteboard service, add the following domains to your firewall whitelist. Additionally, ensure that port 443 is open for all listed domains to guarantee proper communication with the service.

\`\`\`text
*.whiteboard.sd-rtn.com
*.whiteboard.rtelink.com
*.netless.link
*.whiteboard.agora.io
rest-argus-ad.agoralab.co
\`\`\`

## List of domain names [#list-of-domain-names]

Following is a detailed list of domain names utilized by the Agora interactive whiteboard service.

| Domain                                   | Port               | Functional purpose                                                                              |
| :--------------------------------------- | :----------------- | :---------------------------------------------------------------------------------------------- |
| **API domains**                          |                    |                                                                                                 |
| \`api.netless.link\`                       | https/443          | - Get whiteboard configuration<br /> - Server-side RESTful requests, such as transcoding.<br /> |
| \`api.whiteboard.agora.io\`                | https/443          | - Get whiteboard configuration<br /> - Server-side RESTful requests, such as transcoding.<br /> |
| \`api.whiteboard.sd-rtn.com\`              | https/443          | - Get whiteboard configuration<br /> - Server-side RESTful requests, such as transcoding.<br /> |
| \`api.whiteboard.rtelink.com\`             | https/443          | - Get whiteboard configuration<br /> - Server-side RESTful requests, such as transcoding.<br /> |
| **US region gateways**                   |                    |                                                                                                 |
| \`gateway-us-fpa.netless.link\`            | https/443, wss/443 | United States Whiteboard Server Gateway                                                         |
| \`gateway-us-sv.netless.link\`             | https/443, wss/443 | United States Whiteboard Server Gateway                                                         |
| \`gateway-us-sv.whiteboard.rtelink.com\`   | https/443, wss/443 | United States Whiteboard Server Gateway                                                         |
| \`gateway-us-sv.whiteboard.agora.io\`      | https/443, wss/443 | United States Whiteboard Server Gateway                                                         |
| **India region gateways**                |                    |                                                                                                 |
| \`gateway-in2-mum.netless.link\`           | https/443, wss/443 | India Whiteboard Server Gateway                                                                 |
| \`gateway-in2-mum.whiteboard.agora.io\`    | https/443, wss/443 | India Whiteboard Server Gateway                                                                 |
| \`gateway-in2-mum.whiteboard.rtelink.com\` | https/443, wss/443 | India Whiteboard Server Gateway                                                                 |
| **Singapore region gateways**            |                    |                                                                                                 |
| \`gateway-sg-fpa.netless.link\`            | https/443, wss/443 | Singapore Whiteboard Server Gateway                                                             |
| \`gateway-sg.netless.link\`                | https/443, wss/443 | Singapore Whiteboard Server Gateway                                                             |
| \`gateway-sg.whiteboard.agora.io\`         | https/443, wss/443 | Singapore Whiteboard Server Gateway                                                             |
| \`gateway-sg.whiteboard.rtelink.com\`      | https/443, wss/443 | Singapore Whiteboard Server Gateway                                                             |
| **European region gateways**             |                    |                                                                                                 |
| \`gateway-eu-fpa.netless.link\`            | https/443, wss/443 | Europe Whiteboard Server Gateway                                                                |
| \`gateway-eu.netless.link\`                | https/443, wss/443 | Europe Whiteboard Server Gateway                                                                |
| \`gateway-eu.whiteboard.rtelink.com\`      | https/443, wss/443 | Europe Whiteboard Server Gateway                                                                |
| \`gateway-eu.whiteboard.agora.io\`         | https/443, wss/443 | Europe Whiteboard Server Gateway                                                                |
| **SDK and logging domains**              |                    |                                                                                                 |
| \`sdk.netless.link\`                       | https/443          | Get the whiteboard hot reload module                                                            |
| \`sdk.whiteboard.rtelink.com\`             | https/443          | Get the whiteboard hot reload module                                                            |
| \`sdk.whiteboard.sd-rtn.com\`              | https/443          | Get the whiteboard hot reload module                                                            |
| \`rest-argus-ad.agoralab.co\`              | https/443          | Client whiteboard-related log reporting                                                         |
| **Event tracking domains**               |                    |                                                                                                 |
| \`event.netless.link\`                     | https/443          | Client event tracking report                                                                    |
| \`event.whiteboard.sd-rtn.com\`            | https/443          | Client event tracking report                                                                    |
| **Recording domains**                    |                    |                                                                                                 |
| \`cdnroom-us-sv-aws.netless.link\`         | https/443          | United States whiteboard recording data request domain name                                     |
| \`cdnroom-sg.netless.link\`                | https/443          | Singapore whiteboard recording data request domain name                                         |
| \`cdnroom-in-mum.netless.link\`            | https/443          | India whiteboard recording data request domain name                                             |
| \`cdnroom-eu.netless.link\`                | https/443          | Europe whiteboard recording data request domain name                                            |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Large organizations, such as enterprises, hospitals, universities, and banks, typically deploy firewalls to isolate internal networks from external ones, ensuring robust information security. For enterprise users needing to access the Agora Interactive Whiteboard service in such restricted environments, this guide provides the necessary steps to configure a firewall whitelist."
  }, {
    heading: "prerequisites",
    content: "Before proceeding with firewall configuration, ensure that the latest version of the Whiteboard SDK is integrated into your app."
  }, {
    heading: "firewall-whitelist-configuration",
    content: "To enable seamless access to the Interactive Whiteboard service, add the following domains to your firewall whitelist. Additionally, ensure that port 443 is open for all listed domains to guarantee proper communication with the service."
  }, {
    heading: "list-of-domain-names",
    content: "Following is a detailed list of domain names utilized by the Agora interactive whiteboard service."
  }, {
    heading: "list-of-domain-names",
    content: "Domain"
  }, {
    heading: "list-of-domain-names",
    content: "Port"
  }, {
    heading: "list-of-domain-names",
    content: "Functional purpose"
  }, {
    heading: "list-of-domain-names",
    content: "**API domains**"
  }, {
    heading: "list-of-domain-names",
    content: "`api.netless.link`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443"
  }, {
    heading: "list-of-domain-names",
    content: "- Get whiteboard configuration<br /> - Server-side RESTful requests, such as transcoding.<br />"
  }, {
    heading: "list-of-domain-names",
    content: "`api.whiteboard.agora.io`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443"
  }, {
    heading: "list-of-domain-names",
    content: "- Get whiteboard configuration<br /> - Server-side RESTful requests, such as transcoding.<br />"
  }, {
    heading: "list-of-domain-names",
    content: "`api.whiteboard.sd-rtn.com`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443"
  }, {
    heading: "list-of-domain-names",
    content: "- Get whiteboard configuration<br /> - Server-side RESTful requests, such as transcoding.<br />"
  }, {
    heading: "list-of-domain-names",
    content: "`api.whiteboard.rtelink.com`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443"
  }, {
    heading: "list-of-domain-names",
    content: "- Get whiteboard configuration<br /> - Server-side RESTful requests, such as transcoding.<br />"
  }, {
    heading: "list-of-domain-names",
    content: "**US region gateways**"
  }, {
    heading: "list-of-domain-names",
    content: "`gateway-us-fpa.netless.link`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443, wss/443"
  }, {
    heading: "list-of-domain-names",
    content: "United States Whiteboard Server Gateway"
  }, {
    heading: "list-of-domain-names",
    content: "`gateway-us-sv.netless.link`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443, wss/443"
  }, {
    heading: "list-of-domain-names",
    content: "United States Whiteboard Server Gateway"
  }, {
    heading: "list-of-domain-names",
    content: "`gateway-us-sv.whiteboard.rtelink.com`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443, wss/443"
  }, {
    heading: "list-of-domain-names",
    content: "United States Whiteboard Server Gateway"
  }, {
    heading: "list-of-domain-names",
    content: "`gateway-us-sv.whiteboard.agora.io`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443, wss/443"
  }, {
    heading: "list-of-domain-names",
    content: "United States Whiteboard Server Gateway"
  }, {
    heading: "list-of-domain-names",
    content: "**India region gateways**"
  }, {
    heading: "list-of-domain-names",
    content: "`gateway-in2-mum.netless.link`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443, wss/443"
  }, {
    heading: "list-of-domain-names",
    content: "India Whiteboard Server Gateway"
  }, {
    heading: "list-of-domain-names",
    content: "`gateway-in2-mum.whiteboard.agora.io`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443, wss/443"
  }, {
    heading: "list-of-domain-names",
    content: "India Whiteboard Server Gateway"
  }, {
    heading: "list-of-domain-names",
    content: "`gateway-in2-mum.whiteboard.rtelink.com`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443, wss/443"
  }, {
    heading: "list-of-domain-names",
    content: "India Whiteboard Server Gateway"
  }, {
    heading: "list-of-domain-names",
    content: "**Singapore region gateways**"
  }, {
    heading: "list-of-domain-names",
    content: "`gateway-sg-fpa.netless.link`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443, wss/443"
  }, {
    heading: "list-of-domain-names",
    content: "Singapore Whiteboard Server Gateway"
  }, {
    heading: "list-of-domain-names",
    content: "`gateway-sg.netless.link`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443, wss/443"
  }, {
    heading: "list-of-domain-names",
    content: "Singapore Whiteboard Server Gateway"
  }, {
    heading: "list-of-domain-names",
    content: "`gateway-sg.whiteboard.agora.io`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443, wss/443"
  }, {
    heading: "list-of-domain-names",
    content: "Singapore Whiteboard Server Gateway"
  }, {
    heading: "list-of-domain-names",
    content: "`gateway-sg.whiteboard.rtelink.com`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443, wss/443"
  }, {
    heading: "list-of-domain-names",
    content: "Singapore Whiteboard Server Gateway"
  }, {
    heading: "list-of-domain-names",
    content: "**European region gateways**"
  }, {
    heading: "list-of-domain-names",
    content: "`gateway-eu-fpa.netless.link`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443, wss/443"
  }, {
    heading: "list-of-domain-names",
    content: "Europe Whiteboard Server Gateway"
  }, {
    heading: "list-of-domain-names",
    content: "`gateway-eu.netless.link`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443, wss/443"
  }, {
    heading: "list-of-domain-names",
    content: "Europe Whiteboard Server Gateway"
  }, {
    heading: "list-of-domain-names",
    content: "`gateway-eu.whiteboard.rtelink.com`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443, wss/443"
  }, {
    heading: "list-of-domain-names",
    content: "Europe Whiteboard Server Gateway"
  }, {
    heading: "list-of-domain-names",
    content: "`gateway-eu.whiteboard.agora.io`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443, wss/443"
  }, {
    heading: "list-of-domain-names",
    content: "Europe Whiteboard Server Gateway"
  }, {
    heading: "list-of-domain-names",
    content: "**SDK and logging domains**"
  }, {
    heading: "list-of-domain-names",
    content: "`sdk.netless.link`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443"
  }, {
    heading: "list-of-domain-names",
    content: "Get the whiteboard hot reload module"
  }, {
    heading: "list-of-domain-names",
    content: "`sdk.whiteboard.rtelink.com`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443"
  }, {
    heading: "list-of-domain-names",
    content: "Get the whiteboard hot reload module"
  }, {
    heading: "list-of-domain-names",
    content: "`sdk.whiteboard.sd-rtn.com`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443"
  }, {
    heading: "list-of-domain-names",
    content: "Get the whiteboard hot reload module"
  }, {
    heading: "list-of-domain-names",
    content: "`rest-argus-ad.agoralab.co`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443"
  }, {
    heading: "list-of-domain-names",
    content: "Client whiteboard-related log reporting"
  }, {
    heading: "list-of-domain-names",
    content: "**Event tracking domains**"
  }, {
    heading: "list-of-domain-names",
    content: "`event.netless.link`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443"
  }, {
    heading: "list-of-domain-names",
    content: "Client event tracking report"
  }, {
    heading: "list-of-domain-names",
    content: "`event.whiteboard.sd-rtn.com`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443"
  }, {
    heading: "list-of-domain-names",
    content: "Client event tracking report"
  }, {
    heading: "list-of-domain-names",
    content: "**Recording domains**"
  }, {
    heading: "list-of-domain-names",
    content: "`cdnroom-us-sv-aws.netless.link`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443"
  }, {
    heading: "list-of-domain-names",
    content: "United States whiteboard recording data request domain name"
  }, {
    heading: "list-of-domain-names",
    content: "`cdnroom-sg.netless.link`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443"
  }, {
    heading: "list-of-domain-names",
    content: "Singapore whiteboard recording data request domain name"
  }, {
    heading: "list-of-domain-names",
    content: "`cdnroom-in-mum.netless.link`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443"
  }, {
    heading: "list-of-domain-names",
    content: "India whiteboard recording data request domain name"
  }, {
    heading: "list-of-domain-names",
    content: "`cdnroom-eu.netless.link`"
  }, {
    heading: "list-of-domain-names",
    content: "https/443"
  }, {
    heading: "list-of-domain-names",
    content: "Europe whiteboard recording data request domain name"
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "firewall-whitelist-configuration",
    content: "Firewall Whitelist Configuration"
  }, {
    id: "list-of-domain-names",
    content: "List of domain names"
  }]
};
export let toc = [{
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#firewall-whitelist-configuration",
  title: _jsx(_Fragment, {
    children: "Firewall Whitelist Configuration"
  })
}, {
  depth: 2,
  url: "#list-of-domain-names",
  title: _jsx(_Fragment, {
    children: "List of domain names"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
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
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Large organizations, such as enterprises, hospitals, universities, and banks, typically deploy firewalls to isolate internal networks from external ones, ensuring robust information security. For enterprise users needing to access the Agora Interactive Whiteboard service in such restricted environments, this guide provides the necessary steps to configure a firewall whitelist."
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "Before proceeding with firewall configuration, ensure that the latest version of the Whiteboard SDK is integrated into your app."
    }), `
`, _jsx(_components.h2, {
      id: "firewall-whitelist-configuration",
      children: "Firewall Whitelist Configuration"
    }), `
`, _jsx(_components.p, {
      children: "To enable seamless access to the Interactive Whiteboard service, add the following domains to your firewall whitelist. Additionally, ensure that port 443 is open for all listed domains to guarantee proper communication with the service."
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".whiteboard.sd-rtn.com"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".whiteboard.rtelink.com"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".netless.link"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ".whiteboard.agora.io"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "rest-argus-ad.agoralab.co"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "list-of-domain-names",
      children: "List of domain names"
    }), `
`, _jsx(_components.p, {
      children: "Following is a detailed list of domain names utilized by the Agora interactive whiteboard service."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Domain"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Port"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Functional purpose"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "API domains"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api.netless.link"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- Get whiteboard configuration", " - Server-side RESTful requests, such as transcoding."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api.whiteboard.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- Get whiteboard configuration", " - Server-side RESTful requests, such as transcoding."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api.whiteboard.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- Get whiteboard configuration", " - Server-side RESTful requests, such as transcoding."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "api.whiteboard.rtelink.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- Get whiteboard configuration", " - Server-side RESTful requests, such as transcoding."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "US region gateways"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "gateway-us-fpa.netless.link"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443, wss/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "United States Whiteboard Server Gateway"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "gateway-us-sv.netless.link"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443, wss/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "United States Whiteboard Server Gateway"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "gateway-us-sv.whiteboard.rtelink.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443, wss/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "United States Whiteboard Server Gateway"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "gateway-us-sv.whiteboard.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443, wss/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "United States Whiteboard Server Gateway"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "India region gateways"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "gateway-in2-mum.netless.link"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443, wss/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "India Whiteboard Server Gateway"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "gateway-in2-mum.whiteboard.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443, wss/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "India Whiteboard Server Gateway"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "gateway-in2-mum.whiteboard.rtelink.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443, wss/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "India Whiteboard Server Gateway"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "Singapore region gateways"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "gateway-sg-fpa.netless.link"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443, wss/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Singapore Whiteboard Server Gateway"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "gateway-sg.netless.link"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443, wss/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Singapore Whiteboard Server Gateway"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "gateway-sg.whiteboard.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443, wss/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Singapore Whiteboard Server Gateway"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "gateway-sg.whiteboard.rtelink.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443, wss/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Singapore Whiteboard Server Gateway"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "European region gateways"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "gateway-eu-fpa.netless.link"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443, wss/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Europe Whiteboard Server Gateway"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "gateway-eu.netless.link"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443, wss/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Europe Whiteboard Server Gateway"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "gateway-eu.whiteboard.rtelink.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443, wss/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Europe Whiteboard Server Gateway"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "gateway-eu.whiteboard.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443, wss/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Europe Whiteboard Server Gateway"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "SDK and logging domains"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "sdk.netless.link"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get the whiteboard hot reload module"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "sdk.whiteboard.rtelink.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get the whiteboard hot reload module"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "sdk.whiteboard.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Get the whiteboard hot reload module"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "rest-argus-ad.agoralab.co"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Client whiteboard-related log reporting"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "Event tracking domains"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "event.netless.link"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Client event tracking report"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "event.whiteboard.sd-rtn.com"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Client event tracking report"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "Recording domains"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "cdnroom-us-sv-aws.netless.link"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "United States whiteboard recording data request domain name"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "cdnroom-sg.netless.link"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Singapore whiteboard recording data request domain name"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "cdnroom-in-mum.netless.link"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "India whiteboard recording data request domain name"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "cdnroom-eu.netless.link"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "https/443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Europe whiteboard recording data request domain name"
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
