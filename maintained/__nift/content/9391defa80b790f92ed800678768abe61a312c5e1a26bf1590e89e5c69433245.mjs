import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Which VR headsets are compatible with the Agora RTC SDK?"
};
export let _markdown = `

The Agora RTC SDK is compatible with VR (Virtual Reality) headsets on the following operating systems:

* Android
* iOS
* Windows (non-Universal Windows Platform versions only)

Supported VR headsets include the following:

* Google Cardboard
* Oculus Rift
* Oculus Go
* Oculus Quest
* Vive Pro
* Vive Focus Pro
* Vive Focus 3
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The Agora RTC SDK is compatible with VR (Virtual Reality) headsets on the following operating systems:"
  }, {
    heading: undefined,
    content: "Android"
  }, {
    heading: undefined,
    content: "iOS"
  }, {
    heading: undefined,
    content: "Windows (non-Universal Windows Platform versions only)"
  }, {
    heading: undefined,
    content: "Supported VR headsets include the following:"
  }, {
    heading: undefined,
    content: "Google Cardboard"
  }, {
    heading: undefined,
    content: "Oculus Rift"
  }, {
    heading: undefined,
    content: "Oculus Go"
  }, {
    heading: undefined,
    content: "Oculus Quest"
  }, {
    heading: undefined,
    content: "Vive Pro"
  }, {
    heading: undefined,
    content: "Vive Focus Pro"
  }, {
    heading: undefined,
    content: "Vive Focus 3"
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The Agora RTC SDK is compatible with VR (Virtual Reality) headsets on the following operating systems:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Android"
      }), `
`, _jsx(_components.li, {
        children: "iOS"
      }), `
`, _jsx(_components.li, {
        children: "Windows (non-Universal Windows Platform versions only)"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Supported VR headsets include the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Google Cardboard"
      }), `
`, _jsx(_components.li, {
        children: "Oculus Rift"
      }), `
`, _jsx(_components.li, {
        children: "Oculus Go"
      }), `
`, _jsx(_components.li, {
        children: "Oculus Quest"
      }), `
`, _jsx(_components.li, {
        children: "Vive Pro"
      }), `
`, _jsx(_components.li, {
        children: "Vive Focus Pro"
      }), `
`, _jsx(_components.li, {
        children: "Vive Focus 3"
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
