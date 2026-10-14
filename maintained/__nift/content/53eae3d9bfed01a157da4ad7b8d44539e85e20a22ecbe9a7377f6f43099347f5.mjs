import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "示例配方",
  description: "浏览覆盖多个 Agora 产品的可运行示例、集成模式与端到端参考实现。"
};
export let _markdown = `

Agora Recipes 是一个持续扩展的跨产品目录，用来集中整理可运行示例、集成模式和更完整的参考实现。

当前公开的第一组集合是 Voice AI。后续如果再加入别的产品 recipes，这个页面会优先按产品分组，再在产品内按实现任务继续展开。

## 产品集合 [#产品集合]

<CardGrid>
  <FeatureCard title="Voice AI">
    当前这组集合主要覆盖对话式智能体与语音工作流。
    当前内容按快速开始、集成模式和场景示例三类展开，后续其它产品集合也会并列放在这里。
  </FeatureCard>
</CardGrid>

## 浏览所有配方 [#浏览所有配方]

<RecipesGallery
  allCategoriesLabel="全部类型"
  allProductsLabel="全部产品"
  allStacksLabel="全部技术栈"
  categoryFilterLabel="配方类型"
  clearFiltersLabel="清除筛选"
  emptyMessage="当前筛选条件下没有匹配的 recipes。"
  items="[
  {
    category: &#x22;快速开始&#x22;,
    description: &#x22;默认的服务端起步路径，适合先跑通一个可运行的 Agora 语音智能体。&#x22;,
    href: &#x22;/zh-CN/api-reference/recipes/python-quickstart&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python&#x22;,
    title: &#x22;Python 快速开始&#x22;,
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;快速开始&#x22;,
    description: &#x22;如果你的服务端本来就主要用 Go，可以直接从这里起步。&#x22;,
    href: &#x22;/zh-CN/api-reference/recipes/golang-quickstart&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Go&#x22;,
    title: &#x22;Golang 快速开始&#x22;,
    tone: &#x22;green&#x22;,
  },
  {
    category: &#x22;快速开始&#x22;,
    description: &#x22;当你想尽快验证浏览器侧体验时，这是更直接的起步方式。&#x22;,
    href: &#x22;/zh-CN/api-reference/recipes/nextjs-quickstart&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Next.js&#x22;,
    title: &#x22;Next.js 快速开始&#x22;,
    tone: &#x22;purple&#x22;,
  },
  {
    category: &#x22;集成模式&#x22;,
    description: &#x22;把默认模型路径替换成你自己的 LLM 集成。&#x22;,
    href: &#x22;/zh-CN/api-reference/recipes/custom-llm&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python&#x22;,
    title: &#x22;自定义 LLM&#x22;,
    tone: &#x22;sand&#x22;,
  },
  {
    category: &#x22;集成模式&#x22;,
    description: &#x22;调整智能体管线里音频模态的处理和流转方式。&#x22;,
    href: &#x22;/zh-CN/api-reference/recipes/custom-modalities&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Audio&#x22;,
    title: &#x22;自定义模态&#x22;,
    tone: &#x22;blue&#x22;,
  },
  {
    category: &#x22;场景示例&#x22;,
    description: &#x22;一个更接近完整产品体验的 wellness 类对话示例。&#x22;,
    href: &#x22;/zh-CN/api-reference/recipes/wellness-coach&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Python&#x22;,
    title: &#x22;Wellness Coach&#x22;,
    tone: &#x22;pink&#x22;,
  },
  {
    category: &#x22;场景示例&#x22;,
    description: &#x22;一个把生物标志物分析叠加到语音交互工作流里的示例。&#x22;,
    href: &#x22;/zh-CN/api-reference/recipes/thymia-biomarkers&#x22;,
    product: &#x22;Voice AI&#x22;,
    stack: &#x22;Healthcare&#x22;,
    title: &#x22;Thymia Biomarkers&#x22;,
    tone: &#x22;green&#x22;,
  },
]"
  productFilterLabel="产品"
  searchPlaceholder="按名称、技术栈或场景搜索 recipes"
  stackFilterLabel="技术栈"
/>

## 相关资源 [#相关资源]

<CardGrid>
  <FeatureCard title="Voice AI Recipes 目录仓库">
    [查看源仓库](https://github.com/AgoraIO-Community/voice-ai-recipes)，了解 recipe 元数据结构和上游目录组织方式。
  </FeatureCard>

  <FeatureCard title="在线目录">
    [打开独立 recipes 目录站](https://v0-voice-ai-recipes.vercel.app)，对照当前文档中的 hub 入口体验。
  </FeatureCard>
</CardGrid>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora Recipes 是一个持续扩展的跨产品目录，用来集中整理可运行示例、集成模式和更完整的参考实现。"
  }, {
    heading: undefined,
    content: "当前公开的第一组集合是 Voice AI。后续如果再加入别的产品 recipes，这个页面会优先按产品分组，再在产品内按实现任务继续展开。"
  }, {
    heading: "产品集合",
    content: `当前这组集合主要覆盖对话式智能体与语音工作流。
