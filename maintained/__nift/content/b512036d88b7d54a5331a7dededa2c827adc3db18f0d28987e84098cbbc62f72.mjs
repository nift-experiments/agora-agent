import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Integrate Analytics with Datadog",
  description: "Configure Agora Analytics to push data directly to your Datadog dashboard."
};
export let _markdown = `

[Datadog](https://docs.datadoghq.com/) is an observability service for cloud-scale applications that monitors servers, databases, tools, and services through a SaaS-based data analytics platform. You can use it to visualize and monitor metrics, set up custom alerts, and create dashboards. To analyze Agora product data alongside your other integrations, you can push Agora Analytics usage, quality, and performance statistics directly to your Datadog account.

This page shows you how to set up the Datadog integration with Agora Analytics.

## Enable and configure Datadog [#enable-and-configure-datadog]

To enable the Agora Analytics integration with Datadog:

1. In Agora Console, subscribe to the **Premium** or **Enterprise** [pricing plan](/en/realtime-media/agora-analytics/reference/pricing).

2. In [Agora Analytics](https://analytics-lab.agora.io/), go to **Integration > Datadog**.

   ![Datadog option in the Agora Analytics Integration menu](https://assets-docs.agora.io/images/analytics/datadog-integration-step-1.png)

3. Click **Apply** to request access to the Datadog integration. The Agora support team contacts you when the feature is enabled.

   ![Apply button on the Datadog integration page](https://assets-docs.agora.io/images/analytics/apply-datadog-package.png)

   <CalloutContainer type="info">
     <CalloutDescription>
       You can use Datadog with Agora Analytics only if your Datadog package includes the Datadog integration.
     </CalloutDescription>
   </CalloutContainer>

4. On the configuration page, select the **Metrics** you want to monitor with Datadog.

   ![Metrics selection on the Datadog configuration page](https://assets-docs.agora.io/images/analytics/datadog-integration-step-2.png)

5. Enter your Datadog API key and click **Save**. Datadog requires an API key to receive metrics and events.

   ![Datadog API key field on the configuration page](https://assets-docs.agora.io/images/analytics/datadog-integration-step-3.png)

6. Check that the **Configuration Status** changes to **Online**.

   The configuration page also shows the following information:

   * **Updated at**: The time of the last data push, in your local time zone.
   * **Updated by**: The last user to enable or disable the feature.
   * **Expiration date**: The time remaining before your package expires.

   ![Datadog configuration page with the status set to Online](https://assets-docs.agora.io/images/analytics/datadog-integration-step-4.png)

   <CalloutContainer type="info">
     <CalloutDescription>
       After you change the status, it can take up to five minutes for the data push to start or stop.
     </CalloutDescription>
   </CalloutContainer>

You are now ready to use Datadog to analyze the use of your Agora products.

## Add Analytics to your Datadog dashboard [#add-analytics-to-your-datadog-dashboard]

To display Agora Analytics metrics on your Datadog dashboard:

1. Log in to your Datadog account. Go to the **Integrations** page and search for "Agora". Agora Analytics appears in the search results.

   ![Agora Analytics in the Datadog Integrations search results](https://assets-docs.agora.io/images/analytics/datadog-integration-step-5.png)

2. Select **Agora Analytics** and add it to your Datadog dashboard.

   ![Adding the Agora Analytics integration in Datadog](https://assets-docs.agora.io/images/analytics/datadog-integration-step-6.png)

3. Open your Datadog dashboard to see statistics from Agora Analytics.

   ![Agora Analytics statistics on a Datadog dashboard](https://assets-docs.agora.io/images/analytics/datadog-integration-step-7.png)

## Reference [#reference]

For details about the integration on the Datadog side, see the [Agora Analytics integration page on Datadog](https://docs.datadoghq.com/integrations/agora-analytics/).

### RTC metrics [#rtc-metrics]

Agora Analytics provides the following RTC metrics to Datadog:

| Metric name                                       | Description                                                                       |
| :------------------------------------------------ | :-------------------------------------------------------------------------------- |
| \`agora.rtc.app_id.online_user\` (count)            | Number of online users aggregated by App ID, calculated every minute.             |
| \`agora.rtc.app_id.online_channel\` (count)         | Number of online channels aggregated by App ID, calculated every minute.          |
| \`agora.rtc.app_id.join_success_rate\` (rate)       | Join success rate aggregated by App ID, calculated every minute.                  |
| \`agora.rtc.app_id.join_success_in_5s_rate\` (rate) | Join success rate within 5 seconds aggregated by App ID, calculated every minute. |
| \`agora.rtc.app_id.join_attempt\` (count)           | Number of join attempts aggregated by App ID, calculated every minute.            |
| \`agora.rtc.app_id.join_success_count\` (count)     | Number of successful joins aggregated by App ID, calculated every minute.         |
| \`agora.rtc.app_id.audio_freeze_rate\` (rate)       | Audio freeze rate aggregated by App ID, calculated every minute.                  |
| \`agora.rtc.app_id.video_freeze_rate\` (rate)       | Video freeze rate aggregated by App ID, calculated every minute.                  |
| \`agora.rtc.app_id.network_delay_rate\` (rate)      | Network delay rate aggregated by App ID, calculated every minute.                 |

### Chat metrics [#chat-metrics]

Agora Analytics provides the following Chat metrics to Datadog:

| Metric name                          | Description                            |
| :----------------------------------- | :------------------------------------- |
| \`agora.chat.group.total\` (count)     | Total chat groups.                     |
| \`agora.chat.group.new\` (count)       | Daily new chat groups.                 |
| \`agora.chat.group.disbanded\` (count) | Daily disbanded chat groups.           |
| \`agora.chat.group.active\` (count)    | Daily active chat groups.              |
| \`agora.chat.room.total\` (count)      | Total chat rooms.                      |
| \`agora.chat.room.new\` (count)        | Daily new chat rooms.                  |
| \`agora.chat.room.disbanded\` (count)  | Daily disbanded chat rooms.            |
| \`agora.chat.room.active\` (count)     | Daily active chat rooms.               |
| \`agora.chat.room.pcu\` (count)        | Daily chat room peak concurrent users. |
| \`agora.chat.user.total\` (count)      | Total registered users.                |
| \`agora.chat.user.dnu\` (count)        | Daily new users.                       |
| \`agora.chat.user.dau\` (count)        | Daily active users.                    |
| \`agora.chat.user.maxdau\` (count)     | Monthly maximum daily active users.    |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Datadog is an observability service for cloud-scale applications that monitors servers, databases, tools, and services through a SaaS-based data analytics platform. You can use it to visualize and monitor metrics, set up custom alerts, and create dashboards. To analyze Agora product data alongside your other integrations, you can push Agora Analytics usage, quality, and performance statistics directly to your Datadog account."
  }, {
    heading: undefined,
    content: "This page shows you how to set up the Datadog integration with Agora Analytics."
  }, {
    heading: "enable-and-configure-datadog",
    content: "To enable the Agora Analytics integration with Datadog:"
  }, {
    heading: "enable-and-configure-datadog",
    content: "In Agora Console, subscribe to the **Premium** or **Enterprise** pricing plan."
  }, {
    heading: "enable-and-configure-datadog",
    content: "In Agora Analytics, go to **Integration > Datadog**."
  }, {
    heading: "enable-and-configure-datadog",
    content: "Click **Apply** to request access to the Datadog integration. The Agora support team contacts you when the feature is enabled."
  }, {
    heading: "enable-and-configure-datadog",
    content: "You can use Datadog with Agora Analytics only if your Datadog package includes the Datadog integration."
  }, {
    heading: "enable-and-configure-datadog",
    content: "On the configuration page, select the **Metrics** you want to monitor with Datadog."
  }, {
    heading: "enable-and-configure-datadog",
    content: "Enter your Datadog API key and click **Save**. Datadog requires an API key to receive metrics and events."
  }, {
    heading: "enable-and-configure-datadog",
    content: "Check that the **Configuration Status** changes to **Online**."
  }, {
    heading: "enable-and-configure-datadog",
    content: "The configuration page also shows the following information:"
  }, {
    heading: "enable-and-configure-datadog",
    content: "**Updated at**: The time of the last data push, in your local time zone."
  }, {
    heading: "enable-and-configure-datadog",
    content: "**Updated by**: The last user to enable or disable the feature."
  }, {
    heading: "enable-and-configure-datadog",
    content: "**Expiration date**: The time remaining before your package expires."
  }, {
    heading: "enable-and-configure-datadog",
    content: "After you change the status, it can take up to five minutes for the data push to start or stop."
  }, {
    heading: "enable-and-configure-datadog",
    content: "You are now ready to use Datadog to analyze the use of your Agora products."
  }, {
    heading: "add-analytics-to-your-datadog-dashboard",
    content: "To display Agora Analytics metrics on your Datadog dashboard:"
  }, {
    heading: "add-analytics-to-your-datadog-dashboard",
    content: 'Log in to your Datadog account. Go to the **Integrations** page and search for "Agora". Agora Analytics appears in the search results.'
  }, {
    heading: "add-analytics-to-your-datadog-dashboard",
    content: "Select **Agora Analytics** and add it to your Datadog dashboard."
  }, {
    heading: "add-analytics-to-your-datadog-dashboard",
    content: "Open your Datadog dashboard to see statistics from Agora Analytics."
  }, {
    heading: "reference",
    content: "For details about the integration on the Datadog side, see the Agora Analytics integration page on Datadog."
  }, {
    heading: "rtc-metrics",
    content: "Agora Analytics provides the following RTC metrics to Datadog:"
  }, {
    heading: "rtc-metrics",
    content: "Metric name"
  }, {
    heading: "rtc-metrics",
    content: "Description"
  }, {
    heading: "rtc-metrics",
    content: "`agora.rtc.app_id.online_user` (count)"
  }, {
    heading: "rtc-metrics",
    content: "Number of online users aggregated by App ID, calculated every minute."
  }, {
    heading: "rtc-metrics",
    content: "`agora.rtc.app_id.online_channel` (count)"
  }, {
    heading: "rtc-metrics",
    content: "Number of online channels aggregated by App ID, calculated every minute."
  }, {
    heading: "rtc-metrics",
    content: "`agora.rtc.app_id.join_success_rate` (rate)"
  }, {
    heading: "rtc-metrics",
    content: "Join success rate aggregated by App ID, calculated every minute."
  }, {
    heading: "rtc-metrics",
    content: "`agora.rtc.app_id.join_success_in_5s_rate` (rate)"
  }, {
    heading: "rtc-metrics",
    content: "Join success rate within 5 seconds aggregated by App ID, calculated every minute."
  }, {
    heading: "rtc-metrics",
    content: "`agora.rtc.app_id.join_attempt` (count)"
  }, {
    heading: "rtc-metrics",
    content: "Number of join attempts aggregated by App ID, calculated every minute."
  }, {
    heading: "rtc-metrics",
    content: "`agora.rtc.app_id.join_success_count` (count)"
  }, {
    heading: "rtc-metrics",
    content: "Number of successful joins aggregated by App ID, calculated every minute."
  }, {
    heading: "rtc-metrics",
    content: "`agora.rtc.app_id.audio_freeze_rate` (rate)"
  }, {
    heading: "rtc-metrics",
    content: "Audio freeze rate aggregated by App ID, calculated every minute."
  }, {
    heading: "rtc-metrics",
    content: "`agora.rtc.app_id.video_freeze_rate` (rate)"
  }, {
    heading: "rtc-metrics",
    content: "Video freeze rate aggregated by App ID, calculated every minute."
  }, {
    heading: "rtc-metrics",
    content: "`agora.rtc.app_id.network_delay_rate` (rate)"
  }, {
    heading: "rtc-metrics",
    content: "Network delay rate aggregated by App ID, calculated every minute."
  }, {
    heading: "chat-metrics",
    content: "Agora Analytics provides the following Chat metrics to Datadog:"
  }, {
    heading: "chat-metrics",
    content: "Metric name"
  }, {
    heading: "chat-metrics",
    content: "Description"
  }, {
    heading: "chat-metrics",
    content: "`agora.chat.group.total` (count)"
  }, {
    heading: "chat-metrics",
    content: "Total chat groups."
  }, {
    heading: "chat-metrics",
    content: "`agora.chat.group.new` (count)"
  }, {
    heading: "chat-metrics",
    content: "Daily new chat groups."
  }, {
    heading: "chat-metrics",
    content: "`agora.chat.group.disbanded` (count)"
  }, {
    heading: "chat-metrics",
    content: "Daily disbanded chat groups."
  }, {
    heading: "chat-metrics",
    content: "`agora.chat.group.active` (count)"
  }, {
    heading: "chat-metrics",
    content: "Daily active chat groups."
  }, {
    heading: "chat-metrics",
    content: "`agora.chat.room.total` (count)"
  }, {
    heading: "chat-metrics",
    content: "Total chat rooms."
  }, {
    heading: "chat-metrics",
    content: "`agora.chat.room.new` (count)"
  }, {
    heading: "chat-metrics",
    content: "Daily new chat rooms."
  }, {
    heading: "chat-metrics",
    content: "`agora.chat.room.disbanded` (count)"
  }, {
    heading: "chat-metrics",
    content: "Daily disbanded chat rooms."
  }, {
    heading: "chat-metrics",
    content: "`agora.chat.room.active` (count)"
  }, {
    heading: "chat-metrics",
    content: "Daily active chat rooms."
  }, {
    heading: "chat-metrics",
    content: "`agora.chat.room.pcu` (count)"
  }, {
    heading: "chat-metrics",
    content: "Daily chat room peak concurrent users."
  }, {
    heading: "chat-metrics",
    content: "`agora.chat.user.total` (count)"
  }, {
    heading: "chat-metrics",
    content: "Total registered users."
  }, {
    heading: "chat-metrics",
    content: "`agora.chat.user.dnu` (count)"
  }, {
    heading: "chat-metrics",
    content: "Daily new users."
  }, {
    heading: "chat-metrics",
    content: "`agora.chat.user.dau` (count)"
  }, {
    heading: "chat-metrics",
    content: "Daily active users."
  }, {
    heading: "chat-metrics",
    content: "`agora.chat.user.maxdau` (count)"
  }, {
    heading: "chat-metrics",
    content: "Monthly maximum daily active users."
  }],
  headings: [{
    id: "enable-and-configure-datadog",
    content: "Enable and configure Datadog"
  }, {
    id: "add-analytics-to-your-datadog-dashboard",
    content: "Add Analytics to your Datadog dashboard"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "rtc-metrics",
    content: "RTC metrics"
  }, {
    id: "chat-metrics",
    content: "Chat metrics"
  }]
};
export let toc = [{
  depth: 2,
  url: "#enable-and-configure-datadog",
  title: _jsx(_Fragment, {
    children: "Enable and configure Datadog"
  })
}, {
  depth: 2,
  url: "#add-analytics-to-your-datadog-dashboard",
  title: _jsx(_Fragment, {
    children: "Add Analytics to your Datadog dashboard"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#rtc-metrics",
  title: _jsx(_Fragment, {
    children: "RTC metrics"
  })
}, {
  depth: 3,
  url: "#chat-metrics",
  title: _jsx(_Fragment, {
    children: "Chat metrics"
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
    strong: "strong",
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
    children: [_jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "https://docs.datadoghq.com/",
        children: "Datadog"
      }), " is an observability service for cloud-scale applications that monitors servers, databases, tools, and services through a SaaS-based data analytics platform. You can use it to visualize and monitor metrics, set up custom alerts, and create dashboards. To analyze Agora product data alongside your other integrations, you can push Agora Analytics usage, quality, and performance statistics directly to your Datadog account."]
    }), `
