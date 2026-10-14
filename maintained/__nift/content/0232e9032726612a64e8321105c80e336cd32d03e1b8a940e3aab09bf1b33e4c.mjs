import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Set the video profile",
  description: "Setting the video profile for recorded videos."
};
export let _markdown = `

In composite recording mode, you can set the video profile (resolution, frame rate, and bitrate) for the output video stream. Agora recommends setting the video profile according to the values listed in the [video profile table](#video-profile-table). For Cloud Recording, use \`transcodingConfig\` to set the video profile. For On-Premise Recording, use \`mixResolution\` to set the video profile.

In individual recording mode, the recorded video keeps the original video profile.

## Basic guidelines [#basic-guidelines]

* Agora recommends setting the recording resolution lower than the [aggregate resolution](../../reference/pricing#resolution-calibration) of the original video streams, otherwise the recorded video may be blurry.
* The resolution you set in the video profile is that of the video canvas, and its aspect ratio does not need to be identical to any source video stream. The aspect ratio of each user region in the output video depends on the aspect ratio of the canvas and the video layout. See [Related articles](#related-articles).
* Agora only supports the following frame rates: 1 fps, 7 fps, 10 fps, 15 fps, 24 fps, 30 fps, and 60 fps. The default value is 15 fps. If you set other frame rates, the SDK uses the default value.
* The base bitrate in the video profile table applies to the communication profile. The live-broadcast profile generally requires a higher bitrate to ensure better video quality. Set the bitrate of the live-broadcast profile as twice the base bitrate.
* Increasing the bitrate improves the output video quality, but requires higher bandwidth. The maximum bitrate is 6500 Kbps. Exceeding the limit causes an error.

## Calculate a bitrate manually [#calculate-a-bitrate-manually]

If you cannot find a matching video profile in the table, follow these steps to manually calculate a proper bitrate:

1. In the video profile table, find the resolution closest to your target resolution.
2. Calculate a bitrate based on your target frame rate. When the resolution is fixed, the bitrate increases as the frame rate increases. Suppose the base bitrate is *x* when the frame rate is 15 fps:
   * If the frame rate is 5 fps, the base bitrate is 0.5*x*.
   * If the frame rate is 30 fps, the base bitrate is 1.5&#x2A;x.*
   * If you use a different frame rate, set the bitrate depending on the interval that the frame rate falls into. For example, if the frame rate is 10 fps, set the bitrate between 0.5*x* and 1*x*.

Suppose your target resolution is 300 \\* 240 with a frame rate of 30 fps. The closest resolution in the video profile table is 320 \\* 240, with a base bitrate of 200 Kbps and a frame rate of 15 fps. The inferred bitrate should be 200 Kbps \\* 1.5, which is 300 Kbps.

## Video profile table [#video-profile-table]

| Resolution (width \\* height) | Frame rate (fps) | Base bitrate (Kbps, communication profile) | Live bitrate (Kbps, live-broadcast profile) |
| :--------------------------- | :--------------- | :----------------------------------------- | :------------------------------------------ |
| 160 \\* 120                   | 15               | 65                                         | 130                                         |
| 120 \\* 120                   | 15               | 50                                         | 100                                         |
| 320 \\* 180                   | 15               | 140                                        | 280                                         |
| 180 \\* 180                   | 15               | 100                                        | 200                                         |
| 240 \\* 180                   | 15               | 120                                        | 240                                         |
| 320 \\* 240                   | 15               | 200                                        | 400                                         |
| 240 \\* 240                   | 15               | 140                                        | 280                                         |
| 424 \\* 240                   | 15               | 220                                        | 440                                         |
| 640 \\* 360                   | 15               | 400                                        | 800                                         |
| 360 \\* 360                   | 15               | 260                                        | 520                                         |
| 640 \\* 360                   | 30               | 600                                        | 1200                                        |
| 360 \\* 360                   | 30               | 400                                        | 800                                         |
| 480 \\* 360                   | 15               | 320                                        | 640                                         |
| 480 \\* 360                   | 30               | 490                                        | 980                                         |
| 640 \\* 480                   | 15               | 500                                        | 1000                                        |
| 480 \\* 480                   | 15               | 400                                        | 800                                         |
| 640 \\* 480                   | 30               | 750                                        | 1500                                        |
| 480 \\* 480                   | 30               | 600                                        | 1200                                        |
| 848 \\* 480                   | 15               | 610                                        | 1220                                        |
| 848 \\* 480                   | 30               | 930                                        | 1860                                        |
| 640 \\* 480                   | 10               | 400                                        | 800                                         |
| 1280 \\* 720                  | 15               | 1130                                       | 2260                                        |
| 1280 \\* 720                  | 30               | 1710                                       | 3420                                        |
| 960 \\* 720                   | 15               | 910                                        | 1820                                        |
| 960 \\* 720                   | 30               | 1380                                       | 2760                                        |
| 1920 \\* 1080                 | 15               | 2080                                       | 4160                                        |
| 1920 \\* 1080                 | 30               | 3150                                       | 6300                                        |
| 1920 \\* 1080                 | 60               | 4780                                       | 6500                                        |

## Related articles [#related-articles]

* Cloud Recording: [Set Video Layout](/en/realtime-media/cloud-recording/build/customize-the-recording/layout)
* On-Premise Recording: [Set Video Layout](/en/realtime-media/on-premise-recording/build/customize-the-recording/layout)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "In composite recording mode, you can set the video profile (resolution, frame rate, and bitrate) for the output video stream. Agora recommends setting the video profile according to the values listed in the video profile table. For Cloud Recording, use `transcodingConfig` to set the video profile. For On-Premise Recording, use `mixResolution` to set the video profile."
  }, {
    heading: undefined,
    content: "In individual recording mode, the recorded video keeps the original video profile."
  }, {
    heading: "basic-guidelines",
    content: "Agora recommends setting the recording resolution lower than the aggregate resolution of the original video streams, otherwise the recorded video may be blurry."
  }, {
    heading: "basic-guidelines",
    content: "The resolution you set in the video profile is that of the video canvas, and its aspect ratio does not need to be identical to any source video stream. The aspect ratio of each user region in the output video depends on the aspect ratio of the canvas and the video layout. See Related articles."
  }, {
    heading: "basic-guidelines",
    content: "Agora only supports the following frame rates: 1 fps, 7 fps, 10 fps, 15 fps, 24 fps, 30 fps, and 60 fps. The default value is 15 fps. If you set other frame rates, the SDK uses the default value."
  }, {
    heading: "basic-guidelines",
    content: "The base bitrate in the video profile table applies to the communication profile. The live-broadcast profile generally requires a higher bitrate to ensure better video quality. Set the bitrate of the live-broadcast profile as twice the base bitrate."
  }, {
    heading: "basic-guidelines",
    content: "Increasing the bitrate improves the output video quality, but requires higher bandwidth. The maximum bitrate is 6500 Kbps. Exceeding the limit causes an error."
  }, {
    heading: "calculate-a-bitrate-manually",
    content: "If you cannot find a matching video profile in the table, follow these steps to manually calculate a proper bitrate:"
  }, {
    heading: "calculate-a-bitrate-manually",
    content: "In the video profile table, find the resolution closest to your target resolution."
  }, {
    heading: "calculate-a-bitrate-manually",
    content: "Calculate a bitrate based on your target frame rate. When the resolution is fixed, the bitrate increases as the frame rate increases. Suppose the base bitrate is *x* when the frame rate is 15 fps:"
  }, {
    heading: "calculate-a-bitrate-manually",
    content: "If the frame rate is 5 fps, the base bitrate is 0.5*x*."
  }, {
    heading: "calculate-a-bitrate-manually",
    content: "If the frame rate is 30 fps, the base bitrate is 1.5&#x2A;x.*"
  }, {
    heading: "calculate-a-bitrate-manually",
    content: "If you use a different frame rate, set the bitrate depending on the interval that the frame rate falls into. For example, if the frame rate is 10 fps, set the bitrate between 0.5*x* and 1*x*."
  }, {
    heading: "calculate-a-bitrate-manually",
    content: "Suppose your target resolution is 300 \\* 240 with a frame rate of 30 fps. The closest resolution in the video profile table is 320 \\* 240, with a base bitrate of 200 Kbps and a frame rate of 15 fps. The inferred bitrate should be 200 Kbps \\* 1.5, which is 300 Kbps."
  }, {
    heading: "video-profile-table",
    content: "Resolution (width \\* height)"
  }, {
    heading: "video-profile-table",
    content: "Frame rate (fps)"
  }, {
    heading: "video-profile-table",
    content: "Base bitrate (Kbps, communication profile)"
  }, {
    heading: "video-profile-table",
    content: "Live bitrate (Kbps, live-broadcast profile)"
  }, {
    heading: "video-profile-table",
    content: "160 \\* 120"
  }, {
    heading: "video-profile-table",
    content: "15"
  }, {
    heading: "video-profile-table",
    content: "65"
  }, {
    heading: "video-profile-table",
    content: "130"
  }, {
    heading: "video-profile-table",
    content: "120 \\* 120"
  }, {
    heading: "video-profile-table",
    content: "15"
  }, {
    heading: "video-profile-table",
    content: "50"
  }, {
    heading: "video-profile-table",
    content: "100"
  }, {
    heading: "video-profile-table",
    content: "320 \\* 180"
  }, {
    heading: "video-profile-table",
    content: "15"
  }, {
    heading: "video-profile-table",
    content: "140"
  }, {
    heading: "video-profile-table",
    content: "280"
  }, {
    heading: "video-profile-table",
    content: "180 \\* 180"
  }, {
    heading: "video-profile-table",
    content: "15"
  }, {
    heading: "video-profile-table",
    content: "100"
  }, {
    heading: "video-profile-table",
    content: "200"
  }, {
    heading: "video-profile-table",
    content: "240 \\* 180"
  }, {
    heading: "video-profile-table",
    content: "15"
  }, {
    heading: "video-profile-table",
    content: "120"
  }, {
    heading: "video-profile-table",
    content: "240"
  }, {
    heading: "video-profile-table",
    content: "320 \\* 240"
  }, {
    heading: "video-profile-table",
    content: "15"
  }, {
    heading: "video-profile-table",
    content: "200"
  }, {
    heading: "video-profile-table",
    content: "400"
  }, {
    heading: "video-profile-table",
    content: "240 \\* 240"
  }, {
    heading: "video-profile-table",
    content: "15"
  }, {
    heading: "video-profile-table",
    content: "140"
  }, {
    heading: "video-profile-table",
    content: "280"
  }, {
    heading: "video-profile-table",
    content: "424 \\* 240"
  }, {
    heading: "video-profile-table",
    content: "15"
  }, {
    heading: "video-profile-table",
    content: "220"
  }, {
    heading: "video-profile-table",
    content: "440"
  }, {
    heading: "video-profile-table",
    content: "640 \\* 360"
  }, {
    heading: "video-profile-table",
    content: "15"
  }, {
    heading: "video-profile-table",
    content: "400"
  }, {
    heading: "video-profile-table",
    content: "800"
  }, {
    heading: "video-profile-table",
    content: "360 \\* 360"
  }, {
    heading: "video-profile-table",
    content: "15"
  }, {
    heading: "video-profile-table",
    content: "260"
  }, {
    heading: "video-profile-table",
    content: "520"
  }, {
    heading: "video-profile-table",
    content: "640 \\* 360"
  }, {
    heading: "video-profile-table",
    content: "30"
  }, {
    heading: "video-profile-table",
    content: "600"
  }, {
    heading: "video-profile-table",
    content: "1200"
  }, {
    heading: "video-profile-table",
    content: "360 \\* 360"
  }, {
    heading: "video-profile-table",
    content: "30"
  }, {
    heading: "video-profile-table",
    content: "400"
  }, {
    heading: "video-profile-table",
    content: "800"
  }, {
    heading: "video-profile-table",
    content: "480 \\* 360"
  }, {
    heading: "video-profile-table",
    content: "15"
  }, {
    heading: "video-profile-table",
    content: "320"
  }, {
    heading: "video-profile-table",
    content: "640"
  }, {
    heading: "video-profile-table",
    content: "480 \\* 360"
  }, {
    heading: "video-profile-table",
    content: "30"
  }, {
    heading: "video-profile-table",
    content: "490"
  }, {
    heading: "video-profile-table",
    content: "980"
  }, {
    heading: "video-profile-table",
    content: "640 \\* 480"
  }, {
    heading: "video-profile-table",
    content: "15"
  }, {
    heading: "video-profile-table",
    content: "500"
  }, {
    heading: "video-profile-table",
    content: "1000"
  }, {
    heading: "video-profile-table",
    content: "480 \\* 480"
  }, {
    heading: "video-profile-table",
    content: "15"
  }, {
    heading: "video-profile-table",
    content: "400"
  }, {
    heading: "video-profile-table",
    content: "800"
  }, {
    heading: "video-profile-table",
    content: "640 \\* 480"
  }, {
    heading: "video-profile-table",
    content: "30"
  }, {
    heading: "video-profile-table",
    content: "750"
  }, {
    heading: "video-profile-table",
    content: "1500"
  }, {
    heading: "video-profile-table",
    content: "480 \\* 480"
  }, {
    heading: "video-profile-table",
    content: "30"
  }, {
    heading: "video-profile-table",
    content: "600"
  }, {
    heading: "video-profile-table",
    content: "1200"
  }, {
    heading: "video-profile-table",
    content: "848 \\* 480"
  }, {
    heading: "video-profile-table",
    content: "15"
  }, {
    heading: "video-profile-table",
    content: "610"
  }, {
    heading: "video-profile-table",
    content: "1220"
  }, {
    heading: "video-profile-table",
    content: "848 \\* 480"
  }, {
    heading: "video-profile-table",
    content: "30"
  }, {
    heading: "video-profile-table",
    content: "930"
  }, {
    heading: "video-profile-table",
    content: "1860"
  }, {
    heading: "video-profile-table",
    content: "640 \\* 480"
  }, {
    heading: "video-profile-table",
    content: "10"
  }, {
    heading: "video-profile-table",
    content: "400"
  }, {
    heading: "video-profile-table",
    content: "800"
  }, {
    heading: "video-profile-table",
    content: "1280 \\* 720"
  }, {
    heading: "video-profile-table",
    content: "15"
  }, {
    heading: "video-profile-table",
    content: "1130"
  }, {
    heading: "video-profile-table",
    content: "2260"
  }, {
    heading: "video-profile-table",
    content: "1280 \\* 720"
  }, {
    heading: "video-profile-table",
    content: "30"
  }, {
    heading: "video-profile-table",
    content: "1710"
  }, {
    heading: "video-profile-table",
    content: "3420"
  }, {
    heading: "video-profile-table",
    content: "960 \\* 720"
  }, {
    heading: "video-profile-table",
    content: "15"
  }, {
    heading: "video-profile-table",
    content: "910"
  }, {
    heading: "video-profile-table",
    content: "1820"
  }, {
    heading: "video-profile-table",
    content: "960 \\* 720"
  }, {
    heading: "video-profile-table",
    content: "30"
  }, {
    heading: "video-profile-table",
    content: "1380"
  }, {
    heading: "video-profile-table",
    content: "2760"
  }, {
    heading: "video-profile-table",
    content: "1920 \\* 1080"
  }, {
    heading: "video-profile-table",
    content: "15"
  }, {
    heading: "video-profile-table",
    content: "2080"
  }, {
    heading: "video-profile-table",
    content: "4160"
  }, {
    heading: "video-profile-table",
    content: "1920 \\* 1080"
  }, {
    heading: "video-profile-table",
    content: "30"
  }, {
    heading: "video-profile-table",
    content: "3150"
  }, {
    heading: "video-profile-table",
    content: "6300"
  }, {
    heading: "video-profile-table",
    content: "1920 \\* 1080"
  }, {
    heading: "video-profile-table",
    content: "60"
  }, {
    heading: "video-profile-table",
    content: "4780"
  }, {
    heading: "video-profile-table",
    content: "6500"
  }, {
    heading: "related-articles",
    content: "Cloud Recording: Set Video Layout"
  }, {
    heading: "related-articles",
    content: "On-Premise Recording: Set Video Layout"
  }],
  headings: [{
    id: "basic-guidelines",
    content: "Basic guidelines"
  }, {
    id: "calculate-a-bitrate-manually",
    content: "Calculate a bitrate manually"
  }, {
    id: "video-profile-table",
    content: "Video profile table"
  }, {
    id: "related-articles",
    content: "Related articles"
  }]
};
export let toc = [{
  depth: 2,
  url: "#basic-guidelines",
  title: _jsx(_Fragment, {
    children: "Basic guidelines"
  })
}, {
  depth: 2,
  url: "#calculate-a-bitrate-manually",
  title: _jsx(_Fragment, {
    children: "Calculate a bitrate manually"
  })
}, {
  depth: 2,
  url: "#video-profile-table",
  title: _jsx(_Fragment, {
    children: "Video profile table"
  })
}, {
  depth: 2,
  url: "#related-articles",
  title: _jsx(_Fragment, {
    children: "Related articles"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
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
    children: [_jsxs(_components.p, {
      children: ["In composite recording mode, you can set the video profile (resolution, frame rate, and bitrate) for the output video stream. Agora recommends setting the video profile according to the values listed in the ", _jsx(_components.a, {
        href: "#video-profile-table",
        children: "video profile table"
      }), ". For Cloud Recording, use ", _jsx(_components.code, {
        children: "transcodingConfig"
      }), " to set the video profile. For On-Premise Recording, use ", _jsx(_components.code, {
        children: "mixResolution"
      }), " to set the video profile."]
    }), `
