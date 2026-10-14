import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why is my video choppy?"
};
export let _markdown = `

Choppy video may be caused by a slow network connection or sub-optimal device performance. Complete the following steps to troubleshoot choppy video.

## Step 1: Self-check [#step-1-self-check]

Check the following:

* Check whether the choppy video is intermittent or consistent. Occasional, intermittent choppy video is normal due to the nature of the network and device.
* Check whether the network connection is stable. If it is stable but the video is still choppy, change your network connection and re-check.
* Switch to another device with better performance.
* Turn off all pre-processing options, such as image enhancement, to determine whether it is the cause of the choppy video.

## Step 2: Contact Agora customer support [#step-2-contact-agora-customer-support]

If the issue persists, contact [support@agora.io](mailto\\:support@agora.io) and report the issue with the following information:

* The channel name and the UIDs of the users sending and receiving the video.
* The time frame during which the choppy video playback appears.
* SDK log files. See [How can I set the log file?](/en/api-reference/faq/integration/log#set-the-log-file)
* Screen recording files.

## Step 3: Monitor the quality of experience in Agora Analytics in Console [#step-3-monitor-the-quality-of-experience-in-agora-analytics-in-console]

You can monitor the statistics of every call in Agora Analytics in [Agora Console](https://console.agora.io/). See [Call Search](/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Choppy video may be caused by a slow network connection or sub-optimal device performance. Complete the following steps to troubleshoot choppy video."
  }, {
    heading: "step-1-self-check",
    content: "Check the following:"
  }, {
    heading: "step-1-self-check",
    content: "Check whether the choppy video is intermittent or consistent. Occasional, intermittent choppy video is normal due to the nature of the network and device."
  }, {
    heading: "step-1-self-check",
    content: "Check whether the network connection is stable. If it is stable but the video is still choppy, change your network connection and re-check."
  }, {
    heading: "step-1-self-check",
    content: "Switch to another device with better performance."
  }, {
    heading: "step-1-self-check",
    content: "Turn off all pre-processing options, such as image enhancement, to determine whether it is the cause of the choppy video."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "If the issue persists, contact support\\@agora.io and report the issue with the following information:"
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "The channel name and the UIDs of the users sending and receiving the video."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "The time frame during which the choppy video playback appears."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "SDK log files. See How can I set the log file?"
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "Screen recording files."
  }, {
    heading: "step-3-monitor-the-quality-of-experience-in-agora-analytics-in-console",
    content: "You can monitor the statistics of every call in Agora Analytics in Agora Console. See Call Search."
  }],
  headings: [{
    id: "step-1-self-check",
    content: "Step 1: Self-check"
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
  url: "#step-1-self-check",
  title: _jsx(_Fragment, {
    children: "Step 1: Self-check"
  })
}, {
  depth: 2,
  url: "#step-2-contact-agora-customer-support",
  title: _jsx(_Fragment, {
    children: "Step 2: Contact Agora customer support"
  })
}, {
  depth: 2,
  url: "#step-3-monitor-the-quality-of-experience-in-agora-analytics-in-console",
  title: _jsx(_Fragment, {
    children: "Step 3: Monitor the quality of experience in Agora Analytics in Console"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Choppy video may be caused by a slow network connection or sub-optimal device performance. Complete the following steps to troubleshoot choppy video."
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
        children: "Check whether the choppy video is intermittent or consistent. Occasional, intermittent choppy video is normal due to the nature of the network and device."
      }), `
`, _jsx(_components.li, {
        children: "Check whether the network connection is stable. If it is stable but the video is still choppy, change your network connection and re-check."
      }), `
`, _jsx(_components.li, {
        children: "Switch to another device with better performance."
      }), `
`, _jsx(_components.li, {
        children: "Turn off all pre-processing options, such as image enhancement, to determine whether it is the cause of the choppy video."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "step-2-contact-agora-customer-support",
      children: "Step 2: Contact Agora customer support"
    }), `
`, _jsxs(_components.p, {
      children: ["If the issue persists, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), " and report the issue with the following information:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The channel name and the UIDs of the users sending and receiving the video."
      }), `
`, _jsx(_components.li, {
        children: "The time frame during which the choppy video playback appears."
      }), `
`, _jsxs(_components.li, {
        children: ["SDK log files. See ", _jsx(_components.a, {
          href: "/en/api-reference/faq/integration/log#set-the-log-file",
          children: "How can I set the log file?"
        })]
      }), `
`, _jsx(_components.li, {
        children: "Screen recording files."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "step-3-monitor-the-quality-of-experience-in-agora-analytics-in-console",
      children: "Step 3: Monitor the quality of experience in Agora Analytics in Console"
    }), `
`, _jsxs(_components.p, {
      children: ["You can monitor the statistics of every call in Agora Analytics in ", _jsx(_components.a, {
        href: "https://console.agora.io/",
        children: "Agora Console"
      }), ". See ", _jsx(_components.a, {
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
