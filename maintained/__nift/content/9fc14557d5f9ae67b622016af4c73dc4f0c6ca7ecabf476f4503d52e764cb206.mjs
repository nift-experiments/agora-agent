import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I solve Recording integration issues?"
};
export let _markdown = "\n\n### When I integrate the Java SDK, the error java.land.UnsatisfiedLinkError: no recording in java.library.path occurs. How do I fix it? [#when-i-integrate-the-java-sdk-the-error-javalandunsatisfiedlinkerror-no-recording-in-javalibrarypath-occurs-how-do-i-fix-it]\n\nReason: The system environment cannot find the `librecording.so ` file.\nSolution: Check if the java demo is compiled and the library file is generated, and then, check and configure the path of the library file.\nFor example, on Linux, if the path of the library file is `/home/user/Desktop/tool/Agora_Recording/samples/java/bin/io/agora/recording/librecording.so`, configure `LD_LIBRARY_PATH` in `/etc/profile`, `~/.bash_profile` or `~/.bashrc` as follows:\n\n```bash\nLD_LIBRARY_PATH=/home/user/Desktop/tool/Agora_Recording/samples/java/bin/io/agora/recording/librecording.so\n```\n\n### How can I tell whether or not the recording application left the channel? [#how-can-i-tell-whether-or-not-the-recording-application-left-the-channel]\n\nThe recording application left the channel if the SDK triggers the `onLeaveChannel` callback and returns the error code ERR\\_OK = 1.\n\nThe recording application failed to leave the channel If the SDK triggers the `onError` callback instead of the `onLeaveChannel` callback and returns the error code ERR\\_INTERNAL\\_FAILED = 3.\n";
export let structuredData = {
  contents: [{
    heading: "when-i-integrate-the-java-sdk-the-error-javalandunsatisfiedlinkerror-no-recording-in-javalibrarypath-occurs-how-do-i-fix-it",
    content: "Reason: The system environment cannot find the `librecording.so ` file.\nSolution: Check if the java demo is compiled and the library file is generated, and then, check and configure the path of the library file.\nFor example, on Linux, if the path of the library file is `/home/user/Desktop/tool/Agora_Recording/samples/java/bin/io/agora/recording/librecording.so`, configure `LD_LIBRARY_PATH` in `/etc/profile`, `~/.bash_profile` or `~/.bashrc` as follows:"
  }, {
    heading: "how-can-i-tell-whether-or-not-the-recording-application-left-the-channel",
    content: "The recording application left the channel if the SDK triggers the `onLeaveChannel` callback and returns the error code ERR\\_OK = 1."
  }, {
    heading: "how-can-i-tell-whether-or-not-the-recording-application-left-the-channel",
    content: "The recording application failed to leave the channel If the SDK triggers the `onError` callback instead of the `onLeaveChannel` callback and returns the error code ERR\\_INTERNAL\\_FAILED = 3."
  }],
  headings: [{
    id: "when-i-integrate-the-java-sdk-the-error-javalandunsatisfiedlinkerror-no-recording-in-javalibrarypath-occurs-how-do-i-fix-it",
    content: "When I integrate the Java SDK, the error java.land.UnsatisfiedLinkError: no recording in java.library.path occurs. How do I fix it?"
  }, {
    id: "how-can-i-tell-whether-or-not-the-recording-application-left-the-channel",
    content: "How can I tell whether or not the recording application left the channel?"
  }]
};
export let toc = [{
  depth: 3,
  url: "#when-i-integrate-the-java-sdk-the-error-javalandunsatisfiedlinkerror-no-recording-in-javalibrarypath-occurs-how-do-i-fix-it",
  title: _jsx(_Fragment, {
    children: "When I integrate the Java SDK, the error java.land.UnsatisfiedLinkError: no recording in java.library.path occurs. How do I fix it?"
  })
}, {
  depth: 3,
  url: "#how-can-i-tell-whether-or-not-the-recording-application-left-the-channel",
  title: _jsx(_Fragment, {
    children: "How can I tell whether or not the recording application left the channel?"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h3, {
      id: "when-i-integrate-the-java-sdk-the-error-javalandunsatisfiedlinkerror-no-recording-in-javalibrarypath-occurs-how-do-i-fix-it",
      children: "When I integrate the Java SDK, the error java.land.UnsatisfiedLinkError: no recording in java.library.path occurs. How do I fix it?"
    }), `
`, _jsxs(_components.p, {
      children: ["Reason: The system environment cannot find the ", _jsx(_components.code, {
        children: "librecording.so "
      }), ` file.
Solution: Check if the java demo is compiled and the library file is generated, and then, check and configure the path of the library file.
For example, on Linux, if the path of the library file is `, _jsx(_components.code, {
        children: "/home/user/Desktop/tool/Agora_Recording/samples/java/bin/io/agora/recording/librecording.so"
      }), ", configure ", _jsx(_components.code, {
        children: "LD_LIBRARY_PATH"
      }), " in ", _jsx(_components.code, {
        children: "/etc/profile"
      }), ", ", _jsx(_components.code, {
        children: "~/.bash_profile"
      }), " or ", _jsx(_components.code, {
        children: "~/.bashrc"
      }), " as follows:"]
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "LD_LIBRARY_PATH"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "/home/user/Desktop/tool/Agora_Recording/samples/java/bin/io/agora/recording/librecording.so"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "how-can-i-tell-whether-or-not-the-recording-application-left-the-channel",
      children: "How can I tell whether or not the recording application left the channel?"
    }), `
`, _jsxs(_components.p, {
      children: ["The recording application left the channel if the SDK triggers the ", _jsx(_components.code, {
        children: "onLeaveChannel"
      }), " callback and returns the error code ERR_OK = 1."]
    }), `
`, _jsxs(_components.p, {
      children: ["The recording application failed to leave the channel If the SDK triggers the ", _jsx(_components.code, {
        children: "onError"
      }), " callback instead of the ", _jsx(_components.code, {
        children: "onLeaveChannel"
      }), " callback and returns the error code ERR_INTERNAL_FAILED = 3."]
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
