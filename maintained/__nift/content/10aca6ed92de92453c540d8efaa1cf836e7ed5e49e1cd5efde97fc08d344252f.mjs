import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Pricing for Web Page Recording",
  description: "Depending on the number of minutes you intend to record, estimate your monthly cost for Web Page Recording."
};
export let _markdown = `

This page explains how Agora calculates your monthly bill for
[Web Page Recording](/en/realtime-media/cloud-recording/build/start-a-recording/webpage-mode).

If you have already signed a contract with Agora, the billing terms and
conditions within that contract take precedence.

## Web Page Recording pricing [#web-page-recording-pricing]

The unit pricing for video usage is as follows:

| Video category                 | Pricing, $US/1,000 minutes |
| :----------------------------- | :------------------------- |
| High-definition (HD)           | 14                         |
| Full high-definition (Full HD) | 28                         |

When you use Web Page Recording, Agora charges you based on the usage and resolution of the recorded videos.

If you use other Agora products or services in the web page being recorded,
such as [Video Calling](/en/realtime-media/rtc),
[Whiteboard](/en/realtime-media/whiteboard),
or [Signaling](/en/realtime-media/rtm), expect additional charges.

See pricing documentation of each product or service for details.

## Cost calculation [#cost-calculation]

Billing occurs monthly. At the end of each month, Agora calculates the total duration of web page recording
usage (in minutes) for that month in all projects under your Agora account,
[publishes bills, and performs deductions](/en/introduction/billing/billing-policies).
Note that this usage is divided into different video categories.
Web page recording usage isn't covered by the monthly
[10,000 free-of-charge minutes](/en/introduction/billing/billing-policies#free-of-charge-policy).
Agora multiplies the usage by its corresponding unit price
and adds up the costs to get the total cost for that month.

The basic formula is shown here:

**Monthly cost = total usage per category × unit price per category**

### Usage [#usage]

For the web page recording service, Agora calculates usage from the moment a recording begins until the moment
it ends, measured in seconds.

When starting a web page recording, you can [set the video profile](/en/realtime-media/cloud-recording/build/customize-the-recording/recording-video-profile)
(resolution, frame rate, and bitrate) for the output video stream.

### Resolution [#resolution]

Based on the resolution of the output video of the web page recording, Agora divides the usage into the
following categories:

| Video category                 | Video resolution                                                  |
| :----------------------------- | :---------------------------------------------------------------- |
| High-definition (HD)           | Up to 921,600 (1280 × 720）                                        |
| Full high-definition (Full HD) | From greater than 921,600 (1280 × 720) to 2,073,600 (1920 × 1080) |

## Preferential billing policies [#preferential-billing-policies]

If RTC SDK is used in the web page being recorded to implement real-time communications, and the user is
subscribed to a channel with a high-definition (HD) [aggregate video resolution](pricing#aggregate-video-resolution-in-dual-stream-use-cases), Agora waives the cost of the RTC SDK usage during the web page recording; only the web page recording fees apply. Real-time communication at higher aggregate resolutions does not receive this discount.

## Examples [#examples]

This section provides a simple example of calculating the cost of a web page recording session.

Suppose you start a web page recording process that runs for 6,000 seconds, where you set the resolution of the output video as 960 × 720.

The output resolution is 691,200, which puts it into the high-definition (HD) category. The unit pricing for HD video is US$14/1,000 minutes.

To calculate billable time, the usage is converted from seconds to minutes, so 6,000 seconds of usage converts to 100 billable minutes.

| Process                     | HD video | Full HD video |
| :-------------------------- | :------- | :------------ |
| Usage duration (in seconds) | 6,000    | 0             |
| Billable service minutes    | 100      | 0             |

Therefore, the cost is as follows:

**Cost = video unit price × video duration usage = 14 × (100/1000) = 1.4**

Therefore, the actual recording fee is US$1.40.

## Reference [#reference]

### Accuracy of service minutes [#accuracy-of-service-minutes]

Agora bills usage by the minute but records usage by the second. Monthly usage for billing is actually calculated by totaling each type of usage (in seconds) and then dividing by 60, rounding up to the nearest integer. For example, if the HD service usage for a month is 59 seconds, then this is billed as 1 minute; if the Full HD service usage for a month is 61 seconds, then this is billed as 2 minutes. Therefore, the margin of error for usage of each category per month is less than 1 minute.

### Multiple recordings [#multiple-recordings]

If two web page recording processes are started for the same web page, Agora charges fees for both.

### Charge duration [#charge-duration]

The charging will continue until the web page recording stops.
You should set a reasonable [maxRecordingHour](/en/api-reference/api-ref/cloud-recording/start) based on the
actual business use-case or actively stop the web page recording.

## See also [#see-also]

* [Agora's free-of-charge policy for the first 10,000 minutes](/en/introduction/billing/billing-policies#free-of-charge-policy)
* [Billing, free deduction, and account suspension](/en/introduction/billing/billing-policies#billing-and-account-policies)
* [Cloud Recording pricing](pricing)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: `This page explains how Agora calculates your monthly bill for
Web Page Recording.`
  }, {
    heading: undefined,
    content: `If you have already signed a contract with Agora, the billing terms and
