import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Pricing",
  description: "Pricing for Agora Cloud Transcoding."
};
export let _markdown = `

This guide explains how pricing works for the Cloud Transcoding service.

<CalloutContainer type="info">
  <CalloutDescription>
    If you have a signed contract with Agora, your contract terms take precedence over the pricing information in this document.
  </CalloutDescription>
</CalloutContainer>

## Service workflow [#service-workflow]

Here's how the Cloud Transcoding Service works:

1. **Stream publishing:** Users publish audio/video streams through Agora SDRTN®.
2. **Stream subscription:** Agora transcoding servers subscribe to streams
3. **Processing:** Agora transcodes (converts) or passes-through streams as needed
4. **Distribution:** The processed stream is delivered to chosen destinations (RTC channels or CDN)

You are charged for steps 2 (subscription) and 3 (processing).

## How billing works [#how-billing-works]

Agora calculates your monthly usage across all projects in your developer account and issues bills accordingly. The Cloud Transcoding charges consist of two components:

| Fee Type             | What It Covers                                                        | Calculation                                                       |
| -------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Subscription fee** | The duration when Agora service subscribes to audio and video streams | Based on the actual duration of audio and video streams processed |
| **Processing fee**   | The computational cost of processing and converting streams           | Based on the type and duration of media processing performed      |

The subscription and processing fees are not covered by the free minutes and are charged separately.

## Pricing breakdown [#pricing-breakdown]

The following breakdown explains how Cloud Transcoding is billed.

### Subscription fee [#subscription-fee]

When transcoding starts, the service joins channels as a virtual participant to access streams. This follows the same pricing structure as Agora real-time audio and video services.

* Audio subscription fee = Audio unit price × Audio duration
* Video subscription fee = Video unit price × Video duration

<CalloutContainer type="info">
  <CalloutDescription>
    If dual-stream mode is used, Agora only subscribes to the main video stream for cost efficiency.
  </CalloutDescription>
</CalloutContainer>

### Media processing fee [#media-processing-fee]

Media processing varies based on the type of processing required:

**Audio processing**

When outputting audio streams, audio processing fees apply. For audio, the processing fee is the same for non-transcoding or transcoding. It is calculated as follows:

\`Audio transcoding duration × Audio transcoding unit price\`

**Video processing**

Agora offers two types of video processing:

* Video pass-through (No transcoding)\\
  When video is output without format conversion, video pass-through fees apply. It is calculated as follows:

  \`Video duration × Video non-transcoding unit price\`

* Video transcoding\\
  When video format conversion is required, video transcoding fees apply. It is calculated as follows:

  \`Video transcoding duration × Video transcoding unit price\`

## Pricing tables [#pricing-tables]

The following tables show the applicable rates for media processing

### Media pass-through (No transcoding) [#media-pass-through-no-transcoding]

| Category      | Pricing ($US/1,000 minutes) |
| :------------ | :-------------------------: |
| Audio streams |             1.99            |
| Video stream  |             1.99            |

### With transcoding [#with-transcoding]

| Category               | Pricing ($US/1,000 minutes) |
| :--------------------- | :-------------------------: |
| Audio stream           |             1.99            |
| Video stream - HD      |             7.99            |
| Video stream - Full HD |            15.99            |

Video resolutions are defined as follows:

| Resolution type                | Range                                                                           |
| :----------------------------- | :------------------------------------------------------------------------------ |
| High-Definition (HD)           | Up to 921,600 pixels (1280 × 720)                                               |
| Full High-Definition (Full HD) | From greater than 921,600 pixels (1280 × 720) to 2,073,600 pixels (1920 × 1080) |

## Duration calculation [#duration-calculation]

* **Monitoring:** Agora tracks the exact start and stop times of each transcoding task
* **Precision:** Calculated in seconds for accuracy
* **Billing:** Displayed in seconds in your console, rounded to minutes on invoices
* **Minimum charge:** Partial seconds/minutes are rounded up to the next full unit
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This guide explains how pricing works for the Cloud Transcoding service."
  }, {
    heading: undefined,
    content: "If you have a signed contract with Agora, your contract terms take precedence over the pricing information in this document."
  }, {
    heading: "service-workflow",
    content: "Here's how the Cloud Transcoding Service works:"
  }, {
    heading: "service-workflow",
    content: "**Stream publishing:** Users publish audio/video streams through Agora SDRTN®."
  }, {
    heading: "service-workflow",
    content: "**Stream subscription:** Agora transcoding servers subscribe to streams"
  }, {
    heading: "service-workflow",
    content: "**Processing:** Agora transcodes (converts) or passes-through streams as needed"
  }, {
    heading: "service-workflow",
    content: "**Distribution:** The processed stream is delivered to chosen destinations (RTC channels or CDN)"
  }, {
    heading: "service-workflow",
    content: "You are charged for steps 2 (subscription) and 3 (processing)."
  }, {
    heading: "how-billing-works",
    content: "Agora calculates your monthly usage across all projects in your developer account and issues bills accordingly. The Cloud Transcoding charges consist of two components:"
  }, {
    heading: "how-billing-works",
    content: "Fee Type"
  }, {
    heading: "how-billing-works",
    content: "What It Covers"
  }, {
    heading: "how-billing-works",
    content: "Calculation"
  }, {
    heading: "how-billing-works",
    content: "**Subscription fee**"
  }, {
    heading: "how-billing-works",
    content: "The duration when Agora service subscribes to audio and video streams"
  }, {
    heading: "how-billing-works",
    content: "Based on the actual duration of audio and video streams processed"
  }, {
    heading: "how-billing-works",
    content: "**Processing fee**"
  }, {
    heading: "how-billing-works",
    content: "The computational cost of processing and converting streams"
  }, {
    heading: "how-billing-works",
    content: "Based on the type and duration of media processing performed"
  }, {
    heading: "how-billing-works",
    content: "The subscription and processing fees are not covered by the free minutes and are charged separately."
  }, {
    heading: "pricing-breakdown",
    content: "The following breakdown explains how Cloud Transcoding is billed."
  }, {
    heading: "subscription-fee",
    content: "When transcoding starts, the service joins channels as a virtual participant to access streams. This follows the same pricing structure as Agora real-time audio and video services."
  }, {
    heading: "subscription-fee",
    content: "Audio subscription fee = Audio unit price × Audio duration"
  }, {
    heading: "subscription-fee",
    content: "Video subscription fee = Video unit price × Video duration"
  }, {
    heading: "subscription-fee",
    content: "If dual-stream mode is used, Agora only subscribes to the main video stream for cost efficiency."
  }, {
    heading: "media-processing-fee",
    content: "Media processing varies based on the type of processing required:"
  }, {
    heading: "media-processing-fee",
    content: "**Audio processing**"
  }, {
    heading: "media-processing-fee",
    content: "When outputting audio streams, audio processing fees apply. For audio, the processing fee is the same for non-transcoding or transcoding. It is calculated as follows:"
  }, {
    heading: "media-processing-fee",
    content: "`Audio transcoding duration × Audio transcoding unit price`"
  }, {
    heading: "media-processing-fee",
    content: "**Video processing**"
  }, {
    heading: "media-processing-fee",
    content: "Agora offers two types of video processing:"
  }, {
    heading: "media-processing-fee",
    content: "Video pass-through (No transcoding)\\\nWhen video is output without format conversion, video pass-through fees apply. It is calculated as follows:"
  }, {
    heading: "media-processing-fee",
    content: "`Video duration × Video non-transcoding unit price`"
  }, {
    heading: "media-processing-fee",
    content: "Video transcoding\\\nWhen video format conversion is required, video transcoding fees apply. It is calculated as follows:"
  }, {
    heading: "media-processing-fee",
    content: "`Video transcoding duration × Video transcoding unit price`"
  }, {
    heading: "pricing-tables",
    content: "The following tables show the applicable rates for media processing"
  }, {
    heading: "media-pass-through-no-transcoding",
    content: "Category"
  }, {
    heading: "media-pass-through-no-transcoding",
    content: "Pricing ($US/1,000 minutes)"
  }, {
    heading: "media-pass-through-no-transcoding",
    content: "Audio streams"
  }, {
    heading: "media-pass-through-no-transcoding",
    content: "1.99"
  }, {
    heading: "media-pass-through-no-transcoding",
    content: "Video stream"
  }, {
    heading: "media-pass-through-no-transcoding",
    content: "1.99"
  }, {
    heading: "with-transcoding",
    content: "Category"
  }, {
    heading: "with-transcoding",
    content: "Pricing ($US/1,000 minutes)"
  }, {
    heading: "with-transcoding",
    content: "Audio stream"
  }, {
    heading: "with-transcoding",
    content: "1.99"
  }, {
    heading: "with-transcoding",
    content: "Video stream - HD"
  }, {
    heading: "with-transcoding",
    content: "7.99"
  }, {
    heading: "with-transcoding",
    content: "Video stream - Full HD"
  }, {
    heading: "with-transcoding",
    content: "15.99"
  }, {
    heading: "with-transcoding",
    content: "Video resolutions are defined as follows:"
  }, {
    heading: "with-transcoding",
    content: "Resolution type"
  }, {
    heading: "with-transcoding",
    content: "Range"
  }, {
    heading: "with-transcoding",
    content: "High-Definition (HD)"
  }, {
    heading: "with-transcoding",
    content: "Up to 921,600 pixels (1280 × 720)"
  }, {
    heading: "with-transcoding",
    content: "Full High-Definition (Full HD)"
  }, {
    heading: "with-transcoding",
    content: "From greater than 921,600 pixels (1280 × 720) to 2,073,600 pixels (1920 × 1080)"
  }, {
    heading: "duration-calculation",
    content: "**Monitoring:** Agora tracks the exact start and stop times of each transcoding task"
  }, {
    heading: "duration-calculation",
    content: "**Precision:** Calculated in seconds for accuracy"
  }, {
    heading: "duration-calculation",
    content: "**Billing:** Displayed in seconds in your console, rounded to minutes on invoices"
  }, {
    heading: "duration-calculation",
    content: "**Minimum charge:** Partial seconds/minutes are rounded up to the next full unit"
  }],
  headings: [{
    id: "service-workflow",
    content: "Service workflow"
  }, {
    id: "how-billing-works",
    content: "How billing works"
  }, {
    id: "pricing-breakdown",
    content: "Pricing breakdown"
  }, {
    id: "subscription-fee",
    content: "Subscription fee"
  }, {
    id: "media-processing-fee",
    content: "Media processing fee"
  }, {
    id: "pricing-tables",
    content: "Pricing tables"
  }, {
    id: "media-pass-through-no-transcoding",
    content: "Media pass-through (No transcoding)"
  }, {
    id: "with-transcoding",
    content: "With transcoding"
  }, {
    id: "duration-calculation",
    content: "Duration calculation"
  }]
};
export let toc = [{
  depth: 2,
  url: "#service-workflow",
  title: _jsx(_Fragment, {
    children: "Service workflow"
  })
}, {
  depth: 2,
  url: "#how-billing-works",
  title: _jsx(_Fragment, {
    children: "How billing works"
  })
}, {
  depth: 2,
  url: "#pricing-breakdown",
  title: _jsx(_Fragment, {
    children: "Pricing breakdown"
  })
}, {
  depth: 3,
  url: "#subscription-fee",
  title: _jsx(_Fragment, {
    children: "Subscription fee"
  })
}, {
  depth: 3,
  url: "#media-processing-fee",
  title: _jsx(_Fragment, {
    children: "Media processing fee"
  })
}, {
  depth: 2,
  url: "#pricing-tables",
  title: _jsx(_Fragment, {
    children: "Pricing tables"
  })
}, {
  depth: 3,
  url: "#media-pass-through-no-transcoding",
  title: _jsx(_Fragment, {
    children: "Media pass-through (No transcoding)"
  })
}, {
  depth: 3,
  url: "#with-transcoding",
  title: _jsx(_Fragment, {
    children: "With transcoding"
  })
}, {
  depth: 2,
  url: "#duration-calculation",
  title: _jsx(_Fragment, {
    children: "Duration calculation"
  })
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h2: "h2",
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
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This guide explains how pricing works for the Cloud Transcoding service."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "If you have a signed contract with Agora, your contract terms take precedence over the pricing information in this document."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "service-workflow",
      children: "Service workflow"
    }), `
