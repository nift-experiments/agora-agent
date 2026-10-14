import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Enable and configure Chat",
  description: "Introduces how to enable and configure Agora Chat."
};
export let _markdown = `

Before using Chat, you need to enable and configure it through [Agora Console](https://console.agora.io/).

## Prerequisites [#prerequisites]

To enable Chat, make sure that you have the following:

* A valid [Agora account](/en/introduction/account#sign-up-for-an-agora-account).
* An [Agora project](/en/introduction/account#your-first-agora-project) that uses  **App ID** and **Token** for authentication.
* A Chat pricing plan. For details on how to subscribe, see [Subscribe to the pricing plan](/en/realtime-media/im/reference/pricing#subscribe-to-the-pricing-plan).

## Enable Chat [#enable-chat]

1. Log in to the [Agora Console](https://console.agora.io/).

2. In the left navigation bar, click **Project Management** and click **Config** for the project that you want to use.

3. In the **Features** section of the **Edit Project** page, click **Enable** next to **Chat** to enable Chat.

   If this is your first Chat project, select and subscribe to a Chat package:

   ![](https://assets-docs.agora.io/images/im/subscribe.png)

4. Select a data center closest to where most of your end users are located.

   ![img](https://web-cdn.agora.io/docs-files/1665386519450)

   Once Chat is enabled, you are redirected to the Chat config page.

5. Enable the advanced Chat features based on your business requirements.

   ![](https://assets-docs.agora.io/images/im/chat_feature_overview.png)

For details about these advanced features, see the following:

* [Message Callback](/en/realtime-media/im/build/notifications-and-event-handling/setup-webhooks)
* [Message Recall](/en/realtime-media/im/build/build-core-messaging/messages/send-receive-messages#recall-a-message)
* [Message Thread](/en/realtime-media/im/build/build-groups-rooms-and-threads/threading/thread-management)
* [Reaction](/en/realtime-media/im/build/build-core-messaging/reaction)
* [Offline Message Push (Advanced)](/en/realtime-media/im/build/notifications-and-event-handling/offline-push/overview)
* [Presence](/en/realtime-media/im/build/build-core-messaging/presence)
* [Translation](/en/realtime-media/im/build/build-core-messaging/messages/translate-messages)
* [Moderation](/en/realtime-media/im/build/moderate-and-manage-client-behavior/moderation-mechanism)

## Get Chat project information [#get-chat-project-information]

Agora Console assigns the following information to each project that enables Chat:

* **Data Center**: Agora provides several data centers for the service in different regions, including Singapore, Frankfurt (Germany), and Virginia (USA). After the plan is changed, the data center remains unchanged.
* **AppKey**: The unique identifier that Chat assigns to each app. The **AppKey** is of the form \`\${OrgName}#{AppName}\`.
  <CalloutContainer type="info">
    <CalloutDescription>
      The **AppKey** is not the same as your project App ID. You can get your **AppKey** from the Chat configuration section of Agora Console.
    </CalloutDescription>
  </CalloutContainer>
* **OrgName**: The unique identifier that Chat assigns to each enterprise (organization).
* **AppName**: The name that Chat assigns to each app. Each app under the same enterprise (organization) must have a unique App Name.
* **API request url**: The domain of the WebSocket and RESTful API request that Agora assigns to each project.

Follow these steps to get the project information:

1. Find your Chat-enabled project on the [Project Management](https://console.agora.io/legacy/project-management) page on Agora Console and click **Config**.
2. On the project edit page, find **Chat** and click **Config**.
3. On the Chat config page, get the values of **Data Center**, **AppKey**, **OrgName**, **AppName**, **WebSocket Address**, and **REST API**.

## Manage users and generate tokens [#manage-users-and-generate-tokens]

For development purposes, Agora enables you to manage users and generate Chat user authentication tokens using Agora Console. In a production environment, you use the [RESTful API](/en/api-reference/api-ref/im/user-system-registration) to manage users and a token server to [generate user authentication tokens](/en/realtime-media/im/build/secure-access-and-authentication/authentication).

This section shows you how to register Chat users and generate temporary tokens using Agora Console.

### Register a user [#register-a-user]

To register a user, do the following:

1. On the **Project Management** page, click **Config** for the project that you want to use.

   ![](https://web-cdn.agora.io/docs-files/1664531061644)

2. On the **Edit Project** page, click **Config** next to **Chat** below **Features**.

   ![](https://web-cdn.agora.io/docs-files/1664531091562)

3. In the left-navigation pane, select **Operation Management** > **User** and click **Create User**.

   ![](https://web-cdn.agora.io/docs-files/1664531141100)

4. In the **Create User** dialog box, fill in the **User ID**, **Nickname**, and **Password**, and click **Save** to create a user.

   ![](https://web-cdn.agora.io/docs-files/1664531162872)

### Generate an app token [#generate-an-app-token]

In the **Data Center** section of the **Application Information** page, click **Generate** next to **Chat App Temp Token** to generate a token with app privileges.

\`\`\`
![token_generate_app_token](https://assets-docs.agora.io/images/im/token_generate_app_token.png)
\`\`\`

### Generate a user token [#generate-a-user-token]

To ensure communication security, Agora recommends using tokens to authenticate users who log in to Chat.

For testing purposes, Agora Console supports generating temporary tokens for Chat. To generate a user token, do the following:

1. On the **Project Management** page, click **Config** for the project that you want to use.

   ![](https://web-cdn.agora.io/docs-files/1664531061644)

2. On the **Edit Project** page, click **Config** next to **Chat** below **Features**.

   ![](https://web-cdn.agora.io/docs-files/1664531091562)

3. In the **Data Center** section of the **Application Information** page, enter the [user ID](#userid) in the **Chat User Temp Token** box and click **Generate** to generate a token with user privileges.

   ![](https://web-cdn.agora.io/docs-files/1664531214169)

## Change the Chat plan [#change-the-chat-plan]

1. Log in to the [Agora Console](https://console.agora.io/).

2. In the left navigation bar, click **Package**.

3. On the **Subscribe** tab, you can change your Chat plan by clicking **Subscribe** next to the desired plan.

   ![img](https://web-cdn.agora.io/docs-files/1665389469534)

   **Note:**

   * The plan change takes effect immediately.
   * Agora doesn't recommend plan downgrading, as it could impact the capacity of your applications and availability of certain features.

## Disable Chat [#disable-chat]

1. Log in to the [Agora Console](https://console.agora.io/).

2. In the left navigation bar, click **Project Management** and click **Config** for the project that you want to use.

3. In the **Features** section of the **Edit Project** page, click **Enable/Configure** next to **Chat**.

4. On the **Application Information** page, disable Chat in the **Chat Service Status** section.

   **Note:** When you disable Chat, the Chat-related data is still stored in the Chat data center, and you are still charged for the plan activation fee.

   ![img](https://web-cdn.agora.io/docs-files/1665387330975)

## Unsubscribe Chat [#unsubscribe-chat]

Before unsubscribing Chat, disable all projects that have Chat enabled.

1. Log in to the [Agora Console](https://console.agora.io/).

2. In the left navigation bar, click **Package**.

3. On the **Subscribe** tab, scroll down to the bottom and click **Unsubscribe**.

   ![img](https://web-cdn.agora.io/docs-files/1665389814916)

   **Note:**

   When you unsubscribe Chat:

   * All Chat-related data is purged.
   * You are still billed with a pro-rated monthly fee and the usage that occurred during that month.

## Next steps [#next-steps]

After enabling and configuring Chat, the Chat-related features in Agora Analytics are enabled by default to help you keep track of usage trends and quality details. For more information, see [Data Insights](/en/realtime-media/im/reference/console/data-insights) and [Data Metrics](/en/realtime-media/im/reference/console/data-metrics).
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Before using Chat, you need to enable and configure it through Agora Console."
  }, {
    heading: "prerequisites",
    content: "To enable Chat, make sure that you have the following:"
  }, {
    heading: "prerequisites",
    content: "A valid Agora account."
  }, {
    heading: "prerequisites",
    content: "An Agora project that uses  **App ID** and **Token** for authentication."
  }, {
    heading: "prerequisites",
    content: "A Chat pricing plan. For details on how to subscribe, see Subscribe to the pricing plan."
  }, {
    heading: "enable-chat",
    content: "Log in to the Agora Console."
  }, {
    heading: "enable-chat",
    content: "In the left navigation bar, click **Project Management** and click **Config** for the project that you want to use."
  }, {
    heading: "enable-chat",
    content: "In the **Features** section of the **Edit Project** page, click **Enable** next to **Chat** to enable Chat."
  }, {
    heading: "enable-chat",
    content: "If this is your first Chat project, select and subscribe to a Chat package:"
  }, {
    heading: "enable-chat",
    content: "Select a data center closest to where most of your end users are located."
  }, {
    heading: "enable-chat",
    content: "Once Chat is enabled, you are redirected to the Chat config page."
  }, {
    heading: "enable-chat",
    content: "Enable the advanced Chat features based on your business requirements."
  }, {
    heading: "enable-chat",
    content: "For details about these advanced features, see the following:"
  }, {
    heading: "enable-chat",
    content: "Message Callback"
  }, {
    heading: "enable-chat",
    content: "Message Recall"
  }, {
    heading: "enable-chat",
    content: "Message Thread"
  }, {
    heading: "enable-chat",
    content: "Reaction"
  }, {
    heading: "enable-chat",
    content: "Offline Message Push (Advanced)"
  }, {
    heading: "enable-chat",
    content: "Presence"
  }, {
    heading: "enable-chat",
    content: "Translation"
  }, {
    heading: "enable-chat",
    content: "Moderation"
  }, {
    heading: "get-chat-project-information",
    content: "Agora Console assigns the following information to each project that enables Chat:"
  }, {
    heading: "get-chat-project-information",
    content: "**Data Center**: Agora provides several data centers for the service in different regions, including Singapore, Frankfurt (Germany), and Virginia (USA). After the plan is changed, the data center remains unchanged."
  }, {
    heading: "get-chat-project-information",
    content: "**AppKey**: The unique identifier that Chat assigns to each app. The **AppKey** is of the form `${OrgName}#{AppName}`."
  }, {
    heading: "get-chat-project-information",
    content: "The **AppKey** is not the same as your project App ID. You can get your **AppKey** from the Chat configuration section of Agora Console."
  }, {
    heading: "get-chat-project-information",
    content: "**OrgName**: The unique identifier that Chat assigns to each enterprise (organization)."
  }, {
    heading: "get-chat-project-information",
    content: "**AppName**: The name that Chat assigns to each app. Each app under the same enterprise (organization) must have a unique App Name."
  }, {
    heading: "get-chat-project-information",
    content: "**API request url**: The domain of the WebSocket and RESTful API request that Agora assigns to each project."
  }, {
    heading: "get-chat-project-information",
    content: "Follow these steps to get the project information:"
  }, {
    heading: "get-chat-project-information",
    content: "Find your Chat-enabled project on the Project Management page on Agora Console and click **Config**."
  }, {
    heading: "get-chat-project-information",
    content: "On the project edit page, find **Chat** and click **Config**."
  }, {
    heading: "get-chat-project-information",
    content: "On the Chat config page, get the values of **Data Center**, **AppKey**, **OrgName**, **AppName**, **WebSocket Address**, and **REST API**."
  }, {
    heading: "manage-users-and-generate-tokens",
    content: "For development purposes, Agora enables you to manage users and generate Chat user authentication tokens using Agora Console. In a production environment, you use the RESTful API to manage users and a token server to generate user authentication tokens."
  }, {
    heading: "manage-users-and-generate-tokens",
    content: "This section shows you how to register Chat users and generate temporary tokens using Agora Console."
  }, {
    heading: "register-a-user",
    content: "To register a user, do the following:"
  }, {
    heading: "register-a-user",
    content: "On the **Project Management** page, click **Config** for the project that you want to use."
  }, {
    heading: "register-a-user",
    content: "On the **Edit Project** page, click **Config** next to **Chat** below **Features**."
  }, {
    heading: "register-a-user",
    content: "In the left-navigation pane, select **Operation Management** > **User** and click **Create User**."
  }, {
    heading: "register-a-user",
    content: "In the **Create User** dialog box, fill in the **User ID**, **Nickname**, and **Password**, and click **Save** to create a user."
  }, {
    heading: "generate-an-app-token",
    content: "In the **Data Center** section of the **Application Information** page, click **Generate** next to **Chat App Temp Token** to generate a token with app privileges."
  }, {
    heading: "generate-a-user-token",
    content: "To ensure communication security, Agora recommends using tokens to authenticate users who log in to Chat."
  }, {
    heading: "generate-a-user-token",
    content: "For testing purposes, Agora Console supports generating temporary tokens for Chat. To generate a user token, do the following:"
  }, {
    heading: "generate-a-user-token",
    content: "On the **Project Management** page, click **Config** for the project that you want to use."
  }, {
    heading: "generate-a-user-token",
    content: "On the **Edit Project** page, click **Config** next to **Chat** below **Features**."
  }, {
    heading: "generate-a-user-token",
    content: "In the **Data Center** section of the **Application Information** page, enter the user ID in the **Chat User Temp Token** box and click **Generate** to generate a token with user privileges."
  }, {
    heading: "change-the-chat-plan",
    content: "Log in to the Agora Console."
  }, {
    heading: "change-the-chat-plan",
    content: "In the left navigation bar, click **Package**."
  }, {
    heading: "change-the-chat-plan",
    content: "On the **Subscribe** tab, you can change your Chat plan by clicking **Subscribe** next to the desired plan."
  }, {
    heading: "change-the-chat-plan",
    content: "**Note:**"
  }, {
    heading: "change-the-chat-plan",
    content: "The plan change takes effect immediately."
  }, {
    heading: "change-the-chat-plan",
    content: "Agora doesn't recommend plan downgrading, as it could impact the capacity of your applications and availability of certain features."
  }, {
    heading: "disable-chat",
    content: "Log in to the Agora Console."
  }, {
    heading: "disable-chat",
    content: "In the left navigation bar, click **Project Management** and click **Config** for the project that you want to use."
  }, {
    heading: "disable-chat",
    content: "In the **Features** section of the **Edit Project** page, click **Enable/Configure** next to **Chat**."
  }, {
    heading: "disable-chat",
    content: "On the **Application Information** page, disable Chat in the **Chat Service Status** section."
  }, {
    heading: "disable-chat",
    content: "**Note:** When you disable Chat, the Chat-related data is still stored in the Chat data center, and you are still charged for the plan activation fee."
  }, {
    heading: "unsubscribe-chat",
    content: "Before unsubscribing Chat, disable all projects that have Chat enabled."
  }, {
    heading: "unsubscribe-chat",
    content: "Log in to the Agora Console."
  }, {
    heading: "unsubscribe-chat",
    content: "In the left navigation bar, click **Package**."
  }, {
    heading: "unsubscribe-chat",
    content: "On the **Subscribe** tab, scroll down to the bottom and click **Unsubscribe**."
  }, {
    heading: "unsubscribe-chat",
    content: "**Note:**"
  }, {
    heading: "unsubscribe-chat",
    content: "When you unsubscribe Chat:"
  }, {
    heading: "unsubscribe-chat",
    content: "All Chat-related data is purged."
  }, {
    heading: "unsubscribe-chat",
    content: "You are still billed with a pro-rated monthly fee and the usage that occurred during that month."
  }, {
    heading: "next-steps",
    content: "After enabling and configuring Chat, the Chat-related features in Agora Analytics are enabled by default to help you keep track of usage trends and quality details. For more information, see Data Insights and Data Metrics."
  }],
  headings: [{
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "enable-chat",
    content: "Enable Chat"
  }, {
    id: "get-chat-project-information",
    content: "Get Chat project information"
  }, {
    id: "manage-users-and-generate-tokens",
    content: "Manage users and generate tokens"
  }, {
    id: "register-a-user",
    content: "Register a user"
  }, {
    id: "generate-an-app-token",
    content: "Generate an app token"
  }, {
    id: "generate-a-user-token",
    content: "Generate a user token"
  }, {
    id: "change-the-chat-plan",
    content: "Change the Chat plan"
  }, {
    id: "disable-chat",
    content: "Disable Chat"
  }, {
    id: "unsubscribe-chat",
    content: "Unsubscribe Chat"
  }, {
    id: "next-steps",
    content: "Next steps"
  }]
};
export let toc = [{
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#enable-chat",
  title: _jsx(_Fragment, {
    children: "Enable Chat"
  })
}, {
  depth: 2,
  url: "#get-chat-project-information",
  title: _jsx(_Fragment, {
    children: "Get Chat project information"
  })
}, {
  depth: 2,
  url: "#manage-users-and-generate-tokens",
  title: _jsx(_Fragment, {
    children: "Manage users and generate tokens"
  })
}, {
  depth: 3,
  url: "#register-a-user",
  title: _jsx(_Fragment, {
    children: "Register a user"
  })
}, {
  depth: 3,
  url: "#generate-an-app-token",
  title: _jsx(_Fragment, {
    children: "Generate an app token"
  })
}, {
  depth: 3,
  url: "#generate-a-user-token",
  title: _jsx(_Fragment, {
    children: "Generate a user token"
  })
}, {
  depth: 2,
  url: "#change-the-chat-plan",
  title: _jsx(_Fragment, {
    children: "Change the Chat plan"
  })
}, {
  depth: 2,
  url: "#disable-chat",
  title: _jsx(_Fragment, {
    children: "Disable Chat"
  })
}, {
  depth: 2,
  url: "#unsubscribe-chat",
  title: _jsx(_Fragment, {
    children: "Unsubscribe Chat"
  })
}, {
  depth: 2,
  url: "#next-steps",
  title: _jsx(_Fragment, {
    children: "Next steps"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["Before using Chat, you need to enable and configure it through ", _jsx(_components.a, {
        href: "https://console.agora.io/",
        children: "Agora Console"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "To enable Chat, make sure that you have the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["A valid ", _jsx(_components.a, {
          href: "/en/introduction/account#sign-up-for-an-agora-account",
          children: "Agora account"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["An ", _jsx(_components.a, {
          href: "/en/introduction/account#your-first-agora-project",
          children: "Agora project"
        }), " that uses  ", _jsx(_components.strong, {
          children: "App ID"
        }), " and ", _jsx(_components.strong, {
          children: "Token"
        }), " for authentication."]
      }), `
`, _jsxs(_components.li, {
        children: ["A Chat pricing plan. For details on how to subscribe, see ", _jsx(_components.a, {
          href: "/en/realtime-media/im/reference/pricing#subscribe-to-the-pricing-plan",
          children: "Subscribe to the pricing plan"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "enable-chat",
      children: "Enable Chat"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Log in to the ", _jsx(_components.a, {
            href: "https://console.agora.io/",
            children: "Agora Console"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the left navigation bar, click ", _jsx(_components.strong, {
            children: "Project Management"
          }), " and click ", _jsx(_components.strong, {
            children: "Config"
          }), " for the project that you want to use."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the ", _jsx(_components.strong, {
            children: "Features"
          }), " section of the ", _jsx(_components.strong, {
            children: "Edit Project"
          }), " page, click ", _jsx(_components.strong, {
            children: "Enable"
          }), " next to ", _jsx(_components.strong, {
            children: "Chat"
          }), " to enable Chat."]
        }), `
`, _jsx(_components.p, {
          children: "If this is your first Chat project, select and subscribe to a Chat package:"
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/im/subscribe.png",
            alt: ""
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Select a data center closest to where most of your end users are located."
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1665386519450",
            alt: "img"
          })
        }), `
`, _jsx(_components.p, {
          children: "Once Chat is enabled, you are redirected to the Chat config page."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Enable the advanced Chat features based on your business requirements."
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/im/chat_feature_overview.png",
            alt: ""
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "For details about these advanced features, see the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/im/build/notifications-and-event-handling/setup-webhooks",
          children: "Message Callback"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/im/build/build-core-messaging/messages/send-receive-messages#recall-a-message",
          children: "Message Recall"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/im/build/build-groups-rooms-and-threads/threading/thread-management",
          children: "Message Thread"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/im/build/build-core-messaging/reaction",
          children: "Reaction"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/im/build/notifications-and-event-handling/offline-push/overview",
          children: "Offline Message Push (Advanced)"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/im/build/build-core-messaging/presence",
          children: "Presence"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/im/build/build-core-messaging/messages/translate-messages",
          children: "Translation"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/im/build/moderate-and-manage-client-behavior/moderation-mechanism",
          children: "Moderation"
        })
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "get-chat-project-information",
      children: "Get Chat project information"
    }), `
`, _jsx(_components.p, {
      children: "Agora Console assigns the following information to each project that enables Chat:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Data Center"
        }), ": Agora provides several data centers for the service in different regions, including Singapore, Frankfurt (Germany), and Virginia (USA). After the plan is changed, the data center remains unchanged."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "AppKey"
        }), ": The unique identifier that Chat assigns to each app. The ", _jsx(_components.strong, {
          children: "AppKey"
        }), " is of the form ", _jsx(_components.code, {
          children: "${OrgName}#{AppName}"
        }), ".", `
`, _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["The ", _jsx(_components.strong, {
                children: "AppKey"
              }), " is not the same as your project App ID. You can get your ", _jsx(_components.strong, {
                children: "AppKey"
              }), " from the Chat configuration section of Agora Console."]
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "OrgName"
        }), ": The unique identifier that Chat assigns to each enterprise (organization)."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "AppName"
        }), ": The name that Chat assigns to each app. Each app under the same enterprise (organization) must have a unique App Name."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "API request url"
        }), ": The domain of the WebSocket and RESTful API request that Agora assigns to each project."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Follow these steps to get the project information:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Find your Chat-enabled project on the ", _jsx(_components.a, {
          href: "https://console.agora.io/legacy/project-management",
          children: "Project Management"
        }), " page on Agora Console and click ", _jsx(_components.strong, {
          children: "Config"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["On the project edit page, find ", _jsx(_components.strong, {
          children: "Chat"
        }), " and click ", _jsx(_components.strong, {
          children: "Config"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["On the Chat config page, get the values of ", _jsx(_components.strong, {
          children: "Data Center"
        }), ", ", _jsx(_components.strong, {
          children: "AppKey"
        }), ", ", _jsx(_components.strong, {
          children: "OrgName"
        }), ", ", _jsx(_components.strong, {
          children: "AppName"
        }), ", ", _jsx(_components.strong, {
          children: "WebSocket Address"
        }), ", and ", _jsx(_components.strong, {
          children: "REST API"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "manage-users-and-generate-tokens",
      children: "Manage users and generate tokens"
    }), `
`, _jsxs(_components.p, {
      children: ["For development purposes, Agora enables you to manage users and generate Chat user authentication tokens using Agora Console. In a production environment, you use the ", _jsx(_components.a, {
        href: "/en/api-reference/api-ref/im/user-system-registration",
        children: "RESTful API"
      }), " to manage users and a token server to ", _jsx(_components.a, {
        href: "/en/realtime-media/im/build/secure-access-and-authentication/authentication",
        children: "generate user authentication tokens"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "This section shows you how to register Chat users and generate temporary tokens using Agora Console."
    }), `
`, _jsx(_components.h3, {
      id: "register-a-user",
      children: "Register a user"
    }), `
`, _jsx(_components.p, {
      children: "To register a user, do the following:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the ", _jsx(_components.strong, {
            children: "Project Management"
          }), " page, click ", _jsx(_components.strong, {
            children: "Config"
          }), " for the project that you want to use."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1664531061644",
            alt: ""
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the ", _jsx(_components.strong, {
            children: "Edit Project"
          }), " page, click ", _jsx(_components.strong, {
            children: "Config"
          }), " next to ", _jsx(_components.strong, {
            children: "Chat"
          }), " below ", _jsx(_components.strong, {
            children: "Features"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1664531091562",
            alt: ""
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the left-navigation pane, select ", _jsx(_components.strong, {
            children: "Operation Management"
          }), " > ", _jsx(_components.strong, {
            children: "User"
          }), " and click ", _jsx(_components.strong, {
            children: "Create User"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1664531141100",
            alt: ""
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the ", _jsx(_components.strong, {
            children: "Create User"
          }), " dialog box, fill in the ", _jsx(_components.strong, {
            children: "User ID"
          }), ", ", _jsx(_components.strong, {
            children: "Nickname"
          }), ", and ", _jsx(_components.strong, {
            children: "Password"
          }), ", and click ", _jsx(_components.strong, {
            children: "Save"
          }), " to create a user."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1664531162872",
            alt: ""
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "generate-an-app-token",
      children: "Generate an app token"
    }), `
`, _jsxs(_components.p, {
      children: ["In the ", _jsx(_components.strong, {
        children: "Data Center"
      }), " section of the ", _jsx(_components.strong, {
        children: "Application Information"
      }), " page, click ", _jsx(_components.strong, {
        children: "Generate"
      }), " next to ", _jsx(_components.strong, {
        children: "Chat App Temp Token"
      }), " to generate a token with app privileges."]
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "![token_generate_app_token](https://assets-docs.agora.io/images/im/token_generate_app_token.png)"
            })
          })
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "generate-a-user-token",
      children: "Generate a user token"
    }), `
`, _jsx(_components.p, {
      children: "To ensure communication security, Agora recommends using tokens to authenticate users who log in to Chat."
    }), `
`, _jsx(_components.p, {
      children: "For testing purposes, Agora Console supports generating temporary tokens for Chat. To generate a user token, do the following:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the ", _jsx(_components.strong, {
            children: "Project Management"
          }), " page, click ", _jsx(_components.strong, {
            children: "Config"
          }), " for the project that you want to use."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1664531061644",
            alt: ""
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the ", _jsx(_components.strong, {
            children: "Edit Project"
          }), " page, click ", _jsx(_components.strong, {
            children: "Config"
          }), " next to ", _jsx(_components.strong, {
            children: "Chat"
          }), " below ", _jsx(_components.strong, {
            children: "Features"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1664531091562",
            alt: ""
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the ", _jsx(_components.strong, {
            children: "Data Center"
          }), " section of the ", _jsx(_components.strong, {
            children: "Application Information"
          }), " page, enter the ", _jsx(_components.a, {
            href: "#userid",
            children: "user ID"
          }), " in the ", _jsx(_components.strong, {
            children: "Chat User Temp Token"
          }), " box and click ", _jsx(_components.strong, {
            children: "Generate"
          }), " to generate a token with user privileges."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1664531214169",
            alt: ""
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "change-the-chat-plan",
      children: "Change the Chat plan"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Log in to the ", _jsx(_components.a, {
            href: "https://console.agora.io/",
            children: "Agora Console"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the left navigation bar, click ", _jsx(_components.strong, {
            children: "Package"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the ", _jsx(_components.strong, {
            children: "Subscribe"
          }), " tab, you can change your Chat plan by clicking ", _jsx(_components.strong, {
            children: "Subscribe"
          }), " next to the desired plan."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1665389469534",
            alt: "img"
          })
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Note:"
          })
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "The plan change takes effect immediately."
          }), `
`, _jsx(_components.li, {
            children: "Agora doesn't recommend plan downgrading, as it could impact the capacity of your applications and availability of certain features."
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "disable-chat",
      children: "Disable Chat"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Log in to the ", _jsx(_components.a, {
            href: "https://console.agora.io/",
            children: "Agora Console"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the left navigation bar, click ", _jsx(_components.strong, {
            children: "Project Management"
          }), " and click ", _jsx(_components.strong, {
            children: "Config"
          }), " for the project that you want to use."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the ", _jsx(_components.strong, {
            children: "Features"
          }), " section of the ", _jsx(_components.strong, {
            children: "Edit Project"
          }), " page, click ", _jsx(_components.strong, {
            children: "Enable/Configure"
          }), " next to ", _jsx(_components.strong, {
            children: "Chat"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the ", _jsx(_components.strong, {
            children: "Application Information"
          }), " page, disable Chat in the ", _jsx(_components.strong, {
            children: "Chat Service Status"
          }), " section."]
        }), `
`, _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Note:"
          }), " When you disable Chat, the Chat-related data is still stored in the Chat data center, and you are still charged for the plan activation fee."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1665387330975",
            alt: "img"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "unsubscribe-chat",
      children: "Unsubscribe Chat"
    }), `
`, _jsx(_components.p, {
      children: "Before unsubscribing Chat, disable all projects that have Chat enabled."
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Log in to the ", _jsx(_components.a, {
            href: "https://console.agora.io/",
            children: "Agora Console"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the left navigation bar, click ", _jsx(_components.strong, {
            children: "Package"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["On the ", _jsx(_components.strong, {
            children: "Subscribe"
          }), " tab, scroll down to the bottom and click ", _jsx(_components.strong, {
            children: "Unsubscribe"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1665389814916",
            alt: "img"
          })
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Note:"
          })
        }), `
`, _jsx(_components.p, {
          children: "When you unsubscribe Chat:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "All Chat-related data is purged."
          }), `
`, _jsx(_components.li, {
            children: "You are still billed with a pro-rated monthly fee and the usage that occurred during that month."
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "next-steps",
      children: "Next steps"
    }), `
`, _jsxs(_components.p, {
      children: ["After enabling and configuring Chat, the Chat-related features in Agora Analytics are enabled by default to help you keep track of usage trends and quality details. For more information, see ", _jsx(_components.a, {
        href: "/en/realtime-media/im/reference/console/data-insights",
        children: "Data Insights"
      }), " and ", _jsx(_components.a, {
        href: "/en/realtime-media/im/reference/console/data-metrics",
        children: "Data Metrics"
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
