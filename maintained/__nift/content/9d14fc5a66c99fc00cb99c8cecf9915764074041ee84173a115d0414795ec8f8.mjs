import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "setDestChannelInfo",
  description: "设置目标频道的信息。"
};
export let _markdown = `

<a id="api_channelmediarelayconfiguration_setdestchannelinfo__prototype" />

\`\`\`java
public void setDestChannelInfo(String channelName, ChannelMediaInfo destInfo)
\`\`\`

<a id="api_channelmediarelayconfiguration_setdestchannelinfo__detailed_desc" />

如果你希望将媒体流转发到多个频道，最多可调用该方法四次。

<a id="api_channelmediarelayconfiguration_setdestchannelinfo__parameters" />

## 参数 [#参数]

### \`channelName\` [#channelname]

目标频道的名称。该值必须与 \`destInfo\` 中 \`channelName\` 成员的值一致。

### \`destInfo\` [#destinfo]

目标频道的信息。包括以下成员：

* channelName：目标频道的名称。
* uid：目标频道中主播的用户 ID，取值范围为 0 到 (2\\<sup>32\\</sup> - 1)。为避免用户 ID 冲突，该值必须与目标频道中其他用户 ID 不同。默认值为 0，表示 SDK 会随机生成一个用户 ID。
* token：加入目标频道所需的 Token。该 Token 是根据 channelName 和 uid 生成的。
  * 如果未启用 App Certificate，将该参数设置为 null，表示 SDK 使用 App ID。
  * 如果已启用 App Certificate，必须使用根据 channelName 和 uid 生成的 Token。

详见 [ChannelMediaInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediainfo)。
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "如果你希望将媒体流转发到多个频道，最多可调用该方法四次。"
  }, {
    heading: "channelname",
    content: "目标频道的名称。该值必须与 `destInfo` 中 `channelName` 成员的值一致。"
  }, {
    heading: "destinfo",
    content: "目标频道的信息。包括以下成员："
  }, {
    heading: "destinfo",
    content: "channelName：目标频道的名称。"
  }, {
    heading: "destinfo",
    content: "uid：目标频道中主播的用户 ID，取值范围为 0 到 (2\\<sup>32\\</sup> - 1)。为避免用户 ID 冲突，该值必须与目标频道中其他用户 ID 不同。默认值为 0，表示 SDK 会随机生成一个用户 ID。"
  }, {
    heading: "destinfo",
    content: "token：加入目标频道所需的 Token。该 Token 是根据 channelName 和 uid 生成的。"
  }, {
    heading: "destinfo",
    content: "如果未启用 App Certificate，将该参数设置为 null，表示 SDK 使用 App ID。"
  }, {
    heading: "destinfo",
    content: "如果已启用 App Certificate，必须使用根据 channelName 和 uid 生成的 Token。"
  }, {
    heading: "destinfo",
    content: "详见 ChannelMediaInfo。"
  }],
  headings: [{
    id: "参数",
    content: "参数"
  }, {
    id: "channelname",
    content: "`channelName`"
  }, {
    id: "destinfo",
    content: "`destInfo`"
  }]
};
export let toc = [{
  depth: 2,
  url: "#参数",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 3,
  url: "#channelname",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channelName"
    })
  })
}, {
  depth: 3,
  url: "#destinfo",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "destInfo"
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "api_channelmediarelayconfiguration_setdestchannelinfo__prototype"
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
              children: " void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " setDestChannelInfo"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String channelName, ChannelMediaInfo destInfo)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_channelmediarelayconfiguration_setdestchannelinfo__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "如果你希望将媒体流转发到多个频道，最多可调用该方法四次。"
    }), `
`, _jsx("a", {
      id: "api_channelmediarelayconfiguration_setdestchannelinfo__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h3, {
      id: "channelname",
      children: _jsx(_components.code, {
        children: "channelName"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["目标频道的名称。该值必须与 ", _jsx(_components.code, {
        children: "destInfo"
      }), " 中 ", _jsx(_components.code, {
        children: "channelName"
      }), " 成员的值一致。"]
    }), `
`, _jsx(_components.h3, {
      id: "destinfo",
      children: _jsx(_components.code, {
        children: "destInfo"
      })
    }), `
`, _jsx(_components.p, {
      children: "目标频道的信息。包括以下成员："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "channelName：目标频道的名称。"
      }), `
`, _jsx(_components.li, {
        children: "uid：目标频道中主播的用户 ID，取值范围为 0 到 (2<sup>32</sup> - 1)。为避免用户 ID 冲突，该值必须与目标频道中其他用户 ID 不同。默认值为 0，表示 SDK 会随机生成一个用户 ID。"
      }), `
`, _jsxs(_components.li, {
        children: ["token：加入目标频道所需的 Token。该 Token 是根据 channelName 和 uid 生成的。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "如果未启用 App Certificate，将该参数设置为 null，表示 SDK 使用 App ID。"
          }), `
`, _jsx(_components.li, {
            children: "如果已启用 App Certificate，必须使用根据 channelName 和 uid 生成的 Token。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediainfo",
        children: "ChannelMediaInfo"
      }), "。"]
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