`, _jsx(_components.p, {
      children: "This page shows you how to set up the Datadog integration with Agora Analytics."
    }), `
`, _jsx(_components.h2, {
      id: "enable-and-configure-datadog",
      children: "Enable and configure Datadog"
    }), `
`, _jsx(_components.p, {
      children: "To enable the Agora Analytics integration with Datadog:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In Agora Console, subscribe to the ", _jsx(_components.strong, {
            children: "Premium"
          }), " or ", _jsx(_components.strong, {
            children: "Enterprise"
          }), " ", _jsx(_components.a, {
            href: "/en/realtime-media/agora-analytics/reference/pricing",
            children: "pricing plan"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In ", _jsx(_components.a, {
            href: "https://analytics-lab.agora.io/",
            children: "Agora Analytics"
          }), ", go to ", _jsx(_components.strong, {
            children: "Integration > Datadog"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/analytics/datadog-integration-step-1.png",
            alt: "Datadog option in the Agora Analytics Integration menu"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Click ", _jsx(_components.strong, {
            children: "Apply"
          }), " to request access to the Datadog integration. The Agora support team contacts you when the feature is enabled."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/analytics/apply-datadog-package.png",
            alt: "Apply button on the Datadog integration page"
          })
        }), `
`, _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "You can use Datadog with Agora Analytics only if your Datadog package includes the Datadog integration."
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the configuration page, select the ", _jsx(_components.strong, {
            children: "Metrics"
          }), " you want to monitor with Datadog."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/analytics/datadog-integration-step-2.png",
            alt: "Metrics selection on the Datadog configuration page"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Enter your Datadog API key and click ", _jsx(_components.strong, {
            children: "Save"
          }), ". Datadog requires an API key to receive metrics and events."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/analytics/datadog-integration-step-3.png",
            alt: "Datadog API key field on the configuration page"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Check that the ", _jsx(_components.strong, {
            children: "Configuration Status"
          }), " changes to ", _jsx(_components.strong, {
            children: "Online"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: "The configuration page also shows the following information:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Updated at"
            }), ": The time of the last data push, in your local time zone."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Updated by"
            }), ": The last user to enable or disable the feature."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Expiration date"
            }), ": The time remaining before your package expires."]
          }), `
