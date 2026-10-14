import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Embed in a secure portal",
  description: "Easily embed Agora Analytics pages in internal web portals using a low-code approach."
};
export let _markdown = `

This page explains how to embed Agora Analytics pages in your portal using the **Embed Settings**.

## Prerequisites [#prerequisites]

To use the **Embed** option, ensure that:

* Your internal portal is secure and has a mechanism for managing user access.

* You have subscribed to a [pricing plan](../../reference/pricing.md) that provides the **Embed** option for the page you want.

## Embed Agora Analytics [#embed-agora-analytics]

Follow these steps to embed Agora Analytics in your portal.

### Access embed settings [#access-embed-settings]

To access **Embed Settings**, do the following:

1. Log in to [Agora Console](https://console.agora.io/).
2. In the navigation panel, click Agora Analytics.
3. From the user profile menu, select **Embed**.

   ![analytics-embedded-configuration](https://assets-docs.agora.io/images/analytics/analytics-embedded-configuration-1.png)

### Get the URL of the embedded page [#get-the-url-of-the-embedded-page]

To obtain the URL for embedding Agora Analytics feature page in your portal, send an HTTP request from your server. The **Embed Settings** page shows a \`Node.js\` code sample to send the request:

![1636604964375](https://assets-docs.agora.io/images/analytics/analytics-embedded-configuration-2.png)

#### HTTP request [#http-request]

* Format: JSON
* Method: \`POST\`
* Endpoint: \`https://analytics-lab.agora.io/api/getEmbedLocation\`
* Authentication: Use \`clientId\` and \`clientSecret\` to generate the Authorization parameter in the request header. To obtain your authentication credentials, click [Apply](https://console.agora.io/credentials).
* Request body parameters:
  * \`feature\`: Specifies the Agora Analytics feature page to embed. Set this to one of the following:
    * \`callSearch\`: **Call Inspector** page.
    * \`dataInsightUsage\`: **Usage Overview** page.
    * \`realtimeMonitoring\`: **Real-time Monitoring** page.

#### HTTP response [#http-response]

The response is in JSON format and returns the URL to the \`feature\` page you request. For example, if your request specifies \`feature\` as \`callSearch\`, the response looks like the following:

\`\`\`text
https://analytics-lab.agora.io/analytics/call/search?token=xxxxxxxxxxxxxxxxxxxxxx
\`\`\`

The \`token\` parameter is a dynamic key that is valid for two hours. You need to renew it every two hours.

If you want to request the URL to a detailed Call Inspector page, see [URL to a detailed Call Inspector page](#url-to-a-detailed-call-inspector-page).

### Customize the URL (Optional) [#customize-the-url-optional]

Use the page attributes panel on the **Embed Settings** page to customize the URL. The settings you select are converted into parameters in the code snippet. Append the page attributes string to the URL to get your customized embed URL.

For example, if you select English as the Language, \`&locale=en\` is appended to the parameter string.

![1636533452121](https://assets-docs.agora.io/images/analytics/analytics-embedded-configuration-3.png)

The following table lists the available setting in **Page Attributes** and their corresponding parameters in the code snippet:

| Setting                | Description                                                                                                                                                                                                             | Parameter                | Parameter Values                                                                        |
| :--------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------- | :-------------------------------------------------------------------------------------- |
| **Language**           | The language of the report.                                                                                                                                                                                             | \`locale\`                 | * \`zh\`: Chinese
* \`en\`: English                                                         |
| **Time Zone**          | The timezone used in the report.                                                                                                                                                                                        | \`timezone\`               | - \`Local\`: The local timezone
- \`UTC\`: The UTC timezone                                 |
| **Project Permission** | **All projects**: Users can access reports of all projects where the specified \`feature\` is enabled.<br/>**Specify a project by code**: Users can only access reports of the project you select as **Default Project**. | \`showProjectSelector\`    | * \`true\`: Show the project selector.
* \`false\`: Do not show the project selector.       |
| **Default Project**    | The default project displayed in the report.                                                                                                                                                                            | *(Optional)* \`projectId\` | - The ID of the project. Set this parameter only when \`showProjectSelector\` is \`false\`. |

### Embed Agora Analytics in your app [#embed-agora-analytics-in-your-app]

Copy the following code snippet into your portal, and replace \`iframeUrl\` with the complete URL you built from the previous steps.

\`\`\`tsx
<iframe
    src={iframeUrl}
    frameBorder={0}
    width="100%"
    height="100%"
    sandbox="allow-same-origin allow-scripts allow-popups allow-downloads"
/>
\`\`\`

## See also [#see-also]

### Get the URL to a detailed Call Inspector page [#get-the-url-to-a-detailed-call-inspector-page]

To get the URL for a detailed Call Inspector page, append the required parameters to the following base URL:

\`\`\`text
https://analytics-lab.agora.io/api/analytics/research
\`\`\`

* \`token\`: The \`token\` parameter returned in [Get the URL of the embedded page](#get-the-url-of-the-embedded-page) when you set \`feature\` as \`callSearch\`.
* \`cname\`: The channel name. If you enter an invalid channel name, you see a call search page with no research results.

If you only append \`token\` and \`cname\` to the URL, the embedded page displays the call search results for the last three days. To get a more detailed page, append the following optional parameters:

* \`fromUid\`: The user ID of the local client.
* \`toUid\`: The user ID of the remote client.
* \`fromTs\`: The start point (Unix timestamp) of the time frame to query.
* \`toTs\`: The end point (Unix timestamp) of the time frame to query.

For example:

\`\`\`html
https://analytics-lab.agora.io/api/analytics/research?token=xxxxxxxxxxxxxxx&cname=xxxxx&fromUid=xxxxxx&toUid=xxxxxx
\`\`\`

### FAQ [#faq]

Q: Why is the embedded page blank in my web portal?

A: Your browser may block the page due to security concerns. You can try the following solutions:

* If your browser has an ad blocker, set the ad blocker to stop blocking the embedded page.

* If you are using Safari, go to **Preferences > Privacy**, and select **Prevent cross-site tracking**.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page explains how to embed Agora Analytics pages in your portal using the **Embed Settings**."
  }, {
    heading: "prerequisites",
    content: "To use the **Embed** option, ensure that:"
  }, {
    heading: "prerequisites",
    content: "Your internal portal is secure and has a mechanism for managing user access."
  }, {
    heading: "prerequisites",
    content: "You have subscribed to a pricing plan that provides the **Embed** option for the page you want."
  }, {
    heading: "embed-agora-analytics",
    content: "Follow these steps to embed Agora Analytics in your portal."
  }, {
    heading: "access-embed-settings",
    content: "To access **Embed Settings**, do the following:"
  }, {
    heading: "access-embed-settings",
    content: "Log in to Agora Console."
  }, {
    heading: "access-embed-settings",
    content: "In the navigation panel, click Agora Analytics."
  }, {
    heading: "access-embed-settings",
    content: "From the user profile menu, select **Embed**."
  }, {
    heading: "get-the-url-of-the-embedded-page",
    content: "To obtain the URL for embedding Agora Analytics feature page in your portal, send an HTTP request from your server. The **Embed Settings** page shows a `Node.js` code sample to send the request:"
  }, {
    heading: "http-request",
    content: "Format: JSON"
  }, {
    heading: "http-request",
    content: "Method: `POST`"
  }, {
    heading: "http-request",
    content: "Endpoint: `https://analytics-lab.agora.io/api/getEmbedLocation`"
  }, {
    heading: "http-request",
    content: "Authentication: Use `clientId` and `clientSecret` to generate the Authorization parameter in the request header. To obtain your authentication credentials, click Apply."
  }, {
    heading: "http-request",
    content: "Request body parameters:"
  }, {
    heading: "http-request",
    content: "`feature`: Specifies the Agora Analytics feature page to embed. Set this to one of the following:"
  }, {
    heading: "http-request",
    content: "`callSearch`: **Call Inspector** page."
  }, {
    heading: "http-request",
    content: "`dataInsightUsage`: **Usage Overview** page."
  }, {
    heading: "http-request",
    content: "`realtimeMonitoring`: **Real-time Monitoring** page."
  }, {
    heading: "http-response",
    content: "The response is in JSON format and returns the URL to the `feature` page you request. For example, if your request specifies `feature` as `callSearch`, the response looks like the following:"
  }, {
    heading: "http-response",
    content: "The `token` parameter is a dynamic key that is valid for two hours. You need to renew it every two hours."
  }, {
    heading: "http-response",
    content: "If you want to request the URL to a detailed Call Inspector page, see URL to a detailed Call Inspector page."
  }, {
    heading: "customize-the-url-optional",
    content: "Use the page attributes panel on the **Embed Settings** page to customize the URL. The settings you select are converted into parameters in the code snippet. Append the page attributes string to the URL to get your customized embed URL."
  }, {
    heading: "customize-the-url-optional",
    content: "For example, if you select English as the Language, `&locale=en` is appended to the parameter string."
  }, {
    heading: "customize-the-url-optional",
    content: "The following table lists the available setting in **Page Attributes** and their corresponding parameters in the code snippet:"
  }, {
    heading: "customize-the-url-optional",
    content: "Setting"
  }, {
    heading: "customize-the-url-optional",
    content: "Description"
  }, {
    heading: "customize-the-url-optional",
    content: "Parameter"
  }, {
    heading: "customize-the-url-optional",
    content: "Parameter Values"
  }, {
    heading: "customize-the-url-optional",
    content: "**Language**"
  }, {
    heading: "customize-the-url-optional",
    content: "The language of the report."
  }, {
    heading: "customize-the-url-optional",
    content: "`locale`"
  }, {
    heading: "customize-the-url-optional",
    content: "* `zh`: Chinese\n* `en`: English"
  }, {
    heading: "customize-the-url-optional",
    content: "**Time Zone**"
  }, {
    heading: "customize-the-url-optional",
    content: "The timezone used in the report."
  }, {
    heading: "customize-the-url-optional",
    content: "`timezone`"
  }, {
    heading: "customize-the-url-optional",
    content: "* `Local`: The local timezone\n* `UTC`: The UTC timezone"
  }, {
    heading: "customize-the-url-optional",
    content: "**Project Permission**"
  }, {
    heading: "customize-the-url-optional",
    content: "**All projects**: Users can access reports of all projects where the specified `feature` is enabled.<br/>**Specify a project by code**: Users can only access reports of the project you select as **Default Project**."
  }, {
    heading: "customize-the-url-optional",
    content: "`showProjectSelector`"
  }, {
    heading: "customize-the-url-optional",
    content: "* `true`: Show the project selector.\n* `false`: Do not show the project selector."
  }, {
    heading: "customize-the-url-optional",
    content: "**Default Project**"
  }, {
    heading: "customize-the-url-optional",
    content: "The default project displayed in the report."
  }, {
    heading: "customize-the-url-optional",
    content: "*(Optional)* `projectId`"
  }, {
    heading: "customize-the-url-optional",
    content: "* The ID of the project. Set this parameter only when `showProjectSelector` is `false`."
  }, {
    heading: "embed-agora-analytics-in-your-app",
    content: "Copy the following code snippet into your portal, and replace `iframeUrl` with the complete URL you built from the previous steps."
  }, {
    heading: "get-the-url-to-a-detailed-call-inspector-page",
    content: "To get the URL for a detailed Call Inspector page, append the required parameters to the following base URL:"
  }, {
    heading: "get-the-url-to-a-detailed-call-inspector-page",
    content: "`token`: The `token` parameter returned in Get the URL of the embedded page when you set `feature` as `callSearch`."
  }, {
    heading: "get-the-url-to-a-detailed-call-inspector-page",
    content: "`cname`: The channel name. If you enter an invalid channel name, you see a call search page with no research results."
  }, {
    heading: "get-the-url-to-a-detailed-call-inspector-page",
    content: "If you only append `token` and `cname` to the URL, the embedded page displays the call search results for the last three days. To get a more detailed page, append the following optional parameters:"
  }, {
    heading: "get-the-url-to-a-detailed-call-inspector-page",
    content: "`fromUid`: The user ID of the local client."
  }, {
    heading: "get-the-url-to-a-detailed-call-inspector-page",
    content: "`toUid`: The user ID of the remote client."
  }, {
    heading: "get-the-url-to-a-detailed-call-inspector-page",
    content: "`fromTs`: The start point (Unix timestamp) of the time frame to query."
  }, {
    heading: "get-the-url-to-a-detailed-call-inspector-page",
    content: "`toTs`: The end point (Unix timestamp) of the time frame to query."
  }, {
    heading: "get-the-url-to-a-detailed-call-inspector-page",
    content: "For example:"
  }, {
    heading: "faq",
    content: "Q: Why is the embedded page blank in my web portal?"
  }, {
    heading: "faq",
    content: "A: Your browser may block the page due to security concerns. You can try the following solutions:"
  }, {
    heading: "faq",
    content: "If your browser has an ad blocker, set the ad blocker to stop blocking the embedded page."
  }, {
    heading: "faq",
    content: "If you are using Safari, go to **Preferences > Privacy**, and select **Prevent cross-site tracking**."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "embed-agora-analytics",
    content: "Embed Agora Analytics"
  }, {
    id: "access-embed-settings",
    content: "Access embed settings"
  }, {
    id: "get-the-url-of-the-embedded-page",
    content: "Get the URL of the embedded page"
  }, {
    id: "http-request",
    content: "HTTP request"
  }, {
    id: "http-response",
    content: "HTTP response"
  }, {
    id: "customize-the-url-optional",
    content: "Customize the URL (Optional)"
  }, {
    id: "embed-agora-analytics-in-your-app",
    content: "Embed Agora Analytics in your app"
  }, {
    id: "see-also",
    content: "See also"
  }, {
    id: "get-the-url-to-a-detailed-call-inspector-page",
    content: "Get the URL to a detailed Call Inspector page"
  }, {
    id: "faq",
    content: "FAQ"
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
  url: "#embed-agora-analytics",
  title: _jsx(_Fragment, {
    children: "Embed Agora Analytics"
  })
}, {
  depth: 3,
  url: "#access-embed-settings",
  title: _jsx(_Fragment, {
    children: "Access embed settings"
  })
}, {
  depth: 3,
  url: "#get-the-url-of-the-embedded-page",
  title: _jsx(_Fragment, {
    children: "Get the URL of the embedded page"
  })
}, {
  depth: 4,
  url: "#http-request",
  title: _jsx(_Fragment, {
    children: "HTTP request"
  })
}, {
  depth: 4,
  url: "#http-response",
  title: _jsx(_Fragment, {
    children: "HTTP response"
  })
}, {
  depth: 3,
  url: "#customize-the-url-optional",
  title: _jsx(_Fragment, {
    children: "Customize the URL (Optional)"
  })
}, {
  depth: 3,
  url: "#embed-agora-analytics-in-your-app",
  title: _jsx(_Fragment, {
    children: "Embed Agora Analytics in your app"
  })
}, {
  depth: 2,
  url: "#see-also",
  title: _jsx(_Fragment, {
    children: "See also"
  })
}, {
  depth: 3,
  url: "#get-the-url-to-a-detailed-call-inspector-page",
  title: _jsx(_Fragment, {
    children: "Get the URL to a detailed Call Inspector page"
  })
}, {
  depth: 3,
  url: "#faq",
  title: _jsx(_Fragment, {
    children: "FAQ"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    ol: "ol",
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
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["This page explains how to embed Agora Analytics pages in your portal using the ", _jsx(_components.strong, {
        children: "Embed Settings"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsxs(_components.p, {
      children: ["To use the ", _jsx(_components.strong, {
        children: "Embed"
      }), " option, ensure that:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Your internal portal is secure and has a mechanism for managing user access."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["You have subscribed to a ", _jsx(_components.a, {
            href: "../../reference/pricing.md",
            children: "pricing plan"
          }), " that provides the ", _jsx(_components.strong, {
            children: "Embed"
          }), " option for the page you want."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "embed-agora-analytics",
      children: "Embed Agora Analytics"
    }), `
`, _jsx(_components.p, {
      children: "Follow these steps to embed Agora Analytics in your portal."
    }), `
`, _jsx(_components.h3, {
      id: "access-embed-settings",
      children: "Access embed settings"
    }), `
`, _jsxs(_components.p, {
      children: ["To access ", _jsx(_components.strong, {
        children: "Embed Settings"
      }), ", do the following:"]
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
`, _jsx(_components.p, {
          children: "In the navigation panel, click Agora Analytics."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["From the user profile menu, select ", _jsx(_components.strong, {
            children: "Embed"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/analytics/analytics-embedded-configuration-1.png",
            alt: "analytics-embedded-configuration"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "get-the-url-of-the-embedded-page",
      children: "Get the URL of the embedded page"
    }), `
`, _jsxs(_components.p, {
      children: ["To obtain the URL for embedding Agora Analytics feature page in your portal, send an HTTP request from your server. The ", _jsx(_components.strong, {
        children: "Embed Settings"
      }), " page shows a ", _jsx(_components.code, {
        children: "Node.js"
      }), " code sample to send the request:"]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/analytics/analytics-embedded-configuration-2.png",
        alt: "1636604964375"
      })
    }), `
`, _jsx(_components.h4, {
      id: "http-request",
      children: "HTTP request"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Format: JSON"
      }), `
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "POST"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Endpoint: ", _jsx(_components.code, {
          children: "https://analytics-lab.agora.io/api/getEmbedLocation"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Authentication: Use ", _jsx(_components.code, {
          children: "clientId"
        }), " and ", _jsx(_components.code, {
          children: "clientSecret"
        }), " to generate the Authorization parameter in the request header. To obtain your authentication credentials, click ", _jsx(_components.a, {
          href: "https://console.agora.io/credentials",
          children: "Apply"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Request body parameters:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "feature"
            }), ": Specifies the Agora Analytics feature page to embed. Set this to one of the following:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "callSearch"
                }), ": ", _jsx(_components.strong, {
                  children: "Call Inspector"
                }), " page."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "dataInsightUsage"
                }), ": ", _jsx(_components.strong, {
                  children: "Usage Overview"
                }), " page."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "realtimeMonitoring"
                }), ": ", _jsx(_components.strong, {
                  children: "Real-time Monitoring"
                }), " page."]
              }), `
`]
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "http-response",
      children: "HTTP response"
    }), `
`, _jsxs(_components.p, {
      children: ["The response is in JSON format and returns the URL to the ", _jsx(_components.code, {
        children: "feature"
      }), " page you request. For example, if your request specifies ", _jsx(_components.code, {
        children: "feature"
      }), " as ", _jsx(_components.code, {
        children: "callSearch"
      }), ", the response looks like the following:"]
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "https://analytics-lab.agora.io/analytics/call/search?token"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "=xxxxxxxxxxxxxxxxxxxxxx"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "token"
      }), " parameter is a dynamic key that is valid for two hours. You need to renew it every two hours."]
    }), `
`, _jsxs(_components.p, {
      children: ["If you want to request the URL to a detailed Call Inspector page, see ", _jsx(_components.a, {
        href: "#url-to-a-detailed-call-inspector-page",
        children: "URL to a detailed Call Inspector page"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "customize-the-url-optional",
      children: "Customize the URL (Optional)"
    }), `
`, _jsxs(_components.p, {
      children: ["Use the page attributes panel on the ", _jsx(_components.strong, {
        children: "Embed Settings"
      }), " page to customize the URL. The settings you select are converted into parameters in the code snippet. Append the page attributes string to the URL to get your customized embed URL."]
    }), `
`, _jsxs(_components.p, {
      children: ["For example, if you select English as the Language, ", _jsx(_components.code, {
        children: "&locale=en"
      }), " is appended to the parameter string."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/analytics/analytics-embedded-configuration-3.png",
        alt: "1636533452121"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The following table lists the available setting in ", _jsx(_components.strong, {
        children: "Page Attributes"
      }), " and their corresponding parameters in the code snippet:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Setting"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Parameter"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Parameter Values"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "Language"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The language of the report."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "locale"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "zh"
                }), ": Chinese"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "en"
                }), ": English"]
              }), `
`]
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "Time Zone"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The timezone used in the report."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "timezone"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "Local"
                }), ": The local timezone"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "UTC"
                }), ": The UTC timezone"]
              }), `
`]
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "Project Permission"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.strong, {
              children: "All projects"
            }), ": Users can access reports of all projects where the specified ", _jsx(_components.code, {
              children: "feature"
            }), " is enabled.", _jsx(_components.strong, {
              children: "Specify a project by code"
            }), ": Users can only access reports of the project you select as ", _jsx(_components.strong, {
              children: "Default Project"
            }), "."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "showProjectSelector"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "true"
                }), ": Show the project selector."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "false"
                }), ": Do not show the project selector."]
              }), `
`]
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.strong, {
              children: "Default Project"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The default project displayed in the report."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.em, {
              children: "(Optional)"
            }), " ", _jsx(_components.code, {
              children: "projectId"
            })]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["The ID of the project. Set this parameter only when ", _jsx(_components.code, {
                  children: "showProjectSelector"
                }), " is ", _jsx(_components.code, {
                  children: "false"
                }), "."]
              }), `
`]
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "embed-agora-analytics-in-your-app",
      children: "Embed Agora Analytics in your app"
    }), `
`, _jsxs(_components.p, {
      children: ["Copy the following code snippet into your portal, and replace ", _jsx(_components.code, {
        children: "iframeUrl"
      }), " with the complete URL you built from the previous steps."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "iframe"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "    src"
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
              children: "{iframeUrl}"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "    frameBorder"
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
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "    width"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"100%"'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "    height"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"100%"'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "    sandbox"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"allow-same-origin allow-scripts allow-popups allow-downloads"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "/>"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "see-also",
      children: "See also"
    }), `
`, _jsx(_components.h3, {
      id: "get-the-url-to-a-detailed-call-inspector-page",
      children: "Get the URL to a detailed Call Inspector page"
    }), `
`, _jsx(_components.p, {
      children: "To get the URL for a detailed Call Inspector page, append the required parameters to the following base URL:"
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
        children: _jsx(_components.code, {
          children: _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "https://analytics-lab.agora.io/api/analytics/research"
            })
          })
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "token"
        }), ": The ", _jsx(_components.code, {
          children: "token"
        }), " parameter returned in ", _jsx(_components.a, {
          href: "#get-the-url-of-the-embedded-page",
          children: "Get the URL of the embedded page"
        }), " when you set ", _jsx(_components.code, {
          children: "feature"
        }), " as ", _jsx(_components.code, {
          children: "callSearch"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "cname"
        }), ": The channel name. If you enter an invalid channel name, you see a call search page with no research results."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["If you only append ", _jsx(_components.code, {
        children: "token"
      }), " and ", _jsx(_components.code, {
        children: "cname"
      }), " to the URL, the embedded page displays the call search results for the last three days. To get a more detailed page, append the following optional parameters:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "fromUid"
        }), ": The user ID of the local client."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "toUid"
        }), ": The user ID of the remote client."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "fromTs"
        }), ": The start point (Unix timestamp) of the time frame to query."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "toTs"
        }), ": The end point (Unix timestamp) of the time frame to query."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "For example:"
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
        children: _jsx(_components.code, {
          children: _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "https://analytics-lab.agora.io/api/analytics/research?token=xxxxxxxxxxxxxxx&cname=xxxxx&fromUid=xxxxxx&toUid=xxxxxx"
            })
          })
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "faq",
      children: "FAQ"
    }), `
`, _jsx(_components.p, {
      children: "Q: Why is the embedded page blank in my web portal?"
    }), `
`, _jsx(_components.p, {
      children: "A: Your browser may block the page due to security concerns. You can try the following solutions:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "If your browser has an ad blocker, set the ad blocker to stop blocking the embedded page."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If you are using Safari, go to ", _jsx(_components.strong, {
            children: "Preferences > Privacy"
          }), ", and select ", _jsx(_components.strong, {
            children: "Prevent cross-site tracking"
          }), "."]
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
