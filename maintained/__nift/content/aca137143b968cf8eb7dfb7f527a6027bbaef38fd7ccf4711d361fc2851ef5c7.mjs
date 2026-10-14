import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "智能体与实时频道",
  description: "理解智能体如何作为实时参与者加入 Agora 频道，并与用户、客户端和后端共享同一会话上下文。"
};
export let _markdown = `

## 为什么频道模型最关键 [#为什么频道模型最关键]

AI 智能体不是一个只在服务端运行的孤立机器人，而是实时频道中的一个参与者。用户说话、智能体回复、客户端展示状态、后端控制生命周期，都是围绕同一个 Agora 频道进行的。

## 频道里有哪些角色 [#频道里有哪些角色]

* 用户：在客户端或设备端发起语音输入。
* 智能体：作为频道成员加入，接收音频并播报回复。
* 客户端：负责加入频道、采集设备权限、播放音频、展示转写与状态。
* 后端：负责创建智能体、传入配置、停止或更新会话。

## 设计时要先确认的事 [#设计时要先确认的事]

### 用户和智能体是否在同一个频道 [#用户和智能体是否在同一个频道]

默认推荐共享同一频道，这样语音流、状态同步和事件关联会更清晰。

### 频道与会话的映射关系 [#频道与会话的映射关系]

你需要先决定是一个业务会话对应一个频道，还是一个房间里允许多个用户与多个智能体共享上下文。

### 频道内状态如何同步 [#频道内状态如何同步]

如果客户端界面需要看到字幕、轮次、打断或业务状态，通常还要结合 RTM、Webhook 或自定义数据一起设计。

## 推荐继续阅读 [#推荐继续阅读]

* [智能体如何工作](/zh-CN/ai/concepts)
* [实时音频能力](/zh-CN/realtime-media/speech-to-text/audio-modality)
* [业务数据](/zh-CN/ai/custom-data)
`;
export let structuredData = {
  contents: [{
    heading: "为什么频道模型最关键",
    content: "AI 智能体不是一个只在服务端运行的孤立机器人，而是实时频道中的一个参与者。用户说话、智能体回复、客户端展示状态、后端控制生命周期，都是围绕同一个 Agora 频道进行的。"
  }, {
    heading: "频道里有哪些角色",
    content: "用户：在客户端或设备端发起语音输入。"
  }, {
    heading: "频道里有哪些角色",
    content: "智能体：作为频道成员加入，接收音频并播报回复。"
  }, {
    heading: "频道里有哪些角色",
    content: "客户端：负责加入频道、采集设备权限、播放音频、展示转写与状态。"
  }, {
    heading: "频道里有哪些角色",
    content: "后端：负责创建智能体、传入配置、停止或更新会话。"
  }, {
    heading: "用户和智能体是否在同一个频道",
    content: "默认推荐共享同一频道，这样语音流、状态同步和事件关联会更清晰。"
  }, {
    heading: "频道与会话的映射关系",
    content: "你需要先决定是一个业务会话对应一个频道，还是一个房间里允许多个用户与多个智能体共享上下文。"
  }, {
    heading: "频道内状态如何同步",
    content: "如果客户端界面需要看到字幕、轮次、打断或业务状态，通常还要结合 RTM、Webhook 或自定义数据一起设计。"
  }, {
    heading: "推荐继续阅读",
    content: "智能体如何工作"
  }, {
    heading: "推荐继续阅读",
    content: "实时音频能力"
  }, {
    heading: "推荐继续阅读",
    content: "业务数据"
  }],
  headings: [{
    id: "为什么频道模型最关键",
    content: "为什么频道模型最关键"
  }, {
    id: "频道里有哪些角色",
    content: "频道里有哪些角色"
  }, {
    id: "设计时要先确认的事",
    content: "设计时要先确认的事"
  }, {
    id: "用户和智能体是否在同一个频道",
    content: "用户和智能体是否在同一个频道"
  }, {
    id: "频道与会话的映射关系",
    content: "频道与会话的映射关系"
  }, {
    id: "频道内状态如何同步",
    content: "频道内状态如何同步"
  }, {
    id: "推荐继续阅读",
    content: "推荐继续阅读"
  }]
};
export let toc = [{
  depth: 2,
  url: "#为什么频道模型最关键",
  title: _jsx(_Fragment, {
    children: "为什么频道模型最关键"
  })
}, {
  depth: 2,
  url: "#频道里有哪些角色",
  title: _jsx(_Fragment, {
    children: "频道里有哪些角色"
  })
}, {
  depth: 2,
  url: "#设计时要先确认的事",
  title: _jsx(_Fragment, {
    children: "设计时要先确认的事"
  })
}, {
  depth: 3,
  url: "#用户和智能体是否在同一个频道",
  title: _jsx(_Fragment, {
    children: "用户和智能体是否在同一个频道"
  })
}, {
  depth: 3,
  url: "#频道与会话的映射关系",
  title: _jsx(_Fragment, {
    children: "频道与会话的映射关系"
  })
}, {
  depth: 3,
  url: "#频道内状态如何同步",
  title: _jsx(_Fragment, {
    children: "频道内状态如何同步"
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
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "为什么频道模型最关键",
      children: "为什么频道模型最关键"
    }), `
`, _jsx(_components.p, {
      children: "AI 智能体不是一个只在服务端运行的孤立机器人，而是实时频道中的一个参与者。用户说话、智能体回复、客户端展示状态、后端控制生命周期，都是围绕同一个 Agora 频道进行的。"
    }), `
`, _jsx(_components.h2, {
      id: "频道里有哪些角色",
      children: "频道里有哪些角色"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "用户：在客户端或设备端发起语音输入。"
      }), `
`, _jsx(_components.li, {
        children: "智能体：作为频道成员加入，接收音频并播报回复。"
      }), `
`, _jsx(_components.li, {
        children: "客户端：负责加入频道、采集设备权限、播放音频、展示转写与状态。"
      }), `
`, _jsx(_components.li, {
        children: "后端：负责创建智能体、传入配置、停止或更新会话。"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "设计时要先确认的事",
      children: "设计时要先确认的事"
    }), `
`, _jsx(_components.h3, {
      id: "用户和智能体是否在同一个频道",
      children: "用户和智能体是否在同一个频道"
    }), `
`, _jsx(_components.p, {
      children: "默认推荐共享同一频道，这样语音流、状态同步和事件关联会更清晰。"
    }), `
`, _jsx(_components.h3, {
      id: "频道与会话的映射关系",
      children: "频道与会话的映射关系"
    }), `
`, _jsx(_components.p, {
      children: "你需要先决定是一个业务会话对应一个频道，还是一个房间里允许多个用户与多个智能体共享上下文。"
    }), `
`, _jsx(_components.h3, {
      id: "频道内状态如何同步",
      children: "频道内状态如何同步"
    }), `
`, _jsx(_components.p, {
      children: "如果客户端界面需要看到字幕、轮次、打断或业务状态，通常还要结合 RTM、Webhook 或自定义数据一起设计。"
    }), `
`, _jsx(_components.h2, {
      id: "推荐继续阅读",
      children: "推荐继续阅读"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/concepts",
          children: "智能体如何工作"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/realtime-media/speech-to-text/audio-modality",
          children: "实时音频能力"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/ai/custom-data",
          children: "业务数据"
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
