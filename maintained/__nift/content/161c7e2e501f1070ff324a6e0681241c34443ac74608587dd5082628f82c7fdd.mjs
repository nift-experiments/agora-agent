import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Development workflow",
  description: "Choose the right development approach for building TEN Framework applications: start from scratch or customize existing templates."
};
export let _markdown = `

The TEN Framework supports two basic development approaches depending on your project needs and experience level.

## Bottom-up development [#bottom-up-development]

Build your application from individual components to create a complete solution.

This approach is best for:

* Custom applications with specific requirements
* Learning how TEN Framework components work together
* Projects that require custom functionality not available in existing templates

Follow these steps to develop your solution, based on this approach:

1. **Create extensions**: Develop individual components for specific features, such as speech recognition, AI processing, and text-to-speech.
2. **Design the graph**: Connect extensions to define data flow and communication
3. **Build the application**: Assemble components into a complete TEN application

**Example use case:** Building a custom voice assistant with specialized industry-specific processing that requires unique extensions and workflows.

## Template-based development [#template-based-development]

Start with an existing application template and customize specific components.

This approach is best for:

* Rapid prototyping and development
* Projects similar to existing TEN applications
* Focusing on specific functionality rather than overall architecture

Follow these steps to develop your solution, based on this approach:

1. **Choose a template**: Select an existing TEN application like [TEN-Agent](https://github.com/TEN-framework/TEN-Agent) that matches your use case
2. **Identify components to replace**: Determine which extensions need customization
3. **Develop custom extensions**: Customize or create replacement extensions for specific functionality
4. **Test and integrate**: Use the standalone testing framework to ensure compatibility

**Example use case:** Customizing TEN-Agent to use a different speech recognition service or adding a specific LLM while keeping the overall agent structure.

## Choosing your approach [#choosing-your-approach]

Consider these guidelines when selecting your development approach:

* **Start with templates** if you're new to TEN Framework or building something similar to existing applications
* **Build from scratch** if you need complete control over architecture or have unique requirements
* **Mix both approaches** by starting with a template and gradually replacing more components as you learn

<CalloutContainer type="info">
  <CalloutDescription>
    Use extensions from the TEN Cloud Store with either approach to accelerate development.
  </CalloutDescription>
</CalloutContainer>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The TEN Framework supports two basic development approaches depending on your project needs and experience level."
  }, {
    heading: "bottom-up-development",
    content: "Build your application from individual components to create a complete solution."
  }, {
    heading: "bottom-up-development",
    content: "This approach is best for:"
  }, {
    heading: "bottom-up-development",
    content: "Custom applications with specific requirements"
  }, {
    heading: "bottom-up-development",
    content: "Learning how TEN Framework components work together"
  }, {
    heading: "bottom-up-development",
    content: "Projects that require custom functionality not available in existing templates"
  }, {
    heading: "bottom-up-development",
    content: "Follow these steps to develop your solution, based on this approach:"
  }, {
    heading: "bottom-up-development",
    content: "**Create extensions**: Develop individual components for specific features, such as speech recognition, AI processing, and text-to-speech."
  }, {
    heading: "bottom-up-development",
    content: "**Design the graph**: Connect extensions to define data flow and communication"
  }, {
    heading: "bottom-up-development",
    content: "**Build the application**: Assemble components into a complete TEN application"
  }, {
    heading: "bottom-up-development",
    content: "**Example use case:** Building a custom voice assistant with specialized industry-specific processing that requires unique extensions and workflows."
  }, {
    heading: "template-based-development",
    content: "Start with an existing application template and customize specific components."
  }, {
    heading: "template-based-development",
    content: "This approach is best for:"
  }, {
    heading: "template-based-development",
    content: "Rapid prototyping and development"
  }, {
    heading: "template-based-development",
    content: "Projects similar to existing TEN applications"
  }, {
    heading: "template-based-development",
    content: "Focusing on specific functionality rather than overall architecture"
  }, {
    heading: "template-based-development",
    content: "Follow these steps to develop your solution, based on this approach:"
  }, {
    heading: "template-based-development",
    content: "**Choose a template**: Select an existing TEN application like TEN-Agent that matches your use case"
  }, {
    heading: "template-based-development",
    content: "**Identify components to replace**: Determine which extensions need customization"
  }, {
    heading: "template-based-development",
    content: "**Develop custom extensions**: Customize or create replacement extensions for specific functionality"
  }, {
    heading: "template-based-development",
    content: "**Test and integrate**: Use the standalone testing framework to ensure compatibility"
  }, {
    heading: "template-based-development",
    content: "**Example use case:** Customizing TEN-Agent to use a different speech recognition service or adding a specific LLM while keeping the overall agent structure."
  }, {
    heading: "choosing-your-approach",
    content: "Consider these guidelines when selecting your development approach:"
  }, {
    heading: "choosing-your-approach",
    content: "**Start with templates** if you're new to TEN Framework or building something similar to existing applications"
  }, {
    heading: "choosing-your-approach",
    content: "**Build from scratch** if you need complete control over architecture or have unique requirements"
  }, {
    heading: "choosing-your-approach",
    content: "**Mix both approaches** by starting with a template and gradually replacing more components as you learn"
  }, {
    heading: "choosing-your-approach",
    content: "Use extensions from the TEN Cloud Store with either approach to accelerate development."
  }],
  headings: [{
    id: "bottom-up-development",
    content: "Bottom-up development"
  }, {
    id: "template-based-development",
    content: "Template-based development"
  }, {
    id: "choosing-your-approach",
    content: "Choosing your approach"
  }]
};
export let toc = [{
  depth: 2,
  url: "#bottom-up-development",
  title: _jsx(_Fragment, {
    children: "Bottom-up development"
  })
}, {
  depth: 2,
  url: "#template-based-development",
  title: _jsx(_Fragment, {
    children: "Template-based development"
  })
}, {
  depth: 2,
  url: "#choosing-your-approach",
  title: _jsx(_Fragment, {
    children: "Choosing your approach"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
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
      children: "The TEN Framework supports two basic development approaches depending on your project needs and experience level."
    }), `
