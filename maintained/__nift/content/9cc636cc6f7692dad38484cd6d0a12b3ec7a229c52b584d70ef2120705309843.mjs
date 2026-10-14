import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "SpatialAudioParams",
  description: "用于配置空间音频参数。"
};
export let _markdown = `

<a id="class_spatialaudioparams__prototype" />

\`\`\`java
public class SpatialAudioParams {
  public Double speaker_azimuth;
  public Double speaker_elevation;
  public Double speaker_distance;
  public Integer speaker_orientation;
  public Boolean enable_blur;
  public Boolean enable_air_absorb;
  public Double speaker_attenuation;
  public Boolean enable_doppler;
}
\`\`\`

<a id="class_spatialaudioparams__parameters" />

## 属性 [#属性]

### \`speaker_azimuth\` [#speaker_azimuth]

远端用户或媒体播放器相对于本地用户的方位角，单位为度，取值范围为 \\[0, 360]。具体取值如下：

* 0：（默认）表示正前方。
* 90：表示正左方。
* 180：表示正后方。
* 270：表示正右方。
* 360：表示正前方。

### \`speaker_elevation\` [#speaker_elevation]

远端用户或媒体播放器相对于本地用户的仰角，单位为度，取值范围为 \\[-90, 90]。具体取值如下：

* 0：（默认）表示水平平面不旋转。
* -90：表示向下旋转 90 度。
* 90：表示向上旋转 90 度。

### \`speaker_distance\` [#speaker_distance]

远端用户或媒体播放器相对于本地用户的距离，单位为米，取值范围为 \\[1, 50]。默认值为 1 米。

### \`speaker_orientation\` [#speaker_orientation]

远端用户或媒体播放器相对于本地用户的朝向角度，单位为度，取值范围为 \\[0, 180]。具体取值如下：

* 0：（默认）表示声源和听众朝向相同。
* 180：表示声源和听众面对面。

### \`enable_blur\` [#enable_blur]

是否开启音频模糊处理：

* true：开启音频模糊处理。
* false：（默认）关闭音频模糊处理。

### \`enable_air_absorb\` [#enable_air_absorb]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    需确保 \`speaker_attenuation\` 不为 0，否则该设置不生效。
  </CalloutDescription>
</CalloutContainer>

是否开启空气吸收。开启后模拟声波在空气中传播时的衰减效果，高频声音衰减更快，低频声音衰减较慢。

* true：（默认）开启空气吸收。
* false：关闭空气吸收。

### \`speaker_attenuation\` [#speaker_attenuation]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    弱衰减和强衰减模式需开启 \`enable_air_absorb\`。
  </CalloutDescription>
</CalloutContainer>

远端用户或媒体播放器的声音衰减系数，取值范围为 \\[0, 1]。

* 0：广播模式，音量和音质不随距离衰减，本地用户听到的声音不因距离变化。
* (0, 0.5)：弱衰减模式，音量和音质随传播仅弱衰减，可以传播得更远。
* 0.5：（默认）模拟现实环境中的音量衰减，效果等同未设置该参数。
* (0.5, 1]：强衰减模式，音量和音质随传播快速衰减。

### \`enable_doppler\` [#enable_doppler]

注：

* 此参数适用于声源高速移动的场景（例如赛车游戏）。不建议在一般音视频互动场景中使用（如语音聊天、连麦或在线 KTV）。
* 启用此参数后，声网建议你以固定周期（如 30 毫秒）调用 updatePlayerPositionInfo、 updateSelfPosition、 updateRemotePosition 方法持续更新声源与接收器之间的相对距离。
* 若更新周期过长、不规律，或者因网络丢包或延迟导致距离信息丢失，可能造成多普勒效应表现异常或声音抖动。

是否开启多普勒效应。当声源与接收器之间存在相对位移时，接收器所听到的音调会发生变化。

* true：开启多普勒效应。
* false：（默认）关闭多普勒效应。
`;
export let structuredData = {
  contents: [{
    heading: "speaker_azimuth",
    content: "远端用户或媒体播放器相对于本地用户的方位角，单位为度，取值范围为 \\[0, 360]。具体取值如下："
  }, {
    heading: "speaker_azimuth",
    content: "0：（默认）表示正前方。"
  }, {
    heading: "speaker_azimuth",
    content: "90：表示正左方。"
  }, {
    heading: "speaker_azimuth",
    content: "180：表示正后方。"
  }, {
    heading: "speaker_azimuth",
    content: "270：表示正右方。"
  }, {
    heading: "speaker_azimuth",
    content: "360：表示正前方。"
  }, {
    heading: "speaker_elevation",
    content: "远端用户或媒体播放器相对于本地用户的仰角，单位为度，取值范围为 \\[-90, 90]。具体取值如下："
  }, {
    heading: "speaker_elevation",
    content: "0：（默认）表示水平平面不旋转。"
  }, {
    heading: "speaker_elevation",
    content: "-90：表示向下旋转 90 度。"
  }, {
    heading: "speaker_elevation",
    content: "90：表示向上旋转 90 度。"
  }, {
    heading: "speaker_distance",
    content: "远端用户或媒体播放器相对于本地用户的距离，单位为米，取值范围为 \\[1, 50]。默认值为 1 米。"
  }, {
    heading: "speaker_orientation",
    content: "远端用户或媒体播放器相对于本地用户的朝向角度，单位为度，取值范围为 \\[0, 180]。具体取值如下："
  }, {
    heading: "speaker_orientation",
    content: "0：（默认）表示声源和听众朝向相同。"
  }, {
    heading: "speaker_orientation",
    content: "180：表示声源和听众面对面。"
  }, {
    heading: "enable_blur",
    content: "是否开启音频模糊处理："
  }, {
    heading: "enable_blur",
    content: "true：开启音频模糊处理。"
  }, {
    heading: "enable_blur",
    content: "false：（默认）关闭音频模糊处理。"
  }, {
    heading: "enable_air_absorb",
    content: "需确保 `speaker_attenuation` 不为 0，否则该设置不生效。"
  }, {
    heading: "enable_air_absorb",
    content: "是否开启空气吸收。开启后模拟声波在空气中传播时的衰减效果，高频声音衰减更快，低频声音衰减较慢。"
  }, {
    heading: "enable_air_absorb",
    content: "true：（默认）开启空气吸收。"
  }, {
    heading: "enable_air_absorb",
    content: "false：关闭空气吸收。"
  }, {
    heading: "speaker_attenuation",
    content: "弱衰减和强衰减模式需开启 `enable_air_absorb`。"
  }, {
    heading: "speaker_attenuation",
    content: "远端用户或媒体播放器的声音衰减系数，取值范围为 \\[0, 1]。"
  }, {
    heading: "speaker_attenuation",
    content: "0：广播模式，音量和音质不随距离衰减，本地用户听到的声音不因距离变化。"
  }, {
    heading: "speaker_attenuation",
    content: "(0, 0.5)：弱衰减模式，音量和音质随传播仅弱衰减，可以传播得更远。"
  }, {
    heading: "speaker_attenuation",
    content: "0.5：（默认）模拟现实环境中的音量衰减，效果等同未设置该参数。"
  }, {
    heading: "speaker_attenuation",
    content: "(0.5, 1]：强衰减模式，音量和音质随传播快速衰减。"
  }, {
    heading: "enable_doppler",
    content: "注："
  }, {
    heading: "enable_doppler",
    content: "此参数适用于声源高速移动的场景（例如赛车游戏）。不建议在一般音视频互动场景中使用（如语音聊天、连麦或在线 KTV）。"
  }, {
    heading: "enable_doppler",
    content: "启用此参数后，声网建议你以固定周期（如 30 毫秒）调用 updatePlayerPositionInfo、 updateSelfPosition、 updateRemotePosition 方法持续更新声源与接收器之间的相对距离。"
  }, {
    heading: "enable_doppler",
    content: "若更新周期过长、不规律，或者因网络丢包或延迟导致距离信息丢失，可能造成多普勒效应表现异常或声音抖动。"
  }, {
    heading: "enable_doppler",
    content: "是否开启多普勒效应。当声源与接收器之间存在相对位移时，接收器所听到的音调会发生变化。"
  }, {
    heading: "enable_doppler",
    content: "true：开启多普勒效应。"
  }, {
    heading: "enable_doppler",
    content: "false：（默认）关闭多普勒效应。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "speaker_azimuth",
    content: "`speaker_azimuth`"
  }, {
    id: "speaker_elevation",
    content: "`speaker_elevation`"
  }, {
    id: "speaker_distance",
    content: "`speaker_distance`"
  }, {
    id: "speaker_orientation",
    content: "`speaker_orientation`"
  }, {
    id: "enable_blur",
    content: "`enable_blur`"
  }, {
    id: "enable_air_absorb",
    content: "`enable_air_absorb`"
  }, {
    id: "speaker_attenuation",
    content: "`speaker_attenuation`"
  }, {
    id: "enable_doppler",
    content: "`enable_doppler`"
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
  url: "#speaker_azimuth",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "speaker_azimuth"
    })
  })
}, {
  depth: 3,
  url: "#speaker_elevation",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "speaker_elevation"
    })
  })
}, {
  depth: 3,
  url: "#speaker_distance",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "speaker_distance"
    })
  })
}, {
  depth: 3,
  url: "#speaker_orientation",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "speaker_orientation"
    })
  })
}, {
  depth: 3,
  url: "#enable_blur",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enable_blur"
    })
  })
}, {
  depth: 3,
  url: "#enable_air_absorb",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enable_air_absorb"
    })
  })
}, {
  depth: 3,
  url: "#speaker_attenuation",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "speaker_attenuation"
    })
  })
}, {
  depth: 3,
  url: "#enable_doppler",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enable_doppler"
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
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "class_spatialaudioparams__prototype"
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
              children: " SpatialAudioParams"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Double speaker_azimuth;"
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
              children: " Double speaker_elevation;"
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
              children: " Double speaker_distance;"
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
              children: " Integer speaker_orientation;"
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
              children: " Boolean enable_blur;"
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
              children: " Boolean enable_air_absorb;"
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
              children: " Double speaker_attenuation;"
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
              children: " Boolean enable_doppler;"
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
      id: "class_spatialaudioparams__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "speaker_azimuth",
      children: _jsx(_components.code, {
        children: "speaker_azimuth"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户或媒体播放器相对于本地用户的方位角，单位为度，取值范围为 [0, 360]。具体取值如下："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：（默认）表示正前方。"
      }), `
`, _jsx(_components.li, {
        children: "90：表示正左方。"
      }), `
`, _jsx(_components.li, {
        children: "180：表示正后方。"
      }), `
`, _jsx(_components.li, {
        children: "270：表示正右方。"
      }), `
`, _jsx(_components.li, {
        children: "360：表示正前方。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "speaker_elevation",
      children: _jsx(_components.code, {
        children: "speaker_elevation"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户或媒体播放器相对于本地用户的仰角，单位为度，取值范围为 [-90, 90]。具体取值如下："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：（默认）表示水平平面不旋转。"
      }), `
`, _jsx(_components.li, {
        children: "-90：表示向下旋转 90 度。"
      }), `
`, _jsx(_components.li, {
        children: "90：表示向上旋转 90 度。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "speaker_distance",
      children: _jsx(_components.code, {
        children: "speaker_distance"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户或媒体播放器相对于本地用户的距离，单位为米，取值范围为 [1, 50]。默认值为 1 米。"
    }), `
`, _jsx(_components.h3, {
      id: "speaker_orientation",
      children: _jsx(_components.code, {
        children: "speaker_orientation"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户或媒体播放器相对于本地用户的朝向角度，单位为度，取值范围为 [0, 180]。具体取值如下："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：（默认）表示声源和听众朝向相同。"
      }), `
`, _jsx(_components.li, {
        children: "180：表示声源和听众面对面。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "enable_blur",
      children: _jsx(_components.code, {
        children: "enable_blur"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否开启音频模糊处理："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：开启音频模糊处理。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）关闭音频模糊处理。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "enable_air_absorb",
      children: _jsx(_components.code, {
        children: "enable_air_absorb"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["需确保 ", _jsx(_components.code, {
            children: "speaker_attenuation"
          }), " 不为 0，否则该设置不生效。"]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "是否开启空气吸收。开启后模拟声波在空气中传播时的衰减效果，高频声音衰减更快，低频声音衰减较慢。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：（默认）开启空气吸收。"
      }), `
`, _jsx(_components.li, {
        children: "false：关闭空气吸收。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "speaker_attenuation",
      children: _jsx(_components.code, {
        children: "speaker_attenuation"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["弱衰减和强衰减模式需开启 ", _jsx(_components.code, {
            children: "enable_air_absorb"
          }), "。"]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "远端用户或媒体播放器的声音衰减系数，取值范围为 [0, 1]。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：广播模式，音量和音质不随距离衰减，本地用户听到的声音不因距离变化。"
      }), `
`, _jsx(_components.li, {
        children: "(0, 0.5)：弱衰减模式，音量和音质随传播仅弱衰减，可以传播得更远。"
      }), `
`, _jsx(_components.li, {
        children: "0.5：（默认）模拟现实环境中的音量衰减，效果等同未设置该参数。"
      }), `
`, _jsx(_components.li, {
        children: "(0.5, 1]：强衰减模式，音量和音质随传播快速衰减。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "enable_doppler",
      children: _jsx(_components.code, {
        children: "enable_doppler"
      })
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "此参数适用于声源高速移动的场景（例如赛车游戏）。不建议在一般音视频互动场景中使用（如语音聊天、连麦或在线 KTV）。"
      }), `
`, _jsx(_components.li, {
        children: "启用此参数后，声网建议你以固定周期（如 30 毫秒）调用 updatePlayerPositionInfo、 updateSelfPosition、 updateRemotePosition 方法持续更新声源与接收器之间的相对距离。"
      }), `
`, _jsx(_components.li, {
        children: "若更新周期过长、不规律，或者因网络丢包或延迟导致距离信息丢失，可能造成多普勒效应表现异常或声音抖动。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "是否开启多普勒效应。当声源与接收器之间存在相对位移时，接收器所听到的音调会发生变化。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：开启多普勒效应。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）关闭多普勒效应。"
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
