import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I fix black screen issues?"
};
export let _markdown = `

A user may encounter black screen issues in the following scenarios:

* Black screen on the local side.
* Black screen on the remote side.
* Black screen on the local and remote sides.

## Reason [#reason]

Typical reasons for black screens include:

* Wrong token. When you set the local or remote video view before calling \`joinChannel\`, but the user fails to join the channel, the local video preview or the remote video view appears black. This can happen if you pass the wrong token.
* Network failure: If the local network connection is poor or interrupted, the user cannot see other users. If any user in the call has network issues, none of the other users can see this user.
* The user disabled the video.

## Solution [#solution]

### Step 1: Self-check [#step-1-self-check]

Before proceeding, ensure that your token is properly set.

#### **Black screen on the local side** [#black-screen-on-the-local-side]

This is likely caused by a video capture failure on the local side. Do the following:

1. Check the camera hardware. Start the built-in video camera to test the recording function.
2. Check if the camera access permission is enabled. Both Android and iOS have a runtime access permission function under System Settings. See [Handle permissions](/en/realtime-media/rtc/get-started-sdk#handle-permissions).
3. Check if another app is using the camera. Close all apps, restart your phone, and re-check.
4. If the app enabled the External Source Mode, check the data collected from the external video sources.

#### **Black screen on the remote side** [#black-screen-on-the-remote-side]

This is likely caused by a video capture failure on the remote side or slow downlink network on the local side. Do the following:

1. Check if the user disabled the remote video.
2. Switch to another network to ensure that the problem is not caused by a poor Internet connection.
3. Check whether the remote user uses the [Secure channel encryption](/en/realtime-media/rtc/build/secure-and-protect-channels/media-stream-encryption) function but the local user doesn't.
4. Check whether the remote user can preview their video on their own device. If not, then the cause of the black video probably lies on the remote side. Perform the steps in [Black screen on the local side](#black-screen-on-the-local-side).

**Black screen on both sides**

This occurs when the video is not rendered correctly or the video function is not enabled. Do the following:

1. Check if the app calls the \`enableVideo\` method to enable the video.
2. Check if the video is enabled on both the local and remote sides.
3. Check the rendering type in the SDK log in Windows. If the rendering type is D2D, update to the latest graphics card driver. If the issue persists after updating the driver, switch to GDI rendering, which has the app call the following function before the user joins the channel:
   * \`AParameter apm(*pRTCEngine);\`
   * \`nRet = apm->setInt("che.video.renderer.type", 9);\`
4. If the app enables the Other Rendering Method Mode, check for any rendering issue.
5. Check if you are using the RTC SDK and not the voice SDK.
6. Check if the local and remote video views are set correctly. For example:
   * Neither the width nor height of the video view are set to 0.
   * The video display window is not covered by any black view.

### Step 2: Contact Agora customer support [#step-2-contact-agora-customer-support]

If the issue persists, contact [support@agora.io](mailto\\:support@agora.io). Please provide the following information to help with the troubleshooting:

* The UIDs of the users sending and receiving the black video.
* The time frame when the black screen appears.
* Screen recording files.
* SDK log files. See [How can I set the log file?](/en/api-reference/faq/integration/log#set-the-log-file)

### Step 3: Monitor the quality of experience in Agora Analytics in Console [#step-3-monitor-the-quality-of-experience-in-agora-analytics-in-console]

You can monitor the statistics of every call in [Agora Analytics](/en/realtime-media/agora-analytics/product-overview) in Console. For more information, see [Call Search](/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "A user may encounter black screen issues in the following scenarios:"
  }, {
    heading: undefined,
    content: "Black screen on the local side."
  }, {
    heading: undefined,
    content: "Black screen on the remote side."
  }, {
    heading: undefined,
    content: "Black screen on the local and remote sides."
  }, {
    heading: "reason",
    content: "Typical reasons for black screens include:"
  }, {
    heading: "reason",
    content: "Wrong token. When you set the local or remote video view before calling `joinChannel`, but the user fails to join the channel, the local video preview or the remote video view appears black. This can happen if you pass the wrong token."
  }, {
    heading: "reason",
    content: "Network failure: If the local network connection is poor or interrupted, the user cannot see other users. If any user in the call has network issues, none of the other users can see this user."
  }, {
    heading: "reason",
    content: "The user disabled the video."
  }, {
    heading: "step-1-self-check",
    content: "Before proceeding, ensure that your token is properly set."
  }, {
    heading: "black-screen-on-the-local-side",
    content: "This is likely caused by a video capture failure on the local side. Do the following:"
  }, {
    heading: "black-screen-on-the-local-side",
    content: "Check the camera hardware. Start the built-in video camera to test the recording function."
  }, {
    heading: "black-screen-on-the-local-side",
    content: "Check if the camera access permission is enabled. Both Android and iOS have a runtime access permission function under System Settings. See Handle permissions."
  }, {
    heading: "black-screen-on-the-local-side",
    content: "Check if another app is using the camera. Close all apps, restart your phone, and re-check."
  }, {
    heading: "black-screen-on-the-local-side",
    content: "If the app enabled the External Source Mode, check the data collected from the external video sources."
  }, {
    heading: "black-screen-on-the-remote-side",
    content: "This is likely caused by a video capture failure on the remote side or slow downlink network on the local side. Do the following:"
  }, {
    heading: "black-screen-on-the-remote-side",
    content: "Check if the user disabled the remote video."
  }, {
    heading: "black-screen-on-the-remote-side",
    content: "Switch to another network to ensure that the problem is not caused by a poor Internet connection."
  }, {
    heading: "black-screen-on-the-remote-side",
    content: "Check whether the remote user uses the Secure channel encryption function but the local user doesn't."
  }, {
    heading: "black-screen-on-the-remote-side",
    content: "Check whether the remote user can preview their video on their own device. If not, then the cause of the black video probably lies on the remote side. Perform the steps in Black screen on the local side."
  }, {
    heading: "black-screen-on-the-remote-side",
    content: "**Black screen on both sides**"
  }, {
    heading: "black-screen-on-the-remote-side",
    content: "This occurs when the video is not rendered correctly or the video function is not enabled. Do the following:"
  }, {
    heading: "black-screen-on-the-remote-side",
    content: "Check if the app calls the `enableVideo` method to enable the video."
  }, {
    heading: "black-screen-on-the-remote-side",
    content: "Check if the video is enabled on both the local and remote sides."
  }, {
    heading: "black-screen-on-the-remote-side",
    content: "Check the rendering type in the SDK log in Windows. If the rendering type is D2D, update to the latest graphics card driver. If the issue persists after updating the driver, switch to GDI rendering, which has the app call the following function before the user joins the channel:"
  }, {
    heading: "black-screen-on-the-remote-side",
    content: "`AParameter apm(*pRTCEngine);`"
  }, {
    heading: "black-screen-on-the-remote-side",
    content: '`nRet = apm->setInt("che.video.renderer.type", 9);`'
  }, {
    heading: "black-screen-on-the-remote-side",
    content: "If the app enables the Other Rendering Method Mode, check for any rendering issue."
  }, {
    heading: "black-screen-on-the-remote-side",
    content: "Check if you are using the RTC SDK and not the voice SDK."
  }, {
    heading: "black-screen-on-the-remote-side",
    content: "Check if the local and remote video views are set correctly. For example:"
  }, {
    heading: "black-screen-on-the-remote-side",
    content: "Neither the width nor height of the video view are set to 0."
  }, {
    heading: "black-screen-on-the-remote-side",
    content: "The video display window is not covered by any black view."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "If the issue persists, contact support\\@agora.io. Please provide the following information to help with the troubleshooting:"
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "The UIDs of the users sending and receiving the black video."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "The time frame when the black screen appears."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "Screen recording files."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "SDK log files. See How can I set the log file?"
  }, {
    heading: "step-3-monitor-the-quality-of-experience-in-agora-analytics-in-console",
    content: "You can monitor the statistics of every call in Agora Analytics in Console. For more information, see Call Search."
  }],
  headings: [{
    id: "reason",
    content: "Reason"
  }, {
    id: "solution",
    content: "Solution"
  }, {
    id: "step-1-self-check",
    content: "Step 1: Self-check"
  }, {
    id: "black-screen-on-the-local-side",
    content: "**Black screen on the local side**"
  }, {
    id: "black-screen-on-the-remote-side",
    content: "**Black screen on the remote side**"
  }, {
    id: "step-2-contact-agora-customer-support",
    content: "Step 2: Contact Agora customer support"
  }, {
    id: "step-3-monitor-the-quality-of-experience-in-agora-analytics-in-console",
    content: "Step 3: Monitor the quality of experience in Agora Analytics in Console"
  }]
};
export let toc = [{
  depth: 2,
  url: "#reason",
  title: _jsx(_Fragment, {
    children: "Reason"
  })
}, {
  depth: 2,
  url: "#solution",
  title: _jsx(_Fragment, {
    children: "Solution"
  })
}, {
  depth: 3,
  url: "#step-1-self-check",
  title: _jsx(_Fragment, {
    children: "Step 1: Self-check"
  })
}, {
  depth: 4,
  url: "#black-screen-on-the-local-side",
  title: _jsx(_Fragment, {
    children: _jsx("strong", {
      children: "Black screen on the local side"
    })
  })
}, {
  depth: 4,
  url: "#black-screen-on-the-remote-side",
  title: _jsx(_Fragment, {
    children: _jsx("strong", {
      children: "Black screen on the remote side"
    })
  })
}, {
  depth: 3,
  url: "#step-2-contact-agora-customer-support",
  title: _jsx(_Fragment, {
    children: "Step 2: Contact Agora customer support"
  })
}, {
  depth: 3,
  url: "#step-3-monitor-the-quality-of-experience-in-agora-analytics-in-console",
  title: _jsx(_Fragment, {
    children: "Step 3: Monitor the quality of experience in Agora Analytics in Console"
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
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "A user may encounter black screen issues in the following scenarios:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Black screen on the local side."
      }), `
