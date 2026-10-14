import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Pricing",
  description: "Provides information on billing, fee deductions, free-of-charge policy, and account suspension for Interactive Whiteboard."
};
export let _markdown = `

This page explains how Agora calculates your monthly bill for Interactive Whiteboard.

If you have already signed a contract with Agora, the billing terms and conditions within that contract take precedence.

## Interactive Whiteboard pricing [#interactive-whiteboard-pricing]

The unit prices for whiteboard features are as follows:

| Whiteboard feature | Volume                                | Pricing per volume/month  | Pricing per PCW/month |
| ------------------ | ------------------------------------- | ------------------------- | --------------------- |
| Online whiteboard  | Under 10,000 minutes                  | Free                      | -                     |
| Online whiteboard  | 10,000 - 60,000 minutes               | $1.40 USD/1,000 minutes   | -                     |
| Online whiteboard  | 60,000 - 120,000 minutes              | $1.30 USD/1,000 minutes   | -                     |
| Online whiteboard  | 120,000 - 1,000,000 minutes           | $1.10 USD/1,000 minutes   | -                     |
| Online whiteboard  | Over 1,000,000 minutes                | Contact Agora Sales       | -                     |
| File conversion    | 0 - 1,000 images/web pages            | Free                      | $499/PCW              |
| File conversion    | Static file conversion (to image)     | $0.50 USD/1,000 images    | $499/PCW              |
| File conversion    | Dynamic file conversion (to web page) | $2.50 USD/1,000 web pages | $499/PCW              |

If your use-case involves other Agora products or services, such as the Video Calling, Signaling, or Cloud Recording, expect additional charges for these products or services. For details, see the pricing policy for each Agora product or service.

## Cost calculation [#cost-calculation]

Billing for Interactive Whiteboard begins once you enable and implement the service in your project and occurs monthly.

Agora calculates your monthly pricing by adding up the usage of each whiteboard feature in all
projects under your [Agora Account](https://console.agora.io/), subtracting your monthly free usage allowances,
multiplying each resulting usage number by the corresponding price, and adding up the cost of each feature.

The basic formulas are shown here:

**Monthly cost** = **monthly online whiteboard cost** + **monthly file conversion cost**

**Monthly feature cost*&#x2A; = **(monthly total usage - free-of-charge usage) × unit price**

### Online whiteboard usage [#online-whiteboard-usage]

The usage duration of each whiteboard room equals **the total sum of usage duration of all users** in the room.
Billing **does not start** when the room is created, but rather when users join.

For each user, Agora calculates the usage duration from when they join to when they leave the room.

Note that usage calculation will continue if live streaming has ended but users are still in the room.

To avoid additional costs, Agora recommends that you:

\`\`\`
- Call \`disconnect()\` to cut off a user's connection when the user leaves the room, and ensure that you receive the \`onPhaseChanged(disconnected)\` callback.
- Call the [Interactive Whiteboard REST API](/en/api-reference/api-ref/whiteboard/room-management#disable-a-room-patch) on your app server to move all users out of the room when live streaming ends.
\`\`\`

The usage calculation and unit price are the same whether the user joins a room in interactive mode or subscription mode.

The usage duration is calculated in minutes.

### File conversion usage [#file-conversion-usage]

Agora bills for this feature based on the model you select in [Agora Console](https://console.agora.io/): Per volume or per PCW.

#### Per volume [#per-volume]

Agora calculates the number of files converted to images/web pages per month and applies the unit prices specified in the table below. This model has a hard cap of one Peak Concurrent Worker (PCW) (running conversion task) for each conversion mode running in a server region under a single project. In other words, if you have 1 project with 1 server region, you can run 2 conversion tasks simultaneously - 1 static and 1 dynamic - while the rest are queued. If you have 3 projects, each with servers in 2 regions, you can run 6 (3 x 2) dynamic and 6 (3 x 2) static conversions simultaneously.

Agora does not charge for a failed file conversion task.
You can call the [Query file conversion progress](/en/api-reference/api-ref/whiteboard/file-conversion#query-the-progress-of-a-file-conversion-task)
API to get the result of a file conversion task.

#### Per Peak Concurrent Workers [#per-peak-concurrent-workers]

**Peak Concurrent Workers (PCW)** are the maximum number of file conversion tasks that Interactive Whiteboard servers can process simultaneously per project per server region per file conversation mode (dynamic or static). The unit pricing is per PCW per month, with an unlimited number of files that can be converted to images or web pages. If you set PCW to 2 or 3, this means you will be able to run up to 2 or 3 conversion tasks at the same time, respectively. The hard cap on the PCW used in this model is set to 5 per project, with the ability to adjust it in the [Agora Console](https://console.agora.io/).

At that, if you use less PCW during the month, Agora will bill only for the actual PCW usage. Your PCW usage depends on the frequency of requests submitted to our servers and the file size. It increases when the service is processing existing file conversion tasks and a new task is submitted.

## Examples [#examples]

This section illustrates how Agora calculates the cost for Interactive Whiteboard.

### Online whiteboard + file conversion billed per volume [#online-whiteboard--file-conversion-billed-per-volume]

Suppose user A joins a whiteboard room to give an online lecture and successfully converts a
50-page PPTX file to web pages using the file conversion feature. Another 200 users join the room to
watch the lecture. The lecture lasts 60 minutes. When the lecture ends, all users leave the room at the
same time.

The usage calculation is as follows:

| Feature                     | Usage                                                                 |
| :-------------------------- | :-------------------------------------------------------------------- |
| Online whiteboard           | - User A: 60 minutes<br />- Another 200 users: 60 × 200 minutes<br /> |
| File conversion to web page | 50 web pages                                                          |

The following table shows the calculation of the total cost of the lecture:

| Billed service              | Unit price, US$/1,000 minutes | Cost of each service, US$                                  | Total cost, US$ |
| --------------------------- | ----------------------------- | ---------------------------------------------------------- | --------------- |
| Online whiteboard           | $1.40/1,000 minutes           | (12,060 - 10,000)/1000 × 1.40 = 2.884                      | 2.89            |
| File conversion to web page | $2.50/1,000 web pages         | 0 (The first 1,000 converted web pages are free of charge) | 2.89            |

Agora rounds up the total cost to two decimal places.

### File conversion billed per PCW [#file-conversion-billed-per-pcw]

Suppose a customer has a project that needs file conversion and decides to adopt PCW-based pricing.

The hard cap is set to 5 PCW/project/region/conversion mode (dynamic or static). The customer ends up consuming the total of 3 PCW across this project. The calculation will be as follows:

**$499 x 3 = $1497 for this project per month**

## Reference [#reference]

### Check your current usage [#check-your-current-usage]

You can check your usage of Interactive Whiteboard in Agora Console. Perform the following steps:

1. Log in to [Agora Console](https://console.agora.io/) and click the **Usage** button on the left navigation panel.

2. Click the arrowhead in the top left corner, and select the project you want to check in the drop-down box.

3. Click **Duration** under **Whiteboard**, select a time frame, and check the usage duration.

   ![](https://web-cdn.agora.io/docs-files/1620288770652)

* The time frame cannot exceed 12 months.
* Only Agora accounts that are assigned with the role of Admin or Finance have access to the usage statistics.
* The usage duration provided by Agora Console is for reference only. Your actual billing may differ.

## See also [#see-also]

* [Billing policies and free-of-charge policy](/en/realtime-media/im/reference/billing-policies)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page explains how Agora calculates your monthly bill for Interactive Whiteboard."
  }, {
    heading: undefined,
    content: "If you have already signed a contract with Agora, the billing terms and conditions within that contract take precedence."
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "The unit prices for whiteboard features are as follows:"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "Whiteboard feature"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "Volume"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "Pricing per volume/month"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "Pricing per PCW/month"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "Online whiteboard"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "Under 10,000 minutes"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "Free"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "-"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "Online whiteboard"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "10,000 - 60,000 minutes"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "$1.40 USD/1,000 minutes"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "-"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "Online whiteboard"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "60,000 - 120,000 minutes"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "$1.30 USD/1,000 minutes"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "-"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "Online whiteboard"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "120,000 - 1,000,000 minutes"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "$1.10 USD/1,000 minutes"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "-"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "Online whiteboard"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "Over 1,000,000 minutes"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "Contact Agora Sales"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "-"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "File conversion"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "0 - 1,000 images/web pages"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "Free"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "$499/PCW"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "File conversion"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "Static file conversion (to image)"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "$0.50 USD/1,000 images"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "$499/PCW"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "File conversion"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "Dynamic file conversion (to web page)"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "$2.50 USD/1,000 web pages"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "$499/PCW"
  }, {
    heading: "interactive-whiteboard-pricing",
    content: "If your use-case involves other Agora products or services, such as the Video Calling, Signaling, or Cloud Recording, expect additional charges for these products or services. For details, see the pricing policy for each Agora product or service."
  }, {
    heading: "cost-calculation",
    content: "Billing for Interactive Whiteboard begins once you enable and implement the service in your project and occurs monthly."
  }, {
    heading: "cost-calculation",
    content: `Agora calculates your monthly pricing by adding up the usage of each whiteboard feature in all
