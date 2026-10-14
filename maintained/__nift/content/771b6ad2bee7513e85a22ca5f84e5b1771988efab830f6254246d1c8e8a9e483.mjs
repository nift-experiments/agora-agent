import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Offline push notification extension",
  description: "Configure push functions using message extension fields."
};
export let _markdown = `

Agora Chat supports APNs and FCM push integration. When using offline push, you can configure push functions using message extension fields. For example, you can set the push title and content in a push template or configure personalized push notifications for specific users in a group.

## Push extension fields [#push-extension-fields]

\`payload.ext\` contains the following fields:

| Field                    | Type      | Description                                                                                                                                                         |
| ------------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`em_push_filter\`         | \`Object\`  | The push filter.                                                                                                                                                    |
| \`em_push_template\`       | \`Object\`  | The push template.                                                                                                                                                  |
| \`em_ignore_notification\` | \`Boolean\` | Whether to send a silent message.  - \`true\`: No notification is sent to offline users.  - \`false\`: A notification is sent to offline users.                         |
| \`em_force_notification\`  | \`Boolean\` | Whether to push notifications even if the recipient is in Do Not Disturb (DND) mode.  - \`true\`: Notifications are pushed.  - \`false\`: Notifications are not pushed. |
| \`em_apns_ext\`            | \`Object\`  | APNs push extension settings.                                                                                                                                       |
| \`em_android_push_ext\`    | \`Object\`  | Android push extension settings.                                                                                                                                    |
| \`em_push_ext\`            | \`Object\`  | Common push extension settings.                                                                                                                                     |

### \`em_push_filter\` fields [#em_push_filter-fields]

| Field                  | Type   | Description                                                               |
| ---------------------- | ------ | ------------------------------------------------------------------------- |
| \`accept_device_id\`     | \`List\` | List of device IDs that receive push notifications.                       |
| \`ignore_device_id\`     | \`List\` | List of device IDs that do not receive push notifications.                |
| \`accept_notifier_name\` | \`List\` | List of push certificates of users who receive push notifications.        |
| \`ignore_notifier_name\` | \`List\` | List of push certificates of users who do not receive push notifications. |

### \`em_push_template\` fields [#em_push_template-fields]

| Field               | Type     | Description                                                                                                                                                                                                    |
| ------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`name\`              | \`String\` | The push template name.                                                                                                                                                                                        |
| \`title_args\`        | \`List\`   | The push template title, which can include embedded parameters such as \`{$fromNickname}\` (sender's nickname).                                                                                                  |
| \`content_args\`      | \`List\`   | The push template content, which can include embedded parameters such as \`{$msg}\` (message content). If translation is enabled, both the original message and the translation appear in the push notification. |
| \`directed_template\` | \`Object\` | A targeted push template. This applies to group messages where different push notifications are sent to different users.                                                                                       |

### \`directed_template\` fields [#directed_template-fields]

| Field          | Type     | Description                                                     |
| -------------- | -------- | --------------------------------------------------------------- |
| \`target\`       | \`Array\`  | List of user IDs. User IDs must contain only lowercase letters. |
| \`name\`         | \`String\` | The push template name.                                         |
| \`title_args\`   | \`Array\`  | The push template title.                                        |
| \`content_args\` | \`Array\`  | The push template content.                                      |

### \`em_push_ext\` fields [#em_push_ext-fields]

| Field                 | Type     | Description                                                                                                                                |
| --------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| \`title\`               | \`String\` | Custom push title.                                                                                                                         |
| \`content\`             | \`String\` | Custom push content.                                                                                                                       |
| \`custom\`              | \`Object\` | User-defined extension field. Matches the \`e\` field among other parsed fields (\`t\`, \`f\`, \`m\`, and \`g\`) when receiving a push notification. |
| \`group_user_nickname\` | \`String\` | Nickname of the sender's group.                                                                                                            |
| \`type\`                | \`String\` | VoIP push notification (only applicable when APNs supports VoIP notifications).                                                            |

### \`em_apns_ext\` fields (APNs) [#em_apns_ext-fields-apns]

| Field                       | Type      | Description                                                                                                                                                                                    |
| --------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`em_push_category\`          | \`String\`  | Push notification category.                                                                                                                                                                    |
| \`em_push_mutable_content\`   | \`Boolean\` | Whether the notification supports rich text.  - \`true\`: Rich text notification.  - \`false\`: Standard notification.                                                                             |
| \`em_push_sound\`             | \`String\`  | Custom ringtone file in \`Library/Sounds/\`, such as \`appsound.caf\`.                                                                                                                             |
| \`em_push_badge\`             | \`Integer\` | Custom badge number.                                                                                                                                                                           |
| \`em_push_content_available\` | \`Integer\` | Background notification indicator. For details, see [Apple's documentation](https://developer.apple.com/documentation/usernotifications/pushing-background-updates-to-your-app?language=objc). |

### \`em_android_push_ext\` fields (Android) [#em_android_push_ext-fields-android]

| Field            | Type   | Description                                 |
| ---------------- | ------ | ------------------------------------------- |
| \`fcm_options\`    | Object | FCM SDK options.                            |
| \`fcm_channel_id\` | String | FCM channel ID (with the highest priority). |

## Example [#example]

### Push extension fields structure [#push-extension-fields-structure]

\`\`\`json
{
    "ext": {
        "em_push_filter": {
            "accept_device_id": [],
            "ignore_device_id": [],
            "accept_notifier_name": [],
            "ignore_notifier_name": []
        },
        "em_at_list": ["abc"],
        "em_push_template": {
            "name": "test6",
            "title_args": ["test1"],
            "content_args": ["{$fromNickname}", "{$msg}"]
        },
        "em_push_ext": {
            "custom": {"test": 1},
            "group_user_nickname": "happy"
        },
        "em_ignore_notification": false,
        "em_force_notification": true,
        "em_apns_ext": {
            "em_push_title": "You've got a new message",
            "em_push_content": "Please click to view",
            "em_push_category": "",
            "em_push_mutable_content": true,
            "em_push_sound": "appsound.mp3",
            "em_push_badge": 1,
            "em_push_content_available": 1
        },
        "em_android_push_ext": {
            "fcm_options": {"key": "value"},
            "fcm_channel_id": ""
        }
    }
}
\`\`\`

### Targeted push template [#targeted-push-template]

Use targeting templates to send different notifications to a specific user in a group than to other group members.

#### Step 1: Create a Push Template [#step-1-create-a-push-template]

\`\`\`json
{
    "name": "at_push_template",
    "title_pattern": "{0}",
    "content_pattern": "{0}:{1}"
}
\`\`\`

#### Step 2: Apply the template for group messages [#step-2-apply-the-template-for-group-messages]

User \`hxtest&#x60; receives the push notification &#x2A;*"Tom mentions you in the group"*&#x2A;, while other offline users receive &#x2A;*"Tom sends a message"**.

\`\`\`json
{
    "em_push_template": {
        "name": "push_template",
        "title_args": ["group name"],
        "content_args": ["Tom", "sends a message"],
        "directed_template": {
            "target": ["hxtest"],
            "name": "at_push_template",
            "title_args": ["group name"],
            "content_args": ["Tom", "mentions you in the group"]
        }
    }
}
\`\`\`

### Additional push configuration [#additional-push-configuration]

For users other than the mentioned user, you don’t need to use a template for push content. Instead, you can customize the title and content using push extension fields:

* **Title**: The name of the group.
* **Content**: A brief message indicating an action, such as "sends a message."

\`\`\`json
{
    "em_push_template": {
        "directed_template": {
            "target": ["hxtest"],
            "name": "at_push_template",
            "title_args": ["group name"],
            "content_args": ["Tom", "mentions you in the group"]
        }
    },
    "em_push_ext": {
        "title": "group name",
        "content": "sends a message",
        "type": "call"
    }
}
\`\`\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora Chat supports APNs and FCM push integration. When using offline push, you can configure push functions using message extension fields. For example, you can set the push title and content in a push template or configure personalized push notifications for specific users in a group."
  }, {
    heading: "push-extension-fields",
    content: "`payload.ext` contains the following fields:"
  }, {
    heading: "push-extension-fields",
    content: "Field"
  }, {
    heading: "push-extension-fields",
    content: "Type"
  }, {
    heading: "push-extension-fields",
    content: "Description"
  }, {
    heading: "push-extension-fields",
    content: "`em_push_filter`"
  }, {
    heading: "push-extension-fields",
    content: "`Object`"
  }, {
    heading: "push-extension-fields",
    content: "The push filter."
  }, {
    heading: "push-extension-fields",
    content: "`em_push_template`"
  }, {
    heading: "push-extension-fields",
    content: "`Object`"
  }, {
    heading: "push-extension-fields",
    content: "The push template."
  }, {
    heading: "push-extension-fields",
    content: "`em_ignore_notification`"
  }, {
    heading: "push-extension-fields",
    content: "`Boolean`"
  }, {
    heading: "push-extension-fields",
    content: "Whether to send a silent message.  - `true`: No notification is sent to offline users.  - `false`: A notification is sent to offline users."
  }, {
    heading: "push-extension-fields",
    content: "`em_force_notification`"
  }, {
    heading: "push-extension-fields",
    content: "`Boolean`"
  }, {
    heading: "push-extension-fields",
    content: "Whether to push notifications even if the recipient is in Do Not Disturb (DND) mode.  - `true`: Notifications are pushed.  - `false`: Notifications are not pushed."
  }, {
    heading: "push-extension-fields",
    content: "`em_apns_ext`"
  }, {
    heading: "push-extension-fields",
    content: "`Object`"
  }, {
    heading: "push-extension-fields",
    content: "APNs push extension settings."
  }, {
    heading: "push-extension-fields",
    content: "`em_android_push_ext`"
  }, {
    heading: "push-extension-fields",
    content: "`Object`"
  }, {
    heading: "push-extension-fields",
    content: "Android push extension settings."
  }, {
    heading: "push-extension-fields",
    content: "`em_push_ext`"
  }, {
    heading: "push-extension-fields",
    content: "`Object`"
  }, {
    heading: "push-extension-fields",
    content: "Common push extension settings."
  }, {
    heading: "em_push_filter-fields",
    content: "Field"
  }, {
    heading: "em_push_filter-fields",
    content: "Type"
  }, {
    heading: "em_push_filter-fields",
    content: "Description"
  }, {
    heading: "em_push_filter-fields",
    content: "`accept_device_id`"
  }, {
    heading: "em_push_filter-fields",
    content: "`List`"
  }, {
    heading: "em_push_filter-fields",
    content: "List of device IDs that receive push notifications."
  }, {
    heading: "em_push_filter-fields",
    content: "`ignore_device_id`"
  }, {
    heading: "em_push_filter-fields",
    content: "`List`"
  }, {
    heading: "em_push_filter-fields",
    content: "List of device IDs that do not receive push notifications."
  }, {
    heading: "em_push_filter-fields",
    content: "`accept_notifier_name`"
  }, {
    heading: "em_push_filter-fields",
    content: "`List`"
  }, {
    heading: "em_push_filter-fields",
    content: "List of push certificates of users who receive push notifications."
  }, {
    heading: "em_push_filter-fields",
    content: "`ignore_notifier_name`"
  }, {
    heading: "em_push_filter-fields",
    content: "`List`"
  }, {
    heading: "em_push_filter-fields",
    content: "List of push certificates of users who do not receive push notifications."
  }, {
    heading: "em_push_template-fields",
    content: "Field"
  }, {
    heading: "em_push_template-fields",
    content: "Type"
  }, {
    heading: "em_push_template-fields",
    content: "Description"
  }, {
    heading: "em_push_template-fields",
    content: "`name`"
  }, {
    heading: "em_push_template-fields",
    content: "`String`"
  }, {
    heading: "em_push_template-fields",
    content: "The push template name."
  }, {
    heading: "em_push_template-fields",
    content: "`title_args`"
  }, {
    heading: "em_push_template-fields",
    content: "`List`"
  }, {
    heading: "em_push_template-fields",
    content: "The push template title, which can include embedded parameters such as `{$fromNickname}` (sender's nickname)."
  }, {
    heading: "em_push_template-fields",
    content: "`content_args`"
  }, {
    heading: "em_push_template-fields",
    content: "`List`"
  }, {
    heading: "em_push_template-fields",
    content: "The push template content, which can include embedded parameters such as `{$msg}` (message content). If translation is enabled, both the original message and the translation appear in the push notification."
  }, {
    heading: "em_push_template-fields",
    content: "`directed_template`"
  }, {
    heading: "em_push_template-fields",
    content: "`Object`"
  }, {
    heading: "em_push_template-fields",
    content: "A targeted push template. This applies to group messages where different push notifications are sent to different users."
  }, {
    heading: "directed_template-fields",
    content: "Field"
  }, {
    heading: "directed_template-fields",
    content: "Type"
  }, {
    heading: "directed_template-fields",
    content: "Description"
  }, {
    heading: "directed_template-fields",
    content: "`target`"
  }, {
    heading: "directed_template-fields",
    content: "`Array`"
  }, {
    heading: "directed_template-fields",
    content: "List of user IDs. User IDs must contain only lowercase letters."
  }, {
    heading: "directed_template-fields",
    content: "`name`"
  }, {
    heading: "directed_template-fields",
    content: "`String`"
  }, {
    heading: "directed_template-fields",
    content: "The push template name."
  }, {
    heading: "directed_template-fields",
    content: "`title_args`"
  }, {
    heading: "directed_template-fields",
    content: "`Array`"
  }, {
    heading: "directed_template-fields",
    content: "The push template title."
  }, {
    heading: "directed_template-fields",
    content: "`content_args`"
  }, {
    heading: "directed_template-fields",
    content: "`Array`"
  }, {
    heading: "directed_template-fields",
    content: "The push template content."
  }, {
    heading: "em_push_ext-fields",
    content: "Field"
  }, {
    heading: "em_push_ext-fields",
    content: "Type"
  }, {
    heading: "em_push_ext-fields",
    content: "Description"
  }, {
    heading: "em_push_ext-fields",
    content: "`title`"
  }, {
    heading: "em_push_ext-fields",
    content: "`String`"
  }, {
    heading: "em_push_ext-fields",
    content: "Custom push title."
  }, {
    heading: "em_push_ext-fields",
    content: "`content`"
  }, {
    heading: "em_push_ext-fields",
    content: "`String`"
  }, {
    heading: "em_push_ext-fields",
    content: "Custom push content."
  }, {
    heading: "em_push_ext-fields",
    content: "`custom`"
  }, {
    heading: "em_push_ext-fields",
    content: "`Object`"
  }, {
    heading: "em_push_ext-fields",
    content: "User-defined extension field. Matches the `e` field among other parsed fields (`t`, `f`, `m`, and `g`) when receiving a push notification."
  }, {
    heading: "em_push_ext-fields",
    content: "`group_user_nickname`"
  }, {
    heading: "em_push_ext-fields",
    content: "`String`"
  }, {
    heading: "em_push_ext-fields",
    content: "Nickname of the sender's group."
  }, {
    heading: "em_push_ext-fields",
    content: "`type`"
  }, {
    heading: "em_push_ext-fields",
    content: "`String`"
  }, {
    heading: "em_push_ext-fields",
    content: "VoIP push notification (only applicable when APNs supports VoIP notifications)."
  }, {
    heading: "em_apns_ext-fields-apns",
    content: "Field"
  }, {
    heading: "em_apns_ext-fields-apns",
    content: "Type"
  }, {
    heading: "em_apns_ext-fields-apns",
    content: "Description"
  }, {
    heading: "em_apns_ext-fields-apns",
    content: "`em_push_category`"
  }, {
    heading: "em_apns_ext-fields-apns",
    content: "`String`"
  }, {
    heading: "em_apns_ext-fields-apns",
    content: "Push notification category."
  }, {
    heading: "em_apns_ext-fields-apns",
    content: "`em_push_mutable_content`"
  }, {
    heading: "em_apns_ext-fields-apns",
    content: "`Boolean`"
  }, {
    heading: "em_apns_ext-fields-apns",
    content: "Whether the notification supports rich text.  - `true`: Rich text notification.  - `false`: Standard notification."
  }, {
    heading: "em_apns_ext-fields-apns",
    content: "`em_push_sound`"
  }, {
    heading: "em_apns_ext-fields-apns",
    content: "`String`"
  }, {
    heading: "em_apns_ext-fields-apns",
    content: "Custom ringtone file in `Library/Sounds/`, such as `appsound.caf`."
  }, {
    heading: "em_apns_ext-fields-apns",
    content: "`em_push_badge`"
  }, {
    heading: "em_apns_ext-fields-apns",
    content: "`Integer`"
  }, {
    heading: "em_apns_ext-fields-apns",
    content: "Custom badge number."
  }, {
    heading: "em_apns_ext-fields-apns",
    content: "`em_push_content_available`"
  }, {
    heading: "em_apns_ext-fields-apns",
    content: "`Integer`"
  }, {
    heading: "em_apns_ext-fields-apns",
    content: "Background notification indicator. For details, see Apple's documentation."
  }, {
    heading: "em_android_push_ext-fields-android",
    content: "Field"
  }, {
    heading: "em_android_push_ext-fields-android",
    content: "Type"
  }, {
    heading: "em_android_push_ext-fields-android",
    content: "Description"
  }, {
    heading: "em_android_push_ext-fields-android",
    content: "`fcm_options`"
  }, {
    heading: "em_android_push_ext-fields-android",
    content: "Object"
  }, {
    heading: "em_android_push_ext-fields-android",
    content: "FCM SDK options."
  }, {
    heading: "em_android_push_ext-fields-android",
    content: "`fcm_channel_id`"
  }, {
    heading: "em_android_push_ext-fields-android",
    content: "String"
  }, {
    heading: "em_android_push_ext-fields-android",
    content: "FCM channel ID (with the highest priority)."
  }, {
    heading: "targeted-push-template",
    content: "Use targeting templates to send different notifications to a specific user in a group than to other group members."
  }, {
    heading: "step-2-apply-the-template-for-group-messages",
    content: 'User `hxtest&#x60; receives the push notification &#x2A;*"Tom mentions you in the group"*&#x2A;, while other offline users receive &#x2A;*"Tom sends a message"**.'
  }, {
    heading: "additional-push-configuration",
    content: "For users other than the mentioned user, you don’t need to use a template for push content. Instead, you can customize the title and content using push extension fields:"
  }, {
    heading: "additional-push-configuration",
    content: "**Title**: The name of the group."
  }, {
    heading: "additional-push-configuration",
    content: '**Content**: A brief message indicating an action, such as "sends a message."'
  }],
  headings: [{
    id: "push-extension-fields",
    content: "Push extension fields"
  }, {
    id: "em_push_filter-fields",
    content: "`em_push_filter` fields"
  }, {
    id: "em_push_template-fields",
    content: "`em_push_template` fields"
  }, {
    id: "directed_template-fields",
    content: "`directed_template` fields"
  }, {
    id: "em_push_ext-fields",
    content: "`em_push_ext` fields"
  }, {
    id: "em_apns_ext-fields-apns",
    content: "`em_apns_ext` fields (APNs)"
  }, {
    id: "em_android_push_ext-fields-android",
    content: "`em_android_push_ext` fields (Android)"
  }, {
    id: "example",
    content: "Example"
  }, {
    id: "push-extension-fields-structure",
    content: "Push extension fields structure"
  }, {
    id: "targeted-push-template",
    content: "Targeted push template"
  }, {
    id: "step-1-create-a-push-template",
    content: "Step 1: Create a Push Template"
  }, {
    id: "step-2-apply-the-template-for-group-messages",
    content: "Step 2: Apply the template for group messages"
  }, {
    id: "additional-push-configuration",
    content: "Additional push configuration"
  }]
};
export let toc = [{
  depth: 2,
  url: "#push-extension-fields",
  title: _jsx(_Fragment, {
    children: "Push extension fields"
  })
}, {
  depth: 3,
  url: "#em_push_filter-fields",
  title: _jsxs(_Fragment, {
    children: [_jsx("code", {
      children: "em_push_filter"
    }), " fields"]
  })
}, {
  depth: 3,
  url: "#em_push_template-fields",
  title: _jsxs(_Fragment, {
    children: [_jsx("code", {
      children: "em_push_template"
    }), " fields"]
  })
}, {
  depth: 3,
  url: "#directed_template-fields",
  title: _jsxs(_Fragment, {
    children: [_jsx("code", {
      children: "directed_template"
    }), " fields"]
  })
}, {
  depth: 3,
  url: "#em_push_ext-fields",
  title: _jsxs(_Fragment, {
    children: [_jsx("code", {
      children: "em_push_ext"
    }), " fields"]
  })
}, {
  depth: 3,
  url: "#em_apns_ext-fields-apns",
  title: _jsxs(_Fragment, {
    children: [_jsx("code", {
      children: "em_apns_ext"
    }), " fields (APNs)"]
  })
}, {
  depth: 3,
  url: "#em_android_push_ext-fields-android",
  title: _jsxs(_Fragment, {
    children: [_jsx("code", {
      children: "em_android_push_ext"
    }), " fields (Android)"]
  })
}, {
  depth: 2,
  url: "#example",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 3,
  url: "#push-extension-fields-structure",
  title: _jsx(_Fragment, {
    children: "Push extension fields structure"
  })
}, {
  depth: 3,
  url: "#targeted-push-template",
  title: _jsx(_Fragment, {
    children: "Targeted push template"
  })
}, {
  depth: 4,
  url: "#step-1-create-a-push-template",
  title: _jsx(_Fragment, {
    children: "Step 1: Create a Push Template"
  })
}, {
  depth: 4,
  url: "#step-2-apply-the-template-for-group-messages",
  title: _jsx(_Fragment, {
    children: "Step 2: Apply the template for group messages"
  })
}, {
  depth: 3,
  url: "#additional-push-configuration",
  title: _jsx(_Fragment, {
    children: "Additional push configuration"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Agora Chat supports APNs and FCM push integration. When using offline push, you can configure push functions using message extension fields. For example, you can set the push title and content in a push template or configure personalized push notifications for specific users in a group."
    }), `
`, _jsx(_components.h2, {
      id: "push-extension-fields",
      children: "Push extension fields"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "payload.ext"
      }), " contains the following fields:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Field"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "em_push_filter"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Object"
            })
          }), _jsx(_components.td, {
            children: "The push filter."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "em_push_template"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Object"
            })
          }), _jsx(_components.td, {
            children: "The push template."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "em_ignore_notification"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Boolean"
            })
          }), _jsxs(_components.td, {
            children: ["Whether to send a silent message.  - ", _jsx(_components.code, {
              children: "true"
            }), ": No notification is sent to offline users.  - ", _jsx(_components.code, {
              children: "false"
            }), ": A notification is sent to offline users."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "em_force_notification"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Boolean"
            })
          }), _jsxs(_components.td, {
            children: ["Whether to push notifications even if the recipient is in Do Not Disturb (DND) mode.  - ", _jsx(_components.code, {
              children: "true"
            }), ": Notifications are pushed.  - ", _jsx(_components.code, {
              children: "false"
            }), ": Notifications are not pushed."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "em_apns_ext"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Object"
            })
          }), _jsx(_components.td, {
            children: "APNs push extension settings."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "em_android_push_ext"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Object"
            })
          }), _jsx(_components.td, {
            children: "Android push extension settings."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "em_push_ext"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Object"
            })
          }), _jsx(_components.td, {
            children: "Common push extension settings."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.h3, {
      id: "em_push_filter-fields",
      children: [_jsx(_components.code, {
        children: "em_push_filter"
      }), " fields"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Field"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "accept_device_id"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "List"
            })
          }), _jsx(_components.td, {
            children: "List of device IDs that receive push notifications."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ignore_device_id"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "List"
            })
          }), _jsx(_components.td, {
            children: "List of device IDs that do not receive push notifications."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "accept_notifier_name"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "List"
            })
          }), _jsx(_components.td, {
            children: "List of push certificates of users who receive push notifications."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ignore_notifier_name"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "List"
            })
          }), _jsx(_components.td, {
            children: "List of push certificates of users who do not receive push notifications."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.h3, {
      id: "em_push_template-fields",
      children: [_jsx(_components.code, {
        children: "em_push_template"
      }), " fields"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Field"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "name"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "The push template name."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "title_args"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "List"
            })
          }), _jsxs(_components.td, {
            children: ["The push template title, which can include embedded parameters such as ", _jsx(_components.code, {
              children: "{$fromNickname}"
            }), " (sender's nickname)."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "content_args"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "List"
            })
          }), _jsxs(_components.td, {
            children: ["The push template content, which can include embedded parameters such as ", _jsx(_components.code, {
              children: "{$msg}"
            }), " (message content). If translation is enabled, both the original message and the translation appear in the push notification."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "directed_template"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Object"
            })
          }), _jsx(_components.td, {
            children: "A targeted push template. This applies to group messages where different push notifications are sent to different users."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.h3, {
      id: "directed_template-fields",
      children: [_jsx(_components.code, {
        children: "directed_template"
      }), " fields"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Field"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "target"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Array"
            })
          }), _jsx(_components.td, {
            children: "List of user IDs. User IDs must contain only lowercase letters."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "name"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "The push template name."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "title_args"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Array"
            })
          }), _jsx(_components.td, {
            children: "The push template title."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "content_args"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Array"
            })
          }), _jsx(_components.td, {
            children: "The push template content."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.h3, {
      id: "em_push_ext-fields",
      children: [_jsx(_components.code, {
        children: "em_push_ext"
      }), " fields"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Field"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "title"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Custom push title."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "content"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Custom push content."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "custom"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Object"
            })
          }), _jsxs(_components.td, {
            children: ["User-defined extension field. Matches the ", _jsx(_components.code, {
              children: "e"
            }), " field among other parsed fields (", _jsx(_components.code, {
              children: "t"
            }), ", ", _jsx(_components.code, {
              children: "f"
            }), ", ", _jsx(_components.code, {
              children: "m"
            }), ", and ", _jsx(_components.code, {
              children: "g"
            }), ") when receiving a push notification."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "group_user_nickname"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Nickname of the sender's group."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "type"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "VoIP push notification (only applicable when APNs supports VoIP notifications)."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.h3, {
      id: "em_apns_ext-fields-apns",
      children: [_jsx(_components.code, {
        children: "em_apns_ext"
      }), " fields (APNs)"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Field"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "em_push_category"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "Push notification category."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "em_push_mutable_content"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Boolean"
            })
          }), _jsxs(_components.td, {
            children: ["Whether the notification supports rich text.  - ", _jsx(_components.code, {
              children: "true"
            }), ": Rich text notification.  - ", _jsx(_components.code, {
              children: "false"
            }), ": Standard notification."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "em_push_sound"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsxs(_components.td, {
            children: ["Custom ringtone file in ", _jsx(_components.code, {
              children: "Library/Sounds/"
            }), ", such as ", _jsx(_components.code, {
              children: "appsound.caf"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "em_push_badge"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Integer"
            })
          }), _jsx(_components.td, {
            children: "Custom badge number."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "em_push_content_available"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Integer"
            })
          }), _jsxs(_components.td, {
            children: ["Background notification indicator. For details, see ", _jsx(_components.a, {
              href: "https://developer.apple.com/documentation/usernotifications/pushing-background-updates-to-your-app?language=objc",
              children: "Apple's documentation"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.h3, {
      id: "em_android_push_ext-fields-android",
      children: [_jsx(_components.code, {
        children: "em_android_push_ext"
      }), " fields (Android)"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Field"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "fcm_options"
            })
          }), _jsx(_components.td, {
            children: "Object"
          }), _jsx(_components.td, {
            children: "FCM SDK options."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "fcm_channel_id"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "FCM channel ID (with the highest priority)."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "example",
      children: "Example"
    }), `
`, _jsx(_components.h3, {
      id: "push-extension-fields-structure",
      children: "Push extension fields structure"
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "ext"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "em_push_filter"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "accept_device_id"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": [],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "ignore_device_id"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": [],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "accept_notifier_name"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": [],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "ignore_notifier_name"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": []"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "em_at_list"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"abc"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "em_push_template"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "name"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"test6"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "title_args"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"test1"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "content_args"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"{$fromNickname}"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"{$msg}"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "em_push_ext"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "custom"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"test"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
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
              children: "},"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "group_user_nickname"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"happy"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "em_ignore_notification"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "false"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "em_force_notification"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "em_apns_ext"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "em_push_title"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: `"You've got a new message"`
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "em_push_content"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"Please click to view"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "em_push_category"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '""'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "em_push_mutable_content"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "em_push_sound"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"appsound.mp3"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "em_push_badge"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
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
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "em_push_content_available"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "em_android_push_ext"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "fcm_options"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '"key"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"value"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "},"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "fcm_channel_id"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '""'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    }"
            })
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
`, _jsx(_components.h3, {
      id: "targeted-push-template",
      children: "Targeted push template"
    }), `
`, _jsx(_components.p, {
      children: "Use targeting templates to send different notifications to a specific user in a group than to other group members."
    }), `
`, _jsx(_components.h4, {
      id: "step-1-create-a-push-template",
      children: "Step 1: Create a Push Template"
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "name"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"at_push_template"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "title_pattern"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"{0}"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "content_pattern"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"{0}:{1}"'
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
`, _jsx(_components.h4, {
      id: "step-2-apply-the-template-for-group-messages",
      children: "Step 2: Apply the template for group messages"
    }), `
`, _jsxs(_components.p, {
      children: ["User ", _jsx(_components.code, {
        children: "hxtest"
      }), " receives the push notification ", _jsx(_components.strong, {
        children: '"Tom mentions you in the group"'
      }), ", while other offline users receive ", _jsx(_components.strong, {
        children: '"Tom sends a message"'
      }), "."]
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "em_push_template"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "name"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"push_template"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "title_args"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"group name"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "content_args"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"Tom"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"sends a message"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "directed_template"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "target"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"hxtest"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "name"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"at_push_template"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "title_args"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"group name"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "content_args"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"Tom"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"mentions you in the group"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    }"
            })
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
`, _jsx(_components.h3, {
      id: "additional-push-configuration",
      children: "Additional push configuration"
    }), `
`, _jsx(_components.p, {
      children: "For users other than the mentioned user, you don’t need to use a template for push content. Instead, you can customize the title and content using push extension fields:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Title"
        }), ": The name of the group."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Content"
        }), ': A brief message indicating an action, such as "sends a message."']
      }), `
`]
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
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "em_push_template"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "directed_template"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "target"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"hxtest"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "name"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"at_push_template"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "title_args"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"group name"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "],"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "content_args"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"Tom"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"mentions you in the group"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "em_push_ext"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "title"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"group name"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "content"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"sends a message"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "type"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"call"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    }"
            })
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
