import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I avoid being frequency limited when calling Agora Server RESTful APIs?"
};
export let _markdown = `

When the request of an Agora Server RESTful API exceeds its call frequency limit, the API returns the HTTP status code 429, indicating that you have made too many requests in a specified amount of time. The following suggestions can help you optimize API call frequency based on the needs of your project.

## Tips to avoid exceeding call frequency limits [#tips-to-avoid-exceeding-call-frequency-limits]

* Distribute your API requests evenly across time windows.
  For example, if you want to call [\`https://api.agora.io/dev/v1/channel/user/{appid}/{channelName}\`](/en/api-reference/api-ref/rtc/query-user-list) to query the user list of 100 online channels, the default call frequency limit for this API is 20 times per second. To avoid exceeding the call frequency limit, you can set the query interval of a single channel to 5 seconds, and then query the user list of 20 channels per second.
* Do not directly call Agora Server RESTful APIs on your client; call these APIs on your application server instead.
  For example, when using the API for querying online channel statistics, you can configure your application server to periodically send requests to Agora and cache the returned results. When a client queries channel information, your server sends the latest locally cached data to the client.

If the default frequency limit still cannot meet your project needs after considering the preceding suggestions, contact [support@agora.io](mailto\\:support@agora.io) to apply to adjust the call frequency limit. See [Apply to raise API call frequency limit](#raiselimit).

<CalloutContainer type="info">
  <CalloutDescription>
    The frequency of calling Agora server-side RESTful API is capped and high real-time performance is not guaranteed. In case of a large number of concurrent businesses, enable Agora Notifications and configure your business server to [Receive notifications about channel events](/en/realtime-media/rtc/build/optimize-and-operate/receive-notifications).
  </CalloutDescription>
</CalloutContainer>

## Apply to raise API call frequency limit [#apply-to-raise-api-call-frequency-limit]

To raise the call frequency limit of an Agora Server RESTful API, you need contact [support@agora.io](mailto\\:support@agora.io) with the following information:

* Your industry, such as education, pan-entertainment, or medical.
* Your application scenario, such as chat room, small class, or PK host.
* Both the average and maximum number of concurrent channels.
* Both the average and peak number of concurrent users in each channel.
* The RESTful API that does not meet your project needs, as well as how you use it and in what scenarios.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When the request of an Agora Server RESTful API exceeds its call frequency limit, the API returns the HTTP status code 429, indicating that you have made too many requests in a specified amount of time. The following suggestions can help you optimize API call frequency based on the needs of your project."
  }, {
    heading: "tips-to-avoid-exceeding-call-frequency-limits",
    content: "Distribute your API requests evenly across time windows.\nFor example, if you want to call `https://api.agora.io/dev/v1/channel/user/{appid}/{channelName}` to query the user list of 100 online channels, the default call frequency limit for this API is 20 times per second. To avoid exceeding the call frequency limit, you can set the query interval of a single channel to 5 seconds, and then query the user list of 20 channels per second."
  }, {
    heading: "tips-to-avoid-exceeding-call-frequency-limits",
    content: `Do not directly call Agora Server RESTful APIs on your client; call these APIs on your application server instead.
For example, when using the API for querying online channel statistics, you can configure your application server to periodically send requests to Agora and cache the returned results. When a client queries channel information, your server sends the latest locally cached data to the client.`
  }, {
    heading: "tips-to-avoid-exceeding-call-frequency-limits",
    content: "If the default frequency limit still cannot meet your project needs after considering the preceding suggestions, contact support\\@agora.io to apply to adjust the call frequency limit. See Apply to raise API call frequency limit."
  }, {
    heading: "tips-to-avoid-exceeding-call-frequency-limits",
    content: "The frequency of calling Agora server-side RESTful API is capped and high real-time performance is not guaranteed. In case of a large number of concurrent businesses, enable Agora Notifications and configure your business server to Receive notifications about channel events."
  }, {
    heading: "apply-to-raise-api-call-frequency-limit",
    content: "To raise the call frequency limit of an Agora Server RESTful API, you need contact support\\@agora.io with the following information:"
  }, {
    heading: "apply-to-raise-api-call-frequency-limit",
    content: "Your industry, such as education, pan-entertainment, or medical."
  }, {
    heading: "apply-to-raise-api-call-frequency-limit",
    content: "Your application scenario, such as chat room, small class, or PK host."
  }, {
    heading: "apply-to-raise-api-call-frequency-limit",
    content: "Both the average and maximum number of concurrent channels."
  }, {
    heading: "apply-to-raise-api-call-frequency-limit",
    content: "Both the average and peak number of concurrent users in each channel."
  }, {
    heading: "apply-to-raise-api-call-frequency-limit",
    content: "The RESTful API that does not meet your project needs, as well as how you use it and in what scenarios."
  }],
  headings: [{
    id: "tips-to-avoid-exceeding-call-frequency-limits",
    content: "Tips to avoid exceeding call frequency limits"
  }, {
    id: "apply-to-raise-api-call-frequency-limit",
    content: "Apply to raise API call frequency limit"
  }]
};
export let toc = [{
  depth: 2,
  url: "#tips-to-avoid-exceeding-call-frequency-limits",
  title: _jsx(_Fragment, {
    children: "Tips to avoid exceeding call frequency limits"
  })
}, {
  depth: 2,
  url: "#apply-to-raise-api-call-frequency-limit",
  title: _jsx(_Fragment, {
    children: "Apply to raise API call frequency limit"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "When the request of an Agora Server RESTful API exceeds its call frequency limit, the API returns the HTTP status code 429, indicating that you have made too many requests in a specified amount of time. The following suggestions can help you optimize API call frequency based on the needs of your project."
    }), `
`, _jsx(_components.h2, {
      id: "tips-to-avoid-exceeding-call-frequency-limits",
      children: "Tips to avoid exceeding call frequency limits"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`Distribute your API requests evenly across time windows.
For example, if you want to call `, _jsx(_components.a, {
          href: "/en/api-reference/api-ref/rtc/query-user-list",
          children: _jsx(_components.code, {
            children: "https://api.agora.io/dev/v1/channel/user/{appid}/{channelName}"
          })
        }), " to query the user list of 100 online channels, the default call frequency limit for this API is 20 times per second. To avoid exceeding the call frequency limit, you can set the query interval of a single channel to 5 seconds, and then query the user list of 20 channels per second."]
      }), `
`, _jsx(_components.li, {
        children: `Do not directly call Agora Server RESTful APIs on your client; call these APIs on your application server instead.
For example, when using the API for querying online channel statistics, you can configure your application server to periodically send requests to Agora and cache the returned results. When a client queries channel information, your server sends the latest locally cached data to the client.`
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["If the default frequency limit still cannot meet your project needs after considering the preceding suggestions, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), " to apply to adjust the call frequency limit. See ", _jsx(_components.a, {
        href: "#raiselimit",
        children: "Apply to raise API call frequency limit"
      }), "."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["The frequency of calling Agora server-side RESTful API is capped and high real-time performance is not guaranteed. In case of a large number of concurrent businesses, enable Agora Notifications and configure your business server to ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/optimize-and-operate/receive-notifications",
            children: "Receive notifications about channel events"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "apply-to-raise-api-call-frequency-limit",
      children: "Apply to raise API call frequency limit"
    }), `
`, _jsxs(_components.p, {
      children: ["To raise the call frequency limit of an Agora Server RESTful API, you need contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), " with the following information:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Your industry, such as education, pan-entertainment, or medical."
      }), `
`, _jsx(_components.li, {
        children: "Your application scenario, such as chat room, small class, or PK host."
      }), `
`, _jsx(_components.li, {
        children: "Both the average and maximum number of concurrent channels."
      }), `
`, _jsx(_components.li, {
        children: "Both the average and peak number of concurrent users in each channel."
      }), `
`, _jsx(_components.li, {
        children: "The RESTful API that does not meet your project needs, as well as how you use it and in what scenarios."
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
