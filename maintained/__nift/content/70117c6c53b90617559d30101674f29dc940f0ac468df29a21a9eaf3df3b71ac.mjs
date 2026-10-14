import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "What should I do if I cannot receive the verification email from Agora?"
};
export let _markdown = `

When you perform the following operations on [Agora Console](https://console.agora.io/), Agora sends a verification email to you or your member:

* Verify your email address
* Reset your password
* Add a new member or reset a member's password
* Other security settings

To ensure that you or your project members receive the verification email sent by Agora, please add the following email addresses to the email whitelist:

* [support@agora.io](mailto\\:support@agora.io)
* [developer@agora.io](mailto\\:developer@agora.io)
* [agora@support.agora.io](mailto\\:agora@support.agora.io)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When you perform the following operations on Agora Console, Agora sends a verification email to you or your member:"
  }, {
    heading: undefined,
    content: "Verify your email address"
  }, {
    heading: undefined,
    content: "Reset your password"
  }, {
    heading: undefined,
    content: "Add a new member or reset a member's password"
  }, {
    heading: undefined,
    content: "Other security settings"
  }, {
    heading: undefined,
    content: "To ensure that you or your project members receive the verification email sent by Agora, please add the following email addresses to the email whitelist:"
  }, {
    heading: undefined,
    content: "support\\@agora.io"
  }, {
    heading: undefined,
    content: "developer\\@agora.io"
  }, {
    heading: undefined,
    content: "agora\\@support.agora.io"
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["When you perform the following operations on ", _jsx(_components.a, {
        href: "https://console.agora.io/",
        children: "Agora Console"
      }), ", Agora sends a verification email to you or your member:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Verify your email address"
      }), `
`, _jsx(_components.li, {
        children: "Reset your password"
      }), `
`, _jsx(_components.li, {
        children: "Add a new member or reset a member's password"
      }), `
`, _jsx(_components.li, {
        children: "Other security settings"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "To ensure that you or your project members receive the verification email sent by Agora, please add the following email addresses to the email whitelist:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "mailto:developer@agora.io",
          children: "developer@agora.io"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "mailto:agora@support.agora.io",
          children: "agora@support.agora.io"
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
