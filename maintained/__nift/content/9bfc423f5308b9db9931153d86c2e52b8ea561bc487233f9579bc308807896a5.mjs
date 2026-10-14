import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "安全",
  description: "安全文档覆盖鉴权、访问控制和生产环境边界，是实时系统上线前必须补齐的一层。"
};
export let _markdown = `

安全与合规是实时互动的基本要求。声网遵守不同国家和行业的合规性要求，打造安全可靠的云服务，目前已通过 ISO/IEC 27001、ISO/IEC 27017、ISO/IEC 27018、ISO/IEC 27701 认证、公安部网络安全等级保护三级认证，并获得 SOC2 Type II 报告。

此外，声网产品在设计和构建过程中，根据音视频传输领域常见的攻击类型和安全需求，还集成了多重防护措施，满足客户及终端用户的数据安全要求。

| 防护措施   | 是否默认应用 | 推荐场景                             |
| ------ | ------ | -------------------------------- |
| 资源隔离   | 是      | 所有实时场景。                          |
| 频道隔离   | 是      | 所有实时场景。                          |
| 身份认证   | 否      | 声网推荐正式生产阶段的 App 均使用该措施。          |
| 加密     | 否      | 对于有保密需求的实时互动场景，声网推荐使用该措施。        |
| 限定访问区域 | 否      | 适用于将音视频数据及实时消息数据传输限定在某一区域范围内的场景。 |

## 资源隔离 [#资源隔离]

客户在使用声网 SDK 或服务前，需要先在[声网控制台](https://console.shengwang.cn/)新建项目。成功创建后，声网会自动为每个项目分配一个用于识别项目的 App ID。不同的项目之间彼此独立，通话无法互通，客户可以通过使用项目对应的 App ID，隔离不同的项目。

## 频道隔离 [#频道隔离]

声网为每路音频、视频或消息传输建立单独且逻辑隔离的通道，即频道。在 App ID 一致的前提下，只有在同一频道内的用户才可以进行对应资源（音频、视频、消息）的访问，进行互动。

## 身份认证 [#身份认证]

除上述基本保障外，声网还提供动态 Token 对即将加入频道的终端用户进行鉴权。

目前声网提供了如下两种认证方式：

* 基于 App ID 认证。
* 基于 Token 认证。在采用 Token 认证方式后，客户可通过 App ID 和 App 证书生成 Token，并使用该 Token 对终端用户进行身份认证。

动态 Token 从以下几个方面提供安全保障：

* Token 采用业界标准化的 HMAC-SHA256 加密方案，可对 App ID 和频道名称等重要信息进行加密处理，保证不会泄露。
* 支持自定义 Token 有效期。Token 的默认有效期为 24 小时。客户可以根据自己的安全需求自定义 Token 的服务有效期。
* 支持定制不同的服务权限。

详细的生成 Token 的方法及注意事项，请参考[使用 Token 鉴权](https://docportal.shengwang.cn/cn/video-call-4.x/token_server_android_ng?platform=Android)。

## 数据加密 [#数据加密]

对于对互动内容有保密需求的场景，声网还提供了传输加密和内容加密功能。

### 传输加密 [#传输加密]

为保证数据在传输过程中的保密性，声网各产品和服务均实施了覆盖全数据链路的传输加密机制，并采用业内主流的强加密算法。其中：

* RTC Native SDK 和 RTM Native SDK 使用 TLS (Transport Layer Security) 加密协议。
* RTC Web SDK 和 RTM Web SDK 使用 SSL (Secure Sockets Layer) 加密协议。

### 内容加密 [#内容加密]

下图分别展示了 RTC Native SDK 和 Web SDK 应用加密功能后的数据传输流程：

<Tabs groupId="platform">
<TabsList>
  <TabsTrigger value="native">Native SDK</TabsTrigger>
  <TabsTrigger value="web">Web SDK</TabsTrigger>
</TabsList>

<TabsContent value="native">
![Native 平台加密传输](/img/security/encryption-native.png)
</TabsContent>

<TabsContent value="web">
![Web 平台加密传输](/img/security/encryption-web.png)
</TabsContent>
</Tabs>

#### 内置加密 [#内置加密]

声网 SDK 均内置多种加密算法。客户可以通过该功能对音视频内容进行加密。该加密功能可对所有传输的音视频流进行端到端加密。使用时，客户可以自行配置使用的加密算法。音视频数据在发送端完成加密后，在接收端完成解密，数据以密文形式进行网络传输。客户自行对密钥进行管理，包括密钥的生成、存储、传输和校验等。除涉及 WebRTC 服务外，声网不接触密钥，也无法对密文数据进行解密。

在 WebRTC 服务中，声网需要在服务端进行数据解密和协议转换。声网已实施安全的密钥传输和使用机制，保护客户的密钥不被泄露。

#### 自定义加密 [#自定义加密]

如果使用的是声网 RTC Native SDK，除内置加密外，客户还可以使用自定义加密功能。声网可以将发送前和接收后的音视频数据通过回调发给 App，App 再自行选择加密算法和密钥。自定义加密下，声网接触不到任何加密信息，适用于安全需求更高的场景。

不同平台设置加密方案的步骤详见：

* [Android](https://docportal.shengwang.cn/cn/live-streaming-premium-4.x/channel_encryption_android_ng?platform=Android)

* [iOS](https://docportal.shengwang.cn/cn/live-streaming-premium-4.x/channel_encryption_apple_ng?platform=iOS)

* [macOS](https://docportal.shengwang.cn/cn/live-streaming-premium-4.x/channel_encryption_apple_ng?platform=macOS)

* [Web](https://docportal.shengwang.cn/cn/live-streaming-premium-4.x/channel_encryption_web_ng?platform=Web)

* [Windows](https://docportal.shengwang.cn/cn/live-streaming-premium-4.x/channel_encryption_windows_ng?platform=Windows)

## 限定访问区域 [#限定访问区域]

为适应不同国家或地区的法律法规，声网支持限定访问区域功能。开启限定访问区域功能后，不论用户在哪个区域使用你的 App，SDK 都只会访问指定区域的声网服务器。

例如你指定了北美为访问区域，假设有两位用户分别从北美和中国连接声网服务器：

| 指定的访问区域 | App 用户所在区域 | SDK 实际访问的区域 | 连接后的用户体验 1 |
| ------- | ---------- | ----------- | ---------- |
| 北美      | 北美         | 北美          | 正常         |
| 北美      | 中国         | 北美          | 可能受到较大影响 2 |

<CalloutContainer type="info">
  <CalloutTitle>
    信息
  </CalloutTitle>

  <CalloutDescription>
    * <sup>1</sup> 如果指定区域的服务器都不可用，SDK 会直接报错。
    * <sup>2</sup> 由于指定区域与 App 用户所在区域之间存在跨区域公共互联网，公共互联网网络质量较差会导致音视频体验受到影响。
  </CalloutDescription>
</CalloutContainer>

具体使用方法，详见：

* [Android](https://docportal.shengwang.cn/cn/live-streaming-premium-4.x/region_android_ng?platform=Android)

* [iOS](https://docportal.shengwang.cn/cn/live-streaming-premium-4.x/region_apple_ng?platform=iOS)

* [macOS](https://docportal.shengwang.cn/cn/live-streaming-premium-4.x/region_apple_ng?platform=macOS)

* [Web](https://docportal.shengwang.cn/cn/live-streaming-premium-4.x/region_web_ng_rtc?platform=Web)

* [Windows](hhttps://docportal.shengwang.cn/cn/live-streaming-premium-4.x/region_windows_ng?platform=Windows)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "安全与合规是实时互动的基本要求。声网遵守不同国家和行业的合规性要求，打造安全可靠的云服务，目前已通过 ISO/IEC 27001、ISO/IEC 27017、ISO/IEC 27018、ISO/IEC 27701 认证、公安部网络安全等级保护三级认证，并获得 SOC2 Type II 报告。"
  }, {
    heading: undefined,
    content: "此外，声网产品在设计和构建过程中，根据音视频传输领域常见的攻击类型和安全需求，还集成了多重防护措施，满足客户及终端用户的数据安全要求。"
  }, {
    heading: undefined,
    content: "防护措施"
  }, {
    heading: undefined,
    content: "是否默认应用"
  }, {
    heading: undefined,
    content: "推荐场景"
  }, {
    heading: undefined,
    content: "资源隔离"
  }, {
    heading: undefined,
    content: "是"
  }, {
    heading: undefined,
    content: "所有实时场景。"
  }, {
    heading: undefined,
    content: "频道隔离"
  }, {
    heading: undefined,
    content: "是"
  }, {
    heading: undefined,
    content: "所有实时场景。"
  }, {
    heading: undefined,
    content: "身份认证"
  }, {
    heading: undefined,
    content: "否"
  }, {
    heading: undefined,
    content: "声网推荐正式生产阶段的 App 均使用该措施。"
  }, {
    heading: undefined,
    content: "加密"
  }, {
    heading: undefined,
    content: "否"
  }, {
    heading: undefined,
    content: "对于有保密需求的实时互动场景，声网推荐使用该措施。"
  }, {
    heading: undefined,
    content: "限定访问区域"
  }, {
    heading: undefined,
    content: "否"
  }, {
    heading: undefined,
    content: "适用于将音视频数据及实时消息数据传输限定在某一区域范围内的场景。"
  }, {
    heading: "资源隔离",
    content: "客户在使用声网 SDK 或服务前，需要先在声网控制台新建项目。成功创建后，声网会自动为每个项目分配一个用于识别项目的 App ID。不同的项目之间彼此独立，通话无法互通，客户可以通过使用项目对应的 App ID，隔离不同的项目。"
  }, {
    heading: "频道隔离",
    content: "声网为每路音频、视频或消息传输建立单独且逻辑隔离的通道，即频道。在 App ID 一致的前提下，只有在同一频道内的用户才可以进行对应资源（音频、视频、消息）的访问，进行互动。"
  }, {
    heading: "身份认证",
    content: "除上述基本保障外，声网还提供动态 Token 对即将加入频道的终端用户进行鉴权。"
  }, {
    heading: "身份认证",
    content: "目前声网提供了如下两种认证方式："
  }, {
    heading: "身份认证",
    content: "基于 App ID 认证。"
  }, {
    heading: "身份认证",
    content: "基于 Token 认证。在采用 Token 认证方式后，客户可通过 App ID 和 App 证书生成 Token，并使用该 Token 对终端用户进行身份认证。"
  }, {
    heading: "身份认证",
    content: "动态 Token 从以下几个方面提供安全保障："
  }, {
    heading: "身份认证",
    content: "Token 采用业界标准化的 HMAC-SHA256 加密方案，可对 App ID 和频道名称等重要信息进行加密处理，保证不会泄露。"
  }, {
    heading: "身份认证",
    content: "支持自定义 Token 有效期。Token 的默认有效期为 24 小时。客户可以根据自己的安全需求自定义 Token 的服务有效期。"
  }, {
    heading: "身份认证",
    content: "支持定制不同的服务权限。"
  }, {
    heading: "身份认证",
    content: "详细的生成 Token 的方法及注意事项，请参考使用 Token 鉴权。"
  }, {
    heading: "数据加密",
    content: "对于对互动内容有保密需求的场景，声网还提供了传输加密和内容加密功能。"
  }, {
    heading: "传输加密",
    content: "为保证数据在传输过程中的保密性，声网各产品和服务均实施了覆盖全数据链路的传输加密机制，并采用业内主流的强加密算法。其中："
  }, {
    heading: "传输加密",
    content: "RTC Native SDK 和 RTM Native SDK 使用 TLS (Transport Layer Security) 加密协议。"
  }, {
    heading: "传输加密",
    content: "RTC Web SDK 和 RTM Web SDK 使用 SSL (Secure Sockets Layer) 加密协议。"
  }, {
    heading: "内容加密",
    content: "下图分别展示了 RTC Native SDK 和 Web SDK 应用加密功能后的数据传输流程："
  }, {
    heading: "内置加密",
    content: "声网 SDK 均内置多种加密算法。客户可以通过该功能对音视频内容进行加密。该加密功能可对所有传输的音视频流进行端到端加密。使用时，客户可以自行配置使用的加密算法。音视频数据在发送端完成加密后，在接收端完成解密，数据以密文形式进行网络传输。客户自行对密钥进行管理，包括密钥的生成、存储、传输和校验等。除涉及 WebRTC 服务外，声网不接触密钥，也无法对密文数据进行解密。"
  }, {
    heading: "内置加密",
    content: "在 WebRTC 服务中，声网需要在服务端进行数据解密和协议转换。声网已实施安全的密钥传输和使用机制，保护客户的密钥不被泄露。"
  }, {
    heading: "自定义加密",
    content: "如果使用的是声网 RTC Native SDK，除内置加密外，客户还可以使用自定义加密功能。声网可以将发送前和接收后的音视频数据通过回调发给 App，App 再自行选择加密算法和密钥。自定义加密下，声网接触不到任何加密信息，适用于安全需求更高的场景。"
  }, {
    heading: "自定义加密",
    content: "不同平台设置加密方案的步骤详见："
  }, {
    heading: "自定义加密",
    content: "Android"
  }, {
    heading: "自定义加密",
    content: "iOS"
  }, {
    heading: "自定义加密",
    content: "macOS"
  }, {
    heading: "自定义加密",
    content: "Web"
  }, {
    heading: "自定义加密",
    content: "Windows"
  }, {
    heading: "限定访问区域",
    content: "为适应不同国家或地区的法律法规，声网支持限定访问区域功能。开启限定访问区域功能后，不论用户在哪个区域使用你的 App，SDK 都只会访问指定区域的声网服务器。"
  }, {
    heading: "限定访问区域",
    content: "例如你指定了北美为访问区域，假设有两位用户分别从北美和中国连接声网服务器："
  }, {
    heading: "限定访问区域",
    content: "指定的访问区域"
  }, {
    heading: "限定访问区域",
    content: "App 用户所在区域"
  }, {
    heading: "限定访问区域",
    content: "SDK 实际访问的区域"
  }, {
    heading: "限定访问区域",
    content: "连接后的用户体验 1"
  }, {
    heading: "限定访问区域",
    content: "北美"
  }, {
    heading: "限定访问区域",
    content: "北美"
  }, {
    heading: "限定访问区域",
    content: "北美"
  }, {
    heading: "限定访问区域",
    content: "正常"
  }, {
    heading: "限定访问区域",
    content: "北美"
  }, {
    heading: "限定访问区域",
    content: "中国"
  }, {
    heading: "限定访问区域",
    content: "北美"
  }, {
    heading: "限定访问区域",
    content: "可能受到较大影响 2"
  }, {
    heading: "限定访问区域",
    content: "<sup>1</sup> 如果指定区域的服务器都不可用，SDK 会直接报错。"
  }, {
    heading: "限定访问区域",
    content: "<sup>2</sup> 由于指定区域与 App 用户所在区域之间存在跨区域公共互联网，公共互联网网络质量较差会导致音视频体验受到影响。"
  }, {
    heading: "限定访问区域",
    content: "具体使用方法，详见："
  }, {
    heading: "限定访问区域",
    content: "Android"
  }, {
    heading: "限定访问区域",
    content: "iOS"
  }, {
    heading: "限定访问区域",
    content: "macOS"
  }, {
    heading: "限定访问区域",
    content: "Web"
  }, {
    heading: "限定访问区域",
    content: "Windows"
  }],
  headings: [{
    id: "资源隔离",
    content: "资源隔离"
  }, {
    id: "频道隔离",
    content: "频道隔离"
  }, {
    id: "身份认证",
    content: "身份认证"
  }, {
    id: "数据加密",
    content: "数据加密"
  }, {
    id: "传输加密",
    content: "传输加密"
  }, {
    id: "内容加密",
    content: "内容加密"
  }, {
    id: "内置加密",
    content: "内置加密"
  }, {
    id: "自定义加密",
    content: "自定义加密"
  }, {
    id: "限定访问区域",
    content: "限定访问区域"
  }]
};
export let toc = [{
  depth: 2,
  url: "#资源隔离",
  title: _jsx(_Fragment, {
    children: "资源隔离"
  })
}, {
  depth: 2,
  url: "#频道隔离",
  title: _jsx(_Fragment, {
    children: "频道隔离"
  })
}, {
  depth: 2,
  url: "#身份认证",
  title: _jsx(_Fragment, {
    children: "身份认证"
  })
}, {
  depth: 2,
  url: "#数据加密",
  title: _jsx(_Fragment, {
    children: "数据加密"
  })
}, {
  depth: 3,
  url: "#传输加密",
  title: _jsx(_Fragment, {
    children: "传输加密"
  })
}, {
  depth: 3,
  url: "#内容加密",
  title: _jsx(_Fragment, {
    children: "内容加密"
  })
}, {
  depth: 4,
  url: "#内置加密",
  title: _jsx(_Fragment, {
    children: "内置加密"
  })
}, {
  depth: 4,
  url: "#自定义加密",
  title: _jsx(_Fragment, {
    children: "自定义加密"
  })
}, {
  depth: 2,
  url: "#限定访问区域",
  title: _jsx(_Fragment, {
    children: "限定访问区域"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
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
    children: [_jsx(_components.p, {
      children: "安全与合规是实时互动的基本要求。声网遵守不同国家和行业的合规性要求，打造安全可靠的云服务，目前已通过 ISO/IEC 27001、ISO/IEC 27017、ISO/IEC 27018、ISO/IEC 27701 认证、公安部网络安全等级保护三级认证，并获得 SOC2 Type II 报告。"
    }), `
