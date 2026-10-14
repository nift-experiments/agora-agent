import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "How can I set the page recording output resolution in mobile web page mode?"
};
export let _markdown = `

When you enable the mobile web page mode and perform page recording (\`mobile\` is set to \`true\`), Agora recommends that you set the width and height of the output video according to the following video resolution table:

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">
      Apple
    </TabsTrigger>

    <TabsTrigger value="tab2">
      Huawei
    </TabsTrigger>

    <TabsTrigger value="tab3">
      Xiaomi
    </TabsTrigger>

    <TabsTrigger value="tab4">
      Google
    </TabsTrigger>

    <TabsTrigger value="tab5">
      Samsung
    </TabsTrigger>

    <TabsTrigger value="tab6">
      Other
    </TabsTrigger>
  </TabsList>

  <TabsContent value="tab1">
    | Model                          | Width x Height |
    | :----------------------------- | :------------- |
    | iPhone 13                      | 390 × 844      |
    | iPhone 13 mini                 | 375 × 812      |
    | iPhone 13 Pro Max              | 428 × 926      |
    | iPhone 13 Pro                  | 390 × 844      |
    | iPhone 12                      | 390 × 844      |
    | iPhone 12 mini                 | 375 × 812      |
    | iPhone 12 Pro Max              | 428 × 926      |
    | iPhone 12 Pro                  | 390 × 844      |
    | iPhone 11 Pro Max              | 414 × 896      |
    | iPhone 11 Pro                  | 375 × 812      |
    | iPhone 11                      | 414 × 896      |
    | iPhone XR                      | 414 × 896      |
    | iPhone XS                      | 375 × 812      |
    | iPhone XS Max                  | 414 × 896      |
    | iPhone X                       | 375 × 812      |
    | iPhone 8 Plus                  | 414 × 736      |
    | iPhone 8                       | 375 × 667      |
    | iPhone 7 Plus                  | 414 × 736      |
    | iPhone 7                       | 375 × 667      |
    | iPhone 6 Plus/6S Plus          | 414 × 736      |
    | iPhone 6/6S                    | 375 × 667      |
    | iPhone 5                       | 320 × 568      |
    | iPod Touch                     | 320 × 568      |
    | iPad Pro                       | 1024 × 1366    |
    | iPad Third & Fourth Generation | 768 × 1024     |
    | iPad Air 1 & 2                 | 768 × 1024     |
    | iPad Mini 2 & 3                | 768 × 1024     |
    | iPad Mini                      | 768 × 1024     |
  </TabsContent>

  <TabsContent value="tab2">
    | Model                         | Width x Height |
    | :---------------------------- | :------------- |
    | HUAWEI Mate 40 Pro (Pro+, RS) | 448 × 924      |
    | HUAWEI Mate 40                | 360 × 792      |
    | HUAWEI P40 Pro                | 400 × 880      |
    | HUAWEI P40                    | 360 × 780      |
    | HUAWEI P30 Pro                | 360 × 780      |
    | HUAWEI P30                    | 360 × 780      |
    | HUAWEI nova 5i                | 360 × 770      |
    | HUAWEI nova 5 (5, 5Pro)       | 360 × 780      |
    | HUAWEI nova 4e                | 360 × 771      |
    | HUAWEI nova 4                 | 360 × 770      |
    | HUAWEI nova 3i                | 360 × 780      |
    | HUAWEI Mate30 Pro             | 392 × 800      |
    | HUAWEI Mate30                 | 360 × 780      |
    | HUAWEI Mate20 RS              | 360 × 780      |
    | HUAWEI Mate20 Pro             | 360 × 780      |
    | HUAWEI Mate20X (X, 5G)        | 360 × 748      |
    | HUAWEI Mate20                 | 360 × 748      |
    | HUAWEI P20 Pro                | 360 × 748      |
    | HUAWEI P20                    | 360 × 748      |
    | HUAWEI P10                    | 360 × 640      |
    | HUAWEI P10 Plus               | 360 × 640      |
  </TabsContent>

  <TabsContent value="tab3">
    | Model                                       | Width x Height |
    | :------------------------------------------ | :------------- |
    | Xiaomi CC9                                  | 360 × 780      |
    | Xiaomi CC9e                                 | 360 × 780      |
    | Xiaomi 9 (9, 9Pro 5G)                       | 360 × 780      |
    | Xiaomi MIX 3                                | 360 × 780      |
    | Xiaomi MIX 2 (MIX2, MIX2s)                  | 360 × 720      |
    | Xiaomi MIX                                  | 360 × 680      |
    | Xiaomi Note 3                               | 360 × 640      |
    | Xiaomi Note 2                               | 360 × 640      |
    | Xiaomi 6                                    | 360 × 640      |
    | Xiaomi 5s                                   | 360 × 640      |
    | Xiaomi 5s Plus                              | 360 × 640      |
    | Xiaomi Max                                  | 360 × 640      |
    | Redmi K20 (K20, K20 Pro, K20 Pro exclusive) | 360 × 780      |
    | Redmi Note 7 (7, 7 Pro, 8, 8 Pro)           | 360 × 780      |
    | Redmi Note 4 (4, Note 4X)                   | 360 × 640      |
    | Redmi 4 (4, 4X)                             | 360 × 640      |
  </TabsContent>

  <TabsContent value="tab4">
    | Model              | Width x Height |
    | :----------------- | :------------- |
    | Nexus 6P           | 412 × 732      |
    | Nexus 5X           | 412 × 732      |
    | Google Pixel 4 XL  | 412 × 869      |
    | Google Pixel 4     | 412 × 869      |
    | Google Pixel 3a XL | 412 × 824      |
    | Google Pixel 3a    | 412 × 846      |
    | Google Pixel 3 XL  | 412 × 847      |
    | Google Pixel 3     | 412 × 824      |
    | Google Pixel 2 XL  | 412 × 732      |
    | Google Pixel XL    | 412 × 732      |
    | Google Pixel       | 412 × 732      |
    | Nexus 9            | 768 × 1024     |
    | Nexus 7 (2013)     | 600 × 960      |
    | Pixel C            | 900 × 1280     |
    | Chromebook Pixel   | 1280 × 850     |
  </TabsContent>

  <TabsContent value="tab5">
    | Model                               | Width x Height |
    | :---------------------------------- | :------------- |
    | Samsung Galaxy S21 Ultra 5G         | 480 × 1067     |
    | Samsung Galaxy S21+ 5G              | 360 × 800      |
    | Samsung Galaxy S21 5G               | 360 × 800      |
    | Samsung Galaxy S20 FE 5G            | 360 × 867      |
    | Samsung Galaxy S20 5G               | 360 × 760      |
    | Samsung Galaxy S20+ 5G              | 360 × 760      |
    | Samsung Galaxy S20 Ultra 5G         | 360 × 760      |
    | Samsung Galaxy A70 (A70, A80)       | 360 × 800      |
    | Samsung Galaxy A60                  | 360 × 780      |
    | Samsung Galaxy A40s                 | 360 × 780      |
    | Samsung Galaxy A8s                  | 360 × 780      |
    | Samsung Galaxy S10e                 | 360 × 760      |
    | Samsung Galaxy S10+                 | 360 × 760      |
    | Samsung Galaxy S10                  | 360 × 760      |
    | Samsung Galaxy S9                   | 360 × 740      |
    | Samsung Galaxy S9+                  | 360 × 740      |
    | Samsung Galaxy S8                   | 360 × 740      |
    | Samsung Galaxy S8+                  | 360 × 740      |
    | Samsung Galaxy Note10 5G            | 360 × 760      |
    | Samsung Galaxy Note10               | 360 × 760      |
    | Samsung Galaxy Note 9               | 360 × 740      |
    | Samsung Galaxy Note 4               | 480 × 853      |
    | Samsung Galaxy Note5                | 480 × 853      |
    | Samsung Galaxy S5                   | 360 × 640      |
    | Samsung Galaxy S7 (S7, S6, S6 Edge) | 360 × 640      |
    | Samsung Galaxy S7 Edge              | 360 × 640      |
    | Samsung Galaxy Note 10+             | 412 × 869      |
    | Samsung Galaxy Note 10              | 412 × 869      |
    | Samsung Galaxy Note 9               | 360 × 740      |
    | Samsung Galaxy Note 5               | 480 × 853      |
    | Samsung Galaxy S9+                  | 360 × 740      |
    | Samsung Galaxy S9                   | 360 × 740      |
    | Samsung Galaxy S8+                  | 360 × 740      |
    | Samsung Galaxy S8                   | 360 × 740      |
    | Samsung Galaxy S7 Edge              | 360 × 640      |
    | Samsung Galaxy S7                   | 360 × 640      |
    | Samsung Galaxy Tab 10               | 800 × 1280     |
  </TabsContent>

  <TabsContent value="tab6">
    | Model | Width x Height |
    | :---- | :------------- |
    | LG G5 | 480 × 853      |
  </TabsContent>
</Tabs>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "When you enable the mobile web page mode and perform page recording (`mobile` is set to `true`), Agora recommends that you set the width and height of the output video according to the following video resolution table:"
  }, {
    heading: undefined,
    content: "Model"
  }, {
    heading: undefined,
    content: "Width x Height"
  }, {
    heading: undefined,
    content: "iPhone 13"
  }, {
    heading: undefined,
    content: "390 × 844"
  }, {
    heading: undefined,
    content: "iPhone 13 mini"
  }, {
    heading: undefined,
    content: "375 × 812"
  }, {
    heading: undefined,
    content: "iPhone 13 Pro Max"
  }, {
    heading: undefined,
    content: "428 × 926"
  }, {
    heading: undefined,
    content: "iPhone 13 Pro"
  }, {
    heading: undefined,
    content: "390 × 844"
  }, {
    heading: undefined,
    content: "iPhone 12"
  }, {
    heading: undefined,
    content: "390 × 844"
  }, {
    heading: undefined,
    content: "iPhone 12 mini"
  }, {
    heading: undefined,
    content: "375 × 812"
  }, {
    heading: undefined,
    content: "iPhone 12 Pro Max"
  }, {
    heading: undefined,
    content: "428 × 926"
  }, {
    heading: undefined,
    content: "iPhone 12 Pro"
  }, {
    heading: undefined,
    content: "390 × 844"
  }, {
    heading: undefined,
    content: "iPhone 11 Pro Max"
  }, {
    heading: undefined,
    content: "414 × 896"
  }, {
    heading: undefined,
    content: "iPhone 11 Pro"
  }, {
    heading: undefined,
    content: "375 × 812"
  }, {
    heading: undefined,
    content: "iPhone 11"
  }, {
    heading: undefined,
    content: "414 × 896"
  }, {
    heading: undefined,
    content: "iPhone XR"
  }, {
    heading: undefined,
    content: "414 × 896"
  }, {
    heading: undefined,
    content: "iPhone XS"
  }, {
    heading: undefined,
    content: "375 × 812"
  }, {
    heading: undefined,
    content: "iPhone XS Max"
  }, {
    heading: undefined,
    content: "414 × 896"
  }, {
    heading: undefined,
    content: "iPhone X"
  }, {
    heading: undefined,
    content: "375 × 812"
  }, {
    heading: undefined,
    content: "iPhone 8 Plus"
  }, {
    heading: undefined,
    content: "414 × 736"
  }, {
    heading: undefined,
    content: "iPhone 8"
  }, {
    heading: undefined,
    content: "375 × 667"
  }, {
    heading: undefined,
    content: "iPhone 7 Plus"
  }, {
    heading: undefined,
    content: "414 × 736"
  }, {
    heading: undefined,
    content: "iPhone 7"
  }, {
    heading: undefined,
    content: "375 × 667"
  }, {
    heading: undefined,
    content: "iPhone 6 Plus/6S Plus"
  }, {
    heading: undefined,
    content: "414 × 736"
  }, {
    heading: undefined,
    content: "iPhone 6/6S"
  }, {
    heading: undefined,
    content: "375 × 667"
  }, {
    heading: undefined,
    content: "iPhone 5"
  }, {
    heading: undefined,
    content: "320 × 568"
  }, {
    heading: undefined,
    content: "iPod Touch"
  }, {
    heading: undefined,
    content: "320 × 568"
  }, {
    heading: undefined,
    content: "iPad Pro"
  }, {
    heading: undefined,
    content: "1024 × 1366"
  }, {
    heading: undefined,
    content: "iPad Third & Fourth Generation"
  }, {
    heading: undefined,
    content: "768 × 1024"
  }, {
    heading: undefined,
    content: "iPad Air 1 & 2"
  }, {
    heading: undefined,
    content: "768 × 1024"
  }, {
    heading: undefined,
    content: "iPad Mini 2 & 3"
  }, {
    heading: undefined,
    content: "768 × 1024"
  }, {
    heading: undefined,
    content: "iPad Mini"
  }, {
    heading: undefined,
    content: "768 × 1024"
  }, {
    heading: undefined,
    content: "Model"
  }, {
    heading: undefined,
    content: "Width x Height"
  }, {
    heading: undefined,
    content: "HUAWEI Mate 40 Pro (Pro+, RS)"
  }, {
    heading: undefined,
    content: "448 × 924"
  }, {
    heading: undefined,
    content: "HUAWEI Mate 40"
  }, {
    heading: undefined,
    content: "360 × 792"
  }, {
    heading: undefined,
    content: "HUAWEI P40 Pro"
  }, {
    heading: undefined,
    content: "400 × 880"
  }, {
    heading: undefined,
    content: "HUAWEI P40"
  }, {
    heading: undefined,
    content: "360 × 780"
  }, {
    heading: undefined,
    content: "HUAWEI P30 Pro"
  }, {
    heading: undefined,
    content: "360 × 780"
  }, {
    heading: undefined,
    content: "HUAWEI P30"
  }, {
    heading: undefined,
    content: "360 × 780"
  }, {
    heading: undefined,
    content: "HUAWEI nova 5i"
  }, {
    heading: undefined,
    content: "360 × 770"
  }, {
    heading: undefined,
    content: "HUAWEI nova 5 (5, 5Pro)"
  }, {
    heading: undefined,
    content: "360 × 780"
  }, {
    heading: undefined,
    content: "HUAWEI nova 4e"
  }, {
    heading: undefined,
    content: "360 × 771"
  }, {
    heading: undefined,
    content: "HUAWEI nova 4"
  }, {
    heading: undefined,
    content: "360 × 770"
  }, {
    heading: undefined,
    content: "HUAWEI nova 3i"
  }, {
    heading: undefined,
    content: "360 × 780"
  }, {
    heading: undefined,
    content: "HUAWEI Mate30 Pro"
  }, {
    heading: undefined,
    content: "392 × 800"
  }, {
    heading: undefined,
    content: "HUAWEI Mate30"
  }, {
    heading: undefined,
    content: "360 × 780"
  }, {
    heading: undefined,
    content: "HUAWEI Mate20 RS"
  }, {
    heading: undefined,
    content: "360 × 780"
  }, {
    heading: undefined,
    content: "HUAWEI Mate20 Pro"
  }, {
    heading: undefined,
    content: "360 × 780"
  }, {
    heading: undefined,
    content: "HUAWEI Mate20X (X, 5G)"
  }, {
    heading: undefined,
    content: "360 × 748"
  }, {
    heading: undefined,
    content: "HUAWEI Mate20"
  }, {
    heading: undefined,
    content: "360 × 748"
  }, {
    heading: undefined,
    content: "HUAWEI P20 Pro"
  }, {
    heading: undefined,
    content: "360 × 748"
  }, {
    heading: undefined,
    content: "HUAWEI P20"
  }, {
    heading: undefined,
    content: "360 × 748"
  }, {
    heading: undefined,
    content: "HUAWEI P10"
  }, {
    heading: undefined,
    content: "360 × 640"
  }, {
    heading: undefined,
    content: "HUAWEI P10 Plus"
  }, {
    heading: undefined,
    content: "360 × 640"
  }, {
    heading: undefined,
    content: "Model"
  }, {
    heading: undefined,
    content: "Width x Height"
  }, {
    heading: undefined,
    content: "Xiaomi CC9"
  }, {
    heading: undefined,
    content: "360 × 780"
  }, {
    heading: undefined,
    content: "Xiaomi CC9e"
  }, {
    heading: undefined,
    content: "360 × 780"
  }, {
    heading: undefined,
    content: "Xiaomi 9 (9, 9Pro 5G)"
  }, {
    heading: undefined,
    content: "360 × 780"
  }, {
    heading: undefined,
    content: "Xiaomi MIX 3"
  }, {
    heading: undefined,
    content: "360 × 780"
  }, {
    heading: undefined,
    content: "Xiaomi MIX 2 (MIX2, MIX2s)"
  }, {
    heading: undefined,
    content: "360 × 720"
  }, {
    heading: undefined,
    content: "Xiaomi MIX"
  }, {
    heading: undefined,
    content: "360 × 680"
  }, {
    heading: undefined,
    content: "Xiaomi Note 3"
  }, {
    heading: undefined,
    content: "360 × 640"
  }, {
    heading: undefined,
    content: "Xiaomi Note 2"
  }, {
    heading: undefined,
    content: "360 × 640"
  }, {
    heading: undefined,
    content: "Xiaomi 6"
  }, {
    heading: undefined,
    content: "360 × 640"
  }, {
    heading: undefined,
    content: "Xiaomi 5s"
  }, {
    heading: undefined,
    content: "360 × 640"
  }, {
    heading: undefined,
    content: "Xiaomi 5s Plus"
  }, {
    heading: undefined,
    content: "360 × 640"
  }, {
    heading: undefined,
    content: "Xiaomi Max"
  }, {
    heading: undefined,
    content: "360 × 640"
  }, {
    heading: undefined,
    content: "Redmi K20 (K20, K20 Pro, K20 Pro exclusive)"
  }, {
    heading: undefined,
    content: "360 × 780"
  }, {
    heading: undefined,
    content: "Redmi Note 7 (7, 7 Pro, 8, 8 Pro)"
  }, {
    heading: undefined,
    content: "360 × 780"
  }, {
    heading: undefined,
    content: "Redmi Note 4 (4, Note 4X)"
  }, {
    heading: undefined,
    content: "360 × 640"
  }, {
    heading: undefined,
    content: "Redmi 4 (4, 4X)"
  }, {
    heading: undefined,
    content: "360 × 640"
  }, {
    heading: undefined,
    content: "Model"
  }, {
    heading: undefined,
    content: "Width x Height"
  }, {
    heading: undefined,
    content: "Nexus 6P"
  }, {
    heading: undefined,
    content: "412 × 732"
  }, {
    heading: undefined,
    content: "Nexus 5X"
  }, {
    heading: undefined,
    content: "412 × 732"
  }, {
    heading: undefined,
    content: "Google Pixel 4 XL"
  }, {
    heading: undefined,
    content: "412 × 869"
  }, {
    heading: undefined,
    content: "Google Pixel 4"
  }, {
    heading: undefined,
    content: "412 × 869"
  }, {
    heading: undefined,
    content: "Google Pixel 3a XL"
  }, {
    heading: undefined,
    content: "412 × 824"
  }, {
    heading: undefined,
    content: "Google Pixel 3a"
  }, {
    heading: undefined,
    content: "412 × 846"
  }, {
    heading: undefined,
    content: "Google Pixel 3 XL"
  }, {
    heading: undefined,
    content: "412 × 847"
  }, {
    heading: undefined,
    content: "Google Pixel 3"
  }, {
    heading: undefined,
    content: "412 × 824"
  }, {
    heading: undefined,
    content: "Google Pixel 2 XL"
  }, {
    heading: undefined,
    content: "412 × 732"
  }, {
    heading: undefined,
    content: "Google Pixel XL"
  }, {
    heading: undefined,
    content: "412 × 732"
  }, {
    heading: undefined,
    content: "Google Pixel"
  }, {
    heading: undefined,
    content: "412 × 732"
  }, {
    heading: undefined,
    content: "Nexus 9"
  }, {
    heading: undefined,
    content: "768 × 1024"
  }, {
    heading: undefined,
    content: "Nexus 7 (2013)"
  }, {
    heading: undefined,
    content: "600 × 960"
  }, {
    heading: undefined,
    content: "Pixel C"
  }, {
    heading: undefined,
    content: "900 × 1280"
  }, {
    heading: undefined,
    content: "Chromebook Pixel"
  }, {
    heading: undefined,
    content: "1280 × 850"
  }, {
    heading: undefined,
    content: "Model"
  }, {
    heading: undefined,
    content: "Width x Height"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S21 Ultra 5G"
  }, {
    heading: undefined,
    content: "480 × 1067"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S21+ 5G"
  }, {
    heading: undefined,
    content: "360 × 800"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S21 5G"
  }, {
    heading: undefined,
    content: "360 × 800"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S20 FE 5G"
  }, {
    heading: undefined,
    content: "360 × 867"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S20 5G"
  }, {
    heading: undefined,
    content: "360 × 760"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S20+ 5G"
  }, {
    heading: undefined,
    content: "360 × 760"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S20 Ultra 5G"
  }, {
    heading: undefined,
    content: "360 × 760"
  }, {
    heading: undefined,
    content: "Samsung Galaxy A70 (A70, A80)"
  }, {
    heading: undefined,
    content: "360 × 800"
  }, {
    heading: undefined,
    content: "Samsung Galaxy A60"
  }, {
    heading: undefined,
    content: "360 × 780"
  }, {
    heading: undefined,
    content: "Samsung Galaxy A40s"
  }, {
    heading: undefined,
    content: "360 × 780"
  }, {
    heading: undefined,
    content: "Samsung Galaxy A8s"
  }, {
    heading: undefined,
    content: "360 × 780"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S10e"
  }, {
    heading: undefined,
    content: "360 × 760"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S10+"
  }, {
    heading: undefined,
    content: "360 × 760"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S10"
  }, {
    heading: undefined,
    content: "360 × 760"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S9"
  }, {
    heading: undefined,
    content: "360 × 740"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S9+"
  }, {
    heading: undefined,
    content: "360 × 740"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S8"
  }, {
    heading: undefined,
    content: "360 × 740"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S8+"
  }, {
    heading: undefined,
    content: "360 × 740"
  }, {
    heading: undefined,
    content: "Samsung Galaxy Note10 5G"
  }, {
    heading: undefined,
    content: "360 × 760"
  }, {
    heading: undefined,
    content: "Samsung Galaxy Note10"
  }, {
    heading: undefined,
    content: "360 × 760"
  }, {
    heading: undefined,
    content: "Samsung Galaxy Note 9"
  }, {
    heading: undefined,
    content: "360 × 740"
  }, {
    heading: undefined,
    content: "Samsung Galaxy Note 4"
  }, {
    heading: undefined,
    content: "480 × 853"
  }, {
    heading: undefined,
    content: "Samsung Galaxy Note5"
  }, {
    heading: undefined,
    content: "480 × 853"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S5"
  }, {
    heading: undefined,
    content: "360 × 640"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S7 (S7, S6, S6 Edge)"
  }, {
    heading: undefined,
    content: "360 × 640"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S7 Edge"
  }, {
    heading: undefined,
    content: "360 × 640"
  }, {
    heading: undefined,
    content: "Samsung Galaxy Note 10+"
  }, {
    heading: undefined,
    content: "412 × 869"
  }, {
    heading: undefined,
    content: "Samsung Galaxy Note 10"
  }, {
    heading: undefined,
    content: "412 × 869"
  }, {
    heading: undefined,
    content: "Samsung Galaxy Note 9"
  }, {
    heading: undefined,
    content: "360 × 740"
  }, {
    heading: undefined,
    content: "Samsung Galaxy Note 5"
  }, {
    heading: undefined,
    content: "480 × 853"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S9+"
  }, {
    heading: undefined,
    content: "360 × 740"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S9"
  }, {
    heading: undefined,
    content: "360 × 740"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S8+"
  }, {
    heading: undefined,
    content: "360 × 740"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S8"
  }, {
    heading: undefined,
    content: "360 × 740"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S7 Edge"
  }, {
    heading: undefined,
    content: "360 × 640"
  }, {
    heading: undefined,
    content: "Samsung Galaxy S7"
  }, {
    heading: undefined,
    content: "360 × 640"
  }, {
    heading: undefined,
    content: "Samsung Galaxy Tab 10"
  }, {
    heading: undefined,
    content: "800 × 1280"
  }, {
    heading: undefined,
    content: "Model"
  }, {
    heading: undefined,
    content: "Width x Height"
  }, {
    heading: undefined,
    content: "LG G5"
  }, {
    heading: undefined,
    content: "480 × 853"
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
  }, { Tabs, TabsContent, TabsList, TabsTrigger } = _components;
  if (!Tabs)
    _missingMdxReference("Tabs", true);
  if (!TabsContent)
    _missingMdxReference("TabsContent", true);
  if (!TabsList)
    _missingMdxReference("TabsList", true);
  if (!TabsTrigger)
    _missingMdxReference("TabsTrigger", true);
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["When you enable the mobile web page mode and perform page recording (", _jsx(_components.code, {
        children: "mobile"
      }), " is set to ", _jsx(_components.code, {
        children: "true"
      }), "), Agora recommends that you set the width and height of the output video according to the following video resolution table:"]
    }), `
