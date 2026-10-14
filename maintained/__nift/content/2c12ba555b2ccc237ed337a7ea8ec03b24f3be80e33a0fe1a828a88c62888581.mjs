import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "安全与合规",
  description: "围绕身份认证、回调安全、地理策略和生产接入边界整理安全与合规能力。"
};
export let _markdown = `

## 简介 [#简介]

本文提供了声网的信息安全说明。

声网服务支持内置加密和自定义加密功能，你可以选择任意一种方式进行加密。下图描述了启用加密功能后的数据传输流程：

![加密数据传输流程](/img/security/encryption.png)

### 目的 [#目的]

致力于保障声网所接触到的客户及终端用户物理和电子信息资产的保密性、完整性和可用性。

* 保密性：防止未经授权的访问和窃听
* 完整性：防止篡改和伪造数据
* 可用性：通过声网全球实时虚拟通信网 (SD-RTN™) 实现数据可用性

### 范围 [#范围]

本信息安全说明主要阐述声网如何进行信息管理，以保护客户及终端用户数据安全。

## 数据分类 [#数据分类]

所有信息根据以下策略分类并进行相应保护，适用于任何格式的数据和媒体资源。

我们将所处理的信息分为如下几类：

| 类别     | 描述                                                                                                                                    |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| 客户账户信息 | 客户账户相关信息，包括客户 ID、客户 IP、网络类型、操作系统、Email 地址、电话号码、产品偏好、编程平台、UTM 信息、身份证件信息、公司名称、公司 URL、账单信息、交易信息、购买的套餐信息、项目相关状态、提交的工单、账号内成员信息和后台控制台访问记录等。 |
| 终端用户信息 | 所有经客户收集的与终端个人用户设备、网络相关的信息，包括麦克风和摄像头信息、CPU 状态、内存状态、电池状态、系统版本、手机型号、手机信号等级、接收的信号强度指示（RSSI）、网络类型、用户属性、频道属性等。                              |
| 通话内容   | 用户在通话过程中的音视频数据。                                                                                                                       |
| 日志     | 访问声网 SD-RTN™ 时由声网服务器生成的用户媒体服务器日志数据。日志不包含文本聊天信息或用户个人信息。                                                                                |

<CalloutContainer type="info">
  <CalloutTitle>
    信息
  </CalloutTitle>

  <CalloutDescription>
    * 如果客户使用声网服务的加密功能，通话内容可以在终端设备上进行加密后在声网服务器间传输。
    * 当客户使用声网服务时，声网不会记录客户的第三方账户信息，例如：信用卡信息和登录控制台的第三方账号信息。
  </CalloutDescription>
</CalloutContainer>

## 安全标准 [#安全标准]

### 数据安全 [#数据安全]

用户与声网服务器间的通讯将受到声网私有传输协议、安全传输层协议 (TLS) 和 Web Socket Secure (WSS) 等协议的保护，你也可选择采用高级加密标准 (AES) 或自定义加密算法对音视频数据进行加密保护。声网 SD-RTN™ 在传输过程中没有任何可对传输的信息进行解密的密钥。通话内容信息只能在终端设备上（如客户端 app 和本地服务端录制服务器）通过客户授权密钥才能解密。

### 数据可用性 [#数据可用性]

* 海量数据中心：声网在全球区域有多个机房可以提供服务。任何机房遭受攻击，都不会影响其他机房的正常运转、不影响整体服务。
* 故障自愈：数据中心若遭遇拒绝服务（DoS）等难以防范的恶意攻击导致服务故障，声网会自动隔离故障机器，保障服务不受影响。
* DDoS 攻击防范：声网在每个核心的云数据中心配置了反 DDoS 防火墙，在全球有两百多个分布式数据中心，有足够的能力和资源控制 DDoS 的风险。

### 数据储存 [#数据储存]

声网向客户提供本地服务端录制 SDK 和云端录制产品，客户可以对部分或全部通话内容进行录制。使用录制服务时，所有录像/录音均存放在客户提供的存储服务器。

### 访问授权 [#访问授权]

终端用户访问声网 SD-RTN™ 时，可以通过 Token 进行认证，详见[使用 Token 鉴权](https://doc.shengwang.cn/doc/rtc/android/basic-features/token-authentication)。

### 访问控制 [#访问控制]

#### 电子访问控制 [#电子访问控制]

声网对内部的所有系统实行严格的访问控制管理，所有用户拥有独立内部账号和授权体系，且必须经过二步验证，任何访问记录都会有备案。

所有涉及用户数据服务的机器，均受到严格的审计和保护。声网员工将仅在必要情况下，通过获取临时授权访问到生产服务器，这一过程将全程录屏，并保留所有操作记录。

#### 物理访问控制 [#物理访问控制]

所有运营机器均托管于满足 ISO27001 或以上信息安全管理体系认证的机房，且该机房会按照托管协议或数据保护协 (DPA) 的规定保护信息安全。无论是第三方的托管供应商还是声网的员工，都必须经过审批才可以接触机器和设备。

## 角色和职责 [#角色和职责]

声网不仅对自己的员工赋予责权，对客户也有相应要求，详见下文。

### 声网内部角色和职责 [#声网内部角色和职责]

声网内部安全任务和职责细分如下：

| 角色        | 职责                                                                                    |
| --------- | ------------------------------------------------------------------------------------- |
| 信息安全小组委员会 | 信息安全小组委员会 (ISSC) 负责制定并实施安全策略和规程。ISSC 监督公司严格执行既定制度，对声网安全策略开展定期的技术或非技术评估。ISSC 还可任命授权员工。 |
| 授权员工      | 授权员工指有权访问运营机器的员工。授权员工人数控制在最低范围之内，由 ISSC 指派，保证操作平台和声网服务的正常运作和维护。                       |
| 所有其他员工    | 所有其他员工都必须遵守该制度，根据各自的工作权限确保安全保密性。一旦发现有违规行为，要求立即向管理层汇报。                                 |

### 职责分担 [#职责分担]

客户在对声网 SD-RTN™ 进行评估时，有必要了解和区分以下安全措施:

* 声网实施和运作的安全措施
* 客户在使用声网 SD-RTN™ 服务时，为保障通话内容信息和程序安全而实施和运作的安全措施

客户可自主选择安全措施，以保障自己的信息、平台、程序、系统和网络安全。声网客户收集的客户或终端用户的数据信息，如程序登录信息、身份识别、密码、支付信息、姓名和地址等，都由客户自己保管。

同时，声网建议开发者和客户在涉及用户个人信息调取时，务必在明显位置添加提示，并设置开启和关闭按钮，由用户决定是否允许调取个人信息。

## 员工安全意识培训 [#员工安全意识培训]

声网对所有新入职员工均开展信息保护、安全及合规培训，并确保所有员工每年至少接受一次信息保密意识的讲座和培训。 所有授权员工（即有权访问运营机器的员工）将额外接受相应的培训。

## 违规处理 [#违规处理]

员工需遵守保密协议及内部安全制度。如果出现违反情况，会视情况严重程度采取相应的违规处理措施，包括但不限于谈话、加强培训教育、解除劳动协议以及追究其他法律责任等。

## 潜在安全漏洞 [#潜在安全漏洞]

如果您发现我们的技术平台有潜在安全漏洞，请直接发送邮件到 [security@shengwang.cn](mailto\\:security@shengwang.cn)。因为漏洞信息比较敏感，报告时请务必使用我们的 PGP 公钥 (KEY ID 2F4553BE) 进行加密。我们的安全专家会在第一时间处理并反馈，非常感谢。

为便于验证和定位漏洞，声网希望您的邮件中包含但不限于以下内容：

* 组织或个人联系方式
* 受影响的产品或方案及其版本
* 潜在漏洞描述
* 技术细节（例如系统配置、定位方法、问题重现的步骤等）

## 安全指南 [#安全指南]

### 声网的服务安全吗？可以加密吗？ [#声网的服务安全吗可以加密吗]

声网是一个安全的平台。我们支持传输协议加密和媒体内容加密。同时声网全网采用 AES 加密来保障数据传输安全，通过美国 HIPAA 认证，医疗和多行业适用。提供加密 API 可行业定制加密。在我们的 SDK 工具包中，我们提供了相关接口，如需自定义加密，请参考所需平台的[媒体流加密文档](https://doc.shengwang.cn/doc/rtc/android/advanced-features/channel-encryption)。

### 如何使用声网 SDK 保护数据安全？ [#如何使用声网-sdk-保护数据安全]

为保证传输数据的安全性，声网服务支持音视频数据加密。客户可以使用声网预置的 AES-128/AES-256 等算法，或通过客户自定义的加密算法实现加密，请参考所需平台的[媒体流加密文档](https://doc.shengwang.cn/doc/rtc/android/advanced-features/channel-encryption)。加密密钥完全由客户自行生成和分发。声网推荐客户针对每个频道使用独立密钥以实现最高等级的数据安全。

### 声网 SDK 提供的 AES 加密模式是否安全？ [#声网-sdk-提供的-aes-加密模式是否安全]

对于协议加密，声网 RTC Native SDK、RTM Native SDK、RTC Web SDK 和 RTM Web SDK 采用的都是 AES-128 模式。

对于内容加密，声网 SDK 提供了AES\\_128 和 AES\\_256 的加密模式。对于安全性要求较高的应用，声网推荐使用自定义加密。但是声网本地服务端录制和云录制服务不支持自定义加密功能。更多信息可以[联系技术支持](https://ticket.shengwang.cn/)。

### 声网服务器会存储音视频通话内容吗？ [#声网服务器会存储音视频通话内容吗]

声网的服务器上不会存储任何音视频通话内容。在使用平台时，声网 SDK 会将信息传送到声网服务器上。

### 声网的网络如何应对 DDoS 攻击？ [#声网的网络如何应对-ddos-攻击]

声网会定期扫描核心网络节点，检查并清理可能的安全漏洞，还在每个核心的云数据中心配置了反 DDoS 防火墙，以确保核心节点免遭攻击。声网在全球有两百多个分布式数据中心，有足够的能力和资源控制 DDoS 的风险。

### 声网服务器会缓存音视频通话内容吗？ [#声网服务器会缓存音视频通话内容吗]

在使用声网服务时，音视频数据会通过声网服务器进行传输，声网服务器会在传输过程中缓存该数据 10 秒，并在通话结束后立即释放所有音视频数据。

***

## title: ISO 证书 [#title-iso-证书]

安全与合规是实时互动的基本要求。声网遵守不同国家和行业的合规性要求，打造安全可靠的云服务。

声网的 ISO 认证通过了中国合格评定国家认可委员会 (IFA CNAS)、英国皇家认可委员会 (UKAS) 和挪威船级社 (DNV) 三个不同认证组织的监督和认可。声网在全球范围内按照国际认可的标准建设云服务技术，保障全球客户的安全。

## ISO/IEC 27001:2013 [#isoiec-27001]

ISO/IEC 27001:2013 是国际上最权威、最被广泛接受和应用的信息安全领域的体系认证标准。该体系覆盖了声网实时互动云平台在全球范围内运营和维护过程中的信息安全管理。

证书下载：

* [ISO/IEC 27001:2013](https://web-cdn.agora.io/docs-files/1603248023032)

* [GB/T 22080-2016/ISO/IEC 27001:2013](https://web-cdn.agora.io/docs-files/1603248948727)

## ISO/IEC 27017:2015 [#isoiec-27017]

ISO/IEC 27017:2015 是 ISO/IEC 27001 的补充标准，对云服务厂商提供了信息安全实施规范。

证书下载：[ISO/IEC 27017:2015](https://web-cdn.agora.io/docs-files/1603249196108)

## ISO/IEC 27018:2019 [#isoiec-27018]

ISO/IEC 27018:2019 是 ISO/IEC 27001 的补充标准，对云服务厂商提供了个人信息保护实施规范。

证书下载：[ISO/IEC 27018:2019](https://web-cdn.agora.io/docs-files/1603249122450)

## ISO/IEC 27701:2019 [#isoiec-27701]

ISO/IEC 27701:2019 是 ISO/IEC 27001 信息安全管理和 ISO/IEC 27002 安全控制在隐私方面的扩展。它是一项国际管理系统标准体系，为保护个人隐私提供指导，包括组织应如何管理个人信息。

证书下载：[ISO/IEC 27701:2019](https://web-cdn.agora.io/docs-files/1638761744198)
`;
export let structuredData = {
  contents: [{
    heading: "简介",
    content: "本文提供了声网的信息安全说明。"
  }, {
    heading: "简介",
    content: "声网服务支持内置加密和自定义加密功能，你可以选择任意一种方式进行加密。下图描述了启用加密功能后的数据传输流程："
  }, {
    heading: "目的",
    content: "致力于保障声网所接触到的客户及终端用户物理和电子信息资产的保密性、完整性和可用性。"
  }, {
    heading: "目的",
    content: "保密性：防止未经授权的访问和窃听"
  }, {
    heading: "目的",
    content: "完整性：防止篡改和伪造数据"
  }, {
    heading: "目的",
    content: "可用性：通过声网全球实时虚拟通信网 (SD-RTN™) 实现数据可用性"
  }, {
    heading: "范围",
    content: "本信息安全说明主要阐述声网如何进行信息管理，以保护客户及终端用户数据安全。"
  }, {
    heading: "数据分类",
    content: "所有信息根据以下策略分类并进行相应保护，适用于任何格式的数据和媒体资源。"
  }, {
    heading: "数据分类",
    content: "我们将所处理的信息分为如下几类："
  }, {
    heading: "数据分类",
    content: "类别"
  }, {
    heading: "数据分类",
    content: "描述"
  }, {
    heading: "数据分类",
    content: "客户账户信息"
  }, {
    heading: "数据分类",
    content: "客户账户相关信息，包括客户 ID、客户 IP、网络类型、操作系统、Email 地址、电话号码、产品偏好、编程平台、UTM 信息、身份证件信息、公司名称、公司 URL、账单信息、交易信息、购买的套餐信息、项目相关状态、提交的工单、账号内成员信息和后台控制台访问记录等。"
  }, {
    heading: "数据分类",
    content: "终端用户信息"
  }, {
    heading: "数据分类",
    content: "所有经客户收集的与终端个人用户设备、网络相关的信息，包括麦克风和摄像头信息、CPU 状态、内存状态、电池状态、系统版本、手机型号、手机信号等级、接收的信号强度指示（RSSI）、网络类型、用户属性、频道属性等。"
  }, {
    heading: "数据分类",
    content: "通话内容"
  }, {
    heading: "数据分类",
    content: "用户在通话过程中的音视频数据。"
  }, {
    heading: "数据分类",
    content: "日志"
  }, {
    heading: "数据分类",
    content: "访问声网 SD-RTN™ 时由声网服务器生成的用户媒体服务器日志数据。日志不包含文本聊天信息或用户个人信息。"
  }, {
    heading: "数据分类",
    content: "如果客户使用声网服务的加密功能，通话内容可以在终端设备上进行加密后在声网服务器间传输。"
  }, {
    heading: "数据分类",
    content: "当客户使用声网服务时，声网不会记录客户的第三方账户信息，例如：信用卡信息和登录控制台的第三方账号信息。"
  }, {
    heading: "数据安全",
    content: "用户与声网服务器间的通讯将受到声网私有传输协议、安全传输层协议 (TLS) 和 Web Socket Secure (WSS) 等协议的保护，你也可选择采用高级加密标准 (AES) 或自定义加密算法对音视频数据进行加密保护。声网 SD-RTN™ 在传输过程中没有任何可对传输的信息进行解密的密钥。通话内容信息只能在终端设备上（如客户端 app 和本地服务端录制服务器）通过客户授权密钥才能解密。"
  }, {
    heading: "数据可用性",
    content: "海量数据中心：声网在全球区域有多个机房可以提供服务。任何机房遭受攻击，都不会影响其他机房的正常运转、不影响整体服务。"
  }, {
    heading: "数据可用性",
    content: "故障自愈：数据中心若遭遇拒绝服务（DoS）等难以防范的恶意攻击导致服务故障，声网会自动隔离故障机器，保障服务不受影响。"
  }, {
    heading: "数据可用性",
    content: "DDoS 攻击防范：声网在每个核心的云数据中心配置了反 DDoS 防火墙，在全球有两百多个分布式数据中心，有足够的能力和资源控制 DDoS 的风险。"
  }, {
    heading: "数据储存",
    content: "声网向客户提供本地服务端录制 SDK 和云端录制产品，客户可以对部分或全部通话内容进行录制。使用录制服务时，所有录像/录音均存放在客户提供的存储服务器。"
  }, {
    heading: "访问授权",
    content: "终端用户访问声网 SD-RTN™ 时，可以通过 Token 进行认证，详见使用 Token 鉴权。"
  }, {
    heading: "电子访问控制",
    content: "声网对内部的所有系统实行严格的访问控制管理，所有用户拥有独立内部账号和授权体系，且必须经过二步验证，任何访问记录都会有备案。"
  }, {
    heading: "电子访问控制",
    content: "所有涉及用户数据服务的机器，均受到严格的审计和保护。声网员工将仅在必要情况下，通过获取临时授权访问到生产服务器，这一过程将全程录屏，并保留所有操作记录。"
  }, {
    heading: "物理访问控制",
    content: "所有运营机器均托管于满足 ISO27001 或以上信息安全管理体系认证的机房，且该机房会按照托管协议或数据保护协 (DPA) 的规定保护信息安全。无论是第三方的托管供应商还是声网的员工，都必须经过审批才可以接触机器和设备。"
  }, {
    heading: "角色和职责",
    content: "声网不仅对自己的员工赋予责权，对客户也有相应要求，详见下文。"
  }, {
    heading: "声网内部角色和职责",
    content: "声网内部安全任务和职责细分如下："
  }, {
    heading: "声网内部角色和职责",
    content: "角色"
  }, {
    heading: "声网内部角色和职责",
    content: "职责"
  }, {
    heading: "声网内部角色和职责",
    content: "信息安全小组委员会"
  }, {
    heading: "声网内部角色和职责",
    content: "信息安全小组委员会 (ISSC) 负责制定并实施安全策略和规程。ISSC 监督公司严格执行既定制度，对声网安全策略开展定期的技术或非技术评估。ISSC 还可任命授权员工。"
  }, {
    heading: "声网内部角色和职责",
    content: "授权员工"
  }, {
    heading: "声网内部角色和职责",
    content: "授权员工指有权访问运营机器的员工。授权员工人数控制在最低范围之内，由 ISSC 指派，保证操作平台和声网服务的正常运作和维护。"
  }, {
    heading: "声网内部角色和职责",
    content: "所有其他员工"
  }, {
    heading: "声网内部角色和职责",
    content: "所有其他员工都必须遵守该制度，根据各自的工作权限确保安全保密性。一旦发现有违规行为，要求立即向管理层汇报。"
  }, {
    heading: "职责分担",
    content: "客户在对声网 SD-RTN™ 进行评估时，有必要了解和区分以下安全措施:"
  }, {
    heading: "职责分担",
    content: "声网实施和运作的安全措施"
  }, {
    heading: "职责分担",
    content: "客户在使用声网 SD-RTN™ 服务时，为保障通话内容信息和程序安全而实施和运作的安全措施"
  }, {
    heading: "职责分担",
    content: "客户可自主选择安全措施，以保障自己的信息、平台、程序、系统和网络安全。声网客户收集的客户或终端用户的数据信息，如程序登录信息、身份识别、密码、支付信息、姓名和地址等，都由客户自己保管。"
  }, {
    heading: "职责分担",
    content: "同时，声网建议开发者和客户在涉及用户个人信息调取时，务必在明显位置添加提示，并设置开启和关闭按钮，由用户决定是否允许调取个人信息。"
  }, {
    heading: "员工安全意识培训",
    content: "声网对所有新入职员工均开展信息保护、安全及合规培训，并确保所有员工每年至少接受一次信息保密意识的讲座和培训。 所有授权员工（即有权访问运营机器的员工）将额外接受相应的培训。"
  }, {
    heading: "违规处理",
    content: "员工需遵守保密协议及内部安全制度。如果出现违反情况，会视情况严重程度采取相应的违规处理措施，包括但不限于谈话、加强培训教育、解除劳动协议以及追究其他法律责任等。"
  }, {
    heading: "潜在安全漏洞",
    content: "如果您发现我们的技术平台有潜在安全漏洞，请直接发送邮件到 security\\@shengwang.cn。因为漏洞信息比较敏感，报告时请务必使用我们的 PGP 公钥 (KEY ID 2F4553BE) 进行加密。我们的安全专家会在第一时间处理并反馈，非常感谢。"
  }, {
    heading: "潜在安全漏洞",
    content: "为便于验证和定位漏洞，声网希望您的邮件中包含但不限于以下内容："
  }, {
    heading: "潜在安全漏洞",
    content: "组织或个人联系方式"
  }, {
    heading: "潜在安全漏洞",
    content: "受影响的产品或方案及其版本"
  }, {
    heading: "潜在安全漏洞",
    content: "潜在漏洞描述"
  }, {
    heading: "潜在安全漏洞",
    content: "技术细节（例如系统配置、定位方法、问题重现的步骤等）"
  }, {
    heading: "声网的服务安全吗可以加密吗",
    content: "声网是一个安全的平台。我们支持传输协议加密和媒体内容加密。同时声网全网采用 AES 加密来保障数据传输安全，通过美国 HIPAA 认证，医疗和多行业适用。提供加密 API 可行业定制加密。在我们的 SDK 工具包中，我们提供了相关接口，如需自定义加密，请参考所需平台的媒体流加密文档。"
  }, {
    heading: "如何使用声网-sdk-保护数据安全",
    content: "为保证传输数据的安全性，声网服务支持音视频数据加密。客户可以使用声网预置的 AES-128/AES-256 等算法，或通过客户自定义的加密算法实现加密，请参考所需平台的媒体流加密文档。加密密钥完全由客户自行生成和分发。声网推荐客户针对每个频道使用独立密钥以实现最高等级的数据安全。"
  }, {
    heading: "声网-sdk-提供的-aes-加密模式是否安全",
    content: "对于协议加密，声网 RTC Native SDK、RTM Native SDK、RTC Web SDK 和 RTM Web SDK 采用的都是 AES-128 模式。"
  }, {
    heading: "声网-sdk-提供的-aes-加密模式是否安全",
    content: "对于内容加密，声网 SDK 提供了AES\\_128 和 AES\\_256 的加密模式。对于安全性要求较高的应用，声网推荐使用自定义加密。但是声网本地服务端录制和云录制服务不支持自定义加密功能。更多信息可以联系技术支持。"
  }, {
    heading: "声网服务器会存储音视频通话内容吗",
    content: "声网的服务器上不会存储任何音视频通话内容。在使用平台时，声网 SDK 会将信息传送到声网服务器上。"
  }, {
    heading: "声网的网络如何应对-ddos-攻击",
    content: "声网会定期扫描核心网络节点，检查并清理可能的安全漏洞，还在每个核心的云数据中心配置了反 DDoS 防火墙，以确保核心节点免遭攻击。声网在全球有两百多个分布式数据中心，有足够的能力和资源控制 DDoS 的风险。"
  }, {
    heading: "声网服务器会缓存音视频通话内容吗",
    content: "在使用声网服务时，音视频数据会通过声网服务器进行传输，声网服务器会在传输过程中缓存该数据 10 秒，并在通话结束后立即释放所有音视频数据。"
  }, {
    heading: "title-iso-证书",
    content: "安全与合规是实时互动的基本要求。声网遵守不同国家和行业的合规性要求，打造安全可靠的云服务。"
  }, {
    heading: "title-iso-证书",
    content: "声网的 ISO 认证通过了中国合格评定国家认可委员会 (IFA CNAS)、英国皇家认可委员会 (UKAS) 和挪威船级社 (DNV) 三个不同认证组织的监督和认可。声网在全球范围内按照国际认可的标准建设云服务技术，保障全球客户的安全。"
  }, {
    heading: "isoiec-27001",
    content: "ISO/IEC 27001:2013 是国际上最权威、最被广泛接受和应用的信息安全领域的体系认证标准。该体系覆盖了声网实时互动云平台在全球范围内运营和维护过程中的信息安全管理。"
  }, {
    heading: "isoiec-27001",
    content: "证书下载："
  }, {
    heading: "isoiec-27001",
    content: "ISO/IEC 27001:2013"
  }, {
    heading: "isoiec-27001",
    content: "GB/T 22080-2016/ISO/IEC 27001:2013"
  }, {
    heading: "isoiec-27017",
    content: "ISO/IEC 27017:2015 是 ISO/IEC 27001 的补充标准，对云服务厂商提供了信息安全实施规范。"
  }, {
    heading: "isoiec-27017",
    content: "证书下载：ISO/IEC 27017:2015"
  }, {
    heading: "isoiec-27018",
    content: "ISO/IEC 27018:2019 是 ISO/IEC 27001 的补充标准，对云服务厂商提供了个人信息保护实施规范。"
  }, {
    heading: "isoiec-27018",
    content: "证书下载：ISO/IEC 27018:2019"
  }, {
    heading: "isoiec-27701",
    content: "ISO/IEC 27701:2019 是 ISO/IEC 27001 信息安全管理和 ISO/IEC 27002 安全控制在隐私方面的扩展。它是一项国际管理系统标准体系，为保护个人隐私提供指导，包括组织应如何管理个人信息。"
  }, {
    heading: "isoiec-27701",
    content: "证书下载：ISO/IEC 27701:2019"
  }],
  headings: [{
    id: "简介",
    content: "简介"
  }, {
    id: "目的",
    content: "目的"
  }, {
    id: "范围",
    content: "范围"
  }, {
    id: "数据分类",
    content: "数据分类"
  }, {
    id: "安全标准",
    content: "安全标准"
  }, {
    id: "数据安全",
    content: "数据安全"
  }, {
    id: "数据可用性",
    content: "数据可用性"
  }, {
    id: "数据储存",
    content: "数据储存"
  }, {
    id: "访问授权",
    content: "访问授权"
  }, {
    id: "访问控制",
    content: "访问控制"
  }, {
    id: "电子访问控制",
    content: "电子访问控制"
  }, {
    id: "物理访问控制",
    content: "物理访问控制"
  }, {
    id: "角色和职责",
    content: "角色和职责"
  }, {
    id: "声网内部角色和职责",
    content: "声网内部角色和职责"
  }, {
    id: "职责分担",
    content: "职责分担"
  }, {
    id: "员工安全意识培训",
    content: "员工安全意识培训"
  }, {
    id: "违规处理",
    content: "违规处理"
  }, {
    id: "潜在安全漏洞",
    content: "潜在安全漏洞"
  }, {
    id: "安全指南",
    content: "安全指南"
  }, {
    id: "声网的服务安全吗可以加密吗",
    content: "声网的服务安全吗？可以加密吗？"
  }, {
    id: "如何使用声网-sdk-保护数据安全",
    content: "如何使用声网 SDK 保护数据安全？"
  }, {
    id: "声网-sdk-提供的-aes-加密模式是否安全",
    content: "声网 SDK 提供的 AES 加密模式是否安全？"
  }, {
    id: "声网服务器会存储音视频通话内容吗",
    content: "声网服务器会存储音视频通话内容吗？"
  }, {
    id: "声网的网络如何应对-ddos-攻击",
    content: "声网的网络如何应对 DDoS 攻击？"
  }, {
    id: "声网服务器会缓存音视频通话内容吗",
    content: "声网服务器会缓存音视频通话内容吗？"
  }, {
    id: "title-iso-证书",
    content: "title: ISO 证书"
  }, {
    id: "isoiec-27001",
    content: "ISO/IEC 27001:2013"
  }, {
    id: "isoiec-27017",
    content: "ISO/IEC 27017:2015"
  }, {
    id: "isoiec-27018",
    content: "ISO/IEC 27018:2019"
  }, {
    id: "isoiec-27701",
    content: "ISO/IEC 27701:2019"
  }]
};
export let toc = [{
  depth: 2,
  url: "#简介",
  title: _jsx(_Fragment, {
    children: "简介"
  })
}, {
  depth: 3,
  url: "#目的",
  title: _jsx(_Fragment, {
    children: "目的"
  })
}, {
  depth: 3,
  url: "#范围",
  title: _jsx(_Fragment, {
    children: "范围"
  })
}, {
  depth: 2,
  url: "#数据分类",
  title: _jsx(_Fragment, {
    children: "数据分类"
  })
}, {
  depth: 2,
  url: "#安全标准",
  title: _jsx(_Fragment, {
    children: "安全标准"
  })
}, {
  depth: 3,
  url: "#数据安全",
  title: _jsx(_Fragment, {
    children: "数据安全"
  })
}, {
  depth: 3,
  url: "#数据可用性",
  title: _jsx(_Fragment, {
    children: "数据可用性"
  })
}, {
  depth: 3,
  url: "#数据储存",
  title: _jsx(_Fragment, {
    children: "数据储存"
  })
}, {
  depth: 3,
  url: "#访问授权",
  title: _jsx(_Fragment, {
    children: "访问授权"
  })
}, {
  depth: 3,
  url: "#访问控制",
  title: _jsx(_Fragment, {
    children: "访问控制"
  })
}, {
  depth: 4,
  url: "#电子访问控制",
  title: _jsx(_Fragment, {
    children: "电子访问控制"
  })
}, {
  depth: 4,
  url: "#物理访问控制",
  title: _jsx(_Fragment, {
    children: "物理访问控制"
  })
}, {
  depth: 2,
  url: "#角色和职责",
  title: _jsx(_Fragment, {
    children: "角色和职责"
  })
}, {
  depth: 3,
  url: "#声网内部角色和职责",
  title: _jsx(_Fragment, {
    children: "声网内部角色和职责"
  })
}, {
  depth: 3,
  url: "#职责分担",
  title: _jsx(_Fragment, {
    children: "职责分担"
  })
}, {
  depth: 2,
  url: "#员工安全意识培训",
  title: _jsx(_Fragment, {
    children: "员工安全意识培训"
  })
}, {
  depth: 2,
  url: "#违规处理",
  title: _jsx(_Fragment, {
    children: "违规处理"
  })
}, {
  depth: 2,
  url: "#潜在安全漏洞",
  title: _jsx(_Fragment, {
    children: "潜在安全漏洞"
  })
}, {
  depth: 2,
  url: "#安全指南",
  title: _jsx(_Fragment, {
    children: "安全指南"
  })
}, {
  depth: 3,
  url: "#声网的服务安全吗可以加密吗",
  title: _jsx(_Fragment, {
    children: "声网的服务安全吗？可以加密吗？"
  })
}, {
  depth: 3,
  url: "#如何使用声网-sdk-保护数据安全",
  title: _jsx(_Fragment, {
    children: "如何使用声网 SDK 保护数据安全？"
  })
}, {
  depth: 3,
  url: "#声网-sdk-提供的-aes-加密模式是否安全",
  title: _jsx(_Fragment, {
    children: "声网 SDK 提供的 AES 加密模式是否安全？"
  })
}, {
  depth: 3,
  url: "#声网服务器会存储音视频通话内容吗",
  title: _jsx(_Fragment, {
    children: "声网服务器会存储音视频通话内容吗？"
  })
}, {
  depth: 3,
  url: "#声网的网络如何应对-ddos-攻击",
  title: _jsx(_Fragment, {
    children: "声网的网络如何应对 DDoS 攻击？"
  })
}, {
  depth: 3,
  url: "#声网服务器会缓存音视频通话内容吗",
  title: _jsx(_Fragment, {
    children: "声网服务器会缓存音视频通话内容吗？"
  })
}, {
  depth: 2,
  url: "#title-iso-证书",
  title: _jsx(_Fragment, {
    children: "title: ISO 证书"
  })
}, {
  depth: 2,
  url: "#isoiec-27001",
  title: _jsxs(_Fragment, {
    children: ["ISO/IEC 27001", _jsx("div", {})]
  })
}, {
  depth: 2,
  url: "#isoiec-27017",
  title: _jsxs(_Fragment, {
    children: ["ISO/IEC 27017", _jsx("div", {})]
  })
}, {
  depth: 2,
  url: "#isoiec-27018",
  title: _jsxs(_Fragment, {
    children: ["ISO/IEC 27018", _jsx("div", {})]
  })
}, {
  depth: 2,
  url: "#isoiec-27701",
  title: _jsxs(_Fragment, {
    children: ["ISO/IEC 27701", _jsx("div", {})]
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    div: "div",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    hr: "hr",
    img: "img",
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
    children: [_jsx(_components.h2, {
      id: "简介",
      children: "简介"
    }), `
`, _jsx(_components.p, {
      children: "本文提供了声网的信息安全说明。"
    }), `
`, _jsx(_components.p, {
      children: "声网服务支持内置加密和自定义加密功能，你可以选择任意一种方式进行加密。下图描述了启用加密功能后的数据传输流程："
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "/img/security/encryption.png",
        alt: "加密数据传输流程"
      })
    }), `
`, _jsx(_components.h3, {
      id: "目的",
      children: "目的"
    }), `
`, _jsx(_components.p, {
      children: "致力于保障声网所接触到的客户及终端用户物理和电子信息资产的保密性、完整性和可用性。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "保密性：防止未经授权的访问和窃听"
      }), `
`, _jsx(_components.li, {
        children: "完整性：防止篡改和伪造数据"
      }), `
`, _jsx(_components.li, {
        children: "可用性：通过声网全球实时虚拟通信网 (SD-RTN™) 实现数据可用性"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "范围",
      children: "范围"
    }), `
`, _jsx(_components.p, {
      children: "本信息安全说明主要阐述声网如何进行信息管理，以保护客户及终端用户数据安全。"
    }), `
`, _jsx(_components.h2, {
      id: "数据分类",
      children: "数据分类"
    }), `
`, _jsx(_components.p, {
      children: "所有信息根据以下策略分类并进行相应保护，适用于任何格式的数据和媒体资源。"
    }), `
`, _jsx(_components.p, {
      children: "我们将所处理的信息分为如下几类："
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "类别"
          }), _jsx(_components.th, {
            children: "描述"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "客户账户信息"
          }), _jsx(_components.td, {
            children: "客户账户相关信息，包括客户 ID、客户 IP、网络类型、操作系统、Email 地址、电话号码、产品偏好、编程平台、UTM 信息、身份证件信息、公司名称、公司 URL、账单信息、交易信息、购买的套餐信息、项目相关状态、提交的工单、账号内成员信息和后台控制台访问记录等。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "终端用户信息"
          }), _jsx(_components.td, {
            children: "所有经客户收集的与终端个人用户设备、网络相关的信息，包括麦克风和摄像头信息、CPU 状态、内存状态、电池状态、系统版本、手机型号、手机信号等级、接收的信号强度指示（RSSI）、网络类型、用户属性、频道属性等。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "通话内容"
          }), _jsx(_components.td, {
            children: "用户在通话过程中的音视频数据。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "日志"
          }), _jsx(_components.td, {
            children: "访问声网 SD-RTN™ 时由声网服务器生成的用户媒体服务器日志数据。日志不包含文本聊天信息或用户个人信息。"
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
`, _jsx(_components.li, {
            children: "如果客户使用声网服务的加密功能，通话内容可以在终端设备上进行加密后在声网服务器间传输。"
          }), `
`, _jsx(_components.li, {
            children: "当客户使用声网服务时，声网不会记录客户的第三方账户信息，例如：信用卡信息和登录控制台的第三方账号信息。"
          }), `
`]
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "安全标准",
      children: "安全标准"
    }), `
`, _jsx(_components.h3, {
      id: "数据安全",
      children: "数据安全"
    }), `
`, _jsx(_components.p, {
      children: "用户与声网服务器间的通讯将受到声网私有传输协议、安全传输层协议 (TLS) 和 Web Socket Secure (WSS) 等协议的保护，你也可选择采用高级加密标准 (AES) 或自定义加密算法对音视频数据进行加密保护。声网 SD-RTN™ 在传输过程中没有任何可对传输的信息进行解密的密钥。通话内容信息只能在终端设备上（如客户端 app 和本地服务端录制服务器）通过客户授权密钥才能解密。"
    }), `
`, _jsx(_components.h3, {
      id: "数据可用性",
      children: "数据可用性"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "海量数据中心：声网在全球区域有多个机房可以提供服务。任何机房遭受攻击，都不会影响其他机房的正常运转、不影响整体服务。"
      }), `
`, _jsx(_components.li, {
        children: "故障自愈：数据中心若遭遇拒绝服务（DoS）等难以防范的恶意攻击导致服务故障，声网会自动隔离故障机器，保障服务不受影响。"
      }), `
`, _jsx(_components.li, {
        children: "DDoS 攻击防范：声网在每个核心的云数据中心配置了反 DDoS 防火墙，在全球有两百多个分布式数据中心，有足够的能力和资源控制 DDoS 的风险。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "数据储存",
      children: "数据储存"
    }), `
`, _jsx(_components.p, {
      children: "声网向客户提供本地服务端录制 SDK 和云端录制产品，客户可以对部分或全部通话内容进行录制。使用录制服务时，所有录像/录音均存放在客户提供的存储服务器。"
    }), `
`, _jsx(_components.h3, {
      id: "访问授权",
      children: "访问授权"
    }), `
`, _jsxs(_components.p, {
      children: ["终端用户访问声网 SD-RTN™ 时，可以通过 Token 进行认证，详见", _jsx(_components.a, {
        href: "https://doc.shengwang.cn/doc/rtc/android/basic-features/token-authentication",
        children: "使用 Token 鉴权"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "访问控制",
      children: "访问控制"
    }), `
`, _jsx(_components.h4, {
      id: "电子访问控制",
      children: "电子访问控制"
    }), `
`, _jsx(_components.p, {
      children: "声网对内部的所有系统实行严格的访问控制管理，所有用户拥有独立内部账号和授权体系，且必须经过二步验证，任何访问记录都会有备案。"
    }), `
`, _jsx(_components.p, {
      children: "所有涉及用户数据服务的机器，均受到严格的审计和保护。声网员工将仅在必要情况下，通过获取临时授权访问到生产服务器，这一过程将全程录屏，并保留所有操作记录。"
    }), `
`, _jsx(_components.h4, {
      id: "物理访问控制",
      children: "物理访问控制"
    }), `
`, _jsx(_components.p, {
      children: "所有运营机器均托管于满足 ISO27001 或以上信息安全管理体系认证的机房，且该机房会按照托管协议或数据保护协 (DPA) 的规定保护信息安全。无论是第三方的托管供应商还是声网的员工，都必须经过审批才可以接触机器和设备。"
    }), `
`, _jsx(_components.h2, {
      id: "角色和职责",
      children: "角色和职责"
    }), `
`, _jsx(_components.p, {
      children: "声网不仅对自己的员工赋予责权，对客户也有相应要求，详见下文。"
    }), `
`, _jsx(_components.h3, {
      id: "声网内部角色和职责",
      children: "声网内部角色和职责"
    }), `
`, _jsx(_components.p, {
      children: "声网内部安全任务和职责细分如下："
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "角色"
          }), _jsx(_components.th, {
            children: "职责"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "信息安全小组委员会"
          }), _jsx(_components.td, {
            children: "信息安全小组委员会 (ISSC) 负责制定并实施安全策略和规程。ISSC 监督公司严格执行既定制度，对声网安全策略开展定期的技术或非技术评估。ISSC 还可任命授权员工。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "授权员工"
          }), _jsx(_components.td, {
            children: "授权员工指有权访问运营机器的员工。授权员工人数控制在最低范围之内，由 ISSC 指派，保证操作平台和声网服务的正常运作和维护。"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "所有其他员工"
          }), _jsx(_components.td, {
            children: "所有其他员工都必须遵守该制度，根据各自的工作权限确保安全保密性。一旦发现有违规行为，要求立即向管理层汇报。"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "职责分担",
      children: "职责分担"
    }), `
`, _jsx(_components.p, {
      children: "客户在对声网 SD-RTN™ 进行评估时，有必要了解和区分以下安全措施:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "声网实施和运作的安全措施"
      }), `
`, _jsx(_components.li, {
        children: "客户在使用声网 SD-RTN™ 服务时，为保障通话内容信息和程序安全而实施和运作的安全措施"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "客户可自主选择安全措施，以保障自己的信息、平台、程序、系统和网络安全。声网客户收集的客户或终端用户的数据信息，如程序登录信息、身份识别、密码、支付信息、姓名和地址等，都由客户自己保管。"
    }), `
`, _jsx(_components.p, {
      children: "同时，声网建议开发者和客户在涉及用户个人信息调取时，务必在明显位置添加提示，并设置开启和关闭按钮，由用户决定是否允许调取个人信息。"
    }), `
`, _jsx(_components.h2, {
      id: "员工安全意识培训",
      children: "员工安全意识培训"
    }), `
`, _jsx(_components.p, {
      children: "声网对所有新入职员工均开展信息保护、安全及合规培训，并确保所有员工每年至少接受一次信息保密意识的讲座和培训。 所有授权员工（即有权访问运营机器的员工）将额外接受相应的培训。"
    }), `
`, _jsx(_components.h2, {
      id: "违规处理",
      children: "违规处理"
    }), `
`, _jsx(_components.p, {
      children: "员工需遵守保密协议及内部安全制度。如果出现违反情况，会视情况严重程度采取相应的违规处理措施，包括但不限于谈话、加强培训教育、解除劳动协议以及追究其他法律责任等。"
    }), `
`, _jsx(_components.h2, {
      id: "潜在安全漏洞",
      children: "潜在安全漏洞"
    }), `
`, _jsxs(_components.p, {
      children: ["如果您发现我们的技术平台有潜在安全漏洞，请直接发送邮件到 ", _jsx(_components.a, {
        href: "mailto:security@shengwang.cn",
        children: "security@shengwang.cn"
      }), "。因为漏洞信息比较敏感，报告时请务必使用我们的 PGP 公钥 (KEY ID 2F4553BE) 进行加密。我们的安全专家会在第一时间处理并反馈，非常感谢。"]
    }), `
`, _jsx(_components.p, {
      children: "为便于验证和定位漏洞，声网希望您的邮件中包含但不限于以下内容："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "组织或个人联系方式"
      }), `
`, _jsx(_components.li, {
        children: "受影响的产品或方案及其版本"
      }), `
`, _jsx(_components.li, {
        children: "潜在漏洞描述"
      }), `
`, _jsx(_components.li, {
        children: "技术细节（例如系统配置、定位方法、问题重现的步骤等）"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "安全指南",
      children: "安全指南"
    }), `
`, _jsx(_components.h3, {
      id: "声网的服务安全吗可以加密吗",
      children: "声网的服务安全吗？可以加密吗？"
    }), `
`, _jsxs(_components.p, {
      children: ["声网是一个安全的平台。我们支持传输协议加密和媒体内容加密。同时声网全网采用 AES 加密来保障数据传输安全，通过美国 HIPAA 认证，医疗和多行业适用。提供加密 API 可行业定制加密。在我们的 SDK 工具包中，我们提供了相关接口，如需自定义加密，请参考所需平台的", _jsx(_components.a, {
        href: "https://doc.shengwang.cn/doc/rtc/android/advanced-features/channel-encryption",
        children: "媒体流加密文档"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "如何使用声网-sdk-保护数据安全",
      children: "如何使用声网 SDK 保护数据安全？"
    }), `
`, _jsxs(_components.p, {
      children: ["为保证传输数据的安全性，声网服务支持音视频数据加密。客户可以使用声网预置的 AES-128/AES-256 等算法，或通过客户自定义的加密算法实现加密，请参考所需平台的", _jsx(_components.a, {
        href: "https://doc.shengwang.cn/doc/rtc/android/advanced-features/channel-encryption",
        children: "媒体流加密文档"
      }), "。加密密钥完全由客户自行生成和分发。声网推荐客户针对每个频道使用独立密钥以实现最高等级的数据安全。"]
    }), `
`, _jsx(_components.h3, {
      id: "声网-sdk-提供的-aes-加密模式是否安全",
      children: "声网 SDK 提供的 AES 加密模式是否安全？"
    }), `
`, _jsx(_components.p, {
      children: "对于协议加密，声网 RTC Native SDK、RTM Native SDK、RTC Web SDK 和 RTM Web SDK 采用的都是 AES-128 模式。"
    }), `
`, _jsxs(_components.p, {
      children: ["对于内容加密，声网 SDK 提供了AES_128 和 AES_256 的加密模式。对于安全性要求较高的应用，声网推荐使用自定义加密。但是声网本地服务端录制和云录制服务不支持自定义加密功能。更多信息可以", _jsx(_components.a, {
        href: "https://ticket.shengwang.cn/",
        children: "联系技术支持"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "声网服务器会存储音视频通话内容吗",
      children: "声网服务器会存储音视频通话内容吗？"
    }), `
`, _jsx(_components.p, {
      children: "声网的服务器上不会存储任何音视频通话内容。在使用平台时，声网 SDK 会将信息传送到声网服务器上。"
    }), `
`, _jsx(_components.h3, {
      id: "声网的网络如何应对-ddos-攻击",
      children: "声网的网络如何应对 DDoS 攻击？"
    }), `
`, _jsx(_components.p, {
      children: "声网会定期扫描核心网络节点，检查并清理可能的安全漏洞，还在每个核心的云数据中心配置了反 DDoS 防火墙，以确保核心节点免遭攻击。声网在全球有两百多个分布式数据中心，有足够的能力和资源控制 DDoS 的风险。"
    }), `
`, _jsx(_components.h3, {
      id: "声网服务器会缓存音视频通话内容吗",
      children: "声网服务器会缓存音视频通话内容吗？"
    }), `
`, _jsx(_components.p, {
      children: "在使用声网服务时，音视频数据会通过声网服务器进行传输，声网服务器会在传输过程中缓存该数据 10 秒，并在通话结束后立即释放所有音视频数据。"
    }), `
`, _jsx(_components.hr, {}), `
`, _jsx(_components.h2, {
      id: "title-iso-证书",
      children: "title: ISO 证书"
    }), `
`, _jsx(_components.p, {
      children: "安全与合规是实时互动的基本要求。声网遵守不同国家和行业的合规性要求，打造安全可靠的云服务。"
    }), `
`, _jsx(_components.p, {
      children: "声网的 ISO 认证通过了中国合格评定国家认可委员会 (IFA CNAS)、英国皇家认可委员会 (UKAS) 和挪威船级社 (DNV) 三个不同认证组织的监督和认可。声网在全球范围内按照国际认可的标准建设云服务技术，保障全球客户的安全。"
    }), `
`, _jsxs(_components.h2, {
      id: "isoiec-27001",
      children: ["ISO/IEC 27001", _jsx(_components.div, {})]
    }), `
`, _jsxs(_components.p, {
      children: ["ISO/IEC 27001", _jsx(_components.div, {}), " 是国际上最权威、最被广泛接受和应用的信息安全领域的体系认证标准。该体系覆盖了声网实时互动云平台在全球范围内运营和维护过程中的信息安全管理。"]
    }), `
`, _jsx(_components.p, {
      children: "证书下载："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsxs(_components.a, {
            href: "https://web-cdn.agora.io/docs-files/1603248023032",
            children: ["ISO/IEC 27001", _jsx(_components.div, {})]
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsxs(_components.a, {
            href: "https://web-cdn.agora.io/docs-files/1603248948727",
            children: ["GB/T 22080-2016/ISO/IEC 27001", _jsx(_components.div, {})]
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.h2, {
      id: "isoiec-27017",
      children: ["ISO/IEC 27017", _jsx(_components.div, {})]
    }), `
`, _jsxs(_components.p, {
      children: ["ISO/IEC 27017", _jsx(_components.div, {}), " 是 ISO/IEC 27001 的补充标准，对云服务厂商提供了信息安全实施规范。"]
    }), `
`, _jsxs(_components.p, {
      children: ["证书下载：", _jsxs(_components.a, {
        href: "https://web-cdn.agora.io/docs-files/1603249196108",
        children: ["ISO/IEC 27017", _jsx(_components.div, {})]
      })]
    }), `
`, _jsxs(_components.h2, {
      id: "isoiec-27018",
      children: ["ISO/IEC 27018", _jsx(_components.div, {})]
    }), `
`, _jsxs(_components.p, {
      children: ["ISO/IEC 27018", _jsx(_components.div, {}), " 是 ISO/IEC 27001 的补充标准，对云服务厂商提供了个人信息保护实施规范。"]
    }), `
`, _jsxs(_components.p, {
      children: ["证书下载：", _jsxs(_components.a, {
        href: "https://web-cdn.agora.io/docs-files/1603249122450",
        children: ["ISO/IEC 27018", _jsx(_components.div, {})]
      })]
    }), `
`, _jsxs(_components.h2, {
      id: "isoiec-27701",
      children: ["ISO/IEC 27701", _jsx(_components.div, {})]
    }), `
`, _jsxs(_components.p, {
      children: ["ISO/IEC 27701", _jsx(_components.div, {}), " 是 ISO/IEC 27001 信息安全管理和 ISO/IEC 27002 安全控制在隐私方面的扩展。它是一项国际管理系统标准体系，为保护个人隐私提供指导，包括组织应如何管理个人信息。"]
    }), `
`, _jsxs(_components.p, {
      children: ["证书下载：", _jsxs(_components.a, {
        href: "https://web-cdn.agora.io/docs-files/1638761744198",
        children: ["ISO/IEC 27701", _jsx(_components.div, {})]
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
