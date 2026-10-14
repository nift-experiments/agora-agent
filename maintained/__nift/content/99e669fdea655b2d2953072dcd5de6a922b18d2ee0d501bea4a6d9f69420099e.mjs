import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Convert between file formats",
  description: "Use FFmpeg to convert an M3U8 file to MP4 or use Agora's Format Converter script to batch convert multiple TS files into MP4 or audio formats."
};
export let _markdown = `

Composite recording mode generates one M3U8 file and multiple TS files which include the audio and video of all or specified user IDs in a channel. You can use FFmpeg to convert an M3U8 file to MP4 or use Agora's Format Converter script to batch convert multiple TS files into MP4 or audio formats.

## Convert using FFmpeg [#convert-using-ffmpeg]

<CalloutContainer type="info">
  <CalloutDescription>
    Since April 29, 2021, you can get MP4 files from a composite recording by setting the \`avFileType\` parameter. You no longer need to use the Format Converter script.
  </CalloutDescription>
</CalloutContainer>

You can use FFmpeg to convert an M3U8 file to MP4. Install [FFmpeg](https://ffmpeg.org/download.html) and run the following command:

\`\`\`bash
ffmpeg -i input.m3u8 -vcodec copy -acodec copy -absf aac_adtstoasc output.mp4
\`\`\`

Where \`input.m3u8\` is the name of the M3U8 file to convert, and \`output.mp4\` is the name of the MP4 file to output. For more information about the parameters used in this example, see the [FFmpeg Documentation](https://www.ffmpeg.org/ffmpeg.html).

## Convert using the script [#convert-using-the-script]

You can use Agora's Format Converter script to batch convert TS files to MP4 or audio formats, including MP3, WAV, and AAC.

### Prerequisites [#prerequisites]

Recommended systems for transcoding:

* Ubuntu 14.04 and later x64
* CentOS 6.5 and later (7.0 recommended) x64

To run the script, you need to install [FFmpeg](https://ffmpeg.org/download.html) 3.3 or later and Python 2, version 2.7 or later.

#### File preparation [#file-preparation]

Ensure that the recorded files are stored in an accessible directory.

### Convert steps [#convert-steps]

#### 1. Get the Format Converter Script [#1-get-the-format-converter-script]

Download the [Agora Format Converter Script](https://download.agora.io/acrsdk/release/cloud_recording_tools.v3.8.0.69-202302061216-release-prod.tar.gz) and decompress it.

#### 2. Execute the Format Converter script [#2-execute-the-format-converter-script]

Use the following command:

\`\`\`bash
python format_convert.py <directory> <source_format> <destination_format>
\`\`\`

Where:

* \`directory\`: Directory of the source files.

* \`source_format\`: Format of the source files. \`source_format\` must be in lowercase:

  * Audio: \`mp3\`, \`wav\`, or \`aac\`.
  * Video: \`mp4\` or \`ts\`.

* \`destination_format\`: Format to which you want to convert the source files. \`destination_format\` must be in lowercase:

  * Audio: \`mp3\`, \`wav\`, or \`aac\`.
  * Video: \`mp4\` or \`ts\`.

When you run the command, the script will search for all files in the specified format in the directory and convert them to the target format. The converted files have the same name as the source files, except for the suffix.

### Example [#example]

To convert all the MP4 files under \`/home/testname/testfolder\` to TS format, use the following command:

\`\`\`bash
python format_convert.py /home/testname/testfolder/ mp4 ts
\`\`\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Composite recording mode generates one M3U8 file and multiple TS files which include the audio and video of all or specified user IDs in a channel. You can use FFmpeg to convert an M3U8 file to MP4 or use Agora's Format Converter script to batch convert multiple TS files into MP4 or audio formats."
  }, {
    heading: "convert-using-ffmpeg",
    content: "Since April 29, 2021, you can get MP4 files from a composite recording by setting the `avFileType` parameter. You no longer need to use the Format Converter script."
  }, {
    heading: "convert-using-ffmpeg",
    content: "You can use FFmpeg to convert an M3U8 file to MP4. Install FFmpeg and run the following command:"
  }, {
    heading: "convert-using-ffmpeg",
    content: "Where `input.m3u8` is the name of the M3U8 file to convert, and `output.mp4` is the name of the MP4 file to output. For more information about the parameters used in this example, see the FFmpeg Documentation."
  }, {
    heading: "convert-using-the-script",
    content: "You can use Agora's Format Converter script to batch convert TS files to MP4 or audio formats, including MP3, WAV, and AAC."
  }, {
    heading: "prerequisites",
    content: "Recommended systems for transcoding:"
  }, {
    heading: "prerequisites",
    content: "Ubuntu 14.04 and later x64"
  }, {
    heading: "prerequisites",
    content: "CentOS 6.5 and later (7.0 recommended) x64"
  }, {
    heading: "prerequisites",
    content: "To run the script, you need to install FFmpeg 3.3 or later and Python 2, version 2.7 or later."
  }, {
    heading: "file-preparation",
    content: "Ensure that the recorded files are stored in an accessible directory."
  }, {
    heading: "1-get-the-format-converter-script",
    content: "Download the Agora Format Converter Script and decompress it."
  }, {
    heading: "2-execute-the-format-converter-script",
    content: "Use the following command:"
  }, {
    heading: "2-execute-the-format-converter-script",
    content: "Where:"
  }, {
    heading: "2-execute-the-format-converter-script",
    content: "`directory`: Directory of the source files."
  }, {
    heading: "2-execute-the-format-converter-script",
    content: "`source_format`: Format of the source files. `source_format` must be in lowercase:"
  }, {
    heading: "2-execute-the-format-converter-script",
    content: "Audio: `mp3`, `wav`, or `aac`."
  }, {
    heading: "2-execute-the-format-converter-script",
    content: "Video: `mp4` or `ts`."
  }, {
    heading: "2-execute-the-format-converter-script",
    content: "`destination_format`: Format to which you want to convert the source files. `destination_format` must be in lowercase:"
  }, {
    heading: "2-execute-the-format-converter-script",
    content: "Audio: `mp3`, `wav`, or `aac`."
  }, {
    heading: "2-execute-the-format-converter-script",
    content: "Video: `mp4` or `ts`."
  }, {
    heading: "2-execute-the-format-converter-script",
    content: "When you run the command, the script will search for all files in the specified format in the directory and convert them to the target format. The converted files have the same name as the source files, except for the suffix."
  }, {
    heading: "example",
    content: "To convert all the MP4 files under `/home/testname/testfolder` to TS format, use the following command:"
  }],
  headings: [{
    id: "convert-using-ffmpeg",
    content: "Convert using FFmpeg"
  }, {
    id: "convert-using-the-script",
    content: "Convert using the script"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "file-preparation",
    content: "File preparation"
  }, {
    id: "convert-steps",
    content: "Convert steps"
  }, {
    id: "1-get-the-format-converter-script",
    content: "1\\. Get the Format Converter Script"
  }, {
    id: "2-execute-the-format-converter-script",
    content: "2\\. Execute the Format Converter script"
  }, {
    id: "example",
    content: "Example"
  }]
};
export let toc = [{
  depth: 2,
  url: "#convert-using-ffmpeg",
  title: _jsx(_Fragment, {
    children: "Convert using FFmpeg"
  })
}, {
  depth: 2,
  url: "#convert-using-the-script",
  title: _jsx(_Fragment, {
    children: "Convert using the script"
  })
}, {
  depth: 3,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 4,
  url: "#file-preparation",
  title: _jsx(_Fragment, {
    children: "File preparation"
  })
}, {
  depth: 3,
  url: "#convert-steps",
  title: _jsx(_Fragment, {
    children: "Convert steps"
  })
}, {
  depth: 4,
  url: "#1-get-the-format-converter-script",
  title: _jsx(_Fragment, {
    children: "1. Get the Format Converter Script"
  })
}, {
  depth: 4,
  url: "#2-execute-the-format-converter-script",
  title: _jsx(_Fragment, {
    children: "2. Execute the Format Converter script"
  })
}, {
  depth: 3,
  url: "#example",
  title: _jsx(_Fragment, {
    children: "Example"
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
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Composite recording mode generates one M3U8 file and multiple TS files which include the audio and video of all or specified user IDs in a channel. You can use FFmpeg to convert an M3U8 file to MP4 or use Agora's Format Converter script to batch convert multiple TS files into MP4 or audio formats."
    }), `