`, _jsx(_components.p, {
      children: "In individual recording mode, the recorded video keeps the original video profile."
    }), `
`, _jsx(_components.h2, {
      id: "basic-guidelines",
      children: "Basic guidelines"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Agora recommends setting the recording resolution lower than the ", _jsx(_components.a, {
          href: "../../reference/pricing#resolution-calibration",
          children: "aggregate resolution"
        }), " of the original video streams, otherwise the recorded video may be blurry."]
      }), `
`, _jsxs(_components.li, {
        children: ["The resolution you set in the video profile is that of the video canvas, and its aspect ratio does not need to be identical to any source video stream. The aspect ratio of each user region in the output video depends on the aspect ratio of the canvas and the video layout. See ", _jsx(_components.a, {
          href: "#related-articles",
          children: "Related articles"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Agora only supports the following frame rates: 1 fps, 7 fps, 10 fps, 15 fps, 24 fps, 30 fps, and 60 fps. The default value is 15 fps. If you set other frame rates, the SDK uses the default value."
      }), `
`, _jsx(_components.li, {
        children: "The base bitrate in the video profile table applies to the communication profile. The live-broadcast profile generally requires a higher bitrate to ensure better video quality. Set the bitrate of the live-broadcast profile as twice the base bitrate."
      }), `
