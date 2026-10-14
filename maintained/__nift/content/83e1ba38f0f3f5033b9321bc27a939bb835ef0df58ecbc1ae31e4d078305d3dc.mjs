import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I get the URL of the M3U8 file?"
};
export let _markdown = "\n\nThe URL of the M3U8 file consists of the domain of your cloud storage and the filename. You can copy the URL in your cloud storage.\n\n![](https://web-cdn.agora.io/docs-files/1556174270602)\n\nYou can get the filename of the M3U8 file from the following fields:\n\n* The `fileList` field in the responses of [`query`](/en/realtime-media/cloud-recording/reference/restful-api#query) and [`stop`](/en/realtime-media/cloud-recording/reference/restful-api#stop).\n* The `fileList` field in the [`cloud_recording_file_infos`](/en/realtime-media/cloud-recording/build/handle-events/receive-notifications#cloud_recording_file_infos) callback event.\n";
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The URL of the M3U8 file consists of the domain of your cloud storage and the filename. You can copy the URL in your cloud storage."
  }, {
    heading: undefined,
    content: "You can get the filename of the M3U8 file from the following fields:"
  }, {
    heading: undefined,
    content: "The `fileList` field in the responses of `query` and `stop`."
  }, {
    heading: undefined,
    content: "The `fileList` field in the `cloud_recording_file_infos` callback event."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The URL of the M3U8 file consists of the domain of your cloud storage and the filename. You can copy the URL in your cloud storage."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://web-cdn.agora.io/docs-files/1556174270602",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: "You can get the filename of the M3U8 file from the following fields:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["The ", _jsx(_components.code, {
          children: "fileList"
        }), " field in the responses of ", _jsx(_components.a, {
          href: "/en/realtime-media/cloud-recording/reference/restful-api#query",
          children: _jsx(_components.code, {
            children: "query"
          })
        }), " and ", _jsx(_components.a, {
          href: "/en/realtime-media/cloud-recording/reference/restful-api#stop",
          children: _jsx(_components.code, {
            children: "stop"
          })
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["The ", _jsx(_components.code, {
          children: "fileList"
        }), " field in the ", _jsx(_components.a, {
          href: "/en/realtime-media/cloud-recording/build/handle-events/receive-notifications#cloud_recording_file_infos",
          children: _jsx(_components.code, {
            children: "cloud_recording_file_infos"
          })
        }), " callback event."]
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
