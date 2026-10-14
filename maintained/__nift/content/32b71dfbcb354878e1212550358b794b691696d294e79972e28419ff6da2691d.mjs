import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Enable and configure Signaling",
  description: "Enable Signaling for your project and configure presence, storage, and stream channels in Agora Console."
};
export let _markdown = `

Before you enable Signaling, make sure you have an [Agora account](/en/introduction/account#sign-up-for-an-agora-account) and a [project](/en/introduction/account#your-first-agora-project).

## Enable Signaling for your project [#enable-signaling-for-your-project]

<CalloutContainer type="info">
  <CalloutTitle>
    Note
  </CalloutTitle>

  <CalloutDescription>
    Signaling is enabled by default for all new projects.
  </CalloutDescription>
</CalloutContainer>

To enable Signaling for an existing project, in [Agora Console](https://console.agora.io), select **RTC Services** from the sidebar, then locate the **Signaling** card and turn on its toggle.

## Configure Signaling [#configure-signaling]

To configure Signaling, select the settings icon on the **Signaling** card to open its configuration panel.

![Signaling settings on the Services page](https://assets-docs.agora.io/images/console/signaling-config.png)

The Signaling panel provides the following configuration.

### Presence configuration [#presence-configuration]

Turn on **Enable Presence** to control whether Presence is available for this project, then set:

* **Max number of instant event**: The maximum number of instant notifications sent before Signaling switches to interval mode. The value range is 8–128, with a default of 50. To request a value outside this range, contact [technical support](mailto\\:support@agora.io).
* **Timed event notification interval**: How often periodic notifications are sent, in seconds. The value range is 5–300, with a default of 30.
* **Event notification debounce time**: The interval within which no presence event is triggered if a user quickly leaves and rejoins, in seconds. The default is 2.

### Storage configuration [#storage-configuration]

Turn on **Enable Storage** to enable storage sync and related attribute callbacks, then set:

* **User attribute callback**: Receive callbacks when user attributes change in real time.
* **Channel attribute callback**: Receive callbacks when channel attributes are updated by any member.

### History [#history]

Turn on **Enable History** to store message history for later retrieval.

### Distributed lock [#distributed-lock]

Turn on **Enable Distributed Lock** to coordinate exclusive access to shared resources across clients.

### Activate stream channels [#activate-stream-channels]

Turn on **Enable Stream Channel** to use ordered, topic-based messaging for time-sensitive event delivery. This setting may require manual review before it becomes fully available.

Select **Save changes** to apply your updates.

For more information on managing other aspects of your Agora account, see [Console setup](/en/introduction/console-setup).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Before you enable Signaling, make sure you have an Agora account and a project."
  }, {
    heading: "enable-signaling-for-your-project",
    content: "Signaling is enabled by default for all new projects."
  }, {
    heading: "enable-signaling-for-your-project",
    content: "To enable Signaling for an existing project, in Agora Console, select **RTC Services** from the sidebar, then locate the **Signaling** card and turn on its toggle."
  }, {
    heading: "configure-signaling",
    content: "To configure Signaling, select the settings icon on the **Signaling** card to open its configuration panel."
  }, {
    heading: "configure-signaling",
    content: "The Signaling panel provides the following configuration."
  }, {
    heading: "presence-configuration",
    content: "Turn on **Enable Presence** to control whether Presence is available for this project, then set:"
  }, {
    heading: "presence-configuration",
    content: "**Max number of instant event**: The maximum number of instant notifications sent before Signaling switches to interval mode. The value range is 8–128, with a default of 50. To request a value outside this range, contact technical support."
  }, {
    heading: "presence-configuration",
    content: "**Timed event notification interval**: How often periodic notifications are sent, in seconds. The value range is 5–300, with a default of 30."
  }, {
    heading: "presence-configuration",
    content: "**Event notification debounce time**: The interval within which no presence event is triggered if a user quickly leaves and rejoins, in seconds. The default is 2."
  }, {
    heading: "storage-configuration",
    content: "Turn on **Enable Storage** to enable storage sync and related attribute callbacks, then set:"
  }, {
    heading: "storage-configuration",
    content: "**User attribute callback**: Receive callbacks when user attributes change in real time."
  }, {
    heading: "storage-configuration",
    content: "**Channel attribute callback**: Receive callbacks when channel attributes are updated by any member."
  }, {
    heading: "history",
    content: "Turn on **Enable History** to store message history for later retrieval."
  }, {
    heading: "distributed-lock",
    content: "Turn on **Enable Distributed Lock** to coordinate exclusive access to shared resources across clients."
  }, {
    heading: "activate-stream-channels",
    content: "Turn on **Enable Stream Channel** to use ordered, topic-based messaging for time-sensitive event delivery. This setting may require manual review before it becomes fully available."
  }, {
    heading: "activate-stream-channels",
    content: "Select **Save changes** to apply your updates."
  }, {
    heading: "activate-stream-channels",
    content: "For more information on managing other aspects of your Agora account, see Console setup."
  }],
  headings: [{
    id: "enable-signaling-for-your-project",
    content: "Enable Signaling for your project"
  }, {
    id: "configure-signaling",
    content: "Configure Signaling"
  }, {
    id: "presence-configuration",
    content: "Presence configuration"
  }, {
    id: "storage-configuration",
    content: "Storage configuration"
  }, {
    id: "history",
    content: "History"
  }, {
    id: "distributed-lock",
    content: "Distributed lock"
  }, {
    id: "activate-stream-channels",
    content: "Activate stream channels"
  }]
};
export let toc = [{
  depth: 2,
  url: "#enable-signaling-for-your-project",
  title: _jsx(_Fragment, {
    children: "Enable Signaling for your project"
  })
}, {
  depth: 2,
  url: "#configure-signaling",
  title: _jsx(_Fragment, {
    children: "Configure Signaling"
  })
}, {
  depth: 3,
  url: "#presence-configuration",
  title: _jsx(_Fragment, {
    children: "Presence configuration"
  })
}, {
  depth: 3,
  url: "#storage-configuration",
  title: _jsx(_Fragment, {
    children: "Storage configuration"
  })
}, {
  depth: 3,
  url: "#history",
  title: _jsx(_Fragment, {
    children: "History"
  })
}, {
  depth: 3,
  url: "#distributed-lock",
  title: _jsx(_Fragment, {
    children: "Distributed lock"
  })
}, {
  depth: 3,
  url: "#activate-stream-channels",
  title: _jsx(_Fragment, {
    children: "Activate stream channels"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["Before you enable Signaling, make sure you have an ", _jsx(_components.a, {
        href: "/en/introduction/account#sign-up-for-an-agora-account",
        children: "Agora account"
      }), " and a ", _jsx(_components.a, {
        href: "/en/introduction/account#your-first-agora-project",
        children: "project"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "enable-signaling-for-your-project",
      children: "Enable Signaling for your project"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "Note"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Signaling is enabled by default for all new projects."
        })
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["To enable Signaling for an existing project, in ", _jsx(_components.a, {
        href: "https://console.agora.io",
        children: "Agora Console"
      }), ", select ", _jsx(_components.strong, {
        children: "RTC Services"
      }), " from the sidebar, then locate the ", _jsx(_components.strong, {
        children: "Signaling"
      }), " card and turn on its toggle."]
    }), `
