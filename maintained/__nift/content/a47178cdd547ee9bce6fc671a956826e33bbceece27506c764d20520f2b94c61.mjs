import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Restrict media zones",
  description: "Restrict IoT SDK network traffic to a specified geographic region."
};
export let _markdown = `

To conform to the laws and regulations of different countries and regions, IoT SDK lets you restrict the media zones your app connects to. Once you specify a region, IoT SDK only transmits your audio and video data to Agora servers within that region.

## Understand the tech [#understand-the-tech]

Once you restrict media zones, IoT SDK only accesses Agora servers in the region you specify, regardless of where the user is actually located. For example, if you specify North America as the region, and users connect from North America and Japan respectively:

| Specified region | User's location | Region IoT SDK accesses | User experience         |
| ---------------- | --------------- | ----------------------- | ----------------------- |
| North America    | North America   | North America           | Normal                  |
| North America    | Japan           | North America           | Quality may be affected |

<CalloutContainer type="info">
  <CalloutDescription>
    Quality may be affected when restricting media zones because the user's traffic has to reach the specified region over the public internet, instead of connecting to the closest Agora server.
  </CalloutDescription>
</CalloutContainer>

## Set the area code [#set-the-area-code]

Set the region when you initialize the engine, using the \`area_code\` field of \`rtc_service_option_t\`:

\`\`\`cpp
rtc_service_option_t service_opt;
service_opt.area_code = AREA_CODE_NA;
...
rval = agora_rtc_init(appid, &event_handler, &service_opt);
\`\`\`

Choose area codes from the following table. Area codes support bitwise combination.

| Area code        | Region                         |
| ---------------- | ------------------------------ |
| \`AREA_CODE_CN\`   | Mainland China                 |
| \`AREA_CODE_NA\`   | North America                  |
| \`AREA_CODE_EU\`   | Europe                         |
| \`AREA_CODE_AS\`   | Asia, excluding Mainland China |
| \`AREA_CODE_JP\`   | Japan                          |
| \`AREA_CODE_IN\`   | India                          |
| \`AREA_CODE_GLOB\` | Global (default)               |

If the servers in your specified region become unavailable, IoT SDK returns an error instead of falling back to a server in another region.

For a list of the cloud proxy IP ranges for each region, see [Allowlist IP addresses and ports](/en/realtime-media/iot/build/manage-connections-and-quality/cloud-proxy#allowlist-ip-addresses-and-ports).

## Reference [#reference]

* [agora\\_rtc\\_init](https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "To conform to the laws and regulations of different countries and regions, IoT SDK lets you restrict the media zones your app connects to. Once you specify a region, IoT SDK only transmits your audio and video data to Agora servers within that region."
  }, {
    heading: "understand-the-tech",
    content: "Once you restrict media zones, IoT SDK only accesses Agora servers in the region you specify, regardless of where the user is actually located. For example, if you specify North America as the region, and users connect from North America and Japan respectively:"
  }, {
    heading: "understand-the-tech",
    content: "Specified region"
  }, {
    heading: "understand-the-tech",
    content: "User's location"
  }, {
    heading: "understand-the-tech",
    content: "Region IoT SDK accesses"
  }, {
    heading: "understand-the-tech",
    content: "User experience"
  }, {
    heading: "understand-the-tech",
    content: "North America"
  }, {
    heading: "understand-the-tech",
    content: "North America"
  }, {
    heading: "understand-the-tech",
    content: "North America"
  }, {
    heading: "understand-the-tech",
    content: "Normal"
  }, {
    heading: "understand-the-tech",
    content: "North America"
  }, {
    heading: "understand-the-tech",
    content: "Japan"
  }, {
    heading: "understand-the-tech",
    content: "North America"
  }, {
    heading: "understand-the-tech",
    content: "Quality may be affected"
  }, {
    heading: "understand-the-tech",
    content: "Quality may be affected when restricting media zones because the user's traffic has to reach the specified region over the public internet, instead of connecting to the closest Agora server."
  }, {
    heading: "set-the-area-code",
    content: "Set the region when you initialize the engine, using the `area_code` field of `rtc_service_option_t`:"
  }, {
    heading: "set-the-area-code",
    content: "Choose area codes from the following table. Area codes support bitwise combination."
  }, {
    heading: "set-the-area-code",
    content: "Area code"
  }, {
    heading: "set-the-area-code",
    content: "Region"
  }, {
    heading: "set-the-area-code",
    content: "`AREA_CODE_CN`"
  }, {
    heading: "set-the-area-code",
    content: "Mainland China"
  }, {
    heading: "set-the-area-code",
    content: "`AREA_CODE_NA`"
  }, {
    heading: "set-the-area-code",
    content: "North America"
  }, {
    heading: "set-the-area-code",
    content: "`AREA_CODE_EU`"
  }, {
    heading: "set-the-area-code",
    content: "Europe"
  }, {
    heading: "set-the-area-code",
    content: "`AREA_CODE_AS`"
  }, {
    heading: "set-the-area-code",
    content: "Asia, excluding Mainland China"
  }, {
    heading: "set-the-area-code",
    content: "`AREA_CODE_JP`"
  }, {
    heading: "set-the-area-code",
    content: "Japan"
  }, {
    heading: "set-the-area-code",
    content: "`AREA_CODE_IN`"
  }, {
    heading: "set-the-area-code",
    content: "India"
  }, {
    heading: "set-the-area-code",
    content: "`AREA_CODE_GLOB`"
  }, {
    heading: "set-the-area-code",
    content: "Global (default)"
  }, {
    heading: "set-the-area-code",
    content: "If the servers in your specified region become unavailable, IoT SDK returns an error instead of falling back to a server in another region."
  }, {
    heading: "set-the-area-code",
    content: "For a list of the cloud proxy IP ranges for each region, see Allowlist IP addresses and ports."
  }, {
    heading: "reference",
    content: "agora\\_rtc\\_init"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "set-the-area-code",
    content: "Set the area code"
  }, {
    id: "reference",
    content: "Reference"
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
  url: "#set-the-area-code",
  title: _jsx(_Fragment, {
    children: "Set the area code"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "To conform to the laws and regulations of different countries and regions, IoT SDK lets you restrict the media zones your app connects to. Once you specify a region, IoT SDK only transmits your audio and video data to Agora servers within that region."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsx(_components.p, {
      children: "Once you restrict media zones, IoT SDK only accesses Agora servers in the region you specify, regardless of where the user is actually located. For example, if you specify North America as the region, and users connect from North America and Japan respectively:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Specified region"
          }), _jsx(_components.th, {
            children: "User's location"
          }), _jsx(_components.th, {
            children: "Region IoT SDK accesses"
          }), _jsx(_components.th, {
            children: "User experience"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "North America"
          }), _jsx(_components.td, {
            children: "North America"
          }), _jsx(_components.td, {
            children: "North America"
          }), _jsx(_components.td, {
            children: "Normal"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "North America"
          }), _jsx(_components.td, {
            children: "Japan"
          }), _jsx(_components.td, {
            children: "North America"
          }), _jsx(_components.td, {
            children: "Quality may be affected"
          })]
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Quality may be affected when restricting media zones because the user's traffic has to reach the specified region over the public internet, instead of connecting to the closest Agora server."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "set-the-area-code",
      children: "Set the area code"
    }), `
