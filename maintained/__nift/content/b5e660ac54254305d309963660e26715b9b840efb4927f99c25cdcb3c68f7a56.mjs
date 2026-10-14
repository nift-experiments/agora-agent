import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "setSrcChannelInfo",
  description: "设置源频道的信息。"
};
export let _markdown = `

<a id="api_channelmediarelayconfiguration_setsrcchannelinfo__prototype" />

\`\`\`java
public void setSrcChannelInfo(ChannelMediaInfo srcInfo)
\`\`\`

<a id="api_channelmediarelayconfiguration_setsrcchannelinfo__detailed_desc" />

<a id="api_channelmediarelayconfiguration_setsrcchannelinfo__parameters" />

## 参数 [#参数]

### \`srcInfo\` [#srcinfo]

源频道的信息，详见 [ChannelMediaInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediainfo)。

* channelName：源频道的频道名。默认值为 null，表示 SDK 使用当前频道的频道名。
* uid：要转发媒体流的主播的用户 ID。默认值为 0，表示 SDK 自动生成一个随机的用户 ID。你必须将其设置为 0。
* token：加入源频道所需的 Token。该 Token 是根据你在 srcInfo 中设置的 channelName 和 uid 生成的。
  * 如果你未启用 App 证书，请将该参数设置为默认值 null，表示 SDK 使用 App ID。
  * 如果你已启用 App 证书，必须使用根据 channelName 和 uid 生成的 Token，且 uid 必须设置为 0。
`;
export let structuredData = {
  contents: [{
    heading: "srcinfo",
    content: "源频道的信息，详见 ChannelMediaInfo。"
  }, {
    heading: "srcinfo",
    content: "channelName：源频道的频道名。默认值为 null，表示 SDK 使用当前频道的频道名。"
  }, {
    heading: "srcinfo",
    content: "uid：要转发媒体流的主播的用户 ID。默认值为 0，表示 SDK 自动生成一个随机的用户 ID。你必须将其设置为 0。"
  }, {
    heading: "srcinfo",
    content: "token：加入源频道所需的 Token。该 Token 是根据你在 srcInfo 中设置的 channelName 和 uid 生成的。"
  }, {
    heading: "srcinfo",
    content: "如果你未启用 App 证书，请将该参数设置为默认值 null，表示 SDK 使用 App ID。"
  }, {
    heading: "srcinfo",
    content: "如果你已启用 App 证书，必须使用根据 channelName 和 uid 生成的 Token，且 uid 必须设置为 0。"
  }],
  headings: [{
    id: "参数",
    content: "参数"
  }, {
    id: "srcinfo",
    content: "`srcInfo`"
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
  url: "#srcinfo",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "srcInfo"
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
      id: "api_channelmediarelayconfiguration_setsrcchannelinfo__prototype"
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
              children: " setSrcChannelInfo"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(ChannelMediaInfo srcInfo)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_channelmediarelayconfiguration_setsrcchannelinfo__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_channelmediarelayconfiguration_setsrcchannelinfo__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h3, {
      id: "srcinfo",
      children: _jsx(_components.code, {
        children: "srcInfo"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["源频道的信息，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-channelmediainfo",
        children: "ChannelMediaInfo"
      }), "。"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "channelName：源频道的频道名。默认值为 null，表示 SDK 使用当前频道的频道名。"
      }), `
`, _jsx(_components.li, {
        children: "uid：要转发媒体流的主播的用户 ID。默认值为 0，表示 SDK 自动生成一个随机的用户 ID。你必须将其设置为 0。"
      }), `
`, _jsxs(_components.li, {
        children: ["token：加入源频道所需的 Token。该 Token 是根据你在 srcInfo 中设置的 channelName 和 uid 生成的。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "如果你未启用 App 证书，请将该参数设置为默认值 null，表示 SDK 使用 App ID。"
          }), `
`, _jsx(_components.li, {
            children: "如果你已启用 App 证书，必须使用根据 channelName 和 uid 生成的 Token，且 uid 必须设置为 0。"
          }), `
`]
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
