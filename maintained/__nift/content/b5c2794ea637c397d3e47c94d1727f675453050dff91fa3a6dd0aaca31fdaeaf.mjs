import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Set vertical layout",
  description: "Introduces how to set vertical layout"
};
export let _markdown = `

If you choose vertical layout (\`layoutType\` = 1) when using the Media Push RESTful API, you should be familiar with the following guidelines.

## Large window [#large-window]

* Specify a user ID:
  You can use the \`maxResolutionUid\` parameter to specify a user ID to display in the large window when you start pushing video media streams. If that user stops pushing or exits the channel, the window initially displays the last frame of the user's video. Once the layout refreshes, the window displays the background color of the canvas.
* Let volume determine the user dynamically:
  If no user ID is specified, every time the layout is refreshed, the user with the loudest volume displays in the large window.

## Small windows [#small-windows]

Users display in the small windows in the order they join the channel. If a user in a small window exits the channel, the next user in order moves to the window of the user, and this process is repeated for the other users below them.

## Empty windows [#empty-windows]

When the users in the small windows send only audio streams or stop publishing video streams for some reason, what displays is determined as follows:

* If the \`defaultPlaceholderImageUrl\` field is set, the default background image is displayed.
* If the defaultPlaceholderImageUrl field is not set, the window initially displays the last frame of the user's video (if available). Once the layout refreshes, the window displays the background color of the canvas.

<CalloutContainer type="info">
  <CalloutDescription>
    These options also apply if a window is empty because there are not enough users in the channel to fill it.
  </CalloutDescription>
</CalloutContainer>

## Screen layouts [#screen-layouts]

The layout configurations vary based on the number of users in the channel, as shown in the following figures:

| Number of people | Layout effect                                                       | Description                                                                                                                                                                                                                                                                                   |
| :--------------- | :------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1                | ![1645770574489](https://web-cdn.agora.io/docs-files/1645770574489) | If \`maxResolutionUid\` is not set, the layout style of 1 person is full screen.If \`maxResolutionUid\` is set, but the user has not joined the channel, other users are displayed on the right side according to the layout for 1-5 people when they join the channel.                           |
| 1-5              | ![1645770589461](https://web-cdn.agora.io/docs-files/1645770589461) | You can specify a user for the large window; the other users in the channel are displayed in windows 2-5 in chronological order of their joining the channel.The width of the small windows on the right is one-fifth of the total width, and the height is one-fourth of the total height.   |
| 6-7              | ![1645770764144](https://web-cdn.agora.io/docs-files/1645770764144) | You can specify a user for the large window; the other users in the channel are displayed in windows 2-7 in chronologicalorder of their joining the channel.The width of the small windows on the right is one-seventh of the total width, and the height is one-sixth of the total height.   |
| 8-9              | ![1645770860768](https://web-cdn.agora.io/docs-files/1645770860768) | You can specify a user for the large window; the other users in the channel are displayed in windows 2-9 in chronological order of order of their joining.The width of the small windows on the right is one-ninth of the total width, and the height is one-eighth of the total height.      |
| 10-17            | ![1645777289380](https://web-cdn.agora.io/docs-files/1645777289380) | You can specify a user for the large window; the other users in the channel are displayed in windows 2-17 in chronological order of their joining the channel.The width of the small windows on the right is one-tenth of the total width, and the height is one-eighth of the total height.  |
| 18-33            | ![1645777324965](https://web-cdn.agora.io/docs-files/1645777324965) | You can specify a user for the large window; the other users in the channel are displayed in windows 2-33 in tchronological order of their joining the channel.The width of the small windows on the right is one-tenth of the total width, and the height is one-eighth of the total height. |
| 34-49            | ![1645777336303](https://web-cdn.agora.io/docs-files/1645777336303) | You can specify a user for the large window; the other users in the channel are displayed in windows 2-49 in chronological order of joining the channel.The width of the small windows on the right is one-fourteenth of the total width, and the height is one-twelfth of the total height.  |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "If you choose vertical layout (`layoutType` = 1) when using the Media Push RESTful API, you should be familiar with the following guidelines."
  }, {
    heading: "large-window",
    content: "Specify a user ID:\nYou can use the `maxResolutionUid` parameter to specify a user ID to display in the large window when you start pushing video media streams. If that user stops pushing or exits the channel, the window initially displays the last frame of the user's video. Once the layout refreshes, the window displays the background color of the canvas."
  }, {
    heading: "large-window",
    content: `Let volume determine the user dynamically:
