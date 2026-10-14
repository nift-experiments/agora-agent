import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "When pushing streams to the CDN, what should I do when a disconnection happens?"
};
export let _markdown = `

<CalloutContainer type="info">
  <CalloutDescription>
    This article only applies to the Agora Web SDK 3.x and earlier versions.
  </CalloutDescription>
</CalloutContainer>

Pushing streams to the CDN refers to the process where a host publishes multiple media streams to the CDN (Content Delivery Network).

During pushing streams, the SDK connects to the dedicated Agora server for pushing streams. When the connection is interrupted, the SDK tries to reconnect to the server to continue pushing streams. If it fails to reconnect, the SDK triggers a callback to report a disconnection.

Based on [live transcoding setting](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#startlivestreaming), the SDK connects to different servers for pushing streams and triggers different callbacks after disconnection.

| \`enableTranscoding\` | Callback triggered when a disconnection happens |
| ------------------- | ----------------------------------------------- |
| \`true\`              | \`Client.on("mix-streaming-disconnected")\`       |
| \`false\`             | \`Client.on("raw-streaming-disconnected")\`       |

When either of the previously-mentioned events occurs, call [\`stopLiveStreaming\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#stopLiveStreaming) to stop pushing all streams, and then [\`startLiveStreaming\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#startlivestreaming) to restart the process.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This article only applies to the Agora Web SDK 3.x and earlier versions."
  }, {
    heading: undefined,
    content: "Pushing streams to the CDN refers to the process where a host publishes multiple media streams to the CDN (Content Delivery Network)."
  }, {
    heading: undefined,
    content: "During pushing streams, the SDK connects to the dedicated Agora server for pushing streams. When the connection is interrupted, the SDK tries to reconnect to the server to continue pushing streams. If it fails to reconnect, the SDK triggers a callback to report a disconnection."
  }, {
    heading: undefined,
    content: "Based on live transcoding setting, the SDK connects to different servers for pushing streams and triggers different callbacks after disconnection."
  }, {
    heading: undefined,
    content: "`enableTranscoding`"
  }, {
    heading: undefined,
    content: "Callback triggered when a disconnection happens"
  }, {
    heading: undefined,
    content: "`true`"
  }, {
    heading: undefined,
    content: '`Client.on("mix-streaming-disconnected")`'
  }, {
    heading: undefined,
    content: "`false`"
  }, {
    heading: undefined,
    content: '`Client.on("raw-streaming-disconnected")`'
  }, {
    heading: undefined,
    content: "When either of the previously-mentioned events occurs, call `stopLiveStreaming` to stop pushing all streams, and then `startLiveStreaming` to restart the process."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "This article only applies to the Agora Web SDK 3.x and earlier versions."
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "Pushing streams to the CDN refers to the process where a host publishes multiple media streams to the CDN (Content Delivery Network)."
    }), `
`, _jsx(_components.p, {
      children: "During pushing streams, the SDK connects to the dedicated Agora server for pushing streams. When the connection is interrupted, the SDK tries to reconnect to the server to continue pushing streams. If it fails to reconnect, the SDK triggers a callback to report a disconnection."
    }), `
`, _jsxs(_components.p, {
      children: ["Based on ", _jsx(_components.a, {
        href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#startlivestreaming",
        children: "live transcoding setting"
      }), ", the SDK connects to different servers for pushing streams and triggers different callbacks after disconnection."]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: _jsx(_components.code, {
              children: "enableTranscoding"
            })
          }), _jsx(_components.th, {
            children: "Callback triggered when a disconnection happens"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "true"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'Client.on("mix-streaming-disconnected")'
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "false"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: 'Client.on("raw-streaming-disconnected")'
            })
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["When either of the previously-mentioned events occurs, call ", _jsx(_components.a, {
        href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#stopLiveStreaming",
        children: _jsx(_components.code, {
          children: "stopLiveStreaming"
        })
      }), " to stop pushing all streams, and then ", _jsx(_components.a, {
        href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#startlivestreaming",
        children: _jsx(_components.code, {
          children: "startLiveStreaming"
        })
      }), " to restart the process."]
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
