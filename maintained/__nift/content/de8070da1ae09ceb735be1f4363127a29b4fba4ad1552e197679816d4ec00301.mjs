import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "What are the differences between the COMMUNICATION and LIVE_BROADCASTING profiles?"
};
export let _markdown = `

<CalloutContainer type="info">
  <CalloutDescription>
    This article applies to the Agora RTC SDK Native SDK only.
  </CalloutDescription>
</CalloutContainer>

To apply optimization algorithms for different real-time engagement scenarios, Agora provides a \`setChannelProfile\` method for the RTC SDK channel. You can use this method to set the channel profile as either \`CHANNEL_PROFILE_COMMUNICATION\` or \`CHANNEL_PROFILE_LIVE_BROADCASTING\`.

These two channel profiles differ in the following aspects:

* User role setting.
* The default audio route.
* The default video encoding bitrate.

## User role [#user-role]

An RTC SDK channel differentiates users by roles. Once a user joins a channel, the user can be either of the following:

* A host, who can both publish and subscribe to streams.
* An audience member, who can subscribe to streams only.

The default user role in different channel profiles are different:

* \`CHANNEL_PROFILE_COMMUNICATION\`: Host. You cannot change the user role.
* \`CHANNEL_PROFILE_LIVE_BROADCASTING\`: Audience. You can call \`setClientRole\` to change the user role.

<CalloutContainer type="info">
  <CalloutDescription>
    In scenarios involving co-host token authentication, if a user joins a channel with the token of a subscriber, calling \`setClientRole\` alone does not take effect. For details, see [How can I use co-host token authentication](/en/api-reference/faq/integration/token_cohost).
  </CalloutDescription>
</CalloutContainer>

## Audio route [#audio-route]

The default audio route refers to the route that audio data takes within a device, such as the speakerphone or earpiece of a mobile phone.

On Android and iOS, Agora uses different default audio routes depending on the channel profile:

* \`CHANNEL_PROFILE_COMMUNICATION\`
  * In a voice call, the default audio route is the earpiece.
  * In a video call, the default audio route is the speakerphone.
* \`CHANNEL_PROFILE_LIVE_BROADCASTING\`: The default audio route is the speakerphone.

## Video encoding bitrate [#video-encoding-bitrate]

The \`bitrate\` member in the \`setVideoEncoderConfiguration\` method sets the video encoding bitrate. Given the same resolution and frame rate, when you set \`bitrate\` as the default value, \`STANDARD_BITRATE(0)\`, the value of the encoding bitrate in the \`LIVE_BROADCASTING\` profile doubles that in the \`COMMUNICATION\` profile.

In the following table, the base bitrate applies to the \`COMMUNICATION\` profile, while the live bitrate applies to \`LIVE_BROADCASTING\`.

| Resolution (px) | Frame rate (fps) | Base bitrate (Kbps) | Live bitrate (Kbps) |
| --------------- | ---------------- | ------------------- | ------------------- |
| 160 × 120       | 15               | 65                  | 130                 |
| 320 × 180       | 15               | 140                 | 280                 |
| 640 × 360       | 30               | 600                 | 1,200               |
| 848 × 480       | 30               | 930                 | 1,860               |

The values of bitrate in the table above are for reference only. For the detailed video profile table, see [API Reference](https://api-ref.agora.io/en/video-sdk/android/4.x/API/rtc_api_overview.html).

## Recommended settings [#recommended-settings]

Based on the differences above, Agora recommends setting the channel profile according to your scenario:

* In scenarios such as one-to-one call or group call, set the channel profile as \`CHANNEL_PROFILE_COMMUNICATION\`.
* In scenarios such as chatrooms, small classes, lecture halls, or interactive video streaming, set the channel profile as \`CHANNEL_PROFILE_LIVE_BROADCASTING\`.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This article applies to the Agora RTC SDK Native SDK only."
  }, {
    heading: undefined,
    content: "To apply optimization algorithms for different real-time engagement scenarios, Agora provides a `setChannelProfile` method for the RTC SDK channel. You can use this method to set the channel profile as either `CHANNEL_PROFILE_COMMUNICATION` or `CHANNEL_PROFILE_LIVE_BROADCASTING`."
  }, {
    heading: undefined,
    content: "These two channel profiles differ in the following aspects:"
  }, {
    heading: undefined,
    content: "User role setting."
  }, {
    heading: undefined,
    content: "The default audio route."
  }, {
    heading: undefined,
    content: "The default video encoding bitrate."
  }, {
    heading: "user-role",
    content: "An RTC SDK channel differentiates users by roles. Once a user joins a channel, the user can be either of the following:"
  }, {
    heading: "user-role",
    content: "A host, who can both publish and subscribe to streams."
  }, {
    heading: "user-role",
    content: "An audience member, who can subscribe to streams only."
  }, {
    heading: "user-role",
    content: "The default user role in different channel profiles are different:"
  }, {
    heading: "user-role",
    content: "`CHANNEL_PROFILE_COMMUNICATION`: Host. You cannot change the user role."
  }, {
    heading: "user-role",
    content: "`CHANNEL_PROFILE_LIVE_BROADCASTING`: Audience. You can call `setClientRole` to change the user role."
  }, {
    heading: "user-role",
    content: "In scenarios involving co-host token authentication, if a user joins a channel with the token of a subscriber, calling `setClientRole` alone does not take effect. For details, see How can I use co-host token authentication."
  }, {
    heading: "audio-route",
    content: "The default audio route refers to the route that audio data takes within a device, such as the speakerphone or earpiece of a mobile phone."
  }, {
    heading: "audio-route",
    content: "On Android and iOS, Agora uses different default audio routes depending on the channel profile:"
  }, {
    heading: "audio-route",
    content: "`CHANNEL_PROFILE_COMMUNICATION`"
  }, {
    heading: "audio-route",
    content: "In a voice call, the default audio route is the earpiece."
  }, {
    heading: "audio-route",
    content: "In a video call, the default audio route is the speakerphone."
  }, {
    heading: "audio-route",
    content: "`CHANNEL_PROFILE_LIVE_BROADCASTING`: The default audio route is the speakerphone."
  }, {
    heading: "video-encoding-bitrate",
    content: "The `bitrate` member in the `setVideoEncoderConfiguration` method sets the video encoding bitrate. Given the same resolution and frame rate, when you set `bitrate` as the default value, `STANDARD_BITRATE(0)`, the value of the encoding bitrate in the `LIVE_BROADCASTING` profile doubles that in the `COMMUNICATION` profile."
  }, {
    heading: "video-encoding-bitrate",
    content: "In the following table, the base bitrate applies to the `COMMUNICATION` profile, while the live bitrate applies to `LIVE_BROADCASTING`."
  }, {
    heading: "video-encoding-bitrate",
    content: "Resolution (px)"
  }, {
    heading: "video-encoding-bitrate",
    content: "Frame rate (fps)"
  }, {
    heading: "video-encoding-bitrate",
    content: "Base bitrate (Kbps)"
  }, {
    heading: "video-encoding-bitrate",
    content: "Live bitrate (Kbps)"
  }, {
    heading: "video-encoding-bitrate",
    content: "160 × 120"
  }, {
    heading: "video-encoding-bitrate",
    content: "15"
  }, {
    heading: "video-encoding-bitrate",
    content: "65"
  }, {
    heading: "video-encoding-bitrate",
    content: "130"
  }, {
    heading: "video-encoding-bitrate",
    content: "320 × 180"
  }, {
    heading: "video-encoding-bitrate",
    content: "15"
  }, {
    heading: "video-encoding-bitrate",
    content: "140"
  }, {
    heading: "video-encoding-bitrate",
    content: "280"
  }, {
    heading: "video-encoding-bitrate",
    content: "640 × 360"
  }, {
    heading: "video-encoding-bitrate",
    content: "30"
  }, {
    heading: "video-encoding-bitrate",
    content: "600"
  }, {
    heading: "video-encoding-bitrate",
    content: "1,200"
  }, {
    heading: "video-encoding-bitrate",
    content: "848 × 480"
  }, {
    heading: "video-encoding-bitrate",
    content: "30"
  }, {
    heading: "video-encoding-bitrate",
    content: "930"
  }, {
    heading: "video-encoding-bitrate",
    content: "1,860"
  }, {
    heading: "video-encoding-bitrate",
    content: "The values of bitrate in the table above are for reference only. For the detailed video profile table, see API Reference."
  }, {
    heading: "recommended-settings",
    content: "Based on the differences above, Agora recommends setting the channel profile according to your scenario:"
  }, {
    heading: "recommended-settings",
    content: "In scenarios such as one-to-one call or group call, set the channel profile as `CHANNEL_PROFILE_COMMUNICATION`."
  }, {
    heading: "recommended-settings",
    content: "In scenarios such as chatrooms, small classes, lecture halls, or interactive video streaming, set the channel profile as `CHANNEL_PROFILE_LIVE_BROADCASTING`."
  }],
  headings: [{
    id: "user-role",
    content: "User role"
  }, {
    id: "audio-route",
    content: "Audio route"
  }, {
    id: "video-encoding-bitrate",
    content: "Video encoding bitrate"
  }, {
    id: "recommended-settings",
    content: "Recommended settings"
  }]
};
export let toc = [{
  depth: 2,
  url: "#user-role",
  title: _jsx(_Fragment, {
    children: "User role"
  })
}, {
  depth: 2,
  url: "#audio-route",
  title: _jsx(_Fragment, {
    children: "Audio route"
  })
}, {
  depth: 2,
  url: "#video-encoding-bitrate",
  title: _jsx(_Fragment, {
    children: "Video encoding bitrate"
  })
}, {
  depth: 2,
  url: "#recommended-settings",
  title: _jsx(_Fragment, {
    children: "Recommended settings"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
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
          children: "This article applies to the Agora RTC SDK Native SDK only."
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["To apply optimization algorithms for different real-time engagement scenarios, Agora provides a ", _jsx(_components.code, {
        children: "setChannelProfile"
      }), " method for the RTC SDK channel. You can use this method to set the channel profile as either ", _jsx(_components.code, {
        children: "CHANNEL_PROFILE_COMMUNICATION"
      }), " or ", _jsx(_components.code, {
        children: "CHANNEL_PROFILE_LIVE_BROADCASTING"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "These two channel profiles differ in the following aspects:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "User role setting."
      }), `
