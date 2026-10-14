import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How to enable the video enhancement extensions?"
};
export let _markdown = `

RTC SDK v4.x provides video enhancement extensions for beautification, underexposed video enhancement, color enhancement, and video denoising.

## Functions [#functions]

The major functions of the video enhancement extensions are as follows:

* Image enhancement

  You can achieve different image enhancement effects by adjusting parameters such as contrast, brightness, smoothness, redness, and sharpness levels.

* Underexposed video enhancement

  When you are in a location where the light is insufficient, the illumination is uneven, or the light source is behind you, you can use the underexposed video enhancement function to turn on supplement light, dynamically increase the overall brightness of the video, and improve the visual range and viewing quality.

* Color enhancement

  Due to the deficiencies of some cameras, the captured video can have insufficient saturation or grayish images. Use the color enhancement function to adjust the saturation of the image and video to make the color richer and more realistic, and enhance people's subjective visual experience.

  At the same time, the algorithm specifically provides skin color protection to prevent people's skin color from being excessively affected.

* Video denoising

  When the ambient light is dark or the capture equipment performance is poor, you can use the video denoising function to eliminate video noise.

<CalloutContainer type="info">
  <CalloutDescription>
    - Video enhancement functions may affect device performance. Consider your actual requirements and user device performance when using these extensions.
    - Before using video enhancement extensions, ensure that the relevant dynamic library is integrated. See [Extension libraries](/en/api-reference/faq/integration/reduce_app_size_rtc).
  </CalloutDescription>
</CalloutContainer>

## Parameter settings [#parameter-settings]

### **Image enhancement** [#image-enhancement]

Call the \`setBeautyEffectOptions\` method, and adjust various image enhancement effects through the parameters. See the \`setBeautyEffectOptions\` description for details.

### Underexposed video enhancement [#underexposed-video-enhancement]

Call \`setExtensionProperty,\` and set the parameters as follows:

* \`provider_name\` : \`agora_video_filters_clear_vision\`

* \`extension_name\` : \`clear_vision\`

* \`key\` : \`lowlight_enhance_option\`

* \`enable\`, \`mode,\` and \`level\` parameters in the \`value\` field are described in the following table:

| Parameter | Description                                                                                                                                                                                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`enable\`  | Whether to enable the function:* 0: (Default) Disable underexposed video enhancement.
* 1: Enable underexposed video enhancement.                                                                                                                                        |
| \`mode\`    | The underexposed video enhancement mode:* 0: (Default) Adaptive mode. The SDK automatically enables or disables this function according to the ambient lighting conditions.
* 1: Manual mode.                                                                            |
| \`level\`   | The underexposed video enhancement level:* 0: (Default) Prioritize the video quality and eliminate image noise while increasing the brightness. This consumes more CPU resources.
* 1: Prioritize performance. This conserves CPU resources and reduces processing time. |

### Color enhancement [#color-enhancement]

Call \`setExtensionProperty,\` and set the parameters as follows:

* \`provider_name\` : \`agora_video_filters_clear_vision\`

* \`extension_name\` : \`clear_vision\`

* \`key\` : \`color_enhance_option\`

* \`enable\`, \`Strength,\` and \`Skin Protection\` parameters in the \`value\` field are shown in the following table:

| Parameter         | Description                                                                                                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`enable\`          | Whether to enable the function:* 0: (Default) Disable color enhancement.
* 1: Enable color enhancement.                                                                             |
| \`Strength\`        | The level of color saturation improvement. The value range is \\[0.0,1.0], and the default value is 0.5The larger the parameter value, the higher the screen color saturation.       |
| \`Skin Protection\` | The level of skin protection. The value range is \\[0.0, 1.0], and the default value is 1.0The larger the parameter value, the less the skin color is affected by color enhancement. |

### Video denoising [#video-denoising]

Call \`setExtensionProperty,\` and set the parameters as follows:

* \`provider_name\` : \`agora_video_filters_clear_vision\`

* \`extension_name\` : \`clear_vision\`

* \`key\` : \`video_denoiser_option\`

* \`enable\`, \`mode,\` and \`level\` parameters in the \`value\` field are shown in the following table:

| Parameter | Description                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`enable\`  | Whether to enable the function:* 0: (Default) Disable video denoising.
* 1: Enable video denoising.                                                                                                                                                                                                                                                                                                                                                    |
| \`mode\`    | Video denoising mode:* 0: (Default) Adaptive mode. The SDK automatically enables or disables this function according to the ambient lighting conditions.
* 1: Manual mode.                                                                                                                                                                                                                                                                             |
| \`level\`   | Video denoising level:* 0: (Default) Time domain denoising. The denoising effect is medium, the anti-smearing effect is good, application robustness is high. Applicable to most scenarios.
* 1: Fast denoising. The denoising effect is medium. Applicable to fixed camera scenarios.
* 2: Time domain denoising plus spatial domain denoising. The denoising effect is excellent and picture purity is improved. Applicable to high-noise scenarios. |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "RTC SDK v4.x provides video enhancement extensions for beautification, underexposed video enhancement, color enhancement, and video denoising."
  }, {
    heading: "functions",
    content: "The major functions of the video enhancement extensions are as follows:"
  }, {
    heading: "functions",
    content: "Image enhancement"
  }, {
    heading: "functions",
    content: "You can achieve different image enhancement effects by adjusting parameters such as contrast, brightness, smoothness, redness, and sharpness levels."
  }, {
    heading: "functions",
    content: "Underexposed video enhancement"
  }, {
    heading: "functions",
    content: "When you are in a location where the light is insufficient, the illumination is uneven, or the light source is behind you, you can use the underexposed video enhancement function to turn on supplement light, dynamically increase the overall brightness of the video, and improve the visual range and viewing quality."
  }, {
    heading: "functions",
    content: "Color enhancement"
  }, {
    heading: "functions",
    content: "Due to the deficiencies of some cameras, the captured video can have insufficient saturation or grayish images. Use the color enhancement function to adjust the saturation of the image and video to make the color richer and more realistic, and enhance people's subjective visual experience."
  }, {
    heading: "functions",
    content: "At the same time, the algorithm specifically provides skin color protection to prevent people's skin color from being excessively affected."
  }, {
    heading: "functions",
    content: "Video denoising"
  }, {
    heading: "functions",
    content: "When the ambient light is dark or the capture equipment performance is poor, you can use the video denoising function to eliminate video noise."
  }, {
    heading: "functions",
    content: "Video enhancement functions may affect device performance. Consider your actual requirements and user device performance when using these extensions."
  }, {
    heading: "functions",
    content: "Before using video enhancement extensions, ensure that the relevant dynamic library is integrated. See Extension libraries."
  }, {
    heading: "image-enhancement",
    content: "Call the `setBeautyEffectOptions` method, and adjust various image enhancement effects through the parameters. See the `setBeautyEffectOptions` description for details."
  }, {
    heading: "underexposed-video-enhancement",
    content: "Call `setExtensionProperty,` and set the parameters as follows:"
  }, {
    heading: "underexposed-video-enhancement",
    content: "`provider_name` : `agora_video_filters_clear_vision`"
  }, {
    heading: "underexposed-video-enhancement",
    content: "`extension_name` : `clear_vision`"
  }, {
    heading: "underexposed-video-enhancement",
    content: "`key` : `lowlight_enhance_option`"
  }, {
    heading: "underexposed-video-enhancement",
    content: "`enable`, `mode,` and `level` parameters in the `value` field are described in the following table:"
  }, {
    heading: "underexposed-video-enhancement",
    content: "Parameter"
  }, {
    heading: "underexposed-video-enhancement",
    content: "Description"
  }, {
    heading: "underexposed-video-enhancement",
    content: "`enable`"
  }, {
    heading: "underexposed-video-enhancement",
    content: `Whether to enable the function:- 0: (Default) Disable underexposed video enhancement.