`, _jsx(_components.p, {
      children: "此外，声网产品在设计和构建过程中，根据音视频传输领域常见的攻击类型和安全需求，还集成了多重防护措施，满足客户及终端用户的数据安全要求。"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "防护措施"
          }), _jsx(_components.th, {
            children: "是否默认应用"
          }), _jsx(_components.th, {
            children: "推荐场景"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "资源隔离"
          }), _jsx(_components.td, {
            children: "是"
          }), _jsx(_components.td, {
            children: "所有实时场景。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "频道隔离"
          }), _jsx(_components.td, {
            children: "是"
          }), _jsx(_components.td, {
            children: "所有实时场景。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "身份认证"
          }), _jsx(_components.td, {
            children: "否"
          }), _jsx(_components.td, {
            children: "声网推荐正式生产阶段的 App 均使用该措施。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "加密"
          }), _jsx(_components.td, {
            children: "否"
          }), _jsx(_components.td, {
            children: "对于有保密需求的实时互动场景，声网推荐使用该措施。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "限定访问区域"
          }), _jsx(_components.td, {
            children: "否"
          }), _jsx(_components.td, {
            children: "适用于将音视频数据及实时消息数据传输限定在某一区域范围内的场景。"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "资源隔离",
      children: "资源隔离"
    }), `
