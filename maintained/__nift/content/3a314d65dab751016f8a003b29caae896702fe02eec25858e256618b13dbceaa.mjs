import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Integrate Analytics with New Relic",
  description: "Configure Agora Analytics to push data directly to your New Relic account."
};
export let _markdown = `

[New Relic](https://docs.newrelic.com/) is an observability platform that you can use to monitor applications and infrastructure, query metrics, set up alerts, and build dashboards. To analyze Agora product data alongside your other telemetry, you can push Agora Analytics usage, quality, and performance statistics directly to your New Relic account.

This page shows you how to set up the New Relic integration with Agora Analytics.

## Prerequisites [#prerequisites]

To use the New Relic integration, you need:

* An Agora Analytics **Premium** or **Enterprise** [pricing plan](/en/realtime-media/agora-analytics/reference/pricing). Both plans include the New Relic integration, so you don't need to request access.
* A New Relic account and a [license key](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/#license-key) for the account that receives the data.

## Enable and configure New Relic [#enable-and-configure-new-relic]

To enable the Agora Analytics integration with New Relic:

1. In [Agora Analytics](https://analytics-lab.agora.io/), go to **Integration > New Relic**.

2. On the configuration page, select the **Region**, the **Projects**, and the **Metrics** you want to push to New Relic. For the full list of metrics, see [Reference](#reference).

3. Enter your New Relic license key, then click **Save** and **Enable**.

4. Check that the **Configuration Status** changes to **Online**.

   The configuration page also shows the following information:

   * **Updated at**: The time of the last data push, in your local time zone.
   * **Updated by**: The last user to enable or disable the feature.
   * **Expiration date**: The time remaining before your package expires.

   <CalloutContainer type="info">
     <CalloutDescription>
       After you change the status, it can take up to five minutes for the data push to start or stop.
     </CalloutDescription>
   </CalloutContainer>

5. To confirm that data is arriving, open the New Relic query builder and run the following NRQL query:

   \`\`\`sql
   FROM Metric
   SELECT max(agora.rtc.app_id.online_user) AS 'Online users'
   FACET product_type
   SINCE 1 hour ago
   TIMESERIES 1 minute
   \`\`\`

   Agora Analytics stores metrics in New Relic as the \`Metric\` event type. The \`product_type\` attribute breaks the results down by Agora product.

You are now ready to use New Relic to analyze the use of your Agora products.

## Reference [#reference]

Agora Analytics pushes the following RTC metrics to New Relic:

| Metric name                                | Type  | Description                                                                       |
| :----------------------------------------- | :---- | :-------------------------------------------------------------------------------- |
| \`agora.rtc.app_id.online_user\`             | gauge | Number of online users aggregated by App ID, calculated every minute.             |
| \`agora.rtc.app_id.online_channel\`          | gauge | Number of online channels aggregated by App ID, calculated every minute.          |
| \`agora.rtc.app_id.join_success_rate\`       | gauge | Join success rate aggregated by App ID, calculated every minute.                  |
| \`agora.rtc.app_id.join_success_in_5s_rate\` | gauge | Join success rate within 5 seconds aggregated by App ID, calculated every minute. |
| \`agora.rtc.app_id.join_attempt\`            | count | Number of join attempts aggregated by App ID, calculated every minute.            |
| \`agora.rtc.app_id.join_success_count\`      | count | Number of successful joins aggregated by App ID, calculated every minute.         |
| \`agora.rtc.app_id.audio_freeze_rate\`       | gauge | Audio freeze rate aggregated by App ID, calculated every minute.                  |
| \`agora.rtc.app_id.video_freeze_rate\`       | gauge | Video freeze rate aggregated by App ID, calculated every minute.                  |
| \`agora.rtc.app_id.network_delay_rate\`      | gauge | Network delay rate aggregated by App ID, calculated every minute.                 |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "New Relic is an observability platform that you can use to monitor applications and infrastructure, query metrics, set up alerts, and build dashboards. To analyze Agora product data alongside your other telemetry, you can push Agora Analytics usage, quality, and performance statistics directly to your New Relic account."
  }, {
    heading: undefined,
    content: "This page shows you how to set up the New Relic integration with Agora Analytics."
  }, {
    heading: "prerequisites",
    content: "To use the New Relic integration, you need:"
  }, {
    heading: "prerequisites",
    content: "An Agora Analytics **Premium** or **Enterprise** pricing plan. Both plans include the New Relic integration, so you don't need to request access."
  }, {
    heading: "prerequisites",
    content: "A New Relic account and a license key for the account that receives the data."
  }, {
    heading: "enable-and-configure-new-relic",
    content: "To enable the Agora Analytics integration with New Relic:"
  }, {
    heading: "enable-and-configure-new-relic",
    content: "In Agora Analytics, go to **Integration > New Relic**."
  }, {
    heading: "enable-and-configure-new-relic",
    content: "On the configuration page, select the **Region**, the **Projects**, and the **Metrics** you want to push to New Relic. For the full list of metrics, see Reference."
  }, {
    heading: "enable-and-configure-new-relic",
    content: "Enter your New Relic license key, then click **Save** and **Enable**."
  }, {
    heading: "enable-and-configure-new-relic",
    content: "Check that the **Configuration Status** changes to **Online**."
  }, {
    heading: "enable-and-configure-new-relic",
    content: "The configuration page also shows the following information:"
  }, {
    heading: "enable-and-configure-new-relic",
    content: "**Updated at**: The time of the last data push, in your local time zone."
  }, {
    heading: "enable-and-configure-new-relic",
    content: "**Updated by**: The last user to enable or disable the feature."
  }, {
    heading: "enable-and-configure-new-relic",
    content: "**Expiration date**: The time remaining before your package expires."
  }, {
    heading: "enable-and-configure-new-relic",
    content: "After you change the status, it can take up to five minutes for the data push to start or stop."
  }, {
    heading: "enable-and-configure-new-relic",
    content: "To confirm that data is arriving, open the New Relic query builder and run the following NRQL query:"
  }, {
    heading: "enable-and-configure-new-relic",
    content: "Agora Analytics stores metrics in New Relic as the `Metric` event type. The `product_type` attribute breaks the results down by Agora product."
  }, {
    heading: "enable-and-configure-new-relic",
    content: "You are now ready to use New Relic to analyze the use of your Agora products."
  }, {
    heading: "reference",
    content: "Agora Analytics pushes the following RTC metrics to New Relic:"
  }, {
    heading: "reference",
    content: "Metric name"
  }, {
    heading: "reference",
    content: "Type"
  }, {
    heading: "reference",
    content: "Description"
  }, {
    heading: "reference",
    content: "`agora.rtc.app_id.online_user`"
  }, {
    heading: "reference",
    content: "gauge"
  }, {
    heading: "reference",
    content: "Number of online users aggregated by App ID, calculated every minute."
  }, {
    heading: "reference",
    content: "`agora.rtc.app_id.online_channel`"
  }, {
    heading: "reference",
    content: "gauge"
  }, {
    heading: "reference",
    content: "Number of online channels aggregated by App ID, calculated every minute."
  }, {
    heading: "reference",
    content: "`agora.rtc.app_id.join_success_rate`"
  }, {
    heading: "reference",
    content: "gauge"
  }, {
    heading: "reference",
    content: "Join success rate aggregated by App ID, calculated every minute."
  }, {
    heading: "reference",
    content: "`agora.rtc.app_id.join_success_in_5s_rate`"
  }, {
    heading: "reference",
    content: "gauge"
  }, {
    heading: "reference",
    content: "Join success rate within 5 seconds aggregated by App ID, calculated every minute."
  }, {
    heading: "reference",
    content: "`agora.rtc.app_id.join_attempt`"
  }, {
    heading: "reference",
    content: "count"
  }, {
    heading: "reference",
    content: "Number of join attempts aggregated by App ID, calculated every minute."
  }, {
    heading: "reference",
    content: "`agora.rtc.app_id.join_success_count`"
  }, {
    heading: "reference",
    content: "count"
  }, {
    heading: "reference",
    content: "Number of successful joins aggregated by App ID, calculated every minute."
  }, {
    heading: "reference",
    content: "`agora.rtc.app_id.audio_freeze_rate`"
  }, {
    heading: "reference",
    content: "gauge"
  }, {
    heading: "reference",
    content: "Audio freeze rate aggregated by App ID, calculated every minute."
  }, {
    heading: "reference",
    content: "`agora.rtc.app_id.video_freeze_rate`"
  }, {
    heading: "reference",
    content: "gauge"
  }, {
    heading: "reference",
    content: "Video freeze rate aggregated by App ID, calculated every minute."
  }, {
    heading: "reference",
    content: "`agora.rtc.app_id.network_delay_rate`"
  }, {
    heading: "reference",
    content: "gauge"
  }, {
    heading: "reference",
    content: "Network delay rate aggregated by App ID, calculated every minute."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "enable-and-configure-new-relic",
    content: "Enable and configure New Relic"
  }, {
    id: "reference",
    content: "Reference"
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
  url: "#enable-and-configure-new-relic",
  title: _jsx(_Fragment, {
    children: "Enable and configure New Relic"
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "https://docs.newrelic.com/",
        children: "New Relic"
      }), " is an observability platform that you can use to monitor applications and infrastructure, query metrics, set up alerts, and build dashboards. To analyze Agora product data alongside your other telemetry, you can push Agora Analytics usage, quality, and performance statistics directly to your New Relic account."]
    }), `
