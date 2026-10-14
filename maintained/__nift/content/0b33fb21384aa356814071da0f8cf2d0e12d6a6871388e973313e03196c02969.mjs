import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Channel naming recommendations",
  description: "Channel naming recommendations."
};
export let _markdown = `

The flexibility of Signaling channels makes them suitable for a diverse range of interaction use-cases. The following are some commonly implemented use-cases:

* **Private chat channel**: One-to-one chat.
* **Group chat channel**: Three or more users communicate together.
* **Broadcast message channel**: An administrator publishes announcements, questionnaires, check-ins, and other content for users in the channel.
* **Real-time synchronization channel**: Individual players in the metaverse synchronize their status and location at high frequency.
* **Control information channel**: Sensor data is uploaded or device status updated.
* **Signaling control channel**: Invite users to join audio/video conferences or other groups.
* **Private mailbox channel**: Only deliver messages to and receive messages from the channels you have subscribed to.

Although Signaling does not have a built-in method to specify channel use-cases, you can distinguish between different use-cases by standardizing and classifying channel names. Best practice is to express the purpose of the channel, and the type of messages transmitted in the channel when naming channels. This practice helps improve channel management and user experience.

## Use meaningful channel names [#use-meaningful-channel-names]

Using a randomly generated string or a custom numeric string as a channel name is the simplest solution to naming a channel. However, channel names generated using this method are not readable, and can lead to the following issues:

* Users get no information regarding the purpose and content of a certain channel from the channel name. This makes it difficult for them to choose a channel.

* Channel managers cannot distinguish between channels for different use-cases by looking at the channel name. This increases the risk of errors when managing channels.

To solve these issues, best practice is to use a readable string as a channel name, and identify the purpose of the channel or the type of messages transmitted in the channel using a prefix and a separator.

## Sample naming convention [#sample-naming-convention]

In practice, a consistent channel naming convention improves identification and management efficiency, and reduces the cost of team communication and collaboration. For example, when granting user access to multiple channels, you can use regular expressions based on the naming convention to find the channels of interest. This improves coding efficiency and reduces the token file size.

Consider the following channel naming convention:

\`[useCaseType][separator][channelID]\`

* \`useCaseType\`: Indicates your custom channel scenario.
* \`separator\`: The separator can be \`_\` or any other legal character.
* \`channelID\`: Represents your custom segmentation purpose. For example, user ID, device name, or region name to identify the user, device, or region, respectively.

<CalloutContainer type="warning">
  <CalloutDescription>
    Channel names cannot begin with an underscore.
  </CalloutDescription>
</CalloutContainer>

Keep the depth of your channel name within 2 levels, which you can adjust as you see fit.

Based on this convention, the following are naming examples for channels in some common scenarios:

* **Private chat channel**: \`private_room1\`
* **Group chat channel**: \`groupchat_room1\`
* **Broadcast message channel**: \`questionnaire_activity1\`
* **Real-time synchronization channel**: \`location_user1\`
* **Control message channel**: \`command_device1\`
* **Signaling control channel**: \`meeting_invitation1\`
* **Private mailbox channel**: \`inbox_userId\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The flexibility of Signaling channels makes them suitable for a diverse range of interaction use-cases. The following are some commonly implemented use-cases:"
  }, {
    heading: undefined,
    content: "**Private chat channel**: One-to-one chat."
  }, {
    heading: undefined,
    content: "**Group chat channel**: Three or more users communicate together."
  }, {
    heading: undefined,
    content: "**Broadcast message channel**: An administrator publishes announcements, questionnaires, check-ins, and other content for users in the channel."
  }, {
    heading: undefined,
    content: "**Real-time synchronization channel**: Individual players in the metaverse synchronize their status and location at high frequency."
  }, {
    heading: undefined,
    content: "**Control information channel**: Sensor data is uploaded or device status updated."
  }, {
    heading: undefined,
    content: "**Signaling control channel**: Invite users to join audio/video conferences or other groups."
  }, {
    heading: undefined,
    content: "**Private mailbox channel**: Only deliver messages to and receive messages from the channels you have subscribed to."
  }, {
    heading: undefined,
    content: "Although Signaling does not have a built-in method to specify channel use-cases, you can distinguish between different use-cases by standardizing and classifying channel names. Best practice is to express the purpose of the channel, and the type of messages transmitted in the channel when naming channels. This practice helps improve channel management and user experience."
  }, {
    heading: "use-meaningful-channel-names",
    content: "Using a randomly generated string or a custom numeric string as a channel name is the simplest solution to naming a channel. However, channel names generated using this method are not readable, and can lead to the following issues:"
  }, {
    heading: "use-meaningful-channel-names",
    content: "Users get no information regarding the purpose and content of a certain channel from the channel name. This makes it difficult for them to choose a channel."
  }, {
    heading: "use-meaningful-channel-names",
    content: "Channel managers cannot distinguish between channels for different use-cases by looking at the channel name. This increases the risk of errors when managing channels."
  }, {
    heading: "use-meaningful-channel-names",
    content: "To solve these issues, best practice is to use a readable string as a channel name, and identify the purpose of the channel or the type of messages transmitted in the channel using a prefix and a separator."
  }, {
    heading: "sample-naming-convention",
    content: "In practice, a consistent channel naming convention improves identification and management efficiency, and reduces the cost of team communication and collaboration. For example, when granting user access to multiple channels, you can use regular expressions based on the naming convention to find the channels of interest. This improves coding efficiency and reduces the token file size."
  }, {
    heading: "sample-naming-convention",
    content: "Consider the following channel naming convention:"
  }, {
    heading: "sample-naming-convention",
    content: "`[useCaseType][separator][channelID]`"
  }, {
    heading: "sample-naming-convention",
    content: "`useCaseType`: Indicates your custom channel scenario."
  }, {
    heading: "sample-naming-convention",
    content: "`separator`: The separator can be `_` or any other legal character."
  }, {
    heading: "sample-naming-convention",
    content: "`channelID`: Represents your custom segmentation purpose. For example, user ID, device name, or region name to identify the user, device, or region, respectively."
  }, {
    heading: "sample-naming-convention",
    content: "Channel names cannot begin with an underscore."
  }, {
    heading: "sample-naming-convention",
    content: "Keep the depth of your channel name within 2 levels, which you can adjust as you see fit."
  }, {
    heading: "sample-naming-convention",
    content: "Based on this convention, the following are naming examples for channels in some common scenarios:"
  }, {
    heading: "sample-naming-convention",
    content: "**Private chat channel**: `private_room1`"
  }, {
    heading: "sample-naming-convention",
    content: "**Group chat channel**: `groupchat_room1`"
  }, {
    heading: "sample-naming-convention",
    content: "**Broadcast message channel**: `questionnaire_activity1`"
  }, {
    heading: "sample-naming-convention",
    content: "**Real-time synchronization channel**: `location_user1`"
  }, {
    heading: "sample-naming-convention",
    content: "**Control message channel**: `command_device1`"
  }, {
    heading: "sample-naming-convention",
    content: "**Signaling control channel**: `meeting_invitation1`"
  }, {
    heading: "sample-naming-convention",
    content: "**Private mailbox channel**: `inbox_userId`"
  }],
  headings: [{
    id: "use-meaningful-channel-names",
    content: "Use meaningful channel names"
  }, {
    id: "sample-naming-convention",
    content: "Sample naming convention"
  }]
};
export let toc = [{
  depth: 2,
  url: "#use-meaningful-channel-names",
  title: _jsx(_Fragment, {
    children: "Use meaningful channel names"
  })
}, {
  depth: 2,
  url: "#sample-naming-convention",
  title: _jsx(_Fragment, {
    children: "Sample naming convention"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "The flexibility of Signaling channels makes them suitable for a diverse range of interaction use-cases. The following are some commonly implemented use-cases:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Private chat channel"
        }), ": One-to-one chat."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Group chat channel"
        }), ": Three or more users communicate together."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Broadcast message channel"
        }), ": An administrator publishes announcements, questionnaires, check-ins, and other content for users in the channel."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Real-time synchronization channel"
        }), ": Individual players in the metaverse synchronize their status and location at high frequency."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Control information channel"
        }), ": Sensor data is uploaded or device status updated."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Signaling control channel"
        }), ": Invite users to join audio/video conferences or other groups."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Private mailbox channel"
        }), ": Only deliver messages to and receive messages from the channels you have subscribed to."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Although Signaling does not have a built-in method to specify channel use-cases, you can distinguish between different use-cases by standardizing and classifying channel names. Best practice is to express the purpose of the channel, and the type of messages transmitted in the channel when naming channels. This practice helps improve channel management and user experience."
    }), `