`, _jsxs(_components.p, {
      children: ["客户在使用声网 SDK 或服务前，需要先在", _jsx(_components.a, {
        href: "https://console.shengwang.cn/",
        children: "声网控制台"
      }), "新建项目。成功创建后，声网会自动为每个项目分配一个用于识别项目的 App ID。不同的项目之间彼此独立，通话无法互通，客户可以通过使用项目对应的 App ID，隔离不同的项目。"]
    }), `
`, _jsx(_components.h2, {
      id: "频道隔离",
      children: "频道隔离"
    }), `
`, _jsx(_components.p, {
      children: "声网为每路音频、视频或消息传输建立单独且逻辑隔离的通道，即频道。在 App ID 一致的前提下，只有在同一频道内的用户才可以进行对应资源（音频、视频、消息）的访问，进行互动。"
    }), `
`, _jsx(_components.h2, {
      id: "身份认证",
      children: "身份认证"
    }), `
`, _jsx(_components.p, {
      children: "除上述基本保障外，声网还提供动态 Token 对即将加入频道的终端用户进行鉴权。"
    }), `
`, _jsx(_components.p, {
      children: "目前声网提供了如下两种认证方式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "基于 App ID 认证。"
      }), `
`, _jsx(_components.li, {
        children: "基于 Token 认证。在采用 Token 认证方式后，客户可通过 App ID 和 App 证书生成 Token，并使用该 Token 对终端用户进行身份认证。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "动态 Token 从以下几个方面提供安全保障："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Token 采用业界标准化的 HMAC-SHA256 加密方案，可对 App ID 和频道名称等重要信息进行加密处理，保证不会泄露。"
      }), `