`, _jsx(_components.li, {
        children: "Black screen on the remote side."
      }), `
`, _jsx(_components.li, {
        children: "Black screen on the local and remote sides."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "reason",
      children: "Reason"
    }), `
`, _jsx(_components.p, {
      children: "Typical reasons for black screens include:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Wrong token. When you set the local or remote video view before calling ", _jsx(_components.code, {
          children: "joinChannel"
        }), ", but the user fails to join the channel, the local video preview or the remote video view appears black. This can happen if you pass the wrong token."]
      }), `
`, _jsx(_components.li, {
        children: "Network failure: If the local network connection is poor or interrupted, the user cannot see other users. If any user in the call has network issues, none of the other users can see this user."
      }), `
`, _jsx(_components.li, {
        children: "The user disabled the video."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "solution",
      children: "Solution"
    }), `
`, _jsx(_components.h3, {
      id: "step-1-self-check",
      children: "Step 1: Self-check"
    }), `
`, _jsx(_components.p, {
      children: "Before proceeding, ensure that your token is properly set."
    }), `
`, _jsx(_components.h4, {
      id: "black-screen-on-the-local-side",
      children: _jsx(_components.strong, {
        children: "Black screen on the local side"
      })
    }), `
`, _jsx(_components.p, {
      children: "This is likely caused by a video capture failure on the local side. Do the following:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Check the camera hardware. Start the built-in video camera to test the recording function."
      }), `
