import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why is my video blurry?"
};
export let _markdown = `

Blurry videos may be caused by low bitrates and resolution ratios.

## Step 1: Self-check [#step-1-self-check]

Check the following:

1. Check \`videoProfile\`. If possible, set \`videoProfile\` to a higher level to see whether the video is clearer.
2. Check the stream type of the receiver. If the stream type is low, call the \`setRemoteVideoStreamType\` method to switch from a low stream to high stream.
3. Switch to 4G or another Wi-Fi network to ensure that the blurry video is not caused by poor Internet connections.
4. Turn off all pre-processing options.

## Step 2: Contact Agora Customer Support [#step-2-contact-agora-customer-support]

If the issue persists, [contact Agora customer support](mailto\\:support@agora.io) and submit the issue with the following information:

1. The uid of the user who sees the blurry video.
2. The time frame during which the blurry video appears.
3. SDK logs and screen recording files of the user.

## Step 3: Monitor the Quality of Experience in Agora Analytics in Console [#step-3-monitor-the-quality-of-experience-in-agora-analytics-in-console]

You can check the statistics of every call in Agora Analytics in [Agora Console](https://console.agora.io/). For more information, see [Call Search](/en/realtime-media/agora-analytics/build/explore-and-analyze-data/call-search).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Blurry videos may be caused by low bitrates and resolution ratios."
  }, {
    heading: "step-1-self-check",
    content: "Check the following:"
  }, {
    heading: "step-1-self-check",
    content: "Check `videoProfile`. If possible, set `videoProfile` to a higher level to see whether the video is clearer."
  }, {
    heading: "step-1-self-check",
    content: "Check the stream type of the receiver. If the stream type is low, call the `setRemoteVideoStreamType` method to switch from a low stream to high stream."
  }, {
    heading: "step-1-self-check",
    content: "Switch to 4G or another Wi-Fi network to ensure that the blurry video is not caused by poor Internet connections."
  }, {
    heading: "step-1-self-check",
    content: "Turn off all pre-processing options."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "If the issue persists, contact Agora customer support and submit the issue with the following information:"
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "The uid of the user who sees the blurry video."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "The time frame during which the blurry video appears."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "SDK logs and screen recording files of the user."
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
    ol: "ol",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Blurry videos may be caused by low bitrates and resolution ratios."
    }), `
`, _jsx(_components.h2, {
      id: "step-1-self-check",
      children: "Step 1: Self-check"
    }), `
`, _jsx(_components.p, {
      children: "Check the following:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Check ", _jsx(_components.code, {
          children: "videoProfile"
        }), ". If possible, set ", _jsx(_components.code, {
          children: "videoProfile"
        }), " to a higher level to see whether the video is clearer."]
      }), `
`, _jsxs(_components.li, {
        children: ["Check the stream type of the receiver. If the stream type is low, call the ", _jsx(_components.code, {
          children: "setRemoteVideoStreamType"
        }), " method to switch from a low stream to high stream."]
      }), `
`, _jsx(_components.li, {
        children: "Switch to 4G or another Wi-Fi network to ensure that the blurry video is not caused by poor Internet connections."
      }), `
`, _jsx(_components.li, {
        children: "Turn off all pre-processing options."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "step-2-contact-agora-customer-support",
      children: "Step 2: Contact Agora Customer Support"
    }), `
`, _jsxs(_components.p, {
      children: ["If the issue persists, ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "contact Agora customer support"
      }), " and submit the issue with the following information:"]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "The uid of the user who sees the blurry video."
      }), `
`, _jsx(_components.li, {
        children: "The time frame during which the blurry video appears."
      }), `
`, _jsx(_components.li, {
        children: "SDK logs and screen recording files of the user."
      }), `
`]
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