- 1: Enable underexposed video enhancement.`
  }, {
    heading: "underexposed-video-enhancement",
    content: "`mode`"
  }, {
    heading: "underexposed-video-enhancement",
    content: `The underexposed video enhancement mode:- 0: (Default) Adaptive mode. The SDK automatically enables or disables this function according to the ambient lighting conditions.
- 1: Manual mode.`
  }, {
    heading: "underexposed-video-enhancement",
    content: "`level`"
  }, {
    heading: "underexposed-video-enhancement",
    content: `The underexposed video enhancement level:- 0: (Default) Prioritize the video quality and eliminate image noise while increasing the brightness. This consumes more CPU resources.
- 1: Prioritize performance. This conserves CPU resources and reduces processing time.`
  }, {
    heading: "color-enhancement",
    content: "Call `setExtensionProperty,` and set the parameters as follows:"
  }, {
    heading: "color-enhancement",
    content: "`provider_name` : `agora_video_filters_clear_vision`"
  }, {
    heading: "color-enhancement",
    content: "`extension_name` : `clear_vision`"
  }, {
    heading: "color-enhancement",
    content: "`key` : `color_enhance_option`"
  }, {
    heading: "color-enhancement",
    content: "`enable`, `Strength,` and `Skin Protection` parameters in the `value` field are shown in the following table:"
  }, {
    heading: "color-enhancement",
    content: "Parameter"
  }, {
    heading: "color-enhancement",
    content: "Description"
  }, {
    heading: "color-enhancement",
    content: "`enable`"
  }, {
    heading: "color-enhancement",
    content: `Whether to enable the function:- 0: (Default) Disable color enhancement.