projects under your Agora Account, subtracting your monthly free usage allowances,
multiplying each resulting usage number by the corresponding price, and adding up the cost of each feature.`
  }, {
    heading: "cost-calculation",
    content: "The basic formulas are shown here:"
  }, {
    heading: "cost-calculation",
    content: "**Monthly cost** = **monthly online whiteboard cost** + **monthly file conversion cost**"
  }, {
    heading: "cost-calculation",
    content: "**Monthly feature cost*&#x2A; = **(monthly total usage - free-of-charge usage) × unit price**"
  }, {
    heading: "online-whiteboard-usage",
    content: `The usage duration of each whiteboard room equals **the total sum of usage duration of all users** in the room.
Billing **does not start** when the room is created, but rather when users join.`
  }, {
    heading: "online-whiteboard-usage",
    content: "For each user, Agora calculates the usage duration from when they join to when they leave the room."
  }, {
    heading: "online-whiteboard-usage",
    content: "Note that usage calculation will continue if live streaming has ended but users are still in the room."
  }, {
    heading: "online-whiteboard-usage",
    content: "To avoid additional costs, Agora recommends that you:"
  }, {
    heading: "online-whiteboard-usage",
    content: "The usage calculation and unit price are the same whether the user joins a room in interactive mode or subscription mode."
  }, {
    heading: "online-whiteboard-usage",
    content: "The usage duration is calculated in minutes."
  }, {
    heading: "file-conversion-usage",
    content: "Agora bills for this feature based on the model you select in Agora Console: Per volume or per PCW."
  }, {
    heading: "per-volume",
    content: "Agora calculates the number of files converted to images/web pages per month and applies the unit prices specified in the table below. This model has a hard cap of one Peak Concurrent Worker (PCW) (running conversion task) for each conversion mode running in a server region under a single project. In other words, if you have 1 project with 1 server region, you can run 2 conversion tasks simultaneously - 1 static and 1 dynamic - while the rest are queued. If you have 3 projects, each with servers in 2 regions, you can run 6 (3 x 2) dynamic and 6 (3 x 2) static conversions simultaneously."
  }, {
    heading: "per-volume",
    content: `Agora does not charge for a failed file conversion task.
