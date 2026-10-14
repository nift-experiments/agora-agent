import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "架构概览",
  description: "了解 Convo AI Device Kit 在设备、云端和软件层面的组成方式。"
};
export let _markdown = `

Convo AI Device Kit 构建在声网的 RTSA 或 IoT SDK 以及对话式 AI 引擎之上。RTSA 是面向 IoT 行业的实时音视频客户端能力，为语音 AI 交互提供实时通信底座。

## 方案架构 [#方案架构]

整套方案主要由两部分组成，并通过声网云端能力连接：

* **Convo AI Device Kit**
  * 负责电源管理、蓝牙配对、语音唤醒、OTA 和外围驱动
  * 采集音视频数据并通过 RTSA 传输到 SD-RTN
  * 接收云端返回的音视频并进行播放

* **对话式 AI 引擎**
  * 负责处理从设备上传的音视频流
  * 包括语音活动检测、降噪、回声消除、打断检测、背景人声过滤等能力
  * 再通过 STT、LLM、TTS 或多模态能力形成完整的对话链路

## 硬件架构 [#硬件架构]

R1 Kit 集成了多种硬件能力，用于支持多模态 AI 交互，例如：

* 双屏 LCD / 触控屏（可选）
* 摄像头与视频接口
* 双麦克风阵列
* 扬声器
* 陀螺仪
* 电池接口
* NFC
* USB to UART
* 侧边按钮与 Reset 键

## 软件架构 [#软件架构]

软件包提供一套完整的开发框架，帮助你基于设备、云端和服务端样例快速构建语音 AI 设备方案。

## 相关页面 [#相关页面]

* [规格与兼容性](specifications-and-compatibility.md)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Convo AI Device Kit 构建在声网的 RTSA 或 IoT SDK 以及对话式 AI 引擎之上。RTSA 是面向 IoT 行业的实时音视频客户端能力，为语音 AI 交互提供实时通信底座。"
  }, {
    heading: "方案架构",
    content: "整套方案主要由两部分组成，并通过声网云端能力连接："
  }, {
    heading: "方案架构",
    content: "**Convo AI Device Kit**"
  }, {
    heading: "方案架构",
    content: "负责电源管理、蓝牙配对、语音唤醒、OTA 和外围驱动"
  }, {
    heading: "方案架构",
    content: "采集音视频数据并通过 RTSA 传输到 SD-RTN"
  }, {
    heading: "方案架构",
    content: "接收云端返回的音视频并进行播放"
  }, {
    heading: "方案架构",
    content: "**对话式 AI 引擎**"
  }, {
    heading: "方案架构",
    content: "负责处理从设备上传的音视频流"
  }, {
    heading: "方案架构",
    content: "包括语音活动检测、降噪、回声消除、打断检测、背景人声过滤等能力"
  }, {
    heading: "方案架构",
    content: "再通过 STT、LLM、TTS 或多模态能力形成完整的对话链路"
  }, {
    heading: "硬件架构",
    content: "R1 Kit 集成了多种硬件能力，用于支持多模态 AI 交互，例如："
  }, {
    heading: "硬件架构",
    content: "双屏 LCD / 触控屏（可选）"
  }, {
    heading: "硬件架构",
    content: "摄像头与视频接口"
  }, {
    heading: "硬件架构",
    content: "双麦克风阵列"
  }, {
    heading: "硬件架构",
    content: "扬声器"
  }, {
    heading: "硬件架构",
    content: "陀螺仪"
  }, {
    heading: "硬件架构",
    content: "电池接口"
  }, {
    heading: "硬件架构",
    content: "NFC"
  }, {
    heading: "硬件架构",
    content: "USB to UART"
  }, {
    heading: "硬件架构",
    content: "侧边按钮与 Reset 键"
  }, {
    heading: "软件架构",
    content: "软件包提供一套完整的开发框架，帮助你基于设备、云端和服务端样例快速构建语音 AI 设备方案。"
  }, {
    heading: "相关页面",
    content: "规格与兼容性"
  }],
  headings: [{
    id: "方案架构",
    content: "方案架构"
  }, {
    id: "硬件架构",
    content: "硬件架构"
  }, {
    id: "软件架构",
    content: "软件架构"
  }, {
    id: "相关页面",
    content: "相关页面"
  }]
};
export let toc = [{
  depth: 2,
  url: "#方案架构",
  title: _jsx(_Fragment, {
    children: "方案架构"
  })
}, {
  depth: 2,
  url: "#硬件架构",
  title: _jsx(_Fragment, {
    children: "硬件架构"
  })
}, {
  depth: 2,
  url: "#软件架构",
  title: _jsx(_Fragment, {
    children: "软件架构"
  })
}, {
  depth: 2,
  url: "#相关页面",
  title: _jsx(_Fragment, {
    children: "相关页面"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Convo AI Device Kit 构建在声网的 RTSA 或 IoT SDK 以及对话式 AI 引擎之上。RTSA 是面向 IoT 行业的实时音视频客户端能力，为语音 AI 交互提供实时通信底座。"
    }), `
`, _jsx(_components.h2, {
      id: "方案架构",
      children: "方案架构"
    }), `
`, _jsx(_components.p, {
      children: "整套方案主要由两部分组成，并通过声网云端能力连接："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Convo AI Device Kit"
          })
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "负责电源管理、蓝牙配对、语音唤醒、OTA 和外围驱动"
          }), `
`, _jsx(_components.li, {
            children: "采集音视频数据并通过 RTSA 传输到 SD-RTN"
          }), `
`, _jsx(_components.li, {
            children: "接收云端返回的音视频并进行播放"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "对话式 AI 引擎"
          })
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "负责处理从设备上传的音视频流"
          }), `
`, _jsx(_components.li, {
            children: "包括语音活动检测、降噪、回声消除、打断检测、背景人声过滤等能力"
          }), `
`, _jsx(_components.li, {
            children: "再通过 STT、LLM、TTS 或多模态能力形成完整的对话链路"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "硬件架构",
      children: "硬件架构"
    }), `
`, _jsx(_components.p, {
      children: "R1 Kit 集成了多种硬件能力，用于支持多模态 AI 交互，例如："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "双屏 LCD / 触控屏（可选）"
      }), `
`, _jsx(_components.li, {
        children: "摄像头与视频接口"
      }), `
`, _jsx(_components.li, {
        children: "双麦克风阵列"
      }), `
`, _jsx(_components.li, {
        children: "扬声器"
      }), `
`, _jsx(_components.li, {
        children: "陀螺仪"
      }), `
`, _jsx(_components.li, {
        children: "电池接口"
      }), `
`, _jsx(_components.li, {
        children: "NFC"
      }), `
`, _jsx(_components.li, {
        children: "USB to UART"
      }), `
`, _jsx(_components.li, {
        children: "侧边按钮与 Reset 键"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "软件架构",
      children: "软件架构"
    }), `
`, _jsx(_components.p, {
      children: "软件包提供一套完整的开发框架，帮助你基于设备、云端和服务端样例快速构建语音 AI 设备方案。"
    }), `
`, _jsx(_components.h2, {
      id: "相关页面",
      children: "相关页面"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "specifications-and-compatibility.md",
          children: "规格与兼容性"
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