`, _jsxs(_components.p, {
      children: ["Set the region when you initialize the engine, using the ", _jsx(_components.code, {
        children: "area_code"
      }), " field of ", _jsx(_components.code, {
        children: "rtc_service_option_t"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "rtc_service_option_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " service_opt;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "service_opt.area_code "
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
              children: " AREA_CODE_NA;"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "..."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "rval "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " agora_rtc_init"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(appid, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "&"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "event_handler, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "&"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "service_opt);"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "Choose area codes from the following table. Area codes support bitwise combination."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Area code"
          }), _jsx(_components.th, {
            children: "Region"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AREA_CODE_CN"
            })
          }), _jsx(_components.td, {
            children: "Mainland China"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AREA_CODE_NA"
            })
          }), _jsx(_components.td, {
            children: "North America"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AREA_CODE_EU"
            })
          }), _jsx(_components.td, {
            children: "Europe"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AREA_CODE_AS"
            })
          }), _jsx(_components.td, {
            children: "Asia, excluding Mainland China"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AREA_CODE_JP"
            })
          }), _jsx(_components.td, {
            children: "Japan"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AREA_CODE_IN"
            })
          }), _jsx(_components.td, {
            children: "India"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "AREA_CODE_GLOB"
            })
          }), _jsx(_components.td, {
            children: "Global (default)"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "If the servers in your specified region become unavailable, IoT SDK returns an error instead of falling back to a server in another region."
    }), `
`, _jsxs(_components.p, {
      children: ["For a list of the cloud proxy IP ranges for each region, see ", _jsx(_components.a, {
        href: "/en/realtime-media/iot/build/manage-connections-and-quality/cloud-proxy#allowlist-ip-addresses-and-ports",
        children: "Allowlist IP addresses and ports"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html",
          children: "agora_rtc_init"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