conditions within that contract take precedence.`
  }, {
    heading: "web-page-recording-pricing",
    content: "The unit pricing for video usage is as follows:"
  }, {
    heading: "web-page-recording-pricing",
    content: "Video category"
  }, {
    heading: "web-page-recording-pricing",
    content: "Pricing, $US/1,000 minutes"
  }, {
    heading: "web-page-recording-pricing",
    content: "High-definition (HD)"
  }, {
    heading: "web-page-recording-pricing",
    content: "14"
  }, {
    heading: "web-page-recording-pricing",
    content: "Full high-definition (Full HD)"
  }, {
    heading: "web-page-recording-pricing",
    content: "28"
  }, {
    heading: "web-page-recording-pricing",
    content: "When you use Web Page Recording, Agora charges you based on the usage and resolution of the recorded videos."
  }, {
    heading: "web-page-recording-pricing",
    content: `If you use other Agora products or services in the web page being recorded,
such as Video Calling,
Whiteboard,
or Signaling, expect additional charges.`
  }, {
    heading: "web-page-recording-pricing",
    content: "See pricing documentation of each product or service for details."
  }, {
    heading: "cost-calculation",
    content: `Billing occurs monthly. At the end of each month, Agora calculates the total duration of web page recording
usage (in minutes) for that month in all projects under your Agora account,
publishes bills, and performs deductions.
Note that this usage is divided into different video categories.
Web page recording usage isn't covered by the monthly
10,000 free-of-charge minutes.
Agora multiplies the usage by its corresponding unit price
and adds up the costs to get the total cost for that month.`
  }, {
    heading: "cost-calculation",
    content: "The basic formula is shown here:"
  }, {
    heading: "cost-calculation",
    content: "**Monthly cost = total usage per category × unit price per category**"
  }, {
    heading: "usage",
    content: `For the web page recording service, Agora calculates usage from the moment a recording begins until the moment
it ends, measured in seconds.`
  }, {
    heading: "usage",
    content: `When starting a web page recording, you can set the video profile
(resolution, frame rate, and bitrate) for the output video stream.`
  }, {
    heading: "resolution",
    content: `Based on the resolution of the output video of the web page recording, Agora divides the usage into the
following categories:`
  }, {
    heading: "resolution",
    content: "Video category"
  }, {
    heading: "resolution",
    content: "Video resolution"
  }, {
    heading: "resolution",
    content: "High-definition (HD)"
  }, {
    heading: "resolution",
    content: "Up to 921,600 (1280 × 720）"
  }, {
    heading: "resolution",
    content: "Full high-definition (Full HD)"
  }, {
    heading: "resolution",
    content: "From greater than 921,600 (1280 × 720) to 2,073,600 (1920 × 1080)"
  }, {
    heading: "preferential-billing-policies",
    content: `If RTC SDK is used in the web page being recorded to implement real-time communications, and the user is