You can call the Query file conversion progress
API to get the result of a file conversion task.`
  }, {
    heading: "per-peak-concurrent-workers",
    content: "**Peak Concurrent Workers (PCW)** are the maximum number of file conversion tasks that Interactive Whiteboard servers can process simultaneously per project per server region per file conversation mode (dynamic or static). The unit pricing is per PCW per month, with an unlimited number of files that can be converted to images or web pages. If you set PCW to 2 or 3, this means you will be able to run up to 2 or 3 conversion tasks at the same time, respectively. The hard cap on the PCW used in this model is set to 5 per project, with the ability to adjust it in the Agora Console."
  }, {
    heading: "per-peak-concurrent-workers",
    content: "At that, if you use less PCW during the month, Agora will bill only for the actual PCW usage. Your PCW usage depends on the frequency of requests submitted to our servers and the file size. It increases when the service is processing existing file conversion tasks and a new task is submitted."
  }, {
    heading: "examples",
    content: "This section illustrates how Agora calculates the cost for Interactive Whiteboard."
  }, {
    heading: "online-whiteboard--file-conversion-billed-per-volume",
    content: `Suppose user A joins a whiteboard room to give an online lecture and successfully converts a
50-page PPTX file to web pages using the file conversion feature. Another 200 users join the room to
watch the lecture. The lecture lasts 60 minutes. When the lecture ends, all users leave the room at the
same time.`
  }, {
    heading: "online-whiteboard--file-conversion-billed-per-volume",
    content: "The usage calculation is as follows:"
  }, {
    heading: "online-whiteboard--file-conversion-billed-per-volume",
    content: "Feature"
  }, {
    heading: "online-whiteboard--file-conversion-billed-per-volume",
    content: "Usage"
  }, {
    heading: "online-whiteboard--file-conversion-billed-per-volume",
    content: "Online whiteboard"
  }, {
    heading: "online-whiteboard--file-conversion-billed-per-volume",
    content: "- User A: 60 minutes<br />- Another 200 users: 60 × 200 minutes<br />"
  }, {
    heading: "online-whiteboard--file-conversion-billed-per-volume",
    content: "File conversion to web page"
  }, {
    heading: "online-whiteboard--file-conversion-billed-per-volume",
    content: "50 web pages"
  }, {
    heading: "online-whiteboard--file-conversion-billed-per-volume",
    content: "The following table shows the calculation of the total cost of the lecture:"
  }, {
    heading: "online-whiteboard--file-conversion-billed-per-volume",
    content: "Billed service"
  }, {
    heading: "online-whiteboard--file-conversion-billed-per-volume",
    content: "Unit price, US$/1,000 minutes"
  }, {
    heading: "online-whiteboard--file-conversion-billed-per-volume",
    content: "Cost of each service, US$"
  }, {
    heading: "online-whiteboard--file-conversion-billed-per-volume",
    content: "Total cost, US$"
  }, {
    heading: "online-whiteboard--file-conversion-billed-per-volume",
    content: "Online whiteboard"
  }, {
    heading: "online-whiteboard--file-conversion-billed-per-volume",
    content: "$1.40/1,000 minutes"
  }, {
    heading: "online-whiteboard--file-conversion-billed-per-volume",
    content: "(12,060 - 10,000)/1000 × 1.40 = 2.884"
  }, {
    heading: "online-whiteboard--file-conversion-billed-per-volume",
    content: "2.89"
  }, {
    heading: "online-whiteboard--file-conversion-billed-per-volume",
    content: "File conversion to web page"
  }, {
    heading: "online-whiteboard--file-conversion-billed-per-volume",
    content: "$2.50/1,000 web pages"
  }, {
    heading: "online-whiteboard--file-conversion-billed-per-volume",
    content: "0 (The first 1,000 converted web pages are free of charge)"
  }, {
    heading: "online-whiteboard--file-conversion-billed-per-volume",
    content: "2.89"
  }, {
    heading: "online-whiteboard--file-conversion-billed-per-volume",
    content: "Agora rounds up the total cost to two decimal places."
  }, {
    heading: "file-conversion-billed-per-pcw",
    content: "Suppose a customer has a project that needs file conversion and decides to adopt PCW-based pricing."
  }, {
    heading: "file-conversion-billed-per-pcw",
    content: "The hard cap is set to 5 PCW/project/region/conversion mode (dynamic or static). The customer ends up consuming the total of 3 PCW across this project. The calculation will be as follows:"
  }, {
    heading: "file-conversion-billed-per-pcw",
    content: "**$499 x 3 = $1497 for this project per month**"
  }, {
    heading: "check-your-current-usage",
    content: "You can check your usage of Interactive Whiteboard in Agora Console. Perform the following steps:"
  }, {
    heading: "check-your-current-usage",
    content: "Log in to Agora Console and click the **Usage** button on the left navigation panel."
  }, {
    heading: "check-your-current-usage",
    content: "Click the arrowhead in the top left corner, and select the project you want to check in the drop-down box."
  }, {
    heading: "check-your-current-usage",
    content: "Click **Duration** under **Whiteboard**, select a time frame, and check the usage duration."
  }, {
    heading: "check-your-current-usage",
    content: "The time frame cannot exceed 12 months."
  }, {
    heading: "check-your-current-usage",
    content: "Only Agora accounts that are assigned with the role of Admin or Finance have access to the usage statistics."
  }, {
    heading: "check-your-current-usage",
    content: "The usage duration provided by Agora Console is for reference only. Your actual billing may differ."
  }, {
    heading: "see-also",
    content: "Billing policies and free-of-charge policy"
  }],
  headings: [{
    id: "interactive-whiteboard-pricing",
    content: "Interactive Whiteboard pricing"
  }, {
    id: "cost-calculation",
    content: "Cost calculation"
  }, {
    id: "online-whiteboard-usage",
    content: "Online whiteboard usage"
  }, {
    id: "file-conversion-usage",
    content: "File conversion usage"
  }, {
    id: "per-volume",
    content: "Per volume"
  }, {
    id: "per-peak-concurrent-workers",
    content: "Per Peak Concurrent Workers"
  }, {
    id: "examples",
    content: "Examples"
  }, {
    id: "online-whiteboard--file-conversion-billed-per-volume",
    content: "Online whiteboard + file conversion billed per volume"
  }, {
    id: "file-conversion-billed-per-pcw",
    content: "File conversion billed per PCW"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "check-your-current-usage",
    content: "Check your current usage"
  }, {
    id: "see-also",
    content: "See also"
  }]
};
export let toc = [{
  depth: 2,
  url: "#interactive-whiteboard-pricing",
  title: _jsx(_Fragment, {
    children: "Interactive Whiteboard pricing"
  })
}, {
  depth: 2,
  url: "#cost-calculation",
  title: _jsx(_Fragment, {
    children: "Cost calculation"
  })
}, {
  depth: 3,
  url: "#online-whiteboard-usage",
  title: _jsx(_Fragment, {
    children: "Online whiteboard usage"
  })
}, {
  depth: 3,
  url: "#file-conversion-usage",
  title: _jsx(_Fragment, {
    children: "File conversion usage"
  })
}, {
  depth: 4,
  url: "#per-volume",
  title: _jsx(_Fragment, {
    children: "Per volume"
  })
}, {
  depth: 4,
  url: "#per-peak-concurrent-workers",
  title: _jsx(_Fragment, {
    children: "Per Peak Concurrent Workers"
  })
}, {
  depth: 2,
  url: "#examples",
  title: _jsx(_Fragment, {
    children: "Examples"
  })
}, {
  depth: 3,
  url: "#online-whiteboard--file-conversion-billed-per-volume",
  title: _jsx(_Fragment, {
    children: "Online whiteboard + file conversion billed per volume"
  })
}, {
  depth: 3,
  url: "#file-conversion-billed-per-pcw",
  title: _jsx(_Fragment, {
    children: "File conversion billed per PCW"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#check-your-current-usage",
  title: _jsx(_Fragment, {
    children: "Check your current usage"
  })
}, {
  depth: 2,
  url: "#see-also",
  title: _jsx(_Fragment, {
    children: "See also"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "This page explains how Agora calculates your monthly bill for Interactive Whiteboard."
    }), `
