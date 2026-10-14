import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Set up a campaign",
  description: "Create and manage outbound calling campaigns with your deployed agents."
};
export let _markdown = `

Campaigns enable your deployed agents to make outbound calls to a list of contacts. Use campaigns for sales outreach, customer follow-ups, appointment reminders, surveys, and other automated calling scenarios.

## Plan your campaign [#plan-your-campaign]

Before creating a campaign, consider the following:

**What is your goal?** Define the purpose of your campaign, such as appointment confirmations, payment reminders, customer satisfaction survey, or lead qualification. This determines the agent template and prompt you should use.

**Who are you calling?** Only call contacts who have given consent to be contacted. This includes existing customers with opt-in consent, leads who requested information, or users who have an existing relationship with your business.

**When should you call?** Call during business hours in your customer's time zone. Avoid meal times and respect do-not-call hour restrictions in your region.

## How campaigns work [#how-campaigns-work]

To create a campaign, you select a deployed agent and provide a contact list. The agent calls each contact in the list using the imported phone number you specify as the caller ID. You can include [template variables](../build/prompt-design#template-variables) in your contact list. The agent references these variables during conversations through the LLM's system prompts and greeting messages.

## Prerequisites [#prerequisites]

* An [imported phone number](import) to use as caller ID. If you are using Twilio, see [Set up SIP trunk](sip-trunk) first.
* A [deployed agent](deploy-agent) configured for your use case.
* A contact list in CSV [format](#contact-list-format) with required phone numbers.

You can also add a phone number or create an agent directly from the campaign creation screen, so these don't strictly need to exist beforehand.

## Create a campaign [#create-a-campaign]

To create a new campaign:

1. In the navigation sidebar, select **Outbound Campaigns**.

   ![Create a campaign](https://assets-docs.agora.io/images/console/campaign.png)

2. Select **Create Campaign**.

   ![New campaign](https://assets-docs.agora.io/images/console/campaign-new.png)

3. Configure the campaign details:

   * **Campaign Name** (required): Enter a descriptive name to identify this campaign.
   * **AI Agent** (required): Select the deployed agent that will handle the calls, or select **Create Agent** to create one without leaving this screen.
   * **Phone number** (required): Select the imported phone number to use as the outbound caller ID, or select **Add Phone Number** to import one without leaving this screen.

4. Upload your contact list in the **Contacts List** panel. **Select File**, or drag and drop a CSV file into the upload area. See [Contact list format](#contact-list-format) for requirements. You can also download a template for the CSV file.

   <CalloutContainer type="info">
     <CalloutTitle>
       Info
     </CalloutTitle>

     <CalloutDescription>
       Maximum file size is 25 MB, with a maximum of 50,000 rows.
     </CalloutDescription>
   </CalloutContainer>

5. Configure launch timing:

   * **Launch immediately**: Start calling contacts immediately after creation.
   * **Schedule for Later**: Set a specific **Scheduled Start Time** and **Call Window** to control when your agent makes calls.

6. Configure call settings:

   ![Call settings](https://assets-docs.agora.io/images/console/campaign-call-settings.png)

   * **Max Call seconds** (required): Maximum length for a conversation.

   * **Ring seconds** (required): Maximum time to wait for call connection. The call stops ringing if not connected within the specified duration.

   * **Silence seconds**: Duration of silence before ending the call.

   * **Transcripts & Recording**

     * **Store Transcripts**: Automatically saves the conversation text for review.
     * **Store Call Recording**: Automatically saves the call audio recording for review.

   * **Hang-up Configuration**
     * **Voicemail detection**: Allows the agent to detect voicemail systems and hang up the call.
     * **End of conversation**: Hang up when the conversation naturally ends.
     * **Silence hangup**: End the call after a period of silence.
     * **Fax detection**: Allows the agent to detect fax tones and hang up the call.

   * **Transfer Call to Human**: Transfers the call to a human agent when needed or requested by the caller.

     ![Campaign Transfer Call to Human settings](https://assets-docs.agora.io/images/console/campaign-transfer-call.png)

     When enabled, configure the following:

     * **Transfer Type**: Choose **Number** or **SIP**.
     * **Transfer Destination**: Enter the destination phone number or SIP address. For example, a phone number as \`550001234\`, or in E.164 format as \`+15550001234\`.
     * **Transfer Criteria**: Describe when the agent should transfer the call to this number. Select **Show Example** for a sample description.
     * **SIP Headers**: When **Transfer Type** is **SIP**, you can add constant or dynamic SIP headers to the transfer request.

   * **Call Analysis**

     * **Post Call Data Extraction**: Automatically extracts structured outputs from calls according to your business needs.

     ![Transcripts and call analysis](https://assets-docs.agora.io/images/console/campaign-transcript-analysis.png)

7. Select **Schedule Campaign** to launch or schedule your campaign, or select **Save as Draft** to save your progress without launching it.

<CalloutContainer type="warning">
  <CalloutTitle>
    Compliance
  </CalloutTitle>

  <CalloutDescription>
    Outbound calling is subject to legal requirements that vary by region. In the United States, the Telephone Consumer Protection Act (TCPA) requires written consent for marketing calls. Always identify your business name and provide a callback number. Honor do-not-call requests immediately and respect calling hour restrictions (8 AM to 9 PM in the recipient's time zone). Consult your legal team before running large outbound campaigns.
  </CalloutDescription>
</CalloutContainer>

## Contact list format [#contact-list-format]

Your contact list must be a CSV file with the following requirements:

* \`phone_number\` (required): Phone numbers in E.164 format. For example, \`+1234567890\`.
* Add columns for variables you want to use in your agent's prompts. Column names become variable names available in your **Prompt** configuration.
* To override agent settings per contact, add columns like \`prompt_override\`.

You can download a template from the **Contacts List** panel by selecting **Download Template**.

### Sample contact list [#sample-contact-list]

The following is an example of a contact list for appointment confirmation:

\`\`\`
phone_number,name,appointment_time,preferred_language
+19168888860,John Doe,2025-01-15 10:00 AM,English
+19168888861,Jane Smith,2025-01-15 11:00 AM,Spanish
\`\`\`

In this example, the agent can reference \`{{name}}\`, \`{{appointment_time}}\`, and \`{{preferred_language}}\` in its system prompts and greeting messages when calling each contact.

## Manage campaigns [#manage-campaigns]

To view and manage your campaigns:

1. In the navigation sidebar, select **Outbound Campaigns**.
2. The Campaign page displays all your campaigns with their current status and progress.
3. Use the **Action** menu to:
   * **Edit**: Modify scheduled campaigns before they start.
   * **View Results**: Review completed campaign performance.
   * **Delete**: Remove campaigns.

## More transfer options [#more-transfer-options]

For SIP transfer setup, valid SIP destination formats, and dynamic SIP header examples, see [Transfer to SIP address and dynamic SIP headers](transfer-to-sip).

## Next steps [#next-steps]

* [Agent analytics](../observe/analytics): View performance metrics for your campaigns
* [Call History](../observe/call-history): Review individual call transcripts and outcomes
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Campaigns enable your deployed agents to make outbound calls to a list of contacts. Use campaigns for sales outreach, customer follow-ups, appointment reminders, surveys, and other automated calling scenarios."
  }, {
    heading: "plan-your-campaign",
    content: "Before creating a campaign, consider the following:"
  }, {
    heading: "plan-your-campaign",
    content: "**What is your goal?** Define the purpose of your campaign, such as appointment confirmations, payment reminders, customer satisfaction survey, or lead qualification. This determines the agent template and prompt you should use."
  }, {
    heading: "plan-your-campaign",
    content: "**Who are you calling?** Only call contacts who have given consent to be contacted. This includes existing customers with opt-in consent, leads who requested information, or users who have an existing relationship with your business."
  }, {
    heading: "plan-your-campaign",
    content: "**When should you call?** Call during business hours in your customer's time zone. Avoid meal times and respect do-not-call hour restrictions in your region."
  }, {
    heading: "how-campaigns-work",
    content: "To create a campaign, you select a deployed agent and provide a contact list. The agent calls each contact in the list using the imported phone number you specify as the caller ID. You can include template variables in your contact list. The agent references these variables during conversations through the LLM's system prompts and greeting messages."
  }, {
    heading: "prerequisites",
    content: "An imported phone number to use as caller ID. If you are using Twilio, see Set up SIP trunk first."
  }, {
    heading: "prerequisites",
    content: "A deployed agent configured for your use case."
  }, {
    heading: "prerequisites",
    content: "A contact list in CSV format with required phone numbers."
  }, {
    heading: "prerequisites",
    content: "You can also add a phone number or create an agent directly from the campaign creation screen, so these don't strictly need to exist beforehand."
  }, {
    heading: "create-a-campaign",
    content: "To create a new campaign:"
  }, {
    heading: "create-a-campaign",
    content: "In the navigation sidebar, select **Outbound Campaigns**."
  }, {
    heading: "create-a-campaign",
    content: "Select **Create Campaign**."
  }, {
    heading: "create-a-campaign",
    content: "Configure the campaign details:"
  }, {
    heading: "create-a-campaign",
    content: "**Campaign Name** (required): Enter a descriptive name to identify this campaign."
  }, {
    heading: "create-a-campaign",
    content: "**AI Agent** (required): Select the deployed agent that will handle the calls, or select **Create Agent** to create one without leaving this screen."
  }, {
    heading: "create-a-campaign",
    content: "**Phone number** (required): Select the imported phone number to use as the outbound caller ID, or select **Add Phone Number** to import one without leaving this screen."
  }, {
    heading: "create-a-campaign",
    content: "Upload your contact list in the **Contacts List** panel. **Select File**, or drag and drop a CSV file into the upload area. See Contact list format for requirements. You can also download a template for the CSV file."
  }, {
    heading: "create-a-campaign",
    content: "Maximum file size is 25 MB, with a maximum of 50,000 rows."
  }, {
    heading: "create-a-campaign",
    content: "Configure launch timing:"
  }, {
    heading: "create-a-campaign",
    content: "**Launch immediately**: Start calling contacts immediately after creation."
  }, {
    heading: "create-a-campaign",
    content: "**Schedule for Later**: Set a specific **Scheduled Start Time** and **Call Window** to control when your agent makes calls."
  }, {
    heading: "create-a-campaign",
    content: "Configure call settings:"
  }, {
    heading: "create-a-campaign",
    content: "**Max Call seconds** (required): Maximum length for a conversation."
  }, {
    heading: "create-a-campaign",
    content: "**Ring seconds** (required): Maximum time to wait for call connection. The call stops ringing if not connected within the specified duration."
  }, {
    heading: "create-a-campaign",
    content: "**Silence seconds**: Duration of silence before ending the call."
  }, {
    heading: "create-a-campaign",
    content: "**Transcripts & Recording**"
  }, {
    heading: "create-a-campaign",
    content: "**Store Transcripts**: Automatically saves the conversation text for review."
  }, {
    heading: "create-a-campaign",
    content: "**Store Call Recording**: Automatically saves the call audio recording for review."
  }, {
    heading: "create-a-campaign",
    content: "**Hang-up Configuration**"
  }, {
    heading: "create-a-campaign",
    content: "**Voicemail detection**: Allows the agent to detect voicemail systems and hang up the call."
  }, {
    heading: "create-a-campaign",
    content: "**End of conversation**: Hang up when the conversation naturally ends."
  }, {
    heading: "create-a-campaign",
    content: "**Silence hangup**: End the call after a period of silence."
  }, {
    heading: "create-a-campaign",
    content: "**Fax detection**: Allows the agent to detect fax tones and hang up the call."
  }, {
    heading: "create-a-campaign",
    content: "**Transfer Call to Human**: Transfers the call to a human agent when needed or requested by the caller."
  }, {
    heading: "create-a-campaign",
    content: "When enabled, configure the following:"
  }, {
    heading: "create-a-campaign",
    content: "**Transfer Type**: Choose **Number** or **SIP**."
  }, {
    heading: "create-a-campaign",
    content: "**Transfer Destination**: Enter the destination phone number or SIP address. For example, a phone number as `550001234`, or in E.164 format as `+15550001234`."
  }, {
    heading: "create-a-campaign",
    content: "**Transfer Criteria**: Describe when the agent should transfer the call to this number. Select **Show Example** for a sample description."
  }, {
    heading: "create-a-campaign",
    content: "**SIP Headers**: When **Transfer Type** is **SIP**, you can add constant or dynamic SIP headers to the transfer request."
  }, {
    heading: "create-a-campaign",
    content: "**Call Analysis**"
  }, {
    heading: "create-a-campaign",
    content: "**Post Call Data Extraction**: Automatically extracts structured outputs from calls according to your business needs."
  }, {
    heading: "create-a-campaign",
    content: "Select **Schedule Campaign** to launch or schedule your campaign, or select **Save as Draft** to save your progress without launching it."
  }, {
    heading: "create-a-campaign",
    content: "Outbound calling is subject to legal requirements that vary by region. In the United States, the Telephone Consumer Protection Act (TCPA) requires written consent for marketing calls. Always identify your business name and provide a callback number. Honor do-not-call requests immediately and respect calling hour restrictions (8 AM to 9 PM in the recipient's time zone). Consult your legal team before running large outbound campaigns."
  }, {
    heading: "contact-list-format",
    content: "Your contact list must be a CSV file with the following requirements:"
  }, {
    heading: "contact-list-format",
    content: "`phone_number` (required): Phone numbers in E.164 format. For example, `+1234567890`."
  }, {
    heading: "contact-list-format",
    content: "Add columns for variables you want to use in your agent's prompts. Column names become variable names available in your **Prompt** configuration."
  }, {
    heading: "contact-list-format",
    content: "To override agent settings per contact, add columns like `prompt_override`."
  }, {
    heading: "contact-list-format",
    content: "You can download a template from the **Contacts List** panel by selecting **Download Template**."
  }, {
    heading: "sample-contact-list",
    content: "The following is an example of a contact list for appointment confirmation:"
  }, {
    heading: "sample-contact-list",
    content: "In this example, the agent can reference `{{name}}`, `{{appointment_time}}`, and `{{preferred_language}}` in its system prompts and greeting messages when calling each contact."
  }, {
    heading: "manage-campaigns",
    content: "To view and manage your campaigns:"
  }, {
    heading: "manage-campaigns",
    content: "In the navigation sidebar, select **Outbound Campaigns**."
  }, {
    heading: "manage-campaigns",
    content: "The Campaign page displays all your campaigns with their current status and progress."
  }, {
    heading: "manage-campaigns",
    content: "Use the **Action** menu to:"
  }, {
    heading: "manage-campaigns",
    content: "**Edit**: Modify scheduled campaigns before they start."
  }, {
    heading: "manage-campaigns",
    content: "**View Results**: Review completed campaign performance."
  }, {
    heading: "manage-campaigns",
    content: "**Delete**: Remove campaigns."
  }, {
    heading: "more-transfer-options",
    content: "For SIP transfer setup, valid SIP destination formats, and dynamic SIP header examples, see Transfer to SIP address and dynamic SIP headers."
  }, {
    heading: "next-steps",
    content: "Agent analytics: View performance metrics for your campaigns"
  }, {
    heading: "next-steps",
    content: "Call History: Review individual call transcripts and outcomes"
  }],
  headings: [{
    id: "plan-your-campaign",
    content: "Plan your campaign"
  }, {
    id: "how-campaigns-work",
    content: "How campaigns work"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "create-a-campaign",
    content: "Create a campaign"
  }, {
    id: "contact-list-format",
    content: "Contact list format"
  }, {
    id: "sample-contact-list",
    content: "Sample contact list"
  }, {
    id: "manage-campaigns",
    content: "Manage campaigns"
  }, {
    id: "more-transfer-options",
    content: "More transfer options"
  }, {
    id: "next-steps",
    content: "Next steps"
  }]
};
export let toc = [{
  depth: 2,
  url: "#plan-your-campaign",
  title: _jsx(_Fragment, {
    children: "Plan your campaign"
  })
}, {
  depth: 2,
  url: "#how-campaigns-work",
  title: _jsx(_Fragment, {
    children: "How campaigns work"
  })
}, {
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#create-a-campaign",
  title: _jsx(_Fragment, {
    children: "Create a campaign"
  })
}, {
  depth: 2,
  url: "#contact-list-format",
  title: _jsx(_Fragment, {
    children: "Contact list format"
  })
}, {
  depth: 3,
  url: "#sample-contact-list",
  title: _jsx(_Fragment, {
    children: "Sample contact list"
  })
}, {
  depth: 2,
  url: "#manage-campaigns",
  title: _jsx(_Fragment, {
    children: "Manage campaigns"
  })
}, {
  depth: 2,
  url: "#more-transfer-options",
  title: _jsx(_Fragment, {
    children: "More transfer options"
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
  }, { CalloutContainer, CalloutDescription, CalloutTitle } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Campaigns enable your deployed agents to make outbound calls to a list of contacts. Use campaigns for sales outreach, customer follow-ups, appointment reminders, surveys, and other automated calling scenarios."
    }), `
