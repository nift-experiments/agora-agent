import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Secure channel encryption",
  description: "Add Agora built-in media stream encryption to your app."
};
export let _markdown = `

Media stream encryption prevents potential eavesdroppers from accessing sensitive and private information shared in a channel. IoT SDK provides built-in encryption methods that you can use to guarantee data confidentiality during transmission.

This page shows you how to integrate media stream encryption into your app using IoT SDK.

## Understand the tech [#understand-the-tech]

To ensure secure communication, your app uses an SSL [key](https://en.wikipedia.org/wiki/Key_authentication) and, for some encryption modes, a [salt](https://en.wikipedia.org/wiki/Salt_\\(cryptography\\)) to encrypt and decrypt data in the channel. Agora SDRTN® uses your key and salt to encrypt a stream and sends it to remote users. When a remote user receives an encrypted media stream, their app decrypts it using the same key and salt.

The following figure shows the call flow for media stream encryption:

![Encrypt media stream](https://assets-docs.agora.io/images/common/media-stream-encryption.png)

All users in a channel must use the same encryption mode, key, and salt. You set this configuration before you join a channel.

<CalloutContainer type="info">
  <CalloutDescription>
    Mismatched encryption configurations between users cause undefined behavior, such as a black screen or lost audio, instead of an explicit error. Best practice is to have your authentication system generate a new key and salt regularly.
  </CalloutDescription>
</CalloutContainer>

IoT SDK supports the following encryption modes:

* \`AES_128_XTS\`
* \`AES_128_ECB\`
* \`AES_256_XTS\`
* \`SM4_128_ECB\`
* \`AES_128_GCM\`
* \`AES_256_GCM\`
* \`AES_128_GCM2\` (recommended)
* \`AES_256_GCM2\` (recommended)

\`AES_128_GCM2\` and \`AES_256_GCM2\` use a more secure key derivation function and support a salt. For the other modes, you only need to set the encryption mode and key.

## Prerequisites [#prerequisites]

To follow this procedure you must have:

* Implemented the basic IoT SDK functionality. See [Build from scratch](../../build-from-scratch.mdx).

* [OpenSSL](https://www.openssl.org/) v3.0.0 or above.

## Generate a key and salt [#generate-a-key-and-salt]

Generate a 16-byte encryption key:

\`\`\`bash
openssl rand -hex 16
\`\`\`

If you use \`AES_128_GCM2\` or \`AES_256_GCM2\`, also generate a Base64-encoded, 32-byte salt:

\`\`\`bash
openssl rand -base64 32
\`\`\`

## Enable encryption [#enable-encryption]

Set the \`crypto_opt\` fields of \`rtc_channel_options_t\` before you call \`agora_rtc_join_channel\`:

\`\`\`cpp
rtc_channel_options_t channel_options = { 0 };

// Enable encryption
channel_options.crypto_opt.enable = true;
// Set the encryption mode
channel_options.crypto_opt.mode = AES_128_GCM2;
// Set the key
sprintf(channel_options.crypto_opt.key, "%s", key_str);

// Set the salt (AES_128_GCM2 and AES_256_GCM2 only)
uint8_t *salt_bytes = NULL;
uint32_t salt_bytes_len = 0;
salt_bytes = util_base64_decode(salt_base64_str, strlen(salt_base64_str), &salt_bytes_len);
memcpy(channel_options.crypto_opt.salt, salt_bytes, salt_bytes_len);
free(salt_bytes);

// Join the channel
agora_rtc_join_channel(conn_id, channel_name, uid, token, &channel_options);
\`\`\`

\`key_str\` and \`salt_base64_str\` are the key and salt you generated in [Generate a key and salt](#generate-a-key-and-salt). If your encryption mode doesn't use a salt, omit the salt-related lines.

## Reference [#reference]

* [agora\\_rtc\\_join\\_channel](https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html#a6c29ff27f04623526a164cf6e5dcd738)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Media stream encryption prevents potential eavesdroppers from accessing sensitive and private information shared in a channel. IoT SDK provides built-in encryption methods that you can use to guarantee data confidentiality during transmission."
  }, {
    heading: undefined,
    content: "This page shows you how to integrate media stream encryption into your app using IoT SDK."
  }, {
    heading: "understand-the-tech",
    content: "To ensure secure communication, your app uses an SSL key and, for some encryption modes, a salt to encrypt and decrypt data in the channel. Agora SDRTN® uses your key and salt to encrypt a stream and sends it to remote users. When a remote user receives an encrypted media stream, their app decrypts it using the same key and salt."
  }, {
    heading: "understand-the-tech",
    content: "The following figure shows the call flow for media stream encryption:"
  }, {
    heading: "understand-the-tech",
    content: "All users in a channel must use the same encryption mode, key, and salt. You set this configuration before you join a channel."
  }, {
    heading: "understand-the-tech",
    content: "Mismatched encryption configurations between users cause undefined behavior, such as a black screen or lost audio, instead of an explicit error. Best practice is to have your authentication system generate a new key and salt regularly."
  }, {
    heading: "understand-the-tech",
    content: "IoT SDK supports the following encryption modes:"
  }, {
    heading: "understand-the-tech",
    content: "`AES_128_XTS`"
  }, {
    heading: "understand-the-tech",
    content: "`AES_128_ECB`"
  }, {
    heading: "understand-the-tech",
    content: "`AES_256_XTS`"
  }, {
    heading: "understand-the-tech",
    content: "`SM4_128_ECB`"
  }, {
    heading: "understand-the-tech",
    content: "`AES_128_GCM`"
  }, {
    heading: "understand-the-tech",
    content: "`AES_256_GCM`"
  }, {
    heading: "understand-the-tech",
    content: "`AES_128_GCM2` (recommended)"
  }, {
    heading: "understand-the-tech",
    content: "`AES_256_GCM2` (recommended)"
  }, {
    heading: "understand-the-tech",
    content: "`AES_128_GCM2` and `AES_256_GCM2` use a more secure key derivation function and support a salt. For the other modes, you only need to set the encryption mode and key."
  }, {
    heading: "prerequisites",
    content: "To follow this procedure you must have:"
  }, {
    heading: "prerequisites",
    content: "Implemented the basic IoT SDK functionality. See Build from scratch."
  }, {
    heading: "prerequisites",
    content: "OpenSSL v3.0.0 or above."
  }, {
    heading: "generate-a-key-and-salt",
    content: "Generate a 16-byte encryption key:"
  }, {
    heading: "generate-a-key-and-salt",
    content: "If you use `AES_128_GCM2` or `AES_256_GCM2`, also generate a Base64-encoded, 32-byte salt:"
  }, {
    heading: "enable-encryption",
    content: "Set the `crypto_opt` fields of `rtc_channel_options_t` before you call `agora_rtc_join_channel`:"
  }, {
    heading: "enable-encryption",
    content: "`key_str` and `salt_base64_str` are the key and salt you generated in Generate a key and salt. If your encryption mode doesn't use a salt, omit the salt-related lines."
  }, {
    heading: "reference",
    content: "agora\\_rtc\\_join\\_channel"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "generate-a-key-and-salt",
    content: "Generate a key and salt"
  }, {
    id: "enable-encryption",
    content: "Enable encryption"
  }, {
    id: "reference",
    content: "Reference"
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
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#generate-a-key-and-salt",
  title: _jsx(_Fragment, {
    children: "Generate a key and salt"
  })
}, {
  depth: 2,
  url: "#enable-encryption",
  title: _jsx(_Fragment, {
    children: "Enable encryption"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    img: "img",
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
      children: "Media stream encryption prevents potential eavesdroppers from accessing sensitive and private information shared in a channel. IoT SDK provides built-in encryption methods that you can use to guarantee data confidentiality during transmission."
    }), `