`, _jsx(_components.p, {
      children: "Here's how the Cloud Transcoding Service works:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Stream publishing:"
        }), " Users publish audio/video streams through Agora SDRTN®."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Stream subscription:"
        }), " Agora transcoding servers subscribe to streams"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Processing:"
        }), " Agora transcodes (converts) or passes-through streams as needed"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Distribution:"
        }), " The processed stream is delivered to chosen destinations (RTC channels or CDN)"]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "You are charged for steps 2 (subscription) and 3 (processing)."
    }), `
`, _jsx(_components.h2, {
      id: "how-billing-works",
      children: "How billing works"
    }), `
`, _jsx(_components.p, {
      children: "Agora calculates your monthly usage across all projects in your developer account and issues bills accordingly. The Cloud Transcoding charges consist of two components:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Fee Type"
          }), _jsx(_components.th, {
            children: "What It Covers"
          }), _jsx(_components.th, {
            children: "Calculation"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Subscription fee"
            })
          }), _jsx(_components.td, {
            children: "The duration when Agora service subscribes to audio and video streams"
          }), _jsx(_components.td, {
            children: "Based on the actual duration of audio and video streams processed"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Processing fee"
            })
          }), _jsx(_components.td, {
            children: "The computational cost of processing and converting streams"
          }), _jsx(_components.td, {
            children: "Based on the type and duration of media processing performed"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "The subscription and processing fees are not covered by the free minutes and are charged separately."
    }), `
