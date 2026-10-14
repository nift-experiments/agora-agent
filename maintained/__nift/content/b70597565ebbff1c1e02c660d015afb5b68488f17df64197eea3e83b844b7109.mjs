import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "SimulcastStreamMode",
  description: "设置发送不同质量层级视频流的模式。"
};
export let _markdown = `

<a id="enum_simulcaststreammode__parameters" />

## 枚举值 [#枚举值]

### \`AUTO_SIMULCAST_STREAM\` [#auto_simulcast_stream]

（-1）：默认不发送视频小流，收到接收端的订阅请求后自动开始发送。

### \`DISABLE_SIMULCAST_STREAM\` [#disable_simulcast_stream]

（0）：从不发送视频小流。

### \`ENABLE_SIMULCAST_STREAM\` [#enable_simulcast_stream]

（1）：始终发送视频小流。
`;
export let structuredData = {
  contents: [{
    heading: "auto_simulcast_stream",
    content: "（-1）：默认不发送视频小流，收到接收端的订阅请求后自动开始发送。"
  }, {
    heading: "disable_simulcast_stream",
    content: "（0）：从不发送视频小流。"
  }, {
    heading: "enable_simulcast_stream",
    content: "（1）：始终发送视频小流。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "auto_simulcast_stream",
    content: "`AUTO_SIMULCAST_STREAM`"
  }, {
    id: "disable_simulcast_stream",
    content: "`DISABLE_SIMULCAST_STREAM`"
  }, {
    id: "enable_simulcast_stream",
    content: "`ENABLE_SIMULCAST_STREAM`"
  }]
};
export let toc = [{
  depth: 2,
  url: "#枚举值",
  title: _jsx(_Fragment, {
    children: "枚举值"
  })
}, {
  depth: 3,
  url: "#auto_simulcast_stream",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "AUTO_SIMULCAST_STREAM"
    })
  })
}, {
  depth: 3,
  url: "#disable_simulcast_stream",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "DISABLE_SIMULCAST_STREAM"
    })
  })
}, {
  depth: 3,
  url: "#enable_simulcast_stream",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "ENABLE_SIMULCAST_STREAM"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "enum_simulcaststreammode__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "auto_simulcast_stream",
      children: _jsx(_components.code, {
        children: "AUTO_SIMULCAST_STREAM"
      })
    }), `
`, _jsx(_components.p, {
      children: "（-1）：默认不发送视频小流，收到接收端的订阅请求后自动开始发送。"
    }), `
`, _jsx(_components.h3, {
      id: "disable_simulcast_stream",
      children: _jsx(_components.code, {
        children: "DISABLE_SIMULCAST_STREAM"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：从不发送视频小流。"
    }), `
`, _jsx(_components.h3, {
      id: "enable_simulcast_stream",
      children: _jsx(_components.code, {
        children: "ENABLE_SIMULCAST_STREAM"
      })
    }), `
`, _jsx(_components.p, {
      children: "（1）：始终发送视频小流。"
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
