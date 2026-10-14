import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I solve issues relating to recording status?"
};
export let _markdown = `

### Recording quit error [#recording-quit-error]

If Error: 3, with stat\\_code:16 is reported, the recording quits normally. You can determine why the recording quit by the leave\\_path code.

![](https://web-cdn.agora.io/docs-files/1542879822196)

* LEAVE\\_CODE\\_INIT(0)：Initialization failure.
* LEAVE\\_CODE\\_SIG(0b10)：Signal triggered an exit.
* LEAVE\\_CODE\\_NO\\_USERS(0b100)：The recording times out and exits.
* LEAVE\\_CODE\\_TIMER\\_CATCH(0b1000)：Ignore it.
* LEAVE\\_CODE\\_CLIENT\\_LEAVE(0b10000)：The client leaves the channel.

You can perform a bitwise AND operation on the code and each enum value, and those with non-zero results are the reason for the exit. For example, if you perform a bit-by-bit AND operation on code 6 (0b110) and each enum value, only \`LEAVE_CODE_SIG\` (0b10) and \`LEAVE_CODE_NO_USERS\` (0b100) get a non-zero result. The reasons for exiting, in this case, include a timeout and a signal triggering the exit.

Typically, a recording session exits because a timeout occurs. Search for "No users in channel" in \`recording_sys.log\` to confirm.

### How do I know whether the recording crashes? [#how-do-i-know-whether-the-recording-crashes]

The recording crashes if the following scenarios occur:

* Video files cannot play.
* The \`uid_xxx.txt\` file has no close information about the MPEG-4 file.
* The recording\\_sys.log file contains the **MediaFile*&#x2A; keyword but not the **\\~MediaFile** keyword.
* The recorded event information in Argus has no quit flag.

### What should I do when the recording crashes? [#what-should-i-do-when-the-recording-crashes]

Users of the Recording SDK v2.2.3 or later can check the crash.log file generated in the same directory as AgoraCoreService.

Users of the Recording SDK versions earlier than v2.2.3 can check if there is a core file generated in the same directory as AgoraCoreService.

1. If you get the core file:
   a. Put the bin/AgoraCoreService and core file together, then execute the command line: gdb -c core\\_xxxx AgoraCoreService.
   b. Provide the core file, the result from step a, and the recording\\_sys.log file to Agora technical support.
2. If you cannot find the core file:
   a. If no directory is set for the core file, then the core file is usually found in the directory where the recorded AgoraCoreService file is located.
   b. If not, execute ulimit -c on Linux. If the output is 0, coredump is not open. Open coredump by executing: ulimit -c unlimited.
   c. After opening coredump, users can generate the core file after a crash.
   d. Provide the recording\\_sys.log file and the core file to Agora technical support.

### The recorded video files of the native client are in webm format when the Native SDK interoperates with the Web SDK. [#the-recorded-video-files-of-the-native-client-are-in-webm-format-when-the-native-sdk-interoperates-with-the-web-sdk]

To fix this issue, set the \`codec\` property as "h264" when calling the \`createClient\` method on the web client. If the \`codec\` property is "vp8", the recorded video files of the native client are in webm format.
`;
export let structuredData = {
  contents: [{
    heading: "recording-quit-error",
    content: "If Error: 3, with stat\\_code:16 is reported, the recording quits normally. You can determine why the recording quit by the leave\\_path code."
  }, {
    heading: "recording-quit-error",
    content: "LEAVE\\_CODE\\_INIT(0)：Initialization failure."
  }, {
    heading: "recording-quit-error",
    content: "LEAVE\\_CODE\\_SIG(0b10)：Signal triggered an exit."
  }, {
    heading: "recording-quit-error",
    content: "LEAVE\\_CODE\\_NO\\_USERS(0b100)：The recording times out and exits."
  }, {
    heading: "recording-quit-error",
    content: "LEAVE\\_CODE\\_TIMER\\_CATCH(0b1000)：Ignore it."
  }, {
    heading: "recording-quit-error",
    content: "LEAVE\\_CODE\\_CLIENT\\_LEAVE(0b10000)：The client leaves the channel."
  }, {
    heading: "recording-quit-error",
    content: "You can perform a bitwise AND operation on the code and each enum value, and those with non-zero results are the reason for the exit. For example, if you perform a bit-by-bit AND operation on code 6 (0b110) and each enum value, only `LEAVE_CODE_SIG` (0b10) and `LEAVE_CODE_NO_USERS` (0b100) get a non-zero result. The reasons for exiting, in this case, include a timeout and a signal triggering the exit."
  }, {
    heading: "recording-quit-error",
    content: 'Typically, a recording session exits because a timeout occurs. Search for "No users in channel" in `recording_sys.log` to confirm.'
  }, {
    heading: "how-do-i-know-whether-the-recording-crashes",
    content: "The recording crashes if the following scenarios occur:"
  }, {
    heading: "how-do-i-know-whether-the-recording-crashes",
    content: "Video files cannot play."
  }, {
    heading: "how-do-i-know-whether-the-recording-crashes",
    content: "The `uid_xxx.txt` file has no close information about the MPEG-4 file."
  }, {
    heading: "how-do-i-know-whether-the-recording-crashes",
    content: "The recording\\_sys.log file contains the **MediaFile*&#x2A; keyword but not the **\\~MediaFile** keyword."
  }, {
    heading: "how-do-i-know-whether-the-recording-crashes",
    content: "The recorded event information in Argus has no quit flag."
  }, {
    heading: "what-should-i-do-when-the-recording-crashes",
    content: "Users of the Recording SDK v2.2.3 or later can check the crash.log file generated in the same directory as AgoraCoreService."
  }, {
    heading: "what-should-i-do-when-the-recording-crashes",
    content: "Users of the Recording SDK versions earlier than v2.2.3 can check if there is a core file generated in the same directory as AgoraCoreService."
  }, {
    heading: "what-should-i-do-when-the-recording-crashes",
    content: `If you get the core file:
a. Put the bin/AgoraCoreService and core file together, then execute the command line: gdb -c core\\_xxxx AgoraCoreService.
b. Provide the core file, the result from step a, and the recording\\_sys.log file to Agora technical support.`
  }, {
    heading: "what-should-i-do-when-the-recording-crashes",
    content: `If you cannot find the core file:
a. If no directory is set for the core file, then the core file is usually found in the directory where the recorded AgoraCoreService file is located.
b. If not, execute ulimit -c on Linux. If the output is 0, coredump is not open. Open coredump by executing: ulimit -c unlimited.
c. After opening coredump, users can generate the core file after a crash.
d. Provide the recording\\_sys.log file and the core file to Agora technical support.`
  }, {
    heading: "the-recorded-video-files-of-the-native-client-are-in-webm-format-when-the-native-sdk-interoperates-with-the-web-sdk",
    content: 'To fix this issue, set the `codec` property as "h264" when calling the `createClient` method on the web client. If the `codec` property is "vp8", the recorded video files of the native client are in webm format.'
  }],
  headings: [{
    id: "recording-quit-error",
    content: "Recording quit error"
  }, {
    id: "how-do-i-know-whether-the-recording-crashes",
    content: "How do I know whether the recording crashes?"
  }, {
    id: "what-should-i-do-when-the-recording-crashes",
    content: "What should I do when the recording crashes?"
  }, {
    id: "the-recorded-video-files-of-the-native-client-are-in-webm-format-when-the-native-sdk-interoperates-with-the-web-sdk",
    content: "The recorded video files of the native client are in webm format when the Native SDK interoperates with the Web SDK."
  }]
};
export let toc = [{
  depth: 3,
  url: "#recording-quit-error",
  title: _jsx(_Fragment, {
    children: "Recording quit error"
  })
}, {
  depth: 3,
  url: "#how-do-i-know-whether-the-recording-crashes",
  title: _jsx(_Fragment, {
    children: "How do I know whether the recording crashes?"
  })
}, {
  depth: 3,
  url: "#what-should-i-do-when-the-recording-crashes",
  title: _jsx(_Fragment, {
    children: "What should I do when the recording crashes?"
  })
}, {
  depth: 3,
  url: "#the-recorded-video-files-of-the-native-client-are-in-webm-format-when-the-native-sdk-interoperates-with-the-web-sdk",
  title: _jsx(_Fragment, {
    children: "The recorded video files of the native client are in webm format when the Native SDK interoperates with the Web SDK."
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    div: "div",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h3, {
      id: "recording-quit-error",
      children: "Recording quit error"
    }), `
`, _jsxs(_components.p, {
      children: ["If Error: 3, with stat_code", _jsx(_components.div, {}), " is reported, the recording quits normally. You can determine why the recording quit by the leave_path code."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1542879822196",
        alt: ""
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "LEAVE_CODE_INIT(0)：Initialization failure."
      }), `
`, _jsx(_components.li, {
        children: "LEAVE_CODE_SIG(0b10)：Signal triggered an exit."
      }), `
`, _jsx(_components.li, {
        children: "LEAVE_CODE_NO_USERS(0b100)：The recording times out and exits."
      }), `
`, _jsx(_components.li, {
        children: "LEAVE_CODE_TIMER_CATCH(0b1000)：Ignore it."
      }), `
`, _jsx(_components.li, {
        children: "LEAVE_CODE_CLIENT_LEAVE(0b10000)：The client leaves the channel."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["You can perform a bitwise AND operation on the code and each enum value, and those with non-zero results are the reason for the exit. For example, if you perform a bit-by-bit AND operation on code 6 (0b110) and each enum value, only ", _jsx(_components.code, {
        children: "LEAVE_CODE_SIG"
      }), " (0b10) and ", _jsx(_components.code, {
        children: "LEAVE_CODE_NO_USERS"
      }), " (0b100) get a non-zero result. The reasons for exiting, in this case, include a timeout and a signal triggering the exit."]
    }), `
`, _jsxs(_components.p, {
      children: ['Typically, a recording session exits because a timeout occurs. Search for "No users in channel" in ', _jsx(_components.code, {
        children: "recording_sys.log"
      }), " to confirm."]
    }), `
`, _jsx(_components.h3, {
      id: "how-do-i-know-whether-the-recording-crashes",
      children: "How do I know whether the recording crashes?"
    }), `
`, _jsx(_components.p, {
      children: "The recording crashes if the following scenarios occur:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Video files cannot play."
      }), `
`, _jsxs(_components.li, {
        children: ["The ", _jsx(_components.code, {
          children: "uid_xxx.txt"
        }), " file has no close information about the MPEG-4 file."]
      }), `
`, _jsxs(_components.li, {
        children: ["The recording_sys.log file contains the ", _jsx(_components.strong, {
          children: "MediaFile"
        }), " keyword but not the ", _jsx(_components.strong, {
          children: "~MediaFile"
        }), " keyword."]
      }), `
`, _jsx(_components.li, {
        children: "The recorded event information in Argus has no quit flag."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "what-should-i-do-when-the-recording-crashes",
      children: "What should I do when the recording crashes?"
    }), `
`, _jsx(_components.p, {
      children: "Users of the Recording SDK v2.2.3 or later can check the crash.log file generated in the same directory as AgoraCoreService."
    }), `
`, _jsx(_components.p, {
      children: "Users of the Recording SDK versions earlier than v2.2.3 can check if there is a core file generated in the same directory as AgoraCoreService."
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: `If you get the core file:
a. Put the bin/AgoraCoreService and core file together, then execute the command line: gdb -c core_xxxx AgoraCoreService.
b. Provide the core file, the result from step a, and the recording_sys.log file to Agora technical support.`
      }), `
`, _jsx(_components.li, {
        children: `If you cannot find the core file:
a. If no directory is set for the core file, then the core file is usually found in the directory where the recorded AgoraCoreService file is located.
b. If not, execute ulimit -c on Linux. If the output is 0, coredump is not open. Open coredump by executing: ulimit -c unlimited.
c. After opening coredump, users can generate the core file after a crash.
d. Provide the recording_sys.log file and the core file to Agora technical support.`
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "the-recorded-video-files-of-the-native-client-are-in-webm-format-when-the-native-sdk-interoperates-with-the-web-sdk",
      children: "The recorded video files of the native client are in webm format when the Native SDK interoperates with the Web SDK."
    }), `
`, _jsxs(_components.p, {
      children: ["To fix this issue, set the ", _jsx(_components.code, {
        children: "codec"
      }), ' property as "h264" when calling the ', _jsx(_components.code, {
        children: "createClient"
      }), " method on the web client. If the ", _jsx(_components.code, {
        children: "codec"
      }), ' property is "vp8", the recorded video files of the native client are in webm format.']
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
