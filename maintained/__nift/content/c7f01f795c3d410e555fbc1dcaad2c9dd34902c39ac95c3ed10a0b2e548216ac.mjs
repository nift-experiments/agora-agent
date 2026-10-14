import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Best practices in integrating web page recording",
  description: "Guidelines for integrating web page recording into your app."
};
export let _markdown = `

## Overview [#overview]

External factors can cause problems with web page recording, including the following:

* The page to be recorded cannot be accessed normally because the page fails to load or takes too long. In response to this problem, Agora provides a [web page load timeout detection function](/en/realtime-media/cloud-recording/build/customize-the-recording/webpage-load-timeout).
* The page to be recorded can be accessed normally, but the HTML elements in the page cannot be loaded correctly.
* The page fails to load during the recording process because changed HTML elements do not load normally.
* The audio or video in the page to be recorded cannot be played normally.
* Web page recording stops abnormally.

## Recommended best practices [#recommended-best-practices]

To ensure reliability and consistency in the face of network issues, Agora recommends the following best practices.

### Check the limits [#check-the-limits]

Check that your Peak Concurrent Worker (PCW), Queries Per Second (QPS), and the number of streams do not exceed the following limits set by Agora.

#### PCW [#pcw]

The PCW limit is set to 200 for all regions and resolutions. If you need to extend the PCW limit, please contact [support@agora.io](mailto\\:support@agora.io).

#### QPS [#qps]

The initial QPS limit is 10 per App ID when you register. You can estimate the QPS that your project needs based on your PCW value and query frequency. If you need to extend the limit for QPS, contact [support@agora.io](mailto\\:support@agora.io).

#### Number of streams [#number-of-streams]

The upper limit of video attributes supported by Agora is as follows:

* Resolution 1920 × 1080
* Frame rate 30 FPS

The maximum number of supported streams is as follows:

| Service type       | Mainland China            | Europe                   | America                   | Asia (excluding mainland China) |
| :----------------- | :------------------------ | :----------------------- | :------------------------ | :------------------------------ |
| Web page recording | * SD 100
* HD 50
* FHD 30 | - SD 50
- HD 30
- FHD 10 | * SD 100
* HD 50
* FHD 30 | - SD 100
- HD 100
- FHD 30      |

<CalloutContainer type="warning">
  <CalloutTitle>
    Note
  </CalloutTitle>

  <CalloutDescription>
    If you need to record multiple streams of different resolutions at the same time, make sure you meet the following requirements:

    * The number of streams per resolution cannot exceed the corresponding limit for that resolution.
    * The total number of streams cannot exceed the limit set for the higher resolution. For example, if you need to record in America in both SD and HD, the total number of streams cannot exceed 100. If you record in both HD and FHD, the total number cannot exceed 50.
  </CalloutDescription>
</CalloutContainer>

### Ensure the recording service starts successfully [#ensure-the-recording-service-starts-successfully]

Take the following steps to ensure that the recording service starts successfully:

1. Ensure that the \`start\` request is successful, that is, you receive a \`sid\` (recording ID) from the response. If the request fails, take measures according to the HTTP status code:
   * If the returned HTTP status code is always \`40x\`, check the parameter values in your request.
   * If the returned HTTP status code is \`50x\`, you can retry several times with the same parameters until you receive a \`sid\`. Agora recommends that you use a backoff strategy, for example, retry after 3, 6, and 9 seconds successively, to avoid exceeding the QPS limits. If you retry three times and still do not get a \`sid\`, retry with a new user ID.
   * If you receive error code \`65\`, retry with the same parameters. Agora recommends that you use a backoff strategy, for example, retry after 3 and 6 seconds successively.
2. Five seconds after you receive a \`sid\`, use a backoff strategy to call query, for example, retry after 5, 10 and 15 seconds successively. If the query call succeeds, and status in serverResponse is \`4\` or \`5\`, it means the recording service starts successfully. Otherwise, you can deem the recording service as not having started, or quit halfway after starting.

### Ensure the page to be recorded loads successfully [#ensure-the-page-to-be-recorded-loads-successfully]

#### 1. Regularly reports whether the page to be recorded loads successfully [#1-regularly-reports-whether-the-page-to-be-recorded-loads-successfully]

Before starting web page recording, you need to complete the page detection logic of the JavaScript of the web page to be recorded to implement the following solutions:

1. When calling [\`start\`](/en/api-reference/api-ref/cloud-recording#start) to start web page recording, the web page recording browser accesses and loads the web page to be recorded.
2. The web page recording service executes the page detection logic of the JavaScript of the web page to be recorded. When a web page element is loaded in line with your expectations, the recording ID (\`sid\`) associated with the web page recording service callback informs the business server that the recording service has started successfully.
3. The web page server reports its status at regular intervals to notify the business server of any content changes.

   <img src="https://web-cdn.agora.io/docs-files/1634550897083" />

#### 2. Reinitiate recording requests when the web page fails to load [#2-reinitiate-recording-requests-when-the-web-page-fails-to-load]

Agora recommends that you use the detection logic of the page to be recorded to determine if the recording fails to start, that is, if the business server fails to receive a callback that indicates that the loading of the web page is as expected. In such a case, you should reinitiate the recording request.

<img src="https://web-cdn.agora.io/docs-files/1634550920718" />

### Use the web\\_recorder\\_stopped callback to detect abnormal recording stoppages [#use-the-web_recorder_stopped-callback-to-detect-abnormal-recording-stoppages]

Open the message notification service, and subscribe to the [\`71 web_recorder_stopped\`](../../reference/rest-api-overview#71-web_recorder_stopped-web_recorder_stopped) callback event. When the business server receives the \`web_recorder_stopped\` callback and the code is not \`0\`, it means that the web page recording has stopped abnormally. Agora recommends that you restart the recording process and create a new recording.
`;
export let structuredData = {
  contents: [{
    heading: "overview",
    content: "External factors can cause problems with web page recording, including the following:"
  }, {
    heading: "overview",
    content: "The page to be recorded cannot be accessed normally because the page fails to load or takes too long. In response to this problem, Agora provides a web page load timeout detection function."
  }, {
    heading: "overview",
    content: "The page to be recorded can be accessed normally, but the HTML elements in the page cannot be loaded correctly."
  }, {
    heading: "overview",
    content: "The page fails to load during the recording process because changed HTML elements do not load normally."
  }, {
    heading: "overview",
    content: "The audio or video in the page to be recorded cannot be played normally."
  }, {
    heading: "overview",
    content: "Web page recording stops abnormally."
  }, {
    heading: "recommended-best-practices",
    content: "To ensure reliability and consistency in the face of network issues, Agora recommends the following best practices."
  }, {
    heading: "check-the-limits",
    content: "Check that your Peak Concurrent Worker (PCW), Queries Per Second (QPS), and the number of streams do not exceed the following limits set by Agora."
  }, {
    heading: "pcw",
    content: "The PCW limit is set to 200 for all regions and resolutions. If you need to extend the PCW limit, please contact support\\@agora.io."
  }, {
    heading: "qps",
    content: "The initial QPS limit is 10 per App ID when you register. You can estimate the QPS that your project needs based on your PCW value and query frequency. If you need to extend the limit for QPS, contact support\\@agora.io."
  }, {
    heading: "number-of-streams",
    content: "The upper limit of video attributes supported by Agora is as follows:"
  }, {
    heading: "number-of-streams",
    content: "Resolution 1920 × 1080"
  }, {
    heading: "number-of-streams",
    content: "Frame rate 30 FPS"
  }, {
    heading: "number-of-streams",
    content: "The maximum number of supported streams is as follows:"
  }, {
    heading: "number-of-streams",
    content: "Service type"
  }, {
    heading: "number-of-streams",
    content: "Mainland China"
  }, {
    heading: "number-of-streams",
    content: "Europe"
  }, {
    heading: "number-of-streams",
    content: "America"
  }, {
    heading: "number-of-streams",
    content: "Asia (excluding mainland China)"
  }, {
    heading: "number-of-streams",
    content: "Web page recording"
  }, {
    heading: "number-of-streams",
    content: `* SD 100
* HD 50
* FHD 30`
  }, {
    heading: "number-of-streams",
    content: `* SD 50
* HD 30
* FHD 10`
  }, {
    heading: "number-of-streams",
    content: `* SD 100
* HD 50
* FHD 30`
  }, {
    heading: "number-of-streams",
    content: `* SD 100
* HD 100
* FHD 30`
  }, {
    heading: "number-of-streams",
    content: "If you need to record multiple streams of different resolutions at the same time, make sure you meet the following requirements:"
  }, {
    heading: "number-of-streams",
    content: "The number of streams per resolution cannot exceed the corresponding limit for that resolution."
  }, {
    heading: "number-of-streams",
    content: "The total number of streams cannot exceed the limit set for the higher resolution. For example, if you need to record in America in both SD and HD, the total number of streams cannot exceed 100. If you record in both HD and FHD, the total number cannot exceed 50."
  }, {
    heading: "ensure-the-recording-service-starts-successfully",
    content: "Take the following steps to ensure that the recording service starts successfully:"
  }, {
    heading: "ensure-the-recording-service-starts-successfully",
    content: "Ensure that the `start` request is successful, that is, you receive a `sid` (recording ID) from the response. If the request fails, take measures according to the HTTP status code:"
  }, {
    heading: "ensure-the-recording-service-starts-successfully",
    content: "If the returned HTTP status code is always `40x`, check the parameter values in your request."
  }, {
    heading: "ensure-the-recording-service-starts-successfully",
    content: "If the returned HTTP status code is `50x`, you can retry several times with the same parameters until you receive a `sid`. Agora recommends that you use a backoff strategy, for example, retry after 3, 6, and 9 seconds successively, to avoid exceeding the QPS limits. If you retry three times and still do not get a `sid`, retry with a new user ID."
  }, {
    heading: "ensure-the-recording-service-starts-successfully",
    content: "If you receive error code `65`, retry with the same parameters. Agora recommends that you use a backoff strategy, for example, retry after 3 and 6 seconds successively."
  }, {
    heading: "ensure-the-recording-service-starts-successfully",
    content: "Five seconds after you receive a `sid`, use a backoff strategy to call query, for example, retry after 5, 10 and 15 seconds successively. If the query call succeeds, and status in serverResponse is `4` or `5`, it means the recording service starts successfully. Otherwise, you can deem the recording service as not having started, or quit halfway after starting."
  }, {
    heading: "1-regularly-reports-whether-the-page-to-be-recorded-loads-successfully",
    content: "Before starting web page recording, you need to complete the page detection logic of the JavaScript of the web page to be recorded to implement the following solutions:"
  }, {
    heading: "1-regularly-reports-whether-the-page-to-be-recorded-loads-successfully",
    content: "When calling `start` to start web page recording, the web page recording browser accesses and loads the web page to be recorded."
  }, {
    heading: "1-regularly-reports-whether-the-page-to-be-recorded-loads-successfully",
    content: "The web page recording service executes the page detection logic of the JavaScript of the web page to be recorded. When a web page element is loaded in line with your expectations, the recording ID (`sid`) associated with the web page recording service callback informs the business server that the recording service has started successfully."
  }, {
    heading: "1-regularly-reports-whether-the-page-to-be-recorded-loads-successfully",
    content: "The web page server reports its status at regular intervals to notify the business server of any content changes."
  }, {
    heading: "2-reinitiate-recording-requests-when-the-web-page-fails-to-load",
    content: "Agora recommends that you use the detection logic of the page to be recorded to determine if the recording fails to start, that is, if the business server fails to receive a callback that indicates that the loading of the web page is as expected. In such a case, you should reinitiate the recording request."
  }, {
    heading: "use-the-web_recorder_stopped-callback-to-detect-abnormal-recording-stoppages",
    content: "Open the message notification service, and subscribe to the `71 web_recorder_stopped` callback event. When the business server receives the `web_recorder_stopped` callback and the code is not `0`, it means that the web page recording has stopped abnormally. Agora recommends that you restart the recording process and create a new recording."
  }],
  headings: [{
    id: "overview",
    content: "Overview"
  }, {
    id: "recommended-best-practices",
    content: "Recommended best practices"
  }, {
    id: "check-the-limits",
    content: "Check the limits"
  }, {
    id: "pcw",
    content: "PCW"
  }, {
    id: "qps",
    content: "QPS"
  }, {
    id: "number-of-streams",
    content: "Number of streams"
  }, {
    id: "ensure-the-recording-service-starts-successfully",
    content: "Ensure the recording service starts successfully"
  }, {
    id: "ensure-the-page-to-be-recorded-loads-successfully",
    content: "Ensure the page to be recorded loads successfully"
  }, {
    id: "1-regularly-reports-whether-the-page-to-be-recorded-loads-successfully",
    content: "1\\. Regularly reports whether the page to be recorded loads successfully"
  }, {
    id: "2-reinitiate-recording-requests-when-the-web-page-fails-to-load",
    content: "2\\. Reinitiate recording requests when the web page fails to load"
  }, {
    id: "use-the-web_recorder_stopped-callback-to-detect-abnormal-recording-stoppages",
    content: "Use the web_recorder_stopped callback to detect abnormal recording stoppages"
  }]
};
export let toc = [{
  depth: 2,
  url: "#overview",
  title: _jsx(_Fragment, {
    children: "Overview"
  })
}, {
  depth: 2,
  url: "#recommended-best-practices",
  title: _jsx(_Fragment, {
    children: "Recommended best practices"
  })
}, {
  depth: 3,
  url: "#check-the-limits",
  title: _jsx(_Fragment, {
    children: "Check the limits"
  })
}, {
  depth: 4,
  url: "#pcw",
  title: _jsx(_Fragment, {
    children: "PCW"
  })
}, {
  depth: 4,
  url: "#qps",
  title: _jsx(_Fragment, {
    children: "QPS"
  })
}, {
  depth: 4,
  url: "#number-of-streams",
  title: _jsx(_Fragment, {
    children: "Number of streams"
  })
}, {
  depth: 3,
  url: "#ensure-the-recording-service-starts-successfully",
  title: _jsx(_Fragment, {
    children: "Ensure the recording service starts successfully"
  })
}, {
  depth: 3,
  url: "#ensure-the-page-to-be-recorded-loads-successfully",
  title: _jsx(_Fragment, {
    children: "Ensure the page to be recorded loads successfully"
  })
}, {
  depth: 4,
  url: "#1-regularly-reports-whether-the-page-to-be-recorded-loads-successfully",
  title: _jsx(_Fragment, {
    children: "1. Regularly reports whether the page to be recorded loads successfully"
  })
}, {
  depth: 4,
  url: "#2-reinitiate-recording-requests-when-the-web-page-fails-to-load",
  title: _jsx(_Fragment, {
    children: "2. Reinitiate recording requests when the web page fails to load"
  })
}, {
  depth: 3,
  url: "#use-the-web_recorder_stopped-callback-to-detect-abnormal-recording-stoppages",
  title: _jsx(_Fragment, {
    children: "Use the web_recorder_stopped callback to detect abnormal recording stoppages"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "overview",
      children: "Overview"
    }), `
`, _jsx(_components.p, {
      children: "External factors can cause problems with web page recording, including the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["The page to be recorded cannot be accessed normally because the page fails to load or takes too long. In response to this problem, Agora provides a ", _jsx(_components.a, {
          href: "/en/realtime-media/cloud-recording/build/customize-the-recording/webpage-load-timeout",
          children: "web page load timeout detection function"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "The page to be recorded can be accessed normally, but the HTML elements in the page cannot be loaded correctly."
      }), `
`, _jsx(_components.li, {
        children: "The page fails to load during the recording process because changed HTML elements do not load normally."
      }), `
`, _jsx(_components.li, {
        children: "The audio or video in the page to be recorded cannot be played normally."
      }), `
`, _jsx(_components.li, {
        children: "Web page recording stops abnormally."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "recommended-best-practices",
      children: "Recommended best practices"
    }), `
`, _jsx(_components.p, {
      children: "To ensure reliability and consistency in the face of network issues, Agora recommends the following best practices."
    }), `
`, _jsx(_components.h3, {
      id: "check-the-limits",
      children: "Check the limits"
    }), `
`, _jsx(_components.p, {
      children: "Check that your Peak Concurrent Worker (PCW), Queries Per Second (QPS), and the number of streams do not exceed the following limits set by Agora."
    }), `
`, _jsx(_components.h4, {
      id: "pcw",
      children: "PCW"
    }), `
`, _jsxs(_components.p, {
      children: ["The PCW limit is set to 200 for all regions and resolutions. If you need to extend the PCW limit, please contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "qps",
      children: "QPS"
    }), `
`, _jsxs(_components.p, {
      children: ["The initial QPS limit is 10 per App ID when you register. You can estimate the QPS that your project needs based on your PCW value and query frequency. If you need to extend the limit for QPS, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "number-of-streams",
      children: "Number of streams"
    }), `
`, _jsx(_components.p, {
      children: "The upper limit of video attributes supported by Agora is as follows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Resolution 1920 × 1080"
      }), `
`, _jsx(_components.li, {
        children: "Frame rate 30 FPS"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The maximum number of supported streams is as follows:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Service type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Mainland China"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Europe"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "America"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Asia (excluding mainland China)"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Web page recording"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "SD 100"
              }), `
`, _jsx(_components.li, {
                children: "HD 50"
              }), `
`, _jsx(_components.li, {
                children: "FHD 30"
              }), `
`]
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "SD 50"
              }), `
`, _jsx(_components.li, {
                children: "HD 30"
              }), `
`, _jsx(_components.li, {
                children: "FHD 10"
              }), `
`]
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "SD 100"
              }), `
`, _jsx(_components.li, {
                children: "HD 50"
              }), `
`, _jsx(_components.li, {
                children: "FHD 30"
              }), `
`]
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "SD 100"
              }), `
`, _jsx(_components.li, {
                children: "HD 100"
              }), `
`, _jsx(_components.li, {
                children: "FHD 30"
              }), `
`]
            })
          })]
        })
      })]
    }), `
`, _jsxs(CalloutContainer, {
      type: "warning",
      children: [_jsx(CalloutTitle, {
        children: "Note"
      }), _jsxs(CalloutDescription, {
        children: [_jsx(_components.p, {
          children: "If you need to record multiple streams of different resolutions at the same time, make sure you meet the following requirements:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "The number of streams per resolution cannot exceed the corresponding limit for that resolution."
          }), `
`, _jsx(_components.li, {
            children: "The total number of streams cannot exceed the limit set for the higher resolution. For example, if you need to record in America in both SD and HD, the total number of streams cannot exceed 100. If you record in both HD and FHD, the total number cannot exceed 50."
          }), `
`]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "ensure-the-recording-service-starts-successfully",
      children: "Ensure the recording service starts successfully"
    }), `
`, _jsx(_components.p, {
      children: "Take the following steps to ensure that the recording service starts successfully:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Ensure that the ", _jsx(_components.code, {
          children: "start"
        }), " request is successful, that is, you receive a ", _jsx(_components.code, {
          children: "sid"
        }), " (recording ID) from the response. If the request fails, take measures according to the HTTP status code:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["If the returned HTTP status code is always ", _jsx(_components.code, {
              children: "40x"
            }), ", check the parameter values in your request."]
          }), `
`, _jsxs(_components.li, {
            children: ["If the returned HTTP status code is ", _jsx(_components.code, {
              children: "50x"
            }), ", you can retry several times with the same parameters until you receive a ", _jsx(_components.code, {
              children: "sid"
            }), ". Agora recommends that you use a backoff strategy, for example, retry after 3, 6, and 9 seconds successively, to avoid exceeding the QPS limits. If you retry three times and still do not get a ", _jsx(_components.code, {
              children: "sid"
            }), ", retry with a new user ID."]
          }), `
`, _jsxs(_components.li, {
            children: ["If you receive error code ", _jsx(_components.code, {
              children: "65"
            }), ", retry with the same parameters. Agora recommends that you use a backoff strategy, for example, retry after 3 and 6 seconds successively."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["Five seconds after you receive a ", _jsx(_components.code, {
          children: "sid"
        }), ", use a backoff strategy to call query, for example, retry after 5, 10 and 15 seconds successively. If the query call succeeds, and status in serverResponse is ", _jsx(_components.code, {
          children: "4"
        }), " or ", _jsx(_components.code, {
          children: "5"
        }), ", it means the recording service starts successfully. Otherwise, you can deem the recording service as not having started, or quit halfway after starting."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "ensure-the-page-to-be-recorded-loads-successfully",
      children: "Ensure the page to be recorded loads successfully"
    }), `
`, _jsx(_components.h4, {
      id: "1-regularly-reports-whether-the-page-to-be-recorded-loads-successfully",
      children: "1. Regularly reports whether the page to be recorded loads successfully"
    }), `
`, _jsx(_components.p, {
      children: "Before starting web page recording, you need to complete the page detection logic of the JavaScript of the web page to be recorded to implement the following solutions:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["When calling ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording#start",
            children: _jsx(_components.code, {
              children: "start"
            })
          }), " to start web page recording, the web page recording browser accesses and loads the web page to be recorded."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["The web page recording service executes the page detection logic of the JavaScript of the web page to be recorded. When a web page element is loaded in line with your expectations, the recording ID (", _jsx(_components.code, {
            children: "sid"
          }), ") associated with the web page recording service callback informs the business server that the recording service has started successfully."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "The web page server reports its status at regular intervals to notify the business server of any content changes."
        }), `
`, _jsx("img", {
          src: "https://web-cdn.agora.io/docs-files/1634550897083"
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "2-reinitiate-recording-requests-when-the-web-page-fails-to-load",
      children: "2. Reinitiate recording requests when the web page fails to load"
    }), `
`, _jsx(_components.p, {
      children: "Agora recommends that you use the detection logic of the page to be recorded to determine if the recording fails to start, that is, if the business server fails to receive a callback that indicates that the loading of the web page is as expected. In such a case, you should reinitiate the recording request."
    }), `
`, _jsx("img", {
      src: "https://web-cdn.agora.io/docs-files/1634550920718"
    }), `
`, _jsx(_components.h3, {
      id: "use-the-web_recorder_stopped-callback-to-detect-abnormal-recording-stoppages",
      children: "Use the web_recorder_stopped callback to detect abnormal recording stoppages"
    }), `
`, _jsxs(_components.p, {
      children: ["Open the message notification service, and subscribe to the ", _jsx(_components.a, {
        href: "../../reference/rest-api-overview#71-web_recorder_stopped-web_recorder_stopped",
        children: _jsx(_components.code, {
          children: "71 web_recorder_stopped"
        })
      }), " callback event. When the business server receives the ", _jsx(_components.code, {
        children: "web_recorder_stopped"
      }), " callback and the code is not ", _jsx(_components.code, {
        children: "0"
      }), ", it means that the web page recording has stopped abnormally. Agora recommends that you restart the recording process and create a new recording."]
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