`, _jsx(_components.h2, {
      id: "plan-your-campaign",
      children: "Plan your campaign"
    }), `
`, _jsx(_components.p, {
      children: "Before creating a campaign, consider the following:"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "What is your goal?"
      }), " Define the purpose of your campaign, such as appointment confirmations, payment reminders, customer satisfaction survey, or lead qualification. This determines the agent template and prompt you should use."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Who are you calling?"
      }), " Only call contacts who have given consent to be contacted. This includes existing customers with opt-in consent, leads who requested information, or users who have an existing relationship with your business."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "When should you call?"
      }), " Call during business hours in your customer's time zone. Avoid meal times and respect do-not-call hour restrictions in your region."]
    }), `
`, _jsx(_components.h2, {
      id: "how-campaigns-work",
      children: "How campaigns work"
    }), `
`, _jsxs(_components.p, {
      children: ["To create a campaign, you select a deployed agent and provide a contact list. The agent calls each contact in the list using the imported phone number you specify as the caller ID. You can include ", _jsx(_components.a, {
        href: "../build/prompt-design#template-variables",
        children: "template variables"
      }), " in your contact list. The agent references these variables during conversations through the LLM's system prompts and greeting messages."]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["An ", _jsx(_components.a, {
          href: "import",
          children: "imported phone number"
        }), " to use as caller ID. If you are using Twilio, see ", _jsx(_components.a, {
          href: "sip-trunk",
          children: "Set up SIP trunk"
        }), " first."]
      }), `
