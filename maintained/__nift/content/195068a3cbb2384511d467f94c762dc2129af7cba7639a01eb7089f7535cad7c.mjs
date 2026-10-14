import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "What can I do if I get a pop-up warning saying 'the framework cannot be opened' when compiling an Xcode project?"
};
export let _markdown = `

## Problem [#problem]

On macOS 11.6 or later, when using Xcode to integrate the Agora Voice or RTC SDKs with version 3.6.2 or later, you can encounter a pop-up warning when your project is compiled or running that says "'library\\_name.framework' cannot be opened because the developer cannot be verified."

<CalloutContainer type="info">
  <CalloutDescription>
    You can also use this workaround if you encounter this warning on macOS 11.5.
  </CalloutDescription>
</CalloutContainer>

## Reason [#reason]

As of v3.6.2, Agora provides the XCFramework dynamic library for the Voice and RTC SDK for macOS. Due to security restrictions on macOS 11.6 or later, when you use Xcode to compile any project with the SDK containing XCFramework, you are warned that "library\\_name.framework" cannot be opened because the developer cannot be verified.

## Workaround [#workaround]

1. Execute the command: \`sudo spctl --master-disable\` in the system terminal, and then compile the project in Xcode.

2. A pop-up saying "macOS cannot verify the developer of 'library\\_name'. Are you sure you want to open it?" appears after step 1. Click **Cancel** in this pop-up window.

3. Open **System Preferences > Security & Privacy > General**. A reminder is displayed on the interface saying, "'library\\_name' was blocked from opening because it is not from an identified developer." Click the lock button in the bottom left corner of the interface, enter your system password to change the general settings, and click the **Open Anyway** button right of the reminder.

4. In Xcode, click **Product > Clean Build Folder**, and then compile the project.

At this point, the pop-up warning no longer appears.
`;
export let structuredData = {
  contents: [{
    heading: "problem",
    content: `On macOS 11.6 or later, when using Xcode to integrate the Agora Voice or RTC SDKs with version 3.6.2 or later, you can encounter a pop-up warning when your project is compiled or running that says "'library\\_name.framework' cannot be opened because the developer cannot be verified."`
  }, {
    heading: "problem",
    content: "You can also use this workaround if you encounter this warning on macOS 11.5."
  }, {
    heading: "reason",
    content: 'As of v3.6.2, Agora provides the XCFramework dynamic library for the Voice and RTC SDK for macOS. Due to security restrictions on macOS 11.6 or later, when you use Xcode to compile any project with the SDK containing XCFramework, you are warned that "library\\_name.framework" cannot be opened because the developer cannot be verified.'
  }, {
    heading: "workaround",
    content: "Execute the command: `sudo spctl --master-disable` in the system terminal, and then compile the project in Xcode."
  }, {
    heading: "workaround",
    content: `A pop-up saying "macOS cannot verify the developer of 'library\\_name'. Are you sure you want to open it?" appears after step 1. Click **Cancel** in this pop-up window.`
  }, {
    heading: "workaround",
    content: `Open **System Preferences > Security & Privacy > General**. A reminder is displayed on the interface saying, "'library\\_name' was blocked from opening because it is not from an identified developer." Click the lock button in the bottom left corner of the interface, enter your system password to change the general settings, and click the **Open Anyway** button right of the reminder.`
  }, {
    heading: "workaround",
    content: "In Xcode, click **Product > Clean Build Folder**, and then compile the project."
  }, {
    heading: "workaround",
    content: "At this point, the pop-up warning no longer appears."
  }],
  headings: [{
    id: "problem",
    content: "Problem"
  }, {
    id: "reason",
    content: "Reason"
  }, {
    id: "workaround",
    content: "Workaround"
  }]
};
export let toc = [{
  depth: 2,
  url: "#problem",
  title: _jsx(_Fragment, {
    children: "Problem"
  })
}, {
  depth: 2,
  url: "#reason",
  title: _jsx(_Fragment, {
    children: "Reason"
  })
}, {
  depth: 2,
  url: "#workaround",
  title: _jsx(_Fragment, {
    children: "Workaround"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "problem",
      children: "Problem"
    }), `
`, _jsx(_components.p, {
      children: `On macOS 11.6 or later, when using Xcode to integrate the Agora Voice or RTC SDKs with version 3.6.2 or later, you can encounter a pop-up warning when your project is compiled or running that says "'library_name.framework' cannot be opened because the developer cannot be verified."`
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "You can also use this workaround if you encounter this warning on macOS 11.5."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "reason",
      children: "Reason"
    }), `
`, _jsx(_components.p, {
      children: 'As of v3.6.2, Agora provides the XCFramework dynamic library for the Voice and RTC SDK for macOS. Due to security restrictions on macOS 11.6 or later, when you use Xcode to compile any project with the SDK containing XCFramework, you are warned that "library_name.framework" cannot be opened because the developer cannot be verified.'
    }), `
`, _jsx(_components.h2, {
      id: "workaround",
      children: "Workaround"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Execute the command: ", _jsx(_components.code, {
            children: "sudo spctl --master-disable"
          }), " in the system terminal, and then compile the project in Xcode."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [`A pop-up saying "macOS cannot verify the developer of 'library_name'. Are you sure you want to open it?" appears after step 1. Click `, _jsx(_components.strong, {
            children: "Cancel"
          }), " in this pop-up window."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Open ", _jsx(_components.strong, {
            children: "System Preferences > Security & Privacy > General"
          }), `. A reminder is displayed on the interface saying, "'library_name' was blocked from opening because it is not from an identified developer." Click the lock button in the bottom left corner of the interface, enter your system password to change the general settings, and click the `, _jsx(_components.strong, {
            children: "Open Anyway"
          }), " button right of the reminder."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In Xcode, click ", _jsx(_components.strong, {
            children: "Product > Clean Build Folder"
          }), ", and then compile the project."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "At this point, the pop-up warning no longer appears."
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