`, _jsx(_components.p, {
      children: "This page shows you how to set up the New Relic integration with Agora Analytics."
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "To use the New Relic integration, you need:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["An Agora Analytics ", _jsx(_components.strong, {
          children: "Premium"
        }), " or ", _jsx(_components.strong, {
          children: "Enterprise"
        }), " ", _jsx(_components.a, {
          href: "/en/realtime-media/agora-analytics/reference/pricing",
          children: "pricing plan"
        }), ". Both plans include the New Relic integration, so you don't need to request access."]
      }), `
`, _jsxs(_components.li, {
        children: ["A New Relic account and a ", _jsx(_components.a, {
          href: "https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/#license-key",
          children: "license key"
        }), " for the account that receives the data."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "enable-and-configure-new-relic",
      children: "Enable and configure New Relic"
    }), `
`, _jsx(_components.p, {
      children: "To enable the Agora Analytics integration with New Relic:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In ", _jsx(_components.a, {
            href: "https://analytics-lab.agora.io/",
            children: "Agora Analytics"
          }), ", go to ", _jsx(_components.strong, {
            children: "Integration > New Relic"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the configuration page, select the ", _jsx(_components.strong, {
            children: "Region"
          }), ", the ", _jsx(_components.strong, {
            children: "Projects"
          }), ", and the ", _jsx(_components.strong, {
            children: "Metrics"
          }), " you want to push to New Relic. For the full list of metrics, see ", _jsx(_components.a, {
            href: "#reference",
            children: "Reference"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Enter your New Relic license key, then click ", _jsx(_components.strong, {
            children: "Save"
          }), " and ", _jsx(_components.strong, {
            children: "Enable"
          }), "."]
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
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "To confirm that data is arriving, open the New Relic query builder and run the following NRQL query:"
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
                  children: "FROM"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " Metric"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "SELECT"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " max"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "rtc"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "app_id"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "online_user"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ") "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "AS"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'Online users'"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "FACET product_type"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "SINCE "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " hour"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ago"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "TIMESERIES "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " minute"
                })]
              })]
            })
          })
        }), `
