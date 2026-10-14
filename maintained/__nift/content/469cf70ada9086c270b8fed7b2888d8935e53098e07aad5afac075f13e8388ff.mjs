import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How do I use co-host token authentication?"
};
export let _markdown = `

Co-host authentication enables you to authenticate whether a user has the privilege to publish streams in a live streaming channel. This feature helps ensure that only authorized users publish streams and prevents illegal users from exploiting business vulnerabilities or stealing tokens to bomb a live broadcast room.

## Understand the tech [#understand-the-tech]

You deploy a token server and generate tokens with the required privileges; the Agora server verifies the tokens you generate.

<CalloutContainer type="warning">
  <CalloutTitle>
    Note
  </CalloutTitle>

  <CalloutDescription>
    * Using co-host authentication requires app logic changes. Ensure that you
      read this article before enabling this function.

    * Co-host authentication applies to scenarios where the channel profile is
      set to **Live Broadcasting**.
  </CalloutDescription>
</CalloutContainer>

## Prerequisites [#prerequisites]

Before proceeding, ensure that your app meets the following requirements:

* Uses the Agora RTC SDK v2.1.0 or later.
* Uses only token-based authentication on all app clients to authenticate users. For details, see [Upgrade authentication mechanism](/en/realtime-media/rtc/build/authenticate-users/integrate-token-generation).

## Implementation [#implementation]

### Set the \`role\` parameter [#set-the-role-parameter]

This section shows you how to set the \`role\` parameter when generating a token using \`AccessToken2\`. The following code uses C++ as an example but the principles and steps remain the same if you use another programming language to build your token server.

\`\`\`cpp
#include <cstdlib>
#include <iostream>

#include "../src/RtcTokenBuilder2.h"

using namespace agora::tools;

int main(int argc, char const *argv[]) {
  (void)argc;
  (void)argv;

  // Get the value of the environment variable AGORA_APP_ID. Make sure you set this variable to your App ID obtained from Agora Console
  const char *env_app_id = getenv("AGORA_APP_ID");
  std::string app_id = env_app_id ? env_app_id : "";
  // Get the value of the environment variable AGORA_APP_CERTIFICATE. Make sure you set this variable to your App Certificate obtained from Agora Console
  const char *env_app_certificate = getenv("AGORA_APP_CERTIFICATE");
  std::string app_certificate = env_app_certificate ? env_app_certificate : "";
  // Replace channelName with the channel name you want to join
  std::string channel_name = "channelName";
  // Fill in your actual user ID
  uint32_t uid = 2882341273;
  // Token expiration time in seconds
  uint32_t token_expiration_in_seconds = 3600;
  // Privilege expiration time for all permissions in seconds
  uint32_t privilege_expiration_in_seconds = 3600;
  std::string result;

  std::cout << "App Id:" << app_id << std::endl;
  std::cout << "App Certificate:" << app_certificate << std::endl;
  if (app_id == "" || app_certificate == "") {
    std::cout << "Need to set environment variable AGORA_APP_ID and "
                "AGORA_APP_CERTIFICATE"
              << std::endl;
    return -1;
  }
  // Generate Token
  result = RtcTokenBuilder2::BuildTokenWithUid(
      app_id, app_certificate, channel_name, uid, UserRole::kRolePublisher,
      token_expiration_in_seconds, privilege_expiration_in_seconds);
  std::cout << "Token With Int Uid:" << result << std::endl;

  return 0;
}
\`\`\`

| Parameter | Description                                                                                                                                                                                             |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`role\`    | The publishing privilege of the user:- \`kRolePublisher\` (1): (Default) The user has the privilege to publish streams.
- \`kRoleSubscriber\` (2): The user does not have the privilege to publish streams. |

### Modify the app logic [#modify-the-app-logic]

Refer to the following steps to authenticate whether a user has the publishing privilege in scenarios where an audience member wants to become a host:

1. Before joining a channel, the app client applies for a token with the privilege of a subscriber. The app server generates a token and passes it to the app client.
2. The app client calls \`joinChannel\` and passes the token generated with \`kRoleSubscriber\` privilege to the SDK.
3. Before changing the user role from audience to host, the app client applies for a token with the privilege of \`kRolePublisher\`. The app server generates a second token, and passes it to the app client.
4. The app client calls \`renewToken\` and passes the new token to the SDK.
5. The app client calls \`setClientRole\` to change the user role from an audience member to a host. The Agora server authenticates the token when the app client calls \`setClientRole\`. If the token is generated with the privilege of \`kRolePublisher\`, the app client can publish streams.

   <CalloutContainer type="warning">
     <CalloutTitle>
       Note
     </CalloutTitle>

     <CalloutDescription>
       * If the user wants to switch from a host to an audience member, repeat steps 3 to 5. Apply for a token with the privilege of \`kRoleSubscriber\`, call \`renewToken\` on the app client, and then call \`setClientRole\`.

       * When the token expires, you generate a new token on the app server and call \`renewToken\` to pass the fresh token to the SDK. The new token also has a service validity period.
     </CalloutDescription>
   </CalloutContainer>

### Enable co-host authentication [#enable-co-host-authentication]

Refer to the following steps to enable co-host authentication in Agora Console:

1. In [Agora Console](https://console.agora.io), select **RTC Services** from the sidebar and find **Co-Host Authentication**.
2. Turn on the toggle, and follow the on-screen instructions. Co-host authentication takes effect in 5 minutes.

## FAQs [#faqs]

1. **Suppose a user takes the role of broadcaster. After I enable co-host authentication, will the user be able to publish streams?**

   Answer: Yes. After the token expires, you need to generate a new token with the privilege of \`kRolePublisher\`, and call \`renewToken\` to pass the new token to the SDK.

2. **Suppose a user takes the role of audience. After I enable co-host authentication, what should I do if this user wants to switch to broadcaster and publish streams?**

   Answer: Once co-host authentication is enabled, a user needs to meet both of the following requirements to publish streams:

   * The user role in \`setClientRole\` is set as **Broadcaster**.
   * The user joins the channel with a token generated by setting the \`role\` parameter in the \`buildToken\` method to \`kRolePublisher\`.

   To summarize, for an audience member to become a host and publish streams, you need to follow steps in [Modify the app logic](#modify-the-app-logic), generate a token with the privilege of a publisher, call \`renewToken\` to pass the new token to the SDK, and then call \`setClientRole\` to change the user role to broadcaster.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Co-host authentication enables you to authenticate whether a user has the privilege to publish streams in a live streaming channel. This feature helps ensure that only authorized users publish streams and prevents illegal users from exploiting business vulnerabilities or stealing tokens to bomb a live broadcast room."
  }, {
    heading: "understand-the-tech",
    content: "You deploy a token server and generate tokens with the required privileges; the Agora server verifies the tokens you generate."
  }, {
    heading: "understand-the-tech",
    content: `Using co-host authentication requires app logic changes. Ensure that you
