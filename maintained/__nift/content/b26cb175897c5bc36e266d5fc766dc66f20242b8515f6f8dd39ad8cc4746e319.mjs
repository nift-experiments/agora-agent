import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Agora SEI information",
  description: "Introduces the SEI-related issues."
};
export let _markdown = `

By default, Agora adds the encoding information of the current video to the transcoded H264/H265 SEI (Supplemental Enhancement Information) during Media Push. The encoding information is a JSON string. The following is the sample code:

\`\`\`json
{
    "canvas": {
        "w": 640,
        "h": 360,
        "bgnd": "#000000"
    },
    "regions": [
        {
        "uid": 1,
        "alpha": 1.0,
        "zorder": 1,
        "volume": 50,
        "x": 0,
        "y": 0,
        "w": 320,
        "h": 360
        },
         {
        "uid": 2,
        "alpha": 1.0,
        "zOrder": 1,
        "volume": 89,
        "x": 320,
        "y": 0,
        "w": 320,
        "h": 360
        }
    ],
    "ver": "20190611",
    "ts": 1535385600000,
    "app_data": ""
}
\`\`\`

The definition of the parameters:

| Parameter  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`canvas\`   | The canvas information. It contains the following properties:- \`w\`: Width (pixel) of the canvas. It corresponds to the \`width\` member in the \`LiveTranscoding\` class.
- \`h\`: Height (pixel) of the canvas. It corresponds to the \`height\` member in the \`LiveTranscoding\` class.
- \`bgnd\`: The background color (RGB) of the canvas, represented by a hexademical string. It corresponds to the \`backgoundColor\` member in the \`LiveTranscoding\` class.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| \`regions\`  | The layout information of the host. It corresponds to the \`transcodingUsers\` member in the \`LiveTranscoding\` class. It contains the following properties:- \`suid\`: (**Optional**)The string user account of the host in this region. This parameter applies to use-cases where string user accounts are used to identify the host.
- \`uid\`: UID of the host in this region. It corresponds to the \`uid\` member in the \`TranscodingUser\` class.
- \`alpha\`: The transparency of the video frame of the host. The value range is \\[0.0, 1.0]. It corresponds to the \`alpha\` member in \`TranscodingUser\` .
- \`zorder\`: The layout position of the video frame of the host. The value range is \\[0, 100]. It corresponds to the \`zOrder\` member in \`TranscodingUser\`.
- \`volume\`: The volume (dB) of the host. The value range is \\[0, 100].
- \`x\`: The horizontal position of the video frame of the broadacaster from the top left corner of the Media Push. It corresponds to the \`x\` member in \`TranscodingUser\`.
- \`y\`: The vertical position of the video frame of the host from the top left corner of the Media Push. It corresponds to the \`y\` member in \`TranscodingUser\`.
- \`w\`: Width (pixel) of the video frame of the host. It corresponds to the \`width\` member in \`TranscodingUser\`.
- \`h\`: Height (pixel) of the video frame of the host. It corresponds to the \`height\` member in \`TranscodingUser\`. |
| \`ver\`      | The version of the SEI protocol. The current version is 20190611.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| \`ts\`       | Timestamp (ms) of the current encoding information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| \`app_data\` | Extra user-defined information. It corresponds to the \`transcodingExtraInfo\` member in the \`LiveTranscoding\` class.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

### The structure of SEI [#the-structure-of-sei]

The SEI information is as follows:

\`\`\`text
0000  0664bd7b 22617070 5f646174 61223a22  .d.{"app_data":"
0010  222c2263 616e7661 73223a7b 2262676e  ","canvas":{"bgn
0020  64223a22 23666666 66666622 2c226822  d":"#ffffff","h"
0030  3a363430 2c227722 3a333630 7d2c2272  :640,"w":360},"r
0040  6567696f 6e73223a 5b7b2261 6c706861  egions":[{"alpha
0050  223a3235 352c2268 223a3634 302c2275  ":255,"h":640,"u
0060  6964223a 33313031 32373137 39312c22  id":3101271791,"
0070  766f6c75 6d65223a 32382c22 77223a33  volume":28,"w":3
0080  36302c22 78223a30 2c227922 3a302c22  60,"x":0,"y":0,"
0090  7a6f7264 6572223a 317d5d2c 22747322  zorder":1}],"ts"
00a0  3a313533 37393630 32333537 38332c22  :1537960235783,"
00b0  76657222 3a223230 31383038 3238227d  ver":"20190611"}
\`\`\`

In which:

* \`06\`: The SEI frame.
* \`64\`: The SEI frame type defined by the user. Here we define it as 100.
* \`bd\`: The length of the SEI frame. The following are some sample calculations rendered in decimal and hexadecimal:
  * If the length is 922, because 922 can be divided by 255 (\`0xff\`) three times and the remainder is 157 (\`0x9d\`), then \`bd\` is \`ffffff9d\`.
  * If the length is 572, because 572 can be divided by 255 (\`0xff\`) two times and the remainder is 62 (\`0x3e\`), then \`bd\` is \`ffff3e\`.
  * If the length is 234, because 234 divided by 255 (\`0xff\`) gives 0 and the remainder is 234 (\`0xea\`), then \`bd\` is \`ea\`.
* Other digits: Content of the SEI frame.

### FAQ [#faq]

Q: If I use the SEI frame in Media Push, is it necessary to use the signaling system to send the layout information? Do I use either signaling or SEI?
A: Adding the H264/H265 SEI information to the video stream during Media Push is different from sending the uplink data. Only the \`app_data\` parameter of the SEI information relates to the uplink data.

Q: Does the signaling system send the layout information? Why does the SEI frame contain the layout information?
A: Agora puts the layout information in the SEI frame because the audience members in the \`LIVE_BROADCASTING\` profile also need the layout information of the current stream to set the window region of the hosts.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "By default, Agora adds the encoding information of the current video to the transcoded H264/H265 SEI (Supplemental Enhancement Information) during Media Push. The encoding information is a JSON string. The following is the sample code:"
  }, {
    heading: undefined,
    content: "The definition of the parameters:"
  }, {
    heading: undefined,
    content: "Parameter"
  }, {
    heading: undefined,
    content: "Description"
  }, {
    heading: undefined,
    content: "`canvas`"
  }, {
    heading: undefined,
    content: "The canvas information. It contains the following properties:- `w`: Width (pixel) of the canvas. It corresponds to the `width` member in the `LiveTranscoding` class.\n- `h`: Height (pixel) of the canvas. It corresponds to the `height` member in the `LiveTranscoding` class.\n- `bgnd`: The background color (RGB) of the canvas, represented by a hexademical string. It corresponds to the `backgoundColor` member in the `LiveTranscoding` class."
  }, {
    heading: undefined,
    content: "`regions`"
  }, {
    heading: undefined,
    content: "The layout information of the host. It corresponds to the `transcodingUsers` member in the `LiveTranscoding` class. It contains the following properties:- `suid`: (**Optional**)The string user account of the host in this region. This parameter applies to use-cases where string user accounts are used to identify the host.\n- `uid`: UID of the host in this region. It corresponds to the `uid` member in the `TranscodingUser` class.\n- `alpha`: The transparency of the video frame of the host. The value range is \\[0.0, 1.0]. It corresponds to the `alpha` member in `TranscodingUser` .\n- `zorder`: The layout position of the video frame of the host. The value range is \\[0, 100]. It corresponds to the `zOrder` member in `TranscodingUser`.\n- `volume`: The volume (dB) of the host. The value range is \\[0, 100].\n- `x`: The horizontal position of the video frame of the broadacaster from the top left corner of the Media Push. It corresponds to the `x` member in `TranscodingUser`.\n- `y`: The vertical position of the video frame of the host from the top left corner of the Media Push. It corresponds to the `y` member in `TranscodingUser`.\n- `w`: Width (pixel) of the video frame of the host. It corresponds to the `width` member in `TranscodingUser`.\n- `h`: Height (pixel) of the video frame of the host. It corresponds to the `height` member in `TranscodingUser`."
  }, {
    heading: undefined,
    content: "`ver`"
  }, {
    heading: undefined,
    content: "The version of the SEI protocol. The current version is 20190611."
  }, {
    heading: undefined,
    content: "`ts`"
  }, {
    heading: undefined,
    content: "Timestamp (ms) of the current encoding information."
  }, {
    heading: undefined,
    content: "`app_data`"
  }, {
    heading: undefined,
    content: "Extra user-defined information. It corresponds to the `transcodingExtraInfo` member in the `LiveTranscoding` class."
  }, {
    heading: "the-structure-of-sei",
    content: "The SEI information is as follows:"
  }, {
    heading: "the-structure-of-sei",
    content: "In which:"
  }, {
    heading: "the-structure-of-sei",
    content: "`06`: The SEI frame."
  }, {
    heading: "the-structure-of-sei",
    content: "`64`: The SEI frame type defined by the user. Here we define it as 100."
  }, {
    heading: "the-structure-of-sei",
    content: "`bd`: The length of the SEI frame. The following are some sample calculations rendered in decimal and hexadecimal:"
  }, {
    heading: "the-structure-of-sei",
    content: "If the length is 922, because 922 can be divided by 255 (`0xff`) three times and the remainder is 157 (`0x9d`), then `bd` is `ffffff9d`."
  }, {
    heading: "the-structure-of-sei",
    content: "If the length is 572, because 572 can be divided by 255 (`0xff`) two times and the remainder is 62 (`0x3e`), then `bd` is `ffff3e`."
  }, {
    heading: "the-structure-of-sei",
    content: "If the length is 234, because 234 divided by 255 (`0xff`) gives 0 and the remainder is 234 (`0xea`), then `bd` is `ea`."
  }, {
    heading: "the-structure-of-sei",
    content: "Other digits: Content of the SEI frame."
  }, {
    heading: "faq",
    content: "Q: If I use the SEI frame in Media Push, is it necessary to use the signaling system to send the layout information? Do I use either signaling or SEI?\nA: Adding the H264/H265 SEI information to the video stream during Media Push is different from sending the uplink data. Only the `app_data` parameter of the SEI information relates to the uplink data."
  }, {
    heading: "faq",
    content: "Q: Does the signaling system send the layout information? Why does the SEI frame contain the layout information?\nA: Agora puts the layout information in the SEI frame because the audience members in the `LIVE_BROADCASTING` profile also need the layout information of the current stream to set the window region of the hosts."
  }],
  headings: [{
    id: "the-structure-of-sei",
    content: "The structure of SEI"
  }, {
    id: "faq",
    content: "FAQ"
  }]
};
export let toc = [{
  depth: 3,
  url: "#the-structure-of-sei",
  title: _jsx(_Fragment, {
    children: "The structure of SEI"
  })
}, {
  depth: 3,
  url: "#faq",
  title: _jsx(_Fragment, {
    children: "FAQ"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "By default, Agora adds the encoding information of the current video to the transcoded H264/H265 SEI (Supplemental Enhancement Information) during Media Push. The encoding information is a JSON string. The following is the sample code:"
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
              children: '    "canvas"'
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
              children: '        "w"'
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
              children: "640"
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
              children: '        "h"'
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
              children: "360"
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
              children: '        "bgnd"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"#000000"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "regions"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "uid"'
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
              children: "1"
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
              children: '        "alpha"'
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
              children: "1.0"
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
              children: '        "zorder"'
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
              children: "1"
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
              children: '        "volume"'
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
              children: "50"
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
              children: '        "x"'
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
              children: '        "y"'
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
              children: '        "w"'
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
              children: "320"
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
              children: '        "h"'
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
              children: "360"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "         {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "uid"'
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
              children: "2"
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
              children: '        "alpha"'
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
              children: "1.0"
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
              children: '        "zOrder"'
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
              children: "1"
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
              children: '        "volume"'
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
              children: "89"
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
              children: '        "x"'
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
              children: "320"
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
              children: '        "y"'
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
              children: '        "w"'
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
              children: "320"
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
              children: '        "h"'
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
              children: "360"
            })]
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
              children: "    ],"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "ver"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"20190611"'
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
              children: '    "ts"'
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
              children: "1535385600000"
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
              children: '    "app_data"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '""'
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
`, _jsx(_components.p, {
      children: "The definition of the parameters:"
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
              children: "canvas"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The canvas information. It contains the following properties:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "w"
                }), ": Width (pixel) of the canvas. It corresponds to the ", _jsx(_components.code, {
                  children: "width"
                }), " member in the ", _jsx(_components.code, {
                  children: "LiveTranscoding"
                }), " class."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "h"
                }), ": Height (pixel) of the canvas. It corresponds to the ", _jsx(_components.code, {
                  children: "height"
                }), " member in the ", _jsx(_components.code, {
                  children: "LiveTranscoding"
                }), " class."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "bgnd"
                }), ": The background color (RGB) of the canvas, represented by a hexademical string. It corresponds to the ", _jsx(_components.code, {
                  children: "backgoundColor"
                }), " member in the ", _jsx(_components.code, {
                  children: "LiveTranscoding"
                }), " class."]
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "regions"
            })
          }), _jsxs(_components.td, {
            children: [_jsxs(_components.p, {
              children: ["The layout information of the host. It corresponds to the ", _jsx(_components.code, {
                children: "transcodingUsers"
              }), " member in the ", _jsx(_components.code, {
                children: "LiveTranscoding"
              }), " class. It contains the following properties:"]
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "suid"
                }), ": (", _jsx(_components.strong, {
                  children: "Optional"
                }), ")The string user account of the host in this region. This parameter applies to use-cases where string user accounts are used to identify the host."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "uid"
                }), ": UID of the host in this region. It corresponds to the ", _jsx(_components.code, {
                  children: "uid"
                }), " member in the ", _jsx(_components.code, {
                  children: "TranscodingUser"
                }), " class."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "alpha"
                }), ": The transparency of the video frame of the host. The value range is [0.0, 1.0]. It corresponds to the ", _jsx(_components.code, {
                  children: "alpha"
                }), " member in ", _jsx(_components.code, {
                  children: "TranscodingUser"
                }), " ."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "zorder"
                }), ": The layout position of the video frame of the host. The value range is [0, 100]. It corresponds to the ", _jsx(_components.code, {
                  children: "zOrder"
                }), " member in ", _jsx(_components.code, {
                  children: "TranscodingUser"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "volume"
                }), ": The volume (dB) of the host. The value range is [0, 100]."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "x"
                }), ": The horizontal position of the video frame of the broadacaster from the top left corner of the Media Push. It corresponds to the ", _jsx(_components.code, {
                  children: "x"
                }), " member in ", _jsx(_components.code, {
                  children: "TranscodingUser"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "y"
                }), ": The vertical position of the video frame of the host from the top left corner of the Media Push. It corresponds to the ", _jsx(_components.code, {
                  children: "y"
                }), " member in ", _jsx(_components.code, {
                  children: "TranscodingUser"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "w"
                }), ": Width (pixel) of the video frame of the host. It corresponds to the ", _jsx(_components.code, {
                  children: "width"
                }), " member in ", _jsx(_components.code, {
                  children: "TranscodingUser"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "h"
                }), ": Height (pixel) of the video frame of the host. It corresponds to the ", _jsx(_components.code, {
                  children: "height"
                }), " member in ", _jsx(_components.code, {
                  children: "TranscodingUser"
                }), "."]
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ver"
            })
          }), _jsx(_components.td, {
            children: "The version of the SEI protocol. The current version is 20190611."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ts"
            })
          }), _jsx(_components.td, {
            children: "Timestamp (ms) of the current encoding information."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "app_data"
            })
          }), _jsxs(_components.td, {
            children: ["Extra user-defined information. It corresponds to the ", _jsx(_components.code, {
              children: "transcodingExtraInfo"
            }), " member in the ", _jsx(_components.code, {
              children: "LiveTranscoding"
            }), " class."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "the-structure-of-sei",
      children: "The structure of SEI"
    }), `
`, _jsx(_components.p, {
      children: "The SEI information is as follows:"
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "0000"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  0664bd7b"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 22617070"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 5f646174"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 61223a22"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  .d.{"app_data":"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '0010  222c2263 616e7661 73223a7b 2262676e  ","canvas":{"bgn'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '0020  64223a22 23666666 66666622 2c226822  d":"#ffffff","h"'
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "0030"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  3a363430"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 2c227722"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 3a333630"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 7d2c2272"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  :640,"w":360},"r'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '0040  6567696f 6e73223a 5b7b2261 6c706861  egions":[{"alpha'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '0050  223a3235 352c2268 223a3634 302c2275  ":255,"h":640,"u'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '0060  6964223a 33313031 32373137 39312c22  id":3101271791,"'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '0070  766f6c75 6d65223a 32382c22 77223a33  volume":28,"w":3'
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "0080"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  36302c22"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 78223a30"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 2c227922"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 3a302c22"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  60,"x":0,"y":0,"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '0090  7a6f7264 6572223a 317d5d2c 22747322  zorder":1}],"ts"'
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "00a0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  3a313533"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 37393630"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 32333537"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 38332c22"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  :1537960235783,"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '00b0  76657222 3a223230 31383038 3238227d  ver":"20190611"}'
            })
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "In which:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "06"
        }), ": The SEI frame."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "64"
        }), ": The SEI frame type defined by the user. Here we define it as 100."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "bd"
        }), ": The length of the SEI frame. The following are some sample calculations rendered in decimal and hexadecimal:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["If the length is 922, because 922 can be divided by 255 (", _jsx(_components.code, {
              children: "0xff"
            }), ") three times and the remainder is 157 (", _jsx(_components.code, {
              children: "0x9d"
            }), "), then ", _jsx(_components.code, {
              children: "bd"
            }), " is ", _jsx(_components.code, {
              children: "ffffff9d"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["If the length is 572, because 572 can be divided by 255 (", _jsx(_components.code, {
              children: "0xff"
            }), ") two times and the remainder is 62 (", _jsx(_components.code, {
              children: "0x3e"
            }), "), then ", _jsx(_components.code, {
              children: "bd"
            }), " is ", _jsx(_components.code, {
              children: "ffff3e"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["If the length is 234, because 234 divided by 255 (", _jsx(_components.code, {
              children: "0xff"
            }), ") gives 0 and the remainder is 234 (", _jsx(_components.code, {
              children: "0xea"
            }), "), then ", _jsx(_components.code, {
              children: "bd"
            }), " is ", _jsx(_components.code, {
              children: "ea"
            }), "."]
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "Other digits: Content of the SEI frame."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "faq",
      children: "FAQ"
    }), `
`, _jsxs(_components.p, {
      children: [`Q: If I use the SEI frame in Media Push, is it necessary to use the signaling system to send the layout information? Do I use either signaling or SEI?
A: Adding the H264/H265 SEI information to the video stream during Media Push is different from sending the uplink data. Only the `, _jsx(_components.code, {
        children: "app_data"
      }), " parameter of the SEI information relates to the uplink data."]
    }), `
`, _jsxs(_components.p, {
      children: [`Q: Does the signaling system send the layout information? Why does the SEI frame contain the layout information?
A: Agora puts the layout information in the SEI frame because the audience members in the `, _jsx(_components.code, {
        children: "LIVE_BROADCASTING"
      }), " profile also need the layout information of the current stream to set the window region of the hosts."]
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
