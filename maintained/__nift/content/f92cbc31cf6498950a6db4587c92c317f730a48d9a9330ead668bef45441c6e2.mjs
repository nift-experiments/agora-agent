import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I solve echo problems?"
};
export let _markdown = `

The Agora SDK supports echo cancellation. In most cases, this problem can be fixed by using a headset, and ensure that the headset does not cause an echo.

In a channel joined by multiple users, if a device does not work properly, chances are that all other users in the channel can hear echoes. Therefore, beware that the user hearing the echo may not necessarily be the one having the problem.

## Step 1: Self-check [#step-1-self-check]

Check the following:

* Find the source of the echo. You can mute users in the channel one by one to find the source of the echo.
* Check if the echo is occasional or continuous. An occasional echo may be caused by CPU overload. By using [Call Search](/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search) function of Agora Analytics, you can check the CPU usage on the **End-to-End Details** page.
* Ensure that all users are in separated physical environments and do not sit too close to each other.
* Check the SDK version:
  * Android/iOS: v1.6.0+.
  * Windows/macOS: v1.7.0+.
* Check if you enabled an external audio source. If so, echo cancellation is turned off by default.
* In Windows, ensure the \`Monitoring Microphone\` option is not checked.
* On iOS, check whether the app sets Audio Session as \`AVAudioSessionCategoryOptionMixWithOthers\`. If so, you may encounter echoes when other apps use the audio device at the same time.
* Systems of some Android or Windows devices support echo cancellation function by default, and you may encounter echoes if the echo cancellation of the system is poor. In this case, Agora recommends disableing the echo cancellation in system and using the echo cancellation of Agora.
* Use a headset:
  * In a one-to-one call, if you hear an echo, ask the other user to use a headset.
  * In a multi-user call, ask users to mute in turn to figure out who causes the echo. The users who cause the echo should use headsets or mute themselves.

## Step 2: Contact Agora Customer Support [#step-2-contact-agora-customer-support]

If the issue persists, contact Agora customer support and submit the issue with the following information:

| Information | Details                                                                                                                                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mandatory   | The name of the channel where the echo occurs.The uids of the users who hear the echo.The uid of the user who causes the echo.The recording files, if available.                                                       |
| Additional  | The time frame during which the users hear the echo.If the issue exists after rejoining the channel.If the issue exists after the user causing or hearing the echo switches the audio route (such as using a headset). |

## Step 3: Monitor the Quality of Experience in Agora Analytics in Console [#step-3-monitor-the-quality-of-experience-in-agora-analytics-in-console]

You can check the statistics of every call in Agora Analytics in [Agora Console](https://console.agora.io/). For more information, see [Call Search](/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Agora SDK supports echo cancellation. In most cases, this problem can be fixed by using a headset, and ensure that the headset does not cause an echo."
  }, {
    heading: undefined,
    content: "In a channel joined by multiple users, if a device does not work properly, chances are that all other users in the channel can hear echoes. Therefore, beware that the user hearing the echo may not necessarily be the one having the problem."
  }, {
    heading: "step-1-self-check",
    content: "Check the following:"
  }, {
    heading: "step-1-self-check",
    content: "Find the source of the echo. You can mute users in the channel one by one to find the source of the echo."
  }, {
    heading: "step-1-self-check",
    content: "Check if the echo is occasional or continuous. An occasional echo may be caused by CPU overload. By using Call Search function of Agora Analytics, you can check the CPU usage on the **End-to-End Details** page."
  }, {
    heading: "step-1-self-check",
    content: "Ensure that all users are in separated physical environments and do not sit too close to each other."
  }, {
    heading: "step-1-self-check",
    content: "Check the SDK version:"
  }, {
    heading: "step-1-self-check",
    content: "Android/iOS: v1.6.0+."
  }, {
    heading: "step-1-self-check",
    content: "Windows/macOS: v1.7.0+."
  }, {
    heading: "step-1-self-check",
    content: "Check if you enabled an external audio source. If so, echo cancellation is turned off by default."
  }, {
    heading: "step-1-self-check",
    content: "In Windows, ensure the `Monitoring Microphone` option is not checked."
  }, {
    heading: "step-1-self-check",
    content: "On iOS, check whether the app sets Audio Session as `AVAudioSessionCategoryOptionMixWithOthers`. If so, you may encounter echoes when other apps use the audio device at the same time."
  }, {
    heading: "step-1-self-check",
    content: "Systems of some Android or Windows devices support echo cancellation function by default, and you may encounter echoes if the echo cancellation of the system is poor. In this case, Agora recommends disableing the echo cancellation in system and using the echo cancellation of Agora."
  }, {
    heading: "step-1-self-check",
    content: "Use a headset:"
  }, {
    heading: "step-1-self-check",
    content: "In a one-to-one call, if you hear an echo, ask the other user to use a headset."
  }, {
    heading: "step-1-self-check",
    content: "In a multi-user call, ask users to mute in turn to figure out who causes the echo. The users who cause the echo should use headsets or mute themselves."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "If the issue persists, contact Agora customer support and submit the issue with the following information:"
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "Information"
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "Details"
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "Mandatory"
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "The name of the channel where the echo occurs.The uids of the users who hear the echo.The uid of the user who causes the echo.The recording files, if available."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "Additional"
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "The time frame during which the users hear the echo.If the issue exists after rejoining the channel.If the issue exists after the user causing or hearing the echo switches the audio route (such as using a headset)."
  }, {
    heading: "step-3-monitor-the-quality-of-experience-in-agora-analytics-in-console",
    content: "You can check the statistics of every call in Agora Analytics in Agora Console. For more information, see Call Search."
  }],
  headings: [{
    id: "step-1-self-check",
    content: "Step 1: Self-check"
  }, {
    id: "step-2-contact-agora-customer-support",
    content: "Step 2: Contact Agora Customer Support"
  }, {
    id: "step-3-monitor-the-quality-of-experience-in-agora-analytics-in-console",
    content: "Step 3: Monitor the Quality of Experience in Agora Analytics in Console"
  }]
};
export let toc = [{
  depth: 2,
  url: "#step-1-self-check",
  title: _jsx(_Fragment, {
    children: "Step 1: Self-check"
  })
}, {
  depth: 2,
  url: "#step-2-contact-agora-customer-support",
  title: _jsx(_Fragment, {
    children: "Step 2: Contact Agora Customer Support"
  })
}, {
  depth: 2,
  url: "#step-3-monitor-the-quality-of-experience-in-agora-analytics-in-console",
  title: _jsx(_Fragment, {
    children: "Step 3: Monitor the Quality of Experience in Agora Analytics in Console"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
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
    children: [_jsx(_components.p, {
      children: "The Agora SDK supports echo cancellation. In most cases, this problem can be fixed by using a headset, and ensure that the headset does not cause an echo."
    }), `
