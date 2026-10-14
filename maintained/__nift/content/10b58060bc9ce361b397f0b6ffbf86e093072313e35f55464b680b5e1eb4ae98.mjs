import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "智能门铃",
  description: "面向可视门铃、智能门锁、智能猫眼等入户设备的实时互动方案。"
};
export let _markdown = `

## 这是什么方案 [#这是什么方案]

智能门铃是面向入户安防设备的方案入口，把设备接入、实时通话和云侧协同放在同一个产品路径里，避免用户自己先拆成若干底层技术模块。

## 适合哪些场景 [#适合哪些场景]

* 可视门铃
* 视频门锁
* 智能猫眼

## 依赖哪些底层能力 [#依赖哪些底层能力]

* 设备侧媒体传输
* 客户端实时音视频
* 信令、通知与设备控制

## 什么时候先看它 [#什么时候先看它]

当你的产品重点是访客沟通、门口设备联动和入户场景，而不是通用摄像头能力时，应该先从智能门铃进入。
`;
export let structuredData = {
  contents: [{
    heading: "这是什么方案",
    content: "智能门铃是面向入户安防设备的方案入口，把设备接入、实时通话和云侧协同放在同一个产品路径里，避免用户自己先拆成若干底层技术模块。"
  }, {
    heading: "适合哪些场景",
    content: "可视门铃"
  }, {
    heading: "适合哪些场景",
    content: "视频门锁"
  }, {
    heading: "适合哪些场景",
    content: "智能猫眼"
  }, {
    heading: "依赖哪些底层能力",
    content: "设备侧媒体传输"
  }, {
    heading: "依赖哪些底层能力",
    content: "客户端实时音视频"
  }, {
    heading: "依赖哪些底层能力",
    content: "信令、通知与设备控制"
  }, {
    heading: "什么时候先看它",
    content: "当你的产品重点是访客沟通、门口设备联动和入户场景，而不是通用摄像头能力时，应该先从智能门铃进入。"
  }],
  headings: [{
    id: "这是什么方案",
    content: "这是什么方案"
  }, {
    id: "适合哪些场景",
    content: "适合哪些场景"
  }, {
    id: "依赖哪些底层能力",
    content: "依赖哪些底层能力"
  }, {
    id: "什么时候先看它",
    content: "什么时候先看它"
  }]
};
export let toc = [{
  depth: 2,
  url: "#这是什么方案",
  title: _jsx(_Fragment, {
    children: "这是什么方案"
  })
}, {
  depth: 2,
  url: "#适合哪些场景",
  title: _jsx(_Fragment, {
    children: "适合哪些场景"
  })
}, {
  depth: 2,
  url: "#依赖哪些底层能力",
  title: _jsx(_Fragment, {
    children: "依赖哪些底层能力"
  })
}, {
  depth: 2,
  url: "#什么时候先看它",
  title: _jsx(_Fragment, {
    children: "什么时候先看它"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "这是什么方案",
      children: "这是什么方案"
    }), `
`, _jsx(_components.p, {
      children: "智能门铃是面向入户安防设备的方案入口，把设备接入、实时通话和云侧协同放在同一个产品路径里，避免用户自己先拆成若干底层技术模块。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "可视门铃"
      }), `
`, _jsx(_components.li, {
        children: "视频门锁"
      }), `
`, _jsx(_components.li, {
        children: "智能猫眼"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "依赖哪些底层能力",
      children: "依赖哪些底层能力"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "设备侧媒体传输"
      }), `
`, _jsx(_components.li, {
        children: "客户端实时音视频"
      }), `
`, _jsx(_components.li, {
        children: "信令、通知与设备控制"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "什么时候先看它",
      children: "什么时候先看它"
    }), `
`, _jsx(_components.p, {
      children: "当你的产品重点是访客沟通、门口设备联动和入户场景，而不是通用摄像头能力时，应该先从智能门铃进入。"
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