`, _jsx(_components.p, {
      children: "This page shows you how to integrate media stream encryption into your app using IoT SDK."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsxs(_components.p, {
      children: ["To ensure secure communication, your app uses an SSL ", _jsx(_components.a, {
        href: "https://en.wikipedia.org/wiki/Key_authentication",
        children: "key"
      }), " and, for some encryption modes, a ", _jsx(_components.a, {
        href: "https://en.wikipedia.org/wiki/Salt_(cryptography)",
        children: "salt"
      }), " to encrypt and decrypt data in the channel. Agora SDRTN® uses your key and salt to encrypt a stream and sends it to remote users. When a remote user receives an encrypted media stream, their app decrypts it using the same key and salt."]
    }), `
`, _jsx(_components.p, {
      children: "The following figure shows the call flow for media stream encryption:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/common/media-stream-encryption.png",
        alt: "Encrypt media stream"
      })
    }), `
`, _jsx(_components.p, {
      children: "All users in a channel must use the same encryption mode, key, and salt. You set this configuration before you join a channel."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Mismatched encryption configurations between users cause undefined behavior, such as a black screen or lost audio, instead of an explicit error. Best practice is to have your authentication system generate a new key and salt regularly."
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "IoT SDK supports the following encryption modes:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "AES_128_XTS"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "AES_128_ECB"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "AES_256_XTS"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "SM4_128_ECB"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "AES_128_GCM"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "AES_256_GCM"
        })
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "AES_128_GCM2"
        }), " (recommended)"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "AES_256_GCM2"
        }), " (recommended)"]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "AES_128_GCM2"
      }), " and ", _jsx(_components.code, {
        children: "AES_256_GCM2"
      }), " use a more secure key derivation function and support a salt. For the other modes, you only need to set the encryption mode and key."]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "To follow this procedure you must have:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Implemented the basic IoT SDK functionality. See ", _jsx(_components.a, {
            href: "../../build-from-scratch.mdx",
            children: "Build from scratch"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "https://www.openssl.org/",
            children: "OpenSSL"
          }), " v3.0.0 or above."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "generate-a-key-and-salt",
      children: "Generate a key and salt"
    }), `