`, _jsxs(_components.li, {
        children: ["A ", _jsx(_components.a, {
          href: "deploy-agent",
          children: "deployed agent"
        }), " configured for your use case."]
      }), `
`, _jsxs(_components.li, {
        children: ["A contact list in CSV ", _jsx(_components.a, {
          href: "#contact-list-format",
          children: "format"
        }), " with required phone numbers."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "You can also add a phone number or create an agent directly from the campaign creation screen, so these don't strictly need to exist beforehand."
    }), `
`, _jsx(_components.h2, {
      id: "create-a-campaign",
      children: "Create a campaign"
    }), `
`, _jsx(_components.p, {
      children: "To create a new campaign:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the navigation sidebar, select ", _jsx(_components.strong, {
            children: "Outbound Campaigns"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/console/campaign.png",
            alt: "Create a campaign"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Select ", _jsx(_components.strong, {
            children: "Create Campaign"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/console/campaign-new.png",
            alt: "New campaign"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Configure the campaign details:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Campaign Name"
            }), " (required): Enter a descriptive name to identify this campaign."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "AI Agent"
            }), " (required): Select the deployed agent that will handle the calls, or select ", _jsx(_components.strong, {
              children: "Create Agent"
            }), " to create one without leaving this screen."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Phone number"
            }), " (required): Select the imported phone number to use as the outbound caller ID, or select ", _jsx(_components.strong, {
              children: "Add Phone Number"
            }), " to import one without leaving this screen."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Upload your contact list in the ", _jsx(_components.strong, {
            children: "Contacts List"
          }), " panel. ", _jsx(_components.strong, {
            children: "Select File"
          }), ", or drag and drop a CSV file into the upload area. See ", _jsx(_components.a, {
            href: "#contact-list-format",
            children: "Contact list format"
          }), " for requirements. You can also download a template for the CSV file."]
        }), `
