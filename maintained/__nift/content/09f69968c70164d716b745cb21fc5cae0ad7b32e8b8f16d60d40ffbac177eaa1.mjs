import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why can't I play the audio file using startAudioMixing or playEffect on Android 9?"
};
export let _markdown = `

Cannot play an mp3, mp4, or any other music format using \`startAudioMixing\` or \`playEffect\` on Android 9.

## Reason [#reason]

This is caused by an Android permission limit. If \`targetSdkVersion\` >= 28, you need to add relevant app privileges to play the a music file.

## Solution [#solution]

For Android projects with \`targetSdkVersion\` >= 28, add the following line in the \`application\` zone of the AndroidManifest.xml file to play the music file:

\`\`\`xml
<application
   android:usesCleartextTraffic="true"
   android:requestLegacyExternalStorage="true"
   …
</application>
\`\`\`

## Relevant links [#relevant-links]

For more Android permission settings and considerations, see [Project setup](/en/realtime-media/rtc/get-started-sdk#handle-permissions).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Cannot play an mp3, mp4, or any other music format using `startAudioMixing` or `playEffect` on Android 9."
  }, {
    heading: "reason",
    content: "This is caused by an Android permission limit. If `targetSdkVersion` >= 28, you need to add relevant app privileges to play the a music file."
  }, {
    heading: "solution",
    content: "For Android projects with `targetSdkVersion` >= 28, add the following line in the `application` zone of the AndroidManifest.xml file to play the music file:"
  }, {
    heading: "relevant-links",
    content: "For more Android permission settings and considerations, see Project setup."
  }],
  headings: [{
    id: "reason",
    content: "Reason"
  }, {
    id: "solution",
    content: "Solution"
  }, {
    id: "relevant-links",
    content: "Relevant links"
  }]
};
export let toc = [{
  depth: 2,
  url: "#reason",
  title: _jsx(_Fragment, {
    children: "Reason"
  })
}, {
  depth: 2,
  url: "#solution",
  title: _jsx(_Fragment, {
    children: "Solution"
  })
}, {
  depth: 2,
  url: "#relevant-links",
  title: _jsx(_Fragment, {
    children: "Relevant links"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["Cannot play an mp3, mp4, or any other music format using ", _jsx(_components.code, {
        children: "startAudioMixing"
      }), " or ", _jsx(_components.code, {
        children: "playEffect"
      }), " on Android 9."]
    }), `
`, _jsx(_components.h2, {
      id: "reason",
      children: "Reason"
    }), `
`, _jsxs(_components.p, {
      children: ["This is caused by an Android permission limit. If ", _jsx(_components.code, {
        children: "targetSdkVersion"
      }), " >= 28, you need to add relevant app privileges to play the a music file."]
    }), `
`, _jsx(_components.h2, {
      id: "solution",
      children: "Solution"
    }), `
`, _jsxs(_components.p, {
      children: ["For Android projects with ", _jsx(_components.code, {
        children: "targetSdkVersion"
      }), " >= 28, add the following line in the ", _jsx(_components.code, {
        children: "application"
      }), " zone of the AndroidManifest.xml file to play the music file:"]
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "application"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "   android:usesCleartextTraffic"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"true"'
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "   android:requestLegacyExternalStorage"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"true"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "   …"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "</application>"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "relevant-links",
      children: "Relevant links"
    }), `
`, _jsxs(_components.p, {
      children: ["For more Android permission settings and considerations, see ", _jsx(_components.a, {
        href: "/en/realtime-media/rtc/get-started-sdk#handle-permissions",
        children: "Project setup"
      }), "."]
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