`, _jsx(_components.h2, {
      id: "pricing-breakdown",
      children: "Pricing breakdown"
    }), `
`, _jsx(_components.p, {
      children: "The following breakdown explains how Cloud Transcoding is billed."
    }), `
`, _jsx(_components.h3, {
      id: "subscription-fee",
      children: "Subscription fee"
    }), `
`, _jsx(_components.p, {
      children: "When transcoding starts, the service joins channels as a virtual participant to access streams. This follows the same pricing structure as Agora real-time audio and video services."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Audio subscription fee = Audio unit price × Audio duration"
      }), `
`, _jsx(_components.li, {
        children: "Video subscription fee = Video unit price × Video duration"
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "If dual-stream mode is used, Agora only subscribes to the main video stream for cost efficiency."
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "media-processing-fee",
      children: "Media processing fee"
    }), `
`, _jsx(_components.p, {
      children: "Media processing varies based on the type of processing required:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Audio processing"
      })
    }), `
`, _jsx(_components.p, {
      children: "When outputting audio streams, audio processing fees apply. For audio, the processing fee is the same for non-transcoding or transcoding. It is calculated as follows:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.code, {
        children: "Audio transcoding duration × Audio transcoding unit price"
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Video processing"
      })
    }), `
`, _jsx(_components.p, {
      children: "Agora offers two types of video processing:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Video pass-through (No transcoding)", _jsx(_components.br, {}), `
