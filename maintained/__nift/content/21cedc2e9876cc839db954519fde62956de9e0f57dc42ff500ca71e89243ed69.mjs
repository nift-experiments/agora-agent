import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "基础实时能力",
  description: "以实时互动底座为主线，梳理 RTC、RTM、IM、实时转录翻译和 RTSA 这些核心能力的定位。"
};
export let _markdown = `

<div id="rm-rtc"></div>

## 实时互动 RTC [#实时互动-rtc]

负责音频、视频和频道会话，是通话、直播、会议和互动课堂的实时底座。

<div id="rm-rtm"></div>

## 实时消息 RTM [#实时消息-rtm]

提供低时延、高可靠的消息与状态同步能力，适合频道消息、Presence 和业务协作链路。

<div id="rm-im"></div>

## 即时通讯 IM [#即时通讯-im]

适合更完整的聊天云服务场景，承担高可靠、低时延和全球化消息系统能力。

<div id="rm-speech-to-text"></div>

## 实时转录翻译 [#实时转录翻译]

提供超低延时、高准确率的语音转写与翻译能力，适合字幕、多语言协作和内容理解链路。

<div id="rm-rtsa"></div>

## 媒体流加速 RTSA [#媒体流加速-rtsa]

面向设备与终端场景的实时媒体流和信令传输能力，适合人与物、物与物的实时连接。
`;
export let structuredData = {
  contents: [{
    heading: "实时互动-rtc",
    content: "负责音频、视频和频道会话，是通话、直播、会议和互动课堂的实时底座。"
  }, {
    heading: "实时消息-rtm",
    content: "提供低时延、高可靠的消息与状态同步能力，适合频道消息、Presence 和业务协作链路。"
  }, {
    heading: "即时通讯-im",
    content: "适合更完整的聊天云服务场景，承担高可靠、低时延和全球化消息系统能力。"
  }, {
    heading: "实时转录翻译",
    content: "提供超低延时、高准确率的语音转写与翻译能力，适合字幕、多语言协作和内容理解链路。"
  }, {
    heading: "媒体流加速-rtsa",
    content: "面向设备与终端场景的实时媒体流和信令传输能力，适合人与物、物与物的实时连接。"
  }],
  headings: [{
    id: "实时互动-rtc",
    content: "实时互动 RTC"
  }, {
    id: "实时消息-rtm",
    content: "实时消息 RTM"
  }, {
    id: "即时通讯-im",
    content: "即时通讯 IM"
  }, {
    id: "实时转录翻译",
    content: "实时转录翻译"
  }, {
    id: "媒体流加速-rtsa",
    content: "媒体流加速 RTSA"
  }]
};
export let toc = [{
  depth: 2,
  url: "#实时互动-rtc",
  title: _jsx(_Fragment, {
    children: "实时互动 RTC"
  })
}, {
  depth: 2,
  url: "#实时消息-rtm",
  title: _jsx(_Fragment, {
    children: "实时消息 RTM"
  })
}, {
  depth: 2,
  url: "#即时通讯-im",
  title: _jsx(_Fragment, {
    children: "即时通讯 IM"
  })
}, {
  depth: 2,
  url: "#实时转录翻译",
  title: _jsx(_Fragment, {
    children: "实时转录翻译"
  })
}, {
  depth: 2,
  url: "#媒体流加速-rtsa",
  title: _jsx(_Fragment, {
    children: "媒体流加速 RTSA"
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
      id: "实时互动-rtc",
      children: "实时互动 RTC"
    }), `
`, _jsx(_components.p, {
      children: "负责音频、视频和频道会话，是通话、直播、会议和互动课堂的实时底座。"
    }), `
`, `
`, _jsx(_components.h2, {
      id: "实时消息-rtm",
      children: "实时消息 RTM"
    }), `
`, _jsx(_components.p, {
      children: "提供低时延、高可靠的消息与状态同步能力，适合频道消息、Presence 和业务协作链路。"
    }), `
`, `
`, _jsx(_components.h2, {
      id: "即时通讯-im",
      children: "即时通讯 IM"
    }), `
`, _jsx(_components.p, {
      children: "适合更完整的聊天云服务场景，承担高可靠、低时延和全球化消息系统能力。"
    }), `
`, `
`, _jsx(_components.h2, {
      id: "实时转录翻译",
      children: "实时转录翻译"
    }), `
`, _jsx(_components.p, {
      children: "提供超低延时、高准确率的语音转写与翻译能力，适合字幕、多语言协作和内容理解链路。"
    }), `
`, `
`, _jsx(_components.h2, {
      id: "媒体流加速-rtsa",
      children: "媒体流加速 RTSA"
    }), `
`, _jsx(_components.p, {
      children: "面向设备与终端场景的实时媒体流和信令传输能力，适合人与物、物与物的实时连接。"
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
