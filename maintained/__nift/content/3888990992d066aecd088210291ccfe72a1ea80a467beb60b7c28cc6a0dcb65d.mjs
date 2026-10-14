import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why are there no recorded files in the cloud storage?"
};
export let _markdown = "\n\nIf you cannot find any recorded files in the cloud storage after a cloud recording session, check if any of the following situations occurred:\n\n* No user is sending a stream in the channel, and the recording times out.\n* The token has expired, or token authentication has failed.\n* When calling the [`acquire`](/en/realtime-media/cloud-recording/reference/restful-api#acquire) method to get the recording resource, you set the `uid` parameter that matches the ID of a user already in the channel. For example, suppose there are three users in the channel with user IDs `123`, `234`, and `345`. If you set `uid` to `123` when calling the `acquire` method, the recording fails.\n* The `transcodingConfig` settings in the [`start`](/en/realtime-media/cloud-recording/reference/restful-api#start) method do not follow the recommended settings, which causes the recording to fail. See [Media streaming output modes](/en/cloud-recording/reference/stream-mode) and [Set the video profile](/en/realtime-media/cloud-recording/build/customize-the-recording/recording-video-profile) before setting `transcodingConfig`.\n* Your cloud storage settings are incorrect. Check the following:\n  * `bucket`: The name of your cloud storage bucket, which was created in your cloud storage account.\n  * `accessKey`: The access key of your cloud storage account.\n  * `secretKey`: The secret key of your cloud storage account.\n\nIf you enable the Agora Message Notification Service, you receive the [`cloud_recording_error`](/en/realtime-media/cloud-recording/reference/common-errors) callback when the service detects that your cloud storage settings are incorrect.\n";
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "If you cannot find any recorded files in the cloud storage after a cloud recording session, check if any of the following situations occurred:"
  }, {
    heading: undefined,
    content: "No user is sending a stream in the channel, and the recording times out."
  }, {
    heading: undefined,
    content: "The token has expired, or token authentication has failed."
  }, {
    heading: undefined,
    content: "When calling the `acquire` method to get the recording resource, you set the `uid` parameter that matches the ID of a user already in the channel. For example, suppose there are three users in the channel with user IDs `123`, `234`, and `345`. If you set `uid` to `123` when calling the `acquire` method, the recording fails."
  }, {
    heading: undefined,
    content: "The `transcodingConfig` settings in the `start` method do not follow the recommended settings, which causes the recording to fail. See Media streaming output modes and Set the video profile before setting `transcodingConfig`."
  }, {
    heading: undefined,
    content: "Your cloud storage settings are incorrect. Check the following:"
  }, {
    heading: undefined,
    content: "`bucket`: The name of your cloud storage bucket, which was created in your cloud storage account."
  }, {
    heading: undefined,
    content: "`accessKey`: The access key of your cloud storage account."
  }, {
    heading: undefined,
    content: "`secretKey`: The secret key of your cloud storage account."
  }, {
    heading: undefined,
    content: "If you enable the Agora Message Notification Service, you receive the `cloud_recording_error` callback when the service detects that your cloud storage settings are incorrect."
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
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "If you cannot find any recorded files in the cloud storage after a cloud recording session, check if any of the following situations occurred:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "No user is sending a stream in the channel, and the recording times out."
      }), `
`, _jsx(_components.li, {
        children: "The token has expired, or token authentication has failed."
      }), `
`, _jsxs(_components.li, {
        children: ["When calling the ", _jsx(_components.a, {
          href: "/en/realtime-media/cloud-recording/reference/restful-api#acquire",
          children: _jsx(_components.code, {
            children: "acquire"
          })
        }), " method to get the recording resource, you set the ", _jsx(_components.code, {
          children: "uid"
        }), " parameter that matches the ID of a user already in the channel. For example, suppose there are three users in the channel with user IDs ", _jsx(_components.code, {
          children: "123"
        }), ", ", _jsx(_components.code, {
          children: "234"
        }), ", and ", _jsx(_components.code, {
          children: "345"
        }), ". If you set ", _jsx(_components.code, {
          children: "uid"
        }), " to ", _jsx(_components.code, {
          children: "123"
        }), " when calling the ", _jsx(_components.code, {
          children: "acquire"
        }), " method, the recording fails."]
      }), `
`, _jsxs(_components.li, {
        children: ["The ", _jsx(_components.code, {
          children: "transcodingConfig"
        }), " settings in the ", _jsx(_components.a, {
          href: "/en/realtime-media/cloud-recording/reference/restful-api#start",
          children: _jsx(_components.code, {
            children: "start"
          })
        }), " method do not follow the recommended settings, which causes the recording to fail. See ", _jsx(_components.a, {
          href: "/en/cloud-recording/reference/stream-mode",
          children: "Media streaming output modes"
        }), " and ", _jsx(_components.a, {
          href: "/en/realtime-media/cloud-recording/build/customize-the-recording/recording-video-profile",
          children: "Set the video profile"
        }), " before setting ", _jsx(_components.code, {
          children: "transcodingConfig"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Your cloud storage settings are incorrect. Check the following:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "bucket"
            }), ": The name of your cloud storage bucket, which was created in your cloud storage account."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "accessKey"
            }), ": The access key of your cloud storage account."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "secretKey"
            }), ": The secret key of your cloud storage account."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["If you enable the Agora Message Notification Service, you receive the ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/reference/common-errors",
        children: _jsx(_components.code, {
          children: "cloud_recording_error"
        })
      }), " callback when the service detects that your cloud storage settings are incorrect."]
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
