import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "PVC and Super Quality configuration",
  description: "Enable PVC and Super Quality options for Media Gateway video transcoding."
};
export let _markdown = `

This guide explains how to enable low-bitrate high-definition features (PVC) for video transcoding on Media Gateway.

## Understand the tech [#understand-the-tech]

Media Gateway supports enabling PVC (Perceptual Video Coding) or Super Quality functions during video transcoding to achieve low-bitrate high-definition streaming. These features optimize video quality while reducing bandwidth requirements.

## Implementation [#implementation]

Enable PVC or Super Quality when creating a stream configuration template.

\`\`\`json
{
  "settings": {
    "transcoding": {
      "video": {
        "enabled": true,
        "width": 1920,
        "height": 1080,
        "fps": 30,
        "bitrate": 0,
        "advancedOptions": {
          "superResolution": {
            "enabled": true,
            "alphaBlending": 256
          },
          "pvc": {
            "enabled": true,
            "saveBitrateRatio": 20
          }
        }
      },
      "audio": {
        "enabled": true,
        "profile": 3
      }
    }
  }
}
\`\`\`

### Advanced options [#advanced-options]

* \`pvc.enabled\`: Set to \`true\` to enable PVC
* \`pvc.saveBitrateRatio\`: Percentage of bitrate to save
* \`superResolution.enabled\`: Set to \`true\` to enable Super Quality
* \`superResolution.alphaBlending\`: Super Quality intensity from \`1\` to \`256\`

### Relationship between PVC and bitrate [#relationship-between-pvc-and-bitrate]

* When \`video.bitrate\` is missing, output bitrate follows the source stream bitrate
* When \`video.bitrate\` is \`0\`, output bitrate is calculated automatically based on resolution and frame rate
* When \`video.bitrate\` is explicitly set, output bitrate matches the specified value and \`saveBitrateRatio\` has no effect

<CalloutContainer type="info">
  <CalloutDescription>
    Test different saving ratios with your actual content to determine optimal settings before deployment.
  </CalloutDescription>
</CalloutContainer>

## When to use PVC [#when-to-use-pvc]

PVC is useful when:

* You have fixed encoding bitrate requirements
* Available bitrate is insufficient for acceptable quality without PVC
* Bandwidth is severely constrained
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This guide explains how to enable low-bitrate high-definition features (PVC) for video transcoding on Media Gateway."
  }, {
    heading: "understand-the-tech",
    content: "Media Gateway supports enabling PVC (Perceptual Video Coding) or Super Quality functions during video transcoding to achieve low-bitrate high-definition streaming. These features optimize video quality while reducing bandwidth requirements."
  }, {
    heading: "implementation",
    content: "Enable PVC or Super Quality when creating a stream configuration template."
  }, {
    heading: "advanced-options",
    content: "`pvc.enabled`: Set to `true` to enable PVC"
  }, {
    heading: "advanced-options",
    content: "`pvc.saveBitrateRatio`: Percentage of bitrate to save"
  }, {
    heading: "advanced-options",
    content: "`superResolution.enabled`: Set to `true` to enable Super Quality"
  }, {
    heading: "advanced-options",
    content: "`superResolution.alphaBlending`: Super Quality intensity from `1` to `256`"
  }, {
    heading: "relationship-between-pvc-and-bitrate",
    content: "When `video.bitrate` is missing, output bitrate follows the source stream bitrate"
  }, {
    heading: "relationship-between-pvc-and-bitrate",
    content: "When `video.bitrate` is `0`, output bitrate is calculated automatically based on resolution and frame rate"
  }, {
    heading: "relationship-between-pvc-and-bitrate",
    content: "When `video.bitrate` is explicitly set, output bitrate matches the specified value and `saveBitrateRatio` has no effect"
  }, {
    heading: "relationship-between-pvc-and-bitrate",
    content: "Test different saving ratios with your actual content to determine optimal settings before deployment."
  }, {
    heading: "when-to-use-pvc",
    content: "PVC is useful when:"
  }, {
    heading: "when-to-use-pvc",
    content: "You have fixed encoding bitrate requirements"
  }, {
    heading: "when-to-use-pvc",
    content: "Available bitrate is insufficient for acceptable quality without PVC"
  }, {
    heading: "when-to-use-pvc",
    content: "Bandwidth is severely constrained"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "implementation",
    content: "Implementation"
  }, {
    id: "advanced-options",
    content: "Advanced options"
  }, {
    id: "relationship-between-pvc-and-bitrate",
    content: "Relationship between PVC and bitrate"
  }, {
    id: "when-to-use-pvc",
    content: "When to use PVC"
  }]
};
export let toc = [{
  depth: 2,
  url: "#understand-the-tech",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#advanced-options",
  title: _jsx(_Fragment, {
    children: "Advanced options"
  })
}, {
  depth: 3,
  url: "#relationship-between-pvc-and-bitrate",
  title: _jsx(_Fragment, {
    children: "Relationship between PVC and bitrate"
  })
}, {
  depth: 2,
  url: "#when-to-use-pvc",
  title: _jsx(_Fragment, {
    children: "When to use PVC"
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This guide explains how to enable low-bitrate high-definition features (PVC) for video transcoding on Media Gateway."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsx(_components.p, {
      children: "Media Gateway supports enabling PVC (Perceptual Video Coding) or Super Quality functions during video transcoding to achieve low-bitrate high-definition streaming. These features optimize video quality while reducing bandwidth requirements."
    }), `
