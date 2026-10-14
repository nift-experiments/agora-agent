import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Which media players can play the recorded files?"
};
export let _markdown = '\n\nYou get different recorded files in different recording modes.\n\n* In the individual recording mode, you get an audio file and a video file for each user. You need to [Use the Transcoding Script ](/en/on-premise-recording/develop/transcoding-scripts/) to merge these files into one MP4 file for playback.\n* In the composite recording mode, if you set `mixedVideoAudio` as `0`, you get an audio file and a video file for all the users. You also need to [Use the Transcoding Script ](/en/on-premise-recording/develop/transcoding-scripts/) to merge the files. We recommend you set `mixedVideoAudio` as `2` to mix the audio and video into one MP4 file.\n\nThe following table lists the media players that can play the recorded files after transcoding, and when `mixedVideoAudio` is set as `1` or `2`.\n\n<CalloutContainer type="info">\n  <CalloutDescription>\n    The recorded files after transcoding include the following files:\n\n    * The MP4 file merged from the recorded files in the individual recording mode.\n    * The MP4 file merged from the recorded files in the composite recording mode with `mixedVideoAudio`  set as `0`.\n  </CalloutDescription>\n</CalloutContainer>\n\n| Platform | Player/Browser          | After transcoding | mixedVideoAudio = 1 | mixedVideoAudio = 2 |\n| -------- | ----------------------- | ----------------- | ------------------- | ------------------- |\n| Linux    | VLC Media Player        | Supported         | Supported           | Supported           |\n| Linux    | FFplay                  | Supported         | Supported           | Supported           |\n| Linux    | Chrome                  | **Not Supported** | **Not Supported**   | **Not Supported**   |\n| Windows  | Media Player            | Supported         | Supported           | Supported           |\n| Windows  | KM Player               | Supported         | Supported           | Supported           |\n| Windows  | VLC Player              | Supported         | Supported           | Supported           |\n| Windows  | Chrome (49.0.2623+)     | Supported         | Supported           | Supported           |\n| macOS    | QuickTime Player        | Supported         | Supported           | Supported           |\n| macOS    | VLC                     | **Not Supported** | **Not Supported**   | **Not Supported**   |\n| macOS    | Movist                  | Supported         | Supported           | Supported           |\n| macOS    | MPlayerX                | Supported         | Supported           | Supported           |\n| macOS    | KMPlayer                | **Not Supported** | **Not Supported**   | **Not Supported**   |\n| macOS    | Chrome (47.0.2526.111+) | Supported         | Supported           | Supported           |\n| macOS    | Safari (11.0.3+)        | Supported         | Supported           | Supported           |\n| iOS      | Default Player          | Supported         | Supported           | Supported           |\n| iOS      | VLC for Mobile          | **Not Supported** | **Not Supported**   | Supported           |\n| iOS      | KMPlayer                | Supported         | Supported           | Supported           |\n| iOS      | Safari (9.0+)           | Supported         | Supported           | Supported           |\n| Android  | Default Player          | Supported         | Supported           | Supported           |\n| Android  | MXPlayer                | Supported         | Supported           | Supported           |\n| Android  | VLC for Android         | Supported         | Supported           | Supported           |\n| Android  | KMPlayer                | Supported         | Supported           | Supported           |\n| Android  | Chrome (49.0.2623+)     | Supported         | Supported           | Supported           |\n';
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "You get different recorded files in different recording modes."
  }, {
    heading: undefined,
    content: "In the individual recording mode, you get an audio file and a video file for each user. You need to Use the Transcoding Script  to merge these files into one MP4 file for playback."
  }, {
    heading: undefined,
    content: "In the composite recording mode, if you set `mixedVideoAudio` as `0`, you get an audio file and a video file for all the users. You also need to Use the Transcoding Script  to merge the files. We recommend you set `mixedVideoAudio` as `2` to mix the audio and video into one MP4 file."
  }, {
    heading: undefined,
    content: "The following table lists the media players that can play the recorded files after transcoding, and when `mixedVideoAudio` is set as `1` or `2`."
  }, {
    heading: undefined,
    content: "The recorded files after transcoding include the following files:"
  }, {
    heading: undefined,
    content: "The MP4 file merged from the recorded files in the individual recording mode."
  }, {
    heading: undefined,
    content: "The MP4 file merged from the recorded files in the composite recording mode with `mixedVideoAudio`  set as `0`."
  }, {
    heading: undefined,
    content: "Platform"
  }, {
    heading: undefined,
    content: "Player/Browser"
  }, {
    heading: undefined,
    content: "After transcoding"
  }, {
    heading: undefined,
    content: "mixedVideoAudio = 1"
  }, {
    heading: undefined,
    content: "mixedVideoAudio = 2"
  }, {
    heading: undefined,
    content: "Linux"
  }, {
    heading: undefined,
    content: "VLC Media Player"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Linux"
  }, {
    heading: undefined,
    content: "FFplay"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Linux"
  }, {
    heading: undefined,
    content: "Chrome"
  }, {
    heading: undefined,
    content: "**Not Supported**"
  }, {
    heading: undefined,
    content: "**Not Supported**"
  }, {
    heading: undefined,
    content: "**Not Supported**"
  }, {
    heading: undefined,
    content: "Windows"
  }, {
    heading: undefined,
    content: "Media Player"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Windows"
  }, {
    heading: undefined,
    content: "KM Player"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Windows"
  }, {
    heading: undefined,
    content: "VLC Player"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Windows"
  }, {
    heading: undefined,
    content: "Chrome (49.0.2623+)"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "macOS"
  }, {
    heading: undefined,
    content: "QuickTime Player"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "macOS"
  }, {
    heading: undefined,
    content: "VLC"
  }, {
    heading: undefined,
    content: "**Not Supported**"
  }, {
    heading: undefined,
    content: "**Not Supported**"
  }, {
    heading: undefined,
    content: "**Not Supported**"
  }, {
    heading: undefined,
    content: "macOS"
  }, {
    heading: undefined,
    content: "Movist"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "macOS"
  }, {
    heading: undefined,
    content: "MPlayerX"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "macOS"
  }, {
    heading: undefined,
    content: "KMPlayer"
  }, {
    heading: undefined,
    content: "**Not Supported**"
  }, {
    heading: undefined,
    content: "**Not Supported**"
  }, {
    heading: undefined,
    content: "**Not Supported**"
  }, {
    heading: undefined,
    content: "macOS"
  }, {
    heading: undefined,
    content: "Chrome (47.0.2526.111+)"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "macOS"
  }, {
    heading: undefined,
    content: "Safari (11.0.3+)"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "iOS"
  }, {
    heading: undefined,
    content: "Default Player"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "iOS"
  }, {
    heading: undefined,
    content: "VLC for Mobile"
  }, {
    heading: undefined,
    content: "**Not Supported**"
  }, {
    heading: undefined,
    content: "**Not Supported**"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "iOS"
  }, {
    heading: undefined,
    content: "KMPlayer"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "iOS"
  }, {
    heading: undefined,
    content: "Safari (9.0+)"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Android"
  }, {
    heading: undefined,
    content: "Default Player"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Android"
  }, {
    heading: undefined,
    content: "MXPlayer"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Android"
  }, {
    heading: undefined,
    content: "VLC for Android"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Android"
  }, {
    heading: undefined,
    content: "KMPlayer"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Android"
  }, {
    heading: undefined,
    content: "Chrome (49.0.2623+)"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
  }, {
    heading: undefined,
    content: "Supported"
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
    children: [_jsx(_components.p, {
      children: "You get different recorded files in different recording modes."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["In the individual recording mode, you get an audio file and a video file for each user. You need to ", _jsx(_components.a, {
          href: "/en/on-premise-recording/develop/transcoding-scripts/",
          children: "Use the Transcoding Script "
        }), " to merge these files into one MP4 file for playback."]
      }), `
`, _jsxs(_components.li, {
        children: ["In the composite recording mode, if you set ", _jsx(_components.code, {
          children: "mixedVideoAudio"
        }), " as ", _jsx(_components.code, {
          children: "0"
        }), ", you get an audio file and a video file for all the users. You also need to ", _jsx(_components.a, {
          href: "/en/on-premise-recording/develop/transcoding-scripts/",
          children: "Use the Transcoding Script "
        }), " to merge the files. We recommend you set ", _jsx(_components.code, {
          children: "mixedVideoAudio"
        }), " as ", _jsx(_components.code, {
          children: "2"
        }), " to mix the audio and video into one MP4 file."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["The following table lists the media players that can play the recorded files after transcoding, and when ", _jsx(_components.code, {
        children: "mixedVideoAudio"
      }), " is set as ", _jsx(_components.code, {
        children: "1"
      }), " or ", _jsx(_components.code, {
        children: "2"
      }), "."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsxs(CalloutDescription, {
        children: [_jsx(_components.p, {
          children: "The recorded files after transcoding include the following files:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "The MP4 file merged from the recorded files in the individual recording mode."
          }), `
`, _jsxs(_components.li, {
            children: ["The MP4 file merged from the recorded files in the composite recording mode with ", _jsx(_components.code, {
              children: "mixedVideoAudio"
            }), "  set as ", _jsx(_components.code, {
              children: "0"
            }), "."]
          }), `
`]
        })]
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Platform"
          }), _jsx(_components.th, {
            children: "Player/Browser"
          }), _jsx(_components.th, {
            children: "After transcoding"
          }), _jsx(_components.th, {
            children: "mixedVideoAudio = 1"
          }), _jsx(_components.th, {
            children: "mixedVideoAudio = 2"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Linux"
          }), _jsx(_components.td, {
            children: "VLC Media Player"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Linux"
          }), _jsx(_components.td, {
            children: "FFplay"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Linux"
          }), _jsx(_components.td, {
            children: "Chrome"
          }), _jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Not Supported"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Not Supported"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Not Supported"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Windows"
          }), _jsx(_components.td, {
            children: "Media Player"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Windows"
          }), _jsx(_components.td, {
            children: "KM Player"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Windows"
          }), _jsx(_components.td, {
            children: "VLC Player"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Windows"
          }), _jsx(_components.td, {
            children: "Chrome (49.0.2623+)"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "macOS"
          }), _jsx(_components.td, {
            children: "QuickTime Player"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "macOS"
          }), _jsx(_components.td, {
            children: "VLC"
          }), _jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Not Supported"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Not Supported"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Not Supported"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "macOS"
          }), _jsx(_components.td, {
            children: "Movist"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "macOS"
          }), _jsx(_components.td, {
            children: "MPlayerX"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "macOS"
          }), _jsx(_components.td, {
            children: "KMPlayer"
          }), _jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Not Supported"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Not Supported"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Not Supported"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "macOS"
          }), _jsx(_components.td, {
            children: "Chrome (47.0.2526.111+)"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "macOS"
          }), _jsx(_components.td, {
            children: "Safari (11.0.3+)"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "iOS"
          }), _jsx(_components.td, {
            children: "Default Player"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "iOS"
          }), _jsx(_components.td, {
            children: "VLC for Mobile"
          }), _jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Not Supported"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.strong, {
              children: "Not Supported"
            })
          }), _jsx(_components.td, {
            children: "Supported"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "iOS"
          }), _jsx(_components.td, {
            children: "KMPlayer"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "iOS"
          }), _jsx(_components.td, {
            children: "Safari (9.0+)"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Android"
          }), _jsx(_components.td, {
            children: "Default Player"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Android"
          }), _jsx(_components.td, {
            children: "MXPlayer"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Android"
          }), _jsx(_components.td, {
            children: "VLC for Android"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Android"
          }), _jsx(_components.td, {
            children: "KMPlayer"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Android"
          }), _jsx(_components.td, {
            children: "Chrome (49.0.2623+)"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
          }), _jsx(_components.td, {
            children: "Supported"
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
