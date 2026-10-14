import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "VideoScenario",
  description: "视频应用场景类型。"
};
export let _markdown = `

<a id="enum_videoapplicationscenariotype__parameters" />

## 枚举值 [#枚举值]

### \`APPLICATION_SCENARIO_GENERAL\` [#application_scenario_general]

（0）：默认通用场景。

### \`APPLICATION_SCENARIO_MEETING\` [#application_scenario_meeting]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果用户调用了 \`setDualStreamMode(Constants.SimulcastStreamMode mode, SimulcastStreamConfig streamConfig)\` 并设置为永不发送视频小流（\`DISABLE_SIMULCAST_STREAM\` ），则会议场景下视频小流的动态调整将不生效。
  </CalloutDescription>
</CalloutContainer>

（1）：适用于会议场景。SDK 会自动启用以下策略：

* 在需要视频小流具备高码率的会议场景中，SDK 会启用多种网络拥塞应对技术，提升视频小流性能，确保订阅端流畅接收；
* 实时监控视频大流的订阅人数，并动态调整配置：
  * 若无人订阅视频大流，SDK 会自动降低其码率和帧率以节省上行带宽；
  * 若有人订阅视频大流，SDK 会将其重置为最近一次调用 setVideoEncoderConfiguration 设置的 VideoEncoderConfiguration 配置，若未设置，则使用以下默认值：分辨率为 960 × 540，帧率为 15 fps，码率为 1000 Kbps；
* 实时监控视频小流的订阅人数，并动态启用或禁用该流：
  * 若无人订阅视频小流，SDK 会自动禁用该流以节省上行带宽；
  * 若有人订阅视频小流，SDK 会启用该流并重置为最近一次调用 setDualStreamMode(Constants.SimulcastStreamMode mode, SimulcastStreamConfig streamConfig) 设置的 SimulcastStreamConfig 配置，若未设置，则使用以下默认值：分辨率为 480 × 272，帧率为 15 fps，码率为 500 Kbps。

### \`APPLICATION_SCENARIO_1V1\` [#application_scenario_1v1]

（2）：适用于一对一直播场景。为满足低延迟和高质量视频的需求，SDK 优化了策略，在视频质量、首帧渲染、中低端设备延迟以及弱网环境下的流畅性方面提升了性能。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该枚举值仅适用于主播对主播的场景。
  </CalloutDescription>
</CalloutContainer>

### \`APPLICATION_SCENARIO_LIVESHOW\` [#application_scenario_liveshow]

（3）：适用于秀场场景。在该场景中，快速渲染和高画质至关重要。SDK 进行了多项优化，包括自动启用音视频帧加速渲染以最小化首帧延迟（无需调用 [enableInstantMediaRendering](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_enableinstantmediarendering) ），并启用 B 帧编码以提升图像质量和带宽效率。即使在网络较差或低端设备上，也能提供更高的视频质量和流畅播放体验。
`;
export let structuredData = {
  contents: [{
    heading: "application_scenario_general",
    content: "（0）：默认通用场景。"
  }, {
    heading: "application_scenario_meeting",
    content: "如果用户调用了 `setDualStreamMode(Constants.SimulcastStreamMode mode, SimulcastStreamConfig streamConfig)` 并设置为永不发送视频小流（`DISABLE_SIMULCAST_STREAM` ），则会议场景下视频小流的动态调整将不生效。"
  }, {
    heading: "application_scenario_meeting",
    content: "（1）：适用于会议场景。SDK 会自动启用以下策略："
  }, {
    heading: "application_scenario_meeting",
    content: "在需要视频小流具备高码率的会议场景中，SDK 会启用多种网络拥塞应对技术，提升视频小流性能，确保订阅端流畅接收；"
  }, {
    heading: "application_scenario_meeting",
    content: "实时监控视频大流的订阅人数，并动态调整配置："
  }, {
    heading: "application_scenario_meeting",
    content: "若无人订阅视频大流，SDK 会自动降低其码率和帧率以节省上行带宽；"
  }, {
    heading: "application_scenario_meeting",
    content: "若有人订阅视频大流，SDK 会将其重置为最近一次调用 setVideoEncoderConfiguration 设置的 VideoEncoderConfiguration 配置，若未设置，则使用以下默认值：分辨率为 960 × 540，帧率为 15 fps，码率为 1000 Kbps；"
  }, {
    heading: "application_scenario_meeting",
    content: "实时监控视频小流的订阅人数，并动态启用或禁用该流："
  }, {
    heading: "application_scenario_meeting",
    content: "若无人订阅视频小流，SDK 会自动禁用该流以节省上行带宽；"
  }, {
    heading: "application_scenario_meeting",
    content: "若有人订阅视频小流，SDK 会启用该流并重置为最近一次调用 setDualStreamMode(Constants.SimulcastStreamMode mode, SimulcastStreamConfig streamConfig) 设置的 SimulcastStreamConfig 配置，若未设置，则使用以下默认值：分辨率为 480 × 272，帧率为 15 fps，码率为 500 Kbps。"
  }, {
    heading: "application_scenario_1v1",
    content: "（2）：适用于一对一直播场景。为满足低延迟和高质量视频的需求，SDK 优化了策略，在视频质量、首帧渲染、中低端设备延迟以及弱网环境下的流畅性方面提升了性能。"
  }, {
    heading: "application_scenario_1v1",
    content: "该枚举值仅适用于主播对主播的场景。"
  }, {
    heading: "application_scenario_liveshow",
    content: "（3）：适用于秀场场景。在该场景中，快速渲染和高画质至关重要。SDK 进行了多项优化，包括自动启用音视频帧加速渲染以最小化首帧延迟（无需调用 enableInstantMediaRendering ），并启用 B 帧编码以提升图像质量和带宽效率。即使在网络较差或低端设备上，也能提供更高的视频质量和流畅播放体验。"
  }],
  headings: [{
    id: "枚举值",
    content: "枚举值"
  }, {
    id: "application_scenario_general",
    content: "`APPLICATION_SCENARIO_GENERAL`"
  }, {
    id: "application_scenario_meeting",
    content: "`APPLICATION_SCENARIO_MEETING`"
  }, {
    id: "application_scenario_1v1",
    content: "`APPLICATION_SCENARIO_1V1`"
  }, {
    id: "application_scenario_liveshow",
    content: "`APPLICATION_SCENARIO_LIVESHOW`"
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
  url: "#application_scenario_general",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "APPLICATION_SCENARIO_GENERAL"
    })
  })
}, {
  depth: 3,
  url: "#application_scenario_meeting",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "APPLICATION_SCENARIO_MEETING"
    })
  })
}, {
  depth: 3,
  url: "#application_scenario_1v1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "APPLICATION_SCENARIO_1V1"
    })
  })
}, {
  depth: 3,
  url: "#application_scenario_liveshow",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "APPLICATION_SCENARIO_LIVESHOW"
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
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "enum_videoapplicationscenariotype__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "枚举值",
      children: "枚举值"
    }), `
`, _jsx(_components.h3, {
      id: "application_scenario_general",
      children: _jsx(_components.code, {
        children: "APPLICATION_SCENARIO_GENERAL"
      })
    }), `
`, _jsx(_components.p, {
      children: "（0）：默认通用场景。"
    }), `
`, _jsx(_components.h3, {
      id: "application_scenario_meeting",
      children: _jsx(_components.code, {
        children: "APPLICATION_SCENARIO_MEETING"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果用户调用了 ", _jsx(_components.code, {
            children: "setDualStreamMode(Constants.SimulcastStreamMode mode, SimulcastStreamConfig streamConfig)"
          }), " 并设置为永不发送视频小流（", _jsx(_components.code, {
            children: "DISABLE_SIMULCAST_STREAM"
          }), " ），则会议场景下视频小流的动态调整将不生效。"]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "（1）：适用于会议场景。SDK 会自动启用以下策略："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "在需要视频小流具备高码率的会议场景中，SDK 会启用多种网络拥塞应对技术，提升视频小流性能，确保订阅端流畅接收；"
      }), `
`, _jsxs(_components.li, {
        children: ["实时监控视频大流的订阅人数，并动态调整配置：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "若无人订阅视频大流，SDK 会自动降低其码率和帧率以节省上行带宽；"
          }), `
`, _jsx(_components.li, {
            children: "若有人订阅视频大流，SDK 会将其重置为最近一次调用 setVideoEncoderConfiguration 设置的 VideoEncoderConfiguration 配置，若未设置，则使用以下默认值：分辨率为 960 × 540，帧率为 15 fps，码率为 1000 Kbps；"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["实时监控视频小流的订阅人数，并动态启用或禁用该流：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "若无人订阅视频小流，SDK 会自动禁用该流以节省上行带宽；"
          }), `
`, _jsx(_components.li, {
            children: "若有人订阅视频小流，SDK 会启用该流并重置为最近一次调用 setDualStreamMode(Constants.SimulcastStreamMode mode, SimulcastStreamConfig streamConfig) 设置的 SimulcastStreamConfig 配置，若未设置，则使用以下默认值：分辨率为 480 × 272，帧率为 15 fps，码率为 500 Kbps。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "application_scenario_1v1",
      children: _jsx(_components.code, {
        children: "APPLICATION_SCENARIO_1V1"
      })
    }), `
`, _jsx(_components.p, {
      children: "（2）：适用于一对一直播场景。为满足低延迟和高质量视频的需求，SDK 优化了策略，在视频质量、首帧渲染、中低端设备延迟以及弱网环境下的流畅性方面提升了性能。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该枚举值仅适用于主播对主播的场景。"
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "application_scenario_liveshow",
      children: _jsx(_components.code, {
        children: "APPLICATION_SCENARIO_LIVESHOW"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（3）：适用于秀场场景。在该场景中，快速渲染和高画质至关重要。SDK 进行了多项优化，包括自动启用音视频帧加速渲染以最小化首帧延迟（无需调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_enableinstantmediarendering",
        children: "enableInstantMediaRendering"
      }), " ），并启用 B 帧编码以提升图像质量和带宽效率。即使在网络较差或低端设备上，也能提供更高的视频质量和流畅播放体验。"]
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
