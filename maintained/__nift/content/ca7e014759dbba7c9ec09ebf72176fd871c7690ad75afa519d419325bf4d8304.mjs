import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "SpatialAudioZone",
  description: "用于设置隔音区域。"
};
export let _markdown = `

<a id="class_spatialaudiozone__prototype" />

\`\`\`java
public class SpatialAudioZone {
  public int zoneSetId;
  public float[] position;
  public float[] forward;
  public float[] right;
  public float[] up;
  public float forwardLength;
  public float rightLength;
  public float upLength;
  public float audioAttenuation;
}
\`\`\`

<a id="class_spatialaudiozone__parameters" />

## 属性 [#属性]

### \`zoneSetId\` [#zonesetid]

隔音区域的 ID。

### \`position\` [#position]

隔音区域的空间中心点。该参数为一个长度为 3 的数组，三个值依次表示前、右、上方向上的坐标。

### \`forward\` [#forward]

从 \`position\` 出发的前向单位向量。该参数为一个长度为 3 的数组，三个值依次表示前、右、上方向上的坐标。

### \`right\` [#right]

从 \`position\` 出发的右向单位向量。该参数为一个长度为 3 的数组，三个值依次表示前、右、上方向上的坐标。

### \`up\` [#up]

从 \`position\` 出发的上向单位向量。该参数为一个长度为 3 的数组，三个值依次表示前、右、上方向上的坐标。

### \`forwardLength\` [#forwardlength]

将整个隔音区域视为一个立方体，该参数表示沿前向的边长，单位为游戏引擎的单位长度。

### \`rightLength\` [#rightlength]

将整个隔音区域视为一个立方体，该参数表示沿右向的边长，单位为游戏引擎的单位长度。

### \`upLength\` [#uplength]

将整个隔音区域视为一个立方体，该参数表示沿上向的边长，单位为游戏引擎的单位长度。

### \`audioAttenuation\` [#audioattenuation]

当隔音区域内用户与外部用户通信时的声音衰减系数。取值范围为 \\[0, 1]。具体取值说明如下：

* 0：广播模式，音量和音色不随距离衰减，近距离和远距离听感一致。
* (0, 0.5)：弱衰减模式，即声音在传播过程中音量和音色仅略微衰减，可传播距离远于现实环境。
* 0.5：（默认值）模拟真实环境中的音量衰减。
* (0.5, 1]：强衰减模式，即音量和音色在传播过程中迅速衰减。
`;
export let structuredData = {
  contents: [{
    heading: "zonesetid",
    content: "隔音区域的 ID。"
  }, {
    heading: "position",
    content: "隔音区域的空间中心点。该参数为一个长度为 3 的数组，三个值依次表示前、右、上方向上的坐标。"
  }, {
    heading: "forward",
    content: "从 `position` 出发的前向单位向量。该参数为一个长度为 3 的数组，三个值依次表示前、右、上方向上的坐标。"
  }, {
    heading: "right",
    content: "从 `position` 出发的右向单位向量。该参数为一个长度为 3 的数组，三个值依次表示前、右、上方向上的坐标。"
  }, {
    heading: "up",
    content: "从 `position` 出发的上向单位向量。该参数为一个长度为 3 的数组，三个值依次表示前、右、上方向上的坐标。"
  }, {
    heading: "forwardlength",
    content: "将整个隔音区域视为一个立方体，该参数表示沿前向的边长，单位为游戏引擎的单位长度。"
  }, {
    heading: "rightlength",
    content: "将整个隔音区域视为一个立方体，该参数表示沿右向的边长，单位为游戏引擎的单位长度。"
  }, {
    heading: "uplength",
    content: "将整个隔音区域视为一个立方体，该参数表示沿上向的边长，单位为游戏引擎的单位长度。"
  }, {
    heading: "audioattenuation",
    content: "当隔音区域内用户与外部用户通信时的声音衰减系数。取值范围为 \\[0, 1]。具体取值说明如下："
  }, {
    heading: "audioattenuation",
    content: "0：广播模式，音量和音色不随距离衰减，近距离和远距离听感一致。"
  }, {
    heading: "audioattenuation",
    content: "(0, 0.5)：弱衰减模式，即声音在传播过程中音量和音色仅略微衰减，可传播距离远于现实环境。"
  }, {
    heading: "audioattenuation",
    content: "0.5：（默认值）模拟真实环境中的音量衰减。"
  }, {
    heading: "audioattenuation",
    content: "(0.5, 1]：强衰减模式，即音量和音色在传播过程中迅速衰减。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "zonesetid",
    content: "`zoneSetId`"
  }, {
    id: "position",
    content: "`position`"
  }, {
    id: "forward",
    content: "`forward`"
  }, {
    id: "right",
    content: "`right`"
  }, {
    id: "up",
    content: "`up`"
  }, {
    id: "forwardlength",
    content: "`forwardLength`"
  }, {
    id: "rightlength",
    content: "`rightLength`"
  }, {
    id: "uplength",
    content: "`upLength`"
  }, {
    id: "audioattenuation",
    content: "`audioAttenuation`"
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
  url: "#zonesetid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "zoneSetId"
    })
  })
}, {
  depth: 3,
  url: "#position",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "position"
    })
  })
}, {
  depth: 3,
  url: "#forward",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "forward"
    })
  })
}, {
  depth: 3,
  url: "#right",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "right"
    })
  })
}, {
  depth: 3,
  url: "#up",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "up"
    })
  })
}, {
  depth: 3,
  url: "#forwardlength",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "forwardLength"
    })
  })
}, {
  depth: 3,
  url: "#rightlength",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rightLength"
    })
  })
}, {
  depth: 3,
  url: "#uplength",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "upLength"
    })
  })
}, {
  depth: 3,
  url: "#audioattenuation",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "audioAttenuation"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
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
      id: "class_spatialaudiozone__prototype"
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
              children: " SpatialAudioZone"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " zoneSetId;"
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
              children: " float"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[] position;"
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
              children: " float"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[] forward;"
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
              children: " float"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[] right;"
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
              children: " float"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[] up;"
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
              children: " float"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " forwardLength;"
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
              children: " float"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " rightLength;"
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
              children: " float"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " upLength;"
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
              children: " float"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " audioAttenuation;"
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
      id: "class_spatialaudiozone__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "zonesetid",
      children: _jsx(_components.code, {
        children: "zoneSetId"
      })
    }), `
`, _jsx(_components.p, {
      children: "隔音区域的 ID。"
    }), `
`, _jsx(_components.h3, {
      id: "position",
      children: _jsx(_components.code, {
        children: "position"
      })
    }), `
`, _jsx(_components.p, {
      children: "隔音区域的空间中心点。该参数为一个长度为 3 的数组，三个值依次表示前、右、上方向上的坐标。"
    }), `
`, _jsx(_components.h3, {
      id: "forward",
      children: _jsx(_components.code, {
        children: "forward"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["从 ", _jsx(_components.code, {
        children: "position"
      }), " 出发的前向单位向量。该参数为一个长度为 3 的数组，三个值依次表示前、右、上方向上的坐标。"]
    }), `
`, _jsx(_components.h3, {
      id: "right",
      children: _jsx(_components.code, {
        children: "right"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["从 ", _jsx(_components.code, {
        children: "position"
      }), " 出发的右向单位向量。该参数为一个长度为 3 的数组，三个值依次表示前、右、上方向上的坐标。"]
    }), `
`, _jsx(_components.h3, {
      id: "up",
      children: _jsx(_components.code, {
        children: "up"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["从 ", _jsx(_components.code, {
        children: "position"
      }), " 出发的上向单位向量。该参数为一个长度为 3 的数组，三个值依次表示前、右、上方向上的坐标。"]
    }), `
`, _jsx(_components.h3, {
      id: "forwardlength",
      children: _jsx(_components.code, {
        children: "forwardLength"
      })
    }), `
`, _jsx(_components.p, {
      children: "将整个隔音区域视为一个立方体，该参数表示沿前向的边长，单位为游戏引擎的单位长度。"
    }), `
`, _jsx(_components.h3, {
      id: "rightlength",
      children: _jsx(_components.code, {
        children: "rightLength"
      })
    }), `
`, _jsx(_components.p, {
      children: "将整个隔音区域视为一个立方体，该参数表示沿右向的边长，单位为游戏引擎的单位长度。"
    }), `
`, _jsx(_components.h3, {
      id: "uplength",
      children: _jsx(_components.code, {
        children: "upLength"
      })
    }), `
`, _jsx(_components.p, {
      children: "将整个隔音区域视为一个立方体，该参数表示沿上向的边长，单位为游戏引擎的单位长度。"
    }), `
`, _jsx(_components.h3, {
      id: "audioattenuation",
      children: _jsx(_components.code, {
        children: "audioAttenuation"
      })
    }), `
`, _jsx(_components.p, {
      children: "当隔音区域内用户与外部用户通信时的声音衰减系数。取值范围为 [0, 1]。具体取值说明如下："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：广播模式，音量和音色不随距离衰减，近距离和远距离听感一致。"
      }), `
`, _jsx(_components.li, {
        children: "(0, 0.5)：弱衰减模式，即声音在传播过程中音量和音色仅略微衰减，可传播距离远于现实环境。"
      }), `
`, _jsx(_components.li, {
        children: "0.5：（默认值）模拟真实环境中的音量衰减。"
      }), `
`, _jsx(_components.li, {
        children: "(0.5, 1]：强衰减模式，即音量和音色在传播过程中迅速衰减。"
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