`, _jsx(_components.h2, {
      id: "use-meaningful-channel-names",
      children: "Use meaningful channel names"
    }), `
`, _jsx(_components.p, {
      children: "Using a randomly generated string or a custom numeric string as a channel name is the simplest solution to naming a channel. However, channel names generated using this method are not readable, and can lead to the following issues:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Users get no information regarding the purpose and content of a certain channel from the channel name. This makes it difficult for them to choose a channel."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Channel managers cannot distinguish between channels for different use-cases by looking at the channel name. This increases the risk of errors when managing channels."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "To solve these issues, best practice is to use a readable string as a channel name, and identify the purpose of the channel or the type of messages transmitted in the channel using a prefix and a separator."
    }), `
`, _jsx(_components.h2, {
      id: "sample-naming-convention",
      children: "Sample naming convention"
    }), `
`, _jsx(_components.p, {
      children: "In practice, a consistent channel naming convention improves identification and management efficiency, and reduces the cost of team communication and collaboration. For example, when granting user access to multiple channels, you can use regular expressions based on the naming convention to find the channels of interest. This improves coding efficiency and reduces the token file size."
    }), `
`, _jsx(_components.p, {
      children: "Consider the following channel naming convention:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.code, {
        children: "[useCaseType][separator][channelID]"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "useCaseType"
        }), ": Indicates your custom channel scenario."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "separator"
        }), ": The separator can be ", _jsx(_components.code, {
          children: "_"
        }), " or any other legal character."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "channelID"
        }), ": Represents your custom segmentation purpose. For example, user ID, device name, or region name to identify the user, device, or region, respectively."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "warning",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Channel names cannot begin with an underscore."
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "Keep the depth of your channel name within 2 levels, which you can adjust as you see fit."
    }), `
`, _jsx(_components.p, {
      children: "Based on this convention, the following are naming examples for channels in some common scenarios:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Private chat channel"
        }), ": ", _jsx(_components.code, {
          children: "private_room1"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Group chat channel"
        }), ": ", _jsx(_components.code, {
          children: "groupchat_room1"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Broadcast message channel"
        }), ": ", _jsx(_components.code, {
          children: "questionnaire_activity1"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Real-time synchronization channel"
        }), ": ", _jsx(_components.code, {
          children: "location_user1"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Control message channel"
        }), ": ", _jsx(_components.code, {
          children: "command_device1"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Signaling control channel"
        }), ": ", _jsx(_components.code, {
          children: "meeting_invitation1"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Private mailbox channel"
        }), ": ", _jsx(_components.code, {
          children: "inbox_userId"
        })]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