`, _jsx(_components.li, {
        children: "支持自定义 Token 有效期。Token 的默认有效期为 24 小时。客户可以根据自己的安全需求自定义 Token 的服务有效期。"
      }), `
`, _jsx(_components.li, {
        children: "支持定制不同的服务权限。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["详细的生成 Token 的方法及注意事项，请参考", _jsx(_components.a, {
        href: "https://docportal.shengwang.cn/cn/video-call-4.x/token_server_android_ng?platform=Android",
        children: "使用 Token 鉴权"
      }), "。"]
    }), `
`, _jsx(_components.h2, {
      id: "数据加密",
      children: "数据加密"
    }), `
`, _jsx(_components.p, {
      children: "对于对互动内容有保密需求的场景，声网还提供了传输加密和内容加密功能。"
    }), `
`, _jsx(_components.h3, {
      id: "传输加密",
      children: "传输加密"
    }), `
`, _jsx(_components.p, {
      children: "为保证数据在传输过程中的保密性，声网各产品和服务均实施了覆盖全数据链路的传输加密机制，并采用业内主流的强加密算法。其中："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "RTC Native SDK 和 RTM Native SDK 使用 TLS (Transport Layer Security) 加密协议。"
      }), `
`, _jsx(_components.li, {
        children: "RTC Web SDK 和 RTM Web SDK 使用 SSL (Secure Sockets Layer) 加密协议。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "内容加密",
      children: "内容加密"
    }), `
