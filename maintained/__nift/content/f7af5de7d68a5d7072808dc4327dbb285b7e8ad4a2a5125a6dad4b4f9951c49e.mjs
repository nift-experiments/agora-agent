import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "服务端与扩展",
  description: "覆盖服务端媒体能力、插件扩展能力和生态接入入口。"
};
export let _markdown = `

<div id="rm-rtc-server-sdk"></div>

## RTC 服务端 SDK [#rtc-服务端-sdk]

让后端直接参与 RTC 媒体流的发送、接收和控制。

<div id="rm-sdk-extension"></div>

## SDK 拓展插件 [#sdk-拓展插件]

面向个性化音视频效果和能力增强场景，帮助你在现有 SDK 基础上扩展体验。

<div id="rm-marketplace"></div>

## 云市场 [#云市场]

提供实时互动模块选型、购买和账号打通入口，适合快速接入外部能力。
`;
export let structuredData = {
  contents: [{
    heading: "rtc-服务端-sdk",
    content: "让后端直接参与 RTC 媒体流的发送、接收和控制。"
  }, {
    heading: "sdk-拓展插件",
    content: "面向个性化音视频效果和能力增强场景，帮助你在现有 SDK 基础上扩展体验。"
  }, {
    heading: "云市场",
    content: "提供实时互动模块选型、购买和账号打通入口，适合快速接入外部能力。"
  }],
  headings: [{
    id: "rtc-服务端-sdk",
    content: "RTC 服务端 SDK"
  }, {
    id: "sdk-拓展插件",
    content: "SDK 拓展插件"
  }, {
    id: "云市场",
    content: "云市场"
  }]
};
export let toc = [{
  depth: 2,
  url: "#rtc-服务端-sdk",
  title: _jsx(_Fragment, {
    children: "RTC 服务端 SDK"
  })
}, {
  depth: 2,
  url: "#sdk-拓展插件",
  title: _jsx(_Fragment, {
    children: "SDK 拓展插件"
  })
}, {
  depth: 2,
  url: "#云市场",
  title: _jsx(_Fragment, {
    children: "云市场"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "rtc-服务端-sdk",
      children: "RTC 服务端 SDK"
    }), `
`, _jsx(_components.p, {
      children: "让后端直接参与 RTC 媒体流的发送、接收和控制。"
    }), `
`, `
`, _jsx(_components.h2, {
      id: "sdk-拓展插件",
      children: "SDK 拓展插件"
    }), `
`, _jsx(_components.p, {
      children: "面向个性化音视频效果和能力增强场景，帮助你在现有 SDK 基础上扩展体验。"
    }), `
`, `
`, _jsx(_components.h2, {
      id: "云市场",
      children: "云市场"
    }), `
`, _jsx(_components.p, {
      children: "提供实时互动模块选型、购买和账号打通入口，适合快速接入外部能力。"
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