`, _jsx(_components.p, {
      children: "If you have already signed a contract with Agora, the billing terms and conditions within that contract take precedence."
    }), `
`, _jsx(_components.h2, {
      id: "interactive-whiteboard-pricing",
      children: "Interactive Whiteboard pricing"
    }), `
`, _jsx(_components.p, {
      children: "The unit prices for whiteboard features are as follows:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Whiteboard feature"
          }), _jsx(_components.th, {
            children: "Volume"
          }), _jsx(_components.th, {
            children: "Pricing per volume/month"
          }), _jsx(_components.th, {
            children: "Pricing per PCW/month"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Online whiteboard"
          }), _jsx(_components.td, {
            children: "Under 10,000 minutes"
          }), _jsx(_components.td, {
            children: "Free"
          }), _jsx(_components.td, {
            children: "-"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Online whiteboard"
          }), _jsx(_components.td, {
            children: "10,000 - 60,000 minutes"
          }), _jsx(_components.td, {
            children: "$1.40 USD/1,000 minutes"
          }), _jsx(_components.td, {
            children: "-"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Online whiteboard"
          }), _jsx(_components.td, {
            children: "60,000 - 120,000 minutes"
          }), _jsx(_components.td, {
            children: "$1.30 USD/1,000 minutes"
          }), _jsx(_components.td, {
            children: "-"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Online whiteboard"
          }), _jsx(_components.td, {
            children: "120,000 - 1,000,000 minutes"
          }), _jsx(_components.td, {
            children: "$1.10 USD/1,000 minutes"
          }), _jsx(_components.td, {
            children: "-"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Online whiteboard"
          }), _jsx(_components.td, {
            children: "Over 1,000,000 minutes"
          }), _jsx(_components.td, {
            children: "Contact Agora Sales"
          }), _jsx(_components.td, {
            children: "-"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "File conversion"
          }), _jsx(_components.td, {
            children: "0 - 1,000 images/web pages"
          }), _jsx(_components.td, {
            children: "Free"
          }), _jsx(_components.td, {
            children: "$499/PCW"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "File conversion"
          }), _jsx(_components.td, {
            children: "Static file conversion (to image)"
          }), _jsx(_components.td, {
            children: "$0.50 USD/1,000 images"
          }), _jsx(_components.td, {
            children: "$499/PCW"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "File conversion"
          }), _jsx(_components.td, {
            children: "Dynamic file conversion (to web page)"
          }), _jsx(_components.td, {
            children: "$2.50 USD/1,000 web pages"
          }), _jsx(_components.td, {
            children: "$499/PCW"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "If your use-case involves other Agora products or services, such as the Video Calling, Signaling, or Cloud Recording, expect additional charges for these products or services. For details, see the pricing policy for each Agora product or service."
    }), `