`, _jsx(_components.h2, {
      id: "convert-using-ffmpeg",
      children: "Convert using FFmpeg"
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Since April 29, 2021, you can get MP4 files from a composite recording by setting the ", _jsx(_components.code, {
            children: "avFileType"
          }), " parameter. You no longer need to use the Format Converter script."]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["You can use FFmpeg to convert an M3U8 file to MP4. Install ", _jsx(_components.a, {
        href: "https://ffmpeg.org/download.html",
        children: "FFmpeg"
      }), " and run the following command:"]
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
              children: " input.m3u8"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -vcodec"
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
              children: " -acodec"
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
              children: " -absf"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " aac_adtstoasc"
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
    }), `
`, _jsxs(_components.p, {
      children: ["Where ", _jsx(_components.code, {
        children: "input.m3u8"
      }), " is the name of the M3U8 file to convert, and ", _jsx(_components.code, {
        children: "output.mp4"
      }), " is the name of the MP4 file to output. For more information about the parameters used in this example, see the ", _jsx(_components.a, {
        href: "https://www.ffmpeg.org/ffmpeg.html",
        children: "FFmpeg Documentation"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "convert-using-the-script",
      children: "Convert using the script"
    }), `
`, _jsx(_components.p, {
      children: "You can use Agora's Format Converter script to batch convert TS files to MP4 or audio formats, including MP3, WAV, and AAC."
    }), `