`, _jsxs(_components.p, {
          children: ["Agora Analytics stores metrics in New Relic as the ", _jsx(_components.code, {
            children: "Metric"
          }), " event type. The ", _jsx(_components.code, {
            children: "product_type"
          }), " attribute breaks the results down by Agora product."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "You are now ready to use New Relic to analyze the use of your Agora products."
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "Agora Analytics pushes the following RTC metrics to New Relic:"
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
            children: "Type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "agora.rtc.app_id.online_user"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "gauge"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of online users aggregated by App ID, calculated every minute."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "agora.rtc.app_id.online_channel"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "gauge"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of online channels aggregated by App ID, calculated every minute."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "agora.rtc.app_id.join_success_rate"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "gauge"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Join success rate aggregated by App ID, calculated every minute."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "agora.rtc.app_id.join_success_in_5s_rate"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "gauge"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Join success rate within 5 seconds aggregated by App ID, calculated every minute."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "agora.rtc.app_id.join_attempt"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "count"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of join attempts aggregated by App ID, calculated every minute."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "agora.rtc.app_id.join_success_count"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "count"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number of successful joins aggregated by App ID, calculated every minute."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "agora.rtc.app_id.audio_freeze_rate"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "gauge"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Audio freeze rate aggregated by App ID, calculated every minute."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "agora.rtc.app_id.video_freeze_rate"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "gauge"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Video freeze rate aggregated by App ID, calculated every minute."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "agora.rtc.app_id.network_delay_rate"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "gauge"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Network delay rate aggregated by App ID, calculated every minute."
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
