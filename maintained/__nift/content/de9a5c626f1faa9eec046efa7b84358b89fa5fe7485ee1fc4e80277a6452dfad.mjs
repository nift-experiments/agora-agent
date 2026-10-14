import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "虚拟背景",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_virtualbackground" />

<a id="api_irtcengine_enablevirtualbackground" />

## enableVirtualBackground \\[1/2] [#enablevirtualbackground-12]

启用或关闭虚拟背景功能。

<a id="api_irtcengine_enablevirtualbackground__prototype" />

\`\`\`java
public abstract int enableVirtualBackground(boolean enabled, VirtualBackgroundSource backgroundSource, SegmentationProperty segproperty);
\`\`\`

<a id="api_irtcengine_enablevirtualbackground__detailed_desc" />

虚拟背景功能支持本地用户将原始背景替换为静态图片、动态视频、模糊背景或人像背景分割，以实现画中画效果。启用该功能后，频道内所有用户都可以看到自定义背景。请在调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 或 \`startPreview\` 后调用该方法。

注：

* 使用视频作为虚拟背景会导致内存持续增长，可能引发应用崩溃等问题。建议降低视频的分辨率和帧率。
* 此功能对设备性能要求较高。调用该方法时，SDK 会自动检测当前设备的性能。声网建议在以下处理器设备上使用该功能：
  * Snapdragon 700 系列 750G 及以上版本。
  * Snapdragon 800 系列 835 及以上版本。
  * Dimensity 700 系列 720 及以上版本。
  * Kirin 800 系列 810 及以上版本。
  * Kirin 900 系列 980 及以上版本。
* 声网建议在以下场景中使用该功能：
  * 使用高清摄像头设备，且环境光线均匀。
  * 拍摄画面中物体较少，人像为半身像且无遮挡。
  * 背景为纯色，且与用户服装颜色有明显区别。
* 此方法依赖虚拟背景动态库 libagora\\_segmentation\\_extension.so。若该动态库被删除，则无法正常启用该功能。

<a id="api_irtcengine_enablevirtualbackground__parameters" />

### 参数 [#参数]

#### \`enabled\` [#enabled]

是否启用虚拟背景：

* true：启用虚拟背景。
* false：关闭虚拟背景。

#### \`backgroundSource\` [#backgroundsource]

自定义背景。为了使自定义背景图像的分辨率适配 SDK 采集的视频分辨率，SDK 会对图像进行缩放和裁剪，确保图像内容不失真。详见 [VirtualBackgroundSource](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-virtualbackgroundsource)。

#### \`segproperty\` [#segproperty]

背景图像的处理属性。详见 [SegmentationProperty](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-segmentationproperty)。

<a id="api_irtcengine_enablevirtualbackground__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -4：设备性能不满足虚拟背景功能的要求。声网建议在性能更高的设备上尝试。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_enablevirtualbackground2" />

## enableVirtualBackground \\[2/2] [#enablevirtualbackground-22]

启用虚拟背景并指定媒体源，或关闭虚拟背景。

<a id="api_irtcengine_enablevirtualbackground2__prototype" />

\`\`\`java
public abstract int enableVirtualBackground(boolean enabled, VirtualBackgroundSource backgroundSource, SegmentationProperty segproperty, Constants.MediaSourceType sourceType);
\`\`\`

<a id="api_irtcengine_enablevirtualbackground2__detailed_desc" />

该方法用于启用或关闭虚拟背景功能。你可以将原始背景替换为静态图片、动态视频、模糊背景或人像背景分割，以实现画中画效果。启用后，频道内所有用户都可以看到自定义背景。 该方法与 [enableVirtualBackground \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/virtualbackground#api_irtcengine_enablevirtualbackground) 功能相同，但本方法允许你指定应用虚拟背景的媒体源类型。请在调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 或 \`startPreview\` 后调用本方法。

注：

* 使用视频作为虚拟背景会导致内存持续增长，可能引发应用崩溃。建议降低视频的分辨率和帧率。
* 此功能对设备性能要求较高。调用本方法时，SDK 会自动检测当前设备的能力。声网建议在以下处理器设备上使用该功能：
  * Snapdragon 700 系列 750G 及以上版本。
  * Snapdragon 800 系列 835 及以上版本。
  * Dimensity 700 系列 720 及以上版本。
  * Kirin 800 系列 810 及以上版本。
  * Kirin 900 系列 980 及以上版本。
* 声网建议在以下场景中使用该功能：
  * 使用高清摄像头设备，且环境光线均匀。
  * 拍摄画面中物体较少，人像为半身像且无遮挡。
  * 背景为纯色，且与用户服装颜色有明显区别。
* 本方法依赖虚拟背景动态库 libagora\\_segmentation\\_extension.so。若该动态库被删除，则无法正常启用该功能。

<a id="api_irtcengine_enablevirtualbackground2__parameters" />

### 参数 [#参数-1]

#### \`enabled\` [#enabled-1]

是否启用虚拟背景：

* true：启用虚拟背景。
* false：关闭虚拟背景。

#### \`backgroundSource\` [#backgroundsource-1]

自定义背景。SDK 会对自定义背景图像进行缩放和裁剪，以适配采集的视频分辨率，并确保图像内容不失真。详见 [VirtualBackgroundSource](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-virtualbackgroundsource)。

#### \`segproperty\` [#segproperty-1]

背景图像的处理属性。详见 [SegmentationProperty](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-segmentationproperty)。

#### \`sourceType\` [#sourcetype]

媒体源类型。详见 [MediaSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype)。

注： 在本方法中，该参数仅支持以下两种设置：

* 默认值为 PRIMARY\\_CAMERA\\_SOURCE。
* 若使用自定义视频源，请将该参数设置为 CUSTOM\\_VIDEO\\_SOURCE。

<a id="api_irtcengine_enablevirtualbackground2__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -4：设备能力不满足虚拟背景功能的要求。声网建议在性能更高的设备上尝试使用该功能。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)
`;
export let structuredData = {
  contents: [{
    heading: "enablevirtualbackground-12",
    content: "启用或关闭虚拟背景功能。"
  }, {
    heading: "enablevirtualbackground-12",
    content: "虚拟背景功能支持本地用户将原始背景替换为静态图片、动态视频、模糊背景或人像背景分割，以实现画中画效果。启用该功能后，频道内所有用户都可以看到自定义背景。请在调用 enableVideo 或 `startPreview` 后调用该方法。"
  }, {
    heading: "enablevirtualbackground-12",
    content: "注："
  }, {
    heading: "enablevirtualbackground-12",
    content: "使用视频作为虚拟背景会导致内存持续增长，可能引发应用崩溃等问题。建议降低视频的分辨率和帧率。"
  }, {
    heading: "enablevirtualbackground-12",
    content: "此功能对设备性能要求较高。调用该方法时，SDK 会自动检测当前设备的性能。声网建议在以下处理器设备上使用该功能："
  }, {
    heading: "enablevirtualbackground-12",
    content: "Snapdragon 700 系列 750G 及以上版本。"
  }, {
    heading: "enablevirtualbackground-12",
    content: "Snapdragon 800 系列 835 及以上版本。"
  }, {
    heading: "enablevirtualbackground-12",
    content: "Dimensity 700 系列 720 及以上版本。"
  }, {
    heading: "enablevirtualbackground-12",
    content: "Kirin 800 系列 810 及以上版本。"
  }, {
    heading: "enablevirtualbackground-12",
    content: "Kirin 900 系列 980 及以上版本。"
  }, {
    heading: "enablevirtualbackground-12",
    content: "声网建议在以下场景中使用该功能："
  }, {
    heading: "enablevirtualbackground-12",
    content: "使用高清摄像头设备，且环境光线均匀。"
  }, {
    heading: "enablevirtualbackground-12",
    content: "拍摄画面中物体较少，人像为半身像且无遮挡。"
  }, {
    heading: "enablevirtualbackground-12",
    content: "背景为纯色，且与用户服装颜色有明显区别。"
  }, {
    heading: "enablevirtualbackground-12",
    content: "此方法依赖虚拟背景动态库 libagora\\_segmentation\\_extension.so。若该动态库被删除，则无法正常启用该功能。"
  }, {
    heading: "enabled",
    content: "是否启用虚拟背景："
  }, {
    heading: "enabled",
    content: "true：启用虚拟背景。"
  }, {
    heading: "enabled",
    content: "false：关闭虚拟背景。"
  }, {
    heading: "backgroundsource",
    content: "自定义背景。为了使自定义背景图像的分辨率适配 SDK 采集的视频分辨率，SDK 会对图像进行缩放和裁剪，确保图像内容不失真。详见 VirtualBackgroundSource。"
  }, {
    heading: "segproperty",
    content: "背景图像的处理属性。详见 SegmentationProperty。"
  }, {
    heading: "返回值",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值",
    content: "-4：设备性能不满足虚拟背景功能的要求。声网建议在性能更高的设备上尝试。"
  }, {
    heading: "所属接口类",
    content: "RtcEngine"
  }, {
    heading: "enablevirtualbackground-22",
    content: "启用虚拟背景并指定媒体源，或关闭虚拟背景。"
  }, {
    heading: "enablevirtualbackground-22",
    content: "该方法用于启用或关闭虚拟背景功能。你可以将原始背景替换为静态图片、动态视频、模糊背景或人像背景分割，以实现画中画效果。启用后，频道内所有用户都可以看到自定义背景。 该方法与 enableVirtualBackground \\[1/2] 功能相同，但本方法允许你指定应用虚拟背景的媒体源类型。请在调用 enableVideo 或 `startPreview` 后调用本方法。"
  }, {
    heading: "enablevirtualbackground-22",
    content: "注："
  }, {
    heading: "enablevirtualbackground-22",
    content: "使用视频作为虚拟背景会导致内存持续增长，可能引发应用崩溃。建议降低视频的分辨率和帧率。"
  }, {
    heading: "enablevirtualbackground-22",
    content: "此功能对设备性能要求较高。调用本方法时，SDK 会自动检测当前设备的能力。声网建议在以下处理器设备上使用该功能："
  }, {
    heading: "enablevirtualbackground-22",
    content: "Snapdragon 700 系列 750G 及以上版本。"
  }, {
    heading: "enablevirtualbackground-22",
    content: "Snapdragon 800 系列 835 及以上版本。"
  }, {
    heading: "enablevirtualbackground-22",
    content: "Dimensity 700 系列 720 及以上版本。"
  }, {
    heading: "enablevirtualbackground-22",
    content: "Kirin 800 系列 810 及以上版本。"
  }, {
    heading: "enablevirtualbackground-22",
    content: "Kirin 900 系列 980 及以上版本。"
  }, {
    heading: "enablevirtualbackground-22",
    content: "声网建议在以下场景中使用该功能："
  }, {
    heading: "enablevirtualbackground-22",
    content: "使用高清摄像头设备，且环境光线均匀。"
  }, {
    heading: "enablevirtualbackground-22",
    content: "拍摄画面中物体较少，人像为半身像且无遮挡。"
  }, {
    heading: "enablevirtualbackground-22",
    content: "背景为纯色，且与用户服装颜色有明显区别。"
  }, {
    heading: "enablevirtualbackground-22",
    content: "本方法依赖虚拟背景动态库 libagora\\_segmentation\\_extension.so。若该动态库被删除，则无法正常启用该功能。"
  }, {
    heading: "enabled-1",
    content: "是否启用虚拟背景："
  }, {
    heading: "enabled-1",
    content: "true：启用虚拟背景。"
  }, {
    heading: "enabled-1",
    content: "false：关闭虚拟背景。"
  }, {
    heading: "backgroundsource-1",
    content: "自定义背景。SDK 会对自定义背景图像进行缩放和裁剪，以适配采集的视频分辨率，并确保图像内容不失真。详见 VirtualBackgroundSource。"
  }, {
    heading: "segproperty-1",
    content: "背景图像的处理属性。详见 SegmentationProperty。"
  }, {
    heading: "sourcetype",
    content: "媒体源类型。详见 MediaSourceType。"
  }, {
    heading: "sourcetype",
    content: "注： 在本方法中，该参数仅支持以下两种设置："
  }, {
    heading: "sourcetype",
    content: "默认值为 PRIMARY\\_CAMERA\\_SOURCE。"
  }, {
    heading: "sourcetype",
    content: "若使用自定义视频源，请将该参数设置为 CUSTOM\\_VIDEO\\_SOURCE。"
  }, {
    heading: "返回值-1",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-1",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-1",
    content: "-4：设备能力不满足虚拟背景功能的要求。声网建议在性能更高的设备上尝试使用该功能。"
  }, {
    heading: "所属接口类-1",
    content: "RtcEngine"
  }],
  headings: [{
    id: "enablevirtualbackground-12",
    content: "enableVirtualBackground [1/2]"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "enabled",
    content: "`enabled`"
  }, {
    id: "backgroundsource",
    content: "`backgroundSource`"
  }, {
    id: "segproperty",
    content: "`segproperty`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "enablevirtualbackground-22",
    content: "enableVirtualBackground [2/2]"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "enabled-1",
    content: "`enabled`"
  }, {
    id: "backgroundsource-1",
    content: "`backgroundSource`"
  }, {
    id: "segproperty-1",
    content: "`segproperty`"
  }, {
    id: "sourcetype",
    content: "`sourceType`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#enablevirtualbackground-12",
  title: _jsx(_Fragment, {
    children: "enableVirtualBackground [1/2]"
  })
}, {
  depth: 3,
  url: "#参数",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#enabled",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
    })
  })
}, {
  depth: 4,
  url: "#backgroundsource",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "backgroundSource"
    })
  })
}, {
  depth: 4,
  url: "#segproperty",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "segproperty"
    })
  })
}, {
  depth: 3,
  url: "#返回值",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#enablevirtualbackground-22",
  title: _jsx(_Fragment, {
    children: "enableVirtualBackground [2/2]"
  })
}, {
  depth: 3,
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#enabled-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
    })
  })
}, {
  depth: 4,
  url: "#backgroundsource-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "backgroundSource"
    })
  })
}, {
  depth: 4,
  url: "#segproperty-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "segproperty"
    })
  })
}, {
  depth: 4,
  url: "#sourcetype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sourceType"
    })
  })
}, {
  depth: 3,
  url: "#返回值-1",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-1",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "toc_virtualbackground"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevirtualbackground"
    }), `
`, _jsx(_components.h2, {
      id: "enablevirtualbackground-12",
      children: "enableVirtualBackground [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "启用或关闭虚拟背景功能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevirtualbackground__prototype"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " enableVirtualBackground"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " enabled, VirtualBackgroundSource backgroundSource, SegmentationProperty segproperty);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevirtualbackground__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["虚拟背景功能支持本地用户将原始背景替换为静态图片、动态视频、模糊背景或人像背景分割，以实现画中画效果。启用该功能后，频道内所有用户都可以看到自定义背景。请在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
        children: "enableVideo"
      }), " 或 ", _jsx(_components.code, {
        children: "startPreview"
      }), " 后调用该方法。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "使用视频作为虚拟背景会导致内存持续增长，可能引发应用崩溃等问题。建议降低视频的分辨率和帧率。"
      }), `
`, _jsxs(_components.li, {
        children: ["此功能对设备性能要求较高。调用该方法时，SDK 会自动检测当前设备的性能。声网建议在以下处理器设备上使用该功能：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Snapdragon 700 系列 750G 及以上版本。"
          }), `
`, _jsx(_components.li, {
            children: "Snapdragon 800 系列 835 及以上版本。"
          }), `
`, _jsx(_components.li, {
            children: "Dimensity 700 系列 720 及以上版本。"
          }), `
`, _jsx(_components.li, {
            children: "Kirin 800 系列 810 及以上版本。"
          }), `
`, _jsx(_components.li, {
            children: "Kirin 900 系列 980 及以上版本。"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["声网建议在以下场景中使用该功能：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "使用高清摄像头设备，且环境光线均匀。"
          }), `
`, _jsx(_components.li, {
            children: "拍摄画面中物体较少，人像为半身像且无遮挡。"
          }), `
`, _jsx(_components.li, {
            children: "背景为纯色，且与用户服装颜色有明显区别。"
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "此方法依赖虚拟背景动态库 libagora_segmentation_extension.so。若该动态库被删除，则无法正常启用该功能。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevirtualbackground__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用虚拟背景："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用虚拟背景。"
      }), `
`, _jsx(_components.li, {
        children: "false：关闭虚拟背景。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "backgroundsource",
      children: _jsx(_components.code, {
        children: "backgroundSource"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["自定义背景。为了使自定义背景图像的分辨率适配 SDK 采集的视频分辨率，SDK 会对图像进行缩放和裁剪，确保图像内容不失真。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-virtualbackgroundsource",
        children: "VirtualBackgroundSource"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "segproperty",
      children: _jsx(_components.code, {
        children: "segproperty"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["背景图像的处理属性。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-segmentationproperty",
        children: "SegmentationProperty"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevirtualbackground__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：方法调用成功。"
      }), `
`, _jsxs(_components.li, {
        children: ["< 0：方法调用失败。详见", _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/rtc/android/error-code",
          children: "错误码"
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-4：设备性能不满足虚拟背景功能的要求。声网建议在性能更高的设备上尝试。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevirtualbackground2"
    }), `
`, _jsx(_components.h2, {
      id: "enablevirtualbackground-22",
      children: "enableVirtualBackground [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "启用虚拟背景并指定媒体源，或关闭虚拟背景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevirtualbackground2__prototype"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " abstract"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " enableVirtualBackground"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " enabled, VirtualBackgroundSource backgroundSource, SegmentationProperty segproperty, Constants.MediaSourceType sourceType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevirtualbackground2__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法用于启用或关闭虚拟背景功能。你可以将原始背景替换为静态图片、动态视频、模糊背景或人像背景分割，以实现画中画效果。启用后，频道内所有用户都可以看到自定义背景。 该方法与 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/virtualbackground#api_irtcengine_enablevirtualbackground",
        children: "enableVirtualBackground [1/2]"
      }), " 功能相同，但本方法允许你指定应用虚拟背景的媒体源类型。请在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
        children: "enableVideo"
      }), " 或 ", _jsx(_components.code, {
        children: "startPreview"
      }), " 后调用本方法。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "使用视频作为虚拟背景会导致内存持续增长，可能引发应用崩溃。建议降低视频的分辨率和帧率。"
      }), `
`, _jsxs(_components.li, {
        children: ["此功能对设备性能要求较高。调用本方法时，SDK 会自动检测当前设备的能力。声网建议在以下处理器设备上使用该功能：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Snapdragon 700 系列 750G 及以上版本。"
          }), `
`, _jsx(_components.li, {
            children: "Snapdragon 800 系列 835 及以上版本。"
          }), `
`, _jsx(_components.li, {
            children: "Dimensity 700 系列 720 及以上版本。"
          }), `
`, _jsx(_components.li, {
            children: "Kirin 800 系列 810 及以上版本。"
          }), `
`, _jsx(_components.li, {
            children: "Kirin 900 系列 980 及以上版本。"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["声网建议在以下场景中使用该功能：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "使用高清摄像头设备，且环境光线均匀。"
          }), `
`, _jsx(_components.li, {
            children: "拍摄画面中物体较少，人像为半身像且无遮挡。"
          }), `
`, _jsx(_components.li, {
            children: "背景为纯色，且与用户服装颜色有明显区别。"
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "本方法依赖虚拟背景动态库 libagora_segmentation_extension.so。若该动态库被删除，则无法正常启用该功能。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevirtualbackground2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled-1",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用虚拟背景："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用虚拟背景。"
      }), `
`, _jsx(_components.li, {
        children: "false：关闭虚拟背景。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "backgroundsource-1",
      children: _jsx(_components.code, {
        children: "backgroundSource"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["自定义背景。SDK 会对自定义背景图像进行缩放和裁剪，以适配采集的视频分辨率，并确保图像内容不失真。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-virtualbackgroundsource",
        children: "VirtualBackgroundSource"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "segproperty-1",
      children: _jsx(_components.code, {
        children: "segproperty"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["背景图像的处理属性。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-segmentationproperty",
        children: "SegmentationProperty"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "sourcetype",
      children: _jsx(_components.code, {
        children: "sourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体源类型。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype",
        children: "MediaSourceType"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "注： 在本方法中，该参数仅支持以下两种设置："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "默认值为 PRIMARY_CAMERA_SOURCE。"
      }), `
`, _jsx(_components.li, {
        children: "若使用自定义视频源，请将该参数设置为 CUSTOM_VIDEO_SOURCE。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablevirtualbackground2__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-1",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：方法调用成功。"
      }), `
`, _jsxs(_components.li, {
        children: ["< 0：方法调用失败。详见", _jsx(_components.a, {
          href: "https://doc.shengwang.cn/api-ref/rtc/android/error-code",
          children: "错误码"
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-4：设备能力不满足虚拟背景功能的要求。声网建议在性能更高的设备上尝试使用该功能。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-1",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
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