subscribed to a channel with a high-definition (HD) aggregate video resolution, Agora waives the cost of the RTC SDK usage during the web page recording; only the web page recording fees apply. Real-time communication at higher aggregate resolutions does not receive this discount.`
  }, {
    heading: "examples",
    content: "This section provides a simple example of calculating the cost of a web page recording session."
  }, {
    heading: "examples",
    content: "Suppose you start a web page recording process that runs for 6,000 seconds, where you set the resolution of the output video as 960 × 720."
  }, {
    heading: "examples",
    content: "The output resolution is 691,200, which puts it into the high-definition (HD) category. The unit pricing for HD video is US$14/1,000 minutes."
  }, {
    heading: "examples",
    content: "To calculate billable time, the usage is converted from seconds to minutes, so 6,000 seconds of usage converts to 100 billable minutes."
  }, {
    heading: "examples",
    content: "Process"
  }, {
    heading: "examples",
    content: "HD video"
  }, {
    heading: "examples",
    content: "Full HD video"
  }, {
    heading: "examples",
    content: "Usage duration (in seconds)"
  }, {
    heading: "examples",
    content: "6,000"
  }, {
    heading: "examples",
    content: "0"
  }, {
    heading: "examples",
    content: "Billable service minutes"
  }, {
    heading: "examples",
    content: "100"
  }, {
    heading: "examples",
    content: "0"
  }, {
    heading: "examples",
    content: "Therefore, the cost is as follows:"
  }, {
    heading: "examples",
    content: "**Cost = video unit price × video duration usage = 14 × (100/1000) = 1.4**"
  }, {
    heading: "examples",
    content: "Therefore, the actual recording fee is US$1.40."
  }, {
    heading: "accuracy-of-service-minutes",
    content: "Agora bills usage by the minute but records usage by the second. Monthly usage for billing is actually calculated by totaling each type of usage (in seconds) and then dividing by 60, rounding up to the nearest integer. For example, if the HD service usage for a month is 59 seconds, then this is billed as 1 minute; if the Full HD service usage for a month is 61 seconds, then this is billed as 2 minutes. Therefore, the margin of error for usage of each category per month is less than 1 minute."
  }, {
    heading: "multiple-recordings",
    content: "If two web page recording processes are started for the same web page, Agora charges fees for both."
  }, {
    heading: "charge-duration",
    content: `The charging will continue until the web page recording stops.