`, _jsx(_components.h2, {
      id: "configure-signaling",
      children: "Configure Signaling"
    }), `
`, _jsxs(_components.p, {
      children: ["To configure Signaling, select the settings icon on the ", _jsx(_components.strong, {
        children: "Signaling"
      }), " card to open its configuration panel."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/console/signaling-config.png",
        alt: "Signaling settings on the Services page"
      })
    }), `
`, _jsx(_components.p, {
      children: "The Signaling panel provides the following configuration."
    }), `
`, _jsx(_components.h3, {
      id: "presence-configuration",
      children: "Presence configuration"
    }), `
`, _jsxs(_components.p, {
      children: ["Turn on ", _jsx(_components.strong, {
        children: "Enable Presence"
      }), " to control whether Presence is available for this project, then set:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Max number of instant event"
        }), ": The maximum number of instant notifications sent before Signaling switches to interval mode. The value range is 8–128, with a default of 50. To request a value outside this range, contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "technical support"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Timed event notification interval"
        }), ": How often periodic notifications are sent, in seconds. The value range is 5–300, with a default of 30."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Event notification debounce time"
        }), ": The interval within which no presence event is triggered if a user quickly leaves and rejoins, in seconds. The default is 2."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "storage-configuration",
      children: "Storage configuration"
    }), `
`, _jsxs(_components.p, {
      children: ["Turn on ", _jsx(_components.strong, {
        children: "Enable Storage"
      }), " to enable storage sync and related attribute callbacks, then set:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "User attribute callback"
        }), ": Receive callbacks when user attributes change in real time."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Channel attribute callback"
        }), ": Receive callbacks when channel attributes are updated by any member."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "history",
      children: "History"
    }), `
`, _jsxs(_components.p, {
      children: ["Turn on ", _jsx(_components.strong, {
        children: "Enable History"
      }), " to store message history for later retrieval."]
    }), `
`, _jsx(_components.h3, {
      id: "distributed-lock",
      children: "Distributed lock"
    }), `
`, _jsxs(_components.p, {
      children: ["Turn on ", _jsx(_components.strong, {
        children: "Enable Distributed Lock"
      }), " to coordinate exclusive access to shared resources across clients."]
    }), `
`, _jsx(_components.h3, {
      id: "activate-stream-channels",
      children: "Activate stream channels"
    }), `
`, _jsxs(_components.p, {
      children: ["Turn on ", _jsx(_components.strong, {
        children: "Enable Stream Channel"
      }), " to use ordered, topic-based messaging for time-sensitive event delivery. This setting may require manual review before it becomes fully available."]
    }), `
`, _jsxs(_components.p, {
      children: ["Select ", _jsx(_components.strong, {
        children: "Save changes"
      }), " to apply your updates."]
    }), `
`, _jsxs(_components.p, {
      children: ["For more information on managing other aspects of your Agora account, see ", _jsx(_components.a, {
        href: "/en/introduction/console-setup",
        children: "Console setup"
      }), "."]
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
