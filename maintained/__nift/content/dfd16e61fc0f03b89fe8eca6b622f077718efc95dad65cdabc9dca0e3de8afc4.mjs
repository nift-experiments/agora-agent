import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Which audio file formats does the Agora RTC SDK support?"
};
export let _markdown = "\n\nThe Agora RTC SDK provides a series of methods to manage audio files. The support of each method for single-track or multi-track audio files is as follows:\n\n* `startAudioMixing`: Supports single-track and multi-track audio files.\n* `getAudioTrackCount`: Supports single-track and multi-track audio files.\n* `selectAudioTrack`: Supports single-track and multi-track audio files.\n* `playEffect`: Only supports single-track audio files.\n* `preloadEffect`: Only supports single-track audio files.\n* `getEffectDuration`: Only supports single-track audio files.\n* `startRhythmPlayer`: Only supports single-track audio files.\n* `getAudioFileInfo`: Supports single-track and multi-track audio files.\n\nBy default, the SDK supports the audio file formats listed in [Basic audio file formats](#basic). The container format of an audio file (including the filename extensions) must be consistent with the audio codec format.\n\nAs of v3.6.2, the SDK provides a full-format audio decoding extension library, which can support more audio file formats. See [Extended audio file formats](#advanced). This extension library is currently only available when you call `startAudioMixing` to play audio files.\n\n## Basic audio file formats [#basic-audio-file-formats]\n\n### Supported formats for single-track audio files [#supported-formats-for-single-track-audio-files]\n\nThe Agora RTC SDK supports single-track audio files in the following formats:\n\n* On Android, the SDK supports local and online files in Ogg, 3GP, TS, MKV, MP4, WAV, M4A, MP3, AAC, and ADTS formats.\n* On iOS or macOS, the SDK supports local and online files in WAV, M4A, MP3, MP4, AAC, and ADTS formats. For online MP4 and M4A files, the MOOV atom must be before the MDAT atom.\n* On Windows, the SDK supports local and online files in MP4, TS, WMA, and AAC formats.\n\n### Supported formats for multi-track audio files [#supported-formats-for-multi-track-audio-files]\n\nThe Agora RTC SDK supports multi-track audio files in the following formats:\n\n* On Android, the SDK supports local and online files in M4A, MP4, and MKV formats. When playing a multi-track audio file in MP4 format, the SDK supports switching to the second audio track.\n\n<CalloutContainer type=\"warning\">\n  <CalloutTitle>\n    Note\n  </CalloutTitle>\n\n  <CalloutDescription>\n    If you are using Lite SDK, when playing multi-track files in the MP4 format, switching to the second track is **not supported**.\n  </CalloutDescription>\n</CalloutContainer>\n\n* On iOS or macOS, the SDK supports local and online files in M4A and MP4 formats. For online MP4 and M4A files, the MOOV atom must be before the MDAT atom.\n* On Windows, the SDK supports local and online files in M4A format.\n\n## Extended audio file formats [#extended-audio-file-formats]\n\nIf you use the SDK v3.6.2 or later and have integrated the full-format audio decoding extension library, the `startAudioMixing` method supports playing the following types of audio files:\n\n| Platform                         | File source      | Audio track                  | File container                                                            | Audio codec                                        |\n| -------------------------------- | ---------------- | ---------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------- |\n| Android, iOS, macOS, and Windows | Local and online | Single-track and multi-track | 3GP, AAC, AMR, ASF, AVI, FLAC, M4A, M4V, MOV, MP3, MP4, TS, Ogg, WAV, WMA | AAC, AMR, FLAC, MP2, MP3, PCM, Vorbis, WMAV2, OPUS |\n\nFor the extension library name for each platform, see [Reduce App Size](/en/api-reference/faq/integration/reduce_app_size_rtc).\n\n## Considerations [#considerations]\n\n* For iOS, Lite SDK does not support playing audio files without suffixes.\n* For Android, Lite SDK does not support playing audio files that the Android system's native media capabilities do not support. Some Android devices do not support the WMA format, so playing WMA files on those devices using the Agora APIs can fail.\n* Due to system compatibility issues, some Android devices, such as Xiaomi, may have problems when using `playEffect` or `preloadEffect` to read 3GP format files.\n";
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Agora RTC SDK provides a series of methods to manage audio files. The support of each method for single-track or multi-track audio files is as follows:"
  }, {
    heading: undefined,
    content: "`startAudioMixing`: Supports single-track and multi-track audio files."
  }, {
    heading: undefined,
    content: "`getAudioTrackCount`: Supports single-track and multi-track audio files."
  }, {
    heading: undefined,
    content: "`selectAudioTrack`: Supports single-track and multi-track audio files."
  }, {
    heading: undefined,
    content: "`playEffect`: Only supports single-track audio files."
  }, {
    heading: undefined,
    content: "`preloadEffect`: Only supports single-track audio files."
  }, {
    heading: undefined,
    content: "`getEffectDuration`: Only supports single-track audio files."
  }, {
    heading: undefined,
    content: "`startRhythmPlayer`: Only supports single-track audio files."
  }, {
    heading: undefined,
    content: "`getAudioFileInfo`: Supports single-track and multi-track audio files."
  }, {
    heading: undefined,
    content: "By default, the SDK supports the audio file formats listed in Basic audio file formats. The container format of an audio file (including the filename extensions) must be consistent with the audio codec format."
  }, {
    heading: undefined,
    content: "As of v3.6.2, the SDK provides a full-format audio decoding extension library, which can support more audio file formats. See Extended audio file formats. This extension library is currently only available when you call `startAudioMixing` to play audio files."
  }, {
    heading: "supported-formats-for-single-track-audio-files",
    content: "The Agora RTC SDK supports single-track audio files in the following formats:"
  }, {
    heading: "supported-formats-for-single-track-audio-files",
    content: "On Android, the SDK supports local and online files in Ogg, 3GP, TS, MKV, MP4, WAV, M4A, MP3, AAC, and ADTS formats."
  }, {
    heading: "supported-formats-for-single-track-audio-files",
    content: "On iOS or macOS, the SDK supports local and online files in WAV, M4A, MP3, MP4, AAC, and ADTS formats. For online MP4 and M4A files, the MOOV atom must be before the MDAT atom."
  }, {
    heading: "supported-formats-for-single-track-audio-files",
    content: "On Windows, the SDK supports local and online files in MP4, TS, WMA, and AAC formats."
  }, {
    heading: "supported-formats-for-multi-track-audio-files",
    content: "The Agora RTC SDK supports multi-track audio files in the following formats:"
  }, {
    heading: "supported-formats-for-multi-track-audio-files",
    content: "On Android, the SDK supports local and online files in M4A, MP4, and MKV formats. When playing a multi-track audio file in MP4 format, the SDK supports switching to the second audio track."
  }, {
    heading: "supported-formats-for-multi-track-audio-files",
    content: "If you are using Lite SDK, when playing multi-track files in the MP4 format, switching to the second track is **not supported**."
  }, {
    heading: "supported-formats-for-multi-track-audio-files",
    content: "On iOS or macOS, the SDK supports local and online files in M4A and MP4 formats. For online MP4 and M4A files, the MOOV atom must be before the MDAT atom."
  }, {
    heading: "supported-formats-for-multi-track-audio-files",
    content: "On Windows, the SDK supports local and online files in M4A format."
  }, {
    heading: "extended-audio-file-formats",
    content: "If you use the SDK v3.6.2 or later and have integrated the full-format audio decoding extension library, the `startAudioMixing` method supports playing the following types of audio files:"
  }, {
    heading: "extended-audio-file-formats",
    content: "Platform"
  }, {
    heading: "extended-audio-file-formats",
    content: "File source"
  }, {
    heading: "extended-audio-file-formats",
    content: "Audio track"
  }, {
    heading: "extended-audio-file-formats",
    content: "File container"
  }, {
    heading: "extended-audio-file-formats",
    content: "Audio codec"
  }, {
    heading: "extended-audio-file-formats",
    content: "Android, iOS, macOS, and Windows"
  }, {
    heading: "extended-audio-file-formats",
    content: "Local and online"
  }, {
    heading: "extended-audio-file-formats",
    content: "Single-track and multi-track"
  }, {
    heading: "extended-audio-file-formats",
    content: "3GP, AAC, AMR, ASF, AVI, FLAC, M4A, M4V, MOV, MP3, MP4, TS, Ogg, WAV, WMA"
  }, {
    heading: "extended-audio-file-formats",
    content: "AAC, AMR, FLAC, MP2, MP3, PCM, Vorbis, WMAV2, OPUS"
  }, {
    heading: "extended-audio-file-formats",
    content: "For the extension library name for each platform, see Reduce App Size."
  }, {
    heading: "considerations",
    content: "For iOS, Lite SDK does not support playing audio files without suffixes."
  }, {
    heading: "considerations",
    content: "For Android, Lite SDK does not support playing audio files that the Android system's native media capabilities do not support. Some Android devices do not support the WMA format, so playing WMA files on those devices using the Agora APIs can fail."
  }, {
    heading: "considerations",
    content: "Due to system compatibility issues, some Android devices, such as Xiaomi, may have problems when using `playEffect` or `preloadEffect` to read 3GP format files."
  }],
  headings: [{
    id: "basic-audio-file-formats",
    content: "Basic audio file formats"
  }, {
    id: "supported-formats-for-single-track-audio-files",
    content: "Supported formats for single-track audio files"
  }, {
    id: "supported-formats-for-multi-track-audio-files",
    content: "Supported formats for multi-track audio files"
  }, {
    id: "extended-audio-file-formats",
    content: "Extended audio file formats"
  }, {
    id: "considerations",
    content: "Considerations"
  }]
};
export let toc = [{
  depth: 2,
  url: "#basic-audio-file-formats",
  title: _jsx(_Fragment, {
    children: "Basic audio file formats"
  })
}, {
  depth: 3,
  url: "#supported-formats-for-single-track-audio-files",
  title: _jsx(_Fragment, {
    children: "Supported formats for single-track audio files"
  })
}, {
  depth: 3,
  url: "#supported-formats-for-multi-track-audio-files",
  title: _jsx(_Fragment, {
    children: "Supported formats for multi-track audio files"
  })
}, {
  depth: 2,
  url: "#extended-audio-file-formats",
  title: _jsx(_Fragment, {
    children: "Extended audio file formats"
  })
}, {
  depth: 2,
  url: "#considerations",
  title: _jsx(_Fragment, {
    children: "Considerations"
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
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The Agora RTC SDK provides a series of methods to manage audio files. The support of each method for single-track or multi-track audio files is as follows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "startAudioMixing"
        }), ": Supports single-track and multi-track audio files."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "getAudioTrackCount"
        }), ": Supports single-track and multi-track audio files."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "selectAudioTrack"
        }), ": Supports single-track and multi-track audio files."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "playEffect"
        }), ": Only supports single-track audio files."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "preloadEffect"
        }), ": Only supports single-track audio files."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "getEffectDuration"
        }), ": Only supports single-track audio files."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "startRhythmPlayer"
        }), ": Only supports single-track audio files."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "getAudioFileInfo"
        }), ": Supports single-track and multi-track audio files."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["By default, the SDK supports the audio file formats listed in ", _jsx(_components.a, {
        href: "#basic",
        children: "Basic audio file formats"
      }), ". The container format of an audio file (including the filename extensions) must be consistent with the audio codec format."]
    }), `
`, _jsxs(_components.p, {
      children: ["As of v3.6.2, the SDK provides a full-format audio decoding extension library, which can support more audio file formats. See ", _jsx(_components.a, {
        href: "#advanced",
        children: "Extended audio file formats"
      }), ". This extension library is currently only available when you call ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " to play audio files."]
    }), `
`, _jsx(_components.h2, {
      id: "basic-audio-file-formats",
      children: "Basic audio file formats"
    }), `
`, _jsx(_components.h3, {
      id: "supported-formats-for-single-track-audio-files",
      children: "Supported formats for single-track audio files"
    }), `
`, _jsx(_components.p, {
      children: "The Agora RTC SDK supports single-track audio files in the following formats:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "On Android, the SDK supports local and online files in Ogg, 3GP, TS, MKV, MP4, WAV, M4A, MP3, AAC, and ADTS formats."
      }), `
`, _jsx(_components.li, {
        children: "On iOS or macOS, the SDK supports local and online files in WAV, M4A, MP3, MP4, AAC, and ADTS formats. For online MP4 and M4A files, the MOOV atom must be before the MDAT atom."
      }), `
`, _jsx(_components.li, {
        children: "On Windows, the SDK supports local and online files in MP4, TS, WMA, and AAC formats."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "supported-formats-for-multi-track-audio-files",
      children: "Supported formats for multi-track audio files"
    }), `
`, _jsx(_components.p, {
      children: "The Agora RTC SDK supports multi-track audio files in the following formats:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "On Android, the SDK supports local and online files in M4A, MP4, and MKV formats. When playing a multi-track audio file in MP4 format, the SDK supports switching to the second audio track."
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "warning",
      children: [_jsx(CalloutTitle, {
        children: "Note"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If you are using Lite SDK, when playing multi-track files in the MP4 format, switching to the second track is ", _jsx(_components.strong, {
            children: "not supported"
          }), "."]
        })
      })]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "On iOS or macOS, the SDK supports local and online files in M4A and MP4 formats. For online MP4 and M4A files, the MOOV atom must be before the MDAT atom."
      }), `
`, _jsx(_components.li, {
        children: "On Windows, the SDK supports local and online files in M4A format."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "extended-audio-file-formats",
      children: "Extended audio file formats"
    }), `
`, _jsxs(_components.p, {
      children: ["If you use the SDK v3.6.2 or later and have integrated the full-format audio decoding extension library, the ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " method supports playing the following types of audio files:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Platform"
          }), _jsx(_components.th, {
            children: "File source"
          }), _jsx(_components.th, {
            children: "Audio track"
          }), _jsx(_components.th, {
            children: "File container"
          }), _jsx(_components.th, {
            children: "Audio codec"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Android, iOS, macOS, and Windows"
          }), _jsx(_components.td, {
            children: "Local and online"
          }), _jsx(_components.td, {
            children: "Single-track and multi-track"
          }), _jsx(_components.td, {
            children: "3GP, AAC, AMR, ASF, AVI, FLAC, M4A, M4V, MOV, MP3, MP4, TS, Ogg, WAV, WMA"
          }), _jsx(_components.td, {
            children: "AAC, AMR, FLAC, MP2, MP3, PCM, Vorbis, WMAV2, OPUS"
          })]
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["For the extension library name for each platform, see ", _jsx(_components.a, {
        href: "/en/api-reference/faq/integration/reduce_app_size_rtc",
        children: "Reduce App Size"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "considerations",
      children: "Considerations"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "For iOS, Lite SDK does not support playing audio files without suffixes."
      }), `
`, _jsx(_components.li, {
        children: "For Android, Lite SDK does not support playing audio files that the Android system's native media capabilities do not support. Some Android devices do not support the WMA format, so playing WMA files on those devices using the Agora APIs can fail."
      }), `
`, _jsxs(_components.li, {
        children: ["Due to system compatibility issues, some Android devices, such as Xiaomi, may have problems when using ", _jsx(_components.code, {
          children: "playEffect"
        }), " or ", _jsx(_components.code, {
          children: "preloadEffect"
        }), " to read 3GP format files."]
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
