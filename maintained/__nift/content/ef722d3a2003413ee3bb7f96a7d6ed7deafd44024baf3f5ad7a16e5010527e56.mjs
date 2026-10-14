import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Why is the audio routing abnormal after the Android device joins the channel?"
};
export let _markdown = "\n\nSome Android sample apps provided by Agora maintain a global `RtcEngine` instance in WorkerThread that keeps alive while the app is running and is destroyed when the app process is destroyed.\n\nThe problem of no audio or abnormal audio routing may occur when developers fail to manage WorkerThread appropriately.\n\nIn their design, developers tend to operate on WorkerThread to manage the life cycle of the `RtcEngine` instance, which is quite right for creating the engine and joining a channel. But when they quit the WorkerThread, they do not destroy the `RtcEngine` instance. This may cause problems, especially when the life cycle of the WorkerThread is not the same as the app process.\n\nBy calling `destroy`, the `RtcEngine` removes all registered system listeners (in this case, PhoneStateListener), some of which may reference to the Looper of the current Thread. If a system listener is not removed when WorkerThread quits, the listener still monitors but the Looper it references to is already invalid, leading to a dead binder error.\n\nAgora recommends using one of the following solutions to solve this problem:\n\n* Maintain one WorkerThreader.\n* Call `destroy` to release the `RtcEngine` instance when exiting the channel.\n";
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Some Android sample apps provided by Agora maintain a global `RtcEngine` instance in WorkerThread that keeps alive while the app is running and is destroyed when the app process is destroyed."
  }, {
    heading: undefined,
    content: "The problem of no audio or abnormal audio routing may occur when developers fail to manage WorkerThread appropriately."
  }, {
    heading: undefined,
    content: "In their design, developers tend to operate on WorkerThread to manage the life cycle of the `RtcEngine` instance, which is quite right for creating the engine and joining a channel. But when they quit the WorkerThread, they do not destroy the `RtcEngine` instance. This may cause problems, especially when the life cycle of the WorkerThread is not the same as the app process."
  }, {
    heading: undefined,
    content: "By calling `destroy`, the `RtcEngine` removes all registered system listeners (in this case, PhoneStateListener), some of which may reference to the Looper of the current Thread. If a system listener is not removed when WorkerThread quits, the listener still monitors but the Looper it references to is already invalid, leading to a dead binder error."
  }, {
    heading: undefined,
    content: "Agora recommends using one of the following solutions to solve this problem:"
  }, {
    heading: undefined,
    content: "Maintain one WorkerThreader."
  }, {
    heading: undefined,
    content: "Call `destroy` to release the `RtcEngine` instance when exiting the channel."
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["Some Android sample apps provided by Agora maintain a global ", _jsx(_components.code, {
        children: "RtcEngine"
      }), " instance in WorkerThread that keeps alive while the app is running and is destroyed when the app process is destroyed."]
    }), `
`, _jsx(_components.p, {
      children: "The problem of no audio or abnormal audio routing may occur when developers fail to manage WorkerThread appropriately."
    }), `
`, _jsxs(_components.p, {
      children: ["In their design, developers tend to operate on WorkerThread to manage the life cycle of the ", _jsx(_components.code, {
        children: "RtcEngine"
      }), " instance, which is quite right for creating the engine and joining a channel. But when they quit the WorkerThread, they do not destroy the ", _jsx(_components.code, {
        children: "RtcEngine"
      }), " instance. This may cause problems, especially when the life cycle of the WorkerThread is not the same as the app process."]
    }), `
`, _jsxs(_components.p, {
      children: ["By calling ", _jsx(_components.code, {
        children: "destroy"
      }), ", the ", _jsx(_components.code, {
        children: "RtcEngine"
      }), " removes all registered system listeners (in this case, PhoneStateListener), some of which may reference to the Looper of the current Thread. If a system listener is not removed when WorkerThread quits, the listener still monitors but the Looper it references to is already invalid, leading to a dead binder error."]
    }), `
`, _jsx(_components.p, {
      children: "Agora recommends using one of the following solutions to solve this problem:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Maintain one WorkerThreader."
      }), `
`, _jsxs(_components.li, {
        children: ["Call ", _jsx(_components.code, {
          children: "destroy"
        }), " to release the ", _jsx(_components.code, {
          children: "RtcEngine"
        }), " instance when exiting the channel."]
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
