import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why do I see a big headshot or letterboxing?"
};
export let _markdown = `

## Step 1: Self-check [#step-1-self-check]

Big headshot and letterbox issues occur when the video size does not match the display window size and under the following scenarios:

* If the video size is different from the camera output size, the video is cropped before it is encoded and then enlarged.
* If the video size is different from the display window size and the receiver uses the Hidden mode for rendering, the video is also cropped before it is encoded and then enlarged.
* If the video size is different from the display window size and the receiver uses the Fit mode for rendering, the video is reduced in size, resulting in dark bands on the margin of the screen.

## Step 2: Contact Agora Customer Support [#step-2-contact-agora-customer-support]

If the issue persists, contact Agora customer support and submit the issue with the following information:

* SDK logs of the sender.
* If the sender uses a mobile phone, whether the sender's screen is horizontal or vertical.
* The window aspect ratio of the receiver.
`;
export let structuredData = {
  contents: [{
    heading: "step-1-self-check",
    content: "Big headshot and letterbox issues occur when the video size does not match the display window size and under the following scenarios:"
  }, {
    heading: "step-1-self-check",
    content: "If the video size is different from the camera output size, the video is cropped before it is encoded and then enlarged."
  }, {
    heading: "step-1-self-check",
    content: "If the video size is different from the display window size and the receiver uses the Hidden mode for rendering, the video is also cropped before it is encoded and then enlarged."
  }, {
    heading: "step-1-self-check",
    content: "If the video size is different from the display window size and the receiver uses the Fit mode for rendering, the video is reduced in size, resulting in dark bands on the margin of the screen."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "If the issue persists, contact Agora customer support and submit the issue with the following information:"
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "SDK logs of the sender."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "If the sender uses a mobile phone, whether the sender's screen is horizontal or vertical."
  }, {
    heading: "step-2-contact-agora-customer-support",
    content: "The window aspect ratio of the receiver."
  }],
  headings: [{
    id: "step-1-self-check",
    content: "Step 1: Self-check"
  }, {
    id: "step-2-contact-agora-customer-support",
    content: "Step 2: Contact Agora Customer Support"
  }]
};
export let toc = [{
  depth: 2,
  url: "#step-1-self-check",
  title: _jsx(_Fragment, {
    children: "Step 1: Self-check"
  })
}, {
  depth: 2,
  url: "#step-2-contact-agora-customer-support",
  title: _jsx(_Fragment, {
    children: "Step 2: Contact Agora Customer Support"
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
      id: "step-1-self-check",
      children: "Step 1: Self-check"
    }), `
`, _jsx(_components.p, {
      children: "Big headshot and letterbox issues occur when the video size does not match the display window size and under the following scenarios:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If the video size is different from the camera output size, the video is cropped before it is encoded and then enlarged."
      }), `
`, _jsx(_components.li, {
        children: "If the video size is different from the display window size and the receiver uses the Hidden mode for rendering, the video is also cropped before it is encoded and then enlarged."
      }), `
`, _jsx(_components.li, {
        children: "If the video size is different from the display window size and the receiver uses the Fit mode for rendering, the video is reduced in size, resulting in dark bands on the margin of the screen."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "step-2-contact-agora-customer-support",
      children: "Step 2: Contact Agora Customer Support"
    }), `
`, _jsx(_components.p, {
      children: "If the issue persists, contact Agora customer support and submit the issue with the following information:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "SDK logs of the sender."
      }), `
`, _jsx(_components.li, {
        children: "If the sender uses a mobile phone, whether the sender's screen is horizontal or vertical."
      }), `
`, _jsx(_components.li, {
        children: "The window aspect ratio of the receiver."
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