- 1: Enable color enhancement.`
  }, {
    heading: "color-enhancement",
    content: "`Strength`"
  }, {
    heading: "color-enhancement",
    content: "The level of color saturation improvement. The value range is \\[0.0,1.0], and the default value is 0.5The larger the parameter value, the higher the screen color saturation."
  }, {
    heading: "color-enhancement",
    content: "`Skin Protection`"
  }, {
    heading: "color-enhancement",
    content: "The level of skin protection. The value range is \\[0.0, 1.0], and the default value is 1.0The larger the parameter value, the less the skin color is affected by color enhancement."
  }, {
    heading: "video-denoising",
    content: "Call `setExtensionProperty,` and set the parameters as follows:"
  }, {
    heading: "video-denoising",
    content: "`provider_name` : `agora_video_filters_clear_vision`"
  }, {
    heading: "video-denoising",
    content: "`extension_name` : `clear_vision`"
  }, {
    heading: "video-denoising",
    content: "`key` : `video_denoiser_option`"
  }, {
    heading: "video-denoising",
    content: "`enable`, `mode,` and `level` parameters in the `value` field are shown in the following table:"
  }, {
    heading: "video-denoising",
    content: "Parameter"
  }, {
    heading: "video-denoising",
    content: "Description"
  }, {
    heading: "video-denoising",
    content: "`enable`"
  }, {
    heading: "video-denoising",
    content: `Whether to enable the function:- 0: (Default) Disable video denoising.
- 1: Enable video denoising.`
  }, {
    heading: "video-denoising",
    content: "`mode`"
  }, {
    heading: "video-denoising",
    content: `Video denoising mode:- 0: (Default) Adaptive mode. The SDK automatically enables or disables this function according to the ambient lighting conditions.
- 1: Manual mode.`
  }, {
    heading: "video-denoising",
    content: "`level`"
  }, {
    heading: "video-denoising",
    content: `Video denoising level:- 0: (Default) Time domain denoising. The denoising effect is medium, the anti-smearing effect is good, application robustness is high. Applicable to most scenarios.