`, _jsx(_components.h2, {
      id: "cost-calculation",
      children: "Cost calculation"
    }), `
`, _jsx(_components.p, {
      children: "Billing for Interactive Whiteboard begins once you enable and implement the service in your project and occurs monthly."
    }), `
`, _jsxs(_components.p, {
      children: [`Agora calculates your monthly pricing by adding up the usage of each whiteboard feature in all
projects under your `, _jsx(_components.a, {
        href: "https://console.agora.io/",
        children: "Agora Account"
      }), `, subtracting your monthly free usage allowances,
multiplying each resulting usage number by the corresponding price, and adding up the cost of each feature.`]
    }), `
`, _jsx(_components.p, {
      children: "The basic formulas are shown here:"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Monthly cost"
      }), " = ", _jsx(_components.strong, {
        children: "monthly online whiteboard cost"
      }), " + ", _jsx(_components.strong, {
        children: "monthly file conversion cost"
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Monthly feature cost"
      }), " = ", _jsx(_components.strong, {
        children: "(monthly total usage - free-of-charge usage) × unit price"
      })]
    }), `
`, _jsx(_components.h3, {
      id: "online-whiteboard-usage",
      children: "Online whiteboard usage"
    }), `
`, _jsxs(_components.p, {
      children: ["The usage duration of each whiteboard room equals ", _jsx(_components.strong, {
        children: "the total sum of usage duration of all users"
      }), ` in the room.
