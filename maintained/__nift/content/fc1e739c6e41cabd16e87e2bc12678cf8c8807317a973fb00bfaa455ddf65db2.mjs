import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How does Flexible Classroom support multiple languages?"
};
export let _markdown = `

Flexible Classroom currently supports Chinese, English, and Spanish. If you need to add more languages, find the language-related key value in the specified directory and modify it.

### Multilingual configuration on Web [#multilingual-configuration-on-web]

In the source code, the Classroom SDK and Proctor SDK, referred to as main SDKs, and plugins, including clicker, countdown, voter, and the ring letter IM module, have their own separate multi-language files. The specific modification method is as follows:

* Main SDKs:

  1. Add the corresponding language file in the TypeScript format under \`packages/agora-classroom-sdk/src/infra/translate\`. The file name must be unique. For example:

     ![1680084679972](https://web-cdn.agora.io/docs-files/1680084679972)

  2. Add the corresponding code in \`packages/agora-classroom-sdk/src/infra/api/index.tsx\`:

     ![1680084689520](https://web-cdn.agora.io/docs-files/1680084689520)

     For example, if you want to add Japanese, add a \`jpn.ts\` file under \`packages/agora-classroom-sdk/src/infra/translate\` and \`addResourceBundle('jp', jp);\` to \`packages/agora-classroom-sdk/src/infra/api/index.tsx\` file.

     The parameters of \`addResourceBundle()\` should be unique and easy to match with a language.

* Plugins:

  1. Add a folder with an \`index.ts\` language file to \`packages/agora-plugin-gallery/src/gallery/answer/i18n\`. The folder name must be unique. For example:

     ![1680084701486](https://web-cdn.agora.io/docs-files/1680084701486)

  2. Add a line of declaration and a line of corresponding code in \`packages/agora-plugin-gallery/src/gallery/answer/i18n/config.ts\`:

     ![1680084710288](https://web-cdn.agora.io/docs-files/1680084710288)

     For example, if you need to add Japanese, add a \`jp\` folder with the \`index.ts\` file under \`packages/agora-plugin-gallery/src/gallery/answer/i18n\` and then \`import jp from './jp';\` declaration and \`addResourceBundle(jp", jp);\` to \`packages/agora-plugin-gallery/src/gallery/answer/i18n/config.ts\`.

     The parameters of \`addResourceBundle()\` should be unique and easy to match with a language.

### Multilingual configuration on Android [#multilingual-configuration-on-android]

Add a directory for the corresponding language with a \`string.xml\` file inside to the following directories. The folder name must be unique.

* \`/AgoraClassSDK/src/main/res\`
* \`/AgoraEduUIKit/src/main/res\`

For example, if you want to add Japanese, add a \`value-jp\` folder, which contains a \`strings.xml\` file.

### Multilingual configuration on iOS [#multilingual-configuration-on-ios]

1. Under \`others\` directory, copy an existing language directory, for example, \`en.Iproj\`, and rename it to correspond to the new language, for example, \`jp.Iproj\`. The folder name must be unique and easy to match with a language, and the suffix must be \`.lproj\`.
2. Replace all strings in the \`Localizable.strings\` file under \`value\` directory with values corresponding to the new language.

Before entering the room, \`AgoraUIBaseViews\` sets the \`agora_ui_language\` pointer of the global variable to the directory name corresponding to the new language.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Flexible Classroom currently supports Chinese, English, and Spanish. If you need to add more languages, find the language-related key value in the specified directory and modify it."
  }, {
    heading: "multilingual-configuration-on-web",
    content: "In the source code, the Classroom SDK and Proctor SDK, referred to as main SDKs, and plugins, including clicker, countdown, voter, and the ring letter IM module, have their own separate multi-language files. The specific modification method is as follows:"
  }, {
    heading: "multilingual-configuration-on-web",
    content: "Main SDKs:"
  }, {
    heading: "multilingual-configuration-on-web",
    content: "Add the corresponding language file in the TypeScript format under `packages/agora-classroom-sdk/src/infra/translate`. The file name must be unique. For example:"
  }, {
    heading: "multilingual-configuration-on-web",
    content: "Add the corresponding code in `packages/agora-classroom-sdk/src/infra/api/index.tsx`:"
  }, {
    heading: "multilingual-configuration-on-web",
    content: "For example, if you want to add Japanese, add a `jpn.ts` file under `packages/agora-classroom-sdk/src/infra/translate` and `addResourceBundle('jp', jp);` to `packages/agora-classroom-sdk/src/infra/api/index.tsx` file."
  }, {
    heading: "multilingual-configuration-on-web",
    content: "The parameters of `addResourceBundle()` should be unique and easy to match with a language."
  }, {
    heading: "multilingual-configuration-on-web",
    content: "Plugins:"
  }, {
    heading: "multilingual-configuration-on-web",
    content: "Add a folder with an `index.ts` language file to `packages/agora-plugin-gallery/src/gallery/answer/i18n`. The folder name must be unique. For example:"
  }, {
    heading: "multilingual-configuration-on-web",
    content: "Add a line of declaration and a line of corresponding code in `packages/agora-plugin-gallery/src/gallery/answer/i18n/config.ts`:"
  }, {
    heading: "multilingual-configuration-on-web",
    content: "For example, if you need to add Japanese, add a `jp` folder with the `index.ts` file under `packages/agora-plugin-gallery/src/gallery/answer/i18n` and then `import jp from './jp';` declaration and `addResourceBundle(jp\", jp);` to `packages/agora-plugin-gallery/src/gallery/answer/i18n/config.ts`."
  }, {
    heading: "multilingual-configuration-on-web",
    content: "The parameters of `addResourceBundle()` should be unique and easy to match with a language."
  }, {
    heading: "multilingual-configuration-on-android",
    content: "Add a directory for the corresponding language with a `string.xml` file inside to the following directories. The folder name must be unique."
  }, {
    heading: "multilingual-configuration-on-android",
    content: "`/AgoraClassSDK/src/main/res`"
  }, {
    heading: "multilingual-configuration-on-android",
    content: "`/AgoraEduUIKit/src/main/res`"
  }, {
    heading: "multilingual-configuration-on-android",
    content: "For example, if you want to add Japanese, add a `value-jp` folder, which contains a `strings.xml` file."
  }, {
    heading: "multilingual-configuration-on-ios",
    content: "Under `others` directory, copy an existing language directory, for example, `en.Iproj`, and rename it to correspond to the new language, for example, `jp.Iproj`. The folder name must be unique and easy to match with a language, and the suffix must be `.lproj`."
  }, {
    heading: "multilingual-configuration-on-ios",
    content: "Replace all strings in the `Localizable.strings` file under `value` directory with values corresponding to the new language."
  }, {
    heading: "multilingual-configuration-on-ios",
    content: "Before entering the room, `AgoraUIBaseViews` sets the `agora_ui_language` pointer of the global variable to the directory name corresponding to the new language."
  }],
  headings: [{
    id: "multilingual-configuration-on-web",
    content: "Multilingual configuration on Web"
  }, {
    id: "multilingual-configuration-on-android",
    content: "Multilingual configuration on Android"
  }, {
    id: "multilingual-configuration-on-ios",
    content: "Multilingual configuration on iOS"
  }]
};
export let toc = [{
  depth: 3,
  url: "#multilingual-configuration-on-web",
  title: _jsx(_Fragment, {
    children: "Multilingual configuration on Web"
  })
}, {
  depth: 3,
  url: "#multilingual-configuration-on-android",
  title: _jsx(_Fragment, {
    children: "Multilingual configuration on Android"
  })
}, {
  depth: 3,
  url: "#multilingual-configuration-on-ios",
  title: _jsx(_Fragment, {
    children: "Multilingual configuration on iOS"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Flexible Classroom currently supports Chinese, English, and Spanish. If you need to add more languages, find the language-related key value in the specified directory and modify it."
    }), `
`, _jsx(_components.h3, {
      id: "multilingual-configuration-on-web",
      children: "Multilingual configuration on Web"
    }), `
`, _jsx(_components.p, {
      children: "In the source code, the Classroom SDK and Proctor SDK, referred to as main SDKs, and plugins, including clicker, countdown, voter, and the ring letter IM module, have their own separate multi-language files. The specific modification method is as follows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Main SDKs:"
        }), `
`, _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Add the corresponding language file in the TypeScript format under ", _jsx(_components.code, {
                children: "packages/agora-classroom-sdk/src/infra/translate"
              }), ". The file name must be unique. For example:"]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://web-cdn.agora.io/docs-files/1680084679972",
                alt: "1680084679972"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Add the corresponding code in ", _jsx(_components.code, {
                children: "packages/agora-classroom-sdk/src/infra/api/index.tsx"
              }), ":"]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://web-cdn.agora.io/docs-files/1680084689520",
                alt: "1680084689520"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["For example, if you want to add Japanese, add a ", _jsx(_components.code, {
                children: "jpn.ts"
              }), " file under ", _jsx(_components.code, {
                children: "packages/agora-classroom-sdk/src/infra/translate"
              }), " and ", _jsx(_components.code, {
                children: "addResourceBundle('jp', jp);"
              }), " to ", _jsx(_components.code, {
                children: "packages/agora-classroom-sdk/src/infra/api/index.tsx"
              }), " file."]
            }), `
`, _jsxs(_components.p, {
              children: ["The parameters of ", _jsx(_components.code, {
                children: "addResourceBundle()"
              }), " should be unique and easy to match with a language."]
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
          children: "Plugins:"
        }), `
`, _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Add a folder with an ", _jsx(_components.code, {
                children: "index.ts"
              }), " language file to ", _jsx(_components.code, {
                children: "packages/agora-plugin-gallery/src/gallery/answer/i18n"
              }), ". The folder name must be unique. For example:"]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://web-cdn.agora.io/docs-files/1680084701486",
                alt: "1680084701486"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Add a line of declaration and a line of corresponding code in ", _jsx(_components.code, {
                children: "packages/agora-plugin-gallery/src/gallery/answer/i18n/config.ts"
              }), ":"]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://web-cdn.agora.io/docs-files/1680084710288",
                alt: "1680084710288"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["For example, if you need to add Japanese, add a ", _jsx(_components.code, {
                children: "jp"
              }), " folder with the ", _jsx(_components.code, {
                children: "index.ts"
              }), " file under ", _jsx(_components.code, {
                children: "packages/agora-plugin-gallery/src/gallery/answer/i18n"
              }), " and then ", _jsx(_components.code, {
                children: "import jp from './jp';"
              }), " declaration and ", _jsx(_components.code, {
                children: 'addResourceBundle(jp", jp);'
              }), " to ", _jsx(_components.code, {
                children: "packages/agora-plugin-gallery/src/gallery/answer/i18n/config.ts"
              }), "."]
            }), `
`, _jsxs(_components.p, {
              children: ["The parameters of ", _jsx(_components.code, {
                children: "addResourceBundle()"
              }), " should be unique and easy to match with a language."]
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "multilingual-configuration-on-android",
      children: "Multilingual configuration on Android"
    }), `
`, _jsxs(_components.p, {
      children: ["Add a directory for the corresponding language with a ", _jsx(_components.code, {
        children: "string.xml"
      }), " file inside to the following directories. The folder name must be unique."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "/AgoraClassSDK/src/main/res"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "/AgoraEduUIKit/src/main/res"
        })
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["For example, if you want to add Japanese, add a ", _jsx(_components.code, {
        children: "value-jp"
      }), " folder, which contains a ", _jsx(_components.code, {
        children: "strings.xml"
      }), " file."]
    }), `
`, _jsx(_components.h3, {
      id: "multilingual-configuration-on-ios",
      children: "Multilingual configuration on iOS"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Under ", _jsx(_components.code, {
          children: "others"
        }), " directory, copy an existing language directory, for example, ", _jsx(_components.code, {
          children: "en.Iproj"
        }), ", and rename it to correspond to the new language, for example, ", _jsx(_components.code, {
          children: "jp.Iproj"
        }), ". The folder name must be unique and easy to match with a language, and the suffix must be ", _jsx(_components.code, {
          children: ".lproj"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Replace all strings in the ", _jsx(_components.code, {
          children: "Localizable.strings"
        }), " file under ", _jsx(_components.code, {
          children: "value"
        }), " directory with values corresponding to the new language."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["Before entering the room, ", _jsx(_components.code, {
        children: "AgoraUIBaseViews"
      }), " sets the ", _jsx(_components.code, {
        children: "agora_ui_language"
      }), " pointer of the global variable to the directory name corresponding to the new language."]
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