`]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/analytics/datadog-integration-step-4.png",
            alt: "Datadog configuration page with the status set to Online"
          })
        }), `
`, _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "After you change the status, it can take up to five minutes for the data push to start or stop."
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "You are now ready to use Datadog to analyze the use of your Agora products."
    }), `
`, _jsx(_components.h2, {
      id: "add-analytics-to-your-datadog-dashboard",
      children: "Add Analytics to your Datadog dashboard"
    }), `
`, _jsx(_components.p, {
      children: "To display Agora Analytics metrics on your Datadog dashboard:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Log in to your Datadog account. Go to the ", _jsx(_components.strong, {
            children: "Integrations"
          }), ' page and search for "Agora". Agora Analytics appears in the search results.']
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/analytics/datadog-integration-step-5.png",
            alt: "Agora Analytics in the Datadog Integrations search results"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Select ", _jsx(_components.strong, {
            children: "Agora Analytics"
          }), " and add it to your Datadog dashboard."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/analytics/datadog-integration-step-6.png",
            alt: "Adding the Agora Analytics integration in Datadog"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Open your Datadog dashboard to see statistics from Agora Analytics."
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/analytics/datadog-integration-step-7.png",
            alt: "Agora Analytics statistics on a Datadog dashboard"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsxs(_components.p, {
      children: ["For details about the integration on the Datadog side, see the ", _jsx(_components.a, {
        href: "https://docs.datadoghq.com/integrations/agora-analytics/",
        children: "Agora Analytics integration page on Datadog"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "rtc-metrics",
      children: "RTC metrics"
    }), `
