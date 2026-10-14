import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Play recorded files online",
  description: "Get the URL of the M3U8 file and play it online."
};
export let _markdown = `

The Agora server automatically uploads the recorded files in TS format to the cloud storage that you set up, and generates an M3U8 file as a playlist pointing to all the recorded TS files. You can get the URL of the M3U8 file and play it online.

<CalloutContainer type="info">
  <CalloutDescription>
    If Agora Cloud Recording generates WebM files instead of TS files, you cannot play the M3U8 file online.
  </CalloutDescription>
</CalloutContainer>

## Implementation [#implementation]

Before you start, ensure that all the recorded files are uploaded. The \`uploadingStatus\` in the response to [\`stop\`](/en/api-reference/api-ref/cloud-recording#stop) should be \`uploaded\`.

We use [Amazon S3](https://aws.amazon.com/s3/) as an example to show you how to play the recorded files online.

1. Log in to the Amazon S3 console.

2. Go to the **Overview** page of the bucket that you use for cloud recording.

3. Set the metadata of the files as follows:
   1. Select the M3U8 file.
   2. Click **Actions**.
   3. Select **Change metadata**.
      ![](https://web-cdn.agora.io/docs-files/1556174648050)
   4. Set the value of the **Content-Type** key to **application/x-mpegURL**. You need to manually enter this value.

      <CalloutContainer type="info">
        <CalloutDescription>
          For more details, see [Editing object metadata in the Amazon S3 console](https://docs.aws.amazon.com/AmazonS3/latest/userguide/add-object-metadata.html).
        </CalloutDescription>
      </CalloutContainer>

      ![](https://web-cdn.agora.io/docs-files/1556174883364)
   5. Select all the TS files and set **Content-Type** to **video/MP2T**.

4. Configure the bucket policy to allow public access:
   1. On the **Permissions** tab, click **Bucket Policy**.
   2. Paste the following code and replace \`<YourBucketName>\` with the name of your bucket:
      \`\`\`json
      {
        "Version": "2012-10-17",
        "Id": "Policy1553255976836",
        "Statement": [
          {
            "Sid": "Stmt1553255974279",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:*",
            "Resource": [
              "arn:aws:s3:::<YourBucketName>",
              "arn:aws:s3:::<YourBucketName>/*"
            ]
          }
        ]
      }
      \`\`\`
   3. Click **Save**.
      ![](https://web-cdn.agora.io/docs-files/1556173842532)

5. Select the M3U8 file to view the URL.
   ![](https://web-cdn.agora.io/docs-files/1556174270602)

6. Open the URL in a web browser to start playing the recorded files.

   <CalloutContainer type="info">
     <CalloutDescription>
       See [How to Serve HLS Video from an S3 Bucket](https://hlsbook.net/how-to-serve-hls-video-from-an-s3-bucket/) for more information.
     </CalloutDescription>
   </CalloutContainer>

## Considerations [#considerations]

* The M3U8 file can be played directly on Safari. For other web browsers, you might need to install an HLS playback extension.
* You can also play the M3U8 file on players supporting HLS, such as the VLC media player.
* If the \`uploadingStatus\` in the response of [\`stop\`](/en/api-reference/api-ref/cloud-recording#stop) is \`"backuped"\`, it indicates that some of the recorded files are uploaded to Agora's backup cloud storage. You should wait until these files are uploaded automatically to your cloud storage before playing the M3U8 file.
* If you do not need to play the recorded files online, we suggest that you make your bucket private to improve security.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Agora server automatically uploads the recorded files in TS format to the cloud storage that you set up, and generates an M3U8 file as a playlist pointing to all the recorded TS files. You can get the URL of the M3U8 file and play it online."
  }, {
    heading: undefined,
    content: "If Agora Cloud Recording generates WebM files instead of TS files, you cannot play the M3U8 file online."
  }, {
    heading: "implementation",
    content: "Before you start, ensure that all the recorded files are uploaded. The `uploadingStatus` in the response to `stop` should be `uploaded`."
  }, {
    heading: "implementation",
    content: "We use Amazon S3 as an example to show you how to play the recorded files online."
  }, {
    heading: "implementation",
    content: "Log in to the Amazon S3 console."
  }, {
    heading: "implementation",
    content: "Go to the **Overview** page of the bucket that you use for cloud recording."
  }, {
    heading: "implementation",
    content: "Set the metadata of the files as follows:"
  }, {
    heading: "implementation",
    content: "Select the M3U8 file."
  }, {
    heading: "implementation",
    content: "Click **Actions**."
  }, {
    heading: "implementation",
    content: "Select **Change metadata**."
  }, {
    heading: "implementation",
    content: "Set the value of the **Content-Type** key to **application/x-mpegURL**. You need to manually enter this value."
  }, {
    heading: "implementation",
    content: "For more details, see Editing object metadata in the Amazon S3 console."
  }, {
    heading: "implementation",
    content: "Select all the TS files and set **Content-Type** to **video/MP2T**."
  }, {
    heading: "implementation",
    content: "Configure the bucket policy to allow public access:"
  }, {
    heading: "implementation",
    content: "On the **Permissions** tab, click **Bucket Policy**."
  }, {
    heading: "implementation",
    content: "Paste the following code and replace `<YourBucketName>` with the name of your bucket:"
  }, {
    heading: "implementation",
    content: "Click **Save**."
  }, {
    heading: "implementation",
    content: "Select the M3U8 file to view the URL."
  }, {
    heading: "implementation",
    content: "Open the URL in a web browser to start playing the recorded files."
  }, {
    heading: "implementation",
    content: "See How to Serve HLS Video from an S3 Bucket for more information."
  }, {
    heading: "considerations",
    content: "The M3U8 file can be played directly on Safari. For other web browsers, you might need to install an HLS playback extension."
  }, {
    heading: "considerations",
    content: "You can also play the M3U8 file on players supporting HLS, such as the VLC media player."
  }, {
    heading: "considerations",
    content: 'If the `uploadingStatus` in the response of `stop` is `"backuped"`, it indicates that some of the recorded files are uploaded to Agora\'s backup cloud storage. You should wait until these files are uploaded automatically to your cloud storage before playing the M3U8 file.'
  }, {
    heading: "considerations",
    content: "If you do not need to play the recorded files online, we suggest that you make your bucket private to improve security."
  }],
  headings: [{
    id: "implementation",
    content: "Implementation"
  }, {
    id: "considerations",
    content: "Considerations"
  }]
};
export let toc = [{
  depth: 2,
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
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
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The Agora server automatically uploads the recorded files in TS format to the cloud storage that you set up, and generates an M3U8 file as a playlist pointing to all the recorded TS files. You can get the URL of the M3U8 file and play it online."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "If Agora Cloud Recording generates WebM files instead of TS files, you cannot play the M3U8 file online."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), `
`, _jsxs(_components.p, {
      children: ["Before you start, ensure that all the recorded files are uploaded. The ", _jsx(_components.code, {
        children: "uploadingStatus"
      }), " in the response to ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/cloud-recording#stop",
        children: _jsx(_components.code, {
          children: "stop"
        })
      }), " should be ", _jsx(_components.code, {
        children: "uploaded"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["We use ", _jsx(_components.a, {
        href: "https://aws.amazon.com/s3/",
        children: "Amazon S3"
      }), " as an example to show you how to play the recorded files online."]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Log in to the Amazon S3 console."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Go to the ", _jsx(_components.strong, {
            children: "Overview"
          }), " page of the bucket that you use for cloud recording."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Set the metadata of the files as follows:"
        }), `
