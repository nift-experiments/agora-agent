import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "What are the differences between the Message Notification Service and the query Method?"
};
export let _markdown = `

You can monitor the status of the cloud recording service either through the \`query\` method or by the Message Notification Service, to take action when required. Both options have pros and cons.

## The query method [#the-query-method]

You can periodically call the \`query\` method to monitor the status of a cloud recording. See [Query the recording status](/en/realtime-media/cloud-recording/reference/restful-api#query).

* Pros: Reliable, as the status is queried proactively.
* Cons:
  * Provides limited status information.
  * Requires an active query. You cannot query too often because of the Queries Per Second (QPS) limit, and thus it is not as real-time as the Message Notification Service.

If the reliability of the status of a cloud recording is a high priority, Agora strongly recommends using the \`query\` method.

## Message Notification Service [#message-notification-service]

You can use the Message Notification Service as a complementary option to monitor the recording service status. You need to configure an HTTP/HTTPS server to receive event notifications. For details, see [Agora Cloud Recording RESTful API Callback Service](/en/api-reference/api-ref/cloud-recording/api-callback-service).

* Pros: Real-time
* Cons:
  * The server passively receives messages, and the messages may get lost.
  * The confirmation message of the message delivery may get lost, causing the message to be resent. In such a case, you need to deduplicate the notifications.
  * The messages may not arrive in the correct order.

<CalloutContainer type="warning">
  <CalloutDescription>
    Agora recommends that core apps should not rely on the Message Notification Service. If your apps
    already rely heavily on the Message Notification Service, Agora recommends that you contact 
    [support@agora.io](mailto\\:support@agora.io) to enable the redundant message notification
    function, which doubles the received notifications and reduces the probability of message loss. Redundant message notification still cannot guarantee a 100% arrival rate.
  </CalloutDescription>
</CalloutContainer>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "You can monitor the status of the cloud recording service either through the `query` method or by the Message Notification Service, to take action when required. Both options have pros and cons."
  }, {
    heading: "the-query-method",
    content: "You can periodically call the `query` method to monitor the status of a cloud recording. See Query the recording status."
  }, {
    heading: "the-query-method",
    content: "Pros: Reliable, as the status is queried proactively."
  }, {
    heading: "the-query-method",
    content: "Cons:"
  }, {
    heading: "the-query-method",
    content: "Provides limited status information."
  }, {
    heading: "the-query-method",
    content: "Requires an active query. You cannot query too often because of the Queries Per Second (QPS) limit, and thus it is not as real-time as the Message Notification Service."
  }, {
    heading: "the-query-method",
    content: "If the reliability of the status of a cloud recording is a high priority, Agora strongly recommends using the `query` method."
  }, {
    heading: "message-notification-service",
    content: "You can use the Message Notification Service as a complementary option to monitor the recording service status. You need to configure an HTTP/HTTPS server to receive event notifications. For details, see Agora Cloud Recording RESTful API Callback Service."
  }, {
    heading: "message-notification-service",
    content: "Pros: Real-time"
  }, {
    heading: "message-notification-service",
    content: "Cons:"
  }, {
    heading: "message-notification-service",
    content: "The server passively receives messages, and the messages may get lost."
  }, {
    heading: "message-notification-service",
    content: "The confirmation message of the message delivery may get lost, causing the message to be resent. In such a case, you need to deduplicate the notifications."
  }, {
    heading: "message-notification-service",
    content: "The messages may not arrive in the correct order."
  }, {
    heading: "message-notification-service",
    content: `Agora recommends that core apps should not rely on the Message Notification Service. If your apps
already rely heavily on the Message Notification Service, Agora recommends that you contact 
support\\@agora.io to enable the redundant message notification
function, which doubles the received notifications and reduces the probability of message loss. Redundant message notification still cannot guarantee a 100% arrival rate.`
  }],
  headings: [{
    id: "the-query-method",
    content: "The query method"
  }, {
    id: "message-notification-service",
    content: "Message Notification Service"
  }]
};
export let toc = [{
  depth: 2,
  url: "#the-query-method",
  title: _jsx(_Fragment, {
    children: "The query method"
  })
}, {
  depth: 2,
  url: "#message-notification-service",
  title: _jsx(_Fragment, {
    children: "Message Notification Service"
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
    children: [_jsxs(_components.p, {
      children: ["You can monitor the status of the cloud recording service either through the ", _jsx(_components.code, {
        children: "query"
      }), " method or by the Message Notification Service, to take action when required. Both options have pros and cons."]
    }), `
`, _jsx(_components.h2, {
      id: "the-query-method",
      children: "The query method"
    }), `
`, _jsxs(_components.p, {
      children: ["You can periodically call the ", _jsx(_components.code, {
        children: "query"
      }), " method to monitor the status of a cloud recording. See ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/reference/restful-api#query",
        children: "Query the recording status"
      }), "."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Pros: Reliable, as the status is queried proactively."
      }), `
`, _jsxs(_components.li, {
        children: ["Cons:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Provides limited status information."
          }), `
`, _jsx(_components.li, {
            children: "Requires an active query. You cannot query too often because of the Queries Per Second (QPS) limit, and thus it is not as real-time as the Message Notification Service."
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["If the reliability of the status of a cloud recording is a high priority, Agora strongly recommends using the ", _jsx(_components.code, {
        children: "query"
      }), " method."]
    }), `
`, _jsx(_components.h2, {
      id: "message-notification-service",
      children: "Message Notification Service"
    }), `
`, _jsxs(_components.p, {
      children: ["You can use the Message Notification Service as a complementary option to monitor the recording service status. You need to configure an HTTP/HTTPS server to receive event notifications. For details, see ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording/api-callback-service",
        children: "Agora Cloud Recording RESTful API Callback Service"
      }), "."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Pros: Real-time"
      }), `
`, _jsxs(_components.li, {
        children: ["Cons:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "The server passively receives messages, and the messages may get lost."
          }), `
`, _jsx(_components.li, {
            children: "The confirmation message of the message delivery may get lost, causing the message to be resent. In such a case, you need to deduplicate the notifications."
          }), `
`, _jsx(_components.li, {
            children: "The messages may not arrive in the correct order."
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "warning",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: [`Agora recommends that core apps should not rely on the Message Notification Service. If your apps
already rely heavily on the Message Notification Service, Agora recommends that you contact 
`, _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "support@agora.io"
          }), ` to enable the redundant message notification
function, which doubles the received notifications and reduces the probability of message loss. Redundant message notification still cannot guarantee a 100% arrival rate.`]
        })
      })
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