read this article before enabling this function.`
  }, {
    heading: "understand-the-tech",
    content: `Co-host authentication applies to scenarios where the channel profile is
set to **Live Broadcasting**.`
  }, {
    heading: "prerequisites",
    content: "Before proceeding, ensure that your app meets the following requirements:"
  }, {
    heading: "prerequisites",
    content: "Uses the Agora RTC SDK v2.1.0 or later."
  }, {
    heading: "prerequisites",
    content: "Uses only token-based authentication on all app clients to authenticate users. For details, see Upgrade authentication mechanism."
  }, {
    heading: "set-the-role-parameter",
    content: "This section shows you how to set the `role` parameter when generating a token using `AccessToken2`. The following code uses C++ as an example but the principles and steps remain the same if you use another programming language to build your token server."
  }, {
    heading: "set-the-role-parameter",
    content: "Parameter"
  }, {
    heading: "set-the-role-parameter",
    content: "Description"
  }, {
    heading: "set-the-role-parameter",
    content: "`role`"
  }, {
    heading: "set-the-role-parameter",
    content: "The publishing privilege of the user:- `kRolePublisher` (1): (Default) The user has the privilege to publish streams.\n- `kRoleSubscriber` (2): The user does not have the privilege to publish streams."
  }, {
    heading: "modify-the-app-logic",
    content: "Refer to the following steps to authenticate whether a user has the publishing privilege in scenarios where an audience member wants to become a host:"
  }, {
    heading: "modify-the-app-logic",
    content: "Before joining a channel, the app client applies for a token with the privilege of a subscriber. The app server generates a token and passes it to the app client."
  }, {
    heading: "modify-the-app-logic",
    content: "The app client calls `joinChannel` and passes the token generated with `kRoleSubscriber` privilege to the SDK."
  }, {
    heading: "modify-the-app-logic",
    content: "Before changing the user role from audience to host, the app client applies for a token with the privilege of `kRolePublisher`. The app server generates a second token, and passes it to the app client."
  }, {
    heading: "modify-the-app-logic",
    content: "The app client calls `renewToken` and passes the new token to the SDK."
  }, {
    heading: "modify-the-app-logic",
    content: "The app client calls `setClientRole` to change the user role from an audience member to a host. The Agora server authenticates the token when the app client calls `setClientRole`. If the token is generated with the privilege of `kRolePublisher`, the app client can publish streams."
  }, {
    heading: "modify-the-app-logic",
    content: "If the user wants to switch from a host to an audience member, repeat steps 3 to 5. Apply for a token with the privilege of `kRoleSubscriber`, call `renewToken` on the app client, and then call `setClientRole`."
  }, {
    heading: "modify-the-app-logic",
    content: "When the token expires, you generate a new token on the app server and call `renewToken` to pass the fresh token to the SDK. The new token also has a service validity period."
  }, {
    heading: "enable-co-host-authentication",
    content: "Refer to the following steps to enable co-host authentication in Agora Console:"
  }, {
    heading: "enable-co-host-authentication",
    content: "In Agora Console, select **RTC Services** from the sidebar and find **Co-Host Authentication**."
  }, {
    heading: "enable-co-host-authentication",
    content: "Turn on the toggle, and follow the on-screen instructions. Co-host authentication takes effect in 5 minutes."
  }, {
    heading: "faqs",
    content: "**Suppose a user takes the role of broadcaster. After I enable co-host authentication, will the user be able to publish streams?**"
  }, {
    heading: "faqs",
    content: "Answer: Yes. After the token expires, you need to generate a new token with the privilege of `kRolePublisher`, and call `renewToken` to pass the new token to the SDK."
  }, {
    heading: "faqs",
    content: "**Suppose a user takes the role of audience. After I enable co-host authentication, what should I do if this user wants to switch to broadcaster and publish streams?**"
  }, {
    heading: "faqs",
    content: "Answer: Once co-host authentication is enabled, a user needs to meet both of the following requirements to publish streams:"
  }, {
    heading: "faqs",
    content: "The user role in `setClientRole` is set as **Broadcaster**."
  }, {
    heading: "faqs",
    content: "The user joins the channel with a token generated by setting the `role` parameter in the `buildToken` method to `kRolePublisher`."
  }, {
    heading: "faqs",
    content: "To summarize, for an audience member to become a host and publish streams, you need to follow steps in Modify the app logic, generate a token with the privilege of a publisher, call `renewToken` to pass the new token to the SDK, and then call `setClientRole` to change the user role to broadcaster."
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implementation",
    content: "Implementation"
  }, {
    id: "set-the-role-parameter",
    content: "Set the `role` parameter"
  }, {
    id: "modify-the-app-logic",
    content: "Modify the app logic"
  }, {
    id: "enable-co-host-authentication",
    content: "Enable co-host authentication"
  }, {
    id: "faqs",
    content: "FAQs"
  }]
};
export let toc = [{
  depth: 2,
  url: "#understand-the-tech",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#set-the-role-parameter",
  title: _jsxs(_Fragment, {
    children: ["Set the ", _jsx("code", {
      children: "role"
    }), " parameter"]
  })
}, {
  depth: 3,
  url: "#modify-the-app-logic",
  title: _jsx(_Fragment, {
    children: "Modify the app logic"
  })
}, {
  depth: 3,
  url: "#enable-co-host-authentication",
  title: _jsx(_Fragment, {
    children: "Enable co-host authentication"
  })
}, {
  depth: 2,
  url: "#faqs",
  title: _jsx(_Fragment, {
    children: "FAQs"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
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
    children: [_jsx(_components.p, {
      children: "Co-host authentication enables you to authenticate whether a user has the privilege to publish streams in a live streaming channel. This feature helps ensure that only authorized users publish streams and prevents illegal users from exploiting business vulnerabilities or stealing tokens to bomb a live broadcast room."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsx(_components.p, {
      children: "You deploy a token server and generate tokens with the required privileges; the Agora server verifies the tokens you generate."
    }), `
