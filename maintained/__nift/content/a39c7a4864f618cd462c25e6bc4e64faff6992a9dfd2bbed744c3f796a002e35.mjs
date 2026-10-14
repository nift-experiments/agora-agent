import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Music",
  description: "用于表示音乐资源的详细信息。"
};
export let _markdown = `

<a id="class_music__prototype" />

\`\`\`java
public class Music {
  public long songCode;
  public String name;
  public String singer;
  public String poster;
  public String releaseTime;
  public int type;
  public int pitchType;
  public int durationS;
  public int[] lyricTypes;
  public MvProperty[] mvProperties;
  public ClimaxSegment[] climaxSegments;
}
\`\`\`

<a id="class_music__parameters" />

## 属性 [#属性]

### \`songCode\` [#songcode]

音乐资源的唯一标识符，用于识别某个音乐资源。

### \`name\` [#name]

音乐资源的名称。

### \`singer\` [#singer]

歌手名称。

### \`poster\` [#poster]

音乐资源海报的下载地址。

### \`releaseTime\` [#releasetime]

音乐资源的发行时间。

### \`type\` [#type]

音乐资源的类型：

* 1：单轨音频，左声道为伴奏，右声道为原唱。
* 2：单轨音频，仅伴奏。
* 3：单轨音频，仅原唱。
* 4：多轨音频。

### \`pitchType\` [#pitchtype]

歌曲是否支持评分功能：

* 1：支持评分功能。
* 2：不支持评分功能。

### \`durationS\` [#durations]

音乐资源的总时长（单位为秒）。

### \`lyricTypes\` [#lyrictypes]

支持的歌词类型：

* 0：xml 格式。
* 1：lrc 格式。

### \`mvProperties\` [#mvproperties]

MV 属性列表，表示该音乐资源包含的 MV 信息。

### \`climaxSegments\` [#climaxsegments]

音乐高潮片段列表。详见 [ClimaxSegment](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-climaxsegment)。
`;
export let structuredData = {
  contents: [{
    heading: "songcode",
    content: "音乐资源的唯一标识符，用于识别某个音乐资源。"
  }, {
    heading: "name",
    content: "音乐资源的名称。"
  }, {
    heading: "singer",
    content: "歌手名称。"
  }, {
    heading: "poster",
    content: "音乐资源海报的下载地址。"
  }, {
    heading: "releasetime",
    content: "音乐资源的发行时间。"
  }, {
    heading: "type",
    content: "音乐资源的类型："
  }, {
    heading: "type",
    content: "1：单轨音频，左声道为伴奏，右声道为原唱。"
  }, {
    heading: "type",
    content: "2：单轨音频，仅伴奏。"
  }, {
    heading: "type",
    content: "3：单轨音频，仅原唱。"
  }, {
    heading: "type",
    content: "4：多轨音频。"
  }, {
    heading: "pitchtype",
    content: "歌曲是否支持评分功能："
  }, {
    heading: "pitchtype",
    content: "1：支持评分功能。"
  }, {
    heading: "pitchtype",
    content: "2：不支持评分功能。"
  }, {
    heading: "durations",
    content: "音乐资源的总时长（单位为秒）。"
  }, {
    heading: "lyrictypes",
    content: "支持的歌词类型："
  }, {
    heading: "lyrictypes",
    content: "0：xml 格式。"
  }, {
    heading: "lyrictypes",
    content: "1：lrc 格式。"
  }, {
    heading: "mvproperties",
    content: "MV 属性列表，表示该音乐资源包含的 MV 信息。"
  }, {
    heading: "climaxsegments",
    content: "音乐高潮片段列表。详见 ClimaxSegment。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "songcode",
    content: "`songCode`"
  }, {
    id: "name",
    content: "`name`"
  }, {
    id: "singer",
    content: "`singer`"
  }, {
    id: "poster",
    content: "`poster`"
  }, {
    id: "releasetime",
    content: "`releaseTime`"
  }, {
    id: "type",
    content: "`type`"
  }, {
    id: "pitchtype",
    content: "`pitchType`"
  }, {
    id: "durations",
    content: "`durationS`"
  }, {
    id: "lyrictypes",
    content: "`lyricTypes`"
  }, {
    id: "mvproperties",
    content: "`mvProperties`"
  }, {
    id: "climaxsegments",
    content: "`climaxSegments`"
  }]
};
export let toc = [{
  depth: 2,
  url: "#属性",
  title: _jsx(_Fragment, {
    children: "属性"
  })
}, {
  depth: 3,
  url: "#songcode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "songCode"
    })
  })
}, {
  depth: 3,
  url: "#name",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "name"
    })
  })
}, {
  depth: 3,
  url: "#singer",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "singer"
    })
  })
}, {
  depth: 3,
  url: "#poster",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "poster"
    })
  })
}, {
  depth: 3,
  url: "#releasetime",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "releaseTime"
    })
  })
}, {
  depth: 3,
  url: "#type",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "type"
    })
  })
}, {
  depth: 3,
  url: "#pitchtype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pitchType"
    })
  })
}, {
  depth: 3,
  url: "#durations",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "durationS"
    })
  })
}, {
  depth: 3,
  url: "#lyrictypes",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "lyricTypes"
    })
  })
}, {
  depth: 3,
  url: "#mvproperties",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mvProperties"
    })
  })
}, {
  depth: 3,
  url: "#climaxsegments",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "climaxSegments"
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
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "class_music__prototype"
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
              children: " Music"
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
              children: " long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " songCode;"
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
              children: " String name;"
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
              children: " String singer;"
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
              children: " String poster;"
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
              children: " String releaseTime;"
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
              children: " type;"
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
              children: " pitchType;"
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
              children: " durationS;"
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
              children: "[] lyricTypes;"
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
              children: " MvProperty"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[] mvProperties;"
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
              children: " ClimaxSegment"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[] climaxSegments;"
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
      id: "class_music__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "songcode",
      children: _jsx(_components.code, {
        children: "songCode"
      })
    }), `
`, _jsx(_components.p, {
      children: "音乐资源的唯一标识符，用于识别某个音乐资源。"
    }), `
`, _jsx(_components.h3, {
      id: "name",
      children: _jsx(_components.code, {
        children: "name"
      })
    }), `
`, _jsx(_components.p, {
      children: "音乐资源的名称。"
    }), `
`, _jsx(_components.h3, {
      id: "singer",
      children: _jsx(_components.code, {
        children: "singer"
      })
    }), `
`, _jsx(_components.p, {
      children: "歌手名称。"
    }), `
`, _jsx(_components.h3, {
      id: "poster",
      children: _jsx(_components.code, {
        children: "poster"
      })
    }), `
`, _jsx(_components.p, {
      children: "音乐资源海报的下载地址。"
    }), `
`, _jsx(_components.h3, {
      id: "releasetime",
      children: _jsx(_components.code, {
        children: "releaseTime"
      })
    }), `
`, _jsx(_components.p, {
      children: "音乐资源的发行时间。"
    }), `
`, _jsx(_components.h3, {
      id: "type",
      children: _jsx(_components.code, {
        children: "type"
      })
    }), `
`, _jsx(_components.p, {
      children: "音乐资源的类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：单轨音频，左声道为伴奏，右声道为原唱。"
      }), `
`, _jsx(_components.li, {
        children: "2：单轨音频，仅伴奏。"
      }), `
`, _jsx(_components.li, {
        children: "3：单轨音频，仅原唱。"
      }), `
`, _jsx(_components.li, {
        children: "4：多轨音频。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "pitchtype",
      children: _jsx(_components.code, {
        children: "pitchType"
      })
    }), `
`, _jsx(_components.p, {
      children: "歌曲是否支持评分功能："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：支持评分功能。"
      }), `
`, _jsx(_components.li, {
        children: "2：不支持评分功能。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "durations",
      children: _jsx(_components.code, {
        children: "durationS"
      })
    }), `
`, _jsx(_components.p, {
      children: "音乐资源的总时长（单位为秒）。"
    }), `
`, _jsx(_components.h3, {
      id: "lyrictypes",
      children: _jsx(_components.code, {
        children: "lyricTypes"
      })
    }), `
`, _jsx(_components.p, {
      children: "支持的歌词类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：xml 格式。"
      }), `
`, _jsx(_components.li, {
        children: "1：lrc 格式。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "mvproperties",
      children: _jsx(_components.code, {
        children: "mvProperties"
      })
    }), `
`, _jsx(_components.p, {
      children: "MV 属性列表，表示该音乐资源包含的 MV 信息。"
    }), `
`, _jsx(_components.h3, {
      id: "climaxsegments",
      children: _jsx(_components.code, {
        children: "climaxSegments"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["音乐高潮片段列表。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-climaxsegment",
        children: "ClimaxSegment"
      }), "。"]
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
