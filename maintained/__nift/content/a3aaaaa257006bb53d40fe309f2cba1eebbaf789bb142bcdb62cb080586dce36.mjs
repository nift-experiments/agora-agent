import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "IoT & Edge",
  description: "RTSA is the real-time media-stream and signaling capability for smart devices, edge endpoints, and device-oriented products."
};
export let _markdown = `

## What this capability is [#what-this-capability-is]

RTSA provides high-quality real-time media streaming and signaling for hardware-oriented and terminal-style products that need low-latency connectivity.

## Common scenarios [#common-scenarios]

* smart cameras
* doorbells and wearables
* device-to-device media interop
* IoT real-time products

## What the existing Agora docs usually contain [#what-the-existing-agora-docs-usually-contain]

* landing page
* runnable examples
* quickstart
* popular capabilities
* best practices

## What to read first [#what-to-read-first]

Start from the landing page to evaluate fit, then run an example project, then add license, interop, and bitrate-control details.
`;
export let structuredData = {
  contents: [{
    heading: "what-this-capability-is",
    content: "RTSA provides high-quality real-time media streaming and signaling for hardware-oriented and terminal-style products that need low-latency connectivity."
  }, {
    heading: "common-scenarios",
    content: "smart cameras"
  }, {
    heading: "common-scenarios",
    content: "doorbells and wearables"
  }, {
    heading: "common-scenarios",
    content: "device-to-device media interop"
  }, {
    heading: "common-scenarios",
    content: "IoT real-time products"
  }, {
    heading: "what-the-existing-agora-docs-usually-contain",
    content: "landing page"
  }, {
    heading: "what-the-existing-agora-docs-usually-contain",
    content: "runnable examples"
  }, {
    heading: "what-the-existing-agora-docs-usually-contain",
    content: "quickstart"
  }, {
    heading: "what-the-existing-agora-docs-usually-contain",
    content: "popular capabilities"
  }, {
    heading: "what-the-existing-agora-docs-usually-contain",
    content: "best practices"
  }, {
    heading: "what-to-read-first",
    content: "Start from the landing page to evaluate fit, then run an example project, then add license, interop, and bitrate-control details."
  }],
  headings: [{
    id: "what-this-capability-is",
    content: "What this capability is"
  }, {
    id: "common-scenarios",
    content: "Common scenarios"
  }, {
    id: "what-the-existing-agora-docs-usually-contain",
    content: "What the existing Agora docs usually contain"
  }, {
    id: "what-to-read-first",
    content: "What to read first"
  }]
};
export let toc = [{
  depth: 2,
  url: "#what-this-capability-is",
  title: _jsx(_Fragment, {
    children: "What this capability is"
  })
}, {
  depth: 2,
  url: "#common-scenarios",
  title: _jsx(_Fragment, {
    children: "Common scenarios"
  })
}, {
  depth: 2,
  url: "#what-the-existing-agora-docs-usually-contain",
  title: _jsx(_Fragment, {
    children: "What the existing Agora docs usually contain"
  })
}, {
  depth: 2,
  url: "#what-to-read-first",
  title: _jsx(_Fragment, {
    children: "What to read first"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "what-this-capability-is",
      children: "What this capability is"
    }), `
`, _jsx(_components.p, {
      children: "RTSA provides high-quality real-time media streaming and signaling for hardware-oriented and terminal-style products that need low-latency connectivity."
    }), `
`, _jsx(_components.h2, {
      id: "common-scenarios",
      children: "Common scenarios"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "smart cameras"
      }), `
`, _jsx(_components.li, {
        children: "doorbells and wearables"
      }), `
`, _jsx(_components.li, {
        children: "device-to-device media interop"
      }), `
`, _jsx(_components.li, {
        children: "IoT real-time products"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "what-the-existing-agora-docs-usually-contain",
      children: "What the existing Agora docs usually contain"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "landing page"
      }), `
`, _jsx(_components.li, {
        children: "runnable examples"
      }), `
`, _jsx(_components.li, {
        children: "quickstart"
      }), `
`, _jsx(_components.li, {
        children: "popular capabilities"
      }), `
`, _jsx(_components.li, {
        children: "best practices"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "what-to-read-first",
      children: "What to read first"
    }), `
`, _jsx(_components.p, {
      children: "Start from the landing page to evaluate fit, then run an example project, then add license, interop, and bitrate-control details."
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