- 1: Fast denoising. The denoising effect is medium. Applicable to fixed camera scenarios.
- 2: Time domain denoising plus spatial domain denoising. The denoising effect is excellent and picture purity is improved. Applicable to high-noise scenarios.`
  }],
  headings: [{
    id: "functions",
    content: "Functions"
  }, {
    id: "parameter-settings",
    content: "Parameter settings"
  }, {
    id: "image-enhancement",
    content: "**Image enhancement**"
  }, {
    id: "underexposed-video-enhancement",
    content: "Underexposed video enhancement"
  }, {
    id: "color-enhancement",
    content: "Color enhancement"
  }, {
    id: "video-denoising",
    content: "Video denoising"
  }]
};
export let toc = [{
  depth: 2,
  url: "#functions",
  title: _jsx(_Fragment, {
    children: "Functions"
  })
}, {
  depth: 2,
  url: "#parameter-settings",
  title: _jsx(_Fragment, {
    children: "Parameter settings"
  })
}, {
  depth: 3,
  url: "#image-enhancement",
  title: _jsx(_Fragment, {
    children: _jsx("strong", {
      children: "Image enhancement"
    })
  })
}, {
  depth: 3,
  url: "#underexposed-video-enhancement",
  title: _jsx(_Fragment, {
    children: "Underexposed video enhancement"
  })
}, {
  depth: 3,
  url: "#color-enhancement",
  title: _jsx(_Fragment, {
    children: "Color enhancement"
  })
}, {
  depth: 3,
  url: "#video-denoising",
  title: _jsx(_Fragment, {
    children: "Video denoising"
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
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "RTC SDK v4.x provides video enhancement extensions for beautification, underexposed video enhancement, color enhancement, and video denoising."
    }), `
`, _jsx(_components.h2, {
      id: "functions",
      children: "Functions"
    }), `
`, _jsx(_components.p, {
      children: "The major functions of the video enhancement extensions are as follows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Image enhancement"
        }), `
`, _jsx(_components.p, {
          children: "You can achieve different image enhancement effects by adjusting parameters such as contrast, brightness, smoothness, redness, and sharpness levels."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Underexposed video enhancement"
        }), `
`, _jsx(_components.p, {
          children: "When you are in a location where the light is insufficient, the illumination is uneven, or the light source is behind you, you can use the underexposed video enhancement function to turn on supplement light, dynamically increase the overall brightness of the video, and improve the visual range and viewing quality."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Color enhancement"
        }), `
`, _jsx(_components.p, {
          children: "Due to the deficiencies of some cameras, the captured video can have insufficient saturation or grayish images. Use the color enhancement function to adjust the saturation of the image and video to make the color richer and more realistic, and enhance people's subjective visual experience."
        }), `
`, _jsx(_components.p, {
          children: "At the same time, the algorithm specifically provides skin color protection to prevent people's skin color from being excessively affected."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Video denoising"
        }), `
`, _jsx(_components.p, {
          children: "When the ambient light is dark or the capture equipment performance is poor, you can use the video denoising function to eliminate video noise."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Video enhancement functions may affect device performance. Consider your actual requirements and user device performance when using these extensions."
          }), `
`, _jsxs(_components.li, {
            children: ["Before using video enhancement extensions, ensure that the relevant dynamic library is integrated. See ", _jsx(_components.a, {
              href: "/en/api-reference/faq/integration/reduce_app_size_rtc",
              children: "Extension libraries"
            }), "."]
          }), `
`]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "parameter-settings",
      children: "Parameter settings"
    }), `
`, _jsx(_components.h3, {
      id: "image-enhancement",
      children: _jsx(_components.strong, {
        children: "Image enhancement"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Call the ", _jsx(_components.code, {
        children: "setBeautyEffectOptions"
      }), " method, and adjust various image enhancement effects through the parameters. See the ", _jsx(_components.code, {
        children: "setBeautyEffectOptions"
      }), " description for details."]
    }), `
`, _jsx(_components.h3, {
      id: "underexposed-video-enhancement",
      children: "Underexposed video enhancement"
    }), `
`, _jsxs(_components.p, {
      children: ["Call ", _jsx(_components.code, {
        children: "setExtensionProperty,"
      }), " and set the parameters as follows:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "provider_name"
          }), " : ", _jsx(_components.code, {
            children: "agora_video_filters_clear_vision"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "extension_name"
          }), " : ", _jsx(_components.code, {
            children: "clear_vision"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "key"
          }), " : ", _jsx(_components.code, {
            children: "lowlight_enhance_option"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "enable"
          }), ", ", _jsx(_components.code, {
            children: "mode,"
          }), " and ", _jsx(_components.code, {
            children: "level"
          }), " parameters in the ", _jsx(_components.code, {
            children: "value"
          }), " field are described in the following table:"]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "enable"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "Whether to enable the function:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "0: (Default) Disable underexposed video enhancement."
              }), `