`, _jsx(_components.p, {
      children: "下图分别展示了 RTC Native SDK 和 Web SDK 应用加密功能后的数据传输流程："
    }), `
`, `
`, `
`, `
`, _jsx(_components.h4, {
      id: "内置加密",
      children: "内置加密"
    }), `
`, _jsx(_components.p, {
      children: "声网 SDK 均内置多种加密算法。客户可以通过该功能对音视频内容进行加密。该加密功能可对所有传输的音视频流进行端到端加密。使用时，客户可以自行配置使用的加密算法。音视频数据在发送端完成加密后，在接收端完成解密，数据以密文形式进行网络传输。客户自行对密钥进行管理，包括密钥的生成、存储、传输和校验等。除涉及 WebRTC 服务外，声网不接触密钥，也无法对密文数据进行解密。"
    }), `
`, _jsx(_components.p, {
      children: "在 WebRTC 服务中，声网需要在服务端进行数据解密和协议转换。声网已实施安全的密钥传输和使用机制，保护客户的密钥不被泄露。"
    }), `
`, _jsx(_components.h4, {
      id: "自定义加密",
      children: "自定义加密"
    }), `
`, _jsx(_components.p, {
      children: "如果使用的是声网 RTC Native SDK，除内置加密外，客户还可以使用自定义加密功能。声网可以将发送前和接收后的音视频数据通过回调发给 App，App 再自行选择加密算法和密钥。自定义加密下，声网接触不到任何加密信息，适用于安全需求更高的场景。"
    }), `
