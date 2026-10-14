import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Cloud proxy",
  description: "To ensure that enterprise users can connect to Agora's services through a firewall, Agora supports setting up a cloud proxy."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="linux-cpp" platforms="[&#x22;linux-cpp&#x22;,&#x22;linux-java&#x22;]" showTabs="true">
  <_PlatformPanel platform="linux-cpp">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="linux-cpp" />

    Large organizations commonly deploy firewalls to meet their stringent security requirements. To ensure uninterrupted access to Agora services for users behind firewalls, Agora offers a firewall allowlist and Cloud Proxy services.

    To enable SDK use in network-restricted environments, administrators can add specific IP addresses and ports to the firewall allowlist. Developers then configure the Cloud Proxy service by calling the appropriate APIs.

    ## Understand the tech [#understand-the-tech]

    Cloud Proxy works as follows:

    1. On-Premise Recording SDK initiates a request to Cloud Proxy.
    2. Cloud Proxy returns the corresponding proxy information.
    3. The Agora SDK sends data to Cloud Proxy, which forwards it to the Agora SDRTN®.
    4. The Agora SDRTN® sends the response back to Cloud Proxy, which then returns it to the SDK.

    <details>
      <summary>
        Cloud proxy workflow
      </summary>

      ![Cloud Proxy workflow for On-Premise Recording](https://assets-docs.agora.io/images/video-sdk/cloud-proxy-tech.svg)
    </details>

    ## Prerequisites [#prerequisites]

    Before you begin, complete the [Quickstart](/en/realtime-media/on-premise-recording/quickstart) to integrate the On-Premise Recording SDK and set up basic recording functionality.

    ## Implement Cloud Proxy [#implement-cloud-proxy]

    To implement Cloud Proxy in your app, follow these steps:

    1. **Request access to Cloud Proxy**

       Contact [Agora support](mailto\\:support@agora.io) and provide the following information:

       * App ID
       * Region where you want to use Cloud Proxy
       * Expected concurrency scale
       * Network operator and other relevant details

    2. **Allow traffic through the firewall**

       After your request is approved, Agora provides a list of IP addresses and ports. Add these to your firewall allowlist to enable communication through Cloud Proxy.

    3. **Enable the cloud proxy in your code**

       Set the private parameter \`rtc.enable_proxy\` to \`true\`.

       \`\`\`cpp
       auto agoraParameter = service->getAgoraParameter();
       agoraParameter->setBool("rtc.enable_proxy", true);
       \`\`\`

    4. **Test your setup**

       Record audio and video to confirm the proxy configuration is working as expected.

    5. **Disable cloud proxy**

       To stop using Cloud Proxy, set \`rtc.enable_proxy\` to \`false\`.

    ## Reference [#reference]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API references [#api-references]

    * [\`getAgoraParameter\`](/en/api-reference/api-ref/on-premise-recording#getagoraparameter)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="linux-java">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="linux-java" />

    Large organizations commonly deploy firewalls to meet their stringent security requirements. To ensure uninterrupted access to Agora services for users behind firewalls, Agora offers a firewall allowlist and Cloud Proxy services.

    To enable SDK use in network-restricted environments, administrators can add specific IP addresses and ports to the firewall allowlist. Developers then configure the Cloud Proxy service by calling the appropriate APIs.

    ## Understand the tech [#understand-the-tech-1]

    Cloud Proxy works as follows:

    1. On-Premise Recording SDK initiates a request to Cloud Proxy.
    2. Cloud Proxy returns the corresponding proxy information.
    3. The Agora SDK sends data to Cloud Proxy, which forwards it to the Agora SDRTN®.
    4. The Agora SDRTN® sends the response back to Cloud Proxy, which then returns it to the SDK.

    <details>
      <summary>
        Cloud proxy workflow
      </summary>

      ![Cloud Proxy workflow for On-Premise Recording](https://assets-docs.agora.io/images/video-sdk/cloud-proxy-tech.svg)
    </details>

    ## Prerequisites [#prerequisites-1]

    Before you begin, complete the [Quickstart](/en/realtime-media/on-premise-recording/quickstart) to integrate the On-Premise Recording SDK and set up basic recording functionality.

    ## Implement Cloud Proxy [#implement-cloud-proxy-1]

    To implement Cloud Proxy in your app, follow these steps:

    1. **Request access to Cloud Proxy**

       Contact [Agora support](mailto\\:support@agora.io) and provide the following information:

       * App ID
       * Region where you want to use Cloud Proxy
       * Expected concurrency scale
       * Network operator and other relevant details

    2. **Allow traffic through the firewall**

       After your request is approved, Agora provides a list of IP addresses and ports. Add these to your firewall allowlist to enable communication through Cloud Proxy.

    3. **Enable the cloud proxy in your code**

       Set the private parameter \`rtc.enable_proxy\` to \`true\`.

       \`\`\`java
       AgoraParameter parameter = agoraService.getAgoraParameter();
       parameter.setBool("rtc.enable_proxy", true);
       \`\`\`

    4. **Test your setup**

       Record audio and video to confirm the proxy configuration is working as expected.

    5. **Disable cloud proxy**

       To stop using Cloud Proxy, set \`rtc.enable_proxy\` to \`false\`.

    ## Reference [#reference-1]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API references [#api-references-1]

    * [\`getAgoraParameter\`](/en/api-reference/api-ref/on-premise-recording#getagoraparameter)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Large organizations commonly deploy firewalls to meet their stringent security requirements. To ensure uninterrupted access to Agora services for users behind firewalls, Agora offers a firewall allowlist and Cloud Proxy services."
  }, {
    heading: undefined,
    content: "To enable SDK use in network-restricted environments, administrators can add specific IP addresses and ports to the firewall allowlist. Developers then configure the Cloud Proxy service by calling the appropriate APIs."
  }, {
    heading: "understand-the-tech",
    content: "Cloud Proxy works as follows:"
  }, {
    heading: "understand-the-tech",
    content: "On-Premise Recording SDK initiates a request to Cloud Proxy."
  }, {
    heading: "understand-the-tech",
    content: "Cloud Proxy returns the corresponding proxy information."
  }, {
    heading: "understand-the-tech",
    content: "The Agora SDK sends data to Cloud Proxy, which forwards it to the Agora SDRTN®."
  }, {
    heading: "understand-the-tech",
    content: "The Agora SDRTN® sends the response back to Cloud Proxy, which then returns it to the SDK."
  }, {
    heading: "prerequisites",
    content: "Before you begin, complete the Quickstart to integrate the On-Premise Recording SDK and set up basic recording functionality."
  }, {
    heading: "implement-cloud-proxy",
    content: "To implement Cloud Proxy in your app, follow these steps:"
  }, {
    heading: "implement-cloud-proxy",
    content: "**Request access to Cloud Proxy**"
  }, {
    heading: "implement-cloud-proxy",
    content: "Contact Agora support and provide the following information:"
  }, {
    heading: "implement-cloud-proxy",
    content: "App ID"
  }, {
    heading: "implement-cloud-proxy",
    content: "Region where you want to use Cloud Proxy"
  }, {
    heading: "implement-cloud-proxy",
    content: "Expected concurrency scale"
  }, {
    heading: "implement-cloud-proxy",
    content: "Network operator and other relevant details"
  }, {
    heading: "implement-cloud-proxy",
    content: "**Allow traffic through the firewall**"
  }, {
    heading: "implement-cloud-proxy",
    content: "After your request is approved, Agora provides a list of IP addresses and ports. Add these to your firewall allowlist to enable communication through Cloud Proxy."
  }, {
    heading: "implement-cloud-proxy",
    content: "**Enable the cloud proxy in your code**"
  }, {
    heading: "implement-cloud-proxy",
    content: "Set the private parameter `rtc.enable_proxy` to `true`."
  }, {
    heading: "implement-cloud-proxy",
    content: "**Test your setup**"
  }, {
    heading: "implement-cloud-proxy",
    content: "Record audio and video to confirm the proxy configuration is working as expected."
  }, {
    heading: "implement-cloud-proxy",
    content: "**Disable cloud proxy**"
  }, {
    heading: "implement-cloud-proxy",
    content: "To stop using Cloud Proxy, set `rtc.enable_proxy` to `false`."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-references",
    content: "`getAgoraParameter`"
  }, {
    heading: "api-references",
    content: "Large organizations commonly deploy firewalls to meet their stringent security requirements. To ensure uninterrupted access to Agora services for users behind firewalls, Agora offers a firewall allowlist and Cloud Proxy services."
  }, {
    heading: "api-references",
    content: "To enable SDK use in network-restricted environments, administrators can add specific IP addresses and ports to the firewall allowlist. Developers then configure the Cloud Proxy service by calling the appropriate APIs."
  }, {
    heading: "understand-the-tech-1",
    content: "Cloud Proxy works as follows:"
  }, {
    heading: "understand-the-tech-1",
    content: "On-Premise Recording SDK initiates a request to Cloud Proxy."
  }, {
    heading: "understand-the-tech-1",
    content: "Cloud Proxy returns the corresponding proxy information."
  }, {
    heading: "understand-the-tech-1",
    content: "The Agora SDK sends data to Cloud Proxy, which forwards it to the Agora SDRTN®."
  }, {
    heading: "understand-the-tech-1",
    content: "The Agora SDRTN® sends the response back to Cloud Proxy, which then returns it to the SDK."
  }, {
    heading: "prerequisites-1",
    content: "Before you begin, complete the Quickstart to integrate the On-Premise Recording SDK and set up basic recording functionality."
  }, {
    heading: "implement-cloud-proxy-1",
    content: "To implement Cloud Proxy in your app, follow these steps:"
  }, {
    heading: "implement-cloud-proxy-1",
    content: "**Request access to Cloud Proxy**"
  }, {
    heading: "implement-cloud-proxy-1",
    content: "Contact Agora support and provide the following information:"
  }, {
    heading: "implement-cloud-proxy-1",
    content: "App ID"
  }, {
    heading: "implement-cloud-proxy-1",
    content: "Region where you want to use Cloud Proxy"
  }, {
    heading: "implement-cloud-proxy-1",
    content: "Expected concurrency scale"
  }, {
    heading: "implement-cloud-proxy-1",
    content: "Network operator and other relevant details"
  }, {
    heading: "implement-cloud-proxy-1",
    content: "**Allow traffic through the firewall**"
  }, {
    heading: "implement-cloud-proxy-1",
    content: "After your request is approved, Agora provides a list of IP addresses and ports. Add these to your firewall allowlist to enable communication through Cloud Proxy."
  }, {
    heading: "implement-cloud-proxy-1",
    content: "**Enable the cloud proxy in your code**"
  }, {
    heading: "implement-cloud-proxy-1",
    content: "Set the private parameter `rtc.enable_proxy` to `true`."
  }, {
    heading: "implement-cloud-proxy-1",
    content: "**Test your setup**"
  }, {
    heading: "implement-cloud-proxy-1",
    content: "Record audio and video to confirm the proxy configuration is working as expected."
  }, {
    heading: "implement-cloud-proxy-1",
    content: "**Disable cloud proxy**"
  }, {
    heading: "implement-cloud-proxy-1",
    content: "To stop using Cloud Proxy, set `rtc.enable_proxy` to `false`."
  }, {
    heading: "reference-1",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-references-1",
    content: "`getAgoraParameter`"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implement-cloud-proxy",
    content: "Implement Cloud Proxy"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "api-references",
    content: "API references"
  }, {
    id: "understand-the-tech-1",
    content: "Understand the tech"
  }, {
    id: "prerequisites-1",
    content: "Prerequisites"
  }, {
    id: "implement-cloud-proxy-1",
    content: "Implement Cloud Proxy"
  }, {
    id: "reference-1",
    content: "Reference"
  }, {
    id: "api-references-1",
    content: "API references"
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
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-cloud-proxy",
  title: _jsx(_Fragment, {
    children: "Implement Cloud Proxy"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-references",
  title: _jsx(_Fragment, {
    children: "API references"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-1",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-1",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implement-cloud-proxy-1",
  title: _jsx(_Fragment, {
    children: "Implement Cloud Proxy"
  })
}, {
  depth: 2,
  url: "#reference-1",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-references-1",
  title: _jsx(_Fragment, {
    children: "API references"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_PlatformTabsGroup, {
    groupMode: "structured",
    canonicalPlatform: "linux-cpp",
    platforms: '["linux-cpp","linux-java"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "linux-cpp",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "linux-cpp",
        platform: "linux-cpp"
      }), _jsx(_components.p, {
        children: "Large organizations commonly deploy firewalls to meet their stringent security requirements. To ensure uninterrupted access to Agora services for users behind firewalls, Agora offers a firewall allowlist and Cloud Proxy services."
      }), _jsx(_components.p, {
        children: "To enable SDK use in network-restricted environments, administrators can add specific IP addresses and ports to the firewall allowlist. Developers then configure the Cloud Proxy service by calling the appropriate APIs."
      }), _jsx(_components.h2, {
        id: "understand-the-tech",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "Cloud Proxy works as follows:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsx(_components.li, {
          children: "On-Premise Recording SDK initiates a request to Cloud Proxy."
        }), `
`, _jsx(_components.li, {
          children: "Cloud Proxy returns the corresponding proxy information."
        }), `
`, _jsx(_components.li, {
          children: "The Agora SDK sends data to Cloud Proxy, which forwards it to the Agora SDRTN®."
        }), `
`, _jsx(_components.li, {
          children: "The Agora SDRTN® sends the response back to Cloud Proxy, which then returns it to the SDK."
        }), `
`]
      }), _jsxs("details", {
        children: [_jsx("summary", {
          children: "Cloud proxy workflow"
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/cloud-proxy-tech.svg",
            alt: "Cloud Proxy workflow for On-Premise Recording"
          })
        })]
      }), _jsx(_components.h2, {
        id: "prerequisites",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Before you begin, complete the ", _jsx(_components.a, {
          href: "/en/realtime-media/on-premise-recording/quickstart",
          children: "Quickstart"
        }), " to integrate the On-Premise Recording SDK and set up basic recording functionality."]
      }), _jsx(_components.h2, {
        id: "implement-cloud-proxy",
        children: "Implement Cloud Proxy"
      }), _jsx(_components.p, {
        children: "To implement Cloud Proxy in your app, follow these steps:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Request access to Cloud Proxy"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["Contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "Agora support"
            }), " and provide the following information:"]
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "App ID"
            }), `
`, _jsx(_components.li, {
              children: "Region where you want to use Cloud Proxy"
            }), `
`, _jsx(_components.li, {
              children: "Expected concurrency scale"
            }), `
`, _jsx(_components.li, {
              children: "Network operator and other relevant details"
            }), `
`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Allow traffic through the firewall"
            })
          }), `
`, _jsx(_components.p, {
            children: "After your request is approved, Agora provides a list of IP addresses and ports. Add these to your firewall allowlist to enable communication through Cloud Proxy."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Enable the cloud proxy in your code"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["Set the private parameter ", _jsx(_components.code, {
              children: "rtc.enable_proxy"
            }), " to ", _jsx(_components.code, {
              children: "true"
            }), "."]
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
              icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
              children: _jsxs(_components.code, {
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "auto"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " agoraParameter "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " service->"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "getAgoraParameter"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "();"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "agoraParameter->"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setBool"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"rtc.enable_proxy"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "true"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ");"
                  })]
                })]
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Test your setup"
            })
          }), `
`, _jsx(_components.p, {
            children: "Record audio and video to confirm the proxy configuration is working as expected."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Disable cloud proxy"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["To stop using Cloud Proxy, set ", _jsx(_components.code, {
              children: "rtc.enable_proxy"
            }), " to ", _jsx(_components.code, {
              children: "false"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "reference",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-references",
        children: "API references"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#getagoraparameter",
            children: _jsx(_components.code, {
              children: "getAgoraParameter"
            })
          })
        }), `
`]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "linux-java",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "linux-cpp",
        platform: "linux-java"
      }), _jsx(_components.p, {
        children: "Large organizations commonly deploy firewalls to meet their stringent security requirements. To ensure uninterrupted access to Agora services for users behind firewalls, Agora offers a firewall allowlist and Cloud Proxy services."
      }), _jsx(_components.p, {
        children: "To enable SDK use in network-restricted environments, administrators can add specific IP addresses and ports to the firewall allowlist. Developers then configure the Cloud Proxy service by calling the appropriate APIs."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-1",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "Cloud Proxy works as follows:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsx(_components.li, {
          children: "On-Premise Recording SDK initiates a request to Cloud Proxy."
        }), `
`, _jsx(_components.li, {
          children: "Cloud Proxy returns the corresponding proxy information."
        }), `
`, _jsx(_components.li, {
          children: "The Agora SDK sends data to Cloud Proxy, which forwards it to the Agora SDRTN®."
        }), `
`, _jsx(_components.li, {
          children: "The Agora SDRTN® sends the response back to Cloud Proxy, which then returns it to the SDK."
        }), `
`]
      }), _jsxs("details", {
        children: [_jsx("summary", {
          children: "Cloud proxy workflow"
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/cloud-proxy-tech.svg",
            alt: "Cloud Proxy workflow for On-Premise Recording"
          })
        })]
      }), _jsx(_components.h2, {
        id: "prerequisites-1",
        children: "Prerequisites"
      }), _jsxs(_components.p, {
        children: ["Before you begin, complete the ", _jsx(_components.a, {
          href: "/en/realtime-media/on-premise-recording/quickstart",
          children: "Quickstart"
        }), " to integrate the On-Premise Recording SDK and set up basic recording functionality."]
      }), _jsx(_components.h2, {
        id: "implement-cloud-proxy-1",
        children: "Implement Cloud Proxy"
      }), _jsx(_components.p, {
        children: "To implement Cloud Proxy in your app, follow these steps:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Request access to Cloud Proxy"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["Contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "Agora support"
            }), " and provide the following information:"]
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "App ID"
            }), `
`, _jsx(_components.li, {
              children: "Region where you want to use Cloud Proxy"
            }), `
`, _jsx(_components.li, {
              children: "Expected concurrency scale"
            }), `
`, _jsx(_components.li, {
              children: "Network operator and other relevant details"
            }), `
`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Allow traffic through the firewall"
            })
          }), `
`, _jsx(_components.p, {
            children: "After your request is approved, Agora provides a list of IP addresses and ports. Add these to your firewall allowlist to enable communication through Cloud Proxy."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Enable the cloud proxy in your code"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["Set the private parameter ", _jsx(_components.code, {
              children: "rtc.enable_proxy"
            }), " to ", _jsx(_components.code, {
              children: "true"
            }), "."]
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "AgoraParameter parameter "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " agoraService."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "getAgoraParameter"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "();"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "parameter."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setBool"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"rtc.enable_proxy"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "true"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ");"
                  })]
                })]
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Test your setup"
            })
          }), `
`, _jsx(_components.p, {
            children: "Record audio and video to confirm the proxy configuration is working as expected."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Disable cloud proxy"
            })
          }), `
`, _jsxs(_components.p, {
            children: ["To stop using Cloud Proxy, set ", _jsx(_components.code, {
              children: "rtc.enable_proxy"
            }), " to ", _jsx(_components.code, {
              children: "false"
            }), "."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "reference-1",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-references-1",
        children: "API references"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#getagoraparameter",
            children: _jsx(_components.code, {
              children: "getAgoraParameter"
            })
          })
        }), `
`]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
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