`, _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Select the M3U8 file."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Click ", _jsx(_components.strong, {
                children: "Actions"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Select ", _jsx(_components.strong, {
                children: "Change metadata"
              }), `.
`, _jsx(_components.img, {
                src: "https://web-cdn.agora.io/docs-files/1556174648050",
                alt: ""
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Set the value of the ", _jsx(_components.strong, {
                children: "Content-Type"
              }), " key to ", _jsx(_components.strong, {
                children: "application/x-mpegURL"
              }), ". You need to manually enter this value."]
            }), `
`, _jsx(CalloutContainer, {
              type: "info",
              children: _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["For more details, see ", _jsx(_components.a, {
                    href: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/add-object-metadata.html",
                    children: "Editing object metadata in the Amazon S3 console"
                  }), "."]
                })
              })
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://web-cdn.agora.io/docs-files/1556174883364",
                alt: ""
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Select all the TS files and set ", _jsx(_components.strong, {
                children: "Content-Type"
              }), " to ", _jsx(_components.strong, {
                children: "video/MP2T"
              }), "."]
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Configure the bucket policy to allow public access:"
        }), `
`, _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: ["On the ", _jsx(_components.strong, {
              children: "Permissions"
            }), " tab, click ", _jsx(_components.strong, {
              children: "Bucket Policy"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["Paste the following code and replace ", _jsx(_components.code, {
              children: "<YourBucketName>"
            }), " with the name of your bucket:", `
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
                      children: '  "Version"'
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
                      children: '"2012-10-17"'
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
                      children: '  "Id"'
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
                      children: '"Policy1553255976836"'
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
                      children: '  "Statement"'
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
                      children: "    {"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: '      "Sid"'
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
                      children: '"Stmt1553255974279"'
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
                      children: '      "Effect"'
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
                      children: '"Allow"'
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
                      children: '      "Principal"'
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
                      children: '"*"'
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
                      children: '      "Action"'
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
                      children: '"s3:*"'
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
                      children: '      "Resource"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ": ["
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '        "arn:aws:s3:::<YourBucketName>"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ","
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '        "arn:aws:s3:::<YourBucketName>/*"'
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "      ]"
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
                      children: "  ]"
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
`]
          }), `
`, _jsxs(_components.li, {
            children: ["Click ", _jsx(_components.strong, {
              children: "Save"
            }), `.
`, _jsx(_components.img, {
              src: "https://web-cdn.agora.io/docs-files/1556173842532",
              alt: ""
            })]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [`Select the M3U8 file to view the URL.
`, _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1556174270602",
            alt: ""
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Open the URL in a web browser to start playing the recorded files."
        }), `
`, _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["See ", _jsx(_components.a, {
                href: "https://hlsbook.net/how-to-serve-hls-video-from-an-s3-bucket/",
                children: "How to Serve HLS Video from an S3 Bucket"
              }), " for more information."]
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "considerations",
      children: "Considerations"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The M3U8 file can be played directly on Safari. For other web browsers, you might need to install an HLS playback extension."
      }), `
`, _jsx(_components.li, {
        children: "You can also play the M3U8 file on players supporting HLS, such as the VLC media player."
      }), `
`, _jsxs(_components.li, {
        children: ["If the ", _jsx(_components.code, {
          children: "uploadingStatus"
        }), " in the response of ", _jsx(_components.a, {
          href: "/en/api-reference/api-ref/cloud-recording#stop",
          children: _jsx(_components.code, {
            children: "stop"
          })
        }), " is ", _jsx(_components.code, {
          children: '"backuped"'
        }), ", it indicates that some of the recorded files are uploaded to Agora's backup cloud storage. You should wait until these files are uploaded automatically to your cloud storage before playing the M3U8 file."]
      }), `
`, _jsx(_components.li, {
        children: "If you do not need to play the recorded files online, we suggest that you make your bucket private to improve security."
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
