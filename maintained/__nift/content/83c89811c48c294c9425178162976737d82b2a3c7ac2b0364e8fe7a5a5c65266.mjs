import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "设备控制",
  description: "设备按键、指示灯和基础操作参考。"
};
export let _markdown = `

本页汇总 Convo AI Device Kit R1 的控制方式、设备状态和常用操作。

## 电源管理 [#电源管理]

| 操作    | 方式                     |
| ----- | ---------------------- |
| 开机    | 长按**中间按钮** 3 秒以上       |
| 关机    | 开机状态下长按**中间按钮** 3 秒以上  |
| 充电    | 使用任意 **USB Type-C** 接口 |
| 无电池运行 | 直接接入 Type-C 数据线        |

## 音量控制 [#音量控制]

| 操作  | 方式         |
| --- | ---------- |
| 音量加 | 单击**左侧按钮** |
| 音量减 | 单击**右侧按钮** |

## 配网 [#配网]

| 操作       | 方式                                           |
| -------- | -------------------------------------------- |
| 进入配网模式   | 开机状态下长按**左侧按钮** 3 秒以上                        |
| 使用热点方式配网 | 预先在手机上创建热点：名称 \`AGORA_AI_KIT\`，密码 \`1234567890\` |

## 语音交互 [#语音交互]

| 操作    | 方式                          |
| ----- | --------------------------- |
| 唤醒设备  | 短按**中间按钮**                  |
| 空闲后恢复 | 设备空闲 3 分钟后断开，再次短按**中间按钮**恢复 |

## 角色切换 [#角色切换]

可以通过 Agora Convo AI App，或者按设备右侧的 **Reset Button** 切换 AI 角色。切换后重新唤醒设备即可生效。

## 指示灯状态 [#指示灯状态]

| 灯效     | 状态                   |
| ------ | -------------------- |
| 红绿交替闪烁 | 等待配网                 |
| 红灯闪烁   | 等待联网                 |
| 绿灯闪烁   | 已联网，但 AI 智能体未连接，等待唤醒 |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "本页汇总 Convo AI Device Kit R1 的控制方式、设备状态和常用操作。"
  }, {
    heading: "电源管理",
    content: "操作"
  }, {
    heading: "电源管理",
    content: "方式"
  }, {
    heading: "电源管理",
    content: "开机"
  }, {
    heading: "电源管理",
    content: "长按**中间按钮** 3 秒以上"
  }, {
    heading: "电源管理",
    content: "关机"
  }, {
    heading: "电源管理",
    content: "开机状态下长按**中间按钮** 3 秒以上"
  }, {
    heading: "电源管理",
    content: "充电"
  }, {
    heading: "电源管理",
    content: "使用任意 **USB Type-C** 接口"
  }, {
    heading: "电源管理",
    content: "无电池运行"
  }, {
    heading: "电源管理",
    content: "直接接入 Type-C 数据线"
  }, {
    heading: "音量控制",
    content: "操作"
  }, {
    heading: "音量控制",
    content: "方式"
  }, {
    heading: "音量控制",
    content: "音量加"
  }, {
    heading: "音量控制",
    content: "单击**左侧按钮**"
  }, {
    heading: "音量控制",
    content: "音量减"
  }, {
    heading: "音量控制",
    content: "单击**右侧按钮**"
  }, {
    heading: "配网",
    content: "操作"
  }, {
    heading: "配网",
    content: "方式"
  }, {
    heading: "配网",
    content: "进入配网模式"
  }, {
    heading: "配网",
    content: "开机状态下长按**左侧按钮** 3 秒以上"
  }, {
    heading: "配网",
    content: "使用热点方式配网"
  }, {
    heading: "配网",
    content: "预先在手机上创建热点：名称 `AGORA_AI_KIT`，密码 `1234567890`"
  }, {
    heading: "语音交互",
    content: "操作"
  }, {
    heading: "语音交互",
    content: "方式"
  }, {
    heading: "语音交互",
    content: "唤醒设备"
  }, {
    heading: "语音交互",
    content: "短按**中间按钮**"
  }, {
    heading: "语音交互",
    content: "空闲后恢复"
  }, {
    heading: "语音交互",
    content: "设备空闲 3 分钟后断开，再次短按**中间按钮**恢复"
  }, {
    heading: "角色切换",
    content: "可以通过 Agora Convo AI App，或者按设备右侧的 **Reset Button** 切换 AI 角色。切换后重新唤醒设备即可生效。"
  }, {
    heading: "指示灯状态",
    content: "灯效"
  }, {
    heading: "指示灯状态",
    content: "状态"
  }, {
    heading: "指示灯状态",
    content: "红绿交替闪烁"
  }, {
    heading: "指示灯状态",
    content: "等待配网"
  }, {
    heading: "指示灯状态",
    content: "红灯闪烁"
  }, {
    heading: "指示灯状态",
    content: "等待联网"
  }, {
    heading: "指示灯状态",
    content: "绿灯闪烁"
  }, {
    heading: "指示灯状态",
    content: "已联网，但 AI 智能体未连接，等待唤醒"
  }],
  headings: [{
    id: "电源管理",
    content: "电源管理"
  }, {
    id: "音量控制",
    content: "音量控制"
  }, {
    id: "配网",
    content: "配网"
  }, {
    id: "语音交互",
    content: "语音交互"
  }, {
    id: "角色切换",
    content: "角色切换"
  }, {
    id: "指示灯状态",
    content: "指示灯状态"
  }]
};
export let toc = [{
  depth: 2,
  url: "#电源管理",
  title: _jsx(_Fragment, {
    children: "电源管理"
  })
}, {
  depth: 2,
  url: "#音量控制",
  title: _jsx(_Fragment, {
    children: "音量控制"
  })
}, {
  depth: 2,
  url: "#配网",
  title: _jsx(_Fragment, {
    children: "配网"
  })
}, {
  depth: 2,
  url: "#语音交互",
  title: _jsx(_Fragment, {
    children: "语音交互"
  })
}, {
  depth: 2,
  url: "#角色切换",
  title: _jsx(_Fragment, {
    children: "角色切换"
  })
}, {
  depth: 2,
  url: "#指示灯状态",
  title: _jsx(_Fragment, {
    children: "指示灯状态"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "本页汇总 Convo AI Device Kit R1 的控制方式、设备状态和常用操作。"
    }), `
