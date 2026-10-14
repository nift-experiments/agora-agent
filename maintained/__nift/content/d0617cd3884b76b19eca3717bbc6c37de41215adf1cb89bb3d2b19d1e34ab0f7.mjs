import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Pricing",
  description: "Introduces the billing policy for the Media Pull service provided by Agora."
};
export let _markdown = `

This page describes how Media Pull usage is billed.

<CalloutContainer type="info">
  <CalloutDescription>
    Your billing details may differ if you have signed a contract with Agora.
  </CalloutDescription>
</CalloutContainer>

## Billing components [#billing-components]

Media Pull billing comprises transcoding charges and RTC channel usage charges:

* **Transcoding charges**: Charges for injecting an online media stream into an RTC channel. This charge is not included in Agora's policy of granting 10,000 minutes of free usage per month.

* **RTC channel usage charges**: Charges for injecting an online stream into an RTC channel. These charges are included in real-time communication usage. They may also count toward the voice call audio minutes included in [Agora's 10,000 minutes of free usage per month](/en/realtime-media/rtc/reference/billing-policies#free-of-charge-policy).

## Transcoding charges [#transcoding-charges]

Transcoding charges are incurred when you inject an online stream into an RTC channel.
Based on the injected stream, transcoding charges are categorized as follows:

* **Audio transcoding charges**: If you inject an audio stream into an RTC channel, audio transcoding charges are incurred.

  *Audio transcoding charges = Audio transcoding unit price × Audio transcoding service minutes*

* **Video transcoding charges**: If you inject a video stream or an audio and video stream into an RTC channel, video transcoding charges are incurred.

  *Video transcoding charges = Video transcoding unit price × Video transcoding service minutes*

### Transcoding pricing [#transcoding-pricing]

The following table shows the transcoding prices for Media Pull:

| Service         | Resolution / Type                                                                  | Pricing ($US/1,000 minutes) |
| --------------- | ---------------------------------------------------------------------------------- | --------------------------- |
| Audio           | Audio stream                                                                       | $1.15                       |
| H.264 HD video  | Output resolution up to 921,600 (1280 × 720)                                       | $6.86                       |
| H.264 FHD video | Output resolution greater than 921,600 (1280 × 720), up to 2,073,600 (1920 × 1080) | $15.49                      |

### Transcoding duration [#transcoding-duration]

Agora calculates transcoding duration as the time between when Media Pull is enabled and when it is destroyed.

* **Audio transcoding duration**: The time during which Media Pull transcodes an audio stream.
* **Video transcoding duration**: The time during which Media Pull transcodes a video stream or an audio and video stream.

<CalloutContainer type="info">
  <CalloutDescription>
    When using Media Pull, if \`playTs\` is greater than \`createTs\`, the interval between these timestamps is billed as audio transcoding duration.
  </CalloutDescription>
</CalloutContainer>

## RTC channel usage charges [#rtc-channel-usage-charges]

Injecting an online stream into an RTC channel using the Media Pull service incurs RTC charges. This usage is billed as part of real-time communication charges.

### Channel usage pricing [#channel-usage-pricing]

Since the Media Pull service only publishes streams to the RTC channel and does not subscribe to or receive streams, channel usage is billed the same as audio usage, at &#x2A;*$0.99 per 1,000 minutes (USD)**.

### Channel usage duration [#channel-usage-duration]

Channel usage duration is the time from when the Media Pull service starts publishing streams to the RTC channel until it stops.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page describes how Media Pull usage is billed."
  }, {
    heading: undefined,
    content: "Your billing details may differ if you have signed a contract with Agora."
  }, {
    heading: "billing-components",
    content: "Media Pull billing comprises transcoding charges and RTC channel usage charges:"
  }, {
    heading: "billing-components",
    content: "**Transcoding charges**: Charges for injecting an online media stream into an RTC channel. This charge is not included in Agora's policy of granting 10,000 minutes of free usage per month."
  }, {
    heading: "billing-components",
    content: "**RTC channel usage charges**: Charges for injecting an online stream into an RTC channel. These charges are included in real-time communication usage. They may also count toward the voice call audio minutes included in Agora's 10,000 minutes of free usage per month."
  }, {
    heading: "transcoding-charges",
    content: `Transcoding charges are incurred when you inject an online stream into an RTC channel.