`, "When video is output without format conversion, video pass-through fees apply. It is calculated as follows:"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.code, {
            children: "Video duration × Video non-transcoding unit price"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Video transcoding", _jsx(_components.br, {}), `
`, "When video format conversion is required, video transcoding fees apply. It is calculated as follows:"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.code, {
            children: "Video transcoding duration × Video transcoding unit price"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "pricing-tables",
      children: "Pricing tables"
    }), `
`, _jsx(_components.p, {
      children: "The following tables show the applicable rates for media processing"
    }), `
`, _jsx(_components.h3, {
      id: "media-pass-through-no-transcoding",
      children: "Media pass-through (No transcoding)"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Category"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pricing ($US/1,000 minutes)"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Audio streams"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Video stream"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1.99"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "with-transcoding",
      children: "With transcoding"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Category"
          }), _jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pricing ($US/1,000 minutes)"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Audio stream"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Video stream - HD"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "7.99"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Video stream - Full HD"
          }), _jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "15.99"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "Video resolutions are defined as follows:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Resolution type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Range"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "High-Definition (HD)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Up to 921,600 pixels (1280 × 720)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Full High-Definition (Full HD)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "From greater than 921,600 pixels (1280 × 720) to 2,073,600 pixels (1920 × 1080)"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "duration-calculation",
      children: "Duration calculation"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Monitoring:"
        }), " Agora tracks the exact start and stop times of each transcoding task"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Precision:"
        }), " Calculated in seconds for accuracy"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Billing:"
        }), " Displayed in seconds in your console, rounded to minutes on invoices"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Minimum charge:"
        }), " Partial seconds/minutes are rounded up to the next full unit"]
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