`, _jsx(_components.li, {
        children: "Increasing the bitrate improves the output video quality, but requires higher bandwidth. The maximum bitrate is 6500 Kbps. Exceeding the limit causes an error."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "calculate-a-bitrate-manually",
      children: "Calculate a bitrate manually"
    }), `
`, _jsx(_components.p, {
      children: "If you cannot find a matching video profile in the table, follow these steps to manually calculate a proper bitrate:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "In the video profile table, find the resolution closest to your target resolution."
      }), `
`, _jsxs(_components.li, {
        children: ["Calculate a bitrate based on your target frame rate. When the resolution is fixed, the bitrate increases as the frame rate increases. Suppose the base bitrate is ", _jsx(_components.em, {
          children: "x"
        }), " when the frame rate is 15 fps:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["If the frame rate is 5 fps, the base bitrate is 0.5", _jsx(_components.em, {
              children: "x"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["If the frame rate is 30 fps, the base bitrate is 1.5", _jsx(_components.em, {
              children: "x."
            })]
          }), `
`, _jsxs(_components.li, {
            children: ["If you use a different frame rate, set the bitrate depending on the interval that the frame rate falls into. For example, if the frame rate is 10 fps, set the bitrate between 0.5", _jsx(_components.em, {
              children: "x"
            }), " and 1", _jsx(_components.em, {
              children: "x"
            }), "."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Suppose your target resolution is 300 * 240 with a frame rate of 30 fps. The closest resolution in the video profile table is 320 * 240, with a base bitrate of 200 Kbps and a frame rate of 15 fps. The inferred bitrate should be 200 Kbps * 1.5, which is 300 Kbps."
    }), `
