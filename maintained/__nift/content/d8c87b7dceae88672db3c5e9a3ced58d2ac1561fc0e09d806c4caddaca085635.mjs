import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "ContentInspectConfig",
  description: "用于配置截图和上传功能。"
};
export let _markdown = `

<a id="class_contentinspectconfig__prototype" />

\`\`\`java
public class ContentInspectConfig {
  public final static int CONTENT_INSPECT_TYPE_INVALID = 0;
  @Deprecated public final static int CONTENT_INSPECT_TYPE_MODERATION = 1;
  public final static int CONTENT_INSPECT_TYPE_SUPERVISE = 2;
  public final static int CONTENT_INSPECT_TYPE_IMAGE_MODERATION = 3;
  public static final int MAX_CONTENT_INSPECT_MODULE_COUNT = 32;
  public String extraInfo;
  public String serverConfig;
  public ContentInspectModule[] modules;
  public int moduleCount;
}
\`\`\`

<a id="class_contentinspectconfig__detailed_desc" />

### \`自从\` [#自从]

自 v3.4.2 版本新增。

用于设置截图和上传的相关参数。

<a id="class_contentinspectconfig__parameters" />

## 属性 [#属性]

### \`CONTENT_INSPECT_TYPE_INVALID\` [#content_inspect_type_invalid]

0：（默认）无实际功能。不要将 \`type\` 设置为该值。

### \`CONTENT_INSPECT_TYPE_MODERATION\` [#content_inspect_type_moderation]

已废弃的视频内容审核类型。

### \`CONTENT_INSPECT_TYPE_SUPERVISE\` [#content_inspect_type_supervise]

2：通过声网自研扩展进行视频截图并上传。SDK 会对本地用户发送的视频进行截图并上传。

### \`CONTENT_INSPECT_TYPE_IMAGE_MODERATION\` [#content_inspect_type_image_moderation]

3：通过声网扩展市场中的扩展插件进行视频截图并上传。SDK 使用扩展插件对频道中的视频流进行截图并上传。

### \`MAX_CONTENT_INSPECT_MODULE_COUNT\` [#max_content_inspect_module_count]

功能模块的最大配置数量为 32。

### \`extraInfo\` [#extrainfo]

视频内容的附加信息（最大长度为 1024 字节）。SDK 会将截图和附加信息一并发送到声网服务器。完成上传后，声网服务器会将附加信息和回调通知发送到你的服务器。

### \`serverConfig\` [#serverconfig]

（可选）通过声网扩展市场中的扩展上传视频截图时的服务器配置。仅当 [ContentInspectModule](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-contentinspectmodule) 中 \`type\` 设置为 \`CONTENT_INSPECT_TYPE_IMAGE_MODERATION\` 时该参数才生效。如需使用该功能，请[联系技术支持](https://ticket.shengwang.cn/)。

### \`modules\` [#modules]

功能模块。最多支持配置 32 个实例，取值范围为 \\[1, 32]。详见 [ContentInspectModule](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-contentinspectmodule)。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    每个功能模块最多只能配置一个实例。目前仅支持本地截图上传功能。
  </CalloutDescription>
</CalloutContainer>

### \`moduleCount\` [#modulecount]

功能模块的数量，即配置的 [ContentInspectModule](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-contentinspectmodule) 实例数量。必须与 \`modules\` 中配置的实例数量一致，最大值为 32。
`;
export let structuredData = {
  contents: [{
    heading: "自从",
    content: "自 v3.4.2 版本新增。"
  }, {
    heading: "自从",
    content: "用于设置截图和上传的相关参数。"
  }, {
    heading: "content_inspect_type_invalid",
    content: "0：（默认）无实际功能。不要将 `type` 设置为该值。"
  }, {
    heading: "content_inspect_type_moderation",
    content: "已废弃的视频内容审核类型。"
  }, {
    heading: "content_inspect_type_supervise",
    content: "2：通过声网自研扩展进行视频截图并上传。SDK 会对本地用户发送的视频进行截图并上传。"
  }, {
    heading: "content_inspect_type_image_moderation",
    content: "3：通过声网扩展市场中的扩展插件进行视频截图并上传。SDK 使用扩展插件对频道中的视频流进行截图并上传。"
  }, {
    heading: "max_content_inspect_module_count",
    content: "功能模块的最大配置数量为 32。"
  }, {
    heading: "extrainfo",
    content: "视频内容的附加信息（最大长度为 1024 字节）。SDK 会将截图和附加信息一并发送到声网服务器。完成上传后，声网服务器会将附加信息和回调通知发送到你的服务器。"
  }, {
    heading: "serverconfig",
    content: "（可选）通过声网扩展市场中的扩展上传视频截图时的服务器配置。仅当 ContentInspectModule 中 `type` 设置为 `CONTENT_INSPECT_TYPE_IMAGE_MODERATION` 时该参数才生效。如需使用该功能，请联系技术支持。"
  }, {
    heading: "modules",
    content: "功能模块。最多支持配置 32 个实例，取值范围为 \\[1, 32]。详见 ContentInspectModule。"
  }, {
    heading: "modules",
    content: "每个功能模块最多只能配置一个实例。目前仅支持本地截图上传功能。"
  }, {
    heading: "modulecount",
    content: "功能模块的数量，即配置的 ContentInspectModule 实例数量。必须与 `modules` 中配置的实例数量一致，最大值为 32。"
  }],
  headings: [{
    id: "自从",
    content: "`自从`"
  }, {
    id: "属性",
    content: "属性"
  }, {
    id: "content_inspect_type_invalid",
    content: "`CONTENT_INSPECT_TYPE_INVALID`"
  }, {
    id: "content_inspect_type_moderation",
    content: "`CONTENT_INSPECT_TYPE_MODERATION`"
  }, {
    id: "content_inspect_type_supervise",
    content: "`CONTENT_INSPECT_TYPE_SUPERVISE`"
  }, {
    id: "content_inspect_type_image_moderation",
    content: "`CONTENT_INSPECT_TYPE_IMAGE_MODERATION`"
  }, {
    id: "max_content_inspect_module_count",
    content: "`MAX_CONTENT_INSPECT_MODULE_COUNT`"
  }, {
    id: "extrainfo",
    content: "`extraInfo`"
  }, {
    id: "serverconfig",
    content: "`serverConfig`"
  }, {
    id: "modules",
    content: "`modules`"
  }, {
    id: "modulecount",
    content: "`moduleCount`"
  }]
};
export let toc = [{
  depth: 3,
  url: "#自从",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 2,
  url: "#属性",
  title: _jsx(_Fragment, {
    children: "属性"
  })
}, {
  depth: 3,
  url: "#content_inspect_type_invalid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "CONTENT_INSPECT_TYPE_INVALID"
    })
  })
}, {
  depth: 3,
  url: "#content_inspect_type_moderation",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "CONTENT_INSPECT_TYPE_MODERATION"
    })
  })
}, {
  depth: 3,
  url: "#content_inspect_type_supervise",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "CONTENT_INSPECT_TYPE_SUPERVISE"
    })
  })
}, {
  depth: 3,
  url: "#content_inspect_type_image_moderation",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "CONTENT_INSPECT_TYPE_IMAGE_MODERATION"
    })
  })
}, {
  depth: 3,
  url: "#max_content_inspect_module_count",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "MAX_CONTENT_INSPECT_MODULE_COUNT"
    })
  })
}, {
  depth: 3,
  url: "#extrainfo",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "extraInfo"
    })
  })
}, {
  depth: 3,
  url: "#serverconfig",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "serverConfig"
    })
  })
}, {
  depth: 3,
  url: "#modules",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "modules"
    })
  })
}, {
  depth: 3,
  url: "#modulecount",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "moduleCount"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
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
      id: "class_contentinspectconfig__prototype"
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
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
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
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " ContentInspectConfig"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " final"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " CONTENT_INSPECT_TYPE_INVALID "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  @"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "Deprecated"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " final"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " CONTENT_INSPECT_TYPE_MODERATION "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " final"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " CONTENT_INSPECT_TYPE_SUPERVISE "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 2"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " final"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " CONTENT_INSPECT_TYPE_IMAGE_MODERATION "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 3"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " static"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " final"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " MAX_CONTENT_INSPECT_MODULE_COUNT "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 32"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String extraInfo;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String serverConfig;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ContentInspectModule"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[] modules;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " moduleCount;"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsx("a", {
      id: "class_contentinspectconfig__detailed_desc"
    }), `
`, _jsx(_components.h3, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v3.4.2 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "用于设置截图和上传的相关参数。"
    }), `
`, _jsx("a", {
      id: "class_contentinspectconfig__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "content_inspect_type_invalid",
      children: _jsx(_components.code, {
        children: "CONTENT_INSPECT_TYPE_INVALID"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["0：（默认）无实际功能。不要将 ", _jsx(_components.code, {
        children: "type"
      }), " 设置为该值。"]
    }), `
`, _jsx(_components.h3, {
      id: "content_inspect_type_moderation",
      children: _jsx(_components.code, {
        children: "CONTENT_INSPECT_TYPE_MODERATION"
      })
    }), `
`, _jsx(_components.p, {
      children: "已废弃的视频内容审核类型。"
    }), `
`, _jsx(_components.h3, {
      id: "content_inspect_type_supervise",
      children: _jsx(_components.code, {
        children: "CONTENT_INSPECT_TYPE_SUPERVISE"
      })
    }), `
`, _jsx(_components.p, {
      children: "2：通过声网自研扩展进行视频截图并上传。SDK 会对本地用户发送的视频进行截图并上传。"
    }), `
`, _jsx(_components.h3, {
      id: "content_inspect_type_image_moderation",
      children: _jsx(_components.code, {
        children: "CONTENT_INSPECT_TYPE_IMAGE_MODERATION"
      })
    }), `
`, _jsx(_components.p, {
      children: "3：通过声网扩展市场中的扩展插件进行视频截图并上传。SDK 使用扩展插件对频道中的视频流进行截图并上传。"
    }), `
`, _jsx(_components.h3, {
      id: "max_content_inspect_module_count",
      children: _jsx(_components.code, {
        children: "MAX_CONTENT_INSPECT_MODULE_COUNT"
      })
    }), `
`, _jsx(_components.p, {
      children: "功能模块的最大配置数量为 32。"
    }), `
`, _jsx(_components.h3, {
      id: "extrainfo",
      children: _jsx(_components.code, {
        children: "extraInfo"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频内容的附加信息（最大长度为 1024 字节）。SDK 会将截图和附加信息一并发送到声网服务器。完成上传后，声网服务器会将附加信息和回调通知发送到你的服务器。"
    }), `
`, _jsx(_components.h3, {
      id: "serverconfig",
      children: _jsx(_components.code, {
        children: "serverConfig"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["（可选）通过声网扩展市场中的扩展上传视频截图时的服务器配置。仅当 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-contentinspectmodule",
        children: "ContentInspectModule"
      }), " 中 ", _jsx(_components.code, {
        children: "type"
      }), " 设置为 ", _jsx(_components.code, {
        children: "CONTENT_INSPECT_TYPE_IMAGE_MODERATION"
      }), " 时该参数才生效。如需使用该功能，请", _jsx(_components.a, {
        href: "https://ticket.shengwang.cn/",
        children: "联系技术支持"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "modules",
      children: _jsx(_components.code, {
        children: "modules"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["功能模块。最多支持配置 32 个实例，取值范围为 [1, 32]。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-contentinspectmodule",
        children: "ContentInspectModule"
      }), "。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "每个功能模块最多只能配置一个实例。目前仅支持本地截图上传功能。"
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "modulecount",
      children: _jsx(_components.code, {
        children: "moduleCount"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["功能模块的数量，即配置的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-contentinspectmodule",
        children: "ContentInspectModule"
      }), " 实例数量。必须与 ", _jsx(_components.code, {
        children: "modules"
      }), " 中配置的实例数量一致，最大值为 32。"]
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