`, _jsx(_components.li, {
                children: "1: Enable underexposed video enhancement."
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "mode"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The underexposed video enhancement mode:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "0: (Default) Adaptive mode. The SDK automatically enables or disables this function according to the ambient lighting conditions."
              }), `
`, _jsx(_components.li, {
                children: "1: Manual mode."
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "level"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The underexposed video enhancement level:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "0: (Default) Prioritize the video quality and eliminate image noise while increasing the brightness. This consumes more CPU resources."
              }), `
`, _jsx(_components.li, {
                children: "1: Prioritize performance. This conserves CPU resources and reduces processing time."
              }), `
`]
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "color-enhancement",
      children: "Color enhancement"
    }), `
`, _jsxs(_components.p, {
      children: ["Call ", _jsx(_components.code, {
        children: "setExtensionProperty,"
      }), " and set the parameters as follows:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "provider_name"
          }), " : ", _jsx(_components.code, {
            children: "agora_video_filters_clear_vision"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "extension_name"
          }), " : ", _jsx(_components.code, {
            children: "clear_vision"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "key"
          }), " : ", _jsx(_components.code, {
            children: "color_enhance_option"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "enable"
          }), ", ", _jsx(_components.code, {
            children: "Strength,"
          }), " and ", _jsx(_components.code, {
            children: "Skin Protection"
          }), " parameters in the ", _jsx(_components.code, {
            children: "value"
          }), " field are shown in the following table:"]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "enable"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "Whether to enable the function:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "0: (Default) Disable color enhancement."
              }), `
`, _jsx(_components.li, {
                children: "1: Enable color enhancement."
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Strength"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The level of color saturation improvement. The value range is [0.0,1.0], and the default value is 0.5"
            }), _jsx(_components.p, {
              children: "The larger the parameter value, the higher the screen color saturation."
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Skin Protection"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The level of skin protection. The value range is [0.0, 1.0], and the default value is 1.0"
            }), _jsx(_components.p, {
              children: "The larger the parameter value, the less the skin color is affected by color enhancement."
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "video-denoising",
      children: "Video denoising"
    }), `
`, _jsxs(_components.p, {
      children: ["Call ", _jsx(_components.code, {
        children: "setExtensionProperty,"
      }), " and set the parameters as follows:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "provider_name"
          }), " : ", _jsx(_components.code, {
            children: "agora_video_filters_clear_vision"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "extension_name"
          }), " : ", _jsx(_components.code, {
            children: "clear_vision"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "key"
          }), " : ", _jsx(_components.code, {
            children: "video_denoiser_option"
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "enable"
          }), ", ", _jsx(_components.code, {
            children: "mode,"
          }), " and ", _jsx(_components.code, {
            children: "level"
          }), " parameters in the ", _jsx(_components.code, {
            children: "value"
          }), " field are shown in the following table:"]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "enable"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "Whether to enable the function:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "0: (Default) Disable video denoising."
              }), `
`, _jsx(_components.li, {
                children: "1: Enable video denoising."
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "mode"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "Video denoising mode:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "0: (Default) Adaptive mode. The SDK automatically enables or disables this function according to the ambient lighting conditions."
              }), `
`, _jsx(_components.li, {
                children: "1: Manual mode."
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "level"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "Video denoising level:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "0: (Default) Time domain denoising. The denoising effect is medium, the anti-smearing effect is good, application robustness is high. Applicable to most scenarios."
              }), `
`, _jsx(_components.li, {
                children: "1: Fast denoising. The denoising effect is medium. Applicable to fixed camera scenarios."
              }), `
`, _jsx(_components.li, {
                children: "2: Time domain denoising plus spatial domain denoising. The denoising effect is excellent and picture purity is improved. Applicable to high-noise scenarios."
              }), `
`]
            })]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
