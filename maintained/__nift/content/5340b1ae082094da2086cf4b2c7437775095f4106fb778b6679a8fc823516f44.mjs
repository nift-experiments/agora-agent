import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why does the query method return a 404 after successfully starting cloud recording?"
};
export let _markdown = "\n\nThe following issues may cause the `query` method to return a `404` status code after successfully starting cloud recording with the `start` method:\n\n* **Parameter issues**: After the cloud recording service starts, it verifies the parameters. If any parameter is incorrect, the recording may stop. Ensure that parameters like `transcodingConfig` are configured correctly. For details, see [Set video profile](/en/realtime-media/cloud-recording/build/customize-the-recording/recording-video-profile).\n\n* **Incorrect cloud storage configuration**: Errors in third-party cloud storage details, such as an incorrect `accessKey` or `secretKey`, can prevent file uploads. If you have enabled the [message notification service](/en/introduction/console-setup), you receive a [`cloud_recording_error`](/en/realtime-media/cloud-recording/reference/common-errors) event when storage configuration fails.\n\n* **Token issues**: If the `token` in `clientRequest` is invalid, cloud recording may fail to join the channel. If your project has the App certificate enabled, ensure that you pass the correct token. If it is not enabled, you do not need to set this parameter.\n\n* **Idle timeout**: If there are no users streaming in the channel after cloud recording starts, the recording automatically stops after reaching the maximum idle channel time `maxIdleTime`.\n\n* **Network or process failures**: If the cloud recording server is disconnected or the process was killed, calling `query`, `updateLayout`, or `stop` returns a 404. The fault handling center investigates and responds within 90 seconds. Retry the `query` method later to check if the service has recovered.\n";
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The following issues may cause the `query` method to return a `404` status code after successfully starting cloud recording with the `start` method:"
  }, {
    heading: undefined,
    content: "**Parameter issues**: After the cloud recording service starts, it verifies the parameters. If any parameter is incorrect, the recording may stop. Ensure that parameters like `transcodingConfig` are configured correctly. For details, see Set video profile."
  }, {
    heading: undefined,
    content: "**Incorrect cloud storage configuration**: Errors in third-party cloud storage details, such as an incorrect `accessKey` or `secretKey`, can prevent file uploads. If you have enabled the message notification service, you receive a `cloud_recording_error` event when storage configuration fails."
  }, {
    heading: undefined,
    content: "**Token issues**: If the `token` in `clientRequest` is invalid, cloud recording may fail to join the channel. If your project has the App certificate enabled, ensure that you pass the correct token. If it is not enabled, you do not need to set this parameter."
  }, {
    heading: undefined,
    content: "**Idle timeout**: If there are no users streaming in the channel after cloud recording starts, the recording automatically stops after reaching the maximum idle channel time `maxIdleTime`."
  }, {
    heading: undefined,
    content: "**Network or process failures**: If the cloud recording server is disconnected or the process was killed, calling `query`, `updateLayout`, or `stop` returns a 404. The fault handling center investigates and responds within 90 seconds. Retry the `query` method later to check if the service has recovered."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["The following issues may cause the ", _jsx(_components.code, {
        children: "query"
      }), " method to return a ", _jsx(_components.code, {
        children: "404"
      }), " status code after successfully starting cloud recording with the ", _jsx(_components.code, {
        children: "start"
      }), " method:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Parameter issues"
          }), ": After the cloud recording service starts, it verifies the parameters. If any parameter is incorrect, the recording may stop. Ensure that parameters like ", _jsx(_components.code, {
            children: "transcodingConfig"
          }), " are configured correctly. For details, see ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/build/customize-the-recording/recording-video-profile",
            children: "Set video profile"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Incorrect cloud storage configuration"
          }), ": Errors in third-party cloud storage details, such as an incorrect ", _jsx(_components.code, {
            children: "accessKey"
          }), " or ", _jsx(_components.code, {
            children: "secretKey"
          }), ", can prevent file uploads. If you have enabled the ", _jsx(_components.a, {
            href: "/en/introduction/console-setup",
            children: "message notification service"
          }), ", you receive a ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/reference/common-errors",
            children: _jsx(_components.code, {
              children: "cloud_recording_error"
            })
          }), " event when storage configuration fails."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Token issues"
          }), ": If the ", _jsx(_components.code, {
            children: "token"
          }), " in ", _jsx(_components.code, {
            children: "clientRequest"
          }), " is invalid, cloud recording may fail to join the channel. If your project has the App certificate enabled, ensure that you pass the correct token. If it is not enabled, you do not need to set this parameter."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Idle timeout"
          }), ": If there are no users streaming in the channel after cloud recording starts, the recording automatically stops after reaching the maximum idle channel time ", _jsx(_components.code, {
            children: "maxIdleTime"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Network or process failures"
          }), ": If the cloud recording server is disconnected or the process was killed, calling ", _jsx(_components.code, {
            children: "query"
          }), ", ", _jsx(_components.code, {
            children: "updateLayout"
          }), ", or ", _jsx(_components.code, {
            children: "stop"
          }), " returns a 404. The fault handling center investigates and responds within 90 seconds. Retry the ", _jsx(_components.code, {
            children: "query"
          }), " method later to check if the service has recovered."]
        }), `
`]
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
