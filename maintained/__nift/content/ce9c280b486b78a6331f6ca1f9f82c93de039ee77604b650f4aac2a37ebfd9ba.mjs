import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Members & Roles",
  description: "Add members, assign teams, and manage permissions in Agora Console."
};
export let _markdown = `

## Manage members and teams [#manage-members-and-teams]

Once you add members to your Agora account, you are assigned to the **Admin** team and can add these members to different teams with specified permissions.

### Add a member [#add-a-member]

1. Log in to Agora Console, click your account name in the top-right corner, and click **Settings**.
2. In the left navigation panel, click **Teams and members**, then select the **Members** tab.
3. Click **Add New Member**, fill in the email address of the new member, and choose a team from the dropdown.
4. Click **OK**.
5. Agora sends a confirmation email to this address. The new member must follow the instructions in the email to finish joining the project.

### Manage members [#manage-members]

On the **Teams and members** page, **Members** tab, you can do the following:

* Change the team that a member belongs to.
* Delete a member.

Only the main account can delete a member account. Member accounts assigned to the **Admin** team cannot delete a member account.

### Manage teams and permissions [#manage-teams-and-permissions]

On the **Teams and members** page, **Teams** tab, you can view the permissions assigned to teams. Agora predefines the following teams:

* **Admin**: full access to all projects; can view usage data and finance information, manage members and teams, manage projects, and view Analytics reports.
* **Finance**: can view finance information for all projects.
* **Product/Operation**: can view usage data for all projects.
* **CS/Maintenance**: can view Analytics reports for all projects.
* **Engineer**: can manage projects and view Analytics reports for all projects.

### Add a custom team [#add-a-custom-team]

1. On the **Teams and Members** page, **Teams** tab, click **Add New Team**.
2. Fill in the team name.
3. Select the permissions of this team in the **Usage**, **Finance**, **Teams and Members**, **Project**, **Analytics**, and **Data** columns.
4. Click **OK**.
`;
export let structuredData = {
  contents: [{
    heading: "manage-members-and-teams",
    content: "Once you add members to your Agora account, you are assigned to the **Admin** team and can add these members to different teams with specified permissions."
  }, {
    heading: "add-a-member",
    content: "Log in to Agora Console, click your account name in the top-right corner, and click **Settings**."
  }, {
    heading: "add-a-member",
    content: "In the left navigation panel, click **Teams and members**, then select the **Members** tab."
  }, {
    heading: "add-a-member",
    content: "Click **Add New Member**, fill in the email address of the new member, and choose a team from the dropdown."
  }, {
    heading: "add-a-member",
    content: "Click **OK**."
  }, {
    heading: "add-a-member",
    content: "Agora sends a confirmation email to this address. The new member must follow the instructions in the email to finish joining the project."
  }, {
    heading: "manage-members",
    content: "On the **Teams and members** page, **Members** tab, you can do the following:"
  }, {
    heading: "manage-members",
    content: "Change the team that a member belongs to."
  }, {
    heading: "manage-members",
    content: "Delete a member."
  }, {
    heading: "manage-members",
    content: "Only the main account can delete a member account. Member accounts assigned to the **Admin** team cannot delete a member account."
  }, {
    heading: "manage-teams-and-permissions",
    content: "On the **Teams and members** page, **Teams** tab, you can view the permissions assigned to teams. Agora predefines the following teams:"
  }, {
    heading: "manage-teams-and-permissions",
    content: "**Admin**: full access to all projects; can view usage data and finance information, manage members and teams, manage projects, and view Analytics reports."
  }, {
    heading: "manage-teams-and-permissions",
    content: "**Finance**: can view finance information for all projects."
  }, {
    heading: "manage-teams-and-permissions",
    content: "**Product/Operation**: can view usage data for all projects."
  }, {
    heading: "manage-teams-and-permissions",
    content: "**CS/Maintenance**: can view Analytics reports for all projects."
  }, {
    heading: "manage-teams-and-permissions",
    content: "**Engineer**: can manage projects and view Analytics reports for all projects."
  }, {
    heading: "add-a-custom-team",
    content: "On the **Teams and Members** page, **Teams** tab, click **Add New Team**."
  }, {
    heading: "add-a-custom-team",
    content: "Fill in the team name."
  }, {
    heading: "add-a-custom-team",
    content: "Select the permissions of this team in the **Usage**, **Finance**, **Teams and Members**, **Project**, **Analytics**, and **Data** columns."
  }, {
    heading: "add-a-custom-team",
    content: "Click **OK**."
  }],
  headings: [{
    id: "manage-members-and-teams",
    content: "Manage members and teams"
  }, {
    id: "add-a-member",
    content: "Add a member"
  }, {
    id: "manage-members",
    content: "Manage members"
  }, {
    id: "manage-teams-and-permissions",
    content: "Manage teams and permissions"
  }, {
    id: "add-a-custom-team",
    content: "Add a custom team"
  }]
};
export let toc = [{
  depth: 2,
  url: "#manage-members-and-teams",
  title: _jsx(_Fragment, {
    children: "Manage members and teams"
  })
}, {
  depth: 3,
  url: "#add-a-member",
  title: _jsx(_Fragment, {
    children: "Add a member"
  })
}, {
  depth: 3,
  url: "#manage-members",
  title: _jsx(_Fragment, {
    children: "Manage members"
  })
}, {
  depth: 3,
  url: "#manage-teams-and-permissions",
  title: _jsx(_Fragment, {
    children: "Manage teams and permissions"
  })
}, {
  depth: 3,
  url: "#add-a-custom-team",
  title: _jsx(_Fragment, {
    children: "Add a custom team"
  })
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h2, {
      id: "manage-members-and-teams",
      children: "Manage members and teams"
    }), `
`, _jsxs(_components.p, {
      children: ["Once you add members to your Agora account, you are assigned to the ", _jsx(_components.strong, {
        children: "Admin"
      }), " team and can add these members to different teams with specified permissions."]
    }), `
`, _jsx(_components.h3, {
      id: "add-a-member",
      children: "Add a member"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Log in to Agora Console, click your account name in the top-right corner, and click ", _jsx(_components.strong, {
          children: "Settings"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["In the left navigation panel, click ", _jsx(_components.strong, {
          children: "Teams and members"
        }), ", then select the ", _jsx(_components.strong, {
          children: "Members"
        }), " tab."]
      }), `
`, _jsxs(_components.li, {
        children: ["Click ", _jsx(_components.strong, {
          children: "Add New Member"
        }), ", fill in the email address of the new member, and choose a team from the dropdown."]
      }), `
`, _jsxs(_components.li, {
        children: ["Click ", _jsx(_components.strong, {
          children: "OK"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Agora sends a confirmation email to this address. The new member must follow the instructions in the email to finish joining the project."
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "manage-members",
      children: "Manage members"
    }), `
`, _jsxs(_components.p, {
      children: ["On the ", _jsx(_components.strong, {
        children: "Teams and members"
      }), " page, ", _jsx(_components.strong, {
        children: "Members"
      }), " tab, you can do the following:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Change the team that a member belongs to."
      }), `
`, _jsx(_components.li, {
        children: "Delete a member."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["Only the main account can delete a member account. Member accounts assigned to the ", _jsx(_components.strong, {
        children: "Admin"
      }), " team cannot delete a member account."]
    }), `
`, _jsx(_components.h3, {
      id: "manage-teams-and-permissions",
      children: "Manage teams and permissions"
    }), `
`, _jsxs(_components.p, {
      children: ["On the ", _jsx(_components.strong, {
        children: "Teams and members"
      }), " page, ", _jsx(_components.strong, {
        children: "Teams"
      }), " tab, you can view the permissions assigned to teams. Agora predefines the following teams:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Admin"
        }), ": full access to all projects; can view usage data and finance information, manage members and teams, manage projects, and view Analytics reports."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Finance"
        }), ": can view finance information for all projects."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Product/Operation"
        }), ": can view usage data for all projects."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "CS/Maintenance"
        }), ": can view Analytics reports for all projects."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Engineer"
        }), ": can manage projects and view Analytics reports for all projects."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "add-a-custom-team",
      children: "Add a custom team"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["On the ", _jsx(_components.strong, {
          children: "Teams and Members"
        }), " page, ", _jsx(_components.strong, {
          children: "Teams"
        }), " tab, click ", _jsx(_components.strong, {
          children: "Add New Team"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "Fill in the team name."
      }), `
`, _jsxs(_components.li, {
        children: ["Select the permissions of this team in the ", _jsx(_components.strong, {
          children: "Usage"
        }), ", ", _jsx(_components.strong, {
          children: "Finance"
        }), ", ", _jsx(_components.strong, {
          children: "Teams and Members"
        }), ", ", _jsx(_components.strong, {
          children: "Project"
        }), ", ", _jsx(_components.strong, {
          children: "Analytics"
        }), ", and ", _jsx(_components.strong, {
          children: "Data"
        }), " columns."]
      }), `
`, _jsxs(_components.li, {
        children: ["Click ", _jsx(_components.strong, {
          children: "OK"
        }), "."]
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