Based on the injected stream, transcoding charges are categorized as follows:`
  }, {
    heading: "transcoding-charges",
    content: "**Audio transcoding charges**: If you inject an audio stream into an RTC channel, audio transcoding charges are incurred."
  }, {
    heading: "transcoding-charges",
    content: "*Audio transcoding charges = Audio transcoding unit price × Audio transcoding service minutes*"
  }, {
    heading: "transcoding-charges",
    content: "**Video transcoding charges**: If you inject a video stream or an audio and video stream into an RTC channel, video transcoding charges are incurred."
  }, {
    heading: "transcoding-charges",
    content: "*Video transcoding charges = Video transcoding unit price × Video transcoding service minutes*"
  }, {
    heading: "transcoding-pricing",
    content: "The following table shows the transcoding prices for Media Pull:"
  }, {
    heading: "transcoding-pricing",
    content: "Service"
  }, {
    heading: "transcoding-pricing",
    content: "Resolution / Type"
  }, {
    heading: "transcoding-pricing",
    content: "Pricing ($US/1,000 minutes)"
  }, {
    heading: "transcoding-pricing",
    content: "Audio"
  }, {
    heading: "transcoding-pricing",
    content: "Audio stream"
  }, {
    heading: "transcoding-pricing",
    content: "$1.15"
  }, {
    heading: "transcoding-pricing",
    content: "H.264 HD video"
  }, {
    heading: "transcoding-pricing",
    content: "Output resolution up to 921,600 (1280 × 720)"
  }, {
    heading: "transcoding-pricing",
    content: "$6.86"
  }, {
    heading: "transcoding-pricing",
    content: "H.264 FHD video"
  }, {
    heading: "transcoding-pricing",
    content: "Output resolution greater than 921,600 (1280 × 720), up to 2,073,600 (1920 × 1080)"
  }, {
    heading: "transcoding-pricing",
    content: "$15.49"
  }, {
    heading: "transcoding-duration",
    content: "Agora calculates transcoding duration as the time between when Media Pull is enabled and when it is destroyed."
  }, {
    heading: "transcoding-duration",
    content: "**Audio transcoding duration**: The time during which Media Pull transcodes an audio stream."
  }, {
    heading: "transcoding-duration",
    content: "**Video transcoding duration**: The time during which Media Pull transcodes a video stream or an audio and video stream."
  }, {
    heading: "transcoding-duration",
    content: "When using Media Pull, if `playTs` is greater than `createTs`, the interval between these timestamps is billed as audio transcoding duration."
  }, {
    heading: "rtc-channel-usage-charges",
    content: "Injecting an online stream into an RTC channel using the Media Pull service incurs RTC charges. This usage is billed as part of real-time communication charges."
  }, {
    heading: "channel-usage-pricing",
    content: "Since the Media Pull service only publishes streams to the RTC channel and does not subscribe to or receive streams, channel usage is billed the same as audio usage, at &#x2A;*$0.99 per 1,000 minutes (USD)**."
  }, {
    heading: "channel-usage-duration",
    content: "Channel usage duration is the time from when the Media Pull service starts publishing streams to the RTC channel until it stops."
  }],
  headings: [{
    id: "billing-components",
    content: "Billing components"
  }, {
    id: "transcoding-charges",
    content: "Transcoding charges"
  }, {
    id: "transcoding-pricing",
    content: "Transcoding pricing"
  }, {
    id: "transcoding-duration",
    content: "Transcoding duration"
  }, {
    id: "rtc-channel-usage-charges",
    content: "RTC channel usage charges"
  }, {
    id: "channel-usage-pricing",
    content: "Channel usage pricing"
  }, {
    id: "channel-usage-duration",
    content: "Channel usage duration"
  }]
};
export let toc = [{
  depth: 2,
  url: "#billing-components",
  title: _jsx(_Fragment, {
    children: "Billing components"
  })
}, {
  depth: 2,
  url: "#transcoding-charges",
  title: _jsx(_Fragment, {
    children: "Transcoding charges"
  })
}, {
  depth: 3,
  url: "#transcoding-pricing",
  title: _jsx(_Fragment, {
    children: "Transcoding pricing"
  })
}, {
  depth: 3,
  url: "#transcoding-duration",
  title: _jsx(_Fragment, {
    children: "Transcoding duration"
  })
}, {
  depth: 2,
  url: "#rtc-channel-usage-charges",
  title: _jsx(_Fragment, {
    children: "RTC channel usage charges"
  })
}, {
  depth: 3,
  url: "#channel-usage-pricing",
  title: _jsx(_Fragment, {
    children: "Channel usage pricing"
  })
}, {
  depth: 3,
  url: "#channel-usage-duration",
  title: _jsx(_Fragment, {
    children: "Channel usage duration"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page describes how Media Pull usage is billed."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Your billing details may differ if you have signed a contract with Agora."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "billing-components",
      children: "Billing components"
    }), `