`, _jsxs(_components.li, {
        children: ["Check if the camera access permission is enabled. Both Android and iOS have a runtime access permission function under System Settings. See ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/get-started-sdk#handle-permissions",
          children: "Handle permissions"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Check if another app is using the camera. Close all apps, restart your phone, and re-check."
      }), `
`, _jsx(_components.li, {
        children: "If the app enabled the External Source Mode, check the data collected from the external video sources."
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "black-screen-on-the-remote-side",
      children: _jsx(_components.strong, {
        children: "Black screen on the remote side"
      })
    }), `
`, _jsx(_components.p, {
      children: "This is likely caused by a video capture failure on the remote side or slow downlink network on the local side. Do the following:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "Check if the user disabled the remote video."
      }), `
`, _jsx(_components.li, {
        children: "Switch to another network to ensure that the problem is not caused by a poor Internet connection."
      }), `
`, _jsxs(_components.li, {
        children: ["Check whether the remote user uses the ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/build/secure-and-protect-channels/media-stream-encryption",
          children: "Secure channel encryption"
        }), " function but the local user doesn't."]
      }), `
`, _jsxs(_components.li, {
        children: ["Check whether the remote user can preview their video on their own device. If not, then the cause of the black video probably lies on the remote side. Perform the steps in ", _jsx(_components.a, {
          href: "#black-screen-on-the-local-side",
          children: "Black screen on the local side"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Black screen on both sides"
      })
    }), `
`, _jsx(_components.p, {
      children: "This occurs when the video is not rendered correctly or the video function is not enabled. Do the following:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Check if the app calls the ", _jsx(_components.code, {
          children: "enableVideo"
        }), " method to enable the video."]
      }), `
`, _jsx(_components.li, {
        children: "Check if the video is enabled on both the local and remote sides."
      }), `
`, _jsxs(_components.li, {
        children: ["Check the rendering type in the SDK log in Windows. If the rendering type is D2D, update to the latest graphics card driver. If the issue persists after updating the driver, switch to GDI rendering, which has the app call the following function before the user joins the channel:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "AParameter apm(*pRTCEngine);"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: 'nRet = apm->setInt("che.video.renderer.type", 9);'
            })
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "If the app enables the Other Rendering Method Mode, check for any rendering issue."
      }), `
`, _jsx(_components.li, {
        children: "Check if you are using the RTC SDK and not the voice SDK."
      }), `
`, _jsxs(_components.li, {
        children: ["Check if the local and remote video views are set correctly. For example:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Neither the width nor height of the video view are set to 0."
          }), `
`, _jsx(_components.li, {
            children: "The video display window is not covered by any black view."
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "step-2-contact-agora-customer-support",
      children: "Step 2: Contact Agora customer support"
    }), `
`, _jsxs(_components.p, {
      children: ["If the issue persists, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), ". Please provide the following information to help with the troubleshooting:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The UIDs of the users sending and receiving the black video."
      }), `
`, _jsx(_components.li, {
        children: "The time frame when the black screen appears."
      }), `
`, _jsx(_components.li, {
        children: "Screen recording files."
      }), `
`, _jsxs(_components.li, {
        children: ["SDK log files. See ", _jsx(_components.a, {
          href: "/en/api-reference/faq/integration/log#set-the-log-file",
          children: "How can I set the log file?"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "step-3-monitor-the-quality-of-experience-in-agora-analytics-in-console",
      children: "Step 3: Monitor the quality of experience in Agora Analytics in Console"
    }), `
`, _jsxs(_components.p, {
      children: ["You can monitor the statistics of every call in ", _jsx(_components.a, {
        href: "/en/realtime-media/agora-analytics/product-overview",
        children: "Agora Analytics"
      }), " in Console. For more information, see ", _jsx(_components.a, {
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
