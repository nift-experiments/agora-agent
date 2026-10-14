import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Set up subscription lists",
  description: "Create a whitelist or blacklist for audio and video subscriptions."
};
export let _markdown = `

By default, Agora Cloud Recording subscribes to all published audio and video streams in a channel. This feature enables you to create a whitelist or blacklist for audio and video subscriptions. You can also update the subscription lists during a cloud recording.

## Implementation [#implementation]

When the recording starts, set the parameters in [\`start\`](/en/api-reference/api-ref/cloud-recording#start) to create subscription lists. During the recording, set the \`streamSubscribe\` parameter in [\`update\`](/en/api-reference/api-ref/cloud-recording#update) to update the subscription lists.

If you set up a subscription list for audio, but not for video, then Agora Cloud Recording will not subscribe to any video streams. If you set up a subscription list for video, but not for audio, then Agora Cloud Recording will not subscribe to any audio streams.

### Set up the subscription list for audio streams [#set-up-the-subscription-list-for-audio-streams]

Use either of the following parameters to set up a subscription list for audio:

* \`subscribeAudioUids\`: Specify the users whose audio streams you want to subscribe to. The setting creates a whitelist for audio subscription.
* \`unSubscribeAudioUids\`: Specify the users whose audio streams you do not want to subscribe to. The setting creates a blacklist for audio subscription.

### Set up the subscription list for video streams [#set-up-the-subscription-list-for-video-streams]

Use either of the following parameters to set up a subscription list for video:

* \`subscribeVideoUids\`: Specify the users whose video streams you want to subscribe to. The setting creates a whitelist for video subscription.
* \`unSubscribeVideoUids\`: Specify the users whose video streams you do not want to subscribe to. The setting creates a blacklist for video subscription.

## Example [#example]

Suppose that four users, whose user IDs are 111, 222, 333, and 444, are in a channel when the recording begins, and two more users with unknown user IDs join the channel during the recording. The following lists the typical use-cases and recommended settings:

| Use-cases                                                                                | Recommended settings                                                                                                                                                                                              |
| :--------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Subscribe to all audio and video streams.                                                | You do not need to set up a subscription list.                                                                                                                                                                    |
| Subscribe to all audio streams and the video streams of 111 and 222.                     | \`subscribeAudioUids: ["#allstream#"]\` \`subscribeVideoUids: ["111","222"]\`                                                                                                                                         |
| Subscribe to all audio streams and the video streams of all user IDs except 111 and 222. | \`subscribeAudioUids: ["#allstream#"]\` \`unSubscribeVideoUids: ["111","222"]\`The recording service records the audio streams of all user IDs and the video streams of 333, 444, and the other two unknown user IDs. |
| Subscribe to all audio streams but no video streams.                                     | \`subscribeAudioUids: ["#allstream#"]\` Setting \`streamType\` to \`0\` leads to the same result.                                                                                                                       |
| Subscribe to the audio streams of all user IDs except 222 and the video stream of 111.   | \`unSubscribeAudioUids: ["222"]\` \`subscribeVideoUids: ["111"]\`The recording service records the audio streams of 111, 333, 444, and the other two unknown user IDs, and the video stream of 111.                   |

## Considerations [#considerations]

* Use \`["#allstream#"]\` to specify all user IDs in a channel.
* When \`streamTypes\` in \`recordingConfig\` is set to \`0\` (audio only), you cannot set \`subscribeVideoUids\` or \`unSubscribeVideoUids\`; when \`streamTypes\` in \`recordingConfig\` is set to \`1\` (video only), you cannot set \`subscribeAudioUids\` or \`unSubscribeAudioUids\`.
* The recording service only records the first 17 user IDs that join a channel. If a subscribed user ID leaves, then the recording service automatically subscribes to the 18th user ID that joined the channel.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "By default, Agora Cloud Recording subscribes to all published audio and video streams in a channel. This feature enables you to create a whitelist or blacklist for audio and video subscriptions. You can also update the subscription lists during a cloud recording."
  }, {
    heading: "implementation",
    content: "When the recording starts, set the parameters in `start` to create subscription lists. During the recording, set the `streamSubscribe` parameter in `update` to update the subscription lists."
  }, {
    heading: "implementation",
    content: "If you set up a subscription list for audio, but not for video, then Agora Cloud Recording will not subscribe to any video streams. If you set up a subscription list for video, but not for audio, then Agora Cloud Recording will not subscribe to any audio streams."
  }, {
    heading: "set-up-the-subscription-list-for-audio-streams",
    content: "Use either of the following parameters to set up a subscription list for audio:"
  }, {
    heading: "set-up-the-subscription-list-for-audio-streams",
    content: "`subscribeAudioUids`: Specify the users whose audio streams you want to subscribe to. The setting creates a whitelist for audio subscription."
  }, {
    heading: "set-up-the-subscription-list-for-audio-streams",
    content: "`unSubscribeAudioUids`: Specify the users whose audio streams you do not want to subscribe to. The setting creates a blacklist for audio subscription."
  }, {
    heading: "set-up-the-subscription-list-for-video-streams",
    content: "Use either of the following parameters to set up a subscription list for video:"
  }, {
    heading: "set-up-the-subscription-list-for-video-streams",
    content: "`subscribeVideoUids`: Specify the users whose video streams you want to subscribe to. The setting creates a whitelist for video subscription."
  }, {
    heading: "set-up-the-subscription-list-for-video-streams",
    content: "`unSubscribeVideoUids`: Specify the users whose video streams you do not want to subscribe to. The setting creates a blacklist for video subscription."
  }, {
    heading: "example",
    content: "Suppose that four users, whose user IDs are 111, 222, 333, and 444, are in a channel when the recording begins, and two more users with unknown user IDs join the channel during the recording. The following lists the typical use-cases and recommended settings:"
  }, {
    heading: "example",
    content: "Use-cases"
  }, {
    heading: "example",
    content: "Recommended settings"
  }, {
    heading: "example",
    content: "Subscribe to all audio and video streams."
  }, {
    heading: "example",
    content: "You do not need to set up a subscription list."
  }, {
    heading: "example",
    content: "Subscribe to all audio streams and the video streams of 111 and 222."
  }, {
    heading: "example",
    content: '`subscribeAudioUids: ["#allstream#"]` `subscribeVideoUids: ["111","222"]`'
  }, {
    heading: "example",
    content: "Subscribe to all audio streams and the video streams of all user IDs except 111 and 222."
  }, {
    heading: "example",
    content: '`subscribeAudioUids: ["#allstream#"]` `unSubscribeVideoUids: ["111","222"]`The recording service records the audio streams of all user IDs and the video streams of 333, 444, and the other two unknown user IDs.'
  }, {
    heading: "example",
    content: "Subscribe to all audio streams but no video streams."
  }, {
    heading: "example",
    content: '`subscribeAudioUids: ["#allstream#"]` Setting `streamType` to `0` leads to the same result.'
  }, {
    heading: "example",
    content: "Subscribe to the audio streams of all user IDs except 222 and the video stream of 111."
  }, {
    heading: "example",
    content: '`unSubscribeAudioUids: ["222"]` `subscribeVideoUids: ["111"]`The recording service records the audio streams of 111, 333, 444, and the other two unknown user IDs, and the video stream of 111.'
  }, {
    heading: "considerations",
    content: 'Use `["#allstream#"]` to specify all user IDs in a channel.'
  }, {
    heading: "considerations",
    content: "When `streamTypes` in `recordingConfig` is set to `0` (audio only), you cannot set `subscribeVideoUids` or `unSubscribeVideoUids`; when `streamTypes` in `recordingConfig` is set to `1` (video only), you cannot set `subscribeAudioUids` or `unSubscribeAudioUids`."
  }, {
    heading: "considerations",
    content: "The recording service only records the first 17 user IDs that join a channel. If a subscribed user ID leaves, then the recording service automatically subscribes to the 18th user ID that joined the channel."
  }],
  headings: [{
    id: "implementation",
    content: "Implementation"
  }, {
    id: "set-up-the-subscription-list-for-audio-streams",
    content: "Set up the subscription list for audio streams"
  }, {
    id: "set-up-the-subscription-list-for-video-streams",
    content: "Set up the subscription list for video streams"
  }, {
    id: "example",
    content: "Example"
  }, {
    id: "considerations",
    content: "Considerations"
  }]
};
export let toc = [{
  depth: 2,
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#set-up-the-subscription-list-for-audio-streams",
  title: _jsx(_Fragment, {
    children: "Set up the subscription list for audio streams"
  })
}, {
  depth: 3,
  url: "#set-up-the-subscription-list-for-video-streams",
  title: _jsx(_Fragment, {
    children: "Set up the subscription list for video streams"
  })
}, {
  depth: 2,
  url: "#example",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 2,
  url: "#considerations",
  title: _jsx(_Fragment, {
    children: "Considerations"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
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
      children: "By default, Agora Cloud Recording subscribes to all published audio and video streams in a channel. This feature enables you to create a whitelist or blacklist for audio and video subscriptions. You can also update the subscription lists during a cloud recording."
    }), `