`, _jsx(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), `
`, _jsx(_components.p, {
      children: "Enable PVC or Super Quality when creating a stream configuration template."
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
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "settings"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "transcoding"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "video"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "enabled"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "width"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1920"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "height"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1080"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "fps"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "30"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "bitrate"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "advancedOptions"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '          "superResolution"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "enabled"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "alphaBlending"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "256"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "          },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '          "pvc"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "enabled"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "saveBitrateRatio"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "20"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "          }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "audio"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "enabled"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "profile"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "3"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  }"
            })
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
`, _jsx(_components.h3, {
      id: "advanced-options",
      children: "Advanced options"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "pvc.enabled"
        }), ": Set to ", _jsx(_components.code, {
          children: "true"
        }), " to enable PVC"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "pvc.saveBitrateRatio"
        }), ": Percentage of bitrate to save"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "superResolution.enabled"
        }), ": Set to ", _jsx(_components.code, {
          children: "true"
        }), " to enable Super Quality"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "superResolution.alphaBlending"
        }), ": Super Quality intensity from ", _jsx(_components.code, {
          children: "1"
        }), " to ", _jsx(_components.code, {
          children: "256"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "relationship-between-pvc-and-bitrate",
      children: "Relationship between PVC and bitrate"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["When ", _jsx(_components.code, {
          children: "video.bitrate"
        }), " is missing, output bitrate follows the source stream bitrate"]
      }), `
`, _jsxs(_components.li, {
        children: ["When ", _jsx(_components.code, {
          children: "video.bitrate"
        }), " is ", _jsx(_components.code, {
          children: "0"
        }), ", output bitrate is calculated automatically based on resolution and frame rate"]
      }), `
`, _jsxs(_components.li, {
        children: ["When ", _jsx(_components.code, {
          children: "video.bitrate"
        }), " is explicitly set, output bitrate matches the specified value and ", _jsx(_components.code, {
          children: "saveBitrateRatio"
        }), " has no effect"]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Test different saving ratios with your actual content to determine optimal settings before deployment."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "when-to-use-pvc",
      children: "When to use PVC"
    }), `
`, _jsx(_components.p, {
      children: "PVC is useful when:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "You have fixed encoding bitrate requirements"
      }), `
`, _jsx(_components.li, {
        children: "Available bitrate is insufficient for acceptable quality without PVC"
      }), `
`, _jsx(_components.li, {
        children: "Bandwidth is severely constrained"
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