`, _jsx(_components.h2, {
      id: "video-profile-table",
      children: "Video profile table"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Resolution (width * height)"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Frame rate (fps)"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Base bitrate (Kbps, communication profile)"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Live bitrate (Kbps, live-broadcast profile)"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "160 * 120"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "65"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "130"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "120 * 120"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "50"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "320 * 180"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "140"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "280"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "180 * 180"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "100"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "200"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "240 * 180"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "120"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "240"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "320 * 240"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "200"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "400"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "240 * 240"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "140"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "280"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "424 * 240"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "220"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "440"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "640 * 360"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "400"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "800"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 * 360"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "260"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "520"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "640 * 360"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "30"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "600"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1200"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 * 360"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "30"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "400"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "800"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "480 * 360"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "320"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "640"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "480 * 360"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "30"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "490"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "980"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "640 * 480"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "500"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1000"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "480 * 480"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "400"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "800"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "640 * 480"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "30"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "750"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1500"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "480 * 480"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "30"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "600"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1200"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "848 * 480"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "610"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1220"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "848 * 480"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "30"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "930"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1860"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "640 * 480"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "10"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "400"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "800"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1280 * 720"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1130"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2260"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1280 * 720"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "30"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1710"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "3420"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "960 * 720"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "910"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1820"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "960 * 720"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "30"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1380"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2760"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1920 * 1080"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "15"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2080"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "4160"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1920 * 1080"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "30"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "3150"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "6300"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1920 * 1080"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "60"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "4780"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "6500"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "related-articles",
      children: "Related articles"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Cloud Recording: ", _jsx(_components.a, {
          href: "/en/realtime-media/cloud-recording/build/customize-the-recording/layout",
          children: "Set Video Layout"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["On-Premise Recording: ", _jsx(_components.a, {
          href: "/en/realtime-media/on-premise-recording/build/customize-the-recording/layout",
          children: "Set Video Layout"
        })]
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