`, _jsxs(CalloutContainer, {
      type: "warning",
      children: [_jsx(CalloutTitle, {
        children: "Note"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: `Using co-host authentication requires app logic changes. Ensure that you
read this article before enabling this function.`
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [`Co-host authentication applies to scenarios where the channel profile is
set to `, _jsx(_components.strong, {
                children: "Live Broadcasting"
              }), "."]
            }), `
`]
          }), `
`]
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "Before proceeding, ensure that your app meets the following requirements:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Uses the Agora RTC SDK v2.1.0 or later."
      }), `
`, _jsxs(_components.li, {
        children: ["Uses only token-based authentication on all app clients to authenticate users. For details, see ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/build/authenticate-users/integrate-token-generation",
          children: "Upgrade authentication mechanism"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), `
`, _jsxs(_components.h3, {
      id: "set-the-role-parameter",
      children: ["Set the ", _jsx(_components.code, {
        children: "role"
      }), " parameter"]
    }), `
`, _jsxs(_components.p, {
      children: ["This section shows you how to set the ", _jsx(_components.code, {
        children: "role"
      }), " parameter when generating a token using ", _jsx(_components.code, {
        children: "AccessToken2"
      }), ". The following code uses C++ as an example but the principles and steps remain the same if you use another programming language to build your token server."]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "#include"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " <cstdlib>"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "#include"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " <iostream>"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "#include"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "../src/RtcTokenBuilder2.h"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "using"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " namespace"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " agora"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "::"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "tools"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " main"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: " argc"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "char"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " *"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "argv"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[]) {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  ("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")argc;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  ("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")argv;"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  // Get the value of the environment variable AGORA_APP_ID. Make sure you set this variable to your App ID obtained from Agora Console"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " char"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " *"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "env_app_id "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " getenv"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"AGORA_APP_ID"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ");"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "  std"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "::string app_id "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " env_app_id "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " env_app_id "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' ""'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  // Get the value of the environment variable AGORA_APP_CERTIFICATE. Make sure you set this variable to your App Certificate obtained from Agora Console"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " char"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " *"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "env_app_certificate "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " getenv"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"AGORA_APP_CERTIFICATE"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ");"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "  std"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "::string app_certificate "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " env_app_certificate "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " env_app_certificate "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' ""'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  // Replace channelName with the channel name you want to join"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "  std"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "::string channel_name "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "channelName"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  // Fill in your actual user ID"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  uint32_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " uid "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 2882341273"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  // Token expiration time in seconds"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  uint32_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " token_expiration_in_seconds "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 3600"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  // Privilege expiration time for all permissions in seconds"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  uint32_t"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " privilege_expiration_in_seconds "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 3600"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "  std"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "::string result;"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "  std"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "::cout "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "App Id:"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " app_id "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " std"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "::endl;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "  std"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "::cout "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "App Certificate:"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " app_certificate "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " std"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "::endl;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  if"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (app_id "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "=="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' ""'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ||"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " app_certificate "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "=="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' ""'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "    std"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "::cout "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "Need to set environment variable AGORA_APP_ID and "'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '                "AGORA_APP_CERTIFICATE"'
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "              <<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " std"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "::endl;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " -"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  // Generate Token"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  result "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " RtcTokenBuilder2"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "::"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "BuildTokenWithUid"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      app_id, app_certificate, channel_name, uid, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "UserRole"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "::kRolePublisher,"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      token_expiration_in_seconds, privilege_expiration_in_seconds);"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "  std"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "::cout "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "Token With Int Uid:"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " result "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " std"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "::endl;"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 0"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Parameter"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "role"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The publishing privilege of the user:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "kRolePublisher"
                }), " (1): (Default) The user has the privilege to publish streams."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "kRoleSubscriber"
                }), " (2): The user does not have the privilege to publish streams."]
              }), `
