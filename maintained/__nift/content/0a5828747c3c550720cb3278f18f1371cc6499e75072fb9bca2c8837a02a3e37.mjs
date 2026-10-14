import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why do errors occur when calling the Stream.init method?"
};
export let _markdown = "\n\nThe following are common errors when initializing the stream:\n\n* `NotAllowedError`: The user refuses to grant access to the video or audio resource.\n* `NotReadableError`: Although the user has granted permission to use the matching devices, a hardware error occurs at the operating system, browser, or web page level, which prevents access to the device. Try refreshing the page or updating the device driver. On some Windows 10 laptops, you need to run Chrome in compatibility mode with Windows 7 to use the camera.\n* `NotFoundError`: Cannot find the specified media track. Ensure that your media device is working.\n* `MEDIA_NOT_SUPPORT`: Use HTTPS for your web app.\n* `OverConstrainedError`: A specified constraint cannot be satisfied by any available device, mostly because the requested capture device is occupied or the specified resolution is not supported.\n\nSee [`Stream.init`](https://api-ref.agora.io/en/video-sdk/web/3.x/interfaces/agorartc.client.html#init) for more errors.\n";
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The following are common errors when initializing the stream:"
  }, {
    heading: undefined,
    content: "`NotAllowedError`: The user refuses to grant access to the video or audio resource."
  }, {
    heading: undefined,
    content: "`NotReadableError`: Although the user has granted permission to use the matching devices, a hardware error occurs at the operating system, browser, or web page level, which prevents access to the device. Try refreshing the page or updating the device driver. On some Windows 10 laptops, you need to run Chrome in compatibility mode with Windows 7 to use the camera."
  }, {
    heading: undefined,
    content: "`NotFoundError`: Cannot find the specified media track. Ensure that your media device is working."
  }, {
    heading: undefined,
    content: "`MEDIA_NOT_SUPPORT`: Use HTTPS for your web app."
  }, {
    heading: undefined,
    content: "`OverConstrainedError`: A specified constraint cannot be satisfied by any available device, mostly because the requested capture device is occupied or the specified resolution is not supported."
  }, {
    heading: undefined,
    content: "See `Stream.init` for more errors."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The following are common errors when initializing the stream:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "NotAllowedError"
        }), ": The user refuses to grant access to the video or audio resource."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "NotReadableError"
        }), ": Although the user has granted permission to use the matching devices, a hardware error occurs at the operating system, browser, or web page level, which prevents access to the device. Try refreshing the page or updating the device driver. On some Windows 10 laptops, you need to run Chrome in compatibility mode with Windows 7 to use the camera."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "NotFoundError"
        }), ": Cannot find the specified media track. Ensure that your media device is working."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "MEDIA_NOT_SUPPORT"
        }), ": Use HTTPS for your web app."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "OverConstrainedError"
        }), ": A specified constraint cannot be satisfied by any available device, mostly because the requested capture device is occupied or the specified resolution is not supported."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["See ", _jsx(_components.a, {
        href: "https://api-ref.agora.io/en/video-sdk/web/3.x/interfaces/agorartc.client.html#init",
        children: _jsx(_components.code, {
          children: "Stream.init"
        })
      }), " for more errors."]
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
