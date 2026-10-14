import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Repair recorded files",
  description: "How to repair recorded files after the recording crashes."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="linux-cpp" platforms="[&#x22;linux-cpp&#x22;,&#x22;linux-java&#x22;]" showTabs="true">
  <_PlatformPanel platform="linux-cpp">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="linux-cpp" />

    If a recording session crashes, the generated MP4 file may be unplayable. To preserve recorded audio and video content, the On-Premise Recording SDK provides a recovery feature that lets you reconstruct the MP4 file from temporary H264 and AAC files.

    ## Implementation [#implementation]

    This section shows how to enable recovery mode and regenerate MP4 files after a crash.

    ### Enable file recovery [#enable-file-recovery]

    To enable file recovery, set the \`che.media_recorder_recover_files\` parameter to \`true\` during \`AgoraService\` initialization:

    \`\`\`cpp
    auto agoraParameter = service->getAgoraParameter();
    agoraParameter->setBool("che.media_recorder_recover_files", true);
    \`\`\`

    ### Understand file behavior [#understand-file-behavior]

    When file recovery is enabled, the SDK generates an MP4 file as well as two additional files, H264 and AAC—with the same base name. For example, if the output file is \`storagePath/agoraRecording.mp4\`, then \`agoraRecording.mp4.h264\` and \`agoraRecording.mp4.aac\` files are also generated in the same path.

    * If the recording ends normally and the SDK triggers \`onRecorderStateChanged\` with \`RECORDER_STATE_STOP\` after \`stopRecording\` is called, the SDK deletes the H264 and AAC files automatically.

    * If the recording crashes or exits unexpectedly, the SDK retains the H264 and AAC files for recovery.

    ### Regenerate the MP4 file [#regenerate-the-mp4-file]

    To regenerate a corrupted MP4 file, use [ffmpeg](https://ffmpeg.org/), a command-line tool for processing video and audio, to merge the retained files into a playable MP4.

    \`\`\`bash
    ffmpeg -i video.h264 -i audio.aac -c:v copy -c:a copy output.mp4
    \`\`\`

    This command creates a new playable MP4 file using the video and audio data from the retained files.

    ## Reference [#reference]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API references [#api-references]

    * [\`getAgoraParameter\`](/en/api-reference/api-ref/on-premise-recording#getagoraparameter)
    * [\`onRecorderStateChanged\`](/en/api-reference/api-ref/on-premise-recording#onrecorderstatechanged)
    * [\`stopRecording\`](/en/api-reference/api-ref/on-premise-recording#stoprecording)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="linux-java">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="linux-java" />

    If a recording session crashes, the generated MP4 file may be unplayable. To preserve recorded audio and video content, the On-Premise Recording SDK provides a recovery feature that lets you reconstruct the MP4 file from temporary H264 and AAC files.

    ## Implementation [#implementation-1]

    This section shows how to enable recovery mode and regenerate MP4 files after a crash.

    ### Enable file recovery [#enable-file-recovery-1]

    To enable file recovery, set the \`che.media_recorder_recover_files\` parameter to \`true\` during \`AgoraService\` initialization:

    \`\`\`java
    AgoraParameter parameter = agoraService.getAgoraParameter();
    parameter.setBool("che.media_recorder_recover_files", true);
    \`\`\`

    ### Understand file behavior [#understand-file-behavior-1]

    When file recovery is enabled, the SDK generates an MP4 file as well as two additional files, H264 and AAC—with the same base name. For example, if the output file is \`storagePath/agoraRecording.mp4\`, then \`agoraRecording.mp4.h264\` and \`agoraRecording.mp4.aac\` files are also generated in the same path.

    * If the recording ends normally and the SDK triggers \`onRecorderStateChanged\` with \`RECORDER_STATE_STOP\` after \`stopRecording\` is called, the SDK deletes the H264 and AAC files automatically.

    * If the recording crashes or exits unexpectedly, the SDK retains the H264 and AAC files for recovery.

    ### Regenerate the MP4 file [#regenerate-the-mp4-file-1]

    To regenerate a corrupted MP4 file, use [ffmpeg](https://ffmpeg.org/), a command-line tool for processing video and audio, to merge the retained files into a playable MP4.

    \`\`\`bash
    ffmpeg -i agoraRecording.mp4.h264 -i agoraRecording.mp4.aac -c:v copy -c:a copy output.mp4
    \`\`\`

    This command creates a new playable MP4 file using the video and audio data from the retained files.

    ## Reference [#reference-1]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API references [#api-references-1]

    * [\`getAgoraParameter\`](/en/api-reference/api-ref/on-premise-recording#getagoraparameter)
    * [\`onRecorderStateChanged\`](/en/api-reference/api-ref/on-premise-recording#onrecorderstatechanged)
    * [\`stopRecording\`](/en/api-reference/api-ref/on-premise-recording#stoprecording)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "If a recording session crashes, the generated MP4 file may be unplayable. To preserve recorded audio and video content, the On-Premise Recording SDK provides a recovery feature that lets you reconstruct the MP4 file from temporary H264 and AAC files."
  }, {
    heading: "implementation",
    content: "This section shows how to enable recovery mode and regenerate MP4 files after a crash."
  }, {
    heading: "enable-file-recovery",
    content: "To enable file recovery, set the `che.media_recorder_recover_files` parameter to `true` during `AgoraService` initialization:"
  }, {
    heading: "understand-file-behavior",
    content: "When file recovery is enabled, the SDK generates an MP4 file as well as two additional files, H264 and AAC—with the same base name. For example, if the output file is `storagePath/agoraRecording.mp4`, then `agoraRecording.mp4.h264` and `agoraRecording.mp4.aac` files are also generated in the same path."
  }, {
    heading: "understand-file-behavior",
    content: "If the recording ends normally and the SDK triggers `onRecorderStateChanged` with `RECORDER_STATE_STOP` after `stopRecording` is called, the SDK deletes the H264 and AAC files automatically."
  }, {
    heading: "understand-file-behavior",
    content: "If the recording crashes or exits unexpectedly, the SDK retains the H264 and AAC files for recovery."
  }, {
    heading: "regenerate-the-mp4-file",
    content: "To regenerate a corrupted MP4 file, use ffmpeg, a command-line tool for processing video and audio, to merge the retained files into a playable MP4."
  }, {
    heading: "regenerate-the-mp4-file",
    content: "This command creates a new playable MP4 file using the video and audio data from the retained files."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-references",
    content: "`getAgoraParameter`"
  }, {
    heading: "api-references",
    content: "`onRecorderStateChanged`"
  }, {
    heading: "api-references",
    content: "`stopRecording`"
  }, {
    heading: "api-references",
    content: "If a recording session crashes, the generated MP4 file may be unplayable. To preserve recorded audio and video content, the On-Premise Recording SDK provides a recovery feature that lets you reconstruct the MP4 file from temporary H264 and AAC files."
  }, {
    heading: "implementation-1",
    content: "This section shows how to enable recovery mode and regenerate MP4 files after a crash."
  }, {
    heading: "enable-file-recovery-1",
    content: "To enable file recovery, set the `che.media_recorder_recover_files` parameter to `true` during `AgoraService` initialization:"
  }, {
    heading: "understand-file-behavior-1",
    content: "When file recovery is enabled, the SDK generates an MP4 file as well as two additional files, H264 and AAC—with the same base name. For example, if the output file is `storagePath/agoraRecording.mp4`, then `agoraRecording.mp4.h264` and `agoraRecording.mp4.aac` files are also generated in the same path."
  }, {
    heading: "understand-file-behavior-1",
    content: "If the recording ends normally and the SDK triggers `onRecorderStateChanged` with `RECORDER_STATE_STOP` after `stopRecording` is called, the SDK deletes the H264 and AAC files automatically."
  }, {
    heading: "understand-file-behavior-1",
    content: "If the recording crashes or exits unexpectedly, the SDK retains the H264 and AAC files for recovery."
  }, {
    heading: "regenerate-the-mp4-file-1",
    content: "To regenerate a corrupted MP4 file, use ffmpeg, a command-line tool for processing video and audio, to merge the retained files into a playable MP4."
  }, {
    heading: "regenerate-the-mp4-file-1",
    content: "This command creates a new playable MP4 file using the video and audio data from the retained files."
  }, {
    heading: "reference-1",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-references-1",
    content: "`getAgoraParameter`"
  }, {
    heading: "api-references-1",
    content: "`onRecorderStateChanged`"
  }, {
    heading: "api-references-1",
    content: "`stopRecording`"
  }],
  headings: [{
    id: "implementation",
    content: "Implementation"
  }, {
    id: "enable-file-recovery",
    content: "Enable file recovery"
  }, {
    id: "understand-file-behavior",
    content: "Understand file behavior"
  }, {
    id: "regenerate-the-mp4-file",
    content: "Regenerate the MP4 file"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "api-references",
    content: "API references"
  }, {
    id: "implementation-1",
    content: "Implementation"
  }, {
    id: "enable-file-recovery-1",
    content: "Enable file recovery"
  }, {
    id: "understand-file-behavior-1",
    content: "Understand file behavior"
  }, {
    id: "regenerate-the-mp4-file-1",
    content: "Regenerate the MP4 file"
  }, {
    id: "reference-1",
    content: "Reference"
  }, {
    id: "api-references-1",
    content: "API references"
  }]
};
export let toc = [{
  depth: 2,
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#enable-file-recovery",
  title: _jsx(_Fragment, {
    children: "Enable file recovery"
  })
}, {
  depth: 3,
  url: "#understand-file-behavior",
  title: _jsx(_Fragment, {
    children: "Understand file behavior"
  })
}, {
  depth: 3,
  url: "#regenerate-the-mp4-file",
  title: _jsx(_Fragment, {
    children: "Regenerate the MP4 file"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-references",
  title: _jsx(_Fragment, {
    children: "API references"
  })
}, {
  depth: 2,
  url: "#implementation-1",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#enable-file-recovery-1",
  title: _jsx(_Fragment, {
    children: "Enable file recovery"
  })
}, {
  depth: 3,
  url: "#understand-file-behavior-1",
  title: _jsx(_Fragment, {
    children: "Understand file behavior"
  })
}, {
  depth: 3,
  url: "#regenerate-the-mp4-file-1",
  title: _jsx(_Fragment, {
    children: "Regenerate the MP4 file"
  })
}, {
  depth: 2,
  url: "#reference-1",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-references-1",
  title: _jsx(_Fragment, {
    children: "API references"
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
  }, { _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_PlatformTabsGroup, {
    groupMode: "structured",
    canonicalPlatform: "linux-cpp",
    platforms: '["linux-cpp","linux-java"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "linux-cpp",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "linux-cpp",
        platform: "linux-cpp"
      }), _jsx(_components.p, {
        children: "If a recording session crashes, the generated MP4 file may be unplayable. To preserve recorded audio and video content, the On-Premise Recording SDK provides a recovery feature that lets you reconstruct the MP4 file from temporary H264 and AAC files."
      }), _jsx(_components.h2, {
        id: "implementation",
        children: "Implementation"
      }), _jsx(_components.p, {
        children: "This section shows how to enable recovery mode and regenerate MP4 files after a crash."
      }), _jsx(_components.h3, {
        id: "enable-file-recovery",
        children: "Enable file recovery"
      }), _jsxs(_components.p, {
        children: ["To enable file recovery, set the ", _jsx(_components.code, {
          children: "che.media_recorder_recover_files"
        }), " parameter to ", _jsx(_components.code, {
          children: "true"
        }), " during ", _jsx(_components.code, {
          children: "AgoraService"
        }), " initialization:"]
      }), _jsx(_Fragment, {
        children: _jsx(_components.pre, {
          className: "shiki shiki-themes github-light github-dark",
          style: {
            "--shiki-light": "#24292e",
            "--shiki-dark": "#e1e4e8",
            "--shiki-light-bg": "#fff",
            "--shiki-dark-bg": "#24292e"
          },
          tabIndex: "0",
          icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "auto"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " agoraParameter "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " service->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getAgoraParameter"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "agoraParameter->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setBool"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"che.media_recorder_recover_files"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
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
                children: ");"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "understand-file-behavior",
        children: "Understand file behavior"
      }), _jsxs(_components.p, {
        children: ["When file recovery is enabled, the SDK generates an MP4 file as well as two additional files, H264 and AAC—with the same base name. For example, if the output file is ", _jsx(_components.code, {
          children: "storagePath/agoraRecording.mp4"
        }), ", then ", _jsx(_components.code, {
          children: "agoraRecording.mp4.h264"
        }), " and ", _jsx(_components.code, {
          children: "agoraRecording.mp4.aac"
        }), " files are also generated in the same path."]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["If the recording ends normally and the SDK triggers ", _jsx(_components.code, {
              children: "onRecorderStateChanged"
            }), " with ", _jsx(_components.code, {
              children: "RECORDER_STATE_STOP"
            }), " after ", _jsx(_components.code, {
              children: "stopRecording"
            }), " is called, the SDK deletes the H264 and AAC files automatically."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "If the recording crashes or exits unexpectedly, the SDK retains the H264 and AAC files for recovery."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "regenerate-the-mp4-file",
        children: "Regenerate the MP4 file"
      }), _jsxs(_components.p, {
        children: ["To regenerate a corrupted MP4 file, use ", _jsx(_components.a, {
          href: "https://ffmpeg.org/",
          children: "ffmpeg"
        }), ", a command-line tool for processing video and audio, to merge the retained files into a playable MP4."]
      }), _jsx(_Fragment, {
        children: _jsx(_components.pre, {
          className: "shiki shiki-themes github-light github-dark",
          style: {
            "--shiki-light": "#24292e",
            "--shiki-dark": "#e1e4e8",
            "--shiki-light-bg": "#fff",
            "--shiki-dark-bg": "#24292e"
          },
          tabIndex: "0",
          icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "ffmpeg"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " -i"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " video.h264"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " -i"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " audio.aac"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " -c:v"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " copy"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " -c:a"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " copy"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " output.mp4"
              })]
            })
          })
        })
      }), _jsx(_components.p, {
        children: "This command creates a new playable MP4 file using the video and audio data from the retained files."
      }), _jsx(_components.h2, {
        id: "reference",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-references",
        children: "API references"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#getagoraparameter",
            children: _jsx(_components.code, {
              children: "getAgoraParameter"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#onrecorderstatechanged",
            children: _jsx(_components.code, {
              children: "onRecorderStateChanged"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#stoprecording",
            children: _jsx(_components.code, {
              children: "stopRecording"
            })
          })
        }), `
