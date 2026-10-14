import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Mobile client",
  description: "在移动端承接 AI 智能体体验时，优先考虑权限、音频路由、状态展示与中断行为。"
};
export let _markdown = `

## 移动端的重点 [#移动端的重点]

* 麦克风与扬声器权限
* 前后台切换时的会话状态
* 音频路由变化
* 字幕、状态、错误和中断提示

## 推荐继续阅读 [#推荐继续阅读]

* [Realtime audio](/zh-CN/realtime-media/speech-to-text/audio-modality)
* [Handle interruption](/zh-CN/ai/interrupt-agent)
* [Transcripts and subtitles](/zh-CN/ai/realtime-sub)
`;
export let structuredData = {
  contents: [{
    heading: "移动端的重点",
    content: "麦克风与扬声器权限"
  }, {
    heading: "移动端的重点",
    content: "前后台切换时的会话状态"
  }, {
    heading: "移动端的重点",
    content: "音频路由变化"
  }, {
    heading: "移动端的重点",
    content: "字幕、状态、错误和中断提示"
  }, {
    heading: "推荐继续阅读",
    content: "Realtime audio"
  }, {
    heading: "推荐继续阅读",
    content: "Handle interruption"
  }, {
    heading: "推荐继续阅读",
    content: "Transcripts and subtitles"
  }],
  headings: [{
    id: "移动端的重点",
    content: "移动端的重点"
  }, {
    id: "推荐继续阅读",
    content: "推荐继续阅读"
  }]
};
export let toc = [{
  depth: 2,
  url: "#移动端的重点",
  title: _jsx(_Fragment, {
    children: "移动端的重点"
  })
}, {
  depth: 2,
  url: "#推荐继续阅读",
  title: _jsx(_Fragment, {
    children: "推荐继续阅读"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "移动端的重点",
      children: "移动端的重点"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "麦克风与扬声器权限"
      }), `
`, _jsx(_components.li, {
        children: "前后台切换时的会话状态"
      }), `
`, _jsx(_components.li, {
        children: "音频路由变化"
      }), `
`, _jsx(_components.li, {
        children: "字幕、状态、错误和中断提示"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "推荐继续阅读",
      children: "推荐继续阅读"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/realtime-media/speech-to-text/audio-modality",
          children: "Realtime audio"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/interrupt-agent",
          children: "Handle interruption"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/realtime-sub",
          children: "Transcripts and subtitles"
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