`, _jsxs(CalloutContainer, {
          type: "info",
          children: [_jsx(CalloutTitle, {
            children: "Info"
          }), _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "Maximum file size is 25 MB, with a maximum of 50,000 rows."
            })
          })]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Configure launch timing:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Launch immediately"
            }), ": Start calling contacts immediately after creation."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Schedule for Later"
            }), ": Set a specific ", _jsx(_components.strong, {
              children: "Scheduled Start Time"
            }), " and ", _jsx(_components.strong, {
              children: "Call Window"
            }), " to control when your agent makes calls."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Configure call settings:"
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/console/campaign-call-settings.png",
            alt: "Call settings"
          })
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Max Call seconds"
              }), " (required): Maximum length for a conversation."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Ring seconds"
              }), " (required): Maximum time to wait for call connection. The call stops ringing if not connected within the specified duration."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Silence seconds"
              }), ": Duration of silence before ending the call."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Transcripts & Recording"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Store Transcripts"
                }), ": Automatically saves the conversation text for review."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Store Call Recording"
                }), ": Automatically saves the call audio recording for review."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Hang-up Configuration"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Voicemail detection"
                }), ": Allows the agent to detect voicemail systems and hang up the call."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "End of conversation"
                }), ": Hang up when the conversation naturally ends."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Silence hangup"
                }), ": End the call after a period of silence."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Fax detection"
                }), ": Allows the agent to detect fax tones and hang up the call."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Transfer Call to Human"
              }), ": Transfers the call to a human agent when needed or requested by the caller."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/console/campaign-transfer-call.png",
                alt: "Campaign Transfer Call to Human settings"
              })
            }), `