`]
            })]
          })]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "modify-the-app-logic",
      children: "Modify the app logic"
    }), `
`, _jsx(_components.p, {
      children: "Refer to the following steps to authenticate whether a user has the publishing privilege in scenarios where an audience member wants to become a host:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Before joining a channel, the app client applies for a token with the privilege of a subscriber. The app server generates a token and passes it to the app client."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["The app client calls ", _jsx(_components.code, {
            children: "joinChannel"
          }), " and passes the token generated with ", _jsx(_components.code, {
            children: "kRoleSubscriber"
          }), " privilege to the SDK."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Before changing the user role from audience to host, the app client applies for a token with the privilege of ", _jsx(_components.code, {
            children: "kRolePublisher"
          }), ". The app server generates a second token, and passes it to the app client."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["The app client calls ", _jsx(_components.code, {
            children: "renewToken"
          }), " and passes the new token to the SDK."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["The app client calls ", _jsx(_components.code, {
            children: "setClientRole"
          }), " to change the user role from an audience member to a host. The Agora server authenticates the token when the app client calls ", _jsx(_components.code, {
            children: "setClientRole"
          }), ". If the token is generated with the privilege of ", _jsx(_components.code, {
            children: "kRolePublisher"
          }), ", the app client can publish streams."]
        }), `
