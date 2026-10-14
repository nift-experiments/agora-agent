import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "远程操控",
  description: "远程操控场景把低时延媒体、状态同步和设备控制结合在一起，强调稳定和可控。"
};
export let _markdown = `

## 这是什么方案 [#这是什么方案]

远程操控不是单独某个媒体能力，而是一类完整方案产品。它解决的是“远程看得见、连得上、还能稳定操作”的问题，适合把设备端和操控端放进同一条低时延链路里。

## 适合哪些场景 [#适合哪些场景]

* 远程控制终端
* 设备运维
* 远程查看与操作结合的系统
* 跨城或跨区域低时延操控场景

## 依赖哪些底层能力 [#依赖哪些底层能力]

* 低时延音视频传输
* 控制信令同步
* 设备端与操控端双侧实现

## 什么时候先看它 [#什么时候先看它]

如果你的核心问题不是“怎么传媒体流”，而是“怎么远程稳定操控设备”，就应该先从远程操控方案进入。
`;
export let structuredData = {
  contents: [{
    heading: "这是什么方案",
    content: "远程操控不是单独某个媒体能力，而是一类完整方案产品。它解决的是“远程看得见、连得上、还能稳定操作”的问题，适合把设备端和操控端放进同一条低时延链路里。"
  }, {
    heading: "适合哪些场景",
    content: "远程控制终端"
  }, {
    heading: "适合哪些场景",
    content: "设备运维"
  }, {
    heading: "适合哪些场景",
    content: "远程查看与操作结合的系统"
  }, {
    heading: "适合哪些场景",
    content: "跨城或跨区域低时延操控场景"
  }, {
    heading: "依赖哪些底层能力",
    content: "低时延音视频传输"
  }, {
    heading: "依赖哪些底层能力",
    content: "控制信令同步"
  }, {
    heading: "依赖哪些底层能力",
    content: "设备端与操控端双侧实现"
  }, {
    heading: "什么时候先看它",
    content: "如果你的核心问题不是“怎么传媒体流”，而是“怎么远程稳定操控设备”，就应该先从远程操控方案进入。"
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
      children: "远程操控不是单独某个媒体能力，而是一类完整方案产品。它解决的是“远程看得见、连得上、还能稳定操作”的问题，适合把设备端和操控端放进同一条低时延链路里。"
    }), `
`, _jsx(_components.h2, {
      id: "适合哪些场景",
      children: "适合哪些场景"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "远程控制终端"
      }), `
`, _jsx(_components.li, {
        children: "设备运维"
      }), `
`, _jsx(_components.li, {
        children: "远程查看与操作结合的系统"
      }), `
`, _jsx(_components.li, {
        children: "跨城或跨区域低时延操控场景"
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
        children: "低时延音视频传输"
      }), `
`, _jsx(_components.li, {
        children: "控制信令同步"
      }), `
`, _jsx(_components.li, {
        children: "设备端与操控端双侧实现"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "什么时候先看它",
      children: "什么时候先看它"
    }), `
`, _jsx(_components.p, {
      children: "如果你的核心问题不是“怎么传媒体流”，而是“怎么远程稳定操控设备”，就应该先从远程操控方案进入。"
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