`, _jsx(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), `
`, _jsxs(_components.p, {
      children: ["When the recording starts, set the parameters in ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#start",
        children: _jsx(_components.code, {
          children: "start"
        })
      }), " to create subscription lists. During the recording, set the ", _jsx(_components.code, {
        children: "streamSubscribe"
      }), " parameter in ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#update",
        children: _jsx(_components.code, {
          children: "update"
        })
      }), " to update the subscription lists."]
    }), `
`, _jsx(_components.p, {
      children: "If you set up a subscription list for audio, but not for video, then Agora Cloud Recording will not subscribe to any video streams. If you set up a subscription list for video, but not for audio, then Agora Cloud Recording will not subscribe to any audio streams."
    }), `
`, _jsx(_components.h3, {
      id: "set-up-the-subscription-list-for-audio-streams",
      children: "Set up the subscription list for audio streams"
    }), `
`, _jsx(_components.p, {
      children: "Use either of the following parameters to set up a subscription list for audio:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "subscribeAudioUids"
        }), ": Specify the users whose audio streams you want to subscribe to. The setting creates a whitelist for audio subscription."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "unSubscribeAudioUids"
        }), ": Specify the users whose audio streams you do not want to subscribe to. The setting creates a blacklist for audio subscription."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "set-up-the-subscription-list-for-video-streams",
      children: "Set up the subscription list for video streams"
    }), `