`, _jsx(_components.p, {
      children: "In a channel joined by multiple users, if a device does not work properly, chances are that all other users in the channel can hear echoes. Therefore, beware that the user hearing the echo may not necessarily be the one having the problem."
    }), `
`, _jsx(_components.h2, {
      id: "step-1-self-check",
      children: "Step 1: Self-check"
    }), `
`, _jsx(_components.p, {
      children: "Check the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Find the source of the echo. You can mute users in the channel one by one to find the source of the echo."
      }), `
`, _jsxs(_components.li, {
        children: ["Check if the echo is occasional or continuous. An occasional echo may be caused by CPU overload. By using ", _jsx(_components.a, {
          href: "/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search",
          children: "Call Search"
        }), " function of Agora Analytics, you can check the CPU usage on the ", _jsx(_components.strong, {
          children: "End-to-End Details"
        }), " page."]
      }), `
`, _jsx(_components.li, {
        children: "Ensure that all users are in separated physical environments and do not sit too close to each other."
      }), `
`, _jsxs(_components.li, {
        children: ["Check the SDK version:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Android/iOS: v1.6.0+."
          }), `
`, _jsx(_components.li, {
            children: "Windows/macOS: v1.7.0+."
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "Check if you enabled an external audio source. If so, echo cancellation is turned off by default."
      }), `
`, _jsxs(_components.li, {
        children: ["In Windows, ensure the ", _jsx(_components.code, {
          children: "Monitoring Microphone"
        }), " option is not checked."]
      }), `
`, _jsxs(_components.li, {
        children: ["On iOS, check whether the app sets Audio Session as ", _jsx(_components.code, {
          children: "AVAudioSessionCategoryOptionMixWithOthers"
        }), ". If so, you may encounter echoes when other apps use the audio device at the same time."]
      }), `
`, _jsx(_components.li, {
        children: "Systems of some Android or Windows devices support echo cancellation function by default, and you may encounter echoes if the echo cancellation of the system is poor. In this case, Agora recommends disableing the echo cancellation in system and using the echo cancellation of Agora."
      }), `
`, _jsxs(_components.li, {
        children: ["Use a headset:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "In a one-to-one call, if you hear an echo, ask the other user to use a headset."
          }), `
`, _jsx(_components.li, {
            children: "In a multi-user call, ask users to mute in turn to figure out who causes the echo. The users who cause the echo should use headsets or mute themselves."
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "step-2-contact-agora-customer-support",
      children: "Step 2: Contact Agora Customer Support"
    }), `
`, _jsx(_components.p, {
      children: "If the issue persists, contact Agora customer support and submit the issue with the following information:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Information"
          }), _jsx(_components.th, {
            children: "Details"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Mandatory"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The name of the channel where the echo occurs."
            }), _jsx(_components.p, {
              children: "The uids of the users who hear the echo."
            }), _jsx(_components.p, {
              children: "The uid of the user who causes the echo."
            }), _jsx(_components.p, {
              children: "The recording files, if available."
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Additional"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The time frame during which the users hear the echo."
            }), _jsx(_components.p, {
              children: "If the issue exists after rejoining the channel."
            }), _jsx(_components.p, {
              children: "If the issue exists after the user causing or hearing the echo switches the audio route (such as using a headset)."
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "step-3-monitor-the-quality-of-experience-in-agora-analytics-in-console",
      children: "Step 3: Monitor the Quality of Experience in Agora Analytics in Console"
    }), `
`, _jsxs(_components.p, {
      children: ["You can check the statistics of every call in Agora Analytics in ", _jsx(_components.a, {
        href: "https://console.agora.io/",
        children: "Agora Console"
      }), ". For more information, see ", _jsx(_components.a, {
        href: "/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search",
        children: "Call Search"
      }), "."]
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