`, _jsx(_components.p, {
      children: "Agora Analytics provides the following RTC metrics to Datadog:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Metric name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "agora.rtc.app_id.online_user"
            }), " (count)"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of online users aggregated by App ID, calculated every minute."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "agora.rtc.app_id.online_channel"
            }), " (count)"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of online channels aggregated by App ID, calculated every minute."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "agora.rtc.app_id.join_success_rate"
            }), " (rate)"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Join success rate aggregated by App ID, calculated every minute."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "agora.rtc.app_id.join_success_in_5s_rate"
            }), " (rate)"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Join success rate within 5 seconds aggregated by App ID, calculated every minute."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "agora.rtc.app_id.join_attempt"
            }), " (count)"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of join attempts aggregated by App ID, calculated every minute."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "agora.rtc.app_id.join_success_count"
            }), " (count)"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of successful joins aggregated by App ID, calculated every minute."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "agora.rtc.app_id.audio_freeze_rate"
            }), " (rate)"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Audio freeze rate aggregated by App ID, calculated every minute."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "agora.rtc.app_id.video_freeze_rate"
            }), " (rate)"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Video freeze rate aggregated by App ID, calculated every minute."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "agora.rtc.app_id.network_delay_rate"
            }), " (rate)"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Network delay rate aggregated by App ID, calculated every minute."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "chat-metrics",
      children: "Chat metrics"
    }), `
`, _jsx(_components.p, {
      children: "Agora Analytics provides the following Chat metrics to Datadog:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Metric name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "agora.chat.group.total"
            }), " (count)"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Total chat groups."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "agora.chat.group.new"
            }), " (count)"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Daily new chat groups."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "agora.chat.group.disbanded"
            }), " (count)"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Daily disbanded chat groups."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "agora.chat.group.active"
            }), " (count)"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Daily active chat groups."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "agora.chat.room.total"
            }), " (count)"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Total chat rooms."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "agora.chat.room.new"
            }), " (count)"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Daily new chat rooms."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "agora.chat.room.disbanded"
            }), " (count)"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Daily disbanded chat rooms."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "agora.chat.room.active"
            }), " (count)"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Daily active chat rooms."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "agora.chat.room.pcu"
            }), " (count)"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Daily chat room peak concurrent users."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "agora.chat.user.total"
            }), " (count)"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Total registered users."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "agora.chat.user.dnu"
            }), " (count)"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Daily new users."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "agora.chat.user.dau"
            }), " (count)"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Daily active users."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "agora.chat.user.maxdau"
            }), " (count)"]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Monthly maximum daily active users."
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