`, _jsx(_components.p, {
      children: "Use either of the following parameters to set up a subscription list for video:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "subscribeVideoUids"
        }), ": Specify the users whose video streams you want to subscribe to. The setting creates a whitelist for video subscription."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "unSubscribeVideoUids"
        }), ": Specify the users whose video streams you do not want to subscribe to. The setting creates a blacklist for video subscription."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "example",
      children: "Example"
    }), `
`, _jsx(_components.p, {
      children: "Suppose that four users, whose user IDs are 111, 222, 333, and 444, are in a channel when the recording begins, and two more users with unknown user IDs join the channel during the recording. The following lists the typical use-cases and recommended settings:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Use-cases"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Recommended settings"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Subscribe to all audio and video streams."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "You do not need to set up a subscription list."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Subscribe to all audio streams and the video streams of 111 and 222."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: 'subscribeAudioUids: ["#allstream#"]'
            }), " ", _jsx(_components.code, {
              children: 'subscribeVideoUids: ["111","222"]'
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Subscribe to all audio streams and the video streams of all user IDs except 111 and 222."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: 'subscribeAudioUids: ["#allstream#"]'
            }), " ", _jsx(_components.code, {
              children: 'unSubscribeVideoUids: ["111","222"]'
            }), "The recording service records the audio streams of all user IDs and the video streams of 333, 444, and the other two unknown user IDs."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Subscribe to all audio streams but no video streams."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: 'subscribeAudioUids: ["#allstream#"]'
            }), " Setting ", _jsx(_components.code, {
              children: "streamType"
            }), " to ", _jsx(_components.code, {
              children: "0"
            }), " leads to the same result."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Subscribe to the audio streams of all user IDs except 222 and the video stream of 111."
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: 'unSubscribeAudioUids: ["222"]'
            }), " ", _jsx(_components.code, {
              children: 'subscribeVideoUids: ["111"]'
            }), "The recording service records the audio streams of 111, 333, 444, and the other two unknown user IDs, and the video stream of 111."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "considerations",
      children: "Considerations"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Use ", _jsx(_components.code, {
          children: '["#allstream#"]'
        }), " to specify all user IDs in a channel."]
      }), `
`, _jsxs(_components.li, {
        children: ["When ", _jsx(_components.code, {
          children: "streamTypes"
        }), " in ", _jsx(_components.code, {
          children: "recordingConfig"
        }), " is set to ", _jsx(_components.code, {
          children: "0"
        }), " (audio only), you cannot set ", _jsx(_components.code, {
          children: "subscribeVideoUids"
        }), " or ", _jsx(_components.code, {
          children: "unSubscribeVideoUids"
        }), "; when ", _jsx(_components.code, {
          children: "streamTypes"
        }), " in ", _jsx(_components.code, {
          children: "recordingConfig"
        }), " is set to ", _jsx(_components.code, {
          children: "1"
        }), " (video only), you cannot set ", _jsx(_components.code, {
          children: "subscribeAudioUids"
        }), " or ", _jsx(_components.code, {
          children: "unSubscribeAudioUids"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "The recording service only records the first 17 user IDs that join a channel. If a subscribed user ID leaves, then the recording service automatically subscribes to the 18th user ID that joined the channel."
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