If no user ID is specified, every time the layout is refreshed, the user with the loudest volume displays in the large window.`
  }, {
    heading: "small-windows",
    content: "Users display in the small windows in the order they join the channel. If a user in a small window exits the channel, the next user in order moves to the window of the user, and this process is repeated for the other users below them."
  }, {
    heading: "empty-windows",
    content: "When the users in the small windows send only audio streams or stop publishing video streams for some reason, what displays is determined as follows:"
  }, {
    heading: "empty-windows",
    content: "If the `defaultPlaceholderImageUrl` field is set, the default background image is displayed."
  }, {
    heading: "empty-windows",
    content: "If the defaultPlaceholderImageUrl field is not set, the window initially displays the last frame of the user's video (if available). Once the layout refreshes, the window displays the background color of the canvas."
  }, {
    heading: "empty-windows",
    content: "These options also apply if a window is empty because there are not enough users in the channel to fill it."
  }, {
    heading: "screen-layouts",
    content: "The layout configurations vary based on the number of users in the channel, as shown in the following figures:"
  }, {
    heading: "screen-layouts",
    content: "Number of people"
  }, {
    heading: "screen-layouts",
    content: "Layout effect"
  }, {
    heading: "screen-layouts",
    content: "Description"
  }, {
    heading: "screen-layouts",
    content: "1"
  }, {
    heading: "screen-layouts",
    content: "If `maxResolutionUid` is not set, the layout style of 1 person is full screen.If `maxResolutionUid` is set, but the user has not joined the channel, other users are displayed on the right side according to the layout for 1-5 people when they join the channel."
  }, {
    heading: "screen-layouts",
    content: "1-5"
  }, {
    heading: "screen-layouts",
    content: "You can specify a user for the large window; the other users in the channel are displayed in windows 2-5 in chronological order of their joining the channel.The width of the small windows on the right is one-fifth of the total width, and the height is one-fourth of the total height."
  }, {
    heading: "screen-layouts",
    content: "6-7"
  }, {
    heading: "screen-layouts",
    content: "You can specify a user for the large window; the other users in the channel are displayed in windows 2-7 in chronologicalorder of their joining the channel.The width of the small windows on the right is one-seventh of the total width, and the height is one-sixth of the total height."
  }, {
    heading: "screen-layouts",
    content: "8-9"
  }, {
    heading: "screen-layouts",
    content: "You can specify a user for the large window; the other users in the channel are displayed in windows 2-9 in chronological order of order of their joining.The width of the small windows on the right is one-ninth of the total width, and the height is one-eighth of the total height."
  }, {
    heading: "screen-layouts",
    content: "10-17"
  }, {
    heading: "screen-layouts",
    content: "You can specify a user for the large window; the other users in the channel are displayed in windows 2-17 in chronological order of their joining the channel.The width of the small windows on the right is one-tenth of the total width, and the height is one-eighth of the total height."
  }, {
    heading: "screen-layouts",
    content: "18-33"
  }, {
    heading: "screen-layouts",
    content: "You can specify a user for the large window; the other users in the channel are displayed in windows 2-33 in tchronological order of their joining the channel.The width of the small windows on the right is one-tenth of the total width, and the height is one-eighth of the total height."
  }, {
    heading: "screen-layouts",
    content: "34-49"
  }, {
    heading: "screen-layouts",
    content: "You can specify a user for the large window; the other users in the channel are displayed in windows 2-49 in chronological order of joining the channel.The width of the small windows on the right is one-fourteenth of the total width, and the height is one-twelfth of the total height."
  }],
  headings: [{
    id: "large-window",
    content: "Large window"
  }, {
    id: "small-windows",
    content: "Small windows"
  }, {
    id: "empty-windows",
    content: "Empty windows"
  }, {
    id: "screen-layouts",
    content: "Screen layouts"
  }]
};
export let toc = [{
  depth: 2,
  url: "#large-window",
  title: _jsx(_Fragment, {
    children: "Large window"
  })
}, {
  depth: 2,
  url: "#small-windows",
  title: _jsx(_Fragment, {
    children: "Small windows"
  })
}, {
  depth: 2,
  url: "#empty-windows",
  title: _jsx(_Fragment, {
    children: "Empty windows"
  })
}, {
  depth: 2,
  url: "#screen-layouts",
  title: _jsx(_Fragment, {
    children: "Screen layouts"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["If you choose vertical layout (", _jsx(_components.code, {
        children: "layoutType"
      }), " = 1) when using the Media Push RESTful API, you should be familiar with the following guidelines."]
    }), `