当前内容按快速开始、集成模式和场景示例三类展开，后续其它产品集合也会并列放在这里。`
  }, {
    heading: "相关资源",
    content: "查看源仓库，了解 recipe 元数据结构和上游目录组织方式。"
  }, {
    heading: "相关资源",
    content: "打开独立 recipes 目录站，对照当前文档中的 hub 入口体验。"
  }],
  headings: [{
    id: "产品集合",
    content: "产品集合"
  }, {
    id: "浏览所有配方",
    content: "浏览所有配方"
  }, {
    id: "相关资源",
    content: "相关资源"
  }]
};
export let toc = [{
  depth: 2,
  url: "#产品集合",
  title: _jsx(_Fragment, {
    children: "产品集合"
  })
}, {
  depth: 2,
  url: "#浏览所有配方",
  title: _jsx(_Fragment, {
    children: "浏览所有配方"
  })
}, {
  depth: 2,
  url: "#相关资源",
  title: _jsx(_Fragment, {
    children: "相关资源"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    ...props.components
  }, { CardGrid, FeatureCard, RecipesGallery } = _components;
  if (!CardGrid)
    _missingMdxReference("CardGrid", true);
  if (!FeatureCard)
    _missingMdxReference("FeatureCard", true);
  if (!RecipesGallery)
    _missingMdxReference("RecipesGallery", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Agora Recipes 是一个持续扩展的跨产品目录，用来集中整理可运行示例、集成模式和更完整的参考实现。"
    }), `
`, _jsx(_components.p, {
      children: "当前公开的第一组集合是 Voice AI。后续如果再加入别的产品 recipes，这个页面会优先按产品分组，再在产品内按实现任务继续展开。"
    }), `
`, _jsx(_components.h2, {
      id: "产品集合",
      children: "产品集合"
    }), `
`, _jsx(CardGrid, {
      children: _jsx(FeatureCard, {
        title: "Voice AI",
        children: _jsx(_components.p, {
          children: `当前这组集合主要覆盖对话式智能体与语音工作流。
当前内容按快速开始、集成模式和场景示例三类展开，后续其它产品集合也会并列放在这里。`
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "浏览所有配方",
      children: "浏览所有配方"
    }), `
`, _jsx(RecipesGallery, {
      allCategoriesLabel: "全部类型",
      allProductsLabel: "全部产品",
      allStacksLabel: "全部技术栈",
      categoryFilterLabel: "配方类型",
      clearFiltersLabel: "清除筛选",
      emptyMessage: "当前筛选条件下没有匹配的 recipes。",
      items: [{
        category: "快速开始",
        description: "默认的服务端起步路径，适合先跑通一个可运行的 Agora 语音智能体。",
        href: "/zh-CN/api-reference/recipes/python-quickstart",
        product: "Voice AI",
        stack: "Python",
        title: "Python 快速开始",
        tone: "blue"
      }, {
        category: "快速开始",
        description: "如果你的服务端本来就主要用 Go，可以直接从这里起步。",
        href: "/zh-CN/api-reference/recipes/golang-quickstart",
        product: "Voice AI",
        stack: "Go",
        title: "Golang 快速开始",
        tone: "green"
      }, {
        category: "快速开始",
        description: "当你想尽快验证浏览器侧体验时，这是更直接的起步方式。",
        href: "/zh-CN/api-reference/recipes/nextjs-quickstart",
        product: "Voice AI",
        stack: "Next.js",
        title: "Next.js 快速开始",
        tone: "purple"
      }, {
        category: "集成模式",
        description: "把默认模型路径替换成你自己的 LLM 集成。",
        href: "/zh-CN/api-reference/recipes/custom-llm",
        product: "Voice AI",
        stack: "Python",
        title: "自定义 LLM",
        tone: "sand"
      }, {
        category: "集成模式",
        description: "调整智能体管线里音频模态的处理和流转方式。",
        href: "/zh-CN/api-reference/recipes/custom-modalities",
        product: "Voice AI",
        stack: "Audio",
        title: "自定义模态",
        tone: "blue"
      }, {
        category: "场景示例",
        description: "一个更接近完整产品体验的 wellness 类对话示例。",
        href: "/zh-CN/api-reference/recipes/wellness-coach",
        product: "Voice AI",
        stack: "Python",
        title: "Wellness Coach",
        tone: "pink"
      }, {
        category: "场景示例",
        description: "一个把生物标志物分析叠加到语音交互工作流里的示例。",
        href: "/zh-CN/api-reference/recipes/thymia-biomarkers",
        product: "Voice AI",
        stack: "Healthcare",
        title: "Thymia Biomarkers",
        tone: "green"
      }],
      productFilterLabel: "产品",
      searchPlaceholder: "按名称、技术栈或场景搜索 recipes",
      stackFilterLabel: "技术栈"
    }), `
`, _jsx(_components.h2, {
      id: "相关资源",
      children: "相关资源"
    }), `
`, _jsxs(CardGrid, {
      children: [_jsx(FeatureCard, {
        title: "Voice AI Recipes 目录仓库",
        children: _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "https://github.com/AgoraIO-Community/voice-ai-recipes",
            children: "查看源仓库"
          }), "，了解 recipe 元数据结构和上游目录组织方式。"]
        })
      }), _jsx(FeatureCard, {
        title: "在线目录",
        children: _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "https://v0-voice-ai-recipes.vercel.app",
            children: "打开独立 recipes 目录站"
          }), "，对照当前文档中的 hub 入口体验。"]
        })
      })]
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