`, _jsx(_components.h2, {
      id: "bottom-up-development",
      children: "Bottom-up development"
    }), `
`, _jsx(_components.p, {
      children: "Build your application from individual components to create a complete solution."
    }), `
`, _jsx(_components.p, {
      children: "This approach is best for:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Custom applications with specific requirements"
      }), `
`, _jsx(_components.li, {
        children: "Learning how TEN Framework components work together"
      }), `
`, _jsx(_components.li, {
        children: "Projects that require custom functionality not available in existing templates"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Follow these steps to develop your solution, based on this approach:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Create extensions"
        }), ": Develop individual components for specific features, such as speech recognition, AI processing, and text-to-speech."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Design the graph"
        }), ": Connect extensions to define data flow and communication"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Build the application"
        }), ": Assemble components into a complete TEN application"]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Example use case:"
      }), " Building a custom voice assistant with specialized industry-specific processing that requires unique extensions and workflows."]
    }), `
`, _jsx(_components.h2, {
      id: "template-based-development",
      children: "Template-based development"
    }), `
`, _jsx(_components.p, {
      children: "Start with an existing application template and customize specific components."
    }), `
`, _jsx(_components.p, {
      children: "This approach is best for:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Rapid prototyping and development"
      }), `
`, _jsx(_components.li, {
        children: "Projects similar to existing TEN applications"
      }), `
`, _jsx(_components.li, {
        children: "Focusing on specific functionality rather than overall architecture"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Follow these steps to develop your solution, based on this approach:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Choose a template"
        }), ": Select an existing TEN application like ", _jsx(_components.a, {
          href: "https://github.com/TEN-framework/TEN-Agent",
          children: "TEN-Agent"
        }), " that matches your use case"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Identify components to replace"
        }), ": Determine which extensions need customization"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Develop custom extensions"
        }), ": Customize or create replacement extensions for specific functionality"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Test and integrate"
        }), ": Use the standalone testing framework to ensure compatibility"]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Example use case:"
      }), " Customizing TEN-Agent to use a different speech recognition service or adding a specific LLM while keeping the overall agent structure."]
    }), `
`, _jsx(_components.h2, {
      id: "choosing-your-approach",
      children: "Choosing your approach"
    }), `
`, _jsx(_components.p, {
      children: "Consider these guidelines when selecting your development approach:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Start with templates"
        }), " if you're new to TEN Framework or building something similar to existing applications"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Build from scratch"
        }), " if you need complete control over architecture or have unique requirements"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Mix both approaches"
        }), " by starting with a template and gradually replacing more components as you learn"]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Use extensions from the TEN Cloud Store with either approach to accelerate development."
        })
      })
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