`, _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Note"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["If the user wants to switch from a host to an audience member, repeat steps 3 to 5. Apply for a token with the privilege of ", _jsx(_components.code, {
                    children: "kRoleSubscriber"
                  }), ", call ", _jsx(_components.code, {
                    children: "renewToken"
                  }), " on the app client, and then call ", _jsx(_components.code, {
                    children: "setClientRole"
                  }), "."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["When the token expires, you generate a new token on the app server and call ", _jsx(_components.code, {
                    children: "renewToken"
                  }), " to pass the fresh token to the SDK. The new token also has a service validity period."]
                }), `
`]
              }), `
`]
            })
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "enable-co-host-authentication",
      children: "Enable co-host authentication"
    }), `
`, _jsx(_components.p, {
      children: "Refer to the following steps to enable co-host authentication in Agora Console:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["In ", _jsx(_components.a, {
          href: "https://console.agora.io",
          children: "Agora Console"
        }), ", select ", _jsx(_components.strong, {
          children: "RTC Services"
        }), " from the sidebar and find ", _jsx(_components.strong, {
          children: "Co-Host Authentication"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Turn on the toggle, and follow the on-screen instructions. Co-host authentication takes effect in 5 minutes."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Suppose a user takes the role of broadcaster. After I enable co-host authentication, will the user be able to publish streams?"
          })
        }), `
`, _jsxs(_components.p, {
          children: ["Answer: Yes. After the token expires, you need to generate a new token with the privilege of ", _jsx(_components.code, {
            children: "kRolePublisher"
          }), ", and call ", _jsx(_components.code, {
            children: "renewToken"
          }), " to pass the new token to the SDK."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Suppose a user takes the role of audience. After I enable co-host authentication, what should I do if this user wants to switch to broadcaster and publish streams?"
          })
        }), `
`, _jsx(_components.p, {
          children: "Answer: Once co-host authentication is enabled, a user needs to meet both of the following requirements to publish streams:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The user role in ", _jsx(_components.code, {
              children: "setClientRole"
            }), " is set as ", _jsx(_components.strong, {
              children: "Broadcaster"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["The user joins the channel with a token generated by setting the ", _jsx(_components.code, {
              children: "role"
            }), " parameter in the ", _jsx(_components.code, {
              children: "buildToken"
            }), " method to ", _jsx(_components.code, {
              children: "kRolePublisher"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.p, {
          children: ["To summarize, for an audience member to become a host and publish streams, you need to follow steps in ", _jsx(_components.a, {
            href: "#modify-the-app-logic",
            children: "Modify the app logic"
          }), ", generate a token with the privilege of a publisher, call ", _jsx(_components.code, {
            children: "renewToken"
          }), " to pass the new token to the SDK, and then call ", _jsx(_components.code, {
            children: "setClientRole"
          }), " to change the user role to broadcaster."]
        }), `
`]
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