`, _jsx(_components.p, {
      children: "不同平台设置加密方案的步骤详见："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://docportal.shengwang.cn/cn/live-streaming-premium-4.x/channel_encryption_android_ng?platform=Android",
            children: "Android"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://docportal.shengwang.cn/cn/live-streaming-premium-4.x/channel_encryption_apple_ng?platform=iOS",
            children: "iOS"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://docportal.shengwang.cn/cn/live-streaming-premium-4.x/channel_encryption_apple_ng?platform=macOS",
            children: "macOS"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://docportal.shengwang.cn/cn/live-streaming-premium-4.x/channel_encryption_web_ng?platform=Web",
            children: "Web"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://docportal.shengwang.cn/cn/live-streaming-premium-4.x/channel_encryption_windows_ng?platform=Windows",
            children: "Windows"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "限定访问区域",
      children: "限定访问区域"
    }), `
`, _jsx(_components.p, {
      children: "为适应不同国家或地区的法律法规，声网支持限定访问区域功能。开启限定访问区域功能后，不论用户在哪个区域使用你的 App，SDK 都只会访问指定区域的声网服务器。"
    }), `
`, _jsx(_components.p, {
      children: "例如你指定了北美为访问区域，假设有两位用户分别从北美和中国连接声网服务器："
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "指定的访问区域"
          }), _jsx(_components.th, {
            children: "App 用户所在区域"
          }), _jsx(_components.th, {
            children: "SDK 实际访问的区域"
          }), _jsx(_components.th, {
            children: "连接后的用户体验 1"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "北美"
          }), _jsx(_components.td, {
            children: "北美"
          }), _jsx(_components.td, {
            children: "北美"
          }), _jsx(_components.td, {
            children: "正常"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "北美"
          }), _jsx(_components.td, {
            children: "中国"
          }), _jsx(_components.td, {
            children: "北美"
          }), _jsx(_components.td, {
            children: "可能受到较大影响 2"
          })]
        })]
      })]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "信息"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["1", " 如果指定区域的服务器都不可用，SDK 会直接报错。"]
          }), `
`, _jsxs(_components.li, {
            children: ["2", " 由于指定区域与 App 用户所在区域之间存在跨区域公共互联网，公共互联网网络质量较差会导致音视频体验受到影响。"]
          }), `
`]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "具体使用方法，详见："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://docportal.shengwang.cn/cn/live-streaming-premium-4.x/region_android_ng?platform=Android",
            children: "Android"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://docportal.shengwang.cn/cn/live-streaming-premium-4.x/region_apple_ng?platform=iOS",
            children: "iOS"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://docportal.shengwang.cn/cn/live-streaming-premium-4.x/region_apple_ng?platform=macOS",
            children: "macOS"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "https://docportal.shengwang.cn/cn/live-streaming-premium-4.x/region_web_ng_rtc?platform=Web",
            children: "Web"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "hhttps://docportal.shengwang.cn/cn/live-streaming-premium-4.x/region_windows_ng?platform=Windows",
            children: "Windows"
          })
        }), `
`]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
