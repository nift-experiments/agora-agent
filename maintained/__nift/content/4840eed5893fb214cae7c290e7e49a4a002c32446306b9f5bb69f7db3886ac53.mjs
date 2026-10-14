import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "MacOS 15 Beta does not support apps that contain Chinese characters in the path"
};
export let _markdown = `

When developing on macOS 15 Beta system, if the path of the App and the App name contain non-English characters (for example, Chinese, Japanese, Korean, or others), the compiled \`Metal shader library\` may not contain any methods, causing the App to fail to run normally.

## Cause of the problem [#cause-of-the-problem]

This issue is cause by a system bug.

## Solution [#solution]

This section takes the Chinese environment as an example to introduce how to create an \`InfoPlist\` file that supports multiple languages and define the name text displayed by the App. The specific steps are as follows:

1. Create files for multi-language support:

   1. Open your project in Xcode and select the **Info** tab.

   2. In the **Localizations*&#x2A; section, click the &#x2A;*+** button and select **Chinese, Simplified** to localize your project to support Chinese characters.

      ![mac15beta-addlanguage](https://assets-docs.agora.io/images/faq/mac15beta-addlanguage.png)

2. Create the \`InfoPlist\` file:

   1. Add a new file:
      1. Right-click your project folder in the project navigator and select &#x2A;*New File...**.
      2. In the pop-up dialog box, select **String Catalog**.
         ![mac15beta-choosetemplate](https://assets-docs.agora.io/images/faq/mac15beta-choosetemplate.png)

   2. Name the file \`InfoPlist\` and click **Create**.

   3. Set the language

      1. Select the \`InfoPlist\` file you just created in the project navigator, select the **Chinese, Simplified*&#x2A; language you have added, and click the &#x2A;*+** button.
      2. Add \`Key\` as \`CFBundleDisplayName\` and add the display name for it in the Chinese environment.

         <CalloutContainer type="warning">
           <CalloutTitle>
             Note
           </CalloutTitle>

           <CalloutDescription>
             If the original **Info** in your project is in Chinese, you need to set the display name in English at the same time to ensure that the names displayed in the &#x2A;*Default Localization (zh-Hans)** and &#x2A;*English (en)** fields are as expected.
           </CalloutDescription>
         </CalloutContainer>

         ![mac15beta-addkey](https://assets-docs.agora.io/images/faq/mac15beta-addkey.png)

3. Define the localized display name of the App:

   1. Select the target file in **TARGETS** and open the **Info** tab.

   2. Click the &#x2A;*+** button and add \`Key\` as \`Application has localized display name\`. Set \`Value\` to \`YES\` so that the display name of the App can be displayed as different text in different language environments.

      ![mac15beta-setdisplayname](https://assets-docs.agora.io/images/faq/mac15beta-setdisplayname.png)

4. Verify the results:

   1. Make sure that no file names and App build paths in the project contain Chinese characters.
   2. Compile the project and build the App.
   3. Switch the language in **System Preferences** on the macOS system to ensure that the App name is displayed correctly in different languages.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When developing on macOS 15 Beta system, if the path of the App and the App name contain non-English characters (for example, Chinese, Japanese, Korean, or others), the compiled `Metal shader library` may not contain any methods, causing the App to fail to run normally."
  }, {
    heading: "cause-of-the-problem",
    content: "This issue is cause by a system bug."
  }, {
    heading: "solution",
    content: "This section takes the Chinese environment as an example to introduce how to create an `InfoPlist` file that supports multiple languages and define the name text displayed by the App. The specific steps are as follows:"
  }, {
    heading: "solution",
    content: "Create files for multi-language support:"
  }, {
    heading: "solution",
    content: "Open your project in Xcode and select the **Info** tab."
  }, {
    heading: "solution",
    content: "In the **Localizations*&#x2A; section, click the &#x2A;*+** button and select **Chinese, Simplified** to localize your project to support Chinese characters."
  }, {
    heading: "solution",
    content: "Create the `InfoPlist` file:"
  }, {
    heading: "solution",
    content: "Add a new file:"
  }, {
    heading: "solution",
    content: "Right-click your project folder in the project navigator and select &#x2A;*New File...**."
  }, {
    heading: "solution",
    content: "In the pop-up dialog box, select **String Catalog**."
  }, {
    heading: "solution",
    content: "Name the file `InfoPlist` and click **Create**."
  }, {
    heading: "solution",
    content: "Set the language"
  }, {
    heading: "solution",
    content: "Select the `InfoPlist` file you just created in the project navigator, select the **Chinese, Simplified*&#x2A; language you have added, and click the &#x2A;*+** button."
  }, {
    heading: "solution",
    content: "Add `Key` as `CFBundleDisplayName` and add the display name for it in the Chinese environment."
  }, {
    heading: "solution",
    content: "If the original **Info** in your project is in Chinese, you need to set the display name in English at the same time to ensure that the names displayed in the &#x2A;*Default Localization (zh-Hans)** and &#x2A;*English (en)** fields are as expected."
  }, {
    heading: "solution",
    content: "Define the localized display name of the App:"
  }, {
    heading: "solution",
    content: "Select the target file in **TARGETS** and open the **Info** tab."
  }, {
    heading: "solution",
    content: "Click the &#x2A;*+** button and add `Key` as `Application has localized display name`. Set `Value` to `YES` so that the display name of the App can be displayed as different text in different language environments."
  }, {
    heading: "solution",
    content: "Verify the results:"
  }, {
    heading: "solution",
    content: "Make sure that no file names and App build paths in the project contain Chinese characters."
  }, {
    heading: "solution",
    content: "Compile the project and build the App."
  }, {
    heading: "solution",
    content: "Switch the language in **System Preferences** on the macOS system to ensure that the App name is displayed correctly in different languages."
  }],
  headings: [{
    id: "cause-of-the-problem",
    content: "Cause of the problem"
  }, {
    id: "solution",
    content: "Solution"
  }]
};
export let toc = [{
  depth: 2,
  url: "#cause-of-the-problem",
  title: _jsx(_Fragment, {
    children: "Cause of the problem"
  })
}, {
  depth: 2,
  url: "#solution",
  title: _jsx(_Fragment, {
    children: "Solution"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["When developing on macOS 15 Beta system, if the path of the App and the App name contain non-English characters (for example, Chinese, Japanese, Korean, or others), the compiled ", _jsx(_components.code, {
        children: "Metal shader library"
      }), " may not contain any methods, causing the App to fail to run normally."]
    }), `
