import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Convo AI Device Kit",
  description: "Build smart hardware experiences with a ready-made voice AI device kit."
};
export let _markdown = `

Convo AI Device Kit R1 is a device-oriented product built on top of Agora's IoT stack and Conversational AI Engine. It packages hardware, connectivity, audio processing, and software resources into a faster path for smart device teams.

Use this product space when you need a hardware-first developer workflow instead of the general Conversational AI build path.

## Start here [#start-here]

* [Quickstart](start-here/quickstart)

## Build [#build]

* [Run the R1 demo](build/run-the-r1-demo)
* [Run the demo server](build/run-the-demo-server)
* [Configure device network](build/configure-device-network)
* [Build and flash firmware](build/build-and-flash-firmware)

## Understand the system [#understand-the-system]

* [Architecture overview](build/architecture-overview)
* [Specifications and compatibility](build/specifications-and-compatibility)

## Plan rollout [#plan-rollout]

* [Enable services](reference/enable-services)
* [Pricing](reference/pricing)
* [Release notes](reference/release-notes)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Convo AI Device Kit R1 is a device-oriented product built on top of Agora's IoT stack and Conversational AI Engine. It packages hardware, connectivity, audio processing, and software resources into a faster path for smart device teams."
  }, {
    heading: undefined,
    content: "Use this product space when you need a hardware-first developer workflow instead of the general Conversational AI build path."
  }, {
    heading: "start-here",
    content: "Quickstart"
  }, {
    heading: "build",
    content: "Run the R1 demo"
  }, {
    heading: "build",
    content: "Run the demo server"
  }, {
    heading: "build",
    content: "Configure device network"
  }, {
    heading: "build",
    content: "Build and flash firmware"
  }, {
    heading: "understand-the-system",
    content: "Architecture overview"
  }, {
    heading: "understand-the-system",
    content: "Specifications and compatibility"
  }, {
    heading: "plan-rollout",
    content: "Enable services"
  }, {
    heading: "plan-rollout",
    content: "Pricing"
  }, {
    heading: "plan-rollout",
    content: "Release notes"
  }],
  headings: [{
    id: "start-here",
    content: "Start here"
  }, {
    id: "build",
    content: "Build"
  }, {
    id: "understand-the-system",
    content: "Understand the system"
  }, {
    id: "plan-rollout",
    content: "Plan rollout"
  }]
};
export let toc = [{
  depth: 2,
  url: "#start-here",
  title: _jsx(_Fragment, {
    children: "Start here"
  })
}, {
  depth: 2,
  url: "#build",
  title: _jsx(_Fragment, {
    children: "Build"
  })
}, {
  depth: 2,
  url: "#understand-the-system",
  title: _jsx(_Fragment, {
    children: "Understand the system"
  })
}, {
  depth: 2,
  url: "#plan-rollout",
  title: _jsx(_Fragment, {
    children: "Plan rollout"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Convo AI Device Kit R1 is a device-oriented product built on top of Agora's IoT stack and Conversational AI Engine. It packages hardware, connectivity, audio processing, and software resources into a faster path for smart device teams."
    }), `
`, _jsx(_components.p, {
      children: "Use this product space when you need a hardware-first developer workflow instead of the general Conversational AI build path."
    }), `
`, _jsx(_components.h2, {
      id: "start-here",
      children: "Start here"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "start-here/quickstart",
          children: "Quickstart"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "build",
      children: "Build"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "build/run-the-r1-demo",
          children: "Run the R1 demo"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "build/run-the-demo-server",
          children: "Run the demo server"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "build/configure-device-network",
          children: "Configure device network"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "build/build-and-flash-firmware",
          children: "Build and flash firmware"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-system",
      children: "Understand the system"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "build/architecture-overview",
          children: "Architecture overview"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "build/specifications-and-compatibility",
          children: "Specifications and compatibility"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "plan-rollout",
      children: "Plan rollout"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "reference/enable-services",
          children: "Enable services"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "reference/pricing",
          children: "Pricing"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "reference/release-notes",
          children: "Release notes"
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