`, _jsx(_components.li, {
        children: "The default audio route."
      }), `
`, _jsx(_components.li, {
        children: "The default video encoding bitrate."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "user-role",
      children: "User role"
    }), `
`, _jsx(_components.p, {
      children: "An RTC SDK channel differentiates users by roles. Once a user joins a channel, the user can be either of the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "A host, who can both publish and subscribe to streams."
      }), `
`, _jsx(_components.li, {
        children: "An audience member, who can subscribe to streams only."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The default user role in different channel profiles are different:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "CHANNEL_PROFILE_COMMUNICATION"
        }), ": Host. You cannot change the user role."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "CHANNEL_PROFILE_LIVE_BROADCASTING"
        }), ": Audience. You can call ", _jsx(_components.code, {
          children: "setClientRole"
        }), " to change the user role."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["In scenarios involving co-host token authentication, if a user joins a channel with the token of a subscriber, calling ", _jsx(_components.code, {
            children: "setClientRole"
          }), " alone does not take effect. For details, see ", _jsx(_components.a, {
            href: "/en/api-reference/faq/integration/token_cohost",
            children: "How can I use co-host token authentication"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "audio-route",
      children: "Audio route"
    }), `
`, _jsx(_components.p, {
      children: "The default audio route refers to the route that audio data takes within a device, such as the speakerphone or earpiece of a mobile phone."
    }), `
