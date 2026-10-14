import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "MediaPlayerSource",
  description: "用于配置要播放的媒体文件及其播放场景。"
};
export let _markdown = `

<a id="class_mediasource__prototype" />

\`\`\`java
public class MediaPlayerSource {
  String url;
  String uri;
  long startPos;
  boolean autoPlay;
  boolean enableCache;
  boolean enableMultiAudioTrack;
  Boolean isAgoraSource;
  Boolean isLiveSource;
  IMediaPlayerCustomDataProvider provider;
}
\`\`\`

<a id="class_mediasource__parameters" />

## 属性 [#属性]

### \`url\` [#url]

要播放的媒体文件的 URL。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果打开的是普通媒体资源，请传入 \`url\` 的值；如果打开的是自定义媒体资源，请传入 \`provider\` 的值。声网建议不要在一次调用中同时传入这两个参数的值，否则调用可能失败。
  </CalloutDescription>
</CalloutContainer>

### \`uri\` [#uri]

媒体文件的 URI（统一资源标识符）。

### \`startPos\` [#startpos]

从该位置（单位为毫秒）开始播放。默认值为 0。

### \`autoPlay\` [#autoplay]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果关闭自动播放，在打开媒体文件后需手动调用 [play](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_play_player) 方法播放。
  </CalloutDescription>
</CalloutContainer>

是否在媒体文件打开后自动播放：

* true：（默认）自动播放。
* false：不自动播放。

### \`enableCache\` [#enablecache]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    声网仅支持缓存非 HLS 协议传输的点播音视频流。如果需要启用缓存功能，请为 \`uri\` 赋值；否则，默认基于 \`url\` 进行缓存。启用该功能后，Media Player 会将正在播放的部分音视频文件缓存于本地设备，可在无网络的情况下播放。缓存统计信息会在播放后每秒更新一次，详见 [CacheStatistics](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-cachestatistics)。
  </CalloutDescription>
</CalloutContainer>

播放过程中是否缓存媒体文件：

* true：开启缓存。
* false：（默认）关闭缓存。

### \`enableMultiAudioTrack\` [#enablemultiaudiotrack]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果需要为本地播放和发布到频道分别设置音轨，需设置此参数为 true，然后调用 [selectMultiAudioTrack](/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_imediaplayer_selectmultiaudiotrack) 方法选择音轨。
  </CalloutDescription>
</CalloutContainer>

是否允许在播放媒体资源时选择不同的音轨：

* true：允许选择不同音轨。
* false：（默认）不允许选择不同音轨。

### \`isAgoraSource\` [#isagorasource]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果需要播放通过直播服务分发的直播或点播视频，请将媒体资源的 URL 传入 \`url\`，并将 \`isAgoraSource\` 设置为 true；否则无需设置该参数。
  </CalloutDescription>
</CalloutContainer>

是否为通过 Media Broadcast 服务分发的直播或点播视频资源：

* true：是。
* false：（默认）否。

### \`isLiveSource\` [#islivesource]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果打开的是直播流，声网建议将该参数设为 true，以便更快加载直播流。若打开的媒体资源并非直播流，但设置了 \`isLiveSource=true\`，也不会提升加载速度。
  </CalloutDescription>
</CalloutContainer>

是否为直播流媒体资源：

* true：是直播流。
* false：（默认）不是直播流。

### \`provider\` [#provider]

自定义媒体资源文件的数据提供回调，详见 [IMediaPlayerCustomDataProvider](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercustomdataprovider)。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果打开的是自定义媒体资源，请传入 \`provider\` 的值；如果打开的是普通媒体资源，请传入 \`url\` 的值。声网建议不要在一次调用中同时传入 \`url\` 和 \`provider\` 的值，否则调用可能失败。
  </CalloutDescription>
</CalloutContainer>
`;
export let structuredData = {
  contents: [{
    heading: "url",
    content: "要播放的媒体文件的 URL。"
  }, {
    heading: "url",
    content: "如果打开的是普通媒体资源，请传入 `url` 的值；如果打开的是自定义媒体资源，请传入 `provider` 的值。声网建议不要在一次调用中同时传入这两个参数的值，否则调用可能失败。"
  }, {
    heading: "uri",
    content: "媒体文件的 URI（统一资源标识符）。"
  }, {
    heading: "startpos",
    content: "从该位置（单位为毫秒）开始播放。默认值为 0。"
  }, {
    heading: "autoplay",
    content: "如果关闭自动播放，在打开媒体文件后需手动调用 play 方法播放。"
  }, {
    heading: "autoplay",
    content: "是否在媒体文件打开后自动播放："
  }, {
    heading: "autoplay",
    content: "true：（默认）自动播放。"
  }, {
    heading: "autoplay",
    content: "false：不自动播放。"
  }, {
    heading: "enablecache",
    content: "声网仅支持缓存非 HLS 协议传输的点播音视频流。如果需要启用缓存功能，请为 `uri` 赋值；否则，默认基于 `url` 进行缓存。启用该功能后，Media Player 会将正在播放的部分音视频文件缓存于本地设备，可在无网络的情况下播放。缓存统计信息会在播放后每秒更新一次，详见 CacheStatistics。"
  }, {
    heading: "enablecache",
    content: "播放过程中是否缓存媒体文件："
  }, {
    heading: "enablecache",
    content: "true：开启缓存。"
  }, {
    heading: "enablecache",
    content: "false：（默认）关闭缓存。"
  }, {
    heading: "enablemultiaudiotrack",
    content: "如果需要为本地播放和发布到频道分别设置音轨，需设置此参数为 true，然后调用 selectMultiAudioTrack 方法选择音轨。"
  }, {
    heading: "enablemultiaudiotrack",
    content: "是否允许在播放媒体资源时选择不同的音轨："
  }, {
    heading: "enablemultiaudiotrack",
    content: "true：允许选择不同音轨。"
  }, {
    heading: "enablemultiaudiotrack",
    content: "false：（默认）不允许选择不同音轨。"
  }, {
    heading: "isagorasource",
    content: "如果需要播放通过直播服务分发的直播或点播视频，请将媒体资源的 URL 传入 `url`，并将 `isAgoraSource` 设置为 true；否则无需设置该参数。"
  }, {
    heading: "isagorasource",
    content: "是否为通过 Media Broadcast 服务分发的直播或点播视频资源："
  }, {
    heading: "isagorasource",
    content: "true：是。"
  }, {
    heading: "isagorasource",
    content: "false：（默认）否。"
  }, {
    heading: "islivesource",
    content: "如果打开的是直播流，声网建议将该参数设为 true，以便更快加载直播流。若打开的媒体资源并非直播流，但设置了 `isLiveSource=true`，也不会提升加载速度。"
  }, {
    heading: "islivesource",
    content: "是否为直播流媒体资源："
  }, {
    heading: "islivesource",
    content: "true：是直播流。"
  }, {
    heading: "islivesource",
    content: "false：（默认）不是直播流。"
  }, {
    heading: "provider",
    content: "自定义媒体资源文件的数据提供回调，详见 IMediaPlayerCustomDataProvider。"
  }, {
    heading: "provider",
    content: "如果打开的是自定义媒体资源，请传入 `provider` 的值；如果打开的是普通媒体资源，请传入 `url` 的值。声网建议不要在一次调用中同时传入 `url` 和 `provider` 的值，否则调用可能失败。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "url",
    content: "`url`"
  }, {
    id: "uri",
    content: "`uri`"
  }, {
    id: "startpos",
    content: "`startPos`"
  }, {
    id: "autoplay",
    content: "`autoPlay`"
  }, {
    id: "enablecache",
    content: "`enableCache`"
  }, {
    id: "enablemultiaudiotrack",
    content: "`enableMultiAudioTrack`"
  }, {
    id: "isagorasource",
    content: "`isAgoraSource`"
  }, {
    id: "islivesource",
    content: "`isLiveSource`"
  }, {
    id: "provider",
    content: "`provider`"
  }]
};
export let toc = [{
  depth: 2,
  url: "#属性",
  title: _jsx(_Fragment, {
    children: "属性"
  })
}, {
  depth: 3,
  url: "#url",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "url"
    })
  })
}, {
  depth: 3,
  url: "#uri",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uri"
    })
  })
}, {
  depth: 3,
  url: "#startpos",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "startPos"
    })
  })
}, {
  depth: 3,
  url: "#autoplay",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "autoPlay"
    })
  })
}, {
  depth: 3,
  url: "#enablecache",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enableCache"
    })
  })
}, {
  depth: 3,
  url: "#enablemultiaudiotrack",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enableMultiAudioTrack"
    })
  })
}, {
  depth: 3,
  url: "#isagorasource",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "isAgoraSource"
    })
  })
}, {
  depth: 3,
  url: "#islivesource",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "isLiveSource"
    })
  })
}, {
  depth: 3,
  url: "#provider",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "provider"
    })
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
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "class_mediasource__prototype"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " MediaPlayerSource"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  String url;"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  String uri;"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " startPos;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " autoPlay;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " enableCache;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " enableMultiAudioTrack;"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  Boolean isAgoraSource;"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  Boolean isLiveSource;"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  IMediaPlayerCustomDataProvider provider;"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsx("a", {
      id: "class_mediasource__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "url",
      children: _jsx(_components.code, {
        children: "url"
      })
    }), `
`, _jsx(_components.p, {
      children: "要播放的媒体文件的 URL。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果打开的是普通媒体资源，请传入 ", _jsx(_components.code, {
            children: "url"
          }), " 的值；如果打开的是自定义媒体资源，请传入 ", _jsx(_components.code, {
            children: "provider"
          }), " 的值。声网建议不要在一次调用中同时传入这两个参数的值，否则调用可能失败。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "uri",
      children: _jsx(_components.code, {
        children: "uri"
      })
    }), `
`, _jsx(_components.p, {
      children: "媒体文件的 URI（统一资源标识符）。"
    }), `
`, _jsx(_components.h3, {
      id: "startpos",
      children: _jsx(_components.code, {
        children: "startPos"
      })
    }), `
`, _jsx(_components.p, {
      children: "从该位置（单位为毫秒）开始播放。默认值为 0。"
    }), `
`, _jsx(_components.h3, {
      id: "autoplay",
      children: _jsx(_components.code, {
        children: "autoPlay"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果关闭自动播放，在打开媒体文件后需手动调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_play_player",
            children: "play"
          }), " 方法播放。"]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "是否在媒体文件打开后自动播放："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：（默认）自动播放。"
      }), `
`, _jsx(_components.li, {
        children: "false：不自动播放。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "enablecache",
      children: _jsx(_components.code, {
        children: "enableCache"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["声网仅支持缓存非 HLS 协议传输的点播音视频流。如果需要启用缓存功能，请为 ", _jsx(_components.code, {
            children: "uri"
          }), " 赋值；否则，默认基于 ", _jsx(_components.code, {
            children: "url"
          }), " 进行缓存。启用该功能后，Media Player 会将正在播放的部分音视频文件缓存于本地设备，可在无网络的情况下播放。缓存统计信息会在播放后每秒更新一次，详见 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-cachestatistics",
            children: "CacheStatistics"
          }), "。"]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "播放过程中是否缓存媒体文件："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：开启缓存。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）关闭缓存。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "enablemultiaudiotrack",
      children: _jsx(_components.code, {
        children: "enableMultiAudioTrack"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果需要为本地播放和发布到频道分别设置音轨，需设置此参数为 true，然后调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/playback/audio-mixing#api_imediaplayer_selectmultiaudiotrack",
            children: "selectMultiAudioTrack"
          }), " 方法选择音轨。"]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "是否允许在播放媒体资源时选择不同的音轨："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：允许选择不同音轨。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不允许选择不同音轨。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "isagorasource",
      children: _jsx(_components.code, {
        children: "isAgoraSource"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果需要播放通过直播服务分发的直播或点播视频，请将媒体资源的 URL 传入 ", _jsx(_components.code, {
            children: "url"
          }), "，并将 ", _jsx(_components.code, {
            children: "isAgoraSource"
          }), " 设置为 true；否则无需设置该参数。"]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "是否为通过 Media Broadcast 服务分发的直播或点播视频资源："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：是。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）否。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "islivesource",
      children: _jsx(_components.code, {
        children: "isLiveSource"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果打开的是直播流，声网建议将该参数设为 true，以便更快加载直播流。若打开的媒体资源并非直播流，但设置了 ", _jsx(_components.code, {
            children: "isLiveSource=true"
          }), "，也不会提升加载速度。"]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "是否为直播流媒体资源："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：是直播流。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不是直播流。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "provider",
      children: _jsx(_components.code, {
        children: "provider"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["自定义媒体资源文件的数据提供回调，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercustomdataprovider",
        children: "IMediaPlayerCustomDataProvider"
      }), "。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果打开的是自定义媒体资源，请传入 ", _jsx(_components.code, {
            children: "provider"
          }), " 的值；如果打开的是普通媒体资源，请传入 ", _jsx(_components.code, {
            children: "url"
          }), " 的值。声网建议不要在一次调用中同时传入 ", _jsx(_components.code, {
            children: "url"
          }), " 和 ", _jsx(_components.code, {
            children: "provider"
          }), " 的值，否则调用可能失败。"]
        })
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
