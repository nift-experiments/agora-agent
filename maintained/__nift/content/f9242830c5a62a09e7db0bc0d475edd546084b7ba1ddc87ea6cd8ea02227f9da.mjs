import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "初始化",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_mediaplayer_initialize" />

<a id="api_irtcengine_createmediaplayer" />

## createMediaPlayer [#createmediaplayer]

创建一个 IMediaPlayer 对象。

<a id="api_irtcengine_createmediaplayer__prototype" />

\`\`\`java
public abstract IMediaPlayer createMediaPlayer();
\`\`\`

<a id="api_irtcengine_createmediaplayer__detailed_desc" />

你需要调用此方法来创建一个媒体播放器实例。如果需要多个实例，可以多次调用此方法。

<a id="api_irtcengine_createmediaplayer__timing" />

### 调用时机 [#调用时机]

你可以在加入频道前或加入频道后调用此方法。

<a id="api_irtcengine_createmediaplayer__return_values" />

### 返回值 [#返回值]

方法调用成功，返回 [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer) 对象。 方法调用失败，返回 \`null\`。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_imediaplayer_destroy_imediaplayer" />

## destroy [#destroy]

销毁媒体播放器实例。

<a id="api_imediaplayer_destroy_imediaplayer__prototype" />

\`\`\`java
int destroy();
\`\`\`

<a id="api_imediaplayer_destroy_imediaplayer__detailed_desc" />

<a id="api_imediaplayer_destroy_imediaplayer__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_imediaplayercachemanager_getmediaplayercachemanager" />

## getMediaPlayerCacheManager [#getmediaplayercachemanager]

获取一个 IMediaPlayerCacheManager 实例。

<a id="api_imediaplayercachemanager_getmediaplayercachemanager__prototype" />

\`\`\`java
public abstract IMediaPlayerCacheManager getMediaPlayerCacheManager();
\`\`\`

<a id="api_imediaplayercachemanager_getmediaplayercachemanager__detailed_desc" />

在调用 [IMediaPlayerCacheManager](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager) 中的任何 API 之前，你需要调用 [getMediaPlayerCacheManager](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-initialize#api_imediaplayercachemanager_getmediaplayercachemanager) 获取媒体播放器的缓存管理器实例。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    [IMediaPlayerCacheManager](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager) 采用单例模式，因此多次调用 [getMediaPlayerCacheManager](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-initialize#api_imediaplayercachemanager_getmediaplayercachemanager) 会返回同一个实例。
  </CalloutDescription>
</CalloutContainer>

<a id="api_imediaplayercachemanager_getmediaplayercachemanager__timing" />

### 调用时机 [#调用时机-1]

确保在调用 [getMediaPlayerCacheManager](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-initialize#api_imediaplayercachemanager_getmediaplayercachemanager) 前已初始化 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)。

<a id="api_imediaplayercachemanager_getmediaplayercachemanager__return_values" />

### 返回值 [#返回值-2]

方法调用成功，返回 [IMediaPlayerCacheManager](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager) 实例。

### 所属接口类 [#所属接口类-2]

* [IMediaPlayerCacheManager](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager)
`;
export let structuredData = {
  contents: [{
    heading: "createmediaplayer",
    content: "创建一个 IMediaPlayer 对象。"
  }, {
    heading: "createmediaplayer",
    content: "你需要调用此方法来创建一个媒体播放器实例。如果需要多个实例，可以多次调用此方法。"
  }, {
    heading: "调用时机",
    content: "你可以在加入频道前或加入频道后调用此方法。"
  }, {
    heading: "返回值",
    content: "方法调用成功，返回 IMediaPlayer 对象。 方法调用失败，返回 `null`。"
  }, {
    heading: "所属接口类",
    content: "RtcEngine"
  }, {
    heading: "destroy",
    content: "销毁媒体播放器实例。"
  }, {
    heading: "返回值-1",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-1",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-1",
    content: "IMediaPlayer"
  }, {
    heading: "getmediaplayercachemanager",
    content: "获取一个 IMediaPlayerCacheManager 实例。"
  }, {
    heading: "getmediaplayercachemanager",
    content: "在调用 IMediaPlayerCacheManager 中的任何 API 之前，你需要调用 getMediaPlayerCacheManager 获取媒体播放器的缓存管理器实例。"
  }, {
    heading: "getmediaplayercachemanager",
    content: "IMediaPlayerCacheManager 采用单例模式，因此多次调用 getMediaPlayerCacheManager 会返回同一个实例。"
  }, {
    heading: "调用时机-1",
    content: "确保在调用 getMediaPlayerCacheManager 前已初始化 RtcEngine。"
  }, {
    heading: "返回值-2",
    content: "方法调用成功，返回 IMediaPlayerCacheManager 实例。"
  }, {
    heading: "所属接口类-2",
    content: "IMediaPlayerCacheManager"
  }],
  headings: [{
    id: "createmediaplayer",
    content: "createMediaPlayer"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "destroy",
    content: "destroy"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "getmediaplayercachemanager",
    content: "getMediaPlayerCacheManager"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#createmediaplayer",
  title: _jsx(_Fragment, {
    children: "createMediaPlayer"
  })
}, {
  depth: 3,
  url: "#调用时机",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#返回值",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#destroy",
  title: _jsx(_Fragment, {
    children: "destroy"
  })
}, {
  depth: 3,
  url: "#返回值-1",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-1",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#getmediaplayercachemanager",
  title: _jsx(_Fragment, {
    children: "getMediaPlayerCacheManager"
  })
}, {
  depth: 3,
  url: "#调用时机-1",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#返回值-2",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-2",
  title: _jsx(_Fragment, {
    children: "所属接口类"
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
      id: "toc_mediaplayer_initialize"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createmediaplayer"
    }), `
`, _jsx(_components.h2, {
      id: "createmediaplayer",
      children: "createMediaPlayer"
    }), `
`, _jsx(_components.p, {
      children: "创建一个 IMediaPlayer 对象。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createmediaplayer__prototype"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
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
              children: " abstract"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " IMediaPlayer "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "createMediaPlayer"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "();"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createmediaplayer__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你需要调用此方法来创建一个媒体播放器实例。如果需要多个实例，可以多次调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createmediaplayer__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或加入频道后调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createmediaplayer__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用成功，返回 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer",
        children: "IMediaPlayer"
      }), " 对象。 方法调用失败，返回 ", _jsx(_components.code, {
        children: "null"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_destroy_imediaplayer"
    }), `
`, _jsx(_components.h2, {
      id: "destroy",
      children: "destroy"
    }), `
`, _jsx(_components.p, {
      children: "销毁媒体播放器实例。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_destroy_imediaplayer__prototype"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " destroy"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "();"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_destroy_imediaplayer__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_destroy_imediaplayer__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-1",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：方法调用成功。"
      }), `
`, _jsxs(_components.li, {
        children: ["< 0：方法调用失败。详见", _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/rtc/android/error-code",
          children: "错误码"
        }), "了解详情和解决建议。"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-1",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer",
          children: "IMediaPlayer"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_getmediaplayercachemanager"
    }), `
`, _jsx(_components.h2, {
      id: "getmediaplayercachemanager",
      children: "getMediaPlayerCacheManager"
    }), `
`, _jsx(_components.p, {
      children: "获取一个 IMediaPlayerCacheManager 实例。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_getmediaplayercachemanager__prototype"
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
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
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
              children: " abstract"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " IMediaPlayerCacheManager "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getMediaPlayerCacheManager"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "();"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_getmediaplayercachemanager__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager",
        children: "IMediaPlayerCacheManager"
      }), " 中的任何 API 之前，你需要调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-initialize#api_imediaplayercachemanager_getmediaplayercachemanager",
        children: "getMediaPlayerCacheManager"
      }), " 获取媒体播放器的缓存管理器实例。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager",
            children: "IMediaPlayerCacheManager"
          }), " 采用单例模式，因此多次调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-initialize#api_imediaplayercachemanager_getmediaplayercachemanager",
            children: "getMediaPlayerCacheManager"
          }), " 会返回同一个实例。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_getmediaplayercachemanager__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["确保在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-initialize#api_imediaplayercachemanager_getmediaplayercachemanager",
        children: "getMediaPlayerCacheManager"
      }), " 前已初始化 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
        children: "RtcEngine"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayercachemanager_getmediaplayercachemanager__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-2",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用成功，返回 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager",
        children: "IMediaPlayerCacheManager"
      }), " 实例。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-2",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayercachemanager",
          children: "IMediaPlayerCacheManager"
        })
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