Billing `, _jsx(_components.strong, {
        children: "does not start"
      }), " when the room is created, but rather when users join."]
    }), `
`, _jsx(_components.p, {
      children: "For each user, Agora calculates the usage duration from when they join to when they leave the room."
    }), `
`, _jsx(_components.p, {
      children: "Note that usage calculation will continue if live streaming has ended but users are still in the room."
    }), `
`, _jsx(_components.p, {
      children: "To avoid additional costs, Agora recommends that you:"
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
              children: "- Call `disconnect()` to cut off a user's connection when the user leaves the room, and ensure that you receive the `onPhaseChanged(disconnected)` callback."
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              children: "- Call the [Interactive Whiteboard REST API](/en/api-reference/api-ref/whiteboard/room-management#disable-a-room-patch) on your app server to move all users out of the room when live streaming ends."
            })
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "The usage calculation and unit price are the same whether the user joins a room in interactive mode or subscription mode."
    }), `
`, _jsx(_components.p, {
      children: "The usage duration is calculated in minutes."
    }), `
`, _jsx(_components.h3, {
      id: "file-conversion-usage",
      children: "File conversion usage"
    }), `
`, _jsxs(_components.p, {
      children: ["Agora bills for this feature based on the model you select in ", _jsx(_components.a, {
        href: "https://console.agora.io/",
        children: "Agora Console"
      }), ": Per volume or per PCW."]
    }), `