`, _jsxs(Tabs, {
      defaultValue: "tab1",
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "tab1",
          children: "Apple"
        }), _jsx(TabsTrigger, {
          value: "tab2",
          children: "Huawei"
        }), _jsx(TabsTrigger, {
          value: "tab3",
          children: "Xiaomi"
        }), _jsx(TabsTrigger, {
          value: "tab4",
          children: "Google"
        }), _jsx(TabsTrigger, {
          value: "tab5",
          children: "Samsung"
        }), _jsx(TabsTrigger, {
          value: "tab6",
          children: "Other"
        })]
      }), _jsx(TabsContent, {
        value: "tab1",
        children: _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Model"
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
                children: "390 × 844"
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
                children: "375 × 812"
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
                children: "428 × 926"
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
                children: "390 × 844"
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
                children: "390 × 844"
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
                children: "375 × 812"
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
                children: "428 × 926"
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
                children: "390 × 844"
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
                children: "414 × 896"
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
                children: "375 × 812"
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
                children: "414 × 896"
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
                children: "414 × 896"
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
                children: "375 × 812"
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
                children: "414 × 896"
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
                children: "375 × 812"
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
                children: "414 × 736"
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
                children: "375 × 667"
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
                children: "414 × 736"
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
                children: "375 × 667"
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
                children: "414 × 736"
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
                children: "375 × 667"
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
                children: "320 × 568"
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
                children: "320 × 568"
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
                children: "1024 × 1366"
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
                children: "768 × 1024"
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
                children: "768 × 1024"
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
                children: "768 × 1024"
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
                children: "768 × 1024"
              })]
            })]
          })]
        })
      }), _jsx(TabsContent, {
        value: "tab2",
        children: _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Model"
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
                children: "HUAWEI Mate 40 Pro (Pro+, RS)"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "448 × 924"
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
                children: "360 × 792"
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
                children: "400 × 880"
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
                children: "360 × 780"
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
                children: "360 × 780"
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
                children: "360 × 780"
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
                children: "360 × 770"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "HUAWEI nova 5 (5, 5Pro)"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "360 × 780"
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
                children: "360 × 771"
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
                children: "360 × 770"
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
                children: "360 × 780"
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
                children: "392 × 800"
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
                children: "360 × 780"
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
                children: "360 × 780"
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
                children: "360 × 780"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "HUAWEI Mate20X (X, 5G)"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "360 × 748"
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
                children: "360 × 748"
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
                children: "360 × 748"
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
                children: "360 × 748"
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
                children: "360 × 640"
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
                children: "360 × 640"
              })]
            })]
          })]
        })
      }), _jsx(TabsContent, {
        value: "tab3",
        children: _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Model"
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
                children: "Xiaomi CC9"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "360 × 780"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Xiaomi CC9e"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "360 × 780"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Xiaomi 9 (9, 9Pro 5G)"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "360 × 780"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Xiaomi MIX 3"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "360 × 780"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Xiaomi MIX 2 (MIX2, MIX2s)"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "360 × 720"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Xiaomi MIX"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "360 × 680"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Xiaomi Note 3"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "360 × 640"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Xiaomi Note 2"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "360 × 640"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Xiaomi 6"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "360 × 640"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Xiaomi 5s"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "360 × 640"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Xiaomi 5s Plus"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "360 × 640"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Xiaomi Max"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "360 × 640"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Redmi K20 (K20, K20 Pro, K20 Pro exclusive)"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "360 × 780"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Redmi Note 7 (7, 7 Pro, 8, 8 Pro)"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "360 × 780"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Redmi Note 4 (4, Note 4X)"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "360 × 640"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Redmi 4 (4, 4X)"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "360 × 640"
              })]
            })]
          })]
        })
      }), _jsx(TabsContent, {
        value: "tab4",
        children: _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Model"
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
                children: "412 × 732"
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
                children: "412 × 732"
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
                children: "412 × 869"
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
                children: "412 × 869"
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
                children: "412 × 824"
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
                children: "412 × 846"
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
                children: "412 × 847"
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
                children: "412 × 824"
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
                children: "412 × 732"
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
                children: "412 × 732"
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
                children: "412 × 732"
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
                children: "768 × 1024"
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
                children: "600 × 960"
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
                children: "900 × 1280"
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
                children: "1280 × 850"
              })]
            })]
          })]
        })
      }), _jsx(TabsContent, {
        value: "tab5",
        children: _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Model"
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
                children: "480 × 1067"
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
                children: "360 × 800"
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
                children: "360 × 800"
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
                children: "360 × 867"
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
                children: "360 × 760"
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
                children: "360 × 760"
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
                children: "360 × 760"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Samsung Galaxy A70 (A70, A80)"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "360 × 800"
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
                children: "360 × 780"
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
                children: "360 × 780"
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
                children: "360 × 780"
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
                children: "360 × 760"
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
                children: "360 × 760"
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
                children: "360 × 760"
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
                children: "360 × 740"
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
                children: "360 × 740"
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
                children: "360 × 740"
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
                children: "360 × 740"
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
                children: "360 × 760"
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
                children: "360 × 760"
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
                children: "360 × 740"
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
                children: "480 × 853"
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
                children: "480 × 853"
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
                children: "360 × 640"
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
                children: "360 × 640"
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
                children: "360 × 640"
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
                children: "412 × 869"
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
                children: "412 × 869"
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
                children: "360 × 740"
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
                children: "480 × 853"
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
                children: "360 × 740"
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
                children: "360 × 740"
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
                children: "360 × 740"
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
                children: "360 × 740"
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
                children: "360 × 640"
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
                children: "360 × 640"
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
                children: "800 × 1280"
              })]
            })]
          })]
        })
      }), _jsx(TabsContent, {
        value: "tab6",
        children: _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Model"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Width x Height"
              })]
            })
          }), _jsx(_components.tbody, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "LG G5"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "480 × 853"
              })]
            })
          })]
        })
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