`, _jsx(_components.p, {
      children: "Media Pull billing comprises transcoding charges and RTC channel usage charges:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Transcoding charges"
          }), ": Charges for injecting an online media stream into an RTC channel. This charge is not included in Agora's policy of granting 10,000 minutes of free usage per month."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "RTC channel usage charges"
          }), ": Charges for injecting an online stream into an RTC channel. These charges are included in real-time communication usage. They may also count toward the voice call audio minutes included in ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/reference/billing-policies#free-of-charge-policy",
            children: "Agora's 10,000 minutes of free usage per month"
          }), "."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "transcoding-charges",
      children: "Transcoding charges"
    }), `
`, _jsx(_components.p, {
      children: `Transcoding charges are incurred when you inject an online stream into an RTC channel.
Based on the injected stream, transcoding charges are categorized as follows:`
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Audio transcoding charges"
          }), ": If you inject an audio stream into an RTC channel, audio transcoding charges are incurred."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.em, {
            children: "Audio transcoding charges = Audio transcoding unit price × Audio transcoding service minutes"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Video transcoding charges"
          }), ": If you inject a video stream or an audio and video stream into an RTC channel, video transcoding charges are incurred."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.em, {
            children: "Video transcoding charges = Video transcoding unit price × Video transcoding service minutes"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "transcoding-pricing",
      children: "Transcoding pricing"
    }), `
`, _jsx(_components.p, {
      children: "The following table shows the transcoding prices for Media Pull:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Service"
          }), _jsx(_components.th, {
            children: "Resolution / Type"
          }), _jsx(_components.th, {
            children: "Pricing ($US/1,000 minutes)"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Audio"
          }), _jsx(_components.td, {
            children: "Audio stream"
          }), _jsx(_components.td, {
            children: "$1.15"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "H.264 HD video"
          }), _jsx(_components.td, {
            children: "Output resolution up to 921,600 (1280 × 720)"
          }), _jsx(_components.td, {
            children: "$6.86"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "H.264 FHD video"
          }), _jsx(_components.td, {
            children: "Output resolution greater than 921,600 (1280 × 720), up to 2,073,600 (1920 × 1080)"
          }), _jsx(_components.td, {
            children: "$15.49"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "transcoding-duration",
      children: "Transcoding duration"
    }), `
`, _jsx(_components.p, {
      children: "Agora calculates transcoding duration as the time between when Media Pull is enabled and when it is destroyed."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Audio transcoding duration"
        }), ": The time during which Media Pull transcodes an audio stream."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Video transcoding duration"
        }), ": The time during which Media Pull transcodes a video stream or an audio and video stream."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["When using Media Pull, if ", _jsx(_components.code, {
            children: "playTs"
          }), " is greater than ", _jsx(_components.code, {
            children: "createTs"
          }), ", the interval between these timestamps is billed as audio transcoding duration."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "rtc-channel-usage-charges",
      children: "RTC channel usage charges"
    }), `
`, _jsx(_components.p, {
      children: "Injecting an online stream into an RTC channel using the Media Pull service incurs RTC charges. This usage is billed as part of real-time communication charges."
    }), `
`, _jsx(_components.h3, {
      id: "channel-usage-pricing",
      children: "Channel usage pricing"
    }), `
`, _jsxs(_components.p, {
      children: ["Since the Media Pull service only publishes streams to the RTC channel and does not subscribe to or receive streams, channel usage is billed the same as audio usage, at ", _jsx(_components.strong, {
        children: "$0.99 per 1,000 minutes (USD)"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "channel-usage-duration",
      children: "Channel usage duration"
    }), `
`, _jsx(_components.p, {
      children: "Channel usage duration is the time from when the Media Pull service starts publishing streams to the RTC channel until it stops."
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
