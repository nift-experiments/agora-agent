import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How to set the output video resolution of the web page recording mode on the on mobile devices?"
};
export let _markdown = `

When you enable the mobile web mode (\`mobile\` is \`true\`), and start web page recording. Agora recommends that you set the width and height of the output video according to the following video resolution:

| Apple device                   | Width x Height |
| :----------------------------- | :------------- |
| iPhone 13                      | 390 x 844      |
| iPhone 13 mini                 | 375 x 812      |
| iPhone 13 Pro Max              | 428 x 926      |
| iPhone 13 Pro                  | 390 x 844      |
| iPhone 12                      | 390 x 844      |
| iPhone 12 mini                 | 375 x 812      |
| iPhone 12 Pro Max              | 428 x 926      |
| iPhone 12 Pro                  | 390 x 844      |
| iPhone 11 Pro Max              | 414 x 896      |
| iPhone 11 Pro                  | 375 x 812      |
| iPhone 11                      | 414 x 896      |
| iPhone XR                      | 414 x 896      |
| iPhone XS                      | 375 x 812      |
| iPhone XS Max                  | 414 x 896      |
| iPhone X                       | 375 x 812      |
| iPhone 8 Plus                  | 414 x 736      |
| iPhone 8                       | 375 x 667      |
| iPhone 7 Plus                  | 414 x 736      |
| iPhone 7                       | 375 x 667      |
| iPhone 6 Plus/6S Plus          | 414 x 736      |
| iPhone 6/6S                    | 375 x 667      |
| iPhone 5                       | 320 x 568      |
| iPod Touch                     | 320 x 568      |
| iPad Pro                       | 1024 x 1366    |
| iPad Third & Fourth Generation | 768 x 1024     |
| iPad Air 1 & 2                 | 768 x 1024     |
| iPad Mini 2 & 3                | 768 x 1024     |
| iPad Mini                      | 768 x 1024     |
| iPhone XR                      | 414 x 896      |
| iPhone XS                      | 375 x 812      |
| iPhone XS Max                  | 414 x 896      |
| iPhone X                       | 375 x 812      |
| iPhone 8 Plus                  | 414 x 736      |
| iPhone 8                       | 375 x 667      |
| iPhone 7 Plus                  | 414 x 736      |
| iPhone 7                       | 375 x 667      |
| iPhone 6 Plus/6S Plus          | 414 x 736      |
| iPhone 6/6S                    | 375 x 667      |
| iPhone 5                       | 320 x 568      |
| iPod Touch                     | 320 x 568      |
| iPad Pro                       | 1024 x 1366    |
| iPad Third & Fourth Generation | 768 x 1024     |
| iPad Air 1 & 2                 | 768 x 1024     |
| iPad Mini 2 & 3                | 768 x 1024     |
| iPad Mini                      | 768 x 1024     |

| HUAWEI device               | Width x Height |
| :-------------------------- | :------------- |
| HUAWEI Mate 40 Pro(Pro+,RS) | 448 x 924      |
| HUAWEI Mate 40              | 360 x 792      |
| HUAWEI P40 Pro              | 400 x 880      |
| HUAWEI P40                  | 360 x 780      |
| HUAWEI P30 Pro              | 360 x 780      |
| HUAWEI P30                  | 360 x 780      |
| HUAWEI nova 5i              | 360 x 770      |
| HUAWEI nova 5(5,5Pro)       | 360 x 780      |
| HUAWEI nova 4e              | 360 x 771      |
| HUAWEI nova 4               | 360 x 770      |
| HUAWEI nova 3i              | 360 x 780      |
| HUAWEI Mate30 Pro           | 392 x 800      |
| HUAWEI Mate30               | 360 x 780      |
| HUAWEI Mate20 RS            | 360 x 780      |
| HUAWEI Mate20 Pro           | 360 x 780      |
| HUAWEI Mate20 X (X,5G)      | 360 x 748      |
| HUAWEI Mate20               | 360 x 748      |
| HUAWEI P20 Pro              | 360 x 748      |
| HUAWEI P20                  | 360 x 748      |
| HUAWEI P10                  | 360 x 640      |
| HUAWEI P10 Plus             | 360 x 640      |

| Google device           | Width x Height |
| :---------------------- | :------------- |
| Nexus 6P                | 412 x 732      |
| Nexus 5X                | 412 x 732      |
| Google Pixel 4 XL       | 412 x 869      |
| Google Pixel 4          | 412 x 869      |
| Google Pixel 3a XL      | 412 x 824      |
| Google Pixel 3a         | 412 x 846      |
| Google Pixel 3 XL       | 412 x 847      |
| Google Pixel 3          | 412 x 824      |
| Google Pixel 2 XL       | 412 x 732      |
| Google Pixel XL         | 412 x 732      |
| Google Pixel            | 412 x 732      |
| Samsung Galaxy Note 10+ | 412 x 869      |
| Samsung Galaxy Note 10  | 412 x 869      |
| Samsung Galaxy Note 9   | 360 x 740      |
| Samsung Galaxy Note 5   | 480 x 853      |
| LG G5                   | 480 x 853      |
| One Plus 3              | 480 x 853      |
| Samsung Galaxy S9+      | 360 x 740      |
| Samsung Galaxy S9       | 360 x 740      |
| Samsung Galaxy S8+      | 360 x 740      |
| Samsung Galaxy S8       | 360 x 740      |
| Samsung Galaxy S7 Edge  | 360 x 640      |
| Samsung Galaxy S7       | 360 x 640      |
| Nexus 9                 | 768 x 1024     |
| Nexus 7 (2013)          | 600 x 960      |
| Pixel C                 | 900 x 1280     |
| Samsung Galaxy Tab 10   | 800 x 1280     |
| Chromebook Pixel        | 1280 x 850     |

| SAMSUNG device                      | Width x Height |
| :---------------------------------- | :------------- |
| Samsung Galaxy S21 Ultra 5G         | 480 x 1067     |
| Samsung Galaxy S21+ 5G              | 360 x 800      |
| Samsung Galaxy S21 5G               | 360 x 800      |
| Samsung Galaxy S20 FE 5G            | 360 x 867      |
| Samsung Galaxy S20 5G               | 360 x 760      |
| Samsung Galaxy S20+ 5G              | 360 x 760      |
| Samsung Galaxy S20 Ultra 5G         | 360 x 760      |
| Samsung Galaxy A70（A70，A80）         | 360 x 800      |
| Samsung Galaxy A60                  | 360 x 780      |
| Samsung Galaxy A40s                 | 360 x 780      |
| Samsung Galaxy A8s                  | 360 x 780      |
| Samsung Galaxy S10e                 | 360 x 760      |
| Samsung Galaxy S10+                 | 360 x 760      |
| Samsung Galaxy S10                  | 360 x 760      |
| Samsung Galaxy S9                   | 360 x 740      |
| Samsung Galaxy S9+                  | 360 x 740      |
| Samsung Galaxy S8                   | 360 x 740      |
| Samsung Galaxy S8+                  | 360 x 740      |
| Samsung Galaxy Note10 5G            | 360 x 760      |
| Samsung Galaxy Note10               | 360 x 760      |
| Samsung Galaxy Note 9               | 360 x 740      |
| Samsung Galaxy Note 4               | 480 x 853      |
| Samsung Galaxy Note5                | 480 x 853      |
| Samsung Galaxy S5                   | 360 x 640      |
| Samsung Galaxy S7 (S7, S6, S6 Edge) | 360 x 640      |
| Samsung Galaxy S7 Edge              | 360 x 640      |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When you enable the mobile web mode (`mobile` is `true`), and start web page recording. Agora recommends that you set the width and height of the output video according to the following video resolution:"
  }, {
    heading: undefined,
    content: "Apple device"
  }, {
    heading: undefined,
    content: "Width x Height"
  }, {
    heading: undefined,
    content: "iPhone 13"
  }, {
    heading: undefined,
    content: "390 x 844"
  }, {
    heading: undefined,
    content: "iPhone 13 mini"
  }, {
    heading: undefined,
    content: "375 x 812"
  }, {
    heading: undefined,
    content: "iPhone 13 Pro Max"
  }, {
    heading: undefined,
    content: "428 x 926"
  }, {
    heading: undefined,
    content: "iPhone 13 Pro"
  }, {
    heading: undefined,
    content: "390 x 844"
  }, {
    heading: undefined,
    content: "iPhone 12"
  }, {
    heading: undefined,
    content: "390 x 844"
  }, {
    heading: undefined,
    content: "iPhone 12 mini"
  }, {
    heading: undefined,
    content: "375 x 812"
  }, {
    heading: undefined,
    content: "iPhone 12 Pro Max"
  }, {
    heading: undefined,
    content: "428 x 926"
  }, {
    heading: undefined,
    content: "iPhone 12 Pro"
  }, {
    heading: undefined,
    content: "390 x 844"
  }, {
    heading: undefined,
    content: "iPhone 11 Pro Max"
  }, {
    heading: undefined,
    content: "414 x 896"
  }, {
    heading: undefined,
    content: "iPhone 11 Pro"
  }, {
    heading: undefined,
    content: "375 x 812"
  }, {
    heading: undefined,
    content: "iPhone 11"
  }, {
    heading: undefined,
    content: "414 x 896"
  }, {
    heading: undefined,
    content: "iPhone XR"
  }, {
    heading: undefined,
    content: "414 x 896"
  }, {
    heading: undefined,
    content: "iPhone XS"
  }, {
    heading: undefined,
    content: "375 x 812"
  }, {
    heading: undefined,
    content: "iPhone XS Max"
  }, {
    heading: undefined,
    content: "414 x 896"
  }, {
    heading: undefined,
    content: "iPhone X"
  }, {
    heading: undefined,
    content: "375 x 812"
  }, {
    heading: undefined,
    content: "iPhone 8 Plus"
  }, {
    heading: undefined,
    content: "414 x 736"
  }, {
    heading: undefined,
    content: "iPhone 8"
  }, {
    heading: undefined,
    content: "375 x 667"
  }, {
    heading: undefined,
    content: "iPhone 7 Plus"
  }, {
    heading: undefined,
    content: "414 x 736"
  }, {
    heading: undefined,
    content: "iPhone 7"
  }, {
    heading: undefined,
    content: "375 x 667"
  }, {
    heading: undefined,
    content: "iPhone 6 Plus/6S Plus"
  }, {
    heading: undefined,
    content: "414 x 736"
  }, {
    heading: undefined,
    content: "iPhone 6/6S"
  }, {
    heading: undefined,
    content: "375 x 667"
  }, {
    heading: undefined,
    content: "iPhone 5"
  }, {
    heading: undefined,
    content: "320 x 568"
  }, {
    heading: undefined,
    content: "iPod Touch"
  }, {
    heading: undefined,
    content: "320 x 568"
  }, {
    heading: undefined,
    content: "iPad Pro"
  }, {
    heading: undefined,
    content: "1024 x 1366"
  }, {
    heading: undefined,
    content: "iPad Third & Fourth Generation"
  }, {
    heading: undefined,
    content: "768 x 1024"
  }, {
    heading: undefined,
    content: "iPad Air 1 & 2"
  }, {
    heading: undefined,
    content: "768 x 1024"
  }, {
    heading: undefined,
    content: "iPad Mini 2 & 3"
  }, {
    heading: undefined,
    content: "768 x 1024"
  }, {
    heading: undefined,
    content: "iPad Mini"
  }, {
    heading: undefined,
    content: "768 x 1024"
  }, {
    heading: undefined,
    content: "iPhone XR"
  }, {
    heading: undefined,
    content: "414 x 896"
  }, {
    heading: undefined,
    content: "iPhone XS"
  }, {
    heading: undefined,
    content: "375 x 812"
  }, {
    heading: undefined,
    content: "iPhone XS Max"
  }, {
    heading: undefined,
    content: "414 x 896"
  }, {
    heading: undefined,
    content: "iPhone X"
  }, {
    heading: undefined,
    content: "375 x 812"
  }, {
    heading: undefined,
    content: "iPhone 8 Plus"
  }, {
    heading: undefined,
    content: "414 x 736"
  }, {
    heading: undefined,
    content: "iPhone 8"
  }, {
    heading: undefined,
    content: "375 x 667"
  }, {
    heading: undefined,
    content: "iPhone 7 Plus"
  }, {
    heading: undefined,
    content: "414 x 736"
  }, {
    heading: undefined,
    content: "iPhone 7"
  }, {
    heading: undefined,
    content: "375 x 667"
  }, {
    heading: undefined,
    content: "iPhone 6 Plus/6S Plus"
  }, {
    heading: undefined,
    content: "414 x 736"
  }, {
    heading: undefined,
    content: "iPhone 6/6S"
  }, {
    heading: undefined,
    content: "375 x 667"
  }, {
    heading: undefined,
    content: "iPhone 5"
  }, {
    heading: undefined,
    content: "320 x 568"
  }, {
    heading: undefined,
    content: "iPod Touch"
  }, {
    heading: undefined,
    content: "320 x 568"
  }, {
    heading: undefined,
    content: "iPad Pro"
  }, {
    heading: undefined,
    content: "1024 x 1366"
  }, {
    heading: undefined,
    content: "iPad Third & Fourth Generation"
  }, {
    heading: undefined,
    content: "768 x 1024"
  }, {
    heading: undefined,
    content: "iPad Air 1 & 2"
  }, {
    heading: undefined,
    content: "768 x 1024"
  }, {
    heading: undefined,
    content: "iPad Mini 2 & 3"
  }, {
    heading: undefined,
    content: "768 x 1024"
  }, {
    heading: undefined,
    content: "iPad Mini"
  }, {
    heading: undefined,
    content: "768 x 1024"
  }, {
    heading: undefined,
    content: "HUAWEI device"
  }, {
    heading: undefined,
    content: "Width x Height"
  }, {
    heading: undefined,
    content: "HUAWEI Mate 40 Pro(Pro+,RS)"
  }, {
    heading: undefined,
    content: "448 x 924"
  }, {
    heading: undefined,
    content: "HUAWEI Mate 40"
  }, {
    heading: undefined,
    content: "360 x 792"
  }, {
    heading: undefined,
    content: "HUAWEI P40 Pro"
  }, {
    heading: undefined,
    content: "400 x 880"
  }, {
    heading: undefined,
    content: "HUAWEI P40"
  }, {
    heading: undefined,
    content: "360 x 780"
  }, {
    heading: undefined,
    content: "HUAWEI P30 Pro"
  }, {
    heading: undefined,
    content: "360 x 780"
  }, {
    heading: undefined,
    content: "HUAWEI P30"
  }, {
    heading: undefined,
    content: "360 x 780"
  }, {
    heading: undefined,
    content: "HUAWEI nova 5i"
  }, {
    heading: undefined,
    content: "360 x 770"
  }, {
    heading: undefined,
    content: "HUAWEI nova 5(5,5Pro)"
  }, {
    heading: undefined,
    content: "360 x 780"
  }, {
    heading: undefined,
    content: "HUAWEI nova 4e"
  }, {
    heading: undefined,
    content: "360 x 771"
  }, {
    heading: undefined,
    content: "HUAWEI nova 4"
  }, {
    heading: undefined,
    content: "360 x 770"
  }, {
    heading: undefined,
    content: "HUAWEI nova 3i"
  }, {
    heading: undefined,
    content: "360 x 780"
  }, {
    heading: undefined,
    content: "HUAWEI Mate30 Pro"
  }, {
    heading: undefined,
    content: "392 x 800"
  }, {
    heading: undefined,
    content: "HUAWEI Mate30"
  }, {
    heading: undefined,
    content: "360 x 780"
  }, {
    heading: undefined,
    content: "HUAWEI Mate20 RS"
  }, {
    heading: undefined,
    content: "360 x 780"
  }, {
    heading: undefined,
    content: "HUAWEI Mate20 Pro"
  }, {
    heading: undefined,
    content: "360 x 780"
  }, {
    heading: undefined,
    content: "HUAWEI Mate20 X (X,5G)"
  }, {
    heading: undefined,
    content: "360 x 748"
  }, {
    heading: undefined,
    content: "HUAWEI Mate20"
  }, {
    heading: undefined,
    content: "360 x 748"
  }, {
    heading: undefined,
    content: "HUAWEI P20 Pro"
  }, {
    heading: undefined,
    content: "360 x 748"
  }, {
    heading: undefined,
    content: "HUAWEI P20"
  }, {
    heading: undefined,
    content: "360 x 748"
  }, {
    heading: undefined,
    content: "HUAWEI P10"
  }, {
    heading: undefined,
    content: "360 x 640"
  }, {
    heading: undefined,
    content: "HUAWEI P10 Plus"
  }, {
    heading: undefined,
    content: "360 x 640"
  }, {
    heading: undefined,
    content: "Google device"
  }, {
    heading: undefined,
    content: "Width x Height"
  }, {
    heading: undefined,
    content: "Nexus 6P"
  }, {
    heading: undefined,
    content: "412 x 732"
  }, {
    heading: undefined,
    content: "Nexus 5X"
  }, {
    heading: undefined,
    content: "412 x 732"
  }, {
    heading: undefined,
    content: "Google Pixel 4 XL"
  }, {
    heading: undefined,
    content: "412 x 869"
  }, {
    heading: undefined,
    content: "Google Pixel 4"
  }, {
    heading: undefined,
    content: "412 x 869"
  }, {
    heading: undefined,
    content: "Google Pixel 3a XL"
  }, {
    heading: undefined,
    content: "412 x 824"
  }, {
    heading: undefined,
    content: "Google Pixel 3a"
  }, {
    heading: undefined,
    content: "412 x 846"
  }, {
    heading: undefined,
    content: "Google Pixel 3 XL"
  }, {
    heading: undefined,
    content: "412 x 847"
  }, {
    heading: undefined,
    content: "Google Pixel 3"
  }, {
    heading: undefined,
    content: "412 x 824"
  }, {
    heading: undefined,
    content: "Google Pixel 2 XL"
  }, {
    heading: undefined,
    content: "412 x 732"
  }, {
    heading: undefined,
    content: "Google Pixel XL"
  }, {
    heading: undefined,
    content: "412 x 732"
  }, {
    heading: undefined,
    content: "Google Pixel"
  }, {
    heading: undefined,
    content: "412 x 732"
  }, {
    heading: undefined,
    content: "Samsung Galaxy Note 10+"
  }, {
    heading: undefined,
    content: "412 x 869"
  }, {
    heading: undefined,
    content: "Samsung Galaxy Note 10"
  }, {
    heading: undefined,
    content: "412 x 869"
  }, {
    heading: undefined,
    content: "Samsung Galaxy Note 9"
  }, {
    heading: undefined,
    content: "360 x 740"
  }, {
    heading: undefined,
    content: "Samsung Galaxy Note 5"
  }, {
    heading: undefined,
    content: "480 x 853"
  }, {
    heading: undefined,
    content: "LG G5"
  }, {
    heading: undefined,
    content: "480 x 853"
  }, {
    heading: undefined,
    content: "One Plus 3"
  }, {
    heading: undefined,
    content: "480 x 853"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S9+"
  }, {
    heading: undefined,
    content: "360 x 740"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S9"
  }, {
    heading: undefined,
    content: "360 x 740"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S8+"
  }, {
    heading: undefined,
    content: "360 x 740"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S8"
  }, {
    heading: undefined,
    content: "360 x 740"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S7 Edge"
  }, {
    heading: undefined,
    content: "360 x 640"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S7"
  }, {
    heading: undefined,
    content: "360 x 640"
  }, {
    heading: undefined,
    content: "Nexus 9"
  }, {
    heading: undefined,
    content: "768 x 1024"
  }, {
    heading: undefined,
    content: "Nexus 7 (2013)"
  }, {
    heading: undefined,
    content: "600 x 960"
  }, {
    heading: undefined,
    content: "Pixel C"
  }, {
    heading: undefined,
    content: "900 x 1280"
  }, {
    heading: undefined,
    content: "Samsung Galaxy Tab 10"
  }, {
    heading: undefined,
    content: "800 x 1280"
  }, {
    heading: undefined,
    content: "Chromebook Pixel"
  }, {
    heading: undefined,
    content: "1280 x 850"
  }, {
    heading: undefined,
    content: "SAMSUNG device"
  }, {
    heading: undefined,
    content: "Width x Height"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S21 Ultra 5G"
  }, {
    heading: undefined,
    content: "480 x 1067"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S21+ 5G"
  }, {
    heading: undefined,
    content: "360 x 800"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S21 5G"
  }, {
    heading: undefined,
    content: "360 x 800"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S20 FE 5G"
  }, {
    heading: undefined,
    content: "360 x 867"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S20 5G"
  }, {
    heading: undefined,
    content: "360 x 760"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S20+ 5G"
  }, {
    heading: undefined,
    content: "360 x 760"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S20 Ultra 5G"
  }, {
    heading: undefined,
    content: "360 x 760"
  }, {
    heading: undefined,
    content: "Samsung Galaxy A70（A70，A80）"
  }, {
    heading: undefined,
    content: "360 x 800"
  }, {
    heading: undefined,
    content: "Samsung Galaxy A60"
  }, {
    heading: undefined,
    content: "360 x 780"
  }, {
    heading: undefined,
    content: "Samsung Galaxy A40s"
  }, {
    heading: undefined,
    content: "360 x 780"
  }, {
    heading: undefined,
    content: "Samsung Galaxy A8s"
  }, {
    heading: undefined,
    content: "360 x 780"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S10e"
  }, {
    heading: undefined,
    content: "360 x 760"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S10+"
  }, {
    heading: undefined,
    content: "360 x 760"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S10"
  }, {
    heading: undefined,
    content: "360 x 760"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S9"
  }, {
    heading: undefined,
    content: "360 x 740"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S9+"
  }, {
    heading: undefined,
    content: "360 x 740"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S8"
  }, {
    heading: undefined,
    content: "360 x 740"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S8+"
  }, {
    heading: undefined,
    content: "360 x 740"
  }, {
    heading: undefined,
    content: "Samsung Galaxy Note10 5G"
  }, {
    heading: undefined,
    content: "360 x 760"
  }, {
    heading: undefined,
    content: "Samsung Galaxy Note10"
  }, {
    heading: undefined,
    content: "360 x 760"
  }, {
    heading: undefined,
    content: "Samsung Galaxy Note 9"
  }, {
    heading: undefined,
    content: "360 x 740"
  }, {
    heading: undefined,
    content: "Samsung Galaxy Note 4"
  }, {
    heading: undefined,
    content: "480 x 853"
  }, {
    heading: undefined,
    content: "Samsung Galaxy Note5"
  }, {
    heading: undefined,
    content: "480 x 853"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S5"
  }, {
    heading: undefined,
    content: "360 x 640"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S7 (S7, S6, S6 Edge)"
  }, {
    heading: undefined,
    content: "360 x 640"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S7 Edge"
  }, {
    heading: undefined,
    content: "360 x 640"
  }],
  headings: []
};
export let toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["When you enable the mobile web mode (", _jsx(_components.code, {
        children: "mobile"
      }), " is ", _jsx(_components.code, {
        children: "true"
      }), "), and start web page recording. Agora recommends that you set the width and height of the output video according to the following video resolution:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Apple device"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Width x Height"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 13"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "390 x 844"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 13 mini"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "375 x 812"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 13 Pro Max"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "428 x 926"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 13 Pro"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "390 x 844"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 12"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "390 x 844"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 12 mini"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "375 x 812"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 12 Pro Max"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "428 x 926"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 12 Pro"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "390 x 844"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 11 Pro Max"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "414 x 896"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 11 Pro"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "375 x 812"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 11"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "414 x 896"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone XR"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "414 x 896"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone XS"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "375 x 812"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone XS Max"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "414 x 896"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone X"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "375 x 812"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 8 Plus"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "414 x 736"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 8"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "375 x 667"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 7 Plus"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "414 x 736"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 7"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "375 x 667"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 6 Plus/6S Plus"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "414 x 736"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 6/6S"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "375 x 667"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 5"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "320 x 568"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPod Touch"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "320 x 568"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPad Pro"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1024 x 1366"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPad Third & Fourth Generation"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "768 x 1024"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPad Air 1 & 2"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "768 x 1024"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPad Mini 2 & 3"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "768 x 1024"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPad Mini"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "768 x 1024"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone XR"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "414 x 896"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone XS"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "375 x 812"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone XS Max"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "414 x 896"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone X"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "375 x 812"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 8 Plus"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "414 x 736"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 8"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "375 x 667"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 7 Plus"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "414 x 736"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 7"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "375 x 667"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 6 Plus/6S Plus"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "414 x 736"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 6/6S"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "375 x 667"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPhone 5"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "320 x 568"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPod Touch"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "320 x 568"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPad Pro"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1024 x 1366"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPad Third & Fourth Generation"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "768 x 1024"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPad Air 1 & 2"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "768 x 1024"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPad Mini 2 & 3"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "768 x 1024"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "iPad Mini"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "768 x 1024"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "HUAWEI device"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Width x Height"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HUAWEI Mate 40 Pro(Pro+,RS)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "448 x 924"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HUAWEI Mate 40"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 792"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HUAWEI P40 Pro"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "400 x 880"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HUAWEI P40"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 780"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HUAWEI P30 Pro"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 780"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HUAWEI P30"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 780"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HUAWEI nova 5i"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 770"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HUAWEI nova 5(5,5Pro)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 780"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HUAWEI nova 4e"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 771"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HUAWEI nova 4"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 770"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HUAWEI nova 3i"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 780"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HUAWEI Mate30 Pro"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "392 x 800"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HUAWEI Mate30"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 780"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HUAWEI Mate20 RS"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 780"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HUAWEI Mate20 Pro"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 780"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HUAWEI Mate20 X (X,5G)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 748"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HUAWEI Mate20"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 748"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HUAWEI P20 Pro"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 748"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HUAWEI P20"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 748"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HUAWEI P10"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 640"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "HUAWEI P10 Plus"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 640"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Google device"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Width x Height"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Nexus 6P"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "412 x 732"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Nexus 5X"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "412 x 732"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Google Pixel 4 XL"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "412 x 869"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Google Pixel 4"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "412 x 869"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Google Pixel 3a XL"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "412 x 824"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Google Pixel 3a"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "412 x 846"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Google Pixel 3 XL"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "412 x 847"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Google Pixel 3"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "412 x 824"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Google Pixel 2 XL"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "412 x 732"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Google Pixel XL"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "412 x 732"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Google Pixel"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "412 x 732"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy Note 10+"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "412 x 869"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy Note 10"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "412 x 869"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy Note 9"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 740"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy Note 5"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "480 x 853"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "LG G5"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "480 x 853"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "One Plus 3"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "480 x 853"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy S9+"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 740"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy S9"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 740"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy S8+"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 740"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy S8"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 740"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy S7 Edge"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 640"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy S7"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 640"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Nexus 9"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "768 x 1024"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Nexus 7 (2013)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "600 x 960"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Pixel C"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "900 x 1280"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy Tab 10"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "800 x 1280"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Chromebook Pixel"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1280 x 850"
          })]
        })]
      })]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "SAMSUNG device"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Width x Height"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy S21 Ultra 5G"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "480 x 1067"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy S21+ 5G"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 800"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy S21 5G"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 800"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy S20 FE 5G"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 867"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy S20 5G"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 760"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy S20+ 5G"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 760"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy S20 Ultra 5G"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 760"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy A70（A70，A80）"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 800"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy A60"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 780"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy A40s"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 780"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy A8s"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 780"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy S10e"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 760"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy S10+"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 760"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy S10"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 760"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy S9"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 740"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy S9+"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 740"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy S8"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 740"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy S8+"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 740"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy Note10 5G"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 760"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy Note10"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 760"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy Note 9"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 740"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy Note 4"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "480 x 853"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy Note5"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "480 x 853"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy S5"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 640"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy S7 (S7, S6, S6 Edge)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 640"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Samsung Galaxy S7 Edge"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "360 x 640"
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
