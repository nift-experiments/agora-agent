import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "TCP/TLS IP allowlist",
  description: "Describes the TCP/TLS IP allowlist function"
};
export let _markdown = `

For the communication between end users behind enterprise firewalls, Agora Chat allows all communications to always use TCP/TLS 443 with TLS headers. Agora Chat supports the IP allowlist function. If you have a strict security policy for end users and allow only certain absolute domain names or specified IP addresses/port ranges to communicate through TCP/TLS 443, you can add the allowed IP addresses or domain names to the IP allowlist. To ensure smooth communication via Agora Chat, you must add the IP addresses and ports of data centers of Agora Chat to the firewall allowlist.

### Add IP addresses and ports of data centers of Agora Chat to the firewall allowlist [#add-ip-addresses-and-ports-of-data-centers-of-agora-chat-to-the-firewall-allowlist]

1. Prepare the development environment. See [SDK quickstart](../../get-started-sdk) for your platform.

2. Add the IP addresses and ports of Agora Chat access points to the firewall allowlist.

3. Test message sending and receiving in the development environment.

### List of domain names of Agora Chat data centers [#list-of-domain-names-of-agora-chat-data-centers]

For each Agora Chat data center, for example, Singapore, virginia US, or Frankfurt Germany, Agora Chat provides fully qualified domain names for the access points.

Agora fully controls the servers and the traffic on the IP addresses of the access points. The IP addresses are subject to change and any changes will be announced with a minimum of a 3-month notice to you, ensuring that you have enough time to update their firewalls to trust these IP addresses.

**virginia, US**

| Domain Name                                                            | IP Address                                                                                                                                                                                                                                                                                                           | Port                                                                  | Platform    |
| :--------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------- | :---------- |
| [msync-api-41.chat.agora.io](http://msync-api-41.chat.agora.io/)       | 3.33.220.151, 15.197.222.199                                                                                                                                                                                                                                                                                         | 443                                                                   | Client SDKs |
| [msync-im-41-tls.chat.agora.io](http://msync-im-41-tls.chat.agora.io/) | 52.223.55.237, 35.71.161.179                                                                                                                                                                                                                                                                                         | 443                                                                   | Client SDKs |
| [a41.chat.agora.io](http://a41.chat.agora.io/)                         | 99.83.189.183, 75.2.75.207                                                                                                                                                                                                                                                                                           | 443                                                                   | RESTful API |
| ap-america.agora.io                                                    | 106.14.12.130, 47.107.39.93, 118.190.148.38, 112.126.96.46, 52.58.56.244, 35.178.208.187, 52.52.84.170, 50.17.126.121, 3.0.163.78, 52.194.158.59, 54.65.86.72, 13.127.149.196, 15.206.47.129, 123.56.235.221, 101.132.108.165, 52.28.239.238, 3.9.120.239, 52.54.85.111, 184.72.18.217, 13.250.89.184, 18.176.162.64 | UDP port: 8443, 5888-5889, 4000-4100 and 8130; UDP port: 443 and 8443 | Client SDKs |

**Singapore**

| Domain Name                                                            | IP Address                                                                                                                                                                                                                                                                                                           | Port                                                                  | Platform    |
| :--------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------- | :---------- |
| [msync-api-61.chat.agora.io](http://msync-api-61.chat.agora.io/)       | 35.71.135.178, 52.223.50.200                                                                                                                                                                                                                                                                                         | 443                                                                   | Client SDKs |
| [msync-im-61-tls.chat.agora.io](http://msync-im-61-tls.chat.agora.io/) | 35.71.183.128, 52.223.36.218                                                                                                                                                                                                                                                                                         | 443                                                                   | Client SDKs |
| [a61.chat.agora.io](http://a61.chat.agora.io/)                         | 52.223.32.250, 35.71.139.186                                                                                                                                                                                                                                                                                         | 443                                                                   | RESTful API |
| ap-asia.agora.io                                                       | 106.14.12.130, 47.107.39.93, 118.190.148.38, 112.126.96.46, 52.58.56.244, 35.178.208.187, 52.52.84.170, 50.17.126.121, 3.0.163.78, 52.194.158.59, 54.65.86.72, 13.127.149.196, 15.206.47.129, 123.56.235.221, 101.132.108.165, 52.28.239.238, 3.9.120.239, 52.54.85.111, 184.72.18.217, 13.250.89.184, 18.176.162.64 | UDP port: 8443, 5888-5889, 4000-4100 and 8130; TCP port: 443 and 8443 | Client SDKs |

**Frankfurt Germany**

| Domain Name                                                            | IP Address                                                                                                                                                                                                                                                                                                           | Port                                                                  | Platform    |
| :--------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------- | :---------- |
| [msync-api-71.chat.agora.io](http://msync-api-71.chat.agora.io/)       | 75.2.86.219, 99.83.214.138                                                                                                                                                                                                                                                                                           | 443                                                                   | Client SDKs |
| [msync-im-71-tls.chat.agora.io](http://msync-im-71-tls.chat.agora.io/) | 75.2.56.250, 99.83.180.145                                                                                                                                                                                                                                                                                           | 443                                                                   | Client SDKs |
| [a71.chat.agora.io](http://a71.chat.agora.io/)                         | 3.33.221.135, 15.197.253.209                                                                                                                                                                                                                                                                                         | 443                                                                   | RESTful API |
| ap-europe.agora.io                                                     | 106.14.12.130, 47.107.39.93, 118.190.148.38, 112.126.96.46, 52.58.56.244, 35.178.208.187, 52.52.84.170, 50.17.126.121, 3.0.163.78, 52.194.158.59, 54.65.86.72, 13.127.149.196, 15.206.47.129, 123.56.235.221, 101.132.108.165, 52.28.239.238, 3.9.120.239, 52.54.85.111, 184.72.18.217, 13.250.89.184, 18.176.162.64 | UDP port: 8443, 5888-5889, 4000-4100 and 8130; TCP port: 443 and 8443 | Client SDKs |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "For the communication between end users behind enterprise firewalls, Agora Chat allows all communications to always use TCP/TLS 443 with TLS headers. Agora Chat supports the IP allowlist function. If you have a strict security policy for end users and allow only certain absolute domain names or specified IP addresses/port ranges to communicate through TCP/TLS 443, you can add the allowed IP addresses or domain names to the IP allowlist. To ensure smooth communication via Agora Chat, you must add the IP addresses and ports of data centers of Agora Chat to the firewall allowlist."
  }, {
    heading: "add-ip-addresses-and-ports-of-data-centers-of-agora-chat-to-the-firewall-allowlist",
    content: "Prepare the development environment. See SDK quickstart for your platform."
  }, {
    heading: "add-ip-addresses-and-ports-of-data-centers-of-agora-chat-to-the-firewall-allowlist",
    content: "Add the IP addresses and ports of Agora Chat access points to the firewall allowlist."
  }, {
    heading: "add-ip-addresses-and-ports-of-data-centers-of-agora-chat-to-the-firewall-allowlist",
    content: "Test message sending and receiving in the development environment."
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "For each Agora Chat data center, for example, Singapore, virginia US, or Frankfurt Germany, Agora Chat provides fully qualified domain names for the access points."
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "Agora fully controls the servers and the traffic on the IP addresses of the access points. The IP addresses are subject to change and any changes will be announced with a minimum of a 3-month notice to you, ensuring that you have enough time to update their firewalls to trust these IP addresses."
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "**virginia, US**"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "Domain Name"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "IP Address"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "Port"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "Platform"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "msync-api-41.chat.agora.io"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "3.33.220.151, 15.197.222.199"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "443"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "Client SDKs"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "msync-im-41-tls.chat.agora.io"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "52.223.55.237, 35.71.161.179"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "443"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "Client SDKs"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "a41.chat.agora.io"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "99.83.189.183, 75.2.75.207"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "443"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "RESTful API"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "ap-america.agora.io"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "106.14.12.130, 47.107.39.93, 118.190.148.38, 112.126.96.46, 52.58.56.244, 35.178.208.187, 52.52.84.170, 50.17.126.121, 3.0.163.78, 52.194.158.59, 54.65.86.72, 13.127.149.196, 15.206.47.129, 123.56.235.221, 101.132.108.165, 52.28.239.238, 3.9.120.239, 52.54.85.111, 184.72.18.217, 13.250.89.184, 18.176.162.64"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "UDP port: 8443, 5888-5889, 4000-4100 and 8130; UDP port: 443 and 8443"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "Client SDKs"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "**Singapore**"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "Domain Name"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "IP Address"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "Port"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "Platform"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "msync-api-61.chat.agora.io"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "35.71.135.178, 52.223.50.200"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "443"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "Client SDKs"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "msync-im-61-tls.chat.agora.io"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "35.71.183.128, 52.223.36.218"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "443"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "Client SDKs"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "a61.chat.agora.io"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "52.223.32.250, 35.71.139.186"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "443"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "RESTful API"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "ap-asia.agora.io"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "106.14.12.130, 47.107.39.93, 118.190.148.38, 112.126.96.46, 52.58.56.244, 35.178.208.187, 52.52.84.170, 50.17.126.121, 3.0.163.78, 52.194.158.59, 54.65.86.72, 13.127.149.196, 15.206.47.129, 123.56.235.221, 101.132.108.165, 52.28.239.238, 3.9.120.239, 52.54.85.111, 184.72.18.217, 13.250.89.184, 18.176.162.64"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "UDP port: 8443, 5888-5889, 4000-4100 and 8130; TCP port: 443 and 8443"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "Client SDKs"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "**Frankfurt Germany**"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "Domain Name"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "IP Address"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "Port"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "Platform"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "msync-api-71.chat.agora.io"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "75.2.86.219, 99.83.214.138"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "443"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "Client SDKs"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "msync-im-71-tls.chat.agora.io"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "75.2.56.250, 99.83.180.145"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "443"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "Client SDKs"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "a71.chat.agora.io"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "3.33.221.135, 15.197.253.209"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "443"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "RESTful API"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "ap-europe.agora.io"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "106.14.12.130, 47.107.39.93, 118.190.148.38, 112.126.96.46, 52.58.56.244, 35.178.208.187, 52.52.84.170, 50.17.126.121, 3.0.163.78, 52.194.158.59, 54.65.86.72, 13.127.149.196, 15.206.47.129, 123.56.235.221, 101.132.108.165, 52.28.239.238, 3.9.120.239, 52.54.85.111, 184.72.18.217, 13.250.89.184, 18.176.162.64"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "UDP port: 8443, 5888-5889, 4000-4100 and 8130; TCP port: 443 and 8443"
  }, {
    heading: "list-of-domain-names-of-agora-chat-data-centers",
    content: "Client SDKs"
  }],
  headings: [{
    id: "add-ip-addresses-and-ports-of-data-centers-of-agora-chat-to-the-firewall-allowlist",
    content: "Add IP addresses and ports of data centers of Agora Chat to the firewall allowlist"
  }, {
    id: "list-of-domain-names-of-agora-chat-data-centers",
    content: "List of domain names of Agora Chat data centers"
  }]
};
export let toc = [{
  depth: 3,
  url: "#add-ip-addresses-and-ports-of-data-centers-of-agora-chat-to-the-firewall-allowlist",
  title: _jsx(_Fragment, {
    children: "Add IP addresses and ports of data centers of Agora Chat to the firewall allowlist"
  })
}, {
  depth: 3,
  url: "#list-of-domain-names-of-agora-chat-data-centers",
  title: _jsx(_Fragment, {
    children: "List of domain names of Agora Chat data centers"
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
      children: "For the communication between end users behind enterprise firewalls, Agora Chat allows all communications to always use TCP/TLS 443 with TLS headers. Agora Chat supports the IP allowlist function. If you have a strict security policy for end users and allow only certain absolute domain names or specified IP addresses/port ranges to communicate through TCP/TLS 443, you can add the allowed IP addresses or domain names to the IP allowlist. To ensure smooth communication via Agora Chat, you must add the IP addresses and ports of data centers of Agora Chat to the firewall allowlist."
    }), `