`, _jsx(_components.h4, {
      id: "per-volume",
      children: "Per volume"
    }), `
`, _jsx(_components.p, {
      children: "Agora calculates the number of files converted to images/web pages per month and applies the unit prices specified in the table below. This model has a hard cap of one Peak Concurrent Worker (PCW) (running conversion task) for each conversion mode running in a server region under a single project. In other words, if you have 1 project with 1 server region, you can run 2 conversion tasks simultaneously - 1 static and 1 dynamic - while the rest are queued. If you have 3 projects, each with servers in 2 regions, you can run 6 (3 x 2) dynamic and 6 (3 x 2) static conversions simultaneously."
    }), `
`, _jsxs(_components.p, {
      children: [`Agora does not charge for a failed file conversion task.
You can call the `, _jsx(_components.a, {
        href: "/en/api-reference/api-ref/whiteboard/file-conversion#query-the-progress-of-a-file-conversion-task",
        children: "Query file conversion progress"
      }), `
API to get the result of a file conversion task.`]
    }), `
`, _jsx(_components.h4, {
      id: "per-peak-concurrent-workers",
      children: "Per Peak Concurrent Workers"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Peak Concurrent Workers (PCW)"
      }), " are the maximum number of file conversion tasks that Interactive Whiteboard servers can process simultaneously per project per server region per file conversation mode (dynamic or static). The unit pricing is per PCW per month, with an unlimited number of files that can be converted to images or web pages. If you set PCW to 2 or 3, this means you will be able to run up to 2 or 3 conversion tasks at the same time, respectively. The hard cap on the PCW used in this model is set to 5 per project, with the ability to adjust it in the ", _jsx(_components.a, {
        href: "https://console.agora.io/",
        children: "Agora Console"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "At that, if you use less PCW during the month, Agora will bill only for the actual PCW usage. Your PCW usage depends on the frequency of requests submitted to our servers and the file size. It increases when the service is processing existing file conversion tasks and a new task is submitted."
    }), `