You should set a reasonable maxRecordingHour based on the
actual business use-case or actively stop the web page recording.`
  }, {
    heading: "see-also",
    content: "Agora's free-of-charge policy for the first 10,000 minutes"
  }, {
    heading: "see-also",
    content: "Billing, free deduction, and account suspension"
  }, {
    heading: "see-also",
    content: "Cloud Recording pricing"
  }],
  headings: [{
    id: "web-page-recording-pricing",
    content: "Web Page Recording pricing"
  }, {
    id: "cost-calculation",
    content: "Cost calculation"
  }, {
    id: "usage",
    content: "Usage"
  }, {
    id: "resolution",
    content: "Resolution"
  }, {
    id: "preferential-billing-policies",
    content: "Preferential billing policies"
  }, {
    id: "examples",
    content: "Examples"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "accuracy-of-service-minutes",
    content: "Accuracy of service minutes"
  }, {
    id: "multiple-recordings",
    content: "Multiple recordings"
  }, {
    id: "charge-duration",
    content: "Charge duration"
  }, {
    id: "see-also",
    content: "See also"
  }]
};
export let toc = [{
  depth: 2,
  url: "#web-page-recording-pricing",
  title: _jsx(_Fragment, {
    children: "Web Page Recording pricing"
  })
}, {
  depth: 2,
  url: "#cost-calculation",
  title: _jsx(_Fragment, {
    children: "Cost calculation"
  })
}, {
  depth: 3,
  url: "#usage",
  title: _jsx(_Fragment, {
    children: "Usage"
  })
}, {
  depth: 3,
  url: "#resolution",
  title: _jsx(_Fragment, {
    children: "Resolution"
  })
}, {
  depth: 2,
  url: "#preferential-billing-policies",
  title: _jsx(_Fragment, {
    children: "Preferential billing policies"
  })
}, {
  depth: 2,
  url: "#examples",
  title: _jsx(_Fragment, {
    children: "Examples"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#accuracy-of-service-minutes",
  title: _jsx(_Fragment, {
    children: "Accuracy of service minutes"
  })
}, {
  depth: 3,
  url: "#multiple-recordings",
  title: _jsx(_Fragment, {
    children: "Multiple recordings"
  })
}, {
  depth: 3,
  url: "#charge-duration",
  title: _jsx(_Fragment, {
    children: "Charge duration"
  })
}, {
  depth: 2,
  url: "#see-also",
  title: _jsx(_Fragment, {
    children: "See also"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    li: "li",
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
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: [`This page explains how Agora calculates your monthly bill for
`, _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/start-a-recording/webpage-mode",
        children: "Web Page Recording"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: `If you have already signed a contract with Agora, the billing terms and
conditions within that contract take precedence.`
    }), `
`, _jsx(_components.h2, {
      id: "web-page-recording-pricing",
      children: "Web Page Recording pricing"
    }), `
`, _jsx(_components.p, {
      children: "The unit pricing for video usage is as follows:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Video category"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Pricing, $US/1,000 minutes"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "High-definition (HD)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "14"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Full high-definition (Full HD)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "28"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "When you use Web Page Recording, Agora charges you based on the usage and resolution of the recorded videos."
    }), `
`, _jsxs(_components.p, {
      children: [`If you use other Agora products or services in the web page being recorded,
such as `, _jsx(_components.a, {
        href: "/en/realtime-media/rtc",
        children: "Video Calling"
      }), `,
`, _jsx(_components.a, {
        href: "/en/realtime-media/whiteboard",
        children: "Whiteboard"
      }), `,
or `, _jsx(_components.a, {
        href: "/en/realtime-media/rtm",
        children: "Signaling"
      }), ", expect additional charges."]
    }), `
`, _jsx(_components.p, {
      children: "See pricing documentation of each product or service for details."
    }), `
`, _jsx(_components.h2, {
      id: "cost-calculation",
      children: "Cost calculation"
    }), `
`, _jsxs(_components.p, {
      children: [`Billing occurs monthly. At the end of each month, Agora calculates the total duration of web page recording
usage (in minutes) for that month in all projects under your Agora account,
`, _jsx(_components.a, {
        href: "/en/introduction/billing/billing-policies",
        children: "publishes bills, and performs deductions"
      }), `.
Note that this usage is divided into different video categories.
Web page recording usage isn't covered by the monthly
`, _jsx(_components.a, {
        href: "/en/introduction/billing/billing-policies#free-of-charge-policy",
        children: "10,000 free-of-charge minutes"
      }), `.
Agora multiplies the usage by its corresponding unit price
and adds up the costs to get the total cost for that month.`]
    }), `
`, _jsx(_components.p, {
      children: "The basic formula is shown here:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Monthly cost = total usage per category × unit price per category"
      })
    }), `
`, _jsx(_components.h3, {
      id: "usage",
      children: "Usage"
    }), `
`, _jsx(_components.p, {
      children: `For the web page recording service, Agora calculates usage from the moment a recording begins until the moment
it ends, measured in seconds.`
    }), `