`, _jsx(_components.p, {
              children: "When enabled, configure the following:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Transfer Type"
                }), ": Choose ", _jsx(_components.strong, {
                  children: "Number"
                }), " or ", _jsx(_components.strong, {
                  children: "SIP"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Transfer Destination"
                }), ": Enter the destination phone number or SIP address. For example, a phone number as ", _jsx(_components.code, {
                  children: "550001234"
                }), ", or in E.164 format as ", _jsx(_components.code, {
                  children: "+15550001234"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Transfer Criteria"
                }), ": Describe when the agent should transfer the call to this number. Select ", _jsx(_components.strong, {
                  children: "Show Example"
                }), " for a sample description."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "SIP Headers"
                }), ": When ", _jsx(_components.strong, {
                  children: "Transfer Type"
                }), " is ", _jsx(_components.strong, {
                  children: "SIP"
                }), ", you can add constant or dynamic SIP headers to the transfer request."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Call Analysis"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Post Call Data Extraction"
                }), ": Automatically extracts structured outputs from calls according to your business needs."]
              }), `
`]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/console/campaign-transcript-analysis.png",
                alt: "Transcripts and call analysis"
              })
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Select ", _jsx(_components.strong, {
            children: "Schedule Campaign"
          }), " to launch or schedule your campaign, or select ", _jsx(_components.strong, {
            children: "Save as Draft"
          }), " to save your progress without launching it."]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "warning",
      children: [_jsx(CalloutTitle, {
        children: "Compliance"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Outbound calling is subject to legal requirements that vary by region. In the United States, the Telephone Consumer Protection Act (TCPA) requires written consent for marketing calls. Always identify your business name and provide a callback number. Honor do-not-call requests immediately and respect calling hour restrictions (8 AM to 9 PM in the recipient's time zone). Consult your legal team before running large outbound campaigns."
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "contact-list-format",
      children: "Contact list format"
    }), `