`, _jsx(_components.h3, {
      id: "add-ip-addresses-and-ports-of-data-centers-of-agora-chat-to-the-firewall-allowlist",
      children: "Add IP addresses and ports of data centers of Agora Chat to the firewall allowlist"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Prepare the development environment. See ", _jsx(_components.a, {
            href: "../../get-started-sdk",
            children: "SDK quickstart"
          }), " for your platform."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Add the IP addresses and ports of Agora Chat access points to the firewall allowlist."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Test message sending and receiving in the development environment."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "list-of-domain-names-of-agora-chat-data-centers",
      children: "List of domain names of Agora Chat data centers"
    }), `
`, _jsx(_components.p, {
      children: "For each Agora Chat data center, for example, Singapore, virginia US, or Frankfurt Germany, Agora Chat provides fully qualified domain names for the access points."
    }), `
`, _jsx(_components.p, {
      children: "Agora fully controls the servers and the traffic on the IP addresses of the access points. The IP addresses are subject to change and any changes will be announced with a minimum of a 3-month notice to you, ensuring that you have enough time to update their firewalls to trust these IP addresses."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "virginia, US"
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Domain Name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "IP Address"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Port"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Platform"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "http://msync-api-41.chat.agora.io/",
              children: "msync-api-41.chat.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "3.33.220.151, 15.197.222.199"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Client SDKs"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "http://msync-im-41-tls.chat.agora.io/",
              children: "msync-im-41-tls.chat.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "52.223.55.237, 35.71.161.179"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Client SDKs"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "http://a41.chat.agora.io/",
              children: "a41.chat.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "99.83.189.183, 75.2.75.207"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "RESTful API"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "ap-america.agora.io"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "106.14.12.130, 47.107.39.93, 118.190.148.38, 112.126.96.46, 52.58.56.244, 35.178.208.187, 52.52.84.170, 50.17.126.121, 3.0.163.78, 52.194.158.59, 54.65.86.72, 13.127.149.196, 15.206.47.129, 123.56.235.221, 101.132.108.165, 52.28.239.238, 3.9.120.239, 52.54.85.111, 184.72.18.217, 13.250.89.184, 18.176.162.64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "UDP port: 8443, 5888-5889, 4000-4100 and 8130; UDP port: 443 and 8443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Client SDKs"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Singapore"
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Domain Name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "IP Address"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Port"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Platform"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "http://msync-api-61.chat.agora.io/",
              children: "msync-api-61.chat.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "35.71.135.178, 52.223.50.200"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Client SDKs"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "http://msync-im-61-tls.chat.agora.io/",
              children: "msync-im-61-tls.chat.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "35.71.183.128, 52.223.36.218"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Client SDKs"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "http://a61.chat.agora.io/",
              children: "a61.chat.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "52.223.32.250, 35.71.139.186"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "RESTful API"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "ap-asia.agora.io"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "106.14.12.130, 47.107.39.93, 118.190.148.38, 112.126.96.46, 52.58.56.244, 35.178.208.187, 52.52.84.170, 50.17.126.121, 3.0.163.78, 52.194.158.59, 54.65.86.72, 13.127.149.196, 15.206.47.129, 123.56.235.221, 101.132.108.165, 52.28.239.238, 3.9.120.239, 52.54.85.111, 184.72.18.217, 13.250.89.184, 18.176.162.64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "UDP port: 8443, 5888-5889, 4000-4100 and 8130; TCP port: 443 and 8443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Client SDKs"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Frankfurt Germany"
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Domain Name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "IP Address"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Port"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Platform"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "http://msync-api-71.chat.agora.io/",
              children: "msync-api-71.chat.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "75.2.86.219, 99.83.214.138"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Client SDKs"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "http://msync-im-71-tls.chat.agora.io/",
              children: "msync-im-71-tls.chat.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "75.2.56.250, 99.83.180.145"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Client SDKs"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "http://a71.chat.agora.io/",
              children: "a71.chat.agora.io"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "3.33.221.135, 15.197.253.209"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "RESTful API"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "ap-europe.agora.io"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "106.14.12.130, 47.107.39.93, 118.190.148.38, 112.126.96.46, 52.58.56.244, 35.178.208.187, 52.52.84.170, 50.17.126.121, 3.0.163.78, 52.194.158.59, 54.65.86.72, 13.127.149.196, 15.206.47.129, 123.56.235.221, 101.132.108.165, 52.28.239.238, 3.9.120.239, 52.54.85.111, 184.72.18.217, 13.250.89.184, 18.176.162.64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "UDP port: 8443, 5888-5889, 4000-4100 and 8130; TCP port: 443 and 8443"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Client SDKs"
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