`, _jsxs(_components.p, {
      children: ["When starting a web page recording, you can ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/customize-the-recording/recording-video-profile",
        children: "set the video profile"
      }), `
(resolution, frame rate, and bitrate) for the output video stream.`]
    }), `
`, _jsx(_components.h3, {
      id: "resolution",
      children: "Resolution"
    }), `
`, _jsx(_components.p, {
      children: `Based on the resolution of the output video of the web page recording, Agora divides the usage into the
following categories:`
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Video category"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Video resolution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "High-definition (HD)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Up to 921,600 (1280 × 720）"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Full high-definition (Full HD)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "From greater than 921,600 (1280 × 720) to 2,073,600 (1920 × 1080)"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "preferential-billing-policies",
      children: "Preferential billing policies"
    }), `
`, _jsxs(_components.p, {
      children: [`If RTC SDK is used in the web page being recorded to implement real-time communications, and the user is
subscribed to a channel with a high-definition (HD) `, _jsx(_components.a, {
        href: "pricing#aggregate-video-resolution-in-dual-stream-use-cases",
        children: "aggregate video resolution"
      }), ", Agora waives the cost of the RTC SDK usage during the web page recording; only the web page recording fees apply. Real-time communication at higher aggregate resolutions does not receive this discount."]
    }), `
`, _jsx(_components.h2, {
      id: "examples",
      children: "Examples"
    }), `
`, _jsx(_components.p, {
      children: "This section provides a simple example of calculating the cost of a web page recording session."
    }), `
`, _jsx(_components.p, {
      children: "Suppose you start a web page recording process that runs for 6,000 seconds, where you set the resolution of the output video as 960 × 720."
    }), `
`, _jsx(_components.p, {
      children: "The output resolution is 691,200, which puts it into the high-definition (HD) category. The unit pricing for HD video is US$14/1,000 minutes."
    }), `
`, _jsx(_components.p, {
      children: "To calculate billable time, the usage is converted from seconds to minutes, so 6,000 seconds of usage converts to 100 billable minutes."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Process"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "HD video"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Full HD video"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Usage duration (in seconds)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "6,000"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Billable service minutes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "Therefore, the cost is as follows:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Cost = video unit price × video duration usage = 14 × (100/1000) = 1.4"
      })
    }), `
`, _jsx(_components.p, {
      children: "Therefore, the actual recording fee is US$1.40."
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.h3, {
      id: "accuracy-of-service-minutes",
      children: "Accuracy of service minutes"
    }), `
`, _jsx(_components.p, {
      children: "Agora bills usage by the minute but records usage by the second. Monthly usage for billing is actually calculated by totaling each type of usage (in seconds) and then dividing by 60, rounding up to the nearest integer. For example, if the HD service usage for a month is 59 seconds, then this is billed as 1 minute; if the Full HD service usage for a month is 61 seconds, then this is billed as 2 minutes. Therefore, the margin of error for usage of each category per month is less than 1 minute."
    }), `
`, _jsx(_components.h3, {
      id: "multiple-recordings",
      children: "Multiple recordings"
    }), `
`, _jsx(_components.p, {
      children: "If two web page recording processes are started for the same web page, Agora charges fees for both."
    }), `
`, _jsx(_components.h3, {
      id: "charge-duration",
      children: "Charge duration"
    }), `
`, _jsxs(_components.p, {
      children: [`The charging will continue until the web page recording stops.
You should set a reasonable `, _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording/start",
        children: "maxRecordingHour"
      }), ` based on the
actual business use-case or actively stop the web page recording.`]
    }), `
`, _jsx(_components.h2, {
      id: "see-also",
      children: "See also"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/introduction/billing/billing-policies#free-of-charge-policy",
          children: "Agora's free-of-charge policy for the first 10,000 minutes"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/introduction/billing/billing-policies#billing-and-account-policies",
          children: "Billing, free deduction, and account suspension"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "pricing",
          children: "Cloud Recording pricing"
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
