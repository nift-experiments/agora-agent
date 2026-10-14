import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "配置设备网络",
  description: "通过配套 Android App，把 R1 设备接入 Wi-Fi。"
};
export let _markdown = `

R1 Kit 在 \`app\` 目录中提供了一个 Android App，用于通过 BLE 帮设备完成联网。这个 App 基于声网的蓝牙配网库构建。

## 配网前请确认 [#配网前请确认]

* 手机已开启蓝牙和定位
* R1 设备处于可发现状态
* 手机与设备距离在 5 米内
* 手机当前连接的是可上网的 2.4 GHz Wi-Fi
* Android 12 及以上系统已授予 \`BLUETOOTH_SCAN\` 和 \`BLUETOOTH_CONNECT\`

## 连接到 Wi-Fi [#连接到-wi-fi]

1. 在 App 弹出权限请求时授权所需权限。
2. 确认当前 Wi-Fi 信息。
3. 输入 Wi-Fi 密码。
4. 扫描并选择目标蓝牙设备。
5. 点击 **Connect** 建立连接。
6. 连接成功后点击 **Configure Network**，把 Wi-Fi 凭据下发给设备。
7. 配网完成后点击 **Disconnect** 断开蓝牙连接。

## 故障排查 [#故障排查]

* **扫描不到设备**：确认蓝牙和定位已开启
* **连接失败**：重新扫描或重启设备
* **配网失败**：确认 Wi-Fi 密码正确且网络可用

## 相关页面 [#相关页面]

* [设备控制](device-controls.md)
* [构建并烧录固件](build-and-flash-firmware.md)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "R1 Kit 在 `app` 目录中提供了一个 Android App，用于通过 BLE 帮设备完成联网。这个 App 基于声网的蓝牙配网库构建。"
  }, {
    heading: "配网前请确认",
    content: "手机已开启蓝牙和定位"
  }, {
    heading: "配网前请确认",
    content: "R1 设备处于可发现状态"
  }, {
    heading: "配网前请确认",
    content: "手机与设备距离在 5 米内"
  }, {
    heading: "配网前请确认",
    content: "手机当前连接的是可上网的 2.4 GHz Wi-Fi"
  }, {
    heading: "配网前请确认",
    content: "Android 12 及以上系统已授予 `BLUETOOTH_SCAN` 和 `BLUETOOTH_CONNECT`"
  }, {
    heading: "连接到-wi-fi",
    content: "在 App 弹出权限请求时授权所需权限。"
  }, {
    heading: "连接到-wi-fi",
    content: "确认当前 Wi-Fi 信息。"
  }, {
    heading: "连接到-wi-fi",
    content: "输入 Wi-Fi 密码。"
  }, {
    heading: "连接到-wi-fi",
    content: "扫描并选择目标蓝牙设备。"
  }, {
    heading: "连接到-wi-fi",
    content: "点击 **Connect** 建立连接。"
  }, {
    heading: "连接到-wi-fi",
    content: "连接成功后点击 **Configure Network**，把 Wi-Fi 凭据下发给设备。"
  }, {
    heading: "连接到-wi-fi",
    content: "配网完成后点击 **Disconnect** 断开蓝牙连接。"
  }, {
    heading: "故障排查",
    content: "**扫描不到设备**：确认蓝牙和定位已开启"
  }, {
    heading: "故障排查",
    content: "**连接失败**：重新扫描或重启设备"
  }, {
    heading: "故障排查",
    content: "**配网失败**：确认 Wi-Fi 密码正确且网络可用"
  }, {
    heading: "相关页面",
    content: "设备控制"
  }, {
    heading: "相关页面",
    content: "构建并烧录固件"
  }],
  headings: [{
    id: "配网前请确认",
    content: "配网前请确认"
  }, {
    id: "连接到-wi-fi",
    content: "连接到 Wi-Fi"
  }, {
    id: "故障排查",
    content: "故障排查"
  }, {
    id: "相关页面",
    content: "相关页面"
  }]
};
export let toc = [{
  depth: 2,
  url: "#配网前请确认",
  title: _jsx(_Fragment, {
    children: "配网前请确认"
  })
}, {
  depth: 2,
  url: "#连接到-wi-fi",
  title: _jsx(_Fragment, {
    children: "连接到 Wi-Fi"
  })
}, {
  depth: 2,
  url: "#故障排查",
  title: _jsx(_Fragment, {
    children: "故障排查"
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
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["R1 Kit 在 ", _jsx(_components.code, {
        children: "app"
      }), " 目录中提供了一个 Android App，用于通过 BLE 帮设备完成联网。这个 App 基于声网的蓝牙配网库构建。"]
    }), `
`, _jsx(_components.h2, {
      id: "配网前请确认",
      children: "配网前请确认"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "手机已开启蓝牙和定位"
      }), `
`, _jsx(_components.li, {
        children: "R1 设备处于可发现状态"
      }), `
`, _jsx(_components.li, {
        children: "手机与设备距离在 5 米内"
      }), `
`, _jsx(_components.li, {
        children: "手机当前连接的是可上网的 2.4 GHz Wi-Fi"
      }), `
`, _jsxs(_components.li, {
        children: ["Android 12 及以上系统已授予 ", _jsx(_components.code, {
          children: "BLUETOOTH_SCAN"
        }), " 和 ", _jsx(_components.code, {
          children: "BLUETOOTH_CONNECT"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "连接到-wi-fi",
      children: "连接到 Wi-Fi"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "在 App 弹出权限请求时授权所需权限。"
      }), `
`, _jsx(_components.li, {
        children: "确认当前 Wi-Fi 信息。"
      }), `
`, _jsx(_components.li, {
        children: "输入 Wi-Fi 密码。"
      }), `
`, _jsx(_components.li, {
        children: "扫描并选择目标蓝牙设备。"
      }), `
`, _jsxs(_components.li, {
        children: ["点击 ", _jsx(_components.strong, {
          children: "Connect"
        }), " 建立连接。"]
      }), `
`, _jsxs(_components.li, {
        children: ["连接成功后点击 ", _jsx(_components.strong, {
          children: "Configure Network"
        }), "，把 Wi-Fi 凭据下发给设备。"]
      }), `
`, _jsxs(_components.li, {
        children: ["配网完成后点击 ", _jsx(_components.strong, {
          children: "Disconnect"
        }), " 断开蓝牙连接。"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "故障排查",
      children: "故障排查"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "扫描不到设备"
        }), "：确认蓝牙和定位已开启"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "连接失败"
        }), "：重新扫描或重启设备"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "配网失败"
        }), "：确认 Wi-Fi 密码正确且网络可用"]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "相关页面",
      children: "相关页面"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "device-controls.md",
          children: "设备控制"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "build-and-flash-firmware.md",
          children: "构建并烧录固件"
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
