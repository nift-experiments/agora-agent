import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Video profile settings",
  description: "Set video resolution, frame rate, and bitrate."
};
export let _markdown = `

When configuring the transcoded output media stream using the \`videoOption\`, Agora recommends using the default values. However, if you need custom settings, refer to the following table for guidance.

<CalloutContainer type="info">
  <CalloutDescription>
    If the bitrate you specify is outside the recommended range, the server automatically adjusts it to a reasonable value.
  </CalloutDescription>
</CalloutContainer>

### Recommended video profiles (Live streaming scenario) [#recommended-video-profiles-live-streaming-scenario]

| Resolution (width × height) | Frame rate (fps) | Bitrate (Kbps) |
| --------------------------- | ---------------- | -------------- |
| 160 × 120                   | 15               | 130            |
| 120 × 120                   | 15               | 100            |
| 320 × 180                   | 15               | 280            |
| 180 × 180                   | 15               | 200            |
| 240 × 180                   | 15               | 240            |
| 320 × 240                   | 15               | 400            |
| 240 × 240                   | 15               | 280            |
| 424 × 240                   | 15               | 440            |
| 640 × 360                   | 15               | 800            |
| 360 × 360                   | 15               | 520            |
| 640 × 360                   | 30               | 1200           |
| 360 × 360                   | 30               | 800            |
| 480 × 360                   | 15               | 640            |
| 480 × 360                   | 30               | 980            |
| 640 × 480                   | 15               | 1000           |
| 480 × 480                   | 15               | 800            |
| 640 × 480                   | 30               | 1500           |
| 480 × 480                   | 30               | 1200           |
| 848 × 480                   | 15               | 1220           |
| 848 × 480                   | 30               | 1860           |
| 640 × 480                   | 10               | 800            |
| 1280 × 720                  | 15               | 2260           |
| 1280 × 720                  | 30               | 3420           |
| 960 × 720                   | 15               | 1820           |
| 960 × 720                   | 30               | 2760           |
| 1920 × 1080                 | 15               | 4160           |
| 1920 × 1080                 | 30               | 6300           |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When configuring the transcoded output media stream using the `videoOption`, Agora recommends using the default values. However, if you need custom settings, refer to the following table for guidance."
  }, {
    heading: undefined,
    content: "If the bitrate you specify is outside the recommended range, the server automatically adjusts it to a reasonable value."
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "Resolution (width × height)"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "Frame rate (fps)"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "Bitrate (Kbps)"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "160 × 120"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "15"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "130"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "120 × 120"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "15"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "100"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "320 × 180"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "15"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "280"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "180 × 180"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "15"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "200"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "240 × 180"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "15"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "240"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "320 × 240"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "15"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "400"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "240 × 240"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "15"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "280"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "424 × 240"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "15"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "440"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "640 × 360"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "15"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "800"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "360 × 360"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "15"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "520"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "640 × 360"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "30"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "1200"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "360 × 360"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "30"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "800"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "480 × 360"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "15"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "640"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "480 × 360"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "30"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "980"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "640 × 480"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "15"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "1000"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "480 × 480"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "15"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "800"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "640 × 480"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "30"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "1500"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "480 × 480"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "30"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "1200"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "848 × 480"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "15"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "1220"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "848 × 480"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "30"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "1860"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "640 × 480"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "10"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "800"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "1280 × 720"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "15"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "2260"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "1280 × 720"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "30"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "3420"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "960 × 720"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "15"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "1820"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "960 × 720"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "30"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "2760"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "1920 × 1080"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "15"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "4160"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "1920 × 1080"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "30"
  }, {
    heading: "recommended-video-profiles-live-streaming-scenario",
    content: "6300"
  }],
  headings: [{
    id: "recommended-video-profiles-live-streaming-scenario",
    content: "Recommended video profiles (Live streaming scenario)"
  }]
};
export let toc = [{
  depth: 3,
  url: "#recommended-video-profiles-live-streaming-scenario",
  title: _jsx(_Fragment, {
    children: "Recommended video profiles (Live streaming scenario)"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h3: "h3",
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
    children: [_jsxs(_components.p, {
      children: ["When configuring the transcoded output media stream using the ", _jsx(_components.code, {
        children: "videoOption"
      }), ", Agora recommends using the default values. However, if you need custom settings, refer to the following table for guidance."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "If the bitrate you specify is outside the recommended range, the server automatically adjusts it to a reasonable value."
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "recommended-video-profiles-live-streaming-scenario",
      children: "Recommended video profiles (Live streaming scenario)"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Resolution (width × height)"
          }), _jsx(_components.th, {
            children: "Frame rate (fps)"
          }), _jsx(_components.th, {
            children: "Bitrate (Kbps)"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "160 × 120"
          }), _jsx(_components.td, {
            children: "15"
          }), _jsx(_components.td, {
            children: "130"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "120 × 120"
          }), _jsx(_components.td, {
            children: "15"
          }), _jsx(_components.td, {
            children: "100"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "320 × 180"
          }), _jsx(_components.td, {
            children: "15"
          }), _jsx(_components.td, {
            children: "280"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "180 × 180"
          }), _jsx(_components.td, {
            children: "15"
          }), _jsx(_components.td, {
            children: "200"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "240 × 180"
          }), _jsx(_components.td, {
            children: "15"
          }), _jsx(_components.td, {
            children: "240"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "320 × 240"
          }), _jsx(_components.td, {
            children: "15"
          }), _jsx(_components.td, {
            children: "400"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "240 × 240"
          }), _jsx(_components.td, {
            children: "15"
          }), _jsx(_components.td, {
            children: "280"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "424 × 240"
          }), _jsx(_components.td, {
            children: "15"
          }), _jsx(_components.td, {
            children: "440"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "640 × 360"
          }), _jsx(_components.td, {
            children: "15"
          }), _jsx(_components.td, {
            children: "800"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "360 × 360"
          }), _jsx(_components.td, {
            children: "15"
          }), _jsx(_components.td, {
            children: "520"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "640 × 360"
          }), _jsx(_components.td, {
            children: "30"
          }), _jsx(_components.td, {
            children: "1200"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "360 × 360"
          }), _jsx(_components.td, {
            children: "30"
          }), _jsx(_components.td, {
            children: "800"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "480 × 360"
          }), _jsx(_components.td, {
            children: "15"
          }), _jsx(_components.td, {
            children: "640"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "480 × 360"
          }), _jsx(_components.td, {
            children: "30"
          }), _jsx(_components.td, {
            children: "980"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "640 × 480"
          }), _jsx(_components.td, {
            children: "15"
          }), _jsx(_components.td, {
            children: "1000"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "480 × 480"
          }), _jsx(_components.td, {
            children: "15"
          }), _jsx(_components.td, {
            children: "800"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "640 × 480"
          }), _jsx(_components.td, {
            children: "30"
          }), _jsx(_components.td, {
            children: "1500"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "480 × 480"
          }), _jsx(_components.td, {
            children: "30"
          }), _jsx(_components.td, {
            children: "1200"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "848 × 480"
          }), _jsx(_components.td, {
            children: "15"
          }), _jsx(_components.td, {
            children: "1220"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "848 × 480"
          }), _jsx(_components.td, {
            children: "30"
          }), _jsx(_components.td, {
            children: "1860"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "640 × 480"
          }), _jsx(_components.td, {
            children: "10"
          }), _jsx(_components.td, {
            children: "800"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "1280 × 720"
          }), _jsx(_components.td, {
            children: "15"
          }), _jsx(_components.td, {
            children: "2260"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "1280 × 720"
          }), _jsx(_components.td, {
            children: "30"
          }), _jsx(_components.td, {
            children: "3420"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "960 × 720"
          }), _jsx(_components.td, {
            children: "15"
          }), _jsx(_components.td, {
            children: "1820"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "960 × 720"
          }), _jsx(_components.td, {
            children: "30"
          }), _jsx(_components.td, {
            children: "2760"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "1920 × 1080"
          }), _jsx(_components.td, {
            children: "15"
          }), _jsx(_components.td, {
            children: "4160"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "1920 × 1080"
          }), _jsx(_components.td, {
            children: "30"
          }), _jsx(_components.td, {
            children: "6300"
          })]
        })]
      })]
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