`, _jsx(_components.h2, {
      id: "large-window",
      children: "Large window"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`Specify a user ID:
You can use the `, _jsx(_components.code, {
          children: "maxResolutionUid"
        }), " parameter to specify a user ID to display in the large window when you start pushing video media streams. If that user stops pushing or exits the channel, the window initially displays the last frame of the user's video. Once the layout refreshes, the window displays the background color of the canvas."]
      }), `
`, _jsx(_components.li, {
        children: `Let volume determine the user dynamically:
If no user ID is specified, every time the layout is refreshed, the user with the loudest volume displays in the large window.`
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "small-windows",
      children: "Small windows"
    }), `
`, _jsx(_components.p, {
      children: "Users display in the small windows in the order they join the channel. If a user in a small window exits the channel, the next user in order moves to the window of the user, and this process is repeated for the other users below them."
    }), `
`, _jsx(_components.h2, {
      id: "empty-windows",
      children: "Empty windows"
    }), `
`, _jsx(_components.p, {
      children: "When the users in the small windows send only audio streams or stop publishing video streams for some reason, what displays is determined as follows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["If the ", _jsx(_components.code, {
          children: "defaultPlaceholderImageUrl"
        }), " field is set, the default background image is displayed."]
      }), `
`, _jsx(_components.li, {
        children: "If the defaultPlaceholderImageUrl field is not set, the window initially displays the last frame of the user's video (if available). Once the layout refreshes, the window displays the background color of the canvas."
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "These options also apply if a window is empty because there are not enough users in the channel to fill it."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "screen-layouts",
      children: "Screen layouts"
    }), `
`, _jsx(_components.p, {
      children: "The layout configurations vary based on the number of users in the channel, as shown in the following figures:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Number of people"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Layout effect"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.img, {
              src: "https://web-cdn.agora.io/docs-files/1645770574489",
              alt: "1645770574489"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["If ", _jsx(_components.code, {
              children: "maxResolutionUid"
            }), " is not set, the layout style of 1 person is full screen.If ", _jsx(_components.code, {
              children: "maxResolutionUid"
            }), " is set, but the user has not joined the channel, other users are displayed on the right side according to the layout for 1-5 people when they join the channel."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1-5"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.img, {
              src: "https://web-cdn.agora.io/docs-files/1645770589461",
              alt: "1645770589461"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "You can specify a user for the large window; the other users in the channel are displayed in windows 2-5 in chronological order of their joining the channel.The width of the small windows on the right is one-fifth of the total width, and the height is one-fourth of the total height."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "6-7"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.img, {
              src: "https://web-cdn.agora.io/docs-files/1645770764144",
              alt: "1645770764144"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "You can specify a user for the large window; the other users in the channel are displayed in windows 2-7 in chronologicalorder of their joining the channel.The width of the small windows on the right is one-seventh of the total width, and the height is one-sixth of the total height."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "8-9"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.img, {
              src: "https://web-cdn.agora.io/docs-files/1645770860768",
              alt: "1645770860768"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "You can specify a user for the large window; the other users in the channel are displayed in windows 2-9 in chronological order of order of their joining.The width of the small windows on the right is one-ninth of the total width, and the height is one-eighth of the total height."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "10-17"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.img, {
              src: "https://web-cdn.agora.io/docs-files/1645777289380",
              alt: "1645777289380"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "You can specify a user for the large window; the other users in the channel are displayed in windows 2-17 in chronological order of their joining the channel.The width of the small windows on the right is one-tenth of the total width, and the height is one-eighth of the total height."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "18-33"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.img, {
              src: "https://web-cdn.agora.io/docs-files/1645777324965",
              alt: "1645777324965"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "You can specify a user for the large window; the other users in the channel are displayed in windows 2-33 in tchronological order of their joining the channel.The width of the small windows on the right is one-tenth of the total width, and the height is one-eighth of the total height."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "34-49"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.img, {
              src: "https://web-cdn.agora.io/docs-files/1645777336303",
              alt: "1645777336303"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "You can specify a user for the large window; the other users in the channel are displayed in windows 2-49 in chronological order of joining the channel.The width of the small windows on the right is one-fourteenth of the total width, and the height is one-twelfth of the total height."
          })]
        })]
      })]
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
