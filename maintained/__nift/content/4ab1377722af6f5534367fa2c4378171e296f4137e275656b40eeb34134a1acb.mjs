import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Secure channel encryption",
  description: "Agora Server Gateway supports built-in encryption methods."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="linux-cpp" platforms="[&#x22;linux-cpp&#x22;,&#x22;linux-java&#x22;]" showTabs="true">
  <_PlatformPanel platform="linux-cpp">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="linux-cpp" />

    During real-time audio and video interactions, encrypting media streams ensures user data security. The Server Gateway offers a built-in encryption solution to safeguard your media streams effectively.

    ## Implementation [#implementation]

    Starting from version 3.8.200, Agora recommends using the \`AES_128_GCM2\` or \`AES_256_GCM2\` encryption modes with key and salt settings. Versions prior to 3.8.200 only support 128-bit SM4 in ECB mode.

    Agora recommends using the \`AES_128_GCM2\` or \`AES_256_GCM2\` encryption mode and setting the key and salt.

    <CalloutContainer type="info">
      <CalloutDescription>
        * Ensure all users in a channel use the same encryption mode, key, and salt.
        * The \`GCM2\` encryption modes offer enhanced security with a stronger Key Derivation Function (KDF) and support for setting a salt. For other encryption modes, you only need to configure the encryption mode and key.
      </CalloutDescription>
    </CalloutContainer>

    ### Generate and set the key [#generate-and-set-the-key]

    To generate and set the encryption \`key\`, refer to the following steps.

    1. To randomly generate a 32-byte encryption key in string format using OpenSSL on your server:

       \`\`\`bash
       # Randomly generate a 32-byte key in the string format, and pass the string key in the encryptionKey parameter of enableEncryption.
       openssl rand -hex 32
       dba643c8ba6b6dc738df43d9fd624293b4b12d87a60f518253bd10ba98c48453
       \`\`\`

    2. The client gets the string \`key\` from the server and passes it to the SDK in the \`enableEncryption\` method.

    ### Generate and set the salt [#generate-and-set-the-salt]

    To generate the \`salt\`:

    1. Randomly generate a Base64-encoded, 32-byte salt through OpenSSL on the server. Refer to the [C++ sample code](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/cpp/sample/RtcChannelEncryptionSaltSample.cpp) provided by Agora on GitHub to randomly generate a salt in the byte array format and convert it to \`Base64\` on the server.

       \`\`\`bash
       # Randomly generate a 32-byte salt in the Base64 format. Convert the salt from Base64 to uint8_t, and pass the uint8_t salt in the encryptionKdfSalt parameter of enableEncryption.
       openssl rand -base64 32
       X5w9T+50kzxVOnkJKiY/lUk82/bES2kATOt3vBuGEDw=
       \`\`\`

    2. The client gets the \`Base64\` salt from the server.

    3. The client converts the salt from \`Base64\` to a \`uint8_t\` array of length 32, and then passes it to the SDK in the \`enableEncryption\` method.

    ### Enable built-in encryption [#enable-built-in-encryption]

    Before connecting to a channel, call \`enableEncryption\` to enable built-in encryption. You also need to set the encryption mode and encryption key. All users connected to the same channel must use the same encryption mode and key.

    \`\`\`cpp
    // Create an EncryptionConfig instance
    agora::rtc::EncryptionConfig Config;
    // 256-bit AES, GCM2 mode
    Config.encryptionMode = agora::rtc::AES_256_GCM2;
    // Set encryption key
    Config.encryptionKey = options.encryptionKey.c_str();
    // Set encryption salt
    Config.encryptionKdfSalt = options.encryptionKdfSalt;
    // Enable built-in encryption
    if (connection->enableEncryption(options.encryptionMode, Config) < 0) {
          AG_LOG(ERROR, "Failed to enable encryption!");
        }
    AG_LOG(INFO, "Enable encryption successfully");
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="linux-java">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="linux-java" />

    During real-time audio and video interactions, encrypting media streams ensures user data security. The Server Gateway offers a built-in encryption solution to safeguard your media streams effectively.

    ## Implementation [#implementation-1]

    Starting from version 3.8.200, Agora recommends using the \`AES_128_GCM2\` or \`AES_256_GCM2\` encryption modes with key and salt settings. Versions prior to 3.8.200 only support 128-bit SM4 in ECB mode.

    Agora recommends using the \`AES_128_GCM2\` or \`AES_256_GCM2\` encryption mode and setting the key and salt.

    <CalloutContainer type="info">
      <CalloutDescription>
        * Ensure all users in a channel use the same encryption mode, key, and salt.
        * The \`GCM2\` encryption modes offer enhanced security with a stronger Key Derivation Function (KDF) and support for setting a salt. For other encryption modes, you only need to configure the encryption mode and key.
      </CalloutDescription>
    </CalloutContainer>

    ### Generate and set the key [#generate-and-set-the-key-1]

    To generate and set the encryption \`key\`, refer to the following steps.

    1. To randomly generate a 32-byte encryption key in string format using OpenSSL on your server:

       \`\`\`bash
       # Randomly generate a 32-byte key in the string format, and pass the string key in the encryptionKey parameter of enableEncryption.
       openssl rand -hex 32
       dba643c8ba6b6dc738df43d9fd624293b4b12d87a60f518253bd10ba98c48453
       \`\`\`

    2. The client gets the string \`key\` from the server and passes it to the SDK in the \`enableEncryption\` method.

    ### Generate and set the salt [#generate-and-set-the-salt-1]

    To generate the \`salt\`:

    1. Randomly generate a Base64-encoded, 32-byte salt through OpenSSL on the server. Refer to the [C++ sample code](https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/cpp/sample/RtcChannelEncryptionSaltSample.cpp) provided by Agora on GitHub to randomly generate a salt in the byte array format and convert it to \`Base64\` on the server.

       \`\`\`bash
       # Randomly generate a 32-byte salt in the Base64 format. Convert the salt from Base64 to uint8_t, and pass the uint8_t salt in the encryptionKdfSalt parameter of enableEncryption.
       openssl rand -base64 32
       X5w9T+50kzxVOnkJKiY/lUk82/bES2kATOt3vBuGEDw=
       \`\`\`

    2. The client gets the \`Base64\` salt from the server.

    3. The client converts the salt from \`Base64\` to a \`uint8_t\` array of length 32, and then passes it to the SDK in the \`enableEncryption\` method.

    ### Enable built-in encryption [#enable-built-in-encryption-1]

    Before connecting to a channel, call \`enableEncryption\` to enable built-in encryption. You also need to set the encryption mode and encryption key. All users connected to the same channel must use the same encryption mode and key.

    \`\`\`java
    EncryptionConfig encryptionConfig = new EncryptionConfig();
    // Choose the encryption mode
    encryptionConfig.setEncryptionMode(Constants.ENCRYPTION_MODE_AES_256_GCM);
    // Set the encryption key
    encryptionConfig.setEncryptionKey(encryptionKey);
    //Set the encryption salt
    encryptionConfig.setEncryptionKdfSalt(encryptionKdfSalt);
    // Enable built-in encryption
    int ret = conn.enableEncryption(encryptionMode, encryptionConfig);
    if ( ret < 0) {
        System.out.printf("Failed to enable encryption!  \\n" + ret);
            return;
    }
    System.out.printf("Enable encryption successfully!\\n");
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "During real-time audio and video interactions, encrypting media streams ensures user data security. The Server Gateway offers a built-in encryption solution to safeguard your media streams effectively."
  }, {
    heading: "implementation",
    content: "Starting from version 3.8.200, Agora recommends using the `AES_128_GCM2` or `AES_256_GCM2` encryption modes with key and salt settings. Versions prior to 3.8.200 only support 128-bit SM4 in ECB mode."
  }, {
    heading: "implementation",
    content: "Agora recommends using the `AES_128_GCM2` or `AES_256_GCM2` encryption mode and setting the key and salt."
  }, {
    heading: "implementation",
    content: "Ensure all users in a channel use the same encryption mode, key, and salt."
  }, {
    heading: "implementation",
    content: "The `GCM2` encryption modes offer enhanced security with a stronger Key Derivation Function (KDF) and support for setting a salt. For other encryption modes, you only need to configure the encryption mode and key."
  }, {
    heading: "generate-and-set-the-key",
    content: "To generate and set the encryption `key`, refer to the following steps."
  }, {
    heading: "generate-and-set-the-key",
    content: "To randomly generate a 32-byte encryption key in string format using OpenSSL on your server:"
  }, {
    heading: "generate-and-set-the-key",
    content: "The client gets the string `key` from the server and passes it to the SDK in the `enableEncryption` method."
  }, {
    heading: "generate-and-set-the-salt",
    content: "To generate the `salt`:"
  }, {
    heading: "generate-and-set-the-salt",
    content: "Randomly generate a Base64-encoded, 32-byte salt through OpenSSL on the server. Refer to the C++ sample code provided by Agora on GitHub to randomly generate a salt in the byte array format and convert it to `Base64` on the server."
  }, {
    heading: "generate-and-set-the-salt",
    content: "The client gets the `Base64` salt from the server."
  }, {
    heading: "generate-and-set-the-salt",
    content: "The client converts the salt from `Base64` to a `uint8_t` array of length 32, and then passes it to the SDK in the `enableEncryption` method."
  }, {
    heading: "enable-built-in-encryption",
    content: "Before connecting to a channel, call `enableEncryption` to enable built-in encryption. You also need to set the encryption mode and encryption key. All users connected to the same channel must use the same encryption mode and key."
  }, {
    heading: "enable-built-in-encryption",
    content: "During real-time audio and video interactions, encrypting media streams ensures user data security. The Server Gateway offers a built-in encryption solution to safeguard your media streams effectively."
  }, {
    heading: "implementation-1",
    content: "Starting from version 3.8.200, Agora recommends using the `AES_128_GCM2` or `AES_256_GCM2` encryption modes with key and salt settings. Versions prior to 3.8.200 only support 128-bit SM4 in ECB mode."
  }, {
    heading: "implementation-1",
    content: "Agora recommends using the `AES_128_GCM2` or `AES_256_GCM2` encryption mode and setting the key and salt."
  }, {
    heading: "implementation-1",
    content: "Ensure all users in a channel use the same encryption mode, key, and salt."
  }, {
    heading: "implementation-1",
    content: "The `GCM2` encryption modes offer enhanced security with a stronger Key Derivation Function (KDF) and support for setting a salt. For other encryption modes, you only need to configure the encryption mode and key."
  }, {
    heading: "generate-and-set-the-key-1",
    content: "To generate and set the encryption `key`, refer to the following steps."
  }, {
    heading: "generate-and-set-the-key-1",
    content: "To randomly generate a 32-byte encryption key in string format using OpenSSL on your server:"
  }, {
    heading: "generate-and-set-the-key-1",
    content: "The client gets the string `key` from the server and passes it to the SDK in the `enableEncryption` method."
  }, {
    heading: "generate-and-set-the-salt-1",
    content: "To generate the `salt`:"
  }, {
    heading: "generate-and-set-the-salt-1",
    content: "Randomly generate a Base64-encoded, 32-byte salt through OpenSSL on the server. Refer to the C++ sample code provided by Agora on GitHub to randomly generate a salt in the byte array format and convert it to `Base64` on the server."
  }, {
    heading: "generate-and-set-the-salt-1",
    content: "The client gets the `Base64` salt from the server."
  }, {
    heading: "generate-and-set-the-salt-1",
    content: "The client converts the salt from `Base64` to a `uint8_t` array of length 32, and then passes it to the SDK in the `enableEncryption` method."
  }, {
    heading: "enable-built-in-encryption-1",
    content: "Before connecting to a channel, call `enableEncryption` to enable built-in encryption. You also need to set the encryption mode and encryption key. All users connected to the same channel must use the same encryption mode and key."
  }],
  headings: [{
    id: "implementation",
    content: "Implementation"
  }, {
    id: "generate-and-set-the-key",
    content: "Generate and set the key"
  }, {
    id: "generate-and-set-the-salt",
    content: "Generate and set the salt"
  }, {
    id: "enable-built-in-encryption",
    content: "Enable built-in encryption"
  }, {
    id: "implementation-1",
    content: "Implementation"
  }, {
    id: "generate-and-set-the-key-1",
    content: "Generate and set the key"
  }, {
    id: "generate-and-set-the-salt-1",
    content: "Generate and set the salt"
  }, {
    id: "enable-built-in-encryption-1",
    content: "Enable built-in encryption"
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
  url: "#generate-and-set-the-key",
  title: _jsx(_Fragment, {
    children: "Generate and set the key"
  })
}, {
  depth: 3,
  url: "#generate-and-set-the-salt",
  title: _jsx(_Fragment, {
    children: "Generate and set the salt"
  })
}, {
  depth: 3,
  url: "#enable-built-in-encryption",
  title: _jsx(_Fragment, {
    children: "Enable built-in encryption"
  })
}, {
  depth: 2,
  url: "#implementation-1",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#generate-and-set-the-key-1",
  title: _jsx(_Fragment, {
    children: "Generate and set the key"
  })
}, {
  depth: 3,
  url: "#generate-and-set-the-salt-1",
  title: _jsx(_Fragment, {
    children: "Generate and set the salt"
  })
}, {
  depth: 3,
  url: "#enable-built-in-encryption-1",
  title: _jsx(_Fragment, {
    children: "Enable built-in encryption"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
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
        children: "During real-time audio and video interactions, encrypting media streams ensures user data security. The Server Gateway offers a built-in encryption solution to safeguard your media streams effectively."
      }), _jsx(_components.h2, {
        id: "implementation",
        children: "Implementation"
      }), _jsxs(_components.p, {
        children: ["Starting from version 3.8.200, Agora recommends using the ", _jsx(_components.code, {
          children: "AES_128_GCM2"
        }), " or ", _jsx(_components.code, {
          children: "AES_256_GCM2"
        }), " encryption modes with key and salt settings. Versions prior to 3.8.200 only support 128-bit SM4 in ECB mode."]
      }), _jsxs(_components.p, {
        children: ["Agora recommends using the ", _jsx(_components.code, {
          children: "AES_128_GCM2"
        }), " or ", _jsx(_components.code, {
          children: "AES_256_GCM2"
        }), " encryption mode and setting the key and salt."]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Ensure all users in a channel use the same encryption mode, key, and salt."
            }), `
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "GCM2"
              }), " encryption modes offer enhanced security with a stronger Key Derivation Function (KDF) and support for setting a salt. For other encryption modes, you only need to configure the encryption mode and key."]
            }), `
`]
          })
        })
      }), _jsx(_components.h3, {
        id: "generate-and-set-the-key",
        children: "Generate and set the key"
      }), _jsxs(_components.p, {
        children: ["To generate and set the encryption ", _jsx(_components.code, {
          children: "key"
        }), ", refer to the following steps."]
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "To randomly generate a 32-byte encryption key in string format using OpenSSL on your server:"
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
              children: _jsxs(_components.code, {
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "# Randomly generate a 32-byte key in the string format, and pass the string key in the encryptionKey parameter of enableEncryption."
                  })
                }), `
`, _jsxs(_components.span, {
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
                    children: " 32"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "dba643c8ba6b6dc738df43d9fd624293b4b12d87a60f518253bd10ba98c48453"
                  })
                })]
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["The client gets the string ", _jsx(_components.code, {
              children: "key"
            }), " from the server and passes it to the SDK in the ", _jsx(_components.code, {
              children: "enableEncryption"
            }), " method."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "generate-and-set-the-salt",
        children: "Generate and set the salt"
      }), _jsxs(_components.p, {
        children: ["To generate the ", _jsx(_components.code, {
          children: "salt"
        }), ":"]
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Randomly generate a Base64-encoded, 32-byte salt through OpenSSL on the server. Refer to the ", _jsx(_components.a, {
              href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/cpp/sample/RtcChannelEncryptionSaltSample.cpp",
              children: "C++ sample code"
            }), " provided by Agora on GitHub to randomly generate a salt in the byte array format and convert it to ", _jsx(_components.code, {
              children: "Base64"
            }), " on the server."]
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
              children: _jsxs(_components.code, {
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "# Randomly generate a 32-byte salt in the Base64 format. Convert the salt from Base64 to uint8_t, and pass the uint8_t salt in the encryptionKdfSalt parameter of enableEncryption."
                  })
                }), `
`, _jsxs(_components.span, {
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
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "X5w9T+50kzxVOnkJKiY/lUk82/bES2kATOt3vBuGEDw"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "="
                  })]
                })]
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["The client gets the ", _jsx(_components.code, {
              children: "Base64"
            }), " salt from the server."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["The client converts the salt from ", _jsx(_components.code, {
              children: "Base64"
            }), " to a ", _jsx(_components.code, {
              children: "uint8_t"
            }), " array of length 32, and then passes it to the SDK in the ", _jsx(_components.code, {
              children: "enableEncryption"
            }), " method."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "enable-built-in-encryption",
        children: "Enable built-in encryption"
      }), _jsxs(_components.p, {
        children: ["Before connecting to a channel, call ", _jsx(_components.code, {
          children: "enableEncryption"
        }), " to enable built-in encryption. You also need to set the encryption mode and encryption key. All users connected to the same channel must use the same encryption mode and key."]
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
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Create an EncryptionConfig instance"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "agora"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "rtc"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::EncryptionConfig Config;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// 256-bit AES, GCM2 mode"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "Config.encryptionMode "
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
                children: " agora"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "rtc"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::AES_256_GCM2;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set encryption key"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "Config.encryptionKey "
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
                children: " options.encryptionKey."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "c_str"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set encryption salt"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "Config.encryptionKdfSalt "
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
                children: " options.encryptionKdfSalt;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Enable built-in encryption"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "if"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (connection->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "enableEncryption"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(options.encryptionMode, Config) "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "<"
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
                children: ") {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "      AG_LOG"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(ERROR, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"Failed to enable encryption!"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ");"
              })]
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
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "AG_LOG"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(INFO, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"Enable encryption successfully"'
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
        children: "During real-time audio and video interactions, encrypting media streams ensures user data security. The Server Gateway offers a built-in encryption solution to safeguard your media streams effectively."
      }), _jsx(_components.h2, {
        id: "implementation-1",
        children: "Implementation"
      }), _jsxs(_components.p, {
        children: ["Starting from version 3.8.200, Agora recommends using the ", _jsx(_components.code, {
          children: "AES_128_GCM2"
        }), " or ", _jsx(_components.code, {
          children: "AES_256_GCM2"
        }), " encryption modes with key and salt settings. Versions prior to 3.8.200 only support 128-bit SM4 in ECB mode."]
      }), _jsxs(_components.p, {
        children: ["Agora recommends using the ", _jsx(_components.code, {
          children: "AES_128_GCM2"
        }), " or ", _jsx(_components.code, {
          children: "AES_256_GCM2"
        }), " encryption mode and setting the key and salt."]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Ensure all users in a channel use the same encryption mode, key, and salt."
            }), `
`, _jsxs(_components.li, {
              children: ["The ", _jsx(_components.code, {
                children: "GCM2"
              }), " encryption modes offer enhanced security with a stronger Key Derivation Function (KDF) and support for setting a salt. For other encryption modes, you only need to configure the encryption mode and key."]
            }), `
`]
          })
        })
      }), _jsx(_components.h3, {
        id: "generate-and-set-the-key-1",
        children: "Generate and set the key"
      }), _jsxs(_components.p, {
        children: ["To generate and set the encryption ", _jsx(_components.code, {
          children: "key"
        }), ", refer to the following steps."]
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "To randomly generate a 32-byte encryption key in string format using OpenSSL on your server:"
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
              children: _jsxs(_components.code, {
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "# Randomly generate a 32-byte key in the string format, and pass the string key in the encryptionKey parameter of enableEncryption."
                  })
                }), `
`, _jsxs(_components.span, {
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
                    children: " 32"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "dba643c8ba6b6dc738df43d9fd624293b4b12d87a60f518253bd10ba98c48453"
                  })
                })]
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["The client gets the string ", _jsx(_components.code, {
              children: "key"
            }), " from the server and passes it to the SDK in the ", _jsx(_components.code, {
              children: "enableEncryption"
            }), " method."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "generate-and-set-the-salt-1",
        children: "Generate and set the salt"
      }), _jsxs(_components.p, {
        children: ["To generate the ", _jsx(_components.code, {
          children: "salt"
        }), ":"]
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Randomly generate a Base64-encoded, 32-byte salt through OpenSSL on the server. Refer to the ", _jsx(_components.a, {
              href: "https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/cpp/sample/RtcChannelEncryptionSaltSample.cpp",
              children: "C++ sample code"
            }), " provided by Agora on GitHub to randomly generate a salt in the byte array format and convert it to ", _jsx(_components.code, {
              children: "Base64"
            }), " on the server."]
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
              children: _jsxs(_components.code, {
                children: [_jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "# Randomly generate a 32-byte salt in the Base64 format. Convert the salt from Base64 to uint8_t, and pass the uint8_t salt in the encryptionKdfSalt parameter of enableEncryption."
                  })
                }), `
`, _jsxs(_components.span, {
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
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "X5w9T+50kzxVOnkJKiY/lUk82/bES2kATOt3vBuGEDw"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "="
                  })]
                })]
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["The client gets the ", _jsx(_components.code, {
              children: "Base64"
            }), " salt from the server."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["The client converts the salt from ", _jsx(_components.code, {
              children: "Base64"
            }), " to a ", _jsx(_components.code, {
              children: "uint8_t"
            }), " array of length 32, and then passes it to the SDK in the ", _jsx(_components.code, {
              children: "enableEncryption"
            }), " method."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "enable-built-in-encryption-1",
        children: "Enable built-in encryption"
      }), _jsxs(_components.p, {
        children: ["Before connecting to a channel, call ", _jsx(_components.code, {
          children: "enableEncryption"
        }), " to enable built-in encryption. You also need to set the encryption mode and encryption key. All users connected to the same channel must use the same encryption mode and key."]
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
                children: "EncryptionConfig encryptionConfig "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " new"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " EncryptionConfig"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "();"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Choose the encryption mode"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "encryptionConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setEncryptionMode"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(Constants.ENCRYPTION_MODE_AES_256_GCM);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Set the encryption key"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "encryptionConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setEncryptionKey"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(encryptionKey);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "//Set the encryption salt"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "encryptionConfig."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setEncryptionKdfSalt"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(encryptionKdfSalt);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Enable built-in encryption"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "int"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ret "
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
                children: " conn."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "enableEncryption"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(encryptionMode, encryptionConfig);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "if"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ( ret "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "<"
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
                children: ") {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    System.out."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "printf"
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
                children: '"Failed to enable encryption!  '
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\n"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " +"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ret);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "        return"
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
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "}"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "System.out."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "printf"
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
                children: '"Enable encryption successfully!'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\n"
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
                children: ");"
              })]
            })]
          })
        })
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