`, _jsx(_components.p, {
      children: "On Android and iOS, Agora uses different default audio routes depending on the channel profile:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "CHANNEL_PROFILE_COMMUNICATION"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "In a voice call, the default audio route is the earpiece."
          }), `
`, _jsx(_components.li, {
            children: "In a video call, the default audio route is the speakerphone."
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "CHANNEL_PROFILE_LIVE_BROADCASTING"
        }), ": The default audio route is the speakerphone."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "video-encoding-bitrate",
      children: "Video encoding bitrate"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "bitrate"
      }), " member in the ", _jsx(_components.code, {
        children: "setVideoEncoderConfiguration"
      }), " method sets the video encoding bitrate. Given the same resolution and frame rate, when you set ", _jsx(_components.code, {
        children: "bitrate"
      }), " as the default value, ", _jsx(_components.code, {
        children: "STANDARD_BITRATE(0)"
      }), ", the value of the encoding bitrate in the ", _jsx(_components.code, {
        children: "LIVE_BROADCASTING"
      }), " profile doubles that in the ", _jsx(_components.code, {
        children: "COMMUNICATION"
      }), " profile."]
    }), `
`, _jsxs(_components.p, {
      children: ["In the following table, the base bitrate applies to the ", _jsx(_components.code, {
        children: "COMMUNICATION"
      }), " profile, while the live bitrate applies to ", _jsx(_components.code, {
        children: "LIVE_BROADCASTING"
      }), "."]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Resolution (px)"
          }), _jsx(_components.th, {
            children: "Frame rate (fps)"
          }), _jsx(_components.th, {
            children: "Base bitrate (Kbps)"
          }), _jsx(_components.th, {
            children: "Live bitrate (Kbps)"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "160 × 120"
          }), _jsx(_components.td, {
            children: "15"
          }), _jsx(_components.td, {
            children: "65"
          }), _jsx(_components.td, {
            children: "130"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "320 × 180"
          }), _jsx(_components.td, {
            children: "15"
          }), _jsx(_components.td, {
            children: "140"
          }), _jsx(_components.td, {
            children: "280"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "640 × 360"
          }), _jsx(_components.td, {
            children: "30"
          }), _jsx(_components.td, {
            children: "600"
          }), _jsx(_components.td, {
            children: "1,200"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "848 × 480"
          }), _jsx(_components.td, {
            children: "30"
          }), _jsx(_components.td, {
            children: "930"
          }), _jsx(_components.td, {
            children: "1,860"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["The values of bitrate in the table above are for reference only. For the detailed video profile table, see ", _jsx(_components.a, {
        href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/rtc_api_overview.html",
        children: "API Reference"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "recommended-settings",
      children: "Recommended settings"
    }), `
`, _jsx(_components.p, {
      children: "Based on the differences above, Agora recommends setting the channel profile according to your scenario:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["In scenarios such as one-to-one call or group call, set the channel profile as ", _jsx(_components.code, {
          children: "CHANNEL_PROFILE_COMMUNICATION"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["In scenarios such as chatrooms, small classes, lecture halls, or interactive video streaming, set the channel profile as ", _jsx(_components.code, {
          children: "CHANNEL_PROFILE_LIVE_BROADCASTING"
        }), "."]
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