`, _jsx(_components.h3, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "Recommended systems for transcoding:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Ubuntu 14.04 and later x64"
      }), `
`, _jsx(_components.li, {
        children: "CentOS 6.5 and later (7.0 recommended) x64"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["To run the script, you need to install ", _jsx(_components.a, {
        href: "https://ffmpeg.org/download.html",
        children: "FFmpeg"
      }), " 3.3 or later and Python 2, version 2.7 or later."]
    }), `
`, _jsx(_components.h4, {
      id: "file-preparation",
      children: "File preparation"
    }), `
`, _jsx(_components.p, {
      children: "Ensure that the recorded files are stored in an accessible directory."
    }), `
`, _jsx(_components.h3, {
      id: "convert-steps",
      children: "Convert steps"
    }), `
`, _jsx(_components.h4, {
      id: "1-get-the-format-converter-script",
      children: "1. Get the Format Converter Script"
    }), `
`, _jsxs(_components.p, {
      children: ["Download the ", _jsx(_components.a, {
        href: "https://download.agora.io/acrsdk/release/cloud_recording_tools.v3.8.0.69-202302061216-release-prod.tar.gz",
        children: "Agora Format Converter Script"
      }), " and decompress it."]
    }), `
`, _jsx(_components.h4, {
      id: "2-execute-the-format-converter-script",
      children: "2. Execute the Format Converter script"
    }), `
`, _jsx(_components.p, {
      children: "Use the following command:"
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "python"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " format_convert.py"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "director"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "y"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "source_forma"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "destination_forma"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "Where:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "directory"
          }), ": Directory of the source files."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "source_format"
          }), ": Format of the source files. ", _jsx(_components.code, {
            children: "source_format"
          }), " must be in lowercase:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Audio: ", _jsx(_components.code, {
              children: "mp3"
            }), ", ", _jsx(_components.code, {
              children: "wav"
            }), ", or ", _jsx(_components.code, {
              children: "aac"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["Video: ", _jsx(_components.code, {
              children: "mp4"
            }), " or ", _jsx(_components.code, {
              children: "ts"
            }), "."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "destination_format"
          }), ": Format to which you want to convert the source files. ", _jsx(_components.code, {
            children: "destination_format"
          }), " must be in lowercase:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Audio: ", _jsx(_components.code, {
              children: "mp3"
            }), ", ", _jsx(_components.code, {
              children: "wav"
            }), ", or ", _jsx(_components.code, {
              children: "aac"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["Video: ", _jsx(_components.code, {
              children: "mp4"
            }), " or ", _jsx(_components.code, {
              children: "ts"
            }), "."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "When you run the command, the script will search for all files in the specified format in the directory and convert them to the target format. The converted files have the same name as the source files, except for the suffix."
    }), `
`, _jsx(_components.h3, {
      id: "example",
      children: "Example"
    }), `
`, _jsxs(_components.p, {
      children: ["To convert all the MP4 files under ", _jsx(_components.code, {
        children: "/home/testname/testfolder"
      }), " to TS format, use the following command:"]
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "python"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " format_convert.py"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " /home/testname/testfolder/"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " mp4"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ts"
            })]
          })
        })
      })
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
