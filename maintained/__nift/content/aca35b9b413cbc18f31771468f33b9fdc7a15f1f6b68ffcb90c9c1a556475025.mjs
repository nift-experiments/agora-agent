import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "智能摄像头",
  description: "面向摄像头类设备与客户端互通的实时互动方案。"
};
export let _markdown = `

## 这是什么方案 [#这是什么方案]

智能摄像头是面向 IP Camera 等视觉设备的方案入口。它用“设备产品”的方式组织文档，而不是让用户先拆成 RTC、RTSA、RTM 三套底层能力再自己组合。

## 适合哪些场景 [#适合哪些场景]

* IP Camera 产品
* 可视监控设备
* 同时需要媒体链路和控制链路的设备到 App 产品

## 依赖哪些底层能力 [#依赖哪些底层能力]

* 设备侧媒体传输
* 客户端实时音视频
* 状态与控制信令

## 什么时候先看它 [#什么时候先看它]

当你的产品天然是一类摄像头设备，核心问题是“设备和客户端如何组成完整方案”时，先从智能摄像头进入。
`;
export let structuredData = {
  contents: [{
    heading: "这是什么方案",
    content: "智能摄像头是面向 IP Camera 等视觉设备的方案入口。它用“设备产品”的方式组织文档，而不是让用户先拆成 RTC、RTSA、RTM 三套底层能力再自己组合。"
  }, {
    heading: "适合哪些场景",
    content: "IP Camera 产品"
  }, {
    heading: "适合哪些场景",
    content: "可视监控设备"
  }, {
    heading: "适合哪些场景",
    content: "同时需要媒体链路和控制链路的设备到 App 产品"
  }, {
    heading: "依赖哪些底层能力",
    content: "设备侧媒体传输"
  }, {
    heading: "依赖哪些底层能力",
    content: "客户端实时音视频"
  }, {
    heading: "依赖哪些底层能力",
    content: "状态与控制信令"
  }, {
    heading: "什么时候先看它",
    content: "当你的产品天然是一类摄像头设备，核心问题是“设备和客户端如何组成完整方案”时，先从智能摄像头进入。"
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
      children: "智能摄像头是面向 IP Camera 等视觉设备的方案入口。它用“设备产品”的方式组织文档，而不是让用户先拆成 RTC、RTSA、RTM 三套底层能力再自己组合。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "IP Camera 产品"
      }), `
`, _jsx(_components.li, {
        children: "可视监控设备"
      }), `
`, _jsx(_components.li, {
        children: "同时需要媒体链路和控制链路的设备到 App 产品"
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
        children: "状态与控制信令"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "什么时候先看它",
      children: "什么时候先看它"
    }), `
`, _jsx(_components.p, {
      children: "当你的产品天然是一类摄像头设备，核心问题是“设备和客户端如何组成完整方案”时，先从智能摄像头进入。"
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
