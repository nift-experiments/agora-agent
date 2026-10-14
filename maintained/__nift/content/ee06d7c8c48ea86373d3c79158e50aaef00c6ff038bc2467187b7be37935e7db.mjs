import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "垫片推流",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_image_source" />

<a id="api_irtcengine_enablevideoimagesource" />

## enableVideoImageSource [#enablevideoimagesource]

设置在发布视频流时是否使用图片替代当前视频画面。

<a id="api_irtcengine_enablevideoimagesource__prototype" />

\`\`\`java
public abstract int enableVideoImageSource(boolean enabled, ImageTrackOptions options);
\`\`\`

<a id="api_irtcengine_enablevideoimagesource__detailed_desc" />

你可以在发布视频流时调用该方法，用自定义图片替代当前的视频画面。启用该功能后，可通过 \`options\` 参数设置用于替代的视频图片。禁用该功能后，远端用户将看到你发布的视频画面。

<a id="api_irtcengine_enablevideoimagesource__timing" />

### 调用时机 [#调用时机]

请在加入频道后调用该方法。

<a id="api_irtcengine_enablevideoimagesource__parameters" />

### 参数 [#参数]

#### \`enabled\` [#enabled]

是否使用自定义图片替代当前视频画面：

* true：使用自定义图片替代当前视频画面。
* false：（默认）不替代当前视频画面。

#### \`options\` [#options]

图片配置。详见 [ImageTrackOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-imagetrackoptions)。

<a id="api_irtcengine_enablevideoimagesource__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)
`;
export let structuredData = {
  contents: [{
    heading: "enablevideoimagesource",
    content: "设置在发布视频流时是否使用图片替代当前视频画面。"
  }, {
    heading: "enablevideoimagesource",
    content: "你可以在发布视频流时调用该方法，用自定义图片替代当前的视频画面。启用该功能后，可通过 `options` 参数设置用于替代的视频图片。禁用该功能后，远端用户将看到你发布的视频画面。"
  }, {
    heading: "调用时机",
    content: "请在加入频道后调用该方法。"
  }, {
    heading: "enabled",
    content: "是否使用自定义图片替代当前视频画面："
  }, {
    heading: "enabled",
    content: "true：使用自定义图片替代当前视频画面。"
  }, {
    heading: "enabled",
    content: "false：（默认）不替代当前视频画面。"
  }, {
    heading: "options",
    content: "图片配置。详见 ImageTrackOptions。"
  }, {
    heading: "返回值",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类",
    content: "RtcEngine"
  }],
  headings: [{
    id: "enablevideoimagesource",
    content: "enableVideoImageSource"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "enabled",
    content: "`enabled`"
  }, {
    id: "options",
    content: "`options`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#enablevideoimagesource",
  title: _jsx(_Fragment, {
    children: "enableVideoImageSource"
  })
}, {
  depth: 3,
  url: "#调用时机",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#enabled",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
    })
  })
}, {
  depth: 4,
  url: "#options",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "options"
    })
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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "toc_image_source"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevideoimagesource"
    }), `
`, _jsx(_components.h2, {
      id: "enablevideoimagesource",
      children: "enableVideoImageSource"
    }), `
`, _jsx(_components.p, {
      children: "设置在发布视频流时是否使用图片替代当前视频画面。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevideoimagesource__prototype"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " enableVideoImageSource"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " enabled, ImageTrackOptions options);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevideoimagesource__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以在发布视频流时调用该方法，用自定义图片替代当前的视频画面。启用该功能后，可通过 ", _jsx(_components.code, {
        children: "options"
      }), " 参数设置用于替代的视频图片。禁用该功能后，远端用户将看到你发布的视频画面。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevideoimagesource__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevideoimagesource__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否使用自定义图片替代当前视频画面："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：使用自定义图片替代当前视频画面。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不替代当前视频画面。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "options",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["图片配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-imagetrackoptions",
        children: "ImageTrackOptions"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevideoimagesource__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值",
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