`, _jsx(_components.h2, {
      id: "examples",
      children: "Examples"
    }), `
`, _jsx(_components.p, {
      children: "This section illustrates how Agora calculates the cost for Interactive Whiteboard."
    }), `
`, _jsx(_components.h3, {
      id: "online-whiteboard--file-conversion-billed-per-volume",
      children: "Online whiteboard + file conversion billed per volume"
    }), `
`, _jsx(_components.p, {
      children: `Suppose user A joins a whiteboard room to give an online lecture and successfully converts a
50-page PPTX file to web pages using the file conversion feature. Another 200 users join the room to
watch the lecture. The lecture lasts 60 minutes. When the lecture ends, all users leave the room at the
same time.`
    }), `
`, _jsx(_components.p, {
      children: "The usage calculation is as follows:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Feature"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Usage"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Online whiteboard"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- User A: 60 minutes", "- Another 200 users: 60 × 200 minutes"]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "File conversion to web page"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "50 web pages"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "The following table shows the calculation of the total cost of the lecture:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Billed service"
          }), _jsx(_components.th, {
            children: "Unit price, US$/1,000 minutes"
          }), _jsx(_components.th, {
            children: "Cost of each service, US$"
          }), _jsx(_components.th, {
            children: "Total cost, US$"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Online whiteboard"
          }), _jsx(_components.td, {
            children: "$1.40/1,000 minutes"
          }), _jsx(_components.td, {
            children: "(12,060 - 10,000)/1000 × 1.40 = 2.884"
          }), _jsx(_components.td, {
            children: "2.89"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "File conversion to web page"
          }), _jsx(_components.td, {
            children: "$2.50/1,000 web pages"
          }), _jsx(_components.td, {
            children: "0 (The first 1,000 converted web pages are free of charge)"
          }), _jsx(_components.td, {
            children: "2.89"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "Agora rounds up the total cost to two decimal places."
    }), `
`, _jsx(_components.h3, {
      id: "file-conversion-billed-per-pcw",
      children: "File conversion billed per PCW"
    }), `
`, _jsx(_components.p, {
      children: "Suppose a customer has a project that needs file conversion and decides to adopt PCW-based pricing."
    }), `
`, _jsx(_components.p, {
      children: "The hard cap is set to 5 PCW/project/region/conversion mode (dynamic or static). The customer ends up consuming the total of 3 PCW across this project. The calculation will be as follows:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "$499 x 3 = $1497 for this project per month"
      })
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.h3, {
      id: "check-your-current-usage",
      children: "Check your current usage"
    }), `
`, _jsx(_components.p, {
      children: "You can check your usage of Interactive Whiteboard in Agora Console. Perform the following steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Log in to ", _jsx(_components.a, {
            href: "https://console.agora.io/",
            children: "Agora Console"
          }), " and click the ", _jsx(_components.strong, {
            children: "Usage"
          }), " button on the left navigation panel."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Click the arrowhead in the top left corner, and select the project you want to check in the drop-down box."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Click ", _jsx(_components.strong, {
            children: "Duration"
          }), " under ", _jsx(_components.strong, {
            children: "Whiteboard"
          }), ", select a time frame, and check the usage duration."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://web-cdn.agora.io/docs-files/1620288770652",
            alt: ""
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The time frame cannot exceed 12 months."
      }), `
`, _jsx(_components.li, {
        children: "Only Agora accounts that are assigned with the role of Admin or Finance have access to the usage statistics."
      }), `
`, _jsx(_components.li, {
        children: "The usage duration provided by Agora Console is for reference only. Your actual billing may differ."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "see-also",
      children: "See also"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/im/reference/billing-policies",
          children: "Billing policies and free-of-charge policy"
        })
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