`, _jsx(_components.h2, {
      id: "cause-of-the-problem",
      children: "Cause of the problem"
    }), `
`, _jsx(_components.p, {
      children: "This issue is cause by a system bug."
    }), `
`, _jsx(_components.h2, {
      id: "solution",
      children: "Solution"
    }), `
`, _jsxs(_components.p, {
      children: ["This section takes the Chinese environment as an example to introduce how to create an ", _jsx(_components.code, {
        children: "InfoPlist"
      }), " file that supports multiple languages and define the name text displayed by the App. The specific steps are as follows:"]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Create files for multi-language support:"
        }), `
`, _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Open your project in Xcode and select the ", _jsx(_components.strong, {
                children: "Info"
              }), " tab."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["In the ", _jsx(_components.strong, {
                children: "Localizations"
              }), " section, click the ", _jsx(_components.strong, {
                children: "+"
              }), " button and select ", _jsx(_components.strong, {
                children: "Chinese, Simplified"
              }), " to localize your project to support Chinese characters."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/faq/mac15beta-addlanguage.png",
                alt: "mac15beta-addlanguage"
              })
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Create the ", _jsx(_components.code, {
            children: "InfoPlist"
          }), " file:"]
        }), `
`, _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Add a new file:"
            }), `
`, _jsxs(_components.ol, {
              children: [`
`, _jsxs(_components.li, {
                children: ["Right-click your project folder in the project navigator and select ", _jsx(_components.strong, {
                  children: "New File..."
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: ["In the pop-up dialog box, select ", _jsx(_components.strong, {
                  children: "String Catalog"
                }), `.
`, _jsx(_components.img, {
                  src: "https://assets-docs.agora.io/images/faq/mac15beta-choosetemplate.png",
                  alt: "mac15beta-choosetemplate"
                })]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Name the file ", _jsx(_components.code, {
                children: "InfoPlist"
              }), " and click ", _jsx(_components.strong, {
                children: "Create"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Set the language"
            }), `
`, _jsxs(_components.ol, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Select the ", _jsx(_components.code, {
                    children: "InfoPlist"
                  }), " file you just created in the project navigator, select the ", _jsx(_components.strong, {
                    children: "Chinese, Simplified"
                  }), " language you have added, and click the ", _jsx(_components.strong, {
                    children: "+"
                  }), " button."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Add ", _jsx(_components.code, {
                    children: "Key"
                  }), " as ", _jsx(_components.code, {
                    children: "CFBundleDisplayName"
                  }), " and add the display name for it in the Chinese environment."]
                }), `
`, _jsxs(CalloutContainer, {
                  type: "warning",
                  children: [_jsx(CalloutTitle, {
                    children: "Note"
                  }), _jsx(CalloutDescription, {
                    children: _jsxs(_components.p, {
                      children: ["If the original ", _jsx(_components.strong, {
                        children: "Info"
                      }), " in your project is in Chinese, you need to set the display name in English at the same time to ensure that the names displayed in the ", _jsx(_components.strong, {
                        children: "Default Localization (zh-Hans)"
                      }), " and ", _jsx(_components.strong, {
                        children: "English (en)"
                      }), " fields are as expected."]
                    })
                  })]
                }), `
`, _jsx(_components.p, {
                  children: _jsx(_components.img, {
                    src: "https://assets-docs.agora.io/images/faq/mac15beta-addkey.png",
                    alt: "mac15beta-addkey"
                  })
                }), `
`]
              }), `
`]
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
          children: "Define the localized display name of the App:"
        }), `
`, _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Select the target file in ", _jsx(_components.strong, {
                children: "TARGETS"
              }), " and open the ", _jsx(_components.strong, {
                children: "Info"
              }), " tab."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Click the ", _jsx(_components.strong, {
                children: "+"
              }), " button and add ", _jsx(_components.code, {
                children: "Key"
              }), " as ", _jsx(_components.code, {
                children: "Application has localized display name"
              }), ". Set ", _jsx(_components.code, {
                children: "Value"
              }), " to ", _jsx(_components.code, {
                children: "YES"
              }), " so that the display name of the App can be displayed as different text in different language environments."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/faq/mac15beta-setdisplayname.png",
                alt: "mac15beta-setdisplayname"
              })
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
          children: "Verify the results:"
        }), `
`, _jsxs(_components.ol, {
          children: [`
`, _jsx(_components.li, {
            children: "Make sure that no file names and App build paths in the project contain Chinese characters."
          }), `
`, _jsx(_components.li, {
            children: "Compile the project and build the App."
          }), `
`, _jsxs(_components.li, {
            children: ["Switch the language in ", _jsx(_components.strong, {
              children: "System Preferences"
            }), " on the macOS system to ensure that the App name is displayed correctly in different languages."]
          }), `
`]
        }), `
`]
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