`, _jsx(_components.h2, {
      id: "电源管理",
      children: "电源管理"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "操作"
          }), _jsx(_components.th, {
            children: "方式"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "开机"
          }), _jsxs(_components.td, {
            children: ["长按", _jsx(_components.strong, {
              children: "中间按钮"
            }), " 3 秒以上"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "关机"
          }), _jsxs(_components.td, {
            children: ["开机状态下长按", _jsx(_components.strong, {
              children: "中间按钮"
            }), " 3 秒以上"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "充电"
          }), _jsxs(_components.td, {
            children: ["使用任意 ", _jsx(_components.strong, {
              children: "USB Type-C"
            }), " 接口"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "无电池运行"
          }), _jsx(_components.td, {
            children: "直接接入 Type-C 数据线"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "音量控制",
      children: "音量控制"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "操作"
          }), _jsx(_components.th, {
            children: "方式"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "音量加"
          }), _jsxs(_components.td, {
            children: ["单击", _jsx(_components.strong, {
              children: "左侧按钮"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "音量减"
          }), _jsxs(_components.td, {
            children: ["单击", _jsx(_components.strong, {
              children: "右侧按钮"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "配网",
      children: "配网"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "操作"
          }), _jsx(_components.th, {
            children: "方式"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "进入配网模式"
          }), _jsxs(_components.td, {
            children: ["开机状态下长按", _jsx(_components.strong, {
              children: "左侧按钮"
            }), " 3 秒以上"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "使用热点方式配网"
          }), _jsxs(_components.td, {
            children: ["预先在手机上创建热点：名称 ", _jsx(_components.code, {
              children: "AGORA_AI_KIT"
            }), "，密码 ", _jsx(_components.code, {
              children: "1234567890"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "语音交互",
      children: "语音交互"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "操作"
          }), _jsx(_components.th, {
            children: "方式"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "唤醒设备"
          }), _jsxs(_components.td, {
            children: ["短按", _jsx(_components.strong, {
              children: "中间按钮"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "空闲后恢复"
          }), _jsxs(_components.td, {
            children: ["设备空闲 3 分钟后断开，再次短按", _jsx(_components.strong, {
              children: "中间按钮"
            }), "恢复"]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "角色切换",
      children: "角色切换"
    }), `
`, _jsxs(_components.p, {
      children: ["可以通过 Agora Convo AI App，或者按设备右侧的 ", _jsx(_components.strong, {
        children: "Reset Button"
      }), " 切换 AI 角色。切换后重新唤醒设备即可生效。"]
    }), `
`, _jsx(_components.h2, {
      id: "指示灯状态",
      children: "指示灯状态"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "灯效"
          }), _jsx(_components.th, {
            children: "状态"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "红绿交替闪烁"
          }), _jsx(_components.td, {
            children: "等待配网"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "红灯闪烁"
          }), _jsx(_components.td, {
            children: "等待联网"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "绿灯闪烁"
          }), _jsx(_components.td, {
            children: "已联网，但 AI 智能体未连接，等待唤醒"
          })]
        })]
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