`]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "linux-java",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "linux-cpp",
        platform: "linux-java"
      }), _jsx(_components.p, {
        children: "If a recording session crashes, the generated MP4 file may be unplayable. To preserve recorded audio and video content, the On-Premise Recording SDK provides a recovery feature that lets you reconstruct the MP4 file from temporary H264 and AAC files."
      }), _jsx(_components.h2, {
        id: "implementation-1",
        children: "Implementation"
      }), _jsx(_components.p, {
        children: "This section shows how to enable recovery mode and regenerate MP4 files after a crash."
      }), _jsx(_components.h3, {
        id: "enable-file-recovery-1",
        children: "Enable file recovery"
      }), _jsxs(_components.p, {
        children: ["To enable file recovery, set the ", _jsx(_components.code, {
          children: "che.media_recorder_recover_files"
        }), " parameter to ", _jsx(_components.code, {
          children: "true"
        }), " during ", _jsx(_components.code, {
          children: "AgoraService"
        }), " initialization:"]
      }), _jsx(_Fragment, {
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "AgoraParameter parameter "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " agoraService."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getAgoraParameter"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "parameter."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setBool"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"che.media_recorder_recover_files"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
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
                children: ");"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "understand-file-behavior-1",
        children: "Understand file behavior"
      }), _jsxs(_components.p, {
        children: ["When file recovery is enabled, the SDK generates an MP4 file as well as two additional files, H264 and AAC—with the same base name. For example, if the output file is ", _jsx(_components.code, {
          children: "storagePath/agoraRecording.mp4"
        }), ", then ", _jsx(_components.code, {
          children: "agoraRecording.mp4.h264"
        }), " and ", _jsx(_components.code, {
          children: "agoraRecording.mp4.aac"
        }), " files are also generated in the same path."]
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["If the recording ends normally and the SDK triggers ", _jsx(_components.code, {
              children: "onRecorderStateChanged"
            }), " with ", _jsx(_components.code, {
              children: "RECORDER_STATE_STOP"
            }), " after ", _jsx(_components.code, {
              children: "stopRecording"
            }), " is called, the SDK deletes the H264 and AAC files automatically."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "If the recording crashes or exits unexpectedly, the SDK retains the H264 and AAC files for recovery."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "regenerate-the-mp4-file-1",
        children: "Regenerate the MP4 file"
      }), _jsxs(_components.p, {
        children: ["To regenerate a corrupted MP4 file, use ", _jsx(_components.a, {
          href: "https://ffmpeg.org/",
          children: "ffmpeg"
        }), ", a command-line tool for processing video and audio, to merge the retained files into a playable MP4."]
      }), _jsx(_Fragment, {
        children: _jsx(_components.pre, {
          className: "shiki shiki-themes github-light github-dark",
          style: {
            "--shiki-light": "#24292e",
            "--shiki-dark": "#e1e4e8",
            "--shiki-light-bg": "#fff",
            "--shiki-dark-bg": "#24292e"
          },
          tabIndex: "0",
          icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "ffmpeg"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " -i"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " agoraRecording.mp4.h264"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " -i"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " agoraRecording.mp4.aac"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " -c:v"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " copy"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " -c:a"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " copy"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " output.mp4"
              })]
            })
          })
        })
      }), _jsx(_components.p, {
        children: "This command creates a new playable MP4 file using the video and audio data from the retained files."
      }), _jsx(_components.h2, {
        id: "reference-1",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-references-1",
        children: "API references"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#getagoraparameter",
            children: _jsx(_components.code, {
              children: "getAgoraParameter"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#onrecorderstatechanged",
            children: _jsx(_components.code, {
              children: "onRecorderStateChanged"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "/en/api-reference/api-ref/on-premise-recording#stoprecording",
            children: _jsx(_components.code, {
              children: "stopRecording"
            })
          })
        }), `
`]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
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