`, _jsx(_components.p, {
      children: "Generate a 16-byte encryption key:"
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
              children: "openssl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " rand"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -hex"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 16"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["If you use ", _jsx(_components.code, {
        children: "AES_128_GCM2"
      }), " or ", _jsx(_components.code, {
        children: "AES_256_GCM2"
      }), ", also generate a Base64-encoded, 32-byte salt:"]
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
              children: "openssl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " rand"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -base64"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 32"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "enable-encryption",
      children: "Enable encryption"
    }), `
`, _jsxs(_components.p, {
      children: ["Set the ", _jsx(_components.code, {
        children: "crypto_opt"
      }), " fields of ", _jsx(_components.code, {
        children: "rtc_channel_options_t"
      }), " before you call ", _jsx(_components.code, {
        children: "agora_rtc_join_channel"
      }), ":"]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "rtc_channel_options_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " channel_options "
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
              children: " { "
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
              children: " };"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Enable encryption"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "channel_options.crypto_opt.enable "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " true"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Set the encryption mode"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "channel_options.crypto_opt.mode "
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
              children: " AES_128_GCM2;"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Set the key"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "sprintf"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(channel_options.crypto_opt.key, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "%s"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", key_str);"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Set the salt (AES_128_GCM2 and AES_256_GCM2 only)"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "uint8_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " *"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "salt_bytes "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " NULL"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "uint32_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " salt_bytes_len "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "salt_bytes "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " util_base64_decode"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(salt_base64_str, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "strlen"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(salt_base64_str), "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "&"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "salt_bytes_len);"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "memcpy"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(channel_options.crypto_opt.salt, salt_bytes, salt_bytes_len);"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "free"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(salt_bytes);"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Join the channel"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "agora_rtc_join_channel"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(conn_id, channel_name, uid, token, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "&"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "channel_options);"
            })]
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "key_str"
      }), " and ", _jsx(_components.code, {
        children: "salt_base64_str"
      }), " are the key and salt you generated in ", _jsx(_components.a, {
        href: "#generate-a-key-and-salt",
        children: "Generate a key and salt"
      }), ". If your encryption mode doesn't use a salt, omit the salt-related lines."]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/iot-sdk/linux/1.x/agora__rtc__api_8h.html#a6c29ff27f04623526a164cf6e5dcd738",
          children: "agora_rtc_join_channel"
        })
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