`, _jsx(_components.p, {
      children: "Your contact list must be a CSV file with the following requirements:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "phone_number"
        }), " (required): Phone numbers in E.164 format. For example, ", _jsx(_components.code, {
          children: "+1234567890"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Add columns for variables you want to use in your agent's prompts. Column names become variable names available in your ", _jsx(_components.strong, {
          children: "Prompt"
        }), " configuration."]
      }), `
`, _jsxs(_components.li, {
        children: ["To override agent settings per contact, add columns like ", _jsx(_components.code, {
          children: "prompt_override"
        }), "."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["You can download a template from the ", _jsx(_components.strong, {
        children: "Contacts List"
      }), " panel by selecting ", _jsx(_components.strong, {
        children: "Download Template"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "sample-contact-list",
      children: "Sample contact list"
    }), `
`, _jsx(_components.p, {
      children: "The following is an example of a contact list for appointment confirmation:"
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
              children: "phone_number,name,appointment_time,preferred_language"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "+19168888860,John Doe,2025-01-15 10:00 AM,English"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "+19168888861,Jane Smith,2025-01-15 11:00 AM,Spanish"
            })
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["In this example, the agent can reference ", _jsx(_components.code, {
        children: "{{name}}"
      }), ", ", _jsx(_components.code, {
        children: "{{appointment_time}}"
      }), ", and ", _jsx(_components.code, {
        children: "{{preferred_language}}"
      }), " in its system prompts and greeting messages when calling each contact."]
    }), `
`, _jsx(_components.h2, {
      id: "manage-campaigns",
      children: "Manage campaigns"
    }), `
`, _jsx(_components.p, {
      children: "To view and manage your campaigns:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["In the navigation sidebar, select ", _jsx(_components.strong, {
          children: "Outbound Campaigns"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "The Campaign page displays all your campaigns with their current status and progress."
      }), `
`, _jsxs(_components.li, {
        children: ["Use the ", _jsx(_components.strong, {
          children: "Action"
        }), " menu to:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Edit"
            }), ": Modify scheduled campaigns before they start."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "View Results"
            }), ": Review completed campaign performance."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Delete"
            }), ": Remove campaigns."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "more-transfer-options",
      children: "More transfer options"
    }), `
`, _jsxs(_components.p, {
      children: ["For SIP transfer setup, valid SIP destination formats, and dynamic SIP header examples, see ", _jsx(_components.a, {
        href: "transfer-to-sip",
        children: "Transfer to SIP address and dynamic SIP headers"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "next-steps",
      children: "Next steps"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../observe/analytics",
          children: "Agent analytics"
        }), ": View performance metrics for your campaigns"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "../observe/call-history",
          children: "Call History"
        }), ": Review individual call transcripts and outcomes"]
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
